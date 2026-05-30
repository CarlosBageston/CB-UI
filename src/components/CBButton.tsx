import { IonButton, IonSpinner } from "@ionic/react";
import React from "react";
import type { CBColorOrString, CSSVars } from "../theme/CBColor";
import { useCBColor } from "../hooks/useCBColor";

/**
 * Tamanhos disponíveis para o botão.
 */
export type CBButtonSize = "small" | "medium" | "large";

/**
 * Variantes visuais suportadas.
 *
 * - `solid`: botão com fundo preenchido
 * - `outline`: botão com borda e fundo transparente
 * - `clear`: botão sem fundo e sem borda
 */
export type CBButtonVariant = "solid" | "outline" | "clear";

/**
 * Props nativas expostas do IonButton.
 *
 * Apenas props consideradas úteis e seguras para a API pública
 * do componente são reexportadas.
 */
type NativeButtonProps = Pick<
  React.ComponentProps<typeof IonButton>,
  | "onClick"
  | "type"
  | "routerLink"
  | "href"
  | "target"
  | "expand"
  | "className"
  | "style"
>;

/**
 * Props do componente `CBButton`.
 */
export interface CBButtonProps extends NativeButtonProps {
  /**
   * Conteúdo renderizado dentro do botão.
   *
   * Pode receber texto, ícones, badges ou qualquer nó React.
   *
   * @example
   * <CBButton>Salvar</CBButton>
   *
   * @example
   * <CBButton>
   *   <SaveIcon />
   *   Salvar
   * </CBButton>
   */
  children: React.ReactNode;

  /**
   * Tamanho visual do botão.
   *
   * @default "medium"
   */
  size?: CBButtonSize;

  /**
   * Variante visual do botão.
   *
   * @default "solid"
   */
  variant?: CBButtonVariant;

  /**
   * Aplica bordas totalmente arredondadas.
   *
   * @default false
   */
  rounded?: boolean;

  /**
   * Faz o botão ocupar 100% da largura disponível.
   *
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Estado de carregamento.
   *
   * Quando ativo:
   * - o botão é desabilitado
   * - exibe spinner
   * - renderiza `loadingText` se informado
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Conteúdo exibido durante o loading.
   *
   * Se não informado, utiliza `children`.
   */
  loadingText?: React.ReactNode;

  /**
   * Desabilita interação do botão.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Gradiente customizado para o fundo do botão.
   *
   * Possui prioridade sobre `color`.
   *
   * @example
   * gradient="linear-gradient(90deg, #ff8a00, #e52e71)"
   */
  gradient?: string;

  /**
   * Ícone renderizado antes do conteúdo principal.
   */
  iconStart?: React.ReactNode;

  /**
   * Ícone renderizado após o conteúdo principal.
   */
  iconEnd?: React.ReactNode;

  /**
   * Cor principal do botão.
   *
   * Aceita:
   * - tokens internos (`primary`, `success`, etc)
   * - CSS variables (`var(--my-color)`)
   * - nomes de variáveis CSS (`--my-color`)
   * - valores HEX/RGB/HSL
   *
   * @default "primary"
   *
   * @example
   * color="primary"
   *
   * @example
   * color="var(--summary-yellow-bg)"
   *
   * @example
   * color="--summary-yellow-bg"
   *
   * @example
   * color="#ca8a04"
   */
  color?: CBColorOrString;

  /**
   * Sobrescreve a cor de fundo do botão.
   */
  backgroundColor?: string;

  /**
   * Sobrescreve a cor do texto.
   */
  textColor?: string;

  /**
   * Sobrescreve a cor da borda.
   */
  borderColor?: string;

  /**
   * Sobrescreve a cor aplicada no estado hover.
   */
  hoverColor?: string;

  /**
   * Sobrescreve a cor aplicada no estado ativo.
   */
  activeColor?: string;
}

