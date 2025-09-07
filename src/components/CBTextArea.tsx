import React, { useState, useEffect } from "react";
import { IonNote, IonTextarea } from "@ionic/react";
import clsx from "clsx";
import { useCBColor } from "../hooks/useCBColor";
import type { CBColor } from "../theme/CBColor";

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
};
/**
 * CBTextArea
 *
 * Componente de textarea customizado baseado no IonTextarea do Ionic.
 * Suporta label, placeholder, cor customizável, estado de erro, limite de caracteres e controle de foco.
 *
 * @template T - Tipo genérico para compatibilidade com props adicionais do IonTextarea
 *
 * @param {Object} props - Propriedades do componente
 * @param {string} [props.label] - Texto do label exibido acima da textarea.
 * @param {string} props.value - Valor atual da textarea.
 * @param {string} [props.placeholder=""] - Texto placeholder exibido quando vazio.
 * @param {number} [props.rows=4] - Número de linhas visíveis da textarea.
 * @param {string} [props.error] - Mensagem de erro a ser exibida abaixo da textarea.
 * @param {boolean} [props.disabled=false] - Desabilita a textarea.
 * @param {CBColor} [props.color="neutral"] - Cor principal da borda quando focada ou preenchida.
 * @param {(val: string) => void} props.onChangeValue - Callback chamado ao alterar o valor da textarea.
 * @param {number} [props.maxLength] - Número máximo de caracteres permitidos.
 * @param {...any} rest - Demais props compatíveis com IonTextarea.
 *
 * @example
 * <CBTextArea
 *   label="Descrição"
 *   value={description}
 *   onChangeValue={setDescription}
 *   placeholder="Digite aqui..."
 *   rows={6}
 *   maxLength={200}
 *   color="primary"
 *   error={descriptionError}
 * />
 *
 * @remarks
 * - Mostra contador de caracteres restantes se `maxLength` for definido.
 * - A borda muda de cor quando o campo está focado, preenchido ou em erro.
 * - Permite desabilitar a textarea com `disabled`.
 */

const CBTextArea: React.FC<CBTextAreaProps> = ({
    label,
    value,
    placeholder = "",
    rows = 4,
    error,
    disabled = false,
    color = "neutral",
    onChangeValue,
    fill = 'outline',
    shape = 'round',
    maxLength,
    ...rest
}) => {
    const { main: mainColor } = useCBColor(color);
    const { main: errorColor } = useCBColor("danger");
    const [focused, setFocused] = useState(false);
    const [filled, setFilled] = useState(false);

    useEffect(() => setFilled(!!value), [value]);

    const borderColor = error
        ? errorColor
        : focused || filled
            ? mainColor
            : "var(--ion-color-medium)";

    const charsLeft = maxLength ? maxLength - value.length : undefined;
    const charsOver = charsLeft !== undefined && charsLeft < 0;
    return (
        <div className="relative flex flex-col" style={{ minHeight: 72 }}>
            {label && <label className="text-xs font-medium !pl-6">{label}</label>}
            <IonTextarea
                value={value}
                placeholder={placeholder}
                rows={rows}
                fill={fill}
                shape={shape === 'round' ? 'round' : undefined}
                disabled={disabled}
                labelPlacement="stacked"
                maxlength={maxLength}
                style={{
                    '--border-color': borderColor,
                    '--highlight-color-focused': mainColor,
                    color: 'var(--ion-color-dark)',
                }}
                className={clsx(
                    "text-sm resize-none focus:outline-none",
                    disabled && "opacity-60 cursor-not-allowed"
                )}
                onIonFocus={() => setFocused(true)}
                onIonBlur={() => setFocused(false)}
                onIonInput={(e) => onChangeValue(e.detail.value ?? "")}
                {...rest}
            />
            <div className="flex justify-between mt-1">
                <IonNote className="text-[12px] !pl-6 text-[var(--ion-color-danger)]">
                    {error && (
                        <span>{error}</span>
                    )}
                </IonNote>
                {maxLength && (
                    <IonNote
                        className={clsx(
                            "text-[12px] !pr-6",
                            charsOver ? "text-[var(--ion-color-danger)]" : "text-gray-500"
                        )}
                    >
                        {charsLeft} caractere{charsLeft === 1 ? "" : "s"} restantes
                    </IonNote>
                )}
            </div>
        </div>
    );
};

export default CBTextArea;