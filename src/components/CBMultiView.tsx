import React, { useState } from "react";
import {
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    type SegmentChangeEventDetail,
} from "@ionic/react";
import type { IonSegmentCustomEvent } from "@ionic/core";
import type { CBColor } from "../theme/CBColor";
import { CBStepperHorizontal } from "./CBStepper/CBStepperHorizontal";
import { CBStepperVertical } from "./CBStepper/CBStepperVertical";

export type CBMultiViewVariant = "tabs" | "accordion" | "stepper";

export interface CBMultiViewIonicProps {
    steps: { title: string; content: React.ReactNode; icon?: React.ReactNode; }[];
    variant?: CBMultiViewVariant;
    initialStep?: number;
    orientation?: "horizontal" | "vertical";
    color?: CBColor;
}
/**
 * CBMultiView
 *
 * Componente que permite exibir múltiplas views de forma organizada, podendo ser em formato de abas (tabs), acordeão (accordion) ou stepper (horizontal/vertical).
 *
 * @component
 *
 * @param {Object} props - Propriedades do componente
 * @param {Array<{title: string; content: React.ReactNode; icon?: React.ReactNode}>} props.steps - Lista de etapas/views. Cada etapa deve ter título, conteúdo e opcionalmente um ícone.
 * @param {"tabs" | "accordion" | "stepper"} [props.variant="tabs"] - Tipo de visualização do multi-view: abas, acordeão ou stepper.
 * @param {number} [props.initialStep=0] - Índice inicial da etapa ativa.
 * @param {"horizontal" | "vertical"} [props.orientation="horizontal"] - Direção do stepper, caso o variant seja "stepper".
 * @param {CBColor} [props.color="primary"] - Cor principal usada para destacar a etapa ativa.
 *
 * @example
 * // Tabs com 3 etapas
 * <CBMultiView
 *    steps={[
 *      { title: "Etapa 1", content: <p>Conteúdo 1</p> },
 *      { title: "Etapa 2", content: <p>Conteúdo 2</p> },
 *      { title: "Etapa 3", content: <p>Conteúdo 3</p> },
 *    ]}
 *    variant="tabs"
 *    initialStep={0}
 * />
 *
 * @example
 * // Accordion com 2 seções
 * <CBMultiView
 *    steps={[
 *      { title: "Seção 1", content: <p>Conteúdo 1</p> },
 *      { title: "Seção 2", content: <p>Conteúdo 2</p> },
 *    ]}
 *    variant="accordion"
 * />
 *
 * @example
 * // Stepper horizontal com cores personalizadas
 * <CBMultiView
 *    steps={[
 *      { title: "Passo 1", content: <p>Conteúdo 1</p> },
 *      { title: "Passo 2", content: <p>Conteúdo 2</p> },
 *    ]}
 *    variant="stepper"
 *    orientation="horizontal"
 *    color="secondary"
 * />
 *
 * @remarks
 * - Quando `variant` é "tabs", utiliza `IonSegment` para alternar entre etapas.
 * - Quando `variant` é "accordion", utiliza `IonAccordionGroup` e `IonAccordion`.
 * - Quando `variant` é "stepper", usa os componentes `CBStepperHorizontal` ou `CBStepperVertical` dependendo da `orientation`.
 * - Permite personalizar cor, passo inicial e orientação do stepper.
 */

const CBMultiView: React.FC<CBMultiViewIonicProps> = ({
    steps,
    variant = "tabs",
    initialStep = 0,
    orientation = "horizontal",
    color = 'primary',
}) => {
    const [activeIndex, setActiveIndex] = useState(initialStep);

    // ---------------------- Tabs ----------------------
    if (variant === "tabs") {
        return (
            <div>
                <IonSegment
                    value={activeIndex.toString()}
                    onIonChange={(e: IonSegmentCustomEvent<SegmentChangeEventDetail>) => {
                        const val = e.detail.value; // val: SegmentValue | undefined
                        if (val !== undefined && val !== null) {
                            setActiveIndex(parseInt(val.toString(), 10));
                        }
                    }}
                >
                    {steps.map((step, idx) => (
                        <IonSegmentButton key={idx} value={idx.toString()}>
                            <IonLabel>{step.title}</IonLabel>
                        </IonSegmentButton>
                    ))}
                </IonSegment>
                <div className="p-4">{steps[activeIndex].content}</div>
            </div>
        );
    }

    // ---------------------- Accordion ----------------------
    if (variant === "accordion") {
        return (
            <IonAccordionGroup
                value={activeIndex.toString()}
                onIonChange={(e: any) => {
                    // e.detail.value contém o value do accordion aberto
                    setActiveIndex(parseInt(e.detail.value ?? "-1", 10));
                }}
            >
                {steps.map((step, idx) => (
                    <IonAccordion
                        key={idx}
                        value={idx.toString()}
                    >
                        <IonItem slot="header">
                            <IonLabel>{step.title}</IonLabel>
                        </IonItem>
                        <div slot="content" className="p-4">
                            {step.content}
                        </div>
                    </IonAccordion>
                ))}
            </IonAccordionGroup>
        );
    }

    // ---------------------- Stepper ----------------------
    if (variant === "stepper") {
        if (orientation === "horizontal") {
            return <CBStepperHorizontal steps={steps} initialStep={initialStep} color={color} />;
        } else {
            return <CBStepperVertical steps={steps} initialStep={initialStep} color={color} />;
        }

    };

    return null;
};

export default CBMultiView;