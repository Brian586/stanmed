(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[8715, 2856], {
    86835: (e, t, a) => {
        "use strict";
        a.r(t),
            a.d(t, {
                default: () => p
            });
        var n = a(96540)
            , r = (a(84315),
                a(7452),
                a(25795))
            , o = a.n(r)
            , i = a(61038);
        function l(e) {
            return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                l(e)
        }
        function c(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, s(n.key), n)
            }
        }
        function s(e) {
            var t = function (e, t) {
                if ("object" != l(e) || !e)
                    return e;
                var a = e[Symbol.toPrimitive];
                if (void 0 !== a) {
                    var n = a.call(e, "string");
                    if ("object" != l(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == l(t) ? t : t + ""
        }
        function m(e, t, a) {
            return t = d(t),
                function (e, t) {
                    if (t && ("object" == l(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, u() ? Reflect.construct(t, a || [], d(e).constructor) : t.apply(e, a))
        }
        function u() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (u = function () {
                return !!e
            }
            )()
        }
        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                d(e)
        }
        function _(e, t) {
            return _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                _(e, t)
        }
        const p = function (e) {
            function t(e) {
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    m(this, t, [e])
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
                    t && _(e, t)
            }(t, e),
                a = t,
                (r = [{
                    key: "render",
                    value: function () {
                        var e = this.props.utilityProps.links || this.props.utilityProps;
                        return n.createElement("div", {
                            id: "utility-bar",
                            className: "".concat(o()["utility-nav"])
                        }, n.createElement("div", {
                            className: "".concat(o()["utility-wrap"])
                        }, n.createElement("div", {
                            className: "".concat(o()["cta-wrp"])
                        }, e && (0,
                            i.Ui)(e).map((function (e, t) {
                                var a = e && e.field_utlity_new_tab && "1" === e.field_utlity_new_tab ? "_blank" : void 0
                                    , r = e && e.title && e.title[0] && e.title[0].value ? e.title[0].value : ""
                                    , l = e && e.link && e.link[0] && e.link[0].uri ? e.link[0].uri : ""
                                    , c = !(!e || !e.field_utility_enable_media || "1" !== e.field_utility_enable_media);
                                return n.createElement("div", {
                                    className: "".concat(o().clientlogin)
                                }, n.createElement("a", {
                                    rel: "noreferrer noopener",
                                    onClick: function () {
                                        return (0,
                                            i.Xt)("Header", "Header", r)
                                    },
                                    className: "".concat(o()["utility-link"]),
                                    "data-link-type": "top",
                                    "data-link-text": r,
                                    "data-link-url": l,
                                    href: l,
                                    target: a
                                }, c && function (e) {
                                    return 0 === e ? n.createElement("svg", {
                                        width: "11",
                                        height: "12",
                                        viewBox: "0 0 11 12",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }, n.createElement("path", {
                                        d: "M5.75 6C4.08594 6 2.75 4.66406 2.75 3C2.75 1.35938 4.08594 0 5.75 0C7.39062 0 8.75 1.35938 8.75 3C8.75 4.66406 7.39062 6 5.75 6ZM4.67188 7.125H6.80469C9.125 7.125 11 9 11 11.3203C11 11.6953 10.6719 12 10.2969 12H1.17969C0.804688 12 0.5 11.6953 0.5 11.3203C0.5 9 2.35156 7.125 4.67188 7.125Z",
                                        fill: "white"
                                    })) : n.createElement("svg", {
                                        width: "13",
                                        height: "14",
                                        viewBox: "0 0 13 14",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }, n.createElement("g", {
                                        id: "Frame 39586"
                                    }, n.createElement("g", {
                                        id: "Leaf"
                                    }, n.createElement("path", {
                                        id: "Vector",
                                        d: "M7.74683 4.28602C7.74683 4.53484 7.84772 4.76002 8.01076 4.92299C8.17379 5.08596 8.39896 5.18672 8.64752 5.18672C8.89609 5.18672 9.1214 5.08596 9.28456 4.92299C9.44774 4.76002 9.54876 4.53484 9.54876 4.28602C9.54876 4.03746 9.44774 3.81215 9.28456 3.64897C9.1214 3.4858 8.89609 3.38477 8.64752 3.38477C8.39896 3.38477 8.17379 3.4858 8.01076 3.64897C7.84772 3.81215 7.74683 4.03746 7.74683 4.28602Z",
                                        fill: "white"
                                    }), n.createElement("path", {
                                        id: "Vector_2",
                                        d: "M4.22369 3.38543C4.22369 4.04445 4.35555 4.67255 4.5942 5.24503C4.83286 5.8175 5.17831 6.33435 5.60553 6.77086C6.03274 6.33435 6.3782 5.8175 6.61685 5.24503C6.85551 4.67255 6.98736 4.04445 6.98736 3.38543C6.98736 2.7264 6.85551 2.0983 6.61685 1.52583C6.3782 0.953352 6.03274 0.43651 5.60553 0C5.17831 0.43651 4.83286 0.953352 4.5942 1.52583C4.35555 2.0983 4.22369 2.7264 4.22369 3.38543Z",
                                        fill: "white"
                                    }), n.createElement("path", {
                                        id: "Vector_3",
                                        d: "M7.52172 7.89357C6.85024 8.80814 6.3933 9.81415 6.1413 10.8518C5.8893 11.8894 5.84224 12.9587 5.99052 13.9998C7.02832 13.8294 8.03448 13.4641 8.94907 12.9129C9.86365 12.3616 10.6867 11.6243 11.3581 10.7098C12.0296 9.79519 12.4866 8.78918 12.7386 7.75153C12.9906 6.71389 13.0376 5.64461 12.8893 4.60352C11.8515 4.77395 10.8454 5.13919 9.93079 5.69045C9.01621 6.24171 8.1932 6.97901 7.52172 7.89357Z",
                                        fill: "white"
                                    }), n.createElement("path", {
                                        id: "Vector_4",
                                        d: "M4.0944 6.36448C3.58999 5.66406 2.97181 5.09549 2.28487 4.66621C1.59793 4.23693 0.84224 3.94695 0.0628106 3.80371C-0.0484281 4.58837 -0.0129595 5.39701 0.176422 6.18461C0.365803 6.9722 0.709095 7.73873 1.2135 8.43915C1.66548 9.06678 2.2089 9.58817 2.81128 9.99832C3.41367 10.4085 4.07502 10.7074 4.76285 10.8901V12.3138V13.7376C4.76285 13.8098 4.79222 13.8753 4.8397 13.9227C4.88719 13.9701 4.95279 13.9995 5.02524 13.9995C5.09743 13.9995 5.1629 13.9701 5.21032 13.9227C5.25774 13.8753 5.28711 13.8098 5.28711 13.7376V12.2153V10.693C5.28737 10.6809 5.28737 10.6675 5.2873 10.6534C5.28724 10.6392 5.28711 10.6242 5.28711 10.6086L5.2869 10.6087L5.2867 10.6087C5.34405 9.88281 5.27732 9.143 5.08058 8.42405C4.88385 7.70509 4.55709 7.00699 4.0944 6.36448Z",
                                        fill: "white"
                                    }))))
                                }(t), r))
                            }
                            )))))
                    }
                }]) && c(a.prototype, r),
                Object.defineProperty(a, "prototype", {
                    writable: !1
                }),
                a;
            var a, r
        }(n.Component)
    }
    ,
    93923: (e, t, a) => {
        "use strict";
        a.r(t),
            a.d(t, {
                default: () => k
            });
        var n = a(96540)
            , r = a(35415)
            , o = (a(70159),
                a(31488))
            , i = a.n(o)
            , l = a(61038)
            , c = (a(84315),
                a(7452),
                a(72668),
                a(2789))
            , s = a(17951)
            , m = a(49531);
        const u = a.p + "logo.png";
        var d = a(25795)
            , _ = a.n(d)
            , p = a(86248)
            , f = a(86835);
        function h(e) {
            return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                h(e)
        }
        function y(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, b(n.key), n)
            }
        }
        function b(e) {
            var t = function (e, t) {
                if ("object" != h(e) || !e)
                    return e;
                var a = e[Symbol.toPrimitive];
                if (void 0 !== a) {
                    var n = a.call(e, "string");
                    if ("object" != h(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == h(t) ? t : t + ""
        }
        function g(e, t, a) {
            return t = w(t),
                function (e, t) {
                    if (t && ("object" == h(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, v() ? Reflect.construct(t, a || [], w(e).constructor) : t.apply(e, a))
        }
        function v() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (v = function () {
                return !!e
            }
            )()
        }
        function w(e) {
            return w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                w(e)
        }
        function E(e, t) {
            return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                E(e, t)
        }
        var k = function (e) {
            function t(e) {
                var a;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (a = g(this, t, [e])).onIsTabletOrBelow = a.onIsTabletOrBelow.bind(a),
                    a.state = {
                        collapse: 0,
                        dataComponentName: "Header",
                        userAgent: "",
                        maxTouchPoints: 1,
                        hideAppBanner: !1,
                        linkHover: !1,
                        isTabletOrBelow: !1,
                        isEpoc: !1
                    },
                    a
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
                    t && E(e, t)
            }(t, e),
                a = t,
                o = [{
                    key: "headerCTA",
                    value: function (e, t) {
                        (0,
                            l.$)(e, t, "Header", "Header")
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        this.isTabletMediaQuery.removeListener(this.onIsTabletOrBelow)
                    }
                }, {
                    key: "toggleMobileMenu",
                    value: function (e) {
                        var t = document.getElementById("nav-wrapper")
                            , a = e.currentTarget.nextElementSibling
                            , n = document.querySelectorAll(".open-nestedsubnav");
                        if (e.currentTarget.classList.contains("active-subnav")) {
                            a.classList.remove("open-subnav"),
                                e.currentTarget.classList.remove("active-subnav");
                            var r = document.getElementById("utility-bar");
                            r && (r.style.borderBottom = ".5px solid #0077b6"),
                                t && !this.state.isEpoc && (t.style.background = "#0077B6");
                            for (var o = 0; o < n.length; o++)
                                n[o].classList.remove("open-nestedsubnav");
                            this.setState({
                                collapse: 0
                            }),
                                document.querySelectorAll(".show-meganav").length > 0 && document.querySelectorAll(".show-meganav")[0].classList.remove("show-meganav")
                        } else
                            a.classList.add("open-subnav"),
                                e.currentTarget.classList.add("active-subnav"),
                                t && !this.state.isEpoc && (t.style.background = "#0077B6")
                    }
                }, {
                    key: "onIsTabletOrBelow",
                    value: function () {
                        this.setState({
                            isTabletOrBelow: this.isTabletMediaQuery.matches
                        })
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        this.isTabletMediaQuery = window.matchMedia("(max-width: 1080px)"),
                            this.isTabletMediaQuery.addListener(this.onIsTabletOrBelow),
                            this.onIsTabletOrBelow(),
                            (0,
                                l.pK)("Header", this.state.dataComponentName),
                            this.setState({
                                userAgent: navigator.userAgent,
                                maxTouchPoints: navigator.maxTouchPoints
                            });
                        var e = this.props.content && this.props.content.globaldata ? this.props.content.globaldata : ""
                            , t = "epoc" == this.props.content.siteIdentifier;
                        this.setState({
                            isEpoc: t
                        });
                        var a = e && e.header_type ? e.header_type : null
                            , n = "minimal_header_2_cta" === a || "minimal_header_1_cta" === a || "minimal_header_0_cta" === a
                            , r = !!(e && e.utility_nav && e.utility_nav && "1" === e.utility_nav);
                        if (!t && (n && r || !n)) {
                            var o = window.pageYOffset;
                            window.onscroll = function () {
                                var e = window.pageYOffset;
                                if (o > e) {
                                    document.getElementById("utility-bar") && (document.getElementById("utility-bar").style.maxHeight = "44px"),
                                        document.getElementById("mob-submenu") && (document.getElementById("mob-submenu").style.top = "108.5px"),
                                        document.getElementById("mob-menu") && (document.getElementById("mob-menu").style.top = "108.5px");
                                    var t = document.getElementsByClassName("show-meganav") && document.getElementsByClassName("show-meganav")[0] ? document.getElementsByClassName("show-meganav")[0] : "";
                                    t && (t.style.top = "108.5px"),
                                        document.getElementsByClassName("main-content") && document.getElementsByClassName("main-content")[0] && (document.getElementsByClassName("main-content")[0].style.top = "108px"),
                                        document.getElementsByClassName("footer-wrapper") && document.getElementsByClassName("footer-wrapper")[0] && (document.getElementsByClassName("footer-wrapper")[0].style.top = "108px");
                                    var a = document.getElementsByClassName(_()["re-subnav-cont"]);
                                    a && Array.from(a).map((function (e, t) {
                                        e && (e.style.top = "108.5px")
                                    }
                                    ))
                                } else if (o < e && e > 0) {
                                    document.getElementById("utility-bar") && (document.getElementById("utility-bar").style.maxHeight = "0"),
                                        document.getElementById("mob-submenu") && (document.getElementById("mob-submenu").style.top = "64.5px"),
                                        document.getElementById("mob-menu") && (document.getElementById("mob-menu").style.top = "64.5px");
                                    var n = document.getElementsByClassName("show-meganav") && document.getElementsByClassName("show-meganav")[0] ? document.getElementsByClassName("show-meganav")[0] : "";
                                    n && (n.style.top = "64.5px"),
                                        document.getElementsByClassName("main-content") && document.getElementsByClassName("main-content")[0] && (document.getElementsByClassName("main-content")[0].style.top = "64.5px"),
                                        document.getElementsByClassName("footer-wrapper") && document.getElementsByClassName("footer-wrapper")[0] && (document.getElementsByClassName("footer-wrapper")[0].style.top = "64.5px");
                                    var r = document.getElementsByClassName(_()["re-subnav-cont"]);
                                    r && Array.from(r).map((function (e, t) {
                                        e && (e.style.top = "64.5px")
                                    }
                                    ))
                                }
                                o = e
                            }
                        }
                    }
                }, {
                    key: "closeMegaNav",
                    value: function () {
                        var e = document.querySelectorAll("[class*=subnavigation-wrapper]")
                            , t = document.getElementById("nav-wrapper");
                        t && !this.state.isEpoc && (t.style.background = "#0077B6");
                        var a = document.getElementById("utility-bar");
                        if (a && (a.style.borderBottom = "none"),
                            e && e[0] && e[0].classList.contains("activate-meganav")) {
                            e[0].classList.remove("activate-meganav");
                            var n = document.querySelectorAll("[class*=show-meganav]")[0];
                            n && n.classList.remove("show-meganav"),
                                document.querySelectorAll(".active-menu")[0].classList.remove("active-menu"),
                                document.querySelectorAll(".active-submenu")[0].classList.remove("active-submenu"),
                                document.querySelector("[class*=navigation-overlay]").style.display = "none"
                        }
                    }
                }, {
                    key: "setCookie",
                    value: function () {
                        var e = new Date(Date.now() + 864e5);
                        e = e.toUTCString(),
                            window && (window.document.cookie = encodeURIComponent("appBanner") + "=true; expires=" + e)
                    }
                }, {
                    key: "getCookie",
                    value: function () {
                        var e;
                        try {
                            return (e = document.cookie.match(new RegExp("(?:^|; )" + "appBanner".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"))) ? decodeURIComponent(e[1]) : void 0
                        } catch (e) {
                            return
                        }
                    }
                }, {
                    key: "handleClose",
                    value: function () {
                        this.setState({
                            hideAppBanner: !0
                        }),
                            this.setCookie()
                    }
                }, {
                    key: "handleOnClick",
                    value: function (e) {
                        this.setState({
                            hideAppBanner: !0
                        }),
                            this.setCookie();
                        var t = "android" == e ? "https://epocratesapps.onelink.me/QUJC/de61omx5" : "https://epocratesapps.onelink.me/QUJC/gda5ob6t";
                        window && window.open(t, "_blank")
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this
                            , t = this.props.content && this.props.content.globaldata ? this.props.content.globaldata : ""
                            , a = this.props.content.siteIdentifier
                            , o = t && t.header_type ? t.header_type : null
                            , d = "ahcom" === a || "khub" === a
                            , h = t && t.site_logo && t.site_logo.rel_url ? t.site_logo.rel_url : r
                            , y = t && t.site_logo && t.site_logo.webp_image_url ? t.site_logo.webp_image_url : r
                            , b = t && t.minimal_header_footer && t.minimal_header_footer.logo && t.minimal_header_footer.logo.rel_url ? t.minimal_header_footer.logo.rel_url : h;
                        b = "minimal_header_2_cta" !== o && "minimal_header_1_cta" !== o && "minimal_header_0_cta" !== o ? h : b;
                        var g = t && t.minimal_header_footer && t.minimal_header_footer.logo && t.minimal_header_footer.logo.webp_image_url ? t.minimal_header_footer.logo.webp_image_url : y;
                        g = "minimal_header_2_cta" !== o && "minimal_header_1_cta" !== o && "minimal_header_0_cta" !== o ? y : g;
                        var v = !(!t || !t.clickable_logo || 1 !== t.clickable_logo)
                            , w = t && t.ah_mega_header ? t.ah_mega_header : ""
                            , E = "minimal_header_2_cta" !== o && "minimal_header_1_cta" !== o && "minimal_header_0_cta" !== o && 1 === w ? i().meganav : i().mediumnav
                            , k = "minimal_header_2_cta" === o || "minimal_header_1_cta" === o || "minimal_header_0_cta" === o ? "minimal-header" : ""
                            , C = "".concat("header-container--" + i()["header-container"], " ").concat(k + "--" + i()[k])
                            , N = "image/".concat((0,
                                l.yg)(b))
                            , O = "epoc" == a
                            , S = O ? "" : "23px"
                            , B = O ? "" : "152px"
                            , P = t && t.athena_login ? t.athena_login.anet_login : 0
                            , j = (P && t && t.athena_login && t.athena_login.anet_login_text && t.athena_login.anet_login_text,
                                P && t && t.athena_login && t.athena_login.login_newtab && t.athena_login.login_newtab,
                                P && t && t.athena_login && t.athena_login.anet_login_link && t.athena_login.anet_login_link,
                                t && t.athena_patient ? t.athena_patient.anet_patient : 0)
                            , x = (j && t.athena_patient.anet_patient_text && t.athena_patient.anet_patient_text,
                                j && t.athena_patient.patient_newtab,
                                j && t.athena_patient.anet_patient_link && t.athena_patient.anet_patient_link,
                                "minimal_header_2_cta" === o || "minimal_header_1_cta" === o || "minimal_header_0_cta" === o)
                            , L = !!(t && t.utility_nav && t.utility_nav && "1" === t.utility_nav)
                            , T = !O && !!(x && L || !x)
                            , A = !O
                            , M = T ? _()["header-container"] : ""
                            , I = T && !x ? _()["container-fluid-re"] : ""
                            , U = t && t.utility_nav_menu ? t.utility_nav_menu : {}
                            , H = n.createElement("img", {
                                src: u,
                                alt: "Athenahealth Logo",
                                className: i()["redesign-logo"]
                            })
                            , q = O ? "Nav|epocrates-logo" : "Nav|athenahealth-logo";
                        return n.createElement("section", {
                            className: "header-wrapper",
                            "data-componentname": this.state.dataComponentName
                        }, n.createElement("div", {
                            className: "ah-wraps"
                        }, n.createElement("div", {
                            id: "nav",
                            className: "".concat(i()["header-container"], " ").concat(M, " ").concat(i()[k], " ").concat(C, " ", "header-redesign")
                        }, !this.state.hideAppBanner && O && function () {
                            if (void 0 !== e.getCookie())
                                return null;
                            var t, a = e.state.userAgent, r = e.state.maxTouchPoints;
                            if (/iPad|iPhone|iPod/.test(a) && !window.MSStream || /Macintosh/i.test(a) && r && r > 1)
                                t = "ios";
                            else {
                                if (!/android/i.test(a))
                                    return null;
                                t = "android"
                            }
                            return n.createElement("div", {
                                className: "".concat(i().app_banner_wrap)
                            }, n.createElement("a", {
                                onClick: function () {
                                    return e.handleClose()
                                },
                                className: "".concat(i().app_close)
                            }, n.createElement("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20"
                            }, n.createElement("g", {
                                fill: "none",
                                "fill-rule": "evenodd",
                                stroke: "#fff",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "1.5"
                            }, n.createElement("path", {
                                d: "M.625 19.374L19.375.624M19.375 19.374L.625.624"
                            })))), n.createElement("div", {
                                className: "".concat(i().text_container)
                            }, n.createElement("p", {
                                className: "".concat(i().app_heading)
                            }, "Epocrates"), n.createElement("p", {
                                className: "".concat(i().app_subheading)
                            }, "Get it for free on the ", "android" == t ? "Play Store" : "App Store", ".")), n.createElement("a", {
                                className: "".concat(i().app_cta),
                                onClick: function () {
                                    return e.handleOnClick(t)
                                }
                            }, "Get"))
                        }(), T && n.createElement(f.default, {
                            utilityProps: U
                        }), n.createElement("div", {
                            id: "nav-wrapper",
                            className: "container-fluid " + I
                        }, n.createElement("header", {
                            className: "".concat(i().header, " ").concat(E),
                            onMouseLeave: function () {
                                return e.closeMegaNav(i())
                            }
                        }, n.createElement("div", {
                            className: "".concat(i().ahlogo, " ahlogo"),
                            onClick: function (t) {
                                return e.headerCTA("CTA Link Clicked", q)
                            }
                        }, v || "minimal-header" !== k ? n.createElement("a", {
                            "data-link-type": "top",
                            "data-link-text": "header-logo",
                            "data-link-url": O ? "/discover" : "/",
                            className: i()["header-item-logo"],
                            href: O ? "/discover" : "/"
                        }, d ? H : n.createElement("picture", {
                            className: "".concat(i().logo, " logo")
                        }, g && n.createElement("source", {
                            srcSet: "".concat(g),
                            type: "image/webp"
                        }), n.createElement("source", {
                            srcSet: b,
                            type: N
                        }), n.createElement("img", {
                            height: S,
                            width: B,
                            src: b,
                            alt: "Athenahealth",
                            className: "".concat(i().logo, " logo")
                        }))) : n.createElement("span", {
                            className: i()["header-item-logo"]
                        }, d ? H : n.createElement("picture", {
                            className: i().logo
                        }, g && n.createElement("source", {
                            srcSet: "".concat(g),
                            type: "image/webp"
                        }), n.createElement("source", {
                            srcSet: b,
                            type: N
                        }), n.createElement("img", {
                            src: b,
                            alt: "Athenahealth",
                            className: i().logo
                        })))), "minimal_header_2_cta" !== o && "minimal_header_1_cta" !== o && "minimal_header_0_cta" !== o ? n.createElement("div", {
                            className: "".concat(i()["navlines-wrapper"], " ").concat("navlines-wrapper--" + i()["navlines-wrapper"]),
                            onClick: function (t) {
                                return e.toggleMobileMenu(t)
                            }
                        }, n.createElement("div", {
                            className: i().navlines
                        }, n.createElement("span", null), n.createElement("span", null), n.createElement("span", null)), n.createElement("p", null)) : "", "minimal_header_2_cta" !== o && 1 != w && "minimal_header_1_cta" !== o && "minimal_header_0_cta" !== o ? n.createElement(c.default, {
                            content: t,
                            siteIdentifier: a
                        }) : "", "minimal_header_2_cta" === o || "minimal_header_1_cta" === o || "minimal_header_0_cta" === o ? n.createElement(s.default, {
                            isUtilityEnabled: T,
                            content: this.props.content
                        }) : "", A && !x && n.createElement(p.default, {
                            content: t,
                            closeMegaNav: this.closeMegaNav.bind(this),
                            isUtilityEnabled: T,
                            shouldRenderRedesignStyles: d
                        }))), n.createElement(m.default, null))))
                    }
                }],
                o && y(a.prototype, o),
                Object.defineProperty(a, "prototype", {
                    writable: !1
                }),
                a;
            var a, o
        }(n.Component)
    }
    ,
    2789: (e, t, a) => {
        "use strict";
        a.r(t),
            a.d(t, {
                default: () => C
            });
        var n = a(96540)
            , r = a(31488)
            , o = a.n(r);
        const i = a.p + "56d1217a340e00fba3de.png"
            , l = a.p + "07bdb308520dbf8f7b78.png";
        var c = a(61038)
            , s = a(29233)
            , m = a(96892)
            , u = a(2404)
            , d = a(51581)
            , _ = a(57532)
            , p = (a(84315),
                a(7452),
                a(71712));
        function f(e) {
            return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                f(e)
        }
        function h() {
            return h = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                        ({}).hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }
                ,
                h.apply(null, arguments)
        }
        function y(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, k(n.key), n)
            }
        }
        function b(e, t, a) {
            return t = v(t),
                function (e, t) {
                    if (t && ("object" == f(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, g() ? Reflect.construct(t, a || [], v(e).constructor) : t.apply(e, a))
        }
        function g() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (g = function () {
                return !!e
            }
            )()
        }
        function v(e) {
            return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                v(e)
        }
        function w(e, t) {
            return w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                w(e, t)
        }
        function E(e, t, a) {
            return (t = k(t)) in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
                e
        }
        function k(e) {
            var t = function (e, t) {
                if ("object" != f(e) || !e)
                    return e;
                var a = e[Symbol.toPrimitive];
                if (void 0 !== a) {
                    var n = a.call(e, "string");
                    if ("object" != f(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == f(t) ? t : t + ""
        }
        var C = function (e) {
            function t(e) {
                var a;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    E(a = b(this, t, [e]), "closePatientModal", (function () {
                        a.setState({
                            showModal: !1
                        })
                    }
                    )),
                    E(a, "openPatientModal", (function (e, t) {
                        if (e.preventDefault(),
                            t) {
                            var n = t.attached_modal_popup && t.attached_modal_popup.modal_data
                                , r = n.cta && n.cta.length > 0 ? n.cta[0] : null
                                , o = n.cta && n.cta.length > 0 && n.cta[1] ? n.cta[1] : null
                                , i = {
                                    confirmation_title: n.headline,
                                    headColor: n.headline_color,
                                    confirmation_message: n.description,
                                    imgUrl: n.image.rel_url,
                                    webpImgUrl: n.image.webp_image_url,
                                    imgAlt: n.image.options.alt,
                                    cta_1: null,
                                    cta_2: null
                                };
                            r && (i.cta_1 = {
                                ctaType: r.field_carousel_cta_type || "Link",
                                ctaLabel: r.field_cta_link.label,
                                ctaUrl: r.field_cta_link.link,
                                ctaStyle: r.field_cta_style && r.field_cta_style.field_cta_size && r.field_cta_style.field_cta_size.length > 0 && r.field_cta_style.field_cta_size[0] && r.field_cta_style.field_cta_size[0].value || "primary_default",
                                dataComponentName: "PatientModal",
                                dataMachineName: "patient_modal_confirmation",
                                index: 1
                            }),
                                o && (i.cta_2 = {
                                    ctaType: o.field_carousel_cta_type || "Link",
                                    ctaLabel: o.field_cta_link.label,
                                    ctaUrl: o.field_cta_link.link,
                                    ctaStyle: o.field_cta_style && o.field_cta_style.field_cta_size && o.field_cta_style.field_cta_size.length > 0 && o.field_cta_style.field_cta_size[0] && o.field_cta_style.field_cta_size[0].value || "primary_default",
                                    dataComponentName: "PatientModal",
                                    dataMachineName: "patient_modal_confirmation",
                                    index: 2
                                }),
                                a.setState({
                                    modalData: i,
                                    showModal: !0
                                })
                        }
                    }
                    )),
                    a.state = {
                        collapse: 0,
                        openGatedVideo: !1,
                        showHamburgerMenu: !1,
                        dataComponentName: "Header",
                        modalData: {},
                        showModal: !1
                    },
                    a.openPatientModal = a.openPatientModal.bind(a),
                    a.closePatientModal = a.closePatientModal.bind(a),
                    a
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
                    t && w(e, t)
            }(t, e),
                a = t,
                r = [{
                    key: "openNestedSubMenu",
                    value: function (e) {
                        var t = document.querySelectorAll(".open-nestedsubnav");
                        if (this.setState({
                            collapse: 0
                        }),
                            t.length > 0) {
                            for (var a = 0; a < t.length; a++)
                                t[a].classList.remove("open-nestedsubnav");
                            e.currentTarget.classList.add("open-nestedsubnav")
                        } else
                            e.currentTarget.classList.add("open-nestedsubnav")
                    }
                }, {
                    key: "closeNestedSubMenu",
                    value: function () {
                        document.querySelectorAll(".open-nestedsubnav")[0].classList.remove("open-nestedsubnav"),
                            this.setState({
                                collapse: 0
                            })
                    }
                }, {
                    key: "toggleCollapse",
                    value: function (e) {
                        var t = e && e.currentTarget.dataset.event;
                        this.setState({
                            collapse: this.state.collapse === Number(t) ? 0 : Number(t)
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e, t = this, a = this.state.collapse, r = this.props.content, f = r && Object.keys(r).indexOf("menu"), y = r && f > -1 && r.menu ? (0,
                            c.Ui)(r.menu).slice(0, 5) : [], b = this.props.siteIdentifier ? this.props.siteIdentifier : null, g = "ahcom" === b || "khub" === b, v = "epoc" === b, w = "", E = y && y.slice(0, 1).map((function (e, r) {
                                return n.createElement("div", {
                                    key: r
                                }, e.child && (0,
                                    c.Ui)(e.child).slice(1, 3).map((function (e, r) {
                                        return n.createElement(s.A, {
                                            className: "".concat(o()["nav-submenu-wrap"], " ").concat(o().mobile),
                                            key: r
                                        }, n.createElement(m.A, {
                                            onClick: function (e) {
                                                return t.toggleCollapse(e)
                                            },
                                            "data-event": r + 1,
                                            className: a === r + 1 ? "".concat(o()["card-header"], " ").concat(o().mobile, " ").concat(o()["up-arrow"]) : "".concat(o()["card-header"], " ").concat(o().mobile)
                                        }, e.child && (0,
                                            c.Ui)(e.child).map((function (e) {
                                                return e && e.url_str ? "" : e.name
                                            }
                                            ))), n.createElement(u.A, {
                                                className: o().collapse,
                                                isOpen: a === r + 1
                                            }, e.child && (0,
                                                c.Ui)(e.child).slice(0, 8).map((function (e, a) {
                                                    return n.createElement(d.A, {
                                                        className: "".concat(o()["card-body"], " ").concat(o()["nav-submenu-item"]),
                                                        key: a
                                                    }, e && e.url_str ? n.createElement("a", {
                                                        "data-link-type": "top",
                                                        "data-link-text": e.name,
                                                        "data-link-url": e.url_str,
                                                        href: e.url_str,
                                                        ref: t.myTabRef
                                                    }, e.name) : "")
                                                }
                                                ))))
                                    }
                                    )))
                            }
                            )), k = y && y.map((function (e, a) {
                                var r = (0,
                                    c.Ui)(e.child) && (0,
                                        c.Ui)(e.child).length <= 3 ? (0,
                                            c.Ui)(e.child).length : "3"
                                    , i = !!e.is_expanded && e.is_expanded
                                    , l = i ? "".concat(o().mobile, " ").concat(o().isExpanded) : o().mobile
                                    , s = e && e.name ? e.name.trim() : "";
                                return n.createElement("li", {
                                    className: "".concat(o()["nav-item"], " nav-item"),
                                    key: a
                                }, n.createElement("a", {
                                    className: o().desktop,
                                    href: e.url_str ? e.url_str : ""
                                }, e.name.trim()), n.createElement("a", {
                                    onClick: i ? null : function (e) {
                                        return t.openNestedSubMenu(e)
                                    }
                                    ,
                                    className: l
                                }, n.createElement("span", {
                                    style: {
                                        backgroundImage: "url(".concat(e.mobile_menu_icon ? e.mobile_menu_icon.rel_url : "", ")")
                                    }
                                }), e.name.trim(), i && n.createElement("div", {
                                    className: o()["subnavigation-wrap"]
                                }, e.child && (0,
                                    c.Ui)(e.child).slice(0, 3).map((function (e, a) {
                                        return (0,
                                            c.Ui)(e.child).length > 0 ? n.createElement("ul", {
                                                key: a,
                                                className: o()["nav-submenu-wrap"]
                                            }, e.child && (0,
                                                c.Ui)(e.child).slice(0, 8).map((function (e, a) {
                                                    var r = {}
                                                        , i = e && e.name ? e.name : "";
                                                    return e.attached_modal_popup && 0 != e.attached_modal_popup.length && (r.onClick = function (a) {
                                                        t.openPatientModal(a, e)
                                                    }
                                                    ),
                                                        n.createElement("li", {
                                                            key: a,
                                                            className: o()["nav-submenu-item"]
                                                        }, n.createElement("a", h({
                                                            onClick: function () {
                                                                return (0,
                                                                    c.Xt)(t.state.dataComponentName, "Header", s, i)
                                                            },
                                                            "data-link-type": "top",
                                                            "data-link-text": e.name,
                                                            "data-link-url": e.url_str ? e.url_str : "",
                                                            href: e.url_str ? e.url_str : "",
                                                            ref: t.myTabRef
                                                        }, r), e.name))
                                                }
                                                ))) : ""
                                    }
                                    )), (0,
                                        c.Ui)(e.child).length >= 3 ? n.createElement("div", {
                                            className: "".concat(o().mobile, " accordion")
                                        }, E) : "")), n.createElement("div", {
                                            className: o()["nav-" + r]
                                        }, n.createElement("div", {
                                            className: "".concat(o()["nav-mobileback"], " ").concat(o().mobile),
                                            onClick: function (e) {
                                                return t.closeNestedSubMenu(e)
                                            }
                                        }, e.name), n.createElement("div", {
                                            className: o()["subnavigation-wrap"]
                                        }, e.child && (0,
                                            c.Ui)(e.child).slice(0, 3).map((function (e, a) {
                                                return (0,
                                                    c.Ui)(e.child).length > 0 ? n.createElement("ul", {
                                                        key: a,
                                                        className: o()["nav-submenu-wrap"]
                                                    }, e.child && (0,
                                                        c.Ui)(e.child).slice(0, 8).map((function (e, a) {
                                                            var r = {}
                                                                , i = e && e.name ? e.name : "";
                                                            return e.attached_modal_popup && 0 != e.attached_modal_popup.length && (r.onClick = function (a) {
                                                                t.openPatientModal(a, e)
                                                            }
                                                            ),
                                                                n.createElement("li", {
                                                                    key: a,
                                                                    className: o()["nav-submenu-item"]
                                                                }, n.createElement("a", h({
                                                                    onClick: function () {
                                                                        return (0,
                                                                            c.Xt)(t.state.dataComponentName, "Header", s, i)
                                                                    },
                                                                    "data-link-type": "top",
                                                                    "data-link-text": e.name,
                                                                    "data-link-url": e.url_str ? e.url_str : "",
                                                                    href: e.url_str ? e.url_str : "",
                                                                    ref: t.myTabRef
                                                                }, r), e.name))
                                                        }
                                                        ))) : ""
                                            }
                                            )), (0,
                                                c.Ui)(e.child).length >= 3 ? n.createElement("div", {
                                                    className: "".concat(o().mobile, " accordion")
                                                }, E) : "")))
                            }
                            ));
                        return v ? (e = l,
                            w = "Epocrates") : (e = i,
                                w = "Athenahealth"),
                            n.createElement("div", {
                                className: o()["subnav-wrap"]
                            }, n.createElement("div", null, n.createElement("a", {
                                className: "".concat(o()["header-item-logo"], " ").concat(o().mobile),
                                href: "/",
                                ref: this.myTabRef
                            }, n.createElement("img", {
                                src: e,
                                alt: w,
                                className: o().logo
                            })), n.createElement("ul", {
                                className: "".concat(o()["nav-items"], " nav-items")
                            }, k)), n.createElement(_.default, {
                                content: r
                            }), this.state.showModal && n.createElement(p.default, {
                                open: this.state.showModal,
                                closeHandler: this.closePatientModal,
                                data: this.state.modalData,
                                isLogoModal: !0,
                                isAhcomOrKhub: g
                            }))
                    }
                }],
                r && y(a.prototype, r),
                Object.defineProperty(a, "prototype", {
                    writable: !1
                }),
                a;
            var a, r
        }(n.Component)
    }
    ,
    17951: (e, t, a) => {
        "use strict";
        a.r(t),
            a.d(t, {
                default: () => p
            });
        var n = a(96540)
            , r = a(80795)
            , o = a.n(r)
            , i = a(67739);
        function l(e) {
            return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                l(e)
        }
        function c(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, s(n.key), n)
            }
        }
        function s(e) {
            var t = function (e, t) {
                if ("object" != l(e) || !e)
                    return e;
                var a = e[Symbol.toPrimitive];
                if (void 0 !== a) {
                    var n = a.call(e, "string");
                    if ("object" != l(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == l(t) ? t : t + ""
        }
        function m(e, t, a) {
            return t = d(t),
                function (e, t) {
                    if (t && ("object" == l(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, u() ? Reflect.construct(t, a || [], d(e).constructor) : t.apply(e, a))
        }
        function u() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (u = function () {
                return !!e
            }
            )()
        }
        function d(e) {
            return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                d(e)
        }
        function _(e, t) {
            return _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                _(e, t)
        }
        var p = function (e) {
            function t(e) {
                var a;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (a = m(this, t, [e])).state = {
                        dataComponentName: "Header",
                        cmpId: !1
                    },
                    a.showVideoDemoButton = a.showVideoDemoButton.bind(a),
                    a
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
                    t && _(e, t)
            }(t, e),
                a = t,
                (r = [{
                    key: "showVideoDemoButton",
                    value: function () {
                        var e = window.pageYOffset || window.scrollY;
                        e >= 385 && document.querySelector("[class*='view-demo']") ? document.querySelector("[class*='view-demo']").classList.add("active") : e < 385 && document.querySelector("[class*='view-demo']") && document.querySelector("[class*='view-demo']").classList.remove("active")
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        var e = document.querySelectorAll("[class*=header-container]")[0];
                        e && e.classList.contains("minimal-header") && document.getElementsByTagName("body")[0].classList.add("minimal-header"),
                            document.querySelectorAll('[class*="insight-details-page"]')[0] && window.addEventListener("scroll", this.progressBar);
                        var t = this.props.content && this.props.content.queryStr
                            , a = this.props.content && this.props.content.globaldata ? this.props.content.globaldata : ""
                            , n = a.minimal_header_2_cta_2 && a.minimal_header_2_cta_2.cta_campaignid ? a.minimal_header_2_cta_2.cta_campaignid : "";
                        (t.hasOwnProperty("intcmp") || t.hasOwnProperty("camp") || t.hasOwnProperty("cmp")) && (t.intcmp !== n && t.camp !== n && t.cmp !== n || this.setState({
                            cmpId: !0
                        }));
                        var r = this.props.content && this.props.content.globaldata && this.props.content.globaldata.header_type ? this.props.content.globaldata.header_type : ""
                            , o = a && a.minimal_header_footer ? a.minimal_header_footer.anet_loginmh : 0
                            , i = a && a.minimal_header_footer && a.minimal_header_footer.anet_patientmh ? a.minimal_header_footer.anet_patientmh : 0;
                        this.props.isUtilityEnabled || document.body.classList.add("utility-disabled"),
                            "minimal_header_2_cta" === r ? (document.body.classList.add("minimal-header-2-cta"),
                                o && i ? document.body.classList.add("minimal-header-2-cta-2-links") : (o || i) && document.body.classList.add("minimal-header-2-cta-1-link")) : "minimal_header_1_cta" === r ? (document.body.classList.add("minimal-header-1-cta"),
                                    o && i ? document.body.classList.add("minimal-header-1-cta-2-links") : (o || i) && document.body.classList.add("minimal-header-1-cta-1-link")) : "minimal_header_0_cta" === r && (o && i ? document.body.classList.add("minimal-header-0-cta-2-links") : (o || i) && document.body.classList.add("minimal-header-0-cta-1-link"))
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props.content && this.props.content.globaldata ? this.props.content.globaldata : ""
                            , t = ("regular".concat(" ", "small", " ", "alertGreen"),
                                "regular".concat(" ", "small", " ", o().reverseGreen),
                                e && e.header_type ? e.header_type : null)
                            , a = "minimal_header_0_cta" === t ? "none" : "block"
                            , r = e.webform_config && e.webform_config.schedule_meeting_label ? e.webform_config.schedule_meeting_label : ""
                            , l = e.webform_config && e.webform_config.schedule_meeting_page_url ? e.webform_config.schedule_meeting_page_url : ""
                            , c = e.webform_config && e.webform_config.schedule_meeting ? e.webform_config.schedule_meeting : null
                            , s = e.webform_config && e.webform_config.global_cta_type ? e.webform_config.global_cta_type : "form"
                            , m = e.webform_config && e.webform_config.global_cta_text ? e.webform_config.global_cta_text : ""
                            , u = e.webform_config && e.webform_config.global_cta_link ? e.webform_config.global_cta_link : "#"
                            , d = e.webform_config && e.webform_config.global_cta_link_target && 1 == e.webform_config.global_cta_link_target ? "_blank" : ""
                            , _ = (e && e.minimal_header_footer && e.minimal_header_footer.meeting_cta && e.minimal_header_footer.meeting_cta,
                                e && e.minimal_header_cta ? e.minimal_header_cta : "")
                            , p = (_ && _.cta_type && _.cta_type,
                                _ && _.cta_label && _.cta_label,
                                _ && _.cta_form && _.cta_form,
                                _ && _.cta_link && _.cta_link,
                                _ && _.cta_video && _.cta_video.video_id[0].value,
                                _ && _.cta_asset && _.cta_asset,
                                e && e.minimal_header_footer)
                            , f = p ? e.minimal_header_footer.anet_loginmh : 0
                            , h = f && p && e.minimal_header_footer.anet_login_textmh ? e.minimal_header_footer.anet_login_textmh : ""
                            , y = f && p && e.minimal_header_footer.login_newtabmh && 1 === e.minimal_header_footer.login_newtabmh ? "_blank" : ""
                            , b = f && p && e.minimal_header_footer.anet_login_linkmh ? e.minimal_header_footer.anet_login_linkmh : ""
                            , g = e && e.enable_patient_link ? e.enable_patient_link : 0
                            , v = g && e.minimal_header_footer.anet_patient_textmh ? e.minimal_header_footer.anet_patient_textmh : ""
                            , w = g && e.minimal_header_footer.anet_patient_linkmh ? e.minimal_header_footer.anet_patient_linkmh : ""
                            , E = g && e.minimal_header_footer.patient_newtabmh && 1 === e.minimal_header_footer.patient_newtabmh ? "_blank" : ""
                            , k = e && e.minimal_header_1_cta
                            , C = k && e.minimal_header_1_cta.cta_label ? e.minimal_header_1_cta.cta_label : ""
                            , N = k && e.minimal_header_1_cta.cta_type ? e.minimal_header_1_cta.cta_type : ""
                            , O = k && e.minimal_header_1_cta.cta_form ? e.minimal_header_1_cta.cta_form : "form"
                            , S = k && e.minimal_header_1_cta.cta_link ? e.minimal_header_1_cta.cta_link : "link"
                            , B = k && e.minimal_header_1_cta.cta_style ? e.minimal_header_1_cta.cta_style : ""
                            , P = e && e.minimal_header_2_cta_1
                            , j = e && e.minimal_header_2_cta_2
                            , x = P && e.minimal_header_2_cta_1.cta_label ? e.minimal_header_2_cta_1.cta_label : ""
                            , L = P && e.minimal_header_2_cta_1.cta_type ? e.minimal_header_2_cta_1.cta_type : ""
                            , T = P && e.minimal_header_2_cta_1.cta_form ? e.minimal_header_2_cta_1.cta_form : "form"
                            , A = P && e.minimal_header_2_cta_1.cta_link ? e.minimal_header_2_cta_1.cta_link : "link"
                            , M = j && e.minimal_header_2_cta_2.cta_label ? e.minimal_header_2_cta_2.cta_label : ""
                            , I = (j && e.minimal_header_2_cta_2.cta_campaignid && e.minimal_header_2_cta_2.cta_campaignid,
                                j && e.minimal_header_2_cta_2.cta_type ? e.minimal_header_2_cta_2.cta_type : "")
                            , U = j && e.minimal_header_2_cta_2.cta_form ? e.minimal_header_2_cta_2.cta_form : "form"
                            , H = j && e.minimal_header_2_cta_2.cta_link ? e.minimal_header_2_cta_2.cta_link : "link"
                            , q = j && e.minimal_header_2_cta_2.cta_asset ? e.minimal_header_2_cta_2.cta_asset : ""
                            , D = j && e.minimal_header_2_cta_2.cta_video ? e.minimal_header_2_cta_2.cta_video.video_id[0].value : ""
                            , R = j && e.minimal_header_2_cta_2.cta_style ? e.minimal_header_2_cta_2.cta_style : ""
                            , F = P && e.minimal_header_2_cta_1.cta_style ? e.minimal_header_2_cta_1.cta_style : "";
                        return n.createElement("div", {
                            className: o()["subnav-wrap"]
                        }, n.createElement("div", {
                            className: o().ctas,
                            style: {
                                display: a
                            }
                        }, s && m && u || r && l ? n.createElement("div", {
                            className: "".concat(o()["schdl-meet"], " schdl-meet")
                        }, n.createElement(i.default, {
                            ctaType: "minimal_header_1_cta" === t ? N : "minimal_header_2_cta" === t ? L : s,
                            ctaUrl: "minimal_header_1_cta" === t && "link" === N ? S : "minimal_header_2_cta" === t && "link" === L ? A : "Link" == s ? u : "javascript:void(0)",
                            ctaLabel: "minimal_header_1_cta" === t ? C : "minimal_header_2_cta" === t ? x : "Link" == s ? m : r,
                            ctaStyle: B || F,
                            ctaFormID: "minimal_header_1_cta" === t ? O : "minimal_header_2_cta" === t ? T : c,
                            dataComponentName: this.state.dataComponentName,
                            screen: "desktop",
                            dataMachineName: "Header",
                            index: 1
                        }), n.createElement(i.default, {
                            ctaType: "minimal_header_1_cta" === t ? N : "minimal_header_2_cta" === t ? L : "link",
                            ctaUrl: "minimal_header_1_cta" === t && "link" === N ? S : "minimal_header_2_cta" === t && "link" === L ? A : "Link" == s ? u : "javascript:void(0)",
                            ctaLabel: "minimal_header_1_cta" === t ? C : "minimal_header_2_cta" === t ? x : "Link" == s ? m : r,
                            ctaStyle: B || F,
                            ctaFormID: "minimal_header_1_cta" === t ? O : "minimal_header_2_cta" === t ? T : c,
                            dataComponentName: this.state.dataComponentName,
                            dataMachineName: "Header",
                            screen: "mobile",
                            ctaLinkTarget: "Link" == s ? d : "",
                            index: 2
                        })) : "", "minimal_header_2_cta" === t && n.createElement("div", {
                            className: "".concat(o()["view-demo"], " ").concat("view-demo--" + o()["view-demo"])
                        }, n.createElement(i.default, {
                            ctaType: I,
                            ctaUrl: H,
                            ctaLabel: M,
                            ctaStyle: R,
                            ctaFormID: U,
                            ctaAssetFormID: U,
                            ctaVideoID: D,
                            ctaAsset: q,
                            dataComponentName: this.state.dataComponentName,
                            dataMachineName: "Header",
                            campaignId: this.state.cmpId,
                            index: 3
                        }))), n.createElement("div", {
                            className: o()["extra-links-wrap"]
                        }, 1 === g ? n.createElement("div", {
                            className: "".concat(o().clientlogin, " ").concat(o().patientlogin)
                        }, n.createElement("a", {
                            href: w,
                            target: E
                        }, v)) : "", 1 === f ? n.createElement("div", {
                            className: o().clientlogin
                        }, n.createElement("a", {
                            href: b,
                            target: y
                        }, h)) : ""))
                    }
                }]) && c(a.prototype, r),
                Object.defineProperty(a, "prototype", {
                    writable: !1
                }),
                a;
            var a, r
        }(n.Component)
    }
    ,
    49531: (e, t, a) => {
        "use strict";
        a.r(t),
            a.d(t, {
                default: () => _
            });
        var n = a(96540)
            , r = a(31488)
            , o = a.n(r);
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
        function l(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, c(n.key), n)
            }
        }
        function c(e) {
            var t = function (e, t) {
                if ("object" != i(e) || !e)
                    return e;
                var a = e[Symbol.toPrimitive];
                if (void 0 !== a) {
                    var n = a.call(e, "string");
                    if ("object" != i(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == i(t) ? t : t + ""
        }
        function s(e, t, a) {
            return t = u(t),
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
                }(e, m() ? Reflect.construct(t, a || [], u(e).constructor) : t.apply(e, a))
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
        function u(e) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                u(e)
        }
        function d(e, t) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                d(e, t)
        }
        var _ = function (e) {
            function t(e) {
                var a;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (a = s(this, t, [e])).state = {
                        visibleProgressBar: !1
                    },
                    a.progressBar = a.progressBar.bind(a),
                    a
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
                a = t,
                (r = [{
                    key: "progressBar",
                    value: function () {
                        if (screen.width >= 768) {
                            var e = document.body.scrollTop || document.documentElement.scrollTop
                                , t = document.documentElement.scrollHeight - document.documentElement.clientHeight
                                , a = document.querySelectorAll('[class*="AhHeader"]')[0] ? document.querySelectorAll('[class*="AhHeader"]')[0].offsetHeight : 0
                                , n = document.querySelectorAll('[class*="khub-details-header-wrapper"]')[0] ? document.querySelectorAll('[class*="khub-details-header-wrapper"]')[0].offsetHeight : 0
                                , r = (document.querySelectorAll('[class*="might-like-wrapper"]')[0] ? document.querySelectorAll('[class*="might-like-wrapper"]')[0].offsetHeight : 0) + n;
                            e >= a ? (e -= a,
                                this.setState((function (e) {
                                    return {
                                        visibleProgressBar: !0
                                    }
                                }
                                ), (function () {
                                    var a = e / (t - r) * 100;
                                    document.getElementById("scrollProgressBar").style.width = a + "%"
                                }
                                ))) : this.setState({
                                    visibleProgressBar: !1
                                })
                        } else
                            this.setState({
                                visibleProgressBar: !1
                            })
                    }
                }, {
                    key: "render",
                    value: function () {
                        return n.createElement(n.Fragment, null, 1 == this.state.visibleProgressBar && n.createElement("div", {
                            className: "".concat(o()["page-progress-bar-wrapper"])
                        }, n.createElement("div", {
                            className: "".concat(o()["progress-container"])
                        }, n.createElement("div", {
                            className: "".concat(o()["progress-bar"]),
                            id: "scrollProgressBar"
                        }))))
                    }
                }]) && l(a.prototype, r),
                Object.defineProperty(a, "prototype", {
                    writable: !1
                }),
                a;
            var a, r
        }(n.Component)
    }
    ,
    70159: e => {
        e.exports = {
            "sans-serif": "NwE3P",
            serif: "LAASS",
            fw400: "mFjfK",
            fw500: "FHkYJ",
            fw600: "KmMWF",
            fw700: "wFdWa",
            fs80: "bNv_7",
            fs68: "FhrmT",
            fs56: "AEyGB",
            fs46: "gyueY",
            fs36: "arL3L",
            fs28: "Bj_mp",
            fs22: "SkmWZ",
            fs20: "gwfBV",
            fs18: "CB2ix",
            fs16: "azupe",
            "inherit-parent-typo": "KRbYd",
            heading: "tgdz3",
            subheading: "s0zNG",
            "item-heading": "T9OHB",
            h1: "XkANF",
            h2: "G04XA",
            h3: "pNnFm",
            h4: "mgmqN",
            h5: "jH8az",
            h6: "nycVU",
            "ahf-wrap": "qyW5H",
            "right-section-form": "ZfL9L",
            "ahffield-radio": "G9E_6"
        }
    }
    ,
    31488: e => {
        e.exports = {
            "header-container": "te2tq",
            "page-progress-bar-wrapper": "MhZiX",
            fadein: "xo3rM",
            "progress-container": "tKeRb",
            "progress-bar": "xdtFE",
            header: "SddLs",
            logo: "m0I7P",
            ahlogo: "UYAWj",
            meganav: "Pcd68",
            "nav-items": "Anj12",
            "nav-item": "BIWqj",
            "nav-submenu-wrap": "U9LXf",
            "nav-submenu-item": "O7KoG",
            "schdl-meet": "LfqWV",
            "navlines-wrapper": "YxLnJ",
            "nav-mobileback": "dVo62",
            "subnavigation-wrap": "o3dT_",
            "card-header": "MJ4Oc",
            "nav-1": "h550O",
            "nav-2": "kc2Fr",
            "nav-3": "YqHs0",
            mediumnav: "em8l4",
            "minimal-header": "aHD59",
            "simplified-header": "Ci85t",
            mobile: "vjvQS",
            desktop: "Zp97Y",
            "mobile-submenu-link": "sAoqS",
            "subnav-wrap": "yIEy7",
            "header-item-logo": "gWOhB",
            navlines: "o10_r",
            isExpanded: "M_f1c",
            "up-arrow": "vQY5r",
            collapse: "whwmL",
            "card-body": "rB9Cj",
            "subnavigation-wrapper": "TkyRQ",
            clientlogin: "ZmPX0",
            app_banner_wrap: "taxkI",
            app_cta: "sUXvK",
            text_container: "Szrws",
            app_heading: "xsQxs",
            app_close: "OcFEV",
            "redesign-logo": "ERK5A"
        }
    }
    ,
    35415: (e, t, a) => {
        "use strict";
        e.exports = a.p + "2d2a8c051d129d563f39.png"
    }
}]);
