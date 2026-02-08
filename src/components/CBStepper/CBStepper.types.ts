import type { CBColor } from "../../theme/CBColor";

export interface Step {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

export interface CBTabsTheme {
  segment?: {
    background?: string;
    borderRadius?: string | number;
    padding?: string | number;
    border?: string;
    hideIndicator?: boolean;
    scrollable?: boolean;
  };
  button?: {
    background?: string;
    text?: string;

    activeBackground?: string;
    activeText?: string;

    rounded?: boolean;
    border?: string;
  };
}
export interface CBAccordionTheme {
  header?: {
    background?: string;
    color?: string;
    border?: string;
    borderRadius?: string;
    padding?: string;
  };
  content?: {
    background?: string;
    color?: string;
    padding?: string;
  };
  indicator?: {
    hide?: boolean;
  };
}

export interface CBStepperTheme {
  titleColor?: string;
  circle?: { background?: string; text?: string };
  line?: string;
  button?: {
    next?: {
      background?: string;
      text?: string;
      border?: string;
      hover?: string;
      active?: string;
      variant?: "solid" | "clear" | "outline";
      rounded?: boolean;
    };
    prev?: {
      background?: string;
      text?: string;
      border?: string;
      hover?: string;
      active?: string;
      rounded?: boolean;
      variant?: "solid" | "clear" | "outline";
    };
  };
}

export interface CBMultiViewTheme {
  tabs?: CBTabsTheme;
  stepper?: CBStepperTheme;
  accordion?: CBAccordionTheme;
}

export interface CBStepperProps {
  steps: Step[];
  initialStep?: number;
  color?: CBColor;

  // 🔹 Estilo
  className?: string;
  style?: React.CSSProperties;
  classNameContent?: string;

  // 🔹 Configuração dos botões
  showButtonPrev?: boolean; // esconder/mostrar navegação
  showButtonNext?: boolean; // esconder/mostrar navegação
  nextLabel?: string | ((stepIndex: number, stepsLength: number) => string);
  prevLabel?: string | ((stepIndex: number, stepsLength: number) => string);
  disableNext?: (stepIndex: number) => boolean; // função que retorna se o botão próximo deve ser desabilitado
  disablePrev?: (stepIndex: number) => boolean; // idem para voltar

  // 🔹 Callbacks
  onNext?: (currentStep: number) => boolean | Promise<boolean> | void;
  onPrev?: (currentStep: number) => boolean | Promise<boolean> | void;

  // 🔹 Tema
  theme?: CBMultiViewTheme;
}
