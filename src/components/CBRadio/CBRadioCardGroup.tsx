import React, { useId } from "react";
import clsx from "clsx";
import { IonRadio, IonRadioGroup, IonNote } from "@ionic/react";
import { useCBColor } from "../../hooks/useCBColor";
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

const columnClasses: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  6: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
};

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
export function CBRadioCardGroup<T>({
  items,
  value,
  onValueChange,
  getLabel,
  getValue,
  getDescription,
  columns = 2,
  disabled = false,
  label,
  error,
  helperText,
  color = "primary",
  radioPlacement = "end",
  renderIcon,
  renderExtra,
  className,
  cardClassName,
  style,
}: CBRadioCardGroupProps<T>) {
  const groupId = useId();
  const { main: mainColor, contrast: contrastColor } = useCBColor(color);
  const { main: dangerColor } = useCBColor("danger");

  // Verifica se um item específico é o selecionado
  const isItemSelected = (item: T): boolean => {
    if (value === undefined || value === null) return false;
    const itemKey = getValue(item);

    // Comparação direta de valor / referência
    if (value === item) return true;
    if (value === itemKey) return true;

    // Comparação caso value seja objeto
    if (typeof value === "object" && value !== null) {
      try {
        if (getValue(value as T) === itemKey) return true;
      } catch {
        // Fallback seguro
      }
    }

    return false;
  };

  const selectedItem = items.find(isItemSelected);
  const selectedRadioValue = selectedItem
    ? String(getValue(selectedItem))
    : value !== undefined && value !== null
      ? String(value)
      : undefined;

  const handleSelect = (item: T) => {
    const isItemDisabled =
      typeof disabled === "function" ? disabled(item) : disabled;
    if (isItemDisabled) return;
    onValueChange?.(item);
  };

  return (
    <div className={clsx("w-full mb-3", className)} style={style}>
      {/* Rótulo superior do grupo */}
      {label && (
        <label
          id={`${groupId}-label`}
          className="block text-sm font-medium text-(--text-primary,var(--cb-text-primary,#111827)) mb-2"
        >
          {label}
        </label>
      )}

      {/* Grupo Radio do Ionic com Grid Responsivo */}
      <IonRadioGroup
        value={selectedRadioValue}
        onIonChange={(e) => {
          const val = e.detail.value;
          if (val !== undefined && val !== null) {
            const found = items.find(
              (item) => String(getValue(item)) === String(val),
            );
            if (found) {
              handleSelect(found);
            }
          }
        }}
        className={clsx(
          "grid gap-3 sm:gap-4",
          columnClasses[columns] || columnClasses[2],
        )}
        aria-labelledby={label ? `${groupId}-label` : undefined}
      >
        {items.map((item) => {
          const itemKey = String(getValue(item));
          const isSelected = isItemSelected(item);
          const isItemDisabled =
            typeof disabled === "function" ? disabled(item) : disabled;
          const itemTitle = getLabel(item);
          const itemDescription = getDescription?.(item);
          const icon = renderIcon?.(item, isSelected);
          const extra = renderExtra?.(item, isSelected);

          const customCardClasses =
            typeof cardClassName === "function"
              ? cardClassName(item, isSelected)
              : cardClassName;

          return (
            <div
              key={itemKey}
              role="radio"
              aria-checked={isSelected}
              aria-disabled={isItemDisabled}
              tabIndex={isItemDisabled ? -1 : 0}
              onClick={() => handleSelect(item)}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault();
                  handleSelect(item);
                }
              }}
              style={{
                borderColor: isSelected
                  ? error
                    ? dangerColor
                    : mainColor
                  : undefined,
              }}
              className={clsx(
                // Layout base e transições
                "relative flex flex-col justify-between p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer select-none outline-none",
                // Estado Inativo
                !isSelected &&
                  !isItemDisabled &&
                  "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-xs hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md hover:-translate-y-0.5",
                // Estado Ativo / Selecionado
                isSelected &&
                  !isItemDisabled && [
                    "border-2 shadow-sm",
                    "bg-blue-50/60 dark:bg-blue-950/20",
                    error ? "border-red-500" : "",
                  ],
                // Foco visível por acessibilidade (teclado)
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-offset-gray-900",
                // Estado Desabilitado
                isItemDisabled &&
                  "opacity-50 cursor-not-allowed pointer-events-none border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30",
                customCardClasses,
              )}
            >
              {/* Cabeçalho do Card: Ícone, Título e Radio */}
              <div className="flex items-start justify-between gap-3 w-full">
                {/* Lado Esquerdo: Ícone + Título (ou Radio se radioPlacement === 'start') */}
                <div className="flex items-start gap-2.5 flex-1 min-w-0">
                  {radioPlacement === "start" && (
                    <div className="mt-0.5 shrink-0 pointer-events-none">
                      <IonRadio
                        value={itemKey}
                        disabled={isItemDisabled}
                        color={color}
                        aria-label={itemTitle}
                        style={{
                          "--color": "var(--cb-color-border, #cbd5e1)",
                          "--color-checked": error ? dangerColor : mainColor,
                          "--mark-color": contrastColor,
                        }}
                      />
                    </div>
                  )}

                  {icon && (
                    <div className="shrink-0 text-xl text-(--cb-color-primary) mt-0.5">
                      {icon}
                    </div>
                  )}

                  <div className="flex flex-col flex-1 min-w-0">
                    <span
                      className={clsx(
                        "text-base font-semibold tracking-tight transition-colors truncate",
                        isSelected
                          ? "text-(--cb-color-primary) font-bold"
                          : "text-(--text-primary,var(--cb-text-primary,#111827))",
                      )}
                    >
                      {itemTitle}
                    </span>

                    {/* Descrição abaixo do título */}
                    {itemDescription && (
                      <div className="mt-1 text-sm text-(--text-secondary,var(--cb-text-secondary,#6b7280)) leading-relaxed">
                        {itemDescription}
                      </div>
                    )}
                  </div>
                </div>

                {/* Lado Direito: Radio (quando radioPlacement === 'end', padrão) */}
                {radioPlacement === "end" && (
                  <div className="mt-0.5 shrink-0 pointer-events-none">
                    <IonRadio
                      value={itemKey}
                      disabled={isItemDisabled}
                      color={color}
                      aria-label={itemTitle}
                      style={{
                        "--color": "var(--cb-color-border, #cbd5e1)",
                        "--color-checked": error ? dangerColor : mainColor,
                        "--mark-color": contrastColor,
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Conteúdo Extra / Rodapé opcional do Card */}
              {extra && (
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/80 w-full text-xs">
                  {extra}
                </div>
              )}
            </div>
          );
        })}
      </IonRadioGroup>

      {/* Mensagem de Erro ou Texto de Ajuda */}
      {(error || helperText) && (
        <IonNote
          role="alert"
          className={clsx(
            "block mt-1.5 text-[12px] pl-1",
            error
              ? "text-(--cb-color-danger,text-red-500)"
              : "text-(--cb-color-secondary,text-gray-500)",
          )}
        >
          {error ?? helperText}
        </IonNote>
      )}
    </div>
  );
}

export default CBRadioCardGroup;
