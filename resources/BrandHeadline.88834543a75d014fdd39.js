(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[7134, 9151], {
    22401: (l, e, n) => {
        "use strict";
        n.r(e),
            n.d(e, {
                default: () => _
            });
        var a = n(96540)
            , i = n(13195)
            , t = n.n(i)
            , o = n(67739)
            , d = n(39642)
            , r = n(61038)
            , u = n(29184);
        function c() {
            return c = Object.assign ? Object.assign.bind() : function (l) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var a in n)
                        ({}).hasOwnProperty.call(n, a) && (l[a] = n[a])
                }
                return l
            }
                ,
                c.apply(null, arguments)
        }
        n(62752);
        var v = function (l) {
            var e, n, i, u, v, _, s, m, p, f, h, b, y, g, k, N, O, E, L, D, A, I, C, B, M, S, H, T, U = l.componentOrder, j = l.componentId, F = l.componentName, K = l.headline, P = l.headlineLevel, x = l.ctaProp, z = l.theme, G = l.variant, q = l.globalData;
            (0,
                a.useEffect)((function () {
                    (0,
                        r.pK)(j, F)
                }
                ), []);
            var w = [t()["brand-headline-container"]];
            "enterprise" === z && w.push(t().enterprise),
                "primary_sm" === G && w.push(t()["primary-small"]);
            var Q = {
                style: {
                    backgroundColor: (null == q ? void 0 : q.backround_color) || void 0,
                    paddingTop: (null == q || null === (e = q.container) || void 0 === e ? void 0 : e.padding_top) || void 0,
                    paddingBottom: (null == q || null === (n = q.container) || void 0 === n ? void 0 : n.padding_bottom) || void 0
                }
            };
            return a.createElement("section", c({
                className: w.join(" "),
                "data-componentname": F,
                "data-componentid": j,
                "component-order": U
            }, Q), a.createElement(d.default, {
                className: t()["brand-headline"],
                level: P,
                value: K
            }), x && a.createElement("div", {
                className: t()["brand-headline-cta"]
            }, a.createElement(o.default, {
                ctaType: null !== (i = null == x || null === (u = x[0]) || void 0 === u ? void 0 : u.field_carousel_cta_type) && void 0 !== i ? i : "",
                ctaUrl: null !== (v = null == x || null === (_ = x[0]) || void 0 === _ || null === (s = _.field_cta_link) || void 0 === s ? void 0 : s.link) && void 0 !== v ? v : "",
                ctaLabel: null !== (m = null == x || null === (p = x[0]) || void 0 === p || null === (f = p.field_cta_link) || void 0 === f ? void 0 : f.label) && void 0 !== m ? m : "",
                ctaStyle: null !== (h = null == x || null === (b = x[0]) || void 0 === b || null === (y = b.field_cta_style) || void 0 === y || null === (g = y.field_cta_size) || void 0 === g || null === (k = g[0]) || void 0 === k ? void 0 : k.value) && void 0 !== h ? h : "",
                ctaFormID: null !== (N = null == x || null === (O = x[0]) || void 0 === O || null === (E = O.field_carousel_gated_form) || void 0 === E ? void 0 : E.value) && void 0 !== N ? N : "",
                ctaVideoID: null !== (L = null == x || null === (D = x[0]) || void 0 === D || null === (A = D.field_cta_brightcove_video) || void 0 === A || null === (I = A.video_id) || void 0 === I || null === (C = I[0]) || void 0 === C ? void 0 : C.value) && void 0 !== L ? L : "",
                dataComponentName: F,
                dataMachineName: j,
                ctaIcon: null !== (B = null == x || null === (M = x[0]) || void 0 === M || null === (S = M.field_cta_style) || void 0 === S || null === (H = S.field_cta_icon_location) || void 0 === H || null === (T = H[0]) || void 0 === T ? void 0 : T.value) && void 0 !== B ? B : ""
            })))
        };
        const _ = function (l) {
            var e, n = l.componentOrder, i = l.itemContent, t = i.body, o = i.field_element_container, d = i.field_cta, r = i.field_brand_headline_var_theme, c = i.field_brand_headline_variant, _ = i.global_data, s = (0,
                u.k)(t, ""), m = (0,
                    u.k)(o, ""), p = d, f = (0,
                        u.k)(r, ""), h = (0,
                            u.k)(c, ""), b = (null == _ || null === (e = _[0]) || void 0 === e ? void 0 : e.global_settings) || void 0;
            return a.createElement(v, {
                componentOrder: n,
                componentId: "brand_headline",
                componentName: "Brand Headline",
                headline: s,
                headlineLevel: m,
                ctaProp: p,
                theme: f,
                variant: h,
                globalData: b
            })
        }
    }
    ,
    39642: (l, e, n) => {
        "use strict";
        n.r(e),
            n.d(e, {
                default: () => t
            });
        var a = n(96540)
            , i = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
        const t = function (l) {
            var e = l.className
                , n = l.level
                , t = l.value
                , o = (0,
                    a.useMemo)((function () {
                        return i.includes(n) ? n : "p"
                    }
                    ), [n]);
            return a.createElement(o, {
                className: e,
                dangerouslySetInnerHTML: {
                    __html: t
                }
            })
        }
    }
    ,
    29184: (l, e, n) => {
        "use strict";
        n.d(e, {
            k: () => a
        });
        var a = function (l, e) {
            var n, a;
            return null !== (n = null == l || null === (a = l[0]) || void 0 === a ? void 0 : a.value) && void 0 !== n ? n : e
        }
    }
    ,
    38351: (l, e, n) => {
        "use strict";
        n.d(e, {
            G: () => i
        });
        var a = n(29184)
            , i = function (l, e, n, i) {
                var t, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, d = Array.isArray(l) ? null !== (t = null == l ? void 0 : l[0]) && void 0 !== t ? t : {} : null != l ? l : {}, r = d.label, u = void 0 === r ? "" : r, c = d.style, v = d.link, _ = d.type || (0,
                    a.k)(null == c ? void 0 : c.field_cta_type);
                return {
                    ctaLabel: u,
                    ctaStyle: (0,
                        a.k)(null == c ? void 0 : c.field_cta_size),
                    ctaUrl: v,
                    ctaType: _,
                    dataComponentName: e,
                    dataMachineName: n,
                    index: o,
                    parentOrder: i,
                    ctaIcon: (0,
                        a.k)(null == c ? void 0 : c.field_cta_icon_location)
                }
            }
    }
    ,
    62752: (l, e, n) => {
        "use strict";
        n.d(e, {
            B: () => t
        });
        var a = n(96540)
            , i = n(38351)
            , t = function (l, e, n, t) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                return (0,
                    a.useMemo)((function () {
                        return (0,
                            i.G)(l, e, n, t, o)
                    }
                    ), [l, e, n, t, o])
            }
    }
    ,
    13195: l => {
        l.exports = {
            "brand-headline-container": "fgO53",
            "brand-headline": "sXOQW",
            "primary-small": "qlFE6",
            enterprise: "sFk61"
        }
    }
}]);
