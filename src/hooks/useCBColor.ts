// src/hooks/useCBColor.ts
import {
  CB_COLOR_MAP,
  CB_COLOR_CONTRAST_MAP,
  type CBColor,
} from "../theme/CBColor";

export function useCBColor(color: CBColor = "primary") {
  const main = CB_COLOR_MAP[color];
  const contrast = CB_COLOR_CONTRAST_MAP[color];
  return { main, contrast };
}
