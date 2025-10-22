import {PieceRepository} from "~/repositories/piece.repository";
import {PieceFactory} from "~/factories/piece.factory";
import {IPiece} from "~/interfaces/piece.interface";

export const PieceService = {
    getCurrentPiecesList: async (): Promise<IPiece[]> => {
        const list = await PieceRepository.getCurrentPiecesList();

        if (!list?.data) {
            return [];
        }

        const items = list?.data.attributes?.piece_list_items ?? []
        console.log(items);
        const rawPieces = await Promise.all(items.map(async (piece: any) => {
            const {data} = await PieceRepository.getByID(piece.id);
            return data;
        }));
        return rawPieces.map((piece: any) => PieceFactory.fromRawPieceToPiece(piece));
    },
}