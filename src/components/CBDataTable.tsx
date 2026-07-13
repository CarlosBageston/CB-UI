import CBButton from "./CBButton";

import { AgGridReact } from "ag-grid-react";

import { FiEdit, FiTrash2 } from "react-icons/fi";

import { useAGGridTheme } from "../hooks/useAGGridTheme";

import type {
  ColDef,
  ColGroupDef,
  ICellRendererParams,
  GetRowIdParams,
} from "ag-grid-community";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  ModuleRegistry,
  ClientSideRowModelModule,
  PaginationModule,
  RowSelectionModule,
  CellStyleModule,
  LocaleModule,
} from "ag-grid-community";

import type { CBDataTableProps, CBTableColumn } from "../datatable";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  PaginationModule,
  RowSelectionModule,
  CellStyleModule,
  LocaleModule,
]);

/**
 * Converte uma CBTableColumn (nossa API simplificada) em um ColDef/ColGroupDef
 * do AG Grid.
 *
 * Ponto importante: fazemos spread das propriedades "cruas" do ColDef
 * (sortable, filter, editable, pinned, valueGetter, etc.) que vierem em
 * `col`, e SÓ DEPOIS sobrescrevemos o que o CBDataTable precisa controlar
 * (flex, cellRenderer, cellClass). Isso evita que propriedades nativas do
 * AG Grid que o consumidor tenha setado sejam silenciosamente descartadas
 * (o problema que existia na versão anterior, que reconstruía o objeto do
 * zero escolhendo campo por campo).
 */
function mapColumn<T>(col: CBTableColumn<T>): ColDef<T> | ColGroupDef<T> {
  const { col: colSpan, render, children, align, ...colDefRest } = col;

  if (children && children.length > 0) {
    return {
      ...colDefRest,
      headerName: col.headerName,
      children: children.map((child) => mapColumn(child)),
      flex: colSpan ?? 1,
    };
  }

  return {
    ...colDefRest,
    flex: colSpan ?? 1,
    cellRenderer: render
      ? (params: ICellRendererParams<T>) =>
          params.data ? render(params.data) : null
      : undefined,
    cellClass:
      align === "center"
        ? "ag-cell-center"
        : align === "right"
          ? "ag-cell-right"
          : "ag-cell-left",
  };
}

/**
 * CBDataTable
 *
 * Componente de tabela baseado em AG Grid com:
 * - Suporte a colunas agrupadas
 * - Renderização customizada de células
 * - Paginação
 * - Seleção de linha única
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
function CBDataTable<T>({
  columns,
  data,
  pageSize = 5,
  emptyMessage = "Nenhum dado encontrado",
  getRowId,
  onEdit,
  onDelete,
  selectionMode = "single",
  theme = "dark",
}: CBDataTableProps<T>) {
  const themeTable = useAGGridTheme(theme);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const gridRef = useRef<AgGridReact<T>>(null);
  const gridWrapperRef = useRef<HTMLDivElement>(null);

  const onSelectionChanged = useCallback(() => {
    const selectedNodes = gridRef.current?.api.getSelectedNodes() ?? [];
    setSelectedRows(
      selectedNodes.map((node) => node.data).filter((d): d is T => d != null),
    );
  }, []);

  const handleDelete = useCallback(() => {
    if (!onDelete) return;
    selectedRows.forEach((row) => onDelete(row));
    gridRef.current?.api.deselectAll();
    setSelectedRows([]);
  }, [onDelete, selectedRows]);

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
        gridRef.current?.api.deselectAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={gridWrapperRef} className="relative w-full">
      <AgGridReact
        ref={gridRef}
        rowData={data}
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
        pagination
        paginationPageSize={pageSize}
        paginationPageSizeSelector={false}
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

export default CBDataTable;
