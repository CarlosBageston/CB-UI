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
export declare function flattenColumns<T>(columns: CBTableColumn<T>[]): FlatColumn<T>[];
/**
 * Busca o valor de um campo dentro de um registro.
 *
 * Caso o campo não exista ou esteja vazio,
 * retorna "-" para manter a tabela organizada.
 */
export declare function getValue<T>(row: T, field?: string): React.ReactNode;
export {};
