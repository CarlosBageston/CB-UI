// CBEmptyState.tsx
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import { MdInbox } from "react-icons/md";
import type { CBColor } from "../theme/CBColor";
import { useCBColor } from "../hooks/useCBColor";

/**
 * Props do componente CBEmptyState
 */
interface CBEmptyStateProps {
    /** Lista de mensagens que podem ser exibidas aleatoriamente */
    messages?: string[];
    /** Título do estado vazio */
    title?: string;
    /** Ícone exibido acima da mensagem */
    icon?: React.ReactNode;
    /** Texto do botão opcional */
    buttonLabel?: string;
    /** Callback chamado ao clicar no botão */
    onButtonClick?: () => void;
    /** Cor principal do estado vazio */
    color: CBColor;
    /** Cor de fundo do card */
    colorBg?: string;
}

/**
 * CBEmptyState
 * 
 * Componente que exibe um estado vazio com:
 * - Ícone
 * - Mensagem ou lista de mensagens aleatórias
 * - Título opcional
 * - Botão opcional com callback
 * - Animação suave de entrada
 *
 * @param props Propriedades do componente
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * <CBEmptyState
 *   title="Nenhum registro encontrado"
 *   messages={["Sem dados aqui", "Nada para exibir"]}
 *   icon={<CustomIcon size={32} />}
 *   buttonLabel="Adicionar"
 *   onButtonClick={() => console.log("Adicionar clicado")}
 *   color="primary"
 * />
 * ```
 */
const CBEmptyState: React.FC<CBEmptyStateProps> = ({
    messages,
    title,
    icon,
    buttonLabel,
    onButtonClick,
    color = 'primary',
    colorBg = '#ecececbe'
}) => {
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
                    color: '#555555',
                    maxWidth: "400px",
                    lineHeight: 1.4,
                    userSelect: "none",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    padding: "1rem 1.5rem",
                    borderRadius: "12px",
                    backgroundColor: colorBg,
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                {icon ?? <MdInbox size={32} style={{ marginBottom: 8 }} />}
                {title && <div style={{ fontWeight: 600, marginBottom: 4 }}>{title}</div>}
                <div>{message}</div>
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
