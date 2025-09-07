import type { ColDef } from "ag-grid-community";
/**
 * Representa uma coluna da tabela personalizada.
 *
 * @template T Tipo de dado da linha.
 */
export interface CBTableColumn<T> extends Omit<ColDef<T>, 'children'> {
    /** Número de colunas que esta coluna ocupa (flex) */
    col?: number;
    /** Renderiza conteúdo customizado para a célula */
    render?: (item: T) => React.ReactNode;
    /** Colunas filhas para agrupamento */
    children?: CBTableColumn<T>[];
    /** Alinhamento do texto da célula */
    align?: 'left' | 'center' | 'right';
}
/**
 * Props do componente CBDataTable
 *
 * @template T Tipo do dado da linha.
 */
export interface CBDataTableProps<T> {
    /** Array de colunas da tabela */
    columns: CBTableColumn<T>[];
    /** Dados exibidos na tabela */
    data: T[];
    /** Número de linhas por página */
    pageSize?: number;
    /** Mensagem exibida quando não há dados */
    emptyMessage?: string;
    /** Callback ao clicar no botão de editar linha */
    onEdit?: (item: T) => void;
    /** Callback ao clicar no botão de excluir linha */
    onDelete?: (item: T) => void;
}
/**
 * CBDataTable
 *
 * Componente de tabela baseado em AG Grid com:
 * - Suporte a colunas agrupadas
 * - Renderização customizada de células
 * - Paginação
 * - Seleção de linha única
 * - Botões flutuantes de editar/excluir
 *
 * @template T Tipo do dado das linhas
 * @param props Propriedades da tabela
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * interface User {
 *   id: number;
 *   name: string;
 *   email: string;
 * }
 *
 * const columns: CBTableColumn<User>[] = [
 *   { field: "id", headerName: "ID" },
 *   { field: "name", headerName: "Nome" },
 *   { field: "email", headerName: "Email", align: "center" },
 * ];
 *
 * const data: User[] = [
 *   { id: 1, name: "Carlos", email: "carlos@email.com" },
 *   { id: 2, name: "Ana", email: "ana@email.com" },
 * ];
 *
 * <CBDataTable
 *   columns={columns}
 *   data={data}
 *   pageSize={5}
 *   onEdit={(user) => console.log("Editar", user)}
 *   onDelete={(user) => console.log("Excluir", user)}
 * />
 * ```
 */
declare function CBDataTable<T>({ columns, data, pageSize, emptyMessage, onEdit, onDelete, }: CBDataTableProps<T>): import("react/jsx-runtime").JSX.Element;
export default CBDataTable;
