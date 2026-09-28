import { jsxs as m, jsx as l, Fragment as Re } from "react/jsx-runtime";
import { AgGridReact as $e } from "ag-grid-react";
import { useState as F, useCallback as M, useMemo as L, useRef as ee, useEffect as j } from "react";
import { themeQuartz as pe, colorSchemeDarkBlue as Be, colorSchemeLightCold as Le, ModuleRegistry as Fe, ClientSideRowModelModule as Ke, PaginationModule as Ae, RowSelectionModule as Ie, CellStyleModule as Ve, LocaleModule as je, TextEditorModule as Ge, NumberEditorModule as He, DateEditorModule as Oe, SelectEditorModule as Qe, LargeTextEditorModule as Ue, CheckboxEditorModule as We, CustomEditorModule as _e, UndoRedoEditModule as qe } from "ag-grid-community";
import { a as xe } from "./iconBase-DcKQz3bW.js";
import { D as te, C as U, F as ze, a as Je, b as me, c as Xe, d as Ye, A as Ze, m as et, e as tt } from "./CBFilterBar-C6DPy5H3.js";
function be(e) {
  const { col: n, render: t, children: s, align: a, mask: f, ...d } = e;
  return s && s.length > 0 ? {
    ...d,
    headerName: e.headerName,
    children: s.map((u) => be(u)),
    flex: n ?? 1
  } : {
    ...d,
    flex: n ?? 1,
    cellRenderer: t ? (u) => u.data ? t(u.data) : null : void 0,
    valueFormatter: f ? (u) => xe(u.value, f) : void 0,
    cellClass: a === "center" ? "ag-cell-center" : a === "right" ? "ag-cell-right" : "ag-cell-left",
    headerClass: a === "center" ? "ag-header-center" : a === "right" ? "ag-header-right" : "ag-header-left"
  };
}
const nt = pe.withPart(Be), lt = pe.withPart(Le), at = (e) => e ? nt : lt;
function Ce({
  selectionMode: e,
  getRowId: n
}) {
  const [t, s] = F([]), a = M(
    (c, o) => n ? n(c) : String(o),
    [n]
  ), f = M(
    (c, o) => {
      const i = a(c, o);
      return t.some(
        (b, E) => a(b, E) === i
      );
    },
    [t, a]
  ), d = M(
    (c, o) => {
      const i = a(c, o);
      s((b) => {
        const E = b.some(
          (C, v) => a(C, v) === i
        );
        return e === "single" ? E ? [] : [c] : E ? b.filter((C, v) => a(C, v) !== i) : [...b, c];
      });
    },
    [e, a]
  ), x = M(() => {
    s([]);
  }, []), u = M(
    (c) => {
      s((o) => {
        if (e === "single")
          return c.length ? [c[0]] : [];
        const i = [...o];
        return c.forEach((b) => {
          i.some(
            (C, v) => a(C, v) === a(b, v)
          ) || i.push(b);
        }), i;
      });
    },
    [e, a]
  );
  return {
    unselectRows: M(
      (c) => {
        s(
          (o) => o.filter(
            (i, b) => !c.some(
              (E, C) => a(i, b) === a(E, C)
            )
          )
        );
      },
      [a]
    ),
    selectRows: u,
    selectedRows: t,
    setSelectedRows: s,
    isSelected: f,
    toggleRow: d,
    clearSelection: x,
    getKey: a
  };
}
function ve({
  page: e,
  pageSize: n,
  totalRows: t,
  loading: s = !1,
  onPageChange: a,
  onPageSizeChange: f,
  isMobile: d = !1,
  theme: x,
  pageSizeOptions: u = [10, 20, 50],
  themeConfig: y
}) {
  const c = L(() => ({ ...te[x ?? "dark"] || te.dark, ...y }), [x, y]), o = Math.max(Math.ceil(t / n), 1);
  return /* @__PURE__ */ m(
    "div",
    {
      className: `flex items-center gap-1 px-4 py-3 text-sm ${c.classes.textPrimary} ${d ? "flex-col justify-center" : "flex-row justify-between"}`,
      children: [
        /* @__PURE__ */ m("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ m("span", { children: [
            "Página ",
            /* @__PURE__ */ l("strong", { className: "font-semibold", children: e + 1 }),
            " de",
            " ",
            /* @__PURE__ */ l("strong", { className: "font-semibold", children: o }),
            /* @__PURE__ */ l("span", { className: "mx-2", children: "|" }),
            "Total de ",
            /* @__PURE__ */ l("strong", { className: "font-semibold", children: t }),
            " ",
            "registros"
          ] }),
          s && !d && /* @__PURE__ */ m(
            "span",
            {
              className: `inline-flex items-center gap-1.5 text-xs ${c.classes.textPrimary} animate-pulse`,
              children: [
                /* @__PURE__ */ l("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
                "Carregando..."
              ]
            }
          )
        ] }),
        /* @__PURE__ */ m(
          "div",
          {
            className: d ? "flex flex-col gap-1 items-center" : "flex gap-4",
            children: [
              f ? /* @__PURE__ */ m("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ l("span", { className: `text-xs ${c.classes.textPrimary}`, children: "Linhas por página:" }),
                /* @__PURE__ */ l(
                  "select",
                  {
                    name: "pageSize",
                    value: n,
                    onChange: (i) => f(Number(i.target.value)),
                    className: `${c.classes.selectPagination} rounded-md px-2 py-1 text-xs font-medium outline-none cursor-pointer transition-all`,
                    children: u.map((i) => /* @__PURE__ */ l(
                      "option",
                      {
                        value: i,
                        className: c.classes.textPrimary,
                        children: i
                      },
                      i
                    ))
                  }
                )
              ] }) : null,
              /* @__PURE__ */ m("div", { children: [
                /* @__PURE__ */ l(
                  U,
                  {
                    children: "Anterior",
                    disabled: e === 0 || s,
                    onClick: () => a(e - 1),
                    color: c?.colorsPagination?.bgButtonPreviousPagination
                  }
                ),
                /* @__PURE__ */ l(
                  U,
                  {
                    children: "Próxima",
                    disabled: e + 1 >= o || s,
                    onClick: () => a(e + 1),
                    color: c?.colorsPagination?.bgButtonNextPagination
                  }
                )
              ] }),
              s && d && /* @__PURE__ */ m("span", { className: "inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 animate-pulse", children: [
                /* @__PURE__ */ l("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
                "Carregando..."
              ] })
            ]
          }
        )
      ]
    }
  );
}
function ie({
  selectedRows: e,
  onEdit: n,
  onDelete: t,
  actions: s = []
}) {
  return /* @__PURE__ */ m("div", { className: "flex items-center gap-2", children: [
    n && /* @__PURE__ */ l(
      U,
      {
        "aria-label": "Editar",
        color: "primary",
        iconStart: /* @__PURE__ */ l(ze, { size: 18 }),
        disabled: e.length !== 1,
        onClick: () => {
          e.length === 1 && n(e[0]);
        },
        children: ""
      }
    ),
    t && /* @__PURE__ */ l(
      U,
      {
        "aria-label": "Excluir",
        color: "danger",
        iconStart: /* @__PURE__ */ l(Je, { size: 18 }),
        disabled: e.length === 0,
        onClick: () => {
          e.forEach(t);
        },
        children: ""
      }
    ),
    s.map((a, f) => {
      const d = a.disabled ? a.disabled(e) : !1;
      return /* @__PURE__ */ l(
        U,
        {
          color: a.color ?? "secondary",
          iconStart: a.icon,
          disabled: d,
          onClick: () => {
            d || a.onClick(e);
          },
          children: a.children
        },
        f
      );
    })
  ] });
}
Fe.registerModules([
  Ke,
  Ae,
  Ie,
  Ve,
  je,
  Ge,
  He,
  Oe,
  Qe,
  Ue,
  We,
  _e,
  qe
]);
function fe({
  columns: e,
  data: n,
  pageSize: t = 5,
  emptyMessage: s = "Nenhum dado encontrado",
  getRowId: a,
  onEdit: f,
  onDelete: d,
  selectionMode: x = "single",
  theme: u,
  page: y,
  totalRows: c = 0,
  onPageChange: o,
  onPageSizeChange: i,
  loading: b = !1,
  singleClickEdit: E = !0,
  stopEditingWhenCellsLoseFocus: C = !0,
  onCellValueChanged: v,
  autoFocusFirstEditableCell: $ = !1,
  actions: P = []
}) {
  const W = L(() => at(u === "dark"), [u]), [ne, le] = F(0), K = y ?? ne, q = (h) => {
    o ? o(h) : le(h);
  }, G = c || n.length, { selectedRows: B, selectRows: A } = Ce({
    selectionMode: x,
    getRowId: a
  }), H = ee(null), I = ee(null), N = M(() => {
    const T = (H.current?.api?.getSelectedNodes() ?? []).map((V) => V.data).filter((V) => V != null);
    A(T);
  }, [A]), z = L(
    () => e.map((h) => be(h)),
    [e]
  ), J = L(
    () => a ? (h) => a(h.data) : void 0,
    [a]
  );
  j(() => {
    const h = (T) => {
      I.current && !I.current.contains(T.target) && H.current?.api?.deselectAll();
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []);
  const O = L(() => {
    if (o)
      return n;
    const h = K * t;
    return n.slice(h, h + t);
  }, [n, K, t, o]), X = M(() => {
    if (!$ || O.length === 0) return;
    const h = e.find((V) => V.editable);
    if (!h) return;
    const T = h.colId ?? (typeof h.field == "string" ? h.field : void 0);
    T && setTimeout(() => {
      document.activeElement instanceof HTMLElement && document.activeElement.blur(), setTimeout(() => {
        console.log("gridWrapperRef", I.current), console.log("colKey", T), H.current?.api?.startEditingCell({
          rowIndex: 0,
          colKey: T
        });
      }, 50);
    }, 0);
  }, [$, e, O.length]), ae = M(() => {
    X();
  }, [X]);
  return /* @__PURE__ */ m("div", { ref: I, className: "relative w-full", children: [
    /* @__PURE__ */ l(
      $e,
      {
        ref: H,
        rowData: O,
        getRowId: J,
        defaultColDef: { resizable: !1 },
        columnDefs: z,
        singleClickEdit: E,
        stopEditingWhenCellsLoseFocus: C,
        onCellValueChanged: v ? (h) => v(h) : void 0,
        onFirstDataRendered: ae,
        theme: W,
        animateRows: !0,
        rowSelection: x === "multiple" ? {
          mode: "multiRow",
          checkboxes: !0,
          headerCheckbox: !0,
          enableClickSelection: !0
        } : {
          mode: "singleRow",
          checkboxes: !1,
          enableClickSelection: !0
        },
        domLayout: "autoHeight",
        onSelectionChanged: N,
        overlayNoRowsTemplate: `<span class="text-white">${s}</span>`,
        localeText: {
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
    /* @__PURE__ */ l(
      ve,
      {
        page: K,
        pageSize: t,
        totalRows: G,
        loading: b,
        onPageChange: q,
        onPageSizeChange: i,
        theme: u
      }
    ),
    /* @__PURE__ */ l("div", { className: "absolute -top-2 right-2 -translate-y-1/2 flex gap-2 z-10", children: /* @__PURE__ */ l(
      ie,
      {
        selectedRows: B,
        onEdit: f,
        onDelete: d,
        actions: P
      }
    ) })
  ] });
}
function Ne(e) {
  const n = [];
  return e.forEach((t) => {
    if (t.children && t.children.length > 0) {
      n.push(...Ne(t.children));
      return;
    }
    n.push({
      headerName: t.headerName ?? "",
      field: t.field,
      colId: t.colId,
      align: t.align,
      render: t.render,
      valueGetter: t.valueGetter,
      mask: t.mask,
      editable: t.editable,
      cellEditor: t.cellEditor,
      cellEditorParams: t.cellEditorParams,
      singleClickEdit: t.singleClickEdit,
      onCellValueChanged: t.onCellValueChanged
    });
  }), n;
}
function st(e, n) {
  if (!n) return "-";
  const t = n.split(".").reduce((s, a) => {
    if (s != null)
      return s[a];
  }, e);
  return t == null || t === "" ? "-" : String(t);
}
function ce(e, n) {
  if (n.render) return n.render(e);
  const t = n.valueGetter ? n.valueGetter(e) : st(e, n.field);
  return t == null || t === "" ? "-" : n.mask ? xe(t, n.mask) : String(t);
}
function rt(e) {
  switch (e) {
    case "agNumberCellEditor":
      return "number";
    case "agDateCellEditor":
      return "date";
    case "agCheckboxCellEditor":
      return "checkbox";
    default:
      return "text";
  }
}
function re(e, n) {
  return e.editable ? typeof e.editable == "function" ? e.editable({ data: n }) : e.editable : !1;
}
function he({
  row: e,
  col: n,
  isEditing: t,
  onStartEdit: s,
  onCommit: a,
  onCancel: f,
  textClass: d,
  activeTheme: x
}) {
  const u = n.field, y = u ? e[u] : void 0, c = rt(n.cellEditor), o = n.cellEditorParams ?? {}, i = ee(null);
  j(() => {
    if (t) {
      const P = setTimeout(() => i.current?.focus(), 0);
      return () => clearTimeout(P);
    }
  }, [t]);
  const b = (P) => {
    P.key === "Enter" ? (P.preventDefault(), a(i.current?.value ?? "")) : P.key === "Escape" && (P.preventDefault(), f());
  }, E = () => {
    a(i.current?.value ?? "");
  }, C = () => {
    n.singleClickEdit && !t && s();
  }, v = () => {
    !n.singleClickEdit && !t && s();
  };
  if (t)
    return /* @__PURE__ */ l(
      "input",
      {
        ref: i,
        type: c,
        defaultValue: y != null ? String(y) : "",
        min: o.min !== void 0 ? Number(o.min) : void 0,
        max: o.max !== void 0 ? Number(o.max) : void 0,
        step: o.precision !== void 0 ? o.precision === 0 ? 1 : Math.pow(10, -Number(o.precision)) : void 0,
        onKeyDown: b,
        onBlur: E,
        className: `
          w-24 h-9 
          px-3 
          ${x.classes.wrapper} 
          border border-gray-500! 
          text-center text-sm font-medium
          rounded-md outline-none
           no-number-spinner
          `
      }
    );
  const $ = ce(e, n);
  return /* @__PURE__ */ l(
    "span",
    {
      className: `text-xs font-medium cursor-pointer select-none ${d} ${n.singleClickEdit ? "" : "cursor-text"}`,
      onClick: C,
      onDoubleClick: v,
      title: n.singleClickEdit ? "Clique para editar" : "Clique duplo para editar",
      children: $
    }
  );
}
function ge({
  columns: e,
  data: n,
  pageSize: t = 5,
  emptyMessage: s = "Nenhum dado encontrado",
  getRowId: a,
  onEdit: f,
  onDelete: d,
  selectionMode: x = "single",
  theme: u,
  themeConfig: y,
  page: c,
  totalRows: o = 0,
  onPageChange: i,
  onPageSizeChange: b,
  loading: E = !1,
  defaultExpanded: C = !1,
  singleClickEdit: v = !0,
  onCellValueChanged: $,
  autoFocusFirstEditableCell: P = !1,
  actions: W = []
}) {
  const [ne, le] = F(
    {}
  ), [K, q] = F(0), [G, B] = F(null), A = c ?? K, H = (r) => {
    i ? i(r) : q(r);
  }, I = o || n.length, N = L(() => {
    if (i)
      return n;
    const r = A * t;
    return n.slice(r, r + t);
  }, [n, A, t, i]), {
    selectedRows: z,
    isSelected: J,
    toggleRow: O,
    clearSelection: X,
    selectRows: ae,
    unselectRows: h,
    getKey: T
  } = Ce({
    selectionMode: x,
    getRowId: a
  }), V = ee(null), p = L(() => ({ ...te[u ?? "dark"] || te.dark, ...y }), [u, y]), ye = L(() => Ne(e).map((g) => ({
    ...g,
    singleClickEdit: g.singleClickEdit ?? v
  })), [e, v]), [S, ...Y] = ye, oe = Math.max(1, Math.ceil(I / t));
  j(() => {
    const r = Math.max(oe - 1, 0);
    K > r && q(r);
  }, [oe, K]);
  const se = N.length > 0 && N.every((r, g) => J(r, g)), Ee = M(() => {
    x === "multiple" && (se ? h(N) : ae(N));
  }, [se, N, x]), we = (r) => {
    le((g) => {
      const k = g[r] ?? C;
      return { ...g, [r]: !k };
    });
  }, Pe = !!(f || d || W.length), Q = x === "multiple";
  j(() => {
    X();
  }, [A]), j(() => {
    if (!P || N.length === 0) return;
    const r = N[0], g = T(r, 0), D = [S, ...Y].find(
      (R) => R ? re(R, r) : !1
    );
    D && D.field && B({ rowKey: g, field: D.field });
  }, [P, N.length]);
  const de = M(
    (r, g, k) => {
      B(null);
      const D = g.field;
      if (!D) return;
      const R = r[D];
      let _ = k;
      if (g.cellEditor === "agNumberCellEditor" && (_ = k === "" ? null : Number(k)), _ === R) return;
      const Z = {
        data: r,
        oldValue: R,
        newValue: _,
        colDef: {
          field: D,
          colId: g.colId,
          headerName: g.headerName
        }
      };
      g.onCellValueChanged ? g.onCellValueChanged(Z) : $ && $(Z);
    },
    [$]
  );
  return /* @__PURE__ */ m(Re, { children: [
    /* @__PURE__ */ m(
      "div",
      {
        ref: V,
        className: `w-full flex flex-col p-3 rounded-xl border transition-all duration-200 ${p.classes.wrapper}`,
        children: [
          /* @__PURE__ */ m("div", { className: "flex flex-col gap-3.5 mb-4", children: [
            Pe && Q && /* @__PURE__ */ m("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ m(
                "span",
                {
                  className: `text-xs px-2.5 py-1 rounded-full font-bold transition-all ${p.classes.badge}`,
                  children: [
                    z.length,
                    " selecionado(s)"
                  ]
                }
              ),
              /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ l(
                ie,
                {
                  selectedRows: z,
                  onEdit: f,
                  onDelete: d,
                  actions: W
                }
              ) })
            ] }),
            Q && N.length > 0 && /* @__PURE__ */ m("label", { className: "flex items-center gap-2 px-1 py-0.5 select-none cursor-pointer", children: [
              /* @__PURE__ */ l(
                me,
                {
                  checked: se,
                  onChange: Ee,
                  color: "primary",
                  className: p.classes.checkboxBorder
                }
              ),
              /* @__PURE__ */ m(
                "span",
                {
                  className: `text-xs font-semibold ${p.classes.textMuted}`,
                  children: [
                    "Selecionar todos desta página (",
                    N.length,
                    ")"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l("div", { className: "flex flex-col gap-1 min-h-30", children: N.length === 0 ? /* @__PURE__ */ l("div", { className: "flex flex-col items-center justify-center py-10 text-center", children: /* @__PURE__ */ l(
            "span",
            {
              className: `text-sm font-medium ${p.classes.textMuted}`,
              children: s
            }
          ) }) : N.map((r, g) => {
            const k = T(r, g), D = J(r, g), R = ne[k] ?? C, _ = S && re(S, r), Z = G?.rowKey === k && G?.field === S?.field;
            return /* @__PURE__ */ m(
              "div",
              {
                className: `rounded-xl border px-4 py-2 transition-all duration-200 ${p.classes.card} ${D && Q ? p.classes.cardSelected : ""}`,
                children: [
                  /* @__PURE__ */ m("div", { className: "flex items-start gap-3.5", children: [
                    Q && /* @__PURE__ */ l(
                      "div",
                      {
                        "aria-label": "Selecionar registro",
                        onClick: () => O(r, g),
                        className: "pt-1 shrink-0 cursor-pointer",
                        children: /* @__PURE__ */ l(
                          me,
                          {
                            checked: D,
                            onChange: () => {
                            },
                            color: "primary",
                            className: p.classes.checkboxBorder
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ m(
                      "div",
                      {
                        className: `flex-1 min-w-0 ${Q ? "cursor-pointer" : ""}`,
                        onClick: () => Q && O(r, g),
                        children: [
                          /* @__PURE__ */ l(
                            "div",
                            {
                              className: `text-xs font-bold uppercase tracking-widest mb-0.5 ${p.classes.textMuted}`,
                              children: S?.headerName || "Registro"
                            }
                          ),
                          S && _ ? /* @__PURE__ */ l(
                            he,
                            {
                              row: r,
                              col: S,
                              isEditing: Z,
                              onStartEdit: () => B({
                                rowKey: k,
                                field: S.field
                              }),
                              activeTheme: p,
                              onCommit: (w) => de(r, S, String(w)),
                              onCancel: () => B(null),
                              textClass: p.classes.textPrimary
                            }
                          ) : /* @__PURE__ */ l(
                            "div",
                            {
                              className: `text-sm font-bold truncate ${p.classes.textPrimary}`,
                              children: S ? ce(r, S) : "-"
                            }
                          )
                        ]
                      }
                    ),
                    Y.length > 0 && /* @__PURE__ */ l(
                      U,
                      {
                        "aria-label": R ? "Recolher detalhes" : "Expandir detalhes",
                        onClick: () => we(k),
                        iconEnd: R ? /* @__PURE__ */ l(
                          Xe,
                          {
                            size: 18,
                            className: `${p.classes.textPrimary}`
                          }
                        ) : /* @__PURE__ */ l(
                          Ye,
                          {
                            size: 18,
                            className: `${p.classes.textPrimary}`
                          }
                        ),
                        variant: "clear",
                        activeColor: "transparent",
                        size: "small",
                        children: ""
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l(Ze, { initial: !1, children: R && Y.length > 0 && /* @__PURE__ */ m(
                    et.div,
                    {
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      exit: { opacity: 0, height: 0 },
                      transition: {
                        duration: 0.25,
                        ease: "easeInOut"
                      },
                      className: `mt-4 pt-3.5 px-2 border-t space-y-3 animate-slide-down ${p.classes.divider}`,
                      children: [
                        Y.map((w, Se) => {
                          if (!w) return null;
                          const ue = w.align === "center" ? "text-center" : w.align === "right" ? "text-right" : "text-left", Me = re(w, r), Te = G?.rowKey === k && G?.field === w.field;
                          return /* @__PURE__ */ m(
                            "div",
                            {
                              className: "flex justify-between items-center gap-2 py-0.5",
                              children: [
                                /* @__PURE__ */ l(
                                  "span",
                                  {
                                    className: `text-xs font-semibold truncate ${p.classes.textMuted}`,
                                    children: w.headerName
                                  }
                                ),
                                Me ? /* @__PURE__ */ l(
                                  he,
                                  {
                                    row: r,
                                    col: w,
                                    activeTheme: p,
                                    isEditing: Te,
                                    onStartEdit: () => B({
                                      rowKey: k,
                                      field: w.field
                                    }),
                                    onCommit: (De) => de(r, w, String(De)),
                                    onCancel: () => B(null),
                                    textClass: `${ue} ${p.classes.textPrimary}`
                                  }
                                ) : /* @__PURE__ */ l(
                                  "span",
                                  {
                                    className: `col-span-2 text-xs font-medium break-all ${ue} ${p.classes.textPrimary}`,
                                    children: ce(r, w)
                                  }
                                )
                              ]
                            },
                            Se
                          );
                        }),
                        /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ l(
                          ie,
                          {
                            selectedRows: [r],
                            onEdit: f,
                            onDelete: d,
                            actions: W
                          }
                        ) })
                      ]
                    }
                  ) })
                ]
              },
              k
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ l(
      ve,
      {
        page: A,
        pageSize: t,
        totalRows: I,
        loading: E,
        onPageChange: H,
        onPageSizeChange: b,
        theme: u,
        isMobile: !0,
        themeConfig: y
      }
    )
  ] });
}
function it(e) {
  const n = () => typeof window > "u" ? !1 : window.matchMedia(e).matches, [t, s] = F(n);
  return j(() => {
    const a = window.matchMedia(e), f = (d) => {
      s(d.matches);
    };
    return s(a.matches), a.addEventListener("change", f), () => {
      a.removeEventListener("change", f);
    };
  }, [e]), t;
}
function ke(e) {
  const [n, t] = F(
    e ?? (document.documentElement.classList.contains("dark") ? "dark" : "light")
  );
  return j(() => {
    if (e) {
      t(e);
      return;
    }
    const s = new MutationObserver(() => {
      t(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    });
    return s.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class"]
    }), () => s.disconnect();
  }, [e]), n;
}
function ct(e) {
  const n = it("(max-width: 768px)"), { modeTable: t = "auto" } = e, s = ke(e.theme);
  return t === "mobile" ? /* @__PURE__ */ l(ge, { ...e, theme: s }) : t === "desktop" ? /* @__PURE__ */ l(fe, { ...e, theme: s }) : n ? /* @__PURE__ */ l(ge, { ...e, theme: s }) : /* @__PURE__ */ l(fe, { ...e, theme: s });
}
function gt({
  data: e,
  filterColumns: n,
  filterPlaceholder: t = "Buscar...",
  filterClassName: s,
  theme: a,
  ...f
}) {
  const [d, x] = F(e), u = ke(a);
  return /* @__PURE__ */ m("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ l(
      tt,
      {
        data: e,
        columns: n,
        placeholder: t,
        onChange: x,
        className: s,
        theme: u
      }
    ),
    /* @__PURE__ */ l(ct, { ...f, data: d, theme: a })
  ] });
}
export {
  ct as CBDataTable,
  fe as CBDataTableDesktop,
  ge as CBDataTableMobile,
  gt as CBDataTableWithFilter
};
