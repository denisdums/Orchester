import {IPiece, IRawPiece} from "~/interfaces/piece.interface";

export const PieceFactory = {
    fromRawPieceToPiece: (piece: IRawPiece): IPiece => {
        return {
            id: piece.id,
            title: piece.attributes.title,
            createdAt: piece.attributes.createdAt,
            updatedAt: piece.attributes.updatedAt,
            composer: {
                id: piece.attributes.composer.data.id,
                full_name: piece.attributes.composer.data.attributes.full_name
            }
        }
    },
}