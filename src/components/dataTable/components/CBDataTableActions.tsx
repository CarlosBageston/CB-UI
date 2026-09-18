import CBButton from "../../CBButton";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import type { CBDataTableAction } from "../../../types/componentsDataTable";

interface CBDataTableActionsProps<T> {
  selectedRows: T[];

  onEdit?: (row: T) => void;
  onDelete?: () => void;

  actions?: CBDataTableAction<T>[];
}

function CBDataTableActions<T>({
  selectedRows,
  onEdit,
  onDelete,
  actions = [],
}: CBDataTableActionsProps<T>) {
  return (
    <div className="flex items-center gap-2">
      {onEdit && (
        <CBButton
          aria-label="Editar"
          color="primary"
          iconStart={<FiEdit size={18} />}
          disabled={selectedRows.length !== 1}
          onClick={() => {
            if (selectedRows.length === 1) {
              onEdit(selectedRows[0]);
            }
          }}
          children=""
        />
      )}

      {onDelete && (
        <CBButton
          aria-label="Excluir"
          color="danger"
          iconStart={<FiTrash2 size={18} />}
          disabled={selectedRows.length === 0}
          onClick={onDelete}
          children=""
        />
      )}

      {actions.map((action, index) => {
        const disabled = action.disabled
          ? action.disabled(selectedRows)
          : false;

        return (
          <CBButton
            key={index}
            color={action.color ?? "secondary"}
            iconStart={action.icon}
            disabled={disabled}
            onClick={() => {
              if (!disabled) {
                action.onClick(selectedRows);
              }
            }}
            children={action.children}
          />
        );
      })}
    </div>
  );
}

export default CBDataTableActions;
