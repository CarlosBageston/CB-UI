import "dayjs/locale/pt-br";
import type { CBColor } from "../theme/CBColor";
import React from "react";
export interface DateLike {
    toDate(): Date;
}
type PickerMode = "modal" | "dropdown";
type Radius = "none" | "sm" | "md" | "lg" | "full";
export interface CBDataPickerProps {
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
    /** Substitui o antigo `rounded` boolean, agora no mesmo padrão do CBInput */
    radius?: Radius;
    color?: CBColor;
    pickerMode?: PickerMode;
}
declare const CBDataPicker: React.FC<CBDataPickerProps>;
export default CBDataPicker;
