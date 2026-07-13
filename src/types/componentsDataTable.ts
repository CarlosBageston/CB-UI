import type { ColDef } from "ag-grid-community";
import type { CSSProperties, ReactNode } from "react";

/** Base para componentes que aceitam className e style */
interface CBBaseProps {
  className?: string;
  style?: CSSProperties;
}

type PassthroughColDefKeys =
  | "field"
  | "headerName"
  | "valueGetter"
  | "valueFormatter"
  | "colId"
  | "sortable"
  | "comparator"
  | "filter"
  | "filterParams"
  | "editable"
  | "pinned"
  | "width"
  | "minWidth"
  | "maxWidth"
  | "hide";

/** ----------------- CBDataTable ----------------- */

/**
 * Representa uma coluna da tabela personalizada.
 *
 * @template T Tipo de dado da linha.
 */
export interface CBTableColumn<T> extends Pick<
  ColDef<T>,
  PassthroughColDefKeys
> {
  /** Número de colunas que esta coluna ocupa (flex) */
  col?: number;
  /** Renderiza conteúdo customizado para a célula */
  render?: (item: T) => ReactNode;
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
export interface CBDataTableProps<T> extends CBBaseProps {
  /** Array de colunas da tabela */
  columns: CBTableColumn<T>[];
  /** Dados exibidos na tabela */
  data: T[];
  /** Número de linhas por página */
  pageSize?: number;
  /** Mensagem exibida quando não há dados */
  emptyMessage?: string;
  /**
   * Identificador estável de cada linha. Recomendado sempre que `data`
   * puder ser atualizado (ex: após um edit/delete), para o AG Grid não
   * perder seleção/estado ao reconciliar por índice.
   */
  getRowId?: (item: T) => string;
  /** Callback ao clicar no botão de editar linha */
  onEdit?: (item: T) => void;
  /** Callback ao clicar no botão de excluir linha */
  onDelete?: (item: T) => void;
  /**
   * "single" (padrão): só uma linha selecionável por vez, sem checkbox.
   * "multiple": exibe checkboxes e permite selecionar várias linhas.
   * No modo "multiple", `onDelete` é chamado uma vez por linha selecionada
   * e `onEdit` só fica habilitado quando exatamente 1 linha está selecionada.
   */
  selectionMode?: "single" | "multiple";
  /** Tema da tabela */
  theme?: "dark" | "light";
}
