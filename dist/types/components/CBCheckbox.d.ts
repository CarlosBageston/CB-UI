import React from "react";
import type { CBColor } from "../theme/CBColor";
/**
 * Props do componente CBCheckbox.
 */
export type CBCheckboxProps = {
    /** Texto exibido ao lado do checkbox */
    label?: string;
    /** Estado do checkbox (checado ou não) */
    checked: boolean;
    /** Desabilita a interação com o checkbox */
    disabled?: boolean;
    /** Variante visual do checkbox */
    variant?: "default" | "filled";
    /** Callback chamado ao alterar o estado do checkbox */
    onChange: (checked: boolean) => void;
    /** Cor do checkbox (usa CBColor) */
    color?: CBColor;
};
/**
 * Checkbox customizado com animação e suporte a cores, variantes e estado desabilitado.
 *
 * Suporta duas variantes:
 * - `"filled"`: fundo preenchido quando selecionado
 * - `"default"`: apenas borda colorida quando selecionado
 *
 * @param props Propriedades do checkbox
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * const [checked, setChecked] = useState(false);
 *
 * <CBCheckbox
 *   label="Aceito os termos"
 *   checked={checked}
 *   onChange={setChecked}
 *   color="primary"
 *   variant="filled"
 * />
 * ```
 *
 * @example
 * ```tsx
 * <CBCheckbox
 *   label="Receber notificações"
 *   checked={true}
 *   disabled
 * />
 * ```
 */
declare const CBCheckbox: React.FC<CBCheckboxProps>;
export default CBCheckbox;
