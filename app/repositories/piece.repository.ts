import {StrapiClient} from "~/db/Strapi";
import {IRawPiece, IRawPieceList} from "~/interfaces/piece.interface";

export const PieceRepository = {
    type: "pieces",
    getCurrentPiecesList: async (): Promise<{ data: IRawPieceList }> => {
        const {data} = await StrapiClient.find('current-pieces-list', 1, {
            params: {
                populate: "*",
            }
        });
        return {data}
    },

    getByID: async (id: string): Promise<{data: IRawPiece}> => {
        return await StrapiClient.findOne(PieceRepository.type, id, {
            params: {
                populate: "*"
            }
        });
    },
}