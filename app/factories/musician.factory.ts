import {IMusician, IMusicianGroup, IMusicianSuitItem} from "~/interfaces/musician.interface";
import * as process from "process";
import {IRawSheetInfos, IRawSuitType} from "~/interfaces/sheetInfos.interface";
import {PupitreFactory} from "~/factories/pupitre.factory";
import {IEvent} from "~/interfaces/event.interface";

export const MusicianFactory = {
    fromRawSheetInfosToMusician: (infos: IRawSheetInfos, presences?: IEvent[]): IMusician => {
        return {
            id: infos.id,
            user_id: infos.attributes.user.data.id,
            pupitre: PupitreFactory.fromRawPupitreToPupitre(infos.attributes.pupitre.data),
            birth_date: new Date(infos.attributes.birth_date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            createdAt: infos.attributes.createdAt,
            updatedAt: infos.attributes.updatedAt,
            full_name: infos.attributes.full_name,
            first_name: infos.attributes.full_name.split(" ")[0] || infos.attributes.full_name,
            image: MusicianFactory.getMusicianImageUrlFromRawFullName(infos.attributes.full_name),
            suit: MusicianFactory.formRawSuitTypesToMusicianSuitItems(infos.attributes.suit),
            editLink: process.env.STRAPI_URL_BASE + "/admin/content-manager/collectionType/api::fiche-information.fiche-information/" + infos.id,
            presences: presences
        }
    },

    formRawSuitTypesToMusicianSuitItems(items: IRawSuitType[]): IMusicianSuitItem[] {
        return items.map((item: IRawSuitType): IMusicianSuitItem => {
            return {
                name: item.type,
                quantity: item.quantity,
                size: item.size,
            }
        });
    },

    groupMusiciansByPupitre(musicians: IMusician[]): IMusicianGroup[] {
        const musicianGroups: IMusicianGroup[] = [];
        musicians.forEach((musician: IMusician) => {
            const groupIndex = musicianGroups.findIndex((group: IMusicianGroup) => group.title === musician.pupitre.title);
            if (groupIndex === -1) {
                musicianGroups.push({
                    title: musician.pupitre.title,
                    musicians: [musician]
                })
            } else {
                musicianGroups[groupIndex].musicians.push(musician);
            }
        });

        return musicianGroups.map(musicianGroup => {
            musicianGroup.musicians = musicianGroup.musicians.sort((a, b) => {
                const aLastName = a.full_name.split(" ")[1];
                const aFirstName = a.full_name.split(" ")[0];

                const bLastName = b.full_name.split(" ")[1];
                const bFirstName = b.full_name.split(" ")[0];

                if (aLastName < bLastName) return -1;
                if (aLastName > bLastName) return 1;

                if (aFirstName < bFirstName) return -1;
                if (aFirstName > bFirstName) return 1;

                return 0;
            })

            return musicianGroup;
        });
    },

    getMusicianImageUrlFromRawFullName(full_name: string): string {
        if (!full_name) {
            return '/images/photos/default.png';
        }

        const name = full_name
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9\-.]/g, '')
        return `/images/photos/${name}.png`;
    }
}