import { type CBFilterOption } from "../CBFilterBar";
import type { CBDataTableProps } from "../../types/componentsDataTable";
interface CBDataTableWithFilterProps<T> extends CBDataTableProps<T> {
    filterColumns?: CBFilterOption[];
    filterPlaceholder?: string;
    filterClassName?: string;
}
declare function CBDataTableWithFilter<T>({ data, filterColumns, filterPlaceholder, filterClassName, theme, ...tableProps }: CBDataTableWithFilterProps<T>): import("react").JSX.Element;
export default CBDataTableWithFilter;
