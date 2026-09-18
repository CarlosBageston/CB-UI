import { jsxs as u, jsx as l, Fragment as $e } from "react/jsx-runtime";
import { AgGridReact as Be } from "ag-grid-react";
import { useState as F, useCallback as D, useMemo as L, useRef as te, useEffect as V } from "react";
import { themeQuartz as xe, colorSchemeDarkBlue as Le, colorSchemeLightCold as Fe, ModuleRegistry as Ke, ClientSideRowModelModule as Ae, PaginationModule as Ie, RowSelectionModule as Ve, CellStyleModule as je, LocaleModule as Ge, TextEditorModule as He, NumberEditorModule as Oe, DateEditorModule as Qe, SelectEditorModule as Ue, LargeTextEditorModule as We, CheckboxEditorModule as _e, CustomEditorModule as qe, UndoRedoEditModule as ze } from "ag-grid-community";
import { a as be } from "./iconBase-DcKQz3bW.js";
import { D as ne, C as Q, F as Je, a as Xe, b as fe, c as Ye, d as Ze, A as et, m as tt, e as nt } from "./CBFilterBar-C6DPy5H3.js";
function Ce(e) {
  const { col: n, render: t, children: a, align: s, mask: r, ...d } = e;
  return a && a.length > 0 ? {
    ...d,
    headerName: e.headerName,
    children: a.map((o) => Ce(o)),
    flex: n ?? 1
  } : {
    ...d,
    flex: n ?? 1,
    cellRenderer: t ? (o) => o.data ? t(o.data) : null : void 0,
    valueFormatter: r ? (o) => be(o.value, r) : void 0,
    cellClass: s === "center" ? "ag-cell-center" : s === "right" ? "ag-cell-right" : "ag-cell-left",
    headerClass: s === "center" ? "ag-header-center" : s === "right" ? "ag-header-right" : "ag-header-left"
  };
}
const lt = xe.withPart(Le), at = xe.withPart(Fe), st = (e) => e ? lt : at;
function ve({
  selectionMode: e,
  getRowId: n,
  onDelete: t
}) {
  const [a, s] = F([]), r = D(
    (c, y) => n ? n(c) : String(y),
    [n]
  ), d = D(
    (c, y) => {
      const v = r(c, y);
      return a.some(
        (b, E) => r(b, E) === v
      );
    },
    [a, r]
  ), x = D(
    (c, y) => {
      const v = r(c, y);
      s((b) => {
        const E = b.some(
          (N, p) => r(N, p) === v
        );
        return e === "single" ? E ? [] : [c] : E ? b.filter((N, p) => r(N, p) !== v) : [...b, c];
      });
    },
    [e, r]
  ), o = D(() => {
    s([]);
  }, []), w = D(() => {
    t && (a.forEach(t), o());
  }, [a, t, o]), k = D(
    (c) => {
      s((y) => {
        if (e === "single")
          return c.length ? [c[0]] : [];
        const v = [...y];
        return c.forEach((b) => {
          v.some(
            (N, p) => r(N, p) === r(b, p)
          ) || v.push(b);
        }), v;
      });
    },
    [e, r]
  );
  return {
    unselectRows: D(
      (c) => {
        s(
          (y) => y.filter(
            (v, b) => !c.some(
              (E, N) => r(v, b) === r(E, N)
            )
          )
        );
      },
      [r]
    ),
    selectRows: k,
    selectedRows: a,
    setSelectedRows: s,
    isSelected: d,
    toggleRow: x,
    clearSelection: o,
    deleteSelected: w,
    getKey: r
  };
}
function Ne({
  page: e,
  pageSize: n,
  totalRows: t,
  loading: a = !1,
  onPageChange: s,
  onPageSizeChange: r,
  isMobile: d = !1,
  theme: x,
  pageSizeOptions: o = [10, 20, 50],
  themeConfig: w
}) {
  const k = L(() => ({ ...ne[x ?? "dark"] || ne.dark, ...w }), [x, w]), g = Math.max(Math.ceil(t / n), 1);
  return /* @__PURE__ */ u(
    "div",
    {
      className: `flex items-center gap-1 px-4 py-3 text-sm ${k.classes.textPrimary} ${d ? "flex-col justify-center" : "flex-row justify-between"}`,
      children: [
        /* @__PURE__ */ u("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ u("span", { children: [
            "Página ",
            /* @__PURE__ */ l("strong", { className: "font-semibold", children: e + 1 }),
            " de",
            " ",
            /* @__PURE__ */ l("strong", { className: "font-semibold", children: g }),
            /* @__PURE__ */ l("span", { className: "mx-2", children: "|" }),
            "Total de ",
            /* @__PURE__ */ l("strong", { className: "font-semibold", children: t }),
            " ",
            "registros"
          ] }),
          a && !d && /* @__PURE__ */ u(
            "span",
            {
              className: `inline-flex items-center gap-1.5 text-xs ${k.classes.textPrimary} animate-pulse`,
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
              r ? /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ l("span", { className: `text-xs ${k.classes.textPrimary}`, children: "Linhas por página:" }),
                /* @__PURE__ */ l(
                  "select",
                  {
                    name: "pageSize",
                    value: n,
                    onChange: (c) => r(Number(c.target.value)),
                    className: `${k.classes.selectPagination} rounded-md px-2 py-1 text-xs font-medium outline-none cursor-pointer transition-all`,
                    children: o.map((c) => /* @__PURE__ */ l(
                      "option",
                      {
                        value: c,
                        className: k.classes.textPrimary,
                        children: c
                      },
                      c
                    ))
                  }
                )
              ] }) : null,
              /* @__PURE__ */ u("div", { children: [
                /* @__PURE__ */ l(
                  Q,
                  {
                    children: "Anterior",
                    disabled: e === 0 || a,
                    onClick: () => s(e - 1),
                    color: k?.colorsPagination?.bgButtonPreviousPagination
                  }
                ),
                /* @__PURE__ */ l(
                  Q,
                  {
                    children: "Próxima",
                    disabled: e + 1 >= g || a,
                    onClick: () => s(e + 1),
                    color: k?.colorsPagination?.bgButtonNextPagination
                  }
                )
              ] }),
              a && d && /* @__PURE__ */ u("span", { className: "inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 animate-pulse", children: [
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
  actions: a = []
}) {
  return /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
    n && /* @__PURE__ */ l(
      Q,
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
      Q,
      {
        "aria-label": "Excluir",
        color: "danger",
        iconStart: /* @__PURE__ */ l(Xe, { size: 18 }),
        disabled: e.length === 0,
        onClick: t,
        children: ""
      }
    ),
    a.map((s, r) => {
      const d = s.disabled ? s.disabled(e) : !1;
      return /* @__PURE__ */ l(
        Q,
        {
          color: s.color ?? "secondary",
          iconStart: s.icon,
          disabled: d,
          onClick: () => {
            d || s.onClick(e);
          },
          children: s.children
        },
        r
      );
    })
  ] });
}
Ke.registerModules([
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
  qe,
  ze
]);
function he({
  columns: e,
  data: n,
  pageSize: t = 5,
  emptyMessage: a = "Nenhum dado encontrado",
  getRowId: s,
  onEdit: r,
  onDelete: d,
  selectionMode: x = "single",
  theme: o,
  page: w,
  totalRows: k = 0,
  onPageChange: g,
  onPageSizeChange: c,
  loading: y = !1,
  singleClickEdit: v = !0,
  stopEditingWhenCellsLoseFocus: b = !0,
  onCellValueChanged: E,
  autoFocusFirstEditableCell: N = !1,
  actions: p = []
}) {
  const U = L(() => st(o === "dark"), [o]), [le, ae] = F(0), K = w ?? le, _ = (m) => {
    g ? g(m) : ae(m);
  }, j = k || n.length, {
    selectedRows: B,
    deleteSelected: G,
    selectRows: q
  } = ve({
    selectionMode: x,
    getRowId: s,
    onDelete: d
  }), A = te(null), C = te(null), z = D(() => {
    const R = (A.current?.api?.getSelectedNodes() ?? []).map((I) => I.data).filter((I) => I != null);
    q(R);
  }, [q]), J = L(
    () => e.map((m) => Ce(m)),
    [e]
  ), X = L(
    () => s ? (m) => s(m.data) : void 0,
    [s]
  );
  V(() => {
    const m = (R) => {
      C.current && !C.current.contains(R.target) && A.current?.api?.deselectAll();
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []);
  const H = L(() => {
    if (g)
      return n;
    const m = K * t;
    return n.slice(m, m + t);
  }, [n, K, t, g]), Y = D(() => {
    if (!N || H.length === 0) return;
    const m = e.find((I) => I.editable);
    if (!m) return;
    const R = m.colId ?? (typeof m.field == "string" ? m.field : void 0);
    R && setTimeout(() => {
      document.activeElement instanceof HTMLElement && document.activeElement.blur(), setTimeout(() => {
        console.log("gridWrapperRef", C.current), console.log("colKey", R), A.current?.api?.startEditingCell({
          rowIndex: 0,
          colKey: R
        });
      }, 50);
    }, 0);
  }, [N, e, H.length]), se = D(() => {
    Y();
  }, [Y]);
  return /* @__PURE__ */ u("div", { ref: C, className: "relative w-full", children: [
    /* @__PURE__ */ l(
      Be,
      {
        ref: A,
        rowData: H,
        getRowId: X,
        defaultColDef: { resizable: !1 },
        columnDefs: J,
        singleClickEdit: v,
        stopEditingWhenCellsLoseFocus: b,
        onCellValueChanged: E ? (m) => E(m) : void 0,
        onFirstDataRendered: se,
        theme: U,
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
        onSelectionChanged: z,
        overlayNoRowsTemplate: `<span class="text-white">${a}</span>`,
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
      Ne,
      {
        page: K,
        pageSize: t,
        totalRows: j,
        loading: y,
        onPageChange: _,
        onPageSizeChange: c,
        theme: o
      }
    ),
    /* @__PURE__ */ l("div", { className: "absolute -top-2 right-2 -translate-y-1/2 flex gap-2 z-10", children: /* @__PURE__ */ l(
      ce,
      {
        selectedRows: B,
        onEdit: r,
        onDelete: G,
        actions: p
      }
    ) })
  ] });
}
function ke(e) {
  const n = [];
  return e.forEach((t) => {
    if (t.children && t.children.length > 0) {
      n.push(...ke(t.children));
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
function rt(e, n) {
  if (!n) return "-";
  const t = n.split(".").reduce((a, s) => {
    if (a != null)
      return a[s];
  }, e);
  return t == null || t === "" ? "-" : String(t);
}
function oe(e, n) {
  if (n.render) return n.render(e);
  const t = n.valueGetter ? n.valueGetter(e) : rt(e, n.field);
  return t == null || t === "" ? "-" : n.mask ? be(t, n.mask) : String(t);
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
function ge({
  row: e,
  col: n,
  isEditing: t,
  onStartEdit: a,
  onCommit: s,
  onCancel: r,
  textClass: d,
  activeTheme: x
}) {
  const o = n.field, w = o ? e[o] : void 0, k = it(n.cellEditor), g = n.cellEditorParams ?? {}, c = te(null);
  V(() => {
    if (t) {
      const p = setTimeout(() => c.current?.focus(), 0);
      return () => clearTimeout(p);
    }
  }, [t]);
  const y = (p) => {
    p.key === "Enter" ? (p.preventDefault(), s(c.current?.value ?? "")) : p.key === "Escape" && (p.preventDefault(), r());
  }, v = () => {
    s(c.current?.value ?? "");
  }, b = () => {
    n.singleClickEdit && !t && a();
  }, E = () => {
    !n.singleClickEdit && !t && a();
  };
  if (t)
    return /* @__PURE__ */ l(
      "input",
      {
        ref: c,
        type: k,
        defaultValue: w != null ? String(w) : "",
        min: g.min !== void 0 ? Number(g.min) : void 0,
        max: g.max !== void 0 ? Number(g.max) : void 0,
        step: g.precision !== void 0 ? g.precision === 0 ? 1 : Math.pow(10, -Number(g.precision)) : void 0,
        onKeyDown: y,
        onBlur: v,
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
  const N = oe(e, n);
  return /* @__PURE__ */ l(
    "span",
    {
      className: `text-xs font-medium cursor-pointer select-none ${d} ${n.singleClickEdit ? "" : "cursor-text"}`,
      onClick: b,
      onDoubleClick: E,
      title: n.singleClickEdit ? "Clique para editar" : "Clique duplo para editar",
      children: N
    }
  );
}
function pe({
  columns: e,
  data: n,
  pageSize: t = 5,
  emptyMessage: a = "Nenhum dado encontrado",
  getRowId: s,
  onEdit: r,
  onDelete: d,
  selectionMode: x = "single",
  theme: o,
  themeConfig: w,
  page: k,
  totalRows: g = 0,
  onPageChange: c,
  onPageSizeChange: y,
  loading: v = !1,
  defaultExpanded: b = !1,
  singleClickEdit: E = !0,
  onCellValueChanged: N,
  autoFocusFirstEditableCell: p = !1,
  actions: U = []
}) {
  const [le, ae] = F(
    {}
  ), [K, _] = F(0), [j, B] = F(null), G = k ?? K, q = (i) => {
    c ? c(i) : _(i);
  }, A = g || n.length, C = L(() => {
    if (c)
      return n;
    const i = G * t;
    return n.slice(i, i + t);
  }, [n, G, t, c]), {
    selectedRows: z,
    isSelected: J,
    toggleRow: X,
    deleteSelected: H,
    clearSelection: Y,
    selectRows: se,
    unselectRows: m,
    getKey: R
  } = ve({
    selectionMode: x,
    getRowId: s,
    onDelete: d
  }), I = te(null), h = L(() => ({ ...ne[o ?? "dark"] || ne.dark, ...w }), [o, w]), Ee = L(() => ke(e).map((f) => ({
    ...f,
    singleClickEdit: f.singleClickEdit ?? E
  })), [e, E]), [M, ...Z] = Ee, de = Math.max(1, Math.ceil(A / t));
  V(() => {
    const i = Math.max(de - 1, 0);
    K > i && _(i);
  }, [de, K]);
  const re = C.length > 0 && C.every((i, f) => J(i, f)), we = D(() => {
    x === "multiple" && (re ? m(C) : se(C));
  }, [re, C, x]), Pe = (i) => {
    ae((f) => {
      const P = f[i] ?? b;
      return { ...f, [i]: !P };
    });
  }, Se = !!(r || d || U.length), O = x === "multiple";
  V(() => {
    Y();
  }, [G]), V(() => {
    if (!p || C.length === 0) return;
    const i = C[0], f = R(i, 0), T = [M, ...Z].find(
      ($) => $ ? ie($, i) : !1
    );
    T && T.field && B({ rowKey: f, field: T.field });
  }, [p, C.length]);
  const ue = D(
    (i, f, P) => {
      B(null);
      const T = f.field;
      if (!T) return;
      const $ = i[T];
      let W = P;
      if (f.cellEditor === "agNumberCellEditor" && (W = P === "" ? null : Number(P)), W === $) return;
      const ee = {
        data: i,
        oldValue: $,
        newValue: W,
        colDef: {
          field: T,
          colId: f.colId,
          headerName: f.headerName
        }
      };
      f.onCellValueChanged ? f.onCellValueChanged(ee) : N && N(ee);
    },
    [N]
  );
  return /* @__PURE__ */ u($e, { children: [
    /* @__PURE__ */ u(
      "div",
      {
        ref: I,
        className: `w-full flex flex-col p-3 rounded-xl border transition-all duration-200 ${h.classes.wrapper}`,
        children: [
          /* @__PURE__ */ u("div", { className: "flex flex-col gap-3.5 mb-4", children: [
            Se && O && /* @__PURE__ */ u("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ u(
                "span",
                {
                  className: `text-xs px-2.5 py-1 rounded-full font-bold transition-all ${h.classes.badge}`,
                  children: [
                    z.length,
                    " selecionado(s)"
                  ]
                }
              ),
              /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ l(
                ce,
                {
                  selectedRows: z,
                  onEdit: r,
                  onDelete: H,
                  actions: U
                }
              ) })
            ] }),
            O && C.length > 0 && /* @__PURE__ */ u("label", { className: "flex items-center gap-2 px-1 py-0.5 select-none cursor-pointer", children: [
              /* @__PURE__ */ l(
                fe,
                {
                  checked: re,
                  onChange: we,
                  color: "primary",
                  className: h.classes.checkboxBorder
                }
              ),
              /* @__PURE__ */ u(
                "span",
                {
                  className: `text-xs font-semibold ${h.classes.textMuted}`,
                  children: [
                    "Selecionar todos desta página (",
                    C.length,
                    ")"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l("div", { className: "flex flex-col gap-1 min-h-30", children: C.length === 0 ? /* @__PURE__ */ l("div", { className: "flex flex-col items-center justify-center py-10 text-center", children: /* @__PURE__ */ l(
            "span",
            {
              className: `text-sm font-medium ${h.classes.textMuted}`,
              children: a
            }
          ) }) : C.map((i, f) => {
            const P = R(i, f), T = J(i, f), $ = le[P] ?? b, W = M && ie(M, i), ee = j?.rowKey === P && j?.field === M?.field;
            return /* @__PURE__ */ u(
              "div",
              {
                className: `rounded-xl border px-4 py-2 transition-all duration-200 ${h.classes.card} ${T && O ? h.classes.cardSelected : ""}`,
                children: [
                  /* @__PURE__ */ u("div", { className: "flex items-start gap-3.5", children: [
                    O && /* @__PURE__ */ l(
                      "div",
                      {
                        "aria-label": "Selecionar registro",
                        onClick: () => X(i, f),
                        className: "pt-1 shrink-0 cursor-pointer",
                        children: /* @__PURE__ */ l(
                          fe,
                          {
                            checked: T,
                            onChange: () => {
                            },
                            color: "primary",
                            className: h.classes.checkboxBorder
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ u(
                      "div",
                      {
                        className: `flex-1 min-w-0 ${O ? "cursor-pointer" : ""}`,
                        onClick: () => O && X(i, f),
                        children: [
                          /* @__PURE__ */ l(
                            "div",
                            {
                              className: `text-xs font-bold uppercase tracking-widest mb-0.5 ${h.classes.textMuted}`,
                              children: M?.headerName || "Registro"
                            }
                          ),
                          M && W ? /* @__PURE__ */ l(
                            ge,
                            {
                              row: i,
                              col: M,
                              isEditing: ee,
                              onStartEdit: () => B({
                                rowKey: P,
                                field: M.field
                              }),
                              activeTheme: h,
                              onCommit: (S) => ue(i, M, String(S)),
                              onCancel: () => B(null),
                              textClass: h.classes.textPrimary
                            }
                          ) : /* @__PURE__ */ l(
                            "div",
                            {
                              className: `text-sm font-bold truncate ${h.classes.textPrimary}`,
                              children: M ? oe(i, M) : "-"
                            }
                          )
                        ]
                      }
                    ),
                    Z.length > 0 && /* @__PURE__ */ l(
                      Q,
                      {
                        "aria-label": $ ? "Recolher detalhes" : "Expandir detalhes",
                        onClick: () => Pe(P),
                        iconEnd: $ ? /* @__PURE__ */ l(
                          Ye,
                          {
                            size: 18,
                            className: `${h.classes.textPrimary}`
                          }
                        ) : /* @__PURE__ */ l(
                          Ze,
                          {
                            size: 18,
                            className: `${h.classes.textPrimary}`
                          }
                        ),
                        variant: "clear",
                        activeColor: "transparent",
                        size: "small",
                        children: ""
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l(et, { initial: !1, children: $ && Z.length > 0 && /* @__PURE__ */ u(
                    tt.div,
                    {
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      exit: { opacity: 0, height: 0 },
                      transition: {
                        duration: 0.25,
                        ease: "easeInOut"
                      },
                      className: `mt-4 pt-3.5 px-2 border-t space-y-3 animate-slide-down ${h.classes.divider}`,
                      children: [
                        Z.map((S, De) => {
                          if (!S) return null;
                          const me = S.align === "center" ? "text-center" : S.align === "right" ? "text-right" : "text-left", Me = ie(S, i), Re = j?.rowKey === P && j?.field === S.field;
                          return /* @__PURE__ */ u(
                            "div",
                            {
                              className: "flex justify-between items-center gap-2 py-0.5",
                              children: [
                                /* @__PURE__ */ l(
                                  "span",
                                  {
                                    className: `text-xs font-semibold truncate ${h.classes.textMuted}`,
                                    children: S.headerName
                                  }
                                ),
                                Me ? /* @__PURE__ */ l(
                                  ge,
                                  {
                                    row: i,
                                    col: S,
                                    activeTheme: h,
                                    isEditing: Re,
                                    onStartEdit: () => B({
                                      rowKey: P,
                                      field: S.field
                                    }),
                                    onCommit: (Te) => ue(i, S, String(Te)),
                                    onCancel: () => B(null),
                                    textClass: `${me} ${h.classes.textPrimary}`
                                  }
                                ) : /* @__PURE__ */ l(
                                  "span",
                                  {
                                    className: `col-span-2 text-xs font-medium break-all ${me} ${h.classes.textPrimary}`,
                                    children: oe(i, S)
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
                            onEdit: r,
                            onDelete: H,
                            actions: U
                          }
                        ) })
                      ]
                    }
                  ) })
                ]
              },
              P
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ l(
      Ne,
      {
        page: G,
        pageSize: t,
        totalRows: A,
        loading: v,
        onPageChange: q,
        onPageSizeChange: y,
        theme: o,
        isMobile: !0,
        themeConfig: w
      }
    )
  ] });
}
function ct(e) {
  const n = () => typeof window > "u" ? !1 : window.matchMedia(e).matches, [t, a] = F(n);
  return V(() => {
    const s = window.matchMedia(e), r = (d) => {
      a(d.matches);
    };
    return a(s.matches), s.addEventListener("change", r), () => {
      s.removeEventListener("change", r);
    };
  }, [e]), t;
}
function ye(e) {
  const [n, t] = F(
    e ?? (document.documentElement.classList.contains("dark") ? "dark" : "light")
  );
  return V(() => {
    if (e) {
      t(e);
      return;
    }
    const a = new MutationObserver(() => {
      t(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    });
    return a.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class"]
    }), () => a.disconnect();
  }, [e]), n;
}
function ot(e) {
  const n = ct("(max-width: 768px)"), { modeTable: t = "auto" } = e, a = ye(e.theme);
  return t === "mobile" ? /* @__PURE__ */ l(pe, { ...e, theme: a }) : t === "desktop" ? /* @__PURE__ */ l(he, { ...e, theme: a }) : n ? /* @__PURE__ */ l(pe, { ...e, theme: a }) : /* @__PURE__ */ l(he, { ...e, theme: a });
}
function pt({
  data: e,
  filterColumns: n,
  filterPlaceholder: t = "Buscar...",
  filterClassName: a,
  theme: s,
  ...r
}) {
  const [d, x] = F(e), o = ye(s);
  return /* @__PURE__ */ u("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ l(
      nt,
      {
        data: e,
        columns: n,
        placeholder: t,
        onChange: x,
        className: a,
        theme: o
      }
    ),
    /* @__PURE__ */ l(ot, { ...r, data: d, theme: s })
  ] });
}
export {
  ot as CBDataTable,
  he as CBDataTableDesktop,
  pe as CBDataTableMobile,
  pt as CBDataTableWithFilter
};
