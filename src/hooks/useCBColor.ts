// src/hooks/useCBColor.ts
import {
  CB_COLOR_MAP,
  CB_COLOR_CONTRAST_MAP,
  type CBColor,
  type CBColorOrString,
} from "../theme/CBColor";

/**
 * Resolve uma cor CB-UI (token, `--var`, `var(...)` ou HEX/RGB) em `main` e `contrast`.
 * Versão sem hook, segura para uso dentro de loops/callbacks.
 */
export function resolveCBColor(
  color: CBColorOrString = "primary",
  fallbackContrast?: string,
) {
  const isKnown = color in CB_COLOR_MAP;

  const main = isKnown
    ? CB_COLOR_MAP[color as CBColor]
    : color.startsWith("--")
      ? `var(${color})`
      : color;

  const contrast = isKnown
    ? CB_COLOR_CONTRAST_MAP[color as CBColor]
    : (fallbackContrast ?? "var(--cb-color-light)");
  return { main, contrast };
}

export function useCBColor(
  color: CBColorOrString = "primary",
  fallbackContrast?: string,
) {
  return resolveCBColor(color, fallbackContrast);
}
