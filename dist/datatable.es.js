import { jsxs as p, jsx as a, Fragment as De } from "react/jsx-runtime";
import { AgGridReact as Re } from "ag-grid-react";
import { useState as E, useCallback as P, useEffect as U, useMemo as _, useRef as Z, useImperativeHandle as Be } from "react";
import { themeQuartz as ve, colorSchemeDarkBlue as Ae, colorSchemeLightCold as Fe, ModuleRegistry as Le, ClientSideRowModelModule as ze, PaginationModule as Ie, RowSelectionModule as Ke, CellStyleModule as Ve, LocaleModule as je, TextEditorModule as Ge, NumberEditorModule as Oe, DateEditorModule as He, SelectEditorModule as Qe, LargeTextEditorModule as _e, CheckboxEditorModule as Ue, CustomEditorModule as Je, UndoRedoEditModule as We, ColumnApiModule as qe } from "ag-grid-community";
import { a as Ce } from "./iconBase-BLK_ZShL.js";
import { D as se, C as le, F as Ze, a as Xe, b as fe, c as Ye, A as et, m as tt, d as nt, e as he } from "./CBFilterBar-BaPh9tG7.js";
function ye(e) {
  const {
    col: n,
    render: t,
    children: s,
    align: r,
    mask: o,
    // Só usado no mobile; removido para não chegar ao AG Grid
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mobile: m,
    ...i
  } = e;
  if (s && s.length > 0)
    return {
      ...i,
      headerName: e.headerName,
      children: s.map((l) => ye(l)),
      flex: n ?? 1
    };
  const v = r === "center" ? "ag-header-center" : r === "right" ? "ag-header-right" : "ag-header-left", h = i.cellClass, d = (l) => {
    const c = typeof h == "function" ? h(l) : h;
    return [
      v,
      ...Array.isArray(c) ? c : c ? [c] : []
    ];
  };
  return {
    ...i,
    flex: n ?? 1,
    cellRenderer: t ? (l) => l.data ? t(l.data) : null : void 0,
    valueFormatter: o ? (l) => Ce(l.value, o) : i.valueFormatter,
    cellClass: d,
    headerClass: v
  };
}
const at = ve.withPart(Ae), rt = ve.withPart(Fe), st = (e) => e ? at : rt;
function Ne({
  selectionMode: e,
  getRowId: n
}) {
  const [t, s] = E([]), r = P(
    (d, l) => n ? n(d) : String(l),
    [n]
  ), o = P(
    (d, l) => {
      const c = r(d, l);
      return t.some(
        (x, b) => r(x, b) === c
      );
    },
    [t, r]
  ), m = P(
    (d, l) => {
      const c = r(d, l);
      s((x) => {
        const b = x.some(
          (u, C) => r(u, C) === c
        );
        return e === "single" ? b ? [] : [d] : b ? x.filter((u, C) => r(u, C) !== c) : [...x, d];
      });
    },
    [e, r]
  ), i = P(() => {
    s([]);
  }, []), v = P(
    (d) => {
      s((l) => {
        if (e === "single")
          return d.length ? [d[0]] : [];
        const c = [...l];
        return d.forEach((x) => {
          c.some(
            (u, C) => r(u, C) === r(x, C)
          ) || c.push(x);
        }), c;
      });
    },
    [e, r]
  );
  return {
    unselectRows: P(
      (d) => {
        s(
          (l) => l.filter(
            (c, x) => !d.some(
              (b, u) => r(c, x) === r(b, u)
            )
          )
        );
      },
      [r]
    ),
    selectRows: v,
    selectedRows: t,
    setSelectedRows: s,
    isSelected: o,
    toggleRow: m,
    clearSelection: i,
    getKey: r
  };
}
function ke({
  data: e,
  page: n,
  pageSize: t,
  totalRows: s,
  onPageChange: r,
  paginationMode: o
}) {
  const [m, i] = E(0), h = (o ?? (r ? "server" : "client")) === "server", d = n ?? m, l = h ? s ?? e.length : e.length, c = Math.max(1, Math.ceil(l / t)), x = (u) => {
    i(u), r?.(u);
  };
  U(() => {
    if (h || n !== void 0) return;
    const u = c - 1;
    m > u && i(u);
  }, [h, n, c, m]);
  const b = _(() => {
    if (h) return e;
    const u = d * t;
    return e.slice(u, u + t);
  }, [e, d, t, h]);
  return {
    currentPage: d,
    handlePageChange: x,
    rowsCount: l,
    totalPages: c,
    pagedData: b,
    isServer: h
  };
}
function Se({
  page: e,
  pageSize: n,
  totalRows: t,
  loading: s = !1,
  onPageChange: r,
  onPageSizeChange: o,
  isMobile: m = !1,
  theme: i,
  pageSizeOptions: v = [10, 20, 50],
  themeConfig: h
}) {
  const d = _(() => ({ ...se[i ?? "dark"] || se.dark, ...h }), [i, h]), l = Math.max(Math.ceil(t / n), 1);
  return /* @__PURE__ */ p(
    "div",
    {
      className: `flex items-center gap-1 px-4 py-3 text-sm ${d.classes.textPrimary} ${m ? "flex-col justify-center" : "flex-row justify-between"}`,
      children: [
        /* @__PURE__ */ p("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p("span", { children: [
            "Página ",
            /* @__PURE__ */ a("strong", { className: "font-semibold", children: e + 1 }),
            " de",
            " ",
            /* @__PURE__ */ a("strong", { className: "font-semibold", children: l }),
            /* @__PURE__ */ a("span", { className: "mx-2", children: "|" }),
            "Total de ",
            /* @__PURE__ */ a("strong", { className: "font-semibold", children: t }),
            " ",
            "registros"
          ] }),
          s && !m && /* @__PURE__ */ p(
            "span",
            {
              className: `inline-flex items-center gap-1.5 text-xs ${d.classes.textPrimary} animate-pulse`,
              children: [
                /* @__PURE__ */ a("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
                "Carregando..."
              ]
            }
          )
        ] }),
        /* @__PURE__ */ p(
          "div",
          {
            className: m ? "flex flex-col gap-1 items-center" : "flex gap-4",
            children: [
              o ? /* @__PURE__ */ p("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ a("span", { className: `text-xs ${d.classes.textPrimary}`, children: "Linhas por página:" }),
                /* @__PURE__ */ a(
                  "select",
                  {
                    name: "pageSize",
                    value: n,
                    onChange: (c) => o(Number(c.target.value)),
                    className: `${d.classes.selectPagination} rounded-md px-2 py-1 text-xs font-medium outline-none cursor-pointer transition-all`,
                    children: v.map((c) => /* @__PURE__ */ a(
                      "option",
                      {
                        value: c,
                        className: d.classes.textPrimary,
                        children: c
                      },
                      c
                    ))
                  }
                )
              ] }) : null,
              /* @__PURE__ */ p("div", { children: [
                /* @__PURE__ */ a(
                  le,
                  {
                    children: "Anterior",
                    disabled: e === 0 || s,
                    onClick: () => r(e - 1),
                    color: d?.colorsPagination?.bgButtonPreviousPagination
                  }
                ),
                /* @__PURE__ */ a(
                  le,
                  {
                    children: "Próxima",
                    disabled: e + 1 >= l || s,
                    onClick: () => r(e + 1),
                    color: d?.colorsPagination?.bgButtonNextPagination
                  }
                )
              ] }),
              s && m && /* @__PURE__ */ p("span", { className: "inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 animate-pulse", children: [
                /* @__PURE__ */ a("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
                "Carregando..."
              ] })
            ]
          }
        )
      ]
    }
  );
}
function me({
  selectedRows: e,
  onEdit: n,
  onDelete: t,
  actions: s = []
}) {
  return /* @__PURE__ */ p("div", { className: "flex items-center gap-2", children: [
    n && /* @__PURE__ */ a(
      le,
      {
        "aria-label": "Editar",
        color: "primary",
        iconStart: /* @__PURE__ */ a(Ze, { size: 18 }),
        disabled: e.length !== 1,
        onClick: () => {
          e.length === 1 && n(e[0]);
        },
        children: ""
      }
    ),
    t && /* @__PURE__ */ a(
      le,
      {
        "aria-label": "Excluir",
        color: "danger",
        iconStart: /* @__PURE__ */ a(Xe, { size: 18 }),
        disabled: e.length === 0,
        onClick: () => {
          e.forEach(t);
        },
        children: ""
      }
    ),
    s.map((r, o) => {
      const m = r.disabled ? r.disabled(e) : !1;
      return /* @__PURE__ */ a(
        le,
        {
          color: r.color ?? "secondary",
          iconStart: r.icon,
          disabled: m,
          onClick: () => {
            m || r.onClick(e);
          },
          children: r.children
        },
        o
      );
    })
  ] });
}
Le.registerModules([
  ze,
  Ie,
  Ke,
  Ve,
  je,
  Ge,
  Oe,
  He,
  Qe,
  _e,
  Ue,
  Je,
  We,
  qe
  // getColumnState/applyColumnState (ordenação no servidor)
]);
function ge({
  columns: e,
  data: n,
  pageSize: t = 5,
  emptyMessage: s = "Nenhum dado encontrado",
  getRowId: r,
  onEdit: o,
  onDelete: m,
  selectionMode: i = "single",
  theme: v,
  page: h,
  totalRows: d,
  onPageChange: l,
  onPageSizeChange: c,
  paginationMode: x,
  loading: b = !1,
  sort: u,
  onSortChange: C,
  singleClickEdit: j = !0,
  stopEditingWhenCellsLoseFocus: R = !0,
  onCellValueChanged: y,
  autoFocusFirstEditableCell: F = !1,
  actions: H = [],
  showFooter: W = !0
}) {
  const M = _(() => st(v === "dark"), [v]), { currentPage: G, handlePageChange: L, rowsCount: Q, pagedData: z } = ke({
    data: n,
    page: h,
    pageSize: t,
    totalRows: d,
    onPageChange: l,
    paginationMode: x
  }), { selectedRows: I, setSelectedRows: w } = Ne({
    selectionMode: i,
    getRowId: r
  }), K = Z(null), J = Z(null), te = P(() => {
    const V = (K.current?.api?.getSelectedNodes() ?? []).map((O) => O.data).filter((O) => O != null);
    w(V);
  }, [w]), X = _(
    () => e.map((N) => ye(N)),
    [e]
  ), Y = _(
    () => r ? (N) => r(N.data) : void 0,
    [r]
  );
  U(() => {
    const N = (V) => {
      J.current && !J.current.contains(V.target) && K.current?.api?.deselectAll();
    };
    return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
  }, []);
  const ee = !!C, T = _(
    () => ee ? { resizable: !1, comparator: () => 0 } : { resizable: !1 },
    [ee]
  ), g = P(
    (N) => {
      if (!C || N.source === "api") return;
      const V = N.api.getColumnState().find((O) => O.sort === "asc" || O.sort === "desc");
      C(
        V ? { field: V.colId, direction: V.sort } : null
      );
    },
    [C]
  ), D = P(() => {
    const N = K.current?.api;
    !N || u === void 0 || N.applyColumnState({
      state: u ? [{ colId: u.field, sort: u.direction }] : [],
      defaultState: { sort: null }
    });
  }, [u?.field, u?.direction]);
  U(D, [D]);
  const ne = P(() => {
    if (!F || z.length === 0) return;
    const N = e.find((O) => O.editable);
    if (!N) return;
    const V = N.colId ?? (typeof N.field == "string" ? N.field : void 0);
    V && setTimeout(() => {
      document.activeElement instanceof HTMLElement && document.activeElement.blur(), setTimeout(() => {
        K.current?.api?.startEditingCell({
          rowIndex: 0,
          colKey: V
        });
      }, 50);
    }, 0);
  }, [F, e, z.length]), $ = P(() => {
    ne();
  }, [ne]);
  return /* @__PURE__ */ p("div", { ref: J, className: "relative w-full", children: [
    /* @__PURE__ */ a(
      Re,
      {
        ref: K,
        rowData: z,
        getRowId: Y,
        defaultColDef: T,
        onSortChanged: g,
        onGridReady: D,
        columnDefs: X,
        singleClickEdit: j,
        stopEditingWhenCellsLoseFocus: R,
        onCellValueChanged: y ? (N) => y(N) : void 0,
        onFirstDataRendered: $,
        theme: M,
        animateRows: !0,
        rowSelection: i === "multiple" ? {
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
        onSelectionChanged: te,
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
    W && /* @__PURE__ */ a(
      Se,
      {
        page: G,
        pageSize: t,
        totalRows: Q,
        loading: b,
        onPageChange: L,
        onPageSizeChange: c,
        theme: v
      }
    ),
    /* @__PURE__ */ a("div", { className: "absolute -top-2 right-2 -translate-y-1/2 flex gap-2 z-10", children: /* @__PURE__ */ a(
      me,
      {
        selectedRows: I,
        onEdit: o,
        onDelete: m,
        actions: H
      }
    ) })
  ] });
}
function we(e) {
  const n = [];
  return e.forEach((t) => {
    if (t.children && t.children.length > 0) {
      n.push(...we(t.children));
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
      mobile: t.mobile,
      hide: t.hide,
      editable: t.editable,
      cellEditor: t.cellEditor,
      cellEditorParams: t.cellEditorParams,
      singleClickEdit: t.singleClickEdit,
      onCellValueChanged: t.onCellValueChanged,
      cellClass: t.cellClass
    });
  }), n;
}
const pe = 4;
function lt(e) {
  const n = e.filter((i) => !i.hide && i.mobile !== "hidden");
  let t = n.find((i) => i.mobile === "title"), s = n.find((i) => i.mobile === "trailing");
  const r = n.filter((i) => i.mobile === "grid");
  let o = n.filter((i) => !i.mobile);
  !t && o.length > 0 && (t = o[0], o = o.slice(1)), s || (s = [...o].reverse().find((i) => i.mask === "currency"), s && (o = o.filter((i) => i !== s))), r.length === 0 && (r.push(...o.slice(0, pe)), o = o.slice(pe));
  const m = n.filter(
    (i) => i.mobile === "detail" || o.includes(i)
  );
  return { title: t, trailing: s, grid: r, detail: m };
}
function it(e, n) {
  if (!n) return "-";
  const t = n.split(".").reduce((s, r) => {
    if (s != null)
      return s[r];
  }, e);
  return t == null || t === "" ? "-" : String(t);
}
function Ee(e, n) {
  if (n.render) return n.render(e);
  const t = n.valueGetter ? n.valueGetter({
    data: e,
    colDef: {
      field: n.field,
      colId: n.colId,
      headerName: n.headerName
    }
  }) : it(e, n.field);
  return t == null || t === "" ? "-" : n.mask ? Ce(t, n.mask) : String(t);
}
function ot(e) {
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
function xe(e, n) {
  return e.editable ? typeof e.editable == "function" ? e.editable({ data: n }) : e.editable : !1;
}
function Pe(e, n) {
  const t = typeof e.cellClass == "function" ? e.cellClass({ data: n }) : e.cellClass;
  return t ? Array.isArray(t) ? t.join(" ") : t : "";
}
function ct({
  row: e,
  col: n,
  isEditing: t,
  onStartEdit: s,
  onCommit: r,
  onCancel: o,
  textClass: m,
  activeTheme: i
}) {
  const v = n.field, h = v ? e[v] : void 0, d = ot(n.cellEditor), l = n.cellEditorParams ?? {}, c = Z(null);
  U(() => {
    if (t) {
      const y = setTimeout(() => c.current?.focus(), 0);
      return () => clearTimeout(y);
    }
  }, [t]);
  const x = (y) => {
    y.key === "Enter" ? (y.preventDefault(), r(c.current?.value ?? "")) : y.key === "Escape" && (y.preventDefault(), o());
  }, b = () => {
    r(c.current?.value ?? "");
  }, u = () => {
    n.singleClickEdit && !t && s();
  }, C = () => {
    !n.singleClickEdit && !t && s();
  };
  if (t)
    return /* @__PURE__ */ a(
      "input",
      {
        ref: c,
        type: d,
        defaultValue: h != null ? String(h) : "",
        min: l.min !== void 0 ? Number(l.min) : void 0,
        max: l.max !== void 0 ? Number(l.max) : void 0,
        step: l.precision !== void 0 ? l.precision === 0 ? 1 : Math.pow(10, -Number(l.precision)) : void 0,
        onKeyDown: x,
        onBlur: b,
        onClick: (y) => y.stopPropagation(),
        className: `
          w-full max-w-28 h-8
          px-2.5
          bg-transparent ${i.classes.textPrimary}
          border border-(--cb-color-primary)
          text-sm font-medium
          rounded-lg outline-none ring-2 ring-(--cb-color-primary)/20
          no-number-spinner
          `
      }
    );
  const j = Ee(e, n), R = Pe(n, e);
  return /* @__PURE__ */ a(
    "span",
    {
      className: `inline-flex items-center min-h-8 px-2.5 -mx-px rounded-lg border border-dashed border-slate-400/50 cursor-pointer select-none ${m} ${R}`,
      onClick: (y) => {
        y.stopPropagation(), u();
      },
      onDoubleClick: (y) => {
        y.stopPropagation(), C();
      },
      title: n.singleClickEdit ? "Toque para editar" : "Toque duas vezes para editar",
      children: j
    }
  );
}
function dt({ theme: e }) {
  const n = e.classes.surfaceMuted ?? "bg-slate-400/15";
  return /* @__PURE__ */ p("div", { className: `rounded-2xl border p-4 ${e.classes.card}`, children: [
    /* @__PURE__ */ p("div", { className: "flex items-center justify-between gap-6 animate-pulse", children: [
      /* @__PURE__ */ a("div", { className: `h-4 w-1/2 rounded ${n}` }),
      /* @__PURE__ */ a("div", { className: `h-4 w-16 rounded ${n}` })
    ] }),
    /* @__PURE__ */ a(
      "div",
      {
        className: `mt-4 pt-4 border-t grid grid-cols-2 gap-4 animate-pulse ${e.classes.divider}`,
        children: [0, 1, 2, 3].map((t) => /* @__PURE__ */ p("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ a("div", { className: `h-2.5 w-14 rounded ${n}` }),
          /* @__PURE__ */ a("div", { className: `h-3.5 w-20 rounded ${n}` })
        ] }, t))
      }
    )
  ] });
}
function be({
  columns: e,
  data: n,
  pageSize: t = 5,
  emptyMessage: s = "Nenhum dado encontrado",
  getRowId: r,
  onEdit: o,
  onDelete: m,
  selectionMode: i = "single",
  theme: v,
  themeConfig: h,
  page: d,
  totalRows: l,
  onPageChange: c,
  onPageSizeChange: x,
  paginationMode: b,
  loading: u = !1,
  defaultExpanded: C = !1,
  singleClickEdit: j = !0,
  showFooter: R = !0,
  onCellValueChanged: y,
  autoFocusFirstEditableCell: F = !1,
  actions: H = []
}) {
  const [W, M] = E(
    {}
  ), [G, L] = E(null), {
    currentPage: Q,
    handlePageChange: z,
    rowsCount: I,
    pagedData: w
  } = ke({
    data: n,
    page: d,
    pageSize: t,
    totalRows: l,
    onPageChange: c,
    paginationMode: b
  }), {
    selectedRows: K,
    isSelected: J,
    toggleRow: te,
    clearSelection: X,
    selectRows: Y,
    unselectRows: ee,
    getKey: T
  } = Ne({
    selectionMode: i,
    getRowId: r
  }), g = _(() => ({ ...se[v ?? "dark"] || se.dark, ...h }), [v, h]), D = g.classes.surfaceMuted ?? se[v ?? "dark"].classes.surfaceMuted, ne = _(() => we(e).map((k) => ({
    ...k,
    singleClickEdit: k.singleClickEdit ?? j
  })), [e, j]), $ = _(() => lt(ne), [ne]), N = w.length > 0 && w.every((f, k) => J(f, k)), V = P(() => {
    i === "multiple" && (N ? ee(w) : Y(w));
  }, [N, w, i]), O = (f) => {
    M((k) => {
      const S = k[f] ?? C;
      return { ...k, [f]: !S };
    });
  }, ce = !!(o || m || H.length), ae = i === "multiple";
  U(() => {
    X();
  }, [Q]), U(() => {
    if (!F || w.length === 0) return;
    const f = w[0], k = T(f, 0), B = [
      $.title,
      $.trailing,
      ...$.grid,
      ...$.detail
    ].find(
      (A) => A ? xe(A, f) : !1
    );
    B && B.field && ($.detail.includes(B) && M((A) => ({ ...A, [k]: !0 })), L({ rowKey: k, field: B.field }));
  }, [F, w.length]);
  const Te = P(
    (f, k, S) => {
      L(null);
      const B = k.field;
      if (!B) return;
      const A = f[B];
      let q = S;
      if (k.cellEditor === "agNumberCellEditor" && (q = S === "" ? null : Number(S)), q === A) return;
      const oe = {
        data: f,
        oldValue: A,
        newValue: q,
        colDef: {
          field: B,
          colId: k.colId,
          headerName: k.headerName
        }
      };
      k.onCellValueChanged ? k.onCellValueChanged(oe) : y && y(oe);
    },
    [y]
  ), ie = (f, k, S, B) => xe(S, f) ? /* @__PURE__ */ a(
    ct,
    {
      row: f,
      col: S,
      activeTheme: g,
      isEditing: G?.rowKey === k && G?.field === S.field,
      onStartEdit: () => L({ rowKey: k, field: S.field }),
      onCommit: (A) => Te(f, S, String(A)),
      onCancel: () => L(null),
      textClass: `${B} ${g.classes.textPrimary}`
    }
  ) : /* @__PURE__ */ a(
    "span",
    {
      className: `${B} ${g.classes.textPrimary} ${Pe(S, f)}`,
      children: Ee(f, S)
    }
  ), $e = u && w.length === 0;
  return /* @__PURE__ */ p(De, { children: [
    /* @__PURE__ */ p("div", { className: `w-full flex flex-col ${g.classes.wrapper}`, children: [
      ae && w.length > 0 && /* @__PURE__ */ p("div", { className: "flex items-center justify-between gap-2 mb-3 px-1 min-h-10", children: [
        /* @__PURE__ */ p("label", { className: "flex items-center gap-2.5 select-none cursor-pointer", children: [
          /* @__PURE__ */ a(
            fe,
            {
              checked: N,
              onChange: V,
              color: "primary",
              className: g.classes.checkboxBorder
            }
          ),
          K.length > 0 ? /* @__PURE__ */ p(
            "span",
            {
              className: `text-xs px-2.5 py-1 rounded-full font-semibold ${g.classes.badge}`,
              children: [
                K.length,
                " selecionado",
                K.length > 1 ? "s" : ""
              ]
            }
          ) : /* @__PURE__ */ p(
            "span",
            {
              className: `text-xs font-medium ${g.classes.textMuted}`,
              children: [
                "Selecionar todos (",
                w.length,
                ")"
              ]
            }
          )
        ] }),
        ce && /* @__PURE__ */ a(
          me,
          {
            selectedRows: K,
            onEdit: o,
            onDelete: m,
            actions: H
          }
        )
      ] }),
      /* @__PURE__ */ a("div", { className: "flex flex-col gap-3", children: $e ? [0, 1, 2].map((f) => /* @__PURE__ */ a(dt, { theme: g }, f)) : w.length === 0 ? /* @__PURE__ */ p(
        "div",
        {
          className: `flex flex-col items-center justify-center gap-2 py-12 rounded-2xl border border-dashed text-center ${g.classes.divider}`,
          children: [
            /* @__PURE__ */ a(Ye, { size: 28, className: g.classes.textMuted }),
            /* @__PURE__ */ a(
              "span",
              {
                className: `text-sm font-medium ${g.classes.textMuted}`,
                children: s
              }
            )
          ]
        }
      ) : w.map((f, k) => {
        const S = T(f, k), B = J(f, k), A = W[S] ?? C, q = $.detail.length > 0, oe = q || ce;
        return /* @__PURE__ */ p(
          "div",
          {
            className: `rounded-2xl border p-4 transition-all duration-200 ${g.classes.card} ${B && ae ? g.classes.cardSelected : ""}`,
            children: [
              /* @__PURE__ */ p(
                "div",
                {
                  className: `flex items-start gap-3 ${ae ? "cursor-pointer" : ""}`,
                  onClick: () => ae && te(f, k),
                  children: [
                    ae && /* @__PURE__ */ a(
                      "div",
                      {
                        "aria-label": "Selecionar registro",
                        className: "pt-0.5 shrink-0",
                        children: /* @__PURE__ */ a(
                          fe,
                          {
                            checked: B,
                            onChange: () => {
                            },
                            color: "primary",
                            className: g.classes.checkboxBorder
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ a("div", { className: "flex-1 min-w-0 text-[15px] font-semibold leading-snug wrap-break-word", children: $.title ? ie(f, S, $.title, "") : "-" }),
                    $.trailing && /* @__PURE__ */ a("div", { className: "shrink-0 text-right", children: ie(
                      f,
                      S,
                      $.trailing,
                      "text-[15px] font-semibold tabular-nums whitespace-nowrap"
                    ) })
                  ]
                }
              ),
              $.grid.length > 0 && /* @__PURE__ */ a(
                "div",
                {
                  className: `mt-3 pt-3 border-t grid grid-cols-2 gap-x-4 gap-y-3 ${g.classes.divider}`,
                  children: $.grid.map((re, de) => /* @__PURE__ */ p("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ a(
                      "div",
                      {
                        className: `text-[10px] font-semibold uppercase tracking-wider truncate ${g.classes.textMuted}`,
                        children: re.headerName
                      }
                    ),
                    /* @__PURE__ */ a("div", { className: "mt-0.5", children: ie(
                      f,
                      S,
                      re,
                      "text-sm font-medium tabular-nums wrap-break-word"
                    ) })
                  ] }, de))
                }
              ),
              /* @__PURE__ */ a(et, { initial: !1, children: A && q && /* @__PURE__ */ a(
                tt.div,
                {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  transition: { duration: 0.2, ease: "easeInOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ a(
                    "div",
                    {
                      className: `mt-3 rounded-xl px-3 py-1 divide-y ${D} ${g.classes.divider}`,
                      children: $.detail.map((re, de) => /* @__PURE__ */ p(
                        "div",
                        {
                          className: `flex items-center justify-between gap-3 py-2 ${g.classes.divider}`,
                          children: [
                            /* @__PURE__ */ a(
                              "div",
                              {
                                className: `text-xs font-medium shrink-0 ${g.classes.textMuted}`,
                                children: re.headerName
                              }
                            ),
                            /* @__PURE__ */ a("div", { className: "min-w-0 text-right", children: ie(
                              f,
                              S,
                              re,
                              "text-sm font-medium tabular-nums wrap-break-word"
                            ) })
                          ]
                        },
                        de
                      ))
                    }
                  )
                }
              ) }),
              oe && /* @__PURE__ */ p("div", { className: "mt-3 flex items-center justify-between gap-2", children: [
                q ? /* @__PURE__ */ p(
                  "button",
                  {
                    type: "button",
                    onClick: () => O(S),
                    "aria-expanded": A,
                    className: "inline-flex items-center gap-1 shrink-0 whitespace-nowrap px-0 py-1 m-0 bg-transparent border-0 cursor-pointer text-xs font-semibold text-(--cb-text-primary) rounded-md active:opacity-70",
                    children: [
                      A ? "Ver menos" : `Ver mais (${$.detail.length})`,
                      /* @__PURE__ */ a(
                        nt,
                        {
                          size: 14,
                          className: `transition-transform duration-200 ${A ? "rotate-180" : ""}`
                        }
                      )
                    ]
                  }
                ) : /* @__PURE__ */ a("span", {}),
                ce && /* @__PURE__ */ a(
                  me,
                  {
                    selectedRows: [f],
                    onEdit: o,
                    onDelete: m,
                    actions: H
                  }
                )
              ] })
            ]
          },
          S
        );
      }) })
    ] }),
    R && /* @__PURE__ */ a(
      Se,
      {
        page: Q,
        pageSize: t,
        totalRows: I,
        loading: u,
        onPageChange: z,
        onPageSizeChange: x,
        theme: v,
        isMobile: !0,
        themeConfig: h
      }
    )
  ] });
}
function ut(e) {
  const n = () => typeof window > "u" ? !1 : window.matchMedia(e).matches, [t, s] = E(n);
  return U(() => {
    const r = window.matchMedia(e), o = (m) => {
      s(m.matches);
    };
    return s(r.matches), r.addEventListener("change", o), () => {
      r.removeEventListener("change", o);
    };
  }, [e]), t;
}
function Me(e) {
  const [n, t] = E(
    e ?? (document.documentElement.classList.contains("dark") ? "dark" : "light")
  );
  return U(() => {
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
function ue(e) {
  const n = ut("(max-width: 768px)"), { modeTable: t = "auto" } = e, s = Me(e.theme);
  return t === "mobile" ? /* @__PURE__ */ a(be, { ...e, theme: s }) : t === "desktop" ? /* @__PURE__ */ a(ge, { ...e, theme: s }) : n ? /* @__PURE__ */ a(be, { ...e, theme: s }) : /* @__PURE__ */ a(ge, { ...e, theme: s });
}
const mt = (e) => e instanceof Error && (e.name === "AbortError" || e.name === "CanceledError");
function ft({
  fetchData: e,
  filters: n,
  initialPageSize: t = 20,
  initialSort: s = null,
  enabled: r = !0,
  onError: o
}) {
  const [m, i] = E([]), [v, h] = E(0), [d, l] = E(!1), [c, x] = E(null), [b, u] = E(0), [C, j] = E(t), [R, y] = E(s), [F, H] = E(), [W, M] = E(0), G = Z(e);
  G.current = e;
  const L = Z(n);
  L.current = n;
  const Q = Z(o);
  Q.current = o;
  const z = JSON.stringify(n ?? null), [I, w] = E(z);
  z !== I && (w(z), u(0));
  const K = F ? JSON.stringify(F) : "", J = R ? `${R.field}:${R.direction}` : "";
  U(() => {
    const T = G.current;
    if (!r || !T) return;
    const g = new AbortController();
    return l(!0), x(null), T(
      {
        page: b,
        pageSize: C,
        search: F,
        sort: R ?? void 0,
        filters: L.current ?? {}
      },
      g.signal
    ).then((D) => {
      if (!g.signal.aborted) {
        if (D.rows.length === 0 && b > 0 && D.total > 0) {
          u(Math.max(0, Math.ceil(D.total / C) - 1));
          return;
        }
        i(D.rows), h(D.total), l(!1);
      }
    }).catch((D) => {
      g.signal.aborted || mt(D) || (x(D), l(!1), Q.current?.(D));
    }), () => g.abort();
  }, [r, b, C, K, J, z, W]);
  const te = P(() => M((T) => T + 1), []), X = P((T) => {
    j(T), u(0);
  }, []), Y = P((T) => {
    y(T), u(0);
  }, []), ee = P((T) => {
    H(T?.term ? T : void 0), u(0);
  }, []);
  return {
    rows: m,
    total: v,
    loading: d,
    error: c,
    page: b,
    pageSize: C,
    sort: R,
    search: F,
    setPage: u,
    setPageSize: X,
    setSort: Y,
    setSearch: ee,
    reload: te,
    /** Props prontas para espalhar no `CBDataTable`. */
    tableProps: {
      data: m,
      page: b,
      pageSize: C,
      totalRows: v,
      loading: d,
      paginationMode: "server",
      onPageChange: u,
      onPageSizeChange: X,
      sort: R,
      onSortChange: Y
    }
  };
}
function Ct({
  data: e,
  filterColumns: n,
  filterPlaceholder: t = "Buscar...",
  filterClassName: s,
  theme: r,
  fetchData: o,
  filters: m,
  initialSort: i,
  searchDebounceMs: v,
  onFetchError: h,
  tableRef: d,
  ...l
}) {
  const c = Me(r), x = !!o, [b, u] = E(e ?? []), [C, j] = E(0), R = l.onPageChange !== void 0, y = Z(e), F = (I) => {
    u(I), y.current === e && j(0), y.current = e;
  }, H = l.pageSize ?? 5, W = Math.max(
    0,
    Math.ceil(b.length / H) - 1
  ), M = ft({
    fetchData: o,
    filters: m,
    initialPageSize: l.pageSize ?? 20,
    initialSort: i,
    enabled: x,
    onError: h
  });
  Be(
    d,
    () => ({ reload: M.reload, setPage: M.setPage }),
    [M.reload, M.setPage]
  );
  const { onDelete: G, onPageSizeChange: L } = l, Q = L ? (I) => {
    M.setPageSize(I), L(I);
  } : void 0, z = G ? async (I) => {
    try {
      await G(I);
    } finally {
      M.reload();
    }
  } : void 0;
  return /* @__PURE__ */ p("div", { className: "flex flex-col gap-6", children: [
    x ? /* @__PURE__ */ a(
      he,
      {
        columns: n,
        placeholder: t,
        onSearchChange: M.setSearch,
        debounceMs: v,
        className: s,
        theme: c
      }
    ) : /* @__PURE__ */ a(
      he,
      {
        data: e ?? [],
        columns: n,
        placeholder: t,
        onChange: F,
        className: s,
        theme: c
      }
    ),
    x ? /* @__PURE__ */ a(
      ue,
      {
        ...l,
        ...M.tableProps,
        loading: M.loading || l.loading,
        onPageSizeChange: Q,
        onDelete: z,
        theme: r
      }
    ) : R ? /* @__PURE__ */ a(ue, { ...l, data: b, theme: r }) : /* @__PURE__ */ a(
      ue,
      {
        ...l,
        data: b,
        paginationMode: "client",
        page: Math.min(C, W),
        onPageChange: j,
        theme: r
      }
    )
  ] });
}
export {
  ue as CBDataTable,
  ge as CBDataTableDesktop,
  be as CBDataTableMobile,
  Ct as CBDataTableWithFilter,
  ft as useCBTableQuery
};
