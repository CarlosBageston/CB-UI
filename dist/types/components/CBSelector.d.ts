import React from "react";
import type { CBColor } from "../theme/CBColor";
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
declare const CBSelector: React.FC<CBSelectorProps>;
export default CBSelector;
