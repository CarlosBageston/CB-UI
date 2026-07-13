import { useCallback, useMemo } from "react";
import type { CBInputMask, CBInputMaskFn } from "../types/components";

const defaultMasks: Record<CBInputMask, CBInputMaskFn> = {
  tel: (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (!digits) return { formatted: "", raw: "" };

    let formatted = `(${digits.substring(0, 2)}) `;
    formatted +=
      digits.length > 6
        ? `${digits.substring(2, 7)}-${digits.substring(7)}`
        : digits.substring(2);

    return { formatted, raw: digits };
  },
  cnpj: (value) => {
    // Remove tudo que não é alfanumérico e converte letras para maiúsculo
    const clean = value
      .replace(/[^a-zA-Z0-9]/g, "")
      .toUpperCase()
      .slice(0, 14);

    if (!clean) return { formatted: "", raw: "" };

    // Aplica a máscara XX.XXX.XXX/XXXX-XX
    let formatted = clean.substring(0, 2);
    if (clean.length > 2) formatted += `.${clean.substring(2, 5)}`;
    if (clean.length > 5) formatted += `.${clean.substring(5, 8)}`;
    if (clean.length > 8) formatted += `/${clean.substring(8, 12)}`;
    if (clean.length > 12) formatted += `-${clean.substring(12, 14)}`;

    return { formatted, raw: clean };
  },

  cep: (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 8);
    return {
      formatted:
        digits.length > 5
          ? `${digits.substring(0, 5)}-${digits.substring(5)}`
          : digits,
      raw: digits,
    };
  },

  currency: (value) => {
    const digits = value.replace(/\D/g, "");
    if (!digits) return { formatted: "", raw: "" };

    const numeric = parseFloat(digits) / 100;
    if (isNaN(numeric)) return { formatted: "", raw: "" };

    return {
      formatted: Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(numeric),
      raw: numeric.toFixed(2),
    };
  },
};

export function resolveMask(
  mask?: CBInputMask | CBInputMaskFn,
  custom?: Partial<typeof defaultMasks>,
): CBInputMaskFn | undefined {
  if (!mask) return undefined;
  if (typeof mask === "function") return mask;
  return custom?.[mask] ?? defaultMasks[mask];
}

export function useInputMask(
  mask: CBInputMask | CBInputMaskFn | undefined,
  onChange?: (value: string) => void,
  onRawChange?: (raw: string) => void,
  customMasks?: Record<string, CBInputMaskFn>,
) {
  const maskFn = useMemo(
    () => resolveMask(mask, customMasks),
    [mask, customMasks],
  );

  const handleChange = useCallback(
    (value: string) => {
      if (!maskFn) {
        onChange?.(value);
        return;
      }

      const { formatted, raw } = maskFn(value);
      onChange?.(formatted);
      onRawChange?.(raw);
    },
    [maskFn, onChange, onRawChange],
  );

  const inputMode = useMemo(() => {
    if (mask === "tel" || mask === "cep" || mask === "currency")
      return "numeric";
    if (mask === "cnpj") return "text";
    return undefined;
  }, [mask]);

  return { handleChange, inputMode } as const;
}
