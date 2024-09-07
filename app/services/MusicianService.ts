import {MusicianFactory} from "~/factories/MusicianFactory";
import {IMusician, IMusicianGroup} from "~/interfaces/Musician.interface";
import {IMeta} from "~/interfaces/Meta.interface";
import {SheetInfosRepository} from "~/repositories/SheetInfosRepository";
import {IRawSheetInfos} from "~/interfaces/SheetInfos.interface";

export const MusicianService = {
    getAll: async (page: number = 1): Promise<{ musicians: IMusician[], meta: IMeta }> => {
        const {data, meta} = await SheetInfosRepository.getAll(page);
        const musicians = data.map((rawSheetInfos: IRawSheetInfos): IMusician => {
            return MusicianFactory.fromRawSheetInfosToMusician(rawSheetInfos);
        });
        return {musicians, meta}
    },

    getByID: async (id: string): Promise<IMusician> => {
        const {data} = await SheetInfosRepository.getByID(id);
        return MusicianFactory.fromRawSheetInfosToMusician(data);
    },

    getMusicianGroups: async (): Promise<{ musicianGroups: IMusicianGroup[]}> => {
        const {data, meta} = await SheetInfosRepository.getAll(undefined, true);
        const musicians = data.map((rawSheetInfos: IRawSheetInfos): IMusician => {
            return MusicianFactory.fromRawSheetInfosToMusician(rawSheetInfos);
        });

        const musicianGroups = MusicianFactory.groupMusiciansByPupitre(musicians);
        return {musicianGroups}
    },
}