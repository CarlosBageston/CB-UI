import CBCheckbox from "../CBCheckbox/CBCheckbox";
import CBButton from "../CBButton";
import { AnimatePresence, motion } from "framer-motion";
import type { CBDataTableProps } from "../../datatable";
import {
  flattenColumns,
  getDisplayValue,
  getInputType,
  isColumnEditable,
  type FlatColumn,
} from "./helper/mobile";
import { CBPaginationFooter } from "./components/CBPaginationFooter";
import { useDataTableSelection } from "./hook/useDataTableSelection";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FiEdit, FiTrash2, FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  DEFAULT_THEMES,
  type CBTableMobileTheme,
} from "./theme/themeDataTable";

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
        className={`
          w-24 h-9 
          px-3 
          ${activeTheme.classes.wrapper} 
          border border-gray-500! 
          text-center text-sm font-medium
          rounded-md outline-none
           no-number-spinner
          `}
      />
    );
  }

  const displayValue = getDisplayValue(row, col);

  return (
    <span
      className={`text-xs font-medium cursor-pointer select-none ${textClass} ${
        col.singleClickEdit ? "" : "cursor-text"
      }`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      title={
        col.singleClickEdit ? "Clique para editar" : "Clique duplo para editar"
      }
    >
      {displayValue}
    </span>
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
  totalRows = 0,
  onPageChange,
  onPageSizeChange,
  loading = false,
  defaultExpanded = false,
  singleClickEdit = true,
  onCellValueChanged,
  autoFocusFirstEditableCell = false,
}: CBDataTableMobileProps<T>) {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>(
    {},
  );
  const [internalPage, setInternalPage] = useState(0);

  /** { rowKey: string; field: string } | null */
  const [editingCell, setEditingCell] = useState<{
    rowKey: string;
    field: string;
  } | null>(null);

  const currentPage = page ?? internalPage;
  const handlePageChange = (newPage: number) => {
    if (onPageChange) {
      onPageChange(newPage);
    } else {
      setInternalPage(newPage);
    }
  };
  const rowsCount = totalRows || data.length;

  const paginatedData = useMemo(() => {
    if (onPageChange) {
      return data;
    }

    const start = currentPage * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, currentPage, pageSize, onPageChange]);

  const {
    selectedRows,
    isSelected: isRowSelected,
    toggleRow: toggleSelectRow,
    deleteSelected: handleDelete,
    clearSelection,
    selectRows,
    unselectRows,
    getKey,
  } = useDataTableSelection({
    selectionMode,
    getRowId,
    onDelete,
  });

  const wrapperRef = useRef<HTMLDivElement>(null);

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

  const [titleColumn, ...restColumns] = flatColumns;

  const totalPages = Math.max(1, Math.ceil(rowsCount / pageSize));

  useEffect(() => {
    const maxPage = Math.max(totalPages - 1, 0);

    if (internalPage > maxPage) {
      setInternalPage(maxPage);
    }
  }, [totalPages, internalPage]);

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
      // Se tiver defaultExpanded e a chave ainda não estiver no objeto, considera que ela estava 'true'
      const currentState = prev[key] ?? defaultExpanded;
      return { ...prev, [key]: !currentState };
    });
  };

  const hasActions = Boolean(onEdit || onDelete);
  const isMultiple = selectionMode === "multiple";

  useEffect(() => {
    clearSelection();
  }, [currentPage]);

  // Auto-foco na primeira célula editável da primeira linha
  useEffect(() => {
    if (!autoFocusFirstEditableCell || paginatedData.length === 0) return;

    const firstRow = paginatedData[0];
    const firstKey = getKey(firstRow, 0);

    // Procura a primeira coluna editável (incluindo titleColumn)
    const allCols = [titleColumn, ...restColumns];
    const firstEditableCol = allCols.find((col) =>
      col ? isColumnEditable(col, firstRow) : false,
    );

    if (firstEditableCol && firstEditableCol.field) {
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

  return (
    <>
      <div
        ref={wrapperRef}
        className={`w-full flex flex-col p-3 rounded-xl border transition-all duration-200 ${activeTheme.classes.wrapper}`}
      >
        {/* Barra de ações + seleção */}
        <div className="flex flex-col gap-3.5 mb-4">
          {hasActions && isMultiple && (
            <div className="flex items-center justify-between gap-2">
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-bold transition-all ${activeTheme.classes.badge}`}
              >
                {selectedRows.length} selecionado(s)
              </span>

              <div className="flex items-center gap-2">
                {onEdit && (
                  <CBButton
                    color="primary"
                    iconStart={<FiEdit size={16} />}
                    disabled={selectedRows.length !== 1}
                    onClick={() =>
                      selectedRows.length === 1 && onEdit(selectedRows[0])
                    }
                    children=""
                  />
                )}
                {onDelete && (
                  <CBButton
                    color="danger"
                    iconStart={<FiTrash2 size={16} />}
                    disabled={selectedRows.length === 0}
                    onClick={handleDelete}
                    children=""
                  />
                )}
              </div>
            </div>
          )}

          {isMultiple && paginatedData.length > 0 && (
            <label className="flex items-center gap-2 px-1 py-0.5 select-none cursor-pointer">
              <CBCheckbox
                checked={allPageSelected}
                onChange={toggleSelectAllPage}
                color="primary"
                className={activeTheme.classes.checkboxBorder}
              />
              <span
                className={`text-xs font-semibold ${activeTheme.classes.textMuted}`}
              >
                Selecionar todos desta página ({paginatedData.length})
              </span>
            </label>
          )}
        </div>

        {/* Lista de cards */}
        <div className="flex flex-col gap-1 min-h-30">
          {paginatedData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
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
              // Considera a prop defaultExpanded caso a chave individual ainda não tenha sido alterada
              const isExpanded = expandedCards[key] ?? defaultExpanded;

              const titleEditable =
                titleColumn && isColumnEditable(titleColumn, row);
              const titleIsEditing =
                editingCell?.rowKey === key &&
                editingCell?.field === titleColumn?.field;

              return (
                <div
                  key={key}
                  className={`rounded-xl border px-4 py-2 transition-all duration-200 ${
                    activeTheme.classes.card
                  } ${isSelected && isMultiple ? activeTheme.classes.cardSelected : ""}`}
                >
                  <div className="flex items-start gap-3.5">
                    {/* Renderiza Checkbox APENAS se for seleção múltipla */}
                    {isMultiple && (
                      <div
                        aria-label="Selecionar registro"
                        onClick={() => toggleSelectRow(row, index)}
                        className="pt-1 shrink-0 cursor-pointer"
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
                      className={`flex-1 min-w-0 ${isMultiple ? "cursor-pointer" : ""}`}
                      onClick={() => isMultiple && toggleSelectRow(row, index)}
                    >
                      <div
                        className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${activeTheme.classes.textMuted}`}
                      >
                        {titleColumn?.headerName || "Registro"}
                      </div>

                      {titleColumn && titleEditable ? (
                        <EditableCell
                          row={row}
                          col={titleColumn}
                          isEditing={titleIsEditing}
                          onStartEdit={() =>
                            setEditingCell({
                              rowKey: key,
                              field: titleColumn.field!,
                            })
                          }
                          activeTheme={activeTheme}
                          onCommit={(val) =>
                            commitEdit(row, titleColumn, String(val))
                          }
                          onCancel={() => setEditingCell(null)}
                          textClass={activeTheme.classes.textPrimary}
                        />
                      ) : (
                        <div
                          className={`text-sm font-bold truncate ${activeTheme.classes.textPrimary}`}
                        >
                          {titleColumn
                            ? getDisplayValue(row, titleColumn)
                            : "-"}
                        </div>
                      )}
                    </div>

                    {restColumns.length > 0 && (
                      <CBButton
                        aria-label={
                          isExpanded ? "Recolher detalhes" : "Expandir detalhes"
                        }
                        onClick={() => toggleExpandCard(key)}
                        iconEnd={
                          isExpanded ? (
                            <FiChevronUp
                              size={18}
                              className={`${activeTheme.classes.textPrimary}`}
                            />
                          ) : (
                            <FiChevronDown
                              size={18}
                              className={`${activeTheme.classes.textPrimary}`}
                            />
                          )
                        }
                        variant="clear"
                        activeColor="transparent"
                        size="small"
                        children=""
                      />
                    )}
                  </div>

                  {/* Estrutura de Collapse */}
                  <AnimatePresence initial={false}>
                    {isExpanded && restColumns.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: 0.25,
                          ease: "easeInOut",
                        }}
                        className={`mt-4 pt-3.5 px-2 border-t space-y-3 animate-slide-down ${activeTheme.classes.divider}`}
                      >
                        {restColumns.map((col, colIndex) => {
                          if (!col) return null;

                          const textAlign =
                            col.align === "center"
                              ? "text-center"
                              : col.align === "right"
                                ? "text-right"
                                : "text-left";

                          const cellEditable = isColumnEditable(col, row);
                          const cellIsEditing =
                            editingCell?.rowKey === key &&
                            editingCell?.field === col.field;

                          return (
                            <div
                              key={colIndex}
                              className="flex justify-between items-center gap-2 py-0.5"
                            >
                              <span
                                className={`text-xs font-semibold truncate ${activeTheme.classes.textMuted}`}
                              >
                                {col.headerName}
                              </span>

                              {cellEditable ? (
                                <EditableCell
                                  row={row}
                                  col={col}
                                  activeTheme={activeTheme}
                                  isEditing={cellIsEditing}
                                  onStartEdit={() =>
                                    setEditingCell({
                                      rowKey: key,
                                      field: col.field!,
                                    })
                                  }
                                  onCommit={(val) =>
                                    commitEdit(row, col, String(val))
                                  }
                                  onCancel={() => setEditingCell(null)}
                                  textClass={`${textAlign} ${activeTheme.classes.textPrimary}`}
                                />
                              ) : (
                                <span
                                  className={`col-span-2 text-xs font-medium break-all ${textAlign} ${activeTheme.classes.textPrimary}`}
                                >
                                  {getDisplayValue(row, col)}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Paginação */}
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
    </>
  );
}

export default CBDataTableMobile;
