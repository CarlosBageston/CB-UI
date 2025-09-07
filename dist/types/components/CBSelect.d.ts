import React from 'react';
import { IonSelect } from '@ionic/react';
import { type CBColor } from '../theme/CBColor';
export interface CBSelectProps<T> extends Omit<React.ComponentProps<typeof IonSelect>, 'value' | 'onIonChange'> {
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
/**
 * CBSelect
 *
 * Componente de seleção baseado no `IonSelect` do Ionic, com suporte a tipagem genérica,
 * exibição responsiva (popover em desktop e action-sheet em mobile), cores personalizadas,
 * estado de erro e helper text.
 *
 * @template T - Tipo dos itens do select
 *
 * @param {Object} props - Propriedades do componente
 * @param {string} [props.label] - Texto do label exibido acima do select.
 * @param {T | string | number} props.value - Valor atual selecionado.
 * @param {T[]} props.items - Lista de itens disponíveis para seleção.
 * @param {(option: T) => string} props.getLabel - Função que retorna o texto exibido de cada item.
 * @param {(option: T) => string | number} props.getValue - Função que retorna o valor único de cada item.
 * @param {(value: T) => void} props.onValueChange - Callback chamado ao selecionar um item.
 * @param {string} [props.placeholder='Selecione...'] - Texto exibido quando nenhum item está selecionado.
 * @param {boolean} [props.error=false] - Indica se o campo está em estado de erro.
 * @param {string} [props.helperText=''] - Texto de ajuda ou erro exibido abaixo do select.
 * @param {boolean} [props.disabled=false] - Desabilita a seleção.
 * @param {boolean} [props.loading=false] - Indica se o select está em estado de loading.
 * @param {CBColor} [props.color='neutral'] - Cor principal do select, usada em borda e ícone.
 * @param {React.CSSProperties} [props.style] - Estilos inline adicionais.
 * @param {"outline" | "solid"} [props.fill='outline'] - Tipo de preenchimento do select.
 * @param {"round" | "default"} [props.shape='round'] - Formato do select.
 *
 * @example
 * type Option = { id: number; name: string };
 * const options: Option[] = [
 *   { id: 1, name: "Opção 1" },
 *   { id: 2, name: "Opção 2" }
 * ];
 *
 * <CBSelect
 *   label="Escolha uma opção"
 *   items={options}
 *   value={options[0]}
 *   getLabel={(opt) => opt.name}
 *   getValue={(opt) => opt.id}
 *   onValueChange={(opt) => console.log(opt)}
 * />
 *
 * @remarks
 * - Em telas >= 768px, o select utiliza popover; em telas menores, action-sheet.
 * - Suporta estado de erro e exibe helperText quando `error` é true.
 * - Suporta cores personalizadas através da prop `color` usando o mapa `CB_COLOR_MAP`.
 */
declare function CBSelect<T>({ label, value, items, getLabel, getValue, onValueChange, placeholder, error, helperText, disabled, loading, color, style, fill, shape, ...rest }: CBSelectProps<T>): import("react/jsx-runtime").JSX.Element;
export default CBSelect;
