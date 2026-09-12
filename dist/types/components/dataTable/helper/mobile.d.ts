import type { CBTableColumn } from "../../../datatable";
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
    editable?: boolean | ((params: {
        data: T;
    }) => boolean);
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
        colDef: {
            field?: string;
            colId?: string;
            headerName?: string;
        };
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
export declare function flattenColumns<T>(columns: CBTableColumn<T>[]): FlatColumn<T>[];
/**
 * Busca o valor de um campo dentro de um registro.
 *
 * Caso o campo não exista ou esteja vazio,
 * retorna "-" para manter a tabela organizada.
 */
export declare function getValue<T>(row: T, field?: string): React.ReactNode;
export declare function getDisplayValue<T>(row: T, col: FlatColumn<T>): React.ReactNode;
/** Retorna o tipo HTML do input com base no cellEditor do AG Grid */
export declare function getInputType(cellEditor?: string): string;
/** Retorna true se a coluna é editável para o row dado */
export declare function isColumnEditable<T>(col: FlatColumn<T>, row: T): boolean;
