import o, { useMemo as f, useCallback as h } from "react";
const g = {
  primary: "var(--cb-color-primary)",
  secondary: "var(--cb-color-secondary)",
  success: "var(--cb-color-success)",
  warning: "var(--cb-color-warning)",
  danger: "var(--cb-color-danger)",
  info: "var(--cb-color-info)",
  neutral: "var(--cb-color-neutral)",
  light: "var(--cb-color-light)",
  dark: "var(--cb-color-dark)"
}, p = {
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
function _(t = "primary", r) {
  const e = t in g, n = e ? g[t] : t.startsWith("--") ? `var(${t})` : t, a = e ? p[t] : r ?? "var(--cb-color-light)";
  return { main: n, contrast: a };
}
var b = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, d = o.createContext && o.createContext(b), c = function() {
  return c = Object.assign || function(t) {
    for (var r, e = 1, n = arguments.length; e < n; e++) {
      r = arguments[e];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, c.apply(this, arguments);
}, w = function(t, r) {
  var e = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
    r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
};
function m(t) {
  return t && t.map(function(r, e) {
    return o.createElement(r.tag, c({
      key: e
    }, r.attr), m(r.child));
  });
}
function N(t) {
  return function(r) {
    return o.createElement($, c({
      attr: c({}, t.attr)
    }, r), m(t.child));
  };
}
function $(t) {
  var r = function(e) {
    var n = t.attr, a = t.size, l = t.title, u = w(t, ["attr", "size", "title"]), s = a || e.size || "1em", i;
    return e.className && (i = e.className), t.className && (i = (i ? i + " " : "") + t.className), o.createElement("svg", c({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, e.attr, n, u, {
      className: i,
      style: c(c({
        color: t.color || e.color
      }, e.style), t.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && o.createElement("title", null, l), t.children);
  };
  return d !== void 0 ? o.createElement(d.Consumer, null, function(e) {
    return r(e);
  }) : r(b);
}
const O = {
  cpf: (t) => {
    const r = t.replace(/\D/g, "").slice(0, 11);
    if (!r) return { formatted: "", raw: "" };
    let e = r;
    return r.length > 3 && (e = `${r.substring(0, 3)}.${r.substring(3)}`), r.length > 6 && (e = `${r.substring(0, 3)}.${r.substring(3, 6)}.${r.substring(6)}`), r.length > 9 && (e = `${r.substring(0, 3)}.${r.substring(3, 6)}.${r.substring(6, 9)}-${r.substring(9)}`), {
      formatted: e,
      raw: r
    };
  },
  tel: (t) => {
    const r = t.replace(/\D/g, "").slice(0, 11);
    if (!r) return { formatted: "", raw: "" };
    let e = `(${r.substring(0, 2)}) `;
    return e += r.length > 6 ? `${r.substring(2, 7)}-${r.substring(7)}` : r.substring(2), { formatted: e, raw: r };
  },
  cnpj: (t) => {
    const r = t.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 14);
    if (!r) return { formatted: "", raw: "" };
    let e = r.substring(0, 2);
    return r.length > 2 && (e += `.${r.substring(2, 5)}`), r.length > 5 && (e += `.${r.substring(5, 8)}`), r.length > 8 && (e += `/${r.substring(8, 12)}`), r.length > 12 && (e += `-${r.substring(12, 14)}`), { formatted: e, raw: r };
  },
  cep: (t) => {
    const r = t.replace(/\D/g, "").slice(0, 8);
    return {
      formatted: r.length > 5 ? `${r.substring(0, 5)}-${r.substring(5)}` : r,
      raw: r
    };
  },
  currency: (t) => {
    const r = t.replace(/\D/g, "");
    if (!r) return { formatted: "", raw: "" };
    const e = parseFloat(r) / 100;
    return isNaN(e) ? { formatted: "", raw: "" } : {
      formatted: Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(e),
      raw: e.toFixed(2)
    };
  }
};
function y(t, r) {
  if (t)
    return typeof t == "function" ? t : r?.[t] ?? O[t];
}
function x(t, r, e, n) {
  const a = f(
    () => y(t, n),
    [t, n]
  ), l = h(
    (s) => {
      if (!a) {
        r?.(s);
        return;
      }
      const { formatted: i, raw: v } = a(s);
      r?.(i), e?.(v);
    },
    [a, r, e]
  ), u = f(() => {
    if (t === "tel" || t === "cep" || t === "currency" || t === "cpf")
      return "numeric";
    if (t === "cnpj") return "text";
  }, [t]);
  return { handleChange: l, inputMode: u };
}
function j(t, r, e) {
  if (r === "currency") {
    const a = typeof t == "number" ? t : parseFloat(String(t));
    return isNaN(a) ? "" : Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(a);
  }
  const n = y(r, e);
  return n ? n(String(t ?? "")).formatted : t == null ? "" : String(t);
}
export {
  p as C,
  N as G,
  j as a,
  g as b,
  x as c,
  y as r,
  _ as u
};
