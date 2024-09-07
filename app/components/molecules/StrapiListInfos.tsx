import {pagination} from "instantsearch.js/es/widgets";

export default function StrapiListInfos(props: { meta: Record<string, any> }) {
    const {meta} = props;

    if (!meta.pagination) return null;

    const pageSize = parseInt(meta.pagination.pageSize)
    const itemsStart = parseInt(meta.pagination.page) * pageSize - pageSize + 1;
    const viewedItems = (parseInt(meta.pagination.page) - 1) * pageSize;
    const maxOnPage = viewedItems + parseInt(meta.pagination.pageSize) > meta.pagination.total ? meta.pagination.total : viewedItems + parseInt(meta.pagination.pageSize);

    return (
        <div className="flex items-center justify-between text-sm text-black/50">
            <span>Résultats: {itemsStart} à {maxOnPage}</span>
            <span>Nombre de résultats: {meta.pagination.total}</span>
        </div>
    );
}