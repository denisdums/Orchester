import {IMeta} from "~/interfaces/meta.interface";
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "~/components/ui/pagination";

export default function StrapiPagination(props: { meta: IMeta }) {
    const {meta} = props;

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
                        <PaginationPrevious to={`/musicians?page=${previousPage}`}/>
                    </PaginationItem>
                )}
                {!twoBeforeArray.includes(firstPageIndex) && (
                    <PaginationItem>
                        <PaginationLink to={`/musicians?page=${firstPageIndex}`}
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
                        <PaginationLink to={`/musicians?page=${index}`}>{index}</PaginationLink>
                    </PaginationItem>
                ))}
                {firstPageIndex !== currentPage && lastPageIndex !== currentPage && (
                    <PaginationItem>
                        <PaginationLink to={`/musicians?page=${currentPage}`}
                                        isActive={true}>{currentPage}</PaginationLink>
                    </PaginationItem>
                )}
                {twoAfterArray && twoAfterArray.map((index) => (
                    <PaginationItem key={index}>
                        <PaginationLink to={`/musicians?page=${index}`}>{index}</PaginationLink>
                    </PaginationItem>
                ))}
                {needAfterEllipsis && (
                    <PaginationItem>
                        <PaginationEllipsis/>
                    </PaginationItem>
                )}
                {!twoAfterArray.includes(lastPageIndex) && (
                    <PaginationItem>
                        <PaginationLink to={`/musicians?page=${lastPageIndex}`}
                                        isActive={lastPageIndex === currentPage}>{lastPageIndex}</PaginationLink>
                    </PaginationItem>
                )}
                {pageCount > 1 && nextPage <= pageCount && (
                    <PaginationItem>
                        <PaginationNext to={`/musicians?page=${nextPage}`}/>
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
}