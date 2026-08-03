import { useCallback, useEffect, useRef, useState } from "react";

import { useDebouncedCallback } from "./useDebouncedCallback";
import type { CBAutocompleteStatus } from "./types";

interface UseAutocompleteParams<T> {
  items?: T[];
  getLabel: (item: T) => string;
  onSearch?: (text: string) => Promise<T[]>;
  debounce?: number;
  minSearchLength?: number;
  value?: T | null;
}

export function useAutocomplete<T>({
  items,
  getLabel,
  onSearch,
  debounce = 500,
  minSearchLength = 2,
  value,
}: UseAutocompleteParams<T>) {
  const isRemote = typeof onSearch === "function";

  const [query, setQuery] = useState<string>(value ? getLabel(value) : "");
  const [results, setResults] = useState<T[]>([]);
  const [status, setStatus] = useState<CBAutocompleteStatus>("idle");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  // Cache de buscas remotas: texto normalizado -> resultado.
  const cacheRef = useRef<Map<string, T[]>>(new Map());

  // Identificador incremental usado para descartar respostas antigas
  // (o usuário pode continuar digitando enquanto uma requisição está em voo).
  const requestIdRef = useRef(0);

  // Sincroniza o texto do input quando o `value` controlado muda por fora.
  useEffect(() => {
    setQuery(value ? getLabel(value) : "");
  }, [value]);

  // Sempre que o conjunto de resultados muda, o índice de destaque do
  // teclado deixa de fazer sentido e é resetado.
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [results]);

  const runRemoteSearch = useCallback(
    async (text: string) => {
      const normalized = text.trim().toLowerCase();
      const cached = cacheRef.current.get(normalized);

      if (cached) {
        setResults(cached);
        setStatus(cached.length === 0 ? "empty" : "results");
        return;
      }

      const currentRequestId = ++requestIdRef.current;
      setStatus("loading");

      try {
        const data = await onSearch!(text);

        // Resposta obsoleta: uma busca mais nova já está em andamento.
        if (currentRequestId !== requestIdRef.current) return;

        cacheRef.current.set(normalized, data);
        setResults(data);
        setStatus(data.length === 0 ? "empty" : "results");
      } catch {
        if (currentRequestId !== requestIdRef.current) return;
        setResults([]);
        setStatus("error");
      }
    },
    [onSearch],
  );

  const { debounced: debouncedSearch, cancel: cancelDebounce } =
    useDebouncedCallback(runRemoteSearch, debounce);

  const runLocalFilter = useCallback(
    (text: string) => {
      const source = items ?? [];
      const normalized = text.trim().toLowerCase();

      if (!normalized) {
        setResults(source);
        setStatus(source.length === 0 ? "empty" : "results");
        return;
      }

      const filtered = source.filter((item) =>
        getLabel(item).toLowerCase().includes(normalized),
      );

      setResults(filtered);
      setStatus(filtered.length === 0 ? "empty" : "results");
    },
    [items, getLabel],
  );

  // Mantém a lista local sincronizada caso a prop `items` mude enquanto
  // o componente já possui um texto de busca digitado.
  useEffect(() => {
    if (!isRemote) {
      runLocalFilter(query);
    }
  }, [items]);

  const handleQueryChange = useCallback(
    (text: string) => {
      setQuery(text);
      setIsOpen(true);

      if (isRemote) {
        if (text.trim().length < minSearchLength) {
          cancelDebounce();
          // Invalida qualquer requisição em voo — a resposta, quando
          // chegar, será ignorada.
          requestIdRef.current++;
          setResults([]);
          setStatus("idle");
          return;
        }

        debouncedSearch(text);
      } else {
        runLocalFilter(text);
      }
    },
    [
      isRemote,
      minSearchLength,
      debouncedSearch,
      cancelDebounce,
      runLocalFilter,
    ],
  );

  const openWithCurrentItems = useCallback(() => {
    setIsOpen(true);

    if (!isRemote) {
      runLocalFilter(query);
      return;
    }

    if (status === "idle" && query.trim().length >= minSearchLength) {
      debouncedSearch(query);
    }
  }, [
    isRemote,
    runLocalFilter,
    query,
    status,
    minSearchLength,
    debouncedSearch,
  ]);

  const close = useCallback(() => {
    setIsOpen(false);
    setHighlightedIndex(-1);
  }, []);

  const clearCache = useCallback(() => {
    cacheRef.current.clear();
  }, []);

  return {
    query,
    setQuery,
    results,
    status,
    isOpen,
    setIsOpen,
    highlightedIndex,
    setHighlightedIndex,
    handleQueryChange,
    openWithCurrentItems,
    close,
    clearCache,
    isRemote,
  };
}
