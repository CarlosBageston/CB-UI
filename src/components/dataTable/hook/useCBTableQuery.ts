import { useCallback, useEffect, useRef, useState } from "react";
import type {
  CBTableFetcher,
  CBTableSearch,
  CBTableSort,
} from "../../../types/componentsDataTable";

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

const isAbortError = (error: unknown) =>
  error instanceof Error &&
  (error.name === "AbortError" || error.name === "CanceledError");

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
export function useCBTableQuery<T, F = Record<string, unknown>>({
  fetchData,
  filters,
  initialPageSize = 20,
  initialSort = null,
  enabled = true,
  onError,
}: UseCBTableQueryOptions<T, F>) {
  const [rows, setRows] = useState<T[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const [page, setPage] = useState(0);
  const [pageSize, setPageSizeState] = useState(initialPageSize);
  const [sort, setSortState] = useState<CBTableSort | null>(initialSort);
  const [search, setSearchState] = useState<CBTableSearch | undefined>();
  const [reloadToken, setReloadToken] = useState(0);

  // Sempre a versão mais recente, sem disparar busca quando só a identidade muda
  const fetchRef = useRef(fetchData);
  fetchRef.current = fetchData;
  const filtersRef = useRef(filters);
  filtersRef.current = filters;
  const onErrorRef = useRef(onError);
  onErrorRef.current = onError;

  // Filtros externos: compara por conteúdo e volta para a página 0 no mesmo render
  const filtersKey = JSON.stringify(filters ?? null);
  const [prevFiltersKey, setPrevFiltersKey] = useState(filtersKey);
  if (filtersKey !== prevFiltersKey) {
    setPrevFiltersKey(filtersKey);
    setPage(0);
  }

  const searchKey = search ? JSON.stringify(search) : "";
  const sortKey = sort ? `${sort.field}:${sort.direction}` : "";

  useEffect(() => {
    const fetcher = fetchRef.current;
    if (!enabled || !fetcher) return;

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetcher(
      {
        page,
        pageSize,
        search,
        sort: sort ?? undefined,
        filters: (filtersRef.current ?? {}) as F,
      },
      controller.signal,
    )
      .then((result) => {
        if (controller.signal.aborted) return;

        // Página ficou vazia (ex: excluiu o último item): volta para a última válida
        if (result.rows.length === 0 && page > 0 && result.total > 0) {
          setPage(Math.max(0, Math.ceil(result.total / pageSize) - 1));
          return;
        }

        setRows(result.rows);
        setTotal(result.total);
        setLoading(false);
      })
      .catch((err) => {
        if (controller.signal.aborted || isAbortError(err)) return;
        setError(err);
        setLoading(false);
        onErrorRef.current?.(err);
      });

    return () => controller.abort();
    // search/sort entram via chave estável (searchKey/sortKey)
  }, [enabled, page, pageSize, searchKey, sortKey, filtersKey, reloadToken]);

  const reload = useCallback(() => setReloadToken((t) => t + 1), []);

  const setPageSize = useCallback((size: number) => {
    setPageSizeState(size);
    setPage(0);
  }, []);

  const setSort = useCallback((next: CBTableSort | null) => {
    setSortState(next);
    setPage(0);
  }, []);

  const setSearch = useCallback((next: CBTableSearch | undefined) => {
    setSearchState(next?.term ? next : undefined);
    setPage(0);
  }, []);

  return {
    rows,
    total,
    loading,
    error,
    page,
    pageSize,
    sort,
    search,
    setPage,
    setPageSize,
    setSort,
    setSearch,
    reload,
    /** Props prontas para espalhar no `CBDataTable`. */
    tableProps: {
      data: rows,
      page,
      pageSize,
      totalRows: total,
      loading,
      paginationMode: "server" as const,
      onPageChange: setPage,
      onPageSizeChange: setPageSize,
      sort,
      onSortChange: setSort,
    },
  };
}

export default useCBTableQuery;
