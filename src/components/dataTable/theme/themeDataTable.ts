/**
 * Define as classes de estilo usadas pela tabela mobile.
 *
 * Permite alterar partes específicas da aparência da tabela,
 * como cards, textos, bordas e elementos de seleção.
 */
export interface CBTableMobileTheme {
  /**Usar tailwind */
  classes: {
    /** Área que envolve toda a tabela */
    wrapper: string;

    /** Estilo de cada card de registro */
    card: string;

    /** Estilo aplicado quando um registro está selecionado */
    cardSelected: string;

    /** Texto principal exibido nos registros */
    textPrimary: string;

    /** Texto secundário, como informações auxiliares */
    textMuted: string;

    /** Linha separadora entre informações */
    divider: string;

    /** Estilo do contador de registros selecionados */
    badge: string;

    /** Borda do checkbox quando não está marcado */
    checkboxBorder: string;

    /** Selecionar linhas */
    selectPagination: string;

    /** Fundo do painel de detalhes ("Ver mais") e do skeleton */
    surfaceMuted?: string;
  };
  /**Usar cores hexadecimal para ionic */
  colorsPagination: {
    /** Botão anterior da paginação */
    bgButtonPreviousPagination: string;

    /** Botão next da paginação */
    bgButtonNextPagination: string;
  };
  /**Usar cores hexadecimal para ionic */
  colorsFiler: {
    background: string;
    text: string;
    border: string;
  };
}

/**
 * Temas padrões disponíveis para a tabela mobile.
 *
 * O componente usa esses estilos quando nenhum tema personalizado
 * é informado.
 */
export const DEFAULT_THEMES: Record<"dark" | "light", CBTableMobileTheme> = {
  dark: {
    classes: {
      wrapper: "bg-[#1f2836] border-slate-800 text-slate-100",
      card: "bg-[#1f2836] border-slate-700/60 shadow-sm shadow-black/20",
      cardSelected:
        "ring-2 ring-(--cb-color-primary)/70 border-(--cb-color-primary)",
      surfaceMuted: "bg-[#0a121d]/60",
      textPrimary: "text-slate-100",
      textMuted: "text-slate-400",
      selectPagination: "bg-[#1f2836] border border-slate-700",
      divider: "border-slate-700/50",
      badge: "bg-slate-800 text-slate-300",
      checkboxBorder: "border-slate-700",
    },
    colorsPagination: {
      bgButtonPreviousPagination: "",
      bgButtonNextPagination: "",
    },
    colorsFiler: {
      background: "#1f2836",
      text: "#f1f5f9",
      border: "#334155",
    },
  },
  light: {
    classes: {
      wrapper: "text-slate-800",
      card: "bg-white border-slate-200 shadow-sm shadow-slate-900/5",
      cardSelected:
        "ring-2 ring-(--cb-color-primary)/40 border-(--cb-color-primary)",
      textPrimary: "text-slate-800",
      selectPagination: "bg-white border border-[#31415899]",
      textMuted: "text-slate-500",
      divider: "border-slate-100",
      surfaceMuted: "bg-slate-50",
      badge: "bg-slate-100 text-slate-700",
      checkboxBorder: "border-slate-300",
    },
    colorsPagination: {
      bgButtonPreviousPagination: "",
      bgButtonNextPagination: "",
    },
    colorsFiler: {
      background: "#ffffff",
      text: "#1e293b",
      border: "#cbd5e1",
    },
  },
};
