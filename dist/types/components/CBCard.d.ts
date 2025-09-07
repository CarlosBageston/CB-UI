import React from "react";
/**
 * Props do componente CBCard.
 */
export interface CBCardProps {
    /** Título do card */
    title?: string;
    /** Subtítulo do card */
    subtitle?: string;
    /** Conteúdo do footer */
    footer?: React.ReactNode;
    /** Conteúdo principal do card */
    children?: React.ReactNode;
    /** Classes adicionais para customização */
    className?: string;
    /** Elevação do card (sombra) */
    elevation?: "none" | "sm" | "md" | "lg";
    /** Bordas arredondadas */
    borderRadius?: "sm" | "md" | "lg" | "xl";
    /** Habilita efeito de hover (sombra + leve escala) */
    hoverEffect?: boolean;
    /** Habilita colapso do card */
    collapsible?: boolean;
    /** Estado inicial do colapso */
    defaultCollapsed?: boolean;
    /** Ações customizadas exibidas no header (por exemplo, ícones) */
    headerActions?: React.ReactNode;
    /** Estilo customizado para headerActions */
    headerActionsStyle?: React.CSSProperties;
    /** Callback para ação de edição */
    onClickEdit?: () => void;
    /** Callback para ação de exclusão */
    onClickDelete?: () => void;
}
/**
 * Componente CBCard.
 *
 * Card customizável com suporte a:
 * - Título e subtítulo
 * - Footer
 * - Efeitos de hover
 * - Colapso/expansão do conteúdo
 * - Ações de edição e exclusão
 * - Personalização de borda e elevação
 *
 * @param props Propriedades do componente
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * <CBCard
 *   title="Resumo do Pedido"
 *   subtitle="Pedido #12345"
 *   footer={<div>Total: R$ 120,00</div>}
 *   elevation="lg"
 *   borderRadius="xl"
 *   collapsible
 *   defaultCollapsed={false}
 *   onClickEdit={() => console.log("Editar")}
 *   onClickDelete={() => console.log("Deletar")}
 * >
 *   <p>Itens do pedido listados aqui...</p>
 * </CBCard>
 * ```
 *
 * @example
 * ```tsx
 * <CBCard
 *   title="Card Simples"
 *   subtitle="Sem footer e sem collapsible"
 * >
 *   <p>Conteúdo do card.</p>
 * </CBCard>
 * ```
 */
declare const CBCard: React.FC<CBCardProps>;
export default CBCard;
