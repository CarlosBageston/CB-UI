import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IonSpinner } from "@ionic/react";
import { useCBColor } from "../hooks/useCBColor";
import type { CBColor } from "../theme/CBColor";
import { registerCBLoading } from "../hooks/CBLoadingController";


type LoadingType = "circular" | "dots" | "linear";

export interface CBLoadingProps {
    isOpen?: boolean;
    message?: string;
    color?: CBColor;
    type?: LoadingType;
    withBg?: boolean;
    withText?: boolean;
}
/**
 * CBLoading
 *
 * Componente de loading flexível para React + Ionic.
 * Suporta três tipos de animações:
 *  - "circular": spinner circular do Ionic
 *  - "dots": três pontinhos animados
 *  - "linear": barra de loading animada no topo da tela
 *
 * Possui opções de exibição de fundo e mensagem, além de controle global via `registerCBLoading`.
 *
 * @component
 *
 * @param {Object} props - Propriedades do componente
 * @param {boolean} [props.isOpen=false] - Define se o loading inicia visível
 * @param {string} [props.message="Carregando..."] - Mensagem exibida no loading (apenas para `circular` ou `dots`)
 * @param {CBColor} [props.color="primary"] - Cor principal do loading, usada no fundo ou no texto
 * @param {"circular"|"dots"|"linear"} [props.type="circular"] - Tipo de loading
 * @param {boolean} [props.withBg=true] - Exibir fundo colorido atrás do loading (`circular` ou `dots`)
 * @param {boolean} [props.withText=true] - Exibir mensagem abaixo do loading (`circular` ou `dots`)
 *
 * @example
 * // Loading circular padrão
 * <CBLoading />
 *
 * @example
 * // Loading com três pontinhos e mensagem customizada
 * <CBLoading type="dots" message="Aguarde..." color="secondary" />
 *
 * @example
 * // Loading linear no topo da tela
 * <CBLoading type="linear" color="success" />
 *
 * @remarks
 * O componente se registra globalmente através de `registerCBLoading`, permitindo abrir ou fechar o loading
 * de qualquer lugar da aplicação sem precisar manipular o estado diretamente.
 */
const CBLoading: React.FC<CBLoadingProps> = ({ isOpen = false, message = "Carregando...", color = "primary", type = "circular", withBg = true, withText = true }) => {
    const [visible, setVisible] = useState(isOpen);
    const [msg, setMsg] = useState(message);
    const [bgColor, setBgColor] = useState(color);
    const [withBgState, setWithBgState] = useState(withBg);
    const [withTextState, setWithTextState] = useState(withText);
    const [loadingType, setLoadingType] = useState<LoadingType>(type);

    const { main: bg, contrast: textColor } = useCBColor(bgColor);

    // Registrar funções globais
    useEffect(() => {
        registerCBLoading(
            ({ message, color, type, withBg, withText }) => {
                if (message) setMsg(message);
                if (color) setBgColor(color);
                if (type) setLoadingType(type);
                if (withBg !== undefined) setWithBgState(withBg);
                if (withText !== undefined) setWithTextState(withText);
                setVisible(true);
            },
            () => setVisible(false)
        );
    }, []);

    if (loadingType === "linear") {
        return (
            <AnimatePresence>
                {visible && (
                    <motion.div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: 4,
                            backgroundColor: "rgba(0,0,0,0.1)",
                            zIndex: 99999,
                            overflow: "hidden",
                        }}
                    >
                        <motion.div
                            style={{
                                height: "100%",
                                width: "50%",
                                backgroundColor: bg,
                                opacity: 1,
                                position: "absolute",
                                borderRadius: 2,
                            }}
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.div
                            style={{
                                height: "100%",
                                width: "50%",
                                backgroundColor: bg,
                                opacity: 0.4,
                                position: "absolute",
                                borderRadius: 2,
                            }}
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.1 }}
                        />
                    </motion.div>

                )}
            </AnimatePresence>
        );
    }
    console.log()
    // Circular e dots
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 99999,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: withBgState ? bg : "transparent",
                            color: textColor,
                            padding: "1.5rem 2rem",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "1rem",
                            minWidth: "180px",
                        }}
                    >
                        {loadingType === "circular" ? (
                            <IonSpinner name="crescent" color='light' />
                        ) : (
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        style={{
                                            width: "8px",
                                            height: "8px",
                                            borderRadius: "50%",
                                            backgroundColor: textColor,
                                        }}
                                        animate={{ y: ["0%", "-50%", "0%"] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 0.6,
                                            delay: i * 0.2,
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                        {
                            withTextState &&
                            <span style={{ fontSize: "14px", fontWeight: 500, textAlign: "center" }}>
                                {msg}
                            </span>
                        }
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CBLoading;
