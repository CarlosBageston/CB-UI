import React from "react";
import { IonModal } from "@ionic/react";
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
declare const CBPopup: React.FC<CBPopupProps>;
export default CBPopup;
