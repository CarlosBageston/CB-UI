import React from "react";
import type { CBColor } from "../theme/CBColor";
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
declare const CBLoading: React.FC<CBLoadingProps>;
export default CBLoading;
