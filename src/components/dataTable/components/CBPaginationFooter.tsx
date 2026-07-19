import { useMemo } from "react";
import CBButton from "../../CBButton";
import {
  DEFAULT_THEMES,
  type CBTableMobileTheme,
} from "../theme/themeDataTable";

interface CBPaginationFooterProps {
  page: number;
  pageSize: number;
  totalRows: number;
  loading?: boolean;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  pageSizeOptions?: number[];
  isMobile?: boolean;
  themeConfig?: Partial<CBTableMobileTheme>;
  theme?: "light" | "dark";
}

export function CBPaginationFooter({
  page,
  pageSize,
  totalRows,
  loading = false,
  onPageChange,
  onPageSizeChange,
  isMobile = false,
  theme,
  pageSizeOptions = [10, 20, 50],
  themeConfig,
}: CBPaginationFooterProps) {
  const activeTheme = useMemo<CBTableMobileTheme>(() => {
    const baseTheme = DEFAULT_THEMES[theme ?? "dark"] || DEFAULT_THEMES.dark;
    return { ...baseTheme, ...themeConfig };
  }, [theme, themeConfig]);
  const totalPages = Math.max(Math.ceil(totalRows / pageSize), 1);
  return (
    <div
      className={`flex items-center gap-1 px-4 py-3 text-sm ${activeTheme.classes.textPrimary} ${isMobile ? "flex-col justify-center" : "flex-row justify-between"}`}
    >
      {/* Informações de Registros */}
      <div className="flex items-center gap-3">
        <span>
          Página <strong className={`font-semibold`}>{page + 1}</strong> de{" "}
          <strong className={`font-semibold`}>{totalPages}</strong>
          <span className={`mx-2`}>|</span>
          Total de <strong className={`font-semibold`}>{totalRows}</strong>{" "}
          registros
        </span>

        {loading && !isMobile && (
          <span
            className={`inline-flex items-center gap-1.5 text-xs ${activeTheme.classes.textPrimary} animate-pulse`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            Carregando...
          </span>
        )}
      </div>

      <div
        className={isMobile ? "flex flex-col gap-1 items-center" : "flex gap-4"}
      >
        {/* Seletor de Tamanho da Página */}
        {onPageSizeChange ? (
          <div className="flex items-center gap-2">
            <span className={`text-xs ${activeTheme.classes.textPrimary}`}>
              Linhas por página:
            </span>
            <select
              name="pageSize"
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className={`${activeTheme.classes.selectPagination} rounded-md px-2 py-1 text-xs font-medium outline-none cursor-pointer transition-all`}
            >
              {pageSizeOptions.map((size) => (
                <option
                  key={size}
                  value={size}
                  className={`${activeTheme.classes.textPrimary} cursor-pointer `}
                >
                  {size}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        <div>
          <CBButton
            children="Anterior"
            disabled={page === 0 || loading}
            onClick={() => onPageChange(page - 1)}
            color={activeTheme?.colorsPagination?.bgButtonPreviousPagination}
          />
          <CBButton
            children="Próxima"
            disabled={page + 1 >= totalPages || loading}
            onClick={() => onPageChange(page + 1)}
            color={activeTheme?.colorsPagination?.bgButtonNextPagination}
          />
        </div>
        {loading && isMobile && (
          <span className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 animate-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            Carregando...
          </span>
        )}
      </div>
    </div>
  );
}
