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
}
