import type { RefObject } from "react";
/**
 * Dispara `handler` quando o usuário clica/toca fora de todos os elementos
 * referenciados em `refs`. Útil para fechar dropdowns, popovers, etc.
 */
export declare function useClickOutside(refs: Array<RefObject<HTMLElement | null>>, handler: () => void, active?: boolean): void;
