import CBButton from "../CBButton";

import { AgGridReact } from "ag-grid-react";

import { FiEdit, FiTrash2 } from "react-icons/fi";

import { useAGGridTheme } from "../../hooks/useAGGridTheme";

import type { ColDef, ColGroupDef, GetRowIdParams } from "ag-grid-community";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  ModuleRegistry,
  ClientSideRowModelModule,
  PaginationModule,
  RowSelectionModule,
  CellStyleModule,
  LocaleModule,
} from "ag-grid-community";

import type { CBDataTableProps } from "../../datatable";
import { mapColumn } from "./helper/desktop";
import { useDataTableSelection } from "./hook/useDataTableSelection";
import { CBPaginationFooter } from "./components/CBPaginationFooter";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  PaginationModule,
  RowSelectionModule,
  CellStyleModule,
  LocaleModule,
]);

/**
 * CBDataTable
 *
 * Componente de tabela baseado em AG Grid com:
 * - Suporte a colunas agrupadas
 * - Renderização customizada de células
 * - Paginação
 * - Seleção de linha única ou múltipla
 * - Botões flutuantes de editar/excluir
 *
 * @template T Tipo do dado das linhas
 * @param props Propriedades da tabela
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * interface User {
 *   id: number;
 *   name: string;
 *   email: string;
 * }
 *
 * const columns: CBTableColumn<User>[] = [
 *   { field: "id", headerName: "ID" },
 *   { field: "name", headerName: "Nome" },
 *   { field: "email", headerName: "Email", align: "center" },
 * ];
 *
 * const data: User[] = [
 *   { id: 1, name: "Carlos", email: "carlos@email.com" },
 *   { id: 2, name: "Ana", email: "ana@email.com" },
 * ];
 *
 * <CBDataTable
 *   columns={columns}
 *   data={data}
 *   pageSize={5}
 *   getRowId={(user) => String(user.id)}
 *   onEdit={(user) => console.log("Editar", user)}
 *   onDelete={(user) => console.log("Excluir", user)}
 * />
 * ```
 */
function CBDataTableDesktop<T>({
  columns,
  data,
  pageSize = 5,
  emptyMessage = "Nenhum dado encontrado",
  getRowId,
  onEdit,
  onDelete,
  selectionMode = "single",
  theme = "dark",
  page,
  totalRows = 0,
  onPageChange,
  onPageSizeChange,
  loading = false,
  themePagination,
}: CBDataTableProps<T>) {
  const themeTable = useAGGridTheme(theme);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [internalPage, setInternalPage] = useState(0);

  const currentPage = page ?? internalPage;
  const handlePageChange = (newPage: number) => {
    if (onPageChange) {
      onPageChange(newPage); // modo controlado
    } else {
      setInternalPage(newPage); // modo interno
    }
  };

  const rowsCount = totalRows || data.length;
  const { deleteSelected: handleDelete } = useDataTableSelection({
    selectionMode,
    getRowId,
    onDelete,
  });

  const gridRef = useRef<AgGridReact<T>>(null);
  const gridWrapperRef = useRef<HTMLDivElement>(null);

  const onSelectionChanged = useCallback(() => {
    const selectedNodes = gridRef.current?.api?.getSelectedNodes() ?? [];
    setSelectedRows(
      selectedNodes.map((node) => node.data).filter((d): d is T => d != null),
    );
  }, []);
  const columnDefs: (ColDef<T> | ColGroupDef<T>)[] = useMemo(
    () => columns.map((col) => mapColumn(col)),
    [columns],
  );

  // Repassa o getRowId do consumidor para o formato que o AG Grid espera.
  // Sem isso, o grid usa identidade por índice/objeto, o que pode bagunçar
  // seleção e reconciliação de linhas quando `data` é atualizado.
  const getRowIdCallback = useMemo(
    () =>
      getRowId
        ? (params: GetRowIdParams<T>) => getRowId(params.data)
        : undefined,
    [getRowId],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        gridWrapperRef.current &&
        !gridWrapperRef.current.contains(event.target as Node)
      ) {
        setSelectedRows([]);
        gridRef.current?.api?.deselectAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const pagedData = useMemo(() => {
    if (onPageChange) {
      return data; // server
    }

    const start = currentPage * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, currentPage, pageSize, onPageChange]);

  return (
    <div ref={gridWrapperRef} className="relative w-full">
      <AgGridReact
        ref={gridRef}
        rowData={pagedData}
        getRowId={getRowIdCallback}
        defaultColDef={{ resizable: false }}
        columnDefs={columnDefs}
        theme={themeTable}
        animateRows
        // API de seleção do AG Grid >= v32: rowSelection passou a ser um
        // objeto de configuração em vez de string ("single"/"multiple").
        rowSelection={
          selectionMode === "multiple"
            ? {
                mode: "multiRow",
                checkboxes: true,
                headerCheckbox: true,
                enableClickSelection: true,
              }
            : {
                mode: "singleRow",
                checkboxes: false,
                enableClickSelection: true,
              }
        }
        domLayout="autoHeight"
        onSelectionChanged={onSelectionChanged}
        overlayNoRowsTemplate={`<span class="text-white">${emptyMessage}</span>`}
        localeText={{
          page: "Página",
          of: "de",
          to: "até",
          next: "Próxima",
          previous: "Anterior",
          first: "Primeira",
          last: "Última",
        }}
      />
      <CBPaginationFooter
        page={currentPage}
        pageSize={pageSize}
        totalRows={rowsCount}
        loading={loading}
        onPageChange={handlePageChange}
        onPageSizeChange={onPageSizeChange}
        colorsPagination={themePagination}
      />

      {/* Botões flutuantes */}
      <div className="absolute -top-2 right-2 -translate-y-1/2 flex gap-2 z-10">
        {onEdit && (
          <CBButton
            aria-label="Editar"
            children=""
            iconStart={<FiEdit size={18} />}
            color="primary"
            // Edição só faz sentido com exatamente 1 linha selecionada.
            disabled={selectedRows.length !== 1}
            onClick={() => selectedRows.length === 1 && onEdit(selectedRows[0])}
          />
        )}
        {onDelete && (
          <CBButton
            aria-label="Excluir"
            children=""
            iconStart={<FiTrash2 size={18} />}
            color="danger"
            disabled={selectedRows.length === 0}
            onClick={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default CBDataTableDesktop;
