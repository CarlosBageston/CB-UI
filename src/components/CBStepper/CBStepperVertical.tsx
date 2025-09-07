import React, { useState } from "react";
import { motion } from "framer-motion";
import type { CBColor } from "../../theme/CBColor";
import { useCBColor } from "../../hooks/useCBColor";
import CBButton from "../CBButton";

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

export const CBStepperVertical: React.FC<CBStepperVerticalProps> = ({
    steps,
    initialStep = 0,
    color = "primary",
}) => {
    const [activeIndex, setActiveIndex] = useState(initialStep);
    const { main: mainColor, contrast: contrastColor } = useCBColor(color);

    return (
        <div className="flex flex-col gap-4">
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
                                    backgroundColor: isActive || isCompleted ? mainColor : "#d1d5db",
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
                            <div className="font-semibold text-base">{step.title}</div>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden mt-1"
                            >
                                <div className="mb-2">{step.content}</div>
                                <div className="flex w-full !mt-2">
                                    <CBButton
                                        disabled={idx === steps.length - 1}
                                        onClick={() => setActiveIndex(idx + 1)}
                                        label="Próximo"
                                        color={color}
                                        className="!text-[12px] !mr-2"
                                    />
                                    <CBButton
                                        disabled={idx === 0}
                                        onClick={() => setActiveIndex(idx - 1)}
                                        label="Voltar"
                                        color={color}
                                        variant="clear"
                                        className="!text-[12px]"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
