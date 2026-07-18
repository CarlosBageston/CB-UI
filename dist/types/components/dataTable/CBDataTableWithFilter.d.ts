import { type CBFilterOption } from "../CBFilterBar";
import type { CBDataTableProps } from "../../types/componentsDataTable";
interface CBDataTableWithFilterProps<T> extends CBDataTableProps<T> {
    filterColumns?: CBFilterOption[];
    filterPlaceholder?: string;
    showFilter?: boolean;
    filterClassName?: string;
}
declare function CBDataTableWithFilter<T>({ data, filterColumns, filterPlaceholder, showFilter, filterClassName, ...tableProps }: CBDataTableWithFilterProps<T>): import("react").JSX.Element;
export default CBDataTableWithFilter;
