import { useContext } from "react";
import { CBStepperContext } from "./CBStepperContext";

export function useCBStepper() {
  const context = useContext(CBStepperContext);

  if (!context) {
    throw new Error("useCBStepper must be used inside a CBStepperProvider.");
  }

  return context;
}
