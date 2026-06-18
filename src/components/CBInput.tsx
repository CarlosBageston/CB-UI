import { IonInput, IonNote } from "@ionic/react";
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

  const handleBlur = useCallback(
    (e: any) => {
      setFocused(false);
      onBlur?.(toStringValue(e.target.value));
    },
    [onBlur],
  );

  return (
    <div className={`relative flex flex-col h-[72px] pt-2 ${className}`}>
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
        <button
          type="button"
          aria-label={show ? "Ocultar senha" : "Mostrar senha"}
          onClick={toggle}
          className="absolute top-4 right-4 z-10 p-1"
        >
          {show ? (
            <IoEye className="text-2xl" />
          ) : (
            <IoEyeOff className="text-2xl" />
          )}
        </button>
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
