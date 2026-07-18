import { useCallback, useState } from "react";

interface UseDataTableSelectionProps<T> {
  selectionMode: "single" | "multiple";
  getRowId?: (row: T) => string;
  onDelete?: (row: T) => void;
}

export function useDataTableSelection<T>({
  selectionMode,
  getRowId,
  onDelete,
}: UseDataTableSelectionProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  /**
   * Retorna um identificador único para a linha.
   * Caso nenhum identificador seja informado, utiliza o índice da lista.
   */
  const getKey = useCallback(
    (row: T, index: number) => (getRowId ? getRowId(row) : String(index)),
    [getRowId],
  );

  /**
   * Verifica se uma linha está selecionada.
   */
  const isSelected = useCallback(
    (row: T, index: number) => {
      const key = getKey(row, index);

      return selectedRows.some(
        (selected, idx) => getKey(selected, idx) === key,
      );
    },
    [selectedRows, getKey],
  );

  /**
   * Seleciona ou remove a seleção de uma linha.
   * No modo "single" apenas uma linha pode ficar selecionada.
   */
  const toggleRow = useCallback(
    (row: T, index: number) => {
      const key = getKey(row, index);

      setSelectedRows((prev) => {
        const exists = prev.some(
          (selected, idx) => getKey(selected, idx) === key,
        );

        if (selectionMode === "single") {
          return exists ? [] : [row];
        }

        return exists
          ? prev.filter((selected, idx) => getKey(selected, idx) !== key)
          : [...prev, row];
      });
    },
    [selectionMode, getKey],
  );

  /**
   * Remove a seleção de todas as linhas.
   */
  const clearSelection = useCallback(() => {
    setSelectedRows([]);
  }, []);

  /**
   * Executa a ação de exclusão para todas as linhas selecionadas
   * e limpa a seleção ao finalizar.
   */
  const deleteSelected = useCallback(() => {
    if (!onDelete) return;

    selectedRows.forEach(onDelete);
    clearSelection();
  }, [selectedRows, onDelete, clearSelection]);

  /**
   * Adiciona uma ou mais linhas à seleção.
   * As linhas que já estiverem selecionadas são ignoradas.
   */
  const selectRows = useCallback(
    (rows: T[]) => {
      setSelectedRows((prev) => {
        if (selectionMode === "single") {
          return rows.length ? [rows[0]] : [];
        }

        const next = [...prev];

        rows.forEach((row) => {
          const exists = next.some(
            (selected, index) => getKey(selected, index) === getKey(row, index),
          );

          if (!exists) {
            next.push(row);
          }
        });

        return next;
      });
    },
    [selectionMode, getKey],
  );

  /**
   * Remove da seleção as linhas informadas.
   */
  const unselectRows = useCallback(
    (rows: T[]) => {
      setSelectedRows((prev) =>
        prev.filter(
          (selected, index) =>
            !rows.some(
              (row, rowIndex) =>
                getKey(selected, index) === getKey(row, rowIndex),
            ),
        ),
      );
    },
    [getKey],
  );

  return {
    unselectRows,
    selectRows,
    selectedRows,
    setSelectedRows,
    isSelected,
    toggleRow,
    clearSelection,
    deleteSelected,
    getKey,
  };
}
