/*! For license information please see HowWeCanHelp.34f15c2b29ad615dd405.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[3954, 3816, 6633, 9151, 1033, 9206], {
    68427: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            default: ()=>u
        });
        var r = n(96540)
          , a = n(21127)
          , o = n.n(a)
          , i = n(39642)
          , l = n(67739);
        function c() {
            return c = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            c.apply(null, arguments)
        }
        const u = function(e) {
            var t = e.ctaProps
              , n = e.mainHeading
              , a = e.mainHeadingLevel
              , u = e.headline
              , d = e.text
              , s = e.image
              , f = e.backgroundColor;
            return r.createElement("div", {
                className: "content-card-container"
            }, n && r.createElement(i.default, {
                className: o()["content-card-main-heading"],
                level: a,
                value: n
            }), r.createElement("div", {
                className: "".concat(o()["content-card"], " ").concat(o()["content-card-".concat(f)])
            }, r.createElement("img", {
                className: o()["content-card-image"],
                src: s,
                alt: ""
            }), r.createElement("div", {
                className: o()["content-card-text-container"]
            }, r.createElement(i.default, {
                className: o()["content-card-headline"],
                value: u
            }), r.createElement("p", {
                className: o()["content-card-text"],
                dangerouslySetInnerHTML: {
                    __html: d
                }
            })), r.createElement("div", {
                className: o()["content-card-decorative-button-container"]
            }, r.createElement(l.default, c({}, t, {
                ctaStyle: "".concat(o()["content-card-decorative-button"], " cta-icon-none"),
                ctaFormID: "2016",
                ctaTheme: "custom",
                analyticsLabel: "".concat(t.ctaLabel, "|").concat(u)
            })))))
        }
    }
    ,
    30940: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            default: ()=>u
        });
        var r = n(96540)
          , a = n(39642)
          , o = n(67739)
          , i = n(16174)
          , l = n.n(i);
        function c() {
            return c = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            c.apply(null, arguments)
        }
        const u = function(e) {
            var t = e.ctaProps
              , n = e.headline
              , i = e.headlineLevel
              , u = e.image
              , d = e.imageAlt
              , s = void 0 === d ? "" : d
              , f = e.text;
            return r.createElement("div", {
                className: l()["content-card-minimal"]
            }, r.createElement("div", {
                className: l()["card-text-wrapper"]
            }, r.createElement(a.default, {
                className: l()["card-headline"],
                level: i,
                value: n
            }), r.createElement("p", {
                className: l()["card-text"],
                dangerouslySetInnerHTML: {
                    __html: f
                }
            }), r.createElement("div", {
                className: l()["card-cta-wrapper"]
            }, r.createElement(o.default, c({
                analyticsLabel: "".concat(t.ctaLabel, "|").concat(n)
            }, t, {
                ctaFormID: "2016"
            })))), r.createElement("div", {
                className: l()["card-image-wrapper"]
            }, r.createElement("img", {
                className: l()["card-image"],
                src: u,
                alt: s
            })))
        }
    }
    ,
    39642: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            default: ()=>o
        });
        var r = n(96540)
          , a = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
        const o = function(e) {
            var t = e.className
              , n = e.level
              , o = e.value
              , i = (0,
            r.useMemo)((function() {
                return a.includes(n) ? n : "p"
            }
            ), [n]);
            return r.createElement(i, {
                className: t,
                dangerouslySetInnerHTML: {
                    __html: o
                }
            })
        }
    }
    ,
    97214: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            default: ()=>O
        });
        var r = n(96540)
          , a = n(77283)
          , o = n.n(a)
          , i = n(39642)
          , l = n(82746)
          , c = n(11964)
          , u = n(68427)
          , d = n(30940)
          , s = n(97305)
          , f = n(61038)
          , v = n(29184)
          , m = n(62752)
          , h = n(81430);
        function p(e) {
            return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            p(e)
        }
        function y(e) {
            return function(e) {
                if (Array.isArray(e))
                    return L(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || E(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function b(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? b(Object(n), !0).forEach((function(t) {
                    _(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function _(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != p(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, "string");
                        if ("object" != p(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == p(t) ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function w(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, a, o, i, l = [], c = !0, u = !1;
                    try {
                        if (o = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            c = !1
                        } else
                            for (; !(c = (r = o.call(n)).done) && (l.push(r.value),
                            l.length !== t); c = !0)
                                ;
                    } catch (e) {
                        u = !0,
                        a = e
                    } finally {
                        try {
                            if (!c && null != n.return && (i = n.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (u)
                                throw a
                        }
                    }
                    return l
                }
            }(e, t) || E(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function E(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return L(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? L(e, t) : void 0
            }
        }
        function L(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var x = "how_we_can_help"
          , N = "How We Can Help";
        const O = function(e) {
            var t, n, a, p, b, E, L, O, S, j, k, A, C, P, I, T, H, B, K, M, D, R, G, F, U, Y, q, X, z, V, W, J, $ = e.componentOrder, Q = e.itemContent, Z = e.showLeaf, ee = (W = (V = w((0,
            r.useState)([0, 0]), 2))[0],
            J = V[1],
            (0,
            r.useLayoutEffect)((function() {
                function e() {
                    J([window.innerWidth, window.innerHeight])
                }
                return window.addEventListener("resize", e),
                e(),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }
            ), []),
            W), te = w(ee, 2), ne = te[0];
            if (te[1],
            !Q)
                return null;
            var re, ae, oe = w((0,
            r.useState)({}), 2), ie = oe[0], le = oe[1], ce = (0,
            r.useRef)(null), ue = (0,
            r.useRef)(!1), de = (re = ce.current,
            ae = (0,
            h.j)(),
            {
                moveIntoView: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "end";
                    null == re || re.scrollIntoView({
                        behavior: ae ? "auto" : "smooth",
                        block: e
                    })
                }
            }), se = Q.field_headline_formatted, fe = Q.exposed_filters, ve = void 0 === fe ? [] : fe, me = Q.empty_content_cards, he = void 0 === me ? [] : me, pe = Q.content_cards, ye = void 0 === pe ? [] : pe, be = Q.field_element_container, ge = Q.global_data, _e = void 0 === ge ? [] : ge, we = Q.field_filtered_content_type, Ee = "tabbed benefits" == (null == we || null === (t = we[0]) || void 0 === t ? void 0 : t.value) || !1, Le = Ee ? o()["tabbed-benefits"] : "", xe = Object.keys(ie).map((function(e) {
                return ie[e]
            }
            )).filter((function(e) {
                return e
            }
            )), Ne = ye.filter((function(e) {
                return xe.every((function(t) {
                    var n;
                    return null === (n = e.field_filter_terms) || void 0 === n ? void 0 : n.some((function(e) {
                        return t === e.target_id
                    }
                    ))
                }
                ))
            }
            )), Oe = null == ve ? void 0 : ve.map((function(e, t) {
                return g(g({}, e), {}, {
                    fieldKey: t,
                    order: t
                })
            }
            )), Se = Oe.filter((function(e) {
                return "radio" === e.field_filter_element
            }
            )), je = Oe.filter((function(e) {
                return Se.every((function(e) {
                    return null == ie ? void 0 : ie[e.fieldKey]
                }
                )) && "select" === e.field_filter_element && e.field_filter_terms.find((function(e) {
                    return xe.find((function(t) {
                        return t === e.target_id
                    }
                    )) || Ne.some((function(t) {
                        return t.field_filter_terms.some((function(t) {
                            return t.target_id === e.target_id
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ));
            Ee && (je = Se);
            var ke = function(e) {
                var t;
                return e && ((null === (t = e.field_image_variants) || void 0 === t ? void 0 : t.find((function(e) {
                    return e.field_filter_terms.every((function(e) {
                        return xe.indexOf(e.target_id) >= 0
                    }
                    ))
                }
                ))) || e.field_default_image)
            }
              , Ae = (0,
            v.k)(se, "").replace(/<[^>]*>/g, "")
              , Ce = (0,
            v.k)(be, "h2")
              , Pe = null == Se || null === (n = Se[0]) || void 0 === n ? void 0 : n.field_filter_label
              , Ie = function(e, t) {
                return function(n) {
                    var r = g(g({}, ie), {}, _({}, e, n));
                    Oe.forEach((function(e) {
                        e.order > t && delete r[e.fieldKey]
                    }
                    )),
                    le(r);
                    var a = function(e) {
                        var t;
                        return Oe.map((function(n, r) {
                            var a, o;
                            if (!t) {
                                var i = null == n || null === (a = n.field_filter_terms) || void 0 === a || null === (o = a.find((function(t) {
                                    return (null == t ? void 0 : t.target_id) == e
                                }
                                ))) || void 0 === o ? void 0 : o.name;
                                i && (t = "Body|Tab|".concat(i.replace(/\s+/g, "-")))
                            }
                        }
                        )),
                        t
                    }(n);
                    (0,
                    f.$)("Link Clicked", a, x, N)
                }
            }
              , Te = null == he ? void 0 : he[0]
              , He = (0,
            m.B)((null == Te ? void 0 : Te.field_cta) || [], N, x, $)
              , Be = null == Te ? void 0 : Te.headline
              , Ke = ke(Te)
              , Me = (null == Ke ? void 0 : Ke.rel_url) || ""
              , De = null == Ke || null === (a = Ke.options) || void 0 === a ? void 0 : a.alt
              , Re = (0,
            v.k)(null == Te ? void 0 : Te.body, "")
              , Ge = [].concat(y(Se), y(je))
              , Fe = !!Ee || Ge.every((function(e) {
                return ie[e.fieldKey]
            }
            ))
              , Ue = null === (p = je) || void 0 === p || null === (b = p[0]) || void 0 === b ? void 0 : b.field_filter_terms.find((function(e) {
                return xe.some((function(t) {
                    return e.target_id === t
                }
                ))
            }
            ))
              , Ye = ye.find((function(e) {
                return Ge.every((function(t) {
                    var n;
                    return null === (n = e.field_filter_terms) || void 0 === n ? void 0 : n.some((function(e) {
                        return t.field_filter_terms.find((function(t) {
                            return t.target_id === e.target_id
                        }
                        )) && xe.find((function(t) {
                            return t === e.target_id
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ));
            null == Ye && Ee && (Ye = null == ye ? void 0 : ye[0]);
            var qe = (0,
            m.B)((null === (E = Ye) || void 0 === E ? void 0 : E.field_cta) || [], N, x, $)
              , Xe = null === (L = Ye) || void 0 === L ? void 0 : L.headline
              , ze = null == Ue ? void 0 : Ue.headline
              , Ve = ke(Ye)
              , We = (null == Ve ? void 0 : Ve.rel_url) || ""
              , Je = null == Ve || null === (O = Ve.options) || void 0 === O ? void 0 : O.alt
              , $e = (0,
            v.k)(null === (S = Ye) || void 0 === S ? void 0 : S.body, "")
              , Qe = null === (j = Ye) || void 0 === j ? void 0 : j.background_color
              , Ze = null === (k = Ye) || void 0 === k ? void 0 : k.accordian
              , et = (null == _e || null === (A = _e[1]) || void 0 === A ? void 0 : A.global_heading) || {}
              , tt = (null == _e || null === (C = _e[0]) || void 0 === C ? void 0 : C.global_settings) || {}
              , nt = (null == tt || null === (P = tt.divider) || void 0 === P ? void 0 : P.divider_color) || "white"
              , rt = {
                paddingTop: (null == tt || null === (I = tt.container) || void 0 === I ? void 0 : I.padding_top) || void 0,
                paddingBottom: (null == tt || null === (T = tt.container) || void 0 === T ? void 0 : T.padding_bottom) || void 0,
                backgroundColor: (null == tt ? void 0 : tt.backround_color) || void 0,
                borderTop: "1" === ((null == tt || null === (H = tt.divider) || void 0 === H ? void 0 : H.enable_top_divider) || "0") ? "1px solid ".concat(nt) : void 0,
                borderBottom: "1" === ((null == tt || null === (B = tt.divider) || void 0 === B ? void 0 : B.enable_top_divider) || "0") ? "1px solid ".concat(nt) : void 0
            }
              , at = (0,
            f.Nw)(rt.backgroundColor ? rt.backgroundColor : "#ffffff");
            return null == et || null === (K = et.heading) || void 0 === K || K.headline,
            null == et || null === (M = et.heading) || void 0 === M || M.headline_text_color,
            null == et || null === (D = et.heading) || void 0 === D || D.heading_config,
            null == et || null === (R = et.paragraph) || void 0 === R || R.paragraph_text,
            null == et || null === (G = et.paragraph) || void 0 === G || G.paragraph_color,
            null == et || null === (F = et.sub_heading) || void 0 === F || F.sub_headline,
            null == et || null === (U = et.sub_heading) || void 0 === U || U.sub_headline_text_color,
            null == et || null === (Y = et.sub_heading) || void 0 === Y || Y.sub_heading_config,
            null == et || null === (q = et.sub_heading) || void 0 === q || q.sub_headline_enable_divider,
            (0,
            r.useEffect)((function() {
                (0,
                f.pK)(x, N)
            }
            ), []),
            (0,
            r.useEffect)((function() {
                setTimeout((function() {
                    Object.keys(ie).length > 0 && ce.current && !ue.current && de.moveIntoView()
                }
                ), 100)
            }
            ), [ie]),
            (0,
            r.useEffect)((function() {
                var e = new IntersectionObserver((function(e) {
                    var t = w(e, 1)[0];
                    ue.current = t.isIntersecting
                }
                ),{
                    threshold: 1
                });
                if (ce.current)
                    return e.observe(ce.current),
                    function() {
                        return e.disconnect()
                    }
            }
            ), []),
            r.createElement("section", {
                className: "how-we-can-help",
                "data-componentname": N,
                "data-componentid": x,
                "component-order": $,
                ref: ce
            }, r.createElement("div", {
                className: "".concat(o()["how-we-can-help-container"], " ") + Le,
                style: rt
            }, Ee && r.createElement("div", {
                className: o()["title-container"]
            }, r.createElement("h2", {
                className: o().heading
            }, null == Oe || null === (X = Oe[0]) || void 0 === X ? void 0 : X.field_filter_label), r.createElement("h3", {
                className: o().subheading,
                dangerouslySetInnerHTML: {
                    __html: null == Oe || null === (z = Oe[0]) || void 0 === z ? void 0 : z["sub-headline"]
                }
            })), r.createElement("div", {
                className: o()["how-we-can-help-headline"]
            }, Ae && r.createElement(i.default, {
                className: o()["how-we-can-help-heading"],
                level: Ce,
                value: Ae
            }), !Ee && Pe && r.createElement("span", {
                className: o()["how-we-can-help-text"],
                dangerouslySetInnerHTML: {
                    __html: Pe
                }
            })), ne < 1081 && Ee ? r.createElement("div", {
                className: "".concat(o()["how-we-can-help-select-components"], " ").concat(Ee && o()["tabbed-benefits-select"])
            }, je.map((function(e, t) {
                var n, a;
                return r.createElement(l.default, {
                    key: e.fieldKey,
                    itemContent: {
                        name: "how-we-can-help-select-".concat(t),
                        placeholder: "Select",
                        isTabbedBenefits: Ee,
                        options: e.field_filter_terms.map((function(e) {
                            return {
                                name: e.name,
                                value: e.target_id
                            }
                        }
                        ))
                    },
                    value: (null == ie ? void 0 : ie[e.fieldKey]) || Ee && (null == e || null === (n = e.field_filter_terms) || void 0 === n || null === (a = n[0]) || void 0 === a ? void 0 : a.target_id),
                    onChange: Ie(e.fieldKey, e.order)
                })
            }
            ))) : Se.map((function(e, t) {
                var n, a;
                return r.createElement(c.default, {
                    key: e.fieldKey,
                    value: (null == ie ? void 0 : ie[e.fieldKey]) || Ee && (null == e || null === (n = e.field_filter_terms) || void 0 === n || null === (a = n[0]) || void 0 === a ? void 0 : a.target_id),
                    onChange: Ie(e.fieldKey, e.order),
                    name: "how-we-can-help-buttons-".concat(t),
                    labels: e.field_filter_terms.map((function(e) {
                        return {
                            label: e.name,
                            value: e.target_id
                        }
                    }
                    ))
                })
            }
            )), !Ee && je.length > 0 && r.createElement("div", {
                className: o()["how-we-can-help-select-components"]
            }, je.map((function(e, t) {
                return r.createElement(l.default, {
                    key: e.fieldKey,
                    itemContent: {
                        name: "how-we-can-help-select-".concat(t),
                        label: e.field_filter_label,
                        placeholder: "Select",
                        options: e.field_filter_terms.map((function(e) {
                            return {
                                name: e.name,
                                value: e.target_id
                            }
                        }
                        ))
                    },
                    value: (null == ie ? void 0 : ie[e.fieldKey]) || "",
                    onChange: Ie(e.fieldKey, e.order)
                })
            }
            ))), Fe && r.createElement("div", {
                className: "".concat(o()["how-we-can-help-content-card"], " ").concat(o()[at])
            }, Ee && r.createElement(s.default, {
                headline: Xe,
                image: We,
                text: $e,
                accordionData: Ze
            }), !Ee && Ye && "standard" === Ye.variant && r.createElement(u.default, {
                ctaProps: qe,
                mainHeading: ze,
                mainHeadingLevel: "h2",
                headline: Xe,
                image: We,
                text: $e,
                backgroundColor: Qe
            }), !Ee && Ye && "minimal" === Ye.variant && r.createElement(d.default, {
                ctaProps: g(g({}, qe), {}, {
                    showLeaf: Z
                }),
                headline: Xe,
                headlineLevel: "h2",
                image: We,
                imageAlt: Je,
                text: $e
            }), !Ee && !Ye && Te && r.createElement(d.default, {
                ctaProps: g(g({}, He), {}, {
                    showLeaf: Z
                }),
                headline: Be,
                headlineLevel: "h1",
                image: Me,
                imageAlt: De,
                text: Re
            }))))
        }
    }
    ,
    11964: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            default: ()=>l
        });
        var r = n(96540)
          , a = n(51150)
          , o = n.n(a)
          , i = n(90776);
        const l = function(e) {
            var t = e.value
              , n = e.onChange
              , a = e.name
              , l = e.labels
              , c = (0,
            r.useRef)(null);
            (0,
            i.A)(c);
            var u = l && l.length <= 3 ? " ".concat(o()["tabbed-ben-wrap"]) : "";
            return r.createElement("ul", {
                className: "radio-button-group" + u,
                ref: c
            }, l.map((function(e, i) {
                var l, c = e.label, u = e.value, d = t === u;
                return r.createElement("li", {
                    className: o()["radio-button-wrapper"],
                    key: "".concat(a, "-").concat(i)
                }, r.createElement("input", {
                    className: o()["radio-button"],
                    type: "radio",
                    value: t,
                    id: "".concat(a, "-").concat(i),
                    name: a,
                    onChange: (l = u,
                    function() {
                        return n(l)
                    }
                    ),
                    checked: d
                }), r.createElement("span", {
                    className: o()["radio-button-label"]
                }, c))
            }
            )))
        }
    }
    ,
    82746: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            default: ()=>_
        });
        var r = n(96540)
          , a = n(63662)
          , o = n(93906);
        const i = n.p + "c0479317c4209b5010db.svg"
          , l = n.p + "5777b790e39cd1582ec3.svg";
        var c = n(57311)
          , u = n.n(c)
          , d = n(5612)
          , s = n(29571)
          , f = n(56979)
          , v = n(58363);
        function m(e) {
            return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            m(e)
        }
        function h() {
            h = function() {
                return t
            }
            ;
            var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, a = Object.defineProperty || function(e, t, n) {
                e[t] = n.value
            }
            , o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", l = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                u({}, "")
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n
                }
            }
            function d(e, t, n, r) {
                var o = t && t.prototype instanceof g ? t : g
                  , i = Object.create(o.prototype)
                  , l = new P(r || []);
                return a(i, "_invoke", {
                    value: j(e, n, l)
                }),
                i
            }
            function s(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = d;
            var f = "suspendedStart"
              , v = "suspendedYield"
              , p = "executing"
              , y = "completed"
              , b = {};
            function g() {}
            function _() {}
            function w() {}
            var E = {};
            u(E, i, (function() {
                return this
            }
            ));
            var L = Object.getPrototypeOf
              , x = L && L(L(I([])));
            x && x !== n && r.call(x, i) && (E = x);
            var N = w.prototype = g.prototype = Object.create(E);
            function O(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function S(e, t) {
                function n(a, o, i, l) {
                    var c = s(e[a], e, o);
                    if ("throw" !== c.type) {
                        var u = c.arg
                          , d = u.value;
                        return d && "object" == m(d) && r.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                            n("next", e, i, l)
                        }
                        ), (function(e) {
                            n("throw", e, i, l)
                        }
                        )) : t.resolve(d).then((function(e) {
                            u.value = e,
                            i(u)
                        }
                        ), (function(e) {
                            return n("throw", e, i, l)
                        }
                        ))
                    }
                    l(c.arg)
                }
                var o;
                a(this, "_invoke", {
                    value: function(e, r) {
                        function a() {
                            return new t((function(t, a) {
                                n(e, r, t, a)
                            }
                            ))
                        }
                        return o = o ? o.then(a, a) : a()
                    }
                })
            }
            function j(t, n, r) {
                var a = f;
                return function(o, i) {
                    if (a === p)
                        throw Error("Generator is already running");
                    if (a === y) {
                        if ("throw" === o)
                            throw i;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (r.method = o,
                    r.arg = i; ; ) {
                        var l = r.delegate;
                        if (l) {
                            var c = k(l, r);
                            if (c) {
                                if (c === b)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === r.method)
                            r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (a === f)
                                throw a = y,
                                r.arg;
                            r.dispatchException(r.arg)
                        } else
                            "return" === r.method && r.abrupt("return", r.arg);
                        a = p;
                        var u = s(t, n, r);
                        if ("normal" === u.type) {
                            if (a = r.done ? y : v,
                            u.arg === b)
                                continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (a = y,
                        r.method = "throw",
                        r.arg = u.arg)
                    }
                }
            }
            function k(t, n) {
                var r = n.method
                  , a = t.iterator[r];
                if (a === e)
                    return n.delegate = null,
                    "throw" === r && t.iterator.return && (n.method = "return",
                    n.arg = e,
                    k(t, n),
                    "throw" === n.method) || "return" !== r && (n.method = "throw",
                    n.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                    b;
                var o = s(a, t.iterator, n.arg);
                if ("throw" === o.type)
                    return n.method = "throw",
                    n.arg = o.arg,
                    n.delegate = null,
                    b;
                var i = o.arg;
                return i ? i.done ? (n[t.resultName] = i.value,
                n.next = t.nextLoc,
                "return" !== n.method && (n.method = "next",
                n.arg = e),
                n.delegate = null,
                b) : i : (n.method = "throw",
                n.arg = new TypeError("iterator result is not an object"),
                n.delegate = null,
                b)
            }
            function A(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function C(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function P(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(A, this),
                this.reset(!0)
            }
            function I(t) {
                if (t || "" === t) {
                    var n = t[i];
                    if (n)
                        return n.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var a = -1
                          , o = function n() {
                            for (; ++a < t.length; )
                                if (r.call(t, a))
                                    return n.value = t[a],
                                    n.done = !1,
                                    n;
                            return n.value = e,
                            n.done = !0,
                            n
                        };
                        return o.next = o
                    }
                }
                throw new TypeError(m(t) + " is not iterable")
            }
            return _.prototype = w,
            a(N, "constructor", {
                value: w,
                configurable: !0
            }),
            a(w, "constructor", {
                value: _,
                configurable: !0
            }),
            _.displayName = u(w, c, "GeneratorFunction"),
            t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : (e.__proto__ = w,
                u(e, c, "GeneratorFunction")),
                e.prototype = Object.create(N),
                e
            }
            ,
            t.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            O(S.prototype),
            u(S.prototype, l, (function() {
                return this
            }
            )),
            t.AsyncIterator = S,
            t.async = function(e, n, r, a, o) {
                void 0 === o && (o = Promise);
                var i = new S(d(e, n, r, a),o);
                return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }
                ))
            }
            ,
            O(N),
            u(N, c, "Generator"),
            u(N, i, (function() {
                return this
            }
            )),
            u(N, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(e) {
                var t = Object(e)
                  , n = [];
                for (var r in t)
                    n.push(r);
                return n.reverse(),
                function e() {
                    for (; n.length; ) {
                        var r = n.pop();
                        if (r in t)
                            return e.value = r,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            t.values = I,
            P.prototype = {
                constructor: P,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = e,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = e,
                    this.tryEntries.forEach(C),
                    !t)
                        for (var n in this)
                            "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var n = this;
                    function a(r, a) {
                        return l.type = "throw",
                        l.arg = t,
                        n.next = r,
                        a && (n.method = "next",
                        n.arg = e),
                        !!a
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o]
                          , l = i.completion;
                        if ("root" === i.tryLoc)
                            return a("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc")
                              , u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc)
                                    return a(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return a(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc)
                                    return a(i.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return a(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var a = this.tryEntries[n];
                        if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var o = a;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return i.type = e,
                    i.arg = t,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    b) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    b
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                            return this.complete(n.completion, n.afterLoc),
                            C(n),
                            b
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                C(n)
                            }
                            return a
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: I(t),
                        resultName: n,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = e),
                    b
                }
            },
            t
        }
        function p(e, t, n, r, a, o, i) {
            try {
                var l = e[o](i)
                  , c = l.value
            } catch (e) {
                return void n(e)
            }
            l.done ? t(c) : Promise.resolve(c).then(r, a)
        }
        function y(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, a) {
                    var o = e.apply(t, n);
                    function i(e) {
                        p(o, r, a, i, l, "next", e)
                    }
                    function l(e) {
                        p(o, r, a, i, l, "throw", e)
                    }
                    i(void 0)
                }
                ))
            }
        }
        function b(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, a, o, i, l = [], c = !0, u = !1;
                    try {
                        if (o = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            c = !1
                        } else
                            for (; !(c = (r = o.call(n)).done) && (l.push(r.value),
                            l.length !== t); c = !0)
                                ;
                    } catch (e) {
                        u = !0,
                        a = e
                    } finally {
                        try {
                            if (!c && null != n.return && (i = n.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (u)
                                throw a
                        }
                    }
                    return l
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return g(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function g(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        const _ = function(e) {
            var t = e.itemContent
              , n = e.onChange
              , c = e.value
              , m = b((0,
            r.useState)(!1), 2)
              , p = m[0]
              , g = m[1]
              , _ = b((0,
            r.useState)(!1), 2)
              , w = _[0]
              , E = _[1]
              , L = b((0,
            r.useState)(0), 2)
              , x = L[0]
              , N = L[1]
              , O = b((0,
            r.useState)(0), 2)
              , S = O[0]
              , j = O[1]
              , k = t.label
              , A = t.name
              , C = t.options
              , P = t.placeholder
              , I = t.isTabbedBenefits
              , T = A.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "")
              , H = "select-input-".concat(T)
              , B = "".concat(H, "-label")
              , K = "".concat(H, "-list")
              , M = function() {
                var e = y(h().mark((function e() {
                    var t, n, r, a, o, i, l, c;
                    return h().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                t = document.querySelector("#".concat(H)),
                                n = document.querySelector("#".concat(K)).clientHeight,
                                r = t.getBoundingClientRect().bottom,
                                a = window.innerHeight,
                                E(o = r >= a - n - 16),
                                n = n > 220 ? 220 : n,
                                i = o ? t.getBoundingClientRect().top - n - 2 : t.getBoundingClientRect().bottom,
                                N(i),
                                l = t.clientWidth,
                                c = t.getBoundingClientRect().left + l / 2 + 2,
                                j(c);
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return r.createElement(d.A, {
                className: "".concat(u()["select-component-wrapper"], " ").concat(c && u()["has-selection"], " ").concat(p && u()["is-open"], " ").concat(w && u()["open-upwards"], " ").concat(I && u()["tabbed-benefits"]),
                sx: {
                    m: 1,
                    minWidth: 120
                },
                size: "small"
            }, k && r.createElement(s.A, {
                className: u()["select-input-label"],
                id: B,
                shrink: !1
            }, k || ""), r.createElement(f.A, {
                id: H,
                displayEmpty: !0,
                IconComponent: function() {
                    return c ? r.createElement("img", {
                        className: u()["custom-select-icon"],
                        src: p ? i : l
                    }) : r.createElement("img", {
                        className: u()["custom-select-icon"],
                        src: p ? a : o
                    })
                },
                label: k || "",
                labelId: B,
                onClose: function() {
                    return g(!1)
                },
                onOpen: y(h().mark((function e() {
                    return h().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                g(!0);
                            case 2:
                                M();
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                onChange: function(e) {
                    var t;
                    n && n(null === (t = e.target) || void 0 === t ? void 0 : t.value)
                },
                value: c,
                renderValue: function(e) {
                    return e ? (null == C ? void 0 : C.find((function(e) {
                        return e.value === c
                    }
                    ))).name : P
                },
                MenuProps: {
                    anchorReference: "anchorPosition",
                    anchorPosition: {
                        top: x,
                        left: S
                    },
                    anchorOrigin: {
                        horizontal: "left",
                        vertical: "".concat(w ? "top" : "bottom")
                    },
                    classes: {
                        paper: "".concat(u()["select-list"], " ").concat(w && u()["open-upwards"])
                    },
                    MenuListProps: {
                        id: K
                    }
                }
            }, (null == C ? void 0 : C.length) && C.map((function(e) {
                return r.createElement(v.A, {
                    value: e.value,
                    key: e.name
                }, e.name)
            }
            ))))
        }
    }
    ,
    97305: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            default: ()=>d
        });
        var r = n(96540)
          , a = n(83649)
          , o = n.n(a)
          , i = (n(39642),
        n(67739))
          , l = n(61038)
          , c = "How We Can Help"
          , u = "how_we_can_help";
        const d = function(e) {
            var t = e.headline
              , n = e.text
              , a = e.image
              , d = e.accordionData;
            return r.createElement("div", {
                className: o()["tabbed-content"]
            }, r.createElement("div", {
                className: o()["tabbed-image"]
            }, r.createElement("img", {
                src: a
            })), r.createElement("div", {
                className: o()["tabbed-text-content"]
            }, r.createElement("h3", {
                className: o()["tabbed-text-heading"]
            }, t), r.createElement("div", {
                className: o()["tabbed-text-subheading"]
            }, r.createElement("span", {
                dangerouslySetInnerHTML: {
                    __html: n
                }
            })), r.createElement("div", {
                className: o()["tabbed-accordion"]
            }, d && d.map((function(e, t) {
                var n, a, d, s, f, v = {
                    ctaType: e.card_cta && e.card_cta.field_carousel_cta_type ? e.card_cta.field_carousel_cta_type : "",
                    ctaUrl: e.card_cta && e.card_cta.field_cta_link && e.card_cta.field_cta_link.link ? e.card_cta.field_cta_link.link : "",
                    ctaLabel: e.card_cta && e.card_cta.field_cta_link && e.card_cta.field_cta_link.label ? e.card_cta.field_cta_link.label : "",
                    ctaVideo: e.card_cta && e.card_cta.field_cta_brightcove_video ? e.card_cta.field_cta_brightcove_video.video_id[0].value : "",
                    ctaForm: e.card_cta && e.card_cta.field_carousel_gated_form ? e.card_cta.field_carousel_gated_form.value : "",
                    ctaStyle: e.card_cta && e.card_cta.field_cta_style ? e.card_cta.field_cta_style.field_cta_size[0].value : "",
                    ctaIcon: null !== (n = null == e || null === (a = e.card_cta) || void 0 === a || null === (d = a.field_cta_style) || void 0 === d || null === (s = d.field_cta_icon_location) || void 0 === s || null === (f = s[0]) || void 0 === f ? void 0 : f.value) && void 0 !== n ? n : "",
                    dataComponentName: c,
                    dataMachineName: u
                };
                return r.createElement("div", {
                    id: t,
                    className: o()["accordion-content"],
                    onClick: function(t) {
                        return n = t,
                        r = e.field_title,
                        function(e) {
                            var t = document.getElementsByClassName("accordion-active");
                            t && t[0] && t[0].id !== e.currentTarget.id ? (t[0].classList.remove("accordion-active"),
                            e.currentTarget.classList.add("accordion-active")) : void 0 === t[0] ? e.currentTarget.classList.add("accordion-active") : e.currentTarget.classList.remove("accordion-active")
                        }(n),
                        void (0,
                        l.Xt)(c, u, "Accordian", r);
                        var n, r
                    }
                }, r.createElement("div", {
                    className: o()["accordion-content-heading"],
                    style: {
                        color: e.field_title_color
                    }
                }, e.field_title), r.createElement("div", {
                    className: o()["accordion-inner-content"]
                }, r.createElement("div", {
                    className: o()["accordion-inner-text"],
                    dangerouslySetInnerHTML: {
                        __html: e.field_description
                    }
                }), v.ctaLabel && r.createElement(i.default, v)))
            }
            )))))
        }
    }
    ,
    29184: (e,t,n)=>{
        "use strict";
        n.d(t, {
            k: ()=>r
        });
        var r = function(e, t) {
            var n, r;
            return null !== (n = null == e || null === (r = e[0]) || void 0 === r ? void 0 : r.value) && void 0 !== n ? n : t
        }
    }
    ,
    38351: (e,t,n)=>{
        "use strict";
        n.d(t, {
            G: ()=>a
        });
        var r = n(29184)
          , a = function(e, t, n, a) {
            var o, i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, l = Array.isArray(e) ? null !== (o = null == e ? void 0 : e[0]) && void 0 !== o ? o : {} : null != e ? e : {}, c = l.label, u = void 0 === c ? "" : c, d = l.style, s = l.link, f = l.type || (0,
            r.k)(null == d ? void 0 : d.field_cta_type);
            return {
                ctaLabel: u,
                ctaStyle: (0,
                r.k)(null == d ? void 0 : d.field_cta_size),
                ctaUrl: s,
                ctaType: f,
                dataComponentName: t,
                dataMachineName: n,
                index: i,
                parentOrder: a,
                ctaIcon: (0,
                r.k)(null == d ? void 0 : d.field_cta_icon_location)
            }
        }
    }
    ,
    90776: (e,t,n)=>{
        "use strict";
        n.d(t, {
            A: ()=>a
        });
        var r = n(96540);
        const a = function(e) {
            var t = (0,
            r.useCallback)((function() {
                var t, n, r = null == e ? void 0 : e.current, a = !1;
                r && (r.addEventListener("mousedown", (function(e) {
                    a = !0,
                    r.classList.add("active"),
                    t = e.pageX - r.offsetLeft,
                    n = r.scrollLeft
                }
                )),
                r.addEventListener("mouseleave", (function() {
                    a = !1,
                    r.classList.remove("active")
                }
                )),
                r.addEventListener("mouseup", (function() {
                    a = !1,
                    r.classList.remove("active")
                }
                )),
                r.addEventListener("mousemove", (function(e) {
                    if (a) {
                        e.preventDefault();
                        var o = 2 * (e.pageX - r.offsetLeft - t);
                        r.scrollLeft,
                        r.scrollLeft = n - o
                    }
                }
                )))
            }
            ));
            (0,
            r.useEffect)((function() {
                null !== e && t()
            }
            ), [])
        }
    }
    ,
    62752: (e,t,n)=>{
        "use strict";
        n.d(t, {
            B: ()=>o
        });
        var r = n(96540)
          , a = n(38351)
          , o = function(e, t, n, o) {
            var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
            return (0,
            r.useMemo)((function() {
                return (0,
                a.G)(e, t, n, o, i)
            }
            ), [e, t, n, o, i])
        }
    }
    ,
    81430: (e,t,n)=>{
        "use strict";
        n.d(t, {
            j: ()=>o
        });
        var r = n(96540);
        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var o = function() {
            var e, t, n = "undefined" != typeof window ? window.matchMedia("(prefers-reduced-motion: reduce)") : null, o = (e = (0,
            r.useState)(!!n && n.matches),
            t = 2,
            function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, a, o, i, l = [], c = !0, u = !1;
                    try {
                        if (o = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            c = !1
                        } else
                            for (; !(c = (r = o.call(n)).done) && (l.push(r.value),
                            l.length !== t); c = !0)
                                ;
                    } catch (e) {
                        u = !0,
                        a = e
                    } finally {
                        try {
                            if (!c && null != n.return && (i = n.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (u)
                                throw a
                        }
                    }
                    return l
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return a(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()), i = o[0], l = o[1];
            return (0,
            r.useEffect)((function() {
                n && l(n.matches);
                var e = function(e) {
                    l(e.matches)
                };
                return null == n || n.addEventListener("change", e),
                function() {
                    return null == n ? void 0 : n.removeEventListener("change", e)
                }
            }
            ), []),
            i
        }
    }
    ,
    21127: e=>{
        e.exports = {
            "content-card-main-heading": "vsOrM",
            "content-card": "NJ29Q",
            "content-card-image": "LaqpT",
            "content-card-text-container": "sMYEo",
            "content-card-headline": "qRBqB",
            "content-card-text": "KSmyh",
            "content-card-decorative-button-container": "dkvvq",
            "content-card-decorative-button": "Lompq",
            "content-card-honey": "FzjtT",
            "content-card-teal": "OIbLw",
            "content-card-purple": "YHdPV"
        }
    }
    ,
    16174: e=>{
        e.exports = {
            "content-card-minimal": "o0tSo",
            "card-text-wrapper": "gZuD5",
            "card-headline": "cI_LG",
            "card-text": "OTyDB",
            "card-cta-wrapper": "owXIC",
            "card-image-wrapper": "wVDhE",
            "card-image": "geXB9"
        }
    }
    ,
    77283: e=>{
        e.exports = {
            "inherit-parent-typo": "Lx7n8",
            "dark-tone": "aO45C",
            "light-tone": "ndmY6",
            "how-we-can-help-container": "ltJFJ",
            "how-we-can-help-headline": "BXLrw",
            "how-we-can-help-heading": "M4AgY",
            "how-we-can-help-text": "KNaOL",
            "how-we-can-help-select-components": "YN2sj",
            "how-we-can-help-content-card": "fvKtO",
            "tabbed-benefits": "CQ5RZ",
            "title-container": "jhZP1",
            heading: "PR72e",
            subheading: "oUq9I",
            "tabbed-benefits-select": "icjQh"
        }
    }
    ,
    51150: e=>{
        e.exports = {
            "tabbed-ben-wrap": "GjiCK",
            "radio-button-wrapper": "bPEyP",
            "radio-button-label": "Psyyp",
            "radio-button": "cTKBH"
        }
    }
    ,
    57311: e=>{
        e.exports = {
            "select-component-wrapper": "MdMfE",
            "select-input-label": "Ygg8o",
            "tabbed-benefits": "cHgbE",
            "is-open": "UwRD7",
            "open-upwards": "XL_te",
            "has-selection": "kHXb3",
            "select-list": "Cixd7"
        }
    }
    ,
    83649: e=>{
        e.exports = {
            "inherit-parent-typo": "oj91a",
            "tabbed-content": "KH1wR",
            "tabbed-image": "e9o3B",
            "tabbed-text-content": "DrGp6",
            "tabbed-text-heading": "EFk5i",
            "tabbed-text-subheading": "FhROK",
            "accordion-content": "ukNSY",
            "accordion-content-heading": "m4WTd",
            "accordion-inner-content": "JNxLt",
            "accordion-inner-text": "fvWB7",
            "accorion-text-content": "PRLHs"
        }
    }
}]);
