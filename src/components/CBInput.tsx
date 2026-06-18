import { IonGrid, IonInput, IonNote } from "@ionic/react";
import { useCallback, useMemo, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

import { useCBColor } from "../hooks/useCBColor";
import { useInputMask } from "../hooks/useInputMask";
import { usePasswordToggle } from "../hooks/usePasswordToggle";
import type { CBInputProps } from "../types/components";
import type { InputInputEventDetail, IonInputCustomEvent } from "@ionic/core";

function toStringValue(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value);
}

/**
 * Campo de entrada baseado no IonInput com recursos adicionais do CBUI.
 *
 * Funcionalidades:
 * - Suporte a máscaras nativas (`tel`, `cep`, `currency`)
 * - Exibição de erro integrada
 * - Controle de cores através do sistema de temas CBUI
 * - Alternância de visibilidade para senhas
 * - Personalização de bordas e radius
 *
 * Máscaras:
 *
 * `tel`
 * ```txt
 * Entrada: 41999998888
 * Exibição: (41) 99999-8888
 * Raw: 41999998888
 * ```
 *
 * `cep`
 * ```txt
 * Entrada: 84000000
 * Exibição: 84000-000
 * Raw: 84000000
 * ```
 *
 * `currency`
 * ```txt
 * Entrada: 123456
 * Exibição: R$ 1.234,56
 * Raw: 1234.56
 * ```
 *
 * Eventos:
 *
 * ```tsx
 * <CBInput
 *   mask="tel"
 *   value={telefone}
 *   onChange={(formatted) => {
 *     console.log(formatted);
 *     // (41) 99999-8888
 *   }}
 *   onRawChange={(raw) => {
 *     console.log(raw);
 *     // 41999998888
 *   }}
 * />
 * ```
 *
 * `onChange` retorna o valor formatado exibido ao usuário.
 *
 * `onRawChange` retorna o valor bruto sem formatação,
 * ideal para persistência, validações e integrações com APIs.
 */
const CBInput: React.FC<CBInputProps> = ({
  value = "",
  label,
  placeholder,
  disabled,
  type = "text",
  fill = "outline",
  shape = "round",
  labelPlacement = "stacked",
  className = "",
  style,
  error,
  maxLength,
  color = "neutral",
  mask,

  onChange,
  onRawChange,
  onBlur,
  onFocus,
  radius = "md",
  classNameIcon = "",
  classNameContainerIcon = "",
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const { main: mainColor } = useCBColor(color);
  const { main: errorColor } = useCBColor("danger");
  const { show, toggle, inputType } = usePasswordToggle();

  const { handleChange, inputMode } = useInputMask(mask, onChange, onRawChange);

  const stringValue = useMemo(() => toStringValue(value), [value]);

  const isPassword = type === "password";
  const filled = !!stringValue;

  const borderColor = error
    ? errorColor
    : focused || filled
      ? mainColor
      : "var(--ion-color-medium)";

  const handleInput = useCallback(
    (e: IonInputCustomEvent<InputInputEventDetail>) => {
      handleChange(toStringValue(e.target.value));
    },
    [handleChange],
  );

  const handleBlur = useCallback(() => {
    setFocused(false);
    onBlur?.();
  }, [onBlur]);

  const borderRadiusMap = {
    none: "0px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px",
  };
  return (
    <div className={`relative flex flex-col h-[72px] pt-2 mb-3! ${className}`}>
      <IonInput
        {...props}
        value={stringValue}
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        type={isPassword ? inputType : type}
        fill={fill}
        shape={shape}
        labelPlacement={labelPlacement}
        maxlength={maxLength}
        inputmode={inputMode}
        aria-invalid={!!error}
        style={{
          "--border-color": borderColor,
          "--highlight-color-focused": mainColor,
          "--border-radius": borderRadiusMap[radius || "md"],
          color: "var(--ion-color-dark)",
          ...style,
        }}
        onIonInput={handleInput}
        onIonFocus={() => {
          setFocused(true);
          onFocus?.();
        }}
        onIonBlur={handleBlur}
      />

      {isPassword && (
        <IonGrid
          aria-label={show ? "Ocultar senha" : "Mostrar senha"}
          onClick={toggle}
          className={`absolute top-4 right-4 z-10 p-1 ${classNameContainerIcon}`}
        >
          {show ? (
            <IoEye
              className={`text-2xl text-(--ion-color-text) ${classNameIcon}`}
            />
          ) : (
            <IoEyeOff
              className={`text-2xl text-(--ion-color-text) ${classNameIcon}`}
            />
          )}
        </IonGrid>
      )}

      {error && (
        <IonNote
          role="alert"
          className="text-[12px] pl-6! text-(--ion-color-danger)"
        >
          {error}
        </IonNote>
      )}
    </div>
  );
};

export default CBInput;
