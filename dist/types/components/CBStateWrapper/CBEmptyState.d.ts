import React from "react";
import type { CBColor } from "../../theme/CBColor";
interface CBEmptyStateProps {
    /** Mostra o EmptyState ou o conteúdo */
    isEmpty?: boolean;
    /** Conteúdo alternativo (mostrado quando isEmpty = false) */
    children?: React.ReactNode;
    /** Lista de mensagens que podem aparecer randomicamente */
    messages?: string[];
    /** Título */
    title?: string;
    /** Ícone */
    icon?: React.ReactNode;
    /** Texto do botão */
    buttonLabel?: string;
    /** Callback do botão */
    onButtonClick?: () => void;
    /** Cor principal */
    color?: CBColor;
    /** Cor de fundo */
    colorBg?: string;
    /** Estilização customizada */
    theme?: {
        container?: React.CSSProperties;
        card?: React.CSSProperties;
        title?: React.CSSProperties;
        message?: React.CSSProperties;
        button?: React.CSSProperties;
    };
}
/**
 * CBEmptyState
 *
 * Um componente reutilizável para exibir estados vazios ("empty states") em listas, páginas
 * ou seções que ainda não possuem conteúdo. Ele pode exibir:
 *
 * - Ícone
 * - Título
 * - Mensagem (ou mensagens aleatórias)
 * - Botão com ação
 * - Tema customizável
 * - Children alternativo quando `isEmpty = false`
 *
 * Também funciona como "wrapper":
 * → Quando `isEmpty = false`, o componente simplesmente renderiza **children** no lugar do estado vazio.
 *
 * @component
 *
 * @example **Exemplo básico**
 * ```tsx
 * <CBEmptyState isEmpty title="Nada encontrado" />
 * ```
 *
 * @example **Com botão**
 * ```tsx
 * <CBEmptyState
 *   title="Sem transações"
 *   buttonLabel="Adicionar"
 *   onButtonClick={() => console.log("clicou")}
 * />
 * ```
 *
 * @example **Com tema customizado**
 * ```tsx
 * <CBEmptyState
 *   isEmpty
 *   title="Lista vazia"
 *   theme={{
 *     card: { backgroundColor: "#222", color: "white" },
 *     button: { backgroundColor: "red" }
 *   }}
 * />
 * ```
 *
 * @example **Renderizando conteúdo quando não está vazio**
 * ```tsx
 * <CBEmptyState isEmpty={false}>
 *   <MyListComponent />
 * </CBEmptyState>
 * ```
 *
 * @param {CBEmptyStateProps} props Propriedades do componente
 */
declare const CBEmptyState: React.FC<CBEmptyStateProps>;
export default CBEmptyState;
