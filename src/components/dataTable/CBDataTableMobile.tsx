import CBCheckbox from "../CBCheckbox/CBCheckbox";
import { AnimatePresence, motion } from "framer-motion";
import type { CBDataTableProps } from "../../datatable";
import {
  flattenColumns,
  getCellClass,
  getDisplayValue,
  getInputType,
  isColumnEditable,
  resolveMobileLayout,
  type FlatColumn,
} from "./helper/mobile";
import { CBPaginationFooter } from "./components/CBPaginationFooter";
import { useDataTableSelection } from "./hook/useDataTableSelection";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FiChevronDown, FiInbox } from "react-icons/fi";
import {
  DEFAULT_THEMES,
  type CBTableMobileTheme,
} from "./theme/themeDataTable";
import CBDataTableActions from "./components/CBDataTableActions";
import { useTablePagination } from "./hook/useTablePagination";

interface CBDataTableMobileProps<T> extends CBDataTableProps<T> {
  themeConfig?: Partial<CBTableMobileTheme>;
}

// ─── Célula editável ────────────────────────────────────────────────────────

interface EditableCellProps<T> {
  row: T;
  col: FlatColumn<T>;
  isEditing: boolean;
  onStartEdit: () => void;
  onCommit: (newValue: unknown) => void;
  onCancel: () => void;
  textClass: string;
  activeTheme: CBTableMobileTheme;
}

function EditableCell<T>({
  row,
  col,
  isEditing,
  onStartEdit,
  onCommit,
  onCancel,
  textClass,
  activeTheme,
}: EditableCellProps<T>) {
  const field = col.field;
  const rawValue = field ? (row as Record<string, unknown>)[field] : undefined;
  const inputType = getInputType(col.cellEditor);
  const params = col.cellEditorParams ?? {};
  const inputRef = useRef<HTMLInputElement>(null);

  // Foca o input quando entrar em modo de edição
  useEffect(() => {
    if (isEditing) {
      // Timeout para garantir que o input foi montado
      const t = setTimeout(() => inputRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [isEditing]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onCommit(inputRef.current?.value ?? "");
    } else if (e.key === "Escape") {
      e.preventDefault();
      onCancel();
    }
  };

  const handleBlur = () => {
    onCommit(inputRef.current?.value ?? "");
  };

  const handleClick = () => {
    if (col.singleClickEdit && !isEditing) {
      onStartEdit();
    }
  };

  const handleDoubleClick = () => {
    if (!col.singleClickEdit && !isEditing) {
      onStartEdit();
    }
  };

  if (isEditing) {
    return (
      <input
        ref={inputRef}
        type={inputType}
        defaultValue={
          rawValue !== null && rawValue !== undefined ? String(rawValue) : ""
        }
        min={params.min !== undefined ? Number(params.min) : undefined}
        max={params.max !== undefined ? Number(params.max) : undefined}
        step={
          params.precision !== undefined
            ? params.precision === 0
              ? 1
              : Math.pow(10, -Number(params.precision))
            : undefined
        }
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onClick={(e) => e.stopPropagation()}
        className={`
          w-full max-w-28 h-8
          px-2.5
          bg-transparent ${activeTheme.classes.textPrimary}
          border border-(--cb-color-primary)
          text-sm font-medium
          rounded-lg outline-none ring-2 ring-(--cb-color-primary)/20
          no-number-spinner
          `}
      />
    );
  }

  const displayValue = getDisplayValue(row, col);
  const customClass = getCellClass(col, row);
  return (
    <span
      className={`inline-flex items-center min-h-8 px-2.5 -mx-px rounded-lg border border-dashed border-slate-400/50 cursor-pointer select-none ${textClass} ${customClass}`}
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        handleDoubleClick();
      }}
      title={
        col.singleClickEdit
          ? "Toque para editar"
          : "Toque duas vezes para editar"
      }
    >
      {displayValue}
    </span>
  );
}

// ─── Skeleton de carregamento ───────────────────────────────────────────────

function CardSkeleton({ theme }: { theme: CBTableMobileTheme }) {
  const surface = theme.classes.surfaceMuted ?? "bg-slate-400/15";
  return (
    <div className={`rounded-xl border px-3.5 py-1.5 ${theme.classes.card}`}>
      <div className="flex items-center justify-between gap-6 min-h-11 animate-pulse">
        <div className={`h-3.5 w-1/2 rounded ${surface}`} />
        <div className={`h-3.5 w-16 rounded ${surface}`} />
      </div>
    </div>
  );
}

