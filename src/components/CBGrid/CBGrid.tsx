import clsx from "clsx";
import type { PropsWithChildren } from "react";
import { gapMap, gapXMap, gapYMap, type GridGap } from "./grid.utils";

interface CBGridProps extends PropsWithChildren {
  /**
   * Espaçamento entre linhas e colunas.
   *
   * Ignorado caso `gapX` ou `gapY` sejam informados.
   */
  gap?: GridGap;

  /**
   * Espaçamento horizontal entre as colunas.
   */
  gapX?: GridGap;

  /**
   * Espaçamento vertical entre as linhas.
   */
  gapY?: GridGap;

  className?: string;
}

function CBGrid({ children, gap = 4, gapX, gapY, className }: CBGridProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 md:grid-cols-12",
        gapX ? gapXMap[gapX] : gapMap[gap],
        gapY ? gapYMap[gapY] : undefined,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default CBGrid;
