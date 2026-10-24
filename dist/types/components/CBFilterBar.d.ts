/**
 * Opção de coluna para filtragem
 */
export interface CBFilterOption<T> {
    /**
     * Identificador interno do filtro.
     */
    value: string;
    /**
     * Texto exibido para o usuário.
     */
    label: string;
    /**
     * Define como pegar o valor usado na busca.
     *
     * Caso não seja informado, usa o campo informado em `value`.
     */
    getValue?: (item: T) => unknown;
}
/**
 * Props do CBFilterBar
 */
interface CBFilterBarProps<T> {
    /** Dados originais que serão filtrados (modo local) */
    data?: T[];
    /** Colunas opcionais para filtro específico */
    columns?: CBFilterOption<T>[];
    /** Placeholder do campo de pesquisa */
    placeholder?: string;
    /** Valor inicial do input */
    initialQuery?: string;
    /** Callback que retorna os dados filtrados (modo local) */
    onChange?: (filteredData: T[]) => void;
    /**
     * Modo servidor: em vez de filtrar `data`, emite o termo e a coluna escolhida
     * (com debounce) para quem chama montar a busca no backend.
     */
    onSearchChange?: (search: {
        term: string;
        column?: string;
        columns: string[];
    }) => void;
    /**
     * Tempo de espera após a digitação antes de emitir `onSearchChange`.
     * @default 400
     */
    debounceMs?: number;
    /** Classes adicionais para o container */
    className?: string;
    /** Classes adicionais para o input */
    inputClassName?: string;
    /** Classes adicionais para o select */
    selectClassName?: string;
    /** Estilo inline opcional */
    style?: React.CSSProperties;
    /** Estilo opcional */
    theme?: "light" | "dark";
}
/**
 * CBFilterBar
 *
 * Componente de barra de filtro para listas e tabelas.
 * Permite buscar por qualquer coluna ou por coluna específica.
 *
 * @example
 * ```tsx
 * <CBFilterBar
 *   data={users}
 *   columns={[
 *     { value: "name", label: "Nome" },
 *     { value: "email", label: "E-mail" },
 *   ]}
 *   placeholder="Buscar usuário..."
 *   onChange={(filtered) => setFilteredUsers(filtered)}
 * />
 * ```
 */
declare function CBFilterBar<T>({ data, columns, placeholder, onChange, onSearchChange, debounceMs, initialQuery, className, inputClassName, selectClassName, style, theme, }: CBFilterBarProps<T>): import("react").JSX.Element;
export default CBFilterBar;
