import React, { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCBColor } from "../hooks/useCBColor";
import type { CBColor } from "../theme/CBColor";

interface CBTooltipProps {
    content: ReactNode;
    children: ReactNode;
    color?: CBColor;
    placement?: "top" | "bottom" | "left" | "right";
    trigger?: "hover" | "click";
    stopPropagation?: boolean;
    tooltipStyle?: React.CSSProperties;
}
/**
 * CBTooltip
 *
 * Componente que exibe um tooltip estilizado usando Framer Motion e cores do design system.
 * O tooltip pode aparecer ao passar o mouse sobre o elemento filho (`hover`) ou ao clicar (`click`),
 * e pode ser posicionado em quatro direções: `top`, `bottom`, `left` ou `right`.
 * Também permite controlar se o clique deve parar a propagação do evento (`stopPropagation`).
 *
 * @component
 *
 * @example
 * <CBTooltip content="Informações adicionais" placement="top" color="primary">
 *   <button>Hover aqui</button>
 * </CBTooltip>
 *
 * @example
 * <CBTooltip content="Clique para mais detalhes" trigger="click" stopPropagation>
 *   <IoHelpCircleOutline className="text-blue-500 text-xl" />
 * </CBTooltip>
 *
 * @param {object} props - Propriedades do componente.
 * @param {React.ReactNode} props.content - Conteúdo exibido dentro do tooltip.
 * @param {React.ReactNode} props.children - Elemento que ativa o tooltip.
 * @param {CBColor} [props.color="light"] - Cor do fundo do tooltip baseada no design system CBColor.
 * @param {"top" | "bottom" | "left" | "right"} [props.placement="top"] - Posição do tooltip em relação ao elemento.
 * @param {"hover" | "click"} [props.trigger="hover"] - Define se o tooltip aparece ao passar o mouse ou ao clicar.
 * @param {boolean} [props.stopPropagation=false] - Se verdadeiro, interrompe a propagação do evento de clique no trigger.
 */


const CBTooltip: React.FC<CBTooltipProps> = ({
    content,
    children,
    color = "light",
    placement = "top",
    trigger = "hover",
    stopPropagation = false,
    tooltipStyle = {},
}) => {
    const [visible, setVisible] = useState(false);
    const { main: bgColor, contrast: textColor } = useCBColor(color);

    const positionStyles: Record<string, React.CSSProperties> = {
        top: { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8 },
        bottom: { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8 },
        left: { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: 8 },
        right: { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: 8 },
    };

    const handleMouseEnter = () => trigger === "hover" && setVisible(true);
    const handleMouseLeave = () => trigger === "hover" && setVisible(false);
    const handleClick = (e: React.MouseEvent) => {
        if (trigger === "click") {
            if (stopPropagation) e.stopPropagation();
            setVisible(!visible);
        }
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
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
                            whiteSpace: "normal", // agora quebra linha
                            fontSize: "0.875rem",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            zIndex: 9999,
                            ...tooltipStyle, // aplica estilos customizados
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