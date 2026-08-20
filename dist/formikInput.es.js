import { jsx as w } from "react/jsx-runtime";
import { C as me } from "./CBInput-C23xi2A7.js";
import { createContext as pe, useContext as ye, useEffect as ve, useMemo as U, forwardRef as Ee, createElement as Se, useCallback as h } from "react";
import { r as _e } from "./useInputMask-DlqD3EiL.js";
var be = process.env.NODE_ENV === "production";
function F(r, o) {
  if (!be) {
    var n = "Warning: " + o;
    typeof console < "u" && console.warn(n);
    try {
      throw Error(n);
    } catch {
    }
  }
}
var $ = { exports: {} }, a = {};
var B;
function Ce() {
  if (B) return a;
  B = 1;
  var r = typeof Symbol == "function" && Symbol.for, o = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, c = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, u = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, y = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, v = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, E = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, m = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, b = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, C = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, S = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, l = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, _ = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, R = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, x = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, P = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function p(e) {
    if (typeof e == "object" && e !== null) {
      var T = e.$$typeof;
      switch (T) {
        case o:
          switch (e = e.type, e) {
            case E:
            case f:
            case c:
            case s:
            case u:
            case b:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case v:
                case m:
                case l:
                case S:
                case y:
                  return e;
                default:
                  return T;
              }
          }
        case n:
          return T;
      }
    }
  }
  function d(e) {
    return p(e) === f;
  }
  return a.AsyncMode = E, a.ConcurrentMode = f, a.ContextConsumer = v, a.ContextProvider = y, a.Element = o, a.ForwardRef = m, a.Fragment = c, a.Lazy = l, a.Memo = S, a.Portal = n, a.Profiler = s, a.StrictMode = u, a.Suspense = b, a.isAsyncMode = function(e) {
    return d(e) || p(e) === E;
  }, a.isConcurrentMode = d, a.isContextConsumer = function(e) {
    return p(e) === v;
  }, a.isContextProvider = function(e) {
    return p(e) === y;
  }, a.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === o;
  }, a.isForwardRef = function(e) {
    return p(e) === m;
  }, a.isFragment = function(e) {
    return p(e) === c;
  }, a.isLazy = function(e) {
    return p(e) === l;
  }, a.isMemo = function(e) {
    return p(e) === S;
  }, a.isPortal = function(e) {
    return p(e) === n;
  }, a.isProfiler = function(e) {
    return p(e) === s;
  }, a.isStrictMode = function(e) {
    return p(e) === u;
  }, a.isSuspense = function(e) {
    return p(e) === b;
  }, a.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === c || e === f || e === s || e === u || e === b || e === C || typeof e == "object" && e !== null && (e.$$typeof === l || e.$$typeof === S || e.$$typeof === y || e.$$typeof === v || e.$$typeof === m || e.$$typeof === R || e.$$typeof === x || e.$$typeof === P || e.$$typeof === _);
  }, a.typeOf = p, a;
}
var i = {};
var V;
function Te() {
  return V || (V = 1, process.env.NODE_ENV !== "production" && (function() {
    var r = typeof Symbol == "function" && Symbol.for, o = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, c = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, u = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, y = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, v = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, E = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, m = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, b = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, C = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, S = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, l = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, _ = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, R = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, x = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, P = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function p(t) {
      return typeof t == "string" || typeof t == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      t === c || t === f || t === s || t === u || t === b || t === C || typeof t == "object" && t !== null && (t.$$typeof === l || t.$$typeof === S || t.$$typeof === y || t.$$typeof === v || t.$$typeof === m || t.$$typeof === R || t.$$typeof === x || t.$$typeof === P || t.$$typeof === _);
    }
    function d(t) {
      if (typeof t == "object" && t !== null) {
        var M = t.$$typeof;
        switch (M) {
          case o:
            var g = t.type;
            switch (g) {
              case E:
              case f:
              case c:
              case s:
              case u:
              case b:
                return g;
              default:
                var L = g && g.$$typeof;
                switch (L) {
                  case v:
                  case m:
                  case l:
                  case S:
                  case y:
                    return L;
                  default:
                    return M;
                }
            }
          case n:
            return M;
        }
      }
    }
    var e = E, T = f, A = v, D = y, W = o, H = m, K = c, G = l, X = S, Z = n, J = s, Q = u, ee = b, Y = !1;
    function re(t) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), j(t) || d(t) === E;
    }
    function j(t) {
      return d(t) === f;
    }
    function te(t) {
      return d(t) === v;
    }
    function oe(t) {
      return d(t) === y;
    }
    function ne(t) {
      return typeof t == "object" && t !== null && t.$$typeof === o;
    }
    function ae(t) {
      return d(t) === m;
    }
    function ie(t) {
      return d(t) === c;
    }
    function ce(t) {
      return d(t) === l;
    }
    function se(t) {
      return d(t) === S;
    }
    function ue(t) {
      return d(t) === n;
    }
    function fe(t) {
      return d(t) === s;
    }
    function le(t) {
      return d(t) === u;
    }
    function de(t) {
      return d(t) === b;
    }
    i.AsyncMode = e, i.ConcurrentMode = T, i.ContextConsumer = A, i.ContextProvider = D, i.Element = W, i.ForwardRef = H, i.Fragment = K, i.Lazy = G, i.Memo = X, i.Portal = Z, i.Profiler = J, i.StrictMode = Q, i.Suspense = ee, i.isAsyncMode = re, i.isConcurrentMode = j, i.isContextConsumer = te, i.isContextProvider = oe, i.isElement = ne, i.isForwardRef = ae, i.isFragment = ie, i.isLazy = ce, i.isMemo = se, i.isPortal = ue, i.isProfiler = fe, i.isStrictMode = le, i.isSuspense = de, i.isValidElementType = p, i.typeOf = d;
  })()), i;
}
var q;
function Pe() {
  return q || (q = 1, process.env.NODE_ENV === "production" ? $.exports = Ce() : $.exports = Te()), $.exports;
}
var N, z;
function Re() {
  if (z) return N;
  z = 1;
  var r = Pe(), o = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, n = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, c = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, u = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, s = {};
  s[r.ForwardRef] = c, s[r.Memo] = u;
  function y(l) {
    return r.isMemo(l) ? u : s[l.$$typeof] || o;
  }
  var v = Object.defineProperty, E = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, m = Object.getOwnPropertyDescriptor, b = Object.getPrototypeOf, C = Object.prototype;
  function S(l, _, R) {
    if (typeof _ != "string") {
      if (C) {
        var x = b(_);
        x && x !== C && S(l, x, R);
      }
      var P = E(_);
      f && (P = P.concat(f(_)));
      for (var p = y(l), d = y(_), e = 0; e < P.length; ++e) {
        var T = P[e];
        if (!n[T] && !(R && R[T]) && !(d && d[T]) && !(p && p[T])) {
          var A = m(_, T);
          try {
            v(l, T, A);
          } catch {
          }
        }
      }
    }
    return l;
  }
  return N = S, N;
}
Re();
function I() {
  return I = Object.assign || function(r) {
    for (var o = 1; o < arguments.length; o++) {
      var n = arguments[o];
      for (var c in n)
        Object.prototype.hasOwnProperty.call(n, c) && (r[c] = n[c]);
    }
    return r;
  }, I.apply(this, arguments);
}
function xe(r, o) {
  if (r == null) return {};
  var n = {}, c = Object.keys(r), u, s;
  for (s = 0; s < c.length; s++)
    u = c[s], !(o.indexOf(u) >= 0) && (n[u] = r[u]);
  return n;
}
var O = /* @__PURE__ */ pe(void 0);
O.displayName = "FormikContext";
var Fe = O.Provider;
O.Consumer;
function k() {
  var r = ye(O);
  return r || (process.env.NODE_ENV !== "production" ? F(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : F()), r;
}
var he = function(o) {
  return o !== null && typeof o == "object";
};
function ge(r) {
  var o = k(), n = o.getFieldProps, c = o.getFieldMeta, u = o.getFieldHelpers, s = o.registerField, y = o.unregisterField, v = he(r), E = v ? r : {
    name: r
  }, f = E.name, m = E.validate;
  ve(function() {
    return f && s(f, {
      validate: m
    }), function() {
      f && y(f);
    };
  }, [s, y, f, m]), process.env.NODE_ENV !== "production" && (o || (process.env.NODE_ENV !== "production" ? F(!1, "useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component") : F())), f || (process.env.NODE_ENV !== "production" ? F(!1, "Invalid field name. Either pass `useField` a string or an object containing a `name` key.") : F());
  var b = U(function() {
    return u(f);
  }, [u, f]);
  return [n(E), c(f), b];
}
var $e = /* @__PURE__ */ Ee(function(r, o) {
  var n = r.action, c = xe(r, ["action"]), u = n ?? "#", s = k(), y = s.handleReset, v = s.handleSubmit;
  return Se("form", I({
    onSubmit: v,
    ref: o,
    onReset: y,
    action: u
  }, c));
});
$e.displayName = "Form";
function we({
  name: r,
  valueSource: o = "formatted",
  transformValue: n,
  onChange: c,
  onRawChange: u,
  onBlur: s,
  onClick: y,
  onKeyDown: v,
  onEnterPress: E,
  textColor: f,
  ...m
}) {
  if (!k())
    throw new Error(
      `
      [CBUI] CBFormikInput precisa estar dentro de um <CBForm>.

      Exemplo:

      const formik = useFormik({...});

      <CBForm formik={formik}>
        <CBFormikInput name="email" />
      </CBForm>
      `
    );
  const [C, S, l] = ge(r), _ = h(
    (e) => {
      l.setValue(n ? n(e) : e);
    },
    [l, n]
  ), R = h(
    (e) => {
      o === "formatted" && _(e), c?.(e);
    },
    [o, _, c]
  ), x = h(
    (e) => {
      o === "raw" && _(e), u?.(e);
    },
    [o, _, u]
  ), P = h(() => {
    l.setTouched(!0), s?.();
  }, [l, s]), p = h(
    (e) => {
      e.key === "Enter" && E?.(), v?.(e);
    },
    [E, v]
  ), d = U(() => {
    if (C.value === null || C.value === void 0)
      return "";
    if (m.mask === "currency" && o === "raw")
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(Number(C.value));
    if (o === "raw" && m.mask) {
      const e = _e(m.mask);
      if (e) return e(String(C.value)).formatted;
    }
    return String(C.value);
  }, [C.value, m.mask, o]);
  return /* @__PURE__ */ w(
    me,
    {
      ...m,
      name: r,
      value: d,
      onChange: R,
      onRawChange: x,
      onBlur: P,
      onClick: y,
      onKeyDown: p,
      error: S.touched ? S.error : void 0,
      textColor: f
    }
  );
}
function Ie({
  formik: r,
  children: o,
  className: n,
  onSubmit: c
}) {
  return /* @__PURE__ */ w(Fe, { value: r, children: /* @__PURE__ */ w(
    "form",
    {
      className: n,
      onSubmit: c || r.handleSubmit,
      children: o
    }
  ) });
}
export {
  Ie as CBForm,
  we as CBFormikInput
};
