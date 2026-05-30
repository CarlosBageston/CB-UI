// src/hooks/useCBColor.ts
import {
  CB_COLOR_MAP,
  CB_COLOR_CONTRAST_MAP,
  type CBColor,
  type CBColorOrString,
} from "../theme/CBColor";

export function useCBColor(color: CBColorOrString = "primary") {
  const isKnown = color in CB_COLOR_MAP;

  const main = isKnown
    ? CB_COLOR_MAP[color as CBColor]
    : color.startsWith("--")
      ? `var(${color})`
      : color;

  const contrast = isKnown
    ? CB_COLOR_CONTRAST_MAP[color as CBColor]
    : "var(--ion-color-light)";

  return { main, contrast };
}
