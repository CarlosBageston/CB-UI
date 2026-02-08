import React, { type ReactNode } from "react";
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
declare const CBTooltip: React.FC<CBTooltipProps>;
export default CBTooltip;
