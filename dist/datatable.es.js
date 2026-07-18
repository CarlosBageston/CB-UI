import { jsxs as o, jsx as r } from "react/jsx-runtime";
import { C as P, F as ae, a as le, b as Z, c as Ce, d as ve, A as Ne, m as ye, e as ke } from "./CBFilterBar-f99VwLRS.js";
import { AgGridReact as we } from "ag-grid-react";
import { themeQuartz as ne, colorSchemeDarkBlue as Se, colorSchemeLightCold as Re, ModuleRegistry as Te, ClientSideRowModelModule as Be, PaginationModule as $e, RowSelectionModule as Ee, CellStyleModule as Me, LocaleModule as Pe } from "ag-grid-community";
import { useState as E, useEffect as L, useCallback as R, useRef as J, useMemo as F } from "react";
const De = ne.withPart(Se), Fe = ne.withPart(Re), _ = (t) => t ? De : Fe, Le = (t) => {
  const [a, e] = E(
    _(t === "dark")
  );
  return L(() => {
    if (t) {
      e(_(t === "dark"));
      return;
    }
    const s = new MutationObserver(() => {
      const n = document.documentElement.classList.contains("dark");
      e(_(n));
    });
    return s.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class"]
    }), () => s.disconnect();
  }, [t]), a;
};
function se(t) {
  const { col: a, render: e, children: s, align: n, ...l } = t;
  return s && s.length > 0 ? {
    ...l,
    headerName: t.headerName,
    children: s.map((m) => se(m)),
    flex: a ?? 1
  } : {
    ...l,
    flex: a ?? 1,
    cellRenderer: e ? (m) => m.data ? e(m.data) : null : void 0,
    cellClass: n === "center" ? "ag-cell-center" : n === "right" ? "ag-cell-right" : "ag-cell-left",
    headerClass: n === "center" ? "ag-header-center" : n === "right" ? "ag-header-right" : "ag-header-left"
  };
}
function ce({
  selectionMode: t,
  getRowId: a,
  onDelete: e
}) {
  const [s, n] = E([]), l = R(
    (i, h) => a ? a(i) : String(h),
    [a]
  ), d = R(
    (i, h) => {
      const x = l(i, h);
      return s.some(
        (u, b) => l(u, b) === x
      );
    },
    [s, l]
  ), m = R(
    (i, h) => {
      const x = l(i, h);
      n((u) => {
        const b = u.some(
          (v, N) => l(v, N) === x
        );
        return t === "single" ? b ? [] : [i] : b ? u.filter((v, N) => l(v, N) !== x) : [...u, i];
      });
    },
    [t, l]
  ), y = R(() => {
    n([]);
  }, []), f = R(() => {
    e && (s.forEach(e), y());
  }, [s, e, y]), T = R(
    (i) => {
      n((h) => {
        if (t === "single")
          return i.length ? [i[0]] : [];
        const x = [...h];
        return i.forEach((u) => {
          x.some(
            (v, N) => l(v, N) === l(u, N)
          ) || x.push(u);
        }), x;
      });
    },
    [t, l]
  );
  return {
    unselectRows: R(
      (i) => {
        n(
          (h) => h.filter(
            (x, u) => !i.some(
              (b, v) => l(x, u) === l(b, v)
            )
          )
        );
      },
      [l]
    ),
    selectRows: T,
    selectedRows: s,
    setSelectedRows: n,
    isSelected: d,
    toggleRow: m,
    clearSelection: y,
    deleteSelected: f,
    getKey: l
  };
}
function ie({
  page: t,
  pageSize: a,
  totalRows: e,
  loading: s = !1,
  onPageChange: n,
  onPageSizeChange: l,
  isMobile: d = !1,
  pageSizeOptions: m = [10, 20, 50],
  theme: y,
  colorsPagination: f
}) {
  const T = Math.max(Math.ceil(e / a), 1), C = y === "light", i = f?.text ? f?.text : d ? C ? "text-zinc-600" : "text-zinc-200" : "text-zinc-900", h = f?.textSelect ? f?.textSelect : C ? "text-black" : "text-white", x = f?.bgColorSelect ? f?.bgColorSelect : d && !C ? "bg-gray-800" : d && C ? "bg-gray-100" : C ? "bg-gray-600" : "bg-gray-100";
  return /* @__PURE__ */ o(
    "div",
    {
      className: `flex items-center gap-1 px-4 py-3 text-sm ${i} ${d ? "flex-col justify-center" : "flex-row justify-between"}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ o("span", { children: [
            "Página ",
            /* @__PURE__ */ r("strong", { className: "font-semibold", children: t + 1 }),
            " de",
            " ",
            /* @__PURE__ */ r("strong", { className: "font-semibold", children: T }),
            /* @__PURE__ */ r("span", { className: "mx-2", children: "|" }),
            "Total de ",
            /* @__PURE__ */ r("strong", { className: "font-semibold", children: e }),
            " ",
            "registros"
          ] }),
          s && !d && /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 animate-pulse", children: [
            /* @__PURE__ */ r("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
            "Carregando..."
          ] })
        ] }),
        /* @__PURE__ */ o(
          "div",
          {
            className: d ? "flex flex-col gap-1 items-center" : "flex gap-4",
            children: [
              l ? /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ r("span", { className: `text-xs ${i}`, children: "Linhas por página:" }),
                /* @__PURE__ */ r(
                  "select",
                  {
                    value: a,
                    onChange: (u) => l(Number(u.target.value)),
                    style: { color: h },
                    className: `${x} rounded-md px-2 py-1 text-xs font-medium outline-none cursor-pointer focus:ring-1 focus:ring-blue-500/20 focus:border-blue-500 transition-all`,
                    children: m.map((u) => /* @__PURE__ */ r(
                      "option",
                      {
                        value: u,
                        style: { color: h },
                        children: u
                      },
                      u
                    ))
                  }
                )
              ] }) : null,
              /* @__PURE__ */ o("div", { children: [
                /* @__PURE__ */ r(
                  P,
                  {
                    children: "Anterior",
                    disabled: t === 0 || s,
                    onClick: () => n(t - 1),
                    color: f?.bgColorButtonPrevious
                  }
                ),
                /* @__PURE__ */ r(
                  P,
                  {
                    children: "Próxima",
                    disabled: t + 1 >= T || s,
                    onClick: () => n(t + 1),
                    color: f?.bgColorButtonNext
                  }
                )
              ] }),
              s && d && /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 animate-pulse", children: [
                /* @__PURE__ */ r("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
                "Carregando..."
              ] })
            ]
          }
        )
      ]
    }
  );
}
Te.registerModules([
  Be,
  $e,
  Ee,
  Me,
  Pe
]);
function q({
  columns: t,
  data: a,
  pageSize: e = 5,
  emptyMessage: s = "Nenhum dado encontrado",
  getRowId: n,
  onEdit: l,
  onDelete: d,
  selectionMode: m = "single",
  theme: y = "dark",
  page: f,
  totalRows: T = 0,
  onPageChange: C,
  onPageSizeChange: i,
  loading: h = !1,
  themePagination: x
}) {
  const u = Le(y), [b, v] = E([]), [N, A] = E(0), B = f ?? N, O = (g) => {
    C ? C(g) : A(g);
  }, j = T || a.length, { deleteSelected: k } = ce({
    selectionMode: m,
    getRowId: n,
    onDelete: d
  }), w = J(null), D = J(null), G = R(() => {
    const g = w.current?.api?.getSelectedNodes() ?? [];
    v(
      g.map((M) => M.data).filter((M) => M != null)
    );
  }, []), Q = F(
    () => t.map((g) => se(g)),
    [t]
  ), H = F(
    () => n ? (g) => n(g.data) : void 0,
    [n]
  );
  L(() => {
    const g = (M) => {
      D.current && !D.current.contains(M.target) && (v([]), w.current?.api?.deselectAll());
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, []);
  const I = F(() => {
    if (C)
      return a;
    const g = B * e;
    return a.slice(g, g + e);
  }, [a, B, e, C]);
  return /* @__PURE__ */ o("div", { ref: D, className: "relative w-full", children: [
    /* @__PURE__ */ r(
      we,
      {
        ref: w,
        rowData: I,
        getRowId: H,
        defaultColDef: { resizable: !1 },
        columnDefs: Q,
        theme: u,
        animateRows: !0,
        rowSelection: m === "multiple" ? {
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
        onSelectionChanged: G,
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
    /* @__PURE__ */ r(
      ie,
      {
        page: B,
        pageSize: e,
        totalRows: j,
        loading: h,
        onPageChange: O,
        onPageSizeChange: i,
        colorsPagination: x
      }
    ),
    /* @__PURE__ */ o("div", { className: "absolute -top-2 right-2 -translate-y-1/2 flex gap-2 z-10", children: [
      l && /* @__PURE__ */ r(
        P,
        {
          "aria-label": "Editar",
          children: "",
          iconStart: /* @__PURE__ */ r(ae, { size: 18 }),
          color: "primary",
          disabled: b.length !== 1,
          onClick: () => b.length === 1 && l(b[0])
        }
      ),
      d && /* @__PURE__ */ r(
        P,
        {
          "aria-label": "Excluir",
          children: "",
          iconStart: /* @__PURE__ */ r(le, { size: 18 }),
          color: "danger",
          disabled: b.length === 0,
          onClick: k
        }
      )
    ] })
  ] });
}
const ee = {
  dark: {
    wrapper: "bg-slate-900 border-slate-800 text-slate-100",
    card: "bg-slate-950 border-slate-800/80 hover:border-slate-800",
    cardSelected: "ring-1 ring-primary/80 border-primary shadow-lg shadow-primary-950/20",
    textTitle: "text-primary-400",
    textPrimary: "text-slate-100",
    textMuted: "text-slate-400",
    input: "bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-600 focus:ring-primary-500/50 focus:border-primary-500",
    inputIcon: "text-slate-500",
    divider: "border-slate-800/80",
    badge: "bg-slate-800 text-slate-300",
    checkboxBorder: "border-slate-700"
  },
  light: {
    wrapper: "bg-white border-slate-200 text-slate-800",
    card: "bg-slate-50 border-[#e7e5e4] hover:bg-slate-100",
    cardSelected: "ring-1 ring-primary border-primary-200 shadow-md shadow-primary-500/5",
    textTitle: "text-primary-600",
    textPrimary: "text-slate-800",
    textMuted: "text-slate-500",
    input: "bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 focus:ring-primary-500/30 focus:border-primary-500",
    inputIcon: "text-slate-400",
    divider: "border-slate-150",
    badge: "bg-slate-100 text-slate-700",
    checkboxBorder: "border-slate-300"
  }
};
function oe(t) {
  const a = [];
  return t.forEach((e) => {
    if (e.children && e.children.length > 0) {
      a.push(...oe(e.children));
      return;
    }
    a.push({
      headerName: e.headerName ?? "",
      field: e.field,
      align: e.align,
      render: e.render,
      valueGetter: e.valueGetter
    });
  }), a;
}
function te(t, a) {
  if (!a) return "-";
  const e = t[a];
  return e == null || e === "" ? "-" : String(e);
}
function re({
  columns: t,
  data: a,
  pageSize: e = 5,
  emptyMessage: s = "Nenhum dado encontrado",
  getRowId: n,
  onEdit: l,
  onDelete: d,
  selectionMode: m = "single",
  theme: y = "dark",
  themeConfig: f,
  page: T,
  totalRows: C = 0,
  onPageChange: i,
  onPageSizeChange: h,
  loading: x = !1,
  themePagination: u
}) {
  const [b, v] = E(
    {}
  ), [N, A] = E(0), B = T ?? N, O = (c) => {
    i ? i(c) : A(c);
  }, j = C || a.length, k = F(() => {
    if (i)
      return a;
    const c = B * e;
    return a.slice(c, c + e);
  }, [a, B, e, i]), {
    selectedRows: w,
    isSelected: D,
    toggleRow: G,
    deleteSelected: Q,
    clearSelection: H,
    selectRows: I,
    unselectRows: g,
    getKey: M
  } = ce({
    selectionMode: m,
    getRowId: n,
    onDelete: d
  }), de = J(null), p = F(() => ({ ...ee[y] || ee.dark, ...f }), [y, f]), ue = F(() => oe(t), [t]), [z, ...K] = ue, X = Math.max(1, Math.ceil(j / e));
  L(() => {
    const c = Math.max(X - 1, 0);
    N > c && A(c);
  }, [X, N]);
  const U = k.length > 0 && k.every((c, S) => D(c, S)), me = R(() => {
    m === "multiple" && (U ? g(k) : I(k));
  }, [U, k, m]), he = (c) => {
    v((S) => ({ ...S, [c]: !S[c] }));
  }, xe = !!(l || d);
  return L(() => {
    H();
  }, [B]), /* @__PURE__ */ o(
    "div",
    {
      ref: de,
      className: `w-full flex flex-col p-3.5 rounded-xl border transition-all duration-200 ${p.wrapper}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-col gap-3.5 mb-4", children: [
          xe && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ o(
              "span",
              {
                className: `text-xs px-2.5 py-1 rounded-full font-bold transition-all ${p.badge}`,
                children: [
                  w.length,
                  " selecionado(s)"
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
              l && /* @__PURE__ */ r(
                P,
                {
                  color: "primary",
                  iconStart: /* @__PURE__ */ r(ae, { size: 16 }),
                  disabled: w.length !== 1,
                  onClick: () => w.length === 1 && l(w[0]),
                  children: ""
                }
              ),
              d && /* @__PURE__ */ r(
                P,
                {
                  color: "danger",
                  iconStart: /* @__PURE__ */ r(le, { size: 16 }),
                  disabled: w.length === 0,
                  onClick: Q,
                  children: ""
                }
              )
            ] })
          ] }),
          m === "multiple" && k.length > 0 && /* @__PURE__ */ o("label", { className: "flex items-center gap-2 px-1 py-0.5 select-none cursor-pointer", children: [
            /* @__PURE__ */ r(
              Z,
              {
                checked: U,
                onChange: me,
                color: "primary",
                className: p.checkboxBorder
              }
            ),
            /* @__PURE__ */ o("span", { className: `text-xs font-semibold ${p.textMuted}`, children: [
              "Selecionar todos desta página (",
              k.length,
              ")"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ r("div", { className: "flex flex-col gap-3 min-h-[120px]", children: k.length === 0 ? /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center py-10 text-center", children: /* @__PURE__ */ r("span", { className: `text-sm font-medium ${p.textMuted}`, children: s }) }) : k.map((c, S) => {
          const V = M(c, S), Y = D(c, S), W = !!b[V], ge = z?.render ? z.render(c) : te(c, z?.field);
          return /* @__PURE__ */ o(
            "div",
            {
              className: `rounded-xl border p-4 transition-all duration-200 ${p.card} ${Y ? p.cardSelected : ""}`,
              children: [
                /* @__PURE__ */ o("div", { className: "flex items-start gap-3.5", children: [
                  /* @__PURE__ */ r(
                    "div",
                    {
                      "aria-label": "Selecionar registro",
                      onClick: () => G(c, S),
                      className: "pt-1 shrink-0 cursor-pointer",
                      children: /* @__PURE__ */ r(
                        Z,
                        {
                          checked: Y,
                          onChange: () => {
                          },
                          color: "primary",
                          className: p.checkboxBorder
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ o(
                    "div",
                    {
                      className: "flex-1 min-w-0 cursor-pointer",
                      onClick: () => G(c, S),
                      children: [
                        /* @__PURE__ */ r(
                          "div",
                          {
                            className: `text-xs font-bold uppercase tracking-widest mb-0.5 ${p.textMuted}`,
                            children: z?.headerName || "Registro"
                          }
                        ),
                        /* @__PURE__ */ r(
                          "div",
                          {
                            className: `text-sm font-bold truncate ${p.textPrimary}`,
                            children: ge
                          }
                        )
                      ]
                    }
                  ),
                  K.length > 0 && /* @__PURE__ */ r(
                    P,
                    {
                      "aria-label": W ? "Recolher detalhes" : "Expandir detalhes",
                      onClick: () => he(V),
                      iconEnd: W ? /* @__PURE__ */ r(
                        Ce,
                        {
                          size: 18,
                          className: `${p.textPrimary}`
                        }
                      ) : /* @__PURE__ */ r(
                        ve,
                        {
                          size: 18,
                          className: `${p.textPrimary}`
                        }
                      ),
                      variant: "clear",
                      activeColor: "transparent",
                      size: "small",
                      children: ""
                    }
                  )
                ] }),
                /* @__PURE__ */ r(Ne, { initial: !1, children: W && K.length > 0 && /* @__PURE__ */ r(
                  ye.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    transition: {
                      duration: 0.25,
                      ease: "easeInOut"
                    },
                    className: `mt-4 pt-3.5 px-2 border-t space-y-3 animate-slide-down ${p.divider}`,
                    children: K.map(($, fe) => {
                      const pe = $.render ? $.render(c) : $.valueGetter ? $.valueGetter(c) : te(c, $.field), be = $.align === "center" ? "text-center" : $.align === "right" ? "text-right" : "text-left";
                      return /* @__PURE__ */ o(
                        "div",
                        {
                          className: "flex justify-between items-center gap-2 py-0.5",
                          children: [
                            /* @__PURE__ */ r(
                              "span",
                              {
                                className: `text-xs font-semibold truncate ${p.textMuted}`,
                                children: $.headerName
                              }
                            ),
                            /* @__PURE__ */ r(
                              "span",
                              {
                                className: `col-span-2 text-xs font-medium break-all ${be} ${p.textPrimary}`,
                                children: pe
                              }
                            )
                          ]
                        },
                        fe
                      );
                    })
                  }
                ) })
              ]
            },
            V
          );
        }) }),
        /* @__PURE__ */ r(
          ie,
          {
            page: B,
            pageSize: e,
            totalRows: j,
            loading: x,
            onPageChange: O,
            onPageSizeChange: h,
            theme: y,
            isMobile: !0,
            colorsPagination: u
          }
        )
      ]
    }
  );
}
function Ae(t) {
  const a = () => typeof window > "u" ? !1 : window.matchMedia(t).matches, [e, s] = E(a);
  return L(() => {
    const n = window.matchMedia(t), l = (d) => {
      s(d.matches);
    };
    return s(n.matches), n.addEventListener("change", l), () => {
      n.removeEventListener("change", l);
    };
  }, [t]), e;
}
function je(t) {
  const a = Ae("(max-width: 768px)"), { modeTable: e = "auto" } = t;
  return e === "mobile" ? /* @__PURE__ */ r(re, { ...t }) : e === "desktop" ? /* @__PURE__ */ r(q, { ...t }) : a ? /* @__PURE__ */ r(re, { ...t }) : /* @__PURE__ */ r(q, { ...t });
}
function Ie({
  data: t,
  filterColumns: a,
  filterPlaceholder: e = "Filtrar...",
  showFilter: s = !0,
  filterClassName: n,
  ...l
}) {
  const [d, m] = E(t);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-6", children: [
    s && /* @__PURE__ */ r(
      ke,
      {
        data: t,
        columns: a,
        placeholder: e,
        onChange: m,
        className: n
      }
    ),
    /* @__PURE__ */ r(je, { ...l, data: d })
  ] });
}
export {
  je as CBDataTable,
  q as CBDataTableDesktop,
  re as CBDataTableMobile,
  Ie as CBDataTableWithFilter,
  Le as useAGGridTheme
};
