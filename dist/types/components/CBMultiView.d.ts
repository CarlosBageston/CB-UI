import React from "react";
import type { CBColor } from "../theme/CBColor";
export type CBMultiViewVariant = "tabs" | "accordion" | "stepper";
export interface CBMultiViewIonicProps {
    steps: {
        title: string;
        content: React.ReactNode;
        icon?: React.ReactNode;
    }[];
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
declare const CBMultiView: React.FC<CBMultiViewIonicProps>;
export default CBMultiView;
