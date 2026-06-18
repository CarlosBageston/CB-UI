import type { CBInputProps } from "../types/components";
/**
 * Campo de entrada baseado no IonInput com recursos adicionais do CBUI.
 *
 * Funcionalidades:
 * - Suporte a máscaras nativas (`tel`, `cep`, `currency`)
 * - Exibição de erro integrada
 * - Controle de cores através do sistema de temas CBUI
 * - Alternância de visibilidade para senhas
 * - Personalização de bordas e radius
 *
 * Máscaras:
 *
 * `tel`
 * ```txt
 * Entrada: 41999998888
 * Exibição: (41) 99999-8888
 * Raw: 41999998888
 * ```
 *
 * `cep`
 * ```txt
 * Entrada: 84000000
 * Exibição: 84000-000
 * Raw: 84000000
 * ```
 *
 * `currency`
 * ```txt
 * Entrada: 123456
 * Exibição: R$ 1.234,56
 * Raw: 1234.56
 * ```
 *
 * Eventos:
 *
 * ```tsx
 * <CBInput
 *   mask="tel"
 *   value={telefone}
 *   onChange={(formatted) => {
 *     console.log(formatted);
 *     // (41) 99999-8888
 *   }}
 *   onRawChange={(raw) => {
 *     console.log(raw);
 *     // 41999998888
 *   }}
 * />
 * ```
 *
 * `onChange` retorna o valor formatado exibido ao usuário.
 *
 * `onRawChange` retorna o valor bruto sem formatação,
 * ideal para persistência, validações e integrações com APIs.
 */
declare const CBInput: React.FC<CBInputProps>;
export default CBInput;
