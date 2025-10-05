!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var o = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            i,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 66));
})({
  0: function (e, t, n) {
    var i;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */ !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, o) {
      "use strict";
      var r = [],
        s = Object.getPrototypeOf,
        a = r.slice,
        l = r.flat
          ? function (e) {
              return r.flat.call(e);
            }
          : function (e) {
              return r.concat.apply([], e);
            },
        c = r.push,
        u = r.indexOf,
        d = {},
        p = d.toString,
        f = d.hasOwnProperty,
        h = f.toString,
        g = h.call(Object),
        v = {},
        m = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        b = n.document,
        w = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function x(e, t, n) {
        var i,
          o,
          r = (n = n || b).createElement("script");
        if (((r.text = e), t))
          for (i in w)
            (o = t[i] || (t.getAttribute && t.getAttribute(i))) &&
              r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r);
      }
      function k(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? d[p.call(e)] || "object"
          : typeof e;
      }
      var T = function (e, t) {
        return new T.fn.init(e, t);
      };
      function C(e) {
        var t = !!e && "length" in e && e.length,
          n = k(e);
        return (
          !m(e) &&
          !y(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (T.fn = T.prototype =
        {
          jquery: "3.5.1",
          constructor: T,
          length: 0,
          toArray: function () {
            return a.call(this);
          },
          get: function (e) {
            return null == e
              ? a.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = T.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return T.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              T.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(a.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              T.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              T.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: c,
          sort: r.sort,
          splice: r.splice,
        }),
        (T.extend = T.fn.extend =
          function () {
            var e,
              t,
              n,
              i,
              o,
              r,
              s = arguments[0] || {},
              a = 1,
              l = arguments.length,
              c = !1;
            for (
              "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
                "object" == typeof s || m(s) || (s = {}),
                a === l && ((s = this), a--);
              a < l;
              a++
            )
              if (null != (e = arguments[a]))
                for (t in e)
                  (i = e[t]),
                    "__proto__" !== t &&
                      s !== i &&
                      (c && i && (T.isPlainObject(i) || (o = Array.isArray(i)))
                        ? ((n = s[t]),
                          (r =
                            o && !Array.isArray(n)
                              ? []
                              : o || T.isPlainObject(n)
                              ? n
                              : {}),
                          (o = !1),
                          (s[t] = T.extend(c, r, i)))
                        : void 0 !== i && (s[t] = i));
            return s;
          }),
        T.extend({
          expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return !(
              !e ||
              "[object Object]" !== p.call(e) ||
              ((t = s(e)) &&
                ("function" !=
                  typeof (n = f.call(t, "constructor") && t.constructor) ||
                  h.call(n) !== g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            x(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              i = 0;
            if (C(e))
              for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (C(Object(e))
                  ? T.merge(n, "string" == typeof e ? [e] : e)
                  : c.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
              e[o++] = t[i];
            return (e.length = o), e;
          },
          grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
              !t(e[o], o) !== s && i.push(e[o]);
            return i;
          },
          map: function (e, t, n) {
            var i,
              o,
              r = 0,
              s = [];
            if (C(e))
              for (i = e.length; r < i; r++)
                null != (o = t(e[r], r, n)) && s.push(o);
            else for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
            return l(s);
          },
          guid: 1,
          support: v,
        }),
        "function" == typeof Symbol &&
          (T.fn[Symbol.iterator] = r[Symbol.iterator]),
        T.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var S =
        /*!
         * Sizzle CSS Selector Engine v2.3.5
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2020-03-14
         */
        (function (e) {
          var t,
            n,
            i,
            o,
            r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            g,
            v,
            m,
            y,
            b,
            w = "sizzle" + 1 * new Date(),
            x = e.document,
            k = 0,
            T = 0,
            C = le(),
            S = le(),
            E = le(),
            $ = le(),
            A = function (e, t) {
              return e === t && (d = !0), 0;
            },
            O = {}.hasOwnProperty,
            I = [],
            P = I.pop,
            j = I.push,
            D = I.push,
            M = I.slice,
            L = function (e, t) {
              for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t) return n;
              return -1;
            },
            N =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            _ =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              H +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            z =
              "\\[" +
              H +
              "*(" +
              _ +
              ")(?:" +
              H +
              "*([*^$|!~]?=)" +
              H +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              _ +
              "))|)" +
              H +
              "*\\]",
            q =
              ":(" +
              _ +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              z +
              ")*)|.*)\\)|)",
            R = new RegExp(H + "+", "g"),
            F = new RegExp(
              "^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$",
              "g"
            ),
            B = new RegExp("^" + H + "*," + H + "*"),
            W = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            U = new RegExp(H + "|>"),
            X = new RegExp(q),
            Y = new RegExp("^" + _ + "$"),
            V = {
              ID: new RegExp("^#(" + _ + ")"),
              CLASS: new RegExp("^\\.(" + _ + ")"),
              TAG: new RegExp("^(" + _ + "|[*])"),
              ATTR: new RegExp("^" + z),
              PSEUDO: new RegExp("^" + q),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  H +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  H +
                  "*(?:([+-]|)" +
                  H +
                  "*(\\d+)|))" +
                  H +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + N + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  H +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  H +
                  "*((?:-\\d)?\\d*)" +
                  H +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            G = /HTML$/i,
            Z = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            re = function () {
              p();
            },
            se = we(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            D.apply((I = M.call(x.childNodes)), x.childNodes),
              I[x.childNodes.length].nodeType;
          } catch (e) {
            D = {
              apply: I.length
                ? function (e, t) {
                    j.apply(e, M.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                    e.length = n - 1;
                  },
            };
          }
          function ae(e, t, i, o) {
            var r,
              a,
              c,
              u,
              d,
              h,
              m,
              y = t && t.ownerDocument,
              x = t ? t.nodeType : 9;
            if (
              ((i = i || []),
              "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
            )
              return i;
            if (!o && (p(t), (t = t || f), g)) {
              if (11 !== x && (d = J.exec(e)))
                if ((r = d[1])) {
                  if (9 === x) {
                    if (!(c = t.getElementById(r))) return i;
                    if (c.id === r) return i.push(c), i;
                  } else if (
                    y &&
                    (c = y.getElementById(r)) &&
                    b(t, c) &&
                    c.id === r
                  )
                    return i.push(c), i;
                } else {
                  if (d[2]) return D.apply(i, t.getElementsByTagName(e)), i;
                  if (
                    (r = d[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return D.apply(i, t.getElementsByClassName(r)), i;
                }
              if (
                n.qsa &&
                !$[e + " "] &&
                (!v || !v.test(e)) &&
                (1 !== x || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((m = e), (y = t), 1 === x && (U.test(e) || W.test(e)))) {
                  for (
                    ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                      n.scope) ||
                      ((u = t.getAttribute("id"))
                        ? (u = u.replace(ie, oe))
                        : t.setAttribute("id", (u = w))),
                      a = (h = s(e)).length;
                    a--;

                  )
                    h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
                  m = h.join(",");
                }
                try {
                  return D.apply(i, y.querySelectorAll(m)), i;
                } catch (t) {
                  $(e, !0);
                } finally {
                  u === w && t.removeAttribute("id");
                }
              }
            }
            return l(e.replace(F, "$1"), t, i, o);
          }
          function le() {
            var e = [];
            return function t(n, o) {
              return (
                e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                (t[n + " "] = o)
              );
            };
          }
          function ce(e) {
            return (e[w] = !0), e;
          }
          function ue(e) {
            var t = f.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function de(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
              i.attrHandle[n[o]] = t;
          }
          function pe(e, t) {
            var n = t && e,
              i =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function fe(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ge(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ve(e) {
            return ce(function (t) {
              return (
                (t = +t),
                ce(function (n, i) {
                  for (var o, r = e([], n.length, t), s = r.length; s--; )
                    n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
                })
              );
            });
          }
          function me(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = ae.support = {}),
          (r = ae.isXML =
            function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
              return !G.test(t || (n && n.nodeName) || "HTML");
            }),
          (p = ae.setDocument =
            function (e) {
              var t,
                o,
                s = e ? e.ownerDocument || e : x;
              return s != f && 9 === s.nodeType && s.documentElement
                ? ((h = (f = s).documentElement),
                  (g = !r(f)),
                  x != f &&
                    (o = f.defaultView) &&
                    o.top !== o &&
                    (o.addEventListener
                      ? o.addEventListener("unload", re, !1)
                      : o.attachEvent && o.attachEvent("onunload", re)),
                  (n.scope = ue(function (e) {
                    return (
                      h.appendChild(e).appendChild(f.createElement("div")),
                      void 0 !== e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (n.attributes = ue(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ue(function (e) {
                    return (
                      e.appendChild(f.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = K.test(f.getElementsByClassName)),
                  (n.getById = ue(function (e) {
                    return (
                      (h.appendChild(e).id = w),
                      !f.getElementsByName || !f.getElementsByName(w).length
                    );
                  })),
                  n.getById
                    ? ((i.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((i.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n,
                            i,
                            o,
                            r = t.getElementById(e);
                          if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                              return [r];
                            for (
                              o = t.getElementsByName(e), i = 0;
                              (r = o[i++]);

                            )
                              if (
                                (n = r.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [r];
                          }
                          return [];
                        }
                      })),
                  (i.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          i = [],
                          o = 0,
                          r = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                          return i;
                        }
                        return r;
                      }),
                  (i.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e);
                    }),
                  (m = []),
                  (v = []),
                  (n.qsa = K.test(f.querySelectorAll)) &&
                    (ue(function (e) {
                      var t;
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        w +
                        "'></a><select id='" +
                        w +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          v.push("[*^$]=" + H + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          v.push("\\[" + H + "*(?:value|" + N + ")"),
                        e.querySelectorAll("[id~=" + w + "-]").length ||
                          v.push("~="),
                        (t = f.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          v.push(
                            "\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          v.push(":checked"),
                        e.querySelectorAll("a#" + w + "+*").length ||
                          v.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        v.push("[\\r\\n\\f]");
                    }),
                    ue(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = f.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          v.push("name" + H + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          v.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          v.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        v.push(",.*:");
                    })),
                  (n.matchesSelector = K.test(
                    (y =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    ue(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        m.push("!=", q);
                    }),
                  (v = v.length && new RegExp(v.join("|"))),
                  (m = m.length && new RegExp(m.join("|"))),
                  (t = K.test(h.compareDocumentPosition)),
                  (b =
                    t || K.test(h.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                          return (
                            e === i ||
                            !(
                              !i ||
                              1 !== i.nodeType ||
                              !(n.contains
                                ? n.contains(i)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(i))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (A = t
                    ? function (e, t) {
                        if (e === t) return (d = !0), 0;
                        var i =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          i ||
                          (1 &
                            (i =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === i)
                            ? e == f || (e.ownerDocument == x && b(x, e))
                              ? -1
                              : t == f || (t.ownerDocument == x && b(x, t))
                              ? 1
                              : u
                              ? L(u, e) - L(u, t)
                              : 0
                            : 4 & i
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (d = !0), 0;
                        var n,
                          i = 0,
                          o = e.parentNode,
                          r = t.parentNode,
                          s = [e],
                          a = [t];
                        if (!o || !r)
                          return e == f
                            ? -1
                            : t == f
                            ? 1
                            : o
                            ? -1
                            : r
                            ? 1
                            : u
                            ? L(u, e) - L(u, t)
                            : 0;
                        if (o === r) return pe(e, t);
                        for (n = e; (n = n.parentNode); ) s.unshift(n);
                        for (n = t; (n = n.parentNode); ) a.unshift(n);
                        for (; s[i] === a[i]; ) i++;
                        return i
                          ? pe(s[i], a[i])
                          : s[i] == x
                          ? -1
                          : a[i] == x
                          ? 1
                          : 0;
                      }),
                  f)
                : f;
            }),
          (ae.matches = function (e, t) {
            return ae(e, null, null, t);
          }),
          (ae.matchesSelector = function (e, t) {
            if (
              (p(e),
              n.matchesSelector &&
                g &&
                !$[t + " "] &&
                (!m || !m.test(t)) &&
                (!v || !v.test(t)))
            )
              try {
                var i = y.call(e, t);
                if (
                  i ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return i;
              } catch (e) {
                $(t, !0);
              }
            return ae(t, f, null, [e]).length > 0;
          }),
          (ae.contains = function (e, t) {
            return (e.ownerDocument || e) != f && p(e), b(e, t);
          }),
          (ae.attr = function (e, t) {
            (e.ownerDocument || e) != f && p(e);
            var o = i.attrHandle[t.toLowerCase()],
              r =
                o && O.call(i.attrHandle, t.toLowerCase())
                  ? o(e, t, !g)
                  : void 0;
            return void 0 !== r
              ? r
              : n.attributes || !g
              ? e.getAttribute(t)
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
          }),
          (ae.escape = function (e) {
            return (e + "").replace(ie, oe);
          }),
          (ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (ae.uniqueSort = function (e) {
            var t,
              i = [],
              o = 0,
              r = 0;
            if (
              ((d = !n.detectDuplicates),
              (u = !n.sortStable && e.slice(0)),
              e.sort(A),
              d)
            ) {
              for (; (t = e[r++]); ) t === e[r] && (o = i.push(r));
              for (; o--; ) e.splice(i[o], 1);
            }
            return (u = null), e;
          }),
          (o = ae.getText =
            function (e) {
              var t,
                n = "",
                i = 0,
                r = e.nodeType;
              if (r) {
                if (1 === r || 9 === r || 11 === r) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
              } else for (; (t = e[i++]); ) n += o(t);
              return n;
            }),
          ((i = ae.selectors =
            {
              cacheLength: 50,
              createPseudo: ce,
              match: V,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || ae.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && ae.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return V.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          X.test(n) &&
                          (t = s(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = C[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) &&
                      C(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (i) {
                    var o = ae.attr(i, e);
                    return null == o
                      ? "!=" === t
                      : !t ||
                          ((o += ""),
                          "=" === t
                            ? o === n
                            : "!=" === t
                            ? o !== n
                            : "^=" === t
                            ? n && 0 === o.indexOf(n)
                            : "*=" === t
                            ? n && o.indexOf(n) > -1
                            : "$=" === t
                            ? n && o.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + o.replace(R, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (o === n ||
                                o.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, i, o) {
                  var r = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice(-4),
                    a = "of-type" === t;
                  return 1 === i && 0 === o
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, l) {
                        var c,
                          u,
                          d,
                          p,
                          f,
                          h,
                          g = r !== s ? "nextSibling" : "previousSibling",
                          v = t.parentNode,
                          m = a && t.nodeName.toLowerCase(),
                          y = !l && !a,
                          b = !1;
                        if (v) {
                          if (r) {
                            for (; g; ) {
                              for (p = t; (p = p[g]); )
                                if (
                                  a
                                    ? p.nodeName.toLowerCase() === m
                                    : 1 === p.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [s ? v.firstChild : v.lastChild]), s && y)
                          ) {
                            for (
                              b =
                                (f =
                                  (c =
                                    (u =
                                      (d = (p = v)[w] || (p[w] = {}))[
                                        p.uniqueID
                                      ] || (d[p.uniqueID] = {}))[e] ||
                                    [])[0] === k && c[1]) && c[2],
                                p = f && v.childNodes[f];
                              (p =
                                (++f && p && p[g]) || (b = f = 0) || h.pop());

                            )
                              if (1 === p.nodeType && ++b && p === t) {
                                u[e] = [k, f, b];
                                break;
                              }
                          } else if (
                            (y &&
                              (b = f =
                                (c =
                                  (u =
                                    (d = (p = t)[w] || (p[w] = {}))[
                                      p.uniqueID
                                    ] || (d[p.uniqueID] = {}))[e] || [])[0] ===
                                  k && c[1]),
                            !1 === b)
                          )
                            for (
                              ;
                              (p =
                                (++f && p && p[g]) || (b = f = 0) || h.pop()) &&
                              ((a
                                ? p.nodeName.toLowerCase() !== m
                                : 1 !== p.nodeType) ||
                                !++b ||
                                (y &&
                                  ((u =
                                    (d = p[w] || (p[w] = {}))[p.uniqueID] ||
                                    (d[p.uniqueID] = {}))[e] = [k, b]),
                                p !== t));

                            );
                          return (b -= o) === i || (b % i == 0 && b / i >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    o =
                      i.pseudos[e] ||
                      i.setFilters[e.toLowerCase()] ||
                      ae.error("unsupported pseudo: " + e);
                  return o[w]
                    ? o(t)
                    : o.length > 1
                    ? ((n = [e, e, "", t]),
                      i.setFilters.hasOwnProperty(e.toLowerCase())
                        ? ce(function (e, n) {
                            for (var i, r = o(e, t), s = r.length; s--; )
                              e[(i = L(e, r[s]))] = !(n[i] = r[s]);
                          })
                        : function (e) {
                            return o(e, 0, n);
                          })
                    : o;
                },
              },
              pseudos: {
                not: ce(function (e) {
                  var t = [],
                    n = [],
                    i = a(e.replace(F, "$1"));
                  return i[w]
                    ? ce(function (e, t, n, o) {
                        for (var r, s = i(e, null, o, []), a = e.length; a--; )
                          (r = s[a]) && (e[a] = !(t[a] = r));
                      })
                    : function (e, o, r) {
                        return (
                          (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: ce(function (e) {
                  return function (t) {
                    return ae(e, t).length > 0;
                  };
                }),
                contains: ce(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || o(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: ce(function (e) {
                  return (
                    Y.test(e || "") || ae.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = g
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return (
                    e === f.activeElement &&
                    (!f.hasFocus || f.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !i.pseudos.empty(e);
                },
                header: function (e) {
                  return Q.test(e.nodeName);
                },
                input: function (e) {
                  return Z.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: ve(function () {
                  return [0];
                }),
                last: ve(function (e, t) {
                  return [t - 1];
                }),
                eq: ve(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ve(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: ve(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: ve(function (e, t, n) {
                  for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                    e.push(i);
                  return e;
                }),
                gt: ve(function (e, t, n) {
                  for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                  return e;
                }),
              },
            }).pseudos.nth = i.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[t] = fe(t);
          for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
          function ye() {}
          function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
          }
          function we(e, t, n) {
            var i = t.dir,
              o = t.next,
              r = o || i,
              s = n && "parentNode" === r,
              a = T++;
            return t.first
              ? function (t, n, o) {
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || s) return e(t, n, o);
                  return !1;
                }
              : function (t, n, l) {
                  var c,
                    u,
                    d,
                    p = [k, a];
                  if (l) {
                    for (; (t = t[i]); )
                      if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || s)
                        if (
                          ((u =
                            (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                            (d[t.uniqueID] = {})),
                          o && o === t.nodeName.toLowerCase())
                        )
                          t = t[i] || t;
                        else {
                          if ((c = u[r]) && c[0] === k && c[1] === a)
                            return (p[2] = c[2]);
                          if (((u[r] = p), (p[2] = e(t, n, l)))) return !0;
                        }
                  return !1;
                };
          }
          function xe(e) {
            return e.length > 1
              ? function (t, n, i) {
                  for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
                  return !0;
                }
              : e[0];
          }
          function ke(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
              (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
            return s;
          }
          function Te(e, t, n, i, o, r) {
            return (
              i && !i[w] && (i = Te(i)),
              o && !o[w] && (o = Te(o, r)),
              ce(function (r, s, a, l) {
                var c,
                  u,
                  d,
                  p = [],
                  f = [],
                  h = s.length,
                  g =
                    r ||
                    (function (e, t, n) {
                      for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                      return n;
                    })(t || "*", a.nodeType ? [a] : a, []),
                  v = !e || (!r && t) ? g : ke(g, p, e, a, l),
                  m = n ? (o || (r ? e : h || i) ? [] : s) : v;
                if ((n && n(v, m, a, l), i))
                  for (c = ke(m, f), i(c, [], a, l), u = c.length; u--; )
                    (d = c[u]) && (m[f[u]] = !(v[f[u]] = d));
                if (r) {
                  if (o || e) {
                    if (o) {
                      for (c = [], u = m.length; u--; )
                        (d = m[u]) && c.push((v[u] = d));
                      o(null, (m = []), c, l);
                    }
                    for (u = m.length; u--; )
                      (d = m[u]) &&
                        (c = o ? L(r, d) : p[u]) > -1 &&
                        (r[c] = !(s[c] = d));
                  }
                } else (m = ke(m === s ? m.splice(h, m.length) : m)), o ? o(null, s, m, l) : D.apply(s, m);
              })
            );
          }
          function Ce(e) {
            for (
              var t,
                n,
                o,
                r = e.length,
                s = i.relative[e[0].type],
                a = s || i.relative[" "],
                l = s ? 1 : 0,
                u = we(
                  function (e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                d = we(
                  function (e) {
                    return L(t, e) > -1;
                  },
                  a,
                  !0
                ),
                p = [
                  function (e, n, i) {
                    var o =
                      (!s && (i || n !== c)) ||
                      ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                    return (t = null), o;
                  },
                ];
              l < r;
              l++
            )
              if ((n = i.relative[e[l].type])) p = [we(xe(p), n)];
              else {
                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                  for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                  return Te(
                    l > 1 && xe(p),
                    l > 1 &&
                      be(
                        e
                          .slice(0, l - 1)
                          .concat({ value: " " === e[l - 2].type ? "*" : "" })
                      ).replace(F, "$1"),
                    n,
                    l < o && Ce(e.slice(l, o)),
                    o < r && Ce((e = e.slice(o))),
                    o < r && be(e)
                  );
                }
                p.push(n);
              }
            return xe(p);
          }
          return (
            (ye.prototype = i.filters = i.pseudos),
            (i.setFilters = new ye()),
            (s = ae.tokenize =
              function (e, t) {
                var n,
                  o,
                  r,
                  s,
                  a,
                  l,
                  c,
                  u = S[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, l = [], c = i.preFilter; a; ) {
                  for (s in ((n && !(o = B.exec(a))) ||
                    (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
                  (n = !1),
                  (o = W.exec(a)) &&
                    ((n = o.shift()),
                    r.push({ value: n, type: o[0].replace(F, " ") }),
                    (a = a.slice(n.length))),
                  i.filter))
                    !(o = V[s].exec(a)) ||
                      (c[s] && !(o = c[s](o))) ||
                      ((n = o.shift()),
                      r.push({ value: n, type: s, matches: o }),
                      (a = a.slice(n.length)));
                  if (!n) break;
                }
                return t ? a.length : a ? ae.error(e) : S(e, l).slice(0);
              }),
            (a = ae.compile =
              function (e, t) {
                var n,
                  o = [],
                  r = [],
                  a = E[e + " "];
                if (!a) {
                  for (t || (t = s(e)), n = t.length; n--; )
                    (a = Ce(t[n]))[w] ? o.push(a) : r.push(a);
                  (a = E(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        o = e.length > 0,
                        r = function (r, s, a, l, u) {
                          var d,
                            h,
                            v,
                            m = 0,
                            y = "0",
                            b = r && [],
                            w = [],
                            x = c,
                            T = r || (o && i.find.TAG("*", u)),
                            C = (k += null == x ? 1 : Math.random() || 0.1),
                            S = T.length;
                          for (
                            u && (c = s == f || s || u);
                            y !== S && null != (d = T[y]);
                            y++
                          ) {
                            if (o && d) {
                              for (
                                h = 0,
                                  s || d.ownerDocument == f || (p(d), (a = !g));
                                (v = e[h++]);

                              )
                                if (v(d, s || f, a)) {
                                  l.push(d);
                                  break;
                                }
                              u && (k = C);
                            }
                            n && ((d = !v && d) && m--, r && b.push(d));
                          }
                          if (((m += y), n && y !== m)) {
                            for (h = 0; (v = t[h++]); ) v(b, w, s, a);
                            if (r) {
                              if (m > 0)
                                for (; y--; )
                                  b[y] || w[y] || (w[y] = P.call(l));
                              w = ke(w);
                            }
                            D.apply(l, w),
                              u &&
                                !r &&
                                w.length > 0 &&
                                m + t.length > 1 &&
                                ae.uniqueSort(l);
                          }
                          return u && ((k = C), (c = x)), b;
                        };
                      return n ? ce(r) : r;
                    })(r, o)
                  )).selector = e;
                }
                return a;
              }),
            (l = ae.select =
              function (e, t, n, o) {
                var r,
                  l,
                  c,
                  u,
                  d,
                  p = "function" == typeof e && e,
                  f = !o && s((e = p.selector || e));
                if (((n = n || []), 1 === f.length)) {
                  if (
                    (l = f[0] = f[0].slice(0)).length > 2 &&
                    "ID" === (c = l[0]).type &&
                    9 === t.nodeType &&
                    g &&
                    i.relative[l[1].type]
                  ) {
                    if (
                      !(t = (i.find.ID(c.matches[0].replace(te, ne), t) ||
                        [])[0])
                    )
                      return n;
                    p && (t = t.parentNode),
                      (e = e.slice(l.shift().value.length));
                  }
                  for (
                    r = V.needsContext.test(e) ? 0 : l.length;
                    r-- && ((c = l[r]), !i.relative[(u = c.type)]);

                  )
                    if (
                      (d = i.find[u]) &&
                      (o = d(
                        c.matches[0].replace(te, ne),
                        (ee.test(l[0].type) && me(t.parentNode)) || t
                      ))
                    ) {
                      if ((l.splice(r, 1), !(e = o.length && be(l))))
                        return D.apply(n, o), n;
                      break;
                    }
                }
                return (
                  (p || a(e, f))(
                    o,
                    t,
                    !g,
                    n,
                    !t || (ee.test(e) && me(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (n.sortStable = w.split("").sort(A).join("") === w),
            (n.detectDuplicates = !!d),
            p(),
            (n.sortDetached = ue(function (e) {
              return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
            })),
            ue(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              de("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ue(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              de("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ue(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              de(N, function (e, t, n) {
                var i;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (i = e.getAttributeNode(t)) && i.specified
                    ? i.value
                    : null;
              }),
            ae
          );
        })(n);
      (T.find = S),
        (T.expr = S.selectors),
        (T.expr[":"] = T.expr.pseudos),
        (T.uniqueSort = T.unique = S.uniqueSort),
        (T.text = S.getText),
        (T.isXMLDoc = S.isXML),
        (T.contains = S.contains),
        (T.escapeSelector = S.escape);
      var E = function (e, t, n) {
          for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (o && T(e).is(n)) break;
              i.push(e);
            }
          return i;
        },
        $ = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        A = T.expr.match.needsContext;
      function O(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function P(e, t, n) {
        return m(t)
          ? T.grep(e, function (e, i) {
              return !!t.call(e, i, e) !== n;
            })
          : t.nodeType
          ? T.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? T.grep(e, function (e) {
              return u.call(t, e) > -1 !== n;
            })
          : T.filter(t, e, n);
      }
      (T.filter = function (e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === i.nodeType
            ? T.find.matchesSelector(i, e)
              ? [i]
              : []
            : T.find.matches(
                e,
                T.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        T.fn.extend({
          find: function (e) {
            var t,
              n,
              i = this.length,
              o = this;
            if ("string" != typeof e)
              return this.pushStack(
                T(e).filter(function () {
                  for (t = 0; t < i; t++) if (T.contains(o[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, o[t], n);
            return i > 1 ? T.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(P(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(P(this, e || [], !0));
          },
          is: function (e) {
            return !!P(
              this,
              "string" == typeof e && A.test(e) ? T(e) : e || [],
              !1
            ).length;
          },
        });
      var j,
        D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || j), "string" == typeof e)) {
          if (
            !(i =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : D.exec(e)) ||
            (!i[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
              T.merge(
                this,
                T.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : b,
                  !0
                )
              ),
              I.test(i[1]) && T.isPlainObject(t))
            )
              for (i in t) m(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (
            (o = b.getElementById(i[2])) && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : m(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(T)
          : T.makeArray(e, this);
      }).prototype = T.fn),
        (j = T(b));
      var M = /^(?:parents|prev(?:Until|All))/,
        L = { children: !0, contents: !0, next: !0, prev: !0 };
      function N(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      T.fn.extend({
        has: function (e) {
          var t = T(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            i = 0,
            o = this.length,
            r = [],
            s = "string" != typeof e && T(e);
          if (!A.test(e))
            for (; i < o; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && T.find.matchesSelector(n, e))
                ) {
                  r.push(n);
                  break;
                }
          return this.pushStack(r.length > 1 ? T.uniqueSort(r) : r);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? u.call(T(e), this[0])
              : u.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        T.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return E(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return E(e, "parentNode", n);
            },
            next: function (e) {
              return N(e, "nextSibling");
            },
            prev: function (e) {
              return N(e, "previousSibling");
            },
            nextAll: function (e) {
              return E(e, "nextSibling");
            },
            prevAll: function (e) {
              return E(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return E(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return E(e, "previousSibling", n);
            },
            siblings: function (e) {
              return $((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return $(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && s(e.contentDocument)
                ? e.contentDocument
                : (O(e, "template") && (e = e.content || e),
                  T.merge([], e.childNodes));
            },
          },
          function (e, t) {
            T.fn[e] = function (n, i) {
              var o = T.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (o = T.filter(i, o)),
                this.length > 1 &&
                  (L[e] || T.uniqueSort(o), M.test(e) && o.reverse()),
                this.pushStack(o)
              );
            };
          }
        );
      var H = /[^\x20\t\r\n\f]+/g;
      function _(e) {
        return e;
      }
      function z(e) {
        throw e;
      }
      function q(e, t, n, i) {
        var o;
        try {
          e && m((o = e.promise))
            ? o.call(e).done(t).fail(n)
            : e && m((o = e.then))
            ? o.call(e, t, n)
            : t.apply(void 0, [e].slice(i));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (T.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  T.each(e.match(H) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : T.extend({}, e);
        var t,
          n,
          i,
          o,
          r = [],
          s = [],
          a = -1,
          l = function () {
            for (o = o || e.once, i = t = !0; s.length; a = -1)
              for (n = s.shift(); ++a < r.length; )
                !1 === r[a].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((a = r.length), (n = !1));
            e.memory || (n = !1), (t = !1), o && (r = n ? [] : "");
          },
          c = {
            add: function () {
              return (
                r &&
                  (n && !t && ((a = r.length - 1), s.push(n)),
                  (function t(n) {
                    T.each(n, function (n, i) {
                      m(i)
                        ? (e.unique && c.has(i)) || r.push(i)
                        : i && i.length && "string" !== k(i) && t(i);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
              return (
                T.each(arguments, function (e, t) {
                  for (var n; (n = T.inArray(t, r, n)) > -1; )
                    r.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? T.inArray(e, r) > -1 : r.length > 0;
            },
            empty: function () {
              return r && (r = []), this;
            },
            disable: function () {
              return (o = s = []), (r = n = ""), this;
            },
            disabled: function () {
              return !r;
            },
            lock: function () {
              return (o = s = []), n || t || (r = n = ""), this;
            },
            locked: function () {
              return !!o;
            },
            fireWith: function (e, n) {
              return (
                o ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  t || l()),
                this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return c;
      }),
        T.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  T.Callbacks("memory"),
                  T.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              i = "pending",
              o = {
                state: function () {
                  return i;
                },
                always: function () {
                  return r.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return o.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return T.Deferred(function (n) {
                    T.each(t, function (t, i) {
                      var o = m(e[i[4]]) && e[i[4]];
                      r[i[1]](function () {
                        var e = o && o.apply(this, arguments);
                        e && m(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[i[0] + "With"](this, o ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, i, o) {
                  var r = 0;
                  function s(e, t, i, o) {
                    return function () {
                      var a = this,
                        l = arguments,
                        c = function () {
                          var n, c;
                          if (!(e < r)) {
                            if ((n = i.apply(a, l)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              m(c)
                                ? o
                                  ? c.call(n, s(r, t, _, o), s(r, t, z, o))
                                  : (r++,
                                    c.call(
                                      n,
                                      s(r, t, _, o),
                                      s(r, t, z, o),
                                      s(r, t, _, t.notifyWith)
                                    ))
                                : (i !== _ && ((a = void 0), (l = [n])),
                                  (o || t.resolveWith)(a, l));
                          }
                        },
                        u = o
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                T.Deferred.exceptionHook &&
                                  T.Deferred.exceptionHook(n, u.stackTrace),
                                  e + 1 >= r &&
                                    (i !== z && ((a = void 0), (l = [n])),
                                    t.rejectWith(a, l));
                              }
                            };
                      e
                        ? u()
                        : (T.Deferred.getStackHook &&
                            (u.stackTrace = T.Deferred.getStackHook()),
                          n.setTimeout(u));
                    };
                  }
                  return T.Deferred(function (n) {
                    t[0][3].add(s(0, n, m(o) ? o : _, n.notifyWith)),
                      t[1][3].add(s(0, n, m(e) ? e : _)),
                      t[2][3].add(s(0, n, m(i) ? i : z));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? T.extend(e, o) : o;
                },
              },
              r = {};
            return (
              T.each(t, function (e, n) {
                var s = n[2],
                  a = n[5];
                (o[n[1]] = s.add),
                  a &&
                    s.add(
                      function () {
                        i = a;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (r[n[0]] = function () {
                    return (
                      r[n[0] + "With"](this === r ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (r[n[0] + "With"] = s.fireWith);
              }),
              o.promise(r),
              e && e.call(r, r),
              r
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              i = Array(n),
              o = a.call(arguments),
              r = T.Deferred(),
              s = function (e) {
                return function (n) {
                  (i[e] = this),
                    (o[e] = arguments.length > 1 ? a.call(arguments) : n),
                    --t || r.resolveWith(i, o);
                };
              };
            if (
              t <= 1 &&
              (q(e, r.done(s(n)).resolve, r.reject, !t),
              "pending" === r.state() || m(o[n] && o[n].then))
            )
              return r.then();
            for (; n--; ) q(o[n], s(n), r.reject);
            return r.promise();
          },
        });
      var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          R.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (T.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var F = T.Deferred();
      function B() {
        b.removeEventListener("DOMContentLoaded", B),
          n.removeEventListener("load", B),
          T.ready();
      }
      (T.fn.ready = function (e) {
        return (
          F.then(e).catch(function (e) {
            T.readyException(e);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --T.readyWait : T.isReady) ||
              ((T.isReady = !0),
              (!0 !== e && --T.readyWait > 0) || F.resolveWith(b, [T]));
          },
        }),
        (T.ready.then = F.then),
        "complete" === b.readyState ||
        ("loading" !== b.readyState && !b.documentElement.doScroll)
          ? n.setTimeout(T.ready)
          : (b.addEventListener("DOMContentLoaded", B),
            n.addEventListener("load", B));
      var W = function (e, t, n, i, o, r, s) {
          var a = 0,
            l = e.length,
            c = null == n;
          if ("object" === k(n))
            for (a in ((o = !0), n)) W(e, t, a, n[a], !0, r, s);
          else if (
            void 0 !== i &&
            ((o = !0),
            m(i) || (s = !0),
            c &&
              (s
                ? (t.call(e, i), (t = null))
                : ((c = t),
                  (t = function (e, t, n) {
                    return c.call(T(e), n);
                  }))),
            t)
          )
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
          return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
        },
        U = /^-ms-/,
        X = /-([a-z])/g;
      function Y(e, t) {
        return t.toUpperCase();
      }
      function V(e) {
        return e.replace(U, "ms-").replace(X, Y);
      }
      var G = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function Z() {
        this.expando = T.expando + Z.uid++;
      }
      (Z.uid = 1),
        (Z.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                G(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var i,
              o = this.cache(e);
            if ("string" == typeof t) o[V(t)] = n;
            else for (i in t) o[V(i)] = t[i];
            return o;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][V(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              i = e[this.expando];
            if (void 0 !== i) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(V)
                  : (t = V(t)) in i
                  ? [t]
                  : t.match(H) || []).length;
                for (; n--; ) delete i[t[n]];
              }
              (void 0 === t || T.isEmptyObject(i)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t);
          },
        });
      var Q = new Z(),
        K = new Z(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
      function te(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((i = "data-" + t.replace(ee, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(i)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : J.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            K.set(e, t, n);
          } else n = void 0;
        return n;
      }
      T.extend({
        hasData: function (e) {
          return K.hasData(e) || Q.hasData(e);
        },
        data: function (e, t, n) {
          return K.access(e, t, n);
        },
        removeData: function (e, t) {
          K.remove(e, t);
        },
        _data: function (e, t, n) {
          return Q.access(e, t, n);
        },
        _removeData: function (e, t) {
          Q.remove(e, t);
        },
      }),
        T.fn.extend({
          data: function (e, t) {
            var n,
              i,
              o,
              r = this[0],
              s = r && r.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((o = K.get(r)), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (i = s[n].name).indexOf("data-") &&
                    ((i = V(i.slice(5))), te(r, i, o[i]));
                Q.set(r, "hasDataAttrs", !0);
              }
              return o;
            }
            return "object" == typeof e
              ? this.each(function () {
                  K.set(this, e);
                })
              : W(
                  this,
                  function (t) {
                    var n;
                    if (r && void 0 === t)
                      return void 0 !== (n = K.get(r, e)) ||
                        void 0 !== (n = te(r, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      K.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              K.remove(this, e);
            });
          },
        }),
        T.extend({
          queue: function (e, t, n) {
            var i;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (i = Q.get(e, t)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = Q.access(e, t, T.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
              i = n.length,
              o = n.shift(),
              r = T._queueHooks(e, t);
            "inprogress" === o && ((o = n.shift()), i--),
              o &&
                ("fx" === t && n.unshift("inprogress"),
                delete r.stop,
                o.call(
                  e,
                  function () {
                    T.dequeue(e, t);
                  },
                  r
                )),
              !i && r && r.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              Q.get(e, n) ||
              Q.access(e, n, {
                empty: T.Callbacks("once memory").add(function () {
                  Q.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        T.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? T.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = T.queue(this, e, t);
                    T._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              T.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              i = 1,
              o = T.Deferred(),
              r = this,
              s = this.length,
              a = function () {
                --i || o.resolveWith(r, [r]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              s--;

            )
              (n = Q.get(r[s], e + "queueHooks")) &&
                n.empty &&
                (i++, n.empty.add(a));
            return a(), o.promise(t);
          },
        });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        re = b.documentElement,
        se = function (e) {
          return T.contains(e.ownerDocument, e);
        },
        ae = { composed: !0 };
      re.getRootNode &&
        (se = function (e) {
          return (
            T.contains(e.ownerDocument, e) ||
            e.getRootNode(ae) === e.ownerDocument
          );
        });
      var le = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && se(e) && "none" === T.css(e, "display"))
        );
      };
      function ce(e, t, n, i) {
        var o,
          r,
          s = 20,
          a = i
            ? function () {
                return i.cur();
              }
            : function () {
                return T.css(e, t, "");
              },
          l = a(),
          c = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
          u =
            e.nodeType &&
            (T.cssNumber[t] || ("px" !== c && +l)) &&
            ie.exec(T.css(e, t));
        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; s--; )
            T.style(e, t, u + c),
              (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
              (u /= r);
          (u *= 2), T.style(e, t, u + c), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +l || 0),
            (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = c), (i.start = u), (i.end = o))),
          o
        );
      }
      var ue = {};
      function de(e) {
        var t,
          n = e.ownerDocument,
          i = e.nodeName,
          o = ue[i];
        return (
          o ||
          ((t = n.body.appendChild(n.createElement(i))),
          (o = T.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === o && (o = "block"),
          (ue[i] = o),
          o)
        );
      }
      function pe(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
          (i = e[r]).style &&
            ((n = i.style.display),
            t
              ? ("none" === n &&
                  ((o[r] = Q.get(i, "display") || null),
                  o[r] || (i.style.display = "")),
                "" === i.style.display && le(i) && (o[r] = de(i)))
              : "none" !== n && ((o[r] = "none"), Q.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e;
      }
      T.fn.extend({
        show: function () {
          return pe(this, !0);
        },
        hide: function () {
          return pe(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                le(this) ? T(this).show() : T(this).hide();
              });
        },
      });
      var fe,
        he,
        ge = /^(?:checkbox|radio)$/i,
        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i;
      (fe = b.createDocumentFragment().appendChild(b.createElement("div"))),
        (he = b.createElement("input")).setAttribute("type", "radio"),
        he.setAttribute("checked", "checked"),
        he.setAttribute("name", "t"),
        fe.appendChild(he),
        (v.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (fe.innerHTML = "<textarea>x</textarea>"),
        (v.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue),
        (fe.innerHTML = "<option></option>"),
        (v.option = !!fe.lastChild);
      var ye = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function be(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && O(e, t)) ? T.merge([e], n) : n
        );
      }
      function we(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
      }
      (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td),
        v.option ||
          (ye.optgroup = ye.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var xe = /<|&#?\w+;/;
      function ke(e, t, n, i, o) {
        for (
          var r,
            s,
            a,
            l,
            c,
            u,
            d = t.createDocumentFragment(),
            p = [],
            f = 0,
            h = e.length;
          f < h;
          f++
        )
          if ((r = e[f]) || 0 === r)
            if ("object" === k(r)) T.merge(p, r.nodeType ? [r] : r);
            else if (xe.test(r)) {
              for (
                s = s || d.appendChild(t.createElement("div")),
                  a = (ve.exec(r) || ["", ""])[1].toLowerCase(),
                  l = ye[a] || ye._default,
                  s.innerHTML = l[1] + T.htmlPrefilter(r) + l[2],
                  u = l[0];
                u--;

              )
                s = s.lastChild;
              T.merge(p, s.childNodes), ((s = d.firstChild).textContent = "");
            } else p.push(t.createTextNode(r));
        for (d.textContent = "", f = 0; (r = p[f++]); )
          if (i && T.inArray(r, i) > -1) o && o.push(r);
          else if (
            ((c = se(r)), (s = be(d.appendChild(r), "script")), c && we(s), n)
          )
            for (u = 0; (r = s[u++]); ) me.test(r.type || "") && n.push(r);
        return d;
      }
      var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Se = /^([^.]*)(?:\.(.+)|)/;
      function Ee() {
        return !0;
      }
      function $e() {
        return !1;
      }
      function Ae(e, t) {
        return (
          (e ===
            (function () {
              try {
                return b.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function Oe(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
          for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
            Oe(e, a, n, i, t[a], r);
          return e;
        }
        if (
          (null == i && null == o
            ? ((o = n), (i = n = void 0))
            : null == o &&
              ("string" == typeof n
                ? ((o = i), (i = void 0))
                : ((o = i), (i = n), (n = void 0))),
          !1 === o)
        )
          o = $e;
        else if (!o) return e;
        return (
          1 === r &&
            ((s = o),
            ((o = function (e) {
              return T().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = T.guid++))),
          e.each(function () {
            T.event.add(this, t, o, i, n);
          })
        );
      }
      function Ie(e, t, n) {
        n
          ? (Q.set(e, t, !1),
            T.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var i,
                  o,
                  r = Q.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (r.length)
                    (T.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((r = a.call(arguments)),
                    Q.set(this, t, r),
                    (i = n(this, t)),
                    this[t](),
                    r !== (o = Q.get(this, t)) || i
                      ? Q.set(this, t, !1)
                      : (o = {}),
                    r !== o)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), o.value
                    );
                } else
                  r.length &&
                    (Q.set(this, t, {
                      value: T.event.trigger(
                        T.extend(r[0], T.Event.prototype),
                        r.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === Q.get(e, t) && T.event.add(e, t, Ee);
      }
      (T.event = {
        global: {},
        add: function (e, t, n, i, o) {
          var r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            g,
            v = Q.get(e);
          if (G(e))
            for (
              n.handler && ((n = (r = n).handler), (o = r.selector)),
                o && T.find.matchesSelector(re, o),
                n.guid || (n.guid = T.guid++),
                (l = v.events) || (l = v.events = Object.create(null)),
                (s = v.handle) ||
                  (s = v.handle =
                    function (t) {
                      return void 0 !== T && T.event.triggered !== t.type
                        ? T.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                c = (t = (t || "").match(H) || [""]).length;
              c--;

            )
              (f = g = (a = Se.exec(t[c]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                f &&
                  ((d = T.event.special[f] || {}),
                  (f = (o ? d.delegateType : d.bindType) || f),
                  (d = T.event.special[f] || {}),
                  (u = T.extend(
                    {
                      type: f,
                      origType: g,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: o,
                      needsContext: o && T.expr.match.needsContext.test(o),
                      namespace: h.join("."),
                    },
                    r
                  )),
                  (p = l[f]) ||
                    (((p = l[f] = []).delegateCount = 0),
                    (d.setup && !1 !== d.setup.call(e, i, h, s)) ||
                      (e.addEventListener && e.addEventListener(f, s))),
                  d.add &&
                    (d.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                  (T.event.global[f] = !0));
        },
        remove: function (e, t, n, i, o) {
          var r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            g,
            v = Q.hasData(e) && Q.get(e);
          if (v && (l = v.events)) {
            for (c = (t = (t || "").match(H) || [""]).length; c--; )
              if (
                ((f = g = (a = Se.exec(t[c]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                f)
              ) {
                for (
                  d = T.event.special[f] || {},
                    p = l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = r = p.length;
                  r--;

                )
                  (u = p[r]),
                    (!o && g !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (a && !a.test(u.namespace)) ||
                      (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                      (p.splice(r, 1),
                      u.selector && p.delegateCount--,
                      d.remove && d.remove.call(e, u));
                s &&
                  !p.length &&
                  ((d.teardown && !1 !== d.teardown.call(e, h, v.handle)) ||
                    T.removeEvent(e, f, v.handle),
                  delete l[f]);
              } else for (f in l) T.event.remove(e, f + t[c], n, i, !0);
            T.isEmptyObject(l) && Q.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            i,
            o,
            r,
            s,
            a = new Array(arguments.length),
            l = T.event.fix(e),
            c = (Q.get(this, "events") || Object.create(null))[l.type] || [],
            u = T.event.special[l.type] || {};
          for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
          if (
            ((l.delegateTarget = this),
            !u.preDispatch || !1 !== u.preDispatch.call(this, l))
          ) {
            for (
              s = T.event.handlers.call(this, l, c), t = 0;
              (o = s[t++]) && !l.isPropagationStopped();

            )
              for (
                l.currentTarget = o.elem, n = 0;
                (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();

              )
                (l.rnamespace &&
                  !1 !== r.namespace &&
                  !l.rnamespace.test(r.namespace)) ||
                  ((l.handleObj = r),
                  (l.data = r.data),
                  void 0 !==
                    (i = (
                      (T.event.special[r.origType] || {}).handle || r.handler
                    ).apply(o.elem, a)) &&
                    !1 === (l.result = i) &&
                    (l.preventDefault(), l.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function (e, t) {
          var n,
            i,
            o,
            r,
            s,
            a = [],
            l = t.delegateCount,
            c = e.target;
          if (l && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (r = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(o = (i = t[n]).selector + " ")] &&
                    (s[o] = i.needsContext
                      ? T(o, this).index(c) > -1
                      : T.find(o, this, null, [c]).length),
                    s[o] && r.push(i);
                r.length && a.push({ elem: c, handlers: r });
              }
          return (
            (c = this),
            l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
            a
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: m(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                ge.test(t.type) &&
                  t.click &&
                  O(t, "input") &&
                  Ie(t, "click", Ee),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                ge.test(t.type) && t.click && O(t, "input") && Ie(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (ge.test(t.type) &&
                  t.click &&
                  O(t, "input") &&
                  Q.get(t, "click")) ||
                O(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (T.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (T.Event = function (e, t) {
          if (!(this instanceof T.Event)) return new T.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ee
                  : $e),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && T.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: $e,
          isPropagationStopped: $e,
          isImmediatePropagationStopped: $e,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ee),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ee),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ee),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        T.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && Te.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && Ce.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          T.event.addProp
        ),
        T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          T.event.special[e] = {
            setup: function () {
              return Ie(this, e, Ae), !1;
            },
            trigger: function () {
              return Ie(this, e), !0;
            },
            delegateType: t,
          };
        }),
        T.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            T.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  i = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (i && (i === this || T.contains(this, i))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        T.fn.extend({
          on: function (e, t, n, i) {
            return Oe(this, e, t, n, i);
          },
          one: function (e, t, n, i) {
            return Oe(this, e, t, n, i, 1);
          },
          off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                T(e.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (o in e) this.off(o, t, e[o]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = $e),
              this.each(function () {
                T.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Pe = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Me(e, t) {
        return (
          (O(e, "table") &&
            O(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            T(e).children("tbody")[0]) ||
          e
        );
      }
      function Le(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function Ne(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function He(e, t) {
        var n, i, o, r, s, a;
        if (1 === t.nodeType) {
          if (Q.hasData(e) && (a = Q.get(e).events))
            for (o in (Q.remove(t, "handle events"), a))
              for (n = 0, i = a[o].length; n < i; n++)
                T.event.add(t, o, a[o][n]);
          K.hasData(e) &&
            ((r = K.access(e)), (s = T.extend({}, r)), K.set(t, s));
        }
      }
      function _e(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ge.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function ze(e, t, n, i) {
        t = l(t);
        var o,
          r,
          s,
          a,
          c,
          u,
          d = 0,
          p = e.length,
          f = p - 1,
          h = t[0],
          g = m(h);
        if (g || (p > 1 && "string" == typeof h && !v.checkClone && je.test(h)))
          return e.each(function (o) {
            var r = e.eq(o);
            g && (t[0] = h.call(this, o, r.html())), ze(r, t, n, i);
          });
        if (
          p &&
          ((r = (o = ke(t, e[0].ownerDocument, !1, e, i)).firstChild),
          1 === o.childNodes.length && (o = r),
          r || i)
        ) {
          for (a = (s = T.map(be(o, "script"), Le)).length; d < p; d++)
            (c = o),
              d !== f &&
                ((c = T.clone(c, !0, !0)), a && T.merge(s, be(c, "script"))),
              n.call(e[d], c, d);
          if (a)
            for (
              u = s[s.length - 1].ownerDocument, T.map(s, Ne), d = 0;
              d < a;
              d++
            )
              (c = s[d]),
                me.test(c.type || "") &&
                  !Q.access(c, "globalEval") &&
                  T.contains(u, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? T._evalUrl &&
                      !c.noModule &&
                      T._evalUrl(
                        c.src,
                        { nonce: c.nonce || c.getAttribute("nonce") },
                        u
                      )
                    : x(c.textContent.replace(De, ""), c, u));
        }
        return e;
      }
      function qe(e, t, n) {
        for (var i, o = t ? T.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
          n || 1 !== i.nodeType || T.cleanData(be(i)),
            i.parentNode &&
              (n && se(i) && we(be(i, "script")), i.parentNode.removeChild(i));
        return e;
      }
      T.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var i,
            o,
            r,
            s,
            a = e.cloneNode(!0),
            l = se(e);
          if (
            !(
              v.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              T.isXMLDoc(e)
            )
          )
            for (s = be(a), i = 0, o = (r = be(e)).length; i < o; i++)
              _e(r[i], s[i]);
          if (t)
            if (n)
              for (
                r = r || be(e), s = s || be(a), i = 0, o = r.length;
                i < o;
                i++
              )
                He(r[i], s[i]);
            else He(e, a);
          return (
            (s = be(a, "script")).length > 0 && we(s, !l && be(e, "script")), a
          );
        },
        cleanData: function (e) {
          for (
            var t, n, i, o = T.event.special, r = 0;
            void 0 !== (n = e[r]);
            r++
          )
            if (G(n)) {
              if ((t = n[Q.expando])) {
                if (t.events)
                  for (i in t.events)
                    o[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
                n[Q.expando] = void 0;
              }
              n[K.expando] && (n[K.expando] = void 0);
            }
        },
      }),
        T.fn.extend({
          detach: function (e) {
            return qe(this, e, !0);
          },
          remove: function (e) {
            return qe(this, e);
          },
          text: function (e) {
            return W(
              this,
              function (e) {
                return void 0 === e
                  ? T.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return ze(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Me(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return ze(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Me(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return ze(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return ze(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (T.cleanData(be(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return T.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return W(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Pe.test(e) &&
                  !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = T.htmlPrefilter(e);
                  try {
                    for (; n < i; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (T.cleanData(be(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return ze(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                T.inArray(this, e) < 0 &&
                  (T.cleanData(be(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        T.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            T.fn[e] = function (e) {
              for (
                var n, i = [], o = T(e), r = o.length - 1, s = 0;
                s <= r;
                s++
              )
                (n = s === r ? this : this.clone(!0)),
                  T(o[s])[t](n),
                  c.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var Re = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        Fe = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Be = function (e, t, n) {
          var i,
            o,
            r = {};
          for (o in t) (r[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((i = n.call(e)), t)) e.style[o] = r[o];
          return i;
        },
        We = new RegExp(oe.join("|"), "i");
      function Ue(e, t, n) {
        var i,
          o,
          r,
          s,
          a = e.style;
        return (
          (n = n || Fe(e)) &&
            ("" !== (s = n.getPropertyValue(t) || n[t]) ||
              se(e) ||
              (s = T.style(e, t)),
            !v.pixelBoxStyles() &&
              Re.test(s) &&
              We.test(t) &&
              ((i = a.width),
              (o = a.minWidth),
              (r = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = i),
              (a.minWidth = o),
              (a.maxWidth = r))),
          void 0 !== s ? s + "" : s
        );
      }
      function Xe(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (u) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (u.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              re.appendChild(c).appendChild(u);
            var e = n.getComputedStyle(u);
            (i = "1%" !== e.top),
              (l = 12 === t(e.marginLeft)),
              (u.style.right = "60%"),
              (s = 36 === t(e.right)),
              (o = 36 === t(e.width)),
              (u.style.position = "absolute"),
              (r = 12 === t(u.offsetWidth / 3)),
              re.removeChild(c),
              (u = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var i,
          o,
          r,
          s,
          a,
          l,
          c = b.createElement("div"),
          u = b.createElement("div");
        u.style &&
          ((u.style.backgroundClip = "content-box"),
          (u.cloneNode(!0).style.backgroundClip = ""),
          (v.clearCloneStyle = "content-box" === u.style.backgroundClip),
          T.extend(v, {
            boxSizingReliable: function () {
              return e(), o;
            },
            pixelBoxStyles: function () {
              return e(), s;
            },
            pixelPosition: function () {
              return e(), i;
            },
            reliableMarginLeft: function () {
              return e(), l;
            },
            scrollboxSize: function () {
              return e(), r;
            },
            reliableTrDimensions: function () {
              var e, t, i, o;
              return (
                null == a &&
                  ((e = b.createElement("table")),
                  (t = b.createElement("tr")),
                  (i = b.createElement("div")),
                  (e.style.cssText = "position:absolute;left:-11111px"),
                  (t.style.height = "1px"),
                  (i.style.height = "9px"),
                  re.appendChild(e).appendChild(t).appendChild(i),
                  (o = n.getComputedStyle(t)),
                  (a = parseInt(o.height) > 3),
                  re.removeChild(e)),
                a
              );
            },
          }));
      })();
      var Ye = ["Webkit", "Moz", "ms"],
        Ve = b.createElement("div").style,
        Ge = {};
      function Ze(e) {
        return (
          T.cssProps[e] ||
          Ge[e] ||
          (e in Ve
            ? e
            : (Ge[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ye.length;
                    n--;

                  )
                    if ((e = Ye[n] + t) in Ve) return e;
                })(e) || e))
        );
      }
      var Qe = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        Je = { position: "absolute", visibility: "hidden", display: "block" },
        et = { letterSpacing: "0", fontWeight: "400" };
      function tt(e, t, n) {
        var i = ie.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }
      function nt(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
          a = 0,
          l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          "margin" === n && (l += T.css(e, n + oe[s], !0, o)),
            i
              ? ("content" === n && (l -= T.css(e, "padding" + oe[s], !0, o)),
                "margin" !== n &&
                  (l -= T.css(e, "border" + oe[s] + "Width", !0, o)))
              : ((l += T.css(e, "padding" + oe[s], !0, o)),
                "padding" !== n
                  ? (l += T.css(e, "border" + oe[s] + "Width", !0, o))
                  : (a += T.css(e, "border" + oe[s] + "Width", !0, o)));
        return (
          !i &&
            r >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    r -
                    l -
                    a -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function it(e, t, n) {
        var i = Fe(e),
          o =
            (!v.boxSizingReliable() || n) &&
            "border-box" === T.css(e, "boxSizing", !1, i),
          r = o,
          s = Ue(e, t, i),
          a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Re.test(s)) {
          if (!n) return s;
          s = "auto";
        }
        return (
          ((!v.boxSizingReliable() && o) ||
            (!v.reliableTrDimensions() && O(e, "tr")) ||
            "auto" === s ||
            (!parseFloat(s) && "inline" === T.css(e, "display", !1, i))) &&
            e.getClientRects().length &&
            ((o = "border-box" === T.css(e, "boxSizing", !1, i)),
            (r = a in e) && (s = e[a])),
          (s = parseFloat(s) || 0) +
            nt(e, t, n || (o ? "border" : "content"), r, i, s) +
            "px"
        );
      }
      function ot(e, t, n, i, o) {
        return new ot.prototype.init(e, t, n, i, o);
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ue(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o,
              r,
              s,
              a = V(t),
              l = Ke.test(t),
              c = e.style;
            if (
              (l || (t = Ze(a)),
              (s = T.cssHooks[t] || T.cssHooks[a]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (o = s.get(e, !1, i))
                ? o
                : c[t];
            "string" == (r = typeof n) &&
              (o = ie.exec(n)) &&
              o[1] &&
              ((n = ce(e, t, o)), (r = "number")),
              null != n &&
                n == n &&
                ("number" !== r ||
                  l ||
                  (n += (o && o[3]) || (T.cssNumber[a] ? "" : "px")),
                v.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                  (l ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function (e, t, n, i) {
          var o,
            r,
            s,
            a = V(t);
          return (
            Ke.test(t) || (t = Ze(a)),
            (s = T.cssHooks[t] || T.cssHooks[a]) &&
              "get" in s &&
              (o = s.get(e, !0, n)),
            void 0 === o && (o = Ue(e, t, i)),
            "normal" === o && t in et && (o = et[t]),
            "" === n || n
              ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
              : o
          );
        },
      }),
        T.each(["height", "width"], function (e, t) {
          T.cssHooks[t] = {
            get: function (e, n, i) {
              if (n)
                return !Qe.test(T.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? it(e, t, i)
                  : Be(e, Je, function () {
                      return it(e, t, i);
                    });
            },
            set: function (e, n, i) {
              var o,
                r = Fe(e),
                s = !v.scrollboxSize() && "absolute" === r.position,
                a = (s || i) && "border-box" === T.css(e, "boxSizing", !1, r),
                l = i ? nt(e, t, i, a, r) : 0;
              return (
                a &&
                  s &&
                  (l -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(r[t]) -
                      nt(e, t, "border", !1, r) -
                      0.5
                  )),
                l &&
                  (o = ie.exec(n)) &&
                  "px" !== (o[3] || "px") &&
                  ((e.style[t] = n), (n = T.css(e, t))),
                tt(0, n, l)
              );
            },
          };
        }),
        (T.cssHooks.marginLeft = Xe(v.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ue(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  Be(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        T.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (T.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var i = 0,
                  o = {},
                  r = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                o[e + oe[i] + t] = r[i] || r[i - 2] || r[0];
              return o;
            },
          }),
            "margin" !== e && (T.cssHooks[e + t].set = tt);
        }),
        T.fn.extend({
          css: function (e, t) {
            return W(
              this,
              function (e, t, n) {
                var i,
                  o,
                  r = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (i = Fe(e), o = t.length; s < o; s++)
                    r[t[s]] = T.css(e, t[s], !1, i);
                  return r;
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (T.Tween = ot),
        (ot.prototype = {
          constructor: ot,
          init: function (e, t, n, i, o, r) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = o || T.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = r || (T.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = ot.propHooks[this.prop];
            return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = ot.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    T.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : ot.propHooks._default.set(this),
              this
            );
          },
        }),
        (ot.prototype.init.prototype = ot.prototype),
        (ot.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              T.fx.step[e.prop]
                ? T.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!T.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : T.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (ot.propHooks.scrollTop = ot.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (T.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (T.fx = ot.prototype.init),
        (T.fx.step = {});
      var rt,
        st,
        at = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;
      function ct() {
        st &&
          (!1 === b.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ct)
            : n.setTimeout(ct, T.fx.interval),
          T.fx.tick());
      }
      function ut() {
        return (
          n.setTimeout(function () {
            rt = void 0;
          }),
          (rt = Date.now())
        );
      }
      function dt(e, t) {
        var n,
          i = 0,
          o = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
          o["margin" + (n = oe[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
      }
      function pt(e, t, n) {
        for (
          var i,
            o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
            r = 0,
            s = o.length;
          r < s;
          r++
        )
          if ((i = o[r].call(n, t, e))) return i;
      }
      function ft(e, t, n) {
        var i,
          o,
          r = 0,
          s = ft.prefilters.length,
          a = T.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (o) return !1;
            for (
              var t = rt || ut(),
                n = Math.max(0, c.startTime + c.duration - t),
                i = 1 - (n / c.duration || 0),
                r = 0,
                s = c.tweens.length;
              r < s;
              r++
            )
              c.tweens[r].run(i);
            return (
              a.notifyWith(e, [c, i, n]),
              i < 1 && s
                ? n
                : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            );
          },
          c = a.promise({
            elem: e,
            props: T.extend({}, t),
            opts: T.extend(
              !0,
              { specialEasing: {}, easing: T.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: rt || ut(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var i = T.Tween(
                e,
                c.opts,
                t,
                n,
                c.opts.specialEasing[t] || c.opts.easing
              );
              return c.tweens.push(i), i;
            },
            stop: function (t) {
              var n = 0,
                i = t ? c.tweens.length : 0;
              if (o) return this;
              for (o = !0; n < i; n++) c.tweens[n].run(1);
              return (
                t
                  ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                  : a.rejectWith(e, [c, t]),
                this
              );
            },
          }),
          u = c.props;
        for (
          (function (e, t) {
            var n, i, o, r, s;
            for (n in e)
              if (
                ((o = t[(i = V(n))]),
                (r = e[n]),
                Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
                n !== i && ((e[i] = r), delete e[n]),
                (s = T.cssHooks[i]) && ("expand" in s))
              )
                for (n in ((r = s.expand(r)), delete e[i], r))
                  (n in e) || ((e[n] = r[n]), (t[n] = o));
              else t[i] = o;
          })(u, c.opts.specialEasing);
          r < s;
          r++
        )
          if ((i = ft.prefilters[r].call(c, e, u, c.opts)))
            return (
              m(i.stop) &&
                (T._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          T.map(u, pt, c),
          m(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          T.fx.timer(T.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (T.Animation = T.extend(ft, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ce(n.elem, e, ie.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          m(e) ? ((t = e), (e = ["*"])) : (e = e.match(H));
          for (var n, i = 0, o = e.length; i < o; i++)
            (n = e[i]),
              (ft.tweeners[n] = ft.tweeners[n] || []),
              ft.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var i,
              o,
              r,
              s,
              a,
              l,
              c,
              u,
              d = "width" in t || "height" in t,
              p = this,
              f = {},
              h = e.style,
              g = e.nodeType && le(e),
              v = Q.get(e, "fxshow");
            for (i in (n.queue ||
              (null == (s = T._queueHooks(e, "fx")).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function () {
                  s.unqueued || a();
                })),
              s.unqueued++,
              p.always(function () {
                p.always(function () {
                  s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
                });
              })),
            t))
              if (((o = t[i]), at.test(o))) {
                if (
                  (delete t[i],
                  (r = r || "toggle" === o),
                  o === (g ? "hide" : "show"))
                ) {
                  if ("show" !== o || !v || void 0 === v[i]) continue;
                  g = !0;
                }
                f[i] = (v && v[i]) || T.style(e, i);
              }
            if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
              for (i in (d &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (c = v && v.display) && (c = Q.get(e, "display")),
                "none" === (u = T.css(e, "display")) &&
                  (c
                    ? (u = c)
                    : (pe([e], !0),
                      (c = e.style.display || c),
                      (u = T.css(e, "display")),
                      pe([e]))),
                ("inline" === u || ("inline-block" === u && null != c)) &&
                  "none" === T.css(e, "float") &&
                  (l ||
                    (p.done(function () {
                      h.display = c;
                    }),
                    null == c &&
                      ((u = h.display), (c = "none" === u ? "" : u))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                p.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (l = !1),
              f))
                l ||
                  (v
                    ? "hidden" in v && (g = v.hidden)
                    : (v = Q.access(e, "fxshow", { display: c })),
                  r && (v.hidden = !g),
                  g && pe([e], !0),
                  p.done(function () {
                    for (i in (g || pe([e]), Q.remove(e, "fxshow"), f))
                      T.style(e, i, f[i]);
                  })),
                  (l = pt(g ? v[i] : 0, i, p)),
                  i in v ||
                    ((v[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
        },
      })),
        (T.speed = function (e, t, n) {
          var i =
            e && "object" == typeof e
              ? T.extend({}, e)
              : {
                  complete: n || (!n && t) || (m(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !m(t) && t),
                };
          return (
            T.fx.off
              ? (i.duration = 0)
              : "number" != typeof i.duration &&
                (i.duration in T.fx.speeds
                  ? (i.duration = T.fx.speeds[i.duration])
                  : (i.duration = T.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              m(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
            }),
            i
          );
        }),
        T.fn.extend({
          fadeTo: function (e, t, n, i) {
            return this.filter(le)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, i);
          },
          animate: function (e, t, n, i) {
            var o = T.isEmptyObject(e),
              r = T.speed(t, n, i),
              s = function () {
                var t = ft(this, T.extend({}, e), r);
                (o || Q.get(this, "finish")) && t.stop(!0);
              };
            return (
              (s.finish = s),
              o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            );
          },
          stop: function (e, t, n) {
            var i = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  o = null != e && e + "queueHooks",
                  r = T.timers,
                  s = Q.get(this);
                if (o) s[o] && s[o].stop && i(s[o]);
                else for (o in s) s[o] && s[o].stop && lt.test(o) && i(s[o]);
                for (o = r.length; o--; )
                  r[o].elem !== this ||
                    (null != e && r[o].queue !== e) ||
                    (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
                (!t && n) || T.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = Q.get(this),
                  i = n[e + "queue"],
                  o = n[e + "queueHooks"],
                  r = T.timers,
                  s = i ? i.length : 0;
                for (
                  n.finish = !0,
                    T.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = r.length;
                  t--;

                )
                  r[t].elem === this &&
                    r[t].queue === e &&
                    (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        T.each(["toggle", "show", "hide"], function (e, t) {
          var n = T.fn[t];
          T.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(dt(t, !0), e, i, o);
          };
        }),
        T.each(
          {
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            T.fn[e] = function (e, n, i) {
              return this.animate(t, e, n, i);
            };
          }
        ),
        (T.timers = []),
        (T.fx.tick = function () {
          var e,
            t = 0,
            n = T.timers;
          for (rt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || T.fx.stop(), (rt = void 0);
        }),
        (T.fx.timer = function (e) {
          T.timers.push(e), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
          st || ((st = !0), ct());
        }),
        (T.fx.stop = function () {
          st = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (e, t) {
          return (
            (e = (T.fx && T.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, i) {
              var o = n.setTimeout(t, e);
              i.stop = function () {
                n.clearTimeout(o);
              };
            })
          );
        }),
        (function () {
          var e = b.createElement("input"),
            t = b
              .createElement("select")
              .appendChild(b.createElement("option"));
          (e.type = "checkbox"),
            (v.checkOn = "" !== e.value),
            (v.optSelected = t.selected),
            ((e = b.createElement("input")).value = "t"),
            (e.type = "radio"),
            (v.radioValue = "t" === e.value);
        })();
      var ht,
        gt = T.expr.attrHandle;
      T.fn.extend({
        attr: function (e, t) {
          return W(this, T.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            T.removeAttr(this, e);
          });
        },
      }),
        T.extend({
          attr: function (e, t, n) {
            var i,
              o,
              r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return void 0 === e.getAttribute
                ? T.prop(e, t, n)
                : ((1 === r && T.isXMLDoc(e)) ||
                    (o =
                      T.attrHooks[t.toLowerCase()] ||
                      (T.expr.match.bool.test(t) ? ht : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void T.removeAttr(e, t)
                      : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                      ? i
                      : (e.setAttribute(t, n + ""), n)
                    : o && "get" in o && null !== (i = o.get(e, t))
                    ? i
                    : null == (i = T.find.attr(e, t))
                    ? void 0
                    : i);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!v.radioValue && "radio" === t && O(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              i = 0,
              o = t && t.match(H);
            if (o && 1 === e.nodeType)
              for (; (n = o[i++]); ) e.removeAttribute(n);
          },
        }),
        (ht = {
          set: function (e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = gt[t] || T.find.attr;
          gt[t] = function (e, t, i) {
            var o,
              r,
              s = t.toLowerCase();
            return (
              i ||
                ((r = gt[s]),
                (gt[s] = o),
                (o = null != n(e, t, i) ? s : null),
                (gt[s] = r)),
              o
            );
          };
        });
      var vt = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;
      function yt(e) {
        return (e.match(H) || []).join(" ");
      }
      function bt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function wt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(H)) || [];
      }
      T.fn.extend({
        prop: function (e, t) {
          return W(this, T.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[T.propFix[e] || e];
          });
        },
      }),
        T.extend({
          prop: function (e, t, n) {
            var i,
              o,
              r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return (
                (1 === r && T.isXMLDoc(e)) ||
                  ((t = T.propFix[t] || t), (o = T.propHooks[t])),
                void 0 !== n
                  ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                    ? i
                    : (e[t] = n)
                  : o && "get" in o && null !== (i = o.get(e, t))
                  ? i
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = T.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : vt.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        v.optSelected ||
          (T.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        T.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            T.propFix[this.toLowerCase()] = this;
          }
        ),
        T.fn.extend({
          addClass: function (e) {
            var t,
              n,
              i,
              o,
              r,
              s,
              a,
              l = 0;
            if (m(e))
              return this.each(function (t) {
                T(this).addClass(e.call(this, t, bt(this)));
              });
            if ((t = wt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((o = bt(n)), (i = 1 === n.nodeType && " " + yt(o) + " "))
                ) {
                  for (s = 0; (r = t[s++]); )
                    i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                  o !== (a = yt(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              i,
              o,
              r,
              s,
              a,
              l = 0;
            if (m(e))
              return this.each(function (t) {
                T(this).removeClass(e.call(this, t, bt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = wt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((o = bt(n)), (i = 1 === n.nodeType && " " + yt(o) + " "))
                ) {
                  for (s = 0; (r = t[s++]); )
                    for (; i.indexOf(" " + r + " ") > -1; )
                      i = i.replace(" " + r + " ", " ");
                  o !== (a = yt(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : m(e)
              ? this.each(function (n) {
                  T(this).toggleClass(e.call(this, n, bt(this), t), t);
                })
              : this.each(function () {
                  var t, o, r, s;
                  if (i)
                    for (o = 0, r = T(this), s = wt(e); (t = s[o++]); )
                      r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = bt(this)) && Q.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : Q.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              i = 0;
            for (t = " " + e + " "; (n = this[i++]); )
              if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var xt = /\r/g;
      T.fn.extend({
        val: function (e) {
          var t,
            n,
            i,
            o = this[0];
          return arguments.length
            ? ((i = m(e)),
              this.each(function (n) {
                var o;
                1 === this.nodeType &&
                  (null == (o = i ? e.call(this, n, T(this).val()) : e)
                    ? (o = "")
                    : "number" == typeof o
                    ? (o += "")
                    : Array.isArray(o) &&
                      (o = T.map(o, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    T.valHooks[this.type] ||
                    T.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, o, "value")) ||
                    (this.value = o));
              }))
            : o
            ? (t =
                T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(o, "value"))
              ? n
              : "string" == typeof (n = o.value)
              ? n.replace(xt, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        T.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = T.find.attr(e, "value");
                return null != t ? t : yt(T.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  i,
                  o = e.options,
                  r = e.selectedIndex,
                  s = "select-one" === e.type,
                  a = s ? null : [],
                  l = s ? r + 1 : o.length;
                for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                  if (
                    ((n = o[i]).selected || i === r) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))
                  ) {
                    if (((t = T(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (
                  var n, i, o = e.options, r = T.makeArray(t), s = o.length;
                  s--;

                )
                  ((i = o[s]).selected =
                    T.inArray(T.valHooks.option.get(i), r) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), r;
              },
            },
          },
        }),
        T.each(["radio", "checkbox"], function () {
          (T.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = T.inArray(T(e).val(), t) > -1);
            },
          }),
            v.checkOn ||
              (T.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (v.focusin = "onfocusin" in n);
      var kt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
          e.stopPropagation();
        };
      T.extend(T.event, {
        trigger: function (e, t, i, o) {
          var r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            h = [i || b],
            g = f.call(e, "type") ? e.type : e,
            v = f.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((s = p = a = i = i || b),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !kt.test(g + T.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((v = g.split(".")), (g = v.shift()), v.sort()),
              (c = g.indexOf(":") < 0 && "on" + g),
              ((e = e[T.expando]
                ? e
                : new T.Event(g, "object" == typeof e && e)).isTrigger = o
                ? 2
                : 3),
              (e.namespace = v.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = i),
              (t = null == t ? [e] : T.makeArray(t, [e])),
              (d = T.event.special[g] || {}),
              o || !d.trigger || !1 !== d.trigger.apply(i, t)))
          ) {
            if (!o && !d.noBubble && !y(i)) {
              for (
                l = d.delegateType || g, kt.test(l + g) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                h.push(s), (a = s);
              a === (i.ownerDocument || b) &&
                h.push(a.defaultView || a.parentWindow || n);
            }
            for (r = 0; (s = h[r++]) && !e.isPropagationStopped(); )
              (p = s),
                (e.type = r > 1 ? l : d.bindType || g),
                (u =
                  (Q.get(s, "events") || Object.create(null))[e.type] &&
                  Q.get(s, "handle")) && u.apply(s, t),
                (u = c && s[c]) &&
                  u.apply &&
                  G(s) &&
                  ((e.result = u.apply(s, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              o ||
                e.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                !G(i) ||
                (c &&
                  m(i[g]) &&
                  !y(i) &&
                  ((a = i[c]) && (i[c] = null),
                  (T.event.triggered = g),
                  e.isPropagationStopped() && p.addEventListener(g, Tt),
                  i[g](),
                  e.isPropagationStopped() && p.removeEventListener(g, Tt),
                  (T.event.triggered = void 0),
                  a && (i[c] = a))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var i = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
          T.event.trigger(i, null, t);
        },
      }),
        T.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              T.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0);
          },
        }),
        v.focusin ||
          T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              T.event.simulate(t, e.target, T.event.fix(e));
            };
            T.event.special[t] = {
              setup: function () {
                var i = this.ownerDocument || this.document || this,
                  o = Q.access(i, t);
                o || i.addEventListener(e, n, !0), Q.access(i, t, (o || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this.document || this,
                  o = Q.access(i, t) - 1;
                o
                  ? Q.access(i, t, o)
                  : (i.removeEventListener(e, n, !0), Q.remove(i, t));
              },
            };
          });
      var Ct = n.location,
        St = { guid: Date.now() },
        Et = /\?/;
      T.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            T.error("Invalid XML: " + e),
          t
        );
      };
      var $t = /\[\]$/,
        At = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        It = /^(?:input|select|textarea|keygen)/i;
      function Pt(e, t, n, i) {
        var o;
        if (Array.isArray(t))
          T.each(t, function (t, o) {
            n || $t.test(e)
              ? i(e, o)
              : Pt(
                  e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
                  o,
                  n,
                  i
                );
          });
        else if (n || "object" !== k(t)) i(e, t);
        else for (o in t) Pt(e + "[" + o + "]", t[o], n, i);
      }
      (T.param = function (e, t) {
        var n,
          i = [],
          o = function (e, t) {
            var n = m(t) ? t() : t;
            i[i.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
          T.each(e, function () {
            o(this.name, this.value);
          });
        else for (n in e) Pt(n, e[n], t, o);
        return i.join("&");
      }),
        T.fn.extend({
          serialize: function () {
            return T.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = T.prop(this, "elements");
              return e ? T.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !T(this).is(":disabled") &&
                  It.test(this.nodeName) &&
                  !Ot.test(e) &&
                  (this.checked || !ge.test(e))
                );
              })
              .map(function (e, t) {
                var n = T(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? T.map(n, function (e) {
                      return { name: t.name, value: e.replace(At, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(At, "\r\n") };
              })
              .get();
          },
        });
      var jt = /%20/g,
        Dt = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Nt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        _t = {},
        zt = {},
        qt = "*/".concat("*"),
        Rt = b.createElement("a");
      function Ft(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var i,
            o = 0,
            r = t.toLowerCase().match(H) || [];
          if (m(n))
            for (; (i = r[o++]); )
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                : (e[i] = e[i] || []).push(n);
        };
      }
      function Bt(e, t, n, i) {
        var o = {},
          r = e === zt;
        function s(a) {
          var l;
          return (
            (o[a] = !0),
            T.each(e[a] || [], function (e, a) {
              var c = a(t, n, i);
              return "string" != typeof c || r || o[c]
                ? r
                  ? !(l = c)
                  : void 0
                : (t.dataTypes.unshift(c), s(c), !1);
            }),
            l
          );
        }
        return s(t.dataTypes[0]) || (!o["*"] && s("*"));
      }
      function Wt(e, t) {
        var n,
          i,
          o = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && T.extend(!0, e, i), e;
      }
      (Rt.href = Ct.href),
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                Ct.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": qt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": T.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Wt(Wt(e, T.ajaxSettings), t) : Wt(T.ajaxSettings, e);
          },
          ajaxPrefilter: Ft(_t),
          ajaxTransport: Ft(zt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var i,
              o,
              r,
              s,
              a,
              l,
              c,
              u,
              d,
              p,
              f = T.ajaxSetup({}, t),
              h = f.context || f,
              g = f.context && (h.nodeType || h.jquery) ? T(h) : T.event,
              v = T.Deferred(),
              m = T.Callbacks("once memory"),
              y = f.statusCode || {},
              w = {},
              x = {},
              k = "canceled",
              C = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (c) {
                    if (!s)
                      for (s = {}; (t = Lt.exec(r)); )
                        s[t[1].toLowerCase() + " "] = (
                          s[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = s[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return c ? r : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == c &&
                      ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                      (w[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == c && (f.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (c) C.always(e[C.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || k;
                  return i && i.abort(t), S(0, t), this;
                },
              };
            if (
              (v.promise(C),
              (f.url = ((e || f.url || Ct.href) + "").replace(
                Ht,
                Ct.protocol + "//"
              )),
              (f.type = t.method || t.type || f.method || f.type),
              (f.dataTypes = (f.dataType || "*").toLowerCase().match(H) || [
                "",
              ]),
              null == f.crossDomain)
            ) {
              l = b.createElement("a");
              try {
                (l.href = f.url),
                  (l.href = l.href),
                  (f.crossDomain =
                    Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host);
              } catch (e) {
                f.crossDomain = !0;
              }
            }
            if (
              (f.data &&
                f.processData &&
                "string" != typeof f.data &&
                (f.data = T.param(f.data, f.traditional)),
              Bt(_t, f, t, C),
              c)
            )
              return C;
            for (d in ((u = T.event && f.global) &&
              0 == T.active++ &&
              T.event.trigger("ajaxStart"),
            (f.type = f.type.toUpperCase()),
            (f.hasContent = !Nt.test(f.type)),
            (o = f.url.replace(Dt, "")),
            f.hasContent
              ? f.data &&
                f.processData &&
                0 ===
                  (f.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (f.data = f.data.replace(jt, "+"))
              : ((p = f.url.slice(o.length)),
                f.data &&
                  (f.processData || "string" == typeof f.data) &&
                  ((o += (Et.test(o) ? "&" : "?") + f.data), delete f.data),
                !1 === f.cache &&
                  ((o = o.replace(Mt, "$1")),
                  (p = (Et.test(o) ? "&" : "?") + "_=" + St.guid++ + p)),
                (f.url = o + p)),
            f.ifModified &&
              (T.lastModified[o] &&
                C.setRequestHeader("If-Modified-Since", T.lastModified[o]),
              T.etag[o] && C.setRequestHeader("If-None-Match", T.etag[o])),
            ((f.data && f.hasContent && !1 !== f.contentType) ||
              t.contentType) &&
              C.setRequestHeader("Content-Type", f.contentType),
            C.setRequestHeader(
              "Accept",
              f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                ? f.accepts[f.dataTypes[0]] +
                    ("*" !== f.dataTypes[0] ? ", " + qt + "; q=0.01" : "")
                : f.accepts["*"]
            ),
            f.headers))
              C.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, C, f) || c))
              return C.abort();
            if (
              ((k = "abort"),
              m.add(f.complete),
              C.done(f.success),
              C.fail(f.error),
              (i = Bt(zt, f, t, C)))
            ) {
              if (((C.readyState = 1), u && g.trigger("ajaxSend", [C, f]), c))
                return C;
              f.async &&
                f.timeout > 0 &&
                (a = n.setTimeout(function () {
                  C.abort("timeout");
                }, f.timeout));
              try {
                (c = !1), i.send(w, S);
              } catch (e) {
                if (c) throw e;
                S(-1, e);
              }
            } else S(-1, "No Transport");
            function S(e, t, s, l) {
              var d,
                p,
                b,
                w,
                x,
                k = t;
              c ||
                ((c = !0),
                a && n.clearTimeout(a),
                (i = void 0),
                (r = l || ""),
                (C.readyState = e > 0 ? 4 : 0),
                (d = (e >= 200 && e < 300) || 304 === e),
                s &&
                  (w = (function (e, t, n) {
                    for (
                      var i, o, r, s, a = e.contents, l = e.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === i &&
                          (i =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                      for (o in a)
                        if (a[o] && a[o].test(i)) {
                          l.unshift(o);
                          break;
                        }
                    if (l[0] in n) r = l[0];
                    else {
                      for (o in n) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                          r = o;
                          break;
                        }
                        s || (s = o);
                      }
                      r = r || s;
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r];
                  })(f, C, s)),
                !d &&
                  T.inArray("script", f.dataTypes) > -1 &&
                  (f.converters["text script"] = function () {}),
                (w = (function (e, t, n, i) {
                  var o,
                    r,
                    s,
                    a,
                    l,
                    c = {},
                    u = e.dataTypes.slice();
                  if (u[1])
                    for (s in e.converters)
                      c[s.toLowerCase()] = e.converters[s];
                  for (r = u.shift(); r; )
                    if (
                      (e.responseFields[r] && (n[e.responseFields[r]] = t),
                      !l &&
                        i &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = r),
                      (r = u.shift()))
                    )
                      if ("*" === r) r = l;
                      else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                          for (o in c)
                            if (
                              (a = o.split(" "))[1] === r &&
                              (s = c[l + " " + a[0]] || c["* " + a[0]])
                            ) {
                              !0 === s
                                ? (s = c[o])
                                : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else
                            try {
                              t = s(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: s
                                  ? e
                                  : "No conversion from " + l + " to " + r,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(f, w, C, d)),
                d
                  ? (f.ifModified &&
                      ((x = C.getResponseHeader("Last-Modified")) &&
                        (T.lastModified[o] = x),
                      (x = C.getResponseHeader("etag")) && (T.etag[o] = x)),
                    204 === e || "HEAD" === f.type
                      ? (k = "nocontent")
                      : 304 === e
                      ? (k = "notmodified")
                      : ((k = w.state), (p = w.data), (d = !(b = w.error))))
                  : ((b = k), (!e && k) || ((k = "error"), e < 0 && (e = 0))),
                (C.status = e),
                (C.statusText = (t || k) + ""),
                d ? v.resolveWith(h, [p, k, C]) : v.rejectWith(h, [C, k, b]),
                C.statusCode(y),
                (y = void 0),
                u &&
                  g.trigger(d ? "ajaxSuccess" : "ajaxError", [C, f, d ? p : b]),
                m.fireWith(h, [C, k]),
                u &&
                  (g.trigger("ajaxComplete", [C, f]),
                  --T.active || T.event.trigger("ajaxStop")));
            }
            return C;
          },
          getJSON: function (e, t, n) {
            return T.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return T.get(e, void 0, t, "script");
          },
        }),
        T.each(["get", "post"], function (e, t) {
          T[t] = function (e, n, i, o) {
            return (
              m(n) && ((o = o || i), (i = n), (n = void 0)),
              T.ajax(
                T.extend(
                  { url: e, type: t, dataType: o, data: n, success: i },
                  T.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        T.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (T._evalUrl = function (e, t, n) {
          return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              T.globalEval(e, t, n);
            },
          });
        }),
        T.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (m(e) && (e = e.call(this[0])),
                (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return m(e)
              ? this.each(function (t) {
                  T(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = T(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = m(e);
            return this.each(function (n) {
              T(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (T.expr.pseudos.hidden = function (e) {
          return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (T.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Ut = { 0: 200, 1223: 204 },
        Xt = T.ajaxSettings.xhr();
      (v.cors = !!Xt && "withCredentials" in Xt),
        (v.ajax = Xt = !!Xt),
        T.ajaxTransport(function (e) {
          var t, i;
          if (v.cors || (Xt && !e.crossDomain))
            return {
              send: function (o, r) {
                var s,
                  a = e.xhr();
                if (
                  (a.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in (e.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  o["X-Requested-With"] ||
                  (o["X-Requested-With"] = "XMLHttpRequest"),
                o))
                  a.setRequestHeader(s, o[s]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        i =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      "abort" === e
                        ? a.abort()
                        : "error" === e
                        ? "number" != typeof a.status
                          ? r(0, "error")
                          : r(a.status, a.statusText)
                        : r(
                            Ut[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = t()),
                  (i = a.onerror = a.ontimeout = t("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          n.setTimeout(function () {
                            t && i();
                          });
                      }),
                  (t = t("abort"));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        T.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        T.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return T.globalEval(e), e;
            },
          },
        }),
        T.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        T.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (i, o) {
                (t = T("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && o("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  b.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Yt,
        Vt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Vt.pop() || T.expando + "_" + St.guid++;
          return (this[e] = !0), e;
        },
      }),
        T.ajaxPrefilter("json jsonp", function (e, t, i) {
          var o,
            r,
            s,
            a =
              !1 !== e.jsonp &&
              (Gt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Gt.test(e.data) &&
                  "data");
          if (a || "jsonp" === e.dataTypes[0])
            return (
              (o = e.jsonpCallback =
                m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(Gt, "$1" + o))
                : !1 !== e.jsonp &&
                  (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
              (e.converters["script json"] = function () {
                return s || T.error(o + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (r = n[o]),
              (n[o] = function () {
                s = arguments;
              }),
              i.always(function () {
                void 0 === r ? T(n).removeProp(o) : (n[o] = r),
                  e[o] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(o)),
                  s && m(r) && r(s[0]),
                  (s = r = void 0);
              }),
              "script"
            );
        }),
        (v.createHTMLDocument =
          (((Yt = b.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Yt.childNodes.length)),
        (T.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (v.createHTMLDocument
                  ? (((i = (t =
                      b.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = b.location.href),
                    t.head.appendChild(i))
                  : (t = b)),
              (r = !n && []),
              (o = I.exec(e))
                ? [t.createElement(o[1])]
                : ((o = ke([e], t, r)),
                  r && r.length && T(r).remove(),
                  T.merge([], o.childNodes)));
          var i, o, r;
        }),
        (T.fn.load = function (e, t, n) {
          var i,
            o,
            r,
            s = this,
            a = e.indexOf(" ");
          return (
            a > -1 && ((i = yt(e.slice(a))), (e = e.slice(0, a))),
            m(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (o = "POST"),
            s.length > 0 &&
              T.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (r = arguments),
                    s.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      s.each(function () {
                        n.apply(this, r || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (T.expr.pseudos.animated = function (e) {
          return T.grep(T.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function (e, t, n) {
            var i,
              o,
              r,
              s,
              a,
              l,
              c = T.css(e, "position"),
              u = T(e),
              d = {};
            "static" === c && (e.style.position = "relative"),
              (a = u.offset()),
              (r = T.css(e, "top")),
              (l = T.css(e, "left")),
              ("absolute" === c || "fixed" === c) &&
              (r + l).indexOf("auto") > -1
                ? ((s = (i = u.position()).top), (o = i.left))
                : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
              m(t) && (t = t.call(e, n, T.extend({}, a))),
              null != t.top && (d.top = t.top - a.top + s),
              null != t.left && (d.left = t.left - a.left + o),
              "using" in t
                ? t.using.call(e, d)
                : ("number" == typeof d.top && (d.top += "px"),
                  "number" == typeof d.left && (d.left += "px"),
                  u.css(d));
          },
        }),
        T.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    T.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((t = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                i = this[0],
                o = { top: 0, left: 0 };
              if ("fixed" === T.css(i, "position"))
                t = i.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === T.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== i &&
                  1 === e.nodeType &&
                  (((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0)),
                  (o.left += T.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - o.top - T.css(i, "marginTop", !0),
                left: t.left - o.left - T.css(i, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === T.css(e, "position");

              )
                e = e.offsetParent;
              return e || re;
            });
          },
        }),
        T.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            T.fn[e] = function (i) {
              return W(
                this,
                function (e, i, o) {
                  var r;
                  if (
                    (y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                    void 0 === o)
                  )
                    return r ? r[t] : e[i];
                  r
                    ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
                    : (e[i] = o);
                },
                e,
                i,
                arguments.length
              );
            };
          }
        ),
        T.each(["top", "left"], function (e, t) {
          T.cssHooks[t] = Xe(v.pixelPosition, function (e, n) {
            if (n)
              return (n = Ue(e, t)), Re.test(n) ? T(e).position()[t] + "px" : n;
          });
        }),
        T.each({ Height: "height", Width: "width" }, function (e, t) {
          T.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, i) {
              T.fn[i] = function (o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                  a = n || (!0 === o || !0 === r ? "margin" : "border");
                return W(
                  this,
                  function (t, n, o) {
                    var r;
                    return y(t)
                      ? 0 === i.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((r = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          r["scroll" + e],
                          t.body["offset" + e],
                          r["offset" + e],
                          r["client" + e]
                        ))
                      : void 0 === o
                      ? T.css(t, n, a)
                      : T.style(t, n, o, a);
                  },
                  t,
                  s ? o : void 0,
                  s
                );
              };
            }
          );
        }),
        T.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            T.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        T.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        T.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            T.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var Zt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (T.proxy = function (e, t) {
        var n, i, o;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
          return (
            (i = a.call(arguments, 2)),
            ((o = function () {
              return e.apply(t || this, i.concat(a.call(arguments)));
            }).guid = e.guid =
              e.guid || T.guid++),
            o
          );
      }),
        (T.holdReady = function (e) {
          e ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = O),
        (T.isFunction = m),
        (T.isWindow = y),
        (T.camelCase = V),
        (T.type = k),
        (T.now = Date.now),
        (T.isNumeric = function (e) {
          var t = T.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (T.trim = function (e) {
          return null == e ? "" : (e + "").replace(Zt, "");
        }),
        void 0 ===
          (i = function () {
            return T;
          }.apply(t, [])) || (e.exports = i);
      var Qt = n.jQuery,
        Kt = n.$;
      return (
        (T.noConflict = function (e) {
          return (
            n.$ === T && (n.$ = Kt), e && n.jQuery === T && (n.jQuery = Qt), T
          );
        }),
        void 0 === o && (n.jQuery = n.$ = T),
        T
      );
    });
  },
  1: function (e, t, n) {
    var i, o, r;
    /*!
     * JavaScript Cookie v2.2.1
     * https://github.com/js-cookie/js-cookie
     *
     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
     * Released under the MIT license
     */ (r = function () {
      function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n) t[i] = n[i];
        }
        return t;
      }
      function t(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return (function n(i) {
        function o() {}
        function r(t, n, r) {
          if ("undefined" != typeof document) {
            "number" == typeof (r = e({ path: "/" }, o.defaults, r)).expires &&
              (r.expires = new Date(1 * new Date() + 864e5 * r.expires)),
              (r.expires = r.expires ? r.expires.toUTCString() : "");
            try {
              var s = JSON.stringify(n);
              /^[\{\[]/.test(s) && (n = s);
            } catch (e) {}
            (n = i.write
              ? i.write(n, t)
              : encodeURIComponent(String(n)).replace(
                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                  decodeURIComponent
                )),
              (t = encodeURIComponent(String(t))
                .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                .replace(/[\(\)]/g, escape));
            var a = "";
            for (var l in r)
              r[l] &&
                ((a += "; " + l),
                !0 !== r[l] && (a += "=" + r[l].split(";")[0]));
            return (document.cookie = t + "=" + n + a);
          }
        }
        function s(e, n) {
          if ("undefined" != typeof document) {
            for (
              var o = {},
                r = document.cookie ? document.cookie.split("; ") : [],
                s = 0;
              s < r.length;
              s++
            ) {
              var a = r[s].split("="),
                l = a.slice(1).join("=");
              n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
              try {
                var c = t(a[0]);
                if (((l = (i.read || i)(l, c) || t(l)), n))
                  try {
                    l = JSON.parse(l);
                  } catch (e) {}
                if (((o[c] = l), e === c)) break;
              } catch (e) {}
            }
            return e ? o[e] : o;
          }
        }
        return (
          (o.set = r),
          (o.get = function (e) {
            return s(e, !1);
          }),
          (o.getJSON = function (e) {
            return s(e, !0);
          }),
          (o.remove = function (t, n) {
            r(t, "", e(n, { expires: -1 }));
          }),
          (o.defaults = {}),
          (o.withConverter = n),
          o
        );
      })(function () {});
    }),
      void 0 === (o = "function" == typeof (i = r) ? i.call(t, n, t, e) : i) ||
        (e.exports = o),
      (e.exports = r());
  },
  10: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var i = n(2);
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    n(86), n(88);
    var r = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.dom = t),
          this.setupComponentIcon();
      }
      var t, n;
      return (
        (t = e),
        (n = [
          {
            key: "setupComponentIcon",
            value: function () {
              $(".product-listing-banner").each(function (e, t) {
                $(t)
                  .find(".product-listing-banner-holder")
                  .slick({
                    speed: 300,
                    adaptiveHeight: !0,
                    autoplay: !0,
                    lazyLoaded: !0,
                    arrows: !0,
                    autoplaySpeed: i.a.slider.autoplaySpeed,
                    dots: !0,
                    appendDots: $(".product-listing-dots").eq(e),
                  });
              });
            },
          },
        ]) && o(t.prototype, n),
        e
      );
    })();
  },
  112: function (e, t) {},
  114: function (e, t) {},
  116: function (e, t) {},
  118: function (e, t) {},
  17: function (e, t, n) {
    "use strict";
    /**
  stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
  @version v3.7.9
  @link https://github.com/yowainwright/stickybits#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/ function i() {
      return (i =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }).apply(this, arguments);
    }
    var o = (function () {
      function e(e, t) {
        var n = this,
          i = void 0 !== t ? t : {};
        (this.version = "3.7.9"),
          (this.userAgent =
            window.navigator.userAgent ||
            "no `userAgent` provided by the browser"),
          (this.props = {
            customStickyChangeNumber: i.customStickyChangeNumber || null,
            noStyles: i.noStyles || !1,
            stickyBitStickyOffset: i.stickyBitStickyOffset || 0,
            parentClass: i.parentClass || "js-stickybit-parent",
            scrollEl:
              "string" == typeof i.scrollEl
                ? document.querySelector(i.scrollEl)
                : i.scrollEl || window,
            stickyClass: i.stickyClass || "js-is-sticky",
            stuckClass: i.stuckClass || "js-is-stuck",
            stickyChangeClass: i.stickyChangeClass || "js-is-sticky--change",
            useStickyClasses: i.useStickyClasses || !1,
            useFixed: i.useFixed || !1,
            useGetBoundingClientRect: i.useGetBoundingClientRect || !1,
            verticalPosition: i.verticalPosition || "top",
            applyStyle:
              i.applyStyle ||
              function (e, t) {
                return n.applyStyle(e, t);
              },
          }),
          (this.props.positionVal = this.definePosition() || "fixed"),
          (this.instances = []);
        var o = this.props,
          r = o.positionVal,
          s = o.verticalPosition,
          a = o.noStyles,
          l = o.stickyBitStickyOffset,
          c = "top" !== s || a ? "" : l + "px",
          u = "fixed" !== r ? r : "";
        (this.els = "string" == typeof e ? document.querySelectorAll(e) : e),
          "length" in this.els || (this.els = [this.els]);
        for (var d = 0; d < this.els.length; d++) {
          var p,
            f = this.els[d],
            h = this.addInstance(f, this.props);
          this.props.applyStyle(
            {
              styles: ((p = {}), (p[s] = c), (p.position = u), p),
              classes: {},
            },
            h
          ),
            this.manageState(h),
            this.instances.push(h);
        }
      }
      var t = e.prototype;
      return (
        (t.definePosition = function () {
          var e;
          if (this.props.useFixed) e = "fixed";
          else {
            for (
              var t = ["", "-o-", "-webkit-", "-moz-", "-ms-"],
                n = document.head.style,
                i = 0;
              i < t.length;
              i += 1
            )
              n.position = t[i] + "sticky";
            (e = n.position ? n.position : "fixed"), (n.position = "");
          }
          return e;
        }),
        (t.addInstance = function (e, t) {
          var n = this,
            i = { el: e, parent: e.parentNode, props: t };
          if ("fixed" === t.positionVal || t.useStickyClasses) {
            this.isWin = this.props.scrollEl === window;
            var o = this.isWin
              ? window
              : this.getClosestParent(i.el, i.props.scrollEl);
            this.computeScrollOffsets(i),
              this.toggleClasses(i.parent, "", t.parentClass),
              (i.state = "default"),
              (i.stateChange = "default"),
              (i.stateContainer = function () {
                return n.manageState(i);
              }),
              o.addEventListener("scroll", i.stateContainer);
          }
          return i;
        }),
        (t.getClosestParent = function (e, t) {
          var n = t,
            i = e;
          if (i.parentElement === n) return n;
          for (; i.parentElement !== n; ) i = i.parentElement;
          return n;
        }),
        (t.getTopPosition = function (e) {
          if (this.props.useGetBoundingClientRect)
            return (
              e.getBoundingClientRect().top +
              (this.props.scrollEl.pageYOffset ||
                document.documentElement.scrollTop)
            );
          var t = 0;
          do {
            t = e.offsetTop + t;
          } while ((e = e.offsetParent));
          return t;
        }),
        (t.computeScrollOffsets = function (e) {
          var t = e,
            n = t.props,
            i = t.el,
            o = t.parent,
            r = !this.isWin && "fixed" === n.positionVal,
            s = "bottom" !== n.verticalPosition,
            a = r ? this.getTopPosition(n.scrollEl) : 0,
            l = r ? this.getTopPosition(o) - a : this.getTopPosition(o),
            c =
              null !== n.customStickyChangeNumber
                ? n.customStickyChangeNumber
                : i.offsetHeight,
            u = l + o.offsetHeight;
          (t.offset = r ? 0 : a + n.stickyBitStickyOffset),
            (t.stickyStart = s ? l - t.offset : 0),
            (t.stickyChange = t.stickyStart + c),
            (t.stickyStop = s
              ? u - (i.offsetHeight + t.offset)
              : u - window.innerHeight);
        }),
        (t.toggleClasses = function (e, t, n) {
          var i = e,
            o = i.className.split(" ");
          n && -1 === o.indexOf(n) && o.push(n);
          var r = o.indexOf(t);
          -1 !== r && o.splice(r, 1), (i.className = o.join(" "));
        }),
        (t.manageState = function (e) {
          var t = this,
            n = e,
            o = n.props,
            r = n.state,
            s = n.stateChange,
            a = n.stickyStart,
            l = n.stickyChange,
            c = n.stickyStop,
            u = o.positionVal,
            d = o.scrollEl,
            p = o.stickyClass,
            f = o.stickyChangeClass,
            h = o.stuckClass,
            g = o.verticalPosition,
            v = "bottom" !== g,
            m = o.applyStyle,
            y = o.noStyles,
            b =
              (this.isWin &&
                (window.requestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.msRequestAnimationFrame)) ||
              function (e) {
                e();
              },
            w = this.isWin ? window.scrollY || window.pageYOffset : d.scrollTop,
            x = v && w <= a && ("sticky" === r || "stuck" === r),
            k = w >= c && "sticky" === r;
          w > a && w < c && ("default" === r || "stuck" === r)
            ? (n.state = "sticky")
            : x
            ? (n.state = "default")
            : k && (n.state = "stuck");
          var T = w >= l && w <= c;
          w < l / 2 || w > c
            ? (n.stateChange = "default")
            : T && (n.stateChange = "sticky"),
            (r === n.state && s === n.stateChange) ||
              b(function () {
                var r,
                  s,
                  a,
                  l,
                  c,
                  d,
                  v = {
                    sticky: {
                      styles:
                        ((r = { position: u, top: "", bottom: "" }),
                        (r[g] = o.stickyBitStickyOffset + "px"),
                        r),
                      classes: ((s = {}), (s[p] = !0), s),
                    },
                    default: {
                      styles: ((a = {}), (a[g] = ""), a),
                      classes: {},
                    },
                    stuck: {
                      styles: i(
                        ((l = {}), (l[g] = ""), l),
                        ("fixed" === u && !y) || !t.isWin
                          ? { position: "absolute", top: "", bottom: "0" }
                          : {}
                      ),
                      classes: ((c = {}), (c[h] = !0), c),
                    },
                  };
                "fixed" === u && (v.default.styles.position = "");
                var b = v[n.state];
                (b.classes =
                  (((d = {})[h] = !!b.classes[h]),
                  (d[p] = !!b.classes[p]),
                  (d[f] = T),
                  d)),
                  m(b, e);
              });
        }),
        (t.applyStyle = function (e, t) {
          var n = e.styles,
            i = e.classes,
            o = t,
            r = o.el,
            s = o.props,
            a = r.style,
            l = s.noStyles,
            c = r.className.split(" ");
          for (var u in i)
            if (i[u]) -1 === c.indexOf(u) && c.push(u);
            else {
              var d = c.indexOf(u);
              -1 !== d && c.splice(d, 1);
            }
          if (
            ((r.className = c.join(" ")),
            n.position && (a.position = n.position),
            !l)
          )
            for (var p in n) a[p] = n[p];
        }),
        (t.update = function (e) {
          var t = this;
          return (
            void 0 === e && (e = null),
            this.instances.forEach(function (n) {
              if ((t.computeScrollOffsets(n), e))
                for (var i in e) n.props[i] = e[i];
            }),
            this
          );
        }),
        (t.removeInstance = function (e) {
          var t,
            n,
            i = e.el,
            o = e.props;
          this.applyStyle(
            {
              styles: ((t = { position: "" }), (t[o.verticalPosition] = ""), t),
              classes:
                ((n = {}), (n[o.stickyClass] = ""), (n[o.stuckClass] = ""), n),
            },
            e
          ),
            this.toggleClasses(i.parentNode, o.parentClass);
        }),
        (t.cleanup = function () {
          for (var e = 0; e < this.instances.length; e += 1) {
            var t = this.instances[e];
            t.stateContainer &&
              t.props.scrollEl.removeEventListener("scroll", t.stateContainer),
              this.removeInstance(t);
          }
          (this.manageState = !1), (this.instances = []);
        }),
        e
      );
    })();
    t.a = function (e, t) {
      return new o(e, t);
    };
  },
  2: function (e, t, n) {
    "use strict";
    t.a = {
      contactUsAPI: {
        development:
          "https://ntsg76dg8c.execute-api.ap-southeast-1.amazonaws.com/default/hisense-email-sending-uat",
        uat: "https://ntsg76dg8c.execute-api.ap-southeast-1.amazonaws.com/default/hisense-email-sending-uat",
        production:
          "https://bszsl34bib.execute-api.ap-southeast-1.amazonaws.com/default/hisense-email-sending",
      },
      slider: { autoplaySpeed: 5e3 },
      "GA-ID": "UA-119415974-1",
    };
  },
  3: function (e, t, n) {
    "use strict";
    var i = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        timelineOffset: 0,
      },
      o = {
        duration: 1e3,
        delay: 0,
        endDelay: 0,
        easing: "easeOutElastic(1, .5)",
        round: 0,
      },
      r = [
        "translateX",
        "translateY",
        "translateZ",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "scale",
        "scaleX",
        "scaleY",
        "scaleZ",
        "skew",
        "skewX",
        "skewY",
        "perspective",
        "matrix",
        "matrix3d",
      ],
      s = { CSS: {}, springs: {} };
    function a(e, t, n) {
      return Math.min(Math.max(e, t), n);
    }
    function l(e, t) {
      return e.indexOf(t) > -1;
    }
    function c(e, t) {
      return e.apply(null, t);
    }
    var u = {
      arr: function (e) {
        return Array.isArray(e);
      },
      obj: function (e) {
        return l(Object.prototype.toString.call(e), "Object");
      },
      pth: function (e) {
        return u.obj(e) && e.hasOwnProperty("totalLength");
      },
      svg: function (e) {
        return e instanceof SVGElement;
      },
      inp: function (e) {
        return e instanceof HTMLInputElement;
      },
      dom: function (e) {
        return e.nodeType || u.svg(e);
      },
      str: function (e) {
        return "string" == typeof e;
      },
      fnc: function (e) {
        return "function" == typeof e;
      },
      und: function (e) {
        return void 0 === e;
      },
      nil: function (e) {
        return u.und(e) || null === e;
      },
      hex: function (e) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
      },
      rgb: function (e) {
        return /^rgb/.test(e);
      },
      hsl: function (e) {
        return /^hsl/.test(e);
      },
      col: function (e) {
        return u.hex(e) || u.rgb(e) || u.hsl(e);
      },
      key: function (e) {
        return (
          !i.hasOwnProperty(e) &&
          !o.hasOwnProperty(e) &&
          "targets" !== e &&
          "keyframes" !== e
        );
      },
    };
    function d(e) {
      var t = /\(([^)]+)\)/.exec(e);
      return t
        ? t[1].split(",").map(function (e) {
            return parseFloat(e);
          })
        : [];
    }
    function p(e, t) {
      var n = d(e),
        i = a(u.und(n[0]) ? 1 : n[0], 0.1, 100),
        o = a(u.und(n[1]) ? 100 : n[1], 0.1, 100),
        r = a(u.und(n[2]) ? 10 : n[2], 0.1, 100),
        l = a(u.und(n[3]) ? 0 : n[3], 0.1, 100),
        c = Math.sqrt(o / i),
        p = r / (2 * Math.sqrt(o * i)),
        f = p < 1 ? c * Math.sqrt(1 - p * p) : 0,
        h = p < 1 ? (p * c - l) / f : -l + c;
      function g(e) {
        var n = t ? (t * e) / 1e3 : e;
        return (
          (n =
            p < 1
              ? Math.exp(-n * p * c) *
                (1 * Math.cos(f * n) + h * Math.sin(f * n))
              : (1 + h * n) * Math.exp(-n * c)),
          0 === e || 1 === e ? e : 1 - n
        );
      }
      return t
        ? g
        : function () {
            var t = s.springs[e];
            if (t) return t;
            for (var n = 0, i = 0; ; )
              if (1 === g((n += 1 / 6))) {
                if (++i >= 16) break;
              } else i = 0;
            var o = n * (1 / 6) * 1e3;
            return (s.springs[e] = o), o;
          };
    }
    function f(e) {
      return (
        void 0 === e && (e = 10),
        function (t) {
          return Math.ceil(a(t, 1e-6, 1) * e) * (1 / e);
        }
      );
    }
    var h,
      g,
      v = (function () {
        function e(e, t) {
          return 1 - 3 * t + 3 * e;
        }
        function t(e, t) {
          return 3 * t - 6 * e;
        }
        function n(e) {
          return 3 * e;
        }
        function i(i, o, r) {
          return ((e(o, r) * i + t(o, r)) * i + n(o)) * i;
        }
        function o(i, o, r) {
          return 3 * e(o, r) * i * i + 2 * t(o, r) * i + n(o);
        }
        return function (e, t, n, r) {
          if (0 <= e && e <= 1 && 0 <= n && n <= 1) {
            var s = new Float32Array(11);
            if (e !== t || n !== r)
              for (var a = 0; a < 11; ++a) s[a] = i(0.1 * a, e, n);
            return function (o) {
              return (e === t && n === r) || 0 === o || 1 === o
                ? o
                : i(l(o), t, r);
            };
          }
          function l(t) {
            for (var r = 0, a = 1; 10 !== a && s[a] <= t; ++a) r += 0.1;
            --a;
            var l = r + ((t - s[a]) / (s[a + 1] - s[a])) * 0.1,
              c = o(l, e, n);
            return c >= 0.001
              ? (function (e, t, n, r) {
                  for (var s = 0; s < 4; ++s) {
                    var a = o(t, n, r);
                    if (0 === a) return t;
                    t -= (i(t, n, r) - e) / a;
                  }
                  return t;
                })(t, l, e, n)
              : 0 === c
              ? l
              : (function (e, t, n, o, r) {
                  var s,
                    a,
                    l = 0;
                  do {
                    (s = i((a = t + (n - t) / 2), o, r) - e) > 0
                      ? (n = a)
                      : (t = a);
                  } while (Math.abs(s) > 1e-7 && ++l < 10);
                  return a;
                })(t, r, r + 0.1, e, n);
          }
        };
      })(),
      m =
        ((h = {
          linear: function () {
            return function (e) {
              return e;
            };
          },
        }),
        (g = {
          Sine: function () {
            return function (e) {
              return 1 - Math.cos((e * Math.PI) / 2);
            };
          },
          Circ: function () {
            return function (e) {
              return 1 - Math.sqrt(1 - e * e);
            };
          },
          Back: function () {
            return function (e) {
              return e * e * (3 * e - 2);
            };
          },
          Bounce: function () {
            return function (e) {
              for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11; );
              return (
                1 / Math.pow(4, 3 - n) -
                7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
              );
            };
          },
          Elastic: function (e, t) {
            void 0 === e && (e = 1), void 0 === t && (t = 0.5);
            var n = a(e, 1, 10),
              i = a(t, 0.1, 2);
            return function (e) {
              return 0 === e || 1 === e
                ? e
                : -n *
                    Math.pow(2, 10 * (e - 1)) *
                    Math.sin(
                      ((e - 1 - (i / (2 * Math.PI)) * Math.asin(1 / n)) *
                        (2 * Math.PI)) /
                        i
                    );
            };
          },
        }),
        ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (e, t) {
          g[e] = function () {
            return function (e) {
              return Math.pow(e, t + 2);
            };
          };
        }),
        Object.keys(g).forEach(function (e) {
          var t = g[e];
          (h["easeIn" + e] = t),
            (h["easeOut" + e] = function (e, n) {
              return function (i) {
                return 1 - t(e, n)(1 - i);
              };
            }),
            (h["easeInOut" + e] = function (e, n) {
              return function (i) {
                return i < 0.5
                  ? t(e, n)(2 * i) / 2
                  : 1 - t(e, n)(-2 * i + 2) / 2;
              };
            }),
            (h["easeOutIn" + e] = function (e, n) {
              return function (i) {
                return i < 0.5
                  ? (1 - t(e, n)(1 - 2 * i)) / 2
                  : (t(e, n)(2 * i - 1) + 1) / 2;
              };
            });
        }),
        h);
    function y(e, t) {
      if (u.fnc(e)) return e;
      var n = e.split("(")[0],
        i = m[n],
        o = d(e);
      switch (n) {
        case "spring":
          return p(e, t);
        case "cubicBezier":
          return c(v, o);
        case "steps":
          return c(f, o);
        default:
          return c(i, o);
      }
    }
    function b(e) {
      try {
        return document.querySelectorAll(e);
      } catch (e) {
        return;
      }
    }
    function w(e, t) {
      for (
        var n = e.length,
          i = arguments.length >= 2 ? arguments[1] : void 0,
          o = [],
          r = 0;
        r < n;
        r++
      )
        if (r in e) {
          var s = e[r];
          t.call(i, s, r, e) && o.push(s);
        }
      return o;
    }
    function x(e) {
      return e.reduce(function (e, t) {
        return e.concat(u.arr(t) ? x(t) : t);
      }, []);
    }
    function k(e) {
      return u.arr(e)
        ? e
        : (u.str(e) && (e = b(e) || e),
          e instanceof NodeList || e instanceof HTMLCollection
            ? [].slice.call(e)
            : [e]);
    }
    function T(e, t) {
      return e.some(function (e) {
        return e === t;
      });
    }
    function C(e) {
      var t = {};
      for (var n in e) t[n] = e[n];
      return t;
    }
    function S(e, t) {
      var n = C(e);
      for (var i in e) n[i] = t.hasOwnProperty(i) ? t[i] : e[i];
      return n;
    }
    function E(e, t) {
      var n = C(e);
      for (var i in t) n[i] = u.und(e[i]) ? t[i] : e[i];
      return n;
    }
    function $(e) {
      var t =
        /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
          e
        );
      if (t) return t[1];
    }
    function A(e, t) {
      return u.fnc(e) ? e(t.target, t.id, t.total) : e;
    }
    function O(e, t) {
      return e.getAttribute(t);
    }
    function I(e, t, n) {
      if (T([n, "deg", "rad", "turn"], $(t))) return t;
      var i = s.CSS[t + n];
      if (!u.und(i)) return i;
      var o = document.createElement(e.tagName),
        r =
          e.parentNode && e.parentNode !== document
            ? e.parentNode
            : document.body;
      r.appendChild(o),
        (o.style.position = "absolute"),
        (o.style.width = 100 + n);
      var a = 100 / o.offsetWidth;
      r.removeChild(o);
      var l = a * parseFloat(t);
      return (s.CSS[t + n] = l), l;
    }
    function P(e, t, n) {
      if (t in e.style) {
        var i = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
          o = e.style[t] || getComputedStyle(e).getPropertyValue(i) || "0";
        return n ? I(e, o, n) : o;
      }
    }
    function j(e, t) {
      return u.dom(e) && !u.inp(e) && (!u.nil(O(e, t)) || (u.svg(e) && e[t]))
        ? "attribute"
        : u.dom(e) && T(r, t)
        ? "transform"
        : u.dom(e) && "transform" !== t && P(e, t)
        ? "css"
        : null != e[t]
        ? "object"
        : void 0;
    }
    function D(e) {
      if (u.dom(e)) {
        for (
          var t,
            n = e.style.transform || "",
            i = /(\w+)\(([^)]*)\)/g,
            o = new Map();
          (t = i.exec(n));

        )
          o.set(t[1], t[2]);
        return o;
      }
    }
    function M(e, t, n, i) {
      switch (j(e, t)) {
        case "transform":
          return (function (e, t, n, i) {
            var o = l(t, "scale")
                ? 1
                : 0 +
                  (function (e) {
                    return l(e, "translate") || "perspective" === e
                      ? "px"
                      : l(e, "rotate") || l(e, "skew")
                      ? "deg"
                      : void 0;
                  })(t),
              r = D(e).get(t) || o;
            return (
              n && (n.transforms.list.set(t, r), (n.transforms.last = t)),
              i ? I(e, r, i) : r
            );
          })(e, t, i, n);
        case "css":
          return P(e, t, n);
        case "attribute":
          return O(e, t);
        default:
          return e[t] || 0;
      }
    }
    function L(e, t) {
      var n = /^(\*=|\+=|-=)/.exec(e);
      if (!n) return e;
      var i = $(e) || 0,
        o = parseFloat(t),
        r = parseFloat(e.replace(n[0], ""));
      switch (n[0][0]) {
        case "+":
          return o + r + i;
        case "-":
          return o - r + i;
        case "*":
          return o * r + i;
      }
    }
    function N(e, t) {
      if (u.col(e))
        return (function (e) {
          return u.rgb(e)
            ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((t = e)))
              ? "rgba(" + n[1] + ",1)"
              : t
            : u.hex(e)
            ? (function (e) {
                var t = e.replace(
                    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                    function (e, t, n, i) {
                      return t + t + n + n + i + i;
                    }
                  ),
                  n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                return (
                  "rgba(" +
                  parseInt(n[1], 16) +
                  "," +
                  parseInt(n[2], 16) +
                  "," +
                  parseInt(n[3], 16) +
                  ",1)"
                );
              })(e)
            : u.hsl(e)
            ? (function (e) {
                var t,
                  n,
                  i,
                  o =
                    /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
                    /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                      e
                    ),
                  r = parseInt(o[1], 10) / 360,
                  s = parseInt(o[2], 10) / 100,
                  a = parseInt(o[3], 10) / 100,
                  l = o[4] || 1;
                function c(e, t, n) {
                  return (
                    n < 0 && (n += 1),
                    n > 1 && (n -= 1),
                    n < 1 / 6
                      ? e + 6 * (t - e) * n
                      : n < 0.5
                      ? t
                      : n < 2 / 3
                      ? e + (t - e) * (2 / 3 - n) * 6
                      : e
                  );
                }
                if (0 == s) t = n = i = a;
                else {
                  var u = a < 0.5 ? a * (1 + s) : a + s - a * s,
                    d = 2 * a - u;
                  (t = c(d, u, r + 1 / 3)),
                    (n = c(d, u, r)),
                    (i = c(d, u, r - 1 / 3));
                }
                return (
                  "rgba(" +
                  255 * t +
                  "," +
                  255 * n +
                  "," +
                  255 * i +
                  "," +
                  l +
                  ")"
                );
              })(e)
            : void 0;
          var t, n;
        })(e);
      if (/\s/g.test(e)) return e;
      var n = $(e),
        i = n ? e.substr(0, e.length - n.length) : e;
      return t ? i + t : i;
    }
    function H(e, t) {
      return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
    }
    function _(e) {
      for (var t, n = e.points, i = 0, o = 0; o < n.numberOfItems; o++) {
        var r = n.getItem(o);
        o > 0 && (i += H(t, r)), (t = r);
      }
      return i;
    }
    function z(e) {
      if (e.getTotalLength) return e.getTotalLength();
      switch (e.tagName.toLowerCase()) {
        case "circle":
          return (function (e) {
            return 2 * Math.PI * O(e, "r");
          })(e);
        case "rect":
          return (function (e) {
            return 2 * O(e, "width") + 2 * O(e, "height");
          })(e);
        case "line":
          return (function (e) {
            return H(
              { x: O(e, "x1"), y: O(e, "y1") },
              { x: O(e, "x2"), y: O(e, "y2") }
            );
          })(e);
        case "polyline":
          return _(e);
        case "polygon":
          return (function (e) {
            var t = e.points;
            return _(e) + H(t.getItem(t.numberOfItems - 1), t.getItem(0));
          })(e);
      }
    }
    function q(e, t) {
      var n = t || {},
        i =
          n.el ||
          (function (e) {
            for (var t = e.parentNode; u.svg(t) && u.svg(t.parentNode); )
              t = t.parentNode;
            return t;
          })(e),
        o = i.getBoundingClientRect(),
        r = O(i, "viewBox"),
        s = o.width,
        a = o.height,
        l = n.viewBox || (r ? r.split(" ") : [0, 0, s, a]);
      return {
        el: i,
        viewBox: l,
        x: l[0] / 1,
        y: l[1] / 1,
        w: s,
        h: a,
        vW: l[2],
        vH: l[3],
      };
    }
    function R(e, t, n) {
      function i(n) {
        void 0 === n && (n = 0);
        var i = t + n >= 1 ? t + n : 0;
        return e.el.getPointAtLength(i);
      }
      var o = q(e.el, e.svg),
        r = i(),
        s = i(-1),
        a = i(1),
        l = n ? 1 : o.w / o.vW,
        c = n ? 1 : o.h / o.vH;
      switch (e.property) {
        case "x":
          return (r.x - o.x) * l;
        case "y":
          return (r.y - o.y) * c;
        case "angle":
          return (180 * Math.atan2(a.y - s.y, a.x - s.x)) / Math.PI;
      }
    }
    function F(e, t) {
      var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
        i = N(u.pth(e) ? e.totalLength : e, t) + "";
      return {
        original: i,
        numbers: i.match(n) ? i.match(n).map(Number) : [0],
        strings: u.str(e) || t ? i.split(n) : [],
      };
    }
    function B(e) {
      return w(e ? x(u.arr(e) ? e.map(k) : k(e)) : [], function (e, t, n) {
        return n.indexOf(e) === t;
      });
    }
    function W(e) {
      var t = B(e);
      return t.map(function (e, n) {
        return {
          target: e,
          id: n,
          total: t.length,
          transforms: { list: D(e) },
        };
      });
    }
    function U(e, t) {
      var n = C(t);
      if ((/^spring/.test(n.easing) && (n.duration = p(n.easing)), u.arr(e))) {
        var i = e.length;
        2 !== i || u.obj(e[0])
          ? u.fnc(t.duration) || (n.duration = t.duration / i)
          : (e = { value: e });
      }
      var o = u.arr(e) ? e : [e];
      return o
        .map(function (e, n) {
          var i = u.obj(e) && !u.pth(e) ? e : { value: e };
          return (
            u.und(i.delay) && (i.delay = n ? 0 : t.delay),
            u.und(i.endDelay) &&
              (i.endDelay = n === o.length - 1 ? t.endDelay : 0),
            i
          );
        })
        .map(function (e) {
          return E(e, n);
        });
    }
    function X(e, t) {
      var n = [],
        i = t.keyframes;
      for (var o in (i &&
        (t = E(
          (function (e) {
            for (
              var t = w(
                  x(
                    e.map(function (e) {
                      return Object.keys(e);
                    })
                  ),
                  function (e) {
                    return u.key(e);
                  }
                ).reduce(function (e, t) {
                  return e.indexOf(t) < 0 && e.push(t), e;
                }, []),
                n = {},
                i = function (i) {
                  var o = t[i];
                  n[o] = e.map(function (e) {
                    var t = {};
                    for (var n in e)
                      u.key(n) ? n == o && (t.value = e[n]) : (t[n] = e[n]);
                    return t;
                  });
                },
                o = 0;
              o < t.length;
              o++
            )
              i(o);
            return n;
          })(i),
          t
        )),
      t))
        u.key(o) && n.push({ name: o, tweens: U(t[o], e) });
      return n;
    }
    var Y = {
      css: function (e, t, n) {
        return (e.style[t] = n);
      },
      attribute: function (e, t, n) {
        return e.setAttribute(t, n);
      },
      object: function (e, t, n) {
        return (e[t] = n);
      },
      transform: function (e, t, n, i, o) {
        if ((i.list.set(t, n), t === i.last || o)) {
          var r = "";
          i.list.forEach(function (e, t) {
            r += t + "(" + e + ") ";
          }),
            (e.style.transform = r);
        }
      },
    };
    function V(e, t) {
      W(e).forEach(function (e) {
        for (var n in t) {
          var i = A(t[n], e),
            o = e.target,
            r = $(i),
            s = M(o, n, r, e),
            a = L(N(i, r || $(s)), s),
            l = j(o, n);
          Y[l](o, n, a, e.transforms, !0);
        }
      });
    }
    function G(e, t) {
      return w(
        x(
          e.map(function (e) {
            return t.map(function (t) {
              return (function (e, t) {
                var n = j(e.target, t.name);
                if (n) {
                  var i = (function (e, t) {
                      var n;
                      return e.tweens.map(function (i) {
                        var o = (function (e, t) {
                            var n = {};
                            for (var i in e) {
                              var o = A(e[i], t);
                              u.arr(o) &&
                                1 ===
                                  (o = o.map(function (e) {
                                    return A(e, t);
                                  })).length &&
                                (o = o[0]),
                                (n[i] = o);
                            }
                            return (
                              (n.duration = parseFloat(n.duration)),
                              (n.delay = parseFloat(n.delay)),
                              n
                            );
                          })(i, t),
                          r = o.value,
                          s = u.arr(r) ? r[1] : r,
                          a = $(s),
                          l = M(t.target, e.name, a, t),
                          c = n ? n.to.original : l,
                          d = u.arr(r) ? r[0] : c,
                          p = $(d) || $(l),
                          f = a || p;
                        return (
                          u.und(s) && (s = c),
                          (o.from = F(d, f)),
                          (o.to = F(L(s, d), f)),
                          (o.start = n ? n.end : 0),
                          (o.end = o.start + o.delay + o.duration + o.endDelay),
                          (o.easing = y(o.easing, o.duration)),
                          (o.isPath = u.pth(r)),
                          (o.isPathTargetInsideSVG =
                            o.isPath && u.svg(t.target)),
                          (o.isColor = u.col(o.from.original)),
                          o.isColor && (o.round = 1),
                          (n = o),
                          o
                        );
                      });
                    })(t, e),
                    o = i[i.length - 1];
                  return {
                    type: n,
                    property: t.name,
                    animatable: e,
                    tweens: i,
                    duration: o.end,
                    delay: i[0].delay,
                    endDelay: o.endDelay,
                  };
                }
              })(e, t);
            });
          })
        ),
        function (e) {
          return !u.und(e);
        }
      );
    }
    function Z(e, t) {
      var n = e.length,
        i = function (e) {
          return e.timelineOffset ? e.timelineOffset : 0;
        },
        o = {};
      return (
        (o.duration = n
          ? Math.max.apply(
              Math,
              e.map(function (e) {
                return i(e) + e.duration;
              })
            )
          : t.duration),
        (o.delay = n
          ? Math.min.apply(
              Math,
              e.map(function (e) {
                return i(e) + e.delay;
              })
            )
          : t.delay),
        (o.endDelay = n
          ? o.duration -
            Math.max.apply(
              Math,
              e.map(function (e) {
                return i(e) + e.duration - e.endDelay;
              })
            )
          : t.endDelay),
        o
      );
    }
    var Q = 0,
      K = [],
      J = (function () {
        var e;
        function t(n) {
          for (var i = K.length, o = 0; o < i; ) {
            var r = K[o];
            r.paused ? (K.splice(o, 1), i--) : (r.tick(n), o++);
          }
          e = o > 0 ? requestAnimationFrame(t) : void 0;
        }
        return (
          "undefined" != typeof document &&
            document.addEventListener("visibilitychange", function () {
              te.suspendWhenDocumentHidden &&
                (ee()
                  ? (e = cancelAnimationFrame(e))
                  : (K.forEach(function (e) {
                      return e._onDocumentVisibility();
                    }),
                    J()));
            }),
          function () {
            e ||
              (ee() && te.suspendWhenDocumentHidden) ||
              !(K.length > 0) ||
              (e = requestAnimationFrame(t));
          }
        );
      })();
    function ee() {
      return !!document && document.hidden;
    }
    function te(e) {
      void 0 === e && (e = {});
      var t,
        n = 0,
        r = 0,
        s = 0,
        l = 0,
        c = null;
      function u(e) {
        var t =
          window.Promise &&
          new Promise(function (e) {
            return (c = e);
          });
        return (e.finished = t), t;
      }
      var d = (function (e) {
        var t = S(i, e),
          n = S(o, e),
          r = X(n, e),
          s = W(e.targets),
          a = G(s, r),
          l = Z(a, n),
          c = Q;
        return (
          Q++,
          E(t, {
            id: c,
            children: [],
            animatables: s,
            animations: a,
            duration: l.duration,
            delay: l.delay,
            endDelay: l.endDelay,
          })
        );
      })(e);
      function p() {
        var e = d.direction;
        "alternate" !== e &&
          (d.direction = "normal" !== e ? "normal" : "reverse"),
          (d.reversed = !d.reversed),
          t.forEach(function (e) {
            return (e.reversed = d.reversed);
          });
      }
      function f(e) {
        return d.reversed ? d.duration - e : e;
      }
      function h() {
        (n = 0), (r = f(d.currentTime) * (1 / te.speed));
      }
      function g(e, t) {
        t && t.seek(e - t.timelineOffset);
      }
      function v(e) {
        for (var t = 0, n = d.animations, i = n.length; t < i; ) {
          var o = n[t],
            r = o.animatable,
            s = o.tweens,
            l = s.length - 1,
            c = s[l];
          l &&
            (c =
              w(s, function (t) {
                return e < t.end;
              })[0] || c);
          for (
            var u = a(e - c.start - c.delay, 0, c.duration) / c.duration,
              p = isNaN(u) ? 1 : c.easing(u),
              f = c.to.strings,
              h = c.round,
              g = [],
              v = c.to.numbers.length,
              m = void 0,
              y = 0;
            y < v;
            y++
          ) {
            var b = void 0,
              x = c.to.numbers[y],
              k = c.from.numbers[y] || 0;
            (b = c.isPath
              ? R(c.value, p * x, c.isPathTargetInsideSVG)
              : k + p * (x - k)),
              h && ((c.isColor && y > 2) || (b = Math.round(b * h) / h)),
              g.push(b);
          }
          var T = f.length;
          if (T) {
            m = f[0];
            for (var C = 0; C < T; C++) {
              f[C];
              var S = f[C + 1],
                E = g[C];
              isNaN(E) || (m += S ? E + S : E + " ");
            }
          } else m = g[0];
          Y[o.type](r.target, o.property, m, r.transforms),
            (o.currentValue = m),
            t++;
        }
      }
      function m(e) {
        d[e] && !d.passThrough && d[e](d);
      }
      function y(e) {
        var i = d.duration,
          o = d.delay,
          h = i - d.endDelay,
          y = f(e);
        (d.progress = a((y / i) * 100, 0, 100)),
          (d.reversePlayback = y < d.currentTime),
          t &&
            (function (e) {
              if (d.reversePlayback) for (var n = l; n--; ) g(e, t[n]);
              else for (var i = 0; i < l; i++) g(e, t[i]);
            })(y),
          !d.began && d.currentTime > 0 && ((d.began = !0), m("begin")),
          !d.loopBegan &&
            d.currentTime > 0 &&
            ((d.loopBegan = !0), m("loopBegin")),
          y <= o && 0 !== d.currentTime && v(0),
          ((y >= h && d.currentTime !== i) || !i) && v(i),
          y > o && y < h
            ? (d.changeBegan ||
                ((d.changeBegan = !0),
                (d.changeCompleted = !1),
                m("changeBegin")),
              m("change"),
              v(y))
            : d.changeBegan &&
              ((d.changeCompleted = !0),
              (d.changeBegan = !1),
              m("changeComplete")),
          (d.currentTime = a(y, 0, i)),
          d.began && m("update"),
          e >= i &&
            ((r = 0),
            d.remaining && !0 !== d.remaining && d.remaining--,
            d.remaining
              ? ((n = s),
                m("loopComplete"),
                (d.loopBegan = !1),
                "alternate" === d.direction && p())
              : ((d.paused = !0),
                d.completed ||
                  ((d.completed = !0),
                  m("loopComplete"),
                  m("complete"),
                  !d.passThrough && "Promise" in window && (c(), u(d)))));
      }
      return (
        u(d),
        (d.reset = function () {
          var e = d.direction;
          (d.passThrough = !1),
            (d.currentTime = 0),
            (d.progress = 0),
            (d.paused = !0),
            (d.began = !1),
            (d.loopBegan = !1),
            (d.changeBegan = !1),
            (d.completed = !1),
            (d.changeCompleted = !1),
            (d.reversePlayback = !1),
            (d.reversed = "reverse" === e),
            (d.remaining = d.loop),
            (t = d.children);
          for (var n = (l = t.length); n--; ) d.children[n].reset();
          ((d.reversed && !0 !== d.loop) ||
            ("alternate" === e && 1 === d.loop)) &&
            d.remaining++,
            v(d.reversed ? d.duration : 0);
        }),
        (d._onDocumentVisibility = h),
        (d.set = function (e, t) {
          return V(e, t), d;
        }),
        (d.tick = function (e) {
          (s = e), n || (n = s), y((s + (r - n)) * te.speed);
        }),
        (d.seek = function (e) {
          y(f(e));
        }),
        (d.pause = function () {
          (d.paused = !0), h();
        }),
        (d.play = function () {
          d.paused &&
            (d.completed && d.reset(), (d.paused = !1), K.push(d), h(), J());
        }),
        (d.reverse = function () {
          p(), (d.completed = !d.reversed), h();
        }),
        (d.restart = function () {
          d.reset(), d.play();
        }),
        (d.remove = function (e) {
          ie(B(e), d);
        }),
        d.reset(),
        d.autoplay && d.play(),
        d
      );
    }
    function ne(e, t) {
      for (var n = t.length; n--; )
        T(e, t[n].animatable.target) && t.splice(n, 1);
    }
    function ie(e, t) {
      var n = t.animations,
        i = t.children;
      ne(e, n);
      for (var o = i.length; o--; ) {
        var r = i[o],
          s = r.animations;
        ne(e, s), s.length || r.children.length || i.splice(o, 1);
      }
      n.length || i.length || t.pause();
    }
    (te.version = "3.2.1"),
      (te.speed = 1),
      (te.suspendWhenDocumentHidden = !0),
      (te.running = K),
      (te.remove = function (e) {
        for (var t = B(e), n = K.length; n--; ) ie(t, K[n]);
      }),
      (te.get = M),
      (te.set = V),
      (te.convertPx = I),
      (te.path = function (e, t) {
        var n = u.str(e) ? b(e)[0] : e,
          i = t || 100;
        return function (e) {
          return {
            property: e,
            el: n,
            svg: q(n),
            totalLength: z(n) * (i / 100),
          };
        };
      }),
      (te.setDashoffset = function (e) {
        var t = z(e);
        return e.setAttribute("stroke-dasharray", t), t;
      }),
      (te.stagger = function (e, t) {
        void 0 === t && (t = {});
        var n = t.direction || "normal",
          i = t.easing ? y(t.easing) : null,
          o = t.grid,
          r = t.axis,
          s = t.from || 0,
          a = "first" === s,
          l = "center" === s,
          c = "last" === s,
          d = u.arr(e),
          p = d ? parseFloat(e[0]) : parseFloat(e),
          f = d ? parseFloat(e[1]) : 0,
          h = $(d ? e[1] : e) || 0,
          g = t.start || 0 + (d ? p : 0),
          v = [],
          m = 0;
        return function (e, t, u) {
          if (
            (a && (s = 0), l && (s = (u - 1) / 2), c && (s = u - 1), !v.length)
          ) {
            for (var y = 0; y < u; y++) {
              if (o) {
                var b = l ? (o[0] - 1) / 2 : s % o[0],
                  w = l ? (o[1] - 1) / 2 : Math.floor(s / o[0]),
                  x = b - (y % o[0]),
                  k = w - Math.floor(y / o[0]),
                  T = Math.sqrt(x * x + k * k);
                "x" === r && (T = -x), "y" === r && (T = -k), v.push(T);
              } else v.push(Math.abs(s - y));
              m = Math.max.apply(Math, v);
            }
            i &&
              (v = v.map(function (e) {
                return i(e / m) * m;
              })),
              "reverse" === n &&
                (v = v.map(function (e) {
                  return r ? (e < 0 ? -1 * e : -e) : Math.abs(m - e);
                }));
          }
          return g + (d ? (f - p) / m : p) * (Math.round(100 * v[t]) / 100) + h;
        };
      }),
      (te.timeline = function (e) {
        void 0 === e && (e = {});
        var t = te(e);
        return (
          (t.duration = 0),
          (t.add = function (n, i) {
            var r = K.indexOf(t),
              s = t.children;
            function a(e) {
              e.passThrough = !0;
            }
            r > -1 && K.splice(r, 1);
            for (var l = 0; l < s.length; l++) a(s[l]);
            var c = E(n, S(o, e));
            c.targets = c.targets || e.targets;
            var d = t.duration;
            (c.autoplay = !1),
              (c.direction = t.direction),
              (c.timelineOffset = u.und(i) ? d : L(i, d)),
              a(t),
              t.seek(c.timelineOffset);
            var p = te(c);
            a(p), s.push(p);
            var f = Z(s, e);
            return (
              (t.delay = f.delay),
              (t.endDelay = f.endDelay),
              (t.duration = f.duration),
              t.seek(0),
              t.reset(),
              t.autoplay && t.play(),
              t
            );
          }),
          t
        );
      }),
      (te.easing = y),
      (te.penner = m),
      (te.random = function (e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e;
      }),
      (t.a = te);
  },
  4: function (e, t, n) {
    e.exports = (function () {
      "use strict";
      function e() {
        return (e =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var t = "undefined" != typeof window,
        n =
          (t && !("onscroll" in window)) ||
          ("undefined" != typeof navigator &&
            /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
        i = t && "IntersectionObserver" in window,
        o = t && "classList" in document.createElement("p"),
        r = t && window.devicePixelRatio > 1,
        s = {
          elements_selector: ".lazy",
          container: n || t ? document : null,
          threshold: 300,
          thresholds: null,
          data_src: "src",
          data_srcset: "srcset",
          data_sizes: "sizes",
          data_bg: "bg",
          data_bg_hidpi: "bg-hidpi",
          data_bg_multi: "bg-multi",
          data_bg_multi_hidpi: "bg-multi-hidpi",
          data_poster: "poster",
          class_applied: "applied",
          class_loading: "loading",
          class_loaded: "loaded",
          class_error: "error",
          class_entered: "entered",
          class_exited: "exited",
          unobserve_completed: !0,
          unobserve_entered: !1,
          cancel_on_exit: !0,
          callback_enter: null,
          callback_exit: null,
          callback_applied: null,
          callback_loading: null,
          callback_loaded: null,
          callback_error: null,
          callback_finish: null,
          callback_cancel: null,
          use_native: !1,
        },
        a = function (t) {
          return e({}, s, t);
        },
        l = function (e, t) {
          var n,
            i = "LazyLoad::Initialized",
            o = new e(t);
          try {
            n = new CustomEvent(i, { detail: { instance: o } });
          } catch (e) {
            (n = document.createEvent("CustomEvent")).initCustomEvent(
              i,
              !1,
              !1,
              { instance: o }
            );
          }
          window.dispatchEvent(n);
        },
        c = "loading",
        u = "loaded",
        d = "applied",
        p = "error",
        f = "native",
        h = function (e, t) {
          return e.getAttribute("data-" + t);
        },
        g = function (e) {
          return h(e, "ll-status");
        },
        v = function (e, t) {
          return (function (e, t, n) {
            var i = "data-ll-status";
            null !== n ? e.setAttribute(i, n) : e.removeAttribute(i);
          })(e, 0, t);
        },
        m = function (e) {
          return v(e, null);
        },
        y = function (e) {
          return null === g(e);
        },
        b = function (e) {
          return g(e) === f;
        },
        w = [c, u, d, p],
        x = function (e, t, n, i) {
          e && (void 0 === i ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, i));
        },
        k = function (e, t) {
          o
            ? e.classList.add(t)
            : (e.className += (e.className ? " " : "") + t);
        },
        T = function (e, t) {
          o
            ? e.classList.remove(t)
            : (e.className = e.className
                .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                .replace(/^\s+/, "")
                .replace(/\s+$/, ""));
        },
        C = function (e) {
          return e.llTempImage;
        },
        S = function (e, t) {
          if (t) {
            var n = t._observer;
            n && n.unobserve(e);
          }
        },
        E = function (e, t) {
          e && (e.loadingCount += t);
        },
        $ = function (e, t) {
          e && (e.toLoadCount = t);
        },
        A = function (e) {
          for (var t, n = [], i = 0; (t = e.children[i]); i += 1)
            "SOURCE" === t.tagName && n.push(t);
          return n;
        },
        O = function (e, t, n) {
          n && e.setAttribute(t, n);
        },
        I = function (e, t) {
          e.removeAttribute(t);
        },
        P = function (e) {
          return !!e.llOriginalAttrs;
        },
        j = function (e) {
          if (!P(e)) {
            var t = {};
            (t.src = e.getAttribute("src")),
              (t.srcset = e.getAttribute("srcset")),
              (t.sizes = e.getAttribute("sizes")),
              (e.llOriginalAttrs = t);
          }
        },
        D = function (e) {
          if (P(e)) {
            var t = e.llOriginalAttrs;
            O(e, "src", t.src),
              O(e, "srcset", t.srcset),
              O(e, "sizes", t.sizes);
          }
        },
        M = function (e, t) {
          O(e, "sizes", h(e, t.data_sizes)),
            O(e, "srcset", h(e, t.data_srcset)),
            O(e, "src", h(e, t.data_src));
        },
        L = function (e) {
          I(e, "src"), I(e, "srcset"), I(e, "sizes");
        },
        N = function (e, t) {
          var n = e.parentNode;
          n && "PICTURE" === n.tagName && A(n).forEach(t);
        },
        H = {
          IMG: function (e, t) {
            N(e, function (e) {
              j(e), M(e, t);
            }),
              j(e),
              M(e, t);
          },
          IFRAME: function (e, t) {
            O(e, "src", h(e, t.data_src));
          },
          VIDEO: function (e, t) {
            !(function (e, n) {
              A(e).forEach(function (e) {
                O(e, "src", h(e, t.data_src));
              });
            })(e),
              O(e, "poster", h(e, t.data_poster)),
              O(e, "src", h(e, t.data_src)),
              e.load();
          },
        },
        _ = function (e, t) {
          var n = H[e.tagName];
          n && n(e, t);
        },
        z = function (e, t, n) {
          E(n, 1), k(e, t.class_loading), v(e, c), x(t.callback_loading, e, n);
        },
        q = ["IMG", "IFRAME", "VIDEO"],
        R = function (e, t) {
          !t ||
            (function (e) {
              return e.loadingCount > 0;
            })(t) ||
            (function (e) {
              return e.toLoadCount > 0;
            })(t) ||
            x(e.callback_finish, t);
        },
        F = function (e, t, n) {
          e.addEventListener(t, n), (e.llEvLisnrs[t] = n);
        },
        B = function (e, t, n) {
          e.removeEventListener(t, n);
        },
        W = function (e) {
          return !!e.llEvLisnrs;
        },
        U = function (e) {
          if (W(e)) {
            var t = e.llEvLisnrs;
            for (var n in t) {
              var i = t[n];
              B(e, n, i);
            }
            delete e.llEvLisnrs;
          }
        },
        X = function (e, t, n) {
          !(function (e) {
            delete e.llTempImage;
          })(e),
            E(n, -1),
            (function (e) {
              e && (e.toLoadCount -= 1);
            })(n),
            T(e, t.class_loading),
            t.unobserve_completed && S(e, n);
        },
        Y = function (e, t, n) {
          var i = C(e) || e;
          W(i) ||
            (function (e, t, n) {
              W(e) || (e.llEvLisnrs = {});
              var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
              F(e, i, t), F(e, "error", n);
            })(
              i,
              function (o) {
                !(function (e, t, n, i) {
                  var o = b(t);
                  X(t, n, i),
                    k(t, n.class_loaded),
                    v(t, u),
                    x(n.callback_loaded, t, i),
                    o || R(n, i);
                })(0, e, t, n),
                  U(i);
              },
              function (o) {
                !(function (e, t, n, i) {
                  var o = b(t);
                  X(t, n, i),
                    k(t, n.class_error),
                    v(t, p),
                    x(n.callback_error, t, i),
                    o || R(n, i);
                })(0, e, t, n),
                  U(i);
              }
            );
        },
        V = function (e, t, n) {
          !(function (e) {
            return q.indexOf(e.tagName) > -1;
          })(e)
            ? (function (e, t, n) {
                !(function (e) {
                  e.llTempImage = document.createElement("IMG");
                })(e),
                  Y(e, t, n),
                  (function (e, t, n) {
                    var i = h(e, t.data_bg),
                      o = h(e, t.data_bg_hidpi),
                      s = r && o ? o : i;
                    s &&
                      ((e.style.backgroundImage = 'url("'.concat(s, '")')),
                      C(e).setAttribute("src", s),
                      z(e, t, n));
                  })(e, t, n),
                  (function (e, t, n) {
                    var i = h(e, t.data_bg_multi),
                      o = h(e, t.data_bg_multi_hidpi),
                      s = r && o ? o : i;
                    s &&
                      ((e.style.backgroundImage = s),
                      (function (e, t, n) {
                        k(e, t.class_applied),
                          v(e, d),
                          t.unobserve_completed && S(e, t),
                          x(t.callback_applied, e, n);
                      })(e, t, n));
                  })(e, t, n);
              })(e, t, n)
            : (function (e, t, n) {
                Y(e, t, n), _(e, t), z(e, t, n);
              })(e, t, n);
        },
        G = ["IMG", "IFRAME"],
        Z = function (e) {
          return e.use_native && "loading" in HTMLImageElement.prototype;
        },
        Q = function (e) {
          return Array.prototype.slice.call(e);
        },
        K = function (e) {
          return e.container.querySelectorAll(e.elements_selector);
        },
        J = function (e) {
          return (function (e) {
            return g(e) === p;
          })(e);
        },
        ee = function (e, t) {
          return (function (e) {
            return Q(e).filter(y);
          })(e || K(t));
        },
        te = function (e, n) {
          var o = a(e);
          (this._settings = o),
            (this.loadingCount = 0),
            (function (e, t) {
              i &&
                !Z(e) &&
                (t._observer = new IntersectionObserver(
                  function (n) {
                    !(function (e, t, n) {
                      e.forEach(function (e) {
                        return (function (e) {
                          return e.isIntersecting || e.intersectionRatio > 0;
                        })(e)
                          ? (function (e, t, n, i) {
                              v(e, "entered"),
                                k(e, n.class_entered),
                                T(e, n.class_exited),
                                (function (e, t, n) {
                                  t.unobserve_entered && S(e, n);
                                })(e, n, i),
                                x(n.callback_enter, e, t, i),
                                (function (e) {
                                  return w.indexOf(g(e)) >= 0;
                                })(e) || V(e, n, i);
                            })(e.target, e, t, n)
                          : (function (e, t, n, i) {
                              y(e) ||
                                (k(e, n.class_exited),
                                (function (e, t, n, i) {
                                  n.cancel_on_exit &&
                                    (function (e) {
                                      return g(e) === c;
                                    })(e) &&
                                    "IMG" === e.tagName &&
                                    (U(e),
                                    (function (e) {
                                      N(e, function (e) {
                                        L(e);
                                      }),
                                        L(e);
                                    })(e),
                                    (function (e) {
                                      N(e, function (e) {
                                        D(e);
                                      }),
                                        D(e);
                                    })(e),
                                    T(e, n.class_loading),
                                    E(i, -1),
                                    m(e),
                                    x(n.callback_cancel, e, t, i));
                                })(e, t, n, i),
                                x(n.callback_exit, e, t, i));
                            })(e.target, e, t, n);
                      });
                    })(n, e, t);
                  },
                  (function (e) {
                    return {
                      root: e.container === document ? null : e.container,
                      rootMargin: e.thresholds || e.threshold + "px",
                    };
                  })(e)
                ));
            })(o, this),
            (function (e, n) {
              t &&
                window.addEventListener("online", function () {
                  !(function (e, t) {
                    var n;
                    ((n = K(e)), Q(n).filter(J)).forEach(function (t) {
                      T(t, e.class_error), m(t);
                    }),
                      t.update();
                  })(e, n);
                });
            })(o, this),
            this.update(n);
        };
      return (
        (te.prototype = {
          update: function (e) {
            var t,
              o,
              r = this._settings,
              s = ee(e, r);
            $(this, s.length),
              !n && i
                ? Z(r)
                  ? (function (e, t, n) {
                      e.forEach(function (e) {
                        -1 !== G.indexOf(e.tagName) &&
                          (e.setAttribute("loading", "lazy"),
                          (function (e, t, n) {
                            Y(e, t, n), _(e, t), v(e, f);
                          })(e, t, n));
                      }),
                        $(n, 0);
                    })(s, r, this)
                  : ((o = s),
                    (function (e) {
                      e.disconnect();
                    })((t = this._observer)),
                    (function (e, t) {
                      t.forEach(function (t) {
                        e.observe(t);
                      });
                    })(t, o))
                : this.loadAll(s);
          },
          destroy: function () {
            this._observer && this._observer.disconnect(),
              K(this._settings).forEach(function (e) {
                delete e.llOriginalAttrs;
              }),
              delete this._observer,
              delete this._settings,
              delete this.loadingCount,
              delete this.toLoadCount;
          },
          loadAll: function (e) {
            var t = this,
              n = this._settings;
            ee(e, n).forEach(function (e) {
              S(e, t), V(e, n, t);
            });
          },
        }),
        (te.load = function (e, t) {
          var n = a(t);
          V(e, n);
        }),
        (te.resetStatus = function (e) {
          m(e);
        }),
        t &&
          (function (e, t) {
            if (t)
              if (t.length) for (var n, i = 0; (n = t[i]); i += 1) l(e, n);
              else l(e, t);
          })(te, window.lazyLoadOptions),
        te
      );
    })();
  },
  5: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return T;
    });
    var i = n(0),
      o = n.n(i),
      r = (n(7), n(8), n(3));
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    n(69), n(74);
    var a = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.parent = t);
      }
      var t, n;
      return (t = e), (n = []) && s(t.prototype, n), e;
    })();
    function l(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    n(76);
    !(function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          this.init();
      }
      var t, n;
      (t = e),
        (n = [
          {
            key: "expand",
            value: function (e) {
              $(e)
                .parent()
                .css({
                  maxHeight: $(e).parent().find("dl")[0].scrollHeight + "px",
                }),
                $(e).parent().addClass("show");
            },
          },
          {
            key: "collapse",
            value: function (e) {
              $(e)
                .parent()
                .css({
                  maxHeight: $(e).parent().find("dt")[0].scrollHeight + "px",
                }),
                $(e).parent().removeClass("show");
            },
          },
          {
            key: "getAjaxSubmitUrl",
            value: function (e) {
              var t = $(e).attr("action");
              return (
                (t = t.replace("/post?u=", "/post-json?u=")),
                (t += "&c=?") +
                  "&EMAIL=".concat($(e).find("input[name=EMAIL]").val())
              );
            },
          },
          {
            key: "setupMailChimp",
            value: function () {
              var e = this;
              $("form#mc-embedded-subscribe-form").submit(function (t) {
                var n = t.target;
                return (
                  $.ajax({
                    url: e.getAjaxSubmitUrl(n),
                    type: "GET",
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                  })
                    .done(function (e) {
                      "success" == e.result
                        ? ($(n).trigger("reset"),
                          $(n)
                            .find(".form-message.success")
                            .removeClass("hidden"),
                          $(n).find(".form-message.error").addClass("hidden"))
                        : ($(n).find(".form-message.error").html(e.msg),
                          $(n).find(".form-message.success").addClass("hidden"),
                          $(n)
                            .find(".form-message.error")
                            .removeClass("hidden"));
                    })
                    .fail(function () {}),
                  !1
                );
              });
            },
          },
        ]) && l(t.prototype, n);
    })();
    var c = (n(9), n(4)),
      u = n.n(c);
    function d(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var p,
      f,
      h,
      g = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.dom = t),
            (this.parallaxItem = $("[data-parallax]")),
            (this.parallaxFactor = []),
            (this.parallaxBGItem = $("[data-backgroundcolor]")),
            (this.threshold = 300),
            (this.trackItem = $("[data-track]")),
            this.initParallax();
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "initParallax",
              value: function () {
                var e = this;
                this.parallaxItem.each(function (t, n) {
                  e.parallaxFactor.push(0.01 * parseInt($(n).data("parallax")));
                }),
                  this.updateParallaxInfo(),
                  $(window).on("scroll load resize", function (t) {
                    e.updateParallaxInfo();
                  }),
                  this.trackItem.each(function (e, t) {
                    var n = $(t).data("track") || 0;
                    $(t).css({ transform: "translateY(".concat(n, "px)") });
                  });
              },
            },
            {
              key: "updateParallaxInfo",
              value: function () {
                var e = this,
                  t = $(window).scrollTop() + $(window).innerHeight();
                this.parallaxItem.each(function (n, i) {
                  var o = $(i).offset().top,
                    r = $(i),
                    s = (
                      r.css("-webkit-transform") ||
                      r.css("-moz-transform") ||
                      r.css("-ms-transform") ||
                      r.css("-o-transform") ||
                      r.css("transform")
                    )
                      .replace(/[^0-9\-.,]/g, "")
                      .split(","),
                    a = (s[12] || s[4], s[13] || s[5]),
                    l = o - t;
                  a && Number(a),
                    $(i).css({
                      transform: "translateY(".concat(
                        -10 * e.parallaxFactor[n] +
                          (l / $(window).innerHeight()) *
                            50 *
                            e.parallaxFactor[n],
                        "vw)"
                      ),
                    });
                }),
                  this.parallaxBGItem.each(function (n, i) {
                    var o = t - $(i).offset().top;
                    $(i).offset().top,
                      $(i).outerHeight(),
                      o > e.threshold
                        ? $(".main-container").css({
                            "background-color": $(i).data("backgroundcolor"),
                          })
                        : $(".main-container").css({ "background-color": "" });
                  }),
                  this.trackItem.each(function (e, n) {
                    t - $(n).offset().top > 0
                      ? $(n).addClass("trackin")
                      : $(n).removeClass("trackin");
                  });
              },
            },
          ]) && d(t.prototype, n),
          e
        );
      })(),
      v = n(1),
      m = n.n(v),
      y = n(2);
    function b(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    n(78);
    var w = { path: "/", expires: 180 },
      x = (function () {
        function e(t) {
          var n = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.parent = t),
            (p = $(".cookie-consent")),
            (f = p.find("a.accept")),
            (h = p.find("a.reject")),
            f.click(function (e) {
              n.removeCookieConsent(),
                m.a.set("performance-cookies", "true", w);
            }),
            h.click(function (e) {
              n.removeCookieConsent(),
                m.a.set("performance-cookies", "false", w);
            }),
            this.checkCookieExist()
              ? ("false" === m.a.get("performance-cookies")
                  ? ((window["ga-disable-".concat(y.a["GA-ID"])] = !0),
                    $("input[name^=performance-cookie]").prop("checked", !1),
                    console.log("Disable GA: " + y.a["GA-ID"]))
                  : $("input[name^=performance-cookie]").prop("checked", !0),
                $(".cookie-consent").removeClass("show"))
              : $(".cookie-consent").addClass("show");
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "openCookieConsent",
              value: function () {
                $(".cookie-consent").addClass("show");
              },
            },
            {
              key: "openSetting",
              value: function () {
                this.removeCookieConsent(), this.openPopupCookieConsent();
              },
            },
            {
              key: "openPopupCookieConsent",
              value: function () {
                $.magnificPopup.open({
                  items: {
                    type: "inline",
                    src: '\n                    <div class="cookie-consent-wrap">\n                        <div class="heading-container">\n                            <h2>Cookie Settings</h2>\n                            <h3>Strictly Necessary Cookies</h3>\n                            <p>These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.</p>\n                            <p>You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.</p>\n                        </div>\n                        <div class="content-container">\n                            <h3>\n                                <label>\n                                    <input type="checkbox" name="performance-cookie" '.concat(
                      "true" == m.a.get("performance-cookies") ? "checked" : "",
                      ' /> Performance Cookies\n                                </label>\n                            </h3>\n                            <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</p>\n                            <p>All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.</p>\n                        </div>\n                        <div class="btn-container">\n                            <a href="javascript:void(0);" class="button btn-save">Save Settings</a>\n                        </div>\n                    </div>\n                '
                    ),
                  },
                  mainClass: "video-lightbox",
                  modal: !0,
                  fixedContentPos: !0,
                  callbacks: {
                    open: function () {
                      var e = this;
                      $(this.contentContainer)
                        .find(".btn-save")
                        .one("click", function () {
                          var t = $("input[name^=performance-cookie]").is(
                            ":checked"
                          )
                            ? "true"
                            : "false";
                          m.a.set("performance-cookies", t, w),
                            t ||
                              (window["ga-disable-".concat(y.a["GA-ID"])] = !0),
                            e.close();
                        });
                    },
                  },
                });
              },
            },
            {
              key: "removeCookieConsent",
              value: function () {
                anime({
                  targets: p[0],
                  opacity: 0,
                  easing: "easeOutQuad",
                  duration: 300,
                  complete: function () {
                    p.removeClass("show"), p.css("opacity", 1);
                  },
                });
              },
            },
            {
              key: "checkCookieExist",
              value: function () {
                return Boolean(m.a.get("performance-cookies"));
              },
            },
          ]) && b(t.prototype, n),
          e
        );
      })();
    function k(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    n(80), (window.$ = window.jQuery = o.a);
    var T = (function () {
      function e() {
        var t = this;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (window.anime = r.a),
          (this.config = y.a),
          (this.env = "uat"),
          (this.isIE = this.checkIsIE()),
          (this.header = new a(this)),
          (this.breakpoint = this.getBreakpoint()),
          o()(window).on("resize", function () {
            t.breakpoint = t.getBreakpoint();
          }),
          this.isIE && o()("body").addClass("isIE"),
          (window.cookieConsent = new x(this)),
          (this.lazyLoadInstance = new u.a({
            cancel_on_exit: !1,
            thresholds: "1000px",
          })),
          new g(),
          o()(".btn-backtotop").on("click", function (e) {
            e.preventDefault();
            var t = o()(window).scrollTop(),
              n = Math.abs(t - 0) / 5;
            n < 600 ? (n = 600) : n > 2e3 && (n = 2e3),
              Object(r.a)({
                targets: [document.documentElement, document.body],
                scrollTop: 0,
                easing: "cubicBezier(.95,.07,.66,.75)",
                duration: n,
              });
          }),
          o()(
            (function () {
              o.a.fn.inputFilter = function (e) {
                return this.on(
                  "input keydown keyup mousedown mouseup select contextmenu drop",
                  function () {
                    e(this.value)
                      ? ((this.oldValue = this.value),
                        (this.oldSelectionStart = this.selectionStart),
                        (this.oldSelectionEnd = this.selectionEnd))
                      : this.hasOwnProperty("oldValue") &&
                        ((this.value = this.oldValue),
                        this.setSelectionRange(
                          this.oldSelectionStart,
                          this.oldSelectionEnd
                        ));
                  }
                );
              };
              var e = 0;
              o()(window).scroll(function (t) {
                var n = o()(this).scrollTop();
                n > e || 0 == n
                  ? o()(".b2t").removeClass("show")
                  : o()(".b2t").addClass("show"),
                  (e = n);
              }),
                o()(".b2t").click(function () {
                  o()("html, body").animate({ scrollTop: 0 });
                });
            })(jQuery)
          ),
          (window.goToLink = function (e) {
            if (!e || "#" == e || "undefined" == e) return !1;
            location.href = e;
          });
      }
      var t, n;
      return (
        (t = e),
        (n = [
          {
            key: "openPopupVideo",
            value: function (e, t) {
              o.a.magnificPopup.open({
                items: {
                  type: "inline",
                  src: '\n                    <div class="video-wrap">\n                        <video autoplay controls>\n                            <source src="'.concat(
                    e,
                    '" type="video/mp4">\n                            Your browser does not support the video tag.\n                        </video>\n                    </div>\n                    <button type="button" class="close">Close</button>\n                '
                  ),
                },
                mainClass: t,
                modal: !0,
                fixedContentPos: !0,
                closeOnBgClick: !0,
                callbacks: {
                  open: function () {
                    var e = this;
                    o()(this.contentContainer)
                      .find(".close")
                      .one("click", function () {
                        e.close();
                      });
                  },
                },
              });
            },
          },
          {
            key: "lazyUpdate",
            value: function () {
              this.lazyLoadInstance.update();
            },
          },
          {
            key: "checkIsIE",
            value: function () {
              if (
                -1 !== navigator.userAgent.indexOf("MSIE") ||
                navigator.appVersion.indexOf("Trident/") > -1
              )
                return !0;
            },
          },
          {
            key: "getQueryString",
            value: function (e) {
              var t,
                n,
                i = window.location.search.substring(1).split("&");
              for (n = 0; n < i.length; n++)
                if ((t = i[n].split("="))[0] === e)
                  return void 0 === t[1] || decodeURIComponent(t[1]);
            },
          },
          {
            key: "getBreakpoint",
            value: function () {
              return window
                .getComputedStyle(document.body, ":before")
                .content.replace(/\"/g, "");
            },
          },
        ]) && k(t.prototype, n),
        e
      );
    })();
  },
  66: function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(5),
      o = n(10),
      r = (n(2), n(17));
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var a = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.parent = t),
            this.init(),
            $(window).width() > 767 &&
              (Object(r.a)(".product-filter", { useStickyClasses: !0 }),
              $("body").hasClass("isIE") &&
              $(".product-filter.js-is-sticky").length > 0
                ? ($(".product-listing-inner").css({ "margin-left": "308px" }),
                  $(".product-filter.js-is-stuck").css({
                    position: "relative !important",
                  }))
                : ($(".product-listing-inner").css({ "margin-left": "" }),
                  $(".product-filter.js-is-stuck").css({ position: "" })),
              $(window).on("scroll", function () {
                $("body").hasClass("scroll-up")
                  ? $(".product-filter").css({ top: $("header").outerHeight() })
                  : $(".product-filter").css({ top: 0 });
              }));
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "init",
              value: function () {
                var e = [],
                  t = $(".product-listing-tab");
                $("input").on("click", function () {
                  var n = $(this),
                    i = location.href,
                    o = -1 !== i.indexOf("?filter=") ? "," : "?filter=",
                    r = n.attr("data-filter");
                  n.is(":checked") ? e.push(r) : e.splice(e.indexOf(r), 1),
                    (i = i + o + e),
                    window.history.pushState(
                      {},
                      "",
                      e.length ? "?filter=" + e.join(",") : location.pathname
                    ),
                    e.length
                      ? (t.addClass("hide"),
                        t.find(".product-listing-img").removeClass("trackin"),
                        t.map(function (n) {
                          var i = !0;
                          e.map(function (e, o) {
                            if (t.eq(n).attr("data-filter").indexOf(e) <= -1)
                              return (i = !1), !1;
                          }),
                            i &&
                              (t.eq(n).removeClass("hide"),
                              t
                                .find(".product-listing-img")
                                .addClass("trackin"),
                              t.find("h4").addClass("trackin"),
                              t.find("h3").addClass("trackin"),
                              t.find("product-highlights").addClass("trackin"));
                        }))
                      : (t.removeClass("hide"),
                        t.find(".product-listing-img").addClass("trackin"),
                        t.find("h3").addClass("trackin"),
                        t.find("product-highlights").addClass("trackin")),
                    0 ==
                    $(".product-listing-inner .product-listing-tab:not(.hide)")
                      .length
                      ? $(
                          ".product-listing-inner .product-listing-no-result"
                        ).addClass("show")
                      : $(
                          ".product-listing-inner .product-listing-no-result"
                        ).removeClass("show");
                }),
                  $(".filter-clear span, .product-filter a.btn-clear").on(
                    "click",
                    function () {
                      $(".product-filter input[type='checkbox']").prop(
                        "checked",
                        !1
                      ),
                        $(
                          ".product-listing-inner .product-listing-no-result"
                        ).removeClass("show"),
                        (e = []),
                        window.history.pushState({}, "", location.pathname),
                        t.removeClass("hide"),
                        t.find(".product-listing-img").addClass("trackin"),
                        t.find("h3").addClass("trackin"),
                        t.find("product-highlights").addClass("trackin");
                    }
                  ),
                  $(".product-filter .product-filter-type").each(function () {
                    var e = $(this),
                      t = e.find(".product-filter-detail");
                    setTimeout(function () {
                      e.css({ "max-height": e.outerHeight() });
                    }, 100),
                      e.find(".product-filter-title").on("click", function () {
                        var n = $(this);
                        n.hasClass("hide")
                          ? (n.removeClass("hide"),
                            e.css({
                              "max-height": n.outerHeight() + t.outerHeight(),
                            }))
                          : (n.addClass("hide"),
                            e.css({ "max-height": n.outerHeight() }));
                      });
                  }),
                  $(
                    ".product-filter .product-filter-type:not(.color) ul li div"
                  ).each(function () {
                    $(this)
                      .find("input")
                      .css({
                        width: $(this).find("span").outerWidth() + 30,
                        height: $(this).find("span").height(),
                      });
                  });
                var n = $(".product-filter .mobile-filter");
                if (
                  ($(".product-filter .product-filter-container"),
                  $(".mobile-product-filter .mobile-filter").on(
                    "click",
                    function () {
                      $(".product-filter").css({
                        "max-height": "100vh",
                        height: "100vh",
                      }),
                        $("body").css({ overflow: "hidden" });
                    }
                  ),
                  n.find(".close").on("click", function () {
                    $(".product-filter").css({ "max-height": "", height: "" }),
                      $("body").css({ overflow: "" });
                  }),
                  $(".product-filter .btn-apply").on("click", function () {
                    $(".product-filter").css({ "max-height": "", height: "" }),
                      $("body").css({ overflow: "" });
                  }),
                  this.parent.getQueryString("filter"))
                ) {
                  var i = this.parent.getQueryString("filter").split(",");
                  (e = i).forEach(function (e, t) {
                    console.log("element", e),
                      $(
                        ".product-filter input[type='checkbox'][data-filter=".concat(
                          e,
                          "]"
                        )
                      ).prop("checked", !0);
                  }),
                    t.addClass("hide"),
                    t.map(function (n) {
                      var i = !0;
                      e.map(function (e, o) {
                        if (t.eq(n).attr("data-filter").indexOf(e) <= -1)
                          return (i = !1), !1;
                      }),
                        i && t.eq(n).removeClass("hide");
                    }),
                    0 ==
                    $(".product-listing-inner .product-listing-tab:not(.hide)")
                      .length
                      ? $(
                          ".product-listing-inner .product-listing-no-result"
                        ).addClass("show")
                      : $(
                          ".product-listing-inner .product-listing-no-result"
                        ).removeClass("show");
                }
              },
            },
          ]) && s(t.prototype, n),
          e
        );
      })(),
      l = function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
      };
    function c(e) {
      return (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function d(e, t) {
      return (d =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function p(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = h(e);
        if (t) {
          var o = h(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else n = i.apply(this, arguments);
        return (function (e, t) {
          return !t || ("object" !== c(t) && "function" != typeof t) ? f(e) : t;
        })(this, n);
      };
    }
    function f(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function h(e) {
      return (h = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    n(112),
      n(114),
      n(116),
      n(118),
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
      Element.prototype.closest ||
        (Element.prototype.closest = function (e) {
          var t = this;
          do {
            if (Element.prototype.matches.call(t, e)) return t;
            t = t.parentElement || t.parentNode;
          } while (null !== t && 1 === t.nodeType);
          return null;
        });
    var g = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && d(e, t);
      })(r, e);
      var t,
        n,
        i = p(r);
      function r() {
        var e;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, r),
          (e = i.call(this)),
          new o.a(),
          new a(f(e)),
          new l(),
          e.initListing(),
          e
        );
      }
      return (
        (t = r),
        (n = [
          {
            key: "initListing",
            value: function () {
              $(".product-listing-tab").on(
                "mouseenter click",
                ".product-highlight",
                function (e) {
                  e.preventDefault();
                  var t = e.target.closest(".product-listing-tab"),
                    n = t.querySelector(".product-highlights-description"),
                    i = $(e.target).find(".product-highlight-text").text();
                  (n.innerHTML = i.replace(
                    /\S/g,
                    "<span class='letter'>$&</span>"
                  )),
                    anime.timeline({ loop: !1 }).add({
                      targets: n.querySelectorAll(".letter"),
                      opacity: [0, 1],
                      translateZ: 0,
                      easing: "easeOutExpo",
                      duration: 1600,
                      delay: function (e, t) {
                        return 10 * t;
                      },
                    });
                  var o = t.querySelector(".product-highlights-cursor"),
                    r =
                      $(e.target).offset().left -
                      $(e.target).parent().offset().left;
                  anime({
                    targets: o,
                    translateX: r,
                    width: $(e.target).outerWidth(),
                    opacity: 1,
                    easing: "cubicBezier(.51,.01,.53,1)",
                    duration: 400,
                  });
                }
              ),
                $(".product-listing-tab").on("mouseleave", function (e) {
                  var t = e.target.closest(".product-listing-tab"),
                    n = t.querySelector(".product-highlights-description");
                  if (n) {
                    n.innerHTML = "";
                    var i = t.querySelector(".product-highlights-cursor");
                    anime({
                      targets: i,
                      width: 0,
                      opacity: 0,
                      easing: "cubicBezier(.51,.01,.53,1)",
                      duration: 300,
                    });
                  }
                });
              var e = !1,
                t = window.navigator.userAgent,
                n = t.indexOf("MSIE "),
                i = t.indexOf("Trident/");
              (n > -1 || i > -1) && (e = !0),
                e ||
                  $(".product-listing-tab").each(function () {
                    if (
                      "" !=
                      $(this)
                        .find(".product-listing-img")
                        .attr("data-hero-product")
                    ) {
                      var e = $(this)
                        .find(".product-listing-img")
                        .attr("data-hero-product");
                      console.log(e),
                        $(this).find(".product-listing-img").attr("href", e),
                        $(this)
                          .find(".product-listing-tab-buttons .btn-detail")
                          .attr("href", e);
                    }
                  });
            },
          },
        ]) && u(t.prototype, n),
        r
      );
    })(i.a);
    window.addEventListener("DOMContentLoaded", function (e) {
      new g();
    });
  },
  69: function (e, t) {},
  7: function (e, t, n) {
    var i, o, r;
    !(function (s) {
      "use strict";
      (o = [n(0)]),
        void 0 ===
          (r =
            "function" ==
            typeof (i = function (e) {
              var t,
                n = window.Slick;
              (((t = 0),
              (n = function (n, i) {
                var o,
                  r = this;
                (r.defaults = {
                  accessibility: !0,
                  adaptiveHeight: !1,
                  appendArrows: e(n),
                  appendDots: e(n),
                  arrows: !0,
                  asNavFor: null,
                  prevArrow:
                    '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                  nextArrow:
                    '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                  autoplay: !1,
                  autoplaySpeed: 3e3,
                  centerMode: !1,
                  centerPadding: "50px",
                  cssEase: "ease",
                  customPaging: function (t, n) {
                    return e('<button type="button" />').text(n + 1);
                  },
                  dots: !1,
                  dotsClass: "slick-dots",
                  draggable: !0,
                  easing: "linear",
                  edgeFriction: 0.35,
                  fade: !1,
                  focusOnSelect: !1,
                  focusOnChange: !1,
                  infinite: !0,
                  initialSlide: 0,
                  lazyLoad: "ondemand",
                  mobileFirst: !1,
                  pauseOnHover: !0,
                  pauseOnFocus: !0,
                  pauseOnDotsHover: !1,
                  respondTo: "window",
                  responsive: null,
                  rows: 1,
                  rtl: !1,
                  slide: "",
                  slidesPerRow: 1,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed: 500,
                  swipe: !0,
                  swipeToSlide: !1,
                  touchMove: !0,
                  touchThreshold: 5,
                  useCSS: !0,
                  useTransform: !0,
                  variableWidth: !1,
                  vertical: !1,
                  verticalSwiping: !1,
                  waitForAnimate: !0,
                  zIndex: 1e3,
                }),
                  (r.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                  }),
                  e.extend(r, r.initials),
                  (r.activeBreakpoint = null),
                  (r.animType = null),
                  (r.animProp = null),
                  (r.breakpoints = []),
                  (r.breakpointSettings = []),
                  (r.cssTransitions = !1),
                  (r.focussed = !1),
                  (r.interrupted = !1),
                  (r.hidden = "hidden"),
                  (r.paused = !0),
                  (r.positionProp = null),
                  (r.respondTo = null),
                  (r.rowCount = 1),
                  (r.shouldClick = !0),
                  (r.$slider = e(n)),
                  (r.$slidesCache = null),
                  (r.transformType = null),
                  (r.transitionType = null),
                  (r.visibilityChange = "visibilitychange"),
                  (r.windowWidth = 0),
                  (r.windowTimer = null),
                  (o = e(n).data("slick") || {}),
                  (r.options = e.extend({}, r.defaults, i, o)),
                  (r.currentSlide = r.options.initialSlide),
                  (r.originalSettings = r.options),
                  void 0 !== document.mozHidden
                    ? ((r.hidden = "mozHidden"),
                      (r.visibilityChange = "mozvisibilitychange"))
                    : void 0 !== document.webkitHidden &&
                      ((r.hidden = "webkitHidden"),
                      (r.visibilityChange = "webkitvisibilitychange")),
                  (r.autoPlay = e.proxy(r.autoPlay, r)),
                  (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
                  (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
                  (r.changeSlide = e.proxy(r.changeSlide, r)),
                  (r.clickHandler = e.proxy(r.clickHandler, r)),
                  (r.selectHandler = e.proxy(r.selectHandler, r)),
                  (r.setPosition = e.proxy(r.setPosition, r)),
                  (r.swipeHandler = e.proxy(r.swipeHandler, r)),
                  (r.dragHandler = e.proxy(r.dragHandler, r)),
                  (r.keyHandler = e.proxy(r.keyHandler, r)),
                  (r.instanceUid = t++),
                  (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                  r.registerBreakpoints(),
                  r.init(!0);
              })).prototype.activateADA = function () {
                this.$slideTrack
                  .find(".slick-active")
                  .attr({ "aria-hidden": "false" })
                  .find("a, input, button, select")
                  .attr({ tabindex: "0" });
              }),
                (n.prototype.addSlide = n.prototype.slickAdd =
                  function (t, n, i) {
                    var o = this;
                    if ("boolean" == typeof n) (i = n), (n = null);
                    else if (n < 0 || n >= o.slideCount) return !1;
                    o.unload(),
                      "number" == typeof n
                        ? 0 === n && 0 === o.$slides.length
                          ? e(t).appendTo(o.$slideTrack)
                          : i
                          ? e(t).insertBefore(o.$slides.eq(n))
                          : e(t).insertAfter(o.$slides.eq(n))
                        : !0 === i
                        ? e(t).prependTo(o.$slideTrack)
                        : e(t).appendTo(o.$slideTrack),
                      (o.$slides = o.$slideTrack.children(this.options.slide)),
                      o.$slideTrack.children(this.options.slide).detach(),
                      o.$slideTrack.append(o.$slides),
                      o.$slides.each(function (t, n) {
                        e(n).attr("data-slick-index", t);
                      }),
                      (o.$slidesCache = o.$slides),
                      o.reinit();
                  }),
                (n.prototype.animateHeight = function () {
                  var e = this;
                  if (
                    1 === e.options.slidesToShow &&
                    !0 === e.options.adaptiveHeight &&
                    !1 === e.options.vertical
                  ) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({ height: t }, e.options.speed);
                  }
                }),
                (n.prototype.animateSlide = function (t, n) {
                  var i = {},
                    o = this;
                  o.animateHeight(),
                    !0 === o.options.rtl &&
                      !1 === o.options.vertical &&
                      (t = -t),
                    !1 === o.transformsEnabled
                      ? !1 === o.options.vertical
                        ? o.$slideTrack.animate(
                            { left: t },
                            o.options.speed,
                            o.options.easing,
                            n
                          )
                        : o.$slideTrack.animate(
                            { top: t },
                            o.options.speed,
                            o.options.easing,
                            n
                          )
                      : !1 === o.cssTransitions
                      ? (!0 === o.options.rtl &&
                          (o.currentLeft = -o.currentLeft),
                        e({ animStart: o.currentLeft }).animate(
                          { animStart: t },
                          {
                            duration: o.options.speed,
                            easing: o.options.easing,
                            step: function (e) {
                              (e = Math.ceil(e)),
                                !1 === o.options.vertical
                                  ? ((i[o.animType] =
                                      "translate(" + e + "px, 0px)"),
                                    o.$slideTrack.css(i))
                                  : ((i[o.animType] =
                                      "translate(0px," + e + "px)"),
                                    o.$slideTrack.css(i));
                            },
                            complete: function () {
                              n && n.call();
                            },
                          }
                        ))
                      : (o.applyTransition(),
                        (t = Math.ceil(t)),
                        !1 === o.options.vertical
                          ? (i[o.animType] =
                              "translate3d(" + t + "px, 0px, 0px)")
                          : (i[o.animType] =
                              "translate3d(0px," + t + "px, 0px)"),
                        o.$slideTrack.css(i),
                        n &&
                          setTimeout(function () {
                            o.disableTransition(), n.call();
                          }, o.options.speed));
                }),
                (n.prototype.getNavTarget = function () {
                  var t = this.options.asNavFor;
                  return t && null !== t && (t = e(t).not(this.$slider)), t;
                }),
                (n.prototype.asNavFor = function (t) {
                  var n = this.getNavTarget();
                  null !== n &&
                    "object" == typeof n &&
                    n.each(function () {
                      var n = e(this).slick("getSlick");
                      n.unslicked || n.slideHandler(t, !0);
                    });
                }),
                (n.prototype.applyTransition = function (e) {
                  var t = this,
                    n = {};
                  !1 === t.options.fade
                    ? (n[t.transitionType] =
                        t.transformType +
                        " " +
                        t.options.speed +
                        "ms " +
                        t.options.cssEase)
                    : (n[t.transitionType] =
                        "opacity " +
                        t.options.speed +
                        "ms " +
                        t.options.cssEase),
                    !1 === t.options.fade
                      ? t.$slideTrack.css(n)
                      : t.$slides.eq(e).css(n);
                }),
                (n.prototype.autoPlay = function () {
                  var e = this;
                  e.autoPlayClear(),
                    e.slideCount > e.options.slidesToShow &&
                      (e.autoPlayTimer = setInterval(
                        e.autoPlayIterator,
                        e.options.autoplaySpeed
                      ));
                }),
                (n.prototype.autoPlayClear = function () {
                  this.autoPlayTimer && clearInterval(this.autoPlayTimer);
                }),
                (n.prototype.autoPlayIterator = function () {
                  var e = this,
                    t = e.currentSlide + e.options.slidesToScroll;
                  e.paused ||
                    e.interrupted ||
                    e.focussed ||
                    (!1 === e.options.infinite &&
                      (1 === e.direction &&
                      e.currentSlide + 1 === e.slideCount - 1
                        ? (e.direction = 0)
                        : 0 === e.direction &&
                          ((t = e.currentSlide - e.options.slidesToScroll),
                          e.currentSlide - 1 == 0 && (e.direction = 1))),
                    e.slideHandler(t));
                }),
                (n.prototype.buildArrows = function () {
                  var t = this;
                  !0 === t.options.arrows &&
                    ((t.$prevArrow = e(t.options.prevArrow).addClass(
                      "slick-arrow"
                    )),
                    (t.$nextArrow = e(t.options.nextArrow).addClass(
                      "slick-arrow"
                    )),
                    t.slideCount > t.options.slidesToShow
                      ? (t.$prevArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                        t.$nextArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                        t.htmlExpr.test(t.options.prevArrow) &&
                          t.$prevArrow.prependTo(t.options.appendArrows),
                        t.htmlExpr.test(t.options.nextArrow) &&
                          t.$nextArrow.appendTo(t.options.appendArrows),
                        !0 !== t.options.infinite &&
                          t.$prevArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"))
                      : t.$prevArrow
                          .add(t.$nextArrow)
                          .addClass("slick-hidden")
                          .attr({ "aria-disabled": "true", tabindex: "-1" }));
                }),
                (n.prototype.buildDots = function () {
                  var t,
                    n,
                    i = this;
                  if (
                    !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow
                  ) {
                    for (
                      i.$slider.addClass("slick-dotted"),
                        n = e("<ul />").addClass(i.options.dotsClass),
                        t = 0;
                      t <= i.getDotCount();
                      t += 1
                    )
                      n.append(
                        e("<li />").append(
                          i.options.customPaging.call(this, i, t)
                        )
                      );
                    (i.$dots = n.appendTo(i.options.appendDots)),
                      i.$dots.find("li").first().addClass("slick-active");
                  }
                }),
                (n.prototype.buildOut = function () {
                  var t = this;
                  (t.$slides = t.$slider
                    .children(t.options.slide + ":not(.slick-cloned)")
                    .addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.$slides.each(function (t, n) {
                      e(n)
                        .attr("data-slick-index", t)
                        .data("originalStyling", e(n).attr("style") || "");
                    }),
                    t.$slider.addClass("slick-slider"),
                    (t.$slideTrack =
                      0 === t.slideCount
                        ? e('<div class="slick-track"/>').appendTo(t.$slider)
                        : t.$slides
                            .wrapAll('<div class="slick-track"/>')
                            .parent()),
                    (t.$list = t.$slideTrack
                      .wrap('<div class="slick-list"/>')
                      .parent()),
                    t.$slideTrack.css("opacity", 0),
                    (!0 !== t.options.centerMode &&
                      !0 !== t.options.swipeToSlide) ||
                      (t.options.slidesToScroll = 1),
                    e("img[data-lazy]", t.$slider)
                      .not("[src]")
                      .addClass("slick-loading"),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.buildDots(),
                    t.updateDots(),
                    t.setSlideClasses(
                      "number" == typeof t.currentSlide ? t.currentSlide : 0
                    ),
                    !0 === t.options.draggable && t.$list.addClass("draggable");
                }),
                (n.prototype.buildRows = function () {
                  var e,
                    t,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a = this;
                  if (
                    ((i = document.createDocumentFragment()),
                    (r = a.$slider.children()),
                    a.options.rows > 0)
                  ) {
                    for (
                      s = a.options.slidesPerRow * a.options.rows,
                        o = Math.ceil(r.length / s),
                        e = 0;
                      e < o;
                      e++
                    ) {
                      var l = document.createElement("div");
                      for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                          var u = e * s + (t * a.options.slidesPerRow + n);
                          r.get(u) && c.appendChild(r.get(u));
                        }
                        l.appendChild(c);
                      }
                      i.appendChild(l);
                    }
                    a.$slider.empty().append(i),
                      a.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                          width: 100 / a.options.slidesPerRow + "%",
                          display: "inline-block",
                        });
                  }
                }),
                (n.prototype.checkResponsive = function (t, n) {
                  var i,
                    o,
                    r,
                    s = this,
                    a = !1,
                    l = s.$slider.width(),
                    c = window.innerWidth || e(window).width();
                  if (
                    ("window" === s.respondTo
                      ? (r = c)
                      : "slider" === s.respondTo
                      ? (r = l)
                      : "min" === s.respondTo && (r = Math.min(c, l)),
                    s.options.responsive &&
                      s.options.responsive.length &&
                      null !== s.options.responsive)
                  ) {
                    for (i in ((o = null), s.breakpoints))
                      s.breakpoints.hasOwnProperty(i) &&
                        (!1 === s.originalSettings.mobileFirst
                          ? r < s.breakpoints[i] && (o = s.breakpoints[i])
                          : r > s.breakpoints[i] && (o = s.breakpoints[i]));
                    null !== o
                      ? null !== s.activeBreakpoint
                        ? (o !== s.activeBreakpoint || n) &&
                          ((s.activeBreakpoint = o),
                          "unslick" === s.breakpointSettings[o]
                            ? s.unslick(o)
                            : ((s.options = e.extend(
                                {},
                                s.originalSettings,
                                s.breakpointSettings[o]
                              )),
                              !0 === t &&
                                (s.currentSlide = s.options.initialSlide),
                              s.refresh(t)),
                          (a = o))
                        : ((s.activeBreakpoint = o),
                          "unslick" === s.breakpointSettings[o]
                            ? s.unslick(o)
                            : ((s.options = e.extend(
                                {},
                                s.originalSettings,
                                s.breakpointSettings[o]
                              )),
                              !0 === t &&
                                (s.currentSlide = s.options.initialSlide),
                              s.refresh(t)),
                          (a = o))
                      : null !== s.activeBreakpoint &&
                        ((s.activeBreakpoint = null),
                        (s.options = s.originalSettings),
                        !0 === t && (s.currentSlide = s.options.initialSlide),
                        s.refresh(t),
                        (a = o)),
                      t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
                  }
                }),
                (n.prototype.changeSlide = function (t, n) {
                  var i,
                    o,
                    r = this,
                    s = e(t.currentTarget);
                  switch (
                    (s.is("a") && t.preventDefault(),
                    s.is("li") || (s = s.closest("li")),
                    (i =
                      r.slideCount % r.options.slidesToScroll != 0
                        ? 0
                        : (r.slideCount - r.currentSlide) %
                          r.options.slidesToScroll),
                    t.data.message)
                  ) {
                    case "previous":
                      (o =
                        0 === i
                          ? r.options.slidesToScroll
                          : r.options.slidesToShow - i),
                        r.slideCount > r.options.slidesToShow &&
                          r.slideHandler(r.currentSlide - o, !1, n);
                      break;
                    case "next":
                      (o = 0 === i ? r.options.slidesToScroll : i),
                        r.slideCount > r.options.slidesToShow &&
                          r.slideHandler(r.currentSlide + o, !1, n);
                      break;
                    case "index":
                      var a =
                        0 === t.data.index
                          ? 0
                          : t.data.index ||
                            s.index() * r.options.slidesToScroll;
                      r.slideHandler(r.checkNavigable(a), !1, n),
                        s.children().trigger("focus");
                      break;
                    default:
                      return;
                  }
                }),
                (n.prototype.checkNavigable = function (e) {
                  var t, n;
                  if (
                    ((n = 0),
                    e > (t = this.getNavigableIndexes())[t.length - 1])
                  )
                    e = t[t.length - 1];
                  else
                    for (var i in t) {
                      if (e < t[i]) {
                        e = n;
                        break;
                      }
                      n = t[i];
                    }
                  return e;
                }),
                (n.prototype.cleanUpEvents = function () {
                  var t = this;
                  t.options.dots &&
                    null !== t.$dots &&
                    (e("li", t.$dots)
                      .off("click.slick", t.changeSlide)
                      .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                      .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
                    !0 === t.options.accessibility &&
                      t.$dots.off("keydown.slick", t.keyHandler)),
                    t.$slider.off("focus.slick blur.slick"),
                    !0 === t.options.arrows &&
                      t.slideCount > t.options.slidesToShow &&
                      (t.$prevArrow &&
                        t.$prevArrow.off("click.slick", t.changeSlide),
                      t.$nextArrow &&
                        t.$nextArrow.off("click.slick", t.changeSlide),
                      !0 === t.options.accessibility &&
                        (t.$prevArrow &&
                          t.$prevArrow.off("keydown.slick", t.keyHandler),
                        t.$nextArrow &&
                          t.$nextArrow.off("keydown.slick", t.keyHandler))),
                    t.$list.off(
                      "touchstart.slick mousedown.slick",
                      t.swipeHandler
                    ),
                    t.$list.off(
                      "touchmove.slick mousemove.slick",
                      t.swipeHandler
                    ),
                    t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                    t.$list.off(
                      "touchcancel.slick mouseleave.slick",
                      t.swipeHandler
                    ),
                    t.$list.off("click.slick", t.clickHandler),
                    e(document).off(t.visibilityChange, t.visibility),
                    t.cleanUpSlideEvents(),
                    !0 === t.options.accessibility &&
                      t.$list.off("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect &&
                      e(t.$slideTrack)
                        .children()
                        .off("click.slick", t.selectHandler),
                    e(window).off(
                      "orientationchange.slick.slick-" + t.instanceUid,
                      t.orientationChange
                    ),
                    e(window).off(
                      "resize.slick.slick-" + t.instanceUid,
                      t.resize
                    ),
                    e("[draggable!=true]", t.$slideTrack).off(
                      "dragstart",
                      t.preventDefault
                    ),
                    e(window).off(
                      "load.slick.slick-" + t.instanceUid,
                      t.setPosition
                    );
                }),
                (n.prototype.cleanUpSlideEvents = function () {
                  var t = this;
                  t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
                    t.$list.off(
                      "mouseleave.slick",
                      e.proxy(t.interrupt, t, !1)
                    );
                }),
                (n.prototype.cleanUpRows = function () {
                  var e,
                    t = this;
                  t.options.rows > 0 &&
                    ((e = t.$slides.children().children()).removeAttr("style"),
                    t.$slider.empty().append(e));
                }),
                (n.prototype.clickHandler = function (e) {
                  !1 === this.shouldClick &&
                    (e.stopImmediatePropagation(),
                    e.stopPropagation(),
                    e.preventDefault());
                }),
                (n.prototype.destroy = function (t) {
                  var n = this;
                  n.autoPlayClear(),
                    (n.touchObject = {}),
                    n.cleanUpEvents(),
                    e(".slick-cloned", n.$slider).detach(),
                    n.$dots && n.$dots.remove(),
                    n.$prevArrow &&
                      n.$prevArrow.length &&
                      (n.$prevArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                      n.htmlExpr.test(n.options.prevArrow) &&
                        n.$prevArrow.remove()),
                    n.$nextArrow &&
                      n.$nextArrow.length &&
                      (n.$nextArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                      n.htmlExpr.test(n.options.nextArrow) &&
                        n.$nextArrow.remove()),
                    n.$slides &&
                      (n.$slides
                        .removeClass(
                          "slick-slide slick-active slick-center slick-visible slick-current"
                        )
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                          e(this).attr(
                            "style",
                            e(this).data("originalStyling")
                          );
                        }),
                      n.$slideTrack.children(this.options.slide).detach(),
                      n.$slideTrack.detach(),
                      n.$list.detach(),
                      n.$slider.append(n.$slides)),
                    n.cleanUpRows(),
                    n.$slider.removeClass("slick-slider"),
                    n.$slider.removeClass("slick-initialized"),
                    n.$slider.removeClass("slick-dotted"),
                    (n.unslicked = !0),
                    t || n.$slider.trigger("destroy", [n]);
                }),
                (n.prototype.disableTransition = function (e) {
                  var t = this,
                    n = {};
                  (n[t.transitionType] = ""),
                    !1 === t.options.fade
                      ? t.$slideTrack.css(n)
                      : t.$slides.eq(e).css(n);
                }),
                (n.prototype.fadeSlide = function (e, t) {
                  var n = this;
                  !1 === n.cssTransitions
                    ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
                      n.$slides
                        .eq(e)
                        .animate(
                          { opacity: 1 },
                          n.options.speed,
                          n.options.easing,
                          t
                        ))
                    : (n.applyTransition(e),
                      n.$slides
                        .eq(e)
                        .css({ opacity: 1, zIndex: n.options.zIndex }),
                      t &&
                        setTimeout(function () {
                          n.disableTransition(e), t.call();
                        }, n.options.speed));
                }),
                (n.prototype.fadeSlideOut = function (e) {
                  var t = this;
                  !1 === t.cssTransitions
                    ? t.$slides
                        .eq(e)
                        .animate(
                          { opacity: 0, zIndex: t.options.zIndex - 2 },
                          t.options.speed,
                          t.options.easing
                        )
                    : (t.applyTransition(e),
                      t.$slides
                        .eq(e)
                        .css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
                }),
                (n.prototype.filterSlides = n.prototype.slickFilter =
                  function (e) {
                    var t = this;
                    null !== e &&
                      ((t.$slidesCache = t.$slides),
                      t.unload(),
                      t.$slideTrack.children(this.options.slide).detach(),
                      t.$slidesCache.filter(e).appendTo(t.$slideTrack),
                      t.reinit());
                  }),
                (n.prototype.focusHandler = function () {
                  var t = this;
                  t.$slider
                    .off("focus.slick blur.slick")
                    .on("focus.slick blur.slick", "*", function (n) {
                      n.stopImmediatePropagation();
                      var i = e(this);
                      setTimeout(function () {
                        t.options.pauseOnFocus &&
                          ((t.focussed = i.is(":focus")), t.autoPlay());
                      }, 0);
                    });
                }),
                (n.prototype.getCurrent = n.prototype.slickCurrentSlide =
                  function () {
                    return this.currentSlide;
                  }),
                (n.prototype.getDotCount = function () {
                  var e = this,
                    t = 0,
                    n = 0,
                    i = 0;
                  if (!0 === e.options.infinite)
                    if (e.slideCount <= e.options.slidesToShow) ++i;
                    else
                      for (; t < e.slideCount; )
                        ++i,
                          (t = n + e.options.slidesToScroll),
                          (n +=
                            e.options.slidesToScroll <= e.options.slidesToShow
                              ? e.options.slidesToScroll
                              : e.options.slidesToShow);
                  else if (!0 === e.options.centerMode) i = e.slideCount;
                  else if (e.options.asNavFor)
                    for (; t < e.slideCount; )
                      ++i,
                        (t = n + e.options.slidesToScroll),
                        (n +=
                          e.options.slidesToScroll <= e.options.slidesToShow
                            ? e.options.slidesToScroll
                            : e.options.slidesToShow);
                  else
                    i =
                      1 +
                      Math.ceil(
                        (e.slideCount - e.options.slidesToShow) /
                          e.options.slidesToScroll
                      );
                  return i - 1;
                }),
                (n.prototype.getLeft = function (e) {
                  var t,
                    n,
                    i,
                    o,
                    r = this,
                    s = 0;
                  return (
                    (r.slideOffset = 0),
                    (n = r.$slides.first().outerHeight(!0)),
                    !0 === r.options.infinite
                      ? (r.slideCount > r.options.slidesToShow &&
                          ((r.slideOffset =
                            r.slideWidth * r.options.slidesToShow * -1),
                          (o = -1),
                          !0 === r.options.vertical &&
                            !0 === r.options.centerMode &&
                            (2 === r.options.slidesToShow
                              ? (o = -1.5)
                              : 1 === r.options.slidesToShow && (o = -2)),
                          (s = n * r.options.slidesToShow * o)),
                        r.slideCount % r.options.slidesToScroll != 0 &&
                          e + r.options.slidesToScroll > r.slideCount &&
                          r.slideCount > r.options.slidesToShow &&
                          (e > r.slideCount
                            ? ((r.slideOffset =
                                (r.options.slidesToShow - (e - r.slideCount)) *
                                r.slideWidth *
                                -1),
                              (s =
                                (r.options.slidesToShow - (e - r.slideCount)) *
                                n *
                                -1))
                            : ((r.slideOffset =
                                (r.slideCount % r.options.slidesToScroll) *
                                r.slideWidth *
                                -1),
                              (s =
                                (r.slideCount % r.options.slidesToScroll) *
                                n *
                                -1))))
                      : e + r.options.slidesToShow > r.slideCount &&
                        ((r.slideOffset =
                          (e + r.options.slidesToShow - r.slideCount) *
                          r.slideWidth),
                        (s = (e + r.options.slidesToShow - r.slideCount) * n)),
                    r.slideCount <= r.options.slidesToShow &&
                      ((r.slideOffset = 0), (s = 0)),
                    !0 === r.options.centerMode &&
                    r.slideCount <= r.options.slidesToShow
                      ? (r.slideOffset =
                          (r.slideWidth * Math.floor(r.options.slidesToShow)) /
                            2 -
                          (r.slideWidth * r.slideCount) / 2)
                      : !0 === r.options.centerMode && !0 === r.options.infinite
                      ? (r.slideOffset +=
                          r.slideWidth *
                            Math.floor(r.options.slidesToShow / 2) -
                          r.slideWidth)
                      : !0 === r.options.centerMode &&
                        ((r.slideOffset = 0),
                        (r.slideOffset +=
                          r.slideWidth *
                          Math.floor(r.options.slidesToShow / 2))),
                    (t =
                      !1 === r.options.vertical
                        ? e * r.slideWidth * -1 + r.slideOffset
                        : e * n * -1 + s),
                    !0 === r.options.variableWidth &&
                      ((i =
                        r.slideCount <= r.options.slidesToShow ||
                        !1 === r.options.infinite
                          ? r.$slideTrack.children(".slick-slide").eq(e)
                          : r.$slideTrack
                              .children(".slick-slide")
                              .eq(e + r.options.slidesToShow)),
                      (t =
                        !0 === r.options.rtl
                          ? i[0]
                            ? -1 *
                              (r.$slideTrack.width() -
                                i[0].offsetLeft -
                                i.width())
                            : 0
                          : i[0]
                          ? -1 * i[0].offsetLeft
                          : 0),
                      !0 === r.options.centerMode &&
                        ((i =
                          r.slideCount <= r.options.slidesToShow ||
                          !1 === r.options.infinite
                            ? r.$slideTrack.children(".slick-slide").eq(e)
                            : r.$slideTrack
                                .children(".slick-slide")
                                .eq(e + r.options.slidesToShow + 1)),
                        (t =
                          !0 === r.options.rtl
                            ? i[0]
                              ? -1 *
                                (r.$slideTrack.width() -
                                  i[0].offsetLeft -
                                  i.width())
                              : 0
                            : i[0]
                            ? -1 * i[0].offsetLeft
                            : 0),
                        (t += (r.$list.width() - i.outerWidth()) / 2))),
                    t
                  );
                }),
                (n.prototype.getOption = n.prototype.slickGetOption =
                  function (e) {
                    return this.options[e];
                  }),
                (n.prototype.getNavigableIndexes = function () {
                  var e,
                    t = this,
                    n = 0,
                    i = 0,
                    o = [];
                  for (
                    !1 === t.options.infinite
                      ? (e = t.slideCount)
                      : ((n = -1 * t.options.slidesToScroll),
                        (i = -1 * t.options.slidesToScroll),
                        (e = 2 * t.slideCount));
                    n < e;

                  )
                    o.push(n),
                      (n = i + t.options.slidesToScroll),
                      (i +=
                        t.options.slidesToScroll <= t.options.slidesToShow
                          ? t.options.slidesToScroll
                          : t.options.slidesToShow);
                  return o;
                }),
                (n.prototype.getSlick = function () {
                  return this;
                }),
                (n.prototype.getSlideCount = function () {
                  var t,
                    n,
                    i = this;
                  return (
                    (n =
                      !0 === i.options.centerMode
                        ? i.slideWidth * Math.floor(i.options.slidesToShow / 2)
                        : 0),
                    !0 === i.options.swipeToSlide
                      ? (i.$slideTrack
                          .find(".slick-slide")
                          .each(function (o, r) {
                            if (
                              r.offsetLeft - n + e(r).outerWidth() / 2 >
                              -1 * i.swipeLeft
                            )
                              return (t = r), !1;
                          }),
                        Math.abs(
                          e(t).attr("data-slick-index") - i.currentSlide
                        ) || 1)
                      : i.options.slidesToScroll
                  );
                }),
                (n.prototype.goTo = n.prototype.slickGoTo =
                  function (e, t) {
                    this.changeSlide(
                      { data: { message: "index", index: parseInt(e) } },
                      t
                    );
                  }),
                (n.prototype.init = function (t) {
                  var n = this;
                  e(n.$slider).hasClass("slick-initialized") ||
                    (e(n.$slider).addClass("slick-initialized"),
                    n.buildRows(),
                    n.buildOut(),
                    n.setProps(),
                    n.startLoad(),
                    n.loadSlider(),
                    n.initializeEvents(),
                    n.updateArrows(),
                    n.updateDots(),
                    n.checkResponsive(!0),
                    n.focusHandler()),
                    t && n.$slider.trigger("init", [n]),
                    !0 === n.options.accessibility && n.initADA(),
                    n.options.autoplay && ((n.paused = !1), n.autoPlay());
                }),
                (n.prototype.initADA = function () {
                  var t = this,
                    n = Math.ceil(t.slideCount / t.options.slidesToShow),
                    i = t.getNavigableIndexes().filter(function (e) {
                      return e >= 0 && e < t.slideCount;
                    });
                  t.$slides
                    .add(t.$slideTrack.find(".slick-cloned"))
                    .attr({ "aria-hidden": "true", tabindex: "-1" })
                    .find("a, input, button, select")
                    .attr({ tabindex: "-1" }),
                    null !== t.$dots &&
                      (t.$slides
                        .not(t.$slideTrack.find(".slick-cloned"))
                        .each(function (n) {
                          var o = i.indexOf(n);
                          if (
                            (e(this).attr({
                              role: "tabpanel",
                              id: "slick-slide" + t.instanceUid + n,
                              tabindex: -1,
                            }),
                            -1 !== o)
                          ) {
                            var r = "slick-slide-control" + t.instanceUid + o;
                            e("#" + r).length &&
                              e(this).attr({ "aria-describedby": r });
                          }
                        }),
                      t.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (o) {
                          var r = i[o];
                          e(this).attr({ role: "presentation" }),
                            e(this)
                              .find("button")
                              .first()
                              .attr({
                                role: "tab",
                                id: "slick-slide-control" + t.instanceUid + o,
                                "aria-controls":
                                  "slick-slide" + t.instanceUid + r,
                                "aria-label": o + 1 + " of " + n,
                                "aria-selected": null,
                                tabindex: "-1",
                              });
                        })
                        .eq(t.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabindex: "0" })
                        .end());
                  for (
                    var o = t.currentSlide, r = o + t.options.slidesToShow;
                    o < r;
                    o++
                  )
                    t.options.focusOnChange
                      ? t.$slides.eq(o).attr({ tabindex: "0" })
                      : t.$slides.eq(o).removeAttr("tabindex");
                  t.activateADA();
                }),
                (n.prototype.initArrowEvents = function () {
                  var e = this;
                  !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow
                      .off("click.slick")
                      .on(
                        "click.slick",
                        { message: "previous" },
                        e.changeSlide
                      ),
                    e.$nextArrow
                      .off("click.slick")
                      .on("click.slick", { message: "next" }, e.changeSlide),
                    !0 === e.options.accessibility &&
                      (e.$prevArrow.on("keydown.slick", e.keyHandler),
                      e.$nextArrow.on("keydown.slick", e.keyHandler)));
                }),
                (n.prototype.initDotEvents = function () {
                  var t = this;
                  !0 === t.options.dots &&
                    t.slideCount > t.options.slidesToShow &&
                    (e("li", t.$dots).on(
                      "click.slick",
                      { message: "index" },
                      t.changeSlide
                    ),
                    !0 === t.options.accessibility &&
                      t.$dots.on("keydown.slick", t.keyHandler)),
                    !0 === t.options.dots &&
                      !0 === t.options.pauseOnDotsHover &&
                      t.slideCount > t.options.slidesToShow &&
                      e("li", t.$dots)
                        .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                        .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
                }),
                (n.prototype.initSlideEvents = function () {
                  var t = this;
                  t.options.pauseOnHover &&
                    (t.$list.on(
                      "mouseenter.slick",
                      e.proxy(t.interrupt, t, !0)
                    ),
                    t.$list.on(
                      "mouseleave.slick",
                      e.proxy(t.interrupt, t, !1)
                    ));
                }),
                (n.prototype.initializeEvents = function () {
                  var t = this;
                  t.initArrowEvents(),
                    t.initDotEvents(),
                    t.initSlideEvents(),
                    t.$list.on(
                      "touchstart.slick mousedown.slick",
                      { action: "start" },
                      t.swipeHandler
                    ),
                    t.$list.on(
                      "touchmove.slick mousemove.slick",
                      { action: "move" },
                      t.swipeHandler
                    ),
                    t.$list.on(
                      "touchend.slick mouseup.slick",
                      { action: "end" },
                      t.swipeHandler
                    ),
                    t.$list.on(
                      "touchcancel.slick mouseleave.slick",
                      { action: "end" },
                      t.swipeHandler
                    ),
                    t.$list.on("click.slick", t.clickHandler),
                    e(document).on(
                      t.visibilityChange,
                      e.proxy(t.visibility, t)
                    ),
                    !0 === t.options.accessibility &&
                      t.$list.on("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect &&
                      e(t.$slideTrack)
                        .children()
                        .on("click.slick", t.selectHandler),
                    e(window).on(
                      "orientationchange.slick.slick-" + t.instanceUid,
                      e.proxy(t.orientationChange, t)
                    ),
                    e(window).on(
                      "resize.slick.slick-" + t.instanceUid,
                      e.proxy(t.resize, t)
                    ),
                    e("[draggable!=true]", t.$slideTrack).on(
                      "dragstart",
                      t.preventDefault
                    ),
                    e(window).on(
                      "load.slick.slick-" + t.instanceUid,
                      t.setPosition
                    ),
                    e(t.setPosition);
                }),
                (n.prototype.initUI = function () {
                  var e = this;
                  !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow.show(), e.$nextArrow.show()),
                    !0 === e.options.dots &&
                      e.slideCount > e.options.slidesToShow &&
                      e.$dots.show();
                }),
                (n.prototype.keyHandler = function (e) {
                  var t = this;
                  e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === e.keyCode && !0 === t.options.accessibility
                      ? t.changeSlide({
                          data: {
                            message: !0 === t.options.rtl ? "next" : "previous",
                          },
                        })
                      : 39 === e.keyCode &&
                        !0 === t.options.accessibility &&
                        t.changeSlide({
                          data: {
                            message: !0 === t.options.rtl ? "previous" : "next",
                          },
                        }));
                }),
                (n.prototype.lazyLoad = function () {
                  var t,
                    n,
                    i,
                    o = this;
                  function r(t) {
                    e("img[data-lazy]", t).each(function () {
                      var t = e(this),
                        n = e(this).attr("data-lazy"),
                        i = e(this).attr("data-srcset"),
                        r =
                          e(this).attr("data-sizes") ||
                          o.$slider.attr("data-sizes"),
                        s = document.createElement("img");
                      (s.onload = function () {
                        t.animate({ opacity: 0 }, 100, function () {
                          i && (t.attr("srcset", i), r && t.attr("sizes", r)),
                            t
                              .attr("src", n)
                              .animate({ opacity: 1 }, 200, function () {
                                t.removeAttr(
                                  "data-lazy data-srcset data-sizes"
                                ).removeClass("slick-loading");
                              }),
                            o.$slider.trigger("lazyLoaded", [o, t, n]);
                        });
                      }),
                        (s.onerror = function () {
                          t
                            .removeAttr("data-lazy")
                            .removeClass("slick-loading")
                            .addClass("slick-lazyload-error"),
                            o.$slider.trigger("lazyLoadError", [o, t, n]);
                        }),
                        (s.src = n);
                    });
                  }
                  if (
                    (!0 === o.options.centerMode
                      ? !0 === o.options.infinite
                        ? (i =
                            (n =
                              o.currentSlide +
                              (o.options.slidesToShow / 2 + 1)) +
                            o.options.slidesToShow +
                            2)
                        : ((n = Math.max(
                            0,
                            o.currentSlide - (o.options.slidesToShow / 2 + 1)
                          )),
                          (i =
                            o.options.slidesToShow / 2 +
                            1 +
                            2 +
                            o.currentSlide))
                      : ((n = o.options.infinite
                          ? o.options.slidesToShow + o.currentSlide
                          : o.currentSlide),
                        (i = Math.ceil(n + o.options.slidesToShow)),
                        !0 === o.options.fade &&
                          (n > 0 && n--, i <= o.slideCount && i++)),
                    (t = o.$slider.find(".slick-slide").slice(n, i)),
                    "anticipated" === o.options.lazyLoad)
                  )
                    for (
                      var s = n - 1,
                        a = i,
                        l = o.$slider.find(".slick-slide"),
                        c = 0;
                      c < o.options.slidesToScroll;
                      c++
                    )
                      s < 0 && (s = o.slideCount - 1),
                        (t = (t = t.add(l.eq(s))).add(l.eq(a))),
                        s--,
                        a++;
                  r(t),
                    o.slideCount <= o.options.slidesToShow
                      ? r(o.$slider.find(".slick-slide"))
                      : o.currentSlide >= o.slideCount - o.options.slidesToShow
                      ? r(
                          o.$slider
                            .find(".slick-cloned")
                            .slice(0, o.options.slidesToShow)
                        )
                      : 0 === o.currentSlide &&
                        r(
                          o.$slider
                            .find(".slick-cloned")
                            .slice(-1 * o.options.slidesToShow)
                        );
                }),
                (n.prototype.loadSlider = function () {
                  var e = this;
                  e.setPosition(),
                    e.$slideTrack.css({ opacity: 1 }),
                    e.$slider.removeClass("slick-loading"),
                    e.initUI(),
                    "progressive" === e.options.lazyLoad &&
                      e.progressiveLazyLoad();
                }),
                (n.prototype.next = n.prototype.slickNext =
                  function () {
                    this.changeSlide({ data: { message: "next" } });
                  }),
                (n.prototype.orientationChange = function () {
                  this.checkResponsive(), this.setPosition();
                }),
                (n.prototype.pause = n.prototype.slickPause =
                  function () {
                    this.autoPlayClear(), (this.paused = !0);
                  }),
                (n.prototype.play = n.prototype.slickPlay =
                  function () {
                    var e = this;
                    e.autoPlay(),
                      (e.options.autoplay = !0),
                      (e.paused = !1),
                      (e.focussed = !1),
                      (e.interrupted = !1);
                  }),
                (n.prototype.postSlide = function (t) {
                  var n = this;
                  n.unslicked ||
                    (n.$slider.trigger("afterChange", [n, t]),
                    (n.animating = !1),
                    n.slideCount > n.options.slidesToShow && n.setPosition(),
                    (n.swipeLeft = null),
                    n.options.autoplay && n.autoPlay(),
                    !0 === n.options.accessibility &&
                      (n.initADA(),
                      n.options.focusOnChange &&
                        e(n.$slides.get(n.currentSlide))
                          .attr("tabindex", 0)
                          .focus()));
                }),
                (n.prototype.prev = n.prototype.slickPrev =
                  function () {
                    this.changeSlide({ data: { message: "previous" } });
                  }),
                (n.prototype.preventDefault = function (e) {
                  e.preventDefault();
                }),
                (n.prototype.progressiveLazyLoad = function (t) {
                  t = t || 1;
                  var n,
                    i,
                    o,
                    r,
                    s,
                    a = this,
                    l = e("img[data-lazy]", a.$slider);
                  l.length
                    ? ((n = l.first()),
                      (i = n.attr("data-lazy")),
                      (o = n.attr("data-srcset")),
                      (r =
                        n.attr("data-sizes") || a.$slider.attr("data-sizes")),
                      ((s = document.createElement("img")).onload =
                        function () {
                          o && (n.attr("srcset", o), r && n.attr("sizes", r)),
                            n
                              .attr("src", i)
                              .removeAttr("data-lazy data-srcset data-sizes")
                              .removeClass("slick-loading"),
                            !0 === a.options.adaptiveHeight && a.setPosition(),
                            a.$slider.trigger("lazyLoaded", [a, n, i]),
                            a.progressiveLazyLoad();
                        }),
                      (s.onerror = function () {
                        t < 3
                          ? setTimeout(function () {
                              a.progressiveLazyLoad(t + 1);
                            }, 500)
                          : (n
                              .removeAttr("data-lazy")
                              .removeClass("slick-loading")
                              .addClass("slick-lazyload-error"),
                            a.$slider.trigger("lazyLoadError", [a, n, i]),
                            a.progressiveLazyLoad());
                      }),
                      (s.src = i))
                    : a.$slider.trigger("allImagesLoaded", [a]);
                }),
                (n.prototype.refresh = function (t) {
                  var n,
                    i,
                    o = this;
                  (i = o.slideCount - o.options.slidesToShow),
                    !o.options.infinite &&
                      o.currentSlide > i &&
                      (o.currentSlide = i),
                    o.slideCount <= o.options.slidesToShow &&
                      (o.currentSlide = 0),
                    (n = o.currentSlide),
                    o.destroy(!0),
                    e.extend(o, o.initials, { currentSlide: n }),
                    o.init(),
                    t ||
                      o.changeSlide(
                        { data: { message: "index", index: n } },
                        !1
                      );
                }),
                (n.prototype.registerBreakpoints = function () {
                  var t,
                    n,
                    i,
                    o = this,
                    r = o.options.responsive || null;
                  if ("array" === e.type(r) && r.length) {
                    for (t in ((o.respondTo = o.options.respondTo || "window"),
                    r))
                      if (
                        ((i = o.breakpoints.length - 1), r.hasOwnProperty(t))
                      ) {
                        for (n = r[t].breakpoint; i >= 0; )
                          o.breakpoints[i] &&
                            o.breakpoints[i] === n &&
                            o.breakpoints.splice(i, 1),
                            i--;
                        o.breakpoints.push(n),
                          (o.breakpointSettings[n] = r[t].settings);
                      }
                    o.breakpoints.sort(function (e, t) {
                      return o.options.mobileFirst ? e - t : t - e;
                    });
                  }
                }),
                (n.prototype.reinit = function () {
                  var t = this;
                  (t.$slides = t.$slideTrack
                    .children(t.options.slide)
                    .addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.currentSlide >= t.slideCount &&
                      0 !== t.currentSlide &&
                      (t.currentSlide =
                        t.currentSlide - t.options.slidesToScroll),
                    t.slideCount <= t.options.slidesToShow &&
                      (t.currentSlide = 0),
                    t.registerBreakpoints(),
                    t.setProps(),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.updateArrows(),
                    t.initArrowEvents(),
                    t.buildDots(),
                    t.updateDots(),
                    t.initDotEvents(),
                    t.cleanUpSlideEvents(),
                    t.initSlideEvents(),
                    t.checkResponsive(!1, !0),
                    !0 === t.options.focusOnSelect &&
                      e(t.$slideTrack)
                        .children()
                        .on("click.slick", t.selectHandler),
                    t.setSlideClasses(
                      "number" == typeof t.currentSlide ? t.currentSlide : 0
                    ),
                    t.setPosition(),
                    t.focusHandler(),
                    (t.paused = !t.options.autoplay),
                    t.autoPlay(),
                    t.$slider.trigger("reInit", [t]);
                }),
                (n.prototype.resize = function () {
                  var t = this;
                  e(window).width() !== t.windowWidth &&
                    (clearTimeout(t.windowDelay),
                    (t.windowDelay = window.setTimeout(function () {
                      (t.windowWidth = e(window).width()),
                        t.checkResponsive(),
                        t.unslicked || t.setPosition();
                    }, 50)));
                }),
                (n.prototype.removeSlide = n.prototype.slickRemove =
                  function (e, t, n) {
                    var i = this;
                    if (
                      ((e =
                        "boolean" == typeof e
                          ? !0 === (t = e)
                            ? 0
                            : i.slideCount - 1
                          : !0 === t
                          ? --e
                          : e),
                      i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
                    )
                      return !1;
                    i.unload(),
                      !0 === n
                        ? i.$slideTrack.children().remove()
                        : i.$slideTrack
                            .children(this.options.slide)
                            .eq(e)
                            .remove(),
                      (i.$slides = i.$slideTrack.children(this.options.slide)),
                      i.$slideTrack.children(this.options.slide).detach(),
                      i.$slideTrack.append(i.$slides),
                      (i.$slidesCache = i.$slides),
                      i.reinit();
                  }),
                (n.prototype.setCSS = function (e) {
                  var t,
                    n,
                    i = this,
                    o = {};
                  !0 === i.options.rtl && (e = -e),
                    (t =
                      "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (o[i.positionProp] = e),
                    !1 === i.transformsEnabled
                      ? i.$slideTrack.css(o)
                      : ((o = {}),
                        !1 === i.cssTransitions
                          ? ((o[i.animType] =
                              "translate(" + t + ", " + n + ")"),
                            i.$slideTrack.css(o))
                          : ((o[i.animType] =
                              "translate3d(" + t + ", " + n + ", 0px)"),
                            i.$slideTrack.css(o)));
                }),
                (n.prototype.setDimensions = function () {
                  var e = this;
                  !1 === e.options.vertical
                    ? !0 === e.options.centerMode &&
                      e.$list.css({ padding: "0px " + e.options.centerPadding })
                    : (e.$list.height(
                        e.$slides.first().outerHeight(!0) *
                          e.options.slidesToShow
                      ),
                      !0 === e.options.centerMode &&
                        e.$list.css({
                          padding: e.options.centerPadding + " 0px",
                        })),
                    (e.listWidth = e.$list.width()),
                    (e.listHeight = e.$list.height()),
                    !1 === e.options.vertical && !1 === e.options.variableWidth
                      ? ((e.slideWidth = Math.ceil(
                          e.listWidth / e.options.slidesToShow
                        )),
                        e.$slideTrack.width(
                          Math.ceil(
                            e.slideWidth *
                              e.$slideTrack.children(".slick-slide").length
                          )
                        ))
                      : !0 === e.options.variableWidth
                      ? e.$slideTrack.width(5e3 * e.slideCount)
                      : ((e.slideWidth = Math.ceil(e.listWidth)),
                        e.$slideTrack.height(
                          Math.ceil(
                            e.$slides.first().outerHeight(!0) *
                              e.$slideTrack.children(".slick-slide").length
                          )
                        ));
                  var t =
                    e.$slides.first().outerWidth(!0) -
                    e.$slides.first().width();
                  !1 === e.options.variableWidth &&
                    e.$slideTrack
                      .children(".slick-slide")
                      .width(e.slideWidth - t);
                }),
                (n.prototype.setFade = function () {
                  var t,
                    n = this;
                  n.$slides.each(function (i, o) {
                    (t = n.slideWidth * i * -1),
                      !0 === n.options.rtl
                        ? e(o).css({
                            position: "relative",
                            right: t,
                            top: 0,
                            zIndex: n.options.zIndex - 2,
                            opacity: 0,
                          })
                        : e(o).css({
                            position: "relative",
                            left: t,
                            top: 0,
                            zIndex: n.options.zIndex - 2,
                            opacity: 0,
                          });
                  }),
                    n.$slides
                      .eq(n.currentSlide)
                      .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
                }),
                (n.prototype.setHeight = function () {
                  var e = this;
                  if (
                    1 === e.options.slidesToShow &&
                    !0 === e.options.adaptiveHeight &&
                    !1 === e.options.vertical
                  ) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t);
                  }
                }),
                (n.prototype.setOption = n.prototype.slickSetOption =
                  function () {
                    var t,
                      n,
                      i,
                      o,
                      r,
                      s = this,
                      a = !1;
                    if (
                      ("object" === e.type(arguments[0])
                        ? ((i = arguments[0]),
                          (a = arguments[1]),
                          (r = "multiple"))
                        : "string" === e.type(arguments[0]) &&
                          ((i = arguments[0]),
                          (o = arguments[1]),
                          (a = arguments[2]),
                          "responsive" === arguments[0] &&
                          "array" === e.type(arguments[1])
                            ? (r = "responsive")
                            : void 0 !== arguments[1] && (r = "single")),
                      "single" === r)
                    )
                      s.options[i] = o;
                    else if ("multiple" === r)
                      e.each(i, function (e, t) {
                        s.options[e] = t;
                      });
                    else if ("responsive" === r)
                      for (n in o)
                        if ("array" !== e.type(s.options.responsive))
                          s.options.responsive = [o[n]];
                        else {
                          for (t = s.options.responsive.length - 1; t >= 0; )
                            s.options.responsive[t].breakpoint ===
                              o[n].breakpoint &&
                              s.options.responsive.splice(t, 1),
                              t--;
                          s.options.responsive.push(o[n]);
                        }
                    a && (s.unload(), s.reinit());
                  }),
                (n.prototype.setPosition = function () {
                  var e = this;
                  e.setDimensions(),
                    e.setHeight(),
                    !1 === e.options.fade
                      ? e.setCSS(e.getLeft(e.currentSlide))
                      : e.setFade(),
                    e.$slider.trigger("setPosition", [e]);
                }),
                (n.prototype.setProps = function () {
                  var e = this,
                    t = document.body.style;
                  (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
                    "top" === e.positionProp
                      ? e.$slider.addClass("slick-vertical")
                      : e.$slider.removeClass("slick-vertical"),
                    (void 0 === t.WebkitTransition &&
                      void 0 === t.MozTransition &&
                      void 0 === t.msTransition) ||
                      (!0 === e.options.useCSS && (e.cssTransitions = !0)),
                    e.options.fade &&
                      ("number" == typeof e.options.zIndex
                        ? e.options.zIndex < 3 && (e.options.zIndex = 3)
                        : (e.options.zIndex = e.defaults.zIndex)),
                    void 0 !== t.OTransform &&
                      ((e.animType = "OTransform"),
                      (e.transformType = "-o-transform"),
                      (e.transitionType = "OTransition"),
                      void 0 === t.perspectiveProperty &&
                        void 0 === t.webkitPerspective &&
                        (e.animType = !1)),
                    void 0 !== t.MozTransform &&
                      ((e.animType = "MozTransform"),
                      (e.transformType = "-moz-transform"),
                      (e.transitionType = "MozTransition"),
                      void 0 === t.perspectiveProperty &&
                        void 0 === t.MozPerspective &&
                        (e.animType = !1)),
                    void 0 !== t.webkitTransform &&
                      ((e.animType = "webkitTransform"),
                      (e.transformType = "-webkit-transform"),
                      (e.transitionType = "webkitTransition"),
                      void 0 === t.perspectiveProperty &&
                        void 0 === t.webkitPerspective &&
                        (e.animType = !1)),
                    void 0 !== t.msTransform &&
                      ((e.animType = "msTransform"),
                      (e.transformType = "-ms-transform"),
                      (e.transitionType = "msTransition"),
                      void 0 === t.msTransform && (e.animType = !1)),
                    void 0 !== t.transform &&
                      !1 !== e.animType &&
                      ((e.animType = "transform"),
                      (e.transformType = "transform"),
                      (e.transitionType = "transition")),
                    (e.transformsEnabled =
                      e.options.useTransform &&
                      null !== e.animType &&
                      !1 !== e.animType);
                }),
                (n.prototype.setSlideClasses = function (e) {
                  var t,
                    n,
                    i,
                    o,
                    r = this;
                  if (
                    ((n = r.$slider
                      .find(".slick-slide")
                      .removeClass("slick-active slick-center slick-current")
                      .attr("aria-hidden", "true")),
                    r.$slides.eq(e).addClass("slick-current"),
                    !0 === r.options.centerMode)
                  ) {
                    var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                    (t = Math.floor(r.options.slidesToShow / 2)),
                      !0 === r.options.infinite &&
                        (e >= t && e <= r.slideCount - 1 - t
                          ? r.$slides
                              .slice(e - t + s, e + t + 1)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                          : ((i = r.options.slidesToShow + e),
                            n
                              .slice(i - t + 1 + s, i + t + 2)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")),
                        0 === e
                          ? n
                              .eq(n.length - 1 - r.options.slidesToShow)
                              .addClass("slick-center")
                          : e === r.slideCount - 1 &&
                            n
                              .eq(r.options.slidesToShow)
                              .addClass("slick-center")),
                      r.$slides.eq(e).addClass("slick-center");
                  } else
                    e >= 0 && e <= r.slideCount - r.options.slidesToShow
                      ? r.$slides
                          .slice(e, e + r.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                      : n.length <= r.options.slidesToShow
                      ? n.addClass("slick-active").attr("aria-hidden", "false")
                      : ((o = r.slideCount % r.options.slidesToShow),
                        (i =
                          !0 === r.options.infinite
                            ? r.options.slidesToShow + e
                            : e),
                        r.options.slidesToShow == r.options.slidesToScroll &&
                        r.slideCount - e < r.options.slidesToShow
                          ? n
                              .slice(i - (r.options.slidesToShow - o), i + o)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                          : n
                              .slice(i, i + r.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false"));
                  ("ondemand" !== r.options.lazyLoad &&
                    "anticipated" !== r.options.lazyLoad) ||
                    r.lazyLoad();
                }),
                (n.prototype.setupInfinite = function () {
                  var t,
                    n,
                    i,
                    o = this;
                  if (
                    (!0 === o.options.fade && (o.options.centerMode = !1),
                    !0 === o.options.infinite &&
                      !1 === o.options.fade &&
                      ((n = null), o.slideCount > o.options.slidesToShow))
                  ) {
                    for (
                      i =
                        !0 === o.options.centerMode
                          ? o.options.slidesToShow + 1
                          : o.options.slidesToShow,
                        t = o.slideCount;
                      t > o.slideCount - i;
                      t -= 1
                    )
                      (n = t - 1),
                        e(o.$slides[n])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", n - o.slideCount)
                          .prependTo(o.$slideTrack)
                          .addClass("slick-cloned");
                    for (t = 0; t < i + o.slideCount; t += 1)
                      (n = t),
                        e(o.$slides[n])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", n + o.slideCount)
                          .appendTo(o.$slideTrack)
                          .addClass("slick-cloned");
                    o.$slideTrack
                      .find(".slick-cloned")
                      .find("[id]")
                      .each(function () {
                        e(this).attr("id", "");
                      });
                  }
                }),
                (n.prototype.interrupt = function (e) {
                  e || this.autoPlay(), (this.interrupted = e);
                }),
                (n.prototype.selectHandler = function (t) {
                  var n = this,
                    i = e(t.target).is(".slick-slide")
                      ? e(t.target)
                      : e(t.target).parents(".slick-slide"),
                    o = parseInt(i.attr("data-slick-index"));
                  o || (o = 0),
                    n.slideCount <= n.options.slidesToShow
                      ? n.slideHandler(o, !1, !0)
                      : n.slideHandler(o);
                }),
                (n.prototype.slideHandler = function (e, t, n) {
                  var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c = this;
                  if (
                    ((t = t || !1),
                    !(
                      (!0 === c.animating && !0 === c.options.waitForAnimate) ||
                      (!0 === c.options.fade && c.currentSlide === e)
                    ))
                  )
                    if (
                      (!1 === t && c.asNavFor(e),
                      (i = e),
                      (a = c.getLeft(i)),
                      (s = c.getLeft(c.currentSlide)),
                      (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
                      !1 === c.options.infinite &&
                        !1 === c.options.centerMode &&
                        (e < 0 ||
                          e > c.getDotCount() * c.options.slidesToScroll))
                    )
                      !1 === c.options.fade &&
                        ((i = c.currentSlide),
                        !0 !== n && c.slideCount > c.options.slidesToShow
                          ? c.animateSlide(s, function () {
                              c.postSlide(i);
                            })
                          : c.postSlide(i));
                    else if (
                      !1 === c.options.infinite &&
                      !0 === c.options.centerMode &&
                      (e < 0 || e > c.slideCount - c.options.slidesToScroll)
                    )
                      !1 === c.options.fade &&
                        ((i = c.currentSlide),
                        !0 !== n && c.slideCount > c.options.slidesToShow
                          ? c.animateSlide(s, function () {
                              c.postSlide(i);
                            })
                          : c.postSlide(i));
                    else {
                      if (
                        (c.options.autoplay && clearInterval(c.autoPlayTimer),
                        (o =
                          i < 0
                            ? c.slideCount % c.options.slidesToScroll != 0
                              ? c.slideCount -
                                (c.slideCount % c.options.slidesToScroll)
                              : c.slideCount + i
                            : i >= c.slideCount
                            ? c.slideCount % c.options.slidesToScroll != 0
                              ? 0
                              : i - c.slideCount
                            : i),
                        (c.animating = !0),
                        c.$slider.trigger("beforeChange", [
                          c,
                          c.currentSlide,
                          o,
                        ]),
                        (r = c.currentSlide),
                        (c.currentSlide = o),
                        c.setSlideClasses(c.currentSlide),
                        c.options.asNavFor &&
                          (l = (l = c.getNavTarget()).slick("getSlick"))
                            .slideCount <= l.options.slidesToShow &&
                          l.setSlideClasses(c.currentSlide),
                        c.updateDots(),
                        c.updateArrows(),
                        !0 === c.options.fade)
                      )
                        return (
                          !0 !== n
                            ? (c.fadeSlideOut(r),
                              c.fadeSlide(o, function () {
                                c.postSlide(o);
                              }))
                            : c.postSlide(o),
                          void c.animateHeight()
                        );
                      !0 !== n && c.slideCount > c.options.slidesToShow
                        ? c.animateSlide(a, function () {
                            c.postSlide(o);
                          })
                        : c.postSlide(o);
                    }
                }),
                (n.prototype.startLoad = function () {
                  var e = this;
                  !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow.hide(), e.$nextArrow.hide()),
                    !0 === e.options.dots &&
                      e.slideCount > e.options.slidesToShow &&
                      e.$dots.hide(),
                    e.$slider.addClass("slick-loading");
                }),
                (n.prototype.swipeDirection = function () {
                  var e,
                    t,
                    n,
                    i,
                    o = this;
                  return (
                    (e = o.touchObject.startX - o.touchObject.curX),
                    (t = o.touchObject.startY - o.touchObject.curY),
                    (n = Math.atan2(t, e)),
                    (i = Math.round((180 * n) / Math.PI)) < 0 &&
                      (i = 360 - Math.abs(i)),
                    (i <= 45 && i >= 0) || (i <= 360 && i >= 315)
                      ? !1 === o.options.rtl
                        ? "left"
                        : "right"
                      : i >= 135 && i <= 225
                      ? !1 === o.options.rtl
                        ? "right"
                        : "left"
                      : !0 === o.options.verticalSwiping
                      ? i >= 35 && i <= 135
                        ? "down"
                        : "up"
                      : "vertical"
                  );
                }),
                (n.prototype.swipeEnd = function (e) {
                  var t,
                    n,
                    i = this;
                  if (((i.dragging = !1), (i.swiping = !1), i.scrolling))
                    return (i.scrolling = !1), !1;
                  if (
                    ((i.interrupted = !1),
                    (i.shouldClick = !(i.touchObject.swipeLength > 10)),
                    void 0 === i.touchObject.curX)
                  )
                    return !1;
                  if (
                    (!0 === i.touchObject.edgeHit &&
                      i.$slider.trigger("edge", [i, i.swipeDirection()]),
                    i.touchObject.swipeLength >= i.touchObject.minSwipe)
                  ) {
                    switch ((n = i.swipeDirection())) {
                      case "left":
                      case "down":
                        (t = i.options.swipeToSlide
                          ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                          : i.currentSlide + i.getSlideCount()),
                          (i.currentDirection = 0);
                        break;
                      case "right":
                      case "up":
                        (t = i.options.swipeToSlide
                          ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                          : i.currentSlide - i.getSlideCount()),
                          (i.currentDirection = 1);
                    }
                    "vertical" != n &&
                      (i.slideHandler(t),
                      (i.touchObject = {}),
                      i.$slider.trigger("swipe", [i, n]));
                  } else
                    i.touchObject.startX !== i.touchObject.curX &&
                      (i.slideHandler(i.currentSlide), (i.touchObject = {}));
                }),
                (n.prototype.swipeHandler = function (e) {
                  var t = this;
                  if (
                    !(
                      !1 === t.options.swipe ||
                      ("ontouchend" in document && !1 === t.options.swipe) ||
                      (!1 === t.options.draggable &&
                        -1 !== e.type.indexOf("mouse"))
                    )
                  )
                    switch (
                      ((t.touchObject.fingerCount =
                        e.originalEvent && void 0 !== e.originalEvent.touches
                          ? e.originalEvent.touches.length
                          : 1),
                      (t.touchObject.minSwipe =
                        t.listWidth / t.options.touchThreshold),
                      !0 === t.options.verticalSwiping &&
                        (t.touchObject.minSwipe =
                          t.listHeight / t.options.touchThreshold),
                      e.data.action)
                    ) {
                      case "start":
                        t.swipeStart(e);
                        break;
                      case "move":
                        t.swipeMove(e);
                        break;
                      case "end":
                        t.swipeEnd(e);
                    }
                }),
                (n.prototype.swipeMove = function (e) {
                  var t,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a = this;
                  return (
                    (r =
                      void 0 !== e.originalEvent
                        ? e.originalEvent.touches
                        : null),
                    !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
                      ((t = a.getLeft(a.currentSlide)),
                      (a.touchObject.curX =
                        void 0 !== r ? r[0].pageX : e.clientX),
                      (a.touchObject.curY =
                        void 0 !== r ? r[0].pageY : e.clientY),
                      (a.touchObject.swipeLength = Math.round(
                        Math.sqrt(
                          Math.pow(a.touchObject.curX - a.touchObject.startX, 2)
                        )
                      )),
                      (s = Math.round(
                        Math.sqrt(
                          Math.pow(a.touchObject.curY - a.touchObject.startY, 2)
                        )
                      )),
                      !a.options.verticalSwiping && !a.swiping && s > 4
                        ? ((a.scrolling = !0), !1)
                        : (!0 === a.options.verticalSwiping &&
                            (a.touchObject.swipeLength = s),
                          (n = a.swipeDirection()),
                          void 0 !== e.originalEvent &&
                            a.touchObject.swipeLength > 4 &&
                            ((a.swiping = !0), e.preventDefault()),
                          (o =
                            (!1 === a.options.rtl ? 1 : -1) *
                            (a.touchObject.curX > a.touchObject.startX
                              ? 1
                              : -1)),
                          !0 === a.options.verticalSwiping &&
                            (o =
                              a.touchObject.curY > a.touchObject.startY
                                ? 1
                                : -1),
                          (i = a.touchObject.swipeLength),
                          (a.touchObject.edgeHit = !1),
                          !1 === a.options.infinite &&
                            ((0 === a.currentSlide && "right" === n) ||
                              (a.currentSlide >= a.getDotCount() &&
                                "left" === n)) &&
                            ((i =
                              a.touchObject.swipeLength *
                              a.options.edgeFriction),
                            (a.touchObject.edgeHit = !0)),
                          !1 === a.options.vertical
                            ? (a.swipeLeft = t + i * o)
                            : (a.swipeLeft =
                                t + i * (a.$list.height() / a.listWidth) * o),
                          !0 === a.options.verticalSwiping &&
                            (a.swipeLeft = t + i * o),
                          !0 !== a.options.fade &&
                            !1 !== a.options.touchMove &&
                            (!0 === a.animating
                              ? ((a.swipeLeft = null), !1)
                              : void a.setCSS(a.swipeLeft))))
                  );
                }),
                (n.prototype.swipeStart = function (e) {
                  var t,
                    n = this;
                  if (
                    ((n.interrupted = !0),
                    1 !== n.touchObject.fingerCount ||
                      n.slideCount <= n.options.slidesToShow)
                  )
                    return (n.touchObject = {}), !1;
                  void 0 !== e.originalEvent &&
                    void 0 !== e.originalEvent.touches &&
                    (t = e.originalEvent.touches[0]),
                    (n.touchObject.startX = n.touchObject.curX =
                      void 0 !== t ? t.pageX : e.clientX),
                    (n.touchObject.startY = n.touchObject.curY =
                      void 0 !== t ? t.pageY : e.clientY),
                    (n.dragging = !0);
                }),
                (n.prototype.unfilterSlides = n.prototype.slickUnfilter =
                  function () {
                    var e = this;
                    null !== e.$slidesCache &&
                      (e.unload(),
                      e.$slideTrack.children(this.options.slide).detach(),
                      e.$slidesCache.appendTo(e.$slideTrack),
                      e.reinit());
                  }),
                (n.prototype.unload = function () {
                  var t = this;
                  e(".slick-cloned", t.$slider).remove(),
                    t.$dots && t.$dots.remove(),
                    t.$prevArrow &&
                      t.htmlExpr.test(t.options.prevArrow) &&
                      t.$prevArrow.remove(),
                    t.$nextArrow &&
                      t.htmlExpr.test(t.options.nextArrow) &&
                      t.$nextArrow.remove(),
                    t.$slides
                      .removeClass(
                        "slick-slide slick-active slick-visible slick-current"
                      )
                      .attr("aria-hidden", "true")
                      .css("width", "");
                }),
                (n.prototype.unslick = function (e) {
                  var t = this;
                  t.$slider.trigger("unslick", [t, e]), t.destroy();
                }),
                (n.prototype.updateArrows = function () {
                  var e = this;
                  Math.floor(e.options.slidesToShow / 2),
                    !0 === e.options.arrows &&
                      e.slideCount > e.options.slidesToShow &&
                      !e.options.infinite &&
                      (e.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                      e.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                      0 === e.currentSlide
                        ? (e.$prevArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                          e.$nextArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false"))
                        : ((e.currentSlide >=
                            e.slideCount - e.options.slidesToShow &&
                            !1 === e.options.centerMode) ||
                            (e.currentSlide >= e.slideCount - 1 &&
                              !0 === e.options.centerMode)) &&
                          (e.$nextArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                          e.$prevArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false")));
                }),
                (n.prototype.updateDots = function () {
                  var e = this;
                  null !== e.$dots &&
                    (e.$dots.find("li").removeClass("slick-active").end(),
                    e.$dots
                      .find("li")
                      .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
                      .addClass("slick-active"));
                }),
                (n.prototype.visibility = function () {
                  var e = this;
                  e.options.autoplay &&
                    (document[e.hidden]
                      ? (e.interrupted = !0)
                      : (e.interrupted = !1));
                }),
                (e.fn.slick = function () {
                  var e,
                    t,
                    i = this,
                    o = arguments[0],
                    r = Array.prototype.slice.call(arguments, 1),
                    s = i.length;
                  for (e = 0; e < s; e++)
                    if (
                      ("object" == typeof o || void 0 === o
                        ? (i[e].slick = new n(i[e], o))
                        : (t = i[e].slick[o].apply(i[e].slick, r)),
                      void 0 !== t)
                    )
                      return t;
                  return i;
                });
            })
              ? i.apply(t, o)
              : i) || (e.exports = r);
    })();
  },
  74: function (e, t) {},
  76: function (e, t) {},
  78: function (e, t) {},
  8: function (e, t, n) {
    var i, o, r;
    /*! Magnific Popup - v1.1.0 - 2016-02-20
     * http://dimsemenov.com/plugins/magnific-popup/
     * Copyright (c) 2016 Dmitry Semenov; */ (o = [n(0)]),
      void 0 ===
        (r =
          "function" ==
          typeof (i = function (e) {
            var t,
              n,
              i,
              o,
              r,
              s,
              a = function () {},
              l = !!window.jQuery,
              c = e(window),
              u = function (e, n) {
                t.ev.on("mfp" + e + ".mfp", n);
              },
              d = function (t, n, i, o) {
                var r = document.createElement("div");
                return (
                  (r.className = "mfp-" + t),
                  i && (r.innerHTML = i),
                  o ? n && n.appendChild(r) : ((r = e(r)), n && r.appendTo(n)),
                  r
                );
              },
              p = function (n, i) {
                t.ev.triggerHandler("mfp" + n, i),
                  t.st.callbacks &&
                    ((n = n.charAt(0).toLowerCase() + n.slice(1)),
                    t.st.callbacks[n] &&
                      t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
              },
              f = function (n) {
                return (
                  (n === s && t.currTemplate.closeBtn) ||
                    ((t.currTemplate.closeBtn = e(
                      t.st.closeMarkup.replace("%title%", t.st.tClose)
                    )),
                    (s = n)),
                  t.currTemplate.closeBtn
                );
              },
              h = function () {
                e.magnificPopup.instance ||
                  ((t = new a()).init(), (e.magnificPopup.instance = t));
              };
            (a.prototype = {
              constructor: a,
              init: function () {
                var n = navigator.appVersion;
                (t.isLowIE = t.isIE8 =
                  document.all && !document.addEventListener),
                  (t.isAndroid = /android/gi.test(n)),
                  (t.isIOS = /iphone|ipad|ipod/gi.test(n)),
                  (t.supportsTransition = (function () {
                    var e = document.createElement("p").style,
                      t = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== e.transition) return !0;
                    for (; t.length; )
                      if (t.pop() + "Transition" in e) return !0;
                    return !1;
                  })()),
                  (t.probablyMobile =
                    t.isAndroid ||
                    t.isIOS ||
                    /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                      navigator.userAgent
                    )),
                  (i = e(document)),
                  (t.popupsCache = {});
              },
              open: function (n) {
                var o;
                if (!1 === n.isObj) {
                  (t.items = n.items.toArray()), (t.index = 0);
                  var s,
                    a = n.items;
                  for (o = 0; o < a.length; o++)
                    if (((s = a[o]).parsed && (s = s.el[0]), s === n.el[0])) {
                      t.index = o;
                      break;
                    }
                } else
                  (t.items = e.isArray(n.items) ? n.items : [n.items]),
                    (t.index = n.index || 0);
                if (!t.isOpen) {
                  (t.types = []),
                    (r = ""),
                    n.mainEl && n.mainEl.length
                      ? (t.ev = n.mainEl.eq(0))
                      : (t.ev = i),
                    n.key
                      ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
                        (t.currTemplate = t.popupsCache[n.key]))
                      : (t.currTemplate = {}),
                    (t.st = e.extend(!0, {}, e.magnificPopup.defaults, n)),
                    (t.fixedContentPos =
                      "auto" === t.st.fixedContentPos
                        ? !t.probablyMobile
                        : t.st.fixedContentPos),
                    t.st.modal &&
                      ((t.st.closeOnContentClick = !1),
                      (t.st.closeOnBgClick = !1),
                      (t.st.showCloseBtn = !1),
                      (t.st.enableEscapeKey = !1)),
                    t.bgOverlay ||
                      ((t.bgOverlay = d("bg").on("click.mfp", function () {
                        t.close();
                      })),
                      (t.wrap = d("wrap")
                        .attr("tabindex", -1)
                        .on("click.mfp", function (e) {
                          t._checkIfClose(e.target) && t.close();
                        })),
                      (t.container = d("container", t.wrap))),
                    (t.contentContainer = d("content")),
                    t.st.preloader &&
                      (t.preloader = d(
                        "preloader",
                        t.container,
                        t.st.tLoading
                      ));
                  var l = e.magnificPopup.modules;
                  for (o = 0; o < l.length; o++) {
                    var h = l[o];
                    (h = h.charAt(0).toUpperCase() + h.slice(1)),
                      t["init" + h].call(t);
                  }
                  p("BeforeOpen"),
                    t.st.showCloseBtn &&
                      (t.st.closeBtnInside
                        ? (u("MarkupParse", function (e, t, n, i) {
                            n.close_replaceWith = f(i.type);
                          }),
                          (r += " mfp-close-btn-in"))
                        : t.wrap.append(f())),
                    t.st.alignTop && (r += " mfp-align-top"),
                    t.fixedContentPos
                      ? t.wrap.css({
                          overflow: t.st.overflowY,
                          overflowX: "hidden",
                          overflowY: t.st.overflowY,
                        })
                      : t.wrap.css({
                          top: c.scrollTop(),
                          position: "absolute",
                        }),
                    (!1 === t.st.fixedBgPos ||
                      ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
                      t.bgOverlay.css({
                        height: i.height(),
                        position: "absolute",
                      }),
                    t.st.enableEscapeKey &&
                      i.on("keyup.mfp", function (e) {
                        27 === e.keyCode && t.close();
                      }),
                    c.on("resize.mfp", function () {
                      t.updateSize();
                    }),
                    t.st.closeOnContentClick || (r += " mfp-auto-cursor"),
                    r && t.wrap.addClass(r);
                  var g = (t.wH = c.height()),
                    v = {};
                  if (t.fixedContentPos && t._hasScrollBar(g)) {
                    var m = t._getScrollbarSize();
                    m && (v.marginRight = m);
                  }
                  t.fixedContentPos &&
                    (t.isIE7
                      ? e("body, html").css("overflow", "hidden")
                      : (v.overflow = "hidden"));
                  var y = t.st.mainClass;
                  return (
                    t.isIE7 && (y += " mfp-ie7"),
                    y && t._addClassToMFP(y),
                    t.updateItemHTML(),
                    p("BuildControls"),
                    e("html").css(v),
                    t.bgOverlay
                      .add(t.wrap)
                      .prependTo(t.st.prependTo || e(document.body)),
                    (t._lastFocusedEl = document.activeElement),
                    setTimeout(function () {
                      t.content
                        ? (t._addClassToMFP("mfp-ready"), t._setFocus())
                        : t.bgOverlay.addClass("mfp-ready"),
                        i.on("focusin.mfp", t._onFocusIn);
                    }, 16),
                    (t.isOpen = !0),
                    t.updateSize(g),
                    p("Open"),
                    n
                  );
                }
                t.updateItemHTML();
              },
              close: function () {
                t.isOpen &&
                  (p("BeforeClose"),
                  (t.isOpen = !1),
                  t.st.removalDelay && !t.isLowIE && t.supportsTransition
                    ? (t._addClassToMFP("mfp-removing"),
                      setTimeout(function () {
                        t._close();
                      }, t.st.removalDelay))
                    : t._close());
              },
              _close: function () {
                p("Close");
                var n = "mfp-removing mfp-ready ";
                if (
                  (t.bgOverlay.detach(),
                  t.wrap.detach(),
                  t.container.empty(),
                  t.st.mainClass && (n += t.st.mainClass + " "),
                  t._removeClassFromMFP(n),
                  t.fixedContentPos)
                ) {
                  var o = { marginRight: "" };
                  t.isIE7
                    ? e("body, html").css("overflow", "")
                    : (o.overflow = ""),
                    e("html").css(o);
                }
                i.off("keyup.mfp focusin.mfp"),
                  t.ev.off(".mfp"),
                  t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                  t.bgOverlay.attr("class", "mfp-bg"),
                  t.container.attr("class", "mfp-container"),
                  !t.st.showCloseBtn ||
                    (t.st.closeBtnInside &&
                      !0 !== t.currTemplate[t.currItem.type]) ||
                    (t.currTemplate.closeBtn &&
                      t.currTemplate.closeBtn.detach()),
                  t.st.autoFocusLast &&
                    t._lastFocusedEl &&
                    e(t._lastFocusedEl).focus(),
                  (t.currItem = null),
                  (t.content = null),
                  (t.currTemplate = null),
                  (t.prevHeight = 0),
                  p("AfterClose");
              },
              updateSize: function (e) {
                if (t.isIOS) {
                  var n =
                      document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                  t.wrap.css("height", i), (t.wH = i);
                } else t.wH = e || c.height();
                t.fixedContentPos || t.wrap.css("height", t.wH), p("Resize");
              },
              updateItemHTML: function () {
                var n = t.items[t.index];
                t.contentContainer.detach(),
                  t.content && t.content.detach(),
                  n.parsed || (n = t.parseEl(t.index));
                var i = n.type;
                if (
                  (p("BeforeChange", [t.currItem ? t.currItem.type : "", i]),
                  (t.currItem = n),
                  !t.currTemplate[i])
                ) {
                  var r = !!t.st[i] && t.st[i].markup;
                  p("FirstMarkupParse", r), (t.currTemplate[i] = !r || e(r));
                }
                o &&
                  o !== n.type &&
                  t.container.removeClass("mfp-" + o + "-holder");
                var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](
                  n,
                  t.currTemplate[i]
                );
                t.appendContent(s, i),
                  (n.preloaded = !0),
                  p("Change", n),
                  (o = n.type),
                  t.container.prepend(t.contentContainer),
                  p("AfterChange");
              },
              appendContent: function (e, n) {
                (t.content = e),
                  e
                    ? t.st.showCloseBtn &&
                      t.st.closeBtnInside &&
                      !0 === t.currTemplate[n]
                      ? t.content.find(".mfp-close").length ||
                        t.content.append(f())
                      : (t.content = e)
                    : (t.content = ""),
                  p("BeforeAppend"),
                  t.container.addClass("mfp-" + n + "-holder"),
                  t.contentContainer.append(t.content);
              },
              parseEl: function (n) {
                var i,
                  o = t.items[n];
                if (
                  (o.tagName
                    ? (o = { el: e(o) })
                    : ((i = o.type), (o = { data: o, src: o.src })),
                  o.el)
                ) {
                  for (var r = t.types, s = 0; s < r.length; s++)
                    if (o.el.hasClass("mfp-" + r[s])) {
                      i = r[s];
                      break;
                    }
                  (o.src = o.el.attr("data-mfp-src")),
                    o.src || (o.src = o.el.attr("href"));
                }
                return (
                  (o.type = i || t.st.type || "inline"),
                  (o.index = n),
                  (o.parsed = !0),
                  (t.items[n] = o),
                  p("ElementParse", o),
                  t.items[n]
                );
              },
              addGroup: function (e, n) {
                var i = function (i) {
                  (i.mfpEl = this), t._openClick(i, e, n);
                };
                n || (n = {});
                var o = "click.magnificPopup";
                (n.mainEl = e),
                  n.items
                    ? ((n.isObj = !0), e.off(o).on(o, i))
                    : ((n.isObj = !1),
                      n.delegate
                        ? e.off(o).on(o, n.delegate, i)
                        : ((n.items = e), e.off(o).on(o, i)));
              },
              _openClick: function (n, i, o) {
                if (
                  (void 0 !== o.midClick
                    ? o.midClick
                    : e.magnificPopup.defaults.midClick) ||
                  !(
                    2 === n.which ||
                    n.ctrlKey ||
                    n.metaKey ||
                    n.altKey ||
                    n.shiftKey
                  )
                ) {
                  var r =
                    void 0 !== o.disableOn
                      ? o.disableOn
                      : e.magnificPopup.defaults.disableOn;
                  if (r)
                    if (e.isFunction(r)) {
                      if (!r.call(t)) return !0;
                    } else if (c.width() < r) return !0;
                  n.type &&
                    (n.preventDefault(), t.isOpen && n.stopPropagation()),
                    (o.el = e(n.mfpEl)),
                    o.delegate && (o.items = i.find(o.delegate)),
                    t.open(o);
                }
              },
              updateStatus: function (e, i) {
                if (t.preloader) {
                  n !== e && t.container.removeClass("mfp-s-" + n),
                    i || "loading" !== e || (i = t.st.tLoading);
                  var o = { status: e, text: i };
                  p("UpdateStatus", o),
                    (e = o.status),
                    (i = o.text),
                    t.preloader.html(i),
                    t.preloader.find("a").on("click", function (e) {
                      e.stopImmediatePropagation();
                    }),
                    t.container.addClass("mfp-s-" + e),
                    (n = e);
                }
              },
              _checkIfClose: function (n) {
                if (!e(n).hasClass("mfp-prevent-close")) {
                  var i = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                  if (i && o) return !0;
                  if (
                    !t.content ||
                    e(n).hasClass("mfp-close") ||
                    (t.preloader && n === t.preloader[0])
                  )
                    return !0;
                  if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0;
                  } else if (o && e.contains(document, n)) return !0;
                  return !1;
                }
              },
              _addClassToMFP: function (e) {
                t.bgOverlay.addClass(e), t.wrap.addClass(e);
              },
              _removeClassFromMFP: function (e) {
                this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
              },
              _hasScrollBar: function (e) {
                return (
                  (t.isIE7 ? i.height() : document.body.scrollHeight) >
                  (e || c.height())
                );
              },
              _setFocus: function () {
                (t.st.focus
                  ? t.content.find(t.st.focus).eq(0)
                  : t.wrap
                ).focus();
              },
              _onFocusIn: function (n) {
                if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target))
                  return t._setFocus(), !1;
              },
              _parseMarkup: function (t, n, i) {
                var o;
                i.data && (n = e.extend(i.data, n)),
                  p("MarkupParse", [t, n, i]),
                  e.each(n, function (n, i) {
                    if (void 0 === i || !1 === i) return !0;
                    if ((o = n.split("_")).length > 1) {
                      var r = t.find(".mfp-" + o[0]);
                      if (r.length > 0) {
                        var s = o[1];
                        "replaceWith" === s
                          ? r[0] !== i[0] && r.replaceWith(i)
                          : "img" === s
                          ? r.is("img")
                            ? r.attr("src", i)
                            : r.replaceWith(
                                e("<img>")
                                  .attr("src", i)
                                  .attr("class", r.attr("class"))
                              )
                          : r.attr(o[1], i);
                      }
                    } else t.find(".mfp-" + n).html(i);
                  });
              },
              _getScrollbarSize: function () {
                if (void 0 === t.scrollbarSize) {
                  var e = document.createElement("div");
                  (e.style.cssText =
                    "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
                    document.body.appendChild(e),
                    (t.scrollbarSize = e.offsetWidth - e.clientWidth),
                    document.body.removeChild(e);
                }
                return t.scrollbarSize;
              },
            }),
              (e.magnificPopup = {
                instance: null,
                proto: a.prototype,
                modules: [],
                open: function (t, n) {
                  return (
                    h(),
                    ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0),
                    (t.index = n || 0),
                    this.instance.open(t)
                  );
                },
                close: function () {
                  return (
                    e.magnificPopup.instance && e.magnificPopup.instance.close()
                  );
                },
                registerModule: function (t, n) {
                  n.options && (e.magnificPopup.defaults[t] = n.options),
                    e.extend(this.proto, n.proto),
                    this.modules.push(t);
                },
                defaults: {
                  disableOn: 0,
                  key: null,
                  midClick: !1,
                  mainClass: "",
                  preloader: !0,
                  focus: "",
                  closeOnContentClick: !1,
                  closeOnBgClick: !0,
                  closeBtnInside: !0,
                  showCloseBtn: !0,
                  enableEscapeKey: !0,
                  modal: !1,
                  alignTop: !1,
                  removalDelay: 0,
                  prependTo: null,
                  fixedContentPos: "auto",
                  fixedBgPos: "auto",
                  overflowY: "auto",
                  closeMarkup:
                    '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                  tClose: "Close (Esc)",
                  tLoading: "Loading...",
                  autoFocusLast: !0,
                },
              }),
              (e.fn.magnificPopup = function (n) {
                h();
                var i = e(this);
                if ("string" == typeof n)
                  if ("open" === n) {
                    var o,
                      r = l ? i.data("magnificPopup") : i[0].magnificPopup,
                      s = parseInt(arguments[1], 10) || 0;
                    r.items
                      ? (o = r.items[s])
                      : ((o = i),
                        r.delegate && (o = o.find(r.delegate)),
                        (o = o.eq(s))),
                      t._openClick({ mfpEl: o }, i, r);
                  } else
                    t.isOpen &&
                      t[n].apply(t, Array.prototype.slice.call(arguments, 1));
                else
                  (n = e.extend(!0, {}, n)),
                    l ? i.data("magnificPopup", n) : (i[0].magnificPopup = n),
                    t.addGroup(i, n);
                return i;
              });
            var g,
              v,
              m,
              y = function () {
                m && (v.after(m.addClass(g)).detach(), (m = null));
              };
            e.magnificPopup.registerModule("inline", {
              options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found",
              },
              proto: {
                initInline: function () {
                  t.types.push("inline"),
                    u("Close.inline", function () {
                      y();
                    });
                },
                getInline: function (n, i) {
                  if ((y(), n.src)) {
                    var o = t.st.inline,
                      r = e(n.src);
                    if (r.length) {
                      var s = r[0].parentNode;
                      s &&
                        s.tagName &&
                        (v ||
                          ((g = o.hiddenClass), (v = d(g)), (g = "mfp-" + g)),
                        (m = r.after(v).detach().removeClass(g))),
                        t.updateStatus("ready");
                    } else
                      t.updateStatus("error", o.tNotFound), (r = e("<div>"));
                    return (n.inlineElement = r), r;
                  }
                  return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
                },
              },
            });
            var b,
              w = function () {
                b && e(document.body).removeClass(b);
              },
              x = function () {
                w(), t.req && t.req.abort();
              };
            e.magnificPopup.registerModule("ajax", {
              options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.',
              },
              proto: {
                initAjax: function () {
                  t.types.push("ajax"),
                    (b = t.st.ajax.cursor),
                    u("Close.ajax", x),
                    u("BeforeChange.ajax", x);
                },
                getAjax: function (n) {
                  b && e(document.body).addClass(b), t.updateStatus("loading");
                  var i = e.extend(
                    {
                      url: n.src,
                      success: function (i, o, r) {
                        var s = { data: i, xhr: r };
                        p("ParseAjax", s),
                          t.appendContent(e(s.data), "ajax"),
                          (n.finished = !0),
                          w(),
                          t._setFocus(),
                          setTimeout(function () {
                            t.wrap.addClass("mfp-ready");
                          }, 16),
                          t.updateStatus("ready"),
                          p("AjaxContentAdded");
                      },
                      error: function () {
                        w(),
                          (n.finished = n.loadError = !0),
                          t.updateStatus(
                            "error",
                            t.st.ajax.tError.replace("%url%", n.src)
                          );
                      },
                    },
                    t.st.ajax.settings
                  );
                  return (t.req = e.ajax(i)), "";
                },
              },
            });
            var k,
              T,
              C = function (n) {
                if (n.data && void 0 !== n.data.title) return n.data.title;
                var i = t.st.image.titleSrc;
                if (i) {
                  if (e.isFunction(i)) return i.call(t, n);
                  if (n.el) return n.el.attr(i) || "";
                }
                return "";
              };
            e.magnificPopup.registerModule("image", {
              options: {
                markup:
                  '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.',
              },
              proto: {
                initImage: function () {
                  var n = t.st.image,
                    i = ".image";
                  t.types.push("image"),
                    u("Open" + i, function () {
                      "image" === t.currItem.type &&
                        n.cursor &&
                        e(document.body).addClass(n.cursor);
                    }),
                    u("Close" + i, function () {
                      n.cursor && e(document.body).removeClass(n.cursor),
                        c.off("resize.mfp");
                    }),
                    u("Resize" + i, t.resizeImage),
                    t.isLowIE && u("AfterChange", t.resizeImage);
                },
                resizeImage: function () {
                  var e = t.currItem;
                  if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE &&
                      (n =
                        parseInt(e.img.css("padding-top"), 10) +
                        parseInt(e.img.css("padding-bottom"), 10)),
                      e.img.css("max-height", t.wH - n);
                  }
                },
                _onImageHasSize: function (e) {
                  e.img &&
                    ((e.hasSize = !0),
                    k && clearInterval(k),
                    (e.isCheckingImgSize = !1),
                    p("ImageHasSize", e),
                    e.imgHidden &&
                      (t.content && t.content.removeClass("mfp-loading"),
                      (e.imgHidden = !1)));
                },
                findImageSize: function (e) {
                  var n = 0,
                    i = e.img[0],
                    o = function (r) {
                      k && clearInterval(k),
                        (k = setInterval(function () {
                          i.naturalWidth > 0
                            ? t._onImageHasSize(e)
                            : (n > 200 && clearInterval(k),
                              3 == ++n
                                ? o(10)
                                : 40 === n
                                ? o(50)
                                : 100 === n && o(500));
                        }, r));
                    };
                  o(1);
                },
                getImage: function (n, i) {
                  var o = 0,
                    r = function () {
                      n &&
                        (n.img[0].complete
                          ? (n.img.off(".mfploader"),
                            n === t.currItem &&
                              (t._onImageHasSize(n), t.updateStatus("ready")),
                            (n.hasSize = !0),
                            (n.loaded = !0),
                            p("ImageLoadComplete"))
                          : ++o < 200
                          ? setTimeout(r, 100)
                          : s());
                    },
                    s = function () {
                      n &&
                        (n.img.off(".mfploader"),
                        n === t.currItem &&
                          (t._onImageHasSize(n),
                          t.updateStatus(
                            "error",
                            a.tError.replace("%url%", n.src)
                          )),
                        (n.hasSize = !0),
                        (n.loaded = !0),
                        (n.loadError = !0));
                    },
                    a = t.st.image,
                    l = i.find(".mfp-img");
                  if (l.length) {
                    var c = document.createElement("img");
                    (c.className = "mfp-img"),
                      n.el &&
                        n.el.find("img").length &&
                        (c.alt = n.el.find("img").attr("alt")),
                      (n.img = e(c)
                        .on("load.mfploader", r)
                        .on("error.mfploader", s)),
                      (c.src = n.src),
                      l.is("img") && (n.img = n.img.clone()),
                      (c = n.img[0]).naturalWidth > 0
                        ? (n.hasSize = !0)
                        : c.width || (n.hasSize = !1);
                  }
                  return (
                    t._parseMarkup(
                      i,
                      { title: C(n), img_replaceWith: n.img },
                      n
                    ),
                    t.resizeImage(),
                    n.hasSize
                      ? (k && clearInterval(k),
                        n.loadError
                          ? (i.addClass("mfp-loading"),
                            t.updateStatus(
                              "error",
                              a.tError.replace("%url%", n.src)
                            ))
                          : (i.removeClass("mfp-loading"),
                            t.updateStatus("ready")),
                        i)
                      : (t.updateStatus("loading"),
                        (n.loading = !0),
                        n.hasSize ||
                          ((n.imgHidden = !0),
                          i.addClass("mfp-loading"),
                          t.findImageSize(n)),
                        i)
                  );
                },
              },
            }),
              e.magnificPopup.registerModule("zoom", {
                options: {
                  enabled: !1,
                  easing: "ease-in-out",
                  duration: 300,
                  opener: function (e) {
                    return e.is("img") ? e : e.find("img");
                  },
                },
                proto: {
                  initZoom: function () {
                    var e,
                      n = t.st.zoom,
                      i = ".zoom";
                    if (n.enabled && t.supportsTransition) {
                      var o,
                        r,
                        s = n.duration,
                        a = function (e) {
                          var t = e
                              .clone()
                              .removeAttr("style")
                              .removeAttr("class")
                              .addClass("mfp-animated-image"),
                            i = "all " + n.duration / 1e3 + "s " + n.easing,
                            o = {
                              position: "fixed",
                              zIndex: 9999,
                              left: 0,
                              top: 0,
                              "-webkit-backface-visibility": "hidden",
                            },
                            r = "transition";
                          return (
                            (o["-webkit-" + r] =
                              o["-moz-" + r] =
                              o["-o-" + r] =
                              o[r] =
                                i),
                            t.css(o),
                            t
                          );
                        },
                        l = function () {
                          t.content.css("visibility", "visible");
                        };
                      u("BuildControls" + i, function () {
                        if (t._allowZoom()) {
                          if (
                            (clearTimeout(o),
                            t.content.css("visibility", "hidden"),
                            !(e = t._getItemToZoom()))
                          )
                            return void l();
                          (r = a(e)).css(t._getOffset()),
                            t.wrap.append(r),
                            (o = setTimeout(function () {
                              r.css(t._getOffset(!0)),
                                (o = setTimeout(function () {
                                  l(),
                                    setTimeout(function () {
                                      r.remove(),
                                        (e = r = null),
                                        p("ZoomAnimationEnded");
                                    }, 16);
                                }, s));
                            }, 16));
                        }
                      }),
                        u("BeforeClose" + i, function () {
                          if (t._allowZoom()) {
                            if (
                              (clearTimeout(o), (t.st.removalDelay = s), !e)
                            ) {
                              if (!(e = t._getItemToZoom())) return;
                              r = a(e);
                            }
                            r.css(t._getOffset(!0)),
                              t.wrap.append(r),
                              t.content.css("visibility", "hidden"),
                              setTimeout(function () {
                                r.css(t._getOffset());
                              }, 16);
                          }
                        }),
                        u("Close" + i, function () {
                          t._allowZoom() && (l(), r && r.remove(), (e = null));
                        });
                    }
                  },
                  _allowZoom: function () {
                    return "image" === t.currItem.type;
                  },
                  _getItemToZoom: function () {
                    return !!t.currItem.hasSize && t.currItem.img;
                  },
                  _getOffset: function (n) {
                    var i,
                      o = (i = n
                        ? t.currItem.img
                        : t.st.zoom.opener(
                            t.currItem.el || t.currItem
                          )).offset(),
                      r = parseInt(i.css("padding-top"), 10),
                      s = parseInt(i.css("padding-bottom"), 10);
                    o.top -= e(window).scrollTop() - r;
                    var a = {
                      width: i.width(),
                      height: (l ? i.innerHeight() : i[0].offsetHeight) - s - r,
                    };
                    return (
                      void 0 === T &&
                        (T =
                          void 0 !==
                          document.createElement("p").style.MozTransform),
                      T
                        ? (a["-moz-transform"] = a.transform =
                            "translate(" + o.left + "px," + o.top + "px)")
                        : ((a.left = o.left), (a.top = o.top)),
                      a
                    );
                  },
                },
              });
            var S = function (e) {
              if (t.currTemplate.iframe) {
                var n = t.currTemplate.iframe.find("iframe");
                n.length &&
                  (e || (n[0].src = "//about:blank"),
                  t.isIE8 && n.css("display", e ? "block" : "none"));
              }
            };
            e.magnificPopup.registerModule("iframe", {
              options: {
                markup:
                  '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                  youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1",
                  },
                  vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1",
                  },
                  gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
                },
              },
              proto: {
                initIframe: function () {
                  t.types.push("iframe"),
                    u("BeforeChange", function (e, t, n) {
                      t !== n &&
                        ("iframe" === t ? S() : "iframe" === n && S(!0));
                    }),
                    u("Close.iframe", function () {
                      S();
                    });
                },
                getIframe: function (n, i) {
                  var o = n.src,
                    r = t.st.iframe;
                  e.each(r.patterns, function () {
                    if (o.indexOf(this.index) > -1)
                      return (
                        this.id &&
                          (o =
                            "string" == typeof this.id
                              ? o.substr(
                                  o.lastIndexOf(this.id) + this.id.length,
                                  o.length
                                )
                              : this.id.call(this, o)),
                        (o = this.src.replace("%id%", o)),
                        !1
                      );
                  });
                  var s = {};
                  return (
                    r.srcAction && (s[r.srcAction] = o),
                    t._parseMarkup(i, s, n),
                    t.updateStatus("ready"),
                    i
                  );
                },
              },
            });
            var E = function (e) {
                var n = t.items.length;
                return e > n - 1 ? e - n : e < 0 ? n + e : e;
              },
              $ = function (e, t, n) {
                return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
              };
            e.magnificPopup.registerModule("gallery", {
              options: {
                enabled: !1,
                arrowMarkup:
                  '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%",
              },
              proto: {
                initGallery: function () {
                  var n = t.st.gallery,
                    o = ".mfp-gallery";
                  if (((t.direction = !0), !n || !n.enabled)) return !1;
                  (r += " mfp-gallery"),
                    u("Open" + o, function () {
                      n.navigateByImgClick &&
                        t.wrap.on("click" + o, ".mfp-img", function () {
                          if (t.items.length > 1) return t.next(), !1;
                        }),
                        i.on("keydown" + o, function (e) {
                          37 === e.keyCode
                            ? t.prev()
                            : 39 === e.keyCode && t.next();
                        });
                    }),
                    u("UpdateStatus" + o, function (e, n) {
                      n.text &&
                        (n.text = $(n.text, t.currItem.index, t.items.length));
                    }),
                    u("MarkupParse" + o, function (e, i, o, r) {
                      var s = t.items.length;
                      o.counter = s > 1 ? $(n.tCounter, r.index, s) : "";
                    }),
                    u("BuildControls" + o, function () {
                      if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                          o = (t.arrowLeft = e(
                            i
                              .replace(/%title%/gi, n.tPrev)
                              .replace(/%dir%/gi, "left")
                          ).addClass("mfp-prevent-close")),
                          r = (t.arrowRight = e(
                            i
                              .replace(/%title%/gi, n.tNext)
                              .replace(/%dir%/gi, "right")
                          ).addClass("mfp-prevent-close"));
                        o.click(function () {
                          t.prev();
                        }),
                          r.click(function () {
                            t.next();
                          }),
                          t.container.append(o.add(r));
                      }
                    }),
                    u("Change" + o, function () {
                      t._preloadTimeout && clearTimeout(t._preloadTimeout),
                        (t._preloadTimeout = setTimeout(function () {
                          t.preloadNearbyImages(), (t._preloadTimeout = null);
                        }, 16));
                    }),
                    u("Close" + o, function () {
                      i.off(o),
                        t.wrap.off("click" + o),
                        (t.arrowRight = t.arrowLeft = null);
                    });
                },
                next: function () {
                  (t.direction = !0),
                    (t.index = E(t.index + 1)),
                    t.updateItemHTML();
                },
                prev: function () {
                  (t.direction = !1),
                    (t.index = E(t.index - 1)),
                    t.updateItemHTML();
                },
                goTo: function (e) {
                  (t.direction = e >= t.index),
                    (t.index = e),
                    t.updateItemHTML();
                },
                preloadNearbyImages: function () {
                  var e,
                    n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                  for (e = 1; e <= (t.direction ? o : i); e++)
                    t._preloadItem(t.index + e);
                  for (e = 1; e <= (t.direction ? i : o); e++)
                    t._preloadItem(t.index - e);
                },
                _preloadItem: function (n) {
                  if (((n = E(n)), !t.items[n].preloaded)) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)),
                      p("LazyLoad", i),
                      "image" === i.type &&
                        (i.img = e('<img class="mfp-img" />')
                          .on("load.mfploader", function () {
                            i.hasSize = !0;
                          })
                          .on("error.mfploader", function () {
                            (i.hasSize = !0),
                              (i.loadError = !0),
                              p("LazyLoadError", i);
                          })
                          .attr("src", i.src)),
                      (i.preloaded = !0);
                  }
                },
              },
            }),
              e.magnificPopup.registerModule("retina", {
                options: {
                  replaceSrc: function (e) {
                    return e.src.replace(/\.\w+$/, function (e) {
                      return "@2x" + e;
                    });
                  },
                  ratio: 1,
                },
                proto: {
                  initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                      var e = t.st.retina,
                        n = e.ratio;
                      (n = isNaN(n) ? n() : n) > 1 &&
                        (u("ImageHasSize.retina", function (e, t) {
                          t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%",
                          });
                        }),
                        u("ElementParse.retina", function (t, i) {
                          i.src = e.replaceSrc(i, n);
                        }));
                    }
                  },
                },
              }),
              h();
          })
            ? i.apply(t, o)
            : i) || (e.exports = r);
  },
  80: function (e, t) {},
  86: function (e, t) {},
  88: function (e, t) {},
  9: function (e, t, n) {
    var i;
    /*! Hammer.JS - v2.0.7 - 2016-04-22
     * http://hammerjs.github.io/
     *
     * Copyright (c) 2016 Jorik Tangelder;
     * Licensed under the MIT license */ !(function (o, r, s, a) {
      "use strict";
      var l,
        c = ["", "webkit", "Moz", "MS", "ms", "o"],
        u = r.createElement("div"),
        d = Math.round,
        p = Math.abs,
        f = Date.now;
      function h(e, t, n) {
        return setTimeout(x(e, n), t);
      }
      function g(e, t, n) {
        return !!Array.isArray(e) && (v(e, n[t], n), !0);
      }
      function v(e, t, n) {
        var i;
        if (e)
          if (e.forEach) e.forEach(t, n);
          else if (void 0 !== e.length)
            for (i = 0; i < e.length; ) t.call(n, e[i], i, e), i++;
          else for (i in e) e.hasOwnProperty(i) && t.call(n, e[i], i, e);
      }
      function m(e, t, n) {
        var i = "DEPRECATED METHOD: " + t + "\n" + n + " AT \n";
        return function () {
          var t = new Error("get-stack-trace"),
            n =
              t && t.stack
                ? t.stack
                    .replace(/^[^\(]+?[\n$]/gm, "")
                    .replace(/^\s+at\s+/gm, "")
                    .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                : "Unknown Stack Trace",
            r = o.console && (o.console.warn || o.console.log);
          return r && r.call(o.console, i, n), e.apply(this, arguments);
        };
      }
      l =
        "function" != typeof Object.assign
          ? function (e) {
              if (null == e)
                throw new TypeError(
                  "Cannot convert undefined or null to object"
                );
              for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                if (null != i)
                  for (var o in i) i.hasOwnProperty(o) && (t[o] = i[o]);
              }
              return t;
            }
          : Object.assign;
      var y = m(
          function (e, t, n) {
            for (var i = Object.keys(t), o = 0; o < i.length; )
              (!n || (n && void 0 === e[i[o]])) && (e[i[o]] = t[i[o]]), o++;
            return e;
          },
          "extend",
          "Use `assign`."
        ),
        b = m(
          function (e, t) {
            return y(e, t, !0);
          },
          "merge",
          "Use `assign`."
        );
      function w(e, t, n) {
        var i,
          o = t.prototype;
        ((i = e.prototype = Object.create(o)).constructor = e),
          (i._super = o),
          n && l(i, n);
      }
      function x(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      function k(e, t) {
        return "function" == typeof e ? e.apply((t && t[0]) || void 0, t) : e;
      }
      function T(e, t) {
        return void 0 === e ? t : e;
      }
      function C(e, t, n) {
        v(A(t), function (t) {
          e.addEventListener(t, n, !1);
        });
      }
      function S(e, t, n) {
        v(A(t), function (t) {
          e.removeEventListener(t, n, !1);
        });
      }
      function E(e, t) {
        for (; e; ) {
          if (e == t) return !0;
          e = e.parentNode;
        }
        return !1;
      }
      function $(e, t) {
        return e.indexOf(t) > -1;
      }
      function A(e) {
        return e.trim().split(/\s+/g);
      }
      function O(e, t, n) {
        if (e.indexOf && !n) return e.indexOf(t);
        for (var i = 0; i < e.length; ) {
          if ((n && e[i][n] == t) || (!n && e[i] === t)) return i;
          i++;
        }
        return -1;
      }
      function I(e) {
        return Array.prototype.slice.call(e, 0);
      }
      function P(e, t, n) {
        for (var i = [], o = [], r = 0; r < e.length; ) {
          var s = t ? e[r][t] : e[r];
          O(o, s) < 0 && i.push(e[r]), (o[r] = s), r++;
        }
        return (
          n &&
            (i = t
              ? i.sort(function (e, n) {
                  return e[t] > n[t];
                })
              : i.sort()),
          i
        );
      }
      function j(e, t) {
        for (
          var n, i, o = t[0].toUpperCase() + t.slice(1), r = 0;
          r < c.length;

        ) {
          if ((i = (n = c[r]) ? n + o : t) in e) return i;
          r++;
        }
      }
      var D = 1;
      function M(e) {
        var t = e.ownerDocument || e;
        return t.defaultView || t.parentWindow || o;
      }
      var L = "ontouchstart" in o,
        N = void 0 !== j(o, "PointerEvent"),
        H =
          L &&
          /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        _ = ["x", "y"],
        z = ["clientX", "clientY"];
      function q(e, t) {
        var n = this;
        (this.manager = e),
          (this.callback = t),
          (this.element = e.element),
          (this.target = e.options.inputTarget),
          (this.domHandler = function (t) {
            k(e.options.enable, [e]) && n.handler(t);
          }),
          this.init();
      }
      function R(e, t, n) {
        var i = n.pointers.length,
          o = n.changedPointers.length,
          r = 1 & t && i - o == 0,
          s = 12 & t && i - o == 0;
        (n.isFirst = !!r),
          (n.isFinal = !!s),
          r && (e.session = {}),
          (n.eventType = t),
          (function (e, t) {
            var n = e.session,
              i = t.pointers,
              o = i.length;
            n.firstInput || (n.firstInput = F(t)),
              o > 1 && !n.firstMultiple
                ? (n.firstMultiple = F(t))
                : 1 === o && (n.firstMultiple = !1);
            var r = n.firstInput,
              s = n.firstMultiple,
              a = s ? s.center : r.center,
              l = (t.center = B(i));
            (t.timeStamp = f()),
              (t.deltaTime = t.timeStamp - r.timeStamp),
              (t.angle = Y(a, l)),
              (t.distance = X(a, l)),
              (function (e, t) {
                var n = t.center,
                  i = e.offsetDelta || {},
                  o = e.prevDelta || {},
                  r = e.prevInput || {};
                (1 !== t.eventType && 4 !== r.eventType) ||
                  ((o = e.prevDelta = { x: r.deltaX || 0, y: r.deltaY || 0 }),
                  (i = e.offsetDelta = { x: n.x, y: n.y })),
                  (t.deltaX = o.x + (n.x - i.x)),
                  (t.deltaY = o.y + (n.y - i.y));
              })(n, t),
              (t.offsetDirection = U(t.deltaX, t.deltaY));
            var c,
              u,
              d = W(t.deltaTime, t.deltaX, t.deltaY);
            (t.overallVelocityX = d.x),
              (t.overallVelocityY = d.y),
              (t.overallVelocity = p(d.x) > p(d.y) ? d.x : d.y),
              (t.scale = s
                ? ((c = s.pointers), X((u = i)[0], u[1], z) / X(c[0], c[1], z))
                : 1),
              (t.rotation = s
                ? (function (e, t) {
                    return Y(t[1], t[0], z) + Y(e[1], e[0], z);
                  })(s.pointers, i)
                : 0),
              (t.maxPointers = n.prevInput
                ? t.pointers.length > n.prevInput.maxPointers
                  ? t.pointers.length
                  : n.prevInput.maxPointers
                : t.pointers.length),
              (function (e, t) {
                var n,
                  i,
                  o,
                  r,
                  s = e.lastInterval || t,
                  a = t.timeStamp - s.timeStamp;
                if (8 != t.eventType && (a > 25 || void 0 === s.velocity)) {
                  var l = t.deltaX - s.deltaX,
                    c = t.deltaY - s.deltaY,
                    u = W(a, l, c);
                  (i = u.x),
                    (o = u.y),
                    (n = p(u.x) > p(u.y) ? u.x : u.y),
                    (r = U(l, c)),
                    (e.lastInterval = t);
                } else
                  (n = s.velocity),
                    (i = s.velocityX),
                    (o = s.velocityY),
                    (r = s.direction);
                (t.velocity = n),
                  (t.velocityX = i),
                  (t.velocityY = o),
                  (t.direction = r);
              })(n, t);
            var h = e.element;
            E(t.srcEvent.target, h) && (h = t.srcEvent.target), (t.target = h);
          })(e, n),
          e.emit("hammer.input", n),
          e.recognize(n),
          (e.session.prevInput = n);
      }
      function F(e) {
        for (var t = [], n = 0; n < e.pointers.length; )
          (t[n] = {
            clientX: d(e.pointers[n].clientX),
            clientY: d(e.pointers[n].clientY),
          }),
            n++;
        return {
          timeStamp: f(),
          pointers: t,
          center: B(t),
          deltaX: e.deltaX,
          deltaY: e.deltaY,
        };
      }
      function B(e) {
        var t = e.length;
        if (1 === t) return { x: d(e[0].clientX), y: d(e[0].clientY) };
        for (var n = 0, i = 0, o = 0; o < t; )
          (n += e[o].clientX), (i += e[o].clientY), o++;
        return { x: d(n / t), y: d(i / t) };
      }
      function W(e, t, n) {
        return { x: t / e || 0, y: n / e || 0 };
      }
      function U(e, t) {
        return e === t ? 1 : p(e) >= p(t) ? (e < 0 ? 2 : 4) : t < 0 ? 8 : 16;
      }
      function X(e, t, n) {
        n || (n = _);
        var i = t[n[0]] - e[n[0]],
          o = t[n[1]] - e[n[1]];
        return Math.sqrt(i * i + o * o);
      }
      function Y(e, t, n) {
        n || (n = _);
        var i = t[n[0]] - e[n[0]],
          o = t[n[1]] - e[n[1]];
        return (180 * Math.atan2(o, i)) / Math.PI;
      }
      q.prototype = {
        handler: function () {},
        init: function () {
          this.evEl && C(this.element, this.evEl, this.domHandler),
            this.evTarget && C(this.target, this.evTarget, this.domHandler),
            this.evWin && C(M(this.element), this.evWin, this.domHandler);
        },
        destroy: function () {
          this.evEl && S(this.element, this.evEl, this.domHandler),
            this.evTarget && S(this.target, this.evTarget, this.domHandler),
            this.evWin && S(M(this.element), this.evWin, this.domHandler);
        },
      };
      var V = { mousedown: 1, mousemove: 2, mouseup: 4 };
      function G() {
        (this.evEl = "mousedown"),
          (this.evWin = "mousemove mouseup"),
          (this.pressed = !1),
          q.apply(this, arguments);
      }
      w(G, q, {
        handler: function (e) {
          var t = V[e.type];
          1 & t && 0 === e.button && (this.pressed = !0),
            2 & t && 1 !== e.which && (t = 4),
            this.pressed &&
              (4 & t && (this.pressed = !1),
              this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: "mouse",
                srcEvent: e,
              }));
        },
      });
      var Z = {
          pointerdown: 1,
          pointermove: 2,
          pointerup: 4,
          pointercancel: 8,
          pointerout: 8,
        },
        Q = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },
        K = "pointerdown",
        J = "pointermove pointerup pointercancel";
      function ee() {
        (this.evEl = K),
          (this.evWin = J),
          q.apply(this, arguments),
          (this.store = this.manager.session.pointerEvents = []);
      }
      o.MSPointerEvent &&
        !o.PointerEvent &&
        ((K = "MSPointerDown"),
        (J = "MSPointerMove MSPointerUp MSPointerCancel")),
        w(ee, q, {
          handler: function (e) {
            var t = this.store,
              n = !1,
              i = e.type.toLowerCase().replace("ms", ""),
              o = Z[i],
              r = Q[e.pointerType] || e.pointerType,
              s = "touch" == r,
              a = O(t, e.pointerId, "pointerId");
            1 & o && (0 === e.button || s)
              ? a < 0 && (t.push(e), (a = t.length - 1))
              : 12 & o && (n = !0),
              a < 0 ||
                ((t[a] = e),
                this.callback(this.manager, o, {
                  pointers: t,
                  changedPointers: [e],
                  pointerType: r,
                  srcEvent: e,
                }),
                n && t.splice(a, 1));
          },
        });
      var te = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
      function ne() {
        (this.evTarget = "touchstart"),
          (this.evWin = "touchstart touchmove touchend touchcancel"),
          (this.started = !1),
          q.apply(this, arguments);
      }
      function ie(e, t) {
        var n = I(e.touches),
          i = I(e.changedTouches);
        return 12 & t && (n = P(n.concat(i), "identifier", !0)), [n, i];
      }
      w(ne, q, {
        handler: function (e) {
          var t = te[e.type];
          if ((1 === t && (this.started = !0), this.started)) {
            var n = ie.call(this, e, t);
            12 & t && n[0].length - n[1].length == 0 && (this.started = !1),
              this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: "touch",
                srcEvent: e,
              });
          }
        },
      });
      var oe = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
      function re() {
        (this.evTarget = "touchstart touchmove touchend touchcancel"),
          (this.targetIds = {}),
          q.apply(this, arguments);
      }
      function se(e, t) {
        var n = I(e.touches),
          i = this.targetIds;
        if (3 & t && 1 === n.length) return (i[n[0].identifier] = !0), [n, n];
        var o,
          r,
          s = I(e.changedTouches),
          a = [],
          l = this.target;
        if (
          ((r = n.filter(function (e) {
            return E(e.target, l);
          })),
          1 === t)
        )
          for (o = 0; o < r.length; ) (i[r[o].identifier] = !0), o++;
        for (o = 0; o < s.length; )
          i[s[o].identifier] && a.push(s[o]),
            12 & t && delete i[s[o].identifier],
            o++;
        return a.length ? [P(r.concat(a), "identifier", !0), a] : void 0;
      }
      function ae() {
        q.apply(this, arguments);
        var e = x(this.handler, this);
        (this.touch = new re(this.manager, e)),
          (this.mouse = new G(this.manager, e)),
          (this.primaryTouch = null),
          (this.lastTouches = []);
      }
      function le(e, t) {
        1 & e
          ? ((this.primaryTouch = t.changedPointers[0].identifier),
            ce.call(this, t))
          : 12 & e && ce.call(this, t);
      }
      function ce(e) {
        var t = e.changedPointers[0];
        if (t.identifier === this.primaryTouch) {
          var n = { x: t.clientX, y: t.clientY };
          this.lastTouches.push(n);
          var i = this.lastTouches;
          setTimeout(function () {
            var e = i.indexOf(n);
            e > -1 && i.splice(e, 1);
          }, 2500);
        }
      }
      function ue(e) {
        for (
          var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0;
          i < this.lastTouches.length;
          i++
        ) {
          var o = this.lastTouches[i],
            r = Math.abs(t - o.x),
            s = Math.abs(n - o.y);
          if (r <= 25 && s <= 25) return !0;
        }
        return !1;
      }
      w(re, q, {
        handler: function (e) {
          var t = oe[e.type],
            n = se.call(this, e, t);
          n &&
            this.callback(this.manager, t, {
              pointers: n[0],
              changedPointers: n[1],
              pointerType: "touch",
              srcEvent: e,
            });
        },
      }),
        w(ae, q, {
          handler: function (e, t, n) {
            var i = "touch" == n.pointerType,
              o = "mouse" == n.pointerType;
            if (
              !(
                o &&
                n.sourceCapabilities &&
                n.sourceCapabilities.firesTouchEvents
              )
            ) {
              if (i) le.call(this, t, n);
              else if (o && ue.call(this, n)) return;
              this.callback(e, t, n);
            }
          },
          destroy: function () {
            this.touch.destroy(), this.mouse.destroy();
          },
        });
      var de = j(u.style, "touchAction"),
        pe = void 0 !== de,
        fe = (function () {
          if (!pe) return !1;
          var e = {},
            t = o.CSS && o.CSS.supports;
          return (
            [
              "auto",
              "manipulation",
              "pan-y",
              "pan-x",
              "pan-x pan-y",
              "none",
            ].forEach(function (n) {
              e[n] = !t || o.CSS.supports("touch-action", n);
            }),
            e
          );
        })();
      function he(e, t) {
        (this.manager = e), this.set(t);
      }
      function ge(e) {
        (this.options = l({}, this.defaults, e || {})),
          (this.id = D++),
          (this.manager = null),
          (this.options.enable = T(this.options.enable, !0)),
          (this.state = 1),
          (this.simultaneous = {}),
          (this.requireFail = []);
      }
      function ve(e) {
        return 16 & e
          ? "cancel"
          : 8 & e
          ? "end"
          : 4 & e
          ? "move"
          : 2 & e
          ? "start"
          : "";
      }
      function me(e) {
        return 16 == e
          ? "down"
          : 8 == e
          ? "up"
          : 2 == e
          ? "left"
          : 4 == e
          ? "right"
          : "";
      }
      function ye(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e;
      }
      function be() {
        ge.apply(this, arguments);
      }
      function we() {
        be.apply(this, arguments), (this.pX = null), (this.pY = null);
      }
      function xe() {
        be.apply(this, arguments);
      }
      function ke() {
        ge.apply(this, arguments), (this._timer = null), (this._input = null);
      }
      function Te() {
        be.apply(this, arguments);
      }
      function Ce() {
        be.apply(this, arguments);
      }
      function Se() {
        ge.apply(this, arguments),
          (this.pTime = !1),
          (this.pCenter = !1),
          (this._timer = null),
          (this._input = null),
          (this.count = 0);
      }
      function Ee(e, t) {
        return (
          ((t = t || {}).recognizers = T(t.recognizers, Ee.defaults.preset)),
          new $e(e, t)
        );
      }
      function $e(e, t) {
        (this.options = l({}, Ee.defaults, t || {})),
          (this.options.inputTarget = this.options.inputTarget || e),
          (this.handlers = {}),
          (this.session = {}),
          (this.recognizers = []),
          (this.oldCssProps = {}),
          (this.element = e),
          (this.input = new (this.options.inputClass ||
            (N ? ee : H ? re : L ? ae : G))(this, R)),
          (this.touchAction = new he(this, this.options.touchAction)),
          Ae(this, !0),
          v(
            this.options.recognizers,
            function (e) {
              var t = this.add(new e[0](e[1]));
              e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3]);
            },
            this
          );
      }
      function Ae(e, t) {
        var n,
          i = e.element;
        i.style &&
          (v(e.options.cssProps, function (o, r) {
            (n = j(i.style, r)),
              t
                ? ((e.oldCssProps[n] = i.style[n]), (i.style[n] = o))
                : (i.style[n] = e.oldCssProps[n] || "");
          }),
          t || (e.oldCssProps = {}));
      }
      (he.prototype = {
        set: function (e) {
          "compute" == e && (e = this.compute()),
            pe &&
              this.manager.element.style &&
              fe[e] &&
              (this.manager.element.style[de] = e),
            (this.actions = e.toLowerCase().trim());
        },
        update: function () {
          this.set(this.manager.options.touchAction);
        },
        compute: function () {
          var e = [];
          return (
            v(this.manager.recognizers, function (t) {
              k(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()));
            }),
            (function (e) {
              if ($(e, "none")) return "none";
              var t = $(e, "pan-x"),
                n = $(e, "pan-y");
              return t && n
                ? "none"
                : t || n
                ? t
                  ? "pan-x"
                  : "pan-y"
                : $(e, "manipulation")
                ? "manipulation"
                : "auto";
            })(e.join(" "))
          );
        },
        preventDefaults: function (e) {
          var t = e.srcEvent,
            n = e.offsetDirection;
          if (this.manager.session.prevented) t.preventDefault();
          else {
            var i = this.actions,
              o = $(i, "none") && !fe.none,
              r = $(i, "pan-y") && !fe["pan-y"],
              s = $(i, "pan-x") && !fe["pan-x"];
            if (o) {
              var a = 1 === e.pointers.length,
                l = e.distance < 2,
                c = e.deltaTime < 250;
              if (a && l && c) return;
            }
            if (!s || !r)
              return o || (r && 6 & n) || (s && 24 & n)
                ? this.preventSrc(t)
                : void 0;
          }
        },
        preventSrc: function (e) {
          (this.manager.session.prevented = !0), e.preventDefault();
        },
      }),
        (ge.prototype = {
          defaults: {},
          set: function (e) {
            return (
              l(this.options, e),
              this.manager && this.manager.touchAction.update(),
              this
            );
          },
          recognizeWith: function (e) {
            if (g(e, "recognizeWith", this)) return this;
            var t = this.simultaneous;
            return (
              t[(e = ye(e, this)).id] || ((t[e.id] = e), e.recognizeWith(this)),
              this
            );
          },
          dropRecognizeWith: function (e) {
            return (
              g(e, "dropRecognizeWith", this) ||
                ((e = ye(e, this)), delete this.simultaneous[e.id]),
              this
            );
          },
          requireFailure: function (e) {
            if (g(e, "requireFailure", this)) return this;
            var t = this.requireFail;
            return (
              -1 === O(t, (e = ye(e, this))) &&
                (t.push(e), e.requireFailure(this)),
              this
            );
          },
          dropRequireFailure: function (e) {
            if (g(e, "dropRequireFailure", this)) return this;
            e = ye(e, this);
            var t = O(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1), this;
          },
          hasRequireFailures: function () {
            return this.requireFail.length > 0;
          },
          canRecognizeWith: function (e) {
            return !!this.simultaneous[e.id];
          },
          emit: function (e) {
            var t = this,
              n = this.state;
            function i(n) {
              t.manager.emit(n, e);
            }
            n < 8 && i(t.options.event + ve(n)),
              i(t.options.event),
              e.additionalEvent && i(e.additionalEvent),
              n >= 8 && i(t.options.event + ve(n));
          },
          tryEmit: function (e) {
            if (this.canEmit()) return this.emit(e);
            this.state = 32;
          },
          canEmit: function () {
            for (var e = 0; e < this.requireFail.length; ) {
              if (!(33 & this.requireFail[e].state)) return !1;
              e++;
            }
            return !0;
          },
          recognize: function (e) {
            var t = l({}, e);
            if (!k(this.options.enable, [this, t]))
              return this.reset(), void (this.state = 32);
            56 & this.state && (this.state = 1),
              (this.state = this.process(t)),
              30 & this.state && this.tryEmit(t);
          },
          process: function (e) {},
          getTouchAction: function () {},
          reset: function () {},
        }),
        w(be, ge, {
          defaults: { pointers: 1 },
          attrTest: function (e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t;
          },
          process: function (e) {
            var t = this.state,
              n = e.eventType,
              i = 6 & t,
              o = this.attrTest(e);
            return i && (8 & n || !o)
              ? 16 | t
              : i || o
              ? 4 & n
                ? 8 | t
                : 2 & t
                ? 4 | t
                : 2
              : 32;
          },
        }),
        w(we, be, {
          defaults: { event: "pan", threshold: 10, pointers: 1, direction: 30 },
          getTouchAction: function () {
            var e = this.options.direction,
              t = [];
            return 6 & e && t.push("pan-y"), 24 & e && t.push("pan-x"), t;
          },
          directionTest: function (e) {
            var t = this.options,
              n = !0,
              i = e.distance,
              o = e.direction,
              r = e.deltaX,
              s = e.deltaY;
            return (
              o & t.direction ||
                (6 & t.direction
                  ? ((o = 0 === r ? 1 : r < 0 ? 2 : 4),
                    (n = r != this.pX),
                    (i = Math.abs(e.deltaX)))
                  : ((o = 0 === s ? 1 : s < 0 ? 8 : 16),
                    (n = s != this.pY),
                    (i = Math.abs(e.deltaY)))),
              (e.direction = o),
              n && i > t.threshold && o & t.direction
            );
          },
          attrTest: function (e) {
            return (
              be.prototype.attrTest.call(this, e) &&
              (2 & this.state || (!(2 & this.state) && this.directionTest(e)))
            );
          },
          emit: function (e) {
            (this.pX = e.deltaX), (this.pY = e.deltaY);
            var t = me(e.direction);
            t && (e.additionalEvent = this.options.event + t),
              this._super.emit.call(this, e);
          },
        }),
        w(xe, be, {
          defaults: { event: "pinch", threshold: 0, pointers: 2 },
          getTouchAction: function () {
            return ["none"];
          },
          attrTest: function (e) {
            return (
              this._super.attrTest.call(this, e) &&
              (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
            );
          },
          emit: function (e) {
            if (1 !== e.scale) {
              var t = e.scale < 1 ? "in" : "out";
              e.additionalEvent = this.options.event + t;
            }
            this._super.emit.call(this, e);
          },
        }),
        w(ke, ge, {
          defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
          getTouchAction: function () {
            return ["auto"];
          },
          process: function (e) {
            var t = this.options,
              n = e.pointers.length === t.pointers,
              i = e.distance < t.threshold,
              o = e.deltaTime > t.time;
            if (((this._input = e), !i || !n || (12 & e.eventType && !o)))
              this.reset();
            else if (1 & e.eventType)
              this.reset(),
                (this._timer = h(
                  function () {
                    (this.state = 8), this.tryEmit();
                  },
                  t.time,
                  this
                ));
            else if (4 & e.eventType) return 8;
            return 32;
          },
          reset: function () {
            clearTimeout(this._timer);
          },
          emit: function (e) {
            8 === this.state &&
              (e && 4 & e.eventType
                ? this.manager.emit(this.options.event + "up", e)
                : ((this._input.timeStamp = f()),
                  this.manager.emit(this.options.event, this._input)));
          },
        }),
        w(Te, be, {
          defaults: { event: "rotate", threshold: 0, pointers: 2 },
          getTouchAction: function () {
            return ["none"];
          },
          attrTest: function (e) {
            return (
              this._super.attrTest.call(this, e) &&
              (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
            );
          },
        }),
        w(Ce, be, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: 0.3,
            direction: 30,
            pointers: 1,
          },
          getTouchAction: function () {
            return we.prototype.getTouchAction.call(this);
          },
          attrTest: function (e) {
            var t,
              n = this.options.direction;
            return (
              30 & n
                ? (t = e.overallVelocity)
                : 6 & n
                ? (t = e.overallVelocityX)
                : 24 & n && (t = e.overallVelocityY),
              this._super.attrTest.call(this, e) &&
                n & e.offsetDirection &&
                e.distance > this.options.threshold &&
                e.maxPointers == this.options.pointers &&
                p(t) > this.options.velocity &&
                4 & e.eventType
            );
          },
          emit: function (e) {
            var t = me(e.offsetDirection);
            t && this.manager.emit(this.options.event + t, e),
              this.manager.emit(this.options.event, e);
          },
        }),
        w(Se, ge, {
          defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10,
          },
          getTouchAction: function () {
            return ["manipulation"];
          },
          process: function (e) {
            var t = this.options,
              n = e.pointers.length === t.pointers,
              i = e.distance < t.threshold,
              o = e.deltaTime < t.time;
            if ((this.reset(), 1 & e.eventType && 0 === this.count))
              return this.failTimeout();
            if (i && o && n) {
              if (4 != e.eventType) return this.failTimeout();
              var r = !this.pTime || e.timeStamp - this.pTime < t.interval,
                s = !this.pCenter || X(this.pCenter, e.center) < t.posThreshold;
              if (
                ((this.pTime = e.timeStamp),
                (this.pCenter = e.center),
                s && r ? (this.count += 1) : (this.count = 1),
                (this._input = e),
                0 == this.count % t.taps)
              )
                return this.hasRequireFailures()
                  ? ((this._timer = h(
                      function () {
                        (this.state = 8), this.tryEmit();
                      },
                      t.interval,
                      this
                    )),
                    2)
                  : 8;
            }
            return 32;
          },
          failTimeout: function () {
            return (
              (this._timer = h(
                function () {
                  this.state = 32;
                },
                this.options.interval,
                this
              )),
              32
            );
          },
          reset: function () {
            clearTimeout(this._timer);
          },
          emit: function () {
            8 == this.state &&
              ((this._input.tapCount = this.count),
              this.manager.emit(this.options.event, this._input));
          },
        }),
        (Ee.VERSION = "2.0.7"),
        (Ee.defaults = {
          domEvents: !1,
          touchAction: "compute",
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [Te, { enable: !1 }],
            [xe, { enable: !1 }, ["rotate"]],
            [Ce, { direction: 6 }],
            [we, { direction: 6 }, ["swipe"]],
            [Se],
            [Se, { event: "doubletap", taps: 2 }, ["tap"]],
            [ke],
          ],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)",
          },
        }),
        ($e.prototype = {
          set: function (e) {
            return (
              l(this.options, e),
              e.touchAction && this.touchAction.update(),
              e.inputTarget &&
                (this.input.destroy(),
                (this.input.target = e.inputTarget),
                this.input.init()),
              this
            );
          },
          stop: function (e) {
            this.session.stopped = e ? 2 : 1;
          },
          recognize: function (e) {
            var t = this.session;
            if (!t.stopped) {
              var n;
              this.touchAction.preventDefaults(e);
              var i = this.recognizers,
                o = t.curRecognizer;
              (!o || (o && 8 & o.state)) && (o = t.curRecognizer = null);
              for (var r = 0; r < i.length; )
                (n = i[r]),
                  2 === t.stopped || (o && n != o && !n.canRecognizeWith(o))
                    ? n.reset()
                    : n.recognize(e),
                  !o && 14 & n.state && (o = t.curRecognizer = n),
                  r++;
            }
          },
          get: function (e) {
            if (e instanceof ge) return e;
            for (var t = this.recognizers, n = 0; n < t.length; n++)
              if (t[n].options.event == e) return t[n];
            return null;
          },
          add: function (e) {
            if (g(e, "add", this)) return this;
            var t = this.get(e.options.event);
            return (
              t && this.remove(t),
              this.recognizers.push(e),
              (e.manager = this),
              this.touchAction.update(),
              e
            );
          },
          remove: function (e) {
            if (g(e, "remove", this)) return this;
            if ((e = this.get(e))) {
              var t = this.recognizers,
                n = O(t, e);
              -1 !== n && (t.splice(n, 1), this.touchAction.update());
            }
            return this;
          },
          on: function (e, t) {
            if (void 0 !== e && void 0 !== t) {
              var n = this.handlers;
              return (
                v(A(e), function (e) {
                  (n[e] = n[e] || []), n[e].push(t);
                }),
                this
              );
            }
          },
          off: function (e, t) {
            if (void 0 !== e) {
              var n = this.handlers;
              return (
                v(A(e), function (e) {
                  t ? n[e] && n[e].splice(O(n[e], t), 1) : delete n[e];
                }),
                this
              );
            }
          },
          emit: function (e, t) {
            this.options.domEvents &&
              (function (e, t) {
                var n = r.createEvent("Event");
                n.initEvent(e, !0, !0),
                  (n.gesture = t),
                  t.target.dispatchEvent(n);
              })(e, t);
            var n = this.handlers[e] && this.handlers[e].slice();
            if (n && n.length) {
              (t.type = e),
                (t.preventDefault = function () {
                  t.srcEvent.preventDefault();
                });
              for (var i = 0; i < n.length; ) n[i](t), i++;
            }
          },
          destroy: function () {
            this.element && Ae(this, !1),
              (this.handlers = {}),
              (this.session = {}),
              this.input.destroy(),
              (this.element = null);
          },
        }),
        l(Ee, {
          INPUT_START: 1,
          INPUT_MOVE: 2,
          INPUT_END: 4,
          INPUT_CANCEL: 8,
          STATE_POSSIBLE: 1,
          STATE_BEGAN: 2,
          STATE_CHANGED: 4,
          STATE_ENDED: 8,
          STATE_RECOGNIZED: 8,
          STATE_CANCELLED: 16,
          STATE_FAILED: 32,
          DIRECTION_NONE: 1,
          DIRECTION_LEFT: 2,
          DIRECTION_RIGHT: 4,
          DIRECTION_UP: 8,
          DIRECTION_DOWN: 16,
          DIRECTION_HORIZONTAL: 6,
          DIRECTION_VERTICAL: 24,
          DIRECTION_ALL: 30,
          Manager: $e,
          Input: q,
          TouchAction: he,
          TouchInput: re,
          MouseInput: G,
          PointerEventInput: ee,
          TouchMouseInput: ae,
          SingleTouchInput: ne,
          Recognizer: ge,
          AttrRecognizer: be,
          Tap: Se,
          Pan: we,
          Swipe: Ce,
          Pinch: xe,
          Rotate: Te,
          Press: ke,
          on: C,
          off: S,
          each: v,
          merge: b,
          extend: y,
          assign: l,
          inherit: w,
          bindFn: x,
          prefixed: j,
        }),
        ((void 0 !== o ? o : "undefined" != typeof self ? self : {}).Hammer =
          Ee),
        void 0 ===
          (i = function () {
            return Ee;
          }.call(t, n, t, e)) || (e.exports = i);
    })(window, document);
  },
});
