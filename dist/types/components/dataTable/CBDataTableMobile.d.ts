import type { CBDataTableProps } from "../../datatable";
import { type CBTableMobileTheme } from "./theme/themeDataTable";
interface CBDataTableMobileProps<T> extends CBDataTableProps<T> {
    themeConfig?: Partial<CBTableMobileTheme>;
}
declare function CBDataTableMobile<T>({ columns, data, pageSize, emptyMessage, getRowId, onEdit, onDelete, selectionMode, theme, themeConfig, page, totalRows, onPageChange, onPageSizeChange, loading, defaultExpanded, singleClickEdit, onCellValueChanged, autoFocusFirstEditableCell, actions, }: CBDataTableMobileProps<T>): import("react").JSX.Element;
export default CBDataTableMobile;
