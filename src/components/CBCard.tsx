import React, { useState } from "react";
import clsx from "clsx";
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonFooter,
} from "@ionic/react";
import { motion } from "framer-motion";
import { IoChevronDownSharp } from "react-icons/io5";
import { MdEdit, MdDeleteForever } from "react-icons/md";

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
const CBCard: React.FC<CBCardProps> = ({
    title,
    subtitle,
    footer,
    children,
    className,
    elevation = "md",
    borderRadius = "md",
    hoverEffect = true,
    collapsible = false,
    defaultCollapsed = false,
    headerActions,
    headerActionsStyle,
    onClickEdit,
    onClickDelete,
}) => {
    const [collapsed, setCollapsed] = useState(defaultCollapsed);

    const elevationClass = {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
    }[elevation];

    const radiusClass = {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
    }[borderRadius];

    return (
        <IonCard
            className={clsx(
                "transition-all bg-white dark:bg-gray-900",
                elevationClass,
                radiusClass,
                hoverEffect && "hover:shadow-xl hover:scale-[1.01] cursor-pointer",
                className
            )}
        >
            {(title || subtitle || headerActions || collapsible) && (
                <IonCardHeader className="relative pb-2 flex flex-col items-center">
                    {/* Título e subtítulo centralizados */}
                    <div className="flex flex-col items-center text-center w-full">
                        <div className="w-full flex justify-end">
                            <div
                                className="flex items-start gap-3"
                                style={headerActionsStyle}
                            >
                                <MdEdit
                                    className="w-10 h-10 !p-2 rounded-md bg-gray-50 backdrop-blur-sm 
                                    text-[var(--ion-color-secondary-shade)] dark:text-[var(--ion-color-secondary-tint)] hover:scale-110 transition"
                                    onClick={onClickEdit}
                                />
                                <MdDeleteForever
                                    onClick={onClickDelete}
                                    className="w-10 h-10 !p-2 rounded-md bg-gray-50 backdrop-blur-sm 
                                text-[var(--ion-color-danger)] hover:scale-110 transition"
                                />
                            </div>

                        </div>
                        {title && <IonCardTitle className="text-lg font-semibold">{title}</IonCardTitle>}
                        {subtitle && <IonCardSubtitle className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</IonCardSubtitle>}
                    </div>

                    {/* Ícones no canto superior direito */}
                    <div className="w-full flex justify-end">
                        {collapsible && (
                            <motion.div
                                initial={false}
                                animate={{ rotate: collapsed ? 0 : 180 }}
                                transition={{ duration: 0.3 }}
                                className="text-[var(--ion-color-text-primary)] text-xl flex-center leading-none"
                                onClick={() => setCollapsed(!collapsed)}
                            >
                                <IoChevronDownSharp className="transition-transform" />
                            </motion.div>
                        )}

                    </div>
                </IonCardHeader>

            )}

            {!collapsed && children && (
                <IonCardContent className="text-sm text-gray-700 dark:text-gray-200">
                    {children}
                </IonCardContent>
            )}

            {footer && (
                <IonFooter className="!p-4 border-t border-gray-200 dark:border-gray-700">
                    {footer}
                </IonFooter>
            )}
        </IonCard>
    );
};

export default CBCard;