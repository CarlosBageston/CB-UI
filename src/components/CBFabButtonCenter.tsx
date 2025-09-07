import React from 'react';
import { IonFab, IonFabButton, IonSpinner } from '@ionic/react';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { IoAdd } from 'react-icons/io5';
import type { CBColor } from '../theme/CBColor';
import { useCBColor } from '../hooks/useCBColor';

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
const CBFabButtonCenter: React.FC<CBFabButtonCenterProps> = ({
    icon = IoAdd,
    onClick,
    loading = false,
    disabled = false,
    color = 'primary',
    className
}) => {
    const { main: mainColor, contrast: textColor } = useCBColor(color);

    return (
        <div className="relative w-full left-1/2 ">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                className={`fixed bottom-[40px]  z-50 ${className}`}

            >
                <IonFab vertical="bottom" horizontal="center" slot="fixed" >
                    <IonFabButton
                        onClick={onClick}
                        disabled={disabled || loading}
                        style={{ '--box-shadow': 'none', '--background': mainColor, '--color': textColor }}
                    >
                        {loading ? (
                            <IonSpinner name="crescent" color={textColor.includes('light') ? 'light' : 'dark'} />
                        ) : (
                            React.createElement(icon, { className: 'text-[28px]' })
                        )}
                    </IonFabButton>
                </IonFab>
            </motion.div>
        </div>
    );
};

export default CBFabButtonCenter;
