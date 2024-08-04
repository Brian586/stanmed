(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[9394, 5538, 7360], {
    47653: (e, t, r) => {
        "use strict";
        r.r(t),
            r.d(t, {
                default: () => l
            });
        var n = r(96540);
        function o(e) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                o(e)
        }
        function a(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    r.push.apply(r, n)
            }
            return r
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(r), !0).forEach((function (t) {
                    c(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function c(e, t, r) {
            return (t = function (e) {
                var t = function (e, t) {
                    if ("object" != o(e) || !e)
                        return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, "string");
                        if ("object" != o(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == o(t) ? t : t + ""
            }(t)) in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
                e
        }
        function l(e) {
            var t = e.visibility
                , r = void 0 !== t && t
                , o = e.borderStyle
                , a = e.style;
            if (!r)
                return null;
            var c = {
                style: i({
                    margin: " 0 auto",
                    borderRight: "0",
                    borderLeft: "0",
                    borderBottom: "0",
                    borderTop: o || "1px solid #d8d8d8",
                    maxWidth: "896px",
                    width: "calc(100% - 60px)",
                    minWidth: "315px"
                }, void 0 === a ? {} : a)
            };
            return n.createElement(n.Fragment, null, r && n.createElement("hr", c))
        }
    }
    ,
    9987: (e, t, r) => {
        "use strict";
        r.r(t),
            r.d(t, {
                default: () => l
            });
        var n = r(96540)
            , o = r(79643)
            , a = r.n(o)
            , i = r(61038);
        function c() {
            return c = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
                ,
                c.apply(null, arguments)
        }
        const l = function (e) {
            var t = e.containerSize
                , r = e.heading
                , o = e.headingColor
                , l = e.headingType
                , u = e.subHeadingType
                , s = e.paragraphType
                , p = e.headingSize
                , d = e.paragraph
                , f = e.paragraphColor
                , m = e.paragraphFontSize
                , y = e.subHeading
                , b = e.subHeadingSize
                , h = e.subHeadingColor
                , v = e.dividerVisibility
                , g = e.dividerColor
                , w = (e.siteId,
                    e.setParagraphHtml)
                , O = e.dataComponentName;
            if (!r && !y && !d)
                return null;
            var S, E;
            w = w || !1,
                S = "default" == m ? a()["des-default"] : "large" == m ? a()["des-large"] : a()["des-default"],
                E = "standard" == t ? a().standard : "wide" == t ? a().wide : a().standard;
            var _ = o ? {
                style: {
                    color: o
                }
            } : ""
                , j = h ? {
                    style: {
                        color: h
                    }
                } : ""
                , C = f ? {
                    style: {
                        color: f
                    }
                } : ""
                , P = l && l.includes("ptserif") ? l : "".concat(l, "-sspro")
                , T = n.createElement("h2", c({
                    className: P
                }, _), r);
            T = p && "Awards Card" === O ? '<h2 style="color:'.concat(o, '" class="').concat(a()["title-" + p], " ").concat(P, '">') + r + "</h2>" : T,
                T = "Case Studies Banner" === O ? '<h1 style="color:'.concat(o, '" class="').concat(l, '-ptserif">').concat(r, "</h1>") : T,
                T = "Recommended Content" === O ? n.createElement("h2", c({
                    className: "".concat(l, "-sspro")
                }, _), (0,
                    i.tP)(r)) : T;
            var A = {};
            g && (A.borderColor = g),
                A.order = r && y ? 0 : 1;
            var q = {
                style: A
            };
            return n.createElement("div", {
                className: "".concat(a()["globalhead-wrap"], " ").concat("globalhead-wrap--" + a()["globalhead-wrap"], " ").concat(E)
            }, y ? "Awards Card" == O && b ? "heading-1" === b ? n.createElement("h1", c({
                className: "".concat(a().g_subtitle, " ").concat(u, "-sspro")
            }, j), y) : n.createElement("p", c({
                className: "".concat(a().g_subtitle, " ").concat(b, " ").concat(u, "-sspro")
            }, j), y) : n.createElement("h4", c({}, j, {
                className: "".concat(u, "-sspro")
            }), y) : null, v && (r || y) ? n.createElement("span", c({
                className: a().divider
            }, q)) : null, r ? "Awards Card" === O && p || "Case Studies Banner" === O ? n.createElement("div", c({}, _, {
                dangerouslySetInnerHTML: {
                    __html: T
                }
            })) : T : null, w && d ? n.createElement("div", c({}, C, {
                className: "para-sm ".concat(S, " ").concat(s, "-sspro"),
                dangerouslySetInnerHTML: {
                    __html: d
                }
            })) : null, !w && d ? n.createElement("p", c({}, C, {
                className: "para-sm ".concat(S, " ").concat(s, "-sspro")
            }), d) : null)
        }
    }
    ,
    86037: (e, t, r) => {
        "use strict";
        r.r(t),
            r.d(t, {
                default: () => v
            });
        var n = r(96540)
            , o = r(39299)
            , a = r.n(o)
            , i = r(61038)
            , c = r(47653)
            , l = r(9987);
        function u(e) {
            return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                u(e)
        }
        function s() {
            return s = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
                ,
                s.apply(null, arguments)
        }
        function p(e, t, r) {
            return (t = f(t)) in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
                e
        }
        function d(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, f(n.key), n)
            }
        }
        function f(e) {
            var t = function (e, t) {
                if ("object" != u(e) || !e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" != u(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == u(t) ? t : t + ""
        }
        function m(e, t, r) {
            return t = b(t),
                function (e, t) {
                    if (t && ("object" == u(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, y() ? Reflect.construct(t, r || [], b(e).constructor) : t.apply(e, r))
        }
        function y() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (y = function () {
                return !!e
            }
            )()
        }
        function b(e) {
            return b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                b(e)
        }
        function h(e, t) {
            return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                h(e, t)
        }
        const v = function (e) {
            function t(e) {
                var r;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (r = m(this, t, [e])).state = {
                        dataComponentName: "Free Html"
                    },
                    r.siteIdentifier = r.props.content && r.props.content.siteIdentifier ? r.props.content.siteIdentifier : null,
                    r
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                    t && h(e, t)
            }(t, e),
                r = t,
                (o = [{
                    key: "componentDidMount",
                    value: function () {
                        if ((0,
                            i.pK)("free_html", this.state.dataComponentName),
                            document.querySelectorAll(".epoc-license-page-wrapper")[0]) {
                            if (document.querySelectorAll(".epoc-license-form-fields")[0]) {
                                var e, t = 0, r = 0, n = document.querySelectorAll('[name*="qty_312"]')[0], o = document.querySelectorAll('[name*="qty_317"]')[0], a = document.querySelectorAll('[class*="epoc-compare-form"] a.regular')[0];
                                n && n.addEventListener("change", (function () {
                                    t = document.querySelectorAll('[name*="qty_312"]')[0].value
                                }
                                )),
                                    o && o.addEventListener("change", (function () {
                                        r = document.querySelectorAll('[name*="qty_317"]')[0].value
                                    }
                                    )),
                                    a.addEventListener("click", (function () {
                                        (n || o) && (e = "https://www.epocrates.com/addItemsToCart.do?ppid_312=".concat(t > 0 ? "true" : "false", "&qty_312=").concat(t > 0 ? t : 0, "&ppid_317=").concat(r > 0 ? "true" : "false", "&qty_317=").concat(r > 0 ? r : 0)),
                                            window.location = e
                                    }
                                    ))
                            }
                            var c, l;
                            document.getElementById("redeemer-page") && document.querySelectorAll('[id*="redeemer-page"] a.regular')[0].addEventListener("click", (function () {
                                c = document.getElementById("promocode").value.replace(" ", "+"),
                                    l = "https://www.epocrates.com/toggleRedirect.do?checkoutmethod=RedeemCoupon&promoCode=".concat(c),
                                    window.location = l
                            }
                            ))
                        }
                    }
                }, {
                    key: "scrollToPosition",
                    value: function (e) {
                        var t = e.nativeEvent.target.getAttribute("href");
                        if (t && 0 === t.indexOf("#")) {
                            e.preventDefault();
                            var r = "#privacy-policy" !== t ? document.querySelector(t).offsetTop - document.querySelector(".header-wrapper .container-fluid").clientHeight : 0;
                            return window.scrollTo({
                                top: r,
                                behavior: "smooth"
                            }),
                                !1
                        }
                        return !0
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this
                            , t = this.props.itemContent
                            , r = t && t.body && t.body[0] && t.body[0].value ? t.body[0].value : ""
                            , o = 0 == this.props.componentOrder ? a()["zero-component"] : null
                            , u = (0,
                                i.y_)(t.global_data)
                            , d = u.containerStyles
                            , f = u.hasTopDivider
                            , m = u.hasBottomDivider
                            , y = u.border
                            , b = u.background
                            , h = u.title
                            , v = u.titleType
                            , g = u.subhead
                            , w = u.subheadType
                            , O = u.para
                            , S = u.paraType
                            , E = u.titleColor
                            , _ = u.subheadClr
                            , j = u.paraClr
                            , C = u.enableSubheadDivider
                            , P = p(p(p({}, "data-componentname", this.state.dataComponentName), "component-order", this.props.componentOrder), "style", {
                                backgroundColor: b
                            });
                        return n.createElement("section", s({
                            className: "".concat(a()["free-html-wrapper"], " ").concat("free-html-wrapper--" + a()["free-html-wrapper"], "  component-order ").concat(o)
                        }, P), n.createElement(c.default, {
                            visibility: f,
                            borderStyle: y
                        }), n.createElement("div", {
                            className: "".concat(a()["free-html-content"]),
                            style: d
                        }, n.createElement(l.default, {
                            containerSize: "standard",
                            heading: h,
                            headingType: v,
                            subHeadingType: w,
                            paragraphType: S,
                            headingColor: E,
                            subHeading: g,
                            subHeadingColor: _,
                            paragraph: O,
                            paragraphColor: j,
                            dividerVisibility: C,
                            dividerColor: "#0077b6",
                            siteId: this.siteIdentifier,
                            setParagraphHtml: !0
                        }), n.createElement("div", {
                            onClick: function (t) {
                                return e.scrollToPosition(t)
                            },
                            dangerouslySetInnerHTML: {
                                __html: r.replace(/src="(?!http(s)?|\/\/)/g, 'src="' + this.props.api)
                            }
                        })), n.createElement(c.default, {
                            visibility: m,
                            borderStyle: y
                        }))
                    }
                }]) && d(r.prototype, o),
                Object.defineProperty(r, "prototype", {
                    writable: !1
                }),
                r;
            var r, o
        }(n.Component)
    }
    ,
    79643: e => {
        e.exports = {
            "inherit-parent-typo": "UyAv5",
            "globalhead-wrap": "xZtGs",
            "des-default": "bdaa4",
            "des-large": "cKnkp",
            standard: "hkE6H",
            wide: "OWbXu",
            "title-h1": "BpWm4",
            "title-h2": "KGO3K",
            "title-h3": "EOm2q",
            "title-h4": "spKIE",
            "title-h5": "p_2ky",
            "title-h6": "jbtGI",
            title: "IDMPd",
            divider: "uKbHA",
            g_subtitle: "MUoZn"
        }
    }
    ,
    39299: e => {
        e.exports = {
            "inherit-parent-typo": "jOKEt",
            "free-html-wrapper": "qURfn",
            "free-html-content": "T8om4",
            "zero-component": "G0bBh"
        }
    }
}]);
