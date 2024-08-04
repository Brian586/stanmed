(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[9227], {
    42982: (l, a, n) => {
        "use strict";
        n.r(a),
            n.d(a, {
                default: () => _
            });
        var e = n(96540)
            , i = n(90972)
            , o = n.n(i)
            , t = n(61038)
            , d = (n(62752),
                n(9987))
            , r = n(67739);
        function u() {
            return u = Object.assign ? Object.assign.bind() : function (l) {
                for (var a = 1; a < arguments.length; a++) {
                    var n = arguments[a];
                    for (var e in n)
                        ({}).hasOwnProperty.call(n, e) && (l[e] = n[e])
                }
                return l
            }
                ,
                u.apply(null, arguments)
        }
        var v = "List Module"
            , c = "list_module";
        const _ = function (l) {
            var a, n, i, _, s, p, m, g, h, f, y, b, k, N, E, C, L, O, x, A, D, S, T, B, M, z, I, w, U, F, G, H, K, j = l.componentOrder, P = l.itemContent || "", V = (null == P || null === (a = P.global_data) || void 0 === a || null === (n = a[0]) || void 0 === n || null === (i = n.global_settings) || void 0 === i ? void 0 : i.backround_color) || "white", J = {
                style: {
                    paddingTop: (null == P || null === (_ = P.global_data) || void 0 === _ || null === (s = _[0]) || void 0 === s || null === (p = s.global_settings) || void 0 === p || null === (m = p.container) || void 0 === m ? void 0 : m.padding_top) || void 0,
                    paddingBottom: (null == P || null === (g = P.global_data) || void 0 === g || null === (h = g[0]) || void 0 === h || null === (f = h.global_settings) || void 0 === f || null === (y = f.container) || void 0 === y ? void 0 : y.padding_bottom) || void 0,
                    backgroundColor: V
                }
            }, Q = (null == P || null === (b = P.global_data) || void 0 === b || null === (k = b[1]) || void 0 === k ? void 0 : k.global_heading) || "", X = (null == Q || null === (N = Q.heading) || void 0 === N ? void 0 : N.headline) || "", Y = (null == Q || null === (E = Q.heading) || void 0 === E ? void 0 : E.headline_text_color) || "white", $ = (null == Q || null === (C = Q.heading) || void 0 === C ? void 0 : C.headline_type) || "s-head-ptserif", q = (null == Q || null === (L = Q.paragraph) || void 0 === L ? void 0 : L.paragraph_text) || "", R = (null == Q || null === (O = Q.paragraph) || void 0 === O ? void 0 : O.paragraph_color) || "white", W = (null == Q || null === (x = Q.paragraph) || void 0 === x ? void 0 : x.paragraph_type) || "xl-body-ptserif", Z = (null == P || null === (A = P.field_cta) || void 0 === A ? void 0 : A[0]) || void 0, ll = {
                ctaType: (null == Z ? void 0 : Z.field_cta_type) || "",
                ctaUrl: (null == Z || null === (D = Z.field_cta_link) || void 0 === D ? void 0 : D.link) || "",
                ctaLabel: (null == Z || null === (S = Z.field_cta_link) || void 0 === S ? void 0 : S.label) || "",
                ctaVideoID: (null == Z || null === (T = Z.field_cta_brightcove_video) || void 0 === T || null === (B = T.video_id) || void 0 === B || null === (M = B[0]) || void 0 === M ? void 0 : M.value) || "",
                ctaFormID: (null == Z || null === (z = Z.field_carousel_gated_form) || void 0 === z ? void 0 : z.value) || "",
                ctaStyle: (null == Z || null === (I = Z.field_cta_style) || void 0 === I || null === (w = I.field_cta_size) || void 0 === w || null === (U = w[0]) || void 0 === U ? void 0 : U.value) || "",
                ctaIcon: null !== (F = null == Z || null === (G = Z.field_cta_style) || void 0 === G || null === (H = G.field_cta_icon_location) || void 0 === H || null === (K = H[0]) || void 0 === K ? void 0 : K.value) && void 0 !== F ? F : "",
                dataComponentName: v,
                dataMachineName: c,
                parentOrder: j,
                index: 0
            }, al = (null == P ? void 0 : P.field_speciality_list) || void 0;
            return e.createElement("section", u({}, J, {
                "data-componentname": v,
                "data-componentid": c,
                "component-order": j
            }), e.createElement("div", {
                className: o().listModule
            }, e.createElement("div", {
                className: o().__heading
            }, X || q ? e.createElement(d.default, {
                containerSize: "standard",
                heading: X,
                headingType: $,
                paragraphType: W,
                headingColor: Y,
                paragraph: q,
                paragraphColor: R,
                paragraphFontSize: null,
                siteId: "ahcom",
                setParagraphHtml: !0,
                dataComponentName: v
            }) : null, e.createElement(r.default, ll)), e.createElement("div", {
                className: o().__list
            }, al && al.map((function (l) {
                return e.createElement("ul", {
                    className: o().__column
                }, l && l.map((function (l) {
                    return e.createElement("li", {
                        className: "xl-body-sspro"
                    }, l.url ? e.createElement("a", {
                        onClick: function (a) {
                            return n = l.name,
                                void (0,
                                    t.$)("CTA Link Clicked", "Body | Link | ".concat(n), c, v);
                            var n
                        },
                        className: "xl-body-sspro",
                        href: l.url
                    }, l.name) : l.name)
                }
                )))
            }
            )))))
        }
    }
    ,
    29184: (l, a, n) => {
        "use strict";
        n.d(a, {
            k: () => e
        });
        var e = function (l, a) {
            var n, e;
            return null !== (n = null == l || null === (e = l[0]) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : a
        }
    }
    ,
    38351: (l, a, n) => {
        "use strict";
        n.d(a, {
            G: () => i
        });
        var e = n(29184)
            , i = function (l, a, n, i) {
                var o, t = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, d = Array.isArray(l) ? null !== (o = null == l ? void 0 : l[0]) && void 0 !== o ? o : {} : null != l ? l : {}, r = d.label, u = void 0 === r ? "" : r, v = d.style, c = d.link, _ = d.type || (0,
                    e.k)(null == v ? void 0 : v.field_cta_type);
                return {
                    ctaLabel: u,
                    ctaStyle: (0,
                        e.k)(null == v ? void 0 : v.field_cta_size),
                    ctaUrl: c,
                    ctaType: _,
                    dataComponentName: a,
                    dataMachineName: n,
                    index: t,
                    parentOrder: i,
                    ctaIcon: (0,
                        e.k)(null == v ? void 0 : v.field_cta_icon_location)
                }
            }
    }
    ,
    62752: (l, a, n) => {
        "use strict";
        n.d(a, {
            B: () => o
        });
        var e = n(96540)
            , i = n(38351)
            , o = function (l, a, n, o) {
                var t = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                return (0,
                    e.useMemo)((function () {
                        return (0,
                            i.G)(l, a, n, o, t)
                    }
                    ), [l, a, n, o, t])
            }
    }
    ,
    90972: l => {
        l.exports = {
            "inherit-parent-typo": "s_XtD",
            listModule: "xV2Nv",
            __heading: "FYmBK",
            __list: "GQiTS",
            __column: "liJzn"
        }
    }
}]);
