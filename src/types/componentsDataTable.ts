import type { ColDef } from "ag-grid-community";
import type { CSSProperties, ReactNode } from "react";

/** Base para componentes que aceitam className e style */
interface CBBaseProps {
  className?: string;
  style?: CSSProperties;
}

/** ----------------- CBDataTable ----------------- */
export interface CBTableColumn<T> extends Omit<ColDef<T>, "children"> {
  col?: number;
  render?: (item: T) => ReactNode;
  children?: CBTableColumn<T>[];
  align?: "left" | "center" | "right";
}

export interface CBDataTableProps<T> extends CBBaseProps {
  columns: CBTableColumn<T>[];
  data: T[];
  pageSize?: number;
  emptyMessage?: string;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}
/**
 * Representa uma coluna da tabela personalizada.
 *
 * @template T Tipo de dado da linha.
 */
export interface CBTableColumn<T> extends Omit<ColDef<T>, "children"> {
  /** Número de colunas que esta coluna ocupa (flex) */
  col?: number;
  /** Renderiza conteúdo customizado para a célula */
  render?: (item: T) => React.ReactNode;
  /** Colunas filhas para agrupamento */
  children?: CBTableColumn<T>[];
  /** Alinhamento do texto da célula */
  align?: "left" | "center" | "right";
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
