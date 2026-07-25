import clsx from "clsx";
import type { PropsWithChildren } from "react";
import {
  smColSpan,
  mdColSpan,
  lgColSpan,
  xlColSpan,
  type GridSpan,
} from "./grid.utils";

interface CBGridItemProps extends PropsWithChildren {
  /**
   * Define quantas colunas o item ocupa em telas pequenas (≥ 640px).
   */
  sm?: GridSpan;

  /**
   * Define quantas colunas o item ocupa em telas médias (≥ 768px).
   *
   * Padrão: 12 colunas.
   */
  md?: GridSpan;

  /**
   * Define quantas colunas o item ocupa em telas grandes (≥ 1024px).
   */
  lg?: GridSpan;

  /**
   * Define quantas colunas o item ocupa em telas extra grandes (≥ 1280px).
   */
  xl?: GridSpan;

  className?: string;
}

/**
 * Item utilizado dentro do `CBGrid`.
 *
 * Permite definir quantas colunas o conteúdo ocupará em cada tamanho de tela.
 *
 * Breakpoints:
 * - **sm**: telas pequenas (≥ 640px)
 * - **md**: telas médias (≥ 768px)
 * - **lg**: telas grandes (≥ 1024px)
 * - **xl**: telas extra grandes (≥ 1280px)
 *
 * Se um breakpoint não for informado, será utilizado o valor do breakpoint default.
 *
 * Exemplo:
 * ```tsx
 * <CBGridItem md={6} lg={4}>
 *   ...
 * </CBGridItem>
 * ```
 */
function CBGridItem({
  children,
  sm,
  md = 12,
  lg,
  xl,
  className,
}: CBGridItemProps) {
  return (
    <div
      className={clsx(
        sm && smColSpan[sm],
        mdColSpan[md],
        lg && lgColSpan[lg],
        xl && xlColSpan[xl],
        className,
      )}
    >
      {children}
    </div>
  );
}

export default CBGridItem;
