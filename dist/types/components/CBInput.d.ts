import type { IonInputCustomEvent } from '@ionic/core';
import { IonInput } from '@ionic/react';
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
    color?: CBColor;
}
/**
 * Componente CBInput
 * Input customizado baseado no IonInput, com suporte a:
 * - Máscaras (telefone, CEP, moeda)
 * - Toggle de visibilidade para senha
 * - Indicação de erro e cores dinâmicas
 */
declare const CBInput: React.FC<CBInputProps>;
export default CBInput;
