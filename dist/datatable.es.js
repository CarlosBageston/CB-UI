import { jsxs as m, jsx as n, Fragment as De } from "react/jsx-runtime";
import { AgGridReact as Se } from "ag-grid-react";
import { useState as R, useCallback as T, useMemo as S, useRef as ie, useEffect as I } from "react";
import { themeQuartz as pe, colorSchemeDarkBlue as Re, colorSchemeLightCold as Be, ModuleRegistry as Ae, ClientSideRowModelModule as Le, PaginationModule as Fe, RowSelectionModule as Ie, CellStyleModule as Ve, LocaleModule as je, TextEditorModule as Ke, NumberEditorModule as Ge, DateEditorModule as Oe, SelectEditorModule as _e, LargeTextEditorModule as He, CheckboxEditorModule as Qe, CustomEditorModule as Ue, UndoRedoEditModule as We } from "ag-grid-community";
import { a as xe } from "./iconBase-DcKQz3bW.js";
import { D as W, C as Z, F as Ze, a as qe, b as ue, c as ze, A as Je, m as Xe, d as Ye, e as et } from "./CBFilterBar--_5qf7gu.js";
function be(t) {
  const {
    col: a,
    render: e,
    children: l,
    align: s,
    mask: d,
    // Só usado no mobile; removido para não chegar ao AG Grid
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mobile: h,
    ...r
  } = t;
  if (l && l.length > 0)
    return {
      ...r,
      headerName: t.headerName,
      children: l.map((c) => be(c)),
      flex: a ?? 1
    };
  const b = s === "center" ? "ag-header-center" : s === "right" ? "ag-header-right" : "ag-header-left", v = r.cellClass, u = (c) => {
    const o = typeof v == "function" ? v(c) : v;
    return [
      b,
      ...Array.isArray(o) ? o : o ? [o] : []
    ];
  };
  return {
    ...r,
    flex: a ?? 1,
    cellRenderer: e ? (c) => c.data ? e(c.data) : null : void 0,
    valueFormatter: d ? (c) => xe(c.value, d) : r.valueFormatter,
    cellClass: u,
    headerClass: b
  };
}
const tt = pe.withPart(Re), at = pe.withPart(Be), nt = (t) => t ? tt : at;
function ve({
  selectionMode: t,
  getRowId: a
}) {
  const [e, l] = R([]), s = T(
    (u, c) => a ? a(u) : String(c),
    [a]
  ), d = T(
    (u, c) => {
      const o = s(u, c);
      return e.some(
        (N, y) => s(N, y) === o
      );
    },
    [e, s]
  ), h = T(
    (u, c) => {
      const o = s(u, c);
      l((N) => {
        const y = N.some(
          (w, E) => s(w, E) === o
        );
        return t === "single" ? y ? [] : [u] : y ? N.filter((w, E) => s(w, E) !== o) : [...N, u];
      });
    },
    [t, s]
  ), r = T(() => {
    l([]);
  }, []), b = T(
    (u) => {
      l((c) => {
        if (t === "single")
          return u.length ? [u[0]] : [];
        const o = [...c];
        return u.forEach((N) => {
          o.some(
            (w, E) => s(w, E) === s(N, E)
          ) || o.push(N);
        }), o;
      });
    },
    [t, s]
  );
  return {
    unselectRows: T(
      (u) => {
        l(
          (c) => c.filter(
            (o, N) => !u.some(
              (y, w) => s(o, N) === s(y, w)
            )
          )
        );
      },
      [s]
    ),
    selectRows: b,
    selectedRows: e,
    setSelectedRows: l,
    isSelected: d,
    toggleRow: h,
    clearSelection: r,
    getKey: s
  };
}
function Ce({
  page: t,
  pageSize: a,
  totalRows: e,
  loading: l = !1,
  onPageChange: s,
  onPageSizeChange: d,
  isMobile: h = !1,
  theme: r,
  pageSizeOptions: b = [10, 20, 50],
  themeConfig: v
}) {
  const u = S(() => ({ ...W[r ?? "dark"] || W.dark, ...v }), [r, v]), c = Math.max(Math.ceil(e / a), 1);
  return /* @__PURE__ */ m(
    "div",
    {
      className: `flex items-center gap-1 px-4 py-3 text-sm ${u.classes.textPrimary} ${h ? "flex-col justify-center" : "flex-row justify-between"}`,
      children: [
        /* @__PURE__ */ m("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ m("span", { children: [
            "Página ",
            /* @__PURE__ */ n("strong", { className: "font-semibold", children: t + 1 }),
            " de",
            " ",
            /* @__PURE__ */ n("strong", { className: "font-semibold", children: c }),
            /* @__PURE__ */ n("span", { className: "mx-2", children: "|" }),
            "Total de ",
            /* @__PURE__ */ n("strong", { className: "font-semibold", children: e }),
            " ",
            "registros"
          ] }),
          l && !h && /* @__PURE__ */ m(
            "span",
            {
              className: `inline-flex items-center gap-1.5 text-xs ${u.classes.textPrimary} animate-pulse`,
              children: [
                /* @__PURE__ */ n("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
                "Carregando..."
              ]
            }
          )
        ] }),
        /* @__PURE__ */ m(
          "div",
          {
            className: h ? "flex flex-col gap-1 items-center" : "flex gap-4",
            children: [
              d ? /* @__PURE__ */ m("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ n("span", { className: `text-xs ${u.classes.textPrimary}`, children: "Linhas por página:" }),
                /* @__PURE__ */ n(
                  "select",
                  {
                    name: "pageSize",
                    value: a,
                    onChange: (o) => d(Number(o.target.value)),
                    className: `${u.classes.selectPagination} rounded-md px-2 py-1 text-xs font-medium outline-none cursor-pointer transition-all`,
                    children: b.map((o) => /* @__PURE__ */ n(
                      "option",
                      {
                        value: o,
                        className: u.classes.textPrimary,
                        children: o
                      },
                      o
                    ))
                  }
                )
              ] }) : null,
              /* @__PURE__ */ m("div", { children: [
                /* @__PURE__ */ n(
                  Z,
                  {
                    children: "Anterior",
                    disabled: t === 0 || l,
                    onClick: () => s(t - 1),
                    color: u?.colorsPagination?.bgButtonPreviousPagination
                  }
                ),
                /* @__PURE__ */ n(
                  Z,
                  {
                    children: "Próxima",
                    disabled: t + 1 >= c || l,
                    onClick: () => s(t + 1),
                    color: u?.colorsPagination?.bgButtonNextPagination
                  }
                )
              ] }),
              l && h && /* @__PURE__ */ m("span", { className: "inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 animate-pulse", children: [
                /* @__PURE__ */ n("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
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
  selectedRows: t,
  onEdit: a,
  onDelete: e,
  actions: l = []
}) {
  return /* @__PURE__ */ m("div", { className: "flex items-center gap-2", children: [
    a && /* @__PURE__ */ n(
      Z,
      {
        "aria-label": "Editar",
        color: "primary",
        iconStart: /* @__PURE__ */ n(Ze, { size: 18 }),
        disabled: t.length !== 1,
        onClick: () => {
          t.length === 1 && a(t[0]);
        },
        children: ""
      }
    ),
    e && /* @__PURE__ */ n(
      Z,
      {
        "aria-label": "Excluir",
        color: "danger",
        iconStart: /* @__PURE__ */ n(qe, { size: 18 }),
        disabled: t.length === 0,
        onClick: () => {
          t.forEach(e);
        },
        children: ""
      }
    ),
    l.map((s, d) => {
      const h = s.disabled ? s.disabled(t) : !1;
      return /* @__PURE__ */ n(
        Z,
        {
          color: s.color ?? "secondary",
          iconStart: s.icon,
          disabled: h,
          onClick: () => {
            h || s.onClick(t);
          },
          children: s.children
        },
        d
      );
    })
  ] });
}
Ae.registerModules([
  Le,
  Fe,
  Ie,
  Ve,
  je,
  Ke,
  Ge,
  Oe,
  _e,
  He,
  Qe,
  Ue,
  We
]);
function me({
  columns: t,
  data: a,
  pageSize: e = 5,
  emptyMessage: l = "Nenhum dado encontrado",
  getRowId: s,
  onEdit: d,
  onDelete: h,
  selectionMode: r = "single",
  theme: b,
  page: v,
  totalRows: u = 0,
  onPageChange: c,
  onPageSizeChange: o,
  loading: N = !1,
  singleClickEdit: y = !0,
  stopEditingWhenCellsLoseFocus: w = !0,
  onCellValueChanged: E,
  autoFocusFirstEditableCell: V = !1,
  actions: B = [],
  showFooter: C = !0
}) {
  const _ = S(() => nt(b === "dark"), [b]), [ae, q] = R(0), A = v ?? ae, z = (p) => {
    c ? c(p) : q(p);
  }, J = u || a.length, { selectedRows: j, selectRows: L } = ve({
    selectionMode: r,
    getRowId: s
  }), K = ie(null), G = ie(null), k = T(() => {
    const D = (K.current?.api?.getSelectedNodes() ?? []).map((f) => f.data).filter((f) => f != null);
    L(D);
  }, [L]), O = S(
    () => t.map((p) => be(p)),
    [t]
  ), X = S(
    () => s ? (p) => s(p.data) : void 0,
    [s]
  );
  I(() => {
    const p = (D) => {
      G.current && !G.current.contains(D.target) && K.current?.api?.deselectAll();
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, []);
  const H = S(() => {
    if (c)
      return a;
    const p = A * e;
    return a.slice(p, p + e);
  }, [a, A, e, c]), Y = T(() => {
    if (!V || H.length === 0) return;
    const p = t.find((f) => f.editable);
    if (!p) return;
    const D = p.colId ?? (typeof p.field == "string" ? p.field : void 0);
    D && setTimeout(() => {
      document.activeElement instanceof HTMLElement && document.activeElement.blur(), setTimeout(() => {
        K.current?.api?.startEditingCell({
          rowIndex: 0,
          colKey: D
        });
      }, 50);
    }, 0);
  }, [V, t, H.length]), ne = T(() => {
    Y();
  }, [Y]);
  return /* @__PURE__ */ m("div", { ref: G, className: "relative w-full", children: [
    /* @__PURE__ */ n(
      Se,
      {
        ref: K,
        rowData: H,
        getRowId: X,
        defaultColDef: { resizable: !1 },
        columnDefs: O,
        singleClickEdit: y,
        stopEditingWhenCellsLoseFocus: w,
        onCellValueChanged: E ? (p) => E(p) : void 0,
        onFirstDataRendered: ne,
        theme: _,
        animateRows: !0,
        rowSelection: r === "multiple" ? {
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
        onSelectionChanged: k,
        overlayNoRowsTemplate: `<span class="text-white">${l}</span>`,
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
    C && /* @__PURE__ */ n(
      Ce,
      {
        page: A,
        pageSize: e,
        totalRows: J,
        loading: N,
        onPageChange: z,
        onPageSizeChange: o,
        theme: b
      }
    ),
    /* @__PURE__ */ n("div", { className: "absolute -top-2 right-2 -translate-y-1/2 flex gap-2 z-10", children: /* @__PURE__ */ n(
      ce,
      {
        selectedRows: j,
        onEdit: d,
        onDelete: h,
        actions: B
      }
    ) })
  ] });
}
function Ne(t) {
  const a = [];
  return t.forEach((e) => {
    if (e.children && e.children.length > 0) {
      a.push(...Ne(e.children));
      return;
    }
    a.push({
      headerName: e.headerName ?? "",
      field: e.field,
      colId: e.colId,
      align: e.align,
      render: e.render,
      valueGetter: e.valueGetter,
      mask: e.mask,
      mobile: e.mobile,
      hide: e.hide,
      editable: e.editable,
      cellEditor: e.cellEditor,
      cellEditorParams: e.cellEditorParams,
      singleClickEdit: e.singleClickEdit,
      onCellValueChanged: e.onCellValueChanged,
      cellClass: e.cellClass
    });
  }), a;
}
const fe = 4;
function st(t) {
  const a = t.filter((r) => !r.hide && r.mobile !== "hidden");
  let e = a.find((r) => r.mobile === "title"), l = a.find((r) => r.mobile === "trailing");
  const s = a.filter((r) => r.mobile === "grid");
  let d = a.filter((r) => !r.mobile);
  !e && d.length > 0 && (e = d[0], d = d.slice(1)), l || (l = [...d].reverse().find((r) => r.mask === "currency"), l && (d = d.filter((r) => r !== l))), s.length === 0 && (s.push(...d.slice(0, fe)), d = d.slice(fe));
  const h = a.filter(
    (r) => r.mobile === "detail" || d.includes(r)
  );
  return { title: e, trailing: l, grid: s, detail: h };
}
function lt(t, a) {
  if (!a) return "-";
  const e = a.split(".").reduce((l, s) => {
    if (l != null)
      return l[s];
  }, t);
  return e == null || e === "" ? "-" : String(e);
}
function ke(t, a) {
  if (a.render) return a.render(t);
  const e = a.valueGetter ? a.valueGetter({
    data: t,
    colDef: {
      field: a.field,
      colId: a.colId,
      headerName: a.headerName
    }
  }) : lt(t, a.field);
  return e == null || e === "" ? "-" : a.mask ? xe(e, a.mask) : String(e);
}
function rt(t) {
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
function he(t, a) {
  return t.editable ? typeof t.editable == "function" ? t.editable({ data: a }) : t.editable : !1;
}
function ye(t, a) {
  const e = typeof t.cellClass == "function" ? t.cellClass({ data: a }) : t.cellClass;
  return e ? Array.isArray(e) ? e.join(" ") : e : "";
}
function it({
  row: t,
  col: a,
  isEditing: e,
  onStartEdit: l,
  onCommit: s,
  onCancel: d,
  textClass: h,
  activeTheme: r
}) {
  const b = a.field, v = b ? t[b] : void 0, u = rt(a.cellEditor), c = a.cellEditorParams ?? {}, o = ie(null);
  I(() => {
    if (e) {
      const C = setTimeout(() => o.current?.focus(), 0);
      return () => clearTimeout(C);
    }
  }, [e]);
  const N = (C) => {
    C.key === "Enter" ? (C.preventDefault(), s(o.current?.value ?? "")) : C.key === "Escape" && (C.preventDefault(), d());
  }, y = () => {
    s(o.current?.value ?? "");
  }, w = () => {
    a.singleClickEdit && !e && l();
  }, E = () => {
    !a.singleClickEdit && !e && l();
  };
  if (e)
    return /* @__PURE__ */ n(
      "input",
      {
        ref: o,
        type: u,
        defaultValue: v != null ? String(v) : "",
        min: c.min !== void 0 ? Number(c.min) : void 0,
        max: c.max !== void 0 ? Number(c.max) : void 0,
        step: c.precision !== void 0 ? c.precision === 0 ? 1 : Math.pow(10, -Number(c.precision)) : void 0,
        onKeyDown: N,
        onBlur: y,
        onClick: (C) => C.stopPropagation(),
        className: `
          w-full max-w-28 h-8
          px-2.5
          bg-transparent ${r.classes.textPrimary}
          border border-(--cb-color-primary)
          text-sm font-medium
          rounded-lg outline-none ring-2 ring-(--cb-color-primary)/20
          no-number-spinner
          `
      }
    );
  const V = ke(t, a), B = ye(a, t);
  return /* @__PURE__ */ n(
    "span",
    {
      className: `inline-flex items-center min-h-8 px-2.5 -mx-px rounded-lg border border-dashed border-slate-400/50 cursor-pointer select-none ${h} ${B}`,
      onClick: (C) => {
        C.stopPropagation(), w();
      },
      onDoubleClick: (C) => {
        C.stopPropagation(), E();
      },
      title: a.singleClickEdit ? "Toque para editar" : "Toque duas vezes para editar",
      children: V
    }
  );
}
function ct({ theme: t }) {
  const a = t.classes.surfaceMuted ?? "bg-slate-400/15";
  return /* @__PURE__ */ m("div", { className: `rounded-2xl border p-4 ${t.classes.card}`, children: [
    /* @__PURE__ */ m("div", { className: "flex items-center justify-between gap-6 animate-pulse", children: [
      /* @__PURE__ */ n("div", { className: `h-4 w-1/2 rounded ${a}` }),
      /* @__PURE__ */ n("div", { className: `h-4 w-16 rounded ${a}` })
    ] }),
    /* @__PURE__ */ n(
      "div",
      {
        className: `mt-4 pt-4 border-t grid grid-cols-2 gap-4 animate-pulse ${t.classes.divider}`,
        children: [0, 1, 2, 3].map((e) => /* @__PURE__ */ m("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ n("div", { className: `h-2.5 w-14 rounded ${a}` }),
          /* @__PURE__ */ n("div", { className: `h-3.5 w-20 rounded ${a}` })
        ] }, e))
      }
    )
  ] });
}
function ge({
  columns: t,
  data: a,
  pageSize: e = 5,
  emptyMessage: l = "Nenhum dado encontrado",
  getRowId: s,
  onEdit: d,
  onDelete: h,
  selectionMode: r = "single",
  theme: b,
  themeConfig: v,
  page: u,
  totalRows: c = 0,
  onPageChange: o,
  onPageSizeChange: N,
  loading: y = !1,
  defaultExpanded: w = !1,
  singleClickEdit: E = !0,
  showFooter: V = !0,
  onCellValueChanged: B,
  autoFocusFirstEditableCell: C = !1,
  actions: _ = []
}) {
  const [ae, q] = R(
    {}
  ), [A, z] = R(0), [J, j] = R(null), L = u ?? A, K = (i) => {
    o ? o(i) : z(i);
  }, G = c || a.length, k = S(() => {
    if (o)
      return a;
    const i = L * e;
    return a.slice(i, i + e);
  }, [a, L, e, o]), {
    selectedRows: O,
    isSelected: X,
    toggleRow: H,
    clearSelection: Y,
    selectRows: ne,
    unselectRows: p,
    getKey: D
  } = ve({
    selectionMode: r,
    getRowId: s
  }), f = S(() => ({ ...W[b ?? "dark"] || W.dark, ...v }), [b, v]), Ee = f.classes.surfaceMuted ?? W[b ?? "dark"].classes.surfaceMuted, de = S(() => Ne(t).map((g) => ({
    ...g,
    singleClickEdit: g.singleClickEdit ?? E
  })), [t, E]), M = S(() => st(de), [de]), oe = Math.max(1, Math.ceil(G / e));
  I(() => {
    const i = Math.max(oe - 1, 0);
    A > i && z(i);
  }, [oe, A]);
  const se = k.length > 0 && k.every((i, g) => X(i, g)), Me = T(() => {
    r === "multiple" && (se ? p(k) : ne(k));
  }, [se, k, r]), $e = (i) => {
    q((g) => {
      const x = g[i] ?? w;
      return { ...g, [i]: !x };
    });
  }, le = !!(d || h || _.length), Q = r === "multiple";
  I(() => {
    Y();
  }, [L]), I(() => {
    if (!C || k.length === 0) return;
    const i = k[0], g = D(i, 0), $ = [
      M.title,
      M.trailing,
      ...M.grid,
      ...M.detail
    ].find(
      (P) => P ? he(P, i) : !1
    );
    $ && $.field && (M.detail.includes($) && q((P) => ({ ...P, [g]: !0 })), j({ rowKey: g, field: $.field }));
  }, [C, k.length]);
  const Pe = T(
    (i, g, x) => {
      j(null);
      const $ = g.field;
      if (!$) return;
      const P = i[$];
      let F = x;
      if (g.cellEditor === "agNumberCellEditor" && (F = x === "" ? null : Number(x)), F === P) return;
      const te = {
        data: i,
        oldValue: P,
        newValue: F,
        colDef: {
          field: $,
          colId: g.colId,
          headerName: g.headerName
        }
      };
      g.onCellValueChanged ? g.onCellValueChanged(te) : B && B(te);
    },
    [B]
  ), ee = (i, g, x, $) => he(x, i) ? /* @__PURE__ */ n(
    it,
    {
      row: i,
      col: x,
      activeTheme: f,
      isEditing: J?.rowKey === g && J?.field === x.field,
      onStartEdit: () => j({ rowKey: g, field: x.field }),
      onCommit: (P) => Pe(i, x, String(P)),
      onCancel: () => j(null),
      textClass: `${$} ${f.classes.textPrimary}`
    }
  ) : /* @__PURE__ */ n(
    "span",
    {
      className: `${$} ${f.classes.textPrimary} ${ye(x, i)}`,
      children: ke(i, x)
    }
  ), Te = y && k.length === 0;
  return /* @__PURE__ */ m(De, { children: [
    /* @__PURE__ */ m("div", { className: `w-full flex flex-col ${f.classes.wrapper}`, children: [
      Q && k.length > 0 && /* @__PURE__ */ m("div", { className: "flex items-center justify-between gap-2 mb-3 px-1 min-h-10", children: [
        /* @__PURE__ */ m("label", { className: "flex items-center gap-2.5 select-none cursor-pointer", children: [
          /* @__PURE__ */ n(
            ue,
            {
              checked: se,
              onChange: Me,
              color: "primary",
              className: f.classes.checkboxBorder
            }
          ),
          O.length > 0 ? /* @__PURE__ */ m(
            "span",
            {
              className: `text-xs px-2.5 py-1 rounded-full font-semibold ${f.classes.badge}`,
              children: [
                O.length,
                " selecionado",
                O.length > 1 ? "s" : ""
              ]
            }
          ) : /* @__PURE__ */ m(
            "span",
            {
              className: `text-xs font-medium ${f.classes.textMuted}`,
              children: [
                "Selecionar todos (",
                k.length,
                ")"
              ]
            }
          )
        ] }),
        le && /* @__PURE__ */ n(
          ce,
          {
            selectedRows: O,
            onEdit: d,
            onDelete: h,
            actions: _
          }
        )
      ] }),
      /* @__PURE__ */ n("div", { className: "flex flex-col gap-3", children: Te ? [0, 1, 2].map((i) => /* @__PURE__ */ n(ct, { theme: f }, i)) : k.length === 0 ? /* @__PURE__ */ m(
        "div",
        {
          className: `flex flex-col items-center justify-center gap-2 py-12 rounded-2xl border border-dashed text-center ${f.classes.divider}`,
          children: [
            /* @__PURE__ */ n(ze, { size: 28, className: f.classes.textMuted }),
            /* @__PURE__ */ n(
              "span",
              {
                className: `text-sm font-medium ${f.classes.textMuted}`,
                children: l
              }
            )
          ]
        }
      ) : k.map((i, g) => {
        const x = D(i, g), $ = X(i, g), P = ae[x] ?? w, F = M.detail.length > 0, te = F || le;
        return /* @__PURE__ */ m(
          "div",
          {
            className: `rounded-2xl border p-4 transition-all duration-200 ${f.classes.card} ${$ && Q ? f.classes.cardSelected : ""}`,
            children: [
              /* @__PURE__ */ m(
                "div",
                {
                  className: `flex items-start gap-3 ${Q ? "cursor-pointer" : ""}`,
                  onClick: () => Q && H(i, g),
                  children: [
                    Q && /* @__PURE__ */ n(
                      "div",
                      {
                        "aria-label": "Selecionar registro",
                        className: "pt-0.5 shrink-0",
                        children: /* @__PURE__ */ n(
                          ue,
                          {
                            checked: $,
                            onChange: () => {
                            },
                            color: "primary",
                            className: f.classes.checkboxBorder
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ n("div", { className: "flex-1 min-w-0 text-[15px] font-semibold leading-snug wrap-break-word", children: M.title ? ee(i, x, M.title, "") : "-" }),
                    M.trailing && /* @__PURE__ */ n("div", { className: "shrink-0 text-right", children: ee(
                      i,
                      x,
                      M.trailing,
                      "text-[15px] font-semibold tabular-nums whitespace-nowrap"
                    ) })
                  ]
                }
              ),
              M.grid.length > 0 && /* @__PURE__ */ n(
                "div",
                {
                  className: `mt-3 pt-3 border-t grid grid-cols-2 gap-x-4 gap-y-3 ${f.classes.divider}`,
                  children: M.grid.map((U, re) => /* @__PURE__ */ m("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ n(
                      "div",
                      {
                        className: `text-[10px] font-semibold uppercase tracking-wider truncate ${f.classes.textMuted}`,
                        children: U.headerName
                      }
                    ),
                    /* @__PURE__ */ n("div", { className: "mt-0.5", children: ee(
                      i,
                      x,
                      U,
                      "text-sm font-medium tabular-nums wrap-break-word"
                    ) })
                  ] }, re))
                }
              ),
              /* @__PURE__ */ n(Je, { initial: !1, children: P && F && /* @__PURE__ */ n(
                Xe.div,
                {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  transition: { duration: 0.2, ease: "easeInOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ n(
                    "div",
                    {
                      className: `mt-3 rounded-xl px-3 py-1 divide-y ${Ee} ${f.classes.divider}`,
                      children: M.detail.map((U, re) => /* @__PURE__ */ m(
                        "div",
                        {
                          className: `flex items-center justify-between gap-3 py-2 ${f.classes.divider}`,
                          children: [
                            /* @__PURE__ */ n(
                              "div",
                              {
                                className: `text-xs font-medium shrink-0 ${f.classes.textMuted}`,
                                children: U.headerName
                              }
                            ),
                            /* @__PURE__ */ n("div", { className: "min-w-0 text-right", children: ee(
                              i,
                              x,
                              U,
                              "text-sm font-medium tabular-nums wrap-break-word"
                            ) })
                          ]
                        },
                        re
                      ))
                    }
                  )
                }
              ) }),
              te && /* @__PURE__ */ m("div", { className: "mt-3 flex items-center justify-between gap-2", children: [
                F ? /* @__PURE__ */ m(
                  "button",
                  {
                    type: "button",
                    onClick: () => $e(x),
                    "aria-expanded": P,
                    className: "inline-flex items-center gap-1 shrink-0 whitespace-nowrap px-0 py-1 m-0 bg-transparent border-0 cursor-pointer text-xs font-semibold text-(--cb-text-primary) rounded-md active:opacity-70",
                    children: [
                      P ? "Ver menos" : `Ver mais (${M.detail.length})`,
                      /* @__PURE__ */ n(
                        Ye,
                        {
                          size: 14,
                          className: `transition-transform duration-200 ${P ? "rotate-180" : ""}`
                        }
                      )
                    ]
                  }
                ) : /* @__PURE__ */ n("span", {}),
                le && /* @__PURE__ */ n(
                  ce,
                  {
                    selectedRows: [i],
                    onEdit: d,
                    onDelete: h,
                    actions: _
                  }
                )
              ] })
            ]
          },
          x
        );
      }) })
    ] }),
    V && /* @__PURE__ */ n(
      Ce,
      {
        page: L,
        pageSize: e,
        totalRows: G,
        loading: y,
        onPageChange: K,
        onPageSizeChange: N,
        theme: b,
        isMobile: !0,
        themeConfig: v
      }
    )
  ] });
}
function dt(t) {
  const a = () => typeof window > "u" ? !1 : window.matchMedia(t).matches, [e, l] = R(a);
  return I(() => {
    const s = window.matchMedia(t), d = (h) => {
      l(h.matches);
    };
    return l(s.matches), s.addEventListener("change", d), () => {
      s.removeEventListener("change", d);
    };
  }, [t]), e;
}
function we(t) {
  const [a, e] = R(
    t ?? (document.documentElement.classList.contains("dark") ? "dark" : "light")
  );
  return I(() => {
    if (t) {
      e(t);
      return;
    }
    const l = new MutationObserver(() => {
      e(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    });
    return l.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class"]
    }), () => l.disconnect();
  }, [t]), a;
}
function ot(t) {
  const a = dt("(max-width: 768px)"), { modeTable: e = "auto" } = t, l = we(t.theme);
  return e === "mobile" ? /* @__PURE__ */ n(ge, { ...t, theme: l }) : e === "desktop" ? /* @__PURE__ */ n(me, { ...t, theme: l }) : a ? /* @__PURE__ */ n(ge, { ...t, theme: l }) : /* @__PURE__ */ n(me, { ...t, theme: l });
}
function xt({
  data: t,
  filterColumns: a,
  filterPlaceholder: e = "Buscar...",
  filterClassName: l,
  theme: s,
  ...d
}) {
  const [h, r] = R(t), b = we(s);
  return /* @__PURE__ */ m("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ n(
      et,
      {
        data: t,
        columns: a,
        placeholder: e,
        onChange: r,
        className: l,
        theme: b
      }
    ),
    /* @__PURE__ */ n(ot, { ...d, data: h, theme: s })
  ] });
}
export {
  ot as CBDataTable,
  me as CBDataTableDesktop,
  ge as CBDataTableMobile,
  xt as CBDataTableWithFilter
};
