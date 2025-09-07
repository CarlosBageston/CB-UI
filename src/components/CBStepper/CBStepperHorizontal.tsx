import React, { useState } from "react";
import { IonCard, IonCardContent } from "@ionic/react";
import { motion } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useCBColor } from "../../hooks/useCBColor";
import type { CBColor } from "../../theme/CBColor";
import CBButton from "../CBButton";

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

export const CBStepperHorizontal: React.FC<CBStepperHorizontalProps> = ({
    steps,
    initialStep = 0,
    color = "primary",
}) => {
    const [activeIndex, setActiveIndex] = useState(initialStep);
    const { main: mainColor, contrast: contrastColor } = useCBColor(color);

    return (
        <div className="flex flex-col gap-4">
            {/* Circulos e linhas */}
            <div className="flex items-center justify-between w-full relative">
                {steps.map((step, idx) => {
                    const isActive = idx === activeIndex;
                    const isCompleted = idx < activeIndex;

                    return (
                        <div key={idx} className="flex flex-col items-center relative flex-1">
                            {/* Linha conectando ao próximo passo */}
                            {idx < steps.length - 1 && (
                                <motion.div
                                    className="absolute top-1/2 left-1/2 h-1"
                                    style={{
                                        width: "100%",
                                        height: "2px",
                                        zIndex: 0,
                                        originX: 0,
                                        backgroundColor: mainColor,
                                        marginTop: "-9px"
                                    }}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: isCompleted ? 1 : 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                            )}

                            {/* Circulo */}
                            <motion.div
                                className="w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 cursor-pointer"
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

                            <span className="text-sm mt-2 text-center">{step.title}</span>
                        </div>
                    );
                })}
            </div>

            {/* Conteúdo do passo */}
            <IonCard>
                <IonCardContent>{steps[activeIndex].content}</IonCardContent>
            </IonCard>

            {/* Navegação */}
            <div className="flex justify-between w-full">
                <CBButton
                    disabled={activeIndex === 0}
                    onClick={() => setActiveIndex(activeIndex - 1)}
                    iconStart={<MdKeyboardArrowLeft />}
                    label="Voltar"
                    color={color}
                />
                <CBButton
                    disabled={activeIndex === steps.length - 1}
                    onClick={() => setActiveIndex(activeIndex + 1)}
                    iconEnd={<MdKeyboardArrowRight />}
                    label="Próximo"
                    color={color}
                />
            </div>
        </div>
    );
};
