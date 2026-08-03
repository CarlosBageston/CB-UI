import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  IonIcon,
  IonInput,
  IonNote,
  IonSpinner,
  type InputCustomEvent,
} from "@ionic/react";
import {
  alertCircleOutline,
  chevronDownOutline,
  closeCircle,
  searchOutline,
} from "ionicons/icons";

import type { CBAutocompleteProps } from "./types";
import { useCBColor } from "../../hooks/useCBColor";
import { useAutocomplete } from "./useAutocomplete";
import { useClickOutside } from "./useClickOutside";
import type { CSSVars } from "../../theme/CBColor";

const RADIUS_MAP = {
  none: "0px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  full: "9999px",
} as const;

function CBAutocomplete<T>({
  label,
  value = null,
  items,
  getLabel,
  getValue,
  onValueChange,
  onSearch,

  placeholder = "Pesquisar...",
  helperText,
  error,
  loading: externalLoading = false,
  disabled = false,

  debounce = 500,
  minSearchLength = 2,

  color = "neutral",
  radius = "md",

  noResultsText = "Nenhum resultado encontrado",
  clearable = true,
}: CBAutocompleteProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLIonInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const [focused, setFocused] = useState(false);

  const { main } = useCBColor(color);
  const { main: danger } = useCBColor("danger");

  const {
    query,
    setQuery,
    results,
    status,
    isOpen,
    highlightedIndex,
    setHighlightedIndex,
    handleQueryChange,
    openWithCurrentItems,
    close,
  } = useAutocomplete<T>({
    items,
    getLabel,
    onSearch,
    debounce,
    minSearchLength,
    value,
  });

  useClickOutside([containerRef], close, isOpen);

  const isLoading = status === "loading" || externalLoading;
  const filled = query.length > 0;

  const borderColor = error
    ? danger
    : focused || filled
      ? main
      : "var(--cb-color-border)";

  const css = useMemo<CSSVars>(
    () => ({
      "--border-color": borderColor,
      "--highlight-color-focused": main,
      "--border-radius": RADIUS_MAP[radius],
      "--icon-color": borderColor,
      "--color": "var(--cb-color-dark)",
      "--placeholder-color": "var(--cb-color-border)",
    }),
    [borderColor, main, radius],
  );

  const selectItem = useCallback(
    (item: T) => {
      setQuery(getLabel(item));
      onValueChange?.(item);
      close();
    },
    [getLabel, onValueChange, close, setQuery],
  );

  const clear = useCallback(() => {
    handleQueryChange("");
    inputRef.current?.setFocus();
  }, [handleQueryChange]);

  const handleInput = (e: InputCustomEvent) => {
    handleQueryChange(String(e.detail.value ?? ""));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;

    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        if (!isOpen) {
          openWithCurrentItems();
          return;
        }
        setHighlightedIndex((prev) =>
          prev + 1 >= results.length ? 0 : prev + 1,
        );
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        if (!isOpen) {
          openWithCurrentItems();
          return;
        }
        setHighlightedIndex((prev) =>
          prev - 1 < 0 ? results.length - 1 : prev - 1,
        );
        break;
      }
      case "Enter": {
        if (isOpen && highlightedIndex >= 0 && results[highlightedIndex]) {
          e.preventDefault();
          selectItem(results[highlightedIndex]);
        }
        break;
      }
      case "Escape": {
        if (isOpen) {
          e.preventDefault();
          close();
        }
        break;
      }
      case "Tab": {
        close();
        break;
      }
      default:
        break;
    }
  };

  // Mantém o item destacado visível durante a navegação por teclado.
  useEffect(() => {
    if (highlightedIndex < 0 || !listRef.current) return;
    const node = listRef.current.children[highlightedIndex] as
      | HTMLElement
      | undefined;
    node?.scrollIntoView({ block: "nearest" });
  }, [highlightedIndex]);

  const showMinLengthHint = !!onSearch && query.trim().length < minSearchLength;

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col pt-2 mb-3 h-18 "
      onKeyDown={handleKeyDown}
    >
      <div className="relative">
        <IonInput
          ref={inputRef}
          label={label}
          labelPlacement="stacked"
          placeholder={placeholder}
          fill="outline"
          shape="round"
          mode="md"
          value={query}
          disabled={disabled}
          autocomplete="off"
          style={css}
          onIonFocus={() => {
            setFocused(true);
            openWithCurrentItems();
          }}
          onIonBlur={() => setFocused(false)}
          onIonInput={handleInput}
        >
          <div slot="end" className="flex items-center gap-1 pr-1">
            {isLoading && (
              <IonSpinner
                name="crescent"
                style={{ width: 18, height: 18, color: main }}
              />
            )}

            {!isLoading && clearable && filled && !disabled && (
              <IonIcon
                icon={closeCircle}
                className="cursor-pointer text-[18px]"
                style={{ color: "var(--cb-color-border)" }}
                onClick={clear}
              />
            )}

            {!isLoading && (
              <IonIcon
                icon={chevronDownOutline}
                className="text-[16px] transition-transform duration-150"
                style={{
                  color: borderColor,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            )}
          </div>
        </IonInput>

        {isOpen && !disabled && (
          <ul
            ref={listRef}
            role="listbox"
            className="absolute left-0 right-0 top-full bg-(--cb-surface-elevated) mt-1.5 max-h-64 overflow-y-auto custom-scroll border p-1.5 z-50 transition-all duration-150"
            style={{
              borderRadius: "8px",
              borderColor: "var(--cb-color-border)",
            }}
          >
            {/* Estado de Erro */}
            {status === "error" && (
              <li
                className="flex items-center justify-center gap-2 px-3 py-4 text-xs font-medium rounded-lg"
                style={{
                  color: danger,
                }}
              >
                <IonIcon icon={alertCircleOutline} className="text-base" />
                <span>Erro ao buscar resultados.</span>
              </li>
            )}

            {/* Estado de Carregando sem itens prévios */}
            {status === "loading" && results.length === 0 && (
              <li
                className="flex items-center justify-center gap-2 px-3 py-4 text-xs"
                style={{ color: "var(--cb-text-secondary)" }}
              >
                <IonSpinner
                  name="crescent"
                  className="w-4 h-4"
                  style={{ color: "var(--cb-text-secondary)" }}
                />
                <span>Buscando opções...</span>
              </li>
            )}

            {/* Sem Resultados / Mínimo de caracteres */}
            {status !== "error" &&
              status !== "loading" &&
              results.length === 0 && (
                <li
                  className="flex flex-col items-center justify-center gap-1 px-3 py-5 text-center text-xs"
                  style={{ color: "var(--cb-text-secondary)" }}
                >
                  <IonIcon
                    icon={searchOutline}
                    className="text-lg opacity-60"
                  />
                  <span>
                    {showMinLengthHint
                      ? `Digite ao menos ${minSearchLength} caracteres`
                      : noResultsText}
                  </span>
                </li>
              )}

            {/* Lista de Resultados */}
            {results.map((item, index) => {
              const itemValue = getValue(item);
              const isHighlighted = index === highlightedIndex;
              const isSelected = value != null && getValue(value) === itemValue;

              return (
                <li
                  key={String(itemValue)}
                  role="option"
                  aria-selected={isSelected}
                  className={`relative flex items-center justify-between px-3 py-2.5 my-0.5 text-xs sm:text-sm rounded-lg cursor-pointer select-none transition-all duration-150 ${
                    isSelected ? "font-semibold" : "font-normal"
                  }`}
                  style={{
                    backgroundColor: isHighlighted
                      ? "rgba(156, 163, 175, 0.15)"
                      : "transparent",
                    color: "var(--cb-text-primary)",
                  }}
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  onClick={() => selectItem(item)}
                >
                  <span className="truncate">{getLabel(item)}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {(error || helperText) && (
        <IonNote
          role="alert"
          className={`pl-6! text-[12px] ${
            error ? "text-(--cb-color-danger)" : "text-(--cb-color-secondary)"
          }`}
        >
          {error ?? helperText}
        </IonNote>
      )}
    </div>
  );
}

export default CBAutocomplete;
