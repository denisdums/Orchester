import {Link} from "@remix-run/react";
import {IMeta} from "~/interfaces/Meta.interface";

export default function StrapiPagination(props: { meta: IMeta }) {
    const {meta} = props;

    if (!meta.pagination) return null;

    const {page, pageCount} = meta.pagination;
    const currentPage = page;
    return (
        <div className="flex justify-center">
            <div className={`${pageCount > 1 ? 'join' : ''}`}>
                {Array.from({length: pageCount}, (_, i) => i + 1).map((page, index) => (
                    <Link key={index}
                          className={`join-item btn btn-square ${currentPage === page ? 'btn-primary' : ''}`}
                          to={`/musicians?page=${page}`}>
                        {page}
                    </Link>
                ))}
            </div>
        </div>
    );
}