import { jsxs as S, jsx as e, Fragment as Pe } from "react/jsx-runtime";
import Me, { useState as U, useEffect as oe, useRef as Le, createContext as Ee, useContext as Ve, useCallback as ye, useMemo as $e } from "react";
import ee from "clsx";
import { IonCard as We, IonCardHeader as qe, IonCardTitle as Ze, IonCardSubtitle as Ue, IonCardContent as Xe, IonFooter as Be, IonText as Ge, IonModal as Te, IonHeader as Je, IonToolbar as Qe, IonButtons as Ke, IonButton as Ce, IonTitle as et, IonContent as tt, IonSelect as rt, IonSelectOption as nt, IonNote as fe, IonSpinner as ie, IonTextarea as ot, IonToggle as at, IonRadioGroup as it, IonRadio as st, IonCheckbox as lt, IonFab as He, IonFabButton as we, IonSegment as ct, IonSegmentButton as dt, IonLabel as me, IonAccordionGroup as ut, IonAccordion as ht, IonItem as Ye, IonDatetime as De, IonSearchbar as ft, IonList as mt } from "@ionic/react";
import { I as pt, a as Oe, b as Ae } from "./CBInput-DK2zUGUa.js";
import { C as vr, r as xr, u as br, c as yr } from "./CBInput-DK2zUGUa.js";
import { G, u as W, C as gt } from "./iconBase-Sed4o0Xx.js";
import { a as Cr } from "./iconBase-Sed4o0Xx.js";
import { m as F, A as ae, C as pe } from "./CBFilterBar-Bk_8vKkp.js";
import { b as Yr, e as $r } from "./CBFilterBar-Bk_8vKkp.js";
function ke(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function vt(t) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" } }] })(t);
}
function xt(t) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" } }] })(t);
}
function bt(t) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" } }] })(t);
}
function yt(t) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" } }] })(t);
}
function Mt(t) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" } }] })(t);
}
function Ct(t) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" } }] })(t);
}
function wt(t) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" } }] })(t);
}
function Yt(t) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" } }] })(t);
}
function $t(t) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" } }] })(t);
}
function kt(t) {
  return G({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }] })(t);
}
const tr = ({
  title: t,
  subtitle: f,
  footer: i,
  children: l,
  className: v,
  elevation: d = "md",
  hoverEffect: a = !0,
  collapsible: m = !1,
  defaultCollapsed: h = !1,
  onClickEdit: g,
  onClickDelete: s,
  theme: p
}) => {
  const [Y, N] = U(h), B = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  }[d], _ = p?.sizes?.borderRadius || "rounded-md", u = p?.colors?.background || "bg-white dark:bg-gray-900", M = p?.colors?.text || "text-gray-700 dark:text-gray-200", w = p?.colors?.subtitle || "text-gray-500 dark:text-gray-400";
  return /* @__PURE__ */ S(
    We,
    {
      className: ee(
        "transition-all",
        u,
        B,
        _,
        a && "hover:shadow-xl hover:scale-[1.01] cursor-pointer",
        v
      ),
      style: {
        width: p?.sizes?.width,
        height: p?.sizes?.height,
        padding: p?.sizes?.padding
      },
      children: [
        (t || f || m || s || g) && /* @__PURE__ */ e(
          qe,
          {
            className: "relative flex flex-col items-center",
            style: { minHeight: p?.sizes?.headerHeight },
            children: /* @__PURE__ */ S("div", { className: "flex justify-between w-full items-center", children: [
              /* @__PURE__ */ S("div", { className: "flex flex-col text-center w-full", children: [
                t && /* @__PURE__ */ e(Ze, { className: `text-lg font-semibold ${M}`, children: t }),
                f && /* @__PURE__ */ e(Ue, { className: `${w} text-sm`, children: f })
              ] }),
              /* @__PURE__ */ S("div", { className: "flex items-center gap-2", children: [
                g && g && /* @__PURE__ */ e(
                  $t,
                  {
                    onClick: g,
                    className: ee(
                      "w-10 h-10 !p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                      p?.colors?.edit || "text-[var(--ion-color-secondary-shade)]"
                    )
                  }
                ),
                s && s && /* @__PURE__ */ e(
                  xt,
                  {
                    onClick: s,
                    className: ee(
                      "w-10 h-10 !p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                      p?.colors?.delete || "text-[var(--ion-color-danger)]"
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
        !Y && l && /* @__PURE__ */ e(
          Xe,
          {
            style: {
              padding: p?.contentCard?.padding,
              backgroundColor: p?.contentCard?.background,
              color: p?.contentCard?.text
            },
            className: `${M} text-sm`,
            children: l
          }
        ),
        i && /* @__PURE__ */ e(
          Be,
          {
            className: "!p-4 border-t dark:border-gray-700",
            style: { backgroundColor: p?.colors?.footer },
            children: i
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
  const i = t.startsWith("top") ? -50 : 50;
  return {
    initial: { opacity: 0, y: i },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: i }
  };
}, rr = ({
  message: t,
  type: f = "info",
  duration: i = 3e3,
  show: l,
  onClose: v,
  className: d,
  position: a = "bottom-center"
}) => {
  const { main: m, contrast: h } = W("success"), { main: g, contrast: s } = W("danger"), { main: p, contrast: Y } = W("warning"), { main: N, contrast: B } = W("info"), _ = {
    success: {
      bg: m,
      color: h,
      icon: /* @__PURE__ */ e(vt, { size: 20 })
    },
    error: { bg: g, color: s, icon: /* @__PURE__ */ e(Mt, { size: 20 }) },
    warning: {
      bg: p,
      color: Y,
      icon: /* @__PURE__ */ e(Ct, { size: 20 })
    },
    info: { bg: N, color: B, icon: /* @__PURE__ */ e(bt, { size: 20 }) }
  }, { bg: u, color: M, icon: w } = _[f];
  oe(() => {
    if (l && i) {
      const x = setTimeout(() => v?.(), i);
      return () => clearTimeout(x);
    }
  }, [l, i]);
  const r = It(a);
  return /* @__PURE__ */ e(ae, { children: l && /* @__PURE__ */ e("div", { className: `fixed z-9999 pointer-events-none w-[95vw] max-w-[360px] ${Dt[a]}`, children: /* @__PURE__ */ S(
    F.div,
    {
      ...r,
      transition: { duration: 0.3 },
      className: `pointer-events-auto w-full rounded-lg! p-4! flex items-center shadow-lg ${d}`,
      style: { backgroundColor: u, color: M },
      children: [
        /* @__PURE__ */ S("div", { className: "flex items-center gap-2 flex-1", children: [
          w,
          /* @__PURE__ */ e(Ge, { className: "text-[14px] font-medium", children: t })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => v?.(),
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
}, nr = ({
  isOpen: t,
  onDismiss: f,
  title: i,
  subtitle: l,
  children: v,
  footer: d,
  showCloseButton: a = !0,
  className: m,
  headerClassName: h,
  contentClassName: g,
  footerClassName: s,
  ...p
}) => /* @__PURE__ */ S(
  Te,
  {
    isOpen: t,
    onDidDismiss: f,
    className: ee("rounded-lg overflow-hidden modal-height-full", m),
    ...p,
    children: [
      (i || l || a) && /* @__PURE__ */ e(Je, { className: ee("ion-no-border", h), children: /* @__PURE__ */ e(Qe, { children: /* @__PURE__ */ S("div", { className: "flex flex-col items-center text-center w-full", children: [
        /* @__PURE__ */ e("div", { className: "w-full flex justify-end", children: a && /* @__PURE__ */ e(Ke, { slot: "end", children: /* @__PURE__ */ e(Ce, { onClick: f, children: /* @__PURE__ */ e(Oe, { size: 20 }) }) }) }),
        /* @__PURE__ */ S("div", { className: "flex flex-col", children: [
          i && /* @__PURE__ */ e(et, { className: "text-lg font-semibold", children: i }),
          l && /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: l })
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
          className: ee("!p-4 text-gray-700 dark:text-gray-200", g),
          children: v
        }
      ),
      d && /* @__PURE__ */ e(Be, { className: ee("border-t border-gray-200 dark:border-gray-700 !p-4", s), children: d })
    ]
  }
);
function Nt() {
  const [t, f] = U("action-sheet");
  return oe(() => {
    const i = window.matchMedia("(min-width: 768px)"), l = (v) => {
      f(v.matches ? "popover" : "action-sheet");
    };
    return l(i), i.addEventListener("change", l), () => i.removeEventListener("change", l);
  }, []), t;
}
function or({
  label: t,
  value: f,
  items: i,
  getLabel: l,
  getValue: v,
  onValueChange: d,
  placeholder: a = "Selecione...",
  error: m = !1,
  helperText: h = "",
  disabled: g = !1,
  loading: s = !1,
  color: p = "neutral",
  style: Y,
  fill: N = "outline",
  shape: B = "round",
  ..._
}) {
  const u = Le(null), M = Nt(), { main: w } = W(p), r = (I) => {
    const L = I.detail.value, T = i.find((O) => v(O) === L);
    T && d(T);
  }, x = {
    ...Y,
    "--border-color": m ? gt.danger : w,
    "--icon-color": w,
    "--color": "var(--ion-color-dark)",
    "--placeholder-color": "var(--ion-color-medium)"
  };
  return /* @__PURE__ */ S("div", { className: "relative flex flex-col", style: { minHeight: 72 }, children: [
    t && /* @__PURE__ */ e("label", { className: "text-xs font-medium pl-6!", children: t }),
    /* @__PURE__ */ e(
      rt,
      {
        ref: u,
        interface: M,
        placeholder: a,
        value: f,
        disabled: g || s,
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
        children: i.map((I, L) => /* @__PURE__ */ e(nt, { value: v(I), children: l(I) }, L))
      }
    ),
    m && h && /* @__PURE__ */ e(fe, { className: "text-[12px] pl-6! text-(--ion-color-danger)", children: h })
  ] });
}
const ar = ({
  isOpen: t = !1,
  message: f = "Carregando...",
  color: i = "primary",
  type: l = "circular",
  withBg: v = !0,
  withText: d = !0
}) => {
  const { main: a, contrast: m } = W(i);
  return t ? l === "linear" ? /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ S(
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
          F.div,
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
            backgroundColor: v ? a : "transparent",
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
            l === "circular" ? /* @__PURE__ */ e(ie, { name: "crescent", color: "light" }) : /* @__PURE__ */ e("div", { style: { display: "flex", gap: "0.5rem" }, children: [...Array(3)].map((h, g) => /* @__PURE__ */ e(
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
                  delay: g * 0.2
                }
              },
              g
            )) }),
            d && /* @__PURE__ */ e("span", { style: { fontSize: "14px", fontWeight: 500, textAlign: "center" }, children: f })
          ]
        }
      )
    }
  ) }) : null;
}, ir = ({
  content: t,
  children: f,
  color: i = "light",
  placement: l = "top",
  trigger: v = "hover",
  stopPropagation: d = !1,
  tooltipStyle: a = {}
}) => {
  const [m, h] = U(!1), { main: g, contrast: s } = W(i), p = {
    top: { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8 },
    bottom: { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8 },
    left: { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: 8 },
    right: { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: 8 }
  };
  return /* @__PURE__ */ S(
    "div",
    {
      className: "relative inline-block",
      onMouseEnter: () => v === "hover" && h(!0),
      onMouseLeave: () => v === "hover" && h(!1),
      onClick: (_) => {
        v === "click" && (d && _.stopPropagation(), h(!m));
      },
      children: [
        f,
        /* @__PURE__ */ e(ae, { children: m && /* @__PURE__ */ e(
          F.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { duration: 0.2 },
            style: {
              ...p[l],
              position: "absolute",
              backgroundColor: g,
              color: s,
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
}, sr = ({
  label: t,
  value: f,
  placeholder: i = "",
  rows: l = 4,
  error: v,
  disabled: d = !1,
  color: a = "neutral",
  onChangeValue: m,
  fill: h = "outline",
  shape: g = "round",
  maxLength: s,
  ...p
}) => {
  const { main: Y } = W(a), { main: N } = W("danger"), [B, _] = U(!1), [u, M] = U(!1);
  oe(() => M(!!f), [f]);
  const w = v ? N : B || u ? Y : "var(--ion-color-medium)", r = s ? s - f.length : void 0, x = r !== void 0 && r < 0;
  return /* @__PURE__ */ S("div", { className: "relative flex flex-col", style: { minHeight: 72 }, children: [
    t && /* @__PURE__ */ e("label", { className: "text-xs font-medium !pl-6", children: t }),
    /* @__PURE__ */ e(
      ot,
      {
        value: f,
        placeholder: i,
        rows: l,
        fill: h,
        shape: g === "round" ? "round" : void 0,
        disabled: d,
        labelPlacement: "stacked",
        maxlength: s,
        style: {
          "--border-color": w,
          "--highlight-color-focused": Y,
          color: "var(--ion-color-dark)"
        },
        className: ee(
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
      /* @__PURE__ */ e(fe, { className: "text-[12px] !pl-6 text-[var(--ion-color-danger)]", children: v && /* @__PURE__ */ e("span", { children: v }) }),
      s && /* @__PURE__ */ S(
        fe,
        {
          className: ee(
            "text-[12px] !pr-6",
            x ? "text-[var(--ion-color-danger)]" : "text-gray-500"
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
}, lr = ({
  label: t,
  checked: f,
  disabled: i = !1,
  type: l = "checkbox",
  onChange: v,
  color: d = "primary",
  labelPlacement: a = "start",
  styleDiv: m
}) => {
  const { main: h, contrast: g } = W(d);
  if (l === "switch")
    return /* @__PURE__ */ e("div", { className: `w-auto ${m}`, children: /* @__PURE__ */ e(
      at,
      {
        checked: f,
        disabled: i,
        color: d,
        labelPlacement: a,
        onIonChange: (s) => v(s.detail.checked),
        style: {
          "--background-checked": h,
          // fundo quando ativo
          "--handle-background-checked": g
          // cor do "pino" quando ativo
        },
        children: t
      }
    ) });
  if (l === "radio")
    return /* @__PURE__ */ e("div", { className: `w-auto ${m}`, children: /* @__PURE__ */ e(
      it,
      {
        value: f ? "selected" : "unselected",
        onIonChange: (s) => v(s.detail.value === "selected"),
        className: "flex items-center gap-2",
        children: /* @__PURE__ */ e(
          st,
          {
            value: "selected",
            color: d,
            disabled: i,
            labelPlacement: a,
            className: "flex-1",
            style: {
              "--background-checked": h,
              "--border-color": h,
              "--border-color-checked": h,
              "--mark-color": g
              // cor do ponto central
            },
            children: t && /* @__PURE__ */ e("span", { children: t })
          }
        )
      }
    ) });
  if (l === "checkbox")
    return /* @__PURE__ */ e("div", { className: `w-auto ${m}`, children: /* @__PURE__ */ e(
      lt,
      {
        checked: f,
        disabled: i,
        color: d,
        labelPlacement: a,
        onIonChange: (s) => v(s.detail.checked),
        style: {
          "--border-color": h,
          // borda normal
          "--background-checked": h,
          // fundo quando marcado
          "--border-color-checked": h,
          // borda quando marcado
          "--checkmark-color": g
          // cor do check
        },
        children: t && /* @__PURE__ */ e("span", { className: "ml-2", children: t })
      }
    ) });
}, cr = ({
  tooltip: t,
  icon: f = Ae,
  onClick: i,
  recording: l,
  loading: v = !1,
  showCancel: d = !1,
  onCancel: a,
  cancelIcon: m = Oe,
  disabled: h = !1,
  className: g,
  color: s = "primary"
}) => {
  const [p, Y] = U(!0), [N, B] = U(!0), { main: _, contrast: u } = W(s);
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
      className: `fixed bottom-24 right-2 z-[1000] flex-center ${g} `,
      animate: p ? { width: 250, height: 55 } : { width: 55, height: 55 },
      transition: { duration: 0.8, ease: "easeInOut" },
      children: [
        /* @__PURE__ */ S(He, { vertical: "bottom", horizontal: "end", slot: "fixed", children: [
          /* @__PURE__ */ e(
            we,
            {
              onClick: i,
              disabled: h || v,
              style: { "--box-shadow": !p && "none", "--background": _, "--color": u },
              children: v ? /* @__PURE__ */ e(ie, { name: "crescent", className: "text-[var(--ion-color-text-fixed)]" }) : Me.createElement(f, { className: "text-[26px]" })
            }
          ),
          d && a && /* @__PURE__ */ e(
            F.div,
            {
              className: "absolute bottom-[70px] right-[12px] pointer-events-none",
              animate: l ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: 10, pointerEvents: "none" },
              transition: { duration: 0.3 },
              children: /* @__PURE__ */ e(
                we,
                {
                  color: "danger",
                  className: "w-[35px] h-[35px]",
                  onClick: a,
                  children: Me.createElement(m, { className: "text-[22px]" })
                }
              )
            }
          )
        ] }),
        t && N && /* @__PURE__ */ e(
          F.div,
          {
            className: "absolute right-[10px] bottom-2 !pr-13 h-[58px] overflow-hidden rounded-full flex items-center justify-center",
            style: { backgroundColor: _, color: u },
            initial: { width: 0, opacity: 0, filter: "blur(4px)" },
            animate: p ? { width: "auto", opacity: 1, filter: "blur(0px)" } : { width: 0, opacity: 0, filter: "blur(4px)" },
            transition: { duration: 0.5, ease: "easeOut" },
            children: /* @__PURE__ */ e(
              F.div,
              {
                className: "!pl-4 !pr-4 whitespace-nowrap",
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
const St = ({
  steps: t,
  color: f = "primary",
  className: i,
  classNameContent: l,
  style: v,
  showButtonNext: d = !0,
  showButtonPrev: a = !0,
  nextLabel: m = "Próximo",
  prevLabel: h = "Voltar",
  disableNext: g,
  disablePrev: s,
  theme: p
}) => {
  const { activeIndex: Y, next: N, prev: B, canNext: _, canPrev: u } = Fe(), { main: M, contrast: w } = W(f), r = p?.stepper, x = r?.circle?.background ?? M, I = r?.circle?.text ?? w, L = r?.line ?? M;
  return /* @__PURE__ */ S("div", { className: `flex flex-col gap-4 ${i ?? ""}`, style: v, children: [
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
    /* @__PURE__ */ e("div", { className: l, children: t.map((T, O) => /* @__PURE__ */ e(
      "div",
      {
        style: { display: O === Y ? "block" : "none" },
        children: T.content
      },
      O
    )) }),
    /* @__PURE__ */ S("div", { className: "flex justify-between w-full mt-2", children: [
      a && /* @__PURE__ */ e(
        pe,
        {
          disabled: s ? s(Y) : !u,
          onClick: B,
          iconStart: /* @__PURE__ */ e(wt, {}),
          children: typeof h == "function" ? h(Y, t.length) : h,
          color: f,
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
          disabled: g ? g(Y) : !_,
          onClick: N,
          iconEnd: /* @__PURE__ */ e(Yt, {}),
          children: typeof m == "function" ? m(Y, t.length) : m,
          color: f,
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
}, zt = ({
  steps: t,
  color: f = "primary",
  className: i,
  classNameContent: l,
  style: v,
  showButtonNext: d = !0,
  showButtonPrev: a = !0,
  nextLabel: m = "Próximo",
  prevLabel: h = "Voltar",
  disableNext: g,
  disablePrev: s,
  theme: p
}) => {
  const { activeIndex: Y, next: N, prev: B, canNext: _, canPrev: u } = Fe(), { main: M, contrast: w } = W(f), r = p?.stepper, x = r?.circle?.background ?? M, I = r?.circle?.text ?? w, L = r?.line ?? M, T = r?.titleColor ?? "#111827";
  return /* @__PURE__ */ e("div", { className: `flex flex-col gap-4 ${i ?? ""}`, style: v, children: t.map((O, H) => {
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
              /* @__PURE__ */ e("div", { className: `mb-2 ${l}`, children: O.content }),
              /* @__PURE__ */ S("div", { className: "flex w-full mt-2 pb-2", children: [
                d && /* @__PURE__ */ e(
                  pe,
                  {
                    disabled: g ? g(Y) : !_,
                    onClick: N,
                    children: typeof m == "function" ? m(Y, t.length) : m,
                    color: f,
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
                a && /* @__PURE__ */ e(
                  pe,
                  {
                    disabled: s ? s(Y) : !u,
                    onClick: B,
                    children: typeof h == "function" ? h(Y, t.length) : h,
                    color: f,
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
}, _t = ({
  children: t,
  initialStep: f = 0,
  totalSteps: i,
  onNext: l,
  onPrev: v
}) => {
  const [d, a] = U(f);
  oe(() => {
    a(f);
  }, [f]);
  const m = ye(async () => d >= i - 1 || l && await l(d) === !1 ? !1 : (a((p) => p + 1), !0), [d, i, l]), h = ye(async () => d <= 0 || v && await v(d) === !1 ? !1 : (a((p) => p - 1), !0), [d, v]), g = ye(() => {
    a(f);
  }, [f]), s = $e(
    () => ({
      activeIndex: d,
      totalSteps: i,
      next: m,
      prev: h,
      reset: g,
      canNext: d < i - 1,
      canPrev: d > 0,
      isFirst: d === 0,
      isLast: d === i - 1
    }),
    [d, i, m, h, g]
  );
  return /* @__PURE__ */ e(je.Provider, { value: s, children: t });
}, dr = ({
  steps: t,
  variant: f = "tabs",
  initialStep: i = 0,
  orientation: l = "horizontal",
  color: v = "primary",
  className: d,
  style: a,
  classNameContent: m,
  showButtonPrev: h = !0,
  showButtonNext: g = !0,
  nextLabel: s,
  prevLabel: p,
  disableNext: Y,
  disablePrev: N,
  onNext: B,
  onPrev: _,
  onTabChange: u,
  theme: M
}) => {
  const [w, r] = U(i);
  if (f === "tabs") {
    const x = M?.tabs;
    return /* @__PURE__ */ S("div", { style: a, children: [
      /* @__PURE__ */ e(
        ct,
        {
          scrollable: x?.segment?.scrollable,
          value: w.toString(),
          onIonChange: (I) => {
            const L = I.detail.value;
            if (L != null) {
              const T = parseInt(L.toString(), 10);
              r(T), u?.(T);
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
  if (f === "accordion") {
    const x = M?.accordion;
    return /* @__PURE__ */ e(
      ut,
      {
        value: w.toString(),
        onIonChange: (I) => {
          r(parseInt(I.detail.value ?? "-1", 10));
        },
        className: `${d ?? ""} ${x?.indicator?.hide ? "cb-acc-no-indicator" : ""}`,
        style: a,
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
  if (f === "stepper") {
    const x = {
      steps: t,
      initialStep: i,
      color: v,
      className: d,
      style: a,
      classNameContent: m,
      showButtonPrev: h,
      showButtonNext: g,
      nextLabel: s,
      prevLabel: p,
      disableNext: Y,
      disablePrev: N,
      onNext: B,
      onPrev: _,
      theme: M
    };
    return /* @__PURE__ */ e(
      _t,
      {
        initialStep: i,
        totalSteps: t.length,
        onNext: B,
        onPrev: _,
        children: l === "horizontal" ? /* @__PURE__ */ e(St, { ...x }) : /* @__PURE__ */ e(zt, { ...x })
      }
    );
  }
  return null;
};
var ce = { exports: {} }, Lt = ce.exports, Ie;
function Re() {
  return Ie || (Ie = 1, (function(t, f) {
    (function(i, l) {
      t.exports = l();
    })(Lt, (function() {
      var i = 1e3, l = 6e4, v = 36e5, d = "millisecond", a = "second", m = "minute", h = "hour", g = "day", s = "week", p = "month", Y = "quarter", N = "year", B = "date", _ = "Invalid Date", u = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, M = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(C) {
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
        return { M: p, y: N, w: s, d: g, D: B, h, m, s: a, ms: d, Q: Y }[C] || String(C || "").toLowerCase().replace(/s$/, "");
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
              var D = c.match(u);
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
          var c = this, k = !!$.u(y) || y, D = $.p(n), z = function(J, V) {
            var X = $.w(c.$u ? Date.UTC(c.$y, V, J) : new Date(c.$y, V, J), c);
            return k ? X : X.endOf(g);
          }, A = function(J, V) {
            return $.w(c.toDate()[J].apply(c.toDate("s"), (k ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(V)), c);
          }, j = this.$W, R = this.$M, q = this.$D, te = "set" + (this.$u ? "UTC" : "");
          switch (D) {
            case N:
              return k ? z(1, 0) : z(31, 11);
            case p:
              return k ? z(1, R) : z(0, R + 1);
            case s:
              var Q = this.$locale().weekStart || 0, ne = (j < Q ? j + 7 : j) - Q;
              return z(k ? q - ne : q + (6 - ne), R);
            case g:
            case B:
              return A(te + "Hours", 0);
            case h:
              return A(te + "Minutes", 1);
            case m:
              return A(te + "Seconds", 2);
            case a:
              return A(te + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, o.endOf = function(n) {
          return this.startOf(n, !1);
        }, o.$set = function(n, y) {
          var c, k = $.p(n), D = "set" + (this.$u ? "UTC" : ""), z = (c = {}, c[g] = D + "Date", c[B] = D + "Date", c[p] = D + "Month", c[N] = D + "FullYear", c[h] = D + "Hours", c[m] = D + "Minutes", c[a] = D + "Seconds", c[d] = D + "Milliseconds", c)[k], A = k === g ? this.$D + (y - this.$W) : y;
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
          if (D === g) return z(1);
          if (D === s) return z(7);
          var A = (c = {}, c[m] = l, c[h] = v, c[a] = i, c)[D] || 1, j = this.$d.getTime() + n * A;
          return $.w(j, this);
        }, o.subtract = function(n, y) {
          return this.add(-1 * n, y);
        }, o.format = function(n) {
          var y = this, c = this.$locale();
          if (!this.isValid()) return c.invalidDate || _;
          var k = n || "YYYY-MM-DDTHH:mm:ssZ", D = $.z(this), z = this.$H, A = this.$m, j = this.$M, R = c.weekdays, q = c.months, te = c.meridiem, Q = function(V, X, K, re) {
            return V && (V[X] || V(y, k)) || K[X].slice(0, re);
          }, ne = function(V) {
            return $.s(z % 12 || 12, V, "0");
          }, J = te || function(V, X, K) {
            var re = V < 12 ? "AM" : "PM";
            return K ? re.toLowerCase() : re;
          };
          return k.replace(M, (function(V, X) {
            return X || (function(K) {
              switch (K) {
                case "YY":
                  return String(y.$y).slice(-2);
                case "YYYY":
                  return $.s(y.$y, 4, "0");
                case "M":
                  return j + 1;
                case "MM":
                  return $.s(j + 1, 2, "0");
                case "MMM":
                  return Q(c.monthsShort, j, q, 3);
                case "MMMM":
                  return Q(q, j);
                case "D":
                  return y.$D;
                case "DD":
                  return $.s(y.$D, 2, "0");
                case "d":
                  return String(y.$W);
                case "dd":
                  return Q(c.weekdaysMin, y.$W, R, 2);
                case "ddd":
                  return Q(c.weekdaysShort, y.$W, R, 3);
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
                  return J(z, A, !0);
                case "A":
                  return J(z, A, !1);
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
          var k, D = this, z = $.p(y), A = b(n), j = (A.utcOffset() - this.utcOffset()) * l, R = this - A, q = function() {
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
            case s:
              k = (R - j) / 6048e5;
              break;
            case g:
              k = (R - j) / 864e5;
              break;
            case h:
              k = R / v;
              break;
            case m:
              k = R / l;
              break;
            case a:
              k = R / i;
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
      return b.prototype = E, [["$ms", d], ["$s", a], ["$m", m], ["$H", h], ["$W", g], ["$M", p], ["$y", N], ["$D", B]].forEach((function(C) {
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
var Bt = Re();
const Z = /* @__PURE__ */ ke(Bt);
var de = { exports: {} }, Tt = de.exports, Ne;
function Ht() {
  return Ne || (Ne = 1, (function(t, f) {
    (function(i, l) {
      t.exports = l(Re());
    })(Tt, (function(i) {
      function l(a) {
        return a && typeof a == "object" && "default" in a ? a : { default: a };
      }
      var v = l(i), d = { name: "pt-br", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(a) {
        return a + "º";
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
      return v.default.locale(d, null, !0), d;
    }));
  })(de)), de.exports;
}
Ht();
function Ot(t) {
  return G({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "rect", attr: { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" } }, { tag: "line", attr: { x1: "16", x2: "16", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "8", x2: "8", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "3", x2: "21", y1: "10", y2: "10" } }] })(t);
}
var ue = { exports: {} }, At = ue.exports, Se;
function jt() {
  return Se || (Se = 1, (function(t, f) {
    (function(i, l) {
      t.exports = l();
    })(At, (function() {
      var i = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(l, v, d) {
        var a = v.prototype, m = a.format;
        d.en.formats = i, a.format = function(h) {
          h === void 0 && (h = "YYYY-MM-DDTHH:mm:ssZ");
          var g = this.$locale().formats, s = (function(p, Y) {
            return p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(N, B, _) {
              var u = _ && _.toUpperCase();
              return B || Y[_] || i[_] || Y[u].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(M, w, r) {
                return w || r.slice(1);
              }));
            }));
          })(h, g === void 0 ? {} : g);
          return m.call(this, s);
        };
      };
    }));
  })(ue)), ue.exports;
}
var Ft = jt();
const Rt = /* @__PURE__ */ ke(Ft);
var he = { exports: {} }, Pt = he.exports, ze;
function Et() {
  return ze || (ze = 1, (function(t, f) {
    (function(i, l) {
      t.exports = l();
    })(Pt, (function() {
      var i = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, l = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, v = /\d/, d = /\d\d/, a = /\d\d?/, m = /\d*[^-_:/,()\s\d]+/, h = {}, g = function(u) {
        return (u = +u) + (u > 68 ? 1900 : 2e3);
      }, s = function(u) {
        return function(M) {
          this[u] = +M;
        };
      }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(u) {
        (this.zone || (this.zone = {})).offset = (function(M) {
          if (!M || M === "Z") return 0;
          var w = M.match(/([+-]|\d\d)/g), r = 60 * w[1] + (+w[2] || 0);
          return r === 0 ? 0 : w[0] === "+" ? -r : r;
        })(u);
      }], Y = function(u) {
        var M = h[u];
        return M && (M.indexOf ? M : M.s.concat(M.f));
      }, N = function(u, M) {
        var w, r = h.meridiem;
        if (r) {
          for (var x = 1; x <= 24; x += 1) if (u.indexOf(r(x, 0, M)) > -1) {
            w = x > 12;
            break;
          }
        } else w = u === (M ? "pm" : "PM");
        return w;
      }, B = { A: [m, function(u) {
        this.afternoon = N(u, !1);
      }], a: [m, function(u) {
        this.afternoon = N(u, !0);
      }], Q: [v, function(u) {
        this.month = 3 * (u - 1) + 1;
      }], S: [v, function(u) {
        this.milliseconds = 100 * +u;
      }], SS: [d, function(u) {
        this.milliseconds = 10 * +u;
      }], SSS: [/\d{3}/, function(u) {
        this.milliseconds = +u;
      }], s: [a, s("seconds")], ss: [a, s("seconds")], m: [a, s("minutes")], mm: [a, s("minutes")], H: [a, s("hours")], h: [a, s("hours")], HH: [a, s("hours")], hh: [a, s("hours")], D: [a, s("day")], DD: [d, s("day")], Do: [m, function(u) {
        var M = h.ordinal, w = u.match(/\d+/);
        if (this.day = w[0], M) for (var r = 1; r <= 31; r += 1) M(r).replace(/\[|\]/g, "") === u && (this.day = r);
      }], w: [a, s("week")], ww: [d, s("week")], M: [a, s("month")], MM: [d, s("month")], MMM: [m, function(u) {
        var M = Y("months"), w = (Y("monthsShort") || M.map((function(r) {
          return r.slice(0, 3);
        }))).indexOf(u) + 1;
        if (w < 1) throw new Error();
        this.month = w % 12 || w;
      }], MMMM: [m, function(u) {
        var M = Y("months").indexOf(u) + 1;
        if (M < 1) throw new Error();
        this.month = M % 12 || M;
      }], Y: [/[+-]?\d+/, s("year")], YY: [d, function(u) {
        this.year = g(u);
      }], YYYY: [/\d{4}/, s("year")], Z: p, ZZ: p };
      function _(u) {
        var M, w;
        M = u, w = h && h.formats;
        for (var r = (u = M.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(b, $, P) {
          var E = P && P.toUpperCase();
          return $ || w[P] || i[P] || w[E].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(C, o, n) {
            return o || n.slice(1);
          }));
        }))).match(l), x = r.length, I = 0; I < x; I += 1) {
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
      return function(u, M, w) {
        w.p.customParseFormat = !0, u && u.parseTwoDigitYear && (g = u.parseTwoDigitYear);
        var r = M.prototype, x = r.parse;
        r.parse = function(I) {
          var L = I.date, T = I.utc, O = I.args;
          this.$u = T;
          var H = O[1];
          if (typeof H == "string") {
            var b = O[2] === !0, $ = O[3] === !0, P = b || $, E = O[2];
            $ && (E = O[2]), h = this.$locale(), !b && E && (h = w.Ls[E]), this.$d = (function(y, c, k, D) {
              try {
                if (["x", "X"].indexOf(c) > -1) return new Date((c === "X" ? 1e3 : 1) * y);
                var z = _(c)(y), A = z.year, j = z.month, R = z.day, q = z.hours, te = z.minutes, Q = z.seconds, ne = z.milliseconds, J = z.zone, V = z.week, X = /* @__PURE__ */ new Date(), K = R || (A || j ? 1 : X.getDate()), re = A || X.getFullYear(), se = 0;
                A && !j || (se = j > 0 ? j - 1 : X.getMonth());
                var le, ge = q || 0, ve = te || 0, xe = Q || 0, be = ne || 0;
                return J ? new Date(Date.UTC(re, se, K, ge, ve, xe, be + 60 * J.offset * 1e3)) : k ? new Date(Date.UTC(re, se, K, ge, ve, xe, be)) : (le = new Date(re, se, K, ge, ve, xe, be), V && (le = D(le).week(V).toDate()), le);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(L, H, T, w), this.init(), E && E !== !0 && (this.$L = this.locale(E).$L), P && L != this.format(H) && (this.$d = /* @__PURE__ */ new Date("")), h = {};
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
var Vt = Et();
const Wt = /* @__PURE__ */ ke(Vt);
Z.locale("pt-br");
Z.extend(Wt);
Z.extend(Rt);
const _e = (t) => t ? "toDate" in t ? t.toDate() : t : null, ur = ({
  value: t,
  onChange: f,
  label: i,
  format: l = "date",
  disabled: v,
  errorText: d,
  placeholder: a = "Selecionar data",
  minDate: m,
  maxDate: h,
  classNameInput: g,
  classNameContainer: s,
  withCalendar: p = !1,
  rounded: Y = !0,
  color: N = "neutral",
  pickerMode: B = "modal"
}) => {
  const { main: _, contrast: u } = W(N), [M, w] = U(!1), [r, x] = U(
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
    switch (l) {
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
    r && (f(Z(r).toDate()), w(!1));
  }, T = (b, $) => typeof $ == "number" ? Z().add($, "years").format("YYYY-MM-DD") : $ ?? b.format("YYYY-MM-DD"), O = () => {
    v || (x(r || Z().format("YYYY-MM-DDTHH:mm")), w(!0));
  }, H = Y ? "99999px" : "6px";
  return /* @__PURE__ */ S("div", { className: "relative", children: [
    /* @__PURE__ */ S(
      "div",
      {
        onClick: () => {
          x(r || Z().format("YYYY-MM-DDTHH:mm")), w(!0);
        },
        className: `relative flex flex-col ${s}`,
        children: [
          i && /* @__PURE__ */ e("label", { className: "text-xs font-medium !pl-6", children: i }),
          /* @__PURE__ */ S("div", { className: "relative flex items-center w-full", onClick: O, children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                value: r ? I() : "",
                placeholder: a,
                disabled: v,
                style: {
                  borderRadius: H,
                  borderColor: _,
                  color: u
                },
                className: `w-full !pr-4 !pl-8 !py-4 border outline-none placeholder-[var(--ion-color-medium)] ${g}`
              }
            ),
            p && /* @__PURE__ */ e(Ot, { className: "absolute right-8 text-[24px] text-gray-500 hover:text-blue-600 transition-colors cursor-pointer" })
          ] }),
          d && /* @__PURE__ */ S(fe, { className: "text-[12px] !pl-6 text-[var(--ion-color-danger)]", children: [
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
        children: /* @__PURE__ */ S("div", { className: "!p-4 bg-white !rounded-lg shadow-lg", children: [
          /* @__PURE__ */ e(
            De,
            {
              locale: "pt-BR",
              value: r,
              min: T(
                Z().subtract(10, "years").startOf("year"),
                m
              ),
              max: T(Z().add(50, "years").endOf("year"), h),
              presentation: l === "month-year" || l === "MMMM/YYYY" ? "month-year" : l === "datetime" ? "date-time" : "date",
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
    B === "dropdown" && M && /* @__PURE__ */ e("div", { className: "absolute z-50 mt-2 bg-white !rounded-lg shadow-lg !p-3", children: /* @__PURE__ */ e(
      De,
      {
        locale: "pt-BR",
        value: r,
        min: T(
          Z().subtract(10, "years").startOf("year"),
          m
        ),
        max: T(Z().add(50, "years").endOf("year"), h),
        presentation: l === "month-year" || l === "MMMM/YYYY" ? "month-year" : l === "datetime" ? "date-time" : "date",
        onIonChange: (b) => {
          x(b.detail.value), L();
        },
        showDefaultButtons: !1
      }
    ) })
  ] });
};
function hr({
  items: t,
  getLabel: f,
  getValue: i,
  onSelect: l,
  placeholder: v = "Pesquisar...",
  color: d = "neutral",
  rounded: a = !0,
  fullWidth: m = !0,
  loading: h = !1,
  variant: g = "search",
  label: s,
  className: p = "",
  style: Y = {},
  inputClass: N = "",
  inputStyle: B = {},
  dropdownClass: _ = "",
  dropdownStyle: u = {},
  itemClass: M = "",
  itemStyle: w = {},
  labelClass: r = ""
}) {
  const [x, I] = U(""), [L, T] = U(!1), O = Le(null), { main: H, contrast: b } = W(d), $ = $e(() => t.length > 0 ? t.filter(
    (o) => f(o).toLowerCase().includes(x.toLowerCase())
  ) : [], [t, x, f]), P = a ? "12px" : "6px", E = a ? "99999px" : "6px", C = () => {
    let o = O.current?.querySelector("input")?.clientHeight ?? 0;
    return g === "select" ? o += 20 : o += 10, /* @__PURE__ */ e(
      "div",
      {
        className: `absolute z-50 overflow-hidden max-h-64 overflow-y-auto shadow-lg ${_}`,
        style: {
          width: m ? "100%" : "auto",
          border: `1px solid ${H}`,
          borderRadius: P,
          backgroundColor: "var(--ion-color-light)",
          top: o,
          // 16px de gap entre input e dropdown (ja contando com o padding interno dos inputs)
          left: 0,
          ...u
        },
        children: h ? /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-4", children: /* @__PURE__ */ e(ie, { name: "crescent", style: { color: H } }) }) : /* @__PURE__ */ S(mt, { className: "!p-0", children: [
          $.map((n) => /* @__PURE__ */ e(
            Ye,
            {
              button: !0,
              onMouseDown: () => {
                l(n), I(f(n)), T(!1);
              },
              style: { color: b, ...w },
              className: `hover:bg-gray-100 transition-colors ${M}`,
              children: /* @__PURE__ */ e(me, { children: f(n) })
            },
            i(n)
          )),
          $.length === 0 && /* @__PURE__ */ e(Ye, { children: /* @__PURE__ */ e(me, { className: "text-gray-500", children: "Nenhum resultado encontrado" }) })
        ] })
      }
    );
  };
  return g === "select" ? /* @__PURE__ */ S(
    "div",
    {
      ref: O,
      className: `relative ${m ? "w-full" : "w-auto"} flex flex-col ${p}`,
      style: { minHeight: 72, ...Y },
      children: [
        s && /* @__PURE__ */ e("label", { className: `text-xs font-medium !pl-6 ${r}`, children: s }),
        /* @__PURE__ */ e(
          "input",
          {
            value: x,
            onChange: (o) => I(o.target.value),
            placeholder: v,
            onFocus: () => T(!0),
            onBlur: () => setTimeout(() => T(!1), 150),
            className: `w-full !pr-4 !pl-8 !py-4 border outline-none placeholder-[var(--ion-color-medium)] ${N}`,
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
            placeholder: v,
            onIonFocus: () => T(!0),
            onIonBlur: () => setTimeout(() => T(!1), 150),
            onIonClear: () => {
              I(""), l(void 0);
            },
            className: N,
            style: {
              "--background": "var(--ion-color-light)",
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
const fr = ({
  icon: t = Ae,
  onClick: f,
  loading: i = !1,
  disabled: l = !1,
  color: v = "primary",
  className: d
}) => {
  const { main: a, contrast: m } = W(v);
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
          onClick: f,
          disabled: l || i,
          style: { "--box-shadow": "none", "--background": a, "--color": m },
          children: i ? /* @__PURE__ */ e(ie, { name: "crescent", color: m.includes("light") ? "light" : "dark" }) : Me.createElement(t, { className: "text-[28px]" })
        }
      ) })
    }
  ) });
}, qt = ({
  isEmpty: t = !0,
  children: f,
  messages: i,
  title: l,
  icon: v,
  buttonLabel: d,
  onButtonClick: a,
  color: m = "primary",
  colorBg: h = "#ecececbe",
  theme: g = {}
}) => {
  if (!t)
    return /* @__PURE__ */ e(Pe, { children: f });
  const { main: s } = W(m), p = $e(() => {
    const Y = i || ["Nenhum dado encontrado"], N = Math.floor(Math.random() * Y.length);
    return Y[N];
  }, [i]);
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
        ...g.container
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
            backgroundColor: h,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...g.card
          },
          children: [
            v,
            l && /* @__PURE__ */ e(
              "div",
              {
                style: {
                  fontWeight: 600,
                  marginBottom: 4,
                  ...g.title
                },
                children: l
              }
            ),
            /* @__PURE__ */ e("div", { style: g.message, children: p }),
            d && a && /* @__PURE__ */ e(
              "button",
              {
                onClick: a,
                style: {
                  marginTop: 12,
                  padding: "6px 12px",
                  borderRadius: 6,
                  border: "none",
                  backgroundColor: s,
                  color: "#fff",
                  cursor: "pointer",
                  ...g.button
                },
                children: d
              }
            )
          ]
        }
      )
    }
  );
}, mr = ({
  data: t,
  isLoading: f = !1,
  error: i = null,
  emptyTitle: l = "Nada encontrado",
  emptyMessages: v,
  emptyIcon: d,
  onRetry: a,
  children: m,
  minHeight: h = "250px",
  loadingLabel: g = "Carregando...",
  theme: s = {}
}) => {
  const [p, Y] = U(f || t == null);
  oe(() => {
    let u;
    return f || t === void 0 || t === null ? Y(!0) : u = setTimeout(() => Y(!1), 150), () => clearTimeout(u);
  }, [f, t]);
  const N = f || p, B = !N && !i && (!t || t.length === 0), _ = !N && !i && !B;
  return /* @__PURE__ */ S(
    "div",
    {
      style: {
        width: "100%",
        minHeight: h,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        boxSizing: "border-box",
        ...s.container
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
              ...s.loading
            },
            children: [
              /* @__PURE__ */ e(ie, { name: "crescent" }),
              /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    marginTop: 10,
                    color: "#666",
                    ...s.loadingLabel
                  },
                  children: g
                }
              )
            ]
          }
        ),
        !N && i && /* @__PURE__ */ S(
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
              ...s.error
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
                    ...s.errorTitle
                  },
                  children: "Erro ao carregar os dados"
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    marginBottom: 12,
                    ...s.errorMessage
                  },
                  children: i
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
                    ...s.retryButton
                  },
                  children: "Tentar novamente"
                }
              )
            ]
          }
        ),
        !N && B && /* @__PURE__ */ e(
          qt,
          {
            title: l,
            messages: v,
            icon: d,
            buttonLabel: a ? "Adicionar" : void 0,
            onButtonClick: a || void 0
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
              ...s.content
            },
            children: m
          }
        )
      ]
    }
  );
};
export {
  hr as CBAutocomplete,
  pe as CBButton,
  tr as CBCard,
  Yr as CBCheckbox,
  ur as CBDataPicker,
  qt as CBEmptyState,
  cr as CBFabButton,
  fr as CBFabButtonCenter,
  $r as CBFilterBar,
  vr as CBInput,
  ar as CBLoading,
  nr as CBModal,
  dr as CBMultiView,
  or as CBSelect,
  lr as CBSelector,
  mr as CBStateWrapper,
  St as CBStepperHorizontal,
  _t as CBStepperProvider,
  zt as CBStepperVertical,
  sr as CBTextArea,
  rr as CBToast,
  ir as CBTooltip,
  Cr as CB_COLOR_CONTRAST_MAP,
  gt as CB_COLOR_MAP,
  xr as resolveMask,
  W as useCBColor,
  Fe as useCBStepper,
  br as useInputMask,
  yr as usePasswordToggle
};
