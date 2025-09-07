import 'dayjs/locale/pt-br';
import type { CBColor } from '../theme/CBColor';
import React from 'react';
import type { Timestamp } from 'firebase/firestore';
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
declare const CBDataPicker: React.FC<CBDataPickerProps>;
export default CBDataPicker;
