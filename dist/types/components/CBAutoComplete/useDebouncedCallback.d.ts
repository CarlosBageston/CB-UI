/**
 * Cria uma versão "debounced" de um callback.
 *
 * Sempre a versão mais atual do callback é utilizada (via ref), e apenas
 * a última chamada dentro da janela de `delay` é efetivamente executada.
 */
export declare function useDebouncedCallback<Args extends unknown[]>(callback: (...args: Args) => void, delay: number): {
    debounced: (...args: Args) => void;
    cancel: () => void;
};
