import React from 'react';
import type { IconType } from 'react-icons';
import type { CBColor } from '../theme/CBColor';
/**
 * Props do componente CBFabButtonCenter
 */
export interface CBFabButtonCenterProps {
    /** Ícone principal do FAB (default: IoAdd) */
    icon?: IconType;
    /** Callback ao clicar no FAB */
    onClick?: () => void;
    /** Exibe indicador de loading no botão */
    loading?: boolean;
    /** Desabilita o botão */
    disabled?: boolean;
    /** Cor principal do FAB */
    color?: CBColor;
    /** Classe CSS adicional */
    className?: string;
}
/**
 * CBFabButtonCenter
 *
 * Componente de Floating Action Button centralizado na parte inferior da tela.
 * - Suporta loading com `IonSpinner`
 * - Ícone customizável
 * - Desabilitação via prop `disabled`
 *
 * @param props Propriedades do componente
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * <CBFabButtonCenter
 *   icon={IoAdd}
 *   onClick={() => console.log("FAB clicado")}
 *   loading={false}
 *   color="primary"
 * />
 * ```
 */
declare const CBFabButtonCenter: React.FC<CBFabButtonCenterProps>;
export default CBFabButtonCenter;
