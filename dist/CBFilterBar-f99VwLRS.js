import { jsx as F, jsxs as mt, Fragment as Ue } from "react/jsx-runtime";
import { IonButton as tr, IonSpinner as er, IonInput as nr, IonSelect as ir, IonSelectOption as zn } from "@ionic/react";
import * as ye from "react";
import { createContext as Ct, useRef as K, useLayoutEffect as sr, useEffect as ve, useId as pn, useContext as N, useInsertionEffect as mn, useMemo as vt, useCallback as us, Children as or, isValidElement as rr, useState as re, Fragment as hs, createElement as ar, forwardRef as lr, Component as cr } from "react";
import { u as fs, G as Mt } from "./iconBase-Sed4o0Xx.js";
import ur from "clsx";
const yh = ({
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
  color: p = "primary",
  backgroundColor: d,
  textColor: m,
  borderColor: g,
  hoverColor: y,
  routerLink: x,
  activeColor: v,
  ...T
}) => {
  const { main: A, contrast: C } = fs(p), b = { ...f }, S = d ?? c ?? A, V = m ?? C, P = g ?? A, M = y ?? V, k = v ?? V;
  switch (n === "solid" ? (b["--background"] = S, b["--color"] = V, b["--background-focused"] = A, b["--background-activated"] = A, b["--color-focused"] = V, b["--color-hover"] = M, b["--color-activated"] = k) : n === "outline" ? (b["--color"] = V, b["--border-color"] = P, b["--border-color-focused"] = P, b["--border-color-activated"] = P, b["--color-focused"] = V, b["--color-hover"] = M, b["--color-activated"] = k) : n === "clear" && (b["--color"] = V, b["--color-focused"] = V, b["--color-hover"] = M, b["--color-activated"] = k), i && (b["--border-radius"] = "999px"), s && (b.width = "100%"), e) {
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
  return /* @__PURE__ */ F(
    tr,
    {
      fill: n,
      disabled: a || r,
      style: b,
      className: h,
      routerLink: x,
      ...T,
      children: r ? /* @__PURE__ */ mt(Ue, { children: [
        /* @__PURE__ */ F(er, { name: "crescent", slot: "start" }),
        o ?? t
      ] }) : /* @__PURE__ */ mt(Ue, { children: [
        u,
        t,
        l
      ] })
    }
  );
};
function vh(t) {
  return Mt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "6 9 12 15 18 9" } }] })(t);
}
function xh(t) {
  return Mt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "18 15 12 9 6 15" } }] })(t);
}
function Th(t) {
  return Mt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" } }, { tag: "path", attr: { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" } }] })(t);
}
function hr(t) {
  return Mt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polygon", attr: { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" } }] })(t);
}
function fr(t) {
  return Mt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "circle", attr: { cx: "11", cy: "11", r: "8" } }, { tag: "line", attr: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" } }] })(t);
}
function wh(t) {
  return Mt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "3 6 5 6 21 6" } }, { tag: "path", attr: { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" } }, { tag: "line", attr: { x1: "10", y1: "11", x2: "10", y2: "17" } }, { tag: "line", attr: { x1: "14", y1: "11", x2: "14", y2: "17" } }] })(t);
}
const gn = Ct({});
function yn(t) {
  const e = K(null);
  return e.current === null && (e.current = t()), e.current;
}
const dr = typeof window < "u", ds = dr ? sr : ve, xe = /* @__PURE__ */ Ct(null);
function vn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function ae(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const et = (t, e, n) => n > e ? e : n < t ? t : n;
function We(t, e) {
  return e ? `${t}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${e}` : t;
}
let Dt = () => {
}, ot = () => {
};
typeof process < "u" && process.env?.NODE_ENV !== "production" && (Dt = (t, e, n) => {
  !t && typeof console < "u" && console.warn(We(e, n));
}, ot = (t, e, n) => {
  if (!t)
    throw new Error(We(e, n));
});
const at = {}, ps = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), ms = (t) => typeof t == "object" && t !== null, gs = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function ys(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const G = /* @__NO_SIDE_EFFECTS__ */ (t) => t, $t = (...t) => t.reduce((e, n) => (i) => n(e(i))), jt = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i ? (n - t) / i : 1;
};
class xn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return vn(this.subscriptions, e), () => ae(this.subscriptions, e);
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
const $ = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, H = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3, vs = /* @__NO_SIDE_EFFECTS__ */ (t, e) => e ? t * (1e3 / e) : 0, Hn = /* @__PURE__ */ new Set();
function Tn(t, e, n) {
  t || Hn.has(e) || (console.warn(We(e, n)), Hn.add(e));
}
const xs = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, pr = 1e-7, mr = 12;
function gr(t, e, n, i, s) {
  let r, o, a = 0;
  do
    o = e + (n - e) / 2, r = xs(o, i, s) - t, r > 0 ? n = o : e = o;
  while (Math.abs(r) > pr && ++a < mr);
  return o;
}
// @__NO_SIDE_EFFECTS__
function Kt(t, e, n, i) {
  if (t === e && n === i)
    return G;
  const s = (r) => gr(r, 0, 1, t, n);
  return (r) => r === 0 || r === 1 ? r : xs(s(r), e, i);
}
const Ts = /* @__NO_SIDE_EFFECTS__ */ (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, ws = /* @__NO_SIDE_EFFECTS__ */ (t) => (e) => 1 - t(1 - e), bs = /* @__PURE__ */ Kt(0.33, 1.53, 0.69, 0.99), wn = /* @__PURE__ */ ws(bs), Ss = /* @__PURE__ */ Ts(wn), Ps = (t) => t >= 1 ? 1 : (t *= 2) < 1 ? 0.5 * wn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), bn = (t) => 1 - Math.sin(Math.acos(t)), As = /* @__PURE__ */ ws(bn), Vs = /* @__PURE__ */ Ts(bn), yr = /* @__PURE__ */ Kt(0.42, 0, 1, 1), vr = /* @__PURE__ */ Kt(0, 0, 0.58, 1), Cs = /* @__PURE__ */ Kt(0.42, 0, 0.58, 1), xr = /* @__NO_SIDE_EFFECTS__ */ (t) => Array.isArray(t) && typeof t[0] != "number", Ms = /* @__NO_SIDE_EFFECTS__ */ (t) => Array.isArray(t) && typeof t[0] == "number", Gn = {
  linear: G,
  easeIn: yr,
  easeInOut: Cs,
  easeOut: vr,
  circIn: bn,
  circInOut: Vs,
  circOut: As,
  backIn: wn,
  backInOut: Ss,
  backOut: bs,
  anticipate: Ps
}, Tr = (t) => typeof t == "string", _n = (t) => {
  if (/* @__PURE__ */ Ms(t)) {
    ot(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [e, n, i, s] = t;
    return /* @__PURE__ */ Kt(e, n, i, s);
  } else if (Tr(t))
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
function wr(t, e) {
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
      const d = f && s ? n : i;
      return h && o.add(l), d.add(l), l;
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
const br = 40;
function Ds(t, e) {
  let n = !1, i = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, r = () => n = !0, o = Gt.reduce((v, T) => (v[T] = wr(r), v), {}), { setup: a, read: c, resolveKeyframes: u, preUpdate: l, update: h, preRender: f, render: p, postRender: d } = o, m = () => {
    const v = at.useManualTiming, T = v ? s.timestamp : performance.now();
    n = !1, v || (s.delta = i ? 1e3 / 60 : Math.max(Math.min(T - s.timestamp, br), 1)), s.timestamp = T, s.isProcessing = !0, a.process(s), c.process(s), u.process(s), l.process(s), h.process(s), f.process(s), p.process(s), d.process(s), s.isProcessing = !1, n && e && (i = !1, t(m));
  }, g = () => {
    n = !0, i = !0, s.isProcessing || t(m);
  };
  return { schedule: Gt.reduce((v, T) => {
    const A = o[T];
    return v[T] = (C, b = !1, S = !1) => (n || g(), A.schedule(C, b, S)), v;
  }, {}), cancel: (v) => {
    for (let T = 0; T < Gt.length; T++)
      o[Gt[T]].cancel(v);
  }, state: s, steps: o };
}
const { schedule: E, cancel: lt, state: O, steps: Pe } = /* @__PURE__ */ Ds(typeof requestAnimationFrame < "u" ? requestAnimationFrame : G, !0);
let Zt;
function Sr() {
  Zt = void 0;
}
const U = {
  now: () => (Zt === void 0 && U.set(O.isProcessing || at.useManualTiming ? O.timestamp : performance.now()), Zt),
  set: (t) => {
    Zt = t, queueMicrotask(Sr);
  }
}, Es = (t) => (e) => typeof e == "string" && e.startsWith(t), Rs = /* @__PURE__ */ Es("--"), Pr = /* @__PURE__ */ Es("var(--"), Sn = (t) => Pr(t) ? Ar.test(t.split("/*")[0].trim()) : !1, Ar = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Yn(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--");
}
const Et = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Nt = {
  ...Et,
  transform: (t) => et(0, 1, t)
}, _t = {
  ...Et,
  default: 1
}, Ft = (t) => Math.round(t * 1e5) / 1e5, Pn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Vr(t) {
  return t == null;
}
const Cr = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, An = (t, e) => (n) => !!(typeof n == "string" && Cr.test(n) && n.startsWith(t) || e && !Vr(n) && Object.prototype.hasOwnProperty.call(n, e)), ks = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, r, o, a] = i.match(Pn);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(r),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Mr = (t) => et(0, 255, t), Ae = {
  ...Et,
  transform: (t) => Math.round(Mr(t))
}, dt = {
  test: /* @__PURE__ */ An("rgb", "red"),
  parse: /* @__PURE__ */ ks("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + Ae.transform(t) + ", " + Ae.transform(e) + ", " + Ae.transform(n) + ", " + Ft(Nt.transform(i)) + ")"
};
function Dr(t) {
  let e = "", n = "", i = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const $e = {
  test: /* @__PURE__ */ An("#"),
  parse: Dr,
  transform: dt.transform
}, zt = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), st = /* @__PURE__ */ zt("deg"), tt = /* @__PURE__ */ zt("%"), w = /* @__PURE__ */ zt("px"), Er = /* @__PURE__ */ zt("vh"), Rr = /* @__PURE__ */ zt("vw"), Xn = {
  ...tt,
  parse: (t) => tt.parse(t) / 100,
  transform: (t) => tt.transform(t * 100)
}, wt = {
  test: /* @__PURE__ */ An("hsl", "hue"),
  parse: /* @__PURE__ */ ks("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + tt.transform(Ft(e)) + ", " + tt.transform(Ft(n)) + ", " + Ft(Nt.transform(i)) + ")"
}, L = {
  test: (t) => dt.test(t) || $e.test(t) || wt.test(t),
  parse: (t) => dt.test(t) ? dt.parse(t) : wt.test(t) ? wt.parse(t) : $e.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? dt.transform(t) : wt.transform(t),
  getAnimatableNone: (t) => {
    const e = L.parse(t);
    return e.alpha = 0, L.transform(e);
  }
}, kr = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Lr(t) {
  return isNaN(t) && typeof t == "string" && (t.match(Pn)?.length || 0) + (t.match(kr)?.length || 0) > 0;
}
const Ls = "number", Bs = "color", Br = "var", Fr = "var(", qn = "${}", Ir = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function At(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let r = 0;
  const a = e.replace(Ir, (c) => (L.test(c) ? (i.color.push(r), s.push(Bs), n.push(L.parse(c))) : c.startsWith(Fr) ? (i.var.push(r), s.push(Br), n.push(c)) : (i.number.push(r), s.push(Ls), n.push(parseFloat(c))), ++r, qn)).split(qn);
  return { values: n, split: a, indexes: i, types: s };
}
function Or(t) {
  return At(t).values;
}
function Fs({ split: t, types: e }) {
  const n = t.length;
  return (i) => {
    let s = "";
    for (let r = 0; r < n; r++)
      if (s += t[r], i[r] !== void 0) {
        const o = e[r];
        o === Ls ? s += Ft(i[r]) : o === Bs ? s += L.transform(i[r]) : s += i[r];
      }
    return s;
  };
}
function jr(t) {
  return Fs(At(t));
}
const Nr = (t) => typeof t == "number" ? 0 : L.test(t) ? L.getAnimatableNone(t) : t, Ur = (t, e) => typeof t == "number" ? e?.trim().endsWith("/") ? t : 0 : Nr(t);
function Wr(t) {
  const e = At(t);
  return Fs(e)(e.values.map((i, s) => Ur(i, e.split[s])));
}
const X = {
  test: Lr,
  parse: Or,
  createTransformer: jr,
  getAnimatableNone: Wr
};
function Ve(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function $r({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let s = 0, r = 0, o = 0;
  if (!e)
    s = r = o = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, c = 2 * n - a;
    s = Ve(c, a, t + 1 / 3), r = Ve(c, a, t), o = Ve(c, a, t - 1 / 3);
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
const D = (t, e, n) => t + (e - t) * n, Ce = (t, e, n) => {
  const i = t * t, s = n * (e * e - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, Kr = [$e, dt, wt], zr = (t) => Kr.find((e) => e.test(t));
function Zn(t) {
  const e = zr(t);
  if (Dt(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e)
    return !1;
  let n = e.parse(t);
  return e === wt && (n = $r(n)), n;
}
const Jn = (t, e) => {
  const n = Zn(t), i = Zn(e);
  if (!n || !i)
    return le(t, e);
  const s = { ...n };
  return (r) => (s.red = Ce(n.red, i.red, r), s.green = Ce(n.green, i.green, r), s.blue = Ce(n.blue, i.blue, r), s.alpha = D(n.alpha, i.alpha, r), dt.transform(s));
}, Ke = /* @__PURE__ */ new Set(["none", "hidden"]);
function Hr(t, e) {
  return Ke.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function Gr(t, e) {
  return (n) => D(t, e, n);
}
function Vn(t) {
  return typeof t == "number" ? Gr : typeof t == "string" ? Sn(t) ? le : L.test(t) ? Jn : Xr : Array.isArray(t) ? Is : typeof t == "object" ? L.test(t) ? Jn : _r : le;
}
function Is(t, e) {
  const n = [...t], i = n.length, s = t.map((r, o) => Vn(r)(r, e[o]));
  return (r) => {
    for (let o = 0; o < i; o++)
      n[o] = s[o](r);
    return n;
  };
}
function _r(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const s in n)
    t[s] !== void 0 && e[s] !== void 0 && (i[s] = Vn(t[s])(t[s], e[s]));
  return (s) => {
    for (const r in i)
      n[r] = i[r](s);
    return n;
  };
}
function Yr(t, e) {
  const n = [], i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < e.values.length; s++) {
    const r = e.types[s], o = t.indexes[r][i[r]], a = t.values[o] ?? 0;
    n[s] = a, i[r]++;
  }
  return n;
}
const Xr = (t, e) => {
  const n = X.createTransformer(e), i = At(t), s = At(e);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? Ke.has(t) && !s.values.length || Ke.has(e) && !i.values.length ? Hr(t, e) : $t(Is(Yr(i, s), s.values), n) : (Dt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), le(t, e));
};
function Os(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? D(t, e, n) : Vn(t)(t, e);
}
const qr = (t) => {
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
}, js = (t, e, n = 10) => {
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
function Zr(t, e = 100, n) {
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
const Jr = 12;
function Qr(t, e, n) {
  let i = n;
  for (let s = 1; s < Jr; s++)
    i = i - t(i) / e(i);
  return i;
}
const Me = 1e-3;
function ta({ duration: t = R.duration, bounce: e = R.bounce, velocity: n = R.velocity, mass: i = R.mass }) {
  let s, r;
  Dt(t <= /* @__PURE__ */ $(R.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let o = 1 - e;
  o = et(R.minDamping, R.maxDamping, o), t = et(R.minDuration, R.maxDuration, /* @__PURE__ */ H(t)), o < 1 ? (s = (u) => {
    const l = u * o, h = l * t, f = l - n, p = ze(u, o), d = Math.exp(-h);
    return Me - f / p * d;
  }, r = (u) => {
    const h = u * o * t, f = h * n + n, p = Math.pow(o, 2) * Math.pow(u, 2) * t, d = Math.exp(-h), m = ze(Math.pow(u, 2), o);
    return (-s(u) + Me > 0 ? -1 : 1) * ((f - p) * d) / m;
  }) : (s = (u) => {
    const l = Math.exp(-u * t), h = (u - n) * t + 1;
    return -Me + l * h;
  }, r = (u) => {
    const l = Math.exp(-u * t), h = (n - u) * (t * t);
    return l * h;
  });
  const a = 5 / t, c = Qr(s, r, a);
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
const ea = ["duration", "bounce"], na = ["stiffness", "damping", "mass"];
function Qn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function ia(t) {
  let e = {
    velocity: R.velocity,
    stiffness: R.stiffness,
    damping: R.damping,
    mass: R.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Qn(t, na) && Qn(t, ea))
    if (e.velocity = 0, t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, r = 2 * et(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: R.mass,
        stiffness: s,
        damping: r
      };
    } else {
      const n = ta({ ...t, velocity: 0 });
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
  const r = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: r }, { stiffness: c, damping: u, mass: l, duration: h, velocity: f, isResolvedFromDuration: p } = ia({
    ...n,
    velocity: -/* @__PURE__ */ H(n.velocity || 0)
  }), d = f || 0, m = u / (2 * Math.sqrt(c * l)), g = o - r, y = /* @__PURE__ */ H(Math.sqrt(c / l)), x = Math.abs(g) < 5;
  i || (i = x ? R.restSpeed.granular : R.restSpeed.default), s || (s = x ? R.restDelta.granular : R.restDelta.default);
  let v, T, A, C, b, S;
  if (m < 1)
    A = ze(y, m), C = (d + m * y * g) / A, v = (P) => {
      const M = Math.exp(-m * y * P);
      return o - M * (C * Math.sin(A * P) + g * Math.cos(A * P));
    }, b = m * y * C + g * A, S = m * y * g - C * A, T = (P) => Math.exp(-m * y * P) * (b * Math.sin(A * P) + S * Math.cos(A * P));
  else if (m === 1) {
    v = (M) => o - Math.exp(-y * M) * (g + (d + y * g) * M);
    const P = d + y * g;
    T = (M) => Math.exp(-y * M) * (y * P * M - d);
  } else {
    const P = y * Math.sqrt(m * m - 1);
    v = (q) => {
      const it = Math.exp(-m * y * q), Z = Math.min(P * q, 300);
      return o - it * ((d + m * y * g) * Math.sinh(Z) + P * g * Math.cosh(Z)) / P;
    };
    const M = (d + m * y * g) / P, k = m * y * M - g * P, nt = m * y * g - M * P;
    T = (q) => {
      const it = Math.exp(-m * y * q), Z = Math.min(P * q, 300);
      return it * (k * Math.sinh(Z) + nt * Math.cosh(Z));
    };
  }
  const V = {
    calculatedDuration: p && h || null,
    velocity: (P) => /* @__PURE__ */ $(T(P)),
    next: (P) => {
      if (!p && m < 1) {
        const k = Math.exp(-m * y * P), nt = Math.sin(A * P), q = Math.cos(A * P), it = o - k * (C * nt + g * q), Z = /* @__PURE__ */ $(k * (b * nt + S * q));
        return a.done = Math.abs(Z) <= i && Math.abs(o - it) <= s, a.value = a.done ? o : it, a;
      }
      const M = v(P);
      if (p)
        a.done = P >= h;
      else {
        const k = /* @__PURE__ */ $(T(P));
        a.done = Math.abs(k) <= i && Math.abs(o - M) <= s;
      }
      return a.value = a.done ? o : M, a;
    },
    toString: () => {
      const P = Math.min(Cn(V), ce), M = js((k) => V.next(P * k).value, P, 30);
      return P + "ms " + M;
    },
    toTransition: () => {
    }
  };
  return V;
}
ue.applyToOptions = (t) => {
  const e = Zr(t, 100, ue);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ $(e.duration), t.type = "keyframes", t;
};
const sa = 5;
function Ns(t, e, n) {
  const i = Math.max(e - sa, 0);
  return /* @__PURE__ */ vs(n - t(i), e - i);
}
function He({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: r = 500, modifyTarget: o, min: a, max: c, restDelta: u = 0.5, restSpeed: l }) {
  const h = t[0], f = {
    done: !1,
    value: h
  }, p = (S) => a !== void 0 && S < a || c !== void 0 && S > c, d = (S) => a === void 0 ? c : c === void 0 || Math.abs(a - S) < Math.abs(c - S) ? a : c;
  let m = n * e;
  const g = h + m, y = o === void 0 ? g : o(g);
  y !== g && (m = y - h);
  const x = (S) => -m * Math.exp(-S / i), v = (S) => y + x(S), T = (S) => {
    const V = x(S), P = v(S);
    f.done = Math.abs(V) <= u, f.value = f.done ? y : P;
  };
  let A, C;
  const b = (S) => {
    p(f.value) && (A = S, C = ue({
      keyframes: [f.value, d(f.value)],
      velocity: Ns(v, S, f.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: r,
      restDelta: u,
      restSpeed: l
    }));
  };
  return b(0), {
    calculatedDuration: null,
    next: (S) => {
      let V = !1;
      return !C && A === void 0 && (V = !0, T(S), b(S)), A !== void 0 && S >= A ? C.next(S - A) : (!V && T(S), f);
    }
  };
}
function oa(t, e, n) {
  const i = [], s = n || at.mix || Os, r = t.length - 1;
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
function ra(t, e, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const r = t.length;
  if (ot(r === e.length, "Both input and output ranges must be the same length", "range-length"), r === 1)
    return () => e[0];
  if (r === 2 && e[0] === e[1])
    return () => e[1];
  const o = t[0] === t[1];
  t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = oa(e, i, s), c = a.length, u = (l) => {
    if (o && l < t[0])
      return e[0];
    let h = 0;
    if (c > 1)
      for (; h < t.length - 2 && !(l < t[h + 1]); h++)
        ;
    const f = /* @__PURE__ */ jt(t[h], t[h + 1], l);
    return a[h](f);
  };
  return n ? (l) => u(et(t[0], t[r - 1], l)) : u;
}
function aa(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = /* @__PURE__ */ jt(0, e, i);
    t.push(D(n, 1, s));
  }
}
function la(t) {
  const e = [0];
  return aa(e, t.length - 1), e;
}
function ca(t, e) {
  return t.map((n) => n * e);
}
function ua(t, e) {
  return t.map(() => e || Cs).splice(0, t.length - 1);
}
function bt({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const s = /* @__PURE__ */ xr(i) ? i.map(_n) : _n(i), r = {
    done: !1,
    value: e[0]
  }, o = ca(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : la(e),
    t
  ), a = ra(o, e, {
    ease: Array.isArray(s) ? s : ua(e, s)
  });
  return {
    calculatedDuration: t,
    next: (c) => (r.value = a(c), r.done = c >= t, r)
  };
}
const ha = (t) => t !== null;
function Te(t, { repeat: e, repeatType: n = "loop" }, i, s = 1) {
  const r = t.filter(ha), a = s < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : r.length - 1;
  return !a || i === void 0 ? r[a] : i;
}
const fa = {
  decay: He,
  inertia: He,
  tween: bt,
  keyframes: bt,
  spring: ue
};
function Us(t) {
  typeof t.type == "string" && (t.type = fa[t.type]);
}
class Mn {
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
const da = (t) => t / 100;
class he extends Mn {
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
    Us(e);
    const { type: n = bt, repeat: i = 0, repeatDelay: s = 0, repeatType: r, velocity: o = 0 } = e;
    let { keyframes: a } = e;
    const c = n || bt;
    process.env.NODE_ENV !== "production" && c !== bt && ot(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), c !== bt && typeof a[0] != "number" && (this.mixKeyframes = $t(da, Os(a[0], a[1])), a = [0, 100]);
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
    const { delay: u = 0, keyframes: l, repeat: h, repeatType: f, repeatDelay: p, type: d, onUpdate: m, finalKeyframe: g } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - s / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const y = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), x = this.playbackSpeed >= 0 ? y < 0 : y > s;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let v = this.currentTime, T = i;
    if (h) {
      const S = Math.min(this.currentTime, s) / a;
      let V = Math.floor(S), P = S % 1;
      !P && S >= 1 && (P = 1), P === 1 && V--, V = Math.min(V, h + 1), V % 2 && (f === "reverse" ? (P = 1 - P, p && (P -= p / a)) : f === "mirror" && (T = o)), v = et(0, 1, P) * a;
    }
    let A;
    x ? (this.delayState.value = l[0], A = this.delayState) : A = T.next(v), r && !x && (A.value = r(A.value));
    let { done: C } = A;
    !x && c !== null && (C = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const b = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
    return b && d !== He && (A.value = Te(l, this.options, g, this.speed)), m && m(A.value), b && this.finish(), A;
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
    return Ns((i) => this.generator.next(i).value, e, n);
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
    const { driver: e = qr, startTime: n } = this.options;
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
function pa(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const pt = (t) => t * 180 / Math.PI, Ge = (t) => {
  const e = pt(Math.atan2(t[1], t[0]));
  return _e(e);
}, ma = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: Ge,
  rotateZ: Ge,
  skewX: (t) => pt(Math.atan(t[1])),
  skewY: (t) => pt(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, _e = (t) => (t = t % 360, t < 0 && (t += 360), t), ti = Ge, ei = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), ni = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), ga = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: ei,
  scaleY: ni,
  scale: (t) => (ei(t) + ni(t)) / 2,
  rotateX: (t) => _e(pt(Math.atan2(t[6], t[5]))),
  rotateY: (t) => _e(pt(Math.atan2(-t[2], t[0]))),
  rotateZ: ti,
  rotate: ti,
  skewX: (t) => pt(Math.atan(t[4])),
  skewY: (t) => pt(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Ye(t) {
  return t.includes("scale") ? 1 : 0;
}
function Xe(t, e) {
  if (!t || t === "none")
    return Ye(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, s;
  if (n)
    i = ga, s = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = ma, s = a;
  }
  if (!s)
    return Ye(e);
  const r = i[e], o = s[1].split(",").map(va);
  return typeof r == "function" ? r(o) : o[r];
}
const ya = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return Xe(n, e);
};
function va(t) {
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
], kt = /* @__PURE__ */ new Set([...Rt, "pathRotation"]), ii = (t) => t === Et || t === w, xa = /* @__PURE__ */ new Set(["x", "y", "z"]), Ta = Rt.filter((t) => !xa.has(t));
function wa(t) {
  const e = [];
  return Ta.forEach((n) => {
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
  x: (t, { transform: e }) => Xe(e, "x"),
  y: (t, { transform: e }) => Xe(e, "y")
};
rt.translateX = rt.x;
rt.translateY = rt.y;
const gt = /* @__PURE__ */ new Set();
let qe = !1, Ze = !1, Je = !1;
function Ws() {
  if (Ze) {
    const t = Array.from(gt).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const s = wa(i);
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
  Ze = !1, qe = !1, gt.forEach((t) => t.complete(Je)), gt.clear();
}
function $s() {
  gt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Ze = !0);
  });
}
function ba() {
  Je = !0, $s(), Ws(), Je = !1;
}
class Dn {
  constructor(e, n, i, s, r, o = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = r, this.isAsync = o;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (gt.add(this), qe || (qe = !0, E.read($s), E.resolveKeyframes(Ws))) : (this.readKeyframes(), this.complete());
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
    pa(e);
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
const Sa = (t) => t.startsWith("--");
function Ks(t, e, n) {
  Sa(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const Pa = {};
function zs(t, e) {
  const n = /* @__PURE__ */ ys(t);
  return () => Pa[e] ?? n();
}
const Aa = /* @__PURE__ */ zs(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Hs = /* @__PURE__ */ zs(() => {
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
function Gs(t, e) {
  if (t)
    return typeof t == "function" ? Hs() ? js(t, e) : "ease-out" : /* @__PURE__ */ Ms(t) ? Bt(t) : Array.isArray(t) ? t.map((n) => Gs(n, e) || si.easeOut) : si[t];
}
function Va(t, e, n, { delay: i = 0, duration: s = 300, repeat: r = 0, repeatType: o = "loop", ease: a = "easeOut", times: c } = {}, u = void 0) {
  const l = {
    [e]: n
  };
  c && (l.offset = c);
  const h = Gs(a, s);
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
function _s(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function Ca({ type: t, ...e }) {
  return _s(t) && Hs() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class Ys extends Mn {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e)
      return;
    const { element: n, name: i, keyframes: s, pseudoElement: r, allowFlatten: o = !1, finalKeyframe: a, onComplete: c } = e;
    this.isPseudoElement = !!r, this.allowFlatten = o, this.options = e, ot(typeof e.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const u = Ca(e);
    this.animation = Va(n, i, s, u, r), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
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
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && Aa() ? (this.animation.timeline = e, n && (this.animation.rangeStart = n), i && (this.animation.rangeEnd = i), G) : s(this);
  }
}
const Xs = {
  anticipate: Ps,
  backInOut: Ss,
  circInOut: Vs
};
function Ma(t) {
  return t in Xs;
}
function Da(t) {
  typeof t.ease == "string" && Ma(t.ease) && (t.ease = Xs[t.ease]);
}
const De = 10;
class Ea extends Ys {
  constructor(e) {
    Da(e), Us(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
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
    }), c = Math.max(De, U.now() - this.startTime), u = et(0, De, c - De), l = a.sample(c).value, { name: h } = this.options;
    r && h && Ks(r, h, l), n.setWithVelocity(a.sample(Math.max(0, c - u)).value, l, u), a.stop();
  }
}
const oi = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(X.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function Ra(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function ka(t, e, n, i) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const r = t[t.length - 1], o = oi(s, e), a = oi(r, e);
  return Dt(o === a, `You are trying to animate ${e} from "${s}" to "${r}". "${o ? r : s}" is not an animatable value.`, "value-not-animatable"), !o || !a ? !1 : Ra(t) || (n === "spring" || _s(n)) && i;
}
function Qe(t) {
  t.duration = 0, t.type = "keyframes";
}
const qs = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), La = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Ba(t) {
  for (let e = 0; e < t.length; e++)
    if (typeof t[e] == "string" && La.test(t[e]))
      return !0;
  return !1;
}
const Fa = /* @__PURE__ */ new Set([
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
]), Ia = /* @__PURE__ */ ys(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Oa(t) {
  const { motionValue: e, name: n, repeatDelay: i, repeatType: s, damping: r, type: o, keyframes: a } = t;
  if (!(e?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: u, transformTemplate: l } = e.owner.getProps();
  return Ia() && n && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (qs.has(n) || Fa.has(n) && Ba(a)) && (n !== "transform" || !l) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !u && !i && s !== "mirror" && r !== 0 && o !== "inertia";
}
const ja = 40;
class Na extends Mn {
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
    }, p = l?.KeyframeResolver || Dn;
    this.keyframeResolver = new p(a, (d, m, g) => this.onKeyframesResolved(d, m, f, !g), c, u, l), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, n, i, s) {
    this.keyframeResolver = void 0;
    const { name: r, type: o, velocity: a, delay: c, isHandoff: u, onUpdate: l } = i;
    this.resolvedAt = U.now();
    let h = !0;
    ka(e, r, o, a) || (h = !1, (at.instantAnimations || !c) && l?.(Te(e, i, n)), e[0] = e[e.length - 1], Qe(i), i.repeat = 0);
    const p = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > ja ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...i,
      keyframes: e
    }, d = h && !u && Oa(p), m = p.motionValue?.owner?.current;
    let g;
    if (d)
      try {
        g = new Ea({
          ...p,
          element: m
        });
      } catch {
        g = new he(p);
      }
    else
      g = new he(p);
    g.finished.then(() => {
      this.notifyFinished();
    }).catch(G), this.pendingTimeline && (this.stopTimeline = g.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = g;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), ba()), this._animation;
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
function Zs(t, e, n, i = 0, s = 1) {
  const r = Array.from(t).sort((u, l) => u.sortNodePosition(l)).indexOf(e), o = t.size, a = (o - 1) * i;
  return typeof n == "function" ? n(r, o) : s === 1 ? r * i : a - r * i;
}
const ri = 30, Ua = (t) => !isNaN(parseFloat(t));
class Wa {
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
    this.current = e, this.updatedAt = U.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Ua(this.current));
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
    return process.env.NODE_ENV !== "production" && Tn(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new xn());
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
    return /* @__PURE__ */ vs(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Vt(t, e) {
  return new Wa(t, e);
}
function Js(t, e) {
  if (t?.inherit && e) {
    const { inherit: n, ...i } = t;
    return { ...e, ...i };
  }
  return t;
}
function En(t, e) {
  const n = t?.[e] ?? t?.default ?? t;
  return n !== t ? Js(n, t) : n;
}
const $a = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Ka = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), za = {
  type: "keyframes",
  duration: 0.8
}, Ha = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Ga = (t, { keyframes: e }) => e.length > 2 ? za : kt.has(t) ? t.startsWith("scale") ? Ka(e[1]) : $a : Ha, _a = /* @__PURE__ */ new Set([
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
function Ya(t) {
  for (const e in t)
    if (!_a.has(e))
      return !0;
  return !1;
}
const Rn = (t, e, n, i = {}, s, r) => (o) => {
  const a = En(i, t) || {}, c = a.delay || i.delay || 0;
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
  Ya(a) || Object.assign(l, Ga(t, l)), l.duration && (l.duration = /* @__PURE__ */ $(l.duration)), l.repeatDelay && (l.repeatDelay = /* @__PURE__ */ $(l.repeatDelay)), l.from !== void 0 && (l.keyframes[0] = l.from);
  let h = !1;
  if ((l.type === !1 || l.duration === 0 && !l.repeatDelay) && (Qe(l), l.delay === 0 && (h = !0)), (at.instantAnimations || at.skipAnimations || s?.shouldSkipAnimations || a.skipAnimations) && (h = !0, Qe(l), l.delay = 0), l.allowFlatten = !a.type && !a.ease, h && !r && e.get() !== void 0) {
    const f = Te(l.keyframes, a);
    if (f !== void 0) {
      E.update(() => {
        l.onUpdate(f), l.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new he(l) : new Na(l);
}, Xa = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function qa(t) {
  const e = Xa.exec(t);
  if (!e)
    return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
const Za = 4;
function Qs(t, e, n = 1) {
  ot(n <= Za, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [i, s] = qa(t);
  if (!i)
    return;
  const r = window.getComputedStyle(e).getPropertyValue(i);
  if (r) {
    const o = r.trim();
    return ps(o) ? parseFloat(o) : o;
  }
  return Sn(s) ? Qs(s, e, n + 1) : s;
}
function ai(t) {
  const e = [{}, {}];
  return t?.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function kn(t, e, n, i) {
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
  return kn(i, e, n !== void 0 ? n : i.custom, t);
}
const to = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Rt
]), tn = (t) => Array.isArray(t);
function Ja(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Vt(n));
}
function Qa(t) {
  return tn(t) ? t[t.length - 1] || 0 : t;
}
function tl(t, e) {
  const n = yt(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...r } = n || {};
  r = { ...r, ...i };
  for (const o in r) {
    const a = Qa(r[o]);
    Ja(t, o, a);
  }
}
const j = (t) => !!(t && t.getVelocity);
function el(t) {
  return !!(j(t) && t.add);
}
function en(t, e) {
  const n = t.getValue("willChange");
  if (el(n))
    return n.add(e);
  if (!n && at.WillChange) {
    const i = new at.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
function Ln(t) {
  return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
const nl = "framerAppearId", eo = "data-" + Ln(nl);
function no(t) {
  return t.props[eo];
}
function il({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function io(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  let { transition: r, transitionEnd: o, ...a } = e;
  const c = t.getDefaultTransition();
  r = r ? Js(r, c) : c;
  const u = r?.reduceMotion, l = r?.skipAnimations;
  i && (r = i);
  const h = [], f = s && t.animationState && t.animationState.getState()[s], p = r?.path;
  p && p.animateVisualElement(t, a, r, n, h);
  for (const d in a) {
    const m = t.getValue(d, t.latestValues[d] ?? null), g = a[d];
    if (g === void 0 || f && il(f, d))
      continue;
    const y = {
      delay: n,
      ...En(r || {}, d)
    };
    l && (y.skipAnimations = !0);
    const x = m.get();
    if (x !== void 0 && !m.isAnimating() && !Array.isArray(g) && g === x && !y.velocity) {
      E.update(() => m.set(g));
      continue;
    }
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const C = no(t);
      if (C) {
        const b = window.MotionHandoffAnimation(C, d, E);
        b !== null && (y.startTime = b, v = !0);
      }
    }
    en(t, d);
    const T = u ?? t.shouldReduceMotion;
    m.start(Rn(d, m, g, T && to.has(d) ? { type: !1 } : y, t, v));
    const A = m.animation;
    A && h.push(A);
  }
  if (o) {
    const d = () => E.update(() => {
      o && tl(t, o);
    });
    h.length ? Promise.all(h).then(d) : d();
  }
  return h;
}
function nn(t, e, n = {}) {
  const i = yt(t, e, n.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: s = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const r = i ? () => Promise.all(io(t, i, n)) : () => Promise.resolve(), o = t.variantChildren && t.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: l, staggerDirection: h } = s;
    return sl(t, e, c, u, l, h, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [c, u] = a === "beforeChildren" ? [r, o] : [o, r];
    return c().then(() => u());
  } else
    return Promise.all([r(), o(n.delay)]);
}
function sl(t, e, n = 0, i = 0, s = 0, r = 1, o) {
  const a = [];
  for (const c of t.variantChildren)
    c.notify("AnimationStart", e), a.push(nn(c, e, {
      ...o,
      delay: n + (typeof i == "function" ? 0 : i) + Zs(t.variantChildren, c, i, s, r)
    }).then(() => c.notify("AnimationComplete", e)));
  return Promise.all(a);
}
function ol(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((r) => nn(t, r, n));
    i = Promise.all(s);
  } else if (typeof e == "string")
    i = nn(t, e, n);
  else {
    const s = typeof e == "function" ? yt(t, e, n.custom) : e;
    i = Promise.all(io(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const rl = {
  test: (t) => t === "auto",
  parse: (t) => t
}, so = (t) => (e) => e.test(t), oo = [Et, w, tt, st, Rr, Er, rl], li = (t) => oo.find(so(t));
function al(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || gs(t) : !0;
}
const ll = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function cl(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(Pn) || [];
  if (!i)
    return t;
  const s = n.replace(i, "");
  let r = ll.has(e) ? 1 : 0;
  return i !== n && (r *= 100), e + "(" + r + s + ")";
}
const ul = /\b([a-z-]*)\(.*?\)/gu, sn = {
  ...X,
  getAnimatableNone: (t) => {
    const e = t.match(ul);
    return e ? e.map(cl).join(" ") : t;
  }
}, on = {
  ...X,
  getAnimatableNone: (t) => {
    const e = X.parse(t);
    return X.createTransformer(t)(e.map((i) => typeof i == "number" ? 0 : typeof i == "object" ? { ...i, alpha: 1 } : i));
  }
}, ci = {
  ...Et,
  transform: Math.round
}, hl = {
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
  ...hl,
  zIndex: ci,
  // SVG
  fillOpacity: Nt,
  strokeOpacity: Nt,
  numOctaves: ci
}, fl = {
  ...fe,
  // Color props
  color: L,
  backgroundColor: L,
  outlineColor: L,
  fill: L,
  stroke: L,
  // Border props
  borderColor: L,
  borderTopColor: L,
  borderRightColor: L,
  borderBottomColor: L,
  borderLeftColor: L,
  filter: sn,
  WebkitFilter: sn,
  mask: on,
  WebkitMask: on
}, ro = (t) => fl[t], dl = /* @__PURE__ */ new Set([sn, on]);
function ao(t, e) {
  let n = ro(t);
  return dl.has(n) || (n = X), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const pl = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function ml(t, e, n) {
  let i = 0, s;
  for (; i < t.length && !s; ) {
    const r = t[i];
    typeof r == "string" && !pl.has(r) && At(r).values.length && (s = t[i]), i++;
  }
  if (s && n)
    for (const r of e)
      t[r] = ao(n, s);
}
class gl extends Dn {
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
      if (typeof h == "string" && (h = h.trim(), Sn(h))) {
        const f = Qs(h, n.current);
        f !== void 0 && (e[l] = f), l === e.length - 1 && (this.finalKeyframe = h);
      }
    }
    if (this.resolveNoneKeyframes(), !to.has(i) || e.length !== 2)
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
      (e[s] === null || al(e[s])) && i.push(s);
    i.length && ml(e, i, n);
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
function lo(t, e, n) {
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
const rn = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function Jt(t) {
  return ms(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
}
const { schedule: Bn } = /* @__PURE__ */ Ds(queueMicrotask, !1), Y = {
  x: !1,
  y: !1
};
function co() {
  return Y.x || Y.y;
}
function yl(t) {
  return t === "x" || t === "y" ? Y[t] ? null : (Y[t] = !0, () => {
    Y[t] = !1;
  }) : Y.x || Y.y ? null : (Y.x = Y.y = !0, () => {
    Y.x = Y.y = !1;
  });
}
function uo(t, e) {
  const n = lo(t), i = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function vl(t) {
  return !(t.pointerType === "touch" || co());
}
function xl(t, e, n = {}) {
  const [i, s, r] = uo(t, n);
  return i.forEach((o) => {
    let a = !1, c = !1, u;
    const l = () => {
      o.removeEventListener("pointerleave", d);
    }, h = (g) => {
      u && (u(g), u = void 0), l();
    }, f = (g) => {
      a = !1, window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f), c && (c = !1, h(g));
    }, p = () => {
      a = !0, window.addEventListener("pointerup", f, s), window.addEventListener("pointercancel", f, s);
    }, d = (g) => {
      if (g.pointerType !== "touch") {
        if (a) {
          c = !0;
          return;
        }
        h(g);
      }
    }, m = (g) => {
      if (!vl(g))
        return;
      c = !1;
      const y = e(o, g);
      typeof y == "function" && (u = y, o.addEventListener("pointerleave", d, s));
    };
    o.addEventListener("pointerenter", m, s), o.addEventListener("pointerdown", p, s);
  }), r;
}
const ho = (t, e) => e ? t === e ? !0 : ho(t, e.parentElement) : !1, Fn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, Tl = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function wl(t) {
  return Tl.has(t.tagName) || t.isContentEditable === !0;
}
const bl = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function Sl(t) {
  return bl.has(t.tagName) || t.isContentEditable === !0;
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
const Pl = (t, e) => {
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
  return Fn(t) && !co();
}
const fi = /* @__PURE__ */ new WeakSet();
function Al(t, e, n = {}) {
  const [i, s, r] = uo(t, n), o = (a) => {
    const c = a.currentTarget;
    if (!hi(a) || fi.has(a))
      return;
    Qt.add(c), n.stopPropagation && fi.add(a);
    const u = e(c, a), l = (p, d) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", f), Qt.has(c) && Qt.delete(c), hi(p) && typeof u == "function" && u(p, { success: d });
    }, h = (p) => {
      l(p, c === window || c === document || n.useGlobalTarget || ho(c, p.target));
    }, f = (p) => {
      l(p, !1);
    };
    window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", f, s);
  };
  return i.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s), Jt(a) && (a.addEventListener("focus", (u) => Pl(u, s)), !wl(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), r;
}
function In(t) {
  return ms(t) && "ownerSVGElement" in t;
}
const te = /* @__PURE__ */ new WeakMap();
let ee;
const fo = (t, e, n) => (i, s) => s && s[0] ? s[0][t + "Size"] : In(i) && "getBBox" in i ? i.getBBox()[e] : i[n], Vl = /* @__PURE__ */ fo("inline", "width", "offsetWidth"), Cl = /* @__PURE__ */ fo("block", "height", "offsetHeight");
function Ml({ target: t, borderBoxSize: e }) {
  te.get(t)?.forEach((n) => {
    n(t, {
      get width() {
        return Vl(t, e);
      },
      get height() {
        return Cl(t, e);
      }
    });
  });
}
function Dl(t) {
  t.forEach(Ml);
}
function El() {
  typeof ResizeObserver > "u" || (ee = new ResizeObserver(Dl));
}
function Rl(t, e) {
  ee || El();
  const n = lo(t);
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
let St;
function kl() {
  St = () => {
    const t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    ne.forEach((e) => e(t));
  }, window.addEventListener("resize", St);
}
function Ll(t) {
  return ne.add(t), St || kl(), () => {
    ne.delete(t), !ne.size && typeof St == "function" && (window.removeEventListener("resize", St), St = void 0);
  };
}
function di(t, e) {
  return typeof t == "function" ? Ll(t) : Rl(t, e);
}
function Bl(t) {
  return In(t) && t.tagName === "svg";
}
const Fl = [...oo, L, X], Il = (t) => Fl.find(so(t)), pi = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Pt = () => ({
  x: pi(),
  y: pi()
}), mi = () => ({ min: 0, max: 0 }), B = () => ({
  x: mi(),
  y: mi()
}), Ol = /* @__PURE__ */ new WeakMap();
function we(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Ut(t) {
  return typeof t == "string" || Array.isArray(t);
}
const On = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], jn = ["initial", ...On];
function be(t) {
  return we(t.animate) || jn.some((e) => Ut(t[e]));
}
function po(t) {
  return !!(be(t) || t.variants);
}
function jl(t, e, n) {
  for (const i in e) {
    const s = e[i], r = n[i];
    if (j(s))
      t.addValue(i, s);
    else if (j(r))
      t.addValue(i, Vt(s, { owner: t }));
    else if (r !== s)
      if (t.hasValue(i)) {
        const o = t.getValue(i);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = t.getStaticValue(i);
        t.addValue(i, Vt(o !== void 0 ? o : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const an = { current: null }, mo = { current: !1 }, Nl = typeof window < "u";
function Ul() {
  if (mo.current = !0, !!Nl)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => an.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      an.current = !1;
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
function go(t) {
  de = t;
}
function Wl() {
  return de;
}
class $l {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Dn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const p = U.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, E.render(this.render, !1, !0));
    };
    const { latestValues: u, renderState: l } = a;
    this.latestValues = u, this.baseTarget = { ...u }, this.initialValues = n.initial ? { ...u } : {}, this.renderState = l, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.skipAnimationsConfig = r, this.options = c, this.blockInitialAnimation = !!o, this.isControllingVariants = be(n), this.isVariantNode = po(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: h, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in f) {
      const d = f[p];
      u[p] !== void 0 && j(d) && d.set(u[p]);
    }
  }
  mount(e) {
    if (this.hasBeenMounted)
      for (const n in this.initialValues)
        this.values.get(n)?.jump(this.initialValues[n]), this.latestValues[n] = this.initialValues[n];
    this.current = e, Ol.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (mo.current || Ul(), this.shouldReduceMotion = an.current), process.env.NODE_ENV !== "production" && Tn(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
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
    if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), n.accelerate && qs.has(e) && this.current instanceof HTMLElement) {
      const { factory: o, keyframes: a, times: c, ease: u, duration: l } = n.accelerate, h = new Ys({
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : B();
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
    this.prevMotionValues = jl(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return i === void 0 && n !== void 0 && (i = Vt(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (ps(i) || gs(i)) ? i = parseFloat(i) : !Il(i) && X.test(n) && (i = ao(e, n)), this.setBaseTarget(e, j(i) ? i.get() : i)), j(i) ? i.get() : i;
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
      const r = kn(this.props, n, this.presenceContext?.custom);
      r && (i = r[e]);
    }
    if (n && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !j(s) ? s : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new xn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    Bn.render(this.render);
  }
}
class yo extends $l {
  constructor() {
    super(...arguments), this.KeyframeResolver = gl;
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
function vo({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function Kl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function zl(t, e) {
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
function ln({ scale: t, scaleX: e, scaleY: n }) {
  return !Re(t) || !Re(e) || !Re(n);
}
function ft(t) {
  return ln(t) || xo(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function xo(t) {
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
function cn(t, e = 0, n = 1, i, s) {
  t.min = vi(t.min, e, n, i, s), t.max = vi(t.max, e, n, i, s);
}
function To(t, { x: e, y: n }) {
  cn(t.x, e.translate, e.scale, e.originPoint), cn(t.y, n.translate, n.scale, n.originPoint);
}
const xi = 0.999999999999, Ti = 1.0000000000001;
function Hl(t, e, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let r, o;
  for (let a = 0; a < s; a++) {
    r = n[a], o = r.projectionDelta;
    const { visualElement: c } = r.options;
    c && c.props.style && c.props.style.display === "contents" || (i && r.options.layoutScroll && r.scroll && r !== r.root && (Q(t.x, -r.scroll.offset.x), Q(t.y, -r.scroll.offset.y)), o && (e.x *= o.x.scale, e.y *= o.y.scale, To(t, o)), i && ft(r.latestValues) && ie(t, r.latestValues, r.layout?.layoutBox));
  }
  e.x < Ti && e.x > xi && (e.x = 1), e.y < Ti && e.y > xi && (e.y = 1);
}
function Q(t, e) {
  t.min += e, t.max += e;
}
function wi(t, e, n, i, s = 0.5) {
  const r = D(t.min, t.max, s);
  cn(t, e, n, r, i);
}
function bi(t, e) {
  return typeof t == "string" ? parseFloat(t) / 100 * (e.max - e.min) : t;
}
function ie(t, e, n) {
  const i = n ?? t;
  wi(t.x, bi(e.x, i.x), e.scaleX, e.scale, e.originX), wi(t.y, bi(e.y, i.y), e.scaleY, e.scale, e.originY);
}
function wo(t, e) {
  return vo(zl(t.getBoundingClientRect(), e));
}
function Gl(t, e, n) {
  const i = wo(t, n), { scroll: s } = e;
  return s && (Q(i.x, s.offset.x), Q(i.y, s.offset.y)), i;
}
const _l = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Yl = Rt.length;
function Xl(t, e, n) {
  let i = "", s = !0;
  for (let o = 0; o < Yl; o++) {
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
      const l = rn(c, fe[a]);
      if (!u) {
        s = !1;
        const h = _l[a] || a;
        i += `${h}(${l}) `;
      }
      n && (e[a] = l);
    }
  }
  const r = t.pathRotation;
  return r && (s = !1, i += `rotate(${rn(r, fe.pathRotation)}) `), i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function Nn(t, e, n) {
  const { style: i, vars: s, transformOrigin: r } = t;
  let o = !1, a = !1;
  for (const c in e) {
    const u = e[c];
    if (kt.has(c)) {
      o = !0;
      continue;
    } else if (Rs(c)) {
      s[c] = u;
      continue;
    } else {
      const l = rn(u, fe[c]);
      c.startsWith("origin") ? (a = !0, r[c] = l) : i[c] = l;
    }
  }
  if (e.transform || (o || n ? i.transform = Xl(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: c = "50%", originY: u = "50%", originZ: l = 0 } = r;
    i.transformOrigin = `${c} ${u} ${l}`;
  }
}
function bo(t, { style: e, vars: n }, i, s) {
  const r = t.style;
  let o;
  for (o in e)
    r[o] = e[o];
  s?.applyProjectionStyles(r, i);
  for (o in n)
    r.setProperty(o, n[o]);
}
function Si(t, e) {
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
    const n = Si(t, e.target.x), i = Si(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, ql = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, s = X.parse(t);
    if (s.length > 5)
      return i;
    const r = X.createTransformer(t), o = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * e.x, c = n.y.scale * e.y;
    s[0 + o] /= a, s[1 + o] /= c;
    const u = D(a, c, 0.5);
    return typeof s[2 + o] == "number" && (s[2 + o] /= u), typeof s[3 + o] == "number" && (s[3 + o] /= u), r(s);
  }
}, un = {
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
  boxShadow: ql
};
function So(t, { layout: e, layoutId: n }) {
  return kt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!un[t] || t === "opacity");
}
function Un(t, e, n) {
  const i = t.style, s = e?.style, r = {};
  if (!i)
    return r;
  for (const o in i)
    (j(i[o]) || s && j(s[o]) || So(o, t) || n?.getValue(o)?.liveStyle !== void 0) && (r[o] = i[o]);
  return r;
}
function Zl(t) {
  return window.getComputedStyle(t);
}
class Jl extends yo {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = bo;
  }
  readValueFromInstance(e, n) {
    if (kt.has(n))
      return this.projection?.isProjecting ? Ye(n) : ya(e, n);
    {
      const i = Zl(e), s = (Rs(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return wo(e, n);
  }
  build(e, n, i) {
    Nn(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Un(e, n, i);
  }
}
const Ql = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, tc = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function ec(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const r = s ? Ql : tc;
  t[r.offset] = `${-i}`, t[r.array] = `${e} ${n}`;
}
const nc = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function Po(t, {
  attrX: e,
  attrY: n,
  attrScale: i,
  pathLength: s,
  pathSpacing: r = 1,
  pathOffset: o = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, c, u, l) {
  if (Nn(t, a, u), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: f } = t;
  h.transform && (f.transform = h.transform, delete h.transform), (f.transform || h.transformOrigin) && (f.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), f.transform && (f.transformBox = l?.transformBox ?? "fill-box", delete h.transformBox);
  for (const p of nc)
    h[p] !== void 0 && (f[p] = h[p], delete h[p]);
  e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), i !== void 0 && (h.scale = i), s !== void 0 && ec(h, s, r, o, !1);
}
const Ao = /* @__PURE__ */ new Set([
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
function ic(t, e, n, i) {
  bo(t, e, void 0, i);
  for (const s in e.attrs)
    t.setAttribute(Ao.has(s) ? s : Ln(s), e.attrs[s]);
}
function Co(t, e, n) {
  const i = Un(t, e, n);
  for (const s in t)
    if (j(t[s]) || j(e[s])) {
      const r = Rt.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[r] = t[s];
    }
  return i;
}
class sc extends yo {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = B;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (kt.has(n)) {
      const i = ro(n);
      return i && i.default || 0;
    }
    return n = Ao.has(n) ? n : Ln(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Co(e, n, i);
  }
  build(e, n, i) {
    Po(e, n, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(e, n, i, s) {
    ic(e, n, i, s);
  }
  mount(e) {
    this.isSVGTag = Vo(e.tagName), super.mount(e);
  }
}
const oc = jn.length;
function Mo(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Mo(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < oc; n++) {
    const i = jn[n], s = t.props[i];
    (Ut(s) || s === !1) && (e[i] = s);
  }
  return e;
}
function Do(t, e) {
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
const rc = [...On].reverse(), ac = On.length;
function lc(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => ol(t, n, i)));
}
function cc(t) {
  let e = lc(t), n = Pi(), i = !0, s = !1;
  const r = (u) => (l, h) => {
    const f = yt(t, h, u === "exit" ? t.presenceContext?.custom : void 0);
    if (f) {
      const { transition: p, transitionEnd: d, ...m } = f;
      l = { ...l, ...m, ...d };
    }
    return l;
  };
  function o(u) {
    e = u(t);
  }
  function a(u) {
    const { props: l } = t, h = Mo(t.parent) || {}, f = [], p = /* @__PURE__ */ new Set();
    let d = {}, m = 1 / 0;
    for (let y = 0; y < ac; y++) {
      const x = rc[y], v = n[x], T = l[x] !== void 0 ? l[x] : h[x], A = Ut(T), C = x === u ? v.isActive : null;
      C === !1 && (m = y);
      let b = T === h[x] && T !== l[x] && A;
      if (b && (i || s) && t.manuallyAnimateOnMount && (b = !1), v.protectedKeys = { ...d }, // If it isn't active and hasn't *just* been set as inactive
      !v.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
      !T && !v.prevProp || // Or if the prop doesn't define an animation
      we(T) || typeof T == "boolean")
        continue;
      if (x === "exit" && v.isActive && C !== !0) {
        v.prevResolvedValues && (d = {
          ...d,
          ...v.prevResolvedValues
        });
        continue;
      }
      const S = uc(v.prevProp, T);
      let V = S || // If we're making this variant active, we want to always make it active
      x === u && v.isActive && !b && A || // If we removed a higher-priority variant (i is in reverse order)
      y > m && A, P = !1;
      const M = Array.isArray(T) ? T : [T];
      let k = M.reduce(r(x), {});
      C === !1 && (k = {});
      const { prevResolvedValues: nt = {} } = v, q = {
        ...nt,
        ...k
      }, it = (I) => {
        V = !0, p.has(I) && (P = !0, p.delete(I)), v.needsAnimating[I] = !0;
        const z = t.getValue(I);
        z && (z.liveStyle = !1);
      };
      for (const I in q) {
        const z = k[I], ut = nt[I];
        if (d.hasOwnProperty(I))
          continue;
        let xt = !1;
        tn(z) && tn(ut) ? xt = !Do(z, ut) || S : xt = z !== ut, xt ? z != null ? it(I) : p.add(I) : z !== void 0 && p.has(I) ? it(I) : v.protectedKeys[I] = !0;
      }
      v.prevProp = T, v.prevResolvedValues = k, v.isActive && (d = { ...d, ...k }), (i || s) && t.blockInitialAnimation && (V = !1);
      const Z = b && S;
      V && (!Z || P) && f.push(...M.map((I) => {
        const z = { type: x };
        if (typeof I == "string" && (i || s) && !Z && t.manuallyAnimateOnMount && t.parent) {
          const { parent: ut } = t, xt = yt(ut, I);
          if (ut.enteringChildren && xt) {
            const { delayChildren: Qo } = xt.transition || {};
            z.delay = Zs(ut.enteringChildren, t, Qo);
          }
        }
        return {
          animation: I,
          options: z
        };
      }));
    }
    if (p.size) {
      const y = {};
      if (typeof l.initial != "boolean") {
        const x = yt(t, Array.isArray(l.initial) ? l.initial[0] : l.initial);
        x && x.transition && (y.transition = x.transition);
      }
      p.forEach((x) => {
        const v = t.getBaseTarget(x), T = t.getValue(x);
        T && (T.liveStyle = !0), y[x] = v ?? null;
      }), f.push({ animation: y });
    }
    let g = !!f.length;
    return i && (l.initial === !1 || l.initial === l.animate) && !t.manuallyAnimateOnMount && (g = !1), i = !1, s = !1, g ? e(f) : Promise.resolve();
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
      n = Pi(), s = !0;
    }
  };
}
function uc(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Do(e, t) : !1;
}
function ht(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Pi() {
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
function hn(t, e) {
  t.min = e.min, t.max = e.max;
}
function _(t, e) {
  hn(t.x, e.x), hn(t.y, e.y);
}
function Ai(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
const Eo = 1e-4, hc = 1 - Eo, fc = 1 + Eo, Ro = 0.01, dc = 0 - Ro, pc = 0 + Ro;
function W(t) {
  return t.max - t.min;
}
function mc(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Vi(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = D(e.min, e.max, t.origin), t.scale = W(n) / W(e), t.translate = D(n.min, n.max, t.origin) - t.originPoint, (t.scale >= hc && t.scale <= fc || isNaN(t.scale)) && (t.scale = 1), (t.translate >= dc && t.translate <= pc || isNaN(t.translate)) && (t.translate = 0);
}
function It(t, e, n, i) {
  Vi(t.x, e.x, n.x, i ? i.originX : void 0), Vi(t.y, e.y, n.y, i ? i.originY : void 0);
}
function Ci(t, e, n, i = 0) {
  const s = i ? D(n.min, n.max, i) : n.min;
  t.min = s + e.min, t.max = t.min + W(e);
}
function gc(t, e, n, i) {
  Ci(t.x, e.x, n.x, i?.x), Ci(t.y, e.y, n.y, i?.y);
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
function yc(t, e = 0, n = 1, i = 0.5, s, r = t, o = t) {
  if (tt.test(e) && (e = parseFloat(e), e = D(o.min, o.max, e / 100) - o.min), typeof e != "number")
    return;
  let a = D(r.min, r.max, i);
  t === r && (a -= e), t.min = Di(t.min, e, n, a, s), t.max = Di(t.max, e, n, a, s);
}
function Ei(t, e, [n, i, s], r, o) {
  yc(t, e[n], e[i], e[s], e.scale, r, o);
}
const vc = ["x", "scaleX", "originX"], xc = ["y", "scaleY", "originY"];
function Ri(t, e, n, i) {
  Ei(t.x, e, vc, n ? n.x : void 0, i ? i.x : void 0), Ei(t.y, e, xc, n ? n.y : void 0, i ? i.y : void 0);
}
function ki(t) {
  return t.translate === 0 && t.scale === 1;
}
function ko(t) {
  return ki(t.x) && ki(t.y);
}
function Li(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Tc(t, e) {
  return Li(t.x, e.x) && Li(t.y, e.y);
}
function Bi(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Lo(t, e) {
  return Bi(t.x, e.x) && Bi(t.y, e.y);
}
function Fi(t) {
  return W(t.x) / W(t.y);
}
function Ii(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
function J(t) {
  return [t("x"), t("y")];
}
function wc(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x, r = t.y.translate / e.y, o = n?.z || 0;
  if ((s || r || o) && (i = `translate3d(${s}px, ${r}px, ${o}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: l, pathRotation: h, rotateX: f, rotateY: p, skewX: d, skewY: m } = n;
    u && (i = `perspective(${u}px) ${i}`), l && (i += `rotate(${l}deg) `), h && (i += `rotate(${h}deg) `), f && (i += `rotateX(${f}deg) `), p && (i += `rotateY(${p}deg) `), d && (i += `skewX(${d}deg) `), m && (i += `skewY(${m}deg) `);
  }
  const a = t.x.scale * e.x, c = t.y.scale * e.y;
  return (a !== 1 || c !== 1) && (i += `scale(${a}, ${c})`), i || "none";
}
const Bo = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
], bc = Bo.length, Oi = (t) => typeof t == "string" ? parseFloat(t) : t, ji = (t) => typeof t == "number" || w.test(t);
function Sc(t, e, n, i, s, r) {
  s ? (t.opacity = D(0, n.opacity ?? 1, Pc(i)), t.opacityExit = D(e.opacity ?? 1, 0, Ac(i))) : r && (t.opacity = D(e.opacity ?? 1, n.opacity ?? 1, i));
  for (let o = 0; o < bc; o++) {
    const a = Bo[o];
    let c = Ni(e, a), u = Ni(n, a);
    if (c === void 0 && u === void 0)
      continue;
    c || (c = 0), u || (u = 0), c === 0 || u === 0 || ji(c) === ji(u) ? (t[a] = Math.max(D(Oi(c), Oi(u), i), 0), (tt.test(u) || tt.test(c)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = D(e.rotate || 0, n.rotate || 0, i));
}
function Ni(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Pc = /* @__PURE__ */ Fo(0, 0.5, As), Ac = /* @__PURE__ */ Fo(0.5, 0.95, G);
function Fo(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ jt(t, e, i));
}
function Vc(t, e, n) {
  const i = j(t) ? t : Vt(t);
  return i.start(Rn("", i, e, n)), i.animation;
}
function Wt(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
const Cc = (t, e) => t.depth - e.depth;
class Mc {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    vn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    ae(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Cc), this.isDirty = !1, this.children.forEach(e);
  }
}
function Dc(t, e) {
  const n = U.now(), i = ({ timestamp: s }) => {
    const r = s - n;
    r >= e && (lt(i), t(r - e));
  };
  return E.setup(i, !0), () => lt(i);
}
function se(t) {
  return j(t) ? t.get() : t;
}
class Ec {
  constructor() {
    this.members = [];
  }
  add(e) {
    vn(this.members, e);
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
}, ke = ["", "X", "Y", "Z"], Rc = 1e3;
let kc = 0;
function Le(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function Io(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = no(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: r } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", E, !(s || r));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && Io(i);
}
function Oo({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(o = {}, a = e?.()) {
      this.id = kc++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Fc), this.nodes.forEach(Wc), this.nodes.forEach($c), this.nodes.forEach(Ic);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Mc());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new xn()), this.eventHandlers.get(o).add(a);
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
      this.isSVG = In(o) && !Bl(o), this.instance = o;
      const { layoutId: a, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (c || a) && (this.isLayoutDirty = !0), t) {
        let l, h = 0;
        const f = () => this.root.updateBlockedByResize = !1;
        E.read(() => {
          h = window.innerWidth;
        }), t(o, () => {
          const p = window.innerWidth;
          p !== h && (h = p, this.root.updateBlockedByResize = !0, l && l(), l = Dc(f, 250), oe.hasAnimatedSinceResize && (oe.hasAnimatedSinceResize = !1, this.nodes.forEach($i)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || c) && this.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: h, hasRelativeLayoutChanged: f, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const d = this.options.transition || u.getDefaultTransition() || _c, { onLayoutAnimationStart: m, onLayoutAnimationComplete: g } = u.getProps(), y = !this.targetLayout || !Lo(this.targetLayout, p), x = !h && f;
        if (this.options.layoutRoot || this.resumeFrom || x || h && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const v = {
            ...En(d, "layout"),
            onPlay: m,
            onComplete: g
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (v.delay = 0, v.type = !1), this.startAnimation(v), this.setAnimationOrigin(l, x, v.path);
        } else
          h || $i(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Kc), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Io(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), c && this.nodes.forEach(jc), this.nodes.forEach(Ui);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Wi);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Nc), this.nodes.forEach(Uc), this.nodes.forEach(Lc), this.nodes.forEach(Bc)) : this.nodes.forEach(Wi), this.clearAllSnapshots();
      const a = U.now();
      O.delta = et(0, 1e3 / 60, a - O.timestamp), O.timestamp = a, O.isProcessing = !0, Pe.update.process(O), Pe.preRender.process(O), Pe.render.process(O), O.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Bn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Oc), this.sharedNodes.forEach(zc);
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
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = B()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !ko(this.projectionDelta), c = this.getTransformTemplate(), u = c ? c(this.latestValues, "") : void 0, l = u !== this.prevTransformTemplateValue;
      o && this.instance && (a || ft(this.latestValues) || l) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return o && (c = this.removeTransform(c)), Yc(c), {
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
        return B();
      const a = o.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Xc))) {
        const { scroll: u } = this.root;
        u && (Q(a.x, u.offset.x), Q(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      const a = B();
      if (_(a, o), this.scroll?.wasRoot)
        return a;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: l, options: h } = u;
        u !== this.root && l && h.layoutScroll && (l.wasRoot && _(a, o), Q(a.x, l.offset.x), Q(a.y, l.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1, c) {
      const u = c || B();
      _(u, o);
      for (let l = 0; l < this.path.length; l++) {
        const h = this.path[l];
        !a && h.options.layoutScroll && h.scroll && h !== h.root && (Q(u.x, -h.scroll.offset.x), Q(u.y, -h.scroll.offset.y)), ft(h.latestValues) && ie(u, h.latestValues, h.layout?.layoutBox);
      }
      return ft(this.latestValues) && ie(u, this.latestValues, this.layout?.layoutBox), u;
    }
    removeTransform(o) {
      const a = B();
      _(a, o);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!ft(u.latestValues))
          continue;
        let l;
        u.instance && (ln(u.latestValues) && u.updateSnapshot(), l = B(), _(l, u.measurePageBox())), Ri(a, u.latestValues, u.snapshot?.layoutBox, l);
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
      f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = B(), this.targetWithTransforms = B()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), gc(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : _(this.target, this.layout.layoutBox), To(this.target, this.targetDelta)) : _(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ln(this.parent.latestValues) || xo(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(o, a, c) {
      this.relativeParent = o, this.linkedParentVersion = o.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = B(), this.relativeTargetOrigin = B(), me(this.relativeTargetOrigin, a, c, this.options.layoutAnchor || void 0), _(this.relativeTarget, this.relativeTargetOrigin);
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
      Hl(this.layoutCorrected, this.treeScale, this.path, a), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = B());
      const { target: p } = o;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ai(this.prevProjectionDelta.x, this.projectionDelta.x), Ai(this.prevProjectionDelta.y, this.projectionDelta.y)), It(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== f || !Ii(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ii(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
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
      this.prevProjectionDelta = Pt(), this.projectionDelta = Pt(), this.projectionDeltaWithTransform = Pt();
    }
    setAnimationOrigin(o, a = !1, c) {
      const u = this.snapshot, l = u ? u.latestValues : {}, h = { ...this.latestValues }, f = Pt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const p = B(), d = u ? u.source : void 0, m = this.layout ? this.layout.source : void 0, g = d !== m, y = this.getStack(), x = !y || y.members.length <= 1, v = !!(g && !x && this.options.crossfade === !0 && !this.path.some(Gc));
      this.animationProgress = 0;
      let T;
      const A = c?.interpolateProjection(o);
      this.mixTargetDelta = (C) => {
        const b = C / 1e3, S = A?.(b);
        S ? (f.x.translate = S.x, f.x.scale = D(o.x.scale, 1, b), f.x.origin = o.x.origin, f.x.originPoint = o.x.originPoint, f.y.translate = S.y, f.y.scale = D(o.y.scale, 1, b), f.y.origin = o.y.origin, f.y.originPoint = o.y.originPoint) : (Ki(f.x, o.x, b), Ki(f.y, o.y, b)), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (me(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), Hc(this.relativeTarget, this.relativeTargetOrigin, p, b), T && Tc(this.relativeTarget, T) && (this.isProjectionDirty = !1), T || (T = B()), _(T, this.relativeTarget)), g && (this.animationValues = h, Sc(h, l, this.latestValues, b, v, x)), S && S.rotate !== void 0 && (this.animationValues || (this.animationValues = h), this.animationValues.pathRotation = S.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (lt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = E.update(() => {
        oe.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Vt(0)), this.motionValue.jump(0, !1), this.currentAnimation = Vc(this.motionValue, [0, 1e3], {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Rc), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: c, layout: u, latestValues: l } = o;
      if (!(!a || !c || !u)) {
        if (this !== o && this.layout && u && jo(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          c = this.target || B();
          const h = W(this.layout.layoutBox.x);
          c.x.min = o.target.x.min, c.x.max = c.x.min + h;
          const f = W(this.layout.layoutBox.y);
          c.y.min = o.target.y.min, c.y.max = c.y.min + f;
        }
        _(a, c), ie(a, l), It(this.projectionDeltaWithTransform, this.layoutCorrected, a, l);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Ec()), this.sharedNodes.get(o).add(a);
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
      let h = wc(this.projectionDeltaWithTransform, this.treeScale, l);
      c && (h = c(l, h)), o.transform = h;
      const { x: f, y: p } = this.projectionDelta;
      o.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`, u.animationValues ? o.opacity = u === this ? l.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : l.opacityExit : o.opacity = u === this ? l.opacity !== void 0 ? l.opacity : "" : l.opacityExit !== void 0 ? l.opacityExit : 0;
      for (const d in un) {
        if (l[d] === void 0)
          continue;
        const { correct: m, applyTo: g, isCSSVariable: y } = un[d], x = h === "none" ? l[d] : m(l[d], u);
        if (g) {
          const v = g.length;
          for (let T = 0; T < v; T++)
            o[g[T]] = x;
        } else
          y ? this.options.visualElement.renderState.vars[d] = x : o[d] = x;
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
function Lc(t) {
  t.updateLayout();
}
function Bc(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: i } = t.layout, { animationType: s } = t.options, r = e.source !== t.layout.source;
    if (s === "size")
      J((l) => {
        const h = r ? e.measuredBox[l] : e.layoutBox[l], f = W(h);
        h.min = n[l].min, h.max = h.min + f;
      });
    else if (s === "x" || s === "y") {
      const l = s === "x" ? "y" : "x";
      hn(r ? e.measuredBox[l] : e.layoutBox[l], n[l]);
    } else jo(s, e.layoutBox, n) && J((l) => {
      const h = r ? e.measuredBox[l] : e.layoutBox[l], f = W(n[l]);
      h.max = h.min + f, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[l].max = t.relativeTarget[l].min + f);
    });
    const o = Pt();
    It(o, n, e.layoutBox);
    const a = Pt();
    r ? It(a, t.applyTransform(i, !0), e.measuredBox) : It(a, n, e.layoutBox);
    const c = !ko(o);
    let u = !1;
    if (!t.resumeFrom) {
      const l = t.getClosestProjectingParent();
      if (l && !l.resumeFrom) {
        const { snapshot: h, layout: f } = l;
        if (h && f) {
          const p = t.options.layoutAnchor || void 0, d = B();
          me(d, e.layoutBox, h.layoutBox, p);
          const m = B();
          me(m, n, f.layoutBox, p), Lo(d, m) || (u = !0), l.options.layoutRoot && (t.relativeTarget = m, t.relativeTargetOrigin = d, t.relativeParent = l);
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
function Fc(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Ic(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Oc(t) {
  t.clearSnapshot();
}
function Ui(t) {
  t.clearMeasurements();
}
function jc(t) {
  t.isLayoutDirty = !0, t.updateLayout();
}
function Wi(t) {
  t.isLayoutDirty = !1;
}
function Nc(t) {
  t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout, t.isLayoutDirty = !0);
}
function Uc(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function $i(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function Wc(t) {
  t.resolveTargetDelta();
}
function $c(t) {
  t.calcProjection();
}
function Kc(t) {
  t.resetSkewAndRotation();
}
function zc(t) {
  t.removeLeadSnapshot();
}
function Ki(t, e, n) {
  t.translate = D(e.translate, 0, n), t.scale = D(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function zi(t, e, n, i) {
  t.min = D(e.min, n.min, i), t.max = D(e.max, n.max, i);
}
function Hc(t, e, n, i) {
  zi(t.x, e.x, n.x, i), zi(t.y, e.y, n.y, i);
}
function Gc(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const _c = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Hi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Gi = Hi("applewebkit/") && !Hi("chrome/") ? Math.round : G;
function _i(t) {
  t.min = Gi(t.min), t.max = Gi(t.max);
}
function Yc(t) {
  _i(t.x), _i(t.y);
}
function jo(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !mc(Fi(e), Fi(n), 0.2);
}
function Xc(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const qc = Oo({
  attachResizeListener: (t, e) => Wt(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), Be = {
  current: void 0
}, No = Oo({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Be.current) {
      const t = new qc({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Be.current = t;
    }
    return Be.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Wn = Ct({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function Yi(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function Zc(...t) {
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
function Jc(...t) {
  return ye.useCallback(Zc(...t), t);
}
class Qc extends ye.Component {
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
function tu({ children: t, isPresent: e, anchorX: n, anchorY: i, root: s, pop: r }) {
  const o = pn(), a = K(null), c = K({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: u } = N(Wn), l = t.props?.ref ?? t?.ref, h = Jc(a, l);
  return mn(() => {
    const { width: f, height: p, top: d, left: m, right: g, bottom: y, direction: x } = c.current;
    if (e || r === !1 || !a.current || !f || !p)
      return;
    const v = x === "rtl", T = n === "left" ? v ? `right: ${g}` : `left: ${m}` : v ? `left: ${m}` : `right: ${g}`, A = i === "bottom" ? `bottom: ${y}` : `top: ${d}`;
    a.current.dataset.motionPopId = o;
    const C = document.createElement("style");
    u && (C.nonce = u);
    const b = s ?? document.head;
    return b.appendChild(C), C.sheet && C.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${p}px !important;
            ${T}px !important;
            ${A}px !important;
          }
        `), () => {
      a.current?.removeAttribute("data-motion-pop-id"), b.contains(C) && b.removeChild(C);
    };
  }, [e]), F(Qc, { isPresent: e, childRef: a, sizeRef: c, pop: r, children: r === !1 ? t : ye.cloneElement(t, { ref: h }) });
}
const eu = ({ children: t, initial: e, isPresent: n, onExitComplete: i, custom: s, presenceAffectsLayout: r, mode: o, anchorX: a, anchorY: c, root: u }) => {
  const l = yn(nu), h = pn();
  let f = !0, p = vt(() => (f = !1, {
    id: h,
    initial: e,
    isPresent: n,
    custom: s,
    onExitComplete: (d) => {
      l.set(d, !0);
      for (const m of l.values())
        if (!m)
          return;
      i && i();
    },
    register: (d) => (l.set(d, !1), () => l.delete(d))
  }), [n, l, i]);
  return r && f && (p = { ...p }), vt(() => {
    l.forEach((d, m) => l.set(m, !1));
  }, [n]), ye.useEffect(() => {
    !n && !l.size && i && i();
  }, [n]), t = F(tu, { pop: o === "popLayout", isPresent: n, anchorX: a, anchorY: c, root: u, children: t }), F(xe.Provider, { value: p, children: t });
};
function nu() {
  return /* @__PURE__ */ new Map();
}
function Uo(t = !0) {
  const e = N(xe);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, r = pn();
  ve(() => {
    if (t)
      return s(r);
  }, [t]);
  const o = us(() => t && i && i(r), [r, i, t]);
  return !n && i ? [!1, o] : [!0];
}
const Yt = (t) => t.key || "";
function Xi(t) {
  const e = [];
  return or.forEach(t, (n) => {
    rr(n) && e.push(n);
  }), e;
}
const Sh = ({ children: t, custom: e, initial: n = !0, onExitComplete: i, presenceAffectsLayout: s = !0, mode: r = "sync", propagate: o = !1, anchorX: a = "left", anchorY: c = "top", root: u }) => {
  const [l, h] = Uo(o), f = vt(() => Xi(t), [t]), p = o && !l ? [] : f.map(Yt), d = K(!0), m = K(f), g = yn(() => /* @__PURE__ */ new Map()), y = K(/* @__PURE__ */ new Set()), [x, v] = re(f), [T, A] = re(f);
  ds(() => {
    d.current = !1, m.current = f;
    for (let S = 0; S < T.length; S++) {
      const V = Yt(T[S]);
      p.includes(V) ? (g.delete(V), y.current.delete(V)) : g.get(V) !== !0 && g.set(V, !1);
    }
  }, [T, p.length, p.join("-")]);
  const C = [];
  if (f !== x) {
    let S = [...f];
    for (let V = 0; V < T.length; V++) {
      const P = T[V], M = Yt(P);
      p.includes(M) || (S.splice(V, 0, P), C.push(P));
    }
    return r === "wait" && C.length && (S = C), A(Xi(S)), v(f), null;
  }
  process.env.NODE_ENV !== "production" && r === "wait" && T.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: b } = N(gn);
  return F(Ue, { children: T.map((S) => {
    const V = Yt(S), P = o && !l ? !1 : f === T || p.includes(V), M = () => {
      if (y.current.has(V))
        return;
      if (g.has(V))
        y.current.add(V), g.set(V, !0);
      else
        return;
      let k = !0;
      g.forEach((nt) => {
        nt || (k = !1);
      }), k && (b?.(), A(m.current), o && h?.(), i && i());
    };
    return F(eu, { isPresent: P, initial: !d.current || n ? void 0 : !1, custom: e, presenceAffectsLayout: s, mode: r, root: u, onExitComplete: P ? void 0 : M, anchorX: a, anchorY: c, children: S }, V);
  }) });
}, Wo = Ct({ strict: !1 }), qi = {
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
function iu() {
  if (Zi)
    return;
  const t = {};
  for (const e in qi)
    t[e] = {
      isEnabled: (n) => qi[e].some((i) => !!n[i])
    };
  go(t), Zi = !0;
}
function $o() {
  return iu(), Wl();
}
function su(t) {
  const e = $o();
  for (const n in t)
    e[n] = {
      ...e[n],
      ...t[n]
    };
  go(e);
}
const ou = /* @__PURE__ */ new Set([
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
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || ou.has(t);
}
let Ko = (t) => !ge(t);
function ru(t) {
  typeof t == "function" && (Ko = (e) => e.startsWith("on") ? !ge(e) : t(e));
}
try {
  ru(require("@emotion/is-prop-valid").default);
} catch {
}
function au(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || j(t[s]) || (Ko(s) || n === !0 && ge(s) || !e && !ge(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
const Se = /* @__PURE__ */ Ct({});
function lu(t, e) {
  if (be(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || Ut(n) ? n : void 0,
      animate: Ut(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function cu(t) {
  const { initial: e, animate: n } = lu(t, N(Se));
  return vt(() => ({ initial: e, animate: n }), [Ji(e), Ji(n)]);
}
function Ji(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const $n = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function zo(t, e, n) {
  for (const i in e)
    !j(e[i]) && !So(i, n) && (t[i] = e[i]);
}
function uu({ transformTemplate: t }, e) {
  return vt(() => {
    const n = $n();
    return Nn(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function hu(t, e) {
  const n = t.style || {}, i = {};
  return zo(i, n, t), Object.assign(i, uu(t, e)), i;
}
function fu(t, e) {
  const n = {}, i = hu(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
const Ho = () => ({
  ...$n(),
  attrs: {}
});
function du(t, e, n, i) {
  const s = vt(() => {
    const r = Ho();
    return Po(r, e, Vo(i), t.transformTemplate, t.style), {
      ...r.attrs,
      style: { ...r.style }
    };
  }, [e]);
  if (t.style) {
    const r = {};
    zo(r, t.style, t), s.style = { ...r, ...s.style };
  }
  return s;
}
const pu = [
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
function Kn(t) {
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
      !!(pu.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function mu(t, e, n, { latestValues: i }, s, r = !1, o) {
  const c = (o ?? Kn(t) ? du : fu)(e, i, s, t), u = au(e, typeof t == "string", r), l = t !== hs ? { ...u, ...c, ref: n } : {}, { children: h } = e, f = vt(() => j(h) ? h.get() : h, [h]);
  return ar(t, {
    ...l,
    children: f
  });
}
function gu({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, i, s) {
  return {
    latestValues: yu(n, i, s, t),
    renderState: e()
  };
}
function yu(t, e, n, i) {
  const s = {}, r = i(t, {});
  for (const f in r)
    s[f] = se(r[f]);
  let { initial: o, animate: a } = t;
  const c = be(t), u = po(t);
  e && u && !c && t.inherit !== !1 && (o === void 0 && (o = e.initial), a === void 0 && (a = e.animate));
  let l = n ? n.initial === !1 : !1;
  l = l || o === !1;
  const h = l ? a : o;
  if (h && typeof h != "boolean" && !we(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let p = 0; p < f.length; p++) {
      const d = kn(t, f[p]);
      if (d) {
        const { transitionEnd: m, transition: g, ...y } = d;
        for (const x in y) {
          let v = y[x];
          if (Array.isArray(v)) {
            const T = l ? v.length - 1 : 0;
            v = v[T];
          }
          v !== null && (s[x] = v);
        }
        for (const x in m)
          s[x] = m[x];
      }
    }
  }
  return s;
}
const Go = (t) => (e, n) => {
  const i = N(Se), s = N(xe), r = () => gu(t, e, i, s);
  return n ? r() : yn(r);
}, vu = /* @__PURE__ */ Go({
  scrapeMotionValuesFromProps: Un,
  createRenderState: $n
}), xu = /* @__PURE__ */ Go({
  scrapeMotionValuesFromProps: Co,
  createRenderState: Ho
}), Tu = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function wu(t, e, n) {
  const i = K(n);
  mn(() => {
    i.current = n;
  });
  const s = K(null);
  return us((r) => {
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
const _o = Ct({});
function Tt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function bu(t, e, n, i, s, r) {
  const { visualElement: o } = N(Se), a = N(Wo), c = N(xe), u = N(Wn), l = u.reducedMotion, h = u.skipAnimations, f = K(null), p = K(!1);
  i = i || a.renderer, !f.current && i && (f.current = i(t, {
    visualState: e,
    parent: o,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: l,
    skipAnimations: h,
    isSVG: r
  }), p.current && f.current && (f.current.manuallyAnimateOnMount = !0));
  const d = f.current, m = N(_o);
  d && !d.projection && s && (d.type === "html" || d.type === "svg") && Su(f.current, n, s, m);
  const g = K(!1);
  mn(() => {
    d && g.current && d.update(n, c);
  });
  const y = n[eo], x = K(!!y && typeof window < "u" && !window.MotionHandoffIsComplete?.(y) && window.MotionHasOptimisedAnimation?.(y));
  return ds(() => {
    p.current = !0, d && (g.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), d.scheduleRenderMicrotask(), x.current && d.animationState && d.animationState.animateChanges());
  }), ve(() => {
    d && (!x.current && d.animationState && d.animationState.animateChanges(), x.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(y);
    }), x.current = !1), d.enteringChildren = void 0);
  }), d;
}
function Su(t, e, n, i) {
  const { layoutId: s, layout: r, drag: o, dragConstraints: a, layoutScroll: c, layoutRoot: u, layoutAnchor: l, layoutCrossfade: h } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Yo(t.parent)), t.projection.setOptions({
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
function Yo(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Yo(t.parent);
}
function Fe(t, { forwardMotionProps: e = !1, type: n } = {}, i, s) {
  i && su(i);
  const r = n ? n === "svg" : Kn(t), o = r ? xu : vu;
  function a(u, l) {
    let h;
    const f = {
      ...N(Wn),
      ...u,
      layoutId: Pu(u)
    }, { isStatic: p } = f, d = cu(u), m = o(u, p);
    if (!p && typeof window < "u") {
      Au(f, i);
      const g = Vu(f);
      h = g.MeasureLayout, d.visualElement = bu(t, m, f, s, g.ProjectionNode, r);
    }
    return mt(Se.Provider, { value: d, children: [h && d.visualElement ? F(h, { visualElement: d.visualElement, ...f }) : null, mu(t, u, wu(m, d.visualElement, l), m, p, e, r)] });
  }
  a.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const c = lr(a);
  return c[Tu] = t, c;
}
function Pu({ layoutId: t }) {
  const e = N(gn).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Au(t, e) {
  const n = N(Wo).strict;
  if (process.env.NODE_ENV !== "production" && e && n) {
    const i = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? Dt(!1, i, "lazy-strict-mode") : ot(!1, i, "lazy-strict-mode");
  }
}
function Vu(t) {
  const e = $o(), { drag: n, layout: i } = e;
  if (!n && !i)
    return {};
  const s = { ...n, ...i };
  return {
    MeasureLayout: n?.isEnabled(t) || i?.isEnabled(t) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
function Cu(t, e) {
  if (typeof Proxy > "u")
    return Fe;
  const n = /* @__PURE__ */ new Map(), i = (r, o) => Fe(r, o, t, e), s = (r, o) => (process.env.NODE_ENV !== "production" && Tn(!1, "motion() is deprecated. Use motion.create() instead."), i(r, o));
  return new Proxy(s, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? i : (n.has(o) || n.set(o, Fe(o, void 0, t, e)), n.get(o))
  });
}
const Mu = (t, e) => e.isSVG ?? Kn(t) ? new sc(e) : new Jl(e, {
  allowProjection: t !== hs
});
class Du extends ct {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = cc(e));
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
let Eu = 0;
class Ru extends ct {
  constructor() {
    super(...arguments), this.id = Eu++, this.isExitComplete = !1;
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
const ku = {
  animation: {
    Feature: Du
  },
  exit: {
    Feature: Ru
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
const Lu = (t) => (e) => Fn(e) && t(e, Ht(e));
function Ot(t, e, n, i) {
  return Wt(t, e, Lu(n), i);
}
const Xo = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Qi = (t, e) => Math.abs(t - e);
function Bu(t, e) {
  const n = Qi(t.x, e.x), i = Qi(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
const ts = /* @__PURE__ */ new Set(["auto", "scroll"]);
class qo {
  constructor(e, n, { transformPagePoint: i, contextWindow: s = window, dragSnapToOrigin: r = !1, distanceThreshold: o = 3, element: a } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (p) => {
      this.handleScroll(p.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Xt(this.lastRawMoveEventInfo, this.transformPagePoint));
      const p = Ie(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, m = Bu(p.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!d && !m)
        return;
      const { point: g } = p, { timestamp: y } = O;
      this.history.push({ ...g, timestamp: y });
      const { onStart: x, onMove: v } = this.handlers;
      d || (x && x(this.lastMoveEvent, p), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, p);
    }, this.handlePointerMove = (p, d) => {
      this.lastMoveEvent = p, this.lastRawMoveEventInfo = d, this.lastMoveEventInfo = Xt(d, this.transformPagePoint), E.update(this.updatePoint, !0);
    }, this.handlePointerUp = (p, d) => {
      this.end();
      const { onEnd: m, onSessionEnd: g, resumeAnimation: y } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = Ie(p.type === "pointercancel" ? this.lastMoveEventInfo : Xt(d, this.transformPagePoint), this.history);
      this.startEvent && m && m(p, x), g && g(p, x);
    }, !Fn(e))
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
    delta: es(t, Zo(e)),
    offset: es(t, Fu(e)),
    velocity: Iu(e, 0.1)
  };
}
function Fu(t) {
  return t[0];
}
function Zo(t) {
  return t[t.length - 1];
}
function Iu(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const s = Zo(t);
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
function Ou(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? D(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? D(n, t, i.max) : Math.min(t, n)), t;
}
function ns(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function ju(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: ns(t.x, n, s),
    y: ns(t.y, e, i)
  };
}
function is(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Nu(t, e) {
  return {
    x: is(t.x, e.x),
    y: is(t.y, e.y)
  };
}
function Uu(t, e) {
  let n = 0.5;
  const i = W(t), s = W(e);
  return s > i ? n = /* @__PURE__ */ jt(e.min, e.max - i, t.min) : i > s && (n = /* @__PURE__ */ jt(t.min, t.max - s, e.min)), et(0, 1, n);
}
function Wu(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const fn = 0.35;
function $u(t = fn) {
  return t === !1 ? t = 0 : t === !0 && (t = fn), {
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
const Ku = /* @__PURE__ */ new WeakMap();
class zu {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = B(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: i } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const r = (h) => {
      n && this.snapToCursor(Ht(h).point), this.stopAnimation();
    }, o = (h, f) => {
      const { drag: p, dragPropagation: d, onDragStart: m } = this.getProps();
      if (p && !d && (this.openDragLock && this.openDragLock(), this.openDragLock = yl(p), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = f, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), J((y) => {
        let x = this.getAxisMotionValue(y).get() || 0;
        if (tt.test(x)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const T = v.layout.layoutBox[y];
            T && (x = W(T) * (parseFloat(x) / 100));
          }
        }
        this.originPoint[y] = x;
      }), m && E.update(() => m(h, f), !1, !0), en(this.visualElement, "transform");
      const { animationState: g } = this.visualElement;
      g && g.setActive("whileDrag", !0);
    }, a = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f;
      const { dragPropagation: p, dragDirectionLock: d, onDirectionLock: m, onDrag: g } = this.getProps();
      if (!p && !this.openDragLock)
        return;
      const { offset: y } = f;
      if (d && this.currentDirection === null) {
        this.currentDirection = Gu(y), this.currentDirection !== null && m && m(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, y), this.updateAxis("y", f.point, y), this.visualElement.render(), g && E.update(() => g(h, f), !1, !0);
    }, c = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f, this.stop(h, f), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => {
      const { dragSnapToOrigin: h } = this.getProps();
      (h || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new qo(e, {
      onSessionStart: r,
      onStart: o,
      onMove: a,
      onSessionEnd: c,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: l,
      distanceThreshold: i,
      contextWindow: Xo(this.visualElement),
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
    this.constraints && this.constraints[e] && (o = Ou(o, this.constraints[e], this.elastic[e])), r.set(o);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
    e && Tt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = ju(i.layoutBox, e) : this.constraints = !1, this.elastic = $u(n), s !== this.constraints && !Tt(e) && i && this.constraints && !this.hasMutatedConstraints && J((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = Wu(i.layoutBox[r], this.constraints[r]));
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
    const r = Gl(i, s.root, this.visualElement.getTransformPagePoint());
    let o = Nu(s.layout.layoutBox, r);
    if (n) {
      const a = n(Kl(o));
      this.hasMutatedConstraints = !!a, a && (o = vo(a));
    }
    return o;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: r, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), c = this.constraints || {}, u = J((l) => {
      if (!qt(l, n, this.currentDirection))
        return;
      let h = c && c[l] || {};
      (o === !0 || o === l) && (h = { min: 0, max: 0 });
      const f = s ? 200 : 1e6, p = s ? 40 : 1e7, d = {
        type: "inertia",
        velocity: i ? e[l] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...r,
        ...h
      };
      return this.startAxisValueAnimation(l, d);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return en(this.visualElement, e), i.start(Rn(e, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    J((e) => this.getAxisMotionValue(e).stop());
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
    J((n) => {
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
    J((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const c = a.get();
        s[o] = Uu({ min: c, max: c }, this.constraints[o]);
      }
    });
    const { transformTemplate: r } = this.visualElement.getProps();
    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.constraints = !1, this.resolveConstraints(), J((o) => {
      if (!qt(o, e, null))
        return;
      const a = this.getAxisMotionValue(o), { min: c, max: u } = this.constraints[o];
      a.set(D(c, u, s[o]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Ku.set(this.visualElement, this);
    const e = this.visualElement.current, n = Ot(e, "pointerdown", (u) => {
      const { drag: l, dragListener: h = !0 } = this.getProps(), f = u.target, p = f !== e && Sl(f);
      l && h && !p && this.start(u);
    });
    let i;
    const s = () => {
      const { dragConstraints: u } = this.getProps();
      Tt(u) && u.current && (this.constraints = this.resolveRefConstraints(), i || (i = Hu(e, u.current, () => this.scalePositionWithinConstraints())));
    }, { projection: r } = this.visualElement, o = r.addEventListener("measure", s);
    r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), E.read(s);
    const a = Wt(window, "resize", () => this.scalePositionWithinConstraints()), c = r.addEventListener("didUpdate", (({ delta: u, hasLayoutChanged: l }) => {
      this.isDragging && l && (J((h) => {
        const f = this.getAxisMotionValue(h);
        f && (this.originPoint[h] += u[h].translate, f.set(f.get() + u[h].translate));
      }), this.visualElement.render());
    }));
    return () => {
      a(), n(), o(), c && c(), i && i();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: r = !1, dragElastic: o = fn, dragMomentum: a = !0 } = e;
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
function Hu(t, e, n) {
  const i = di(t, rs(n)), s = di(e, rs(n));
  return () => {
    i(), s();
  };
}
function qt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Gu(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class _u extends ct {
  constructor(e) {
    super(e), this.removeGroupControls = G, this.removeListeners = G, this.controls = new zu(e);
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
class Yu extends ct {
  constructor() {
    super(...arguments), this.removePointerDownListener = G;
  }
  onPointerDown(e) {
    this.session = new qo(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Xo(this.node)
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
class Xu extends cr {
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
    i && (i.options.layoutAnchor = n, i.root.didUpdate(), Bn.postRender(() => {
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
function Jo(t) {
  const [e, n] = Uo(), i = N(gn);
  return F(Xu, { ...t, layoutGroup: i, switchLayoutGroup: N(_o), isPresent: e, safeToRemove: n });
}
const qu = {
  pan: {
    Feature: Yu
  },
  drag: {
    Feature: _u,
    ProjectionNode: No,
    MeasureLayout: Jo
  }
};
function as(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, r = i[s];
  r && E.postRender(() => r(e, Ht(e)));
}
class Zu extends ct {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = xl(e, (n, i) => (as(this.node, i, "Start"), (s) => as(this.node, s, "End"))));
  }
  unmount() {
  }
}
class Ju extends ct {
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
class Qu extends ct {
  mount() {
    const { current: e } = this.node;
    if (!e)
      return;
    const { globalTapTarget: n, propagate: i } = this.node.props;
    this.unmount = Al(e, (s, r) => (ls(this.node, r, "Start"), (o, { success: a }) => ls(this.node, o, a ? "End" : "Cancel")), {
      useGlobalTarget: n,
      stopPropagation: i?.tap === !1
    });
  }
  unmount() {
  }
}
const dn = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), th = (t) => {
  const e = dn.get(t.target);
  e && e(t);
}, eh = (t) => {
  t.forEach(th);
};
function nh({ root: t, ...e }) {
  const n = t || document;
  Ne.has(n) || Ne.set(n, {});
  const i = Ne.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(eh, { root: t, ...e })), i[s];
}
function ih(t, e, n) {
  const i = nh(e);
  return dn.set(t, n), i.observe(t), () => {
    dn.delete(t), i.unobserve(t);
  };
}
const sh = {
  some: 0,
  all: 1
};
class oh extends ct {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: r } = e, o = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : sh[s]
    }, a = (c) => {
      const { isIntersecting: u } = c;
      if (this.isInView === u || (this.isInView = u, r && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: l, onViewportLeave: h } = this.node.getProps(), f = u ? l : h;
      f && f(c);
    };
    this.stopObserver = ih(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(rh(e, n)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function rh({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const ah = {
  inView: {
    Feature: oh
  },
  tap: {
    Feature: Qu
  },
  focus: {
    Feature: Ju
  },
  hover: {
    Feature: Zu
  }
}, lh = {
  layout: {
    ProjectionNode: No,
    MeasureLayout: Jo
  }
}, ch = {
  ...ku,
  ...ah,
  ...qu,
  ...lh
}, cs = /* @__PURE__ */ Cu(ch, Mu), Ph = ({
  label: t,
  checked: e,
  disabled: n = !1,
  variant: i = "filled",
  onChange: s,
  color: r = "primary",
  textColor: o,
  className: a
}) => {
  const { main: c, contrast: u } = fs(r), l = {
    borderColor: e ? c : "#d1d5db",
    backgroundColor: i === "filled" && e ? c : "#ffffff",
    color: e && i === "filled" ? u : e ? c : "inherit"
  };
  return /* @__PURE__ */ mt(
    "div",
    {
      className: ur(
        "flex items-center gap-2 cursor-pointer select-none",
        n && "cursor-not-allowed opacity-60",
        a
      ),
      onClick: () => !n && s(!e),
      children: [
        /* @__PURE__ */ F(
          cs.div,
          {
            whileTap: { scale: 0.9 },
            style: l,
            className: "w-5 h-5 rounded-md flex items-center justify-center border-2 transition-all",
            children: e && /* @__PURE__ */ F(
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
                children: /* @__PURE__ */ F(
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
        t && /* @__PURE__ */ F(
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
function uh(t, e) {
  return e ? e.getValue ? e.getValue(t) : t[e.value] : t;
}
function Ah({
  data: t,
  columns: e = [],
  placeholder: n = "Filtrar...",
  onChange: i,
  initialQuery: s,
  className: r = "",
  inputClassName: o = "",
  selectClassName: a = "",
  style: c
}) {
  const [u, l] = re(s ?? ""), [h, f] = re(), p = K(i);
  return p.current = i, ve(() => {
    if (!u) {
      p.current(t);
      return;
    }
    const d = u.toLowerCase(), m = t.filter((g) => {
      if (h) {
        const y = e.find((v) => v.value === h);
        return String(uh(g, y) ?? "").toLowerCase().includes(d);
      }
      return Object.values(g).some(
        (y) => String(y).toLowerCase().includes(d)
      );
    });
    p.current(m);
  }, [u, h, JSON.stringify(t)]), /* @__PURE__ */ mt(
    "div",
    {
      className: `flex items-center max-w-lg gap-3 bg-gray-100 rounded-lg shadow-sm p-2! ${r}`,
      style: c,
      children: [
        /* @__PURE__ */ F(fr, { className: "text-gray-500" }),
        /* @__PURE__ */ F(
          nr,
          {
            value: u,
            placeholder: n,
            onIonInput: (d) => l(d.detail.value),
            clearInput: !0,
            className: `flex-1 ${o}`
          }
        ),
        e.length > 0 && /* @__PURE__ */ mt("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ F(hr, { className: "text-gray-500", size: 20 }),
          /* @__PURE__ */ mt(
            ir,
            {
              value: h,
              placeholder: "Coluna",
              onIonChange: (d) => f(d.detail.value),
              interface: "popover",
              className: a,
              children: [
                /* @__PURE__ */ F(zn, { value: void 0, children: "Todas" }),
                e.map((d) => /* @__PURE__ */ F(zn, { value: d.value, children: d.label }, d.value))
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  Sh as A,
  yh as C,
  Th as F,
  wh as a,
  Ph as b,
  xh as c,
  vh as d,
  Ah as e,
  cs as m
};
