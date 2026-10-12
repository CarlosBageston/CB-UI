import { jsxs as N, jsx as e, Fragment as Xe } from "react/jsx-runtime";
import $e, { useState as Z, useEffect as J, useRef as se, useMemo as ye, createContext as Je, useContext as et, useCallback as X, useId as tt } from "react";
import U from "clsx";
import { IonCard as rt, IonCardHeader as nt, IonCardTitle as ot, IonCardSubtitle as at, IonCardContent as st, IonFooter as Ye, IonText as it, IonModal as Ne, IonHeader as Ae, IonToolbar as Fe, IonButtons as Ee, IonButton as xe, IonTitle as Pe, IonContent as We, IonSelect as lt, IonSelectOption as ct, IonNote as ie, IonSpinner as le, IonTextarea as dt, IonToggle as qe, IonRadioGroup as Ie, IonRadio as be, IonCheckbox as ut, IonFab as Ve, IonFabButton as De, IonSegment as mt, IonSegmentButton as ft, IonLabel as _e, IonAccordionGroup as ht, IonAccordion as pt, IonItem as gt, IonInput as Ze, IonDatetime as Be, IonIcon as me } from "@ionic/react";
import { I as xt, a as Se, b as Ue } from "./CBInput-D82sIzAR.js";
import { C as Er, u as Pr } from "./CBInput-D82sIzAR.js";
import { G as ne, u as E } from "./iconBase-DcKQz3bW.js";
import { C as qr, b as Vr, a as Zr, r as Ur, c as Gr } from "./iconBase-DcKQz3bW.js";
import { m as W, A as ce, C as ve } from "./CBFilterBar-C6DPy5H3.js";
import { b as Qr, e as Xr } from "./CBFilterBar-C6DPy5H3.js";
function ze(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function bt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" } }] })(t);
}
function vt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" } }] })(t);
}
function yt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" } }] })(t);
}
function Ct(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" } }] })(t);
}
function wt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" } }] })(t);
}
function Mt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" } }] })(t);
}
function kt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" } }] })(t);
}
function $t(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" } }] })(t);
}
function Dt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" } }] })(t);
}
function Yt(t) {
  return ne({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }] })(t);
}
const yr = ({
  title: t,
  subtitle: o,
  footer: n,
  children: r,
  className: c,
  elevation: i = "md",
  hoverEffect: a = !0,
  collapsible: u = !1,
  defaultCollapsed: l = !1,
  onClickEdit: f,
  onClickDelete: h,
  theme: g
}) => {
  const [M, I] = Z(l), _ = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  }[i], L = g?.sizes?.borderRadius || "rounded-md", x = g?.colors?.background || "bg-white dark:bg-gray-900", k = g?.colors?.text || "text-gray-700 dark:text-gray-200", $ = g?.colors?.subtitle || "text-gray-500 dark:text-gray-400";
  return /* @__PURE__ */ N(
    rt,
    {
      className: U(
        "transition-all",
        x,
        _,
        L,
        a && "hover:shadow-xl hover:scale-[1.01] cursor-pointer",
        c
      ),
      style: {
        width: g?.sizes?.width,
        height: g?.sizes?.height,
        padding: g?.sizes?.padding
      },
      children: [
        (t || o || u || h || f) && /* @__PURE__ */ e(
          nt,
          {
            className: "relative flex flex-col items-center",
            style: { minHeight: g?.sizes?.headerHeight },
            children: /* @__PURE__ */ N("div", { className: "flex justify-between w-full items-center", children: [
              /* @__PURE__ */ N("div", { className: "flex flex-col text-center w-full", children: [
                t && /* @__PURE__ */ e(ot, { className: `text-lg font-semibold ${k}`, children: t }),
                o && /* @__PURE__ */ e(at, { className: `${$} text-sm`, children: o })
              ] }),
              /* @__PURE__ */ N("div", { className: "flex items-center gap-2", children: [
                f && f && /* @__PURE__ */ e(
                  Dt,
                  {
                    onClick: f,
                    className: U(
                      "w-10 h-10 p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                      g?.colors?.edit || "text-(--cb-color-secondary-shade)"
                    )
                  }
                ),
                h && h && /* @__PURE__ */ e(
                  vt,
                  {
                    onClick: h,
                    className: U(
                      "w-10 h-10 p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                      g?.colors?.delete || "text-(--cb-color-danger)"
                    )
                  }
                ),
                u && /* @__PURE__ */ e(
                  W.div,
                  {
                    initial: !1,
                    animate: { rotate: M ? 0 : 180 },
                    transition: { duration: 0.3 },
                    className: "text-xl flex-center cursor-pointer",
                    onClick: () => I(!M),
                    children: /* @__PURE__ */ e(xt, {})
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ e(ce, { initial: !1, children: !M && r && /* @__PURE__ */ e(
          W.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.3, ease: "easeInOut" },
            style: { overflow: "hidden" },
            children: /* @__PURE__ */ e(
              st,
              {
                style: {
                  padding: g?.contentCard?.padding,
                  backgroundColor: g?.contentCard?.background,
                  color: g?.contentCard?.text
                },
                className: `${k} text-sm`,
                children: r
              }
            )
          },
          "card-content"
        ) }),
        n && /* @__PURE__ */ e(
          Ye,
          {
            className: "p-4 border-t dark:border-gray-700",
            style: { backgroundColor: g?.colors?.footer },
            children: n
          }
        )
      ]
    }
  );
}, Nt = {
  "top-left": "top-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0",
  "bottom-left": "bottom-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
}, It = (t) => {
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
}, Cr = ({
  message: t,
  type: o = "info",
  duration: n = 3e3,
  show: r,
  onClose: c,
  className: i,
  position: a = "bottom-center"
}) => {
  const { main: u, contrast: l } = E("success"), { main: f, contrast: h } = E("danger"), { main: g, contrast: M } = E("warning"), { main: I, contrast: _ } = E("info"), L = {
    success: {
      bg: u,
      color: l,
      icon: /* @__PURE__ */ e(bt, { size: 20 })
    },
    error: { bg: f, color: h, icon: /* @__PURE__ */ e(wt, { size: 20 }) },
    warning: {
      bg: g,
      color: M,
      icon: /* @__PURE__ */ e(Mt, { size: 20 })
    },
    info: { bg: I, color: _, icon: /* @__PURE__ */ e(yt, { size: 20 }) }
  }, { bg: x, color: k, icon: $ } = L[o];
  J(() => {
    if (r && n) {
      const C = setTimeout(() => c?.(), n);
      return () => clearTimeout(C);
    }
  }, [r, n]);
  const m = It(a);
  return /* @__PURE__ */ e(ce, { children: r && /* @__PURE__ */ e("div", { className: `fixed z-9999 pointer-events-none w-[95vw] max-w-[360px] ${Nt[a]}`, children: /* @__PURE__ */ N(
    W.div,
    {
      ...m,
      transition: { duration: 0.3 },
      className: `pointer-events-auto w-full rounded-lg! p-4! flex items-center shadow-lg ${i}`,
      style: { backgroundColor: x, color: k },
      children: [
        /* @__PURE__ */ N("div", { className: "flex items-center gap-2 flex-1", children: [
          $,
          /* @__PURE__ */ e(it, { className: "text-[14px] font-medium", children: t })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => c?.(),
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
}, wr = ({
  isOpen: t,
  onDismiss: o,
  title: n,
  subtitle: r,
  children: c,
  footer: i,
  showCloseButton: a = !0,
  className: u,
  headerClassName: l,
  contentClassName: f,
  footerClassName: h,
  ...g
}) => /* @__PURE__ */ N(
  Ne,
  {
    isOpen: t,
    onDidDismiss: o,
    className: U(
      "rounded-lg overflow-hidden modal-height-full",
      u
    ),
    ...g,
    children: [
      (n || r || a) && /* @__PURE__ */ e(Ae, { className: U("ion-no-border", l), children: /* @__PURE__ */ e(Fe, { children: /* @__PURE__ */ N("div", { className: "flex flex-col items-center text-center w-full", children: [
        /* @__PURE__ */ e("div", { className: "w-full flex justify-end", children: a && /* @__PURE__ */ e(Ee, { slot: "end", children: /* @__PURE__ */ e(xe, { onClick: o, children: /* @__PURE__ */ e(Se, { size: 20 }) }) }) }),
        /* @__PURE__ */ N("div", { className: "flex flex-col", children: [
          n && /* @__PURE__ */ e(Pe, { className: "text-lg font-semibold", children: n }),
          r && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: r })
        ] })
      ] }) }) }),
      /* @__PURE__ */ e(
        We,
        {
          style: {
            "--padding-start": "1rem",
            "--padding-end": "1rem",
            "--padding-top": "1rem",
            "--padding-bottom": "1rem"
          },
          className: U(
            "p-4! text-gray-700 dark:text-gray-200",
            f
          ),
          children: c
        }
      ),
      i && /* @__PURE__ */ e(
        Ye,
        {
          className: U(
            "border-t border-gray-200 dark:border-gray-700 p-4!",
            h
          ),
          children: i
        }
      )
    ]
  }
), St = {
  sm: "cb-popup-size-sm",
  md: "cb-popup-size-md",
  lg: "cb-popup-size-lg",
  xl: "cb-popup-size-xl"
}, Mr = ({
  isOpen: t,
  onDismiss: o,
  title: n,
  subtitle: r,
  children: c,
  footer: i,
  showCloseButton: a = !0,
  size: u = "md",
  color: l,
  className: f,
  headerClassName: h,
  contentClassName: g,
  footerClassName: M,
  ...I
}) => {
  const { main: _ } = E(l ?? "primary");
  return /* @__PURE__ */ N(
    Ne,
    {
      isOpen: t,
      onDidDismiss: (L) => {
        o(), I.onDidDismiss?.(L);
      },
      className: U("cb-popup-modal", St[u], f),
      ...I,
      children: [
        (n || r || a || l) && /* @__PURE__ */ N(Ae, { className: U("ion-no-border relative", h), children: [
          l && /* @__PURE__ */ e(
            "div",
            {
              className: "h-1.5 w-full shrink-0",
              style: { backgroundColor: _ }
            }
          ),
          /* @__PURE__ */ e(
            Fe,
            {
              style: {
                "--background": "transparent",
                "--color": "var(--cb-text-primary, inherit)"
              },
              children: /* @__PURE__ */ N("div", { className: "flex items-start justify-between w-full py-2.5 px-4", children: [
                /* @__PURE__ */ N("div", { className: "flex flex-col flex-1 min-w-0 pr-3", children: [
                  n && /* @__PURE__ */ e(Pe, { className: "text-lg font-bold text-gray-900 dark:text-gray-100 p-0 ion-no-padding tracking-tight", children: n }),
                  r && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed", children: r })
                ] }),
                a && /* @__PURE__ */ e(Ee, { slot: "end", className: "shrink-0 -mr-1", children: /* @__PURE__ */ e(
                  xe,
                  {
                    onClick: o,
                    "aria-label": "Fechar",
                    className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors m-0",
                    children: /* @__PURE__ */ e(Se, { size: 22 })
                  }
                ) })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ e(
          We,
          {
            style: {
              "--padding-start": "1.25rem",
              "--padding-end": "1.25rem",
              "--padding-top": "1rem",
              "--padding-bottom": "1rem",
              "--background": "transparent"
            },
            className: U(
              "text-gray-700 dark:text-gray-200 text-sm custom-scroll",
              g
            ),
            children: c
          }
        ),
        i && /* @__PURE__ */ e(
          Ye,
          {
            className: U(
              "border-t border-gray-100 dark:border-gray-800 p-4 bg-gray-50/50 dark:bg-gray-900/50",
              M
            ),
            children: i
          }
        )
      ]
    }
  );
};
function zt() {
  const [t, o] = Z("action-sheet");
  return J(() => {
    const n = window.matchMedia("(min-width:768px)"), r = () => {
      o(n.matches ? "popover" : "action-sheet");
    };
    return r(), n.addEventListener("change", r), () => n.removeEventListener("change", r);
  }, []), t;
}
function kr({
  label: t,
  value: o,
  items: n,
  getLabel: r,
  getValue: c,
  onValueChange: i,
  placeholder: a = "Selecione...",
  disabled: u,
  loading: l,
  error: f,
  helperText: h,
  color: g = "neutral",
  radius: M = "md",
  style: I,
  fill: _ = "outline",
  shape: L = "round",
  ...x
}) {
  const k = se(null), [$, m] = Z(!1), { main: C } = E(g), { main: B } = E("danger"), Y = zt(), j = o != null && o !== "", R = f ? B : $ || j ? C : "var(--cb-color-border)", T = {
    none: "0px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px"
  }, y = ye(
    () => ({
      ...I,
      "--border-color": R,
      "--highlight-color-focused": C,
      "--border-radius": T[M],
      "--icon-color": R,
      "--color": "var(--cb-color-dark)",
      "--placeholder-color": "var(--cb-color-border)"
    }),
    [I, R, C, M]
  );
  return /* @__PURE__ */ N("div", { className: "relative flex flex-col h-18 pt-2 mb-3!", children: [
    /* @__PURE__ */ e(
      lt,
      {
        ref: k,
        value: o ?? void 0,
        label: t,
        labelPlacement: "stacked",
        placeholder: a,
        fill: _,
        shape: L,
        mode: "md",
        disabled: u || l,
        interface: Y,
        interfaceOptions: {
          header: t
        },
        style: y,
        onIonFocus: () => m(!0),
        onIonBlur: () => m(!1),
        onIonChange: (S) => {
          const H = n.find((v) => c(v) === S.detail.value);
          H && i?.(H);
        },
        ...x,
        children: n.map((S) => /* @__PURE__ */ e(ct, { value: c(S), children: r(S) }, String(c(S))))
      }
    ),
    (f || h) && /* @__PURE__ */ e(
      ie,
      {
        role: "alert",
        className: `pl-6! text-[12px] ${f ? "text-(--cb-color-danger)" : "text-(--cb-color-secondary)"}`,
        children: f ?? h
      }
    )
  ] });
}
const $r = ({
  isOpen: t = !1,
  message: o = "Carregando...",
  color: n = "primary",
  type: r = "circular",
  withBg: c = !0,
  withText: i = !0
}) => {
  const { main: a, contrast: u } = E(n);
  return t ? r === "linear" ? /* @__PURE__ */ e(ce, { children: /* @__PURE__ */ N(
    W.div,
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
          W.div,
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
          W.div,
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
  ) }) : /* @__PURE__ */ e(ce, { children: /* @__PURE__ */ e(
    W.div,
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
      children: /* @__PURE__ */ N(
        "div",
        {
          style: {
            backgroundColor: c ? a : "transparent",
            color: u,
            padding: "1.5rem 2rem",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            minWidth: "180px"
          },
          children: [
            r === "circular" ? /* @__PURE__ */ e(le, { name: "crescent", color: "light" }) : /* @__PURE__ */ e("div", { style: { display: "flex", gap: "0.5rem" }, children: [...Array(3)].map((l, f) => /* @__PURE__ */ e(
              W.div,
              {
                style: {
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: u
                },
                animate: { y: ["0%", "-50%", "0%"] },
                transition: {
                  repeat: 1 / 0,
                  duration: 0.6,
                  delay: f * 0.2
                }
              },
              f
            )) }),
            i && /* @__PURE__ */ e("span", { style: { fontSize: "14px", fontWeight: 500, textAlign: "center" }, children: o })
          ]
        }
      )
    }
  ) }) : null;
}, Dr = ({
  content: t,
  children: o,
  color: n = "light",
  placement: r = "top",
  trigger: c = "hover",
  stopPropagation: i = !1,
  tooltipStyle: a = {}
}) => {
  const [u, l] = Z(!1), { main: f, contrast: h } = E(n), g = {
    top: { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8 },
    bottom: { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8 },
    left: { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: 8 },
    right: { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: 8 }
  };
  return /* @__PURE__ */ N(
    "div",
    {
      className: "relative inline-block",
      onMouseEnter: () => c === "hover" && l(!0),
      onMouseLeave: () => c === "hover" && l(!1),
      onClick: (L) => {
        c === "click" && (i && L.stopPropagation(), l(!u));
      },
      children: [
        o,
        /* @__PURE__ */ e(ce, { children: u && /* @__PURE__ */ e(
          W.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { duration: 0.2 },
            style: {
              ...g[r],
              position: "absolute",
              backgroundColor: f,
              color: h,
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
}, _t = {
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
}, Bt = {
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
}, Lt = {
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
}, Tt = {
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
}, Ot = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6"
}, Ht = {
  0: "gap-x-0",
  1: "gap-x-1",
  2: "gap-x-2",
  3: "gap-x-3",
  4: "gap-x-4",
  5: "gap-x-5",
  6: "gap-x-6"
}, jt = {
  0: "gap-y-0",
  1: "gap-y-1",
  2: "gap-y-2",
  3: "gap-y-3",
  4: "gap-y-4",
  5: "gap-y-5",
  6: "gap-y-6"
};
function Yr({ children: t, gap: o = 4, gapX: n, gapY: r, className: c }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: U(
        "grid grid-cols-1 md:grid-cols-12",
        n ? Ht[n] : Ot[o],
        r ? jt[r] : void 0,
        c
      ),
      children: t
    }
  );
}
const Nr = ({
  label: t,
  value: o,
  placeholder: n = "",
  rows: r = 4,
  error: c,
  disabled: i = !1,
  color: a = "neutral",
  onChangeValue: u,
  fill: l = "outline",
  maxLength: f,
  radius: h = "md",
  ...g
}) => {
  const { main: M } = E(a), { main: I } = E("danger"), [_, L] = Z(!1), [x, k] = Z(!1);
  J(() => {
    k(!!o);
  }, [o]);
  const $ = c ? I : _ || x ? M : "var(--cb-color-border)", m = {
    none: "0px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px"
  }, C = f ? f - o.length : void 0, B = C !== void 0 && C < 0;
  return /* @__PURE__ */ N("div", { className: "relative flex flex-col", style: { minHeight: 72 }, children: [
    t && /* @__PURE__ */ e("label", { className: "text-xs font-medium pl-6", children: t }),
    /* @__PURE__ */ e(
      dt,
      {
        ...g,
        value: o,
        placeholder: n,
        rows: r,
        fill: l,
        disabled: i,
        labelPlacement: "stacked",
        maxlength: f,
        style: {
          "--border-color": $,
          "--highlight-color-focused": M,
          "--border-radius": m[h],
          color: "var(--cb-color-dark)"
        },
        className: U(
          "text-sm resize-none focus:outline-none",
          i && "opacity-60 cursor-not-allowed"
        ),
        onIonFocus: () => L(!0),
        onIonBlur: () => L(!1),
        onIonInput: (Y) => u(Y.detail.value ?? "")
      }
    ),
    /* @__PURE__ */ N("div", { className: "flex justify-between mt-1", children: [
      /* @__PURE__ */ e(ie, { className: "text-[12px] pl-6 text-(--cb-color-danger)", children: c }),
      f && /* @__PURE__ */ N(
        ie,
        {
          className: U(
            "text-[12px] pr-6",
            B ? "text-(--cb-color-danger)" : "text-gray-500"
          ),
          children: [
            C,
            " caractere",
            C === 1 ? "" : "s",
            " restantes"
          ]
        }
      )
    ] })
  ] });
}, Ir = ({
  label: t,
  checked: o,
  disabled: n = !1,
  type: r = "checkbox",
  onChange: c,
  color: i = "primary",
  labelPlacement: a = "start",
  styleDiv: u
}) => {
  const { main: l, contrast: f } = E(i);
  if (r === "switch")
    return /* @__PURE__ */ e("div", { className: `w-auto ${u}`, children: /* @__PURE__ */ e(
      qe,
      {
        checked: o,
        disabled: n,
        color: i,
        labelPlacement: a,
        onIonChange: (h) => c(h.detail.checked),
        style: {
          "--background-checked": l,
          // fundo quando ativo
          "--handle-background-checked": f
          // cor do "pino" quando ativo
        },
        children: t
      }
    ) });
  if (r === "radio")
    return /* @__PURE__ */ e("div", { className: `w-auto ${u}`, children: /* @__PURE__ */ e(
      Ie,
      {
        value: o ? "selected" : "unselected",
        onIonChange: (h) => c(h.detail.value === "selected"),
        className: "flex items-center gap-2",
        children: /* @__PURE__ */ e(
          be,
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
              "--mark-color": f
              // cor do ponto central
            },
            children: t && /* @__PURE__ */ e("span", { children: t })
          }
        )
      }
    ) });
  if (r === "checkbox")
    return /* @__PURE__ */ e("div", { className: `w-auto ${u}`, children: /* @__PURE__ */ e(
      ut,
      {
        checked: o,
        disabled: n,
        color: i,
        labelPlacement: a,
        onIonChange: (h) => c(h.detail.checked),
        style: {
          "--border-color": l,
          // borda normal
          "--background-checked": l,
          // fundo quando marcado
          "--border-color-checked": l,
          // borda quando marcado
          "--checkmark-color": f
          // cor do check
        },
        children: t && /* @__PURE__ */ e("span", { className: "ml-2", children: t })
      }
    ) });
}, Sr = ({
  tooltip: t,
  icon: o = Ue,
  onClick: n,
  recording: r,
  loading: c = !1,
  showCancel: i = !1,
  onCancel: a,
  cancelIcon: u = Se,
  disabled: l = !1,
  className: f,
  color: h = "primary"
}) => {
  const [g, M] = Z(!0), [I, _] = Z(!0), { main: L, contrast: x } = E(h);
  return J(() => {
    const k = setTimeout(() => {
      M(!1), setTimeout(() => {
        _(!1);
      }, 800);
    }, 3e3);
    return () => clearTimeout(k);
  }, []), /* @__PURE__ */ e("div", { style: { position: "relative" }, children: /* @__PURE__ */ e(ce, { mode: "wait", children: /* @__PURE__ */ N(
    W.div,
    {
      className: `fixed bottom-24 right-2 z-1000 flex-center ${f} `,
      animate: g ? { width: 250, height: 55 } : { width: 55, height: 55 },
      transition: { duration: 0.8, ease: "easeInOut" },
      children: [
        /* @__PURE__ */ N(Ve, { vertical: "bottom", horizontal: "end", slot: "fixed", children: [
          /* @__PURE__ */ e(
            De,
            {
              onClick: n,
              disabled: l || c,
              style: {
                "--box-shadow": !g && "none",
                "--background": L,
                "--color": x
              },
              children: c ? /* @__PURE__ */ e(
                le,
                {
                  name: "crescent",
                  className: "text-(--cb-color-text-fixed)"
                }
              ) : $e.createElement(o, { className: "text-[26px]" })
            }
          ),
          i && a && /* @__PURE__ */ e(
            W.div,
            {
              className: "absolute bottom-17.5 right-3 pointer-events-none",
              animate: r ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: 10, pointerEvents: "none" },
              transition: { duration: 0.3 },
              children: /* @__PURE__ */ e(
                De,
                {
                  color: "danger",
                  className: "w-8.75 h-8.75",
                  onClick: a,
                  children: $e.createElement(u, {
                    className: "text-[22px]"
                  })
                }
              )
            }
          )
        ] }),
        t && I && /* @__PURE__ */ e(
          W.div,
          {
            className: "absolute right-2.5 bottom-2 pr-13 h-14.5 overflow-hidden rounded-full flex items-center justify-center",
            style: { backgroundColor: L, color: x },
            initial: { width: 0, opacity: 0, filter: "blur(4px)" },
            animate: g ? { width: "auto", opacity: 1, filter: "blur(0px)" } : { width: 0, opacity: 0, filter: "blur(4px)" },
            transition: { duration: 0.5, ease: "easeOut" },
            children: /* @__PURE__ */ e(
              W.div,
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
}, Rt = ({
  label: t,
  value: o,
  disabled: n = !1,
  color: r = "primary",
  labelPlacement: c = "end",
  onClick: i,
  className: a,
  style: u
}) => {
  const { main: l, contrast: f } = E(r);
  return /* @__PURE__ */ N(
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
      style: u,
      children: [
        c === "start" && /* @__PURE__ */ e("span", { children: t }),
        /* @__PURE__ */ e(
          be,
          {
            value: o,
            disabled: n,
            color: r,
            style: {
              "--color": l,
              "--color-checked": l,
              "--mark-color": f
            }
          }
        ),
        c === "end" && /* @__PURE__ */ e("span", { children: t })
      ]
    }
  );
}, Ge = Je(
  null
);
function Ke() {
  const t = et(Ge);
  if (!t)
    throw new Error("useCBStepper must be used inside a CBStepperProvider.");
  return t;
}
const At = ({
  steps: t,
  color: o = "primary",
  className: n,
  classNameContent: r,
  style: c,
  showButtonNext: i = !0,
  showButtonPrev: a = !0,
  nextLabel: u = "Próximo",
  prevLabel: l = "Voltar",
  disableNext: f,
  disablePrev: h,
  theme: g
}) => {
  const { activeIndex: M, next: I, prev: _, canNext: L, canPrev: x } = Ke(), { main: k, contrast: $ } = E(o), m = g?.stepper, C = m?.circle?.background ?? k, B = m?.circle?.text ?? $, Y = m?.line ?? k;
  return /* @__PURE__ */ N("div", { className: `flex flex-col gap-4 ${n ?? ""}`, style: c, children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-between w-full relative", children: t.map((j, R) => {
      const T = R === M, y = R < M;
      return /* @__PURE__ */ N(
        "div",
        {
          className: "flex-1 relative flex flex-col items-center",
          children: [
            /* @__PURE__ */ N("div", { className: "relative flex items-center justify-center w-full", children: [
              R < t.length - 1 && /* @__PURE__ */ N(
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
                      W.div,
                      {
                        style: {
                          position: "absolute",
                          inset: 0,
                          background: Y,
                          transformOrigin: "left"
                        },
                        initial: !1,
                        animate: {
                          scaleX: y ? 1 : 0
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
                W.div,
                {
                  className: "w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 cursor-pointer shrink-0",
                  initial: !1,
                  animate: {
                    backgroundColor: T || y ? C : "#ffffff",
                    borderColor: T || y ? C : "#d1d5db",
                    color: T || y ? B : "#6b7280",
                    scale: T ? [1, 1.08, 1] : 1
                  },
                  transition: {
                    backgroundColor: {
                      duration: 0.2,
                      delay: T || y ? 0.4 : 0
                    },
                    borderColor: {
                      duration: 0.2,
                      delay: T || y ? 0.4 : 0
                    },
                    color: {
                      duration: 0.2,
                      delay: T || y ? 0.4 : 0
                    },
                    scale: {
                      duration: 0.25,
                      delay: T || y ? 0.4 : 0,
                      ease: "easeOut"
                    }
                  },
                  whileHover: { scale: 1.1 },
                  whileTap: { scale: 0.95 },
                  children: j.icon ?? R + 1
                }
              )
            ] }),
            /* @__PURE__ */ e(
              "span",
              {
                className: "text-sm text-center mt-2",
                style: { color: m?.titleColor },
                children: j.title
              }
            )
          ]
        },
        R
      );
    }) }),
    /* @__PURE__ */ e("div", { className: r, children: t.map((j, R) => /* @__PURE__ */ e(
      "div",
      {
        style: { display: R === M ? "block" : "none" },
        children: j.content
      },
      R
    )) }),
    /* @__PURE__ */ N("div", { className: "flex justify-between w-full mt-2", children: [
      a && /* @__PURE__ */ e(
        ve,
        {
          disabled: h ? h(M) : !x,
          onClick: _,
          iconStart: /* @__PURE__ */ e(kt, {}),
          children: typeof l == "function" ? l(M, t.length) : l,
          color: o,
          variant: m?.button?.prev?.variant ?? "solid",
          backgroundColor: m?.button?.prev?.background,
          textColor: m?.button?.prev?.text,
          borderColor: m?.button?.prev?.border,
          hoverColor: m?.button?.prev?.hover,
          rounded: m?.button?.prev?.rounded,
          activeColor: m?.button?.prev?.active
        }
      ),
      i && /* @__PURE__ */ e(
        ve,
        {
          disabled: f ? f(M) : !L,
          onClick: I,
          iconEnd: /* @__PURE__ */ e($t, {}),
          children: typeof u == "function" ? u(M, t.length) : u,
          color: o,
          variant: m?.button?.next?.variant ?? "solid",
          backgroundColor: m?.button?.next?.background,
          textColor: m?.button?.next?.text,
          borderColor: m?.button?.next?.border,
          hoverColor: m?.button?.next?.hover,
          rounded: m?.button?.next?.rounded,
          activeColor: m?.button?.next?.active
        }
      )
    ] })
  ] });
}, Ft = ({
  steps: t,
  color: o = "primary",
  className: n,
  classNameContent: r,
  style: c,
  showButtonNext: i = !0,
  showButtonPrev: a = !0,
  nextLabel: u = "Próximo",
  prevLabel: l = "Voltar",
  disableNext: f,
  disablePrev: h,
  theme: g
}) => {
  const { activeIndex: M, next: I, prev: _, canNext: L, canPrev: x } = Ke(), { main: k, contrast: $ } = E(o), m = g?.stepper, C = m?.circle?.background ?? k, B = m?.circle?.text ?? $, Y = m?.line ?? k, j = m?.titleColor ?? "#111827";
  return /* @__PURE__ */ e("div", { className: `flex flex-col gap-4 ${n ?? ""}`, style: c, children: t.map((R, T) => {
    const y = T === M, b = T < M;
    return /* @__PURE__ */ N("div", { className: "relative flex items-start gap-4", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-col items-center relative", children: /* @__PURE__ */ e(
        W.div,
        {
          className: "w-10 h-10 rounded-full border-2 flex items-center justify-center cursor-pointer z-10",
          style: {
            backgroundColor: y || b ? C : "#ffffff",
            color: y || b ? B : "#6b7280",
            borderColor: y || b ? C : "#d1d5db"
          },
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.95 },
          children: R.icon ?? T + 1
        }
      ) }),
      T !== t.length - 1 && /* @__PURE__ */ e(
        W.div,
        {
          style: {
            width: 2,
            backgroundColor: y || b ? Y : "#d1d5db",
            position: "absolute",
            height: "100%",
            left: 18,
            top: 16
          }
        }
      ),
      /* @__PURE__ */ N("div", { className: "flex-1", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "font-semibold text-base",
            style: { color: j },
            children: R.title
          }
        ),
        /* @__PURE__ */ N(
          W.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: {
              height: y ? "auto" : 0,
              opacity: y ? 1 : 0
            },
            transition: { duration: 0.4, ease: "easeInOut" },
            className: "overflow-hidden mt-1",
            children: [
              /* @__PURE__ */ e("div", { className: `mb-2 ${r}`, children: R.content }),
              /* @__PURE__ */ N("div", { className: "flex w-full mt-2 pb-2", children: [
                i && /* @__PURE__ */ e(
                  ve,
                  {
                    disabled: f ? f(M) : !L,
                    onClick: I,
                    children: typeof u == "function" ? u(M, t.length) : u,
                    color: o,
                    className: "text-[12px]! mr-2",
                    variant: m?.button?.next?.variant ?? "solid",
                    backgroundColor: m?.button?.next?.background,
                    textColor: m?.button?.next?.text,
                    borderColor: m?.button?.next?.border,
                    hoverColor: m?.button?.next?.hover,
                    rounded: m?.button?.next?.rounded,
                    activeColor: m?.button?.next?.active
                  }
                ),
                a && /* @__PURE__ */ e(
                  ve,
                  {
                    disabled: h ? h(M) : !x,
                    onClick: _,
                    children: typeof l == "function" ? l(M, t.length) : l,
                    color: o,
                    variant: m?.button?.prev?.variant ?? "clear",
                    className: "text-[12px]!",
                    backgroundColor: m?.button?.prev?.background,
                    textColor: m?.button?.prev?.text,
                    borderColor: m?.button?.prev?.border,
                    hoverColor: m?.button?.prev?.hover,
                    rounded: m?.button?.prev?.rounded,
                    activeColor: m?.button?.prev?.active
                  }
                )
              ] })
            ]
          }
        )
      ] })
    ] }, T);
  }) });
}, Et = ({
  children: t,
  initialStep: o = 0,
  totalSteps: n,
  onNext: r,
  onPrev: c
}) => {
  const [i, a] = Z(o);
  J(() => {
    a(o);
  }, [o]);
  const u = X(async () => i >= n - 1 || r && await r(i) === !1 ? !1 : (a((g) => g + 1), !0), [i, n, r]), l = X(async () => i <= 0 || c && await c(i) === !1 ? !1 : (a((g) => g - 1), !0), [i, c]), f = X(() => {
    a(o);
  }, [o]), h = ye(
    () => ({
      activeIndex: i,
      totalSteps: n,
      next: u,
      prev: l,
      reset: f,
      canNext: i < n - 1,
      canPrev: i > 0,
      isFirst: i === 0,
      isLast: i === n - 1
    }),
    [i, n, u, l, f]
  );
  return /* @__PURE__ */ e(Ge.Provider, { value: h, children: t });
}, zr = ({
  steps: t,
  variant: o = "tabs",
  initialStep: n = 0,
  orientation: r = "horizontal",
  color: c = "primary",
  className: i,
  style: a,
  classNameContent: u,
  showButtonPrev: l = !0,
  showButtonNext: f = !0,
  nextLabel: h,
  prevLabel: g,
  disableNext: M,
  disablePrev: I,
  onNext: _,
  onPrev: L,
  onTabChange: x,
  theme: k
}) => {
  const [$, m] = Z(n);
  if (o === "tabs") {
    const C = k?.tabs;
    return /* @__PURE__ */ N("div", { style: a, children: [
      /* @__PURE__ */ e(
        mt,
        {
          scrollable: C?.segment?.scrollable,
          value: $.toString(),
          onIonChange: (B) => {
            const Y = B.detail.value;
            if (Y != null) {
              const j = parseInt(Y.toString(), 10);
              m(j), x?.(j);
            }
          },
          style: {
            background: C?.segment?.background,
            borderRadius: C?.segment?.borderRadius,
            padding: C?.segment?.padding,
            border: C?.segment?.border
          },
          className: `w-full ${i} ${C?.segment?.hideIndicator ? "cb-tabs-no-indicator" : ""}`,
          children: t.map((B, Y) => {
            const j = Y === $;
            return /* @__PURE__ */ e(
              ft,
              {
                value: Y.toString(),
                style: {
                  background: j ? C?.button?.activeBackground : C?.button?.background,
                  color: j ? C?.button?.activeText : C?.button?.text,
                  border: C?.button?.border,
                  borderRadius: C?.button?.rounded !== !1 ? "9999px" : void 0
                },
                children: /* @__PURE__ */ e(_e, { children: B.title })
              },
              Y
            );
          })
        }
      ),
      /* @__PURE__ */ e("div", { className: u ?? "p-4", children: t[$].content })
    ] });
  }
  if (o === "accordion") {
    const C = k?.accordion;
    return /* @__PURE__ */ e(
      ht,
      {
        value: $.toString(),
        onIonChange: (B) => {
          m(parseInt(B.detail.value ?? "-1", 10));
        },
        className: `${i ?? ""} ${C?.indicator?.hide ? "cb-acc-no-indicator" : ""}`,
        style: a,
        children: t.map((B, Y) => /* @__PURE__ */ N(
          pt,
          {
            value: Y.toString(),
            children: [
              /* @__PURE__ */ e(
                gt,
                {
                  slot: "header",
                  style: {
                    background: C?.header?.background,
                    color: C?.header?.color,
                    border: C?.header?.border,
                    borderRadius: C?.header?.borderRadius,
                    padding: C?.header?.padding,
                    "--ripple-color": "transparent"
                  },
                  children: /* @__PURE__ */ e(_e, { children: B.title })
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  slot: "content",
                  style: {
                    background: C?.content?.background,
                    color: C?.content?.color,
                    padding: C?.content?.padding ?? "16px"
                  },
                  children: B.content
                }
              )
            ]
          },
          Y
        ))
      }
    );
  }
  if (o === "stepper") {
    const C = {
      steps: t,
      initialStep: n,
      color: c,
      className: i,
      style: a,
      classNameContent: u,
      showButtonPrev: l,
      showButtonNext: f,
      nextLabel: h,
      prevLabel: g,
      disableNext: M,
      disablePrev: I,
      onNext: _,
      onPrev: L,
      theme: k
    };
    return /* @__PURE__ */ e(
      Et,
      {
        initialStep: n,
        totalSteps: t.length,
        onNext: _,
        onPrev: L,
        children: r === "horizontal" ? /* @__PURE__ */ e(At, { ...C }) : /* @__PURE__ */ e(Ft, { ...C })
      }
    );
  }
  return null;
};
var fe = { exports: {} }, Pt = fe.exports, Le;
function Qe() {
  return Le || (Le = 1, (function(t, o) {
    (function(n, r) {
      t.exports = r();
    })(Pt, (function() {
      var n = 1e3, r = 6e4, c = 36e5, i = "millisecond", a = "second", u = "minute", l = "hour", f = "day", h = "week", g = "month", M = "quarter", I = "year", _ = "date", L = "Invalid Date", x = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, k = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(v) {
        var s = ["th", "st", "nd", "rd"], d = v % 100;
        return "[" + v + (s[(d - 20) % 10] || s[d] || s[0]) + "]";
      } }, m = function(v, s, d) {
        var w = String(v);
        return !w || w.length >= s ? v : "" + Array(s + 1 - w.length).join(d) + v;
      }, C = { s: m, z: function(v) {
        var s = -v.utcOffset(), d = Math.abs(s), w = Math.floor(d / 60), p = d % 60;
        return (s <= 0 ? "+" : "-") + m(w, 2, "0") + ":" + m(p, 2, "0");
      }, m: function v(s, d) {
        if (s.date() < d.date()) return -v(d, s);
        var w = 12 * (d.year() - s.year()) + (d.month() - s.month()), p = s.clone().add(w, g), D = d - p < 0, z = s.clone().add(w + (D ? -1 : 1), g);
        return +(-(w + (d - p) / (D ? p - z : z - p)) || 0);
      }, a: function(v) {
        return v < 0 ? Math.ceil(v) || 0 : Math.floor(v);
      }, p: function(v) {
        return { M: g, y: I, w: h, d: f, D: _, h: l, m: u, s: a, ms: i, Q: M }[v] || String(v || "").toLowerCase().replace(/s$/, "");
      }, u: function(v) {
        return v === void 0;
      } }, B = "en", Y = {};
      Y[B] = $;
      var j = "$isDayjsObject", R = function(v) {
        return v instanceof S || !(!v || !v[j]);
      }, T = function v(s, d, w) {
        var p;
        if (!s) return B;
        if (typeof s == "string") {
          var D = s.toLowerCase();
          Y[D] && (p = D), d && (Y[D] = d, p = D);
          var z = s.split("-");
          if (!p && z.length > 1) return v(z[0]);
        } else {
          var O = s.name;
          Y[O] = s, p = O;
        }
        return !w && p && (B = p), p || !w && B;
      }, y = function(v, s) {
        if (R(v)) return v.clone();
        var d = typeof s == "object" ? s : {};
        return d.date = v, d.args = arguments, new S(d);
      }, b = C;
      b.l = T, b.i = R, b.w = function(v, s) {
        return y(v, { locale: s.$L, utc: s.$u, x: s.$x, $offset: s.$offset });
      };
      var S = (function() {
        function v(d) {
          this.$L = T(d.locale, null, !0), this.parse(d), this.$x = this.$x || d.x || {}, this[j] = !0;
        }
        var s = v.prototype;
        return s.parse = function(d) {
          this.$d = (function(w) {
            var p = w.date, D = w.utc;
            if (p === null) return /* @__PURE__ */ new Date(NaN);
            if (b.u(p)) return /* @__PURE__ */ new Date();
            if (p instanceof Date) return new Date(p);
            if (typeof p == "string" && !/Z$/i.test(p)) {
              var z = p.match(x);
              if (z) {
                var O = z[2] - 1 || 0, A = (z[7] || "0").substring(0, 3);
                return D ? new Date(Date.UTC(z[1], O, z[3] || 1, z[4] || 0, z[5] || 0, z[6] || 0, A)) : new Date(z[1], O, z[3] || 1, z[4] || 0, z[5] || 0, z[6] || 0, A);
              }
            }
            return new Date(p);
          })(d), this.init();
        }, s.init = function() {
          var d = this.$d;
          this.$y = d.getFullYear(), this.$M = d.getMonth(), this.$D = d.getDate(), this.$W = d.getDay(), this.$H = d.getHours(), this.$m = d.getMinutes(), this.$s = d.getSeconds(), this.$ms = d.getMilliseconds();
        }, s.$utils = function() {
          return b;
        }, s.isValid = function() {
          return this.$d.toString() !== L;
        }, s.isSame = function(d, w) {
          var p = y(d);
          return this.startOf(w) <= p && p <= this.endOf(w);
        }, s.isAfter = function(d, w) {
          return y(d) < this.startOf(w);
        }, s.isBefore = function(d, w) {
          return this.endOf(w) < y(d);
        }, s.$g = function(d, w, p) {
          return b.u(d) ? this[w] : this.set(p, d);
        }, s.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, s.valueOf = function() {
          return this.$d.getTime();
        }, s.startOf = function(d, w) {
          var p = this, D = !!b.u(w) || w, z = b.p(d), O = function(G, V) {
            var Q = b.w(p.$u ? Date.UTC(p.$y, V, G) : new Date(p.$y, V, G), p);
            return D ? Q : Q.endOf(f);
          }, A = function(G, V) {
            return b.w(p.toDate()[G].apply(p.toDate("s"), (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(V)), p);
          }, F = this.$W, q = this.$M, K = this.$D, oe = "set" + (this.$u ? "UTC" : "");
          switch (z) {
            case I:
              return D ? O(1, 0) : O(31, 11);
            case g:
              return D ? O(1, q) : O(0, q + 1);
            case h:
              var re = this.$locale().weekStart || 0, P = (F < re ? F + 7 : F) - re;
              return O(D ? K - P : K + (6 - P), q);
            case f:
            case _:
              return A(oe + "Hours", 0);
            case l:
              return A(oe + "Minutes", 1);
            case u:
              return A(oe + "Seconds", 2);
            case a:
              return A(oe + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, s.endOf = function(d) {
          return this.startOf(d, !1);
        }, s.$set = function(d, w) {
          var p, D = b.p(d), z = "set" + (this.$u ? "UTC" : ""), O = (p = {}, p[f] = z + "Date", p[_] = z + "Date", p[g] = z + "Month", p[I] = z + "FullYear", p[l] = z + "Hours", p[u] = z + "Minutes", p[a] = z + "Seconds", p[i] = z + "Milliseconds", p)[D], A = D === f ? this.$D + (w - this.$W) : w;
          if (D === g || D === I) {
            var F = this.clone().set(_, 1);
            F.$d[O](A), F.init(), this.$d = F.set(_, Math.min(this.$D, F.daysInMonth())).$d;
          } else O && this.$d[O](A);
          return this.init(), this;
        }, s.set = function(d, w) {
          return this.clone().$set(d, w);
        }, s.get = function(d) {
          return this[b.p(d)]();
        }, s.add = function(d, w) {
          var p, D = this;
          d = Number(d);
          var z = b.p(w), O = function(q) {
            var K = y(D);
            return b.w(K.date(K.date() + Math.round(q * d)), D);
          };
          if (z === g) return this.set(g, this.$M + d);
          if (z === I) return this.set(I, this.$y + d);
          if (z === f) return O(1);
          if (z === h) return O(7);
          var A = (p = {}, p[u] = r, p[l] = c, p[a] = n, p)[z] || 1, F = this.$d.getTime() + d * A;
          return b.w(F, this);
        }, s.subtract = function(d, w) {
          return this.add(-1 * d, w);
        }, s.format = function(d) {
          var w = this, p = this.$locale();
          if (!this.isValid()) return p.invalidDate || L;
          var D = d || "YYYY-MM-DDTHH:mm:ssZ", z = b.z(this), O = this.$H, A = this.$m, F = this.$M, q = p.weekdays, K = p.months, oe = p.meridiem, re = function(V, Q, te, ae) {
            return V && (V[Q] || V(w, D)) || te[Q].slice(0, ae);
          }, P = function(V) {
            return b.s(O % 12 || 12, V, "0");
          }, G = oe || function(V, Q, te) {
            var ae = V < 12 ? "AM" : "PM";
            return te ? ae.toLowerCase() : ae;
          };
          return D.replace(k, (function(V, Q) {
            return Q || (function(te) {
              switch (te) {
                case "YY":
                  return String(w.$y).slice(-2);
                case "YYYY":
                  return b.s(w.$y, 4, "0");
                case "M":
                  return F + 1;
                case "MM":
                  return b.s(F + 1, 2, "0");
                case "MMM":
                  return re(p.monthsShort, F, K, 3);
                case "MMMM":
                  return re(K, F);
                case "D":
                  return w.$D;
                case "DD":
                  return b.s(w.$D, 2, "0");
                case "d":
                  return String(w.$W);
                case "dd":
                  return re(p.weekdaysMin, w.$W, q, 2);
                case "ddd":
                  return re(p.weekdaysShort, w.$W, q, 3);
                case "dddd":
                  return q[w.$W];
                case "H":
                  return String(O);
                case "HH":
                  return b.s(O, 2, "0");
                case "h":
                  return P(1);
                case "hh":
                  return P(2);
                case "a":
                  return G(O, A, !0);
                case "A":
                  return G(O, A, !1);
                case "m":
                  return String(A);
                case "mm":
                  return b.s(A, 2, "0");
                case "s":
                  return String(w.$s);
                case "ss":
                  return b.s(w.$s, 2, "0");
                case "SSS":
                  return b.s(w.$ms, 3, "0");
                case "Z":
                  return z;
              }
              return null;
            })(V) || z.replace(":", "");
          }));
        }, s.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, s.diff = function(d, w, p) {
          var D, z = this, O = b.p(w), A = y(d), F = (A.utcOffset() - this.utcOffset()) * r, q = this - A, K = function() {
            return b.m(z, A);
          };
          switch (O) {
            case I:
              D = K() / 12;
              break;
            case g:
              D = K();
              break;
            case M:
              D = K() / 3;
              break;
            case h:
              D = (q - F) / 6048e5;
              break;
            case f:
              D = (q - F) / 864e5;
              break;
            case l:
              D = q / c;
              break;
            case u:
              D = q / r;
              break;
            case a:
              D = q / n;
              break;
            default:
              D = q;
          }
          return p ? D : b.a(D);
        }, s.daysInMonth = function() {
          return this.endOf(g).$D;
        }, s.$locale = function() {
          return Y[this.$L];
        }, s.locale = function(d, w) {
          if (!d) return this.$L;
          var p = this.clone(), D = T(d, w, !0);
          return D && (p.$L = D), p;
        }, s.clone = function() {
          return b.w(this.$d, this);
        }, s.toDate = function() {
          return new Date(this.valueOf());
        }, s.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, s.toISOString = function() {
          return this.$d.toISOString();
        }, s.toString = function() {
          return this.$d.toUTCString();
        }, v;
      })(), H = S.prototype;
      return y.prototype = H, [["$ms", i], ["$s", a], ["$m", u], ["$H", l], ["$W", f], ["$M", g], ["$y", I], ["$D", _]].forEach((function(v) {
        H[v[1]] = function(s) {
          return this.$g(s, v[0], v[1]);
        };
      })), y.extend = function(v, s) {
        return v.$i || (v(s, S, y), v.$i = !0), y;
      }, y.locale = T, y.isDayjs = R, y.unix = function(v) {
        return y(1e3 * v);
      }, y.en = Y[B], y.Ls = Y, y.p = {}, y;
    }));
  })(fe)), fe.exports;
}
var Wt = Qe();
const ee = /* @__PURE__ */ ze(Wt);
var he = { exports: {} }, qt = he.exports, Te;
function Vt() {
  return Te || (Te = 1, (function(t, o) {
    (function(n, r) {
      t.exports = r(Qe());
    })(qt, (function(n) {
      function r(a) {
        return a && typeof a == "object" && "default" in a ? a : { default: a };
      }
      var c = r(n), i = { name: "pt-br", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(a) {
        return a + "º";
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
      return c.default.locale(i, null, !0), i;
    }));
  })(he)), he.exports;
}
Vt();
function Zt(t) {
  return ne({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "rect", attr: { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" } }, { tag: "line", attr: { x1: "16", x2: "16", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "8", x2: "8", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "3", x2: "21", y1: "10", y2: "10" } }] })(t);
}
var pe = { exports: {} }, Ut = pe.exports, Oe;
function Gt() {
  return Oe || (Oe = 1, (function(t, o) {
    (function(n, r) {
      t.exports = r();
    })(Ut, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(r, c, i) {
        var a = c.prototype, u = a.format;
        i.en.formats = n, a.format = function(l) {
          l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
          var f = this.$locale().formats, h = (function(g, M) {
            return g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(I, _, L) {
              var x = L && L.toUpperCase();
              return _ || M[L] || n[L] || M[x].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(k, $, m) {
                return $ || m.slice(1);
              }));
            }));
          })(l, f === void 0 ? {} : f);
          return u.call(this, h);
        };
      };
    }));
  })(pe)), pe.exports;
}
var Kt = Gt();
const Qt = /* @__PURE__ */ ze(Kt);
var ge = { exports: {} }, Xt = ge.exports, He;
function Jt() {
  return He || (He = 1, (function(t, o) {
    (function(n, r) {
      t.exports = r();
    })(Xt, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, c = /\d/, i = /\d\d/, a = /\d\d?/, u = /\d*[^-_:/,()\s\d]+/, l = {}, f = function(x) {
        return (x = +x) + (x > 68 ? 1900 : 2e3);
      }, h = function(x) {
        return function(k) {
          this[x] = +k;
        };
      }, g = [/[+-]\d\d:?(\d\d)?|Z/, function(x) {
        (this.zone || (this.zone = {})).offset = (function(k) {
          if (!k || k === "Z") return 0;
          var $ = k.match(/([+-]|\d\d)/g), m = 60 * $[1] + (+$[2] || 0);
          return m === 0 ? 0 : $[0] === "+" ? -m : m;
        })(x);
      }], M = function(x) {
        var k = l[x];
        return k && (k.indexOf ? k : k.s.concat(k.f));
      }, I = function(x, k) {
        var $, m = l.meridiem;
        if (m) {
          for (var C = 1; C <= 24; C += 1) if (x.indexOf(m(C, 0, k)) > -1) {
            $ = C > 12;
            break;
          }
        } else $ = x === (k ? "pm" : "PM");
        return $;
      }, _ = { A: [u, function(x) {
        this.afternoon = I(x, !1);
      }], a: [u, function(x) {
        this.afternoon = I(x, !0);
      }], Q: [c, function(x) {
        this.month = 3 * (x - 1) + 1;
      }], S: [c, function(x) {
        this.milliseconds = 100 * +x;
      }], SS: [i, function(x) {
        this.milliseconds = 10 * +x;
      }], SSS: [/\d{3}/, function(x) {
        this.milliseconds = +x;
      }], s: [a, h("seconds")], ss: [a, h("seconds")], m: [a, h("minutes")], mm: [a, h("minutes")], H: [a, h("hours")], h: [a, h("hours")], HH: [a, h("hours")], hh: [a, h("hours")], D: [a, h("day")], DD: [i, h("day")], Do: [u, function(x) {
        var k = l.ordinal, $ = x.match(/\d+/);
        if (this.day = $[0], k) for (var m = 1; m <= 31; m += 1) k(m).replace(/\[|\]/g, "") === x && (this.day = m);
      }], w: [a, h("week")], ww: [i, h("week")], M: [a, h("month")], MM: [i, h("month")], MMM: [u, function(x) {
        var k = M("months"), $ = (M("monthsShort") || k.map((function(m) {
          return m.slice(0, 3);
        }))).indexOf(x) + 1;
        if ($ < 1) throw new Error();
        this.month = $ % 12 || $;
      }], MMMM: [u, function(x) {
        var k = M("months").indexOf(x) + 1;
        if (k < 1) throw new Error();
        this.month = k % 12 || k;
      }], Y: [/[+-]?\d+/, h("year")], YY: [i, function(x) {
        this.year = f(x);
      }], YYYY: [/\d{4}/, h("year")], Z: g, ZZ: g };
      function L(x) {
        var k, $;
        k = x, $ = l && l.formats;
        for (var m = (x = k.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(y, b, S) {
          var H = S && S.toUpperCase();
          return b || $[S] || n[S] || $[H].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(v, s, d) {
            return s || d.slice(1);
          }));
        }))).match(r), C = m.length, B = 0; B < C; B += 1) {
          var Y = m[B], j = _[Y], R = j && j[0], T = j && j[1];
          m[B] = T ? { regex: R, parser: T } : Y.replace(/^\[|\]$/g, "");
        }
        return function(y) {
          for (var b = {}, S = 0, H = 0; S < C; S += 1) {
            var v = m[S];
            if (typeof v == "string") H += v.length;
            else {
              var s = v.regex, d = v.parser, w = y.slice(H), p = s.exec(w)[0];
              d.call(b, p), y = y.replace(p, "");
            }
          }
          return (function(D) {
            var z = D.afternoon;
            if (z !== void 0) {
              var O = D.hours;
              z ? O < 12 && (D.hours += 12) : O === 12 && (D.hours = 0), delete D.afternoon;
            }
          })(b), b;
        };
      }
      return function(x, k, $) {
        $.p.customParseFormat = !0, x && x.parseTwoDigitYear && (f = x.parseTwoDigitYear);
        var m = k.prototype, C = m.parse;
        m.parse = function(B) {
          var Y = B.date, j = B.utc, R = B.args;
          this.$u = j;
          var T = R[1];
          if (typeof T == "string") {
            var y = R[2] === !0, b = R[3] === !0, S = y || b, H = R[2];
            b && (H = R[2]), l = this.$locale(), !y && H && (l = $.Ls[H]), this.$d = (function(w, p, D, z) {
              try {
                if (["x", "X"].indexOf(p) > -1) return new Date((p === "X" ? 1e3 : 1) * w);
                var O = L(p)(w), A = O.year, F = O.month, q = O.day, K = O.hours, oe = O.minutes, re = O.seconds, P = O.milliseconds, G = O.zone, V = O.week, Q = /* @__PURE__ */ new Date(), te = q || (A || F ? 1 : Q.getDate()), ae = A || Q.getFullYear(), de = 0;
                A && !F || (de = F > 0 ? F - 1 : Q.getMonth());
                var ue, Ce = K || 0, we = oe || 0, Me = re || 0, ke = P || 0;
                return G ? new Date(Date.UTC(ae, de, te, Ce, we, Me, ke + 60 * G.offset * 1e3)) : D ? new Date(Date.UTC(ae, de, te, Ce, we, Me, ke)) : (ue = new Date(ae, de, te, Ce, we, Me, ke), V && (ue = z(ue).week(V).toDate()), ue);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(Y, T, j, $), this.init(), H && H !== !0 && (this.$L = this.locale(H).$L), S && Y != this.format(T) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
          } else if (T instanceof Array) for (var v = T.length, s = 1; s <= v; s += 1) {
            R[1] = T[s - 1];
            var d = $.apply(this, R);
            if (d.isValid()) {
              this.$d = d.$d, this.$L = d.$L, this.init();
              break;
            }
            s === v && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else C.call(this, B);
        };
      };
    }));
  })(ge)), ge.exports;
}
var er = Jt();
const tr = /* @__PURE__ */ ze(er);
ee.locale("pt-br");
ee.extend(tr);
ee.extend(Qt);
const je = (t) => t ? "toDate" in t ? t.toDate() : t : null, rr = {
  none: "0px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  full: "9999px"
}, _r = ({
  value: t,
  onChange: o,
  label: n,
  format: r = "date",
  disabled: c,
  errorText: i,
  placeholder: a = "Selecionar data",
  minDate: u,
  maxDate: l,
  classNameInput: f,
  classNameContainer: h,
  withCalendar: g = !1,
  radius: M = "md",
  color: I = "neutral",
  pickerMode: _ = "modal"
}) => {
  const { main: L, contrast: x } = E(I), { main: k } = E("danger"), [$, m] = Z(!1), [C, B] = Z(!1), [Y, j] = Z(
    t ? ee(je(t)).format("YYYY-MM-DDTHH:mm") : ""
  );
  J(() => {
    j(
      t ? ee(je(t)).format("YYYY-MM-DDTHH:mm") : ""
    );
  }, [t]);
  const R = () => {
    if (!Y) return "";
    const s = ee(Y);
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
    Y && (o(ee(Y).toDate()), m(!1), B(!1));
  }, y = (s, d) => typeof d == "number" ? ee().add(d, "years").format("YYYY-MM-DD") : d ?? s.format("YYYY-MM-DD"), b = X(() => {
    c || (j(Y || ee().format("YYYY-MM-DDTHH:mm")), B(!0), m(!0));
  }, [c, Y]), S = () => {
    m(!1), B(!1);
  }, v = i ? k : C || !!Y ? L : "var(--cb-color-border)";
  return /* @__PURE__ */ N(
    "div",
    {
      className: `relative flex flex-col h-18 pt-2 mb-3! ${h ?? ""}`,
      children: [
        /* @__PURE__ */ N("div", { className: "relative flex items-center w-full", onClick: b, children: [
          /* @__PURE__ */ e(
            Ze,
            {
              readonly: !0,
              value: R(),
              label: n,
              placeholder: a,
              disabled: c,
              fill: "outline",
              shape: "round",
              labelPlacement: "stacked",
              "aria-invalid": !!i,
              style: {
                "--border-color": v,
                "--highlight-color-focused": L,
                "--border-radius": rr[M],
                color: x ?? "var(--cb-text-primary)"
              },
              className: f
            }
          ),
          g && /* @__PURE__ */ e(Zt, { className: "absolute right-4 text-[20px] text-gray-500 hover:text-blue-600 transition-colors cursor-pointer pointer-events-none" })
        ] }),
        i && /* @__PURE__ */ e(
          ie,
          {
            role: "alert",
            className: "text-[12px] pl-6! text-(--cb-color-danger)",
            children: i
          }
        ),
        _ === "modal" && /* @__PURE__ */ e(
          Ne,
          {
            isOpen: $,
            onDidDismiss: S,
            className: "custom-calendar-modal",
            children: /* @__PURE__ */ N("div", { className: "p-4 bg-(--cb-surface) rounded-lg shadow-lg", children: [
              /* @__PURE__ */ e(
                Be,
                {
                  locale: "pt-BR",
                  value: Y,
                  min: y(
                    ee().subtract(10, "years").startOf("year"),
                    u
                  ),
                  style: {
                    "--background": "var(--cb-surface)",
                    "--background-rgb": "var(--cb-surface-rgb)",
                    "--color": "var(--cb-text-primary)",
                    "--ion-color-base-rgb": "var(--cb-color-base-rgb)"
                  },
                  max: y(ee().add(50, "years").endOf("year"), l),
                  presentation: r === "month-year" || r === "MMMM/YYYY" ? "month-year" : r === "datetime" ? "date-time" : "date",
                  onIonChange: (s) => j(s.detail.value),
                  showDefaultButtons: !1
                }
              ),
              /* @__PURE__ */ N("div", { className: "flex justify-end mt-4 gap-2", children: [
                /* @__PURE__ */ e(xe, { color: "medium", onClick: S, children: "Cancelar" }),
                /* @__PURE__ */ e(xe, { onClick: T, children: "Confirmar" })
              ] })
            ] })
          }
        ),
        _ === "dropdown" && $ && /* @__PURE__ */ e("div", { className: "absolute picker-modal z-50 mt-16 bg-(--cb-surface) rounded-lg shadow-lg p-3", children: /* @__PURE__ */ e(
          Be,
          {
            locale: "pt-BR",
            value: Y,
            min: y(
              ee().subtract(10, "years").startOf("year"),
              u
            ),
            style: {
              "--background": "var(--cb-surface)",
              "--background-rgb": "var(--cb-surface-rgb)",
              "--color": "var(--cb-text-primary)"
            },
            max: y(ee().add(50, "years").endOf("year"), l),
            presentation: r === "month-year" || r === "MMMM/YYYY" ? "month-year" : r === "datetime" ? "date-time" : "date",
            onIonChange: (s) => {
              j(s.detail.value), T();
            },
            className: "calendar-days-of-week",
            showDefaultButtons: !1
          }
        ) })
      ]
    }
  );
}, Br = ({
  label: t,
  checked: o,
  disabled: n = !1,
  onChange: r,
  color: c = "primary",
  labelPlacement: i = "end",
  className: a,
  style: u
}) => {
  const { main: l, contrast: f } = E(c);
  return /* @__PURE__ */ e("div", { className: `flex items-center ${a ?? ""}`, style: u, children: /* @__PURE__ */ e(
    qe,
    {
      checked: o,
      disabled: n,
      labelPlacement: i,
      onIonChange: (h) => r(h.detail.checked),
      style: {
        "--track-background": "#d1d5db",
        "--track-background-checked": l,
        "--handle-background": "#ffffff",
        "--handle-background-checked": f
      },
      children: t
    }
  ) });
};
function Lr({
  children: t,
  sm: o,
  md: n = 12,
  lg: r,
  xl: c,
  className: i
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: U(
        o && _t[o],
        Bt[n],
        r && Lt[r],
        c && Tt[c],
        i
      ),
      children: t
    }
  );
}
const Tr = ({
  value: t,
  options: o,
  onChange: n,
  color: r = "primary",
  direction: c = "column",
  labelPlacement: i = "end",
  className: a,
  style: u
}) => /* @__PURE__ */ e(
  Ie,
  {
    value: t,
    onIonChange: (l) => n(l.detail.value),
    className: `
        flex
        ${c === "row" ? "flex-row gap-5" : "flex-col gap-3"}
        ${a ?? ""}
      `,
    style: u,
    children: o.map((l) => /* @__PURE__ */ e(
      Rt,
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
), Re = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  6: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
};
function Or({
  items: t,
  value: o,
  onValueChange: n,
  getLabel: r,
  getValue: c,
  getDescription: i,
  columns: a = 2,
  disabled: u = !1,
  label: l,
  error: f,
  helperText: h,
  color: g = "primary",
  radioPlacement: M = "end",
  renderIcon: I,
  renderExtra: _,
  className: L,
  cardClassName: x,
  style: k
}) {
  const $ = tt(), { main: m, contrast: C } = E(g), { main: B } = E("danger"), Y = (y) => {
    if (o == null) return !1;
    const b = c(y);
    if (o === y || o === b) return !0;
    if (typeof o == "object" && o !== null)
      try {
        if (c(o) === b) return !0;
      } catch {
      }
    return !1;
  }, j = t.find(Y), R = j ? String(c(j)) : o != null ? String(o) : void 0, T = (y) => {
    (typeof u == "function" ? u(y) : u) || n?.(y);
  };
  return /* @__PURE__ */ N("div", { className: U("w-full mb-3", L), style: k, children: [
    l && /* @__PURE__ */ e(
      "label",
      {
        id: `${$}-label`,
        className: "block text-sm font-medium text-(--text-primary,var(--cb-text-primary,#111827)) mb-2",
        children: l
      }
    ),
    /* @__PURE__ */ e(
      Ie,
      {
        value: R,
        onIonChange: (y) => {
          const b = y.detail.value;
          if (b != null) {
            const S = t.find(
              (H) => String(c(H)) === String(b)
            );
            S && T(S);
          }
        },
        className: U(
          "grid gap-3 sm:gap-4",
          Re[a] || Re[2]
        ),
        "aria-labelledby": l ? `${$}-label` : void 0,
        children: t.map((y) => {
          const b = String(c(y)), S = Y(y), H = typeof u == "function" ? u(y) : u, v = r(y), s = i?.(y), d = I?.(y, S), w = _?.(y, S), p = typeof x == "function" ? x(y, S) : x;
          return /* @__PURE__ */ N(
            "div",
            {
              role: "radio",
              "aria-checked": S,
              "aria-disabled": H,
              tabIndex: H ? -1 : 0,
              onClick: () => T(y),
              onKeyDown: (D) => {
                (D.key === " " || D.key === "Enter") && (D.preventDefault(), T(y));
              },
              style: {
                borderColor: S ? f ? B : m : void 0
              },
              className: U(
                // Layout base e transições
                "relative flex flex-col justify-between p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer select-none outline-none",
                // Estado Inativo
                !S && !H && "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-xs hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md hover:-translate-y-0.5",
                // Estado Ativo / Selecionado
                S && !H && [
                  "border-2 shadow-sm",
                  "bg-blue-50/60 dark:bg-blue-950/20",
                  f ? "border-red-500" : ""
                ],
                // Foco visível por acessibilidade (teclado)
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-offset-gray-900",
                // Estado Desabilitado
                H && "opacity-50 cursor-not-allowed pointer-events-none border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30",
                p
              ),
              children: [
                /* @__PURE__ */ N("div", { className: "flex items-start justify-between gap-3 w-full", children: [
                  /* @__PURE__ */ N("div", { className: "flex items-start gap-2.5 flex-1 min-w-0", children: [
                    M === "start" && /* @__PURE__ */ e("div", { className: "mt-0.5 shrink-0 pointer-events-none", children: /* @__PURE__ */ e(
                      be,
                      {
                        value: b,
                        disabled: H,
                        color: g,
                        "aria-label": v,
                        style: {
                          "--color": "var(--cb-color-border, #cbd5e1)",
                          "--color-checked": f ? B : m,
                          "--mark-color": C
                        }
                      }
                    ) }),
                    d && /* @__PURE__ */ e("div", { className: "shrink-0 text-xl text-(--cb-color-primary) mt-0.5", children: d }),
                    /* @__PURE__ */ N("div", { className: "flex flex-col flex-1 min-w-0", children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: U(
                            "text-base font-semibold tracking-tight transition-colors truncate",
                            S ? "text-(--cb-color-primary) font-bold" : "text-(--text-primary,var(--cb-text-primary,#111827))"
                          ),
                          children: v
                        }
                      ),
                      s && /* @__PURE__ */ e("div", { className: "mt-1 text-sm text-(--text-secondary,var(--cb-text-secondary,#6b7280)) leading-relaxed", children: s })
                    ] })
                  ] }),
                  M === "end" && /* @__PURE__ */ e("div", { className: "mt-0.5 shrink-0 pointer-events-none", children: /* @__PURE__ */ e(
                    be,
                    {
                      value: b,
                      disabled: H,
                      color: g,
                      "aria-label": v,
                      style: {
                        "--color": "var(--cb-color-border, #cbd5e1)",
                        "--color-checked": f ? B : m,
                        "--mark-color": C
                      }
                    }
                  ) })
                ] }),
                w && /* @__PURE__ */ e("div", { className: "mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/80 w-full text-xs", children: w })
              ]
            },
            b
          );
        })
      }
    ),
    (f || h) && /* @__PURE__ */ e(
      ie,
      {
        role: "alert",
        className: U(
          "block mt-1.5 text-[12px] pl-1",
          f ? "text-(--cb-color-danger,text-red-500)" : "text-(--cb-color-secondary,text-gray-500)"
        ),
        children: f ?? h
      }
    )
  ] });
}
const Hr = ({
  icon: t = Ue,
  onClick: o,
  loading: n = !1,
  disabled: r = !1,
  color: c = "primary",
  className: i
}) => {
  const { main: a, contrast: u } = E(c);
  return /* @__PURE__ */ e("div", { className: "relative w-full left-1/2 ", children: /* @__PURE__ */ e(
    W.div,
    {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { type: "spring", stiffness: 120, damping: 15 },
      className: `fixed bottom-[40px]  z-50 ${i}`,
      children: /* @__PURE__ */ e(Ve, { vertical: "bottom", horizontal: "center", slot: "fixed", children: /* @__PURE__ */ e(
        De,
        {
          onClick: o,
          disabled: r || n,
          style: { "--box-shadow": "none", "--background": a, "--color": u },
          children: n ? /* @__PURE__ */ e(le, { name: "crescent", color: u.includes("light") ? "light" : "dark" }) : $e.createElement(t, { className: "text-[28px]" })
        }
      ) })
    }
  ) });
}, nr = ({
  isEmpty: t = !0,
  children: o,
  messages: n,
  title: r,
  icon: c,
  buttonLabel: i,
  onButtonClick: a,
  color: u = "primary",
  colorBg: l = "#ecececbe",
  theme: f = {}
}) => {
  if (!t)
    return /* @__PURE__ */ e(Xe, { children: o });
  const { main: h } = E(u), g = ye(() => {
    const M = n || ["Nenhum dado encontrado"], I = Math.floor(Math.random() * M.length);
    return M[I];
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
        ...f.container
      },
      children: /* @__PURE__ */ N(
        W.div,
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
            ...f.card
          },
          children: [
            c,
            r && /* @__PURE__ */ e(
              "div",
              {
                style: {
                  fontWeight: 600,
                  marginBottom: 4,
                  ...f.title
                },
                children: r
              }
            ),
            /* @__PURE__ */ e("div", { style: f.message, children: g }),
            i && a && /* @__PURE__ */ e(
              "button",
              {
                onClick: a,
                style: {
                  marginTop: 12,
                  padding: "6px 12px",
                  borderRadius: 6,
                  border: "none",
                  backgroundColor: h,
                  color: "#fff",
                  cursor: "pointer",
                  ...f.button
                },
                children: i
              }
            )
          ]
        }
      )
    }
  );
}, or = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M250.26 166.05 256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 367.91a20 20 0 1 1 20-20 20 20 0 0 1-20 20'/></svg>", ar = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='m112 184 144 144 144-144' stroke-linecap='round' stroke-linejoin='round' stroke-width='48px' class='ionicon-fill-none'/></svg>", sr = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48m75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z'/></svg>", ir = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M338.29 338.29 448 448' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
function lr(t, o) {
  const n = se(t), r = se(null);
  J(() => {
    n.current = t;
  }, [t]), J(() => () => {
    r.current && clearTimeout(r.current);
  }, []);
  const c = X(() => {
    r.current && (clearTimeout(r.current), r.current = null);
  }, []);
  return { debounced: X(
    (...a) => {
      c(), r.current = setTimeout(() => {
        n.current(...a);
      }, o);
    },
    [c, o]
  ), cancel: c };
}
function cr({
  items: t,
  getLabel: o,
  onSearch: n,
  debounce: r = 500,
  minSearchLength: c = 2,
  value: i
}) {
  const a = typeof n == "function", [u, l] = Z(i ? o(i) : ""), [f, h] = Z([]), [g, M] = Z("idle"), [I, _] = Z(!1), [L, x] = Z(-1), k = se(/* @__PURE__ */ new Map()), $ = se(0);
  J(() => {
    l(i ? o(i) : "");
  }, [i]), J(() => {
    x(-1);
  }, [f]);
  const m = X(
    async (b) => {
      const S = b.trim().toLowerCase(), H = k.current.get(S);
      if (H) {
        h(H), M(H.length === 0 ? "empty" : "results");
        return;
      }
      const v = ++$.current;
      M("loading");
      try {
        const s = await n(b);
        if (v !== $.current) return;
        k.current.set(S, s), h(s), M(s.length === 0 ? "empty" : "results");
      } catch {
        if (v !== $.current) return;
        h([]), M("error");
      }
    },
    [n]
  ), { debounced: C, cancel: B } = lr(m, r), Y = X(
    (b) => {
      const S = t ?? [], H = b.trim().toLowerCase();
      if (!H) {
        h(S), M(S.length === 0 ? "empty" : "results");
        return;
      }
      const v = S.filter(
        (s) => o(s).toLowerCase().includes(H)
      );
      h(v), M(v.length === 0 ? "empty" : "results");
    },
    [t, o]
  );
  J(() => {
    a || Y(u);
  }, [t]);
  const j = X(
    (b) => {
      if (l(b), _(!0), a) {
        if (b.trim().length < c) {
          B(), $.current++, h([]), M("idle");
          return;
        }
        C(b);
      } else
        Y(b);
    },
    [
      a,
      c,
      C,
      B,
      Y
    ]
  ), R = X(() => {
    if (_(!0), !a) {
      Y(u);
      return;
    }
    g === "idle" && u.trim().length >= c && C(u);
  }, [
    a,
    Y,
    u,
    g,
    c,
    C
  ]), T = X(() => {
    _(!1), x(-1);
  }, []), y = X(() => {
    k.current.clear();
  }, []);
  return {
    query: u,
    setQuery: l,
    results: f,
    status: g,
    isOpen: I,
    setIsOpen: _,
    highlightedIndex: L,
    setHighlightedIndex: x,
    handleQueryChange: j,
    openWithCurrentItems: R,
    close: T,
    clearCache: y,
    isRemote: a
  };
}
function dr(t, o, n = !0) {
  J(() => {
    if (!n) return;
    function r(c) {
      const i = c.target;
      t.some((u) => !!u.current && u.current.contains(i)) || o();
    }
    return document.addEventListener("mousedown", r), document.addEventListener("touchstart", r), () => {
      document.removeEventListener("mousedown", r), document.removeEventListener("touchstart", r);
    };
  }, [t, o, n]);
}
const ur = {
  none: "0px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  full: "9999px"
};
function jr({
  label: t,
  value: o = null,
  items: n,
  getLabel: r,
  getValue: c,
  onValueChange: i,
  onSearch: a,
  placeholder: u = "Pesquisar...",
  helperText: l,
  error: f,
  loading: h = !1,
  disabled: g = !1,
  debounce: M = 500,
  minSearchLength: I = 2,
  color: _ = "neutral",
  radius: L = "md",
  noResultsText: x = "Nenhum resultado encontrado",
  clearable: k = !0
}) {
  const $ = se(null), m = se(null), C = se(null), [B, Y] = Z(!1), { main: j } = E(_), { main: R } = E("danger"), {
    query: T,
    setQuery: y,
    results: b,
    status: S,
    isOpen: H,
    highlightedIndex: v,
    setHighlightedIndex: s,
    handleQueryChange: d,
    openWithCurrentItems: w,
    close: p
  } = cr({
    items: n,
    getLabel: r,
    onSearch: a,
    debounce: M,
    minSearchLength: I,
    value: o
  });
  dr([$], p, H);
  const D = S === "loading" || h, z = T.length > 0, O = f ? R : B || z ? j : "var(--cb-color-border)", A = ye(
    () => ({
      "--border-color": O,
      "--highlight-color-focused": j,
      "--border-radius": ur[L],
      "--icon-color": O,
      "--color": "var(--cb-color-dark)",
      "--placeholder-color": "var(--cb-color-border)"
    }),
    [O, j, L]
  ), F = X(
    (P) => {
      y(r(P)), i?.(P), p();
    },
    [r, i, p, y]
  ), q = X(() => {
    d(""), m.current?.setFocus();
  }, [d]), K = (P) => {
    d(String(P.detail.value ?? ""));
  }, oe = (P) => {
    if (!g)
      switch (P.key) {
        case "ArrowDown": {
          if (P.preventDefault(), !H) {
            w();
            return;
          }
          s(
            (G) => G + 1 >= b.length ? 0 : G + 1
          );
          break;
        }
        case "ArrowUp": {
          if (P.preventDefault(), !H) {
            w();
            return;
          }
          s(
            (G) => G - 1 < 0 ? b.length - 1 : G - 1
          );
          break;
        }
        case "Enter": {
          H && v >= 0 && b[v] && (P.preventDefault(), F(b[v]));
          break;
        }
        case "Escape": {
          H && (P.preventDefault(), p());
          break;
        }
        case "Tab": {
          p();
          break;
        }
      }
  };
  J(() => {
    if (v < 0 || !C.current) return;
    C.current.children[v]?.scrollIntoView({ block: "nearest" });
  }, [v]);
  const re = !!a && T.trim().length < I;
  return /* @__PURE__ */ N(
    "div",
    {
      ref: $,
      className: "relative flex flex-col pt-2 mb-3 h-18 ",
      onKeyDown: oe,
      children: [
        /* @__PURE__ */ N("div", { className: "relative", children: [
          /* @__PURE__ */ e(
            Ze,
            {
              ref: m,
              label: t,
              labelPlacement: "stacked",
              placeholder: u,
              fill: "outline",
              shape: "round",
              mode: "md",
              value: T,
              disabled: g,
              autocomplete: "off",
              style: A,
              onIonFocus: () => {
                Y(!0), w();
              },
              onIonBlur: () => Y(!1),
              onIonInput: K,
              children: /* @__PURE__ */ N("div", { slot: "end", className: "flex items-center gap-1 pr-1", children: [
                D && /* @__PURE__ */ e(
                  le,
                  {
                    name: "crescent",
                    style: { width: 18, height: 18, color: j }
                  }
                ),
                !D && k && z && !g && /* @__PURE__ */ e(
                  me,
                  {
                    icon: sr,
                    className: "cursor-pointer text-[18px]",
                    style: { color: "var(--cb-color-border)" },
                    onClick: q
                  }
                ),
                !D && /* @__PURE__ */ e(
                  me,
                  {
                    icon: ar,
                    className: "text-[16px] transition-transform duration-150",
                    style: {
                      color: O,
                      transform: H ? "rotate(180deg)" : "rotate(0deg)"
                    }
                  }
                )
              ] })
            }
          ),
          H && !g && /* @__PURE__ */ N(
            "ul",
            {
              ref: C,
              role: "listbox",
              className: "absolute left-0 right-0 top-full bg-(--cb-surface-elevated) mt-1.5 max-h-64 overflow-y-auto custom-scroll border p-1.5 z-50 transition-all duration-150",
              style: {
                borderRadius: "8px",
                borderColor: "var(--cb-color-border)"
              },
              children: [
                S === "error" && /* @__PURE__ */ N(
                  "li",
                  {
                    className: "flex items-center justify-center gap-2 px-3 py-4 text-xs font-medium rounded-lg",
                    style: {
                      color: R
                    },
                    children: [
                      /* @__PURE__ */ e(me, { icon: or, className: "text-base" }),
                      /* @__PURE__ */ e("span", { children: "Erro ao buscar resultados." })
                    ]
                  }
                ),
                S === "loading" && b.length === 0 && /* @__PURE__ */ N(
                  "li",
                  {
                    className: "flex items-center justify-center gap-2 px-3 py-4 text-xs",
                    style: { color: "var(--cb-text-secondary)" },
                    children: [
                      /* @__PURE__ */ e(
                        le,
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
                S !== "error" && S !== "loading" && b.length === 0 && /* @__PURE__ */ N(
                  "li",
                  {
                    className: "flex flex-col items-center justify-center gap-1 px-3 py-5 text-center text-xs",
                    style: { color: "var(--cb-text-secondary)" },
                    children: [
                      /* @__PURE__ */ e(
                        me,
                        {
                          icon: ir,
                          className: "text-lg opacity-60"
                        }
                      ),
                      /* @__PURE__ */ e("span", { children: re ? `Digite ao menos ${I} caracteres` : x })
                    ]
                  }
                ),
                b.map((P, G) => {
                  const V = c(P), Q = G === v, te = o != null && c(o) === V;
                  return /* @__PURE__ */ e(
                    "li",
                    {
                      role: "option",
                      "aria-selected": te,
                      className: `relative flex items-center justify-between px-3 py-2.5 my-0.5 text-xs sm:text-sm rounded-lg cursor-pointer select-none transition-all duration-150 ${te ? "font-semibold" : "font-normal"}`,
                      style: {
                        backgroundColor: Q ? "rgba(156, 163, 175, 0.15)" : "transparent",
                        color: "var(--cb-text-primary)"
                      },
                      onMouseDown: (ae) => ae.preventDefault(),
                      onMouseEnter: () => s(G),
                      onClick: () => F(P),
                      children: /* @__PURE__ */ e("span", { className: "truncate", children: r(P) })
                    },
                    String(V)
                  );
                })
              ]
            }
          )
        ] }),
        (f || l) && /* @__PURE__ */ e(
          ie,
          {
            role: "alert",
            className: `pl-6! text-[12px] ${f ? "text-(--cb-color-danger)" : "text-(--cb-color-secondary)"}`,
            children: f ?? l
          }
        )
      ]
    }
  );
}
const Rr = ({
  data: t,
  isLoading: o = !1,
  error: n = null,
  emptyTitle: r = "Nada encontrado",
  emptyMessages: c,
  emptyIcon: i,
  onRetry: a,
  children: u,
  minHeight: l = "250px",
  loadingLabel: f = "Carregando...",
  theme: h = {}
}) => {
  const [g, M] = Z(o || t == null);
  J(() => {
    let x;
    return o || t === void 0 || t === null ? M(!0) : x = setTimeout(() => M(!1), 150), () => clearTimeout(x);
  }, [o, t]);
  const I = o || g, _ = !I && !n && (!t || t.length === 0), L = !I && !n && !_;
  return /* @__PURE__ */ N(
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
        I && /* @__PURE__ */ N(
          W.div,
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
              /* @__PURE__ */ e(le, { name: "crescent" }),
              /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    marginTop: 10,
                    color: "#666",
                    ...h.loadingLabel
                  },
                  children: f
                }
              )
            ]
          }
        ),
        !I && n && /* @__PURE__ */ N(
          W.div,
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
              /* @__PURE__ */ e(Ct, { size: 32 }),
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
                    ...h.retryButton
                  },
                  children: "Tentar novamente"
                }
              )
            ]
          }
        ),
        !I && _ && /* @__PURE__ */ e(
          nr,
          {
            title: r,
            messages: c,
            icon: i,
            buttonLabel: a ? "Adicionar" : void 0,
            onButtonClick: a || void 0
          }
        ),
        L && /* @__PURE__ */ e(
          W.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4 },
            style: {
              width: "100%",
              ...h.content
            },
            children: u
          }
        )
      ]
    }
  );
};
export {
  jr as CBAutocomplete,
  ve as CBButton,
  yr as CBCard,
  Qr as CBCheckbox,
  _r as CBDataPicker,
  nr as CBEmptyState,
  Sr as CBFabButton,
  Hr as CBFabButtonCenter,
  Xr as CBFilterBar,
  Yr as CBGrid,
  Lr as CBGridItem,
  Er as CBInput,
  $r as CBLoading,
  wr as CBModal,
  zr as CBMultiView,
  Mr as CBPopup,
  Rt as CBRadio,
  Or as CBRadioCardGroup,
  Or as CBRadioCards,
  Tr as CBRadioGroup,
  kr as CBSelect,
  Ir as CBSelector,
  Rr as CBStateWrapper,
  At as CBStepperHorizontal,
  Et as CBStepperProvider,
  Ft as CBStepperVertical,
  Nr as CBTextArea,
  Cr as CBToast,
  Br as CBToggle,
  Dr as CBTooltip,
  qr as CB_COLOR_CONTRAST_MAP,
  Vr as CB_COLOR_MAP,
  Zr as applyMask,
  Ur as resolveMask,
  E as useCBColor,
  Ke as useCBStepper,
  Gr as useInputMask,
  Pr as usePasswordToggle
};
