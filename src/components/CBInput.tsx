import type { IonInputCustomEvent } from '@ionic/core';
import { IonGrid, IonInput, IonNote } from '@ionic/react';
import { useState, useEffect } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useCBColor } from '../hooks/useCBColor';
import type { CBColor } from '../theme/CBColor';

/**
 * Tipos de máscara suportados pelo CBInput
 */
export type CBInputMask = 'tel' | 'cep' | 'currency';


/**
 * Props do CBInput
 */
export interface CBInputProps extends React.ComponentProps<typeof IonInput> {
    label: string;
    value: string | number;
    error?: string;
    mask?: CBInputMask;
    maxLength?: number;
    onChangeValue: (val: string) => void;
    handleBlur?: (e: IonInputCustomEvent<FocusEvent>) => void;
    color?: CBColor
}


/**
 * Máscaras de entrada
 */
const masks = {
    tel: (value: string) => {
        const digits = value.replace(/\D/g, '').slice(0, 11);
        if (!digits) return '';
        let formatted = '(' + digits.substring(0, 2) + ') ';
        formatted += digits.length > 6
            ? digits.substring(2, 7) + '-' + digits.substring(7)
            : digits.substring(2);
        return formatted;
    },
    cep: (value: string) => {
        const digits = value.replace(/\D/g, '').slice(0, 8);
        return digits.length > 5 ? digits.substring(0, 5) + '-' + digits.substring(5) : digits;
    },
    currency: (value: string) => {
        const inputText = value.replace(/\D/g, "");
        const numericValue = parseFloat(inputText) / 100;
        if (isNaN(numericValue)) return '';
        return Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(numericValue);
    },
};

/**
 * Componente CBInput
 * Input customizado baseado no IonInput, com suporte a:
 * - Máscaras (telefone, CEP, moeda)
 * - Toggle de visibilidade para senha
 * - Indicação de erro e cores dinâmicas
 */
const CBInput: React.FC<CBInputProps> = ({
    label,
    value,
    name,
    type = 'text',
    placeholder = '',
    className = '',
    error,
    maxLength,
    mask,
    disabled,
    onChangeValue,
    handleBlur,
    fill = 'outline',
    shape = 'round',
    color = 'neutral',
    ...rest
}) => {
    const [focused, setFocused] = useState(false);
    const [filled, setFilled] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { main: mainColor } = useCBColor(color);          // cor principal
    const { main: errorColorVar } = useCBColor('danger');   // cor de erro

    useEffect(() => setFilled(!!value), [value]);

    function getInputHandlers(mask?: CBInputMask) {
        if (mask && masks[mask]) {
            return {
                onIonInput: (e: CustomEvent) => {
                    const raw = (e.target as HTMLInputElement).value;
                    onChangeValue(masks[mask](raw));
                },
            };
        } else {
            return {
                onIonChange: (e: CustomEvent) => {
                    onChangeValue(e.detail.value ?? '');
                },
            };
        }
    }


    const borderColor = error
        ? errorColorVar
        : focused || filled
            ? mainColor
            : 'var(--ion-color-medium)';

    return (
        <div className={`relative flex flex-col h-[72px] !pt-2 ${className}`}>
            <IonInput
                type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                value={value}
                label={label}
                placeholder={placeholder}
                fill={fill}
                shape={shape === 'round' ? 'round' : undefined}
                labelPlacement="stacked"
                maxlength={maxLength}
                disabled={disabled}
                style={{
                    '--border-color': borderColor,
                    '--highlight-color-focused': mainColor,
                    color: 'var(--ion-color-dark)',
                }}
                onKeyDown={(e) => {
                    if (mask) {
                        // Permite apenas números, backspace, delete, setas
                        if (!/[0-9]|Backspace|Delete|ArrowLeft|ArrowRight/.test(e.key)) {
                            e.preventDefault();
                        }
                    }
                }}
                {...getInputHandlers(mask)}
                onIonBlur={() => {
                    setFocused(false);
                    if (handleBlur && name) handleBlur({ target: { name, value } } as IonInputCustomEvent<FocusEvent>);
                }}
                onIonFocus={() => setFocused(true)}
                {...rest}
            />

            {type === 'password' && (
                <IonGrid
                    className="absolute top-4 right-4 z-10 cursor-pointer p-1"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword
                        ? <IoEye className="text-2xl text-[var(--ion-color-text)]" />
                        : <IoEyeOff className="text-2xl text-[var(--ion-color-text)]" />
                    }
                </IonGrid>
            )}

            {error && (
                <IonNote className="text-[12px] !pl-6 text-[var(--ion-color-danger)]">
                    {error}
                </IonNote>
            )}
        </div>
    );
};

export default CBInput;