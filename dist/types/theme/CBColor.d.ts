export type CBColor = "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "neutral" | "light" | "dark";
export interface CSSVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}
export declare const CB_COLOR_MAP: Record<CBColor, string>;
export declare const CB_COLOR_CONTRAST_MAP: Record<CBColor, string>;
