import React from "react";
import { IonRadio } from "@ionic/react";

import type { CBColorOrString } from "../../theme/CBColor";
import { useCBColor } from "../../hooks/useCBColor";

export type CBRadioProps = {
  label?: React.ReactNode;

  value: string;

  disabled?: boolean;

  color?: CBColorOrString;

  labelPlacement?: "start" | "end";

  onClick?: () => void;

  className?: string;

  style?: React.CSSProperties;
};

const CBRadio: React.FC<CBRadioProps> = ({
  label,
  value,
  disabled = false,
  color = "primary",
  labelPlacement = "end",
  onClick,
  className,
  style,
}) => {
  const { main: mainColor, contrast: contrastColor } = useCBColor(color);

  return (
    <div
      onClick={() => {
        if (!disabled) {
          onClick?.();
        }
      }}
      className={`
        flex
        items-center
        gap-2
        w-fit
        cursor-pointer
        select-none
        ${disabled ? "cursor-not-allowed opacity-50" : ""}
        ${className ?? ""}
      `}
      style={style}
    >
      {labelPlacement === "start" && <span>{label}</span>}

      <IonRadio
        value={value}
        disabled={disabled}
        color={color}
        style={{
          "--color": mainColor,
          "--color-checked": mainColor,
          "--mark-color": contrastColor,
        }}
      />

      {labelPlacement === "end" && <span>{label}</span>}
    </div>
  );
};

export default CBRadio;
