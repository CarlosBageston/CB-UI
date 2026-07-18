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
export declare function CBPaginationFooter({ page, pageSize, totalRows, loading, onPageChange, onPageSizeChange, isMobile, pageSizeOptions, theme, colorsPagination, }: CBPaginationFooterProps): import("react").JSX.Element;
export {};
