import { jsx as de } from "react/jsx-runtime";
import { C as me } from "./CBInput-NPhWE1eP.js";
import { useContext as pe, useEffect as ye, useMemo as z, createContext as ve, forwardRef as Ee, createElement as Se, useCallback as $ } from "react";
var _e = process.env.NODE_ENV === "production";
function F(r, o) {
  if (!_e) {
    var i = "Warning: " + o;
    typeof console < "u" && console.warn(i);
    try {
      throw Error(i);
    } catch {
    }
  }
}
var h = { exports: {} }, n = {};
var L;
function be() {
  if (L) return n;
  L = 1;
  var r = typeof Symbol == "function" && Symbol.for, o = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, i = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, s = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, u = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, c = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, S = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, d = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, m = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, v = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, P = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, p = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, C = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, _ = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, x = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, R = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function E(e) {
    if (typeof e == "object" && e !== null) {
      var T = e.$$typeof;
      switch (T) {
        case o:
          switch (e = e.type, e) {
            case d:
            case f:
            case s:
            case c:
            case u:
            case v:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case S:
                case m:
                case p:
                case b:
                case l:
                  return e;
                default:
                  return T;
              }
          }
        case i:
          return T;
      }
    }
  }
  function y(e) {
    return E(e) === f;
  }
  return n.AsyncMode = d, n.ConcurrentMode = f, n.ContextConsumer = S, n.ContextProvider = l, n.Element = o, n.ForwardRef = m, n.Fragment = s, n.Lazy = p, n.Memo = b, n.Portal = i, n.Profiler = c, n.StrictMode = u, n.Suspense = v, n.isAsyncMode = function(e) {
    return y(e) || E(e) === d;
  }, n.isConcurrentMode = y, n.isContextConsumer = function(e) {
    return E(e) === S;
  }, n.isContextProvider = function(e) {
    return E(e) === l;
  }, n.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === o;
  }, n.isForwardRef = function(e) {
    return E(e) === m;
  }, n.isFragment = function(e) {
    return E(e) === s;
  }, n.isLazy = function(e) {
    return E(e) === p;
  }, n.isMemo = function(e) {
    return E(e) === b;
  }, n.isPortal = function(e) {
    return E(e) === i;
  }, n.isProfiler = function(e) {
    return E(e) === c;
  }, n.isStrictMode = function(e) {
    return E(e) === u;
  }, n.isSuspense = function(e) {
    return E(e) === v;
  }, n.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === s || e === f || e === c || e === u || e === v || e === P || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === b || e.$$typeof === l || e.$$typeof === S || e.$$typeof === m || e.$$typeof === _ || e.$$typeof === x || e.$$typeof === R || e.$$typeof === C);
  }, n.typeOf = E, n;
}
var a = {};
var B;
function Ce() {
  return B || (B = 1, process.env.NODE_ENV !== "production" && (function() {
    var r = typeof Symbol == "function" && Symbol.for, o = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, i = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, s = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, u = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, c = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, S = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, d = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, m = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, v = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, P = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, p = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, C = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, _ = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, x = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, R = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function E(t) {
      return typeof t == "string" || typeof t == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      t === s || t === f || t === c || t === u || t === v || t === P || typeof t == "object" && t !== null && (t.$$typeof === p || t.$$typeof === b || t.$$typeof === l || t.$$typeof === S || t.$$typeof === m || t.$$typeof === _ || t.$$typeof === x || t.$$typeof === R || t.$$typeof === C);
    }
    function y(t) {
      if (typeof t == "object" && t !== null) {
        var M = t.$$typeof;
        switch (M) {
          case o:
            var g = t.type;
            switch (g) {
              case d:
              case f:
              case s:
              case c:
              case u:
              case v:
                return g;
              default:
                var k = g && g.$$typeof;
                switch (k) {
                  case S:
                  case m:
                  case p:
                  case b:
                  case l:
                    return k;
                  default:
                    return M;
                }
            }
          case i:
            return M;
        }
      }
    }
    var e = d, T = f, A = S, D = l, U = o, W = m, H = s, K = p, G = b, X = i, Z = c, J = u, Q = v, Y = !1;
    function ee(t) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), j(t) || y(t) === d;
    }
    function j(t) {
      return y(t) === f;
    }
    function re(t) {
      return y(t) === S;
    }
    function te(t) {
      return y(t) === l;
    }
    function oe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === o;
    }
    function ne(t) {
      return y(t) === m;
    }
    function ae(t) {
      return y(t) === s;
    }
    function ie(t) {
      return y(t) === p;
    }
    function ce(t) {
      return y(t) === b;
    }
    function se(t) {
      return y(t) === i;
    }
    function ue(t) {
      return y(t) === c;
    }
    function fe(t) {
      return y(t) === u;
    }
    function le(t) {
      return y(t) === v;
    }
    a.AsyncMode = e, a.ConcurrentMode = T, a.ContextConsumer = A, a.ContextProvider = D, a.Element = U, a.ForwardRef = W, a.Fragment = H, a.Lazy = K, a.Memo = G, a.Portal = X, a.Profiler = Z, a.StrictMode = J, a.Suspense = Q, a.isAsyncMode = ee, a.isConcurrentMode = j, a.isContextConsumer = re, a.isContextProvider = te, a.isElement = oe, a.isForwardRef = ne, a.isFragment = ae, a.isLazy = ie, a.isMemo = ce, a.isPortal = se, a.isProfiler = ue, a.isStrictMode = fe, a.isSuspense = le, a.isValidElementType = E, a.typeOf = y;
  })()), a;
}
var V;
function Te() {
  return V || (V = 1, process.env.NODE_ENV === "production" ? h.exports = be() : h.exports = Ce()), h.exports;
}
var N, q;
function Pe() {
  if (q) return N;
  q = 1;
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
  }, i = {
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
  }, u = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, c = {};
  c[r.ForwardRef] = s, c[r.Memo] = u;
  function l(p) {
    return r.isMemo(p) ? u : c[p.$$typeof] || o;
  }
  var S = Object.defineProperty, d = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, m = Object.getOwnPropertyDescriptor, v = Object.getPrototypeOf, P = Object.prototype;
  function b(p, C, _) {
    if (typeof C != "string") {
      if (P) {
        var x = v(C);
        x && x !== P && b(p, x, _);
      }
      var R = d(C);
      f && (R = R.concat(f(C)));
      for (var E = l(p), y = l(C), e = 0; e < R.length; ++e) {
        var T = R[e];
        if (!i[T] && !(_ && _[T]) && !(y && y[T]) && !(E && E[T])) {
          var A = m(C, T);
          try {
            S(p, T, A);
          } catch {
          }
        }
      }
    }
    return p;
  }
  return N = b, N;
}
Pe();
function w() {
  return w = Object.assign || function(r) {
    for (var o = 1; o < arguments.length; o++) {
      var i = arguments[o];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
    }
    return r;
  }, w.apply(this, arguments);
}
function Re(r, o) {
  if (r == null) return {};
  var i = {}, s = Object.keys(r), u, c;
  for (c = 0; c < s.length; c++)
    u = s[c], !(o.indexOf(u) >= 0) && (i[u] = r[u]);
  return i;
}
var O = /* @__PURE__ */ ve(void 0);
O.displayName = "FormikContext";
O.Provider;
O.Consumer;
function I() {
  var r = pe(O);
  return r || (process.env.NODE_ENV !== "production" ? F(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : F()), r;
}
var xe = function(o) {
  return o !== null && typeof o == "object";
};
function Fe(r) {
  var o = I(), i = o.getFieldProps, s = o.getFieldMeta, u = o.getFieldHelpers, c = o.registerField, l = o.unregisterField, S = xe(r), d = S ? r : {
    name: r
  }, f = d.name, m = d.validate;
  ye(function() {
    return f && c(f, {
      validate: m
    }), function() {
      f && l(f);
    };
  }, [c, l, f, m]), process.env.NODE_ENV !== "production" && (o || (process.env.NODE_ENV !== "production" ? F(!1, "useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component") : F())), f || (process.env.NODE_ENV !== "production" ? F(!1, "Invalid field name. Either pass `useField` a string or an object containing a `name` key.") : F());
  var v = z(function() {
    return u(f);
  }, [u, f]);
  return [i(d), s(f), v];
}
var ge = /* @__PURE__ */ Ee(function(r, o) {
  var i = r.action, s = Re(r, ["action"]), u = i ?? "#", c = I(), l = c.handleReset, S = c.handleSubmit;
  return Se("form", w({
    onSubmit: S,
    ref: o,
    onReset: l,
    action: u
  }, s));
});
ge.displayName = "Form";
function Ae({
  name: r,
  valueSource: o = "formatted",
  transformValue: i,
  onChange: s,
  onRawChange: u,
  onBlur: c,
  ...l
}) {
  if (!I())
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
  const [d, f, m] = Fe(r), v = $(
    (_) => {
      m.setValue(i ? i(_) : _);
    },
    [m, i]
  ), P = $(
    (_) => {
      o === "formatted" && v(_), s?.(_);
    },
    [o, v, s]
  ), b = $(
    (_) => {
      o === "raw" && v(_), u?.(_);
    },
    [o, v, u]
  ), p = $(() => {
    m.setTouched(!0), c?.();
  }, [m, c]), C = z(() => d.value === null || d.value === void 0 ? "" : l.mask === "currency" && o === "raw" ? Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(Number(d.value)) : String(d.value), [d.value, l.mask, o]);
  return /* @__PURE__ */ de(
    me,
    {
      ...l,
      name: r,
      value: C,
      onChange: P,
      onRawChange: b,
      onBlur: p,
      error: f.touched ? f.error : void 0
    }
  );
}
export {
  Ae as CBFormikInput
};
