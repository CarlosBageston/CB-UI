/* components.d.ts */
import type { ReactNode, CSSProperties } from "react";
import type { CBColor, CBColorOrString } from "../theme/CBColor";
import type { IconType } from "react-icons";
import type { IonSelect, IonTextarea } from "@ionic/react";

/** Base para componentes que aceitam className e style */
interface CBBaseProps {
  className?: string;
  style?: CSSProperties;
}

/** ----------------- CBAutocomplete ----------------- */
export type CBAutocompleteVariant = "search" | "select";

export interface CBAutocompleteProps<T> extends CBBaseProps {
  items: T[];
  getLabel: (item: T) => string;
  getValue: (item: T) => string | number;
  onSelect: (item: T | undefined) => void;
  placeholder?: string;
  color?: CBColor;
  rounded?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  variant?: CBAutocompleteVariant;
  label?: string;
}

/** ----------------- CBButton ----------------- */
export type CBButtonSize = "small" | "medium" | "large";
export type CBButtonVariant = "solid" | "outline" | "clear";

export interface CBButtonProps extends CBBaseProps {
  label?: string;
  size?: CBButtonSize;
  variant?: CBButtonVariant;
  rounded?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  gradient?: string;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  color?: CBColor;
}

/** ----------------- CBCard ----------------- */
export interface CBCardProps extends CBBaseProps {
  title?: string;
  subtitle?: string;
  footer?: ReactNode;
  elevation?: "none" | "sm" | "md" | "lg";
  borderRadius?: "sm" | "md" | "lg" | "xl";
  hoverEffect?: boolean;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  headerActions?: ReactNode;
  headerActionsStyle?: CSSProperties;
  onClickEdit?: () => void;
  onClickDelete?: () => void;
}

/** ----------------- CBCheckbox ----------------- */
export interface CBCheckboxProps extends CBBaseProps {
  label?: string;
  checked: boolean;
  disabled?: boolean;
  variant?: "default" | "filled";
  onChange: (checked: boolean) => void;
  color?: CBColor;
}

/** ----------------- CBDataPicker ----------------- */
export type PickerMode = "modal" | "dropdown";

export interface CBDataPickerProps extends CBBaseProps {
  value: Date | null;
  onChange: (date: Date) => void;
  label: string;
  format?: "day" | "month-year" | "date" | "datetime" | "MMMM/YYYY";
  disabled?: boolean;
  errorText?: string;
  placeholder?: string;
  minDate?: string | number;
  maxDate?: string | number;
  classNameInput?: string;
  classNameContainer?: string;
  withCalendar?: boolean;
  rounded?: boolean;
  color?: CBColor;
  pickerMode?: PickerMode;
}

/** ----------------- CBEmptyState ----------------- */
export interface CBEmptyStateProps extends CBBaseProps {
  messages?: string[];
  title?: string;
  icon?: ReactNode;
  buttonLabel?: string;
  onButtonClick?: () => void;
  color: CBColor;
  colorBg?: string;
}

/** ----------------- CBFabButton ----------------- */
export interface CBFabButtonProps extends CBBaseProps {
  tooltip: string;
  icon?: IconType;
  onClick: () => void;
  recording?: boolean;
  loading?: boolean;
  showCancel?: boolean;
  onCancel?: () => void;
  cancelIcon?: IconType;
  disabled?: boolean;
  color?: CBColor;
}

/** ----------------- CBFabButtonCenter ----------------- */
export interface CBFabButtonCenterProps extends CBBaseProps {
  icon?: IconType;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  color?: CBColor;
}

/** ----------------- CBFilterBar ----------------- */
export interface CBFilterOption {
  value: string;
  label: string;
}

export interface CBFilterBarProps<T> extends CBBaseProps {
  data: T[];
  columns?: CBFilterOption[];
  placeholder?: string;
  initialQuery?: string;
  onChange: (filteredData: T[]) => void;
  inputClassName?: string;
  selectClassName?: string;
  style?: CSSProperties;
}

/** ----------------- CBInput ----------------- */

export type CBInputMask = "tel" | "cep" | "currency" | "cnpj";

export type CBInputMaskResult = {
  formatted: string;
  raw: string;
};

export type CBInputMaskFn = (value: string) => CBInputMaskResult;

export interface CBInputProps {
  name?: string;
  value: string;

  label: string;
  placeholder?: string;

  disabled?: boolean;

  type?: "text" | "password" | "email" | "number";

  fill?: "outline" | "solid";
  shape?: "round";
  labelPlacement?: "stacked" | "floating" | "fixed";

  className?: string;
  classNameIcon?: string;
  classNameContainerIcon?: string;
  style?: React.CSSProperties;

