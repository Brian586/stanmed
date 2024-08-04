(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[6057, 9151, 5094], {
    39642: (e, t, r) => {
        "use strict";
        r.r(t),
            r.d(t, {
                default: () => l
            });
        var a = r(96540)
            , n = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
        const l = function (e) {
            var t = e.className
                , r = e.level
                , l = e.value
                , d = (0,
                    a.useMemo)((function () {
                        return n.includes(r) ? r : "p"
                    }
                    ), [r]);
            return a.createElement(d, {
                className: t,
                dangerouslySetInnerHTML: {
                    __html: l
                }
            })
        }
    }
    ,
    22345: (e, t, r) => {
        "use strict";
        r.r(t),
            r.d(t, {
                default: () => u
            });
        var a = r(96540)
            , n = r(62561)
            , l = r.n(n)
            , d = r(67739)
            , o = r(39642)
            , c = r(15327);
        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, a = Array(t); r < t; r++)
                a[r] = e[r];
            return a
        }
        const u = function (e) {
            var t, r, n, u, s, m, v, p, f, _, g, b, y, h, E, N, w, S, A, I, k, x = e.componentName, O = e.componentId, H = e.isStaggeredGridItem, L = e.eyebrow, C = e.heading, U = e.body, D = e.imageUrl, M = e.ctaProp, T = (0,
                c.A)("(max-width: 768px)", {
                    noSsr: !0
                }), G = (I = (0,
                    a.useState)(!T),
                    k = 2,
                    function (e) {
                        if (Array.isArray(e))
                            return e
                    }(I) || function (e, t) {
                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != r) {
                            var a, n, l, d, o = [], c = !0, i = !1;
                            try {
                                if (l = (r = r.call(e)).next,
                                    0 === t) {
                                    if (Object(r) !== r)
                                        return;
                                    c = !1
                                } else
                                    for (; !(c = (a = l.call(r)).done) && (o.push(a.value),
                                        o.length !== t); c = !0)
                                        ;
                            } catch (e) {
                                i = !0,
                                    n = e
                            } finally {
                                try {
                                    if (!c && null != r.return && (d = r.return(),
                                        Object(d) !== d))
                                        return
                                } finally {
                                    if (i)
                                        throw n
                                }
                            }
                            return o
                        }
                    }(I, k) || function (e, t) {
                        if (e) {
                            if ("string" == typeof e)
                                return i(e, t);
                            var r = {}.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name),
                                "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(e, t) : void 0
                        }
                    }(I, k) || function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()), j = G[0], F = G[1];
            return (0,
                a.useEffect)((function () {
                    F(!T)
                }
                ), [T]),
                a.createElement("div", {
                    className: "".concat(l()["product-card"], " ").concat(H ? l()["staggered-grid-item"] : "", " ").concat(l()[T && j ? "card-expanded" : ""])
                }, !!L && a.createElement(a.Fragment, null, a.createElement(o.default, {
                    className: l()["product-card-eyebrow"],
                    value: L
                }), a.createElement("button", {
                    className: "".concat(l()["plus-minus-button"], " ").concat(l()[T && j ? "expanded" : ""]),
                    "aria-expanded": j,
                    "aria-controls": "drawer",
                    id: "drawer-button",
                    onClick: function () {
                        F(!j)
                    }
                })), !!C && a.createElement(o.default, {
                    className: l()["product-card-headline"],
                    value: C
                }), a.createElement("div", {
                    id: T ? "drawer" : void 0,
                    role: T ? "region" : "generic",
                    "aria-labelledby": T ? "drawer-button" : void 0
                }, !!U && a.createElement("p", {
                    className: l()["product-card-text"],
                    dangerouslySetInnerHTML: {
                        __html: U
                    }
                }), D && a.createElement("img", {
                    className: l()["product-card-image"],
                    src: D,
                    alt: ""
                }), M && a.createElement("div", {
                    className: l()["product-card-button-container"]
                }, a.createElement("div", {
                    className: l()["product-card-button-wrapper"]
                }, a.createElement(d.default, {
                    ctaType: null !== (t = null == M ? void 0 : M.field_carousel_cta_type) && void 0 !== t ? t : "",
                    ctaUrl: null !== (r = null == M || null === (n = M.field_cta_link) || void 0 === n ? void 0 : n.link) && void 0 !== r ? r : "",
                    ctaLabel: null !== (u = null == M || null === (s = M.field_cta_link) || void 0 === s ? void 0 : s.label) && void 0 !== u ? u : "",
                    ctaStyle: null !== (m = null == M || null === (v = M.field_cta_style) || void 0 === v || null === (p = v.field_cta_size) || void 0 === p || null === (f = p[0]) || void 0 === f ? void 0 : f.value) && void 0 !== m ? m : "",
                    ctaFormID: null !== (_ = null == M || null === (g = M.field_carousel_gated_form) || void 0 === g ? void 0 : g.value) && void 0 !== _ ? _ : "",
                    ctaVideoID: null !== (b = null == M || null === (y = M.field_cta_brightcove_video) || void 0 === y || null === (h = y.video_id) || void 0 === h || null === (E = h[0]) || void 0 === E ? void 0 : E.value) && void 0 !== b ? b : "",
                    dataComponentName: x,
                    dataMachineName: O,
                    ctaIcon: null !== (N = null == M || null === (w = M.field_cta_style) || void 0 === w || null === (S = w.field_cta_icon_location) || void 0 === S || null === (A = S[0]) || void 0 === A ? void 0 : A.value) && void 0 !== N ? N : ""
                })))))
        }
    }
    ,
    84652: (e, t, r) => {
        "use strict";
        r.r(t),
            r.d(t, {
                default: () => s
            });
        var a = r(96540)
            , n = r(41658)
            , l = r.n(n)
            , d = r(39642)
            , o = r(22345)
            , c = r(61038)
            , i = r(29184)
            , u = function (e) {
                var t = e.componentOrder
                    , r = e.componentId
                    , n = e.componentName
                    , i = e.mainEyebrow
                    , u = e.mainHeadline
                    , s = e.mainHeadlineLevel
                    , m = e.items
                    , v = e.theme
                    , p = "staggered" === e.variant;
                return (0,
                    a.useEffect)((function () {
                        (0,
                            c.pK)(r, n)
                    }
                    ), []),
                    a.createElement("section", {
                        className: "".concat(l().container, " ").concat("enterprise" === v ? l().enterprise : ""),
                        "data-componentname": n,
                        "data-componentid": r,
                        "component-order": t
                    }, a.createElement("div", {
                        className: l()["product-cards-container"]
                    }, !!i && a.createElement(d.default, {
                        className: l()["product-cards-eyebrow"],
                        value: i
                    }), !!u && a.createElement(d.default, {
                        className: l()["product-cards-headline"],
                        value: u,
                        level: s
                    }), a.createElement("div", {
                        className: p ? l()["product-cards-staggered-grid"] : void 0
                    }, a.createElement("div", {
                        className: p ? l()["staggered-grid-offset"] : void 0
                    }), m.map((function (e, t) {
                        var l, d, c = null !== (l = null == e ? void 0 : e.card_cta) && void 0 !== l ? l : "";
                        return a.createElement(o.default, {
                            componentName: n,
                            componentId: r,
                            key: "".concat(e.eyebrow, "-").concat(t),
                            isStaggeredGridItem: p,
                            eyebrow: e.eyebrow,
                            heading: e.headline,
                            body: e.body,
                            imageUrl: null === (d = e.image) || void 0 === d ? void 0 : d.rel_url,
                            ctaProp: c
                        })
                    }
                    )))))
            };
        const s = function (e) {
            var t = e.componentOrder
                , r = e.itemContent
                , n = r.field_product_cards_eyebrow
                , l = r.field_product_cards_headline
                , d = r.field_element_container
                , o = r.field_product_cards_var_theme
                , c = r.field_product_cards_variant
                , s = (0,
                    i.k)(n, "")
                , m = (0,
                    i.k)(l, "")
                , v = (0,
                    i.k)(d, "")
                , p = (0,
                    i.k)(o, "")
                , f = (0,
                    i.k)(c, "");
            return a.createElement(u, {
                componentOrder: t,
                componentId: "product_cards",
                componentName: "Product Cards",
                mainEyebrow: s,
                mainHeadline: m,
                mainHeadlineLevel: v,
                theme: p,
                variant: f,
                items: r.field_cards
            })
        }
    }
    ,
    29184: (e, t, r) => {
        "use strict";
        r.d(t, {
            k: () => a
        });
        var a = function (e, t) {
            var r, a;
            return null !== (r = null == e || null === (a = e[0]) || void 0 === a ? void 0 : a.value) && void 0 !== r ? r : t
        }
    }
    ,
    62561: e => {
        e.exports = {
            "product-card": "SGwhB",
            "product-card-eyebrow": "Sk1eG",
            "product-card-headline": "UFsNu",
            "product-card-text-container": "DFCIT",
            "product-card-text": "UAqOO",
            "product-card-image": "NgG67",
            "product-card-button-container": "tHiC2",
            "product-card-button-wrapper": "MqAkR",
            "plus-minus-button": "j3Tbo",
            expanded: "oyNH1",
            "card-expanded": "dVCdM",
            "staggered-grid-item": "idFvZ"
        }
    }
    ,
    41658: e => {
        e.exports = {
            container: "Rxv_h",
            "product-cards-container": "b0_UP",
            "product-cards-eyebrow": "kOGg0",
            "product-cards-headline": "lWtNs",
            "product-cards-staggered-grid": "NHRUa",
            "staggered-grid-offset": "SntTp",
            enterprise: "d4X6A"
        }
    }
}]);
