import React from "react";
import type { CBColorOrString } from "../../theme/CBColor";
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
declare const CBToggle: React.FC<CBToggleProps>;
export default CBToggle;
