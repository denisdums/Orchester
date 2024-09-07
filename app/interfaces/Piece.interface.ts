export interface IRawPieceList {
    id: number,
    attributes: {
        createdAt: string,
        updatedAt: string,
        piece_list_items: { id: number }[]
    }
}

export interface IRawPiece {
    id: number,
    attributes: {
        title: string,
        createdAt: string,
        updatedAt: string,
        composer: {
            data: {
                id: number,
                attributes: {
                    full_name: string,
                    createdAt: string,
                    updatedAt: string
                }
            }
        }
    }
}

export interface IPiece {
    id: number,
    title: string,
    createdAt: string,
    updatedAt: string,
    composer: {
        id: number,
        full_name: string,
    }
}
