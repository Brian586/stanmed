(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[3488], {
    92707: (e, l, n) => {
        "use strict";
        n.r(l),
            n.d(l, {
                default: () => g
            });
        var t = n(96540)
            , a = n(18191)
            , i = n.n(a)
            , r = n(61038)
            , o = (n(62752),
                n(9987))
            , d = n(14955)
            , c = n(67739);
        function u(e) {
            return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                u(e)
        }
        function s(e, l) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(e);
                l && (t = t.filter((function (l) {
                    return Object.getOwnPropertyDescriptor(e, l).enumerable
                }
                ))),
                    n.push.apply(n, t)
            }
            return n
        }
        function v(e) {
            for (var l = 1; l < arguments.length; l++) {
                var n = null != arguments[l] ? arguments[l] : {};
                l % 2 ? s(Object(n), !0).forEach((function (l) {
                    _(e, l, n[l])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (l) {
                    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l))
                }
                ))
            }
            return e
        }
        function _(e, l, n) {
            return (l = function (e) {
                var l = function (e, l) {
                    if ("object" != u(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var t = n.call(e, "string");
                        if ("object" != u(t))
                            return t;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == u(l) ? l : l + ""
            }(l)) in e ? Object.defineProperty(e, l, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[l] = n,
                e
        }
        var m = function (e) {
            var l = e.imageAlt
                , n = e.imageUrl
                , a = e.imageUrlWebp
                , i = e.imageLink
                , o = "image/".concat((0,
                    r.yg)(n))
                , c = t.createElement(d.default, {
                    alt: l,
                    webpUrl: a,
                    fallbackImgUrl: n,
                    imageType: o
                });
            return i ? t.createElement("a", {
                href: i,
                "aria-label": "Navigates to ".concat(i)
            }, c) : c
        };
        const g = function (e) {
            var l, n, a, r, d, u, s, _, g, f, p, b, y, h, E, w, N, O = e.componentOrder, S = e.itemContent || "", k = "Case Studies Banner", j = "case-studies-banner", C = (null == S || null === (l = S.global_data) || void 0 === l || null === (n = l[1]) || void 0 === n ? void 0 : n.global_heading) || "", P = (null == S || null === (a = S.global_data) || void 0 === a || null === (r = a[0]) || void 0 === r || null === (d = r.global_settings) || void 0 === d ? void 0 : d.backround_color) || "white", A = (null == C || null === (u = C.heading) || void 0 === u ? void 0 : u.headline) || "", D = (null == C || null === (s = C.heading) || void 0 === s ? void 0 : s.headline_text_color) || "white", x = "case_study_overview" == ((null == S ? void 0 : S.field_cs_type) || ""), H = (null == C || null === (_ = C.sub_heading) || void 0 === _ ? void 0 : _.sub_headline) || "", I = (null == C || null === (g = C.sub_heading) || void 0 === g ? void 0 : g.sub_headline_text_color) || "white", L = "1" == (null == C || null === (f = C.sub_heading) || void 0 === f ? void 0 : f.sub_headline_enable_divider) ? Number(C.sub_heading.sub_headline_enable_divider) : "", U = (null == C || null === (p = C.paragraph) || void 0 === p ? void 0 : p.paragraph_text) || "", T = (null == C || null === (b = C.paragraph) || void 0 === b ? void 0 : b.paragraph_color) || "white", K = x ? "".concat(i()["banner-main-wrap"], " ").concat(i().overview) : "".concat(i()["banner-main-wrap"]), z = (null == S || null === (y = S.case_study_details) || void 0 === y ? void 0 : y.field_cs_right_headline) || "", B = "1" == (null == S || null === (h = S.case_study_details) || void 0 === h ? void 0 : h.field_cs_border_enable), G = B ? null == S || null === (E = S.case_study_details) || void 0 === E ? void 0 : E.field_cs_border_color : void 0, M = null != S && S.case_study_details ? Object.entries(null == S ? void 0 : S.case_study_details) : [], V = (null == S || null === (w = S.case_study_details) || void 0 === w ? void 0 : w.cards_details) || [];
            x && (V = (null == S || null === (N = S.case_study_overview) || void 0 === N ? void 0 : N.cards_details) || []);
            var W = {
                backgroundColor: P
            };
            return t.createElement("section", {
                "data-componentname": k,
                "data-componentid": j,
                "component-order": O
            }, t.createElement("div", {
                className: K,
                style: v({}, W)
            }, t.createElement("div", {
                className: i()["banner-text-container"]
            }, t.createElement("div", {
                className: i()["banner-left-section"]
            }, A || U || H ? t.createElement(o.default, {
                containerSize: "standard",
                heading: A,
                headingType: "xl-head",
                subHeadingType: "misc-ey",
                paragraphType: "xl-body",
                headingColor: D,
                paragraph: U,
                paragraphColor: T,
                paragraphFontSize: null,
                subHeading: H,
                subHeadingColor: I,
                dividerVisibility: L,
                dividerColor: "#4E2D82",
                siteId: "ahcom",
                setParagraphHtml: !0,
                dataComponentName: k
            }) : null), !x && t.createElement("div", {
                className: i()["banner-right-section"]
            }, t.createElement("h2", {
                className: i()["right-section-heading"]
            }, z), B && t.createElement("div", {
                className: i()["right-section-border"],
                style: {
                    borderColor: G
                }
            }), t.createElement("ul", {
                className: i()["right-section-list"]
            }, M.length > 0 && M.map((function (e, l) {
                var n, a, i, r = (null == e || null === (n = e[1]) || void 0 === n ? void 0 : n.card_headline) || void 0, o = (null == e || null === (a = e[1]) || void 0 === a || null === (i = a.image) || void 0 === i ? void 0 : i.rel_url) || "";
                if (r)
                    return t.createElement("li", null, t.createElement("img", {
                        src: o
                    }), t.createElement("span", {
                        className: "xl-body-sspro"
                    }, r))
            }
            ))))), t.createElement("div", {
                className: i()["floating-cards-main-c"]
            }, t.createElement("div", {
                className: i()["floating-cards-c"]
            }, V.length > 0 && V.map((function (e, l) {
                var n, a, r, o, d, u, s, v, _, g, f, p, b, y = (null == e ? void 0 : e.field_addon_headline) || void 0, h = (null == e ? void 0 : e.field_addon_headline_color) || void 0, E = (null == e ? void 0 : e.field_multiline_subtitle) || void 0, w = x ? "s-head-ptserif" : "", N = (x ? null == e ? void 0 : e.image : void 0) || {}, S = N.rel_url, C = N.webp_image_url, P = (N.options || {}).alt, A = (null == e ? void 0 : e.field_filter_terms) || [], D = e.field_cta_link_component, H = {
                    ctaType: (null == D ? void 0 : D.field_carousel_cta_type) || "",
                    ctaUrl: (null == D || null === (n = D.field_cta_link) || void 0 === n ? void 0 : n.link) || "",
                    ctaLabel: (null == D || null === (a = D.field_cta_link) || void 0 === a ? void 0 : a.label) || "",
                    ctaVideoID: (null == D || null === (r = D.field_cta_brightcove_video) || void 0 === r || null === (o = r.video_id) || void 0 === o || null === (d = o[0]) || void 0 === d ? void 0 : d.value) || "",
                    ctaFormID: (null == D || null === (u = D.field_carousel_gated_form) || void 0 === u ? void 0 : u.value) || "",
                    ctaStyle: (null == D || null === (s = D.field_cta_style) || void 0 === s || null === (v = s.field_cta_size) || void 0 === v || null === (_ = v[0]) || void 0 === _ ? void 0 : _.value) || "",
                    ctaIcon: null !== (g = null == D || null === (f = D.field_cta_style) || void 0 === f || null === (p = f.field_cta_icon_location) || void 0 === p || null === (b = p[0]) || void 0 === b ? void 0 : b.value) && void 0 !== g ? g : "",
                    dataComponentName: k,
                    dataMachineName: j,
                    parentOrder: O,
                    index: 0,
                    bannerHeading: E,
                    bannerInstanceCount: O
                };
                return t.createElement("div", {
                    className: i()["floating-cards"]
                }, t.createElement("div", {
                    className: x ? i()["overview-cards"] : ""
                }, t.createElement("div", {
                    className: "".concat(i()["floating-cards-eyebrow"], " misc-ey-sspro"),
                    style: {
                        color: h
                    }
                }, y), t.createElement("div", {
                    className: "".concat(i()["floating-cards-description"], " ").concat(w),
                    dangerouslySetInnerHTML: {
                        __html: E
                    }
                }), t.createElement(c.default, H), t.createElement("div", {
                    className: i()["floating-cards-tags-c"]
                }, A.length > 0 && A.map((function (e, l) {
                    return t.createElement("div", null, t.createElement("span", null, e.value))
                }
                )))), t.createElement(m, {
                    imageAlt: P,
                    imageUrl: S,
                    imageUrlWebp: C
                }))
            }
            ))))))
        }
    }
    ,
    29184: (e, l, n) => {
        "use strict";
        n.d(l, {
            k: () => t
        });
        var t = function (e, l) {
            var n, t;
            return null !== (n = null == e || null === (t = e[0]) || void 0 === t ? void 0 : t.value) && void 0 !== n ? n : l
        }
    }
    ,
    38351: (e, l, n) => {
        "use strict";
        n.d(l, {
            G: () => a
        });
        var t = n(29184)
            , a = function (e, l, n, a) {
                var i, r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, o = Array.isArray(e) ? null !== (i = null == e ? void 0 : e[0]) && void 0 !== i ? i : {} : null != e ? e : {}, d = o.label, c = void 0 === d ? "" : d, u = o.style, s = o.link, v = o.type || (0,
                    t.k)(null == u ? void 0 : u.field_cta_type);
                return {
                    ctaLabel: c,
                    ctaStyle: (0,
                        t.k)(null == u ? void 0 : u.field_cta_size),
                    ctaUrl: s,
                    ctaType: v,
                    dataComponentName: l,
                    dataMachineName: n,
                    index: r,
                    parentOrder: a,
                    ctaIcon: (0,
                        t.k)(null == u ? void 0 : u.field_cta_icon_location)
                }
            }
    }
    ,
    62752: (e, l, n) => {
        "use strict";
        n.d(l, {
            B: () => i
        });
        var t = n(96540)
            , a = n(38351)
            , i = function (e, l, n, i) {
                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                return (0,
                    t.useMemo)((function () {
                        return (0,
                            a.G)(e, l, n, i, r)
                    }
                    ), [e, l, n, i, r])
            }
    }
    ,
    18191: e => {
        e.exports = {
            "inherit-parent-typo": "cdrHG",
            "banner-main-wrap": "KKC5Y",
            "banner-text-container": "kA91A",
            "banner-left-section": "wwtxb",
            "floating-cards-main-c": "Sfv3Y",
            "floating-cards-c": "J1Fpc",
            "floating-cards": "WK9vm",
            "floating-cards-eyebrow": "cmIkC",
            "floating-cards-description": "Ns_mc",
            "right-section-border": "mHYV9",
            "right-section-heading": "ZrNpE",
            "banner-right-section": "j5gPp",
            "right-section-list": "avYI8",
            overview: "qVhG9",
            "overview-cards": "yPk5v",
            "floating-cards-tags-c": "WN0rA"
        }
    }
}]);
