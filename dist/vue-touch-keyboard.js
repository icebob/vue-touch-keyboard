/**
 * vue-touch-keyboard v0.2.0
 * https://github.com/icebob/vue-touch-keyboard
 * Released under the MIT License.
 */

! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.VueTouchKeyboard = e() : t.VueTouchKeyboard = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function(t, e, n) {
        "use strict";
        var r = n(1);
        t.exports = {
            component: r,
            layouts: n(73),
            install: function(t) {
                t.component("VueTouchKeyboard", r)
            }
        }
    }, function(t, e, n) {
        n(2);
        var r = n(3)(n(4), n(84), null, null);
        t.exports = r.exports
    }, function(t, e) {}, function(t, e) {
        t.exports = function(t, e, n, r) {
            var o, i = t = t || {},
                c = typeof t["default"];
            "object" !== c && "function" !== c || (o = t, i = t["default"]);
            var u = "function" == typeof i ? i.options : i;
            if (e && (u.render = e.render, u.staticRenderFns = e.staticRenderFns), n && (u._scopeId = n), r) {
                var s = Object.create(u.computed || null);
                Object.keys(r).forEach(function(t) {
                    var e = r[t];
                    s[t] = function() {
                        return e
                    }
                }), u.computed = s
            }
            return {
                esModule: o,
                exports: i,
                options: u
            }
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(5),
            i = r(o),
            c = n(73),
            u = r(c),
            s = n(74),
            f = r(s),
            a = n(83),
            l = r(a);
        e["default"] = {
            props: {
                input: HTMLInputElement,
                layout: [String, Object],
                accept: Function,
                cancel: Function,
                change: Function,
                next: Function,
                options: {
                    type: Object,
                    "default": function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    currentKeySet: "default",
                    inputScrollLeft: 0
                }
            },
            computed: {
                keySet: function p() {
                    var t = this.getLayout();
                    if (t) {
                        var p = t[this.currentKeySet];
                        if (p) {
                            var e = [],
                                n = t._meta || {};
                            return p.forEach(function(t) {
                                var r = [];
                                t.split(" ").forEach(function(t) {
                                    if ((0, l["default"])(t)) r.push(t);
                                    else if ((0, f["default"])(t))
                                        if (t.length > 2 && "{" == t[0] && "}" == t[t.length - 1]) {
                                            var e = t.substring(1, t.length - 1);
                                            n[e] ? r.push(n[e]) : console.warn("Missing named key from meta: " + e)
                                        } else "" == t ? r.push({
                                            placeholder: !0
                                        }) : r.push({
                                            key: t,
                                            text: t
                                        })
                                }), e.push(r)
                            }), e
                        }
                    }
                }
            },
            watch: {
                layout: function() {
                    console.log("Layout changed"), this.currentKeySet = "default"
                }
            },
            methods: {
                getLayout: function() {
                    return (0, f["default"])(this.layout) ? u["default"][this.layout] : this.layout
                },
                changeKeySet: function(t) {
                    var e = this.getLayout();
                    null != e[t] && (this.currentKeySet = t)
                },
                toggleKeySet: function(t) {
                    this.currentKeySet = this.currentKeySet == t ? "default" : t
                },
                getCaptionOfKey: function(t) {
                    return t.text || t.key || ""
                },
                getClassesOfKey: function(t) {
                    if (t.placeholder) return "placeholder";
                    var e = "key " + (t.func || "") + " " + (t.classes || "");
                    return t.keySet && this.currentKeySet == t.keySet && (e += " activated"), e
                },
                getKeyStyle: function(t) {
                    if (t.width) return {
                        flex: t.width
                    }
                },
                supportsSelection: function() {
                    return /text|password|search|tel|url/.test(this.input.type)
                },
                getCaret: function() {
                    if (this.supportsSelection()) {
                        var t = {
                            start: this.input.selectionStart || 0,
                            end: this.input.selectionEnd || 0
                        };
                        return t.end < t.start && (t.end = t.start), t
                    }
                    var e = this.input.value;
                    return {
                        start: e.length,
                        end: e.length
                    }
                },
                backspace: function(t, e) {
                    return e = e.substring(0, t.start - 1) + e.substring(t.start), t.start -= 1, t.end = t.start, e
                },
                insertChar: function(t, e, n) {
                    return e = e.substr(0, t.start) + n.toString() + e.substr(t.start), t.start += n.length, t.end = t.start, e
                },
                mousedown: function() {
                    this.input && (this.inputScrollLeft = this.input.scrollLeft)
                },
                clickKey: function(t) {
                    if (this.input) {
                        var e = this.getCaret(),
                            n = this.input.value,
                            r = null;
                        if ("object" == ("undefined" == typeof t ? "undefined" : (0, i["default"])(t)))
                            if (t.keySet) this.toggleKeySet(t.keySet);
                            else if (t.func) switch (t.func) {
                            case "backspace":
                                n = this.backspace(e, n);
                                break;
                            case "accept":
                                return void(this.accept && this.accept(n));
                            case "cancel":
                                return void(this.cancel && this.cancel());
                            case "next":
                                return void(this.next && this.next())
                        } else r = t.key;
                        else r = t;
                        if (r) {
                            if (this.input.maxLength <= 0 || n.length < this.input.maxLength)
                                if (this.options.useKbEvents) {
                                    var o = document.createEvent("Event");
                                    o.initEvent("keypress", !0, !0), o.which = o.keyCode = r.charCodeAt(), this.input.dispatchEvent(o) && (n = this.insertChar(e, n, r))
                                } else n = this.insertChar(e, n, r);
                                "shifted" == this.currentKeySet && this.changeKeySet("default")
                        }
                        this.input.value = n, this.setFocusToInput(e), this.change && this.change(n, r), this.input.maxLength > 0 && n.length >= this.input.maxLength && this.next && this.next()
                    }
                },
                setFocusToInput: function(t) {
                    this.input.focus(), t && this.supportsSelection() && (this.input.selectionStart = t.start, this.input.selectionEnd = t.end)
                }
            },
            mounted: function() {
                this.input && this.setFocusToInput()
            }
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        e.__esModule = !0;
        var o = n(6),
            i = r(o),
            c = n(57),
            u = r(c),
            s = "function" == typeof u["default"] && "symbol" == typeof i["default"] ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof u["default"] && t.constructor === u["default"] && t !== u["default"].prototype ? "symbol" : typeof t
            };
        e["default"] = "function" == typeof u["default"] && "symbol" === s(i["default"]) ? function(t) {
            return "undefined" == typeof t ? "undefined" : s(t)
        } : function(t) {
            return t && "function" == typeof u["default"] && t.constructor === u["default"] && t !== u["default"].prototype ? "symbol" : "undefined" == typeof t ? "undefined" : s(t)
        }
    }, function(t, e, n) {
        t.exports = {
            "default": n(7),
            __esModule: !0
        }
    }, function(t, e, n) {
        n(8), n(52), t.exports = n(56).f("iterator")
    }, function(t, e, n) {
        "use strict";
        var r = n(9)(!0);
        n(12)(String, "String", function(t) {
            this._t = String(t), this._i = 0
        }, function() {
            var t, e = this._t,
                n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    }, function(t, e, n) {
        var r = n(10),
            o = n(11);
        t.exports = function(t) {
            return function(e, n) {
                var i, c, u = String(o(e)),
                    s = r(n),
                    f = u.length;
                return s < 0 || s >= f ? t ? "" : void 0 : (i = u.charCodeAt(s), i < 55296 || i > 56319 || s + 1 === f || (c = u.charCodeAt(s + 1)) < 56320 || c > 57343 ? t ? u.charAt(s) : i : t ? u.slice(s, s + 2) : (i - 55296 << 10) + (c - 56320) + 65536)
            }
        }
    }, function(t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(13),
            o = n(14),
            i = n(29),
            c = n(19),
            u = n(30),
            s = n(31),
            f = n(32),
            a = n(48),
            l = n(50),
            p = n(49)("iterator"),
            h = !([].keys && "next" in [].keys()),
            y = "@@iterator",
            d = "keys",
            v = "values",
            b = function() {
                return this
            };
        t.exports = function(t, e, n, x, g, m, S) {
            f(n, e, x);
            var O, k, w, j = function(t) {
                    if (!h && t in C) return C[t];
                    switch (t) {
                        case d:
                            return function() {
                                return new n(this, t)
                            };
                        case v:
                            return function() {
                                return new n(this, t)
                            }
                    }
                    return function() {
                        return new n(this, t)
                    }
                },
                _ = e + " Iterator",
                E = g == v,
                P = !1,
                C = t.prototype,
                K = C[p] || C[y] || g && C[g],
                F = K || j(g),
                T = g ? E ? j("entries") : F : void 0,
                M = "Array" == e ? C.entries || K : K;
            if (M && (w = l(M.call(new t)), w !== Object.prototype && (a(w, _, !0), r || u(w, p) || c(w, p, b))), E && K && K.name !== v && (P = !0, F = function() {
                    return K.call(this)
                }), r && !S || !h && !P && C[p] || c(C, p, F), s[e] = F, s[_] = b, g)
                if (O = {
                        values: E ? F : j(v),
                        keys: m ? F : j(d),
                        entries: T
                    }, S)
                    for (k in O) k in C || i(C, k, O[k]);
                else o(o.P + o.F * (h || P), e, O);
            return O
        }
    }, function(t, e) {
        t.exports = !0
    }, function(t, e, n) {
        var r = n(15),
            o = n(16),
            i = n(17),
            c = n(19),
            u = "prototype",
            s = function(t, e, n) {
                var f, a, l, p = t & s.F,
                    h = t & s.G,
                    y = t & s.S,
                    d = t & s.P,
                    v = t & s.B,
                    b = t & s.W,
                    x = h ? o : o[e] || (o[e] = {}),
                    g = x[u],
                    m = h ? r : y ? r[e] : (r[e] || {})[u];
                h && (n = e);
                for (f in n) a = !p && m && void 0 !== m[f], a && f in x || (l = a ? m[f] : n[f], x[f] = h && "function" != typeof m[f] ? n[f] : v && a ? i(l, r) : b && m[f] == l ? function(t) {
                    var e = function(e, n, r) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e);
                                case 2:
                                    return new t(e, n)
                            }
                            return new t(e, n, r)
                        }
                        return t.apply(this, arguments)
                    };
                    return e[u] = t[u], e
                }(l) : d && "function" == typeof l ? i(Function.call, l) : l, d && ((x.virtual || (x.virtual = {}))[f] = l, t & s.R && g && !g[f] && c(g, f, l)))
            };
        s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
    }, function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(t, e) {
        var n = t.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = n)
    }, function(t, e, n) {
        var r = n(18);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, e, n) {
        var r = n(20),
            o = n(28);
        t.exports = n(24) ? function(t, e, n) {
            return r.f(t, e, o(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    }, function(t, e, n) {
        var r = n(21),
            o = n(23),
            i = n(27),
            c = Object.defineProperty;
        e.f = n(24) ? Object.defineProperty : function(t, e, n) {
            if (r(t), e = i(e, !0), r(n), o) try {
                return c(t, e, n)
            } catch (u) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function(t, e, n) {
        var r = n(22);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function(t, e, n) {
        t.exports = !n(24) && !n(25)(function() {
            return 7 != Object.defineProperty(n(26)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        t.exports = !n(25)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (e) {
                return !0
            }
        }
    }, function(t, e, n) {
        var r = n(22),
            o = n(15).document,
            i = r(o) && r(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {}
        }
    }, function(t, e, n) {
        var r = n(22);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function(t, e, n) {
        t.exports = n(19)
    }, function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }, function(t, e) {
        t.exports = {}
    }, function(t, e, n) {
        "use strict";
        var r = n(33),
            o = n(28),
            i = n(48),
            c = {};
        n(19)(c, n(49)("iterator"), function() {
            return this
        }), t.exports = function(t, e, n) {
            t.prototype = r(c, {
                next: o(1, n)
            }), i(t, e + " Iterator")
        }
    }, function(t, e, n) {
        var r = n(21),
            o = n(34),
            i = n(46),
            c = n(43)("IE_PROTO"),
            u = function() {},
            s = "prototype",
            f = function() {
                var t, e = n(26)("iframe"),
                    r = i.length,
                    o = "<",
                    c = ">";
                for (e.style.display = "none", n(47).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(o + "script" + c + "document.F=Object" + o + "/script" + c), t.close(), f = t.F; r--;) delete f[s][i[r]];
                return f()
            };
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (u[s] = r(t), n = new u, u[s] = null, n[c] = t) : n = f(), void 0 === e ? n : o(n, e)
        }
    }, function(t, e, n) {
        var r = n(20),
            o = n(21),
            i = n(35);
        t.exports = n(24) ? Object.defineProperties : function(t, e) {
            o(t);
            for (var n, c = i(e), u = c.length, s = 0; u > s;) r.f(t, n = c[s++], e[n]);
            return t
        }
    }, function(t, e, n) {
        var r = n(36),
            o = n(46);
        t.exports = Object.keys || function(t) {
            return r(t, o)
        }
    }, function(t, e, n) {
        var r = n(30),
            o = n(37),
            i = n(40)(!1),
            c = n(43)("IE_PROTO");
        t.exports = function(t, e) {
            var n, u = o(t),
                s = 0,
                f = [];
            for (n in u) n != c && r(u, n) && f.push(n);
            for (; e.length > s;) r(u, n = e[s++]) && (~i(f, n) || f.push(n));
            return f
        }
    }, function(t, e, n) {
        var r = n(38),
            o = n(11);
        t.exports = function(t) {
            return r(o(t))
        }
    }, function(t, e, n) {
        var r = n(39);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }, function(t, e, n) {
        var r = n(37),
            o = n(41),
            i = n(42);
        t.exports = function(t) {
            return function(e, n, c) {
                var u, s = r(e),
                    f = o(s.length),
                    a = i(c, f);
                if (t && n != n) {
                    for (; f > a;)
                        if (u = s[a++], u != u) return !0
                } else
                    for (; f > a; a++)
                        if ((t || a in s) && s[a] === n) return t || a || 0; return !t && -1
            }
        }
    }, function(t, e, n) {
        var r = n(10),
            o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }, function(t, e, n) {
        var r = n(10),
            o = Math.max,
            i = Math.min;
        t.exports = function(t, e) {
            return t = r(t), t < 0 ? o(t + e, 0) : i(t, e)
        }
    }, function(t, e, n) {
        var r = n(44)("keys"),
            o = n(45);
        t.exports = function(t) {
            return r[t] || (r[t] = o(t))
        }
    }, function(t, e, n) {
        var r = n(15),
            o = "__core-js_shared__",
            i = r[o] || (r[o] = {});
        t.exports = function(t) {
            return i[t] || (i[t] = {})
        }
    }, function(t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(t, e, n) {
        t.exports = n(15).document && document.documentElement
    }, function(t, e, n) {
        var r = n(20).f,
            o = n(30),
            i = n(49)("toStringTag");
        t.exports = function(t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: e
            })
        }
    }, function(t, e, n) {
        var r = n(44)("wks"),
            o = n(45),
            i = n(15).Symbol,
            c = "function" == typeof i,
            u = t.exports = function(t) {
                return r[t] || (r[t] = c && i[t] || (c ? i : o)("Symbol." + t))
            };
        u.store = r
    }, function(t, e, n) {
        var r = n(30),
            o = n(51),
            i = n(43)("IE_PROTO"),
            c = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null
        }
    }, function(t, e, n) {
        var r = n(11);
        t.exports = function(t) {
            return Object(r(t))
        }
    }, function(t, e, n) {
        n(53);
        for (var r = n(15), o = n(19), i = n(31), c = n(49)("toStringTag"), u = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], s = 0; s < 5; s++) {
            var f = u[s],
                a = r[f],
                l = a && a.prototype;
            l && !l[c] && o(l, c, f), i[f] = i.Array
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(54),
            o = n(55),
            i = n(31),
            c = n(37);
        t.exports = n(12)(Array, "Array", function(t, e) {
            this._t = c(t), this._i = 0, this._k = e
        }, function() {
            var t = this._t,
                e = this._k,
                n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    }, function(t, e) {
        t.exports = function() {}
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    }, function(t, e, n) {
        e.f = n(49)
    }, function(t, e, n) {
        t.exports = {
            "default": n(58),
            __esModule: !0
        }
    }, function(t, e, n) {
        n(59), n(70), n(71), n(72), t.exports = n(16).Symbol
    }, function(t, e, n) {
        "use strict";
        var r = n(15),
            o = n(30),
            i = n(24),
            c = n(14),
            u = n(29),
            s = n(60).KEY,
            f = n(25),
            a = n(44),
            l = n(48),
            p = n(45),
            h = n(49),
            y = n(56),
            d = n(61),
            v = n(62),
            b = n(63),
            x = n(66),
            g = n(21),
            m = n(37),
            S = n(27),
            O = n(28),
            k = n(33),
            w = n(67),
            j = n(69),
            _ = n(20),
            E = n(35),
            P = j.f,
            C = _.f,
            K = w.f,
            F = r.Symbol,
            T = r.JSON,
            M = T && T.stringify,
            A = "prototype",
            L = h("_hidden"),
            I = h("toPrimitive"),
            N = {}.propertyIsEnumerable,
            R = a("symbol-registry"),
            W = a("symbols"),
            z = a("op-symbols"),
            D = Object[A],
            J = "function" == typeof F,
            B = r.QObject,
            G = !B || !B[A] || !B[A].findChild,
            V = i && f(function() {
                return 7 != k(C({}, "a", {
                    get: function() {
                        return C(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, e, n) {
                var r = P(D, e);
                r && delete D[e], C(t, e, n), r && t !== D && C(D, e, r)
            } : C,
            U = function(t) {
                var e = W[t] = k(F[A]);
                return e._k = t, e
            },
            Y = J && "symbol" == typeof F.iterator ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                return t instanceof F
            },
            H = function(t, e, n) {
                return t === D && H(z, e, n), g(t), e = S(e, !0), g(n), o(W, e) ? (n.enumerable ? (o(t, L) && t[L][e] && (t[L][e] = !1), n = k(n, {
                    enumerable: O(0, !1)
                })) : (o(t, L) || C(t, L, O(1, {})), t[L][e] = !0), V(t, e, n)) : C(t, e, n)
            },
            Q = function(t, e) {
                g(t);
                for (var n, r = b(e = m(e)), o = 0, i = r.length; i > o;) H(t, n = r[o++], e[n]);
                return t
            },
            X = function(t, e) {
                return void 0 === e ? k(t) : Q(k(t), e)
            },
            Z = function(t) {
                var e = N.call(this, t = S(t, !0));
                return !(this === D && o(W, t) && !o(z, t)) && (!(e || !o(this, t) || !o(W, t) || o(this, L) && this[L][t]) || e)
            },
            q = function(t, e) {
                if (t = m(t), e = S(e, !0), t !== D || !o(W, e) || o(z, e)) {
                    var n = P(t, e);
                    return !n || !o(W, e) || o(t, L) && t[L][e] || (n.enumerable = !0), n
                }
            },
            $ = function(t) {
                for (var e, n = K(m(t)), r = [], i = 0; n.length > i;) o(W, e = n[i++]) || e == L || e == s || r.push(e);
                return r
            },
            tt = function(t) {
                for (var e, n = t === D, r = K(n ? z : m(t)), i = [], c = 0; r.length > c;) !o(W, e = r[c++]) || n && !o(D, e) || i.push(W[e]);
                return i
            };
        J || (F = function() {
            if (this instanceof F) throw TypeError("Symbol is not a constructor!");
            var t = p(arguments.length > 0 ? arguments[0] : void 0),
                e = function(n) {
                    this === D && e.call(z, n), o(this, L) && o(this[L], t) && (this[L][t] = !1), V(this, t, O(1, n))
                };
            return i && G && V(D, t, {
                configurable: !0,
                set: e
            }), U(t)
        }, u(F[A], "toString", function() {
            return this._k
        }), j.f = q, _.f = H, n(68).f = w.f = $, n(65).f = Z, n(64).f = tt, i && !n(13) && u(D, "propertyIsEnumerable", Z, !0), y.f = function(t) {
            return U(h(t))
        }), c(c.G + c.W + c.F * !J, {
            Symbol: F
        });
        for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) h(et[nt++]);
        for (var et = E(h.store), nt = 0; et.length > nt;) d(et[nt++]);
        c(c.S + c.F * !J, "Symbol", {
            "for": function(t) {
                return o(R, t += "") ? R[t] : R[t] = F(t)
            },
            keyFor: function(t) {
                if (Y(t)) return v(R, t);
                throw TypeError(t + " is not a symbol!")
            },
            useSetter: function() {
                G = !0
            },
            useSimple: function() {
                G = !1
            }
        }), c(c.S + c.F * !J, "Object", {
            create: X,
            defineProperty: H,
            defineProperties: Q,
            getOwnPropertyDescriptor: q,
            getOwnPropertyNames: $,
            getOwnPropertySymbols: tt
        }), T && c(c.S + c.F * (!J || f(function() {
            var t = F();
            return "[null]" != M([t]) || "{}" != M({
                a: t
            }) || "{}" != M(Object(t))
        })), "JSON", {
            stringify: function(t) {
                if (void 0 !== t && !Y(t)) {
                    for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
                    return e = r[1], "function" == typeof e && (n = e), !n && x(e) || (e = function(t, e) {
                        if (n && (e = n.call(this, t, e)), !Y(e)) return e
                    }), r[1] = e, M.apply(T, r)
                }
            }
        }), F[A][I] || n(19)(F[A], I, F[A].valueOf), l(F, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
    }, function(t, e, n) {
        var r = n(45)("meta"),
            o = n(22),
            i = n(30),
            c = n(20).f,
            u = 0,
            s = Object.isExtensible || function() {
                return !0
            },
            f = !n(25)(function() {
                return s(Object.preventExtensions({}))
            }),
            a = function(t) {
                c(t, r, {
                    value: {
                        i: "O" + ++u,
                        w: {}
                    }
                })
            },
            l = function(t, e) {
                if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, r)) {
                    if (!s(t)) return "F";
                    if (!e) return "E";
                    a(t)
                }
                return t[r].i
            },
            p = function(t, e) {
                if (!i(t, r)) {
                    if (!s(t)) return !0;
                    if (!e) return !1;
                    a(t)
                }
                return t[r].w
            },
            h = function(t) {
                return f && y.NEED && s(t) && !i(t, r) && a(t), t
            },
            y = t.exports = {
                KEY: r,
                NEED: !1,
                fastKey: l,
                getWeak: p,
                onFreeze: h
            }
    }, function(t, e, n) {
        var r = n(15),
            o = n(16),
            i = n(13),
            c = n(56),
            u = n(20).f;
        t.exports = function(t) {
            var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || u(e, t, {
                value: c.f(t)
            })
        }
    }, function(t, e, n) {
        var r = n(35),
            o = n(37);
        t.exports = function(t, e) {
            for (var n, i = o(t), c = r(i), u = c.length, s = 0; u > s;)
                if (i[n = c[s++]] === e) return n
        }
    }, function(t, e, n) {
        var r = n(35),
            o = n(64),
            i = n(65);
        t.exports = function(t) {
            var e = r(t),
                n = o.f;
            if (n)
                for (var c, u = n(t), s = i.f, f = 0; u.length > f;) s.call(t, c = u[f++]) && e.push(c);
            return e
        }
    }, function(t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function(t, e) {
        e.f = {}.propertyIsEnumerable
    }, function(t, e, n) {
        var r = n(39);
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t)
        }
    }, function(t, e, n) {
        var r = n(37),
            o = n(68).f,
            i = {}.toString,
            c = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            u = function(t) {
                try {
                    return o(t)
                } catch (e) {
                    return c.slice()
                }
            };
        t.exports.f = function(t) {
            return c && "[object Window]" == i.call(t) ? u(t) : o(r(t))
        }
    }, function(t, e, n) {
        var r = n(36),
            o = n(46).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, o)
        }
    }, function(t, e, n) {
        var r = n(65),
            o = n(28),
            i = n(37),
            c = n(27),
            u = n(30),
            s = n(23),
            f = Object.getOwnPropertyDescriptor;
        e.f = n(24) ? f : function(t, e) {
            if (t = i(t), e = c(e, !0), s) try {
                return f(t, e)
            } catch (n) {}
            if (u(t, e)) return o(!r.f.call(t, e), t[e])
        }
    }, function(t, e) {}, function(t, e, n) {
        n(61)("asyncIterator")
    }, function(t, e, n) {
        n(61)("observable")
    }, function(t, e) {
        "use strict";
        t.exports = {
            normal: {
                _meta: {
                    tab: {
                        key: "\t",
                        text: "Tab",
                        width: 60,
                        classes: "control"
                    },
                    shiftl: {
                        keySet: "shifted",
                        text: "Shift",
                        width: 100,
                        classes: "control"
                    },
                    shiftr: {
                        keySet: "shifted",
                        text: "Shift",
                        width: 100,
                        classes: "control"
                    },
                    caps: {
                        keySet: "capsed",
                        text: "Caps lock",
                        width: 80,
                        classes: "control"
                    },
                    space: {
                        key: " ",
                        text: "Space",
                        width: 180
                    },
                    enter: {
                        key: "\r\n",
                        text: "Enter",
                        width: 80,
                        classes: "control"
                    },
                    backspace: {
                        func: "backspace",
                        classes: "control backspace",
                        width: 65
                    },
                    accept: {
                        func: "accept",
                        text: "Close",
                        classes: "control featured"
                    },
                    next: {
                        func: "next",
                        text: "Next",
                        classes: "control featured"
                    }
                },
                "default": ["` 1 2 3 4 5 6 7 8 9 0 - = {backspace}", "{tab} q w e r t y u i o p [ ] \\", "{caps} a s d f g h j k l ; ' {enter}", "{shiftl} z x c v b n m , . / {shiftr}", "{next} {space} {accept}"],
                shifted: ["~ ! @ # $ % ^ & * ( ) _ + {backspace}", "{tab} Q W E R T Y U I O P { } |", '{caps} A S D F G H J K L : " {enter}', "{shiftl} Z X C V B N M < > ? {shiftr}", "{next} {space} {accept}"],
                capsed: ["` 1 2 3 4 5 6 7 8 9 0 - = {backspace}", "{tab} Q W E R T Y U I O P [ ] \\", "{caps} A S D F G H J K L ; ' {enter}", "{shiftl} Z X C V B N M , . / {shiftr}", "{next} {space} {accept}"]
            },
            per_normal : {
           _meta: {
				tab: {
							key: "\t"
							, text: "Tab"
							, width: 60
							, classes: "control"
					}
					, caps: {
							keySet: "capsed"
							, text: "Caps lock"
							, width: 80
							, classes: "control"
					}
					, space: {
							key: " "
							, text: "فاصله"
							, width: 180
					}
					, enter: {
							key: "\r\n"
							, text: "Enter"
							, width: 80
							, classes: "control"
					}
					, backspace: {
							func: "backspace"
							, classes: "control backspace"
							, width: 65
					}
					, accept: {
							func: "accept"
							, text: "بستن"
							, classes: "control featured"
					}
					, next: {
							func: "next"
							, text: "بعدی"
							, classes: "control featured"
					},
					 shiftl: {
							keySet: "shifted"
							, text: "تغییر"
							, width: 100
							, classes: "control"
					}
                   },
			"default": ["` 1 2 3 4 5 6 7 8 9 0 - = {backspace}", "{tab} ض ص ث ق ف غ ع ه خ ح ج چ", "{caps} ش س ی ب ل ا ت ن م ک گ {enter}", "{shiftl} ؟ ظ ط ز ر ذ د و ، . پ ئ / ", "{next} {space} {accept}"] ,
			shifted : ["~ ! @ # $ % ^ & * ( ) _ + {backspace}", "{tab} ض ص ث ق ف غ ع ه خ ح ج چ", "{caps} ش س ی ب ل ا ت ن م ک گ {enter}", "{shiftl} ؟ ظ ط ز ر ذ د و { } [ ] / ", "{next} {space} {accept}"]
		  },
            compact: {
                _meta: {
                    "default": {
                        keySet: "default",
                        text: "abc",
                        classes: "control"
                    },
                    alpha: {
                        keySet: "default",
                        text: "Abc",
                        classes: "control"
                    },
                    shift: {
                        keySet: "shifted",
                        text: "ABC",
                        classes: "control"
                    },
                    numbers: {
                        keySet: "numbers",
                        text: "123",
                        classes: "control"
                    },
                    space: {
                        key: " ",
                        text: "Space",
                        width: 200
                    },
                    backspace: {
                        func: "backspace",
                        classes: "control"
                    },
                    accept: {
                        func: "accept",
                        text: "Close",
                        classes: "control featured"
                    },
                    next: {
                        func: "next",
                        text: "Next",
                        classes: "featured"
                    },
                    zero: {
                        key: "0",
                        width: 130
                    }
                },
                "default": ["q w e r t y u i o p", " a s d f g h j k l ", "{shift} z x c v b n m {backspace}", "{numbers} , {space} . {next} {accept}"],
                shifted: ["Q W E R T Y U I O P", " A S D F G H J K L ", "{default} Z X C V B N M ", "{numbers} _ {space} {backspace} {next} {accept}"],
                numbers: ["1 2 3", "4 5 6", "7 8 9", "  {alpha} . {zero} {backspace} {next} {accept}"]
            },
            numeric: {
                _meta: {
                    backspace: {
                        func: "backspace",
                        classes: "control"
                    },
                    accept: {
                        func: "accept",
                        text: "Close",
                        classes: "control featured"
                    },
                    next: {
                        func: "next",
                        text: "Next",
                        classes: "control featured"
                    },
                    zero: {
                        key: "0",
                        width: 130
                    }
                },
                "default": ["1 2 3", "4 5 6", "7 8 9", "_ - . {zero} {backspace} {next} {accept}"]
            }
        }
    }, function(t, e, n) {
        function r(t) {
            return "string" == typeof t || !i(t) && c(t) && o(t) == u
        }
        var o = n(75),
            i = n(81),
            c = n(82),
            u = "[object String]";
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return null == t ? void 0 === t ? s : u : f && f in Object(t) ? i(t) : c(t)
        }
        var o = n(76),
            i = n(79),
            c = n(80),
            u = "[object Null]",
            s = "[object Undefined]",
            f = o ? o.toStringTag : void 0;
        t.exports = r
    }, function(t, e, n) {
        var r = n(77),
            o = r.Symbol;
        t.exports = o
    }, function(t, e, n) {
        var r = n(78),
            o = "object" == typeof self && self && self.Object === Object && self,
            i = r || o || Function("return this")();
        t.exports = i
    }, function(t, e) {
        (function(e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n
        }).call(e, function() {
            return this
        }())
    }, function(t, e, n) {
        function r(t) {
            var e = c.call(t, s),
                n = t[s];
            try {
                t[s] = void 0;
                var r = !0
            } catch (o) {}
            var i = u.call(t);
            return r && (e ? t[s] = n : delete t[s]), i
        }
        var o = n(76),
            i = Object.prototype,
            c = i.hasOwnProperty,
            u = i.toString,
            s = o ? o.toStringTag : void 0;
        t.exports = r
    }, function(t, e) {
        function n(t) {
            return o.call(t)
        }
        var r = Object.prototype,
            o = r.toString;
        t.exports = n
    }, function(t, e) {
        var n = Array.isArray;
        t.exports = n
    }, function(t, e) {
        function n(t) {
            return null != t && "object" == typeof t
        }
        t.exports = n
    }, function(t, e) {
        function n(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
        t.exports = n
    }, function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "vue-touch-keyboard"
                }, [n("div", {
                    staticClass: "keyboard"
                }, t._l(t.keySet, function(e, r) {
                    return n("div", {
                        key: "index",
                        staticClass: "line"
                    }, t._l(e, function(e, r) {
                        return n("span", {
                            key: "index",
                            "class": t.getClassesOfKey(e),
                            style: t.getKeyStyle(e),
                            domProps: {
                                textContent: t._s(t.getCaptionOfKey(e))
                            },
                            on: {
                                click: function(n) {
                                    t.clickKey(e)
                                },
                                mousedown: t.mousedown
                            }
                        })
                    }))
                }))])
            },
            staticRenderFns: []
        }
    }])
});