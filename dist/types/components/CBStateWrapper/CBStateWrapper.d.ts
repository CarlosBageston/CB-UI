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
    /** Array de dados a ser renderizado. Deve começar `null` ou `undefined` para que o loading funcione corretamente. */
    data?: T[] | null;
}
/**
 * CBStateWrapper
 *
 * Componente wrapper para gerenciar automaticamente os principais estados de uma tela:
 * - **Loading**
 * - **Erro**
 * - **Vazio**
 * - **Conteúdo**
 *
 * A prioridade de exibição é sempre: `loading > error > empty > content`.
 *
 * Para funcionar corretamente com o estado de loading inicial, o `data` deve começar
 * como `null` ou `undefined`. Se você passar `isLoading`, ele será usado como prioridade.
 *
 * Suporta:
 * - Tema customizável (`theme`)
 * - Mensagem de loading personalizada
 * - Ícone e mensagens customizadas para o empty state
 * - Botão de retry
 *
 * @template T Tipo dos itens do array `data`
 * @param {object} props
 * @param {T[] | null} [props.data] Array de dados a ser renderizado. Deve começar `null` ou `undefined` para que o loading funcione corretamente.
 * @param {boolean} [props.isLoading=false] Força o estado de loading.
 * @param {string | null} [props.error=null] Mensagem de erro para exibir o estado de erro.
 * @param {string} [props.emptyTitle="Nada encontrado"] Título do estado vazio.
 * @param {string[]} [props.emptyMessages] Mensagens detalhadas do estado vazio.
 * @param {React.ReactNode} [props.emptyIcon] Ícone customizado para o estado vazio.
 * @param {() => void} [props.onRetry] Callback do botão de retry/Adicionar.
 * @param {React.ReactNode} [props.children] Conteúdo real quando nenhum outro estado está ativo.
 * @param {string | number} [props.minHeight="250px"] Altura mínima do wrapper.
 * @param {string} [props.loadingLabel="Carregando..."] Texto do estado de loading.
 * @param {object} [props.theme] Objeto para customização de estilos internos.
 * @returns {JSX.Element} Componente renderizado com os estados adequados.
 */
declare const CBStateWrapper: <T>({ data, isLoading: propLoading, error, emptyTitle, emptyMessages, emptyIcon, onRetry, children, minHeight, loadingLabel, theme, }: CBStateWrapperProps<T>) => JSX.Element;
export default CBStateWrapper;
