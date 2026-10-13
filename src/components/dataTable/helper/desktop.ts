import type {
  CellClassParams,
  ColDef,
  ColGroupDef,
  ICellRendererParams,
} from "ag-grid-community";
import type { CBTableColumn } from "../../../datatable";
import { applyMask } from "../../../hooks/useInputMask";

/**
 * Converte uma CBTableColumn (nossa API simplificada) em um ColDef/ColGroupDef
 * do AG Grid.
 *
 * Ponto importante: fazemos spread das propriedades "cruas" do ColDef
 * (sortable, filter, editable, pinned, valueGetter, etc.) que vierem em
 * `col`, e SÓ DEPOIS sobrescrevemos o que o CBDataTable precisa controlar
 * (flex, cellRenderer, cellClass). Isso evita que propriedades nativas do
 * AG Grid que o consumidor tenha setado sejam silenciosamente descartadas
 * (o problema que existia na versão anterior, que reconstruía o objeto do
 * zero escolhendo campo por campo).
 */
export function mapColumn<T>(
  col: CBTableColumn<T>,
): ColDef<T> | ColGroupDef<T> {
  const {
    col: colSpan,
    render,
    children,
    align,
    mask,
    // Só usado no mobile; removido para não chegar ao AG Grid
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mobile: _mobile,
    ...colDefRest
  } = col;

  if (children && children.length > 0) {
    return {
      ...colDefRest,
      headerName: col.headerName,
      children: children.map((child) => mapColumn(child)),
      flex: colSpan ?? 1,
    };
  }

  const headerClass =
    align === "center"
      ? "ag-header-center"
      : align === "right"
        ? "ag-header-right"
        : "ag-header-left";
  const userCellClass = colDefRest.cellClass;
  const mergedCellClass = (params: CellClassParams<T>) => {
    const extra =
      typeof userCellClass === "function"
        ? userCellClass(params)
        : userCellClass;

    return [
      headerClass,
      ...(Array.isArray(extra) ? extra : extra ? [extra] : []),
    ];
  };
  return {
    ...colDefRest,
    flex: colSpan ?? 1,
    cellRenderer: render
      ? (params: ICellRendererParams<T>) =>
          params.data ? render(params.data) : null
      : undefined,
    valueFormatter: mask
      ? (params) => applyMask(params.value, mask)
      : colDefRest.valueFormatter,
    cellClass: mergedCellClass,
    headerClass,
  };
}
