import { type Ref } from "react";
import { type CBFilterOption } from "../CBFilterBar";
import type { CBDataTableHandle, CBDataTableProps, CBTableFetcher, CBTableSort } from "../../types/componentsDataTable";
export interface CBDataTableWithFilterProps<T, F = Record<string, unknown>> extends Omit<CBDataTableProps<T>, "data"> {
    /**
     * Dados exibidos (modo local). A busca e a paginação acontecem no front.
     * Ignorado quando `fetchData` é informado.
     */
    data?: T[];
    filterColumns?: CBFilterOption<T>[];
    filterPlaceholder?: string;
    filterClassName?: string;
    /**
     * Modo servidor: a tabela monta a consulta (página, tamanho, busca,
     * ordenação e `filters`) e chama esta função a cada mudança.
     *
     * @example
     * ```tsx
     * fetchData={async (query, signal) => {
     *   const res = await api.get("/produtos", { params: toParams(query), signal });
     *   return { rows: res.data.data, total: res.data.total };
     * }}
     * ```
     */
    fetchData?: CBTableFetcher<T, F>;
    /**
     * Filtros externos repassados ao `fetchData` em `query.filters`.
     * Quando o conteúdo muda, volta para a página 0 e busca de novo.
     */
    filters?: F;
    /** Ordenação inicial no modo `fetchData`. */
    initialSort?: CBTableSort | null;
    /**
     * Debounce da busca digitada no modo `fetchData`.
     * @default 400
     */
    searchDebounceMs?: number;
    /** Chamado quando o `fetchData` falha. */
    onFetchError?: (error: unknown) => void;
    /** Expõe `reload()` e `setPage()` no modo `fetchData`. */
    tableRef?: Ref<CBDataTableHandle>;
}
/**
 * CBDataTableWithFilter
 *
 * Tabela com barra de busca. Funciona em dois modos:
 *
 * - **Local** (`data`): busca e paginação acontecem no front.
 * - **Servidor** (`fetchData`): a tabela controla página, tamanho, busca,
 *   ordenação e filtros, chama `fetchData` e recarrega após `onDelete`.
 *
 * @example
 * ```tsx
 * <CBDataTableWithFilter
 *   columns={columns}
 *   getRowId={(row) => row.id}
 *   filters={{ status }}
 *   fetchData={productApi.tableSource()}
 *   filterColumns={[{ label: "Nome", value: "name" }]}
 *   onDelete={(row) => productApi.deleteById(row.id)}
 * />
 * ```
 */
declare function CBDataTableWithFilter<T, F = Record<string, unknown>>({ data, filterColumns, filterPlaceholder, filterClassName, theme, fetchData, filters, initialSort, searchDebounceMs, onFetchError, tableRef, ...tableProps }: CBDataTableWithFilterProps<T, F>): import("react").JSX.Element;
export default CBDataTableWithFilter;
