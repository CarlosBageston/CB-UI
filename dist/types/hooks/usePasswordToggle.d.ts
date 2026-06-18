/**
 * Controla o estado de exibição de senha (mostrar/ocultar texto)
 * e o `type` correspondente a ser aplicado no input.
 *
 * Uso:
 *   const { show, toggle, inputType } = usePasswordToggle();
 *   <IonInput type={isPassword ? inputType : type} />
 */
export declare function usePasswordToggle(): {
    readonly show: boolean;
    readonly toggle: () => void;
    readonly inputType: "text" | "password";
};
