export type ToastType = "success" | "error" | "warning" | "info";
export type ToastPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right" | "center";
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
declare const CBToast: React.FC<CBToastProps>;
export default CBToast;
