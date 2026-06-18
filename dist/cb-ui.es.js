import { jsx as v, Fragment as Qs, jsxs as O } from "react/jsx-runtime";
import * as Ke from "react";
import wn, { createContext as Gt, useRef as it, useLayoutEffect as Xo, useEffect as Tt, useId as Jn, useContext as et, useInsertionEffect as Qn, useMemo as ht, useCallback as Wt, Children as qo, isValidElement as Zo, useState as K, Fragment as tr, createElement as Jo, forwardRef as Qo, Component as ta } from "react";
import xt from "clsx";
import { IonCard as ea, IonCardHeader as na, IonCardTitle as ia, IonCardSubtitle as sa, IonCardContent as ra, IonFooter as er, IonText as oa, IonModal as nr, IonHeader as aa, IonToolbar as la, IonButtons as ca, IonButton as Tn, IonTitle as ua, IonContent as da, IonInput as ir, IonNote as se, IonSelect as sr, IonSelectOption as Mn, IonSpinner as ue, IonTextarea as ha, IonToggle as fa, IonRadioGroup as ma, IonRadio as pa, IonCheckbox as ga, IonFab as rr, IonFabButton as Cn, IonSegment as ya, IonSegmentButton as va, IonLabel as Be, IonAccordionGroup as xa, IonAccordion as ba, IonItem as Sn, IonDatetime as Vi, IonSearchbar as wa, IonList as Ta } from "@ionic/react";
import { G as nt, u as X, b as Ma, c as Ca, d as Sa, C as Ne } from "./index.esm-DSoyn7X9.js";
import { e as Rf } from "./index.esm-DSoyn7X9.js";
const ti = Gt({});
function ei(t) {
  const e = it(null);
  return e.current === null && (e.current = t()), e.current;
}
const Pa = typeof window < "u", or = Pa ? Xo : Tt, Ge = /* @__PURE__ */ Gt(null);
function ni(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Fe(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const wt = (t, e, n) => n > e ? e : n < t ? t : n;
function Pn(t, e) {
  return e ? `${t}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${e}` : t;
}
let Xt = () => {
}, Pt = () => {
};
typeof process < "u" && process.env?.NODE_ENV !== "production" && (Xt = (t, e, n) => {
  !t && typeof console < "u" && console.warn(Pn(e, n));
}, Pt = (t, e, n) => {
  if (!t)
    throw new Error(Pn(e, n));
});
const kt = {}, ar = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), lr = (t) => typeof t == "object" && t !== null, cr = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function ur(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const dt = /* @__NO_SIDE_EFFECTS__ */ (t) => t, de = (...t) => t.reduce((e, n) => (i) => n(e(i))), re = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i ? (n - t) / i : 1;
};
class ii {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return ni(this.subscriptions, e), () => Fe(this.subscriptions, e);
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
const lt = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, ut = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3, dr = /* @__NO_SIDE_EFFECTS__ */ (t, e) => e ? t * (1e3 / e) : 0, ki = /* @__PURE__ */ new Set();
function si(t, e, n) {
  t || ki.has(e) || (console.warn(Pn(e, n)), ki.add(e));
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
function he(t, e, n, i) {
  if (t === e && n === i)
    return dt;
  const s = (o) => Va(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : hr(s(o), e, i);
}
const fr = /* @__NO_SIDE_EFFECTS__ */ (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, mr = /* @__NO_SIDE_EFFECTS__ */ (t) => (e) => 1 - t(1 - e), pr = /* @__PURE__ */ he(0.33, 1.53, 0.69, 0.99), ri = /* @__PURE__ */ mr(pr), gr = /* @__PURE__ */ fr(ri), yr = (t) => t >= 1 ? 1 : (t *= 2) < 1 ? 0.5 * ri(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), oi = (t) => 1 - Math.sin(Math.acos(t)), vr = /* @__PURE__ */ mr(oi), xr = /* @__PURE__ */ fr(oi), ka = /* @__PURE__ */ he(0.42, 0, 1, 1), Ea = /* @__PURE__ */ he(0, 0, 0.58, 1), br = /* @__PURE__ */ he(0.42, 0, 0.58, 1), Ra = /* @__NO_SIDE_EFFECTS__ */ (t) => Array.isArray(t) && typeof t[0] != "number", wr = /* @__NO_SIDE_EFFECTS__ */ (t) => Array.isArray(t) && typeof t[0] == "number", Ei = {
  linear: dt,
  easeIn: ka,
  easeInOut: br,
  easeOut: Ea,
  circIn: oi,
  circInOut: xr,
  circOut: vr,
  backIn: ri,
  backInOut: gr,
  backOut: pr,
  anticipate: yr
}, La = (t) => typeof t == "string", Ri = (t) => {
  if (/* @__PURE__ */ wr(t)) {
    Pt(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [e, n, i, s] = t;
    return /* @__PURE__ */ he(e, n, i, s);
  } else if (La(t))
    return Pt(Ei[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), Ei[t];
  return t;
}, ye = [
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
  }, o = () => n = !0, r = ye.reduce((g, b) => (g[b] = Ia(o), g), {}), { setup: a, read: c, resolveKeyframes: u, preUpdate: l, update: d, preRender: h, render: f, postRender: m } = r, y = () => {
    const g = kt.useManualTiming, b = g ? s.timestamp : performance.now();
    n = !1, g || (s.delta = i ? 1e3 / 60 : Math.max(Math.min(b - s.timestamp, Ba), 1)), s.timestamp = b, s.isProcessing = !0, a.process(s), c.process(s), u.process(s), l.process(s), d.process(s), h.process(s), f.process(s), m.process(s), s.isProcessing = !1, n && e && (i = !1, t(y));
  }, p = () => {
    n = !0, i = !0, s.isProcessing || t(y);
  };
  return { schedule: ye.reduce((g, b) => {
    const P = r[b];
    return g[b] = (V, k = !1, A = !1) => (n || p(), P.schedule(V, k, A)), g;
  }, {}), cancel: (g) => {
    for (let b = 0; b < ye.length; b++)
      r[ye[b]].cancel(g);
  }, state: s, steps: r };
}
const { schedule: _, cancel: Et, state: Q, steps: sn } = /* @__PURE__ */ Tr(typeof requestAnimationFrame < "u" ? requestAnimationFrame : dt, !0);
let Te;
function Na() {
  Te = void 0;
}
const st = {
  now: () => (Te === void 0 && st.set(Q.isProcessing || kt.useManualTiming ? Q.timestamp : performance.now()), Te),
  set: (t) => {
    Te = t, queueMicrotask(Na);
  }
}, Mr = (t) => (e) => typeof e == "string" && e.startsWith(t), Cr = /* @__PURE__ */ Mr("--"), Fa = /* @__PURE__ */ Mr("var(--"), ai = (t) => Fa(t) ? Oa.test(t.split("/*")[0].trim()) : !1, Oa = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Li(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--");
}
const qt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, oe = {
  ...qt,
  transform: (t) => wt(0, 1, t)
}, ve = {
  ...qt,
  default: 1
}, ee = (t) => Math.round(t * 1e5) / 1e5, li = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function $a(t) {
  return t == null;
}
const ja = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, ci = (t, e) => (n) => !!(typeof n == "string" && ja.test(n) && n.startsWith(t) || e && !$a(n) && Object.prototype.hasOwnProperty.call(n, e)), Sr = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, o, r, a] = i.match(li);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Ya = (t) => wt(0, 255, t), rn = {
  ...qt,
  transform: (t) => Math.round(Ya(t))
}, Nt = {
  test: /* @__PURE__ */ ci("rgb", "red"),
  parse: /* @__PURE__ */ Sr("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + rn.transform(t) + ", " + rn.transform(e) + ", " + rn.transform(n) + ", " + ee(oe.transform(i)) + ")"
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
const Dn = {
  test: /* @__PURE__ */ ci("#"),
  parse: za,
  transform: Nt.transform
}, fe = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), St = /* @__PURE__ */ fe("deg"), bt = /* @__PURE__ */ fe("%"), I = /* @__PURE__ */ fe("px"), _a = /* @__PURE__ */ fe("vh"), Ha = /* @__PURE__ */ fe("vw"), Ii = {
  ...bt,
  parse: (t) => bt.parse(t) / 100,
  transform: (t) => bt.transform(t * 100)
}, Yt = {
  test: /* @__PURE__ */ ci("hsl", "hue"),
  parse: /* @__PURE__ */ Sr("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + bt.transform(ee(e)) + ", " + bt.transform(ee(n)) + ", " + ee(oe.transform(i)) + ")"
}, G = {
  test: (t) => Nt.test(t) || Dn.test(t) || Yt.test(t),
  parse: (t) => Nt.test(t) ? Nt.parse(t) : Yt.test(t) ? Yt.parse(t) : Dn.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? Nt.transform(t) : Yt.transform(t),
  getAnimatableNone: (t) => {
    const e = G.parse(t);
    return e.alpha = 0, G.transform(e);
  }
}, Wa = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Ua(t) {
  return isNaN(t) && typeof t == "string" && (t.match(li)?.length || 0) + (t.match(Wa)?.length || 0) > 0;
}
const Pr = "number", Dr = "color", Ka = "var", Ga = "var(", Bi = "${}", Xa = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ut(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let o = 0;
  const a = e.replace(Xa, (c) => (G.test(c) ? (i.color.push(o), s.push(Dr), n.push(G.parse(c))) : c.startsWith(Ga) ? (i.var.push(o), s.push(Ka), n.push(c)) : (i.number.push(o), s.push(Pr), n.push(parseFloat(c))), ++o, Bi)).split(Bi);
  return { values: n, split: a, indexes: i, types: s };
}
function qa(t) {
  return Ut(t).values;
}
function Ar({ split: t, types: e }) {
  const n = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < n; o++)
      if (s += t[o], i[o] !== void 0) {
        const r = e[o];
        r === Pr ? s += ee(i[o]) : r === Dr ? s += G.transform(i[o]) : s += i[o];
      }
    return s;
  };
}
function Za(t) {
  return Ar(Ut(t));
}
const Ja = (t) => typeof t == "number" ? 0 : G.test(t) ? G.getAnimatableNone(t) : t, Qa = (t, e) => typeof t == "number" ? e?.trim().endsWith("/") ? t : 0 : Ja(t);
function tl(t) {
  const e = Ut(t);
  return Ar(e)(e.values.map((i, s) => Qa(i, e.split[s])));
}
const pt = {
  test: Ua,
  parse: qa,
  createTransformer: Za,
  getAnimatableNone: tl
};
function on(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function el({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let s = 0, o = 0, r = 0;
  if (!e)
    s = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, c = 2 * n - a;
    s = on(c, a, t + 1 / 3), o = on(c, a, t), r = on(c, a, t - 1 / 3);
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
const z = (t, e, n) => t + (e - t) * n, an = (t, e, n) => {
  const i = t * t, s = n * (e * e - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, nl = [Dn, Nt, Yt], il = (t) => nl.find((e) => e.test(t));
function Ni(t) {
  const e = il(t);
  if (Xt(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e)
    return !1;
  let n = e.parse(t);
  return e === Yt && (n = el(n)), n;
}
const Fi = (t, e) => {
  const n = Ni(t), i = Ni(e);
  if (!n || !i)
    return Oe(t, e);
  const s = { ...n };
  return (o) => (s.red = an(n.red, i.red, o), s.green = an(n.green, i.green, o), s.blue = an(n.blue, i.blue, o), s.alpha = z(n.alpha, i.alpha, o), Nt.transform(s));
}, An = /* @__PURE__ */ new Set(["none", "hidden"]);
function sl(t, e) {
  return An.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function rl(t, e) {
  return (n) => z(t, e, n);
}
function ui(t) {
  return typeof t == "number" ? rl : typeof t == "string" ? ai(t) ? Oe : G.test(t) ? Fi : ll : Array.isArray(t) ? Vr : typeof t == "object" ? G.test(t) ? Fi : ol : Oe;
}
function Vr(t, e) {
  const n = [...t], i = n.length, s = t.map((o, r) => ui(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < i; r++)
      n[r] = s[r](o);
    return n;
  };
}
function ol(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const s in n)
    t[s] !== void 0 && e[s] !== void 0 && (i[s] = ui(t[s])(t[s], e[s]));
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
  const n = pt.createTransformer(e), i = Ut(t), s = Ut(e);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? An.has(t) && !s.values.length || An.has(e) && !i.values.length ? sl(t, e) : de(Vr(al(i, s), s.values), n) : (Xt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Oe(t, e));
};
function kr(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? z(t, e, n) : ui(t)(t, e);
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
    now: () => Q.isProcessing ? Q.timestamp : st.now()
  };
}, Er = (t, e, n = 10) => {
  let i = "";
  const s = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < s; o++)
    i += Math.round(t(o / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
}, $e = 2e4;
function di(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < $e; )
    e += n, i = t.next(e);
  return e >= $e ? 1 / 0 : e;
}
function ul(t, e = 100, n) {
  const i = n({ ...t, keyframes: [0, e] }), s = Math.min(di(i), $e);
  return {
    type: "keyframes",
    ease: (o) => i.next(s * o).value / e,
    duration: /* @__PURE__ */ ut(s)
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
function Vn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const dl = 12;
function hl(t, e, n) {
  let i = n;
  for (let s = 1; s < dl; s++)
    i = i - t(i) / e(i);
  return i;
}
const ln = 1e-3;
function fl({ duration: t = U.duration, bounce: e = U.bounce, velocity: n = U.velocity, mass: i = U.mass }) {
  let s, o;
  Xt(t <= /* @__PURE__ */ lt(U.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let r = 1 - e;
  r = wt(U.minDamping, U.maxDamping, r), t = wt(U.minDuration, U.maxDuration, /* @__PURE__ */ ut(t)), r < 1 ? (s = (u) => {
    const l = u * r, d = l * t, h = l - n, f = Vn(u, r), m = Math.exp(-d);
    return ln - h / f * m;
  }, o = (u) => {
    const d = u * r * t, h = d * n + n, f = Math.pow(r, 2) * Math.pow(u, 2) * t, m = Math.exp(-d), y = Vn(Math.pow(u, 2), r);
    return (-s(u) + ln > 0 ? -1 : 1) * ((h - f) * m) / y;
  }) : (s = (u) => {
    const l = Math.exp(-u * t), d = (u - n) * t + 1;
    return -ln + l * d;
  }, o = (u) => {
    const l = Math.exp(-u * t), d = (n - u) * (t * t);
    return l * d;
  });
  const a = 5 / t, c = hl(s, o, a);
  if (t = /* @__PURE__ */ lt(t), isNaN(c))
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
function Oi(t, e) {
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
  if (!Oi(t, pl) && Oi(t, ml))
    if (e.velocity = 0, t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, o = 2 * wt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
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
function je(t = U.visualDuration, e = U.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: s } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: c, damping: u, mass: l, duration: d, velocity: h, isResolvedFromDuration: f } = gl({
    ...n,
    velocity: -/* @__PURE__ */ ut(n.velocity || 0)
  }), m = h || 0, y = u / (2 * Math.sqrt(c * l)), p = r - o, x = /* @__PURE__ */ ut(Math.sqrt(c / l)), w = Math.abs(p) < 5;
  i || (i = w ? U.restSpeed.granular : U.restSpeed.default), s || (s = w ? U.restDelta.granular : U.restDelta.default);
  let g, b, P, V, k, A;
  if (y < 1)
    P = Vn(x, y), V = (m + y * x * p) / P, g = (T) => {
      const D = Math.exp(-y * x * T);
      return r - D * (V * Math.sin(P * T) + p * Math.cos(P * T));
    }, k = y * x * V + p * P, A = y * x * p - V * P, b = (T) => Math.exp(-y * x * T) * (k * Math.sin(P * T) + A * Math.cos(P * T));
  else if (y === 1) {
    g = (D) => r - Math.exp(-x * D) * (p + (m + x * p) * D);
    const T = m + x * p;
    b = (D) => Math.exp(-x * D) * (x * T * D - m);
  } else {
    const T = x * Math.sqrt(y * y - 1);
    g = (R) => {
      const C = Math.exp(-y * x * R), M = Math.min(T * R, 300);
      return r - C * ((m + y * x * p) * Math.sinh(M) + T * p * Math.cosh(M)) / T;
    };
    const D = (m + y * x * p) / T, F = y * x * D - p * T, j = y * x * p - D * T;
    b = (R) => {
      const C = Math.exp(-y * x * R), M = Math.min(T * R, 300);
      return C * (F * Math.sinh(M) + j * Math.cosh(M));
    };
  }
  const E = {
    calculatedDuration: f && d || null,
    velocity: (T) => /* @__PURE__ */ lt(b(T)),
    next: (T) => {
      if (!f && y < 1) {
        const F = Math.exp(-y * x * T), j = Math.sin(P * T), R = Math.cos(P * T), C = r - F * (V * j + p * R), M = /* @__PURE__ */ lt(F * (k * j + A * R));
        return a.done = Math.abs(M) <= i && Math.abs(r - C) <= s, a.value = a.done ? r : C, a;
      }
      const D = g(T);
      if (f)
        a.done = T >= d;
      else {
        const F = /* @__PURE__ */ lt(b(T));
        a.done = Math.abs(F) <= i && Math.abs(r - D) <= s;
      }
      return a.value = a.done ? r : D, a;
    },
    toString: () => {
      const T = Math.min(di(E), $e), D = Er((F) => E.next(T * F).value, T, 30);
      return T + "ms " + D;
    },
    toTransition: () => {
    }
  };
  return E;
}
je.applyToOptions = (t) => {
  const e = ul(t, 100, je);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ lt(e.duration), t.type = "keyframes", t;
};
const yl = 5;
function Rr(t, e, n) {
  const i = Math.max(e - yl, 0);
  return /* @__PURE__ */ dr(n - t(i), e - i);
}
function kn({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: c, restDelta: u = 0.5, restSpeed: l }) {
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
  let P, V;
  const k = (A) => {
    f(h.value) && (P = A, V = je({
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
      return !V && P === void 0 && (E = !0, b(A), k(A)), P !== void 0 && A >= P ? V.next(A - P) : (!E && b(A), h);
    }
  };
}
function vl(t, e, n) {
  const i = [], s = n || kt.mix || kr, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = s(t[r], t[r + 1]);
    if (e) {
      const c = Array.isArray(e) ? e[r] || dt : e;
      a = de(c, a);
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
    const h = /* @__PURE__ */ re(t[d], t[d + 1], l);
    return a[d](h);
  };
  return n ? (l) => u(wt(t[0], t[o - 1], l)) : u;
}
function bl(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = /* @__PURE__ */ re(0, e, i);
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
function Ml(t, e) {
  return t.map(() => e || br).splice(0, t.length - 1);
}
function zt({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const s = /* @__PURE__ */ Ra(i) ? i.map(Ri) : Ri(i), o = {
    done: !1,
    value: e[0]
  }, r = Tl(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : wl(e),
    t
  ), a = xl(r, e, {
    ease: Array.isArray(s) ? s : Ml(e, s)
  });
  return {
    calculatedDuration: t,
    next: (c) => (o.value = a(c), o.done = c >= t, o)
  };
}
const Cl = (t) => t !== null;
function Xe(t, { repeat: e, repeatType: n = "loop" }, i, s = 1) {
  const o = t.filter(Cl), a = s < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return !a || i === void 0 ? o[a] : i;
}
const Sl = {
  decay: kn,
  inertia: kn,
  tween: zt,
  keyframes: zt,
  spring: je
};
function Lr(t) {
  typeof t.type == "string" && (t.type = Sl[t.type]);
}
class hi {
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
class Ye extends hi {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== st.now() && this.tick(st.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    Lr(e);
    const { type: n = zt, repeat: i = 0, repeatDelay: s = 0, repeatType: o, velocity: r = 0 } = e;
    let { keyframes: a } = e;
    const c = n || zt;
    process.env.NODE_ENV !== "production" && c !== zt && Pt(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), c !== zt && typeof a[0] != "number" && (this.mixKeyframes = de(Pl, kr(a[0], a[1])), a = [0, 100]);
    const u = c({ ...e, keyframes: a });
    o === "mirror" && (this.mirroredGenerator = c({
      ...e,
      keyframes: [...a].reverse(),
      velocity: -r
    })), u.calculatedDuration === null && (u.calculatedDuration = di(u));
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
      !T && A >= 1 && (T = 1), T === 1 && E--, E = Math.min(E, d + 1), E % 2 && (h === "reverse" ? (T = 1 - T, f && (T -= f / a)) : h === "mirror" && (b = r)), g = wt(0, 1, T) * a;
    }
    let P;
    w ? (this.delayState.value = l[0], P = this.delayState) : P = b.next(g), o && !w && (P.value = o(P.value));
    let { done: V } = P;
    !w && c !== null && (V = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const k = this.holdTime === null && (this.state === "finished" || this.state === "running" && V);
    return k && m !== kn && (P.value = Xe(l, this.options, p, this.speed)), y && y(P.value), k && this.finish(), P;
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
    return /* @__PURE__ */ ut(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ ut(e);
  }
  get time() {
    return /* @__PURE__ */ ut(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ lt(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
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
    n && this.driver && this.updateTime(st.now()), this.playbackSpeed = e, n && this.driver && (this.time = /* @__PURE__ */ ut(this.currentTime));
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
    this.state = "paused", this.updateTime(st.now()), this.holdTime = this.currentTime;
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
const Ft = (t) => t * 180 / Math.PI, En = (t) => {
  const e = Ft(Math.atan2(t[1], t[0]));
  return Rn(e);
}, Al = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: En,
  rotateZ: En,
  skewX: (t) => Ft(Math.atan(t[1])),
  skewY: (t) => Ft(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, Rn = (t) => (t = t % 360, t < 0 && (t += 360), t), $i = En, ji = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), Yi = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), Vl = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: ji,
  scaleY: Yi,
  scale: (t) => (ji(t) + Yi(t)) / 2,
  rotateX: (t) => Rn(Ft(Math.atan2(t[6], t[5]))),
  rotateY: (t) => Rn(Ft(Math.atan2(-t[2], t[0]))),
  rotateZ: $i,
  rotate: $i,
  skewX: (t) => Ft(Math.atan(t[4])),
  skewY: (t) => Ft(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Ln(t) {
  return t.includes("scale") ? 1 : 0;
}
function In(t, e) {
  if (!t || t === "none")
    return Ln(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, s;
  if (n)
    i = Vl, s = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = Al, s = a;
  }
  if (!s)
    return Ln(e);
  const o = i[e], r = s[1].split(",").map(El);
  return typeof o == "function" ? o(r) : r[o];
}
const kl = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return In(n, e);
};
function El(t) {
  return parseFloat(t.trim());
}
const Zt = [
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
], Jt = /* @__PURE__ */ new Set([...Zt, "pathRotation"]), zi = (t) => t === qt || t === I, Rl = /* @__PURE__ */ new Set(["x", "y", "z"]), Ll = Zt.filter((t) => !Rl.has(t));
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
  x: (t, { transform: e }) => In(e, "x"),
  y: (t, { transform: e }) => In(e, "y")
};
Vt.translateX = Vt.x;
Vt.translateY = Vt.y;
const Ot = /* @__PURE__ */ new Set();
let Bn = !1, Nn = !1, Fn = !1;
function Ir() {
  if (Nn) {
    const t = Array.from(Ot).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
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
  Nn = !1, Bn = !1, Ot.forEach((t) => t.complete(Fn)), Ot.clear();
}
function Br() {
  Ot.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Nn = !0);
  });
}
function Bl() {
  Fn = !0, Br(), Ir(), Fn = !1;
}
class fi {
  constructor(e, n, i, s, o, r = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Ot.add(this), Bn || (Bn = !0, _.read(Br), _.resolveKeyframes(Ir))) : (this.readKeyframes(), this.complete());
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Ot.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ot.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Nl = (t) => t.startsWith("--");
function Nr(t, e, n) {
  Nl(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const Fl = {};
function Fr(t, e) {
  const n = /* @__PURE__ */ ur(t);
  return () => Fl[e] ?? n();
}
const Ol = /* @__PURE__ */ Fr(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Or = /* @__PURE__ */ Fr(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), te = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, _i = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ te([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ te([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ te([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ te([0.33, 1.53, 0.69, 0.99])
};
function $r(t, e) {
  if (t)
    return typeof t == "function" ? Or() ? Er(t, e) : "ease-out" : /* @__PURE__ */ wr(t) ? te(t) : Array.isArray(t) ? t.map((n) => $r(n, e) || _i.easeOut) : _i[t];
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
  return jr(t) && Or() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class Yr extends hi {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e)
      return;
    const { element: n, name: i, keyframes: s, pseudoElement: o, allowFlatten: r = !1, finalKeyframe: a, onComplete: c } = e;
    this.isPseudoElement = !!o, this.allowFlatten = r, this.options = e, Pt(typeof e.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const u = jl(e);
    this.animation = $l(n, i, s, u, o), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const l = Xe(s, this.options, a, this.speed);
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
    return /* @__PURE__ */ ut(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ ut(e);
  }
  get time() {
    return /* @__PURE__ */ ut(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    const n = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ lt(e), n && this.animation.pause();
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
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && Ol() ? (this.animation.timeline = e, n && (this.animation.rangeStart = n), i && (this.animation.rangeEnd = i), dt) : s(this);
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
const cn = 10;
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
    const a = new Ye({
      ...r,
      autoplay: !1
    }), c = Math.max(cn, st.now() - this.startTime), u = wt(0, cn, c - cn), l = a.sample(c).value, { name: d } = this.options;
    o && d && Nr(o, d, l), n.setWithVelocity(a.sample(Math.max(0, c - u)).value, l, u), a.stop();
  }
}
const Hi = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(pt.test(t) || t === "0") && // And it contains numbers and/or colors
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
  const o = t[t.length - 1], r = Hi(s, e), a = Hi(o, e);
  return Xt(r === a, `You are trying to animate ${e} from "${s}" to "${o}". "${r ? o : s}" is not an animatable value.`, "value-not-animatable"), !r || !a ? !1 : Hl(t) || (n === "spring" || jr(n)) && i;
}
function On(t) {
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
class Jl extends hi {
  constructor({ autoplay: e = !0, delay: n = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: o = 0, repeatType: r = "loop", keyframes: a, name: c, motionValue: u, element: l, ...d }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = st.now();
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
    }, f = l?.KeyframeResolver || fi;
    this.keyframeResolver = new f(a, (m, y, p) => this.onKeyframesResolved(m, y, h, !p), c, u, l), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, n, i, s) {
    this.keyframeResolver = void 0;
    const { name: o, type: r, velocity: a, delay: c, isHandoff: u, onUpdate: l } = i;
    this.resolvedAt = st.now();
    let d = !0;
    Wl(e, o, r, a) || (d = !1, (kt.instantAnimations || !c) && l?.(Xe(e, i, n)), e[0] = e[e.length - 1], On(i), i.repeat = 0);
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
        p = new Ye(f);
      }
    else
      p = new Ye(f);
    p.finished.then(() => {
      this.notifyFinished();
    }).catch(dt), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p;
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
const Wi = 30, Ql = (t) => !isNaN(parseFloat(t));
class tc {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
      const s = st.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const o of this.dependents)
          o.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = st.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Ql(this.current));
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
    return process.env.NODE_ENV !== "production" && si(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new ii());
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
    const e = st.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Wi)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Wi);
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
function Kt(t, e) {
  return new tc(t, e);
}
function Wr(t, e) {
  if (t?.inherit && e) {
    const { inherit: n, ...i } = t;
    return { ...e, ...i };
  }
  return t;
}
function mi(t, e) {
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
}, rc = (t, { keyframes: e }) => e.length > 2 ? ic : Jt.has(t) ? t.startsWith("scale") ? nc(e[1]) : ec : sc, oc = /* @__PURE__ */ new Set([
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
const pi = (t, e, n, i = {}, s, o) => (r) => {
  const a = mi(i, t) || {}, c = a.delay || i.delay || 0;
  let { elapsed: u = 0 } = i;
  u = u - /* @__PURE__ */ lt(c);
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
  ac(a) || Object.assign(l, rc(t, l)), l.duration && (l.duration = /* @__PURE__ */ lt(l.duration)), l.repeatDelay && (l.repeatDelay = /* @__PURE__ */ lt(l.repeatDelay)), l.from !== void 0 && (l.keyframes[0] = l.from);
  let d = !1;
  if ((l.type === !1 || l.duration === 0 && !l.repeatDelay) && (On(l), l.delay === 0 && (d = !0)), (kt.instantAnimations || kt.skipAnimations || s?.shouldSkipAnimations || a.skipAnimations) && (d = !0, On(l), l.delay = 0), l.allowFlatten = !a.type && !a.ease, d && !o && e.get() !== void 0) {
    const h = Xe(l.keyframes, a);
    if (h !== void 0) {
      _.update(() => {
        l.onUpdate(h), l.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Ye(l) : new Jl(l);
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
  return ai(s) ? Ur(s, e, n + 1) : s;
}
function Ui(t) {
  const e = [{}, {}];
  return t?.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function gi(t, e, n, i) {
  if (typeof e == "function") {
    const [s, o] = Ui(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, o] = Ui(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  return e;
}
function $t(t, e, n) {
  const i = t.getProps();
  return gi(i, e, n !== void 0 ? n : i.custom, t);
}
const Kr = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Zt
]), $n = (t) => Array.isArray(t);
function dc(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Kt(n));
}
function hc(t) {
  return $n(t) ? t[t.length - 1] || 0 : t;
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
function jn(t, e) {
  const n = t.getValue("willChange");
  if (mc(n))
    return n.add(e);
  if (!n && kt.WillChange) {
    const i = new kt.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
function yi(t) {
  return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
const pc = "framerAppearId", Gr = "data-" + yi(pc);
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
      ...mi(o || {}, m)
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
    jn(t, m);
    const b = u ?? t.shouldReduceMotion;
    y.start(pi(m, y, p, b && Kr.has(m) ? { type: !1 } : x, t, g));
    const P = y.animation;
    P && d.push(P);
  }
  if (r) {
    const m = () => _.update(() => {
      r && fc(t, r);
    });
    d.length ? Promise.all(d).then(m) : m();
  }
  return d;
}
function Yn(t, e, n = {}) {
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
    c.notify("AnimationStart", e), a.push(Yn(c, e, {
      ...r,
      delay: n + (typeof i == "function" ? 0 : i) + Hr(t.variantChildren, c, i, s, o)
    }).then(() => c.notify("AnimationComplete", e)));
  return Promise.all(a);
}
function vc(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((o) => Yn(t, o, n));
    i = Promise.all(s);
  } else if (typeof e == "string")
    i = Yn(t, e, n);
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
}, Zr = (t) => (e) => e.test(t), Jr = [qt, I, bt, St, Ha, _a, xc], Ki = (t) => Jr.find(Zr(t));
function bc(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || cr(t) : !0;
}
const wc = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Tc(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(li) || [];
  if (!i)
    return t;
  const s = n.replace(i, "");
  let o = wc.has(e) ? 1 : 0;
  return i !== n && (o *= 100), e + "(" + o + s + ")";
}
const Mc = /\b([a-z-]*)\(.*?\)/gu, zn = {
  ...pt,
  getAnimatableNone: (t) => {
    const e = t.match(Mc);
    return e ? e.map(Tc).join(" ") : t;
  }
}, _n = {
  ...pt,
  getAnimatableNone: (t) => {
    const e = pt.parse(t);
    return pt.createTransformer(t)(e.map((i) => typeof i == "number" ? 0 : typeof i == "object" ? { ...i, alpha: 1 } : i));
  }
}, Gi = {
  ...qt,
  transform: Math.round
}, Cc = {
  rotate: St,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: St,
  rotateX: St,
  rotateY: St,
  rotateZ: St,
  scale: ve,
  scaleX: ve,
  scaleY: ve,
  scaleZ: ve,
  skew: St,
  skewX: St,
  skewY: St,
  distance: I,
  translateX: I,
  translateY: I,
  translateZ: I,
  x: I,
  y: I,
  z: I,
  perspective: I,
  transformPerspective: I,
  opacity: oe,
  originX: Ii,
  originY: Ii,
  originZ: I
}, ze = {
  // Border props
  borderWidth: I,
  borderTopWidth: I,
  borderRightWidth: I,
  borderBottomWidth: I,
  borderLeftWidth: I,
  borderRadius: I,
  borderTopLeftRadius: I,
  borderTopRightRadius: I,
  borderBottomRightRadius: I,
  borderBottomLeftRadius: I,
  // Positioning props
  width: I,
  maxWidth: I,
  height: I,
  maxHeight: I,
  top: I,
  right: I,
  bottom: I,
  left: I,
  inset: I,
  insetBlock: I,
  insetBlockStart: I,
  insetBlockEnd: I,
  insetInline: I,
  insetInlineStart: I,
  insetInlineEnd: I,
  // Spacing props
  padding: I,
  paddingTop: I,
  paddingRight: I,
  paddingBottom: I,
  paddingLeft: I,
  paddingBlock: I,
  paddingBlockStart: I,
  paddingBlockEnd: I,
  paddingInline: I,
  paddingInlineStart: I,
  paddingInlineEnd: I,
  margin: I,
  marginTop: I,
  marginRight: I,
  marginBottom: I,
  marginLeft: I,
  marginBlock: I,
  marginBlockStart: I,
  marginBlockEnd: I,
  marginInline: I,
  marginInlineStart: I,
  marginInlineEnd: I,
  // Typography
  fontSize: I,
  // Misc
  backgroundPositionX: I,
  backgroundPositionY: I,
  ...Cc,
  zIndex: Gi,
  // SVG
  fillOpacity: oe,
  strokeOpacity: oe,
  numOctaves: Gi
}, Sc = {
  ...ze,
  // Color props
  color: G,
  backgroundColor: G,
  outlineColor: G,
  fill: G,
  stroke: G,
  // Border props
  borderColor: G,
  borderTopColor: G,
  borderRightColor: G,
  borderBottomColor: G,
  borderLeftColor: G,
  filter: zn,
  WebkitFilter: zn,
  mask: _n,
  WebkitMask: _n
}, Qr = (t) => Sc[t], Pc = /* @__PURE__ */ new Set([zn, _n]);
function to(t, e) {
  let n = Qr(t);
  return Pc.has(n) || (n = pt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const Dc = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Ac(t, e, n) {
  let i = 0, s;
  for (; i < t.length && !s; ) {
    const o = t[i];
    typeof o == "string" && !Dc.has(o) && Ut(o).values.length && (s = t[i]), i++;
  }
  if (s && n)
    for (const o of e)
      t[o] = to(n, s);
}
class Vc extends fi {
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
      if (typeof d == "string" && (d = d.trim(), ai(d))) {
        const h = Ur(d, n.current);
        h !== void 0 && (e[l] = h), l === e.length - 1 && (this.finalKeyframe = d);
      }
    }
    if (this.resolveNoneKeyframes(), !Kr.has(i) || e.length !== 2)
      return;
    const [s, o] = e, r = Ki(s), a = Ki(o), c = Li(s), u = Li(o);
    if (c !== u && Vt[i]) {
      this.needsMeasurement = !0;
      return;
    }
    if (r !== a)
      if (zi(r) && zi(a))
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
const Hn = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function Me(t) {
  return lr(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
}
const { schedule: vi } = /* @__PURE__ */ Tr(queueMicrotask, !1), mt = {
  x: !1,
  y: !1
};
function no() {
  return mt.x || mt.y;
}
function kc(t) {
  return t === "x" || t === "y" ? mt[t] ? null : (mt[t] = !0, () => {
    mt[t] = !1;
  }) : mt.x || mt.y ? null : (mt.x = mt.y = !0, () => {
    mt.x = mt.y = !1;
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
const so = (t, e) => e ? t === e ? !0 : so(t, e.parentElement) : !1, xi = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, Lc = /* @__PURE__ */ new Set([
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
const Ce = /* @__PURE__ */ new WeakSet();
function Xi(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function un(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Fc = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = Xi(() => {
    if (Ce.has(n))
      return;
    un(n, "down");
    const s = Xi(() => {
      un(n, "up");
    }), o = () => un(n, "cancel");
    n.addEventListener("keyup", s, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function qi(t) {
  return xi(t) && !no();
}
const Zi = /* @__PURE__ */ new WeakSet();
function Oc(t, e, n = {}) {
  const [i, s, o] = io(t, n), r = (a) => {
    const c = a.currentTarget;
    if (!qi(a) || Zi.has(a))
      return;
    Ce.add(c), n.stopPropagation && Zi.add(a);
    const u = e(c, a), l = (f, m) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", h), Ce.has(c) && Ce.delete(c), qi(f) && typeof u == "function" && u(f, { success: m });
    }, d = (f) => {
      l(f, c === window || c === document || n.useGlobalTarget || so(c, f.target));
    }, h = (f) => {
      l(f, !1);
    };
    window.addEventListener("pointerup", d, s), window.addEventListener("pointercancel", h, s);
  };
  return i.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, s), Me(a) && (a.addEventListener("focus", (u) => Fc(u, s)), !Ic(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
function bi(t) {
  return lr(t) && "ownerSVGElement" in t;
}
const Se = /* @__PURE__ */ new WeakMap();
let Pe;
const ro = (t, e, n) => (i, s) => s && s[0] ? s[0][t + "Size"] : bi(i) && "getBBox" in i ? i.getBBox()[e] : i[n], $c = /* @__PURE__ */ ro("inline", "width", "offsetWidth"), jc = /* @__PURE__ */ ro("block", "height", "offsetHeight");
function Yc({ target: t, borderBoxSize: e }) {
  Se.get(t)?.forEach((n) => {
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
  typeof ResizeObserver > "u" || (Pe = new ResizeObserver(zc));
}
function Hc(t, e) {
  Pe || _c();
  const n = eo(t);
  return n.forEach((i) => {
    let s = Se.get(i);
    s || (s = /* @__PURE__ */ new Set(), Se.set(i, s)), s.add(e), Pe?.observe(i);
  }), () => {
    n.forEach((i) => {
      const s = Se.get(i);
      s?.delete(e), s?.size || Pe?.unobserve(i);
    });
  };
}
const De = /* @__PURE__ */ new Set();
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
    De.forEach((e) => e(t));
  }, window.addEventListener("resize", _t);
}
function Uc(t) {
  return De.add(t), _t || Wc(), () => {
    De.delete(t), !De.size && typeof _t == "function" && (window.removeEventListener("resize", _t), _t = void 0);
  };
}
function Ji(t, e) {
  return typeof t == "function" ? Uc(t) : Hc(t, e);
}
function Kc(t) {
  return bi(t) && t.tagName === "svg";
}
const Gc = [...Jr, G, pt], Xc = (t) => Gc.find(Zr(t)), Qi = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ht = () => ({
  x: Qi(),
  y: Qi()
}), ts = () => ({ min: 0, max: 0 }), q = () => ({
  x: ts(),
  y: ts()
}), qc = /* @__PURE__ */ new WeakMap();
function qe(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function ae(t) {
  return typeof t == "string" || Array.isArray(t);
}
const wi = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ti = ["initial", ...wi];
function Ze(t) {
  return qe(t.animate) || Ti.some((e) => ae(t[e]));
}
function oo(t) {
  return !!(Ze(t) || t.variants);
}
function Zc(t, e, n) {
  for (const i in e) {
    const s = e[i], o = n[i];
    if (tt(s))
      t.addValue(i, s);
    else if (tt(o))
      t.addValue(i, Kt(s, { owner: t }));
    else if (o !== s)
      if (t.hasValue(i)) {
        const r = t.getValue(i);
        r.liveStyle === !0 ? r.jump(s) : r.hasAnimated || r.set(s);
      } else {
        const r = t.getStaticValue(i);
        t.addValue(i, Kt(r !== void 0 ? r : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const Wn = { current: null }, ao = { current: !1 }, Jc = typeof window < "u";
function Qc() {
  if (ao.current = !0, !!Jc)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Wn.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      Wn.current = !1;
}
const es = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let _e = {};
function lo(t) {
  _e = t;
}
function tu() {
  return _e;
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = fi, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = st.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, _.render(this.render, !1, !0));
    };
    const { latestValues: u, renderState: l } = a;
    this.latestValues = u, this.baseTarget = { ...u }, this.initialValues = n.initial ? { ...u } : {}, this.renderState = l, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.skipAnimationsConfig = o, this.options = c, this.blockInitialAnimation = !!r, this.isControllingVariants = Ze(n), this.isVariantNode = oo(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
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
    this.current = e, qc.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (ao.current || Qc(), this.shouldReduceMotion = Wn.current), process.env.NODE_ENV !== "production" && si(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
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
        duration: /* @__PURE__ */ lt(l)
      }), h = r(d);
      this.valueSubscriptions.set(e, () => {
        h(), d.cancel();
      });
      return;
    }
    const i = Jt.has(e);
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
    for (e in _e) {
      const n = _e[e];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : q();
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
    for (let i = 0; i < es.length; i++) {
      const s = es[i];
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
    return i === void 0 && n !== void 0 && (i = Kt(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (ar(i) || cr(i)) ? i = parseFloat(i) : !Xc(i) && pt.test(n) && (i = to(e, n)), this.setBaseTarget(e, tt(i) ? i.get() : i)), tt(i) ? i.get() : i;
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
      const o = gi(this.props, n, this.presenceContext?.custom);
      o && (i = o[e]);
    }
    if (n && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !tt(s) ? s : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new ii()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    vi.render(this.render);
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
function dn(t) {
  return t === void 0 || t === 1;
}
function Un({ scale: t, scaleX: e, scaleY: n }) {
  return !dn(t) || !dn(e) || !dn(n);
}
function Bt(t) {
  return Un(t) || ho(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function ho(t) {
  return ns(t.x) || ns(t.y);
}
function ns(t) {
  return t && t !== "0%";
}
function He(t, e, n) {
  const i = t - n, s = e * i;
  return n + s;
}
function is(t, e, n, i, s) {
  return s !== void 0 && (t = He(t, s, i)), He(t, n, i) + e;
}
function Kn(t, e = 0, n = 1, i, s) {
  t.min = is(t.min, e, n, i, s), t.max = is(t.max, e, n, i, s);
}
function fo(t, { x: e, y: n }) {
  Kn(t.x, e.translate, e.scale, e.originPoint), Kn(t.y, n.translate, n.scale, n.originPoint);
}
const ss = 0.999999999999, rs = 1.0000000000001;
function su(t, e, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < s; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: c } = o.options;
    c && c.props.style && c.props.style.display === "contents" || (i && o.options.layoutScroll && o.scroll && o !== o.root && (vt(t.x, -o.scroll.offset.x), vt(t.y, -o.scroll.offset.y)), r && (e.x *= r.x.scale, e.y *= r.y.scale, fo(t, r)), i && Bt(o.latestValues) && Ae(t, o.latestValues, o.layout?.layoutBox));
  }
  e.x < rs && e.x > ss && (e.x = 1), e.y < rs && e.y > ss && (e.y = 1);
}
function vt(t, e) {
  t.min += e, t.max += e;
}
function os(t, e, n, i, s = 0.5) {
  const o = z(t.min, t.max, s);
  Kn(t, e, n, o, i);
}
function as(t, e) {
  return typeof t == "string" ? parseFloat(t) / 100 * (e.max - e.min) : t;
}
function Ae(t, e, n) {
  const i = n ?? t;
  os(t.x, as(e.x, i.x), e.scaleX, e.scale, e.originX), os(t.y, as(e.y, i.y), e.scaleY, e.scale, e.originY);
}
function mo(t, e) {
  return uo(iu(t.getBoundingClientRect(), e));
}
function ru(t, e, n) {
  const i = mo(t, n), { scroll: s } = e;
  return s && (vt(i.x, s.offset.x), vt(i.y, s.offset.y)), i;
}
const ou = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, au = Zt.length;
function lu(t, e, n) {
  let i = "", s = !0;
  for (let r = 0; r < au; r++) {
    const a = Zt[r], c = t[a];
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
      const l = Hn(c, ze[a]);
      if (!u) {
        s = !1;
        const d = ou[a] || a;
        i += `${d}(${l}) `;
      }
      n && (e[a] = l);
    }
  }
  const o = t.pathRotation;
  return o && (s = !1, i += `rotate(${Hn(o, ze.pathRotation)}) `), i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function Mi(t, e, n) {
  const { style: i, vars: s, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const c in e) {
    const u = e[c];
    if (Jt.has(c)) {
      r = !0;
      continue;
    } else if (Cr(c)) {
      s[c] = u;
      continue;
    } else {
      const l = Hn(u, ze[c]);
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
function ls(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Qt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (I.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = ls(t, e.target.x), i = ls(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, cu = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, s = pt.parse(t);
    if (s.length > 5)
      return i;
    const o = pt.createTransformer(t), r = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * e.x, c = n.y.scale * e.y;
    s[0 + r] /= a, s[1 + r] /= c;
    const u = z(a, c, 0.5);
    return typeof s[2 + r] == "number" && (s[2 + r] /= u), typeof s[3 + r] == "number" && (s[3 + r] /= u), o(s);
  }
}, Gn = {
  borderRadius: {
    ...Qt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Qt,
  borderTopRightRadius: Qt,
  borderBottomLeftRadius: Qt,
  borderBottomRightRadius: Qt,
  boxShadow: cu
};
function go(t, { layout: e, layoutId: n }) {
  return Jt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Gn[t] || t === "opacity");
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
    if (Jt.has(n))
      return this.projection?.isProjecting ? Ln(n) : kl(e, n);
    {
      const i = uu(e), s = (Cr(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return mo(e, n);
  }
  build(e, n, i) {
    Mi(e, n, i.transformTemplate);
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
  if (Mi(t, a, u), c) {
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
    t.setAttribute(vo.has(s) ? s : yi(s), e.attrs[s]);
}
function bo(t, e, n) {
  const i = Ci(t, e, n);
  for (const s in t)
    if (tt(t[s]) || tt(e[s])) {
      const o = Zt.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[o] = t[s];
    }
  return i;
}
class yu extends co {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = q;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Jt.has(n)) {
      const i = Qr(n);
      return i && i.default || 0;
    }
    return n = vo.has(n) ? n : yi(n), e.getAttribute(n);
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
const vu = Ti.length;
function wo(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? wo(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < vu; n++) {
    const i = Ti[n], s = t.props[i];
    (ae(s) || s === !1) && (e[i] = s);
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
const xu = [...wi].reverse(), bu = wi.length;
function wu(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => vc(t, n, i)));
}
function Tu(t) {
  let e = wu(t), n = cs(), i = !0, s = !1;
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
      const w = xu[x], g = n[w], b = l[w] !== void 0 ? l[w] : d[w], P = ae(b), V = w === u ? g.isActive : null;
      V === !1 && (y = x);
      let k = b === d[w] && b !== l[w] && P;
      if (k && (i || s) && t.manuallyAnimateOnMount && (k = !1), g.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !g.isActive && V === null || // If we didn't and don't have any defined prop for this animation type
      !b && !g.prevProp || // Or if the prop doesn't define an animation
      qe(b) || typeof b == "boolean")
        continue;
      if (w === "exit" && g.isActive && V !== !0) {
        g.prevResolvedValues && (m = {
          ...m,
          ...g.prevResolvedValues
        });
        continue;
      }
      const A = Mu(g.prevProp, b);
      let E = A || // If we're making this variant active, we want to always make it active
      w === u && g.isActive && !k && P || // If we removed a higher-priority variant (i is in reverse order)
      x > y && P, T = !1;
      const D = Array.isArray(b) ? b : [b];
      let F = D.reduce(o(w), {});
      V === !1 && (F = {});
      const { prevResolvedValues: j = {} } = g, R = {
        ...j,
        ...F
      }, C = (S) => {
        E = !0, f.has(S) && (T = !0, f.delete(S)), g.needsAnimating[S] = !0;
        const L = t.getValue(S);
        L && (L.liveStyle = !1);
      };
      for (const S in R) {
        const L = F[S], N = j[S];
        if (m.hasOwnProperty(S))
          continue;
        let $ = !1;
        $n(L) && $n(N) ? $ = !To(L, N) || A : $ = L !== N, $ ? L != null ? C(S) : f.add(S) : L !== void 0 && f.has(S) ? C(S) : g.protectedKeys[S] = !0;
      }
      g.prevProp = b, g.prevResolvedValues = F, g.isActive && (m = { ...m, ...F }), (i || s) && t.blockInitialAnimation && (E = !1);
      const M = k && A;
      E && (!M || T) && h.push(...D.map((S) => {
        const L = { type: w };
        if (typeof S == "string" && (i || s) && !M && t.manuallyAnimateOnMount && t.parent) {
          const { parent: N } = t, $ = $t(N, S);
          if (N.enteringChildren && $) {
            const { delayChildren: Y } = $.transition || {};
            L.delay = Hr(N.enteringChildren, t, Y);
          }
        }
        return {
          animation: S,
          options: L
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
      n = cs(), s = !0;
    }
  };
}
function Mu(t, e) {
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
function cs() {
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
function Xn(t, e) {
  t.min = e.min, t.max = e.max;
}
function ft(t, e) {
  Xn(t.x, e.x), Xn(t.y, e.y);
}
function us(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
const Mo = 1e-4, Cu = 1 - Mo, Su = 1 + Mo, Co = 0.01, Pu = 0 - Co, Du = 0 + Co;
function rt(t) {
  return t.max - t.min;
}
function Au(t, e, n) {
  return Math.abs(t - e) <= n;
}
function ds(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = z(e.min, e.max, t.origin), t.scale = rt(n) / rt(e), t.translate = z(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Cu && t.scale <= Su || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Pu && t.translate <= Du || isNaN(t.translate)) && (t.translate = 0);
}
function ne(t, e, n, i) {
  ds(t.x, e.x, n.x, i ? i.originX : void 0), ds(t.y, e.y, n.y, i ? i.originY : void 0);
}
function hs(t, e, n, i = 0) {
  const s = i ? z(n.min, n.max, i) : n.min;
  t.min = s + e.min, t.max = t.min + rt(e);
}
function Vu(t, e, n, i) {
  hs(t.x, e.x, n.x, i?.x), hs(t.y, e.y, n.y, i?.y);
}
function fs(t, e, n, i = 0) {
  const s = i ? z(n.min, n.max, i) : n.min;
  t.min = e.min - s, t.max = t.min + rt(e);
}
function We(t, e, n, i) {
  fs(t.x, e.x, n.x, i?.x), fs(t.y, e.y, n.y, i?.y);
}
function ms(t, e, n, i, s) {
  return t -= e, t = He(t, 1 / n, i), s !== void 0 && (t = He(t, 1 / s, i)), t;
}
function ku(t, e = 0, n = 1, i = 0.5, s, o = t, r = t) {
  if (bt.test(e) && (e = parseFloat(e), e = z(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = z(o.min, o.max, i);
  t === o && (a -= e), t.min = ms(t.min, e, n, a, s), t.max = ms(t.max, e, n, a, s);
}
function ps(t, e, [n, i, s], o, r) {
  ku(t, e[n], e[i], e[s], e.scale, o, r);
}
const Eu = ["x", "scaleX", "originX"], Ru = ["y", "scaleY", "originY"];
function gs(t, e, n, i) {
  ps(t.x, e, Eu, n ? n.x : void 0, i ? i.x : void 0), ps(t.y, e, Ru, n ? n.y : void 0, i ? i.y : void 0);
}
function ys(t) {
  return t.translate === 0 && t.scale === 1;
}
function So(t) {
  return ys(t.x) && ys(t.y);
}
function vs(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Lu(t, e) {
  return vs(t.x, e.x) && vs(t.y, e.y);
}
function xs(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Po(t, e) {
  return xs(t.x, e.x) && xs(t.y, e.y);
}
function bs(t) {
  return rt(t.x) / rt(t.y);
}
function ws(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
function yt(t) {
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
], Bu = Do.length, Ts = (t) => typeof t == "string" ? parseFloat(t) : t, Ms = (t) => typeof t == "number" || I.test(t);
function Nu(t, e, n, i, s, o) {
  s ? (t.opacity = z(0, n.opacity ?? 1, Fu(i)), t.opacityExit = z(e.opacity ?? 1, 0, Ou(i))) : o && (t.opacity = z(e.opacity ?? 1, n.opacity ?? 1, i));
  for (let r = 0; r < Bu; r++) {
    const a = Do[r];
    let c = Cs(e, a), u = Cs(n, a);
    if (c === void 0 && u === void 0)
      continue;
    c || (c = 0), u || (u = 0), c === 0 || u === 0 || Ms(c) === Ms(u) ? (t[a] = Math.max(z(Ts(c), Ts(u), i), 0), (bt.test(u) || bt.test(c)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = z(e.rotate || 0, n.rotate || 0, i));
}
function Cs(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Fu = /* @__PURE__ */ Ao(0, 0.5, vr), Ou = /* @__PURE__ */ Ao(0.5, 0.95, dt);
function Ao(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ re(t, e, i));
}
function $u(t, e, n) {
  const i = tt(t) ? t : Kt(t);
  return i.start(pi("", i, e, n)), i.animation;
}
function le(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
const ju = (t, e) => t.depth - e.depth;
class Yu {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    ni(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    Fe(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(ju), this.isDirty = !1, this.children.forEach(e);
  }
}
function zu(t, e) {
  const n = st.now(), i = ({ timestamp: s }) => {
    const o = s - n;
    o >= e && (Et(i), t(o - e));
  };
  return _.setup(i, !0), () => Et(i);
}
function Ve(t) {
  return tt(t) ? t.get() : t;
}
class _u {
  constructor() {
    this.members = [];
  }
  add(e) {
    ni(this.members, e);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const i = this.members[n];
      if (i === e || i === this.lead || i === this.prevLead)
        continue;
      const s = i.instance;
      (!s || s.isConnected === !1) && !i.snapshot && (Fe(this.members, i), i.unmount());
    }
    e.scheduleRender();
  }
  remove(e) {
    if (Fe(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
const ke = {
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
}, hn = ["", "X", "Y", "Z"], Hu = 1e3;
let Wu = 0;
function fn(t, e, n, i) {
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
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new ii()), this.eventHandlers.get(r).add(a);
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
      this.isSVG = bi(r) && !Kc(r), this.instance = r;
      const { layoutId: a, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (c || a) && (this.isLayoutDirty = !0), t) {
        let l, d = 0;
        const h = () => this.root.updateBlockedByResize = !1;
        _.read(() => {
          d = window.innerWidth;
        }), t(r, () => {
          const f = window.innerWidth;
          f !== d && (d = f, this.root.updateBlockedByResize = !0, l && l(), l = zu(h, 250), ke.hasAnimatedSinceResize && (ke.hasAnimatedSinceResize = !1, this.nodes.forEach(Ds)));
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
            ...mi(m, "layout"),
            onPlay: y,
            onComplete: p
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (g.delay = 0, g.type = !1), this.startAnimation(g), this.setAnimationOrigin(l, w, g.path);
        } else
          d || Ds(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), c && this.nodes.forEach(Zu), this.nodes.forEach(Ss);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Ps);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Ju), this.nodes.forEach(Qu), this.nodes.forEach(Uu), this.nodes.forEach(Ku)) : this.nodes.forEach(Ps), this.clearAllSnapshots();
      const a = st.now();
      Q.delta = wt(0, 1e3 / 60, a - Q.timestamp), Q.timestamp = a, Q.isProcessing = !0, sn.update.process(Q), sn.preRender.process(Q), sn.render.process(Q), Q.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, vi.read(this.scheduleUpdate));
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
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !rt(this.snapshot.measuredBox.x) && !rt(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = q()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
        return q();
      const a = r.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(ld))) {
        const { scroll: u } = this.root;
        u && (vt(a.x, u.offset.x), vt(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      const a = q();
      if (ft(a, r), this.scroll?.wasRoot)
        return a;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: l, options: d } = u;
        u !== this.root && l && d.layoutScroll && (l.wasRoot && ft(a, r), vt(a.x, l.offset.x), vt(a.y, l.offset.y));
      }
      return a;
    }
    applyTransform(r, a = !1, c) {
      const u = c || q();
      ft(u, r);
      for (let l = 0; l < this.path.length; l++) {
        const d = this.path[l];
        !a && d.options.layoutScroll && d.scroll && d !== d.root && (vt(u.x, -d.scroll.offset.x), vt(u.y, -d.scroll.offset.y)), Bt(d.latestValues) && Ae(u, d.latestValues, d.layout?.layoutBox);
      }
      return Bt(this.latestValues) && Ae(u, this.latestValues, this.layout?.layoutBox), u;
    }
    removeTransform(r) {
      const a = q();
      ft(a, r);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!Bt(u.latestValues))
          continue;
        let l;
        u.instance && (Un(u.latestValues) && u.updateSnapshot(), l = q(), ft(l, u.measurePageBox())), gs(a, u.latestValues, u.snapshot?.layoutBox, l);
      }
      return Bt(this.latestValues) && gs(a, this.latestValues), a;
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
      h && this.linkedParentVersion !== h.layoutVersion && !h.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && h && h.layout ? this.createRelativeTarget(h, this.layout.layoutBox, h.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = q(), this.targetWithTransforms = q()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Vu(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : ft(this.target, this.layout.layoutBox), fo(this.target, this.targetDelta)) : ft(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? this.createRelativeTarget(h, this.target, h.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Un(this.parent.latestValues) || ho(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(r, a, c) {
      this.relativeParent = r, this.linkedParentVersion = r.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = q(), this.relativeTargetOrigin = q(), We(this.relativeTargetOrigin, a, c, this.options.layoutAnchor || void 0), ft(this.relativeTarget, this.relativeTargetOrigin);
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
      ft(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, h = this.treeScale.y;
      su(this.layoutCorrected, this.treeScale, this.path, a), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = q());
      const { target: f } = r;
      if (!f) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (us(this.prevProjectionDelta.x, this.projectionDelta.x), us(this.prevProjectionDelta.y, this.projectionDelta.y)), ne(this.projectionDelta, this.layoutCorrected, f, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== h || !ws(this.projectionDelta.x, this.prevProjectionDelta.x) || !ws(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", f));
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
      const f = q(), m = u ? u.source : void 0, y = this.layout ? this.layout.source : void 0, p = m !== y, x = this.getStack(), w = !x || x.members.length <= 1, g = !!(p && !w && this.options.crossfade === !0 && !this.path.some(rd));
      this.animationProgress = 0;
      let b;
      const P = c?.interpolateProjection(r);
      this.mixTargetDelta = (V) => {
        const k = V / 1e3, A = P?.(k);
        A ? (h.x.translate = A.x, h.x.scale = z(r.x.scale, 1, k), h.x.origin = r.x.origin, h.x.originPoint = r.x.originPoint, h.y.translate = A.y, h.y.scale = z(r.y.scale, 1, k), h.y.origin = r.y.origin, h.y.originPoint = r.y.originPoint) : (As(h.x, r.x, k), As(h.y, r.y, k)), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (We(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), sd(this.relativeTarget, this.relativeTargetOrigin, f, k), b && Lu(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = q()), ft(b, this.relativeTarget)), p && (this.animationValues = d, Nu(d, l, this.latestValues, k, g, w)), A && A.rotate !== void 0 && (this.animationValues || (this.animationValues = d), this.animationValues.pathRotation = A.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Et(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = _.update(() => {
        ke.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Kt(0)), this.motionValue.jump(0, !1), this.currentAnimation = $u(this.motionValue, [0, 1e3], {
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
          c = this.target || q();
          const d = rt(this.layout.layoutBox.x);
          c.x.min = r.target.x.min, c.x.max = c.x.min + d;
          const h = rt(this.layout.layoutBox.y);
          c.y.min = r.target.y.min, c.y.max = c.y.min + h;
        }
        ft(a, c), Ae(a, l), ne(this.projectionDeltaWithTransform, this.layoutCorrected, a, l);
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
      c.z && fn("z", r, u, this.animationValues);
      for (let l = 0; l < hn.length; l++)
        fn(`rotate${hn[l]}`, r, u, this.animationValues), fn(`skew${hn[l]}`, r, u, this.animationValues);
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
        this.needsReset = !1, r.visibility = "", r.opacity = "", r.pointerEvents = Ve(a?.pointerEvents) || "", r.transform = c ? c(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = Ve(a?.pointerEvents) || ""), this.hasProjected && !Bt(this.latestValues) && (r.transform = c ? c({}, "") : "none", this.hasProjected = !1);
        return;
      }
      r.visibility = "";
      const l = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = Iu(this.projectionDeltaWithTransform, this.treeScale, l);
      c && (d = c(l, d)), r.transform = d;
      const { x: h, y: f } = this.projectionDelta;
      r.transformOrigin = `${h.origin * 100}% ${f.origin * 100}% 0`, u.animationValues ? r.opacity = u === this ? l.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : l.opacityExit : r.opacity = u === this ? l.opacity !== void 0 ? l.opacity : "" : l.opacityExit !== void 0 ? l.opacityExit : 0;
      for (const m in Gn) {
        if (l[m] === void 0)
          continue;
        const { correct: y, applyTo: p, isCSSVariable: x } = Gn[m], w = d === "none" ? l[m] : y(l[m], u);
        if (p) {
          const g = p.length;
          for (let b = 0; b < g; b++)
            r[p[b]] = w;
        } else
          x ? this.options.visualElement.renderState.vars[m] = w : r[m] = w;
      }
      this.options.layoutId && (r.pointerEvents = u === this ? Ve(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => r.currentAnimation?.stop()), this.root.nodes.forEach(Ss), this.root.sharedNodes.clear();
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
      yt((l) => {
        const d = o ? e.measuredBox[l] : e.layoutBox[l], h = rt(d);
        d.min = n[l].min, d.max = d.min + h;
      });
    else if (s === "x" || s === "y") {
      const l = s === "x" ? "y" : "x";
      Xn(o ? e.measuredBox[l] : e.layoutBox[l], n[l]);
    } else Eo(s, e.layoutBox, n) && yt((l) => {
      const d = o ? e.measuredBox[l] : e.layoutBox[l], h = rt(n[l]);
      d.max = d.min + h, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[l].max = t.relativeTarget[l].min + h);
    });
    const r = Ht();
    ne(r, n, e.layoutBox);
    const a = Ht();
    o ? ne(a, t.applyTransform(i, !0), e.measuredBox) : ne(a, n, e.layoutBox);
    const c = !So(r);
    let u = !1;
    if (!t.resumeFrom) {
      const l = t.getClosestProjectingParent();
      if (l && !l.resumeFrom) {
        const { snapshot: d, layout: h } = l;
        if (d && h) {
          const f = t.options.layoutAnchor || void 0, m = q();
          We(m, e.layoutBox, d.layoutBox, f);
          const y = q();
          We(y, n, h.layoutBox, f), Po(m, y) || (u = !0), l.options.layoutRoot && (t.relativeTarget = y, t.relativeTargetOrigin = m, t.relativeParent = l);
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
function Ss(t) {
  t.clearMeasurements();
}
function Zu(t) {
  t.isLayoutDirty = !0, t.updateLayout();
}
function Ps(t) {
  t.isLayoutDirty = !1;
}
function Ju(t) {
  t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout, t.isLayoutDirty = !0);
}
function Qu(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Ds(t) {
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
function As(t, e, n) {
  t.translate = z(e.translate, 0, n), t.scale = z(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Vs(t, e, n, i) {
  t.min = z(e.min, n.min, i), t.max = z(e.max, n.max, i);
}
function sd(t, e, n, i) {
  Vs(t.x, e.x, n.x, i), Vs(t.y, e.y, n.y, i);
}
function rd(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const od = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, ks = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Es = ks("applewebkit/") && !ks("chrome/") ? Math.round : dt;
function Rs(t) {
  t.min = Es(t.min), t.max = Es(t.max);
}
function ad(t) {
  Rs(t.x), Rs(t.y);
}
function Eo(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !Au(bs(e), bs(n), 0.2);
}
function ld(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const cd = ko({
  attachResizeListener: (t, e) => le(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), mn = {
  current: void 0
}, Ro = ko({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!mn.current) {
      const t = new cd({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), mn.current = t;
    }
    return mn.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Si = Gt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function Ls(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function ud(...t) {
  return (e) => {
    let n = !1;
    const i = t.map((s) => {
      const o = Ls(s, e);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const o = i[s];
          typeof o == "function" ? o() : Ls(t[s], null);
        }
      };
  };
}
function dd(...t) {
  return Ke.useCallback(ud(...t), t);
}
class hd extends Ke.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (Me(n) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const i = n.offsetParent, s = Me(i) && i.offsetWidth || 0, o = Me(i) && i.offsetHeight || 0, r = getComputedStyle(n), a = this.props.sizeRef.current;
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
  const r = Jn(), a = it(null), c = it({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: u } = et(Si), l = t.props?.ref ?? t?.ref, d = dd(a, l);
  return Qn(() => {
    const { width: h, height: f, top: m, left: y, right: p, bottom: x, direction: w } = c.current;
    if (e || o === !1 || !a.current || !h || !f)
      return;
    const g = w === "rtl", b = n === "left" ? g ? `right: ${p}` : `left: ${y}` : g ? `left: ${y}` : `right: ${p}`, P = i === "bottom" ? `bottom: ${x}` : `top: ${m}`;
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
            ${P}px !important;
          }
        `), () => {
      a.current?.removeAttribute("data-motion-pop-id"), k.contains(V) && k.removeChild(V);
    };
  }, [e]), v(hd, { isPresent: e, childRef: a, sizeRef: c, pop: o, children: o === !1 ? t : Ke.cloneElement(t, { ref: d }) });
}
const md = ({ children: t, initial: e, isPresent: n, onExitComplete: i, custom: s, presenceAffectsLayout: o, mode: r, anchorX: a, anchorY: c, root: u }) => {
  const l = ei(pd), d = Jn();
  let h = !0, f = ht(() => (h = !1, {
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
  return o && h && (f = { ...f }), ht(() => {
    l.forEach((m, y) => l.set(y, !1));
  }, [n]), Ke.useEffect(() => {
    !n && !l.size && i && i();
  }, [n]), t = v(fd, { pop: r === "popLayout", isPresent: n, anchorX: a, anchorY: c, root: u, children: t }), v(Ge.Provider, { value: f, children: t });
};
function pd() {
  return /* @__PURE__ */ new Map();
}
function Lo(t = !0) {
  const e = et(Ge);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, o = Jn();
  Tt(() => {
    if (t)
      return s(o);
  }, [t]);
  const r = Wt(() => t && i && i(o), [o, i, t]);
  return !n && i ? [!1, r] : [!0];
}
const xe = (t) => t.key || "";
function Is(t) {
  const e = [];
  return qo.forEach(t, (n) => {
    Zo(n) && e.push(n);
  }), e;
}
const ce = ({ children: t, custom: e, initial: n = !0, onExitComplete: i, presenceAffectsLayout: s = !0, mode: o = "sync", propagate: r = !1, anchorX: a = "left", anchorY: c = "top", root: u }) => {
  const [l, d] = Lo(r), h = ht(() => Is(t), [t]), f = r && !l ? [] : h.map(xe), m = it(!0), y = it(h), p = ei(() => /* @__PURE__ */ new Map()), x = it(/* @__PURE__ */ new Set()), [w, g] = K(h), [b, P] = K(h);
  or(() => {
    m.current = !1, y.current = h;
    for (let A = 0; A < b.length; A++) {
      const E = xe(b[A]);
      f.includes(E) ? (p.delete(E), x.current.delete(E)) : p.get(E) !== !0 && p.set(E, !1);
    }
  }, [b, f.length, f.join("-")]);
  const V = [];
  if (h !== w) {
    let A = [...h];
    for (let E = 0; E < b.length; E++) {
      const T = b[E], D = xe(T);
      f.includes(D) || (A.splice(E, 0, T), V.push(T));
    }
    return o === "wait" && V.length && (A = V), P(Is(A)), g(h), null;
  }
  process.env.NODE_ENV !== "production" && o === "wait" && b.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: k } = et(ti);
  return v(Qs, { children: b.map((A) => {
    const E = xe(A), T = r && !l ? !1 : h === b || f.includes(E), D = () => {
      if (x.current.has(E))
        return;
      if (p.has(E))
        x.current.add(E), p.set(E, !0);
      else
        return;
      let F = !0;
      p.forEach((j) => {
        j || (F = !1);
      }), F && (k?.(), P(y.current), r && d?.(), i && i());
    };
    return v(md, { isPresent: T, initial: !m.current || n ? void 0 : !1, custom: e, presenceAffectsLayout: s, mode: o, root: u, onExitComplete: T ? void 0 : D, anchorX: a, anchorY: c, children: A }, E);
  }) });
}, Io = Gt({ strict: !1 }), Bs = {
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
let Ns = !1;
function gd() {
  if (Ns)
    return;
  const t = {};
  for (const e in Bs)
    t[e] = {
      isEnabled: (n) => Bs[e].some((i) => !!n[i])
    };
  lo(t), Ns = !0;
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
function Ue(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || vd.has(t);
}
let No = (t) => !Ue(t);
function xd(t) {
  typeof t == "function" && (No = (e) => e.startsWith("on") ? !Ue(e) : t(e));
}
try {
  xd(require("@emotion/is-prop-valid").default);
} catch {
}
function bd(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || tt(t[s]) || (No(s) || n === !0 && Ue(s) || !e && !Ue(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
const Je = /* @__PURE__ */ Gt({});
function wd(t, e) {
  if (Ze(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || ae(n) ? n : void 0,
      animate: ae(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Td(t) {
  const { initial: e, animate: n } = wd(t, et(Je));
  return ht(() => ({ initial: e, animate: n }), [Fs(e), Fs(n)]);
}
function Fs(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Pi = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Fo(t, e, n) {
  for (const i in e)
    !tt(e[i]) && !go(i, n) && (t[i] = e[i]);
}
function Md({ transformTemplate: t }, e) {
  return ht(() => {
    const n = Pi();
    return Mi(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function Cd(t, e) {
  const n = t.style || {}, i = {};
  return Fo(i, n, t), Object.assign(i, Md(t, e)), i;
}
function Sd(t, e) {
  const n = {}, i = Cd(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
const Oo = () => ({
  ...Pi(),
  attrs: {}
});
function Pd(t, e, n, i) {
  const s = ht(() => {
    const o = Oo();
    return yo(o, e, xo(i), t.transformTemplate, t.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    Fo(o, t.style, t), s.style = { ...o, ...s.style };
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
function Di(t) {
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
  const c = (r ?? Di(t) ? Pd : Sd)(e, i, s, t), u = bd(e, typeof t == "string", o), l = t !== tr ? { ...u, ...c, ref: n } : {}, { children: d } = e, h = ht(() => tt(d) ? d.get() : d, [d]);
  return Jo(t, {
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
    s[h] = Ve(o[h]);
  let { initial: r, animate: a } = t;
  const c = Ze(t), u = oo(t);
  e && u && !c && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let l = n ? n.initial === !1 : !1;
  l = l || r === !1;
  const d = l ? a : r;
  if (d && typeof d != "boolean" && !qe(d)) {
    const h = Array.isArray(d) ? d : [d];
    for (let f = 0; f < h.length; f++) {
      const m = gi(t, h[f]);
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
  const i = et(Je), s = et(Ge), o = () => Vd(t, e, i, s);
  return n ? o() : ei(o);
}, Ed = /* @__PURE__ */ $o({
  scrapeMotionValuesFromProps: Ci,
  createRenderState: Pi
}), Rd = /* @__PURE__ */ $o({
  scrapeMotionValuesFromProps: bo,
  createRenderState: Oo
}), Ld = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function Id(t, e, n) {
  const i = it(n);
  Qn(() => {
    i.current = n;
  });
  const s = it(null);
  return Wt((o) => {
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
const jo = Gt({});
function jt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Bd(t, e, n, i, s, o) {
  const { visualElement: r } = et(Je), a = et(Io), c = et(Ge), u = et(Si), l = u.reducedMotion, d = u.skipAnimations, h = it(null), f = it(!1);
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
  const p = it(!1);
  Qn(() => {
    m && p.current && m.update(n, c);
  });
  const x = n[Gr], w = it(!!x && typeof window < "u" && !window.MotionHandoffIsComplete?.(x) && window.MotionHasOptimisedAnimation?.(x));
  return or(() => {
    f.current = !0, m && (p.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), w.current && m.animationState && m.animationState.animateChanges());
  }), Tt(() => {
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
function pn(t, { forwardMotionProps: e = !1, type: n } = {}, i, s) {
  i && yd(i);
  const o = n ? n === "svg" : Di(t), r = o ? Rd : Ed;
  function a(u, l) {
    let d;
    const h = {
      ...et(Si),
      ...u,
      layoutId: Fd(u)
    }, { isStatic: f } = h, m = Td(u), y = r(u, f);
    if (!f && typeof window < "u") {
      Od(h, i);
      const p = $d(h);
      d = p.MeasureLayout, m.visualElement = Bd(t, y, h, s, p.ProjectionNode, o);
    }
    return O(Je.Provider, { value: m, children: [d && m.visualElement ? v(d, { visualElement: m.visualElement, ...h }) : null, Ad(t, u, Id(y, m.visualElement, l), y, f, e, o)] });
  }
  a.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const c = Qo(a);
  return c[Ld] = t, c;
}
function Fd({ layoutId: t }) {
  const e = et(ti).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Od(t, e) {
  const n = et(Io).strict;
  if (process.env.NODE_ENV !== "production" && e && n) {
    const i = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? Xt(!1, i, "lazy-strict-mode") : Pt(!1, i, "lazy-strict-mode");
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
    return pn;
  const n = /* @__PURE__ */ new Map(), i = (o, r) => pn(o, r, t, e), s = (o, r) => (process.env.NODE_ENV !== "production" && si(!1, "motion() is deprecated. Use motion.create() instead."), i(o, r));
  return new Proxy(s, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, r) => r === "create" ? i : (n.has(r) || n.set(r, pn(r, void 0, t, e)), n.get(r))
  });
}
const Yd = (t, e) => e.isSVG ?? Di(t) ? new yu(e) : new du(e, {
  allowProjection: t !== tr
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
    qe(e) && (this.unmountControls = e.subscribe(this.node));
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
function me(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const Ud = (t) => (e) => xi(e) && t(e, me(e));
function ie(t, e, n, i) {
  return le(t, e, Ud(n), i);
}
const zo = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Os = (t, e) => Math.abs(t - e);
function Kd(t, e) {
  const n = Os(t.x, e.x), i = Os(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
const $s = /* @__PURE__ */ new Set(["auto", "scroll"]);
class _o {
  constructor(e, n, { transformPagePoint: i, contextWindow: s = window, dragSnapToOrigin: o = !1, distanceThreshold: r = 3, element: a } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (f) => {
      this.handleScroll(f.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = be(this.lastRawMoveEventInfo, this.transformPagePoint));
      const f = gn(this.lastMoveEventInfo, this.history), m = this.startEvent !== null, y = Kd(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!m && !y)
        return;
      const { point: p } = f, { timestamp: x } = Q;
      this.history.push({ ...p, timestamp: x });
      const { onStart: w, onMove: g } = this.handlers;
      m || (w && w(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, m) => {
      this.lastMoveEvent = f, this.lastRawMoveEventInfo = m, this.lastMoveEventInfo = be(m, this.transformPagePoint), _.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, m) => {
      this.end();
      const { onEnd: y, onSessionEnd: p, resumeAnimation: x } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && x && x(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const w = gn(f.type === "pointercancel" ? this.lastMoveEventInfo : be(m, this.transformPagePoint), this.history);
      this.startEvent && y && y(f, w), p && p(f, w);
    }, !xi(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = i, this.distanceThreshold = r, this.contextWindow = s || window;
    const c = me(e), u = be(c, this.transformPagePoint), { point: l } = u, { timestamp: d } = Q;
    this.history = [{ ...l, timestamp: d }];
    const { onSessionStart: h } = n;
    h && h(e, gn(u, this.history)), this.removeListeners = de(ie(this.contextWindow, "pointermove", this.handlePointerMove), ie(this.contextWindow, "pointerup", this.handlePointerUp), ie(this.contextWindow, "pointercancel", this.handlePointerUp)), a && this.startScrollTracking(a);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(e) {
    let n = e.parentElement;
    for (; n; ) {
      const i = getComputedStyle(n);
      ($s.has(i.overflowX) || $s.has(i.overflowY)) && this.scrollPositions.set(n, {
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
function be(t, e) {
  return e ? { point: e(t.point) } : t;
}
function js(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function gn({ point: t }, e) {
  return {
    point: t,
    delta: js(t, Ho(e)),
    offset: js(t, Gd(e)),
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
  for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > /* @__PURE__ */ lt(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  i === t[0] && t.length > 2 && s.timestamp - i.timestamp > /* @__PURE__ */ lt(e) * 2 && (i = t[1]);
  const o = /* @__PURE__ */ ut(s.timestamp - i.timestamp);
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
function Ys(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Zd(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: Ys(t.x, n, s),
    y: Ys(t.y, e, i)
  };
}
function zs(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Jd(t, e) {
  return {
    x: zs(t.x, e.x),
    y: zs(t.y, e.y)
  };
}
function Qd(t, e) {
  let n = 0.5;
  const i = rt(t), s = rt(e);
  return s > i ? n = /* @__PURE__ */ re(e.min, e.max - i, t.min) : i > s && (n = /* @__PURE__ */ re(t.min, t.max - s, e.min)), wt(0, 1, n);
}
function th(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const qn = 0.35;
function eh(t = qn) {
  return t === !1 ? t = 0 : t === !0 && (t = qn), {
    x: _s(t, "left", "right"),
    y: _s(t, "top", "bottom")
  };
}
function _s(t, e, n) {
  return {
    min: Hs(t, e),
    max: Hs(t, n)
  };
}
function Hs(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const nh = /* @__PURE__ */ new WeakMap();
class ih {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = q(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: i } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const o = (d) => {
      n && this.snapToCursor(me(d).point), this.stopAnimation();
    }, r = (d, h) => {
      const { drag: f, dragPropagation: m, onDragStart: y } = this.getProps();
      if (f && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = kc(f), !this.openDragLock))
        return;
      this.latestPointerEvent = d, this.latestPanInfo = h, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), yt((x) => {
        let w = this.getAxisMotionValue(x).get() || 0;
        if (bt.test(w)) {
          const { projection: g } = this.visualElement;
          if (g && g.layout) {
            const b = g.layout.layoutBox[x];
            b && (w = rt(b) * (parseFloat(w) / 100));
          }
        }
        this.originPoint[x] = w;
      }), y && _.update(() => y(d, h), !1, !0), jn(this.visualElement, "transform");
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
    if (!i || !we(e, s, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (r = qd(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
    e && jt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = Zd(i.layoutBox, e) : this.constraints = !1, this.elastic = eh(n), s !== this.constraints && !jt(e) && i && this.constraints && !this.hasMutatedConstraints && yt((o) => {
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
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), c = this.constraints || {}, u = yt((l) => {
      if (!we(l, n, this.currentDirection))
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
    return jn(this.visualElement, e), i.start(pi(e, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    yt((e) => this.getAxisMotionValue(e).stop());
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
    yt((n) => {
      const { drag: i } = this.getProps();
      if (!we(n, i, this.currentDirection))
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
    yt((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const c = a.get();
        s[r] = Qd({ min: c, max: c }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.constraints = !1, this.resolveConstraints(), yt((r) => {
      if (!we(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: c, max: u } = this.constraints[r];
      a.set(z(c, u, s[r]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    nh.set(this.visualElement, this);
    const e = this.visualElement.current, n = ie(e, "pointerdown", (u) => {
      const { drag: l, dragListener: d = !0 } = this.getProps(), h = u.target, f = h !== e && Nc(h);
      l && d && !f && this.start(u);
    });
    let i;
    const s = () => {
      const { dragConstraints: u } = this.getProps();
      jt(u) && u.current && (this.constraints = this.resolveRefConstraints(), i || (i = sh(e, u.current, () => this.scalePositionWithinConstraints())));
    }, { projection: o } = this.visualElement, r = o.addEventListener("measure", s);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), _.read(s);
    const a = le(window, "resize", () => this.scalePositionWithinConstraints()), c = o.addEventListener("didUpdate", (({ delta: u, hasLayoutChanged: l }) => {
      this.isDragging && l && (yt((d) => {
        const h = this.getAxisMotionValue(d);
        h && (this.originPoint[d] += u[d].translate, h.set(h.get() + u[d].translate));
      }), this.visualElement.render());
    }));
    return () => {
      a(), n(), r(), c && c(), i && i();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: o = !1, dragElastic: r = qn, dragMomentum: a = !0 } = e;
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
function Ws(t) {
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
  const i = Ji(t, Ws(n)), s = Ji(e, Ws(n));
  return () => {
    i(), s();
  };
}
function we(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function rh(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class oh extends Rt {
  constructor(e) {
    super(e), this.removeGroupControls = dt, this.removeListeners = dt, this.controls = new ih(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || dt;
  }
  update() {
    const { dragControls: e } = this.node.getProps(), { dragControls: n } = this.node.prevProps || {};
    e !== n && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const yn = (t) => (e, n) => {
  t && _.update(() => t(e, n), !1, !0);
};
class ah extends Rt {
  constructor() {
    super(...arguments), this.removePointerDownListener = dt;
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
      onSessionStart: yn(e),
      onStart: yn(n),
      onMove: yn(i),
      onEnd: (o, r) => {
        delete this.session, s && _.postRender(() => s(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = ie(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let vn = !1;
class lh extends ta {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: o } = e;
    o && (n.group && n.group.add(o), i && i.register && s && i.register(o), vn && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), ke.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: o } = this.props, { projection: r } = i;
    return r && (r.isPresent = o, e.layoutDependency !== n && r.setOptions({
      ...r.options,
      layoutDependency: n
    }), vn = !0, s || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || _.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: e, layoutAnchor: n } = this.props, { projection: i } = e;
    i && (i.options.layoutAnchor = n, i.root.didUpdate(), vi.postRender(() => {
      !i.currentAnimation && i.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: s } = e;
    vn = !0, s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), i && i.deregister && i.deregister(s));
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
  const [e, n] = Lo(), i = et(ti);
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
function Us(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, o = i[s];
  o && _.postRender(() => o(e, me(e)));
}
class uh extends Rt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Rc(e, (n, i) => (Us(this.node, i, "Start"), (s) => Us(this.node, s, "End"))));
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
    this.unmount = de(le(this.node.current, "focus", () => this.onFocus()), le(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Ks(t, e, n) {
  const { props: i } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), o = i[s];
  o && _.postRender(() => o(e, me(e)));
}
class hh extends Rt {
  mount() {
    const { current: e } = this.node;
    if (!e)
      return;
    const { globalTapTarget: n, propagate: i } = this.node.props;
    this.unmount = Oc(e, (s, o) => (Ks(this.node, o, "Start"), (r, { success: a }) => Ks(this.node, r, a ? "End" : "Cancel")), {
      useGlobalTarget: n,
      stopPropagation: i?.tap === !1
    });
  }
  unmount() {
  }
}
const Zn = /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ new WeakMap(), fh = (t) => {
  const e = Zn.get(t.target);
  e && e(t);
}, mh = (t) => {
  t.forEach(fh);
};
function ph({ root: t, ...e }) {
  const n = t || document;
  xn.has(n) || xn.set(n, {});
  const i = xn.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(mh, { root: t, ...e })), i[s];
}
function gh(t, e, n) {
  const i = ph(e);
  return Zn.set(t, n), i.observe(t), () => {
    Zn.delete(t), i.unobserve(t);
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
function Uo(t) {
  return nt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M256 112v288m144-144H112" } }] })(t);
}
function Mh(t) {
  return nt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "square", strokeMiterlimit: "10", strokeWidth: "48", d: "M112 184l144 144 144-144" } }] })(t);
}
function Ko(t) {
  return nt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" } }] })(t);
}
function Ch(t) {
  return nt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zm16-119.7L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z" } }, { tag: "path", attr: { d: "M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z" } }] })(t);
}
function Sh(t) {
  return nt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "circle", attr: { cx: "256", cy: "256", r: "64" } }, { tag: "path", attr: { d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" } }] })(t);
}
function Ph(t) {
  return nt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" } }] })(t);
}
function Dh(t) {
  return nt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" } }] })(t);
}
function Ah(t) {
  return nt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" } }] })(t);
}
function Vh(t) {
  return nt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" } }] })(t);
}
function kh(t) {
  return nt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" } }] })(t);
}
function Eh(t) {
  return nt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" } }] })(t);
}
function Rh(t) {
  return nt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" } }] })(t);
}
function Lh(t) {
  return nt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" } }] })(t);
}
function Ih(t) {
  return nt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" } }] })(t);
}
function Bh(t) {
  return nt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }] })(t);
}
const ff = ({
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
  const [h, f] = K(c), m = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  }[o], y = d?.sizes?.borderRadius || "rounded-md", p = d?.colors?.background || "bg-white dark:bg-gray-900", x = d?.colors?.text || "text-gray-700 dark:text-gray-200", w = d?.colors?.subtitle || "text-gray-500 dark:text-gray-400";
  return /* @__PURE__ */ O(
    ea,
    {
      className: xt(
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
          na,
          {
            className: "relative flex flex-col items-center",
            style: { minHeight: d?.sizes?.headerHeight },
            children: /* @__PURE__ */ O("div", { className: "flex justify-between w-full items-center", children: [
              /* @__PURE__ */ O("div", { className: "flex flex-col text-center w-full", children: [
                t && /* @__PURE__ */ v(ia, { className: `text-lg font-semibold ${x}`, children: t }),
                e && /* @__PURE__ */ v(sa, { className: `${w} text-sm`, children: e })
              ] }),
              /* @__PURE__ */ O("div", { className: "flex items-center gap-2", children: [
                u && u && /* @__PURE__ */ v(
                  Ih,
                  {
                    onClick: u,
                    className: xt(
                      "w-10 h-10 !p-2 rounded-md hover:scale-110 transition bg-gray-50 backdrop-blur-sm",
                      d?.colors?.edit || "text-[var(--ion-color-secondary-shade)]"
                    )
                  }
                ),
                l && l && /* @__PURE__ */ v(
                  Dh,
                  {
                    onClick: l,
                    className: xt(
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
                    children: /* @__PURE__ */ v(Mh, {})
                  }
                )
              ] })
            ] })
          }
        ),
        !h && i && /* @__PURE__ */ v(
          ra,
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
          er,
          {
            className: "!p-4 border-t dark:border-gray-700",
            style: { backgroundColor: d?.colors?.footer },
            children: n
          }
        )
      ]
    }
  );
}, Nh = {
  "top-left": "top-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0",
  "bottom-left": "bottom-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
}, Fh = (t) => {
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
}, mf = ({
  message: t,
  type: e = "info",
  duration: n = 3e3,
  show: i,
  onClose: s,
  className: o,
  position: r = "bottom-center"
}) => {
  const { main: a, contrast: c } = X("success"), { main: u, contrast: l } = X("danger"), { main: d, contrast: h } = X("warning"), { main: f, contrast: m } = X("info"), y = {
    success: {
      bg: a,
      color: c,
      icon: /* @__PURE__ */ v(Ph, { size: 20 })
    },
    error: { bg: u, color: l, icon: /* @__PURE__ */ v(kh, { size: 20 }) },
    warning: {
      bg: d,
      color: h,
      icon: /* @__PURE__ */ v(Eh, { size: 20 })
    },
    info: { bg: f, color: m, icon: /* @__PURE__ */ v(Ah, { size: 20 }) }
  }, { bg: p, color: x, icon: w } = y[e];
  Tt(() => {
    if (i && n) {
      const b = setTimeout(() => s?.(), n);
      return () => clearTimeout(b);
    }
  }, [i, n]);
  const g = Fh(r);
  return /* @__PURE__ */ v(ce, { children: i && /* @__PURE__ */ v("div", { className: `fixed z-9999 pointer-events-none w-[95vw] max-w-[360px] ${Nh[r]}`, children: /* @__PURE__ */ O(
    H.div,
    {
      ...g,
      transition: { duration: 0.3 },
      className: `pointer-events-auto w-full rounded-lg! p-4! flex items-center shadow-lg ${o}`,
      style: { backgroundColor: p, color: x },
      children: [
        /* @__PURE__ */ O("div", { className: "flex items-center gap-2 flex-1", children: [
          w,
          /* @__PURE__ */ v(oa, { className: "text-[14px] font-medium", children: t })
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
            children: /* @__PURE__ */ v(Bh, { size: 18 })
          }
        )
      ]
    }
  ) }) });
}, pf = ({
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
}) => /* @__PURE__ */ O(
  nr,
  {
    isOpen: t,
    onDidDismiss: e,
    className: xt("rounded-lg overflow-hidden modal-height-full", a),
    ...d,
    children: [
      (n || i || r) && /* @__PURE__ */ v(aa, { className: xt("ion-no-border", c), children: /* @__PURE__ */ v(la, { children: /* @__PURE__ */ O("div", { className: "flex flex-col items-center text-center w-full", children: [
        /* @__PURE__ */ v("div", { className: "w-full flex justify-end", children: r && /* @__PURE__ */ v(ca, { slot: "end", children: /* @__PURE__ */ v(Tn, { onClick: e, children: /* @__PURE__ */ v(Ko, { size: 20 }) }) }) }),
        /* @__PURE__ */ O("div", { className: "flex flex-col", children: [
          n && /* @__PURE__ */ v(ua, { className: "text-lg font-semibold", children: n }),
          i && /* @__PURE__ */ v("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: i })
        ] })
      ] }) }) }),
      /* @__PURE__ */ v(
        da,
        {
          style: {
            "--padding-start": "1rem",
            "--padding-end": "1rem",
            "--padding-top": "1rem",
            "--padding-bottom": "1rem"
          },
          className: xt("!p-4 text-gray-700 dark:text-gray-200", u),
          children: s
        }
      ),
      o && /* @__PURE__ */ v(er, { className: xt("border-t border-gray-200 dark:border-gray-700 !p-4", l), children: o })
    ]
  }
), Oh = {
  tel: (t) => {
    const e = t.replace(/\D/g, "").slice(0, 11);
    if (!e) return { formatted: "", raw: "" };
    let n = `(${e.substring(0, 2)}) `;
    return n += e.length > 6 ? `${e.substring(2, 7)}-${e.substring(7)}` : e.substring(2), { formatted: n, raw: e };
  },
  cep: (t) => {
    const e = t.replace(/\D/g, "").slice(0, 8);
    return {
      formatted: e.length > 5 ? `${e.substring(0, 5)}-${e.substring(5)}` : e,
      raw: e
    };
  },
  currency: (t) => {
    const e = t.replace(/\D/g, "");
    if (!e) return { formatted: "", raw: "" };
    const n = parseFloat(e) / 100;
    return isNaN(n) ? { formatted: "", raw: "" } : {
      formatted: Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(n),
      raw: n.toFixed(2)
    };
  }
};
function $h(t, e) {
  if (t)
    return typeof t == "function" ? t : e?.[t] ?? Oh[t];
}
function jh(t, e, n, i) {
  const s = ht(
    () => $h(t, i),
    [t, i]
  ), o = Wt(
    (a) => {
      if (!s) {
        e?.(a);
        return;
      }
      const { formatted: c, raw: u } = s(a);
      e?.(c), n?.(u);
    },
    [s, e, n]
  ), r = ht(() => {
    if (t === "tel" || t === "cep" || t === "currency")
      return "numeric";
  }, [t]);
  return { handleChange: o, inputMode: r };
}
function Yh() {
  const [t, e] = K(!1), n = Wt(() => e((s) => !s), []);
  return { show: t, toggle: n, inputType: t ? "text" : "password" };
}
function bn(t) {
  return t == null ? "" : String(t);
}
const gf = ({
  value: t = "",
  label: e,
  placeholder: n,
  disabled: i,
  type: s = "text",
  fill: o = "outline",
  shape: r = "round",
  labelPlacement: a = "stacked",
  className: c = "",
  style: u,
  error: l,
  maxLength: d,
  color: h = "neutral",
  mask: f,
  onChange: m,
  onRawChange: y,
  onBlur: p,
  onFocus: x,
  radius: w = "md",
  ...g
}) => {
  const [b, P] = K(!1), { main: V } = X(h), { main: k } = X("danger"), { show: A, toggle: E, inputType: T } = Yh(), { handleChange: D, inputMode: F } = jh(f, m, y), j = ht(() => bn(t), [t]), R = s === "password", M = l ? k : b || !!j ? V : "var(--ion-color-medium)", B = Wt(
    (N) => {
      D(bn(N.target.value));
    },
    [D]
  ), S = Wt(
    (N) => {
      P(!1), p?.(bn(N.target.value));
    },
    [p]
  ), L = {
    none: "0px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px"
  };
  return /* @__PURE__ */ O("div", { className: `relative flex flex-col h-[72px] pt-2 ${c}`, children: [
    /* @__PURE__ */ v(
      ir,
      {
        ...g,
        value: j,
        label: e,
        placeholder: n,
        disabled: i,
        type: R ? T : s,
        fill: o,
        shape: r,
        labelPlacement: a,
        maxlength: d,
        inputmode: F,
        "aria-invalid": !!l,
        style: {
          "--border-color": M,
          "--highlight-color-focused": V,
          "--border-radius": L[w || "md"],
          color: "var(--ion-color-dark)",
          ...u
        },
        onIonInput: B,
        onIonFocus: () => {
          P(!0), x?.();
        },
        onIonBlur: S
      }
    ),
    R && /* @__PURE__ */ v(
      "button",
      {
        type: "button",
        "aria-label": A ? "Ocultar senha" : "Mostrar senha",
        onClick: E,
        className: "absolute top-4 right-4 z-10 p-1",
        children: A ? /* @__PURE__ */ v(Sh, { className: "text-2xl" }) : /* @__PURE__ */ v(Ch, { className: "text-2xl" })
      }
    ),
    l && /* @__PURE__ */ v(
      se,
      {
        role: "alert",
        className: "text-[12px] pl-6! text-(--ion-color-danger)",
        children: l
      }
    )
  ] });
};
function zh() {
  const [t, e] = K("action-sheet");
  return Tt(() => {
    const n = window.matchMedia("(min-width: 768px)"), i = (s) => {
      e(s.matches ? "popover" : "action-sheet");
    };
    return i(n), n.addEventListener("change", i), () => n.removeEventListener("change", i);
  }, []), t;
}
function yf({
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
  const p = it(null), x = zh(), { main: w } = X(d), g = (P) => {
    const V = P.detail.value, k = n.find((A) => s(A) === V);
    k && o(k);
  }, b = {
    ...h,
    "--border-color": a ? Ma.danger : w,
    "--icon-color": w,
    "--color": "var(--ion-color-dark)",
    "--placeholder-color": "var(--ion-color-medium)"
  };
  return /* @__PURE__ */ O("div", { className: "relative flex flex-col", style: { minHeight: 72 }, children: [
    t && /* @__PURE__ */ v("label", { className: "text-xs font-medium !pl-6", children: t }),
    /* @__PURE__ */ v(
      sr,
      {
        ref: p,
        interface: x,
        placeholder: r,
        value: e,
        disabled: u || l,
        onIonChange: g,
        onClick: (P) => {
          P.persist?.(), y.interfaceOptions = {
            ...y.interfaceOptions,
            event: P.nativeEvent
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
        children: n.map((P, V) => /* @__PURE__ */ v(Mn, { value: s(P), children: i(P) }, V))
      }
    ),
    a && c && /* @__PURE__ */ v(se, { className: "text-[12px] !pl-6 text-[var(--ion-color-danger)]", children: c })
  ] });
}
const vf = ({
  isOpen: t = !1,
  message: e = "Carregando...",
  color: n = "primary",
  type: i = "circular",
  withBg: s = !0,
  withText: o = !0
}) => {
  const { main: r, contrast: a } = X(n);
  return t ? i === "linear" ? /* @__PURE__ */ v(ce, { children: /* @__PURE__ */ O(
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
  ) }) : /* @__PURE__ */ v(ce, { children: /* @__PURE__ */ v(
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
      children: /* @__PURE__ */ O(
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
            i === "circular" ? /* @__PURE__ */ v(ue, { name: "crescent", color: "light" }) : /* @__PURE__ */ v("div", { style: { display: "flex", gap: "0.5rem" }, children: [...Array(3)].map((c, u) => /* @__PURE__ */ v(
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
}, xf = ({
  content: t,
  children: e,
  color: n = "light",
  placement: i = "top",
  trigger: s = "hover",
  stopPropagation: o = !1,
  tooltipStyle: r = {}
}) => {
  const [a, c] = K(!1), { main: u, contrast: l } = X(n), d = {
    top: { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8 },
    bottom: { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8 },
    left: { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: 8 },
    right: { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: 8 }
  };
  return /* @__PURE__ */ O(
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
        /* @__PURE__ */ v(ce, { children: a && /* @__PURE__ */ v(
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
}, bf = ({
  label: t,
  checked: e,
  disabled: n = !1,
  variant: i = "filled",
  onChange: s,
  color: o = "primary"
}) => {
  const { main: r, contrast: a } = X(o), c = {
    borderColor: e ? r : "#d1d5db",
    backgroundColor: i === "filled" && e ? r : "#ffffff",
    color: e && i === "filled" ? a : e ? r : "inherit"
  };
  return /* @__PURE__ */ O(
    "div",
    {
      className: xt(
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
}, wf = ({
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
  const { main: h } = X(r), { main: f } = X("danger"), [m, y] = K(!1), [p, x] = K(!1);
  Tt(() => x(!!e), [e]);
  const w = s ? f : m || p ? h : "var(--ion-color-medium)", g = l ? l - e.length : void 0, b = g !== void 0 && g < 0;
  return /* @__PURE__ */ O("div", { className: "relative flex flex-col", style: { minHeight: 72 }, children: [
    t && /* @__PURE__ */ v("label", { className: "text-xs font-medium !pl-6", children: t }),
    /* @__PURE__ */ v(
      ha,
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
        className: xt(
          "text-sm resize-none focus:outline-none",
          o && "opacity-60 cursor-not-allowed"
        ),
        onIonFocus: () => y(!0),
        onIonBlur: () => y(!1),
        onIonInput: (P) => a(P.detail.value ?? ""),
        ...d
      }
    ),
    /* @__PURE__ */ O("div", { className: "flex justify-between mt-1", children: [
      /* @__PURE__ */ v(se, { className: "text-[12px] !pl-6 text-[var(--ion-color-danger)]", children: s && /* @__PURE__ */ v("span", { children: s }) }),
      l && /* @__PURE__ */ O(
        se,
        {
          className: xt(
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
}, Tf = ({
  label: t,
  checked: e,
  disabled: n = !1,
  type: i = "checkbox",
  onChange: s,
  color: o = "primary",
  labelPlacement: r = "start",
  styleDiv: a
}) => {
  const { main: c, contrast: u } = X(o);
  if (i === "switch")
    return /* @__PURE__ */ v("div", { className: `w-auto ${a}`, children: /* @__PURE__ */ v(
      fa,
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
      ma,
      {
        value: e ? "selected" : "unselected",
        onIonChange: (l) => s(l.detail.value === "selected"),
        className: "flex items-center gap-2",
        children: /* @__PURE__ */ v(
          pa,
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
      ga,
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
}, Mf = ({
  tooltip: t,
  icon: e = Uo,
  onClick: n,
  recording: i,
  loading: s = !1,
  showCancel: o = !1,
  onCancel: r,
  cancelIcon: a = Ko,
  disabled: c = !1,
  className: u,
  color: l = "primary"
}) => {
  const [d, h] = K(!0), [f, m] = K(!0), { main: y, contrast: p } = X(l);
  return Tt(() => {
    const x = setTimeout(() => {
      h(!1), setTimeout(() => {
        m(!1);
      }, 800);
    }, 3e3);
    return () => clearTimeout(x);
  }, []), /* @__PURE__ */ v("div", { style: { position: "relative" }, children: /* @__PURE__ */ v(ce, { mode: "wait", children: /* @__PURE__ */ O(
    H.div,
    {
      className: `fixed bottom-24 right-2 z-[1000] flex-center ${u} `,
      animate: d ? { width: 250, height: 55 } : { width: 55, height: 55 },
      transition: { duration: 0.8, ease: "easeInOut" },
      children: [
        /* @__PURE__ */ O(rr, { vertical: "bottom", horizontal: "end", slot: "fixed", children: [
          /* @__PURE__ */ v(
            Cn,
            {
              onClick: n,
              disabled: c || s,
              style: { "--box-shadow": !d && "none", "--background": y, "--color": p },
              children: s ? /* @__PURE__ */ v(ue, { name: "crescent", className: "text-[var(--ion-color-text-fixed)]" }) : wn.createElement(e, { className: "text-[26px]" })
            }
          ),
          o && r && /* @__PURE__ */ v(
            H.div,
            {
              className: "absolute bottom-[70px] right-[12px] pointer-events-none",
              animate: i ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: 10, pointerEvents: "none" },
              transition: { duration: 0.3 },
              children: /* @__PURE__ */ v(
                Cn,
                {
                  color: "danger",
                  className: "w-[35px] h-[35px]",
                  onClick: r,
                  children: wn.createElement(a, { className: "text-[22px]" })
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
function Cf({
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
  const [u, l] = K(s ?? ""), [d, h] = K(), f = it(i);
  return f.current = i, Tt(() => {
    if (!u) {
      f.current(t);
      return;
    }
    const m = u.toLowerCase(), y = t.filter((p) => d ? String(p[d] ?? "").toLowerCase().includes(m) : Object.values(p).some(
      (x) => String(x).toLowerCase().includes(m)
    ));
    f.current(y);
  }, [u, d, JSON.stringify(t)]), /* @__PURE__ */ O(
    "div",
    {
      className: `flex items-center gap-3 bg-gray-100 rounded-lg shadow-sm !p-2 ${o}`,
      style: c,
      children: [
        /* @__PURE__ */ v(Ca, { className: "text-gray-500" }),
        /* @__PURE__ */ v(
          ir,
          {
            value: u,
            placeholder: n,
            onIonInput: (m) => l(m.detail.value),
            clearInput: !0,
            className: `flex-1 ${r}`
          }
        ),
        e.length > 0 && /* @__PURE__ */ O("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ v(Sa, { className: "text-gray-500", size: 20 }),
          /* @__PURE__ */ O(
            sr,
            {
              value: d,
              placeholder: "Coluna",
              onIonChange: (m) => h(m.detail.value),
              interface: "popover",
              className: a,
              children: [
                /* @__PURE__ */ v(Mn, { value: void 0, children: "Todas" }),
                e.map((m) => /* @__PURE__ */ v(Mn, { value: m.value, children: m.label }, m.value))
              ]
            }
          )
        ] })
      ]
    }
  );
}
const _h = ({
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
  const [y, p] = K(e), { main: x, contrast: w } = X(n), g = m?.stepper, b = g?.circle?.background ?? x, P = g?.circle?.text ?? w, V = g?.line ?? x, k = async () => {
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
  return /* @__PURE__ */ O("div", { className: `flex flex-col gap-4 ${i ?? ""}`, style: o, children: [
    /* @__PURE__ */ v("div", { className: "flex items-center justify-between w-full relative", children: t.map((E, T) => {
      const D = T === y, F = T < y;
      return /* @__PURE__ */ O(
        "div",
        {
          className: "flex-1 relative flex flex-col items-center",
          children: [
            /* @__PURE__ */ O("div", { className: "relative flex items-center justify-center w-full", children: [
              T < t.length - 1 && /* @__PURE__ */ v(
                H.div,
                {
                  className: "absolute top-1/2 left-1/2 transform -translate-y-1/2",
                  style: {
                    width: "100%",
                    height: "2px",
                    backgroundColor: V,
                    zIndex: 0,
                    originX: 0
                  },
                  initial: { scaleX: 0 },
                  animate: { scaleX: F ? 1 : 0 },
                  transition: { duration: 0.5, ease: "easeInOut" }
                }
              ),
              /* @__PURE__ */ v(
                H.div,
                {
                  className: "w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 cursor-pointer flex-shrink-0",
                  style: {
                    backgroundColor: D || F ? b : "#ffffff",
                    color: D || F ? P : "#6b7280",
                    borderColor: D || F ? b : "#d1d5db"
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
    /* @__PURE__ */ O("div", { className: "flex justify-between w-full mt-2", children: [
      a && /* @__PURE__ */ v(
        Ne,
        {
          disabled: d ? d(y) : y === 0,
          onClick: A,
          iconStart: /* @__PURE__ */ v(Rh, {}),
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
        Ne,
        {
          disabled: l ? l(y) : y === t.length - 1,
          onClick: k,
          iconEnd: /* @__PURE__ */ v(Lh, {}),
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
}, Hh = ({
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
  const [y, p] = K(e), { main: x, contrast: w } = X(n), g = m?.stepper, b = g?.circle?.background ?? x, P = g?.circle?.text ?? w, V = g?.line ?? x, k = g?.titleColor ?? "#111827", A = async () => {
    if (console.log("canProceed"), h) {
      const D = await h(y);
      if (console.log("canProceed", D), D === !1) return;
    }
    const T = y + 1;
    T < t.length && p(T);
  }, E = async () => {
    if (f && await f(y) === !1)
      return;
    const T = y - 1;
    T >= 0 && p(T);
  };
  return /* @__PURE__ */ v("div", { className: `flex flex-col gap-4 ${i ?? ""}`, style: o, children: t.map((T, D) => {
    const F = D === y, j = D < y;
    return /* @__PURE__ */ O("div", { className: "relative flex items-start gap-4", children: [
      /* @__PURE__ */ v("div", { className: "flex flex-col items-center relative", children: /* @__PURE__ */ v(
        H.div,
        {
          className: "w-10 h-10 rounded-full border-2 flex items-center justify-center cursor-pointer z-10",
          onClick: () => p(D),
          style: {
            backgroundColor: F || j ? b : "#ffffff",
            color: F || j ? P : "#6b7280",
            borderColor: F || j ? b : "#d1d5db"
          },
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.95 },
          children: T.icon ?? D + 1
        }
      ) }),
      D !== t.length - 1 && /* @__PURE__ */ v(
        H.div,
        {
          style: {
            width: 2,
            backgroundColor: F || j ? V : "#d1d5db",
            position: "absolute",
            height: "100%",
            left: 18,
            top: 16
          }
        }
      ),
      /* @__PURE__ */ O("div", { className: "flex-1", children: [
        /* @__PURE__ */ v(
          "div",
          {
            className: "font-semibold text-base",
            style: { color: k },
            children: T.title
          }
        ),
        /* @__PURE__ */ O(
          H.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: {
              height: F ? "auto" : 0,
              opacity: F ? 1 : 0
            },
            transition: { duration: 0.4, ease: "easeInOut" },
            className: "overflow-hidden mt-1",
            children: [
              /* @__PURE__ */ v("div", { className: `mb-2 ${s}`, children: T.content }),
              /* @__PURE__ */ O("div", { className: "flex w-full !mt-2 !pb-2", children: [
                r && /* @__PURE__ */ v(
                  Ne,
                  {
                    disabled: l?.(y),
                    onClick: A,
                    children: typeof c == "function" ? c(y, t.length) : c,
                    color: n,
                    className: "!text-[12px] !mr-2",
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
                  Ne,
                  {
                    disabled: d ? d(y) : y === 0,
                    onClick: E,
                    children: typeof u == "function" ? u(y, t.length) : u,
                    color: n,
                    variant: g?.button?.prev?.variant ?? "clear",
                    className: "!text-[12px]",
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
    ] }, D);
  }) });
}, Sf = ({
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
  const [w, g] = K(n);
  if (e === "tabs") {
    const b = x?.tabs;
    return /* @__PURE__ */ O("div", { style: r, children: [
      /* @__PURE__ */ v(
        ya,
        {
          scrollable: b?.segment?.scrollable,
          value: w.toString(),
          onIonChange: (P) => {
            const V = P.detail.value;
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
          children: t.map((P, V) => {
            const k = V === w;
            return /* @__PURE__ */ v(
              va,
              {
                value: V.toString(),
                style: {
                  background: k ? b?.button?.activeBackground : b?.button?.background,
                  color: k ? b?.button?.activeText : b?.button?.text,
                  border: b?.button?.border,
                  borderRadius: b?.button?.rounded !== !1 ? "9999px" : void 0
                },
                children: /* @__PURE__ */ v(Be, { children: P.title })
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
      xa,
      {
        value: w.toString(),
        onIonChange: (P) => {
          g(parseInt(P.detail.value ?? "-1", 10));
        },
        className: `${o ?? ""} ${b?.indicator?.hide ? "cb-acc-no-indicator" : ""}`,
        style: r,
        children: t.map((P, V) => /* @__PURE__ */ O(
          ba,
          {
            value: V.toString(),
            children: [
              /* @__PURE__ */ v(
                Sn,
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
                  children: /* @__PURE__ */ v(Be, { children: P.title })
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
                  children: P.content
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
    return i === "horizontal" ? /* @__PURE__ */ v(_h, { ...b }) : /* @__PURE__ */ v(Hh, { ...b });
  }
  return null;
};
function Ai(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ee = { exports: {} }, Wh = Ee.exports, Gs;
function Go() {
  return Gs || (Gs = 1, (function(t, e) {
    (function(n, i) {
      t.exports = i();
    })(Wh, (function() {
      var n = 1e3, i = 6e4, s = 36e5, o = "millisecond", r = "second", a = "minute", c = "hour", u = "day", l = "week", d = "month", h = "quarter", f = "year", m = "date", y = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(R) {
        var C = ["th", "st", "nd", "rd"], M = R % 100;
        return "[" + R + (C[(M - 20) % 10] || C[M] || C[0]) + "]";
      } }, g = function(R, C, M) {
        var B = String(R);
        return !B || B.length >= C ? R : "" + Array(C + 1 - B.length).join(M) + R;
      }, b = { s: g, z: function(R) {
        var C = -R.utcOffset(), M = Math.abs(C), B = Math.floor(M / 60), S = M % 60;
        return (C <= 0 ? "+" : "-") + g(B, 2, "0") + ":" + g(S, 2, "0");
      }, m: function R(C, M) {
        if (C.date() < M.date()) return -R(M, C);
        var B = 12 * (M.year() - C.year()) + (M.month() - C.month()), S = C.clone().add(B, d), L = M - S < 0, N = C.clone().add(B + (L ? -1 : 1), d);
        return +(-(B + (M - S) / (L ? S - N : N - S)) || 0);
      }, a: function(R) {
        return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
      }, p: function(R) {
        return { M: d, y: f, w: l, d: u, D: m, h: c, m: a, s: r, ms: o, Q: h }[R] || String(R || "").toLowerCase().replace(/s$/, "");
      }, u: function(R) {
        return R === void 0;
      } }, P = "en", V = {};
      V[P] = w;
      var k = "$isDayjsObject", A = function(R) {
        return R instanceof F || !(!R || !R[k]);
      }, E = function R(C, M, B) {
        var S;
        if (!C) return P;
        if (typeof C == "string") {
          var L = C.toLowerCase();
          V[L] && (S = L), M && (V[L] = M, S = L);
          var N = C.split("-");
          if (!S && N.length > 1) return R(N[0]);
        } else {
          var $ = C.name;
          V[$] = C, S = $;
        }
        return !B && S && (P = S), S || !B && P;
      }, T = function(R, C) {
        if (A(R)) return R.clone();
        var M = typeof C == "object" ? C : {};
        return M.date = R, M.args = arguments, new F(M);
      }, D = b;
      D.l = E, D.i = A, D.w = function(R, C) {
        return T(R, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
      };
      var F = (function() {
        function R(M) {
          this.$L = E(M.locale, null, !0), this.parse(M), this.$x = this.$x || M.x || {}, this[k] = !0;
        }
        var C = R.prototype;
        return C.parse = function(M) {
          this.$d = (function(B) {
            var S = B.date, L = B.utc;
            if (S === null) return /* @__PURE__ */ new Date(NaN);
            if (D.u(S)) return /* @__PURE__ */ new Date();
            if (S instanceof Date) return new Date(S);
            if (typeof S == "string" && !/Z$/i.test(S)) {
              var N = S.match(p);
              if (N) {
                var $ = N[2] - 1 || 0, Y = (N[7] || "0").substring(0, 3);
                return L ? new Date(Date.UTC(N[1], $, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, Y)) : new Date(N[1], $, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, Y);
              }
            }
            return new Date(S);
          })(M), this.init();
        }, C.init = function() {
          var M = this.$d;
          this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
        }, C.$utils = function() {
          return D;
        }, C.isValid = function() {
          return this.$d.toString() !== y;
        }, C.isSame = function(M, B) {
          var S = T(M);
          return this.startOf(B) <= S && S <= this.endOf(B);
        }, C.isAfter = function(M, B) {
          return T(M) < this.startOf(B);
        }, C.isBefore = function(M, B) {
          return this.endOf(B) < T(M);
        }, C.$g = function(M, B, S) {
          return D.u(M) ? this[B] : this.set(S, M);
        }, C.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, C.valueOf = function() {
          return this.$d.getTime();
        }, C.startOf = function(M, B) {
          var S = this, L = !!D.u(B) || B, N = D.p(M), $ = function(gt, J) {
            var ct = D.w(S.$u ? Date.UTC(S.$y, J, gt) : new Date(S.$y, J, gt), S);
            return L ? ct : ct.endOf(u);
          }, Y = function(gt, J) {
            return D.w(S.toDate()[gt].apply(S.toDate("s"), (L ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(J)), S);
          }, W = this.$W, Z = this.$M, ot = this.$D, Dt = "set" + (this.$u ? "UTC" : "");
          switch (N) {
            case f:
              return L ? $(1, 0) : $(31, 11);
            case d:
              return L ? $(1, Z) : $(0, Z + 1);
            case l:
              var Mt = this.$locale().weekStart || 0, Lt = (W < Mt ? W + 7 : W) - Mt;
              return $(L ? ot - Lt : ot + (6 - Lt), Z);
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
        }, C.endOf = function(M) {
          return this.startOf(M, !1);
        }, C.$set = function(M, B) {
          var S, L = D.p(M), N = "set" + (this.$u ? "UTC" : ""), $ = (S = {}, S[u] = N + "Date", S[m] = N + "Date", S[d] = N + "Month", S[f] = N + "FullYear", S[c] = N + "Hours", S[a] = N + "Minutes", S[r] = N + "Seconds", S[o] = N + "Milliseconds", S)[L], Y = L === u ? this.$D + (B - this.$W) : B;
          if (L === d || L === f) {
            var W = this.clone().set(m, 1);
            W.$d[$](Y), W.init(), this.$d = W.set(m, Math.min(this.$D, W.daysInMonth())).$d;
          } else $ && this.$d[$](Y);
          return this.init(), this;
        }, C.set = function(M, B) {
          return this.clone().$set(M, B);
        }, C.get = function(M) {
          return this[D.p(M)]();
        }, C.add = function(M, B) {
          var S, L = this;
          M = Number(M);
          var N = D.p(B), $ = function(Z) {
            var ot = T(L);
            return D.w(ot.date(ot.date() + Math.round(Z * M)), L);
          };
          if (N === d) return this.set(d, this.$M + M);
          if (N === f) return this.set(f, this.$y + M);
          if (N === u) return $(1);
          if (N === l) return $(7);
          var Y = (S = {}, S[a] = i, S[c] = s, S[r] = n, S)[N] || 1, W = this.$d.getTime() + M * Y;
          return D.w(W, this);
        }, C.subtract = function(M, B) {
          return this.add(-1 * M, B);
        }, C.format = function(M) {
          var B = this, S = this.$locale();
          if (!this.isValid()) return S.invalidDate || y;
          var L = M || "YYYY-MM-DDTHH:mm:ssZ", N = D.z(this), $ = this.$H, Y = this.$m, W = this.$M, Z = S.weekdays, ot = S.months, Dt = S.meridiem, Mt = function(J, ct, Ct, At) {
            return J && (J[ct] || J(B, L)) || Ct[ct].slice(0, At);
          }, Lt = function(J) {
            return D.s($ % 12 || 12, J, "0");
          }, gt = Dt || function(J, ct, Ct) {
            var At = J < 12 ? "AM" : "PM";
            return Ct ? At.toLowerCase() : At;
          };
          return L.replace(x, (function(J, ct) {
            return ct || (function(Ct) {
              switch (Ct) {
                case "YY":
                  return String(B.$y).slice(-2);
                case "YYYY":
                  return D.s(B.$y, 4, "0");
                case "M":
                  return W + 1;
                case "MM":
                  return D.s(W + 1, 2, "0");
                case "MMM":
                  return Mt(S.monthsShort, W, ot, 3);
                case "MMMM":
                  return Mt(ot, W);
                case "D":
                  return B.$D;
                case "DD":
                  return D.s(B.$D, 2, "0");
                case "d":
                  return String(B.$W);
                case "dd":
                  return Mt(S.weekdaysMin, B.$W, Z, 2);
                case "ddd":
                  return Mt(S.weekdaysShort, B.$W, Z, 3);
                case "dddd":
                  return Z[B.$W];
                case "H":
                  return String($);
                case "HH":
                  return D.s($, 2, "0");
                case "h":
                  return Lt(1);
                case "hh":
                  return Lt(2);
                case "a":
                  return gt($, Y, !0);
                case "A":
                  return gt($, Y, !1);
                case "m":
                  return String(Y);
                case "mm":
                  return D.s(Y, 2, "0");
                case "s":
                  return String(B.$s);
                case "ss":
                  return D.s(B.$s, 2, "0");
                case "SSS":
                  return D.s(B.$ms, 3, "0");
                case "Z":
                  return N;
              }
              return null;
            })(J) || N.replace(":", "");
          }));
        }, C.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, C.diff = function(M, B, S) {
          var L, N = this, $ = D.p(B), Y = T(M), W = (Y.utcOffset() - this.utcOffset()) * i, Z = this - Y, ot = function() {
            return D.m(N, Y);
          };
          switch ($) {
            case f:
              L = ot() / 12;
              break;
            case d:
              L = ot();
              break;
            case h:
              L = ot() / 3;
              break;
            case l:
              L = (Z - W) / 6048e5;
              break;
            case u:
              L = (Z - W) / 864e5;
              break;
            case c:
              L = Z / s;
              break;
            case a:
              L = Z / i;
              break;
            case r:
              L = Z / n;
              break;
            default:
              L = Z;
          }
          return S ? L : D.a(L);
        }, C.daysInMonth = function() {
          return this.endOf(d).$D;
        }, C.$locale = function() {
          return V[this.$L];
        }, C.locale = function(M, B) {
          if (!M) return this.$L;
          var S = this.clone(), L = E(M, B, !0);
          return L && (S.$L = L), S;
        }, C.clone = function() {
          return D.w(this.$d, this);
        }, C.toDate = function() {
          return new Date(this.valueOf());
        }, C.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, C.toISOString = function() {
          return this.$d.toISOString();
        }, C.toString = function() {
          return this.$d.toUTCString();
        }, R;
      })(), j = F.prototype;
      return T.prototype = j, [["$ms", o], ["$s", r], ["$m", a], ["$H", c], ["$W", u], ["$M", d], ["$y", f], ["$D", m]].forEach((function(R) {
        j[R[1]] = function(C) {
          return this.$g(C, R[0], R[1]);
        };
      })), T.extend = function(R, C) {
        return R.$i || (R(C, F, T), R.$i = !0), T;
      }, T.locale = E, T.isDayjs = A, T.unix = function(R) {
        return T(1e3 * R);
      }, T.en = V[P], T.Ls = V, T.p = {}, T;
    }));
  })(Ee)), Ee.exports;
}
var Uh = Go();
const at = /* @__PURE__ */ Ai(Uh);
var Re = { exports: {} }, Kh = Re.exports, Xs;
function Gh() {
  return Xs || (Xs = 1, (function(t, e) {
    (function(n, i) {
      t.exports = i(Go());
    })(Kh, (function(n) {
      function i(r) {
        return r && typeof r == "object" && "default" in r ? r : { default: r };
      }
      var s = i(n), o = { name: "pt-br", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(r) {
        return r + "º";
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
      return s.default.locale(o, null, !0), o;
    }));
  })(Re)), Re.exports;
}
Gh();
function Xh(t) {
  return nt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "rect", attr: { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" } }, { tag: "line", attr: { x1: "16", x2: "16", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "8", x2: "8", y1: "2", y2: "6" } }, { tag: "line", attr: { x1: "3", x2: "21", y1: "10", y2: "10" } }] })(t);
}
var Le = { exports: {} }, qh = Le.exports, qs;
function Zh() {
  return qs || (qs = 1, (function(t, e) {
    (function(n, i) {
      t.exports = i();
    })(qh, (function() {
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
  })(Le)), Le.exports;
}
var Jh = Zh();
const Qh = /* @__PURE__ */ Ai(Jh);
var Ie = { exports: {} }, tf = Ie.exports, Zs;
function ef() {
  return Zs || (Zs = 1, (function(t, e) {
    (function(n, i) {
      t.exports = i();
    })(tf, (function() {
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
        for (var g = (p = x.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(T, D, F) {
          var j = F && F.toUpperCase();
          return D || w[F] || n[F] || w[j].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(R, C, M) {
            return C || M.slice(1);
          }));
        }))).match(i), b = g.length, P = 0; P < b; P += 1) {
          var V = g[P], k = m[V], A = k && k[0], E = k && k[1];
          g[P] = E ? { regex: A, parser: E } : V.replace(/^\[|\]$/g, "");
        }
        return function(T) {
          for (var D = {}, F = 0, j = 0; F < b; F += 1) {
            var R = g[F];
            if (typeof R == "string") j += R.length;
            else {
              var C = R.regex, M = R.parser, B = T.slice(j), S = C.exec(B)[0];
              M.call(D, S), T = T.replace(S, "");
            }
          }
          return (function(L) {
            var N = L.afternoon;
            if (N !== void 0) {
              var $ = L.hours;
              N ? $ < 12 && (L.hours += 12) : $ === 12 && (L.hours = 0), delete L.afternoon;
            }
          })(D), D;
        };
      }
      return function(p, x, w) {
        w.p.customParseFormat = !0, p && p.parseTwoDigitYear && (u = p.parseTwoDigitYear);
        var g = x.prototype, b = g.parse;
        g.parse = function(P) {
          var V = P.date, k = P.utc, A = P.args;
          this.$u = k;
          var E = A[1];
          if (typeof E == "string") {
            var T = A[2] === !0, D = A[3] === !0, F = T || D, j = A[2];
            D && (j = A[2]), c = this.$locale(), !T && j && (c = w.Ls[j]), this.$d = (function(B, S, L, N) {
              try {
                if (["x", "X"].indexOf(S) > -1) return new Date((S === "X" ? 1e3 : 1) * B);
                var $ = y(S)(B), Y = $.year, W = $.month, Z = $.day, ot = $.hours, Dt = $.minutes, Mt = $.seconds, Lt = $.milliseconds, gt = $.zone, J = $.week, ct = /* @__PURE__ */ new Date(), Ct = Z || (Y || W ? 1 : ct.getDate()), At = Y || ct.getFullYear(), pe = 0;
                Y && !W || (pe = W > 0 ? W - 1 : ct.getMonth());
                var ge, Qe = ot || 0, tn = Dt || 0, en = Mt || 0, nn = Lt || 0;
                return gt ? new Date(Date.UTC(At, pe, Ct, Qe, tn, en, nn + 60 * gt.offset * 1e3)) : L ? new Date(Date.UTC(At, pe, Ct, Qe, tn, en, nn)) : (ge = new Date(At, pe, Ct, Qe, tn, en, nn), J && (ge = N(ge).week(J).toDate()), ge);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(V, E, k, w), this.init(), j && j !== !0 && (this.$L = this.locale(j).$L), F && V != this.format(E) && (this.$d = /* @__PURE__ */ new Date("")), c = {};
          } else if (E instanceof Array) for (var R = E.length, C = 1; C <= R; C += 1) {
            A[1] = E[C - 1];
            var M = w.apply(this, A);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            C === R && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else b.call(this, P);
        };
      };
    }));
  })(Ie)), Ie.exports;
}
var nf = ef();
const sf = /* @__PURE__ */ Ai(nf);
at.locale("pt-br");
at.extend(sf);
at.extend(Qh);
const Js = (t) => t ? "toDate" in t ? t.toDate() : t : null, Pf = ({
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
  const { main: y, contrast: p } = X(f), [x, w] = K(!1), [g, b] = K(
    t ? at(Js(t)).format("YYYY-MM-DDTHH:mm") : ""
  );
  Tt(() => {
    b(
      t ? at(Js(t)).format("YYYY-MM-DDTHH:mm") : ""
    );
  }, [t]);
  const P = () => {
    if (!g) return "";
    const T = at(g);
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
    g && (e(at(g).toDate()), w(!1));
  }, k = (T, D) => typeof D == "number" ? at().add(D, "years").format("YYYY-MM-DD") : D ?? T.format("YYYY-MM-DD"), A = () => {
    s || (b(g || at().format("YYYY-MM-DDTHH:mm")), w(!0));
  }, E = h ? "99999px" : "6px";
  return /* @__PURE__ */ O("div", { className: "relative", children: [
    /* @__PURE__ */ O(
      "div",
      {
        onClick: () => {
          b(g || at().format("YYYY-MM-DDTHH:mm")), w(!0);
        },
        className: `relative flex flex-col ${l}`,
        children: [
          n && /* @__PURE__ */ v("label", { className: "text-xs font-medium !pl-6", children: n }),
          /* @__PURE__ */ O("div", { className: "relative flex items-center w-full", onClick: A, children: [
            /* @__PURE__ */ v(
              "input",
              {
                type: "text",
                readOnly: !0,
                value: g ? P() : "",
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
            d && /* @__PURE__ */ v(Xh, { className: "absolute right-8 text-[24px] text-gray-500 hover:text-blue-600 transition-colors cursor-pointer" })
          ] }),
          o && /* @__PURE__ */ O(se, { className: "text-[12px] !pl-6 text-[var(--ion-color-danger)]", children: [
            " ",
            o,
            " "
          ] })
        ]
      }
    ),
    m === "modal" && /* @__PURE__ */ v(
      nr,
      {
        isOpen: x,
        onDidDismiss: () => w(!1),
        className: "custom-calendar-modal",
        children: /* @__PURE__ */ O("div", { className: "!p-4 bg-white !rounded-lg shadow-lg", children: [
          /* @__PURE__ */ v(
            Vi,
            {
              locale: "pt-BR",
              value: g,
              min: k(
                at().subtract(10, "years").startOf("year"),
                a
              ),
              max: k(at().add(50, "years").endOf("year"), c),
              presentation: i === "month-year" || i === "MMMM/YYYY" ? "month-year" : i === "datetime" ? "date-time" : "date",
              onIonChange: (T) => b(T.detail.value),
              showDefaultButtons: !1
            }
          ),
          /* @__PURE__ */ O("div", { className: "flex justify-end mt-4 gap-2", children: [
            /* @__PURE__ */ v(Tn, { color: "medium", onClick: () => w(!1), children: "Cancelar" }),
            /* @__PURE__ */ v(Tn, { onClick: V, children: "Confirmar" })
          ] })
        ] })
      }
    ),
    m === "dropdown" && x && /* @__PURE__ */ v("div", { className: "absolute z-50 mt-2 bg-white !rounded-lg shadow-lg !p-3", children: /* @__PURE__ */ v(
      Vi,
      {
        locale: "pt-BR",
        value: g,
        min: k(
          at().subtract(10, "years").startOf("year"),
          a
        ),
        max: k(at().add(50, "years").endOf("year"), c),
        presentation: i === "month-year" || i === "MMMM/YYYY" ? "month-year" : i === "datetime" ? "date-time" : "date",
        onIonChange: (T) => {
          b(T.detail.value), V();
        },
        showDefaultButtons: !1
      }
    ) })
  ] });
};
function Df({
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
  const [b, P] = K(""), [V, k] = K(!1), A = it(null), { main: E, contrast: T } = X(o), D = ht(() => t.length > 0 ? t.filter(
    (C) => e(C).toLowerCase().includes(b.toLowerCase())
  ) : [], [t, b, e]), F = r ? "12px" : "6px", j = r ? "99999px" : "6px", R = () => {
    let C = A.current?.querySelector("input")?.clientHeight ?? 0;
    return u === "select" ? C += 20 : C += 10, /* @__PURE__ */ v(
      "div",
      {
        className: `absolute z-50 overflow-hidden max-h-64 overflow-y-auto shadow-lg ${y}`,
        style: {
          width: a ? "100%" : "auto",
          border: `1px solid ${E}`,
          borderRadius: F,
          backgroundColor: "var(--ion-color-light)",
          top: C,
          // 16px de gap entre input e dropdown (ja contando com o padding interno dos inputs)
          left: 0,
          ...p
        },
        children: c ? /* @__PURE__ */ v("div", { className: "flex justify-center items-center p-4", children: /* @__PURE__ */ v(ue, { name: "crescent", style: { color: E } }) }) : /* @__PURE__ */ O(Ta, { className: "!p-0", children: [
          D.map((M) => /* @__PURE__ */ v(
            Sn,
            {
              button: !0,
              onMouseDown: () => {
                i(M), P(e(M)), k(!1);
              },
              style: { color: T, ...w },
              className: `hover:bg-gray-100 transition-colors ${x}`,
              children: /* @__PURE__ */ v(Be, { children: e(M) })
            },
            n(M)
          )),
          D.length === 0 && /* @__PURE__ */ v(Sn, { children: /* @__PURE__ */ v(Be, { className: "text-gray-500", children: "Nenhum resultado encontrado" }) })
        ] })
      }
    );
  };
  return u === "select" ? /* @__PURE__ */ O(
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
            onChange: (C) => P(C.target.value),
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
  ) : /* @__PURE__ */ O(
    "div",
    {
      ref: A,
      className: `relative ${a ? "w-full" : "w-auto"} ${d}`,
      style: h,
      children: [
        /* @__PURE__ */ v(
          wa,
          {
            value: b,
            onIonInput: (C) => P(C.detail.value),
            placeholder: s,
            onIonFocus: () => k(!0),
            onIonBlur: () => setTimeout(() => k(!1), 150),
            onIonClear: () => {
              P(""), i(void 0);
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
const Af = ({
  icon: t = Uo,
  onClick: e,
  loading: n = !1,
  disabled: i = !1,
  color: s = "primary",
  className: o
}) => {
  const { main: r, contrast: a } = X(s);
  return /* @__PURE__ */ v("div", { className: "relative w-full left-1/2 ", children: /* @__PURE__ */ v(
    H.div,
    {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { type: "spring", stiffness: 120, damping: 15 },
      className: `fixed bottom-[40px]  z-50 ${o}`,
      children: /* @__PURE__ */ v(rr, { vertical: "bottom", horizontal: "center", slot: "fixed", children: /* @__PURE__ */ v(
        Cn,
        {
          onClick: e,
          disabled: i || n,
          style: { "--box-shadow": "none", "--background": r, "--color": a },
          children: n ? /* @__PURE__ */ v(ue, { name: "crescent", color: a.includes("light") ? "light" : "dark" }) : wn.createElement(t, { className: "text-[28px]" })
        }
      ) })
    }
  ) });
}, rf = ({
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
    return /* @__PURE__ */ v(Qs, { children: e });
  const { main: l } = X(a), d = ht(() => {
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
      children: /* @__PURE__ */ O(
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
}, Vf = ({
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
  const [d, h] = K(e || t == null);
  Tt(() => {
    let p;
    return e || t === void 0 || t === null ? h(!0) : p = setTimeout(() => h(!1), 150), () => clearTimeout(p);
  }, [e, t]);
  const f = e || d, m = !f && !n && (!t || t.length === 0), y = !f && !n && !m;
  return /* @__PURE__ */ O(
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
        f && /* @__PURE__ */ O(
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
              /* @__PURE__ */ v(ue, { name: "crescent" }),
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
        !f && n && /* @__PURE__ */ O(
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
              /* @__PURE__ */ v(Vh, { size: 32 }),
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
          rf,
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
  Df as CBAutocomplete,
  Ne as CBButton,
  ff as CBCard,
  bf as CBCheckbox,
  Pf as CBDataPicker,
  rf as CBEmptyState,
  Mf as CBFabButton,
  Af as CBFabButtonCenter,
  Cf as CBFilterBar,
  gf as CBInput,
  vf as CBLoading,
  pf as CBModal,
  Sf as CBMultiView,
  yf as CBSelect,
  Tf as CBSelector,
  Vf as CBStateWrapper,
  _h as CBStepperHorizontal,
  Hh as CBStepperVertical,
  wf as CBTextArea,
  mf as CBToast,
  xf as CBTooltip,
  Rf as CB_COLOR_CONTRAST_MAP,
  Ma as CB_COLOR_MAP,
  $h as resolveMask,
  X as useCBColor,
  jh as useInputMask,
  Yh as usePasswordToggle
};
