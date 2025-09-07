import React from "react";
import { IonTextarea } from "@ionic/react";
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
}
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
declare const CBTextArea: React.FC<CBTextAreaProps>;
export default CBTextArea;
