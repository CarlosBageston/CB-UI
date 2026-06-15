import { useEffect } from "react";
import { IonText } from "@ionic/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MdCheckCircle,
  MdError,
  MdWarning,
  MdInfo,
  MdClose,
} from "react-icons/md";
import { useCBColor } from "../hooks/useCBColor";

// Tipos
export type ToastType = "success" | "error" | "warning" | "info";
export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "center";

export interface ToastOptions {
  message: string;
  type?: ToastType;
  duration?: number;
  position?: ToastPosition;
}

interface CBToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  show?: boolean;
  onClose?: () => void;
  className?: string;
  position?: ToastPosition;
}

/**
 * CBToast
 *
 * Componente de toast customizado baseado em Ionic e Framer Motion.
 * Suporta múltiplos tipos de toast, cores do design system, ícones, fechamento automático e posicionamento flexível.
 *
 * O toast é controlado globalmente via `setCBToastHandler`.
 *
 * @example
 * // Registrar o toast em qualquer lugar do app
 * import { cbToast } from '../hooks/cbToastController';
 * cbToast({ message: "Operação realizada com sucesso", type: "success", duration: 3000, position: "top-right" });
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
 * @property {ToastPosition} [position="bottom-center"] - Posição do toast na tela.
 */

const positionClasses: Record<ToastPosition, string> = {
  "top-left": "top-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0",
  "bottom-left": "bottom-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0",
  "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

const getAnimationProps = (position: ToastPosition) => {
  if (position === "center") {
    return {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
    };
  }
  const isTop = position.startsWith("top");
  const yOffset = isTop ? -50 : 50;
  return {
    initial: { opacity: 0, y: yOffset },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: yOffset },
  };
};

const CBToast: React.FC<CBToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  show,
  onClose,
  className,
  position = "bottom-center",
}) => {
  // Cores do design system
  const { main: successBg, contrast: successColor } = useCBColor("success");
  const { main: errorBg, contrast: errorColor } = useCBColor("danger");
  const { main: warningBg, contrast: warningColor } = useCBColor("warning");
  const { main: infoBg, contrast: infoColor } = useCBColor("info");

  const colorMap = {
    success: {
      bg: successBg,
      color: successColor,
      icon: <MdCheckCircle size={20} />,
    },
    error: { bg: errorBg, color: errorColor, icon: <MdError size={20} /> },
    warning: {
      bg: warningBg,
      color: warningColor,
      icon: <MdWarning size={20} />,
    },
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

  const animationProps = getAnimationProps(position);

  return (
    <AnimatePresence>
      {show && (
        <div className={`fixed z-9999 pointer-events-none w-[95vw] max-w-[360px] ${positionClasses[position]}`}>
          <motion.div
            {...animationProps}
            transition={{ duration: 0.3 }}
            className={`pointer-events-auto w-full rounded-lg! p-4! flex items-center shadow-lg ${className}`}
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
        </div>
      )}
    </AnimatePresence>
  );
};

export default CBToast;
