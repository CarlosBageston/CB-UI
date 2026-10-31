import type { ColDef } from "ag-grid-community";
import type { CSSProperties, ReactNode } from "react";
import type { CBInputMask, CBInputMaskFn } from "./components";
import type { CBColorOrString } from "../theme/CBColor";

/** Base para componentes que aceitam className e style */
interface CBBaseProps {
  className?: string;
  style?: CSSProperties;
}

type PassthroughColDefKeys =
  | "field"
  | "headerName"
  | "valueGetter"
  | "valueSetter"
  | "valueFormatter"
  | "colId"
  | "sortable"
  | "comparator"
  | "filter"
  | "filterParams"
  | "editable"
  | "cellEditor"
  | "cellEditorParams"
  | "cellEditorPopup"
  | "cellEditorPopupPosition"
  | "onCellValueChanged"
  | "singleClickEdit"
  | "pinned"
  | "width"
  | "minWidth"
  | "maxWidth"
  | "hide"
  | "cellClass"
  | "cellStyle"
  | "valueParser";

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
  mask?: CBInputMask | CBInputMaskFn;
  /**
   * Papel da coluna no card mobile. Se omitido, é decidido automaticamente:
   * 1ª coluna = "title", última coluna com mask "currency" (ou a 2ª coluna)
   * = "trailing" e o restante = "detail".
   * - "title": nome principal, na linha do card
   * - "trailing": segunda informação, à direita do título
   * - "grid": sempre visível, em grade de 2 colunas abaixo da linha (só explícito)
   * - "detail": visível só ao expandir
   * - "hidden": não aparece no mobile
   */
  mobile?: CBMobileColumnRole;
}

export type CBMobileColumnRole =
  | "title"
  | "trailing"
  | "grid"
  | "detail"
  | "hidden";

/**
 * Modo de paginação.
 * - "client": `data` é a lista completa e a tabela fatia as páginas
 * - "server": `data` já é a página atual e `totalRows` é o total no backend
 *
 * Quando omitido: "server" se `onPageChange` for informado, senão "client".
 */
export type PaginationMode = "client" | "server";

/** Direção de ordenação. */
export type CBSortDirection = "asc" | "desc";

/** Ordenação atual da tabela. `field` é o `colId`/`field` da coluna. */
export interface CBTableSort {
  field: string;
  direction: CBSortDirection;
}

/** Busca textual vinda do `CBFilterBar`. */
export interface CBTableSearch {
  /** Texto digitado (já com debounce). */
  term: string;
  /** Coluna escolhida no seletor. `undefined` = "Todas". */
  column?: string;
  /** Todas as colunas pesquisáveis (`filterColumns`), útil para buscar em "Todas". */
  columns: string[];
}

/**
 * Consulta montada pela tabela e entregue ao `fetchData`.
 *
 * @template F Formato dos filtros externos (`filters`).
 */
export interface CBTableQuery<F = Record<string, unknown>> {
  /** Página atual, começando em 0. */
  page: number;
  pageSize: number;
  search?: CBTableSearch;
  sort?: CBTableSort;
  /** Filtros externos informados na prop `filters` (ex: um `CBSegment`). */
  filters: F;
}

/** Resultado esperado do `fetchData`. */
export interface CBTableFetchResult<T> {
  rows: T[];
  /** Total de registros no backend (todas as páginas). */
  total: number;
}

/**
 * Função que busca uma página no backend.
 * Repasse o `signal` para o fetch/axios para que requests antigas sejam canceladas.
 */
export type CBTableFetcher<T, F = Record<string, unknown>> = (
  query: CBTableQuery<F>,
  signal: AbortSignal,
) => Promise<CBTableFetchResult<T>>;

/** Métodos expostos via `tableRef` no modo `fetchData`. */
export interface CBDataTableHandle {
  /** Busca a página atual de novo (ex: após criar/editar fora da tabela). */
  reload: () => void;
  /** Vai para uma página específica. */
  setPage: (page: number) => void;
}

/**
 * Representa uma ação da tabela.
 *
 * @template T Tipo de dado da linha.
 */
export interface CBDataTableAction<T> {
  children: React.ReactNode;
  icon?: ReactNode;
  color?: CBColorOrString;
  onClick: (rows: T[]) => void;
  disabled?: (rows: T[]) => boolean;
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
  getRowId: (item: T) => string;
  /** Callback ao clicar no botão de editar linha */
  onEdit?: (item: T) => void;
  /**
   * Callback ao clicar no botão de excluir linha.
   * Pode retornar uma Promise: no modo `fetchData`, a tabela espera e recarrega.
   */
  onDelete?: (item: T) => void | Promise<unknown>;
  /**
   * "single" (padrão): só uma linha selecionável por vez, sem checkbox.
   * "multiple": exibe checkboxes e permite selecionar várias linhas.
   * No modo "multiple", `onDelete` é chamado uma vez por linha selecionada
   * e `onEdit` só fica habilitado quando exatamente 1 linha está selecionada.
   */
  selectionMode?: "single" | "multiple";
  /** Tema da tabela */
  theme?: "dark" | "light";

  /** Modo da tabela (móvel ou desktop)
   * @default auto
   */
  modeTable?: "mobile" | "desktop" | "auto";

  /** Modo de paginação. Veja `PaginationMode`. */
  paginationMode?: PaginationMode;

  /**
   * Props usadas quando paginationMode === "server"
   */
  /** Número da página atual (controlado). Omitido = a tabela controla. */
  page?: number;
  /** Total de linhas da tabela */
  totalRows?: number;
  /** Callback ao mudar de página */
  onPageChange?: (page: number) => void;
  /** Callback ao mudar o tamanho da página */
  onPageSizeChange?: (pageSize: number) => void;
  /** Indica se a tabela está carregando dados */
  loading?: boolean;
  /**
   * Ordenação atual (controlada). Usado com `onSortChange` para ordenar no servidor.
   */
  sort?: CBTableSort | null;
  /**
   * Quando informado, o clique no cabeçalho (desktop) não ordena localmente:
   * apenas notifica a nova ordenação para o servidor ordenar.
   */
  onSortChange?: (sort: CBTableSort | null) => void;
  /**
   * Define se os cards já iniciam expandidos.
   * Quando omitido, inicia fechado, exceto se houver coluna editável.
   */
  defaultExpanded?: boolean;
  /** Habilita edição com clique único ao invés de duplo clique */
  singleClickEdit?: boolean;
  /** Cancela/conclui edição quando a célula perde o foco */
  stopEditingWhenCellsLoseFocus?: boolean;
  /** Callback quando o valor de uma célula editável é alterado */
  onCellValueChanged?: (event: {
    data: T;
    oldValue: unknown;
    newValue: unknown;
    colDef: ColDef<T>;
  }) => void;
  /** Inicia a edição automaticamente na primeira célula editável da primeira linha ao montar a tabela */
  autoFocusFirstEditableCell?: boolean;

  actions?: CBDataTableAction<T>[];

  showFooter?: boolean;
}
