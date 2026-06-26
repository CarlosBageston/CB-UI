import { jsx as w } from "react/jsx-runtime";
import { C as me } from "./CBInput-C09m8ZBd.js";
import { createContext as pe, useContext as ve, useEffect as ye, useMemo as U, forwardRef as Ee, createElement as Se, useCallback as g } from "react";
var _e = process.env.NODE_ENV === "production";
function F(r, o) {
  if (!_e) {
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
function be() {
  if (B) return a;
  B = 1;
  var r = typeof Symbol == "function" && Symbol.for, o = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, s = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, f = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, c = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, d = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, _ = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, u = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, E = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, v = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, T = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, m = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, C = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, R = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, S = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, x = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function y(e) {
    if (typeof e == "object" && e !== null) {
      var P = e.$$typeof;
      switch (P) {
        case o:
          switch (e = e.type, e) {
            case _:
            case u:
            case s:
            case c:
            case f:
            case v:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case d:
                case E:
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
    return y(e) === u;
  }
  return a.AsyncMode = _, a.ConcurrentMode = u, a.ContextConsumer = d, a.ContextProvider = l, a.Element = o, a.ForwardRef = E, a.Fragment = s, a.Lazy = m, a.Memo = b, a.Portal = n, a.Profiler = c, a.StrictMode = f, a.Suspense = v, a.isAsyncMode = function(e) {
    return p(e) || y(e) === _;
  }, a.isConcurrentMode = p, a.isContextConsumer = function(e) {
    return y(e) === d;
  }, a.isContextProvider = function(e) {
    return y(e) === l;
  }, a.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === o;
  }, a.isForwardRef = function(e) {
    return y(e) === E;
  }, a.isFragment = function(e) {
    return y(e) === s;
  }, a.isLazy = function(e) {
    return y(e) === m;
  }, a.isMemo = function(e) {
    return y(e) === b;
  }, a.isPortal = function(e) {
    return y(e) === n;
  }, a.isProfiler = function(e) {
    return y(e) === c;
  }, a.isStrictMode = function(e) {
    return y(e) === f;
  }, a.isSuspense = function(e) {
    return y(e) === v;
  }, a.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === s || e === u || e === c || e === f || e === v || e === T || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === b || e.$$typeof === l || e.$$typeof === d || e.$$typeof === E || e.$$typeof === R || e.$$typeof === S || e.$$typeof === x || e.$$typeof === C);
  }, a.typeOf = y, a;
}
var i = {};
var V;
function Ce() {
  return V || (V = 1, process.env.NODE_ENV !== "production" && (function() {
    var r = typeof Symbol == "function" && Symbol.for, o = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, s = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, f = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, c = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, d = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, _ = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, u = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, E = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, v = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, T = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, m = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, C = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, R = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, S = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, x = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function y(t) {
      return typeof t == "string" || typeof t == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      t === s || t === u || t === c || t === f || t === v || t === T || typeof t == "object" && t !== null && (t.$$typeof === m || t.$$typeof === b || t.$$typeof === l || t.$$typeof === d || t.$$typeof === E || t.$$typeof === R || t.$$typeof === S || t.$$typeof === x || t.$$typeof === C);
    }
    function p(t) {
      if (typeof t == "object" && t !== null) {
        var M = t.$$typeof;
        switch (M) {
          case o:
            var h = t.type;
            switch (h) {
              case _:
              case u:
              case s:
              case c:
              case f:
              case v:
                return h;
              default:
                var L = h && h.$$typeof;
                switch (L) {
                  case d:
                  case E:
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
    var e = _, P = u, A = d, Y = l, W = o, H = E, K = s, G = m, X = b, Z = n, J = c, Q = f, ee = v, j = !1;
    function re(t) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(t) || p(t) === _;
    }
    function k(t) {
      return p(t) === u;
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
      return p(t) === E;
    }
    function ie(t) {
      return p(t) === s;
    }
    function ce(t) {
      return p(t) === m;
    }
    function se(t) {
      return p(t) === b;
    }
    function ue(t) {
      return p(t) === n;
    }
    function fe(t) {
      return p(t) === c;
    }
    function le(t) {
      return p(t) === f;
    }
    function de(t) {
      return p(t) === v;
    }
    i.AsyncMode = e, i.ConcurrentMode = P, i.ContextConsumer = A, i.ContextProvider = Y, i.Element = W, i.ForwardRef = H, i.Fragment = K, i.Lazy = G, i.Memo = X, i.Portal = Z, i.Profiler = J, i.StrictMode = Q, i.Suspense = ee, i.isAsyncMode = re, i.isConcurrentMode = k, i.isContextConsumer = te, i.isContextProvider = oe, i.isElement = ne, i.isForwardRef = ae, i.isFragment = ie, i.isLazy = ce, i.isMemo = se, i.isPortal = ue, i.isProfiler = fe, i.isStrictMode = le, i.isSuspense = de, i.isValidElementType = y, i.typeOf = p;
  })()), i;
}
var q;
function Pe() {
  return q || (q = 1, process.env.NODE_ENV === "production" ? $.exports = be() : $.exports = Ce()), $.exports;
}
var N, z;
function Te() {
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
  }, c = {};
  c[r.ForwardRef] = s, c[r.Memo] = f;
  function l(m) {
    return r.isMemo(m) ? f : c[m.$$typeof] || o;
  }
  var d = Object.defineProperty, _ = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, E = Object.getOwnPropertyDescriptor, v = Object.getPrototypeOf, T = Object.prototype;
  function b(m, C, R) {
    if (typeof C != "string") {
      if (T) {
        var S = v(C);
        S && S !== T && b(m, S, R);
      }
      var x = _(C);
      u && (x = x.concat(u(C)));
      for (var y = l(m), p = l(C), e = 0; e < x.length; ++e) {
        var P = x[e];
        if (!n[P] && !(R && R[P]) && !(p && p[P]) && !(y && y[P])) {
          var A = E(C, P);
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
Te();
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
function Re(r, o) {
  if (r == null) return {};
  var n = {}, s = Object.keys(r), f, c;
  for (c = 0; c < s.length; c++)
    f = s[c], !(o.indexOf(f) >= 0) && (n[f] = r[f]);
  return n;
}
var O = /* @__PURE__ */ pe(void 0);
O.displayName = "FormikContext";
var xe = O.Provider;
O.Consumer;
function D() {
  var r = ve(O);
  return r || (process.env.NODE_ENV !== "production" ? F(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : F()), r;
}
var Fe = function(o) {
  return o !== null && typeof o == "object";
};
function he(r) {
  var o = D(), n = o.getFieldProps, s = o.getFieldMeta, f = o.getFieldHelpers, c = o.registerField, l = o.unregisterField, d = Fe(r), _ = d ? r : {
    name: r
  }, u = _.name, E = _.validate;
  ye(function() {
    return u && c(u, {
      validate: E
    }), function() {
      u && l(u);
    };
  }, [c, l, u, E]), process.env.NODE_ENV !== "production" && (o || (process.env.NODE_ENV !== "production" ? F(!1, "useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component") : F())), u || (process.env.NODE_ENV !== "production" ? F(!1, "Invalid field name. Either pass `useField` a string or an object containing a `name` key.") : F());
  var v = U(function() {
    return f(u);
  }, [f, u]);
  return [n(_), s(u), v];
}
var ge = /* @__PURE__ */ Ee(function(r, o) {
  var n = r.action, s = Re(r, ["action"]), f = n ?? "#", c = D(), l = c.handleReset, d = c.handleSubmit;
  return Se("form", I({
    onSubmit: d,
    ref: o,
    onReset: l,
    action: f
  }, s));
});
ge.displayName = "Form";
function Me({
  name: r,
  valueSource: o = "formatted",
  transformValue: n,
  onChange: s,
  onRawChange: f,
  onBlur: c,
  textColor: l,
  ...d
}) {
  if (!D())
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
  const [u, E, v] = he(r), T = g(
    (S) => {
      v.setValue(n ? n(S) : S);
    },
    [v, n]
  ), b = g(
    (S) => {
      o === "formatted" && T(S), s?.(S);
    },
    [o, T, s]
  ), m = g(
    (S) => {
      o === "raw" && T(S), f?.(S);
    },
    [o, T, f]
  ), C = g(() => {
    v.setTouched(!0), c?.();
  }, [v, c]), R = U(() => u.value === null || u.value === void 0 ? "" : d.mask === "currency" && o === "raw" ? Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(Number(u.value)) : String(u.value), [u.value, d.mask, o]);
  return /* @__PURE__ */ w(
    me,
    {
      ...d,
      name: r,
      value: R,
      onChange: b,
      onRawChange: m,
      onBlur: C,
      error: E.touched ? E.error : void 0,
      textColor: l
    }
  );
}
function Ne({
  formik: r,
  children: o,
  action: n,
  method: s,
  activeOnSubmit: f = !0,
  className: c,
  onSubmit: l
}) {
  return /* @__PURE__ */ w(xe, { value: r, children: /* @__PURE__ */ w(
    "form",
    {
      className: c,
      action: n,
      method: s,
      onSubmit: l || (f ? r.handleSubmit : void 0),
      children: o
    }
  ) });
}
export {
  Ne as CBForm,
  Me as CBFormikInput
};
