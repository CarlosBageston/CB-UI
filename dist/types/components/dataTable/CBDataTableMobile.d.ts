import type { CBDataTableProps } from "../../datatable";
import { type CBTableMobileTheme } from "./helper/mobile";
interface CBDataTableMobileProps<T> extends CBDataTableProps<T> {
    themeConfig?: Partial<CBTableMobileTheme>;
}
declare function CBDataTableMobile<T>({ columns, data, pageSize, emptyMessage, getRowId, onEdit, onDelete, selectionMode, theme, themeConfig, page, totalRows, onPageChange, onPageSizeChange, loading, themePagination, }: CBDataTableMobileProps<T>): import("react").JSX.Element;
export default CBDataTableMobile;
