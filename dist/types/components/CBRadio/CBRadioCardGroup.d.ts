import React from "react";
import type { CBColorOrString } from "../../theme/CBColor";
export interface CBRadioCardGroupProps<T> {
    /**
     * Array de itens (objetos, strings ou enums) a serem exibidos como cards selecionáveis.
     */
    items: T[];
    /**
     * Valor atualmente selecionado. Pode ser o próprio item T ou seu identificador único.
     */
    value?: T | string | number | null;
    /**
     * Callback disparado quando o usuário seleciona um card.
     */
    onValueChange?: (value: T) => void;
    /**
     * Função para extrair o título/rótulo do item.
     */
    getLabel: (item: T) => string;
    /**
     * Função para extrair a chave única/identificador de cada item.
     */
    getValue: (item: T) => string | number;
    /**
     * Função opcional para extrair uma descrição explicativa detalhada do item.
     */
    getDescription?: (item: T) => string | React.ReactNode | undefined;
    /**
     * Número de colunas do grid em telas desktop/tablet.
     * @default 2
     */
    columns?: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Desabilita a interação com os cards (todos ou individualmente via função).
     * @default false
     */
    disabled?: boolean | ((item: T) => boolean);
    /**
     * Rótulo de título opcional exibido acima do grupo de cards.
     */
    label?: string;
    /**
     * Mensagem de erro para validação de formulários.
     */
    error?: string;
    /**
     * Texto de ajuda ou instrução exibido abaixo do grupo.
     */
    helperText?: string;
    /**
     * Cor de destaque temática baseada no sistema de cores CB-UI (ex: "primary", "secondary", "success", etc.).
     * @default "primary"
     */
    color?: CBColorOrString;
    /**
     * Posição do indicador de Radio Button no card:
     * - "end": canto superior direito (padrão)
     * - "start": canto superior esquerdo (antes do título)
     * @default "end"
     */
    radioPlacement?: "start" | "end";
    /**
     * Renderizador opcional para ícone temático ao lado do título.
     */
    renderIcon?: (item: T, isSelected: boolean) => React.ReactNode;
    /**
     * Renderizador opcional para conteúdo adicional ou rodapé do card.
     */
    renderExtra?: (item: T, isSelected: boolean) => React.ReactNode;
    /**
     * Classes CSS adicionais aplicadas ao container principal do grupo.
     */
    className?: string;
    /**
     * Classes CSS adicionais para os cards, ou função baseada no item e estado de seleção.
     */
    cardClassName?: string | ((item: T, isSelected: boolean) => string);
    /**
     * Estilos inline aplicados ao container principal.
     */
    style?: React.CSSProperties;
}
/**
 * CBRadioCardGroup
 *
 * Componente seletor visual em formato de Cards Interativos com Radio Button integrado.
 * Projetado para substituir `<CBSelect>` quando há poucas opções que demandam
 * destaque visual, facilidade de toque no mobile e descrições detalhadas.
 *
 * Totalmente compatível com `@ionic/react`, Tailwind CSS, variáveis de design tokens CB-UI,
 * Dark Mode e navegação acessível por teclado (WAI-ARIA).
 */
export declare function CBRadioCardGroup<T>({ items, value, onValueChange, getLabel, getValue, getDescription, columns, disabled, label, error, helperText, color, radioPlacement, renderIcon, renderExtra, className, cardClassName, style, }: CBRadioCardGroupProps<T>): React.JSX.Element;
export default CBRadioCardGroup;
