import {IMusician} from "~/interfaces/musician.interface";

export type SuitTableProps = {
    musician: IMusician
}
export default function SuitStats(props: SuitTableProps) {
    const {musician} = props;
    const {suit} = musician;
    const sizes = suit.map((item) => item.size);
    const mostCommonSize = sizes.sort((a, b) => {
        return sizes.filter((v) => v === a).length - sizes.filter((v) => v === b).length;
    }).pop();

    let suitElementCount = 0;
    suit.forEach((item) => {
        suitElementCount += item.quantity;
    });

    const date = new Date(musician.updatedAt);
    const dateInFrench = date.toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'});
    return (
        <div className="stats shadow">
            <div className="stat">
                <div className="stat-title">Total d'éléments prêtés</div>
                <div className="stat-value text-primary">{suitElementCount}</div>
            </div>

            <div className="stat">
                <div className="stat-title">Taille recommandée</div>
                <div className="stat-value text-secondary">{mostCommonSize}</div>
                <div className="stat-desc">par rapport aux élément déjà prêtés</div>
            </div>

            <div className="stat">
                <div className="stat-title">Date de dernière mise à jours</div>
                <div className="stat-value">{dateInFrench}</div>
            </div>

        </div>
    )
}