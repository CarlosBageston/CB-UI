import o from "react";
const u = {
  primary: "var(--cb-color-primary)",
  secondary: "var(--cb-color-secondary)",
  success: "var(--cb-color-success)",
  warning: "var(--cb-color-warning)",
  danger: "var(--cb-color-danger)",
  info: "var(--cb-color-info)",
  neutral: "var(--cb-color-neutral)",
  light: "var(--cb-color-light)",
  dark: "var(--cb-color-dark)"
}, g = {
  primary: "var(--cb-color-light)",
  // texto claro sobre azul escuro
  secondary: "var(--cb-color-light)",
  // texto claro sobre roxo
  success: "var(--cb-color-light)",
  // texto claro sobre verde
  warning: "var(--cb-color-dark)",
  // texto escuro sobre amarelo
  danger: "var(--cb-color-light)",
  // texto claro sobre vermelho
  info: "var(--cb-color-dark)",
  // texto escuro sobre azul suave
  neutral: "var(--cb-color-dark)",
  // texto escuro sobre cinza médio
  light: "var(--cb-color-dark)",
  // texto escuro sobre claro
  dark: "var(--cb-color-light)"
  // texto claro sobre escuro
};
function O(r = "primary", t) {
  const e = r in u, n = e ? u[r] : r.startsWith("--") ? `var(${r})` : r, a = e ? g[r] : t ?? "var(--cb-color-light)";
  return { main: n, contrast: a };
}
var f = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, d = o.createContext && o.createContext(f), c = function() {
  return c = Object.assign || function(r) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (r[a] = t[a]);
    }
    return r;
  }, c.apply(this, arguments);
}, b = function(r, t) {
  var e = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(r); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[a]) && (e[n[a]] = r[n[a]]);
  return e;
};
function v(r) {
  return r && r.map(function(t, e) {
    return o.createElement(t.tag, c({
      key: e
    }, t.attr), v(t.child));
  });
}
function C(r) {
  return function(t) {
    return o.createElement(y, c({
      attr: c({}, r.attr)
    }, t), v(r.child));
  };
}
function y(r) {
  var t = function(e) {
    var n = r.attr, a = r.size, i = r.title, m = b(r, ["attr", "size", "title"]), s = a || e.size || "1em", l;
    return e.className && (l = e.className), r.className && (l = (l ? l + " " : "") + r.className), o.createElement("svg", c({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, e.attr, n, m, {
      className: l,
      style: c(c({
        color: r.color || e.color
      }, e.style), r.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && o.createElement("title", null, i), r.children);
  };
  return d !== void 0 ? o.createElement(d.Consumer, null, function(e) {
    return t(e);
  }) : t(f);
}
export {
  u as C,
  C as G,
  g as a,
  O as u
};
