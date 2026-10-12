import { jsxs as u, jsx as l, Fragment as $e } from "react/jsx-runtime";
import { AgGridReact as Be } from "ag-grid-react";
import { useState as A, useCallback as D, useMemo as B, useRef as te, useEffect as V } from "react";
import { themeQuartz as xe, colorSchemeDarkBlue as Ae, colorSchemeLightCold as Le, ModuleRegistry as Fe, ClientSideRowModelModule as Ie, PaginationModule as Ke, RowSelectionModule as Ve, CellStyleModule as je, LocaleModule as Ge, TextEditorModule as He, NumberEditorModule as Oe, DateEditorModule as Qe, SelectEditorModule as Ue, LargeTextEditorModule as We, CheckboxEditorModule as _e, CustomEditorModule as qe, UndoRedoEditModule as ze } from "ag-grid-community";
import { a as Ce } from "./iconBase-DcKQz3bW.js";
import { D as ne, C as W, F as Je, a as Xe, b as fe, c as Ye, d as Ze, A as et, m as tt, e as nt } from "./CBFilterBar-C6DPy5H3.js";
function be(e) {
  const { col: n, render: t, children: s, align: a, mask: m, ...d } = e;
  if (s && s.length > 0)
    return {
      ...d,
      headerName: e.headerName,
      children: s.map((r) => be(r)),
      flex: n ?? 1
    };
  const p = a === "center" ? "ag-header-center" : a === "right" ? "ag-header-right" : "ag-header-left", g = d.cellClass, b = (r) => {
    const c = typeof g == "function" ? g(r) : g;
    return [
      p,
      ...Array.isArray(c) ? c : c ? [c] : []
    ];
  };
  return {
    ...d,
    flex: n ?? 1,
    cellRenderer: t ? (r) => r.data ? t(r.data) : null : void 0,
    valueFormatter: m ? (r) => Ce(r.value, m) : d.valueFormatter,
    cellClass: b,
    headerClass: p
  };
}
const lt = xe.withPart(Ae), at = xe.withPart(Le), st = (e) => e ? lt : at;
function ve({
  selectionMode: e,
  getRowId: n
}) {
  const [t, s] = A([]), a = D(
    (r, c) => n ? n(r) : String(c),
    [n]
  ), m = D(
    (r, c) => {
      const o = a(r, c);
      return t.some(
        (C, E) => a(C, E) === o
      );
    },
    [t, a]
  ), d = D(
    (r, c) => {
      const o = a(r, c);
      s((C) => {
        const E = C.some(
          (v, N) => a(v, N) === o
        );
        return e === "single" ? E ? [] : [r] : E ? C.filter((v, N) => a(v, N) !== o) : [...C, r];
      });
    },
    [e, a]
  ), p = D(() => {
    s([]);
  }, []), g = D(
    (r) => {
      s((c) => {
        if (e === "single")
          return r.length ? [r[0]] : [];
        const o = [...c];
        return r.forEach((C) => {
          o.some(
            (v, N) => a(v, N) === a(C, N)
          ) || o.push(C);
        }), o;
      });
    },
    [e, a]
  );
  return {
    unselectRows: D(
      (r) => {
        s(
          (c) => c.filter(
            (o, C) => !r.some(
              (E, v) => a(o, C) === a(E, v)
            )
          )
        );
      },
      [a]
    ),
    selectRows: g,
    selectedRows: t,
    setSelectedRows: s,
    isSelected: m,
    toggleRow: d,
    clearSelection: p,
    getKey: a
  };
}
function Ne({
  page: e,
  pageSize: n,
  totalRows: t,
  loading: s = !1,
  onPageChange: a,
  onPageSizeChange: m,
  isMobile: d = !1,
  theme: p,
  pageSizeOptions: g = [10, 20, 50],
  themeConfig: b
}) {
  const r = B(() => ({ ...ne[p ?? "dark"] || ne.dark, ...b }), [p, b]), c = Math.max(Math.ceil(t / n), 1);
  return /* @__PURE__ */ u(
    "div",
    {
      className: `flex items-center gap-1 px-4 py-3 text-sm ${r.classes.textPrimary} ${d ? "flex-col justify-center" : "flex-row justify-between"}`,
      children: [
        /* @__PURE__ */ u("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ u("span", { children: [
            "Página ",
            /* @__PURE__ */ l("strong", { className: "font-semibold", children: e + 1 }),
            " de",
            " ",
            /* @__PURE__ */ l("strong", { className: "font-semibold", children: c }),
            /* @__PURE__ */ l("span", { className: "mx-2", children: "|" }),
            "Total de ",
            /* @__PURE__ */ l("strong", { className: "font-semibold", children: t }),
            " ",
            "registros"
          ] }),
          s && !d && /* @__PURE__ */ u(
            "span",
            {
              className: `inline-flex items-center gap-1.5 text-xs ${r.classes.textPrimary} animate-pulse`,
              children: [
                /* @__PURE__ */ l("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
                "Carregando..."
              ]
            }
          )
        ] }),
        /* @__PURE__ */ u(
          "div",
          {
            className: d ? "flex flex-col gap-1 items-center" : "flex gap-4",
            children: [
              m ? /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ l("span", { className: `text-xs ${r.classes.textPrimary}`, children: "Linhas por página:" }),
                /* @__PURE__ */ l(
                  "select",
                  {
                    name: "pageSize",
                    value: n,
                    onChange: (o) => m(Number(o.target.value)),
                    className: `${r.classes.selectPagination} rounded-md px-2 py-1 text-xs font-medium outline-none cursor-pointer transition-all`,
                    children: g.map((o) => /* @__PURE__ */ l(
                      "option",
                      {
                        value: o,
                        className: r.classes.textPrimary,
                        children: o
                      },
                      o
                    ))
                  }
                )
              ] }) : null,
              /* @__PURE__ */ u("div", { children: [
                /* @__PURE__ */ l(
                  W,
                  {
                    children: "Anterior",
                    disabled: e === 0 || s,
                    onClick: () => a(e - 1),
                    color: r?.colorsPagination?.bgButtonPreviousPagination
                  }
                ),
                /* @__PURE__ */ l(
                  W,
                  {
                    children: "Próxima",
                    disabled: e + 1 >= c || s,
                    onClick: () => a(e + 1),
                    color: r?.colorsPagination?.bgButtonNextPagination
                  }
                )
              ] }),
              s && d && /* @__PURE__ */ u("span", { className: "inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 animate-pulse", children: [
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
function ce({
  selectedRows: e,
  onEdit: n,
  onDelete: t,
  actions: s = []
}) {
  return /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
    n && /* @__PURE__ */ l(
      W,
      {
        "aria-label": "Editar",
        color: "primary",
        iconStart: /* @__PURE__ */ l(Je, { size: 18 }),
        disabled: e.length !== 1,
        onClick: () => {
          e.length === 1 && n(e[0]);
        },
        children: ""
      }
    ),
    t && /* @__PURE__ */ l(
      W,
      {
        "aria-label": "Excluir",
        color: "danger",
        iconStart: /* @__PURE__ */ l(Xe, { size: 18 }),
        disabled: e.length === 0,
        onClick: () => {
          e.forEach(t);
        },
        children: ""
      }
    ),
    s.map((a, m) => {
      const d = a.disabled ? a.disabled(e) : !1;
      return /* @__PURE__ */ l(
        W,
        {
          color: a.color ?? "secondary",
          iconStart: a.icon,
          disabled: d,
          onClick: () => {
            d || a.onClick(e);
          },
          children: a.children
        },
        m
      );
    })
  ] });
}
Fe.registerModules([
  Ie,
  Ke,
  Ve,
  je,
  Ge,
  He,
  Oe,
  Qe,
  Ue,
  We,
  _e,
  qe,
  ze
]);
function he({
  columns: e,
  data: n,
  pageSize: t = 5,
  emptyMessage: s = "Nenhum dado encontrado",
  getRowId: a,
  onEdit: m,
  onDelete: d,
  selectionMode: p = "single",
  theme: g,
  page: b,
  totalRows: r = 0,
  onPageChange: c,
  onPageSizeChange: o,
  loading: C = !1,
  singleClickEdit: E = !0,
  stopEditingWhenCellsLoseFocus: v = !0,
  onCellValueChanged: N,
  autoFocusFirstEditableCell: j = !1,
  actions: L = [],
  showFooter: P = !0
}) {
  const _ = B(() => st(g === "dark"), [g]), [le, ae] = A(0), F = b ?? le, z = (f) => {
    c ? c(f) : ae(f);
  }, G = r || n.length, { selectedRows: $, selectRows: I } = ve({
    selectionMode: p,
    getRowId: a
  }), H = te(null), O = te(null), y = D(() => {
    const T = (H.current?.api?.getSelectedNodes() ?? []).map((K) => K.data).filter((K) => K != null);
    I(T);
  }, [I]), J = B(
    () => e.map((f) => be(f)),
    [e]
  ), X = B(
    () => a ? (f) => a(f.data) : void 0,
    [a]
  );
  V(() => {
    const f = (T) => {
      O.current && !O.current.contains(T.target) && H.current?.api?.deselectAll();
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, []);
  const Q = B(() => {
    if (c)
      return n;
    const f = F * t;
    return n.slice(f, f + t);
  }, [n, F, t, c]), Y = D(() => {
    if (!j || Q.length === 0) return;
    const f = e.find((K) => K.editable);
    if (!f) return;
    const T = f.colId ?? (typeof f.field == "string" ? f.field : void 0);
    T && setTimeout(() => {
      document.activeElement instanceof HTMLElement && document.activeElement.blur(), setTimeout(() => {
        H.current?.api?.startEditingCell({
          rowIndex: 0,
          colKey: T
        });
      }, 50);
    }, 0);
  }, [j, e, Q.length]), se = D(() => {
    Y();
  }, [Y]);
  return /* @__PURE__ */ u("div", { ref: O, className: "relative w-full", children: [
    /* @__PURE__ */ l(
      Be,
      {
        ref: H,
        rowData: Q,
        getRowId: X,
        defaultColDef: { resizable: !1 },
        columnDefs: J,
        singleClickEdit: E,
        stopEditingWhenCellsLoseFocus: v,
        onCellValueChanged: N ? (f) => N(f) : void 0,
        onFirstDataRendered: se,
        theme: _,
        animateRows: !0,
        rowSelection: p === "multiple" ? {
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
        onSelectionChanged: y,
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
    P && /* @__PURE__ */ l(
      Ne,
      {
        page: F,
        pageSize: t,
        totalRows: G,
        loading: C,
        onPageChange: z,
        onPageSizeChange: o,
        theme: g
      }
    ),
    /* @__PURE__ */ l("div", { className: "absolute -top-2 right-2 -translate-y-1/2 flex gap-2 z-10", children: /* @__PURE__ */ l(
      ce,
      {
        selectedRows: $,
        onEdit: m,
        onDelete: d,
        actions: L
      }
    ) })
  ] });
}
function ye(e) {
  const n = [];
  return e.forEach((t) => {
    if (t.children && t.children.length > 0) {
      n.push(...ye(t.children));
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
      onCellValueChanged: t.onCellValueChanged,
      cellClass: t.cellClass
    });
  }), n;
}
function rt(e, n) {
  if (!n) return "-";
  const t = n.split(".").reduce((s, a) => {
    if (s != null)
      return s[a];
  }, e);
  return t == null || t === "" ? "-" : String(t);
}
function oe(e, n) {
  if (n.render) return n.render(e);
  const t = n.valueGetter ? n.valueGetter({
    data: e,
    colDef: {
      field: n.field,
      colId: n.colId,
      headerName: n.headerName
    }
  }) : rt(e, n.field);
  return t == null || t === "" ? "-" : n.mask ? Ce(t, n.mask) : String(t);
}
function it(e) {
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
function ie(e, n) {
  return e.editable ? typeof e.editable == "function" ? e.editable({ data: n }) : e.editable : !1;
}
function ct(e, n) {
  const t = typeof e.cellClass == "function" ? e.cellClass({ data: n }) : e.cellClass;
  return t ? Array.isArray(t) ? t.join(" ") : t : "";
}
function ge({
  row: e,
  col: n,
  isEditing: t,
  onStartEdit: s,
  onCommit: a,
  onCancel: m,
  textClass: d,
  activeTheme: p
}) {
  const g = n.field, b = g ? e[g] : void 0, r = it(n.cellEditor), c = n.cellEditorParams ?? {}, o = te(null);
  V(() => {
    if (t) {
      const P = setTimeout(() => o.current?.focus(), 0);
      return () => clearTimeout(P);
    }
  }, [t]);
  const C = (P) => {
    P.key === "Enter" ? (P.preventDefault(), a(o.current?.value ?? "")) : P.key === "Escape" && (P.preventDefault(), m());
  }, E = () => {
    a(o.current?.value ?? "");
  }, v = () => {
    n.singleClickEdit && !t && s();
  }, N = () => {
    !n.singleClickEdit && !t && s();
  };
  if (t)
    return /* @__PURE__ */ l(
      "input",
      {
        ref: o,
        type: r,
        defaultValue: b != null ? String(b) : "",
        min: c.min !== void 0 ? Number(c.min) : void 0,
        max: c.max !== void 0 ? Number(c.max) : void 0,
        step: c.precision !== void 0 ? c.precision === 0 ? 1 : Math.pow(10, -Number(c.precision)) : void 0,
        onKeyDown: C,
        onBlur: E,
        className: `
          w-24 h-9 
          px-3 
          ${p.classes.wrapper} 
          border border-gray-500! 
          text-center text-sm font-medium
          rounded-md outline-none
           no-number-spinner
          `
      }
    );
  const j = oe(e, n), L = ct(n, e);
  return /* @__PURE__ */ l(
    "span",
    {
      className: `text-xs font-medium cursor-pointer select-none ${d}  ${L} ${n.singleClickEdit ? "" : "cursor-text"}`,
      onClick: v,
      onDoubleClick: N,
      title: n.singleClickEdit ? "Clique para editar" : "Clique duplo para editar",
      children: j
    }
  );
}
function pe({
  columns: e,
  data: n,
  pageSize: t = 5,
  emptyMessage: s = "Nenhum dado encontrado",
  getRowId: a,
  onEdit: m,
  onDelete: d,
  selectionMode: p = "single",
  theme: g,
  themeConfig: b,
  page: r,
  totalRows: c = 0,
  onPageChange: o,
  onPageSizeChange: C,
  loading: E = !1,
  defaultExpanded: v = !1,
  singleClickEdit: N = !0,
  showFooter: j = !0,
  onCellValueChanged: L,
  autoFocusFirstEditableCell: P = !1,
  actions: _ = []
}) {
  const [le, ae] = A(
    {}
  ), [F, z] = A(0), [G, $] = A(null), I = r ?? F, H = (i) => {
    o ? o(i) : z(i);
  }, O = c || n.length, y = B(() => {
    if (o)
      return n;
    const i = I * t;
    return n.slice(i, i + t);
  }, [n, I, t, o]), {
    selectedRows: J,
    isSelected: X,
    toggleRow: Q,
    clearSelection: Y,
    selectRows: se,
    unselectRows: f,
    getKey: T
  } = ve({
    selectionMode: p,
    getRowId: a
  }), K = te(null), x = B(() => ({ ...ne[g ?? "dark"] || ne.dark, ...b }), [g, b]), Ee = B(() => ye(e).map((h) => ({
    ...h,
    singleClickEdit: h.singleClickEdit ?? N
  })), [e, N]), [S, ...Z] = Ee, de = Math.max(1, Math.ceil(O / t));
  V(() => {
    const i = Math.max(de - 1, 0);
    F > i && z(i);
  }, [de, F]);
  const re = y.length > 0 && y.every((i, h) => X(i, h)), we = D(() => {
    p === "multiple" && (re ? f(y) : se(y));
  }, [re, y, p]), Pe = (i) => {
    ae((h) => {
      const k = h[i] ?? v;
      return { ...h, [i]: !k };
    });
  }, Se = !!(m || d || _.length), U = p === "multiple";
  V(() => {
    Y();
  }, [I]), V(() => {
    if (!P || y.length === 0) return;
    const i = y[0], h = T(i, 0), M = [S, ...Z].find(
      (R) => R ? ie(R, i) : !1
    );
    M && M.field && $({ rowKey: h, field: M.field });
  }, [P, y.length]);
  const ue = D(
    (i, h, k) => {
      $(null);
      const M = h.field;
      if (!M) return;
      const R = i[M];
      let q = k;
      if (h.cellEditor === "agNumberCellEditor" && (q = k === "" ? null : Number(k)), q === R) return;
      const ee = {
        data: i,
        oldValue: R,
        newValue: q,
        colDef: {
          field: M,
          colId: h.colId,
          headerName: h.headerName
        }
      };
      h.onCellValueChanged ? h.onCellValueChanged(ee) : L && L(ee);
    },
    [L]
  );
  return /* @__PURE__ */ u($e, { children: [
    /* @__PURE__ */ u(
      "div",
      {
        ref: K,
        className: `w-full flex flex-col p-3 rounded-xl border transition-all duration-200 ${x.classes.wrapper}`,
        children: [
          /* @__PURE__ */ u("div", { className: "flex flex-col gap-3.5 mb-4", children: [
            Se && U && /* @__PURE__ */ u("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ u(
                "span",
                {
                  className: `text-xs px-2.5 py-1 rounded-full font-bold transition-all ${x.classes.badge}`,
                  children: [
                    J.length,
                    " selecionado(s)"
                  ]
                }
              ),
              /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ l(
                ce,
                {
                  selectedRows: J,
                  onEdit: m,
                  onDelete: d,
                  actions: _
                }
              ) })
            ] }),
            U && y.length > 0 && /* @__PURE__ */ u("label", { className: "flex items-center gap-2 px-1 py-0.5 select-none cursor-pointer", children: [
              /* @__PURE__ */ l(
                fe,
                {
                  checked: re,
                  onChange: we,
                  color: "primary",
                  className: x.classes.checkboxBorder
                }
              ),
              /* @__PURE__ */ u(
                "span",
                {
                  className: `text-xs font-semibold ${x.classes.textMuted}`,
                  children: [
                    "Selecionar todos desta página (",
                    y.length,
                    ")"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l("div", { className: "flex flex-col gap-1 min-h-30", children: y.length === 0 ? /* @__PURE__ */ l("div", { className: "flex flex-col items-center justify-center py-10 text-center", children: /* @__PURE__ */ l(
            "span",
            {
              className: `text-sm font-medium ${x.classes.textMuted}`,
              children: s
            }
          ) }) : y.map((i, h) => {
            const k = T(i, h), M = X(i, h), R = le[k] ?? v, q = S && ie(S, i), ee = G?.rowKey === k && G?.field === S?.field;
            return /* @__PURE__ */ u(
              "div",
              {
                className: `rounded-xl border px-4 py-2 transition-all duration-200 ${x.classes.card} ${M && U ? x.classes.cardSelected : ""}`,
                children: [
                  /* @__PURE__ */ u("div", { className: "flex items-start gap-3.5", children: [
                    U && /* @__PURE__ */ l(
                      "div",
                      {
                        "aria-label": "Selecionar registro",
                        onClick: () => Q(i, h),
                        className: "pt-1 shrink-0 cursor-pointer",
                        children: /* @__PURE__ */ l(
                          fe,
                          {
                            checked: M,
                            onChange: () => {
                            },
                            color: "primary",
                            className: x.classes.checkboxBorder
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ u(
                      "div",
                      {
                        className: `flex-1 min-w-0 ${U ? "cursor-pointer" : ""}`,
                        onClick: () => U && Q(i, h),
                        children: [
                          /* @__PURE__ */ l(
                            "div",
                            {
                              className: `text-xs font-bold uppercase tracking-widest mb-0.5 ${x.classes.textMuted}`,
                              children: S?.headerName || "Registro"
                            }
                          ),
                          S && q ? /* @__PURE__ */ l(
                            ge,
                            {
                              row: i,
                              col: S,
                              isEditing: ee,
                              onStartEdit: () => $({
                                rowKey: k,
                                field: S.field
                              }),
                              activeTheme: x,
                              onCommit: (w) => ue(i, S, String(w)),
                              onCancel: () => $(null),
                              textClass: x.classes.textPrimary
                            }
                          ) : /* @__PURE__ */ l(
                            "div",
                            {
                              className: `text-sm font-bold truncate ${x.classes.textPrimary}`,
                              children: S ? oe(i, S) : "-"
                            }
                          )
                        ]
                      }
                    ),
                    Z.length > 0 && /* @__PURE__ */ l(
                      W,
                      {
                        "aria-label": R ? "Recolher detalhes" : "Expandir detalhes",
                        onClick: () => Pe(k),
                        iconEnd: R ? /* @__PURE__ */ l(
                          Ye,
                          {
                            size: 18,
                            className: `${x.classes.textPrimary}`
                          }
                        ) : /* @__PURE__ */ l(
                          Ze,
                          {
                            size: 18,
                            className: `${x.classes.textPrimary}`
                          }
                        ),
                        variant: "clear",
                        activeColor: "transparent",
                        size: "small",
                        children: ""
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l(et, { initial: !1, children: R && Z.length > 0 && /* @__PURE__ */ u(
                    tt.div,
                    {
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      exit: { opacity: 0, height: 0 },
                      transition: {
                        duration: 0.25,
                        ease: "easeInOut"
                      },
                      className: `mt-4 pt-3.5 px-2 border-t space-y-3 animate-slide-down ${x.classes.divider}`,
                      children: [
                        Z.map((w, De) => {
                          if (!w) return null;
                          const me = w.align === "center" ? "text-center" : w.align === "right" ? "text-right" : "text-left", Me = ie(w, i), Te = G?.rowKey === k && G?.field === w.field;
                          return /* @__PURE__ */ u(
                            "div",
                            {
                              className: "flex justify-between items-center gap-2 py-0.5",
                              children: [
                                /* @__PURE__ */ l(
                                  "span",
                                  {
                                    className: `text-xs font-semibold truncate ${x.classes.textMuted}`,
                                    children: w.headerName
                                  }
                                ),
                                Me ? /* @__PURE__ */ l(
                                  ge,
                                  {
                                    row: i,
                                    col: w,
                                    activeTheme: x,
                                    isEditing: Te,
                                    onStartEdit: () => $({
                                      rowKey: k,
                                      field: w.field
                                    }),
                                    onCommit: (Re) => ue(i, w, String(Re)),
                                    onCancel: () => $(null),
                                    textClass: `${me} ${x.classes.textPrimary}`
                                  }
                                ) : /* @__PURE__ */ l(
                                  "span",
                                  {
                                    className: `col-span-2 text-xs font-medium break-all ${me} ${x.classes.textPrimary}`,
                                    children: oe(i, w)
                                  }
                                )
                              ]
                            },
                            De
                          );
                        }),
                        /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ l(
                          ce,
                          {
                            selectedRows: [i],
                            onEdit: m,
                            onDelete: d,
                            actions: _
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
    j && /* @__PURE__ */ l(
      Ne,
      {
        page: I,
        pageSize: t,
        totalRows: O,
        loading: E,
        onPageChange: H,
        onPageSizeChange: C,
        theme: g,
        isMobile: !0,
        themeConfig: b
      }
    )
  ] });
}
function ot(e) {
  const n = () => typeof window > "u" ? !1 : window.matchMedia(e).matches, [t, s] = A(n);
  return V(() => {
    const a = window.matchMedia(e), m = (d) => {
      s(d.matches);
    };
    return s(a.matches), a.addEventListener("change", m), () => {
      a.removeEventListener("change", m);
    };
  }, [e]), t;
}
function ke(e) {
  const [n, t] = A(
    e ?? (document.documentElement.classList.contains("dark") ? "dark" : "light")
  );
  return V(() => {
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
function dt(e) {
  const n = ot("(max-width: 768px)"), { modeTable: t = "auto" } = e, s = ke(e.theme);
  return t === "mobile" ? /* @__PURE__ */ l(pe, { ...e, theme: s }) : t === "desktop" ? /* @__PURE__ */ l(he, { ...e, theme: s }) : n ? /* @__PURE__ */ l(pe, { ...e, theme: s }) : /* @__PURE__ */ l(he, { ...e, theme: s });
}
function xt({
  data: e,
  filterColumns: n,
  filterPlaceholder: t = "Buscar...",
  filterClassName: s,
  theme: a,
  ...m
}) {
  const [d, p] = A(e), g = ke(a);
  return /* @__PURE__ */ u("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ l(
      nt,
      {
        data: e,
        columns: n,
        placeholder: t,
        onChange: p,
        className: s,
        theme: g
      }
    ),
    /* @__PURE__ */ l(dt, { ...m, data: d, theme: a })
  ] });
}
export {
  dt as CBDataTable,
  he as CBDataTableDesktop,
  pe as CBDataTableMobile,
  xt as CBDataTableWithFilter
};
