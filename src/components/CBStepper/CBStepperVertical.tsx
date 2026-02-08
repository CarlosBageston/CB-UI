import CBButton from "../CBButton";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useCBColor } from "../../hooks/useCBColor";
import type { CBStepperProps } from "./CBStepper.types";

const CBStepperVertical: React.FC<CBStepperProps> = ({
    steps,
    initialStep = 0,
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
    onNext,
    onPrev,
    theme

}) => {
    const [activeIndex, setActiveIndex] = useState(initialStep);
    const { main: defaultMainColor, contrast: defaultContrastColor } = useCBColor(color);

    const stepperTheme = theme?.stepper;
    const mainColor = stepperTheme?.circle?.background ?? defaultMainColor;
    const contrastColor = stepperTheme?.circle?.text ?? defaultContrastColor;
    const lineColor = stepperTheme?.line ?? defaultMainColor;
    const titleColor = stepperTheme?.titleColor ?? "#111827";

    const handleNext = async () => {
        console.log('canProceed')
        if (onNext) {
            const canProceed = await onNext(activeIndex);
            console.log('canProceed', canProceed)
            if (canProceed === false) return;
        }

        const nextIndex = activeIndex + 1;
        if (nextIndex < steps.length) {
            setActiveIndex(nextIndex);
        }
    };

    const handlePrev = async () => {
        if (onPrev) {
            const canProceed = await onPrev(activeIndex);
            if (canProceed === false) return;
        }
        const prevIndex = activeIndex - 1;
        if (prevIndex >= 0) {
            setActiveIndex(prevIndex);
        }
    };
    return (
        <div className={`flex flex-col gap-4 ${className ?? ""}`} style={style}>
            {steps.map((step, idx) => {
                const isActive = idx === activeIndex;
                const isCompleted = idx < activeIndex;
                return (
                    <div key={idx} className="relative flex items-start gap-4">
                        {/* Coluna do círculo e linha */}
                        <div className="flex flex-col items-center relative">
                            <motion.div
                                className="w-10 h-10 rounded-full border-2 flex items-center justify-center cursor-pointer z-10"
                                onClick={() => setActiveIndex(idx)}
                                style={{
                                    backgroundColor: isActive || isCompleted ? mainColor : "#ffffff",
                                    color: isActive || isCompleted ? contrastColor : "#6b7280",
                                    borderColor: isActive || isCompleted ? mainColor : "#d1d5db",
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {step.icon ?? idx + 1}
                            </motion.div>

                            {/* Linha vertical conectando ao próximo passo */}


                        </div>
                        {idx !== steps.length - 1 &&

                            <motion.div
                                style={{
                                    width: 2,
                                    backgroundColor: isActive || isCompleted ? lineColor : "#d1d5db",
                                    position: "absolute",
                                    height: '100%',
                                    left: 18,
                                    top: 16
                                }}
                            />
                        }

                        {/* Conteúdo do passo */}
                        <div
                            className="flex-1"
                        >
                            <div className="font-semibold text-base" style={{ color: titleColor }}>
                                {step.title}
                            </div>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden mt-1"
                            >
                                <div className={`mb-2 ${classNameContent}`}>{step.content}</div>
                                <div className="flex w-full !mt-2 !pb-2">
                                    {showButtonNext &&
                                        <CBButton
                                            disabled={disableNext?.(activeIndex)}
                                            onClick={handleNext}
                                            label={
                                                typeof nextLabel === "function"
                                                    ? nextLabel(activeIndex, steps.length)
                                                    : nextLabel
                                            }
                                            color={color}
                                            className="!text-[12px] !mr-2"
                                            variant={stepperTheme?.button?.next?.variant ?? 'solid'}
                                            backgroundColor={stepperTheme?.button?.next?.background}
                                            textColor={stepperTheme?.button?.next?.text}
                                            borderColor={stepperTheme?.button?.next?.border}
                                            hoverColor={stepperTheme?.button?.next?.hover}
                                            rounded={stepperTheme?.button?.next?.rounded}
                                            activeColor={stepperTheme?.button?.next?.active}
                                        />
                                    }
                                    {showButtonPrev &&
                                        <CBButton
                                            disabled={disablePrev ? disablePrev(activeIndex) : activeIndex === 0}
                                            onClick={handlePrev}
                                            label={
                                                typeof prevLabel === "function"
                                                    ? prevLabel(activeIndex, steps.length)
                                                    : prevLabel
                                            }
                                            color={color}
                                            variant={stepperTheme?.button?.prev?.variant ?? "clear"}
                                            className="!text-[12px]"
                                            backgroundColor={stepperTheme?.button?.prev?.background}
                                            textColor={stepperTheme?.button?.prev?.text}
                                            borderColor={stepperTheme?.button?.prev?.border}
                                            hoverColor={stepperTheme?.button?.prev?.hover}
                                            rounded={stepperTheme?.button?.prev?.rounded}
                                            activeColor={stepperTheme?.button?.prev?.active}
                                        />
                                    }
                                </div>
                            </motion.div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CBStepperVertical;