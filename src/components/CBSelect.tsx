import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  IonNote,
  IonSelect,
  IonSelectOption,
  type SelectCustomEvent,
} from "@ionic/react";

import { useCBColor } from "../hooks/useCBColor";
import type { CBColor, CSSVars } from "../theme/CBColor";

export interface CBSelectProps<T> extends Omit<
  React.ComponentProps<typeof IonSelect>,
  "value" | "onIonChange"
> {
  label?: string;
  value?: T | string | number | null;
  items: T[];
  getLabel: (item: T) => string;
  getValue: (item: T) => string | number;

  onValueChange?: (value: T) => void;

  error?: string;
  helperText?: string;
  loading?: boolean;

  color?: CBColor;

  radius?: "none" | "sm" | "md" | "lg" | "full";
}

function useResponsiveInterface() {
  const [mode, setMode] = useState<"popover" | "action-sheet">("action-sheet");

  useEffect(() => {
    const media = window.matchMedia("(min-width:768px)");

    const update = () => {
      setMode(media.matches ? "popover" : "action-sheet");
    };

    update();

    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return mode;
}

function CBSelect<T>({
  label,
  value,
  items,
  getLabel,
  getValue,
  onValueChange,

  placeholder = "Selecione...",
  disabled,
  loading,

  error,
  helperText,

  color = "neutral",

  radius = "md",

  style,

  fill = "outline",
  shape = "round",

  ...props
}: CBSelectProps<T>) {
  const ref = useRef<HTMLIonSelectElement>(null);

  const [focused, setFocused] = useState(false);

  const { main } = useCBColor(color);
  const { main: danger } = useCBColor("danger");

  const selectInterface = useResponsiveInterface();

  const filled = value !== undefined && value !== null && value !== "";

  const borderColor = error
    ? danger
    : focused || filled
      ? main
      : "var(--cb-color-border)";

  const radiusMap = {
    none: "0px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px",
  };

  const css = useMemo<CSSVars>(
    () => ({
      ...style,

      "--border-color": borderColor,
      "--highlight-color-focused": main,
      "--border-radius": radiusMap[radius],

      "--icon-color": borderColor,
      "--color": "var(--cb-color-dark)",
      "--placeholder-color": "var(--cb-color-border)",
    }),
    [style, borderColor, main, radius],
  );

  const handleChange = (e: SelectCustomEvent<string | number>) => {
    const option = items.find((item) => getValue(item) === e.detail.value);

    if (option) {
      onValueChange?.(option);
    }
  };

  return (
    <div className="relative flex flex-col h-18 pt-2 mb-3!">
      <IonSelect
        ref={ref}
        value={value ?? undefined}
        label={label}
        labelPlacement="stacked"
        placeholder={placeholder}
        fill={fill}
        shape={shape}
        mode="md"
        disabled={disabled || loading}
        interface={selectInterface}
        interfaceOptions={{
          header: label,
        }}
        style={css}
        onIonFocus={() => setFocused(true)}
        onIonBlur={() => setFocused(false)}
        onIonChange={handleChange}
        {...props}
      >
        {items.map((item) => (
          <IonSelectOption key={String(getValue(item))} value={getValue(item)}>
            {getLabel(item)}
          </IonSelectOption>
        ))}
      </IonSelect>

      {(error || helperText) && (
        <IonNote
          role="alert"
          className={`pl-6! text-[12px] ${
            error ? "text-(--cb-color-danger)" : "text-(--cb-color-secondary)"
          }`}
        >
          {error ?? helperText}
        </IonNote>
      )}
    </div>
  );
}

export default CBSelect;
