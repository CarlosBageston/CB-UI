import type { ReactNode, CSSProperties } from "react";
import type { Timestamp } from "firebase/firestore";
import type { ColDef } from "ag-grid-community";
import type { CBColor } from "../theme/CBColor";
import type { IconType } from "react-icons";
import type { IonInputCustomEvent } from "@ionic/core";
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
    value: Date | Timestamp | null;
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
/** ----------------- CBDataTable ----------------- */
export interface CBTableColumn<T> extends Omit<ColDef<T>, "children"> {
    col?: number;
    render?: (item: T) => ReactNode;
    children?: CBTableColumn<T>[];
    align?: "left" | "center" | "right";
}
export interface CBDataTableProps<T> extends CBBaseProps {
    columns: CBTableColumn<T>[];
    data: T[];
    pageSize?: number;
    emptyMessage?: string;
    onEdit?: (item: T) => void;
    onDelete?: (item: T) => void;
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
export type CBInputMask = "tel" | "cep" | "currency";
export interface CBInputProps extends CBBaseProps {
    label: string;
    value: string | number;
    error?: string;
    mask?: CBInputMask;
    maxLength?: number;
    onChangeValue: (val: string) => void;
    handleBlur?: (e: IonInputCustomEvent<FocusEvent>) => void;
    color?: CBColor;
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
export interface CBSelectProps<T> extends Omit<React.ComponentProps<typeof IonSelect>, "value" | "onIonChange"> {
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
export interface CBTextAreaProps extends React.ComponentProps<typeof IonTextarea> {
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
export interface ToastOptions {
    message: string;
    type?: ToastType;
    duration?: number;
}
/** ----------------- CBTooltip ----------------- */
export interface CBTooltipProps {
    content: ReactNode;
    children: ReactNode;
    color?: CBColor;
    placement?: "top" | "bottom" | "left" | "right";
}
export {};
