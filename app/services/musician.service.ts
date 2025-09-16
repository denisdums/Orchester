import {MusicianFactory} from "~/factories/musician.factory";
import {IMusician, IMusicianGroup} from "~/interfaces/musician.interface";
import {IMeta} from "~/interfaces/meta.interface";
import {SheetInfosRepository} from "~/repositories/sheetInfos.repository";
import {IRawSheetInfos} from "~/interfaces/sheetInfos.interface";
import {EventService} from "~/services/event.service";
import {IStrapiParams} from "~/interfaces/strapi.interface";

export const MusicianService = {
    getAll: async (page: number = 1): Promise<{ musicians: IMusician[], meta: IMeta }> => {
        const {data, meta} = await SheetInfosRepository.getAll(page);
        const musicians = await Promise.all(data.map(async (rawSheetInfos: IRawSheetInfos): Promise<IMusician> => {
            const presences = await EventService.getPresencesByMusicianID(rawSheetInfos.id.toString());
            return MusicianFactory.fromRawSheetInfosToMusician(rawSheetInfos, presences);
        }));

        return {musicians, meta}
    },

    getByID: async (id: string, filters?: IStrapiParams[]): Promise<IMusician> => {
        const {data} = await SheetInfosRepository.getByID(id);
        const presences = await EventService.getPresencesByMusicianID(id, filters);
        return MusicianFactory.fromRawSheetInfosToMusician(data, presences);
    },

    getMusicianGroups: async (): Promise<{ musicianGroups: IMusicianGroup[] }> => {
        const {data} = await SheetInfosRepository.getAll(undefined, true);
        const musicians = await Promise.all(data.map(async (rawSheetInfos: IRawSheetInfos): Promise<IMusician> => {
            return MusicianFactory.fromRawSheetInfosToMusician(rawSheetInfos);
        }));

        const musicianGroups = MusicianFactory.groupMusiciansByPupitre(musicians);

        return {musicianGroups}
    },
}