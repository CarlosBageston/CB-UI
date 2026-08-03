import { jsxs as i, jsx as a, Fragment as Ne } from "react/jsx-runtime";
import { D as O, C as $, F as ae, a as se, b as Z, c as ve, d as Ce, A as ke, m as ye, e as we } from "./CBFilterBar-DcJN3pf3.js";
import { AgGridReact as Pe } from "ag-grid-react";
import { useState as E, useCallback as R, useMemo as T, useRef as I, useEffect as A } from "react";
import { themeQuartz as ne, colorSchemeDarkBlue as Se, colorSchemeLightCold as Re, ModuleRegistry as Te, ClientSideRowModelModule as $e, PaginationModule as Ee, RowSelectionModule as Me, CellStyleModule as Be, LocaleModule as De } from "ag-grid-community";
import { a as le } from "./useInputMask-DlqD3EiL.js";
function re(t) {
  const { col: s, render: e, children: l, align: r, mask: n, ...m } = t;
  return l && l.length > 0 ? {
    ...m,
    headerName: t.headerName,
    children: l.map((o) => re(o)),
    flex: s ?? 1
  } : {
    ...m,
    flex: s ?? 1,
    cellRenderer: e ? (o) => o.data ? e(o.data) : null : void 0,
    valueFormatter: n ? (o) => le(o.value, n) : void 0,
    cellClass: r === "center" ? "ag-cell-center" : r === "right" ? "ag-cell-right" : "ag-cell-left",
    headerClass: r === "center" ? "ag-header-center" : r === "right" ? "ag-header-right" : "ag-header-left"
  };
}
const Fe = ne.withPart(Se), Le = ne.withPart(Re), Ae = (t) => t ? Fe : Le;
function ce({
  selectionMode: t,
  getRowId: s,
  onDelete: e
}) {
  const [l, r] = E([]), n = R(
    (c, N) => s ? s(c) : String(N),
    [s]
  ), m = R(
    (c, N) => {
      const x = n(c, N);
      return l.some(
        (p, C) => n(p, C) === x
      );
    },
    [l, n]
  ), u = R(
    (c, N) => {
      const x = n(c, N);
      r((p) => {
        const C = p.some(
          (h, k) => n(h, k) === x
        );
        return t === "single" ? C ? [] : [c] : C ? p.filter((h, k) => n(h, k) !== x) : [...p, c];
      });
    },
    [t, n]
  ), o = R(() => {
    r([]);
  }, []), y = R(() => {
    e && (l.forEach(e), o());
  }, [l, e, o]), b = R(
    (c) => {
      r((N) => {
        if (t === "single")
          return c.length ? [c[0]] : [];
        const x = [...N];
        return c.forEach((p) => {
          x.some(
            (h, k) => n(h, k) === n(p, k)
          ) || x.push(p);
        }), x;
      });
    },
    [t, n]
  );
  return {
    unselectRows: R(
      (c) => {
        r(
          (N) => N.filter(
            (x, p) => !c.some(
              (C, h) => n(x, p) === n(C, h)
            )
          )
        );
      },
      [n]
    ),
    selectRows: b,
    selectedRows: l,
    setSelectedRows: r,
    isSelected: m,
    toggleRow: u,
    clearSelection: o,
    deleteSelected: y,
    getKey: n
  };
}
function ie({
  page: t,
  pageSize: s,
  totalRows: e,
  loading: l = !1,
  onPageChange: r,
  onPageSizeChange: n,
  isMobile: m = !1,
  theme: u,
  pageSizeOptions: o = [10, 20, 50],
  themeConfig: y
}) {
  const b = T(() => ({ ...O[u ?? "dark"] || O.dark, ...y }), [u, y]), w = Math.max(Math.ceil(e / s), 1);
  return /* @__PURE__ */ i(
    "div",
    {
      className: `flex items-center gap-1 px-4 py-3 text-sm ${b.classes.textPrimary} ${m ? "flex-col justify-center" : "flex-row justify-between"}`,
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ i("span", { children: [
            "Página ",
            /* @__PURE__ */ a("strong", { className: "font-semibold", children: t + 1 }),
            " de",
            " ",
            /* @__PURE__ */ a("strong", { className: "font-semibold", children: w }),
            /* @__PURE__ */ a("span", { className: "mx-2", children: "|" }),
            "Total de ",
            /* @__PURE__ */ a("strong", { className: "font-semibold", children: e }),
            " ",
            "registros"
          ] }),
          l && !m && /* @__PURE__ */ i(
            "span",
            {
              className: `inline-flex items-center gap-1.5 text-xs ${b.classes.textPrimary} animate-pulse`,
              children: [
                /* @__PURE__ */ a("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
                "Carregando..."
              ]
            }
          )
        ] }),
        /* @__PURE__ */ i(
          "div",
          {
            className: m ? "flex flex-col gap-1 items-center" : "flex gap-4",
            children: [
              n ? /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ a("span", { className: `text-xs ${b.classes.textPrimary}`, children: "Linhas por página:" }),
                /* @__PURE__ */ a(
                  "select",
                  {
                    name: "pageSize",
                    value: s,
                    onChange: (c) => n(Number(c.target.value)),
                    className: `${b.classes.selectPagination} rounded-md px-2 py-1 text-xs font-medium outline-none cursor-pointer transition-all`,
                    children: o.map((c) => /* @__PURE__ */ a(
                      "option",
                      {
                        value: c,
                        className: b.classes.textPrimary,
                        children: c
                      },
                      c
                    ))
                  }
                )
              ] }) : null,
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ a(
                  $,
                  {
                    children: "Anterior",
                    disabled: t === 0 || l,
                    onClick: () => r(t - 1),
                    color: b?.colorsPagination?.bgButtonPreviousPagination
                  }
                ),
                /* @__PURE__ */ a(
                  $,
                  {
                    children: "Próxima",
                    disabled: t + 1 >= w || l,
                    onClick: () => r(t + 1),
                    color: b?.colorsPagination?.bgButtonNextPagination
                  }
                )
              ] }),
              l && m && /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 animate-pulse", children: [
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
Te.registerModules([
  $e,
  Ee,
  Me,
  Be,
  De
]);
function q({
  columns: t,
  data: s,
  pageSize: e = 5,
  emptyMessage: l = "Nenhum dado encontrado",
  getRowId: r,
  onEdit: n,
  onDelete: m,
  selectionMode: u = "single",
  theme: o,
  page: y,
  totalRows: b = 0,
  onPageChange: w,
  onPageSizeChange: c,
  loading: N = !1
}) {
  const x = T(() => Ae(o === "dark"), [o]), [p, C] = E(0), h = y ?? p, k = (f) => {
    w ? w(f) : C(f);
  }, M = b || s.length, {
    selectedRows: B,
    deleteSelected: j,
    selectRows: v
  } = ce({
    selectionMode: u,
    getRowId: r,
    onDelete: m
  }), P = I(null), D = I(null), G = R(() => {
    const F = (P.current?.api?.getSelectedNodes() ?? []).map((L) => L.data).filter((L) => L != null);
    v(F);
  }, [v]), Q = T(
    () => t.map((f) => re(f)),
    [t]
  ), z = T(
    () => r ? (f) => r(f.data) : void 0,
    [r]
  );
  A(() => {
    const f = (F) => {
      D.current && !D.current.contains(F.target) && P.current?.api?.deselectAll();
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, []);
  const H = T(() => {
    if (w)
      return s;
    const f = h * e;
    return s.slice(f, f + e);
  }, [s, h, e, w]);
  return /* @__PURE__ */ i("div", { ref: D, className: "relative w-full", children: [
    /* @__PURE__ */ a(
      Pe,
      {
        ref: P,
        rowData: H,
        getRowId: z,
        defaultColDef: { resizable: !1 },
        columnDefs: Q,
        theme: x,
        animateRows: !0,
        rowSelection: u === "multiple" ? {
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
    /* @__PURE__ */ a(
      ie,
      {
        page: h,
        pageSize: e,
        totalRows: M,
        loading: N,
        onPageChange: k,
        onPageSizeChange: c,
        theme: o
      }
    ),
    /* @__PURE__ */ i("div", { className: "absolute -top-2 right-2 -translate-y-1/2 flex gap-2 z-10", children: [
      n && /* @__PURE__ */ a(
        $,
        {
          "aria-label": "Editar",
          children: "",
          iconStart: /* @__PURE__ */ a(ae, { size: 18 }),
          color: "primary",
          disabled: B.length !== 1,
          onClick: () => B.length === 1 && n(B[0])
        }
      ),
      m && /* @__PURE__ */ a(
        $,
        {
          "aria-label": "Excluir",
          children: "",
          iconStart: /* @__PURE__ */ a(se, { size: 18 }),
          color: "danger",
          disabled: B.length === 0,
          onClick: j
        }
      )
    ] })
  ] });
}
function oe(t) {
  const s = [];
  return t.forEach((e) => {
    if (e.children && e.children.length > 0) {
      s.push(...oe(e.children));
      return;
    }
    s.push({
      headerName: e.headerName ?? "",
      field: e.field,
      align: e.align,
      render: e.render,
      valueGetter: e.valueGetter,
      mask: e.mask
    });
  }), s;
}
function je(t, s) {
  if (!s) return "-";
  const e = t[s];
  return e == null || e === "" ? "-" : String(e);
}
function ee(t, s) {
  if (s.render) return s.render(t);
  const e = s.valueGetter ? s.valueGetter(t) : je(t, s.field);
  return e == null || e === "" ? "-" : s.mask ? le(e, s.mask) : String(e);
}
function te({
  columns: t,
  data: s,
  pageSize: e = 5,
  emptyMessage: l = "Nenhum dado encontrado",
  getRowId: r,
  onEdit: n,
  onDelete: m,
  selectionMode: u = "single",
  theme: o,
  themeConfig: y,
  page: b,
  totalRows: w = 0,
  onPageChange: c,
  onPageSizeChange: N,
  loading: x = !1
}) {
  const [p, C] = E(
    {}
  ), [h, k] = E(0), M = b ?? h, B = (d) => {
    c ? c(d) : k(d);
  }, j = w || s.length, v = T(() => {
    if (c)
      return s;
    const d = M * e;
    return s.slice(d, d + e);
  }, [s, M, e, c]), {
    selectedRows: P,
    isSelected: D,
    toggleRow: G,
    deleteSelected: Q,
    clearSelection: z,
    selectRows: H,
    unselectRows: f,
    getKey: F
  } = ce({
    selectionMode: u,
    getRowId: r,
    onDelete: m
  }), L = I(null), g = T(() => ({ ...O[o ?? "dark"] || O.dark, ...y }), [o, y]), me = T(() => oe(t), [t]), [J, ...K] = me, X = Math.max(1, Math.ceil(j / e));
  A(() => {
    const d = Math.max(X - 1, 0);
    h > d && k(d);
  }, [X, h]);
  const U = v.length > 0 && v.every((d, S) => D(d, S)), ue = R(() => {
    u === "multiple" && (U ? f(v) : H(v));
  }, [U, v, u]), he = (d) => {
    C((S) => ({ ...S, [d]: !S[d] }));
  }, fe = !!(n || m);
  return A(() => {
    z();
  }, [M]), /* @__PURE__ */ i(Ne, { children: [
    /* @__PURE__ */ i(
      "div",
      {
        ref: L,
        className: `w-full flex flex-col p-3 rounded-xl border transition-all duration-200 ${g.classes.wrapper}`,
        children: [
          /* @__PURE__ */ i("div", { className: "flex flex-col gap-3.5 mb-4", children: [
            fe && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ i(
                "span",
                {
                  className: `text-xs px-2.5 py-1 rounded-full font-bold transition-all ${g.classes.badge}`,
                  children: [
                    P.length,
                    " selecionado(s)"
                  ]
                }
              ),
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                n && /* @__PURE__ */ a(
                  $,
                  {
                    color: "primary",
                    iconStart: /* @__PURE__ */ a(ae, { size: 16 }),
                    disabled: P.length !== 1,
                    onClick: () => P.length === 1 && n(P[0]),
                    children: ""
                  }
                ),
                m && /* @__PURE__ */ a(
                  $,
                  {
                    color: "danger",
                    iconStart: /* @__PURE__ */ a(se, { size: 16 }),
                    disabled: P.length === 0,
                    onClick: Q,
                    children: ""
                  }
                )
              ] })
            ] }),
            u === "multiple" && v.length > 0 && /* @__PURE__ */ i("label", { className: "flex items-center gap-2 px-1 py-0.5 select-none cursor-pointer", children: [
              /* @__PURE__ */ a(
                Z,
                {
                  checked: U,
                  onChange: ue,
                  color: "primary",
                  className: g.classes.checkboxBorder
                }
              ),
              /* @__PURE__ */ i(
                "span",
                {
                  className: `text-xs font-semibold ${g.classes.textMuted}`,
                  children: [
                    "Selecionar todos desta página (",
                    v.length,
                    ")"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ a("div", { className: "flex flex-col gap-1 min-h-30", children: v.length === 0 ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-10 text-center", children: /* @__PURE__ */ a(
            "span",
            {
              className: `text-sm font-medium ${g.classes.textMuted}`,
              children: l
            }
          ) }) : v.map((d, S) => {
            const W = F(d, S), Y = D(d, S), _ = !!p[W], ge = ee(d, J);
            return /* @__PURE__ */ i(
              "div",
              {
                className: `rounded-xl border px-4 py-2 transition-all duration-200 ${g.classes.card} ${Y ? g.classes.cardSelected : ""}`,
                children: [
                  /* @__PURE__ */ i("div", { className: "flex items-start gap-3.5", children: [
                    /* @__PURE__ */ a(
                      "div",
                      {
                        "aria-label": "Selecionar registro",
                        onClick: () => G(d, S),
                        className: "pt-1 shrink-0 cursor-pointer",
                        children: /* @__PURE__ */ a(
                          Z,
                          {
                            checked: Y,
                            onChange: () => {
                            },
                            color: "primary",
                            className: g.classes.checkboxBorder
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ i(
                      "div",
                      {
                        className: "flex-1 min-w-0 cursor-pointer",
                        onClick: () => G(d, S),
                        children: [
                          /* @__PURE__ */ a(
                            "div",
                            {
                              className: `text-xs font-bold uppercase tracking-widest mb-0.5 ${g.classes.textMuted}`,
                              children: J?.headerName || "Registro"
                            }
                          ),
                          /* @__PURE__ */ a(
                            "div",
                            {
                              className: `text-sm font-bold truncate ${g.classes.textPrimary}`,
                              children: ge
                            }
                          )
                        ]
                      }
                    ),
                    K.length > 0 && /* @__PURE__ */ a(
                      $,
                      {
                        "aria-label": _ ? "Recolher detalhes" : "Expandir detalhes",
                        onClick: () => he(W),
                        iconEnd: _ ? /* @__PURE__ */ a(
                          ve,
                          {
                            size: 18,
                            className: `${g.classes.textPrimary}`
                          }
                        ) : /* @__PURE__ */ a(
                          Ce,
                          {
                            size: 18,
                            className: `${g.classes.textPrimary}`
                          }
                        ),
                        variant: "clear",
                        activeColor: "transparent",
                        size: "small",
                        children: ""
                      }
                    )
                  ] }),
                  /* @__PURE__ */ a(ke, { initial: !1, children: _ && K.length > 0 && /* @__PURE__ */ a(
                    ye.div,
                    {
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      exit: { opacity: 0, height: 0 },
                      transition: {
                        duration: 0.25,
                        ease: "easeInOut"
                      },
                      className: `mt-4 pt-3.5 px-2 border-t space-y-3 animate-slide-down ${g.classes.divider}`,
                      children: K.map((V, xe) => {
                        const pe = ee(d, V), be = V.align === "center" ? "text-center" : V.align === "right" ? "text-right" : "text-left";
                        return /* @__PURE__ */ i(
                          "div",
                          {
                            className: "flex justify-between items-center gap-2 py-0.5",
                            children: [
                              /* @__PURE__ */ a(
                                "span",
                                {
                                  className: `text-xs font-semibold truncate ${g.classes.textMuted}`,
                                  children: V.headerName
                                }
                              ),
                              /* @__PURE__ */ a(
                                "span",
                                {
                                  className: `col-span-2 text-xs font-medium break-all ${be} ${g.classes.textPrimary}`,
                                  children: pe
                                }
                              )
                            ]
                          },
                          xe
                        );
                      })
                    }
                  ) })
                ]
              },
              W
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ a(
      ie,
      {
        page: M,
        pageSize: e,
        totalRows: j,
        loading: x,
        onPageChange: B,
        onPageSizeChange: N,
        theme: o,
        isMobile: !0,
        themeConfig: y
      }
    )
  ] });
}
function Ge(t) {
  const s = () => typeof window > "u" ? !1 : window.matchMedia(t).matches, [e, l] = E(s);
  return A(() => {
    const r = window.matchMedia(t), n = (m) => {
      l(m.matches);
    };
    return l(r.matches), r.addEventListener("change", n), () => {
      r.removeEventListener("change", n);
    };
  }, [t]), e;
}
function de(t) {
  const [s, e] = E(
    t ?? (document.documentElement.classList.contains("dark") ? "dark" : "light")
  );
  return A(() => {
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
  }, [t]), s;
}
function Ve(t) {
  const s = Ge("(max-width: 768px)"), { modeTable: e = "auto" } = t, l = de(t.theme);
  return e === "mobile" ? /* @__PURE__ */ a(te, { ...t, theme: l }) : e === "desktop" ? /* @__PURE__ */ a(q, { ...t, theme: l }) : s ? /* @__PURE__ */ a(te, { ...t, theme: l }) : /* @__PURE__ */ a(q, { ...t, theme: l });
}
function We({
  data: t,
  filterColumns: s,
  filterPlaceholder: e = "Buscar...",
  filterClassName: l,
  theme: r,
  ...n
}) {
  const [m, u] = E(t), o = de(r);
  return /* @__PURE__ */ i("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ a(
      we,
      {
        data: t,
        columns: s,
        placeholder: e,
        onChange: u,
        className: l,
        theme: o
      }
    ),
    /* @__PURE__ */ a(Ve, { ...n, data: m, theme: r })
  ] });
}
export {
  Ve as CBDataTable,
  q as CBDataTableDesktop,
  te as CBDataTableMobile,
  We as CBDataTableWithFilter
};
