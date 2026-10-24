import type { CBTableFetcher, CBTableSearch, CBTableSort } from "../../../types/componentsDataTable";
export interface UseCBTableQueryOptions<T, F> {
    /** Função que busca uma página no backend. */
    fetchData?: CBTableFetcher<T, F>;
    /**
     * Filtros externos (ex: um `CBSegment`). Quando o conteúdo muda,
     * a tabela volta para a página 0 e busca de novo.
     */
    filters?: F;
    /** @default 20 */
    initialPageSize?: number;
    initialSort?: CBTableSort | null;
    /** Desliga as buscas (ex: enquanto um filtro obrigatório não foi escolhido). */
    enabled?: boolean;
    /** Chamado quando o `fetchData` falha (requests canceladas são ignoradas). */
    onError?: (error: unknown) => void;
}
/**
 * useCBTableQuery
 *
 * Cuida de todo o estado de uma tabela paginada no servidor:
 * página, tamanho, ordenação, busca, filtros externos, loading e erro.
 *
 * - Volta para a página 0 quando busca, filtros, ordenação ou tamanho mudam
 * - Cancela a request anterior quando uma nova começa (repasse o `signal`)
 * - Mantém as linhas atuais na tela enquanto a próxima página carrega
 * - Se a página ficar vazia (ex: excluiu o último item), volta para a última válida
 *
 * Usado internamente pelo `CBDataTableWithFilter` quando recebe `fetchData`,
 * mas pode ser usado direto com `CBDataTable` via `tableProps`.
 *
 * @example
 * ```tsx
 * const query = useCBTableQuery({
 *   fetchData: (q, signal) => api.search(q, signal),
 *   filters: { status },
 * });
 *
 * <CBDataTable columns={columns} getRowId={(r) => r.id} {...query.tableProps} />
 * ```
 */
export declare function useCBTableQuery<T, F = Record<string, unknown>>({ fetchData, filters, initialPageSize, initialSort, enabled, onError, }: UseCBTableQueryOptions<T, F>): {
    rows: T[];
    total: number;
    loading: boolean;
    error: unknown;
    page: number;
    pageSize: number;
    sort: CBTableSort | null;
    search: CBTableSearch | undefined;
    setPage: import("react").Dispatch<import("react").SetStateAction<number>>;
    setPageSize: (size: number) => void;
    setSort: (next: CBTableSort | null) => void;
    setSearch: (next: CBTableSearch | undefined) => void;
    reload: () => void;
    /** Props prontas para espalhar no `CBDataTable`. */
    tableProps: {
        data: T[];
        page: number;
        pageSize: number;
        totalRows: number;
        loading: boolean;
        paginationMode: "server";
        onPageChange: import("react").Dispatch<import("react").SetStateAction<number>>;
        onPageSizeChange: (size: number) => void;
        sort: CBTableSort | null;
        onSortChange: (next: CBTableSort | null) => void;
    };
};
export default useCBTableQuery;
