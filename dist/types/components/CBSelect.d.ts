import React from "react";
import { IonSelect } from "@ionic/react";
import type { CBColor } from "../theme/CBColor";
export interface CBSelectProps<T> extends Omit<React.ComponentProps<typeof IonSelect>, "value" | "onIonChange"> {
    label?: string;
    value?: T | string | number | null;
    items: T[];
    getLabel: (item: T) => string;
    getValue: (item: T) => string | number;
    onValueChange?: (value: T) => void;
    error?: string;
    helperText?: string;
    loading?: boolean;
    color?: CBColor;
    radius?: "none" | "sm" | "md" | "lg" | "full";
}
declare function CBSelect<T>({ label, value, items, getLabel, getValue, onValueChange, placeholder, disabled, loading, error, helperText, color, radius, style, fill, shape, ...props }: CBSelectProps<T>): React.JSX.Element;
export default CBSelect;
