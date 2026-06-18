import { useCallback, useState } from "react";

/**
 * Controla o estado de exibição de senha (mostrar/ocultar texto)
 * e o `type` correspondente a ser aplicado no input.
 *
 * Uso:
 *   const { show, toggle, inputType } = usePasswordToggle();
 *   <IonInput type={isPassword ? inputType : type} />
 */
export function usePasswordToggle() {
  const [show, setShow] = useState(false);

  const toggle = useCallback(() => setShow((prev) => !prev), []);

  const inputType = show ? "text" : "password";

  return { show, toggle, inputType } as const;
}
