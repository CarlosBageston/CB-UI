import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { LuCalendar } from "react-icons/lu";
import type { CBColor } from "../theme/CBColor";
import { useCBColor } from "../hooks/useCBColor";
import React, { useState, useEffect, useCallback } from "react";
import localizedFormat from "dayjs/plugin/localizedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  IonInput,
  IonModal,
  IonButton,
  IonDatetime,
  IonNote,
} from "@ionic/react";

dayjs.locale("pt-br");
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);

export interface DateLike {
  toDate(): Date;
}

const toDate = (val: Date | DateLike | null) => {
  if (!val) return null;
  if ("toDate" in val) return val.toDate();
  return val;
};

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

const borderRadiusMap: Record<Radius, string> = {
  none: "0px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  full: "9999px",
};

const CBDataPicker: React.FC<CBDataPickerProps> = ({
  value,
  onChange,
  label,
  format = "date",
  disabled,
  errorText,
  placeholder = "Selecionar data",
  minDate,
  maxDate,
  classNameInput,
  classNameContainer,
  withCalendar = false,
  radius = "md",
  color = "neutral",
  pickerMode = "modal",
}) => {
  const { main: mainColor, contrast: textColor } = useCBColor(color);
  const { main: errorColor } = useCBColor("danger");

  const [showModal, setShowModal] = useState(false);
  const [focused, setFocused] = useState(false);
  const [internalValue, setInternalValue] = useState<string>(
    value ? dayjs(toDate(value)).format("YYYY-MM-DDTHH:mm") : "",
  );

  useEffect(() => {
    setInternalValue(
      value ? dayjs(toDate(value)).format("YYYY-MM-DDTHH:mm") : "",
    );
  }, [value]);

  const formatDisplay = () => {
    if (!internalValue) return "";
    const date = dayjs(internalValue);
    switch (format) {
      case "month-year":
        return date.format("MMM/YYYY");
      case "MMMM/YYYY":
        return date.format("MMMM/YYYY");
      case "datetime":
        return date.format("DD/MM/YYYY HH:mm");
      case "day":
        return date.format("DD");
      default:
        return date.format("DD/MM/YYYY");
    }
  };

  const handleConfirm = () => {
    if (internalValue) {
      onChange(dayjs(internalValue).toDate());
      setShowModal(false);
      setFocused(false);
    }
  };

  const resolveDate = (fallback: dayjs.Dayjs, value?: string | number) => {
    if (typeof value === "number")
      return dayjs().add(value, "years").format("YYYY-MM-DD");
    return value ?? fallback.format("YYYY-MM-DD");
  };

  const openPicker = useCallback(() => {
    if (disabled) return;
    setInternalValue(internalValue || dayjs().format("YYYY-MM-DDTHH:mm"));
    setFocused(true);
    setShowModal(true);
  }, [disabled, internalValue]);

  const closePicker = () => {
    setShowModal(false);
    setFocused(false);
  };

  const filled = !!internalValue;
  const borderColor = errorText
    ? errorColor
    : focused || filled
      ? mainColor
      : "var(--cb-color-border)";

  return (
    <div
      className={`relative flex flex-col h-18 pt-2 mb-3! ${classNameContainer ?? ""}`}
    >
      <div className="relative flex items-center w-full" onClick={openPicker}>
        <IonInput
          readonly
          value={formatDisplay()}
          label={label}
          placeholder={placeholder}
          disabled={disabled}
          fill="outline"
          shape="round"
          labelPlacement="stacked"
          aria-invalid={!!errorText}
          style={{
            "--border-color": borderColor,
            "--highlight-color-focused": mainColor,
            "--border-radius": borderRadiusMap[radius],
            color: textColor ?? "var(--cb-text-primary)",
          }}
          className={classNameInput}
        />
        {withCalendar && (
          <LuCalendar className="absolute right-4 text-[20px] text-gray-500 hover:text-blue-600 transition-colors cursor-pointer pointer-events-none" />
        )}
      </div>

      {errorText && (
        <IonNote
          role="alert"
          className="text-[12px] pl-6! text-(--cb-color-danger)"
        >
          {errorText}
        </IonNote>
      )}

      {pickerMode === "modal" && (
        <IonModal
          isOpen={showModal}
          onDidDismiss={closePicker}
          className="custom-calendar-modal"
        >
          <div className="p-4 bg-(--cb-surface) rounded-lg shadow-lg">
            <IonDatetime
              locale="pt-BR"
              value={internalValue}
              min={resolveDate(
                dayjs().subtract(10, "years").startOf("year"),
                minDate,
              )}
              style={{
                "--background": "var(--cb-surface)",
                "--background-rgb": "var(--cb-surface-rgb)",
                "--color": "var(--cb-text-primary)",
                "--ion-color-base-rgb": "var(--cb-color-base-rgb)",
              }}
              max={resolveDate(dayjs().add(50, "years").endOf("year"), maxDate)}
              presentation={
                format === "month-year" || format === "MMMM/YYYY"
                  ? "month-year"
                  : format === "datetime"
                    ? "date-time"
                    : "date"
              }
              onIonChange={(e) => setInternalValue(e.detail.value as string)}
              showDefaultButtons={false}
            />
            <div className="flex justify-end mt-4 gap-2">
              <IonButton color="medium" onClick={closePicker}>
                Cancelar
              </IonButton>
              <IonButton onClick={handleConfirm}>Confirmar</IonButton>
            </div>
          </div>
        </IonModal>
      )}

      {pickerMode === "dropdown" && showModal && (
        <div className="absolute picker-modal z-50 mt-16 bg-(--cb-surface) rounded-lg shadow-lg p-3">
          <IonDatetime
            locale="pt-BR"
            value={internalValue}
            min={resolveDate(
              dayjs().subtract(10, "years").startOf("year"),
              minDate,
            )}
            style={{
              "--background": "var(--cb-surface)",
              "--background-rgb": "var(--cb-surface-rgb)",
              "--color": "var(--cb-text-primary)",
            }}
            max={resolveDate(dayjs().add(50, "years").endOf("year"), maxDate)}
            presentation={
              format === "month-year" || format === "MMMM/YYYY"
                ? "month-year"
                : format === "datetime"
                  ? "date-time"
                  : "date"
            }
            onIonChange={(e) => {
              setInternalValue(e.detail.value as string);
              handleConfirm();
            }}
            className="calendar-days-of-week"
            showDefaultButtons={false}
          />
        </div>
      )}
    </div>
  );
};

export default CBDataPicker;
