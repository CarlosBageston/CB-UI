import type { ToastOptions } from "../components/CBToast";

let showToastFn: ((options: ToastOptions) => void) | null = null;

export function setCBToastHandler(fn: (options: ToastOptions) => void) {
  showToastFn = fn;
}

export function showCBToast(options: ToastOptions) {
  if (showToastFn) showToastFn(options);
}
