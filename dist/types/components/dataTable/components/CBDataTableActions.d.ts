import type { CBDataTableAction } from "../../../types/componentsDataTable";
interface CBDataTableActionsProps<T> {
    selectedRows: T[];
    onEdit?: (row: T) => void;
    onDelete?: () => void;
    actions?: CBDataTableAction<T>[];
}
declare function CBDataTableActions<T>({ selectedRows, onEdit, onDelete, actions, }: CBDataTableActionsProps<T>): import("react").JSX.Element;
export default CBDataTableActions;
