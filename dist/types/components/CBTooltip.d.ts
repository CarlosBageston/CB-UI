import React, { type ReactNode } from "react";
import type { CBColor } from "../theme/CBColor";
interface CBTooltipProps {
    content: ReactNode;
    children: ReactNode;
    color?: CBColor;
    placement?: "top" | "bottom" | "left" | "right";
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
declare const CBTooltip: React.FC<CBTooltipProps>;
export default CBTooltip;
