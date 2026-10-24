import type { PaginationMode } from "../../../types/componentsDataTable";
interface UseTablePaginationProps<T> {
    data: T[];
    page?: number;
    pageSize: number;
    totalRows?: number;
    onPageChange?: (page: number) => void;
    paginationMode?: PaginationMode;
}
/**
 * Estado de paginação compartilhado entre as versões desktop e mobile.
 *
 * - `page` informado → controlado (quem chama decide a página)
 * - `page` omitido → interno, mas `onPageChange` continua sendo notificado
 * - Modo "server": `data` já é a página atual, nada é fatiado
 * - Modo "client": `data` é a lista completa e é fatiada aqui
 *
 * Sem `paginationMode`, mantém o comportamento antigo: com `onPageChange`
 * é "server", sem é "client".
 */
export declare function useTablePagination<T>({ data, page, pageSize, totalRows, onPageChange, paginationMode, }: UseTablePaginationProps<T>): {
    currentPage: number;
    handlePageChange: (newPage: number) => void;
    rowsCount: number;
    totalPages: number;
    pagedData: T[];
    isServer: boolean;
};
export {};
