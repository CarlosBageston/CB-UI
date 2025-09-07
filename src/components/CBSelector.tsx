import React from "react";
import { IonCheckbox, IonRadio, IonRadioGroup, IonToggle } from "@ionic/react";
import type { CBColor } from "../theme/CBColor";
import { useCBColor } from "../hooks/useCBColor";

type CBSelectorProps = {
    label?: string;
    checked: boolean;
    disabled?: boolean;
    type?: "checkbox" | "switch" | "radio";
    onChange: (checked: boolean) => void;
    color?: CBColor;
    styleDiv?: React.CSSProperties;
    labelPlacement?: "start" | "end";
};
/**
 * CBSelector
 *
 * Componente de seleção que pode renderizar como checkbox, switch (toggle) ou radio.
 * Baseado nos componentes do Ionic: IonCheckbox, IonToggle e IonRadio.
 * Suporta cor personalizada, estado desabilitado e label posicionado antes ou depois do controle.
 *
 * @param {Object} props - Propriedades do componente
 * @param {string} [props.label] - Texto exibido junto ao seletor.
 * @param {boolean} props.checked - Indica se o seletor está marcado.
 * @param {boolean} [props.disabled=false] - Desabilita a interação com o seletor.
 * @param {"checkbox" | "switch" | "radio"} [props.type="checkbox"] - Tipo de seletor a ser exibido.
 * @param {(checked: boolean) => void} props.onChange - Callback chamado quando o valor do seletor muda.
 * @param {CBColor} [props.color="primary"] - Cor principal do seletor (bordas, fundo e marcação).
 * @param {React.CSSProperties} [props.styleDiv] - Estilos aplicados ao container do seletor.
 * @param {"start" | "end"} [props.labelPlacement="start"] - Define a posição do label em relação ao controle.
 *
 * @example
 * <CBSelector
 *   type="checkbox"
 *   label="Aceito os termos"
 *   checked={true}
 *   onChange={(val) => console.log(val)}
 *   color="primary"
 * />
 *
 * <CBSelector
 *   type="switch"
 *   label="Ativar notificações"
 *   checked={false}
 *   onChange={(val) => console.log(val)}
 *   color="success"
 * />
 *
 * <CBSelector
 *   type="radio"
 *   label="Opção A"
 *   checked={true}
 *   onChange={(val) => console.log(val)}
 *   color="danger"
 * />
 *
 * @remarks
 * - O componente ajusta automaticamente as cores do fundo, borda e marcação conforme a prop `color`.
 * - O tipo "switch" usa IonToggle, "checkbox" usa IonCheckbox, e "radio" usa IonRadioGroup + IonRadio.
 */

const CBSelector: React.FC<CBSelectorProps> = ({
    label,
    checked,
    disabled = false,
    type = "checkbox",
    onChange,
    color = "primary",
    labelPlacement = "start",
    styleDiv
}) => {
    const { main: mainColor, contrast: contrastColor } = useCBColor(color);

    if (type === "switch") {
        return (
            <div className={`w-auto ${styleDiv}`}>
                <IonToggle
                    checked={checked}
                    disabled={disabled}
                    color={color}
                    labelPlacement={labelPlacement}

                    onIonChange={(e) => onChange(e.detail.checked)}
                    style={{
                        '--background-checked': mainColor, // fundo quando ativo
                        '--handle-background-checked': contrastColor, // cor do "pino" quando ativo
                    }}
                >
                    {label}
                </IonToggle>
            </div>
        );
    }
    if (type === "radio") {
        return (
            <div className={`w-auto ${styleDiv}`}>
                <IonRadioGroup
                    value={checked ? "selected" : "unselected"}
                    onIonChange={(e) => onChange(e.detail.value === "selected")}
                    className="flex items-center gap-2"
                >
                    <IonRadio
                        value="selected"
                        color={color}
                        disabled={disabled}
                        labelPlacement={labelPlacement}
                        className="flex-1"
                        style={{
                            '--background-checked': mainColor,
                            '--border-color': mainColor,
                            '--border-color-checked': mainColor,
                            '--mark-color': contrastColor, // cor do ponto central
                        }}
                    >
                        {label && <span>{label}</span>}
                    </IonRadio>
                </IonRadioGroup>
            </div>
        );
    }
    if (type === "checkbox") {
        return (
            <div className={`w-auto ${styleDiv}`}>
                <IonCheckbox
                    checked={checked}
                    disabled={disabled}
                    color={color}
                    labelPlacement={labelPlacement}
                    onIonChange={(e) => onChange(e.detail.checked)}
                    style={{
                        '--border-color': mainColor,                   // borda normal
                        '--background-checked': mainColor,            // fundo quando marcado
                        '--border-color-checked': mainColor,          // borda quando marcado
                        '--checkmark-color': contrastColor,           // cor do check
                    }}
                >
                    {label && <span className="ml-2">{label}</span>}
                </IonCheckbox>
            </div>
        );
    }
};

export default CBSelector;