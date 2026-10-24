import React from "react";
import type { CBColorOrString, CSSVars } from "../../theme/CBColor";
/**
 * Variantes visuais suportadas.
 *
 * - `soft`: trilho neutro com indicador "card" elevado (estilo iOS)
 * - `solid`: trilho neutro com indicador preenchido pela cor
 * - `outline`: trilho com borda e indicador tonalizado pela cor
 * - `underline`: sem trilho, indicador como barra inferior (estilo tabs)
 * - `pills`: chips separados que quebram linha, cada um podendo ter sua própria cor
 *   (ideal para filtros de status com contadores)
 */
export type CBSegmentVariant = "soft" | "solid" | "outline" | "underline" | "pills";
/**
 * Tamanhos disponíveis.
 */
export type CBSegmentSize = "small" | "medium" | "large";
/**
 * Arredondamento do trilho/indicador.
 */
export type CBSegmentRounded = "none" | "sm" | "md" | "lg" | "xl" | "full" | (string & {});
/**
 * Item padrão aceito quando `getLabel`/`getValue` não são informados.
 */
export interface CBSegmentOption {
    label: React.ReactNode;
    value: string | number;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    disabled?: boolean;
    /** Cor própria do item quando ativo (sobrescreve `color`). */
    color?: CBColorOrString;
}
export interface CBSegmentProps<T> {
    /**
     * Itens exibidos como segmentos.
     *
     * Aceita primitivos (`string`/`number`), objetos `CBSegmentOption`
     * ou qualquer objeto quando `getLabel`/`getValue` forem informados.
     */
    items: T[];
    /**
     * Valor selecionado (modo controlado). Pode ser o próprio item ou seu identificador.
     */
    value?: T | string | number | null;
    /**
     * Valor inicial (modo não controlado).
     */
    defaultValue?: T | string | number | null;
    /**
     * Callback disparado ao selecionar um segmento.
     */
    onValueChange?: (item: T) => void;
    /**
     * Extrai o rótulo do item.
     *
     * @default item.label ?? String(item)
     */
    getLabel?: (item: T) => React.ReactNode;
    /**
     * Extrai a chave única do item.
     *
     * @default item.value ?? item
     */
    getValue?: (item: T) => string | number;
    /**
     * Renderiza um ícone para o item.
     *
     * @default item.icon
     */
    renderIcon?: (item: T, isSelected: boolean) => React.ReactNode;
    /**
     * Renderiza um badge (contador, status) ao lado do rótulo.
     *
     * @default item.badge
     */
    renderBadge?: (item: T, isSelected: boolean) => React.ReactNode;
    /**
     * Cor própria de cada item quando ativo (sobrescreve `color`).
     * Útil na variante `pills` para filtros de status.
     *
     * @default item.color
     */
    getColor?: (item: T) => CBColorOrString | undefined;
    /**
     * Desabilita todos os segmentos ou apenas alguns via função.
     *
     * @default false
     */
    disabled?: boolean | ((item: T) => boolean);
    /**
     * Variante visual.
     *
     * @default "soft"
     */
    variant?: CBSegmentVariant;
    /**
     * Tamanho visual.
     *
     * @default "medium"
     */
    size?: CBSegmentSize;
    /**
     * Cor de destaque (tokens CB-UI, CSS vars, `--nome-var` ou HEX/RGB).
     *
     * @default "primary"
     */
    color?: CBColorOrString;
    /**
     * Arredondamento. Aceita tokens ou qualquer valor CSS.
     *
     * @default "lg"
     */
    rounded?: CBSegmentRounded;
    /**
     * Ocupa 100% da largura, dividindo os segmentos igualmente.
     * - `true`: sempre
     * - `"mobile"`: apenas abaixo do breakpoint `sm`
     *
     * @default "mobile"
     */
    fullWidth?: boolean | "mobile";
    /**
     * Posição do ícone em relação ao rótulo.
     *
     * @default "start"
     */
    iconPlacement?: "start" | "end" | "top";
    /**
     * Habilita rolagem horizontal quando os segmentos não cabem no espaço.
     * O segmento ativo é rolado automaticamente para a área visível.
     *
     * @default false
     */
    scrollable?: boolean;
    /**
     * Anima o indicador deslizando entre os segmentos.
     *
     * @default true
     */
    animated?: boolean;
    /**
     * Rótulo exibido acima do segmento.
     */
    label?: React.ReactNode;
    /**
     * Texto de ajuda exibido abaixo.
     */
    helperText?: React.ReactNode;
    /**
     * Mensagem de erro (substitui o `helperText`).
     */
    error?: React.ReactNode;
    /**
     * Rótulo acessível quando não há `label` visível.
     */
    "aria-label"?: string;
    /** Sobrescreve o fundo do trilho. */
    trackColor?: string;
    /** Sobrescreve o fundo do indicador. */
    indicatorColor?: string;
    /** Sobrescreve a cor do texto dos segmentos inativos. */
    textColor?: string;
    /** Sobrescreve a cor do texto do segmento ativo. */
    activeTextColor?: string;
    /** Classes do container externo (label + trilho + helper). */
    className?: string;
    /** Classes do trilho. */
    trackClassName?: string;
    /** Classes de cada segmento, ou função baseada no item e estado. */
    itemClassName?: string | ((item: T, isSelected: boolean) => string);
    /** Classes do indicador. */
    indicatorClassName?: string;
    /** Estilos inline do container externo. Aceita as CSS vars `--cb-segment-*`. */
    style?: CSSVars;
}
/**
 * CBSegment
 *
 * Seletor segmentado para alternar entre poucas opções mutuamente exclusivas
 * (períodos, filtros, modos de visualização).
 *
 * Suporta:
 * - Variantes `soft`, `solid`, `outline` e `underline`
 * - Indicador animado deslizante (framer-motion)
 * - Ícones, badges e itens desabilitados
 * - Tokens de tema, CSS vars e Dark Mode
 * - Navegação por teclado (setas, Home, End) com WAI-ARIA `radiogroup`
 * - Modo controlado e não controlado
 *
 * @example
 * ```tsx
 * <CBSegment
 *   items={[
 *     { label: "7 dias", value: 7 },
 *     { label: "30 dias", value: 30 },
 *     { label: "90 dias", value: 90 },
 *   ]}
 *   value={period}
 *   onValueChange={(opt) => setPeriod(opt.value)}
 * />
 * ```
 *
 * @example
 * ```tsx
 * <CBSegment
 *   variant="solid"
 *   color="success"
 *   rounded="full"
 *   items={["Dia", "Semana", "Mês"]}
 *   defaultValue="Semana"
 * />
 * ```
 */
export declare function CBSegment<T>({ items, value, defaultValue, onValueChange, getLabel, getValue, renderIcon, renderBadge, getColor, disabled, variant, size, color, rounded, fullWidth, iconPlacement, scrollable, animated, label, helperText, error, "aria-label": ariaLabel, trackColor, indicatorColor, textColor, activeTextColor, className, trackClassName, itemClassName, indicatorClassName, style, }: CBSegmentProps<T>): React.JSX.Element;
export default CBSegment;
