import type { CBTableColumn } from "../../../datatable";

interface FlatColumn<T> {
  headerName: string;
  field?: string;
  align?: "left" | "center" | "right";
  render?: (row: T) => React.ReactNode;
  valueGetter?: (row: T) => React.ReactNode;
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
