import type { CBInputMask, CBInputMaskFn } from "../types/components";
declare const defaultMasks: Record<CBInputMask, CBInputMaskFn>;
export declare function resolveMask(mask?: CBInputMask | CBInputMaskFn, custom?: Partial<typeof defaultMasks>): CBInputMaskFn | undefined;
export declare function useInputMask(mask: CBInputMask | CBInputMaskFn | undefined, onChange?: (value: string) => void, onRawChange?: (raw: string) => void, customMasks?: Record<string, CBInputMaskFn>): {
    readonly handleChange: (value: string) => void;
    readonly inputMode: "numeric" | undefined;
};
export {};
