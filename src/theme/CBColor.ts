// src/theme/CBColor.ts
export type CBColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral"
  | "light"
  | "dark";

export interface CSSVars extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}

// Cores principais
export const CB_COLOR_MAP: Record<CBColor, string> = {
  primary: "var(--ion-color-primary)",
  secondary: "var(--ion-color-secondary)",
  success: "var(--ion-color-success)",
  warning: "var(--ion-color-warning)",
  danger: "var(--ion-color-danger)",
  info: "var(--ion-color-info)",
  neutral: "var(--ion-color-neutral)",
  light: "var(--ion-color-light)",
  dark: "var(--ion-color-dark)",
};

// Contraste (texto que fica legível sobre cada cor)
export const CB_COLOR_CONTRAST_MAP: Record<CBColor, string> = {
  primary: "var(--ion-color-light)", // texto claro sobre azul escuro
  secondary: "var(--ion-color-light)", // texto claro sobre roxo
  success: "var(--ion-color-light)", // texto claro sobre verde
  warning: "var(--ion-color-dark)", // texto escuro sobre amarelo
  danger: "var(--ion-color-light)", // texto claro sobre vermelho
  info: "var(--ion-color-dark)", // texto escuro sobre azul suave
  neutral: "var(--ion-color-dark)", // texto escuro sobre cinza médio
  light: "var(--ion-color-dark)", // texto escuro sobre claro
  dark: "var(--ion-color-light)", // texto claro sobre escuro
};
