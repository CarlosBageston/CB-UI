import CBButton from "../CBButton";
import { motion } from "framer-motion";
import React from "react";
import { useCBColor } from "../../hooks/useCBColor";
import type { CBStepperProps } from "./CBStepper.types";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useCBStepper } from "./useCBStepper";

export const CBStepperHorizontal: React.FC<CBStepperProps> = ({
  steps,
  color = "primary",
  className,
  classNameContent,
  style,
  showButtonNext = true,
  showButtonPrev = true,
  nextLabel = "Próximo",
  prevLabel = "Voltar",
  disableNext,
  disablePrev,
  theme,
}) => {
  const { activeIndex, next, prev, canNext, canPrev } = useCBStepper();
  const { main: mainColorDefault, contrast: contrastColorDefault } =
    useCBColor(color);
  const stepperTheme = theme?.stepper;

  const mainColor = stepperTheme?.circle?.background ?? mainColorDefault;
  const contrastColor = stepperTheme?.circle?.text ?? contrastColorDefault;
  const lineColorFinal = stepperTheme?.line ?? mainColorDefault;

  return (
    <div className={`flex flex-col gap-4 ${className ?? ""}`} style={style}>
      {/* Circulos e linhas */}
      <div className="flex items-center justify-between w-full relative">
        {steps.map((step, idx) => {
          const isActive = idx === activeIndex;
          const isCompleted = idx < activeIndex;

          return (
            <div
              key={idx}
              className="flex-1 relative flex flex-col items-center"
            >
              <div className="relative flex items-center justify-center w-full">
                {/* Linha conectando ao próximo passo */}
                {idx < steps.length - 1 && (
                  <div
                    className="absolute top-1/2 left-1/2 -translate-y-1/2"
                    style={{
                      width: "100%",
                      height: 2,
                      zIndex: 0,
                    }}
                  >
                    {/* Linha base */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "#d1d5db",
                      }}
                    />

                    {/* Linha animada */}
                    <motion.div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: lineColorFinal,
                        transformOrigin: "left",
                      }}
                      initial={false}
                      animate={{
                        scaleX: isCompleted ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                )}

                {/* Círculo  */}
                <motion.div
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 cursor-pointer shrink-0"
                  initial={false}
                  animate={{
                    backgroundColor:
                      isActive || isCompleted ? mainColor : "#ffffff",

                    borderColor:
                      isActive || isCompleted ? mainColor : "#d1d5db",

                    color: isActive || isCompleted ? contrastColor : "#6b7280",

                    scale: isActive ? [1, 1.08, 1] : 1,
                  }}
                  transition={{
                    backgroundColor: {
                      duration: 0.2,
                      delay: isActive || isCompleted ? 0.4 : 0,
                    },
                    borderColor: {
                      duration: 0.2,
                      delay: isActive || isCompleted ? 0.4 : 0,
                    },
                    color: {
                      duration: 0.2,
                      delay: isActive || isCompleted ? 0.4 : 0,
                    },
                    scale: {
                      duration: 0.25,
                      delay: isActive || isCompleted ? 0.4 : 0,
                      ease: "easeOut",
                    },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {step.icon ?? idx + 1}
                </motion.div>
              </div>

              {/* Título abaixo do círculo */}
              <span
                className="text-sm text-center mt-2"
                style={{ color: stepperTheme?.titleColor }}
              >
                {step.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Conteúdo do passo - renderiza todos, esconde inativos */}
      <div className={classNameContent}>
        {steps.map((step, idx) => (
          <div
            key={idx}
            style={{ display: idx === activeIndex ? "block" : "none" }}
          >
            {step.content}
          </div>
        ))}
      </div>

      {/* Navegação */}
      <div className="flex justify-between w-full mt-2">
        {showButtonPrev && (
          <CBButton
            disabled={disablePrev ? disablePrev(activeIndex) : !canPrev}
            onClick={prev}
            iconStart={<MdKeyboardArrowLeft />}
            children={
              typeof prevLabel === "function"
                ? prevLabel(activeIndex, steps.length)
                : prevLabel
            }
            color={color}
            variant={stepperTheme?.button?.prev?.variant ?? "solid"}
            backgroundColor={stepperTheme?.button?.prev?.background}
            textColor={stepperTheme?.button?.prev?.text}
            borderColor={stepperTheme?.button?.prev?.border}
            hoverColor={stepperTheme?.button?.prev?.hover}
            rounded={stepperTheme?.button?.prev?.rounded}
            activeColor={stepperTheme?.button?.prev?.active}
          />
        )}
        {showButtonNext && (
          <CBButton
            disabled={disableNext ? disableNext(activeIndex) : !canNext}
            onClick={next}
            iconEnd={<MdKeyboardArrowRight />}
            children={
              typeof nextLabel === "function"
                ? nextLabel(activeIndex, steps.length)
                : nextLabel
            }
            color={color}
            variant={stepperTheme?.button?.next?.variant ?? "solid"}
            backgroundColor={stepperTheme?.button?.next?.background}
            textColor={stepperTheme?.button?.next?.text}
            borderColor={stepperTheme?.button?.next?.border}
            hoverColor={stepperTheme?.button?.next?.hover}
            rounded={stepperTheme?.button?.next?.rounded}
            activeColor={stepperTheme?.button?.next?.active}
          />
        )}
      </div>
    </div>
  );
};

export default CBStepperHorizontal;
