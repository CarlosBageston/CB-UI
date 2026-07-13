import CBInput from "./CBInput";
import { useCallback, useMemo } from "react";
import { useField, useFormikContext } from "formik";
import type { CBFormikInputProps } from "../types/componentsFormikInput";
import { resolveMask } from "../hooks/useInputMask";

/**
 * Campo integrado ao Formik baseado no CBInput.
 *
 * O `CBFormikInput` elimina a necessidade de conectar manualmente
 * `value`, `error`, `touched`, `setFieldValue` e `setTouched`
 * para cada campo do formulário.
 *
 * Requisitos:
 * - Deve estar dentro de um `<CBForm />` ou `<FormikProvider />`
 * - O `name` deve corresponder ao campo existente no Formik
 *
 * Funcionalidades:
 * - Integração automática com Formik
 * - Exibição automática de erros
 * - Controle automático de touched
 * - Suporte a máscaras do CBInput
 * - Suporte a valores formatados ou brutos
 * - Transformação de valores antes de salvar no Formik
 *
 * Exemplo básico:
 *
 * ```tsx
 * const formik = useFormik({
 *   initialValues: {
 *     email: "",
 *   },
 *   onSubmit: console.log,
 * });
 *
 * <CBForm value={formik}>
 *   <CBFormikInput
 *     name="email"
 *     label="E-mail"
 *   />
 * </CBForm>
 * ```
 *
 * Máscaras:
 *
 * ```tsx
 * <CBFormikInput
 *   name="phone"
 *   label="Telefone"
 *   mask="tel"
 * />
 * ```
 *
 * Salvando valor bruto:
 *
 * ```tsx
 * <CBFormikInput
 *   name="phone"
 *   label="Telefone"
 *   mask="tel"
 *   valueSource="raw"
 * />
 * ```
 *
 * Resultado salvo:
 *
 * ```txt
 * 41999998888
 * ```
 *
 * Salvando valor formatado:
 *
 * ```tsx
 * <CBFormikInput
 *   name="phone"
 *   label="Telefone"
 *   mask="tel"
 *   valueSource="formatted"
 * />
 * ```
 *
 * Resultado salvo:
 *
 * ```txt
 * (41) 99999-8888
 * ```
 *
 * Transformando valores:
 *
 * ```tsx
 * <CBFormikInput
 *   name="price"
 *   label="Preço"
 *   mask="currency"
 *   valueSource="raw"
 *   transformValue={(value) => Number(value)}
 * />
 * ```
 *
 * Resultado salvo:
 *
 * ```ts
 * 1234.56 // number
 * ```
 *
 * Outro exemplo:
 *
 * ```tsx
 * <CBFormikInput
 *   name="quantity"
 *   type="number"
 *   transformValue={(value) => Number(value)}
 * />
 * ```
 *
 * Sem transformValue:
 *
 * ```ts
 * "10" // string
 * ```
 *
 * Com transformValue:
 *
 * ```ts
 * 10 // number
 * ```
 *
 * Callbacks adicionais:
 *
 * ```tsx
 * <CBFormikInput
 *   name="email"
 *   onChange={(value) => {
 *     console.log(value);
 *   }}
 *   onBlur={() => {
 *     console.log("campo perdeu foco");
 *   }}
 * />
 * ```
 *
 * Observação:
 *
 * Os callbacks não substituem o comportamento do Formik.
 * Eles são executados após a atualização interna do campo.
 */
function CBFormikInput({
  name,
  valueSource = "formatted",
  transformValue,
  onChange,
  onRawChange,
  onBlur,
  textColor,
  ...props
}: CBFormikInputProps) {
  const formikContext = useFormikContext();

  if (!formikContext) {
    throw new Error(
      `
      [CBUI] CBFormikInput precisa estar dentro de um <CBForm>.

      Exemplo:

      const formik = useFormik({...});

      <CBForm formik={formik}>
        <CBFormikInput name="email" />
      </CBForm>
      `,
    );
  }

  const [field, meta, helpers] = useField(name);

  const saveValue = useCallback(
    (value: string) => {
      helpers.setValue(transformValue ? transformValue(value) : value);
    },
    [helpers, transformValue],
  );

  const handleChange = useCallback(
    (value: string) => {
      if (valueSource === "formatted") {
        saveValue(value);
      }

      onChange?.(value);
    },
    [valueSource, saveValue, onChange],
  );

  const handleRawChange = useCallback(
    (raw: string) => {
      if (valueSource === "raw") {
        saveValue(raw);
      }

      onRawChange?.(raw);
    },
    [valueSource, saveValue, onRawChange],
  );

  const handleBlur = useCallback(() => {
    helpers.setTouched(true);

    onBlur?.();
  }, [helpers, onBlur]);
  const displayValue = useMemo(() => {
    if (field.value === null || field.value === undefined) {
      return "";
    }

    if (props.mask === "currency" && valueSource === "raw") {
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(field.value));
    }
    if (valueSource === "raw" && props.mask) {
      const maskFn = resolveMask(props.mask);
      if (maskFn) return maskFn(String(field.value)).formatted;
    }

    return String(field.value);
  }, [field.value, props.mask, valueSource]);

  return (
    <CBInput
      {...props}
      name={name}
      value={displayValue}
      onChange={handleChange}
      onRawChange={handleRawChange}
      onBlur={handleBlur}
      error={meta.touched ? meta.error : undefined}
      textColor={textColor}
    />
  );
}

export default CBFormikInput;
