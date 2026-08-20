import { jsxs as S, jsx as e, Fragment as qe } from "react/jsx-runtime";
import we, { useState as Z, useEffect as J, useRef as se, useMemo as ve, createContext as Ze, useContext as Ue, useCallback as X } from "react";
import re from "clsx";
import { IonCard as Ge, IonCardHeader as Qe, IonCardTitle as Xe, IonCardSubtitle as Je, IonCardContent as Ke, IonFooter as Le, IonText as et, IonModal as Te, IonHeader as tt, IonToolbar as rt, IonButtons as nt, IonButton as ke, IonTitle as ot, IonContent as at, IonSelect as st, IonSelectOption as it, IonNote as ce, IonSpinner as ie, IonTextarea as ct, IonToggle as Oe, IonRadioGroup as He, IonRadio as Ae, IonCheckbox as lt, IonFab as Re, IonFabButton as Ye, IonSegment as dt, IonSegmentButton as ut, IonLabel as De, IonAccordionGroup as ft, IonAccordion as mt, IonItem as ht, IonInput as je, IonDatetime as Ie, IonIcon as fe } from "@ionic/react";
import { I as pt, a as Fe, b as Pe } from "./CBInput-C23xi2A7.js";
import { C as Hr, u as Ar } from "./CBInput-C23xi2A7.js";
import { G as ne, u as W } from "./useInputMask-DlqD3EiL.js";
import { C as jr, b as Fr, a as Pr, r as Er, c as Wr } from "./useInputMask-DlqD3EiL.js";
import { m as E, A as le, C as xe } from "./CBFilterBar-DcJN3pf3.js";
import { b as qr, e as Zr } from "./CBFilterBar-DcJN3pf3.js";
function $e(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function gt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" } }] })(t);
}
function xt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" } }] })(t);
}
function vt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" } }] })(t);
}
function bt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" } }] })(t);
}
function yt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" } }] })(t);
}
function Mt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" } }] })(t);
}
function Ct(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" } }] })(t);
}
function wt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" } }] })(t);
}
function kt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" } }] })(t);
}
function Yt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }] })(t);
}
const xr = ({
  title: t,
  subtitle: s,
  footer: n,
  children: r,
  className: u,
  elevation: i = "md",
  hoverEffect: o = !0,
  collapsible: m = !1,
  defaultCollapsed: l = !1,
  onClickEdit: p,
  onClickDelete: f,
  theme: g
}) => {
  const [w, N] = Z(l), _ = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  }[i], L = g?.sizes?.borderRadius || "rounded-md", x = g?.colors?.background || "bg-white dark:bg-gray-900", C = g?.colors?.text || "text-gray-700 dark:text-gray-200", k = g?.colors?.subtitle || "text-gray-500 dark:text-gray-400";
  return /* @__PURE__ */ S(
    Ge,
    {
      className: re(
        "transition-all",
        x,
        _,
        L,
        o && "hover:shadow-xl hover:scale-[1.01] cursor-pointer",
        u
      ),
      style: {
        width: g?.sizes?.width,
        height: g?.sizes?.height,
        padding: g?.sizes?.padding
      },
      children: [
        (t || s || m || f || p) && /* @__PURE__ */ e(
          Qe,
          {
            className: "relative flex flex-col items-center",
            style: { minHeight: g?.sizes?.headerHeight },
            children: /* @__PURE__ */ S("div", { className: "flex justify-between w-full items-center", children: [
              /* @__PURE__ */ S("div", { className: "flex flex-col text-center w-full", children: [
                t && /* @__PURE__ */ e(Xe, { className: `text-lg font-semibold ${C}`, children: t }),
                s && /* @__PURE__ */ e(Je, { className: `${k} text-sm`, children: s })
              ] }),
              /* @__PURE__ */ S("div", { className: "flex items-center gap-2", children: [
                p && p && /* @__PURE__ */ e(
                  kt,
                  {
                    onClick: p,
                    className: re(
                      "w-10 h-10 p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                      g?.colors?.edit || "text-(--cb-color-secondary-shade)"
                    )
                  }
                ),
                f && f && /* @__PURE__ */ e(
                  xt,
                  {
                    onClick: f,
                    className: re(
                      "w-10 h-10 p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                      g?.colors?.delete || "text-(--cb-color-danger)"
                    )
                  }
                ),
                m && /* @__PURE__ */ e(
                  E.div,
                  {
                    initial: !1,
                    animate: { rotate: w ? 0 : 180 },
                    transition: { duration: 0.3 },
                    className: "text-xl flex-center cursor-pointer",
                    onClick: () => N(!w),
                    children: /* @__PURE__ */ e(pt, {})
                  }
                )
              ] })
            ] })
          }
        ),
        !w && r && /* @__PURE__ */ e(
          Ke,
          {
            style: {
              padding: g?.contentCard?.padding,
              backgroundColor: g?.contentCard?.background,
              color: g?.contentCard?.text
            },
            className: `${C} text-sm`,
            children: r
          }
        ),
        n && /* @__PURE__ */ e(
          Le,
          {
            className: "p-4 border-t dark:border-gray-700",
            style: { backgroundColor: g?.colors?.footer },
            children: n
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
  const n = t.startsWith("top") ? -50 : 50;
  return {
    initial: { opacity: 0, y: n },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: n }
  };
}, vr = ({
  message: t,
  type: s = "info",
  duration: n = 3e3,
  show: r,
  onClose: u,
  className: i,
  position: o = "bottom-center"
}) => {
  const { main: m, contrast: l } = W("success"), { main: p, contrast: f } = W("danger"), { main: g, contrast: w } = W("warning"), { main: N, contrast: _ } = W("info"), L = {
    success: {
      bg: m,
      color: l,
      icon: /* @__PURE__ */ e(gt, { size: 20 })
    },
    error: { bg: p, color: f, icon: /* @__PURE__ */ e(yt, { size: 20 }) },
    warning: {
      bg: g,
      color: w,
      icon: /* @__PURE__ */ e(Mt, { size: 20 })
    },
    info: { bg: N, color: _, icon: /* @__PURE__ */ e(vt, { size: 20 }) }
  }, { bg: x, color: C, icon: k } = L[s];
  J(() => {
    if (r && n) {
      const b = setTimeout(() => u?.(), n);
      return () => clearTimeout(b);
    }
  }, [r, n]);
  const d = Dt(o);
  return /* @__PURE__ */ e(le, { children: r && /* @__PURE__ */ e("div", { className: `fixed z-9999 pointer-events-none w-[95vw] max-w-[360px] ${$t[o]}`, children: /* @__PURE__ */ S(
    E.div,
    {
      ...d,
      transition: { duration: 0.3 },
      className: `pointer-events-auto w-full rounded-lg! p-4! flex items-center shadow-lg ${i}`,
      style: { backgroundColor: x, color: C },
      children: [
        /* @__PURE__ */ S("div", { className: "flex items-center gap-2 flex-1", children: [
          k,
          /* @__PURE__ */ e(et, { className: "text-[14px] font-medium", children: t })
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
}, br = ({
  isOpen: t,
  onDismiss: s,
  title: n,
  subtitle: r,
  children: u,
  footer: i,
  showCloseButton: o = !0,
  className: m,
  headerClassName: l,
  contentClassName: p,
  footerClassName: f,
  ...g
}) => /* @__PURE__ */ S(
  Te,
  {
    isOpen: t,
    onDidDismiss: s,
    className: re("rounded-lg overflow-hidden modal-height-full", m),
    ...g,
    children: [
      (n || r || o) && /* @__PURE__ */ e(tt, { className: re("ion-no-border", l), children: /* @__PURE__ */ e(rt, { children: /* @__PURE__ */ S("div", { className: "flex flex-col items-center text-center w-full", children: [
        /* @__PURE__ */ e("div", { className: "w-full flex justify-end", children: o && /* @__PURE__ */ e(nt, { slot: "end", children: /* @__PURE__ */ e(ke, { onClick: s, children: /* @__PURE__ */ e(Fe, { size: 20 }) }) }) }),
        /* @__PURE__ */ S("div", { className: "flex flex-col", children: [
          n && /* @__PURE__ */ e(ot, { className: "text-lg font-semibold", children: n }),
          r && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: r })
        ] })
      ] }) }) }),
      /* @__PURE__ */ e(
        at,
        {
          style: {
            "--padding-start": "1rem",
            "--padding-end": "1rem",
            "--padding-top": "1rem",
            "--padding-bottom": "1rem"
          },
          className: re("!p-4 text-gray-700 dark:text-gray-200", p),
          children: u
        }
      ),
      i && /* @__PURE__ */ e(Le, { className: re("border-t border-gray-200 dark:border-gray-700 !p-4", f), children: i })
    ]
  }
);
function It() {
  const [t, s] = Z("action-sheet");
  return J(() => {
    const n = window.matchMedia("(min-width:768px)"), r = () => {
      s(n.matches ? "popover" : "action-sheet");
    };
    return r(), n.addEventListener("change", r), () => n.removeEventListener("change", r);
  }, []), t;
}
function yr({
  label: t,
  value: s,
  items: n,
  getLabel: r,
  getValue: u,
  onValueChange: i,
  placeholder: o = "Selecione...",
  disabled: m,
  loading: l,
  error: p,
  helperText: f,
  color: g = "neutral",
  radius: w = "md",
  style: N,
  fill: _ = "outline",
  shape: L = "round",
  ...x
}) {
  const C = se(null), [k, d] = Z(!1), { main: b } = W(g), { main: B } = W("danger"), D = It(), O = s != null && s !== "", H = p ? B : k || O ? b : "var(--cb-color-border)", T = {
    none: "0px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px"
  }, Y = ve(
    () => ({
      ...N,
      "--border-color": H,
      "--highlight-color-focused": b,
      "--border-radius": T[w],
      "--icon-color": H,
      "--color": "var(--cb-color-dark)",
      "--placeholder-color": "var(--cb-color-border)"
    }),
    [N, H, b, w]
  );
  return /* @__PURE__ */ S("div", { className: "relative flex flex-col h-18 pt-2 mb-3!", children: [
    /* @__PURE__ */ e(
      st,
      {
        ref: C,
        value: s ?? void 0,
        label: t,
        labelPlacement: "stacked",
        placeholder: o,
        fill: _,
        shape: L,
        mode: "md",
        disabled: m || l,
        interface: D,
        interfaceOptions: {
          header: t
        },
        style: Y,
        onIonFocus: () => d(!0),
        onIonBlur: () => d(!1),
        onIonChange: (A) => {
          const R = n.find((v) => u(v) === A.detail.value);
          R && i?.(R);
        },
        ...x,
        children: n.map((A) => /* @__PURE__ */ e(it, { value: u(A), children: r(A) }, String(u(A))))
      }
    ),
    (p || f) && /* @__PURE__ */ e(
      ce,
      {
        role: "alert",
        className: `pl-6! text-[12px] ${p ? "text-(--cb-color-danger)" : "text-(--cb-color-secondary)"}`,
        children: p ?? f
      }
    )
  ] });
}
const Mr = ({
  isOpen: t = !1,
  message: s = "Carregando...",
  color: n = "primary",
  type: r = "circular",
  withBg: u = !0,
  withText: i = !0
}) => {
  const { main: o, contrast: m } = W(n);
  return t ? r === "linear" ? /* @__PURE__ */ e(le, { children: /* @__PURE__ */ S(
    E.div,
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
          E.div,
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
          E.div,
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
  ) }) : /* @__PURE__ */ e(le, { children: /* @__PURE__ */ e(
    E.div,
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
      children: /* @__PURE__ */ S(
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
            r === "circular" ? /* @__PURE__ */ e(ie, { name: "crescent", color: "light" }) : /* @__PURE__ */ e("div", { style: { display: "flex", gap: "0.5rem" }, children: [...Array(3)].map((l, p) => /* @__PURE__ */ e(
              E.div,
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
            i && /* @__PURE__ */ e("span", { style: { fontSize: "14px", fontWeight: 500, textAlign: "center" }, children: s })
          ]
        }
      )
    }
  ) }) : null;
}, Cr = ({
  content: t,
  children: s,
  color: n = "light",
  placement: r = "top",
  trigger: u = "hover",
  stopPropagation: i = !1,
  tooltipStyle: o = {}
}) => {
  const [m, l] = Z(!1), { main: p, contrast: f } = W(n), g = {
    top: { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8 },
    bottom: { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8 },
    left: { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: 8 },
    right: { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: 8 }
  };
  return /* @__PURE__ */ S(
    "div",
    {
      className: "relative inline-block",
      onMouseEnter: () => u === "hover" && l(!0),
      onMouseLeave: () => u === "hover" && l(!1),
      onClick: (L) => {
        u === "click" && (i && L.stopPropagation(), l(!m));
      },
      children: [
        s,
        /* @__PURE__ */ e(le, { children: m && /* @__PURE__ */ e(
          E.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { duration: 0.2 },
            style: {
              ...g[r],
              position: "absolute",
              backgroundColor: p,
              color: f,
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
function wr({ children: t, gap: s = 4, gapX: n, gapY: r, className: u }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: re(
        "grid grid-cols-1 md:grid-cols-12",
        n ? Lt[n] : Bt[s],
        r ? Tt[r] : void 0,
        u
      ),
      children: t
    }
  );
}
const kr = ({
  label: t,
  value: s,
  placeholder: n = "",
  rows: r = 4,
  error: u,
  disabled: i = !1,
  color: o = "neutral",
  onChangeValue: m,
  fill: l = "outline",
  maxLength: p,
  radius: f = "md",
  ...g
}) => {
  const { main: w } = W(o), { main: N } = W("danger"), [_, L] = Z(!1), [x, C] = Z(!1);
  J(() => {
    C(!!s);
  }, [s]);
  const k = u ? N : _ || x ? w : "var(--cb-color-border)", d = {
    none: "0px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px"
  }, b = p ? p - s.length : void 0, B = b !== void 0 && b < 0;
  return /* @__PURE__ */ S("div", { className: "relative flex flex-col", style: { minHeight: 72 }, children: [
    t && /* @__PURE__ */ e("label", { className: "text-xs font-medium pl-6", children: t }),
    /* @__PURE__ */ e(
      ct,
      {
        ...g,
        value: s,
        placeholder: n,
        rows: r,
        fill: l,
        disabled: i,
        labelPlacement: "stacked",
        maxlength: p,
        style: {
          "--border-color": k,
          "--highlight-color-focused": w,
          "--border-radius": d[f],
          color: "var(--cb-color-dark)"
        },
        className: re(
          "text-sm resize-none focus:outline-none",
          i && "opacity-60 cursor-not-allowed"
        ),
        onIonFocus: () => L(!0),
        onIonBlur: () => L(!1),
        onIonInput: (D) => m(D.detail.value ?? "")
      }
    ),
    /* @__PURE__ */ S("div", { className: "flex justify-between mt-1", children: [
      /* @__PURE__ */ e(ce, { className: "text-[12px] pl-6 text-(--cb-color-danger)", children: u }),
      p && /* @__PURE__ */ S(
        ce,
        {
          className: re(
            "text-[12px] pr-6",
            B ? "text-(--cb-color-danger)" : "text-gray-500"
          ),
          children: [
            b,
            " caractere",
            b === 1 ? "" : "s",
            " restantes"
          ]
        }
      )
    ] })
  ] });
}, Yr = ({
  label: t,
  checked: s,
  disabled: n = !1,
  type: r = "checkbox",
  onChange: u,
  color: i = "primary",
  labelPlacement: o = "start",
  styleDiv: m
}) => {
  const { main: l, contrast: p } = W(i);
  if (r === "switch")
    return /* @__PURE__ */ e("div", { className: `w-auto ${m}`, children: /* @__PURE__ */ e(
      Oe,
      {
        checked: s,
        disabled: n,
        color: i,
        labelPlacement: o,
        onIonChange: (f) => u(f.detail.checked),
        style: {
          "--background-checked": l,
          // fundo quando ativo
          "--handle-background-checked": p
          // cor do "pino" quando ativo
        },
        children: t
      }
    ) });
  if (r === "radio")
    return /* @__PURE__ */ e("div", { className: `w-auto ${m}`, children: /* @__PURE__ */ e(
      He,
      {
        value: s ? "selected" : "unselected",
        onIonChange: (f) => u(f.detail.value === "selected"),
        className: "flex items-center gap-2",
        children: /* @__PURE__ */ e(
          Ae,
          {
            value: "selected",
            color: i,
            disabled: n,
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
  if (r === "checkbox")
    return /* @__PURE__ */ e("div", { className: `w-auto ${m}`, children: /* @__PURE__ */ e(
      lt,
      {
        checked: s,
        disabled: n,
        color: i,
        labelPlacement: o,
        onIonChange: (f) => u(f.detail.checked),
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
}, $r = ({
  tooltip: t,
  icon: s = Pe,
  onClick: n,
  recording: r,
  loading: u = !1,
  showCancel: i = !1,
  onCancel: o,
  cancelIcon: m = Fe,
  disabled: l = !1,
  className: p,
  color: f = "primary"
}) => {
  const [g, w] = Z(!0), [N, _] = Z(!0), { main: L, contrast: x } = W(f);
  return J(() => {
    const C = setTimeout(() => {
      w(!1), setTimeout(() => {
        _(!1);
      }, 800);
    }, 3e3);
    return () => clearTimeout(C);
  }, []), /* @__PURE__ */ e("div", { style: { position: "relative" }, children: /* @__PURE__ */ e(le, { mode: "wait", children: /* @__PURE__ */ S(
    E.div,
    {
      className: `fixed bottom-24 right-2 z-1000 flex-center ${p} `,
      animate: g ? { width: 250, height: 55 } : { width: 55, height: 55 },
      transition: { duration: 0.8, ease: "easeInOut" },
      children: [
        /* @__PURE__ */ S(Re, { vertical: "bottom", horizontal: "end", slot: "fixed", children: [
          /* @__PURE__ */ e(
            Ye,
            {
              onClick: n,
              disabled: l || u,
              style: {
                "--box-shadow": !g && "none",
                "--background": L,
                "--color": x
              },
              children: u ? /* @__PURE__ */ e(
                ie,
                {
                  name: "crescent",
                  className: "text-(--cb-color-text-fixed)"
                }
              ) : we.createElement(s, { className: "text-[26px]" })
            }
          ),
          i && o && /* @__PURE__ */ e(
            E.div,
            {
              className: "absolute bottom-17.5 right-3 pointer-events-none",
              animate: r ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: 10, pointerEvents: "none" },
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
          E.div,
          {
            className: "absolute right-2.5 bottom-2 pr-13 h-14.5 overflow-hidden rounded-full flex items-center justify-center",
            style: { backgroundColor: L, color: x },
            initial: { width: 0, opacity: 0, filter: "blur(4px)" },
            animate: g ? { width: "auto", opacity: 1, filter: "blur(0px)" } : { width: 0, opacity: 0, filter: "blur(4px)" },
            transition: { duration: 0.5, ease: "easeOut" },
            children: /* @__PURE__ */ e(
              E.div,
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
  value: s,
  disabled: n = !1,
  color: r = "primary",
  labelPlacement: u = "end",
  onClick: i,
  className: o,
  style: m
}) => {
  const { main: l, contrast: p } = W(r);
  return /* @__PURE__ */ S(
    "div",
    {
      onClick: () => {
        n || i?.();
      },
      className: `
        flex
        items-center
        gap-2
        w-fit
        cursor-pointer
        select-none
        ${n ? "cursor-not-allowed opacity-50" : ""}
        ${o ?? ""}
      `,
      style: m,
      children: [
        u === "start" && /* @__PURE__ */ e("span", { children: t }),
        /* @__PURE__ */ e(
          Ae,
          {
            value: s,
            disabled: n,
            color: r,
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
}, Ee = Ze(
  null
);
function We() {
  const t = Ue(Ee);
  if (!t)
    throw new Error("useCBStepper must be used inside a CBStepperProvider.");
  return t;
}
const Ht = ({
  steps: t,
  color: s = "primary",
  className: n,
  classNameContent: r,
  style: u,
  showButtonNext: i = !0,
  showButtonPrev: o = !0,
  nextLabel: m = "Próximo",
  prevLabel: l = "Voltar",
  disableNext: p,
  disablePrev: f,
  theme: g
}) => {
  const { activeIndex: w, next: N, prev: _, canNext: L, canPrev: x } = We(), { main: C, contrast: k } = W(s), d = g?.stepper, b = d?.circle?.background ?? C, B = d?.circle?.text ?? k, D = d?.line ?? C;
  return /* @__PURE__ */ S("div", { className: `flex flex-col gap-4 ${n ?? ""}`, style: u, children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-between w-full relative", children: t.map((O, H) => {
      const T = H === w, Y = H < w;
      return /* @__PURE__ */ S(
        "div",
        {
          className: "flex-1 relative flex flex-col items-center",
          children: [
            /* @__PURE__ */ S("div", { className: "relative flex items-center justify-center w-full", children: [
              H < t.length - 1 && /* @__PURE__ */ S(
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
                      E.div,
                      {
                        style: {
                          position: "absolute",
                          inset: 0,
                          background: D,
                          transformOrigin: "left"
                        },
                        initial: !1,
                        animate: {
                          scaleX: Y ? 1 : 0
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
                E.div,
                {
                  className: "w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 cursor-pointer shrink-0",
                  initial: !1,
                  animate: {
                    backgroundColor: T || Y ? b : "#ffffff",
                    borderColor: T || Y ? b : "#d1d5db",
                    color: T || Y ? B : "#6b7280",
                    scale: T ? [1, 1.08, 1] : 1
                  },
                  transition: {
                    backgroundColor: {
                      duration: 0.2,
                      delay: T || Y ? 0.4 : 0
                    },
                    borderColor: {
                      duration: 0.2,
                      delay: T || Y ? 0.4 : 0
                    },
                    color: {
                      duration: 0.2,
                      delay: T || Y ? 0.4 : 0
                    },
                    scale: {
                      duration: 0.25,
                      delay: T || Y ? 0.4 : 0,
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
                style: { color: d?.titleColor },
                children: O.title
              }
            )
          ]
        },
        H
      );
    }) }),
    /* @__PURE__ */ e("div", { className: r, children: t.map((O, H) => /* @__PURE__ */ e(
      "div",
      {
        style: { display: H === w ? "block" : "none" },
        children: O.content
      },
      H
    )) }),
    /* @__PURE__ */ S("div", { className: "flex justify-between w-full mt-2", children: [
      o && /* @__PURE__ */ e(
        xe,
        {
          disabled: f ? f(w) : !x,
          onClick: _,
          iconStart: /* @__PURE__ */ e(Ct, {}),
          children: typeof l == "function" ? l(w, t.length) : l,
          color: s,
          variant: d?.button?.prev?.variant ?? "solid",
          backgroundColor: d?.button?.prev?.background,
          textColor: d?.button?.prev?.text,
          borderColor: d?.button?.prev?.border,
          hoverColor: d?.button?.prev?.hover,
          rounded: d?.button?.prev?.rounded,
          activeColor: d?.button?.prev?.active
        }
      ),
      i && /* @__PURE__ */ e(
        xe,
        {
          disabled: p ? p(w) : !L,
          onClick: N,
          iconEnd: /* @__PURE__ */ e(wt, {}),
          children: typeof m == "function" ? m(w, t.length) : m,
          color: s,
          variant: d?.button?.next?.variant ?? "solid",
          backgroundColor: d?.button?.next?.background,
          textColor: d?.button?.next?.text,
          borderColor: d?.button?.next?.border,
          hoverColor: d?.button?.next?.hover,
          rounded: d?.button?.next?.rounded,
          activeColor: d?.button?.next?.active
        }
      )
    ] })
  ] });
}, At = ({
  steps: t,
  color: s = "primary",
  className: n,
  classNameContent: r,
  style: u,
  showButtonNext: i = !0,
  showButtonPrev: o = !0,
  nextLabel: m = "Próximo",
  prevLabel: l = "Voltar",
  disableNext: p,
  disablePrev: f,
  theme: g
}) => {
  const { activeIndex: w, next: N, prev: _, canNext: L, canPrev: x } = We(), { main: C, contrast: k } = W(s), d = g?.stepper, b = d?.circle?.background ?? C, B = d?.circle?.text ?? k, D = d?.line ?? C, O = d?.titleColor ?? "#111827";
  return /* @__PURE__ */ e("div", { className: `flex flex-col gap-4 ${n ?? ""}`, style: u, children: t.map((H, T) => {
    const Y = T === w, y = T < w;
    return /* @__PURE__ */ S("div", { className: "relative flex items-start gap-4", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-col items-center relative", children: /* @__PURE__ */ e(
        E.div,
        {
          className: "w-10 h-10 rounded-full border-2 flex items-center justify-center cursor-pointer z-10",
          style: {
            backgroundColor: Y || y ? b : "#ffffff",
            color: Y || y ? B : "#6b7280",
            borderColor: Y || y ? b : "#d1d5db"
          },
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.95 },
          children: H.icon ?? T + 1
        }
      ) }),
      T !== t.length - 1 && /* @__PURE__ */ e(
        E.div,
        {
          style: {
            width: 2,
            backgroundColor: Y || y ? D : "#d1d5db",
            position: "absolute",
            height: "100%",
            left: 18,
            top: 16
          }
        }
      ),
      /* @__PURE__ */ S("div", { className: "flex-1", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "font-semibold text-base",
            style: { color: O },
            children: H.title
          }
        ),
        /* @__PURE__ */ S(
          E.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: {
              height: Y ? "auto" : 0,
              opacity: Y ? 1 : 0
            },
            transition: { duration: 0.4, ease: "easeInOut" },
            className: "overflow-hidden mt-1",
            children: [
              /* @__PURE__ */ e("div", { className: `mb-2 ${r}`, children: H.content }),
              /* @__PURE__ */ S("div", { className: "flex w-full mt-2 pb-2", children: [
                i && /* @__PURE__ */ e(
                  xe,
                  {
                    disabled: p ? p(w) : !L,
                    onClick: N,
                    children: typeof m == "function" ? m(w, t.length) : m,
                    color: s,
                    className: "text-[12px]! mr-2",
                    variant: d?.button?.next?.variant ?? "solid",
                    backgroundColor: d?.button?.next?.background,
                    textColor: d?.button?.next?.text,
                    borderColor: d?.button?.next?.border,
                    hoverColor: d?.button?.next?.hover,
                    rounded: d?.button?.next?.rounded,
                    activeColor: d?.button?.next?.active
                  }
                ),
                o && /* @__PURE__ */ e(
                  xe,
                  {
                    disabled: f ? f(w) : !x,
                    onClick: _,
                    children: typeof l == "function" ? l(w, t.length) : l,
                    color: s,
                    variant: d?.button?.prev?.variant ?? "clear",
                    className: "text-[12px]!",
                    backgroundColor: d?.button?.prev?.background,
                    textColor: d?.button?.prev?.text,
                    borderColor: d?.button?.prev?.border,
                    hoverColor: d?.button?.prev?.hover,
                    rounded: d?.button?.prev?.rounded,
                    activeColor: d?.button?.prev?.active
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
  initialStep: s = 0,
  totalSteps: n,
  onNext: r,
  onPrev: u
}) => {
  const [i, o] = Z(s);
  J(() => {
    o(s);
  }, [s]);
  const m = X(async () => i >= n - 1 || r && await r(i) === !1 ? !1 : (o((g) => g + 1), !0), [i, n, r]), l = X(async () => i <= 0 || u && await u(i) === !1 ? !1 : (o((g) => g - 1), !0), [i, u]), p = X(() => {
    o(s);
  }, [s]), f = ve(
    () => ({
      activeIndex: i,
      totalSteps: n,
      next: m,
      prev: l,
      reset: p,
      canNext: i < n - 1,
      canPrev: i > 0,
      isFirst: i === 0,
      isLast: i === n - 1
    }),
    [i, n, m, l, p]
  );
  return /* @__PURE__ */ e(Ee.Provider, { value: f, children: t });
}, Dr = ({
  steps: t,
  variant: s = "tabs",
  initialStep: n = 0,
  orientation: r = "horizontal",
  color: u = "primary",
  className: i,
  style: o,
  classNameContent: m,
  showButtonPrev: l = !0,
  showButtonNext: p = !0,
  nextLabel: f,
  prevLabel: g,
  disableNext: w,
  disablePrev: N,
  onNext: _,
  onPrev: L,
  onTabChange: x,
  theme: C
}) => {
  const [k, d] = Z(n);
  if (s === "tabs") {
    const b = C?.tabs;
    return /* @__PURE__ */ S("div", { style: o, children: [
      /* @__PURE__ */ e(
        dt,
        {
          scrollable: b?.segment?.scrollable,
          value: k.toString(),
          onIonChange: (B) => {
            const D = B.detail.value;
            if (D != null) {
              const O = parseInt(D.toString(), 10);
              d(O), x?.(O);
            }
          },
          style: {
            background: b?.segment?.background,
            borderRadius: b?.segment?.borderRadius,
            padding: b?.segment?.padding,
            border: b?.segment?.border
          },
          className: `w-full ${i} ${b?.segment?.hideIndicator ? "cb-tabs-no-indicator" : ""}`,
          children: t.map((B, D) => {
            const O = D === k;
            return /* @__PURE__ */ e(
              ut,
              {
                value: D.toString(),
                style: {
                  background: O ? b?.button?.activeBackground : b?.button?.background,
                  color: O ? b?.button?.activeText : b?.button?.text,
                  border: b?.button?.border,
                  borderRadius: b?.button?.rounded !== !1 ? "9999px" : void 0
                },
                children: /* @__PURE__ */ e(De, { children: B.title })
              },
              D
            );
          })
        }
      ),
      /* @__PURE__ */ e("div", { className: m ?? "p-4", children: t[k].content })
    ] });
  }
  if (s === "accordion") {
    const b = C?.accordion;
    return /* @__PURE__ */ e(
      ft,
      {
        value: k.toString(),
        onIonChange: (B) => {
          d(parseInt(B.detail.value ?? "-1", 10));
        },
        className: `${i ?? ""} ${b?.indicator?.hide ? "cb-acc-no-indicator" : ""}`,
        style: o,
        children: t.map((B, D) => /* @__PURE__ */ S(
          mt,
          {
            value: D.toString(),
            children: [
              /* @__PURE__ */ e(
                ht,
                {
                  slot: "header",
                  style: {
                    background: b?.header?.background,
                    color: b?.header?.color,
                    border: b?.header?.border,
                    borderRadius: b?.header?.borderRadius,
                    padding: b?.header?.padding,
                    "--ripple-color": "transparent"
                  },
                  children: /* @__PURE__ */ e(De, { children: B.title })
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  slot: "content",
                  style: {
                    background: b?.content?.background,
                    color: b?.content?.color,
                    padding: b?.content?.padding ?? "16px"
                  },
                  children: B.content
                }
              )
            ]
          },
          D
        ))
      }
    );
  }
  if (s === "stepper") {
    const b = {
      steps: t,
      initialStep: n,
      color: u,
      className: i,
      style: o,
      classNameContent: m,
      showButtonPrev: l,
      showButtonNext: p,
      nextLabel: f,
      prevLabel: g,
      disableNext: w,
      disablePrev: N,
      onNext: _,
      onPrev: L,
      theme: C
    };
    return /* @__PURE__ */ e(
      Rt,
      {
        initialStep: n,
        totalSteps: t.length,
        onNext: _,
        onPrev: L,
        children: r === "horizontal" ? /* @__PURE__ */ e(Ht, { ...b }) : /* @__PURE__ */ e(At, { ...b })
      }
    );
  }
  return null;
};
var me = { exports: {} }, jt = me.exports, Ne;
function Ve() {
  return Ne || (Ne = 1, (function(t, s) {
    (function(n, r) {
      t.exports = r();
    })(jt, (function() {
      var n = 1e3, r = 6e4, u = 36e5, i = "millisecond", o = "second", m = "minute", l = "hour", p = "day", f = "week", g = "month", w = "quarter", N = "year", _ = "date", L = "Invalid Date", x = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, k = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(v) {
        var a = ["th", "st", "nd", "rd"], c = v % 100;
        return "[" + v + (a[(c - 20) % 10] || a[c] || a[0]) + "]";
      } }, d = function(v, a, c) {
        var M = String(v);
        return !M || M.length >= a ? v : "" + Array(a + 1 - M.length).join(c) + v;
      }, b = { s: d, z: function(v) {
        var a = -v.utcOffset(), c = Math.abs(a), M = Math.floor(c / 60), h = c % 60;
        return (a <= 0 ? "+" : "-") + d(M, 2, "0") + ":" + d(h, 2, "0");
      }, m: function v(a, c) {
        if (a.date() < c.date()) return -v(c, a);
        var M = 12 * (c.year() - a.year()) + (c.month() - a.month()), h = a.clone().add(M, g), $ = c - h < 0, I = a.clone().add(M + ($ ? -1 : 1), g);
        return +(-(M + (c - h) / ($ ? h - I : I - h)) || 0);
      }, a: function(v) {
        return v < 0 ? Math.ceil(v) || 0 : Math.floor(v);
      }, p: function(v) {
        return { M: g, y: N, w: f, d: p, D: _, h: l, m, s: o, ms: i, Q: w }[v] || String(v || "").toLowerCase().replace(/s$/, "");
      }, u: function(v) {
        return v === void 0;
      } }, B = "en", D = {};
      D[B] = k;
      var O = "$isDayjsObject", H = function(v) {
        return v instanceof A || !(!v || !v[O]);
      }, T = function v(a, c, M) {
        var h;
        if (!a) return B;
        if (typeof a == "string") {
          var $ = a.toLowerCase();
          D[$] && (h = $), c && (D[$] = c, h = $);
          var I = a.split("-");
          if (!h && I.length > 1) return v(I[0]);
        } else {
          var z = a.name;
          D[z] = a, h = z;
        }
        return !M && h && (B = h), h || !M && B;
      }, Y = function(v, a) {
        if (H(v)) return v.clone();
        var c = typeof a == "object" ? a : {};
        return c.date = v, c.args = arguments, new A(c);
      }, y = b;
      y.l = T, y.i = H, y.w = function(v, a) {
        return Y(v, { locale: a.$L, utc: a.$u, x: a.$x, $offset: a.$offset });
      };
      var A = (function() {
        function v(c) {
          this.$L = T(c.locale, null, !0), this.parse(c), this.$x = this.$x || c.x || {}, this[O] = !0;
        }
        var a = v.prototype;
        return a.parse = function(c) {
          this.$d = (function(M) {
            var h = M.date, $ = M.utc;
            if (h === null) return /* @__PURE__ */ new Date(NaN);
            if (y.u(h)) return /* @__PURE__ */ new Date();
            if (h instanceof Date) return new Date(h);
            if (typeof h == "string" && !/Z$/i.test(h)) {
              var I = h.match(x);
              if (I) {
                var z = I[2] - 1 || 0, j = (I[7] || "0").substring(0, 3);
                return $ ? new Date(Date.UTC(I[1], z, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, j)) : new Date(I[1], z, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, j);
              }
            }
            return new Date(h);
          })(c), this.init();
        }, a.init = function() {
          var c = this.$d;
          this.$y = c.getFullYear(), this.$M = c.getMonth(), this.$D = c.getDate(), this.$W = c.getDay(), this.$H = c.getHours(), this.$m = c.getMinutes(), this.$s = c.getSeconds(), this.$ms = c.getMilliseconds();
        }, a.$utils = function() {
          return y;
        }, a.isValid = function() {
          return this.$d.toString() !== L;
        }, a.isSame = function(c, M) {
          var h = Y(c);
          return this.startOf(M) <= h && h <= this.endOf(M);
        }, a.isAfter = function(c, M) {
          return Y(c) < this.startOf(M);
        }, a.isBefore = function(c, M) {
          return this.endOf(M) < Y(c);
        }, a.$g = function(c, M, h) {
          return y.u(c) ? this[M] : this.set(h, c);
        }, a.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, a.valueOf = function() {
          return this.$d.getTime();
        }, a.startOf = function(c, M) {
          var h = this, $ = !!y.u(M) || M, I = y.p(c), z = function(U, q) {
            var Q = y.w(h.$u ? Date.UTC(h.$y, q, U) : new Date(h.$y, q, U), h);
            return $ ? Q : Q.endOf(p);
          }, j = function(U, q) {
            return y.w(h.toDate()[U].apply(h.toDate("s"), ($ ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)), h);
          }, F = this.$W, V = this.$M, G = this.$D, oe = "set" + (this.$u ? "UTC" : "");
          switch (I) {
            case N:
              return $ ? z(1, 0) : z(31, 11);
            case g:
              return $ ? z(1, V) : z(0, V + 1);
            case f:
              var te = this.$locale().weekStart || 0, P = (F < te ? F + 7 : F) - te;
              return z($ ? G - P : G + (6 - P), V);
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
        }, a.endOf = function(c) {
          return this.startOf(c, !1);
        }, a.$set = function(c, M) {
          var h, $ = y.p(c), I = "set" + (this.$u ? "UTC" : ""), z = (h = {}, h[p] = I + "Date", h[_] = I + "Date", h[g] = I + "Month", h[N] = I + "FullYear", h[l] = I + "Hours", h[m] = I + "Minutes", h[o] = I + "Seconds", h[i] = I + "Milliseconds", h)[$], j = $ === p ? this.$D + (M - this.$W) : M;
          if ($ === g || $ === N) {
            var F = this.clone().set(_, 1);
            F.$d[z](j), F.init(), this.$d = F.set(_, Math.min(this.$D, F.daysInMonth())).$d;
          } else z && this.$d[z](j);
          return this.init(), this;
        }, a.set = function(c, M) {
          return this.clone().$set(c, M);
        }, a.get = function(c) {
          return this[y.p(c)]();
        }, a.add = function(c, M) {
          var h, $ = this;
          c = Number(c);
          var I = y.p(M), z = function(V) {
            var G = Y($);
            return y.w(G.date(G.date() + Math.round(V * c)), $);
          };
          if (I === g) return this.set(g, this.$M + c);
          if (I === N) return this.set(N, this.$y + c);
          if (I === p) return z(1);
          if (I === f) return z(7);
          var j = (h = {}, h[m] = r, h[l] = u, h[o] = n, h)[I] || 1, F = this.$d.getTime() + c * j;
          return y.w(F, this);
        }, a.subtract = function(c, M) {
          return this.add(-1 * c, M);
        }, a.format = function(c) {
          var M = this, h = this.$locale();
          if (!this.isValid()) return h.invalidDate || L;
          var $ = c || "YYYY-MM-DDTHH:mm:ssZ", I = y.z(this), z = this.$H, j = this.$m, F = this.$M, V = h.weekdays, G = h.months, oe = h.meridiem, te = function(q, Q, ee, ae) {
            return q && (q[Q] || q(M, $)) || ee[Q].slice(0, ae);
          }, P = function(q) {
            return y.s(z % 12 || 12, q, "0");
          }, U = oe || function(q, Q, ee) {
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
                  return te(h.monthsShort, F, G, 3);
                case "MMMM":
                  return te(G, F);
                case "D":
                  return M.$D;
                case "DD":
                  return y.s(M.$D, 2, "0");
                case "d":
                  return String(M.$W);
                case "dd":
                  return te(h.weekdaysMin, M.$W, V, 2);
                case "ddd":
                  return te(h.weekdaysShort, M.$W, V, 3);
                case "dddd":
                  return V[M.$W];
                case "H":
                  return String(z);
                case "HH":
                  return y.s(z, 2, "0");
                case "h":
                  return P(1);
                case "hh":
                  return P(2);
                case "a":
                  return U(z, j, !0);
                case "A":
                  return U(z, j, !1);
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
                  return I;
              }
              return null;
            })(q) || I.replace(":", "");
          }));
        }, a.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, a.diff = function(c, M, h) {
          var $, I = this, z = y.p(M), j = Y(c), F = (j.utcOffset() - this.utcOffset()) * r, V = this - j, G = function() {
            return y.m(I, j);
          };
          switch (z) {
            case N:
              $ = G() / 12;
              break;
            case g:
              $ = G();
              break;
            case w:
              $ = G() / 3;
              break;
            case f:
              $ = (V - F) / 6048e5;
              break;
            case p:
              $ = (V - F) / 864e5;
              break;
            case l:
              $ = V / u;
              break;
            case m:
              $ = V / r;
              break;
            case o:
              $ = V / n;
              break;
            default:
              $ = V;
          }
          return h ? $ : y.a($);
        }, a.daysInMonth = function() {
          return this.endOf(g).$D;
        }, a.$locale = function() {
          return D[this.$L];
        }, a.locale = function(c, M) {
          if (!c) return this.$L;
          var h = this.clone(), $ = T(c, M, !0);
          return $ && (h.$L = $), h;
        }, a.clone = function() {
          return y.w(this.$d, this);
        }, a.toDate = function() {
          return new Date(this.valueOf());
        }, a.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, a.toISOString = function() {
          return this.$d.toISOString();
        }, a.toString = function() {
          return this.$d.toUTCString();
        }, v;
      })(), R = A.prototype;
      return Y.prototype = R, [["$ms", i], ["$s", o], ["$m", m], ["$H", l], ["$W", p], ["$M", g], ["$y", N], ["$D", _]].forEach((function(v) {
        R[v[1]] = function(a) {
          return this.$g(a, v[0], v[1]);
        };
      })), Y.extend = function(v, a) {
        return v.$i || (v(a, A, Y), v.$i = !0), Y;
      }, Y.locale = T, Y.isDayjs = H, Y.unix = function(v) {
        return Y(1e3 * v);
      }, Y.en = D[B], Y.Ls = D, Y.p = {}, Y;
    }));
  })(me)), me.exports;
}
var Ft = Ve();
const K = /* @__PURE__ */ $e(Ft);
var he = { exports: {} }, Pt = he.exports, Se;
function Et() {
  return Se || (Se = 1, (function(t, s) {
    (function(n, r) {
      t.exports = r(Ve());
    })(Pt, (function(n) {
      function r(o) {
        return o && typeof o == "object" && "default" in o ? o : { default: o };
      }
      var u = r(n), i = { name: "pt-br", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(o) {
        return o + "º";
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
      return u.default.locale(i, null, !0), i;
    }));
  })(he)), he.exports;
}
Et();
function Wt(t) {
  return ne({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "rect", attr: { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" } }, { tag: "line", attr: { x1: "16", x2: "16", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "8", x2: "8", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "3", x2: "21", y1: "10", y2: "10" } }] })(t);
}
var pe = { exports: {} }, Vt = pe.exports, ze;
function qt() {
  return ze || (ze = 1, (function(t, s) {
    (function(n, r) {
      t.exports = r();
    })(Vt, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(r, u, i) {
        var o = u.prototype, m = o.format;
        i.en.formats = n, o.format = function(l) {
          l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
          var p = this.$locale().formats, f = (function(g, w) {
            return g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(N, _, L) {
              var x = L && L.toUpperCase();
              return _ || w[L] || n[L] || w[x].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(C, k, d) {
                return k || d.slice(1);
              }));
            }));
          })(l, p === void 0 ? {} : p);
          return m.call(this, f);
        };
      };
    }));
  })(pe)), pe.exports;
}
var Zt = qt();
const Ut = /* @__PURE__ */ $e(Zt);
var ge = { exports: {} }, Gt = ge.exports, _e;
function Qt() {
  return _e || (_e = 1, (function(t, s) {
    (function(n, r) {
      t.exports = r();
    })(Gt, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, u = /\d/, i = /\d\d/, o = /\d\d?/, m = /\d*[^-_:/,()\s\d]+/, l = {}, p = function(x) {
        return (x = +x) + (x > 68 ? 1900 : 2e3);
      }, f = function(x) {
        return function(C) {
          this[x] = +C;
        };
      }, g = [/[+-]\d\d:?(\d\d)?|Z/, function(x) {
        (this.zone || (this.zone = {})).offset = (function(C) {
          if (!C || C === "Z") return 0;
          var k = C.match(/([+-]|\d\d)/g), d = 60 * k[1] + (+k[2] || 0);
          return d === 0 ? 0 : k[0] === "+" ? -d : d;
        })(x);
      }], w = function(x) {
        var C = l[x];
        return C && (C.indexOf ? C : C.s.concat(C.f));
      }, N = function(x, C) {
        var k, d = l.meridiem;
        if (d) {
          for (var b = 1; b <= 24; b += 1) if (x.indexOf(d(b, 0, C)) > -1) {
            k = b > 12;
            break;
          }
        } else k = x === (C ? "pm" : "PM");
        return k;
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
      }], s: [o, f("seconds")], ss: [o, f("seconds")], m: [o, f("minutes")], mm: [o, f("minutes")], H: [o, f("hours")], h: [o, f("hours")], HH: [o, f("hours")], hh: [o, f("hours")], D: [o, f("day")], DD: [i, f("day")], Do: [m, function(x) {
        var C = l.ordinal, k = x.match(/\d+/);
        if (this.day = k[0], C) for (var d = 1; d <= 31; d += 1) C(d).replace(/\[|\]/g, "") === x && (this.day = d);
      }], w: [o, f("week")], ww: [i, f("week")], M: [o, f("month")], MM: [i, f("month")], MMM: [m, function(x) {
        var C = w("months"), k = (w("monthsShort") || C.map((function(d) {
          return d.slice(0, 3);
        }))).indexOf(x) + 1;
        if (k < 1) throw new Error();
        this.month = k % 12 || k;
      }], MMMM: [m, function(x) {
        var C = w("months").indexOf(x) + 1;
        if (C < 1) throw new Error();
        this.month = C % 12 || C;
      }], Y: [/[+-]?\d+/, f("year")], YY: [i, function(x) {
        this.year = p(x);
      }], YYYY: [/\d{4}/, f("year")], Z: g, ZZ: g };
      function L(x) {
        var C, k;
        C = x, k = l && l.formats;
        for (var d = (x = C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(Y, y, A) {
          var R = A && A.toUpperCase();
          return y || k[A] || n[A] || k[R].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(v, a, c) {
            return a || c.slice(1);
          }));
        }))).match(r), b = d.length, B = 0; B < b; B += 1) {
          var D = d[B], O = _[D], H = O && O[0], T = O && O[1];
          d[B] = T ? { regex: H, parser: T } : D.replace(/^\[|\]$/g, "");
        }
        return function(Y) {
          for (var y = {}, A = 0, R = 0; A < b; A += 1) {
            var v = d[A];
            if (typeof v == "string") R += v.length;
            else {
              var a = v.regex, c = v.parser, M = Y.slice(R), h = a.exec(M)[0];
              c.call(y, h), Y = Y.replace(h, "");
            }
          }
          return (function($) {
            var I = $.afternoon;
            if (I !== void 0) {
              var z = $.hours;
              I ? z < 12 && ($.hours += 12) : z === 12 && ($.hours = 0), delete $.afternoon;
            }
          })(y), y;
        };
      }
      return function(x, C, k) {
        k.p.customParseFormat = !0, x && x.parseTwoDigitYear && (p = x.parseTwoDigitYear);
        var d = C.prototype, b = d.parse;
        d.parse = function(B) {
          var D = B.date, O = B.utc, H = B.args;
          this.$u = O;
          var T = H[1];
          if (typeof T == "string") {
            var Y = H[2] === !0, y = H[3] === !0, A = Y || y, R = H[2];
            y && (R = H[2]), l = this.$locale(), !Y && R && (l = k.Ls[R]), this.$d = (function(M, h, $, I) {
              try {
                if (["x", "X"].indexOf(h) > -1) return new Date((h === "X" ? 1e3 : 1) * M);
                var z = L(h)(M), j = z.year, F = z.month, V = z.day, G = z.hours, oe = z.minutes, te = z.seconds, P = z.milliseconds, U = z.zone, q = z.week, Q = /* @__PURE__ */ new Date(), ee = V || (j || F ? 1 : Q.getDate()), ae = j || Q.getFullYear(), de = 0;
                j && !F || (de = F > 0 ? F - 1 : Q.getMonth());
                var ue, be = G || 0, ye = oe || 0, Me = te || 0, Ce = P || 0;
                return U ? new Date(Date.UTC(ae, de, ee, be, ye, Me, Ce + 60 * U.offset * 1e3)) : $ ? new Date(Date.UTC(ae, de, ee, be, ye, Me, Ce)) : (ue = new Date(ae, de, ee, be, ye, Me, Ce), q && (ue = I(ue).week(q).toDate()), ue);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(D, T, O, k), this.init(), R && R !== !0 && (this.$L = this.locale(R).$L), A && D != this.format(T) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
          } else if (T instanceof Array) for (var v = T.length, a = 1; a <= v; a += 1) {
            H[1] = T[a - 1];
            var c = k.apply(this, H);
            if (c.isValid()) {
              this.$d = c.$d, this.$L = c.$L, this.init();
              break;
            }
            a === v && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else b.call(this, B);
        };
      };
    }));
  })(ge)), ge.exports;
}
var Xt = Qt();
const Jt = /* @__PURE__ */ $e(Xt);
K.locale("pt-br");
K.extend(Jt);
K.extend(Ut);
const Be = (t) => t ? "toDate" in t ? t.toDate() : t : null, Kt = {
  none: "0px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  full: "9999px"
}, Ir = ({
  value: t,
  onChange: s,
  label: n,
  format: r = "date",
  disabled: u,
  errorText: i,
  placeholder: o = "Selecionar data",
  minDate: m,
  maxDate: l,
  classNameInput: p,
  classNameContainer: f,
  withCalendar: g = !1,
  radius: w = "md",
  color: N = "neutral",
  pickerMode: _ = "modal"
}) => {
  const { main: L, contrast: x } = W(N), { main: C } = W("danger"), [k, d] = Z(!1), [b, B] = Z(!1), [D, O] = Z(
    t ? K(Be(t)).format("YYYY-MM-DDTHH:mm") : ""
  );
  J(() => {
    O(
      t ? K(Be(t)).format("YYYY-MM-DDTHH:mm") : ""
    );
  }, [t]);
  const H = () => {
    if (!D) return "";
    const a = K(D);
    switch (r) {
      case "month-year":
        return a.format("MMM/YYYY");
      case "MMMM/YYYY":
        return a.format("MMMM/YYYY");
      case "datetime":
        return a.format("DD/MM/YYYY HH:mm");
      case "day":
        return a.format("DD");
      default:
        return a.format("DD/MM/YYYY");
    }
  }, T = () => {
    D && (s(K(D).toDate()), d(!1), B(!1));
  }, Y = (a, c) => typeof c == "number" ? K().add(c, "years").format("YYYY-MM-DD") : c ?? a.format("YYYY-MM-DD"), y = X(() => {
    u || (O(D || K().format("YYYY-MM-DDTHH:mm")), B(!0), d(!0));
  }, [u, D]), A = () => {
    d(!1), B(!1);
  }, v = i ? C : b || !!D ? L : "var(--cb-color-border)";
  return /* @__PURE__ */ S(
    "div",
    {
      className: `relative flex flex-col h-18 pt-2 mb-3! ${f ?? ""}`,
      children: [
        /* @__PURE__ */ S("div", { className: "relative flex items-center w-full", onClick: y, children: [
          /* @__PURE__ */ e(
            je,
            {
              readonly: !0,
              value: H(),
              label: n,
              placeholder: o,
              disabled: u,
              fill: "outline",
              shape: "round",
              labelPlacement: "stacked",
              "aria-invalid": !!i,
              style: {
                "--border-color": v,
                "--highlight-color-focused": L,
                "--border-radius": Kt[w],
                color: x ?? "var(--cb-text-primary)"
              },
              className: p
            }
          ),
          g && /* @__PURE__ */ e(Wt, { className: "absolute right-4 text-[20px] text-gray-500 hover:text-blue-600 transition-colors cursor-pointer pointer-events-none" })
        ] }),
        i && /* @__PURE__ */ e(
          ce,
          {
            role: "alert",
            className: "text-[12px] pl-6! text-(--cb-color-danger)",
            children: i
          }
        ),
        _ === "modal" && /* @__PURE__ */ e(
          Te,
          {
            isOpen: k,
            onDidDismiss: A,
            className: "custom-calendar-modal",
            children: /* @__PURE__ */ S("div", { className: "p-4 bg-(--cb-surface) rounded-lg shadow-lg", children: [
              /* @__PURE__ */ e(
                Ie,
                {
                  locale: "pt-BR",
                  value: D,
                  min: Y(
                    K().subtract(10, "years").startOf("year"),
                    m
                  ),
                  style: {
                    "--background": "var(--cb-surface)",
                    "--background-rgb": "var(--cb-surface-rgb)",
                    "--color": "var(--cb-text-primary)",
                    "--ion-color-base-rgb": "var(--cb-color-base-rgb)"
                  },
                  max: Y(K().add(50, "years").endOf("year"), l),
                  presentation: r === "month-year" || r === "MMMM/YYYY" ? "month-year" : r === "datetime" ? "date-time" : "date",
                  onIonChange: (a) => O(a.detail.value),
                  showDefaultButtons: !1
                }
              ),
              /* @__PURE__ */ S("div", { className: "flex justify-end mt-4 gap-2", children: [
                /* @__PURE__ */ e(ke, { color: "medium", onClick: A, children: "Cancelar" }),
                /* @__PURE__ */ e(ke, { onClick: T, children: "Confirmar" })
              ] })
            ] })
          }
        ),
        _ === "dropdown" && k && /* @__PURE__ */ e("div", { className: "absolute picker-modal z-50 mt-16 bg-(--cb-surface) rounded-lg shadow-lg p-3", children: /* @__PURE__ */ e(
          Ie,
          {
            locale: "pt-BR",
            value: D,
            min: Y(
              K().subtract(10, "years").startOf("year"),
              m
            ),
            style: {
              "--background": "var(--cb-surface)",
              "--background-rgb": "var(--cb-surface-rgb)",
              "--color": "var(--cb-text-primary)"
            },
            max: Y(K().add(50, "years").endOf("year"), l),
            presentation: r === "month-year" || r === "MMMM/YYYY" ? "month-year" : r === "datetime" ? "date-time" : "date",
            onIonChange: (a) => {
              O(a.detail.value), T();
            },
            className: "calendar-days-of-week",
            showDefaultButtons: !1
          }
        ) })
      ]
    }
  );
}, Nr = ({
  label: t,
  checked: s,
  disabled: n = !1,
  onChange: r,
  color: u = "primary",
  labelPlacement: i = "end",
  className: o,
  style: m
}) => {
  const { main: l, contrast: p } = W(u);
  return /* @__PURE__ */ e("div", { className: `flex items-center ${o ?? ""}`, style: m, children: /* @__PURE__ */ e(
    Oe,
    {
      checked: s,
      disabled: n,
      labelPlacement: i,
      onIonChange: (f) => r(f.detail.checked),
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
function Sr({
  children: t,
  sm: s,
  md: n = 12,
  lg: r,
  xl: u,
  className: i
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: re(
        s && Nt[s],
        St[n],
        r && zt[r],
        u && _t[u],
        i
      ),
      children: t
    }
  );
}
const zr = ({
  value: t,
  options: s,
  onChange: n,
  color: r = "primary",
  direction: u = "column",
  labelPlacement: i = "end",
  className: o,
  style: m
}) => /* @__PURE__ */ e(
  He,
  {
    value: t,
    onIonChange: (l) => n(l.detail.value),
    className: `
        flex
        ${u === "row" ? "flex-row gap-5" : "flex-col gap-3"}
        ${o ?? ""}
      `,
    style: m,
    children: s.map((l) => /* @__PURE__ */ e(
      Ot,
      {
        value: l.value,
        label: l.label,
        disabled: l.disabled,
        color: r,
        labelPlacement: i,
        onClick: () => n(l.value)
      },
      l.value
    ))
  }
), _r = ({
  icon: t = Pe,
  onClick: s,
  loading: n = !1,
  disabled: r = !1,
  color: u = "primary",
  className: i
}) => {
  const { main: o, contrast: m } = W(u);
  return /* @__PURE__ */ e("div", { className: "relative w-full left-1/2 ", children: /* @__PURE__ */ e(
    E.div,
    {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { type: "spring", stiffness: 120, damping: 15 },
      className: `fixed bottom-[40px]  z-50 ${i}`,
      children: /* @__PURE__ */ e(Re, { vertical: "bottom", horizontal: "center", slot: "fixed", children: /* @__PURE__ */ e(
        Ye,
        {
          onClick: s,
          disabled: r || n,
          style: { "--box-shadow": "none", "--background": o, "--color": m },
          children: n ? /* @__PURE__ */ e(ie, { name: "crescent", color: m.includes("light") ? "light" : "dark" }) : we.createElement(t, { className: "text-[28px]" })
        }
      ) })
    }
  ) });
}, er = ({
  isEmpty: t = !0,
  children: s,
  messages: n,
  title: r,
  icon: u,
  buttonLabel: i,
  onButtonClick: o,
  color: m = "primary",
  colorBg: l = "#ecececbe",
  theme: p = {}
}) => {
  if (!t)
    return /* @__PURE__ */ e(qe, { children: s });
  const { main: f } = W(m), g = ve(() => {
    const w = n || ["Nenhum dado encontrado"], N = Math.floor(Math.random() * w.length);
    return w[N];
  }, [n]);
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
      children: /* @__PURE__ */ S(
        E.div,
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
            r && /* @__PURE__ */ e(
              "div",
              {
                style: {
                  fontWeight: 600,
                  marginBottom: 4,
                  ...p.title
                },
                children: r
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
                  backgroundColor: f,
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
}, tr = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M250.26 166.05 256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 367.91a20 20 0 1 1 20-20 20 20 0 0 1-20 20'/></svg>", rr = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='m112 184 144 144 144-144' stroke-linecap='round' stroke-linejoin='round' stroke-width='48px' class='ionicon-fill-none'/></svg>", nr = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48m75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z'/></svg>", or = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M338.29 338.29 448 448' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
function ar(t, s) {
  const n = se(t), r = se(null);
  J(() => {
    n.current = t;
  }, [t]), J(() => () => {
    r.current && clearTimeout(r.current);
  }, []);
  const u = X(() => {
    r.current && (clearTimeout(r.current), r.current = null);
  }, []);
  return { debounced: X(
    (...o) => {
      u(), r.current = setTimeout(() => {
        n.current(...o);
      }, s);
    },
    [u, s]
  ), cancel: u };
}
function sr({
  items: t,
  getLabel: s,
  onSearch: n,
  debounce: r = 500,
  minSearchLength: u = 2,
  value: i
}) {
  const o = typeof n == "function", [m, l] = Z(i ? s(i) : ""), [p, f] = Z([]), [g, w] = Z("idle"), [N, _] = Z(!1), [L, x] = Z(-1), C = se(/* @__PURE__ */ new Map()), k = se(0);
  J(() => {
    l(i ? s(i) : "");
  }, [i]), J(() => {
    x(-1);
  }, [p]);
  const d = X(
    async (y) => {
      const A = y.trim().toLowerCase(), R = C.current.get(A);
      if (R) {
        f(R), w(R.length === 0 ? "empty" : "results");
        return;
      }
      const v = ++k.current;
      w("loading");
      try {
        const a = await n(y);
        if (v !== k.current) return;
        C.current.set(A, a), f(a), w(a.length === 0 ? "empty" : "results");
      } catch {
        if (v !== k.current) return;
        f([]), w("error");
      }
    },
    [n]
  ), { debounced: b, cancel: B } = ar(d, r), D = X(
    (y) => {
      const A = t ?? [], R = y.trim().toLowerCase();
      if (!R) {
        f(A), w(A.length === 0 ? "empty" : "results");
        return;
      }
      const v = A.filter(
        (a) => s(a).toLowerCase().includes(R)
      );
      f(v), w(v.length === 0 ? "empty" : "results");
    },
    [t, s]
  );
  J(() => {
    o || D(m);
  }, [t]);
  const O = X(
    (y) => {
      if (l(y), _(!0), o) {
        if (y.trim().length < u) {
          B(), k.current++, f([]), w("idle");
          return;
        }
        b(y);
      } else
        D(y);
    },
    [
      o,
      u,
      b,
      B,
      D
    ]
  ), H = X(() => {
    if (_(!0), !o) {
      D(m);
      return;
    }
    g === "idle" && m.trim().length >= u && b(m);
  }, [
    o,
    D,
    m,
    g,
    u,
    b
  ]), T = X(() => {
    _(!1), x(-1);
  }, []), Y = X(() => {
    C.current.clear();
  }, []);
  return {
    query: m,
    setQuery: l,
    results: p,
    status: g,
    isOpen: N,
    setIsOpen: _,
    highlightedIndex: L,
    setHighlightedIndex: x,
    handleQueryChange: O,
    openWithCurrentItems: H,
    close: T,
    clearCache: Y,
    isRemote: o
  };
}
function ir(t, s, n = !0) {
  J(() => {
    if (!n) return;
    function r(u) {
      const i = u.target;
      t.some((m) => !!m.current && m.current.contains(i)) || s();
    }
    return document.addEventListener("mousedown", r), document.addEventListener("touchstart", r), () => {
      document.removeEventListener("mousedown", r), document.removeEventListener("touchstart", r);
    };
  }, [t, s, n]);
}
const cr = {
  none: "0px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  full: "9999px"
};
function Br({
  label: t,
  value: s = null,
  items: n,
  getLabel: r,
  getValue: u,
  onValueChange: i,
  onSearch: o,
  placeholder: m = "Pesquisar...",
  helperText: l,
  error: p,
  loading: f = !1,
  disabled: g = !1,
  debounce: w = 500,
  minSearchLength: N = 2,
  color: _ = "neutral",
  radius: L = "md",
  noResultsText: x = "Nenhum resultado encontrado",
  clearable: C = !0
}) {
  const k = se(null), d = se(null), b = se(null), [B, D] = Z(!1), { main: O } = W(_), { main: H } = W("danger"), {
    query: T,
    setQuery: Y,
    results: y,
    status: A,
    isOpen: R,
    highlightedIndex: v,
    setHighlightedIndex: a,
    handleQueryChange: c,
    openWithCurrentItems: M,
    close: h
  } = sr({
    items: n,
    getLabel: r,
    onSearch: o,
    debounce: w,
    minSearchLength: N,
    value: s
  });
  ir([k], h, R);
  const $ = A === "loading" || f, I = T.length > 0, z = p ? H : B || I ? O : "var(--cb-color-border)", j = ve(
    () => ({
      "--border-color": z,
      "--highlight-color-focused": O,
      "--border-radius": cr[L],
      "--icon-color": z,
      "--color": "var(--cb-color-dark)",
      "--placeholder-color": "var(--cb-color-border)"
    }),
    [z, O, L]
  ), F = X(
    (P) => {
      Y(r(P)), i?.(P), h();
    },
    [r, i, h, Y]
  ), V = X(() => {
    c(""), d.current?.setFocus();
  }, [c]), G = (P) => {
    c(String(P.detail.value ?? ""));
  }, oe = (P) => {
    if (!g)
      switch (P.key) {
        case "ArrowDown": {
          if (P.preventDefault(), !R) {
            M();
            return;
          }
          a(
            (U) => U + 1 >= y.length ? 0 : U + 1
          );
          break;
        }
        case "ArrowUp": {
          if (P.preventDefault(), !R) {
            M();
            return;
          }
          a(
            (U) => U - 1 < 0 ? y.length - 1 : U - 1
          );
          break;
        }
        case "Enter": {
          R && v >= 0 && y[v] && (P.preventDefault(), F(y[v]));
          break;
        }
        case "Escape": {
          R && (P.preventDefault(), h());
          break;
        }
        case "Tab": {
          h();
          break;
        }
      }
  };
  J(() => {
    if (v < 0 || !b.current) return;
    b.current.children[v]?.scrollIntoView({ block: "nearest" });
  }, [v]);
  const te = !!o && T.trim().length < N;
  return /* @__PURE__ */ S(
    "div",
    {
      ref: k,
      className: "relative flex flex-col pt-2 mb-3 h-18 ",
      onKeyDown: oe,
      children: [
        /* @__PURE__ */ S("div", { className: "relative", children: [
          /* @__PURE__ */ e(
            je,
            {
              ref: d,
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
                D(!0), M();
              },
              onIonBlur: () => D(!1),
              onIonInput: G,
              children: /* @__PURE__ */ S("div", { slot: "end", className: "flex items-center gap-1 pr-1", children: [
                $ && /* @__PURE__ */ e(
                  ie,
                  {
                    name: "crescent",
                    style: { width: 18, height: 18, color: O }
                  }
                ),
                !$ && C && I && !g && /* @__PURE__ */ e(
                  fe,
                  {
                    icon: nr,
                    className: "cursor-pointer text-[18px]",
                    style: { color: "var(--cb-color-border)" },
                    onClick: V
                  }
                ),
                !$ && /* @__PURE__ */ e(
                  fe,
                  {
                    icon: rr,
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
          R && !g && /* @__PURE__ */ S(
            "ul",
            {
              ref: b,
              role: "listbox",
              className: "absolute left-0 right-0 top-full bg-(--cb-surface-elevated) mt-1.5 max-h-64 overflow-y-auto custom-scroll border p-1.5 z-50 transition-all duration-150",
              style: {
                borderRadius: "8px",
                borderColor: "var(--cb-color-border)"
              },
              children: [
                A === "error" && /* @__PURE__ */ S(
                  "li",
                  {
                    className: "flex items-center justify-center gap-2 px-3 py-4 text-xs font-medium rounded-lg",
                    style: {
                      color: H
                    },
                    children: [
                      /* @__PURE__ */ e(fe, { icon: tr, className: "text-base" }),
                      /* @__PURE__ */ e("span", { children: "Erro ao buscar resultados." })
                    ]
                  }
                ),
                A === "loading" && y.length === 0 && /* @__PURE__ */ S(
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
                A !== "error" && A !== "loading" && y.length === 0 && /* @__PURE__ */ S(
                  "li",
                  {
                    className: "flex flex-col items-center justify-center gap-1 px-3 py-5 text-center text-xs",
                    style: { color: "var(--cb-text-secondary)" },
                    children: [
                      /* @__PURE__ */ e(
                        fe,
                        {
                          icon: or,
                          className: "text-lg opacity-60"
                        }
                      ),
                      /* @__PURE__ */ e("span", { children: te ? `Digite ao menos ${N} caracteres` : x })
                    ]
                  }
                ),
                y.map((P, U) => {
                  const q = u(P), Q = U === v, ee = s != null && u(s) === q;
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
                      onMouseEnter: () => a(U),
                      onClick: () => F(P),
                      children: /* @__PURE__ */ e("span", { className: "truncate", children: r(P) })
                    },
                    String(q)
                  );
                })
              ]
            }
          )
        ] }),
        (p || l) && /* @__PURE__ */ e(
          ce,
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
const Lr = ({
  data: t,
  isLoading: s = !1,
  error: n = null,
  emptyTitle: r = "Nada encontrado",
  emptyMessages: u,
  emptyIcon: i,
  onRetry: o,
  children: m,
  minHeight: l = "250px",
  loadingLabel: p = "Carregando...",
  theme: f = {}
}) => {
  const [g, w] = Z(s || t == null);
  J(() => {
    let x;
    return s || t === void 0 || t === null ? w(!0) : x = setTimeout(() => w(!1), 150), () => clearTimeout(x);
  }, [s, t]);
  const N = s || g, _ = !N && !n && (!t || t.length === 0), L = !N && !n && !_;
  return /* @__PURE__ */ S(
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
        ...f.container
      },
      children: [
        N && /* @__PURE__ */ S(
          E.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 },
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              ...f.loading
            },
            children: [
              /* @__PURE__ */ e(ie, { name: "crescent" }),
              /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    marginTop: 10,
                    color: "#666",
                    ...f.loadingLabel
                  },
                  children: p
                }
              )
            ]
          }
        ),
        !N && n && /* @__PURE__ */ S(
          E.div,
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
              ...f.error
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
                    ...f.errorTitle
                  },
                  children: "Erro ao carregar os dados"
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    marginBottom: 12,
                    ...f.errorMessage
                  },
                  children: n
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
                    ...f.retryButton
                  },
                  children: "Tentar novamente"
                }
              )
            ]
          }
        ),
        !N && _ && /* @__PURE__ */ e(
          er,
          {
            title: r,
            messages: u,
            icon: i,
            buttonLabel: o ? "Adicionar" : void 0,
            onButtonClick: o || void 0
          }
        ),
        L && /* @__PURE__ */ e(
          E.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4 },
            style: {
              width: "100%",
              ...f.content
            },
            children: m
          }
        )
      ]
    }
  );
};
export {
  Br as CBAutocomplete,
  xe as CBButton,
  xr as CBCard,
  qr as CBCheckbox,
  Ir as CBDataPicker,
  er as CBEmptyState,
  $r as CBFabButton,
  _r as CBFabButtonCenter,
  Zr as CBFilterBar,
  wr as CBGrid,
  Sr as CBGridItem,
  Hr as CBInput,
  Mr as CBLoading,
  br as CBModal,
  Dr as CBMultiView,
  Ot as CBRadio,
  zr as CBRadioGroup,
  yr as CBSelect,
  Yr as CBSelector,
  Lr as CBStateWrapper,
  Ht as CBStepperHorizontal,
  Rt as CBStepperProvider,
  At as CBStepperVertical,
  kr as CBTextArea,
  vr as CBToast,
  Nr as CBToggle,
  Cr as CBTooltip,
  jr as CB_COLOR_CONTRAST_MAP,
  Fr as CB_COLOR_MAP,
  Pr as applyMask,
  Er as resolveMask,
  W as useCBColor,
  We as useCBStepper,
  Wr as useInputMask,
  Ar as usePasswordToggle
};
