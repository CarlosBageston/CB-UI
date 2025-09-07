import React, { useEffect, useRef, useState } from 'react';
import { IonSelect, IonSelectOption, IonNote, type SelectCustomEvent } from '@ionic/react';
import { CB_COLOR_MAP, type CBColor, type CSSVars } from '../theme/CBColor';
import { useCBColor } from '../hooks/useCBColor';

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


/** Hook para definir interface com base no viewport */
function useResponsiveInterface() {
    const [selectInterface, setSelectInterface] = useState<'action-sheet' | 'popover'>('action-sheet');

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        const update = (e: MediaQueryListEvent | MediaQueryList) => {
            setSelectInterface(e.matches ? 'popover' : 'action-sheet');
        };
        update(mediaQuery);
        mediaQuery.addEventListener('change', update);
        return () => mediaQuery.removeEventListener('change', update);
    }, []);

    return selectInterface;
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

function CBSelect<T>({
    label,
    value,
    items,
    getLabel,
    getValue,
    onValueChange,
    placeholder = 'Selecione...',
    error = false,
    helperText = '',
    disabled = false,
    loading = false,
    color = 'neutral',
    style,
    fill = 'outline',
    shape = 'round',
    ...rest
}: CBSelectProps<T>) {
    const selectRef = useRef<HTMLIonSelectElement>(null);
    const selectInterface = useResponsiveInterface();
    const { main: borderColor } = useCBColor(color);


    const handleChange = (event: SelectCustomEvent<T>) => {
        const selectedValue = event.detail.value;
        const selectedOption = items.find(opt => getValue(opt) === selectedValue);
        if (selectedOption) onValueChange(selectedOption);
    };


    const finalStyle: CSSVars = {
        ...style,
        '--border-color': error ? CB_COLOR_MAP.danger : borderColor,
        '--icon-color': borderColor,
        '--color': 'var(--ion-color-dark)',
        '--placeholder-color': 'var(--ion-color-medium)',
    };

    return (
        <div className="relative flex flex-col" style={{ minHeight: 72 }}>
            {label && <label className="text-xs font-medium !pl-6">{label}</label>}

            <IonSelect
                ref={selectRef}
                interface={selectInterface}
                placeholder={placeholder}
                value={value}
                disabled={disabled || loading}
                onIonChange={handleChange}
                onClick={(ev) => {
                    (ev).persist?.();
                    (rest).interfaceOptions = {
                        ...(rest).interfaceOptions,
                        event: ev.nativeEvent,
                    };
                }}
                interfaceOptions={{
                    header: label,
                }}
                fill={fill}
                shape={shape}
                mode="md"
                labelPlacement="stacked"
                style={finalStyle}
                {...rest}
            >
                {items.map((option, index) => (
                    <IonSelectOption key={index} value={getValue(option)}>
                        {getLabel(option)}
                    </IonSelectOption>
                ))}
            </IonSelect>

            {error && helperText && (
                <IonNote className="text-[12px] !pl-6 text-[var(--ion-color-danger)]">
                    {helperText}
                </IonNote>
            )}
        </div>
    );
}

export default CBSelect;