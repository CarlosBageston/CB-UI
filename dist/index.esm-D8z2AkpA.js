import { jsx as d, jsxs as u, Fragment as f } from "react/jsx-runtime";
import { IonButton as D, IonSpinner as G } from "@ionic/react";
import "react";
import { u as H, G as a } from "./iconBase-Sed4o0Xx.js";
const A = ({
  children: t,
  size: h = "medium",
  variant: e = "solid",
  rounded: p = !1,
  fullWidth: k = !1,
  loading: s = !1,
  loadingText: x,
  disabled: g = !1,
  gradient: m,
  iconStart: v,
  iconEnd: C,
  className: b = "",
  style: y,
  color: L = "primary",
  backgroundColor: B,
  textColor: F,
  borderColor: j,
  hoverColor: w,
  routerLink: S,
  activeColor: z,
  ...W
}) => {
  const { main: n, contrast: I } = H(L), o = { ...y }, M = B ?? m ?? n, r = F ?? I, i = j ?? n, c = w ?? r, l = z ?? r;
  switch (e === "solid" ? (o["--background"] = M, o["--color"] = r, o["--background-focused"] = n, o["--background-activated"] = n, o["--color-focused"] = r, o["--color-hover"] = c, o["--color-activated"] = l) : e === "outline" ? (o["--color"] = r, o["--border-color"] = i, o["--border-color-focused"] = i, o["--border-color-activated"] = i, o["--color-focused"] = r, o["--color-hover"] = c, o["--color-activated"] = l) : e === "clear" && (o["--color"] = r, o["--color-focused"] = r, o["--color-hover"] = c, o["--color-activated"] = l), p && (o["--border-radius"] = "999px"), k && (o.width = "100%"), h) {
    case "small":
      o.height = "32px", o.fontSize = "14px";
      break;
    case "medium":
      o.height = "40px", o.fontSize = "16px";
      break;
    case "large":
      o.height = "48px", o.fontSize = "18px";
      break;
  }
  return /* @__PURE__ */ d(
    D,
    {
      fill: e,
      disabled: g || s,
      style: o,
      className: b,
      routerLink: S,
      ...W,
      children: s ? /* @__PURE__ */ u(f, { children: [
        /* @__PURE__ */ d(G, { name: "crescent", slot: "start" }),
        x ?? t
      ] }) : /* @__PURE__ */ u(f, { children: [
        v,
        t,
        C
      ] })
    }
  );
};
function J(t) {
  return a({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" } }, { tag: "path", attr: { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" } }] })(t);
}
function K(t) {
  return a({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polygon", attr: { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" } }] })(t);
}
function N(t) {
  return a({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "circle", attr: { cx: "11", cy: "11", r: "8" } }, { tag: "line", attr: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" } }] })(t);
}
function O(t) {
  return a({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "3 6 5 6 21 6" } }, { tag: "path", attr: { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" } }, { tag: "line", attr: { x1: "10", y1: "11", x2: "10", y2: "17" } }, { tag: "line", attr: { x1: "14", y1: "11", x2: "14", y2: "17" } }] })(t);
}
export {
  A as C,
  J as F,
  O as a,
  N as b,
  K as c
};
