import React, { type JSX } from "react";
interface CBStateWrapperProps<T> {
    /** Exibir estado de loading */
    isLoading?: boolean;
    /** Exibir estado de vazio */
    isEmpty?: boolean;
    /** Mensagem de erro */
    error?: string | null;
    /** Título do Empty State */
    emptyTitle?: string;
    /** Lista de mensagens do Empty State */
    emptyMessages?: string[];
    /** Ícone customizado do Empty State */
    emptyIcon?: React.ReactNode;
    /** Callback para tentar novamente */
    onRetry?: () => void;
    /** Conteúdo real */
    children?: React.ReactNode;
    /** Altura mínima */
    minHeight?: string | number;
    /** Texto da mensagem de loading */
    loadingLabel?: string;
    /** Estilização global por theme */
    theme?: {
        container?: React.CSSProperties;
        loading?: React.CSSProperties;
        loadingLabel?: React.CSSProperties;
        error?: React.CSSProperties;
        errorTitle?: React.CSSProperties;
        errorMessage?: React.CSSProperties;
        retryButton?: React.CSSProperties;
        content?: React.CSSProperties;
    };
    data?: T[] | null;
}
/**
 * CBStateWrapper
 *
 * Componente responsável por gerenciar automaticamente os principais estados
 * de uma tela: **loading**, **erro**, **vazio** e **conteúdo real**.
 *
 * Ele também suporta:
 * - Tema visual customizável (via `theme`)
 * - Mensagem de carregamento customizada
 * - Ícone e mensagens personalizadas para o estado vazio
 * - Botão de retry quando há erro ou vazio
 *
 * ## Estados Prioritários
 * A ordem de exibição segue esta prioridade:
 * 1. **Loading**
 * 2. **Erro**
 * 3. **Empty**
 * 4. **Content**
 *
 * Isso garante que apenas um estado esteja visível por vez.
 *
 * @component
 *
 * @param {object} props
 * @param {boolean} [props.isLoading=false] Indica se o estado de carregamento deve ser exibido.
 * @param {boolean} [props.isEmpty=false] Indica se o estado vazio deve ser exibido.
 *
 * @param {string|null} [props.error=null] Mensagem de erro que ativa o estado de erro.
 *
 * @param {string} [props.emptyTitle="Nada encontrado"] Título do componente de Empty State.
 * @param {string[]} [props.emptyMessages] Lista opcional de mensagens detalhadas para o empty.
 * @param {React.ReactNode} [props.emptyIcon] Ícone customizado exibido no empty state.
 *
 * @param {() => void} [props.onRetry] Callback executado ao clicar no botão de retry ou "Adicionar".
 *
 * @param {React.ReactNode} [props.children] Conteúdo real exibido quando nenhum outro estado está ativo.
 *
 * @param {string|number} [props.minHeight="250px"] Altura mínima do wrapper.
 *
 * @param {string} [props.loadingLabel="Carregando..."] Texto customizado exibido durante o loading.
 *
 * @param {object} [props.theme] Tema customizável usado para sobrescrever estilos internos.
 *
 * @param {React.CSSProperties} [props.theme.container] Estilo aplicado ao container principal.
 * @param {React.CSSProperties} [props.theme.loading] Estilo aplicado ao wrapper do loading.
 * @param {React.CSSProperties} [props.theme.loadingLabel] Estilo do texto durante o loading.
 *
 * @param {React.CSSProperties} [props.theme.error] Estilo aplicado ao container do erro.
 * @param {React.CSSProperties} [props.theme.errorTitle] Estilo aplicado ao título do erro.
 * @param {React.CSSProperties} [props.theme.errorMessage] Estilo aplicado à mensagem detalhada do erro.
 * @param {React.CSSProperties} [props.theme.retryButton] Estilo aplicado ao botão de retry.
 *
 * @param {React.CSSProperties} [props.theme.content] Estilo aplicado ao wrapper do conteúdo real.
 *
 * @returns {JSX.Element} O componente renderizado.
 */
declare const CBStateWrapper: <T>({ data, isLoading: propLoading, error, emptyTitle, emptyMessages, emptyIcon, onRetry, children, minHeight, loadingLabel, theme, }: CBStateWrapperProps<T>) => JSX.Element;
export default CBStateWrapper;
