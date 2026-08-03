import React from "react";
import type { CBColorOrString } from "../../theme/CBColor";
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
declare const CBRadio: React.FC<CBRadioProps>;
export default CBRadio;
