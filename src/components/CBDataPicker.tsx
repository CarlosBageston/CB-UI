import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { LuCalendar } from "react-icons/lu";
import type { CBColor } from '../theme/CBColor';
import { useCBColor } from '../hooks/useCBColor';
import React, { useState, useEffect } from 'react';
import type { Timestamp } from 'firebase/firestore';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { IonNote, IonModal, IonButton, IonDatetime } from '@ionic/react';

dayjs.locale('pt-br');
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);

const toDate = (val: Date | Timestamp | null) => {
    if (!val) return null;
    if ('toDate' in val) return val.toDate();
    return val;
};

/**
 * Define os modos de exibição do date picker.
 * - `"modal"`: exibe em modal.
 * - `"dropdown"`: exibe em dropdown.
 */
type PickerMode = "modal" | "dropdown";

/**
 * Props do componente CBDataPicker.
 */
export interface CBDataPickerProps {
    /** Valor atual do date picker (Date ou Timestamp do Firestore) */
    value: Date | Timestamp | null;
    /** Callback chamado ao selecionar uma data */
    onChange: (date: Date) => void;
    /** Label exibido acima do input */
    label: string;
    /** Formato de exibição da data */
    format?: 'day' | 'month-year' | 'date' | 'datetime' | 'MMMM/YYYY';
    /** Desabilita o date picker */
    disabled?: boolean;
    /** Texto de erro exibido abaixo do input */
    errorText?: string;
    /** Placeholder do input */
    placeholder?: string;
    /** Data mínima selecionável */
    minDate?: string | number;
    /** Data máxima selecionável */
    maxDate?: string | number;
    /** Classe CSS customizada para o input */
    classNameInput?: string;
    /** Classe CSS customizada para o container */
    classNameContainer?: string;
    /** Exibe ícone de calendário */
    withCalendar?: boolean;
    /** Define bordas arredondadas */
    rounded?: boolean;
    /** Cor do date picker */
    color?: CBColor;
    /** Modo de exibição do picker */
    pickerMode?: PickerMode;
}

/**
 * CBDataPicker
 *
 * Componente para seleção de datas com suporte a:
 * - Diferentes formatos de exibição
 * - Datas mínimas e máximas
 * - Modal ou dropdown
 * - Icone de calendário
 * - Integração com Firebase Timestamp
 *
 * @param props Propriedades do date picker
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * const [date, setDate] = useState<Date | null>(null);
 * 
 * <CBDataPicker
 *   label="Data de Nascimento"
 *   value={date}
 *   onChange={setDate}
 *   format="date"
 *   placeholder="Selecione a data"
 *   withCalendar
 *   rounded
 *   color="primary"
 * />
 * ```
 *
 * @example
 * ```tsx
 * <CBDataPicker
 *   label="Mês/Ano"
 *   value={date}
 *   onChange={setDate}
 *   format="month-year"
 *   pickerMode="dropdown"
 *   minDate="2020-01-01"
 *   maxDate="2030-12-31"
 * />
 * ```
 */
