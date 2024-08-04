(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[1717, 5538], {
    47653: (e, t, l) => {
        "use strict";
        l.r(t),
            l.d(t, {
                default: () => a
            });
        var n = l(96540);
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
        function r(e, t) {
            var l = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    l.push.apply(l, n)
            }
            return l
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var l = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(l), !0).forEach((function (t) {
                    d(e, t, l[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : r(Object(l)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
                }
                ))
            }
            return e
        }
        function d(e, t, l) {
            return (t = function (e) {
                var t = function (e, t) {
                    if ("object" != o(e) || !e)
                        return e;
                    var l = e[Symbol.toPrimitive];
                    if (void 0 !== l) {
                        var n = l.call(e, "string");
                        if ("object" != o(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == o(t) ? t : t + ""
            }(t)) in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l,
                e
        }
        function a(e) {
            var t = e.visibility
                , l = void 0 !== t && t
                , o = e.borderStyle
                , r = e.style;
            if (!l)
                return null;
            var d = {
                style: i({
                    margin: " 0 auto",
                    borderRight: "0",
                    borderLeft: "0",
                    borderBottom: "0",
                    borderTop: o || "1px solid #d8d8d8",
                    maxWidth: "896px",
                    width: "calc(100% - 60px)",
                    minWidth: "315px"
                }, void 0 === r ? {} : r)
            };
            return n.createElement(n.Fragment, null, l && n.createElement("hr", d))
        }
    }
    ,
    86776: (e, t, l) => {
        "use strict";
        l.r(t),
            l.d(t, {
                default: () => u
            });
        var n = l(96540)
            , o = l(61038)
            , r = l(88302)
            , i = l.n(r)
            , d = l(47653)
            , a = l(67739);
        const u = function (e) {
            var t, l, r, u = e.componentOrder, c = e.itemContent, v = "Product_Offering_Casestudy", s = "Product Offering Casestudy", p = null !== (t = null == c ? void 0 : c.product_cards) && void 0 !== t ? t : "", f = (0,
                o.y_)(null == c ? void 0 : c.global_data), m = f.containerStyles, _ = f.hasTopDivider, y = f.hasBottomDivider, b = f.border, g = f.background, O = {
                    backgroundColor: null != g ? g : "#622FB4",
                    paddingBottom: null !== (l = null == m ? void 0 : m.paddingBottom) && void 0 !== l ? l : "60px",
                    paddingTop: null !== (r = null == m ? void 0 : m.paddingTop) && void 0 !== r ? r : "60px",
                    maxWidth: "100%"
                };
            return (0,
                n.useEffect)((function () {
                    (0,
                        o.pK)(v, s)
                }
                ), []),
                n.createElement(n.Fragment, null, n.createElement(d.default, {
                    visibility: _,
                    borderStyle: b
                }), n.createElement("section", {
                    "data-componentname": s,
                    "data-componentid": v,
                    "component-order": u,
                    style: O
                }, n.createElement("span", {
                    className: i()["po-cards"]
                }, Object.values(p).map((function (e, t) {
                    var l, o, r, d, c, p, f, m, _, y, b, g, O, h, E, S, j, D, P, w, x, L, N, T, k = null !== (l = null == e || null === (o = e.image) || void 0 === o ? void 0 : o.rel_url) && void 0 !== l ? l : "", B = null !== (r = null == e ? void 0 : e.field_addon_headline) && void 0 !== r ? r : "", C = null !== (d = null == e ? void 0 : e.field_addon_headline_color) && void 0 !== d ? d : "#4E2D82", A = null !== (c = null == e ? void 0 : e.field_addon_description) && void 0 !== c ? c : "", F = null == e ? void 0 : e.field_cta_link_component;
                    return n.createElement("span", {
                        className: i()["po-card"]
                    }, k && n.createElement("img", {
                        alt: "",
                        src: k,
                        className: i()["po-img"],
                        width: 64,
                        height: 64
                    }), B && n.createElement("span", {
                        className: i()["po-headline"],
                        style: {
                            color: C
                        }
                    }, B, " "), A && n.createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: A
                        },
                        className: i()["po-desc"]
                    }), n.createElement(a.default, {
                        ctaType: null !== (p = null == F ? void 0 : F.field_carousel_cta_type) && void 0 !== p ? p : "",
                        ctaUrl: null !== (f = null == F || null === (m = F.field_cta_link) || void 0 === m ? void 0 : m.link) && void 0 !== f ? f : "",
                        ctaLabel: null !== (_ = null == F || null === (y = F.field_cta_link) || void 0 === y ? void 0 : y.label) && void 0 !== _ ? _ : "",
                        ctaStyle: null !== (b = null == F || null === (g = F.field_cta_style) || void 0 === g || null === (O = g.field_cta_size) || void 0 === O || null === (h = O[0]) || void 0 === h ? void 0 : h.value) && void 0 !== b ? b : "",
                        ctaFormID: null !== (E = null == F || null === (S = F.field_carousel_gated_form) || void 0 === S ? void 0 : S.value) && void 0 !== E ? E : "",
                        ctaVideoID: null !== (j = null == F || null === (D = F.field_cta_brightcove_video) || void 0 === D || null === (P = D.video_id) || void 0 === P || null === (w = P[0]) || void 0 === w ? void 0 : w.value) && void 0 !== j ? j : "",
                        dataComponentName: s,
                        dataMachineName: v,
                        index: t,
                        parentOrder: u,
                        ctaIcon: null !== (x = null == F || null === (L = F.field_cta_style) || void 0 === L || null === (N = L.field_cta_icon_location) || void 0 === N || null === (T = N[0]) || void 0 === T ? void 0 : T.value) && void 0 !== x ? x : ""
                    }))
                }
                )))), n.createElement(d.default, {
                    visibility: y,
                    borderStyle: b
                }))
        }
    }
    ,
    88302: e => {
        e.exports = {
            "inherit-parent-typo": "uazqq",
            "po-cards": "gLM0T",
            "po-card": "OdPdh",
            "po-headline": "pQr3O",
            "po-desc": "lWzfc"
        }
    }
}]);
