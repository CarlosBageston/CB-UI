import { jsxs as p, jsx as a } from "react/jsx-runtime";
import { C as b, F as P, a as z } from "./index.esm-DfvT663v.js";
import { AgGridReact as M } from "ag-grid-react";
import { themeQuartz as w, colorSchemeDarkBlue as D, colorSchemeLightCold as L, ModuleRegistry as T, ClientSideRowModelModule as y, PaginationModule as A } from "ag-grid-community";
import { useState as C, useEffect as S, useRef as v, useMemo as B } from "react";
const E = w.withPart(D), G = w.withPart(L), m = (t) => t ? E : G, F = (t) => {
  const [l, n] = C(
    m(t === "dark")
  );
  return S(() => {
    if (t) {
      n(m(t === "dark"));
      return;
    }
    const o = new MutationObserver(() => {
      const i = document.documentElement.classList.contains("dark");
      n(m(i));
    });
    return o.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class"]
    }), () => o.disconnect();
  }, [t]), l;
};
T.registerModules([y, A]);
function W({
  columns: t,
  data: l,
  pageSize: n = 5,
  emptyMessage: o = "Nenhum dado encontrado",
  onEdit: i,
  onDelete: h
}) {
  const N = F("dark"), [r, g] = C(null), s = v(null), d = v(null), R = () => {
    const e = s.current?.api.getSelectedNodes();
    g(e?.[0]?.data ?? null);
  }, f = (e) => {
    const c = t.reduce((u, x) => u + (x.col ?? 1), 0);
    return e.children && e.children.length > 0 ? {
      headerName: e.headerName,
      children: e.children.map(f),
      flex: e.col ?? 1
    } : {
      field: e.field,
      headerName: e.headerName,
      flex: (e.col ?? 1) / c * 12,
      // 12 colunas
      cellRenderer: e.render ? (u) => e.render(u.data) : void 0,
      valueGetter: e.valueGetter,
      colId: e.colId,
      sortable: e.sortable,
      cellClass: e.align === "center" ? "ag-cell-center" : e.align === "right" ? "ag-cell-right" : "ag-cell-left"
    };
  }, k = B(
    () => t.map(f),
    [t]
  );
  return S(() => {
    const e = (c) => {
      d.current && !d.current.contains(c.target) && (g(null), s.current?.api.deselectAll());
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, []), /* @__PURE__ */ p("div", { ref: d, className: "relative w-full", children: [
    /* @__PURE__ */ a(
      M,
      {
        ref: s,
        rowData: l,
        defaultColDef: { resizable: !1 },
        columnDefs: k,
        theme: N,
        animateRows: !0,
        rowSelection: "single",
        domLayout: "autoHeight",
        onSelectionChanged: R,
        pagination: !0,
        paginationPageSize: n,
        paginationAutoPageSize: !0,
        overlayNoRowsTemplate: `<span class="text-white">${o || "Nenhum dado encontrado"}</span>`,
        localeText: {
          // Paginação
          page: "Página",
          of: "de",
          to: "até",
          next: "Próxima",
          previous: "Anterior",
          first: "Primeira",
          last: "Última"
        }
      }
    ),
    /* @__PURE__ */ p("div", { className: "absolute -top-2 right-2 -translate-y-1/2 flex gap-2 z-10", children: [
      i && /* @__PURE__ */ a(
        b,
        {
          children: "",
          iconStart: /* @__PURE__ */ a(P, { size: 18 }),
          color: "primary",
          disabled: !r,
          onClick: () => r && i?.(r)
        }
      ),
      h && /* @__PURE__ */ a(
        b,
        {
          children: "",
          iconStart: /* @__PURE__ */ a(z, { size: 18 }),
          color: "danger",
          disabled: !r,
          onClick: () => r && h?.(r)
        }
      )
    ] })
  ] });
}
export {
  W as CBDataTable,
  F as useAGGridTheme
};
