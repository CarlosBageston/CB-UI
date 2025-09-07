import { IonButton, IonSpinner } from '@ionic/react';
import React from 'react';
import type { CBColor, CSSVars } from '../theme/CBColor';
import { useCBColor } from '../hooks/useCBColor';

/**
 * Tamanhos disponíveis para o CBButton.
 * - `'small'`: botão compacto
 * - `'medium'`: tamanho padrão
 * - `'large'`: botão maior
 */
export type CBButtonSize = 'small' | 'medium' | 'large';

/**
 * Variantes visuais do botão.
 * - `'solid'`: fundo sólido colorido
 * - `'outline'`: contorno colorido com fundo transparente
 * - `'clear'`: apenas texto colorido, sem borda ou fundo
 */
export type CBButtonVariant = 'solid' | 'outline' | 'clear';

/**
 * Props do componente CBButton.
 */
export interface CBButtonProps extends Omit<React.ComponentProps<typeof IonButton>, 'size'> {
    /** Texto exibido no botão */
    label?: string;
    /** Tamanho do botão */
    size?: CBButtonSize;
    /** Variante visual */
    variant?: CBButtonVariant;
    /** Borda arredondada */
    rounded?: boolean;
    /** Ocupa toda a largura disponível */
    fullWidth?: boolean;
    /** Estado de loading */
    loading?: boolean;
    /** Texto exibido quando estiver em loading */
    loadingText?: string;
    /** Desabilita o botão */
    disabled?: boolean;
    /** Gradiente de fundo customizado */
    gradient?: string;
    /** Ícone inicial */
    iconStart?: React.ReactNode;
    /** Ícone final */
    iconEnd?: React.ReactNode;
    /** Cor do botão (usa CBColor) */
    color?: CBColor;
}

/**
 * Componente de botão customizado com suporte a cores, variantes, tamanhos, ícones e loading.
 * 
 * Suporta:
 * - Botão sólido (`solid`)
 * - Botão com contorno (`outline`)
 * - Botão transparente apenas com texto (`clear`)
 * 
 * @param props Propriedades do botão
 * @returns JSX.Element
 * 
 * @example
 * ```tsx
 * <CBButton
 *   label="Salvar"
 *   color="primary"
 *   size="large"
 *   variant="solid"
 *   rounded
 *   iconStart={<SaveIcon />}
 *   loading={isSaving}
 * />
 * ```
 * 
 * @example
 * ```tsx
 * <CBButton
 *   label="Cancelar"
 *   variant="outline"
 *   fullWidth
 * />
 * ```
 */
const CBButton: React.FC<CBButtonProps> = ({
    label,
    size = 'medium',
    variant = 'solid',
    rounded = false,
    fullWidth = false,
    loading = false,
    loadingText,
    disabled = false,
    gradient,
    iconStart,
    iconEnd,
    className = '',
    style,
    color = 'primary',
    ...rest
}) => {
    const { main: mainColor, contrast: contrastColor } = useCBColor(color);

    const finalStyle: CSSVars = { ...style };

    // Cor de fundo e texto
    if (variant === 'solid') {
        finalStyle['--background'] = gradient ?? mainColor;
        finalStyle['--color'] = contrastColor;
        finalStyle['--background-focused'] = mainColor;
        finalStyle['--background-activated'] = mainColor;
        finalStyle['--color-focused'] = contrastColor;
        finalStyle['--color-hover'] = contrastColor;
        finalStyle['--color-activated'] = contrastColor;
    } else if (variant === 'outline') {
        finalStyle['--color'] = mainColor;
        finalStyle['--border-color'] = mainColor;

        finalStyle['--border-color-focused'] = mainColor;
        finalStyle['--border-color-activated'] = mainColor;
        finalStyle['--color-focused'] = mainColor;
        finalStyle['--color-hover'] = mainColor;
        finalStyle['--color-activated'] = mainColor;
    } else if (variant === 'clear') {
        finalStyle['--color'] = mainColor;

        finalStyle['--color-focused'] = mainColor;
        finalStyle['--color-hover'] = mainColor;
        finalStyle['--color-activated'] = mainColor;
    }

    // Bordas arredondadas
    if (rounded) finalStyle['--border-radius'] = '999px';

    // Largura total
    if (fullWidth) finalStyle.width = '100%';

    // Tamanhos
    switch (size) {
        case 'small':
            finalStyle.height = '32px';
            finalStyle.fontSize = '14px';
            break;
        case 'medium':
            finalStyle.height = '40px';
            finalStyle.fontSize = '16px';
            break;
        case 'large':
            finalStyle.height = '48px';
            finalStyle.fontSize = '18px';
            break;
    }


    return (
        <IonButton
            fill={variant === 'solid' ? 'solid' : variant === 'outline' ? 'outline' : 'clear'}
            disabled={disabled || loading}
            style={finalStyle}
            className={className}
            {...rest}
        >
            {loading ? (
                <>
                    <IonSpinner name="crescent" slot="start" />{' '}
                    {loadingText ?? label}
                </>
            ) : (
                <>
                    {iconStart && !label ? iconStart : null}
                    {iconStart && label && <span style={{ marginRight: 8 }}>{iconStart}</span>}
                    {label}
                    {iconEnd && <span style={{ marginLeft: 8 }}>{iconEnd}</span>}
                </>
            )}
        </IonButton>
    );
};

export default CBButton;