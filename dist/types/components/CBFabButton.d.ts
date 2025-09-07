import React from 'react';
import type { IconType } from 'react-icons/lib';
import type { CBColor } from '../theme/CBColor';
/**
 * Props do componente CBFabButton
 */
export interface CBFabButtonProps {
    /** Texto exibido como tooltip ao lado do FAB */
    tooltip: string;
    /** Ícone principal do FAB (default: IoAdd) */
    icon?: IconType;
    /** Callback ao clicar no FAB */
    onClick: () => void;
    /** Indica se está gravando (afeta a exibição do botão de cancelamento) */
    recording?: boolean;
    /** Exibe indicador de loading no botão */
    loading?: boolean;
    /** Exibe botão de cancelamento acima do FAB */
    showCancel?: boolean;
    /** Callback ao clicar no botão de cancelamento */
    onCancel?: () => void;
    /** Ícone do botão de cancelamento (default: IoClose) */
    cancelIcon?: IconType;
    /** Desabilita o FAB */
    disabled?: boolean;
    /** Classe CSS adicional */
    className?: string;
    /** Cor principal do FAB */
    color?: CBColor;
}
/**
 * CBFabButton
 *
 * Componente de Floating Action Button (FAB) com:
 * - Animação de expansão e contração
 * - Tooltip animado
 * - Suporte a ícone customizado
 * - Estado de loading
 * - Botão de cancelamento opcional, visível apenas quando `recording = true`
 *
 * @param props Propriedades do componente
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * <CBFabButton
 *   tooltip="Adicionar item"
 *   icon={IoAdd}
 *   onClick={() => console.log("FAB clicado")}
 *   loading={false}
 *   showCancel={true}
 *   onCancel={() => console.log("Cancelado")}
 *   color="primary"
 * />
 * ```
 */
declare const CBFabButton: React.FC<CBFabButtonProps>;
export default CBFabButton;
