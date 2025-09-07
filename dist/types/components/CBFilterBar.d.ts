/**
 * Opção de coluna para filtragem
 */
export interface CBFilterOption {
    /** Valor interno da coluna */
    value: string;
    /** Label exibido no select */
    label: string;
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
declare function CBFilterBar<T>({ data, columns, placeholder, onChange, initialQuery, className, inputClassName, selectClassName, style, }: CBFilterBarProps<T>): import("react/jsx-runtime").JSX.Element;
export default CBFilterBar;
