import React from "react";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonFooter,
} from "@ionic/react";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";
import { useCBColor } from "../hooks/useCBColor";
import type { CBColorOrString } from "../theme/CBColor";

export type CBPopupSize = "sm" | "md" | "lg" | "xl";

export interface CBPopupProps extends React.ComponentProps<typeof IonModal> {
  /** Define se o popup está visível */
  isOpen: boolean;
  /** Callback acionado ao fechar o popup (botão fechar ou clique no backdrop) */
  onDismiss: () => void;
  /** Título opcional do popup */
  title?: string;
  /** Subtítulo opcional exibido abaixo do título */
  subtitle?: string;
  /** Conteúdo principal do popup */
  children?: React.ReactNode;
  /** Rodapé personalizado do popup (ações, botões, etc.) */
  footer?: React.ReactNode;
  /** Se o botão de fechar (X) deve ser visível no cabeçalho (padrão: true) */
  showCloseButton?: boolean;
  /** Tamanho máximo da largura do popup ('sm' | 'md' | 'lg' | 'xl', padrão: 'md') */
  size?: CBPopupSize;
  /** Cor temática da biblioteca para customizar destaques/header via useCBColor */
  color?: CBColorOrString;
  /** Classes CSS adicionais para o container do modal (IonModal) */
  className?: string;
  /** Classes CSS adicionais para o cabeçalho (IonHeader) */
  headerClassName?: string;
  /** Classes CSS adicionais para o conteúdo interno (IonContent) */
  contentClassName?: string;
  /** Classes CSS adicionais para o rodapé (IonFooter) */
  footerClassName?: string;
}

const sizeClasses: Record<CBPopupSize, string> = {
  sm: "cb-popup-size-sm",
  md: "cb-popup-size-md",
  lg: "cb-popup-size-lg",
  xl: "cb-popup-size-xl",
};

/**
 * CBPopup
 *
 * Componente de popup overlay (modal centralizado tipo card) baseado em Ionic (`IonModal`),
 * integrado ao sistema de temas da biblioteca `@carlosbageston/cb-ui` via `useCBColor`.
 *
 * Exibe conteúdos, formulários ou avisos em uma janela flutuante centralizada na tela,
 * ajustando-se dinamicamente ao conteúdo com rolagem interna no `IonContent` e largura configurável.
 *
 * @component
 *
 * @param {CBPopupProps} props - Propriedades do componente CBPopup
 * @param {boolean} props.isOpen - Define se o popup está visível
 * @param {() => void} props.onDismiss - Função chamada ao fechar o popup
 * @param {string} [props.title] - Título do popup
 * @param {string} [props.subtitle] - Subtítulo exibido abaixo do título
 * @param {React.ReactNode} [props.children] - Conteúdo interno do popup
 * @param {React.ReactNode} [props.footer] - Rodapé com botões de ação
 * @param {boolean} [props.showCloseButton=true] - Exibe botão de fechar (X)
 * @param {'sm' | 'md' | 'lg' | 'xl'} [props.size='md'] - Tamanho do popup
 * @param {CBColorOrString} [props.color] - Cor de destaque do tema via `useCBColor`
 * @param {string} [props.className] - Classes customizadas para IonModal
 * @param {string} [props.headerClassName] - Classes customizadas para IonHeader
 * @param {string} [props.contentClassName] - Classes customizadas para IonContent
 * @param {string} [props.footerClassName] - Classes customizadas para IonFooter
 *
 * @example
 * // Popup simples com confirmação
 * <CBPopup
 *   isOpen={isOpen}
 *   onDismiss={() => setIsOpen(false)}
 *   title="Atenção"
 *   subtitle="Confirmar envio dos dados"
 *   color="warning"
 *   footer={
 *     <div className="flex justify-end gap-2">
 *       <CBButton label="Cancelar" variant="clear" onClick={() => setIsOpen(false)} />
 *       <CBButton label="Confirmar" color="warning" onClick={handleSave} />
 *     </div>
 *   }
 * >
 *   <p>Deseja prosseguir com o salvamento?</p>
 * </CBPopup>
 *
 * @example
 * // Popup de formulário com tamanho customizado
 * <CBPopup
 *   isOpen={isFormOpen}
 *   onDismiss={() => setIsFormOpen(false)}
 *   title="Novo Cadastro"
 *   size="lg"
 *   color="primary"
 * >
 *   <form className="flex flex-col gap-4">
 *     <CBInput label="Nome" value={name} onChange={setName} />
 *   </form>
 * </CBPopup>
 */
const CBPopup: React.FC<CBPopupProps> = ({
  isOpen,
  onDismiss,
  title,
  subtitle,
  children,
  footer,
  showCloseButton = true,
  size = "md",
  color,
  className,
  headerClassName,
  contentClassName,
  footerClassName,
  ...props
}) => {
  const { main } = useCBColor(color ?? "primary");

  return (
    <IonModal
      isOpen={isOpen}
      onDidDismiss={(e) => {
        onDismiss();
        props.onDidDismiss?.(e);
      }}
      className={clsx("cb-popup-modal", sizeClasses[size], className)}
      {...props}
    >
      {(title || subtitle || showCloseButton || color) && (
        <IonHeader className={clsx("ion-no-border relative", headerClassName)}>
          {color && (
            <div
              className="h-1.5 w-full shrink-0"
              style={{ backgroundColor: main }}
            />
          )}
          <IonToolbar
            style={
              {
                "--background": "transparent",
                "--color": "var(--cb-text-primary, inherit)",
              } as React.CSSProperties
            }
          >
            <div className="flex items-start justify-between w-full py-2.5 px-4">
              <div className="flex flex-col flex-1 min-w-0 pr-3">
                {title && (
                  <IonTitle className="text-lg font-bold text-gray-900 dark:text-gray-100 p-0 ion-no-padding tracking-tight">
                    {title}
                  </IonTitle>
                )}
                {subtitle && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                    {subtitle}
                  </p>
                )}
              </div>
              {showCloseButton && (
                <IonButtons slot="end" className="shrink-0 -mr-1">
                  <IonButton
                    onClick={onDismiss}
                    aria-label="Fechar"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors m-0"
                  >
                    <IoClose size={22} />
                  </IonButton>
                </IonButtons>
              )}
            </div>
          </IonToolbar>
        </IonHeader>
      )}

      <IonContent
        style={
          {
            "--padding-start": "1.25rem",
            "--padding-end": "1.25rem",
            "--padding-top": "1rem",
            "--padding-bottom": "1rem",
            "--background": "transparent",
          } as React.CSSProperties
        }
        className={clsx(
          "text-gray-700 dark:text-gray-200 text-sm custom-scroll",
          contentClassName,
        )}
      >
        {children}
      </IonContent>

      {footer && (
        <IonFooter
          className={clsx(
            "border-t border-gray-100 dark:border-gray-800 p-4 bg-gray-50/50 dark:bg-gray-900/50",
            footerClassName,
          )}
        >
          {footer}
        </IonFooter>
      )}
    </IonModal>
  );
};

export default CBPopup;
