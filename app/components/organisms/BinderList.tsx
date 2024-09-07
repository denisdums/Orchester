import {IPiece} from "~/interfaces/Piece.interface";

export type BinderListProps = {
    currentPieces: IPiece[],
    className?: string
}
export default function BinderList({className, currentPieces}: BinderListProps) {
    return (
        <div className={"col-span-4 bg-base-100 " + className}>
            <h2>Contenu du classeur</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                    <tr>
                        <th>Numéro</th>
                        <th>Titre</th>
                        <th>Compositeur</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentPieces.map((piece, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{piece.title}</td>
                            <td>{piece.composer.full_name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}