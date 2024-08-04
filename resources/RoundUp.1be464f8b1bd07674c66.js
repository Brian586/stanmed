(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[5274, 9151], {
    39642: (e, n, t) => {
        "use strict";
        t.r(n),
            t.d(n, {
                default: () => l
            });
        var a = t(96540)
            , r = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
        const l = function (e) {
            var n = e.className
                , t = e.level
                , l = e.value
                , o = (0,
                    a.useMemo)((function () {
                        return r.includes(t) ? t : "p"
                    }
                    ), [t]);
            return a.createElement(o, {
                className: n,
                dangerouslySetInnerHTML: {
                    __html: l
                }
            })
        }
    }
    ,
    14061: (e, n, t) => {
        "use strict";
        t.r(n),
            t.d(n, {
                default: () => h
            });
        var a = t(96540)
            , r = t(46847)
            , l = t.n(r)
            , o = t(67739)
            , i = t(39642)
            , c = t(5555)
            , u = t(61038)
            , d = t(29184)
            , m = t(62752);
        function s(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, a = Array(n); t < n; t++)
                a[t] = e[t];
            return a
        }
        var v = "round_up"
            , f = "Round Up";
        const h = function (e) {
            var n, r, h, g = e.componentOrder, _ = e.itemContent, p = void 0 === _ ? {} : _, y = p.body, E = p.field_headline_formatted, N = p.field_element_container, w = p.field_cta, b = p.field_main_image, A = void 0 === b ? {} : b, k = p.field_sub_image, I = void 0 === k ? [] : k, S = (0,
                d.k)(E, ""), L = (0,
                    d.k)(y, ""), O = (0,
                        d.k)(N), x = null == A || null === (n = A.rel_url) || void 0 === n ? void 0 : n.rel_url, C = (0,
                            a.useRef)(), H = (r = (0,
                                a.useState)(!1),
                                h = 2,
                                function (e) {
                                    if (Array.isArray(e))
                                        return e
                                }(r) || function (e, n) {
                                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != t) {
                                        var a, r, l, o, i = [], c = !0, u = !1;
                                        try {
                                            if (l = (t = t.call(e)).next,
                                                0 === n) {
                                                if (Object(t) !== t)
                                                    return;
                                                c = !1
                                            } else
                                                for (; !(c = (a = l.call(t)).done) && (i.push(a.value),
                                                    i.length !== n); c = !0)
                                                    ;
                                        } catch (e) {
                                            u = !0,
                                                r = e
                                        } finally {
                                            try {
                                                if (!c && null != t.return && (o = t.return(),
                                                    Object(o) !== o))
                                                    return
                                            } finally {
                                                if (u)
                                                    throw r
                                            }
                                        }
                                        return i
                                    }
                                }(r, h) || function (e, n) {
                                    if (e) {
                                        if ("string" == typeof e)
                                            return s(e, n);
                                        var t = {}.toString.call(e).slice(8, -1);
                                        return "Object" === t && e.constructor && (t = e.constructor.name),
                                            "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? s(e, n) : void 0
                                    }
                                }(r, h) || function () {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()), D = H[0], M = H[1], B = D ? l().animate : "", R = (0,
                                    m.B)(w, f, v, g);
            return (0,
                a.useEffect)((function () {
                    function e() {
                        var e = C.current;
                        (0,
                            c.X)(e, 200) && M(!0)
                    }
                    function n(n) {
                        e()
                    }
                    return (0,
                        u.pK)(v, f),
                        e(),
                        window.addEventListener("scroll", n),
                        function () {
                            window.removeEventListener("scroll", n)
                        }
                }
                ), []),
                a.createElement("section", {
                    className: "".concat(l()["athena-one-container"], " ").concat(B),
                    ref: C,
                    "data-componentname": f,
                    "data-componentid": v,
                    "component-order": g
                }, a.createElement("div", {
                    className: l()["athena-one-circle"]
                }, a.createElement("div", {
                    className: l()["athena-one-circle-mask"]
                }, a.createElement("img", {
                    src: t(44252),
                    alt: ""
                })), a.createElement("div", {
                    className: l()["athena-one-center-image-container"]
                }, a.createElement("img", {
                    className: l()["athena-one-center-image"],
                    src: x,
                    alt: ""
                }))), I.map((function (e, n) {
                    var t;
                    return a.createElement("div", {
                        className: "".concat(l()["athena-one-image"], " ").concat(l()["athena-one-image-".concat(n + 1)]),
                        key: "athena-one-image-".concat(n + 1)
                    }, a.createElement("img", {
                        src: null == e || null === (t = e.rel_url) || void 0 === t ? void 0 : t.rel_url,
                        alt: ""
                    }))
                }
                )), a.createElement("div", {
                    className: l()["athena-one-text-container"]
                }, a.createElement(i.default, {
                    className: l()["athena-one-headline"],
                    level: O,
                    value: S
                }), a.createElement("p", {
                    className: l()["athena-one-text"],
                    dangerouslySetInnerHTML: {
                        __html: L
                    }
                }), a.createElement("div", {
                    className: l()["athena-one-cta-wrapper"]
                }, a.createElement(o.default, R))))
        }
    }
    ,
    29184: (e, n, t) => {
        "use strict";
        t.d(n, {
            k: () => a
        });
        var a = function (e, n) {
            var t, a;
            return null !== (t = null == e || null === (a = e[0]) || void 0 === a ? void 0 : a.value) && void 0 !== t ? t : n
        }
    }
    ,
    38351: (e, n, t) => {
        "use strict";
        t.d(n, {
            G: () => r
        });
        var a = t(29184)
            , r = function (e, n, t, r) {
                var l, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, i = Array.isArray(e) ? null !== (l = null == e ? void 0 : e[0]) && void 0 !== l ? l : {} : null != e ? e : {}, c = i.label, u = void 0 === c ? "" : c, d = i.style, m = i.link, s = i.type || (0,
                    a.k)(null == d ? void 0 : d.field_cta_type);
                return {
                    ctaLabel: u,
                    ctaStyle: (0,
                        a.k)(null == d ? void 0 : d.field_cta_size),
                    ctaUrl: m,
                    ctaType: s,
                    dataComponentName: n,
                    dataMachineName: t,
                    index: o,
                    parentOrder: r,
                    ctaIcon: (0,
                        a.k)(null == d ? void 0 : d.field_cta_icon_location)
                }
            }
    }
    ,
    5555: (e, n, t) => {
        "use strict";
        t.d(n, {
            X: () => a
        });
        var a = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            try {
                if (e) {
                    var t, a, r = e.getBoundingClientRect().top;
                    if ((null !== (t = null === (a = window) || void 0 === a ? void 0 : a.innerHeight) && void 0 !== t ? t : 0) - r > n)
                        return !0
                }
                return !1
            } catch (e) {
                return !0
            }
        }
    }
    ,
    62752: (e, n, t) => {
        "use strict";
        t.d(n, {
            B: () => l
        });
        var a = t(96540)
            , r = t(38351)
            , l = function (e, n, t, l) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                return (0,
                    a.useMemo)((function () {
                        return (0,
                            r.G)(e, n, t, l, o)
                    }
                    ), [e, n, t, l, o])
            }
    }
    ,
    46847: e => {
        e.exports = {
            "athena-one-container": "LvJNW",
            "athena-one-image": "cyiH_",
            "athena-one-image-1": "GkHXI",
            "athena-one-image-2": "v5GhO",
            "athena-one-image-3": "vA2wV",
            "athena-one-circle": "EfuDN",
            "athena-one-circle-mask": "SNfuT",
            "athena-one-center-image-container": "RE7xI",
            "athena-one-center-image": "BJX5w",
            "athena-one-text-container": "bY7SQ",
            "athena-one-headline": "RuZw0",
            "athena-one-text": "nkV7b",
            "athena-one-cta-wrapper": "J6ICp",
            animate: "dKWt4",
            growCircleImage: "gOnHK",
            moveImage1: "GDSHw",
            moveImage2: "wRxkf",
            moveImage3: "JsqmP",
            growCircle: "cM8L7",
            fadeIn: "Mem54"
        }
    }
    ,
    44252: (e, n, t) => {
        "use strict";
        e.exports = t.p + "d58fe7cf43a2845b6023.png"
    }
}]);
