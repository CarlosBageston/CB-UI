import React, { useEffect, useId, useRef, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { resolveCBColor, useCBColor } from "../../hooks/useCBColor";
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
export type CBSegmentVariant =
  | "soft"
  | "solid"
  | "outline"
  | "underline"
  | "pills";

/**
 * Tamanhos disponíveis.
 */
export type CBSegmentSize = "small" | "medium" | "large";

/**
 * Arredondamento do trilho/indicador.
 */
export type CBSegmentRounded =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full"
  | (string & {});

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

const sizeClasses: Record<
  CBSegmentSize,
  {
    item: string;
    itemTop: string;
    padding: string;
    paddingTop: string;
    icon: string;
    track: string;
    badge: string;
  }
> = {
  small: {
    item: "min-h-8 text-xs gap-1.5",
    itemTop: "text-[11px] gap-1",
    padding: "6px 14px",
    paddingTop: "8px 14px",
    icon: "text-sm",
    track: "p-0.5",
    badge: "min-w-4 h-4 px-1 text-[10px]",
  },
  medium: {
    item: "min-h-10 text-sm gap-2",
    itemTop: "text-xs gap-1.5",
    padding: "8px 20px",
    paddingTop: "10px 20px",
    icon: "text-base",
    track: "p-1",
    badge: "min-w-5 h-5 px-1.5 text-[11px]",
  },
  large: {
    item: "min-h-12 text-base gap-2.5",
    itemTop: "text-sm gap-1.5",
    padding: "10px 24px",
    paddingTop: "12px 24px",
    icon: "text-lg",
    track: "p-1",
    badge: "min-w-5 h-5 px-1.5 text-xs",
  },
};

const roundedMap: Record<string, string> = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "999px",
};

const isOption = (item: unknown): item is CBSegmentOption =>
  typeof item === "object" && item !== null && "value" in item;

const defaultGetValue = (item: unknown): string | number =>
  isOption(item) ? item.value : (item as string | number);

