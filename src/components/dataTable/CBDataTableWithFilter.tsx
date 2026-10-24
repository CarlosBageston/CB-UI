import { useImperativeHandle, useRef, useState, type Ref } from "react";
import CBFilterBar, { type CBFilterOption } from "../CBFilterBar";

import type {
  CBDataTableHandle,
  CBDataTableProps,
  CBTableFetcher,
  CBTableSort,
} from "../../types/componentsDataTable";
import CBDataTable from "./dataTable";
import { useTheme } from "../../hooks/useTheme";
import { useCBTableQuery } from "./hook/useCBTableQuery";

export interface CBDataTableWithFilterProps<T, F = Record<string, unknown>>
  extends Omit<CBDataTableProps<T>, "data"> {
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
function CBDataTableWithFilter<T, F = Record<string, unknown>>({
  data,
  filterColumns,
  filterPlaceholder = "Buscar...",
  filterClassName,
  theme,
  fetchData,
  filters,
  initialSort,
  searchDebounceMs,
  onFetchError,
  tableRef,
  ...tableProps
}: CBDataTableWithFilterProps<T, F>) {
  const themeComputed = useTheme(theme);
  const isServer = Boolean(fetchData);

  // ─── Modo local ──────────────────────────────────────────────────────────
  const [filteredData, setFilteredData] = useState<T[]>(data ?? []);
  const [clientPage, setClientPage] = useState(0);
  // Quem já controla a paginação de fora continua no controle (compatibilidade)
  const isExternallyPaged = tableProps.onPageChange !== undefined;

  // Volta para a página 0 só quando a busca muda. Se foi `data` que mudou
  // (ex: exclusão), mantém a página e apenas limita à última válida.
  const lastDataRef = useRef(data);
  const handleFilteredChange = (next: T[]) => {
    setFilteredData(next);
    if (lastDataRef.current === data) setClientPage(0);
    lastDataRef.current = data;
  };
  const clientPageSize = tableProps.pageSize ?? 5;
  const maxClientPage = Math.max(
    0,
    Math.ceil(filteredData.length / clientPageSize) - 1,
  );

  // ─── Modo servidor ───────────────────────────────────────────────────────
  const query = useCBTableQuery<T, F>({
    fetchData,
    filters,
    initialPageSize: tableProps.pageSize ?? 20,
    initialSort,
    enabled: isServer,
    onError: onFetchError,
  });

  useImperativeHandle(
    tableRef,
    () => ({ reload: query.reload, setPage: query.setPage }),
    [query.reload, query.setPage],
  );

  const { onDelete, onPageSizeChange } = tableProps;
  // O seletor "Linhas por página" só aparece se a tela pedir (passando onPageSizeChange)
  const serverOnPageSizeChange = onPageSizeChange
    ? (size: number) => {
        query.setPageSize(size);
        onPageSizeChange(size);
      }
    : undefined;
  const serverOnDelete = onDelete
    ? async (row: T) => {
        try {
          await onDelete(row);
        } finally {
          query.reload();
        }
      }
    : undefined;

  return (
    <div className="flex flex-col gap-6">
      {isServer ? (
        <CBFilterBar
          columns={filterColumns}
          placeholder={filterPlaceholder}
          onSearchChange={query.setSearch}
          debounceMs={searchDebounceMs}
          className={filterClassName}
          theme={themeComputed}
        />
      ) : (
        <CBFilterBar
          data={data ?? []}
          columns={filterColumns}
          placeholder={filterPlaceholder}
          onChange={handleFilteredChange}
          className={filterClassName}
          theme={themeComputed}
        />
      )}

      {isServer ? (
        <CBDataTable
          {...tableProps}
          {...query.tableProps}
          loading={query.loading || tableProps.loading}
          onPageSizeChange={serverOnPageSizeChange}
          onDelete={serverOnDelete}
          theme={theme}
        />
      ) : isExternallyPaged ? (
        <CBDataTable {...tableProps} data={filteredData} theme={theme} />
      ) : (
        <CBDataTable
          {...tableProps}
          data={filteredData}
          paginationMode="client"
          page={Math.min(clientPage, maxClientPage)}
          onPageChange={setClientPage}
          theme={theme}
        />
      )}
    </div>
  );
}

export default CBDataTableWithFilter;
