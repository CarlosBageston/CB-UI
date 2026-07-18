interface UseDataTableSelectionProps<T> {
    selectionMode: "single" | "multiple";
    getRowId?: (row: T) => string;
    onDelete?: (row: T) => void;
}
export declare function useDataTableSelection<T>({ selectionMode, getRowId, onDelete, }: UseDataTableSelectionProps<T>): {
    unselectRows: (rows: T[]) => void;
    selectRows: (rows: T[]) => void;
    selectedRows: T[];
    setSelectedRows: import("react").Dispatch<import("react").SetStateAction<T[]>>;
    isSelected: (row: T, index: number) => boolean;
    toggleRow: (row: T, index: number) => void;
    clearSelection: () => void;
    deleteSelected: () => void;
    getKey: (row: T, index: number) => string;
};
export {};
