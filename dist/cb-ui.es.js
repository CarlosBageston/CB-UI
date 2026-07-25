import { jsxs as S, jsx as e, Fragment as Pe } from "react/jsx-runtime";
import Me, { useState as U, useEffect as oe, useRef as Le, createContext as Ee, useContext as Ve, useCallback as ye, useMemo as $e } from "react";
import X from "clsx";
import { IonCard as We, IonCardHeader as qe, IonCardTitle as Ze, IonCardSubtitle as Ue, IonCardContent as Ge, IonFooter as Be, IonText as Xe, IonModal as Te, IonHeader as Je, IonToolbar as Qe, IonButtons as Ke, IonButton as Ce, IonTitle as et, IonContent as tt, IonSelect as rt, IonSelectOption as nt, IonNote as fe, IonSpinner as ie, IonTextarea as ot, IonToggle as at, IonRadioGroup as it, IonRadio as st, IonCheckbox as lt, IonFab as He, IonFabButton as we, IonSegment as ct, IonSegmentButton as dt, IonLabel as me, IonAccordionGroup as ut, IonAccordion as ht, IonItem as Ye, IonDatetime as De, IonSearchbar as ft, IonList as mt } from "@ionic/react";
import { I as pt, a as Oe, b as Ae } from "./CBInput-BSI43gGV.js";
import { C as kr, r as Dr, u as Ir, c as Nr } from "./CBInput-BSI43gGV.js";
import { G as J, u as W, C as gt } from "./iconBase-DZ-AbiPG.js";
import { a as zr } from "./iconBase-DZ-AbiPG.js";
import { m as F, A as ae, C as pe } from "./CBFilterBar-Dlc4clkN.js";
import { b as Lr, e as Br } from "./CBFilterBar-Dlc4clkN.js";
function ke(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function vt(t) {
  return J({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" } }] })(t);
}
function xt(t) {
  return J({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" } }] })(t);
}
function bt(t) {
  return J({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" } }] })(t);
}
function yt(t) {
  return J({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" } }] })(t);
}
function Mt(t) {
  return J({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" } }] })(t);
}
function Ct(t) {
  return J({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" } }] })(t);
}
function wt(t) {
  return J({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" } }] })(t);
}
function Yt(t) {
  return J({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" } }] })(t);
}
function $t(t) {
  return J({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" } }] })(t);
}
function kt(t) {
  return J({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }] })(t);
}
const lr = ({
  title: t,
  subtitle: u,
  footer: a,
  children: s,
  className: g,
  elevation: d = "md",
  hoverEffect: i = !0,
  collapsible: m = !1,
  defaultCollapsed: f = !1,
  onClickEdit: v,
  onClickDelete: l,
  theme: p
}) => {
  const [Y, N] = U(f), B = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  }[d], _ = p?.sizes?.borderRadius || "rounded-md", h = p?.colors?.background || "bg-white dark:bg-gray-900", M = p?.colors?.text || "text-gray-700 dark:text-gray-200", w = p?.colors?.subtitle || "text-gray-500 dark:text-gray-400";
  return /* @__PURE__ */ S(
    We,
    {
      className: X(
        "transition-all",
        h,
        B,
        _,
        i && "hover:shadow-xl hover:scale-[1.01] cursor-pointer",
        g
      ),
      style: {
        width: p?.sizes?.width,
        height: p?.sizes?.height,
        padding: p?.sizes?.padding
      },
      children: [
        (t || u || m || l || v) && /* @__PURE__ */ e(
          qe,
          {
            className: "relative flex flex-col items-center",
            style: { minHeight: p?.sizes?.headerHeight },
            children: /* @__PURE__ */ S("div", { className: "flex justify-between w-full items-center", children: [
              /* @__PURE__ */ S("div", { className: "flex flex-col text-center w-full", children: [
                t && /* @__PURE__ */ e(Ze, { className: `text-lg font-semibold ${M}`, children: t }),
                u && /* @__PURE__ */ e(Ue, { className: `${w} text-sm`, children: u })
              ] }),
              /* @__PURE__ */ S("div", { className: "flex items-center gap-2", children: [
                v && v && /* @__PURE__ */ e(
                  $t,
                  {
                    onClick: v,
                    className: X(
                      "w-10 h-10 p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                      p?.colors?.edit || "text-(--cb-color-secondary-shade)"
                    )
                  }
                ),
                l && l && /* @__PURE__ */ e(
                  xt,
                  {
                    onClick: l,
                    className: X(
                      "w-10 h-10 p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                      p?.colors?.delete || "text-(--cb-color-danger)"
                    )
                  }
                ),
                m && /* @__PURE__ */ e(
                  F.div,
                  {
                    initial: !1,
                    animate: { rotate: Y ? 0 : 180 },
                    transition: { duration: 0.3 },
                    className: "text-xl flex-center cursor-pointer",
                    onClick: () => N(!Y),
                    children: /* @__PURE__ */ e(pt, {})
                  }
                )
              ] })
            ] })
          }
        ),
        !Y && s && /* @__PURE__ */ e(
          Ge,
          {
            style: {
              padding: p?.contentCard?.padding,
              backgroundColor: p?.contentCard?.background,
              color: p?.contentCard?.text
            },
            className: `${M} text-sm`,
            children: s
          }
        ),
        a && /* @__PURE__ */ e(
          Be,
          {
            className: "p-4 border-t dark:border-gray-700",
            style: { backgroundColor: p?.colors?.footer },
            children: a
          }
        )
      ]
    }
  );
}, Dt = {
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
  const a = t.startsWith("top") ? -50 : 50;
  return {
    initial: { opacity: 0, y: a },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: a }
  };
}, cr = ({
  message: t,
  type: u = "info",
  duration: a = 3e3,
  show: s,
  onClose: g,
  className: d,
  position: i = "bottom-center"
}) => {
  const { main: m, contrast: f } = W("success"), { main: v, contrast: l } = W("danger"), { main: p, contrast: Y } = W("warning"), { main: N, contrast: B } = W("info"), _ = {
    success: {
      bg: m,
      color: f,
      icon: /* @__PURE__ */ e(vt, { size: 20 })
    },
    error: { bg: v, color: l, icon: /* @__PURE__ */ e(Mt, { size: 20 }) },
    warning: {
      bg: p,
      color: Y,
      icon: /* @__PURE__ */ e(Ct, { size: 20 })
    },
    info: { bg: N, color: B, icon: /* @__PURE__ */ e(bt, { size: 20 }) }
  }, { bg: h, color: M, icon: w } = _[u];
  oe(() => {
    if (s && a) {
      const x = setTimeout(() => g?.(), a);
      return () => clearTimeout(x);
    }
  }, [s, a]);
  const r = It(i);
  return /* @__PURE__ */ e(ae, { children: s && /* @__PURE__ */ e("div", { className: `fixed z-9999 pointer-events-none w-[95vw] max-w-[360px] ${Dt[i]}`, children: /* @__PURE__ */ S(
    F.div,
    {
      ...r,
      transition: { duration: 0.3 },
      className: `pointer-events-auto w-full rounded-lg! p-4! flex items-center shadow-lg ${d}`,
      style: { backgroundColor: h, color: M },
      children: [
        /* @__PURE__ */ S("div", { className: "flex items-center gap-2 flex-1", children: [
          w,
          /* @__PURE__ */ e(Xe, { className: "text-[14px] font-medium", children: t })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => g?.(),
            style: {
              marginLeft: 12,
              padding: 6,
              borderRadius: "50%"
            },
            children: /* @__PURE__ */ e(kt, { size: 18 })
          }
        )
      ]
    }
  ) }) });
}, dr = ({
  isOpen: t,
  onDismiss: u,
  title: a,
  subtitle: s,
  children: g,
  footer: d,
  showCloseButton: i = !0,
  className: m,
  headerClassName: f,
  contentClassName: v,
  footerClassName: l,
  ...p
}) => /* @__PURE__ */ S(
  Te,
  {
    isOpen: t,
    onDidDismiss: u,
    className: X("rounded-lg overflow-hidden modal-height-full", m),
    ...p,
    children: [
      (a || s || i) && /* @__PURE__ */ e(Je, { className: X("ion-no-border", f), children: /* @__PURE__ */ e(Qe, { children: /* @__PURE__ */ S("div", { className: "flex flex-col items-center text-center w-full", children: [
        /* @__PURE__ */ e("div", { className: "w-full flex justify-end", children: i && /* @__PURE__ */ e(Ke, { slot: "end", children: /* @__PURE__ */ e(Ce, { onClick: u, children: /* @__PURE__ */ e(Oe, { size: 20 }) }) }) }),
        /* @__PURE__ */ S("div", { className: "flex flex-col", children: [
          a && /* @__PURE__ */ e(et, { className: "text-lg font-semibold", children: a }),
          s && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: s })
        ] })
      ] }) }) }),
      /* @__PURE__ */ e(
        tt,
        {
          style: {
            "--padding-start": "1rem",
            "--padding-end": "1rem",
            "--padding-top": "1rem",
            "--padding-bottom": "1rem"
          },
          className: X("!p-4 text-gray-700 dark:text-gray-200", v),
          children: g
        }
      ),
      d && /* @__PURE__ */ e(Be, { className: X("border-t border-gray-200 dark:border-gray-700 !p-4", l), children: d })
    ]
  }
);
function Nt() {
  const [t, u] = U("action-sheet");
  return oe(() => {
    const a = window.matchMedia("(min-width: 768px)"), s = (g) => {
      u(g.matches ? "popover" : "action-sheet");
    };
    return s(a), a.addEventListener("change", s), () => a.removeEventListener("change", s);
  }, []), t;
}
function ur({
  label: t,
  value: u,
  items: a,
  getLabel: s,
  getValue: g,
  onValueChange: d,
  placeholder: i = "Selecione...",
  error: m = !1,
  helperText: f = "",
  disabled: v = !1,
  loading: l = !1,
  color: p = "neutral",
  style: Y,
  fill: N = "outline",
  shape: B = "round",
  ..._
}) {
  const h = Le(null), M = Nt(), { main: w } = W(p), r = (I) => {
    const L = I.detail.value, T = a.find((O) => g(O) === L);
    T && d(T);
  }, x = {
    ...Y,
    "--border-color": m ? gt.danger : w,
    "--icon-color": w,
    "--color": "var(--cb-color-dark)",
    "--placeholder-color": "var(--cb-color-border)"
  };
  return /* @__PURE__ */ S("div", { className: "relative flex flex-col", style: { minHeight: 72 }, children: [
    t && /* @__PURE__ */ e("label", { className: "text-xs font-medium pl-6!", children: t }),
    /* @__PURE__ */ e(
      rt,
      {
        ref: h,
        interface: M,
        placeholder: i,
        value: u,
        disabled: v || l,
        onIonChange: r,
        onClick: (I) => {
          I.persist?.(), _.interfaceOptions = {
            ..._.interfaceOptions,
            event: I.nativeEvent
          };
        },
        interfaceOptions: {
          header: t
        },
        fill: N,
        shape: B,
        mode: "md",
        labelPlacement: "stacked",
        style: x,
        ..._,
        children: a.map((I, L) => /* @__PURE__ */ e(nt, { value: g(I), children: s(I) }, L))
      }
    ),
    m && f && /* @__PURE__ */ e(fe, { className: "text-[12px] pl-6! text-(--cb-color-danger)", children: f })
  ] });
}
const hr = ({
  isOpen: t = !1,
  message: u = "Carregando...",
  color: a = "primary",
  type: s = "circular",
  withBg: g = !0,
  withText: d = !0
}) => {
  const { main: i, contrast: m } = W(a);
  return t ? s === "linear" ? /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ S(
    F.div,
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
          F.div,
          {
            style: {
              height: "100%",
              width: "50%",
              backgroundColor: i,
              opacity: 1,
              position: "absolute",
              borderRadius: 2
            },
            animate: { x: ["-100%", "200%"] },
            transition: { repeat: 1 / 0, duration: 1.5, ease: "easeInOut" }
          }
        ),
        /* @__PURE__ */ e(
          F.div,
          {
            style: {
              height: "100%",
              width: "50%",
              backgroundColor: i,
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
  ) }) : /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ e(
    F.div,
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
            backgroundColor: g ? i : "transparent",
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
            s === "circular" ? /* @__PURE__ */ e(ie, { name: "crescent", color: "light" }) : /* @__PURE__ */ e("div", { style: { display: "flex", gap: "0.5rem" }, children: [...Array(3)].map((f, v) => /* @__PURE__ */ e(
              F.div,
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
                  delay: v * 0.2
                }
              },
              v
            )) }),
            d && /* @__PURE__ */ e("span", { style: { fontSize: "14px", fontWeight: 500, textAlign: "center" }, children: u })
          ]
        }
      )
    }
  ) }) : null;
}, fr = ({
  content: t,
  children: u,
  color: a = "light",
  placement: s = "top",
  trigger: g = "hover",
  stopPropagation: d = !1,
  tooltipStyle: i = {}
}) => {
  const [m, f] = U(!1), { main: v, contrast: l } = W(a), p = {
    top: { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8 },
    bottom: { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8 },
    left: { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: 8 },
    right: { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: 8 }
  };
  return /* @__PURE__ */ S(
    "div",
    {
      className: "relative inline-block",
      onMouseEnter: () => g === "hover" && f(!0),
      onMouseLeave: () => g === "hover" && f(!1),
      onClick: (_) => {
        g === "click" && (d && _.stopPropagation(), f(!m));
      },
      children: [
        u,
        /* @__PURE__ */ e(ae, { children: m && /* @__PURE__ */ e(
          F.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { duration: 0.2 },
            style: {
              ...p[s],
              position: "absolute",
              backgroundColor: v,
              color: l,
              padding: "0.4rem 0.8rem",
              borderRadius: "8px",
              whiteSpace: "normal",
              // agora quebra linha
              fontSize: "0.875rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              zIndex: 9999,
              ...i
              // aplica estilos customizados
            },
            children: t
          }
        ) })
      ]
    }
  );
}, St = {
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
}, zt = {
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
}, _t = {
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
}, Lt = {
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
}, Tt = {
  0: "gap-x-0",
  1: "gap-x-1",
  2: "gap-x-2",
  3: "gap-x-3",
  4: "gap-x-4",
  5: "gap-x-5",
  6: "gap-x-6"
}, Ht = {
  0: "gap-y-0",
  1: "gap-y-1",
  2: "gap-y-2",
  3: "gap-y-3",
  4: "gap-y-4",
  5: "gap-y-5",
  6: "gap-y-6"
};
function mr({ children: t, gap: u = 4, gapX: a, gapY: s, className: g }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: X(
        "grid grid-cols-1 md:grid-cols-12",
        a ? Tt[a] : Bt[u],
        s ? Ht[s] : void 0,
        g
      ),
      children: t
    }
  );
}
const pr = ({
  label: t,
  value: u,
  placeholder: a = "",
  rows: s = 4,
  error: g,
  disabled: d = !1,
  color: i = "neutral",
  onChangeValue: m,
  fill: f = "outline",
  shape: v = "round",
  maxLength: l,
  ...p
}) => {
  const { main: Y } = W(i), { main: N } = W("danger"), [B, _] = U(!1), [h, M] = U(!1);
  oe(() => M(!!u), [u]);
  const w = g ? N : B || h ? Y : "var(--cb-color-border)", r = l ? l - u.length : void 0, x = r !== void 0 && r < 0;
  return /* @__PURE__ */ S("div", { className: "relative flex flex-col", style: { minHeight: 72 }, children: [
    t && /* @__PURE__ */ e("label", { className: "text-xs font-medium pl-6", children: t }),
    /* @__PURE__ */ e(
      ot,
      {
        value: u,
        placeholder: a,
        rows: s,
        fill: f,
        shape: v === "round" ? "round" : void 0,
        disabled: d,
        labelPlacement: "stacked",
        maxlength: l,
        style: {
          "--border-color": w,
          "--highlight-color-focused": Y,
          color: "var(--cb-color-dark)"
        },
        className: X(
          "text-sm resize-none focus:outline-none",
          d && "opacity-60 cursor-not-allowed"
        ),
        onIonFocus: () => _(!0),
        onIonBlur: () => _(!1),
        onIonInput: (I) => m(I.detail.value ?? ""),
        ...p
      }
    ),
    /* @__PURE__ */ S("div", { className: "flex justify-between mt-1", children: [
      /* @__PURE__ */ e(fe, { className: "text-[12px] pl-6 text-(--cb-color-danger)", children: g && /* @__PURE__ */ e("span", { children: g }) }),
      l && /* @__PURE__ */ S(
        fe,
        {
          className: X(
            "text-[12px] pr-6",
            x ? "text-(--cb-color-danger)" : "text-gray-500"
          ),
          children: [
            r,
            " caractere",
            r === 1 ? "" : "s",
            " restantes"
          ]
        }
      )
    ] })
  ] });
}, gr = ({
  label: t,
  checked: u,
  disabled: a = !1,
  type: s = "checkbox",
  onChange: g,
  color: d = "primary",
  labelPlacement: i = "start",
  styleDiv: m
}) => {
  const { main: f, contrast: v } = W(d);
  if (s === "switch")
    return /* @__PURE__ */ e("div", { className: `w-auto ${m}`, children: /* @__PURE__ */ e(
      at,
      {
        checked: u,
        disabled: a,
        color: d,
        labelPlacement: i,
        onIonChange: (l) => g(l.detail.checked),
        style: {
          "--background-checked": f,
          // fundo quando ativo
          "--handle-background-checked": v
          // cor do "pino" quando ativo
        },
        children: t
      }
    ) });
  if (s === "radio")
    return /* @__PURE__ */ e("div", { className: `w-auto ${m}`, children: /* @__PURE__ */ e(
      it,
      {
        value: u ? "selected" : "unselected",
        onIonChange: (l) => g(l.detail.value === "selected"),
        className: "flex items-center gap-2",
        children: /* @__PURE__ */ e(
          st,
          {
            value: "selected",
            color: d,
            disabled: a,
            labelPlacement: i,
            className: "flex-1",
            style: {
              "--background-checked": f,
              "--border-color": f,
              "--border-color-checked": f,
              "--mark-color": v
              // cor do ponto central
            },
            children: t && /* @__PURE__ */ e("span", { children: t })
          }
        )
      }
    ) });
  if (s === "checkbox")
    return /* @__PURE__ */ e("div", { className: `w-auto ${m}`, children: /* @__PURE__ */ e(
      lt,
      {
        checked: u,
        disabled: a,
        color: d,
        labelPlacement: i,
        onIonChange: (l) => g(l.detail.checked),
        style: {
          "--border-color": f,
          // borda normal
          "--background-checked": f,
          // fundo quando marcado
          "--border-color-checked": f,
          // borda quando marcado
          "--checkmark-color": v
          // cor do check
        },
        children: t && /* @__PURE__ */ e("span", { className: "ml-2", children: t })
      }
    ) });
}, vr = ({
  tooltip: t,
  icon: u = Ae,
  onClick: a,
  recording: s,
  loading: g = !1,
  showCancel: d = !1,
  onCancel: i,
  cancelIcon: m = Oe,
  disabled: f = !1,
  className: v,
  color: l = "primary"
}) => {
  const [p, Y] = U(!0), [N, B] = U(!0), { main: _, contrast: h } = W(l);
  return oe(() => {
    const M = setTimeout(() => {
      Y(!1), setTimeout(() => {
        B(!1);
      }, 800);
    }, 3e3);
    return () => clearTimeout(M);
  }, []), /* @__PURE__ */ e("div", { style: { position: "relative" }, children: /* @__PURE__ */ e(ae, { mode: "wait", children: /* @__PURE__ */ S(
    F.div,
    {
      className: `fixed bottom-24 right-2 z-1000 flex-center ${v} `,
      animate: p ? { width: 250, height: 55 } : { width: 55, height: 55 },
      transition: { duration: 0.8, ease: "easeInOut" },
      children: [
        /* @__PURE__ */ S(He, { vertical: "bottom", horizontal: "end", slot: "fixed", children: [
          /* @__PURE__ */ e(
            we,
            {
              onClick: a,
              disabled: f || g,
              style: {
                "--box-shadow": !p && "none",
                "--background": _,
                "--color": h
              },
              children: g ? /* @__PURE__ */ e(
                ie,
                {
                  name: "crescent",
                  className: "text-(--cb-color-text-fixed)"
                }
              ) : Me.createElement(u, { className: "text-[26px]" })
            }
          ),
          d && i && /* @__PURE__ */ e(
            F.div,
            {
              className: "absolute bottom-17.5 right-3 pointer-events-none",
              animate: s ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: 10, pointerEvents: "none" },
              transition: { duration: 0.3 },
              children: /* @__PURE__ */ e(
                we,
                {
                  color: "danger",
                  className: "w-8.75 h-8.75",
                  onClick: i,
                  children: Me.createElement(m, {
                    className: "text-[22px]"
                  })
                }
              )
            }
          )
        ] }),
        t && N && /* @__PURE__ */ e(
          F.div,
          {
            className: "absolute right-2.5 bottom-2 pr-13 h-14.5 overflow-hidden rounded-full flex items-center justify-center",
            style: { backgroundColor: _, color: h },
            initial: { width: 0, opacity: 0, filter: "blur(4px)" },
            animate: p ? { width: "auto", opacity: 1, filter: "blur(0px)" } : { width: 0, opacity: 0, filter: "blur(4px)" },
            transition: { duration: 0.5, ease: "easeOut" },
            children: /* @__PURE__ */ e(
              F.div,
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
}, je = Ee(
  null
);
function Fe() {
  const t = Ve(je);
  if (!t)
    throw new Error("useCBStepper must be used inside a CBStepperProvider.");
  return t;
}
const Ot = ({
  steps: t,
  color: u = "primary",
  className: a,
  classNameContent: s,
  style: g,
  showButtonNext: d = !0,
  showButtonPrev: i = !0,
  nextLabel: m = "Próximo",
  prevLabel: f = "Voltar",
  disableNext: v,
  disablePrev: l,
  theme: p
}) => {
  const { activeIndex: Y, next: N, prev: B, canNext: _, canPrev: h } = Fe(), { main: M, contrast: w } = W(u), r = p?.stepper, x = r?.circle?.background ?? M, I = r?.circle?.text ?? w, L = r?.line ?? M;
  return /* @__PURE__ */ S("div", { className: `flex flex-col gap-4 ${a ?? ""}`, style: g, children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-between w-full relative", children: t.map((T, O) => {
      const H = O === Y, b = O < Y;
      return /* @__PURE__ */ S(
        "div",
        {
          className: "flex-1 relative flex flex-col items-center",
          children: [
            /* @__PURE__ */ S("div", { className: "relative flex items-center justify-center w-full", children: [
              O < t.length - 1 && /* @__PURE__ */ S(
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
                      F.div,
                      {
                        style: {
                          position: "absolute",
                          inset: 0,
                          background: L,
                          transformOrigin: "left"
                        },
                        initial: !1,
                        animate: {
                          scaleX: b ? 1 : 0
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
                F.div,
                {
                  className: "w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 cursor-pointer shrink-0",
                  initial: !1,
                  animate: {
                    backgroundColor: H || b ? x : "#ffffff",
                    borderColor: H || b ? x : "#d1d5db",
                    color: H || b ? I : "#6b7280",
                    scale: H ? [1, 1.08, 1] : 1
                  },
                  transition: {
                    backgroundColor: {
                      duration: 0.2,
                      delay: H || b ? 0.4 : 0
                    },
                    borderColor: {
                      duration: 0.2,
                      delay: H || b ? 0.4 : 0
                    },
                    color: {
                      duration: 0.2,
                      delay: H || b ? 0.4 : 0
                    },
                    scale: {
                      duration: 0.25,
                      delay: H || b ? 0.4 : 0,
                      ease: "easeOut"
                    }
                  },
                  whileHover: { scale: 1.1 },
                  whileTap: { scale: 0.95 },
                  children: T.icon ?? O + 1
                }
              )
            ] }),
            /* @__PURE__ */ e(
              "span",
              {
                className: "text-sm text-center mt-2",
                style: { color: r?.titleColor },
                children: T.title
              }
            )
          ]
        },
        O
      );
    }) }),
    /* @__PURE__ */ e("div", { className: s, children: t.map((T, O) => /* @__PURE__ */ e(
      "div",
      {
        style: { display: O === Y ? "block" : "none" },
        children: T.content
      },
      O
    )) }),
    /* @__PURE__ */ S("div", { className: "flex justify-between w-full mt-2", children: [
      i && /* @__PURE__ */ e(
        pe,
        {
          disabled: l ? l(Y) : !h,
          onClick: B,
          iconStart: /* @__PURE__ */ e(wt, {}),
          children: typeof f == "function" ? f(Y, t.length) : f,
          color: u,
          variant: r?.button?.prev?.variant ?? "solid",
          backgroundColor: r?.button?.prev?.background,
          textColor: r?.button?.prev?.text,
          borderColor: r?.button?.prev?.border,
          hoverColor: r?.button?.prev?.hover,
          rounded: r?.button?.prev?.rounded,
          activeColor: r?.button?.prev?.active
        }
      ),
      d && /* @__PURE__ */ e(
        pe,
        {
          disabled: v ? v(Y) : !_,
          onClick: N,
          iconEnd: /* @__PURE__ */ e(Yt, {}),
          children: typeof m == "function" ? m(Y, t.length) : m,
          color: u,
          variant: r?.button?.next?.variant ?? "solid",
          backgroundColor: r?.button?.next?.background,
          textColor: r?.button?.next?.text,
          borderColor: r?.button?.next?.border,
          hoverColor: r?.button?.next?.hover,
          rounded: r?.button?.next?.rounded,
          activeColor: r?.button?.next?.active
        }
      )
    ] })
  ] });
}, At = ({
  steps: t,
  color: u = "primary",
  className: a,
  classNameContent: s,
  style: g,
  showButtonNext: d = !0,
  showButtonPrev: i = !0,
  nextLabel: m = "Próximo",
  prevLabel: f = "Voltar",
  disableNext: v,
  disablePrev: l,
  theme: p
}) => {
  const { activeIndex: Y, next: N, prev: B, canNext: _, canPrev: h } = Fe(), { main: M, contrast: w } = W(u), r = p?.stepper, x = r?.circle?.background ?? M, I = r?.circle?.text ?? w, L = r?.line ?? M, T = r?.titleColor ?? "#111827";
  return /* @__PURE__ */ e("div", { className: `flex flex-col gap-4 ${a ?? ""}`, style: g, children: t.map((O, H) => {
    const b = H === Y, $ = H < Y;
    return /* @__PURE__ */ S("div", { className: "relative flex items-start gap-4", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-col items-center relative", children: /* @__PURE__ */ e(
        F.div,
        {
          className: "w-10 h-10 rounded-full border-2 flex items-center justify-center cursor-pointer z-10",
          style: {
            backgroundColor: b || $ ? x : "#ffffff",
            color: b || $ ? I : "#6b7280",
            borderColor: b || $ ? x : "#d1d5db"
          },
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.95 },
          children: O.icon ?? H + 1
        }
      ) }),
      H !== t.length - 1 && /* @__PURE__ */ e(
        F.div,
        {
          style: {
            width: 2,
            backgroundColor: b || $ ? L : "#d1d5db",
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
            style: { color: T },
            children: O.title
          }
        ),
        /* @__PURE__ */ S(
          F.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: {
              height: b ? "auto" : 0,
              opacity: b ? 1 : 0
            },
            transition: { duration: 0.4, ease: "easeInOut" },
            className: "overflow-hidden mt-1",
            children: [
              /* @__PURE__ */ e("div", { className: `mb-2 ${s}`, children: O.content }),
              /* @__PURE__ */ S("div", { className: "flex w-full mt-2 pb-2", children: [
                d && /* @__PURE__ */ e(
                  pe,
                  {
                    disabled: v ? v(Y) : !_,
                    onClick: N,
                    children: typeof m == "function" ? m(Y, t.length) : m,
                    color: u,
                    className: "text-[12px]! mr-2",
                    variant: r?.button?.next?.variant ?? "solid",
                    backgroundColor: r?.button?.next?.background,
                    textColor: r?.button?.next?.text,
                    borderColor: r?.button?.next?.border,
                    hoverColor: r?.button?.next?.hover,
                    rounded: r?.button?.next?.rounded,
                    activeColor: r?.button?.next?.active
                  }
                ),
                i && /* @__PURE__ */ e(
                  pe,
                  {
                    disabled: l ? l(Y) : !h,
                    onClick: B,
                    children: typeof f == "function" ? f(Y, t.length) : f,
                    color: u,
                    variant: r?.button?.prev?.variant ?? "clear",
                    className: "text-[12px]!",
                    backgroundColor: r?.button?.prev?.background,
                    textColor: r?.button?.prev?.text,
                    borderColor: r?.button?.prev?.border,
                    hoverColor: r?.button?.prev?.hover,
                    rounded: r?.button?.prev?.rounded,
                    activeColor: r?.button?.prev?.active
                  }
                )
              ] })
            ]
          }
        )
      ] })
    ] }, H);
  }) });
}, jt = ({
  children: t,
  initialStep: u = 0,
  totalSteps: a,
  onNext: s,
  onPrev: g
}) => {
  const [d, i] = U(u);
  oe(() => {
    i(u);
  }, [u]);
  const m = ye(async () => d >= a - 1 || s && await s(d) === !1 ? !1 : (i((p) => p + 1), !0), [d, a, s]), f = ye(async () => d <= 0 || g && await g(d) === !1 ? !1 : (i((p) => p - 1), !0), [d, g]), v = ye(() => {
    i(u);
  }, [u]), l = $e(
    () => ({
      activeIndex: d,
      totalSteps: a,
      next: m,
      prev: f,
      reset: v,
      canNext: d < a - 1,
      canPrev: d > 0,
      isFirst: d === 0,
      isLast: d === a - 1
    }),
    [d, a, m, f, v]
  );
  return /* @__PURE__ */ e(je.Provider, { value: l, children: t });
}, xr = ({
  steps: t,
  variant: u = "tabs",
  initialStep: a = 0,
  orientation: s = "horizontal",
  color: g = "primary",
  className: d,
  style: i,
  classNameContent: m,
  showButtonPrev: f = !0,
  showButtonNext: v = !0,
  nextLabel: l,
  prevLabel: p,
  disableNext: Y,
  disablePrev: N,
  onNext: B,
  onPrev: _,
  onTabChange: h,
  theme: M
}) => {
  const [w, r] = U(a);
  if (u === "tabs") {
    const x = M?.tabs;
    return /* @__PURE__ */ S("div", { style: i, children: [
      /* @__PURE__ */ e(
        ct,
        {
          scrollable: x?.segment?.scrollable,
          value: w.toString(),
          onIonChange: (I) => {
            const L = I.detail.value;
            if (L != null) {
              const T = parseInt(L.toString(), 10);
              r(T), h?.(T);
            }
          },
          style: {
            background: x?.segment?.background,
            borderRadius: x?.segment?.borderRadius,
            padding: x?.segment?.padding,
            border: x?.segment?.border
          },
          className: `w-full ${d} ${x?.segment?.hideIndicator ? "cb-tabs-no-indicator" : ""}`,
          children: t.map((I, L) => {
            const T = L === w;
            return /* @__PURE__ */ e(
              dt,
              {
                value: L.toString(),
                style: {
                  background: T ? x?.button?.activeBackground : x?.button?.background,
                  color: T ? x?.button?.activeText : x?.button?.text,
                  border: x?.button?.border,
                  borderRadius: x?.button?.rounded !== !1 ? "9999px" : void 0
                },
                children: /* @__PURE__ */ e(me, { children: I.title })
              },
              L
            );
          })
        }
      ),
      /* @__PURE__ */ e("div", { className: m ?? "p-4", children: t[w].content })
    ] });
  }
  if (u === "accordion") {
    const x = M?.accordion;
    return /* @__PURE__ */ e(
      ut,
      {
        value: w.toString(),
        onIonChange: (I) => {
          r(parseInt(I.detail.value ?? "-1", 10));
        },
        className: `${d ?? ""} ${x?.indicator?.hide ? "cb-acc-no-indicator" : ""}`,
        style: i,
        children: t.map((I, L) => /* @__PURE__ */ S(
          ht,
          {
            value: L.toString(),
            children: [
              /* @__PURE__ */ e(
                Ye,
                {
                  slot: "header",
                  style: {
                    background: x?.header?.background,
                    color: x?.header?.color,
                    border: x?.header?.border,
                    borderRadius: x?.header?.borderRadius,
                    padding: x?.header?.padding,
                    "--ripple-color": "transparent"
                  },
                  children: /* @__PURE__ */ e(me, { children: I.title })
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  slot: "content",
                  style: {
                    background: x?.content?.background,
                    color: x?.content?.color,
                    padding: x?.content?.padding ?? "16px"
                  },
                  children: I.content
                }
              )
            ]
          },
          L
        ))
      }
    );
  }
  if (u === "stepper") {
    const x = {
      steps: t,
      initialStep: a,
      color: g,
      className: d,
      style: i,
      classNameContent: m,
      showButtonPrev: f,
      showButtonNext: v,
      nextLabel: l,
      prevLabel: p,
      disableNext: Y,
      disablePrev: N,
      onNext: B,
      onPrev: _,
      theme: M
    };
    return /* @__PURE__ */ e(
      jt,
      {
        initialStep: a,
        totalSteps: t.length,
        onNext: B,
        onPrev: _,
        children: s === "horizontal" ? /* @__PURE__ */ e(Ot, { ...x }) : /* @__PURE__ */ e(At, { ...x })
      }
    );
  }
  return null;
};
var ce = { exports: {} }, Ft = ce.exports, Ie;
function Re() {
  return Ie || (Ie = 1, (function(t, u) {
    (function(a, s) {
      t.exports = s();
    })(Ft, (function() {
      var a = 1e3, s = 6e4, g = 36e5, d = "millisecond", i = "second", m = "minute", f = "hour", v = "day", l = "week", p = "month", Y = "quarter", N = "year", B = "date", _ = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, M = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(C) {
        var o = ["th", "st", "nd", "rd"], n = C % 100;
        return "[" + C + (o[(n - 20) % 10] || o[n] || o[0]) + "]";
      } }, r = function(C, o, n) {
        var y = String(C);
        return !y || y.length >= o ? C : "" + Array(o + 1 - y.length).join(n) + C;
      }, x = { s: r, z: function(C) {
        var o = -C.utcOffset(), n = Math.abs(o), y = Math.floor(n / 60), c = n % 60;
        return (o <= 0 ? "+" : "-") + r(y, 2, "0") + ":" + r(c, 2, "0");
      }, m: function C(o, n) {
        if (o.date() < n.date()) return -C(n, o);
        var y = 12 * (n.year() - o.year()) + (n.month() - o.month()), c = o.clone().add(y, p), k = n - c < 0, D = o.clone().add(y + (k ? -1 : 1), p);
        return +(-(y + (n - c) / (k ? c - D : D - c)) || 0);
      }, a: function(C) {
        return C < 0 ? Math.ceil(C) || 0 : Math.floor(C);
      }, p: function(C) {
        return { M: p, y: N, w: l, d: v, D: B, h: f, m, s: i, ms: d, Q: Y }[C] || String(C || "").toLowerCase().replace(/s$/, "");
      }, u: function(C) {
        return C === void 0;
      } }, I = "en", L = {};
      L[I] = w;
      var T = "$isDayjsObject", O = function(C) {
        return C instanceof P || !(!C || !C[T]);
      }, H = function C(o, n, y) {
        var c;
        if (!o) return I;
        if (typeof o == "string") {
          var k = o.toLowerCase();
          L[k] && (c = k), n && (L[k] = n, c = k);
          var D = o.split("-");
          if (!c && D.length > 1) return C(D[0]);
        } else {
          var z = o.name;
          L[z] = o, c = z;
        }
        return !y && c && (I = c), c || !y && I;
      }, b = function(C, o) {
        if (O(C)) return C.clone();
        var n = typeof o == "object" ? o : {};
        return n.date = C, n.args = arguments, new P(n);
      }, $ = x;
      $.l = H, $.i = O, $.w = function(C, o) {
        return b(C, { locale: o.$L, utc: o.$u, x: o.$x, $offset: o.$offset });
      };
      var P = (function() {
        function C(n) {
          this.$L = H(n.locale, null, !0), this.parse(n), this.$x = this.$x || n.x || {}, this[T] = !0;
        }
        var o = C.prototype;
        return o.parse = function(n) {
          this.$d = (function(y) {
            var c = y.date, k = y.utc;
            if (c === null) return /* @__PURE__ */ new Date(NaN);
            if ($.u(c)) return /* @__PURE__ */ new Date();
            if (c instanceof Date) return new Date(c);
            if (typeof c == "string" && !/Z$/i.test(c)) {
              var D = c.match(h);
              if (D) {
                var z = D[2] - 1 || 0, A = (D[7] || "0").substring(0, 3);
                return k ? new Date(Date.UTC(D[1], z, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, A)) : new Date(D[1], z, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, A);
              }
            }
            return new Date(c);
          })(n), this.init();
        }, o.init = function() {
          var n = this.$d;
          this.$y = n.getFullYear(), this.$M = n.getMonth(), this.$D = n.getDate(), this.$W = n.getDay(), this.$H = n.getHours(), this.$m = n.getMinutes(), this.$s = n.getSeconds(), this.$ms = n.getMilliseconds();
        }, o.$utils = function() {
          return $;
        }, o.isValid = function() {
          return this.$d.toString() !== _;
        }, o.isSame = function(n, y) {
          var c = b(n);
          return this.startOf(y) <= c && c <= this.endOf(y);
        }, o.isAfter = function(n, y) {
          return b(n) < this.startOf(y);
        }, o.isBefore = function(n, y) {
          return this.endOf(y) < b(n);
        }, o.$g = function(n, y, c) {
          return $.u(n) ? this[y] : this.set(c, n);
        }, o.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, o.valueOf = function() {
          return this.$d.getTime();
        }, o.startOf = function(n, y) {
          var c = this, k = !!$.u(y) || y, D = $.p(n), z = function(Q, V) {
            var G = $.w(c.$u ? Date.UTC(c.$y, V, Q) : new Date(c.$y, V, Q), c);
            return k ? G : G.endOf(v);
          }, A = function(Q, V) {
            return $.w(c.toDate()[Q].apply(c.toDate("s"), (k ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(V)), c);
          }, j = this.$W, R = this.$M, q = this.$D, te = "set" + (this.$u ? "UTC" : "");
          switch (D) {
            case N:
              return k ? z(1, 0) : z(31, 11);
            case p:
              return k ? z(1, R) : z(0, R + 1);
            case l:
              var K = this.$locale().weekStart || 0, ne = (j < K ? j + 7 : j) - K;
              return z(k ? q - ne : q + (6 - ne), R);
            case v:
            case B:
              return A(te + "Hours", 0);
            case f:
              return A(te + "Minutes", 1);
            case m:
              return A(te + "Seconds", 2);
            case i:
              return A(te + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, o.endOf = function(n) {
          return this.startOf(n, !1);
        }, o.$set = function(n, y) {
          var c, k = $.p(n), D = "set" + (this.$u ? "UTC" : ""), z = (c = {}, c[v] = D + "Date", c[B] = D + "Date", c[p] = D + "Month", c[N] = D + "FullYear", c[f] = D + "Hours", c[m] = D + "Minutes", c[i] = D + "Seconds", c[d] = D + "Milliseconds", c)[k], A = k === v ? this.$D + (y - this.$W) : y;
          if (k === p || k === N) {
            var j = this.clone().set(B, 1);
            j.$d[z](A), j.init(), this.$d = j.set(B, Math.min(this.$D, j.daysInMonth())).$d;
          } else z && this.$d[z](A);
          return this.init(), this;
        }, o.set = function(n, y) {
          return this.clone().$set(n, y);
        }, o.get = function(n) {
          return this[$.p(n)]();
        }, o.add = function(n, y) {
          var c, k = this;
          n = Number(n);
          var D = $.p(y), z = function(R) {
            var q = b(k);
            return $.w(q.date(q.date() + Math.round(R * n)), k);
          };
          if (D === p) return this.set(p, this.$M + n);
          if (D === N) return this.set(N, this.$y + n);
          if (D === v) return z(1);
          if (D === l) return z(7);
          var A = (c = {}, c[m] = s, c[f] = g, c[i] = a, c)[D] || 1, j = this.$d.getTime() + n * A;
          return $.w(j, this);
        }, o.subtract = function(n, y) {
          return this.add(-1 * n, y);
        }, o.format = function(n) {
          var y = this, c = this.$locale();
          if (!this.isValid()) return c.invalidDate || _;
          var k = n || "YYYY-MM-DDTHH:mm:ssZ", D = $.z(this), z = this.$H, A = this.$m, j = this.$M, R = c.weekdays, q = c.months, te = c.meridiem, K = function(V, G, ee, re) {
            return V && (V[G] || V(y, k)) || ee[G].slice(0, re);
          }, ne = function(V) {
            return $.s(z % 12 || 12, V, "0");
          }, Q = te || function(V, G, ee) {
            var re = V < 12 ? "AM" : "PM";
            return ee ? re.toLowerCase() : re;
          };
          return k.replace(M, (function(V, G) {
            return G || (function(ee) {
              switch (ee) {
                case "YY":
                  return String(y.$y).slice(-2);
                case "YYYY":
                  return $.s(y.$y, 4, "0");
                case "M":
                  return j + 1;
                case "MM":
                  return $.s(j + 1, 2, "0");
                case "MMM":
                  return K(c.monthsShort, j, q, 3);
                case "MMMM":
                  return K(q, j);
                case "D":
                  return y.$D;
                case "DD":
                  return $.s(y.$D, 2, "0");
                case "d":
                  return String(y.$W);
                case "dd":
                  return K(c.weekdaysMin, y.$W, R, 2);
                case "ddd":
                  return K(c.weekdaysShort, y.$W, R, 3);
                case "dddd":
                  return R[y.$W];
                case "H":
                  return String(z);
                case "HH":
                  return $.s(z, 2, "0");
                case "h":
                  return ne(1);
                case "hh":
                  return ne(2);
                case "a":
                  return Q(z, A, !0);
                case "A":
                  return Q(z, A, !1);
                case "m":
                  return String(A);
                case "mm":
                  return $.s(A, 2, "0");
                case "s":
                  return String(y.$s);
                case "ss":
                  return $.s(y.$s, 2, "0");
                case "SSS":
                  return $.s(y.$ms, 3, "0");
                case "Z":
                  return D;
              }
              return null;
            })(V) || D.replace(":", "");
          }));
        }, o.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, o.diff = function(n, y, c) {
          var k, D = this, z = $.p(y), A = b(n), j = (A.utcOffset() - this.utcOffset()) * s, R = this - A, q = function() {
            return $.m(D, A);
          };
          switch (z) {
            case N:
              k = q() / 12;
              break;
            case p:
              k = q();
              break;
            case Y:
              k = q() / 3;
              break;
            case l:
              k = (R - j) / 6048e5;
              break;
            case v:
              k = (R - j) / 864e5;
              break;
            case f:
              k = R / g;
              break;
            case m:
              k = R / s;
              break;
            case i:
              k = R / a;
              break;
            default:
              k = R;
          }
          return c ? k : $.a(k);
        }, o.daysInMonth = function() {
          return this.endOf(p).$D;
        }, o.$locale = function() {
          return L[this.$L];
        }, o.locale = function(n, y) {
          if (!n) return this.$L;
          var c = this.clone(), k = H(n, y, !0);
          return k && (c.$L = k), c;
        }, o.clone = function() {
          return $.w(this.$d, this);
        }, o.toDate = function() {
          return new Date(this.valueOf());
        }, o.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, o.toISOString = function() {
          return this.$d.toISOString();
        }, o.toString = function() {
          return this.$d.toUTCString();
        }, C;
      })(), E = P.prototype;
      return b.prototype = E, [["$ms", d], ["$s", i], ["$m", m], ["$H", f], ["$W", v], ["$M", p], ["$y", N], ["$D", B]].forEach((function(C) {
        E[C[1]] = function(o) {
          return this.$g(o, C[0], C[1]);
        };
      })), b.extend = function(C, o) {
        return C.$i || (C(o, P, b), C.$i = !0), b;
      }, b.locale = H, b.isDayjs = O, b.unix = function(C) {
        return b(1e3 * C);
      }, b.en = L[I], b.Ls = L, b.p = {}, b;
    }));
  })(ce)), ce.exports;
}
var Rt = Re();
const Z = /* @__PURE__ */ ke(Rt);
var de = { exports: {} }, Pt = de.exports, Ne;
function Et() {
  return Ne || (Ne = 1, (function(t, u) {
    (function(a, s) {
      t.exports = s(Re());
    })(Pt, (function(a) {
      function s(i) {
        return i && typeof i == "object" && "default" in i ? i : { default: i };
      }
      var g = s(a), d = { name: "pt-br", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(i) {
        return i + "º";
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
      return g.default.locale(d, null, !0), d;
    }));
  })(de)), de.exports;
}
Et();
function Vt(t) {
  return J({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "rect", attr: { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" } }, { tag: "line", attr: { x1: "16", x2: "16", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "8", x2: "8", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "3", x2: "21", y1: "10", y2: "10" } }] })(t);
}
var ue = { exports: {} }, Wt = ue.exports, Se;
function qt() {
  return Se || (Se = 1, (function(t, u) {
    (function(a, s) {
      t.exports = s();
    })(Wt, (function() {
      var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(s, g, d) {
        var i = g.prototype, m = i.format;
        d.en.formats = a, i.format = function(f) {
          f === void 0 && (f = "YYYY-MM-DDTHH:mm:ssZ");
          var v = this.$locale().formats, l = (function(p, Y) {
            return p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(N, B, _) {
              var h = _ && _.toUpperCase();
              return B || Y[_] || a[_] || Y[h].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(M, w, r) {
                return w || r.slice(1);
              }));
            }));
          })(f, v === void 0 ? {} : v);
          return m.call(this, l);
        };
      };
    }));
  })(ue)), ue.exports;
}
var Zt = qt();
const Ut = /* @__PURE__ */ ke(Zt);
var he = { exports: {} }, Gt = he.exports, ze;
function Xt() {
  return ze || (ze = 1, (function(t, u) {
    (function(a, s) {
      t.exports = s();
    })(Gt, (function() {
      var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, s = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, g = /\d/, d = /\d\d/, i = /\d\d?/, m = /\d*[^-_:/,()\s\d]+/, f = {}, v = function(h) {
        return (h = +h) + (h > 68 ? 1900 : 2e3);
      }, l = function(h) {
        return function(M) {
          this[h] = +M;
        };
      }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(h) {
        (this.zone || (this.zone = {})).offset = (function(M) {
          if (!M || M === "Z") return 0;
          var w = M.match(/([+-]|\d\d)/g), r = 60 * w[1] + (+w[2] || 0);
          return r === 0 ? 0 : w[0] === "+" ? -r : r;
        })(h);
      }], Y = function(h) {
        var M = f[h];
        return M && (M.indexOf ? M : M.s.concat(M.f));
      }, N = function(h, M) {
        var w, r = f.meridiem;
        if (r) {
          for (var x = 1; x <= 24; x += 1) if (h.indexOf(r(x, 0, M)) > -1) {
            w = x > 12;
            break;
          }
        } else w = h === (M ? "pm" : "PM");
        return w;
      }, B = { A: [m, function(h) {
        this.afternoon = N(h, !1);
      }], a: [m, function(h) {
        this.afternoon = N(h, !0);
      }], Q: [g, function(h) {
        this.month = 3 * (h - 1) + 1;
      }], S: [g, function(h) {
        this.milliseconds = 100 * +h;
      }], SS: [d, function(h) {
        this.milliseconds = 10 * +h;
      }], SSS: [/\d{3}/, function(h) {
        this.milliseconds = +h;
      }], s: [i, l("seconds")], ss: [i, l("seconds")], m: [i, l("minutes")], mm: [i, l("minutes")], H: [i, l("hours")], h: [i, l("hours")], HH: [i, l("hours")], hh: [i, l("hours")], D: [i, l("day")], DD: [d, l("day")], Do: [m, function(h) {
        var M = f.ordinal, w = h.match(/\d+/);
        if (this.day = w[0], M) for (var r = 1; r <= 31; r += 1) M(r).replace(/\[|\]/g, "") === h && (this.day = r);
      }], w: [i, l("week")], ww: [d, l("week")], M: [i, l("month")], MM: [d, l("month")], MMM: [m, function(h) {
        var M = Y("months"), w = (Y("monthsShort") || M.map((function(r) {
          return r.slice(0, 3);
        }))).indexOf(h) + 1;
        if (w < 1) throw new Error();
        this.month = w % 12 || w;
      }], MMMM: [m, function(h) {
        var M = Y("months").indexOf(h) + 1;
        if (M < 1) throw new Error();
        this.month = M % 12 || M;
      }], Y: [/[+-]?\d+/, l("year")], YY: [d, function(h) {
        this.year = v(h);
      }], YYYY: [/\d{4}/, l("year")], Z: p, ZZ: p };
      function _(h) {
        var M, w;
        M = h, w = f && f.formats;
        for (var r = (h = M.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(b, $, P) {
          var E = P && P.toUpperCase();
          return $ || w[P] || a[P] || w[E].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(C, o, n) {
            return o || n.slice(1);
          }));
        }))).match(s), x = r.length, I = 0; I < x; I += 1) {
          var L = r[I], T = B[L], O = T && T[0], H = T && T[1];
          r[I] = H ? { regex: O, parser: H } : L.replace(/^\[|\]$/g, "");
        }
        return function(b) {
          for (var $ = {}, P = 0, E = 0; P < x; P += 1) {
            var C = r[P];
            if (typeof C == "string") E += C.length;
            else {
              var o = C.regex, n = C.parser, y = b.slice(E), c = o.exec(y)[0];
              n.call($, c), b = b.replace(c, "");
            }
          }
          return (function(k) {
            var D = k.afternoon;
            if (D !== void 0) {
              var z = k.hours;
              D ? z < 12 && (k.hours += 12) : z === 12 && (k.hours = 0), delete k.afternoon;
            }
          })($), $;
        };
      }
      return function(h, M, w) {
        w.p.customParseFormat = !0, h && h.parseTwoDigitYear && (v = h.parseTwoDigitYear);
        var r = M.prototype, x = r.parse;
        r.parse = function(I) {
          var L = I.date, T = I.utc, O = I.args;
          this.$u = T;
          var H = O[1];
          if (typeof H == "string") {
            var b = O[2] === !0, $ = O[3] === !0, P = b || $, E = O[2];
            $ && (E = O[2]), f = this.$locale(), !b && E && (f = w.Ls[E]), this.$d = (function(y, c, k, D) {
              try {
                if (["x", "X"].indexOf(c) > -1) return new Date((c === "X" ? 1e3 : 1) * y);
                var z = _(c)(y), A = z.year, j = z.month, R = z.day, q = z.hours, te = z.minutes, K = z.seconds, ne = z.milliseconds, Q = z.zone, V = z.week, G = /* @__PURE__ */ new Date(), ee = R || (A || j ? 1 : G.getDate()), re = A || G.getFullYear(), se = 0;
                A && !j || (se = j > 0 ? j - 1 : G.getMonth());
                var le, ge = q || 0, ve = te || 0, xe = K || 0, be = ne || 0;
                return Q ? new Date(Date.UTC(re, se, ee, ge, ve, xe, be + 60 * Q.offset * 1e3)) : k ? new Date(Date.UTC(re, se, ee, ge, ve, xe, be)) : (le = new Date(re, se, ee, ge, ve, xe, be), V && (le = D(le).week(V).toDate()), le);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(L, H, T, w), this.init(), E && E !== !0 && (this.$L = this.locale(E).$L), P && L != this.format(H) && (this.$d = /* @__PURE__ */ new Date("")), f = {};
          } else if (H instanceof Array) for (var C = H.length, o = 1; o <= C; o += 1) {
            O[1] = H[o - 1];
            var n = w.apply(this, O);
            if (n.isValid()) {
              this.$d = n.$d, this.$L = n.$L, this.init();
              break;
            }
            o === C && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else x.call(this, I);
        };
      };
    }));
  })(he)), he.exports;
}
var Jt = Xt();
const Qt = /* @__PURE__ */ ke(Jt);
Z.locale("pt-br");
Z.extend(Qt);
Z.extend(Ut);
const _e = (t) => t ? "toDate" in t ? t.toDate() : t : null, br = ({
  value: t,
  onChange: u,
  label: a,
  format: s = "date",
  disabled: g,
  errorText: d,
  placeholder: i = "Selecionar data",
  minDate: m,
  maxDate: f,
  classNameInput: v,
  classNameContainer: l,
  withCalendar: p = !1,
  rounded: Y = !0,
  color: N = "neutral",
  pickerMode: B = "modal"
}) => {
  const { main: _, contrast: h } = W(N), [M, w] = U(!1), [r, x] = U(
    t ? Z(_e(t)).format("YYYY-MM-DDTHH:mm") : ""
  );
  oe(() => {
    x(
      t ? Z(_e(t)).format("YYYY-MM-DDTHH:mm") : ""
    );
  }, [t]);
  const I = () => {
    if (!r) return "";
    const b = Z(r);
    switch (s) {
      case "month-year":
        return b.format("MMM/YYYY");
      case "MMMM/YYYY":
        return b.format("MMMM/YYYY");
      case "datetime":
        return b.format("DD/MM/YYYY HH:mm");
      case "day":
        return b.format("DD");
      default:
        return b.format("DD/MM/YYYY");
    }
  }, L = () => {
    r && (u(Z(r).toDate()), w(!1));
  }, T = (b, $) => typeof $ == "number" ? Z().add($, "years").format("YYYY-MM-DD") : $ ?? b.format("YYYY-MM-DD"), O = () => {
    g || (x(r || Z().format("YYYY-MM-DDTHH:mm")), w(!0));
  }, H = Y ? "99999px" : "6px";
  return /* @__PURE__ */ S("div", { className: "relative", children: [
    /* @__PURE__ */ S(
      "div",
      {
        onClick: () => {
          x(r || Z().format("YYYY-MM-DDTHH:mm")), w(!0);
        },
        className: `relative flex flex-col ${l}`,
        children: [
          a && /* @__PURE__ */ e("label", { className: "text-xs font-medium pl-6", children: a }),
          /* @__PURE__ */ S("div", { className: "relative flex items-center w-full", onClick: O, children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                value: r ? I() : "",
                placeholder: i,
                disabled: g,
                style: {
                  borderRadius: H,
                  borderColor: _,
                  color: h
                },
                className: `w-full pr-4 pl-8 py-4 border outline-none placeholder-(--cb-color-border) ${v}`
              }
            ),
            p && /* @__PURE__ */ e(Vt, { className: "absolute right-8 text-[24px] text-gray-500 hover:text-blue-600 transition-colors cursor-pointer" })
          ] }),
          d && /* @__PURE__ */ S(fe, { className: "text-[12px] pl-6 text-(--cb-color-danger)", children: [
            " ",
            d,
            " "
          ] })
        ]
      }
    ),
    B === "modal" && /* @__PURE__ */ e(
      Te,
      {
        isOpen: M,
        onDidDismiss: () => w(!1),
        className: "custom-calendar-modal",
        children: /* @__PURE__ */ S("div", { className: "p-4 bg-white rounded-lg shadow-lg", children: [
          /* @__PURE__ */ e(
            De,
            {
              locale: "pt-BR",
              value: r,
              min: T(
                Z().subtract(10, "years").startOf("year"),
                m
              ),
              max: T(Z().add(50, "years").endOf("year"), f),
              presentation: s === "month-year" || s === "MMMM/YYYY" ? "month-year" : s === "datetime" ? "date-time" : "date",
              onIonChange: (b) => x(b.detail.value),
              showDefaultButtons: !1
            }
          ),
          /* @__PURE__ */ S("div", { className: "flex justify-end mt-4 gap-2", children: [
            /* @__PURE__ */ e(Ce, { color: "medium", onClick: () => w(!1), children: "Cancelar" }),
            /* @__PURE__ */ e(Ce, { onClick: L, children: "Confirmar" })
          ] })
        ] })
      }
    ),
    B === "dropdown" && M && /* @__PURE__ */ e("div", { className: "absolute z-50 mt-2 bg-white rounded-lg shadow-lg p-3", children: /* @__PURE__ */ e(
      De,
      {
        locale: "pt-BR",
        value: r,
        min: T(
          Z().subtract(10, "years").startOf("year"),
          m
        ),
        max: T(Z().add(50, "years").endOf("year"), f),
        presentation: s === "month-year" || s === "MMMM/YYYY" ? "month-year" : s === "datetime" ? "date-time" : "date",
        onIonChange: (b) => {
          x(b.detail.value), L();
        },
        showDefaultButtons: !1
      }
    ) })
  ] });
};
function yr({
  children: t,
  sm: u,
  md: a = 12,
  lg: s,
  xl: g,
  className: d
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: X(
        u && St[u],
        zt[a],
        s && _t[s],
        g && Lt[g],
        d
      ),
      children: t
    }
  );
}
function Mr({
  items: t,
  getLabel: u,
  getValue: a,
  onSelect: s,
  placeholder: g = "Pesquisar...",
  color: d = "neutral",
  rounded: i = !0,
  fullWidth: m = !0,
  loading: f = !1,
  variant: v = "search",
  label: l,
  className: p = "",
  style: Y = {},
  inputClass: N = "",
  inputStyle: B = {},
  dropdownClass: _ = "",
  dropdownStyle: h = {},
  itemClass: M = "",
  itemStyle: w = {},
  labelClass: r = ""
}) {
  const [x, I] = U(""), [L, T] = U(!1), O = Le(null), { main: H, contrast: b } = W(d), $ = $e(() => t.length > 0 ? t.filter(
    (o) => u(o).toLowerCase().includes(x.toLowerCase())
  ) : [], [t, x, u]), P = i ? "12px" : "6px", E = i ? "99999px" : "6px", C = () => {
    let o = O.current?.querySelector("input")?.clientHeight ?? 0;
    return v === "select" ? o += 20 : o += 10, /* @__PURE__ */ e(
      "div",
      {
        className: `absolute z-50 overflow-hidden max-h-64 overflow-y-auto shadow-lg ${_}`,
        style: {
          width: m ? "100%" : "auto",
          border: `1px solid ${H}`,
          borderRadius: P,
          backgroundColor: "var(--cb-color-light)",
          top: o,
          // 16px de gap entre input e dropdown (ja contando com o padding interno dos inputs)
          left: 0,
          ...h
        },
        children: f ? /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-4", children: /* @__PURE__ */ e(ie, { name: "crescent", style: { color: H } }) }) : /* @__PURE__ */ S(mt, { className: "p-0", children: [
          $.map((n) => /* @__PURE__ */ e(
            Ye,
            {
              button: !0,
              onMouseDown: () => {
                s(n), I(u(n)), T(!1);
              },
              style: { color: b, ...w },
              className: `hover:bg-gray-100 transition-colors ${M}`,
              children: /* @__PURE__ */ e(me, { children: u(n) })
            },
            a(n)
          )),
          $.length === 0 && /* @__PURE__ */ e(Ye, { children: /* @__PURE__ */ e(me, { className: "text-gray-500", children: "Nenhum resultado encontrado" }) })
        ] })
      }
    );
  };
  return v === "select" ? /* @__PURE__ */ S(
    "div",
    {
      ref: O,
      className: `relative ${m ? "w-full" : "w-auto"} flex flex-col ${p}`,
      style: { minHeight: 72, ...Y },
      children: [
        l && /* @__PURE__ */ e("label", { className: `text-xs font-medium pl-6 ${r}`, children: l }),
        /* @__PURE__ */ e(
          "input",
          {
            value: x,
            onChange: (o) => I(o.target.value),
            placeholder: g,
            onFocus: () => T(!0),
            onBlur: () => setTimeout(() => T(!1), 150),
            className: `w-full pr-4 pl-8 py-4 border outline-none placeholder-(--cb-color-border) ${N}`,
            style: {
              borderColor: H,
              borderRadius: E,
              color: b,
              ...B
            }
          }
        ),
        L && C()
      ]
    }
  ) : /* @__PURE__ */ S(
    "div",
    {
      ref: O,
      className: `relative ${m ? "w-full" : "w-auto"} ${p}`,
      style: Y,
      children: [
        /* @__PURE__ */ e(
          ft,
          {
            value: x,
            onIonInput: (o) => I(o.detail.value),
            placeholder: g,
            onIonFocus: () => T(!0),
            onIonBlur: () => setTimeout(() => T(!1), 150),
            onIonClear: () => {
              I(""), s(void 0);
            },
            className: N,
            style: {
              "--background": "var(--cb-color-light)",
              "--border-color": H,
              "--border-radius": E,
              color: b,
              ...B
            }
          }
        ),
        L && C()
      ]
    }
  );
}
const Cr = ({
  icon: t = Ae,
  onClick: u,
  loading: a = !1,
  disabled: s = !1,
  color: g = "primary",
  className: d
}) => {
  const { main: i, contrast: m } = W(g);
  return /* @__PURE__ */ e("div", { className: "relative w-full left-1/2 ", children: /* @__PURE__ */ e(
    F.div,
    {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { type: "spring", stiffness: 120, damping: 15 },
      className: `fixed bottom-[40px]  z-50 ${d}`,
      children: /* @__PURE__ */ e(He, { vertical: "bottom", horizontal: "center", slot: "fixed", children: /* @__PURE__ */ e(
        we,
        {
          onClick: u,
          disabled: s || a,
          style: { "--box-shadow": "none", "--background": i, "--color": m },
          children: a ? /* @__PURE__ */ e(ie, { name: "crescent", color: m.includes("light") ? "light" : "dark" }) : Me.createElement(t, { className: "text-[28px]" })
        }
      ) })
    }
  ) });
}, Kt = ({
  isEmpty: t = !0,
  children: u,
  messages: a,
  title: s,
  icon: g,
  buttonLabel: d,
  onButtonClick: i,
  color: m = "primary",
  colorBg: f = "#ecececbe",
  theme: v = {}
}) => {
  if (!t)
    return /* @__PURE__ */ e(Pe, { children: u });
  const { main: l } = W(m), p = $e(() => {
    const Y = a || ["Nenhum dado encontrado"], N = Math.floor(Math.random() * Y.length);
    return Y[N];
  }, [a]);
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
        ...v.container
      },
      children: /* @__PURE__ */ S(
        F.div,
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
            backgroundColor: f,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...v.card
          },
          children: [
            g,
            s && /* @__PURE__ */ e(
              "div",
              {
                style: {
                  fontWeight: 600,
                  marginBottom: 4,
                  ...v.title
                },
                children: s
              }
            ),
            /* @__PURE__ */ e("div", { style: v.message, children: p }),
            d && i && /* @__PURE__ */ e(
              "button",
              {
                onClick: i,
                style: {
                  marginTop: 12,
                  padding: "6px 12px",
                  borderRadius: 6,
                  border: "none",
                  backgroundColor: l,
                  color: "#fff",
                  cursor: "pointer",
                  ...v.button
                },
                children: d
              }
            )
          ]
        }
      )
    }
  );
}, wr = ({
  data: t,
  isLoading: u = !1,
  error: a = null,
  emptyTitle: s = "Nada encontrado",
  emptyMessages: g,
  emptyIcon: d,
  onRetry: i,
  children: m,
  minHeight: f = "250px",
  loadingLabel: v = "Carregando...",
  theme: l = {}
}) => {
  const [p, Y] = U(u || t == null);
  oe(() => {
    let h;
    return u || t === void 0 || t === null ? Y(!0) : h = setTimeout(() => Y(!1), 150), () => clearTimeout(h);
  }, [u, t]);
  const N = u || p, B = !N && !a && (!t || t.length === 0), _ = !N && !a && !B;
  return /* @__PURE__ */ S(
    "div",
    {
      style: {
        width: "100%",
        minHeight: f,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        boxSizing: "border-box",
        ...l.container
      },
      children: [
        N && /* @__PURE__ */ S(
          F.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 },
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              ...l.loading
            },
            children: [
              /* @__PURE__ */ e(ie, { name: "crescent" }),
              /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    marginTop: 10,
                    color: "#666",
                    ...l.loadingLabel
                  },
                  children: v
                }
              )
            ]
          }
        ),
        !N && a && /* @__PURE__ */ S(
          F.div,
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
              ...l.error
            },
            children: [
              /* @__PURE__ */ e(yt, { size: 32 }),
              /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    fontWeight: 600,
                    marginTop: 6,
                    marginBottom: 10,
                    ...l.errorTitle
                  },
                  children: "Erro ao carregar os dados"
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    marginBottom: 12,
                    ...l.errorMessage
                  },
                  children: a
                }
              ),
              i && /* @__PURE__ */ e(
                "button",
                {
                  onClick: i,
                  style: {
                    padding: "6px 12px",
                    backgroundColor: "#b00020",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                    ...l.retryButton
                  },
                  children: "Tentar novamente"
                }
              )
            ]
          }
        ),
        !N && B && /* @__PURE__ */ e(
          Kt,
          {
            title: s,
            messages: g,
            icon: d,
            buttonLabel: i ? "Adicionar" : void 0,
            onButtonClick: i || void 0
          }
        ),
        _ && /* @__PURE__ */ e(
          F.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4 },
            style: {
              width: "100%",
              ...l.content
            },
            children: m
          }
        )
      ]
    }
  );
};
export {
  Mr as CBAutocomplete,
  pe as CBButton,
  lr as CBCard,
  Lr as CBCheckbox,
  br as CBDataPicker,
  Kt as CBEmptyState,
  vr as CBFabButton,
  Cr as CBFabButtonCenter,
  Br as CBFilterBar,
  mr as CBGrid,
  yr as CBGridItem,
  kr as CBInput,
  hr as CBLoading,
  dr as CBModal,
  xr as CBMultiView,
  ur as CBSelect,
  gr as CBSelector,
  wr as CBStateWrapper,
  Ot as CBStepperHorizontal,
  jt as CBStepperProvider,
  At as CBStepperVertical,
  pr as CBTextArea,
  cr as CBToast,
  fr as CBTooltip,
  zr as CB_COLOR_CONTRAST_MAP,
  gt as CB_COLOR_MAP,
  Dr as resolveMask,
  W as useCBColor,
  Fe as useCBStepper,
  Ir as useInputMask,
  Nr as usePasswordToggle
};
