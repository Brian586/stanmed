(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[5225, 3348, 4132, 5538], {
    1734: (e, t, n) => {
        "use strict";
        n.r(t),
            n.d(t, {
                default: () => i
            });
        var l = n(96540)
            , r = n(10421)
            , a = n.n(r);
        const o = n.p + "50f2cc43f83c66f44be5.svg"
            , i = function (e) {
                var t = e.handleBlockClick
                    , n = e.linkHref
                    , r = e.title
                    , i = e.eyebrow
                    , c = e.linkText
                    , u = e.isStatic;
                return l.createElement("a", {
                    href: n,
                    className: "".concat(a()["callout-block"], " ").concat(u ? a()["static-carousel"] : ""),
                    key: r,
                    onClick: function () {
                        return t(c)
                    }
                }, l.createElement("span", {
                    className: a()["callout-block-content-section"]
                }, i && l.createElement("span", {
                    className: a()["callout-block-eyebrow"]
                }, i), l.createElement("span", {
                    className: a()["callout-block-title"]
                }, r)), l.createElement("span", {
                    className: a()["callout-block-link-section"]
                }, l.createElement("span", {
                    className: a()["callout-block-link"]
                }, c, l.createElement("img", {
                    className: a()["callout-block-img"],
                    alt: "",
                    src: o
                }))))
            }
    }
    ,
    45836: (e, t, n) => {
        "use strict";
        n.r(t),
            n.d(t, {
                default: () => S
            });
        var l = n(96540)
            , r = n(4589)
            , a = n(15327)
            , o = n(49350)
            , i = n.n(o)
            , c = n(61038)
            , u = n(29184)
            , s = n(90776)
            , d = n(1734)
            , f = n(48884)
            , m = n(42293)
            , v = n(45061)
            , p = n(81430)
            , b = n(21823)
            , y = n(47653);
        function h() {
            return h = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var l in n)
                        ({}).hasOwnProperty.call(n, l) && (e[l] = n[l])
                }
                return e
            }
                ,
                h.apply(null, arguments)
        }
        function _(e, t) {
            return function (e) {
                if (Array.isArray(e))
                    return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var l, r, a, o, i = [], c = !0, u = !1;
                    try {
                        if (a = (n = n.call(e)).next,
                            0 === t) {
                            if (Object(n) !== n)
                                return;
                            c = !1
                        } else
                            for (; !(c = (l = a.call(n)).done) && (i.push(l.value),
                                i.length !== t); c = !0)
                                ;
                    } catch (e) {
                        u = !0,
                            r = e
                    } finally {
                        try {
                            if (!c && null != n.return && (o = n.return(),
                                Object(o) !== o))
                                return
                        } finally {
                            if (u)
                                throw r
                        }
                    }
                    return i
                }
            }(e, t) || function (e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return g(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0
                }
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function g(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, l = Array(t); n < t; n++)
                l[n] = e[n];
            return l
        }
        var k = "swipe"
            , E = {
                callout_block: "Callout Block",
                testimonial_card: "Testimonial Card"
            };
        const S = function (e) {
            var t, n, o, g, S, w, O, j = e.componentOrder, L = e.itemContent, N = null == L ? void 0 : L.field_card_type, A = null !== (t = null == N || null === (n = N[0]) || void 0 === n ? void 0 : n.type) && void 0 !== t ? t : "", T = null !== (o = E[A]) && void 0 !== o ? o : "", x = "carousel_".concat(A), I = "Carousel ".concat(T), C = (0,
                u.k)(L.field_variant_carousel, ""), B = (0,
                    u.k)(L.field_variant_theme, ""), P = "enterprise" === B, D = (0,
                        u.k)(L.field_enable_autoplay, 0), q = (0,
                            u.k)(L.field_headline_formatted, ""), H = (0,
                                u.k)(L.field_bm_heading_configuration, ""), U = (0,
                                    u.k)(L.field_sub_headline_carousel, ""), R = L && L.field_bm_description ? L.field_bm_description : "", M = (0,
                                        a.A)("(max-width:1024px)", {
                                            noSsr: !0
                                        }), Q = M || !1, V = M && N.length > 3, W = C === k, X = "marquee" === C, F = "static" === C, K = F && i()["static-variant"], Z = {
                                            quoteTypography: (null == L || null === (g = L.field_carousel_headline_inputs) || void 0 === g || null === (S = g[0]) || void 0 === S ? void 0 : S.value) || "m-head",
                                            customerTypography: (null == L || null === (w = L.field_carousel_sub_input) || void 0 === w || null === (O = w[0]) || void 0 === O ? void 0 : O.value) || "m-sub"
                                        }, z = "progress_bar" === C, $ = (0,
                                            l.useRef)(null), G = (0,
                                                l.useRef)(null);
            (0,
                s.A)(G);
            var J = (0,
                p.j)()
                , Y = _((0,
                    l.useState)(J), 2)
                , ee = Y[0]
                , te = Y[1]
                , ne = _((0,
                    l.useState)(!1), 2)
                , le = ne[0]
                , re = ne[1]
                , ae = _((0,
                    l.useState)(!!D && !J), 2)
                , oe = ae[0]
                , ie = ae[1]
                , ce = function (e) {
                    var t = e ? e.trim().replace(/\s+/g, "-") : "";
                    (0,
                        c.$)("CTA Link Clicked", "Body|CTA|".concat(t), x, I)
                }
                , ue = function () {
                    te(!ee)
                };
            (0,
                l.useEffect)((function () {
                    if ((0,
                        c.pK)(x, I),
                        z) {
                        var e, t, n, l, r = null == $ || null === (e = $.current) || void 0 === e || null === (t = e.innerSlider) || void 0 === t || null === (n = t.list) || void 0 === n || null === (l = n.parentElement) || void 0 === l ? void 0 : l.querySelectorAll("ul.slick-dots li button");
                        null == r || r.forEach((function (e) {
                            return e.tabIndex = -1
                        }
                        ))
                    }
                }
                ), []),
                (0,
                    l.useEffect)((function () {
                        var e, t, n, l, r, a, o, c, u = null == $ || null === (e = $.current) || void 0 === e || null === (t = e.innerSlider) || void 0 === t || null === (n = t.list) || void 0 === n || null === (l = n.parentElement) || void 0 === l ? void 0 : l.querySelector("ul.slick-dots");
                        ee ? (null == $ || null === (r = $.current) || void 0 === r || r.slickPause(),
                            z && (null == u || null === (a = u.classList) || void 0 === a || a.add(i()["stop-animation"]))) : (ie(!0),
                                null == $ || null === (o = $.current) || void 0 === o || o.slickPlay(),
                                z && (null == u || null === (c = u.classList) || void 0 === c || c.remove(i()["stop-animation"])))
                    }
                    ), [ee]);
            var se = {
                arrows: !1,
                dots: !0,
                draggable: !0,
                slidesToScroll: 2,
                slidesToShow: 2,
                variableWidth: !0,
                infinite: !1,
                responsive: [{
                    breakpoint: 700,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        infinite: !1
                    }
                }]
            }
                , de = {
                    accessibility: !1,
                    arrows: !1,
                    autoplay: oe,
                    autoplaySpeed: 5e3,
                    cssEase: "ease-in-out",
                    dots: !1,
                    infinite: !0,
                    onInit: function () {
                        re(!0)
                    },
                    pauseOnHover: !1,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipeToSlide: !0,
                    speed: 500,
                    variableWidth: !0
                }
                , fe = null == N ? void 0 : N.map((function (e) {
                    var t, n;
                    if ("callout_block" !== e.type)
                        return null;
                    var r = l.createElement(d.default, {
                        handleBlockClick: ce,
                        linkHref: null !== (t = null === (n = e.field_callout_block_cta_target[0]) || void 0 === n ? void 0 : n.uri) && void 0 !== t ? t : "",
                        title: e.field_callout_block_headline,
                        eyebrow: e.field_callout_block_eyebrow,
                        linkText: e.field_callout_block_cta_text,
                        key: V ? e.field_callout_block_headline : void 0,
                        isStatic: F
                    });
                    return V ? r : l.createElement("li", {
                        key: e.field_callout_block_headline
                    }, r)
                }
                ))
                , me = null == N ? void 0 : N.map((function (e, t) {
                    if ("testimonial_card" !== e.type)
                        return null;
                    var n = t >= 0 ? t % 4 + 1 : (t + 4) % 4;
                    return l.createElement(f.default, {
                        key: t,
                        content: {
                            quote: e.field_quote_copy,
                            attribution: e.field_customer_name,
                            variant: n
                        }
                    })
                }
                ))
                , ve = ee ? l.createElement("button", {
                    onClick: ue,
                    "aria-label": "play"
                }, l.createElement("img", {
                    src: v,
                    alt: "play slides icon",
                    className: i().playButton
                })) : l.createElement("button", {
                    onClick: ue,
                    "aria-label": "pause"
                }, l.createElement("img", {
                    src: m,
                    alt: "pause slides icon",
                    className: i().pauseButton
                }))
                , pe = (0,
                    c.y_)(L.global_data)
                , be = pe.containerStyles
                , ye = pe.hasTopDivider
                , he = pe.hasBottomDivider
                , _e = pe.border
                , ge = {
                    backgroundColor: pe.background,
                    paddingBottom: be.paddingBottom,
                    paddingTop: be.paddingTop,
                    margin: "0 auto"
                };
            return l.createElement("div", null, l.createElement(y.default, {
                visibility: ye,
                borderStyle: _e
            }), l.createElement("section", {
                style: ge,
                className: "component-order carousel ".concat(C, "-variant ").concat(i()[B]),
                "data-componentname": I,
                "data-componentid": x,
                "component-order": j,
                role: Q ? "region" : void 0,
                "aria-label": Q ? "Carousel with ".concat(N.length, " slides") : void 0
            }, (q || U) && l.createElement("div", {
                className: "".concat(i()["headers-wrapper"], " ").concat(F ? i()["static-header"] : void 0, " ").concat(!le && X ? i().animate : void 0)
            }, q && l.createElement("div", {
                as: H,
                className: i().headline
            }, q), U && l.createElement("div", {
                className: i().subHeadline
            }, U), R && l.createElement("div", {
                className: i().description,
                dangerouslySetInnerHTML: {
                    __html: R
                }
            })), X && l.createElement("div", {
                className: le ? X ? i().animate : void 0 : i().hide
            }, l.createElement("div", {
                className: "sr-only",
                tabIndex: "0"
            }, me), l.createElement(r.A, h({
                ref: $
            }, de), me), X && ve), F && l.createElement("ul", {
                className: "".concat(i()["swipe-blocks-flex"], " ") + K
            }, fe), W && (V ? l.createElement(r.A, se, fe) : l.createElement("ul", {
                className: i()["".concat(fe.length > 3 ? "swipe-blocks" : "swipe-blocks-flex")],
                ref: G
            }, fe)), z && l.createElement("div", {
                className: le ? X ? i().animate : void 0 : i().hide
            }, l.createElement(b.default, {
                cards: N,
                componentOrder: j,
                isEnterprise: P,
                isPaused: ee,
                playPause: ue,
                setInitialized: re,
                ref: $,
                shouldAutoplay: oe,
                variantTheme: B,
                Typography: Z
            }))), l.createElement(y.default, {
                visibility: he,
                borderStyle: _e
            }))
        }
    }
    ,
    47653: (e, t, n) => {
        "use strict";
        n.r(t),
            n.d(t, {
                default: () => c
            });
        var l = n(96540);
        function r(e) {
            return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                r(e)
        }
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                t && (l = l.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    n.push.apply(n, l)
            }
            return n
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach((function (t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function i(e, t, n) {
            return (t = function (e) {
                var t = function (e, t) {
                    if ("object" != r(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var l = n.call(e, "string");
                        if ("object" != r(l))
                            return l;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == r(t) ? t : t + ""
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function c(e) {
            var t = e.visibility
                , n = void 0 !== t && t
                , r = e.borderStyle
                , a = e.style;
            if (!n)
                return null;
            var i = {
                style: o({
                    margin: " 0 auto",
                    borderRight: "0",
                    borderLeft: "0",
                    borderBottom: "0",
                    borderTop: r || "1px solid #d8d8d8",
                    maxWidth: "896px",
                    width: "calc(100% - 60px)",
                    minWidth: "315px"
                }, void 0 === a ? {} : a)
            };
            return l.createElement(l.Fragment, null, n && l.createElement("hr", i))
        }
    }
    ,
    48884: (e, t, n) => {
        "use strict";
        n.r(t),
            n.d(t, {
                default: () => s
            });
        var l = n(96540)
            , r = n(25390)
            , a = n.n(r)
            , o = n(143)
            , i = n(16038);
        const c = n.p + "69c5aa43cfff118aac02.svg"
            , u = n.p + "7945df9baa497b80883b.svg"
            , s = function (e) {
                var t = e.content
                    , n = t.quote
                    , r = t.attribution
                    , s = t.variant
                    , d = (0,
                        l.useRef)(null)
                    , f = {
                        QuoteIcon1: o,
                        QuoteIcon2: i,
                        QuoteIcon3: c,
                        QuoteIcon4: u
                    }
                    , m = s ? a()["variant-".concat(s)] : a()["variant-1"]
                    , v = "QuoteIcon".concat(s)
                    , p = s ? f[v] : o
                    , b = a()["content-container"] + " " + m
                    , y = a().citation + " " + m;
                return l.createElement("div", {
                    ref: d,
                    className: a()["testimony-container"]
                }, l.createElement("div", {
                    className: b
                }, l.createElement("div", {
                    className: a().content
                }, l.createElement("img", {
                    src: p,
                    className: a().icon,
                    "aria-hidden": "true",
                    alt: ""
                }), l.createElement("blockquote", null, l.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                }), l.createElement("br", null), r && l.createElement("cite", {
                    className: y
                }, r)))))
            }
    }
    ,
    90776: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => r
        });
        var l = n(96540);
        const r = function (e) {
            var t = (0,
                l.useCallback)((function () {
                    var t, n, l = null == e ? void 0 : e.current, r = !1;
                    l && (l.addEventListener("mousedown", (function (e) {
                        r = !0,
                            l.classList.add("active"),
                            t = e.pageX - l.offsetLeft,
                            n = l.scrollLeft
                    }
                    )),
                        l.addEventListener("mouseleave", (function () {
                            r = !1,
                                l.classList.remove("active")
                        }
                        )),
                        l.addEventListener("mouseup", (function () {
                            r = !1,
                                l.classList.remove("active")
                        }
                        )),
                        l.addEventListener("mousemove", (function (e) {
                            if (r) {
                                e.preventDefault();
                                var a = 2 * (e.pageX - l.offsetLeft - t);
                                l.scrollLeft,
                                    l.scrollLeft = n - a
                            }
                        }
                        )))
                }
                ));
            (0,
                l.useEffect)((function () {
                    null !== e && t()
                }
                ), [])
        }
    }
    ,
    81430: (e, t, n) => {
        "use strict";
        n.d(t, {
            j: () => a
        });
        var l = n(96540);
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, l = Array(t); n < t; n++)
                l[n] = e[n];
            return l
        }
        var a = function () {
            var e, t, n = "undefined" != typeof window ? window.matchMedia("(prefers-reduced-motion: reduce)") : null, a = (e = (0,
                l.useState)(!!n && n.matches),
                t = 2,
                function (e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var l, r, a, o, i = [], c = !0, u = !1;
                        try {
                            if (a = (n = n.call(e)).next,
                                0 === t) {
                                if (Object(n) !== n)
                                    return;
                                c = !1
                            } else
                                for (; !(c = (l = a.call(n)).done) && (i.push(l.value),
                                    i.length !== t); c = !0)
                                    ;
                        } catch (e) {
                            u = !0,
                                r = e
                        } finally {
                            try {
                                if (!c && null != n.return && (o = n.return(),
                                    Object(o) !== o))
                                    return
                            } finally {
                                if (u)
                                    throw r
                            }
                        }
                        return i
                    }
                }(e, t) || function (e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return r(e, t);
                        var n = {}.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                    }
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()), o = a[0], i = a[1];
            return (0,
                l.useEffect)((function () {
                    n && i(n.matches);
                    var e = function (e) {
                        i(e.matches)
                    };
                    return null == n || n.addEventListener("change", e),
                        function () {
                            return null == n ? void 0 : n.removeEventListener("change", e)
                        }
                }
                ), []),
                o
        }
    }
    ,
    10421: e => {
        e.exports = {
            "callout-block": "IZIiw",
            "static-carousel": "RJW2q",
            "callout-block-content-section": "ZjO8G",
            "callout-block-title": "IVaCQ",
            "callout-block-img": "nVnXj",
            "callout-block-eyebrow": "X_5uR",
            "callout-block-link-section": "jS_CZ",
            "callout-block-link": "fEywh"
        }
    }
    ,
    49350: e => {
        e.exports = {
            enterprise: "v_KCI",
            "headers-wrapper": "bWYyU",
            "static-header": "_UYQZ",
            headline: "nRbjX",
            subHeadline: "mzMxV",
            description: "zP5ja",
            hide: "gVLf8",
            animate: "qUsVF",
            fadeInFromBotton: "qmEj8",
            fadeIn: "E7sKT",
            "stop-animation": "ZVo_l",
            "swipe-blocks-flex": "wXuTk",
            "static-variant": "iyipW",
            "swipe-blocks": "MRsN5",
            pauseButton: "iNoHG",
            playButton: "UFIht"
        }
    }
    ,
    25390: e => {
        e.exports = {
            "testimony-container": "zqBjC",
            "content-container": "MUFkr",
            "variant-1": "loxVL",
            "variant-2": "sJ51O",
            "variant-3": "nBev4",
            "variant-4": "phPhp",
            content: "R70xU",
            icon: "uX03B",
            citation: "mBuyx"
        }
    }
}]);
