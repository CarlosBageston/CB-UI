import { jsx as w } from "react/jsx-runtime";
import { C as me } from "./CBInput-NPhWE1eP.js";
import { createContext as pe, useContext as ve, useEffect as ye, useMemo as U, forwardRef as Ee, createElement as Se, useCallback as g } from "react";
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
var $ = { exports: {} }, n = {};
var B;
function be() {
  if (B) return n;
  B = 1;
  var r = typeof Symbol == "function" && Symbol.for, o = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, i = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, s = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, u = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, c = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, S = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, d = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, m = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, y = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, T = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, p = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, C = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, _ = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, x = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, R = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function E(e) {
    if (typeof e == "object" && e !== null) {
      var P = e.$$typeof;
      switch (P) {
        case o:
          switch (e = e.type, e) {
            case d:
            case f:
            case s:
            case c:
            case u:
            case y:
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
                  return P;
              }
          }
        case i:
          return P;
      }
    }
  }
  function v(e) {
    return E(e) === f;
  }
  return n.AsyncMode = d, n.ConcurrentMode = f, n.ContextConsumer = S, n.ContextProvider = l, n.Element = o, n.ForwardRef = m, n.Fragment = s, n.Lazy = p, n.Memo = b, n.Portal = i, n.Profiler = c, n.StrictMode = u, n.Suspense = y, n.isAsyncMode = function(e) {
    return v(e) || E(e) === d;
  }, n.isConcurrentMode = v, n.isContextConsumer = function(e) {
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
    return E(e) === y;
  }, n.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === s || e === f || e === c || e === u || e === y || e === T || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === b || e.$$typeof === l || e.$$typeof === S || e.$$typeof === m || e.$$typeof === _ || e.$$typeof === x || e.$$typeof === R || e.$$typeof === C);
  }, n.typeOf = E, n;
}
var a = {};
var V;
function Ce() {
  return V || (V = 1, process.env.NODE_ENV !== "production" && (function() {
    var r = typeof Symbol == "function" && Symbol.for, o = r ? /* @__PURE__ */ Symbol.for("react.element") : 60103, i = r ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, s = r ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, u = r ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, c = r ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, l = r ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, S = r ? /* @__PURE__ */ Symbol.for("react.context") : 60110, d = r ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = r ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, m = r ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, y = r ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, T = r ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, b = r ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, p = r ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, C = r ? /* @__PURE__ */ Symbol.for("react.block") : 60121, _ = r ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, x = r ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, R = r ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function E(t) {
      return typeof t == "string" || typeof t == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      t === s || t === f || t === c || t === u || t === y || t === T || typeof t == "object" && t !== null && (t.$$typeof === p || t.$$typeof === b || t.$$typeof === l || t.$$typeof === S || t.$$typeof === m || t.$$typeof === _ || t.$$typeof === x || t.$$typeof === R || t.$$typeof === C);
    }
    function v(t) {
      if (typeof t == "object" && t !== null) {
        var M = t.$$typeof;
        switch (M) {
          case o:
            var h = t.type;
            switch (h) {
              case d:
              case f:
              case s:
              case c:
              case u:
              case y:
                return h;
              default:
                var L = h && h.$$typeof;
                switch (L) {
                  case S:
                  case m:
                  case p:
                  case b:
                  case l:
                    return L;
                  default:
                    return M;
                }
            }
          case i:
            return M;
        }
      }
    }
    var e = d, P = f, A = S, Y = l, W = o, H = m, K = s, G = p, X = b, Z = i, J = c, Q = u, ee = y, j = !1;
    function re(t) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(t) || v(t) === d;
    }
    function k(t) {
      return v(t) === f;
    }
    function te(t) {
      return v(t) === S;
    }
    function oe(t) {
      return v(t) === l;
    }
    function ne(t) {
      return typeof t == "object" && t !== null && t.$$typeof === o;
    }
    function ae(t) {
      return v(t) === m;
    }
    function ie(t) {
      return v(t) === s;
    }
    function ce(t) {
      return v(t) === p;
    }
    function se(t) {
      return v(t) === b;
    }
    function ue(t) {
      return v(t) === i;
    }
    function fe(t) {
      return v(t) === c;
    }
    function le(t) {
      return v(t) === u;
    }
    function de(t) {
      return v(t) === y;
    }
    a.AsyncMode = e, a.ConcurrentMode = P, a.ContextConsumer = A, a.ContextProvider = Y, a.Element = W, a.ForwardRef = H, a.Fragment = K, a.Lazy = G, a.Memo = X, a.Portal = Z, a.Profiler = J, a.StrictMode = Q, a.Suspense = ee, a.isAsyncMode = re, a.isConcurrentMode = k, a.isContextConsumer = te, a.isContextProvider = oe, a.isElement = ne, a.isForwardRef = ae, a.isFragment = ie, a.isLazy = ce, a.isMemo = se, a.isPortal = ue, a.isProfiler = fe, a.isStrictMode = le, a.isSuspense = de, a.isValidElementType = E, a.typeOf = v;
  })()), a;
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
  var S = Object.defineProperty, d = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, m = Object.getOwnPropertyDescriptor, y = Object.getPrototypeOf, T = Object.prototype;
  function b(p, C, _) {
    if (typeof C != "string") {
      if (T) {
        var x = y(C);
        x && x !== T && b(p, x, _);
      }
      var R = d(C);
      f && (R = R.concat(f(C)));
      for (var E = l(p), v = l(C), e = 0; e < R.length; ++e) {
        var P = R[e];
        if (!i[P] && !(_ && _[P]) && !(v && v[P]) && !(E && E[P])) {
          var A = m(C, P);
          try {
            S(p, P, A);
          } catch {
          }
        }
      }
    }
    return p;
  }
  return N = b, N;
}
Te();
function I() {
  return I = Object.assign || function(r) {
    for (var o = 1; o < arguments.length; o++) {
      var i = arguments[o];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
    }
    return r;
  }, I.apply(this, arguments);
}
function Re(r, o) {
  if (r == null) return {};
  var i = {}, s = Object.keys(r), u, c;
  for (c = 0; c < s.length; c++)
    u = s[c], !(o.indexOf(u) >= 0) && (i[u] = r[u]);
  return i;
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
  var o = D(), i = o.getFieldProps, s = o.getFieldMeta, u = o.getFieldHelpers, c = o.registerField, l = o.unregisterField, S = Fe(r), d = S ? r : {
    name: r
  }, f = d.name, m = d.validate;
  ye(function() {
    return f && c(f, {
      validate: m
    }), function() {
      f && l(f);
    };
  }, [c, l, f, m]), process.env.NODE_ENV !== "production" && (o || (process.env.NODE_ENV !== "production" ? F(!1, "useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component") : F())), f || (process.env.NODE_ENV !== "production" ? F(!1, "Invalid field name. Either pass `useField` a string or an object containing a `name` key.") : F());
  var y = U(function() {
    return u(f);
  }, [u, f]);
  return [i(d), s(f), y];
}
var ge = /* @__PURE__ */ Ee(function(r, o) {
  var i = r.action, s = Re(r, ["action"]), u = i ?? "#", c = D(), l = c.handleReset, S = c.handleSubmit;
  return Se("form", I({
    onSubmit: S,
    ref: o,
    onReset: l,
    action: u
  }, s));
});
ge.displayName = "Form";
function Me({
  name: r,
  valueSource: o = "formatted",
  transformValue: i,
  onChange: s,
  onRawChange: u,
  onBlur: c,
  ...l
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
  const [d, f, m] = he(r), y = g(
    (_) => {
      m.setValue(i ? i(_) : _);
    },
    [m, i]
  ), T = g(
    (_) => {
      o === "formatted" && y(_), s?.(_);
    },
    [o, y, s]
  ), b = g(
    (_) => {
      o === "raw" && y(_), u?.(_);
    },
    [o, y, u]
  ), p = g(() => {
    m.setTouched(!0), c?.();
  }, [m, c]), C = U(() => d.value === null || d.value === void 0 ? "" : l.mask === "currency" && o === "raw" ? Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(Number(d.value)) : String(d.value), [d.value, l.mask, o]);
  return /* @__PURE__ */ w(
    me,
    {
      ...l,
      name: r,
      value: C,
      onChange: T,
      onRawChange: b,
      onBlur: p,
      error: f.touched ? f.error : void 0
    }
  );
}
function Ne({
  formik: r,
  children: o
}) {
  return /* @__PURE__ */ w(xe, { value: r, children: /* @__PURE__ */ w("form", { onSubmit: r.handleSubmit, children: o }) });
}
export {
  Ne as CBForm,
  Me as CBFormikInput
};
