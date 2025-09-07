import { useState, useMemo, useRef } from "react";
import { IonSearchbar, IonList, IonItem, IonLabel, IonSpinner } from "@ionic/react";
import { useCBColor } from "../hooks/useCBColor";
import type { CBColor } from "../theme/CBColor";


/**
 * Tipos de variantes do CBAutocomplete.
 * - `"search"`: utiliza `IonSearchbar` como input.
 * - `"select"`: utiliza um input padrão com dropdown customizado.
 */
export type CBAutocompleteVariant = "search" | "select";

/**
 * Props do componente CBAutocomplete.
 * 
 * @template T Tipo dos itens que serão exibidos no autocomplete.
 */
export interface CBAutocompleteProps<T> {
    /** Lista de itens a serem exibidos */
    items: T[];
    /** Função que retorna o label a ser exibido para cada item */
    getLabel: (item: T) => string;
    /** Função que retorna o valor único de cada item */
    getValue: (item: T) => string | number;
    /** Callback chamado ao selecionar um item */
    onSelect: (item: T | undefined) => void;
    /** Placeholder do input */
    placeholder?: string;
    /** Cor do componente (usa as cores definidas em CBColor) */
    color?: CBColor;
    /** Define se o componente terá bordas arredondadas */
    rounded?: boolean;
    /** Define se o componente ocupará toda a largura disponível */
    fullWidth?: boolean;
    /** Mostra spinner de loading */
    loading?: boolean;
    /** Variante do autocomplete (`search` ou `select`) */
    variant?: CBAutocompleteVariant;
    /** Label opcional exibida acima do input (somente para variant="select") */
    label?: string;
}

/**
 * Componente CBAutocomplete genérico que permite buscar ou selecionar itens de uma lista.
 * 
 * Suporta duas variantes:
 * - `"search"`: usa IonSearchbar nativo do Ionic.
 * - `"select"`: usa um input customizado com dropdown de itens filtráveis.
 *
 * @template T Tipo dos itens da lista
 * @param props Propriedades do componente
 * @returns JSX.Element
 * 
 * @example
 * ```tsx
 * <CBAutocomplete
 *   items={users}
 *   getLabel={(u) => u.name}
 *   getValue={(u) => u.id}
 *   onSelect={(u) => console.log(u)}
 *   placeholder="Buscar usuário..."
 *   color="primary"
 *   variant="select"
 * />
 * ```
 */
function CBAutocomplete<T>({
    items,
    getLabel,
    getValue,
    onSelect,
    placeholder = "Pesquisar...",
    color = "neutral",
    rounded = true,
    fullWidth = true,
    loading = false,
    variant = "search",
    label
}: CBAutocompleteProps<T>) {
    const [searchText, setSearchText] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { main: borderColor, contrast: textColor } = useCBColor(color);

    const filteredItems = useMemo(() => {
        return items.filter((item) =>
            getLabel(item).toLowerCase().includes(searchText.toLowerCase())
        );
    }, [items, searchText, getLabel]);

    const borderRadius = rounded ? "12px" : "6px";
    const borderRadiusInput = rounded ? "99999px" : "6px";

    /** Renderiza dropdown para select */
    const renderSelectDropdown = () => {
        // pega a altura do input para posicionar o dropdown
        let inputHeight = containerRef.current?.querySelector('input')?.clientHeight ?? 0;
        if (variant === 'select') inputHeight += 20 // mais 20px para considerar o padding interno do input
        else inputHeight += 10 // mais 10px para considerar o padding interno do searchbar
        return (
            <div
                className="absolute z-50 overflow-hidden max-h-64 overflow-y-auto shadow-lg"
                style={{
                    width: fullWidth ? "100%" : "auto",
                    border: `1px solid ${borderColor}`,
                    borderRadius,
                    backgroundColor: "var(--ion-color-light)",
                    top: inputHeight, // 16px de gap entre input e dropdown (ja contando com o padding interno dos inputs)
                    left: 0,
                }}
            >
                {loading ? (
                    <div className="flex justify-center items-center p-4">
                        <IonSpinner name="crescent" style={{ color: borderColor }} />
                    </div>
                ) : (
                    <IonList className="!p-0">
                        {filteredItems.map((item) => (
                            <IonItem
                                key={getValue(item)}
                                button
                                onMouseDown={() => { // usar onMouseDown evita que blur feche antes
                                    onSelect(item);
                                    setSearchText(getLabel(item));
                                    setIsFocused(false);
                                }}
                                style={{ color: textColor }}
                                className="hover:bg-gray-100 transition-colors"
                            >
                                <IonLabel>{getLabel(item)}</IonLabel>
                            </IonItem>
                        ))}
                        {filteredItems.length === 0 && (
                            <IonItem>
                                <IonLabel className="text-gray-500">
                                    Nenhum resultado encontrado
                                </IonLabel>
                            </IonItem>
                        )}
                    </IonList>
                )}
            </div>
        );
    };


    if (variant === "select") {
        return (
            <div
                ref={containerRef}
                className={`relative ${fullWidth ? "w-full" : "w-auto"} flex flex-col`} style={{ minHeight: 72 }}
            >
                {label && <label className="text-xs font-medium !pl-6">{label}</label>}
                <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder={placeholder}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 150)}
                    className="w-full !pr-4 !pl-8 !py-4 border outline-none placeholder-[var(--ion-color-medium)]"
                    style={{
                        borderColor,
                        borderRadius: borderRadiusInput,
                        color: textColor,
                    }}
                />
                {isFocused && renderSelectDropdown()}
            </div>
        );
    }

    // variante search mantém o IonSearchbar
    return (
        <div
            ref={containerRef}
            className={`relative ${fullWidth ? "w-full" : "w-auto"}`}
        >
            <IonSearchbar
                value={searchText}
                onIonInput={(e) => setSearchText(e.detail.value!)}
                placeholder={placeholder}
                onIonFocus={() => setIsFocused(true)}
                onIonBlur={() => setTimeout(() => setIsFocused(false), 150)}
                onIonClear={() => {
                    setSearchText("");
                    onSelect(undefined);
                }}
                style={{
                    "--background": "var(--ion-color-light)",
                    "--border-color": borderColor,
                    "--border-radius": borderRadiusInput,
                    color: textColor,
                }}
            />
            {isFocused && renderSelectDropdown()}
        </div>
    );
}

export default CBAutocomplete;