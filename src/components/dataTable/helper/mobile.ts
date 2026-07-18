import type { CBTableColumn } from "../../../datatable";

/**
 * Define as classes de estilo usadas pela tabela mobile.
 *
 * Permite alterar partes específicas da aparência da tabela,
 * como cards, textos, bordas e elementos de seleção.
 */
export interface CBTableMobileTheme {
  /** Área que envolve toda a tabela */
  wrapper: string;

  /** Estilo de cada card de registro */
  card: string;

  /** Estilo aplicado quando um registro está selecionado */
  cardSelected: string;

  /** Texto usado como título do campo principal */
  textTitle: string;

  /** Texto principal exibido nos registros */
  textPrimary: string;

  /** Texto secundário, como informações auxiliares */
  textMuted: string;

  /** Estilo do campo de busca */
  input: string;

  /** Estilo do ícone dentro do campo de busca */
  inputIcon: string;

  /** Linha separadora entre informações */
  divider: string;

  /** Estilo do contador de registros selecionados */
  badge: string;

  /** Borda do checkbox quando não está marcado */
  checkboxBorder: string;
}

/**
 * Temas padrões disponíveis para a tabela mobile.
 *
 * O componente usa esses estilos quando nenhum tema personalizado
 * é informado.
 */
export const DEFAULT_THEMES: Record<"dark" | "light", CBTableMobileTheme> = {
  dark: {
    wrapper: "bg-slate-900 border-slate-800 text-slate-100",
    card: "bg-slate-950 border-slate-800/80 hover:border-slate-800",
    cardSelected:
      "ring-1 ring-primary/80 border-primary shadow-lg shadow-primary-950/20",
    textTitle: "text-primary-400",
    textPrimary: "text-slate-100",
    textMuted: "text-slate-400",
    input:
      "bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-600 focus:ring-primary-500/50 focus:border-primary-500",
    inputIcon: "text-slate-500",
    divider: "border-slate-800/80",
    badge: "bg-slate-800 text-slate-300",
    checkboxBorder: "border-slate-700",
  },
  light: {
    wrapper: "bg-white border-slate-200 text-slate-800",
    card: "bg-slate-50 border-[#e7e5e4] hover:bg-slate-100",
    cardSelected:
      "ring-1 ring-primary border-primary-200 shadow-md shadow-primary-500/5",
    textTitle: "text-primary-600",
    textPrimary: "text-slate-800",
    textMuted: "text-slate-500",
    input:
      "bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 focus:ring-primary-500/30 focus:border-primary-500",
    inputIcon: "text-slate-400",
    divider: "border-slate-150",
    badge: "bg-slate-100 text-slate-700",
    checkboxBorder: "border-slate-300",
  },
};

interface FlatColumn<T> {
  headerName: string;
  field?: string;
  align?: "left" | "center" | "right";
  render?: (row: T) => React.ReactNode;
  valueGetter?: (row: T) => React.ReactNode;
}

/**
 * Converte colunas agrupadas em uma lista simples.
 *
 * Quando uma coluna possui outras colunas dentro dela,
 * elas são abertas e retornadas individualmente.
 *
 * É usado principalmente para exibir os dados no formato
 * de card da tabela mobile.
 */
export function flattenColumns<T>(
  columns: CBTableColumn<T>[],
): FlatColumn<T>[] {
  const flat: FlatColumn<T>[] = [];

  columns.forEach((col) => {
    if (col.children && col.children.length > 0) {
      flat.push(...flattenColumns(col.children));
      return;
    }

    flat.push({
      headerName: col.headerName ?? "",
      field: (col as unknown as { field?: string }).field,
      align: col.align,
      render: col.render,
      valueGetter: (col as any).valueGetter,
    });
  });

  return flat;
}

/**
 * Busca o valor de um campo dentro de um registro.
 *
 * Caso o campo não exista ou esteja vazio,
 * retorna "-" para manter a tabela organizada.
 */
export function getValue<T>(row: T, field?: string): React.ReactNode {
  if (!field) return "-";
  const value = (row as Record<string, unknown>)[field];
  if (value === null || value === undefined || value === "") return "-";
  return String(value);
}
