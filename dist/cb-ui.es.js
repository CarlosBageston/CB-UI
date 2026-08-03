import { jsxs as I, jsx as e, Fragment as Ve } from "react/jsx-runtime";
import we, { useState as U, useEffect as J, useRef as se, useMemo as ve, createContext as qe, useContext as Ze, useCallback as K } from "react";
import ne from "clsx";
import { IonCard as Ue, IonCardHeader as Ge, IonCardTitle as Qe, IonCardSubtitle as Xe, IonCardContent as Je, IonFooter as Le, IonText as Ke, IonModal as Te, IonHeader as et, IonToolbar as tt, IonButtons as nt, IonButton as ke, IonTitle as rt, IonContent as ot, IonSelect as at, IonSelectOption as st, IonNote as le, IonSpinner as ie, IonTextarea as it, IonToggle as Oe, IonRadioGroup as He, IonRadio as Ae, IonCheckbox as lt, IonFab as Re, IonFabButton as Ye, IonSegment as ct, IonSegmentButton as dt, IonLabel as De, IonAccordionGroup as ut, IonAccordion as ht, IonItem as mt, IonDatetime as Ie, IonInput as ft, IonIcon as he } from "@ionic/react";
import { I as pt, a as je, b as Fe } from "./CBInput-BV0ZvOk5.js";
import { C as Hn, u as An } from "./CBInput-BV0ZvOk5.js";
import { G as re, u as W } from "./useInputMask-DlqD3EiL.js";
import { C as jn, b as Fn, a as En, r as Pn, c as Wn } from "./useInputMask-DlqD3EiL.js";
import { m as P, A as ce, C as xe } from "./CBFilterBar-DcJN3pf3.js";
import { b as qn, e as Zn } from "./CBFilterBar-DcJN3pf3.js";
function $e(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function gt(t) {
  return re({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" } }] })(t);
}
function xt(t) {
  return re({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" } }] })(t);
}
function vt(t) {
  return re({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" } }] })(t);
}
function bt(t) {
  return re({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" } }] })(t);
}
function yt(t) {
  return re({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" } }] })(t);
}
function Mt(t) {
  return re({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" } }] })(t);
}
function Ct(t) {
  return re({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" } }] })(t);
}
function wt(t) {
  return re({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" } }] })(t);
}
function kt(t) {
  return re({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" } }] })(t);
}
function Yt(t) {
  return re({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }] })(t);
}
const xn = ({
  title: t,
  subtitle: a,
  footer: r,
  children: n,
  className: u,
  elevation: i = "md",
  hoverEffect: o = !0,
  collapsible: m = !1,
  defaultCollapsed: l = !1,
  onClickEdit: p,
  onClickDelete: h,
  theme: g
}) => {
  const [k, N] = U(l), _ = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  }[i], B = g?.sizes?.borderRadius || "rounded-md", x = g?.colors?.background || "bg-white dark:bg-gray-900", C = g?.colors?.text || "text-gray-700 dark:text-gray-200", Y = g?.colors?.subtitle || "text-gray-500 dark:text-gray-400";
  return /* @__PURE__ */ I(
    Ue,
    {
      className: ne(
        "transition-all",
        x,
        _,
        B,
        o && "hover:shadow-xl hover:scale-[1.01] cursor-pointer",
        u
      ),
      style: {
        width: g?.sizes?.width,
        height: g?.sizes?.height,
        padding: g?.sizes?.padding
      },
      children: [
        (t || a || m || h || p) && /* @__PURE__ */ e(
          Ge,
          {
            className: "relative flex flex-col items-center",
            style: { minHeight: g?.sizes?.headerHeight },
            children: /* @__PURE__ */ I("div", { className: "flex justify-between w-full items-center", children: [
              /* @__PURE__ */ I("div", { className: "flex flex-col text-center w-full", children: [
                t && /* @__PURE__ */ e(Qe, { className: `text-lg font-semibold ${C}`, children: t }),
                a && /* @__PURE__ */ e(Xe, { className: `${Y} text-sm`, children: a })
              ] }),
              /* @__PURE__ */ I("div", { className: "flex items-center gap-2", children: [
                p && p && /* @__PURE__ */ e(
                  kt,
                  {
                    onClick: p,
                    className: ne(
                      "w-10 h-10 p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                      g?.colors?.edit || "text-(--cb-color-secondary-shade)"
                    )
                  }
                ),
                h && h && /* @__PURE__ */ e(
                  xt,
                  {
                    onClick: h,
                    className: ne(
                      "w-10 h-10 p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                      g?.colors?.delete || "text-(--cb-color-danger)"
                    )
                  }
                ),
                m && /* @__PURE__ */ e(
                  P.div,
                  {
                    initial: !1,
                    animate: { rotate: k ? 0 : 180 },
                    transition: { duration: 0.3 },
                    className: "text-xl flex-center cursor-pointer",
                    onClick: () => N(!k),
                    children: /* @__PURE__ */ e(pt, {})
                  }
                )
              ] })
            ] })
          }
        ),
        !k && n && /* @__PURE__ */ e(
          Je,
          {
            style: {
              padding: g?.contentCard?.padding,
              backgroundColor: g?.contentCard?.background,
              color: g?.contentCard?.text
            },
            className: `${C} text-sm`,
            children: n
          }
        ),
        r && /* @__PURE__ */ e(
          Le,
          {
            className: "p-4 border-t dark:border-gray-700",
            style: { backgroundColor: g?.colors?.footer },
            children: r
          }
        )
      ]
    }
  );
}, $t = {
  "top-left": "top-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0",
  "bottom-left": "bottom-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
}, Dt = (t) => {
  if (t === "center")
    return {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 }
    };
  const r = t.startsWith("top") ? -50 : 50;
  return {
    initial: { opacity: 0, y: r },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: r }
  };
}, vn = ({
  message: t,
  type: a = "info",
  duration: r = 3e3,
  show: n,
  onClose: u,
  className: i,
  position: o = "bottom-center"
}) => {
  const { main: m, contrast: l } = W("success"), { main: p, contrast: h } = W("danger"), { main: g, contrast: k } = W("warning"), { main: N, contrast: _ } = W("info"), B = {
    success: {
      bg: m,
      color: l,
      icon: /* @__PURE__ */ e(gt, { size: 20 })
    },
    error: { bg: p, color: h, icon: /* @__PURE__ */ e(yt, { size: 20 }) },
    warning: {
      bg: g,
      color: k,
      icon: /* @__PURE__ */ e(Mt, { size: 20 })
    },
    info: { bg: N, color: _, icon: /* @__PURE__ */ e(vt, { size: 20 }) }
  }, { bg: x, color: C, icon: Y } = B[a];
  J(() => {
    if (n && r) {
      const v = setTimeout(() => u?.(), r);
      return () => clearTimeout(v);
    }
  }, [n, r]);
  const s = Dt(o);
  return /* @__PURE__ */ e(ce, { children: n && /* @__PURE__ */ e("div", { className: `fixed z-9999 pointer-events-none w-[95vw] max-w-[360px] ${$t[o]}`, children: /* @__PURE__ */ I(
    P.div,
    {
      ...s,
      transition: { duration: 0.3 },
      className: `pointer-events-auto w-full rounded-lg! p-4! flex items-center shadow-lg ${i}`,
      style: { backgroundColor: x, color: C },
      children: [
        /* @__PURE__ */ I("div", { className: "flex items-center gap-2 flex-1", children: [
          Y,
          /* @__PURE__ */ e(Ke, { className: "text-[14px] font-medium", children: t })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => u?.(),
            style: {
              marginLeft: 12,
              padding: 6,
              borderRadius: "50%"
            },
            children: /* @__PURE__ */ e(Yt, { size: 18 })
          }
        )
      ]
    }
  ) }) });
}, bn = ({
  isOpen: t,
  onDismiss: a,
  title: r,
  subtitle: n,
  children: u,
  footer: i,
  showCloseButton: o = !0,
  className: m,
  headerClassName: l,
  contentClassName: p,
  footerClassName: h,
  ...g
}) => /* @__PURE__ */ I(
  Te,
  {
    isOpen: t,
    onDidDismiss: a,
    className: ne("rounded-lg overflow-hidden modal-height-full", m),
    ...g,
    children: [
      (r || n || o) && /* @__PURE__ */ e(et, { className: ne("ion-no-border", l), children: /* @__PURE__ */ e(tt, { children: /* @__PURE__ */ I("div", { className: "flex flex-col items-center text-center w-full", children: [
        /* @__PURE__ */ e("div", { className: "w-full flex justify-end", children: o && /* @__PURE__ */ e(nt, { slot: "end", children: /* @__PURE__ */ e(ke, { onClick: a, children: /* @__PURE__ */ e(je, { size: 20 }) }) }) }),
        /* @__PURE__ */ I("div", { className: "flex flex-col", children: [
          r && /* @__PURE__ */ e(rt, { className: "text-lg font-semibold", children: r }),
          n && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: n })
        ] })
      ] }) }) }),
      /* @__PURE__ */ e(
        ot,
        {
          style: {
            "--padding-start": "1rem",
            "--padding-end": "1rem",
            "--padding-top": "1rem",
            "--padding-bottom": "1rem"
          },
          className: ne("!p-4 text-gray-700 dark:text-gray-200", p),
          children: u
        }
      ),
      i && /* @__PURE__ */ e(Le, { className: ne("border-t border-gray-200 dark:border-gray-700 !p-4", h), children: i })
    ]
  }
);
function It() {
  const [t, a] = U("action-sheet");
  return J(() => {
    const r = window.matchMedia("(min-width:768px)"), n = () => {
      a(r.matches ? "popover" : "action-sheet");
    };
    return n(), r.addEventListener("change", n), () => r.removeEventListener("change", n);
  }, []), t;
}
function yn({
  label: t,
  value: a,
  items: r,
  getLabel: n,
  getValue: u,
  onValueChange: i,
  placeholder: o = "Selecione...",
  disabled: m,
  loading: l,
  error: p,
  helperText: h,
  color: g = "neutral",
  radius: k = "md",
  style: N,
  fill: _ = "outline",
  shape: B = "round",
  ...x
}) {
  const C = se(null), [Y, s] = U(!1), { main: v } = W(g), { main: L } = W("danger"), S = It(), O = a != null && a !== "", H = p ? L : Y || O ? v : "var(--cb-color-border)", T = {
    none: "0px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px"
  }, w = ve(
    () => ({
      ...N,
      "--border-color": H,
      "--highlight-color-focused": v,
      "--border-radius": T[k],
      "--icon-color": H,
      "--color": "var(--cb-color-dark)",
      "--placeholder-color": "var(--cb-color-border)"
    }),
    [N, H, v, k]
  );
  return /* @__PURE__ */ I("div", { className: "relative flex flex-col h-18 pt-2 mb-3!", children: [
    /* @__PURE__ */ e(
      at,
      {
        ref: C,
        value: a ?? void 0,
        label: t,
        labelPlacement: "stacked",
        placeholder: o,
        fill: _,
        shape: B,
        mode: "md",
        disabled: m || l,
        interface: S,
        interfaceOptions: {
          header: t
        },
        style: w,
        onIonFocus: () => s(!0),
        onIonBlur: () => s(!1),
        onIonChange: (A) => {
          const R = r.find((b) => u(b) === A.detail.value);
          R && i?.(R);
        },
        ...x,
        children: r.map((A) => /* @__PURE__ */ e(st, { value: u(A), children: n(A) }, String(u(A))))
      }
    ),
    (p || h) && /* @__PURE__ */ e(
      le,
      {
        role: "alert",
        className: `pl-6! text-[12px] ${p ? "text-(--cb-color-danger)" : "text-(--cb-color-secondary)"}`,
        children: p ?? h
      }
    )
  ] });
}
const Mn = ({
  isOpen: t = !1,
  message: a = "Carregando...",
  color: r = "primary",
  type: n = "circular",
  withBg: u = !0,
  withText: i = !0
}) => {
  const { main: o, contrast: m } = W(r);
  return t ? n === "linear" ? /* @__PURE__ */ e(ce, { children: /* @__PURE__ */ I(
    P.div,
    {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: 4,
        backgroundColor: "rgba(0,0,0,0.1)",
        zIndex: 99999,
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ e(
          P.div,
          {
            style: {
              height: "100%",
              width: "50%",
              backgroundColor: o,
              opacity: 1,
              position: "absolute",
              borderRadius: 2
            },
            animate: { x: ["-100%", "200%"] },
            transition: { repeat: 1 / 0, duration: 1.5, ease: "easeInOut" }
          }
        ),
        /* @__PURE__ */ e(
          P.div,
          {
            style: {
              height: "100%",
              width: "50%",
              backgroundColor: o,
              opacity: 0.4,
              position: "absolute",
              borderRadius: 2
            },
            animate: { x: ["-100%", "200%"] },
            transition: { repeat: 1 / 0, duration: 1.5, ease: "easeInOut", delay: 0.1 }
          }
        )
      ]
    }
  ) }) : /* @__PURE__ */ e(ce, { children: /* @__PURE__ */ e(
    P.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999
      },
      children: /* @__PURE__ */ I(
        "div",
        {
          style: {
            backgroundColor: u ? o : "transparent",
            color: m,
            padding: "1.5rem 2rem",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            minWidth: "180px"
          },
          children: [
            n === "circular" ? /* @__PURE__ */ e(ie, { name: "crescent", color: "light" }) : /* @__PURE__ */ e("div", { style: { display: "flex", gap: "0.5rem" }, children: [...Array(3)].map((l, p) => /* @__PURE__ */ e(
              P.div,
              {
                style: {
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: m
                },
                animate: { y: ["0%", "-50%", "0%"] },
                transition: {
                  repeat: 1 / 0,
                  duration: 0.6,
                  delay: p * 0.2
                }
              },
              p
            )) }),
            i && /* @__PURE__ */ e("span", { style: { fontSize: "14px", fontWeight: 500, textAlign: "center" }, children: a })
          ]
        }
      )
    }
  ) }) : null;
}, Cn = ({
  content: t,
  children: a,
  color: r = "light",
  placement: n = "top",
  trigger: u = "hover",
  stopPropagation: i = !1,
  tooltipStyle: o = {}
}) => {
  const [m, l] = U(!1), { main: p, contrast: h } = W(r), g = {
    top: { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8 },
    bottom: { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8 },
    left: { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: 8 },
    right: { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: 8 }
  };
  return /* @__PURE__ */ I(
    "div",
    {
      className: "relative inline-block",
      onMouseEnter: () => u === "hover" && l(!0),
      onMouseLeave: () => u === "hover" && l(!1),
      onClick: (B) => {
        u === "click" && (i && B.stopPropagation(), l(!m));
      },
      children: [
        a,
        /* @__PURE__ */ e(ce, { children: m && /* @__PURE__ */ e(
          P.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { duration: 0.2 },
            style: {
              ...g[n],
              position: "absolute",
              backgroundColor: p,
              color: h,
              padding: "0.4rem 0.8rem",
              borderRadius: "8px",
              whiteSpace: "normal",
              // agora quebra linha
              fontSize: "0.875rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              zIndex: 9999,
              ...o
              // aplica estilos customizados
            },
            children: t
          }
        ) })
      ]
    }
  );
}, Nt = {
  auto: "md:col-auto",
  1: "sm:col-span-1",
  2: "sm:col-span-2",
  3: "sm:col-span-3",
  4: "sm:col-span-4",
  5: "sm:col-span-5",
  6: "sm:col-span-6",
  7: "sm:col-span-7",
  8: "sm:col-span-8",
  9: "sm:col-span-9",
  10: "sm:col-span-10",
  11: "sm:col-span-11",
  12: "sm:col-span-12"
}, St = {
  auto: "md:col-auto",
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
  9: "md:col-span-9",
  10: "md:col-span-10",
  11: "md:col-span-11",
  12: "md:col-span-12"
}, zt = {
  auto: "md:col-auto",
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  9: "lg:col-span-9",
  10: "lg:col-span-10",
  11: "lg:col-span-11",
  12: "lg:col-span-12"
}, _t = {
  auto: "md:col-auto",
  1: "xl:col-span-1",
  2: "xl:col-span-2",
  3: "xl:col-span-3",
  4: "xl:col-span-4",
  5: "xl:col-span-5",
  6: "xl:col-span-6",
  7: "xl:col-span-7",
  8: "xl:col-span-8",
  9: "xl:col-span-9",
  10: "xl:col-span-10",
  11: "xl:col-span-11",
  12: "xl:col-span-12"
}, Bt = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6"
}, Lt = {
  0: "gap-x-0",
  1: "gap-x-1",
  2: "gap-x-2",
  3: "gap-x-3",
  4: "gap-x-4",
  5: "gap-x-5",
  6: "gap-x-6"
}, Tt = {
  0: "gap-y-0",
  1: "gap-y-1",
  2: "gap-y-2",
  3: "gap-y-3",
  4: "gap-y-4",
  5: "gap-y-5",
  6: "gap-y-6"
};
function wn({ children: t, gap: a = 4, gapX: r, gapY: n, className: u }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: ne(
        "grid grid-cols-1 md:grid-cols-12",
        r ? Lt[r] : Bt[a],
        n ? Tt[n] : void 0,
        u
      ),
      children: t
    }
  );
}
const kn = ({
  label: t,
  value: a,
  placeholder: r = "",
  rows: n = 4,
  error: u,
  disabled: i = !1,
  color: o = "neutral",
  onChangeValue: m,
  fill: l = "outline",
  maxLength: p,
  radius: h = "md",
  ...g
}) => {
  const { main: k } = W(o), { main: N } = W("danger"), [_, B] = U(!1), [x, C] = U(!1);
  J(() => {
    C(!!a);
  }, [a]);
  const Y = u ? N : _ || x ? k : "var(--cb-color-border)", s = {
    none: "0px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px"
  }, v = p ? p - a.length : void 0, L = v !== void 0 && v < 0;
  return /* @__PURE__ */ I("div", { className: "relative flex flex-col", style: { minHeight: 72 }, children: [
    t && /* @__PURE__ */ e("label", { className: "text-xs font-medium pl-6", children: t }),
    /* @__PURE__ */ e(
      it,
      {
        ...g,
        value: a,
        placeholder: r,
        rows: n,
        fill: l,
        disabled: i,
        labelPlacement: "stacked",
        maxlength: p,
        style: {
          "--border-color": Y,
          "--highlight-color-focused": k,
          "--border-radius": s[h],
          color: "var(--cb-color-dark)"
        },
        className: ne(
          "text-sm resize-none focus:outline-none",
          i && "opacity-60 cursor-not-allowed"
        ),
        onIonFocus: () => B(!0),
        onIonBlur: () => B(!1),
        onIonInput: (S) => m(S.detail.value ?? "")
      }
    ),
    /* @__PURE__ */ I("div", { className: "flex justify-between mt-1", children: [
      /* @__PURE__ */ e(le, { className: "text-[12px] pl-6 text-(--cb-color-danger)", children: u }),
      p && /* @__PURE__ */ I(
        le,
        {
          className: ne(
            "text-[12px] pr-6",
            L ? "text-(--cb-color-danger)" : "text-gray-500"
          ),
          children: [
            v,
            " caractere",
            v === 1 ? "" : "s",
            " restantes"
          ]
        }
      )
    ] })
  ] });
}, Yn = ({
  label: t,
  checked: a,
  disabled: r = !1,
  type: n = "checkbox",
  onChange: u,
  color: i = "primary",
  labelPlacement: o = "start",
  styleDiv: m
}) => {
  const { main: l, contrast: p } = W(i);
  if (n === "switch")
    return /* @__PURE__ */ e("div", { className: `w-auto ${m}`, children: /* @__PURE__ */ e(
      Oe,
      {
        checked: a,
        disabled: r,
        color: i,
        labelPlacement: o,
        onIonChange: (h) => u(h.detail.checked),
        style: {
          "--background-checked": l,
          // fundo quando ativo
          "--handle-background-checked": p
          // cor do "pino" quando ativo
        },
        children: t
      }
    ) });
  if (n === "radio")
    return /* @__PURE__ */ e("div", { className: `w-auto ${m}`, children: /* @__PURE__ */ e(
      He,
      {
        value: a ? "selected" : "unselected",
        onIonChange: (h) => u(h.detail.value === "selected"),
        className: "flex items-center gap-2",
        children: /* @__PURE__ */ e(
          Ae,
          {
            value: "selected",
            color: i,
            disabled: r,
            labelPlacement: o,
            className: "flex-1",
            style: {
              "--background-checked": l,
              "--border-color": l,
              "--border-color-checked": l,
              "--mark-color": p
              // cor do ponto central
            },
            children: t && /* @__PURE__ */ e("span", { children: t })
          }
        )
      }
    ) });
  if (n === "checkbox")
    return /* @__PURE__ */ e("div", { className: `w-auto ${m}`, children: /* @__PURE__ */ e(
      lt,
      {
        checked: a,
        disabled: r,
        color: i,
        labelPlacement: o,
        onIonChange: (h) => u(h.detail.checked),
        style: {
          "--border-color": l,
          // borda normal
          "--background-checked": l,
          // fundo quando marcado
          "--border-color-checked": l,
          // borda quando marcado
          "--checkmark-color": p
          // cor do check
        },
        children: t && /* @__PURE__ */ e("span", { className: "ml-2", children: t })
      }
    ) });
}, $n = ({
  tooltip: t,
  icon: a = Fe,
  onClick: r,
  recording: n,
  loading: u = !1,
  showCancel: i = !1,
  onCancel: o,
  cancelIcon: m = je,
  disabled: l = !1,
  className: p,
  color: h = "primary"
}) => {
  const [g, k] = U(!0), [N, _] = U(!0), { main: B, contrast: x } = W(h);
  return J(() => {
    const C = setTimeout(() => {
      k(!1), setTimeout(() => {
        _(!1);
      }, 800);
    }, 3e3);
    return () => clearTimeout(C);
  }, []), /* @__PURE__ */ e("div", { style: { position: "relative" }, children: /* @__PURE__ */ e(ce, { mode: "wait", children: /* @__PURE__ */ I(
    P.div,
    {
      className: `fixed bottom-24 right-2 z-1000 flex-center ${p} `,
      animate: g ? { width: 250, height: 55 } : { width: 55, height: 55 },
      transition: { duration: 0.8, ease: "easeInOut" },
      children: [
        /* @__PURE__ */ I(Re, { vertical: "bottom", horizontal: "end", slot: "fixed", children: [
          /* @__PURE__ */ e(
            Ye,
            {
              onClick: r,
              disabled: l || u,
              style: {
                "--box-shadow": !g && "none",
                "--background": B,
                "--color": x
              },
              children: u ? /* @__PURE__ */ e(
                ie,
                {
                  name: "crescent",
                  className: "text-(--cb-color-text-fixed)"
                }
              ) : we.createElement(a, { className: "text-[26px]" })
            }
          ),
          i && o && /* @__PURE__ */ e(
            P.div,
            {
              className: "absolute bottom-17.5 right-3 pointer-events-none",
              animate: n ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: 10, pointerEvents: "none" },
              transition: { duration: 0.3 },
              children: /* @__PURE__ */ e(
                Ye,
                {
                  color: "danger",
                  className: "w-8.75 h-8.75",
                  onClick: o,
                  children: we.createElement(m, {
                    className: "text-[22px]"
                  })
                }
              )
            }
          )
        ] }),
        t && N && /* @__PURE__ */ e(
          P.div,
          {
            className: "absolute right-2.5 bottom-2 pr-13 h-14.5 overflow-hidden rounded-full flex items-center justify-center",
            style: { backgroundColor: B, color: x },
            initial: { width: 0, opacity: 0, filter: "blur(4px)" },
            animate: g ? { width: "auto", opacity: 1, filter: "blur(0px)" } : { width: 0, opacity: 0, filter: "blur(4px)" },
            transition: { duration: 0.5, ease: "easeOut" },
            children: /* @__PURE__ */ e(
              P.div,
              {
                className: "pl-4 pr-4 whitespace-nowrap",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.1, duration: 0.3, ease: "easeOut" },
                children: t
              }
            )
          }
        )
      ]
    }
  ) }) });
}, Ot = ({
  label: t,
  value: a,
  disabled: r = !1,
  color: n = "primary",
  labelPlacement: u = "end",
  onClick: i,
  className: o,
  style: m
}) => {
  const { main: l, contrast: p } = W(n);
  return /* @__PURE__ */ I(
    "div",
    {
      onClick: () => {
        r || i?.();
      },
      className: `
        flex
        items-center
        gap-2
        w-fit
        cursor-pointer
        select-none
        ${r ? "cursor-not-allowed opacity-50" : ""}
        ${o ?? ""}
      `,
      style: m,
      children: [
        u === "start" && /* @__PURE__ */ e("span", { children: t }),
        /* @__PURE__ */ e(
          Ae,
          {
            value: a,
            disabled: r,
            color: n,
            style: {
              "--color": l,
              "--color-checked": l,
              "--mark-color": p
            }
          }
        ),
        u === "end" && /* @__PURE__ */ e("span", { children: t })
      ]
    }
  );
}, Ee = qe(
  null
);
function Pe() {
  const t = Ze(Ee);
  if (!t)
    throw new Error("useCBStepper must be used inside a CBStepperProvider.");
  return t;
}
const Ht = ({
  steps: t,
  color: a = "primary",
  className: r,
  classNameContent: n,
  style: u,
  showButtonNext: i = !0,
  showButtonPrev: o = !0,
  nextLabel: m = "Próximo",
  prevLabel: l = "Voltar",
  disableNext: p,
  disablePrev: h,
  theme: g
}) => {
  const { activeIndex: k, next: N, prev: _, canNext: B, canPrev: x } = Pe(), { main: C, contrast: Y } = W(a), s = g?.stepper, v = s?.circle?.background ?? C, L = s?.circle?.text ?? Y, S = s?.line ?? C;
  return /* @__PURE__ */ I("div", { className: `flex flex-col gap-4 ${r ?? ""}`, style: u, children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-between w-full relative", children: t.map((O, H) => {
      const T = H === k, w = H < k;
      return /* @__PURE__ */ I(
        "div",
        {
          className: "flex-1 relative flex flex-col items-center",
          children: [
            /* @__PURE__ */ I("div", { className: "relative flex items-center justify-center w-full", children: [
              H < t.length - 1 && /* @__PURE__ */ I(
                "div",
                {
                  className: "absolute top-1/2 left-1/2 -translate-y-1/2",
                  style: {
                    width: "100%",
                    height: 2,
                    zIndex: 0
                  },
                  children: [
                    /* @__PURE__ */ e(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          inset: 0,
                          background: "#d1d5db"
                        }
                      }
                    ),
                    /* @__PURE__ */ e(
                      P.div,
                      {
                        style: {
                          position: "absolute",
                          inset: 0,
                          background: S,
                          transformOrigin: "left"
                        },
                        initial: !1,
                        animate: {
                          scaleX: w ? 1 : 0
                        },
                        transition: {
                          duration: 0.45,
                          ease: "easeInOut"
                        }
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ e(
                P.div,
                {
                  className: "w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 cursor-pointer shrink-0",
                  initial: !1,
                  animate: {
                    backgroundColor: T || w ? v : "#ffffff",
                    borderColor: T || w ? v : "#d1d5db",
                    color: T || w ? L : "#6b7280",
                    scale: T ? [1, 1.08, 1] : 1
                  },
                  transition: {
                    backgroundColor: {
                      duration: 0.2,
                      delay: T || w ? 0.4 : 0
                    },
                    borderColor: {
                      duration: 0.2,
                      delay: T || w ? 0.4 : 0
                    },
                    color: {
                      duration: 0.2,
                      delay: T || w ? 0.4 : 0
                    },
                    scale: {
                      duration: 0.25,
                      delay: T || w ? 0.4 : 0,
                      ease: "easeOut"
                    }
                  },
                  whileHover: { scale: 1.1 },
                  whileTap: { scale: 0.95 },
                  children: O.icon ?? H + 1
                }
              )
            ] }),
            /* @__PURE__ */ e(
              "span",
              {
                className: "text-sm text-center mt-2",
                style: { color: s?.titleColor },
                children: O.title
              }
            )
          ]
        },
        H
      );
    }) }),
    /* @__PURE__ */ e("div", { className: n, children: t.map((O, H) => /* @__PURE__ */ e(
      "div",
      {
        style: { display: H === k ? "block" : "none" },
        children: O.content
      },
      H
    )) }),
    /* @__PURE__ */ I("div", { className: "flex justify-between w-full mt-2", children: [
      o && /* @__PURE__ */ e(
        xe,
        {
          disabled: h ? h(k) : !x,
          onClick: _,
          iconStart: /* @__PURE__ */ e(Ct, {}),
          children: typeof l == "function" ? l(k, t.length) : l,
          color: a,
          variant: s?.button?.prev?.variant ?? "solid",
          backgroundColor: s?.button?.prev?.background,
          textColor: s?.button?.prev?.text,
          borderColor: s?.button?.prev?.border,
          hoverColor: s?.button?.prev?.hover,
          rounded: s?.button?.prev?.rounded,
          activeColor: s?.button?.prev?.active
        }
      ),
      i && /* @__PURE__ */ e(
        xe,
        {
          disabled: p ? p(k) : !B,
          onClick: N,
          iconEnd: /* @__PURE__ */ e(wt, {}),
          children: typeof m == "function" ? m(k, t.length) : m,
          color: a,
          variant: s?.button?.next?.variant ?? "solid",
          backgroundColor: s?.button?.next?.background,
          textColor: s?.button?.next?.text,
          borderColor: s?.button?.next?.border,
          hoverColor: s?.button?.next?.hover,
          rounded: s?.button?.next?.rounded,
          activeColor: s?.button?.next?.active
        }
      )
    ] })
  ] });
}, At = ({
  steps: t,
  color: a = "primary",
  className: r,
  classNameContent: n,
  style: u,
  showButtonNext: i = !0,
  showButtonPrev: o = !0,
  nextLabel: m = "Próximo",
  prevLabel: l = "Voltar",
  disableNext: p,
  disablePrev: h,
  theme: g
}) => {
  const { activeIndex: k, next: N, prev: _, canNext: B, canPrev: x } = Pe(), { main: C, contrast: Y } = W(a), s = g?.stepper, v = s?.circle?.background ?? C, L = s?.circle?.text ?? Y, S = s?.line ?? C, O = s?.titleColor ?? "#111827";
  return /* @__PURE__ */ e("div", { className: `flex flex-col gap-4 ${r ?? ""}`, style: u, children: t.map((H, T) => {
    const w = T === k, y = T < k;
    return /* @__PURE__ */ I("div", { className: "relative flex items-start gap-4", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-col items-center relative", children: /* @__PURE__ */ e(
        P.div,
        {
          className: "w-10 h-10 rounded-full border-2 flex items-center justify-center cursor-pointer z-10",
          style: {
            backgroundColor: w || y ? v : "#ffffff",
            color: w || y ? L : "#6b7280",
            borderColor: w || y ? v : "#d1d5db"
          },
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.95 },
          children: H.icon ?? T + 1
        }
      ) }),
      T !== t.length - 1 && /* @__PURE__ */ e(
        P.div,
        {
          style: {
            width: 2,
            backgroundColor: w || y ? S : "#d1d5db",
            position: "absolute",
            height: "100%",
            left: 18,
            top: 16
          }
        }
      ),
      /* @__PURE__ */ I("div", { className: "flex-1", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "font-semibold text-base",
            style: { color: O },
            children: H.title
          }
        ),
        /* @__PURE__ */ I(
          P.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: {
              height: w ? "auto" : 0,
              opacity: w ? 1 : 0
            },
            transition: { duration: 0.4, ease: "easeInOut" },
            className: "overflow-hidden mt-1",
            children: [
              /* @__PURE__ */ e("div", { className: `mb-2 ${n}`, children: H.content }),
              /* @__PURE__ */ I("div", { className: "flex w-full mt-2 pb-2", children: [
                i && /* @__PURE__ */ e(
                  xe,
                  {
                    disabled: p ? p(k) : !B,
                    onClick: N,
                    children: typeof m == "function" ? m(k, t.length) : m,
                    color: a,
                    className: "text-[12px]! mr-2",
                    variant: s?.button?.next?.variant ?? "solid",
                    backgroundColor: s?.button?.next?.background,
                    textColor: s?.button?.next?.text,
                    borderColor: s?.button?.next?.border,
                    hoverColor: s?.button?.next?.hover,
                    rounded: s?.button?.next?.rounded,
                    activeColor: s?.button?.next?.active
                  }
                ),
                o && /* @__PURE__ */ e(
                  xe,
                  {
                    disabled: h ? h(k) : !x,
                    onClick: _,
                    children: typeof l == "function" ? l(k, t.length) : l,
                    color: a,
                    variant: s?.button?.prev?.variant ?? "clear",
                    className: "text-[12px]!",
                    backgroundColor: s?.button?.prev?.background,
                    textColor: s?.button?.prev?.text,
                    borderColor: s?.button?.prev?.border,
                    hoverColor: s?.button?.prev?.hover,
                    rounded: s?.button?.prev?.rounded,
                    activeColor: s?.button?.prev?.active
                  }
                )
              ] })
            ]
          }
        )
      ] })
    ] }, T);
  }) });
}, Rt = ({
  children: t,
  initialStep: a = 0,
  totalSteps: r,
  onNext: n,
  onPrev: u
}) => {
  const [i, o] = U(a);
  J(() => {
    o(a);
  }, [a]);
  const m = K(async () => i >= r - 1 || n && await n(i) === !1 ? !1 : (o((g) => g + 1), !0), [i, r, n]), l = K(async () => i <= 0 || u && await u(i) === !1 ? !1 : (o((g) => g - 1), !0), [i, u]), p = K(() => {
    o(a);
  }, [a]), h = ve(
    () => ({
      activeIndex: i,
      totalSteps: r,
      next: m,
      prev: l,
      reset: p,
      canNext: i < r - 1,
      canPrev: i > 0,
      isFirst: i === 0,
      isLast: i === r - 1
    }),
    [i, r, m, l, p]
  );
  return /* @__PURE__ */ e(Ee.Provider, { value: h, children: t });
}, Dn = ({
  steps: t,
  variant: a = "tabs",
  initialStep: r = 0,
  orientation: n = "horizontal",
  color: u = "primary",
  className: i,
  style: o,
  classNameContent: m,
  showButtonPrev: l = !0,
  showButtonNext: p = !0,
  nextLabel: h,
  prevLabel: g,
  disableNext: k,
  disablePrev: N,
  onNext: _,
  onPrev: B,
  onTabChange: x,
  theme: C
}) => {
  const [Y, s] = U(r);
  if (a === "tabs") {
    const v = C?.tabs;
    return /* @__PURE__ */ I("div", { style: o, children: [
      /* @__PURE__ */ e(
        ct,
        {
          scrollable: v?.segment?.scrollable,
          value: Y.toString(),
          onIonChange: (L) => {
            const S = L.detail.value;
            if (S != null) {
              const O = parseInt(S.toString(), 10);
              s(O), x?.(O);
            }
          },
          style: {
            background: v?.segment?.background,
            borderRadius: v?.segment?.borderRadius,
            padding: v?.segment?.padding,
            border: v?.segment?.border
          },
          className: `w-full ${i} ${v?.segment?.hideIndicator ? "cb-tabs-no-indicator" : ""}`,
          children: t.map((L, S) => {
            const O = S === Y;
            return /* @__PURE__ */ e(
              dt,
              {
                value: S.toString(),
                style: {
                  background: O ? v?.button?.activeBackground : v?.button?.background,
                  color: O ? v?.button?.activeText : v?.button?.text,
                  border: v?.button?.border,
                  borderRadius: v?.button?.rounded !== !1 ? "9999px" : void 0
                },
                children: /* @__PURE__ */ e(De, { children: L.title })
              },
              S
            );
          })
        }
      ),
      /* @__PURE__ */ e("div", { className: m ?? "p-4", children: t[Y].content })
    ] });
  }
  if (a === "accordion") {
    const v = C?.accordion;
    return /* @__PURE__ */ e(
      ut,
      {
        value: Y.toString(),
        onIonChange: (L) => {
          s(parseInt(L.detail.value ?? "-1", 10));
        },
        className: `${i ?? ""} ${v?.indicator?.hide ? "cb-acc-no-indicator" : ""}`,
        style: o,
        children: t.map((L, S) => /* @__PURE__ */ I(
          ht,
          {
            value: S.toString(),
            children: [
              /* @__PURE__ */ e(
                mt,
                {
                  slot: "header",
                  style: {
                    background: v?.header?.background,
                    color: v?.header?.color,
                    border: v?.header?.border,
                    borderRadius: v?.header?.borderRadius,
                    padding: v?.header?.padding,
                    "--ripple-color": "transparent"
                  },
                  children: /* @__PURE__ */ e(De, { children: L.title })
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  slot: "content",
                  style: {
                    background: v?.content?.background,
                    color: v?.content?.color,
                    padding: v?.content?.padding ?? "16px"
                  },
                  children: L.content
                }
              )
            ]
          },
          S
        ))
      }
    );
  }
  if (a === "stepper") {
    const v = {
      steps: t,
      initialStep: r,
      color: u,
      className: i,
      style: o,
      classNameContent: m,
      showButtonPrev: l,
      showButtonNext: p,
      nextLabel: h,
      prevLabel: g,
      disableNext: k,
      disablePrev: N,
      onNext: _,
      onPrev: B,
      theme: C
    };
    return /* @__PURE__ */ e(
      Rt,
      {
        initialStep: r,
        totalSteps: t.length,
        onNext: _,
        onPrev: B,
        children: n === "horizontal" ? /* @__PURE__ */ e(Ht, { ...v }) : /* @__PURE__ */ e(At, { ...v })
      }
    );
  }
  return null;
};
var me = { exports: {} }, jt = me.exports, Ne;
function We() {
  return Ne || (Ne = 1, (function(t, a) {
    (function(r, n) {
      t.exports = n();
    })(jt, (function() {
      var r = 1e3, n = 6e4, u = 36e5, i = "millisecond", o = "second", m = "minute", l = "hour", p = "day", h = "week", g = "month", k = "quarter", N = "year", _ = "date", B = "Invalid Date", x = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, Y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(b) {
        var c = ["th", "st", "nd", "rd"], d = b % 100;
        return "[" + b + (c[(d - 20) % 10] || c[d] || c[0]) + "]";
      } }, s = function(b, c, d) {
        var M = String(b);
        return !M || M.length >= c ? b : "" + Array(c + 1 - M.length).join(d) + b;
      }, v = { s, z: function(b) {
        var c = -b.utcOffset(), d = Math.abs(c), M = Math.floor(d / 60), f = d % 60;
        return (c <= 0 ? "+" : "-") + s(M, 2, "0") + ":" + s(f, 2, "0");
      }, m: function b(c, d) {
        if (c.date() < d.date()) return -b(d, c);
        var M = 12 * (d.year() - c.year()) + (d.month() - c.month()), f = c.clone().add(M, g), $ = d - f < 0, D = c.clone().add(M + ($ ? -1 : 1), g);
        return +(-(M + (d - f) / ($ ? f - D : D - f)) || 0);
      }, a: function(b) {
        return b < 0 ? Math.ceil(b) || 0 : Math.floor(b);
      }, p: function(b) {
        return { M: g, y: N, w: h, d: p, D: _, h: l, m, s: o, ms: i, Q: k }[b] || String(b || "").toLowerCase().replace(/s$/, "");
      }, u: function(b) {
        return b === void 0;
      } }, L = "en", S = {};
      S[L] = Y;
      var O = "$isDayjsObject", H = function(b) {
        return b instanceof A || !(!b || !b[O]);
      }, T = function b(c, d, M) {
        var f;
        if (!c) return L;
        if (typeof c == "string") {
          var $ = c.toLowerCase();
          S[$] && (f = $), d && (S[$] = d, f = $);
          var D = c.split("-");
          if (!f && D.length > 1) return b(D[0]);
        } else {
          var z = c.name;
          S[z] = c, f = z;
        }
        return !M && f && (L = f), f || !M && L;
      }, w = function(b, c) {
        if (H(b)) return b.clone();
        var d = typeof c == "object" ? c : {};
        return d.date = b, d.args = arguments, new A(d);
      }, y = v;
      y.l = T, y.i = H, y.w = function(b, c) {
        return w(b, { locale: c.$L, utc: c.$u, x: c.$x, $offset: c.$offset });
      };
      var A = (function() {
        function b(d) {
          this.$L = T(d.locale, null, !0), this.parse(d), this.$x = this.$x || d.x || {}, this[O] = !0;
        }
        var c = b.prototype;
        return c.parse = function(d) {
          this.$d = (function(M) {
            var f = M.date, $ = M.utc;
            if (f === null) return /* @__PURE__ */ new Date(NaN);
            if (y.u(f)) return /* @__PURE__ */ new Date();
            if (f instanceof Date) return new Date(f);
            if (typeof f == "string" && !/Z$/i.test(f)) {
              var D = f.match(x);
              if (D) {
                var z = D[2] - 1 || 0, j = (D[7] || "0").substring(0, 3);
                return $ ? new Date(Date.UTC(D[1], z, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, j)) : new Date(D[1], z, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, j);
              }
            }
            return new Date(f);
          })(d), this.init();
        }, c.init = function() {
          var d = this.$d;
          this.$y = d.getFullYear(), this.$M = d.getMonth(), this.$D = d.getDate(), this.$W = d.getDay(), this.$H = d.getHours(), this.$m = d.getMinutes(), this.$s = d.getSeconds(), this.$ms = d.getMilliseconds();
        }, c.$utils = function() {
          return y;
        }, c.isValid = function() {
          return this.$d.toString() !== B;
        }, c.isSame = function(d, M) {
          var f = w(d);
          return this.startOf(M) <= f && f <= this.endOf(M);
        }, c.isAfter = function(d, M) {
          return w(d) < this.startOf(M);
        }, c.isBefore = function(d, M) {
          return this.endOf(M) < w(d);
        }, c.$g = function(d, M, f) {
          return y.u(d) ? this[M] : this.set(f, d);
        }, c.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, c.valueOf = function() {
          return this.$d.getTime();
        }, c.startOf = function(d, M) {
          var f = this, $ = !!y.u(M) || M, D = y.p(d), z = function(Z, q) {
            var Q = y.w(f.$u ? Date.UTC(f.$y, q, Z) : new Date(f.$y, q, Z), f);
            return $ ? Q : Q.endOf(p);
          }, j = function(Z, q) {
            return y.w(f.toDate()[Z].apply(f.toDate("s"), ($ ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)), f);
          }, F = this.$W, V = this.$M, G = this.$D, oe = "set" + (this.$u ? "UTC" : "");
          switch (D) {
            case N:
              return $ ? z(1, 0) : z(31, 11);
            case g:
              return $ ? z(1, V) : z(0, V + 1);
            case h:
              var te = this.$locale().weekStart || 0, E = (F < te ? F + 7 : F) - te;
              return z($ ? G - E : G + (6 - E), V);
            case p:
            case _:
              return j(oe + "Hours", 0);
            case l:
              return j(oe + "Minutes", 1);
            case m:
              return j(oe + "Seconds", 2);
            case o:
              return j(oe + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, c.endOf = function(d) {
          return this.startOf(d, !1);
        }, c.$set = function(d, M) {
          var f, $ = y.p(d), D = "set" + (this.$u ? "UTC" : ""), z = (f = {}, f[p] = D + "Date", f[_] = D + "Date", f[g] = D + "Month", f[N] = D + "FullYear", f[l] = D + "Hours", f[m] = D + "Minutes", f[o] = D + "Seconds", f[i] = D + "Milliseconds", f)[$], j = $ === p ? this.$D + (M - this.$W) : M;
          if ($ === g || $ === N) {
            var F = this.clone().set(_, 1);
            F.$d[z](j), F.init(), this.$d = F.set(_, Math.min(this.$D, F.daysInMonth())).$d;
          } else z && this.$d[z](j);
          return this.init(), this;
        }, c.set = function(d, M) {
          return this.clone().$set(d, M);
        }, c.get = function(d) {
          return this[y.p(d)]();
        }, c.add = function(d, M) {
          var f, $ = this;
          d = Number(d);
          var D = y.p(M), z = function(V) {
            var G = w($);
            return y.w(G.date(G.date() + Math.round(V * d)), $);
          };
          if (D === g) return this.set(g, this.$M + d);
          if (D === N) return this.set(N, this.$y + d);
          if (D === p) return z(1);
          if (D === h) return z(7);
          var j = (f = {}, f[m] = n, f[l] = u, f[o] = r, f)[D] || 1, F = this.$d.getTime() + d * j;
          return y.w(F, this);
        }, c.subtract = function(d, M) {
          return this.add(-1 * d, M);
        }, c.format = function(d) {
          var M = this, f = this.$locale();
          if (!this.isValid()) return f.invalidDate || B;
          var $ = d || "YYYY-MM-DDTHH:mm:ssZ", D = y.z(this), z = this.$H, j = this.$m, F = this.$M, V = f.weekdays, G = f.months, oe = f.meridiem, te = function(q, Q, ee, ae) {
            return q && (q[Q] || q(M, $)) || ee[Q].slice(0, ae);
          }, E = function(q) {
            return y.s(z % 12 || 12, q, "0");
          }, Z = oe || function(q, Q, ee) {
            var ae = q < 12 ? "AM" : "PM";
            return ee ? ae.toLowerCase() : ae;
          };
          return $.replace(C, (function(q, Q) {
            return Q || (function(ee) {
              switch (ee) {
                case "YY":
                  return String(M.$y).slice(-2);
                case "YYYY":
                  return y.s(M.$y, 4, "0");
                case "M":
                  return F + 1;
                case "MM":
                  return y.s(F + 1, 2, "0");
                case "MMM":
                  return te(f.monthsShort, F, G, 3);
                case "MMMM":
                  return te(G, F);
                case "D":
                  return M.$D;
                case "DD":
                  return y.s(M.$D, 2, "0");
                case "d":
                  return String(M.$W);
                case "dd":
                  return te(f.weekdaysMin, M.$W, V, 2);
                case "ddd":
                  return te(f.weekdaysShort, M.$W, V, 3);
                case "dddd":
                  return V[M.$W];
                case "H":
                  return String(z);
                case "HH":
                  return y.s(z, 2, "0");
                case "h":
                  return E(1);
                case "hh":
                  return E(2);
                case "a":
                  return Z(z, j, !0);
                case "A":
                  return Z(z, j, !1);
                case "m":
                  return String(j);
                case "mm":
                  return y.s(j, 2, "0");
                case "s":
                  return String(M.$s);
                case "ss":
                  return y.s(M.$s, 2, "0");
                case "SSS":
                  return y.s(M.$ms, 3, "0");
                case "Z":
                  return D;
              }
              return null;
            })(q) || D.replace(":", "");
          }));
        }, c.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, c.diff = function(d, M, f) {
          var $, D = this, z = y.p(M), j = w(d), F = (j.utcOffset() - this.utcOffset()) * n, V = this - j, G = function() {
            return y.m(D, j);
          };
          switch (z) {
            case N:
              $ = G() / 12;
              break;
            case g:
              $ = G();
              break;
            case k:
              $ = G() / 3;
              break;
            case h:
              $ = (V - F) / 6048e5;
              break;
            case p:
              $ = (V - F) / 864e5;
              break;
            case l:
              $ = V / u;
              break;
            case m:
              $ = V / n;
              break;
            case o:
              $ = V / r;
              break;
            default:
              $ = V;
          }
          return f ? $ : y.a($);
        }, c.daysInMonth = function() {
          return this.endOf(g).$D;
        }, c.$locale = function() {
          return S[this.$L];
        }, c.locale = function(d, M) {
          if (!d) return this.$L;
          var f = this.clone(), $ = T(d, M, !0);
          return $ && (f.$L = $), f;
        }, c.clone = function() {
          return y.w(this.$d, this);
        }, c.toDate = function() {
          return new Date(this.valueOf());
        }, c.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, c.toISOString = function() {
          return this.$d.toISOString();
        }, c.toString = function() {
          return this.$d.toUTCString();
        }, b;
      })(), R = A.prototype;
      return w.prototype = R, [["$ms", i], ["$s", o], ["$m", m], ["$H", l], ["$W", p], ["$M", g], ["$y", N], ["$D", _]].forEach((function(b) {
        R[b[1]] = function(c) {
          return this.$g(c, b[0], b[1]);
        };
      })), w.extend = function(b, c) {
        return b.$i || (b(c, A, w), b.$i = !0), w;
      }, w.locale = T, w.isDayjs = H, w.unix = function(b) {
        return w(1e3 * b);
      }, w.en = S[L], w.Ls = S, w.p = {}, w;
    }));
  })(me)), me.exports;
}
var Ft = We();
const X = /* @__PURE__ */ $e(Ft);
var fe = { exports: {} }, Et = fe.exports, Se;
function Pt() {
  return Se || (Se = 1, (function(t, a) {
    (function(r, n) {
      t.exports = n(We());
    })(Et, (function(r) {
      function n(o) {
        return o && typeof o == "object" && "default" in o ? o : { default: o };
      }
      var u = n(r), i = { name: "pt-br", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(o) {
        return o + "º";
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
      return u.default.locale(i, null, !0), i;
    }));
  })(fe)), fe.exports;
}
Pt();
function Wt(t) {
  return re({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "rect", attr: { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" } }, { tag: "line", attr: { x1: "16", x2: "16", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "8", x2: "8", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "3", x2: "21", y1: "10", y2: "10" } }] })(t);
}
var pe = { exports: {} }, Vt = pe.exports, ze;
function qt() {
  return ze || (ze = 1, (function(t, a) {
    (function(r, n) {
      t.exports = n();
    })(Vt, (function() {
      var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(n, u, i) {
        var o = u.prototype, m = o.format;
        i.en.formats = r, o.format = function(l) {
          l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
          var p = this.$locale().formats, h = (function(g, k) {
            return g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(N, _, B) {
              var x = B && B.toUpperCase();
              return _ || k[B] || r[B] || k[x].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(C, Y, s) {
                return Y || s.slice(1);
              }));
            }));
          })(l, p === void 0 ? {} : p);
          return m.call(this, h);
        };
      };
    }));
  })(pe)), pe.exports;
}
var Zt = qt();
const Ut = /* @__PURE__ */ $e(Zt);
var ge = { exports: {} }, Gt = ge.exports, _e;
function Qt() {
  return _e || (_e = 1, (function(t, a) {
    (function(r, n) {
      t.exports = n();
    })(Gt, (function() {
      var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, u = /\d/, i = /\d\d/, o = /\d\d?/, m = /\d*[^-_:/,()\s\d]+/, l = {}, p = function(x) {
        return (x = +x) + (x > 68 ? 1900 : 2e3);
      }, h = function(x) {
        return function(C) {
          this[x] = +C;
        };
      }, g = [/[+-]\d\d:?(\d\d)?|Z/, function(x) {
        (this.zone || (this.zone = {})).offset = (function(C) {
          if (!C || C === "Z") return 0;
          var Y = C.match(/([+-]|\d\d)/g), s = 60 * Y[1] + (+Y[2] || 0);
          return s === 0 ? 0 : Y[0] === "+" ? -s : s;
        })(x);
      }], k = function(x) {
        var C = l[x];
        return C && (C.indexOf ? C : C.s.concat(C.f));
      }, N = function(x, C) {
        var Y, s = l.meridiem;
        if (s) {
          for (var v = 1; v <= 24; v += 1) if (x.indexOf(s(v, 0, C)) > -1) {
            Y = v > 12;
            break;
          }
        } else Y = x === (C ? "pm" : "PM");
        return Y;
      }, _ = { A: [m, function(x) {
        this.afternoon = N(x, !1);
      }], a: [m, function(x) {
        this.afternoon = N(x, !0);
      }], Q: [u, function(x) {
        this.month = 3 * (x - 1) + 1;
      }], S: [u, function(x) {
        this.milliseconds = 100 * +x;
      }], SS: [i, function(x) {
        this.milliseconds = 10 * +x;
      }], SSS: [/\d{3}/, function(x) {
        this.milliseconds = +x;
      }], s: [o, h("seconds")], ss: [o, h("seconds")], m: [o, h("minutes")], mm: [o, h("minutes")], H: [o, h("hours")], h: [o, h("hours")], HH: [o, h("hours")], hh: [o, h("hours")], D: [o, h("day")], DD: [i, h("day")], Do: [m, function(x) {
        var C = l.ordinal, Y = x.match(/\d+/);
        if (this.day = Y[0], C) for (var s = 1; s <= 31; s += 1) C(s).replace(/\[|\]/g, "") === x && (this.day = s);
      }], w: [o, h("week")], ww: [i, h("week")], M: [o, h("month")], MM: [i, h("month")], MMM: [m, function(x) {
        var C = k("months"), Y = (k("monthsShort") || C.map((function(s) {
          return s.slice(0, 3);
        }))).indexOf(x) + 1;
        if (Y < 1) throw new Error();
        this.month = Y % 12 || Y;
      }], MMMM: [m, function(x) {
        var C = k("months").indexOf(x) + 1;
        if (C < 1) throw new Error();
        this.month = C % 12 || C;
      }], Y: [/[+-]?\d+/, h("year")], YY: [i, function(x) {
        this.year = p(x);
      }], YYYY: [/\d{4}/, h("year")], Z: g, ZZ: g };
      function B(x) {
        var C, Y;
        C = x, Y = l && l.formats;
        for (var s = (x = C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(w, y, A) {
          var R = A && A.toUpperCase();
          return y || Y[A] || r[A] || Y[R].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(b, c, d) {
            return c || d.slice(1);
          }));
        }))).match(n), v = s.length, L = 0; L < v; L += 1) {
          var S = s[L], O = _[S], H = O && O[0], T = O && O[1];
          s[L] = T ? { regex: H, parser: T } : S.replace(/^\[|\]$/g, "");
        }
        return function(w) {
          for (var y = {}, A = 0, R = 0; A < v; A += 1) {
            var b = s[A];
            if (typeof b == "string") R += b.length;
            else {
              var c = b.regex, d = b.parser, M = w.slice(R), f = c.exec(M)[0];
              d.call(y, f), w = w.replace(f, "");
            }
          }
          return (function($) {
            var D = $.afternoon;
            if (D !== void 0) {
              var z = $.hours;
              D ? z < 12 && ($.hours += 12) : z === 12 && ($.hours = 0), delete $.afternoon;
            }
          })(y), y;
        };
      }
      return function(x, C, Y) {
        Y.p.customParseFormat = !0, x && x.parseTwoDigitYear && (p = x.parseTwoDigitYear);
        var s = C.prototype, v = s.parse;
        s.parse = function(L) {
          var S = L.date, O = L.utc, H = L.args;
          this.$u = O;
          var T = H[1];
          if (typeof T == "string") {
            var w = H[2] === !0, y = H[3] === !0, A = w || y, R = H[2];
            y && (R = H[2]), l = this.$locale(), !w && R && (l = Y.Ls[R]), this.$d = (function(M, f, $, D) {
              try {
                if (["x", "X"].indexOf(f) > -1) return new Date((f === "X" ? 1e3 : 1) * M);
                var z = B(f)(M), j = z.year, F = z.month, V = z.day, G = z.hours, oe = z.minutes, te = z.seconds, E = z.milliseconds, Z = z.zone, q = z.week, Q = /* @__PURE__ */ new Date(), ee = V || (j || F ? 1 : Q.getDate()), ae = j || Q.getFullYear(), de = 0;
                j && !F || (de = F > 0 ? F - 1 : Q.getMonth());
                var ue, be = G || 0, ye = oe || 0, Me = te || 0, Ce = E || 0;
                return Z ? new Date(Date.UTC(ae, de, ee, be, ye, Me, Ce + 60 * Z.offset * 1e3)) : $ ? new Date(Date.UTC(ae, de, ee, be, ye, Me, Ce)) : (ue = new Date(ae, de, ee, be, ye, Me, Ce), q && (ue = D(ue).week(q).toDate()), ue);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(S, T, O, Y), this.init(), R && R !== !0 && (this.$L = this.locale(R).$L), A && S != this.format(T) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
          } else if (T instanceof Array) for (var b = T.length, c = 1; c <= b; c += 1) {
            H[1] = T[c - 1];
            var d = Y.apply(this, H);
            if (d.isValid()) {
              this.$d = d.$d, this.$L = d.$L, this.init();
              break;
            }
            c === b && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else v.call(this, L);
        };
      };
    }));
  })(ge)), ge.exports;
}
var Xt = Qt();
const Jt = /* @__PURE__ */ $e(Xt);
X.locale("pt-br");
X.extend(Jt);
X.extend(Ut);
const Be = (t) => t ? "toDate" in t ? t.toDate() : t : null, In = ({
  value: t,
  onChange: a,
  label: r,
  format: n = "date",
  disabled: u,
  errorText: i,
  placeholder: o = "Selecionar data",
  minDate: m,
  maxDate: l,
  classNameInput: p,
  classNameContainer: h,
  withCalendar: g = !1,
  rounded: k = !0,
  color: N = "neutral",
  pickerMode: _ = "modal"
}) => {
  const { main: B, contrast: x } = W(N), [C, Y] = U(!1), [s, v] = U(
    t ? X(Be(t)).format("YYYY-MM-DDTHH:mm") : ""
  );
  J(() => {
    v(
      t ? X(Be(t)).format("YYYY-MM-DDTHH:mm") : ""
    );
  }, [t]);
  const L = () => {
    if (!s) return "";
    const w = X(s);
    switch (n) {
      case "month-year":
        return w.format("MMM/YYYY");
      case "MMMM/YYYY":
        return w.format("MMMM/YYYY");
      case "datetime":
        return w.format("DD/MM/YYYY HH:mm");
      case "day":
        return w.format("DD");
      default:
        return w.format("DD/MM/YYYY");
    }
  }, S = () => {
    s && (a(X(s).toDate()), Y(!1));
  }, O = (w, y) => typeof y == "number" ? X().add(y, "years").format("YYYY-MM-DD") : y ?? w.format("YYYY-MM-DD"), H = () => {
    u || (v(s || X().format("YYYY-MM-DDTHH:mm")), Y(!0));
  }, T = k ? "99999px" : "6px";
  return /* @__PURE__ */ I("div", { className: "relative", children: [
    /* @__PURE__ */ I(
      "div",
      {
        onClick: () => {
          v(s || X().format("YYYY-MM-DDTHH:mm")), Y(!0);
        },
        className: `relative flex flex-col ${h}`,
        children: [
          r && /* @__PURE__ */ e("label", { className: "text-xs font-medium pl-6", children: r }),
          /* @__PURE__ */ I("div", { className: "relative flex items-center w-full", onClick: H, children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                value: s ? L() : "",
                placeholder: o,
                disabled: u,
                style: {
                  borderRadius: T,
                  borderColor: B,
                  color: x
                },
                className: `w-full pr-4 pl-8 py-4 border outline-none placeholder-(--cb-color-border) ${p}`
              }
            ),
            g && /* @__PURE__ */ e(Wt, { className: "absolute right-8 text-[24px] text-gray-500 hover:text-blue-600 transition-colors cursor-pointer" })
          ] }),
          i && /* @__PURE__ */ I(le, { className: "text-[12px] pl-6 text-(--cb-color-danger)", children: [
            " ",
            i,
            " "
          ] })
        ]
      }
    ),
    _ === "modal" && /* @__PURE__ */ e(
      Te,
      {
        isOpen: C,
        onDidDismiss: () => Y(!1),
        className: "custom-calendar-modal",
        children: /* @__PURE__ */ I("div", { className: "p-4 bg-white rounded-lg shadow-lg", children: [
          /* @__PURE__ */ e(
            Ie,
            {
              locale: "pt-BR",
              value: s,
              min: O(
                X().subtract(10, "years").startOf("year"),
                m
              ),
              max: O(X().add(50, "years").endOf("year"), l),
              presentation: n === "month-year" || n === "MMMM/YYYY" ? "month-year" : n === "datetime" ? "date-time" : "date",
              onIonChange: (w) => v(w.detail.value),
              showDefaultButtons: !1
            }
          ),
          /* @__PURE__ */ I("div", { className: "flex justify-end mt-4 gap-2", children: [
            /* @__PURE__ */ e(ke, { color: "medium", onClick: () => Y(!1), children: "Cancelar" }),
            /* @__PURE__ */ e(ke, { onClick: S, children: "Confirmar" })
          ] })
        ] })
      }
    ),
    _ === "dropdown" && C && /* @__PURE__ */ e("div", { className: "absolute z-50 mt-2 bg-white rounded-lg shadow-lg p-3", children: /* @__PURE__ */ e(
      Ie,
      {
        locale: "pt-BR",
        value: s,
        min: O(
          X().subtract(10, "years").startOf("year"),
          m
        ),
        max: O(X().add(50, "years").endOf("year"), l),
        presentation: n === "month-year" || n === "MMMM/YYYY" ? "month-year" : n === "datetime" ? "date-time" : "date",
        onIonChange: (w) => {
          v(w.detail.value), S();
        },
        showDefaultButtons: !1
      }
    ) })
  ] });
}, Nn = ({
  label: t,
  checked: a,
  disabled: r = !1,
  onChange: n,
  color: u = "primary",
  labelPlacement: i = "end",
  className: o,
  style: m
}) => {
  const { main: l, contrast: p } = W(u);
  return /* @__PURE__ */ e("div", { className: `flex items-center ${o ?? ""}`, style: m, children: /* @__PURE__ */ e(
    Oe,
    {
      checked: a,
      disabled: r,
      labelPlacement: i,
      onIonChange: (h) => n(h.detail.checked),
      style: {
        "--track-background": "#d1d5db",
        "--track-background-checked": l,
        "--handle-background": "#ffffff",
        "--handle-background-checked": p
      },
      children: t
    }
  ) });
};
function Sn({
  children: t,
  sm: a,
  md: r = 12,
  lg: n,
  xl: u,
  className: i
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: ne(
        a && Nt[a],
        St[r],
        n && zt[n],
        u && _t[u],
        i
      ),
      children: t
    }
  );
}
const zn = ({
  value: t,
  options: a,
  onChange: r,
  color: n = "primary",
  direction: u = "column",
  labelPlacement: i = "end",
  className: o,
  style: m
}) => /* @__PURE__ */ e(
  He,
  {
    value: t,
    onIonChange: (l) => r(l.detail.value),
    className: `
        flex
        ${u === "row" ? "flex-row gap-5" : "flex-col gap-3"}
        ${o ?? ""}
      `,
    style: m,
    children: a.map((l) => /* @__PURE__ */ e(
      Ot,
      {
        value: l.value,
        label: l.label,
        disabled: l.disabled,
        color: n,
        labelPlacement: i,
        onClick: () => r(l.value)
      },
      l.value
    ))
  }
), _n = ({
  icon: t = Fe,
  onClick: a,
  loading: r = !1,
  disabled: n = !1,
  color: u = "primary",
  className: i
}) => {
  const { main: o, contrast: m } = W(u);
  return /* @__PURE__ */ e("div", { className: "relative w-full left-1/2 ", children: /* @__PURE__ */ e(
    P.div,
    {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { type: "spring", stiffness: 120, damping: 15 },
      className: `fixed bottom-[40px]  z-50 ${i}`,
      children: /* @__PURE__ */ e(Re, { vertical: "bottom", horizontal: "center", slot: "fixed", children: /* @__PURE__ */ e(
        Ye,
        {
          onClick: a,
          disabled: n || r,
          style: { "--box-shadow": "none", "--background": o, "--color": m },
          children: r ? /* @__PURE__ */ e(ie, { name: "crescent", color: m.includes("light") ? "light" : "dark" }) : we.createElement(t, { className: "text-[28px]" })
        }
      ) })
    }
  ) });
}, Kt = ({
  isEmpty: t = !0,
  children: a,
  messages: r,
  title: n,
  icon: u,
  buttonLabel: i,
  onButtonClick: o,
  color: m = "primary",
  colorBg: l = "#ecececbe",
  theme: p = {}
}) => {
  if (!t)
    return /* @__PURE__ */ e(Ve, { children: a });
  const { main: h } = W(m), g = ve(() => {
    const k = r || ["Nenhum dado encontrado"], N = Math.floor(Math.random() * k.length);
    return k[N];
  }, [r]);
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        boxSizing: "border-box",
        ...p.container
      },
      children: /* @__PURE__ */ I(
        P.div,
        {
          initial: { opacity: 0, y: 50, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.6, ease: "easeOut" },
          style: {
            textAlign: "center",
            fontSize: "1.2rem",
            fontStyle: "italic",
            color: "#555",
            maxWidth: "400px",
            lineHeight: 1.4,
            userSelect: "none",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            padding: "1rem 1.5rem",
            borderRadius: "12px",
            backgroundColor: l,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...p.card
          },
          children: [
            u,
            n && /* @__PURE__ */ e(
              "div",
              {
                style: {
                  fontWeight: 600,
                  marginBottom: 4,
                  ...p.title
                },
                children: n
              }
            ),
            /* @__PURE__ */ e("div", { style: p.message, children: g }),
            i && o && /* @__PURE__ */ e(
              "button",
              {
                onClick: o,
                style: {
                  marginTop: 12,
                  padding: "6px 12px",
                  borderRadius: 6,
                  border: "none",
                  backgroundColor: h,
                  color: "#fff",
                  cursor: "pointer",
                  ...p.button
                },
                children: i
              }
            )
          ]
        }
      )
    }
  );
}, en = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M250.26 166.05 256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 367.91a20 20 0 1 1 20-20 20 20 0 0 1-20 20'/></svg>", tn = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='m112 184 144 144 144-144' stroke-linecap='round' stroke-linejoin='round' stroke-width='48px' class='ionicon-fill-none'/></svg>", nn = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48m75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z'/></svg>", rn = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M338.29 338.29 448 448' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
function on(t, a) {
  const r = se(t), n = se(null);
  J(() => {
    r.current = t;
  }, [t]), J(() => () => {
    n.current && clearTimeout(n.current);
  }, []);
  const u = K(() => {
    n.current && (clearTimeout(n.current), n.current = null);
  }, []);
  return { debounced: K(
    (...o) => {
      u(), n.current = setTimeout(() => {
        r.current(...o);
      }, a);
    },
    [u, a]
  ), cancel: u };
}
function an({
  items: t,
  getLabel: a,
  onSearch: r,
  debounce: n = 500,
  minSearchLength: u = 2,
  value: i
}) {
  const o = typeof r == "function", [m, l] = U(i ? a(i) : ""), [p, h] = U([]), [g, k] = U("idle"), [N, _] = U(!1), [B, x] = U(-1), C = se(/* @__PURE__ */ new Map()), Y = se(0);
  J(() => {
    l(i ? a(i) : "");
  }, [i]), J(() => {
    x(-1);
  }, [p]);
  const s = K(
    async (y) => {
      const A = y.trim().toLowerCase(), R = C.current.get(A);
      if (R) {
        h(R), k(R.length === 0 ? "empty" : "results");
        return;
      }
      const b = ++Y.current;
      k("loading");
      try {
        const c = await r(y);
        if (b !== Y.current) return;
        C.current.set(A, c), h(c), k(c.length === 0 ? "empty" : "results");
      } catch {
        if (b !== Y.current) return;
        h([]), k("error");
      }
    },
    [r]
  ), { debounced: v, cancel: L } = on(s, n), S = K(
    (y) => {
      const A = t ?? [], R = y.trim().toLowerCase();
      if (!R) {
        h(A), k(A.length === 0 ? "empty" : "results");
        return;
      }
      const b = A.filter(
        (c) => a(c).toLowerCase().includes(R)
      );
      h(b), k(b.length === 0 ? "empty" : "results");
    },
    [t, a]
  );
  J(() => {
    o || S(m);
  }, [t]);
  const O = K(
    (y) => {
      if (l(y), _(!0), o) {
        if (y.trim().length < u) {
          L(), Y.current++, h([]), k("idle");
          return;
        }
        v(y);
      } else
        S(y);
    },
    [
      o,
      u,
      v,
      L,
      S
    ]
  ), H = K(() => {
    if (_(!0), !o) {
      S(m);
      return;
    }
    g === "idle" && m.trim().length >= u && v(m);
  }, [
    o,
    S,
    m,
    g,
    u,
    v
  ]), T = K(() => {
    _(!1), x(-1);
  }, []), w = K(() => {
    C.current.clear();
  }, []);
  return {
    query: m,
    setQuery: l,
    results: p,
    status: g,
    isOpen: N,
    setIsOpen: _,
    highlightedIndex: B,
    setHighlightedIndex: x,
    handleQueryChange: O,
    openWithCurrentItems: H,
    close: T,
    clearCache: w,
    isRemote: o
  };
}
function sn(t, a, r = !0) {
  J(() => {
    if (!r) return;
    function n(u) {
      const i = u.target;
      t.some((m) => !!m.current && m.current.contains(i)) || a();
    }
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [t, a, r]);
}
const ln = {
  none: "0px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  full: "9999px"
};
function Bn({
  label: t,
  value: a = null,
  items: r,
  getLabel: n,
  getValue: u,
  onValueChange: i,
  onSearch: o,
  placeholder: m = "Pesquisar...",
  helperText: l,
  error: p,
  loading: h = !1,
  disabled: g = !1,
  debounce: k = 500,
  minSearchLength: N = 2,
  color: _ = "neutral",
  radius: B = "md",
  noResultsText: x = "Nenhum resultado encontrado",
  clearable: C = !0
}) {
  const Y = se(null), s = se(null), v = se(null), [L, S] = U(!1), { main: O } = W(_), { main: H } = W("danger"), {
    query: T,
    setQuery: w,
    results: y,
    status: A,
    isOpen: R,
    highlightedIndex: b,
    setHighlightedIndex: c,
    handleQueryChange: d,
    openWithCurrentItems: M,
    close: f
  } = an({
    items: r,
    getLabel: n,
    onSearch: o,
    debounce: k,
    minSearchLength: N,
    value: a
  });
  sn([Y], f, R);
  const $ = A === "loading" || h, D = T.length > 0, z = p ? H : L || D ? O : "var(--cb-color-border)", j = ve(
    () => ({
      "--border-color": z,
      "--highlight-color-focused": O,
      "--border-radius": ln[B],
      "--icon-color": z,
      "--color": "var(--cb-color-dark)",
      "--placeholder-color": "var(--cb-color-border)"
    }),
    [z, O, B]
  ), F = K(
    (E) => {
      w(n(E)), i?.(E), f();
    },
    [n, i, f, w]
  ), V = K(() => {
    d(""), s.current?.setFocus();
  }, [d]), G = (E) => {
    d(String(E.detail.value ?? ""));
  }, oe = (E) => {
    if (!g)
      switch (E.key) {
        case "ArrowDown": {
          if (E.preventDefault(), !R) {
            M();
            return;
          }
          c(
            (Z) => Z + 1 >= y.length ? 0 : Z + 1
          );
          break;
        }
        case "ArrowUp": {
          if (E.preventDefault(), !R) {
            M();
            return;
          }
          c(
            (Z) => Z - 1 < 0 ? y.length - 1 : Z - 1
          );
          break;
        }
        case "Enter": {
          R && b >= 0 && y[b] && (E.preventDefault(), F(y[b]));
          break;
        }
        case "Escape": {
          R && (E.preventDefault(), f());
          break;
        }
        case "Tab": {
          f();
          break;
        }
      }
  };
  J(() => {
    if (b < 0 || !v.current) return;
    v.current.children[b]?.scrollIntoView({ block: "nearest" });
  }, [b]);
  const te = !!o && T.trim().length < N;
  return /* @__PURE__ */ I(
    "div",
    {
      ref: Y,
      className: "relative flex flex-col pt-2 mb-3 h-18 ",
      onKeyDown: oe,
      children: [
        /* @__PURE__ */ I("div", { className: "relative", children: [
          /* @__PURE__ */ e(
            ft,
            {
              ref: s,
              label: t,
              labelPlacement: "stacked",
              placeholder: m,
              fill: "outline",
              shape: "round",
              mode: "md",
              value: T,
              disabled: g,
              autocomplete: "off",
              style: j,
              onIonFocus: () => {
                S(!0), M();
              },
              onIonBlur: () => S(!1),
              onIonInput: G,
              children: /* @__PURE__ */ I("div", { slot: "end", className: "flex items-center gap-1 pr-1", children: [
                $ && /* @__PURE__ */ e(
                  ie,
                  {
                    name: "crescent",
                    style: { width: 18, height: 18, color: O }
                  }
                ),
                !$ && C && D && !g && /* @__PURE__ */ e(
                  he,
                  {
                    icon: nn,
                    className: "cursor-pointer text-[18px]",
                    style: { color: "var(--cb-color-border)" },
                    onClick: V
                  }
                ),
                !$ && /* @__PURE__ */ e(
                  he,
                  {
                    icon: tn,
                    className: "text-[16px] transition-transform duration-150",
                    style: {
                      color: z,
                      transform: R ? "rotate(180deg)" : "rotate(0deg)"
                    }
                  }
                )
              ] })
            }
          ),
          R && !g && /* @__PURE__ */ I(
            "ul",
            {
              ref: v,
              role: "listbox",
              className: "absolute left-0 right-0 top-full bg-(--cb-surface-elevated) mt-1.5 max-h-64 overflow-y-auto custom-scroll border p-1.5 z-50 transition-all duration-150",
              style: {
                borderRadius: "8px",
                borderColor: "var(--cb-color-border)"
              },
              children: [
                A === "error" && /* @__PURE__ */ I(
                  "li",
                  {
                    className: "flex items-center justify-center gap-2 px-3 py-4 text-xs font-medium rounded-lg",
                    style: {
                      color: H
                    },
                    children: [
                      /* @__PURE__ */ e(he, { icon: en, className: "text-base" }),
                      /* @__PURE__ */ e("span", { children: "Erro ao buscar resultados." })
                    ]
                  }
                ),
                A === "loading" && y.length === 0 && /* @__PURE__ */ I(
                  "li",
                  {
                    className: "flex items-center justify-center gap-2 px-3 py-4 text-xs",
                    style: { color: "var(--cb-text-secondary)" },
                    children: [
                      /* @__PURE__ */ e(
                        ie,
                        {
                          name: "crescent",
                          className: "w-4 h-4",
                          style: { color: "var(--cb-text-secondary)" }
                        }
                      ),
                      /* @__PURE__ */ e("span", { children: "Buscando opções..." })
                    ]
                  }
                ),
                A !== "error" && A !== "loading" && y.length === 0 && /* @__PURE__ */ I(
                  "li",
                  {
                    className: "flex flex-col items-center justify-center gap-1 px-3 py-5 text-center text-xs",
                    style: { color: "var(--cb-text-secondary)" },
                    children: [
                      /* @__PURE__ */ e(
                        he,
                        {
                          icon: rn,
                          className: "text-lg opacity-60"
                        }
                      ),
                      /* @__PURE__ */ e("span", { children: te ? `Digite ao menos ${N} caracteres` : x })
                    ]
                  }
                ),
                y.map((E, Z) => {
                  const q = u(E), Q = Z === b, ee = a != null && u(a) === q;
                  return /* @__PURE__ */ e(
                    "li",
                    {
                      role: "option",
                      "aria-selected": ee,
                      className: `relative flex items-center justify-between px-3 py-2.5 my-0.5 text-xs sm:text-sm rounded-lg cursor-pointer select-none transition-all duration-150 ${ee ? "font-semibold" : "font-normal"}`,
                      style: {
                        backgroundColor: Q ? "rgba(156, 163, 175, 0.15)" : "transparent",
                        color: "var(--cb-text-primary)"
                      },
                      onMouseDown: (ae) => ae.preventDefault(),
                      onMouseEnter: () => c(Z),
                      onClick: () => F(E),
                      children: /* @__PURE__ */ e("span", { className: "truncate", children: n(E) })
                    },
                    String(q)
                  );
                })
              ]
            }
          )
        ] }),
        (p || l) && /* @__PURE__ */ e(
          le,
          {
            role: "alert",
            className: `pl-6! text-[12px] ${p ? "text-(--cb-color-danger)" : "text-(--cb-color-secondary)"}`,
            children: p ?? l
          }
        )
      ]
    }
  );
}
const Ln = ({
  data: t,
  isLoading: a = !1,
  error: r = null,
  emptyTitle: n = "Nada encontrado",
  emptyMessages: u,
  emptyIcon: i,
  onRetry: o,
  children: m,
  minHeight: l = "250px",
  loadingLabel: p = "Carregando...",
  theme: h = {}
}) => {
  const [g, k] = U(a || t == null);
  J(() => {
    let x;
    return a || t === void 0 || t === null ? k(!0) : x = setTimeout(() => k(!1), 150), () => clearTimeout(x);
  }, [a, t]);
  const N = a || g, _ = !N && !r && (!t || t.length === 0), B = !N && !r && !_;
  return /* @__PURE__ */ I(
    "div",
    {
      style: {
        width: "100%",
        minHeight: l,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        boxSizing: "border-box",
        ...h.container
      },
      children: [
        N && /* @__PURE__ */ I(
          P.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 },
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              ...h.loading
            },
            children: [
              /* @__PURE__ */ e(ie, { name: "crescent" }),
              /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    marginTop: 10,
                    color: "#666",
                    ...h.loadingLabel
                  },
                  children: p
                }
              )
            ]
          }
        ),
        !N && r && /* @__PURE__ */ I(
          P.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4 },
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              color: "#b00020",
              ...h.error
            },
            children: [
              /* @__PURE__ */ e(bt, { size: 32 }),
              /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    fontWeight: 600,
                    marginTop: 6,
                    marginBottom: 10,
                    ...h.errorTitle
                  },
                  children: "Erro ao carregar os dados"
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    marginBottom: 12,
                    ...h.errorMessage
                  },
                  children: r
                }
              ),
              o && /* @__PURE__ */ e(
                "button",
                {
                  onClick: o,
                  style: {
                    padding: "6px 12px",
                    backgroundColor: "#b00020",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                    ...h.retryButton
                  },
                  children: "Tentar novamente"
                }
              )
            ]
          }
        ),
        !N && _ && /* @__PURE__ */ e(
          Kt,
          {
            title: n,
            messages: u,
            icon: i,
            buttonLabel: o ? "Adicionar" : void 0,
            onButtonClick: o || void 0
          }
        ),
        B && /* @__PURE__ */ e(
          P.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4 },
            style: {
              width: "100%",
              ...h.content
            },
            children: m
          }
        )
      ]
    }
  );
};
export {
  Bn as CBAutocomplete,
  xe as CBButton,
  xn as CBCard,
  qn as CBCheckbox,
  In as CBDataPicker,
  Kt as CBEmptyState,
  $n as CBFabButton,
  _n as CBFabButtonCenter,
  Zn as CBFilterBar,
  wn as CBGrid,
  Sn as CBGridItem,
  Hn as CBInput,
  Mn as CBLoading,
  bn as CBModal,
  Dn as CBMultiView,
  Ot as CBRadio,
  zn as CBRadioGroup,
  yn as CBSelect,
  Yn as CBSelector,
  Ln as CBStateWrapper,
  Ht as CBStepperHorizontal,
  Rt as CBStepperProvider,
  At as CBStepperVertical,
  kn as CBTextArea,
  vn as CBToast,
  Nn as CBToggle,
  Cn as CBTooltip,
  jn as CB_COLOR_CONTRAST_MAP,
  Fn as CB_COLOR_MAP,
  En as applyMask,
  Pn as resolveMask,
  W as useCBColor,
  Pe as useCBStepper,
  Wn as useInputMask,
  An as usePasswordToggle
};
