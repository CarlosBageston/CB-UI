import i from "react";
const u = {
  primary: "var(--ion-color-primary)",
  secondary: "var(--ion-color-secondary)",
  success: "var(--ion-color-success)",
  warning: "var(--ion-color-warning)",
  danger: "var(--ion-color-danger)",
  info: "var(--ion-color-info)",
  neutral: "var(--ion-color-neutral)",
  light: "var(--ion-color-light)",
  dark: "var(--ion-color-dark)"
}, g = {
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
function C(r = "primary", t) {
  const e = r in u, n = e ? u[r] : r.startsWith("--") ? `var(${r})` : r, a = e ? g[r] : t ?? "var(--ion-color-light)";
  return { main: n, contrast: a };
}
var f = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, d = i.createContext && i.createContext(f), o = function() {
  return o = Object.assign || function(r) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (r[a] = t[a]);
    }
    return r;
  }, o.apply(this, arguments);
}, y = function(r, t) {
  var e = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(r); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[a]) && (e[n[a]] = r[n[a]]);
  return e;
};
function v(r) {
  return r && r.map(function(t, e) {
    return i.createElement(t.tag, o({
      key: e
    }, t.attr), v(t.child));
  });
}
function _(r) {
  return function(t) {
    return i.createElement(h, o({
      attr: o({}, r.attr)
    }, t), v(r.child));
  };
}
function h(r) {
  var t = function(e) {
    var n = r.attr, a = r.size, c = r.title, m = y(r, ["attr", "size", "title"]), s = a || e.size || "1em", l;
    return e.className && (l = e.className), r.className && (l = (l ? l + " " : "") + r.className), i.createElement("svg", o({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, e.attr, n, m, {
      className: l,
      style: o(o({
        color: r.color || e.color
      }, e.style), r.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), c && i.createElement("title", null, c), r.children);
  };
  return d !== void 0 ? i.createElement(d.Consumer, null, function(e) {
    return t(e);
  }) : t(f);
}
export {
  u as C,
  _ as G,
  g as a,
  C as u
};
