import React from "react";
import type { CBColorOrString } from "../../theme/CBColor";
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
declare const CBCheckbox: React.FC<CBCheckboxProps>;
export default CBCheckbox;
