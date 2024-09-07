import {PieceRepository} from "~/repositories/PieceRepository";
import {PieceFactory} from "~/factories/PieceFactory";
import {IPiece} from "~/interfaces/Piece.interface";

export const PieceService = {
  getCurrentPiecesList: async (): Promise<IPiece[]> => {
    const {data} = await PieceRepository.getCurrentPiecesList();
    const items = data.attributes?.piece_list_items ?? []
    const rawPieces = await Promise.all(items.map(async (piece: any) => {
      const {data} = await PieceRepository.getByID(piece.id);
      return data;
    }));
    return rawPieces.map((piece: any) => PieceFactory.fromRawPieceToPiece(piece));
  },
}