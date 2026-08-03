import React from "react";
import { IonCheckbox } from "@ionic/react";
import type { CBColorOrString } from "../../theme/CBColor";
import { useCBColor } from "../../hooks/useCBColor";

export type CBCheckboxProps = {
  label?: React.ReactNode;

  checked: boolean;

  disabled?: boolean;

  onChange: (checked: boolean) => void;

  color?: CBColorOrString;

  labelPlacement?: "start" | "end";

  className?: string;

  style?: React.CSSProperties;
};

const CBCheckbox: React.FC<CBCheckboxProps> = ({
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
      <IonCheckbox
        checked={checked}
        disabled={disabled}
        labelPlacement={labelPlacement}
        onIonChange={(e) => onChange(e.detail.checked)}
        style={{
          "--border-color": mainColor,
          "--border-color-checked": mainColor,

          "--checkbox-background": "transparent",
          "--checkbox-background-checked": mainColor,

          "--checkmark-color": contrastColor,
        }}
      >
        {label}
      </IonCheckbox>
    </div>
  );
};

export default CBCheckbox;
