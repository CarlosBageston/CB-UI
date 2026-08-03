import React from "react";
import { IonToggle } from "@ionic/react";
import type { CBColorOrString } from "../../theme/CBColor";
import { useCBColor } from "../../hooks/useCBColor";

export type CBToggleProps = {
  label?: React.ReactNode;

  checked: boolean;

  disabled?: boolean;

  onChange: (checked: boolean) => void;

  color?: CBColorOrString;

  labelPlacement?: "start" | "end";

  className?: string;

  style?: React.CSSProperties;
};

const CBToggle: React.FC<CBToggleProps> = ({
  label,
  checked,
  disabled = false,
  onChange,
  color = "primary",
  labelPlacement = "end",
  className,
  style,
}) => {
  const { main: mainColor, contrast: contrastColor } = useCBColor(color);

  return (
    <div className={`flex items-center ${className ?? ""}`} style={style}>
      <IonToggle
        checked={checked}
        disabled={disabled}
        labelPlacement={labelPlacement}
        onIonChange={(e) => onChange(e.detail.checked)}
        style={{
          "--track-background": "#d1d5db",
          "--track-background-checked": mainColor,

          "--handle-background": "#ffffff",
          "--handle-background-checked": contrastColor,
        }}
      >
        {label}
      </IonToggle>
    </div>
  );
};

export default CBToggle;
