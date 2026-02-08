// CBEmptyState.tsx
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import type { CBColor } from "../../theme/CBColor";
import { useCBColor } from "../../hooks/useCBColor";

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

const CBEmptyState: React.FC<CBEmptyStateProps> = ({
    isEmpty = true,
    children,
    messages,
    title,
    icon,
    buttonLabel,
    onButtonClick,
    color = "primary",
    colorBg = "#ecececbe",
    theme = {}
}) => {

    if (!isEmpty) {
        return <>{children}</>;
    }

    const { main } = useCBColor(color);

    const message = useMemo(() => {
        const source = messages || ["Nenhum dado encontrado"];
        const index = Math.floor(Math.random() * source.length);
        return source[index];
    }, [messages]);

    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
                boxSizing: "border-box",
                ...theme.container
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                    textAlign: "center",
                    fontSize: "1.2rem",
                    fontStyle: "italic",
                    color: "#555",
                    maxWidth: "400px",
                    lineHeight: 1.4,
                    userSelect: "none",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    padding: "1rem 1.5rem",
                    borderRadius: "12px",
                    backgroundColor: colorBg,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    ...theme.card
                }}
            >
                {icon}

                {title && (
                    <div
                        style={{
                            fontWeight: 600,
                            marginBottom: 4,
                            ...theme.title
                        }}
                    >
                        {title}
                    </div>
                )}

                <div style={theme.message}>{message}</div>

                {buttonLabel && onButtonClick && (
                    <button
                        onClick={onButtonClick}
                        style={{
                            marginTop: 12,
                            padding: "6px 12px",
                            borderRadius: 6,
                            border: "none",
                            backgroundColor: main,
                            color: "#fff",
                            cursor: "pointer",
                            ...theme.button
                        }}
                    >
                        {buttonLabel}
                    </button>
                )}
            </motion.div>
        </div>
    );
};

export default CBEmptyState;