/**
 * Botão customizado baseado em Ionic com suporte a:
 *
 * - Variantes visuais
 * - Tokens de tema
 * - CSS variables
 * - Loading state
 * - Ícones
 * - Gradientes
 * - Tamanhos
 * - Customização avançada via CSS vars
 *
 * O componente prioriza flexibilidade visual mantendo
 * uma API consistente para design systems.
 *
 * @example
 * ```tsx
 * <CBButton
 *   color="primary"
 *   size="large"
 *   rounded
 * >
 *   Salvar
 * </CBButton>
 * ```
 *
 * @example
 * ```tsx
 * <CBButton
 *   variant="outline"
 *   color="--summary-yellow-bg"
 *   iconStart={<WarningIcon />}
 * >
 *   Atenção
 * </CBButton>
 * ```
 *
 * @example
 * ```tsx
 * <CBButton
 *   loading={isSaving}
 *   loadingText="Salvando..."
 * >
 *   Salvar alterações
 * </CBButton>
 * ```
 */
const CBButton: React.FC<CBButtonProps> = ({
  children,
  size = "medium",
  variant = "solid",
  rounded = false,
  fullWidth = false,
  loading = false,
  loadingText,
  disabled = false,
  gradient,
  iconStart,
  iconEnd,
  className = "",
  style,
  color = "primary",
  backgroundColor,
  textColor,
  borderColor,
  hoverColor,
  activeColor,
  ...rest
}) => {
  const { main: mainColorDefault, contrast: contrastColorDefault } =
    useCBColor(color);

  const finalStyle: CSSVars = { ...style };

  const bgColor = backgroundColor ?? gradient ?? mainColorDefault;
  const txtColor = textColor ?? contrastColorDefault;
  const borderCol = borderColor ?? mainColorDefault;
  const hoverCol = hoverColor ?? txtColor;
  const activeCol = activeColor ?? txtColor;

  // Variante sólida
  if (variant === "solid") {
    finalStyle["--background"] = bgColor;
    finalStyle["--color"] = txtColor;
    finalStyle["--background-focused"] = mainColorDefault;
    finalStyle["--background-activated"] = mainColorDefault;
    finalStyle["--color-focused"] = txtColor;
    finalStyle["--color-hover"] = hoverCol;
    finalStyle["--color-activated"] = activeCol;
  }

  // Variante outline
  else if (variant === "outline") {
    finalStyle["--color"] = txtColor;
    finalStyle["--border-color"] = borderCol;
    finalStyle["--border-color-focused"] = borderCol;
    finalStyle["--border-color-activated"] = borderCol;
    finalStyle["--color-focused"] = txtColor;
    finalStyle["--color-hover"] = hoverCol;
    finalStyle["--color-activated"] = activeCol;
  }

  // Variante clear
  else if (variant === "clear") {
    finalStyle["--color"] = txtColor;
    finalStyle["--color-focused"] = txtColor;
    finalStyle["--color-hover"] = hoverCol;
    finalStyle["--color-activated"] = activeCol;
  }

  // Border radius
  if (rounded) {
    finalStyle["--border-radius"] = "999px";
  }

  // Full width
  if (fullWidth) {
    finalStyle.width = "100%";
  }

  // Tamanho
  switch (size) {
    case "small":
      finalStyle.height = "32px";
      finalStyle.fontSize = "14px";
      break;

    case "medium":
      finalStyle.height = "40px";
      finalStyle.fontSize = "16px";
      break;

    case "large":
      finalStyle.height = "48px";
      finalStyle.fontSize = "18px";
      break;
  }

  return (
    <IonButton
      fill={variant}
      disabled={disabled || loading}
      style={finalStyle}
      className={className}
      {...rest}
    >
      {loading ? (
        <>
          <IonSpinner name="crescent" slot="start" />
          {loadingText ?? children}
        </>
      ) : (
        <>
          {iconStart}
          {children}
          {iconEnd}
        </>
      )}
    </IonButton>
  );
};

export default CBButton;
