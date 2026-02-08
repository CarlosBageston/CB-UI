import type { CBColor } from "../theme/CBColor";
/**
 * Tipos de variantes do CBAutocomplete.
 * - `"search"`: utiliza `IonSearchbar` como input.
 * - `"select"`: utiliza um input padrão com dropdown customizado.
 */
export type CBAutocompleteVariant = "search" | "select";
/**
 * Props do componente CBAutocomplete.
 *
 * @template T Tipo dos itens que serão exibidos no autocomplete.
 */
export interface CBAutocompleteProps<T> {
    /** Lista de itens a serem exibidos */
    items: T[];
    /** Função que retorna o label a ser exibido para cada item */
    getLabel: (item: T) => string;
    /** Função que retorna o valor único de cada item */
    getValue: (item: T) => string | number;
    /** Callback chamado ao selecionar um item */
    onSelect: (item: T | undefined) => void;
    /** Placeholder do input */
    placeholder?: string;
    /** Cor do componente (usa as cores definidas em CBColor) */
    color?: CBColor;
    /** Define se o componente terá bordas arredondadas */
    rounded?: boolean;
    /** Define se o componente ocupará toda a largura disponível */
    fullWidth?: boolean;
    /** Mostra spinner de loading */
    loading?: boolean;
    /** Variante do autocomplete (`search` ou `select`) */
    variant?: CBAutocompleteVariant;
    /** Label opcional exibida acima do input (somente para variant="select") */
    label?: string;
    /** Classe CSS customizada para o container principal */
    className?: string;
    /** Estilos inline customizados para o container principal */
    style?: React.CSSProperties;
    /** Classe CSS customizada para o input/searchbar */
    inputClass?: string;
    /** Estilos inline customizados para o input/searchbar */
    inputStyle?: React.CSSProperties;
    /** Classe CSS customizada para o dropdown de resultados */
    dropdownClass?: string;
    /** Estilos inline customizados para o dropdown de resultados */
    dropdownStyle?: React.CSSProperties;
    /** Classe CSS customizada para cada item da lista */
    itemClass?: string;
    /** Estilos inline customizados para cada item da lista */
    itemStyle?: React.CSSProperties;
    /** Classe CSS customizada para a label (somente variant="select") */
    labelClass?: string;
}
/**
 * Componente CBAutocomplete genérico que permite buscar ou selecionar itens de uma lista.
 *
 * Suporta duas variantes:
 * - `"search"`: usa IonSearchbar nativo do Ionic.
 * - `"select"`: usa um input customizado com dropdown de itens filtráveis.
 *
 * @template T Tipo dos itens da lista
 * @param props Propriedades do componente
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * <CBAutocomplete
 *   items={users}
 *   getLabel={(u) => u.name}
 *   getValue={(u) => u.id}
 *   onSelect={(u) => console.log(u)}
 *   placeholder="Buscar usuário..."
 *   color="primary"
 *   variant="select"
 * />
 * ```
 */
declare function CBAutocomplete<T>({ items, getLabel, getValue, onSelect, placeholder, color, rounded, fullWidth, loading, variant, label, className, style, inputClass, inputStyle, dropdownClass, dropdownStyle, itemClass, itemStyle, labelClass }: CBAutocompleteProps<T>): import("react/jsx-runtime").JSX.Element;
export default CBAutocomplete;
