import { jsxs as o, jsx as e, Fragment as Ne } from "react/jsx-runtime";
import { D as O, C as $, F as te, a as se, b as ae, c as Y, d as ve, A as Ce, m as ke, e as ye } from "./CBFilterBar-CqVjOg4I.js";
import { AgGridReact as we } from "ag-grid-react";
import { useState as R, useCallback as S, useMemo as B, useRef as _, useEffect as F } from "react";
import { themeQuartz as ne, colorSchemeDarkBlue as Pe, colorSchemeLightCold as Se, ModuleRegistry as Re, ClientSideRowModelModule as Ee, PaginationModule as Te, RowSelectionModule as Be, CellStyleModule as $e, LocaleModule as De } from "ag-grid-community";
import { IonPopover as Me, IonList as Le, IonItem as Fe } from "@ionic/react";
function le(t) {
  const { col: a, render: s, children: n, align: c, ...l } = t;
  return n && n.length > 0 ? {
    ...l,
    headerName: t.headerName,
    children: n.map((d) => le(d)),
    flex: a ?? 1
  } : {
    ...l,
    flex: a ?? 1,
    cellRenderer: s ? (d) => d.data ? s(d.data) : null : void 0,
    cellClass: c === "center" ? "ag-cell-center" : c === "right" ? "ag-cell-right" : "ag-cell-left",
    headerClass: c === "center" ? "ag-header-center" : c === "right" ? "ag-header-right" : "ag-header-left"
  };
}
const Ae = ne.withPart(Pe), ze = ne.withPart(Se), je = (t) => t ? Ae : ze;
function re({
  selectionMode: t,
  getRowId: a,
  onDelete: s
}) {
  const [n, c] = R([]), l = S(
    (r, g) => a ? a(r) : String(g),
    [a]
  ), u = S(
    (r, g) => {
      const m = l(r, g);
      return n.some(
        (h, N) => l(h, N) === m
      );
    },
    [n, l]
  ), d = S(
    (r, g) => {
      const m = l(r, g);
      c((h) => {
        const N = h.some(
          (b, C) => l(b, C) === m
        );
        return t === "single" ? N ? [] : [r] : N ? h.filter((b, C) => l(b, C) !== m) : [...h, r];
      });
    },
    [t, l]
  ), f = S(() => {
    c([]);
  }, []), y = S(() => {
    s && (n.forEach(s), f());
  }, [n, s, f]), D = S(
    (r) => {
      c((g) => {
        if (t === "single")
          return r.length ? [r[0]] : [];
        const m = [...g];
        return r.forEach((h) => {
          m.some(
            (b, C) => l(b, C) === l(h, C)
          ) || m.push(h);
        }), m;
      });
    },
    [t, l]
  );
  return {
    unselectRows: S(
      (r) => {
        c(
          (g) => g.filter(
            (m, h) => !r.some(
              (N, b) => l(m, h) === l(N, b)
            )
          )
        );
      },
      [l]
    ),
    selectRows: D,
    selectedRows: n,
    setSelectedRows: c,
    isSelected: u,
    toggleRow: d,
    clearSelection: f,
    deleteSelected: y,
    getKey: l
  };
}
function ce({
  page: t,
  pageSize: a,
  totalRows: s,
  loading: n = !1,
  onPageChange: c,
  onPageSizeChange: l,
  isMobile: u = !1,
  theme: d,
  pageSizeOptions: f = [10, 20, 50],
  themeConfig: y
}) {
  const [D, v] = R(!1), r = B(() => ({ ...O[d ?? "dark"] || O.dark, ...y }), [d, y]), g = Math.max(Math.ceil(s / a), 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: `flex items-center gap-1 px-4 py-3 text-sm ${r.classes.textPrimary} ${u ? "flex-col justify-center" : "flex-row justify-between"}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ o("span", { children: [
            "Página ",
            /* @__PURE__ */ e("strong", { className: "font-semibold", children: t + 1 }),
            " de",
            " ",
            /* @__PURE__ */ e("strong", { className: "font-semibold", children: g }),
            /* @__PURE__ */ e("span", { className: "mx-2", children: "|" }),
            "Total de ",
            /* @__PURE__ */ e("strong", { className: "font-semibold", children: s }),
            " ",
            "registros"
          ] }),
          n && !u && /* @__PURE__ */ o(
            "span",
            {
              className: `inline-flex items-center gap-1.5 text-xs ${r.classes.textPrimary} animate-pulse`,
              children: [
                /* @__PURE__ */ e("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
                "Carregando..."
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o(
          "div",
          {
            className: u ? "flex flex-col gap-1 items-center" : "flex gap-4",
            children: [
              l ? /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: `text-xs ${r.classes.textPrimary}`, children: "Linhas por página:" }),
                /* @__PURE__ */ e(
                  $,
                  {
                    id: "page-size-button",
                    variant: "outline",
                    size: "small",
                    borderColor: r.classes.border,
                    backgroundColor: "transparent",
                    rounded: "sm",
                    textColor: "inherit",
                    className: "min-w-16!",
                    iconEnd: /* @__PURE__ */ e(te, { size: 14, className: "opacity-70" }),
                    onClick: () => v(!0),
                    children: a
                  }
                ),
                /* @__PURE__ */ e(
                  Me,
                  {
                    trigger: "page-size-button",
                    isOpen: D,
                    onDidDismiss: () => v(!1),
                    showBackdrop: !1,
                    alignment: "end",
                    side: "bottom",
                    className: "page-size-popover",
                    style: {
                      "--width": "70px"
                    },
                    children: /* @__PURE__ */ e(
                      Le,
                      {
                        style: {
                          background: r.classes.wrapper
                        },
                        children: f.map((m) => /* @__PURE__ */ e(
                          Fe,
                          {
                            button: !0,
                            detail: !1,
                            onClick: () => {
                              l(m), v(!1);
                            },
                            style: {
                              "--background": r.classes.wrapper,
                              "--color": r.classes.textPrimary
                            },
                            children: m
                          },
                          m
                        ))
                      }
                    )
                  }
                )
              ] }) : null,
              /* @__PURE__ */ o("div", { children: [
                /* @__PURE__ */ e(
                  $,
                  {
                    children: "Anterior",
                    disabled: t === 0 || n,
                    onClick: () => c(t - 1),
                    color: r?.colorsPagination?.bgButtonPreviousPagination
                  }
                ),
                /* @__PURE__ */ e(
                  $,
                  {
                    children: "Próxima",
                    disabled: t + 1 >= g || n,
                    onClick: () => c(t + 1),
                    color: r?.colorsPagination?.bgButtonNextPagination
                  }
                )
              ] }),
              n && u && /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 animate-pulse", children: [
                /* @__PURE__ */ e("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
                "Carregando..."
              ] })
            ]
          }
        )
      ]
    }
  );
}
Re.registerModules([
  Ee,
  Te,
  Be,
  $e,
  De
]);
function Z({
  columns: t,
  data: a,
  pageSize: s = 5,
  emptyMessage: n = "Nenhum dado encontrado",
  getRowId: c,
  onEdit: l,
  onDelete: u,
  selectionMode: d = "single",
  theme: f,
  page: y,
  totalRows: D = 0,
  onPageChange: v,
  onPageSizeChange: r,
  loading: g = !1
}) {
  const m = B(() => je(f === "dark"), [f]), [h, N] = R([]), [b, C] = R(0), E = y ?? b, G = (p) => {
    v ? v(p) : C(p);
  }, A = D || a.length, { deleteSelected: k } = re({
    selectionMode: d,
    getRowId: c,
    onDelete: u
  }), w = _(null), L = _(null), z = S(() => {
    const p = w.current?.api?.getSelectedNodes() ?? [];
    N(
      p.map((M) => M.data).filter((M) => M != null)
    );
  }, []), I = B(
    () => t.map((p) => le(p)),
    [t]
  ), Q = B(
    () => c ? (p) => c(p.data) : void 0,
    [c]
  );
  F(() => {
    const p = (M) => {
      L.current && !L.current.contains(M.target) && (N([]), w.current?.api?.deselectAll());
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, []);
  const H = B(() => {
    if (v)
      return a;
    const p = E * s;
    return a.slice(p, p + s);
  }, [a, E, s, v]);
  return /* @__PURE__ */ o("div", { ref: L, className: "relative w-full", children: [
    /* @__PURE__ */ e(
      we,
      {
        ref: w,
        rowData: H,
        getRowId: Q,
        defaultColDef: { resizable: !1 },
        columnDefs: I,
        theme: m,
        animateRows: !0,
        rowSelection: d === "multiple" ? {
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
        overlayNoRowsTemplate: `<span class="text-white">${n}</span>`,
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
    /* @__PURE__ */ e(
      ce,
      {
        page: E,
        pageSize: s,
        totalRows: A,
        loading: g,
        onPageChange: G,
        onPageSizeChange: r,
        theme: f
      }
    ),
    /* @__PURE__ */ o("div", { className: "absolute -top-2 right-2 -translate-y-1/2 flex gap-2 z-10", children: [
      l && /* @__PURE__ */ e(
        $,
        {
          "aria-label": "Editar",
          children: "",
          iconStart: /* @__PURE__ */ e(se, { size: 18 }),
          color: "primary",
          disabled: h.length !== 1,
          onClick: () => h.length === 1 && l(h[0])
        }
      ),
      u && /* @__PURE__ */ e(
        $,
        {
          "aria-label": "Excluir",
          children: "",
          iconStart: /* @__PURE__ */ e(ae, { size: 18 }),
          color: "danger",
          disabled: h.length === 0,
          onClick: k
        }
      )
    ] })
  ] });
}
function ie(t) {
  const a = [];
  return t.forEach((s) => {
    if (s.children && s.children.length > 0) {
      a.push(...ie(s.children));
      return;
    }
    a.push({
      headerName: s.headerName ?? "",
      field: s.field,
      align: s.align,
      render: s.render,
      valueGetter: s.valueGetter
    });
  }), a;
}
function q(t, a) {
  if (!a) return "-";
  const s = t[a];
  return s == null || s === "" ? "-" : String(s);
}
function ee({
  columns: t,
  data: a,
  pageSize: s = 5,
  emptyMessage: n = "Nenhum dado encontrado",
  getRowId: c,
  onEdit: l,
  onDelete: u,
  selectionMode: d = "single",
  theme: f,
  themeConfig: y,
  page: D,
  totalRows: v = 0,
  onPageChange: r,
  onPageSizeChange: g,
  loading: m = !1
}) {
  console.log("theme mobile", f);
  const [h, N] = R(
    {}
  ), [b, C] = R(0), E = D ?? b, G = (i) => {
    r ? r(i) : C(i);
  }, A = v || a.length, k = B(() => {
    if (r)
      return a;
    const i = E * s;
    return a.slice(i, i + s);
  }, [a, E, s, r]), {
    selectedRows: w,
    isSelected: L,
    toggleRow: z,
    deleteSelected: I,
    clearSelection: Q,
    selectRows: H,
    unselectRows: p,
    getKey: M
  } = re({
    selectionMode: d,
    getRowId: c,
    onDelete: u
  }), de = _(null), x = B(() => ({ ...O[f ?? "dark"] || O.dark, ...y }), [f, y]), me = B(() => ie(t), [t]), [j, ...K] = me, J = Math.max(1, Math.ceil(A / s));
  F(() => {
    const i = Math.max(J - 1, 0);
    b > i && C(i);
  }, [J, b]);
  const U = k.length > 0 && k.every((i, P) => L(i, P)), ue = S(() => {
    d === "multiple" && (U ? p(k) : H(k));
  }, [U, k, d]), he = (i) => {
    N((P) => ({ ...P, [i]: !P[i] }));
  }, fe = !!(l || u);
  return F(() => {
    Q();
  }, [E]), /* @__PURE__ */ o(Ne, { children: [
    /* @__PURE__ */ o(
      "div",
      {
        ref: de,
        className: `w-full flex flex-col p-3 rounded-xl border transition-all duration-200 ${x.classes.wrapper}`,
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-col gap-3.5 mb-4", children: [
            fe && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ o(
                "span",
                {
                  className: `text-xs px-2.5 py-1 rounded-full font-bold transition-all ${x.classes.badge}`,
                  children: [
                    w.length,
                    " selecionado(s)"
                  ]
                }
              ),
              /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                l && /* @__PURE__ */ e(
                  $,
                  {
                    color: "primary",
                    iconStart: /* @__PURE__ */ e(se, { size: 16 }),
                    disabled: w.length !== 1,
                    onClick: () => w.length === 1 && l(w[0]),
                    children: ""
                  }
                ),
                u && /* @__PURE__ */ e(
                  $,
                  {
                    color: "danger",
                    iconStart: /* @__PURE__ */ e(ae, { size: 16 }),
                    disabled: w.length === 0,
                    onClick: I,
                    children: ""
                  }
                )
              ] })
            ] }),
            d === "multiple" && k.length > 0 && /* @__PURE__ */ o("label", { className: "flex items-center gap-2 px-1 py-0.5 select-none cursor-pointer", children: [
              /* @__PURE__ */ e(
                Y,
                {
                  checked: U,
                  onChange: ue,
                  color: "primary",
                  className: x.classes.checkboxBorder
                }
              ),
              /* @__PURE__ */ o(
                "span",
                {
                  className: `text-xs font-semibold ${x.classes.textMuted}`,
                  children: [
                    "Selecionar todos desta página (",
                    k.length,
                    ")"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "flex flex-col gap-1 min-h-[120px]", children: k.length === 0 ? /* @__PURE__ */ e("div", { className: "flex flex-col items-center justify-center py-10 text-center", children: /* @__PURE__ */ e(
            "span",
            {
              className: `text-sm font-medium ${x.classes.textMuted}`,
              children: n
            }
          ) }) : k.map((i, P) => {
            const V = M(i, P), X = L(i, P), W = !!h[V], ge = j?.render ? j.render(i) : q(i, j?.field);
            return /* @__PURE__ */ o(
              "div",
              {
                className: `rounded-xl border px-4 py-2 transition-all duration-200 ${x.classes.card} ${X ? x.classes.cardSelected : ""}`,
                children: [
                  /* @__PURE__ */ o("div", { className: "flex items-start gap-3.5", children: [
                    /* @__PURE__ */ e(
                      "div",
                      {
                        "aria-label": "Selecionar registro",
                        onClick: () => z(i, P),
                        className: "pt-1 shrink-0 cursor-pointer",
                        children: /* @__PURE__ */ e(
                          Y,
                          {
                            checked: X,
                            onChange: () => {
                            },
                            color: "primary",
                            className: x.classes.checkboxBorder
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ o(
                      "div",
                      {
                        className: "flex-1 min-w-0 cursor-pointer",
                        onClick: () => z(i, P),
                        children: [
                          /* @__PURE__ */ e(
                            "div",
                            {
                              className: `text-xs font-bold uppercase tracking-widest mb-0.5 ${x.classes.textMuted}`,
                              children: j?.headerName || "Registro"
                            }
                          ),
                          /* @__PURE__ */ e(
                            "div",
                            {
                              className: `text-sm font-bold truncate ${x.classes.textPrimary}`,
                              children: ge
                            }
                          )
                        ]
                      }
                    ),
                    K.length > 0 && /* @__PURE__ */ e(
                      $,
                      {
                        "aria-label": W ? "Recolher detalhes" : "Expandir detalhes",
                        onClick: () => he(V),
                        iconEnd: W ? /* @__PURE__ */ e(
                          ve,
                          {
                            size: 18,
                            className: `${x.classes.textPrimary}`
                          }
                        ) : /* @__PURE__ */ e(
                          te,
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
                  /* @__PURE__ */ e(Ce, { initial: !1, children: W && K.length > 0 && /* @__PURE__ */ e(
                    ke.div,
                    {
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      exit: { opacity: 0, height: 0 },
                      transition: {
                        duration: 0.25,
                        ease: "easeInOut"
                      },
                      className: `mt-4 pt-3.5 px-2 border-t space-y-3 animate-slide-down ${x.classes.divider}`,
                      children: K.map((T, pe) => {
                        const xe = T.render ? T.render(i) : T.valueGetter ? T.valueGetter(i) : q(i, T.field), be = T.align === "center" ? "text-center" : T.align === "right" ? "text-right" : "text-left";
                        return /* @__PURE__ */ o(
                          "div",
                          {
                            className: "flex justify-between items-center gap-2 py-0.5",
                            children: [
                              /* @__PURE__ */ e(
                                "span",
                                {
                                  className: `text-xs font-semibold truncate ${x.classes.textMuted}`,
                                  children: T.headerName
                                }
                              ),
                              /* @__PURE__ */ e(
                                "span",
                                {
                                  className: `col-span-2 text-xs font-medium break-all ${be} ${x.classes.textPrimary}`,
                                  children: xe
                                }
                              )
                            ]
                          },
                          pe
                        );
                      })
                    }
                  ) })
                ]
              },
              V
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ e(
      ce,
      {
        page: E,
        pageSize: s,
        totalRows: A,
        loading: m,
        onPageChange: G,
        onPageSizeChange: g,
        theme: f,
        isMobile: !0,
        themeConfig: y
      }
    )
  ] });
}
function Oe(t) {
  const a = () => typeof window > "u" ? !1 : window.matchMedia(t).matches, [s, n] = R(a);
  return F(() => {
    const c = window.matchMedia(t), l = (u) => {
      n(u.matches);
    };
    return n(c.matches), c.addEventListener("change", l), () => {
      c.removeEventListener("change", l);
    };
  }, [t]), s;
}
function oe(t) {
  const [a, s] = R(
    t ?? (document.documentElement.classList.contains("dark") ? "dark" : "light")
  );
  return F(() => {
    if (t) {
      s(t);
      return;
    }
    const n = new MutationObserver(() => {
      s(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    });
    return n.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class"]
    }), () => n.disconnect();
  }, [t]), console.log("theme", a), a;
}
function Ge(t) {
  const a = Oe("(max-width: 768px)"), { modeTable: s = "auto" } = t, n = oe(t.theme);
  return console.log("themeComputed", n), s === "mobile" ? /* @__PURE__ */ e(ee, { ...t, theme: n }) : s === "desktop" ? /* @__PURE__ */ e(Z, { ...t, theme: n }) : a ? /* @__PURE__ */ e(ee, { ...t, theme: n }) : /* @__PURE__ */ e(Z, { ...t, theme: n });
}
function We({
  data: t,
  filterColumns: a,
  filterPlaceholder: s = "Buscar...",
  filterClassName: n,
  theme: c,
  ...l
}) {
  const [u, d] = R(t), f = oe(c);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ e(
      ye,
      {
        data: t,
        columns: a,
        placeholder: s,
        onChange: d,
        className: n,
        theme: f
      }
    ),
    /* @__PURE__ */ e(Ge, { ...l, data: u, theme: c })
  ] });
}
export {
  Ge as CBDataTable,
  Z as CBDataTableDesktop,
  ee as CBDataTableMobile,
  We as CBDataTableWithFilter
};