  error?: string;
  maxLength?: number;

  color?: CBColorOrString;
  colorContrast?: CBColorOrString;
  textColor?: string;
  /**
   * Máscaras nativas do CBInput.
   *
   * tel
   * ```txt
   * Entrada: 41999998888
   * Saída:   (41) 99999-8888
   * Raw:     41999998888
   * ```
   *
   * cep
   * ```txt
   * Entrada: 84000000
   * Saída:   84000-000
   * Raw:     84000000
   * ```
   *
   * currency
   * ```txt
   * Entrada: 123456
   * Saída:   R$ 1.234,56
   * Raw:     1234.56
   * ```
   */
  mask?: CBInputMask | CBInputMaskFn;
  radius?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * Valor formatado exibido ao usuário.
   *
   * Ex:
   * "(41) 99999-8888"
   * "84000-000"
   * "R$ 1.234,56"
   */
  onChange: (value: string) => void;

  /**
   * Valor bruto sem formatação.
   *
   * Ex:
   * "(41) 99999-8888" -> "41999998888"
   * "84000-000" -> "84000000"
   * "R$ 1.234,56" -> "1234.56"
   */
  onRawChange?: (raw: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

/** ----------------- CBLoading ----------------- */
export type LoadingType = "circular" | "dots" | "linear";

export interface CBLoadingProps extends CBBaseProps {
  isOpen?: boolean;
  message?: string;
  color?: CBColor;
  type?: LoadingType;
  withBg?: boolean;
  withText?: boolean;
}

/** ----------------- CBModal ----------------- */
export interface CBModalProps extends CBBaseProps {
  isOpen: boolean;
  onDismiss: () => void;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  footer?: ReactNode;
  showCloseButton?: boolean;
  headerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
}

/** ----------------- CBMultiView ----------------- */
export type CBMultiViewVariant = "tabs" | "accordion" | "stepper";

export interface CBMultiViewStep {
  title: string;
  content: ReactNode;
  icon?: ReactNode;
}

export interface CBMultiViewIonicProps {
  steps: CBMultiViewStep[];
  variant?: CBMultiViewVariant;
  initialStep?: number;
  orientation?: "horizontal" | "vertical";
  color?: CBColor;
}

/** ----------------- CBSelect ----------------- */
export interface CBSelectProps<T> extends Omit<
  React.ComponentProps<typeof IonSelect>,
  "value" | "onIonChange"
> {
  label?: string;
  value: T | string | number;
  items: T[];
  getLabel: (option: T) => string;
  getValue: (option: T) => string | number;
  onValueChange: (value: T) => void;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  loading?: boolean;
  color?: CBColor;
}

/** ----------------- CBSelector ----------------- */
export interface CBSelectorProps {
  label?: string;
  checked: boolean;
  disabled?: boolean;
  type?: "checkbox" | "switch" | "radio";
  onChange: (checked: boolean) => void;
  color?: CBColor;
  styleDiv?: CSSProperties;
  labelPlacement?: "start" | "end";
}

/** ----------------- CBTextArea ----------------- */
export interface CBTextAreaProps extends React.ComponentProps<
  typeof IonTextarea
> {
  label?: string;
  value: string;
  placeholder?: string;
  rows?: number;
  error?: string;
  disabled?: boolean;
  color?: CBColor;
  onChangeValue: (val: string) => void;
  maxLength?: number;
}

/** ----------------- CBToast ----------------- */
export type ToastType = "success" | "error" | "warning" | "info";
export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "center";

export interface ToastOptions {
  message: string;
  type?: ToastType;
  duration?: number;
  position?: ToastPosition;
}

/** ----------------- CBTooltip ----------------- */
export interface CBTooltipProps {
  content: ReactNode;
  children: ReactNode;
  color?: CBColor;
  placement?: "top" | "bottom" | "left" | "right";
}

/** ----------------- CBStateWrapper ----------------- */
export interface CBStateWrapperProps {
  isLoading?: boolean;
  isEmpty?: boolean;
  error?: string | null;
  emptyTitle?: string;
  emptyMessages?: string[];
  emptyIcon?: React.ReactNode;
  onRetry?: () => void;
  children?: React.ReactNode;
  minHeight?: string | number;
  loadingLabel?: string;
  theme?: {
    container?: React.CSSProperties;
    loading?: React.CSSProperties;
    loadingLabel?: React.CSSProperties;

    error?: React.CSSProperties;
    errorTitle?: React.CSSProperties;
    errorMessage?: React.CSSProperties;
    retryButton?: React.CSSProperties;

    content?: React.CSSProperties;
  };
}
