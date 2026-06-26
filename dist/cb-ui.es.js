import { jsx as v, Fragment as Zs, jsxs as F } from "react/jsx-runtime";
import * as Ue from "react";
import xn, { createContext as Kt, useRef as nt, useLayoutEffect as Ko, useEffect as wt, useId as qn, useContext as et, useInsertionEffect as Zn, useMemo as St, useCallback as Js, Children as Go, isValidElement as Xo, useState as X, Fragment as Qs, createElement as qo, forwardRef as Zo, Component as Jo } from "react";
import vt from "clsx";
import { IonCard as Qo, IonCardHeader as ta, IonCardTitle as ea, IonCardSubtitle as na, IonCardContent as ia, IonFooter as tr, IonText as sa, IonModal as er, IonHeader as ra, IonToolbar as oa, IonButtons as aa, IonButton as bn, IonTitle as la, IonContent as ca, IonSelect as nr, IonSelectOption as wn, IonNote as Le, IonSpinner as le, IonTextarea as ua, IonToggle as da, IonRadioGroup as ha, IonRadio as fa, IonCheckbox as ma, IonFab as ir, IonFabButton as Tn, IonInput as pa, IonSegment as ga, IonSegmentButton as ya, IonLabel as Ie, IonAccordionGroup as va, IonAccordion as xa, IonItem as Cn, IonDatetime as Di, IonSearchbar as ba, IonList as wa } from "@ionic/react";
import { I as Ta, a as sr, b as rr } from "./CBInput-C09m8ZBd.js";
import { C as Pf, r as Df, u as Af, c as Vf } from "./CBInput-C09m8ZBd.js";
import { G as mt, u as Z, C as Ca } from "./iconBase-Sed4o0Xx.js";
import { a as Ef } from "./iconBase-Sed4o0Xx.js";
import { b as Ma, c as Sa, C as Be } from "./index.esm-D8z2AkpA.js";
function Jn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
const Qn = Kt({});
function ti(t) {
  const e = nt(null);
  return e.current === null && (e.current = t()), e.current;
}
const Pa = typeof window < "u", or = Pa ? Ko : wt, Ke = /* @__PURE__ */ Kt(null);
function ei(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Ne(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const bt = (t, e, n) => n > e ? e : n < t ? t : n;
function Mn(t, e) {
  return e ? `${t}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${e}` : t;
}
let Gt = () => {
}, Pt = () => {
};
typeof process < "u" && process.env?.NODE_ENV !== "production" && (Gt = (t, e, n) => {
  !t && typeof console < "u" && console.warn(Mn(e, n));
}, Pt = (t, e, n) => {
  if (!t)
    throw new Error(Mn(e, n));
});
const kt = {}, ar = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), lr = (t) => typeof t == "object" && t !== null, cr = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function ur(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const ut = /* @__NO_SIDE_EFFECTS__ */ (t) => t, ce = (...t) => t.reduce((e, n) => (i) => n(e(i))), ie = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i ? (n - t) / i : 1;
};
class ni {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return ei(this.subscriptions, e), () => Ne(this.subscriptions, e);
  }
  notify(e, n, i) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](e, n, i);
      else
        for (let o = 0; o < s; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const at = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, ct = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3, dr = /* @__NO_SIDE_EFFECTS__ */ (t, e) => e ? t * (1e3 / e) : 0, Ai = /* @__PURE__ */ new Set();
function ii(t, e, n) {
  t || Ai.has(e) || (console.warn(Mn(e, n)), Ai.add(e));
}
const hr = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, Da = 1e-7, Aa = 12;
function Va(t, e, n, i, s) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = hr(r, i, s) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > Da && ++a < Aa);
  return r;
}
// @__NO_SIDE_EFFECTS__
function ue(t, e, n, i) {
  if (t === e && n === i)
    return ut;
  const s = (o) => Va(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : hr(s(o), e, i);
}
const fr = /* @__NO_SIDE_EFFECTS__ */ (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, mr = /* @__NO_SIDE_EFFECTS__ */ (t) => (e) => 1 - t(1 - e), pr = /* @__PURE__ */ ue(0.33, 1.53, 0.69, 0.99), si = /* @__PURE__ */ mr(pr), gr = /* @__PURE__ */ fr(si), yr = (t) => t >= 1 ? 1 : (t *= 2) < 1 ? 0.5 * si(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), ri = (t) => 1 - Math.sin(Math.acos(t)), vr = /* @__PURE__ */ mr(ri), xr = /* @__PURE__ */ fr(ri), ka = /* @__PURE__ */ ue(0.42, 0, 1, 1), Ea = /* @__PURE__ */ ue(0, 0, 0.58, 1), br = /* @__PURE__ */ ue(0.42, 0, 0.58, 1), Ra = /* @__NO_SIDE_EFFECTS__ */ (t) => Array.isArray(t) && typeof t[0] != "number", wr = /* @__NO_SIDE_EFFECTS__ */ (t) => Array.isArray(t) && typeof t[0] == "number", Vi = {
  linear: ut,
  easeIn: ka,
  easeInOut: br,
  easeOut: Ea,
  circIn: ri,
  circInOut: xr,
  circOut: vr,
  backIn: si,
  backInOut: gr,
  backOut: pr,
  anticipate: yr
}, La = (t) => typeof t == "string", ki = (t) => {
  if (/* @__PURE__ */ wr(t)) {
    Pt(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [e, n, i, s] = t;
    return /* @__PURE__ */ ue(e, n, i, s);
  } else if (La(t))
    return Pt(Vi[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), Vi[t];
  return t;
}, pe = [
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
function Ia(t, e) {
  let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), s = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function c(l) {
    r.has(l) && (u.schedule(l), t()), l(a);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, d = !1, h = !1) => {
      const m = h && s ? n : i;
      return d && r.add(l), m.add(l), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      i.delete(l), r.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (a = l, s) {
        o = !0;
        return;
      }
      s = !0;
      const d = n;
      n = i, i = d, n.forEach(c), n.clear(), s = !1, o && (o = !1, u.process(l));
    }
  };
  return u;
}
const Ba = 40;
function Tr(t, e) {
  let n = !1, i = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = pe.reduce((g, b) => (g[b] = Ia(o), g), {}), { setup: a, read: c, resolveKeyframes: u, preUpdate: l, update: d, preRender: h, render: f, postRender: m } = r, y = () => {
    const g = kt.useManualTiming, b = g ? s.timestamp : performance.now();
    n = !1, g || (s.delta = i ? 1e3 / 60 : Math.max(Math.min(b - s.timestamp, Ba), 1)), s.timestamp = b, s.isProcessing = !0, a.process(s), c.process(s), u.process(s), l.process(s), d.process(s), h.process(s), f.process(s), m.process(s), s.isProcessing = !1, n && e && (i = !1, t(y));
  }, p = () => {
    n = !0, i = !0, s.isProcessing || t(y);
  };
  return { schedule: pe.reduce((g, b) => {
    const D = r[b];
    return g[b] = (V, k = !1, A = !1) => (n || p(), D.schedule(V, k, A)), g;
  }, {}), cancel: (g) => {
    for (let b = 0; b < pe.length; b++)
      r[pe[b]].cancel(g);
  }, state: s, steps: r };
}
const { schedule: _, cancel: Et, state: Q, steps: nn } = /* @__PURE__ */ Tr(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ut, !0);
let be;
function Na() {
  be = void 0;
}
const it = {
  now: () => (be === void 0 && it.set(Q.isProcessing || kt.useManualTiming ? Q.timestamp : performance.now()), be),
  set: (t) => {
    be = t, queueMicrotask(Na);
  }
}, Cr = (t) => (e) => typeof e == "string" && e.startsWith(t), Mr = /* @__PURE__ */ Cr("--"), Oa = /* @__PURE__ */ Cr("var(--"), oi = (t) => Oa(t) ? Fa.test(t.split("/*")[0].trim()) : !1, Fa = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ei(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--");
}
const Xt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, se = {
  ...Xt,
  transform: (t) => bt(0, 1, t)
}, ge = {
  ...Xt,
  default: 1
}, te = (t) => Math.round(t * 1e5) / 1e5, ai = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function $a(t) {
  return t == null;
}
const ja = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, li = (t, e) => (n) => !!(typeof n == "string" && ja.test(n) && n.startsWith(t) || e && !$a(n) && Object.prototype.hasOwnProperty.call(n, e)), Sr = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, o, r, a] = i.match(ai);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Ya = (t) => bt(0, 255, t), sn = {
  ...Xt,
  transform: (t) => Math.round(Ya(t))
}, Nt = {
  test: /* @__PURE__ */ li("rgb", "red"),
  parse: /* @__PURE__ */ Sr("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + sn.transform(t) + ", " + sn.transform(e) + ", " + sn.transform(n) + ", " + te(se.transform(i)) + ")"
};
function za(t) {
  let e = "", n = "", i = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Sn = {
  test: /* @__PURE__ */ li("#"),
  parse: za,
  transform: Nt.transform
}, de = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), Mt = /* @__PURE__ */ de("deg"), xt = /* @__PURE__ */ de("%"), L = /* @__PURE__ */ de("px"), _a = /* @__PURE__ */ de("vh"), Ha = /* @__PURE__ */ de("vw"), Ri = {
  ...xt,
  parse: (t) => xt.parse(t) / 100,
  transform: (t) => xt.transform(t * 100)
}, Yt = {
  test: /* @__PURE__ */ li("hsl", "hue"),
  parse: /* @__PURE__ */ Sr("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + xt.transform(te(e)) + ", " + xt.transform(te(n)) + ", " + te(se.transform(i)) + ")"
}, K = {
  test: (t) => Nt.test(t) || Sn.test(t) || Yt.test(t),
  parse: (t) => Nt.test(t) ? Nt.parse(t) : Yt.test(t) ? Yt.parse(t) : Sn.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? Nt.transform(t) : Yt.transform(t),
  getAnimatableNone: (t) => {
    const e = K.parse(t);
    return e.alpha = 0, K.transform(e);
  }
}, Wa = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Ua(t) {
  return isNaN(t) && typeof t == "string" && (t.match(ai)?.length || 0) + (t.match(Wa)?.length || 0) > 0;
}
const Pr = "number", Dr = "color", Ka = "var", Ga = "var(", Li = "${}", Xa = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Wt(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let o = 0;
  const a = e.replace(Xa, (c) => (K.test(c) ? (i.color.push(o), s.push(Dr), n.push(K.parse(c))) : c.startsWith(Ga) ? (i.var.push(o), s.push(Ka), n.push(c)) : (i.number.push(o), s.push(Pr), n.push(parseFloat(c))), ++o, Li)).split(Li);
  return { values: n, split: a, indexes: i, types: s };
}
function qa(t) {
  return Wt(t).values;
}
function Ar({ split: t, types: e }) {
  const n = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < n; o++)
      if (s += t[o], i[o] !== void 0) {
        const r = e[o];
        r === Pr ? s += te(i[o]) : r === Dr ? s += K.transform(i[o]) : s += i[o];
      }
    return s;
  };
}
function Za(t) {
  return Ar(Wt(t));
}
const Ja = (t) => typeof t == "number" ? 0 : K.test(t) ? K.getAnimatableNone(t) : t, Qa = (t, e) => typeof t == "number" ? e?.trim().endsWith("/") ? t : 0 : Ja(t);
function tl(t) {
  const e = Wt(t);
  return Ar(e)(e.values.map((i, s) => Qa(i, e.split[s])));
}
const ft = {
  test: Ua,
  parse: qa,
  createTransformer: Za,
  getAnimatableNone: tl
};
function rn(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function el({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let s = 0, o = 0, r = 0;
  if (!e)
    s = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, c = 2 * n - a;
    s = rn(c, a, t + 1 / 3), o = rn(c, a, t), r = rn(c, a, t - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: i
  };
}
function Oe(t, e) {
  return (n) => n > 0 ? e : t;
}
const z = (t, e, n) => t + (e - t) * n, on = (t, e, n) => {
  const i = t * t, s = n * (e * e - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, nl = [Sn, Nt, Yt], il = (t) => nl.find((e) => e.test(t));
function Ii(t) {
  const e = il(t);
  if (Gt(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e)
    return !1;
  let n = e.parse(t);
  return e === Yt && (n = el(n)), n;
}
const Bi = (t, e) => {
  const n = Ii(t), i = Ii(e);
  if (!n || !i)
    return Oe(t, e);
  const s = { ...n };
  return (o) => (s.red = on(n.red, i.red, o), s.green = on(n.green, i.green, o), s.blue = on(n.blue, i.blue, o), s.alpha = z(n.alpha, i.alpha, o), Nt.transform(s));
}, Pn = /* @__PURE__ */ new Set(["none", "hidden"]);
function sl(t, e) {
  return Pn.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function rl(t, e) {
  return (n) => z(t, e, n);
}
function ci(t) {
  return typeof t == "number" ? rl : typeof t == "string" ? oi(t) ? Oe : K.test(t) ? Bi : ll : Array.isArray(t) ? Vr : typeof t == "object" ? K.test(t) ? Bi : ol : Oe;
}
function Vr(t, e) {
  const n = [...t], i = n.length, s = t.map((o, r) => ci(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < i; r++)
      n[r] = s[r](o);
    return n;
  };
}
function ol(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const s in n)
    t[s] !== void 0 && e[s] !== void 0 && (i[s] = ci(t[s])(t[s], e[s]));
  return (s) => {
    for (const o in i)
      n[o] = i[o](s);
    return n;
  };
}
function al(t, e) {
  const n = [], i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < e.values.length; s++) {
    const o = e.types[s], r = t.indexes[o][i[o]], a = t.values[r] ?? 0;
    n[s] = a, i[o]++;
  }
  return n;
}
const ll = (t, e) => {
  const n = ft.createTransformer(e), i = Wt(t), s = Wt(e);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? Pn.has(t) && !s.values.length || Pn.has(e) && !i.values.length ? sl(t, e) : ce(Vr(al(i, s), s.values), n) : (Gt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Oe(t, e));
};
function kr(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? z(t, e, n) : ci(t)(t, e);
}
const cl = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: (n = !0) => _.update(e, n),
    stop: () => Et(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Q.isProcessing ? Q.timestamp : it.now()
  };
}, Er = (t, e, n = 10) => {
  let i = "";
  const s = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < s; o++)
    i += Math.round(t(o / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
}, Fe = 2e4;
function ui(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < Fe; )
    e += n, i = t.next(e);
  return e >= Fe ? 1 / 0 : e;
}
function ul(t, e = 100, n) {
  const i = n({ ...t, keyframes: [0, e] }), s = Math.min(ui(i), Fe);
  return {
    type: "keyframes",
    ease: (o) => i.next(s * o).value / e,
    duration: /* @__PURE__ */ ct(s)
  };
}
const U = {
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
function Dn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const dl = 12;
function hl(t, e, n) {
  let i = n;
  for (let s = 1; s < dl; s++)
    i = i - t(i) / e(i);
  return i;
}
const an = 1e-3;
function fl({ duration: t = U.duration, bounce: e = U.bounce, velocity: n = U.velocity, mass: i = U.mass }) {
  let s, o;
  Gt(t <= /* @__PURE__ */ at(U.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let r = 1 - e;
  r = bt(U.minDamping, U.maxDamping, r), t = bt(U.minDuration, U.maxDuration, /* @__PURE__ */ ct(t)), r < 1 ? (s = (u) => {
    const l = u * r, d = l * t, h = l - n, f = Dn(u, r), m = Math.exp(-d);
    return an - h / f * m;
  }, o = (u) => {
    const d = u * r * t, h = d * n + n, f = Math.pow(r, 2) * Math.pow(u, 2) * t, m = Math.exp(-d), y = Dn(Math.pow(u, 2), r);
    return (-s(u) + an > 0 ? -1 : 1) * ((h - f) * m) / y;
  }) : (s = (u) => {
    const l = Math.exp(-u * t), d = (u - n) * t + 1;
    return -an + l * d;
  }, o = (u) => {
    const l = Math.exp(-u * t), d = (n - u) * (t * t);
    return l * d;
  });
  const a = 5 / t, c = hl(s, o, a);
  if (t = /* @__PURE__ */ at(t), isNaN(c))
    return {
      stiffness: U.stiffness,
      damping: U.damping,
      duration: t
    };
  {
    const u = Math.pow(c, 2) * i;
    return {
      stiffness: u,
      damping: r * 2 * Math.sqrt(i * u),
      duration: t
    };
  }
}
const ml = ["duration", "bounce"], pl = ["stiffness", "damping", "mass"];
function Ni(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function gl(t) {
  let e = {
    velocity: U.velocity,
    stiffness: U.stiffness,
    damping: U.damping,
    mass: U.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Ni(t, pl) && Ni(t, ml))
    if (e.velocity = 0, t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, o = 2 * bt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: U.mass,
        stiffness: s,
        damping: o
      };
    } else {
      const n = fl({ ...t, velocity: 0 });
      e = {
        ...e,
        ...n,
        mass: U.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function $e(t = U.visualDuration, e = U.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: s } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: c, damping: u, mass: l, duration: d, velocity: h, isResolvedFromDuration: f } = gl({
    ...n,
    velocity: -/* @__PURE__ */ ct(n.velocity || 0)
  }), m = h || 0, y = u / (2 * Math.sqrt(c * l)), p = r - o, x = /* @__PURE__ */ ct(Math.sqrt(c / l)), w = Math.abs(p) < 5;
  i || (i = w ? U.restSpeed.granular : U.restSpeed.default), s || (s = w ? U.restDelta.granular : U.restDelta.default);
  let g, b, D, V, k, A;
  if (y < 1)
    D = Dn(x, y), V = (m + y * x * p) / D, g = (T) => {
      const P = Math.exp(-y * x * T);
      return r - P * (V * Math.sin(D * T) + p * Math.cos(D * T));
    }, k = y * x * V + p * D, A = y * x * p - V * D, b = (T) => Math.exp(-y * x * T) * (k * Math.sin(D * T) + A * Math.cos(D * T));
  else if (y === 1) {
    g = (P) => r - Math.exp(-x * P) * (p + (m + x * p) * P);
    const T = m + x * p;
    b = (P) => Math.exp(-x * P) * (x * T * P - m);
  } else {
    const T = x * Math.sqrt(y * y - 1);
    g = (R) => {
      const M = Math.exp(-y * x * R), C = Math.min(T * R, 300);
      return r - M * ((m + y * x * p) * Math.sinh(C) + T * p * Math.cosh(C)) / T;
    };
    const P = (m + y * x * p) / T, O = y * x * P - p * T, j = y * x * p - P * T;
    b = (R) => {
      const M = Math.exp(-y * x * R), C = Math.min(T * R, 300);
      return M * (O * Math.sinh(C) + j * Math.cosh(C));
    };
  }
  const E = {
    calculatedDuration: f && d || null,
    velocity: (T) => /* @__PURE__ */ at(b(T)),
    next: (T) => {
      if (!f && y < 1) {
        const O = Math.exp(-y * x * T), j = Math.sin(D * T), R = Math.cos(D * T), M = r - O * (V * j + p * R), C = /* @__PURE__ */ at(O * (k * j + A * R));
        return a.done = Math.abs(C) <= i && Math.abs(r - M) <= s, a.value = a.done ? r : M, a;
      }
      const P = g(T);
      if (f)
        a.done = T >= d;
      else {
        const O = /* @__PURE__ */ at(b(T));
        a.done = Math.abs(O) <= i && Math.abs(r - P) <= s;
      }
      return a.value = a.done ? r : P, a;
    },
    toString: () => {
      const T = Math.min(ui(E), Fe), P = Er((O) => E.next(T * O).value, T, 30);
      return T + "ms " + P;
    },
    toTransition: () => {
    }
  };
  return E;
}
$e.applyToOptions = (t) => {
  const e = ul(t, 100, $e);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ at(e.duration), t.type = "keyframes", t;
};
const yl = 5;
function Rr(t, e, n) {
  const i = Math.max(e - yl, 0);
  return /* @__PURE__ */ dr(n - t(i), e - i);
}
function An({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: c, restDelta: u = 0.5, restSpeed: l }) {
  const d = t[0], h = {
    done: !1,
    value: d
  }, f = (A) => a !== void 0 && A < a || c !== void 0 && A > c, m = (A) => a === void 0 ? c : c === void 0 || Math.abs(a - A) < Math.abs(c - A) ? a : c;
  let y = n * e;
  const p = d + y, x = r === void 0 ? p : r(p);
  x !== p && (y = x - d);
  const w = (A) => -y * Math.exp(-A / i), g = (A) => x + w(A), b = (A) => {
    const E = w(A), T = g(A);
    h.done = Math.abs(E) <= u, h.value = h.done ? x : T;
  };
  let D, V;
  const k = (A) => {
    f(h.value) && (D = A, V = $e({
      keyframes: [h.value, m(h.value)],
      velocity: Rr(g, A, h.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: o,
      restDelta: u,
      restSpeed: l
    }));
  };
  return k(0), {
    calculatedDuration: null,
    next: (A) => {
      let E = !1;
      return !V && D === void 0 && (E = !0, b(A), k(A)), D !== void 0 && A >= D ? V.next(A - D) : (!E && b(A), h);
    }
  };
}
function vl(t, e, n) {
  const i = [], s = n || kt.mix || kr, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = s(t[r], t[r + 1]);
    if (e) {
      const c = Array.isArray(e) ? e[r] || ut : e;
      a = ce(c, a);
    }
    i.push(a);
  }
  return i;
}
function xl(t, e, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const o = t.length;
  if (Pt(o === e.length, "Both input and output ranges must be the same length", "range-length"), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = vl(e, i, s), c = a.length, u = (l) => {
    if (r && l < t[0])
      return e[0];
    let d = 0;
    if (c > 1)
      for (; d < t.length - 2 && !(l < t[d + 1]); d++)
        ;
    const h = /* @__PURE__ */ ie(t[d], t[d + 1], l);
    return a[d](h);
  };
  return n ? (l) => u(bt(t[0], t[o - 1], l)) : u;
}
function bl(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = /* @__PURE__ */ ie(0, e, i);
    t.push(z(n, 1, s));
  }
}
function wl(t) {
  const e = [0];
  return bl(e, t.length - 1), e;
}
function Tl(t, e) {
  return t.map((n) => n * e);
}
function Cl(t, e) {
  return t.map(() => e || br).splice(0, t.length - 1);
}
function zt({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const s = /* @__PURE__ */ Ra(i) ? i.map(ki) : ki(i), o = {
    done: !1,
    value: e[0]
  }, r = Tl(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : wl(e),
    t
  ), a = xl(r, e, {
    ease: Array.isArray(s) ? s : Cl(e, s)
  });
  return {
    calculatedDuration: t,
    next: (c) => (o.value = a(c), o.done = c >= t, o)
  };
}
const Ml = (t) => t !== null;
function Ge(t, { repeat: e, repeatType: n = "loop" }, i, s = 1) {
  const o = t.filter(Ml), a = s < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return !a || i === void 0 ? o[a] : i;
}
const Sl = {
  decay: An,
  inertia: An,
  tween: zt,
  keyframes: zt,
  spring: $e
};
function Lr(t) {
  typeof t.type == "string" && (t.type = Sl[t.type]);
}
class di {
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
const Pl = (t) => t / 100;
class je extends di {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== it.now() && this.tick(it.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    Lr(e);
    const { type: n = zt, repeat: i = 0, repeatDelay: s = 0, repeatType: o, velocity: r = 0 } = e;
    let { keyframes: a } = e;
    const c = n || zt;
    process.env.NODE_ENV !== "production" && c !== zt && Pt(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), c !== zt && typeof a[0] != "number" && (this.mixKeyframes = ce(Pl, kr(a[0], a[1])), a = [0, 100]);
    const u = c({ ...e, keyframes: a });
    o === "mirror" && (this.mirroredGenerator = c({
      ...e,
      keyframes: [...a].reverse(),
      velocity: -r
    })), u.calculatedDuration === null && (u.calculatedDuration = ui(u));
    const { calculatedDuration: l } = u;
    this.calculatedDuration = l, this.resolvedDuration = l + s, this.totalDuration = this.resolvedDuration * (i + 1) - s, this.generator = u;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = !1) {
    const { generator: i, totalDuration: s, mixKeyframes: o, mirroredGenerator: r, resolvedDuration: a, calculatedDuration: c } = this;
    if (this.startTime === null)
      return i.next(0);
    const { delay: u = 0, keyframes: l, repeat: d, repeatType: h, repeatDelay: f, type: m, onUpdate: y, finalKeyframe: p } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - s / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const x = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), w = this.playbackSpeed >= 0 ? x < 0 : x > s;
    this.currentTime = Math.max(x, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let g = this.currentTime, b = i;
    if (d) {
      const A = Math.min(this.currentTime, s) / a;
      let E = Math.floor(A), T = A % 1;
      !T && A >= 1 && (T = 1), T === 1 && E--, E = Math.min(E, d + 1), E % 2 && (h === "reverse" ? (T = 1 - T, f && (T -= f / a)) : h === "mirror" && (b = r)), g = bt(0, 1, T) * a;
    }
    let D;
    w ? (this.delayState.value = l[0], D = this.delayState) : D = b.next(g), o && !w && (D.value = o(D.value));
    let { done: V } = D;
    !w && c !== null && (V = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const k = this.holdTime === null && (this.state === "finished" || this.state === "running" && V);
    return k && m !== An && (D.value = Ge(l, this.options, p, this.speed)), y && y(D.value), k && this.finish(), D;
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
    return /* @__PURE__ */ ct(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ ct(e);
  }
  get time() {
    return /* @__PURE__ */ ct(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ at(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
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
    return Rr((i) => this.generator.next(i).value, e, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    n && this.driver && this.updateTime(it.now()), this.playbackSpeed = e, n && this.driver && (this.time = /* @__PURE__ */ ct(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: e = cl, startTime: n } = this.options;
    this.driver || (this.driver = e((s) => this.tick(s))), this.options.onPlay?.();
    const i = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = i) : this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = n ?? i), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(it.now()), this.holdTime = this.currentTime;
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
function Dl(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const Ot = (t) => t * 180 / Math.PI, Vn = (t) => {
  const e = Ot(Math.atan2(t[1], t[0]));
  return kn(e);
}, Al = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: Vn,
  rotateZ: Vn,
  skewX: (t) => Ot(Math.atan(t[1])),
  skewY: (t) => Ot(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, kn = (t) => (t = t % 360, t < 0 && (t += 360), t), Oi = Vn, Fi = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), $i = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), Vl = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Fi,
  scaleY: $i,
  scale: (t) => (Fi(t) + $i(t)) / 2,
  rotateX: (t) => kn(Ot(Math.atan2(t[6], t[5]))),
  rotateY: (t) => kn(Ot(Math.atan2(-t[2], t[0]))),
  rotateZ: Oi,
  rotate: Oi,
  skewX: (t) => Ot(Math.atan(t[4])),
  skewY: (t) => Ot(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function En(t) {
  return t.includes("scale") ? 1 : 0;
}
function Rn(t, e) {
  if (!t || t === "none")
    return En(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, s;
  if (n)
    i = Vl, s = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = Al, s = a;
  }
  if (!s)
    return En(e);
  const o = i[e], r = s[1].split(",").map(El);
  return typeof o == "function" ? o(r) : r[o];
}
const kl = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return Rn(n, e);
};
function El(t) {
  return parseFloat(t.trim());
}
const qt = [
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
], Zt = /* @__PURE__ */ new Set([...qt, "pathRotation"]), ji = (t) => t === Xt || t === L, Rl = /* @__PURE__ */ new Set(["x", "y", "z"]), Ll = qt.filter((t) => !Rl.has(t));
function Il(t) {
  const e = [];
  return Ll.forEach((n) => {
    const i = t.getValue(n);
    i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const Vt = {
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
  x: (t, { transform: e }) => Rn(e, "x"),
  y: (t, { transform: e }) => Rn(e, "y")
};
Vt.translateX = Vt.x;
Vt.translateY = Vt.y;
const Ft = /* @__PURE__ */ new Set();
let Ln = !1, In = !1, Bn = !1;
function Ir() {
  if (In) {
    const t = Array.from(Ft).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const s = Il(i);
      s.length && (n.set(i, s), i.render());
    }), t.forEach((i) => i.measureInitialState()), e.forEach((i) => {
      i.render();
      const s = n.get(i);
      s && s.forEach(([o, r]) => {
        i.getValue(o)?.set(r);
      });
    }), t.forEach((i) => i.measureEndState()), t.forEach((i) => {
      i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
    });
  }
  In = !1, Ln = !1, Ft.forEach((t) => t.complete(Bn)), Ft.clear();
}
function Br() {
  Ft.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (In = !0);
  });
}
function Bl() {
  Bn = !0, Br(), Ir(), Bn = !1;
}
class hi {
  constructor(e, n, i, s, o, r = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Ft.add(this), Ln || (Ln = !0, _.read(Br), _.resolveKeyframes(Ir))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: i, motionValue: s } = this;
    if (e[0] === null) {
      const o = s?.get(), r = e[e.length - 1];
      if (o !== void 0)
        e[0] = o;
      else if (i && n) {
        const a = i.readValue(n, r);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = r), s && o === void 0 && s.set(e[0]);
    }
    Dl(e);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Ft.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ft.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Nl = (t) => t.startsWith("--");
function Nr(t, e, n) {
  Nl(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const Ol = {};
function Or(t, e) {
  const n = /* @__PURE__ */ ur(t);
  return () => Ol[e] ?? n();
}
const Fl = /* @__PURE__ */ Or(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Fr = /* @__PURE__ */ Or(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Qt = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, Yi = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Qt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Qt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Qt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Qt([0.33, 1.53, 0.69, 0.99])
};
function $r(t, e) {
  if (t)
    return typeof t == "function" ? Fr() ? Er(t, e) : "ease-out" : /* @__PURE__ */ wr(t) ? Qt(t) : Array.isArray(t) ? t.map((n) => $r(n, e) || Yi.easeOut) : Yi[t];
}
function $l(t, e, n, { delay: i = 0, duration: s = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeOut", times: c } = {}, u = void 0) {
  const l = {
    [e]: n
  };
  c && (l.offset = c);
  const d = $r(a, s);
  Array.isArray(d) && (l.easing = d);
  const h = {
    delay: i,
    duration: s,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  };
  return u && (h.pseudoElement = u), t.animate(l, h);
}
function jr(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function jl({ type: t, ...e }) {
  return jr(t) && Fr() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class Yr extends di {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e)
      return;
    const { element: n, name: i, keyframes: s, pseudoElement: o, allowFlatten: r = !1, finalKeyframe: a, onComplete: c } = e;
    this.isPseudoElement = !!o, this.allowFlatten = r, this.options = e, Pt(typeof e.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const u = jl(e);
    this.animation = $l(n, i, s, u, o), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const l = Ge(s, this.options, a, this.speed);
        this.updateMotionValue && this.updateMotionValue(l), Nr(n, i, l), this.animation.cancel();
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
    return /* @__PURE__ */ ct(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ ct(e);
  }
  get time() {
    return /* @__PURE__ */ ct(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    const n = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ at(e), n && this.animation.pause();
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
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && Fl() ? (this.animation.timeline = e, n && (this.animation.rangeStart = n), i && (this.animation.rangeEnd = i), ut) : s(this);
  }
}
const zr = {
  anticipate: yr,
  backInOut: gr,
  circInOut: xr
};
function Yl(t) {
  return t in zr;
}
function zl(t) {
  typeof t.ease == "string" && Yl(t.ease) && (t.ease = zr[t.ease]);
}
const ln = 10;
class _l extends Yr {
  constructor(e) {
    zl(e), Lr(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
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
    const { motionValue: n, onUpdate: i, onComplete: s, element: o, ...r } = this.options;
    if (!n)
      return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new je({
      ...r,
      autoplay: !1
    }), c = Math.max(ln, it.now() - this.startTime), u = bt(0, ln, c - ln), l = a.sample(c).value, { name: d } = this.options;
    o && d && Nr(o, d, l), n.setWithVelocity(a.sample(Math.max(0, c - u)).value, l, u), a.stop();
  }
}
const zi = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(ft.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function Hl(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function Wl(t, e, n, i) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = zi(s, e), a = zi(o, e);
  return Gt(r === a, `You are trying to animate ${e} from "${s}" to "${o}". "${r ? o : s}" is not an animatable value.`, "value-not-animatable"), !r || !a ? !1 : Hl(t) || (n === "spring" || jr(n)) && i;
}
function Nn(t) {
  t.duration = 0, t.type = "keyframes";
}
const _r = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), Ul = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Kl(t) {
  for (let e = 0; e < t.length; e++)
    if (typeof t[e] == "string" && Ul.test(t[e]))
      return !0;
  return !1;
}
const Gl = /* @__PURE__ */ new Set([
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
]), Xl = /* @__PURE__ */ ur(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ql(t) {
  const { motionValue: e, name: n, repeatDelay: i, repeatType: s, damping: o, type: r, keyframes: a } = t;
  if (!(e?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: u, transformTemplate: l } = e.owner.getProps();
  return Xl() && n && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (_r.has(n) || Gl.has(n) && Kl(a)) && (n !== "transform" || !l) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !u && !i && s !== "mirror" && o !== 0 && r !== "inertia";
}
const Zl = 40;
class Jl extends di {
  constructor({ autoplay: e = !0, delay: n = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: o = 0, repeatType: r = "loop", keyframes: a, name: c, motionValue: u, element: l, ...d }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = it.now();
    const h = {
      autoplay: e,
      delay: n,
      type: i,
      repeat: s,
      repeatDelay: o,
      repeatType: r,
      name: c,
      motionValue: u,
      element: l,
      ...d
    }, f = l?.KeyframeResolver || hi;
    this.keyframeResolver = new f(a, (m, y, p) => this.onKeyframesResolved(m, y, h, !p), c, u, l), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, n, i, s) {
    this.keyframeResolver = void 0;
    const { name: o, type: r, velocity: a, delay: c, isHandoff: u, onUpdate: l } = i;
    this.resolvedAt = it.now();
    let d = !0;
    Wl(e, o, r, a) || (d = !1, (kt.instantAnimations || !c) && l?.(Ge(e, i, n)), e[0] = e[e.length - 1], Nn(i), i.repeat = 0);
    const f = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > Zl ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...i,
      keyframes: e
    }, m = d && !u && ql(f), y = f.motionValue?.owner?.current;
    let p;
    if (m)
      try {
        p = new _l({
          ...f,
          element: y
        });
      } catch {
        p = new je(f);
      }
    else
      p = new je(f);
    p.finished.then(() => {
      this.notifyFinished();
    }).catch(ut), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), Bl()), this._animation;
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
function Hr(t, e, n, i = 0, s = 1) {
  const o = Array.from(t).sort((u, l) => u.sortNodePosition(l)).indexOf(e), r = t.size, a = (r - 1) * i;
  return typeof n == "function" ? n(o, r) : s === 1 ? o * i : a - o * i;
}
const _i = 30, Ql = (t) => !isNaN(parseFloat(t));
class tc {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
      const s = it.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const o of this.dependents)
          o.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = it.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Ql(this.current));
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
    return process.env.NODE_ENV !== "production" && ii(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new ni());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), _.read(() => {
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
    const e = it.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > _i)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, _i);
    return /* @__PURE__ */ dr(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Ut(t, e) {
  return new tc(t, e);
}
function Wr(t, e) {
  if (t?.inherit && e) {
    const { inherit: n, ...i } = t;
    return { ...e, ...i };
  }
  return t;
}
function fi(t, e) {
  const n = t?.[e] ?? t?.default ?? t;
  return n !== t ? Wr(n, t) : n;
}
const ec = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, nc = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), ic = {
  type: "keyframes",
  duration: 0.8
}, sc = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, rc = (t, { keyframes: e }) => e.length > 2 ? ic : Zt.has(t) ? t.startsWith("scale") ? nc(e[1]) : ec : sc, oc = /* @__PURE__ */ new Set([
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
function ac(t) {
  for (const e in t)
    if (!oc.has(e))
      return !0;
  return !1;
}
const mi = (t, e, n, i = {}, s, o) => (r) => {
  const a = fi(i, t) || {}, c = a.delay || i.delay || 0;
  let { elapsed: u = 0 } = i;
  u = u - /* @__PURE__ */ at(c);
  const l = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (h) => {
      e.set(h), a.onUpdate && a.onUpdate(h);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : s
  };
  ac(a) || Object.assign(l, rc(t, l)), l.duration && (l.duration = /* @__PURE__ */ at(l.duration)), l.repeatDelay && (l.repeatDelay = /* @__PURE__ */ at(l.repeatDelay)), l.from !== void 0 && (l.keyframes[0] = l.from);
  let d = !1;
  if ((l.type === !1 || l.duration === 0 && !l.repeatDelay) && (Nn(l), l.delay === 0 && (d = !0)), (kt.instantAnimations || kt.skipAnimations || s?.shouldSkipAnimations || a.skipAnimations) && (d = !0, Nn(l), l.delay = 0), l.allowFlatten = !a.type && !a.ease, d && !o && e.get() !== void 0) {
    const h = Ge(l.keyframes, a);
    if (h !== void 0) {
      _.update(() => {
        l.onUpdate(h), l.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new je(l) : new Jl(l);
}, lc = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function cc(t) {
  const e = lc.exec(t);
  if (!e)
    return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
const uc = 4;
function Ur(t, e, n = 1) {
  Pt(n <= uc, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [i, s] = cc(t);
  if (!i)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(i);
  if (o) {
    const r = o.trim();
    return ar(r) ? parseFloat(r) : r;
  }
  return oi(s) ? Ur(s, e, n + 1) : s;
}
function Hi(t) {
  const e = [{}, {}];
  return t?.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function pi(t, e, n, i) {
  if (typeof e == "function") {
    const [s, o] = Hi(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, o] = Hi(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  return e;
}
function $t(t, e, n) {
  const i = t.getProps();
  return pi(i, e, n !== void 0 ? n : i.custom, t);
}
const Kr = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...qt
]), On = (t) => Array.isArray(t);
function dc(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Ut(n));
}
function hc(t) {
  return On(t) ? t[t.length - 1] || 0 : t;
}
function fc(t, e) {
  const n = $t(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...o } = n || {};
  o = { ...o, ...i };
  for (const r in o) {
    const a = hc(o[r]);
    dc(t, r, a);
  }
}
const tt = (t) => !!(t && t.getVelocity);
function mc(t) {
  return !!(tt(t) && t.add);
}
function Fn(t, e) {
  const n = t.getValue("willChange");
  if (mc(n))
    return n.add(e);
  if (!n && kt.WillChange) {
    const i = new kt.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
function gi(t) {
  return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
const pc = "framerAppearId", Gr = "data-" + gi(pc);
function Xr(t) {
  return t.props[Gr];
}
function gc({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function qr(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  let { transition: o, transitionEnd: r, ...a } = e;
  const c = t.getDefaultTransition();
  o = o ? Wr(o, c) : c;
  const u = o?.reduceMotion, l = o?.skipAnimations;
  i && (o = i);
  const d = [], h = s && t.animationState && t.animationState.getState()[s], f = o?.path;
  f && f.animateVisualElement(t, a, o, n, d);
  for (const m in a) {
    const y = t.getValue(m, t.latestValues[m] ?? null), p = a[m];
    if (p === void 0 || h && gc(h, m))
      continue;
    const x = {
      delay: n,
      ...fi(o || {}, m)
    };
    l && (x.skipAnimations = !0);
    const w = y.get();
    if (w !== void 0 && !y.isAnimating() && !Array.isArray(p) && p === w && !x.velocity) {
      _.update(() => y.set(p));
      continue;
    }
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const V = Xr(t);
      if (V) {
        const k = window.MotionHandoffAnimation(V, m, _);
        k !== null && (x.startTime = k, g = !0);
      }
    }
    Fn(t, m);
    const b = u ?? t.shouldReduceMotion;
    y.start(mi(m, y, p, b && Kr.has(m) ? { type: !1 } : x, t, g));
    const D = y.animation;
    D && d.push(D);
  }
  if (r) {
    const m = () => _.update(() => {
      r && fc(t, r);
    });
    d.length ? Promise.all(d).then(m) : m();
  }
  return d;
}
function $n(t, e, n = {}) {
  const i = $t(t, e, n.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: s = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(qr(t, i, n)) : () => Promise.resolve(), r = t.variantChildren && t.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: l, staggerDirection: d } = s;
    return yc(t, e, c, u, l, d, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [c, u] = a === "beforeChildren" ? [o, r] : [r, o];
    return c().then(() => u());
  } else
    return Promise.all([o(), r(n.delay)]);
}
function yc(t, e, n = 0, i = 0, s = 0, o = 1, r) {
  const a = [];
  for (const c of t.variantChildren)
    c.notify("AnimationStart", e), a.push($n(c, e, {
      ...r,
      delay: n + (typeof i == "function" ? 0 : i) + Hr(t.variantChildren, c, i, s, o)
    }).then(() => c.notify("AnimationComplete", e)));
  return Promise.all(a);
}
function vc(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((o) => $n(t, o, n));
    i = Promise.all(s);
  } else if (typeof e == "string")
    i = $n(t, e, n);
  else {
    const s = typeof e == "function" ? $t(t, e, n.custom) : e;
    i = Promise.all(qr(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const xc = {
  test: (t) => t === "auto",
  parse: (t) => t
}, Zr = (t) => (e) => e.test(t), Jr = [Xt, L, xt, Mt, Ha, _a, xc], Wi = (t) => Jr.find(Zr(t));
function bc(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || cr(t) : !0;
}
const wc = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Tc(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(ai) || [];
  if (!i)
    return t;
  const s = n.replace(i, "");
  let o = wc.has(e) ? 1 : 0;
  return i !== n && (o *= 100), e + "(" + o + s + ")";
}
const Cc = /\b([a-z-]*)\(.*?\)/gu, jn = {
  ...ft,
  getAnimatableNone: (t) => {
    const e = t.match(Cc);
    return e ? e.map(Tc).join(" ") : t;
  }
}, Yn = {
  ...ft,
  getAnimatableNone: (t) => {
    const e = ft.parse(t);
    return ft.createTransformer(t)(e.map((i) => typeof i == "number" ? 0 : typeof i == "object" ? { ...i, alpha: 1 } : i));
  }
}, Ui = {
  ...Xt,
  transform: Math.round
}, Mc = {
  rotate: Mt,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: Mt,
  rotateX: Mt,
  rotateY: Mt,
  rotateZ: Mt,
  scale: ge,
  scaleX: ge,
  scaleY: ge,
  scaleZ: ge,
  skew: Mt,
  skewX: Mt,
  skewY: Mt,
  distance: L,
  translateX: L,
  translateY: L,
  translateZ: L,
  x: L,
  y: L,
  z: L,
  perspective: L,
  transformPerspective: L,
  opacity: se,
  originX: Ri,
  originY: Ri,
  originZ: L
}, Ye = {
  // Border props
  borderWidth: L,
  borderTopWidth: L,
  borderRightWidth: L,
  borderBottomWidth: L,
  borderLeftWidth: L,
  borderRadius: L,
  borderTopLeftRadius: L,
  borderTopRightRadius: L,
  borderBottomRightRadius: L,
  borderBottomLeftRadius: L,
  // Positioning props
  width: L,
  maxWidth: L,
  height: L,
  maxHeight: L,
  top: L,
  right: L,
  bottom: L,
  left: L,
  inset: L,
  insetBlock: L,
  insetBlockStart: L,
  insetBlockEnd: L,
  insetInline: L,
  insetInlineStart: L,
  insetInlineEnd: L,
  // Spacing props
  padding: L,
  paddingTop: L,
  paddingRight: L,
  paddingBottom: L,
  paddingLeft: L,
  paddingBlock: L,
  paddingBlockStart: L,
  paddingBlockEnd: L,
  paddingInline: L,
  paddingInlineStart: L,
  paddingInlineEnd: L,
  margin: L,
  marginTop: L,
  marginRight: L,
  marginBottom: L,
  marginLeft: L,
  marginBlock: L,
  marginBlockStart: L,
  marginBlockEnd: L,
  marginInline: L,
  marginInlineStart: L,
  marginInlineEnd: L,
  // Typography
  fontSize: L,
  // Misc
  backgroundPositionX: L,
  backgroundPositionY: L,
  ...Mc,
  zIndex: Ui,
  // SVG
  fillOpacity: se,
  strokeOpacity: se,
  numOctaves: Ui
}, Sc = {
  ...Ye,
  // Color props
  color: K,
  backgroundColor: K,
  outlineColor: K,
  fill: K,
  stroke: K,
  // Border props
  borderColor: K,
  borderTopColor: K,
  borderRightColor: K,
  borderBottomColor: K,
  borderLeftColor: K,
  filter: jn,
  WebkitFilter: jn,
  mask: Yn,
  WebkitMask: Yn
}, Qr = (t) => Sc[t], Pc = /* @__PURE__ */ new Set([jn, Yn]);
function to(t, e) {
  let n = Qr(t);
  return Pc.has(n) || (n = ft), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const Dc = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Ac(t, e, n) {
  let i = 0, s;
  for (; i < t.length && !s; ) {
    const o = t[i];
    typeof o == "string" && !Dc.has(o) && Wt(o).values.length && (s = t[i]), i++;
  }
  if (s && n)
    for (const o of e)
      t[o] = to(n, s);
}
class Vc extends hi {
  constructor(e, n, i, s, o) {
    super(e, n, i, s, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let d = e[l];
      if (typeof d == "string" && (d = d.trim(), oi(d))) {
        const h = Ur(d, n.current);
        h !== void 0 && (e[l] = h), l === e.length - 1 && (this.finalKeyframe = d);
      }
    }
    if (this.resolveNoneKeyframes(), !Kr.has(i) || e.length !== 2)
      return;
    const [s, o] = e, r = Wi(s), a = Wi(o), c = Ei(s), u = Ei(o);
    if (c !== u && Vt[i]) {
      this.needsMeasurement = !0;
      return;
    }
    if (r !== a)
      if (ji(r) && ji(a))
        for (let l = 0; l < e.length; l++) {
          const d = e[l];
          typeof d == "string" && (e[l] = parseFloat(d));
        }
      else Vt[i] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, i = [];
    for (let s = 0; s < e.length; s++)
      (e[s] === null || bc(e[s])) && i.push(s);
    i.length && Ac(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current)
      return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Vt[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && e.getValue(i, s).jump(s, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: i } = this;
    if (!e || !e.current)
      return;
    const s = e.getValue(n);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1, r = i[o];
    i[o] = Vt[n](e.measureViewportBox(), window.getComputedStyle(e.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), this.removedTransforms?.length && this.removedTransforms.forEach(([a, c]) => {
      e.getValue(a).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function eo(t, e, n) {
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
const zn = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function we(t) {
  return lr(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
}
const { schedule: yi } = /* @__PURE__ */ Tr(queueMicrotask, !1), ht = {
  x: !1,
  y: !1
};
function no() {
  return ht.x || ht.y;
}
function kc(t) {
  return t === "x" || t === "y" ? ht[t] ? null : (ht[t] = !0, () => {
    ht[t] = !1;
  }) : ht.x || ht.y ? null : (ht.x = ht.y = !0, () => {
    ht.x = ht.y = !1;
  });
}
function io(t, e) {
  const n = eo(t), i = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function Ec(t) {
  return !(t.pointerType === "touch" || no());
}
function Rc(t, e, n = {}) {
  const [i, s, o] = io(t, n);
  return i.forEach((r) => {
    let a = !1, c = !1, u;
    const l = () => {
      r.removeEventListener("pointerleave", m);
    }, d = (p) => {
      u && (u(p), u = void 0), l();
    }, h = (p) => {
      a = !1, window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), c && (c = !1, d(p));
    }, f = () => {
      a = !0, window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", h, s);
    }, m = (p) => {
      if (p.pointerType !== "touch") {
        if (a) {
          c = !0;
          return;
        }
        d(p);
      }
    }, y = (p) => {
      if (!Ec(p))
        return;
      c = !1;
      const x = e(r, p);
      typeof x == "function" && (u = x, r.addEventListener("pointerleave", m, s));
    };
    r.addEventListener("pointerenter", y, s), r.addEventListener("pointerdown", f, s);
  }), o;
}
const so = (t, e) => e ? t === e ? !0 : so(t, e.parentElement) : !1, vi = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, Lc = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Ic(t) {
  return Lc.has(t.tagName) || t.isContentEditable === !0;
}
const Bc = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function Nc(t) {
  return Bc.has(t.tagName) || t.isContentEditable === !0;
}
const Te = /* @__PURE__ */ new WeakSet();
function Ki(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function cn(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Oc = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = Ki(() => {
    if (Te.has(n))
      return;
    cn(n, "down");
    const s = Ki(() => {
      cn(n, "up");
    }), o = () => cn(n, "cancel");
    n.addEventListener("keyup", s, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function Gi(t) {
  return vi(t) && !no();
}
const Xi = /* @__PURE__ */ new WeakSet();
function Fc(t, e, n = {}) {
  const [i, s, o] = io(t, n), r = (a) => {
    const c = a.currentTarget;
    if (!Gi(a) || Xi.has(a))
      return;
    Te.add(c), n.stopPropagation && Xi.add(a);
    const u = e(c, a), l = (f, m) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", h), Te.has(c) && Te.delete(c), Gi(f) && typeof u == "function" && u(f, { success: m });
    }, d = (f) => {
      l(f, c === window || c === document || n.useGlobalTarget || so(c, f.target));
    }, h = (f) => {
      l(f, !1);
    };
    window.addEventListener("pointerup", d, s), window.addEventListener("pointercancel", h, s);
  };
  return i.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, s), we(a) && (a.addEventListener("focus", (u) => Oc(u, s)), !Ic(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
function xi(t) {
  return lr(t) && "ownerSVGElement" in t;
}
const Ce = /* @__PURE__ */ new WeakMap();
let Me;
const ro = (t, e, n) => (i, s) => s && s[0] ? s[0][t + "Size"] : xi(i) && "getBBox" in i ? i.getBBox()[e] : i[n], $c = /* @__PURE__ */ ro("inline", "width", "offsetWidth"), jc = /* @__PURE__ */ ro("block", "height", "offsetHeight");
function Yc({ target: t, borderBoxSize: e }) {
  Ce.get(t)?.forEach((n) => {
    n(t, {
      get width() {
        return $c(t, e);
      },
      get height() {
        return jc(t, e);
      }
    });
  });
}
function zc(t) {
  t.forEach(Yc);
}
function _c() {
  typeof ResizeObserver > "u" || (Me = new ResizeObserver(zc));
}
function Hc(t, e) {
  Me || _c();
  const n = eo(t);
  return n.forEach((i) => {
    let s = Ce.get(i);
    s || (s = /* @__PURE__ */ new Set(), Ce.set(i, s)), s.add(e), Me?.observe(i);
  }), () => {
    n.forEach((i) => {
      const s = Ce.get(i);
      s?.delete(e), s?.size || Me?.unobserve(i);
    });
  };
}
const Se = /* @__PURE__ */ new Set();
let _t;
function Wc() {
  _t = () => {
    const t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    Se.forEach((e) => e(t));
  }, window.addEventListener("resize", _t);
}
function Uc(t) {
  return Se.add(t), _t || Wc(), () => {
    Se.delete(t), !Se.size && typeof _t == "function" && (window.removeEventListener("resize", _t), _t = void 0);
  };
}
function qi(t, e) {
  return typeof t == "function" ? Uc(t) : Hc(t, e);
}
function Kc(t) {
  return xi(t) && t.tagName === "svg";
}
const Gc = [...Jr, K, ft], Xc = (t) => Gc.find(Zr(t)), Zi = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ht = () => ({
  x: Zi(),
  y: Zi()
}), Ji = () => ({ min: 0, max: 0 }), G = () => ({
  x: Ji(),
  y: Ji()
}), qc = /* @__PURE__ */ new WeakMap();
function Xe(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function re(t) {
  return typeof t == "string" || Array.isArray(t);
}
const bi = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], wi = ["initial", ...bi];
function qe(t) {
  return Xe(t.animate) || wi.some((e) => re(t[e]));
}
function oo(t) {
  return !!(qe(t) || t.variants);
}
function Zc(t, e, n) {
  for (const i in e) {
    const s = e[i], o = n[i];
    if (tt(s))
      t.addValue(i, s);
    else if (tt(o))
      t.addValue(i, Ut(s, { owner: t }));
    else if (o !== s)
      if (t.hasValue(i)) {
        const r = t.getValue(i);
        r.liveStyle === !0 ? r.jump(s) : r.hasAnimated || r.set(s);
      } else {
        const r = t.getStaticValue(i);
        t.addValue(i, Ut(r !== void 0 ? r : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const _n = { current: null }, ao = { current: !1 }, Jc = typeof window < "u";
function Qc() {
  if (ao.current = !0, !!Jc)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => _n.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      _n.current = !1;
}
const Qi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let ze = {};
function lo(t) {
  ze = t;
}
function tu() {
  return ze;
}
class eu {
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
  constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: s, skipAnimations: o, blockInitialAnimation: r, visualState: a }, c = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = hi, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = it.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, _.render(this.render, !1, !0));
    };
    const { latestValues: u, renderState: l } = a;
    this.latestValues = u, this.baseTarget = { ...u }, this.initialValues = n.initial ? { ...u } : {}, this.renderState = l, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.skipAnimationsConfig = o, this.options = c, this.blockInitialAnimation = !!r, this.isControllingVariants = qe(n), this.isVariantNode = oo(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: d, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in h) {
      const m = h[f];
      u[f] !== void 0 && tt(m) && m.set(u[f]);
    }
  }
  mount(e) {
    if (this.hasBeenMounted)
      for (const n in this.initialValues)
        this.values.get(n)?.jump(this.initialValues[n]), this.latestValues[n] = this.initialValues[n];
    this.current = e, qc.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (ao.current || Qc(), this.shouldReduceMotion = _n.current), process.env.NODE_ENV !== "production" && ii(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), Et(this.notifyUpdate), Et(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
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
    if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), n.accelerate && _r.has(e) && this.current instanceof HTMLElement) {
      const { factory: r, keyframes: a, times: c, ease: u, duration: l } = n.accelerate, d = new Yr({
        element: this.current,
        name: e,
        keyframes: a,
        times: c,
        ease: u,
        duration: /* @__PURE__ */ at(l)
      }), h = r(d);
      this.valueSubscriptions.set(e, () => {
        h(), d.cancel();
      });
      return;
    }
    const i = Zt.has(e);
    i && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (r) => {
      this.latestValues[e] = r, this.props.onUpdate && _.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let o;
    typeof window < "u" && window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      s(), o && o();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in ze) {
      const n = ze[e];
      if (!n)
        continue;
      const { isEnabled: i, Feature: s } = n;
      if (!this.features[e] && s && i(this.props) && (this.features[e] = new s(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : G();
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
    for (let i = 0; i < Qi.length; i++) {
      const s = Qi[i];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const o = "on" + s, r = e[o];
      r && (this.propEventSubscriptions[s] = this.on(s, r));
    }
    this.prevMotionValues = Zc(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return i === void 0 && n !== void 0 && (i = Ut(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (ar(i) || cr(i)) ? i = parseFloat(i) : !Xc(i) && ft.test(n) && (i = to(e, n)), this.setBaseTarget(e, tt(i) ? i.get() : i)), tt(i) ? i.get() : i;
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
      const o = pi(this.props, n, this.presenceContext?.custom);
      o && (i = o[e]);
    }
    if (n && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !tt(s) ? s : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new ni()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    yi.render(this.render);
  }
}
class co extends eu {
  constructor() {
    super(...arguments), this.KeyframeResolver = Vc;
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
    tt(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class Rt {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
function uo({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function nu({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function iu(t, e) {
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
function un(t) {
  return t === void 0 || t === 1;
}
function Hn({ scale: t, scaleX: e, scaleY: n }) {
  return !un(t) || !un(e) || !un(n);
}
function Bt(t) {
  return Hn(t) || ho(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function ho(t) {
  return ts(t.x) || ts(t.y);
}
function ts(t) {
  return t && t !== "0%";
}
function _e(t, e, n) {
  const i = t - n, s = e * i;
  return n + s;
}
function es(t, e, n, i, s) {
  return s !== void 0 && (t = _e(t, s, i)), _e(t, n, i) + e;
}
function Wn(t, e = 0, n = 1, i, s) {
  t.min = es(t.min, e, n, i, s), t.max = es(t.max, e, n, i, s);
}
function fo(t, { x: e, y: n }) {
  Wn(t.x, e.translate, e.scale, e.originPoint), Wn(t.y, n.translate, n.scale, n.originPoint);
}
const ns = 0.999999999999, is = 1.0000000000001;
function su(t, e, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < s; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: c } = o.options;
    c && c.props.style && c.props.style.display === "contents" || (i && o.options.layoutScroll && o.scroll && o !== o.root && (yt(t.x, -o.scroll.offset.x), yt(t.y, -o.scroll.offset.y)), r && (e.x *= r.x.scale, e.y *= r.y.scale, fo(t, r)), i && Bt(o.latestValues) && Pe(t, o.latestValues, o.layout?.layoutBox));
  }
  e.x < is && e.x > ns && (e.x = 1), e.y < is && e.y > ns && (e.y = 1);
}
function yt(t, e) {
  t.min += e, t.max += e;
}
function ss(t, e, n, i, s = 0.5) {
  const o = z(t.min, t.max, s);
  Wn(t, e, n, o, i);
}
function rs(t, e) {
  return typeof t == "string" ? parseFloat(t) / 100 * (e.max - e.min) : t;
}
function Pe(t, e, n) {
  const i = n ?? t;
  ss(t.x, rs(e.x, i.x), e.scaleX, e.scale, e.originX), ss(t.y, rs(e.y, i.y), e.scaleY, e.scale, e.originY);
}
function mo(t, e) {
  return uo(iu(t.getBoundingClientRect(), e));
}
function ru(t, e, n) {
  const i = mo(t, n), { scroll: s } = e;
  return s && (yt(i.x, s.offset.x), yt(i.y, s.offset.y)), i;
}
const ou = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, au = qt.length;
function lu(t, e, n) {
  let i = "", s = !0;
  for (let r = 0; r < au; r++) {
    const a = qt[r], c = t[a];
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
      const l = zn(c, Ye[a]);
      if (!u) {
        s = !1;
        const d = ou[a] || a;
        i += `${d}(${l}) `;
      }
      n && (e[a] = l);
    }
  }
  const o = t.pathRotation;
  return o && (s = !1, i += `rotate(${zn(o, Ye.pathRotation)}) `), i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function Ti(t, e, n) {
  const { style: i, vars: s, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const c in e) {
    const u = e[c];
    if (Zt.has(c)) {
      r = !0;
      continue;
    } else if (Mr(c)) {
      s[c] = u;
      continue;
    } else {
      const l = zn(u, Ye[c]);
      c.startsWith("origin") ? (a = !0, o[c] = l) : i[c] = l;
    }
  }
  if (e.transform || (r || n ? i.transform = lu(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: c = "50%", originY: u = "50%", originZ: l = 0 } = o;
    i.transformOrigin = `${c} ${u} ${l}`;
  }
}
function po(t, { style: e, vars: n }, i, s) {
  const o = t.style;
  let r;
  for (r in e)
    o[r] = e[r];
  s?.applyProjectionStyles(o, i);
  for (r in n)
    o.setProperty(r, n[r]);
}
function os(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Jt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (L.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = os(t, e.target.x), i = os(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, cu = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, s = ft.parse(t);
    if (s.length > 5)
      return i;
    const o = ft.createTransformer(t), r = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * e.x, c = n.y.scale * e.y;
    s[0 + r] /= a, s[1 + r] /= c;
    const u = z(a, c, 0.5);
    return typeof s[2 + r] == "number" && (s[2 + r] /= u), typeof s[3 + r] == "number" && (s[3 + r] /= u), o(s);
  }
}, Un = {
  borderRadius: {
    ...Jt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Jt,
  borderTopRightRadius: Jt,
  borderBottomLeftRadius: Jt,
  borderBottomRightRadius: Jt,
  boxShadow: cu
};
function go(t, { layout: e, layoutId: n }) {
  return Zt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Un[t] || t === "opacity");
}
function Ci(t, e, n) {
  const i = t.style, s = e?.style, o = {};
  if (!i)
    return o;
  for (const r in i)
    (tt(i[r]) || s && tt(s[r]) || go(r, t) || n?.getValue(r)?.liveStyle !== void 0) && (o[r] = i[r]);
  return o;
}
function uu(t) {
  return window.getComputedStyle(t);
}
class du extends co {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = po;
  }
  readValueFromInstance(e, n) {
    if (Zt.has(n))
      return this.projection?.isProjecting ? En(n) : kl(e, n);
    {
      const i = uu(e), s = (Mr(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return mo(e, n);
  }
  build(e, n, i) {
    Ti(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Ci(e, n, i);
  }
}
const hu = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, fu = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function mu(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const o = s ? hu : fu;
  t[o.offset] = `${-i}`, t[o.array] = `${e} ${n}`;
}
const pu = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function yo(t, {
  attrX: e,
  attrY: n,
  attrScale: i,
  pathLength: s,
  pathSpacing: o = 1,
  pathOffset: r = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, c, u, l) {
  if (Ti(t, a, u), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: h } = t;
  d.transform && (h.transform = d.transform, delete d.transform), (h.transform || d.transformOrigin) && (h.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), h.transform && (h.transformBox = l?.transformBox ?? "fill-box", delete d.transformBox);
  for (const f of pu)
    d[f] !== void 0 && (h[f] = d[f], delete d[f]);
  e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), i !== void 0 && (d.scale = i), s !== void 0 && mu(d, s, o, r, !1);
}
const vo = /* @__PURE__ */ new Set([
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
]), xo = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function gu(t, e, n, i) {
  po(t, e, void 0, i);
  for (const s in e.attrs)
    t.setAttribute(vo.has(s) ? s : gi(s), e.attrs[s]);
}
function bo(t, e, n) {
  const i = Ci(t, e, n);
  for (const s in t)
    if (tt(t[s]) || tt(e[s])) {
      const o = qt.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[o] = t[s];
    }
  return i;
}
class yu extends co {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = G;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Zt.has(n)) {
      const i = Qr(n);
      return i && i.default || 0;
    }
    return n = vo.has(n) ? n : gi(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return bo(e, n, i);
  }
  build(e, n, i) {
    yo(e, n, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(e, n, i, s) {
    gu(e, n, i, s);
  }
  mount(e) {
    this.isSVGTag = xo(e.tagName), super.mount(e);
  }
}
const vu = wi.length;
function wo(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? wo(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < vu; n++) {
    const i = wi[n], s = t.props[i];
    (re(s) || s === !1) && (e[i] = s);
  }
  return e;
}
function To(t, e) {
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
const xu = [...bi].reverse(), bu = bi.length;
function wu(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => vc(t, n, i)));
}
function Tu(t) {
  let e = wu(t), n = as(), i = !0, s = !1;
  const o = (u) => (l, d) => {
    const h = $t(t, d, u === "exit" ? t.presenceContext?.custom : void 0);
    if (h) {
      const { transition: f, transitionEnd: m, ...y } = h;
      l = { ...l, ...y, ...m };
    }
    return l;
  };
  function r(u) {
    e = u(t);
  }
  function a(u) {
    const { props: l } = t, d = wo(t.parent) || {}, h = [], f = /* @__PURE__ */ new Set();
    let m = {}, y = 1 / 0;
    for (let x = 0; x < bu; x++) {
      const w = xu[x], g = n[w], b = l[w] !== void 0 ? l[w] : d[w], D = re(b), V = w === u ? g.isActive : null;
      V === !1 && (y = x);
      let k = b === d[w] && b !== l[w] && D;
      if (k && (i || s) && t.manuallyAnimateOnMount && (k = !1), g.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !g.isActive && V === null || // If we didn't and don't have any defined prop for this animation type
      !b && !g.prevProp || // Or if the prop doesn't define an animation
      Xe(b) || typeof b == "boolean")
        continue;
      if (w === "exit" && g.isActive && V !== !0) {
        g.prevResolvedValues && (m = {
          ...m,
          ...g.prevResolvedValues
        });
        continue;
      }
      const A = Cu(g.prevProp, b);
      let E = A || // If we're making this variant active, we want to always make it active
      w === u && g.isActive && !k && D || // If we removed a higher-priority variant (i is in reverse order)
      x > y && D, T = !1;
      const P = Array.isArray(b) ? b : [b];
      let O = P.reduce(o(w), {});
      V === !1 && (O = {});
      const { prevResolvedValues: j = {} } = g, R = {
        ...j,
        ...O
      }, M = (S) => {
        E = !0, f.has(S) && (T = !0, f.delete(S)), g.needsAnimating[S] = !0;
        const I = t.getValue(S);
        I && (I.liveStyle = !1);
      };
      for (const S in R) {
        const I = O[S], N = j[S];
        if (m.hasOwnProperty(S))
          continue;
        let $ = !1;
        On(I) && On(N) ? $ = !To(I, N) || A : $ = I !== N, $ ? I != null ? M(S) : f.add(S) : I !== void 0 && f.has(S) ? M(S) : g.protectedKeys[S] = !0;
      }
      g.prevProp = b, g.prevResolvedValues = O, g.isActive && (m = { ...m, ...O }), (i || s) && t.blockInitialAnimation && (E = !1);
      const C = k && A;
      E && (!C || T) && h.push(...P.map((S) => {
        const I = { type: w };
        if (typeof S == "string" && (i || s) && !C && t.manuallyAnimateOnMount && t.parent) {
          const { parent: N } = t, $ = $t(N, S);
          if (N.enteringChildren && $) {
            const { delayChildren: Y } = $.transition || {};
            I.delay = Hr(N.enteringChildren, t, Y);
          }
        }
        return {
          animation: S,
          options: I
        };
      }));
    }
    if (f.size) {
      const x = {};
      if (typeof l.initial != "boolean") {
        const w = $t(t, Array.isArray(l.initial) ? l.initial[0] : l.initial);
        w && w.transition && (x.transition = w.transition);
      }
      f.forEach((w) => {
        const g = t.getBaseTarget(w), b = t.getValue(w);
        b && (b.liveStyle = !0), x[w] = g ?? null;
      }), h.push({ animation: x });
    }
    let p = !!h.length;
    return i && (l.initial === !1 || l.initial === l.animate) && !t.manuallyAnimateOnMount && (p = !1), i = !1, s = !1, p ? e(h) : Promise.resolve();
  }
  function c(u, l) {
    if (n[u].isActive === l)
      return Promise.resolve();
    t.variantChildren?.forEach((h) => h.animationState?.setActive(u, l)), n[u].isActive = l;
    const d = a(u);
    for (const h in n)
      n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: a,
    setActive: c,
    setAnimateFunction: r,
    getState: () => n,
    reset: () => {
      n = as(), s = !0;
    }
  };
}
function Cu(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !To(e, t) : !1;
}
function It(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function as() {
  return {
    animate: It(!0),
    whileInView: It(),
    whileHover: It(),
    whileTap: It(),
    whileDrag: It(),
    whileFocus: It(),
    exit: It()
  };
}
function Kn(t, e) {
  t.min = e.min, t.max = e.max;
}
function dt(t, e) {
  Kn(t.x, e.x), Kn(t.y, e.y);
}
function ls(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
const Co = 1e-4, Mu = 1 - Co, Su = 1 + Co, Mo = 0.01, Pu = 0 - Mo, Du = 0 + Mo;
function st(t) {
  return t.max - t.min;
}
function Au(t, e, n) {
  return Math.abs(t - e) <= n;
}
function cs(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = z(e.min, e.max, t.origin), t.scale = st(n) / st(e), t.translate = z(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Mu && t.scale <= Su || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Pu && t.translate <= Du || isNaN(t.translate)) && (t.translate = 0);
}
function ee(t, e, n, i) {
  cs(t.x, e.x, n.x, i ? i.originX : void 0), cs(t.y, e.y, n.y, i ? i.originY : void 0);
}
function us(t, e, n, i = 0) {
  const s = i ? z(n.min, n.max, i) : n.min;
  t.min = s + e.min, t.max = t.min + st(e);
}
function Vu(t, e, n, i) {
  us(t.x, e.x, n.x, i?.x), us(t.y, e.y, n.y, i?.y);
}
function ds(t, e, n, i = 0) {
  const s = i ? z(n.min, n.max, i) : n.min;
  t.min = e.min - s, t.max = t.min + st(e);
}
function He(t, e, n, i) {
  ds(t.x, e.x, n.x, i?.x), ds(t.y, e.y, n.y, i?.y);
}
function hs(t, e, n, i, s) {
  return t -= e, t = _e(t, 1 / n, i), s !== void 0 && (t = _e(t, 1 / s, i)), t;
}
function ku(t, e = 0, n = 1, i = 0.5, s, o = t, r = t) {
  if (xt.test(e) && (e = parseFloat(e), e = z(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = z(o.min, o.max, i);
  t === o && (a -= e), t.min = hs(t.min, e, n, a, s), t.max = hs(t.max, e, n, a, s);
}
function fs(t, e, [n, i, s], o, r) {
  ku(t, e[n], e[i], e[s], e.scale, o, r);
}
const Eu = ["x", "scaleX", "originX"], Ru = ["y", "scaleY", "originY"];
function ms(t, e, n, i) {
  fs(t.x, e, Eu, n ? n.x : void 0, i ? i.x : void 0), fs(t.y, e, Ru, n ? n.y : void 0, i ? i.y : void 0);
}
function ps(t) {
  return t.translate === 0 && t.scale === 1;
}
function So(t) {
  return ps(t.x) && ps(t.y);
}
function gs(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Lu(t, e) {
  return gs(t.x, e.x) && gs(t.y, e.y);
}
function ys(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Po(t, e) {
  return ys(t.x, e.x) && ys(t.y, e.y);
}
function vs(t) {
  return st(t.x) / st(t.y);
}
function xs(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
function gt(t) {
  return [t("x"), t("y")];
}
function Iu(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x, o = t.y.translate / e.y, r = n?.z || 0;
  if ((s || o || r) && (i = `translate3d(${s}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: l, pathRotation: d, rotateX: h, rotateY: f, skewX: m, skewY: y } = n;
    u && (i = `perspective(${u}px) ${i}`), l && (i += `rotate(${l}deg) `), d && (i += `rotate(${d}deg) `), h && (i += `rotateX(${h}deg) `), f && (i += `rotateY(${f}deg) `), m && (i += `skewX(${m}deg) `), y && (i += `skewY(${y}deg) `);
  }
  const a = t.x.scale * e.x, c = t.y.scale * e.y;
  return (a !== 1 || c !== 1) && (i += `scale(${a}, ${c})`), i || "none";
}
const Do = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
], Bu = Do.length, bs = (t) => typeof t == "string" ? parseFloat(t) : t, ws = (t) => typeof t == "number" || L.test(t);
function Nu(t, e, n, i, s, o) {
  s ? (t.opacity = z(0, n.opacity ?? 1, Ou(i)), t.opacityExit = z(e.opacity ?? 1, 0, Fu(i))) : o && (t.opacity = z(e.opacity ?? 1, n.opacity ?? 1, i));
  for (let r = 0; r < Bu; r++) {
    const a = Do[r];
    let c = Ts(e, a), u = Ts(n, a);
    if (c === void 0 && u === void 0)
      continue;
    c || (c = 0), u || (u = 0), c === 0 || u === 0 || ws(c) === ws(u) ? (t[a] = Math.max(z(bs(c), bs(u), i), 0), (xt.test(u) || xt.test(c)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = z(e.rotate || 0, n.rotate || 0, i));
}
function Ts(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Ou = /* @__PURE__ */ Ao(0, 0.5, vr), Fu = /* @__PURE__ */ Ao(0.5, 0.95, ut);
function Ao(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ ie(t, e, i));
}
function $u(t, e, n) {
  const i = tt(t) ? t : Ut(t);
  return i.start(mi("", i, e, n)), i.animation;
}
function oe(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
const ju = (t, e) => t.depth - e.depth;
class Yu {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    ei(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    Ne(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(ju), this.isDirty = !1, this.children.forEach(e);
  }
}
function zu(t, e) {
  const n = it.now(), i = ({ timestamp: s }) => {
    const o = s - n;
    o >= e && (Et(i), t(o - e));
  };
  return _.setup(i, !0), () => Et(i);
}
function De(t) {
  return tt(t) ? t.get() : t;
}
class _u {
  constructor() {
    this.members = [];
  }
  add(e) {
    ei(this.members, e);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const i = this.members[n];
      if (i === e || i === this.lead || i === this.prevLead)
        continue;
      const s = i.instance;
      (!s || s.isConnected === !1) && !i.snapshot && (Ne(this.members, i), i.unmount());
    }
    e.scheduleRender();
  }
  remove(e) {
    if (Ne(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
      const { layoutDependency: s } = i.options, { layoutDependency: o } = e.options;
      (s === void 0 || s !== o) && (e.resumeFrom = i, n && (i.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root?.isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && i.hide();
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
const Ae = {
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
}, dn = ["", "X", "Y", "Z"], Hu = 1e3;
let Wu = 0;
function hn(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function Vo(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = Xr(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", _, !(s || o));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && Vo(i);
}
function ko({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(r = {}, a = e?.()) {
      this.id = Wu++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Gu), this.nodes.forEach(td), this.nodes.forEach(ed), this.nodes.forEach(Xu);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Yu());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new ni()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const c = this.eventHandlers.get(r);
      c && c.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r) {
      if (this.instance)
        return;
      this.isSVG = xi(r) && !Kc(r), this.instance = r;
      const { layoutId: a, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (c || a) && (this.isLayoutDirty = !0), t) {
        let l, d = 0;
        const h = () => this.root.updateBlockedByResize = !1;
        _.read(() => {
          d = window.innerWidth;
        }), t(r, () => {
          const f = window.innerWidth;
          f !== d && (d = f, this.root.updateBlockedByResize = !0, l && l(), l = zu(h, 250), Ae.hasAnimatedSinceResize && (Ae.hasAnimatedSinceResize = !1, this.nodes.forEach(Ss)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || c) && this.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: d, hasRelativeLayoutChanged: h, layout: f }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || u.getDefaultTransition() || od, { onLayoutAnimationStart: y, onLayoutAnimationComplete: p } = u.getProps(), x = !this.targetLayout || !Po(this.targetLayout, f), w = !d && h;
        if (this.options.layoutRoot || this.resumeFrom || w || d && (x || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const g = {
            ...fi(m, "layout"),
            onPlay: y,
            onComplete: p
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (g.delay = 0, g.type = !1), this.startAnimation(g), this.setAnimationOrigin(l, w, g.path);
        } else
          d || Ss(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = f;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Et(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(nd), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Vo(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let l = 0; l < this.path.length; l++) {
        const d = this.path[l];
        d.shouldResetTransform = !0, (typeof d.latestValues.x == "string" || typeof d.latestValues.y == "string") && (d.isLayoutDirty = !0), d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: c } = this.options;
      if (a === void 0 && !c)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const c = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), c && this.nodes.forEach(Zu), this.nodes.forEach(Cs);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Ms);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Ju), this.nodes.forEach(Qu), this.nodes.forEach(Uu), this.nodes.forEach(Ku)) : this.nodes.forEach(Ms), this.clearAllSnapshots();
      const a = it.now();
      Q.delta = bt(0, 1e3 / 60, a - Q.timestamp), Q.timestamp = a, Q.isProcessing = !0, nn.update.process(Q), nn.preRender.process(Q), nn.render.process(Q), Q.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, yi.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(qu), this.sharedNodes.forEach(id);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, _.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      _.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !st(this.snapshot.measuredBox.x) && !st(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = G()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a && this.instance) {
        const c = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !So(this.projectionDelta), c = this.getTransformTemplate(), u = c ? c(this.latestValues, "") : void 0, l = u !== this.prevTransformTemplateValue;
      r && this.instance && (a || Bt(this.latestValues) || l) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return r && (c = this.removeTransform(c)), ad(c), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r)
        return G();
      const a = r.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(ld))) {
        const { scroll: u } = this.root;
        u && (yt(a.x, u.offset.x), yt(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      const a = G();
      if (dt(a, r), this.scroll?.wasRoot)
        return a;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: l, options: d } = u;
        u !== this.root && l && d.layoutScroll && (l.wasRoot && dt(a, r), yt(a.x, l.offset.x), yt(a.y, l.offset.y));
      }
      return a;
    }
    applyTransform(r, a = !1, c) {
      const u = c || G();
      dt(u, r);
      for (let l = 0; l < this.path.length; l++) {
        const d = this.path[l];
        !a && d.options.layoutScroll && d.scroll && d !== d.root && (yt(u.x, -d.scroll.offset.x), yt(u.y, -d.scroll.offset.y)), Bt(d.latestValues) && Pe(u, d.latestValues, d.layout?.layoutBox);
      }
      return Bt(this.latestValues) && Pe(u, this.latestValues, this.layout?.layoutBox), u;
    }
    removeTransform(r) {
      const a = G();
      dt(a, r);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!Bt(u.latestValues))
          continue;
        let l;
        u.instance && (Hn(u.latestValues) && u.updateSnapshot(), l = G(), dt(l, u.measurePageBox())), ms(a, u.latestValues, u.snapshot?.layoutBox, l);
      }
      return Bt(this.latestValues) && ms(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Q.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== a;
      if (!(r || c && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: l, layoutId: d } = this.options;
      if (!this.layout || !(l || d))
        return;
      this.resolvedRelativeTargetAt = Q.timestamp;
      const h = this.getClosestProjectingParent();
      h && this.linkedParentVersion !== h.layoutVersion && !h.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && h && h.layout ? this.createRelativeTarget(h, this.layout.layoutBox, h.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = G(), this.targetWithTransforms = G()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Vu(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : dt(this.target, this.layout.layoutBox), fo(this.target, this.targetDelta)) : dt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? this.createRelativeTarget(h, this.target, h.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Hn(this.parent.latestValues) || ho(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(r, a, c) {
      this.relativeParent = r, this.linkedParentVersion = r.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = G(), this.relativeTargetOrigin = G(), He(this.relativeTargetOrigin, a, c, this.options.layoutAnchor || void 0), dt(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const r = this.getLead(), a = !!this.resumingFrom || this !== r;
      let c = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (c = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === Q.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: l } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || l))
        return;
      dt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, h = this.treeScale.y;
      su(this.layoutCorrected, this.treeScale, this.path, a), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = G());
      const { target: f } = r;
      if (!f) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ls(this.prevProjectionDelta.x, this.projectionDelta.x), ls(this.prevProjectionDelta.y, this.projectionDelta.y)), ee(this.projectionDelta, this.layoutCorrected, f, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== h || !xs(this.projectionDelta.x, this.prevProjectionDelta.x) || !xs(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", f));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if (this.options.visualElement?.scheduleRender(), r) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Ht(), this.projectionDelta = Ht(), this.projectionDeltaWithTransform = Ht();
    }
    setAnimationOrigin(r, a = !1, c) {
      const u = this.snapshot, l = u ? u.latestValues : {}, d = { ...this.latestValues }, h = Ht();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = G(), m = u ? u.source : void 0, y = this.layout ? this.layout.source : void 0, p = m !== y, x = this.getStack(), w = !x || x.members.length <= 1, g = !!(p && !w && this.options.crossfade === !0 && !this.path.some(rd));
      this.animationProgress = 0;
      let b;
      const D = c?.interpolateProjection(r);
      this.mixTargetDelta = (V) => {
        const k = V / 1e3, A = D?.(k);
        A ? (h.x.translate = A.x, h.x.scale = z(r.x.scale, 1, k), h.x.origin = r.x.origin, h.x.originPoint = r.x.originPoint, h.y.translate = A.y, h.y.scale = z(r.y.scale, 1, k), h.y.origin = r.y.origin, h.y.originPoint = r.y.originPoint) : (Ps(h.x, r.x, k), Ps(h.y, r.y, k)), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (He(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), sd(this.relativeTarget, this.relativeTargetOrigin, f, k), b && Lu(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = G()), dt(b, this.relativeTarget)), p && (this.animationValues = d, Nu(d, l, this.latestValues, k, g, w)), A && A.rotate !== void 0 && (this.animationValues || (this.animationValues = d), this.animationValues.pathRotation = A.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Et(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = _.update(() => {
        Ae.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Ut(0)), this.motionValue.jump(0, !1), this.currentAnimation = $u(this.motionValue, [0, 1e3], {
          ...r,
          velocity: 0,
          isSync: !0,
          onUpdate: (a) => {
            this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Hu), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: c, layout: u, latestValues: l } = r;
      if (!(!a || !c || !u)) {
        if (this !== r && this.layout && u && Eo(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          c = this.target || G();
          const d = st(this.layout.layoutBox.x);
          c.x.min = r.target.x.min, c.x.max = c.x.min + d;
          const h = st(this.layout.layoutBox.y);
          c.y.min = r.target.y.min, c.y.max = c.y.min + h;
        }
        dt(a, c), Pe(a, l), ee(this.projectionDeltaWithTransform, this.layoutCorrected, a, l);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new _u()), this.sharedNodes.get(r).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: c } = {}) {
      const u = this.getStack();
      u && u.promote(this, c), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: c } = r;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (a = !0), !a)
        return;
      const u = {};
      c.z && hn("z", r, u, this.animationValues);
      for (let l = 0; l < dn.length; l++)
        hn(`rotate${dn[l]}`, r, u, this.animationValues), hn(`skew${dn[l]}`, r, u, this.animationValues);
      r.render();
      for (const l in u)
        r.setStaticValue(l, u[l]), this.animationValues && (this.animationValues[l] = u[l]);
      r.scheduleRender();
    }
    applyProjectionStyles(r, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        r.visibility = "hidden";
        return;
      }
      const c = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, r.visibility = "", r.opacity = "", r.pointerEvents = De(a?.pointerEvents) || "", r.transform = c ? c(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = De(a?.pointerEvents) || ""), this.hasProjected && !Bt(this.latestValues) && (r.transform = c ? c({}, "") : "none", this.hasProjected = !1);
        return;
      }
      r.visibility = "";
      const l = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = Iu(this.projectionDeltaWithTransform, this.treeScale, l);
      c && (d = c(l, d)), r.transform = d;
      const { x: h, y: f } = this.projectionDelta;
      r.transformOrigin = `${h.origin * 100}% ${f.origin * 100}% 0`, u.animationValues ? r.opacity = u === this ? l.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : l.opacityExit : r.opacity = u === this ? l.opacity !== void 0 ? l.opacity : "" : l.opacityExit !== void 0 ? l.opacityExit : 0;
      for (const m in Un) {
        if (l[m] === void 0)
          continue;
        const { correct: y, applyTo: p, isCSSVariable: x } = Un[m], w = d === "none" ? l[m] : y(l[m], u);
        if (p) {
          const g = p.length;
          for (let b = 0; b < g; b++)
            r[p[b]] = w;
        } else
          x ? this.options.visualElement.renderState.vars[m] = w : r[m] = w;
      }
      this.options.layoutId && (r.pointerEvents = u === this ? De(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => r.currentAnimation?.stop()), this.root.nodes.forEach(Cs), this.root.sharedNodes.clear();
    }
  };
}
function Uu(t) {
  t.updateLayout();
}
function Ku(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: i } = t.layout, { animationType: s } = t.options, o = e.source !== t.layout.source;
    if (s === "size")
      gt((l) => {
        const d = o ? e.measuredBox[l] : e.layoutBox[l], h = st(d);
        d.min = n[l].min, d.max = d.min + h;
      });
    else if (s === "x" || s === "y") {
      const l = s === "x" ? "y" : "x";
      Kn(o ? e.measuredBox[l] : e.layoutBox[l], n[l]);
    } else Eo(s, e.layoutBox, n) && gt((l) => {
      const d = o ? e.measuredBox[l] : e.layoutBox[l], h = st(n[l]);
      d.max = d.min + h, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[l].max = t.relativeTarget[l].min + h);
    });
    const r = Ht();
    ee(r, n, e.layoutBox);
    const a = Ht();
    o ? ee(a, t.applyTransform(i, !0), e.measuredBox) : ee(a, n, e.layoutBox);
    const c = !So(r);
    let u = !1;
    if (!t.resumeFrom) {
      const l = t.getClosestProjectingParent();
      if (l && !l.resumeFrom) {
        const { snapshot: d, layout: h } = l;
        if (d && h) {
          const f = t.options.layoutAnchor || void 0, m = G();
          He(m, e.layoutBox, d.layoutBox, f);
          const y = G();
          He(y, n, h.layoutBox, f), Po(m, y) || (u = !0), l.options.layoutRoot && (t.relativeTarget = y, t.relativeTargetOrigin = m, t.relativeParent = l);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: n,
      snapshot: e,
      delta: a,
      layoutDelta: r,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: u
    });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function Gu(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Xu(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function qu(t) {
  t.clearSnapshot();
}
function Cs(t) {
  t.clearMeasurements();
}
function Zu(t) {
  t.isLayoutDirty = !0, t.updateLayout();
}
function Ms(t) {
  t.isLayoutDirty = !1;
}
function Ju(t) {
  t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout, t.isLayoutDirty = !0);
}
function Qu(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Ss(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function td(t) {
  t.resolveTargetDelta();
}
function ed(t) {
  t.calcProjection();
}
function nd(t) {
  t.resetSkewAndRotation();
}
function id(t) {
  t.removeLeadSnapshot();
}
function Ps(t, e, n) {
  t.translate = z(e.translate, 0, n), t.scale = z(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Ds(t, e, n, i) {
  t.min = z(e.min, n.min, i), t.max = z(e.max, n.max, i);
}
function sd(t, e, n, i) {
  Ds(t.x, e.x, n.x, i), Ds(t.y, e.y, n.y, i);
}
function rd(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const od = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, As = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Vs = As("applewebkit/") && !As("chrome/") ? Math.round : ut;
function ks(t) {
  t.min = Vs(t.min), t.max = Vs(t.max);
}
function ad(t) {
  ks(t.x), ks(t.y);
}
function Eo(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !Au(vs(e), vs(n), 0.2);
}
function ld(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const cd = ko({
  attachResizeListener: (t, e) => oe(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), fn = {
  current: void 0
}, Ro = ko({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!fn.current) {
      const t = new cd({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), fn.current = t;
    }
    return fn.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Mi = Kt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function Es(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function ud(...t) {
  return (e) => {
    let n = !1;
    const i = t.map((s) => {
      const o = Es(s, e);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const o = i[s];
          typeof o == "function" ? o() : Es(t[s], null);
        }
      };
  };
}
function dd(...t) {
  return Ue.useCallback(ud(...t), t);
}
class hd extends Ue.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (we(n) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const i = n.offsetParent, s = we(i) && i.offsetWidth || 0, o = we(i) && i.offsetHeight || 0, r = getComputedStyle(n), a = this.props.sizeRef.current;
      a.height = parseFloat(r.height), a.width = parseFloat(r.width), a.top = n.offsetTop, a.left = n.offsetLeft, a.right = s - a.width - a.left, a.bottom = o - a.height - a.top, a.direction = r.direction;
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
function fd({ children: t, isPresent: e, anchorX: n, anchorY: i, root: s, pop: o }) {
  const r = qn(), a = nt(null), c = nt({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: u } = et(Mi), l = t.props?.ref ?? t?.ref, d = dd(a, l);
  return Zn(() => {
    const { width: h, height: f, top: m, left: y, right: p, bottom: x, direction: w } = c.current;
    if (e || o === !1 || !a.current || !h || !f)
      return;
    const g = w === "rtl", b = n === "left" ? g ? `right: ${p}` : `left: ${y}` : g ? `left: ${y}` : `right: ${p}`, D = i === "bottom" ? `bottom: ${x}` : `top: ${m}`;
    a.current.dataset.motionPopId = r;
    const V = document.createElement("style");
    u && (V.nonce = u);
    const k = s ?? document.head;
    return k.appendChild(V), V.sheet && V.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${f}px !important;
            ${b}px !important;
            ${D}px !important;
          }
        `), () => {
      a.current?.removeAttribute("data-motion-pop-id"), k.contains(V) && k.removeChild(V);
    };
  }, [e]), v(hd, { isPresent: e, childRef: a, sizeRef: c, pop: o, children: o === !1 ? t : Ue.cloneElement(t, { ref: d }) });
}
const md = ({ children: t, initial: e, isPresent: n, onExitComplete: i, custom: s, presenceAffectsLayout: o, mode: r, anchorX: a, anchorY: c, root: u }) => {
  const l = ti(pd), d = qn();
  let h = !0, f = St(() => (h = !1, {
    id: d,
    initial: e,
    isPresent: n,
    custom: s,
    onExitComplete: (m) => {
      l.set(m, !0);
      for (const y of l.values())
        if (!y)
          return;
      i && i();
    },
    register: (m) => (l.set(m, !1), () => l.delete(m))
  }), [n, l, i]);
  return o && h && (f = { ...f }), St(() => {
    l.forEach((m, y) => l.set(y, !1));
  }, [n]), Ue.useEffect(() => {
    !n && !l.size && i && i();
  }, [n]), t = v(fd, { pop: r === "popLayout", isPresent: n, anchorX: a, anchorY: c, root: u, children: t }), v(Ke.Provider, { value: f, children: t });
};
function pd() {
  return /* @__PURE__ */ new Map();
}
function Lo(t = !0) {
  const e = et(Ke);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, o = qn();
  wt(() => {
    if (t)
      return s(o);
  }, [t]);
  const r = Js(() => t && i && i(o), [o, i, t]);
  return !n && i ? [!1, r] : [!0];
}
const ye = (t) => t.key || "";
function Rs(t) {
  const e = [];
  return Go.forEach(t, (n) => {
    Xo(n) && e.push(n);
  }), e;
}
const ae = ({ children: t, custom: e, initial: n = !0, onExitComplete: i, presenceAffectsLayout: s = !0, mode: o = "sync", propagate: r = !1, anchorX: a = "left", anchorY: c = "top", root: u }) => {
  const [l, d] = Lo(r), h = St(() => Rs(t), [t]), f = r && !l ? [] : h.map(ye), m = nt(!0), y = nt(h), p = ti(() => /* @__PURE__ */ new Map()), x = nt(/* @__PURE__ */ new Set()), [w, g] = X(h), [b, D] = X(h);
  or(() => {
    m.current = !1, y.current = h;
    for (let A = 0; A < b.length; A++) {
      const E = ye(b[A]);
      f.includes(E) ? (p.delete(E), x.current.delete(E)) : p.get(E) !== !0 && p.set(E, !1);
    }
  }, [b, f.length, f.join("-")]);
  const V = [];
  if (h !== w) {
    let A = [...h];
    for (let E = 0; E < b.length; E++) {
      const T = b[E], P = ye(T);
      f.includes(P) || (A.splice(E, 0, T), V.push(T));
    }
    return o === "wait" && V.length && (A = V), D(Rs(A)), g(h), null;
  }
  process.env.NODE_ENV !== "production" && o === "wait" && b.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: k } = et(Qn);
  return v(Zs, { children: b.map((A) => {
    const E = ye(A), T = r && !l ? !1 : h === b || f.includes(E), P = () => {
      if (x.current.has(E))
        return;
      if (p.has(E))
        x.current.add(E), p.set(E, !0);
      else
        return;
      let O = !0;
      p.forEach((j) => {
        j || (O = !1);
      }), O && (k?.(), D(y.current), r && d?.(), i && i());
    };
    return v(md, { isPresent: T, initial: !m.current || n ? void 0 : !1, custom: e, presenceAffectsLayout: s, mode: o, root: u, onExitComplete: T ? void 0 : P, anchorX: a, anchorY: c, children: A }, E);
  }) });
}, Io = Kt({ strict: !1 }), Ls = {
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
let Is = !1;
function gd() {
  if (Is)
    return;
  const t = {};
  for (const e in Ls)
    t[e] = {
      isEnabled: (n) => Ls[e].some((i) => !!n[i])
    };
  lo(t), Is = !0;
}
function Bo() {
  return gd(), tu();
}
function yd(t) {
  const e = Bo();
  for (const n in t)
    e[n] = {
      ...e[n],
      ...t[n]
    };
  lo(e);
}
const vd = /* @__PURE__ */ new Set([
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
function We(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || vd.has(t);
}
let No = (t) => !We(t);
function xd(t) {
  typeof t == "function" && (No = (e) => e.startsWith("on") ? !We(e) : t(e));
}
try {
  xd(require("@emotion/is-prop-valid").default);
} catch {
}
function bd(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || tt(t[s]) || (No(s) || n === !0 && We(s) || !e && !We(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
const Ze = /* @__PURE__ */ Kt({});
function wd(t, e) {
  if (qe(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || re(n) ? n : void 0,
      animate: re(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Td(t) {
  const { initial: e, animate: n } = wd(t, et(Ze));
  return St(() => ({ initial: e, animate: n }), [Bs(e), Bs(n)]);
}
function Bs(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Si = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Oo(t, e, n) {
  for (const i in e)
    !tt(e[i]) && !go(i, n) && (t[i] = e[i]);
}
function Cd({ transformTemplate: t }, e) {
  return St(() => {
    const n = Si();
    return Ti(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function Md(t, e) {
  const n = t.style || {}, i = {};
  return Oo(i, n, t), Object.assign(i, Cd(t, e)), i;
}
function Sd(t, e) {
  const n = {}, i = Md(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
const Fo = () => ({
  ...Si(),
  attrs: {}
});
function Pd(t, e, n, i) {
  const s = St(() => {
    const o = Fo();
    return yo(o, e, xo(i), t.transformTemplate, t.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    Oo(o, t.style, t), s.style = { ...o, ...s.style };
  }
  return s;
}
const Dd = [
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
function Pi(t) {
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
      !!(Dd.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function Ad(t, e, n, { latestValues: i }, s, o = !1, r) {
  const c = (r ?? Pi(t) ? Pd : Sd)(e, i, s, t), u = bd(e, typeof t == "string", o), l = t !== Qs ? { ...u, ...c, ref: n } : {}, { children: d } = e, h = St(() => tt(d) ? d.get() : d, [d]);
  return qo(t, {
    ...l,
    children: h
  });
}
function Vd({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, i, s) {
  return {
    latestValues: kd(n, i, s, t),
    renderState: e()
  };
}
function kd(t, e, n, i) {
  const s = {}, o = i(t, {});
  for (const h in o)
    s[h] = De(o[h]);
  let { initial: r, animate: a } = t;
  const c = qe(t), u = oo(t);
  e && u && !c && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let l = n ? n.initial === !1 : !1;
  l = l || r === !1;
  const d = l ? a : r;
  if (d && typeof d != "boolean" && !Xe(d)) {
    const h = Array.isArray(d) ? d : [d];
    for (let f = 0; f < h.length; f++) {
      const m = pi(t, h[f]);
      if (m) {
        const { transitionEnd: y, transition: p, ...x } = m;
        for (const w in x) {
          let g = x[w];
          if (Array.isArray(g)) {
            const b = l ? g.length - 1 : 0;
            g = g[b];
          }
          g !== null && (s[w] = g);
        }
        for (const w in y)
          s[w] = y[w];
      }
    }
  }
  return s;
}
const $o = (t) => (e, n) => {
  const i = et(Ze), s = et(Ke), o = () => Vd(t, e, i, s);
  return n ? o() : ti(o);
}, Ed = /* @__PURE__ */ $o({
  scrapeMotionValuesFromProps: Ci,
  createRenderState: Si
}), Rd = /* @__PURE__ */ $o({
  scrapeMotionValuesFromProps: bo,
  createRenderState: Fo
}), Ld = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function Id(t, e, n) {
  const i = nt(n);
  Zn(() => {
    i.current = n;
  });
  const s = nt(null);
  return Js((o) => {
    o && t.onMount?.(o), e && (o ? e.mount(o) : e.unmount());
    const r = i.current;
    if (typeof r == "function")
      if (o) {
        const a = r(o);
        typeof a == "function" && (s.current = a);
      } else s.current ? (s.current(), s.current = null) : r(o);
    else r && (r.current = o);
  }, [e]);
}
const jo = Kt({});
function jt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Bd(t, e, n, i, s, o) {
  const { visualElement: r } = et(Ze), a = et(Io), c = et(Ke), u = et(Mi), l = u.reducedMotion, d = u.skipAnimations, h = nt(null), f = nt(!1);
  i = i || a.renderer, !h.current && i && (h.current = i(t, {
    visualState: e,
    parent: r,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: l,
    skipAnimations: d,
    isSVG: o
  }), f.current && h.current && (h.current.manuallyAnimateOnMount = !0));
  const m = h.current, y = et(jo);
  m && !m.projection && s && (m.type === "html" || m.type === "svg") && Nd(h.current, n, s, y);
  const p = nt(!1);
  Zn(() => {
    m && p.current && m.update(n, c);
  });
  const x = n[Gr], w = nt(!!x && typeof window < "u" && !window.MotionHandoffIsComplete?.(x) && window.MotionHasOptimisedAnimation?.(x));
  return or(() => {
    f.current = !0, m && (p.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), w.current && m.animationState && m.animationState.animateChanges());
  }), wt(() => {
    m && (!w.current && m.animationState && m.animationState.animateChanges(), w.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(x);
    }), w.current = !1), m.enteringChildren = void 0);
  }), m;
}
function Nd(t, e, n, i) {
  const { layoutId: s, layout: o, drag: r, dragConstraints: a, layoutScroll: c, layoutRoot: u, layoutAnchor: l, layoutCrossfade: d } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Yo(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: o,
    alwaysMeasureLayout: !!r || a && jt(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: i,
    crossfade: d,
    layoutScroll: c,
    layoutRoot: u,
    layoutAnchor: l
  });
}
function Yo(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Yo(t.parent);
}
function mn(t, { forwardMotionProps: e = !1, type: n } = {}, i, s) {
  i && yd(i);
  const o = n ? n === "svg" : Pi(t), r = o ? Rd : Ed;
  function a(u, l) {
    let d;
    const h = {
      ...et(Mi),
      ...u,
      layoutId: Od(u)
    }, { isStatic: f } = h, m = Td(u), y = r(u, f);
    if (!f && typeof window < "u") {
      Fd(h, i);
      const p = $d(h);
      d = p.MeasureLayout, m.visualElement = Bd(t, y, h, s, p.ProjectionNode, o);
    }
    return F(Ze.Provider, { value: m, children: [d && m.visualElement ? v(d, { visualElement: m.visualElement, ...h }) : null, Ad(t, u, Id(y, m.visualElement, l), y, f, e, o)] });
  }
  a.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const c = Zo(a);
  return c[Ld] = t, c;
}
function Od({ layoutId: t }) {
  const e = et(Qn).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Fd(t, e) {
  const n = et(Io).strict;
  if (process.env.NODE_ENV !== "production" && e && n) {
    const i = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? Gt(!1, i, "lazy-strict-mode") : Pt(!1, i, "lazy-strict-mode");
  }
}
function $d(t) {
  const e = Bo(), { drag: n, layout: i } = e;
  if (!n && !i)
    return {};
  const s = { ...n, ...i };
  return {
    MeasureLayout: n?.isEnabled(t) || i?.isEnabled(t) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
function jd(t, e) {
  if (typeof Proxy > "u")
    return mn;
  const n = /* @__PURE__ */ new Map(), i = (o, r) => mn(o, r, t, e), s = (o, r) => (process.env.NODE_ENV !== "production" && ii(!1, "motion() is deprecated. Use motion.create() instead."), i(o, r));
  return new Proxy(s, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, r) => r === "create" ? i : (n.has(r) || n.set(r, mn(r, void 0, t, e)), n.get(r))
  });
}
const Yd = (t, e) => e.isSVG ?? Pi(t) ? new yu(e) : new du(e, {
  allowProjection: t !== Qs
});
class zd extends Rt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = Tu(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    Xe(e) && (this.unmountControls = e.subscribe(this.node));
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
let _d = 0;
class Hd extends Rt {
  constructor() {
    super(...arguments), this.id = _d++, this.isExitComplete = !1;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i)
      return;
    if (e && i === !1) {
      if (this.isExitComplete) {
        const { initial: o, custom: r } = this.node.getProps();
        if (typeof o == "string" || typeof o == "object" && o !== null && !Array.isArray(o)) {
          const a = $t(this.node, o, r);
          if (a) {
            const { transition: c, transitionEnd: u, ...l } = a;
            for (const d in l)
              this.node.getValue(d)?.jump(l[d]);
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
const Wd = {
  animation: {
    Feature: zd
  },
  exit: {
    Feature: Hd
  }
};
function he(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const Ud = (t) => (e) => vi(e) && t(e, he(e));
function ne(t, e, n, i) {
  return oe(t, e, Ud(n), i);
}
const zo = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Ns = (t, e) => Math.abs(t - e);
function Kd(t, e) {
  const n = Ns(t.x, e.x), i = Ns(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
const Os = /* @__PURE__ */ new Set(["auto", "scroll"]);
class _o {
  constructor(e, n, { transformPagePoint: i, contextWindow: s = window, dragSnapToOrigin: o = !1, distanceThreshold: r = 3, element: a } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (f) => {
      this.handleScroll(f.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = ve(this.lastRawMoveEventInfo, this.transformPagePoint));
      const f = pn(this.lastMoveEventInfo, this.history), m = this.startEvent !== null, y = Kd(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!m && !y)
        return;
      const { point: p } = f, { timestamp: x } = Q;
      this.history.push({ ...p, timestamp: x });
      const { onStart: w, onMove: g } = this.handlers;
      m || (w && w(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, m) => {
      this.lastMoveEvent = f, this.lastRawMoveEventInfo = m, this.lastMoveEventInfo = ve(m, this.transformPagePoint), _.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, m) => {
      this.end();
      const { onEnd: y, onSessionEnd: p, resumeAnimation: x } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && x && x(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const w = pn(f.type === "pointercancel" ? this.lastMoveEventInfo : ve(m, this.transformPagePoint), this.history);
      this.startEvent && y && y(f, w), p && p(f, w);
    }, !vi(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = i, this.distanceThreshold = r, this.contextWindow = s || window;
    const c = he(e), u = ve(c, this.transformPagePoint), { point: l } = u, { timestamp: d } = Q;
    this.history = [{ ...l, timestamp: d }];
    const { onSessionStart: h } = n;
    h && h(e, pn(u, this.history)), this.removeListeners = ce(ne(this.contextWindow, "pointermove", this.handlePointerMove), ne(this.contextWindow, "pointerup", this.handlePointerUp), ne(this.contextWindow, "pointercancel", this.handlePointerUp)), a && this.startScrollTracking(a);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(e) {
    let n = e.parentElement;
    for (; n; ) {
      const i = getComputedStyle(n);
      (Os.has(i.overflowX) || Os.has(i.overflowY)) && this.scrollPositions.set(n, {
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
    }, o = { x: s.x - n.x, y: s.y - n.y };
    o.x === 0 && o.y === 0 || (i ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += o.x, this.lastMoveEventInfo.point.y += o.y) : this.history.length > 0 && (this.history[0].x -= o.x, this.history[0].y -= o.y), this.scrollPositions.set(e, s), _.update(this.updatePoint, !0));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Et(this.updatePoint);
  }
}
function ve(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Fs(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function pn({ point: t }, e) {
  return {
    point: t,
    delta: Fs(t, Ho(e)),
    offset: Fs(t, Gd(e)),
    velocity: Xd(e, 0.1)
  };
}
function Gd(t) {
  return t[0];
}
function Ho(t) {
  return t[t.length - 1];
}
function Xd(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const s = Ho(t);
  for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > /* @__PURE__ */ at(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  i === t[0] && t.length > 2 && s.timestamp - i.timestamp > /* @__PURE__ */ at(e) * 2 && (i = t[1]);
  const o = /* @__PURE__ */ ct(s.timestamp - i.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (s.x - i.x) / o,
    y: (s.y - i.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function qd(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? z(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? z(n, t, i.max) : Math.min(t, n)), t;
}
function $s(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Zd(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: $s(t.x, n, s),
    y: $s(t.y, e, i)
  };
}
function js(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Jd(t, e) {
  return {
    x: js(t.x, e.x),
    y: js(t.y, e.y)
  };
}
function Qd(t, e) {
  let n = 0.5;
  const i = st(t), s = st(e);
  return s > i ? n = /* @__PURE__ */ ie(e.min, e.max - i, t.min) : i > s && (n = /* @__PURE__ */ ie(t.min, t.max - s, e.min)), bt(0, 1, n);
}
function th(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Gn = 0.35;
function eh(t = Gn) {
  return t === !1 ? t = 0 : t === !0 && (t = Gn), {
    x: Ys(t, "left", "right"),
    y: Ys(t, "top", "bottom")
  };
}
function Ys(t, e, n) {
  return {
    min: zs(t, e),
    max: zs(t, n)
  };
}
function zs(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const nh = /* @__PURE__ */ new WeakMap();
class ih {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = G(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: i } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const o = (d) => {
      n && this.snapToCursor(he(d).point), this.stopAnimation();
    }, r = (d, h) => {
      const { drag: f, dragPropagation: m, onDragStart: y } = this.getProps();
      if (f && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = kc(f), !this.openDragLock))
        return;
      this.latestPointerEvent = d, this.latestPanInfo = h, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), gt((x) => {
        let w = this.getAxisMotionValue(x).get() || 0;
        if (xt.test(w)) {
          const { projection: g } = this.visualElement;
          if (g && g.layout) {
            const b = g.layout.layoutBox[x];
            b && (w = st(b) * (parseFloat(w) / 100));
          }
        }
        this.originPoint[x] = w;
      }), y && _.update(() => y(d, h), !1, !0), Fn(this.visualElement, "transform");
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (d, h) => {
      this.latestPointerEvent = d, this.latestPanInfo = h;
      const { dragPropagation: f, dragDirectionLock: m, onDirectionLock: y, onDrag: p } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: x } = h;
      if (m && this.currentDirection === null) {
        this.currentDirection = rh(x), this.currentDirection !== null && y && y(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, x), this.updateAxis("y", h.point, x), this.visualElement.render(), p && _.update(() => p(d, h), !1, !0);
    }, c = (d, h) => {
      this.latestPointerEvent = d, this.latestPanInfo = h, this.stop(d, h), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => {
      const { dragSnapToOrigin: d } = this.getProps();
      (d || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new _o(e, {
      onSessionStart: o,
      onStart: r,
      onMove: a,
      onSessionEnd: c,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: l,
      distanceThreshold: i,
      contextWindow: zo(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(e, n) {
    const i = e || this.latestPointerEvent, s = n || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !s || !i)
      return;
    const { velocity: r } = s;
    this.startAnimation(r);
    const { onDragEnd: a } = this.getProps();
    a && _.postRender(() => a(i, s));
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
    if (!i || !xe(e, s, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (r = qd(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
    e && jt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = Zd(i.layoutBox, e) : this.constraints = !1, this.elastic = eh(n), s !== this.constraints && !jt(e) && i && this.constraints && !this.hasMutatedConstraints && gt((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = th(i.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !jt(e))
      return !1;
    const i = e.current;
    Pt(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    s.root && (s.root.scroll = void 0, s.root.updateScroll());
    const o = ru(i, s.root, this.visualElement.getTransformPagePoint());
    let r = Jd(s.layout.layoutBox, o);
    if (n) {
      const a = n(nu(r));
      this.hasMutatedConstraints = !!a, a && (r = uo(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), c = this.constraints || {}, u = gt((l) => {
      if (!xe(l, n, this.currentDirection))
        return;
      let d = c && c[l] || {};
      (r === !0 || r === l) && (d = { min: 0, max: 0 });
      const h = s ? 200 : 1e6, f = s ? 40 : 1e7, m = {
        type: "inertia",
        velocity: i ? e[l] : 0,
        bounceStiffness: h,
        bounceDamping: f,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...d
      };
      return this.startAxisValueAnimation(l, m);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return Fn(this.visualElement, e), i.start(mi(e, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    gt((e) => this.getAxisMotionValue(e).stop());
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
    gt((n) => {
      const { drag: i } = this.getProps();
      if (!xe(n, i, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, o = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: r, max: a } = s.layout.layoutBox[n], c = o.get() || 0;
        o.set(e[n] - z(r, a, 0.5) + c);
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
    if (!jt(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    gt((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const c = a.get();
        s[r] = Qd({ min: c, max: c }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.constraints = !1, this.resolveConstraints(), gt((r) => {
      if (!xe(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: c, max: u } = this.constraints[r];
      a.set(z(c, u, s[r]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    nh.set(this.visualElement, this);
    const e = this.visualElement.current, n = ne(e, "pointerdown", (u) => {
      const { drag: l, dragListener: d = !0 } = this.getProps(), h = u.target, f = h !== e && Nc(h);
      l && d && !f && this.start(u);
    });
    let i;
    const s = () => {
      const { dragConstraints: u } = this.getProps();
      jt(u) && u.current && (this.constraints = this.resolveRefConstraints(), i || (i = sh(e, u.current, () => this.scalePositionWithinConstraints())));
    }, { projection: o } = this.visualElement, r = o.addEventListener("measure", s);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), _.read(s);
    const a = oe(window, "resize", () => this.scalePositionWithinConstraints()), c = o.addEventListener("didUpdate", (({ delta: u, hasLayoutChanged: l }) => {
      this.isDragging && l && (gt((d) => {
        const h = this.getAxisMotionValue(d);
        h && (this.originPoint[d] += u[d].translate, h.set(h.get() + u[d].translate));
      }), this.visualElement.render());
    }));
    return () => {
      a(), n(), r(), c && c(), i && i();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: o = !1, dragElastic: r = Gn, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function _s(t) {
  let e = !0;
  return () => {
    if (e) {
      e = !1;
      return;
    }
    t();
  };
}
function sh(t, e, n) {
  const i = qi(t, _s(n)), s = qi(e, _s(n));
  return () => {
    i(), s();
  };
}
function xe(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function rh(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class oh extends Rt {
  constructor(e) {
    super(e), this.removeGroupControls = ut, this.removeListeners = ut, this.controls = new ih(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ut;
  }
  update() {
    const { dragControls: e } = this.node.getProps(), { dragControls: n } = this.node.prevProps || {};
    e !== n && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const gn = (t) => (e, n) => {
  t && _.update(() => t(e, n), !1, !0);
};
class ah extends Rt {
  constructor() {
    super(...arguments), this.removePointerDownListener = ut;
  }
  onPointerDown(e) {
    this.session = new _o(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: zo(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: gn(e),
      onStart: gn(n),
      onMove: gn(i),
      onEnd: (o, r) => {
        delete this.session, s && _.postRender(() => s(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = ne(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let yn = !1;
class lh extends Jo {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: o } = e;
    o && (n.group && n.group.add(o), i && i.register && s && i.register(o), yn && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), Ae.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: o } = this.props, { projection: r } = i;
    return r && (r.isPresent = o, e.layoutDependency !== n && r.setOptions({
      ...r.options,
      layoutDependency: n
    }), yn = !0, s || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || _.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: e, layoutAnchor: n } = this.props, { projection: i } = e;
    i && (i.options.layoutAnchor = n, i.root.didUpdate(), yi.postRender(() => {
      !i.currentAnimation && i.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: s } = e;
    yn = !0, s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), i && i.deregister && i.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Wo(t) {
  const [e, n] = Lo(), i = et(Qn);
  return v(lh, { ...t, layoutGroup: i, switchLayoutGroup: et(jo), isPresent: e, safeToRemove: n });
}
const ch = {
  pan: {
    Feature: ah
  },
  drag: {
    Feature: oh,
    ProjectionNode: Ro,
    MeasureLayout: Wo
  }
};
function Hs(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, o = i[s];
  o && _.postRender(() => o(e, he(e)));
}
class uh extends Rt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Rc(e, (n, i) => (Hs(this.node, i, "Start"), (s) => Hs(this.node, s, "End"))));
  }
  unmount() {
  }
}
class dh extends Rt {
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
    this.unmount = ce(oe(this.node.current, "focus", () => this.onFocus()), oe(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Ws(t, e, n) {
  const { props: i } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), o = i[s];
  o && _.postRender(() => o(e, he(e)));
}
class hh extends Rt {
  mount() {
    const { current: e } = this.node;
    if (!e)
      return;
    const { globalTapTarget: n, propagate: i } = this.node.props;
    this.unmount = Fc(e, (s, o) => (Ws(this.node, o, "Start"), (r, { success: a }) => Ws(this.node, r, a ? "End" : "Cancel")), {
      useGlobalTarget: n,
      stopPropagation: i?.tap === !1
    });
  }
  unmount() {
  }
}
const Xn = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), fh = (t) => {
  const e = Xn.get(t.target);
  e && e(t);
}, mh = (t) => {
  t.forEach(fh);
};
function ph({ root: t, ...e }) {
  const n = t || document;
  vn.has(n) || vn.set(n, {});
  const i = vn.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(mh, { root: t, ...e })), i[s];
}
function gh(t, e, n) {
  const i = ph(e);
  return Xn.set(t, n), i.observe(t), () => {
    Xn.delete(t), i.unobserve(t);
  };
}
const yh = {
  some: 0,
  all: 1
};
class vh extends Rt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : yh[s]
    }, a = (c) => {
      const { isIntersecting: u } = c;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: l, onViewportLeave: d } = this.node.getProps(), h = u ? l : d;
      h && h(c);
    };
    this.stopObserver = gh(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(xh(e, n)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function xh({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const bh = {
  inView: {
    Feature: vh
  },
  tap: {
    Feature: hh
  },
  focus: {
    Feature: dh
  },
  hover: {
    Feature: uh
  }
}, wh = {
  layout: {
    ProjectionNode: Ro,
    MeasureLayout: Wo
  }
}, Th = {
  ...Wd,
  ...bh,
  ...ch,
  ...wh
}, H = /* @__PURE__ */ jd(Th, Yd);
function Ch(t) {
  return mt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" } }] })(t);
}
function Mh(t) {
  return mt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" } }] })(t);
}
function Sh(t) {
  return mt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" } }] })(t);
}
function Ph(t) {
  return mt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" } }] })(t);
}
function Dh(t) {
  return mt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" } }] })(t);
}
function Ah(t) {
  return mt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" } }] })(t);
}
function Vh(t) {
  return mt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" } }] })(t);
}
function kh(t) {
  return mt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" } }] })(t);
}
function Eh(t) {
  return mt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" } }] })(t);
}
function Rh(t) {
  return mt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }] })(t);
}
const lf = ({
  title: t,
  subtitle: e,
  footer: n,
  children: i,
  className: s,
  elevation: o = "md",
  hoverEffect: r = !0,
  collapsible: a = !1,
  defaultCollapsed: c = !1,
  onClickEdit: u,
  onClickDelete: l,
  theme: d
}) => {
  const [h, f] = X(c), m = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  }[o], y = d?.sizes?.borderRadius || "rounded-md", p = d?.colors?.background || "bg-white dark:bg-gray-900", x = d?.colors?.text || "text-gray-700 dark:text-gray-200", w = d?.colors?.subtitle || "text-gray-500 dark:text-gray-400";
  return /* @__PURE__ */ F(
    Qo,
    {
      className: vt(
        "transition-all",
        p,
        m,
        y,
        r && "hover:shadow-xl hover:scale-[1.01] cursor-pointer",
        s
      ),
      style: {
        width: d?.sizes?.width,
        height: d?.sizes?.height,
        padding: d?.sizes?.padding
      },
      children: [
        (t || e || a || l || u) && /* @__PURE__ */ v(
          ta,
          {
            className: "relative flex flex-col items-center",
            style: { minHeight: d?.sizes?.headerHeight },
            children: /* @__PURE__ */ F("div", { className: "flex justify-between w-full items-center", children: [
              /* @__PURE__ */ F("div", { className: "flex flex-col text-center w-full", children: [
                t && /* @__PURE__ */ v(ea, { className: `text-lg font-semibold ${x}`, children: t }),
                e && /* @__PURE__ */ v(na, { className: `${w} text-sm`, children: e })
              ] }),
              /* @__PURE__ */ F("div", { className: "flex items-center gap-2", children: [
                u && u && /* @__PURE__ */ v(
                  Eh,
                  {
                    onClick: u,
                    className: vt(
                      "w-10 h-10 !p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                      d?.colors?.edit || "text-[var(--ion-color-secondary-shade)]"
                    )
                  }
                ),
                l && l && /* @__PURE__ */ v(
                  Mh,
                  {
                    onClick: l,
                    className: vt(
                      "w-10 h-10 !p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                      d?.colors?.delete || "text-[var(--ion-color-danger)]"
                    )
                  }
                ),
                a && /* @__PURE__ */ v(
                  H.div,
                  {
                    initial: !1,
                    animate: { rotate: h ? 0 : 180 },
                    transition: { duration: 0.3 },
                    className: "text-xl flex-center cursor-pointer",
                    onClick: () => f(!h),
                    children: /* @__PURE__ */ v(Ta, {})
                  }
                )
              ] })
            ] })
          }
        ),
        !h && i && /* @__PURE__ */ v(
          ia,
          {
            style: {
              padding: d?.contentCard?.padding,
              backgroundColor: d?.contentCard?.background,
              color: d?.contentCard?.text
            },
            className: `${x} text-sm`,
            children: i
          }
        ),
        n && /* @__PURE__ */ v(
          tr,
          {
            className: "!p-4 border-t dark:border-gray-700",
            style: { backgroundColor: d?.colors?.footer },
            children: n
          }
        )
      ]
    }
  );
}, Lh = {
  "top-left": "top-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0",
  "bottom-left": "bottom-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
}, Ih = (t) => {
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
}, cf = ({
  message: t,
  type: e = "info",
  duration: n = 3e3,
  show: i,
  onClose: s,
  className: o,
  position: r = "bottom-center"
}) => {
  const { main: a, contrast: c } = Z("success"), { main: u, contrast: l } = Z("danger"), { main: d, contrast: h } = Z("warning"), { main: f, contrast: m } = Z("info"), y = {
    success: {
      bg: a,
      color: c,
      icon: /* @__PURE__ */ v(Ch, { size: 20 })
    },
    error: { bg: u, color: l, icon: /* @__PURE__ */ v(Dh, { size: 20 }) },
    warning: {
      bg: d,
      color: h,
      icon: /* @__PURE__ */ v(Ah, { size: 20 })
    },
    info: { bg: f, color: m, icon: /* @__PURE__ */ v(Sh, { size: 20 }) }
  }, { bg: p, color: x, icon: w } = y[e];
  wt(() => {
    if (i && n) {
      const b = setTimeout(() => s?.(), n);
      return () => clearTimeout(b);
    }
  }, [i, n]);
  const g = Ih(r);
  return /* @__PURE__ */ v(ae, { children: i && /* @__PURE__ */ v("div", { className: `fixed z-9999 pointer-events-none w-[95vw] max-w-[360px] ${Lh[r]}`, children: /* @__PURE__ */ F(
    H.div,
    {
      ...g,
      transition: { duration: 0.3 },
      className: `pointer-events-auto w-full rounded-lg! p-4! flex items-center shadow-lg ${o}`,
      style: { backgroundColor: p, color: x },
      children: [
        /* @__PURE__ */ F("div", { className: "flex items-center gap-2 flex-1", children: [
          w,
          /* @__PURE__ */ v(sa, { className: "text-[14px] font-medium", children: t })
        ] }),
        /* @__PURE__ */ v(
          "button",
          {
            onClick: () => s?.(),
            style: {
              marginLeft: 12,
              padding: 6,
              borderRadius: "50%"
            },
            children: /* @__PURE__ */ v(Rh, { size: 18 })
          }
        )
      ]
    }
  ) }) });
}, uf = ({
  isOpen: t,
  onDismiss: e,
  title: n,
  subtitle: i,
  children: s,
  footer: o,
  showCloseButton: r = !0,
  className: a,
  headerClassName: c,
  contentClassName: u,
  footerClassName: l,
  ...d
}) => /* @__PURE__ */ F(
  er,
  {
    isOpen: t,
    onDidDismiss: e,
    className: vt("rounded-lg overflow-hidden modal-height-full", a),
    ...d,
    children: [
      (n || i || r) && /* @__PURE__ */ v(ra, { className: vt("ion-no-border", c), children: /* @__PURE__ */ v(oa, { children: /* @__PURE__ */ F("div", { className: "flex flex-col items-center text-center w-full", children: [
        /* @__PURE__ */ v("div", { className: "w-full flex justify-end", children: r && /* @__PURE__ */ v(aa, { slot: "end", children: /* @__PURE__ */ v(bn, { onClick: e, children: /* @__PURE__ */ v(sr, { size: 20 }) }) }) }),
        /* @__PURE__ */ F("div", { className: "flex flex-col", children: [
          n && /* @__PURE__ */ v(la, { className: "text-lg font-semibold", children: n }),
          i && /* @__PURE__ */ v("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: i })
        ] })
      ] }) }) }),
      /* @__PURE__ */ v(
        ca,
        {
          style: {
            "--padding-start": "1rem",
            "--padding-end": "1rem",
            "--padding-top": "1rem",
            "--padding-bottom": "1rem"
          },
          className: vt("!p-4 text-gray-700 dark:text-gray-200", u),
          children: s
        }
      ),
      o && /* @__PURE__ */ v(tr, { className: vt("border-t border-gray-200 dark:border-gray-700 !p-4", l), children: o })
    ]
  }
);
function Bh() {
  const [t, e] = X("action-sheet");
  return wt(() => {
    const n = window.matchMedia("(min-width: 768px)"), i = (s) => {
      e(s.matches ? "popover" : "action-sheet");
    };
    return i(n), n.addEventListener("change", i), () => n.removeEventListener("change", i);
  }, []), t;
}
function df({
  label: t,
  value: e,
  items: n,
  getLabel: i,
  getValue: s,
  onValueChange: o,
  placeholder: r = "Selecione...",
  error: a = !1,
  helperText: c = "",
  disabled: u = !1,
  loading: l = !1,
  color: d = "neutral",
  style: h,
  fill: f = "outline",
  shape: m = "round",
  ...y
}) {
  const p = nt(null), x = Bh(), { main: w } = Z(d), g = (D) => {
    const V = D.detail.value, k = n.find((A) => s(A) === V);
    k && o(k);
  }, b = {
    ...h,
    "--border-color": a ? Ca.danger : w,
    "--icon-color": w,
    "--color": "var(--ion-color-dark)",
    "--placeholder-color": "var(--ion-color-medium)"
  };
  return /* @__PURE__ */ F("div", { className: "relative flex flex-col", style: { minHeight: 72 }, children: [
    t && /* @__PURE__ */ v("label", { className: "text-xs font-medium !pl-6", children: t }),
    /* @__PURE__ */ v(
      nr,
      {
        ref: p,
        interface: x,
        placeholder: r,
        value: e,
        disabled: u || l,
        onIonChange: g,
        onClick: (D) => {
          D.persist?.(), y.interfaceOptions = {
            ...y.interfaceOptions,
            event: D.nativeEvent
          };
        },
        interfaceOptions: {
          header: t
        },
        fill: f,
        shape: m,
        mode: "md",
        labelPlacement: "stacked",
        style: b,
        ...y,
        children: n.map((D, V) => /* @__PURE__ */ v(wn, { value: s(D), children: i(D) }, V))
      }
    ),
    a && c && /* @__PURE__ */ v(Le, { className: "text-[12px] !pl-6 text-[var(--ion-color-danger)]", children: c })
  ] });
}
const hf = ({
  isOpen: t = !1,
  message: e = "Carregando...",
  color: n = "primary",
  type: i = "circular",
  withBg: s = !0,
  withText: o = !0
}) => {
  const { main: r, contrast: a } = Z(n);
  return t ? i === "linear" ? /* @__PURE__ */ v(ae, { children: /* @__PURE__ */ F(
    H.div,
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
        /* @__PURE__ */ v(
          H.div,
          {
            style: {
              height: "100%",
              width: "50%",
              backgroundColor: r,
              opacity: 1,
              position: "absolute",
              borderRadius: 2
            },
            animate: { x: ["-100%", "200%"] },
            transition: { repeat: 1 / 0, duration: 1.5, ease: "easeInOut" }
          }
        ),
        /* @__PURE__ */ v(
          H.div,
          {
            style: {
              height: "100%",
              width: "50%",
              backgroundColor: r,
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
  ) }) : /* @__PURE__ */ v(ae, { children: /* @__PURE__ */ v(
    H.div,
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
      children: /* @__PURE__ */ F(
        "div",
        {
          style: {
            backgroundColor: s ? r : "transparent",
            color: a,
            padding: "1.5rem 2rem",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            minWidth: "180px"
          },
          children: [
            i === "circular" ? /* @__PURE__ */ v(le, { name: "crescent", color: "light" }) : /* @__PURE__ */ v("div", { style: { display: "flex", gap: "0.5rem" }, children: [...Array(3)].map((c, u) => /* @__PURE__ */ v(
              H.div,
              {
                style: {
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: a
                },
                animate: { y: ["0%", "-50%", "0%"] },
                transition: {
                  repeat: 1 / 0,
                  duration: 0.6,
                  delay: u * 0.2
                }
              },
              u
            )) }),
            o && /* @__PURE__ */ v("span", { style: { fontSize: "14px", fontWeight: 500, textAlign: "center" }, children: e })
          ]
        }
      )
    }
  ) }) : null;
}, ff = ({
  content: t,
  children: e,
  color: n = "light",
  placement: i = "top",
  trigger: s = "hover",
  stopPropagation: o = !1,
  tooltipStyle: r = {}
}) => {
  const [a, c] = X(!1), { main: u, contrast: l } = Z(n), d = {
    top: { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8 },
    bottom: { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8 },
    left: { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: 8 },
    right: { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: 8 }
  };
  return /* @__PURE__ */ F(
    "div",
    {
      className: "relative inline-block",
      onMouseEnter: () => s === "hover" && c(!0),
      onMouseLeave: () => s === "hover" && c(!1),
      onClick: (y) => {
        s === "click" && (o && y.stopPropagation(), c(!a));
      },
      children: [
        e,
        /* @__PURE__ */ v(ae, { children: a && /* @__PURE__ */ v(
          H.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { duration: 0.2 },
            style: {
              ...d[i],
              position: "absolute",
              backgroundColor: u,
              color: l,
              padding: "0.4rem 0.8rem",
              borderRadius: "8px",
              whiteSpace: "normal",
              // agora quebra linha
              fontSize: "0.875rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              zIndex: 9999,
              ...r
              // aplica estilos customizados
            },
            children: t
          }
        ) })
      ]
    }
  );
}, mf = ({
  label: t,
  checked: e,
  disabled: n = !1,
  variant: i = "filled",
  onChange: s,
  color: o = "primary"
}) => {
  const { main: r, contrast: a } = Z(o), c = {
    borderColor: e ? r : "#d1d5db",
    backgroundColor: i === "filled" && e ? r : "#ffffff",
    color: e && i === "filled" ? a : e ? r : "inherit"
  };
  return /* @__PURE__ */ F(
    "div",
    {
      className: vt(
        "flex items-center gap-2 cursor-pointer select-none",
        n && "cursor-not-allowed opacity-60"
      ),
      onClick: () => !n && s(!e),
      children: [
        /* @__PURE__ */ v(
          H.div,
          {
            whileTap: { scale: 0.9 },
            style: c,
            className: "w-5 h-5 rounded-md flex items-center justify-center border-2 transition-all",
            children: e && /* @__PURE__ */ v(
              H.svg,
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "w-3.5 h-3.5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: 3,
                initial: { scale: 0 },
                animate: { scale: 1 },
                children: /* @__PURE__ */ v("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" })
              }
            )
          }
        ),
        t && /* @__PURE__ */ v("label", { className: "text-sm font-medium cursor-pointer", children: t })
      ]
    }
  );
}, pf = ({
  label: t,
  value: e,
  placeholder: n = "",
  rows: i = 4,
  error: s,
  disabled: o = !1,
  color: r = "neutral",
  onChangeValue: a,
  fill: c = "outline",
  shape: u = "round",
  maxLength: l,
  ...d
}) => {
  const { main: h } = Z(r), { main: f } = Z("danger"), [m, y] = X(!1), [p, x] = X(!1);
  wt(() => x(!!e), [e]);
  const w = s ? f : m || p ? h : "var(--ion-color-medium)", g = l ? l - e.length : void 0, b = g !== void 0 && g < 0;
  return /* @__PURE__ */ F("div", { className: "relative flex flex-col", style: { minHeight: 72 }, children: [
    t && /* @__PURE__ */ v("label", { className: "text-xs font-medium !pl-6", children: t }),
    /* @__PURE__ */ v(
      ua,
      {
        value: e,
        placeholder: n,
        rows: i,
        fill: c,
        shape: u === "round" ? "round" : void 0,
        disabled: o,
        labelPlacement: "stacked",
        maxlength: l,
        style: {
          "--border-color": w,
          "--highlight-color-focused": h,
          color: "var(--ion-color-dark)"
        },
        className: vt(
          "text-sm resize-none focus:outline-none",
          o && "opacity-60 cursor-not-allowed"
        ),
        onIonFocus: () => y(!0),
        onIonBlur: () => y(!1),
        onIonInput: (D) => a(D.detail.value ?? ""),
        ...d
      }
    ),
    /* @__PURE__ */ F("div", { className: "flex justify-between mt-1", children: [
      /* @__PURE__ */ v(Le, { className: "text-[12px] !pl-6 text-[var(--ion-color-danger)]", children: s && /* @__PURE__ */ v("span", { children: s }) }),
      l && /* @__PURE__ */ F(
        Le,
        {
          className: vt(
            "text-[12px] !pr-6",
            b ? "text-[var(--ion-color-danger)]" : "text-gray-500"
          ),
          children: [
            g,
            " caractere",
            g === 1 ? "" : "s",
            " restantes"
          ]
        }
      )
    ] })
  ] });
}, gf = ({
  label: t,
  checked: e,
  disabled: n = !1,
  type: i = "checkbox",
  onChange: s,
  color: o = "primary",
  labelPlacement: r = "start",
  styleDiv: a
}) => {
  const { main: c, contrast: u } = Z(o);
  if (i === "switch")
    return /* @__PURE__ */ v("div", { className: `w-auto ${a}`, children: /* @__PURE__ */ v(
      da,
      {
        checked: e,
        disabled: n,
        color: o,
        labelPlacement: r,
        onIonChange: (l) => s(l.detail.checked),
        style: {
          "--background-checked": c,
          // fundo quando ativo
          "--handle-background-checked": u
          // cor do "pino" quando ativo
        },
        children: t
      }
    ) });
  if (i === "radio")
    return /* @__PURE__ */ v("div", { className: `w-auto ${a}`, children: /* @__PURE__ */ v(
      ha,
      {
        value: e ? "selected" : "unselected",
        onIonChange: (l) => s(l.detail.value === "selected"),
        className: "flex items-center gap-2",
        children: /* @__PURE__ */ v(
          fa,
          {
            value: "selected",
            color: o,
            disabled: n,
            labelPlacement: r,
            className: "flex-1",
            style: {
              "--background-checked": c,
              "--border-color": c,
              "--border-color-checked": c,
              "--mark-color": u
              // cor do ponto central
            },
            children: t && /* @__PURE__ */ v("span", { children: t })
          }
        )
      }
    ) });
  if (i === "checkbox")
    return /* @__PURE__ */ v("div", { className: `w-auto ${a}`, children: /* @__PURE__ */ v(
      ma,
      {
        checked: e,
        disabled: n,
        color: o,
        labelPlacement: r,
        onIonChange: (l) => s(l.detail.checked),
        style: {
          "--border-color": c,
          // borda normal
          "--background-checked": c,
          // fundo quando marcado
          "--border-color-checked": c,
          // borda quando marcado
          "--checkmark-color": u
          // cor do check
        },
        children: t && /* @__PURE__ */ v("span", { className: "ml-2", children: t })
      }
    ) });
}, yf = ({
  tooltip: t,
  icon: e = rr,
  onClick: n,
  recording: i,
  loading: s = !1,
  showCancel: o = !1,
  onCancel: r,
  cancelIcon: a = sr,
  disabled: c = !1,
  className: u,
  color: l = "primary"
}) => {
  const [d, h] = X(!0), [f, m] = X(!0), { main: y, contrast: p } = Z(l);
  return wt(() => {
    const x = setTimeout(() => {
      h(!1), setTimeout(() => {
        m(!1);
      }, 800);
    }, 3e3);
    return () => clearTimeout(x);
  }, []), /* @__PURE__ */ v("div", { style: { position: "relative" }, children: /* @__PURE__ */ v(ae, { mode: "wait", children: /* @__PURE__ */ F(
    H.div,
    {
      className: `fixed bottom-24 right-2 z-[1000] flex-center ${u} `,
      animate: d ? { width: 250, height: 55 } : { width: 55, height: 55 },
      transition: { duration: 0.8, ease: "easeInOut" },
      children: [
        /* @__PURE__ */ F(ir, { vertical: "bottom", horizontal: "end", slot: "fixed", children: [
          /* @__PURE__ */ v(
            Tn,
            {
              onClick: n,
              disabled: c || s,
              style: { "--box-shadow": !d && "none", "--background": y, "--color": p },
              children: s ? /* @__PURE__ */ v(le, { name: "crescent", className: "text-[var(--ion-color-text-fixed)]" }) : xn.createElement(e, { className: "text-[26px]" })
            }
          ),
          o && r && /* @__PURE__ */ v(
            H.div,
            {
              className: "absolute bottom-[70px] right-[12px] pointer-events-none",
              animate: i ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: 10, pointerEvents: "none" },
              transition: { duration: 0.3 },
              children: /* @__PURE__ */ v(
                Tn,
                {
                  color: "danger",
                  className: "w-[35px] h-[35px]",
                  onClick: r,
                  children: xn.createElement(a, { className: "text-[22px]" })
                }
              )
            }
          )
        ] }),
        t && f && /* @__PURE__ */ v(
          H.div,
          {
            className: "absolute right-[10px] bottom-2 !pr-13 h-[58px] overflow-hidden rounded-full flex items-center justify-center",
            style: { backgroundColor: y, color: p },
            initial: { width: 0, opacity: 0, filter: "blur(4px)" },
            animate: d ? { width: "auto", opacity: 1, filter: "blur(0px)" } : { width: 0, opacity: 0, filter: "blur(4px)" },
            transition: { duration: 0.5, ease: "easeOut" },
            children: /* @__PURE__ */ v(
              H.div,
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
};
function vf({
  data: t,
  columns: e = [],
  placeholder: n = "Filtrar...",
  onChange: i,
  initialQuery: s,
  className: o = "",
  inputClassName: r = "",
  selectClassName: a = "",
  style: c
}) {
  const [u, l] = X(s ?? ""), [d, h] = X(), f = nt(i);
  return f.current = i, wt(() => {
    if (!u) {
      f.current(t);
      return;
    }
    const m = u.toLowerCase(), y = t.filter((p) => d ? String(p[d] ?? "").toLowerCase().includes(m) : Object.values(p).some(
      (x) => String(x).toLowerCase().includes(m)
    ));
    f.current(y);
  }, [u, d, JSON.stringify(t)]), /* @__PURE__ */ F(
    "div",
    {
      className: `flex items-center gap-3 bg-gray-100 rounded-lg shadow-sm !p-2 ${o}`,
      style: c,
      children: [
        /* @__PURE__ */ v(Ma, { className: "text-gray-500" }),
        /* @__PURE__ */ v(
          pa,
          {
            value: u,
            placeholder: n,
            onIonInput: (m) => l(m.detail.value),
            clearInput: !0,
            className: `flex-1 ${r}`
          }
        ),
        e.length > 0 && /* @__PURE__ */ F("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ v(Sa, { className: "text-gray-500", size: 20 }),
          /* @__PURE__ */ F(
            nr,
            {
              value: d,
              placeholder: "Coluna",
              onIonChange: (m) => h(m.detail.value),
              interface: "popover",
              className: a,
              children: [
                /* @__PURE__ */ v(wn, { value: void 0, children: "Todas" }),
                e.map((m) => /* @__PURE__ */ v(wn, { value: m.value, children: m.label }, m.value))
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Nh = ({
  steps: t,
  initialStep: e = 0,
  color: n = "primary",
  className: i,
  classNameContent: s,
  style: o,
  showButtonNext: r = !0,
  showButtonPrev: a = !0,
  nextLabel: c = "Próximo",
  prevLabel: u = "Voltar",
  disableNext: l,
  disablePrev: d,
  onNext: h,
  onPrev: f,
  theme: m
}) => {
  const [y, p] = X(e), { main: x, contrast: w } = Z(n), g = m?.stepper, b = g?.circle?.background ?? x, D = g?.circle?.text ?? w, V = g?.line ?? x, k = async () => {
    if (h && await h(y) === !1)
      return;
    const E = y + 1;
    E < t.length && p(E);
  }, A = async () => {
    if (f && await f(y) === !1)
      return;
    const E = y - 1;
    E >= 0 && p(E);
  };
  return /* @__PURE__ */ F("div", { className: `flex flex-col gap-4 ${i ?? ""}`, style: o, children: [
    /* @__PURE__ */ v("div", { className: "flex items-center justify-between w-full relative", children: t.map((E, T) => {
      const P = T === y, O = T < y;
      return /* @__PURE__ */ F(
        "div",
        {
          className: "flex-1 relative flex flex-col items-center",
          children: [
            /* @__PURE__ */ F("div", { className: "relative flex items-center justify-center w-full", children: [
              T < t.length - 1 && /* @__PURE__ */ F(
                "div",
                {
                  className: "absolute top-1/2 left-1/2 -translate-y-1/2",
                  style: {
                    width: "100%",
                    height: 2,
                    zIndex: 0
                  },
                  children: [
                    /* @__PURE__ */ v(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          inset: 0,
                          background: "#d1d5db"
                        }
                      }
                    ),
                    /* @__PURE__ */ v(
                      H.div,
                      {
                        style: {
                          position: "absolute",
                          inset: 0,
                          background: V,
                          transformOrigin: "left"
                        },
                        initial: !1,
                        animate: {
                          scaleX: O ? 1 : 0
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
              /* @__PURE__ */ v(
                H.div,
                {
                  className: "w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 cursor-pointer shrink-0",
                  initial: !1,
                  animate: {
                    backgroundColor: P || O ? b : "#ffffff",
                    borderColor: P || O ? b : "#d1d5db",
                    color: P || O ? D : "#6b7280",
                    scale: P ? [1, 1.08, 1] : 1
                  },
                  transition: {
                    backgroundColor: {
                      duration: 0.2,
                      delay: P || O ? 0.4 : 0
                    },
                    borderColor: {
                      duration: 0.2,
                      delay: P || O ? 0.4 : 0
                    },
                    color: {
                      duration: 0.2,
                      delay: P || O ? 0.4 : 0
                    },
                    scale: {
                      duration: 0.25,
                      delay: P || O ? 0.4 : 0,
                      ease: "easeOut"
                    }
                  },
                  onClick: () => p(T),
                  whileHover: { scale: 1.1 },
                  whileTap: { scale: 0.95 },
                  children: E.icon ?? T + 1
                }
              )
            ] }),
            /* @__PURE__ */ v(
              "span",
              {
                className: "text-sm text-center mt-2",
                style: { color: g?.titleColor },
                children: E.title
              }
            )
          ]
        },
        T
      );
    }) }),
    /* @__PURE__ */ v("div", { className: s, children: t[y].content }),
    /* @__PURE__ */ F("div", { className: "flex justify-between w-full mt-2", children: [
      a && /* @__PURE__ */ v(
        Be,
        {
          disabled: d ? d(y) : y === 0,
          onClick: A,
          iconStart: /* @__PURE__ */ v(Vh, {}),
          children: typeof u == "function" ? u(y, t.length) : u,
          color: n,
          variant: g?.button?.prev?.variant ?? "solid",
          backgroundColor: g?.button?.prev?.background,
          textColor: g?.button?.prev?.text,
          borderColor: g?.button?.prev?.border,
          hoverColor: g?.button?.prev?.hover,
          rounded: g?.button?.prev?.rounded,
          activeColor: g?.button?.prev?.active
        }
      ),
      r && /* @__PURE__ */ v(
        Be,
        {
          disabled: l ? l(y) : y === t.length - 1,
          onClick: k,
          iconEnd: /* @__PURE__ */ v(kh, {}),
          children: typeof c == "function" ? c(y, t.length) : c,
          color: n,
          variant: g?.button?.next?.variant ?? "solid",
          backgroundColor: g?.button?.next?.background,
          textColor: g?.button?.next?.text,
          borderColor: g?.button?.next?.border,
          hoverColor: g?.button?.next?.hover,
          rounded: g?.button?.next?.rounded,
          activeColor: g?.button?.next?.active
        }
      )
    ] })
  ] });
}, Oh = ({
  steps: t,
  initialStep: e = 0,
  color: n = "primary",
  className: i,
  classNameContent: s,
  style: o,
  showButtonNext: r = !0,
  showButtonPrev: a = !0,
  nextLabel: c = "Próximo",
  prevLabel: u = "Voltar",
  disableNext: l,
  disablePrev: d,
  onNext: h,
  onPrev: f,
  theme: m
}) => {
  const [y, p] = X(e), { main: x, contrast: w } = Z(n), g = m?.stepper, b = g?.circle?.background ?? x, D = g?.circle?.text ?? w, V = g?.line ?? x, k = g?.titleColor ?? "#111827", A = async () => {
    if (console.log("canProceed"), h) {
      const P = await h(y);
      if (console.log("canProceed", P), P === !1) return;
    }
    const T = y + 1;
    T < t.length && p(T);
  }, E = async () => {
    if (f && await f(y) === !1)
      return;
    const T = y - 1;
    T >= 0 && p(T);
  };
  return /* @__PURE__ */ v("div", { className: `flex flex-col gap-4 ${i ?? ""}`, style: o, children: t.map((T, P) => {
    const O = P === y, j = P < y;
    return /* @__PURE__ */ F("div", { className: "relative flex items-start gap-4", children: [
      /* @__PURE__ */ v("div", { className: "flex flex-col items-center relative", children: /* @__PURE__ */ v(
        H.div,
        {
          className: "w-10 h-10 rounded-full border-2 flex items-center justify-center cursor-pointer z-10",
          onClick: () => p(P),
          style: {
            backgroundColor: O || j ? b : "#ffffff",
            color: O || j ? D : "#6b7280",
            borderColor: O || j ? b : "#d1d5db"
          },
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.95 },
          children: T.icon ?? P + 1
        }
      ) }),
      P !== t.length - 1 && /* @__PURE__ */ v(
        H.div,
        {
          style: {
            width: 2,
            backgroundColor: O || j ? V : "#d1d5db",
            position: "absolute",
            height: "100%",
            left: 18,
            top: 16
          }
        }
      ),
      /* @__PURE__ */ F("div", { className: "flex-1", children: [
        /* @__PURE__ */ v(
          "div",
          {
            className: "font-semibold text-base",
            style: { color: k },
            children: T.title
          }
        ),
        /* @__PURE__ */ F(
          H.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: {
              height: O ? "auto" : 0,
              opacity: O ? 1 : 0
            },
            transition: { duration: 0.4, ease: "easeInOut" },
            className: "overflow-hidden mt-1",
            children: [
              /* @__PURE__ */ v("div", { className: `mb-2 ${s}`, children: T.content }),
              /* @__PURE__ */ F("div", { className: "flex w-full mt-2 pb-2", children: [
                r && /* @__PURE__ */ v(
                  Be,
                  {
                    disabled: l?.(y),
                    onClick: A,
                    children: typeof c == "function" ? c(y, t.length) : c,
                    color: n,
                    className: "text-[12px]! mr-2",
                    variant: g?.button?.next?.variant ?? "solid",
                    backgroundColor: g?.button?.next?.background,
                    textColor: g?.button?.next?.text,
                    borderColor: g?.button?.next?.border,
                    hoverColor: g?.button?.next?.hover,
                    rounded: g?.button?.next?.rounded,
                    activeColor: g?.button?.next?.active
                  }
                ),
                a && /* @__PURE__ */ v(
                  Be,
                  {
                    disabled: d ? d(y) : y === 0,
                    onClick: E,
                    children: typeof u == "function" ? u(y, t.length) : u,
                    color: n,
                    variant: g?.button?.prev?.variant ?? "clear",
                    className: "text-[12px]!",
                    backgroundColor: g?.button?.prev?.background,
                    textColor: g?.button?.prev?.text,
                    borderColor: g?.button?.prev?.border,
                    hoverColor: g?.button?.prev?.hover,
                    rounded: g?.button?.prev?.rounded,
                    activeColor: g?.button?.prev?.active
                  }
                )
              ] })
            ]
          }
        )
      ] })
    ] }, P);
  }) });
}, xf = ({
  steps: t,
  variant: e = "tabs",
  initialStep: n = 0,
  orientation: i = "horizontal",
  color: s = "primary",
  className: o,
  style: r,
  classNameContent: a,
  showButtonPrev: c = !0,
  showButtonNext: u = !0,
  nextLabel: l,
  prevLabel: d,
  disableNext: h,
  disablePrev: f,
  onNext: m,
  onPrev: y,
  onTabChange: p,
  theme: x
}) => {
  const [w, g] = X(n);
  if (e === "tabs") {
    const b = x?.tabs;
    return /* @__PURE__ */ F("div", { style: r, children: [
      /* @__PURE__ */ v(
        ga,
        {
          scrollable: b?.segment?.scrollable,
          value: w.toString(),
          onIonChange: (D) => {
            const V = D.detail.value;
            if (V != null) {
              const k = parseInt(V.toString(), 10);
              g(k), p?.(k);
            }
          },
          style: {
            background: b?.segment?.background,
            borderRadius: b?.segment?.borderRadius,
            padding: b?.segment?.padding,
            border: b?.segment?.border
          },
          className: `w-full ${o} ${b?.segment?.hideIndicator ? "cb-tabs-no-indicator" : ""}`,
          children: t.map((D, V) => {
            const k = V === w;
            return /* @__PURE__ */ v(
              ya,
              {
                value: V.toString(),
                style: {
                  background: k ? b?.button?.activeBackground : b?.button?.background,
                  color: k ? b?.button?.activeText : b?.button?.text,
                  border: b?.button?.border,
                  borderRadius: b?.button?.rounded !== !1 ? "9999px" : void 0
                },
                children: /* @__PURE__ */ v(Ie, { children: D.title })
              },
              V
            );
          })
        }
      ),
      /* @__PURE__ */ v("div", { className: a ?? "p-4", children: t[w].content })
    ] });
  }
  if (e === "accordion") {
    const b = x?.accordion;
    return /* @__PURE__ */ v(
      va,
      {
        value: w.toString(),
        onIonChange: (D) => {
          g(parseInt(D.detail.value ?? "-1", 10));
        },
        className: `${o ?? ""} ${b?.indicator?.hide ? "cb-acc-no-indicator" : ""}`,
        style: r,
        children: t.map((D, V) => /* @__PURE__ */ F(
          xa,
          {
            value: V.toString(),
            children: [
              /* @__PURE__ */ v(
                Cn,
                {
                  slot: "header",
                  style: {
                    background: b?.header?.background,
                    color: b?.header?.color,
                    border: b?.header?.border,
                    borderRadius: b?.header?.borderRadius,
                    padding: b?.header?.padding,
                    "--ripple-color": "transparent"
                  },
                  children: /* @__PURE__ */ v(Ie, { children: D.title })
                }
              ),
              /* @__PURE__ */ v(
                "div",
                {
                  slot: "content",
                  style: {
                    background: b?.content?.background,
                    color: b?.content?.color,
                    padding: b?.content?.padding ?? "16px"
                  },
                  children: D.content
                }
              )
            ]
          },
          V
        ))
      }
    );
  }
  if (e === "stepper") {
    const b = {
      steps: t,
      initialStep: n,
      color: s,
      className: o,
      style: r,
      classNameContent: a,
      showButtonPrev: c,
      showButtonNext: u,
      nextLabel: l,
      prevLabel: d,
      disableNext: h,
      disablePrev: f,
      onNext: m,
      onPrev: y,
      theme: x
    };
    return i === "horizontal" ? /* @__PURE__ */ v(Nh, { ...b }) : /* @__PURE__ */ v(Oh, { ...b });
  }
  return null;
};
var Ve = { exports: {} }, Fh = Ve.exports, Us;
function Uo() {
  return Us || (Us = 1, (function(t, e) {
    (function(n, i) {
      t.exports = i();
    })(Fh, (function() {
      var n = 1e3, i = 6e4, s = 36e5, o = "millisecond", r = "second", a = "minute", c = "hour", u = "day", l = "week", d = "month", h = "quarter", f = "year", m = "date", y = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(R) {
        var M = ["th", "st", "nd", "rd"], C = R % 100;
        return "[" + R + (M[(C - 20) % 10] || M[C] || M[0]) + "]";
      } }, g = function(R, M, C) {
        var B = String(R);
        return !B || B.length >= M ? R : "" + Array(M + 1 - B.length).join(C) + R;
      }, b = { s: g, z: function(R) {
        var M = -R.utcOffset(), C = Math.abs(M), B = Math.floor(C / 60), S = C % 60;
        return (M <= 0 ? "+" : "-") + g(B, 2, "0") + ":" + g(S, 2, "0");
      }, m: function R(M, C) {
        if (M.date() < C.date()) return -R(C, M);
        var B = 12 * (C.year() - M.year()) + (C.month() - M.month()), S = M.clone().add(B, d), I = C - S < 0, N = M.clone().add(B + (I ? -1 : 1), d);
        return +(-(B + (C - S) / (I ? S - N : N - S)) || 0);
      }, a: function(R) {
        return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
      }, p: function(R) {
        return { M: d, y: f, w: l, d: u, D: m, h: c, m: a, s: r, ms: o, Q: h }[R] || String(R || "").toLowerCase().replace(/s$/, "");
      }, u: function(R) {
        return R === void 0;
      } }, D = "en", V = {};
      V[D] = w;
      var k = "$isDayjsObject", A = function(R) {
        return R instanceof O || !(!R || !R[k]);
      }, E = function R(M, C, B) {
        var S;
        if (!M) return D;
        if (typeof M == "string") {
          var I = M.toLowerCase();
          V[I] && (S = I), C && (V[I] = C, S = I);
          var N = M.split("-");
          if (!S && N.length > 1) return R(N[0]);
        } else {
          var $ = M.name;
          V[$] = M, S = $;
        }
        return !B && S && (D = S), S || !B && D;
      }, T = function(R, M) {
        if (A(R)) return R.clone();
        var C = typeof M == "object" ? M : {};
        return C.date = R, C.args = arguments, new O(C);
      }, P = b;
      P.l = E, P.i = A, P.w = function(R, M) {
        return T(R, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
      };
      var O = (function() {
        function R(C) {
          this.$L = E(C.locale, null, !0), this.parse(C), this.$x = this.$x || C.x || {}, this[k] = !0;
        }
        var M = R.prototype;
        return M.parse = function(C) {
          this.$d = (function(B) {
            var S = B.date, I = B.utc;
            if (S === null) return /* @__PURE__ */ new Date(NaN);
            if (P.u(S)) return /* @__PURE__ */ new Date();
            if (S instanceof Date) return new Date(S);
            if (typeof S == "string" && !/Z$/i.test(S)) {
              var N = S.match(p);
              if (N) {
                var $ = N[2] - 1 || 0, Y = (N[7] || "0").substring(0, 3);
                return I ? new Date(Date.UTC(N[1], $, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, Y)) : new Date(N[1], $, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, Y);
              }
            }
            return new Date(S);
          })(C), this.init();
        }, M.init = function() {
          var C = this.$d;
          this.$y = C.getFullYear(), this.$M = C.getMonth(), this.$D = C.getDate(), this.$W = C.getDay(), this.$H = C.getHours(), this.$m = C.getMinutes(), this.$s = C.getSeconds(), this.$ms = C.getMilliseconds();
        }, M.$utils = function() {
          return P;
        }, M.isValid = function() {
          return this.$d.toString() !== y;
        }, M.isSame = function(C, B) {
          var S = T(C);
          return this.startOf(B) <= S && S <= this.endOf(B);
        }, M.isAfter = function(C, B) {
          return T(C) < this.startOf(B);
        }, M.isBefore = function(C, B) {
          return this.endOf(B) < T(C);
        }, M.$g = function(C, B, S) {
          return P.u(C) ? this[B] : this.set(S, C);
        }, M.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, M.valueOf = function() {
          return this.$d.getTime();
        }, M.startOf = function(C, B) {
          var S = this, I = !!P.u(B) || B, N = P.p(C), $ = function(pt, J) {
            var lt = P.w(S.$u ? Date.UTC(S.$y, J, pt) : new Date(S.$y, J, pt), S);
            return I ? lt : lt.endOf(u);
          }, Y = function(pt, J) {
            return P.w(S.toDate()[pt].apply(S.toDate("s"), (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(J)), S);
          }, W = this.$W, q = this.$M, rt = this.$D, Dt = "set" + (this.$u ? "UTC" : "");
          switch (N) {
            case f:
              return I ? $(1, 0) : $(31, 11);
            case d:
              return I ? $(1, q) : $(0, q + 1);
            case l:
              var Tt = this.$locale().weekStart || 0, Lt = (W < Tt ? W + 7 : W) - Tt;
              return $(I ? rt - Lt : rt + (6 - Lt), q);
            case u:
            case m:
              return Y(Dt + "Hours", 0);
            case c:
              return Y(Dt + "Minutes", 1);
            case a:
              return Y(Dt + "Seconds", 2);
            case r:
              return Y(Dt + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, M.endOf = function(C) {
          return this.startOf(C, !1);
        }, M.$set = function(C, B) {
          var S, I = P.p(C), N = "set" + (this.$u ? "UTC" : ""), $ = (S = {}, S[u] = N + "Date", S[m] = N + "Date", S[d] = N + "Month", S[f] = N + "FullYear", S[c] = N + "Hours", S[a] = N + "Minutes", S[r] = N + "Seconds", S[o] = N + "Milliseconds", S)[I], Y = I === u ? this.$D + (B - this.$W) : B;
          if (I === d || I === f) {
            var W = this.clone().set(m, 1);
            W.$d[$](Y), W.init(), this.$d = W.set(m, Math.min(this.$D, W.daysInMonth())).$d;
          } else $ && this.$d[$](Y);
          return this.init(), this;
        }, M.set = function(C, B) {
          return this.clone().$set(C, B);
        }, M.get = function(C) {
          return this[P.p(C)]();
        }, M.add = function(C, B) {
          var S, I = this;
          C = Number(C);
          var N = P.p(B), $ = function(q) {
            var rt = T(I);
            return P.w(rt.date(rt.date() + Math.round(q * C)), I);
          };
          if (N === d) return this.set(d, this.$M + C);
          if (N === f) return this.set(f, this.$y + C);
          if (N === u) return $(1);
          if (N === l) return $(7);
          var Y = (S = {}, S[a] = i, S[c] = s, S[r] = n, S)[N] || 1, W = this.$d.getTime() + C * Y;
          return P.w(W, this);
        }, M.subtract = function(C, B) {
          return this.add(-1 * C, B);
        }, M.format = function(C) {
          var B = this, S = this.$locale();
          if (!this.isValid()) return S.invalidDate || y;
          var I = C || "YYYY-MM-DDTHH:mm:ssZ", N = P.z(this), $ = this.$H, Y = this.$m, W = this.$M, q = S.weekdays, rt = S.months, Dt = S.meridiem, Tt = function(J, lt, Ct, At) {
            return J && (J[lt] || J(B, I)) || Ct[lt].slice(0, At);
          }, Lt = function(J) {
            return P.s($ % 12 || 12, J, "0");
          }, pt = Dt || function(J, lt, Ct) {
            var At = J < 12 ? "AM" : "PM";
            return Ct ? At.toLowerCase() : At;
          };
          return I.replace(x, (function(J, lt) {
            return lt || (function(Ct) {
              switch (Ct) {
                case "YY":
                  return String(B.$y).slice(-2);
                case "YYYY":
                  return P.s(B.$y, 4, "0");
                case "M":
                  return W + 1;
                case "MM":
                  return P.s(W + 1, 2, "0");
                case "MMM":
                  return Tt(S.monthsShort, W, rt, 3);
                case "MMMM":
                  return Tt(rt, W);
                case "D":
                  return B.$D;
                case "DD":
                  return P.s(B.$D, 2, "0");
                case "d":
                  return String(B.$W);
                case "dd":
                  return Tt(S.weekdaysMin, B.$W, q, 2);
                case "ddd":
                  return Tt(S.weekdaysShort, B.$W, q, 3);
                case "dddd":
                  return q[B.$W];
                case "H":
                  return String($);
                case "HH":
                  return P.s($, 2, "0");
                case "h":
                  return Lt(1);
                case "hh":
                  return Lt(2);
                case "a":
                  return pt($, Y, !0);
                case "A":
                  return pt($, Y, !1);
                case "m":
                  return String(Y);
                case "mm":
                  return P.s(Y, 2, "0");
                case "s":
                  return String(B.$s);
                case "ss":
                  return P.s(B.$s, 2, "0");
                case "SSS":
                  return P.s(B.$ms, 3, "0");
                case "Z":
                  return N;
              }
              return null;
            })(J) || N.replace(":", "");
          }));
        }, M.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, M.diff = function(C, B, S) {
          var I, N = this, $ = P.p(B), Y = T(C), W = (Y.utcOffset() - this.utcOffset()) * i, q = this - Y, rt = function() {
            return P.m(N, Y);
          };
          switch ($) {
            case f:
              I = rt() / 12;
              break;
            case d:
              I = rt();
              break;
            case h:
              I = rt() / 3;
              break;
            case l:
              I = (q - W) / 6048e5;
              break;
            case u:
              I = (q - W) / 864e5;
              break;
            case c:
              I = q / s;
              break;
            case a:
              I = q / i;
              break;
            case r:
              I = q / n;
              break;
            default:
              I = q;
          }
          return S ? I : P.a(I);
        }, M.daysInMonth = function() {
          return this.endOf(d).$D;
        }, M.$locale = function() {
          return V[this.$L];
        }, M.locale = function(C, B) {
          if (!C) return this.$L;
          var S = this.clone(), I = E(C, B, !0);
          return I && (S.$L = I), S;
        }, M.clone = function() {
          return P.w(this.$d, this);
        }, M.toDate = function() {
          return new Date(this.valueOf());
        }, M.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, M.toISOString = function() {
          return this.$d.toISOString();
        }, M.toString = function() {
          return this.$d.toUTCString();
        }, R;
      })(), j = O.prototype;
      return T.prototype = j, [["$ms", o], ["$s", r], ["$m", a], ["$H", c], ["$W", u], ["$M", d], ["$y", f], ["$D", m]].forEach((function(R) {
        j[R[1]] = function(M) {
          return this.$g(M, R[0], R[1]);
        };
      })), T.extend = function(R, M) {
        return R.$i || (R(M, O, T), R.$i = !0), T;
      }, T.locale = E, T.isDayjs = A, T.unix = function(R) {
        return T(1e3 * R);
      }, T.en = V[D], T.Ls = V, T.p = {}, T;
    }));
  })(Ve)), Ve.exports;
}
var $h = Uo();
const ot = /* @__PURE__ */ Jn($h);
var ke = { exports: {} }, jh = ke.exports, Ks;
function Yh() {
  return Ks || (Ks = 1, (function(t, e) {
    (function(n, i) {
      t.exports = i(Uo());
    })(jh, (function(n) {
      function i(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var s = i(n), o = { name: "pt-br", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(r) {
        return r + "º";
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
      return s.default.locale(o, null, !0), o;
    }));
  })(ke)), ke.exports;
}
Yh();
function zh(t) {
  return mt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "rect", attr: { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" } }, { tag: "line", attr: { x1: "16", x2: "16", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "8", x2: "8", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "3", x2: "21", y1: "10", y2: "10" } }] })(t);
}
var Ee = { exports: {} }, _h = Ee.exports, Gs;
function Hh() {
  return Gs || (Gs = 1, (function(t, e) {
    (function(n, i) {
      t.exports = i();
    })(_h, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(i, s, o) {
        var r = s.prototype, a = r.format;
        o.en.formats = n, r.format = function(c) {
          c === void 0 && (c = "YYYY-MM-DDTHH:mm:ssZ");
          var u = this.$locale().formats, l = (function(d, h) {
            return d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(f, m, y) {
              var p = y && y.toUpperCase();
              return m || h[y] || n[y] || h[p].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(x, w, g) {
                return w || g.slice(1);
              }));
            }));
          })(c, u === void 0 ? {} : u);
          return a.call(this, l);
        };
      };
    }));
  })(Ee)), Ee.exports;
}
var Wh = Hh();
const Uh = /* @__PURE__ */ Jn(Wh);
var Re = { exports: {} }, Kh = Re.exports, Xs;
function Gh() {
  return Xs || (Xs = 1, (function(t, e) {
    (function(n, i) {
      t.exports = i();
    })(Kh, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, i = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, r = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, c = {}, u = function(p) {
        return (p = +p) + (p > 68 ? 1900 : 2e3);
      }, l = function(p) {
        return function(x) {
          this[p] = +x;
        };
      }, d = [/[+-]\d\d:?(\d\d)?|Z/, function(p) {
        (this.zone || (this.zone = {})).offset = (function(x) {
          if (!x || x === "Z") return 0;
          var w = x.match(/([+-]|\d\d)/g), g = 60 * w[1] + (+w[2] || 0);
          return g === 0 ? 0 : w[0] === "+" ? -g : g;
        })(p);
      }], h = function(p) {
        var x = c[p];
        return x && (x.indexOf ? x : x.s.concat(x.f));
      }, f = function(p, x) {
        var w, g = c.meridiem;
        if (g) {
          for (var b = 1; b <= 24; b += 1) if (p.indexOf(g(b, 0, x)) > -1) {
            w = b > 12;
            break;
          }
        } else w = p === (x ? "pm" : "PM");
        return w;
      }, m = { A: [a, function(p) {
        this.afternoon = f(p, !1);
      }], a: [a, function(p) {
        this.afternoon = f(p, !0);
      }], Q: [s, function(p) {
        this.month = 3 * (p - 1) + 1;
      }], S: [s, function(p) {
        this.milliseconds = 100 * +p;
      }], SS: [o, function(p) {
        this.milliseconds = 10 * +p;
      }], SSS: [/\d{3}/, function(p) {
        this.milliseconds = +p;
      }], s: [r, l("seconds")], ss: [r, l("seconds")], m: [r, l("minutes")], mm: [r, l("minutes")], H: [r, l("hours")], h: [r, l("hours")], HH: [r, l("hours")], hh: [r, l("hours")], D: [r, l("day")], DD: [o, l("day")], Do: [a, function(p) {
        var x = c.ordinal, w = p.match(/\d+/);
        if (this.day = w[0], x) for (var g = 1; g <= 31; g += 1) x(g).replace(/\[|\]/g, "") === p && (this.day = g);
      }], w: [r, l("week")], ww: [o, l("week")], M: [r, l("month")], MM: [o, l("month")], MMM: [a, function(p) {
        var x = h("months"), w = (h("monthsShort") || x.map((function(g) {
          return g.slice(0, 3);
        }))).indexOf(p) + 1;
        if (w < 1) throw new Error();
        this.month = w % 12 || w;
      }], MMMM: [a, function(p) {
        var x = h("months").indexOf(p) + 1;
        if (x < 1) throw new Error();
        this.month = x % 12 || x;
      }], Y: [/[+-]?\d+/, l("year")], YY: [o, function(p) {
        this.year = u(p);
      }], YYYY: [/\d{4}/, l("year")], Z: d, ZZ: d };
      function y(p) {
        var x, w;
        x = p, w = c && c.formats;
        for (var g = (p = x.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(T, P, O) {
          var j = O && O.toUpperCase();
          return P || w[O] || n[O] || w[j].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(R, M, C) {
            return M || C.slice(1);
          }));
        }))).match(i), b = g.length, D = 0; D < b; D += 1) {
          var V = g[D], k = m[V], A = k && k[0], E = k && k[1];
          g[D] = E ? { regex: A, parser: E } : V.replace(/^\[|\]$/g, "");
        }
        return function(T) {
          for (var P = {}, O = 0, j = 0; O < b; O += 1) {
            var R = g[O];
            if (typeof R == "string") j += R.length;
            else {
              var M = R.regex, C = R.parser, B = T.slice(j), S = M.exec(B)[0];
              C.call(P, S), T = T.replace(S, "");
            }
          }
          return (function(I) {
            var N = I.afternoon;
            if (N !== void 0) {
              var $ = I.hours;
              N ? $ < 12 && (I.hours += 12) : $ === 12 && (I.hours = 0), delete I.afternoon;
            }
          })(P), P;
        };
      }
      return function(p, x, w) {
        w.p.customParseFormat = !0, p && p.parseTwoDigitYear && (u = p.parseTwoDigitYear);
        var g = x.prototype, b = g.parse;
        g.parse = function(D) {
          var V = D.date, k = D.utc, A = D.args;
          this.$u = k;
          var E = A[1];
          if (typeof E == "string") {
            var T = A[2] === !0, P = A[3] === !0, O = T || P, j = A[2];
            P && (j = A[2]), c = this.$locale(), !T && j && (c = w.Ls[j]), this.$d = (function(B, S, I, N) {
              try {
                if (["x", "X"].indexOf(S) > -1) return new Date((S === "X" ? 1e3 : 1) * B);
                var $ = y(S)(B), Y = $.year, W = $.month, q = $.day, rt = $.hours, Dt = $.minutes, Tt = $.seconds, Lt = $.milliseconds, pt = $.zone, J = $.week, lt = /* @__PURE__ */ new Date(), Ct = q || (Y || W ? 1 : lt.getDate()), At = Y || lt.getFullYear(), fe = 0;
                Y && !W || (fe = W > 0 ? W - 1 : lt.getMonth());
                var me, Je = rt || 0, Qe = Dt || 0, tn = Tt || 0, en = Lt || 0;
                return pt ? new Date(Date.UTC(At, fe, Ct, Je, Qe, tn, en + 60 * pt.offset * 1e3)) : I ? new Date(Date.UTC(At, fe, Ct, Je, Qe, tn, en)) : (me = new Date(At, fe, Ct, Je, Qe, tn, en), J && (me = N(me).week(J).toDate()), me);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(V, E, k, w), this.init(), j && j !== !0 && (this.$L = this.locale(j).$L), O && V != this.format(E) && (this.$d = /* @__PURE__ */ new Date("")), c = {};
          } else if (E instanceof Array) for (var R = E.length, M = 1; M <= R; M += 1) {
            A[1] = E[M - 1];
            var C = w.apply(this, A);
            if (C.isValid()) {
              this.$d = C.$d, this.$L = C.$L, this.init();
              break;
            }
            M === R && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else b.call(this, D);
        };
      };
    }));
  })(Re)), Re.exports;
}
var Xh = Gh();
const qh = /* @__PURE__ */ Jn(Xh);
ot.locale("pt-br");
ot.extend(qh);
ot.extend(Uh);
const qs = (t) => t ? "toDate" in t ? t.toDate() : t : null, bf = ({
  value: t,
  onChange: e,
  label: n,
  format: i = "date",
  disabled: s,
  errorText: o,
  placeholder: r = "Selecionar data",
  minDate: a,
  maxDate: c,
  classNameInput: u,
  classNameContainer: l,
  withCalendar: d = !1,
  rounded: h = !0,
  color: f = "neutral",
  pickerMode: m = "modal"
}) => {
  const { main: y, contrast: p } = Z(f), [x, w] = X(!1), [g, b] = X(
    t ? ot(qs(t)).format("YYYY-MM-DDTHH:mm") : ""
  );
  wt(() => {
    b(
      t ? ot(qs(t)).format("YYYY-MM-DDTHH:mm") : ""
    );
  }, [t]);
  const D = () => {
    if (!g) return "";
    const T = ot(g);
    switch (i) {
      case "month-year":
        return T.format("MMM/YYYY");
      case "MMMM/YYYY":
        return T.format("MMMM/YYYY");
      case "datetime":
        return T.format("DD/MM/YYYY HH:mm");
      case "day":
        return T.format("DD");
      default:
        return T.format("DD/MM/YYYY");
    }
  }, V = () => {
    g && (e(ot(g).toDate()), w(!1));
  }, k = (T, P) => typeof P == "number" ? ot().add(P, "years").format("YYYY-MM-DD") : P ?? T.format("YYYY-MM-DD"), A = () => {
    s || (b(g || ot().format("YYYY-MM-DDTHH:mm")), w(!0));
  }, E = h ? "99999px" : "6px";
  return /* @__PURE__ */ F("div", { className: "relative", children: [
    /* @__PURE__ */ F(
      "div",
      {
        onClick: () => {
          b(g || ot().format("YYYY-MM-DDTHH:mm")), w(!0);
        },
        className: `relative flex flex-col ${l}`,
        children: [
          n && /* @__PURE__ */ v("label", { className: "text-xs font-medium !pl-6", children: n }),
          /* @__PURE__ */ F("div", { className: "relative flex items-center w-full", onClick: A, children: [
            /* @__PURE__ */ v(
              "input",
              {
                type: "text",
                readOnly: !0,
                value: g ? D() : "",
                placeholder: r,
                disabled: s,
                style: {
                  borderRadius: E,
                  borderColor: y,
                  color: p
                },
                className: `w-full !pr-4 !pl-8 !py-4 border outline-none placeholder-[var(--ion-color-medium)] ${u}`
              }
            ),
            d && /* @__PURE__ */ v(zh, { className: "absolute right-8 text-[24px] text-gray-500 hover:text-blue-600 transition-colors cursor-pointer" })
          ] }),
          o && /* @__PURE__ */ F(Le, { className: "text-[12px] !pl-6 text-[var(--ion-color-danger)]", children: [
            " ",
            o,
            " "
          ] })
        ]
      }
    ),
    m === "modal" && /* @__PURE__ */ v(
      er,
      {
        isOpen: x,
        onDidDismiss: () => w(!1),
        className: "custom-calendar-modal",
        children: /* @__PURE__ */ F("div", { className: "!p-4 bg-white !rounded-lg shadow-lg", children: [
          /* @__PURE__ */ v(
            Di,
            {
              locale: "pt-BR",
              value: g,
              min: k(
                ot().subtract(10, "years").startOf("year"),
                a
              ),
              max: k(ot().add(50, "years").endOf("year"), c),
              presentation: i === "month-year" || i === "MMMM/YYYY" ? "month-year" : i === "datetime" ? "date-time" : "date",
              onIonChange: (T) => b(T.detail.value),
              showDefaultButtons: !1
            }
          ),
          /* @__PURE__ */ F("div", { className: "flex justify-end mt-4 gap-2", children: [
            /* @__PURE__ */ v(bn, { color: "medium", onClick: () => w(!1), children: "Cancelar" }),
            /* @__PURE__ */ v(bn, { onClick: V, children: "Confirmar" })
          ] })
        ] })
      }
    ),
    m === "dropdown" && x && /* @__PURE__ */ v("div", { className: "absolute z-50 mt-2 bg-white !rounded-lg shadow-lg !p-3", children: /* @__PURE__ */ v(
      Di,
      {
        locale: "pt-BR",
        value: g,
        min: k(
          ot().subtract(10, "years").startOf("year"),
          a
        ),
        max: k(ot().add(50, "years").endOf("year"), c),
        presentation: i === "month-year" || i === "MMMM/YYYY" ? "month-year" : i === "datetime" ? "date-time" : "date",
        onIonChange: (T) => {
          b(T.detail.value), V();
        },
        showDefaultButtons: !1
      }
    ) })
  ] });
};
function wf({
  items: t,
  getLabel: e,
  getValue: n,
  onSelect: i,
  placeholder: s = "Pesquisar...",
  color: o = "neutral",
  rounded: r = !0,
  fullWidth: a = !0,
  loading: c = !1,
  variant: u = "search",
  label: l,
  className: d = "",
  style: h = {},
  inputClass: f = "",
  inputStyle: m = {},
  dropdownClass: y = "",
  dropdownStyle: p = {},
  itemClass: x = "",
  itemStyle: w = {},
  labelClass: g = ""
}) {
  const [b, D] = X(""), [V, k] = X(!1), A = nt(null), { main: E, contrast: T } = Z(o), P = St(() => t.length > 0 ? t.filter(
    (M) => e(M).toLowerCase().includes(b.toLowerCase())
  ) : [], [t, b, e]), O = r ? "12px" : "6px", j = r ? "99999px" : "6px", R = () => {
    let M = A.current?.querySelector("input")?.clientHeight ?? 0;
    return u === "select" ? M += 20 : M += 10, /* @__PURE__ */ v(
      "div",
      {
        className: `absolute z-50 overflow-hidden max-h-64 overflow-y-auto shadow-lg ${y}`,
        style: {
          width: a ? "100%" : "auto",
          border: `1px solid ${E}`,
          borderRadius: O,
          backgroundColor: "var(--ion-color-light)",
          top: M,
          // 16px de gap entre input e dropdown (ja contando com o padding interno dos inputs)
          left: 0,
          ...p
        },
        children: c ? /* @__PURE__ */ v("div", { className: "flex justify-center items-center p-4", children: /* @__PURE__ */ v(le, { name: "crescent", style: { color: E } }) }) : /* @__PURE__ */ F(wa, { className: "!p-0", children: [
          P.map((C) => /* @__PURE__ */ v(
            Cn,
            {
              button: !0,
              onMouseDown: () => {
                i(C), D(e(C)), k(!1);
              },
              style: { color: T, ...w },
              className: `hover:bg-gray-100 transition-colors ${x}`,
              children: /* @__PURE__ */ v(Ie, { children: e(C) })
            },
            n(C)
          )),
          P.length === 0 && /* @__PURE__ */ v(Cn, { children: /* @__PURE__ */ v(Ie, { className: "text-gray-500", children: "Nenhum resultado encontrado" }) })
        ] })
      }
    );
  };
  return u === "select" ? /* @__PURE__ */ F(
    "div",
    {
      ref: A,
      className: `relative ${a ? "w-full" : "w-auto"} flex flex-col ${d}`,
      style: { minHeight: 72, ...h },
      children: [
        l && /* @__PURE__ */ v("label", { className: `text-xs font-medium !pl-6 ${g}`, children: l }),
        /* @__PURE__ */ v(
          "input",
          {
            value: b,
            onChange: (M) => D(M.target.value),
            placeholder: s,
            onFocus: () => k(!0),
            onBlur: () => setTimeout(() => k(!1), 150),
            className: `w-full !pr-4 !pl-8 !py-4 border outline-none placeholder-[var(--ion-color-medium)] ${f}`,
            style: {
              borderColor: E,
              borderRadius: j,
              color: T,
              ...m
            }
          }
        ),
        V && R()
      ]
    }
  ) : /* @__PURE__ */ F(
    "div",
    {
      ref: A,
      className: `relative ${a ? "w-full" : "w-auto"} ${d}`,
      style: h,
      children: [
        /* @__PURE__ */ v(
          ba,
          {
            value: b,
            onIonInput: (M) => D(M.detail.value),
            placeholder: s,
            onIonFocus: () => k(!0),
            onIonBlur: () => setTimeout(() => k(!1), 150),
            onIonClear: () => {
              D(""), i(void 0);
            },
            className: f,
            style: {
              "--background": "var(--ion-color-light)",
              "--border-color": E,
              "--border-radius": j,
              color: T,
              ...m
            }
          }
        ),
        V && R()
      ]
    }
  );
}
const Tf = ({
  icon: t = rr,
  onClick: e,
  loading: n = !1,
  disabled: i = !1,
  color: s = "primary",
  className: o
}) => {
  const { main: r, contrast: a } = Z(s);
  return /* @__PURE__ */ v("div", { className: "relative w-full left-1/2 ", children: /* @__PURE__ */ v(
    H.div,
    {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { type: "spring", stiffness: 120, damping: 15 },
      className: `fixed bottom-[40px]  z-50 ${o}`,
      children: /* @__PURE__ */ v(ir, { vertical: "bottom", horizontal: "center", slot: "fixed", children: /* @__PURE__ */ v(
        Tn,
        {
          onClick: e,
          disabled: i || n,
          style: { "--box-shadow": "none", "--background": r, "--color": a },
          children: n ? /* @__PURE__ */ v(le, { name: "crescent", color: a.includes("light") ? "light" : "dark" }) : xn.createElement(t, { className: "text-[28px]" })
        }
      ) })
    }
  ) });
}, Zh = ({
  isEmpty: t = !0,
  children: e,
  messages: n,
  title: i,
  icon: s,
  buttonLabel: o,
  onButtonClick: r,
  color: a = "primary",
  colorBg: c = "#ecececbe",
  theme: u = {}
}) => {
  if (!t)
    return /* @__PURE__ */ v(Zs, { children: e });
  const { main: l } = Z(a), d = St(() => {
    const h = n || ["Nenhum dado encontrado"], f = Math.floor(Math.random() * h.length);
    return h[f];
  }, [n]);
  return /* @__PURE__ */ v(
    "div",
    {
      style: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        boxSizing: "border-box",
        ...u.container
      },
      children: /* @__PURE__ */ F(
        H.div,
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
            backgroundColor: c,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...u.card
          },
          children: [
            s,
            i && /* @__PURE__ */ v(
              "div",
              {
                style: {
                  fontWeight: 600,
                  marginBottom: 4,
                  ...u.title
                },
                children: i
              }
            ),
            /* @__PURE__ */ v("div", { style: u.message, children: d }),
            o && r && /* @__PURE__ */ v(
              "button",
              {
                onClick: r,
                style: {
                  marginTop: 12,
                  padding: "6px 12px",
                  borderRadius: 6,
                  border: "none",
                  backgroundColor: l,
                  color: "#fff",
                  cursor: "pointer",
                  ...u.button
                },
                children: o
              }
            )
          ]
        }
      )
    }
  );
}, Cf = ({
  data: t,
  isLoading: e = !1,
  error: n = null,
  emptyTitle: i = "Nada encontrado",
  emptyMessages: s,
  emptyIcon: o,
  onRetry: r,
  children: a,
  minHeight: c = "250px",
  loadingLabel: u = "Carregando...",
  theme: l = {}
}) => {
  const [d, h] = X(e || t == null);
  wt(() => {
    let p;
    return e || t === void 0 || t === null ? h(!0) : p = setTimeout(() => h(!1), 150), () => clearTimeout(p);
  }, [e, t]);
  const f = e || d, m = !f && !n && (!t || t.length === 0), y = !f && !n && !m;
  return /* @__PURE__ */ F(
    "div",
    {
      style: {
        width: "100%",
        minHeight: c,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        boxSizing: "border-box",
        ...l.container
      },
      children: [
        f && /* @__PURE__ */ F(
          H.div,
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
              /* @__PURE__ */ v(le, { name: "crescent" }),
              /* @__PURE__ */ v(
                "div",
                {
                  style: {
                    marginTop: 10,
                    color: "#666",
                    ...l.loadingLabel
                  },
                  children: u
                }
              )
            ]
          }
        ),
        !f && n && /* @__PURE__ */ F(
          H.div,
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
              /* @__PURE__ */ v(Ph, { size: 32 }),
              /* @__PURE__ */ v(
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
              /* @__PURE__ */ v(
                "div",
                {
                  style: {
                    marginBottom: 12,
                    ...l.errorMessage
                  },
                  children: n
                }
              ),
              r && /* @__PURE__ */ v(
                "button",
                {
                  onClick: r,
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
        !f && m && /* @__PURE__ */ v(
          Zh,
          {
            title: i,
            messages: s,
            icon: o,
            buttonLabel: r ? "Adicionar" : void 0,
            onButtonClick: r || void 0
          }
        ),
        y && /* @__PURE__ */ v(
          H.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4 },
            style: {
              width: "100%",
              ...l.content
            },
            children: a
          }
        )
      ]
    }
  );
};
export {
  wf as CBAutocomplete,
  Be as CBButton,
  lf as CBCard,
  mf as CBCheckbox,
  bf as CBDataPicker,
  Zh as CBEmptyState,
  yf as CBFabButton,
  Tf as CBFabButtonCenter,
  vf as CBFilterBar,
  Pf as CBInput,
  hf as CBLoading,
  uf as CBModal,
  xf as CBMultiView,
  df as CBSelect,
  gf as CBSelector,
  Cf as CBStateWrapper,
  Nh as CBStepperHorizontal,
  Oh as CBStepperVertical,
  pf as CBTextArea,
  cf as CBToast,
  ff as CBTooltip,
  Ef as CB_COLOR_CONTRAST_MAP,
  Ca as CB_COLOR_MAP,
  Df as resolveMask,
  Z as useCBColor,
  Af as useInputMask,
  Vf as usePasswordToggle
};
