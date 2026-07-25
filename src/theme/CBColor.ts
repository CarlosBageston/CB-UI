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

// Aceita CBColor tipado OU qualquer string (var CSS, hex, etc)
export type CBColorOrString = CBColor | (string & {});

export interface CSSVars extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}

// Cores principais
export const CB_COLOR_MAP: Record<CBColor, string> = {
  primary: "var(--cb-color-primary)",
  secondary: "var(--cb-color-secondary)",
  success: "var(--cb-color-success)",
  warning: "var(--cb-color-warning)",
  danger: "var(--cb-color-danger)",
  info: "var(--cb-color-info)",
  neutral: "var(--cb-color-neutral)",
  light: "var(--cb-color-light)",
  dark: "var(--cb-color-dark)",
};

// Contraste (texto que fica legível sobre cada cor)
export const CB_COLOR_CONTRAST_MAP: Record<CBColor, string> = {
  primary: "var(--cb-color-light)", // texto claro sobre azul escuro
  secondary: "var(--cb-color-light)", // texto claro sobre roxo
  success: "var(--cb-color-light)", // texto claro sobre verde
  warning: "var(--cb-color-dark)", // texto escuro sobre amarelo
  danger: "var(--cb-color-light)", // texto claro sobre vermelho
  info: "var(--cb-color-dark)", // texto escuro sobre azul suave
  neutral: "var(--cb-color-dark)", // texto escuro sobre cinza médio
  light: "var(--cb-color-dark)", // texto escuro sobre claro
  dark: "var(--cb-color-light)", // texto claro sobre escuro
};
