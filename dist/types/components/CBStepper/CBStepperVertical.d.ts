import React from "react";
import type { CBColor } from "../../theme/CBColor";
export interface Step {
    title: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
}
interface CBStepperVerticalProps {
    steps: Step[];
    initialStep?: number;
    color?: CBColor;
}
declare const CBStepperVertical: React.FC<CBStepperVerticalProps>;
export default CBStepperVertical;
