import type { CBColorOrString } from "../../theme/CBColor";

export type CBAutocompleteStatus =
  | "idle"
  | "loading"
  | "error"
  | "empty"
  | "results";

export interface CBAutocompleteProps<T> {
  /** Label exibido acima do input (mesmo padrão do CBSelect). */
  label?: string;

  /** Item atualmente selecionado (controlado). */
  value?: T | null;

  /** Lista de itens para busca local. Ignorado se `onSearch` for informado. */
  items?: T[];

  /** Extrai o texto exibido de um item. */
  getLabel(item: T): string;

  /** Extrai um identificador único do item. */
  getValue(item: T): string | number;

  /** Disparado quando o usuário seleciona um item. */
  onValueChange?(item: T): void;

  /**
   * Função assíncrona de busca remota. Quando informada, o componente
   * entra em "modo remoto" e ignora a prop `items`.
   */
  onSearch?(text: string): Promise<T[]>;

  placeholder?: string;

  helperText?: string;

  error?: string;

  /** Loading controlado externamente (somado ao loading interno da busca remota). */
  loading?: boolean;

  disabled?: boolean;

  /** Tempo de debounce (ms) para busca remota. Padrão: 500. */
  debounce?: number;

  /** Quantidade mínima de caracteres para disparar busca remota. Padrão: 2. */
  minSearchLength?: number;

  color?: CBColorOrString;

  radius?: "none" | "sm" | "md" | "lg" | "full";

  /** Texto exibido quando a busca não retorna nenhum resultado. */
  noResultsText?: string;

  /** Exibe um botão para limpar o valor digitado. Padrão: true. */
  clearable?: boolean;
}
