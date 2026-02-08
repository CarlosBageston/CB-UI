import { IonButton } from '@ionic/react';
import React from 'react';
import type { CBColor } from '../theme/CBColor';
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
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    hoverColor?: string;
    activeColor?: string;
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
declare const CBButton: React.FC<CBButtonProps>;
export default CBButton;
