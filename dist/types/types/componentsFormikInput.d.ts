import type { CBInputProps } from "./components";
export interface CBFormikInputProps extends Omit<CBInputProps, "value" | "error" | "onChange"> {
    /**
     * Nome do campo no Formik.
     */
    name: string;
    /**
     * Define qual valor será salvo no Formik.
     *
     * formatted:
     * "(41) 99999-9999"
     * "R$ 1.234,56"
     *
     * raw:
     * "41999999999"
     * "1234.56"
     */
    valueSource?: "formatted" | "raw";
    /**
     * Permite transformar o valor antes de salvar.
     *
     * Ex:
     * formatted: "R$ 1.234,56"
     * raw: "1234.56"
     *
     * <CBFormikInput
     *  name="salary"
     *  mask="currency"
     *  valueSource="raw"
     *  transformValue={(value) => Number(value)}
     * />
     *
     *  transformValue sem = "1234.56"
     *  transformValue com = 1234.56
     */
    transformValue?: (value: string) => any;
    /**
     * Callback adicional ao alterar o valor formatado.
     */
    onChange?: (value: string) => void;
    /**
     * Callback adicional ao alterar o valor bruto.
     */
    onRawChange?: (value: string) => void;
    /**
     * Callback adicional ao perder foco.
     */
    onBlur?: () => void;
    /**
     * Disparado ao clicar no campo.
     */
    onClick?: () => void;
    /**
     * Disparado ao pressionar uma tecla no campo.
     */
    onKeyDown?: (event: KeyboardEvent) => void;
    /**
     * Atalho: executado quando o usuário pressiona Enter no campo.
     *
     * Equivalente a usar `onKeyDown` e filtrar `event.key === 'Enter'`,
     * mas sem precisar lidar com o evento diretamente.
     *
     * ```tsx
     * <CBFormikInput
     *   name="search"
     *   label="Busca"
     *   onEnterPress={() => handleSearch()}
     * />
     * ```
     */
    onEnterPress?: () => void;
}
