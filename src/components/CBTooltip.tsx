import React, { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCBColor } from "../hooks/useCBColor";
import type { CBColor } from "../theme/CBColor";

interface CBTooltipProps {
    content: ReactNode;        // Conteúdo do tooltip
    children: ReactNode;       // Elemento que ativa o tooltip
    color?: CBColor;
    placement?: "top" | "bottom" | "left" | "right";              // Posição
}
/**
 * CBTooltip
 *
 * Componente que exibe um tooltip estilizado usando Framer Motion e cores do design system.
 * O tooltip aparece ao passar o mouse sobre o elemento filho (`children`) e pode ser posicionado
 * em quatro direções: top, bottom, left ou right.
 *
 * @component
 *
 * @example
 * <CBTooltip content="Informações adicionais" placement="top" color="primary">
 *   <button>Hover aqui</button>
 * </CBTooltip>
 *
 * @param {object} props - Propriedades do componente.
 * @param {React.ReactNode} props.content - Conteúdo que será exibido dentro do tooltip.
 * @param {React.ReactNode} props.children - Elemento que ativa o tooltip ao ser hover.
 * @param {CBColor} [props.color="light"] - Cor do background do tooltip (usa o design system CBColor).
 * @param {"top" | "bottom" | "left" | "right"} [props.placement="top"] - Posição do tooltip em relação ao elemento.
 */

const CBTooltip: React.FC<CBTooltipProps> = ({
    content,
    children,
    color = "light",
    placement = "top",
}) => {
    const [visible, setVisible] = useState(false);
    const { main: bgColor, contrast: textColor } = useCBColor(color);

    // Define a posição do tooltip
    const positionStyles: Record<string, React.CSSProperties> = {
        top: { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8 },
        bottom: { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8 },
        left: { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: 8 },
        right: { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: 8 },
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            <AnimatePresence>
                {visible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            ...positionStyles[placement],
                            position: "absolute",
                            backgroundColor: bgColor,
                            color: textColor,
                            padding: "0.4rem 0.8rem",
                            borderRadius: "8px",
                            whiteSpace: "nowrap",
                            fontSize: "0.875rem",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            zIndex: 9999,
                        }}
                    >
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CBTooltip;