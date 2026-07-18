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
  var r = typeof Symbol == "function" && Symbol.for, o = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, s = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, f = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, u = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, d = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, l = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, _ = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, c = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, S = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, y = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, T = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, m = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, C = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, R = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, v = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, x = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function E(e) {
    if (typeof e == "object" && e !== null) {
      var P = e.$$typeof;
      switch (P) {
        case o:
          switch (e = e.type, e) {
            case _:
            case c:
            case s:
            case u:
            case f:
            case y:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case l:
                case S:
                case m:
                case b:
                case d:
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
  return a.AsyncMode = _, a.ConcurrentMode = c, a.ContextConsumer = l, a.ContextProvider = d, a.Element = o, a.ForwardRef = S, a.Fragment = s, a.Lazy = m, a.Memo = b, a.Portal = n, a.Profiler = u, a.StrictMode = f, a.Suspense = y, a.isAsyncMode = function(e) {
    return p(e) || E(e) === _;
  }, a.isConcurrentMode = p, a.isContextConsumer = function(e) {
    return E(e) === l;
  }, a.isContextProvider = function(e) {
    return E(e) === d;
  }, a.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === o;
  }, a.isForwardRef = function(e) {
    return E(e) === S;
  }, a.isFragment = function(e) {
    return E(e) === s;
  }, a.isLazy = function(e) {
    return E(e) === m;
  }, a.isMemo = function(e) {
    return E(e) === b;
  }, a.isPortal = function(e) {
    return E(e) === n;
  }, a.isProfiler = function(e) {
    return E(e) === u;
  }, a.isStrictMode = function(e) {
    return E(e) === f;
  }, a.isSuspense = function(e) {
    return E(e) === y;
  }, a.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === s || e === c || e === u || e === f || e === y || e === T || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === b || e.$$typeof === d || e.$$typeof === l || e.$$typeof === S || e.$$typeof === R || e.$$typeof === v || e.$$typeof === x || e.$$typeof === C);
  }, a.typeOf = E, a;
}
var i = {};
var V;
function Pe() {
  return V || (V = 1, process.env.NODE_ENV !== "production" && (function() {
    var r = typeof Symbol == "function" && Symbol.for, o = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, s = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, f = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, u = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, d = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, l = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, _ = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, c = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, S = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, y = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, T = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, m = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, C = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, R = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, v = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, x = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function E(t) {
      return typeof t == "string" || typeof t == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      t === s || t === c || t === u || t === f || t === y || t === T || typeof t == "object" && t !== null && (t.$$typeof === m || t.$$typeof === b || t.$$typeof === d || t.$$typeof === l || t.$$typeof === S || t.$$typeof === R || t.$$typeof === v || t.$$typeof === x || t.$$typeof === C);
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
              case s:
              case u:
              case f:
              case y:
                return g;
              default:
                var L = g && g.$$typeof;
                switch (L) {
                  case l:
                  case S:
                  case m:
                  case b:
                  case d:
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
    var e = _, P = c, A = l, D = d, W = o, H = S, K = s, G = m, X = b, Z = n, J = u, Q = f, ee = y, Y = !1;
    function re(t) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), j(t) || p(t) === _;
    }
    function j(t) {
      return p(t) === c;
    }
    function te(t) {
      return p(t) === l;
    }
    function oe(t) {
      return p(t) === d;
    }
    function ne(t) {
      return typeof t == "object" && t !== null && t.$$typeof === o;
    }
    function ae(t) {
      return p(t) === S;
    }
    function ie(t) {
      return p(t) === s;
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
      return p(t) === u;
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
  }, s = {
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
  }, u = {};
  u[r.ForwardRef] = s, u[r.Memo] = f;
  function d(m) {
    return r.isMemo(m) ? f : u[m.$$typeof] || o;
  }
  var l = Object.defineProperty, _ = Object.getOwnPropertyNames, c = Object.getOwnPropertySymbols, S = Object.getOwnPropertyDescriptor, y = Object.getPrototypeOf, T = Object.prototype;
  function b(m, C, R) {
    if (typeof C != "string") {
      if (T) {
        var v = y(C);
        v && v !== T && b(m, v, R);
      }
      var x = _(C);
      c && (x = x.concat(c(C)));
      for (var E = d(m), p = d(C), e = 0; e < x.length; ++e) {
        var P = x[e];
        if (!n[P] && !(R && R[P]) && !(p && p[P]) && !(E && E[P])) {
          var A = S(C, P);
          try {
            l(m, P, A);
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
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (r[s] = n[s]);
    }
    return r;
  }, I.apply(this, arguments);
}
function xe(r, o) {
  if (r == null) return {};
  var n = {}, s = Object.keys(r), f, u;
  for (u = 0; u < s.length; u++)
    f = s[u], !(o.indexOf(f) >= 0) && (n[f] = r[f]);
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
  var o = k(), n = o.getFieldProps, s = o.getFieldMeta, f = o.getFieldHelpers, u = o.registerField, d = o.unregisterField, l = ge(r), _ = l ? r : {
    name: r
  }, c = _.name, S = _.validate;
  Ee(function() {
    return c && u(c, {
      validate: S
    }), function() {
      c && d(c);
    };
  }, [u, d, c, S]), process.env.NODE_ENV !== "production" && (o || (process.env.NODE_ENV !== "production" ? F(!1, "useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component") : F())), c || (process.env.NODE_ENV !== "production" ? F(!1, "Invalid field name. Either pass `useField` a string or an object containing a `name` key.") : F());
  var y = U(function() {
    return f(c);
  }, [f, c]);
  return [n(_), s(c), y];
}
var $e = /* @__PURE__ */ Se(function(r, o) {
  var n = r.action, s = xe(r, ["action"]), f = n ?? "#", u = k(), d = u.handleReset, l = u.handleSubmit;
  return _e("form", I({
    onSubmit: l,
    ref: o,
    onReset: d,
    action: f
  }, s));
});
$e.displayName = "Form";
function Ne({
  name: r,
  valueSource: o = "formatted",
  transformValue: n,
  onChange: s,
  onRawChange: f,
  onBlur: u,
  textColor: d,
  ...l
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
      o === "formatted" && T(v), s?.(v);
    },
    [o, T, s]
  ), m = h(
    (v) => {
      o === "raw" && T(v), f?.(v);
    },
    [o, T, f]
  ), C = h(() => {
    y.setTouched(!0), u?.();
  }, [y, u]), R = U(() => {
    if (c.value === null || c.value === void 0)
      return "";
    if (l.mask === "currency" && o === "raw")
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(Number(c.value));
    if (o === "raw" && l.mask) {
      const v = me(l.mask);
      if (v) return v(String(c.value)).formatted;
    }
    return String(c.value);
  }, [c.value, l.mask, o]);
  return /* @__PURE__ */ w(
    ve,
    {
      ...l,
      name: r,
      value: R,
      onChange: b,
      onRawChange: m,
      onBlur: C,
      error: S.touched ? S.error : void 0,
      textColor: d
    }
  );
}
function we({
  formik: r,
  children: o,
  className: n,
  onSubmit: s
}) {
  return /* @__PURE__ */ w(Fe, { value: r, children: /* @__PURE__ */ w(
    "form",
    {
      className: n,
      onSubmit: s || r.handleSubmit,
      children: o
    }
  ) });
}
export {
  we as CBForm,
  Ne as CBFormikInput
};