const CBDataPicker: React.FC<CBDataPickerProps> = ({
    value,
    onChange,
    label,
    format = 'date',
    disabled,
    errorText,
    placeholder = 'Selecionar data',
    minDate,
    maxDate,
    classNameInput,
    classNameContainer,
    withCalendar = false,
    rounded = true,
    color = "neutral",
    pickerMode = "modal",
}) => {
    const { main: borderColor, contrast: textColor } = useCBColor(color);
    const [showModal, setShowModal] = useState(false);
    const [internalValue, setInternalValue] = useState<string>(
        value ? dayjs(toDate(value)).format('YYYY-MM-DDTHH:mm') : ''
    );

    useEffect(() => {
        setInternalValue(value ? dayjs(toDate(value)).format('YYYY-MM-DDTHH:mm') : '');
    }, [value]);
    const formatDisplay = () => {
        if (!internalValue) return '';
        const date = dayjs(internalValue);
        switch (format) {
            case 'month-year':
                return date.format('MMM/YYYY');
            case 'MMMM/YYYY':
                return date.format('MMMM/YYYY');
            case 'datetime':
                return date.format('DD/MM/YYYY HH:mm');
            case 'day':
                return date.format('DD');
            default:
                return date.format('DD/MM/YYYY');
        }
    };

    const handleConfirm = () => {
        if (internalValue) {
            onChange(dayjs(internalValue).toDate());
            setShowModal(false);
        }
    };

    const resolveDate = (fallback: dayjs.Dayjs, value?: string | number) => {
        if (typeof value === 'number') return dayjs().add(value, 'years').format('YYYY-MM-DD');
        return value ?? fallback.format('YYYY-MM-DD');
    };
    const openPicker = () => {
        if (!disabled) {
            setInternalValue(internalValue || dayjs().format('YYYY-MM-DDTHH:mm'));
            setShowModal(true);
        }
    };
    const borderRadiusInput = rounded ? "99999px" : "6px";

    return (
        <div className='relative'>
            <div
                onClick={() => {
                    setInternalValue(internalValue || dayjs().format('YYYY-MM-DDTHH:mm'));
                    setShowModal(true);
                }}
                className={`relative flex flex-col ${classNameContainer}`}
            >
                {label && <label className="text-xs font-medium !pl-6">{label}</label>}

                <div className="relative flex items-center w-full" onClick={openPicker}>
                    <input
                        type="text"
                        readOnly
                        value={internalValue ? formatDisplay() : ''}
                        placeholder={placeholder}
                        disabled={disabled}
                        style={{ borderRadius: borderRadiusInput, borderColor, color: textColor }}
                        className={`w-full !pr-4 !pl-8 !py-4 border outline-none placeholder-[var(--ion-color-medium)] ${classNameInput}`}
                    />
                    {withCalendar && <LuCalendar
                        className="absolute right-8 text-[24px] text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
                    />}
                </div>
                {errorText && <IonNote className="text-[12px] !pl-6 text-[var(--ion-color-danger)]"> {errorText} </IonNote>}
            </div>

            {pickerMode === "modal" && (
                <IonModal
                    isOpen={showModal}
                    onDidDismiss={() => setShowModal(false)}
                    className="custom-calendar-modal"
                >
                    <div className="!p-4 bg-white !rounded-lg shadow-lg">
                        <IonDatetime
                            locale="pt-BR"
                            value={internalValue}
                            min={resolveDate(dayjs().subtract(10, 'years').startOf('year'), minDate)}
                            max={resolveDate(dayjs().add(50, 'years').endOf('year'), maxDate)}
                            presentation={
                                format === 'month-year' || format === 'MMMM/YYYY'
                                    ? 'month-year'
                                    : format === 'datetime'
                                        ? 'date-time'
                                        : 'date'
                            }
                            onIonChange={(e) => setInternalValue(e.detail.value as string)}
                            showDefaultButtons={false}
                        />
                        <div className="flex justify-end mt-4 gap-2">
                            <IonButton color="medium" onClick={() => setShowModal(false)}>
                                Cancelar
                            </IonButton>
                            <IonButton onClick={handleConfirm}>Confirmar</IonButton>
                        </div>
                    </div>
                </IonModal>

            )}

            {pickerMode === "dropdown" && showModal && (
                <div className="absolute z-50 mt-2 bg-white !rounded-lg shadow-lg !p-3">
                    <IonDatetime
                        locale="pt-BR"
                        value={internalValue}
                        min={resolveDate(dayjs().subtract(10, 'years').startOf('year'), minDate)}
                        max={resolveDate(dayjs().add(50, 'years').endOf('year'), maxDate)}
                        presentation={
                            format === 'month-year' || format === 'MMMM/YYYY'
                                ? 'month-year'
                                : format === 'datetime'
                                    ? 'date-time'
                                    : 'date'
                        }
                        onIonChange={(e) => {
                            setInternalValue(e.detail.value as string);
                            handleConfirm();
                        }}
                        showDefaultButtons={false}
                    />
                </div>
            )}

        </div>
    );
};

export default CBDataPicker;
