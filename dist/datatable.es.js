import { jsxs as o, jsx as a, Fragment as be } from "react/jsx-runtime";
import { D as O, C as D, F as te, a as ae, b as Y, c as Ne, d as ve, A as Ce, m as ke, e as ye } from "./CBFilterBar-Bk_8vKkp.js";
import { AgGridReact as we } from "ag-grid-react";
import { useState as B, useCallback as R, useMemo as E, useRef as I, useEffect as L } from "react";
import { themeQuartz as se, colorSchemeDarkBlue as Pe, colorSchemeLightCold as Se, ModuleRegistry as Re, ClientSideRowModelModule as $e, PaginationModule as Te, RowSelectionModule as Ee, CellStyleModule as Be, LocaleModule as Me } from "ag-grid-community";
function ne(e) {
  const { col: s, render: t, children: n, align: r, ...l } = e;
  return n && n.length > 0 ? {
    ...l,
    headerName: e.headerName,
    children: n.map((d) => ne(d)),
    flex: s ?? 1
  } : {
    ...l,
    flex: s ?? 1,
    cellRenderer: t ? (d) => d.data ? t(d.data) : null : void 0,
    cellClass: r === "center" ? "ag-cell-center" : r === "right" ? "ag-cell-right" : "ag-cell-left",
    headerClass: r === "center" ? "ag-header-center" : r === "right" ? "ag-header-right" : "ag-header-left"
  };
}
const De = se.withPart(Pe), Fe = se.withPart(Se), Le = (e) => e ? De : Fe;
function le({
  selectionMode: e,
  getRowId: s,
  onDelete: t
}) {
  const [n, r] = B([]), l = R(
    (c, b) => s ? s(c) : String(b),
    [s]
  ), m = R(
    (c, b) => {
      const x = l(c, b);
      return n.some(
        (u, v) => l(u, v) === x
      );
    },
    [n, l]
  ), d = R(
    (c, b) => {
      const x = l(c, b);
      r((u) => {
        const v = u.some(
          (N, C) => l(N, C) === x
        );
        return e === "single" ? v ? [] : [c] : v ? u.filter((N, C) => l(N, C) !== x) : [...u, c];
      });
    },
    [e, l]
  ), h = R(() => {
    r([]);
  }, []), y = R(() => {
    t && (n.forEach(t), h());
  }, [n, t, h]), p = R(
    (c) => {
      r((b) => {
        if (e === "single")
          return c.length ? [c[0]] : [];
        const x = [...b];
        return c.forEach((u) => {
          x.some(
            (N, C) => l(N, C) === l(u, C)
          ) || x.push(u);
        }), x;
      });
    },
    [e, l]
  );
  return {
    unselectRows: R(
      (c) => {
        r(
          (b) => b.filter(
            (x, u) => !c.some(
              (v, N) => l(x, u) === l(v, N)
            )
          )
        );
      },
      [l]
    ),
    selectRows: p,
    selectedRows: n,
    setSelectedRows: r,
    isSelected: m,
    toggleRow: d,
    clearSelection: h,
    deleteSelected: y,
    getKey: l
  };
}
function re({
  page: e,
  pageSize: s,
  totalRows: t,
  loading: n = !1,
  onPageChange: r,
  onPageSizeChange: l,
  isMobile: m = !1,
  theme: d,
  pageSizeOptions: h = [10, 20, 50],
  themeConfig: y
}) {
  const p = E(() => ({ ...O[d ?? "dark"] || O.dark, ...y }), [d, y]), w = Math.max(Math.ceil(t / s), 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: `flex items-center gap-1 px-4 py-3 text-sm ${p.classes.textPrimary} ${m ? "flex-col justify-center" : "flex-row justify-between"}`,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ o("span", { children: [
            "Página ",
            /* @__PURE__ */ a("strong", { className: "font-semibold", children: e + 1 }),
            " de",
            " ",
            /* @__PURE__ */ a("strong", { className: "font-semibold", children: w }),
            /* @__PURE__ */ a("span", { className: "mx-2", children: "|" }),
            "Total de ",
            /* @__PURE__ */ a("strong", { className: "font-semibold", children: t }),
            " ",
            "registros"
          ] }),
          n && !m && /* @__PURE__ */ o(
            "span",
            {
              className: `inline-flex items-center gap-1.5 text-xs ${p.classes.textPrimary} animate-pulse`,
              children: [
                /* @__PURE__ */ a("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
                "Carregando..."
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o(
          "div",
          {
            className: m ? "flex flex-col gap-1 items-center" : "flex gap-4",
            children: [
              l ? /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ a("span", { className: `text-xs ${p.classes.textPrimary}`, children: "Linhas por página:" }),
                /* @__PURE__ */ a(
                  "select",
                  {
                    name: "pageSize",
                    value: s,
                    onChange: (c) => l(Number(c.target.value)),
                    className: `${p.classes.selectPagination} rounded-md px-2 py-1 text-xs font-medium outline-none cursor-pointer transition-all`,
                    children: h.map((c) => /* @__PURE__ */ a(
                      "option",
                      {
                        value: c,
                        className: `${p.classes.textPrimary} cursor-pointer `,
                        children: c
                      },
                      c
                    ))
                  }
                )
              ] }) : null,
              /* @__PURE__ */ o("div", { children: [
                /* @__PURE__ */ a(
                  D,
                  {
                    children: "Anterior",
                    disabled: e === 0 || n,
                    onClick: () => r(e - 1),
                    color: p?.colorsPagination?.bgButtonPreviousPagination
                  }
                ),
                /* @__PURE__ */ a(
                  D,
                  {
                    children: "Próxima",
                    disabled: e + 1 >= w || n,
                    onClick: () => r(e + 1),
                    color: p?.colorsPagination?.bgButtonNextPagination
                  }
                )
              ] }),
              n && m && /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 animate-pulse", children: [
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
Re.registerModules([
  $e,
  Te,
  Ee,
  Be,
  Me
]);
function Z({
  columns: e,
  data: s,
  pageSize: t = 5,
  emptyMessage: n = "Nenhum dado encontrado",
  getRowId: r,
  onEdit: l,
  onDelete: m,
  selectionMode: d = "single",
  theme: h,
  page: y,
  totalRows: p = 0,
  onPageChange: w,
  onPageSizeChange: c,
  loading: b = !1
}) {
  const x = E(() => Le(h === "dark"), [h]), [u, v] = B([]), [N, C] = B(0), $ = y ?? N, Q = (f) => {
    w ? w(f) : C(f);
  }, A = p || s.length, { deleteSelected: k } = le({
    selectionMode: d,
    getRowId: r,
    onDelete: m
  }), P = I(null), F = I(null), j = R(() => {
    const f = P.current?.api?.getSelectedNodes() ?? [];
    v(
      f.map((M) => M.data).filter((M) => M != null)
    );
  }, []), z = E(
    () => e.map((f) => ne(f)),
    [e]
  ), H = E(
    () => r ? (f) => r(f.data) : void 0,
    [r]
  );
  L(() => {
    const f = (M) => {
      F.current && !F.current.contains(M.target) && (v([]), P.current?.api?.deselectAll());
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, []);
  const K = E(() => {
    if (w)
      return s;
    const f = $ * t;
    return s.slice(f, f + t);
  }, [s, $, t, w]);
  return /* @__PURE__ */ o("div", { ref: F, className: "relative w-full", children: [
    /* @__PURE__ */ a(
      we,
      {
        ref: P,
        rowData: K,
        getRowId: H,
        defaultColDef: { resizable: !1 },
        columnDefs: z,
        theme: x,
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
        onSelectionChanged: j,
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
    /* @__PURE__ */ a(
      re,
      {
        page: $,
        pageSize: t,
        totalRows: A,
        loading: b,
        onPageChange: Q,
        onPageSizeChange: c,
        theme: h
      }
    ),
    /* @__PURE__ */ o("div", { className: "absolute -top-2 right-2 -translate-y-1/2 flex gap-2 z-10", children: [
      l && /* @__PURE__ */ a(
        D,
        {
          "aria-label": "Editar",
          children: "",
          iconStart: /* @__PURE__ */ a(te, { size: 18 }),
          color: "primary",
          disabled: u.length !== 1,
          onClick: () => u.length === 1 && l(u[0])
        }
      ),
      m && /* @__PURE__ */ a(
        D,
        {
          "aria-label": "Excluir",
          children: "",
          iconStart: /* @__PURE__ */ a(ae, { size: 18 }),
          color: "danger",
          disabled: u.length === 0,
          onClick: k
        }
      )
    ] })
  ] });
}
function ce(e) {
  const s = [];
  return e.forEach((t) => {
    if (t.children && t.children.length > 0) {
      s.push(...ce(t.children));
      return;
    }
    s.push({
      headerName: t.headerName ?? "",
      field: t.field,
      align: t.align,
      render: t.render,
      valueGetter: t.valueGetter
    });
  }), s;
}
function q(e, s) {
  if (!s) return "-";
  const t = e[s];
  return t == null || t === "" ? "-" : String(t);
}
function ee({
  columns: e,
  data: s,
  pageSize: t = 5,
  emptyMessage: n = "Nenhum dado encontrado",
  getRowId: r,
  onEdit: l,
  onDelete: m,
  selectionMode: d = "single",
  theme: h,
  themeConfig: y,
  page: p,
  totalRows: w = 0,
  onPageChange: c,
  onPageSizeChange: b,
  loading: x = !1
}) {
  console.log("theme mobile", h);
  const [u, v] = B(
    {}
  ), [N, C] = B(0), $ = p ?? N, Q = (i) => {
    c ? c(i) : C(i);
  }, A = w || s.length, k = E(() => {
    if (c)
      return s;
    const i = $ * t;
    return s.slice(i, i + t);
  }, [s, $, t, c]), {
    selectedRows: P,
    isSelected: F,
    toggleRow: j,
    deleteSelected: z,
    clearSelection: H,
    selectRows: K,
    unselectRows: f,
    getKey: M
  } = le({
    selectionMode: d,
    getRowId: r,
    onDelete: m
  }), oe = I(null), g = E(() => ({ ...O[h ?? "dark"] || O.dark, ...y }), [h, y]), de = E(() => ce(e), [e]), [G, ...U] = de, J = Math.max(1, Math.ceil(A / t));
  L(() => {
    const i = Math.max(J - 1, 0);
    N > i && C(i);
  }, [J, N]);
  const V = k.length > 0 && k.every((i, S) => F(i, S)), me = R(() => {
    d === "multiple" && (V ? f(k) : K(k));
  }, [V, k, d]), ue = (i) => {
    v((S) => ({ ...S, [i]: !S[i] }));
  }, he = !!(l || m);
  return L(() => {
    H();
  }, [$]), /* @__PURE__ */ o(be, { children: [
    /* @__PURE__ */ o(
      "div",
      {
        ref: oe,
        className: `w-full flex flex-col p-3 rounded-xl border transition-all duration-200 ${g.classes.wrapper}`,
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-col gap-3.5 mb-4", children: [
            he && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ o(
                "span",
                {
                  className: `text-xs px-2.5 py-1 rounded-full font-bold transition-all ${g.classes.badge}`,
                  children: [
                    P.length,
                    " selecionado(s)"
                  ]
                }
              ),
              /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                l && /* @__PURE__ */ a(
                  D,
                  {
                    color: "primary",
                    iconStart: /* @__PURE__ */ a(te, { size: 16 }),
                    disabled: P.length !== 1,
                    onClick: () => P.length === 1 && l(P[0]),
                    children: ""
                  }
                ),
                m && /* @__PURE__ */ a(
                  D,
                  {
                    color: "danger",
                    iconStart: /* @__PURE__ */ a(ae, { size: 16 }),
                    disabled: P.length === 0,
                    onClick: z,
                    children: ""
                  }
                )
              ] })
            ] }),
            d === "multiple" && k.length > 0 && /* @__PURE__ */ o("label", { className: "flex items-center gap-2 px-1 py-0.5 select-none cursor-pointer", children: [
              /* @__PURE__ */ a(
                Y,
                {
                  checked: V,
                  onChange: me,
                  color: "primary",
                  className: g.classes.checkboxBorder
                }
              ),
              /* @__PURE__ */ o(
                "span",
                {
                  className: `text-xs font-semibold ${g.classes.textMuted}`,
                  children: [
                    "Selecionar todos desta página (",
                    k.length,
                    ")"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ a("div", { className: "flex flex-col gap-1 min-h-[120px]", children: k.length === 0 ? /* @__PURE__ */ a("div", { className: "flex flex-col items-center justify-center py-10 text-center", children: /* @__PURE__ */ a(
            "span",
            {
              className: `text-sm font-medium ${g.classes.textMuted}`,
              children: n
            }
          ) }) : k.map((i, S) => {
            const W = M(i, S), X = F(i, S), _ = !!u[W], fe = G?.render ? G.render(i) : q(i, G?.field);
            return /* @__PURE__ */ o(
              "div",
              {
                className: `rounded-xl border px-4 py-2 transition-all duration-200 ${g.classes.card} ${X ? g.classes.cardSelected : ""}`,
                children: [
                  /* @__PURE__ */ o("div", { className: "flex items-start gap-3.5", children: [
                    /* @__PURE__ */ a(
                      "div",
                      {
                        "aria-label": "Selecionar registro",
                        onClick: () => j(i, S),
                        className: "pt-1 shrink-0 cursor-pointer",
                        children: /* @__PURE__ */ a(
                          Y,
                          {
                            checked: X,
                            onChange: () => {
                            },
                            color: "primary",
                            className: g.classes.checkboxBorder
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ o(
                      "div",
                      {
                        className: "flex-1 min-w-0 cursor-pointer",
                        onClick: () => j(i, S),
                        children: [
                          /* @__PURE__ */ a(
                            "div",
                            {
                              className: `text-xs font-bold uppercase tracking-widest mb-0.5 ${g.classes.textMuted}`,
                              children: G?.headerName || "Registro"
                            }
                          ),
                          /* @__PURE__ */ a(
                            "div",
                            {
                              className: `text-sm font-bold truncate ${g.classes.textPrimary}`,
                              children: fe
                            }
                          )
                        ]
                      }
                    ),
                    U.length > 0 && /* @__PURE__ */ a(
                      D,
                      {
                        "aria-label": _ ? "Recolher detalhes" : "Expandir detalhes",
                        onClick: () => ue(W),
                        iconEnd: _ ? /* @__PURE__ */ a(
                          Ne,
                          {
                            size: 18,
                            className: `${g.classes.textPrimary}`
                          }
                        ) : /* @__PURE__ */ a(
                          ve,
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
                  /* @__PURE__ */ a(Ce, { initial: !1, children: _ && U.length > 0 && /* @__PURE__ */ a(
                    ke.div,
                    {
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      exit: { opacity: 0, height: 0 },
                      transition: {
                        duration: 0.25,
                        ease: "easeInOut"
                      },
                      className: `mt-4 pt-3.5 px-2 border-t space-y-3 animate-slide-down ${g.classes.divider}`,
                      children: U.map((T, ge) => {
                        const xe = T.render ? T.render(i) : T.valueGetter ? T.valueGetter(i) : q(i, T.field), pe = T.align === "center" ? "text-center" : T.align === "right" ? "text-right" : "text-left";
                        return /* @__PURE__ */ o(
                          "div",
                          {
                            className: "flex justify-between items-center gap-2 py-0.5",
                            children: [
                              /* @__PURE__ */ a(
                                "span",
                                {
                                  className: `text-xs font-semibold truncate ${g.classes.textMuted}`,
                                  children: T.headerName
                                }
                              ),
                              /* @__PURE__ */ a(
                                "span",
                                {
                                  className: `col-span-2 text-xs font-medium break-all ${pe} ${g.classes.textPrimary}`,
                                  children: xe
                                }
                              )
                            ]
                          },
                          ge
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
      re,
      {
        page: $,
        pageSize: t,
        totalRows: A,
        loading: x,
        onPageChange: Q,
        onPageSizeChange: b,
        theme: h,
        isMobile: !0,
        themeConfig: y
      }
    )
  ] });
}
function Ae(e) {
  const s = () => typeof window > "u" ? !1 : window.matchMedia(e).matches, [t, n] = B(s);
  return L(() => {
    const r = window.matchMedia(e), l = (m) => {
      n(m.matches);
    };
    return n(r.matches), r.addEventListener("change", l), () => {
      r.removeEventListener("change", l);
    };
  }, [e]), t;
}
function ie(e) {
  const [s, t] = B(
    e ?? (document.documentElement.classList.contains("dark") ? "dark" : "light")
  );
  return L(() => {
    if (e) {
      t(e);
      return;
    }
    const n = new MutationObserver(() => {
      t(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    });
    return n.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class"]
    }), () => n.disconnect();
  }, [e]), console.log("theme", s), s;
}
function je(e) {
  const s = Ae("(max-width: 768px)"), { modeTable: t = "auto" } = e, n = ie(e.theme);
  return console.log("themeComputed", n), t === "mobile" ? /* @__PURE__ */ a(ee, { ...e, theme: n }) : t === "desktop" ? /* @__PURE__ */ a(Z, { ...e, theme: n }) : s ? /* @__PURE__ */ a(ee, { ...e, theme: n }) : /* @__PURE__ */ a(Z, { ...e, theme: n });
}
function Ke({
  data: e,
  filterColumns: s,
  filterPlaceholder: t = "Buscar...",
  filterClassName: n,
  theme: r,
  ...l
}) {
  const [m, d] = B(e), h = ie(r);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ a(
      ye,
      {
        data: e,
        columns: s,
        placeholder: t,
        onChange: d,
        className: n,
        theme: h
      }
    ),
    /* @__PURE__ */ a(je, { ...l, data: m, theme: r })
  ] });
}
export {
  je as CBDataTable,
  Z as CBDataTableDesktop,
  ee as CBDataTableMobile,
  Ke as CBDataTableWithFilter
};
