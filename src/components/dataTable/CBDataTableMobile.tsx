import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FiEdit, FiTrash2, FiChevronDown, FiChevronUp } from "react-icons/fi";
import CBButton from "../CBButton";
import type { CBDataTableProps } from "../../datatable";
import CBCheckbox from "../CBCheckbox";
import { useDataTableSelection } from "./hook/useDataTableSelection";
import { flattenColumns, getValue } from "./helper/mobile";
import { AnimatePresence, motion } from "framer-motion";
import { CBPaginationFooter } from "./components/CBPaginationFooter";
import {
  DEFAULT_THEMES,
  type CBTableMobileTheme,
} from "./theme/themeDataTable";
// Estendendo os tipos de entrada para permitir a passagem do objeto de tema
interface CBDataTableMobileProps<T> extends CBDataTableProps<T> {
  themeConfig?: Partial<CBTableMobileTheme>;
}

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
}: CBDataTableMobileProps<T>) {
  console.log("theme mobile", theme);
  // Página interna só existe (e só é usada) no modo client.
  // No modo server, quem manda é o `page` vindo via props.
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>(
    {},
  );
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

  const paginatedData = useMemo(() => {
    // Se existe onPageChange, quem pagina é o consumidor
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
  // Consolida o tema unindo as chaves enviadas por Props com o tema padrão (dark ou light)
  const activeTheme = useMemo<CBTableMobileTheme>(() => {
    const baseTheme = DEFAULT_THEMES[theme ?? "dark"] || DEFAULT_THEMES.dark;
    return { ...baseTheme, ...themeConfig };
  }, [theme, themeConfig]);

  const flatColumns = useMemo(() => flattenColumns(columns), [columns]);
  const [titleColumn, ...restColumns] = flatColumns;

  const totalPages = Math.max(1, Math.ceil(rowsCount / pageSize));

  // Esse ajuste de "página inválida" só faz sentido no modo client, onde
  // a página é controlada aqui dentro. No modo server, quem corrige
  // page fora do range é a tela consumidora (ela decide o que fazer,
  // ex: recuar uma página se a atual ficou vazia após um delete).
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
    setExpandedCards((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const hasActions = Boolean(onEdit || onDelete);

  useEffect(() => {
    clearSelection();
  }, [currentPage]);
  return (
    <>
      <div
        ref={wrapperRef}
        className={`w-full flex flex-col p-3 rounded-xl border transition-all duration-200 ${activeTheme.classes.wrapper}`}
      >
        {/* Barra de ações + busca */}
        <div className="flex flex-col gap-3.5 mb-4">
          {hasActions && (
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

          {selectionMode === "multiple" && paginatedData.length > 0 && (
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
        <div className="flex flex-col gap-1 min-h-[120px]">
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
              const isExpanded = !!expandedCards[key];

              const titleValue = titleColumn?.render
                ? titleColumn.render(row)
                : getValue(row, titleColumn?.field);

              return (
                <div
                  key={key}
                  className={`rounded-xl border px-4 py-2 transition-all duration-200 ${
                    activeTheme.classes.card
                  } ${isSelected ? activeTheme.classes.cardSelected : ""}`}
                >
                  <div className="flex items-start gap-3.5">
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

                    <div
                      className="flex-1 min-w-0 cursor-pointer"
                      onClick={() => toggleSelectRow(row, index)}
                    >
                      <div
                        className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${activeTheme.classes.textMuted}`}
                      >
                        {titleColumn?.headerName || "Registro"}
                      </div>
                      <div
                        className={`text-sm font-bold truncate ${activeTheme.classes.textPrimary}`}
                      >
                        {titleValue}
                      </div>
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
                          const value = col.render
                            ? col.render(row)
                            : col.valueGetter
                              ? col.valueGetter(row)
                              : getValue(row, col.field);

                          const textAlign =
                            col.align === "center"
                              ? "text-center"
                              : col.align === "right"
                                ? "text-right"
                                : "text-left";

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
                              <span
                                className={`col-span-2 text-xs font-medium break-all ${textAlign} ${activeTheme.classes.textPrimary}`}
                              >
                                {value}
                              </span>
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
