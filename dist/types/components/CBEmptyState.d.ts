import React from "react";
import type { CBColor } from "../theme/CBColor";
/**
 * Props do componente CBEmptyState
 */
interface CBEmptyStateProps {
    /** Lista de mensagens que podem ser exibidas aleatoriamente */
    messages?: string[];
    /** Título do estado vazio */
    title?: string;
    /** Ícone exibido acima da mensagem */
    icon?: React.ReactNode;
    /** Texto do botão opcional */
    buttonLabel?: string;
    /** Callback chamado ao clicar no botão */
    onButtonClick?: () => void;
    /** Cor principal do estado vazio */
    color: CBColor;
    /** Cor de fundo do card */
    colorBg?: string;
}
/**
 * CBEmptyState
 *
 * Componente que exibe um estado vazio com:
 * - Ícone
 * - Mensagem ou lista de mensagens aleatórias
 * - Título opcional
 * - Botão opcional com callback
 * - Animação suave de entrada
 *
 * @param props Propriedades do componente
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * <CBEmptyState
 *   title="Nenhum registro encontrado"
 *   messages={["Sem dados aqui", "Nada para exibir"]}
 *   icon={<CustomIcon size={32} />}
 *   buttonLabel="Adicionar"
 *   onButtonClick={() => console.log("Adicionar clicado")}
 *   color="primary"
 * />
 * ```
 */
declare const CBEmptyState: React.FC<CBEmptyStateProps>;
export default CBEmptyState;
