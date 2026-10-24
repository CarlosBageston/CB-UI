import { type CBColorOrString } from "../theme/CBColor";
/**
 * Resolve uma cor CB-UI (token, `--var`, `var(...)` ou HEX/RGB) em `main` e `contrast`.
 * Versão sem hook, segura para uso dentro de loops/callbacks.
 */
export declare function resolveCBColor(color?: CBColorOrString, fallbackContrast?: string): {
    main: string;
    contrast: string;
};
export declare function useCBColor(color?: CBColorOrString, fallbackContrast?: string): {
    main: string;
    contrast: string;
};
