import type { CBTableColumn } from "../../../datatable";
/**
 * Define as classes de estilo usadas pela tabela mobile.
 *
 * Permite alterar partes específicas da aparência da tabela,
 * como cards, textos, bordas e elementos de seleção.
 */
export interface CBTableMobileTheme {
    /** Área que envolve toda a tabela */
    wrapper: string;
    /** Estilo de cada card de registro */
    card: string;
    /** Estilo aplicado quando um registro está selecionado */
    cardSelected: string;
    /** Texto usado como título do campo principal */
    textTitle: string;
    /** Texto principal exibido nos registros */
    textPrimary: string;
    /** Texto secundário, como informações auxiliares */
    textMuted: string;
    /** Estilo do campo de busca */
    input: string;
    /** Estilo do ícone dentro do campo de busca */
    inputIcon: string;
    /** Linha separadora entre informações */
    divider: string;
    /** Estilo do contador de registros selecionados */
    badge: string;
    /** Borda do checkbox quando não está marcado */
    checkboxBorder: string;
}
/**
 * Temas padrões disponíveis para a tabela mobile.
 *
 * O componente usa esses estilos quando nenhum tema personalizado
 * é informado.
 */
export declare const DEFAULT_THEMES: Record<"dark" | "light", CBTableMobileTheme>;
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
