import { jsxs as d, jsx as l, Fragment as $e } from "react/jsx-runtime";
import { D as ee, C as j, F as ge, a as pe, b as ue, c as Be, d as Le, A as Fe, m as Ke, e as Ae } from "./CBFilterBar-DcJN3pf3.js";
import { AgGridReact as Ie } from "ag-grid-react";
import { useState as F, useCallback as R, useMemo as L, useRef as te, useEffect as G } from "react";
import { themeQuartz as xe, colorSchemeDarkBlue as Ve, colorSchemeLightCold as je, ModuleRegistry as Ge, ClientSideRowModelModule as He, PaginationModule as Oe, RowSelectionModule as Qe, CellStyleModule as Ue, LocaleModule as We, TextEditorModule as ze, NumberEditorModule as _e, DateEditorModule as qe, SelectEditorModule as Je, LargeTextEditorModule as Xe, CheckboxEditorModule as Ye, CustomEditorModule as Ze, UndoRedoEditModule as et } from "ag-grid-community";
import { a as be } from "./useInputMask-DlqD3EiL.js";
function Ce(t) {
  const { col: n, render: e, children: a, align: c, mask: s, ...u } = t;
  return a && a.length > 0 ? {
    ...u,
    headerName: t.headerName,
    children: a.map((o) => Ce(o)),
    flex: n ?? 1
  } : {
    ...u,
    flex: n ?? 1,
    cellRenderer: e ? (o) => o.data ? e(o.data) : null : void 0,
    valueFormatter: s ? (o) => be(o.value, s) : void 0,
    cellClass: c === "center" ? "ag-cell-center" : c === "right" ? "ag-cell-right" : "ag-cell-left",
    headerClass: c === "center" ? "ag-header-center" : c === "right" ? "ag-header-right" : "ag-header-left"
  };
}
const tt = xe.withPart(Ve), nt = xe.withPart(je), lt = (t) => t ? tt : nt;
function ve({
  selectionMode: t,
  getRowId: n,
  onDelete: e
}) {
  const [a, c] = F([]), s = R(
    (i, y) => n ? n(i) : String(y),
    [n]
  ), u = R(
    (i, y) => {
      const v = s(i, y);
      return a.some(
        (b, E) => s(b, E) === v
      );
    },
    [a, s]
  ), x = R(
    (i, y) => {
      const v = s(i, y);
      c((b) => {
        const E = b.some(
          (N, p) => s(N, p) === v
        );
        return t === "single" ? E ? [] : [i] : E ? b.filter((N, p) => s(N, p) !== v) : [...b, i];
      });
    },
    [t, s]
  ), o = R(() => {
    c([]);
  }, []), w = R(() => {
    e && (a.forEach(e), o());
  }, [a, e, o]), k = R(
    (i) => {
      c((y) => {
        if (t === "single")
          return i.length ? [i[0]] : [];
        const v = [...y];
        return i.forEach((b) => {
          v.some(
            (N, p) => s(N, p) === s(b, p)
          ) || v.push(b);
        }), v;
      });
    },
    [t, s]
  );
  return {
    unselectRows: R(
      (i) => {
        c(
          (y) => y.filter(
            (v, b) => !i.some(
              (E, N) => s(v, b) === s(E, N)
            )
          )
        );
      },
      [s]
    ),
    selectRows: k,
    selectedRows: a,
    setSelectedRows: c,
    isSelected: u,
    toggleRow: x,
    clearSelection: o,
    deleteSelected: w,
    getKey: s
  };
}
function Ne({
  page: t,
  pageSize: n,
  totalRows: e,
  loading: a = !1,
  onPageChange: c,
  onPageSizeChange: s,
  isMobile: u = !1,
  theme: x,
  pageSizeOptions: o = [10, 20, 50],
  themeConfig: w
}) {
  const k = L(() => ({ ...ee[x ?? "dark"] || ee.dark, ...w }), [x, w]), g = Math.max(Math.ceil(e / n), 1);
  return /* @__PURE__ */ d(
    "div",
    {
      className: `flex items-center gap-1 px-4 py-3 text-sm ${k.classes.textPrimary} ${u ? "flex-col justify-center" : "flex-row justify-between"}`,
      children: [
        /* @__PURE__ */ d("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ d("span", { children: [
            "Página ",
            /* @__PURE__ */ l("strong", { className: "font-semibold", children: t + 1 }),
            " de",
            " ",
            /* @__PURE__ */ l("strong", { className: "font-semibold", children: g }),
            /* @__PURE__ */ l("span", { className: "mx-2", children: "|" }),
            "Total de ",
            /* @__PURE__ */ l("strong", { className: "font-semibold", children: e }),
            " ",
            "registros"
          ] }),
          a && !u && /* @__PURE__ */ d(
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
        /* @__PURE__ */ d(
          "div",
          {
            className: u ? "flex flex-col gap-1 items-center" : "flex gap-4",
            children: [
              s ? /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ l("span", { className: `text-xs ${k.classes.textPrimary}`, children: "Linhas por página:" }),
                /* @__PURE__ */ l(
                  "select",
                  {
                    name: "pageSize",
                    value: n,
                    onChange: (i) => s(Number(i.target.value)),
                    className: `${k.classes.selectPagination} rounded-md px-2 py-1 text-xs font-medium outline-none cursor-pointer transition-all`,
                    children: o.map((i) => /* @__PURE__ */ l(
                      "option",
                      {
                        value: i,
                        className: k.classes.textPrimary,
                        children: i
                      },
                      i
                    ))
                  }
                )
              ] }) : null,
              /* @__PURE__ */ d("div", { children: [
                /* @__PURE__ */ l(
                  j,
                  {
                    children: "Anterior",
                    disabled: t === 0 || a,
                    onClick: () => c(t - 1),
                    color: k?.colorsPagination?.bgButtonPreviousPagination
                  }
                ),
                /* @__PURE__ */ l(
                  j,
                  {
                    children: "Próxima",
                    disabled: t + 1 >= g || a,
                    onClick: () => c(t + 1),
                    color: k?.colorsPagination?.bgButtonNextPagination
                  }
                )
              ] }),
              a && u && /* @__PURE__ */ d("span", { className: "inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 animate-pulse", children: [
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
Ge.registerModules([
  He,
  Oe,
  Qe,
  Ue,
  We,
  ze,
  _e,
  qe,
  Je,
  Xe,
  Ye,
  Ze,
  et
]);
function me({
  columns: t,
  data: n,
  pageSize: e = 5,
  emptyMessage: a = "Nenhum dado encontrado",
  getRowId: c,
  onEdit: s,
  onDelete: u,
  selectionMode: x = "single",
  theme: o,
  page: w,
  totalRows: k = 0,
  onPageChange: g,
  onPageSizeChange: i,
  loading: y = !1,
  singleClickEdit: v = !0,
  stopEditingWhenCellsLoseFocus: b = !0,
  onCellValueChanged: E,
  autoFocusFirstEditableCell: N = !1
}) {
  const p = L(() => lt(o === "dark"), [o]), [ne, le] = F(0), K = w ?? ne, z = (m) => {
    g ? g(m) : le(m);
  }, H = k || n.length, {
    selectedRows: M,
    deleteSelected: O,
    selectRows: _
  } = ve({
    selectionMode: x,
    getRowId: c,
    onDelete: u
  }), A = te(null), C = te(null), I = R(() => {
    const D = (A.current?.api?.getSelectedNodes() ?? []).map((V) => V.data).filter((V) => V != null);
    _(D);
  }, [_]), q = L(
    () => t.map((m) => Ce(m)),
    [t]
  ), J = L(
    () => c ? (m) => c(m.data) : void 0,
    [c]
  );
  G(() => {
    const m = (D) => {
      C.current && !C.current.contains(D.target) && A.current?.api?.deselectAll();
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []);
  const U = L(() => {
    if (g)
      return n;
    const m = K * e;
    return n.slice(m, m + e);
  }, [n, K, e, g]), X = R(() => {
    if (!N || U.length === 0) return;
    const m = t.find((V) => V.editable);
    if (!m) return;
    const D = m.colId ?? (typeof m.field == "string" ? m.field : void 0);
    D && setTimeout(() => {
      document.activeElement instanceof HTMLElement && document.activeElement.blur(), setTimeout(() => {
        console.log("gridWrapperRef", C.current), console.log("colKey", D), A.current?.api?.startEditingCell({
          rowIndex: 0,
          colKey: D
        });
      }, 50);
    }, 0);
  }, [N, t, U.length]), ae = R(() => {
    X();
  }, [X]);
  return /* @__PURE__ */ d("div", { ref: C, className: "relative w-full", children: [
    /* @__PURE__ */ l(
      Ie,
      {
        ref: A,
        rowData: U,
        getRowId: J,
        defaultColDef: { resizable: !1 },
        columnDefs: q,
        singleClickEdit: v,
        stopEditingWhenCellsLoseFocus: b,
        onCellValueChanged: E ? (m) => E(m) : void 0,
        onFirstDataRendered: ae,
        theme: p,
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
        onSelectionChanged: I,
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
        pageSize: e,
        totalRows: H,
        loading: y,
        onPageChange: z,
        onPageSizeChange: i,
        theme: o
      }
    ),
    /* @__PURE__ */ d("div", { className: "absolute -top-2 right-2 -translate-y-1/2 flex gap-2 z-10", children: [
      s && /* @__PURE__ */ l(
        j,
        {
          "aria-label": "Editar",
          children: "",
          iconStart: /* @__PURE__ */ l(ge, { size: 18 }),
          color: "primary",
          disabled: M.length !== 1,
          onClick: () => M.length === 1 && s(M[0])
        }
      ),
      u && /* @__PURE__ */ l(
        j,
        {
          "aria-label": "Excluir",
          children: "",
          iconStart: /* @__PURE__ */ l(pe, { size: 18 }),
          color: "danger",
          disabled: M.length === 0,
          onClick: O
        }
      )
    ] })
  ] });
}
function ke(t) {
  const n = [];
  return t.forEach((e) => {
    if (e.children && e.children.length > 0) {
      n.push(...ke(e.children));
      return;
    }
    n.push({
      headerName: e.headerName ?? "",
      field: e.field,
      colId: e.colId,
      align: e.align,
      render: e.render,
      valueGetter: e.valueGetter,
      mask: e.mask,
      editable: e.editable,
      cellEditor: e.cellEditor,
      cellEditorParams: e.cellEditorParams,
      singleClickEdit: e.singleClickEdit,
      onCellValueChanged: e.onCellValueChanged
    });
  }), n;
}
function at(t, n) {
  if (!n) return "-";
  const e = t[n];
  return e == null || e === "" ? "-" : String(e);
}
function ie(t, n) {
  if (n.render) return n.render(t);
  const e = n.valueGetter ? n.valueGetter(t) : at(t, n.field);
  return e == null || e === "" ? "-" : n.mask ? be(e, n.mask) : String(e);
}
function st(t) {
  switch (t) {
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
function re(t, n) {
  return t.editable ? typeof t.editable == "function" ? t.editable({ data: n }) : t.editable : !1;
}
function fe({
  row: t,
  col: n,
  isEditing: e,
  onStartEdit: a,
  onCommit: c,
  onCancel: s,
  textClass: u,
  activeTheme: x
}) {
  const o = n.field, w = o ? t[o] : void 0, k = st(n.cellEditor), g = n.cellEditorParams ?? {}, i = te(null);
  G(() => {
    if (e) {
      const p = setTimeout(() => i.current?.focus(), 0);
      return () => clearTimeout(p);
    }
  }, [e]);
  const y = (p) => {
    p.key === "Enter" ? (p.preventDefault(), c(i.current?.value ?? "")) : p.key === "Escape" && (p.preventDefault(), s());
  }, v = () => {
    c(i.current?.value ?? "");
  }, b = () => {
    n.singleClickEdit && !e && a();
  }, E = () => {
    !n.singleClickEdit && !e && a();
  };
  if (e)
    return /* @__PURE__ */ l(
      "input",
      {
        ref: i,
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
  const N = ie(t, n);
  return /* @__PURE__ */ l(
    "span",
    {
      className: `text-xs font-medium cursor-pointer select-none ${u} ${n.singleClickEdit ? "" : "cursor-text"}`,
      onClick: b,
      onDoubleClick: E,
      title: n.singleClickEdit ? "Clique para editar" : "Clique duplo para editar",
      children: N
    }
  );
}
function he({
  columns: t,
  data: n,
  pageSize: e = 5,
  emptyMessage: a = "Nenhum dado encontrado",
  getRowId: c,
  onEdit: s,
  onDelete: u,
  selectionMode: x = "single",
  theme: o,
  themeConfig: w,
  page: k,
  totalRows: g = 0,
  onPageChange: i,
  onPageSizeChange: y,
  loading: v = !1,
  defaultExpanded: b = !1,
  singleClickEdit: E = !0,
  onCellValueChanged: N,
  autoFocusFirstEditableCell: p = !1
}) {
  const [ne, le] = F(
    {}
  ), [K, z] = F(0), [H, M] = F(null), O = k ?? K, _ = (r) => {
    i ? i(r) : z(r);
  }, A = g || n.length, C = L(() => {
    if (i)
      return n;
    const r = O * e;
    return n.slice(r, r + e);
  }, [n, O, e, i]), {
    selectedRows: I,
    isSelected: q,
    toggleRow: J,
    deleteSelected: U,
    clearSelection: X,
    selectRows: ae,
    unselectRows: m,
    getKey: D
  } = ve({
    selectionMode: x,
    getRowId: c,
    onDelete: u
  }), V = te(null), h = L(() => ({ ...ee[o ?? "dark"] || ee.dark, ...w }), [o, w]), Ee = L(() => ke(t).map((f) => ({
    ...f,
    singleClickEdit: f.singleClickEdit ?? E
  })), [t, E]), [T, ...Y] = Ee, ce = Math.max(1, Math.ceil(A / e));
  G(() => {
    const r = Math.max(ce - 1, 0);
    K > r && z(r);
  }, [ce, K]);
  const se = C.length > 0 && C.every((r, f) => q(r, f)), we = R(() => {
    x === "multiple" && (se ? m(C) : ae(C));
  }, [se, C, x]), Se = (r) => {
    le((f) => {
      const S = f[r] ?? b;
      return { ...f, [r]: !S };
    });
  }, Pe = !!(s || u), Q = x === "multiple";
  G(() => {
    X();
  }, [O]), G(() => {
    if (!p || C.length === 0) return;
    const r = C[0], f = D(r, 0), $ = [T, ...Y].find(
      (B) => B ? re(B, r) : !1
    );
    $ && $.field && M({ rowKey: f, field: $.field });
  }, [p, C.length]);
  const oe = R(
    (r, f, S) => {
      M(null);
      const $ = f.field;
      if (!$) return;
      const B = r[$];
      let W = S;
      if (f.cellEditor === "agNumberCellEditor" && (W = S === "" ? null : Number(S)), W === B) return;
      const Z = {
        data: r,
        oldValue: B,
        newValue: W,
        colDef: {
          field: $,
          colId: f.colId,
          headerName: f.headerName
        }
      };
      f.onCellValueChanged ? f.onCellValueChanged(Z) : N && N(Z);
    },
    [N]
  );
  return /* @__PURE__ */ d($e, { children: [
    /* @__PURE__ */ d(
      "div",
      {
        ref: V,
        className: `w-full flex flex-col p-3 rounded-xl border transition-all duration-200 ${h.classes.wrapper}`,
        children: [
          /* @__PURE__ */ d("div", { className: "flex flex-col gap-3.5 mb-4", children: [
            Pe && Q && /* @__PURE__ */ d("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ d(
                "span",
                {
                  className: `text-xs px-2.5 py-1 rounded-full font-bold transition-all ${h.classes.badge}`,
                  children: [
                    I.length,
                    " selecionado(s)"
                  ]
                }
              ),
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                s && /* @__PURE__ */ l(
                  j,
                  {
                    color: "primary",
                    iconStart: /* @__PURE__ */ l(ge, { size: 16 }),
                    disabled: I.length !== 1,
                    onClick: () => I.length === 1 && s(I[0]),
                    children: ""
                  }
                ),
                u && /* @__PURE__ */ l(
                  j,
                  {
                    color: "danger",
                    iconStart: /* @__PURE__ */ l(pe, { size: 16 }),
                    disabled: I.length === 0,
                    onClick: U,
                    children: ""
                  }
                )
              ] })
            ] }),
            Q && C.length > 0 && /* @__PURE__ */ d("label", { className: "flex items-center gap-2 px-1 py-0.5 select-none cursor-pointer", children: [
              /* @__PURE__ */ l(
                ue,
                {
                  checked: se,
                  onChange: we,
                  color: "primary",
                  className: h.classes.checkboxBorder
                }
              ),
              /* @__PURE__ */ d(
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
          ) }) : C.map((r, f) => {
            const S = D(r, f), $ = q(r, f), B = ne[S] ?? b, W = T && re(T, r), Z = H?.rowKey === S && H?.field === T?.field;
            return /* @__PURE__ */ d(
              "div",
              {
                className: `rounded-xl border px-4 py-2 transition-all duration-200 ${h.classes.card} ${$ && Q ? h.classes.cardSelected : ""}`,
                children: [
                  /* @__PURE__ */ d("div", { className: "flex items-start gap-3.5", children: [
                    Q && /* @__PURE__ */ l(
                      "div",
                      {
                        "aria-label": "Selecionar registro",
                        onClick: () => J(r, f),
                        className: "pt-1 shrink-0 cursor-pointer",
                        children: /* @__PURE__ */ l(
                          ue,
                          {
                            checked: $,
                            onChange: () => {
                            },
                            color: "primary",
                            className: h.classes.checkboxBorder
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ d(
                      "div",
                      {
                        className: `flex-1 min-w-0 ${Q ? "cursor-pointer" : ""}`,
                        onClick: () => Q && J(r, f),
                        children: [
                          /* @__PURE__ */ l(
                            "div",
                            {
                              className: `text-xs font-bold uppercase tracking-widest mb-0.5 ${h.classes.textMuted}`,
                              children: T?.headerName || "Registro"
                            }
                          ),
                          T && W ? /* @__PURE__ */ l(
                            fe,
                            {
                              row: r,
                              col: T,
                              isEditing: Z,
                              onStartEdit: () => M({
                                rowKey: S,
                                field: T.field
                              }),
                              activeTheme: h,
                              onCommit: (P) => oe(r, T, String(P)),
                              onCancel: () => M(null),
                              textClass: h.classes.textPrimary
                            }
                          ) : /* @__PURE__ */ l(
                            "div",
                            {
                              className: `text-sm font-bold truncate ${h.classes.textPrimary}`,
                              children: T ? ie(r, T) : "-"
                            }
                          )
                        ]
                      }
                    ),
                    Y.length > 0 && /* @__PURE__ */ l(
                      j,
                      {
                        "aria-label": B ? "Recolher detalhes" : "Expandir detalhes",
                        onClick: () => Se(S),
                        iconEnd: B ? /* @__PURE__ */ l(
                          Be,
                          {
                            size: 18,
                            className: `${h.classes.textPrimary}`
                          }
                        ) : /* @__PURE__ */ l(
                          Le,
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
                  /* @__PURE__ */ l(Fe, { initial: !1, children: B && Y.length > 0 && /* @__PURE__ */ l(
                    Ke.div,
                    {
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      exit: { opacity: 0, height: 0 },
                      transition: {
                        duration: 0.25,
                        ease: "easeInOut"
                      },
                      className: `mt-4 pt-3.5 px-2 border-t space-y-3 animate-slide-down ${h.classes.divider}`,
                      children: Y.map((P, Re) => {
                        if (!P) return null;
                        const de = P.align === "center" ? "text-center" : P.align === "right" ? "text-right" : "text-left", Me = re(P, r), Te = H?.rowKey === S && H?.field === P.field;
                        return /* @__PURE__ */ d(
                          "div",
                          {
                            className: "flex justify-between items-center gap-2 py-0.5",
                            children: [
                              /* @__PURE__ */ l(
                                "span",
                                {
                                  className: `text-xs font-semibold truncate ${h.classes.textMuted}`,
                                  children: P.headerName
                                }
                              ),
                              Me ? /* @__PURE__ */ l(
                                fe,
                                {
                                  row: r,
                                  col: P,
                                  activeTheme: h,
                                  isEditing: Te,
                                  onStartEdit: () => M({
                                    rowKey: S,
                                    field: P.field
                                  }),
                                  onCommit: (De) => oe(r, P, String(De)),
                                  onCancel: () => M(null),
                                  textClass: `${de} ${h.classes.textPrimary}`
                                }
                              ) : /* @__PURE__ */ l(
                                "span",
                                {
                                  className: `col-span-2 text-xs font-medium break-all ${de} ${h.classes.textPrimary}`,
                                  children: ie(r, P)
                                }
                              )
                            ]
                          },
                          Re
                        );
                      })
                    }
                  ) })
                ]
              },
              S
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ l(
      Ne,
      {
        page: O,
        pageSize: e,
        totalRows: A,
        loading: v,
        onPageChange: _,
        onPageSizeChange: y,
        theme: o,
        isMobile: !0,
        themeConfig: w
      }
    )
  ] });
}
function rt(t) {
  const n = () => typeof window > "u" ? !1 : window.matchMedia(t).matches, [e, a] = F(n);
  return G(() => {
    const c = window.matchMedia(t), s = (u) => {
      a(u.matches);
    };
    return a(c.matches), c.addEventListener("change", s), () => {
      c.removeEventListener("change", s);
    };
  }, [t]), e;
}
function ye(t) {
  const [n, e] = F(
    t ?? (document.documentElement.classList.contains("dark") ? "dark" : "light")
  );
  return G(() => {
    if (t) {
      e(t);
      return;
    }
    const a = new MutationObserver(() => {
      e(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    });
    return a.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class"]
    }), () => a.disconnect();
  }, [t]), n;
}
function it(t) {
  const n = rt("(max-width: 768px)"), { modeTable: e = "auto" } = t, a = ye(t.theme);
  return e === "mobile" ? /* @__PURE__ */ l(he, { ...t, theme: a }) : e === "desktop" ? /* @__PURE__ */ l(me, { ...t, theme: a }) : n ? /* @__PURE__ */ l(he, { ...t, theme: a }) : /* @__PURE__ */ l(me, { ...t, theme: a });
}
function ht({
  data: t,
  filterColumns: n,
  filterPlaceholder: e = "Buscar...",
  filterClassName: a,
  theme: c,
  ...s
}) {
  const [u, x] = F(t), o = ye(c);
  return /* @__PURE__ */ d("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ l(
      Ae,
      {
        data: t,
        columns: n,
        placeholder: e,
        onChange: x,
        className: a,
        theme: o
      }
    ),
    /* @__PURE__ */ l(it, { ...s, data: u, theme: c })
  ] });
}
export {
  it as CBDataTable,
  me as CBDataTableDesktop,
  he as CBDataTableMobile,
  ht as CBDataTableWithFilter
};
