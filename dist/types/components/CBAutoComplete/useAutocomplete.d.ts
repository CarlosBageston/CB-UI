import type { CBAutocompleteStatus } from "./types";
interface UseAutocompleteParams<T> {
    items?: T[];
    getLabel: (item: T) => string;
    onSearch?: (text: string) => Promise<T[]>;
    debounce?: number;
    minSearchLength?: number;
    value?: T | null;
}
export declare function useAutocomplete<T>({ items, getLabel, onSearch, debounce, minSearchLength, value, }: UseAutocompleteParams<T>): {
    query: string;
    setQuery: import("react").Dispatch<import("react").SetStateAction<string>>;
    results: T[];
    status: CBAutocompleteStatus;
    isOpen: boolean;
    setIsOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    highlightedIndex: number;
    setHighlightedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    handleQueryChange: (text: string) => void;
    openWithCurrentItems: () => void;
    close: () => void;
    clearCache: () => void;
    isRemote: boolean;
};
export {};
