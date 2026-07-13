import { jsxs as Z, jsx as a } from "react/jsx-runtime";
import { IonInput as J, IonGrid as K, IonNote as Q } from "@ionic/react";
import { useMemo as g, useCallback as c, useState as $ } from "react";
import { G as i, u as v } from "./iconBase-Sed4o0Xx.js";
function lt(t) {
  return i({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M256 112v288m144-144H112" } }] })(t);
}
function ct(t) {
  return i({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "square", strokeMiterlimit: "10", strokeWidth: "48", d: "M112 184l144 144 144-144" } }] })(t);
}
function ut(t) {
  return i({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" } }] })(t);
}
function X(t) {
  return i({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zm16-119.7L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z" } }, { tag: "path", attr: { d: "M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z" } }] })(t);
}
function Y(t) {
  return i({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "circle", attr: { cx: "256", cy: "256", r: "64" } }, { tag: "path", attr: { d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" } }] })(t);
}
const _ = {
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
function tt(t, r) {
  if (t)
    return typeof t == "function" ? t : r?.[t] ?? _[t];
}
function rt(t, r, e, o) {
  const n = g(
    () => tt(t, o),
    [t, o]
  ), u = c(
    (s) => {
      if (!n) {
        r?.(s);
        return;
      }
      const { formatted: p, raw: f } = n(s);
      r?.(p), e?.(f);
    },
    [n, r, e]
  ), d = g(() => {
    if (t === "tel" || t === "cep" || t === "currency")
      return "numeric";
    if (t === "cnpj") return "text";
  }, [t]);
  return { handleChange: u, inputMode: d };
}
function et() {
  const [t, r] = $(!1), e = c(() => r((n) => !n), []);
  return { show: t, toggle: e, inputType: t ? "text" : "password" };
}
function y(t) {
  return t == null ? "" : String(t);
}
const dt = ({
  value: t = "",
  label: r,
  placeholder: e,
  disabled: o,
  type: n = "text",
  fill: u = "outline",
  shape: d = "round",
  labelPlacement: s = "stacked",
  className: p = "",
  style: f,
  error: l,
  maxLength: z,
  color: B = "neutral",
  colorContrast: N,
  mask: F,
  textColor: j,
  onChange: k,
  onRawChange: A,
  onBlur: h,
  onFocus: L,
  radius: S = "md",
  classNameIcon: m = "",
  classNameContainerIcon: D = "",
  ...T
}) => {
  const [G, x] = $(!1), { main: b } = v(B, N), { main: E } = v("danger"), { show: w, toggle: O, inputType: P } = et(), { handleChange: I, inputMode: R } = rt(F, k, A), M = g(() => y(t), [t]), C = n === "password", V = l ? E : G || !!M ? b : "var(--ion-color-medium)", W = c(
    (U) => {
      I(y(U.target.value));
    },
    [I]
  ), q = c(() => {
    x(!1), h?.();
  }, [h]), H = {
    none: "0px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px"
  };
  return /* @__PURE__ */ Z("div", { className: `relative flex flex-col h-[72px] pt-2 mb-3! ${p}`, children: [
    /* @__PURE__ */ a(
      J,
      {
        ...T,
        value: M,
        label: r,
        placeholder: e,
        disabled: o,
        type: C ? P : n,
        fill: u,
        shape: d,
        labelPlacement: s,
        maxlength: z,
        inputmode: R,
        "aria-invalid": !!l,
        style: {
          "--border-color": V,
          "--highlight-color-focused": b,
          "--border-radius": H[S || "md"],
          color: j ?? "var(--ion-color-dark)",
          ...f
        },
        onIonInput: W,
        onIonFocus: () => {
          x(!0), L?.();
        },
        onIonBlur: q
      }
    ),
    C && /* @__PURE__ */ a(
      K,
      {
        "aria-label": w ? "Ocultar senha" : "Mostrar senha",
        onClick: O,
        className: `absolute top-4 right-4 z-10 p-1 ${D}`,
        children: w ? /* @__PURE__ */ a(
          Y,
          {
            className: `text-2xl text-(--ion-color-dark) ${m}`
          }
        ) : /* @__PURE__ */ a(
          X,
          {
            className: `text-2xl text-(--ion-color-dark) ${m}`
          }
        )
      }
    ),
    l && /* @__PURE__ */ a(
      Q,
      {
        role: "alert",
        className: "text-[12px] pl-6! text-(--ion-color-danger)",
        children: l
      }
    )
  ] });
};
export {
  dt as C,
  ct as I,
  ut as a,
  lt as b,
  et as c,
  tt as r,
  rt as u
};
