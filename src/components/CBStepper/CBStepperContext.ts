import { createContext } from "react";

export interface CBStepperContextData {
  activeIndex: number;
  totalSteps: number;

  next(): Promise<boolean>;
  prev(): Promise<boolean>;
  reset(): void;

  canNext: boolean;
  canPrev: boolean;

  isFirst: boolean;
  isLast: boolean;
}

export const CBStepperContext = createContext<CBStepperContextData | null>(
  null,
);
