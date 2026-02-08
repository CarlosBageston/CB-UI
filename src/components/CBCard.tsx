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

export interface CBCardTheme {
    colors?: {
        background?: string;
        text?: string;
        subtitle?: string;
        edit?: string;
        delete?: string;
        footer?: string;
    };
    sizes?: {
        width?: string;
        height?: string;
        padding?: string;
        headerHeight?: string;
        borderRadius?: string;
    };
    contentCard?: {
        background?: string;
        text?: string;
        padding?: string;
    };
}

export interface CBCardProps {
    title?: string;
    subtitle?: string;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    elevation?: "none" | "sm" | "md" | "lg";
    hoverEffect?: boolean;
    collapsible?: boolean;
    defaultCollapsed?: boolean;
    onClickEdit?: () => void;
    onClickDelete?: () => void;
    theme?: CBCardTheme;
}

const CBCard: React.FC<CBCardProps> = ({
    title,
    subtitle,
    footer,
    children,
    className,
    elevation = "md",
    hoverEffect = true,
    collapsible = false,
    defaultCollapsed = false,
    onClickEdit,
    onClickDelete,
    theme,
}) => {
    const [collapsed, setCollapsed] = useState(defaultCollapsed);

    const elevationClass = {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
    }[elevation];

    const radiusClass = theme?.sizes?.borderRadius || "rounded-md";

    const bgColor = theme?.colors?.background || "bg-white dark:bg-gray-900";
    const textColor = theme?.colors?.text || "text-gray-700 dark:text-gray-200";
    const subtitleColor = theme?.colors?.subtitle || "text-gray-500 dark:text-gray-400";

    return (
        <IonCard
            className={clsx(
                "transition-all",
                bgColor,
                elevationClass,
                radiusClass,
                hoverEffect && "hover:shadow-xl hover:scale-[1.01] cursor-pointer",
                className
            )}
            style={{
                width: theme?.sizes?.width,
                height: theme?.sizes?.height,
                padding: theme?.sizes?.padding,
            }}
        >
            {(title || subtitle || collapsible || onClickDelete || onClickEdit) && (
                <IonCardHeader
                    className="relative flex flex-col items-center"
                    style={{ minHeight: theme?.sizes?.headerHeight }}
                >
                    <div className="flex justify-between w-full items-center">
                        <div className="flex flex-col text-center w-full">
                            {title && <IonCardTitle className={`text-lg font-semibold ${textColor}`}>{title}</IonCardTitle>}
                            {subtitle && <IonCardSubtitle className={`${subtitleColor} text-sm`}>{subtitle}</IonCardSubtitle>}
                        </div>

                        <div className="flex items-center gap-2">
                            {onClickEdit && onClickEdit && (
                                <MdEdit
                                    onClick={onClickEdit}

                                    className={clsx(
                                        "w-10 h-10 !p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                                        theme?.colors?.edit || "text-[var(--ion-color-secondary-shade)]"
                                    )}
                                />
                            )}
                            {onClickDelete && onClickDelete && (
                                <MdDeleteForever
                                    onClick={onClickDelete}
                                    className={clsx(
                                        "w-10 h-10 !p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                                        theme?.colors?.delete || "text-[var(--ion-color-danger)]"
                                    )}
                                />
                            )}
                            {collapsible && (
                                <motion.div
                                    initial={false}
                                    animate={{ rotate: collapsed ? 0 : 180 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-xl flex-center cursor-pointer"
                                    onClick={() => setCollapsed(!collapsed)}
                                >
                                    <IoChevronDownSharp />
                                </motion.div>
                            )}
                        </div>
                    </div>
                </IonCardHeader>
            )}

            {!collapsed && children && (
                <IonCardContent style={{
                    padding: theme?.contentCard?.padding,
                    backgroundColor: theme?.contentCard?.background,
                    color: theme?.contentCard?.text
                }}
                    className={`${textColor} text-sm`}
                >
                    {children}
                </IonCardContent>
            )}

            {footer && (
                <IonFooter
                    className="!p-4 border-t dark:border-gray-700"
                    style={{ backgroundColor: theme?.colors?.footer }}
                >
                    {footer}
                </IonFooter>
            )}
        </IonCard>
    );
};

export default CBCard;
