import type { CBDataTableProps } from "../datatable";
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
declare function CBDataTable<T>({ columns, data, pageSize, emptyMessage, onEdit, onDelete, }: CBDataTableProps<T>): import("react").JSX.Element;
export default CBDataTable;
