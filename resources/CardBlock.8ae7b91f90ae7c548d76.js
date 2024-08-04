(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[2976, 8695], {
    70499: (e, t, a) => {
        "use strict";
        a.r(t),
            a.d(t, {
                default: () => E
            });
        var n = a(96540)
            , o = a(2859)
            , r = a.n(o)
            , i = a(26914)
            , l = a(61038)
            , c = (a(84315),
                a(7452),
                a(67739))
            , d = a(9987);
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
        function p(e, t) {
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
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(a), !0).forEach((function (t) {
                    s(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : p(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        function s(e, t, a) {
            return (t = f(t)) in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
                e
        }
        function m(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, f(n.key), n)
            }
        }
        function f(e) {
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
        function b(e, t, a) {
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
        function h(e, t) {
            return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                h(e, t)
        }
        function y() {
            return y = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                        ({}).hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }
                ,
                y.apply(null, arguments)
        }
        var k = function (e, t, a) {
            var o = e && e.field_ci_image ? e.field_ci_image.rel_url : null
                , i = e && e.field_ci_image && e.field_ci_image.options ? e.field_ci_image.options.alt : null
                , d = "image/".concat((0,
                    l.yg)(o))
                , _ = e && e.field_ci_image && e.field_ci_image.webp_image_url ? e.field_ci_image.webp_image_url : ""
                , p = e && e.field_video && e.field_video.video_id && e.field_video.video_id.length > 0 ? e.field_video.video_id[0].value : ""
                , u = e && e.field_card_image && e.field_card_image.data ? e.field_card_image.data : e && e.field_card_video && e.field_card_video.data ? e.field_card_video.data : null;
            return u && u.map((function (u, s) {
                var m, f, b, g, v, h, k = u && u.title ? u.title : null, E = u && u.sub_title ? u.sub_title : null, w = null !== (m = null == u ? void 0 : u.headline_type) && void 0 !== m ? m : "xxs-head", O = null !== (f = null == u ? void 0 : u.sub_headline_type) && void 0 !== f ? f : "s-sub", x = null !== (b = null == u ? void 0 : u.paragraph_type) && void 0 !== b ? b : "l-body", N = u && u.description ? u.description : null, j = u && u.title_color ? {
                    style: {
                        color: u.title_color
                    }
                } : void 0, C = u && u.sub_title_color ? {
                    style: {
                        color: u.sub_title_color
                    }
                } : void 0, P = null !== (g = null == u ? void 0 : u.card_bg_color) && void 0 !== g ? g : "", T = (0,
                    l.Nw)(P || "#ffffff");
                "left" === e.field_ci_image_alignment ? v = r()["card-block-subwrap"] : "right" === e.field_ci_image_alignment && (v = r()["card-block-subwrap_reverse"]),
                    "center" === e.field_ci_verticle_alignment ? h = r()["card-block-subwrap_aligncenter"] : "top" === e.field_ci_verticle_alignment && (h = r()["card-block-subwrap_aligntop"]);
                var S, D = u && u.field_ct_cta_link.map((function (e, o) {
                    var i, l, d, _, p, u = e && e.field_cta_link_component, s = u && e.field_cta_link_component.field_carousel_cta_type ? e.field_cta_link_component.field_carousel_cta_type : "", m = u && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.link ? e.field_cta_link_component.field_cta_link.link : "", f = u && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.label ? e.field_cta_link_component.field_cta_link.label : "", b = u && e.field_cta_link_component.field_cta_brightcove_video && e.field_cta_link_component.field_cta_brightcove_video.video_id[0] && e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value ? e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value : "", g = u && e.field_cta_link_component.field_carousel_gated_form && e.field_cta_link_component.field_carousel_gated_form.value ? e.field_cta_link_component.field_carousel_gated_form.value : "", v = u && e.field_cta_link_component.field_cta_style ? e.field_cta_link_component.field_cta_style.field_cta_size[0].value : "", h = null !== (i = null == e || null === (l = e.field_cta_link_component) || void 0 === l || null === (d = l.field_cta_style) || void 0 === d || null === (_ = d.field_cta_icon_location) || void 0 === _ || null === (p = _[0]) || void 0 === p ? void 0 : p.value) && void 0 !== i ? i : "";
                    return f && n.createElement("div", {
                        className: "" === s ? "" : r()["card-block-ctabtn"],
                        key: o
                    }, n.createElement(c.default, {
                        ctaType: "" === s ? "Link" : s,
                        ctaUrl: m,
                        ctaLabel: f,
                        ctaFormID: g,
                        ctaVideoID: b,
                        ctaStyle: v,
                        dataComponentName: t,
                        dataMachineName: "50_50_ion_lander_module",
                        index: o,
                        parentOrder: a,
                        ctaIcon: h
                    }))
                }
                ));
                S = "above" === u.pos_sub_title || null === u.pos_sub_title ? r()["card-block-heading-wrapper-reverse"] : r()["card-block-heading-wrapper"];
                var I = "".concat(r()["card-block-heading-wrapper"], " ").concat(S);
                return n.createElement("div", {
                    className: "".concat(r()["card-block-subwrap"], " ").concat(v, " ").concat(h)
                }, n.createElement("div", {
                    className: r()["card-block-img"]
                }, p ? n.createElement(n.Fragment, null, n.createElement("div", {
                    "data-video-ids": p,
                    "data-experience": "5b0f79545eecca0010826d71"
                })) : "image/gif" != d ? n.createElement("picture", null, _ && n.createElement("source", {
                    srcSet: "".concat(_),
                    type: "image/webp"
                }), n.createElement("source", {
                    srcSet: o,
                    type: d
                }), n.createElement("img", {
                    width: "530px",
                    height: "340px",
                    loading: "lazy",
                    src: o,
                    alt: i
                })) : n.createElement("img", {
                    loading: "lazy",
                    src: o,
                    alt: i
                })), n.createElement("div", {
                    className: "".concat(r()["card-block"])
                }, n.createElement(n.Fragment, {
                    key: s
                }, n.createElement("div", {
                    className: I
                }, k && n.createElement("h3", y({
                    className: "".concat(r()["card-block-head"], " ").concat(w, "-sspro")
                }, j), k), (!E || "above" != u.pos_sub_title && u.pos_sub_title,
                    n.createElement("div", y({
                        className: "".concat(r()["card-block-subhead"], " para-sm ").concat(O, "-sspro"),
                        dangerouslySetInnerHTML: {
                            __html: E
                        }
                    }, C)))), n.createElement("div", {
                        className: "".concat(r()["card-block-txt"], " ").concat(x, "-sspro ").concat(r()[T]),
                        dangerouslySetInnerHTML: {
                            __html: N
                        }
                    }), D, (0 === s && e.field_card_image && e.field_card_image.data.length > 1 || e.field_card_video && e.field_card_video.data.length > 1) && n.createElement("hr", {
                        className: "".concat(r()["card-content-divider"])
                    }))))
            }
            ))
        };
        const E = function (e) {
            function t(e) {
                var a;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (a = b(this, t, [e])).state = {
                        dataComponentName: "50/50 Module"
                    },
                    a.componentId = "50_50_ion_lander_module",
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
                    t && h(e, t)
            }(t, e),
                a = t,
                (o = [{
                    key: "componentDidMount",
                    value: function () {
                        (0,
                            l.pK)(this.componentId, this.state.dataComponentName),
                            "black-theme" == this.props.content.globaldata.global_theme_settings && setTimeout((function () {
                                for (var e = document.querySelectorAll('[data-experience="5b0f79545eecca0010826d71"]'), t = 0; t < e.length; t++) {
                                    var a = e[t].childNodes[0]
                                        , n = document.createElement("style");
                                    n.textContent = ".ee-components-style-playButton:hover{fill: #0093b2 !important;color: #fff;} " + a.contentDocument.head.appendChild(n)
                                }
                            }
                            ), 5e3)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this
                            , t = this.props.itemContent
                            , a = this.props.content.siteIdentifier
                            , o = t && t.field_select_template && t.field_select_template[0] ? t.field_select_template[0].value : ""
                            , c = (t && t.field_card_background_color && t.field_card_background_color[0] && t.field_card_background_color[0].color,
                                t && t.global_data ? t.global_data : "")
                            , _ = c && c[0] && c[0].global_settings ? c[0].global_settings : ""
                            , p = c && c[1] && c[1].global_heading ? c[1].global_heading : ""
                            , s = p && p.heading ? p.heading.headline : ""
                            , m = p && p.heading && p.heading.headline_text_color ? p.heading.headline_text_color : "red"
                            , f = (0,
                                l.y_)(c)
                            , b = f.titleType
                            , g = f.subheadType
                            , v = f.paraType
                            , h = p && p.sub_heading && p.sub_heading.sub_headline ? p.sub_heading.sub_headline : ""
                            , E = p && p.sub_heading && p.sub_heading.sub_headline_text_color ? p.sub_heading.sub_headline_text_color : ""
                            , w = p && p.sub_heading && p.sub_heading.sub_headline_enable_divider && 1 == p.sub_heading.sub_headline_enable_divider ? Number(p.sub_heading.sub_headline_enable_divider) : ""
                            , O = p && p.paragraph && p.paragraph.paragraph_text ? p.paragraph.paragraph_text : ""
                            , x = p && p.paragraph && p.paragraph.paragraph_color ? p.paragraph.paragraph_color : ""
                            , N = _ && _.container && _.container.padding_bottom ? _.container.padding_bottom : ""
                            , j = _ && _.container && _.container.padding_top ? _.container.padding_top : ""
                            , C = !(!_ || !_.divider || "1" != _.divider.enable_top_divider)
                            , P = !(!_ || !_.divider || "1" != _.divider.enable_bottom_divider)
                            , T = _ && _.divider && _.divider.divider_color ? _.divider.divider_color : "#d8d8d8"
                            , S = t && t.field_design && t.field_design[0] ? t.field_design[0].value : "";
                        "card_image_template" === o ? t.card_image_template : ("card_text_template" === o || "card_video_template" === o) && t.card_text_template;
                        var D = {};
                        j && (D.paddingTop = j),
                            N && (D.paddingBottom = N);
                        var I = T ? {
                            style: {
                                borderTop: "1px solid ".concat(T)
                            }
                        } : "";
                        return n.createElement("section", {
                            className: "component-order " + S,
                            "data-componentname": this.state.dataComponentName,
                            "data-componentid": this.componentId,
                            "component-order": this.props.componentOrder
                        }, C && n.createElement("hr", y({
                            className: "".concat(r()["main-container-divider"])
                        }, I)), "card_text_template" === o ? n.createElement(i.default, {
                            itemContent: t,
                            content: this.props.content
                        }) : n.createElement("div", null, s || O || h ? n.createElement(d.default, {
                            containerSize: "standard",
                            heading: s,
                            headingColor: m,
                            headingType: b,
                            subHeadingType: g,
                            paragraphType: v,
                            paragraph: O,
                            paragraphColor: x,
                            paragraphFontSize: null,
                            subHeading: h,
                            subHeadingColor: E,
                            dividerVisibility: w,
                            dividerColor: "#4E2D82",
                            siteId: a,
                            setParagraphHtml: !0
                        }) : null, "card_video_template" === o ? t && t.card_video_template && t.card_video_template.length > 0 && t.card_video_template.map((function (t) {
                            return n.createElement("div", {
                                className: r()["card-block-wrap"],
                                style: u({
                                    backgroundColor: t.field_card_video.data.length > 0 && t.field_card_video.data[0].card_bg_color ? t.field_card_video.data[0].card_bg_color : ""
                                }, D)
                            }, k(t, e.state.dataComponentName, e.props.componentOrder))
                        }
                        )) : t && t.card_image_template && t.card_image_template.length > 0 && t.card_image_template.map((function (t) {
                            return n.createElement("div", {
                                className: r()["card-block-wrap"],
                                style: u({
                                    backgroundColor: t.field_card_image.data.length > 0 && t.field_card_image.data[0].card_bg_color ? t.field_card_image.data[0].card_bg_color : ""
                                }, D)
                            }, k(t, e.state.dataComponentName, e.props.componentOrder))
                        }
                        ))), P && n.createElement("hr", y({
                            className: "".concat(r()["main-container-divider"])
                        }, I)))
                    }
                }]) && m(a.prototype, o),
                Object.defineProperty(a, "prototype", {
                    writable: !1
                }),
                a;
            var a, o
        }(n.Component)
    }
    ,
    26914: (e, t, a) => {
        "use strict";
        a.r(t),
            a.d(t, {
                default: () => b
            });
        var n = a(96540)
            , o = a(67739)
            , r = a(10772)
            , i = a.n(r)
            , l = a(9987);
        function c(e) {
            return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                c(e)
        }
        function d(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, _(n.key), n)
            }
        }
        function _(e) {
            var t = function (e, t) {
                if ("object" != c(e) || !e)
                    return e;
                var a = e[Symbol.toPrimitive];
                if (void 0 !== a) {
                    var n = a.call(e, "string");
                    if ("object" != c(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == c(t) ? t : t + ""
        }
        function p(e, t, a) {
            return t = s(t),
                function (e, t) {
                    if (t && ("object" == c(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, u() ? Reflect.construct(t, a || [], s(e).constructor) : t.apply(e, a))
        }
        function u() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (u = function () {
                return !!e
            }
            )()
        }
        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                s(e)
        }
        function m(e, t) {
            return m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                m(e, t)
        }
        a(61038);
        var f = function (e, t) {
            return n.createElement(n.Fragment, null, e && e.map((function (a, r) {
                var l, c, d, _, p, u = a ? a.title : "", s = a ? a.description : "", m = null !== (l = null == a ? void 0 : a.headline_type) && void 0 !== l ? l : "xxs-head", f = null !== (c = null == a ? void 0 : a.sub_headline_type) && void 0 !== c ? c : "s-sub", b = null !== (d = null == a ? void 0 : a.paragraph_type) && void 0 !== d ? d : "l-body", g = null !== (_ = null == a ? void 0 : a.title_color) && void 0 !== _ ? _ : "", v = null !== (p = null == a ? void 0 : a.sub_title_color) && void 0 !== p ? p : "", h = a ? a.sub_title : "", y = a ? a.field_ct_cta_link : "", k = e.length > 1 ? i()["stack-image-section"] : "", E = 1 === e.length ? i()["stack-align-center"] : "";
                return n.createElement("section", {
                    className: "".concat(k, " ").concat(E),
                    key: r
                }, "above" === a.pos_sub_title && h && n.createElement("span", {
                    className: "".concat(f, "-sspro para-sm"),
                    style: {
                        paddingBottom: "7px",
                        color: v
                    }
                }, h), n.createElement("h3", {
                    className: "".concat(m, "-sspro"),
                    style: {
                        color: g
                    }
                }, u), "below" === a.pos_sub_title && h && n.createElement("div", {
                    className: "".concat(f, "-sspro para-sm"),
                    style: {
                        paddingTop: "7px",
                        color: v
                    }
                }, h), n.createElement("div", {
                    className: "".concat(i()["text-block"], " ").concat(b, "-sspro"),
                    dangerouslySetInnerHTML: {
                        __html: s
                    }
                }), function (e, t) {
                    return n.createElement(n.Fragment, null, e && e.map((function (e, a) {
                        var r, l, c, d, _, p = e.field_cta_link_component ? e.field_cta_link_component.field_cta_link.label : "", u = e && e.field_cta_link_component && e.field_cta_link_component.field_cta_style ? e.field_cta_link_component.field_cta_style.field_cta_size[0].value : "", s = null !== (r = null == e || null === (l = e.field_cta_link_component) || void 0 === l || null === (c = l.field_cta_style) || void 0 === c || null === (d = c.field_cta_icon_location) || void 0 === d || null === (_ = d[0]) || void 0 === _ ? void 0 : _.value) && void 0 !== r ? r : "", m = e.field_cta_link_component.field_cta_link ? e.field_cta_link_component.field_cta_link.link : "#", f = e.field_cta_link_component ? e.field_cta_link_component.field_carousel_cta_type : "", b = e.field_cta_link_component && e.field_cta_link_component.field_cta_brightcove_video ? e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value : "", g = e.field_cta_link_component && e.field_cta_link_component.field_carousel_gated_form ? e.field_cta_link_component.field_carousel_gated_form.value : "";
                        return "" === f ? n.createElement("a", {
                            className: u,
                            href: m
                        }, p) : n.createElement("div", {
                            className: i()["card-block-ctabtn"]
                        }, p && n.createElement(o.default, {
                            ctaType: f,
                            ctaUrl: m,
                            ctaLabel: p,
                            ctaStyle: u,
                            ctaFormID: g,
                            ctaVideoID: b,
                            dataComponentName: t,
                            dataMachineName: "50_50_ion_lander_module",
                            index: a,
                            ctaIcon: s
                        }))
                    }
                    )))
                }(y, t))
            }
            )))
        };
        const b = function (e) {
            function t(e) {
                var a;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (a = p(this, t, [e])).state = {
                        dataComponentName: "50/50 Module"
                    },
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
                    t && m(e, t)
            }(t, e),
                a = t,
                (o = [{
                    key: "render",
                    value: function () {
                        var e, t, a, o, r, c, d = this, _ = this.props.itemContent, p = this.props.content.siteIdentifier, u = (_ && _.field_select_template && _.field_select_template[0].value,
                            _ && _.field_card_background_color && _.field_card_background_color[0] && _.field_card_background_color[0].color,
                            _ && _.card_text_template.left_column && _.card_text_template.left_column.data && _.card_text_template.left_column.data,
                            _ && _.card_text_template.right_column && _.card_text_template.right_column.data && _.card_text_template.right_column.data,
                            _ && _.global_data ? _.global_data : ""), s = u && u[0] && u[0].global_settings ? u[0].global_settings : "", m = u && u[1] && u[1].global_heading ? u[1].global_heading : "", b = _ && _.card_settings ? _.card_settings : "", g = m && m.heading ? m.heading.headline : "", v = m && m.heading && m.heading.headline_text_color ? m.heading.headline_text_color : "", h = m && m.sub_heading && m.sub_heading.sub_headline ? m.sub_heading.sub_headline : "", y = m && m.sub_heading && m.sub_heading.sub_headline_text_color ? m.sub_heading.sub_headline_text_color : "", k = m && m.sub_heading && m.sub_heading.sub_headline_enable_divider && 1 == m.sub_heading.sub_headline_enable_divider ? Number(m.sub_heading.sub_headline_enable_divider) : "", E = m && m.paragraph && m.paragraph.paragraph_text ? m.paragraph.paragraph_text : "", w = m && m.paragraph && m.paragraph.paragraph_color ? m.paragraph.paragraph_color : "", O = s && s.container && s.container.padding_bottom ? s.container.padding_bottom : "60px", x = s && s.container && s.container.padding_top ? s.container.padding_top : "60px", N = (!s || !s.divider || s.divider.enable_top_divider,
                                !s || !s.divider || s.divider.enable_bottom_divider,
                                s && s.divider && s.divider.divider_color && s.divider.divider_color,
                                b && b.field_enable_vertical_divider && "1" == b.field_enable_vertical_divider ? "".concat(i()["container-border"]) : ""), j = b && b.field_enable_bottom_divider && "1" == b.field_enable_bottom_divider ? "".concat(i()["card-bottom-border"]) : "", C = b && b.field_divider_color ? b.field_divider_color : "", P = null !== (e = null == m || null === (t = m.heading) || void 0 === t ? void 0 : t.headline_type) && void 0 !== e ? e : "s-head", T = null !== (a = null == m || null === (o = m.sub_heading) || void 0 === o ? void 0 : o.sub_headline_type) && void 0 !== a ? a : "s-sub", S = null !== (r = null == m || null === (c = m.paragraph) || void 0 === c ? void 0 : c.paragraph_type) && void 0 !== r ? r : "l-body";
                        return n.createElement("div", null, g || E || h ? n.createElement(l.default, {
                            containerSize: "standard",
                            heading: g,
                            headingType: P,
                            subHeadingType: T,
                            paragraphType: S,
                            headingColor: v,
                            paragraph: E,
                            paragraphColor: w,
                            paragraphFontSize: null,
                            subHeading: h,
                            subHeadingColor: y,
                            dividerVisibility: k,
                            dividerColor: "#4E2D82",
                            siteId: p,
                            setParagraphHtml: !0
                        }) : null, _ && _.card_text_template && _.card_text_template.length > 0 && _.card_text_template.map((function (e) {
                            return n.createElement("div", null, n.createElement("div", {
                                style: {
                                    backgroundColor: e.left_column.data.length > 0 && e.left_column.data[0].card_bg_color ? e.left_column.data[0].card_bg_color : "",
                                    paddingBottom: O,
                                    paddingTop: x
                                }
                            }, n.createElement("div", {
                                className: "".concat(i()["container-wrapper"], " ")
                            }, n.createElement("div", {
                                className: i()["text-container"]
                            }, n.createElement("div", {
                                className: "".concat(N, " ").concat(i()["div-style"], " ").concat(i()["first-colum-padding"]),
                                style: {
                                    borderColor: C
                                }
                            }, f(e.left_column && e.left_column.data ? e.left_column.data : "", d.state.dataComponentName)), n.createElement("div", {
                                className: "".concat(i()["second-colum-padding"], " ").concat(i()["div-style"])
                            }, f(e.right_column && e.right_column.data ? e.right_column.data : "", d.state.dataComponentName))))), j && n.createElement("hr", {
                                className: j
                            }))
                        }
                        )))
                    }
                }]) && d(a.prototype, o),
                Object.defineProperty(a, "prototype", {
                    writable: !1
                }),
                a;
            var a, o
        }(n.Component)
    }
    ,
    2859: e => {
        e.exports = {
            "inherit-parent-typo": "atbLk",
            "card-block-wrap": "yHhcn",
            "card-block-subwrap": "JJFL9",
            "card-block-img": "ABPVH",
            "card-block": "TNPzJ",
            "card-content-divider": "BkWBL",
            "card-block-heading-wrapper": "py3Yd",
            "card-block-txt": "jLol_",
            "card-block-cta": "psOAo",
            "card-block-subhead": "KLBdE",
            "card-block-ctabtn": "TIRc3",
            "card-block-subwrap_reverse": "j545k",
            "card-block-subwrap_aligntop": "s5fXR",
            "card-block-subwrap_aligncenter": "PTDQy",
            "card-block-heading-wrapper-reverse": "rlG0w",
            "card-block-head": "H_VVU",
            bgcolor: "vydE9",
            "main-container-divider": "DyluB",
            "dark-tone": "xL7Ti",
            "light-tone": "Uuzz4",
            "card-bottom-border": "xoiMl"
        }
    }
    ,
    10772: e => {
        e.exports = {
            "inherit-parent-typo": "TX0Im",
            "container-wrapper": "Km9YU",
            "card-block-ctabtn": "OKIBu",
            "link-color": "Tbzum",
            "text-block": "Xptfq",
            "text-container": "pLpaL",
            "cta-margin": "Mi4_g",
            "div-style": "jqgIs",
            "first-colum-padding": "vA05i",
            "second-colum-padding": "uL7Dg",
            "container-border": "VCnSw",
            "card-bottom-border": "zkjZu",
            "above-sub-title": "C6I9N",
            "below-sub-title": "_TW_8"
        }
    }
}]);
