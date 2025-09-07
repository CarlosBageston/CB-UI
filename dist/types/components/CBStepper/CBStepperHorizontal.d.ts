import React from "react";
import type { CBColor } from "../../theme/CBColor";
export interface Step {
    title: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
}
interface CBStepperHorizontalProps {
    steps: Step[];
    initialStep?: number;
    color?: CBColor;
}
declare const CBStepperHorizontal: React.FC<CBStepperHorizontalProps>;
export default CBStepperHorizontal;
