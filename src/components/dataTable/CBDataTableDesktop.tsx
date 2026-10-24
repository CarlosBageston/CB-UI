import { AgGridReact } from "ag-grid-react";
import { useCallback, useEffect, useMemo, useRef } from "react";
import type {
  ColDef,
  ColGroupDef,
  GetRowIdParams,
  SortChangedEvent,
} from "ag-grid-community";
import {
  ModuleRegistry,
  ClientSideRowModelModule,
  PaginationModule,
  RowSelectionModule,
  CellStyleModule,
  LocaleModule,
  TextEditorModule,
  NumberEditorModule,
  DateEditorModule,
  SelectEditorModule,
  LargeTextEditorModule,
  CheckboxEditorModule,
  CustomEditorModule,
  UndoRedoEditModule,
  ColumnApiModule,
} from "ag-grid-community";

import { mapColumn } from "./helper/desktop";
import { getThemeTable } from "../../theme/themeTable";
import type { CBDataTableProps } from "../../datatable";
import { useDataTableSelection } from "./hook/useDataTableSelection";
import { useTablePagination } from "./hook/useTablePagination";
import { CBPaginationFooter } from "./components/CBPaginationFooter";
import CBDataTableActions from "./components/CBDataTableActions";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  PaginationModule,
  RowSelectionModule,
  CellStyleModule,
  LocaleModule,
  TextEditorModule,
  NumberEditorModule,
  DateEditorModule,
  SelectEditorModule,
  LargeTextEditorModule,
  CheckboxEditorModule,
  CustomEditorModule,
  UndoRedoEditModule,
  ColumnApiModule, // getColumnState/applyColumnState (ordenação no servidor)
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
  theme,
  page,
  totalRows,
  onPageChange,
  onPageSizeChange,
  paginationMode,
  loading = false,
  sort,
  onSortChange,
  singleClickEdit = true,
  stopEditingWhenCellsLoseFocus = true,
  onCellValueChanged,
  autoFocusFirstEditableCell = false,
  actions = [],
  showFooter = true,
}: CBDataTableProps<T>) {
  const themeTable = useMemo(() => getThemeTable(theme === "dark"), [theme]);
  const { currentPage, handlePageChange, rowsCount, pagedData } =
    useTablePagination({
      data,
      page,
      pageSize,
      totalRows,
      onPageChange,
      paginationMode,
    });

  const { selectedRows, setSelectedRows } = useDataTableSelection({
    selectionMode,
    getRowId,
  });

  const gridRef = useRef<AgGridReact<T>>(null);
  const gridWrapperRef = useRef<HTMLDivElement>(null);

  const onSelectionChanged = useCallback(() => {
    const selectedNodes = gridRef.current?.api?.getSelectedNodes() ?? [];

    const rows = selectedNodes
      .map((node) => node.data)
      .filter((d): d is T => d != null);

    // O grid é a fonte da verdade: substitui (e não soma) a seleção,
    // senão desmarcar no modo "multiple" nunca removeria a linha
    setSelectedRows(rows);
  }, [setSelectedRows]);
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
        gridRef.current?.api?.deselectAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ─── Ordenação no servidor ───────────────────────────────────────────────
  // Com `onSortChange`, o grid não reordena localmente (comparator neutro):
  // só mostra o indicador no cabeçalho e repassa a ordenação para fora.
  const serverSort = Boolean(onSortChange);

  const defaultColDef = useMemo<ColDef<T>>(
    () =>
      serverSort
        ? { resizable: false, comparator: () => 0 }
        : { resizable: false },
    [serverSort],
  );

  const handleSortChanged = useCallback(
    (event: SortChangedEvent<T>) => {
      if (!onSortChange || event.source === "api") return;
      const sorted = event.api
        .getColumnState()
        .find((col) => col.sort === "asc" || col.sort === "desc");
      onSortChange(
        sorted
          ? { field: sorted.colId, direction: sorted.sort as "asc" | "desc" }
          : null,
      );
    },
    [onSortChange],
  );

  // Reflete a ordenação controlada no indicador do cabeçalho
  const applySortToGrid = useCallback(() => {
    const api = gridRef.current?.api;
    if (!api || sort === undefined) return;
    api.applyColumnState({
      state: sort ? [{ colId: sort.field, sort: sort.direction }] : [],
      defaultState: { sort: null },
    });
  }, [sort?.field, sort?.direction]);

  useEffect(applySortToGrid, [applySortToGrid]);

  const focusFirstEditableCell = useCallback(() => {
    if (!autoFocusFirstEditableCell) return;
    if (pagedData.length === 0) return;

    const firstEditableCol = columns.find((col) => col.editable);
    if (!firstEditableCol) return;

    const colKey =
      firstEditableCol.colId ??
      (typeof firstEditableCol.field === "string"
        ? firstEditableCol.field
        : undefined);

    if (!colKey) return;
    setTimeout(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }

      setTimeout(() => {
        gridRef.current?.api?.startEditingCell({
          rowIndex: 0,
          colKey,
        });
        // autoFocusPendingRef.current = false;
      }, 50);
    }, 0);
  }, [autoFocusFirstEditableCell, columns, pagedData.length]);

  const handleFirstDataRendered = useCallback(() => {
    focusFirstEditableCell();
  }, [focusFirstEditableCell]);

  return (
    <div ref={gridWrapperRef} className="relative w-full">
      <AgGridReact
        ref={gridRef}
        rowData={pagedData}
        getRowId={getRowIdCallback}
        defaultColDef={defaultColDef}
        onSortChanged={handleSortChanged}
        onGridReady={applySortToGrid}
        columnDefs={columnDefs}
        singleClickEdit={singleClickEdit}
        stopEditingWhenCellsLoseFocus={stopEditingWhenCellsLoseFocus}
        onCellValueChanged={
          onCellValueChanged ? (e) => onCellValueChanged(e as any) : undefined
        }
        onFirstDataRendered={handleFirstDataRendered}
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
      {showFooter && (
        <CBPaginationFooter
          page={currentPage}
          pageSize={pageSize}
          totalRows={rowsCount}
          loading={loading}
          onPageChange={handlePageChange}
          onPageSizeChange={onPageSizeChange}
          theme={theme}
        />
      )}

      {/* Botões flutuantes */}
      <div className="absolute -top-2 right-2 -translate-y-1/2 flex gap-2 z-10">
        <CBDataTableActions
          selectedRows={selectedRows}
          onEdit={onEdit}
          onDelete={onDelete}
          actions={actions}
        />
      </div>
    </div>
  );
}

export default CBDataTableDesktop;
