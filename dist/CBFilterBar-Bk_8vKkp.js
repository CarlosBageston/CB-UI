import { jsx as k, jsxs as mt, Fragment as us } from "react/jsx-runtime";
import * as ye from "react";
import { createContext as Vt, useRef as z, useLayoutEffect as er, useEffect as ve, useId as dn, useContext as N, useInsertionEffect as pn, useMemo as vt, useCallback as hs, Children as nr, isValidElement as ir, useState as re, Fragment as fs, createElement as sr, forwardRef as or, Component as rr } from "react";
import ar from "clsx";
import { u as ds, G as Mt } from "./iconBase-Sed4o0Xx.js";
import { IonButton as lr, IonSpinner as cr, IonInput as ur, IonPopover as hr, IonList as fr, IonItem as zn } from "@ionic/react";
const dr = ({
  children: t,
  size: e = "medium",
  variant: n = "solid",
  rounded: i = !1,
  fullWidth: s = !1,
  loading: r = !1,
  loadingText: o,
  disabled: a = !1,
  gradient: c,
  iconStart: u,
  iconEnd: l,
  className: h = "",
  style: f,
  color: d = "primary",
  backgroundColor: p,
  textColor: g,
  borderColor: m,
  hoverColor: y,
  routerLink: x,
  activeColor: v,
  ...T
}) => {
  const { main: A, contrast: V } = ds(d), b = { ...f }, P = p ?? c ?? A, C = g ?? V, S = m ?? A, M = y ?? C, L = v ?? C;
  switch (n === "solid" ? (b["--background"] = P, b["--color"] = C, b["--background-focused"] = A, b["--background-activated"] = A, b["--color-focused"] = C, b["--color-hover"] = M, b["--color-activated"] = L) : n === "outline" ? (b["--color"] = C, b["--border-color"] = S, b["--border-color-focused"] = S, b["--border-color-activated"] = S, b["--color-focused"] = C, b["--color-hover"] = M, b["--color-activated"] = L) : n === "clear" && (b["--color"] = C, b["--color-focused"] = C, b["--color-hover"] = M, b["--color-activated"] = L), i && (b["--border-radius"] = "999px"), s && (b.width = "100%"), e) {
    case "small":
      b.height = "32px", b.fontSize = "14px";
      break;
    case "medium":
      b.height = "40px", b.fontSize = "16px";
      break;
    case "large":
      b.height = "48px", b.fontSize = "18px";
      break;
  }
  return /* @__PURE__ */ k(
    lr,
    {
      fill: n,
      disabled: a || r,
      style: b,
      className: h,
      routerLink: x,
      ...T,
      children: r ? /* @__PURE__ */ mt(us, { children: [
        /* @__PURE__ */ k(cr, { name: "crescent", slot: "start" }),
        o ?? t
      ] }) : /* @__PURE__ */ mt(
        "span",
        {
          className: u || l ? "inline-flex items-center gap-1" : void 0,
          children: [
            u,
            t,
            l
          ]
        }
      )
    }
  );
};
function pr(t) {
  return Mt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "6 9 12 15 18 9" } }] })(t);
}
function wh(t) {
  return Mt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "18 15 12 9 6 15" } }] })(t);
}
function bh(t) {
  return Mt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" } }, { tag: "path", attr: { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" } }] })(t);
}
function mr(t) {
  return Mt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polygon", attr: { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" } }] })(t);
}
function gr(t) {
  return Mt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "circle", attr: { cx: "11", cy: "11", r: "8" } }, { tag: "line", attr: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" } }] })(t);
}
function Ph(t) {
  return Mt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "3 6 5 6 21 6" } }, { tag: "path", attr: { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" } }, { tag: "line", attr: { x1: "10", y1: "11", x2: "10", y2: "17" } }, { tag: "line", attr: { x1: "14", y1: "11", x2: "14", y2: "17" } }] })(t);
}
const Kn = {
  dark: {
    classes: {
      wrapper: "bg-[#1f2836] border-slate-800 text-slate-100",
      card: "bg-[#0a121d] border-slate-800/80 hover:border-slate-800",
      cardSelected: "ring-1 ring-primary/80 border-primary shadow-lg shadow-primary-950/20",
      textPrimary: "text-slate-100",
      textMuted: "text-slate-400",
      selectPagination: "bg-[#1f2836] border border-slate-700",
      divider: "border-slate-800/80",
      badge: "bg-slate-800 text-slate-300",
      checkboxBorder: "border-slate-700"
    },
    colorsPagination: {
      bgButtonPreviousPagination: "",
      bgButtonNextPagination: ""
    },
    colorsFiler: {
      background: "#1f2836",
      text: "#f1f5f9",
      border: "#334155"
    }
  },
  light: {
    classes: {
      wrapper: "bg-white border-slate-200 text-slate-800",
      card: "bg-slate-50 border-[#e7e5e4] hover:bg-slate-100",
      cardSelected: "ring-1 ring-primary border-primary-200 shadow-md shadow-primary-500/5",
      textPrimary: "text-slate-800",
      selectPagination: "bg-white border border-[#31415899]",
      textMuted: "text-slate-500",
      divider: "border-slate-150",
      badge: "bg-slate-100 text-slate-700",
      checkboxBorder: "border-slate-300"
    },
    colorsPagination: {
      bgButtonPreviousPagination: "",
      bgButtonNextPagination: ""
    },
    colorsFiler: {
      background: "#ffffff",
      text: "#1e293b",
      border: "#cbd5e1"
    }
  }
}, mn = Vt({});
function gn(t) {
  const e = z(null);
  return e.current === null && (e.current = t()), e.current;
}
const yr = typeof window < "u", ps = yr ? er : ve, xe = /* @__PURE__ */ Vt(null);
function yn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function ae(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const nt = (t, e, n) => n > e ? e : n < t ? t : n;
function Ue(t, e) {
  return e ? `${t}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${e}` : t;
}
let Dt = () => {
}, ot = () => {
};
typeof process < "u" && process.env?.NODE_ENV !== "production" && (Dt = (t, e, n) => {
  !t && typeof console < "u" && console.warn(Ue(e, n));
}, ot = (t, e, n) => {
  if (!t)
    throw new Error(Ue(e, n));
});
const at = {}, ms = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), gs = (t) => typeof t == "object" && t !== null, ys = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function vs(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const G = /* @__NO_SIDE_EFFECTS__ */ (t) => t, $t = (...t) => t.reduce((e, n) => (i) => n(e(i))), jt = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i ? (n - t) / i : 1;
};
class vn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return yn(this.subscriptions, e), () => ae(this.subscriptions, e);
  }
  notify(e, n, i) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](e, n, i);
      else
        for (let r = 0; r < s; r++) {
          const o = this.subscriptions[r];
          o && o(e, n, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const $ = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, H = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3, xs = /* @__NO_SIDE_EFFECTS__ */ (t, e) => e ? t * (1e3 / e) : 0, Hn = /* @__PURE__ */ new Set();
function xn(t, e, n) {
  t || Hn.has(e) || (console.warn(Ue(e, n)), Hn.add(e));
}
const Ts = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, vr = 1e-7, xr = 12;
function Tr(t, e, n, i, s) {
  let r, o, a = 0;
  do
    o = e + (n - e) / 2, r = Ts(o, i, s) - t, r > 0 ? n = o : e = o;
  while (Math.abs(r) > vr && ++a < xr);
  return o;
}
// @__NO_SIDE_EFFECTS__
function zt(t, e, n, i) {
  if (t === e && n === i)
    return G;
  const s = (r) => Tr(r, 0, 1, t, n);
  return (r) => r === 0 || r === 1 ? r : Ts(s(r), e, i);
}
const ws = /* @__NO_SIDE_EFFECTS__ */ (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, bs = /* @__NO_SIDE_EFFECTS__ */ (t) => (e) => 1 - t(1 - e), Ps = /* @__PURE__ */ zt(0.33, 1.53, 0.69, 0.99), Tn = /* @__PURE__ */ bs(Ps), Ss = /* @__PURE__ */ ws(Tn), As = (t) => t >= 1 ? 1 : (t *= 2) < 1 ? 0.5 * Tn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), wn = (t) => 1 - Math.sin(Math.acos(t)), Cs = /* @__PURE__ */ bs(wn), Vs = /* @__PURE__ */ ws(wn), wr = /* @__PURE__ */ zt(0.42, 0, 1, 1), br = /* @__PURE__ */ zt(0, 0, 0.58, 1), Ms = /* @__PURE__ */ zt(0.42, 0, 0.58, 1), Pr = /* @__NO_SIDE_EFFECTS__ */ (t) => Array.isArray(t) && typeof t[0] != "number", Ds = /* @__NO_SIDE_EFFECTS__ */ (t) => Array.isArray(t) && typeof t[0] == "number", Gn = {
  linear: G,
  easeIn: wr,
  easeInOut: Ms,
  easeOut: br,
  circIn: wn,
  circInOut: Vs,
  circOut: Cs,
  backIn: Tn,
  backInOut: Ss,
  backOut: Ps,
  anticipate: As
}, Sr = (t) => typeof t == "string", _n = (t) => {
  if (/* @__PURE__ */ Ds(t)) {
    ot(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [e, n, i, s] = t;
    return /* @__PURE__ */ zt(e, n, i, s);
  } else if (Sr(t))
    return ot(Gn[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), Gn[t];
  return t;
}, Gt = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function Ar(t, e) {
  let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), s = !1, r = !1;
  const o = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function c(l) {
    o.has(l) && (u.schedule(l), t()), l(a);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, h = !1, f = !1) => {
      const p = f && s ? n : i;
      return h && o.add(l), p.add(l), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      i.delete(l), o.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (a = l, s) {
        r = !0;
        return;
      }
      s = !0;
      const h = n;
      n = i, i = h, n.forEach(c), n.clear(), s = !1, r && (r = !1, u.process(l));
    }
  };
  return u;
}
const Cr = 40;
function Es(t, e) {
  let n = !1, i = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, r = () => n = !0, o = Gt.reduce((v, T) => (v[T] = Ar(r), v), {}), { setup: a, read: c, resolveKeyframes: u, preUpdate: l, update: h, preRender: f, render: d, postRender: p } = o, g = () => {
    const v = at.useManualTiming, T = v ? s.timestamp : performance.now();
    n = !1, v || (s.delta = i ? 1e3 / 60 : Math.max(Math.min(T - s.timestamp, Cr), 1)), s.timestamp = T, s.isProcessing = !0, a.process(s), c.process(s), u.process(s), l.process(s), h.process(s), f.process(s), d.process(s), p.process(s), s.isProcessing = !1, n && e && (i = !1, t(g));
  }, m = () => {
    n = !0, i = !0, s.isProcessing || t(g);
  };
  return { schedule: Gt.reduce((v, T) => {
    const A = o[T];
    return v[T] = (V, b = !1, P = !1) => (n || m(), A.schedule(V, b, P)), v;
  }, {}), cancel: (v) => {
    for (let T = 0; T < Gt.length; T++)
      o[Gt[T]].cancel(v);
  }, state: s, steps: o };
}
const { schedule: E, cancel: lt, state: O, steps: Se } = /* @__PURE__ */ Es(typeof requestAnimationFrame < "u" ? requestAnimationFrame : G, !0);
let Zt;
function Vr() {
  Zt = void 0;
}
const U = {
  now: () => (Zt === void 0 && U.set(O.isProcessing || at.useManualTiming ? O.timestamp : performance.now()), Zt),
  set: (t) => {
    Zt = t, queueMicrotask(Vr);
  }
}, Rs = (t) => (e) => typeof e == "string" && e.startsWith(t), ks = /* @__PURE__ */ Rs("--"), Mr = /* @__PURE__ */ Rs("var(--"), bn = (t) => Mr(t) ? Dr.test(t.split("/*")[0].trim()) : !1, Dr = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Yn(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--");
}
const Et = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Nt = {
  ...Et,
  transform: (t) => nt(0, 1, t)
}, _t = {
  ...Et,
  default: 1
}, Ft = (t) => Math.round(t * 1e5) / 1e5, Pn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Er(t) {
  return t == null;
}
const Rr = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Sn = (t, e) => (n) => !!(typeof n == "string" && Rr.test(n) && n.startsWith(t) || e && !Er(n) && Object.prototype.hasOwnProperty.call(n, e)), Ls = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, r, o, a] = i.match(Pn);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(r),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, kr = (t) => nt(0, 255, t), Ae = {
  ...Et,
  transform: (t) => Math.round(kr(t))
}, dt = {
  test: /* @__PURE__ */ Sn("rgb", "red"),
  parse: /* @__PURE__ */ Ls("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + Ae.transform(t) + ", " + Ae.transform(e) + ", " + Ae.transform(n) + ", " + Ft(Nt.transform(i)) + ")"
};
function Lr(t) {
  let e = "", n = "", i = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const We = {
  test: /* @__PURE__ */ Sn("#"),
  parse: Lr,
  transform: dt.transform
}, Kt = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), st = /* @__PURE__ */ Kt("deg"), et = /* @__PURE__ */ Kt("%"), w = /* @__PURE__ */ Kt("px"), Br = /* @__PURE__ */ Kt("vh"), Fr = /* @__PURE__ */ Kt("vw"), Xn = {
  ...et,
  parse: (t) => et.parse(t) / 100,
  transform: (t) => et.transform(t * 100)
}, wt = {
  test: /* @__PURE__ */ Sn("hsl", "hue"),
  parse: /* @__PURE__ */ Ls("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + et.transform(Ft(e)) + ", " + et.transform(Ft(n)) + ", " + Ft(Nt.transform(i)) + ")"
}, B = {
  test: (t) => dt.test(t) || We.test(t) || wt.test(t),
  parse: (t) => dt.test(t) ? dt.parse(t) : wt.test(t) ? wt.parse(t) : We.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? dt.transform(t) : wt.transform(t),
  getAnimatableNone: (t) => {
    const e = B.parse(t);
    return e.alpha = 0, B.transform(e);
  }
}, Ir = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Or(t) {
  return isNaN(t) && typeof t == "string" && (t.match(Pn)?.length || 0) + (t.match(Ir)?.length || 0) > 0;
}
const Bs = "number", Fs = "color", jr = "var", Nr = "var(", qn = "${}", Ur = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function At(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let r = 0;
  const a = e.replace(Ur, (c) => (B.test(c) ? (i.color.push(r), s.push(Fs), n.push(B.parse(c))) : c.startsWith(Nr) ? (i.var.push(r), s.push(jr), n.push(c)) : (i.number.push(r), s.push(Bs), n.push(parseFloat(c))), ++r, qn)).split(qn);
  return { values: n, split: a, indexes: i, types: s };
}
function Wr(t) {
  return At(t).values;
}
function Is({ split: t, types: e }) {
  const n = t.length;
  return (i) => {
    let s = "";
    for (let r = 0; r < n; r++)
      if (s += t[r], i[r] !== void 0) {
        const o = e[r];
        o === Bs ? s += Ft(i[r]) : o === Fs ? s += B.transform(i[r]) : s += i[r];
      }
    return s;
  };
}
function $r(t) {
  return Is(At(t));
}
const zr = (t) => typeof t == "number" ? 0 : B.test(t) ? B.getAnimatableNone(t) : t, Kr = (t, e) => typeof t == "number" ? e?.trim().endsWith("/") ? t : 0 : zr(t);
function Hr(t) {
  const e = At(t);
  return Is(e)(e.values.map((i, s) => Kr(i, e.split[s])));
}
const X = {
  test: Or,
  parse: Wr,
  createTransformer: $r,
  getAnimatableNone: Hr
};
function Ce(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Gr({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let s = 0, r = 0, o = 0;
  if (!e)
    s = r = o = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, c = 2 * n - a;
    s = Ce(c, a, t + 1 / 3), r = Ce(c, a, t), o = Ce(c, a, t - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(r * 255),
    blue: Math.round(o * 255),
    alpha: i
  };
}
function le(t, e) {
  return (n) => n > 0 ? e : t;
}
const D = (t, e, n) => t + (e - t) * n, Ve = (t, e, n) => {
  const i = t * t, s = n * (e * e - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, _r = [We, dt, wt], Yr = (t) => _r.find((e) => e.test(t));
function Zn(t) {
  const e = Yr(t);
  if (Dt(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e)
    return !1;
  let n = e.parse(t);
  return e === wt && (n = Gr(n)), n;
}
const Jn = (t, e) => {
  const n = Zn(t), i = Zn(e);
  if (!n || !i)
    return le(t, e);
  const s = { ...n };
  return (r) => (s.red = Ve(n.red, i.red, r), s.green = Ve(n.green, i.green, r), s.blue = Ve(n.blue, i.blue, r), s.alpha = D(n.alpha, i.alpha, r), dt.transform(s));
}, $e = /* @__PURE__ */ new Set(["none", "hidden"]);
function Xr(t, e) {
  return $e.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function qr(t, e) {
  return (n) => D(t, e, n);
}
function An(t) {
  return typeof t == "number" ? qr : typeof t == "string" ? bn(t) ? le : B.test(t) ? Jn : Qr : Array.isArray(t) ? Os : typeof t == "object" ? B.test(t) ? Jn : Zr : le;
}
function Os(t, e) {
  const n = [...t], i = n.length, s = t.map((r, o) => An(r)(r, e[o]));
  return (r) => {
    for (let o = 0; o < i; o++)
      n[o] = s[o](r);
    return n;
  };
}
function Zr(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const s in n)
    t[s] !== void 0 && e[s] !== void 0 && (i[s] = An(t[s])(t[s], e[s]));
  return (s) => {
    for (const r in i)
      n[r] = i[r](s);
    return n;
  };
}
function Jr(t, e) {
  const n = [], i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < e.values.length; s++) {
    const r = e.types[s], o = t.indexes[r][i[r]], a = t.values[o] ?? 0;
    n[s] = a, i[r]++;
  }
  return n;
}
const Qr = (t, e) => {
  const n = X.createTransformer(e), i = At(t), s = At(e);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? $e.has(t) && !s.values.length || $e.has(e) && !i.values.length ? Xr(t, e) : $t(Os(Jr(i, s), s.values), n) : (Dt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), le(t, e));
};
function js(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? D(t, e, n) : An(t)(t, e);
}
const ta = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: (n = !0) => E.update(e, n),
    stop: () => lt(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => O.isProcessing ? O.timestamp : U.now()
  };
}, Ns = (t, e, n = 10) => {
  let i = "";
  const s = Math.max(Math.round(e / n), 2);
  for (let r = 0; r < s; r++)
    i += Math.round(t(r / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
}, ce = 2e4;
function Cn(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < ce; )
    e += n, i = t.next(e);
  return e >= ce ? 1 / 0 : e;
}
function ea(t, e = 100, n) {
  const i = n({ ...t, keyframes: [0, e] }), s = Math.min(Cn(i), ce);
  return {
    type: "keyframes",
    ease: (r) => i.next(s * r).value / e,
    duration: /* @__PURE__ */ H(s)
  };
}
const R = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
function ze(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const na = 12;
function ia(t, e, n) {
  let i = n;
  for (let s = 1; s < na; s++)
    i = i - t(i) / e(i);
  return i;
}
const Me = 1e-3;
function sa({ duration: t = R.duration, bounce: e = R.bounce, velocity: n = R.velocity, mass: i = R.mass }) {
  let s, r;
  Dt(t <= /* @__PURE__ */ $(R.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let o = 1 - e;
  o = nt(R.minDamping, R.maxDamping, o), t = nt(R.minDuration, R.maxDuration, /* @__PURE__ */ H(t)), o < 1 ? (s = (u) => {
    const l = u * o, h = l * t, f = l - n, d = ze(u, o), p = Math.exp(-h);
    return Me - f / d * p;
  }, r = (u) => {
    const h = u * o * t, f = h * n + n, d = Math.pow(o, 2) * Math.pow(u, 2) * t, p = Math.exp(-h), g = ze(Math.pow(u, 2), o);
    return (-s(u) + Me > 0 ? -1 : 1) * ((f - d) * p) / g;
  }) : (s = (u) => {
    const l = Math.exp(-u * t), h = (u - n) * t + 1;
    return -Me + l * h;
  }, r = (u) => {
    const l = Math.exp(-u * t), h = (n - u) * (t * t);
    return l * h;
  });
  const a = 5 / t, c = ia(s, r, a);
  if (t = /* @__PURE__ */ $(t), isNaN(c))
    return {
      stiffness: R.stiffness,
      damping: R.damping,
      duration: t
    };
  {
    const u = Math.pow(c, 2) * i;
    return {
      stiffness: u,
      damping: o * 2 * Math.sqrt(i * u),
      duration: t
    };
  }
}
const oa = ["duration", "bounce"], ra = ["stiffness", "damping", "mass"];
function Qn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function aa(t) {
  let e = {
    velocity: R.velocity,
    stiffness: R.stiffness,
    damping: R.damping,
    mass: R.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Qn(t, ra) && Qn(t, oa))
    if (e.velocity = 0, t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, r = 2 * nt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: R.mass,
        stiffness: s,
        damping: r
      };
    } else {
      const n = sa({ ...t, velocity: 0 });
      e = {
        ...e,
        ...n,
        mass: R.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function ue(t = R.visualDuration, e = R.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: s } = n;
  const r = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: r }, { stiffness: c, damping: u, mass: l, duration: h, velocity: f, isResolvedFromDuration: d } = aa({
    ...n,
    velocity: -/* @__PURE__ */ H(n.velocity || 0)
  }), p = f || 0, g = u / (2 * Math.sqrt(c * l)), m = o - r, y = /* @__PURE__ */ H(Math.sqrt(c / l)), x = Math.abs(m) < 5;
  i || (i = x ? R.restSpeed.granular : R.restSpeed.default), s || (s = x ? R.restDelta.granular : R.restDelta.default);
  let v, T, A, V, b, P;
  if (g < 1)
    A = ze(y, g), V = (p + g * y * m) / A, v = (S) => {
      const M = Math.exp(-g * y * S);
      return o - M * (V * Math.sin(A * S) + m * Math.cos(A * S));
    }, b = g * y * V + m * A, P = g * y * m - V * A, T = (S) => Math.exp(-g * y * S) * (b * Math.sin(A * S) + P * Math.cos(A * S));
  else if (g === 1) {
    v = (M) => o - Math.exp(-y * M) * (m + (p + y * m) * M);
    const S = p + y * m;
    T = (M) => Math.exp(-y * M) * (y * S * M - p);
  } else {
    const S = y * Math.sqrt(g * g - 1);
    v = (Z) => {
      const it = Math.exp(-g * y * Z), J = Math.min(S * Z, 300);
      return o - it * ((p + g * y * m) * Math.sinh(J) + S * m * Math.cosh(J)) / S;
    };
    const M = (p + g * y * m) / S, L = g * y * M - m * S, q = g * y * m - M * S;
    T = (Z) => {
      const it = Math.exp(-g * y * Z), J = Math.min(S * Z, 300);
      return it * (L * Math.sinh(J) + q * Math.cosh(J));
    };
  }
  const C = {
    calculatedDuration: d && h || null,
    velocity: (S) => /* @__PURE__ */ $(T(S)),
    next: (S) => {
      if (!d && g < 1) {
        const L = Math.exp(-g * y * S), q = Math.sin(A * S), Z = Math.cos(A * S), it = o - L * (V * q + m * Z), J = /* @__PURE__ */ $(L * (b * q + P * Z));
        return a.done = Math.abs(J) <= i && Math.abs(o - it) <= s, a.value = a.done ? o : it, a;
      }
      const M = v(S);
      if (d)
        a.done = S >= h;
      else {
        const L = /* @__PURE__ */ $(T(S));
        a.done = Math.abs(L) <= i && Math.abs(o - M) <= s;
      }
      return a.value = a.done ? o : M, a;
    },
    toString: () => {
      const S = Math.min(Cn(C), ce), M = Ns((L) => C.next(S * L).value, S, 30);
      return S + "ms " + M;
    },
    toTransition: () => {
    }
  };
  return C;
}
ue.applyToOptions = (t) => {
  const e = ea(t, 100, ue);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ $(e.duration), t.type = "keyframes", t;
};
const la = 5;
function Us(t, e, n) {
  const i = Math.max(e - la, 0);
  return /* @__PURE__ */ xs(n - t(i), e - i);
}
function Ke({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: r = 500, modifyTarget: o, min: a, max: c, restDelta: u = 0.5, restSpeed: l }) {
  const h = t[0], f = {
    done: !1,
    value: h
  }, d = (P) => a !== void 0 && P < a || c !== void 0 && P > c, p = (P) => a === void 0 ? c : c === void 0 || Math.abs(a - P) < Math.abs(c - P) ? a : c;
  let g = n * e;
  const m = h + g, y = o === void 0 ? m : o(m);
  y !== m && (g = y - h);
  const x = (P) => -g * Math.exp(-P / i), v = (P) => y + x(P), T = (P) => {
    const C = x(P), S = v(P);
    f.done = Math.abs(C) <= u, f.value = f.done ? y : S;
  };
  let A, V;
  const b = (P) => {
    d(f.value) && (A = P, V = ue({
      keyframes: [f.value, p(f.value)],
      velocity: Us(v, P, f.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: r,
      restDelta: u,
      restSpeed: l
    }));
  };
  return b(0), {
    calculatedDuration: null,
    next: (P) => {
      let C = !1;
      return !V && A === void 0 && (C = !0, T(P), b(P)), A !== void 0 && P >= A ? V.next(P - A) : (!C && T(P), f);
    }
  };
}
function ca(t, e, n) {
  const i = [], s = n || at.mix || js, r = t.length - 1;
  for (let o = 0; o < r; o++) {
    let a = s(t[o], t[o + 1]);
    if (e) {
      const c = Array.isArray(e) ? e[o] || G : e;
      a = $t(c, a);
    }
    i.push(a);
  }
  return i;
}
function ua(t, e, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const r = t.length;
  if (ot(r === e.length, "Both input and output ranges must be the same length", "range-length"), r === 1)
    return () => e[0];
  if (r === 2 && e[0] === e[1])
    return () => e[1];
  const o = t[0] === t[1];
  t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = ca(e, i, s), c = a.length, u = (l) => {
    if (o && l < t[0])
      return e[0];
    let h = 0;
    if (c > 1)
      for (; h < t.length - 2 && !(l < t[h + 1]); h++)
        ;
    const f = /* @__PURE__ */ jt(t[h], t[h + 1], l);
    return a[h](f);
  };
  return n ? (l) => u(nt(t[0], t[r - 1], l)) : u;
}
function ha(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = /* @__PURE__ */ jt(0, e, i);
    t.push(D(n, 1, s));
  }
}
function fa(t) {
  const e = [0];
  return ha(e, t.length - 1), e;
}
function da(t, e) {
  return t.map((n) => n * e);
}
function pa(t, e) {
  return t.map(() => e || Ms).splice(0, t.length - 1);
}
function bt({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const s = /* @__PURE__ */ Pr(i) ? i.map(_n) : _n(i), r = {
    done: !1,
    value: e[0]
  }, o = da(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : fa(e),
    t
  ), a = ua(o, e, {
    ease: Array.isArray(s) ? s : pa(e, s)
  });
  return {
    calculatedDuration: t,
    next: (c) => (r.value = a(c), r.done = c >= t, r)
  };
}
const ma = (t) => t !== null;
function Te(t, { repeat: e, repeatType: n = "loop" }, i, s = 1) {
  const r = t.filter(ma), a = s < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : r.length - 1;
  return !a || i === void 0 ? r[a] : i;
}
const ga = {
  decay: Ke,
  inertia: Ke,
  tween: bt,
  keyframes: bt,
  spring: ue
};
function Ws(t) {
  typeof t.type == "string" && (t.type = ga[t.type]);
}
class Vn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const ya = (t) => t / 100;
class he extends Vn {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== U.now() && this.tick(U.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    Ws(e);
    const { type: n = bt, repeat: i = 0, repeatDelay: s = 0, repeatType: r, velocity: o = 0 } = e;
    let { keyframes: a } = e;
    const c = n || bt;
    process.env.NODE_ENV !== "production" && c !== bt && ot(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), c !== bt && typeof a[0] != "number" && (this.mixKeyframes = $t(ya, js(a[0], a[1])), a = [0, 100]);
    const u = c({ ...e, keyframes: a });
    r === "mirror" && (this.mirroredGenerator = c({
      ...e,
      keyframes: [...a].reverse(),
      velocity: -o
    })), u.calculatedDuration === null && (u.calculatedDuration = Cn(u));
    const { calculatedDuration: l } = u;
    this.calculatedDuration = l, this.resolvedDuration = l + s, this.totalDuration = this.resolvedDuration * (i + 1) - s, this.generator = u;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = !1) {
    const { generator: i, totalDuration: s, mixKeyframes: r, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: c } = this;
    if (this.startTime === null)
      return i.next(0);
    const { delay: u = 0, keyframes: l, repeat: h, repeatType: f, repeatDelay: d, type: p, onUpdate: g, finalKeyframe: m } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - s / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const y = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), x = this.playbackSpeed >= 0 ? y < 0 : y > s;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let v = this.currentTime, T = i;
    if (h) {
      const P = Math.min(this.currentTime, s) / a;
      let C = Math.floor(P), S = P % 1;
      !S && P >= 1 && (S = 1), S === 1 && C--, C = Math.min(C, h + 1), C % 2 && (f === "reverse" ? (S = 1 - S, d && (S -= d / a)) : f === "mirror" && (T = o)), v = nt(0, 1, S) * a;
    }
    let A;
    x ? (this.delayState.value = l[0], A = this.delayState) : A = T.next(v), r && !x && (A.value = r(A.value));
    let { done: V } = A;
    !x && c !== null && (V = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const b = this.holdTime === null && (this.state === "finished" || this.state === "running" && V);
    return b && p !== Ke && (A.value = Te(l, this.options, m, this.speed)), g && g(A.value), b && this.finish(), A;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return /* @__PURE__ */ H(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ H(e);
  }
  get time() {
    return /* @__PURE__ */ H(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ $(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const e = this.currentTime;
    if (e <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(e);
    const n = this.generator.next(e).value;
    return Us((i) => this.generator.next(i).value, e, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    n && this.driver && this.updateTime(U.now()), this.playbackSpeed = e, n && this.driver && (this.time = /* @__PURE__ */ H(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: e = ta, startTime: n } = this.options;
    this.driver || (this.driver = e((s) => this.tick(s))), this.options.onPlay?.();
    const i = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = i) : this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = n ?? i), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(U.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
  }
}
function va(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const pt = (t) => t * 180 / Math.PI, He = (t) => {
  const e = pt(Math.atan2(t[1], t[0]));
  return Ge(e);
}, xa = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: He,
  rotateZ: He,
  skewX: (t) => pt(Math.atan(t[1])),
  skewY: (t) => pt(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, Ge = (t) => (t = t % 360, t < 0 && (t += 360), t), ti = He, ei = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), ni = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), Ta = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: ei,
  scaleY: ni,
  scale: (t) => (ei(t) + ni(t)) / 2,
  rotateX: (t) => Ge(pt(Math.atan2(t[6], t[5]))),
  rotateY: (t) => Ge(pt(Math.atan2(-t[2], t[0]))),
  rotateZ: ti,
  rotate: ti,
  skewX: (t) => pt(Math.atan(t[4])),
  skewY: (t) => pt(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function _e(t) {
  return t.includes("scale") ? 1 : 0;
}
function Ye(t, e) {
  if (!t || t === "none")
    return _e(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, s;
  if (n)
    i = Ta, s = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = xa, s = a;
  }
  if (!s)
    return _e(e);
  const r = i[e], o = s[1].split(",").map(ba);
  return typeof r == "function" ? r(o) : o[r];
}
const wa = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return Ye(n, e);
};
function ba(t) {
  return parseFloat(t.trim());
}
const Rt = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], kt = /* @__PURE__ */ new Set([...Rt, "pathRotation"]), ii = (t) => t === Et || t === w, Pa = /* @__PURE__ */ new Set(["x", "y", "z"]), Sa = Rt.filter((t) => !Pa.has(t));
function Aa(t) {
  const e = [];
  return Sa.forEach((n) => {
    const i = t.getValue(n);
    i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const rt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0", boxSizing: i }) => {
    const s = t.max - t.min;
    return i === "border-box" ? s : s - parseFloat(e) - parseFloat(n);
  },
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0", boxSizing: i }) => {
    const s = t.max - t.min;
    return i === "border-box" ? s : s - parseFloat(e) - parseFloat(n);
  },
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => Ye(e, "x"),
  y: (t, { transform: e }) => Ye(e, "y")
};
rt.translateX = rt.x;
rt.translateY = rt.y;
const gt = /* @__PURE__ */ new Set();
let Xe = !1, qe = !1, Ze = !1;
function $s() {
  if (qe) {
    const t = Array.from(gt).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const s = Aa(i);
      s.length && (n.set(i, s), i.render());
    }), t.forEach((i) => i.measureInitialState()), e.forEach((i) => {
      i.render();
      const s = n.get(i);
      s && s.forEach(([r, o]) => {
        i.getValue(r)?.set(o);
      });
    }), t.forEach((i) => i.measureEndState()), t.forEach((i) => {
      i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
    });
  }
  qe = !1, Xe = !1, gt.forEach((t) => t.complete(Ze)), gt.clear();
}
function zs() {
  gt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (qe = !0);
  });
}
function Ca() {
  Ze = !0, zs(), $s(), Ze = !1;
}
class Mn {
  constructor(e, n, i, s, r, o = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = r, this.isAsync = o;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (gt.add(this), Xe || (Xe = !0, E.read(zs), E.resolveKeyframes($s))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: i, motionValue: s } = this;
    if (e[0] === null) {
      const r = s?.get(), o = e[e.length - 1];
      if (r !== void 0)
        e[0] = r;
      else if (i && n) {
        const a = i.readValue(n, o);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = o), s && r === void 0 && s.set(e[0]);
    }
    va(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), gt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (gt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Va = (t) => t.startsWith("--");
function Ks(t, e, n) {
  Va(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const Ma = {};
function Hs(t, e) {
  const n = /* @__PURE__ */ vs(t);
  return () => Ma[e] ?? n();
}
const Da = /* @__PURE__ */ Hs(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Gs = /* @__PURE__ */ Hs(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Bt = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, si = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Bt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Bt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Bt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Bt([0.33, 1.53, 0.69, 0.99])
};
function _s(t, e) {
  if (t)
    return typeof t == "function" ? Gs() ? Ns(t, e) : "ease-out" : /* @__PURE__ */ Ds(t) ? Bt(t) : Array.isArray(t) ? t.map((n) => _s(n, e) || si.easeOut) : si[t];
}
function Ea(t, e, n, { delay: i = 0, duration: s = 300, repeat: r = 0, repeatType: o = "loop", ease: a = "easeOut", times: c } = {}, u = void 0) {
  const l = {
    [e]: n
  };
  c && (l.offset = c);
  const h = _s(a, s);
  Array.isArray(h) && (l.easing = h);
  const f = {
    delay: i,
    duration: s,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: r + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  };
  return u && (f.pseudoElement = u), t.animate(l, f);
}
function Ys(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function Ra({ type: t, ...e }) {
  return Ys(t) && Gs() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class Xs extends Vn {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e)
      return;
    const { element: n, name: i, keyframes: s, pseudoElement: r, allowFlatten: o = !1, finalKeyframe: a, onComplete: c } = e;
    this.isPseudoElement = !!r, this.allowFlatten = o, this.options = e, ot(typeof e.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const u = Ra(e);
    this.animation = Ea(n, i, s, u, r), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !r) {
        const l = Te(s, this.options, a, this.speed);
        this.updateMotionValue && this.updateMotionValue(l), Ks(n, i, l), this.animation.cancel();
      }
      c?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const e = this.options?.element;
    !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ H(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ H(e);
  }
  get time() {
    return /* @__PURE__ */ H(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    const n = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ $(e), n && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(e) {
    this.manualStartTime = this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, rangeStart: n, rangeEnd: i, observe: s }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && Da() ? (this.animation.timeline = e, n && (this.animation.rangeStart = n), i && (this.animation.rangeEnd = i), G) : s(this);
  }
}
const qs = {
  anticipate: As,
  backInOut: Ss,
  circInOut: Vs
};
function ka(t) {
  return t in qs;
}
function La(t) {
  typeof t.ease == "string" && ka(t.ease) && (t.ease = qs[t.ease]);
}
const De = 10;
class Ba extends Xs {
  constructor(e) {
    La(e), Ws(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: i, onComplete: s, element: r, ...o } = this.options;
    if (!n)
      return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new he({
      ...o,
      autoplay: !1
    }), c = Math.max(De, U.now() - this.startTime), u = nt(0, De, c - De), l = a.sample(c).value, { name: h } = this.options;
    r && h && Ks(r, h, l), n.setWithVelocity(a.sample(Math.max(0, c - u)).value, l, u), a.stop();
  }
}
const oi = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(X.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function Fa(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function Ia(t, e, n, i) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const r = t[t.length - 1], o = oi(s, e), a = oi(r, e);
  return Dt(o === a, `You are trying to animate ${e} from "${s}" to "${r}". "${o ? r : s}" is not an animatable value.`, "value-not-animatable"), !o || !a ? !1 : Fa(t) || (n === "spring" || Ys(n)) && i;
}
function Je(t) {
  t.duration = 0, t.type = "keyframes";
}
const Zs = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), Oa = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function ja(t) {
  for (let e = 0; e < t.length; e++)
    if (typeof t[e] == "string" && Oa.test(t[e]))
      return !0;
  return !1;
}
const Na = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), Ua = /* @__PURE__ */ vs(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Wa(t) {
  const { motionValue: e, name: n, repeatDelay: i, repeatType: s, damping: r, type: o, keyframes: a } = t;
  if (!(e?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: u, transformTemplate: l } = e.owner.getProps();
  return Ua() && n && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Zs.has(n) || Na.has(n) && ja(a)) && (n !== "transform" || !l) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !u && !i && s !== "mirror" && r !== 0 && o !== "inertia";
}
const $a = 40;
class za extends Vn {
  constructor({ autoplay: e = !0, delay: n = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: r = 0, repeatType: o = "loop", keyframes: a, name: c, motionValue: u, element: l, ...h }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = U.now();
    const f = {
      autoplay: e,
      delay: n,
      type: i,
      repeat: s,
      repeatDelay: r,
      repeatType: o,
      name: c,
      motionValue: u,
      element: l,
      ...h
    }, d = l?.KeyframeResolver || Mn;
    this.keyframeResolver = new d(a, (p, g, m) => this.onKeyframesResolved(p, g, f, !m), c, u, l), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, n, i, s) {
    this.keyframeResolver = void 0;
    const { name: r, type: o, velocity: a, delay: c, isHandoff: u, onUpdate: l } = i;
    this.resolvedAt = U.now();
    let h = !0;
    Ia(e, r, o, a) || (h = !1, (at.instantAnimations || !c) && l?.(Te(e, i, n)), e[0] = e[e.length - 1], Je(i), i.repeat = 0);
    const d = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > $a ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...i,
      keyframes: e
    }, p = h && !u && Wa(d), g = d.motionValue?.owner?.current;
    let m;
    if (p)
      try {
        m = new Ba({
          ...d,
          element: g
        });
      } catch {
        m = new he(d);
      }
    else
      m = new he(d);
    m.finished.then(() => {
      this.notifyFinished();
    }).catch(G), this.pendingTimeline && (this.stopTimeline = m.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = m;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), Ca()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
function Js(t, e, n, i = 0, s = 1) {
  const r = Array.from(t).sort((u, l) => u.sortNodePosition(l)).indexOf(e), o = t.size, a = (o - 1) * i;
  return typeof n == "function" ? n(r, o) : s === 1 ? r * i : a - r * i;
}
const ri = 30, Ka = (t) => !isNaN(parseFloat(t));
class Ha {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
      const s = U.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const r of this.dependents)
          r.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = U.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Ka(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return process.env.NODE_ENV !== "production" && xn(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new vn());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), E.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, i) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = U.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > ri)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ri);
    return /* @__PURE__ */ xs(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ct(t, e) {
  return new Ha(t, e);
}
function Qs(t, e) {
  if (t?.inherit && e) {
    const { inherit: n, ...i } = t;
    return { ...e, ...i };
  }
  return t;
}
function Dn(t, e) {
  const n = t?.[e] ?? t?.default ?? t;
  return n !== t ? Qs(n, t) : n;
}
const Ga = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, _a = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Ya = {
  type: "keyframes",
  duration: 0.8
}, Xa = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, qa = (t, { keyframes: e }) => e.length > 2 ? Ya : kt.has(t) ? t.startsWith("scale") ? _a(e[1]) : Ga : Xa, Za = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function Ja(t) {
  for (const e in t)
    if (!Za.has(e))
      return !0;
  return !1;
}
const En = (t, e, n, i = {}, s, r) => (o) => {
  const a = Dn(i, t) || {}, c = a.delay || i.delay || 0;
  let { elapsed: u = 0 } = i;
  u = u - /* @__PURE__ */ $(c);
  const l = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (f) => {
      e.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      o(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: r ? void 0 : s
  };
  Ja(a) || Object.assign(l, qa(t, l)), l.duration && (l.duration = /* @__PURE__ */ $(l.duration)), l.repeatDelay && (l.repeatDelay = /* @__PURE__ */ $(l.repeatDelay)), l.from !== void 0 && (l.keyframes[0] = l.from);
  let h = !1;
  if ((l.type === !1 || l.duration === 0 && !l.repeatDelay) && (Je(l), l.delay === 0 && (h = !0)), (at.instantAnimations || at.skipAnimations || s?.shouldSkipAnimations || a.skipAnimations) && (h = !0, Je(l), l.delay = 0), l.allowFlatten = !a.type && !a.ease, h && !r && e.get() !== void 0) {
    const f = Te(l.keyframes, a);
    if (f !== void 0) {
      E.update(() => {
        l.onUpdate(f), l.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new he(l) : new za(l);
}, Qa = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function tl(t) {
  const e = Qa.exec(t);
  if (!e)
    return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
const el = 4;
function to(t, e, n = 1) {
  ot(n <= el, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [i, s] = tl(t);
  if (!i)
    return;
  const r = window.getComputedStyle(e).getPropertyValue(i);
  if (r) {
    const o = r.trim();
    return ms(o) ? parseFloat(o) : o;
  }
  return bn(s) ? to(s, e, n + 1) : s;
}
function ai(t) {
  const e = [{}, {}];
  return t?.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function Rn(t, e, n, i) {
  if (typeof e == "function") {
    const [s, r] = ai(i);
    e = e(n !== void 0 ? n : t.custom, s, r);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, r] = ai(i);
    e = e(n !== void 0 ? n : t.custom, s, r);
  }
  return e;
}
function yt(t, e, n) {
  const i = t.getProps();
  return Rn(i, e, n !== void 0 ? n : i.custom, t);
}
const eo = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Rt
]), Qe = (t) => Array.isArray(t);
function nl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Ct(n));
}
function il(t) {
  return Qe(t) ? t[t.length - 1] || 0 : t;
}
function sl(t, e) {
  const n = yt(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...r } = n || {};
  r = { ...r, ...i };
  for (const o in r) {
    const a = il(r[o]);
    nl(t, o, a);
  }
}
const j = (t) => !!(t && t.getVelocity);
function ol(t) {
  return !!(j(t) && t.add);
}
function tn(t, e) {
  const n = t.getValue("willChange");
  if (ol(n))
    return n.add(e);
  if (!n && at.WillChange) {
    const i = new at.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
function kn(t) {
  return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
const rl = "framerAppearId", no = "data-" + kn(rl);
function io(t) {
  return t.props[no];
}
function al({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function so(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  let { transition: r, transitionEnd: o, ...a } = e;
  const c = t.getDefaultTransition();
  r = r ? Qs(r, c) : c;
  const u = r?.reduceMotion, l = r?.skipAnimations;
  i && (r = i);
  const h = [], f = s && t.animationState && t.animationState.getState()[s], d = r?.path;
  d && d.animateVisualElement(t, a, r, n, h);
  for (const p in a) {
    const g = t.getValue(p, t.latestValues[p] ?? null), m = a[p];
    if (m === void 0 || f && al(f, p))
      continue;
    const y = {
      delay: n,
      ...Dn(r || {}, p)
    };
    l && (y.skipAnimations = !0);
    const x = g.get();
    if (x !== void 0 && !g.isAnimating() && !Array.isArray(m) && m === x && !y.velocity) {
      E.update(() => g.set(m));
      continue;
    }
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const V = io(t);
      if (V) {
        const b = window.MotionHandoffAnimation(V, p, E);
        b !== null && (y.startTime = b, v = !0);
      }
    }
    tn(t, p);
    const T = u ?? t.shouldReduceMotion;
    g.start(En(p, g, m, T && eo.has(p) ? { type: !1 } : y, t, v));
    const A = g.animation;
    A && h.push(A);
  }
  if (o) {
    const p = () => E.update(() => {
      o && sl(t, o);
    });
    h.length ? Promise.all(h).then(p) : p();
  }
  return h;
}
function en(t, e, n = {}) {
  const i = yt(t, e, n.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: s = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const r = i ? () => Promise.all(so(t, i, n)) : () => Promise.resolve(), o = t.variantChildren && t.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: l, staggerDirection: h } = s;
    return ll(t, e, c, u, l, h, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [c, u] = a === "beforeChildren" ? [r, o] : [o, r];
    return c().then(() => u());
  } else
    return Promise.all([r(), o(n.delay)]);
}
function ll(t, e, n = 0, i = 0, s = 0, r = 1, o) {
  const a = [];
  for (const c of t.variantChildren)
    c.notify("AnimationStart", e), a.push(en(c, e, {
      ...o,
      delay: n + (typeof i == "function" ? 0 : i) + Js(t.variantChildren, c, i, s, r)
    }).then(() => c.notify("AnimationComplete", e)));
  return Promise.all(a);
}
function cl(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((r) => en(t, r, n));
    i = Promise.all(s);
  } else if (typeof e == "string")
    i = en(t, e, n);
  else {
    const s = typeof e == "function" ? yt(t, e, n.custom) : e;
    i = Promise.all(so(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const ul = {
  test: (t) => t === "auto",
  parse: (t) => t
}, oo = (t) => (e) => e.test(t), ro = [Et, w, et, st, Fr, Br, ul], li = (t) => ro.find(oo(t));
function hl(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || ys(t) : !0;
}
const fl = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function dl(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(Pn) || [];
  if (!i)
    return t;
  const s = n.replace(i, "");
  let r = fl.has(e) ? 1 : 0;
  return i !== n && (r *= 100), e + "(" + r + s + ")";
}
const pl = /\b([a-z-]*)\(.*?\)/gu, nn = {
  ...X,
  getAnimatableNone: (t) => {
    const e = t.match(pl);
    return e ? e.map(dl).join(" ") : t;
  }
}, sn = {
  ...X,
  getAnimatableNone: (t) => {
    const e = X.parse(t);
    return X.createTransformer(t)(e.map((i) => typeof i == "number" ? 0 : typeof i == "object" ? { ...i, alpha: 1 } : i));
  }
}, ci = {
  ...Et,
  transform: Math.round
}, ml = {
  rotate: st,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: st,
  rotateX: st,
  rotateY: st,
  rotateZ: st,
  scale: _t,
  scaleX: _t,
  scaleY: _t,
  scaleZ: _t,
  skew: st,
  skewX: st,
  skewY: st,
  distance: w,
  translateX: w,
  translateY: w,
  translateZ: w,
  x: w,
  y: w,
  z: w,
  perspective: w,
  transformPerspective: w,
  opacity: Nt,
  originX: Xn,
  originY: Xn,
  originZ: w
}, fe = {
  // Border props
  borderWidth: w,
  borderTopWidth: w,
  borderRightWidth: w,
  borderBottomWidth: w,
  borderLeftWidth: w,
  borderRadius: w,
  borderTopLeftRadius: w,
  borderTopRightRadius: w,
  borderBottomRightRadius: w,
  borderBottomLeftRadius: w,
  // Positioning props
  width: w,
  maxWidth: w,
  height: w,
  maxHeight: w,
  top: w,
  right: w,
  bottom: w,
  left: w,
  inset: w,
  insetBlock: w,
  insetBlockStart: w,
  insetBlockEnd: w,
  insetInline: w,
  insetInlineStart: w,
  insetInlineEnd: w,
  // Spacing props
  padding: w,
  paddingTop: w,
  paddingRight: w,
  paddingBottom: w,
  paddingLeft: w,
  paddingBlock: w,
  paddingBlockStart: w,
  paddingBlockEnd: w,
  paddingInline: w,
  paddingInlineStart: w,
  paddingInlineEnd: w,
  margin: w,
  marginTop: w,
  marginRight: w,
  marginBottom: w,
  marginLeft: w,
  marginBlock: w,
  marginBlockStart: w,
  marginBlockEnd: w,
  marginInline: w,
  marginInlineStart: w,
  marginInlineEnd: w,
  // Typography
  fontSize: w,
  // Misc
  backgroundPositionX: w,
  backgroundPositionY: w,
  ...ml,
  zIndex: ci,
  // SVG
  fillOpacity: Nt,
  strokeOpacity: Nt,
  numOctaves: ci
}, gl = {
  ...fe,
  // Color props
  color: B,
  backgroundColor: B,
  outlineColor: B,
  fill: B,
  stroke: B,
  // Border props
  borderColor: B,
  borderTopColor: B,
  borderRightColor: B,
  borderBottomColor: B,
  borderLeftColor: B,
  filter: nn,
  WebkitFilter: nn,
  mask: sn,
  WebkitMask: sn
}, ao = (t) => gl[t], yl = /* @__PURE__ */ new Set([nn, sn]);
function lo(t, e) {
  let n = ao(t);
  return yl.has(n) || (n = X), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const vl = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function xl(t, e, n) {
  let i = 0, s;
  for (; i < t.length && !s; ) {
    const r = t[i];
    typeof r == "string" && !vl.has(r) && At(r).values.length && (s = t[i]), i++;
  }
  if (s && n)
    for (const r of e)
      t[r] = lo(n, s);
}
class Tl extends Mn {
  constructor(e, n, i, s, r) {
    super(e, n, i, s, r, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let h = e[l];
      if (typeof h == "string" && (h = h.trim(), bn(h))) {
        const f = to(h, n.current);
        f !== void 0 && (e[l] = f), l === e.length - 1 && (this.finalKeyframe = h);
      }
    }
    if (this.resolveNoneKeyframes(), !eo.has(i) || e.length !== 2)
      return;
    const [s, r] = e, o = li(s), a = li(r), c = Yn(s), u = Yn(r);
    if (c !== u && rt[i]) {
      this.needsMeasurement = !0;
      return;
    }
    if (o !== a)
      if (ii(o) && ii(a))
        for (let l = 0; l < e.length; l++) {
          const h = e[l];
          typeof h == "string" && (e[l] = parseFloat(h));
        }
      else rt[i] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, i = [];
    for (let s = 0; s < e.length; s++)
      (e[s] === null || hl(e[s])) && i.push(s);
    i.length && xl(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current)
      return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = rt[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && e.getValue(i, s).jump(s, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: i } = this;
    if (!e || !e.current)
      return;
    const s = e.getValue(n);
    s && s.jump(this.measuredOrigin, !1);
    const r = i.length - 1, o = i[r];
    i[r] = rt[n](e.measureViewportBox(), window.getComputedStyle(e.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), this.removedTransforms?.length && this.removedTransforms.forEach(([a, c]) => {
      e.getValue(a).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function co(t, e, n) {
  if (t == null)
    return [];
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let i = document;
    const s = n?.[t] ?? i.querySelectorAll(t);
    return s ? Array.from(s) : [];
  }
  return Array.from(t).filter((i) => i != null);
}
const on = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function Jt(t) {
  return gs(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
}
const { schedule: Ln } = /* @__PURE__ */ Es(queueMicrotask, !1), Y = {
  x: !1,
  y: !1
};
function uo() {
  return Y.x || Y.y;
}
function wl(t) {
  return t === "x" || t === "y" ? Y[t] ? null : (Y[t] = !0, () => {
    Y[t] = !1;
  }) : Y.x || Y.y ? null : (Y.x = Y.y = !0, () => {
    Y.x = Y.y = !1;
  });
}
function ho(t, e) {
  const n = co(t), i = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function bl(t) {
  return !(t.pointerType === "touch" || uo());
}
function Pl(t, e, n = {}) {
  const [i, s, r] = ho(t, n);
  return i.forEach((o) => {
    let a = !1, c = !1, u;
    const l = () => {
      o.removeEventListener("pointerleave", p);
    }, h = (m) => {
      u && (u(m), u = void 0), l();
    }, f = (m) => {
      a = !1, window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f), c && (c = !1, h(m));
    }, d = () => {
      a = !0, window.addEventListener("pointerup", f, s), window.addEventListener("pointercancel", f, s);
    }, p = (m) => {
      if (m.pointerType !== "touch") {
        if (a) {
          c = !0;
          return;
        }
        h(m);
      }
    }, g = (m) => {
      if (!bl(m))
        return;
      c = !1;
      const y = e(o, m);
      typeof y == "function" && (u = y, o.addEventListener("pointerleave", p, s));
    };
    o.addEventListener("pointerenter", g, s), o.addEventListener("pointerdown", d, s);
  }), r;
}
const fo = (t, e) => e ? t === e ? !0 : fo(t, e.parentElement) : !1, Bn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, Sl = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Al(t) {
  return Sl.has(t.tagName) || t.isContentEditable === !0;
}
const Cl = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function Vl(t) {
  return Cl.has(t.tagName) || t.isContentEditable === !0;
}
const Qt = /* @__PURE__ */ new WeakSet();
function ui(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function Ee(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Ml = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = ui(() => {
    if (Qt.has(n))
      return;
    Ee(n, "down");
    const s = ui(() => {
      Ee(n, "up");
    }), r = () => Ee(n, "cancel");
    n.addEventListener("keyup", s, e), n.addEventListener("blur", r, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function hi(t) {
  return Bn(t) && !uo();
}
const fi = /* @__PURE__ */ new WeakSet();
function Dl(t, e, n = {}) {
  const [i, s, r] = ho(t, n), o = (a) => {
    const c = a.currentTarget;
    if (!hi(a) || fi.has(a))
      return;
    Qt.add(c), n.stopPropagation && fi.add(a);
    const u = e(c, a), l = (d, p) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", f), Qt.has(c) && Qt.delete(c), hi(d) && typeof u == "function" && u(d, { success: p });
    }, h = (d) => {
      l(d, c === window || c === document || n.useGlobalTarget || fo(c, d.target));
    }, f = (d) => {
      l(d, !1);
    };
    window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", f, s);
  };
  return i.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s), Jt(a) && (a.addEventListener("focus", (u) => Ml(u, s)), !Al(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), r;
}
function Fn(t) {
  return gs(t) && "ownerSVGElement" in t;
}
const te = /* @__PURE__ */ new WeakMap();
let ee;
const po = (t, e, n) => (i, s) => s && s[0] ? s[0][t + "Size"] : Fn(i) && "getBBox" in i ? i.getBBox()[e] : i[n], El = /* @__PURE__ */ po("inline", "width", "offsetWidth"), Rl = /* @__PURE__ */ po("block", "height", "offsetHeight");
function kl({ target: t, borderBoxSize: e }) {
  te.get(t)?.forEach((n) => {
    n(t, {
      get width() {
        return El(t, e);
      },
      get height() {
        return Rl(t, e);
      }
    });
  });
}
function Ll(t) {
  t.forEach(kl);
}
function Bl() {
  typeof ResizeObserver > "u" || (ee = new ResizeObserver(Ll));
}
function Fl(t, e) {
  ee || Bl();
  const n = co(t);
  return n.forEach((i) => {
    let s = te.get(i);
    s || (s = /* @__PURE__ */ new Set(), te.set(i, s)), s.add(e), ee?.observe(i);
  }), () => {
    n.forEach((i) => {
      const s = te.get(i);
      s?.delete(e), s?.size || ee?.unobserve(i);
    });
  };
}
const ne = /* @__PURE__ */ new Set();
let Pt;
function Il() {
  Pt = () => {
    const t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    ne.forEach((e) => e(t));
  }, window.addEventListener("resize", Pt);
}
function Ol(t) {
  return ne.add(t), Pt || Il(), () => {
    ne.delete(t), !ne.size && typeof Pt == "function" && (window.removeEventListener("resize", Pt), Pt = void 0);
  };
}
function di(t, e) {
  return typeof t == "function" ? Ol(t) : Fl(t, e);
}
function jl(t) {
  return Fn(t) && t.tagName === "svg";
}
const Nl = [...ro, B, X], Ul = (t) => Nl.find(oo(t)), pi = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), St = () => ({
  x: pi(),
  y: pi()
}), mi = () => ({ min: 0, max: 0 }), F = () => ({
  x: mi(),
  y: mi()
}), Wl = /* @__PURE__ */ new WeakMap();
function we(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Ut(t) {
  return typeof t == "string" || Array.isArray(t);
}
const In = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], On = ["initial", ...In];
function be(t) {
  return we(t.animate) || On.some((e) => Ut(t[e]));
}
function mo(t) {
  return !!(be(t) || t.variants);
}
function $l(t, e, n) {
  for (const i in e) {
    const s = e[i], r = n[i];
    if (j(s))
      t.addValue(i, s);
    else if (j(r))
      t.addValue(i, Ct(s, { owner: t }));
    else if (r !== s)
      if (t.hasValue(i)) {
        const o = t.getValue(i);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = t.getStaticValue(i);
        t.addValue(i, Ct(o !== void 0 ? o : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const rn = { current: null }, go = { current: !1 }, zl = typeof window < "u";
function Kl() {
  if (go.current = !0, !!zl)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => rn.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      rn.current = !1;
}
const gi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let de = {};
function yo(t) {
  de = t;
}
function Hl() {
  return de;
}
class Gl {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, i) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: s, skipAnimations: r, blockInitialAnimation: o, visualState: a }, c = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Mn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const d = U.now();
      this.renderScheduledAt < d && (this.renderScheduledAt = d, E.render(this.render, !1, !0));
    };
    const { latestValues: u, renderState: l } = a;
    this.latestValues = u, this.baseTarget = { ...u }, this.initialValues = n.initial ? { ...u } : {}, this.renderState = l, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.skipAnimationsConfig = r, this.options = c, this.blockInitialAnimation = !!o, this.isControllingVariants = be(n), this.isVariantNode = mo(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: h, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in f) {
      const p = f[d];
      u[d] !== void 0 && j(p) && p.set(u[d]);
    }
  }
  mount(e) {
    if (this.hasBeenMounted)
      for (const n in this.initialValues)
        this.values.get(n)?.jump(this.initialValues[n]), this.latestValues[n] = this.initialValues[n];
    this.current = e, Wl.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (go.current || Kl(), this.shouldReduceMotion = rn.current), process.env.NODE_ENV !== "production" && xn(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), lt(this.notifyUpdate), lt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, n) {
    if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), n.accelerate && Zs.has(e) && this.current instanceof HTMLElement) {
      const { factory: o, keyframes: a, times: c, ease: u, duration: l } = n.accelerate, h = new Xs({
        element: this.current,
        name: e,
        keyframes: a,
        times: c,
        ease: u,
        duration: /* @__PURE__ */ $(l)
      }), f = o(h);
      this.valueSubscriptions.set(e, () => {
        f(), h.cancel();
      });
      return;
    }
    const i = kt.has(e);
    i && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (o) => {
      this.latestValues[e] = o, this.props.onUpdate && E.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let r;
    typeof window < "u" && window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      s(), r && r();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in de) {
      const n = de[e];
      if (!n)
        continue;
      const { isEnabled: i, Feature: s } = n;
      if (!this.features[e] && s && i(this.props) && (this.features[e] = new s(this)), this.features[e]) {
        const r = this.features[e];
        r.isMounted ? r.update() : (r.mount(), r.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : F();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let i = 0; i < gi.length; i++) {
      const s = gi[i];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const r = "on" + s, o = e[r];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    this.prevMotionValues = $l(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const i = this.values.get(e);
    n !== i && (i && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let i = this.values.get(e);
    return i === void 0 && n !== void 0 && (i = Ct(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (ms(i) || ys(i)) ? i = parseFloat(i) : !Ul(i) && X.test(n) && (i = lo(e, n)), this.setBaseTarget(e, j(i) ? i.get() : i)), j(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    const { initial: n } = this.props;
    let i;
    if (typeof n == "string" || typeof n == "object") {
      const r = Rn(this.props, n, this.presenceContext?.custom);
      r && (i = r[e]);
    }
    if (n && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !j(s) ? s : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new vn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    Ln.render(this.render);
  }
}
class vo extends Gl {
  constructor() {
    super(...arguments), this.KeyframeResolver = Tl;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    const i = e.style;
    return i ? i[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: i }) {
    delete n[e], delete i[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    j(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class ct {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
function xo({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function _l({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Yl(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: i.y,
    right: i.x
  };
}
function Re(t) {
  return t === void 0 || t === 1;
}
function an({ scale: t, scaleX: e, scaleY: n }) {
  return !Re(t) || !Re(e) || !Re(n);
}
function ft(t) {
  return an(t) || To(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function To(t) {
  return yi(t.x) || yi(t.y);
}
function yi(t) {
  return t && t !== "0%";
}
function pe(t, e, n) {
  const i = t - n, s = e * i;
  return n + s;
}
function vi(t, e, n, i, s) {
  return s !== void 0 && (t = pe(t, s, i)), pe(t, n, i) + e;
}
function ln(t, e = 0, n = 1, i, s) {
  t.min = vi(t.min, e, n, i, s), t.max = vi(t.max, e, n, i, s);
}
function wo(t, { x: e, y: n }) {
  ln(t.x, e.translate, e.scale, e.originPoint), ln(t.y, n.translate, n.scale, n.originPoint);
}
const xi = 0.999999999999, Ti = 1.0000000000001;
function Xl(t, e, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let r, o;
  for (let a = 0; a < s; a++) {
    r = n[a], o = r.projectionDelta;
    const { visualElement: c } = r.options;
    c && c.props.style && c.props.style.display === "contents" || (i && r.options.layoutScroll && r.scroll && r !== r.root && (tt(t.x, -r.scroll.offset.x), tt(t.y, -r.scroll.offset.y)), o && (e.x *= o.x.scale, e.y *= o.y.scale, wo(t, o)), i && ft(r.latestValues) && ie(t, r.latestValues, r.layout?.layoutBox));
  }
  e.x < Ti && e.x > xi && (e.x = 1), e.y < Ti && e.y > xi && (e.y = 1);
}
function tt(t, e) {
  t.min += e, t.max += e;
}
function wi(t, e, n, i, s = 0.5) {
  const r = D(t.min, t.max, s);
  ln(t, e, n, r, i);
}
function bi(t, e) {
  return typeof t == "string" ? parseFloat(t) / 100 * (e.max - e.min) : t;
}
function ie(t, e, n) {
  const i = n ?? t;
  wi(t.x, bi(e.x, i.x), e.scaleX, e.scale, e.originX), wi(t.y, bi(e.y, i.y), e.scaleY, e.scale, e.originY);
}
function bo(t, e) {
  return xo(Yl(t.getBoundingClientRect(), e));
}
function ql(t, e, n) {
  const i = bo(t, n), { scroll: s } = e;
  return s && (tt(i.x, s.offset.x), tt(i.y, s.offset.y)), i;
}
const Zl = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Jl = Rt.length;
function Ql(t, e, n) {
  let i = "", s = !0;
  for (let o = 0; o < Jl; o++) {
    const a = Rt[o], c = t[a];
    if (c === void 0)
      continue;
    let u = !0;
    if (typeof c == "number")
      u = c === (a.startsWith("scale") ? 1 : 0);
    else {
      const l = parseFloat(c);
      u = a.startsWith("scale") ? l === 1 : l === 0;
    }
    if (!u || n) {
      const l = on(c, fe[a]);
      if (!u) {
        s = !1;
        const h = Zl[a] || a;
        i += `${h}(${l}) `;
      }
      n && (e[a] = l);
    }
  }
  const r = t.pathRotation;
  return r && (s = !1, i += `rotate(${on(r, fe.pathRotation)}) `), i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function jn(t, e, n) {
  const { style: i, vars: s, transformOrigin: r } = t;
  let o = !1, a = !1;
  for (const c in e) {
    const u = e[c];
    if (kt.has(c)) {
      o = !0;
      continue;
    } else if (ks(c)) {
      s[c] = u;
      continue;
    } else {
      const l = on(u, fe[c]);
      c.startsWith("origin") ? (a = !0, r[c] = l) : i[c] = l;
    }
  }
  if (e.transform || (o || n ? i.transform = Ql(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: c = "50%", originY: u = "50%", originZ: l = 0 } = r;
    i.transformOrigin = `${c} ${u} ${l}`;
  }
}
function Po(t, { style: e, vars: n }, i, s) {
  const r = t.style;
  let o;
  for (o in e)
    r[o] = e[o];
  s?.applyProjectionStyles(r, i);
  for (o in n)
    r.setProperty(o, n[o]);
}
function Pi(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Lt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (w.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Pi(t, e.target.x), i = Pi(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, tc = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, s = X.parse(t);
    if (s.length > 5)
      return i;
    const r = X.createTransformer(t), o = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * e.x, c = n.y.scale * e.y;
    s[0 + o] /= a, s[1 + o] /= c;
    const u = D(a, c, 0.5);
    return typeof s[2 + o] == "number" && (s[2 + o] /= u), typeof s[3 + o] == "number" && (s[3 + o] /= u), r(s);
  }
}, cn = {
  borderRadius: {
    ...Lt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Lt,
  borderTopRightRadius: Lt,
  borderBottomLeftRadius: Lt,
  borderBottomRightRadius: Lt,
  boxShadow: tc
};
function So(t, { layout: e, layoutId: n }) {
  return kt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!cn[t] || t === "opacity");
}
function Nn(t, e, n) {
  const i = t.style, s = e?.style, r = {};
  if (!i)
    return r;
  for (const o in i)
    (j(i[o]) || s && j(s[o]) || So(o, t) || n?.getValue(o)?.liveStyle !== void 0) && (r[o] = i[o]);
  return r;
}
function ec(t) {
  return window.getComputedStyle(t);
}
class nc extends vo {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Po;
  }
  readValueFromInstance(e, n) {
    if (kt.has(n))
      return this.projection?.isProjecting ? _e(n) : wa(e, n);
    {
      const i = ec(e), s = (ks(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return bo(e, n);
  }
  build(e, n, i) {
    jn(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Nn(e, n, i);
  }
}
const ic = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, sc = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function oc(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const r = s ? ic : sc;
  t[r.offset] = `${-i}`, t[r.array] = `${e} ${n}`;
}
const rc = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function Ao(t, {
  attrX: e,
  attrY: n,
  attrScale: i,
  pathLength: s,
  pathSpacing: r = 1,
  pathOffset: o = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, c, u, l) {
  if (jn(t, a, u), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: f } = t;
  h.transform && (f.transform = h.transform, delete h.transform), (f.transform || h.transformOrigin) && (f.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), f.transform && (f.transformBox = l?.transformBox ?? "fill-box", delete h.transformBox);
  for (const d of rc)
    h[d] !== void 0 && (f[d] = h[d], delete h[d]);
  e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), i !== void 0 && (h.scale = i), s !== void 0 && oc(h, s, r, o, !1);
}
const Co = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), Vo = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function ac(t, e, n, i) {
  Po(t, e, void 0, i);
  for (const s in e.attrs)
    t.setAttribute(Co.has(s) ? s : kn(s), e.attrs[s]);
}
function Mo(t, e, n) {
  const i = Nn(t, e, n);
  for (const s in t)
    if (j(t[s]) || j(e[s])) {
      const r = Rt.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[r] = t[s];
    }
  return i;
}
class lc extends vo {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = F;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (kt.has(n)) {
      const i = ao(n);
      return i && i.default || 0;
    }
    return n = Co.has(n) ? n : kn(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Mo(e, n, i);
  }
  build(e, n, i) {
    Ao(e, n, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(e, n, i, s) {
    ac(e, n, i, s);
  }
  mount(e) {
    this.isSVGTag = Vo(e.tagName), super.mount(e);
  }
}
const cc = On.length;
function Do(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Do(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < cc; n++) {
    const i = On[n], s = t.props[i];
    (Ut(s) || s === !1) && (e[i] = s);
  }
  return e;
}
function Eo(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let i = 0; i < n; i++)
    if (e[i] !== t[i])
      return !1;
  return !0;
}
const uc = [...In].reverse(), hc = In.length;
function fc(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => cl(t, n, i)));
}
function dc(t) {
  let e = fc(t), n = Si(), i = !0, s = !1;
  const r = (u) => (l, h) => {
    const f = yt(t, h, u === "exit" ? t.presenceContext?.custom : void 0);
    if (f) {
      const { transition: d, transitionEnd: p, ...g } = f;
      l = { ...l, ...g, ...p };
    }
    return l;
  };
  function o(u) {
    e = u(t);
  }
  function a(u) {
    const { props: l } = t, h = Do(t.parent) || {}, f = [], d = /* @__PURE__ */ new Set();
    let p = {}, g = 1 / 0;
    for (let y = 0; y < hc; y++) {
      const x = uc[y], v = n[x], T = l[x] !== void 0 ? l[x] : h[x], A = Ut(T), V = x === u ? v.isActive : null;
      V === !1 && (g = y);
      let b = T === h[x] && T !== l[x] && A;
      if (b && (i || s) && t.manuallyAnimateOnMount && (b = !1), v.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !v.isActive && V === null || // If we didn't and don't have any defined prop for this animation type
      !T && !v.prevProp || // Or if the prop doesn't define an animation
      we(T) || typeof T == "boolean")
        continue;
      if (x === "exit" && v.isActive && V !== !0) {
        v.prevResolvedValues && (p = {
          ...p,
          ...v.prevResolvedValues
        });
        continue;
      }
      const P = pc(v.prevProp, T);
      let C = P || // If we're making this variant active, we want to always make it active
      x === u && v.isActive && !b && A || // If we removed a higher-priority variant (i is in reverse order)
      y > g && A, S = !1;
      const M = Array.isArray(T) ? T : [T];
      let L = M.reduce(r(x), {});
      V === !1 && (L = {});
      const { prevResolvedValues: q = {} } = v, Z = {
        ...q,
        ...L
      }, it = (I) => {
        C = !0, d.has(I) && (S = !0, d.delete(I)), v.needsAnimating[I] = !0;
        const K = t.getValue(I);
        K && (K.liveStyle = !1);
      };
      for (const I in Z) {
        const K = L[I], ut = q[I];
        if (p.hasOwnProperty(I))
          continue;
        let xt = !1;
        Qe(K) && Qe(ut) ? xt = !Eo(K, ut) || P : xt = K !== ut, xt ? K != null ? it(I) : d.add(I) : K !== void 0 && d.has(I) ? it(I) : v.protectedKeys[I] = !0;
      }
      v.prevProp = T, v.prevResolvedValues = L, v.isActive && (p = { ...p, ...L }), (i || s) && t.blockInitialAnimation && (C = !1);
      const J = b && P;
      C && (!J || S) && f.push(...M.map((I) => {
        const K = { type: x };
        if (typeof I == "string" && (i || s) && !J && t.manuallyAnimateOnMount && t.parent) {
          const { parent: ut } = t, xt = yt(ut, I);
          if (ut.enteringChildren && xt) {
            const { delayChildren: tr } = xt.transition || {};
            K.delay = Js(ut.enteringChildren, t, tr);
          }
        }
        return {
          animation: I,
          options: K
        };
      }));
    }
    if (d.size) {
      const y = {};
      if (typeof l.initial != "boolean") {
        const x = yt(t, Array.isArray(l.initial) ? l.initial[0] : l.initial);
        x && x.transition && (y.transition = x.transition);
      }
      d.forEach((x) => {
        const v = t.getBaseTarget(x), T = t.getValue(x);
        T && (T.liveStyle = !0), y[x] = v ?? null;
      }), f.push({ animation: y });
    }
    let m = !!f.length;
    return i && (l.initial === !1 || l.initial === l.animate) && !t.manuallyAnimateOnMount && (m = !1), i = !1, s = !1, m ? e(f) : Promise.resolve();
  }
  function c(u, l) {
    if (n[u].isActive === l)
      return Promise.resolve();
    t.variantChildren?.forEach((f) => f.animationState?.setActive(u, l)), n[u].isActive = l;
    const h = a(u);
    for (const f in n)
      n[f].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: a,
    setActive: c,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Si(), s = !0;
    }
  };
}
function pc(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Eo(e, t) : !1;
}
function ht(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Si() {
  return {
    animate: ht(!0),
    whileInView: ht(),
    whileHover: ht(),
    whileTap: ht(),
    whileDrag: ht(),
    whileFocus: ht(),
    exit: ht()
  };
}
function un(t, e) {
  t.min = e.min, t.max = e.max;
}
function _(t, e) {
  un(t.x, e.x), un(t.y, e.y);
}
function Ai(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
const Ro = 1e-4, mc = 1 - Ro, gc = 1 + Ro, ko = 0.01, yc = 0 - ko, vc = 0 + ko;
function W(t) {
  return t.max - t.min;
}
function xc(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Ci(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = D(e.min, e.max, t.origin), t.scale = W(n) / W(e), t.translate = D(n.min, n.max, t.origin) - t.originPoint, (t.scale >= mc && t.scale <= gc || isNaN(t.scale)) && (t.scale = 1), (t.translate >= yc && t.translate <= vc || isNaN(t.translate)) && (t.translate = 0);
}
function It(t, e, n, i) {
  Ci(t.x, e.x, n.x, i ? i.originX : void 0), Ci(t.y, e.y, n.y, i ? i.originY : void 0);
}
function Vi(t, e, n, i = 0) {
  const s = i ? D(n.min, n.max, i) : n.min;
  t.min = s + e.min, t.max = t.min + W(e);
}
function Tc(t, e, n, i) {
  Vi(t.x, e.x, n.x, i?.x), Vi(t.y, e.y, n.y, i?.y);
}
function Mi(t, e, n, i = 0) {
  const s = i ? D(n.min, n.max, i) : n.min;
  t.min = e.min - s, t.max = t.min + W(e);
}
function me(t, e, n, i) {
  Mi(t.x, e.x, n.x, i?.x), Mi(t.y, e.y, n.y, i?.y);
}
function Di(t, e, n, i, s) {
  return t -= e, t = pe(t, 1 / n, i), s !== void 0 && (t = pe(t, 1 / s, i)), t;
}
function wc(t, e = 0, n = 1, i = 0.5, s, r = t, o = t) {
  if (et.test(e) && (e = parseFloat(e), e = D(o.min, o.max, e / 100) - o.min), typeof e != "number")
    return;
  let a = D(r.min, r.max, i);
  t === r && (a -= e), t.min = Di(t.min, e, n, a, s), t.max = Di(t.max, e, n, a, s);
}
function Ei(t, e, [n, i, s], r, o) {
  wc(t, e[n], e[i], e[s], e.scale, r, o);
}
const bc = ["x", "scaleX", "originX"], Pc = ["y", "scaleY", "originY"];
function Ri(t, e, n, i) {
  Ei(t.x, e, bc, n ? n.x : void 0, i ? i.x : void 0), Ei(t.y, e, Pc, n ? n.y : void 0, i ? i.y : void 0);
}
function ki(t) {
  return t.translate === 0 && t.scale === 1;
}
function Lo(t) {
  return ki(t.x) && ki(t.y);
}
function Li(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Sc(t, e) {
  return Li(t.x, e.x) && Li(t.y, e.y);
}
function Bi(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Bo(t, e) {
  return Bi(t.x, e.x) && Bi(t.y, e.y);
}
function Fi(t) {
  return W(t.x) / W(t.y);
}
function Ii(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
function Q(t) {
  return [t("x"), t("y")];
}
function Ac(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x, r = t.y.translate / e.y, o = n?.z || 0;
  if ((s || r || o) && (i = `translate3d(${s}px, ${r}px, ${o}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: l, pathRotation: h, rotateX: f, rotateY: d, skewX: p, skewY: g } = n;
    u && (i = `perspective(${u}px) ${i}`), l && (i += `rotate(${l}deg) `), h && (i += `rotate(${h}deg) `), f && (i += `rotateX(${f}deg) `), d && (i += `rotateY(${d}deg) `), p && (i += `skewX(${p}deg) `), g && (i += `skewY(${g}deg) `);
  }
  const a = t.x.scale * e.x, c = t.y.scale * e.y;
  return (a !== 1 || c !== 1) && (i += `scale(${a}, ${c})`), i || "none";
}
const Fo = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
], Cc = Fo.length, Oi = (t) => typeof t == "string" ? parseFloat(t) : t, ji = (t) => typeof t == "number" || w.test(t);
function Vc(t, e, n, i, s, r) {
  s ? (t.opacity = D(0, n.opacity ?? 1, Mc(i)), t.opacityExit = D(e.opacity ?? 1, 0, Dc(i))) : r && (t.opacity = D(e.opacity ?? 1, n.opacity ?? 1, i));
  for (let o = 0; o < Cc; o++) {
    const a = Fo[o];
    let c = Ni(e, a), u = Ni(n, a);
    if (c === void 0 && u === void 0)
      continue;
    c || (c = 0), u || (u = 0), c === 0 || u === 0 || ji(c) === ji(u) ? (t[a] = Math.max(D(Oi(c), Oi(u), i), 0), (et.test(u) || et.test(c)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = D(e.rotate || 0, n.rotate || 0, i));
}
function Ni(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Mc = /* @__PURE__ */ Io(0, 0.5, Cs), Dc = /* @__PURE__ */ Io(0.5, 0.95, G);
function Io(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ jt(t, e, i));
}
function Ec(t, e, n) {
  const i = j(t) ? t : Ct(t);
  return i.start(En("", i, e, n)), i.animation;
}
function Wt(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
const Rc = (t, e) => t.depth - e.depth;
class kc {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    yn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    ae(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Rc), this.isDirty = !1, this.children.forEach(e);
  }
}
function Lc(t, e) {
  const n = U.now(), i = ({ timestamp: s }) => {
    const r = s - n;
    r >= e && (lt(i), t(r - e));
  };
  return E.setup(i, !0), () => lt(i);
}
function se(t) {
  return j(t) ? t.get() : t;
}
class Bc {
  constructor() {
    this.members = [];
  }
  add(e) {
    yn(this.members, e);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const i = this.members[n];
      if (i === e || i === this.lead || i === this.prevLead)
        continue;
      const s = i.instance;
      (!s || s.isConnected === !1) && !i.snapshot && (ae(this.members, i), i.unmount());
    }
    e.scheduleRender();
  }
  remove(e) {
    if (ae(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    for (let n = this.members.indexOf(e) - 1; n >= 0; n--) {
      const i = this.members[n];
      if (i.isPresent !== !1 && i.instance?.isConnected !== !1)
        return this.promote(i), !0;
    }
    return !1;
  }
  promote(e, n) {
    const i = this.lead;
    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
      i.updateSnapshot(), e.scheduleRender();
      const { layoutDependency: s } = i.options, { layoutDependency: r } = e.options;
      (s === void 0 || s !== r) && (e.resumeFrom = i, n && (i.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root?.isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => e.instance && e.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const oe = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, ke = ["", "X", "Y", "Z"], Fc = 1e3;
let Ic = 0;
function Le(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function Oo(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = io(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: r } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", E, !(s || r));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && Oo(i);
}
function jo({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(o = {}, a = e?.()) {
      this.id = Ic++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Nc), this.nodes.forEach(Hc), this.nodes.forEach(Gc), this.nodes.forEach(Uc);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new kc());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new vn()), this.eventHandlers.get(o).add(a);
    }
    notifyListeners(o, ...a) {
      const c = this.eventHandlers.get(o);
      c && c.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    /**
     * Lifecycles
     */
    mount(o) {
      if (this.instance)
        return;
      this.isSVG = Fn(o) && !jl(o), this.instance = o;
      const { layoutId: a, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (c || a) && (this.isLayoutDirty = !0), t) {
        let l, h = 0;
        const f = () => this.root.updateBlockedByResize = !1;
        E.read(() => {
          h = window.innerWidth;
        }), t(o, () => {
          const d = window.innerWidth;
          d !== h && (h = d, this.root.updateBlockedByResize = !0, l && l(), l = Lc(f, 250), oe.hasAnimatedSinceResize && (oe.hasAnimatedSinceResize = !1, this.nodes.forEach($i)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || c) && this.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: h, hasRelativeLayoutChanged: f, layout: d }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || u.getDefaultTransition() || Zc, { onLayoutAnimationStart: g, onLayoutAnimationComplete: m } = u.getProps(), y = !this.targetLayout || !Bo(this.targetLayout, d), x = !h && f;
        if (this.options.layoutRoot || this.resumeFrom || x || h && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const v = {
            ...Dn(p, "layout"),
            onPlay: g,
            onComplete: m
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (v.delay = 0, v.type = !1), this.startAnimation(v), this.setAnimationOrigin(l, x, v.path);
        } else
          h || $i(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = d;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), lt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(_c), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Oo(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let l = 0; l < this.path.length; l++) {
        const h = this.path[l];
        h.shouldResetTransform = !0, (typeof h.latestValues.x == "string" || typeof h.latestValues.y == "string") && (h.isLayoutDirty = !0), h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: c } = this.options;
      if (a === void 0 && !c)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const c = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), c && this.nodes.forEach($c), this.nodes.forEach(Ui);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Wi);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(zc), this.nodes.forEach(Kc), this.nodes.forEach(Oc), this.nodes.forEach(jc)) : this.nodes.forEach(Wi), this.clearAllSnapshots();
      const a = U.now();
      O.delta = nt(0, 1e3 / 60, a - O.timestamp), O.timestamp = a, O.isProcessing = !0, Se.update.process(O), Se.preRender.process(O), Se.render.process(O), O.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ln.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Wc), this.sharedNodes.forEach(Yc);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, E.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      E.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !W(this.snapshot.measuredBox.x) && !W(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = F()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a && this.instance) {
        const c = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Lo(this.projectionDelta), c = this.getTransformTemplate(), u = c ? c(this.latestValues, "") : void 0, l = u !== this.prevTransformTemplateValue;
      o && this.instance && (a || ft(this.latestValues) || l) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return o && (c = this.removeTransform(c)), Jc(c), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o)
        return F();
      const a = o.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Qc))) {
        const { scroll: u } = this.root;
        u && (tt(a.x, u.offset.x), tt(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      const a = F();
      if (_(a, o), this.scroll?.wasRoot)
        return a;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: l, options: h } = u;
        u !== this.root && l && h.layoutScroll && (l.wasRoot && _(a, o), tt(a.x, l.offset.x), tt(a.y, l.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1, c) {
      const u = c || F();
      _(u, o);
      for (let l = 0; l < this.path.length; l++) {
        const h = this.path[l];
        !a && h.options.layoutScroll && h.scroll && h !== h.root && (tt(u.x, -h.scroll.offset.x), tt(u.y, -h.scroll.offset.y)), ft(h.latestValues) && ie(u, h.latestValues, h.layout?.layoutBox);
      }
      return ft(this.latestValues) && ie(u, this.latestValues, this.layout?.layoutBox), u;
    }
    removeTransform(o) {
      const a = F();
      _(a, o);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!ft(u.latestValues))
          continue;
        let l;
        u.instance && (an(u.latestValues) && u.updateSnapshot(), l = F(), _(l, u.measurePageBox())), Ri(a, u.latestValues, u.snapshot?.layoutBox, l);
      }
      return ft(this.latestValues) && Ri(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== O.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== a;
      if (!(o || c && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: l, layoutId: h } = this.options;
      if (!this.layout || !(l || h))
        return;
      this.resolvedRelativeTargetAt = O.timestamp;
      const f = this.getClosestProjectingParent();
      f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = F(), this.targetWithTransforms = F()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Tc(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : _(this.target, this.layout.layoutBox), wo(this.target, this.targetDelta)) : _(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || an(this.parent.latestValues) || To(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(o, a, c) {
      this.relativeParent = o, this.linkedParentVersion = o.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = F(), this.relativeTargetOrigin = F(), me(this.relativeTargetOrigin, a, c, this.options.layoutAnchor || void 0), _(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const o = this.getLead(), a = !!this.resumingFrom || this !== o;
      let c = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (c = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === O.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: l } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || l))
        return;
      _(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, f = this.treeScale.y;
      Xl(this.layoutCorrected, this.treeScale, this.path, a), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = F());
      const { target: d } = o;
      if (!d) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ai(this.prevProjectionDelta.x, this.projectionDelta.x), Ai(this.prevProjectionDelta.y, this.projectionDelta.y)), It(this.projectionDelta, this.layoutCorrected, d, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== f || !Ii(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ii(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", d));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if (this.options.visualElement?.scheduleRender(), o) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = St(), this.projectionDelta = St(), this.projectionDeltaWithTransform = St();
    }
    setAnimationOrigin(o, a = !1, c) {
      const u = this.snapshot, l = u ? u.latestValues : {}, h = { ...this.latestValues }, f = St();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = F(), p = u ? u.source : void 0, g = this.layout ? this.layout.source : void 0, m = p !== g, y = this.getStack(), x = !y || y.members.length <= 1, v = !!(m && !x && this.options.crossfade === !0 && !this.path.some(qc));
      this.animationProgress = 0;
      let T;
      const A = c?.interpolateProjection(o);
      this.mixTargetDelta = (V) => {
        const b = V / 1e3, P = A?.(b);
        P ? (f.x.translate = P.x, f.x.scale = D(o.x.scale, 1, b), f.x.origin = o.x.origin, f.x.originPoint = o.x.originPoint, f.y.translate = P.y, f.y.scale = D(o.y.scale, 1, b), f.y.origin = o.y.origin, f.y.originPoint = o.y.originPoint) : (zi(f.x, o.x, b), zi(f.y, o.y, b)), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (me(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), Xc(this.relativeTarget, this.relativeTargetOrigin, d, b), T && Sc(this.relativeTarget, T) && (this.isProjectionDirty = !1), T || (T = F()), _(T, this.relativeTarget)), m && (this.animationValues = h, Vc(h, l, this.latestValues, b, v, x)), P && P.rotate !== void 0 && (this.animationValues || (this.animationValues = h), this.animationValues.pathRotation = P.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (lt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = E.update(() => {
        oe.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Ct(0)), this.motionValue.jump(0, !1), this.currentAnimation = Ec(this.motionValue, [0, 1e3], {
          ...o,
          velocity: 0,
          isSync: !0,
          onUpdate: (a) => {
            this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Fc), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: c, layout: u, latestValues: l } = o;
      if (!(!a || !c || !u)) {
        if (this !== o && this.layout && u && No(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          c = this.target || F();
          const h = W(this.layout.layoutBox.x);
          c.x.min = o.target.x.min, c.x.max = c.x.min + h;
          const f = W(this.layout.layoutBox.y);
          c.y.min = o.target.y.min, c.y.max = c.y.min + f;
        }
        _(a, c), ie(a, l), It(this.projectionDeltaWithTransform, this.layoutCorrected, a, l);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Bc()), this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      const { layoutId: o } = this.options;
      return o ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: o } = this.options;
      return o ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o)
        return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: c } = {}) {
      const u = this.getStack();
      u && u.promote(this, c), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o)
        return;
      let a = !1;
      const { latestValues: c } = o;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (a = !0), !a)
        return;
      const u = {};
      c.z && Le("z", o, u, this.animationValues);
      for (let l = 0; l < ke.length; l++)
        Le(`rotate${ke[l]}`, o, u, this.animationValues), Le(`skew${ke[l]}`, o, u, this.animationValues);
      o.render();
      for (const l in u)
        o.setStaticValue(l, u[l]), this.animationValues && (this.animationValues[l] = u[l]);
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const c = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, o.visibility = "", o.opacity = "", o.pointerEvents = se(a?.pointerEvents) || "", o.transform = c ? c(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = se(a?.pointerEvents) || ""), this.hasProjected && !ft(this.latestValues) && (o.transform = c ? c({}, "") : "none", this.hasProjected = !1);
        return;
      }
      o.visibility = "";
      const l = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let h = Ac(this.projectionDeltaWithTransform, this.treeScale, l);
      c && (h = c(l, h)), o.transform = h;
      const { x: f, y: d } = this.projectionDelta;
      o.transformOrigin = `${f.origin * 100}% ${d.origin * 100}% 0`, u.animationValues ? o.opacity = u === this ? l.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : l.opacityExit : o.opacity = u === this ? l.opacity !== void 0 ? l.opacity : "" : l.opacityExit !== void 0 ? l.opacityExit : 0;
      for (const p in cn) {
        if (l[p] === void 0)
          continue;
        const { correct: g, applyTo: m, isCSSVariable: y } = cn[p], x = h === "none" ? l[p] : g(l[p], u);
        if (m) {
          const v = m.length;
          for (let T = 0; T < v; T++)
            o[m[T]] = x;
        } else
          y ? this.options.visualElement.renderState.vars[p] = x : o[p] = x;
      }
      this.options.layoutId && (o.pointerEvents = u === this ? se(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => o.currentAnimation?.stop()), this.root.nodes.forEach(Ui), this.root.sharedNodes.clear();
    }
  };
}
function Oc(t) {
  t.updateLayout();
}
function jc(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: i } = t.layout, { animationType: s } = t.options, r = e.source !== t.layout.source;
    if (s === "size")
      Q((l) => {
        const h = r ? e.measuredBox[l] : e.layoutBox[l], f = W(h);
        h.min = n[l].min, h.max = h.min + f;
      });
    else if (s === "x" || s === "y") {
      const l = s === "x" ? "y" : "x";
      un(r ? e.measuredBox[l] : e.layoutBox[l], n[l]);
    } else No(s, e.layoutBox, n) && Q((l) => {
      const h = r ? e.measuredBox[l] : e.layoutBox[l], f = W(n[l]);
      h.max = h.min + f, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[l].max = t.relativeTarget[l].min + f);
    });
    const o = St();
    It(o, n, e.layoutBox);
    const a = St();
    r ? It(a, t.applyTransform(i, !0), e.measuredBox) : It(a, n, e.layoutBox);
    const c = !Lo(o);
    let u = !1;
    if (!t.resumeFrom) {
      const l = t.getClosestProjectingParent();
      if (l && !l.resumeFrom) {
        const { snapshot: h, layout: f } = l;
        if (h && f) {
          const d = t.options.layoutAnchor || void 0, p = F();
          me(p, e.layoutBox, h.layoutBox, d);
          const g = F();
          me(g, n, f.layoutBox, d), Bo(p, g) || (u = !0), l.options.layoutRoot && (t.relativeTarget = g, t.relativeTargetOrigin = p, t.relativeParent = l);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: n,
      snapshot: e,
      delta: a,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: u
    });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function Nc(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Uc(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Wc(t) {
  t.clearSnapshot();
}
function Ui(t) {
  t.clearMeasurements();
}
function $c(t) {
  t.isLayoutDirty = !0, t.updateLayout();
}
function Wi(t) {
  t.isLayoutDirty = !1;
}
function zc(t) {
  t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout, t.isLayoutDirty = !0);
}
function Kc(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function $i(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function Hc(t) {
  t.resolveTargetDelta();
}
function Gc(t) {
  t.calcProjection();
}
function _c(t) {
  t.resetSkewAndRotation();
}
function Yc(t) {
  t.removeLeadSnapshot();
}
function zi(t, e, n) {
  t.translate = D(e.translate, 0, n), t.scale = D(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Ki(t, e, n, i) {
  t.min = D(e.min, n.min, i), t.max = D(e.max, n.max, i);
}
function Xc(t, e, n, i) {
  Ki(t.x, e.x, n.x, i), Ki(t.y, e.y, n.y, i);
}
function qc(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Zc = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Hi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Gi = Hi("applewebkit/") && !Hi("chrome/") ? Math.round : G;
function _i(t) {
  t.min = Gi(t.min), t.max = Gi(t.max);
}
function Jc(t) {
  _i(t.x), _i(t.y);
}
function No(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !xc(Fi(e), Fi(n), 0.2);
}
function Qc(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const tu = jo({
  attachResizeListener: (t, e) => Wt(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), Be = {
  current: void 0
}, Uo = jo({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Be.current) {
      const t = new tu({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Be.current = t;
    }
    return Be.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Un = Vt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function Yi(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function eu(...t) {
  return (e) => {
    let n = !1;
    const i = t.map((s) => {
      const r = Yi(s, e);
      return !n && typeof r == "function" && (n = !0), r;
    });
    if (n)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const r = i[s];
          typeof r == "function" ? r() : Yi(t[s], null);
        }
      };
  };
}
function nu(...t) {
  return ye.useCallback(eu(...t), t);
}
class iu extends ye.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (Jt(n) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const i = n.offsetParent, s = Jt(i) && i.offsetWidth || 0, r = Jt(i) && i.offsetHeight || 0, o = getComputedStyle(n), a = this.props.sizeRef.current;
      a.height = parseFloat(o.height), a.width = parseFloat(o.width), a.top = n.offsetTop, a.left = n.offsetLeft, a.right = s - a.width - a.left, a.bottom = r - a.height - a.top, a.direction = o.direction;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function su({ children: t, isPresent: e, anchorX: n, anchorY: i, root: s, pop: r }) {
  const o = dn(), a = z(null), c = z({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: u } = N(Un), l = t.props?.ref ?? t?.ref, h = nu(a, l);
  return pn(() => {
    const { width: f, height: d, top: p, left: g, right: m, bottom: y, direction: x } = c.current;
    if (e || r === !1 || !a.current || !f || !d)
      return;
    const v = x === "rtl", T = n === "left" ? v ? `right: ${m}` : `left: ${g}` : v ? `left: ${g}` : `right: ${m}`, A = i === "bottom" ? `bottom: ${y}` : `top: ${p}`;
    a.current.dataset.motionPopId = o;
    const V = document.createElement("style");
    u && (V.nonce = u);
    const b = s ?? document.head;
    return b.appendChild(V), V.sheet && V.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${d}px !important;
            ${T}px !important;
            ${A}px !important;
          }
        `), () => {
      a.current?.removeAttribute("data-motion-pop-id"), b.contains(V) && b.removeChild(V);
    };
  }, [e]), k(iu, { isPresent: e, childRef: a, sizeRef: c, pop: r, children: r === !1 ? t : ye.cloneElement(t, { ref: h }) });
}
const ou = ({ children: t, initial: e, isPresent: n, onExitComplete: i, custom: s, presenceAffectsLayout: r, mode: o, anchorX: a, anchorY: c, root: u }) => {
  const l = gn(ru), h = dn();
  let f = !0, d = vt(() => (f = !1, {
    id: h,
    initial: e,
    isPresent: n,
    custom: s,
    onExitComplete: (p) => {
      l.set(p, !0);
      for (const g of l.values())
        if (!g)
          return;
      i && i();
    },
    register: (p) => (l.set(p, !1), () => l.delete(p))
  }), [n, l, i]);
  return r && f && (d = { ...d }), vt(() => {
    l.forEach((p, g) => l.set(g, !1));
  }, [n]), ye.useEffect(() => {
    !n && !l.size && i && i();
  }, [n]), t = k(su, { pop: o === "popLayout", isPresent: n, anchorX: a, anchorY: c, root: u, children: t }), k(xe.Provider, { value: d, children: t });
};
function ru() {
  return /* @__PURE__ */ new Map();
}
function Wo(t = !0) {
  const e = N(xe);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, r = dn();
  ve(() => {
    if (t)
      return s(r);
  }, [t]);
  const o = hs(() => t && i && i(r), [r, i, t]);
  return !n && i ? [!1, o] : [!0];
}
const Yt = (t) => t.key || "";
function Xi(t) {
  const e = [];
  return nr.forEach(t, (n) => {
    ir(n) && e.push(n);
  }), e;
}
const Ah = ({ children: t, custom: e, initial: n = !0, onExitComplete: i, presenceAffectsLayout: s = !0, mode: r = "sync", propagate: o = !1, anchorX: a = "left", anchorY: c = "top", root: u }) => {
  const [l, h] = Wo(o), f = vt(() => Xi(t), [t]), d = o && !l ? [] : f.map(Yt), p = z(!0), g = z(f), m = gn(() => /* @__PURE__ */ new Map()), y = z(/* @__PURE__ */ new Set()), [x, v] = re(f), [T, A] = re(f);
  ps(() => {
    p.current = !1, g.current = f;
    for (let P = 0; P < T.length; P++) {
      const C = Yt(T[P]);
      d.includes(C) ? (m.delete(C), y.current.delete(C)) : m.get(C) !== !0 && m.set(C, !1);
    }
  }, [T, d.length, d.join("-")]);
  const V = [];
  if (f !== x) {
    let P = [...f];
    for (let C = 0; C < T.length; C++) {
      const S = T[C], M = Yt(S);
      d.includes(M) || (P.splice(C, 0, S), V.push(S));
    }
    return r === "wait" && V.length && (P = V), A(Xi(P)), v(f), null;
  }
  process.env.NODE_ENV !== "production" && r === "wait" && T.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: b } = N(mn);
  return k(us, { children: T.map((P) => {
    const C = Yt(P), S = o && !l ? !1 : f === T || d.includes(C), M = () => {
      if (y.current.has(C))
        return;
      if (m.has(C))
        y.current.add(C), m.set(C, !0);
      else
        return;
      let L = !0;
      m.forEach((q) => {
        q || (L = !1);
      }), L && (b?.(), A(g.current), o && h?.(), i && i());
    };
    return k(ou, { isPresent: S, initial: !p.current || n ? void 0 : !1, custom: e, presenceAffectsLayout: s, mode: r, root: u, onExitComplete: S ? void 0 : M, anchorX: a, anchorY: c, children: P }, C);
  }) });
}, $o = Vt({ strict: !1 }), qi = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let Zi = !1;
function au() {
  if (Zi)
    return;
  const t = {};
  for (const e in qi)
    t[e] = {
      isEnabled: (n) => qi[e].some((i) => !!n[i])
    };
  yo(t), Zi = !0;
}
function zo() {
  return au(), Hl();
}
function lu(t) {
  const e = zo();
  for (const n in t)
    e[n] = {
      ...e[n],
      ...t[n]
    };
  yo(e);
}
const cu = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function ge(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || cu.has(t);
}
let Ko = (t) => !ge(t);
function uu(t) {
  typeof t == "function" && (Ko = (e) => e.startsWith("on") ? !ge(e) : t(e));
}
try {
  uu(require("@emotion/is-prop-valid").default);
} catch {
}
function hu(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || j(t[s]) || (Ko(s) || n === !0 && ge(s) || !e && !ge(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
const Pe = /* @__PURE__ */ Vt({});
function fu(t, e) {
  if (be(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || Ut(n) ? n : void 0,
      animate: Ut(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function du(t) {
  const { initial: e, animate: n } = fu(t, N(Pe));
  return vt(() => ({ initial: e, animate: n }), [Ji(e), Ji(n)]);
}
function Ji(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Wn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Ho(t, e, n) {
  for (const i in e)
    !j(e[i]) && !So(i, n) && (t[i] = e[i]);
}
function pu({ transformTemplate: t }, e) {
  return vt(() => {
    const n = Wn();
    return jn(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function mu(t, e) {
  const n = t.style || {}, i = {};
  return Ho(i, n, t), Object.assign(i, pu(t, e)), i;
}
function gu(t, e) {
  const n = {}, i = mu(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
const Go = () => ({
  ...Wn(),
  attrs: {}
});
function yu(t, e, n, i) {
  const s = vt(() => {
    const r = Go();
    return Ao(r, e, Vo(i), t.transformTemplate, t.style), {
      ...r.attrs,
      style: { ...r.style }
    };
  }, [e]);
  if (t.style) {
    const r = {};
    Ho(r, t.style, t), s.style = { ...r, ...s.style };
  }
  return s;
}
const vu = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function $n(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(vu.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function xu(t, e, n, { latestValues: i }, s, r = !1, o) {
  const c = (o ?? $n(t) ? yu : gu)(e, i, s, t), u = hu(e, typeof t == "string", r), l = t !== fs ? { ...u, ...c, ref: n } : {}, { children: h } = e, f = vt(() => j(h) ? h.get() : h, [h]);
  return sr(t, {
    ...l,
    children: f
  });
}
function Tu({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, i, s) {
  return {
    latestValues: wu(n, i, s, t),
    renderState: e()
  };
}
function wu(t, e, n, i) {
  const s = {}, r = i(t, {});
  for (const f in r)
    s[f] = se(r[f]);
  let { initial: o, animate: a } = t;
  const c = be(t), u = mo(t);
  e && u && !c && t.inherit !== !1 && (o === void 0 && (o = e.initial), a === void 0 && (a = e.animate));
  let l = n ? n.initial === !1 : !1;
  l = l || o === !1;
  const h = l ? a : o;
  if (h && typeof h != "boolean" && !we(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let d = 0; d < f.length; d++) {
      const p = Rn(t, f[d]);
      if (p) {
        const { transitionEnd: g, transition: m, ...y } = p;
        for (const x in y) {
          let v = y[x];
          if (Array.isArray(v)) {
            const T = l ? v.length - 1 : 0;
            v = v[T];
          }
          v !== null && (s[x] = v);
        }
        for (const x in g)
          s[x] = g[x];
      }
    }
  }
  return s;
}
const _o = (t) => (e, n) => {
  const i = N(Pe), s = N(xe), r = () => Tu(t, e, i, s);
  return n ? r() : gn(r);
}, bu = /* @__PURE__ */ _o({
  scrapeMotionValuesFromProps: Nn,
  createRenderState: Wn
}), Pu = /* @__PURE__ */ _o({
  scrapeMotionValuesFromProps: Mo,
  createRenderState: Go
}), Su = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function Au(t, e, n) {
  const i = z(n);
  pn(() => {
    i.current = n;
  });
  const s = z(null);
  return hs((r) => {
    r && t.onMount?.(r), e && (r ? e.mount(r) : e.unmount());
    const o = i.current;
    if (typeof o == "function")
      if (r) {
        const a = o(r);
        typeof a == "function" && (s.current = a);
      } else s.current ? (s.current(), s.current = null) : o(r);
    else o && (o.current = r);
  }, [e]);
}
const Yo = Vt({});
function Tt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Cu(t, e, n, i, s, r) {
  const { visualElement: o } = N(Pe), a = N($o), c = N(xe), u = N(Un), l = u.reducedMotion, h = u.skipAnimations, f = z(null), d = z(!1);
  i = i || a.renderer, !f.current && i && (f.current = i(t, {
    visualState: e,
    parent: o,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: l,
    skipAnimations: h,
    isSVG: r
  }), d.current && f.current && (f.current.manuallyAnimateOnMount = !0));
  const p = f.current, g = N(Yo);
  p && !p.projection && s && (p.type === "html" || p.type === "svg") && Vu(f.current, n, s, g);
  const m = z(!1);
  pn(() => {
    p && m.current && p.update(n, c);
  });
  const y = n[no], x = z(!!y && typeof window < "u" && !window.MotionHandoffIsComplete?.(y) && window.MotionHasOptimisedAnimation?.(y));
  return ps(() => {
    d.current = !0, p && (m.current = !0, window.MotionIsMounted = !0, p.updateFeatures(), p.scheduleRenderMicrotask(), x.current && p.animationState && p.animationState.animateChanges());
  }), ve(() => {
    p && (!x.current && p.animationState && p.animationState.animateChanges(), x.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(y);
    }), x.current = !1), p.enteringChildren = void 0);
  }), p;
}
function Vu(t, e, n, i) {
  const { layoutId: s, layout: r, drag: o, dragConstraints: a, layoutScroll: c, layoutRoot: u, layoutAnchor: l, layoutCrossfade: h } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Xo(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: r,
    alwaysMeasureLayout: !!o || a && Tt(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof r == "string" ? r : "both",
    initialPromotionConfig: i,
    crossfade: h,
    layoutScroll: c,
    layoutRoot: u,
    layoutAnchor: l
  });
}
function Xo(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Xo(t.parent);
}
function Fe(t, { forwardMotionProps: e = !1, type: n } = {}, i, s) {
  i && lu(i);
  const r = n ? n === "svg" : $n(t), o = r ? Pu : bu;
  function a(u, l) {
    let h;
    const f = {
      ...N(Un),
      ...u,
      layoutId: Mu(u)
    }, { isStatic: d } = f, p = du(u), g = o(u, d);
    if (!d && typeof window < "u") {
      Du(f, i);
      const m = Eu(f);
      h = m.MeasureLayout, p.visualElement = Cu(t, g, f, s, m.ProjectionNode, r);
    }
    return mt(Pe.Provider, { value: p, children: [h && p.visualElement ? k(h, { visualElement: p.visualElement, ...f }) : null, xu(t, u, Au(g, p.visualElement, l), g, d, e, r)] });
  }
  a.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const c = or(a);
  return c[Su] = t, c;
}
function Mu({ layoutId: t }) {
  const e = N(mn).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Du(t, e) {
  const n = N($o).strict;
  if (process.env.NODE_ENV !== "production" && e && n) {
    const i = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? Dt(!1, i, "lazy-strict-mode") : ot(!1, i, "lazy-strict-mode");
  }
}
function Eu(t) {
  const e = zo(), { drag: n, layout: i } = e;
  if (!n && !i)
    return {};
  const s = { ...n, ...i };
  return {
    MeasureLayout: n?.isEnabled(t) || i?.isEnabled(t) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
function Ru(t, e) {
  if (typeof Proxy > "u")
    return Fe;
  const n = /* @__PURE__ */ new Map(), i = (r, o) => Fe(r, o, t, e), s = (r, o) => (process.env.NODE_ENV !== "production" && xn(!1, "motion() is deprecated. Use motion.create() instead."), i(r, o));
  return new Proxy(s, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? i : (n.has(o) || n.set(o, Fe(o, void 0, t, e)), n.get(o))
  });
}
const ku = (t, e) => e.isSVG ?? $n(t) ? new lc(e) : new nc(e, {
  allowProjection: t !== fs
});
class Lu extends ct {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = dc(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    we(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let Bu = 0;
class Fu extends ct {
  constructor() {
    super(...arguments), this.id = Bu++, this.isExitComplete = !1;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i)
      return;
    if (e && i === !1) {
      if (this.isExitComplete) {
        const { initial: r, custom: o } = this.node.getProps();
        if (typeof r == "string" || typeof r == "object" && r !== null && !Array.isArray(r)) {
          const a = yt(this.node, r, o);
          if (a) {
            const { transition: c, transitionEnd: u, ...l } = a;
            for (const h in l)
              this.node.getValue(h)?.jump(l[h]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const s = this.node.animationState.setActive("exit", !e);
    n && !e && s.then(() => {
      this.isExitComplete = !0, n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const Iu = {
  animation: {
    Feature: Lu
  },
  exit: {
    Feature: Fu
  }
};
function Ht(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const Ou = (t) => (e) => Bn(e) && t(e, Ht(e));
function Ot(t, e, n, i) {
  return Wt(t, e, Ou(n), i);
}
const qo = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Qi = (t, e) => Math.abs(t - e);
function ju(t, e) {
  const n = Qi(t.x, e.x), i = Qi(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
const ts = /* @__PURE__ */ new Set(["auto", "scroll"]);
class Zo {
  constructor(e, n, { transformPagePoint: i, contextWindow: s = window, dragSnapToOrigin: r = !1, distanceThreshold: o = 3, element: a } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (d) => {
      this.handleScroll(d.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Xt(this.lastRawMoveEventInfo, this.transformPagePoint));
      const d = Ie(this.lastMoveEventInfo, this.history), p = this.startEvent !== null, g = ju(d.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!p && !g)
        return;
      const { point: m } = d, { timestamp: y } = O;
      this.history.push({ ...m, timestamp: y });
      const { onStart: x, onMove: v } = this.handlers;
      p || (x && x(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, p) => {
      this.lastMoveEvent = d, this.lastRawMoveEventInfo = p, this.lastMoveEventInfo = Xt(p, this.transformPagePoint), E.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, p) => {
      this.end();
      const { onEnd: g, onSessionEnd: m, resumeAnimation: y } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = Ie(d.type === "pointercancel" ? this.lastMoveEventInfo : Xt(p, this.transformPagePoint), this.history);
      this.startEvent && g && g(d, x), m && m(d, x);
    }, !Bn(e))
      return;
    this.dragSnapToOrigin = r, this.handlers = n, this.transformPagePoint = i, this.distanceThreshold = o, this.contextWindow = s || window;
    const c = Ht(e), u = Xt(c, this.transformPagePoint), { point: l } = u, { timestamp: h } = O;
    this.history = [{ ...l, timestamp: h }];
    const { onSessionStart: f } = n;
    f && f(e, Ie(u, this.history)), this.removeListeners = $t(Ot(this.contextWindow, "pointermove", this.handlePointerMove), Ot(this.contextWindow, "pointerup", this.handlePointerUp), Ot(this.contextWindow, "pointercancel", this.handlePointerUp)), a && this.startScrollTracking(a);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(e) {
    let n = e.parentElement;
    for (; n; ) {
      const i = getComputedStyle(n);
      (ts.has(i.overflowX) || ts.has(i.overflowY)) && this.scrollPositions.set(n, {
        x: n.scrollLeft,
        y: n.scrollTop
      }), n = n.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(e) {
    const n = this.scrollPositions.get(e);
    if (!n)
      return;
    const i = e === window, s = i ? { x: window.scrollX, y: window.scrollY } : {
      x: e.scrollLeft,
      y: e.scrollTop
    }, r = { x: s.x - n.x, y: s.y - n.y };
    r.x === 0 && r.y === 0 || (i ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += r.x, this.lastMoveEventInfo.point.y += r.y) : this.history.length > 0 && (this.history[0].x -= r.x, this.history[0].y -= r.y), this.scrollPositions.set(e, s), E.update(this.updatePoint, !0));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), lt(this.updatePoint);
  }
}
function Xt(t, e) {
  return e ? { point: e(t.point) } : t;
}
function es(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Ie({ point: t }, e) {
  return {
    point: t,
    delta: es(t, Jo(e)),
    offset: es(t, Nu(e)),
    velocity: Uu(e, 0.1)
  };
}
function Nu(t) {
  return t[0];
}
function Jo(t) {
  return t[t.length - 1];
}
function Uu(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const s = Jo(t);
  for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > /* @__PURE__ */ $(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  i === t[0] && t.length > 2 && s.timestamp - i.timestamp > /* @__PURE__ */ $(e) * 2 && (i = t[1]);
  const r = /* @__PURE__ */ H(s.timestamp - i.timestamp);
  if (r === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (s.x - i.x) / r,
    y: (s.y - i.y) / r
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Wu(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? D(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? D(n, t, i.max) : Math.min(t, n)), t;
}
function ns(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function $u(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: ns(t.x, n, s),
    y: ns(t.y, e, i)
  };
}
function is(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function zu(t, e) {
  return {
    x: is(t.x, e.x),
    y: is(t.y, e.y)
  };
}
function Ku(t, e) {
  let n = 0.5;
  const i = W(t), s = W(e);
  return s > i ? n = /* @__PURE__ */ jt(e.min, e.max - i, t.min) : i > s && (n = /* @__PURE__ */ jt(t.min, t.max - s, e.min)), nt(0, 1, n);
}
function Hu(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const hn = 0.35;
function Gu(t = hn) {
  return t === !1 ? t = 0 : t === !0 && (t = hn), {
    x: ss(t, "left", "right"),
    y: ss(t, "top", "bottom")
  };
}
function ss(t, e, n) {
  return {
    min: os(t, e),
    max: os(t, n)
  };
}
function os(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const _u = /* @__PURE__ */ new WeakMap();
class Yu {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = F(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: i } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const r = (h) => {
      n && this.snapToCursor(Ht(h).point), this.stopAnimation();
    }, o = (h, f) => {
      const { drag: d, dragPropagation: p, onDragStart: g } = this.getProps();
      if (d && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = wl(d), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = f, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Q((y) => {
        let x = this.getAxisMotionValue(y).get() || 0;
        if (et.test(x)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const T = v.layout.layoutBox[y];
            T && (x = W(T) * (parseFloat(x) / 100));
          }
        }
        this.originPoint[y] = x;
      }), g && E.update(() => g(h, f), !1, !0), tn(this.visualElement, "transform");
      const { animationState: m } = this.visualElement;
      m && m.setActive("whileDrag", !0);
    }, a = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f;
      const { dragPropagation: d, dragDirectionLock: p, onDirectionLock: g, onDrag: m } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: y } = f;
      if (p && this.currentDirection === null) {
        this.currentDirection = qu(y), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, y), this.updateAxis("y", f.point, y), this.visualElement.render(), m && E.update(() => m(h, f), !1, !0);
    }, c = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f, this.stop(h, f), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => {
      const { dragSnapToOrigin: h } = this.getProps();
      (h || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new Zo(e, {
      onSessionStart: r,
      onStart: o,
      onMove: a,
      onSessionEnd: c,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: l,
      distanceThreshold: i,
      contextWindow: qo(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(e, n) {
    const i = e || this.latestPointerEvent, s = n || this.latestPanInfo, r = this.isDragging;
    if (this.cancel(), !r || !s || !i)
      return;
    const { velocity: o } = s;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && E.postRender(() => a(i, s));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: i } = this.getProps();
    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(e, n, i) {
    const { drag: s } = this.getProps();
    if (!i || !qt(e, s, this.currentDirection))
      return;
    const r = this.getAxisMotionValue(e);
    let o = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (o = Wu(o, this.constraints[e], this.elastic[e])), r.set(o);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
    e && Tt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = $u(i.layoutBox, e) : this.constraints = !1, this.elastic = Gu(n), s !== this.constraints && !Tt(e) && i && this.constraints && !this.hasMutatedConstraints && Q((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = Hu(i.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Tt(e))
      return !1;
    const i = e.current;
    ot(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    s.root && (s.root.scroll = void 0, s.root.updateScroll());
    const r = ql(i, s.root, this.visualElement.getTransformPagePoint());
    let o = zu(s.layout.layoutBox, r);
    if (n) {
      const a = n(_l(o));
      this.hasMutatedConstraints = !!a, a && (o = xo(a));
    }
    return o;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: r, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), c = this.constraints || {}, u = Q((l) => {
      if (!qt(l, n, this.currentDirection))
        return;
      let h = c && c[l] || {};
      (o === !0 || o === l) && (h = { min: 0, max: 0 });
      const f = s ? 200 : 1e6, d = s ? 40 : 1e7, p = {
        type: "inertia",
        velocity: i ? e[l] : 0,
        bounceStiffness: f,
        bounceDamping: d,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...r,
        ...h
      };
      return this.startAxisValueAnimation(l, p);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return tn(this.visualElement, e), i.start(En(e, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Q((e) => this.getAxisMotionValue(e).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, s = this.visualElement.getProps()[n];
    return s || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
  }
  snapToCursor(e) {
    Q((n) => {
      const { drag: i } = this.getProps();
      if (!qt(n, i, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, r = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n], c = r.get() || 0;
        r.set(e[n] - D(o, a, 0.5) + c);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: i } = this.visualElement;
    if (!Tt(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Q((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const c = a.get();
        s[o] = Ku({ min: c, max: c }, this.constraints[o]);
      }
    });
    const { transformTemplate: r } = this.visualElement.getProps();
    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.constraints = !1, this.resolveConstraints(), Q((o) => {
      if (!qt(o, e, null))
        return;
      const a = this.getAxisMotionValue(o), { min: c, max: u } = this.constraints[o];
      a.set(D(c, u, s[o]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    _u.set(this.visualElement, this);
    const e = this.visualElement.current, n = Ot(e, "pointerdown", (u) => {
      const { drag: l, dragListener: h = !0 } = this.getProps(), f = u.target, d = f !== e && Vl(f);
      l && h && !d && this.start(u);
    });
    let i;
    const s = () => {
      const { dragConstraints: u } = this.getProps();
      Tt(u) && u.current && (this.constraints = this.resolveRefConstraints(), i || (i = Xu(e, u.current, () => this.scalePositionWithinConstraints())));
    }, { projection: r } = this.visualElement, o = r.addEventListener("measure", s);
    r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), E.read(s);
    const a = Wt(window, "resize", () => this.scalePositionWithinConstraints()), c = r.addEventListener("didUpdate", (({ delta: u, hasLayoutChanged: l }) => {
      this.isDragging && l && (Q((h) => {
        const f = this.getAxisMotionValue(h);
        f && (this.originPoint[h] += u[h].translate, f.set(f.get() + u[h].translate));
      }), this.visualElement.render());
    }));
    return () => {
      a(), n(), o(), c && c(), i && i();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: r = !1, dragElastic: o = hn, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: r,
      dragElastic: o,
      dragMomentum: a
    };
  }
}
function rs(t) {
  let e = !0;
  return () => {
    if (e) {
      e = !1;
      return;
    }
    t();
  };
}
function Xu(t, e, n) {
  const i = di(t, rs(n)), s = di(e, rs(n));
  return () => {
    i(), s();
  };
}
function qt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function qu(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Zu extends ct {
  constructor(e) {
    super(e), this.removeGroupControls = G, this.removeListeners = G, this.controls = new Yu(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || G;
  }
  update() {
    const { dragControls: e } = this.node.getProps(), { dragControls: n } = this.node.prevProps || {};
    e !== n && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const Oe = (t) => (e, n) => {
  t && E.update(() => t(e, n), !1, !0);
};
class Ju extends ct {
  constructor() {
    super(...arguments), this.removePointerDownListener = G;
  }
  onPointerDown(e) {
    this.session = new Zo(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: qo(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: Oe(e),
      onStart: Oe(n),
      onMove: Oe(i),
      onEnd: (r, o) => {
        delete this.session, s && E.postRender(() => s(r, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ot(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let je = !1;
class Qu extends rr {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: r } = e;
    r && (n.group && n.group.add(r), i && i.register && s && i.register(r), je && r.root.didUpdate(), r.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), r.setOptions({
      ...r.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), oe.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: r } = this.props, { projection: o } = i;
    return o && (o.isPresent = r, e.layoutDependency !== n && o.setOptions({
      ...o.options,
      layoutDependency: n
    }), je = !0, s || e.layoutDependency !== n || n === void 0 || e.isPresent !== r ? o.willUpdate() : this.safeToRemove(), e.isPresent !== r && (r ? o.promote() : o.relegate() || E.postRender(() => {
      const a = o.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: e, layoutAnchor: n } = this.props, { projection: i } = e;
    i && (i.options.layoutAnchor = n, i.root.didUpdate(), Ln.postRender(() => {
      !i.currentAnimation && i.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: s } = e;
    je = !0, s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), i && i.deregister && i.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Qo(t) {
  const [e, n] = Wo(), i = N(mn);
  return k(Qu, { ...t, layoutGroup: i, switchLayoutGroup: N(Yo), isPresent: e, safeToRemove: n });
}
const th = {
  pan: {
    Feature: Ju
  },
  drag: {
    Feature: Zu,
    ProjectionNode: Uo,
    MeasureLayout: Qo
  }
};
function as(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, r = i[s];
  r && E.postRender(() => r(e, Ht(e)));
}
class eh extends ct {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Pl(e, (n, i) => (as(this.node, i, "Start"), (s) => as(this.node, s, "End"))));
  }
  unmount() {
  }
}
class nh extends ct {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = $t(Wt(this.node.current, "focus", () => this.onFocus()), Wt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function ls(t, e, n) {
  const { props: i } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), r = i[s];
  r && E.postRender(() => r(e, Ht(e)));
}
class ih extends ct {
  mount() {
    const { current: e } = this.node;
    if (!e)
      return;
    const { globalTapTarget: n, propagate: i } = this.node.props;
    this.unmount = Dl(e, (s, r) => (ls(this.node, r, "Start"), (o, { success: a }) => ls(this.node, o, a ? "End" : "Cancel")), {
      useGlobalTarget: n,
      stopPropagation: i?.tap === !1
    });
  }
  unmount() {
  }
}
const fn = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), sh = (t) => {
  const e = fn.get(t.target);
  e && e(t);
}, oh = (t) => {
  t.forEach(sh);
};
function rh({ root: t, ...e }) {
  const n = t || document;
  Ne.has(n) || Ne.set(n, {});
  const i = Ne.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(oh, { root: t, ...e })), i[s];
}
function ah(t, e, n) {
  const i = rh(e);
  return fn.set(t, n), i.observe(t), () => {
    fn.delete(t), i.unobserve(t);
  };
}
const lh = {
  some: 0,
  all: 1
};
class ch extends ct {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: r } = e, o = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : lh[s]
    }, a = (c) => {
      const { isIntersecting: u } = c;
      if (this.isInView === u || (this.isInView = u, r && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: l, onViewportLeave: h } = this.node.getProps(), f = u ? l : h;
      f && f(c);
    };
    this.stopObserver = ah(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(uh(e, n)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function uh({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const hh = {
  inView: {
    Feature: ch
  },
  tap: {
    Feature: ih
  },
  focus: {
    Feature: nh
  },
  hover: {
    Feature: eh
  }
}, fh = {
  layout: {
    ProjectionNode: Uo,
    MeasureLayout: Qo
  }
}, dh = {
  ...Iu,
  ...hh,
  ...th,
  ...fh
}, cs = /* @__PURE__ */ Ru(dh, ku), Ch = ({
  label: t,
  checked: e,
  disabled: n = !1,
  variant: i = "filled",
  onChange: s,
  color: r = "primary",
  textColor: o,
  className: a
}) => {
  const { main: c, contrast: u } = ds(r), l = {
    borderColor: e ? c : "#d1d5db",
    backgroundColor: i === "filled" && e ? c : "#ffffff",
    color: e && i === "filled" ? u : e ? c : "inherit"
  };
  return /* @__PURE__ */ mt(
    "div",
    {
      className: ar(
        "flex items-center gap-2 cursor-pointer select-none",
        n && "cursor-not-allowed opacity-60",
        a
      ),
      onClick: () => !n && s(!e),
      children: [
        /* @__PURE__ */ k(
          cs.div,
          {
            whileTap: { scale: 0.9 },
            style: l,
            className: "w-5 h-5 rounded-md flex items-center justify-center border-2 transition-all",
            children: e && /* @__PURE__ */ k(
              cs.svg,
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "w-3.5 h-3.5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: 3,
                initial: { scale: 0 },
                animate: { scale: 1 },
                children: /* @__PURE__ */ k(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M5 13l4 4L19 7"
                  }
                )
              }
            )
          }
        ),
        t && /* @__PURE__ */ k(
          "label",
          {
            style: { color: o },
            className: "text-sm font-medium cursor-pointer",
            children: t
          }
        )
      ]
    }
  );
};
function ph(t, e) {
  return e ? e.getValue ? e.getValue(t) : t[e.value] : t;
}
function Vh({
  data: t,
  columns: e = [],
  placeholder: n = "Filtrar...",
  onChange: i,
  initialQuery: s,
  className: r = "",
  inputClassName: o = "",
  selectClassName: a = "",
  style: c,
  theme: u
}) {
  const [l, h] = re(s ?? ""), [f, d] = re(), p = z(i);
  p.current = i, ve(() => {
    if (!l) {
      p.current(t);
      return;
    }
    const y = l.toLowerCase(), x = t.filter((v) => {
      if (f) {
        const T = e.find((V) => V.value === f);
        return String(ph(v, T) ?? "").toLowerCase().includes(y);
      }
      return Object.values(v).some(
        (T) => String(T).toLowerCase().includes(y)
      );
    });
    p.current(x);
  }, [l, f, JSON.stringify(t)]);
  const g = Kn[u ?? "dark"].classes, m = Kn[u ?? "dark"].colorsFiler;
  return /* @__PURE__ */ mt(
    "div",
    {
      className: `flex items-center max-w-lg gap-3 ${g.wrapper} rounded-lg shadow-sm p-2! ${r}`,
      style: c,
      children: [
        /* @__PURE__ */ k(gr, { className: g.textPrimary }),
        /* @__PURE__ */ k(
          ur,
          {
            value: l,
            placeholder: n,
            onIonInput: (y) => h(y.detail.value),
            clearInput: !0,
            className: `flex-1 ${o}`
          }
        ),
        e.length > 0 && /* @__PURE__ */ mt("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ k(mr, { className: g.textPrimary, size: 20 }),
          /* @__PURE__ */ k(
            "div",
            {
              className: "self-stretch w-px",
              style: { backgroundColor: m.border }
            }
          ),
          /* @__PURE__ */ k(
            dr,
            {
              variant: "clear",
              id: "filter-column-button",
              className: `${a} min-w-28! max-w-28! truncate`,
              backgroundColor: "transparent",
              textColor: m.text,
              size: "small",
              iconEnd: /* @__PURE__ */ k(pr, { size: 14, className: m.text }),
              children: f ? e.find((y) => y.value === f)?.label : "Todas"
            }
          ),
          /* @__PURE__ */ k(
            hr,
            {
              trigger: "filter-column-button",
              triggerAction: "click",
              dismissOnSelect: !0,
              alignment: "end",
              children: /* @__PURE__ */ mt(
                fr,
                {
                  style: {
                    background: m.background
                  },
                  children: [
                    /* @__PURE__ */ k(
                      zn,
                      {
                        button: !0,
                        onClick: () => d(void 0),
                        style: {
                          "--background": m.background,
                          "--color": m.text
                        },
                        children: "Todas"
                      }
                    ),
                    e.map((y) => /* @__PURE__ */ k(
                      zn,
                      {
                        button: !0,
                        style: {
                          "--background": m.background,
                          "--color": m.text
                        },
                        onClick: () => d(y.value),
                        children: y.label
                      },
                      y.value
                    ))
                  ]
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
export {
  Ah as A,
  dr as C,
  Kn as D,
  bh as F,
  Ph as a,
  Ch as b,
  wh as c,
  pr as d,
  Vh as e,
  cs as m
};
