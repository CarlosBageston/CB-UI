import { jsx as w } from "react/jsx-runtime";
import { r as me, C as ve } from "./CBInput-DK2zUGUa.js";
import { createContext as pe, useContext as ye, useEffect as Ee, useMemo as U, forwardRef as Se, createElement as _e, useCallback as h } from "react";
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
  var r = typeof Symbol == "function" && Symbol.for, o = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, u = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, f = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, d = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, _ = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, c = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, S = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, y = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, T = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, m = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, C = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, R = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, v = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, x = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function E(e) {
    if (typeof e == "object" && e !== null) {
      var P = e.$$typeof;
      switch (P) {
        case o:
          switch (e = e.type, e) {
            case _:
            case c:
            case u:
            case s:
            case f:
            case y:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case d:
                case S:
                case m:
                case b:
                case l:
                  return e;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function p(e) {
    return E(e) === c;
  }
  return a.AsyncMode = _, a.ConcurrentMode = c, a.ContextConsumer = d, a.ContextProvider = l, a.Element = o, a.ForwardRef = S, a.Fragment = u, a.Lazy = m, a.Memo = b, a.Portal = n, a.Profiler = s, a.StrictMode = f, a.Suspense = y, a.isAsyncMode = function(e) {
    return p(e) || E(e) === _;
  }, a.isConcurrentMode = p, a.isContextConsumer = function(e) {
    return E(e) === d;
  }, a.isContextProvider = function(e) {
    return E(e) === l;
  }, a.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === o;
  }, a.isForwardRef = function(e) {
    return E(e) === S;
  }, a.isFragment = function(e) {
    return E(e) === u;
  }, a.isLazy = function(e) {
    return E(e) === m;
  }, a.isMemo = function(e) {
    return E(e) === b;
  }, a.isPortal = function(e) {
    return E(e) === n;
  }, a.isProfiler = function(e) {
    return E(e) === s;
  }, a.isStrictMode = function(e) {
    return E(e) === f;
  }, a.isSuspense = function(e) {
    return E(e) === y;
  }, a.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === u || e === c || e === s || e === f || e === y || e === T || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === b || e.$$typeof === l || e.$$typeof === d || e.$$typeof === S || e.$$typeof === R || e.$$typeof === v || e.$$typeof === x || e.$$typeof === C);
  }, a.typeOf = E, a;
}
var i = {};
var V;
function Pe() {
  return V || (V = 1, process.env.NODE_ENV !== "production" && (function() {
    var r = typeof Symbol == "function" && Symbol.for, o = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, u = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, f = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, s = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, d = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, _ = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, c = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, S = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, y = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, T = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, m = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, C = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, R = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, v = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, x = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function E(t) {
      return typeof t == "string" || typeof t == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      t === u || t === c || t === s || t === f || t === y || t === T || typeof t == "object" && t !== null && (t.$$typeof === m || t.$$typeof === b || t.$$typeof === l || t.$$typeof === d || t.$$typeof === S || t.$$typeof === R || t.$$typeof === v || t.$$typeof === x || t.$$typeof === C);
    }
    function p(t) {
      if (typeof t == "object" && t !== null) {
        var M = t.$$typeof;
        switch (M) {
          case o:
            var g = t.type;
            switch (g) {
              case _:
              case c:
              case u:
              case s:
              case f:
              case y:
                return g;
              default:
                var L = g && g.$$typeof;
                switch (L) {
                  case d:
                  case S:
                  case m:
                  case b:
                  case l:
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
    var e = _, P = c, A = d, D = l, W = o, H = S, K = u, G = m, X = b, Z = n, J = s, Q = f, ee = y, Y = !1;
    function re(t) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), j(t) || p(t) === _;
    }
    function j(t) {
      return p(t) === c;
    }
    function te(t) {
      return p(t) === d;
    }
    function oe(t) {
      return p(t) === l;
    }
    function ne(t) {
      return typeof t == "object" && t !== null && t.$$typeof === o;
    }
    function ae(t) {
      return p(t) === S;
    }
    function ie(t) {
      return p(t) === u;
    }
    function se(t) {
      return p(t) === m;
    }
    function ce(t) {
      return p(t) === b;
    }
    function ue(t) {
      return p(t) === n;
    }
    function fe(t) {
      return p(t) === s;
    }
    function le(t) {
      return p(t) === f;
    }
    function de(t) {
      return p(t) === y;
    }
    i.AsyncMode = e, i.ConcurrentMode = P, i.ContextConsumer = A, i.ContextProvider = D, i.Element = W, i.ForwardRef = H, i.Fragment = K, i.Lazy = G, i.Memo = X, i.Portal = Z, i.Profiler = J, i.StrictMode = Q, i.Suspense = ee, i.isAsyncMode = re, i.isConcurrentMode = j, i.isContextConsumer = te, i.isContextProvider = oe, i.isElement = ne, i.isForwardRef = ae, i.isFragment = ie, i.isLazy = se, i.isMemo = ce, i.isPortal = ue, i.isProfiler = fe, i.isStrictMode = le, i.isSuspense = de, i.isValidElementType = E, i.typeOf = p;
  })()), i;
}
var q;
function Te() {
  return q || (q = 1, process.env.NODE_ENV === "production" ? $.exports = Ce() : $.exports = Pe()), $.exports;
}
var N, z;
function Re() {
  if (z) return N;
  z = 1;
  var r = Te(), o = {
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
  }, u = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, f = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, s = {};
  s[r.ForwardRef] = u, s[r.Memo] = f;
  function l(m) {
    return r.isMemo(m) ? f : s[m.$$typeof] || o;
  }
  var d = Object.defineProperty, _ = Object.getOwnPropertyNames, c = Object.getOwnPropertySymbols, S = Object.getOwnPropertyDescriptor, y = Object.getPrototypeOf, T = Object.prototype;
  function b(m, C, R) {
    if (typeof C != "string") {
      if (T) {
        var v = y(C);
        v && v !== T && b(m, v, R);
      }
      var x = _(C);
      c && (x = x.concat(c(C)));
      for (var E = l(m), p = l(C), e = 0; e < x.length; ++e) {
        var P = x[e];
        if (!n[P] && !(R && R[P]) && !(p && p[P]) && !(E && E[P])) {
          var A = S(C, P);
          try {
            d(m, P, A);
          } catch {
          }
        }
      }
    }
    return m;
  }
  return N = b, N;
}
Re();
function I() {
  return I = Object.assign || function(r) {
    for (var o = 1; o < arguments.length; o++) {
      var n = arguments[o];
      for (var u in n)
        Object.prototype.hasOwnProperty.call(n, u) && (r[u] = n[u]);
    }
    return r;
  }, I.apply(this, arguments);
}
function xe(r, o) {
  if (r == null) return {};
  var n = {}, u = Object.keys(r), f, s;
  for (s = 0; s < u.length; s++)
    f = u[s], !(o.indexOf(f) >= 0) && (n[f] = r[f]);
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
var ge = function(o) {
  return o !== null && typeof o == "object";
};
function he(r) {
  var o = k(), n = o.getFieldProps, u = o.getFieldMeta, f = o.getFieldHelpers, s = o.registerField, l = o.unregisterField, d = ge(r), _ = d ? r : {
    name: r
  }, c = _.name, S = _.validate;
  Ee(function() {
    return c && s(c, {
      validate: S
    }), function() {
      c && l(c);
    };
  }, [s, l, c, S]), process.env.NODE_ENV !== "production" && (o || (process.env.NODE_ENV !== "production" ? F(!1, "useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component") : F())), c || (process.env.NODE_ENV !== "production" ? F(!1, "Invalid field name. Either pass `useField` a string or an object containing a `name` key.") : F());
  var y = U(function() {
    return f(c);
  }, [f, c]);
  return [n(_), u(c), y];
}
var $e = /* @__PURE__ */ Se(function(r, o) {
  var n = r.action, u = xe(r, ["action"]), f = n ?? "#", s = k(), l = s.handleReset, d = s.handleSubmit;
  return _e("form", I({
    onSubmit: d,
    ref: o,
    onReset: l,
    action: f
  }, u));
});
$e.displayName = "Form";
function Ne({
  name: r,
  valueSource: o = "formatted",
  transformValue: n,
  onChange: u,
  onRawChange: f,
  onBlur: s,
  textColor: l,
  ...d
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
  const [c, S, y] = he(r), T = h(
    (v) => {
      y.setValue(n ? n(v) : v);
    },
    [y, n]
  ), b = h(
    (v) => {
      o === "formatted" && T(v), u?.(v);
    },
    [o, T, u]
  ), m = h(
    (v) => {
      o === "raw" && T(v), f?.(v);
    },
    [o, T, f]
  ), C = h(() => {
    y.setTouched(!0), s?.();
  }, [y, s]), R = U(() => {
    if (c.value === null || c.value === void 0)
      return "";
    if (d.mask === "currency" && o === "raw")
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(Number(c.value));
    if (o === "raw" && d.mask) {
      const v = me(d.mask);
      if (v) return v(String(c.value)).formatted;
    }
    return String(c.value);
  }, [c.value, d.mask, o]);
  return /* @__PURE__ */ w(
    ve,
    {
      ...d,
      name: r,
      value: R,
      onChange: b,
      onRawChange: m,
      onBlur: C,
      error: S.touched ? S.error : void 0,
      textColor: l
    }
  );
}
function we({
  formik: r,
  children: o,
  action: n,
  method: u,
  activeOnSubmit: f = !0,
  className: s,
  onSubmit: l
}) {
  return /* @__PURE__ */ w(Fe, { value: r, children: /* @__PURE__ */ w(
    "form",
    {
      className: s,
      action: n,
      method: u,
      onSubmit: l || (f ? r.handleSubmit : void 0),
      children: o
    }
  ) });
}
export {
  we as CBForm,
  Ne as CBFormikInput
};
