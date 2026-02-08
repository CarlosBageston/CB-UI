import React from "react";
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
declare const CBCard: React.FC<CBCardProps>;
export default CBCard;
