// components/custom/CustomFabButton.tsx
import React, { useEffect, useState } from 'react';
import {
    IonFab,
    IonFabButton,
    IonSpinner
} from '@ionic/react';
import { AnimatePresence, motion } from 'framer-motion';
import type { IconType } from 'react-icons/lib';
import { IoAdd, IoClose } from 'react-icons/io5';
import type { CBColor } from '../theme/CBColor';
import { useCBColor } from '../hooks/useCBColor';

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
const CBFabButton: React.FC<CBFabButtonProps> = ({
    tooltip,
    icon = IoAdd,
    onClick,
    recording,
    loading = false,
    showCancel = false,
    onCancel,
    cancelIcon = IoClose,
    disabled = false,
    className,
    color = 'primary'
}) => {
    const [expand, setExpand] = useState(true);
    const [showTooltip, setShowTooltip] = useState(true);
    const { main: mainColor, contrast: textColor } = useCBColor(color);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExpand(false);
            setTimeout(() => {
                setShowTooltip(false);
            }, 800);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <AnimatePresence mode="wait">
                <motion.div
                    className={`fixed bottom-24 right-2 z-[1000] flex-center ${className} `}
                    animate={expand ? { width: 250, height: 55 } : { width: 55, height: 55 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <IonFab vertical="bottom" horizontal="end" slot="fixed" >
                        <IonFabButton
                            onClick={onClick}
                            disabled={disabled || loading}
                            style={{ '--box-shadow': !expand && 'none', '--background': mainColor, '--color': textColor }}
                        >
                            {loading ? (
                                <IonSpinner name="crescent" className='text-[var(--ion-color-text-fixed)]' />
                            ) : (
                                React.createElement(icon, { className: 'text-[26px]' })
                            )}
                        </IonFabButton>

                        {showCancel && onCancel && (
                            <motion.div
                                className="absolute bottom-[70px] right-[12px] pointer-events-none"
                                animate={
                                    recording
                                        ? { opacity: 1, y: 0, pointerEvents: 'auto' }
                                        : { opacity: 0, y: 10, pointerEvents: 'none' }
                                }
                                transition={{ duration: 0.3 }}
                            >
                                <IonFabButton
                                    color="danger"
                                    className="w-[35px] h-[35px]"
                                    onClick={onCancel}
                                >
                                    {React.createElement(cancelIcon, { className: 'text-[22px]' })}
                                </IonFabButton>
                            </motion.div>
                        )}
                    </IonFab>
                    {tooltip && showTooltip && (
                        <motion.div
                            className="absolute right-[10px] bottom-2 !pr-13 h-[58px] overflow-hidden rounded-full flex items-center justify-center"
                            style={{ backgroundColor: mainColor, color: textColor }}
                            initial={{ width: 0, opacity: 0, filter: "blur(4px)" }}
                            animate={expand ? { width: 'auto', opacity: 1, filter: "blur(0px)" } : { width: 0, opacity: 0, filter: "blur(4px)" }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            <motion.div
                                className="!pl-4 !pr-4 whitespace-nowrap"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1, duration: 0.3, ease: 'easeOut' }}
                            >
                                {tooltip}
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>

            </AnimatePresence>
        </div>
    );
};

export default CBFabButton;
