export interface ToastOptions {
    message: string;
    type?: "success" | "error" | "warning" | "info";
    duration?: number;
}
/**
 * CBToast
 *
 * Componente de toast customizado baseado em Ionic e Framer Motion.
 * Suporta múltiplos tipos de toast, cores do design system, ícones e fechamento automático.
 *
 * O toast é controlado globalmente via `setCBToastHandler`.
 *
 * @example
 * // Registrar o toast em qualquer lugar do app
 * import { cbToast } from '../hooks/cbToastController';
 * cbToast({ message: "Operação realizada com sucesso", type: "success", duration: 3000 });
 *
 * @component
 */
/**
 * Opções para exibir o CBToast
 *
 * @typedef {Object} ToastOptions
 * @property {string} message - Mensagem a ser exibida no toast.
 * @property {"success" | "error" | "warning" | "info"} [type="info"] - Tipo do toast, determina cor e ícone.
 * @property {number} [duration=3000] - Duração em milissegundos antes do fechamento automático.
 */
declare const CBToast: React.FC;
export default CBToast;
