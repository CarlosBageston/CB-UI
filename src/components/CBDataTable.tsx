import CBButton from "./CBButton";
import { AgGridReact } from "ag-grid-react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useAGGridTheme } from "../hooks/useAGGridTheme";
import type { ColDef, ColGroupDef } from "ag-grid-community";
import { useEffect, useMemo, useRef, useState } from "react";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';


ModuleRegistry.registerModules([AllCommunityModule]);
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
function CBDataTable<T>({
  columns,
  data,
  pageSize = 5,
  emptyMessage = "Nenhum dado encontrado",
  onEdit,
  onDelete,
}: CBDataTableProps<T>) {
  const themeTable = useAGGridTheme('dark');
  const [selectedRow, setSelectedRow] = useState<T | null>(null);

  // referência do grid
  const gridRef = useRef<AgGridReact<T>>(null);
  const gridWrapperRef = useRef<HTMLDivElement>(null);

  const onSelectionChanged = () => {
    const selectedNodes = gridRef.current?.api.getSelectedNodes();
    setSelectedRow(selectedNodes?.[0]?.data ?? null);
  };


  const mapColumn = <T,>(col: CBTableColumn<T>): ColDef<T> | ColGroupDef<T> => {
    const totalCol = columns.reduce((sum, col) => sum + (col.col ?? 1), 0);
    if (col.children && col.children.length > 0) {
      // coluna com agrupamento
      return {
        headerName: col.headerName,
        children: col.children.map(mapColumn),
        flex: col.col ?? 1,
      };
    }
    return {
      field: col.field,
      headerName: col.headerName,
      flex: ((col.col ?? 1) / totalCol) * 12, // 12 colunas
      cellRenderer: col.render ? (params: any) => col.render!(params.data) : undefined,
      valueGetter: col.valueGetter,
      colId: col.colId,
      sortable: col.sortable,
      cellClass:
        col.align === "center"
          ? "ag-cell-center"
          : col.align === "right"
            ? "ag-cell-right"
            : "ag-cell-left",
    };
  };

  const columnDefs: (ColDef<T> | ColGroupDef<T>)[] = useMemo(() => columns.map(mapColumn), [columns]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (gridWrapperRef.current && !gridWrapperRef.current.contains(event.target as Node)) {
        setSelectedRow(null);
        gridRef.current?.api.deselectAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={gridWrapperRef} className="relative w-full">
      <AgGridReact
        ref={gridRef}
        rowData={data}
        defaultColDef={{ resizable: false }}
        columnDefs={columnDefs}
        theme={themeTable}
        animateRows
        rowSelection="single"
        domLayout="autoHeight"
        onSelectionChanged={onSelectionChanged}
        pagination={true}
        paginationPageSize={pageSize}
        paginationAutoPageSize={true}
        overlayNoRowsTemplate={`<span class="text-white">${emptyMessage || "Nenhum dado encontrado"}</span>`}
        localeText={{
          // Paginação
          page: "Página",
          of: "de",
          to: "até",
          next: "Próxima",
          previous: "Anterior",
          first: "Primeira",
          last: "Última",
        }}
      />
      {/* Botões flutuantes */}
      <div className="absolute -top-2 right-2 -translate-y-1/2 flex gap-2 z-10">
        {onEdit && <CBButton iconStart={<FiEdit size={18} />} color="primary" disabled={!selectedRow} onClick={() => selectedRow && onEdit?.(selectedRow)} />}
        {onDelete && <CBButton iconStart={<FiTrash2 size={18} />} color="danger" disabled={!selectedRow} onClick={() => selectedRow && onDelete?.(selectedRow)} />}
      </div>
    </div>
  );
}
export default CBDataTable;