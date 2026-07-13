import React from "react";
export interface CBStepperProviderProps {
    children: React.ReactNode;
    initialStep?: number;
    totalSteps: number;
    onNext?: (currentStep: number) => boolean | Promise<boolean | void> | void;
    onPrev?: (currentStep: number) => boolean | Promise<boolean | void> | void;
}
export declare const CBStepperProvider: React.FC<CBStepperProviderProps>;
