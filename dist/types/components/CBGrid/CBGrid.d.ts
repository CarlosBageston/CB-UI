import type { PropsWithChildren } from "react";
import { type GridGap } from "./grid.utils";
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
declare function CBGrid({ children, gap, gapX, gapY, className }: CBGridProps): import("react").JSX.Element;
export default CBGrid;
