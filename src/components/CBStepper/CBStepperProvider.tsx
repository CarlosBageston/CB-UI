import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  CBStepperContext,
  type CBStepperContextData,
} from "./CBStepperContext";

export interface CBStepperProviderProps {
  children: React.ReactNode;
  initialStep?: number;
  totalSteps: number;
  onNext?: (currentStep: number) => boolean | Promise<boolean | void> | void;
  onPrev?: (currentStep: number) => boolean | Promise<boolean | void> | void;
}

export const CBStepperProvider: React.FC<CBStepperProviderProps> = ({
  children,
  initialStep = 0,
  totalSteps,
  onNext,
  onPrev,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialStep);

  // Sincroniza caso o pai mude o initialStep
  useEffect(() => {
    setActiveIndex(initialStep);
  }, [initialStep]);

  const next = useCallback(async (): Promise<boolean> => {
    if (activeIndex >= totalSteps - 1) return false;

    if (onNext) {
      const canProceed = await onNext(activeIndex);
      if (canProceed === false) return false;
    }

    setActiveIndex((current) => current + 1);
    return true;
  }, [activeIndex, totalSteps, onNext]);

  const prev = useCallback(async (): Promise<boolean> => {
    if (activeIndex <= 0) return false;

    if (onPrev) {
      const canProceed = await onPrev(activeIndex);
      if (canProceed === false) return false;
    }

    setActiveIndex((current) => current - 1);
    return true;
  }, [activeIndex, onPrev]);

  const reset = useCallback(() => {
    setActiveIndex(initialStep);
  }, [initialStep]);

  const contextValue: CBStepperContextData = useMemo(
    () => ({
      activeIndex,
      totalSteps,
      next,
      prev,
      reset,
      canNext: activeIndex < totalSteps - 1,
      canPrev: activeIndex > 0,
      isFirst: activeIndex === 0,
      isLast: activeIndex === totalSteps - 1,
    }),
    [activeIndex, totalSteps, next, prev, reset],
  );

  return (
    <CBStepperContext.Provider value={contextValue}>
      {children}
    </CBStepperContext.Provider>
  );
};
