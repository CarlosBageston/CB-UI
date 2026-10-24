import { useEffect, useMemo, useState } from "react";
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
export function useTablePagination<T>({
  data,
  page,
  pageSize,
  totalRows,
  onPageChange,
  paginationMode,
}: UseTablePaginationProps<T>) {
  const [internalPage, setInternalPage] = useState(0);

  const mode: PaginationMode =
    paginationMode ?? (onPageChange ? "server" : "client");
  const isServer = mode === "server";

  const currentPage = page ?? internalPage;
  const rowsCount = isServer ? (totalRows ?? data.length) : data.length;
  const totalPages = Math.max(1, Math.ceil(rowsCount / pageSize));

  const handlePageChange = (newPage: number) => {
    setInternalPage(newPage);
    onPageChange?.(newPage);
  };

  // No modo client, se a lista encolher (filtro, exclusão), volta para a última página válida
  useEffect(() => {
    if (isServer || page !== undefined) return;
    const maxPage = totalPages - 1;
    if (internalPage > maxPage) setInternalPage(maxPage);
  }, [isServer, page, totalPages, internalPage]);

  const pagedData = useMemo(() => {
    if (isServer) return data;
    const start = currentPage * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, currentPage, pageSize, isServer]);

  return {
    currentPage,
    handlePageChange,
    rowsCount,
    totalPages,
    pagedData,
    isServer,
  };
}
