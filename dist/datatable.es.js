import { jsxs as y, jsx as a, Fragment as De } from "react/jsx-runtime";
import { AgGridReact as Re } from "ag-grid-react";
import { useState as w, useCallback as T, useEffect as W, useMemo as U, useRef as Y, useImperativeHandle as Be } from "react";
import { themeQuartz as Ce, colorSchemeDarkBlue as Ae, colorSchemeLightCold as Fe, ModuleRegistry as Le, ClientSideRowModelModule as ze, PaginationModule as Ie, RowSelectionModule as Ke, CellStyleModule as je, LocaleModule as Ve, TextEditorModule as Oe, NumberEditorModule as Ge, DateEditorModule as He, SelectEditorModule as Qe, LargeTextEditorModule as Je, CheckboxEditorModule as Ue, CustomEditorModule as We, UndoRedoEditModule as _e, ColumnApiModule as qe } from "ag-grid-community";
import { a as ve } from "./iconBase-BLK_ZShL.js";
import { D as oe, C as se, F as Xe, a as Ye, b as ge, c as Ze, d as et, A as tt, m as nt, e as pe } from "./CBFilterBar-BaPh9tG7.js";
function ye(e) {
  const {
    col: n,
    render: t,
    children: s,
    align: r,
    mask: c,
    // Só usado no mobile; removido para não chegar ao AG Grid
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mobile: f,
    ...i
  } = e;
  if (s && s.length > 0)
    return {
      ...i,
      headerName: e.headerName,
      children: s.map((l) => ye(l)),
      flex: n ?? 1
    };
  const N = r === "center" ? "ag-header-center" : r === "right" ? "ag-header-right" : "ag-header-left", h = i.cellClass, d = (l) => {
    const o = typeof h == "function" ? h(l) : h;
    return [
      N,
      ...Array.isArray(o) ? o : o ? [o] : []
    ];
  };
  return {
    ...i,
    flex: n ?? 1,
    cellRenderer: t ? (l) => l.data ? t(l.data) : null : void 0,
    valueFormatter: c ? (l) => ve(l.value, c) : i.valueFormatter,
    cellClass: d,
    headerClass: N
  };
}
const at = Ce.withPart(Ae), rt = Ce.withPart(Fe), st = (e) => e ? at : rt;
function Ne({
  selectionMode: e,
  getRowId: n
}) {
  const [t, s] = w([]), r = T(
    (d, l) => n ? n(d) : String(l),
    [n]
  ), c = T(
    (d, l) => {
      const o = r(d, l);
      return t.some(
        (p, b) => r(p, b) === o
      );
    },
    [t, r]
  ), f = T(
    (d, l) => {
      const o = r(d, l);
      s((p) => {
        const b = p.some(
          (u, k) => r(u, k) === o
        );
        return e === "single" ? b ? [] : [d] : b ? p.filter((u, k) => r(u, k) !== o) : [...p, d];
      });
    },
    [e, r]
  ), i = T(() => {
    s([]);
  }, []), N = T(
    (d) => {
      s((l) => {
        if (e === "single")
          return d.length ? [d[0]] : [];
        const o = [...l];
        return d.forEach((p) => {
          o.some(
            (u, k) => r(u, k) === r(p, k)
          ) || o.push(p);
        }), o;
      });
    },
    [e, r]
  );
  return {
    unselectRows: T(
      (d) => {
        s(
          (l) => l.filter(
            (o, p) => !d.some(
              (b, u) => r(o, p) === r(b, u)
            )
          )
        );
      },
      [r]
    ),
    selectRows: N,
    selectedRows: t,
    setSelectedRows: s,
    isSelected: c,
    toggleRow: f,
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
  paginationMode: c
}) {
  const [f, i] = w(0), h = (c ?? (r ? "server" : "client")) === "server", d = n ?? f, l = h ? s ?? e.length : e.length, o = Math.max(1, Math.ceil(l / t)), p = (u) => {
    i(u), r?.(u);
  };
  W(() => {
    if (h || n !== void 0) return;
    const u = o - 1;
    f > u && i(u);
  }, [h, n, o, f]);
  const b = U(() => {
    if (h) return e;
    const u = d * t;
    return e.slice(u, u + t);
  }, [e, d, t, h]);
  return {
    currentPage: d,
    handlePageChange: p,
    rowsCount: l,
    totalPages: o,
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
  onPageSizeChange: c,
  isMobile: f = !1,
  theme: i,
  pageSizeOptions: N = [10, 20, 50],
  themeConfig: h
}) {
  const d = U(() => ({ ...oe[i ?? "dark"] || oe.dark, ...h }), [i, h]), l = Math.max(Math.ceil(t / n), 1);
  return /* @__PURE__ */ y(
    "div",
    {
      className: `flex items-center gap-1 px-4 py-3 text-sm ${d.classes.textPrimary} ${f ? "flex-col justify-center" : "flex-row justify-between"}`,
      children: [
        /* @__PURE__ */ y("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ y("span", { children: [
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
          s && !f && /* @__PURE__ */ y(
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
        /* @__PURE__ */ y(
          "div",
          {
            className: f ? "flex flex-col gap-1 items-center" : "flex gap-4",
            children: [
              c ? /* @__PURE__ */ y("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ a("span", { className: `text-xs ${d.classes.textPrimary}`, children: "Linhas por página:" }),
                /* @__PURE__ */ a(
                  "select",
                  {
                    name: "pageSize",
                    value: n,
                    onChange: (o) => c(Number(o.target.value)),
                    className: `${d.classes.selectPagination} rounded-md px-2 py-1 text-xs font-medium outline-none cursor-pointer transition-all`,
                    children: N.map((o) => /* @__PURE__ */ a(
                      "option",
                      {
                        value: o,
                        className: d.classes.textPrimary,
                        children: o
                      },
                      o
                    ))
                  }
                )
              ] }) : null,
              /* @__PURE__ */ y("div", { children: [
                /* @__PURE__ */ a(
                  se,
                  {
                    children: "Anterior",
                    disabled: e === 0 || s,
                    onClick: () => r(e - 1),
                    color: d?.colorsPagination?.bgButtonPreviousPagination
                  }
                ),
                /* @__PURE__ */ a(
                  se,
                  {
                    children: "Próxima",
                    disabled: e + 1 >= l || s,
                    onClick: () => r(e + 1),
                    color: d?.colorsPagination?.bgButtonNextPagination
                  }
                )
              ] }),
              s && f && /* @__PURE__ */ y("span", { className: "inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 animate-pulse", children: [
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
function fe({
  selectedRows: e,
  onEdit: n,
  onDelete: t,
  actions: s = []
}) {
  return /* @__PURE__ */ y("div", { className: "flex items-center gap-2", children: [
    n && /* @__PURE__ */ a(
      se,
      {
        "aria-label": "Editar",
        color: "primary",
        iconStart: /* @__PURE__ */ a(Xe, { size: 18 }),
        disabled: e.length !== 1,
        onClick: () => {
          e.length === 1 && n(e[0]);
        },
        children: ""
      }
    ),
    t && /* @__PURE__ */ a(
      se,
      {
        "aria-label": "Excluir",
        color: "danger",
        iconStart: /* @__PURE__ */ a(Ye, { size: 18 }),
        disabled: e.length === 0,
        onClick: () => {
          e.forEach(t);
        },
        children: ""
      }
    ),
    s.map((r, c) => {
      const f = r.disabled ? r.disabled(e) : !1;
      return /* @__PURE__ */ a(
        se,
        {
          color: r.color ?? "secondary",
          iconStart: r.icon,
          disabled: f,
          onClick: () => {
            f || r.onClick(e);
          },
          children: r.children
        },
        c
      );
    })
  ] });
}
Le.registerModules([
  ze,
  Ie,
  Ke,
  je,
  Ve,
  Oe,
  Ge,
  He,
  Qe,
  Je,
  Ue,
  We,
  _e,
  qe
  // getColumnState/applyColumnState (ordenação no servidor)
]);
function be({
  columns: e,
  data: n,
  pageSize: t = 5,
  emptyMessage: s = "Nenhum dado encontrado",
  getRowId: r,
  onEdit: c,
  onDelete: f,
  selectionMode: i = "single",
  theme: N,
  page: h,
  totalRows: d,
  onPageChange: l,
  onPageSizeChange: o,
  paginationMode: p,
  loading: b = !1,
  sort: u,
  onSortChange: k,
  singleClickEdit: V = !0,
  stopEditingWhenCellsLoseFocus: B = !0,
  onCellValueChanged: x,
  autoFocusFirstEditableCell: F = !1,
  actions: Q = [],
  showFooter: q = !0
}) {
  const $ = U(() => st(N === "dark"), [N]), { currentPage: H, handlePageChange: L, rowsCount: J, pagedData: z } = ke({
    data: n,
    page: h,
    pageSize: t,
    totalRows: d,
    onPageChange: l,
    paginationMode: p
  }), { selectedRows: I, setSelectedRows: P } = Ne({
    selectionMode: i,
    getRowId: r
  }), K = Y(null), _ = Y(null), ae = T(() => {
    const j = (K.current?.api?.getSelectedNodes() ?? []).map((O) => O.data).filter((O) => O != null);
    P(j);
  }, [P]), Z = U(
    () => e.map((C) => ye(C)),
    [e]
  ), ee = U(
    () => r ? (C) => r(C.data) : void 0,
    [r]
  );
  W(() => {
    const C = (j) => {
      _.current && !_.current.contains(j.target) && K.current?.api?.deselectAll();
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, []);
  const te = !!k, D = U(
    () => te ? { resizable: !1, comparator: () => 0 } : { resizable: !1 },
    [te]
  ), g = T(
    (C) => {
      if (!k || C.source === "api") return;
      const j = C.api.getColumnState().find((O) => O.sort === "asc" || O.sort === "desc");
      k(
        j ? { field: j.colId, direction: j.sort } : null
      );
    },
    [k]
  ), M = T(() => {
    const C = K.current?.api;
    !C || u === void 0 || C.applyColumnState({
      state: u ? [{ colId: u.field, sort: u.direction }] : [],
      defaultState: { sort: null }
    });
  }, [u?.field, u?.direction]);
  W(M, [M]);
  const E = T(() => {
    if (!F || z.length === 0) return;
    const C = e.find((O) => O.editable);
    if (!C) return;
    const j = C.colId ?? (typeof C.field == "string" ? C.field : void 0);
    j && setTimeout(() => {
      document.activeElement instanceof HTMLElement && document.activeElement.blur(), setTimeout(() => {
        K.current?.api?.startEditingCell({
          rowIndex: 0,
          colKey: j
        });
      }, 50);
    }, 0);
  }, [F, e, z.length]), le = T(() => {
    E();
  }, [E]);
  return /* @__PURE__ */ y("div", { ref: _, className: "relative w-full", children: [
    /* @__PURE__ */ a(
      Re,
      {
        ref: K,
        rowData: z,
        getRowId: ee,
        defaultColDef: D,
        onSortChanged: g,
        onGridReady: M,
        columnDefs: Z,
        singleClickEdit: V,
        stopEditingWhenCellsLoseFocus: B,
        onCellValueChanged: x ? (C) => x(C) : void 0,
        onFirstDataRendered: le,
        theme: $,
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
        onSelectionChanged: ae,
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
    q && /* @__PURE__ */ a(
      Se,
      {
        page: H,
        pageSize: t,
        totalRows: J,
        loading: b,
        onPageChange: L,
        onPageSizeChange: o,
        theme: N
      }
    ),
    /* @__PURE__ */ a("div", { className: "absolute -top-2 right-2 -translate-y-1/2 flex gap-2 z-10", children: /* @__PURE__ */ a(
      fe,
      {
        selectedRows: I,
        onEdit: c,
        onDelete: f,
        actions: Q
      }
    ) })
  ] });
}
function Ee(e) {
  const n = [];
  return e.forEach((t) => {
    if (t.children && t.children.length > 0) {
      n.push(...Ee(t.children));
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
function lt(e) {
  const n = e.filter((i) => !i.hide && i.mobile !== "hidden");
  let t = n.find((i) => i.mobile === "title"), s = n.find((i) => i.mobile === "trailing");
  const r = n.filter((i) => i.mobile === "grid");
  let c = n.filter((i) => !i.mobile);
  !t && c.length > 0 && (t = c[0], c = c.slice(1)), s || (s = [...c].reverse().find((i) => i.mask === "currency") ?? c[0], s && (c = c.filter((i) => i !== s)));
  const f = n.filter(
    (i) => i.mobile === "detail" || c.includes(i)
  );
  return { title: t, trailing: s, grid: r, detail: f };
}
function it(e, n) {
  if (!n) return "-";
  const t = n.split(".").reduce((s, r) => {
    if (s != null)
      return s[r];
  }, e);
  return t == null || t === "" ? "-" : String(t);
}
function Pe(e, n) {
  if (n.render) return n.render(e);
  const t = n.valueGetter ? n.valueGetter({
    data: e,
    colDef: {
      field: n.field,
      colId: n.colId,
      headerName: n.headerName
    }
  }) : it(e, n.field);
  return t == null || t === "" ? "-" : n.mask ? ve(t, n.mask) : String(t);
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
function ue(e, n) {
  return e.editable ? typeof e.editable == "function" ? e.editable({ data: n }) : e.editable : !1;
}
function we(e, n) {
  const t = typeof e.cellClass == "function" ? e.cellClass({ data: n }) : e.cellClass;
  return t ? Array.isArray(t) ? t.join(" ") : t : "";
}
function ct({
  row: e,
  col: n,
  isEditing: t,
  onStartEdit: s,
  onCommit: r,
  onCancel: c,
  textClass: f,
  activeTheme: i
}) {
  const N = n.field, h = N ? e[N] : void 0, d = ot(n.cellEditor), l = n.cellEditorParams ?? {}, o = Y(null);
  W(() => {
    if (t) {
      const x = setTimeout(() => o.current?.focus(), 0);
      return () => clearTimeout(x);
    }
  }, [t]);
  const p = (x) => {
    x.key === "Enter" ? (x.preventDefault(), r(o.current?.value ?? "")) : x.key === "Escape" && (x.preventDefault(), c());
  }, b = () => {
    r(o.current?.value ?? "");
  }, u = () => {
    n.singleClickEdit && !t && s();
  }, k = () => {
    !n.singleClickEdit && !t && s();
  };
  if (t)
    return /* @__PURE__ */ a(
      "input",
      {
        ref: o,
        type: d,
        defaultValue: h != null ? String(h) : "",
        min: l.min !== void 0 ? Number(l.min) : void 0,
        max: l.max !== void 0 ? Number(l.max) : void 0,
        step: l.precision !== void 0 ? l.precision === 0 ? 1 : Math.pow(10, -Number(l.precision)) : void 0,
        onKeyDown: p,
        onBlur: b,
        onClick: (x) => x.stopPropagation(),
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
  const V = Pe(e, n), B = we(n, e);
  return /* @__PURE__ */ a(
    "span",
    {
      className: `inline-flex items-center min-h-8 px-2.5 -mx-px rounded-lg border border-dashed border-slate-400/50 cursor-pointer select-none ${f} ${B}`,
      onClick: (x) => {
        x.stopPropagation(), u();
      },
      onDoubleClick: (x) => {
        x.stopPropagation(), k();
      },
      title: n.singleClickEdit ? "Toque para editar" : "Toque duas vezes para editar",
      children: V
    }
  );
}
function dt({ theme: e }) {
  const n = e.classes.surfaceMuted ?? "bg-slate-400/15";
  return /* @__PURE__ */ a("div", { className: `rounded-xl border px-3.5 py-1.5 ${e.classes.card}`, children: /* @__PURE__ */ y("div", { className: "flex items-center justify-between gap-6 min-h-11 animate-pulse", children: [
    /* @__PURE__ */ a("div", { className: `h-3.5 w-1/2 rounded ${n}` }),
    /* @__PURE__ */ a("div", { className: `h-3.5 w-16 rounded ${n}` })
  ] }) });
}
function xe({
  columns: e,
  data: n,
  pageSize: t = 5,
  emptyMessage: s = "Nenhum dado encontrado",
  getRowId: r,
  onEdit: c,
  onDelete: f,
  selectionMode: i = "single",
  theme: N,
  themeConfig: h,
  page: d,
  totalRows: l,
  onPageChange: o,
  onPageSizeChange: p,
  paginationMode: b,
  loading: u = !1,
  defaultExpanded: k,
  singleClickEdit: V = !0,
  showFooter: B = !0,
  onCellValueChanged: x,
  autoFocusFirstEditableCell: F = !1,
  actions: Q = []
}) {
  const [q, $] = w(
    {}
  ), [H, L] = w(null), {
    currentPage: J,
    handlePageChange: z,
    rowsCount: I,
    pagedData: P
  } = ke({
    data: n,
    page: d,
    pageSize: t,
    totalRows: l,
    onPageChange: o,
    paginationMode: b
  }), {
    selectedRows: K,
    isSelected: _,
    toggleRow: ae,
    clearSelection: Z,
    selectRows: ee,
    unselectRows: te,
    getKey: D
  } = Ne({
    selectionMode: i,
    getRowId: r
  }), g = U(() => ({ ...oe[N ?? "dark"] || oe.dark, ...h }), [N, h]), M = U(() => Ee(e).map((v) => ({
    ...v,
    singleClickEdit: v.singleClickEdit ?? V
  })), [e, V]), E = U(() => lt(M), [M]), le = k ?? M.some((m) => !!m.editable), C = P.length > 0 && P.every((m, v) => _(m, v)), j = T(() => {
    i === "multiple" && (C ? te(P) : ee(P));
  }, [C, P, i]), O = (m) => {
    $((v) => {
      const S = v[m] ?? le;
      return { ...v, [m]: !S };
    });
  }, ce = !!(c || f || Q.length), de = i === "multiple";
  W(() => {
    Z();
  }, [J]), W(() => {
    if (!F || P.length === 0) return;
    const m = P[0], v = D(m, 0), A = [
      E.title,
      E.trailing,
      ...E.grid,
      ...E.detail
    ].find(
      (R) => R ? ue(R, m) : !1
    );
    A && A.field && (E.detail.includes(A) && $((R) => ({ ...R, [v]: !0 })), L({ rowKey: v, field: A.field }));
  }, [F, P.length]);
  const Te = T(
    (m, v, S) => {
      L(null);
      const A = v.field;
      if (!A) return;
      const R = m[A];
      let ne = S;
      if (v.cellEditor === "agNumberCellEditor" && (ne = S === "" ? null : Number(S)), ne === R) return;
      const X = {
        data: m,
        oldValue: R,
        newValue: ne,
        colDef: {
          field: A,
          colId: v.colId,
          headerName: v.headerName
        }
      };
      v.onCellValueChanged ? v.onCellValueChanged(X) : x && x(X);
    },
    [x]
  ), ie = (m, v, S, A) => ue(S, m) ? /* @__PURE__ */ a(
    ct,
    {
      row: m,
      col: S,
      activeTheme: g,
      isEditing: H?.rowKey === v && H?.field === S.field,
      onStartEdit: () => L({ rowKey: v, field: S.field }),
      onCommit: (R) => Te(m, S, String(R)),
      onCancel: () => L(null),
      textClass: `${A} ${g.classes.textPrimary}`
    }
  ) : /* @__PURE__ */ a(
    "span",
    {
      className: `${A} ${g.classes.textPrimary} ${we(S, m)}`,
      children: Pe(m, S)
    }
  ), $e = u && P.length === 0;
  return /* @__PURE__ */ y(De, { children: [
    /* @__PURE__ */ y("div", { className: `w-full flex flex-col ${g.classes.wrapper}`, children: [
      de && P.length > 0 && /* @__PURE__ */ y("div", { className: "flex items-center justify-between gap-2 mb-3 px-1 min-h-10", children: [
        /* @__PURE__ */ y("label", { className: "flex items-center gap-2.5 select-none cursor-pointer", children: [
          /* @__PURE__ */ a(
            ge,
            {
              checked: C,
              onChange: j,
              color: "primary",
              className: g.classes.checkboxBorder
            }
          ),
          K.length > 0 ? /* @__PURE__ */ y(
            "span",
            {
              className: `text-xs px-2.5 py-1 rounded-full font-semibold ${g.classes.badge}`,
              children: [
                K.length,
                " selecionado",
                K.length > 1 ? "s" : ""
              ]
            }
          ) : /* @__PURE__ */ y(
            "span",
            {
              className: `text-xs font-medium ${g.classes.textMuted}`,
              children: [
                "Selecionar todos (",
                P.length,
                ")"
              ]
            }
          )
        ] }),
        ce && /* @__PURE__ */ a(
          fe,
          {
            selectedRows: K,
            onEdit: c,
            onDelete: f,
            actions: Q
          }
        )
      ] }),
      /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", children: $e ? [0, 1, 2, 3, 4].map((m) => /* @__PURE__ */ a(dt, { theme: g }, m)) : P.length === 0 ? /* @__PURE__ */ y(
        "div",
        {
          className: `flex flex-col items-center justify-center gap-2 py-12 rounded-2xl border border-dashed text-center ${g.classes.divider}`,
          children: [
            /* @__PURE__ */ a(Ze, { size: 28, className: g.classes.textMuted }),
            /* @__PURE__ */ a(
              "span",
              {
                className: `text-sm font-medium ${g.classes.textMuted}`,
                children: s
              }
            )
          ]
        }
      ) : P.map((m, v) => {
        const S = D(m, v), A = _(m, v), R = q[S] ?? le, ne = E.detail.length > 0, X = ne || ce, he = (G) => (re) => {
          ue(G, m) && re.stopPropagation();
        };
        return /* @__PURE__ */ y(
          "div",
          {
            className: `rounded-xl border px-3.5 py-1.5 transition-all duration-200 ${g.classes.card} ${A && de ? g.classes.cardSelected : ""}`,
            children: [
              /* @__PURE__ */ y(
                "div",
                {
                  className: `flex items-center gap-2.5 min-h-11 ${X ? "cursor-pointer" : ""}`,
                  onClick: () => X && O(S),
                  children: [
                    de && /* @__PURE__ */ a(
                      "div",
                      {
                        "aria-label": "Selecionar registro",
                        className: "shrink-0 cursor-pointer",
                        onClick: (G) => {
                          G.stopPropagation(), ae(m, v);
                        },
                        children: /* @__PURE__ */ a(
                          ge,
                          {
                            checked: A,
                            onChange: () => {
                            },
                            color: "primary",
                            className: g.classes.checkboxBorder
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ a(
                      "div",
                      {
                        className: `flex-1 min-w-0 text-sm font-semibold leading-snug ${R ? "wrap-break-word" : "truncate"}`,
                        onClick: E.title ? he(E.title) : void 0,
                        children: E.title ? ie(m, S, E.title, "") : "-"
                      }
                    ),
                    E.trailing && /* @__PURE__ */ a(
                      "div",
                      {
                        className: `shrink-0 max-w-[50%] text-right ${R ? "wrap-break-word" : "truncate"}`,
                        onClick: he(E.trailing),
                        children: ie(
                          m,
                          S,
                          E.trailing,
                          "text-sm font-semibold tabular-nums"
                        )
                      }
                    ),
                    X && /* @__PURE__ */ a(
                      "button",
                      {
                        type: "button",
                        "aria-expanded": R,
                        "aria-label": R ? "Ocultar detalhes" : "Ver detalhes",
                        onClick: (G) => {
                          G.stopPropagation(), O(S);
                        },
                        className: `inline-flex items-center justify-center shrink-0 w-7 h-7 -mr-1.5 bg-transparent border-0 cursor-pointer rounded-md active:opacity-70 ${g.classes.textMuted}`,
                        children: /* @__PURE__ */ a(
                          et,
                          {
                            size: 18,
                            className: `transition-transform duration-200 ${R ? "rotate-180" : ""}`
                          }
                        )
                      }
                    )
                  ]
                }
              ),
              E.grid.length > 0 && /* @__PURE__ */ a(
                "div",
                {
                  className: `mb-1.5 pt-2 border-t grid grid-cols-2 gap-x-4 gap-y-2 ${g.classes.divider}`,
                  children: E.grid.map((G, re) => /* @__PURE__ */ y("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ a(
                      "div",
                      {
                        className: `text-[10px] font-semibold uppercase tracking-wider truncate ${g.classes.textMuted}`,
                        children: G.headerName
                      }
                    ),
                    /* @__PURE__ */ a("div", { className: "mt-0.5", children: ie(
                      m,
                      S,
                      G,
                      "text-sm font-medium tabular-nums wrap-break-word"
                    ) })
                  ] }, re))
                }
              ),
              /* @__PURE__ */ a(tt, { initial: !1, children: R && X && /* @__PURE__ */ y(
                nt.div,
                {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  transition: { duration: 0.2, ease: "easeInOut" },
                  className: "overflow-hidden",
                  children: [
                    ne && /* @__PURE__ */ a(
                      "div",
                      {
                        className: `border-t divide-y ${g.classes.divider}`,
                        children: E.detail.map((G, re) => /* @__PURE__ */ y(
                          "div",
                          {
                            className: `flex items-center justify-between gap-3 py-2 ${g.classes.divider}`,
                            children: [
                              /* @__PURE__ */ a(
                                "div",
                                {
                                  className: `text-xs font-medium shrink-0 ${g.classes.textMuted}`,
                                  children: G.headerName
                                }
                              ),
                              /* @__PURE__ */ a("div", { className: "min-w-0 text-right", children: ie(
                                m,
                                S,
                                G,
                                "text-sm font-medium tabular-nums wrap-break-word"
                              ) })
                            ]
                          },
                          re
                        ))
                      }
                    ),
                    ce && /* @__PURE__ */ a(
                      "div",
                      {
                        className: `flex justify-end border-t py-2 ${g.classes.divider}`,
                        children: /* @__PURE__ */ a(
                          fe,
                          {
                            selectedRows: [m],
                            onEdit: c,
                            onDelete: f,
                            actions: Q
                          }
                        )
                      }
                    )
                  ]
                }
              ) })
            ]
          },
          S
        );
      }) })
    ] }),
    B && /* @__PURE__ */ a(
      Se,
      {
        page: J,
        pageSize: t,
        totalRows: I,
        loading: u,
        onPageChange: z,
        onPageSizeChange: p,
        theme: N,
        isMobile: !0,
        themeConfig: h
      }
    )
  ] });
}
function ut(e) {
  const n = () => typeof window > "u" ? !1 : window.matchMedia(e).matches, [t, s] = w(n);
  return W(() => {
    const r = window.matchMedia(e), c = (f) => {
      s(f.matches);
    };
    return s(r.matches), r.addEventListener("change", c), () => {
      r.removeEventListener("change", c);
    };
  }, [e]), t;
}
function Me(e) {
  const [n, t] = w(
    e ?? (document.documentElement.classList.contains("dark") ? "dark" : "light")
  );
  return W(() => {
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
function me(e) {
  const n = ut("(max-width: 768px)"), { modeTable: t = "auto" } = e, s = Me(e.theme);
  return t === "mobile" ? /* @__PURE__ */ a(xe, { ...e, theme: s }) : t === "desktop" ? /* @__PURE__ */ a(be, { ...e, theme: s }) : n ? /* @__PURE__ */ a(xe, { ...e, theme: s }) : /* @__PURE__ */ a(be, { ...e, theme: s });
}
const mt = (e) => e instanceof Error && (e.name === "AbortError" || e.name === "CanceledError");
function ft({
  fetchData: e,
  filters: n,
  initialPageSize: t = 20,
  initialSort: s = null,
  enabled: r = !0,
  onError: c
}) {
  const [f, i] = w([]), [N, h] = w(0), [d, l] = w(!1), [o, p] = w(null), [b, u] = w(0), [k, V] = w(t), [B, x] = w(s), [F, Q] = w(), [q, $] = w(0), H = Y(e);
  H.current = e;
  const L = Y(n);
  L.current = n;
  const J = Y(c);
  J.current = c;
  const z = JSON.stringify(n ?? null), [I, P] = w(z);
  z !== I && (P(z), u(0));
  const K = F ? JSON.stringify(F) : "", _ = B ? `${B.field}:${B.direction}` : "";
  W(() => {
    const D = H.current;
    if (!r || !D) return;
    const g = new AbortController();
    return l(!0), p(null), D(
      {
        page: b,
        pageSize: k,
        search: F,
        sort: B ?? void 0,
        filters: L.current ?? {}
      },
      g.signal
    ).then((M) => {
      if (!g.signal.aborted) {
        if (M.rows.length === 0 && b > 0 && M.total > 0) {
          u(Math.max(0, Math.ceil(M.total / k) - 1));
          return;
        }
        i(M.rows), h(M.total), l(!1);
      }
    }).catch((M) => {
      g.signal.aborted || mt(M) || (p(M), l(!1), J.current?.(M));
    }), () => g.abort();
  }, [r, b, k, K, _, z, q]);
  const ae = T(() => $((D) => D + 1), []), Z = T((D) => {
    V(D), u(0);
  }, []), ee = T((D) => {
    x(D), u(0);
  }, []), te = T((D) => {
    Q(D?.term ? D : void 0), u(0);
  }, []);
  return {
    rows: f,
    total: N,
    loading: d,
    error: o,
    page: b,
    pageSize: k,
    sort: B,
    search: F,
    setPage: u,
    setPageSize: Z,
    setSort: ee,
    setSearch: te,
    reload: ae,
    /** Props prontas para espalhar no `CBDataTable`. */
    tableProps: {
      data: f,
      page: b,
      pageSize: k,
      totalRows: N,
      loading: d,
      paginationMode: "server",
      onPageChange: u,
      onPageSizeChange: Z,
      sort: B,
      onSortChange: ee
    }
  };
}
function vt({
  data: e,
  filterColumns: n,
  filterPlaceholder: t = "Buscar...",
  filterClassName: s,
  theme: r,
  fetchData: c,
  filters: f,
  initialSort: i,
  searchDebounceMs: N,
  onFetchError: h,
  tableRef: d,
  ...l
}) {
  const o = Me(r), p = !!c, [b, u] = w(e ?? []), [k, V] = w(0), B = l.onPageChange !== void 0, x = Y(e), F = (I) => {
    u(I), x.current === e && V(0), x.current = e;
  }, Q = l.pageSize ?? 5, q = Math.max(
    0,
    Math.ceil(b.length / Q) - 1
  ), $ = ft({
    fetchData: c,
    filters: f,
    initialPageSize: l.pageSize ?? 20,
    initialSort: i,
    enabled: p,
    onError: h
  });
  Be(
    d,
    () => ({ reload: $.reload, setPage: $.setPage }),
    [$.reload, $.setPage]
  );
  const { onDelete: H, onPageSizeChange: L } = l, J = L ? (I) => {
    $.setPageSize(I), L(I);
  } : void 0, z = H ? async (I) => {
    try {
      await H(I);
    } finally {
      $.reload();
    }
  } : void 0;
  return /* @__PURE__ */ y("div", { className: "flex flex-col gap-6", children: [
    p ? /* @__PURE__ */ a(
      pe,
      {
        columns: n,
        placeholder: t,
        onSearchChange: $.setSearch,
        debounceMs: N,
        className: s,
        theme: o
      }
    ) : /* @__PURE__ */ a(
      pe,
      {
        data: e ?? [],
        columns: n,
        placeholder: t,
        onChange: F,
        className: s,
        theme: o
      }
    ),
    p ? /* @__PURE__ */ a(
      me,
      {
        ...l,
        ...$.tableProps,
        loading: $.loading || l.loading,
        onPageSizeChange: J,
        onDelete: z,
        theme: r
      }
    ) : B ? /* @__PURE__ */ a(me, { ...l, data: b, theme: r }) : /* @__PURE__ */ a(
      me,
      {
        ...l,
        data: b,
        paginationMode: "client",
        page: Math.min(k, q),
        onPageChange: V,
        theme: r
      }
    )
  ] });
}
export {
  me as CBDataTable,
  be as CBDataTableDesktop,
  xe as CBDataTableMobile,
  vt as CBDataTableWithFilter,
  ft as useCBTableQuery
};
