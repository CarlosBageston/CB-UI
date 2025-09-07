import { useEffect } from "react";
import { IonText } from "@ionic/react";
import { AnimatePresence, motion } from "framer-motion";
import { MdCheckCircle, MdError, MdWarning, MdInfo, MdClose } from "react-icons/md";
import { useCBColor } from "../hooks/useCBColor";

// Tipos
type ToastType = "success" | "error" | "warning" | "info";

export interface ToastOptions {
    message: string;
    type?: "success" | "error" | "warning" | "info";
    duration?: number;
}


interface CBToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    show?: boolean;
    onClose?: () => void;
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

const CBToast: React.FC<CBToastProps> = ({ message, type = "info", duration = 3000, show, onClose }) => {

    // Cores do design system
    const { main: successBg, contrast: successColor } = useCBColor("success");
    const { main: errorBg, contrast: errorColor } = useCBColor("danger");
    const { main: warningBg, contrast: warningColor } = useCBColor("warning");
    const { main: infoBg, contrast: infoColor } = useCBColor("info");

    const colorMap = {
        success: { bg: successBg, color: successColor, icon: <MdCheckCircle size={20} /> },
        error: { bg: errorBg, color: errorColor, icon: <MdError size={20} /> },
        warning: { bg: warningBg, color: warningColor, icon: <MdWarning size={20} /> },
        info: { bg: infoBg, color: infoColor, icon: <MdInfo size={20} /> },
    };

    const { bg, color, icon } = colorMap[type];

    // Auto close
    useEffect(() => {
        if (show && duration) {
            const timer = setTimeout(() => onClose?.(), duration);
            return () => clearTimeout(timer);
        }
    }, [show, duration]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-4 w-[95vw] max-w-[400px] !rounded-lg !p-4 flex items-center shadow-lg z-[9999]"
                    style={{ backgroundColor: bg, color }}
                >
                    <div className="flex items-center gap-2 flex-1">
                        {icon}
                        <IonText className="text-[14px] font-medium">{message}</IonText>
                    </div>
                    <button
                        onClick={() => onClose?.()}
                        style={{
                            marginLeft: 12,
                            padding: 6,
                            borderRadius: "50%",
                        }}
                    >
                        <MdClose size={18} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default CBToast;
