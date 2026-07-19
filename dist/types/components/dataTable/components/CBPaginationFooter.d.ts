import { type CBTableMobileTheme } from "../theme/themeDataTable";
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
export declare function CBPaginationFooter({ page, pageSize, totalRows, loading, onPageChange, onPageSizeChange, isMobile, theme, pageSizeOptions, themeConfig, }: CBPaginationFooterProps): import("react").JSX.Element;
export {};
