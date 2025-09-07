import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import type { CBColor } from "../theme/CBColor";
import { useCBColor } from "../hooks/useCBColor";

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
const CBCheckbox: React.FC<CBCheckboxProps> = ({
    label,
    checked,
    disabled = false,
    variant = "filled",
    onChange,
    color = "primary",
}) => {
    const { main: mainColor, contrast: contrastColor } = useCBColor(color);

    // estilos dinâmicos
    const boxStyle: React.CSSProperties = {
        borderColor: checked ? mainColor : "#d1d5db",
        backgroundColor:
            variant === "filled" && checked ? mainColor : "#ffffff",
        color:
            checked && variant === "filled"
                ? contrastColor
                : checked
                    ? mainColor
                    : "inherit",
    };
    return (
        <div
            className={clsx(
                "flex items-center gap-2 cursor-pointer select-none",
                disabled && "cursor-not-allowed opacity-60"
            )}
            onClick={() => !disabled && onChange(!checked)}
        >
            <motion.div
                whileTap={{ scale: 0.9 }}
                style={boxStyle}
                className="w-5 h-5 rounded-md flex items-center justify-center border-2 transition-all"
            >
                {checked && (
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </motion.svg>
                )}
            </motion.div>

            {label && <label className="text-sm font-medium cursor-pointer">{label}</label>}
        </div>
    );
};

export default CBCheckbox;