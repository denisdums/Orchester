import {IMusician, IMusicianGroup, IMusicianSuitItem} from "~/interfaces/Musician.interface";
import * as process from "process";
import {IRawSheetInfos, IRawSuitType} from "~/interfaces/SheetInfos.interface";
import {PupitreFactory} from "~/factories/PupitreFactory";

export const MusicianFactory = {
    fromRawSheetInfosToMusician: (infos: IRawSheetInfos): IMusician => {
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
            suit: MusicianFactory.formRawSuitTypesToMusicianSuitItems(infos.attributes.suit),
            editLink: process.env.STRAPI_URL_BASE + "/admin/content-manager/collectionType/api::fiche-information.fiche-information/" + infos.id,
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
        return musicianGroups;
    }
}