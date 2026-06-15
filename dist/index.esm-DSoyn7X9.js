import { jsx as k, jsxs as x, Fragment as p } from "react/jsx-runtime";
import { IonButton as R, IonSpinner as T } from "@ionic/react";
import s from "react";
const C = {
  primary: "var(--ion-color-primary)",
  secondary: "var(--ion-color-secondary)",
  success: "var(--ion-color-success)",
  warning: "var(--ion-color-warning)",
  danger: "var(--ion-color-danger)",
  info: "var(--ion-color-info)",
  neutral: "var(--ion-color-neutral)",
  light: "var(--ion-color-light)",
  dark: "var(--ion-color-dark)"
}, A = {
  primary: "var(--ion-color-light)",
  // texto claro sobre azul escuro
  secondary: "var(--ion-color-light)",
  // texto claro sobre roxo
  success: "var(--ion-color-light)",
  // texto claro sobre verde
  warning: "var(--ion-color-dark)",
  // texto escuro sobre amarelo
  danger: "var(--ion-color-light)",
  // texto claro sobre vermelho
  info: "var(--ion-color-dark)",
  // texto escuro sobre azul suave
  neutral: "var(--ion-color-dark)",
  // texto escuro sobre cinza médio
  light: "var(--ion-color-dark)",
  // texto escuro sobre claro
  dark: "var(--ion-color-light)"
  // texto claro sobre escuro
};
function D(r = "primary") {
  const o = r in C, e = o ? C[r] : r.startsWith("--") ? `var(${r})` : r, n = o ? A[r] : "var(--ion-color-light)";
  return { main: e, contrast: n };
}
const q = ({
  children: r,
  size: o = "medium",
  variant: e = "solid",
  rounded: n = !1,
  fullWidth: a = !1,
  loading: u = !1,
  loadingText: v,
  disabled: d = !1,
  gradient: c,
  iconStart: _,
  iconEnd: j,
  className: B = "",
  style: L,
  color: z = "primary",
  backgroundColor: S,
  textColor: E,
  borderColor: N,
  hoverColor: F,
  activeColor: P,
  ...I
}) => {
  const { main: f, contrast: W } = D(z), t = { ...L }, M = S ?? c ?? f, i = E ?? W, g = N ?? f, m = F ?? i, y = P ?? i;
  switch (e === "solid" ? (t["--background"] = M, t["--color"] = i, t["--background-focused"] = f, t["--background-activated"] = f, t["--color-focused"] = i, t["--color-hover"] = m, t["--color-activated"] = y) : e === "outline" ? (t["--color"] = i, t["--border-color"] = g, t["--border-color-focused"] = g, t["--border-color-activated"] = g, t["--color-focused"] = i, t["--color-hover"] = m, t["--color-activated"] = y) : e === "clear" && (t["--color"] = i, t["--color-focused"] = i, t["--color-hover"] = m, t["--color-activated"] = y), n && (t["--border-radius"] = "999px"), a && (t.width = "100%"), o) {
    case "small":
      t.height = "32px", t.fontSize = "14px";
      break;
    case "medium":
      t.height = "40px", t.fontSize = "16px";
      break;
    case "large":
      t.height = "48px", t.fontSize = "18px";
      break;
  }
  return /* @__PURE__ */ k(
    R,
    {
      fill: e,
      disabled: d || u,
      style: t,
      className: B,
      ...I,
      children: u ? /* @__PURE__ */ x(p, { children: [
        /* @__PURE__ */ k(T, { name: "crescent", slot: "start" }),
        v ?? r
      ] }) : /* @__PURE__ */ x(p, { children: [
        _,
        r,
        j
      ] })
    }
  );
};
var w = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, b = s.createContext && s.createContext(w), l = function() {
  return l = Object.assign || function(r) {
    for (var o, e = 1, n = arguments.length; e < n; e++) {
      o = arguments[e];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
    }
    return r;
  }, l.apply(this, arguments);
}, G = function(r, o) {
  var e = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && o.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(r); a < n.length; a++)
    o.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[a]) && (e[n[a]] = r[n[a]]);
  return e;
};
function O(r) {
  return r && r.map(function(o, e) {
    return s.createElement(o.tag, l({
      key: e
    }, o.attr), O(o.child));
  });
}
function h(r) {
  return function(o) {
    return s.createElement(H, l({
      attr: l({}, r.attr)
    }, o), O(r.child));
  };
}
function H(r) {
  var o = function(e) {
    var n = r.attr, a = r.size, u = r.title, v = G(r, ["attr", "size", "title"]), d = a || e.size || "1em", c;
    return e.className && (c = e.className), r.className && (c = (c ? c + " " : "") + r.className), s.createElement("svg", l({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, e.attr, n, v, {
      className: c,
      style: l(l({
        color: r.color || e.color
      }, e.style), r.style),
      height: d,
      width: d,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && s.createElement("title", null, u), r.children);
  };
  return b !== void 0 ? s.createElement(b.Consumer, null, function(e) {
    return o(e);
  }) : o(w);
}
function J(r) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" } }, { tag: "path", attr: { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" } }] })(r);
}
function Q(r) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polygon", attr: { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" } }] })(r);
}
function U(r) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "circle", attr: { cx: "11", cy: "11", r: "8" } }, { tag: "line", attr: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" } }] })(r);
}
function X(r) {
  return h({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "3 6 5 6 21 6" } }, { tag: "path", attr: { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" } }, { tag: "line", attr: { x1: "10", y1: "11", x2: "10", y2: "17" } }, { tag: "line", attr: { x1: "14", y1: "11", x2: "14", y2: "17" } }] })(r);
}
export {
  q as C,
  J as F,
  h as G,
  X as a,
  C as b,
  U as c,
  Q as d,
  A as e,
  D as u
};
