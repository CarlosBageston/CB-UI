import React from "react";
import type { CBColor } from "../theme/CBColor";
import type { CBStepperProps } from "./CBStepper/CBStepper.types";
export type CBMultiViewVariant = "tabs" | "accordion" | "stepper";
export interface Step {
    title: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
}
export interface CBMultiViewIonicProps {
    steps: Step[];
    variant?: CBMultiViewVariant;
    initialStep?: number;
    orientation?: "horizontal" | "vertical";
    color?: CBColor;
}
/**
 * CBMultiView
 *
 * Componente que permite exibir múltiplas visualizações (views) em três formatos:
 * - **Tabs (abas)** usando `IonSegment`
 * - **Accordion (acordeão)** usando `IonAccordionGroup`
 * - **Stepper (etapas)** usando `CBStepperHorizontal` ou `CBStepperVertical`
 *
 * É utilizado para navegação entre diferentes seções ou etapas de um processo, com suporte a:
 * - Tema e cores personalizáveis
 * - Controle de botões de navegação
 * - Callbacks de navegação (`onNext`, `onPrev`)
 *
 * @component
 *
 * @param {Object} props - Propriedades do componente.
 *
 * @param {Step[]} props.steps - Lista de etapas/views. Cada etapa deve conter:
 *   - `title` (**string**): Título do passo.
 *   - `content` (**ReactNode**): Conteúdo exibido dentro do passo.
 *   - `icon` (**ReactNode**, opcional): Ícone exibido ao lado do título.
 *
 * @param {"tabs" | "accordion" | "stepper"} [props.variant="tabs"]
 * Define o tipo de visualização a ser usada.
 *
 * @param {number} [props.initialStep=0]
 * Índice do passo inicial.
 *
 * @param {"horizontal" | "vertical"} [props.orientation="horizontal"]
 * Direção do stepper quando `variant="stepper"`.
 *
 * @param {CBColor} [props.color="primary"]
 * Cor principal usada para destacar o passo ativo.
 *
 * @param {string} [props.className]
 * Classe CSS aplicada ao container principal.
 *
 * @param {string} [props.classNameContent]
 * Classe CSS aplicada ao conteúdo interno de cada passo.
 *
 * @param {React.CSSProperties} [props.style]
 * Estilo inline aplicado ao container principal.
 *
 * ---
 * 🧭 **Navegação e Botões**
 *
 * @param {boolean} [props.showButtonPrev=true]
 * Define se o botão "Voltar" será exibido no stepper.
 *
 * @param {boolean} [props.showButtonNext=true]
 * Define se o botão "Próximo" será exibido no stepper.
 *
 * @param {string | ((stepIndex: number, stepsLength: number) => string)} [props.nextLabel="Próximo"]
 * Define o texto do botão "Próximo" (ou uma função dinâmica baseada no índice e total de etapas).
 *
 * @param {string | ((stepIndex: number, stepsLength: number) => string)} [props.prevLabel="Voltar"]
 * Define o texto do botão "Voltar" (ou uma função dinâmica baseada no índice e total de etapas).
 *
 * @param {(stepIndex: number) => boolean} [props.disableNext]
 * Função que retorna se o botão "Próximo" deve estar desabilitado.
 *
 * @param {(stepIndex: number) => boolean} [props.disablePrev]
 * Função que retorna se o botão "Voltar" deve estar desabilitado.
 *
 * @param {(currentStep: number) => boolean | Promise<boolean> | void} [props.onNext]
 * Callback executado ao clicar em "Próximo".
 * - Retorne `false` ou `Promise<false>` para impedir o avanço.
 * - Retorne `true` (ou nada) para permitir o avanço.
 *
 * @param {(currentStep: number) => boolean | Promise<boolean> | void} [props.onPrev]
 * Callback executado ao clicar em "Voltar".
 * - Retorne `false` para impedir o retrocesso.
 *
 * ---
 * 🎨 **Tema (theme)**
 *
 * @param {Object} [props.theme]
 * Objeto que personaliza as cores e o estilo visual do stepper.
 *
 * @param {string} [props.theme.titleColor]
 * Cor do título de cada passo.
 *
 * @param {Object} [props.theme.circle]
 * Cores do círculo do step ativo.
 *   - `background`: Cor de fundo.
 *   - `text`: Cor do texto.
 *
 * @param {string} [props.theme.line]
 * Cor da linha que conecta os passos.
 *
 * @param {Object} [props.theme.button]
 * Personalização dos botões de navegação.
 *
 * @param {Object} [props.theme.button.next]
 * Estilo do botão "Próximo":
 *   - `background`, `text`, `border`, `hover`, `active`
 *   - `variant`: `"solid" | "clear" | "outline"`
 *   - `rounded`: Define se o botão é arredondado.
 *
 * @param {Object} [props.theme.button.prev]
 * Estilo do botão "Voltar":
 *   - `background`, `text`, `border`, `hover`, `active`
 *   - `variant`: `"solid" | "clear" | "outline"`
 *   - `rounded`: Define se o botão é arredondado.
 *
 * ---
 * @example
 * // Exemplo: Tabs com 3 etapas
 * <CBMultiView
 *   steps={[
 *     { title: "Etapa 1", content: <p>Conteúdo 1</p> },
 *     { title: "Etapa 2", content: <p>Conteúdo 2</p> },
 *     { title: "Etapa 3", content: <p>Conteúdo 3</p> },
 *   ]}
 *   variant="tabs"
 * />
 *
 * @example
 * // Exemplo: Accordion
 * <CBMultiView
 *   variant="accordion"
 *   steps={[
 *     { title: "Seção 1", content: <p>Conteúdo 1</p> },
 *     { title: "Seção 2", content: <p>Conteúdo 2</p> },
 *   ]}
 * />
 *
 * @example
 * // Exemplo: Stepper com tema customizado
 * <CBMultiView
 *   variant="stepper"
 *   orientation="horizontal"
 *   color="secondary"
 *   steps={[
 *     { title: "Passo 1", content: <p>Conteúdo 1</p> },
 *     { title: "Passo 2", content: <p>Conteúdo 2</p> },
 *   ]}
 *   theme={{
 *     circle: { background: "#4ade80", text: "#fff" },
 *     line: "#22d3ee",
 *     titleColor: "#111827",
 *     button: {
 *       next: { background: "#f43f5e", text: "#fff", variant: "solid" },
 *       prev: { variant: "outline", border: "#ccc" },
 *     },
 *   }}
 *   onNext={(step) => console.log("Avançou do passo:", step)}
 *   onPrev={(step) => console.log("Voltou do passo:", step)}
 * />
 *
 * @remarks
 * - Usa componentes do Ionic (`IonSegment`, `IonAccordionGroup`) internamente.
 * - O modo `stepper` utiliza os componentes `CBStepperHorizontal` ou `CBStepperVertical`.
 * - Suporta callbacks assíncronos para controle de avanço/retrocesso.
 */
declare const CBMultiView: React.FC<CBMultiViewIonicProps & CBStepperProps>;
export default CBMultiView;
