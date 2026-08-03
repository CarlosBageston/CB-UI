import { useEffect } from "react";
import type { RefObject } from "react";

/**
 * Dispara `handler` quando o usuário clica/toca fora de todos os elementos
 * referenciados em `refs`. Útil para fechar dropdowns, popovers, etc.
 */
export function useClickOutside(
  refs: Array<RefObject<HTMLElement | null>>,
  handler: () => void,
  active = true,
) {
  useEffect(() => {
    if (!active) return;

    function listener(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;

      const clickedInside = refs.some((ref) => !!ref.current && ref.current.contains(target));

      if (!clickedInside) {
        handler();
      }
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler, active]);
}