// ─── Componente principal ───────────────────────────────────────────────────

function CBDataTableMobile<T>({
  columns,
  data,
  pageSize = 5,
  emptyMessage = "Nenhum dado encontrado",
  getRowId,
  onEdit,
  onDelete,
  selectionMode = "single",
  theme,
  themeConfig,
  page,
  totalRows,
  onPageChange,
  onPageSizeChange,
  paginationMode,
  loading = false,
  defaultExpanded,
  singleClickEdit = true,
  showFooter = true,
  onCellValueChanged,
  autoFocusFirstEditableCell = false,
  actions = [],
}: CBDataTableMobileProps<T>) {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>(
    {},
  );
  /** { rowKey: string; field: string } | null */
  const [editingCell, setEditingCell] = useState<{
    rowKey: string;
    field: string;
  } | null>(null);

  const {
    currentPage,
    handlePageChange,
    rowsCount,
    pagedData: paginatedData,
  } = useTablePagination({
    data,
    page,
    pageSize,
    totalRows,
    onPageChange,
    paginationMode,
  });

  const {
    selectedRows,
    isSelected: isRowSelected,
    toggleRow: toggleSelectRow,
    clearSelection,
    selectRows,
    unselectRows,
    getKey,
  } = useDataTableSelection({
    selectionMode,
    getRowId,
  });

  const activeTheme = useMemo<CBTableMobileTheme>(() => {
    const baseTheme = DEFAULT_THEMES[theme ?? "dark"] || DEFAULT_THEMES.dark;
    return { ...baseTheme, ...themeConfig };
  }, [theme, themeConfig]);

  // Garante que singleClickEdit da prop global seja propagado para colunas
  // que não definem o próprio singleClickEdit
  const flatColumns = useMemo(() => {
    const cols = flattenColumns(columns);
    return cols.map((col) => ({
      ...col,
      singleClickEdit: col.singleClickEdit ?? singleClickEdit,
    }));
  }, [columns, singleClickEdit]);

  const layout = useMemo(() => resolveMobileLayout(flatColumns), [flatColumns]);

  // Tabela editável começa aberta: os inputs não podem ficar escondidos no collapse
  const startExpanded =
    defaultExpanded ?? flatColumns.some((col) => Boolean(col.editable));

  const allPageSelected =
    paginatedData.length > 0 &&
    paginatedData.every((row, idx) => isRowSelected(row, idx));

  const toggleSelectAllPage = useCallback(() => {
    if (selectionMode !== "multiple") return;

    if (allPageSelected) {
      unselectRows(paginatedData);
    } else {
      selectRows(paginatedData);
    }
  }, [allPageSelected, paginatedData, selectionMode]);

  const toggleExpandCard = (key: string) => {
    setExpandedCards((prev) => {
      // Se a chave ainda não estiver no objeto, vale o estado inicial da tabela
      const currentState = prev[key] ?? startExpanded;
      return { ...prev, [key]: !currentState };
    });
  };

  const hasActions = Boolean(onEdit || onDelete || actions.length);
  const isMultiple = selectionMode === "multiple";

  useEffect(() => {
    clearSelection();
  }, [currentPage]);

  // Auto-foco na primeira célula editável da primeira linha
  useEffect(() => {
    if (!autoFocusFirstEditableCell || paginatedData.length === 0) return;

    const firstRow = paginatedData[0];
    const firstKey = getKey(firstRow, 0);

    // Segue a ordem visual do card: título, destaque, grade, detalhes
    const ordered = [
      layout.title,
      layout.trailing,
      ...layout.grid,
      ...layout.detail,
    ];
    const firstEditableCol = ordered.find((col) =>
      col ? isColumnEditable(col, firstRow) : false,
    );

    if (firstEditableCol && firstEditableCol.field) {
      // Se a célula estiver nos detalhes, abre o card para ela aparecer
      if (layout.detail.includes(firstEditableCol)) {
        setExpandedCards((prev) => ({ ...prev, [firstKey]: true }));
      }
      setEditingCell({ rowKey: firstKey, field: firstEditableCol.field });
    }
  }, [autoFocusFirstEditableCell, paginatedData.length]);

  /** Commita o valor editado e chama callbacks */
  const commitEdit = useCallback(
    (row: T, col: FlatColumn<T>, newValue: string) => {
      setEditingCell(null);

      const field = col.field;
      if (!field) return;

      const oldValue = (row as Record<string, unknown>)[field];

      // Converte o valor conforme o tipo do editor
      let parsedValue: unknown = newValue;
      if (col.cellEditor === "agNumberCellEditor") {
        parsedValue = newValue === "" ? null : Number(newValue);
      }

      if (parsedValue === oldValue) return; // sem mudança

      const params = {
        data: row,
        oldValue,
        newValue: parsedValue,
        colDef: {
          field,
          colId: col.colId,
          headerName: col.headerName,
        },
      };

      // Callback da coluna tem prioridade; fallback para prop global
      if (col.onCellValueChanged) {
        col.onCellValueChanged(params);
      } else if (onCellValueChanged) {
        onCellValueChanged(params as any);
      }
    },
    [onCellValueChanged],
  );

  /** Renderiza o valor de uma coluna, como texto ou como célula editável */
  const renderValue = (
    row: T,
    rowKey: string,
    col: FlatColumn<T>,
    textClass: string,
  ) => {
    if (isColumnEditable(col, row)) {
      return (
        <EditableCell
          row={row}
          col={col}
          activeTheme={activeTheme}
          isEditing={
            editingCell?.rowKey === rowKey && editingCell?.field === col.field
          }
          onStartEdit={() => setEditingCell({ rowKey, field: col.field! })}
          onCommit={(val) => commitEdit(row, col, String(val))}
          onCancel={() => setEditingCell(null)}
          textClass={`${textClass} ${activeTheme.classes.textPrimary}`}
        />
      );
    }

    return (
      <span
        className={`${textClass} ${activeTheme.classes.textPrimary} ${getCellClass(col, row)}`}
      >
        {getDisplayValue(row, col)}
      </span>
    );
  };

  const showSkeleton = loading && paginatedData.length === 0;

  return (
    <>
      <div className={`w-full flex flex-col ${activeTheme.classes.wrapper}`}>
        {/* Barra de seleção múltipla */}
        {isMultiple && paginatedData.length > 0 && (
          <div className="flex items-center justify-between gap-2 mb-3 px-1 min-h-10">
            <label className="flex items-center gap-2.5 select-none cursor-pointer">
              <CBCheckbox
                checked={allPageSelected}
                onChange={toggleSelectAllPage}
                color="primary"
                className={activeTheme.classes.checkboxBorder}
              />
              {selectedRows.length > 0 ? (
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-semibold ${activeTheme.classes.badge}`}
                >
                  {selectedRows.length} selecionado
                  {selectedRows.length > 1 ? "s" : ""}
                </span>
              ) : (
                <span
                  className={`text-xs font-medium ${activeTheme.classes.textMuted}`}
                >
                  Selecionar todos ({paginatedData.length})
                </span>
              )}
            </label>

            {hasActions && (
              <CBDataTableActions
                selectedRows={selectedRows}
                onEdit={onEdit}
                onDelete={onDelete}
                actions={actions}
              />
            )}
          </div>
        )}

        {/* Lista de cards */}
        <div className="flex flex-col gap-2">
          {showSkeleton ? (
            [0, 1, 2, 3, 4].map((i) => (
              <CardSkeleton key={i} theme={activeTheme} />
            ))
          ) : paginatedData.length === 0 ? (
            <div
              className={`flex flex-col items-center justify-center gap-2 py-12 rounded-2xl border border-dashed text-center ${activeTheme.classes.divider}`}
            >
              <FiInbox size={28} className={activeTheme.classes.textMuted} />
              <span
                className={`text-sm font-medium ${activeTheme.classes.textMuted}`}
              >
                {emptyMessage}
              </span>
            </div>
          ) : (
            paginatedData.map((row, index) => {
              const key = getKey(row, index);
              const isSelected = isRowSelected(row, index);
              // Considera o estado inicial caso a chave individual ainda não tenha sido alterada
              const isExpanded = expandedCards[key] ?? startExpanded;
              const hasDetail = layout.detail.length > 0;
              const isExpandable = hasDetail || hasActions;
              const stopIfEditable =
                (col: FlatColumn<T>) => (e: React.MouseEvent) => {
                  if (isColumnEditable(col, row)) e.stopPropagation();
                };

              return (
                <div
                  key={key}
                  className={`rounded-xl border px-3.5 py-1.5 transition-all duration-200 ${
                    activeTheme.classes.card
                  } ${isSelected && isMultiple ? activeTheme.classes.cardSelected : ""}`}
                >
                  {/* Linha do card: título + segunda informação + seta */}
                  <div
                    className={`flex items-center gap-2.5 min-h-11 ${isExpandable ? "cursor-pointer" : ""}`}
                    onClick={() => isExpandable && toggleExpandCard(key)}
                  >
                    {isMultiple && (
                      <div
                        aria-label="Selecionar registro"
                        className="shrink-0 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSelectRow(row, index);
                        }}
                      >
                        <CBCheckbox
                          checked={isSelected}
                          onChange={() => {}}
                          color="primary"
                          className={activeTheme.classes.checkboxBorder}
                        />
                      </div>
                    )}

                    <div
                      className={`flex-1 min-w-0 text-sm font-semibold leading-snug ${
                        isExpanded ? "wrap-break-word" : "truncate"
                      }`}
                      onClick={
                        layout.title ? stopIfEditable(layout.title) : undefined
                      }
                    >
                      {layout.title
                        ? renderValue(row, key, layout.title, "")
                        : "-"}
                    </div>

                    {layout.trailing && (
                      <div
                        className={`shrink-0 max-w-[50%] text-right ${
                          isExpanded ? "wrap-break-word" : "truncate"
                        }`}
                        onClick={stopIfEditable(layout.trailing)}
                      >
                        {renderValue(
                          row,
                          key,
                          layout.trailing,
                          "text-sm font-semibold tabular-nums",
                        )}
                      </div>
                    )}

                    {isExpandable && (
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-label={
                          isExpanded ? "Ocultar detalhes" : "Ver detalhes"
                        }
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpandCard(key);
                        }}
                        className={`inline-flex items-center justify-center shrink-0 w-7 h-7 -mr-1.5 bg-transparent border-0 cursor-pointer rounded-md active:opacity-70 ${activeTheme.classes.textMuted}`}
                      >
                        <FiChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Campos fixados com mobile: "grid" (sempre visíveis) */}
                  {layout.grid.length > 0 && (
                    <div
                      className={`mb-1.5 pt-2 border-t grid grid-cols-2 gap-x-4 gap-y-2 ${activeTheme.classes.divider}`}
                    >
                      {layout.grid.map((col, colIndex) => (
                        <div key={colIndex} className="min-w-0">
                          <div
                            className={`text-[10px] font-semibold uppercase tracking-wider truncate ${activeTheme.classes.textMuted}`}
                          >
                            {col.headerName}
                          </div>
                          <div className="mt-0.5">
                            {renderValue(
                              row,
                              key,
                              col,
                              "text-sm font-medium tabular-nums wrap-break-word",
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Restante das informações e ações */}
                  <AnimatePresence initial={false}>
                    {isExpanded && isExpandable && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        {hasDetail && (
                          <div
                            className={`border-t divide-y ${activeTheme.classes.divider}`}
                          >
                            {layout.detail.map((col, colIndex) => (
                              <div
                                key={colIndex}
                                className={`flex items-center justify-between gap-3 py-2 ${activeTheme.classes.divider}`}
                              >
                                <div
                                  className={`text-xs font-medium shrink-0 ${activeTheme.classes.textMuted}`}
                                >
                                  {col.headerName}
                                </div>
                                <div className="min-w-0 text-right">
                                  {renderValue(
                                    row,
                                    key,
                                    col,
                                    "text-sm font-medium tabular-nums wrap-break-word",
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {hasActions && (
                          <div
                            className={`flex justify-end border-t py-2 ${activeTheme.classes.divider}`}
                          >
                            <CBDataTableActions
                              selectedRows={[row]}
                              onEdit={onEdit}
                              onDelete={onDelete}
                              actions={actions}
                            />
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>
      </div>

      {showFooter && (
        <CBPaginationFooter
          page={currentPage}
          pageSize={pageSize}
          totalRows={rowsCount}
          loading={loading}
          onPageChange={handlePageChange}
          onPageSizeChange={onPageSizeChange}
          theme={theme}
          isMobile
          themeConfig={themeConfig}
        />
      )}
    </>
  );
}

export default CBDataTableMobile;
