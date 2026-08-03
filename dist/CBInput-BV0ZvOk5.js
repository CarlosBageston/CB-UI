import { jsxs as J, jsx as o } from "react/jsx-runtime";
import { IonInput as K, IonGrid as Q, IonNote as U } from "@ionic/react";
import { useState as C, useCallback as s, useMemo as X } from "react";
import { G as a, u as g, c as Y } from "./useInputMask-DlqD3EiL.js";
function l0(t) {
  return a({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M256 112v288m144-144H112" } }] })(t);
}
function s0(t) {
  return a({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "square", strokeMiterlimit: "10", strokeWidth: "48", d: "M112 184l144 144 144-144" } }] })(t);
}
function c0(t) {
  return a({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" } }] })(t);
}
function Z(t) {
  return a({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zm16-119.7L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z" } }, { tag: "path", attr: { d: "M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z" } }] })(t);
}
function _(t) {
  return a({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "circle", attr: { cx: "256", cy: "256", r: "64" } }, { tag: "path", attr: { d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" } }] })(t);
}
function t0() {
  const [t, n] = C(!1), l = s(() => n((e) => !e), []);
  return { show: t, toggle: l, inputType: t ? "text" : "password" };
}
function I(t) {
  return t == null ? "" : String(t);
}
const i0 = ({
  value: t = "",
  label: n,
  placeholder: l,
  disabled: c,
  type: e = "text",
  fill: b = "outline",
  shape: M = "round",
  labelPlacement: k = "stacked",
  className: w = "",
  style: v,
  error: r,
  maxLength: z,
  color: B = "neutral",
  colorContrast: y,
  mask: N,
  textColor: S,
  onChange: A,
  onRawChange: L,
  onBlur: i,
  onFocus: T,
  radius: $ = "md",
  classNameIcon: d = "",
  classNameContainerIcon: j = "",
  ...G
}) => {
  const [E, u] = C(!1), { main: p } = g(B, y), { main: F } = g("danger"), { show: h, toggle: O, inputType: P } = t0(), { handleChange: x, inputMode: V } = Y(N, A, L), f = X(() => I(t), [t]), m = e === "password", W = r ? F : E || !!f ? p : "var(--cb-color-border)", q = s(
    (R) => {
      x(I(R.target.value));
    },
    [x]
  ), D = s(() => {
    u(!1), i?.();
  }, [i]), H = {
    none: "0px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px"
  };
  return /* @__PURE__ */ J("div", { className: `relative flex flex-col h-18 pt-2 mb-3! ${w}`, children: [
    /* @__PURE__ */ o(
      K,
      {
        ...G,
        value: f,
        label: n,
        placeholder: l,
        disabled: c,
        type: m ? P : e,
        fill: b,
        shape: M,
        labelPlacement: k,
        maxlength: z,
        inputmode: V,
        "aria-invalid": !!r,
        style: {
          "--border-color": W,
          "--highlight-color-focused": p,
          "--border-radius": H[$ || "md"],
          color: S ?? "var(--cb-color-dark)",
          ...v
        },
        onIonInput: q,
        onIonFocus: () => {
          u(!0), T?.();
        },
        onIonBlur: D
      }
    ),
    m && /* @__PURE__ */ o(
      Q,
      {
        "aria-label": h ? "Ocultar senha" : "Mostrar senha",
        onClick: O,
        className: `absolute top-4 right-4 z-10 p-1 ${j}`,
        children: h ? /* @__PURE__ */ o(
          _,
          {
            className: `text-2xl text-(--cb-color-dark) ${d}`
          }
        ) : /* @__PURE__ */ o(
          Z,
          {
            className: `text-2xl text-(--cb-color-dark) ${d}`
          }
        )
      }
    ),
    r && /* @__PURE__ */ o(
      U,
      {
        role: "alert",
        className: "text-[12px] pl-6! text-(--cb-color-danger)",
        children: r
      }
    )
  ] });
};
export {
  i0 as C,
  s0 as I,
  c0 as a,
  l0 as b,
  t0 as u
};
