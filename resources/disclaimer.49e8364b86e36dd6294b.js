(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[2822, 5538], {
    47653: (t, e, r) => {
        "use strict";
        r.r(e),
            r.d(e, {
                default: () => l
            });
        var n = r(96540);
        function o(t) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                o(t)
        }
        function i(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    r.push.apply(r, n)
            }
            return r
        }
        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? i(Object(r), !0).forEach((function (e) {
                    a(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function a(t, e, r) {
            return (e = function (t) {
                var e = function (t, e) {
                    if ("object" != o(t) || !t)
                        return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, "string");
                        if ("object" != o(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == o(e) ? e : e + ""
            }(e)) in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
                t
        }
        function l(t) {
            var e = t.visibility
                , r = void 0 !== e && e
                , o = t.borderStyle
                , i = t.style;
            if (!r)
                return null;
            var a = {
                style: c({
                    margin: " 0 auto",
                    borderRight: "0",
                    borderLeft: "0",
                    borderBottom: "0",
                    borderTop: o || "1px solid #d8d8d8",
                    maxWidth: "896px",
                    width: "calc(100% - 60px)",
                    minWidth: "315px"
                }, void 0 === i ? {} : i)
            };
            return n.createElement(n.Fragment, null, r && n.createElement("hr", a))
        }
    }
    ,
    18201: (t, e, r) => {
        "use strict";
        r.r(e),
            r.d(e, {
                default: () => O
            });
        var n = r(96540)
            , o = r(26663)
            , i = r.n(o)
            , c = r(61038)
            , a = r(47653);
        function l(t) {
            return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                l(t)
        }
        function u() {
            return u = Object.assign ? Object.assign.bind() : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (t[n] = r[n])
                }
                return t
            }
                ,
                u.apply(null, arguments)
        }
        function f(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    r.push.apply(r, n)
            }
            return r
        }
        function p(t, e, r) {
            return (e = b(e)) in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
                t
        }
        function s(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, b(n.key), n)
            }
        }
        function b(t) {
            var e = function (t, e) {
                if ("object" != l(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, "string");
                    if ("object" != l(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == l(e) ? e : e + ""
        }
        function y(t, e, r) {
            return e = m(e),
                function (t, e) {
                    if (e && ("object" == l(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, d() ? Reflect.construct(e, r || [], m(t).constructor) : e.apply(t, r))
        }
        function d() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (t) { }
            return (d = function () {
                return !!t
            }
            )()
        }
        function m(t) {
            return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
                ,
                m(t)
        }
        function v(t, e) {
            return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                return t.__proto__ = e,
                    t
            }
                ,
                v(t, e)
        }
        const O = function (t) {
            function e(t) {
                var r;
                return function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                    (r = y(this, e, [t])).state = {
                        dataComponentName: "Disclaimer"
                    },
                    r
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                    Object.defineProperty(t, "prototype", {
                        writable: !1
                    }),
                    e && v(t, e)
            }(e, t),
                r = e,
                o = [{
                    key: "componentDidMount",
                    value: function () {
                        (0,
                            c.pK)("disclaimer", this.state.dataComponentName)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var t, e, r = this.props.itemContent, o = r && r.body && r.body[0] && r.body[0].value ? r.body[0].value : "", l = r && r.field_stat_element_alignment && r.field_stat_element_alignment[0] && r.field_stat_element_alignment[0].value ? r.field_stat_element_alignment[0].value : "", s = r && r.field_disclaimer_variant && (null === (t = r.field_disclaimer_variant[0]) || void 0 === t ? void 0 : t.value), b = s ? i()[s] : "", y = (0,
                            c.y_)(r.global_data), d = y.containerStyles, m = y.hasTopDivider, v = y.hasBottomDivider, O = y.border, _ = y.background, g = p(p({
                                style: {
                                    backgroundColor: _
                                }
                            }, "data-componentname", this.state.dataComponentName), "component-order", this.props.componentOrder), h = (0,
                                c.Nw)(_ || "#ffffff"), j = d ? function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = null != arguments[e] ? arguments[e] : {};
                                        e % 2 ? f(Object(r), !0).forEach((function (e) {
                                            p(t, e, r[e])
                                        }
                                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function (e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                        }
                                        ))
                                    }
                                    return t
                                }({
                                    textAlign: l
                                }, d) : {
                                    textAlign: l
                                };
                        return n.createElement("section", u({
                            className: "".concat(i()["disclaimer-wrapper"], " component-order ").concat(b)
                        }, g), n.createElement(a.default, {
                            visibility: m,
                            borderStyle: O,
                            style: {
                                maxWidth: null !== (e = null == d ? void 0 : d.maxWidth) && void 0 !== e ? e : void 0,
                                width: "calc(100% - 40px)"
                            }
                        }), n.createElement("div", {
                            className: "".concat(i()["disclaimer-content"], " p1 rte ").concat(b ? "" : "s-body-sspro", " ").concat(i()[h]),
                            style: j,
                            dangerouslySetInnerHTML: {
                                __html: o
                            }
                        }), n.createElement(a.default, {
                            visibility: v,
                            borderStyle: O
                        }))
                    }
                }],
                o && s(r.prototype, o),
                Object.defineProperty(r, "prototype", {
                    writable: !1
                }),
                r;
            var r, o
        }(n.Component)
    }
    ,
    26663: t => {
        t.exports = {
            "inherit-parent-typo": "IV53_",
            "disclaimer-wrapper": "F_PQE",
            "disclaimer-content": "mrNPG",
            disclaimer_simple: "w5CLO",
            "dark-tone": "C3UUz",
            "light-tone": "kVlxA"
        }
    }
}]);
