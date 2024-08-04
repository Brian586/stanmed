(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[1079], {
    91170: (e, t, i) => {
        "use strict";
        i.r(t),
            i.d(t, {
                default: () => b
            });
        var o = i(96540)
            , s = i(57884)
            , r = i.n(s)
            , a = i(61038);
        function n(e) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                n(e)
        }
        function l(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, c(o.key), o)
            }
        }
        function c(e) {
            var t = function (e, t) {
                if ("object" != n(e) || !e)
                    return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, "string");
                    if ("object" != n(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == n(t) ? t : t + ""
        }
        function d(e, t, i) {
            return t = p(t),
                function (e, t) {
                    if (t && ("object" == n(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, m() ? Reflect.construct(t, i || [], p(e).constructor) : t.apply(e, i))
        }
        function m() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (m = function () {
                return !!e
            }
            )()
        }
        function p(e) {
            return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                p(e)
        }
        function u(e, t) {
            return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                u(e, t)
        }
        const b = function (e) {
            function t(e) {
                var i;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (i = d(this, t, [e])).myTabRef = o.createRef(),
                    i.state = {
                        isOpen: "close",
                        isSticky: !1,
                        isMobileOpen: "close"
                    },
                    i.dataComponentName = "Topic Nav",
                    i.dataComponentId = "topics_bar",
                    i.isTopicbar = i.isTopicbar.bind(i),
                    i
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
                    t && u(e, t)
            }(t, e),
                i = t,
                (s = [{
                    key: "isTopicbar",
                    value: function () {
                        var e = document.getElementsByTagName("body")[0].offsetWidth
                            , t = window.scrollY;
                        this.state.prevScrollpos && (this.state.prevScrollpos > t ? document.querySelectorAll('[class*="insight-details-page"]')[0] || e >= 768 ? document.getElementById("tbHeader") && (document.getElementById("tbHeader").style.top = "108px") : document.getElementById("tbHeader") && (document.getElementById("tbHeader").style.top = "0") : document.querySelectorAll('[class*="insight-details-page"]')[0] || e >= 768 ? document.getElementById("tbHeader") && (document.getElementById("tbHeader").style.top = "64px") : document.getElementById("tbHeader") && (document.getElementById("tbHeader").style.top = "0")),
                            this.setState({
                                prevScrollpos: t
                            });
                        var i = document.body.scrollTop || document.documentElement.scrollTop
                            , o = document.querySelectorAll('[class*="banner-wrapper"]')[0] ? document.querySelectorAll('[class*="banner-wrapper"]')[0].offsetHeight : 0
                            , s = document.querySelectorAll('[class*="tp-container"]')[0] ? document.querySelectorAll('[class*="tp-container"]')[0].offsetHeight : 0
                            , r = document.getElementById("tbHeader")
                            , a = document.getElementById("tbList")
                            , n = document.getElementById("tbTitle")
                            , l = document.getElementById("tbMobileTitle")
                            , c = document.getElementById("tbClearDesktop")
                            , d = document.getElementById("tbClearMobile")
                            , m = o + s + 20
                            , p = document.getElementById("tbHeaderTxt");
                        e >= 768 ? i > m ? "open" != this.state.isOpen && (c.classList.add("hide"),
                            a.classList.add("hide"),
                            n.classList.add("arrow-right"),
                            n.classList.remove("arrow-left"),
                            p.classList.add("pointer"),
                            r.style.width = "250px",
                            this.setState({
                                isSticky: !0
                            }),
                            this.setState({
                                isOpen: "open"
                            })) : i > o ? (r.classList.add("sticky"),
                                a.classList.remove("hide"),
                                c.classList.remove("hide"),
                                p.classList.remove("pointer"),
                                n.classList.remove("arrow-right", "arrow-left"),
                                r.style.width = "100%",
                                this.setState({
                                    isSticky: !0
                                }),
                                this.setState({
                                    isOpen: "close"
                                })) : (r.classList.remove("sticky"),
                                    a.classList.remove("hide"),
                                    c.classList.remove("hide"),
                                    n.classList.remove("arrow-right", "arrow-left"),
                                    r.style.width = "100%",
                                    this.setState({
                                        isOpen: "close"
                                    }),
                                    this.setState({
                                        isSticky: !1
                                    })) : (r.style.width = "100%",
                                        n.classList.remove("arrow-right", "arrow-left"),
                                        "open" != this.state.isMobileOpen ? (r.classList.add("sticky"),
                                            a.classList.add("hide"),
                                            d.classList.add("hide"),
                                            l.classList.add("arrow-down"),
                                            l.classList.remove("arrow-up"),
                                            p.classList.add("pointer"),
                                            this.setState({
                                                isSticky: !0
                                            })) : "open" == this.state.isMobileOpen ? (r.classList.add("sticky"),
                                                a.classList.remove("hide"),
                                                d.classList.remove("hide"),
                                                l.classList.remove("arrow-down"),
                                                l.classList.add("arrow-up"),
                                                p.classList.add("pointer"),
                                                this.setState({
                                                    isSticky: !0
                                                })) : (r.classList.remove("sticky"),
                                                    this.setState({
                                                        isMobileOpen: "close"
                                                    }),
                                                    this.setState({
                                                        isSticky: !1
                                                    })))
                    }
                }, {
                    key: "listShowHide",
                    value: function () {
                        if (this.state.isSticky) {
                            var e = document.getElementById("tbList")
                                , t = document.getElementById("tbHeader")
                                , i = e.className;
                            document.getElementsByTagName("body")[0].offsetWidth >= 768 ? i.includes("hide") ? (e.classList.remove("hide"),
                                tbClearDesktop.classList.remove("hide"),
                                tbTitle.classList.remove("arrow-right"),
                                tbTitle.classList.add("arrow-left"),
                                t.style.width = "100%",
                                this.setState({
                                    isOpen: "open"
                                })) : (tbClearDesktop.classList.add("hide"),
                                    e.classList.add("hide"),
                                    tbTitle.classList.add("arrow-right"),
                                    t.style.width = "250px",
                                    tbTitle.classList.remove("arrow-left"),
                                    this.setState({
                                        isOpen: "close"
                                    })) : i.includes("hide") ? (e.classList.remove("hide"),
                                        tbClearMobile.classList.remove("hide"),
                                        tbMobileTitle.classList.remove("arrow-down"),
                                        tbMobileTitle.classList.add("arrow-up"),
                                        this.setState({
                                            isMobileOpen: "open"
                                        })) : (tbClearMobile.classList.add("hide"),
                                            e.classList.add("hide"),
                                            tbMobileTitle.classList.add("arrow-down"),
                                            tbMobileTitle.classList.remove("arrow-up"),
                                            this.setState({
                                                isMobileOpen: "close"
                                            }))
                        }
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        this.setState({
                            prevScrollpos: window.scrollY
                        }),
                            window.addEventListener("scroll", this.isTopicbar),
                            window.addEventListener("resize", this.isTopicbar),
                            document.getElementsByTagName("body")[0].offsetWidth <= 768 && this.isTopicbar();
                        var e = window.location.pathname
                            , t = document.querySelectorAll("[class*=topic-item] a");
                        t.length > 0 && Array.from(t).map((function (t) {
                            t.getAttribute("href") === e && t.closest(".topic-item").classList.add("active-topic")
                        }
                        )),
                            (0,
                                a.pK)(this.dataComponentId, this.dataComponentName)
                    }
                }, {
                    key: "renderTopics",
                    value: function (e) {
                        var t = this
                            , i = Object.keys(e).map((function (i, s) {
                                var r = e[i] && e[i].title ? e[i].title : ""
                                    , n = e[s] && e[s].uri ? e[s].uri : "";
                                if (n)
                                    return o.createElement("li", {
                                        key: s,
                                        className: "topic-item"
                                    }, o.createElement("a", {
                                        href: n,
                                        ref: t.myTabRef,
                                        onClick: function () {
                                            var e = (0,
                                                a.k1)(a.aF, r, t.dataComponentName);
                                            (0,
                                                a.$)("CTA Link Clicked", e, t.dataComponentId, t.dataComponentName)
                                        }
                                    }, r))
                            }
                            ));
                        return o.createElement("ul", {
                            id: "tbList",
                            className: "".concat(r()["topics-list"])
                        }, i)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this
                            , t = this.props.itemContent
                            , i = t && Object.keys(t).length > 0 ? t : null
                            , s = i && i.field_topics_bar_item.length > 0 ? i.field_topics_bar_item : null;
                        return o.createElement("section", {
                            className: "".concat(r().tbwrap, " component-order"),
                            "data-componentname": this.dataComponentName,
                            "component-order": this.props.componentOrder
                        }, o.createElement("div", {
                            className: "".concat(r()["tp-container"], " ").concat("tp-container--" + r()["tp-container"]),
                            id: "tbHeader"
                        }, o.createElement("div", {
                            className: r()["tb-headerWrap"]
                        }, o.createElement("h5", {
                            className: r()["tb-header"],
                            id: "tbHeaderTxt",
                            onClick: function () {
                                return e.listShowHide()
                            }
                        }, "Select a topic"), o.createElement("div", {
                            className: " ".concat(r()["tb-headerClear"], " desktop"),
                            id: "tbClearDesktop"
                        }, o.createElement("a", {
                            href: "/knowledge-hub",
                            ref: this.myTabRef
                        }, "Clear")), o.createElement("div", {
                            id: "tbMobileTitle",
                            className: r()["tb-titleMobile"],
                            onClick: function () {
                                return e.listShowHide()
                            }
                        })), o.createElement("div", {
                            id: "tbTitle",
                            onClick: function () {
                                return e.listShowHide()
                            }
                        }), this.renderTopics(s), o.createElement("div", {
                            className: " ".concat(r()["tb-headerClear"], " mobile"),
                            id: "tbClearMobile"
                        }, o.createElement("a", {
                            href: "/knowledge-hub",
                            ref: this.myTabRef
                        }, "Clear"))))
                    }
                }]) && l(i.prototype, s),
                Object.defineProperty(i, "prototype", {
                    writable: !1
                }),
                i;
            var i, s
        }(o.Component)
    }
    ,
    57884: e => {
        e.exports = {
            "inherit-parent-typo": "gHfF7",
            tbwrap: "ZUziX",
            "tp-container": "S4Z69",
            "tb-headerWrap": "kij7i",
            "tb-header": "mhPAN",
            "tb-headerClear": "A3nqH",
            "topics-list": "vpd1D",
            "tb-titleMobile": "ZvtNy"
        }
    }
}]);
