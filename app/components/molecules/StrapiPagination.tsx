import {IMeta} from "~/interfaces/meta.interface";
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "~/components/ui/pagination";
import {useLocation} from "@remix-run/react";


export default function StrapiPagination(props: { meta: IMeta }) {
    const {meta} = props;
    const location = useLocation();

    if (!meta.pagination) return null;

    const {page, pageCount} = meta.pagination;

    const currentPage = page;
    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;

    const firstPageIndex = 1;
    const lastPageIndex = pageCount;

    const twoBeforeArray = [];
    const twoAfterArray = [];
    const twoBeforeIndex = currentPage - 2;
    const oneBeforeIndex = currentPage - 1;
    const twoAfterIndex = currentPage + 2;
    const oneAfterIndex = currentPage + 1;

    if (twoBeforeIndex > 0) {
        twoBeforeArray.push(twoBeforeIndex);
    }
    if (oneBeforeIndex > 0) {
        twoBeforeArray.push(oneBeforeIndex);
    }
    if (oneAfterIndex <= pageCount) {
        twoAfterArray.push(oneAfterIndex);
    }
    if (twoAfterIndex <= pageCount) {
        twoAfterArray.push(twoAfterIndex);
    }

    const needBeforeEllipsis = twoBeforeIndex > firstPageIndex + 1;
    const needAfterEllipsis = twoAfterIndex < lastPageIndex - 1;


    return (
        <Pagination>
            <PaginationContent>
                {previousPage > 0 && (
                    <PaginationItem>
                        <PaginationPrevious to={`${location.pathname}?page=${previousPage}`}/>
                    </PaginationItem>
                )}
                {!twoBeforeArray.includes(firstPageIndex) && (
                    <PaginationItem>
                        <PaginationLink to={`${location.pathname}?page=${firstPageIndex}`}
                                        isActive={firstPageIndex === currentPage}>{firstPageIndex}</PaginationLink>
                    </PaginationItem>
                )}
                {needBeforeEllipsis && (
                    <PaginationItem>
                        <PaginationEllipsis/>
                    </PaginationItem>
                )}
                {twoBeforeArray && twoBeforeArray.map((index) => (
                    <PaginationItem key={index}>
                        <PaginationLink to={`${location.pathname}?page=${index}`}>{index}</PaginationLink>
                    </PaginationItem>
                ))}
                {firstPageIndex !== currentPage && lastPageIndex !== currentPage && (
                    <PaginationItem>
                        <PaginationLink to={`${location.pathname}?page=${currentPage}`}
                                        isActive={true}>{currentPage}</PaginationLink>
                    </PaginationItem>
                )}
                {twoAfterArray && twoAfterArray.map((index) => (
                    <PaginationItem key={index}>
                        <PaginationLink to={`${location.pathname}?page=${index}`}>{index}</PaginationLink>
                    </PaginationItem>
                ))}
                {needAfterEllipsis && (
                    <PaginationItem>
                        <PaginationEllipsis/>
                    </PaginationItem>
                )}
                {!twoAfterArray.includes(lastPageIndex) && (
                    <PaginationItem>
                        <PaginationLink to={`${location.pathname}?page=${lastPageIndex}`}
                                        isActive={lastPageIndex === currentPage}>{lastPageIndex}</PaginationLink>
                    </PaginationItem>
                )}
                {pageCount > 1 && nextPage <= pageCount && (
                    <PaginationItem>
                        <PaginationNext to={`${location.pathname}?page=${nextPage}`}/>
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
}