const defaultGetLabel = (item: unknown): React.ReactNode =>
  isOption(item) ? item.label : String(item);

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
export function CBSegment<T>({
  items,
  value,
  defaultValue,
  onValueChange,
  getLabel = defaultGetLabel as (item: T) => React.ReactNode,
  getValue = defaultGetValue as (item: T) => string | number,
  renderIcon,
  renderBadge,
  getColor,
  disabled = false,
  variant = "soft",
  size = "medium",
  color = "primary",
  rounded = "lg",
  fullWidth = "mobile",
  iconPlacement = "start",
  scrollable = false,
  animated = true,
  label,
  helperText,
  error,
  "aria-label": ariaLabel,
  trackColor,
  indicatorColor,
  textColor,
  activeTextColor,
  className,
  trackClassName,
  itemClassName,
  indicatorClassName,
  style,
}: CBSegmentProps<T>) {
  const groupId = useId();
  const { main: mainColor, contrast: contrastColor } = useCBColor(color);
  const { main: dangerColor } = useCBColor("danger");
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<
    T | string | number | null
  >(defaultValue ?? null);
  const currentValue = isControlled ? value : internalValue;

  const toKey = (v: T | string | number | null | undefined) => {
    if (v === undefined || v === null) return undefined;
    if (typeof v === "object") return String(getValue(v as T));
    return String(v);
  };

  const selectedKey = toKey(currentValue);
  const selectedIndex = items.findIndex(
    (item) => String(getValue(item)) === selectedKey,
  );

  const isItemDisabled = (item: T) => {
    if (typeof disabled === "function") return disabled(item);
    if (disabled) return true;
    return isOption(item) ? !!item.disabled : false;
  };

  const handleSelect = (item: T) => {
    if (isItemDisabled(item)) return;
    if (!isControlled) setInternalValue(item);
    onValueChange?.(item);
  };

  // Mantém o segmento ativo visível no modo scrollable
  useEffect(() => {
    if (!scrollable || selectedIndex < 0) return;
    itemRefs.current[selectedIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, [scrollable, selectedIndex]);

  // Navegação por teclado: seleção acompanha o foco (padrão radiogroup)
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const enabled = items
      .map((item, i) => ({ item, i }))
      .filter(({ item }) => !isItemDisabled(item));
    if (!enabled.length) return;

    const pos = enabled.findIndex(({ i }) => i === index);
    let next: number | undefined;

    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = enabled[(pos + 1) % enabled.length].i;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = enabled[(pos - 1 + enabled.length) % enabled.length].i;
        break;
      case "Home":
        next = enabled[0].i;
        break;
      case "End":
        next = enabled[enabled.length - 1].i;
        break;
      default:
        return;
    }

    e.preventDefault();
    itemRefs.current[next]?.focus();
    handleSelect(items[next]);
  };

  // Tokens visuais por variante (podem ser sobrescritos via props ou CSS vars)
  const neutral = (pct: number) =>
    `color-mix(in srgb, var(--cb-text-secondary, #6b7280) ${pct}%, transparent)`;

  const buildTokens = (main: string, contrast: string) => {
    const tint = (pct: number) =>
      `color-mix(in srgb, ${main} ${pct}%, transparent)`;

    const map: Record<CBSegmentVariant, Record<string, string>> = {
      soft: {
        track: neutral(12),
        indicator: "rgb(var(--cb-surface-rgb, 255, 255, 255))",
        text: "var(--cb-text-secondary, #6b7280)",
        active: "var(--cb-text-primary, #111827)",
        hover: neutral(8),
        border: "transparent",
      },
      solid: {
        track: neutral(12),
        indicator: main,
        text: "var(--cb-text-secondary, #6b7280)",
        active: contrast,
        hover: tint(10),
        border: "transparent",
      },
      outline: {
        track: "transparent",
        indicator: tint(12),
        text: "var(--cb-text-secondary, #6b7280)",
        active: main,
        hover: tint(6),
        border:
          "color-mix(in srgb, var(--cb-color-border, #b8bdc7) 70%, transparent)",
      },
      underline: {
        track: "transparent",
        indicator: main,
        text: "var(--cb-text-secondary, #6b7280)",
        active: main,
        hover: tint(6),
        border:
          "color-mix(in srgb, var(--cb-color-border, #b8bdc7) 50%, transparent)",
      },
      pills: {
        track: "transparent",
        indicator: main,
        text: "var(--cb-text-secondary, #6b7280)",
        active: contrast,
        hover: neutral(18),
        border: "transparent",
      },
    };

    return map[variant];
  };

  const tokens = buildTokens(mainColor, contrastColor);
  const radius = roundedMap[rounded] ?? rounded;
  const isUnderline = variant === "underline";
  const isPills = variant === "pills";

  const rootStyle: CSSVars = {
    "--cb-segment-track-bg": trackColor ?? tokens.track,
    "--cb-segment-indicator-bg": indicatorColor ?? tokens.indicator,
    "--cb-segment-text": textColor ?? tokens.text,
    "--cb-segment-text-active": activeTextColor ?? tokens.active,
    "--cb-segment-hover-bg": tokens.hover,
    "--cb-segment-border": error ? dangerColor : tokens.border,
    "--cb-segment-radius": radius,
    "--cb-segment-item-radius": isPills
      ? radius
      : `max(0px, calc(${radius} - 4px))`,
    "--cb-segment-pill-bg": neutral(10),
    ...style,
  };

  const sz = sizeClasses[size];
  const stretch =
    fullWidth === true ? "full" : fullWidth === "mobile" ? "mobile" : "none";

  return (
    <div
      className={clsx(
        "flex flex-col",
        stretch === "full" && "w-full",
        stretch === "mobile" && "w-full sm:w-auto",
        className,
      )}
      style={rootStyle}
    >
      {label && (
        <span
          id={`${groupId}-label`}
          className="block text-sm font-medium text-(--cb-text-primary,#111827) mb-2"
        >
          {label}
        </span>
      )}

      <div
        role="radiogroup"
        aria-labelledby={label ? `${groupId}-label` : undefined}
        aria-label={!label ? ariaLabel : undefined}
        aria-invalid={!!error || undefined}
        className={clsx(
          "relative flex items-stretch",
          stretch === "full" && "w-full",
          stretch === "mobile" && "w-full sm:w-auto sm:inline-flex",
          stretch === "none" && "inline-flex",
          scrollable &&
            "overflow-x-auto overscroll-x-contain scrollbar-none [&::-webkit-scrollbar]:hidden",
          isPills
            ? ["gap-2", !scrollable && "flex-wrap"]
            : isUnderline
              ? "gap-1 border-b border-(--cb-segment-border)"
              : [
                sz.track,
                "gap-0.5 [background:var(--cb-segment-track-bg)] rounded-(--cb-segment-radius)",
                (variant === "outline" || error) &&
                  "border border-(--cb-segment-border)",
              ],
          trackClassName,
        )}
      >
        {items.map((item, index) => {
          const key = String(getValue(item));
          const isSelected = key === selectedKey;
          const itemDisabled = isItemDisabled(item);
          const icon =
            renderIcon?.(item, isSelected) ??
            (isOption(item) ? item.icon : undefined);
          const badge =
            renderBadge?.(item, isSelected) ??
            (isOption(item) ? item.badge : undefined);
          const itemColorKey =
            getColor?.(item) ?? (isOption(item) ? item.color : undefined);
          const itemColor = itemColorKey
            ? resolveCBColor(itemColorKey)
            : { main: mainColor, contrast: contrastColor };
          const itemTokens = itemColorKey
            ? buildTokens(itemColor.main, itemColor.contrast)
            : undefined;
          const customClasses =
            typeof itemClassName === "function"
              ? itemClassName(item, isSelected)
              : itemClassName;

          // Roving tabindex: apenas o ativo (ou o primeiro habilitado) recebe foco via Tab
          const firstEnabled = items.findIndex((it) => !isItemDisabled(it));
          const tabIndex = itemDisabled
            ? -1
            : selectedIndex >= 0
              ? isSelected
                ? 0
                : -1
              : index === firstEnabled
                ? 0
                : -1;

          return (
            <button
              key={key}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              type="button"
              role="radio"
              aria-checked={isSelected}
              aria-disabled={itemDisabled || undefined}
              disabled={itemDisabled}
              tabIndex={tabIndex}
              onClick={() => handleSelect(item)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              // padding/radius inline: o normalize.css do Ionic (sem @layer)
              // aplica `button { padding: 0; border-radius: 0 }` e venceria as utilities do Tailwind
              style={
                {
                padding: iconPlacement === "top" ? sz.paddingTop : sz.padding,
                borderRadius: isUnderline
                  ? "var(--cb-segment-item-radius) var(--cb-segment-item-radius) 0 0"
                  : "var(--cb-segment-item-radius)",
                lineHeight: 1.25,
                // Cor própria do item sobrescreve os tokens do grupo
                ...(itemTokens && {
                  "--cb-segment-indicator-bg":
                    indicatorColor ?? itemTokens.indicator,
                  "--cb-segment-text-active":
                    activeTextColor ?? itemTokens.active,
                  ...(!isPills && {
                    "--cb-segment-hover-bg": itemTokens.hover,
                  }),
                }),
                } as CSSVars
              }
              className={clsx(
                "group relative isolate flex items-center justify-center whitespace-nowrap select-none outline-none",
                "font-medium transition-colors duration-200 cursor-pointer",
                "focus-visible:ring-2 focus-visible:ring-(--cb-color-primary) focus-visible:ring-offset-1 focus-visible:ring-offset-transparent",
                iconPlacement === "top" ? ["flex-col", sz.itemTop] : sz.item,
                (stretch === "full" || stretch === "mobile") &&
                  (isPills ? "flex-auto" : "flex-1"),
                stretch === "mobile" && "sm:flex-none",
                isPills && !isSelected && "bg-(--cb-segment-pill-bg)",
                scrollable && "shrink-0 flex-none",
                isUnderline && "-mb-px",
                isSelected
                  ? "text-(--cb-segment-text-active) font-semibold"
                  : "text-(--cb-segment-text) hover:text-(--cb-text-primary,#111827)",
                !isSelected &&
                  !itemDisabled &&
                  "hover:bg-(--cb-segment-hover-bg)",
                itemDisabled && "opacity-40 cursor-not-allowed",
                customClasses,
              )}
            >
              {isSelected && (
                <motion.span
                  aria-hidden
                  layoutId={
                    animated ? `cb-segment-indicator-${groupId}` : undefined
                  }
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 38,
                    mass: 0.8,
                  }}
                  className={clsx(
                    "absolute -z-10 [background:var(--cb-segment-indicator-bg)]",
                    isUnderline
                      ? "inset-x-0 bottom-0 h-0.5 rounded-full"
                      : "inset-0 rounded-(--cb-segment-item-radius)",
                    variant === "soft" &&
                      "shadow-[0_1px_2px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.4)] ring-1 ring-black/5 dark:ring-white/5",
                    variant === "solid" && "shadow-sm",
                    isPills &&
                      "shadow-[0_1px_2px_rgba(15,23,42,0.12),0_2px_6px_-1px_color-mix(in_srgb,var(--cb-segment-indicator-bg)_35%,transparent)]",
                    variant === "outline" &&
                      "ring-1 ring-inset ring-[color-mix(in_srgb,currentColor_35%,transparent)]",
                    indicatorClassName,
                  )}
                />
              )}

              {icon && iconPlacement !== "end" && (
                <span
                  className={clsx(
                    "inline-flex shrink-0 transition-transform duration-200 group-active:scale-90",
                    sz.icon,
                  )}
                >
                  {icon}
                </span>
              )}

              <span className="truncate">{getLabel(item)}</span>

              {icon && iconPlacement === "end" && (
                <span
                  className={clsx(
                    "inline-flex shrink-0 transition-transform duration-200 group-active:scale-90",
                    sz.icon,
                  )}
                >
                  {icon}
                </span>
              )}

              {badge !== undefined && badge !== null && badge !== false && (
                <span
                  className={clsx(
                    "inline-flex items-center justify-center rounded-full font-semibold leading-none tabular-nums transition-colors duration-200",
                    sz.badge,
                    iconPlacement === "top" && "absolute top-1 right-1",
                  )}
                  style={{
                    background: isSelected
                      ? variant === "solid" || isPills
                        ? "color-mix(in srgb, currentColor 22%, transparent)"
                        : itemColor.main
                      : isPills
                        ? "rgb(var(--cb-surface-rgb, 255, 255, 255))"
                        : neutral(18),
                    color: isSelected
                      ? variant === "solid" || isPills
                        ? "inherit"
                        : itemColor.contrast
                      : isPills
                        ? "var(--cb-text-primary, #111827)"
                        : "inherit",
                  }}
                >
                  {badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {(error || helperText) && (
        <span
          role={error ? "alert" : undefined}
          className={clsx(
            "block mt-1.5 text-[12px] pl-1",
            error
              ? "text-(--cb-color-danger,#dc2626)"
              : "text-(--cb-text-secondary,#6b7280)",
          )}
        >
          {error ?? helperText}
        </span>
      )}
    </div>
  );
}

export default CBSegment;
