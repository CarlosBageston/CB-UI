import { jsxs as I, jsx as e, Fragment as ft } from "react/jsx-runtime";
import Oe, { useState as G, useEffect as ae, useRef as ge, useMemo as Le, createContext as ht, useContext as pt, useCallback as ce, useId as Qe } from "react";
import E from "clsx";
import { IonCard as gt, IonCardHeader as bt, IonCardTitle as xt, IonCardSubtitle as vt, IonCardContent as yt, IonFooter as je, IonText as wt, IonModal as Ae, IonHeader as Xe, IonToolbar as Je, IonButtons as et, IonButton as _e, IonTitle as tt, IonContent as rt, IonSelect as Ct, IonSelectOption as kt, IonNote as ve, IonSpinner as ye, IonTextarea as Mt, IonToggle as nt, IonRadioGroup as Re, IonRadio as ze, IonCheckbox as $t, IonFab as ot, IonFabButton as He, IonSegment as Dt, IonSegmentButton as Nt, IonLabel as Pe, IonAccordionGroup as It, IonAccordion as Yt, IonItem as St, IonInput as at, IonDatetime as Ve, IonIcon as De } from "@ionic/react";
import { I as _t, a as Fe, b as st } from "./CBInput-9NKAl6mE.js";
import { C as cn, u as ln } from "./CBInput-9NKAl6mE.js";
import { G as me, u as W, b as zt } from "./iconBase-BLK_ZShL.js";
import { C as un, c as mn, a as fn, r as hn, d as pn } from "./iconBase-BLK_ZShL.js";
import { m as Z, A as we, C as Be } from "./CBFilterBar-CR53yEFV.js";
import { b as bn, e as xn } from "./CBFilterBar-CR53yEFV.js";
function Ee(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Bt(t) {
  return me({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" } }] })(t);
}
function Lt(t) {
  return me({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" } }] })(t);
}
function Tt(t) {
  return me({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" } }] })(t);
}
function Ot(t) {
  return me({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" } }] })(t);
}
function Ht(t) {
  return me({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" } }] })(t);
}
function jt(t) {
  return me({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" } }] })(t);
}
function At(t) {
  return me({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" } }] })(t);
}
function Rt(t) {
  return me({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" } }] })(t);
}
function Ft(t) {
  return me({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" } }] })(t);
}
function Et(t) {
  return me({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }] })(t);
}
const jr = ({
  title: t,
  subtitle: o,
  footer: n,
  children: r,
  className: u,
  elevation: i = "md",
  hoverEffect: a = !0,
  collapsible: h = !1,
  defaultCollapsed: l = !1,
  onClickEdit: m,
  onClickDelete: c,
  theme: b
}) => {
  const [k, Y] = G(l), B = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  }[i], z = b?.sizes?.borderRadius || "rounded-md", g = b?.colors?.background || "bg-white dark:bg-gray-900", M = b?.colors?.text || "text-gray-700 dark:text-gray-200", $ = b?.colors?.subtitle || "text-gray-500 dark:text-gray-400";
  return /* @__PURE__ */ I(
    gt,
    {
      className: E(
        "transition-all",
        g,
        B,
        z,
        a && "hover:shadow-xl hover:scale-[1.01] cursor-pointer",
        u
      ),
      style: {
        width: b?.sizes?.width,
        height: b?.sizes?.height,
        padding: b?.sizes?.padding
      },
      children: [
        (t || o || h || c || m) && /* @__PURE__ */ e(
          bt,
          {
            className: "relative flex flex-col items-center",
            style: { minHeight: b?.sizes?.headerHeight },
            children: /* @__PURE__ */ I("div", { className: "flex justify-between w-full items-center", children: [
              /* @__PURE__ */ I("div", { className: "flex flex-col text-center w-full", children: [
                t && /* @__PURE__ */ e(xt, { className: `text-lg font-semibold ${M}`, children: t }),
                o && /* @__PURE__ */ e(vt, { className: `${$} text-sm`, children: o })
              ] }),
              /* @__PURE__ */ I("div", { className: "flex items-center gap-2", children: [
                m && m && /* @__PURE__ */ e(
                  Ft,
                  {
                    onClick: m,
                    className: E(
                      "w-10 h-10 p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                      b?.colors?.edit || "text-(--cb-color-secondary-shade)"
                    )
                  }
                ),
                c && c && /* @__PURE__ */ e(
                  Lt,
                  {
                    onClick: c,
                    className: E(
                      "w-10 h-10 p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                      b?.colors?.delete || "text-(--cb-color-danger)"
                    )
                  }
                ),
                h && /* @__PURE__ */ e(
                  Z.div,
                  {
                    initial: !1,
                    animate: { rotate: k ? 0 : 180 },
                    transition: { duration: 0.3 },
                    className: "text-xl flex-center cursor-pointer",
                    onClick: () => Y(!k),
                    children: /* @__PURE__ */ e(_t, {})
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ e(we, { initial: !1, children: !k && r && /* @__PURE__ */ e(
          Z.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.3, ease: "easeInOut" },
            style: { overflow: "hidden" },
            children: /* @__PURE__ */ e(
              yt,
              {
                style: {
                  padding: b?.contentCard?.padding,
                  backgroundColor: b?.contentCard?.background,
                  color: b?.contentCard?.text
                },
                className: `${M} text-sm`,
                children: r
              }
            )
          },
          "card-content"
        ) }),
        n && /* @__PURE__ */ e(
          je,
          {
            className: "p-4 border-t dark:border-gray-700",
            style: { backgroundColor: b?.colors?.footer },
            children: n
          }
        )
      ]
    }
  );
}, Pt = {
  "top-left": "top-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0",
  "bottom-left": "bottom-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
}, Vt = (t) => {
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
}, Ar = ({
  message: t,
  type: o = "info",
  duration: n = 3e3,
  show: r,
  onClose: u,
  className: i,
  position: a = "bottom-center"
}) => {
  const { main: h, contrast: l } = W("success"), { main: m, contrast: c } = W("danger"), { main: b, contrast: k } = W("warning"), { main: Y, contrast: B } = W("info"), z = {
    success: {
      bg: h,
      color: l,
      icon: /* @__PURE__ */ e(Bt, { size: 20 })
    },
    error: { bg: m, color: c, icon: /* @__PURE__ */ e(Ht, { size: 20 }) },
    warning: {
      bg: b,
      color: k,
      icon: /* @__PURE__ */ e(jt, { size: 20 })
    },
    info: { bg: Y, color: B, icon: /* @__PURE__ */ e(Tt, { size: 20 }) }
  }, { bg: g, color: M, icon: $ } = z[o];
  ae(() => {
    if (r && n) {
      const y = setTimeout(() => u?.(), n);
      return () => clearTimeout(y);
    }
  }, [r, n]);
  const f = Vt(a);
  return /* @__PURE__ */ e(we, { children: r && /* @__PURE__ */ e("div", { className: `fixed z-9999 pointer-events-none w-[95vw] max-w-[360px] ${Pt[a]}`, children: /* @__PURE__ */ I(
    Z.div,
    {
      ...f,
      transition: { duration: 0.3 },
      className: `pointer-events-auto w-full rounded-lg! p-4! flex items-center shadow-lg ${i}`,
      style: { backgroundColor: g, color: M },
      children: [
        /* @__PURE__ */ I("div", { className: "flex items-center gap-2 flex-1", children: [
          $,
          /* @__PURE__ */ e(wt, { className: "text-[14px] font-medium", children: t })
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
            children: /* @__PURE__ */ e(Et, { size: 18 })
          }
        )
      ]
    }
  ) }) });
}, Rr = ({
  isOpen: t,
  onDismiss: o,
  title: n,
  subtitle: r,
  children: u,
  footer: i,
  showCloseButton: a = !0,
  className: h,
  headerClassName: l,
  contentClassName: m,
  footerClassName: c,
  ...b
}) => /* @__PURE__ */ I(
  Ae,
  {
    isOpen: t,
    onDidDismiss: o,
    className: E(
      "rounded-lg overflow-hidden modal-height-full",
      h
    ),
    ...b,
    children: [
      (n || r || a) && /* @__PURE__ */ e(Xe, { className: E("ion-no-border", l), children: /* @__PURE__ */ e(Je, { children: /* @__PURE__ */ I("div", { className: "flex flex-col items-center text-center w-full", children: [
        /* @__PURE__ */ e("div", { className: "w-full flex justify-end", children: a && /* @__PURE__ */ e(et, { slot: "end", children: /* @__PURE__ */ e(_e, { onClick: o, children: /* @__PURE__ */ e(Fe, { size: 20 }) }) }) }),
        /* @__PURE__ */ I("div", { className: "flex flex-col", children: [
          n && /* @__PURE__ */ e(tt, { className: "text-lg font-semibold", children: n }),
          r && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: r })
        ] })
      ] }) }) }),
      /* @__PURE__ */ e(
        rt,
        {
          style: {
            "--padding-start": "1rem",
            "--padding-end": "1rem",
            "--padding-top": "1rem",
            "--padding-bottom": "1rem"
          },
          className: E(
            "p-4! text-gray-700 dark:text-gray-200",
            m
          ),
          children: u
        }
      ),
      i && /* @__PURE__ */ e(
        je,
        {
          className: E(
            "border-t border-gray-200 dark:border-gray-700 p-4!",
            c
          ),
          children: i
        }
      )
    ]
  }
), Wt = {
  sm: "cb-popup-size-sm",
  md: "cb-popup-size-md",
  lg: "cb-popup-size-lg",
  xl: "cb-popup-size-xl"
}, Fr = ({
  isOpen: t,
  onDismiss: o,
  title: n,
  subtitle: r,
  children: u,
  footer: i,
  showCloseButton: a = !0,
  size: h = "md",
  color: l,
  className: m,
  headerClassName: c,
  contentClassName: b,
  footerClassName: k,
  ...Y
}) => {
  const { main: B } = W(l ?? "primary");
  return /* @__PURE__ */ I(
    Ae,
    {
      isOpen: t,
      onDidDismiss: (z) => {
        o(), Y.onDidDismiss?.(z);
      },
      className: E("cb-popup-modal", Wt[h], m),
      ...Y,
      children: [
        (n || r || a || l) && /* @__PURE__ */ I(Xe, { className: E("ion-no-border relative", c), children: [
          l && /* @__PURE__ */ e(
            "div",
            {
              className: "h-1.5 w-full shrink-0",
              style: { backgroundColor: B }
            }
          ),
          /* @__PURE__ */ e(
            Je,
            {
              style: {
                "--background": "transparent",
                "--color": "var(--cb-text-primary, inherit)"
              },
              children: /* @__PURE__ */ I("div", { className: "flex items-start justify-between w-full py-2.5 px-4", children: [
                /* @__PURE__ */ I("div", { className: "flex flex-col flex-1 min-w-0 pr-3", children: [
                  n && /* @__PURE__ */ e(tt, { className: "text-lg font-bold text-gray-900 dark:text-gray-100 p-0 ion-no-padding tracking-tight", children: n }),
                  r && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed", children: r })
                ] }),
                a && /* @__PURE__ */ e(et, { slot: "end", className: "shrink-0 -mr-1", children: /* @__PURE__ */ e(
                  _e,
                  {
                    onClick: o,
                    "aria-label": "Fechar",
                    className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors m-0",
                    children: /* @__PURE__ */ e(Fe, { size: 22 })
                  }
                ) })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ e(
          rt,
          {
            style: {
              "--padding-start": "1.25rem",
              "--padding-end": "1.25rem",
              "--padding-top": "1rem",
              "--padding-bottom": "1rem",
              "--background": "transparent"
            },
            className: E(
              "text-gray-700 dark:text-gray-200 text-sm custom-scroll",
              b
            ),
            children: u
          }
        ),
        i && /* @__PURE__ */ e(
          je,
          {
            className: E(
              "border-t border-gray-100 dark:border-gray-800 p-4 bg-gray-50/50 dark:bg-gray-900/50",
              k
            ),
            children: i
          }
        )
      ]
    }
  );
};
function qt() {
  const [t, o] = G("action-sheet");
  return ae(() => {
    const n = window.matchMedia("(min-width:768px)"), r = () => {
      o(n.matches ? "popover" : "action-sheet");
    };
    return r(), n.addEventListener("change", r), () => n.removeEventListener("change", r);
  }, []), t;
}
function Er({
  label: t,
  value: o,
  items: n,
  getLabel: r,
  getValue: u,
  onValueChange: i,
  placeholder: a = "Selecione...",
  disabled: h,
  loading: l,
  error: m,
  helperText: c,
  color: b = "neutral",
  radius: k = "md",
  style: Y,
  fill: B = "outline",
  shape: z = "round",
  ...g
}) {
  const M = ge(null), [$, f] = G(!1), { main: y } = W(b), { main: L } = W("danger"), N = qt(), A = o != null && o !== "", R = m ? L : $ || A ? y : "var(--cb-color-border)", T = {
    none: "0px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px"
  }, w = Le(
    () => ({
      ...Y,
      "--border-color": R,
      "--highlight-color-focused": y,
      "--border-radius": T[k],
      "--icon-color": R,
      "--color": "var(--cb-color-dark)",
      "--placeholder-color": "var(--cb-color-border)"
    }),
    [Y, R, y, k]
  );
  return /* @__PURE__ */ I("div", { className: "relative flex flex-col h-18 pt-2 mb-3!", children: [
    /* @__PURE__ */ e(
      Ct,
      {
        ref: M,
        value: o ?? void 0,
        label: t,
        labelPlacement: "stacked",
        placeholder: a,
        fill: B,
        shape: z,
        mode: "md",
        disabled: h || l,
        interface: N,
        interfaceOptions: {
          header: t
        },
        style: w,
        onIonFocus: () => f(!0),
        onIonBlur: () => f(!1),
        onIonChange: (S) => {
          const j = n.find((v) => u(v) === S.detail.value);
          j && i?.(j);
        },
        ...g,
        children: n.map((S) => /* @__PURE__ */ e(kt, { value: u(S), children: r(S) }, String(u(S))))
      }
    ),
    (m || c) && /* @__PURE__ */ e(
      ve,
      {
        role: "alert",
        className: `pl-6! text-[12px] ${m ? "text-(--cb-color-danger)" : "text-(--cb-color-secondary)"}`,
        children: m ?? c
      }
    )
  ] });
}
const Pr = ({
  isOpen: t = !1,
  message: o = "Carregando...",
  color: n = "primary",
  type: r = "circular",
  withBg: u = !0,
  withText: i = !0
}) => {
  const { main: a, contrast: h } = W(n);
  return t ? r === "linear" ? /* @__PURE__ */ e(we, { children: /* @__PURE__ */ I(
    Z.div,
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
          Z.div,
          {
            style: {
              height: "100%",
              width: "50%",
              backgroundColor: a,
              opacity: 1,
              position: "absolute",
              borderRadius: 2
            },
            animate: { x: ["-100%", "200%"] },
            transition: { repeat: 1 / 0, duration: 1.5, ease: "easeInOut" }
          }
        ),
        /* @__PURE__ */ e(
          Z.div,
          {
            style: {
              height: "100%",
              width: "50%",
              backgroundColor: a,
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
  ) }) : /* @__PURE__ */ e(we, { children: /* @__PURE__ */ e(
    Z.div,
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
            backgroundColor: u ? a : "transparent",
            color: h,
            padding: "1.5rem 2rem",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            minWidth: "180px"
          },
          children: [
            r === "circular" ? /* @__PURE__ */ e(ye, { name: "crescent", color: "light" }) : /* @__PURE__ */ e("div", { style: { display: "flex", gap: "0.5rem" }, children: [...Array(3)].map((l, m) => /* @__PURE__ */ e(
              Z.div,
              {
                style: {
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: h
                },
                animate: { y: ["0%", "-50%", "0%"] },
                transition: {
                  repeat: 1 / 0,
                  duration: 0.6,
                  delay: m * 0.2
                }
              },
              m
            )) }),
            i && /* @__PURE__ */ e("span", { style: { fontSize: "14px", fontWeight: 500, textAlign: "center" }, children: o })
          ]
        }
      )
    }
  ) }) : null;
}, Vr = ({
  content: t,
  children: o,
  color: n = "light",
  placement: r = "top",
  trigger: u = "hover",
  stopPropagation: i = !1,
  tooltipStyle: a = {}
}) => {
  const [h, l] = G(!1), { main: m, contrast: c } = W(n), b = {
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
      onClick: (z) => {
        u === "click" && (i && z.stopPropagation(), l(!h));
      },
      children: [
        o,
        /* @__PURE__ */ e(we, { children: h && /* @__PURE__ */ e(
          Z.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { duration: 0.2 },
            style: {
              ...b[r],
              position: "absolute",
              backgroundColor: m,
              color: c,
              padding: "0.4rem 0.8rem",
              borderRadius: "8px",
              whiteSpace: "normal",
              // agora quebra linha
              fontSize: "0.875rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              zIndex: 9999,
              ...a
              // aplica estilos customizados
            },
            children: t
          }
        ) })
      ]
    }
  );
}, Zt = {
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
}, Kt = {
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
}, Ut = {
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
}, Gt = {
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
}, Qt = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6"
}, Xt = {
  0: "gap-x-0",
  1: "gap-x-1",
  2: "gap-x-2",
  3: "gap-x-3",
  4: "gap-x-4",
  5: "gap-x-5",
  6: "gap-x-6"
}, Jt = {
  0: "gap-y-0",
  1: "gap-y-1",
  2: "gap-y-2",
  3: "gap-y-3",
  4: "gap-y-4",
  5: "gap-y-5",
  6: "gap-y-6"
};
function Wr({ children: t, gap: o = 4, gapX: n, gapY: r, className: u }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: E(
        "grid grid-cols-1 md:grid-cols-12",
        n ? Xt[n] : Qt[o],
        r ? Jt[r] : void 0,
        u
      ),
      children: t
    }
  );
}
const qr = ({
  label: t,
  value: o,
  placeholder: n = "",
  rows: r = 4,
  error: u,
  disabled: i = !1,
  color: a = "neutral",
  onChangeValue: h,
  fill: l = "outline",
  maxLength: m,
  radius: c = "md",
  ...b
}) => {
  const { main: k } = W(a), { main: Y } = W("danger"), [B, z] = G(!1), [g, M] = G(!1);
  ae(() => {
    M(!!o);
  }, [o]);
  const $ = u ? Y : B || g ? k : "var(--cb-color-border)", f = {
    none: "0px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px"
  }, y = m ? m - o.length : void 0, L = y !== void 0 && y < 0;
  return /* @__PURE__ */ I("div", { className: "relative flex flex-col", style: { minHeight: 72 }, children: [
    t && /* @__PURE__ */ e("label", { className: "text-xs font-medium pl-6", children: t }),
    /* @__PURE__ */ e(
      Mt,
      {
        ...b,
        value: o,
        placeholder: n,
        rows: r,
        fill: l,
        disabled: i,
        labelPlacement: "stacked",
        maxlength: m,
        style: {
          "--border-color": $,
          "--highlight-color-focused": k,
          "--border-radius": f[c],
          color: "var(--cb-color-dark)"
        },
        className: E(
          "text-sm resize-none focus:outline-none",
          i && "opacity-60 cursor-not-allowed"
        ),
        onIonFocus: () => z(!0),
        onIonBlur: () => z(!1),
        onIonInput: (N) => h(N.detail.value ?? "")
      }
    ),
    /* @__PURE__ */ I("div", { className: "flex justify-between mt-1", children: [
      /* @__PURE__ */ e(ve, { className: "text-[12px] pl-6 text-(--cb-color-danger)", children: u }),
      m && /* @__PURE__ */ I(
        ve,
        {
          className: E(
            "text-[12px] pr-6",
            L ? "text-(--cb-color-danger)" : "text-gray-500"
          ),
          children: [
            y,
            " caractere",
            y === 1 ? "" : "s",
            " restantes"
          ]
        }
      )
    ] })
  ] });
}, Zr = ({
  label: t,
  checked: o,
  disabled: n = !1,
  type: r = "checkbox",
  onChange: u,
  color: i = "primary",
  labelPlacement: a = "start",
  styleDiv: h
}) => {
  const { main: l, contrast: m } = W(i);
  if (r === "switch")
    return /* @__PURE__ */ e("div", { className: `w-auto ${h}`, children: /* @__PURE__ */ e(
      nt,
      {
        checked: o,
        disabled: n,
        color: i,
        labelPlacement: a,
        onIonChange: (c) => u(c.detail.checked),
        style: {
          "--background-checked": l,
          // fundo quando ativo
          "--handle-background-checked": m
          // cor do "pino" quando ativo
        },
        children: t
      }
    ) });
  if (r === "radio")
    return /* @__PURE__ */ e("div", { className: `w-auto ${h}`, children: /* @__PURE__ */ e(
      Re,
      {
        value: o ? "selected" : "unselected",
        onIonChange: (c) => u(c.detail.value === "selected"),
        className: "flex items-center gap-2",
        children: /* @__PURE__ */ e(
          ze,
          {
            value: "selected",
            color: i,
            disabled: n,
            labelPlacement: a,
            className: "flex-1",
            style: {
              "--background-checked": l,
              "--border-color": l,
              "--border-color-checked": l,
              "--mark-color": m
              // cor do ponto central
            },
            children: t && /* @__PURE__ */ e("span", { children: t })
          }
        )
      }
    ) });
  if (r === "checkbox")
    return /* @__PURE__ */ e("div", { className: `w-auto ${h}`, children: /* @__PURE__ */ e(
      $t,
      {
        checked: o,
        disabled: n,
        color: i,
        labelPlacement: a,
        onIonChange: (c) => u(c.detail.checked),
        style: {
          "--border-color": l,
          // borda normal
          "--background-checked": l,
          // fundo quando marcado
          "--border-color-checked": l,
          // borda quando marcado
          "--checkmark-color": m
          // cor do check
        },
        children: t && /* @__PURE__ */ e("span", { className: "ml-2", children: t })
      }
    ) });
}, Kr = ({
  tooltip: t,
  icon: o = st,
  onClick: n,
  recording: r,
  loading: u = !1,
  showCancel: i = !1,
  onCancel: a,
  cancelIcon: h = Fe,
  disabled: l = !1,
  className: m,
  color: c = "primary"
}) => {
  const [b, k] = G(!0), [Y, B] = G(!0), { main: z, contrast: g } = W(c);
  return ae(() => {
    const M = setTimeout(() => {
      k(!1), setTimeout(() => {
        B(!1);
      }, 800);
    }, 3e3);
    return () => clearTimeout(M);
  }, []), /* @__PURE__ */ e("div", { style: { position: "relative" }, children: /* @__PURE__ */ e(we, { mode: "wait", children: /* @__PURE__ */ I(
    Z.div,
    {
      className: `fixed bottom-24 right-2 z-1000 flex-center ${m} `,
      animate: b ? { width: 250, height: 55 } : { width: 55, height: 55 },
      transition: { duration: 0.8, ease: "easeInOut" },
      children: [
        /* @__PURE__ */ I(ot, { vertical: "bottom", horizontal: "end", slot: "fixed", children: [
          /* @__PURE__ */ e(
            He,
            {
              onClick: n,
              disabled: l || u,
              style: {
                "--box-shadow": !b && "none",
                "--background": z,
                "--color": g
              },
              children: u ? /* @__PURE__ */ e(
                ye,
                {
                  name: "crescent",
                  className: "text-(--cb-color-text-fixed)"
                }
              ) : Oe.createElement(o, { className: "text-[26px]" })
            }
          ),
          i && a && /* @__PURE__ */ e(
            Z.div,
            {
              className: "absolute bottom-17.5 right-3 pointer-events-none",
              animate: r ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: 10, pointerEvents: "none" },
              transition: { duration: 0.3 },
              children: /* @__PURE__ */ e(
                He,
                {
                  color: "danger",
                  className: "w-8.75 h-8.75",
                  onClick: a,
                  children: Oe.createElement(h, {
                    className: "text-[22px]"
                  })
                }
              )
            }
          )
        ] }),
        t && Y && /* @__PURE__ */ e(
          Z.div,
          {
            className: "absolute right-2.5 bottom-2 pr-13 h-14.5 overflow-hidden rounded-full flex items-center justify-center",
            style: { backgroundColor: z, color: g },
            initial: { width: 0, opacity: 0, filter: "blur(4px)" },
            animate: b ? { width: "auto", opacity: 1, filter: "blur(0px)" } : { width: 0, opacity: 0, filter: "blur(4px)" },
            transition: { duration: 0.5, ease: "easeOut" },
            children: /* @__PURE__ */ e(
              Z.div,
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
}, er = ({
  label: t,
  value: o,
  disabled: n = !1,
  color: r = "primary",
  labelPlacement: u = "end",
  onClick: i,
  className: a,
  style: h
}) => {
  const { main: l, contrast: m } = W(r);
  return /* @__PURE__ */ I(
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
        ${a ?? ""}
      `,
      style: h,
      children: [
        u === "start" && /* @__PURE__ */ e("span", { children: t }),
        /* @__PURE__ */ e(
          ze,
          {
            value: o,
            disabled: n,
            color: r,
            style: {
              "--color": l,
              "--color-checked": l,
              "--mark-color": m
            }
          }
        ),
        u === "end" && /* @__PURE__ */ e("span", { children: t })
      ]
    }
  );
}, it = ht(
  null
);
function ct() {
  const t = pt(it);
  if (!t)
    throw new Error("useCBStepper must be used inside a CBStepperProvider.");
  return t;
}
const tr = ({
  steps: t,
  color: o = "primary",
  className: n,
  classNameContent: r,
  style: u,
  showButtonNext: i = !0,
  showButtonPrev: a = !0,
  nextLabel: h = "Próximo",
  prevLabel: l = "Voltar",
  disableNext: m,
  disablePrev: c,
  theme: b
}) => {
  const { activeIndex: k, next: Y, prev: B, canNext: z, canPrev: g } = ct(), { main: M, contrast: $ } = W(o), f = b?.stepper, y = f?.circle?.background ?? M, L = f?.circle?.text ?? $, N = f?.line ?? M;
  return /* @__PURE__ */ I("div", { className: `flex flex-col gap-4 ${n ?? ""}`, style: u, children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-between w-full relative", children: t.map((A, R) => {
      const T = R === k, w = R < k;
      return /* @__PURE__ */ I(
        "div",
        {
          className: "flex-1 relative flex flex-col items-center",
          children: [
            /* @__PURE__ */ I("div", { className: "relative flex items-center justify-center w-full", children: [
              R < t.length - 1 && /* @__PURE__ */ I(
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
                      Z.div,
                      {
                        style: {
                          position: "absolute",
                          inset: 0,
                          background: N,
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
                Z.div,
                {
                  className: "w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 cursor-pointer shrink-0",
                  initial: !1,
                  animate: {
                    backgroundColor: T || w ? y : "#ffffff",
                    borderColor: T || w ? y : "#d1d5db",
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
                  children: A.icon ?? R + 1
                }
              )
            ] }),
            /* @__PURE__ */ e(
              "span",
              {
                className: "text-sm text-center mt-2",
                style: { color: f?.titleColor },
                children: A.title
              }
            )
          ]
        },
        R
      );
    }) }),
    /* @__PURE__ */ e("div", { className: r, children: t.map((A, R) => /* @__PURE__ */ e(
      "div",
      {
        style: { display: R === k ? "block" : "none" },
        children: A.content
      },
      R
    )) }),
    /* @__PURE__ */ I("div", { className: "flex justify-between w-full mt-2", children: [
      a && /* @__PURE__ */ e(
        Be,
        {
          disabled: c ? c(k) : !g,
          onClick: B,
          iconStart: /* @__PURE__ */ e(At, {}),
          children: typeof l == "function" ? l(k, t.length) : l,
          color: o,
          variant: f?.button?.prev?.variant ?? "solid",
          backgroundColor: f?.button?.prev?.background,
          textColor: f?.button?.prev?.text,
          borderColor: f?.button?.prev?.border,
          hoverColor: f?.button?.prev?.hover,
          rounded: f?.button?.prev?.rounded,
          activeColor: f?.button?.prev?.active
        }
      ),
      i && /* @__PURE__ */ e(
        Be,
        {
          disabled: m ? m(k) : !z,
          onClick: Y,
          iconEnd: /* @__PURE__ */ e(Rt, {}),
          children: typeof h == "function" ? h(k, t.length) : h,
          color: o,
          variant: f?.button?.next?.variant ?? "solid",
          backgroundColor: f?.button?.next?.background,
          textColor: f?.button?.next?.text,
          borderColor: f?.button?.next?.border,
          hoverColor: f?.button?.next?.hover,
          rounded: f?.button?.next?.rounded,
          activeColor: f?.button?.next?.active
        }
      )
    ] })
  ] });
}, rr = ({
  steps: t,
  color: o = "primary",
  className: n,
  classNameContent: r,
  style: u,
  showButtonNext: i = !0,
  showButtonPrev: a = !0,
  nextLabel: h = "Próximo",
  prevLabel: l = "Voltar",
  disableNext: m,
  disablePrev: c,
  theme: b
}) => {
  const { activeIndex: k, next: Y, prev: B, canNext: z, canPrev: g } = ct(), { main: M, contrast: $ } = W(o), f = b?.stepper, y = f?.circle?.background ?? M, L = f?.circle?.text ?? $, N = f?.line ?? M, A = f?.titleColor ?? "#111827";
  return /* @__PURE__ */ e("div", { className: `flex flex-col gap-4 ${n ?? ""}`, style: u, children: t.map((R, T) => {
    const w = T === k, x = T < k;
    return /* @__PURE__ */ I("div", { className: "relative flex items-start gap-4", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-col items-center relative", children: /* @__PURE__ */ e(
        Z.div,
        {
          className: "w-10 h-10 rounded-full border-2 flex items-center justify-center cursor-pointer z-10",
          style: {
            backgroundColor: w || x ? y : "#ffffff",
            color: w || x ? L : "#6b7280",
            borderColor: w || x ? y : "#d1d5db"
          },
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.95 },
          children: R.icon ?? T + 1
        }
      ) }),
      T !== t.length - 1 && /* @__PURE__ */ e(
        Z.div,
        {
          style: {
            width: 2,
            backgroundColor: w || x ? N : "#d1d5db",
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
            style: { color: A },
            children: R.title
          }
        ),
        /* @__PURE__ */ I(
          Z.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: {
              height: w ? "auto" : 0,
              opacity: w ? 1 : 0
            },
            transition: { duration: 0.4, ease: "easeInOut" },
            className: "overflow-hidden mt-1",
            children: [
              /* @__PURE__ */ e("div", { className: `mb-2 ${r}`, children: R.content }),
              /* @__PURE__ */ I("div", { className: "flex w-full mt-2 pb-2", children: [
                i && /* @__PURE__ */ e(
                  Be,
                  {
                    disabled: m ? m(k) : !z,
                    onClick: Y,
                    children: typeof h == "function" ? h(k, t.length) : h,
                    color: o,
                    className: "text-[12px]! mr-2",
                    variant: f?.button?.next?.variant ?? "solid",
                    backgroundColor: f?.button?.next?.background,
                    textColor: f?.button?.next?.text,
                    borderColor: f?.button?.next?.border,
                    hoverColor: f?.button?.next?.hover,
                    rounded: f?.button?.next?.rounded,
                    activeColor: f?.button?.next?.active
                  }
                ),
                a && /* @__PURE__ */ e(
                  Be,
                  {
                    disabled: c ? c(k) : !g,
                    onClick: B,
                    children: typeof l == "function" ? l(k, t.length) : l,
                    color: o,
                    variant: f?.button?.prev?.variant ?? "clear",
                    className: "text-[12px]!",
                    backgroundColor: f?.button?.prev?.background,
                    textColor: f?.button?.prev?.text,
                    borderColor: f?.button?.prev?.border,
                    hoverColor: f?.button?.prev?.hover,
                    rounded: f?.button?.prev?.rounded,
                    activeColor: f?.button?.prev?.active
                  }
                )
              ] })
            ]
          }
        )
      ] })
    ] }, T);
  }) });
}, nr = ({
  children: t,
  initialStep: o = 0,
  totalSteps: n,
  onNext: r,
  onPrev: u
}) => {
  const [i, a] = G(o);
  ae(() => {
    a(o);
  }, [o]);
  const h = ce(async () => i >= n - 1 || r && await r(i) === !1 ? !1 : (a((b) => b + 1), !0), [i, n, r]), l = ce(async () => i <= 0 || u && await u(i) === !1 ? !1 : (a((b) => b - 1), !0), [i, u]), m = ce(() => {
    a(o);
  }, [o]), c = Le(
    () => ({
      activeIndex: i,
      totalSteps: n,
      next: h,
      prev: l,
      reset: m,
      canNext: i < n - 1,
      canPrev: i > 0,
      isFirst: i === 0,
      isLast: i === n - 1
    }),
    [i, n, h, l, m]
  );
  return /* @__PURE__ */ e(it.Provider, { value: c, children: t });
}, Ur = ({
  steps: t,
  variant: o = "tabs",
  initialStep: n = 0,
  orientation: r = "horizontal",
  color: u = "primary",
  className: i,
  style: a,
  classNameContent: h,
  showButtonPrev: l = !0,
  showButtonNext: m = !0,
  nextLabel: c,
  prevLabel: b,
  disableNext: k,
  disablePrev: Y,
  onNext: B,
  onPrev: z,
  onTabChange: g,
  theme: M
}) => {
  const [$, f] = G(n);
  if (o === "tabs") {
    const y = M?.tabs;
    return /* @__PURE__ */ I("div", { style: a, children: [
      /* @__PURE__ */ e(
        Dt,
        {
          scrollable: y?.segment?.scrollable,
          value: $.toString(),
          onIonChange: (L) => {
            const N = L.detail.value;
            if (N != null) {
              const A = parseInt(N.toString(), 10);
              f(A), g?.(A);
            }
          },
          style: {
            background: y?.segment?.background,
            borderRadius: y?.segment?.borderRadius,
            padding: y?.segment?.padding,
            border: y?.segment?.border
          },
          className: `w-full ${i} ${y?.segment?.hideIndicator ? "cb-tabs-no-indicator" : ""}`,
          children: t.map((L, N) => {
            const A = N === $;
            return /* @__PURE__ */ e(
              Nt,
              {
                value: N.toString(),
                style: {
                  background: A ? y?.button?.activeBackground : y?.button?.background,
                  color: A ? y?.button?.activeText : y?.button?.text,
                  border: y?.button?.border,
                  borderRadius: y?.button?.rounded !== !1 ? "9999px" : void 0
                },
                children: /* @__PURE__ */ e(Pe, { children: L.title })
              },
              N
            );
          })
        }
      ),
      /* @__PURE__ */ e("div", { className: h ?? "p-4", children: t[$].content })
    ] });
  }
  if (o === "accordion") {
    const y = M?.accordion;
    return /* @__PURE__ */ e(
      It,
      {
        value: $.toString(),
        onIonChange: (L) => {
          f(parseInt(L.detail.value ?? "-1", 10));
        },
        className: `${i ?? ""} ${y?.indicator?.hide ? "cb-acc-no-indicator" : ""}`,
        style: a,
        children: t.map((L, N) => /* @__PURE__ */ I(
          Yt,
          {
            value: N.toString(),
            children: [
              /* @__PURE__ */ e(
                St,
                {
                  slot: "header",
                  style: {
                    background: y?.header?.background,
                    color: y?.header?.color,
                    border: y?.header?.border,
                    borderRadius: y?.header?.borderRadius,
                    padding: y?.header?.padding,
                    "--ripple-color": "transparent"
                  },
                  children: /* @__PURE__ */ e(Pe, { children: L.title })
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  slot: "content",
                  style: {
                    background: y?.content?.background,
                    color: y?.content?.color,
                    padding: y?.content?.padding ?? "16px"
                  },
                  children: L.content
                }
              )
            ]
          },
          N
        ))
      }
    );
  }
  if (o === "stepper") {
    const y = {
      steps: t,
      initialStep: n,
      color: u,
      className: i,
      style: a,
      classNameContent: h,
      showButtonPrev: l,
      showButtonNext: m,
      nextLabel: c,
      prevLabel: b,
      disableNext: k,
      disablePrev: Y,
      onNext: B,
      onPrev: z,
      theme: M
    };
    return /* @__PURE__ */ e(
      nr,
      {
        initialStep: n,
        totalSteps: t.length,
        onNext: B,
        onPrev: z,
        children: r === "horizontal" ? /* @__PURE__ */ e(tr, { ...y }) : /* @__PURE__ */ e(rr, { ...y })
      }
    );
  }
  return null;
};
var Ne = { exports: {} }, or = Ne.exports, We;
function lt() {
  return We || (We = 1, (function(t, o) {
    (function(n, r) {
      t.exports = r();
    })(or, (function() {
      var n = 1e3, r = 6e4, u = 36e5, i = "millisecond", a = "second", h = "minute", l = "hour", m = "day", c = "week", b = "month", k = "quarter", Y = "year", B = "date", z = "Invalid Date", g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, M = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(v) {
        var s = ["th", "st", "nd", "rd"], d = v % 100;
        return "[" + v + (s[(d - 20) % 10] || s[d] || s[0]) + "]";
      } }, f = function(v, s, d) {
        var C = String(v);
        return !C || C.length >= s ? v : "" + Array(s + 1 - C.length).join(d) + v;
      }, y = { s: f, z: function(v) {
        var s = -v.utcOffset(), d = Math.abs(s), C = Math.floor(d / 60), p = d % 60;
        return (s <= 0 ? "+" : "-") + f(C, 2, "0") + ":" + f(p, 2, "0");
      }, m: function v(s, d) {
        if (s.date() < d.date()) return -v(d, s);
        var C = 12 * (d.year() - s.year()) + (d.month() - s.month()), p = s.clone().add(C, b), D = d - p < 0, _ = s.clone().add(C + (D ? -1 : 1), b);
        return +(-(C + (d - p) / (D ? p - _ : _ - p)) || 0);
      }, a: function(v) {
        return v < 0 ? Math.ceil(v) || 0 : Math.floor(v);
      }, p: function(v) {
        return { M: b, y: Y, w: c, d: m, D: B, h: l, m: h, s: a, ms: i, Q: k }[v] || String(v || "").toLowerCase().replace(/s$/, "");
      }, u: function(v) {
        return v === void 0;
      } }, L = "en", N = {};
      N[L] = $;
      var A = "$isDayjsObject", R = function(v) {
        return v instanceof S || !(!v || !v[A]);
      }, T = function v(s, d, C) {
        var p;
        if (!s) return L;
        if (typeof s == "string") {
          var D = s.toLowerCase();
          N[D] && (p = D), d && (N[D] = d, p = D);
          var _ = s.split("-");
          if (!p && _.length > 1) return v(_[0]);
        } else {
          var O = s.name;
          N[O] = s, p = O;
        }
        return !C && p && (L = p), p || !C && L;
      }, w = function(v, s) {
        if (R(v)) return v.clone();
        var d = typeof s == "object" ? s : {};
        return d.date = v, d.args = arguments, new S(d);
      }, x = y;
      x.l = T, x.i = R, x.w = function(v, s) {
        return w(v, { locale: s.$L, utc: s.$u, x: s.$x, $offset: s.$offset });
      };
      var S = (function() {
        function v(d) {
          this.$L = T(d.locale, null, !0), this.parse(d), this.$x = this.$x || d.x || {}, this[A] = !0;
        }
        var s = v.prototype;
        return s.parse = function(d) {
          this.$d = (function(C) {
            var p = C.date, D = C.utc;
            if (p === null) return /* @__PURE__ */ new Date(NaN);
            if (x.u(p)) return /* @__PURE__ */ new Date();
            if (p instanceof Date) return new Date(p);
            if (typeof p == "string" && !/Z$/i.test(p)) {
              var _ = p.match(g);
              if (_) {
                var O = _[2] - 1 || 0, F = (_[7] || "0").substring(0, 3);
                return D ? new Date(Date.UTC(_[1], O, _[3] || 1, _[4] || 0, _[5] || 0, _[6] || 0, F)) : new Date(_[1], O, _[3] || 1, _[4] || 0, _[5] || 0, _[6] || 0, F);
              }
            }
            return new Date(p);
          })(d), this.init();
        }, s.init = function() {
          var d = this.$d;
          this.$y = d.getFullYear(), this.$M = d.getMonth(), this.$D = d.getDate(), this.$W = d.getDay(), this.$H = d.getHours(), this.$m = d.getMinutes(), this.$s = d.getSeconds(), this.$ms = d.getMilliseconds();
        }, s.$utils = function() {
          return x;
        }, s.isValid = function() {
          return this.$d.toString() !== z;
        }, s.isSame = function(d, C) {
          var p = w(d);
          return this.startOf(C) <= p && p <= this.endOf(C);
        }, s.isAfter = function(d, C) {
          return w(d) < this.startOf(C);
        }, s.isBefore = function(d, C) {
          return this.endOf(C) < w(d);
        }, s.$g = function(d, C, p) {
          return x.u(d) ? this[C] : this.set(p, d);
        }, s.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, s.valueOf = function() {
          return this.$d.getTime();
        }, s.startOf = function(d, C) {
          var p = this, D = !!x.u(C) || C, _ = x.p(d), O = function(U, V) {
            var ee = x.w(p.$u ? Date.UTC(p.$y, V, U) : new Date(p.$y, V, U), p);
            return D ? ee : ee.endOf(m);
          }, F = function(U, V) {
            return x.w(p.toDate()[U].apply(p.toDate("s"), (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(V)), p);
          }, P = this.$W, K = this.$M, Q = this.$D, re = "set" + (this.$u ? "UTC" : "");
          switch (_) {
            case Y:
              return D ? O(1, 0) : O(31, 11);
            case b:
              return D ? O(1, K) : O(0, K + 1);
            case c:
              var te = this.$locale().weekStart || 0, q = (P < te ? P + 7 : P) - te;
              return O(D ? Q - q : Q + (6 - q), K);
            case m:
            case B:
              return F(re + "Hours", 0);
            case l:
              return F(re + "Minutes", 1);
            case h:
              return F(re + "Seconds", 2);
            case a:
              return F(re + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, s.endOf = function(d) {
          return this.startOf(d, !1);
        }, s.$set = function(d, C) {
          var p, D = x.p(d), _ = "set" + (this.$u ? "UTC" : ""), O = (p = {}, p[m] = _ + "Date", p[B] = _ + "Date", p[b] = _ + "Month", p[Y] = _ + "FullYear", p[l] = _ + "Hours", p[h] = _ + "Minutes", p[a] = _ + "Seconds", p[i] = _ + "Milliseconds", p)[D], F = D === m ? this.$D + (C - this.$W) : C;
          if (D === b || D === Y) {
            var P = this.clone().set(B, 1);
            P.$d[O](F), P.init(), this.$d = P.set(B, Math.min(this.$D, P.daysInMonth())).$d;
          } else O && this.$d[O](F);
          return this.init(), this;
        }, s.set = function(d, C) {
          return this.clone().$set(d, C);
        }, s.get = function(d) {
          return this[x.p(d)]();
        }, s.add = function(d, C) {
          var p, D = this;
          d = Number(d);
          var _ = x.p(C), O = function(K) {
            var Q = w(D);
            return x.w(Q.date(Q.date() + Math.round(K * d)), D);
          };
          if (_ === b) return this.set(b, this.$M + d);
          if (_ === Y) return this.set(Y, this.$y + d);
          if (_ === m) return O(1);
          if (_ === c) return O(7);
          var F = (p = {}, p[h] = r, p[l] = u, p[a] = n, p)[_] || 1, P = this.$d.getTime() + d * F;
          return x.w(P, this);
        }, s.subtract = function(d, C) {
          return this.add(-1 * d, C);
        }, s.format = function(d) {
          var C = this, p = this.$locale();
          if (!this.isValid()) return p.invalidDate || z;
          var D = d || "YYYY-MM-DDTHH:mm:ssZ", _ = x.z(this), O = this.$H, F = this.$m, P = this.$M, K = p.weekdays, Q = p.months, re = p.meridiem, te = function(V, ee, X, se) {
            return V && (V[ee] || V(C, D)) || X[ee].slice(0, se);
          }, q = function(V) {
            return x.s(O % 12 || 12, V, "0");
          }, U = re || function(V, ee, X) {
            var se = V < 12 ? "AM" : "PM";
            return X ? se.toLowerCase() : se;
          };
          return D.replace(M, (function(V, ee) {
            return ee || (function(X) {
              switch (X) {
                case "YY":
                  return String(C.$y).slice(-2);
                case "YYYY":
                  return x.s(C.$y, 4, "0");
                case "M":
                  return P + 1;
                case "MM":
                  return x.s(P + 1, 2, "0");
                case "MMM":
                  return te(p.monthsShort, P, Q, 3);
                case "MMMM":
                  return te(Q, P);
                case "D":
                  return C.$D;
                case "DD":
                  return x.s(C.$D, 2, "0");
                case "d":
                  return String(C.$W);
                case "dd":
                  return te(p.weekdaysMin, C.$W, K, 2);
                case "ddd":
                  return te(p.weekdaysShort, C.$W, K, 3);
                case "dddd":
                  return K[C.$W];
                case "H":
                  return String(O);
                case "HH":
                  return x.s(O, 2, "0");
                case "h":
                  return q(1);
                case "hh":
                  return q(2);
                case "a":
                  return U(O, F, !0);
                case "A":
                  return U(O, F, !1);
                case "m":
                  return String(F);
                case "mm":
                  return x.s(F, 2, "0");
                case "s":
                  return String(C.$s);
                case "ss":
                  return x.s(C.$s, 2, "0");
                case "SSS":
                  return x.s(C.$ms, 3, "0");
                case "Z":
                  return _;
              }
              return null;
            })(V) || _.replace(":", "");
          }));
        }, s.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, s.diff = function(d, C, p) {
          var D, _ = this, O = x.p(C), F = w(d), P = (F.utcOffset() - this.utcOffset()) * r, K = this - F, Q = function() {
            return x.m(_, F);
          };
          switch (O) {
            case Y:
              D = Q() / 12;
              break;
            case b:
              D = Q();
              break;
            case k:
              D = Q() / 3;
              break;
            case c:
              D = (K - P) / 6048e5;
              break;
            case m:
              D = (K - P) / 864e5;
              break;
            case l:
              D = K / u;
              break;
            case h:
              D = K / r;
              break;
            case a:
              D = K / n;
              break;
            default:
              D = K;
          }
          return p ? D : x.a(D);
        }, s.daysInMonth = function() {
          return this.endOf(b).$D;
        }, s.$locale = function() {
          return N[this.$L];
        }, s.locale = function(d, C) {
          if (!d) return this.$L;
          var p = this.clone(), D = T(d, C, !0);
          return D && (p.$L = D), p;
        }, s.clone = function() {
          return x.w(this.$d, this);
        }, s.toDate = function() {
          return new Date(this.valueOf());
        }, s.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, s.toISOString = function() {
          return this.$d.toISOString();
        }, s.toString = function() {
          return this.$d.toUTCString();
        }, v;
      })(), j = S.prototype;
      return w.prototype = j, [["$ms", i], ["$s", a], ["$m", h], ["$H", l], ["$W", m], ["$M", b], ["$y", Y], ["$D", B]].forEach((function(v) {
        j[v[1]] = function(s) {
          return this.$g(s, v[0], v[1]);
        };
      })), w.extend = function(v, s) {
        return v.$i || (v(s, S, w), v.$i = !0), w;
      }, w.locale = T, w.isDayjs = R, w.unix = function(v) {
        return w(1e3 * v);
      }, w.en = N[L], w.Ls = N, w.p = {}, w;
    }));
  })(Ne)), Ne.exports;
}
var ar = lt();
const le = /* @__PURE__ */ Ee(ar);
var Ie = { exports: {} }, sr = Ie.exports, qe;
function ir() {
  return qe || (qe = 1, (function(t, o) {
    (function(n, r) {
      t.exports = r(lt());
    })(sr, (function(n) {
      function r(a) {
        return a && typeof a == "object" && "default" in a ? a : { default: a };
      }
      var u = r(n), i = { name: "pt-br", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(a) {
        return a + "º";
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
      return u.default.locale(i, null, !0), i;
    }));
  })(Ie)), Ie.exports;
}
ir();
function cr(t) {
  return me({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "rect", attr: { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" } }, { tag: "line", attr: { x1: "16", x2: "16", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "8", x2: "8", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "3", x2: "21", y1: "10", y2: "10" } }] })(t);
}
var Ye = { exports: {} }, lr = Ye.exports, Ze;
function dr() {
  return Ze || (Ze = 1, (function(t, o) {
    (function(n, r) {
      t.exports = r();
    })(lr, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(r, u, i) {
        var a = u.prototype, h = a.format;
        i.en.formats = n, a.format = function(l) {
          l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
          var m = this.$locale().formats, c = (function(b, k) {
            return b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(Y, B, z) {
              var g = z && z.toUpperCase();
              return B || k[z] || n[z] || k[g].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(M, $, f) {
                return $ || f.slice(1);
              }));
            }));
          })(l, m === void 0 ? {} : m);
          return h.call(this, c);
        };
      };
    }));
  })(Ye)), Ye.exports;
}
var ur = dr();
const mr = /* @__PURE__ */ Ee(ur);
var Se = { exports: {} }, fr = Se.exports, Ke;
function hr() {
  return Ke || (Ke = 1, (function(t, o) {
    (function(n, r) {
      t.exports = r();
    })(fr, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, u = /\d/, i = /\d\d/, a = /\d\d?/, h = /\d*[^-_:/,()\s\d]+/, l = {}, m = function(g) {
        return (g = +g) + (g > 68 ? 1900 : 2e3);
      }, c = function(g) {
        return function(M) {
          this[g] = +M;
        };
      }, b = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
        (this.zone || (this.zone = {})).offset = (function(M) {
          if (!M || M === "Z") return 0;
          var $ = M.match(/([+-]|\d\d)/g), f = 60 * $[1] + (+$[2] || 0);
          return f === 0 ? 0 : $[0] === "+" ? -f : f;
        })(g);
      }], k = function(g) {
        var M = l[g];
        return M && (M.indexOf ? M : M.s.concat(M.f));
      }, Y = function(g, M) {
        var $, f = l.meridiem;
        if (f) {
          for (var y = 1; y <= 24; y += 1) if (g.indexOf(f(y, 0, M)) > -1) {
            $ = y > 12;
            break;
          }
        } else $ = g === (M ? "pm" : "PM");
        return $;
      }, B = { A: [h, function(g) {
        this.afternoon = Y(g, !1);
      }], a: [h, function(g) {
        this.afternoon = Y(g, !0);
      }], Q: [u, function(g) {
        this.month = 3 * (g - 1) + 1;
      }], S: [u, function(g) {
        this.milliseconds = 100 * +g;
      }], SS: [i, function(g) {
        this.milliseconds = 10 * +g;
      }], SSS: [/\d{3}/, function(g) {
        this.milliseconds = +g;
      }], s: [a, c("seconds")], ss: [a, c("seconds")], m: [a, c("minutes")], mm: [a, c("minutes")], H: [a, c("hours")], h: [a, c("hours")], HH: [a, c("hours")], hh: [a, c("hours")], D: [a, c("day")], DD: [i, c("day")], Do: [h, function(g) {
        var M = l.ordinal, $ = g.match(/\d+/);
        if (this.day = $[0], M) for (var f = 1; f <= 31; f += 1) M(f).replace(/\[|\]/g, "") === g && (this.day = f);
      }], w: [a, c("week")], ww: [i, c("week")], M: [a, c("month")], MM: [i, c("month")], MMM: [h, function(g) {
        var M = k("months"), $ = (k("monthsShort") || M.map((function(f) {
          return f.slice(0, 3);
        }))).indexOf(g) + 1;
        if ($ < 1) throw new Error();
        this.month = $ % 12 || $;
      }], MMMM: [h, function(g) {
        var M = k("months").indexOf(g) + 1;
        if (M < 1) throw new Error();
        this.month = M % 12 || M;
      }], Y: [/[+-]?\d+/, c("year")], YY: [i, function(g) {
        this.year = m(g);
      }], YYYY: [/\d{4}/, c("year")], Z: b, ZZ: b };
      function z(g) {
        var M, $;
        M = g, $ = l && l.formats;
        for (var f = (g = M.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(w, x, S) {
          var j = S && S.toUpperCase();
          return x || $[S] || n[S] || $[j].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(v, s, d) {
            return s || d.slice(1);
          }));
        }))).match(r), y = f.length, L = 0; L < y; L += 1) {
          var N = f[L], A = B[N], R = A && A[0], T = A && A[1];
          f[L] = T ? { regex: R, parser: T } : N.replace(/^\[|\]$/g, "");
        }
        return function(w) {
          for (var x = {}, S = 0, j = 0; S < y; S += 1) {
            var v = f[S];
            if (typeof v == "string") j += v.length;
            else {
              var s = v.regex, d = v.parser, C = w.slice(j), p = s.exec(C)[0];
              d.call(x, p), w = w.replace(p, "");
            }
          }
          return (function(D) {
            var _ = D.afternoon;
            if (_ !== void 0) {
              var O = D.hours;
              _ ? O < 12 && (D.hours += 12) : O === 12 && (D.hours = 0), delete D.afternoon;
            }
          })(x), x;
        };
      }
      return function(g, M, $) {
        $.p.customParseFormat = !0, g && g.parseTwoDigitYear && (m = g.parseTwoDigitYear);
        var f = M.prototype, y = f.parse;
        f.parse = function(L) {
          var N = L.date, A = L.utc, R = L.args;
          this.$u = A;
          var T = R[1];
          if (typeof T == "string") {
            var w = R[2] === !0, x = R[3] === !0, S = w || x, j = R[2];
            x && (j = R[2]), l = this.$locale(), !w && j && (l = $.Ls[j]), this.$d = (function(C, p, D, _) {
              try {
                if (["x", "X"].indexOf(p) > -1) return new Date((p === "X" ? 1e3 : 1) * C);
                var O = z(p)(C), F = O.year, P = O.month, K = O.day, Q = O.hours, re = O.minutes, te = O.seconds, q = O.milliseconds, U = O.zone, V = O.week, ee = /* @__PURE__ */ new Date(), X = K || (F || P ? 1 : ee.getDate()), se = F || ee.getFullYear(), he = 0;
                F && !P || (he = P > 0 ? P - 1 : ee.getMonth());
                var ne, Ce = Q || 0, de = re || 0, ue = te || 0, H = q || 0;
                return U ? new Date(Date.UTC(se, he, X, Ce, de, ue, H + 60 * U.offset * 1e3)) : D ? new Date(Date.UTC(se, he, X, Ce, de, ue, H)) : (ne = new Date(se, he, X, Ce, de, ue, H), V && (ne = _(ne).week(V).toDate()), ne);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(N, T, A, $), this.init(), j && j !== !0 && (this.$L = this.locale(j).$L), S && N != this.format(T) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
          } else if (T instanceof Array) for (var v = T.length, s = 1; s <= v; s += 1) {
            R[1] = T[s - 1];
            var d = $.apply(this, R);
            if (d.isValid()) {
              this.$d = d.$d, this.$L = d.$L, this.init();
              break;
            }
            s === v && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else y.call(this, L);
        };
      };
    }));
  })(Se)), Se.exports;
}
var pr = hr();
const gr = /* @__PURE__ */ Ee(pr);
le.locale("pt-br");
le.extend(gr);
le.extend(mr);
const Ue = (t) => t ? "toDate" in t ? t.toDate() : t : null, br = {
  none: "0px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  full: "9999px"
}, Gr = ({
  value: t,
  onChange: o,
  label: n,
  format: r = "date",
  disabled: u,
  errorText: i,
  placeholder: a = "Selecionar data",
  minDate: h,
  maxDate: l,
  classNameInput: m,
  classNameContainer: c,
  withCalendar: b = !1,
  radius: k = "md",
  color: Y = "neutral",
  pickerMode: B = "modal"
}) => {
  const { main: z, contrast: g } = W(Y), { main: M } = W("danger"), [$, f] = G(!1), [y, L] = G(!1), [N, A] = G(
    t ? le(Ue(t)).format("YYYY-MM-DDTHH:mm") : ""
  );
  ae(() => {
    A(
      t ? le(Ue(t)).format("YYYY-MM-DDTHH:mm") : ""
    );
  }, [t]);
  const R = () => {
    if (!N) return "";
    const s = le(N);
    switch (r) {
      case "month-year":
        return s.format("MMM/YYYY");
      case "MMMM/YYYY":
        return s.format("MMMM/YYYY");
      case "datetime":
        return s.format("DD/MM/YYYY HH:mm");
      case "day":
        return s.format("DD");
      default:
        return s.format("DD/MM/YYYY");
    }
  }, T = () => {
    N && (o(le(N).toDate()), f(!1), L(!1));
  }, w = (s, d) => typeof d == "number" ? le().add(d, "years").format("YYYY-MM-DD") : d ?? s.format("YYYY-MM-DD"), x = ce(() => {
    u || (A(N || le().format("YYYY-MM-DDTHH:mm")), L(!0), f(!0));
  }, [u, N]), S = () => {
    f(!1), L(!1);
  }, v = i ? M : y || !!N ? z : "var(--cb-color-border)";
  return /* @__PURE__ */ I(
    "div",
    {
      className: `relative flex flex-col h-18 pt-2 mb-3! ${c ?? ""}`,
      children: [
        /* @__PURE__ */ I("div", { className: "relative flex items-center w-full", onClick: x, children: [
          /* @__PURE__ */ e(
            at,
            {
              readonly: !0,
              value: R(),
              label: n,
              placeholder: a,
              disabled: u,
              fill: "outline",
              shape: "round",
              labelPlacement: "stacked",
              "aria-invalid": !!i,
              style: {
                "--border-color": v,
                "--highlight-color-focused": z,
                "--border-radius": br[k],
                color: g ?? "var(--cb-text-primary)"
              },
              className: m
            }
          ),
          b && /* @__PURE__ */ e(cr, { className: "absolute right-4 text-[20px] text-gray-500 hover:text-blue-600 transition-colors cursor-pointer pointer-events-none" })
        ] }),
        i && /* @__PURE__ */ e(
          ve,
          {
            role: "alert",
            className: "text-[12px] pl-6! text-(--cb-color-danger)",
            children: i
          }
        ),
        B === "modal" && /* @__PURE__ */ e(
          Ae,
          {
            isOpen: $,
            onDidDismiss: S,
            className: "custom-calendar-modal",
            children: /* @__PURE__ */ I("div", { className: "p-4 bg-(--cb-surface) rounded-lg shadow-lg", children: [
              /* @__PURE__ */ e(
                Ve,
                {
                  locale: "pt-BR",
                  value: N,
                  min: w(
                    le().subtract(10, "years").startOf("year"),
                    h
                  ),
                  style: {
                    "--background": "var(--cb-surface)",
                    "--background-rgb": "var(--cb-surface-rgb)",
                    "--color": "var(--cb-text-primary)",
                    "--ion-color-base-rgb": "var(--cb-color-base-rgb)"
                  },
                  max: w(le().add(50, "years").endOf("year"), l),
                  presentation: r === "month-year" || r === "MMMM/YYYY" ? "month-year" : r === "datetime" ? "date-time" : "date",
                  onIonChange: (s) => A(s.detail.value),
                  showDefaultButtons: !1
                }
              ),
              /* @__PURE__ */ I("div", { className: "flex justify-end mt-4 gap-2", children: [
                /* @__PURE__ */ e(_e, { color: "medium", onClick: S, children: "Cancelar" }),
                /* @__PURE__ */ e(_e, { onClick: T, children: "Confirmar" })
              ] })
            ] })
          }
        ),
        B === "dropdown" && $ && /* @__PURE__ */ e("div", { className: "absolute picker-modal z-50 mt-16 bg-(--cb-surface) rounded-lg shadow-lg p-3", children: /* @__PURE__ */ e(
          Ve,
          {
            locale: "pt-BR",
            value: N,
            min: w(
              le().subtract(10, "years").startOf("year"),
              h
            ),
            style: {
              "--background": "var(--cb-surface)",
              "--background-rgb": "var(--cb-surface-rgb)",
              "--color": "var(--cb-text-primary)"
            },
            max: w(le().add(50, "years").endOf("year"), l),
            presentation: r === "month-year" || r === "MMMM/YYYY" ? "month-year" : r === "datetime" ? "date-time" : "date",
            onIonChange: (s) => {
              A(s.detail.value), T();
            },
            className: "calendar-days-of-week",
            showDefaultButtons: !1
          }
        ) })
      ]
    }
  );
}, Qr = ({
  label: t,
  checked: o,
  disabled: n = !1,
  onChange: r,
  color: u = "primary",
  labelPlacement: i = "end",
  className: a,
  style: h
}) => {
  const { main: l, contrast: m } = W(u);
  return /* @__PURE__ */ e("div", { className: `flex items-center ${a ?? ""}`, style: h, children: /* @__PURE__ */ e(
    nt,
    {
      checked: o,
      disabled: n,
      labelPlacement: i,
      onIonChange: (c) => r(c.detail.checked),
      style: {
        "--track-background": "#d1d5db",
        "--track-background-checked": l,
        "--handle-background": "#ffffff",
        "--handle-background-checked": m
      },
      children: t
    }
  ) });
};
function Xr({
  children: t,
  sm: o,
  md: n = 12,
  lg: r,
  xl: u,
  className: i
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: E(
        o && Zt[o],
        Kt[n],
        r && Ut[r],
        u && Gt[u],
        i
      ),
      children: t
    }
  );
}
const Jr = ({
  value: t,
  options: o,
  onChange: n,
  color: r = "primary",
  direction: u = "column",
  labelPlacement: i = "end",
  className: a,
  style: h
}) => /* @__PURE__ */ e(
  Re,
  {
    value: t,
    onIonChange: (l) => n(l.detail.value),
    className: `
        flex
        ${u === "row" ? "flex-row gap-5" : "flex-col gap-3"}
        ${a ?? ""}
      `,
    style: h,
    children: o.map((l) => /* @__PURE__ */ e(
      er,
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
), Ge = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  6: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
};
function en({
  items: t,
  value: o,
  onValueChange: n,
  getLabel: r,
  getValue: u,
  getDescription: i,
  columns: a = 2,
  disabled: h = !1,
  label: l,
  error: m,
  helperText: c,
  color: b = "primary",
  radioPlacement: k = "end",
  renderIcon: Y,
  renderExtra: B,
  className: z,
  cardClassName: g,
  style: M
}) {
  const $ = Qe(), { main: f, contrast: y } = W(b), { main: L } = W("danger"), N = (w) => {
    if (o == null) return !1;
    const x = u(w);
    if (o === w || o === x) return !0;
    if (typeof o == "object" && o !== null)
      try {
        if (u(o) === x) return !0;
      } catch {
      }
    return !1;
  }, A = t.find(N), R = A ? String(u(A)) : o != null ? String(o) : void 0, T = (w) => {
    (typeof h == "function" ? h(w) : h) || n?.(w);
  };
  return /* @__PURE__ */ I("div", { className: E("w-full mb-3", z), style: M, children: [
    l && /* @__PURE__ */ e(
      "label",
      {
        id: `${$}-label`,
        className: "block text-sm font-medium text-(--text-primary,var(--cb-text-primary,#111827)) mb-2",
        children: l
      }
    ),
    /* @__PURE__ */ e(
      Re,
      {
        value: R,
        onIonChange: (w) => {
          const x = w.detail.value;
          if (x != null) {
            const S = t.find(
              (j) => String(u(j)) === String(x)
            );
            S && T(S);
          }
        },
        className: E(
          "grid gap-3 sm:gap-4",
          Ge[a] || Ge[2]
        ),
        "aria-labelledby": l ? `${$}-label` : void 0,
        children: t.map((w) => {
          const x = String(u(w)), S = N(w), j = typeof h == "function" ? h(w) : h, v = r(w), s = i?.(w), d = Y?.(w, S), C = B?.(w, S), p = typeof g == "function" ? g(w, S) : g;
          return /* @__PURE__ */ I(
            "div",
            {
              role: "radio",
              "aria-checked": S,
              "aria-disabled": j,
              tabIndex: j ? -1 : 0,
              onClick: () => T(w),
              onKeyDown: (D) => {
                (D.key === " " || D.key === "Enter") && (D.preventDefault(), T(w));
              },
              style: {
                borderColor: S ? m ? L : f : void 0
              },
              className: E(
                // Layout base e transições
                "relative flex flex-col justify-between p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer select-none outline-none",
                // Estado Inativo
                !S && !j && "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-xs hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md hover:-translate-y-0.5",
                // Estado Ativo / Selecionado
                S && !j && [
                  "border-2 shadow-sm",
                  "bg-blue-50/60 dark:bg-blue-950/20",
                  m ? "border-red-500" : ""
                ],
                // Foco visível por acessibilidade (teclado)
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-offset-gray-900",
                // Estado Desabilitado
                j && "opacity-50 cursor-not-allowed pointer-events-none border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30",
                p
              ),
              children: [
                /* @__PURE__ */ I("div", { className: "flex items-start justify-between gap-3 w-full", children: [
                  /* @__PURE__ */ I("div", { className: "flex items-start gap-2.5 flex-1 min-w-0", children: [
                    k === "start" && /* @__PURE__ */ e("div", { className: "mt-0.5 shrink-0 pointer-events-none", children: /* @__PURE__ */ e(
                      ze,
                      {
                        value: x,
                        disabled: j,
                        color: b,
                        "aria-label": v,
                        style: {
                          "--color": "var(--cb-color-border, #cbd5e1)",
                          "--color-checked": m ? L : f,
                          "--mark-color": y
                        }
                      }
                    ) }),
                    d && /* @__PURE__ */ e("div", { className: "shrink-0 text-xl text-(--cb-color-primary) mt-0.5", children: d }),
                    /* @__PURE__ */ I("div", { className: "flex flex-col flex-1 min-w-0", children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: E(
                            "text-base font-semibold tracking-tight transition-colors truncate",
                            S ? "text-(--cb-color-primary) font-bold" : "text-(--text-primary,var(--cb-text-primary,#111827))"
                          ),
                          children: v
                        }
                      ),
                      s && /* @__PURE__ */ e("div", { className: "mt-1 text-sm text-(--text-secondary,var(--cb-text-secondary,#6b7280)) leading-relaxed", children: s })
                    ] })
                  ] }),
                  k === "end" && /* @__PURE__ */ e("div", { className: "mt-0.5 shrink-0 pointer-events-none", children: /* @__PURE__ */ e(
                    ze,
                    {
                      value: x,
                      disabled: j,
                      color: b,
                      "aria-label": v,
                      style: {
                        "--color": "var(--cb-color-border, #cbd5e1)",
                        "--color-checked": m ? L : f,
                        "--mark-color": y
                      }
                    }
                  ) })
                ] }),
                C && /* @__PURE__ */ e("div", { className: "mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/80 w-full text-xs", children: C })
              ]
            },
            x
          );
        })
      }
    ),
    (m || c) && /* @__PURE__ */ e(
      ve,
      {
        role: "alert",
        className: E(
          "block mt-1.5 text-[12px] pl-1",
          m ? "text-(--cb-color-danger,text-red-500)" : "text-(--cb-color-secondary,text-gray-500)"
        ),
        children: m ?? c
      }
    )
  ] });
}
const xr = {
  small: {
    item: "min-h-8 text-xs gap-1.5",
    itemTop: "text-[11px] gap-1",
    padding: "6px 14px",
    paddingTop: "8px 14px",
    icon: "text-sm",
    track: "p-0.5",
    badge: "min-w-4 h-4 px-1 text-[10px]"
  },
  medium: {
    item: "min-h-10 text-sm gap-2",
    itemTop: "text-xs gap-1.5",
    padding: "8px 20px",
    paddingTop: "10px 20px",
    icon: "text-base",
    track: "p-1",
    badge: "min-w-5 h-5 px-1.5 text-[11px]"
  },
  large: {
    item: "min-h-12 text-base gap-2.5",
    itemTop: "text-sm gap-1.5",
    padding: "10px 24px",
    paddingTop: "12px 24px",
    icon: "text-lg",
    track: "p-1",
    badge: "min-w-5 h-5 px-1.5 text-xs"
  }
}, vr = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "999px"
}, xe = (t) => typeof t == "object" && t !== null && "value" in t, yr = (t) => xe(t) ? t.value : t, wr = (t) => xe(t) ? t.label : String(t);
function tn({
  items: t,
  value: o,
  defaultValue: n,
  onValueChange: r,
  getLabel: u = wr,
  getValue: i = yr,
  renderIcon: a,
  renderBadge: h,
  getColor: l,
  disabled: m = !1,
  variant: c = "soft",
  size: b = "medium",
  color: k = "primary",
  rounded: Y = "lg",
  fullWidth: B = "mobile",
  iconPlacement: z = "start",
  scrollable: g = !1,
  animated: M = !0,
  label: $,
  helperText: f,
  error: y,
  "aria-label": L,
  trackColor: N,
  indicatorColor: A,
  textColor: R,
  activeTextColor: T,
  className: w,
  trackClassName: x,
  itemClassName: S,
  indicatorClassName: j,
  style: v
}) {
  const s = Qe(), { main: d, contrast: C } = W(k), { main: p } = W("danger"), D = ge([]), _ = o !== void 0, [O, F] = G(n ?? null), Q = ((H) => {
    if (H != null)
      return String(typeof H == "object" ? i(H) : H);
  })(_ ? o : O), re = t.findIndex(
    (H) => String(i(H)) === Q
  ), te = (H) => typeof m == "function" ? m(H) : m ? !0 : xe(H) ? !!H.disabled : !1, q = (H) => {
    te(H) || (_ || F(H), r?.(H));
  };
  ae(() => {
    !g || re < 0 || D.current[re]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest"
    });
  }, [g, re]);
  const U = (H, pe) => {
    const J = t.map((fe, be) => ({ item: fe, i: be })).filter(({ item: fe }) => !te(fe));
    if (!J.length) return;
    const oe = J.findIndex(({ i: fe }) => fe === pe);
    let ie;
    switch (H.key) {
      case "ArrowRight":
      case "ArrowDown":
        ie = J[(oe + 1) % J.length].i;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        ie = J[(oe - 1 + J.length) % J.length].i;
        break;
      case "Home":
        ie = J[0].i;
        break;
      case "End":
        ie = J[J.length - 1].i;
        break;
      default:
        return;
    }
    H.preventDefault(), D.current[ie]?.focus(), q(t[ie]);
  }, V = (H) => `color-mix(in srgb, var(--cb-text-secondary, #6b7280) ${H}%, transparent)`, ee = (H, pe) => {
    const J = (ie) => `color-mix(in srgb, ${H} ${ie}%, transparent)`;
    return {
      soft: {
        track: V(12),
        indicator: "rgb(var(--cb-surface-rgb, 255, 255, 255))",
        text: "var(--cb-text-secondary, #6b7280)",
        active: "var(--cb-text-primary, #111827)",
        hover: V(8),
        border: "transparent"
      },
      solid: {
        track: V(12),
        indicator: H,
        text: "var(--cb-text-secondary, #6b7280)",
        active: pe,
        hover: J(10),
        border: "transparent"
      },
      outline: {
        track: "transparent",
        indicator: J(12),
        text: "var(--cb-text-secondary, #6b7280)",
        active: H,
        hover: J(6),
        border: "color-mix(in srgb, var(--cb-color-border, #b8bdc7) 70%, transparent)"
      },
      underline: {
        track: "transparent",
        indicator: H,
        text: "var(--cb-text-secondary, #6b7280)",
        active: H,
        hover: J(6),
        border: "color-mix(in srgb, var(--cb-color-border, #b8bdc7) 50%, transparent)"
      },
      pills: {
        track: "transparent",
        indicator: H,
        text: "var(--cb-text-secondary, #6b7280)",
        active: pe,
        hover: V(18),
        border: "transparent"
      }
    }[c];
  }, X = ee(d, C), se = vr[Y] ?? Y, he = c === "underline", ne = c === "pills", Ce = {
    "--cb-segment-track-bg": N ?? X.track,
    "--cb-segment-indicator-bg": A ?? X.indicator,
    "--cb-segment-text": R ?? X.text,
    "--cb-segment-text-active": T ?? X.active,
    "--cb-segment-hover-bg": X.hover,
    "--cb-segment-border": y ? p : X.border,
    "--cb-segment-radius": se,
    "--cb-segment-item-radius": ne ? se : `max(0px, calc(${se} - 4px))`,
    "--cb-segment-pill-bg": V(10),
    ...v
  }, de = xr[b], ue = B === !0 ? "full" : B === "mobile" ? "mobile" : "none";
  return /* @__PURE__ */ I(
    "div",
    {
      className: E(
        "flex flex-col",
        ue === "full" && "w-full",
        ue === "mobile" && "w-full sm:w-auto",
        w
      ),
      style: Ce,
      children: [
        $ && /* @__PURE__ */ e(
          "span",
          {
            id: `${s}-label`,
            className: "block text-sm font-medium text-(--cb-text-primary,#111827) mb-2",
            children: $
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            role: "radiogroup",
            "aria-labelledby": $ ? `${s}-label` : void 0,
            "aria-label": $ ? void 0 : L,
            "aria-invalid": !!y || void 0,
            className: E(
              "relative flex items-stretch",
              ue === "full" && "w-full",
              ue === "mobile" && "w-full sm:w-auto sm:inline-flex",
              ue === "none" && "inline-flex",
              g && "overflow-x-auto overscroll-x-contain scrollbar-none [&::-webkit-scrollbar]:hidden",
              ne ? ["gap-2", !g && "flex-wrap"] : he ? "gap-1 border-b border-(--cb-segment-border)" : [
                de.track,
                "gap-0.5 [background:var(--cb-segment-track-bg)] rounded-(--cb-segment-radius)",
                (c === "outline" || y) && "border border-(--cb-segment-border)"
              ],
              x
            ),
            children: t.map((H, pe) => {
              const J = String(i(H)), oe = J === Q, ie = te(H), fe = a?.(H, oe) ?? (xe(H) ? H.icon : void 0), be = h?.(H, oe) ?? (xe(H) ? H.badge : void 0), Te = l?.(H) ?? (xe(H) ? H.color : void 0), Me = Te ? zt(Te) : { main: d, contrast: C }, $e = Te ? ee(Me.main, Me.contrast) : void 0, dt = typeof S == "function" ? S(H, oe) : S, ut = t.findIndex((ke) => !te(ke)), mt = ie ? -1 : re >= 0 ? oe ? 0 : -1 : pe === ut ? 0 : -1;
              return /* @__PURE__ */ I(
                "button",
                {
                  ref: (ke) => {
                    D.current[pe] = ke;
                  },
                  type: "button",
                  role: "radio",
                  "aria-checked": oe,
                  "aria-disabled": ie || void 0,
                  disabled: ie,
                  tabIndex: mt,
                  onClick: () => q(H),
                  onKeyDown: (ke) => U(ke, pe),
                  style: {
                    padding: z === "top" ? de.paddingTop : de.padding,
                    borderRadius: he ? "var(--cb-segment-item-radius) var(--cb-segment-item-radius) 0 0" : "var(--cb-segment-item-radius)",
                    lineHeight: 1.25,
                    // Cor própria do item sobrescreve os tokens do grupo
                    ...$e && {
                      "--cb-segment-indicator-bg": A ?? $e.indicator,
                      "--cb-segment-text-active": T ?? $e.active,
                      ...!ne && {
                        "--cb-segment-hover-bg": $e.hover
                      }
                    }
                  },
                  className: E(
                    "group relative isolate flex items-center justify-center whitespace-nowrap select-none outline-none",
                    "font-medium transition-colors duration-200 cursor-pointer",
                    "focus-visible:ring-2 focus-visible:ring-(--cb-color-primary) focus-visible:ring-offset-1 focus-visible:ring-offset-transparent",
                    z === "top" ? ["flex-col", de.itemTop] : de.item,
                    (ue === "full" || ue === "mobile") && (ne ? "flex-auto" : "flex-1"),
                    ue === "mobile" && "sm:flex-none",
                    ne && !oe && "bg-(--cb-segment-pill-bg)",
                    g && "shrink-0 flex-none",
                    he && "-mb-px",
                    oe ? "text-(--cb-segment-text-active) font-semibold" : "text-(--cb-segment-text) hover:text-(--cb-text-primary,#111827)",
                    !oe && !ie && "hover:bg-(--cb-segment-hover-bg)",
                    ie && "opacity-40 cursor-not-allowed",
                    dt
                  ),
                  children: [
                    oe && /* @__PURE__ */ e(
                      Z.span,
                      {
                        "aria-hidden": !0,
                        layoutId: M ? `cb-segment-indicator-${s}` : void 0,
                        transition: {
                          type: "spring",
                          stiffness: 500,
                          damping: 38,
                          mass: 0.8
                        },
                        className: E(
                          "absolute -z-10 [background:var(--cb-segment-indicator-bg)]",
                          he ? "inset-x-0 bottom-0 h-0.5 rounded-full" : "inset-0 rounded-(--cb-segment-item-radius)",
                          c === "soft" && "shadow-[0_1px_2px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.4)] ring-1 ring-black/5 dark:ring-white/5",
                          c === "solid" && "shadow-sm",
                          ne && "shadow-[0_1px_2px_rgba(15,23,42,0.12),0_2px_6px_-1px_color-mix(in_srgb,var(--cb-segment-indicator-bg)_35%,transparent)]",
                          c === "outline" && "ring-1 ring-inset ring-[color-mix(in_srgb,currentColor_35%,transparent)]",
                          j
                        )
                      }
                    ),
                    fe && z !== "end" && /* @__PURE__ */ e(
                      "span",
                      {
                        className: E(
                          "inline-flex shrink-0 transition-transform duration-200 group-active:scale-90",
                          de.icon
                        ),
                        children: fe
                      }
                    ),
                    /* @__PURE__ */ e("span", { className: "truncate", children: u(H) }),
                    fe && z === "end" && /* @__PURE__ */ e(
                      "span",
                      {
                        className: E(
                          "inline-flex shrink-0 transition-transform duration-200 group-active:scale-90",
                          de.icon
                        ),
                        children: fe
                      }
                    ),
                    be != null && be !== !1 && /* @__PURE__ */ e(
                      "span",
                      {
                        className: E(
                          "inline-flex items-center justify-center rounded-full font-semibold leading-none tabular-nums transition-colors duration-200",
                          de.badge,
                          z === "top" && "absolute top-1 right-1"
                        ),
                        style: {
                          background: oe ? c === "solid" || ne ? "color-mix(in srgb, currentColor 22%, transparent)" : Me.main : ne ? "rgb(var(--cb-surface-rgb, 255, 255, 255))" : V(18),
                          color: oe ? c === "solid" || ne ? "inherit" : Me.contrast : ne ? "var(--cb-text-primary, #111827)" : "inherit"
                        },
                        children: be
                      }
                    )
                  ]
                },
                J
              );
            })
          }
        ),
        (y || f) && /* @__PURE__ */ e(
          "span",
          {
            role: y ? "alert" : void 0,
            className: E(
              "block mt-1.5 text-[12px] pl-1",
              y ? "text-(--cb-color-danger,#dc2626)" : "text-(--cb-text-secondary,#6b7280)"
            ),
            children: y ?? f
          }
        )
      ]
    }
  );
}
const rn = ({
  icon: t = st,
  onClick: o,
  loading: n = !1,
  disabled: r = !1,
  color: u = "primary",
  className: i
}) => {
  const { main: a, contrast: h } = W(u);
  return /* @__PURE__ */ e("div", { className: "relative w-full left-1/2 ", children: /* @__PURE__ */ e(
    Z.div,
    {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { type: "spring", stiffness: 120, damping: 15 },
      className: `fixed bottom-[40px]  z-50 ${i}`,
      children: /* @__PURE__ */ e(ot, { vertical: "bottom", horizontal: "center", slot: "fixed", children: /* @__PURE__ */ e(
        He,
        {
          onClick: o,
          disabled: r || n,
          style: { "--box-shadow": "none", "--background": a, "--color": h },
          children: n ? /* @__PURE__ */ e(ye, { name: "crescent", color: h.includes("light") ? "light" : "dark" }) : Oe.createElement(t, { className: "text-[28px]" })
        }
      ) })
    }
  ) });
}, Cr = ({
  isEmpty: t = !0,
  children: o,
  messages: n,
  title: r,
  icon: u,
  buttonLabel: i,
  onButtonClick: a,
  color: h = "primary",
  colorBg: l = "#ecececbe",
  theme: m = {}
}) => {
  if (!t)
    return /* @__PURE__ */ e(ft, { children: o });
  const { main: c } = W(h), b = Le(() => {
    const k = n || ["Nenhum dado encontrado"], Y = Math.floor(Math.random() * k.length);
    return k[Y];
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
        ...m.container
      },
      children: /* @__PURE__ */ I(
        Z.div,
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
            ...m.card
          },
          children: [
            u,
            r && /* @__PURE__ */ e(
              "div",
              {
                style: {
                  fontWeight: 600,
                  marginBottom: 4,
                  ...m.title
                },
                children: r
              }
            ),
            /* @__PURE__ */ e("div", { style: m.message, children: b }),
            i && a && /* @__PURE__ */ e(
              "button",
              {
                onClick: a,
                style: {
                  marginTop: 12,
                  padding: "6px 12px",
                  borderRadius: 6,
                  border: "none",
                  backgroundColor: c,
                  color: "#fff",
                  cursor: "pointer",
                  ...m.button
                },
                children: i
              }
            )
          ]
        }
      )
    }
  );
}, kr = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M250.26 166.05 256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 367.91a20 20 0 1 1 20-20 20 20 0 0 1-20 20'/></svg>", Mr = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='m112 184 144 144 144-144' stroke-linecap='round' stroke-linejoin='round' stroke-width='48px' class='ionicon-fill-none'/></svg>", $r = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48m75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z'/></svg>", Dr = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M338.29 338.29 448 448' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
function Nr(t, o) {
  const n = ge(t), r = ge(null);
  ae(() => {
    n.current = t;
  }, [t]), ae(() => () => {
    r.current && clearTimeout(r.current);
  }, []);
  const u = ce(() => {
    r.current && (clearTimeout(r.current), r.current = null);
  }, []);
  return { debounced: ce(
    (...a) => {
      u(), r.current = setTimeout(() => {
        n.current(...a);
      }, o);
    },
    [u, o]
  ), cancel: u };
}
function Ir({
  items: t,
  getLabel: o,
  onSearch: n,
  debounce: r = 500,
  minSearchLength: u = 2,
  value: i
}) {
  const a = typeof n == "function", [h, l] = G(i ? o(i) : ""), [m, c] = G([]), [b, k] = G("idle"), [Y, B] = G(!1), [z, g] = G(-1), M = ge(/* @__PURE__ */ new Map()), $ = ge(0);
  ae(() => {
    l(i ? o(i) : "");
  }, [i]), ae(() => {
    g(-1);
  }, [m]);
  const f = ce(
    async (x) => {
      const S = x.trim().toLowerCase(), j = M.current.get(S);
      if (j) {
        c(j), k(j.length === 0 ? "empty" : "results");
        return;
      }
      const v = ++$.current;
      k("loading");
      try {
        const s = await n(x);
        if (v !== $.current) return;
        M.current.set(S, s), c(s), k(s.length === 0 ? "empty" : "results");
      } catch {
        if (v !== $.current) return;
        c([]), k("error");
      }
    },
    [n]
  ), { debounced: y, cancel: L } = Nr(f, r), N = ce(
    (x) => {
      const S = t ?? [], j = x.trim().toLowerCase();
      if (!j) {
        c(S), k(S.length === 0 ? "empty" : "results");
        return;
      }
      const v = S.filter(
        (s) => o(s).toLowerCase().includes(j)
      );
      c(v), k(v.length === 0 ? "empty" : "results");
    },
    [t, o]
  );
  ae(() => {
    a || N(h);
  }, [t]);
  const A = ce(
    (x) => {
      if (l(x), B(!0), a) {
        if (x.trim().length < u) {
          L(), $.current++, c([]), k("idle");
          return;
        }
        y(x);
      } else
        N(x);
    },
    [
      a,
      u,
      y,
      L,
      N
    ]
  ), R = ce(() => {
    if (B(!0), !a) {
      N(h);
      return;
    }
    b === "idle" && h.trim().length >= u && y(h);
  }, [
    a,
    N,
    h,
    b,
    u,
    y
  ]), T = ce(() => {
    B(!1), g(-1);
  }, []), w = ce(() => {
    M.current.clear();
  }, []);
  return {
    query: h,
    setQuery: l,
    results: m,
    status: b,
    isOpen: Y,
    setIsOpen: B,
    highlightedIndex: z,
    setHighlightedIndex: g,
    handleQueryChange: A,
    openWithCurrentItems: R,
    close: T,
    clearCache: w,
    isRemote: a
  };
}
function Yr(t, o, n = !0) {
  ae(() => {
    if (!n) return;
    function r(u) {
      const i = u.target;
      t.some((h) => !!h.current && h.current.contains(i)) || o();
    }
    return document.addEventListener("mousedown", r), document.addEventListener("touchstart", r), () => {
      document.removeEventListener("mousedown", r), document.removeEventListener("touchstart", r);
    };
  }, [t, o, n]);
}
const Sr = {
  none: "0px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  full: "9999px"
};
function nn({
  label: t,
  value: o = null,
  items: n,
  getLabel: r,
  getValue: u,
  onValueChange: i,
  onSearch: a,
  placeholder: h = "Pesquisar...",
  helperText: l,
  error: m,
  loading: c = !1,
  disabled: b = !1,
  debounce: k = 500,
  minSearchLength: Y = 2,
  color: B = "neutral",
  radius: z = "md",
  noResultsText: g = "Nenhum resultado encontrado",
  clearable: M = !0
}) {
  const $ = ge(null), f = ge(null), y = ge(null), [L, N] = G(!1), { main: A } = W(B), { main: R } = W("danger"), {
    query: T,
    setQuery: w,
    results: x,
    status: S,
    isOpen: j,
    highlightedIndex: v,
    setHighlightedIndex: s,
    handleQueryChange: d,
    openWithCurrentItems: C,
    close: p
  } = Ir({
    items: n,
    getLabel: r,
    onSearch: a,
    debounce: k,
    minSearchLength: Y,
    value: o
  });
  Yr([$], p, j);
  const D = S === "loading" || c, _ = T.length > 0, O = m ? R : L || _ ? A : "var(--cb-color-border)", F = Le(
    () => ({
      "--border-color": O,
      "--highlight-color-focused": A,
      "--border-radius": Sr[z],
      "--icon-color": O,
      "--color": "var(--cb-color-dark)",
      "--placeholder-color": "var(--cb-color-border)"
    }),
    [O, A, z]
  ), P = ce(
    (q) => {
      w(r(q)), i?.(q), p();
    },
    [r, i, p, w]
  ), K = ce(() => {
    d(""), f.current?.setFocus();
  }, [d]), Q = (q) => {
    d(String(q.detail.value ?? ""));
  }, re = (q) => {
    if (!b)
      switch (q.key) {
        case "ArrowDown": {
          if (q.preventDefault(), !j) {
            C();
            return;
          }
          s(
            (U) => U + 1 >= x.length ? 0 : U + 1
          );
          break;
        }
        case "ArrowUp": {
          if (q.preventDefault(), !j) {
            C();
            return;
          }
          s(
            (U) => U - 1 < 0 ? x.length - 1 : U - 1
          );
          break;
        }
        case "Enter": {
          j && v >= 0 && x[v] && (q.preventDefault(), P(x[v]));
          break;
        }
        case "Escape": {
          j && (q.preventDefault(), p());
          break;
        }
        case "Tab": {
          p();
          break;
        }
      }
  };
  ae(() => {
    if (v < 0 || !y.current) return;
    y.current.children[v]?.scrollIntoView({ block: "nearest" });
  }, [v]);
  const te = !!a && T.trim().length < Y;
  return /* @__PURE__ */ I(
    "div",
    {
      ref: $,
      className: "relative flex flex-col pt-2 mb-3 h-18 ",
      onKeyDown: re,
      children: [
        /* @__PURE__ */ I("div", { className: "relative", children: [
          /* @__PURE__ */ e(
            at,
            {
              ref: f,
              label: t,
              labelPlacement: "stacked",
              placeholder: h,
              fill: "outline",
              shape: "round",
              mode: "md",
              value: T,
              disabled: b,
              autocomplete: "off",
              style: F,
              onIonFocus: () => {
                N(!0), C();
              },
              onIonBlur: () => N(!1),
              onIonInput: Q,
              children: /* @__PURE__ */ I("div", { slot: "end", className: "flex items-center gap-1 pr-1", children: [
                D && /* @__PURE__ */ e(
                  ye,
                  {
                    name: "crescent",
                    style: { width: 18, height: 18, color: A }
                  }
                ),
                !D && M && _ && !b && /* @__PURE__ */ e(
                  De,
                  {
                    icon: $r,
                    className: "cursor-pointer text-[18px]",
                    style: { color: "var(--cb-color-border)" },
                    onClick: K
                  }
                ),
                !D && /* @__PURE__ */ e(
                  De,
                  {
                    icon: Mr,
                    className: "text-[16px] transition-transform duration-150",
                    style: {
                      color: O,
                      transform: j ? "rotate(180deg)" : "rotate(0deg)"
                    }
                  }
                )
              ] })
            }
          ),
          j && !b && /* @__PURE__ */ I(
            "ul",
            {
              ref: y,
              role: "listbox",
              className: "absolute left-0 right-0 top-full bg-(--cb-surface-elevated) mt-1.5 max-h-64 overflow-y-auto custom-scroll border p-1.5 z-50 transition-all duration-150",
              style: {
                borderRadius: "8px",
                borderColor: "var(--cb-color-border)"
              },
              children: [
                S === "error" && /* @__PURE__ */ I(
                  "li",
                  {
                    className: "flex items-center justify-center gap-2 px-3 py-4 text-xs font-medium rounded-lg",
                    style: {
                      color: R
                    },
                    children: [
                      /* @__PURE__ */ e(De, { icon: kr, className: "text-base" }),
                      /* @__PURE__ */ e("span", { children: "Erro ao buscar resultados." })
                    ]
                  }
                ),
                S === "loading" && x.length === 0 && /* @__PURE__ */ I(
                  "li",
                  {
                    className: "flex items-center justify-center gap-2 px-3 py-4 text-xs",
                    style: { color: "var(--cb-text-secondary)" },
                    children: [
                      /* @__PURE__ */ e(
                        ye,
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
                S !== "error" && S !== "loading" && x.length === 0 && /* @__PURE__ */ I(
                  "li",
                  {
                    className: "flex flex-col items-center justify-center gap-1 px-3 py-5 text-center text-xs",
                    style: { color: "var(--cb-text-secondary)" },
                    children: [
                      /* @__PURE__ */ e(
                        De,
                        {
                          icon: Dr,
                          className: "text-lg opacity-60"
                        }
                      ),
                      /* @__PURE__ */ e("span", { children: te ? `Digite ao menos ${Y} caracteres` : g })
                    ]
                  }
                ),
                x.map((q, U) => {
                  const V = u(q), ee = U === v, X = o != null && u(o) === V;
                  return /* @__PURE__ */ e(
                    "li",
                    {
                      role: "option",
                      "aria-selected": X,
                      className: `relative flex items-center justify-between px-3 py-2.5 my-0.5 text-xs sm:text-sm rounded-lg cursor-pointer select-none transition-all duration-150 ${X ? "font-semibold" : "font-normal"}`,
                      style: {
                        backgroundColor: ee ? "rgba(156, 163, 175, 0.15)" : "transparent",
                        color: "var(--cb-text-primary)"
                      },
                      onMouseDown: (se) => se.preventDefault(),
                      onMouseEnter: () => s(U),
                      onClick: () => P(q),
                      children: /* @__PURE__ */ e("span", { className: "truncate", children: r(q) })
                    },
                    String(V)
                  );
                })
              ]
            }
          )
        ] }),
        (m || l) && /* @__PURE__ */ e(
          ve,
          {
            role: "alert",
            className: `pl-6! text-[12px] ${m ? "text-(--cb-color-danger)" : "text-(--cb-color-secondary)"}`,
            children: m ?? l
          }
        )
      ]
    }
  );
}
const on = ({
  data: t,
  isLoading: o = !1,
  error: n = null,
  emptyTitle: r = "Nada encontrado",
  emptyMessages: u,
  emptyIcon: i,
  onRetry: a,
  children: h,
  minHeight: l = "250px",
  loadingLabel: m = "Carregando...",
  theme: c = {}
}) => {
  const [b, k] = G(o || t == null);
  ae(() => {
    let g;
    return o || t === void 0 || t === null ? k(!0) : g = setTimeout(() => k(!1), 150), () => clearTimeout(g);
  }, [o, t]);
  const Y = o || b, B = !Y && !n && (!t || t.length === 0), z = !Y && !n && !B;
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
        ...c.container
      },
      children: [
        Y && /* @__PURE__ */ I(
          Z.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 },
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              ...c.loading
            },
            children: [
              /* @__PURE__ */ e(ye, { name: "crescent" }),
              /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    marginTop: 10,
                    color: "#666",
                    ...c.loadingLabel
                  },
                  children: m
                }
              )
            ]
          }
        ),
        !Y && n && /* @__PURE__ */ I(
          Z.div,
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
              ...c.error
            },
            children: [
              /* @__PURE__ */ e(Ot, { size: 32 }),
              /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    fontWeight: 600,
                    marginTop: 6,
                    marginBottom: 10,
                    ...c.errorTitle
                  },
                  children: "Erro ao carregar os dados"
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    marginBottom: 12,
                    ...c.errorMessage
                  },
                  children: n
                }
              ),
              a && /* @__PURE__ */ e(
                "button",
                {
                  onClick: a,
                  style: {
                    padding: "6px 12px",
                    backgroundColor: "#b00020",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                    ...c.retryButton
                  },
                  children: "Tentar novamente"
                }
              )
            ]
          }
        ),
        !Y && B && /* @__PURE__ */ e(
          Cr,
          {
            title: r,
            messages: u,
            icon: i,
            buttonLabel: a ? "Adicionar" : void 0,
            onButtonClick: a || void 0
          }
        ),
        z && /* @__PURE__ */ e(
          Z.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4 },
            style: {
              width: "100%",
              ...c.content
            },
            children: h
          }
        )
      ]
    }
  );
};
export {
  nn as CBAutocomplete,
  Be as CBButton,
  jr as CBCard,
  bn as CBCheckbox,
  Gr as CBDataPicker,
  Cr as CBEmptyState,
  Kr as CBFabButton,
  rn as CBFabButtonCenter,
  xn as CBFilterBar,
  Wr as CBGrid,
  Xr as CBGridItem,
  cn as CBInput,
  Pr as CBLoading,
  Rr as CBModal,
  Ur as CBMultiView,
  Fr as CBPopup,
  er as CBRadio,
  en as CBRadioCardGroup,
  en as CBRadioCards,
  Jr as CBRadioGroup,
  tn as CBSegment,
  Er as CBSelect,
  Zr as CBSelector,
  on as CBStateWrapper,
  tr as CBStepperHorizontal,
  nr as CBStepperProvider,
  rr as CBStepperVertical,
  qr as CBTextArea,
  Ar as CBToast,
  Qr as CBToggle,
  Vr as CBTooltip,
  un as CB_COLOR_CONTRAST_MAP,
  mn as CB_COLOR_MAP,
  fn as applyMask,
  zt as resolveCBColor,
  hn as resolveMask,
  W as useCBColor,
  ct as useCBStepper,
  pn as useInputMask,
  ln as usePasswordToggle
};
