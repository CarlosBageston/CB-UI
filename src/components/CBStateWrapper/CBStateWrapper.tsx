import React, { useEffect, useState, type JSX } from "react";
import { motion } from "framer-motion";
import CBEmptyState from "./CBEmptyState";
import { IonSpinner } from "@ionic/react";
import { MdErrorOutline } from "react-icons/md";

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
const CBStateWrapper = <T,>({
    data,
    isLoading: propLoading = false,
    error = null,
    emptyTitle = "Nada encontrado",
    emptyMessages,
    emptyIcon,
    onRetry,
    children,
    minHeight = "250px",
    loadingLabel = "Carregando...",
    theme = {},
}: CBStateWrapperProps<T>): JSX.Element => {
    const [showLoading, setShowLoading] = useState(propLoading || (data === undefined || data === null));

    // Delay mínimo de loading para smooth transition
    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (propLoading || data === undefined || data === null) {
            setShowLoading(true);
        } else {
            timer = setTimeout(() => setShowLoading(false), 150);
        }

        return () => clearTimeout(timer);
    }, [propLoading, data]);

    const shouldShowLoading = propLoading || showLoading;
    const isEmptyState = !shouldShowLoading && !error && (!data || data.length === 0);
    const showContent = !shouldShowLoading && !error && !isEmptyState;

    return (
        <div
            style={{
                width: "100%",
                minHeight,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
                boxSizing: "border-box",
                ...theme.container,
            }}
        >
            {/* LOADING */}
            {shouldShowLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        ...theme.loading,
                    }}
                >
                    <IonSpinner name="crescent" />
                    <div
                        style={{
                            marginTop: 10,
                            color: "#666",
                            ...theme.loadingLabel,
                        }}
                    >
                        {loadingLabel}
                    </div>
                </motion.div>
            )}

            {/* ERRO */}
            {!shouldShowLoading && error && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        color: "#b00020",
                        ...theme.error,
                    }}
                >
                    <MdErrorOutline size={32} />

                    <div
                        style={{
                            fontWeight: 600,
                            marginTop: 6,
                            marginBottom: 10,
                            ...theme.errorTitle,
                        }}
                    >
                        Erro ao carregar os dados
                    </div>

                    <div
                        style={{
                            marginBottom: 12,
                            ...theme.errorMessage,
                        }}
                    >
                        {error}
                    </div>

                    {onRetry && (
                        <button
                            onClick={onRetry}
                            style={{
                                padding: "6px 12px",
                                backgroundColor: "#b00020",
                                color: "#fff",
                                border: "none",
                                borderRadius: 8,
                                cursor: "pointer",
                                ...theme.retryButton,
                            }}
                        >
                            Tentar novamente
                        </button>
                    )}
                </motion.div>
            )}

            {/* EMPTY */}
            {!shouldShowLoading && isEmptyState && (
                <CBEmptyState
                    title={emptyTitle}
                    messages={emptyMessages}
                    icon={emptyIcon}
                    buttonLabel={onRetry ? "Adicionar" : undefined}
                    onButtonClick={onRetry || undefined}
                />
            )}

            {/* CONTENT */}
            {showContent && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        width: "100%",
                        ...theme.content,
                    }}
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};

export default CBStateWrapper;
