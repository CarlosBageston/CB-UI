import CBButton from "../CBButton";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useCBColor } from "../../hooks/useCBColor";
import type { CBStepperProps } from "./CBStepper.types";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const CBStepperHorizontal: React.FC<CBStepperProps> = ({
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
    theme,
}) => {
    const [activeIndex, setActiveIndex] = useState(initialStep);
    const { main: mainColorDefault, contrast: contrastColorDefault } = useCBColor(color);
    const stepperTheme = theme?.stepper;

    const mainColor = stepperTheme?.circle?.background ?? mainColorDefault;
    const contrastColor = stepperTheme?.circle?.text ?? contrastColorDefault;
    const lineColorFinal = stepperTheme?.line ?? mainColorDefault;

    const handleNext = async () => {
        if (onNext) {
            const canProceed = await onNext(activeIndex);
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
            {/* Circulos e linhas */}
            <div className="flex items-center justify-between w-full relative">
                {steps.map((step, idx) => {
                    const isActive = idx === activeIndex;
                    const isCompleted = idx < activeIndex;

                    return (
                        <div key={idx} className="flex-1 relative flex flex-col items-center">
                            <div className="relative flex items-center justify-center w-full">
                                {/* Linha conectando ao próximo passo */}
                                {idx < steps.length - 1 && (
                                    <motion.div
                                        className="absolute top-1/2 left-1/2 transform -translate-y-1/2"
                                        style={{
                                            width: "100%",
                                            height: "2px",
                                            backgroundColor: lineColorFinal,
                                            zIndex: 0,
                                            originX: 0
                                        }}
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: isCompleted ? 1 : 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                    />
                                )}

                                {/* Círculo (agora dentro do novo div relativo, mas centralizado nele) */}
                                <motion.div
                                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 cursor-pointer flex-shrink-0"
                                    style={{
                                        backgroundColor: isActive || isCompleted ? mainColor : "#ffffff",
                                        color: isActive || isCompleted ? contrastColor : "#6b7280",
                                        borderColor: isActive || isCompleted ? mainColor : "#d1d5db",
                                    }}
                                    onClick={() => setActiveIndex(idx)}
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

            {/* Conteúdo do passo */}
            <div className={classNameContent}>{steps[activeIndex].content}</div>

            {/* Navegação */}
            <div className="flex justify-between w-full mt-2">
                {showButtonPrev &&
                    <CBButton
                        disabled={disablePrev ? disablePrev(activeIndex) : activeIndex === 0}
                        onClick={handlePrev}
                        iconStart={<MdKeyboardArrowLeft />}
                        label={
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
                }
                {showButtonNext &&
                    <CBButton
                        disabled={disableNext ? disableNext(activeIndex) : activeIndex === steps.length - 1}
                        onClick={handleNext}
                        iconEnd={<MdKeyboardArrowRight />}
                        label={
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
                }
            </div>
        </div>
    );
};

export default CBStepperHorizontal;
