import type { CBMobileColumnRole, CBTableColumn } from "../../../datatable";
import type { CBInputMask, CBInputMaskFn } from "../../../types/components";
export interface FlatColumn<T> {
    headerName: string;
    field?: string;
    colId?: string;
    align?: "left" | "center" | "right";
    render?: (row: T) => React.ReactNode;
    /** Mesma assinatura do AG Grid: recebe `{ data, colDef }`, não a linha crua */
    valueGetter?: (params: {
        data: T;
        colDef: {
            field?: string;
            colId?: string;
            headerName?: string;
        };
    }) => unknown;
    mask?: CBInputMask | CBInputMaskFn;
    /** Papel da coluna no card mobile (ver CBTableColumn.mobile) */
    mobile?: CBMobileColumnRole;
    /** Coluna oculta (mesmo `hide` do AG Grid) */
    hide?: boolean | null;
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
    cellClass?: string | string[] | ((params: {
        data: T;
    }) => string | string[] | undefined);
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
export interface MobileLayout<T> {
    title?: FlatColumn<T>;
    trailing?: FlatColumn<T>;
    grid: FlatColumn<T>[];
    detail: FlatColumn<T>[];
}
/**
 * Distribui as colunas nas áreas do card mobile.
 *
 * Papéis definidos via `mobile` têm prioridade. As colunas sem papel
 * preenchem o que faltar: título (1ª), destaque (última com mask "currency"),
 * grade (até 4, só se nenhuma coluna pediu "grid") e o resto vai para
 * os detalhes.
 */
export declare function resolveMobileLayout<T>(columns: FlatColumn<T>[]): MobileLayout<T>;
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
export declare function getCellClass<T>(col: FlatColumn<T>, row: T): string;
