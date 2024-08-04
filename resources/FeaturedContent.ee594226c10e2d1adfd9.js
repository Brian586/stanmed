(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[9492, 9151], {
    77799: (e, l, t) => {
        "use strict";
        t.r(l),
            t.d(l, {
                default: () => m
            });
        var n = t(96540)
            , a = t(70287)
            , o = t.n(a)
            , i = t(39642)
            , r = t(67739)
            , d = t(29184)
            , c = (t(62752),
                t(14955))
            , u = t(61038);
        function v() {
            return v = Object.assign ? Object.assign.bind() : function (e) {
                for (var l = 1; l < arguments.length; l++) {
                    var t = arguments[l];
                    for (var n in t)
                        ({}).hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
            }
                ,
                v.apply(null, arguments)
        }
        var f = function (e) {
            var l = e.imageAlt
                , t = e.imageUrl
                , a = e.imageUrlWebp
                , o = e.imageLink
                , i = "image/".concat((0,
                    u.yg)(t))
                , r = n.createElement(c.default, {
                    alt: l,
                    webpUrl: a,
                    fallbackImgUrl: t,
                    imageType: i
                });
            return o ? n.createElement("a", {
                href: o,
                "aria-label": "Navigates to ".concat(o)
            }, r) : r
        }
            , s = "featured_content"
            , _ = "Featured Content";
        const m = function (e) {
            var l, t, a, c, m, p, g, h, y, b, k, E, N, L, U, I, O, A, D, C, T, w, H, M, S, j, x = e.componentOrder, X = e.itemContent || {}, B = X.body, G = X.field_element_container, W = X.field_cta, z = X.field_headline_formatted, F = X.field_image, K = X.field_sub_headline_fc, V = X.field_variant_featured_content, P = X.field_featured_content_var_theme, R = X.field_background_color, Y = X.field_headline_color, q = (0,
                d.k)(V), J = (0,
                    d.k)(P), Q = [o()["featured-content-container"]];
            "offset" === q ? Q.push(o()["container-offset"]) : "diagonal" === q ? Q.push(o()["container-diagonal"]) : Q.push(o()["container-default"]),
                "enterprise" === J && Q.push(o().enterprise);
            var Z = R && R[0] && R[0].color ? R[0].color : ""
                , $ = {
                    style: {
                        backgroundColor: Z
                    }
                }
                , ee = {
                    style: {
                        color: Y && Y[0] && Y[0].color ? Y[0].color : ""
                    }
                }
                , le = (0,
                    d.k)(K, "")
                , te = (0,
                    d.k)(z, "")
                , ne = (0,
                    d.k)(G)
                , ae = (0,
                    d.k)(B, "")
                , oe = (0,
                    u.Nw)(Z || "#ffffff")
                , ie = W
                , re = F || {}
                , de = re.image_link
                , ce = re.rel_url || {}
                , ue = ce.rel_url
                , ve = ce.webp_image_url
                , fe = (ce.options || {}).alt;
            return n.createElement("section", {
                className: Q.join(" "),
                "data-componentname": _,
                "data-componentid": s,
                "component-order": x
            }, n.createElement("div", v({
                className: "".concat(o()["featured-content"], " ").concat("offset" === q && o()[oe], " ")
            }, $), n.createElement("div", v({
                className: o()["featured-content-info-section"]
            }, ee), n.createElement("div", null, le ? n.createElement("p", {
                className: o()["featured-content-eyebrow"]
            }, le) : null, n.createElement(i.default, {
                className: o()["featured-content-headline"],
                level: ne,
                value: te
            })), n.createElement("div", null, !!ae && n.createElement("p", {
                className: o()["featured-content-body"],
                dangerouslySetInnerHTML: {
                    __html: ae
                }
            }), n.createElement(r.default, {
                ctaType: null !== (l = null == ie || null === (t = ie[0]) || void 0 === t ? void 0 : t.field_carousel_cta_type) && void 0 !== l ? l : "",
                ctaUrl: null !== (a = null == ie || null === (c = ie[0]) || void 0 === c || null === (m = c.field_cta_link) || void 0 === m ? void 0 : m.link) && void 0 !== a ? a : "",
                ctaLabel: null !== (p = null == ie || null === (g = ie[0]) || void 0 === g || null === (h = g.field_cta_link) || void 0 === h ? void 0 : h.label) && void 0 !== p ? p : "",
                ctaStyle: null !== (y = null == ie || null === (b = ie[0]) || void 0 === b || null === (k = b.field_cta_style) || void 0 === k || null === (E = k.field_cta_size) || void 0 === E || null === (N = E[0]) || void 0 === N ? void 0 : N.value) && void 0 !== y ? y : "",
                ctaFormID: null !== (L = null == ie || null === (U = ie[0]) || void 0 === U || null === (I = U.field_carousel_gated_form) || void 0 === I ? void 0 : I.value) && void 0 !== L ? L : "",
                ctaVideoID: null !== (O = null == ie || null === (A = ie[0]) || void 0 === A || null === (D = A.field_cta_brightcove_video) || void 0 === D || null === (C = D.video_id) || void 0 === C || null === (T = C[0]) || void 0 === T ? void 0 : T.value) && void 0 !== O ? O : "",
                dataComponentName: _,
                dataMachineName: s,
                ctaIcon: null !== (w = null == ie || null === (H = ie[0]) || void 0 === H || null === (M = H.field_cta_style) || void 0 === M || null === (S = M.field_cta_icon_location) || void 0 === S || null === (j = S[0]) || void 0 === j ? void 0 : j.value) && void 0 !== w ? w : ""
            }))), n.createElement("div", {
                className: o()["featured-content-image-section"]
            }, n.createElement(f, {
                imageAlt: fe,
                imageLink: de,
                imageUrl: ue,
                imageUrlWebp: ve
            }))))
        }
    }
    ,
    39642: (e, l, t) => {
        "use strict";
        t.r(l),
            t.d(l, {
                default: () => o
            });
        var n = t(96540)
            , a = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
        const o = function (e) {
            var l = e.className
                , t = e.level
                , o = e.value
                , i = (0,
                    n.useMemo)((function () {
                        return a.includes(t) ? t : "p"
                    }
                    ), [t]);
            return n.createElement(i, {
                className: l,
                dangerouslySetInnerHTML: {
                    __html: o
                }
            })
        }
    }
    ,
    29184: (e, l, t) => {
        "use strict";
        t.d(l, {
            k: () => n
        });
        var n = function (e, l) {
            var t, n;
            return null !== (t = null == e || null === (n = e[0]) || void 0 === n ? void 0 : n.value) && void 0 !== t ? t : l
        }
    }
    ,
    38351: (e, l, t) => {
        "use strict";
        t.d(l, {
            G: () => a
        });
        var n = t(29184)
            , a = function (e, l, t, a) {
                var o, i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, r = Array.isArray(e) ? null !== (o = null == e ? void 0 : e[0]) && void 0 !== o ? o : {} : null != e ? e : {}, d = r.label, c = void 0 === d ? "" : d, u = r.style, v = r.link, f = r.type || (0,
                    n.k)(null == u ? void 0 : u.field_cta_type);
                return {
                    ctaLabel: c,
                    ctaStyle: (0,
                        n.k)(null == u ? void 0 : u.field_cta_size),
                    ctaUrl: v,
                    ctaType: f,
                    dataComponentName: l,
                    dataMachineName: t,
                    index: i,
                    parentOrder: a,
                    ctaIcon: (0,
                        n.k)(null == u ? void 0 : u.field_cta_icon_location)
                }
            }
    }
    ,
    62752: (e, l, t) => {
        "use strict";
        t.d(l, {
            B: () => o
        });
        var n = t(96540)
            , a = t(38351)
            , o = function (e, l, t, o) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                return (0,
                    n.useMemo)((function () {
                        return (0,
                            a.G)(e, l, t, o, i)
                    }
                    ), [e, l, t, o, i])
            }
    }
    ,
    70287: e => {
        e.exports = {
            "inherit-parent-typo": "vObdk",
            "container-diagonal": "htEVH",
            enterprise: "D4sb1",
            "featured-content-info-section": "YWHlX",
            "featured-content": "Xb8v4",
            "featured-content-image-section": "nNIUX",
            "featured-content-eyebrow": "slc5T",
            "featured-content-headline": "sf5js",
            "featured-content-body": "fG8Io",
            "container-offset": "XIDw7",
            "container-default": "TCUx5",
            "dark-tone": "gRI0u",
            "light-tone": "jOaTx"
        }
    }
}]);
