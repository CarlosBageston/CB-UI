import React from "react";
import type { CBColorOrString } from "../../theme/CBColor";
type CBRadioOption = {
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
};
type CBRadioGroupProps = {
    value: string;
    options: CBRadioOption[];
    onChange: (value: string) => void;
    color?: CBColorOrString;
    direction?: "row" | "column";
    labelPlacement?: "start" | "end";
    className?: string;
    style?: React.CSSProperties;
};
/**
 * CBRadioGroup
 *
 * Componente de grupo de seleção única baseado no IonRadioGroup do Ionic.
 * Renderiza uma lista de opções utilizando o componente CBRadio internamente.
 *
 * Permite configurar:
 * - Valor selecionado atualmente
 * - Lista de opções disponíveis
 * - Direção do layout (horizontal ou vertical)
 * - Posicionamento do label
 * - Cor personalizada através do sistema de cores da biblioteca
 * - Opções desabilitadas individualmente
 *
 * @example
 *
 * <CBRadioGroup
 *   value="PF"
 *   options={[
 *     {
 *       label: "Pessoa Física",
 *       value: "PF",
 *     },
 *     {
 *       label: "Pessoa Jurídica",
 *       value: "PJ",
 *     },
 *   ]}
 *   onChange={(value) => console.log(value)}
 * />
 *
 *
 * @example
 * Layout horizontal:
 *
 * <CBRadioGroup
 *   value="pix"
 *   direction="row"
 *   options={[
 *     {
 *       label: "Pix",
 *       value: "pix",
 *     },
 *     {
 *       label: "Cartão",
 *       value: "card",
 *     },
 *   ]}
 *   onChange={(value) => console.log(value)}
 * />
 *
 *
 * @remarks
 * - Apenas uma opção pode estar selecionada por vez.
 * - O estado selecionado deve ser controlado pelo componente pai através da propriedade `value`.
 * - O callback `onChange` retorna o valor (`value`) da opção selecionada.
 * - Cada opção pode ser desabilitada individualmente usando `disabled`.
 * - O componente encapsula o CBRadio, evitando a necessidade de controlar cada item manualmente.
 *
 *
 * @param {Object} props - Propriedades do componente.
 *
 * @param {string} props.value
 * Valor atualmente selecionado.
 *
 * @param {CBRadioOption[]} props.options
 * Lista de opções disponíveis no grupo.
 *
 * Cada opção possui:
 *
 * - `label`: Texto ou elemento React exibido ao lado do radio.
 * - `value`: Valor retornado no evento de alteração.
 * - `disabled`: Desabilita somente aquela opção.
 *
 *
 * @param {(value:string)=>void} props.onChange
 * Função chamada quando uma opção é selecionada.
 *
 *
 * @param {CBColorOrString} [props.color="primary"]
 * Define a cor dos radios utilizando o sistema de cores da biblioteca.
 *
 *
 * @param {"row"|"column"} [props.direction="column"]
 * Define a direção do layout:
 *
 * - `column`: opções empilhadas verticalmente.
 * - `row`: opções lado a lado.
 *
 *
 * @param {"start"|"end"} [props.labelPlacement="end"]
 * Define a posição do texto em relação ao radio:
 *
 * - `start`: label antes do controle.
 * - `end`: label depois do controle.
 *
 *
 * @param {string} [props.className]
 * Classes CSS adicionais aplicadas ao container.
 *
 *
 * @param {React.CSSProperties} [props.style]
 * Estilos inline aplicados ao container.
 */
declare const CBRadioGroup: React.FC<CBRadioGroupProps>;
export default CBRadioGroup;
