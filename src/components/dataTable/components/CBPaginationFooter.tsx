import CBButton from "../../CBButton";

interface CBPaginationFooterProps {
  page: number;
  pageSize: number;
  totalRows: number;
  loading?: boolean;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  pageSizeOptions?: number[];
  isMobile?: boolean;
  colorsPagination?: {
    text?: string;
    textSelect?: string;
    bgColorSelect?: string;
    bgColorButtonNext?: string;
    bgColorButtonPrevious?: string;
  };
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
  pageSizeOptions = [10, 20, 50],
  theme,
  colorsPagination,
}: CBPaginationFooterProps) {
  const totalPages = Math.max(Math.ceil(totalRows / pageSize), 1);
  const isLigth = theme === "light";
  const textColor = colorsPagination?.text
    ? colorsPagination?.text
    : !isMobile
      ? "text-zinc-900"
      : isLigth
        ? "text-zinc-600"
        : "text-zinc-200";
  const selectTextColor = colorsPagination?.textSelect
    ? colorsPagination?.textSelect
    : isLigth
      ? "text-black"
      : "text-white";
  const bgColorSelect = colorsPagination?.bgColorSelect
    ? colorsPagination?.bgColorSelect
    : isMobile && !isLigth
      ? "bg-gray-800"
      : isMobile && isLigth
        ? "bg-gray-100"
        : isLigth
          ? "bg-gray-600"
          : "bg-gray-100";
  return (
    <div
      className={`flex items-center gap-1 px-4 py-3 text-sm ${textColor} ${isMobile ? "flex-col justify-center" : "flex-row justify-between"}`}
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
          <span className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 animate-pulse">
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
            <span className={`text-xs ${textColor}`}>Linhas por página:</span>
            <select
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              style={{ color: selectTextColor }}
              className={`${bgColorSelect} rounded-md px-2 py-1 text-xs font-medium outline-none cursor-pointer focus:ring-1 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
            >
              {pageSizeOptions.map((size) => (
                <option
                  key={size}
                  value={size}
                  style={{ color: selectTextColor }}
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
            color={colorsPagination?.bgColorButtonPrevious}
          />
          <CBButton
            children="Próxima"
            disabled={page + 1 >= totalPages || loading}
            onClick={() => onPageChange(page + 1)}
            color={colorsPagination?.bgColorButtonNext}
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
