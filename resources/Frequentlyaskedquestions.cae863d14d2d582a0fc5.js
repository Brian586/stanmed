(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[8507, 5538], {
    47653: (e, t, a) => {
        "use strict";
        a.r(t),
            a.d(t, {
                default: () => c
            });
        var n = a(96540);
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
        function i(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    a.push.apply(a, n)
            }
            return a
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(a), !0).forEach((function (t) {
                    l(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : i(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        function l(e, t, a) {
            return (t = function (e) {
                var t = function (e, t) {
                    if ("object" != r(e) || !e)
                        return e;
                    var a = e[Symbol.toPrimitive];
                    if (void 0 !== a) {
                        var n = a.call(e, "string");
                        if ("object" != r(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == r(t) ? t : t + ""
            }(t)) in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
                e
        }
        function c(e) {
            var t = e.visibility
                , a = void 0 !== t && t
                , r = e.borderStyle
                , i = e.style;
            if (!a)
                return null;
            var l = {
                style: o({
                    margin: " 0 auto",
                    borderRight: "0",
                    borderLeft: "0",
                    borderBottom: "0",
                    borderTop: r || "1px solid #d8d8d8",
                    maxWidth: "896px",
                    width: "calc(100% - 60px)",
                    minWidth: "315px"
                }, void 0 === i ? {} : i)
            };
            return n.createElement(n.Fragment, null, a && n.createElement("hr", l))
        }
    }
    ,
    77622: (e, t, a) => {
        "use strict";
        a.r(t),
            a.d(t, {
                default: () => O
            });
        var n = a(96540)
            , r = a(29233)
            , i = a(96892)
            , o = a(2404)
            , l = a(51581)
            , c = a(71572)
            , d = a.n(c)
            , f = a(61038)
            , s = (a(84315),
                a(7452),
                a(67739))
            , u = a(9987)
            , p = a(47653);
        function _(e) {
            return _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                _(e)
        }
        function m() {
            return m = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                        ({}).hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }
                ,
                m.apply(null, arguments)
        }
        function b(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, y(n.key), n)
            }
        }
        function y(e) {
            var t = function (e, t) {
                if ("object" != _(e) || !e)
                    return e;
                var a = e[Symbol.toPrimitive];
                if (void 0 !== a) {
                    var n = a.call(e, "string");
                    if ("object" != _(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == _(t) ? t : t + ""
        }
        function h(e, t, a) {
            return t = v(t),
                function (e, t) {
                    if (t && ("object" == _(t) || "function" == typeof t))
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
        function q(e, t) {
            return q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                q(e, t)
        }
        const O = function (e) {
            function t(e) {
                var a;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (a = h(this, t, [e])).toggle = a.toggle.bind(a),
                    a.state = {
                        collapse: 0,
                        toogleIcon: "faq-plus"
                    },
                    a.state = {
                        openGatedVideo: !1,
                        dataComponentName: "FAQ",
                        dataComponentId: "faq"
                    },
                    a.myTabRef = n.createRef(),
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
                    t && q(e, t)
            }(t, e),
                a = t,
                c = [{
                    key: "toggle",
                    value: function (e, t) {
                        var a = e.currentTarget.dataset.event;
                        (0,
                            f.Xt)(this.state.dataComponentName, this.state.dataComponentId, "accordian", t),
                            this.setState({
                                collapse: this.state.collapse === Number(a) ? 0 : Number(a)
                            })
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        (0,
                            f.pK)("faq", this.state.dataComponentName)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e, t, a, c, _ = this, b = this.props.itemContent, y = b && b ? b : "", h = this.state.collapse, g = [];
                        g = y.field_faq ? y.field_faq : [];
                        var v = y && y.field_bottom && y.field_bottom[0] ? y.field_bottom[0].value : null
                            , q = y && y.field_faqcta_link && y.field_faqcta_link[0] ? y.field_faqcta_link[0].value : "#"
                            , O = y && y.field_faqcta_label && y.field_faqcta_label[0] ? y.field_faqcta_label[0].value : null
                            , w = y && y.field_faqcta_style && y.field_faqcta_style.field_cta_size[0] ? y.field_faqcta_style.field_cta_size[0].value : null
                            , S = null !== (e = null == y || null === (t = y.field_faqcta_style) || void 0 === t || null === (a = t.field_cta_icon_location) || void 0 === a || null === (c = a[0]) || void 0 === c ? void 0 : c.value) && void 0 !== e ? e : ""
                            , E = y && y.field_faqcta_style && y.field_faqcta_style.field_cta_behaviour[0] ? y.field_faqcta_style.field_cta_behaviour[0].value : null
                            , N = y && y.field_faq_video.video_id && y.field_faq_video.video_id[0] ? y.field_faq_video.video_id[0].value : null
                            , j = y && y.field_faq_form && y.field_faq_form[0] ? y.field_faq_form[0].target_id : null
                            , C = y && y.field_faq_mtype ? y.field_faq_mtype[0] ? y.field_faq_mtype[0].value : null : "Link"
                            , P = y && y.field_faq_headline && y.field_faq_headline[0] ? y.field_faq_headline[0].value : null
                            , T = this.props.content && this.props.content.siteIdentifier ? this.props.content.siteIdentifier : null
                            , x = y.global_data
                            , k = x && x[0] && x[0].global_settings ? x[0].global_settings : ""
                            , D = x && x[1] && x[1].global_heading ? x[1].global_heading : ""
                            , I = {}
                            , L = k && k.container && k.container.container_width ? k.container.container_width : "1080px"
                            , H = k && k.container && k.container.padding_top ? k.container.padding_top : ""
                            , A = k && k.container && k.container.padding_bottom ? k.container.padding_bottom : "";
                        L && (I.maxWidth = L),
                            H && (I.paddingTop = H),
                            A && (I.paddingBottom = A),
                            I = L || H || A ? {
                                style: I
                            } : "";
                        var M = !(!k || !k.divider || "1" != k.divider.enable_top_divider)
                            , R = !(!k || !k.divider || "1" != k.divider.enable_bottom_divider)
                            , B = k && k.divider && k.divider.divider_color ? "1px solid ".concat(k.divider.divider_color) : "1px solid #d8d8d8"
                            , X = D && D.heading ? D.heading.headline : ""
                            , K = D && D.heading && D.heading.headline_text_color ? D.heading.headline_text_color : ""
                            , V = D && D.sub_heading && D.sub_heading.sub_headline ? D.sub_heading.sub_headline : ""
                            , W = D && D.sub_heading && D.sub_heading.sub_headline_text_color ? D.sub_heading.sub_headline_text_color : ""
                            , z = !!(D && D.sub_heading && D.sub_heading.sub_headline_enable_divider && 1 == D.sub_heading.sub_headline_enable_divider)
                            , F = D && D.paragraph && D.paragraph.paragraph_text ? D.paragraph.paragraph_text : ""
                            , U = D && D.paragraph && D.paragraph.paragraph_color ? D.paragraph.paragraph_color : ""
                            , G = k && k.backround_color ? k.backround_color : ""
                            , J = P ? d().faqTab : ""
                            , Y = (0,
                                f.y_)(x)
                            , Q = Y.titleType
                            , Z = Y.subheadType
                            , $ = Y.paraType
                            , ee = y && y.field_faq_headline_inputs && y.field_faq_headline_inputs[0] && y.field_faq_headline_inputs[0].value ? y.field_faq_headline_inputs[0].value : "xxs-head"
                            , te = y && y.field_faq_body_copy_inputs && y.field_faq_body_copy_inputs[0] && y.field_faq_body_copy_inputs[0].value ? y.field_faq_body_copy_inputs[0].value : "l-body"
                            , ae = G ? {
                                style: {
                                    backgroundColor: G
                                }
                            } : ""
                            , ne = (0,
                                f.Nw)(G || "#ffffff");
                        if (g.length > 0) {
                            var re = g.map((function (e, t) {
                                var a, c = t + 1, f = h === c ? "".concat(d().cssCircle, " ").concat(d().minusSign) : "".concat(d().cssCircle, " ").concat(d().plusSign), s = null !== (a = null == e ? void 0 : e.question.replace(/<[^>]+>|,/g, " ").trim().replace(/\s+/g, "-")) && void 0 !== a ? a : "";
                                return n.createElement(r.A, {
                                    key: c,
                                    className: "".concat(d().card)
                                }, n.createElement("div", {
                                    className: "".concat(d()["faq-item"], " ", "faq-item")
                                }, n.createElement(i.A, {
                                    "data-event": c,
                                    className: "".concat(d()["card-header"])
                                }, n.createElement("div", {
                                    className: f,
                                    onClick: function (e) {
                                        return _.toggle(e, s)
                                    },
                                    "data-event": c
                                }), n.createElement("h3", {
                                    className: "".concat(ee + "-sspro", " ").concat(d()["faq-item-header"], " ", "faq-item-header"),
                                    onClick: function (e) {
                                        return _.toggle(e, s)
                                    },
                                    "data-event": c,
                                    dangerouslySetInnerHTML: {
                                        __html: e.question ? e.question : ""
                                    }
                                })), n.createElement(o.A, {
                                    isOpen: h === c
                                }, n.createElement(l.A, {
                                    className: "".concat(te + "-sspro", " ").concat(d()["card-body"])
                                }, n.createElement("span", {
                                    className: "  ".concat(d()["faq-desc-link"]),
                                    dangerouslySetInnerHTML: {
                                        __html: e.answer ? e.answer : ""
                                    }
                                })))))
                            }
                            ));
                            return n.createElement("section", m({
                                className: "".concat(d()["faq-wrapper"], " ", "faq-wrapper", " ").concat(J, " component-order ").concat(d()[ne])
                            }, ae, {
                                "data-componentname": this.state.dataComponentName,
                                "component-order": this.props.componentOrder
                            }), n.createElement(p.default, {
                                visibility: M,
                                borderStyle: B
                            }), n.createElement("div", m({
                                className: "".concat(d().container, " ", "container")
                            }, I), n.createElement(u.default, {
                                containerSize: "standard",
                                siteId: T,
                                heading: X,
                                headingType: Q,
                                subHeadingType: Z,
                                paragraphType: $,
                                headingColor: K,
                                subHeading: V,
                                subHeadingColor: W,
                                dividerVisibility: z,
                                dividerColor: "#4e2d82",
                                paragraph: F,
                                paragraphColor: U,
                                setParagraphHtml: !0
                            }), P && n.createElement("span", {
                                className: "".concat(d()["faq-page-headline"]),
                                dangerouslySetInnerHTML: {
                                    __html: P
                                }
                            }), re, v ? n.createElement("div", {
                                className: "".concat(d()["faq-explainer-wrapper"], " ", "faq-explainer-wrapper")
                            }, n.createElement("p", {
                                className: "".concat(d()["faq-explainer"], " p2 para-sm"),
                                dangerouslySetInnerHTML: {
                                    __html: v
                                }
                            })) : null, q && O && n.createElement("div", {
                                className: "".concat(d()["faq-schedule-meeting-wrapper"])
                            }, n.createElement(s.default, {
                                ctaType: C,
                                ctaUrl: q,
                                ctaLabel: O,
                                ctaStyle: w,
                                ctaFormID: j,
                                ctaVideoID: N,
                                ctaLinkTarget: E,
                                dataComponentName: this.state.dataComponentName,
                                dataMachineName: "faq",
                                parentOrder: this.props.componentOrder,
                                ctaIcon: S
                            }))), n.createElement(p.default, {
                                visibility: R,
                                borderStyle: B
                            }))
                        }
                    }
                }],
                c && b(a.prototype, c),
                Object.defineProperty(a, "prototype", {
                    writable: !1
                }),
                a;
            var a, c
        }(n.Component)
    }
    ,
    71572: e => {
        e.exports = {
            "inherit-parent-typo": "s9CoY",
            "faq-wrapper": "iC49B",
            container: "VsI1i",
            card: "NJamk",
            "card-header": "zuVmR",
            "faq-page-title": "XDCpd",
            "faq-page-headline": "XybcT",
            faqTab: "nEe3X",
            "faq-item": "XGSmH",
            "faq-item-header": "vCRhJ",
            "card-body": "PNikW",
            "faq-desc-link": "pXMTx",
            "faq-plus": "P34gu",
            "faq-minus": "O_ihg",
            "faq-desc-link-wrapper": "SaMhW",
            "faq-explainer": "yKB4a",
            "faq-schedule-meeting": "PYnZD",
            "faq-schedule-meeting-wrapper": "XrDNO",
            cssCircle: "C5Uic",
            plusSign: "EFSwK",
            minusSign: "ytvON",
            "faq-actions-container": "Kay7f",
            "faq-actions": "He2rR",
            "dark-tone": "pg8_k",
            "light-tone": "Ml0NX"
        }
    }
}]);
