import type { CBTableColumn } from "../../../datatable";
import { applyMask } from "../../../hooks/useInputMask";
import type { CBInputMask, CBInputMaskFn } from "../../../types/components";

export interface FlatColumn<T> {
  headerName: string;
  field?: string;
  colId?: string;
  align?: "left" | "center" | "right";
  render?: (row: T) => React.ReactNode;
  valueGetter?: (row: T) => React.ReactNode;
  mask?: CBInputMask | CBInputMaskFn;
  /** Se a célula é editável */
  editable?: boolean | ((params: { data: T }) => boolean);
  /** Editor AG Grid (usado para derivar o tipo do input HTML) */
  cellEditor?: string;
  /** Parâmetros do editor (min, max, precision, values…) */
  cellEditorParams?: Record<string, unknown>;
  /** Ativa edição com clique único */
  singleClickEdit?: boolean;
  /** Callback chamado quando o valor é alterado */
  onCellValueChanged?: (params: {
    data: T;
    oldValue: unknown;
    newValue: unknown;
    colDef: { field?: string; colId?: string; headerName?: string };
  }) => void;
}

/**
 * Converte colunas agrupadas em uma lista simples.
 *
 * Quando uma coluna possui outras colunas dentro dela,
 * elas são abertas e retornadas individualmente.
 *
 * É usado principalmente para exibir os dados no formato
 * de card da tabela mobile.
 */
export function flattenColumns<T>(
  columns: CBTableColumn<T>[],
): FlatColumn<T>[] {
  const flat: FlatColumn<T>[] = [];

  columns.forEach((col) => {
    if (col.children && col.children.length > 0) {
      flat.push(...flattenColumns(col.children));
      return;
    }

    flat.push({
      headerName: col.headerName ?? "",
      field: (col as unknown as { field?: string }).field,
      colId: col.colId,
      align: col.align,
      render: col.render,
      valueGetter: (col as any).valueGetter,
      mask: col.mask,
      editable: col.editable as FlatColumn<T>["editable"],
      cellEditor: col.cellEditor as string | undefined,
      cellEditorParams: col.cellEditorParams as
        | Record<string, unknown>
        | undefined,
      singleClickEdit: col.singleClickEdit,
      onCellValueChanged: col.onCellValueChanged as
        | FlatColumn<T>["onCellValueChanged"]
        | undefined,
    });
  });

  return flat;
}

/**
 * Busca o valor de um campo dentro de um registro.
 *
 * Caso o campo não exista ou esteja vazio,
 * retorna "-" para manter a tabela organizada.
 */
export function getValue<T>(row: T, field?: string): React.ReactNode {
  if (!field) return "-";

  const value = field.split(".").reduce<unknown>((current, key) => {
    if (current === null || current === undefined) {
      return undefined;
    }

    return (current as Record<string, unknown>)[key];
  }, row);

  if (value === null || value === undefined || value === "") return "-";
  return String(value);
}

export function getDisplayValue<T>(
  row: T,
  col: FlatColumn<T>,
): React.ReactNode {
  if (col.render) return col.render(row);

  const rawValue = col.valueGetter
    ? col.valueGetter(row)
    : getValue(row, col.field);

  if (rawValue === null || rawValue === undefined || rawValue === "")
    return "-";

  return col.mask ? applyMask(rawValue, col.mask) : String(rawValue);
}

/** Retorna o tipo HTML do input com base no cellEditor do AG Grid */
export function getInputType(cellEditor?: string): string {
  switch (cellEditor) {
    case "agNumberCellEditor":
      return "number";
    case "agDateCellEditor":
      return "date";
    case "agCheckboxCellEditor":
      return "checkbox";
    default:
      return "text";
  }
}

/** Retorna true se a coluna é editável para o row dado */
export function isColumnEditable<T>(col: FlatColumn<T>, row: T): boolean {
  if (!col.editable) return false;
  if (typeof col.editable === "function") {
    return col.editable({ data: row });
  }
  return col.editable;
}
