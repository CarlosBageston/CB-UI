import type { CBLoadingProps } from "../components/CBLoading";

let showFn: ((options: CBLoadingProps) => void) | null = null;
let hideFn: (() => void) | null = null;

export function registerCBLoading(
  show: (options: CBLoadingProps) => void,
  hide: () => void
) {
  showFn = show;
  hideFn = hide;
}

export function showCBLoading(options: CBLoadingProps) {
  showFn?.(options);
}

export function hideCBLoading() {
  hideFn?.();
}
