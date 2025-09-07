import React from "react";
import {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonFooter
} from "@ionic/react";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";

export interface CBModalProps {
    isOpen: boolean;
    onDismiss: () => void;
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    showCloseButton?: boolean;
    className?: string;
    headerClassName?: string;
    contentClassName?: string;
    footerClassName?: string;
}

/**
 * CBModal
 *
 * Componente modal baseado em Ionic, com suporte a título, subtítulo, botão de fechar, conteúdo e footer customizáveis.
 *
 * @component
 *
 * @param {Object} props - Propriedades do componente
 * @param {boolean} props.isOpen - Define se o modal está aberto
 * @param {() => void} props.onDismiss - Função chamada quando o modal é fechado
 * @param {string} [props.title] - Título do modal (opcional)
 * @param {string} [props.subtitle] - Subtítulo do modal (opcional)
 * @param {React.ReactNode} [props.children] - Conteúdo do modal
 * @param {React.ReactNode} [props.footer] - Conteúdo do rodapé (footer) do modal
 * @param {boolean} [props.showCloseButton=true] - Exibe botão de fechar no header
 * @param {string} [props.className] - Classes adicionais para o modal
 * @param {string} [props.headerClassName] - Classes adicionais para o header
 * @param {string} [props.contentClassName] - Classes adicionais para o conteúdo (IonContent)
 * @param {string} [props.footerClassName] - Classes adicionais para o footer
 *
 * @example
 * // Modal simples com título e conteúdo
 * <CBModal
 *    isOpen={isOpen}
 *    onDismiss={closeModal}
 *    title="Meu Modal"
 * >
 *    <p>Conteúdo do modal aqui</p>
 * </CBModal>
 *
 * @example
 * // Modal com subtítulo, footer customizado e sem botão de fechar
 * <CBModal
 *    isOpen={isOpen}
 *    onDismiss={closeModal}
 *    title="Meu Modal"
 *    subtitle="Subtítulo opcional"
 *    showCloseButton={false}
 *    footer={<div>Botões personalizados</div>}
 * >
 *    <p>Conteúdo do modal aqui</p>
 * </CBModal>
 *
 * @remarks
 * O modal usa classes utilitárias do Tailwind e suporte a tema dark/light.
 * Pode ser totalmente estilizado através das props `className`, `headerClassName`, `contentClassName` e `footerClassName`.
 */
const CBModal: React.FC<CBModalProps> = ({
    isOpen,
    onDismiss,
    title,
    subtitle,
    children,
    footer,
    showCloseButton = true,
    className,
    headerClassName,
    contentClassName,
    footerClassName
}) => {
    return (
        <IonModal
            isOpen={isOpen}
            onDidDismiss={onDismiss}
            className={clsx("rounded-lg overflow-hidden modal-height-full", className)}
        >
            {(title || subtitle || showCloseButton) && (
                <IonHeader className={clsx("ion-no-border", headerClassName)}>
                    <IonToolbar>
                        <div className="flex flex-col items-center text-center w-full">
                            <div className="w-full flex justify-end">
                                {showCloseButton && (
                                    <IonButtons slot="end">
                                        <IonButton onClick={onDismiss}>
                                            <IoClose size={20} />
                                        </IonButton>
                                    </IonButtons>
                                )}
                            </div>
                            <div className="flex flex-col">
                                {title && <IonTitle className="text-lg font-semibold">{title}</IonTitle>}
                                {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
                            </div>
                        </div>
                    </IonToolbar>
                </IonHeader>
            )}

            <IonContent
                style={{
                    '--padding-start': '1rem',
                    '--padding-end': '1rem',
                    '--padding-top': '1rem',
                    '--padding-bottom': '1rem',
                }}
                className={clsx("!p-4 text-gray-700 dark:text-gray-200", contentClassName)}>
                {children}
            </IonContent>

            {footer && (
                <IonFooter className={clsx("border-t border-gray-200 dark:border-gray-700 !p-4", footerClassName)}>
                    {footer}
                </IonFooter>
            )}
        </IonModal>
    );
};

export default CBModal;