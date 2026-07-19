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
export declare const DEFAULT_THEMES: Record<"dark" | "light", CBTableMobileTheme>;
