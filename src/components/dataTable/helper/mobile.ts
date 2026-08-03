import type { CBTableColumn } from "../../../datatable";
import { applyMask } from "../../../hooks/useInputMask";
import type { CBInputMask, CBInputMaskFn } from "../../../types/components";

interface FlatColumn<T> {
  headerName: string;
  field?: string;
  align?: "left" | "center" | "right";
  render?: (row: T) => React.ReactNode;
  valueGetter?: (row: T) => React.ReactNode;
  mask?: CBInputMask | CBInputMaskFn;
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
      align: col.align,
      render: col.render,
      valueGetter: (col as any).valueGetter,
      mask: col.mask,
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
  const value = (row as Record<string, unknown>)[field];
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
