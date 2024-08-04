(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[9213], {
    98800: (e, t, n) => {
        "use strict";
        n.r(t),
            n.d(t, {
                default: () => b
            });
        var o = n(96540)
            , a = n(11106)
            , r = n.n(a)
            , l = n(61038);
        function i(e) {
            return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                i(e)
        }
        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, u(o.key), o)
            }
        }
        function u(e) {
            var t = function (e, t) {
                if ("object" != i(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != i(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == i(t) ? t : t + ""
        }
        function c(e, t, n) {
            return t = m(t),
                function (e, t) {
                    if (t && ("object" == i(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, p() ? Reflect.construct(t, n || [], m(e).constructor) : t.apply(e, n))
        }
        function p() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (p = function () {
                return !!e
            }
            )()
        }
        function m(e) {
            return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                m(e)
        }
        function d(e, t) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                d(e, t)
        }
        var b = function (e) {
            function t(e) {
                var n;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (n = c(this, t, [e])).state = {
                        isMobile: !1
                    },
                    n.isUtilityNavDisabled = !1,
                    n.utilityNavEle = null,
                    n.headerEle = null,
                    n.mainContentEle = null,
                    n.subNavWrapperEle = null,
                    n.topHeaderHeight = null,
                    n
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
                    t && d(e, t)
            }(t, e),
                n = t,
                a = [{
                    key: "toggleSubNav",
                    value: function (e) {
                        e.currentTarget.closest(".subnav-title").classList.contains("selected") ? e.currentTarget.closest(".subnav-title").classList.remove("selected") : e.currentTarget.closest(".subnav-title").classList.add("selected")
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        var e, t, n, o, a, r, i, s;
                        this.dataComponentName = "Sub Navigation",
                            this.dataComponentId = "subnav",
                            (0,
                                l.pK)("subnav", this.dataComponentName);
                        var u = window.location.pathname
                            , c = document.querySelectorAll("[class*=subnav-menu] a");
                        this.isUtilityNavDisabled = document.body.classList.contains("utility-disabled");
                        var p = this;
                        c.length > 0 && (0,
                            l.Ui)(c).map((function (e) {
                                e.getAttribute("href") === u && e.closest(".subnav-item").classList.add("selected")
                            }
                            ));
                        var m = !1;
                        (0 === this.props.componentOrder || 1 === this.props.componentOrder && document.querySelectorAll(".page-components section").length > 0 && "Free Html" === document.querySelectorAll(".page-components section")[0].getAttribute("data-componentname")) && (m = !0,
                            document.body.classList.add("subnavigation-basic-interaction")),
                            this.utilityNavEle = null !== (e = document.querySelector("#utility-bar")) && void 0 !== e ? e : null,
                            this.headerEle = null !== (t = document.querySelector("#nav-wrapper")) && void 0 !== t ? t : null,
                            this.mainContentEle = null !== (n = null === (o = document.getElementsByClassName("main-content")) || void 0 === o ? void 0 : o[0]) && void 0 !== n ? n : null,
                            this.subNavWrapperEle = null !== (a = document.querySelector('[class*="subnav-wrapper"]')) && void 0 !== a ? a : "",
                            this.topHeaderHeight = (null !== (r = null === (i = this.utilityNavEle) || void 0 === i ? void 0 : i.getBoundingClientRect().height) && void 0 !== r ? r : 0) + (null === (s = this.headerEle) || void 0 === s ? void 0 : s.getBoundingClientRect().height),
                            window.addEventListener("scroll", (function () {
                                this.oldScroll > this.scrollY ? (document.body.classList.contains("subnavigation-interaction") && document.body.classList.remove("subnavigation-interaction"),
                                    document.getElementById("mob-menu") && (document.getElementById("mob-menu").style.top = "108px"),
                                    document.getElementById("mob-submenu") && (document.getElementById("mob-submenu").style.top = "108px"),
                                    p.isUtilityNavDisabled ? (p.subNavWrapperEle && (p.subNavWrapperEle.style.top = "60px"),
                                        p.mainContentEle && (p.mainContentEle.style.top = "0")) : (p.mainContentEle && (p.mainContentEle.style.top = "108px"),
                                            p.subNavWrapperEle && (p.subNavWrapperEle.style.top = "108px"))) : (window.scrollY >= p.topHeaderHeight && m && !document.body.classList.contains("subnavigation-interaction") && document.body.classList.add("subnavigation-interaction"),
                                                document.getElementById("mob-menu") && (document.getElementById("mob-menu").style.top = "40px"),
                                                document.getElementById("mob-submenu") && (document.getElementById("mob-submenu").style.top = "40px"),
                                                p.isUtilityNavDisabled ? (p.subNavWrapperEle && (p.subNavWrapperEle.style.top = m ? "0px" : "60px"),
                                                    p.mainContentEle && (p.mainContentEle.style.top = "0")) : (p.subNavWrapperEle && (p.subNavWrapperEle.style.top = m ? "0px" : "64px"),
                                                        p.mainContentEle && (p.mainContentEle.style.top = "64px"))),
                                    this.oldScroll = this.scrollY;
                                var e = document.querySelector('[class*="ml-center"]')
                                    , t = e ? e.getBoundingClientRect().top : null;
                                document.querySelector('[class*="open-subnav"') || (t >= 100 ? p.subNavWrapperEle && (p.subNavWrapperEle.style.position = "sticky") : window.scrollY <= p.topHeaderHeight ? p.subNavWrapperEle && "sticky" != p.subNavWrapperEle.style.position && (p.subNavWrapperEle.style.position = "sticky") : p.subNavWrapperEle && "fixed" != p.subNavWrapperEle.style.position && (p.subNavWrapperEle.style.position = "fixed"))
                            }
                            ))
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this
                            , t = this.props.itemContent && this.props.itemContent ? this.props.itemContent : ""
                            , n = t.field_title && t.field_title[0] ? t.field_title[0].value : ""
                            , a = t.field_stat_disclaimer_link && t.field_stat_disclaimer_link[0] ? t.field_stat_disclaimer_link[0].value : ""
                            , i = "var(--hero-purple)"
                            , s = t.field_text_color && t.field_text_color[0] ? t.field_text_color[0].color : "#ffffff"
                            , u = t.field_nav_links && t.field_nav_links ? (0,
                                l.Ui)(t.field_nav_links).map((function (t, n) {
                                    return t.title ? o.createElement("li", {
                                        onClick: function () {
                                            (0,
                                                l.Xt)(e.dataComponentName, e.dataComponentId, t.title)
                                        },
                                        key: n,
                                        className: "".concat(r()["subnav-item"], " subnav-item")
                                    }, o.createElement("a", {
                                        href: t.uri,
                                        className: "subhead-5"
                                    }, t.title)) : ""
                                }
                                )) : "";
                        return o.createElement("div", {
                            className: "".concat(r()["subnav-wrapper"], " ").concat("subnav-wrapper--" + r()["subnav-wrapper"]),
                            style: {
                                backgroundColor: i,
                                color: s
                            },
                            "data-componentname": this.dataComponentName,
                            "component-order": this.props.componentOrder
                        }, o.createElement("div", {
                            className: r()["subnav-container"]
                        }, o.createElement("span", {
                            className: "".concat(r()["mobile-hide"], " para-sm para-sm-b")
                        }, o.createElement("a", {
                            onClick: function (t) {
                                (0,
                                    l.Xt)(e.dataComponentName, e.dataComponentId, n)
                            },
                            className: r()["subnav-title"],
                            href: a,
                            dangerouslySetInnerHTML: {
                                __html: n
                            }
                        })), o.createElement("div", {
                            className: "".concat(r()["subnav-title"], " ").concat(r()["desktop-hide"], " subnav-title para-sm para-sm-b"),
                            style: {
                                color: s
                            }
                        }, o.createElement("span", {
                            className: r()["subnav-title-mobile"],
                            style: {
                                backgroundColor: i
                            }
                        }, o.createElement("a", {
                            href: a,
                            dangerouslySetInnerHTML: {
                                __html: n
                            }
                        })), o.createElement("span", {
                            onClick: function (t) {
                                return e.toggleSubNav(t)
                            },
                            className: r()["open-subnav"]
                        })), o.createElement("ul", {
                            className: "".concat(r()["subnav-menu"], " ").concat("subnav-menu--" + r()["subnav-menu"])
                        }, u)))
                    }
                }],
                a && s(n.prototype, a),
                Object.defineProperty(n, "prototype", {
                    writable: !1
                }),
                n;
            var n, a
        }(o.Component)
    }
    ,
    11106: e => {
        e.exports = {
            "inherit-parent-typo": "HA_dK",
            "subnav-wrapper": "mt3XQ",
            "subnav-menu": "xAumr",
            "subnav-item": "dDo_f",
            "subnav-title": "jJtJX",
            "subnav-container": "RDVqa",
            "desktop-hide": "JoX6g",
            "open-subnav": "OZxru",
            "mobile-hide": "QwbDj",
            "subnav-title-mobile": "Nvtaj"
        }
    }
}]);
