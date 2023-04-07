!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [], r = e.document, i = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, u = n.indexOf, l = {}, c = l.toString, f = l.hasOwnProperty, p = f.toString, d = p.call(Object), h = {}, g = function e(t) {
        return "function" == typeof t && "number" != typeof t.nodeType;
    }, y = function e(t) {
        return null != t && t === t.window;
    }, v = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n) for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o);
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
    }
    var b = "3.3.1", w = function(e, t) {
        return new w.fn.init(e, t);
    }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this);
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return w.each(this, e);
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), 
        s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], 
        a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, 
        o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a;
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        globalEval: function(e) {
            m(e);
        },
        each: function(e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(T, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [ e ] : e) : s.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);
            return i;
        },
        map: function(e, t, n) {
            var r, i, o = 0, s = [];
            if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i); else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s);
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), 
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
    });
    function C(e) {
        var t = !!e && "length" in e && e.length, n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    var E = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date(), w = e.document, T = 0, C = 0, E = ae(), k = ae(), S = ae(), D = function(e, t) {
            return e === t && (f = !0), 0;
        }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+", I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), X = new RegExp(W), U = new RegExp("^" + R + "$"), V = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + P + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ee = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\x00" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, re = function() {
            p();
        }, ie = me(function(e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
        } catch (e) {
            L = {
                apply: A.length ? function(e, t) {
                    q.apply(e, H.call(t));
                } : function(e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1;
                }
            };
        }
        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
                    if (9 === T) {
                        if (!(l = t.getElementById(o))) return r;
                        if (l.id === o) return r.push(l), r;
                    } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), 
                    r;
                } else {
                    if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), 
                    r;
                }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), 
                        s = (h = a(e)).length;
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
                    }
                    if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r;
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id");
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i);
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
            }
            return t;
        }
        function se(e) {
            return e[b] = !0, e;
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function le(e, t) {
            var n = e.split("|"), i = n.length;
            while (i--) r.attrHandle[n[i]] = t;
        }
        function ce(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function de(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
        }
        function he(e) {
            return se(function(t) {
                return t = +t, se(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        n = oe.support = {}, o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, p = oe.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, 
            g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), 
            n.attributes = ue(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), n.getElementsByTagName = ue(function(e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function(e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
            }), n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }) : (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }, r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                    }
                    return [];
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), 
                e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), 
                e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
            }), ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 
                2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), 
                h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), 
                e.querySelectorAll("*,:x"), y.push(",.*:");
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), 
            t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1;
            }, D = t ? function(e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
            } : function(e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [ e ], s = [ t ];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
            }, d) : d;
        }, oe.matches = function(e, t) {
            return oe(e, null, null, t);
        }, oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (e) {}
            return oe(t, d, null, [ e ]).length > 0;
        }, oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t);
        }, oe.attr = function(e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()], o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }, oe.escape = function(e) {
            return (e + "").replace(te, ne);
        }, oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, oe.uniqueSort = function(e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1);
            }
            return c = null, e;
        }, i = oe.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else while (t = e[r++]) n += i(t);
            return n;
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ a ? y.firstChild : y.lastChild ], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], 
                                p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if (1 === p.nodeType && ++x && p === t) {
                                    c[e] = [ T, d, x ];
                                    break;
                                }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), 
                            !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [ T, x ]), 
                            p === t)) break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                        var r, o = i(e, t), a = o.length;
                        while (a--) e[r = O(e, o[a])] = !(n[r] = o[a]);
                    }) : function(e) {
                        return i(e, 0, n);
                    }) : i;
                }
            },
            pseudos: {
                not: se(function(e) {
                    var t = [], n = [], r = s(e.replace(B, "$1"));
                    return r[b] ? se(function(e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                    };
                }),
                has: se(function(e) {
                    return function(t) {
                        return oe(e, t).length > 0;
                    };
                }),
                contains: se(function(e) {
                    return e = e.replace(Z, ee), function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                    };
                }),
                lang: se(function(e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), 
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === h;
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !r.pseudos.empty(e);
                },
                header: function(e) {
                    return Y.test(e.nodeName);
                },
                input: function(e) {
                    return G.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: he(function() {
                    return [ 0 ];
                }),
                last: he(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: he(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) r.pseudos[t] = fe(t);
        for (t in {
            submit: !0,
            reset: !0
        }) r.pseudos[t] = pe(t);
        function ye() {}
        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), 
                n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), s = s.slice(n.length));
                for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), 
                o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break;
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
        };
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function me(e, t, n) {
            var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r]) if (1 === t.nodeType || a) return e(t, n, i);
                return !1;
            } : function(t, n, u) {
                var l, c, f, p = [ T, s ];
                if (u) {
                    while (t = t[r]) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                } else while (t = t[r]) if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), 
                c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                    if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                    if (c[o] = p, p[2] = e(t, n, u)) return !0;
                }
                return !1;
            };
        }
        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n;
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
            l && t.push(s)));
            return a;
        }
        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function(o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [ s ] : s, []), y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--) (f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u);
                        }
                        c = v.length;
                        while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
            });
        }
        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                return e === t;
            }, s, !0), f = me(function(e) {
                return O(t, e) > -1;
            }, s, !0), p = [ function(e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null, i;
            } ]; u < o; u++) if (n = r.relative[e[u].type]) p = [ me(xe(p), n) ]; else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                    for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                    return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                        value: " " === e[u - 2].type ? "*" : ""
                    })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
                }
                p.push(n);
            }
            return xe(p);
        }
        function Ee(e, t) {
            var n = t.length > 0, i = e.length > 0, o = function(o, a, s, u, c) {
                var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, k = C.length;
                for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                    if (i && f) {
                        h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                        while (y = e[h++]) if (y(f, a || d, s)) {
                            u.push(f);
                            break;
                        }
                        c && (T = E);
                    }
                    n && ((f = !y && f) && v--, o && x.push(f));
                }
                if (v += m, n && m !== v) {
                    h = 0;
                    while (y = t[h++]) y(x, b, a, s);
                    if (o) {
                        if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
                        b = we(b);
                    }
                    L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                }
                return c && (T = E, l = w), x;
            };
            return n ? se(o) : o;
        }
        return s = oe.compile = function(e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e;
            }
            return o;
        }, u = oe.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length);
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                        break;
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, 
        p(), n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ue(function(e) {
            return null == e.getAttribute("disabled");
        }) || le(P, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), oe;
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, 
    w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function(e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (i && w(e).is(n)) break;
            r.push(e);
        }
        return r;
    }, S = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t) ? w.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n;
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n;
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return u.call(t, e) > -1 !== n;
        }) : w.filter(t, e, n);
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [ r ] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, w.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0));
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), 
                A.test(i[1]) && w.isPlainObject(t)) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/, O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    w.fn.extend({
        has: function(e) {
            var t = w(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
            if (!D.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e;
    }
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return k(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return k(e, "parentNode", n);
        },
        next: function(e) {
            return P(e, "nextSibling");
        },
        prev: function(e) {
            return P(e, "previousSibling");
        },
        nextAll: function(e) {
            return k(e, "nextSibling");
        },
        prevAll: function(e) {
            return k(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return k(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return k(e, "previousSibling", n);
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return S(e.firstChild);
        },
        contents: function(e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), 
            w.merge([], e.childNodes));
        }
    }, function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), 
            this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
        };
    });
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function() {
            for (i = i || e.once, r = t = !0; a.length; s = -1) {
                n = a.shift();
                while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, 
                n = !1);
            }
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
        }, l = {
            add: function() {
                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                    w.each(n, function(n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
                    });
                }(arguments), n && !t && u()), this;
            },
            remove: function() {
                return w.each(arguments, function(e, t) {
                    var n;
                    while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
                }), this;
            },
            has: function(e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
                return o && (o = []), this;
            },
            disable: function() {
                return i = a = [], o = n = "", this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                return i = a = [], n || t || (o = n = ""), this;
            },
            locked: function() {
                return !!i;
            },
            fireWith: function(e, n) {
                return i || (n = [ e, (n = n || []).slice ? n.slice() : n ], a.push(n), t || u()), 
                this;
            },
            fire: function() {
                return l.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!r;
            }
        };
        return l;
    };
    function I(e) {
        return e;
    }
    function W(e) {
        throw e;
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
        } catch (e) {
            n.apply(void 0, [ e ]);
        }
    }
    w.extend({
        Deferred: function(t) {
            var n = [ [ "notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2 ], [ "resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", i = {
                state: function() {
                    return r;
                },
                always: function() {
                    return o.done(arguments).fail(arguments), this;
                },
                "catch": function(e) {
                    return i.then(null, e);
                },
                pipe: function() {
                    var e = arguments;
                    return w.Deferred(function(t) {
                        w.each(n, function(n, r) {
                            var i = g(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                then: function(t, r, i) {
                    var o = 0;
                    function a(t, n, r, i) {
                        return function() {
                            var s = this, u = arguments, l = function() {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, 
                                    l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, 
                                    u = [ e ]), (i || n.resolveWith)(s, u));
                                }
                            }, c = i ? l : function() {
                                try {
                                    l();
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, 
                                    u = [ e ]), n.rejectWith(s, u));
                                }
                            };
                            t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), 
                            e.setTimeout(c));
                        };
                    }
                    return w.Deferred(function(e) {
                        n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), 
                        n[2][3].add(a(0, e, g(r) ? r : W));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? w.extend(e, i) : i;
                }
            }, o = {};
            return w.each(n, function(e, t) {
                var a = t[2], s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    r = s;
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), 
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                }, o[t[0] + "With"] = a.fireWith;
            }), i.promise(o), t && t.call(o, o), o;
        },
        when: function(e) {
            var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), a = w.Deferred(), s = function(e) {
                return function(n) {
                    r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
                };
            };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise();
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }, w.readyException = function(t) {
        e.setTimeout(function() {
            throw t;
        });
    };
    var F = w.Deferred();
    w.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            w.readyException(e);
        }), this;
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [ w ]));
        }
    }), w.ready.then = F.then;
    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), 
        w.ready();
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), 
    e.addEventListener("load", _));
    var z = function(e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === x(n)) {
            i = !0;
            for (s in n) z(e, t, s, n[s], !0, o, a);
        } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, 
        t = function(e, t, n) {
            return l.call(w(e), n);
        })), t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    }, X = /^-ms-/, U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase();
    }
    function G(e) {
        return e.replace(X, "ms-").replace(U, V);
    }
    var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Q() {
        this.expando = w.expando + Q.uid++;
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n; else for (r in t) i[G(r)] = t[r];
            return i;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [ t ] : t.match(M) || []).length;
                    while (n--) delete r[t[n]];
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t);
        }
    };
    var J = new Q(), K = new Q(), Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;
    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), 
        "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = te(n);
            } catch (e) {}
            K.set(e, t, n);
        } else n = void 0;
        return n;
    }
    w.extend({
        hasData: function(e) {
            return K.hasData(e) || J.hasData(e);
        },
        data: function(e, t, n) {
            return K.access(e, t, n);
        },
        removeData: function(e, t) {
            K.remove(e, t);
        },
        _data: function(e, t, n) {
            return J.access(e, t, n);
        },
        _removeData: function(e, t) {
            J.remove(e, t);
        }
    }), w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), 
                    ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0);
                }
                return i;
            }
            return "object" == typeof e ? this.each(function() {
                K.set(this, e);
            }) : z(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n;
                } else this.each(function() {
                    K.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e);
            });
        }
    }), w.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), 
            r || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t), r = n.length, i = n.shift(), o = w._queueHooks(e, t), a = function() {
                w.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    J.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [ o ]);
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t);
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = [ "Top", "Right", "Bottom", "Left" ], ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
    }, se = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i;
    };
    function ue(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur();
        } : function() {
            return w.css(e, t, "");
        }, u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), 
            c /= o;
            c *= 2, w.style(e, t, c + l), n = n || [];
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
        r.start = c, r.end = i)), i;
    }
    var le = {};
    function ce(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), 
        t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, 
        t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), 
        "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", 
        J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    w.fn.extend({
        show: function() {
            return fe(this, !0);
        },
        hide: function() {
            return fe(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? w(this).show() : w(this).hide();
            });
        }
    });
    var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, 
    ge.th = ge.td;
    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
        void 0 === t || t && N(e, t) ? w.merge([ e ], n) : n;
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [ o ] : o); else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || [ "", "" ])[1].toLowerCase(), 
            u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++]) if (r && w.inArray(o, r) > -1) i && i.push(o); else if (l = w.contains(o.ownerDocument, o), 
        a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o);
        }
        return f;
    }
    !function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")), t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
        e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();
    var be = r.documentElement, we = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0;
    }
    function ke() {
        return !1;
    }
    function Se() {
        try {
            return r.activeElement;
        } catch (e) {}
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) De(e, s, n, r, t[s], o);
            return e;
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
        r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke; else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
            w.event.add(this, t, i, r, n);
        });
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), 
                n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                }), l = (t = (t || "").match(M) || [ "" ]).length;
                while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), 
                d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, 
                f = w.event.special[d] || {}, c = w.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), 
                f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), 
                w.event.global[d] = !0);
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [ "" ]).length;
                while (l--) if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), 
                d) {
                    f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], 
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), 
                    c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), 
                    delete u[d]);
                } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, 
                    t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), 
                    t.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [ l ]).length), 
                a[i] && o.push(r);
                o.length && s.push({
                    elem: l,
                    handlers: o
                });
            }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s;
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e];
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    });
                }
            });
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Se() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Se() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), 
                    !1;
                },
                _default: function(e) {
                    return N(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, w.Event = function(e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, w.each({
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
        "char": !0,
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
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), w.fn.extend({
        on: function(e, t, n, r) {
            return De(this, e, t, n, r);
        },
        one: function(e, t, n, r) {
            return De(this, e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), 
            this.each(function() {
                w.event.remove(this, e, n, t);
            });
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
    }
    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
        e;
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function(i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
        });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), 
        o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), 
            u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], 
            he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
        }
        return e;
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), 
        r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), 
            r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]); else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Y(n)) {
                if (t = n[J.expando]) {
                    if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                    n[J.expando] = void 0;
                }
                n[K.expando] && (n[K.expando] = void 0);
            }
        }
    }), w.fn.extend({
        detach: function(e) {
            return Ie(this, e, !0);
        },
        remove: function(e) {
            return Ie(this, e);
        },
        text: function(e) {
            return z(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return w.clone(this, e, t);
            });
        },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
            }, e);
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), 
            w(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r);
        };
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), $e = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t);
    }, Be = new RegExp(oe.join("|"), "i");
    !function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), 
                o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", 
                be.removeChild(l), c = null;
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", 
        h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function() {
                return t(), o;
            },
            pixelBoxStyles: function() {
                return t(), s;
            },
            pixelPosition: function() {
                return t(), i;
            },
            reliableMarginLeft: function() {
                return t(), u;
            },
            scrollboxSize: function() {
                return t(), a;
            }
        }));
    }();
    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), 
        !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, 
        o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
        s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }
    function _e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ge = [ "Webkit", "Moz", "ms" ], Ye = r.createElement("div").style;
    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
        while (n--) if ((e = Ge[n] + t) in Ye) return e;
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t;
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (;a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), 
        "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), 
        "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), 
        u;
    }
    function et(e, t, n) {
        var r = $e(e), i = Fe(e, t, r), o = "border-box" === w.css(e, "boxSizing", !1, r), a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto";
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], 
        a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
                if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), 
                null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), 
                h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), 
            void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), 
            !0 === n || isFinite(o) ? o || 0 : i) : i;
        }
    }), w.each([ "height", "width" ], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() {
                    return et(e, t, r);
                });
            },
            set: function(e, n, r) {
                var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), 
                s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), 
                Ke(e, n, s);
            }
        };
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
    }), w.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o;
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
            }, e, t, arguments.length > 1);
        }
    });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
    }
    w.Tween = tt, tt.prototype = {
        constructor: tt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, w.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), 
        w.fx.tick());
    }
    function st() {
        return e.setTimeout(function() {
            nt = void 0;
        }), nt = Date.now();
    }
    function ut(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, 
        a.empty.fire = function() {
            a.unqueued || s();
        }), a.unqueued++, p.always(function() {
            p.always(function() {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
            });
        }));
        for (r in t) if (i = t[r], it.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                if ("show" !== i || !y || void 0 === y[r]) continue;
                g = !0;
            }
            d[r] = y && y[r] || w.style(e, r);
        }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
            null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([ e ], !0), 
            l = e.style.display || l, c = w.css(e, "display"), fe([ e ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
                h.display = l;
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), 
            n.overflow && (h.overflow = "hidden", p.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), u = !1;
            for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                display: l
            }), o && (y.hidden = !g), g && fe([ e ], !0), p.done(function() {
                g || fe([ e ]), J.remove(e, "fxshow");
                for (r in d) w.style(e, r, d[r]);
            })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, 
            u.start = 0));
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), 
        n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
    }
    function pt(e, t, n) {
        var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (i) return !1;
            for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
            return s.notifyWith(e, [ l, r, n ]), r < 1 && a ? n : (a || s.notifyWith(e, [ l, 1, 0 ]), 
            s.resolveWith(e, [ l ]), !1);
        }, l = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {
                specialEasing: {},
                easing: w.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || st(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [ l, 1, 0 ]), s.resolveWith(e, [ l, t ])) : s.rejectWith(e, [ l, t ]), 
                this;
            }
        }), c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++) if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), 
        r;
        return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), 
        w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l;
    }
    w.Animation = w.extend(pt, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ie.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            g(e) ? (t = e, e = [ "*" ]) : e = e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], 
            pt.tweeners[n].unshift(t);
        },
        prefilters: [ ct ],
        prefilter: function(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        }
    }), w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), 
        null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }, r;
    }, w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e), o = w.speed(t, n, r), a = function() {
                var t = pt(this, w.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, i = null != e && e + "queueHooks", o = w.timers, a = J.get(this);
                if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
                t = !1, o.splice(i, 1));
                !t && n || w.dequeue(this, e);
            });
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
                t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), w.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
        };
    }), w.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), w.timers = [], w.fx.tick = function() {
        var e, t = 0, n = w.timers;
        for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), nt = void 0;
    }, w.fx.timer = function(e) {
        w.timers.push(e), w.fx.start();
    }, w.fx.interval = 13, w.fx.start = function() {
        rt || (rt = !0, at());
    }, w.fx.stop = function() {
        rt = null;
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function(t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i);
            };
        });
    }, function() {
        var e = r.createElement("input"), t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", 
        e.type = "radio", h.radioValue = "t" === e.value;
    }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return z(this, w.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e);
            });
        }
    }), w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), 
            void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
            n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(M);
            if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
        }
    }), dt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), 
            i;
        };
    });
    var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function(e, t) {
            return z(this, w.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e];
            });
        }
    }), w.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, 
            i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), w.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        w.propFix[this.toLowerCase()] = this;
    });
    function vt(e) {
        return (e.match(M) || []).join(" ");
    }
    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
    }
    w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function(t) {
                w(this).addClass(e.call(this, t, mt(this)));
            });
            if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = vt(r)) && n.setAttribute("class", s);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function(t) {
                w(this).removeClass(e.call(this, t, mt(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = t[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                i !== (s = vt(r)) && n.setAttribute("class", s);
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e, r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t);
            }) : this.each(function() {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = xt(e);
                    while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), 
                this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++]) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length) return r = g(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                        return null == e ? "" : e + "";
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
                });
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                        if (t = w(n).val(), a) return t;
                        s.push(t);
                    }
                    return s;
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                    while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), w.each([ "radio", "checkbox" ], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
            }
        }, h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function(e) {
        e.stopPropagation();
    };
    w.extend(w.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [ i || r ], m = f.call(t, "type") ? t.type : t, x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), 
            x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), 
            t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            t.result = void 0, t.target || (t.target = i), n = null == n ? [ t ] : w.makeArray(n, [ t ]), 
            d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), 
                    u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, 
                (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), 
                (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), 
                w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), 
                t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, 
                u && (i[c] = u)), t.result;
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event(), n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t);
        }
    }), w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0);
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this, i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
            },
            teardown: function() {
                var r = this.ownerDocument || this, i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
            }
        };
    });
    var Ct = e.location, Et = Date.now(), kt = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), 
        n;
    };
    var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function(t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
        }); else if (n || "object" !== x(t)) r(e, t); else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
    }
    w.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = g(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
            i(this.name, this.value);
        }); else for (n in e) jt(n, e[n], t, i);
        return r.join("&");
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                };
            }).get();
        }
    });
    var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm, Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(M) || [];
            if (g(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function _t(e, t, n, r) {
        var i = {}, o = e === Wt;
        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), 
                a(l), !1);
            }), u;
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*");
    }
    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e;
    }
    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents, u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                a || (a = i);
            }
            o = o || a;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), 
        u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                break;
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                t = a(t);
            } catch (e) {
                return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + u + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(), m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s) {
                            s = {};
                            while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2];
                        }
                        t = s[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return c ? a : null;
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), 
                    this;
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (c) E.always(e[E.status]); else for (t in e) x[t] = [ x[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    var t = e || C;
                    return i && i.abort(t), k(0, t), this;
                }
            };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), 
            h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [ "" ], 
            null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), 
            _t(It, h, n, E), c) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), 
            h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), 
            h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, 
            delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), 
            h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), 
            w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), 
            E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [ E, h ]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    E.abort("timeout");
                }, h.timeout));
                try {
                    c = !1, i.send(b, k);
                } catch (e) {
                    if (c) throw e;
                    k(-1, e);
                }
            } else k(-1, "No Transport");
            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, 
                l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), 
                l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), 
                (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, 
                p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), 
                E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [ p, C, E ]) : v.rejectWith(g, [ E, C, d ]), 
                E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [ E, h, l ? p : d ]), 
                m.fireWith(g, [ E, C ]), f && (y.trigger("ajaxComplete", [ E, h ]), --w.active || w.event.trigger("ajaxStop")));
            }
            return E;
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script");
        }
    }), w.each([ "get", "post" ], function(e, t) {
        w[t] = function(e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e));
        };
    }), w._evalUrl = function(e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        });
    }, w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = w(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes);
            }), this;
        }
    }), w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e);
    }, w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    };
    var Vt = {
        0: 200,
        1223: 204
    }, Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 
                        "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()));
                    };
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r();
                    });
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null);
                } catch (e) {
                    if (n) throw e;
                }
            },
            abort: function() {
                n && n();
            }
        };
    }), w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e;
            }
        }
    }), w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), w.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
                    }), r.head.appendChild(t[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0, e;
        }
    }), w.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
        s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), 
        t.converters["script json"] = function() {
            return a || w.error(i + " was not called"), a[0];
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments;
        }, r.always(function() {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, 
            Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
        }), "script";
    }), h.createHTMLDocument = function() {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), w.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, 
        t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [ t.createElement(o[1]) ] : (o = xe([ e ], t, a), 
        a && a.length && w(a).remove(), w.merge([], o.childNodes));
    }, w.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 
        a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [ e.responseText, t, e ]);
            });
        }), this;
    }, w.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem;
        }).length;
    }, w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"), f = w(e), p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), 
            u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, 
            i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), 
            null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), 
            "using" in t ? t.using.call(e, p) : f.css(p);
        }
    }, w.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                w.offset.setOffset(this, e, t);
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, 
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            };
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect(); else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), 
                    i.left += w.css(e, "borderLeftWidth", !0));
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                return e || be;
            });
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return z(this, function(e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
            }, e, r, arguments.length);
        };
    }), w.each([ "top", "left" ], function(e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
        });
    }), w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            w.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function(t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, 
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
                }, t, a ? i : void 0, a);
            };
        });
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), w.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), 
        i = function() {
            return e.apply(t || this, r.concat(o.call(arguments)));
        }, i.guid = e.guid = e.guid || w.guid++, i;
    }, w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0);
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, 
    w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w;
    });
    var Jt = e.jQuery, Kt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
    }, t || (e.jQuery = e.$ = w), w;
});

(function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : t(jQuery);
})(function(t) {
    function e(t) {
        for (var e = t.css("visibility"); "inherit" === e; ) t = t.parent(), e = t.css("visibility");
        return "hidden" !== e;
    }
    function i(t) {
        for (var e, i; t.length && t[0] !== document; ) {
            if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), 
            !isNaN(i) && 0 !== i)) return i;
            t = t.parent();
        }
        return 0;
    }
    function s() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, 
        this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", 
        this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", 
        this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", 
        this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", 
        this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            dayNamesMin: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), 
        this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }
    function n(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.on("mouseout", i, function() {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), 
            -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover");
        }).on("mouseover", i, o);
    }
    function o() {
        t.datepicker._isDisabledDatepicker(p.inline ? p.dpDiv.parent()[0] : p.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), 
        t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), 
        -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"));
    }
    function a(e, i) {
        t.extend(e, i);
        for (var s in i) null == i[s] && (e[s] = i[s]);
        return e;
    }
    function r(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change");
        };
    }
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var l = 0, h = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var s, n, o;
            for (o = 0; null != (n = i[o]); o++) try {
                s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove");
            } catch (a) {}
            e(i);
        };
    }(t.cleanData), t.widget = function(e, i, s) {
        var n, o, a, r = {}, l = e.split(".")[0];
        e = e.split(".")[1];
        var h = l + "-" + e;
        return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [ {} ].concat(s))), 
        t.expr[":"][h.toLowerCase()] = function(e) {
            return !!t.data(e, h);
        }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function(t, e) {
            return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e);
        }, t.extend(o, n, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), a = new i(), a.options = t.widget.extend({}, a.options), t.each(s, function(e, s) {
            return t.isFunction(s) ? (r[e] = function() {
                function t() {
                    return i.prototype[e].apply(this, arguments);
                }
                function n(t) {
                    return i.prototype[e].apply(this, t);
                }
                return function() {
                    var e, i = this._super, o = this._superApply;
                    return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, 
                    this._superApply = o, e;
                };
            }(), void 0) : (r[e] = s, void 0);
        }), o.prototype = t.widget.extend(a, {
            widgetEventPrefix: n ? a.widgetEventPrefix || e : e
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: h
        }), n ? (t.each(n._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto);
        }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), 
        o;
    }, t.widget.extend = function(e) {
        for (var i, s, n = h.call(arguments, 1), o = 0, a = n.length; a > o; o++) for (i in n[o]) s = n[o][i], 
        n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
        return e;
    }, t.widget.bridge = function(e, i) {
        var s = i.prototype.widgetFullName || e;
        t.fn[e] = function(n) {
            var o = "string" == typeof n, a = h.call(arguments, 1), r = this;
            return o ? this.length || "instance" !== n ? this.each(function() {
                var i, o = t.data(this, s);
                return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), 
                i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'");
            }) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [ n ].concat(a))), 
            this.each(function() {
                var e = t.data(this, s);
                e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this));
            })), r;
        };
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(e, i) {
            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = l++, 
            this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), 
            this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), 
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === i && this.destroy();
                }
            }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), 
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), 
            this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), 
            this._init();
        },
        _getCreateOptions: function() {
            return {};
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            var e = this;
            this._destroy(), t.each(this.classesElementLookup, function(t, i) {
                e._removeClass(i, t);
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), 
            this.bindings.off(this.eventNamespace);
        },
        _destroy: t.noop,
        widget: function() {
            return this.element;
        },
        option: function(e, i) {
            var s, n, o, a = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e) if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, 
                n = n[s[o]];
                if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                n[e] = i;
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                a[e] = i;
            }
            return this._setOptions(a), this;
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this;
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), 
            this;
        },
        _setOptionClasses: function(e) {
            var i, s, n;
            for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), 
            this._removeClass(n, i), s.addClass(this._classes({
                element: s,
                keys: i,
                classes: e,
                add: !0
            })));
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), 
            t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            });
        },
        _classes: function(e) {
            function i(i, o) {
                var a, r;
                for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), 
                n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]);
            }
            var s = [], n = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e), this._on(e.element, {
                remove: "_untrackClassesElement"
            }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), 
            s.join(" ");
        },
        _untrackClassesElement: function(e) {
            var i = this;
            t.each(i.classesElementLookup, function(s, n) {
                -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()));
            });
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1);
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0);
        },
        _toggleClass: function(t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var n = "string" == typeof t || null === t, o = {
                extra: n ? e : i,
                keys: n ? t : e,
                element: n ? this.element : t,
                add: s
            };
            return o.element.toggleClass(this._classes(o), s), this;
        },
        _on: function(e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, 
            i = this.element, n = this.widget()), t.each(s, function(s, a) {
                function r() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0;
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var l = s.match(/^([\w:-]*)\s*(.*)$/), h = l[1] + o.eventNamespace, c = l[2];
                c ? n.on(h, c, r) : i.on(h, r);
            });
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
            e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), 
            this.hoverable = t(this.hoverable.not(e).get());
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments);
            }
            var s = this;
            return setTimeout(i, e || 0);
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover");
                },
                mouseleave: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover");
                }
            });
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus");
                },
                focusout: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus");
                }
            });
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), 
            i.target = this.element[0], o = i.originalEvent) for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [ i ].concat(s)) === !1 || i.isDefaultPrevented());
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                t(this)[e](), o && o.call(s[0]), i();
            });
        };
    }), t.widget, function() {
        function e(t, e, i) {
            return [ parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1) ];
        }
        function i(e, i) {
            return parseInt(t.css(e, i), 10) || 0;
        }
        function s(e) {
            var i = e[0];
            return 9 === i.nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : t.isWindow(i) ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
            };
        }
        var n, o = Math.max, a = Math.abs, r = /left|center|right/, l = /top|center|bottom/, h = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, u = /%$/, d = t.fn.position;
        t.position = {
            scrollbarWidth: function() {
                if (void 0 !== n) return n;
                var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = s.children()[0];
                return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, 
                e === i && (i = s[0].clientWidth), s.remove(), n = e - i;
            },
            getScrollInfo: function(e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"), s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"), n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
                return {
                    width: o ? t.position.scrollbarWidth() : 0,
                    height: n ? t.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function(e) {
                var i = t(e || window), s = t.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType, o = !s && !n;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: n,
                    offset: o ? t(e).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                };
            }
        }, t.fn.position = function(n) {
            if (!n || !n.of) return d.apply(this, arguments);
            n = t.extend({}, n);
            var u, p, f, m, g, _, v = t(n.of), b = t.position.getWithinInfo(n.within), y = t.position.getScrollInfo(b), w = (n.collision || "flip").split(" "), k = {};
            return _ = s(v), v[0].preventDefault && (n.at = "left top"), p = _.width, f = _.height, 
            m = _.offset, g = t.extend({}, m), t.each([ "my", "at" ], function() {
                var t, e, i = (n[this] || "").split(" ");
                1 === i.length && (i = r.test(i[0]) ? i.concat([ "center" ]) : l.test(i[0]) ? [ "center" ].concat(i) : [ "center", "center" ]), 
                i[0] = r.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), 
                e = h.exec(i[1]), k[this] = [ t ? t[0] : 0, e ? e[0] : 0 ], n[this] = [ c.exec(i[0])[0], c.exec(i[1])[0] ];
            }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? g.left += p : "center" === n.at[0] && (g.left += p / 2), 
            "bottom" === n.at[1] ? g.top += f : "center" === n.at[1] && (g.top += f / 2), u = e(k.at, p, f), 
            g.left += u[0], g.top += u[1], this.each(function() {
                var s, r, l = t(this), h = l.outerWidth(), c = l.outerHeight(), d = i(this, "marginLeft"), _ = i(this, "marginTop"), x = h + d + i(this, "marginRight") + y.width, C = c + _ + i(this, "marginBottom") + y.height, D = t.extend({}, g), T = e(k.my, l.outerWidth(), l.outerHeight());
                "right" === n.my[0] ? D.left -= h : "center" === n.my[0] && (D.left -= h / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), 
                D.left += T[0], D.top += T[1], s = {
                    marginLeft: d,
                    marginTop: _
                }, t.each([ "left", "top" ], function(e, i) {
                    t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: h,
                        elemHeight: c,
                        collisionPosition: s,
                        collisionWidth: x,
                        collisionHeight: C,
                        offset: [ u[0] + T[0], u[1] + T[1] ],
                        my: n.my,
                        at: n.at,
                        within: b,
                        elem: l
                    });
                }), n.using && (r = function(t) {
                    var e = m.left - D.left, i = e + p - h, s = m.top - D.top, r = s + f - c, u = {
                        target: {
                            element: v,
                            left: m.left,
                            top: m.top,
                            width: p,
                            height: f
                        },
                        element: {
                            element: l,
                            left: D.left,
                            top: D.top,
                            width: h,
                            height: c
                        },
                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
                    };
                    h > p && p > a(e + i) && (u.horizontal = "center"), c > f && f > a(s + r) && (u.vertical = "middle"), 
                    u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, u);
                }), l.offset(t.extend(D, {
                    using: r
                }));
            });
        }, t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, l = n - r, h = r + e.collisionWidth - a - n;
                    e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, 
                    t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left);
                },
                top: function(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, l = n - r, h = r + e.collisionHeight - a - n;
                    e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, 
                    t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top);
                }
            },
            flip: {
                left: function(t, e) {
                    var i, s, n = e.within, o = n.offset.left + n.scrollLeft, r = n.width, l = n.isWindow ? n.scrollLeft : n.offset.left, h = t.left - e.collisionPosition.marginLeft, c = h - l, u = h + e.collisionWidth - r - l, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                    0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, 
                    (s > 0 || u > a(s)) && (t.left += d + p + f));
                },
                top: function(t, e) {
                    var i, s, n = e.within, o = n.offset.top + n.scrollTop, r = n.height, l = n.isWindow ? n.scrollTop : n.offset.top, h = t.top - e.collisionPosition.marginTop, c = h - l, u = h + e.collisionHeight - r - l, d = "top" === e.my[1], p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, m = -2 * e.offset[1];
                    0 > c ? (s = t.top + p + f + m + e.collisionHeight - r - o, (0 > s || a(c) > s) && (t.top += p + f + m)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - l, 
                    (i > 0 || u > a(i)) && (t.top += p + f + m));
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
                }
            }
        };
    }(), t.ui.position, t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e);
            };
        }) : function(e, i, s) {
            return !!t.data(e, s[3]);
        }
    }), t.fn.extend({
        disableSelection: function() {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(t + ".ui-disableSelection", function(t) {
                    t.preventDefault();
                });
            };
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection");
        }
    }), t.ui.focusable = function(i, s) {
        var n, o, a, r, l, h = i.nodeName.toLowerCase();
        return "area" === h ? (n = i.parentNode, o = n.name, i.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"), 
        a.length > 0 && a.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(h) ? (r = !i.disabled, 
        r && (l = t(i).closest("fieldset")[0], l && (r = !l.disabled))) : r = "a" === h ? i.href || s : s, 
        r && t(i).is(":visible") && e(t(i)));
    }, t.extend(t.expr[":"], {
        focusable: function(e) {
            return t.ui.focusable(e, null != t.attr(e, "tabindex"));
        }
    }), t.ui.focusable, t.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form);
    }, t.ui.formResetMixin = {
        _formResetHandler: function() {
            var e = t(this);
            setTimeout(function() {
                var i = e.data("ui-form-reset-instances");
                t.each(i, function() {
                    this.refresh();
                });
            });
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(), this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), 
                this.form.data("ui-form-reset-instances", t);
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var e = this.form.data("ui-form-reset-instances");
                e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
            }
        }
    }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each([ "Width", "Height" ], function(e, i) {
        function s(e, i, s, o) {
            return t.each(n, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), 
                o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
            }), i;
        }
        var n = "Width" === i ? [ "Left", "Right" ] : [ "Top", "Bottom" ], o = i.toLowerCase(), a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + i] = function(e) {
            return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
                t(this).css(o, s(this, e) + "px");
            });
        }, t.fn["outer" + i] = function(e, n) {
            return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                t(this).css(o, s(this, e, !0, n) + "px");
            });
        };
    }), t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }), t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, t.ui.escapeSelector = function() {
        var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
        return function(e) {
            return e.replace(t, "\\$1");
        };
    }(), t.fn.labels = function() {
        var e, i, s, n, o;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), 
        s = this.attr("id"), s && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), 
        i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), 
        this.pushStack(n));
    }, t.fn.scrollParent = function(e) {
        var i = this.css("position"), s = "absolute" === i, n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, o = this.parents().filter(function() {
            var e = t(this);
            return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
        }).eq(0);
        return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document);
    }, t.extend(t.expr[":"], {
        tabbable: function(e) {
            var i = t.attr(e, "tabindex"), s = null != i;
            return (!s || i >= 0) && t.ui.focusable(e, s);
        }
    }), t.fn.extend({
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t);
                });
            };
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
            });
        }
    }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var c = !1;
    t(document).on("mouseup", function() {
        c = !1;
    }), t.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t);
            }).on("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), 
                i.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(e) {
            if (!c) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this, s = 1 === e.which, n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, 
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, 
                !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t);
                }, this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t);
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), 
                e.preventDefault(), c = !0, !0)) : !0;
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(e);
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), 
            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, 
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
        },
        _mouseUp: function(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), 
            delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, c = !1, e.preventDefault();
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    }), t.ui.plugin = {
        add: function(e, i, s) {
            var n, o = t.ui[e].prototype;
            for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([ i, s[n] ]);
        },
        call: function(t, e, i, s) {
            var n, o = t.plugins[e];
            if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i);
        }
    }, t.ui.safeActiveElement = function(t) {
        var e;
        try {
            e = t.activeElement;
        } catch (i) {
            e = t.body;
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e;
    }, t.ui.safeBlur = function(e) {
        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
    }, t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), 
            this._setHandleClassName(), this._mouseInit();
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName());
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, 
            void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0);
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), 
            this.handle ? (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), 
            !0) : !1);
        },
        _blockFrames: function(e) {
            this.iframeBlocks = this.document.find(e).map(function() {
                var e = t(this);
                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0];
            });
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _blurActiveElement: function(e) {
            var i = t.ui.safeActiveElement(this.document[0]), s = t(e.target);
            s.closest(i).length || t.ui.safeBlur(i);
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), 
            this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), 
            this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), 
            this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === t(this).css("position");
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), 
            this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, 
            this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), 
            this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), 
            t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), 
            t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0);
        },
        _refreshOffsets: function(t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            };
        },
        _mouseDrag: function(e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), 
            this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", e, s) === !1) return this._mouseUp(new t.Event("mouseup", e)), 
                !1;
                this.position = s.position;
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", 
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1;
        },
        _mouseStop: function(e) {
            var i = this, s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), 
            this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", e) !== !1 && i._clear();
            }) : this._trigger("stop", e) !== !1 && this._clear(), !1;
        },
        _mouseUp: function(e) {
            return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), 
            this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e);
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
                target: this.element[0]
            })) : this._clear(), this;
        },
        _getHandle: function(e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0;
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, 
            this._addClass(this.handleElement, "ui-draggable-handle");
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle");
        },
        _createHelper: function(e) {
            var i = this.options, s = t.isFunction(i.helper), n = s ? t(i.helper.apply(this.element[0], [ e ])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), 
            s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), 
            n;
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), 
            "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },
        _isRootNode: function(t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0];
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset(), i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), 
            e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var t = this.element.position(), e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var e, i, s, n = this.options, o = this.document[0];
            return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [ t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ], 
            void 0) : "document" === n.containment ? (this.containment = [ 0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ], 
            void 0) : n.containment.constructor === Array ? (this.containment = n.containment, 
            void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), 
            i = t(n.containment), s = i[0], s && (e = /(scroll|auto)/.test(i.css("overflow")), 
            this.containment = [ (parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], 
            this.relativeContainer = i), void 0) : (this.containment = null, void 0);
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1, s = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            };
        },
        _generatePosition: function(t, e) {
            var i, s, n, o, a = this.options, r = this._isRootNode(this.scrollParent[0]), l = t.pageX, h = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), 
            i = [ this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top ]) : i = this.containment, 
            t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), 
            t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), 
            t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, 
            h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, 
            o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, 
            l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), 
            "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (h = this.originalPageY)), 
            {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            };
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), 
            this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
        },
        _trigger: function(e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [ i, s, this ], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), 
            s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s);
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i, s) {
            var n = t.extend({}, i, {
                item: s.element
            });
            s.sortables = [], t(s.options.connectToSortable).each(function() {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n));
            });
        },
        stop: function(e, i, s) {
            var n = t.extend({}, i, {
                item: s.element
            });
            s.cancelHelperRemoval = !1, t.each(s.sortables, function() {
                var t = this;
                t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, 
                t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, 
                t._trigger("deactivate", e, n));
            });
        },
        drag: function(e, i, s) {
            t.each(s.sortables, function() {
                var n = !1, o = this;
                o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, 
                o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function() {
                    return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, 
                    this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), 
                    n;
                })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), 
                o.options._helper = o.options.helper, o.options.helper = function() {
                    return i.helper[0];
                }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), 
                o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, 
                o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, 
                s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function() {
                    this.refreshPositions();
                }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), 
                i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, 
                o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), 
                o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, 
                o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), 
                i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, 
                t.each(s.sortables, function() {
                    this.refreshPositions();
                }));
            });
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i, s) {
            var n = t("body"), o = s.options;
            n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor);
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._cursor && t("body").css("cursor", n._cursor);
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i, s) {
            var n = t(i.helper), o = s.options;
            n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity);
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._opacity && t(i.helper).css("opacity", n._opacity);
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), 
            i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
        },
        drag: function(e, i, s) {
            var n = s.options, o = !1, a = s.scrollParentNotHidden[0], r = s.document[0];
            a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), 
            n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), 
            n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), 
            o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e);
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function(e, i, s) {
            var n = s.options;
            s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                var e = t(this), i = e.offset();
                this !== s.element[0] && s.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                });
            });
        },
        drag: function(e, i, s) {
            var n, o, a, r, l, h, c, u, d, p, f = s.options, m = f.snapTolerance, g = i.offset.left, _ = g + s.helperProportions.width, v = i.offset.top, b = v + s.helperProportions.height;
            for (d = s.snapElements.length - 1; d >= 0; d--) l = s.snapElements[d].left - s.margins.left, 
            h = l + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, 
            l - m > _ || g > h + m || c - m > b || v > u + m || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
                snapItem: s.snapElements[d].item
            })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(c - b), 
            o = m >= Math.abs(u - v), a = m >= Math.abs(l - _), r = m >= Math.abs(h - g), n && (i.position.top = s._convertPositionTo("relative", {
                top: c - s.helperProportions.height,
                left: 0
            }).top), o && (i.position.top = s._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top), a && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l - s.helperProportions.width
            }).left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = m >= Math.abs(c - v), 
            o = m >= Math.abs(u - b), a = m >= Math.abs(l - g), r = m >= Math.abs(h - _), n && (i.position.top = s._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top), o && (i.position.top = s._convertPositionTo("relative", {
                top: u - s.helperProportions.height,
                left: 0
            }).top), a && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h - s.helperProportions.width
            }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
                snapItem: s.snapElements[d].item
            })), s.snapElements[d].snapping = n || o || a || r || p);
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function(e, i, s) {
            var n, o = s.options, a = t.makeArray(t(o.stack)).sort(function(e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0);
            });
            a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
                t(this).css("zIndex", n + e);
            }), this.css("zIndex", n + a.length));
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i, s) {
            var n = t(i.helper), o = s.options;
            n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex);
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex);
        }
    }), t.ui.draggable, t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var e, i = this.options, s = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) {
                return t.is(s);
            }, this.proportions = function() {
                return arguments.length ? (e = arguments[0], void 0) : e ? e : e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                };
            }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable");
        },
        _addToManager: function(e) {
            t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this);
        },
        _splice: function(t) {
            for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1);
        },
        _destroy: function() {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e);
        },
        _setOption: function(e, i) {
            if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i);
            }; else if ("scope" === e) {
                var s = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(s), this._addToManager(i);
            }
            this._super(e, i);
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i));
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i));
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), 
            this._trigger("over", e, this.ui(i)));
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), 
            this._trigger("out", e, this.ui(i)));
        },
        _drop: function(e, i) {
            var s = i || t.ui.ddmanager.current, n = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var i = t(this).droppable("instance");
                return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && u(s, t.extend(i, {
                    offset: i.element.offset()
                }), i.options.tolerance, e) ? (n = !0, !1) : void 0;
            }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this._removeActiveClass(), 
            this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1;
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            };
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover");
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover");
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active");
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active");
        }
    });
    var u = t.ui.intersect = function() {
        function t(t, e, i) {
            return t >= e && e + i > t;
        }
        return function(e, i, s, n) {
            if (!i.offset) return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left, a = (e.positionAbs || e.position.absolute).top + e.margins.top, r = o + e.helperProportions.width, l = a + e.helperProportions.height, h = i.offset.left, c = i.offset.top, u = h + i.proportions().width, d = c + i.proportions().height;
            switch (s) {
              case "fit":
                return o >= h && u >= r && a >= c && d >= l;

              case "intersect":
                return o + e.helperProportions.width / 2 > h && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > l - e.helperProportions.height / 2;

              case "pointer":
                return t(n.pageY, c, i.proportions().height) && t(n.pageX, h, i.proportions().width);

              case "touch":
                return (a >= c && d >= a || l >= c && d >= l || c > a && l > d) && (o >= h && u >= o || r >= h && u >= r || h > o && r > u);

              default:
                return !1;
            }
        };
    }();
    t.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(e, i) {
            var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [], a = i ? i.type : null, r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; o.length > s; s++) if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                for (n = 0; r.length > n; n++) if (r[n] === o[s].element[0]) {
                    o[s].proportions().height = 0;
                    continue t;
                }
                o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), 
                o[s].offset = o[s].element.offset(), o[s].proportions({
                    width: o[s].element[0].offsetWidth,
                    height: o[s].element[0].offsetHeight
                }));
            }
        },
        drop: function(e, i) {
            var s = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && u(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), 
                !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, 
                this.isover = !1, this._deactivate.call(this, i)));
            }), s;
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").on("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
            });
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, o, a = u(e, this, this.options.tolerance, i), r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
                        return t(this).droppable("instance").options.scope === n;
                    }), o.length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), 
                    s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, 
                    this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), 
                    s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)));
                }
            });
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
        }
    }, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
        },
        _removeActiveClass: function() {
            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
        },
        _addHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
        },
        _removeHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
        }
    }), t.ui.droppable, t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(t) {
            return parseFloat(t) || 0;
        },
        _isNumber: function(t) {
            return !isNaN(parseFloat(t));
        },
        _hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop", n = !1;
            return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n);
        },
        _create: function() {
            var e, i = this.options, s = this;
            this._addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), 
            this.elementIsWrapper = !0, e = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), 
            this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), 
            i.autoHide && t(this.element).on("mouseenter", function() {
                i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show());
            }).on("mouseleave", function() {
                i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide());
            }), this._mouseInit();
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), 
            i(this.originalElement), this;
        },
        _setOption: function(t, e) {
            switch (this._super(t, e), t) {
              case "handles":
                this._removeHandles(), this._setupHandles();
                break;

              default:            }
        },
        _setupHandles: function() {
            var e, i, s, n, o, a = this.options, r = this;
            if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this._handles = t(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), 
            s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) e = t.trim(s[i]), 
            n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), 
            o.css({
                zIndex: a.zIndex
            }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
            this._renderAxis = function(e) {
                var i, s, n, o;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), 
                this._on(this.handles[i], {
                    mousedown: r._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), 
                o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = [ "padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left" ].join(""), 
                e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]);
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), 
            this._handles.disableSelection(), this._handles.on("mouseover", function() {
                r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), 
                r.axis = o && o[1] ? o[1] : "se");
            }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
        },
        _removeHandles: function() {
            this._handles.remove();
        },
        _mouseCapture: function(e) {
            var i, s, n = !1;
            for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
            return !this.options.disabled && n;
        },
        _mouseStart: function(e) {
            var i, s, n, o = this.options, a = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), 
            s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, 
            s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: s
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: a.width(),
                height: a.height()
            }, this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            }, this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            }, this.originalPosition = {
                left: i,
                top: s
            }, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, 
            n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), 
            this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0;
        },
        _mouseDrag: function(e) {
            var i, s, n = this.originalMousePosition, o = this.axis, a = e.pageX - n.left || 0, r = e.pageY - n.top || 0, l = this._change[o];
            return this._updatePrevProperties(), l ? (i = l.apply(this, [ e, a, r ]), this._updateVirtualBoundaries(e.shiftKey), 
            (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), 
            this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), 
            t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), 
            this._applyChanges()), !1) : !1;
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, s, n, o, a, r, l, h = this.options, c = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), 
            n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, 
            a = {
                width: c.helper.width() - o,
                height: c.helper.height() - n
            }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, 
            l = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, 
            h.animate || this.element.css(t.extend(a, {
                top: l,
                left: r
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), 
            t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), 
            this._helper && this.helper.remove(), !1;
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            };
        },
        _applyChanges: function() {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), 
            this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), 
            this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), 
            this.helper.css(t), t;
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, s, n, o, a = this.options;
            o = {
                minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, 
            i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), 
            s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), 
            this._vBoundaries = o;
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), 
            this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), 
            this._isNumber(t.width) && (this.size.width = t.width);
        },
        _updateRatio: function(t) {
            var e = this.position, i = this.size, s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), 
            "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), 
            t.left = e.left + (i.width - t.width)), t;
        },
        _respectSize: function(t) {
            var e = this._vBoundaries, i = this.axis, s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width, n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height, o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width, a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height, r = this.originalPosition.left + this.originalSize.width, l = this.originalPosition.top + this.originalSize.height, h = /sw|nw|w/.test(i), c = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), 
            n && (t.height = e.maxHeight), o && h && (t.left = r - e.minWidth), s && h && (t.left = r - e.maxWidth), 
            a && c && (t.top = l - e.minHeight), n && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, 
            t;
        },
        _getPaddingPlusBorderDimensions: function(t) {
            for (var e = 0, i = [], s = [ t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth") ], n = [ t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft") ]; 4 > e; e++) i[e] = parseFloat(s[e]) || 0, 
            i[e] += parseFloat(n[e]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            };
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], 
            this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), 
            t.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0
            });
        },
        _renderProxy: function() {
            var e = this.element, i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), 
            this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                };
            },
            w: function(t, e) {
                var i = this.originalSize, s = this.originalPosition;
                return {
                    left: s.left + e,
                    width: i.width - e
                };
            },
            n: function(t, e, i) {
                var s = this.originalSize, n = this.originalPosition;
                return {
                    top: n.top + i,
                    height: s.height - i
                };
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                };
            },
            se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [ e, i, s ]));
            },
            sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [ e, i, s ]));
            },
            ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [ e, i, s ]));
            },
            nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [ e, i, s ]));
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [ i, this.ui() ]), "resize" !== e && this._trigger(e, i, this.ui());
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).resizable("instance"), s = i.options, n = i._proportionallyResizeElements, o = n.length && /textarea/i.test(n[0].nodeName), a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = o ? 0 : i.sizeDiff.width, l = {
                width: i.size.width - r,
                height: i.size.height - a
            }, h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null, c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, c && h ? {
                top: c,
                left: h
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", e);
                }
            });
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, i, s, n, o, a, r, l = t(this).resizable("instance"), h = l.options, c = l.element, u = h.containment, d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
            d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {
                left: 0,
                top: 0
            }, l.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(d), i = [], t([ "Top", "Right", "Left", "Bottom" ]).each(function(t, s) {
                i[t] = l._num(e.css("padding" + s));
            }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                height: e.innerHeight() - i[3],
                width: e.innerWidth() - i[1]
            }, s = l.containerOffset, n = l.containerSize.height, o = l.containerSize.width, 
            a = l._hasScroll(d, "left") ? d.scrollWidth : o, r = l._hasScroll(d) ? d.scrollHeight : n, 
            l.parentData = {
                element: d,
                left: s.left,
                top: s.top,
                width: a,
                height: r
            }));
        },
        resize: function(e) {
            var i, s, n, o, a = t(this).resizable("instance"), r = a.options, l = a.containerOffset, h = a.position, c = a._aspectRatio || e.shiftKey, u = {
                top: 0,
                left: 0
            }, d = a.containerElement, p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (u = l), h.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - u.left), 
            c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? l.left : 0), 
            h.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), 
            c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? l.top : 0), 
            n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), 
            n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, 
            a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - l.left)), 
            s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - l.top)), 
            i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, 
            c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, 
            c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, 
            a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height);
        },
        stop: function() {
            var e = t(this).resizable("instance"), i = e.options, s = e.containerOffset, n = e.containerPosition, o = e.containerElement, a = t(e.helper), r = a.offset(), l = a.outerWidth() - e.sizeDiff.width, h = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: l,
                height: h
            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: l,
                height: h
            });
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).resizable("instance"), i = e.options;
            t(i.alsoResize).each(function() {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {
                    width: parseFloat(e.width()),
                    height: parseFloat(e.height()),
                    left: parseFloat(e.css("left")),
                    top: parseFloat(e.css("top"))
                });
            });
        },
        resize: function(e, i) {
            var s = t(this).resizable("instance"), n = s.options, o = s.originalSize, a = s.originalPosition, r = {
                height: s.size.height - o.height || 0,
                width: s.size.width - o.width || 0,
                top: s.position.top - a.top || 0,
                left: s.position.left - a.left || 0
            };
            t(n.alsoResize).each(function() {
                var e = t(this), s = t(this).data("ui-resizable-alsoresize"), n = {}, o = e.parents(i.originalElement[0]).length ? [ "width", "height" ] : [ "width", "height", "top", "left" ];
                t.each(o, function(t, e) {
                    var i = (s[e] || 0) + (r[e] || 0);
                    i && i >= 0 && (n[e] = i || null);
                }), e.css(n);
            });
        },
        stop: function() {
            t(this).removeData("ui-resizable-alsoresize");
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).resizable("instance"), i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), 
            e.ghost.appendTo(e.helper);
        },
        resize: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            });
        },
        stop: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e, i = t(this).resizable("instance"), s = i.options, n = i.size, o = i.originalSize, a = i.originalPosition, r = i.axis, l = "number" == typeof s.grid ? [ s.grid, s.grid ] : s.grid, h = l[0] || 1, c = l[1] || 1, u = Math.round((n.width - o.width) / h) * h, d = Math.round((n.height - o.height) / c) * c, p = o.width + u, f = o.height + d, m = s.maxWidth && p > s.maxWidth, g = s.maxHeight && f > s.maxHeight, _ = s.minWidth && s.minWidth > p, v = s.minHeight && s.minHeight > f;
            s.grid = l, _ && (p += h), v && (f += c), m && (p -= h), g && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, 
            i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, 
            i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), 
            f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, 
            i.size.height = f, i.position.top = a.top + o.height - f), p - h > 0 ? (i.size.width = p, 
            i.position.left = a.left - u) : (p = h - e.width, i.size.width = p, i.position.left = a.left + o.width - p));
        }
    }), t.ui.resizable, t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), 
                e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
                    var i = t(this), s = i.offset(), n = {
                        left: s.left - e.elementPos.left,
                        top: s.top - e.elementPos.top
                    };
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: n.left,
                        top: n.top,
                        right: n.left + i.outerWidth(),
                        bottom: n.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    });
                });
            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper");
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item"), this._mouseDestroy();
        },
        _mouseStart: function(e) {
            var i = this, s = this.options;
            this.opos = [ e.pageX, e.pageY ], this.elementPos = t(this.element[0]).offset(), 
            this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), 
            t(s.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), 
                s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, 
                i._trigger("unselecting", e, {
                    unselecting: s.element
                }));
            }), t(e.target).parents().addBack().each(function() {
                var s, n = t.data(this, "selectable-item");
                return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), 
                i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), 
                n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
                    selecting: n.element
                }) : i._trigger("unselecting", e, {
                    unselecting: n.element
                }), !1) : void 0;
            }));
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this, n = this.options, o = this.opos[0], a = this.opos[1], r = e.pageX, l = e.pageY;
                return o > r && (i = r, r = o, o = i), a > l && (i = l, l = a, a = i), this.helper.css({
                    left: o,
                    top: a,
                    width: r - o,
                    height: l - a
                }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"), h = !1, c = {};
                    i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, 
                    c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? h = !(c.left > r || o > c.right || c.top > l || a > c.bottom) : "fit" === n.tolerance && (h = c.left > o && r > c.right && c.top > a && l > c.bottom), 
                    h ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), 
                    i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), 
                    i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), 
                    i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), 
                    i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), 
                    i.unselecting = !0), s._trigger("unselecting", e, {
                        unselecting: i.element
                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), 
                    i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, 
                    s._trigger("unselecting", e, {
                        unselecting: i.element
                    })))));
                }), !1;
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, 
                i._trigger("unselected", e, {
                    unselected: s.element
                });
            }), t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), 
                s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                    selected: s.element
                });
            }), this._trigger("stop", e), this.helper.remove(), !1;
        }
    }), t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, i) {
            return t >= e && e + i > t;
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
        },
        _create: function() {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), 
            this._mouseInit(), this._setHandleClassName(), this.ready = !0;
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName();
        },
        _setHandleClassName: function() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), 
            t.each(this.items, function() {
                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
            });
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this;
        },
        _mouseCapture: function(e, i) {
            var s = null, n = !1, o = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), 
            t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0;
            }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (n = !0);
            }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1);
        },
        _mouseStart: function(e, i, s) {
            var n, o, a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), 
            this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), 
            this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), 
            this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, 
            this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), 
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), 
            a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), 
            this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), 
            a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), 
            this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), 
            this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
            this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
            !s) for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), 
            this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), 
            !0;
        },
        _mouseDrag: function(e) {
            var i, s, n, o, a = this.options, r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), 
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), 
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), 
            e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), 
            r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), 
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            i = this.items.length - 1; i >= 0; i--) if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), 
            o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                break;
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), 
            this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, 
            !1;
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), 
                this.options.revert) {
                    var s = this, n = this.placeholder.offset(), o = this.options.axis, a = {};
                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), 
                    o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), 
                    this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e);
                    });
                } else this._clear(e, i);
                return !1;
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new t.Event("mouseup", {
                    target: null
                })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), 
                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), 
                this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), 
                this.containers[e].containerCache.over = 0);
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
            t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), 
            this;
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
            }), !s.length && e.key && s.push(e.key + "="), s.join("&");
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "");
            }), s;
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, o = t.left, a = o + t.width, r = t.top, l = r + t.height, h = this.offset.click.top, c = this.offset.click.left, u = "x" === this.options.axis || s + h > r && l > s + h, d = "y" === this.options.axis || e + c > o && a > e + c, p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && l > n - this.helperProportions.height / 2;
        },
        _intersectsWithPointer: function(t) {
            var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), o = s && n;
            return o ? (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), 
            this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1;
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), s = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e);
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left");
        },
        refresh: function(t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), 
            this;
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [ t.connectWith ] : t.connectWith;
        },
        _getItemsAsjQuery: function(e) {
            function i() {
                r.push(this);
            }
            var s, n, o, a, r = [], l = [], h = this._connectWith();
            if (h && e) for (s = h.length - 1; s >= 0; s--) for (o = t(h[s], this.document[0]), 
            n = o.length - 1; n >= 0; n--) a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && l.push([ t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a ]);
            for (l.push([ t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
            s = l.length - 1; s >= 0; s--) l[s][0].each(i);
            return t(r);
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++) if (e[i] === t.item[0]) return !1;
                return !0;
            });
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [ this ];
            var i, s, n, o, a, r, l, h, c = this.items, u = [ [ t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this ] ], d = this._connectWith();
            if (d && this.ready) for (i = d.length - 1; i >= 0; i--) for (n = t(d[i], this.document[0]), 
            s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([ t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                item: this.currentItem
            }) : t(o.options.items, o.element), o ]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--) for (a = u[i][1], r = u[i][0], s = 0, h = r.length; h > s; s++) l = t(r[s]), 
            l.data(this.widgetName + "-item", a), c.push({
                item: l,
                instance: a,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            });
        },
        refreshPositions: function(e) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, 
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, o;
            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, 
            e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, 
            s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), 
            this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, 
            this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), 
            this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this;
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase(), n = t("<" + s + ">", e.document[0]);
                    return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), 
                    "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), 
                    i || n.css("visibility", "hidden"), n;
                },
                update: function(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), 
                    n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), 
            s.placeholder.update(e, e.placeholder);
        },
        _createTrPlaceholder: function(e, i) {
            var s = this;
            e.children().each(function() {
                t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i);
            });
        },
        _contactContainers: function(e) {
            var i, s, n, o, a, r, l, h, c, u, d = null, p = null;
            for (i = this.containers.length - 1; i >= 0; i--) if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                d = this.containers[i], p = i;
            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), 
            this.containers[i].containerCache.over = 0);
            if (d) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), 
            this.containers[p].containerCache.over = 1); else {
                for (n = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", 
                r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (l = this.items[s].item.offset()[a], 
                h = !1, e[u] - l > this.items[s][r] / 2 && (h = !0), n > Math.abs(e[u] - l) && (n = Math.abs(e[u] - l), 
                o = this.items[s], this.direction = h ? "up" : "down"));
                if (!o && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), 
                this.currentContainer.containerCache.over = 1), void 0;
                o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), 
                this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), 
                this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), 
                this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1;
            }
        },
        _createHelper: function(e) {
            var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [ e, this.currentItem ])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), 
            s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), 
            (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), 
            s;
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), 
            "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), 
            e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
            /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), 
            s = "hidden" !== t(e).css("overflow"), this.containment = [ i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            };
        },
        _generatePosition: function(e) {
            var i, s, n = this.options, o = e.pageX, a = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), 
            e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), 
            e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), 
            e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), 
            n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], 
            a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, 
            s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], 
            o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), 
            {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
            };
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), 
            this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s);
            });
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(s) {
                    i._trigger(t, s, e._uiHash(e));
                };
            }
            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
            this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS) ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
            } else this.currentItem.show();
            for (this.fromOutside && !e && n.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                this._trigger("update", t, this._uiHash());
            }), this !== this.currentContainer && (e || (n.push(function(t) {
                this._trigger("remove", t, this._uiHash());
            }), n.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), n.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), 
            this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), 
            this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), 
            this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), 
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
            this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), 
            this.helper = null), !e) {
                for (s = 0; n.length > s; s++) n[s].call(this, t);
                this._trigger("stop", t, this._uiHash());
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval;
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            };
        }
    }), t.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), 
            this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), 
            this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh();
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t()
            };
        },
        _createIcons: function() {
            var e, i, s = this.options.icons;
            s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), 
            e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), 
            this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
        },
        _destroy: function() {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), 
            this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), 
            "content" !== this.options.heightStyle && t.css("height", "");
        },
        _setOption: function(t, e) {
            return "active" === t ? (this._activate(e), void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), 
            this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), 
            "icons" === t && (this._destroyIcons(), e && this._createIcons()), void 0);
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), 
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t);
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode, s = this.headers.length, n = this.headers.index(e.target), o = !1;
                switch (e.keyCode) {
                  case i.RIGHT:
                  case i.DOWN:
                    o = this.headers[(n + 1) % s];
                    break;

                  case i.LEFT:
                  case i.UP:
                    o = this.headers[(n - 1 + s) % s];
                    break;

                  case i.SPACE:
                  case i.ENTER:
                    this._eventHandler(e);
                    break;

                  case i.HOME:
                    o = this.headers[0];
                    break;

                  case i.END:
                    o = this.headers[s - 1];
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), 
                e.preventDefault());
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus");
        },
        refresh: function() {
            var e = this.options;
            this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, 
            this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, 
            this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), 
            this._destroyIcons(), this._refresh();
        },
        _processPanels: function() {
            var t = this.headers, e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), 
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), 
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), 
            e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
        },
        _refresh: function() {
            var e, i = this.options, s = i.heightStyle, n = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), 
            this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), 
            this.headers.attr("role", "tab").each(function() {
                var e = t(this), i = e.uniqueId().attr("id"), s = e.next(), n = s.uniqueId().attr("id");
                e.attr("aria-controls", n), s.attr("aria-labelledby", i);
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), 
            "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function() {
                var i = t(this), s = i.css("position");
                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0));
            }), this.headers.each(function() {
                e -= t(this).outerHeight(!0);
            }), this.headers.next().each(function() {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()));
            }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
                var i = t(this).is(":visible");
                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide();
            }).height(e));
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }));
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t();
        },
        _setupEvents: function(e) {
            var i = {
                keydown: "_keydown"
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler";
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), 
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers);
        },
        _eventHandler: function(e) {
            var i, s, n = this.options, o = this.active, a = t(e.currentTarget), r = a[0] === o[0], l = r && n.collapsible, h = l ? t() : a.next(), c = o.next(), u = {
                oldHeader: o,
                oldPanel: c,
                newHeader: l ? t() : a,
                newPanel: h
            };
            e.preventDefault(), r && !n.collapsible || this._trigger("beforeActivate", e, u) === !1 || (n.active = l ? !1 : this.headers.index(a), 
            this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), 
            n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), 
            r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), 
            n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), 
            this._addClass(a.next(), "ui-accordion-content-active")));
        },
        _toggle: function(e) {
            var i = e.newPanel, s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, 
            this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), 
            s.attr({
                "aria-hidden": "true"
            }), s.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), i.length && s.length ? s.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter(function() {
                return 0 === parseInt(t(this).attr("tabIndex"), 10);
            }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _animate: function(t, e, i) {
            var s, n, o, a = this, r = 0, l = t.css("box-sizing"), h = t.length && (!e.length || t.index() < e.index()), c = this.options.animate || {}, u = h && c.down || c, d = function() {
                a._toggleComplete(i);
            };
            return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, 
            o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), 
            e.animate(this.hideProps, {
                duration: o,
                easing: n,
                step: function(t, e) {
                    e.now = Math.round(t);
                }
            }), t.hide().animate(this.showProps, {
                duration: o,
                easing: n,
                complete: d,
                step: function(t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), 
                    r = 0);
                }
            }), void 0) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d);
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel, i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), 
            e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t);
        }
    }), t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(t) {
                    t.preventDefault();
                },
                "click .ui-menu-item": function(e) {
                    var i = t(e.target), s = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), 
                    i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [ !0 ]), 
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item"), s = t(e.currentTarget);
                        i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), 
                        this.focus(e, s));
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i);
                },
                blur: function(e) {
                    this._delay(function() {
                        var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
                        i && this.collapseAll(e);
                    });
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1;
                }
            });
        },
        _destroy: function() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"), i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), 
            i.children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove();
            });
        },
        _keydown: function(e) {
            var i, s, n, o, a = !0;
            switch (e.keyCode) {
              case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;

              case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;

              case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;

              case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;

              case t.ui.keyCode.UP:
                this.previous(e);
                break;

              case t.ui.keyCode.DOWN:
                this.next(e);
                break;

              case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;

              case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;

              case t.ui.keyCode.ENTER:
              case t.ui.keyCode.SPACE:
                this._activate(e);
                break;

              case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;

              default:
                a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), 
                clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), 
                i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, 
                i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), 
                i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function() {
                    delete this.previousFilter;
                }, 1e3)) : delete this.previousFilter;
            }
            a && e.preventDefault();
        },
        _activate: function(t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
        },
        refresh: function() {
            var e, i, s, n, o, a = this, r = this.options.icons.submenu, l = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), 
            s = l.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this), i = e.prev(), s = t("<span>").data("ui-menu-submenu-caret", !0);
                a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), 
                e.attr("aria-labelledby", i.attr("id"));
            }), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = l.add(this.element), 
            i = e.find(this.options.items), i.not(".ui-menu-item").each(function() {
                var e = t(this);
                a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content");
            }), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), 
            this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role];
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu);
            }
            this._super(t, e);
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        focus: function(t, e) {
            var i, s, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), 
            s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), 
            this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), 
            this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close();
            }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), 
            this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            });
        },
        _scrollIntoView: function(e) {
            var i, s, n, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, 
            s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, 
            o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 
            0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r));
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), 
            this._trigger("blur", t, {
                item: this.active
            }), this.active = null);
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t);
            }, this.delay));
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
            e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), 
                this.activeMenu = s;
            }, this.delay);
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
        },
        _closeOnDocumentClick: function(e) {
            return !t(e.target).closest(".ui-menu").length;
        },
        _isDivider: function(t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text());
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e));
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e);
            }));
        },
        next: function(t) {
            this._move("next", "first", t);
        },
        previous: function(t) {
            this._move("prev", "last", t);
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), 
            s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), 
            this.focus(i, s);
        },
        nextPage: function(e) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, 
            n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this), 0 > i.offset().top - s - n;
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), 
            void 0) : (this.next(e), void 0);
        },
        previousPage: function(e) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, 
            n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this), i.offset().top - s + n > 0;
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())), 
            void 0) : (this.next(e), void 0);
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i);
        },
        _filterMenuItems: function(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()));
            });
        }
    }), t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(), o = "textarea" === n, a = "input" === n;
            this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], 
            this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), 
            this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, void 0;
                    e = !1, s = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (n.keyCode) {
                      case o.PAGE_UP:
                        e = !0, this._move("previousPage", n);
                        break;

                      case o.PAGE_DOWN:
                        e = !0, this._move("nextPage", n);
                        break;

                      case o.UP:
                        e = !0, this._keyEvent("previous", n);
                        break;

                      case o.DOWN:
                        e = !0, this._keyEvent("next", n);
                        break;

                      case o.ENTER:
                        this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                        break;

                      case o.TAB:
                        this.menu.active && this.menu.select(n);
                        break;

                      case o.ESCAPE:
                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), 
                        this.close(n), n.preventDefault());
                        break;

                      default:
                        i = !0, this._searchTimeout(n);
                    }
                },
                keypress: function(s) {
                    if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), 
                    void 0;
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                          case n.PAGE_UP:
                            this._move("previousPage", s);
                            break;

                          case n.PAGE_DOWN:
                            this._move("nextPage", s);
                            break;

                          case n.UP:
                            this._keyEvent("previous", s);
                            break;

                          case n.DOWN:
                            this._keyEvent("next", s);
                        }
                    }
                },
                input: function(t) {
                    return s ? (s = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0);
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value();
                },
                blur: function(t) {
                    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), 
                    this.close(t), this._change(t), void 0);
                }
            }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), 
            this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
                    });
                },
                menufocus: function(e, i) {
                    var s, n;
                    return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), 
                    this.document.one("mousemove", function() {
                        t(e.target).trigger(e.originalEvent);
                    }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                        item: n
                    }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), 
                    s = i.item.attr("aria-label") || n.value, s && t.trim(s).length && (this.liveRegion.children().hide(), 
                    t("<div>").text(s).appendTo(this.liveRegion)), void 0);
                },
                menuselect: function(e, i) {
                    var s = i.item.data("ui-autocomplete-item"), n = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), 
                    this.previous = n, this._delay(function() {
                        this.previous = n, this.selectedItem = s;
                    })), !1 !== this._trigger("select", e, {
                        item: s
                    }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s;
                }
            }), this.liveRegion = t("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), 
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), 
            this.liveRegion.remove();
        },
        _setOption: function(t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), 
            "disabled" === t && e && this.xhr && this.xhr.abort();
        },
        _isEventTargetInWidget: function(e) {
            var i = this.menu.element[0];
            return e.target === this.element[0] || e.target === i || t.contains(i, e.target);
        },
        _closeOnClickOutside: function(t) {
            this._isEventTargetInWidget(t) || this.close();
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), 
            e.length || (e = this.document[0].body), e;
        },
        _initSource: function() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
                s(t.ui.autocomplete.filter(e, i.term));
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
                s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        n(t);
                    },
                    error: function() {
                        n([]);
                    }
                });
            }) : this.source = this.options.source;
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var e = this.term === this._value(), i = this.menu.element.is(":visible"), s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t));
            }, this.options.delay);
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0;
        },
        _search: function(t) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, 
            this.source({
                term: t
            }, this._response());
        },
        _response: function() {
            var e = ++this.requestIndex;
            return t.proxy(function(t) {
                e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
            }, this);
        },
        __response: function(t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {
                content: t
            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), 
            this._trigger("open")) : this._close();
        },
        close: function(t) {
            this.cancelSearch = !0, this._close(t);
        },
        _close: function(t) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), 
            this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t));
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            });
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                });
            });
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), 
            i.position(t.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            });
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(e, i) {
            var s = this;
            t.each(i, function(t, i) {
                s._renderItemData(e, i);
            });
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e);
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), 
            this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0);
        },
        widget: function() {
            return this.menu.element;
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault());
        },
        _isContentEditable: function(t) {
            if (!t.length) return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function(e, i) {
            var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function(t) {
                return s.test(t.label || t.value || t);
            });
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                }
            }
        },
        __response: function(e) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, 
            this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion));
        }
    }), t.ui.autocomplete;
    var d = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance();
        },
        _enhance: function() {
            this.element.attr("role", "toolbar"), this.refresh();
        },
        _destroy: function() {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), 
            this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
        },
        _initWidgets: function() {
            var e = this, i = [];
            t.each(this.options.items, function(s, n) {
                var o, a = {};
                return n ? "controlgroupLabel" === s ? (o = e.element.find(n), o.each(function() {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
                }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), i = i.concat(o.get()), 
                void 0) : (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {
                    classes: {}
                }, e.element.find(n).each(function() {
                    var n = t(this), o = n[s]("instance"), r = t.widget.extend({}, a);
                    if ("button" !== s || !n.parent(".ui-spinner").length) {
                        o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), 
                        n[s](r);
                        var l = n[s]("widget");
                        t.data(l[0], "ui-controlgroup-data", o ? o : n[s]("instance")), i.push(l[0]);
                    }
                })), void 0) : void 0;
            }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item");
        },
        _callChildMethod: function(e) {
            this.childWidgets.each(function() {
                var i = t(this), s = i.data("ui-controlgroup-data");
                s && s[e] && s[e]();
            });
        },
        _updateCornerClass: function(t, e) {
            var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all", s = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, i), this._addClass(t, null, s);
        },
        _buildSimpleOptions: function(t, e) {
            var i = "vertical" === this.options.direction, s = {
                classes: {}
            };
            return s.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[t], s;
        },
        _spinnerOptions: function(t) {
            var e = this._buildSimpleOptions(t, "ui-spinner");
            return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e;
        },
        _buttonOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-button");
        },
        _checkboxradioOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label");
        },
        _selectmenuOptions: function(t) {
            var e = "vertical" === this.options.direction;
            return {
                width: e ? "auto" : !1,
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[t]
            };
        },
        _resolveClassesValues: function(e, i) {
            var s = {};
            return t.each(e, function(n) {
                var o = i.options.classes[n] || "";
                o = t.trim(o.replace(d, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ");
            }), s;
        },
        _setOption: function(t, e) {
            return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), 
            this._super(t, e), "disabled" === t ? (this._callChildMethod(e ? "disable" : "enable"), 
            void 0) : (this.refresh(), void 0);
        },
        refresh: function() {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), 
            this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), 
            e.length && (t.each([ "first", "last" ], function(t, s) {
                var n = e[s]().data("ui-controlgroup-data");
                if (n && i["_" + n.widgetName + "Options"]) {
                    var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
                    o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o);
                } else i._updateCornerClass(e[s](), s);
            }), this._callChildMethod("refresh"));
        }
    }), t.widget("ui.checkboxradio", [ t.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var e, i, s = this, n = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), 
            this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", 
            this.label.contents().not(this.element[0]).each(function() {
                s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML;
            }), this.originalLabel && (n.label = this.originalLabel), e = this.element[0].disabled, 
            null != e && (n.disabled = e), n;
        },
        _create: function() {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), 
            this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), 
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), 
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), 
            this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), 
            this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
                }
            });
        },
        _readType: function() {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type);
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked);
        },
        widget: function() {
            return this.label;
        },
        _getRadioGroup: function() {
            var e, i = this.element[0].name, s = "input[name='" + t.ui.escapeSelector(i) + "']";
            return i ? (e = this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter(function() {
                return 0 === t(this).form().length;
            }), e.not(this.element)) : t([]);
        },
        _toggleClasses: function() {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), 
            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), 
            "radio" === this.type && this._getRadioGroup().each(function() {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active");
            });
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
        },
        _setOption: function(t, e) {
            return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), 
            this.element[0].disabled = e, void 0) : (this.refresh(), void 0)) : void 0;
        },
        _updateIcon: function(e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), 
            this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", 
            this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", 
            this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), 
            this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), 
            this.iconSpace.remove(), delete this.icon);
        },
        _updateLabel: function() {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), 
            t.remove(), this.label.append(this.options.label);
        },
        refresh: function() {
            var t = this.element[0].checked, e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), 
            null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
                disabled: e
            });
        }
    } ]), t.ui.checkboxradio, t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), 
            this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), 
            e;
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), 
            this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), 
            this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), 
            this._enhance(), this.element.is("a") && this._on({
                keyup: function(e) {
                    e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
                }
            });
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), 
            this._updateTooltip());
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
        },
        _updateIcon: function(e, i) {
            var s = "iconPosition" !== e, n = s ? this.options.iconPosition : i, o = "top" === n || "bottom" === n;
            this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), 
            this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), 
            s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), 
            this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), 
            this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), 
            this._attachIconSpace(n));
        },
        _destroy: function() {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), 
            this.hasTitle || this.element.removeAttr("title");
        },
        _attachIconSpace: function(t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
        },
        _attachIcon: function(t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
        },
        _setOptions: function(t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel, i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t);
        },
        _setOption: function(t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), 
            this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), 
            "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), 
            "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), 
            this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), 
            this.element[0].disabled = e, e && this.element.blur());
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({
                disabled: t
            }), this._updateTooltip();
        }
    }), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), 
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), 
            this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, 
            this.options.iconPosition = "end"), this._super();
        },
        _setOption: function(t, e) {
            return "text" === t ? (this._super("showLabel", e), void 0) : ("showLabel" === t && (this.options.text = e), 
            "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), 
            this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), 
            this._super("iconPosition", "end"))), this._superApply(arguments), void 0);
        }
    }), t.fn.button = function(e) {
        return function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 
            0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments));
        };
    }(t.fn.button), t.fn.buttonset = function() {
        return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [ arguments[0], "items.button", arguments[2] ]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [ arguments[0], "items.button" ]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }), this.controlgroup.apply(this, arguments));
    }), t.ui.button, t.extend(t.ui, {
        datepicker: {
            version: "1.12.1"
        }
    });
    var p;
    t.extend(s.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(t) {
            return a(this._defaults, t || {}), this;
        },
        _attachDatepicker: function(e, i) {
            var s, n, o;
            s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, 
            e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), 
            "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o);
        },
        _newInst: function(e, i) {
            var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            };
        },
        _connectDatepicker: function(e, i) {
            var s = t(e);
            i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), 
            s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), 
            this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e));
        },
        _attachments: function(e, i) {
            var s, n, o, a = this._get(i, "appendText"), r = this._get(i, "isRTL");
            i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), 
            e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), 
            s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), 
            ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), 
            i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: n,
                title: n
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                src: o,
                alt: n,
                title: n
            }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), 
                t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1;
            }));
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, o = new Date(2009, 11, 20), a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function(t) {
                    for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, 
                    s = n);
                    return s;
                }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), 
                o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), 
                t.input.attr("size", this._formatDate(t, o).length);
            }
        },
        _inlineDatepicker: function(e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), 
            t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), 
            this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function(e, i, s, n, o) {
            var r, l, h, c, u, d = this._dialogInst;
            return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), 
            this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), 
            d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), 
            a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, 
            this._dialogInput.val(i), this._pos = o ? o.length ? o : [ o.pageX, o.pageY ] : null, 
            this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, 
            c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, 
            this._pos = [ l / 2 - 100 + c, h / 2 - 150 + u ]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), 
            d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), 
            this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), 
            t.data(this._dialogInput[0], "datepicker", d), this;
        },
        _destroyDatepicker: function(e) {
            var i, s = t(e), n = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), 
            "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), 
            p === n && (p = null));
        },
        _enableDatepicker: function(e) {
            var i, s, n = t(e), o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, 
            o.trigger.filter("button").each(function() {
                this.disabled = !1;
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), 
            s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), 
            this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t;
            }));
        },
        _disableDatepicker: function(e) {
            var i, s, n = t(e), o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, 
            o.trigger.filter("button").each(function() {
                this.disabled = !0;
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), 
            s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), 
            this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t;
            }), this._disabledInputs[this._disabledInputs.length] = e);
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return !0;
            return !1;
        },
        _getInst: function(e) {
            try {
                return t.data(e, "datepicker");
            } catch (i) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(e, i, s) {
            var n, o, r, l, h = this._getInst(e);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (n = i || {}, 
            "string" == typeof i && (n = {}, n[i] = s), h && (this._curInst === h && this._hideDatepicker(), 
            o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), 
            a(h.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (h.settings.minDate = this._formatDate(h, r)), 
            null !== l && void 0 !== n.dateFormat && void 0 === n.maxDate && (h.settings.maxDate = this._formatDate(h, l)), 
            "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), 
            this._attachments(t(e), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), 
            this._updateDatepicker(h)), void 0);
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i);
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e);
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
        },
        _doKeyDown: function(e) {
            var i, s, n, o = t.datepicker._getInst(e.target), a = !0, r = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
              case 9:
                t.datepicker._hideDatepicker(), a = !1;
                break;

              case 13:
                return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), 
                n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), 
                i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [ s, o ])) : t.datepicker._hideDatepicker(), 
                !1;

              case 27:
                t.datepicker._hideDatepicker();
                break;

              case 33:
                t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                break;

              case 34:
                t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                break;

              case 35:
                (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                break;

              case 36:
                (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                break;

              case 37:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), 
                a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                break;

              case 38:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                break;

              case 39:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), 
                a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                break;

              case 40:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                break;

              default:
                a = !1;
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(), e.stopPropagation());
        },
        _doKeyPress: function(e) {
            var i, s, n = t.datepicker._getInst(e.target);
            return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), 
            s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0;
        },
        _doKeyUp: function(e) {
            var i, s = t.datepicker._getInst(e.target);
            if (s.input.val() !== s.lastVal) try {
                i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), 
                i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s));
            } catch (n) {}
            return !0;
        },
        _showDatepicker: function(e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), 
            !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var s, n, o, r, l, h, c;
                s = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), 
                s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), 
                n = t.datepicker._get(s, "beforeShow"), o = n ? n.apply(e, [ e, s ]) : {}, o !== !1 && (a(s.settings, o), 
                s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(s), 
                t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), 
                t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
                    return r |= "fixed" === t(this).css("position"), !r;
                }), l = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(s), l = t.datepicker._checkOffset(s, l, r), s.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: l.left + "px",
                    top: l.top + "px"
                }), s.inline || (h = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), 
                s.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? s.dpDiv.show(h, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[h || "show"](h ? c : null), 
                t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s));
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, p = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var i, s = this._getNumberOfMonths(e), n = s[1], a = 17, r = e.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 
            n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), 
            e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), 
            e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), 
            e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), 
            e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), 
                i = e.yearshtml = null;
            }, 0));
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
        },
        _checkOffset: function(e, i, s) {
            var n = e.dpDiv.outerWidth(), o = e.dpDiv.outerHeight(), a = e.input ? e.input.outerWidth() : 0, r = e.input ? e.input.outerHeight() : 0, l = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()), h = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, 
            i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, 
            i.left -= Math.min(i.left, i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0), 
            i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + r) : 0), i;
        },
        _findPos: function(e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)); ) e = e[n ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(), [ i.left, i.top ];
        },
        _hideDatepicker: function(e) {
            var i, s, n, o, a = this._curInst;
            !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), 
            s = this._get(a, "duration"), n = function() {
                t.datepicker._tidyDialog(a);
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), 
            i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [ a.input ? a.input.val() : "", a ]), 
            this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1);
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target), s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function(e, i, s) {
            var n = t(e), o = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), 
            this._updateDatepicker(o));
        },
        _gotoToday: function(e) {
            var i, s = t(e), n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, 
            n.drawYear = n.selectedYear = n.currentYear) : (i = new Date(), n.selectedDay = i.getDate(), 
            n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), 
            this._notifyChange(n), this._adjustDate(s);
        },
        _selectMonthYear: function(e, i, s) {
            var n = t(e), o = this._getInst(n[0]);
            o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), 
            this._notifyChange(o), this._adjustDate(n);
        },
        _selectDay: function(e, i, s, n) {
            var o, a = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), 
            o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, 
            o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)));
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "");
        },
        _selectDate: function(e, i) {
            var s, n = t(e), o = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), 
            s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [ i, o ]) : o.input && o.input.trigger("change"), 
            o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], 
            "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null);
        },
        _updateAlternate: function(e) {
            var i, s, n, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), 
            n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n));
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [ e > 0 && 6 > e, "" ];
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), 
            i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1;
        },
        parseDate: function(e, i, s) {
            if (null == e || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
            var n, o, a, r, l = 0, h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, c = "string" != typeof h ? h : new Date().getFullYear() % 100 + parseInt(h, 10), u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, d = (s ? s.dayNames : null) || this._defaults.dayNames, p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, f = (s ? s.monthNames : null) || this._defaults.monthNames, m = -1, g = -1, _ = -1, v = -1, b = !1, y = function(t) {
                var i = e.length > n + 1 && e.charAt(n + 1) === t;
                return i && n++, i;
            }, w = function(t) {
                var e = y(t), s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2, n = "y" === t ? s : 1, o = RegExp("^\\d{" + n + "," + s + "}"), a = i.substring(l).match(o);
                if (!a) throw "Missing number at position " + l;
                return l += a[0].length, parseInt(a[0], 10);
            }, k = function(e, s, n) {
                var o = -1, a = t.map(y(e) ? n : s, function(t, e) {
                    return [ [ e, t ] ];
                }).sort(function(t, e) {
                    return -(t[1].length - e[1].length);
                });
                if (t.each(a, function(t, e) {
                    var s = e[1];
                    return i.substr(l, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], l += s.length, 
                    !1) : void 0;
                }), -1 !== o) return o + 1;
                throw "Unknown name at position " + l;
            }, x = function() {
                if (i.charAt(l) !== e.charAt(n)) throw "Unexpected literal at position " + l;
                l++;
            };
            for (n = 0; e.length > n; n++) if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1; else switch (e.charAt(n)) {
              case "d":
                _ = w("d");
                break;

              case "D":
                k("D", u, d);
                break;

              case "o":
                v = w("o");
                break;

              case "m":
                g = w("m");
                break;

              case "M":
                g = k("M", p, f);
                break;

              case "y":
                m = w("y");
                break;

              case "@":
                r = new Date(w("@")), m = r.getFullYear(), g = r.getMonth() + 1, _ = r.getDate();
                break;

              case "!":
                r = new Date((w("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, 
                _ = r.getDate();
                break;

              case "'":
                y("'") ? x() : b = !0;
                break;

              default:
                x();
            }
            if (i.length > l && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
            if (-1 === m ? m = new Date().getFullYear() : 100 > m && (m += new Date().getFullYear() - new Date().getFullYear() % 100 + (c >= m ? 0 : -100)), 
            v > -1) for (g = 1, _ = v; ;) {
                if (o = this._getDaysInMonth(m, g - 1), o >= _) break;
                g++, _ -= o;
            }
            if (r = this._daylightSavingAdjust(new Date(m, g - 1, _)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== _) throw "Invalid date";
            return r;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, l = function(e) {
                var i = t.length > s + 1 && t.charAt(s + 1) === e;
                return i && s++, i;
            }, h = function(t, e, i) {
                var s = "" + e;
                if (l(t)) for (;i > s.length; ) s = "0" + s;
                return s;
            }, c = function(t, e, i, s) {
                return l(t) ? s[e] : i[e];
            }, u = "", d = !1;
            if (e) for (s = 0; t.length > s; s++) if (d) "'" !== t.charAt(s) || l("'") ? u += t.charAt(s) : d = !1; else switch (t.charAt(s)) {
              case "d":
                u += h("d", e.getDate(), 2);
                break;

              case "D":
                u += c("D", e.getDay(), n, o);
                break;

              case "o":
                u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;

              case "m":
                u += h("m", e.getMonth() + 1, 2);
                break;

              case "M":
                u += c("M", e.getMonth(), a, r);
                break;

              case "y":
                u += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
                break;

              case "@":
                u += e.getTime();
                break;

              case "!":
                u += 1e4 * e.getTime() + this._ticksTo1970;
                break;

              case "'":
                l("'") ? u += "'" : d = !0;
                break;

              default:
                u += t.charAt(s);
            }
            return u;
        },
        _possibleChars: function(t) {
            var e, i = "", s = !1, n = function(i) {
                var s = t.length > e + 1 && t.charAt(e + 1) === i;
                return s && e++, s;
            };
            for (e = 0; t.length > e; e++) if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1; else switch (t.charAt(e)) {
              case "d":
              case "m":
              case "y":
              case "@":
                i += "0123456789";
                break;

              case "D":
              case "M":
                return null;

              case "'":
                n("'") ? i += "'" : s = !0;
                break;

              default:
                i += t.charAt(e);
            }
            return i;
        },
        _get: function(t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"), s = t.lastVal = t.input ? t.input.val() : null, n = this._getDefaultDate(t), o = n, a = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, s, a) || n;
                } catch (r) {
                    s = e ? "" : s;
                }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), 
                t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, 
                this._adjustInstDate(t);
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
        },
        _determineDate: function(e, i, s) {
            var n = function(t) {
                var e = new Date();
                return e.setDate(e.getDate() + t), e;
            }, o = function(i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e));
                } catch (s) {}
                for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date(), o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = l.exec(i); h; ) {
                    switch (h[2] || "d") {
                      case "d":
                      case "D":
                        r += parseInt(h[1], 10);
                        break;

                      case "w":
                      case "W":
                        r += 7 * parseInt(h[1], 10);
                        break;

                      case "m":
                      case "M":
                        a += parseInt(h[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                        break;

                      case "y":
                      case "Y":
                        o += parseInt(h[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                    }
                    h = l.exec(i);
                }
                return new Date(o, a, r);
            }, a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), 
            a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a);
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
        },
        _setDate: function(t, e, i) {
            var s = !e, n = t.selectedMonth, o = t.selectedYear, a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), 
            t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), 
            this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t));
        },
        _getDate: function(t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return e;
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"), s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        t.datepicker._adjustDate(s, -i, "M");
                    },
                    next: function() {
                        t.datepicker._adjustDate(s, +i, "M");
                    },
                    hide: function() {
                        t.datepicker._hideDatepicker();
                    },
                    today: function() {
                        t.datepicker._gotoToday(s);
                    },
                    selectDay: function() {
                        return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), 
                        !1;
                    },
                    selectMonth: function() {
                        return t.datepicker._selectMonthYear(s, this, "M"), !1;
                    },
                    selectYear: function() {
                        return t.datepicker._selectMonthYear(s, this, "Y"), !1;
                    }
                };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]);
            });
        },
        _generateHTML: function(t) {
            var e, i, s, n, o, a, r, l, h, c, u, d, p, f, m, g, _, v, b, y, w, k, x, C, D, T, I, M, P, S, N, H, A, z, O, E, W, F, L, R = new Date(), Y = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())), B = this._get(t, "isRTL"), j = this._get(t, "showButtonPanel"), q = this._get(t, "hideIfNoPrevNext"), K = this._get(t, "navigationAsDateFormat"), U = this._getNumberOfMonths(t), V = this._get(t, "showCurrentAtPos"), X = this._get(t, "stepMonths"), $ = 1 !== U[0] || 1 !== U[1], G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), J = this._getMinMaxDate(t, "min"), Q = this._getMinMaxDate(t, "max"), Z = t.drawMonth - V, te = t.drawYear;
            if (0 > Z && (Z += 12, te--), Q) for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - U[0] * U[1] + 1, Q.getDate())), 
            e = J && J > e ? J : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e; ) Z--, 
            0 > Z && (Z = 11, te--);
            for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - X, 1)), this._getFormatConfig(t)) : i, 
            s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", 
            n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + X, 1)), this._getFormatConfig(t)) : n, 
            o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>", 
            a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : Y, 
            a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", 
            h = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (B ? "" : l) + "</div>" : "", 
            c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), 
            d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), 
            m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), 
            v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
                for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
                    if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), T = " ui-corner-all", 
                    I = "", $) {
                        if (I += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                          case 0:
                            I += " ui-datepicker-group-first", T = " ui-corner-" + (B ? "right" : "left");
                            break;

                          case U[1] - 1:
                            I += " ui-datepicker-group-last", T = " ui-corner-" + (B ? "left" : "right");
                            break;

                          default:
                            I += " ui-datepicker-group-middle", T = "";
                        }
                        I += "'>";
                    }
                    for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === k ? B ? o : s : "") + (/all|right/.test(T) && 0 === k ? B ? s : o : "") + this._generateMonthYearHeader(t, Z, te, J, Q, k > 0 || C > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", 
                    M = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", 
                    w = 0; 7 > w; w++) P = (w + c) % 7, M += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[P] + "'>" + p[P] + "</span></th>";
                    for (I += M + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), 
                    N = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, H = Math.ceil((N + S) / 7), A = $ ? this.maxRows > H ? this.maxRows : H : H, 
                    this.maxRows = A, z = this._daylightSavingAdjust(new Date(te, Z, 1 - N)), O = 0; A > O; O++) {
                        for (I += "<tr>", E = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(z) + "</td>" : "", 
                        w = 0; 7 > w; w++) W = g ? g.apply(t.input ? t.input[0] : null, [ z ]) : [ !0, "" ], 
                        F = z.getMonth() !== Z, L = F && !v || !W[0] || J && J > z || Q && z > Q, E += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + W[1] + (z.getTime() === G.getTime() ? " " + this._currentClass : "") + (z.getTime() === Y.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === Y.getTime() ? " ui-state-highlight" : "") + (z.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", 
                        z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
                        I += E + "</tr>";
                    }
                    Z++, Z > 11 && (Z = 0, te++), I += "</tbody></table>" + ($ ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), 
                    x += I;
                }
                y += x;
            }
            return y += h, t._keyEvent = !1, y;
        },
        _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
            var l, h, c, u, d, p, f, m, g = this._get(t, "changeMonth"), _ = this._get(t, "changeYear"), v = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
            if (o || !g) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>"; else {
                for (l = s && s.getFullYear() === i, h = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", 
                c = 0; 12 > c; c++) (!l || c >= s.getMonth()) && (!h || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                y += "</select>";
            }
            if (v || (b += y + (!o && g && _ ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", 
            o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                for (u = this._get(t, "yearRange").split(":"), d = new Date().getFullYear(), p = function(t) {
                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                    return isNaN(e) ? d : e;
                }, f = p(u[0]), m = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, 
                m = n ? Math.min(m, n.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null;
            }
            return b += this._get(t, "yearSuffix"), v && (b += (!o && g && _ ? "" : "&#xa0;") + y), 
            b += "</div>";
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.selectedYear + ("Y" === i ? e : 0), n = t.selectedMonth + ("M" === i ? e : 0), o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0), a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), 
            ("M" === i || "Y" === i) && this._notifyChange(t);
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), n = i && i > e ? i : e;
            return s && n > s ? s : n;
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [ t.selectedYear, t.selectedMonth + 1, t ]);
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [ 1, 1 ] : "number" == typeof e ? [ 1, e ] : e;
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null);
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t, e, 1).getDay();
        },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t), o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), 
            this._isInRange(t, o);
        },
        _isInRange: function(t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), a = null, r = null, l = this._get(t, "yearRange");
            return l && (i = l.split(":"), s = new Date().getFullYear(), a = parseInt(i[0], 10), 
            r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), 
            (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear());
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : new Date().getFullYear() % 100 + parseInt(e, 10), 
            {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            };
        },
        _formatDate: function(t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t));
        }
    }), t.fn.datepicker = function(e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), 
        t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [ this[0] ].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [ this ].concat(i)) : t.datepicker._attachDatepicker(this, e);
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [ this[0] ].concat(i));
    }, t.datepicker = new s(), t.datepicker.initialized = !1, t.datepicker.uuid = new Date().getTime(), 
    t.datepicker.version = "1.12.1", t.datepicker, t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i);
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), 
            this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), 
            this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), 
            this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), 
            this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, 
            this._trackFocus();
        },
        _init: function() {
            this.options.autoOpen && this.open();
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0);
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), 
            this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), 
            t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
        },
        widget: function() {
            return this.uiDialog;
        },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, 
            this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), 
            this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", e);
            }));
        },
        isOpen: function() {
            return this._isOpen;
        },
        moveToTop: function() {
            this._moveToTop();
        },
        _moveToTop: function(e, i) {
            var s = !1, n = this.uiDialog.siblings(".ui-front:visible").map(function() {
                return +t(this).css("z-index");
            }).get(), o = Math.max.apply(null, n);
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), 
            s = !0), s && !i && this._trigger("focus", e), s;
        },
        open: function() {
            var e = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, 
            this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), 
            this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), 
            this._show(this.uiDialog, this.options.show, function() {
                e._focusTabbable(), e._trigger("focus");
            }), this._makeFocusTarget(), this._trigger("open"), void 0);
        },
        _focusTabbable: function() {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), 
            t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), 
            t.length || (t = this.uiDialog), t.eq(0).trigger("focus");
        },
        _keepFocus: function(e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0]), i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                i || this._focusTabbable();
            }
            e.preventDefault(), i.call(this), this._delay(i);
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), 
            this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), 
                    this.close(e), void 0;
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"), s = i.filter(":first"), n = i.filter(":last");
                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                            n.trigger("focus");
                        }), e.preventDefault()) : (this._delay(function() {
                            s.trigger("focus");
                        }), e.preventDefault());
                    }
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable();
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            });
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), 
            this._on(this.uiDialogTitlebar, {
                mousedown: function(e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
                }
            }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                label: t("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), 
            this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(), this.close(t);
                }
            }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), 
            this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            });
        },
        _title: function(t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;");
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), 
            this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), 
            this._createButtons();
        },
        _createButtons: function() {
            var e = this, i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), 
            void 0) : (t.each(i, function(i, s) {
                var n, o;
                s = t.isFunction(s) ? {
                    click: s,
                    text: i
                } : s, s = t.extend({
                    type: "button"
                }, s), n = s.click, o = {
                    icon: s.icon,
                    iconPosition: s.iconPosition,
                    showLabel: s.showLabel,
                    icons: s.icons,
                    text: s.text
                }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, 
                "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function() {
                    n.apply(e.element[0], arguments);
                });
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), 
            void 0);
        },
        _makeDraggable: function() {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                };
            }
            var i = this, s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(s, n) {
                    i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n));
                },
                drag: function(t, s) {
                    i._trigger("drag", t, e(s));
                },
                stop: function(n, o) {
                    var a = o.offset.left - i.document.scrollLeft(), r = o.offset.top - i.document.scrollTop();
                    s.position = {
                        my: "left top",
                        at: "left" + (a >= 0 ? "+" : "") + a + " " + "top" + (r >= 0 ? "+" : "") + r,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o));
                }
            });
        },
        _makeResizable: function() {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                };
            }
            var i = this, s = this.options, n = s.resizable, o = this.uiDialog.css("position"), a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: a,
                start: function(s, n) {
                    i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n));
                },
                resize: function(t, s) {
                    i._trigger("resize", t, e(s));
                },
                stop: function(n, o) {
                    var a = i.uiDialog.offset(), r = a.left - i.document.scrollLeft(), l = a.top - i.document.scrollTop();
                    s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
                        my: "left top",
                        at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (l >= 0 ? "+" : "") + l,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o));
                }
            }).css("position", o);
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(e) {
                    this._makeFocusTarget(), this._focusedElement = t(e.target);
                }
            });
        },
        _makeFocusTarget: function() {
            this._untrackInstance(), this._trackingInstances().unshift(this);
        },
        _untrackInstance: function() {
            var e = this._trackingInstances(), i = t.inArray(this, e);
            -1 !== i && e.splice(i, 1);
        },
        _trackingInstances: function() {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [], this.document.data("ui-dialog-instances", t)), t;
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide();
        },
        _setOptions: function(e) {
            var i = this, s = !1, n = {};
            t.each(e, function(t, e) {
                i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e);
            }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n);
        },
        _setOption: function(e, i) {
            var s, n, o = this.uiDialog;
            "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), 
            "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                label: t("<a>").text("" + this.options.closeText).html()
            }), "draggable" === e && (s = o.is(":data(ui-draggable)"), s && !i && o.draggable("destroy"), 
            !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (n = o.is(":data(ui-resizable)"), 
            n && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), 
            n || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
        },
        _size: function() {
            var t, e, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", 
            "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0];
            });
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _allowInteraction: function(e) {
            return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length;
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = !0;
                this._delay(function() {
                    e = !1;
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(t) {
                        e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable());
                    }
                }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), 
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), 
                this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null;
            }
        }
    }), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super(), this.uiDialog.addClass(this.options.dialogClass);
        },
        _setOption: function(t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), 
            this._superApply(arguments);
        }
    }), t.ui.dialog, t.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), 
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue();
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
        },
        value: function(t) {
            return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), 
            this._refreshValue(), void 0);
        },
        _constrainedValue: function(t) {
            return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, 
            "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t));
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), 
            this._refreshValue();
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
        },
        _refreshValue: function() {
            var e = this.options.value, i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), 
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), 
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), 
            this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, 
            this._trigger("change")), e === this.options.max && this._trigger("complete");
        }
    }), t.widget("ui.selectmenu", [ t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = {
                element: e,
                button: e + "-button",
                menu: e + "-menu"
            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, 
            this.menuItems = t();
        },
        _drawButton: function() {
            var e, i = this, s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function(t) {
                    this.button.focus(), t.preventDefault();
                }
            }), this.element.hide(), this.button = t("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), 
            e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), 
            this.buttonItem = this._renderButtonItem(s).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), 
            this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                i._rendered || i._refreshMenu();
            });
        },
        _drawMenu: function() {
            var e = this;
            this.menu = t("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), 
            this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(t, i) {
                    t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t);
                },
                focus: function(t, i) {
                    var s = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
                        item: s
                    }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"));
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                return !1;
            }, this.menuInstance._isDivider = function() {
                return !1;
            };
        },
        refresh: function() {
            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), 
            null === this.options.width && this._resizeButton();
        },
        _refreshMenu: function() {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), 
            this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), 
            this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), 
            this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
        },
        open: function(t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), 
            this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, 
            this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), 
            this._trigger("open", t)));
        },
        _position: function() {
            this.menuWrap.position(t.extend({
                of: this.button
            }, this.options.position));
        },
        close: function(t) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), 
            this._trigger("close", t));
        },
        widget: function() {
            return this.button;
        },
        menuWidget: function() {
            return this.menu;
        },
        _renderButtonItem: function(e) {
            var i = t("<span>");
            return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i;
        },
        _renderMenu: function(e, i) {
            var s = this, n = "";
            t.each(i, function(i, o) {
                var a;
                o.optgroup !== n && (a = t("<li>", {
                    text: o.optgroup
                }), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), 
                a.appendTo(e), n = o.optgroup), s._renderItemData(e, o);
            });
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e);
        },
        _renderItem: function(e, i) {
            var s = t("<li>"), n = t("<div>", {
                title: i.element.attr("title")
            });
            return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), 
            s.append(n).appendTo(e);
        },
        _setText: function(t, e) {
            e ? t.text(e) : t.html("&#160;");
        },
        _move: function(t, e) {
            var i, s, n = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), 
            n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), 
            s.length && this.menuInstance.focus(e, s);
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
        },
        _toggle: function(t) {
            this[this.isOpen ? "close" : "open"](t);
        },
        _setSelection: function() {
            var t;
            this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), 
            t.addRange(this.range)) : this.range.select(), this.button.focus());
        },
        _documentClick: {
            mousedown: function(e) {
                this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e));
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var t;
                window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange();
            },
            click: function(t) {
                this._setSelection(), this._toggle(t);
            },
            keydown: function(e) {
                var i = !0;
                switch (e.keyCode) {
                  case t.ui.keyCode.TAB:
                  case t.ui.keyCode.ESCAPE:
                    this.close(e), i = !1;
                    break;

                  case t.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(e);
                    break;

                  case t.ui.keyCode.UP:
                    e.altKey ? this._toggle(e) : this._move("prev", e);
                    break;

                  case t.ui.keyCode.DOWN:
                    e.altKey ? this._toggle(e) : this._move("next", e);
                    break;

                  case t.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                    break;

                  case t.ui.keyCode.LEFT:
                    this._move("prev", e);
                    break;

                  case t.ui.keyCode.RIGHT:
                    this._move("next", e);
                    break;

                  case t.ui.keyCode.HOME:
                  case t.ui.keyCode.PAGE_UP:
                    this._move("first", e);
                    break;

                  case t.ui.keyCode.END:
                  case t.ui.keyCode.PAGE_DOWN:
                    this._move("last", e);
                    break;

                  default:
                    this.menu.trigger(e), i = !1;
                }
                i && e.preventDefault();
            }
        },
        _selectFocusedItem: function(t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t);
        },
        _select: function(t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), 
            this._setAria(t), this._trigger("select", e, {
                item: t
            }), t.index !== i && this._trigger("change", e, {
                item: t
            }), this.close(e);
        },
        _setAria: function(t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
                "aria-labelledby": e,
                "aria-activedescendant": e
            }), this.menu.attr("aria-activedescendant", e);
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button);
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), 
            "width" === t && this._resizeButton();
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), 
            this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), 
            t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), 
            e.length || (e = this.document[0].body), e;
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), 
            this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function() {
            var t = this.options.width;
            return t === !1 ? (this.button.css("width", ""), void 0) : (null === t && (t = this.element.show().outerWidth(), 
            this.element.hide()), this.button.outerWidth(t), void 0);
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
        },
        _getCreateOptions: function() {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"), t;
        },
        _parseOptions: function(e) {
            var i = this, s = [];
            e.each(function(e, n) {
                s.push(i._parseOption(t(n), e));
            }), this.items = s;
        },
        _parseOption: function(t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            };
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), 
            this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
        }
    } ]), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, 
            this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), 
            this._refresh(), this._animateOff = !1;
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
        },
        _createHandles: function() {
            var e, i, s = this.options, n = this.element.find(".ui-slider-handle"), o = "<span tabindex='0'></span>", a = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), 
            n = n.slice(0, i)), e = n.length; i > e; e++) a.push(o);
            this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), 
            this.handle = this.handles.eq(0), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
            });
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [ e.values[0], e.values[0] ] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [ this._valueMin(), this._valueMin() ]), 
            this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), 
            this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), 
            ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), 
            this.range = null);
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), 
            this._focusable(this.handles);
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
        },
        _mouseCapture: function(e) {
            var i, s, n, o, a, r, l, h, c = this, u = this.options;
            return u.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, 
            this.handles.each(function(e) {
                var i = Math.abs(s - c.values(e));
                (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, 
                o = t(this), a = e);
            }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, 
            this._addClass(o, null, "ui-state-active"), o.trigger("focus"), l = o.offset(), 
            h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - l.left - o.width() / 2,
                top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, 
            !0));
        },
        _mouseStart: function() {
            return !0;
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1;
        },
        _mouseStop: function(t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, 
            this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, 
            this._clickOffset = null, this._animateOff = !1, !1;
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, 
            i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 
            s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), 
            n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o);
        },
        _uiHash: function(t, e, i) {
            var s = {
                handle: this.handles[t],
                handleIndex: t,
                value: void 0 !== e ? e : this.value()
            };
            return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), 
            s.values = i || this.values()), s;
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length;
        },
        _start: function(t, e) {
            return this._trigger("start", t, this._uiHash(e));
        },
        _slide: function(t, e, i) {
            var s, n, o = this.value(), a = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), 
            a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
        },
        _stop: function(t, e) {
            this._trigger("stop", t, this._uiHash(e));
        },
        _change: function(t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)));
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), 
            this._change(null, 0), void 0) : this._value();
        },
        values: function(e, i) {
            var s, n, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), 
            this._refreshValue(), this._change(null, e), void 0;
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), 
            this._change(null, o);
            this._refreshValue();
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), 
            this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), 
            this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), 
            this._super(e, i), e) {
              case "orientation":
                this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), 
                this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                break;

              case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;

              case "values":
                for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
                this._animateOff = !1;
                break;

              case "step":
              case "min":
              case "max":
                this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                break;

              case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1;
            }
        },
        _setOptionDisabled: function(t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t);
        },
        _values: function(t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i;
            }
            return [];
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5));
        },
        _calculateNewMax: function() {
            var t = this.options.max, e = this._valueMin(), i = this.options.step, s = Math.round((t - e) / i) * i;
            t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()));
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), 
            t;
        },
        _precisionOf: function(t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1;
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.max;
        },
        _refreshRange: function(t) {
            "vertical" === t && this.range.css({
                width: "",
                left: ""
            }), "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            });
        },
        _refreshValue: function() {
            var e, i, s, n, o, a = this.options.range, r = this.options, l = this, h = this._animateOff ? !1 : r.animate, c = {};
            this._hasMultipleValues() ? this.handles.each(function(s) {
                i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", 
                t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), e = i;
            }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, 
            c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), 
            "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, r.animate));
        },
        _handleEvents: {
            keydown: function(e) {
                var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                  case t.ui.keyCode.HOME:
                  case t.ui.keyCode.END:
                  case t.ui.keyCode.PAGE_UP:
                  case t.ui.keyCode.PAGE_DOWN:
                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.RIGHT:
                  case t.ui.keyCode.DOWN:
                  case t.ui.keyCode.LEFT:
                    if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), 
                    i = this._start(e, a), i === !1)) return;
                }
                switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), 
                e.keyCode) {
                  case t.ui.keyCode.HOME:
                    n = this._valueMin();
                    break;

                  case t.ui.keyCode.END:
                    n = this._valueMax();
                    break;

                  case t.ui.keyCode.PAGE_UP:
                    n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case t.ui.keyCode.PAGE_DOWN:
                    n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.RIGHT:
                    if (s === this._valueMax()) return;
                    n = this._trimAlignValue(s + o);
                    break;

                  case t.ui.keyCode.DOWN:
                  case t.ui.keyCode.LEFT:
                    if (s === this._valueMin()) return;
                    n = this._trimAlignValue(s - o);
                }
                this._slide(e, a, n);
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), 
                this._removeClass(t(e.target), null, "ui-state-active"));
            }
        }
    }), t.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), 
            this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), 
            this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _getCreateOptions: function() {
            var e = this._super(), i = this.element;
            return t.each([ "min", "max", "step" ], function(t, s) {
                var n = i.attr(s);
                null != n && n.length && (e[s] = n);
            }), e;
        },
        _events: {
            keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault();
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val();
            },
            blur: function(t) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), 
                this.previous !== this.element.val() && this._trigger("change", t), void 0);
            },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), 
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t);
                    }, 100), t.preventDefault();
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() {
                    var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
                    e || (this.element.trigger("focus"), this.previous = s, this._delay(function() {
                        this.previous = s;
                    }));
                }
                var s;
                s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), 
                e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, i.call(this);
                }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e);
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), 
                void 0) : void 0;
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
        },
        _draw: function() {
            this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), 
            this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), 
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }), this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height());
        },
        _keydown: function(e) {
            var i = this.options, s = t.ui.keyCode;
            switch (e.keyCode) {
              case s.UP:
                return this._repeat(null, 1, e), !0;

              case s.DOWN:
                return this._repeat(null, -1, e), !0;

              case s.PAGE_UP:
                return this._repeat(null, i.page, e), !0;

              case s.PAGE_DOWN:
                return this._repeat(null, -i.page, e), !0;
            }
            return !1;
        },
        _start: function(t) {
            return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), 
            this.spinning = !0, !0) : !1;
        },
        _repeat: function(t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, e, i);
            }, t), this._spin(e * this.options.step, i);
        },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), 
            this.spinning && this._trigger("spin", e, {
                value: i
            }) === !1 || (this._value(i), this.counter++);
        },
        _increment: function(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1;
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), 
            t;
        },
        _precisionOf: function(t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1;
        },
        _adjustValue: function(t) {
            var e, i, s = this.options;
            return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, 
            t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t;
        },
        _stop: function(t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), 
            this.counter = 0, this.spinning = !1, this._trigger("stop", t));
        },
        _setOption: function(t, e) {
            var i, s, n;
            return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), 
            this.options[t] = e, this.element.val(this._format(i)), void 0) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), 
            "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), 
            this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), 
            this._addClass(n, null, e.down)), this._super(t, e), void 0);
        },
        _setOptionDisabled: function(t) {
            this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), 
            this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable");
        },
        _setOptions: r(function(t) {
            this._super(t);
        }),
        _parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), 
            "" === t || isNaN(t) ? null : t;
        },
        _format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t;
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            });
        },
        isValid: function() {
            var t = this.value();
            return null === t ? !1 : t === this._adjustValue(t);
        },
        _value: function(t, e) {
            var i;
            "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), 
            t = this._format(i))), this.element.val(t), this._refresh();
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), 
            this.uiSpinner.replaceWith(this.element);
        },
        stepUp: r(function(t) {
            this._stepUp(t);
        }),
        _stepUp: function(t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop());
        },
        stepDown: r(function(t) {
            this._stepDown(t);
        }),
        _stepDown: function(t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
        },
        pageUp: r(function(t) {
            this._stepUp((t || 1) * this.options.page);
        }),
        pageDown: r(function(t) {
            this._stepDown((t || 1) * this.options.page);
        }),
        value: function(t) {
            return arguments.length ? (r(this._value).call(this, t), void 0) : this._parse(this.element.val());
        },
        widget: function() {
            return this.uiSpinner;
        }
    }), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
        },
        _uiSpinnerHtml: function() {
            return "<span>";
        },
        _buttonHtml: function() {
            return "<a></a><a></a>";
        }
    }), t.ui.spinner, t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var t = /#.*$/;
            return function(e) {
                var i, s;
                i = e.href.replace(t, ""), s = location.href.replace(t, "");
                try {
                    i = decodeURIComponent(i);
                } catch (n) {}
                try {
                    s = decodeURIComponent(s);
                } catch (n) {}
                return e.hash.length > 1 && i === s;
            };
        }(),
        _create: function() {
            var e = this, i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), 
            this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t);
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), 
            this._refresh(), this.active.length && this.load(i.active);
        },
        _initialActive: function() {
            var e = this.options.active, i = this.options.collapsible, s = location.hash.substring(1);
            return null === e && (s && this.tabs.each(function(i, n) {
                return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0;
            }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), 
            e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), 
            !i && e === !1 && this.anchors.length && (e = 0), e;
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            };
        },
        _tabKeydown: function(e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"), s = this.tabs.index(i), n = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                  case t.ui.keyCode.RIGHT:
                  case t.ui.keyCode.DOWN:
                    s++;
                    break;

                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.LEFT:
                    n = !1, s--;
                    break;

                  case t.ui.keyCode.END:
                    s = this.anchors.length - 1;
                    break;

                  case t.ui.keyCode.HOME:
                    s = 0;
                    break;

                  case t.ui.keyCode.SPACE:
                    return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;

                  case t.ui.keyCode.ENTER:
                    return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), 
                    void 0;

                  default:
                    return;
                }
                e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), 
                e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), 
                this.activating = this._delay(function() {
                    this.option("active", s);
                }, this.delay));
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), 
            this.active.trigger("focus"));
        },
        _handlePageNav: function(e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), 
            !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), 
            !0) : void 0;
        },
        _findNextTab: function(e, i) {
            function s() {
                return e > n && (e = 0), 0 > e && (e = n), e;
            }
            for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled); ) e = i ? e + 1 : e - 1;
            return e;
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t;
        },
        _setOption: function(t, e) {
            return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), 
            e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), 
            "heightStyle" === t && this._setupHeightStyle(e), void 0);
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },
        refresh: function() {
            var e = this.options, i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t);
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, 
            this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, 
            this.active = t()), this._refresh();
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), 
            this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0);
        },
        _processTabs: function() {
            var e = this, i = this.tabs, s = this.anchors, n = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), 
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault();
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur();
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                return t("a", this)[0];
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, s) {
                var n, o, a, r = t(s).uniqueId().attr("id"), l = t(s).closest("li"), h = l.attr("aria-controls");
                e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = l.attr("aria-controls") || t({}).uniqueId()[0].id, 
                n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), 
                o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), 
                l.attr({
                    "aria-controls": a,
                    "aria-labelledby": r
                }), o.attr("aria-labelledby", r);
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), 
            i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)));
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0);
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).data("ui-tabs-destroy", !0);
        },
        _setOptionDisabled: function(e) {
            var i, s, n;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), 
            n = 0; s = this.tabs[n]; n++) i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), 
            this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), 
            this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0);
        },
        _setupEvents: function(e) {
            var i = {};
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler";
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault();
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs);
        },
        _setupHeightStyle: function(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), 
            this.element.siblings(":visible").each(function() {
                var e = t(this), s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0));
            }), this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0);
            }), this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                i = Math.max(i, t(this).height("").height());
            }).height(i));
        },
        _eventHandler: function(e) {
            var i = this.options, s = this.active, n = t(e.currentTarget), o = n.closest("li"), a = o[0] === s[0], r = a && i.collapsible, l = r ? t() : this._getPanelForTab(o), h = s.length ? this._getPanelForTab(s) : t(), c = {
                oldTab: s,
                oldPanel: h,
                newTab: r ? t() : o,
                newPanel: l
            };
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), 
            this.active = a ? t() : o, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), 
            l.length && this.load(this.tabs.index(o), e), this._toggle(e, c));
        },
        _toggle: function(e, i) {
            function s() {
                o.running = !1, o._trigger("activate", e, i);
            }
            function n() {
                o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), 
                s());
            }
            var o = this, a = i.newPanel, r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n();
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), 
            r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex");
            }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _activate: function(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], 
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }));
        },
        _findActive: function(e) {
            return e === !1 ? t() : this.tabs.eq(e);
        },
        _getIndex: function(e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), 
            e;
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), 
            this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
            }), this.tabs.each(function() {
                var e = t(this), i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls");
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
        },
        enable: function(e) {
            var i = this.options.disabled;
            i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                return t !== e ? t : null;
            }) : t.map(this.tabs, function(t, i) {
                return i !== e ? i : null;
            })), this._setOptionDisabled(i));
        },
        disable: function(e) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (void 0 === e) i = !0; else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([ e ], i).sort() : [ e ];
                }
                this._setOptionDisabled(i);
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var s = this, n = this.tabs.eq(e), o = n.find(".ui-tabs-anchor"), a = this._getPanelForTab(n), r = {
                tab: n,
                panel: a
            }, l = function(t, e) {
                "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), 
                t === s.xhr && delete s.xhr;
            };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), 
            a.attr("aria-busy", "true"), this.xhr.done(function(t, e, n) {
                setTimeout(function() {
                    a.html(t), s._trigger("load", i, r), l(n, e);
                }, 1);
            }).fail(function(t, e) {
                setTimeout(function() {
                    l(t, e);
                }, 1);
            })));
        },
        _ajaxSettings: function(e, i, s) {
            var n = this;
            return {
                url: e.attr("href").replace(/#.*$/, ""),
                beforeSend: function(e, o) {
                    return n._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, s));
                }
            };
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i));
        }
    }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
        }
    }), t.ui.tabs, t.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html();
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(e, i) {
            var s = (e.attr("aria-describedby") || "").split(/\s+/);
            s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")));
        },
        _removeDescribedBy: function(e) {
            var i = e.data("ui-tooltip-id"), s = (e.attr("aria-describedby") || "").split(/\s+/), n = t.inArray(i, s);
            -1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), 
            s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby");
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), 
            this.disabledTitles = t([]);
        },
        _setOption: function(e, i) {
            var s = this;
            this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
                s._updateContent(e.element);
            });
        },
        _setOptionDisabled: function(t) {
            this[t ? "_disable" : "_enable"]();
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s.element[0], e.close(n, !0);
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var e = t(this);
                return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0;
            }));
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"));
            }), this.disabledTitles = t([]);
        },
        open: function(e) {
            var i = this, s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), 
            s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
                var e, s = t(this);
                s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, 
                i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""));
            }), this._registerCloseHandlers(e, s), this._updateContent(s, e));
        },
        _updateContent: function(t, e) {
            var i, s = this.options.content, n = this, o = e ? e.type : null;
            return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : (i = s.call(t[0], function(i) {
                n._delay(function() {
                    t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i));
                });
            }), i && this._open(e, t, i), void 0);
        },
        _open: function(e, i, s) {
            function n(t) {
                h.of = t, a.is(":hidden") || a.position(h);
            }
            var o, a, r, l, h = t.extend({}, this.options.position);
            if (s) {
                if (o = this._find(i)) return o.tooltip.find(".ui-tooltip-content").html(s), void 0;
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), 
                o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), 
                this.liveRegion.children().hide(), l = t("<div>").html(a.find(".ui-tooltip-content").html()), 
                l.removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), 
                l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                    mousemove: n
                }), n(e)) : a.position(t.extend({
                    of: i
                }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                    a.is(":visible") && (n(h.of), clearInterval(r));
                }, t.fx.interval)), this._trigger("open", e, {
                    tooltip: a
                });
            }
        },
        _registerCloseHandlers: function(e, i) {
            var s = {
                keyup: function(e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var s = t.Event(e);
                        s.currentTarget = i[0], this.close(s, !0);
                    }
                }
            };
            i[0] !== this.element[0] && (s.remove = function() {
                this._removeTooltip(this._find(i).tooltip);
            }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), 
            this._on(!0, i, s);
        },
        close: function(e) {
            var i, s = this, n = t(e ? e.currentTarget : this.element), o = this._find(n);
            return o ? (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), 
            this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                s._removeTooltip(t(this));
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), 
            n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), 
            e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title), delete s.parents[e];
            }), o.closing = !0, this._trigger("close", e, {
                tooltip: i
            }), o.hiding || (o.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0);
        },
        _tooltip: function(e) {
            var i = t("<div>").attr("role", "tooltip"), s = t("<div>").appendTo(i), n = i.uniqueId().attr("id");
            return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), 
            i.appendTo(this._appendTo(e)), this.tooltips[n] = {
                element: e,
                tooltip: i
            };
        },
        _find: function(t) {
            var e = t.data("ui-tooltip-id");
            return e ? this.tooltips[e] : null;
        },
        _removeTooltip: function(t) {
            t.remove(), delete this.tooltips[t.attr("id")];
        },
        _appendTo: function(t) {
            var e = t.closest(".ui-front, dialog");
            return e.length || (e = this.document[0].body), e;
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur"), o = s.element;
                n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), 
                o.removeData("ui-tooltip-title"));
            }), this.liveRegion.remove();
        }
    }), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), 
            t;
        }
    }), t.ui.tooltip;
    var f = "ui-effects-", m = "ui-effects-style", g = "ui-effects-animated", _ = t;
    t.effects = {
        effect: {}
    }, function(t, e) {
        function i(t, e, i) {
            var s = u[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), 
            isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t);
        }
        function s(i) {
            var s = h(), n = s._rgba = [];
            return i = i.toLowerCase(), f(l, function(t, o) {
                var a, r = o.re.exec(i), l = r && o.parse(r), h = o.space || "rgba";
                return l ? (a = s[h](l), s[c[h].cache] = a[c[h].cache], n = s._rgba = a._rgba, !1) : e;
            }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i];
        }
        function n(t, e, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t;
        }
        var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, l = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ t[1], t[2], t[3], t[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ 2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [ parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16) ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [ parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16) ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [ t[1], t[2] / 100, t[3] / 100, t[4] ];
            }
        } ], h = t.Color = function(e, i, s, n) {
            return new t.Color.fn.parse(e, i, s, n);
        }, c = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, u = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, d = h.support = {}, p = t("<p>")[0], f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, 
        f(c, function(t, e) {
            e.cache = "_" + t, e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        }), h.fn = t.extend(h.prototype, {
            parse: function(n, a, r, l) {
                if (n === e) return this._rgba = [ null, null, null, null ], this;
                (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
                var u = this, d = t.type(n), p = this._rgba = [];
                return a !== e && (n = [ n, a, r, l ], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
                    p[e.idx] = i(n[e.idx], e);
                }), this) : "object" === d ? (n instanceof h ? f(c, function(t, e) {
                    n[e.cache] && (u[e.cache] = n[e.cache].slice());
                }) : f(c, function(e, s) {
                    var o = s.cache;
                    f(s.props, function(t, e) {
                        if (!u[o] && s.to) {
                            if ("alpha" === t || null == n[t]) return;
                            u[o] = s.to(u._rgba);
                        }
                        u[o][e.idx] = i(n[t], e, !0);
                    }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])));
                }), this) : e;
            },
            is: function(t) {
                var i = h(t), s = !0, n = this;
                return f(c, function(t, o) {
                    var a, r = i[o.cache];
                    return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function(t, i) {
                        return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e;
                    })), s;
                }), s;
            },
            _space: function() {
                var t = [], e = this;
                return f(c, function(i, s) {
                    e[s.cache] && t.push(i);
                }), t.pop();
            },
            transition: function(t, e) {
                var s = h(t), n = s._space(), o = c[n], a = 0 === this.alpha() ? h("transparent") : this, r = a[o.cache] || o.to(a._rgba), l = r.slice();
                return s = s[o.cache], f(o.props, function(t, n) {
                    var o = n.idx, a = r[o], h = s[o], c = u[n.type] || {};
                    null !== h && (null === a ? l[o] = h : (c.mod && (h - a > c.mod / 2 ? a += c.mod : a - h > c.mod / 2 && (a -= c.mod)), 
                    l[o] = i((h - a) * e + a, n)));
                }), this[n](l);
            },
            blend: function(e) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(), s = i.pop(), n = h(e)._rgba;
                return h(t.map(i, function(t, e) {
                    return (1 - s) * n[e] + s * t;
                }));
            },
            toRgbaString: function() {
                var e = "rgba(", i = t.map(this._rgba, function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t;
                });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")";
            },
            toHslaString: function() {
                var e = "hsla(", i = t.map(this.hsla(), function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), 
                    t;
                });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")";
            },
            toHexString: function(e) {
                var i = this._rgba.slice(), s = i.pop();
                return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                    return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t;
                }).join("");
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            }
        }), h.fn.parse.prototype = h.fn, c.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e, i, s = t[0] / 255, n = t[1] / 255, o = t[2] / 255, a = t[3], r = Math.max(s, n, o), l = Math.min(s, n, o), h = r - l, c = r + l, u = .5 * c;
            return e = l === r ? 0 : s === r ? 60 * (n - o) / h + 360 : n === r ? 60 * (o - s) / h + 120 : 60 * (s - n) / h + 240, 
            i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [ Math.round(e) % 360, i, u, null == a ? 1 : a ];
        }, c.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e = t[0] / 360, i = t[1], s = t[2], o = t[3], a = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - a;
            return [ Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o ];
        }, f(c, function(s, n) {
            var o = n.props, a = n.cache, l = n.to, c = n.from;
            h.fn[s] = function(s) {
                if (l && !this[a] && (this[a] = l(this._rgba)), s === e) return this[a].slice();
                var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[a].slice();
                return f(o, function(t, e) {
                    var s = u["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]), d[e.idx] = i(s, e);
                }), c ? (n = h(c(d)), n[a] = d, n) : h(d);
            }, f(o, function(e, i) {
                h.fn[e] || (h.fn[e] = function(n) {
                    var o, a = t.type(n), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, h = this[l](), c = h[i.idx];
                    return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), 
                    null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), 
                    h[i.idx] = n, this[l](h)));
                });
            });
        }), h.hook = function(e) {
            var i = e.split(" ");
            f(i, function(e, i) {
                t.cssHooks[i] = {
                    set: function(e, n) {
                        var o, a, r = "";
                        if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                            if (n = h(o || n), !d.rgba && 1 !== n._rgba[3]) {
                                for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style; ) try {
                                    r = t.css(a, "backgroundColor"), a = a.parentNode;
                                } catch (l) {}
                                n = n.blend(r && "transparent" !== r ? r : "_default");
                            }
                            n = n.toRgbaString();
                        }
                        try {
                            e.style[i] = n;
                        } catch (l) {}
                    }
                }, t.fx.step[i] = function(e) {
                    e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
                };
            });
        }, h.hook(a), t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return f([ "Top", "Right", "Bottom", "Left" ], function(i, s) {
                    e["border" + s + "Color"] = t;
                }), e;
            }
        }, o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [ null, null, null, 0 ],
            _default: "#ffffff"
        };
    }(_), function() {
        function e(e) {
            var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, o = {};
            if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--; ) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]); else for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
            return o;
        }
        function i(e, i) {
            var s, o, a = {};
            for (s in i) o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
            return a;
        }
        var s = [ "add", "remove", "toggle" ], n = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function(e, i) {
            t.fx.step[i] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (_.style(t.elem, i, t.end), 
                t.setAttr = !0);
            };
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }), t.effects.animateClass = function(n, o, a, r) {
            var l = t.speed(o, a, r);
            return this.queue(function() {
                var o, a = t(this), r = a.attr("class") || "", h = l.children ? a.find("*").addBack() : a;
                h = h.map(function() {
                    var i = t(this);
                    return {
                        el: i,
                        start: e(this)
                    };
                }), o = function() {
                    t.each(s, function(t, e) {
                        n[e] && a[e + "Class"](n[e]);
                    });
                }, o(), h = h.map(function() {
                    return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this;
                }), a.attr("class", r), h = h.map(function() {
                    var e = this, i = t.Deferred(), s = t.extend({}, l, {
                        queue: !1,
                        complete: function() {
                            i.resolve(e);
                        }
                    });
                    return this.el.animate(this.diff, s), i.promise();
                }), t.when.apply(t, h.get()).done(function() {
                    o(), t.each(arguments, function() {
                        var e = this.el;
                        t.each(this.diff, function(t) {
                            e.css(t, "");
                        });
                    }), l.complete.call(a[0]);
                });
            });
        }, t.fn.extend({
            addClass: function(e) {
                return function(i, s, n, o) {
                    return s ? t.effects.animateClass.call(this, {
                        add: i
                    }, s, n, o) : e.apply(this, arguments);
                };
            }(t.fn.addClass),
            removeClass: function(e) {
                return function(i, s, n, o) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {
                        remove: i
                    }, s, n, o) : e.apply(this, arguments);
                };
            }(t.fn.removeClass),
            toggleClass: function(e) {
                return function(i, s, n, o, a) {
                    return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
                        add: i
                    } : {
                        remove: i
                    }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                        toggle: i
                    }, s, n, o);
                };
            }(t.fn.toggleClass),
            switchClass: function(e, i, s, n, o) {
                return t.effects.animateClass.call(this, {
                    add: i,
                    remove: e
                }, s, n, o);
            }
        });
    }(), function() {
        function e(e, i, s, n) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                effect: e
            }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, 
            s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, 
            e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, 
            e.complete = n || i.complete, e;
        }
        function i(e) {
            return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0;
        }
        function s(t, e) {
            var i = e.outerWidth(), s = e.outerHeight(), n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/, o = n.exec(t) || [ "", 0, i, s, 0 ];
            return {
                top: parseFloat(o[1]) || 0,
                right: "auto" === o[2] ? i : parseFloat(o[2]),
                bottom: "auto" === o[3] ? s : parseFloat(o[3]),
                left: parseFloat(o[4]) || 0
            };
        }
        t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) {
            return function(i) {
                return !!t(i).data(g) || e(i);
            };
        }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
            save: function(t, e) {
                for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(f + e[i], t[0].style[e[i]]);
            },
            restore: function(t, e) {
                for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] && (i = t.data(f + e[s]), 
                t.css(e[s], i));
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    "float": e.css("float")
                }, s = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), n = {
                    width: e.width(),
                    height: e.height()
                }, o = document.activeElement;
                try {
                    o.id;
                } catch (a) {
                    o = document.body;
                }
                return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), 
                s = e.parent(), "static" === e.css("position") ? (s.css({
                    position: "relative"
                }), e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each([ "top", "left", "bottom", "right" ], function(t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto");
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(n), s.css(i).show();
            },
            removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), 
                e;
            }
        }), t.extend(t.effects, {
            version: "1.12.1",
            define: function(e, i, s) {
                return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, 
                s;
            },
            scaledDimensions: function(t, e, i) {
                if (0 === e) return {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
                var s = "horizontal" !== i ? (e || 100) / 100 : 1, n = "vertical" !== i ? (e || 100) / 100 : 1;
                return {
                    height: t.height() * n,
                    width: t.width() * s,
                    outerHeight: t.outerHeight() * n,
                    outerWidth: t.outerWidth() * s
                };
            },
            clipToBox: function(t) {
                return {
                    width: t.clip.right - t.clip.left,
                    height: t.clip.bottom - t.clip.top,
                    left: t.clip.left,
                    top: t.clip.top
                };
            },
            unshift: function(t, e, i) {
                var s = t.queue();
                e > 1 && s.splice.apply(s, [ 1, 0 ].concat(s.splice(e, i))), t.dequeue();
            },
            saveStyle: function(t) {
                t.data(m, t[0].style.cssText);
            },
            restoreStyle: function(t) {
                t[0].style.cssText = t.data(m) || "", t.removeData(m);
            },
            mode: function(t, e) {
                var i = t.is(":hidden");
                return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), 
                e;
            },
            getBaseline: function(t, e) {
                var i, s;
                switch (t[0]) {
                  case "top":
                    i = 0;
                    break;

                  case "middle":
                    i = .5;
                    break;

                  case "bottom":
                    i = 1;
                    break;

                  default:
                    i = t[0] / e.height;
                }
                switch (t[1]) {
                  case "left":
                    s = 0;
                    break;

                  case "center":
                    s = .5;
                    break;

                  case "right":
                    s = 1;
                    break;

                  default:
                    s = t[1] / e.width;
                }
                return {
                    x: s,
                    y: i
                };
            },
            createPlaceholder: function(e) {
                var i, s = e.css("position"), n = e.position();
                return e.css({
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", 
                i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                    display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight"),
                    "float": e.css("float")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), 
                e.data(f + "placeholder", i)), e.css({
                    position: s,
                    left: n.left,
                    top: n.top
                }), i;
            },
            removePlaceholder: function(t) {
                var e = f + "placeholder", i = t.data(e);
                i && (i.remove(), t.removeData(e));
            },
            cleanUp: function(e) {
                t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
            },
            setTransition: function(e, i, s, n) {
                return n = n || {}, t.each(i, function(t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (n[i] = o[0] * s + o[1]);
                }), n;
            }
        }), t.fn.extend({
            effect: function() {
                function i(e) {
                    function i() {
                        r.removeData(g), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a();
                    }
                    function a() {
                        t.isFunction(l) && l.call(r[0]), t.isFunction(e) && e();
                    }
                    var r = t(this);
                    s.mode = c.shift(), t.uiBackCompat === !1 || o ? "none" === s.mode ? (r[h](), a()) : n.call(r[0], s, i) : (r.is(":hidden") ? "hide" === h : "show" === h) ? (r[h](), 
                    a()) : n.call(r[0], s, a);
                }
                var s = e.apply(this, arguments), n = t.effects.effect[s.effect], o = n.mode, a = s.queue, r = a || "fx", l = s.complete, h = s.mode, c = [], u = function(e) {
                    var i = t(this), s = t.effects.mode(i, h) || o;
                    i.data(g, !0), c.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), 
                    o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e();
                };
                return t.fx.off || !n ? h ? this[h](s.duration, l) : this.each(function() {
                    l && l.call(this);
                }) : a === !1 ? this.each(u).each(i) : this.queue(r, u).queue(r, i);
            },
            show: function(t) {
                return function(s) {
                    if (i(s)) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "show", this.effect.call(this, n);
                };
            }(t.fn.show),
            hide: function(t) {
                return function(s) {
                    if (i(s)) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "hide", this.effect.call(this, n);
                };
            }(t.fn.hide),
            toggle: function(t) {
                return function(s) {
                    if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "toggle", this.effect.call(this, n);
                };
            }(t.fn.toggle),
            cssUnit: function(e) {
                var i = this.css(e), s = [];
                return t.each([ "em", "px", "%", "pt" ], function(t, e) {
                    i.indexOf(e) > 0 && (s = [ parseFloat(i), e ]);
                }), s;
            },
            cssClip: function(t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this);
            },
            transfer: function(e, i) {
                var s = t(this), n = t(e.to), o = "fixed" === n.css("position"), a = t("body"), r = o ? a.scrollTop() : 0, l = o ? a.scrollLeft() : 0, h = n.offset(), c = {
                    top: h.top - r,
                    left: h.left - l,
                    height: n.innerHeight(),
                    width: n.innerWidth()
                }, u = s.offset(), d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                    top: u.top - r,
                    left: u.left - l,
                    height: s.innerHeight(),
                    width: s.innerWidth(),
                    position: o ? "fixed" : "absolute"
                }).animate(c, e.duration, e.easing, function() {
                    d.remove(), t.isFunction(i) && i();
                });
            }
        }), t.fx.step.clip = function(e) {
            e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), 
            e.clipInit = !0), t(e.elem).cssClip({
                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                left: e.pos * (e.end.left - e.start.left) + e.start.left
            });
        };
    }(), function() {
        var e = {};
        t.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2);
            };
        }), t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t);
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
            },
            Back: function(t) {
                return t * t * (3 * t - 2);
            },
            Bounce: function(t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; ) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
            }
        }), t.each(e, function(e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t);
            }, t.easing["easeInOut" + e] = function(t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
            };
        });
    }(), t.effects;
});

(function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t();
})(this, function() {
    "use strict";
    function e(e) {
        return e && "[object Function]" === {}.toString.call(e);
    }
    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = getComputedStyle(e, null);
        return t ? o[t] : o;
    }
    function o(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
          case "HTML":
          case "BODY":
            return e.ownerDocument.body;

          case "#document":
            return e.body;
        }
        var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
    }
    function r(e) {
        return 11 === e ? re : 10 === e ? pe : re || pe;
    }
    function p(e) {
        if (!e) return document.documentElement;
        for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling; ) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== [ "TD", "TABLE" ].indexOf(n.nodeName) && "static" === t(n, "position") ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
    }
    function s(e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || p(e.firstElementChild) === e);
    }
    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode);
    }
    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t, i = o ? t : e, r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host);
    }
    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top", o = "top" === t ? "scrollTop" : "scrollLeft", n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i;
            return r[o];
        }
        return e[o];
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l(t, "top"), i = l(t, "left"), r = o ? -1 : 1;
        return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e;
    }
    function m(e, t) {
        var o = "x" === t ? "Left" : "Top", n = "Left" == o ? "Right" : "Bottom";
        return parseFloat(e["border" + o + "Width"], 10) + parseFloat(e["border" + n + "Width"], 10);
    }
    function h(e, t, o, n) {
        return $(t["offset" + e], t["scroll" + e], o["client" + e], o["offset" + e], o["scroll" + e], r(10) ? o["offset" + e] + n["margin" + ("Height" === e ? "Top" : "Left")] + n["margin" + ("Height" === e ? "Bottom" : "Right")] : 0);
    }
    function c() {
        var e = document.body, t = document.documentElement, o = r(10) && getComputedStyle(t);
        return {
            height: h("Height", e, t, o),
            width: h("Width", e, t, o)
        };
    }
    function g(e) {
        return le({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        });
    }
    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, "top"), i = l(e, "left");
                o.top += n, o.left += i, o.bottom += n, o.right += i;
            } else o = e.getBoundingClientRect();
        } catch (t) {}
        var p = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }, s = "HTML" === e.nodeName ? c() : {}, d = s.width || e.clientWidth || p.right - p.left, a = s.height || e.clientHeight || p.bottom - p.top, f = e.offsetWidth - d, h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            f -= m(u, "x"), h -= m(u, "y"), p.width -= f, p.height -= h;
        }
        return g(p);
    }
    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = r(10), s = "HTML" === o.nodeName, d = u(e), a = u(o), l = n(e), m = t(o), h = parseFloat(m.borderTopWidth, 10), c = parseFloat(m.borderLeftWidth, 10);
        i && "HTML" === o.nodeName && (a.top = $(a.top, 0), a.left = $(a.left, 0));
        var b = g({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height
        });
        if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
            var y = parseFloat(m.marginTop, 10), w = parseFloat(m.marginLeft, 10);
            b.top -= h - y, b.bottom -= h - y, b.left -= c - w, b.right -= c - w, b.marginTop = y, 
            b.marginLeft = w;
        }
        return (p && !i ? o.contains(l) : o === l && "BODY" !== l.nodeName) && (b = f(b, o)), 
        b;
    }
    function y(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = e.ownerDocument.documentElement, n = b(e, o), i = $(o.clientWidth, window.innerWidth || 0), r = $(o.clientHeight, window.innerHeight || 0), p = t ? 0 : l(o), s = t ? 0 : l(o, "left"), d = {
            top: p - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: r
        };
        return g(d);
    }
    function w(e) {
        var n = e.nodeName;
        return "BODY" === n || "HTML" === n ? !1 : "fixed" === t(e, "position") || w(o(e));
    }
    function E(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for (var o = e.parentElement; o && "none" === t(o, "transform"); ) o = o.parentElement;
        return o || document.documentElement;
    }
    function v(e, t, i, r) {
        var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], s = {
            top: 0,
            left: 0
        }, d = p ? E(e) : a(e, t);
        if ("viewport" === r) s = y(d, p); else {
            var l;
            "scrollParent" === r ? (l = n(o(t)), "BODY" === l.nodeName && (l = e.ownerDocument.documentElement)) : "window" === r ? l = e.ownerDocument.documentElement : l = r;
            var f = b(l, d, p);
            if ("HTML" === l.nodeName && !w(d)) {
                var m = c(), h = m.height, g = m.width;
                s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, 
                s.right = g + f.left;
            } else s = f;
        }
        return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s;
    }
    function x(e) {
        var t = e.width, o = e.height;
        return t * o;
    }
    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var p = v(o, n, r, i), s = {
            top: {
                width: p.width,
                height: t.top - p.top
            },
            right: {
                width: p.right - t.right,
                height: p.height
            },
            bottom: {
                width: p.width,
                height: p.bottom - t.bottom
            },
            left: {
                width: t.left - p.left,
                height: p.height
            }
        }, d = Object.keys(s).map(function(e) {
            return le({
                key: e
            }, s[e], {
                area: x(s[e])
            });
        }).sort(function(e, t) {
            return t.area - e.area;
        }), a = d.filter(function(e) {
            var t = e.width, n = e.height;
            return t >= o.clientWidth && n >= o.clientHeight;
        }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split("-")[1];
        return l + (f ? "-" + f : "");
    }
    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, i = n ? E(t) : a(t, o);
        return b(o, i, n);
    }
    function S(e) {
        var t = getComputedStyle(e), o = parseFloat(t.marginTop) + parseFloat(t.marginBottom), n = parseFloat(t.marginLeft) + parseFloat(t.marginRight), i = {
            width: e.offsetWidth + n,
            height: e.offsetHeight + o
        };
        return i;
    }
    function T(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e];
        });
    }
    function C(e, t, o) {
        o = o.split("-")[0];
        var n = S(e), i = {
            width: n.width,
            height: n.height
        }, r = -1 !== [ "right", "left" ].indexOf(o), p = r ? "top" : "left", s = r ? "left" : "top", d = r ? "height" : "width", a = r ? "width" : "height";
        return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], 
        i;
    }
    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function N(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function(e) {
            return e[t] === o;
        });
        var n = D(e, function(e) {
            return e[t] === o;
        });
        return e.indexOf(n);
    }
    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, "name", n));
        return i.forEach(function(t) {
            t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t["function"] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), 
            o = n(o, t));
        }), o;
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), 
            e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), 
            e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, 
            e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", 
            e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, 
            this.options.onCreate(e));
        }
    }
    function W(e, t) {
        return e.some(function(e) {
            var o = e.name, n = e.enabled;
            return n && o === t;
        });
    }
    function B(e) {
        for (var t = [ !1, "ms", "Webkit", "Moz", "O" ], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n], r = i ? "" + i + o : e;
            if ("undefined" != typeof document.body.style[r]) return r;
        }
        return null;
    }
    function H() {
        return this.state.isDestroyed = !0, W(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), 
        this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", 
        this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", 
        this.popper.style[B("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), 
        this;
    }
    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
    }
    function M(e, t, o, i) {
        var r = "BODY" === e.nodeName, p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }), r || M(n(p.parentNode), t, o, i), i.push(p);
    }
    function I(e, t, o, i) {
        o.updateBound = i, A(e).addEventListener("resize", o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return M(r, "scroll", o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, 
        o;
    }
    function F() {
        this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function R(e, t) {
        return A(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound);
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, 
        t;
    }
    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state));
    }
    function Y(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = "";
            -1 !== [ "width", "height", "top", "right", "bottom", "left" ].indexOf(o) && Y(t[o]) && (n = "px"), 
            e.style[o] = t[o] + n;
        });
    }
    function K(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
        });
    }
    function q(e, t, o) {
        var n = D(e, function(e) {
            var o = e.name;
            return o === t;
        }), i = !!n && e.some(function(e) {
            return e.name === o && e.enabled && e.order < n.order;
        });
        if (!i) {
            var r = "`" + t + "`";
            console.warn("`" + o + "`" + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
        }
        return i;
    }
    function G(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e;
    }
    function z(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = me.indexOf(e), n = me.slice(o + 1).concat(me.slice(0, o));
        return t ? n.reverse() : n;
    }
    function V(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +i[1], p = i[2];
        if (!r) return e;
        if (0 === p.indexOf("%")) {
            var s;
            switch (p) {
              case "%p":
                s = o;
                break;

              case "%":
              case "%r":
              default:
                s = n;
            }
            var d = g(s);
            return d[t] / 100 * r;
        }
        if ("vh" === p || "vw" === p) {
            var a;
            return a = "vh" === p ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0), 
            a / 100 * r;
        }
        return r;
    }
    function _(e, t, o, n) {
        var i = [ 0, 0 ], r = -1 !== [ "right", "left" ].indexOf(n), p = e.split(/(\+|\-)/).map(function(e) {
            return e.trim();
        }), s = p.indexOf(D(p, function(e) {
            return -1 !== e.search(/,|\s/);
        }));
        p[s] && -1 === p[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var d = /\s*,\s*|\s+/, a = -1 === s ? [ p ] : [ p.slice(0, s).concat([ p[s].split(d)[0] ]), [ p[s].split(d)[1] ].concat(p.slice(s + 1)) ];
        return a = a.map(function(e, n) {
            var i = (1 === n ? !r : r) ? "height" : "width", p = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== [ "+", "-" ].indexOf(t) ? (e[e.length - 1] = t, 
                p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
            }, []).map(function(e) {
                return V(e, i, t, o);
            });
        }), a.forEach(function(e, t) {
            e.forEach(function(o, n) {
                Y(o) && (i[t] += o * ("-" === e[n - 1] ? -1 : 1));
            });
        }), i;
    }
    function X(e, t) {
        var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split("-")[0];
        return o = Y(+n) ? [ +n, 0 ] : _(n, p, s, d), "left" === d ? (p.top += o[0], p.left -= o[1]) : "right" === d ? (p.top += o[0], 
        p.left += o[1]) : "top" === d ? (p.left += o[0], p.top -= o[1]) : "bottom" === d && (p.left += o[0], 
        p.top += o[1]), e.popper = p, e;
    }
    for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = "undefined" != typeof window && "undefined" != typeof document, te = [ "Edge", "Trident", "Firefox" ], oe = 0, ne = 0; ne < te.length; ne += 1) if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) {
        oe = 1;
        break;
    }
    var i = ee && window.Promise, ie = i ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0, window.Promise.resolve().then(function() {
                t = !1, e();
            }));
        };
    } : function(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout(function() {
                t = !1, e();
            }, oe));
        };
    }, re = ee && !!(window.MSInputMethodContext && document.documentMode), pe = ee && /MSIE 10/.test(navigator.userAgent), se = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, de = function() {
        function e(e, t) {
            for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, 
            o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
        return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
        };
    }(), ae = function(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o, e;
    }, le = Object.assign || function(e) {
        for (var t, o = 1; o < arguments.length; o++) for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
    }, fe = [ "auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start" ], me = fe.slice(3), he = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    }, ce = function() {
        function t(o, n) {
            var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            se(this, t), this.scheduleUpdate = function() {
                return requestAnimationFrame(i.update);
            }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), 
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, 
            this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
            }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return le({
                    name: e
                }, i.options.modifiers[e]);
            }).sort(function(e, t) {
                return e.order - t.order;
            }), this.modifiers.forEach(function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
            }), this.update();
            var p = this.options.eventsEnabled;
            p && this.enableEventListeners(), this.state.eventsEnabled = p;
        }
        return de(t, [ {
            key: "update",
            value: function() {
                return k.call(this);
            }
        }, {
            key: "destroy",
            value: function() {
                return H.call(this);
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return F.call(this);
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return U.call(this);
            }
        } ]), t;
    }();
    return ce.Utils = ("undefined" == typeof window ? global : window).PopperUtils, 
    ce.placements = fe, ce.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement, o = t.split("-")[0], n = t.split("-")[1];
                    if (n) {
                        var i = e.offsets, r = i.reference, p = i.popper, s = -1 !== [ "bottom", "top" ].indexOf(o), d = s ? "left" : "top", a = s ? "width" : "height", l = {
                            start: ae({}, d, r[d]),
                            end: ae({}, d, r[d] + r[a] - p[a])
                        };
                        e.offsets.popper = le({}, p, l[n]);
                    }
                    return e;
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: X,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o));
                    var n = B("transform"), i = e.instance.popper.style, r = i.top, s = i.left, d = i[n];
                    i.top = "", i.left = "", i[n] = "";
                    var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r, i.left = s, i[n] = d, t.boundaries = a;
                    var l = t.priority, f = e.offsets.popper, m = {
                        primary: function(e) {
                            var o = f[e];
                            return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])), ae({}, e, o);
                        },
                        secondary: function(e) {
                            var o = "right" === e ? "left" : "top", n = f[o];
                            return f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ("right" === e ? f.width : f.height))), 
                            ae({}, o, n);
                        }
                    };
                    return l.forEach(function(e) {
                        var t = -1 === [ "left", "top" ].indexOf(e) ? "secondary" : "primary";
                        f = le({}, f, m[t](e));
                    }), e.offsets.popper = f, e;
                },
                priority: [ "left", "right", "top", "bottom" ],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split("-")[0], r = Z, p = -1 !== [ "top", "bottom" ].indexOf(i), s = p ? "right" : "bottom", d = p ? "left" : "top", a = p ? "width" : "height";
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), 
                    e;
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    var n;
                    if (!q(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var i = o.element;
                    if ("string" == typeof i) {
                        if (i = e.instance.popper.querySelector(i), !i) return e;
                    } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), 
                    e;
                    var r = e.placement.split("-")[0], p = e.offsets, s = p.popper, d = p.reference, a = -1 !== [ "left", "right" ].indexOf(r), l = a ? "height" : "width", f = a ? "Top" : "Left", m = f.toLowerCase(), h = a ? "left" : "top", c = a ? "bottom" : "right", u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), 
                    e.offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2, y = t(e.instance.popper), w = parseFloat(y["margin" + f], 10), E = parseFloat(y["border" + f + "Width"], 10), v = b - e.offsets.popper[m] - w - E;
                    return v = $(J(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, 
                    ae(n, m, Q(v)), ae(n, h, ""), n), e;
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), n = e.placement.split("-")[0], i = T(n), r = e.placement.split("-")[1] || "", p = [];
                    switch (t.behavior) {
                      case he.FLIP:
                        p = [ n, i ];
                        break;

                      case he.CLOCKWISE:
                        p = z(n);
                        break;

                      case he.COUNTERCLOCKWISE:
                        p = z(n, !0);
                        break;

                      default:
                        p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (n !== s || p.length === d + 1) return e;
                        n = e.placement.split("-")[0], i = T(n);
                        var a = e.offsets.popper, l = e.offsets.reference, f = Z, m = "left" === n && f(a.right) > f(l.left) || "right" === n && f(a.left) < f(l.right) || "top" === n && f(a.bottom) > f(l.top) || "bottom" === n && f(a.top) < f(l.bottom), h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top), u = f(a.bottom) > f(o.bottom), b = "left" === n && h || "right" === n && c || "top" === n && g || "bottom" === n && u, y = -1 !== [ "top", "bottom" ].indexOf(n), w = !!t.flipVariations && (y && "start" === r && h || y && "end" === r && c || !y && "start" === r && g || !y && "end" === r && u);
                        (m || b || w) && (e.flipped = !0, (m || b) && (n = p[d + 1]), w && (r = G(r)), e.placement = n + (r ? "-" + r : ""), 
                        e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), 
                        e = P(e.instance.modifiers, e, "flip"));
                    }), e;
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement, o = t.split("-")[0], n = e.offsets, i = n.popper, r = n.reference, p = -1 !== [ "left", "right" ].indexOf(o), s = -1 === [ "top", "left" ].indexOf(o);
                    return i[p ? "left" : "top"] = r[o] - (s ? i[p ? "width" : "height"] : 0), e.placement = T(t), 
                    e.offsets.popper = g(i), e;
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!q(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference, o = D(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name;
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
                    }
                    return e;
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x, n = t.y, i = e.offsets.popper, r = D(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name;
                    }).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = {
                        position: i.position
                    }, h = {
                        left: Z(i.left),
                        top: Q(i.top),
                        bottom: Q(i.bottom),
                        right: Z(i.right)
                    }, c = "bottom" === o ? "top" : "bottom", g = "right" === n ? "left" : "right", b = B("transform");
                    if (d = "bottom" == c ? -f.height + h.bottom : h.top, s = "right" == g ? -f.width + h.right : h.left, 
                    a && b) m[b] = "translate3d(" + s + "px, " + d + "px, 0)", m[c] = 0, m[g] = 0, m.willChange = "transform"; else {
                        var y = "bottom" == c ? -1 : 1, w = "right" == g ? -1 : 1;
                        m[c] = d * y, m[g] = s * w, m.willChange = c + ", " + g;
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), 
                    e;
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return j(e.instance.popper, e.styles), K(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), 
                    e;
                },
                onLoad: function(e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed), p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute("x-placement", p), j(t, {
                        position: o.positionFixed ? "fixed" : "absolute"
                    }), o;
                },
                gpuAcceleration: void 0
            }
        }
    }, ce;
});

!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("popper.js"), require("jquery")) : "function" == typeof define && define.amd ? define([ "exports", "popper.js", "jquery" ], e) : e(t.bootstrap = {}, t.Popper, t.jQuery);
}(this, function(t, u, g) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
    }
    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {}, e = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
            }))), e.forEach(function(t) {
                var e, n, i;
                e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i;
            });
        }
        return o;
    }
    u = u && u.hasOwnProperty("default") ? u.default : u, g = g && g.hasOwnProperty("default") ? g.default : g;
    var e = "transitionend";
    function n(t) {
        var e = this, n = !1;
        return g(this).one(_.TRANSITION_END, function() {
            n = !0;
        }), setTimeout(function() {
            n || _.triggerTransitionEnd(e);
        }, t), this;
    }
    var _ = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (;t += ~~(1e6 * Math.random()), document.getElementById(t); ) ;
            return t;
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : "";
            }
            return e && document.querySelector(e) ? e : null;
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var e = g(t).css("transition-duration"), n = g(t).css("transition-delay"), i = parseFloat(e), o = parseFloat(n);
            return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
        },
        reflow: function(t) {
            return t.offsetHeight;
        },
        triggerTransitionEnd: function(t) {
            g(t).trigger(e);
        },
        supportsTransitionEnd: function() {
            return Boolean(e);
        },
        isElement: function(t) {
            return (t[0] || t).nodeType;
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
                var o = n[i], r = e[i], s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
            }
            var a;
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        }
    };
    g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = {
        bindType: e,
        delegateType: e,
        handle: function(t) {
            if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
        }
    };
    var o = "alert", r = "bs.alert", a = "." + r, c = g.fn[o], h = {
        CLOSE: "close" + a,
        CLOSED: "closed" + a,
        CLICK_DATA_API: "click" + a + ".data-api"
    }, f = "alert", d = "fade", m = "show", p = function() {
        function i(t) {
            this._element = t;
        }
        var t = i.prototype;
        return t.close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
        }, t.dispose = function() {
            g.removeData(this._element, r), this._element = null;
        }, t._getRootElement = function(t) {
            var e = _.getSelectorFromElement(t), n = !1;
            return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), 
            n;
        }, t._triggerCloseEvent = function(t) {
            var e = g.Event(h.CLOSE);
            return g(t).trigger(e), e;
        }, t._removeElement = function(e) {
            var n = this;
            if (g(e).removeClass(m), g(e).hasClass(d)) {
                var t = _.getTransitionDurationFromElement(e);
                g(e).one(_.TRANSITION_END, function(t) {
                    return n._destroyElement(e, t);
                }).emulateTransitionEnd(t);
            } else this._destroyElement(e);
        }, t._destroyElement = function(t) {
            g(t).detach().trigger(h.CLOSED).remove();
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this), e = t.data(r);
                e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this);
            });
        }, i._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(), e.close(this);
            };
        }, s(i, null, [ {
            key: "VERSION",
            get: function() {
                return "4.2.1";
            }
        } ]), i;
    }();
    g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), 
    g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function() {
        return g.fn[o] = c, p._jQueryInterface;
    };
    var v = "button", E = "bs.button", y = "." + E, C = ".data-api", T = g.fn[v], S = "active", b = "btn", I = "focus", D = '[data-toggle^="button"]', w = '[data-toggle="buttons"]', A = 'input:not([type="hidden"])', N = ".active", O = ".btn", k = {
        CLICK_DATA_API: "click" + y + C,
        FOCUS_BLUR_DATA_API: "focus" + y + C + " blur" + y + C
    }, P = function() {
        function n(t) {
            this._element = t;
        }
        var t = n.prototype;
        return t.toggle = function() {
            var t = !0, e = !0, n = g(this._element).closest(w)[0];
            if (n) {
                var i = this._element.querySelector(A);
                if (i) {
                    if ("radio" === i.type) if (i.checked && this._element.classList.contains(S)) t = !1; else {
                        var o = n.querySelector(N);
                        o && g(o).removeClass(S);
                    }
                    if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                        i.checked = !this._element.classList.contains(S), g(i).trigger("change");
                    }
                    i.focus(), e = !1;
                }
            }
            e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), 
            t && g(this._element).toggleClass(S);
        }, t.dispose = function() {
            g.removeData(this._element, E), this._element = null;
        }, n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = g(this).data(E);
                t || (t = new n(this), g(this).data(E, t)), "toggle" === e && t[e]();
            });
        }, s(n, null, [ {
            key: "VERSION",
            get: function() {
                return "4.2.1";
            }
        } ]), n;
    }();
    g(document).on(k.CLICK_DATA_API, D, function(t) {
        t.preventDefault();
        var e = t.target;
        g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle");
    }).on(k.FOCUS_BLUR_DATA_API, D, function(t) {
        var e = g(t.target).closest(O)[0];
        g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
    }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function() {
        return g.fn[v] = T, P._jQueryInterface;
    };
    var L = "carousel", j = "bs.carousel", H = "." + j, R = ".data-api", U = g.fn[L], W = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }, x = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, F = "next", q = "prev", M = "left", K = "right", Q = {
        SLIDE: "slide" + H,
        SLID: "slid" + H,
        KEYDOWN: "keydown" + H,
        MOUSEENTER: "mouseenter" + H,
        MOUSELEAVE: "mouseleave" + H,
        TOUCHSTART: "touchstart" + H,
        TOUCHMOVE: "touchmove" + H,
        TOUCHEND: "touchend" + H,
        POINTERDOWN: "pointerdown" + H,
        POINTERUP: "pointerup" + H,
        DRAG_START: "dragstart" + H,
        LOAD_DATA_API: "load" + H + R,
        CLICK_DATA_API: "click" + H + R
    }, B = "carousel", V = "active", Y = "slide", X = "carousel-item-right", z = "carousel-item-left", G = "carousel-item-next", J = "carousel-item-prev", Z = "pointer-event", $ = ".active", tt = ".active.carousel-item", et = ".carousel-item", nt = ".carousel-item img", it = ".carousel-item-next, .carousel-item-prev", ot = ".carousel-indicators", rt = "[data-slide], [data-slide-to]", st = '[data-ride="carousel"]', at = {
        TOUCH: "touch",
        PEN: "pen"
    }, lt = function() {
        function r(t, e) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, 
            this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, 
            this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), 
            this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, 
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
        }
        var t = r.prototype;
        return t.next = function() {
            this._isSliding || this._slide(F);
        }, t.nextWhenVisible = function() {
            !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next();
        }, t.prev = function() {
            this._isSliding || this._slide(q);
        }, t.pause = function(t) {
            t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), 
            this.cycle(!0)), clearInterval(this._interval), this._interval = null;
        }, t.cycle = function(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), 
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
        }, t.to = function(t) {
            var e = this;
            this._activeElement = this._element.querySelector(tt);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) g(this._element).one(Q.SLID, function() {
                return e.to(t);
            }); else {
                if (n === t) return this.pause(), void this.cycle();
                var i = n < t ? F : q;
                this._slide(i, this._items[t]);
            }
        }, t.dispose = function() {
            g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, 
            this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, 
            this._activeElement = null, this._indicatorsElement = null;
        }, t._getConfig = function(t) {
            return t = l({}, W, t), _.typeCheckConfig(L, t, x), t;
        }, t._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                0 < e && this.prev(), e < 0 && this.next();
            }
        }, t._addEventListeners = function() {
            var e = this;
            this._config.keyboard && g(this._element).on(Q.KEYDOWN, function(t) {
                return e._keydown(t);
            }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function(t) {
                return e.pause(t);
            }).on(Q.MOUSELEAVE, function(t) {
                return e.cycle(t);
            }), this._addTouchEventListeners();
        }, t._addTouchEventListeners = function() {
            var n = this;
            if (this._touchSupported) {
                var e = function(t) {
                    n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX);
                }, i = function(t) {
                    n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), 
                    n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), 
                    n.touchTimeout = setTimeout(function(t) {
                        return n.cycle(t);
                    }, 500 + n._config.interval));
                };
                g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function(t) {
                    return t.preventDefault();
                }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function(t) {
                    return e(t);
                }), g(this._element).on(Q.POINTERUP, function(t) {
                    return i(t);
                }), this._element.classList.add(Z)) : (g(this._element).on(Q.TOUCHSTART, function(t) {
                    return e(t);
                }), g(this._element).on(Q.TOUCHMOVE, function(t) {
                    var e;
                    (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX;
                }), g(this._element).on(Q.TOUCHEND, function(t) {
                    return i(t);
                }));
            }
        }, t._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;

              case 39:
                t.preventDefault(), this.next();
            }
        }, t._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], 
            this._items.indexOf(t);
        }, t._getItemByDirection = function(t, e) {
            var n = t === F, i = t === q, o = this._getItemIndex(e), r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
            var s = (o + (t === q ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s];
        }, t._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t), i = this._getItemIndex(this._element.querySelector(tt)), o = g.Event(Q.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            });
            return g(this._element).trigger(o), o;
        }, t._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                var e = [].slice.call(this._indicatorsElement.querySelectorAll($));
                g(e).removeClass(V);
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && g(n).addClass(V);
            }
        }, t._slide = function(t, e) {
            var n, i, o, r = this, s = this._element.querySelector(tt), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval);
            if (o = t === F ? (n = z, i = G, M) : (n = X, i = J, K), l && g(l).hasClass(V)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                var u = g.Event(Q.SLID, {
                    relatedTarget: l,
                    direction: o,
                    from: a,
                    to: c
                });
                if (g(this._element).hasClass(Y)) {
                    g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
                    var f = parseInt(l.getAttribute("data-interval"), 10);
                    this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, 
                    f) : this._config.defaultInterval || this._config.interval;
                    var d = _.getTransitionDurationFromElement(s);
                    g(s).one(_.TRANSITION_END, function() {
                        g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), 
                        r._isSliding = !1, setTimeout(function() {
                            return g(r._element).trigger(u);
                        }, 0);
                    }).emulateTransitionEnd(d);
                } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u);
                h && this.cycle();
            }
        }, r._jQueryInterface = function(i) {
            return this.each(function() {
                var t = g(this).data(j), e = l({}, W, g(this).data());
                "object" == typeof i && (e = l({}, e, i));
                var n = "string" == typeof i ? i : e.slide;
                if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i) t.to(i); else if ("string" == typeof n) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]();
                } else e.interval && (t.pause(), t.cycle());
            });
        }, r._dataApiClickHandler = function(t) {
            var e = _.getSelectorFromElement(this);
            if (e) {
                var n = g(e)[0];
                if (n && g(n).hasClass(B)) {
                    var i = l({}, g(n).data(), g(this).data()), o = this.getAttribute("data-slide-to");
                    o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), 
                    t.preventDefault();
                }
            }
        }, s(r, null, [ {
            key: "VERSION",
            get: function() {
                return "4.2.1";
            }
        }, {
            key: "Default",
            get: function() {
                return W;
            }
        } ]), r;
    }();
    g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
            var i = g(t[e]);
            lt._jQueryInterface.call(i, i.data());
        }
    }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function() {
        return g.fn[L] = U, lt._jQueryInterface;
    };
    var ct = "collapse", ht = "bs.collapse", ut = "." + ht, ft = g.fn[ct], dt = {
        toggle: !0,
        parent: ""
    }, gt = {
        toggle: "boolean",
        parent: "(string|element)"
    }, _t = {
        SHOW: "show" + ut,
        SHOWN: "shown" + ut,
        HIDE: "hide" + ut,
        HIDDEN: "hidden" + ut,
        CLICK_DATA_API: "click" + ut + ".data-api"
    }, mt = "show", pt = "collapse", vt = "collapsing", Et = "collapsed", yt = "width", Ct = "height", Tt = ".show, .collapsing", St = '[data-toggle="collapse"]', bt = function() {
        function a(e, t) {
            this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), 
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
                var r = n[i], s = _.getSelectorFromElement(r), a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                    return t === e;
                });
                null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r));
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), 
            this._config.toggle && this.toggle();
        }
        var t = a.prototype;
        return t.toggle = function() {
            g(this._element).hasClass(mt) ? this.hide() : this.show();
        }, t.show = function() {
            var t, e, n = this;
            if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t) {
                return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt);
            })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
                var i = g.Event(_t.SHOW);
                if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
                    t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));
                    var o = this._getDimension();
                    g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(Et).attr("aria-expanded", !0), 
                    this.setTransitioning(!0);
                    var r = "scroll" + (o[0].toUpperCase() + o.slice(1)), s = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function() {
                        g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", 
                        n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN);
                    }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px";
                }
            }
        }, t.hide = function() {
            var t = this;
            if (!this._isTransitioning && g(this._element).hasClass(mt)) {
                var e = g.Event(_t.HIDE);
                if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), 
                    g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
                    var i = this._triggerArray.length;
                    if (0 < i) for (var o = 0; o < i; o++) {
                        var r = this._triggerArray[o], s = _.getSelectorFromElement(r);
                        if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(Et).attr("aria-expanded", !1);
                    }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var a = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function() {
                        t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN);
                    }).emulateTransitionEnd(a);
                }
            }
        }, t.setTransitioning = function(t) {
            this._isTransitioning = t;
        }, t.dispose = function() {
            g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, 
            this._triggerArray = null, this._isTransitioning = null;
        }, t._getConfig = function(t) {
            return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), 
            t;
        }, t._getDimension = function() {
            return g(this._element).hasClass(yt) ? yt : Ct;
        }, t._getParent = function() {
            var t, n = this;
            _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
            var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', i = [].slice.call(t.querySelectorAll(e));
            return g(i).each(function(t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [ e ]);
            }), t;
        }, t._addAriaAndCollapsedClass = function(t, e) {
            var n = g(t).hasClass(mt);
            e.length && g(e).toggleClass(Et, !n).attr("aria-expanded", n);
        }, a._getTargetFromElement = function(t) {
            var e = _.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null;
        }, a._jQueryInterface = function(i) {
            return this.each(function() {
                var t = g(this), e = t.data(ht), n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});
                if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), 
                t.data(ht, e)), "string" == typeof i) {
                    if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                    e[i]();
                }
            });
        }, s(a, null, [ {
            key: "VERSION",
            get: function() {
                return "4.2.1";
            }
        }, {
            key: "Default",
            get: function() {
                return dt;
            }
        } ]), a;
    }();
    g(document).on(_t.CLICK_DATA_API, St, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = g(this), e = _.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function() {
            var t = g(this), e = t.data(ht) ? "toggle" : n.data();
            bt._jQueryInterface.call(t, e);
        });
    }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function() {
        return g.fn[ct] = ft, bt._jQueryInterface;
    };
    var It = "dropdown", Dt = "bs.dropdown", wt = "." + Dt, At = ".data-api", Nt = g.fn[It], Ot = new RegExp("38|40|27"), kt = {
        HIDE: "hide" + wt,
        HIDDEN: "hidden" + wt,
        SHOW: "show" + wt,
        SHOWN: "shown" + wt,
        CLICK: "click" + wt,
        CLICK_DATA_API: "click" + wt + At,
        KEYDOWN_DATA_API: "keydown" + wt + At,
        KEYUP_DATA_API: "keyup" + wt + At
    }, Pt = "disabled", Lt = "show", jt = "dropup", Ht = "dropright", Rt = "dropleft", Ut = "dropdown-menu-right", Wt = "position-static", xt = '[data-toggle="dropdown"]', Ft = ".dropdown form", qt = ".dropdown-menu", Mt = ".navbar-nav", Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Qt = "top-start", Bt = "top-end", Vt = "bottom-start", Yt = "bottom-end", Xt = "right-start", zt = "left-start", Gt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }, Jt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }, Zt = function() {
        function c(t, e) {
            this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), 
            this._inNavbar = this._detectNavbar(), this._addEventListeners();
        }
        var t = c.prototype;
        return t.toggle = function() {
            if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
                var t = c._getParentFromElement(this._element), e = g(this._menu).hasClass(Lt);
                if (c._clearMenus(), !e) {
                    var n = {
                        relatedTarget: this._element
                    }, i = g.Event(kt.SHOW, n);
                    if (g(t).trigger(i), !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var o = this._element;
                            "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, 
                            "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), 
                            "scrollParent" !== this._config.boundary && g(t).addClass(Wt), this._popper = new u(o, this._menu, this._getPopperConfig());
                        }
                        "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), 
                        this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), 
                        g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n));
                    }
                }
            }
        }, t.show = function() {
            if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
                var t = {
                    relatedTarget: this._element
                }, e = g.Event(kt.SHOW, t), n = c._getParentFromElement(this._element);
                g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)));
            }
        }, t.hide = function() {
            if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
                var t = {
                    relatedTarget: this._element
                }, e = g.Event(kt.HIDE, t), n = c._getParentFromElement(this._element);
                g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)));
            }
        }, t.dispose = function() {
            g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, 
            (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
        }, t.update = function() {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
        }, t._addEventListeners = function() {
            var e = this;
            g(this._element).on(kt.CLICK, function(t) {
                t.preventDefault(), t.stopPropagation(), e.toggle();
            });
        }, t._getConfig = function(t) {
            return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), 
            t;
        }, t._getMenuElement = function() {
            if (!this._menu) {
                var t = c._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(qt));
            }
            return this._menu;
        }, t._getPlacement = function() {
            var t = g(this._element.parentNode), e = Vt;
            return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(Ut) && (e = Bt)) : t.hasClass(Ht) ? e = Xt : t.hasClass(Rt) ? e = zt : g(this._menu).hasClass(Ut) && (e = Yt), 
            e;
        }, t._detectNavbar = function() {
            return 0 < g(this._element).closest(".navbar").length;
        }, t._getPopperConfig = function() {
            var e = this, t = {};
            "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = l({}, t.offsets, e._config.offset(t.offsets) || {}), t;
            } : t.offset = this._config.offset;
            var n = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: t,
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (n.modifiers.applyStyle = {
                enabled: !1
            }), n;
        }, c._jQueryInterface = function(e) {
            return this.each(function() {
                var t = g(this).data(Dt);
                if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Dt, t)), 
                "string" == typeof e) {
                    if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                    t[e]();
                }
            });
        }, c._clearMenus = function(t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(xt)), n = 0, i = e.length; n < i; n++) {
                var o = c._getParentFromElement(e[n]), r = g(e[n]).data(Dt), s = {
                    relatedTarget: e[n]
                };
                if (t && "click" === t.type && (s.clickEvent = t), r) {
                    var a = r._menu;
                    if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                        var l = g.Event(kt.HIDE, s);
                        g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), 
                        e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)));
                    }
                }
            }
        }, c._getParentFromElement = function(t) {
            var e, n = _.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)), e || t.parentNode;
        }, c._dataApiKeydownHandler = function(t) {
            if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), 
            t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) {
                var e = c._getParentFromElement(this), n = g(e).hasClass(Lt);
                if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                    var i = [].slice.call(e.querySelectorAll(Kt));
                    if (0 !== i.length) {
                        var o = i.indexOf(t.target);
                        38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), 
                        i[o].focus();
                    }
                } else {
                    if (27 === t.which) {
                        var r = e.querySelector(xt);
                        g(r).trigger("focus");
                    }
                    g(this).trigger("click");
                }
            }
        }, s(c, null, [ {
            key: "VERSION",
            get: function() {
                return "4.2.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Gt;
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Jt;
            }
        } ]), c;
    }();
    g(document).on(kt.KEYDOWN_DATA_API, xt, Zt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Zt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Zt._clearMenus).on(kt.CLICK_DATA_API, xt, function(t) {
        t.preventDefault(), t.stopPropagation(), Zt._jQueryInterface.call(g(this), "toggle");
    }).on(kt.CLICK_DATA_API, Ft, function(t) {
        t.stopPropagation();
    }), g.fn[It] = Zt._jQueryInterface, g.fn[It].Constructor = Zt, g.fn[It].noConflict = function() {
        return g.fn[It] = Nt, Zt._jQueryInterface;
    };
    var $t = "modal", te = "bs.modal", ee = "." + te, ne = g.fn[$t], ie = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }, oe = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }, re = {
        HIDE: "hide" + ee,
        HIDDEN: "hidden" + ee,
        SHOW: "show" + ee,
        SHOWN: "shown" + ee,
        FOCUSIN: "focusin" + ee,
        RESIZE: "resize" + ee,
        CLICK_DISMISS: "click.dismiss" + ee,
        KEYDOWN_DISMISS: "keydown.dismiss" + ee,
        MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
        CLICK_DATA_API: "click" + ee + ".data-api"
    }, se = "modal-scrollbar-measure", ae = "modal-backdrop", le = "modal-open", ce = "fade", he = "show", ue = ".modal-dialog", fe = '[data-toggle="modal"]', de = '[data-dismiss="modal"]', ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _e = ".sticky-top", me = function() {
        function o(t, e) {
            this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(ue), 
            this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, 
            this._isTransitioning = !1, this._scrollbarWidth = 0;
        }
        var t = o.prototype;
        return t.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t);
        }, t.show = function(t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
                g(this._element).hasClass(ce) && (this._isTransitioning = !0);
                var n = g.Event(re.SHOW, {
                    relatedTarget: t
                });
                g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, 
                this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), 
                this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, de, function(t) {
                    return e.hide(t);
                }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function() {
                    g(e._element).one(re.MOUSEUP_DISMISS, function(t) {
                        g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                    });
                }), this._showBackdrop(function() {
                    return e._showElement(t);
                }));
            }
        }, t.hide = function(t) {
            var e = this;
            if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                var n = g.Event(re.HIDE);
                if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = g(this._element).hasClass(ce);
                    if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), 
                    g(document).off(re.FOCUSIN), g(this._element).removeClass(he), g(this._element).off(re.CLICK_DISMISS), 
                    g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) {
                        var o = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function(t) {
                            return e._hideModal(t);
                        }).emulateTransitionEnd(o);
                    } else this._hideModal();
                }
            }
        }, t.dispose = function() {
            [ window, this._element, this._dialog ].forEach(function(t) {
                return g(t).off(ee);
            }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, 
            this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, 
            this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, 
            this._scrollbarWidth = null;
        }, t.handleUpdate = function() {
            this._adjustDialog();
        }, t._getConfig = function(t) {
            return t = l({}, ie, t), _.typeCheckConfig($t, t, oe), t;
        }, t._showElement = function(t) {
            var e = this, n = g(this._element).hasClass(ce);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), 
            this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), 
            this._element.setAttribute("aria-modal", !0), this._element.scrollTop = 0, n && _.reflow(this._element), 
            g(this._element).addClass(he), this._config.focus && this._enforceFocus();
            var i = g.Event(re.SHOWN, {
                relatedTarget: t
            }), o = function() {
                e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i);
            };
            if (n) {
                var r = _.getTransitionDurationFromElement(this._dialog);
                g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
            } else o();
        }, t._enforceFocus = function() {
            var e = this;
            g(document).off(re.FOCUSIN).on(re.FOCUSIN, function(t) {
                document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus();
            });
        }, t._setEscapeEvent = function() {
            var e = this;
            this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function(t) {
                27 === t.which && (t.preventDefault(), e.hide());
            }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS);
        }, t._setResizeEvent = function() {
            var e = this;
            this._isShown ? g(window).on(re.RESIZE, function(t) {
                return e.handleUpdate(t);
            }) : g(window).off(re.RESIZE);
        }, t._hideModal = function() {
            var t = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), 
            this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                g(document.body).removeClass(le), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN);
            });
        }, t._removeBackdrop = function() {
            this._backdrop && (g(this._backdrop).remove(), this._backdrop = null);
        }, t._showBackdrop = function(t) {
            var e = this, n = g(this._element).hasClass(ce) ? ce : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = ae, 
                n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), 
                g(this._element).on(re.CLICK_DISMISS, function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
                }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(he), !t) return;
                if (!n) return void t();
                var i = _.getTransitionDurationFromElement(this._backdrop);
                g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
                g(this._backdrop).removeClass(he);
                var o = function() {
                    e._removeBackdrop(), t && t();
                };
                if (g(this._element).hasClass(ce)) {
                    var r = _.getTransitionDurationFromElement(this._backdrop);
                    g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
                } else o();
            } else t && t();
        }, t._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), 
            this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }, t._resetAdjustments = function() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }, t._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
        }, t._setScrollbar = function() {
            var o = this;
            if (this._isBodyOverflowing) {
                var t = [].slice.call(document.querySelectorAll(ge)), e = [].slice.call(document.querySelectorAll(_e));
                g(t).each(function(t, e) {
                    var n = e.style.paddingRight, i = g(e).css("padding-right");
                    g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
                }), g(e).each(function(t, e) {
                    var n = e.style.marginRight, i = g(e).css("margin-right");
                    g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
                });
                var n = document.body.style.paddingRight, i = g(document.body).css("padding-right");
                g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
            }
            g(document.body).addClass(le);
        }, t._resetScrollbar = function() {
            var t = [].slice.call(document.querySelectorAll(ge));
            g(t).each(function(t, e) {
                var n = g(e).data("padding-right");
                g(e).removeData("padding-right"), e.style.paddingRight = n || "";
            });
            var e = [].slice.call(document.querySelectorAll("" + _e));
            g(e).each(function(t, e) {
                var n = g(e).data("margin-right");
                "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right");
            });
            var n = g(document.body).data("padding-right");
            g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
        }, t._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = se, document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
        }, o._jQueryInterface = function(n, i) {
            return this.each(function() {
                var t = g(this).data(te), e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});
                if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n](i);
                } else e.show && t.show(i);
            });
        }, s(o, null, [ {
            key: "VERSION",
            get: function() {
                return "4.2.1";
            }
        }, {
            key: "Default",
            get: function() {
                return ie;
            }
        } ]), o;
    }();
    g(document).on(re.CLICK_DATA_API, fe, function(t) {
        var e, n = this, i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = g(e).one(re.SHOW, function(t) {
            t.isDefaultPrevented() || r.one(re.HIDDEN, function() {
                g(n).is(":visible") && n.focus();
            });
        });
        me._jQueryInterface.call(g(e), o, this);
    }), g.fn[$t] = me._jQueryInterface, g.fn[$t].Constructor = me, g.fn[$t].noConflict = function() {
        return g.fn[$t] = ne, me._jQueryInterface;
    };
    var pe = "tooltip", ve = "bs.tooltip", Ee = "." + ve, ye = g.fn[pe], Ce = "bs-tooltip", Te = new RegExp("(^|\\s)" + Ce + "\\S+", "g"), Se = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)"
    }, be = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }, Ie = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent"
    }, De = "show", we = "out", Ae = {
        HIDE: "hide" + Ee,
        HIDDEN: "hidden" + Ee,
        SHOW: "show" + Ee,
        SHOWN: "shown" + Ee,
        INSERTED: "inserted" + Ee,
        CLICK: "click" + Ee,
        FOCUSIN: "focusin" + Ee,
        FOCUSOUT: "focusout" + Ee,
        MOUSEENTER: "mouseenter" + Ee,
        MOUSELEAVE: "mouseleave" + Ee
    }, Ne = "fade", Oe = "show", ke = ".tooltip-inner", Pe = ".arrow", Le = "hover", je = "focus", He = "click", Re = "manual", Ue = function() {
        function i(t, e) {
            if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, 
            this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, 
            this._setListeners();
        }
        var t = i.prototype;
        return t.enable = function() {
            this._isEnabled = !0;
        }, t.disable = function() {
            this._isEnabled = !1;
        }, t.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled;
        }, t.toggle = function(t) {
            if (this._isEnabled) if (t) {
                var e = this.constructor.DATA_KEY, n = g(t.currentTarget).data(e);
                n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), 
                n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
            } else {
                if (g(this.getTipElement()).hasClass(Oe)) return void this._leave(null, this);
                this._enter(null, this);
            }
        }, t.dispose = function() {
            clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), 
            g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), 
            this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, 
            this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), 
            this._popper = null, this.element = null, this.config = null, this.tip = null;
        }, t.show = function() {
            var e = this;
            if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
            var t = g.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                g(this.element).trigger(t);
                var n = _.findShadowRoot(this.element), i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (t.isDefaultPrevented() || !i) return;
                var o = this.getTipElement(), r = _.getUID(this.constructor.NAME);
                o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), 
                this.config.animation && g(o).addClass(Ne);
                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement, a = this._getAttachment(s);
                this.addAttachmentClass(a);
                var l = this._getContainer();
                g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), 
                g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, {
                    placement: a,
                    modifiers: {
                        offset: {
                            offset: this.config.offset
                        },
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: Pe
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                    },
                    onUpdate: function(t) {
                        return e._handlePopperPlacementChange(t);
                    }
                }), g(o).addClass(Oe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                var c = function() {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === we && e._leave(null, e);
                };
                if (g(this.tip).hasClass(Ne)) {
                    var h = _.getTransitionDurationFromElement(this.tip);
                    g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
                } else c();
            }
        }, t.hide = function(t) {
            var e = this, n = this.getTipElement(), i = g.Event(this.constructor.Event.HIDE), o = function() {
                e._hoverState !== De && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), 
                e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), 
                null !== e._popper && e._popper.destroy(), t && t();
            };
            if (g(this.element).trigger(i), !i.isDefaultPrevented()) {
                if (g(n).removeClass(Oe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), 
                this._activeTrigger[He] = !1, this._activeTrigger[je] = !1, this._activeTrigger[Le] = !1, 
                g(this.tip).hasClass(Ne)) {
                    var r = _.getTransitionDurationFromElement(n);
                    g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
                } else o();
                this._hoverState = "";
            }
        }, t.update = function() {
            null !== this._popper && this._popper.scheduleUpdate();
        }, t.isWithContent = function() {
            return Boolean(this.getTitle());
        }, t.addAttachmentClass = function(t) {
            g(this.getTipElement()).addClass(Ce + "-" + t);
        }, t.getTipElement = function() {
            return this.tip = this.tip || g(this.config.template)[0], this.tip;
        }, t.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(g(t.querySelectorAll(ke)), this.getTitle()), g(t).removeClass(Ne + " " + Oe);
        }, t.setElementContent = function(t, e) {
            var n = this.config.html;
            "object" == typeof e && (e.nodeType || e.jquery) ? n ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text()) : t[n ? "html" : "text"](e);
        }, t.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), 
            t;
        }, t._getContainer = function() {
            return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container);
        }, t._getAttachment = function(t) {
            return be[t.toUpperCase()];
        }, t._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(t) {
                if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                    return i.toggle(t);
                }); else if (t !== Re) {
                    var e = t === Le ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN, n = t === Le ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    g(i.element).on(e, i.config.selector, function(t) {
                        return i._enter(t);
                    }).on(n, i.config.selector, function(t) {
                        return i._leave(t);
                    });
                }
            }), g(this.element).closest(".modal").on("hide.bs.modal", function() {
                i.element && i.hide();
            }), this.config.selector ? this.config = l({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle();
        }, t._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), 
            this.element.setAttribute("title", ""));
        }, t._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), 
            g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? je : Le] = !0), 
            g(e.getTipElement()).hasClass(Oe) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout), 
            e._hoverState = De, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                e._hoverState === De && e.show();
            }, e.config.delay.show) : e.show());
        }, t._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), 
            g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? je : Le] = !1), 
            e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = we, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                e._hoverState === we && e.hide();
            }, e.config.delay.hide) : e.hide());
        }, t._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
            return !1;
        }, t._getConfig = function(t) {
            return "number" == typeof (t = l({}, this.constructor.Default, g(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), 
            _.typeCheckConfig(pe, t, this.constructor.DefaultType), t;
        }, t._getDelegateConfig = function() {
            var t = {};
            if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t;
        }, t._cleanTipClass = function() {
            var t = g(this.getTipElement()), e = t.attr("class").match(Te);
            null !== e && e.length && t.removeClass(e.join(""));
        }, t._handlePopperPlacementChange = function(t) {
            var e = t.instance;
            this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
        }, t._fixTransition = function() {
            var t = this.getTipElement(), e = this.config.animation;
            null === t.getAttribute("x-placement") && (g(t).removeClass(Ne), this.config.animation = !1, 
            this.hide(), this.show(), this.config.animation = e);
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this).data(ve), e = "object" == typeof n && n;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(ve, t)), 
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]();
                }
            });
        }, s(i, null, [ {
            key: "VERSION",
            get: function() {
                return "4.2.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Ie;
            }
        }, {
            key: "NAME",
            get: function() {
                return pe;
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return ve;
            }
        }, {
            key: "Event",
            get: function() {
                return Ae;
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Ee;
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Se;
            }
        } ]), i;
    }();
    g.fn[pe] = Ue._jQueryInterface, g.fn[pe].Constructor = Ue, g.fn[pe].noConflict = function() {
        return g.fn[pe] = ye, Ue._jQueryInterface;
    };
    var We = "popover", xe = "bs.popover", Fe = "." + xe, qe = g.fn[We], Me = "bs-popover", Ke = new RegExp("(^|\\s)" + Me + "\\S+", "g"), Qe = l({}, Ue.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), Be = l({}, Ue.DefaultType, {
        content: "(string|element|function)"
    }), Ve = "fade", Ye = "show", Xe = ".popover-header", ze = ".popover-body", Ge = {
        HIDE: "hide" + Fe,
        HIDDEN: "hidden" + Fe,
        SHOW: "show" + Fe,
        SHOWN: "shown" + Fe,
        INSERTED: "inserted" + Fe,
        CLICK: "click" + Fe,
        FOCUSIN: "focusin" + Fe,
        FOCUSOUT: "focusout" + Fe,
        MOUSEENTER: "mouseenter" + Fe,
        MOUSELEAVE: "mouseleave" + Fe
    }, Je = function(t) {
        var e, n;
        function i() {
            return t.apply(this, arguments) || this;
        }
        n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
        var o = i.prototype;
        return o.isWithContent = function() {
            return this.getTitle() || this._getContent();
        }, o.addAttachmentClass = function(t) {
            g(this.getTipElement()).addClass(Me + "-" + t);
        }, o.getTipElement = function() {
            return this.tip = this.tip || g(this.config.template)[0], this.tip;
        }, o.setContent = function() {
            var t = g(this.getTipElement());
            this.setElementContent(t.find(Xe), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ze), e), 
            t.removeClass(Ve + " " + Ye);
        }, o._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content;
        }, o._cleanTipClass = function() {
            var t = g(this.getTipElement()), e = t.attr("class").match(Ke);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this).data(xe), e = "object" == typeof n ? n : null;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(xe, t)), 
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]();
                }
            });
        }, s(i, null, [ {
            key: "VERSION",
            get: function() {
                return "4.2.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Qe;
            }
        }, {
            key: "NAME",
            get: function() {
                return We;
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return xe;
            }
        }, {
            key: "Event",
            get: function() {
                return Ge;
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Fe;
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Be;
            }
        } ]), i;
    }(Ue);
    g.fn[We] = Je._jQueryInterface, g.fn[We].Constructor = Je, g.fn[We].noConflict = function() {
        return g.fn[We] = qe, Je._jQueryInterface;
    };
    var Ze = "scrollspy", $e = "bs.scrollspy", tn = "." + $e, en = g.fn[Ze], nn = {
        offset: 10,
        method: "auto",
        target: ""
    }, on = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }, rn = {
        ACTIVATE: "activate" + tn,
        SCROLL: "scroll" + tn,
        LOAD_DATA_API: "load" + tn + ".data-api"
    }, sn = "dropdown-item", an = "active", ln = '[data-spy="scroll"]', cn = ".nav, .list-group", hn = ".nav-link", un = ".nav-item", fn = ".list-group-item", dn = ".dropdown", gn = ".dropdown-item", _n = ".dropdown-toggle", mn = "offset", pn = "position", vn = function() {
        function n(t, e) {
            var n = this;
            this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), 
            this._selector = this._config.target + " " + hn + "," + this._config.target + " " + fn + "," + this._config.target + " " + gn, 
            this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, 
            g(this._scrollElement).on(rn.SCROLL, function(t) {
                return n._process(t);
            }), this.refresh(), this._process();
        }
        var t = n.prototype;
        return t.refresh = function() {
            var e = this, t = this._scrollElement === this._scrollElement.window ? mn : pn, o = "auto" === this._config.method ? t : this._config.method, r = o === pn ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), 
            [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                var e, n = _.getSelectorFromElement(t);
                if (n && (e = document.querySelector(n)), e) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height) return [ g(e)[o]().top + r, n ];
                }
                return null;
            }).filter(function(t) {
                return t;
            }).sort(function(t, e) {
                return t[0] - e[0];
            }).forEach(function(t) {
                e._offsets.push(t[0]), e._targets.push(t[1]);
            });
        }, t.dispose = function() {
            g.removeData(this._element, $e), g(this._scrollElement).off(tn), this._element = null, 
            this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, 
            this._targets = null, this._activeTarget = null, this._scrollHeight = null;
        }, t._getConfig = function(t) {
            if ("string" != typeof (t = l({}, nn, "object" == typeof t && t ? t : {})).target) {
                var e = g(t.target).attr("id");
                e || (e = _.getUID(Ze), g(t.target).attr("id", e)), t.target = "#" + e;
            }
            return _.typeCheckConfig(Ze, t, on), t;
        }, t._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }, t._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }, t._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }, t._process = function() {
            var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), n <= t) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i);
            } else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, 
                void this._clear();
                for (var o = this._offsets.length; o--; ) {
                    this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
                }
            }
        }, t._activate = function(e) {
            this._activeTarget = e, this._clear();
            var t = this._selector.split(",").map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
            }), n = g([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass(sn) ? (n.closest(dn).find(_n).addClass(an), n.addClass(an)) : (n.addClass(an), 
            n.parents(cn).prev(hn + ", " + fn).addClass(an), n.parents(cn).prev(un).children(hn).addClass(an)), 
            g(this._scrollElement).trigger(rn.ACTIVATE, {
                relatedTarget: e
            });
        }, t._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                return t.classList.contains(an);
            }).forEach(function(t) {
                return t.classList.remove(an);
            });
        }, n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = g(this).data($e);
                if (t || (t = new n(this, "object" == typeof e && e), g(this).data($e, t)), "string" == typeof e) {
                    if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                    t[e]();
                }
            });
        }, s(n, null, [ {
            key: "VERSION",
            get: function() {
                return "4.2.1";
            }
        }, {
            key: "Default",
            get: function() {
                return nn;
            }
        } ]), n;
    }();
    g(window).on(rn.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(ln)), e = t.length; e--; ) {
            var n = g(t[e]);
            vn._jQueryInterface.call(n, n.data());
        }
    }), g.fn[Ze] = vn._jQueryInterface, g.fn[Ze].Constructor = vn, g.fn[Ze].noConflict = function() {
        return g.fn[Ze] = en, vn._jQueryInterface;
    };
    var En = "bs.tab", yn = "." + En, Cn = g.fn.tab, Tn = {
        HIDE: "hide" + yn,
        HIDDEN: "hidden" + yn,
        SHOW: "show" + yn,
        SHOWN: "shown" + yn,
        CLICK_DATA_API: "click" + yn + ".data-api"
    }, Sn = "dropdown-menu", bn = "active", In = "disabled", Dn = "fade", wn = "show", An = ".dropdown", Nn = ".nav, .list-group", On = ".active", kn = "> li > .active", Pn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Ln = ".dropdown-toggle", jn = "> .dropdown-menu .active", Hn = function() {
        function i(t) {
            this._element = t;
        }
        var t = i.prototype;
        return t.show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(bn) || g(this._element).hasClass(In))) {
                var t, i, e = g(this._element).closest(Nn)[0], o = _.getSelectorFromElement(this._element);
                if (e) {
                    var r = "UL" === e.nodeName || "OL" === e.nodeName ? kn : On;
                    i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
                }
                var s = g.Event(Tn.HIDE, {
                    relatedTarget: this._element
                }), a = g.Event(Tn.SHOW, {
                    relatedTarget: i
                });
                if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    o && (t = document.querySelector(o)), this._activate(this._element, e);
                    var l = function() {
                        var t = g.Event(Tn.HIDDEN, {
                            relatedTarget: n._element
                        }), e = g.Event(Tn.SHOWN, {
                            relatedTarget: i
                        });
                        g(i).trigger(t), g(n._element).trigger(e);
                    };
                    t ? this._activate(t, t.parentNode, l) : l();
                }
            }
        }, t.dispose = function() {
            g.removeData(this._element, En), this._element = null;
        }, t._activate = function(t, e, n) {
            var i = this, o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(On) : g(e).find(kn))[0], r = n && o && g(o).hasClass(Dn), s = function() {
                return i._transitionComplete(t, o, n);
            };
            if (o && r) {
                var a = _.getTransitionDurationFromElement(o);
                g(o).removeClass(wn).one(_.TRANSITION_END, s).emulateTransitionEnd(a);
            } else s();
        }, t._transitionComplete = function(t, e, n) {
            if (e) {
                g(e).removeClass(bn);
                var i = g(e.parentNode).find(jn)[0];
                i && g(i).removeClass(bn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
            }
            if (g(t).addClass(bn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), 
            _.reflow(t), g(t).addClass(wn), t.parentNode && g(t.parentNode).hasClass(Sn)) {
                var o = g(t).closest(An)[0];
                if (o) {
                    var r = [].slice.call(o.querySelectorAll(Ln));
                    g(r).addClass(bn);
                }
                t.setAttribute("aria-expanded", !0);
            }
            n && n();
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this), e = t.data(En);
                if (e || (e = new i(this), t.data(En, e)), "string" == typeof n) {
                    if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]();
                }
            });
        }, s(i, null, [ {
            key: "VERSION",
            get: function() {
                return "4.2.1";
            }
        } ]), i;
    }();
    g(document).on(Tn.CLICK_DATA_API, Pn, function(t) {
        t.preventDefault(), Hn._jQueryInterface.call(g(this), "show");
    }), g.fn.tab = Hn._jQueryInterface, g.fn.tab.Constructor = Hn, g.fn.tab.noConflict = function() {
        return g.fn.tab = Cn, Hn._jQueryInterface;
    };
    var Rn = "toast", Un = "bs.toast", Wn = "." + Un, xn = g.fn[Rn], Fn = {
        CLICK_DISMISS: "click.dismiss" + Wn,
        HIDE: "hide" + Wn,
        HIDDEN: "hidden" + Wn,
        SHOW: "show" + Wn,
        SHOWN: "shown" + Wn
    }, qn = "fade", Mn = "hide", Kn = "show", Qn = "showing", Bn = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, Vn = {
        animation: !0,
        autohide: !0,
        delay: 500
    }, Yn = '[data-dismiss="toast"]', Xn = function() {
        function i(t, e) {
            this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
        }
        var t = i.prototype;
        return t.show = function() {
            var t = this;
            g(this._element).trigger(Fn.SHOW), this._config.animation && this._element.classList.add(qn);
            var e = function() {
                t._element.classList.remove(Qn), t._element.classList.add(Kn), g(t._element).trigger(Fn.SHOWN), 
                t._config.autohide && t.hide();
            };
            if (this._element.classList.remove(Mn), this._element.classList.add(Qn), this._config.animation) {
                var n = _.getTransitionDurationFromElement(this._element);
                g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
            } else e();
        }, t.hide = function(t) {
            var e = this;
            this._element.classList.contains(Kn) && (g(this._element).trigger(Fn.HIDE), t ? this._close() : this._timeout = setTimeout(function() {
                e._close();
            }, this._config.delay));
        }, t.dispose = function() {
            clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Kn) && this._element.classList.remove(Kn), 
            g(this._element).off(Fn.CLICK_DISMISS), g.removeData(this._element, Un), this._element = null, 
            this._config = null;
        }, t._getConfig = function(t) {
            return t = l({}, Vn, g(this._element).data(), "object" == typeof t && t ? t : {}), 
            _.typeCheckConfig(Rn, t, this.constructor.DefaultType), t;
        }, t._setListeners = function() {
            var t = this;
            g(this._element).on(Fn.CLICK_DISMISS, Yn, function() {
                return t.hide(!0);
            });
        }, t._close = function() {
            var t = this, e = function() {
                t._element.classList.add(Mn), g(t._element).trigger(Fn.HIDDEN);
            };
            if (this._element.classList.remove(Kn), this._config.animation) {
                var n = _.getTransitionDurationFromElement(this._element);
                g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
            } else e();
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this), e = t.data(Un);
                if (e || (e = new i(this, "object" == typeof n && n), t.data(Un, e)), "string" == typeof n) {
                    if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n](this);
                }
            });
        }, s(i, null, [ {
            key: "VERSION",
            get: function() {
                return "4.2.1";
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Bn;
            }
        } ]), i;
    }();
    g.fn[Rn] = Xn._jQueryInterface, g.fn[Rn].Constructor = Xn, g.fn[Rn].noConflict = function() {
        return g.fn[Rn] = xn, Xn._jQueryInterface;
    }, function() {
        if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = g.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Zt, 
    t.Modal = me, t.Popover = Je, t.Scrollspy = vn, t.Tab = Hn, t.Toast = Xn, t.Tooltip = Ue, 
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
});

!function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : "object" == typeof module && module.exports ? module.exports = function(b, c) {
        return void 0 === c && (c = "undefined" != typeof window ? require("jquery") : require("jquery")(b)), 
        a(c), c;
    } : a(jQuery);
}(function(a) {
    var b = function() {
        if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
        var b;
        return function() {
            if (!b || !b.requirejs) {
                b ? c = b : b = {};
                var a, c, d;
                !function(b) {
                    function e(a, b) {
                        return v.call(a, b);
                    }
                    function f(a, b) {
                        var c, d, e, f, g, h, i, j, k, l, m, n, o = b && b.split("/"), p = t.map, q = p && p["*"] || {};
                        if (a) {
                            for (a = a.split("/"), g = a.length - 1, t.nodeIdCompat && x.test(a[g]) && (a[g] = a[g].replace(x, "")), 
                            "." === a[0].charAt(0) && o && (n = o.slice(0, o.length - 1), a = n.concat(a)), 
                            k = 0; k < a.length; k++) if ("." === (m = a[k])) a.splice(k, 1), k -= 1; else if (".." === m) {
                                if (0 === k || 1 === k && ".." === a[2] || ".." === a[k - 1]) continue;
                                k > 0 && (a.splice(k - 1, 2), k -= 2);
                            }
                            a = a.join("/");
                        }
                        if ((o || q) && p) {
                            for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                                if (d = c.slice(0, k).join("/"), o) for (l = o.length; l > 0; l -= 1) if ((e = p[o.slice(0, l).join("/")]) && (e = e[d])) {
                                    f = e, h = k;
                                    break;
                                }
                                if (f) break;
                                !i && q && q[d] && (i = q[d], j = k);
                            }
                            !f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"));
                        }
                        return a;
                    }
                    function g(a, c) {
                        return function() {
                            var d = w.call(arguments, 0);
                            return "string" != typeof d[0] && 1 === d.length && d.push(null), o.apply(b, d.concat([ a, c ]));
                        };
                    }
                    function h(a) {
                        return function(b) {
                            return f(b, a);
                        };
                    }
                    function i(a) {
                        return function(b) {
                            r[a] = b;
                        };
                    }
                    function j(a) {
                        if (e(s, a)) {
                            var c = s[a];
                            delete s[a], u[a] = !0, n.apply(b, c);
                        }
                        if (!e(r, a) && !e(u, a)) throw new Error("No " + a);
                        return r[a];
                    }
                    function k(a) {
                        var b, c = a ? a.indexOf("!") : -1;
                        return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [ b, a ];
                    }
                    function l(a) {
                        return a ? k(a) : [];
                    }
                    function m(a) {
                        return function() {
                            return t && t.config && t.config[a] || {};
                        };
                    }
                    var n, o, p, q, r = {}, s = {}, t = {}, u = {}, v = Object.prototype.hasOwnProperty, w = [].slice, x = /\.js$/;
                    p = function(a, b) {
                        var c, d = k(a), e = d[0], g = b[1];
                        return a = d[1], e && (e = f(e, g), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(g)) : f(a, g) : (a = f(a, g), 
                        d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
                            f: e ? e + "!" + a : a,
                            n: a,
                            pr: e,
                            p: c
                        };
                    }, q = {
                        require: function(a) {
                            return g(a);
                        },
                        exports: function(a) {
                            var b = r[a];
                            return void 0 !== b ? b : r[a] = {};
                        },
                        module: function(a) {
                            return {
                                id: a,
                                uri: "",
                                exports: r[a],
                                config: m(a)
                            };
                        }
                    }, n = function(a, c, d, f) {
                        var h, k, m, n, o, t, v, w = [], x = typeof d;
                        if (f = f || a, t = l(f), "undefined" === x || "function" === x) {
                            for (c = !c.length && d.length ? [ "require", "exports", "module" ] : c, o = 0; o < c.length; o += 1) if (n = p(c[o], t), 
                            "require" === (k = n.f)) w[o] = q.require(a); else if ("exports" === k) w[o] = q.exports(a), 
                            v = !0; else if ("module" === k) h = w[o] = q.module(a); else if (e(r, k) || e(s, k) || e(u, k)) w[o] = j(k); else {
                                if (!n.p) throw new Error(a + " missing " + k);
                                n.p.load(n.n, g(f, !0), i(k), {}), w[o] = r[k];
                            }
                            m = d ? d.apply(r[a], w) : void 0, a && (h && h.exports !== b && h.exports !== r[a] ? r[a] = h.exports : m === b && v || (r[a] = m));
                        } else a && (r[a] = d);
                    }, a = c = o = function(a, c, d, e, f) {
                        if ("string" == typeof a) return q[a] ? q[a](c) : j(p(a, l(c)).f);
                        if (!a.splice) {
                            if (t = a, t.deps && o(t.deps, t.callback), !c) return;
                            c.splice ? (a = c, c = d, d = null) : a = b;
                        }
                        return c = c || function() {}, "function" == typeof d && (d = e, e = f), e ? n(b, a, c, d) : setTimeout(function() {
                            n(b, a, c, d);
                        }, 4), o;
                    }, o.config = function(a) {
                        return o(a);
                    }, a._defined = r, d = function(a, b, c) {
                        if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
                        b.splice || (c = b, b = []), e(r, a) || e(s, a) || (s[a] = [ a, b, c ]);
                    }, d.amd = {
                        jQuery: !0
                    };
                }(), b.requirejs = a, b.require = c, b.define = d;
            }
        }(), b.define("almond", function() {}), b.define("jquery", [], function() {
            var b = a || $;
            return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), 
            b;
        }), b.define("select2/utils", [ "jquery" ], function(a) {
            function b(a) {
                var b = a.prototype, c = [];
                for (var d in b) {
                    "function" == typeof b[d] && ("constructor" !== d && c.push(d));
                }
                return c;
            }
            var c = {};
            c.Extend = function(a, b) {
                function c() {
                    this.constructor = a;
                }
                var d = {}.hasOwnProperty;
                for (var e in b) d.call(b, e) && (a[e] = b[e]);
                return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, 
                a;
            }, c.Decorate = function(a, c) {
                function d() {
                    var b = Array.prototype.unshift, d = c.prototype.constructor.length, e = a.prototype.constructor;
                    d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), 
                    e.apply(this, arguments);
                }
                function e() {
                    this.constructor = d;
                }
                var f = b(c), g = b(a);
                c.displayName = a.displayName, d.prototype = new e();
                for (var h = 0; h < g.length; h++) {
                    var i = g[h];
                    d.prototype[i] = a.prototype[i];
                }
                for (var j = (function(a) {
                    var b = function() {};
                    a in d.prototype && (b = d.prototype[a]);
                    var e = c.prototype[a];
                    return function() {
                        return Array.prototype.unshift.call(arguments, b), e.apply(this, arguments);
                    };
                }), k = 0; k < f.length; k++) {
                    var l = f[k];
                    d.prototype[l] = j(l);
                }
                return d;
            };
            var d = function() {
                this.listeners = {};
            };
            d.prototype.on = function(a, b) {
                this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [ b ];
            }, d.prototype.trigger = function(a) {
                var b = Array.prototype.slice, c = b.call(arguments, 1);
                this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), 
                c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), 
                "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
            }, d.prototype.invoke = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++) a[c].apply(this, b);
            }, c.Observable = d, c.generateChars = function(a) {
                for (var b = "", c = 0; c < a; c++) {
                    b += Math.floor(36 * Math.random()).toString(36);
                }
                return b;
            }, c.bind = function(a, b) {
                return function() {
                    a.apply(b, arguments);
                };
            }, c._convertData = function(a) {
                for (var b in a) {
                    var c = b.split("-"), d = a;
                    if (1 !== c.length) {
                        for (var e = 0; e < c.length; e++) {
                            var f = c[e];
                            f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), 
                            d = d[f];
                        }
                        delete a[b];
                    }
                }
                return a;
            }, c.hasScroll = function(b, c) {
                var d = a(c), e = c.style.overflowX, f = c.style.overflowY;
                return (e !== f || "hidden" !== f && "visible" !== f) && ("scroll" === e || "scroll" === f || (d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth));
            }, c.escapeMarkup = function(a) {
                var b = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function(a) {
                    return b[a];
                });
            }, c.appendMany = function(b, c) {
                if ("1.7" === a.fn.jquery.substr(0, 3)) {
                    var d = a();
                    a.map(c, function(a) {
                        d = d.add(a);
                    }), c = d;
                }
                b.append(c);
            }, c.__cache = {};
            var e = 0;
            return c.GetUniqueElementId = function(a) {
                var b = a.getAttribute("data-select2-id");
                return null == b && (a.id ? (b = a.id, a.setAttribute("data-select2-id", b)) : (a.setAttribute("data-select2-id", ++e), 
                b = e.toString())), b;
            }, c.StoreData = function(a, b, d) {
                var e = c.GetUniqueElementId(a);
                c.__cache[e] || (c.__cache[e] = {}), c.__cache[e][b] = d;
            }, c.GetData = function(b, d) {
                var e = c.GetUniqueElementId(b);
                return d ? c.__cache[e] && null != c.__cache[e][d] ? c.__cache[e][d] : a(b).data(d) : c.__cache[e];
            }, c.RemoveData = function(a) {
                var b = c.GetUniqueElementId(a);
                null != c.__cache[b] && delete c.__cache[b];
            }, c;
        }), b.define("select2/results", [ "jquery", "./utils" ], function(a, b) {
            function c(a, b, d) {
                this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this);
            }
            return b.Extend(c, b.Observable), c.prototype.render = function() {
                var b = a('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, 
                b;
            }, c.prototype.clear = function() {
                this.$results.empty();
            }, c.prototype.displayMessage = function(b) {
                var c = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'), e = this.options.get("translations").get(b.message);
                d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d);
            }, c.prototype.hideMessages = function() {
                this.$results.find(".select2-results__message").remove();
            }, c.prototype.append = function(a) {
                this.hideLoading();
                var b = [];
                if (null == a.results || 0 === a.results.length) return void (0 === this.$results.children().length && this.trigger("results:message", {
                    message: "noResults"
                }));
                a.results = this.sort(a.results);
                for (var c = 0; c < a.results.length; c++) {
                    var d = a.results[c], e = this.option(d);
                    b.push(e);
                }
                this.$results.append(b);
            }, c.prototype.position = function(a, b) {
                b.find(".select2-results").append(a);
            }, c.prototype.sort = function(a) {
                return this.options.get("sorter")(a);
            }, c.prototype.highlightFirstItem = function() {
                var a = this.$results.find(".select2-results__option[aria-selected]"), b = a.filter("[aria-selected=true]");
                b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), 
                this.ensureHighlightVisible();
            }, c.prototype.setClasses = function() {
                var c = this;
                this.data.current(function(d) {
                    var e = a.map(d, function(a) {
                        return a.id.toString();
                    });
                    c.$results.find(".select2-results__option[aria-selected]").each(function() {
                        var c = a(this), d = b.GetData(this, "data"), f = "" + d.id;
                        null != d.element && d.element.selected || null == d.element && a.inArray(f, e) > -1 ? c.attr("aria-selected", "true") : c.attr("aria-selected", "false");
                    });
                });
            }, c.prototype.showLoading = function(a) {
                this.hideLoading();
                var b = this.options.get("translations").get("searching"), c = {
                    disabled: !0,
                    loading: !0,
                    text: b(a)
                }, d = this.option(c);
                d.className += " loading-results", this.$results.prepend(d);
            }, c.prototype.hideLoading = function() {
                this.$results.find(".loading-results").remove();
            }, c.prototype.option = function(c) {
                var d = document.createElement("li");
                d.className = "select2-results__option";
                var e = {
                    role: "treeitem",
                    "aria-selected": "false"
                };
                c.disabled && (delete e["aria-selected"], e["aria-disabled"] = "true"), null == c.id && delete e["aria-selected"], 
                null != c._resultId && (d.id = c._resultId), c.title && (d.title = c.title), c.children && (e.role = "group", 
                e["aria-label"] = c.text, delete e["aria-selected"]);
                for (var f in e) {
                    var g = e[f];
                    d.setAttribute(f, g);
                }
                if (c.children) {
                    var h = a(d), i = document.createElement("strong");
                    i.className = "select2-results__group";
                    a(i);
                    this.template(c, i);
                    for (var j = [], k = 0; k < c.children.length; k++) {
                        var l = c.children[k], m = this.option(l);
                        j.push(m);
                    }
                    var n = a("<ul></ul>", {
                        "class": "select2-results__options select2-results__options--nested"
                    });
                    n.append(j), h.append(i), h.append(n);
                } else this.template(c, d);
                return b.StoreData(d, "data", c), d;
            }, c.prototype.bind = function(c, d) {
                var e = this, f = c.id + "-results";
                this.$results.attr("id", f), c.on("results:all", function(a) {
                    e.clear(), e.append(a.data), c.isOpen() && (e.setClasses(), e.highlightFirstItem());
                }), c.on("results:append", function(a) {
                    e.append(a.data), c.isOpen() && e.setClasses();
                }), c.on("query", function(a) {
                    e.hideMessages(), e.showLoading(a);
                }), c.on("select", function() {
                    c.isOpen() && (e.setClasses(), e.highlightFirstItem());
                }), c.on("unselect", function() {
                    c.isOpen() && (e.setClasses(), e.highlightFirstItem());
                }), c.on("open", function() {
                    e.$results.attr("aria-expanded", "true"), e.$results.attr("aria-hidden", "false"), 
                    e.setClasses(), e.ensureHighlightVisible();
                }), c.on("close", function() {
                    e.$results.attr("aria-expanded", "false"), e.$results.attr("aria-hidden", "true"), 
                    e.$results.removeAttr("aria-activedescendant");
                }), c.on("results:toggle", function() {
                    var a = e.getHighlightedResults();
                    0 !== a.length && a.trigger("mouseup");
                }), c.on("results:select", function() {
                    var a = e.getHighlightedResults();
                    if (0 !== a.length) {
                        var c = b.GetData(a[0], "data");
                        "true" == a.attr("aria-selected") ? e.trigger("close", {}) : e.trigger("select", {
                            data: c
                        });
                    }
                }), c.on("results:previous", function() {
                    var a = e.getHighlightedResults(), b = e.$results.find("[aria-selected]"), c = b.index(a);
                    if (!(c <= 0)) {
                        var d = c - 1;
                        0 === a.length && (d = 0);
                        var f = b.eq(d);
                        f.trigger("mouseenter");
                        var g = e.$results.offset().top, h = f.offset().top, i = e.$results.scrollTop() + (h - g);
                        0 === d ? e.$results.scrollTop(0) : h - g < 0 && e.$results.scrollTop(i);
                    }
                }), c.on("results:next", function() {
                    var a = e.getHighlightedResults(), b = e.$results.find("[aria-selected]"), c = b.index(a), d = c + 1;
                    if (!(d >= b.length)) {
                        var f = b.eq(d);
                        f.trigger("mouseenter");
                        var g = e.$results.offset().top + e.$results.outerHeight(!1), h = f.offset().top + f.outerHeight(!1), i = e.$results.scrollTop() + h - g;
                        0 === d ? e.$results.scrollTop(0) : h > g && e.$results.scrollTop(i);
                    }
                }), c.on("results:focus", function(a) {
                    a.element.addClass("select2-results__option--highlighted");
                }), c.on("results:message", function(a) {
                    e.displayMessage(a);
                }), a.fn.mousewheel && this.$results.on("mousewheel", function(a) {
                    var b = e.$results.scrollTop(), c = e.$results.get(0).scrollHeight - b + a.deltaY, d = a.deltaY > 0 && b - a.deltaY <= 0, f = a.deltaY < 0 && c <= e.$results.height();
                    d ? (e.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (e.$results.scrollTop(e.$results.get(0).scrollHeight - e.$results.height()), 
                    a.preventDefault(), a.stopPropagation());
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(c) {
                    var d = a(this), f = b.GetData(this, "data");
                    if ("true" === d.attr("aria-selected")) return void (e.options.get("multiple") ? e.trigger("unselect", {
                        originalEvent: c,
                        data: f
                    }) : e.trigger("close", {}));
                    e.trigger("select", {
                        originalEvent: c,
                        data: f
                    });
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(c) {
                    var d = b.GetData(this, "data");
                    e.getHighlightedResults().removeClass("select2-results__option--highlighted"), e.trigger("results:focus", {
                        data: d,
                        element: a(this)
                    });
                });
            }, c.prototype.getHighlightedResults = function() {
                return this.$results.find(".select2-results__option--highlighted");
            }, c.prototype.destroy = function() {
                this.$results.remove();
            }, c.prototype.ensureHighlightVisible = function() {
                var a = this.getHighlightedResults();
                if (0 !== a.length) {
                    var b = this.$results.find("[aria-selected]"), c = b.index(a), d = this.$results.offset().top, e = a.offset().top, f = this.$results.scrollTop() + (e - d), g = e - d;
                    f -= 2 * a.outerHeight(!1), c <= 2 ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || g < 0) && this.$results.scrollTop(f);
                }
            }, c.prototype.template = function(b, c) {
                var d = this.options.get("templateResult"), e = this.options.get("escapeMarkup"), f = d(b, c);
                null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f);
            }, c;
        }), b.define("select2/keys", [], function() {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            };
        }), b.define("select2/selection/base", [ "jquery", "../utils", "../keys" ], function(a, b, c) {
            function d(a, b) {
                this.$element = a, this.options = b, d.__super__.constructor.call(this);
            }
            return b.Extend(d, b.Observable), d.prototype.render = function() {
                var c = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != b.GetData(this.$element[0], "old-tabindex") ? this._tabindex = b.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), 
                c.attr("title", this.$element.attr("title")), c.attr("tabindex", this._tabindex), 
                this.$selection = c, c;
            }, d.prototype.bind = function(a, b) {
                var d = this, e = (a.id, a.id + "-results");
                this.container = a, this.$selection.on("focus", function(a) {
                    d.trigger("focus", a);
                }), this.$selection.on("blur", function(a) {
                    d._handleBlur(a);
                }), this.$selection.on("keydown", function(a) {
                    d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault();
                }), a.on("results:focus", function(a) {
                    d.$selection.attr("aria-activedescendant", a.data._resultId);
                }), a.on("selection:update", function(a) {
                    d.update(a.data);
                }), a.on("open", function() {
                    d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a);
                }), a.on("close", function() {
                    d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), 
                    d.$selection.removeAttr("aria-owns"), d.$selection.focus(), window.setTimeout(function() {
                        d.$selection.focus();
                    }, 0), d._detachCloseHandler(a);
                }), a.on("enable", function() {
                    d.$selection.attr("tabindex", d._tabindex);
                }), a.on("disable", function() {
                    d.$selection.attr("tabindex", "-1");
                });
            }, d.prototype._handleBlur = function(b) {
                var c = this;
                window.setTimeout(function() {
                    document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b);
                }, 1);
            }, d.prototype._attachCloseHandler = function(c) {
                a(document.body).on("mousedown.select2." + c.id, function(c) {
                    var d = a(c.target), e = d.closest(".select2");
                    a(".select2.select2-container--open").each(function() {
                        a(this), this != e[0] && b.GetData(this, "element").select2("close");
                    });
                });
            }, d.prototype._detachCloseHandler = function(b) {
                a(document.body).off("mousedown.select2." + b.id);
            }, d.prototype.position = function(a, b) {
                b.find(".selection").append(a);
            }, d.prototype.destroy = function() {
                this._detachCloseHandler(this.container);
            }, d.prototype.update = function(a) {
                throw new Error("The `update` method must be defined in child classes.");
            }, d;
        }), b.define("select2/selection/single", [ "jquery", "./base", "../utils", "../keys" ], function(a, b, c, d) {
            function e() {
                e.__super__.constructor.apply(this, arguments);
            }
            return c.Extend(e, b), e.prototype.render = function() {
                var a = e.__super__.render.call(this);
                return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), 
                a;
            }, e.prototype.bind = function(a, b) {
                var c = this;
                e.__super__.bind.apply(this, arguments);
                var d = a.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", d).attr("role", "textbox").attr("aria-readonly", "true"), 
                this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function(a) {
                    1 === a.which && c.trigger("toggle", {
                        originalEvent: a
                    });
                }), this.$selection.on("focus", function(a) {}), this.$selection.on("blur", function(a) {}), 
                a.on("focus", function(b) {
                    a.isOpen() || c.$selection.focus();
                });
            }, e.prototype.clear = function() {
                var a = this.$selection.find(".select2-selection__rendered");
                a.empty(), a.removeAttr("title");
            }, e.prototype.display = function(a, b) {
                var c = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(c(a, b));
            }, e.prototype.selectionContainer = function() {
                return a("<span></span>");
            }, e.prototype.update = function(a) {
                if (0 === a.length) return void this.clear();
                var b = a[0], c = this.$selection.find(".select2-selection__rendered"), d = this.display(b, c);
                c.empty().append(d), c.attr("title", b.title || b.text);
            }, e;
        }), b.define("select2/selection/multiple", [ "jquery", "./base", "../utils" ], function(a, b, c) {
            function d(a, b) {
                d.__super__.constructor.apply(this, arguments);
            }
            return c.Extend(d, b), d.prototype.render = function() {
                var a = d.__super__.render.call(this);
                return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), 
                a;
            }, d.prototype.bind = function(b, e) {
                var f = this;
                d.__super__.bind.apply(this, arguments), this.$selection.on("click", function(a) {
                    f.trigger("toggle", {
                        originalEvent: a
                    });
                }), this.$selection.on("click", ".select2-selection__choice__remove", function(b) {
                    if (!f.options.get("disabled")) {
                        var d = a(this), e = d.parent(), g = c.GetData(e[0], "data");
                        f.trigger("unselect", {
                            originalEvent: b,
                            data: g
                        });
                    }
                });
            }, d.prototype.clear = function() {
                var a = this.$selection.find(".select2-selection__rendered");
                a.empty(), a.removeAttr("title");
            }, d.prototype.display = function(a, b) {
                var c = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(c(a, b));
            }, d.prototype.selectionContainer = function() {
                return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
            }, d.prototype.update = function(a) {
                if (this.clear(), 0 !== a.length) {
                    for (var b = [], d = 0; d < a.length; d++) {
                        var e = a[d], f = this.selectionContainer(), g = this.display(e, f);
                        f.append(g), f.attr("title", e.title || e.text), c.StoreData(f[0], "data", e), b.push(f);
                    }
                    var h = this.$selection.find(".select2-selection__rendered");
                    c.appendMany(h, b);
                }
            }, d;
        }), b.define("select2/selection/placeholder", [ "../utils" ], function(a) {
            function b(a, b, c) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c);
            }
            return b.prototype.normalizePlaceholder = function(a, b) {
                return "string" == typeof b && (b = {
                    id: "",
                    text: b
                }), b;
            }, b.prototype.createPlaceholder = function(a, b) {
                var c = this.selectionContainer();
                return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), 
                c;
            }, b.prototype.update = function(a, b) {
                var c = 1 == b.length && b[0].id != this.placeholder.id;
                if (b.length > 1 || c) return a.call(this, b);
                this.clear();
                var d = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(d);
            }, b;
        }), b.define("select2/selection/allowClear", [ "jquery", "../keys", "../utils" ], function(a, b, c) {
            function d() {}
            return d.prototype.bind = function(a, b, c) {
                var d = this;
                a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), 
                this.$selection.on("mousedown", ".select2-selection__clear", function(a) {
                    d._handleClear(a);
                }), b.on("keypress", function(a) {
                    d._handleKeyboardClear(a, b);
                });
            }, d.prototype._handleClear = function(a, b) {
                if (!this.options.get("disabled")) {
                    var d = this.$selection.find(".select2-selection__clear");
                    if (0 !== d.length) {
                        b.stopPropagation();
                        var e = c.GetData(d[0], "data"), f = this.$element.val();
                        this.$element.val(this.placeholder.id);
                        var g = {
                            data: e
                        };
                        if (this.trigger("clear", g), g.prevented) return void this.$element.val(f);
                        for (var h = 0; h < e.length; h++) if (g = {
                            data: e[h]
                        }, this.trigger("unselect", g), g.prevented) return void this.$element.val(f);
                        this.$element.trigger("change"), this.trigger("toggle", {});
                    }
                }
            }, d.prototype._handleKeyboardClear = function(a, c, d) {
                d.isOpen() || c.which != b.DELETE && c.which != b.BACKSPACE || this._handleClear(c);
            }, d.prototype.update = function(b, d) {
                if (b.call(this, d), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === d.length)) {
                    var e = a('<span class="select2-selection__clear">&times;</span>');
                    c.StoreData(e[0], "data", d), this.$selection.find(".select2-selection__rendered").prepend(e);
                }
            }, d;
        }), b.define("select2/selection/search", [ "jquery", "../utils", "../keys" ], function(a, b, c) {
            function d(a, b, c) {
                a.call(this, b, c);
            }
            return d.prototype.render = function(b) {
                var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = c, this.$search = c.find("input");
                var d = b.call(this);
                return this._transferTabIndex(), d;
            }, d.prototype.bind = function(a, d, e) {
                var f = this;
                a.call(this, d, e), d.on("open", function() {
                    f.$search.trigger("focus");
                }), d.on("close", function() {
                    f.$search.val(""), f.$search.removeAttr("aria-activedescendant"), f.$search.trigger("focus");
                }), d.on("enable", function() {
                    f.$search.prop("disabled", !1), f._transferTabIndex();
                }), d.on("disable", function() {
                    f.$search.prop("disabled", !0);
                }), d.on("focus", function(a) {
                    f.$search.trigger("focus");
                }), d.on("results:focus", function(a) {
                    f.$search.attr("aria-activedescendant", a.id);
                }), this.$selection.on("focusin", ".select2-search--inline", function(a) {
                    f.trigger("focus", a);
                }), this.$selection.on("focusout", ".select2-search--inline", function(a) {
                    f._handleBlur(a);
                }), this.$selection.on("keydown", ".select2-search--inline", function(a) {
                    if (a.stopPropagation(), f.trigger("keypress", a), f._keyUpPrevented = a.isDefaultPrevented(), 
                    a.which === c.BACKSPACE && "" === f.$search.val()) {
                        var d = f.$searchContainer.prev(".select2-selection__choice");
                        if (d.length > 0) {
                            var e = b.GetData(d[0], "data");
                            f.searchRemoveChoice(e), a.preventDefault();
                        }
                    }
                });
                var g = document.documentMode, h = g && g <= 11;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function(a) {
                    if (h) return void f.$selection.off("input.search input.searchcheck");
                    f.$selection.off("keyup.search");
                }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a) {
                    if (h && "input" === a.type) return void f.$selection.off("input.search input.searchcheck");
                    var b = a.which;
                    b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && f.handleSearch(a);
                });
            }, d.prototype._transferTabIndex = function(a) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
            }, d.prototype.createPlaceholder = function(a, b) {
                this.$search.attr("placeholder", b.text);
            }, d.prototype.update = function(a, b) {
                var c = this.$search[0] == document.activeElement;
                if (this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), 
                this.resizeSearch(), c) {
                    this.$element.find("[data-select2-tag]").length ? this.$element.focus() : this.$search.focus();
                }
            }, d.prototype.handleSearch = function() {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var a = this.$search.val();
                    this.trigger("query", {
                        term: a
                    });
                }
                this._keyUpPrevented = !1;
            }, d.prototype.searchRemoveChoice = function(a, b) {
                this.trigger("unselect", {
                    data: b
                }), this.$search.val(b.text), this.handleSearch();
            }, d.prototype.resizeSearch = function() {
                this.$search.css("width", "25px");
                var a = "";
                if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth(); else {
                    a = .75 * (this.$search.val().length + 1) + "em";
                }
                this.$search.css("width", a);
            }, d;
        }), b.define("select2/selection/eventRelay", [ "jquery" ], function(a) {
            function b() {}
            return b.prototype.bind = function(b, c, d) {
                var e = this, f = [ "open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing" ], g = [ "opening", "closing", "selecting", "unselecting", "clearing" ];
                b.call(this, c, d), c.on("*", function(b, c) {
                    if (-1 !== a.inArray(b, f)) {
                        c = c || {};
                        var d = a.Event("select2:" + b, {
                            params: c
                        });
                        e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented());
                    }
                });
            }, b;
        }), b.define("select2/translation", [ "jquery", "require" ], function(a, b) {
            function c(a) {
                this.dict = a || {};
            }
            return c.prototype.all = function() {
                return this.dict;
            }, c.prototype.get = function(a) {
                return this.dict[a];
            }, c.prototype.extend = function(b) {
                this.dict = a.extend({}, b.all(), this.dict);
            }, c._cache = {}, c.loadPath = function(a) {
                if (!(a in c._cache)) {
                    var d = b(a);
                    c._cache[a] = d;
                }
                return new c(c._cache[a]);
            }, c;
        }), b.define("select2/diacritics", [], function() {
            return {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ω": "ω",
                "ς": "σ"
            };
        }), b.define("select2/data/base", [ "../utils" ], function(a) {
            function b(a, c) {
                b.__super__.constructor.call(this);
            }
            return a.Extend(b, a.Observable), b.prototype.current = function(a) {
                throw new Error("The `current` method must be defined in child classes.");
            }, b.prototype.query = function(a, b) {
                throw new Error("The `query` method must be defined in child classes.");
            }, b.prototype.bind = function(a, b) {}, b.prototype.destroy = function() {}, b.prototype.generateResultId = function(b, c) {
                var d = b.id + "-result-";
                return d += a.generateChars(4), null != c.id ? d += "-" + c.id.toString() : d += "-" + a.generateChars(4), 
                d;
            }, b;
        }), b.define("select2/data/select", [ "./base", "../utils", "jquery" ], function(a, b, c) {
            function d(a, b) {
                this.$element = a, this.options = b, d.__super__.constructor.call(this);
            }
            return b.Extend(d, a), d.prototype.current = function(a) {
                var b = [], d = this;
                this.$element.find(":selected").each(function() {
                    var a = c(this), e = d.item(a);
                    b.push(e);
                }), a(b);
            }, d.prototype.select = function(a) {
                var b = this;
                if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, 
                void this.$element.trigger("change");
                if (this.$element.prop("multiple")) this.current(function(d) {
                    var e = [];
                    a = [ a ], a.push.apply(a, d);
                    for (var f = 0; f < a.length; f++) {
                        var g = a[f].id;
                        -1 === c.inArray(g, e) && e.push(g);
                    }
                    b.$element.val(e), b.$element.trigger("change");
                }); else {
                    var d = a.id;
                    this.$element.val(d), this.$element.trigger("change");
                }
            }, d.prototype.unselect = function(a) {
                var b = this;
                if (this.$element.prop("multiple")) {
                    if (a.selected = !1, c(a.element).is("option")) return a.element.selected = !1, 
                    void this.$element.trigger("change");
                    this.current(function(d) {
                        for (var e = [], f = 0; f < d.length; f++) {
                            var g = d[f].id;
                            g !== a.id && -1 === c.inArray(g, e) && e.push(g);
                        }
                        b.$element.val(e), b.$element.trigger("change");
                    });
                }
            }, d.prototype.bind = function(a, b) {
                var c = this;
                this.container = a, a.on("select", function(a) {
                    c.select(a.data);
                }), a.on("unselect", function(a) {
                    c.unselect(a.data);
                });
            }, d.prototype.destroy = function() {
                this.$element.find("*").each(function() {
                    b.RemoveData(this);
                });
            }, d.prototype.query = function(a, b) {
                var d = [], e = this;
                this.$element.children().each(function() {
                    var b = c(this);
                    if (b.is("option") || b.is("optgroup")) {
                        var f = e.item(b), g = e.matches(a, f);
                        null !== g && d.push(g);
                    }
                }), b({
                    results: d
                });
            }, d.prototype.addOptions = function(a) {
                b.appendMany(this.$element, a);
            }, d.prototype.option = function(a) {
                var d;
                a.children ? (d = document.createElement("optgroup"), d.label = a.text) : (d = document.createElement("option"), 
                void 0 !== d.textContent ? d.textContent = a.text : d.innerText = a.text), void 0 !== a.id && (d.value = a.id), 
                a.disabled && (d.disabled = !0), a.selected && (d.selected = !0), a.title && (d.title = a.title);
                var e = c(d), f = this._normalizeItem(a);
                return f.element = d, b.StoreData(d, "data", f), e;
            }, d.prototype.item = function(a) {
                var d = {};
                if (null != (d = b.GetData(a[0], "data"))) return d;
                if (a.is("option")) d = {
                    id: a.val(),
                    text: a.text(),
                    disabled: a.prop("disabled"),
                    selected: a.prop("selected"),
                    title: a.prop("title")
                }; else if (a.is("optgroup")) {
                    d = {
                        text: a.prop("label"),
                        children: [],
                        title: a.prop("title")
                    };
                    for (var e = a.children("option"), f = [], g = 0; g < e.length; g++) {
                        var h = c(e[g]), i = this.item(h);
                        f.push(i);
                    }
                    d.children = f;
                }
                return d = this._normalizeItem(d), d.element = a[0], b.StoreData(a[0], "data", d), 
                d;
            }, d.prototype._normalizeItem = function(a) {
                a !== Object(a) && (a = {
                    id: a,
                    text: a
                }), a = c.extend({}, {
                    text: ""
                }, a);
                var b = {
                    selected: !1,
                    disabled: !1
                };
                return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), 
                null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), 
                c.extend({}, b, a);
            }, d.prototype.matches = function(a, b) {
                return this.options.get("matcher")(a, b);
            }, d;
        }), b.define("select2/data/array", [ "./select", "../utils", "jquery" ], function(a, b, c) {
            function d(a, b) {
                var c = b.get("data") || [];
                d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c));
            }
            return b.Extend(d, a), d.prototype.select = function(a) {
                var b = this.$element.find("option").filter(function(b, c) {
                    return c.value == a.id.toString();
                });
                0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a);
            }, d.prototype.convertToOptions = function(a) {
                function d(a) {
                    return function() {
                        return c(this).val() == a.id;
                    };
                }
                for (var e = this, f = this.$element.find("option"), g = f.map(function() {
                    return e.item(c(this)).id;
                }).get(), h = [], i = 0; i < a.length; i++) {
                    var j = this._normalizeItem(a[i]);
                    if (c.inArray(j.id, g) >= 0) {
                        var k = f.filter(d(j)), l = this.item(k), m = c.extend(!0, {}, j, l), n = this.option(m);
                        k.replaceWith(n);
                    } else {
                        var o = this.option(j);
                        if (j.children) {
                            var p = this.convertToOptions(j.children);
                            b.appendMany(o, p);
                        }
                        h.push(o);
                    }
                }
                return h;
            }, d;
        }), b.define("select2/data/ajax", [ "./array", "../utils", "jquery" ], function(a, b, c) {
            function d(a, b) {
                this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), 
                d.__super__.constructor.call(this, a, b);
            }
            return b.Extend(d, a), d.prototype._applyDefaults = function(a) {
                var b = {
                    data: function(a) {
                        return c.extend({}, a, {
                            q: a.term
                        });
                    },
                    transport: function(a, b, d) {
                        var e = c.ajax(a);
                        return e.then(b), e.fail(d), e;
                    }
                };
                return c.extend({}, b, a, !0);
            }, d.prototype.processResults = function(a) {
                return a;
            }, d.prototype.query = function(a, b) {
                function d() {
                    var d = f.transport(f, function(d) {
                        var f = e.processResults(d, a);
                        e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), 
                        b(f);
                    }, function() {
                        "status" in d && (0 === d.status || "0" === d.status) || e.trigger("results:message", {
                            message: "errorLoading"
                        });
                    });
                    e._request = d;
                }
                var e = this;
                null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), 
                this._request = null);
                var f = c.extend({
                    type: "GET"
                }, this.ajaxOptions);
                "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), 
                this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), 
                this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d();
            }, d;
        }), b.define("select2/data/tags", [ "jquery" ], function(a) {
            function b(b, c, d) {
                var e = d.get("tags"), f = d.get("createTag");
                void 0 !== f && (this.createTag = f);
                var g = d.get("insertTag");
                if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e)) for (var h = 0; h < e.length; h++) {
                    var i = e[h], j = this._normalizeItem(i), k = this.option(j);
                    this.$element.append(k);
                }
            }
            return b.prototype.query = function(a, b, c) {
                function d(a, f) {
                    for (var g = a.results, h = 0; h < g.length; h++) {
                        var i = g[h], j = null != i.children && !d({
                            results: i.children
                        }, !0);
                        if ((i.text || "").toUpperCase() === (b.term || "").toUpperCase() || j) return !f && (a.data = g, 
                        void c(a));
                    }
                    if (f) return !0;
                    var k = e.createTag(b);
                    if (null != k) {
                        var l = e.option(k);
                        l.attr("data-select2-tag", !0), e.addOptions([ l ]), e.insertTag(g, k);
                    }
                    a.results = g, c(a);
                }
                var e = this;
                if (this._removeOldTags(), null == b.term || null != b.page) return void a.call(this, b, c);
                a.call(this, b, d);
            }, b.prototype.createTag = function(b, c) {
                var d = a.trim(c.term);
                return "" === d ? null : {
                    id: d,
                    text: d
                };
            }, b.prototype.insertTag = function(a, b, c) {
                b.unshift(c);
            }, b.prototype._removeOldTags = function(b) {
                this._lastTag;
                this.$element.find("option[data-select2-tag]").each(function() {
                    this.selected || a(this).remove();
                });
            }, b;
        }), b.define("select2/data/tokenizer", [ "jquery" ], function(a) {
            function b(a, b, c) {
                var d = c.get("tokenizer");
                void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
            }
            return b.prototype.bind = function(a, b, c) {
                a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field");
            }, b.prototype.query = function(b, c, d) {
                function e(b) {
                    var c = g._normalizeItem(b);
                    if (!g.$element.find("option").filter(function() {
                        return a(this).val() === c.id;
                    }).length) {
                        var d = g.option(c);
                        d.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([ d ]);
                    }
                    f(c);
                }
                function f(a) {
                    g.trigger("select", {
                        data: a
                    });
                }
                var g = this;
                c.term = c.term || "";
                var h = this.tokenizer(c, this.options, e);
                h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), 
                c.term = h.term), b.call(this, c, d);
            }, b.prototype.tokenizer = function(b, c, d, e) {
                for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function(a) {
                    return {
                        id: a.term,
                        text: a.term
                    };
                }; h < g.length; ) {
                    var j = g[h];
                    if (-1 !== a.inArray(j, f)) {
                        var k = g.substr(0, h), l = a.extend({}, c, {
                            term: k
                        }), m = i(l);
                        null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++;
                    } else h++;
                }
                return {
                    term: g
                };
            }, b;
        }), b.define("select2/data/minimumInputLength", [], function() {
            function a(a, b, c) {
                this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c);
            }
            return a.prototype.query = function(a, b, c) {
                if (b.term = b.term || "", b.term.length < this.minimumInputLength) return void this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                        minimum: this.minimumInputLength,
                        input: b.term,
                        params: b
                    }
                });
                a.call(this, b, c);
            }, a;
        }), b.define("select2/data/maximumInputLength", [], function() {
            function a(a, b, c) {
                this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c);
            }
            return a.prototype.query = function(a, b, c) {
                if (b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength) return void this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                        maximum: this.maximumInputLength,
                        input: b.term,
                        params: b
                    }
                });
                a.call(this, b, c);
            }, a;
        }), b.define("select2/data/maximumSelectionLength", [], function() {
            function a(a, b, c) {
                this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c);
            }
            return a.prototype.query = function(a, b, c) {
                var d = this;
                this.current(function(e) {
                    var f = null != e ? e.length : 0;
                    if (d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength) return void d.trigger("results:message", {
                        message: "maximumSelected",
                        args: {
                            maximum: d.maximumSelectionLength
                        }
                    });
                    a.call(d, b, c);
                });
            }, a;
        }), b.define("select2/dropdown", [ "jquery", "./utils" ], function(a, b) {
            function c(a, b) {
                this.$element = a, this.options = b, c.__super__.constructor.call(this);
            }
            return b.Extend(c, b.Observable), c.prototype.render = function() {
                var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b;
            }, c.prototype.bind = function() {}, c.prototype.position = function(a, b) {}, c.prototype.destroy = function() {
                this.$dropdown.remove();
            }, c;
        }), b.define("select2/dropdown/search", [ "jquery", "../utils" ], function(a, b) {
            function c() {}
            return c.prototype.render = function(b) {
                var c = b.call(this), d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), 
                c;
            }, c.prototype.bind = function(b, c, d) {
                var e = this;
                b.call(this, c, d), this.$search.on("keydown", function(a) {
                    e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
                }), this.$search.on("input", function(b) {
                    a(this).off("keyup");
                }), this.$search.on("keyup input", function(a) {
                    e.handleSearch(a);
                }), c.on("open", function() {
                    e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function() {
                        e.$search.focus();
                    }, 0);
                }), c.on("close", function() {
                    e.$search.attr("tabindex", -1), e.$search.val(""), e.$search.blur();
                }), c.on("focus", function() {
                    c.isOpen() || e.$search.focus();
                }), c.on("results:all", function(a) {
                    if (null == a.query.term || "" === a.query.term) {
                        e.showSearch(a) ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide");
                    }
                });
            }, c.prototype.handleSearch = function(a) {
                if (!this._keyUpPrevented) {
                    var b = this.$search.val();
                    this.trigger("query", {
                        term: b
                    });
                }
                this._keyUpPrevented = !1;
            }, c.prototype.showSearch = function(a, b) {
                return !0;
            }, c;
        }), b.define("select2/dropdown/hidePlaceholder", [], function() {
            function a(a, b, c, d) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d);
            }
            return a.prototype.append = function(a, b) {
                b.results = this.removePlaceholder(b.results), a.call(this, b);
            }, a.prototype.normalizePlaceholder = function(a, b) {
                return "string" == typeof b && (b = {
                    id: "",
                    text: b
                }), b;
            }, a.prototype.removePlaceholder = function(a, b) {
                for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                    var e = b[d];
                    this.placeholder.id === e.id && c.splice(d, 1);
                }
                return c;
            }, a;
        }), b.define("select2/dropdown/infiniteScroll", [ "jquery" ], function(a) {
            function b(a, b, c, d) {
                this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), 
                this.loading = !1;
            }
            return b.prototype.append = function(a, b) {
                this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore);
            }, b.prototype.bind = function(b, c, d) {
                var e = this;
                b.call(this, c, d), c.on("query", function(a) {
                    e.lastParams = a, e.loading = !0;
                }), c.on("query:append", function(a) {
                    e.lastParams = a, e.loading = !0;
                }), this.$results.on("scroll", function() {
                    var b = a.contains(document.documentElement, e.$loadingMore[0]);
                    if (!e.loading && b) {
                        e.$results.offset().top + e.$results.outerHeight(!1) + 50 >= e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1) && e.loadMore();
                    }
                });
            }, b.prototype.loadMore = function() {
                this.loading = !0;
                var b = a.extend({}, {
                    page: 1
                }, this.lastParams);
                b.page++, this.trigger("query:append", b);
            }, b.prototype.showLoadingMore = function(a, b) {
                return b.pagination && b.pagination.more;
            }, b.prototype.createLoadingMore = function() {
                var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'), c = this.options.get("translations").get("loadingMore");
                return b.html(c(this.lastParams)), b;
            }, b;
        }), b.define("select2/dropdown/attachBody", [ "jquery", "../utils" ], function(a, b) {
            function c(b, c, d) {
                this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d);
            }
            return c.prototype.bind = function(a, b, c) {
                var d = this, e = !1;
                a.call(this, b, c), b.on("open", function() {
                    d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function() {
                        d._positionDropdown(), d._resizeDropdown();
                    }), b.on("results:append", function() {
                        d._positionDropdown(), d._resizeDropdown();
                    }));
                }), b.on("close", function() {
                    d._hideDropdown(), d._detachPositioningHandler(b);
                }), this.$dropdownContainer.on("mousedown", function(a) {
                    a.stopPropagation();
                });
            }, c.prototype.destroy = function(a) {
                a.call(this), this.$dropdownContainer.remove();
            }, c.prototype.position = function(a, b, c) {
                b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), 
                b.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = c;
            }, c.prototype.render = function(b) {
                var c = a("<span></span>"), d = b.call(this);
                return c.append(d), this.$dropdownContainer = c, c;
            }, c.prototype._hideDropdown = function(a) {
                this.$dropdownContainer.detach();
            }, c.prototype._attachPositioningHandler = function(c, d) {
                var e = this, f = "scroll.select2." + d.id, g = "resize.select2." + d.id, h = "orientationchange.select2." + d.id, i = this.$container.parents().filter(b.hasScroll);
                i.each(function() {
                    b.StoreData(this, "select2-scroll-position", {
                        x: a(this).scrollLeft(),
                        y: a(this).scrollTop()
                    });
                }), i.on(f, function(c) {
                    var d = b.GetData(this, "select2-scroll-position");
                    a(this).scrollTop(d.y);
                }), a(window).on(f + " " + g + " " + h, function(a) {
                    e._positionDropdown(), e._resizeDropdown();
                });
            }, c.prototype._detachPositioningHandler = function(c, d) {
                var e = "scroll.select2." + d.id, f = "resize.select2." + d.id, g = "orientationchange.select2." + d.id;
                this.$container.parents().filter(b.hasScroll).off(e), a(window).off(e + " " + f + " " + g);
            }, c.prototype._positionDropdown = function() {
                var b = a(window), c = this.$dropdown.hasClass("select2-dropdown--above"), d = this.$dropdown.hasClass("select2-dropdown--below"), e = null, f = this.$container.offset();
                f.bottom = f.top + this.$container.outerHeight(!1);
                var g = {
                    height: this.$container.outerHeight(!1)
                };
                g.top = f.top, g.bottom = f.top + g.height;
                var h = {
                    height: this.$dropdown.outerHeight(!1)
                }, i = {
                    top: b.scrollTop(),
                    bottom: b.scrollTop() + b.height()
                }, j = i.top < f.top - h.height, k = i.bottom > f.bottom + h.height, l = {
                    left: f.left,
                    top: g.bottom
                }, m = this.$dropdownParent;
                "static" === m.css("position") && (m = m.offsetParent());
                var n = m.offset();
                l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", 
                ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), 
                this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), 
                this.$dropdownContainer.css(l);
            }, c.prototype._resizeDropdown = function() {
                var a = {
                    width: this.$container.outerWidth(!1) + "px"
                };
                this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", 
                a.width = "auto"), this.$dropdown.css(a);
            }, c.prototype._showDropdown = function(a) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), 
                this._resizeDropdown();
            }, c;
        }), b.define("select2/dropdown/minimumResultsForSearch", [], function() {
            function a(b) {
                for (var c = 0, d = 0; d < b.length; d++) {
                    var e = b[d];
                    e.children ? c += a(e.children) : c++;
                }
                return c;
            }
            function b(a, b, c, d) {
                this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), 
                a.call(this, b, c, d);
            }
            return b.prototype.showSearch = function(b, c) {
                return !(a(c.data.results) < this.minimumResultsForSearch) && b.call(this, c);
            }, b;
        }), b.define("select2/dropdown/selectOnClose", [ "../utils" ], function(a) {
            function b() {}
            return b.prototype.bind = function(a, b, c) {
                var d = this;
                a.call(this, b, c), b.on("close", function(a) {
                    d._handleSelectOnClose(a);
                });
            }, b.prototype._handleSelectOnClose = function(b, c) {
                if (c && null != c.originalSelect2Event) {
                    var d = c.originalSelect2Event;
                    if ("select" === d._type || "unselect" === d._type) return;
                }
                var e = this.getHighlightedResults();
                if (!(e.length < 1)) {
                    var f = a.GetData(e[0], "data");
                    null != f.element && f.element.selected || null == f.element && f.selected || this.trigger("select", {
                        data: f
                    });
                }
            }, b;
        }), b.define("select2/dropdown/closeOnSelect", [], function() {
            function a() {}
            return a.prototype.bind = function(a, b, c) {
                var d = this;
                a.call(this, b, c), b.on("select", function(a) {
                    d._selectTriggered(a);
                }), b.on("unselect", function(a) {
                    d._selectTriggered(a);
                });
            }, a.prototype._selectTriggered = function(a, b) {
                var c = b.originalEvent;
                c && c.ctrlKey || this.trigger("close", {
                    originalEvent: c,
                    originalSelect2Event: b
                });
            }, a;
        }), b.define("select2/i18n/en", [], function() {
            return {
                errorLoading: function() {
                    return "The results could not be loaded.";
                },
                inputTooLong: function(a) {
                    var b = a.input.length - a.maximum, c = "Please delete " + b + " character";
                    return 1 != b && (c += "s"), c;
                },
                inputTooShort: function(a) {
                    return "Please enter " + (a.minimum - a.input.length) + " or more characters";
                },
                loadingMore: function() {
                    return "Loading more results…";
                },
                maximumSelected: function(a) {
                    var b = "You can only select " + a.maximum + " item";
                    return 1 != a.maximum && (b += "s"), b;
                },
                noResults: function() {
                    return "No results found";
                },
                searching: function() {
                    return "Searching…";
                }
            };
        }), b.define("select2/defaults", [ "jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en" ], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
            function D() {
                this.reset();
            }
            return D.prototype.apply = function(l) {
                if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
                    if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, 
                    l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), 
                    l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), 
                    l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), null == l.tokenSeparators && null == l.tokenizer || (l.dataAdapter = j.Decorate(l.dataAdapter, q)), 
                    null != l.query) {
                        var C = b(l.amdBase + "compat/query");
                        l.dataAdapter = j.Decorate(l.dataAdapter, C);
                    }
                    if (null != l.initSelection) {
                        var D = b(l.amdBase + "compat/initSelection");
                        l.dataAdapter = j.Decorate(l.dataAdapter, D);
                    }
                }
                if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), 
                null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), 
                null == l.dropdownAdapter) {
                    if (l.multiple) l.dropdownAdapter = u; else {
                        var E = j.Decorate(u, v);
                        l.dropdownAdapter = E;
                    }
                    if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), 
                    l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                        var F = b(l.amdBase + "compat/dropdownCss");
                        l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
                    }
                    l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
                }
                if (null == l.selectionAdapter) {
                    if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), 
                    l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), 
                    null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                        var G = b(l.amdBase + "compat/containerCss");
                        l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
                    }
                    l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
                }
                if ("string" == typeof l.language) if (l.language.indexOf("-") > 0) {
                    var H = l.language.split("-"), I = H[0];
                    l.language = [ l.language, I ];
                } else l.language = [ l.language ];
                if (a.isArray(l.language)) {
                    var J = new k();
                    l.language.push("en");
                    for (var K = l.language, L = 0; L < K.length; L++) {
                        var M = K[L], N = {};
                        try {
                            N = k.loadPath(M);
                        } catch (a) {
                            try {
                                M = this.defaults.amdLanguageBase + M, N = k.loadPath(M);
                            } catch (a) {
                                l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                                continue;
                            }
                        }
                        J.extend(N);
                    }
                    l.translations = J;
                } else {
                    var O = k.loadPath(this.defaults.amdLanguageBase + "en"), P = new k(l.language);
                    P.extend(O), l.translations = P;
                }
                return l;
            }, D.prototype.reset = function() {
                function b(a) {
                    function b(a) {
                        return l[a] || a;
                    }
                    return a.replace(/[^\u0000-\u007E]/g, b);
                }
                function c(d, e) {
                    if ("" === a.trim(d.term)) return e;
                    if (e.children && e.children.length > 0) {
                        for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                            null == c(d, e.children[g]) && f.children.splice(g, 1);
                        }
                        return f.children.length > 0 ? f : c(d, f);
                    }
                    var h = b(e.text).toUpperCase(), i = b(d.term).toUpperCase();
                    return h.indexOf(i) > -1 ? e : null;
                }
                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: j.escapeMarkup,
                    language: C,
                    matcher: c,
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function(a) {
                        return a;
                    },
                    templateResult: function(a) {
                        return a.text;
                    },
                    templateSelection: function(a) {
                        return a.text;
                    },
                    theme: "default",
                    width: "resolve"
                };
            }, D.prototype.set = function(b, c) {
                var d = a.camelCase(b), e = {};
                e[d] = c;
                var f = j._convertData(e);
                a.extend(!0, this.defaults, f);
            }, new D();
        }), b.define("select2/options", [ "require", "jquery", "./defaults", "./utils" ], function(a, b, c, d) {
            function e(b, e) {
                if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), 
                e && e.is("input")) {
                    var f = a(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f);
                }
            }
            return e.prototype.fromElement = function(a) {
                var c = [ "select2" ];
                null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), 
                null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), 
                null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), 
                a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), 
                d.GetData(a[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), 
                d.StoreData(a[0], "data", d.GetData(a[0], "select2Tags")), d.StoreData(a[0], "tags", !0)), 
                d.GetData(a[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), 
                a.attr("ajax--url", d.GetData(a[0], "ajaxUrl")), d.StoreData(a[0], "ajax-Url", d.GetData(a[0], "ajaxUrl")));
                var e = {};
                e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, d.GetData(a[0])) : d.GetData(a[0]);
                var f = b.extend(!0, {}, e);
                f = d._convertData(f);
                for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                return this;
            }, e.prototype.get = function(a) {
                return this.options[a];
            }, e.prototype.set = function(a, b) {
                this.options[a] = b;
            }, e;
        }), b.define("select2/core", [ "jquery", "./options", "./utils", "./keys" ], function(a, b, c, d) {
            var e = function(a, d) {
                null != c.GetData(a[0], "select2") && c.GetData(a[0], "select2").destroy(), this.$element = a, 
                this.id = this._generateId(a), d = d || {}, this.options = new b(d, a), e.__super__.constructor.call(this);
                var f = a.attr("tabindex") || 0;
                c.StoreData(a[0], "old-tabindex", f), a.attr("tabindex", "-1");
                var g = this.options.get("dataAdapter");
                this.dataAdapter = new g(a, this.options);
                var h = this.render();
                this._placeContainer(h);
                var i = this.options.get("selectionAdapter");
                this.selection = new i(a, this.options), this.$selection = this.selection.render(), 
                this.selection.position(this.$selection, h);
                var j = this.options.get("dropdownAdapter");
                this.dropdown = new j(a, this.options), this.$dropdown = this.dropdown.render(), 
                this.dropdown.position(this.$dropdown, h);
                var k = this.options.get("resultsAdapter");
                this.results = new k(a, this.options, this.dataAdapter), this.$results = this.results.render(), 
                this.results.position(this.$results, this.$dropdown);
                var l = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), 
                this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), 
                this.dataAdapter.current(function(a) {
                    l.trigger("selection:update", {
                        data: a
                    });
                }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), 
                c.StoreData(a[0], "select2", this), a.data("select2", this);
            };
            return c.Extend(e, c.Observable), e.prototype._generateId = function(a) {
                var b = "";
                return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), 
                b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b;
            }, e.prototype._placeContainer = function(a) {
                a.insertAfter(this.$element);
                var b = this._resolveWidth(this.$element, this.options.get("width"));
                null != b && a.css("width", b);
            }, e.prototype._resolveWidth = function(a, b) {
                var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == b) {
                    var d = this._resolveWidth(a, "style");
                    return null != d ? d : this._resolveWidth(a, "element");
                }
                if ("element" == b) {
                    var e = a.outerWidth(!1);
                    return e <= 0 ? "auto" : e + "px";
                }
                if ("style" == b) {
                    var f = a.attr("style");
                    if ("string" != typeof f) return null;
                    for (var g = f.split(";"), h = 0, i = g.length; h < i; h += 1) {
                        var j = g[h].replace(/\s/g, ""), k = j.match(c);
                        if (null !== k && k.length >= 1) return k[1];
                    }
                    return null;
                }
                return b;
            }, e.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), 
                this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
            }, e.prototype._registerDomEvents = function() {
                var b = this;
                this.$element.on("change.select2", function() {
                    b.dataAdapter.current(function(a) {
                        b.trigger("selection:update", {
                            data: a
                        });
                    });
                }), this.$element.on("focus.select2", function(a) {
                    b.trigger("focus", a);
                }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), 
                this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != d ? (this._observer = new d(function(c) {
                    a.each(c, b._syncA), a.each(c, b._syncS);
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), 
                this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1));
            }, e.prototype._registerDataEvents = function() {
                var a = this;
                this.dataAdapter.on("*", function(b, c) {
                    a.trigger(b, c);
                });
            }, e.prototype._registerSelectionEvents = function() {
                var b = this, c = [ "toggle", "focus" ];
                this.selection.on("toggle", function() {
                    b.toggleDropdown();
                }), this.selection.on("focus", function(a) {
                    b.focus(a);
                }), this.selection.on("*", function(d, e) {
                    -1 === a.inArray(d, c) && b.trigger(d, e);
                });
            }, e.prototype._registerDropdownEvents = function() {
                var a = this;
                this.dropdown.on("*", function(b, c) {
                    a.trigger(b, c);
                });
            }, e.prototype._registerResultsEvents = function() {
                var a = this;
                this.results.on("*", function(b, c) {
                    a.trigger(b, c);
                });
            }, e.prototype._registerEvents = function() {
                var a = this;
                this.on("open", function() {
                    a.$container.addClass("select2-container--open");
                }), this.on("close", function() {
                    a.$container.removeClass("select2-container--open");
                }), this.on("enable", function() {
                    a.$container.removeClass("select2-container--disabled");
                }), this.on("disable", function() {
                    a.$container.addClass("select2-container--disabled");
                }), this.on("blur", function() {
                    a.$container.removeClass("select2-container--focus");
                }), this.on("query", function(b) {
                    a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function(c) {
                        a.trigger("results:all", {
                            data: c,
                            query: b
                        });
                    });
                }), this.on("query:append", function(b) {
                    this.dataAdapter.query(b, function(c) {
                        a.trigger("results:append", {
                            data: c,
                            query: b
                        });
                    });
                }), this.on("keypress", function(b) {
                    var c = b.which;
                    a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), 
                    b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), 
                    b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), 
                    b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), 
                    b.preventDefault());
                });
            }, e.prototype._syncAttributes = function() {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), 
                this.trigger("disable", {})) : this.trigger("enable", {});
            }, e.prototype._syncSubtree = function(a, b) {
                var c = !1, d = this;
                if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
                    if (b) if (b.addedNodes && b.addedNodes.length > 0) for (var e = 0; e < b.addedNodes.length; e++) {
                        var f = b.addedNodes[e];
                        f.selected && (c = !0);
                    } else b.removedNodes && b.removedNodes.length > 0 && (c = !0); else c = !0;
                    c && this.dataAdapter.current(function(a) {
                        d.trigger("selection:update", {
                            data: a
                        });
                    });
                }
            }, e.prototype.trigger = function(a, b) {
                var c = e.__super__.trigger, d = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing"
                };
                if (void 0 === b && (b = {}), a in d) {
                    var f = d[a], g = {
                        prevented: !1,
                        name: a,
                        args: b
                    };
                    if (c.call(this, f, g), g.prevented) return void (b.prevented = !0);
                }
                c.call(this, a, b);
            }, e.prototype.toggleDropdown = function() {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
            }, e.prototype.open = function() {
                this.isOpen() || this.trigger("query", {});
            }, e.prototype.close = function() {
                this.isOpen() && this.trigger("close", {});
            }, e.prototype.isOpen = function() {
                return this.$container.hasClass("select2-container--open");
            }, e.prototype.hasFocus = function() {
                return this.$container.hasClass("select2-container--focus");
            }, e.prototype.focus = function(a) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
            }, e.prototype.enable = function(a) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), 
                null != a && 0 !== a.length || (a = [ !0 ]);
                var b = !a[0];
                this.$element.prop("disabled", b);
            }, e.prototype.data = function() {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var a = [];
                return this.dataAdapter.current(function(b) {
                    a = b;
                }), a;
            }, e.prototype.val = function(b) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), 
                null == b || 0 === b.length) return this.$element.val();
                var c = b[0];
                a.isArray(c) && (c = a.map(c, function(a) {
                    return a.toString();
                })), this.$element.val(c).trigger("change");
            }, e.prototype.destroy = function() {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), 
                null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), 
                this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), 
                this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", c.GetData(this.$element[0], "old-tabindex")), 
                this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), 
                c.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), 
                this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, 
                this.selection = null, this.dropdown = null, this.results = null;
            }, e.prototype.render = function() {
                var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), 
                c.StoreData(b[0], "element", this.$element), b;
            }, e;
        }), b.define("select2/compat/utils", [ "jquery" ], function(a) {
            function b(b, c, d) {
                var e, f, g = [];
                e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                    0 === this.indexOf("select2-") && g.push(this);
                })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                    0 !== this.indexOf("select2-") && null != (f = d(this)) && g.push(f);
                })), b.attr("class", g.join(" "));
            }
            return {
                syncCssClasses: b
            };
        }), b.define("select2/compat/containerCss", [ "jquery", "./utils" ], function(a, b) {
            function c(a) {
                return null;
            }
            function d() {}
            return d.prototype.render = function(d) {
                var e = d.call(this), f = this.options.get("containerCssClass") || "";
                a.isFunction(f) && (f = f(this.$element));
                var g = this.options.get("adaptContainerCssClass");
                if (g = g || c, -1 !== f.indexOf(":all:")) {
                    f = f.replace(":all:", "");
                    var h = g;
                    g = function(a) {
                        var b = h(a);
                        return null != b ? b + " " + a : a;
                    };
                }
                var i = this.options.get("containerCss") || {};
                return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), 
                e.css(i), e.addClass(f), e;
            }, d;
        }), b.define("select2/compat/dropdownCss", [ "jquery", "./utils" ], function(a, b) {
            function c(a) {
                return null;
            }
            function d() {}
            return d.prototype.render = function(d) {
                var e = d.call(this), f = this.options.get("dropdownCssClass") || "";
                a.isFunction(f) && (f = f(this.$element));
                var g = this.options.get("adaptDropdownCssClass");
                if (g = g || c, -1 !== f.indexOf(":all:")) {
                    f = f.replace(":all:", "");
                    var h = g;
                    g = function(a) {
                        var b = h(a);
                        return null != b ? b + " " + a : a;
                    };
                }
                var i = this.options.get("dropdownCss") || {};
                return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), 
                e.css(i), e.addClass(f), e;
            }, d;
        }), b.define("select2/compat/initSelection", [ "jquery" ], function(a) {
            function b(a, b, c) {
                c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), 
                this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c);
            }
            return b.prototype.current = function(b, c) {
                var d = this;
                if (this._isInitialized) return void b.call(this, c);
                this.initSelection.call(null, this.$element, function(b) {
                    d._isInitialized = !0, a.isArray(b) || (b = [ b ]), c(b);
                });
            }, b;
        }), b.define("select2/compat/inputData", [ "jquery", "../utils" ], function(a, b) {
            function c(a, b, c) {
                this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), 
                a.call(this, b, c);
            }
            return c.prototype.current = function(b, c) {
                function d(b, c) {
                    var e = [];
                    return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, 
                    b.children && e.push.apply(e, d(b.children, c)), e;
                }
                for (var e = [], f = 0; f < this._currentData.length; f++) {
                    var g = this._currentData[f];
                    e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)));
                }
                c(e);
            }, c.prototype.select = function(b, c) {
                if (this.options.get("multiple")) {
                    var d = this.$element.val();
                    d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change");
                } else this.current(function(b) {
                    a.map(b, function(a) {
                        a.selected = !1;
                    });
                }), this.$element.val(c.id), this.$element.trigger("change");
            }, c.prototype.unselect = function(a, b) {
                var c = this;
                b.selected = !1, this.current(function(a) {
                    for (var d = [], e = 0; e < a.length; e++) {
                        var f = a[e];
                        b.id != f.id && d.push(f.id);
                    }
                    c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change");
                });
            }, c.prototype.query = function(a, b, c) {
                for (var d = [], e = 0; e < this._currentData.length; e++) {
                    var f = this._currentData[e], g = this.matches(b, f);
                    null !== g && d.push(g);
                }
                c({
                    results: d
                });
            }, c.prototype.addOptions = function(c, d) {
                var e = a.map(d, function(a) {
                    return b.GetData(a[0], "data");
                });
                this._currentData.push.apply(this._currentData, e);
            }, c;
        }), b.define("select2/compat/matcher", [ "jquery" ], function(a) {
            function b(b) {
                function c(c, d) {
                    var e = a.extend(!0, {}, d);
                    if (null == c.term || "" === a.trim(c.term)) return e;
                    if (d.children) {
                        for (var f = d.children.length - 1; f >= 0; f--) {
                            var g = d.children[f];
                            b(c.term, g.text, g) || e.children.splice(f, 1);
                        }
                        if (e.children.length > 0) return e;
                    }
                    return b(c.term, d.text, d) ? e : null;
                }
                return c;
            }
            return b;
        }), b.define("select2/compat/query", [], function() {
            function a(a, b, c) {
                c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), 
                a.call(this, b, c);
            }
            return a.prototype.query = function(a, b, c) {
                b.callback = c, this.options.get("query").call(null, b);
            }, a;
        }), b.define("select2/dropdown/attachContainer", [], function() {
            function a(a, b, c) {
                a.call(this, b, c);
            }
            return a.prototype.position = function(a, b, c) {
                c.find(".dropdown-wrapper").append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below");
            }, a;
        }), b.define("select2/dropdown/stopPropagation", [], function() {
            function a() {}
            return a.prototype.bind = function(a, b, c) {
                a.call(this, b, c);
                var d = [ "blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart" ];
                this.$dropdown.on(d.join(" "), function(a) {
                    a.stopPropagation();
                });
            }, a;
        }), b.define("select2/selection/stopPropagation", [], function() {
            function a() {}
            return a.prototype.bind = function(a, b, c) {
                a.call(this, b, c);
                var d = [ "blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart" ];
                this.$selection.on(d.join(" "), function(a) {
                    a.stopPropagation();
                });
            }, a;
        }), function(c) {
            "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", [ "jquery" ], c) : "object" == typeof exports ? module.exports = c : c(a);
        }(function(a) {
            function b(b) {
                var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
                if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), 
                "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), 
                "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, 
                m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 
                0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                    if (1 === g.deltaMode) {
                        var q = a.data(this, "mousewheel-line-height");
                        j *= q, m *= q, l *= q;
                    } else if (2 === g.deltaMode) {
                        var r = a.data(this, "mousewheel-page-height");
                        j *= r, m *= r, l *= r;
                    }
                    if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || n < f) && (f = n, d(g, n) && (f /= 40)), 
                    d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), 
                    l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), 
                    k.settings.normalizeOffset && this.getBoundingClientRect) {
                        var s = this.getBoundingClientRect();
                        o = b.clientX - s.left, p = b.clientY - s.top;
                    }
                    return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, 
                    b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), 
                    (a.event.dispatch || a.event.handle).apply(this, h);
                }
            }
            function c() {
                f = null;
            }
            function d(a, b) {
                return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 == 0;
            }
            var e, f, g = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], h = "onwheel" in document || document.documentMode >= 9 ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ], i = Array.prototype.slice;
            if (a.event.fixHooks) for (var j = g.length; j; ) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
            var k = a.event.special.mousewheel = {
                version: "3.1.12",
                setup: function() {
                    if (this.addEventListener) for (var c = h.length; c; ) this.addEventListener(h[--c], b, !1); else this.onmousewheel = b;
                    a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
                },
                teardown: function() {
                    if (this.removeEventListener) for (var c = h.length; c; ) this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null;
                    a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
                },
                getLineHeight: function(b) {
                    var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                    return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
                },
                getPageHeight: function(b) {
                    return a(b).height();
                },
                settings: {
                    adjustOldDeltas: !0,
                    normalizeOffset: !0
                }
            };
            a.fn.extend({
                mousewheel: function(a) {
                    return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
                },
                unmousewheel: function(a) {
                    return this.unbind("mousewheel", a);
                }
            });
        }), b.define("jquery.select2", [ "jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils" ], function(a, b, c, d, e) {
            if (null == a.fn.select2) {
                var f = [ "open", "close", "destroy" ];
                a.fn.select2 = function(b) {
                    if ("object" == typeof (b = b || {})) return this.each(function() {
                        var d = a.extend(!0, {}, b);
                        new c(a(this), d);
                    }), this;
                    if ("string" == typeof b) {
                        var d, g = Array.prototype.slice.call(arguments, 1);
                        return this.each(function() {
                            var a = e.GetData(this, "select2");
                            null == a && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), 
                            d = a[b].apply(a, g);
                        }), a.inArray(b, f) > -1 ? this : d;
                    }
                    throw new Error("Invalid arguments for Select2: " + b);
                };
            }
            return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c;
        }), {
            define: b.define,
            require: b.require
        };
    }(), c = b.require("jquery.select2");
    return a.fn.select2.amd = b, c;
});

!function(a, b) {
    "function" == typeof define && define.amd ? define([ "jquery" ], b) : b("undefined" != typeof exports ? require("jquery") : a.jQuery);
}(this, function(a) {
    "use strict";
    function h(b) {
        if (c.webkit && !b) return {
            height: 0,
            width: 0
        };
        if (!c.data.outer) {
            var d = {
                border: "none",
                "box-sizing": "content-box",
                height: "200px",
                margin: "0",
                padding: "0",
                width: "200px"
            };
            c.data.inner = a("<div>").css(a.extend({}, d)), c.data.outer = a("<div>").css(a.extend({
                left: "-1000px",
                overflow: "scroll",
                position: "absolute",
                top: "-1000px"
            }, d)).append(c.data.inner).appendTo("body");
        }
        return c.data.outer.scrollLeft(1e3).scrollTop(1e3), {
            height: Math.ceil(c.data.outer.offset().top - c.data.inner.offset().top || 0),
            width: Math.ceil(c.data.outer.offset().left - c.data.inner.offset().left || 0)
        };
    }
    function i() {
        var a = h(!0);
        return !(a.height || a.width);
    }
    function j(a) {
        var b = a.originalEvent;
        return (!b.axis || b.axis !== b.HORIZONTAL_AXIS) && !b.wheelDeltaX;
    }
    var b = !1, c = {
        data: {
            index: 0,
            name: "scrollbar"
        },
        firefox: /firefox/i.test(navigator.userAgent),
        macosx: /mac/i.test(navigator.platform),
        msedge: /edge\/\d+/i.test(navigator.userAgent),
        msie: /(msie|trident)/i.test(navigator.userAgent),
        mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
        overlay: null,
        scroll: null,
        scrolls: [],
        webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
    };
    c.scrolls.add = function(a) {
        this.remove(a).push(a);
    }, c.scrolls.remove = function(b) {
        for (;a.inArray(b, this) >= 0; ) this.splice(a.inArray(b, this), 1);
        return this;
    };
    var d = {
        autoScrollSize: !0,
        autoUpdate: !0,
        debug: !1,
        disableBodyScroll: !1,
        duration: 200,
        ignoreMobile: !1,
        ignoreOverlay: !1,
        isRtl: !1,
        scrollStep: 30,
        showArrows: !1,
        stepScrolling: !0,
        scrollx: null,
        scrolly: null,
        onDestroy: null,
        onFallback: null,
        onInit: null,
        onScroll: null,
        onUpdate: null
    }, e = function(b) {
        c.scroll || (c.overlay = i(), c.scroll = h(), g(), a(window).resize(function() {
            var a = !1;
            if (c.scroll && (c.scroll.height || c.scroll.width)) {
                var b = h();
                b.height === c.scroll.height && b.width === c.scroll.width || (c.scroll = b, a = !0);
            }
            g(a);
        })), this.container = b, this.namespace = ".scrollbar_" + c.data.index++, this.options = a.extend({}, d, window.jQueryScrollbarOptions || {}), 
        this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, b.data(c.data.name, this), 
        c.scrolls.add(this);
    };
    e.prototype = {
        destroy: function() {
            if (this.wrapper) {
                this.container.removeData(c.data.name), c.scrolls.remove(this);
                var b = this.container.scrollLeft(), d = this.container.scrollTop();
                this.container.insertBefore(this.wrapper).css({
                    height: "",
                    margin: "",
                    "max-height": ""
                }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(b).scrollTop(d), 
                this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").addBack().off(this.namespace), 
                this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").addBack().off(this.namespace), 
                this.wrapper.remove(), a(document).add("body").off(this.namespace), a.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [ this.container ]);
            }
        },
        init: function(b) {
            var d = this, e = this.container, f = this.containerWrapper || e, g = this.namespace, h = a.extend(this.options, b || {}), i = {
                x: this.scrollx,
                y: this.scrolly
            }, k = this.wrapper, l = {}, m = {
                scrollLeft: e.scrollLeft(),
                scrollTop: e.scrollTop()
            };
            if (c.mobile && h.ignoreMobile || c.overlay && h.ignoreOverlay || c.macosx && !c.webkit) return a.isFunction(h.onFallback) && h.onFallback.apply(this, [ e ]), 
            !1;
            if (k) l = {
                height: "auto",
                "margin-bottom": c.scroll.height * -1 + "px",
                "max-height": ""
            }, l[h.isRtl ? "margin-left" : "margin-right"] = c.scroll.width * -1 + "px", f.css(l); else {
                if (this.wrapper = k = a("<div>").addClass("scroll-wrapper").addClass(e.attr("class")).css("position", "absolute" === e.css("position") ? "absolute" : "relative").insertBefore(e).append(e), 
                h.isRtl && k.addClass("scroll--rtl"), e.is("textarea") && (this.containerWrapper = f = a("<div>").insertBefore(e).append(e), 
                k.addClass("scroll-textarea")), l = {
                    height: "auto",
                    "margin-bottom": c.scroll.height * -1 + "px",
                    "max-height": ""
                }, l[h.isRtl ? "margin-left" : "margin-right"] = c.scroll.width * -1 + "px", f.addClass("scroll-content").css(l), 
                e.on("scroll" + g, function(b) {
                    var f = e.scrollLeft(), g = e.scrollTop();
                    if (h.isRtl) switch (!0) {
                      case c.firefox:
                        f = Math.abs(f);

                      case c.msedge || c.msie:
                        f = e[0].scrollWidth - e[0].clientWidth - f;
                    }
                    a.isFunction(h.onScroll) && h.onScroll.call(d, {
                        maxScroll: i.y.maxScrollOffset,
                        scroll: g,
                        size: i.y.size,
                        visible: i.y.visible
                    }, {
                        maxScroll: i.x.maxScrollOffset,
                        scroll: f,
                        size: i.x.size,
                        visible: i.x.visible
                    }), i.x.isVisible && i.x.scroll.bar.css("left", f * i.x.kx + "px"), i.y.isVisible && i.y.scroll.bar.css("top", g * i.y.kx + "px");
                }), k.on("scroll" + g, function() {
                    k.scrollTop(0).scrollLeft(0);
                }), h.disableBodyScroll) {
                    var n = function(a) {
                        j(a) ? i.y.isVisible && i.y.mousewheel(a) : i.x.isVisible && i.x.mousewheel(a);
                    };
                    k.on("MozMousePixelScroll" + g, n), k.on("mousewheel" + g, n), c.mobile && k.on("touchstart" + g, function(b) {
                        var c = b.originalEvent.touches && b.originalEvent.touches[0] || b, d = {
                            pageX: c.pageX,
                            pageY: c.pageY
                        }, f = {
                            left: e.scrollLeft(),
                            top: e.scrollTop()
                        };
                        a(document).on("touchmove" + g, function(a) {
                            var b = a.originalEvent.targetTouches && a.originalEvent.targetTouches[0] || a;
                            e.scrollLeft(f.left + d.pageX - b.pageX), e.scrollTop(f.top + d.pageY - b.pageY), 
                            a.preventDefault();
                        }), a(document).on("touchend" + g, function() {
                            a(document).off(g);
                        });
                    });
                }
                a.isFunction(h.onInit) && h.onInit.apply(this, [ e ]);
            }
            a.each(i, function(b, f) {
                var k = null, l = 1, m = "x" === b ? "scrollLeft" : "scrollTop", n = h.scrollStep, o = function() {
                    var a = e[m]();
                    e[m](a + n), 1 == l && a + n >= p && (a = e[m]()), l == -1 && a + n <= p && (a = e[m]()), 
                    e[m]() == a && k && k();
                }, p = 0;
                f.scroll || (f.scroll = d._getScroll(h["scroll" + b]).addClass("scroll-" + b), h.showArrows && f.scroll.addClass("scroll-element_arrows_visible"), 
                f.mousewheel = function(a) {
                    if (!f.isVisible || "x" === b && j(a)) return !0;
                    if ("y" === b && !j(a)) return i.x.mousewheel(a), !0;
                    var c = a.originalEvent.wheelDelta * -1 || a.originalEvent.detail, g = f.size - f.visible - f.offset;
                    return c || ("x" === b && a.originalEvent.deltaX ? c = 40 * a.originalEvent.deltaX : "y" === b && a.originalEvent.deltaY && (c = 40 * a.originalEvent.deltaY)), 
                    (c > 0 && p < g || c < 0 && p > 0) && (p += c, p < 0 && (p = 0), p > g && (p = g), 
                    d.scrollTo = d.scrollTo || {}, d.scrollTo[m] = p, setTimeout(function() {
                        d.scrollTo && (e.stop().animate(d.scrollTo, 240, "linear", function() {
                            p = e[m]();
                        }), d.scrollTo = null);
                    }, 1)), a.preventDefault(), !1;
                }, f.scroll.on("MozMousePixelScroll" + g, f.mousewheel).on("mousewheel" + g, f.mousewheel).on("mouseenter" + g, function() {
                    p = e[m]();
                }), f.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + g, function(g) {
                    if (1 != g.which) return !0;
                    l = 1;
                    var i = {
                        eventOffset: g["x" === b ? "pageX" : "pageY"],
                        maxScrollValue: f.size - f.visible - f.offset,
                        scrollbarOffset: f.scroll.bar.offset()["x" === b ? "left" : "top"],
                        scrollbarSize: f.scroll.bar["x" === b ? "outerWidth" : "outerHeight"]()
                    }, j = 0, q = 0;
                    if (a(this).hasClass("scroll-arrow")) {
                        if (l = a(this).hasClass("scroll-arrow_more") ? 1 : -1, n = h.scrollStep * l, p = l > 0 ? i.maxScrollValue : 0, 
                        h.isRtl) switch (!0) {
                          case c.firefox:
                            p = l > 0 ? 0 : i.maxScrollValue * -1;
                            break;

                          case c.msie || c.msedge:                        }
                    } else l = i.eventOffset > i.scrollbarOffset + i.scrollbarSize ? 1 : i.eventOffset < i.scrollbarOffset ? -1 : 0, 
                    "x" === b && h.isRtl && (c.msie || c.msedge) && (l *= -1), n = Math.round(.75 * f.visible) * l, 
                    p = i.eventOffset - i.scrollbarOffset - (h.stepScrolling ? 1 == l ? i.scrollbarSize : 0 : Math.round(i.scrollbarSize / 2)), 
                    p = e[m]() + p / f.kx;
                    return d.scrollTo = d.scrollTo || {}, d.scrollTo[m] = h.stepScrolling ? e[m]() + n : p, 
                    h.stepScrolling && (k = function() {
                        p = e[m](), clearInterval(q), clearTimeout(j), j = 0, q = 0;
                    }, j = setTimeout(function() {
                        q = setInterval(o, 40);
                    }, h.duration + 100)), setTimeout(function() {
                        d.scrollTo && (e.animate(d.scrollTo, h.duration), d.scrollTo = null);
                    }, 1), d._handleMouseDown(k, g);
                }), f.scroll.bar.on("mousedown" + g, function(i) {
                    if (1 != i.which) return !0;
                    var j = i["x" === b ? "pageX" : "pageY"], k = e[m]();
                    return f.scroll.addClass("scroll-draggable"), a(document).on("mousemove" + g, function(a) {
                        var d = parseInt((a["x" === b ? "pageX" : "pageY"] - j) / f.kx, 10);
                        "x" === b && h.isRtl && (c.msie || c.msedge) && (d *= -1), e[m](k + d);
                    }), d._handleMouseDown(function() {
                        f.scroll.removeClass("scroll-draggable"), p = e[m]();
                    }, i);
                }));
            }), a.each(i, function(a, b) {
                var c = "scroll-scroll" + a + "_visible", d = "x" == a ? i.y : i.x;
                b.scroll.removeClass(c), d.scroll.removeClass(c), f.removeClass(c);
            }), a.each(i, function(b, c) {
                a.extend(c, "x" == b ? {
                    offset: parseInt(e.css("left"), 10) || 0,
                    size: e.prop("scrollWidth"),
                    visible: k.width()
                } : {
                    offset: parseInt(e.css("top"), 10) || 0,
                    size: e.prop("scrollHeight"),
                    visible: k.height()
                });
            }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), 
            a.isFunction(h.onUpdate) && h.onUpdate.apply(this, [ e ]), a.each(i, function(a, b) {
                var c = "x" === a ? "left" : "top", d = "x" === a ? "outerWidth" : "outerHeight", f = "x" === a ? "width" : "height", g = parseInt(e.css(c), 10) || 0, i = b.size, j = b.visible + g, k = b.scroll.size[d]() + (parseInt(b.scroll.size.css(c), 10) || 0);
                h.autoScrollSize && (b.scrollbarSize = parseInt(k * j / i, 10), b.scroll.bar.css(f, b.scrollbarSize + "px")), 
                b.scrollbarSize = b.scroll.bar[d](), b.kx = (k - b.scrollbarSize) / (i - j) || 1, 
                b.maxScrollOffset = i - j;
            }), e.scrollLeft(m.scrollLeft).scrollTop(m.scrollTop).trigger("scroll");
        },
        _getScroll: function(b) {
            var c = {
                advanced: [ '<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>" ].join(""),
                simple: [ '<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>" ].join("")
            };
            return c[b] && (b = c[b]), b || (b = c.simple), b = "string" == typeof b ? a(b).appendTo(this.wrapper) : a(b), 
            a.extend(b, {
                bar: b.find(".scroll-bar"),
                size: b.find(".scroll-element_size"),
                track: b.find(".scroll-element_track")
            }), b;
        },
        _handleMouseDown: function(b, c) {
            var d = this.namespace;
            return a(document).on("blur" + d, function() {
                a(document).add("body").off(d), b && b();
            }), a(document).on("dragstart" + d, function(a) {
                return a.preventDefault(), !1;
            }), a(document).on("mouseup" + d, function() {
                a(document).add("body").off(d), b && b();
            }), a("body").on("selectstart" + d, function(a) {
                return a.preventDefault(), !1;
            }), c && c.preventDefault(), !1;
        },
        _updateScroll: function(b, d) {
            var e = this.container, f = this.containerWrapper || e, g = "scroll-scroll" + b + "_visible", h = "x" === b ? this.scrolly : this.scrollx, i = parseInt(this.container.css("x" === b ? "left" : "top"), 10) || 0, j = this.wrapper, k = d.size, l = d.visible + i;
            d.isVisible = k - l > 1, d.isVisible ? (d.scroll.addClass(g), h.scroll.addClass(g), 
            f.addClass(g)) : (d.scroll.removeClass(g), h.scroll.removeClass(g), f.removeClass(g)), 
            "y" === b && (e.is("textarea") || k < l ? f.css({
                height: l + c.scroll.height + "px",
                "max-height": "none"
            }) : f.css({
                "max-height": l + c.scroll.height + "px"
            })), d.size == e.prop("scrollWidth") && h.size == e.prop("scrollHeight") && d.visible == j.width() && h.visible == j.height() && d.offset == (parseInt(e.css("left"), 10) || 0) && h.offset == (parseInt(e.css("top"), 10) || 0) || (a.extend(this.scrollx, {
                offset: parseInt(e.css("left"), 10) || 0,
                size: e.prop("scrollWidth"),
                visible: j.width()
            }), a.extend(this.scrolly, {
                offset: parseInt(e.css("top"), 10) || 0,
                size: this.container.prop("scrollHeight"),
                visible: j.height()
            }), this._updateScroll("x" === b ? "y" : "x", h));
        }
    };
    var f = e;
    a.fn.scrollbar = function(b, d) {
        return "string" != typeof b && (d = b, b = "init"), "undefined" == typeof d && (d = []), 
        a.isArray(d) || (d = [ d ]), this.not("body, .scroll-wrapper").each(function() {
            var e = a(this), g = e.data(c.data.name);
            (g || "init" === b) && (g || (g = new f(e)), g[b] && g[b].apply(g, d));
        }), this;
    }, a.fn.scrollbar.options = d;
    var g = function() {
        var a = 0, d = 0;
        return function(e) {
            var f, h, i, j, k, l, m;
            for (f = 0; f < c.scrolls.length; f++) j = c.scrolls[f], h = j.container, i = j.options, 
            k = j.wrapper, l = j.scrollx, m = j.scrolly, (e || i.autoUpdate && k && k.is(":visible") && (h.prop("scrollWidth") != l.size || h.prop("scrollHeight") != m.size || k.width() != l.visible || k.height() != m.visible)) && (j.init(), 
            i.debug && (window.console && console.log({
                scrollHeight: h.prop("scrollHeight") + ":" + j.scrolly.size,
                scrollWidth: h.prop("scrollWidth") + ":" + j.scrollx.size,
                visibleHeight: k.height() + ":" + j.scrolly.visible,
                visibleWidth: k.width() + ":" + j.scrollx.visible
            }, !0), d++));
            b && d > 10 ? (window.console && console.log("Scroll updates exceed 10"), g = function() {}) : (clearTimeout(a), 
            a = setTimeout(g, 300));
        };
    }();
    window.angular && !function(a) {
        a.module("jQueryScrollbar", []).provider("jQueryScrollbar", function() {
            var b = d;
            return {
                setOptions: function(c) {
                    a.extend(b, c);
                },
                $get: function() {
                    return {
                        options: a.copy(b)
                    };
                }
            };
        }).directive("jqueryScrollbar", [ "jQueryScrollbar", "$parse", function(a, b) {
            return {
                restrict: "AC",
                link: function(c, d, e) {
                    var f = b(e.jqueryScrollbar), g = f(c);
                    d.scrollbar(g || a.options).on("$destroy", function() {
                        d.scrollbar("destroy");
                    });
                }
            };
        } ]);
    }(window.angular);
});

var List = function(t) {
    function e(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
    }
    var r = {};
    return e.m = t, e.c = r, e.i = function(t) {
        return t;
    }, e.d = function(t, r, n) {
        e.o(t, r) || Object.defineProperty(t, r, {
            configurable: !1,
            enumerable: !0,
            get: n
        });
    }, e.n = function(t) {
        var r = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return e.d(r, "a", r), r;
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 11);
}([ function(t, e, r) {
    function n(t) {
        if (!t || !t.nodeType) throw new Error("A DOM element reference is required");
        this.el = t, this.list = t.classList;
    }
    var i = r(4), s = /\s+/;
    Object.prototype.toString;
    t.exports = function(t) {
        return new n(t);
    }, n.prototype.add = function(t) {
        if (this.list) return this.list.add(t), this;
        var e = this.array(), r = i(e, t);
        return ~r || e.push(t), this.el.className = e.join(" "), this;
    }, n.prototype.remove = function(t) {
        if (this.list) return this.list.remove(t), this;
        var e = this.array(), r = i(e, t);
        return ~r && e.splice(r, 1), this.el.className = e.join(" "), this;
    }, n.prototype.toggle = function(t, e) {
        return this.list ? ("undefined" != typeof e ? e !== this.list.toggle(t, e) && this.list.toggle(t) : this.list.toggle(t), 
        this) : ("undefined" != typeof e ? e ? this.add(t) : this.remove(t) : this.has(t) ? this.remove(t) : this.add(t), 
        this);
    }, n.prototype.array = function() {
        var t = this.el.getAttribute("class") || "", e = t.replace(/^\s+|\s+$/g, ""), r = e.split(s);
        return "" === r[0] && r.shift(), r;
    }, n.prototype.has = n.prototype.contains = function(t) {
        return this.list ? this.list.contains(t) : !!~i(this.array(), t);
    };
}, function(t, e, r) {
    var n = window.addEventListener ? "addEventListener" : "attachEvent", i = window.removeEventListener ? "removeEventListener" : "detachEvent", s = "addEventListener" !== n ? "on" : "", a = r(5);
    e.bind = function(t, e, r, i) {
        t = a(t);
        for (var o = 0; o < t.length; o++) t[o][n](s + e, r, i || !1);
    }, e.unbind = function(t, e, r, n) {
        t = a(t);
        for (var o = 0; o < t.length; o++) t[o][i](s + e, r, n || !1);
    };
}, function(t, e) {
    t.exports = function(t) {
        return function(e, r, n) {
            var i = this;
            this._values = {}, this.found = !1, this.filtered = !1;
            var s = function(e, r, n) {
                if (void 0 === r) n ? i.values(e, n) : i.values(e); else {
                    i.elm = r;
                    var s = t.templater.get(i, e);
                    i.values(s);
                }
            };
            this.values = function(e, r) {
                if (void 0 === e) return i._values;
                for (var n in e) i._values[n] = e[n];
                r !== !0 && t.templater.set(i, i.values());
            }, this.show = function() {
                t.templater.show(i);
            }, this.hide = function() {
                t.templater.hide(i);
            }, this.matching = function() {
                return t.filtered && t.searched && i.found && i.filtered || t.filtered && !t.searched && i.filtered || !t.filtered && t.searched && i.found || !t.filtered && !t.searched;
            }, this.visible = function() {
                return !(!i.elm || i.elm.parentNode != t.list);
            }, s(e, r, n);
        };
    };
}, function(t, e) {
    var r = function(t, e, r) {
        return r ? t.getElementsByClassName(e)[0] : t.getElementsByClassName(e);
    }, n = function(t, e, r) {
        return e = "." + e, r ? t.querySelector(e) : t.querySelectorAll(e);
    }, i = function(t, e, r) {
        for (var n = [], i = "*", s = t.getElementsByTagName(i), a = s.length, o = new RegExp("(^|\\s)" + e + "(\\s|$)"), l = 0, u = 0; l < a; l++) if (o.test(s[l].className)) {
            if (r) return s[l];
            n[u] = s[l], u++;
        }
        return n;
    };
    t.exports = function() {
        return function(t, e, s, a) {
            return a = a || {}, a.test && a.getElementsByClassName || !a.test && document.getElementsByClassName ? r(t, e, s) : a.test && a.querySelector || !a.test && document.querySelector ? n(t, e, s) : i(t, e, s);
        };
    }();
}, function(t, e) {
    var r = [].indexOf;
    t.exports = function(t, e) {
        if (r) return t.indexOf(e);
        for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;
        return -1;
    };
}, function(t, e) {
    function r(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
    }
    t.exports = function(t) {
        if ("undefined" == typeof t) return [];
        if (null === t) return [ null ];
        if (t === window) return [ window ];
        if ("string" == typeof t) return [ t ];
        if (r(t)) return t;
        if ("number" != typeof t.length) return [ t ];
        if ("function" == typeof t && t instanceof Function) return [ t ];
        for (var e = [], n = 0; n < t.length; n++) (Object.prototype.hasOwnProperty.call(t, n) || n in t) && e.push(t[n]);
        return e.length ? e : [];
    };
}, function(t, e) {
    t.exports = function(t) {
        return t = void 0 === t ? "" : t, t = null === t ? "" : t, t = t.toString();
    };
}, function(t, e) {
    t.exports = function(t) {
        for (var e, r = Array.prototype.slice.call(arguments, 1), n = 0; e = r[n]; n++) if (e) for (var i in e) t[i] = e[i];
        return t;
    };
}, function(t, e) {
    t.exports = function(t) {
        var e = function(r, n, i) {
            var s = r.splice(0, 50);
            i = i || [], i = i.concat(t.add(s)), r.length > 0 ? setTimeout(function() {
                e(r, n, i);
            }, 1) : (t.update(), n(i));
        };
        return e;
    };
}, function(t, e) {
    t.exports = function(t) {
        return t.handlers.filterStart = t.handlers.filterStart || [], t.handlers.filterComplete = t.handlers.filterComplete || [], 
        function(e) {
            if (t.trigger("filterStart"), t.i = 1, t.reset.filter(), void 0 === e) t.filtered = !1; else {
                t.filtered = !0;
                for (var r = t.items, n = 0, i = r.length; n < i; n++) {
                    var s = r[n];
                    e(s) ? s.filtered = !0 : s.filtered = !1;
                }
            }
            return t.update(), t.trigger("filterComplete"), t.visibleItems;
        };
    };
}, function(t, e, r) {
    var n = (r(0), r(1)), i = r(7), s = r(6), a = r(3), o = r(19);
    t.exports = function(t, e) {
        e = e || {}, e = i({
            location: 0,
            distance: 100,
            threshold: .4,
            multiSearch: !0,
            searchClass: "fuzzy-search"
        }, e);
        var r = {
            search: function(n, i) {
                for (var s = e.multiSearch ? n.replace(/ +$/, "").split(/ +/) : [ n ], a = 0, o = t.items.length; a < o; a++) r.item(t.items[a], i, s);
            },
            item: function(t, e, n) {
                for (var i = !0, s = 0; s < n.length; s++) {
                    for (var a = !1, o = 0, l = e.length; o < l; o++) r.values(t.values(), e[o], n[s]) && (a = !0);
                    a || (i = !1);
                }
                t.found = i;
            },
            values: function(t, r, n) {
                if (t.hasOwnProperty(r)) {
                    var i = s(t[r]).toLowerCase();
                    if (o(i, n, e)) return !0;
                }
                return !1;
            }
        };
        return n.bind(a(t.listContainer, e.searchClass), "keyup", function(e) {
            var n = e.target || e.srcElement;
            t.search(n.value, r.search);
        }), function(e, n) {
            t.search(e, n, r.search);
        };
    };
}, function(t, e, r) {
    var n = r(18), i = r(3), s = r(7), a = r(4), o = r(1), l = r(6), u = r(0), c = r(17), f = r(5);
    t.exports = function(t, e, h) {
        var d, v = this, m = r(2)(v), g = r(8)(v), p = r(12)(v);
        d = {
            start: function() {
                v.listClass = "list", v.searchClass = "search", v.sortClass = "sort", v.page = 1e4, 
                v.i = 1, v.items = [], v.visibleItems = [], v.matchingItems = [], v.searched = !1, 
                v.filtered = !1, v.searchColumns = void 0, v.handlers = {
                    updated: []
                }, v.valueNames = [], v.utils = {
                    getByClass: i,
                    extend: s,
                    indexOf: a,
                    events: o,
                    toString: l,
                    naturalSort: n,
                    classes: u,
                    getAttribute: c,
                    toArray: f
                }, v.utils.extend(v, e), v.listContainer = "string" == typeof t ? document.getElementById(t) : t, 
                v.listContainer && (v.list = i(v.listContainer, v.listClass, !0), v.parse = r(13)(v), 
                v.templater = r(16)(v), v.search = r(14)(v), v.filter = r(9)(v), v.sort = r(15)(v), 
                v.fuzzySearch = r(10)(v, e.fuzzySearch), this.handlers(), this.items(), this.pagination(), 
                v.update());
            },
            handlers: function() {
                for (var t in v.handlers) v[t] && v.on(t, v[t]);
            },
            items: function() {
                v.parse(v.list), void 0 !== h && v.add(h);
            },
            pagination: function() {
                if (void 0 !== e.pagination) {
                    e.pagination === !0 && (e.pagination = [ {} ]), void 0 === e.pagination[0] && (e.pagination = [ e.pagination ]);
                    for (var t = 0, r = e.pagination.length; t < r; t++) p(e.pagination[t]);
                }
            }
        }, this.reIndex = function() {
            v.items = [], v.visibleItems = [], v.matchingItems = [], v.searched = !1, v.filtered = !1, 
            v.parse(v.list);
        }, this.toJSON = function() {
            for (var t = [], e = 0, r = v.items.length; e < r; e++) t.push(v.items[e].values());
            return t;
        }, this.add = function(t, e) {
            if (0 !== t.length) {
                if (e) return void g(t, e);
                var r = [], n = !1;
                void 0 === t[0] && (t = [ t ]);
                for (var i = 0, s = t.length; i < s; i++) {
                    var a = null;
                    n = v.items.length > v.page, a = new m(t[i], void 0, n), v.items.push(a), r.push(a);
                }
                return v.update(), r;
            }
        }, this.show = function(t, e) {
            return this.i = t, this.page = e, v.update(), v;
        }, this.remove = function(t, e, r) {
            for (var n = 0, i = 0, s = v.items.length; i < s; i++) v.items[i].values()[t] == e && (v.templater.remove(v.items[i], r), 
            v.items.splice(i, 1), s--, i--, n++);
            return v.update(), n;
        }, this.get = function(t, e) {
            for (var r = [], n = 0, i = v.items.length; n < i; n++) {
                var s = v.items[n];
                s.values()[t] == e && r.push(s);
            }
            return r;
        }, this.size = function() {
            return v.items.length;
        }, this.clear = function() {
            return v.templater.clear(), v.items = [], v;
        }, this.on = function(t, e) {
            return v.handlers[t].push(e), v;
        }, this.off = function(t, e) {
            var r = v.handlers[t], n = a(r, e);
            return n > -1 && r.splice(n, 1), v;
        }, this.trigger = function(t) {
            for (var e = v.handlers[t].length; e--; ) v.handlers[t][e](v);
            return v;
        }, this.reset = {
            filter: function() {
                for (var t = v.items, e = t.length; e--; ) t[e].filtered = !1;
                return v;
            },
            search: function() {
                for (var t = v.items, e = t.length; e--; ) t[e].found = !1;
                return v;
            }
        }, this.update = function() {
            var t = v.items, e = t.length;
            v.visibleItems = [], v.matchingItems = [], v.templater.clear();
            for (var r = 0; r < e; r++) t[r].matching() && v.matchingItems.length + 1 >= v.i && v.visibleItems.length < v.page ? (t[r].show(), 
            v.visibleItems.push(t[r]), v.matchingItems.push(t[r])) : t[r].matching() ? (v.matchingItems.push(t[r]), 
            t[r].hide()) : t[r].hide();
            return v.trigger("updated"), v;
        }, d.start();
    };
}, function(t, e, r) {
    var n = r(0), i = r(1), s = r(11);
    t.exports = function(t) {
        var e = function(e, i) {
            var s, o = t.matchingItems.length, l = t.i, u = t.page, c = Math.ceil(o / u), f = Math.ceil(l / u), h = i.innerWindow || 2, d = i.left || i.outerWindow || 0, v = i.right || i.outerWindow || 0;
            v = c - v, e.clear();
            for (var m = 1; m <= c; m++) {
                var g = f === m ? "active" : "";
                r.number(m, d, v, f, h) ? (s = e.add({
                    page: m,
                    dotted: !1
                })[0], g && n(s.elm).add(g), a(s.elm, m, u)) : r.dotted(e, m, d, v, f, h, e.size()) && (s = e.add({
                    page: "...",
                    dotted: !0
                })[0], n(s.elm).add("disabled"));
            }
        }, r = {
            number: function(t, e, r, n, i) {
                return this.left(t, e) || this.right(t, r) || this.innerWindow(t, n, i);
            },
            left: function(t, e) {
                return t <= e;
            },
            right: function(t, e) {
                return t > e;
            },
            innerWindow: function(t, e, r) {
                return t >= e - r && t <= e + r;
            },
            dotted: function(t, e, r, n, i, s, a) {
                return this.dottedLeft(t, e, r, n, i, s) || this.dottedRight(t, e, r, n, i, s, a);
            },
            dottedLeft: function(t, e, r, n, i, s) {
                return e == r + 1 && !this.innerWindow(e, i, s) && !this.right(e, n);
            },
            dottedRight: function(t, e, r, n, i, s, a) {
                return !t.items[a - 1].values().dotted && (e == n && !this.innerWindow(e, i, s) && !this.right(e, n));
            }
        }, a = function(e, r, n) {
            i.bind(e, "click", function() {
                t.show((r - 1) * n + 1, n);
            });
        };
        return function(r) {
            var n = new s(t.listContainer.id, {
                listClass: r.paginationClass || "pagination",
                item: "<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",
                valueNames: [ "page", "dotted" ],
                searchClass: "pagination-search-that-is-not-supposed-to-exist",
                sortClass: "pagination-sort-that-is-not-supposed-to-exist"
            });
            t.on("updated", function() {
                e(n, r);
            }), e(n, r);
        };
    };
}, function(t, e, r) {
    t.exports = function(t) {
        var e = r(2)(t), n = function(t) {
            for (var e = t.childNodes, r = [], n = 0, i = e.length; n < i; n++) void 0 === e[n].data && r.push(e[n]);
            return r;
        }, i = function(r, n) {
            for (var i = 0, s = r.length; i < s; i++) t.items.push(new e(n, r[i]));
        }, s = function(e, r) {
            var n = e.splice(0, 50);
            i(n, r), e.length > 0 ? setTimeout(function() {
                s(e, r);
            }, 1) : (t.update(), t.trigger("parseComplete"));
        };
        return t.handlers.parseComplete = t.handlers.parseComplete || [], function() {
            var e = n(t.list), r = t.valueNames;
            t.indexAsync ? s(e, r) : i(e, r);
        };
    };
}, function(t, e) {
    t.exports = function(t) {
        var e, r, n, i, s = {
            resetList: function() {
                t.i = 1, t.templater.clear(), i = void 0;
            },
            setOptions: function(t) {
                2 == t.length && t[1] instanceof Array ? r = t[1] : 2 == t.length && "function" == typeof t[1] ? (r = void 0, 
                i = t[1]) : 3 == t.length ? (r = t[1], i = t[2]) : r = void 0;
            },
            setColumns: function() {
                0 !== t.items.length && void 0 === r && (r = void 0 === t.searchColumns ? s.toArray(t.items[0].values()) : t.searchColumns);
            },
            setSearchString: function(e) {
                e = t.utils.toString(e).toLowerCase(), e = e.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), 
                n = e;
            },
            toArray: function(t) {
                var e = [];
                for (var r in t) e.push(r);
                return e;
            }
        }, a = {
            list: function() {
                for (var e = 0, r = t.items.length; e < r; e++) a.item(t.items[e]);
            },
            item: function(t) {
                t.found = !1;
                for (var e = 0, n = r.length; e < n; e++) if (a.values(t.values(), r[e])) return void (t.found = !0);
            },
            values: function(r, i) {
                return !!(r.hasOwnProperty(i) && (e = t.utils.toString(r[i]).toLowerCase(), "" !== n && e.search(n) > -1));
            },
            reset: function() {
                t.reset.search(), t.searched = !1;
            }
        }, o = function(e) {
            return t.trigger("searchStart"), s.resetList(), s.setSearchString(e), s.setOptions(arguments), 
            s.setColumns(), "" === n ? a.reset() : (t.searched = !0, i ? i(n, r) : a.list()), 
            t.update(), t.trigger("searchComplete"), t.visibleItems;
        };
        return t.handlers.searchStart = t.handlers.searchStart || [], t.handlers.searchComplete = t.handlers.searchComplete || [], 
        t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "keyup", function(e) {
            var r = e.target || e.srcElement, n = "" === r.value && !t.searched;
            n || o(r.value);
        }), t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "input", function(t) {
            var e = t.target || t.srcElement;
            "" === e.value && o("");
        }), o;
    };
}, function(t, e) {
    t.exports = function(t) {
        var e = {
            els: void 0,
            clear: function() {
                for (var r = 0, n = e.els.length; r < n; r++) t.utils.classes(e.els[r]).remove("asc"), 
                t.utils.classes(e.els[r]).remove("desc");
            },
            getOrder: function(e) {
                var r = t.utils.getAttribute(e, "data-order");
                return "asc" == r || "desc" == r ? r : t.utils.classes(e).has("desc") ? "asc" : t.utils.classes(e).has("asc") ? "desc" : "asc";
            },
            getInSensitive: function(e, r) {
                var n = t.utils.getAttribute(e, "data-insensitive");
                "false" === n ? r.insensitive = !1 : r.insensitive = !0;
            },
            setOrder: function(r) {
                for (var n = 0, i = e.els.length; n < i; n++) {
                    var s = e.els[n];
                    if (t.utils.getAttribute(s, "data-sort") === r.valueName) {
                        var a = t.utils.getAttribute(s, "data-order");
                        "asc" == a || "desc" == a ? a == r.order && t.utils.classes(s).add(r.order) : t.utils.classes(s).add(r.order);
                    }
                }
            }
        }, r = function() {
            t.trigger("sortStart");
            var r = {}, n = arguments[0].currentTarget || arguments[0].srcElement || void 0;
            n ? (r.valueName = t.utils.getAttribute(n, "data-sort"), e.getInSensitive(n, r), 
            r.order = e.getOrder(n)) : (r = arguments[1] || r, r.valueName = arguments[0], r.order = r.order || "asc", 
            r.insensitive = "undefined" == typeof r.insensitive || r.insensitive), e.clear(), 
            e.setOrder(r);
            var i, s = r.sortFunction || t.sortFunction || null, a = "desc" === r.order ? -1 : 1;
            i = s ? function(t, e) {
                return s(t, e, r) * a;
            } : function(e, n) {
                var i = t.utils.naturalSort;
                return i.alphabet = t.alphabet || r.alphabet || void 0, !i.alphabet && r.insensitive && (i = t.utils.naturalSort.caseInsensitive), 
                i(e.values()[r.valueName], n.values()[r.valueName]) * a;
            }, t.items.sort(i), t.update(), t.trigger("sortComplete");
        };
        return t.handlers.sortStart = t.handlers.sortStart || [], t.handlers.sortComplete = t.handlers.sortComplete || [], 
        e.els = t.utils.getByClass(t.listContainer, t.sortClass), t.utils.events.bind(e.els, "click", r), 
        t.on("searchStart", e.clear), t.on("filterStart", e.clear), r;
    };
}, function(t, e) {
    var r = function(t) {
        var e, r = this, n = function() {
            e = r.getItemSource(t.item), e && (e = r.clearSourceItem(e, t.valueNames));
        };
        this.clearSourceItem = function(e, r) {
            for (var n = 0, i = r.length; n < i; n++) {
                var s;
                if (r[n].data) for (var a = 0, o = r[n].data.length; a < o; a++) e.setAttribute("data-" + r[n].data[a], ""); else r[n].attr && r[n].name ? (s = t.utils.getByClass(e, r[n].name, !0), 
                s && s.setAttribute(r[n].attr, "")) : (s = t.utils.getByClass(e, r[n], !0), s && (s.innerHTML = ""));
                s = void 0;
            }
            return e;
        }, this.getItemSource = function(e) {
            if (void 0 === e) {
                for (var r = t.list.childNodes, n = 0, i = r.length; n < i; n++) if (void 0 === r[n].data) return r[n].cloneNode(!0);
            } else {
                if (/<tr[\s>]/g.exec(e)) {
                    var s = document.createElement("tbody");
                    return s.innerHTML = e, s.firstChild;
                }
                if (e.indexOf("<") !== -1) {
                    var a = document.createElement("div");
                    return a.innerHTML = e, a.firstChild;
                }
                var o = document.getElementById(t.item);
                if (o) return o;
            }
        }, this.get = function(e, n) {
            r.create(e);
            for (var i = {}, s = 0, a = n.length; s < a; s++) {
                var o;
                if (n[s].data) for (var l = 0, u = n[s].data.length; l < u; l++) i[n[s].data[l]] = t.utils.getAttribute(e.elm, "data-" + n[s].data[l]); else n[s].attr && n[s].name ? (o = t.utils.getByClass(e.elm, n[s].name, !0), 
                i[n[s].name] = o ? t.utils.getAttribute(o, n[s].attr) : "") : (o = t.utils.getByClass(e.elm, n[s], !0), 
                i[n[s]] = o ? o.innerHTML : "");
                o = void 0;
            }
            return i;
        }, this.set = function(e, n) {
            var i = function(e) {
                for (var r = 0, n = t.valueNames.length; r < n; r++) if (t.valueNames[r].data) {
                    for (var i = t.valueNames[r].data, s = 0, a = i.length; s < a; s++) if (i[s] === e) return {
                        data: e
                    };
                } else {
                    if (t.valueNames[r].attr && t.valueNames[r].name && t.valueNames[r].name == e) return t.valueNames[r];
                    if (t.valueNames[r] === e) return e;
                }
            }, s = function(r, n) {
                var s, a = i(r);
                a && (a.data ? e.elm.setAttribute("data-" + a.data, n) : a.attr && a.name ? (s = t.utils.getByClass(e.elm, a.name, !0), 
                s && s.setAttribute(a.attr, n)) : (s = t.utils.getByClass(e.elm, a, !0), s && (s.innerHTML = n)), 
                s = void 0);
            };
            if (!r.create(e)) for (var a in n) n.hasOwnProperty(a) && s(a, n[a]);
        }, this.create = function(t) {
            if (void 0 !== t.elm) return !1;
            if (void 0 === e) throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");
            var n = e.cloneNode(!0);
            return n.removeAttribute("id"), t.elm = n, r.set(t, t.values()), !0;
        }, this.remove = function(e) {
            e.elm.parentNode === t.list && t.list.removeChild(e.elm);
        }, this.show = function(e) {
            r.create(e), t.list.appendChild(e.elm);
        }, this.hide = function(e) {
            void 0 !== e.elm && e.elm.parentNode === t.list && t.list.removeChild(e.elm);
        }, this.clear = function() {
            if (t.list.hasChildNodes()) for (;t.list.childNodes.length >= 1; ) t.list.removeChild(t.list.firstChild);
        }, n();
    };
    t.exports = function(t) {
        return new r(t);
    };
}, function(t, e) {
    t.exports = function(t, e) {
        var r = t.getAttribute && t.getAttribute(e) || null;
        if (!r) for (var n = t.attributes, i = n.length, s = 0; s < i; s++) void 0 !== e[s] && e[s].nodeName === e && (r = e[s].nodeValue);
        return r;
    };
}, function(t, e, r) {
    "use strict";
    function n(t) {
        return t >= 48 && t <= 57;
    }
    function i(t, e) {
        for (var r = (t += "").length, i = (e += "").length, s = 0, l = 0; s < r && l < i; ) {
            var u = t.charCodeAt(s), c = e.charCodeAt(l);
            if (n(u)) {
                if (!n(c)) return u - c;
                for (var f = s, h = l; 48 === u && ++f < r; ) u = t.charCodeAt(f);
                for (;48 === c && ++h < i; ) c = e.charCodeAt(h);
                for (var d = f, v = h; d < r && n(t.charCodeAt(d)); ) ++d;
                for (;v < i && n(e.charCodeAt(v)); ) ++v;
                var m = d - f - v + h;
                if (m) return m;
                for (;f < d; ) if (m = t.charCodeAt(f++) - e.charCodeAt(h++)) return m;
                s = d, l = v;
            } else {
                if (u !== c) return u < o && c < o && a[u] !== -1 && a[c] !== -1 ? a[u] - a[c] : u - c;
                ++s, ++l;
            }
        }
        return r - i;
    }
    var s, a, o = 0;
    i.caseInsensitive = i.i = function(t, e) {
        return i(("" + t).toLowerCase(), ("" + e).toLowerCase());
    }, Object.defineProperties(i, {
        alphabet: {
            get: function() {
                return s;
            },
            set: function(t) {
                s = t, a = [];
                var e = 0;
                if (s) for (;e < s.length; e++) a[s.charCodeAt(e)] = e;
                for (o = a.length, e = 0; e < o; e++) void 0 === a[e] && (a[e] = -1);
            }
        }
    }), t.exports = i;
}, function(t, e) {
    t.exports = function(t, e, r) {
        function n(t, r) {
            var n = t / e.length, i = Math.abs(o - r);
            return s ? n + i / s : i ? 1 : n;
        }
        var i = r.location || 0, s = r.distance || 100, a = r.threshold || .4;
        if (e === t) return !0;
        if (e.length > 32) return !1;
        var o = i, l = function() {
            var t, r = {};
            for (t = 0; t < e.length; t++) r[e.charAt(t)] = 0;
            for (t = 0; t < e.length; t++) r[e.charAt(t)] |= 1 << e.length - t - 1;
            return r;
        }(), u = a, c = t.indexOf(e, o);
        c != -1 && (u = Math.min(n(0, c), u), c = t.lastIndexOf(e, o + e.length), c != -1 && (u = Math.min(n(0, c), u)));
        var f = 1 << e.length - 1;
        c = -1;
        for (var h, d, v, m = e.length + t.length, g = 0; g < e.length; g++) {
            for (h = 0, d = m; h < d; ) n(g, o + d) <= u ? h = d : m = d, d = Math.floor((m - h) / 2 + h);
            m = d;
            var p = Math.max(1, o - d + 1), C = Math.min(o + d, t.length) + e.length, y = Array(C + 2);
            y[C + 1] = (1 << g) - 1;
            for (var b = C; b >= p; b--) {
                var w = l[t.charAt(b - 1)];
                if (0 === g ? y[b] = (y[b + 1] << 1 | 1) & w : y[b] = (y[b + 1] << 1 | 1) & w | ((v[b + 1] | v[b]) << 1 | 1) | v[b + 1], 
                y[b] & f) {
                    var x = n(g, b - 1);
                    if (x <= u) {
                        if (u = x, c = b - 1, !(c > o)) break;
                        p = Math.max(1, 2 * o - c);
                    }
                }
            }
            if (n(g + 1, o) > u) break;
            v = y;
        }
        return !(c < 0);
    };
} ]);

!function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b();
}(this, function() {
    "use strict";
    function a() {
        return sd.apply(null, arguments);
    }
    function b(a) {
        sd = a;
    }
    function c(a) {
        return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a);
    }
    function d(a) {
        return null != a && "[object Object]" === Object.prototype.toString.call(a);
    }
    function e(a) {
        var b;
        for (b in a) return !1;
        return !0;
    }
    function f(a) {
        return void 0 === a;
    }
    function g(a) {
        return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a);
    }
    function h(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a);
    }
    function i(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d;
    }
    function j(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function k(a, b) {
        for (var c in b) j(b, c) && (a[c] = b[c]);
        return j(b, "toString") && (a.toString = b.toString), j(b, "valueOf") && (a.valueOf = b.valueOf), 
        a;
    }
    function l(a, b, c, d) {
        return sb(a, b, c, d, !0).utc();
    }
    function m() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        };
    }
    function n(a) {
        return null == a._pf && (a._pf = m()), a._pf;
    }
    function o(a) {
        if (null == a._isValid) {
            var b = n(a), c = ud.call(b.parsedDateParts, function(a) {
                return null != a;
            }), d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);
            if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), 
            null != Object.isFrozen && Object.isFrozen(a)) return d;
            a._isValid = d;
        }
        return a._isValid;
    }
    function p(a) {
        var b = l(NaN);
        return null != a ? k(n(b), a) : n(b).userInvalidated = !0, b;
    }
    function q(a, b) {
        var c, d, e;
        if (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), f(b._i) || (a._i = b._i), 
        f(b._f) || (a._f = b._f), f(b._l) || (a._l = b._l), f(b._strict) || (a._strict = b._strict), 
        f(b._tzm) || (a._tzm = b._tzm), f(b._isUTC) || (a._isUTC = b._isUTC), f(b._offset) || (a._offset = b._offset), 
        f(b._pf) || (a._pf = n(b)), f(b._locale) || (a._locale = b._locale), vd.length > 0) for (c = 0; c < vd.length; c++) d = vd[c], 
        e = b[d], f(e) || (a[d] = e);
        return a;
    }
    function r(b) {
        q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), 
        wd === !1 && (wd = !0, a.updateOffset(this), wd = !1);
    }
    function s(a) {
        return a instanceof r || null != a && null != a._isAMomentObject;
    }
    function t(a) {
        return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
    }
    function u(a) {
        var b = +a, c = 0;
        return 0 !== b && isFinite(b) && (c = t(b)), c;
    }
    function v(a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for (d = 0; d < e; d++) (c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
        return g + f;
    }
    function w(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b);
    }
    function x(b, c) {
        var d = !0;
        return k(function() {
            if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
                for (var e, f = [], g = 0; g < arguments.length; g++) {
                    if (e = "", "object" == typeof arguments[g]) {
                        e += "\n[" + g + "] ";
                        for (var h in arguments[0]) e += h + ": " + arguments[0][h] + ", ";
                        e = e.slice(0, -2);
                    } else e = arguments[g];
                    f.push(e);
                }
                w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + new Error().stack), 
                d = !1;
            }
            return c.apply(this, arguments);
        }, c);
    }
    function y(b, c) {
        null != a.deprecationHandler && a.deprecationHandler(b, c), xd[b] || (w(c), xd[b] = !0);
    }
    function z(a) {
        return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a);
    }
    function A(a) {
        var b, c;
        for (c in a) b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
        this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
    }
    function B(a, b) {
        var c, e = k({}, a);
        for (c in b) j(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, k(e[c], a[c]), k(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
        for (c in a) j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
        return e;
    }
    function C(a) {
        null != a && this.set(a);
    }
    function D(a, b, c) {
        var d = this._calendar[a] || this._calendar.sameElse;
        return z(d) ? d.call(b, c) : d;
    }
    function E(a) {
        var b = this._longDateFormat[a], c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1);
        }), this._longDateFormat[a]);
    }
    function F() {
        return this._invalidDate;
    }
    function G(a) {
        return this._ordinal.replace("%d", a);
    }
    function H(a, b, c, d) {
        var e = this._relativeTime[c];
        return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
    }
    function I(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return z(c) ? c(b) : c.replace(/%s/i, b);
    }
    function J(a, b) {
        var c = a.toLowerCase();
        Hd[c] = Hd[c + "s"] = Hd[b] = a;
    }
    function K(a) {
        return "string" == typeof a ? Hd[a] || Hd[a.toLowerCase()] : void 0;
    }
    function L(a) {
        var b, c, d = {};
        for (c in a) j(a, c) && (b = K(c), b && (d[b] = a[c]));
        return d;
    }
    function M(a, b) {
        Id[a] = b;
    }
    function N(a) {
        var b = [];
        for (var c in a) b.push({
            unit: c,
            priority: Id[c]
        });
        return b.sort(function(a, b) {
            return a.priority - b.priority;
        }), b;
    }
    function O(b, c) {
        return function(d) {
            return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b);
        };
    }
    function P(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
    }
    function Q(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
    }
    function R(a) {
        return a = K(a), z(this[a]) ? this[a]() : this;
    }
    function S(a, b) {
        if ("object" == typeof a) {
            a = L(a);
            for (var c = N(a), d = 0; d < c.length; d++) this[c[d].unit](a[c[d].unit]);
        } else if (a = K(a), z(this[a])) return this[a](b);
        return this;
    }
    function T(a, b, c) {
        var d = "" + Math.abs(a), e = b - d.length, f = a >= 0;
        return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d;
    }
    function U(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function() {
            return this[d]();
        }), a && (Md[a] = e), b && (Md[b[0]] = function() {
            return T(e.apply(this, arguments), b[1], b[2]);
        }), c && (Md[c] = function() {
            return this.localeData().ordinal(e.apply(this, arguments), a);
        });
    }
    function V(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
    }
    function W(a) {
        var b, c, d = a.match(Jd);
        for (b = 0, c = d.length; b < c; b++) Md[d[b]] ? d[b] = Md[d[b]] : d[b] = V(d[b]);
        return function(b) {
            var e, f = "";
            for (e = 0; e < c; e++) f += z(d[e]) ? d[e].call(b, a) : d[e];
            return f;
        };
    }
    function X(a, b) {
        return a.isValid() ? (b = Y(b, a.localeData()), Ld[b] = Ld[b] || W(b), Ld[b](a)) : a.localeData().invalidDate();
    }
    function Y(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a;
        }
        var d = 5;
        for (Kd.lastIndex = 0; d >= 0 && Kd.test(a); ) a = a.replace(Kd, c), Kd.lastIndex = 0, 
        d -= 1;
        return a;
    }
    function Z(a, b, c) {
        ce[a] = z(b) ? b : function(a, d) {
            return a && c ? c : b;
        };
    }
    function $(a, b) {
        return j(ce, a) ? ce[a](b._strict, b._locale) : new RegExp(_(a));
    }
    function _(a) {
        return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e;
        }));
    }
    function aa(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function ba(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [ a ]), g(b) && (d = function(a, c) {
            c[b] = u(a);
        }), c = 0; c < a.length; c++) de[a[c]] = d;
    }
    function ca(a, b) {
        ba(a, function(a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e);
        });
    }
    function da(a, b, c) {
        null != b && j(de, a) && de[a](b, c._a, c, a);
    }
    function ea(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
    }
    function fa(a, b) {
        return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || oe).test(b) ? "format" : "standalone"][a.month()] : c(this._months) ? this._months : this._months.standalone;
    }
    function ga(a, b) {
        return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[oe.test(b) ? "format" : "standalone"][a.month()] : c(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
    }
    function ha(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], 
        this._shortMonthsParse = [], d = 0; d < 12; ++d) f = l([ 2e3, d ]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), 
        this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
        return c ? "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = ne.call(this._longMonthsParse, g), 
        e !== -1 ? e : null) : "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : (e = ne.call(this._longMonthsParse, g), 
        e !== -1 ? e : null)) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : (e = ne.call(this._shortMonthsParse, g), 
        e !== -1 ? e : null));
    }
    function ia(a, b, c) {
        var d, e, f;
        if (this._monthsParseExact) return ha.call(this, a, b, c);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
        d = 0; d < 12; d++) {
            if (e = l([ 2e3, d ]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), 
            this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), 
            c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), 
            this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d;
        }
    }
    function ja(a, b) {
        var c;
        if (!a.isValid()) return a;
        if ("string" == typeof b) if (/^\d+$/.test(b)) b = u(b); else if (b = a.localeData().monthsParse(b), 
        !g(b)) return a;
        return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), 
        a;
    }
    function ka(b) {
        return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month");
    }
    function la() {
        return ea(this.year(), this.month());
    }
    function ma(a) {
        return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = re), 
        this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex);
    }
    function na(a) {
        return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (j(this, "_monthsRegex") || (this._monthsRegex = se), 
        this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex);
    }
    function oa() {
        function a(a, b) {
            return b.length - a.length;
        }
        var b, c, d = [], e = [], f = [];
        for (b = 0; b < 12; b++) c = l([ 2e3, b ]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), 
        f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
        for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) d[b] = aa(d[b]), e[b] = aa(e[b]);
        for (b = 0; b < 24; b++) f[b] = aa(f[b]);
        this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, 
        this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i");
    }
    function pa(a) {
        return qa(a) ? 366 : 365;
    }
    function qa(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
    }
    function ra() {
        return qa(this.year());
    }
    function sa(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h;
    }
    function ta(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), 
        b;
    }
    function ua(a, b, c) {
        var d = 7 + b - c, e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;
        return -e + d - 1;
    }
    function va(a, b, c, d, e) {
        var f, g, h = (7 + c - d) % 7, i = ua(a, d, e), j = 1 + 7 * (b - 1) + h + i;
        return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, 
        g = j), {
            year: f,
            dayOfYear: g
        };
    }
    function wa(a, b, c) {
        var d, e, f = ua(a.year(), b, c), g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), 
        e = a.year() + 1) : (e = a.year(), d = g), {
            week: d,
            year: e
        };
    }
    function xa(a, b, c) {
        var d = ua(a, b, c), e = ua(a + 1, b, c);
        return (pa(a) - d + e) / 7;
    }
    function ya(a) {
        return wa(a, this._week.dow, this._week.doy).week;
    }
    function za() {
        return this._week.dow;
    }
    function Aa() {
        return this._week.doy;
    }
    function Ba(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d");
    }
    function Ca(a) {
        var b = wa(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d");
    }
    function Da(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10);
    }
    function Ea(a, b) {
        return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a;
    }
    function Fa(a, b) {
        return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : c(this._weekdays) ? this._weekdays : this._weekdays.standalone;
    }
    function Ga(a) {
        return a ? this._weekdaysShort[a.day()] : this._weekdaysShort;
    }
    function Ha(a) {
        return a ? this._weekdaysMin[a.day()] : this._weekdaysMin;
    }
    function Ia(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], 
        this._minWeekdaysParse = [], d = 0; d < 7; ++d) f = l([ 2e3, 1 ]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), 
        this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
        return c ? "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), 
        e !== -1 ? e : null) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = ne.call(this._weekdaysParse, g), 
        e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), 
        e !== -1 ? e : null))) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), 
        e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), 
        e !== -1 ? e : null))) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), 
        e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)));
    }
    function Ja(a, b, c) {
        var d, e, f;
        if (this._weekdaysParseExact) return Ia.call(this, a, b, c);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], 
        this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
            if (e = l([ 2e3, 1 ]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), 
            this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), 
            this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), 
            this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), 
            this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
            if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
            if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
            if (!c && this._weekdaysParse[d].test(a)) return d;
        }
    }
    function Ka(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b;
    }
    function La(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d");
    }
    function Ma(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        if (null != a) {
            var b = Ea(a, this.localeData());
            return this.day(this.day() % 7 ? b : b - 7);
        }
        return this.day() || 7;
    }
    function Na(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = ye), 
        this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex);
    }
    function Oa(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ze), 
        this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
    }
    function Pa(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ae), 
        this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
    }
    function Qa() {
        function a(a, b) {
            return b.length - a.length;
        }
        var b, c, d, e, f, g = [], h = [], i = [], j = [];
        for (b = 0; b < 7; b++) c = l([ 2e3, 1 ]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), 
        f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), 
        j.push(f);
        for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) h[b] = aa(h[b]), 
        i[b] = aa(i[b]), j[b] = aa(j[b]);
        this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, 
        this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), 
        this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i");
    }
    function Ra() {
        return this.hours() % 12 || 12;
    }
    function Sa() {
        return this.hours() || 24;
    }
    function Ta(a, b) {
        U(a, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), b);
        });
    }
    function Ua(a, b) {
        return b._meridiemParse;
    }
    function Va(a) {
        return "p" === (a + "").toLowerCase().charAt(0);
    }
    function Wa(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
    }
    function Xa(a) {
        return a ? a.toLowerCase().replace("_", "-") : a;
    }
    function Ya(a) {
        for (var b, c, d, e, f = 0; f < a.length; ) {
            for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0; ) {
                if (d = Za(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && v(e, c, !0) >= b - 1) break;
                b--;
            }
            f++;
        }
        return null;
    }
    function Za(a) {
        var b = null;
        if (!Fe[a] && "undefined" != typeof module && module && module.exports) try {
            b = Be._abbr, require("./locale/" + a), $a(b);
        } catch (a) {}
        return Fe[a];
    }
    function $a(a, b) {
        var c;
        return a && (c = f(b) ? bb(a) : _a(a, b), c && (Be = c)), Be._abbr;
    }
    function _a(a, b) {
        if (null !== b) {
            var c = Ee;
            if (b.abbr = a, null != Fe[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), 
            c = Fe[a]._config; else if (null != b.parentLocale) {
                if (null == Fe[b.parentLocale]) return Ge[b.parentLocale] || (Ge[b.parentLocale] = []), 
                Ge[b.parentLocale].push({
                    name: a,
                    config: b
                }), null;
                c = Fe[b.parentLocale]._config;
            }
            return Fe[a] = new C(B(c, b)), Ge[a] && Ge[a].forEach(function(a) {
                _a(a.name, a.config);
            }), $a(a), Fe[a];
        }
        return delete Fe[a], null;
    }
    function ab(a, b) {
        if (null != b) {
            var c, d = Ee;
            null != Fe[a] && (d = Fe[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Fe[a], 
            Fe[a] = c, $a(a);
        } else null != Fe[a] && (null != Fe[a].parentLocale ? Fe[a] = Fe[a].parentLocale : null != Fe[a] && delete Fe[a]);
        return Fe[a];
    }
    function bb(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Be;
        if (!c(a)) {
            if (b = Za(a)) return b;
            a = [ a ];
        }
        return Ya(a);
    }
    function cb() {
        return Ad(Fe);
    }
    function db(a) {
        var b, c = a._a;
        return c && n(a).overflow === -2 && (b = c[fe] < 0 || c[fe] > 11 ? fe : c[ge] < 1 || c[ge] > ea(c[ee], c[fe]) ? ge : c[he] < 0 || c[he] > 24 || 24 === c[he] && (0 !== c[ie] || 0 !== c[je] || 0 !== c[ke]) ? he : c[ie] < 0 || c[ie] > 59 ? ie : c[je] < 0 || c[je] > 59 ? je : c[ke] < 0 || c[ke] > 999 ? ke : -1, 
        n(a)._overflowDayOfYear && (b < ee || b > ge) && (b = ge), n(a)._overflowWeeks && b === -1 && (b = le), 
        n(a)._overflowWeekday && b === -1 && (b = me), n(a).overflow = b), a;
    }
    function eb(a) {
        var b, c, d, e, f, g, h = a._i, i = He.exec(h) || Ie.exec(h);
        if (i) {
            for (n(a).iso = !0, b = 0, c = Ke.length; b < c; b++) if (Ke[b][1].exec(i[1])) {
                e = Ke[b][0], d = Ke[b][2] !== !1;
                break;
            }
            if (null == e) return void (a._isValid = !1);
            if (i[3]) {
                for (b = 0, c = Le.length; b < c; b++) if (Le[b][1].exec(i[3])) {
                    f = (i[2] || " ") + Le[b][0];
                    break;
                }
                if (null == f) return void (a._isValid = !1);
            }
            if (!d && null != f) return void (a._isValid = !1);
            if (i[4]) {
                if (!Je.exec(i[4])) return void (a._isValid = !1);
                g = "Z";
            }
            a._f = e + (f || "") + (g || ""), lb(a);
        } else a._isValid = !1;
    }
    function fb(a) {
        var b, c, d, e, f, g, h, i, j = {
            " GMT": " +0000",
            " EDT": " -0400",
            " EST": " -0500",
            " CDT": " -0500",
            " CST": " -0600",
            " MDT": " -0600",
            " MST": " -0700",
            " PDT": " -0700",
            " PST": " -0800"
        }, k = "YXWVUTSRQPONZABCDEFGHIKLM";
        if (b = a._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), 
        c = Ne.exec(b)) {
            if (d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : "", e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY "), 
            f = "HH:mm" + (c[4] ? ":ss" : ""), c[1]) {
                var l = new Date(c[2]), m = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ][l.getDay()];
                if (c[1].substr(0, 3) !== m) return n(a).weekdayMismatch = !0, void (a._isValid = !1);
            }
            switch (c[5].length) {
              case 2:
                0 === i ? h = " +0000" : (i = k.indexOf(c[5][1].toUpperCase()) - 12, h = (i < 0 ? " -" : " +") + ("" + i).replace(/^-?/, "0").match(/..$/)[0] + "00");
                break;

              case 4:
                h = j[c[5]];
                break;

              default:
                h = j[" GMT"];
            }
            c[5] = h, a._i = c.splice(1).join(""), g = " ZZ", a._f = d + e + f + g, lb(a), n(a).rfc2822 = !0;
        } else a._isValid = !1;
    }
    function gb(b) {
        var c = Me.exec(b._i);
        return null !== c ? void (b._d = new Date(+c[1])) : (eb(b), void (b._isValid === !1 && (delete b._isValid, 
        fb(b), b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b)))));
    }
    function hb(a, b, c) {
        return null != a ? a : null != b ? b : c;
    }
    function ib(b) {
        var c = new Date(a.now());
        return b._useUTC ? [ c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate() ] : [ c.getFullYear(), c.getMonth(), c.getDate() ];
    }
    function jb(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = ib(a), a._w && null == a._a[ge] && null == a._a[fe] && kb(a), null != a._dayOfYear && (e = hb(a._a[ee], d[ee]), 
            (a._dayOfYear > pa(e) || 0 === a._dayOfYear) && (n(a)._overflowDayOfYear = !0), 
            c = ta(e, 0, a._dayOfYear), a._a[fe] = c.getUTCMonth(), a._a[ge] = c.getUTCDate()), 
            b = 0; b < 3 && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            for (;b < 7; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[he] && 0 === a._a[ie] && 0 === a._a[je] && 0 === a._a[ke] && (a._nextDay = !0, 
            a._a[he] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), 
            a._nextDay && (a._a[he] = 24);
        }
    }
    function kb(a) {
        var b, c, d, e, f, g, h, i;
        if (b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4, c = hb(b.GG, a._a[ee], wa(tb(), 1, 4).year), 
        d = hb(b.W, 1), e = hb(b.E, 1), (e < 1 || e > 7) && (i = !0); else {
            f = a._locale._week.dow, g = a._locale._week.doy;
            var j = wa(tb(), f, g);
            c = hb(b.gg, a._a[ee], j.year), d = hb(b.w, j.week), null != b.d ? (e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, 
            (b.e < 0 || b.e > 6) && (i = !0)) : e = f;
        }
        d < 1 || d > xa(c, f, g) ? n(a)._overflowWeeks = !0 : null != i ? n(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), 
        a._a[ee] = h.year, a._dayOfYear = h.dayOfYear);
    }
    function lb(b) {
        if (b._f === a.ISO_8601) return void eb(b);
        if (b._f === a.RFC_2822) return void fb(b);
        b._a = [], n(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i, i = h.length, j = 0;
        for (e = Y(b._f, b._locale).match(Jd) || [], c = 0; c < e.length; c++) f = e[c], 
        d = (h.match($(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && n(b).unusedInput.push(g), 
        h = h.slice(h.indexOf(d) + d.length), j += d.length), Md[f] ? (d ? n(b).empty = !1 : n(b).unusedTokens.push(f), 
        da(f, d, b)) : b._strict && !d && n(b).unusedTokens.push(f);
        n(b).charsLeftOver = i - j, h.length > 0 && n(b).unusedInput.push(h), b._a[he] <= 12 && n(b).bigHour === !0 && b._a[he] > 0 && (n(b).bigHour = void 0), 
        n(b).parsedDateParts = b._a.slice(0), n(b).meridiem = b._meridiem, b._a[he] = mb(b._locale, b._a[he], b._meridiem), 
        jb(b), db(b);
    }
    function mb(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), 
        d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b;
    }
    function nb(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return n(a).invalidFormat = !0, void (a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++) f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), 
        b._f = a._f[e], lb(b), o(b) && (f += n(b).charsLeftOver, f += 10 * n(b).unusedTokens.length, 
        n(b).score = f, (null == d || f < d) && (d = f, c = b));
        k(a, c || b);
    }
    function ob(a) {
        if (!a._d) {
            var b = L(a._i);
            a._a = i([ b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond ], function(a) {
                return a && parseInt(a, 10);
            }), jb(a);
        }
    }
    function pb(a) {
        var b = new r(db(qb(a)));
        return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b;
    }
    function qb(a) {
        var b = a._i, d = a._f;
        return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? p({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (h(b) ? a._d = b : c(d) ? nb(a) : d ? lb(a) : rb(a), 
        o(a) || (a._d = null), a));
    }
    function rb(b) {
        var e = b._i;
        f(e) ? b._d = new Date(a.now()) : h(e) ? b._d = new Date(e.valueOf()) : "string" == typeof e ? gb(b) : c(e) ? (b._a = i(e.slice(0), function(a) {
            return parseInt(a, 10);
        }), jb(b)) : d(e) ? ob(b) : g(e) ? b._d = new Date(e) : a.createFromInputFallback(b);
    }
    function sb(a, b, f, g, h) {
        var i = {};
        return f !== !0 && f !== !1 || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), 
        i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, 
        i._strict = g, pb(i);
    }
    function tb(a, b, c, d) {
        return sb(a, b, c, d, !1);
    }
    function ub(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return tb();
        for (d = b[0], e = 1; e < b.length; ++e) b[e].isValid() && !b[e][a](d) || (d = b[e]);
        return d;
    }
    function vb() {
        var a = [].slice.call(arguments, 0);
        return ub("isBefore", a);
    }
    function wb() {
        var a = [].slice.call(arguments, 0);
        return ub("isAfter", a);
    }
    function xb(a) {
        for (var b in a) if (Re.indexOf(b) === -1 || null != a[b] && isNaN(a[b])) return !1;
        for (var c = !1, d = 0; d < Re.length; ++d) if (a[Re[d]]) {
            if (c) return !1;
            parseFloat(a[Re[d]]) !== u(a[Re[d]]) && (c = !0);
        }
        return !0;
    }
    function yb() {
        return this._isValid;
    }
    function zb() {
        return Sb(NaN);
    }
    function Ab(a) {
        var b = L(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
        this._isValid = xb(b), this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, 
        this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), 
        this._bubble();
    }
    function Bb(a) {
        return a instanceof Ab;
    }
    function Cb(a) {
        return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a);
    }
    function Db(a, b) {
        U(a, 0, 0, function() {
            var a = this.utcOffset(), c = "+";
            return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2);
        });
    }
    function Eb(a, b) {
        var c = (b || "").match(a);
        if (null === c) return null;
        var d = c[c.length - 1] || [], e = (d + "").match(Se) || [ "-", 0, 0 ], f = +(60 * e[1]) + u(e[2]);
        return 0 === f ? 0 : "+" === e[0] ? f : -f;
    }
    function Fb(b, c) {
        var d, e;
        return c._isUTC ? (d = c.clone(), e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf(), 
        d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : tb(b).local();
    }
    function Gb(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
    }
    function Hb(b, c, d) {
        var e, f = this._offset || 0;
        if (!this.isValid()) return null != b ? this : NaN;
        if (null != b) {
            if ("string" == typeof b) {
                if (b = Eb(_d, b), null === b) return this;
            } else Math.abs(b) < 16 && !d && (b = 60 * b);
            return !this._isUTC && c && (e = Gb(this)), this._offset = b, this._isUTC = !0, 
            null != e && this.add(e, "m"), f !== b && (!c || this._changeInProgress ? Xb(this, Sb(b - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
            a.updateOffset(this, !0), this._changeInProgress = null)), this;
        }
        return this._isUTC ? f : Gb(this);
    }
    function Ib(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset();
    }
    function Jb(a) {
        return this.utcOffset(0, a);
    }
    function Kb(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Gb(this), "m")), 
        this;
    }
    function Lb() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
            var a = Eb($d, this._i);
            null != a ? this.utcOffset(a) : this.utcOffset(0, !0);
        }
        return this;
    }
    function Mb(a) {
        return !!this.isValid() && (a = a ? tb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0);
    }
    function Nb() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function Ob() {
        if (!f(this._isDSTShifted)) return this._isDSTShifted;
        var a = {};
        if (q(a, this), a = qb(a), a._a) {
            var b = a._isUTC ? l(a._a) : tb(a._a);
            this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0;
        } else this._isDSTShifted = !1;
        return this._isDSTShifted;
    }
    function Pb() {
        return !!this.isValid() && !this._isUTC;
    }
    function Qb() {
        return !!this.isValid() && this._isUTC;
    }
    function Rb() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset);
    }
    function Sb(a, b) {
        var c, d, e, f = a, h = null;
        return Bb(a) ? f = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : g(a) ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = Te.exec(a)) ? (c = "-" === h[1] ? -1 : 1, 
        f = {
            y: 0,
            d: u(h[ge]) * c,
            h: u(h[he]) * c,
            m: u(h[ie]) * c,
            s: u(h[je]) * c,
            ms: u(Cb(1e3 * h[ke])) * c
        }) : (h = Ue.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
            y: Tb(h[2], c),
            M: Tb(h[3], c),
            w: Tb(h[4], c),
            d: Tb(h[5], c),
            h: Tb(h[6], c),
            m: Tb(h[7], c),
            s: Tb(h[8], c)
        }) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = Vb(tb(f.from), tb(f.to)), 
        f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Ab(f), Bb(a) && j(a, "_locale") && (d._locale = a._locale), 
        d;
    }
    function Tb(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b;
    }
    function Ub(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, 
        c.milliseconds = +b - +a.clone().add(c.months, "M"), c;
    }
    function Vb(a, b) {
        var c;
        return a.isValid() && b.isValid() ? (b = Fb(b, a), a.isBefore(b) ? c = Ub(a, b) : (c = Ub(b, a), 
        c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
            milliseconds: 0,
            months: 0
        };
    }
    function Wb(a, b) {
        return function(c, d) {
            var e, f;
            return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), 
            f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Sb(c, d), Xb(this, e, a), 
            this;
        };
    }
    function Xb(b, c, d, e) {
        var f = c._milliseconds, g = Cb(c._days), h = Cb(c._months);
        b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), 
        h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h));
    }
    function Yb(a, b) {
        var c = a.diff(b, "days", !0);
        return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse";
    }
    function Zb(b, c) {
        var d = b || tb(), e = Fb(d, this).startOf("day"), f = a.calendarFormat(this, e) || "sameElse", g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
        return this.format(g || this.localeData().calendar(f, this, tb(d)));
    }
    function $b() {
        return new r(this);
    }
    function _b(a, b) {
        var c = s(a) ? a : tb(a);
        return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf());
    }
    function ac(a, b) {
        var c = s(a) ? a : tb(a);
        return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf());
    }
    function bc(a, b, c, d) {
        return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c));
    }
    function cc(a, b) {
        var c, d = s(a) ? a : tb(a);
        return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), 
        this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()));
    }
    function dc(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b);
    }
    function ec(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b);
    }
    function fc(a, b, c) {
        var d, e, f, g;
        return this.isValid() ? (d = Fb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), 
        b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = gc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, 
        g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), 
        c ? g : t(g)) : NaN) : NaN;
    }
    function gc(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()), f = a.clone().add(e, "months");
        return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), 
        d = (b - f) / (c - f)), -(e + d) || 0;
    }
    function hc() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function ic() {
        if (!this.isValid()) return null;
        var a = this.clone().utc();
        return a.year() < 0 || a.year() > 9999 ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    }
    function jc() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var a = "moment", b = "";
        this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", 
        b = "Z");
        var c = "[" + a + '("]', d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", e = "-MM-DD[T]HH:mm:ss.SSS", f = b + '[")]';
        return this.format(c + d + e + f);
    }
    function kc(b) {
        b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
        var c = X(this, b);
        return this.localeData().postformat(c);
    }
    function lc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
    }
    function mc(a) {
        return this.from(tb(), a);
    }
    function nc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
    }
    function oc(a) {
        return this.to(tb(), a);
    }
    function pc(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), 
        this);
    }
    function qc() {
        return this._locale;
    }
    function rc(a) {
        switch (a = K(a)) {
          case "year":
            this.month(0);

          case "quarter":
          case "month":
            this.date(1);

          case "week":
          case "isoWeek":
          case "day":
          case "date":
            this.hours(0);

          case "hour":
            this.minutes(0);

          case "minute":
            this.seconds(0);

          case "second":
            this.milliseconds(0);
        }
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), 
        this;
    }
    function sc(a) {
        return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), 
        this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"));
    }
    function tc() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
    }
    function uc() {
        return Math.floor(this.valueOf() / 1e3);
    }
    function vc() {
        return new Date(this.valueOf());
    }
    function wc() {
        var a = this;
        return [ a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond() ];
    }
    function xc() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        };
    }
    function yc() {
        return this.isValid() ? this.toISOString() : null;
    }
    function zc() {
        return o(this);
    }
    function Ac() {
        return k({}, n(this));
    }
    function Bc() {
        return n(this).overflow;
    }
    function Cc() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }
    function Dc(a, b) {
        U(0, [ a, a.length ], 0, b);
    }
    function Ec(a) {
        return Ic.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }
    function Fc(a) {
        return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function Gc() {
        return xa(this.year(), 1, 4);
    }
    function Hc() {
        var a = this.localeData()._week;
        return xa(this.year(), a.dow, a.doy);
    }
    function Ic(a, b, c, d, e) {
        var f;
        return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Jc.call(this, a, b, c, d, e));
    }
    function Jc(a, b, c, d, e) {
        var f = va(a, b, c, d, e), g = ta(f.year, 0, f.dayOfYear);
        return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), 
        this;
    }
    function Kc(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3);
    }
    function Lc(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d");
    }
    function Mc(a, b) {
        b[ke] = u(1e3 * ("0." + a));
    }
    function Nc() {
        return this._isUTC ? "UTC" : "";
    }
    function Oc() {
        return this._isUTC ? "Coordinated Universal Time" : "";
    }
    function Pc(a) {
        return tb(1e3 * a);
    }
    function Qc() {
        return tb.apply(null, arguments).parseZone();
    }
    function Rc(a) {
        return a;
    }
    function Sc(a, b, c, d) {
        var e = bb(), f = l().set(d, b);
        return e[c](f, a);
    }
    function Tc(a, b, c) {
        if (g(a) && (b = a, a = void 0), a = a || "", null != b) return Sc(a, b, c, "month");
        var d, e = [];
        for (d = 0; d < 12; d++) e[d] = Sc(a, d, c, "month");
        return e;
    }
    function Uc(a, b, c, d) {
        "boolean" == typeof a ? (g(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, 
        a = !1, g(b) && (c = b, b = void 0), b = b || "");
        var e = bb(), f = a ? e._week.dow : 0;
        if (null != c) return Sc(b, (c + f) % 7, d, "day");
        var h, i = [];
        for (h = 0; h < 7; h++) i[h] = Sc(b, (h + f) % 7, d, "day");
        return i;
    }
    function Vc(a, b) {
        return Tc(a, b, "months");
    }
    function Wc(a, b) {
        return Tc(a, b, "monthsShort");
    }
    function Xc(a, b, c) {
        return Uc(a, b, c, "weekdays");
    }
    function Yc(a, b, c) {
        return Uc(a, b, c, "weekdaysShort");
    }
    function Zc(a, b, c) {
        return Uc(a, b, c, "weekdaysMin");
    }
    function $c() {
        var a = this._data;
        return this._milliseconds = df(this._milliseconds), this._days = df(this._days), 
        this._months = df(this._months), a.milliseconds = df(a.milliseconds), a.seconds = df(a.seconds), 
        a.minutes = df(a.minutes), a.hours = df(a.hours), a.months = df(a.months), a.years = df(a.years), 
        this;
    }
    function _c(a, b, c, d) {
        var e = Sb(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, 
        a._bubble();
    }
    function ad(a, b) {
        return _c(this, a, b, 1);
    }
    function bd(a, b) {
        return _c(this, a, b, -1);
    }
    function cd(a) {
        return a < 0 ? Math.floor(a) : Math.ceil(a);
    }
    function dd() {
        var a, b, c, d, e, f = this._milliseconds, g = this._days, h = this._months, i = this._data;
        return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * cd(fd(h) + g), 
        g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), 
        i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ed(g)), 
        h += e, g -= cd(fd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, 
        this;
    }
    function ed(a) {
        return 4800 * a / 146097;
    }
    function fd(a) {
        return 146097 * a / 4800;
    }
    function gd(a) {
        if (!this.isValid()) return NaN;
        var b, c, d = this._milliseconds;
        if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, 
        c = this._months + ed(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(fd(this._months)), a) {
          case "week":
            return b / 7 + d / 6048e5;

          case "day":
            return b + d / 864e5;

          case "hour":
            return 24 * b + d / 36e5;

          case "minute":
            return 1440 * b + d / 6e4;

          case "second":
            return 86400 * b + d / 1e3;

          case "millisecond":
            return Math.floor(864e5 * b) + d;

          default:
            throw new Error("Unknown unit " + a);
        }
    }
    function hd() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12) : NaN;
    }
    function id(a) {
        return function() {
            return this.as(a);
        };
    }
    function jd(a) {
        return a = K(a), this.isValid() ? this[a + "s"]() : NaN;
    }
    function kd(a) {
        return function() {
            return this.isValid() ? this._data[a] : NaN;
        };
    }
    function ld() {
        return t(this.days() / 7);
    }
    function md(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d);
    }
    function nd(a, b, c) {
        var d = Sb(a).abs(), e = uf(d.as("s")), f = uf(d.as("m")), g = uf(d.as("h")), h = uf(d.as("d")), i = uf(d.as("M")), j = uf(d.as("y")), k = e <= vf.ss && [ "s", e ] || e < vf.s && [ "ss", e ] || f <= 1 && [ "m" ] || f < vf.m && [ "mm", f ] || g <= 1 && [ "h" ] || g < vf.h && [ "hh", g ] || h <= 1 && [ "d" ] || h < vf.d && [ "dd", h ] || i <= 1 && [ "M" ] || i < vf.M && [ "MM", i ] || j <= 1 && [ "y" ] || [ "yy", j ];
        return k[2] = b, k[3] = +a > 0, k[4] = c, md.apply(null, k);
    }
    function od(a) {
        return void 0 === a ? uf : "function" == typeof a && (uf = a, !0);
    }
    function pd(a, b) {
        return void 0 !== vf[a] && (void 0 === b ? vf[a] : (vf[a] = b, "s" === a && (vf.ss = b - 1), 
        !0));
    }
    function qd(a) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var b = this.localeData(), c = nd(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c);
    }
    function rd() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var a, b, c, d = wf(this._milliseconds) / 1e3, e = wf(this._days), f = wf(this._months);
        a = t(d / 60), b = t(a / 60), d %= 60, a %= 60, c = t(f / 12), f %= 12;
        var g = c, h = f, i = e, j = b, k = a, l = d, m = this.asSeconds();
        return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D";
    }
    var sd, td;
    td = Array.prototype.some ? Array.prototype.some : function(a) {
        for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++) if (d in b && a.call(this, b[d], d, b)) return !0;
        return !1;
    };
    var ud = td, vd = a.momentProperties = [], wd = !1, xd = {};
    a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
    var yd;
    yd = Object.keys ? Object.keys : function(a) {
        var b, c = [];
        for (b in a) j(a, b) && c.push(b);
        return c;
    };
    var zd, Ad = yd, Bd = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, Cd = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, Dd = "Invalid date", Ed = "%d", Fd = /\d{1,2}/, Gd = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, Hd = {}, Id = {}, Jd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Kd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ld = {}, Md = {}, Nd = /\d/, Od = /\d\d/, Pd = /\d{3}/, Qd = /\d{4}/, Rd = /[+-]?\d{6}/, Sd = /\d\d?/, Td = /\d\d\d\d?/, Ud = /\d\d\d\d\d\d?/, Vd = /\d{1,3}/, Wd = /\d{1,4}/, Xd = /[+-]?\d{1,6}/, Yd = /\d+/, Zd = /[+-]?\d+/, $d = /Z|[+-]\d\d:?\d\d/gi, _d = /Z|[+-]\d\d(?::?\d\d)?/gi, ae = /[+-]?\d+(\.\d{1,3})?/, be = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ce = {}, de = {}, ee = 0, fe = 1, ge = 2, he = 3, ie = 4, je = 5, ke = 6, le = 7, me = 8;
    zd = Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
        var b;
        for (b = 0; b < this.length; ++b) if (this[b] === a) return b;
        return -1;
    };
    var ne = zd;
    U("M", [ "MM", 2 ], "Mo", function() {
        return this.month() + 1;
    }), U("MMM", 0, 0, function(a) {
        return this.localeData().monthsShort(this, a);
    }), U("MMMM", 0, 0, function(a) {
        return this.localeData().months(this, a);
    }), J("month", "M"), M("month", 8), Z("M", Sd), Z("MM", Sd, Od), Z("MMM", function(a, b) {
        return b.monthsShortRegex(a);
    }), Z("MMMM", function(a, b) {
        return b.monthsRegex(a);
    }), ba([ "M", "MM" ], function(a, b) {
        b[fe] = u(a) - 1;
    }), ba([ "MMM", "MMMM" ], function(a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[fe] = e : n(c).invalidMonth = a;
    });
    var oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), qe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), re = be, se = be;
    U("Y", 0, 0, function() {
        var a = this.year();
        return a <= 9999 ? "" + a : "+" + a;
    }), U(0, [ "YY", 2 ], 0, function() {
        return this.year() % 100;
    }), U(0, [ "YYYY", 4 ], 0, "year"), U(0, [ "YYYYY", 5 ], 0, "year"), U(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
    J("year", "y"), M("year", 1), Z("Y", Zd), Z("YY", Sd, Od), Z("YYYY", Wd, Qd), Z("YYYYY", Xd, Rd), 
    Z("YYYYYY", Xd, Rd), ba([ "YYYYY", "YYYYYY" ], ee), ba("YYYY", function(b, c) {
        c[ee] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b);
    }), ba("YY", function(b, c) {
        c[ee] = a.parseTwoDigitYear(b);
    }), ba("Y", function(a, b) {
        b[ee] = parseInt(a, 10);
    }), a.parseTwoDigitYear = function(a) {
        return u(a) + (u(a) > 68 ? 1900 : 2e3);
    };
    var te = O("FullYear", !0);
    U("w", [ "ww", 2 ], "wo", "week"), U("W", [ "WW", 2 ], "Wo", "isoWeek"), J("week", "w"), 
    J("isoWeek", "W"), M("week", 5), M("isoWeek", 5), Z("w", Sd), Z("ww", Sd, Od), Z("W", Sd), 
    Z("WW", Sd, Od), ca([ "w", "ww", "W", "WW" ], function(a, b, c, d) {
        b[d.substr(0, 1)] = u(a);
    });
    var ue = {
        dow: 0,
        doy: 6
    };
    U("d", 0, "do", "day"), U("dd", 0, 0, function(a) {
        return this.localeData().weekdaysMin(this, a);
    }), U("ddd", 0, 0, function(a) {
        return this.localeData().weekdaysShort(this, a);
    }), U("dddd", 0, 0, function(a) {
        return this.localeData().weekdays(this, a);
    }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), 
    J("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), Z("d", Sd), 
    Z("e", Sd), Z("E", Sd), Z("dd", function(a, b) {
        return b.weekdaysMinRegex(a);
    }), Z("ddd", function(a, b) {
        return b.weekdaysShortRegex(a);
    }), Z("dddd", function(a, b) {
        return b.weekdaysRegex(a);
    }), ca([ "dd", "ddd", "dddd" ], function(a, b, c, d) {
        var e = c._locale.weekdaysParse(a, d, c._strict);
        null != e ? b.d = e : n(c).invalidWeekday = a;
    }), ca([ "d", "e", "E" ], function(a, b, c, d) {
        b[d] = u(a);
    });
    var ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), we = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ye = be, ze = be, Ae = be;
    U("H", [ "HH", 2 ], 0, "hour"), U("h", [ "hh", 2 ], 0, Ra), U("k", [ "kk", 2 ], 0, Sa), 
    U("hmm", 0, 0, function() {
        return "" + Ra.apply(this) + T(this.minutes(), 2);
    }), U("hmmss", 0, 0, function() {
        return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2);
    }), U("Hmm", 0, 0, function() {
        return "" + this.hours() + T(this.minutes(), 2);
    }), U("Hmmss", 0, 0, function() {
        return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2);
    }), Ta("a", !0), Ta("A", !1), J("hour", "h"), M("hour", 13), Z("a", Ua), Z("A", Ua), 
    Z("H", Sd), Z("h", Sd), Z("k", Sd), Z("HH", Sd, Od), Z("hh", Sd, Od), Z("kk", Sd, Od), 
    Z("hmm", Td), Z("hmmss", Ud), Z("Hmm", Td), Z("Hmmss", Ud), ba([ "H", "HH" ], he), 
    ba([ "k", "kk" ], function(a, b, c) {
        var d = u(a);
        b[he] = 24 === d ? 0 : d;
    }), ba([ "a", "A" ], function(a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a;
    }), ba([ "h", "hh" ], function(a, b, c) {
        b[he] = u(a), n(c).bigHour = !0;
    }), ba("hmm", function(a, b, c) {
        var d = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d)), n(c).bigHour = !0;
    }), ba("hmmss", function(a, b, c) {
        var d = a.length - 4, e = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e)), n(c).bigHour = !0;
    }), ba("Hmm", function(a, b, c) {
        var d = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d));
    }), ba("Hmmss", function(a, b, c) {
        var d = a.length - 4, e = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e));
    });
    var Be, Ce = /[ap]\.?m?\.?/i, De = O("Hours", !0), Ee = {
        calendar: Bd,
        longDateFormat: Cd,
        invalidDate: Dd,
        ordinal: Ed,
        dayOfMonthOrdinalParse: Fd,
        relativeTime: Gd,
        months: pe,
        monthsShort: qe,
        week: ue,
        weekdays: ve,
        weekdaysMin: xe,
        weekdaysShort: we,
        meridiemParse: Ce
    }, Fe = {}, Ge = {}, He = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ie = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Je = /Z|[+-]\d\d(?::?\d\d)?/, Ke = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, !1 ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, !1 ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, !1 ], [ "YYYYDDD", /\d{7}/ ] ], Le = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], Me = /^\/?Date\((\-?\d+)/i, Ne = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
    a.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
    }), a.ISO_8601 = function() {}, a.RFC_2822 = function() {};
    var Oe = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var a = tb.apply(null, arguments);
        return this.isValid() && a.isValid() ? a < this ? this : a : p();
    }), Pe = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var a = tb.apply(null, arguments);
        return this.isValid() && a.isValid() ? a > this ? this : a : p();
    }), Qe = function() {
        return Date.now ? Date.now() : +new Date();
    }, Re = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
    Db("Z", ":"), Db("ZZ", ""), Z("Z", _d), Z("ZZ", _d), ba([ "Z", "ZZ" ], function(a, b, c) {
        c._useUTC = !0, c._tzm = Eb(_d, a);
    });
    var Se = /([\+\-]|\d\d)/gi;
    a.updateOffset = function() {};
    var Te = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, Ue = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    Sb.fn = Ab.prototype, Sb.invalid = zb;
    var Ve = Wb(1, "add"), We = Wb(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Xe = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
        return void 0 === a ? this.localeData() : this.locale(a);
    });
    U(0, [ "gg", 2 ], 0, function() {
        return this.weekYear() % 100;
    }), U(0, [ "GG", 2 ], 0, function() {
        return this.isoWeekYear() % 100;
    }), Dc("gggg", "weekYear"), Dc("ggggg", "weekYear"), Dc("GGGG", "isoWeekYear"), 
    Dc("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), M("weekYear", 1), 
    M("isoWeekYear", 1), Z("G", Zd), Z("g", Zd), Z("GG", Sd, Od), Z("gg", Sd, Od), Z("GGGG", Wd, Qd), 
    Z("gggg", Wd, Qd), Z("GGGGG", Xd, Rd), Z("ggggg", Xd, Rd), ca([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(a, b, c, d) {
        b[d.substr(0, 2)] = u(a);
    }), ca([ "gg", "GG" ], function(b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b);
    }), U("Q", 0, "Qo", "quarter"), J("quarter", "Q"), M("quarter", 7), Z("Q", Nd), 
    ba("Q", function(a, b) {
        b[fe] = 3 * (u(a) - 1);
    }), U("D", [ "DD", 2 ], "Do", "date"), J("date", "D"), M("date", 9), Z("D", Sd), 
    Z("DD", Sd, Od), Z("Do", function(a, b) {
        return a ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient;
    }), ba([ "D", "DD" ], ge), ba("Do", function(a, b) {
        b[ge] = u(a.match(Sd)[0], 10);
    });
    var Ye = O("Date", !0);
    U("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), M("dayOfYear", 4), 
    Z("DDD", Vd), Z("DDDD", Pd), ba([ "DDD", "DDDD" ], function(a, b, c) {
        c._dayOfYear = u(a);
    }), U("m", [ "mm", 2 ], 0, "minute"), J("minute", "m"), M("minute", 14), Z("m", Sd), 
    Z("mm", Sd, Od), ba([ "m", "mm" ], ie);
    var Ze = O("Minutes", !1);
    U("s", [ "ss", 2 ], 0, "second"), J("second", "s"), M("second", 15), Z("s", Sd), 
    Z("ss", Sd, Od), ba([ "s", "ss" ], je);
    var $e = O("Seconds", !1);
    U("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
    }), U(0, [ "SS", 2 ], 0, function() {
        return ~~(this.millisecond() / 10);
    }), U(0, [ "SSS", 3 ], 0, "millisecond"), U(0, [ "SSSS", 4 ], 0, function() {
        return 10 * this.millisecond();
    }), U(0, [ "SSSSS", 5 ], 0, function() {
        return 100 * this.millisecond();
    }), U(0, [ "SSSSSS", 6 ], 0, function() {
        return 1e3 * this.millisecond();
    }), U(0, [ "SSSSSSS", 7 ], 0, function() {
        return 1e4 * this.millisecond();
    }), U(0, [ "SSSSSSSS", 8 ], 0, function() {
        return 1e5 * this.millisecond();
    }), U(0, [ "SSSSSSSSS", 9 ], 0, function() {
        return 1e6 * this.millisecond();
    }), J("millisecond", "ms"), M("millisecond", 16), Z("S", Vd, Nd), Z("SS", Vd, Od), 
    Z("SSS", Vd, Pd);
    var _e;
    for (_e = "SSSS"; _e.length <= 9; _e += "S") Z(_e, Yd);
    for (_e = "S"; _e.length <= 9; _e += "S") ba(_e, Mc);
    var af = O("Milliseconds", !1);
    U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
    var bf = r.prototype;
    bf.add = Ve, bf.calendar = Zb, bf.clone = $b, bf.diff = fc, bf.endOf = sc, bf.format = kc, 
    bf.from = lc, bf.fromNow = mc, bf.to = nc, bf.toNow = oc, bf.get = R, bf.invalidAt = Bc, 
    bf.isAfter = _b, bf.isBefore = ac, bf.isBetween = bc, bf.isSame = cc, bf.isSameOrAfter = dc, 
    bf.isSameOrBefore = ec, bf.isValid = zc, bf.lang = Xe, bf.locale = pc, bf.localeData = qc, 
    bf.max = Pe, bf.min = Oe, bf.parsingFlags = Ac, bf.set = S, bf.startOf = rc, bf.subtract = We, 
    bf.toArray = wc, bf.toObject = xc, bf.toDate = vc, bf.toISOString = ic, bf.inspect = jc, 
    bf.toJSON = yc, bf.toString = hc, bf.unix = uc, bf.valueOf = tc, bf.creationData = Cc, 
    bf.year = te, bf.isLeapYear = ra, bf.weekYear = Ec, bf.isoWeekYear = Fc, bf.quarter = bf.quarters = Kc, 
    bf.month = ka, bf.daysInMonth = la, bf.week = bf.weeks = Ba, bf.isoWeek = bf.isoWeeks = Ca, 
    bf.weeksInYear = Hc, bf.isoWeeksInYear = Gc, bf.date = Ye, bf.day = bf.days = Ka, 
    bf.weekday = La, bf.isoWeekday = Ma, bf.dayOfYear = Lc, bf.hour = bf.hours = De, 
    bf.minute = bf.minutes = Ze, bf.second = bf.seconds = $e, bf.millisecond = bf.milliseconds = af, 
    bf.utcOffset = Hb, bf.utc = Jb, bf.local = Kb, bf.parseZone = Lb, bf.hasAlignedHourOffset = Mb, 
    bf.isDST = Nb, bf.isLocal = Pb, bf.isUtcOffset = Qb, bf.isUtc = Rb, bf.isUTC = Rb, 
    bf.zoneAbbr = Nc, bf.zoneName = Oc, bf.dates = x("dates accessor is deprecated. Use date instead.", Ye), 
    bf.months = x("months accessor is deprecated. Use month instead", ka), bf.years = x("years accessor is deprecated. Use year instead", te), 
    bf.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ib), 
    bf.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ob);
    var cf = C.prototype;
    cf.calendar = D, cf.longDateFormat = E, cf.invalidDate = F, cf.ordinal = G, cf.preparse = Rc, 
    cf.postformat = Rc, cf.relativeTime = H, cf.pastFuture = I, cf.set = A, cf.months = fa, 
    cf.monthsShort = ga, cf.monthsParse = ia, cf.monthsRegex = na, cf.monthsShortRegex = ma, 
    cf.week = ya, cf.firstDayOfYear = Aa, cf.firstDayOfWeek = za, cf.weekdays = Fa, 
    cf.weekdaysMin = Ha, cf.weekdaysShort = Ga, cf.weekdaysParse = Ja, cf.weekdaysRegex = Na, 
    cf.weekdaysShortRegex = Oa, cf.weekdaysMinRegex = Pa, cf.isPM = Va, cf.meridiem = Wa, 
    $a("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10, c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c;
        }
    }), a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);
    var df = Math.abs, ef = id("ms"), ff = id("s"), gf = id("m"), hf = id("h"), jf = id("d"), kf = id("w"), lf = id("M"), mf = id("y"), nf = kd("milliseconds"), of = kd("seconds"), pf = kd("minutes"), qf = kd("hours"), rf = kd("days"), sf = kd("months"), tf = kd("years"), uf = Math.round, vf = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, wf = Math.abs, xf = Ab.prototype;
    return xf.isValid = yb, xf.abs = $c, xf.add = ad, xf.subtract = bd, xf.as = gd, 
    xf.asMilliseconds = ef, xf.asSeconds = ff, xf.asMinutes = gf, xf.asHours = hf, xf.asDays = jf, 
    xf.asWeeks = kf, xf.asMonths = lf, xf.asYears = mf, xf.valueOf = hd, xf._bubble = dd, 
    xf.get = jd, xf.milliseconds = nf, xf.seconds = of, xf.minutes = pf, xf.hours = qf, 
    xf.days = rf, xf.weeks = ld, xf.months = sf, xf.years = tf, xf.humanize = qd, xf.toISOString = rd, 
    xf.toString = rd, xf.toJSON = rd, xf.locale = pc, xf.localeData = qc, xf.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", rd), 
    xf.lang = Xe, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Zd), Z("X", ae), 
    ba("X", function(a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10));
    }), ba("x", function(a, b, c) {
        c._d = new Date(u(a));
    }), a.version = "2.18.1", b(tb), a.fn = bf, a.min = vb, a.max = wb, a.now = Qe, 
    a.utc = l, a.unix = Pc, a.months = Vc, a.isDate = h, a.locale = $a, a.invalid = p, 
    a.duration = Sb, a.isMoment = s, a.weekdays = Xc, a.parseZone = Qc, a.localeData = bb, 
    a.isDuration = Bb, a.monthsShort = Wc, a.weekdaysMin = Zc, a.defineLocale = _a, 
    a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Yc, a.normalizeUnits = K, 
    a.relativeTimeRounding = od, a.relativeTimeThreshold = pd, a.calendarFormat = Yb, 
    a.prototype = bf, a;
});

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([ "moment", "jquery" ], function(moment, jquery) {
            if (!jquery.fn) jquery.fn = {};
            if (typeof moment !== "function" && moment.default) moment = moment.default;
            return factory(moment, jquery);
        });
    } else if (typeof module === "object" && module.exports) {
        var jQuery = typeof window != "undefined" ? window.jQuery : undefined;
        if (!jQuery) {
            jQuery = require("jquery");
            if (!jQuery.fn) jQuery.fn = {};
        }
        var moment = typeof window != "undefined" && typeof window.moment != "undefined" ? window.moment : require("moment");
        module.exports = factory(moment, jQuery);
    } else {
        root.daterangepicker = factory(root.moment, root.jQuery);
    }
})(this, function(moment, $) {
    var DateRangePicker = function(element, options, cb) {
        this.parentEl = "body";
        this.element = $(element);
        this.startDate = moment().startOf("day");
        this.endDate = moment().endOf("day");
        this.minDate = false;
        this.maxDate = false;
        this.maxSpan = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.minYear = moment().subtract(100, "year").format("YYYY");
        this.maxYear = moment().add(100, "year").format("YYYY");
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.showCustomRangeLabel = true;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};
        this.opens = "right";
        if (this.element.hasClass("pull-right")) this.opens = "left";
        this.drops = "down";
        if (this.element.hasClass("dropup")) this.drops = "up";
        this.buttonClasses = "btn btn-sm";
        this.applyButtonClasses = "btn-primary";
        this.cancelButtonClasses = "btn-default";
        this.locale = {
            direction: "ltr",
            format: moment.localeData().longDateFormat("L"),
            separator: " - ",
            applyLabel: "Apply",
            cancelLabel: "Cancel",
            weekLabel: "W",
            customRangeLabel: "Custom Range",
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };
        this.callback = function() {};
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};
        if (typeof options !== "object" || options === null) options = {};
        options = $.extend(this.element.data(), options);
        if (typeof options.template !== "string" && !(options.template instanceof $)) options.template = '<div class="daterangepicker">' + '<div class="ranges"></div>' + '<div class="drp-calendar left">' + '<div class="calendar-table"></div>' + '<div class="calendar-time"></div>' + "</div>" + '<div class="drp-calendar right">' + '<div class="calendar-table"></div>' + '<div class="calendar-time"></div>' + "</div>" + '<div class="drp-buttons">' + '<span class="drp-selected"></span>' + '<button class="cancelBtn" type="button"></button>' + '<button class="applyBtn" disabled="disabled" type="button"></button> ' + "</div>" + "</div>";
        this.parentEl = options.parentEl && $(options.parentEl).length ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);
        if (typeof options.locale === "object") {
            if (typeof options.locale.direction === "string") this.locale.direction = options.locale.direction;
            if (typeof options.locale.format === "string") this.locale.format = options.locale.format;
            if (typeof options.locale.separator === "string") this.locale.separator = options.locale.separator;
            if (typeof options.locale.daysOfWeek === "object") this.locale.daysOfWeek = options.locale.daysOfWeek.slice();
            if (typeof options.locale.monthNames === "object") this.locale.monthNames = options.locale.monthNames.slice();
            if (typeof options.locale.firstDay === "number") this.locale.firstDay = options.locale.firstDay;
            if (typeof options.locale.applyLabel === "string") this.locale.applyLabel = options.locale.applyLabel;
            if (typeof options.locale.cancelLabel === "string") this.locale.cancelLabel = options.locale.cancelLabel;
            if (typeof options.locale.weekLabel === "string") this.locale.weekLabel = options.locale.weekLabel;
            if (typeof options.locale.customRangeLabel === "string") {
                var elem = document.createElement("textarea");
                elem.innerHTML = options.locale.customRangeLabel;
                var rangeHtml = elem.value;
                this.locale.customRangeLabel = rangeHtml;
            }
        }
        this.container.addClass(this.locale.direction);
        if (typeof options.startDate === "string") this.startDate = moment(options.startDate, this.locale.format);
        if (typeof options.endDate === "string") this.endDate = moment(options.endDate, this.locale.format);
        if (typeof options.minDate === "string") this.minDate = moment(options.minDate, this.locale.format);
        if (typeof options.maxDate === "string") this.maxDate = moment(options.maxDate, this.locale.format);
        if (typeof options.startDate === "object") this.startDate = moment(options.startDate);
        if (typeof options.endDate === "object") this.endDate = moment(options.endDate);
        if (typeof options.minDate === "object") this.minDate = moment(options.minDate);
        if (typeof options.maxDate === "object") this.maxDate = moment(options.maxDate);
        if (this.minDate && this.startDate.isBefore(this.minDate)) this.startDate = this.minDate.clone();
        if (this.maxDate && this.endDate.isAfter(this.maxDate)) this.endDate = this.maxDate.clone();
        if (typeof options.applyButtonClasses === "string") this.applyButtonClasses = options.applyButtonClasses;
        if (typeof options.applyClass === "string") this.applyButtonClasses = options.applyClass;
        if (typeof options.cancelButtonClasses === "string") this.cancelButtonClasses = options.cancelButtonClasses;
        if (typeof options.cancelClass === "string") this.cancelButtonClasses = options.cancelClass;
        if (typeof options.maxSpan === "object") this.maxSpan = options.maxSpan;
        if (typeof options.dateLimit === "object") this.maxSpan = options.dateLimit;
        if (typeof options.opens === "string") this.opens = options.opens;
        if (typeof options.drops === "string") this.drops = options.drops;
        if (typeof options.showWeekNumbers === "boolean") this.showWeekNumbers = options.showWeekNumbers;
        if (typeof options.showISOWeekNumbers === "boolean") this.showISOWeekNumbers = options.showISOWeekNumbers;
        if (typeof options.buttonClasses === "string") this.buttonClasses = options.buttonClasses;
        if (typeof options.buttonClasses === "object") this.buttonClasses = options.buttonClasses.join(" ");
        if (typeof options.showDropdowns === "boolean") this.showDropdowns = options.showDropdowns;
        if (typeof options.minYear === "number") this.minYear = options.minYear;
        if (typeof options.maxYear === "number") this.maxYear = options.maxYear;
        if (typeof options.showCustomRangeLabel === "boolean") this.showCustomRangeLabel = options.showCustomRangeLabel;
        if (typeof options.singleDatePicker === "boolean") {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker) this.endDate = this.startDate.clone();
        }
        if (typeof options.timePicker === "boolean") this.timePicker = options.timePicker;
        if (typeof options.timePickerSeconds === "boolean") this.timePickerSeconds = options.timePickerSeconds;
        if (typeof options.timePickerIncrement === "number") this.timePickerIncrement = options.timePickerIncrement;
        if (typeof options.timePicker24Hour === "boolean") this.timePicker24Hour = options.timePicker24Hour;
        if (typeof options.autoApply === "boolean") this.autoApply = options.autoApply;
        if (typeof options.autoUpdateInput === "boolean") this.autoUpdateInput = options.autoUpdateInput;
        if (typeof options.linkedCalendars === "boolean") this.linkedCalendars = options.linkedCalendars;
        if (typeof options.isInvalidDate === "function") this.isInvalidDate = options.isInvalidDate;
        if (typeof options.isCustomDate === "function") this.isCustomDate = options.isCustomDate;
        if (typeof options.alwaysShowCalendars === "boolean") this.alwaysShowCalendars = options.alwaysShowCalendars;
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }
        var start, end, range;
        if (typeof options.startDate === "undefined" && typeof options.endDate === "undefined") {
            if ($(this.element).is(":text")) {
                var val = $(this.element).val(), split = val.split(this.locale.separator);
                start = end = null;
                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }
        if (typeof options.ranges === "object") {
            for (range in options.ranges) {
                if (typeof options.ranges[range][0] === "string") start = moment(options.ranges[range][0], this.locale.format); else start = moment(options.ranges[range][0]);
                if (typeof options.ranges[range][1] === "string") end = moment(options.ranges[range][1], this.locale.format); else end = moment(options.ranges[range][1]);
                if (this.minDate && start.isBefore(this.minDate)) start = this.minDate.clone();
                var maxDate = this.maxDate;
                if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate)) maxDate = start.clone().add(this.maxSpan);
                if (maxDate && end.isAfter(maxDate)) end = maxDate.clone();
                if (this.minDate && end.isBefore(this.minDate, this.timepicker ? "minute" : "day") || maxDate && start.isAfter(maxDate, this.timepicker ? "minute" : "day")) continue;
                var elem = document.createElement("textarea");
                elem.innerHTML = range;
                var rangeHtml = elem.value;
                this.ranges[rangeHtml] = [ start, end ];
            }
            var list = "<ul>";
            for (range in this.ranges) {
                list += '<li data-range-key="' + range + '">' + range + "</li>";
            }
            if (this.showCustomRangeLabel) {
                list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>";
            }
            list += "</ul>";
            this.container.find(".ranges").prepend(list);
        }
        if (typeof cb === "function") {
            this.callback = cb;
        }
        if (!this.timePicker) {
            this.startDate = this.startDate.startOf("day");
            this.endDate = this.endDate.endOf("day");
            this.container.find(".calendar-time").hide();
        }
        if (this.timePicker && this.autoApply) this.autoApply = false;
        if (this.autoApply) {
            this.container.addClass("auto-apply");
        }
        if (typeof options.ranges === "object") this.container.addClass("show-ranges");
        if (this.singleDatePicker) {
            this.container.addClass("single");
            this.container.find(".drp-calendar.left").addClass("single");
            this.container.find(".drp-calendar.left").show();
            this.container.find(".drp-calendar.right").hide();
            if (!this.timePicker) {
                this.container.addClass("auto-apply");
            }
        }
        if (typeof options.ranges === "undefined" && !this.singleDatePicker || this.alwaysShowCalendars) {
            this.container.addClass("show-calendar");
        }
        this.container.addClass("opens" + this.opens);
        this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses);
        if (this.applyButtonClasses.length) this.container.find(".applyBtn").addClass(this.applyButtonClasses);
        if (this.cancelButtonClasses.length) this.container.find(".cancelBtn").addClass(this.cancelButtonClasses);
        this.container.find(".applyBtn").html(this.locale.applyLabel);
        this.container.find(".cancelBtn").html(this.locale.cancelLabel);
        this.container.find(".drp-calendar").on("click.daterangepicker", ".prev", $.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", $.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", $.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", $.proxy(this.hoverDate, this)).on("change.daterangepicker", "select.yearselect", $.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", $.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", $.proxy(this.timeChanged, this));
        this.container.find(".ranges").on("click.daterangepicker", "li", $.proxy(this.clickRange, this));
        this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", $.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", $.proxy(this.clickCancel, this));
        if (this.element.is("input") || this.element.is("button")) {
            this.element.on({
                "click.daterangepicker": $.proxy(this.show, this),
                "focus.daterangepicker": $.proxy(this.show, this),
                "keyup.daterangepicker": $.proxy(this.elementChanged, this),
                "keydown.daterangepicker": $.proxy(this.keydown, this)
            });
        } else {
            this.element.on("click.daterangepicker", $.proxy(this.toggle, this));
            this.element.on("keydown.daterangepicker", $.proxy(this.toggle, this));
        }
        this.updateElement();
    };
    DateRangePicker.prototype = {
        constructor: DateRangePicker,
        setStartDate: function(startDate) {
            if (typeof startDate === "string") this.startDate = moment(startDate, this.locale.format);
            if (typeof startDate === "object") this.startDate = moment(startDate);
            if (!this.timePicker) this.startDate = this.startDate.startOf("day");
            if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            if (this.minDate && this.startDate.isBefore(this.minDate)) {
                this.startDate = this.minDate.clone();
                if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }
            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
                this.startDate = this.maxDate.clone();
                if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }
            if (!this.isShowing) this.updateElement();
            this.updateMonthsInView();
        },
        setEndDate: function(endDate) {
            if (typeof endDate === "string") this.endDate = moment(endDate, this.locale.format);
            if (typeof endDate === "object") this.endDate = moment(endDate);
            if (!this.timePicker) this.endDate = this.endDate.add(1, "d").startOf("day").subtract(1, "second");
            if (this.timePicker && this.timePickerIncrement) this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            if (this.endDate.isBefore(this.startDate)) this.endDate = this.startDate.clone();
            if (this.maxDate && this.endDate.isAfter(this.maxDate)) this.endDate = this.maxDate.clone();
            if (this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate)) this.endDate = this.startDate.clone().add(this.maxSpan);
            this.previousRightTime = this.endDate.clone();
            this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            if (!this.isShowing) this.updateElement();
            this.updateMonthsInView();
        },
        isInvalidDate: function() {
            return false;
        },
        isCustomDate: function() {
            return false;
        },
        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker("left");
                this.renderTimePicker("right");
                if (!this.endDate) {
                    this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled");
                } else {
                    this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled");
                }
            }
            if (this.endDate) this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },
        updateMonthsInView: function() {
            if (this.endDate) {
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) {
                    return;
                }
                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month");
                }
            } else {
                if (this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM")) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month");
                }
            }
            if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
                this.rightCalendar.month = this.maxDate.clone().date(2);
                this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month");
            }
        },
        updateCalendars: function() {
            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find(".left .hourselect").val(), 10);
                    minute = parseInt(this.container.find(".left .minuteselect").val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find(".left .ampmselect").val();
                        if (ampm === "PM" && hour < 12) hour += 12;
                        if (ampm === "AM" && hour === 12) hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find(".right .hourselect").val(), 10);
                    minute = parseInt(this.container.find(".right .minuteselect").val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find(".right .ampmselect").val();
                        if (ampm === "PM" && hour < 12) hour += 12;
                        if (ampm === "AM" && hour === 12) hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }
            this.renderCalendar("left");
            this.renderCalendar("right");
            this.container.find(".ranges li").removeClass("active");
            if (this.endDate == null) return;
            this.calculateChosenLabel();
        },
        renderCalendar: function(side) {
            var calendar = side == "left" ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([ year, month ]).daysInMonth();
            var firstDay = moment([ year, month, 1 ]);
            var lastDay = moment([ year, month, daysInMonth ]);
            var lastMonth = moment(firstDay).subtract(1, "month").month();
            var lastYear = moment(firstDay).subtract(1, "month").year();
            var daysInLastMonth = moment([ lastYear, lastMonth ]).daysInMonth();
            var dayOfWeek = firstDay.day();
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;
            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth) startDay -= 7;
            if (dayOfWeek == this.locale.firstDay) startDay = daysInLastMonth - 6;
            var curDate = moment([ lastYear, lastMonth, startDay, 12, minute, second ]);
            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, "hour")) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);
                if (this.minDate && calendar[row][col].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && calendar[row][col].isBefore(this.minDate) && side == "left") {
                    calendar[row][col] = this.minDate.clone();
                }
                if (this.maxDate && calendar[row][col].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && calendar[row][col].isAfter(this.maxDate) && side == "right") {
                    calendar[row][col] = this.maxDate.clone();
                }
            }
            if (side == "left") {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }
            var minDate = side == "left" ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == "left" ? this.startDate : this.endDate;
            var arrow = this.locale.direction == "ltr" ? {
                left: "chevron-left",
                right: "chevron-right"
            } : {
                left: "chevron-right",
                right: "chevron-left"
            };
            var html = '<table class="table-condensed">';
            html += "<thead>";
            html += "<tr>";
            if (this.showWeekNumbers || this.showISOWeekNumbers) html += "<th></th>";
            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == "left")) {
                html += '<th class="prev available"><span></span></th>';
            } else {
                html += "<th></th>";
            }
            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");
            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = maxDate && maxDate.year() || this.maxYear;
                var minYear = minDate && minDate.year() || this.minYear;
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;
                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                        monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";
                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' + (y === currentYear ? ' selected="selected"' : "") + ">" + y + "</option>";
                }
                yearHtml += "</select>";
                dateHtml = monthHtml + yearHtml;
            }
            html += '<th colspan="5" class="month">' + dateHtml + "</th>";
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == "right" || this.singleDatePicker)) {
                html += '<th class="next available"><span></span></th>';
            } else {
                html += "<th></th>";
            }
            html += "</tr>";
            html += "<tr>";
            if (this.showWeekNumbers || this.showISOWeekNumbers) html += '<th class="week">' + this.locale.weekLabel + "</th>";
            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += "<th>" + dayOfWeek + "</th>";
            });
            html += "</tr>";
            html += "</thead>";
            html += "<tbody>";
            if (this.endDate == null && this.maxSpan) {
                var maxLimit = this.startDate.clone().add(this.maxSpan).endOf("day");
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }
            for (var row = 0; row < 6; row++) {
                html += "<tr>";
                if (this.showWeekNumbers) html += '<td class="week">' + calendar[row][0].week() + "</td>"; else if (this.showISOWeekNumbers) html += '<td class="week">' + calendar[row][0].isoWeek() + "</td>";
                for (var col = 0; col < 7; col++) {
                    var classes = [];
                    if (calendar[row][col].isSame(new Date(), "day")) classes.push("today");
                    if (calendar[row][col].isoWeekday() > 5) classes.push("weekend");
                    if (calendar[row][col].month() != calendar[1][1].month()) classes.push("off");
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, "day")) classes.push("off", "disabled");
                    if (maxDate && calendar[row][col].isAfter(maxDate, "day")) classes.push("off", "disabled");
                    if (this.isInvalidDate(calendar[row][col])) classes.push("off", "disabled");
                    if (calendar[row][col].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD")) classes.push("active", "start-date");
                    if (this.endDate != null && calendar[row][col].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD")) classes.push("active", "end-date");
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate) classes.push("in-range");
                    var isCustom = this.isCustomDate(calendar[row][col]);
                    if (isCustom !== false) {
                        if (typeof isCustom === "string") classes.push(isCustom); else Array.prototype.push.apply(classes, isCustom);
                    }
                    var cname = "", disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + " ";
                        if (classes[i] == "disabled") disabled = true;
                    }
                    if (!disabled) cname += "available";
                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, "") + '" data-title="' + "r" + row + "c" + col + '">' + calendar[row][col].date() + "</td>";
                }
                html += "</tr>";
            }
            html += "</tbody>";
            html += "</table>";
            this.container.find(".drp-calendar." + side + " .calendar-table").html(html);
        },
        renderTimePicker: function(side) {
            if (side == "right" && !this.endDate) return;
            var html, selected, minDate, maxDate = this.maxDate;
            if (this.maxSpan && (!this.maxDate || this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate))) maxDate = this.startDate.clone().add(this.maxSpan);
            if (side == "left") {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == "right") {
                selected = this.endDate.clone();
                minDate = this.startDate;
                var timeSelector = this.container.find(".drp-calendar.right .calendar-time");
                if (timeSelector.html() != "") {
                    selected.hour(selected.hour() || timeSelector.find(".hourselect option:selected").val());
                    selected.minute(selected.minute() || timeSelector.find(".minuteselect option:selected").val());
                    selected.second(selected.second() || timeSelector.find(".secondselect option:selected").val());
                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find(".ampmselect option:selected").val();
                        if (ampm === "PM" && selected.hour() < 12) selected.hour(selected.hour() + 12);
                        if (ampm === "AM" && selected.hour() === 12) selected.hour(0);
                    }
                }
                if (selected.isBefore(this.startDate)) selected = this.startDate.clone();
                if (maxDate && selected.isAfter(maxDate)) selected = maxDate.clone();
            }
            html = '<select class="hourselect">';
            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;
            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour) i_in_24 = selected.hour() >= 12 ? i == 12 ? 12 : i + 12 : i == 12 ? 0 : i;
                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate)) disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate)) disabled = true;
                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + "</option>";
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + "</option>";
                } else {
                    html += '<option value="' + i + '">' + i + "</option>";
                }
            }
            html += "</select> ";
            html += ': <select class="minuteselect">';
            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? "0" + i : i;
                var time = selected.clone().minute(i);
                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate)) disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate)) disabled = true;
                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + "</option>";
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + "</option>";
                } else {
                    html += '<option value="' + i + '">' + padded + "</option>";
                }
            }
            html += "</select> ";
            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';
                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? "0" + i : i;
                    var time = selected.clone().second(i);
                    var disabled = false;
                    if (minDate && time.isBefore(minDate)) disabled = true;
                    if (maxDate && time.isAfter(maxDate)) disabled = true;
                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + "</option>";
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + "</option>";
                    } else {
                        html += '<option value="' + i + '">' + padded + "</option>";
                    }
                }
                html += "</select> ";
            }
            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';
                var am_html = "";
                var pm_html = "";
                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate)) am_html = ' disabled="disabled" class="disabled"';
                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate)) pm_html = ' disabled="disabled" class="disabled"';
                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + ">PM</option>";
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + ">PM</option>";
                }
                html += "</select>";
            }
            this.container.find(".drp-calendar." + side + " .calendar-time").html(html);
        },
        updateFormInputs: function() {
            if (this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate))) {
                this.container.find("button.applyBtn").removeAttr("disabled");
            } else {
                this.container.find("button.applyBtn").attr("disabled", "disabled");
            }
        },
        move: function() {
            var parentOffset = {
                top: 0,
                left: 0
            }, containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is("body")) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }
            if (this.drops == "up") containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top; else containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == "up" ? "addClass" : "removeClass"]("drop-up");
            if (this.opens == "left") {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: "auto"
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: "auto",
                        left: 9
                    });
                }
            } else if (this.opens == "center") {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                    right: "auto"
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: "auto",
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: "auto"
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: "auto",
                        right: 0
                    });
                }
            }
        },
        show: function(e) {
            if (this.isShowing) return;
            this._outsideClickProxy = $.proxy(function(e) {
                this.outsideClick(e);
            }, this);
            $(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy);
            $(window).on("resize.daterangepicker", $.proxy(function(e) {
                this.move(e);
            }, this));
            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();
            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger("show.daterangepicker", this);
            this.isShowing = true;
        },
        hide: function(e) {
            if (!this.isShowing) return;
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate)) this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel);
            this.updateElement();
            $(document).off(".daterangepicker");
            $(window).off(".daterangepicker");
            this.container.hide();
            this.element.trigger("hide.daterangepicker", this);
            this.isShowing = false;
        },
        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },
        outsideClick: function(e) {
            var target = $(e.target);
            if (e.type == "focusin" || target.closest(this.element).length || target.closest(this.container).length || target.closest(".calendar-table").length) return;
            this.hide();
            this.element.trigger("outsideClick.daterangepicker", this);
        },
        showCalendars: function() {
            this.container.addClass("show-calendar");
            this.move();
            this.element.trigger("showCalendar.daterangepicker", this);
        },
        hideCalendars: function() {
            this.container.removeClass("show-calendar");
            this.element.trigger("hideCalendar.daterangepicker", this);
        },
        clickRange: function(e) {
            var label = e.target.getAttribute("data-range-key");
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];
                if (!this.timePicker) {
                    this.startDate.startOf("day");
                    this.endDate.endOf("day");
                }
                if (!this.alwaysShowCalendars) this.hideCalendars();
                this.clickApply();
            }
        },
        clickPrev: function(e) {
            var cal = $(e.target).parents(".drp-calendar");
            if (cal.hasClass("left")) {
                this.leftCalendar.month.subtract(1, "month");
                if (this.linkedCalendars) this.rightCalendar.month.subtract(1, "month");
            } else {
                this.rightCalendar.month.subtract(1, "month");
            }
            this.updateCalendars();
        },
        clickNext: function(e) {
            var cal = $(e.target).parents(".drp-calendar");
            if (cal.hasClass("left")) {
                this.leftCalendar.month.add(1, "month");
            } else {
                this.rightCalendar.month.add(1, "month");
                if (this.linkedCalendars) this.leftCalendar.month.add(1, "month");
            }
            this.updateCalendars();
        },
        hoverDate: function(e) {
            if (!$(e.target).hasClass("available")) return;
            var title = $(e.target).attr("data-title");
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents(".drp-calendar");
            var date = cal.hasClass("left") ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find(".drp-calendar tbody td").each(function(index, el) {
                    if ($(el).hasClass("week")) return;
                    var title = $(el).attr("data-title");
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents(".drp-calendar");
                    var dt = cal.hasClass("left") ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];
                    if (dt.isAfter(startDate) && dt.isBefore(date) || dt.isSame(date, "day")) {
                        $(el).addClass("in-range");
                    } else {
                        $(el).removeClass("in-range");
                    }
                });
            }
        },
        clickDate: function(e) {
            if (!$(e.target).hasClass("available")) return;
            var title = $(e.target).attr("data-title");
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents(".drp-calendar");
            var date = cal.hasClass("left") ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];
            if (this.endDate || date.isBefore(this.startDate, "day")) {
                if (this.timePicker) {
                    var hour = parseInt(this.container.find(".left .hourselect").val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find(".left .ampmselect").val();
                        if (ampm === "PM" && hour < 12) hour += 12;
                        if (ampm === "AM" && hour === 12) hour = 0;
                    }
                    var minute = parseInt(this.container.find(".left .minuteselect").val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                this.setEndDate(this.startDate.clone());
            } else {
                if (this.timePicker) {
                    var hour = parseInt(this.container.find(".right .hourselect").val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find(".right .ampmselect").val();
                        if (ampm === "PM" && hour < 12) hour += 12;
                        if (ampm === "AM" && hour === 12) hour = 0;
                    }
                    var minute = parseInt(this.container.find(".right .minuteselect").val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                    this.calculateChosenLabel();
                    this.clickApply();
                }
            }
            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker) this.clickApply();
            }
            this.updateView();
            e.stopPropagation();
        },
        calculateChosenLabel: function() {
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
                if (this.timePicker) {
                    var format = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm";
                    if (this.startDate.format(format) == this.ranges[range][0].format(format) && this.endDate.format(format) == this.ranges[range][1].format(format)) {
                        customRange = false;
                        this.chosenLabel = this.container.find(".ranges li:eq(" + i + ")").addClass("active").attr("data-range-key");
                        break;
                    }
                } else {
                    if (this.startDate.format("YYYY-MM-DD") == this.ranges[range][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[range][1].format("YYYY-MM-DD")) {
                        customRange = false;
                        this.chosenLabel = this.container.find(".ranges li:eq(" + i + ")").addClass("active").attr("data-range-key");
                        break;
                    }
                }
                i++;
            }
            if (customRange) {
                if (this.showCustomRangeLabel) {
                    this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key");
                } else {
                    this.chosenLabel = null;
                }
                this.showCalendars();
            }
        },
        clickApply: function(e) {
            this.hide();
            this.element.trigger("apply.daterangepicker", this);
        },
        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger("cancel.daterangepicker", this);
        },
        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest(".drp-calendar").hasClass("left"), leftOrRight = isLeft ? "left" : "right", cal = this.container.find(".drp-calendar." + leftOrRight);
            var month = parseInt(cal.find(".monthselect").val(), 10);
            var year = cal.find(".yearselect").val();
            if (!isLeft) {
                if (year < this.startDate.year() || year == this.startDate.year() && month < this.startDate.month()) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }
            if (this.minDate) {
                if (year < this.minDate.year() || year == this.minDate.year() && month < this.minDate.month()) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }
            if (this.maxDate) {
                if (year > this.maxDate.year() || year == this.maxDate.year() && month > this.maxDate.month()) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }
            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars) this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month");
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars) this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month");
            }
            this.updateCalendars();
        },
        timeChanged: function(e) {
            var cal = $(e.target).closest(".drp-calendar"), isLeft = cal.hasClass("left");
            var hour = parseInt(cal.find(".hourselect").val(), 10);
            var minute = parseInt(cal.find(".minuteselect").val(), 10);
            var second = this.timePickerSeconds ? parseInt(cal.find(".secondselect").val(), 10) : 0;
            if (!this.timePicker24Hour) {
                var ampm = cal.find(".ampmselect").val();
                if (ampm === "PM" && hour < 12) hour += 12;
                if (ampm === "AM" && hour === 12) hour = 0;
            }
            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format("YYYY-MM-DD") == start.format("YYYY-MM-DD") && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }
            this.updateCalendars();
            this.updateFormInputs();
            this.renderTimePicker("left");
            this.renderTimePicker("right");
        },
        elementChanged: function() {
            if (!this.element.is("input")) return;
            if (!this.element.val().length) return;
            var dateString = this.element.val().split(this.locale.separator), start = null, end = null;
            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }
            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }
            if (!start.isValid() || !end.isValid()) return;
            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },
        keydown: function(e) {
            if (e.keyCode === 9 || e.keyCode === 13) {
                this.hide();
            }
            if (e.keyCode === 27) {
                e.preventDefault();
                e.stopPropagation();
                this.hide();
            }
        },
        updateElement: function() {
            if (this.element.is("input") && this.autoUpdateInput) {
                var newValue = this.startDate.format(this.locale.format);
                if (!this.singleDatePicker) {
                    newValue += this.locale.separator + this.endDate.format(this.locale.format);
                }
                if (newValue !== this.element.val()) {
                    this.element.val(newValue).trigger("change");
                }
            }
        },
        remove: function() {
            this.container.remove();
            this.element.off(".daterangepicker");
            this.element.removeData();
        }
    };
    $.fn.daterangepicker = function(options, callback) {
        var implementOptions = $.extend(true, {}, $.fn.daterangepicker.defaultOptions, options);
        this.each(function() {
            var el = $(this);
            if (el.data("daterangepicker")) el.data("daterangepicker").remove();
            el.data("daterangepicker", new DateRangePicker(el, implementOptions, callback));
        });
        return this;
    };
    return DateRangePicker;
});

!function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : a("object" == typeof exports ? require("jquery") : jQuery);
}(function(a, b) {
    function c() {
        return new Date(Date.UTC.apply(Date, arguments));
    }
    function d() {
        var a = new Date();
        return c(a.getFullYear(), a.getMonth(), a.getDate());
    }
    function e(a, b) {
        return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate();
    }
    function f(c, d) {
        return function() {
            return d !== b && a.fn.datepicker.deprecated(d), this[c].apply(this, arguments);
        };
    }
    function g(a) {
        return a && !isNaN(a.getTime());
    }
    function h(b, c) {
        function d(a, b) {
            return b.toLowerCase();
        }
        var e, f = a(b).data(), g = {}, h = new RegExp("^" + c.toLowerCase() + "([A-Z])");
        c = new RegExp("^" + c.toLowerCase());
        for (var i in f) c.test(i) && (e = i.replace(h, d), g[e] = f[i]);
        return g;
    }
    function i(b) {
        var c = {};
        if (q[b] || (b = b.split("-")[0], q[b])) {
            var d = q[b];
            return a.each(p, function(a, b) {
                b in d && (c[b] = d[b]);
            }), c;
        }
    }
    var j = function() {
        var b = {
            get: function(a) {
                return this.slice(a)[0];
            },
            contains: function(a) {
                for (var b = a && a.valueOf(), c = 0, d = this.length; c < d; c++) if (0 <= this[c].valueOf() - b && this[c].valueOf() - b < 864e5) return c;
                return -1;
            },
            remove: function(a) {
                this.splice(a, 1);
            },
            replace: function(b) {
                b && (a.isArray(b) || (b = [ b ]), this.clear(), this.push.apply(this, b));
            },
            clear: function() {
                this.length = 0;
            },
            copy: function() {
                var a = new j();
                return a.replace(this), a;
            }
        };
        return function() {
            var c = [];
            return c.push.apply(c, arguments), a.extend(c, b), c;
        };
    }(), k = function(b, c) {
        a.data(b, "datepicker", this), this._process_options(c), this.dates = new j(), this.viewDate = this.o.defaultViewDate, 
        this.focusDate = null, this.element = a(b), this.isInput = this.element.is("input"), 
        this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), 
        this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), 
        this.picker = a(r.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), 
        this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), 
        this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), 
        this.o.rtl && this.picker.addClass("datepicker-rtl"), this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(a, b) {
            return Number(b) + 1;
        }), this._process_options({
            startDate: this._o.startDate,
            endDate: this._o.endDate,
            daysOfWeekDisabled: this.o.daysOfWeekDisabled,
            daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
            datesDisabled: this.o.datesDisabled
        }), this._allow_update = !1, this.setViewMode(this.o.startView), this._allow_update = !0, 
        this.fillDow(), this.fillMonths(), this.update(), this.isInline && this.show();
    };
    k.prototype = {
        constructor: k,
        _resolveViewName: function(b) {
            return a.each(r.viewModes, function(c, d) {
                if (b === c || a.inArray(b, d.names) !== -1) return b = c, !1;
            }), b;
        },
        _resolveDaysOfWeek: function(b) {
            return a.isArray(b) || (b = b.split(/[,\s]*/)), a.map(b, Number);
        },
        _check_template: function(c) {
            try {
                if (c === b || "" === c) return !1;
                if ((c.match(/[<>]/g) || []).length <= 0) return !0;
                var d = a(c);
                return d.length > 0;
            } catch (a) {
                return !1;
            }
        },
        _process_options: function(b) {
            this._o = a.extend({}, this._o, b);
            var e = this.o = a.extend({}, this._o), f = e.language;
            q[f] || (f = f.split("-")[0], q[f] || (f = o.language)), e.language = f, e.startView = this._resolveViewName(e.startView), 
            e.minViewMode = this._resolveViewName(e.minViewMode), e.maxViewMode = this._resolveViewName(e.maxViewMode), 
            e.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, e.startView)), 
            e.multidate !== !0 && (e.multidate = Number(e.multidate) || !1, e.multidate !== !1 && (e.multidate = Math.max(0, e.multidate))), 
            e.multidateSeparator = String(e.multidateSeparator), e.weekStart %= 7, e.weekEnd = (e.weekStart + 6) % 7;
            var g = r.parseFormat(e.format);
            e.startDate !== -(1 / 0) && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = r.parseDate(e.startDate, g, e.language, e.assumeNearbyYear) : e.startDate = -(1 / 0)), 
            e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = r.parseDate(e.endDate, g, e.language, e.assumeNearbyYear) : e.endDate = 1 / 0), 
            e.daysOfWeekDisabled = this._resolveDaysOfWeek(e.daysOfWeekDisabled || []), e.daysOfWeekHighlighted = this._resolveDaysOfWeek(e.daysOfWeekHighlighted || []), 
            e.datesDisabled = e.datesDisabled || [], a.isArray(e.datesDisabled) || (e.datesDisabled = e.datesDisabled.split(",")), 
            e.datesDisabled = a.map(e.datesDisabled, function(a) {
                return r.parseDate(a, g, e.language, e.assumeNearbyYear);
            });
            var h = String(e.orientation).toLowerCase().split(/\s+/g), i = e.orientation.toLowerCase();
            if (h = a.grep(h, function(a) {
                return /^auto|left|right|top|bottom$/.test(a);
            }), e.orientation = {
                x: "auto",
                y: "auto"
            }, i && "auto" !== i) if (1 === h.length) switch (h[0]) {
              case "top":
              case "bottom":
                e.orientation.y = h[0];
                break;

              case "left":
              case "right":
                e.orientation.x = h[0];
            } else i = a.grep(h, function(a) {
                return /^left|right$/.test(a);
            }), e.orientation.x = i[0] || "auto", i = a.grep(h, function(a) {
                return /^top|bottom$/.test(a);
            }), e.orientation.y = i[0] || "auto"; else ;
            if (e.defaultViewDate instanceof Date || "string" == typeof e.defaultViewDate) e.defaultViewDate = r.parseDate(e.defaultViewDate, g, e.language, e.assumeNearbyYear); else if (e.defaultViewDate) {
                var j = e.defaultViewDate.year || new Date().getFullYear(), k = e.defaultViewDate.month || 0, l = e.defaultViewDate.day || 1;
                e.defaultViewDate = c(j, k, l);
            } else e.defaultViewDate = d();
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(a) {
            for (var c, d, e, f = 0; f < a.length; f++) c = a[f][0], 2 === a[f].length ? (d = b, 
            e = a[f][1]) : 3 === a[f].length && (d = a[f][1], e = a[f][2]), c.on(e, d);
        },
        _unapplyEvents: function(a) {
            for (var c, d, e, f = 0; f < a.length; f++) c = a[f][0], 2 === a[f].length ? (e = b, 
            d = a[f][1]) : 3 === a[f].length && (e = a[f][1], d = a[f][2]), c.off(d, e);
        },
        _buildEvents: function() {
            var b = {
                keyup: a.proxy(function(b) {
                    a.inArray(b.keyCode, [ 27, 37, 39, 38, 40, 32, 13, 9 ]) === -1 && this.update();
                }, this),
                keydown: a.proxy(this.keydown, this),
                paste: a.proxy(this.paste, this)
            };
            this.o.showOnFocus === !0 && (b.focus = a.proxy(this.show, this)), this.isInput ? this._events = [ [ this.element, b ] ] : this.component && this.inputField.length ? this._events = [ [ this.inputField, b ], [ this.component, {
                click: a.proxy(this.show, this)
            } ] ] : this._events = [ [ this.element, {
                click: a.proxy(this.show, this),
                keydown: a.proxy(this.keydown, this)
            } ] ], this._events.push([ this.element, "*", {
                blur: a.proxy(function(a) {
                    this._focused_from = a.target;
                }, this)
            } ], [ this.element, {
                blur: a.proxy(function(a) {
                    this._focused_from = a.target;
                }, this)
            } ]), this.o.immediateUpdates && this._events.push([ this.element, {
                "changeYear changeMonth": a.proxy(function(a) {
                    this.update(a.date);
                }, this)
            } ]), this._secondaryEvents = [ [ this.picker, {
                click: a.proxy(this.click, this)
            } ], [ this.picker, ".prev, .next", {
                click: a.proxy(this.navArrowsClick, this)
            } ], [ this.picker, ".day:not(.disabled)", {
                click: a.proxy(this.dayCellClick, this)
            } ], [ a(window), {
                resize: a.proxy(this.place, this)
            } ], [ a(document), {
                "mousedown touchstart": a.proxy(function(a) {
                    this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.isInline || this.hide();
                }, this)
            } ] ];
        },
        _attachEvents: function() {
            this._detachEvents(), this._applyEvents(this._events);
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events);
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents);
        },
        _trigger: function(b, c) {
            var d = c || this.dates.get(-1), e = this._utc_to_local(d);
            this.element.trigger({
                type: b,
                date: e,
                viewMode: this.viewMode,
                dates: a.map(this.dates, this._utc_to_local),
                format: a.proxy(function(a, b) {
                    0 === arguments.length ? (a = this.dates.length - 1, b = this.o.format) : "string" == typeof a && (b = a, 
                    a = this.dates.length - 1), b = b || this.o.format;
                    var c = this.dates.get(a);
                    return r.formatDate(c, b, this.o.language);
                }, this)
            });
        },
        show: function() {
            if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && this.o.enableOnReadonly === !1)) return this.isInline || this.picker.appendTo(this.o.container), 
            this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), 
            (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && a(this.element).blur(), 
            this;
        },
        hide: function() {
            return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, 
            this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), 
            this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), 
            this);
        },
        destroy: function() {
            return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), 
            delete this.element.data().datepicker, this.isInput || delete this.element.data().date, 
            this;
        },
        paste: function(b) {
            var c;
            if (b.originalEvent.clipboardData && b.originalEvent.clipboardData.types && a.inArray("text/plain", b.originalEvent.clipboardData.types) !== -1) c = b.originalEvent.clipboardData.getData("text/plain"); else {
                if (!window.clipboardData) return;
                c = window.clipboardData.getData("Text");
            }
            this.setDate(c), this.update(), b.preventDefault();
        },
        _utc_to_local: function(a) {
            if (!a) return a;
            var b = new Date(a.getTime() + 6e4 * a.getTimezoneOffset());
            return b.getTimezoneOffset() !== a.getTimezoneOffset() && (b = new Date(a.getTime() + 6e4 * b.getTimezoneOffset())), 
            b;
        },
        _local_to_utc: function(a) {
            return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset());
        },
        _zero_time: function(a) {
            return a && new Date(a.getFullYear(), a.getMonth(), a.getDate());
        },
        _zero_utc_time: function(a) {
            return a && c(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
        },
        getDates: function() {
            return a.map(this.dates, this._utc_to_local);
        },
        getUTCDates: function() {
            return a.map(this.dates, function(a) {
                return new Date(a);
            });
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate());
        },
        getUTCDate: function() {
            var a = this.dates.get(-1);
            return a !== b ? new Date(a) : null;
        },
        clearDates: function() {
            this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide();
        },
        setDates: function() {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, b), this._trigger("changeDate"), this.setValue(), 
            this;
        },
        setUTCDates: function() {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.setDates.apply(this, a.map(b, this._utc_to_local)), this;
        },
        setDate: f("setDates"),
        setUTCDate: f("setUTCDates"),
        remove: f("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
        setValue: function() {
            var a = this.getFormattedDate();
            return this.inputField.val(a), this;
        },
        getFormattedDate: function(c) {
            c === b && (c = this.o.format);
            var d = this.o.language;
            return a.map(this.dates, function(a) {
                return r.formatDate(a, c, d);
            }).join(this.o.multidateSeparator);
        },
        getStartDate: function() {
            return this.o.startDate;
        },
        setStartDate: function(a) {
            return this._process_options({
                startDate: a
            }), this.update(), this.updateNavArrows(), this;
        },
        getEndDate: function() {
            return this.o.endDate;
        },
        setEndDate: function(a) {
            return this._process_options({
                endDate: a
            }), this.update(), this.updateNavArrows(), this;
        },
        setDaysOfWeekDisabled: function(a) {
            return this._process_options({
                daysOfWeekDisabled: a
            }), this.update(), this;
        },
        setDaysOfWeekHighlighted: function(a) {
            return this._process_options({
                daysOfWeekHighlighted: a
            }), this.update(), this;
        },
        setDatesDisabled: function(a) {
            return this._process_options({
                datesDisabled: a
            }), this.update(), this;
        },
        place: function() {
            if (this.isInline) return this;
            var b = this.picker.outerWidth(), c = this.picker.outerHeight(), d = 10, e = a(this.o.container), f = e.width(), g = "body" === this.o.container ? a(document).scrollTop() : e.scrollTop(), h = e.offset(), i = [ 0 ];
            this.element.parents().each(function() {
                var b = a(this).css("z-index");
                "auto" !== b && 0 !== Number(b) && i.push(Number(b));
            });
            var j = Math.max.apply(Math, i) + this.o.zIndexOffset, k = this.component ? this.component.parent().offset() : this.element.offset(), l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1), m = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1), n = k.left - h.left, o = k.top - h.top;
            "body" !== this.o.container && (o += g), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), 
            "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), 
            "right" === this.o.orientation.x && (n -= b - m)) : k.left < 0 ? (this.picker.addClass("datepicker-orient-left"), 
            n -= k.left - d) : n + b > f ? (this.picker.addClass("datepicker-orient-right"), 
            n += m - b) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left");
            var p, q = this.o.orientation.y;
            if ("auto" === q && (p = -g + o - c, q = p < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + q), 
            "top" === q ? o -= c + parseInt(this.picker.css("padding-top")) : o += l, this.o.rtl) {
                var r = f - (n + m);
                this.picker.css({
                    top: o,
                    right: r,
                    zIndex: j
                });
            } else this.picker.css({
                top: o,
                left: n,
                zIndex: j
            });
            return this;
        },
        _allow_update: !0,
        update: function() {
            if (!this._allow_update) return this;
            var b = this.dates.copy(), c = [], d = !1;
            return arguments.length ? (a.each(arguments, a.proxy(function(a, b) {
                b instanceof Date && (b = this._local_to_utc(b)), c.push(b);
            }, this)), d = !0) : (c = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(), 
            c = c && this.o.multidate ? c.split(this.o.multidateSeparator) : [ c ], delete this.element.data().date), 
            c = a.map(c, a.proxy(function(a) {
                return r.parseDate(a, this.o.format, this.o.language, this.o.assumeNearbyYear);
            }, this)), c = a.grep(c, a.proxy(function(a) {
                return !this.dateWithinRange(a) || !a;
            }, this), !0), this.dates.replace(c), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), 
            d ? (this.setValue(), this.element.change()) : this.dates.length && String(b) !== String(this.dates) && d && (this._trigger("changeDate"), 
            this.element.change()), !this.dates.length && b.length && (this._trigger("clearDate"), 
            this.element.change()), this.fill(), this;
        },
        fillDow: function() {
            if (this.o.showWeekDays) {
                var b = this.o.weekStart, c = "<tr>";
                for (this.o.calendarWeeks && (c += '<th class="cw">&#160;</th>'); b < this.o.weekStart + 7; ) c += '<th class="dow', 
                a.inArray(b, this.o.daysOfWeekDisabled) !== -1 && (c += " disabled"), c += '">' + q[this.o.language].daysMin[b++ % 7] + "</th>";
                c += "</tr>", this.picker.find(".datepicker-days thead").append(c);
            }
        },
        fillMonths: function() {
            for (var a, b = this._utc_to_local(this.viewDate), c = "", d = 0; d < 12; d++) a = b && b.getMonth() === d ? " focused" : "", 
            c += '<span class="month' + a + '">' + q[this.o.language].monthsShort[d] + "</span>";
            this.picker.find(".datepicker-months td").html(c);
        },
        setRange: function(b) {
            b && b.length ? this.range = a.map(b, function(a) {
                return a.valueOf();
            }) : delete this.range, this.fill();
        },
        getClassNames: function(b) {
            var c = [], f = this.viewDate.getUTCFullYear(), g = this.viewDate.getUTCMonth(), h = d();
            return b.getUTCFullYear() < f || b.getUTCFullYear() === f && b.getUTCMonth() < g ? c.push("old") : (b.getUTCFullYear() > f || b.getUTCFullYear() === f && b.getUTCMonth() > g) && c.push("new"), 
            this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push("focused"), 
            this.o.todayHighlight && e(b, h) && c.push("today"), this.dates.contains(b) !== -1 && c.push("active"), 
            this.dateWithinRange(b) || c.push("disabled"), this.dateIsDisabled(b) && c.push("disabled", "disabled-date"), 
            a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1 && c.push("highlighted"), 
            this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"), 
            a.inArray(b.valueOf(), this.range) !== -1 && c.push("selected"), b.valueOf() === this.range[0] && c.push("range-start"), 
            b.valueOf() === this.range[this.range.length - 1] && c.push("range-end")), c;
        },
        _fill_yearsView: function(c, d, e, f, g, h, i) {
            for (var j, k, l, m = "", n = e / 10, o = this.picker.find(c), p = Math.floor(f / e) * e, q = p + 9 * n, r = Math.floor(this.viewDate.getFullYear() / n) * n, s = a.map(this.dates, function(a) {
                return Math.floor(a.getUTCFullYear() / n) * n;
            }), t = p - n; t <= q + n; t += n) j = [ d ], k = null, t === p - n ? j.push("old") : t === q + n && j.push("new"), 
            a.inArray(t, s) !== -1 && j.push("active"), (t < g || t > h) && j.push("disabled"), 
            t === r && j.push("focused"), i !== a.noop && (l = i(new Date(t, 0, 1)), l === b ? l = {} : "boolean" == typeof l ? l = {
                enabled: l
            } : "string" == typeof l && (l = {
                classes: l
            }), l.enabled === !1 && j.push("disabled"), l.classes && (j = j.concat(l.classes.split(/\s+/))), 
            l.tooltip && (k = l.tooltip)), m += '<span class="' + j.join(" ") + '"' + (k ? ' title="' + k + '"' : "") + ">" + t + "</span>";
            o.find(".datepicker-switch").text(p + "-" + q), o.find("td").html(m);
        },
        fill: function() {
            var d, e, f = new Date(this.viewDate), g = f.getUTCFullYear(), h = f.getUTCMonth(), i = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0), j = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0), k = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0, l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, m = q[this.o.language].today || q.en.today || "", n = q[this.o.language].clear || q.en.clear || "", o = q[this.o.language].titleFormat || q.en.titleFormat;
            if (!isNaN(g) && !isNaN(h)) {
                this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f, o, this.o.language)), 
                this.picker.find("tfoot .today").text(m).css("display", this.o.todayBtn === !0 || "linked" === this.o.todayBtn ? "table-cell" : "none"), 
                this.picker.find("tfoot .clear").text(n).css("display", this.o.clearBtn === !0 ? "table-cell" : "none"), 
                this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"), 
                this.updateNavArrows(), this.fillMonths();
                var p = c(g, h, 0), s = p.getUTCDate();
                p.setUTCDate(s - (p.getUTCDay() - this.o.weekStart + 7) % 7);
                var t = new Date(p);
                p.getUTCFullYear() < 100 && t.setUTCFullYear(p.getUTCFullYear()), t.setUTCDate(t.getUTCDate() + 42), 
                t = t.valueOf();
                for (var u, v, w = []; p.valueOf() < t; ) {
                    if (u = p.getUTCDay(), u === this.o.weekStart && (w.push("<tr>"), this.o.calendarWeeks)) {
                        var x = new Date(+p + (this.o.weekStart - u - 7) % 7 * 864e5), y = new Date(Number(x) + (11 - x.getUTCDay()) % 7 * 864e5), z = new Date(Number(z = c(y.getUTCFullYear(), 0, 1)) + (11 - z.getUTCDay()) % 7 * 864e5), A = (y - z) / 864e5 / 7 + 1;
                        w.push('<td class="cw">' + A + "</td>");
                    }
                    v = this.getClassNames(p), v.push("day");
                    var B = p.getUTCDate();
                    this.o.beforeShowDay !== a.noop && (e = this.o.beforeShowDay(this._utc_to_local(p)), 
                    e === b ? e = {} : "boolean" == typeof e ? e = {
                        enabled: e
                    } : "string" == typeof e && (e = {
                        classes: e
                    }), e.enabled === !1 && v.push("disabled"), e.classes && (v = v.concat(e.classes.split(/\s+/))), 
                    e.tooltip && (d = e.tooltip), e.content && (B = e.content)), v = a.isFunction(a.uniqueSort) ? a.uniqueSort(v) : a.unique(v), 
                    w.push('<td class="' + v.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + ' data-date="' + p.getTime().toString() + '">' + B + "</td>"), 
                    d = null, u === this.o.weekEnd && w.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1);
                }
                this.picker.find(".datepicker-days tbody").html(w.join(""));
                var C = q[this.o.language].monthsTitle || q.en.monthsTitle || "Months", D = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? C : g).end().find("tbody span").removeClass("active");
                if (a.each(this.dates, function(a, b) {
                    b.getUTCFullYear() === g && D.eq(b.getUTCMonth()).addClass("active");
                }), (g < i || g > k) && D.addClass("disabled"), g === i && D.slice(0, j).addClass("disabled"), 
                g === k && D.slice(l + 1).addClass("disabled"), this.o.beforeShowMonth !== a.noop) {
                    var E = this;
                    a.each(D, function(c, d) {
                        var e = new Date(g, c, 1), f = E.o.beforeShowMonth(e);
                        f === b ? f = {} : "boolean" == typeof f ? f = {
                            enabled: f
                        } : "string" == typeof f && (f = {
                            classes: f
                        }), f.enabled !== !1 || a(d).hasClass("disabled") || a(d).addClass("disabled"), 
                        f.classes && a(d).addClass(f.classes), f.tooltip && a(d).prop("title", f.tooltip);
                    });
                }
                this._fill_yearsView(".datepicker-years", "year", 10, g, i, k, this.o.beforeShowYear), 
                this._fill_yearsView(".datepicker-decades", "decade", 100, g, i, k, this.o.beforeShowDecade), 
                this._fill_yearsView(".datepicker-centuries", "century", 1e3, g, i, k, this.o.beforeShowCentury);
            }
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var a, b, c = new Date(this.viewDate), d = c.getUTCFullYear(), e = c.getUTCMonth(), f = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0), g = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0), h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0, i = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, j = 1;
                switch (this.viewMode) {
                  case 4:
                    j *= 10;

                  case 3:
                    j *= 10;

                  case 2:
                    j *= 10;

                  case 1:
                    a = Math.floor(d / j) * j < f, b = Math.floor(d / j) * j + j > h;
                    break;

                  case 0:
                    a = d <= f && e < g, b = d >= h && e > i;
                }
                this.picker.find(".prev").toggleClass("disabled", a), this.picker.find(".next").toggleClass("disabled", b);
            }
        },
        click: function(b) {
            b.preventDefault(), b.stopPropagation();
            var e, f, g, h;
            e = a(b.target), e.hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), 
            e.hasClass("today") && !e.hasClass("day") && (this.setViewMode(0), this._setDate(d(), "linked" === this.o.todayBtn ? null : "view")), 
            e.hasClass("clear") && this.clearDates(), e.hasClass("disabled") || (e.hasClass("month") || e.hasClass("year") || e.hasClass("decade") || e.hasClass("century")) && (this.viewDate.setUTCDate(1), 
            f = 1, 1 === this.viewMode ? (h = e.parent().find("span").index(e), g = this.viewDate.getUTCFullYear(), 
            this.viewDate.setUTCMonth(h)) : (h = 0, g = Number(e.text()), this.viewDate.setUTCFullYear(g)), 
            this._trigger(r.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(c(g, h, f)) : (this.setViewMode(this.viewMode - 1), 
            this.fill())), this.picker.is(":visible") && this._focused_from && this._focused_from.focus(), 
            delete this._focused_from;
        },
        dayCellClick: function(b) {
            var c = a(b.currentTarget), d = c.data("date"), e = new Date(d);
            this.o.updateViewDate && (e.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), 
            e.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)), 
            this._setDate(e);
        },
        navArrowsClick: function(b) {
            var c = a(b.currentTarget), d = c.hasClass("prev") ? -1 : 1;
            0 !== this.viewMode && (d *= 12 * r.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, d), 
            this._trigger(r.viewModes[this.viewMode].e, this.viewDate), this.fill();
        },
        _toggle_multidate: function(a) {
            var b = this.dates.contains(a);
            if (a || this.dates.clear(), b !== -1 ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(b) : this.o.multidate === !1 ? (this.dates.clear(), 
            this.dates.push(a)) : this.dates.push(a), "number" == typeof this.o.multidate) for (;this.dates.length > this.o.multidate; ) this.dates.remove(0);
        },
        _setDate: function(a, b) {
            b && "date" !== b || this._toggle_multidate(a && new Date(a)), (!b && this.o.updateViewDate || "view" === b) && (this.viewDate = a && new Date(a)), 
            this.fill(), this.setValue(), b && "view" === b || this._trigger("changeDate"), 
            this.inputField.trigger("change"), !this.o.autoclose || b && "date" !== b || this.hide();
        },
        moveDay: function(a, b) {
            var c = new Date(a);
            return c.setUTCDate(a.getUTCDate() + b), c;
        },
        moveWeek: function(a, b) {
            return this.moveDay(a, 7 * b);
        },
        moveMonth: function(a, b) {
            if (!g(a)) return this.o.defaultViewDate;
            if (!b) return a;
            var c, d, e = new Date(a.valueOf()), f = e.getUTCDate(), h = e.getUTCMonth(), i = Math.abs(b);
            if (b = b > 0 ? 1 : -1, 1 === i) d = b === -1 ? function() {
                return e.getUTCMonth() === h;
            } : function() {
                return e.getUTCMonth() !== c;
            }, c = h + b, e.setUTCMonth(c), c = (c + 12) % 12; else {
                for (var j = 0; j < i; j++) e = this.moveMonth(e, b);
                c = e.getUTCMonth(), e.setUTCDate(f), d = function() {
                    return c !== e.getUTCMonth();
                };
            }
            for (;d(); ) e.setUTCDate(--f), e.setUTCMonth(c);
            return e;
        },
        moveYear: function(a, b) {
            return this.moveMonth(a, 12 * b);
        },
        moveAvailableDate: function(a, b, c) {
            do {
                if (a = this[c](a, b), !this.dateWithinRange(a)) return !1;
                c = "moveDay";
            } while (this.dateIsDisabled(a));
            return a;
        },
        weekOfDateIsDisabled: function(b) {
            return a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
        },
        dateIsDisabled: function(b) {
            return this.weekOfDateIsDisabled(b) || a.grep(this.o.datesDisabled, function(a) {
                return e(b, a);
            }).length > 0;
        },
        dateWithinRange: function(a) {
            return a >= this.o.startDate && a <= this.o.endDate;
        },
        keydown: function(a) {
            if (!this.picker.is(":visible")) return void (40 !== a.keyCode && 27 !== a.keyCode || (this.show(), 
            a.stopPropagation()));
            var b, c, d = !1, e = this.focusDate || this.viewDate;
            switch (a.keyCode) {
              case 27:
                this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, 
                this.fill()) : this.hide(), a.preventDefault(), a.stopPropagation();
                break;

              case 37:
              case 38:
              case 39:
              case 40:
                if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1, 0 === this.viewMode ? a.ctrlKey ? (c = this.moveAvailableDate(e, b, "moveYear"), 
                c && this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveAvailableDate(e, b, "moveMonth"), 
                c && this._trigger("changeMonth", this.viewDate)) : 37 === a.keyCode || 39 === a.keyCode ? c = this.moveAvailableDate(e, b, "moveDay") : this.weekOfDateIsDisabled(e) || (c = this.moveAvailableDate(e, b, "moveWeek")) : 1 === this.viewMode ? (38 !== a.keyCode && 40 !== a.keyCode || (b *= 4), 
                c = this.moveAvailableDate(e, b, "moveMonth")) : 2 === this.viewMode && (38 !== a.keyCode && 40 !== a.keyCode || (b *= 4), 
                c = this.moveAvailableDate(e, b, "moveYear")), c && (this.focusDate = this.viewDate = c, 
                this.setValue(), this.fill(), a.preventDefault());
                break;

              case 13:
                if (!this.o.forceParse) break;
                e = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(e), 
                d = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, 
                this.setValue(), this.fill(), this.picker.is(":visible") && (a.preventDefault(), 
                a.stopPropagation(), this.o.autoclose && this.hide());
                break;

              case 9:
                this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), 
                this.hide();
            }
            d && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), 
            this.inputField.trigger("change"));
        },
        setViewMode: function(a) {
            this.viewMode = a, this.picker.children("div").hide().filter(".datepicker-" + r.viewModes[this.viewMode].clsName).show(), 
            this.updateNavArrows(), this._trigger("changeViewMode", new Date(this.viewDate));
        }
    };
    var l = function(b, c) {
        a.data(b, "datepicker", this), this.element = a(b), this.inputs = a.map(c.inputs, function(a) {
            return a.jquery ? a[0] : a;
        }), delete c.inputs, this.keepEmptyValues = c.keepEmptyValues, delete c.keepEmptyValues, 
        n.call(a(this.inputs), c).on("changeDate", a.proxy(this.dateUpdated, this)), this.pickers = a.map(this.inputs, function(b) {
            return a.data(b, "datepicker");
        }), this.updateDates();
    };
    l.prototype = {
        updateDates: function() {
            this.dates = a.map(this.pickers, function(a) {
                return a.getUTCDate();
            }), this.updateRanges();
        },
        updateRanges: function() {
            var b = a.map(this.dates, function(a) {
                return a.valueOf();
            });
            a.each(this.pickers, function(a, c) {
                c.setRange(b);
            });
        },
        clearDates: function() {
            a.each(this.pickers, function(a, b) {
                b.clearDates();
            });
        },
        dateUpdated: function(c) {
            if (!this.updating) {
                this.updating = !0;
                var d = a.data(c.target, "datepicker");
                if (d !== b) {
                    var e = d.getUTCDate(), f = this.keepEmptyValues, g = a.inArray(c.target, this.inputs), h = g - 1, i = g + 1, j = this.inputs.length;
                    if (g !== -1) {
                        if (a.each(this.pickers, function(a, b) {
                            b.getUTCDate() || b !== d && f || b.setUTCDate(e);
                        }), e < this.dates[h]) for (;h >= 0 && e < this.dates[h]; ) this.pickers[h--].setUTCDate(e); else if (e > this.dates[i]) for (;i < j && e > this.dates[i]; ) this.pickers[i++].setUTCDate(e);
                        this.updateDates(), delete this.updating;
                    }
                }
            }
        },
        destroy: function() {
            a.map(this.pickers, function(a) {
                a.destroy();
            }), a(this.inputs).off("changeDate", this.dateUpdated), delete this.element.data().datepicker;
        },
        remove: f("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
    };
    var m = a.fn.datepicker, n = function(c) {
        var d = Array.apply(null, arguments);
        d.shift();
        var e;
        if (this.each(function() {
            var b = a(this), f = b.data("datepicker"), g = "object" == typeof c && c;
            if (!f) {
                var j = h(this, "date"), m = a.extend({}, o, j, g), n = i(m.language), p = a.extend({}, o, n, j, g);
                b.hasClass("input-daterange") || p.inputs ? (a.extend(p, {
                    inputs: p.inputs || b.find("input").toArray()
                }), f = new l(this, p)) : f = new k(this, p), b.data("datepicker", f);
            }
            "string" == typeof c && "function" == typeof f[c] && (e = f[c].apply(f, d));
        }), e === b || e instanceof k || e instanceof l) return this;
        if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + c + " function)");
        return e;
    };
    a.fn.datepicker = n;
    var o = a.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: a.noop,
        beforeShowMonth: a.noop,
        beforeShowYear: a.noop,
        beforeShowDecade: a.noop,
        beforeShowCentury: a.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keepEmptyValues: !1,
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -(1 / 0),
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        updateViewDate: !0,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: "",
        templates: {
            leftArrow: "&#x00AB;",
            rightArrow: "&#x00BB;"
        },
        showWeekDays: !0
    }, p = a.fn.datepicker.locale_opts = [ "format", "rtl", "weekStart" ];
    a.fn.datepicker.Constructor = k;
    var q = a.fn.datepicker.dates = {
        en: {
            days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            daysShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            daysMin: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
            months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthsShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    }, r = {
        viewModes: [ {
            names: [ "days", "month" ],
            clsName: "days",
            e: "changeMonth"
        }, {
            names: [ "months", "year" ],
            clsName: "months",
            e: "changeYear",
            navStep: 1
        }, {
            names: [ "years", "decade" ],
            clsName: "years",
            e: "changeDecade",
            navStep: 10
        }, {
            names: [ "decades", "century" ],
            clsName: "decades",
            e: "changeCentury",
            navStep: 100
        }, {
            names: [ "centuries", "millennium" ],
            clsName: "centuries",
            e: "changeMillennium",
            navStep: 1e3
        } ],
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function(a) {
            if ("function" == typeof a.toValue && "function" == typeof a.toDisplay) return a;
            var b = a.replace(this.validParts, "\x00").split("\x00"), c = a.match(this.validParts);
            if (!b || !b.length || !c || 0 === c.length) throw new Error("Invalid date format.");
            return {
                separators: b,
                parts: c
            };
        },
        parseDate: function(c, e, f, g) {
            function h(a, b) {
                return b === !0 && (b = 10), a < 100 && (a += 2e3, a > new Date().getFullYear() + b && (a -= 100)), 
                a;
            }
            function i() {
                var a = this.slice(0, j[n].length), b = j[n].slice(0, a.length);
                return a.toLowerCase() === b.toLowerCase();
            }
            if (!c) return b;
            if (c instanceof Date) return c;
            if ("string" == typeof e && (e = r.parseFormat(e)), e.toValue) return e.toValue(c, e, f);
            var j, l, m, n, o, p = {
                d: "moveDay",
                m: "moveMonth",
                w: "moveWeek",
                y: "moveYear"
            }, s = {
                yesterday: "-1d",
                today: "+0d",
                tomorrow: "+1d"
            };
            if (c in s && (c = s[c]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c)) {
                for (j = c.match(/([\-+]\d+)([dmwy])/gi), c = new Date(), n = 0; n < j.length; n++) l = j[n].match(/([\-+]\d+)([dmwy])/i), 
                m = Number(l[1]), o = p[l[2].toLowerCase()], c = k.prototype[o](c, m);
                return k.prototype._zero_utc_time(c);
            }
            j = c && c.match(this.nonpunctuation) || [];
            var t, u, v = {}, w = [ "yyyy", "yy", "M", "MM", "m", "mm", "d", "dd" ], x = {
                yyyy: function(a, b) {
                    return a.setUTCFullYear(g ? h(b, g) : b);
                },
                m: function(a, b) {
                    if (isNaN(a)) return a;
                    for (b -= 1; b < 0; ) b += 12;
                    for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b; ) a.setUTCDate(a.getUTCDate() - 1);
                    return a;
                },
                d: function(a, b) {
                    return a.setUTCDate(b);
                }
            };
            x.yy = x.yyyy, x.M = x.MM = x.mm = x.m, x.dd = x.d, c = d();
            var y = e.parts.slice();
            if (j.length !== y.length && (y = a(y).filter(function(b, c) {
                return a.inArray(c, w) !== -1;
            }).toArray()), j.length === y.length) {
                var z;
                for (n = 0, z = y.length; n < z; n++) {
                    if (t = parseInt(j[n], 10), l = y[n], isNaN(t)) switch (l) {
                      case "MM":
                        u = a(q[f].months).filter(i), t = a.inArray(u[0], q[f].months) + 1;
                        break;

                      case "M":
                        u = a(q[f].monthsShort).filter(i), t = a.inArray(u[0], q[f].monthsShort) + 1;
                    }
                    v[l] = t;
                }
                var A, B;
                for (n = 0; n < w.length; n++) B = w[n], B in v && !isNaN(v[B]) && (A = new Date(c), 
                x[B](A, v[B]), isNaN(A) || (c = A));
            }
            return c;
        },
        formatDate: function(b, c, d) {
            if (!b) return "";
            if ("string" == typeof c && (c = r.parseFormat(c)), c.toDisplay) return c.toDisplay(b, c, d);
            var e = {
                d: b.getUTCDate(),
                D: q[d].daysShort[b.getUTCDay()],
                DD: q[d].days[b.getUTCDay()],
                m: b.getUTCMonth() + 1,
                M: q[d].monthsShort[b.getUTCMonth()],
                MM: q[d].months[b.getUTCMonth()],
                yy: b.getUTCFullYear().toString().substring(2),
                yyyy: b.getUTCFullYear()
            };
            e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, b = [];
            for (var f = a.extend([], c.separators), g = 0, h = c.parts.length; g <= h; g++) f.length && b.push(f.shift()), 
            b.push(e[c.parts[g]]);
            return b.join("");
        },
        headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + o.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + o.templates.rightArrow + "</th></tr></thead>",
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    r.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + r.headTemplate + "<tbody></tbody>" + r.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + "</table></div></div>", 
    a.fn.datepicker.DPGlobal = r, a.fn.datepicker.noConflict = function() {
        return a.fn.datepicker = m, this;
    }, a.fn.datepicker.version = "1.8.0", a.fn.datepicker.deprecated = function(a) {
        var b = window.console;
        b && b.warn && b.warn("DEPRECATED: " + a);
    }, a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(b) {
        var c = a(this);
        c.data("datepicker") || (b.preventDefault(), n.call(c, "show"));
    }), a(function() {
        n.call(a('[data-provide="datepicker-inline"]'));
    });
});

!function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : t("object" == typeof exports ? require("jquery") : jQuery);
}(function(t) {
    function s(s) {
        var e = !1;
        return t('[data-notify="container"]').each(function(i, n) {
            var a = t(n), o = a.find('[data-notify="title"]').text().trim(), r = a.find('[data-notify="message"]').html().trim(), l = o === t("<div>" + s.settings.content.title + "</div>").html().trim(), d = r === t("<div>" + s.settings.content.message + "</div>").html().trim(), g = a.hasClass("alert-" + s.settings.type);
            return l && d && g && (e = !0), !e;
        }), e;
    }
    function e(e, n, a) {
        var o = {
            content: {
                message: "object" == typeof n ? n.message : n,
                title: n.title ? n.title : "",
                icon: n.icon ? n.icon : "",
                url: n.url ? n.url : "#",
                target: n.target ? n.target : "-"
            }
        };
        a = t.extend(!0, {}, o, a), this.settings = t.extend(!0, {}, i, a), this._defaults = i, 
        "-" === this.settings.content.target && (this.settings.content.target = this.settings.url_target), 
        this.animations = {
            start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
            end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
        }, "number" == typeof this.settings.offset && (this.settings.offset = {
            x: this.settings.offset,
            y: this.settings.offset
        }), (this.settings.allow_duplicates || !this.settings.allow_duplicates && !s(this)) && this.init();
    }
    var i = {
        element: "body",
        position: null,
        type: "info",
        allow_dismiss: !0,
        allow_duplicates: !0,
        newest_on_top: !1,
        showProgressbar: !1,
        placement: {
            from: "top",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5e3,
        timer: 1e3,
        url_target: "_blank",
        mouse_over: null,
        animate: {
            enter: "animated fadeInDown",
            exit: "animated fadeOutUp"
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: "class",
        template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    };
    String.format = function() {
        for (var t = arguments[0], s = 1; s < arguments.length; s++) t = t.replace(RegExp("\\{" + (s - 1) + "\\}", "gm"), arguments[s]);
        return t;
    }, t.extend(e.prototype, {
        init: function() {
            var t = this;
            this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), 
            this.styleDismiss(), this.placement(), this.bind(), this.notify = {
                $ele: this.$ele,
                update: function(s, e) {
                    var i = {};
                    "string" == typeof s ? i[s] = e : i = s;
                    for (var n in i) switch (n) {
                      case "type":
                        this.$ele.removeClass("alert-" + t.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + t.settings.type), 
                        t.settings.type = i[n], this.$ele.addClass("alert-" + i[n]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + i[n]);
                        break;

                      case "icon":
                        var a = this.$ele.find('[data-notify="icon"]');
                        "class" === t.settings.icon_type.toLowerCase() ? a.removeClass(t.settings.content.icon).addClass(i[n]) : (a.is("img") || a.find("img"), 
                        a.attr("src", i[n]));
                        break;

                      case "progress":
                        var o = t.settings.delay - t.settings.delay * (i[n] / 100);
                        this.$ele.data("notify-delay", o), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i[n]).css("width", i[n] + "%");
                        break;

                      case "url":
                        this.$ele.find('[data-notify="url"]').attr("href", i[n]);
                        break;

                      case "target":
                        this.$ele.find('[data-notify="url"]').attr("target", i[n]);
                        break;

                      default:
                        this.$ele.find('[data-notify="' + n + '"]').html(i[n]);
                    }
                    var r = this.$ele.outerHeight() + parseInt(t.settings.spacing) + parseInt(t.settings.offset.y);
                    t.reposition(r);
                },
                close: function() {
                    t.close();
                }
            };
        },
        buildNotify: function() {
            var s = this.settings.content;
            this.$ele = t(String.format(this.settings.template, this.settings.type, s.title, s.message, s.url, s.target)), 
            this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), 
            this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), 
            (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove();
        },
        setIcon: function() {
            "class" === this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />');
        },
        styleDismiss: function() {
            this.$ele.find('[data-notify="dismiss"]').css({
                position: "absolute",
                right: "10px",
                top: "5px",
                zIndex: this.settings.z_index + 2
            });
        },
        styleURL: function() {
            this.$ele.find('[data-notify="url"]').css({
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
                height: "100%",
                left: 0,
                position: "absolute",
                top: 0,
                width: "100%",
                zIndex: this.settings.z_index + 1
            });
        },
        placement: function() {
            var s = this, e = this.settings.offset.y, i = {
                display: "inline-block",
                margin: "0px auto",
                position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
                transition: "all .5s ease-in-out",
                zIndex: this.settings.z_index
            }, n = !1, a = this.settings;
            switch (t('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() {
                e = Math.max(e, parseInt(t(this).css(a.placement.from)) + parseInt(t(this).outerHeight()) + parseInt(a.spacing));
            }), this.settings.newest_on_top === !0 && (e = this.settings.offset.y), i[this.settings.placement.from] = e + "px", 
            this.settings.placement.align) {
              case "left":
              case "right":
                i[this.settings.placement.align] = this.settings.offset.x + "px";
                break;

              case "center":
                i.left = 0, i.right = 0;
            }
            this.$ele.css(i).addClass(this.settings.animate.enter), t.each(Array("webkit-", "moz-", "o-", "ms-", ""), function(t, e) {
                s.$ele[0].style[e + "AnimationIterationCount"] = 1;
            }), t(this.settings.element).append(this.$ele), this.settings.newest_on_top === !0 && (e = parseInt(e) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), 
            this.reposition(e)), t.isFunction(s.settings.onShow) && s.settings.onShow.call(this.$ele),
            this.$ele.one(this.animations.start, function() {
                n = !0;
            }).one(this.animations.end, function() {
                s.$ele.removeClass(s.settings.animate.enter), t.isFunction(s.settings.onShown) && s.settings.onShown.call(this);
            }), setTimeout(function() {
                n || t.isFunction(s.settings.onShown) && s.settings.onShown.call(this);
            }, 600);
        },
        bind: function() {
            var s = this;
            if (this.$ele.find('[data-notify="dismiss"]').on("click", function() {
                s.close();
            }), this.$ele.mouseover(function() {
                t(this).data("data-hover", "true");
            }).mouseout(function() {
                t(this).data("data-hover", "false");
            }), this.$ele.data("data-hover", "false"), this.settings.delay > 0) {
                s.$ele.data("notify-delay", s.settings.delay);
                var e = setInterval(function() {
                    var t = parseInt(s.$ele.data("notify-delay")) - s.settings.timer;
                    if ("false" === s.$ele.data("data-hover") && "pause" === s.settings.mouse_over || "pause" != s.settings.mouse_over) {
                        var i = (s.settings.delay - t) / s.settings.delay * 100;
                        s.$ele.data("notify-delay", t), s.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i).css("width", i + "%");
                    }
                    t <= -s.settings.timer && (clearInterval(e), s.close());
                }, s.settings.timer);
            }
        },
        close: function() {
            var s = this, e = parseInt(this.$ele.css(this.settings.placement.from)), i = !1;
            this.$ele.attr("data-closing", "true").addClass(this.settings.animate.exit), s.reposition(e), 
            t.isFunction(s.settings.onClose) && s.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function() {
                i = !0;
            }).one(this.animations.end, function() {
                t(this).remove(), t.isFunction(s.settings.onClosed) && s.settings.onClosed.call(this);
            }), setTimeout(function() {
                i || (s.$ele.remove(), s.settings.onClosed && s.settings.onClosed(s.$ele));
            }, 600);
        },
        reposition: function(s) {
            var e = this, i = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])', n = this.$ele.nextAll(i);
            this.settings.newest_on_top === !0 && (n = this.$ele.prevAll(i)), n.each(function() {
                t(this).css(e.settings.placement.from, s), s = parseInt(s) + parseInt(e.settings.spacing) + t(this).outerHeight();
            });
        }
    }), t.notify = function(t, s) {
        var i = new e(this, t, s);
        return i.notify;
    }, t.notifyDefaults = function(s) {
        return i = t.extend(!0, {}, i, s);
    }, t.notifyClose = function(s) {
        "warning" === s && (s = "danger"), "undefined" == typeof s || "all" === s ? t("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : "success" === s || "info" === s || "warning" === s || "danger" === s ? t(".alert-" + s + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : s ? t(s + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : t('[data-notify-position="' + s + '"]').find('[data-notify="dismiss"]').trigger("click");
    }, t.notifyCloseExcept = function(s) {
        "warning" === s && (s = "danger"), "success" === s || "info" === s || "warning" === s || "danger" === s ? t("[data-notify]").not(".alert-" + s).find('[data-notify="dismiss"]').trigger("click") : t("[data-notify]").not(s).find('[data-notify="dismiss"]').trigger("click");
    };
});

!function(t) {
    "use strict";
    var a = t("body"), s = window.innerWidth;
    window.colors = [ "#687ae8", "#12bfbb", "#ffb058", "#2991cf", "#87b8d4", "#109693", "#f29494", "#527cf9", "#7140d1", "#e79e4e", "#52b4ee", "#6ed7e0", "#8fa6b4", "#ffcfcf", "#28304e", "#95aac9", "#f2545b", "#f7bc06", "#00cc99", "#19b5fe", "#E3EBF6" ], 
    t('[data-toggle="tooltip"]').tooltip(), t(document).on("mouseenter", "body:not(.sidebar-pinned) .admin-sidebar", function(e) {
        1200 <= s && t(this).addClass("sidebar-show");
    }), t(document).on("mouseleave", "body:not(.sidebar-pinned) .admin-sidebar", function(e) {
        1200 <= s && t(this).removeClass("sidebar-show");
    }), t(document).on("click", ".admin-pin-sidebar", function(e) {
        e.preventDefault(), a.toggleClass("sidebar-pinned"), t(this).toggleClass("pinned"), 
        window.dispatchEvent(new Event("resize"));
    }), a.append('<div class="sidebar-backdrop "></div>'), t(document).on("click", " .admin-close-sidebar ,.sidebar-backdrop", function(e) {
        e.preventDefault(), a.removeClass("sidebar-open");
    }), t(document).on("click", ".open-dropdown", function(e) {
        e.preventDefault(), t(this).next().is(":visible") ? (t(this).next().slideUp(), t(this).parent().removeClass("opened")) : (t(this).next().slideDown(), 
        t(this).parent().addClass("opened"));
    }), t(document).on("click", ".js-card-fullscreen", function(e) {
        e.preventDefault(), t(this).closest(".card").toggleClass("is-fullscreen");
    }), t(document).on("click", ".js-card-close", function(e) {
        e.preventDefault(), t(this).closest(".card").remove();
    }), t(document).on("click", ".js-card-refresh", function(e) {
        e.preventDefault(), t(this).closest(".card").append("<div class='loading-container'></div> ");
    }), t(".modal").on("show.bs.modal", function(e) {
        t(e.currentTarget).attr("data-popup") && a.addClass("body-scrollable");
    }), t(".modal").on("hidden.bs.modal", function(e) {
        a.removeClass("body-scrollable");
    }), t(".js-scrollbar, .card-scroll").scrollbar(), t(".js-datepicker").datepicker(), 
    t(".input-daterange").daterangepicker(), t(".js-select2").select2(), t(document).on("input", ".floating-label input", function(e) {
        var a = t(this).parents(".floating-label");
        t(this).val() ? a.addClass("show-label") : a.removeClass("show-label");
    }), t(document).on("blur", ".floating-label input", function(e) {
        var a = t(this).parents(".floating-label");
        t(this).val() ? a.addClass("show-label") : a.removeClass("show-label");
    }), t(".floating-label input").each(function() {
        var e = t(this).parents(".floating-label");
        t(this).val() ? e.addClass("show-label") : e.removeClass("show-label");
    }), t(document).on("click", "[data-toggleclass]", function(e) {
        e.preventDefault(), t(t(this).attr("data-target")).toggleClass(t(this).attr("data-toggleClass"));
    }), new List("site-search", {
        valueNames: [ "name" ]
    }), new List("contact-search", {
        valueNames: [ "searchBy-name" ]
    });
    var e = new Date().getHours(), n = t(".js-greeting");
    e < 12 ? n.text("Good Morning") : e < 18 ? n.text("Good Afternoon") : n.text("Good Evening"), 
    t(document).on("click", ".js-card-refresh", function(e) {
        var a;
        a = t(".loading-container"), setTimeout(function() {
            a.parents(".card").removeClass("is-loading"), a.fadeOut(500, function() {
                a.remove();
            });
        }, 1e3);
    }), s < 1800 && a.removeClass("sidebar-pinned");
}(window.jQuery), function(s) {
    s.fn.alertNotify = function(e) {
        var a = s.extend({
            message: "Alert Message",
            type: "primary",
            dismiss: !0
        }, e), t = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> ';
        0 === this.find(".alert-container").length && this.append("<div class='alert-container'></div>"), 
        a.dismiss || (t = ""), this.find(".alert-container").append('<div class="alert alert-' + a.type + ' alert-dismissible fade show" role="alert">' + a.message + t + "</div>");
    };
}(jQuery);