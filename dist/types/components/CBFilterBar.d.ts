/**
 * Opção de coluna para filtragem
 */
export interface CBFilterOption<T = unknown> {
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
    /** Dados originais que serão filtrados */
    data: T[];
    /** Colunas opcionais para filtro específico */
    columns?: CBFilterOption[];
    /** Placeholder do campo de pesquisa */
    placeholder?: string;
    /** Valor inicial do input */
    initialQuery?: string;
    /** Callback que retorna os dados filtrados */
    onChange: (filteredData: T[]) => void;
    /** Classes adicionais para o container */
    className?: string;
    /** Classes adicionais para o input */
    inputClassName?: string;
    /** Classes adicionais para o select */
    selectClassName?: string;
    /** Estilo inline opcional */
    style?: React.CSSProperties;
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
declare function CBFilterBar<T>({ data, columns, placeholder, onChange, initialQuery, className, inputClassName, selectClassName, style, }: CBFilterBarProps<T>): import("react").JSX.Element;
export default CBFilterBar;
