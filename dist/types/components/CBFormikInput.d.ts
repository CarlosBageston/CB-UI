import type { CBFormikInputProps } from "../types/componentsFormikInput";
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
export declare function CBFormikInput({ name, valueSource, transformValue, onChange, onRawChange, onBlur, ...props }: CBFormikInputProps): import("react").JSX.Element;
export default CBFormikInput;
