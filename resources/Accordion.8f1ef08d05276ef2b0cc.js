(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[9451], {
    24230: (e, t, a) => {
        "use strict";
        a.r(t),
            a.d(t, {
                default: () => h
            });
        var n = a(96540)
            , l = a(3231)
            , i = a.n(l)
            , o = a(61038)
            , c = a(67739)
            , d = (a(84315),
                a(7452),
                a(9987));
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
        function r() {
            return r = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                        ({}).hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }
                ,
                r.apply(null, arguments)
        }
        function m(e) {
            return function (e) {
                if (Array.isArray(e))
                    return s(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function (e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return s(e, t);
                    var a = {}.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name),
                        "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? s(e, t) : void 0
                }
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        function u(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, v(n.key), n)
            }
        }
        function p(e, t, a) {
            return t = g(t),
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
                }(e, f() ? Reflect.construct(t, a || [], g(e).constructor) : t.apply(e, a))
        }
        function f() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (f = function () {
                return !!e
            }
            )()
        }
        function g(e) {
            return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                g(e)
        }
        function b(e, t) {
            return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                b(e, t)
        }
        function v(e) {
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
        const h = function (e) {
            function t(e) {
                var a, n, l, i;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    n = a = p(this, t, [e]),
                    i = function () {
                        if (a.props.componentOrder > 0) {
                            var e = a.viewElement.getBoundingClientRect();
                            (0,
                                o.vg)(e) && 0 === a.state.count && a.setState({
                                    activeIndex: 0,
                                    count: a.state.count + 1,
                                    animation: !0
                                })
                        }
                    }
                    ,
                    (l = v(l = "isInViewport")) in n ? Object.defineProperty(n, l, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[l] = i,
                    a.dataComponentType = "Accordion",
                    a.state = {
                        activeIndex: 0,
                        indexArray: [],
                        isMobile: !1,
                        accordionData: [],
                        manual: !1,
                        count: 0,
                        animation: !1
                    },
                    a.clearAccordionInterval = a.clearAccordionInterval.bind(a),
                    a.automateAccordion = a.automateAccordion.bind(a),
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
                    t && b(e, t)
            }(t, e),
                a = t,
                (l = [{
                    key: "componentDidMount",
                    value: function () {
                        var e = this;
                        this.setState({
                            isMobile: window.innerWidth < 769
                        });
                        var t = this.props.itemContent
                            , a = t && t ? t : ""
                            , n = a && a.data && a.data.accordian_slides ? a.data.accordian_slides : [];
                        this.setState({
                            accordionData: n
                        });
                        var l = a && a.data && a.data.accordion_setting ? a.data.accordion_setting : "";
                        "Problem Solution Module" !== l && (document.addEventListener("scroll", this.isInViewport),
                            this.accordionInterval = setInterval((function () {
                                e.automateAccordion()
                            }
                            ), 4e3)),
                            "Problem Solution Module" === l && "undefined" != typeof window && window.innerWidth < 768 && this.setState({
                                activeIndex: null
                            }),
                            this.dataComponentType = l,
                            (0,
                                o.pK)("accordion", this.dataComponentType)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        document.removeEventListener("scroll", this.isInViewport)
                    }
                }, {
                    key: "clearAccordionInterval",
                    value: function () {
                        clearInterval(this.accordionInterval)
                    }
                }, {
                    key: "automateAccordion",
                    value: function () {
                        this.state.activeIndex === this.state.accordionData.length - 1 ? this.setState({
                            activeIndex: this.state.accordionData.length - 1
                        }) : this.setState({
                            activeIndex: this.state.activeIndex + 1
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e, t, a, l, _, s, u, p, f, g, b, v, h = this, k = this.props.itemContent, y = k && k ? k : "", E = y && y.data.global_data && y.data.global_data[1], w = y && y.data && y.data.global_data[0], S = E && y.data.global_data[1].global_heading && y.data.global_data[1].global_heading.heading && y.data.global_data[1].global_heading.heading.headline ? y.data.global_data[1].global_heading.heading.headline : "", I = E && y.data.global_data[1].global_heading && y.data.global_data[1].global_heading.heading && y.data.global_data[1].global_heading.heading.headline_text_color ? y.data.global_data[1].global_heading.heading.headline_text_color : "", N = E && y.data.global_data[1].global_heading && y.data.global_data[1].global_heading.sub_heading && y.data.global_data[1].global_heading.sub_heading.sub_headline ? y.data.global_data[1].global_heading.sub_heading.sub_headline : "", x = E && y.data.global_data[1].global_heading && y.data.global_data[1].global_heading.sub_heading && y.data.global_data[1].global_heading.sub_heading.sub_headline_text_color ? y.data.global_data[1].global_heading.sub_heading.sub_headline_text_color : "", M = E && y.data.global_data[1].global_heading && y.data.global_data[1].global_heading.paragraph && y.data.global_data[1].global_heading.paragraph.paragraph_text ? y.data.global_data[1].global_heading.paragraph.paragraph_text : "", O = E && y.data.global_data[1].global_heading && y.data.global_data[1].global_heading.paragraph && y.data.global_data[1].global_heading.paragraph.paragraph_color ? y.data.global_data[1].global_heading.paragraph.paragraph_color : "", P = w && y.data.global_data[0].global_settings.container.padding_top ? y.data.global_data[0].global_settings.container.padding_top : "", C = w && y.data.global_data[0].global_settings.container.padding_bottom ? y.data.global_data[0].global_settings.container.padding_bottom : "", A = E && y.data.global_data[1].global_heading && y.data.global_data[1].global_heading.sub_heading && 1 == y.data.global_data[1].global_heading.sub_heading.sub_headline_enable_divider ? Number(y.data.global_data[1].global_heading.sub_heading.sub_headline_enable_divider) : "", T = y && y.data && y.data.accordion_setting ? y.data.accordion_setting : "", D = T && "Problem Solution Module" === T && y && y.data && y.data.problem_solution ? y.data.problem_solution.headline : "", L = T && "Problem Solution Module" === T && y && y.data && y.data.problem_solution ? y.data.problem_solution.headline_color : "", j = T && "Problem Solution Module" === T && y && y.data && y.data.problem_solution ? y.data.problem_solution.description : "", z = T && "Problem Solution Module" === T ? i()["solution-section-wrapper"] : "", B = T && "Problem Solution Module" === T && y && y.data && y.data.problem_solution.image_aligment && "Left" == y.data.problem_solution.image_aligment ? "" : T && "Problem Solution Module" === T ? i()["solution-container-media-right"] : "", U = w && T && "Problem Solution Module" === T && y.data.global_data[0].global_settings.backround_color ? y.data.global_data[0].global_settings.backround_color : "", H = this.props.content.siteIdentifier, V = (0,
                            o.Nw)(U || "#ffffff"), F = T && "Problem Solution Module" == T && k && k.field_design && k.field_design[0] ? k.field_design[0].value : "", q = {}, R = null !== (e = null == y || null === (t = y.data) || void 0 === t || null === (a = t.global_data) || void 0 === a || null === (l = a[1]) || void 0 === l || null === (_ = l.global_heading) || void 0 === _ || null === (s = _.heading) || void 0 === s ? void 0 : s.headline_type) && void 0 !== e ? e : "s-head", W = null !== (u = null == y || null === (p = y.data) || void 0 === p || null === (f = p.global_data) || void 0 === f || null === (g = f[1]) || void 0 === g || null === (b = g.global_heading) || void 0 === b || null === (v = b.paragraph) || void 0 === v ? void 0 : v.paragrapgh_type) && void 0 !== u ? u : "l-body";
                        P && (q.paddingTop = P),
                            C && (q.paddingBottom = C),
                            U && (q.backgroundColor = U);
                        var X = P || C || U ? {
                            style: q
                        } : ""
                            , K = I ? {
                                style: {
                                    color: I
                                }
                            } : ""
                            , J = O ? {
                                style: {
                                    color: O
                                }
                            } : ""
                            , Y = L ? {
                                style: {
                                    color: L
                                }
                            } : ""
                            , $ = function (e, t) {
                                h.setState({
                                    activeIndex: e,
                                    manual: !0
                                }, (function () {
                                    h.clearAccordionInterval()
                                }
                                )),
                                    (0,
                                        o.$)("Link Clicked", t, "accordion", h.dataComponentType)
                            };
                        return n.createElement("section", r({
                            className: "".concat(i()["accordion-section-wrapper"], " ").concat(z)
                        }, X, {
                            ref: function (e) {
                                h.viewElement = e
                            },
                            "data-componentid": "accordion",
                            "data-componentname": this.dataComponentType,
                            "component-order": this.props.componentOrder
                        }), "Problem Solution Module" !== T ? n.createElement("div", null, n.createElement("h2", r({
                            className: "".concat(i()["accordion-section-title"], " ").concat(R, "-sspro")
                        }, K), S), n.createElement("div", r({
                            className: "".concat(i()["accordion-section-description"], " para-sm ").concat(W, "-sspro")
                        }, J, {
                            dangerouslySetInnerHTML: {
                                __html: M
                            }
                        }))) : S || M || N ? n.createElement(d.default, {
                            containerSize: "standard",
                            heading: S,
                            headingType: R,
                            paragraphType: W,
                            headingColor: I,
                            paragraph: M,
                            paragraphColor: O,
                            paragraphFontSize: null,
                            subHeading: N,
                            subHeadingColor: x,
                            dividerVisibility: A,
                            dividerColor: "#4E2D82",
                            siteId: H,
                            setParagraphHtml: !0
                        }) : null, n.createElement("div", {
                            className: "".concat(i()["accordion-container"], " ").concat(B, " ").concat(F)
                        }, n.createElement("div", {
                            className: "".concat(i()["accordion-left-section"])
                        }, this.state.accordionData.map((function (e, t) {
                            var a, l, d, _, r, m = e && e.field_cta_link_component, s = e && e.image && e.image.rel_url ? e.image.rel_url : "", u = e && e.image && e.image.webp_image_url ? e.image.webp_image_url : "", p = "image/".concat((0,
                                o.yg)(s)), f = ("image/".concat((0,
                                    o.yg)(u)),
                                    e && e.image && e.image.options && e.image.options.alt ? e.image.options.alt : "");
                            return "Problem Solution Module" !== T ? n.createElement("div", {
                                className: "".concat(i()["accordion-img"], " ").concat(h.state.activeIndex === t ? i()["current-img"] : "")
                            }, s ? "image/gif" != p ? n.createElement("picture", null, u && n.createElement("source", {
                                srcSet: "".concat(u),
                                type: "image/webp"
                            }), n.createElement("source", {
                                srcSet: s,
                                type: p
                            }), n.createElement("img", {
                                src: s,
                                alt: f
                            })) : n.createElement("img", {
                                src: e.image.rel_url,
                                width: "460",
                                height: "436"
                            }) : null) : n.createElement("div", {
                                class: "".concat(h.state.activeIndex == t ? i()["show-box"] : i()["hide-box"])
                            }, s ? "image/gif" != p ? n.createElement("picture", {
                                className: i()["media-block"]
                            }, u && n.createElement("source", {
                                srcSet: "".concat(u),
                                type: "image/webp"
                            }), n.createElement("source", {
                                srcSet: s,
                                type: p
                            }), n.createElement("img", {
                                src: s,
                                alt: f
                            })) : n.createElement("img", {
                                src: e.image.rel_url,
                                className: i()["media-block"],
                                alt: "Problem Solution Image"
                            }) : null, e.description && n.createElement("div", {
                                className: "".concat(i()["solution-media-desc"]),
                                dangerouslySetInnerHTML: {
                                    __html: e.description
                                }
                            }), e && e.field_cta_link_component && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.label ? n.createElement(c.default, {
                                ctaType: m && e.field_cta_link_component.field_carousel_cta_type ? e.field_cta_link_component.field_carousel_cta_type : "",
                                ctaUrl: m && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.link ? e.field_cta_link_component.field_cta_link.link : "",
                                ctaLabel: m && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.label ? e.field_cta_link_component.field_cta_link.label : "",
                                ctaStyle: m && e.field_cta_link_component.field_cta_style.field_cta_size[0] && e.field_cta_link_component.field_cta_style.field_cta_size[0].value ? e.field_cta_link_component.field_cta_style.field_cta_size[0].value : "",
                                ctaFormID: m && e.field_cta_link_component.field_carousel_gated_form && e.field_cta_link_component.field_carousel_gated_form.value ? e.field_cta_link_component.field_carousel_gated_form.value : "",
                                ctaVideoID: m && e.field_cta_link_component.field_cta_brightcove_video && e.field_cta_link_component.field_cta_brightcove_video.video_id[0] && e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value ? e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value : "",
                                dataComponentName: h.dataComponentType,
                                dataMachineName: "accordian",
                                index: t,
                                parentOrder: h.props.componentOrder,
                                ctaIcon: null !== (a = null == e || null === (l = e.field_cta_link_component) || void 0 === l || null === (d = l.field_cta_style) || void 0 === d || null === (_ = d.field_cta_icon_location) || void 0 === _ || null === (r = _[0]) || void 0 === r ? void 0 : r.value) && void 0 !== a ? a : ""
                            }) : null)
                        }
                        ))), this.props.componentOrder > 0 ? n.createElement("div", {
                            className: "".concat(i()["accordion-right-section"])
                        }, "Problem Solution Module" === T && n.createElement("div", {
                            className: i()["headline-section"]
                        }, n.createElement("div", r({
                            className: i()["solution-title"]
                        }, Y), n.createElement("h3", null, D)), n.createElement("div", {
                            className: "".concat(i()["solution-desc"], " ").concat(i()[V]),
                            dangerouslySetInnerHTML: {
                                __html: j
                            }
                        })), this.state.accordionData.map((function (e, t) {
                            var a, l, d, _, r, s, u, p, f, g, b = e && e.field_cta_link_component, v = e && e.image && e.image.rel_url ? e.image.rel_url : "", k = e && e.image && e.image.webp_image_url ? e.image.webp_image_url : "", y = "image/".concat((0,
                                o.yg)(v)), E = ("image/".concat((0,
                                    o.yg)(k)),
                                    e && e.image && e.image.options && e.image.options.alt ? e.image.options.alt : "");
                            return n.createElement("div", {
                                className: "".concat(i()["accordion-tab"], " ").concat(h.state.activeIndex === t && h.state.animation ? i()["active-border"] : "", " ").concat(h.state.manual ? i()["manual-active-border"] : "")
                            }, n.createElement("div", {
                                className: "".concat(i()["heading-wrapper"]),
                                onClick: function () {
                                    return $(t, e.headline)
                                }
                            }, "Problem Solution Module" == T ? n.createElement("h4", null, n.createElement("button", {
                                class: "".concat(i()["solution-btn"], " ").concat((h.state.isMobile ? h.state.indexArray.includes(t) : h.state.activeIndex === t) ? i()["active-btn"] : ""),
                                type: "button",
                                onClick: function () {
                                    return function (e) {
                                        if (h.state.isMobile) {
                                            var t = h.state.indexArray;
                                            if (t.includes(e)) {
                                                var a = t.indexOf(e);
                                                h.setState({
                                                    indexArray: [].concat(m(t.slice(0, a)), m(t.slice(a + 1)))
                                                })
                                            } else
                                                h.setState({
                                                    indexArray: [].concat(m(t), [e])
                                                })
                                        }
                                    }(t)
                                }
                            }, e.headline)) : n.createElement("h2", {
                                className: "".concat(i().headline, " subhead-2"),
                                style: {
                                    color: h.state.activeIndex === t ? e.headline_color : "#9A9B9B"
                                }
                            }, e.headline), "Problem Solution Module" != T && n.createElement("div", {
                                className: "".concat(i()["hide-desktop"])
                            }, h.state.activeIndex === t ? n.createElement("div", {
                                className: "".concat(i()["arrow-up-wrap"])
                            }, n.createElement("span", {
                                className: "".concat(i()["up-triangle"])
                            })) : n.createElement("div", {
                                className: "".concat(i()["arrow-down-wrap"])
                            }, n.createElement("span", {
                                className: "".concat(i()["down-triangle"])
                            })))), (h.state.isMobile ? h.state.indexArray.includes(t) : h.state.activeIndex === t) && ("Problem Solution Module" === T ? n.createElement("div", {
                                class: " ".concat(i()["hide-desktop"], " ")
                            }, n.createElement("div", {
                                className: "".concat(i()["solution-media-desc"]),
                                dangerouslySetInnerHTML: {
                                    __html: e.description
                                }
                            }), e && e.field_cta_link_component && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.label ? n.createElement("div", {
                                className: i()["cta-block"]
                            }, n.createElement(c.default, {
                                ctaType: b && e.field_cta_link_component.field_carousel_cta_type ? e.field_cta_link_component.field_carousel_cta_type : "",
                                ctaUrl: b && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.link ? e.field_cta_link_component.field_cta_link.link : "",
                                ctaLabel: b && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.label ? e.field_cta_link_component.field_cta_link.label : "",
                                ctaStyle: b && e.field_cta_link_component.field_cta_style.field_cta_size[0] && e.field_cta_link_component.field_cta_style.field_cta_size[0].value ? e.field_cta_link_component.field_cta_style.field_cta_size[0].value : "",
                                ctaFormID: b && e.field_cta_link_component.field_carousel_gated_form && e.field_cta_link_component.field_carousel_gated_form.value ? e.field_cta_link_component.field_carousel_gated_form.value : "",
                                ctaVideoID: b && e.field_cta_link_component.field_cta_brightcove_video && e.field_cta_link_component.field_cta_brightcove_video.video_id[0] && e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value ? e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value : "",
                                dataComponentName: h.dataComponentType,
                                dataMachineName: "accordian",
                                index: t,
                                parentOrder: h.props.componentOrder,
                                ctaIcon: null !== (a = null == e || null === (l = e.field_cta_link_component) || void 0 === l || null === (d = l.field_cta_style) || void 0 === d || null === (_ = d.field_cta_icon_location) || void 0 === _ || null === (r = _[0]) || void 0 === r ? void 0 : r.value) && void 0 !== a ? a : ""
                            })) : null, e && e.image && e.image.rel_url ? "image/gif" != y ? n.createElement("picture", {
                                className: i()["media-block"]
                            }, k && n.createElement("source", {
                                srcSet: "".concat(k),
                                type: "image/webp"
                            }), n.createElement("source", {
                                srcSet: v,
                                type: y
                            }), n.createElement("img", {
                                src: v,
                                alt: E
                            })) : n.createElement("img", {
                                src: e.image.rel_url,
                                className: i()["media-block"],
                                alt: "Problem Solution Image"
                            }) : null) : n.createElement("div", null, n.createElement("div", {
                                className: "".concat(i()["accordion-tab-desc"]),
                                dangerouslySetInnerHTML: {
                                    __html: e.description
                                }
                            }), e && e.field_cta_link_component && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.label ? n.createElement(c.default, {
                                ctaType: b && e.field_cta_link_component.field_carousel_cta_type ? e.field_cta_link_component.field_carousel_cta_type : "",
                                ctaUrl: b && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.link ? e.field_cta_link_component.field_cta_link.link : "",
                                ctaLabel: b && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.label ? e.field_cta_link_component.field_cta_link.label : "",
                                ctaStyle: b && e.field_cta_link_component.field_cta_style.field_cta_size[0] && e.field_cta_link_component.field_cta_style.field_cta_size[0].value ? e.field_cta_link_component.field_cta_style.field_cta_size[0].value : "",
                                ctaFormID: b && e.field_cta_link_component.field_carousel_gated_form && e.field_cta_link_component.field_carousel_gated_form.value ? e.field_cta_link_component.field_carousel_gated_form.value : "",
                                ctaVideoID: b && e.field_cta_link_component.field_cta_brightcove_video && e.field_cta_link_component.field_cta_brightcove_video.video_id[0] && e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value ? e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value : "",
                                dataComponentName: h.dataComponentType,
                                dataMachineName: "accordian",
                                index: t,
                                parentOrder: h.props.componentOrder,
                                ctaIcon: null !== (s = null == e || null === (u = e.field_cta_link_component) || void 0 === u || null === (p = u.field_cta_style) || void 0 === p || null === (f = p.field_cta_icon_location) || void 0 === f || null === (g = f[0]) || void 0 === g ? void 0 : g.value) && void 0 !== s ? s : ""
                            }) : null, e && e.image && e.image.rel_url ? n.createElement("div", {
                                className: "".concat(i()["accordion-img"], " ").concat(i()["hide-desktop"], " ").concat(h.state.activeIndex === t ? i()["current-img"] : "")
                            }, "image/gif" != y ? n.createElement("picture", null, k && n.createElement("source", {
                                srcSet: "".concat(k),
                                type: "image/webp"
                            }), n.createElement("source", {
                                srcSet: v,
                                type: y
                            }), n.createElement("img", {
                                src: v,
                                alt: E
                            })) : n.createElement("img", {
                                src: e.image.rel_url,
                                width: "460",
                                height: "436"
                            })) : null)))
                        }
                        ))) : n.createElement("div", {
                            className: "".concat(i()["accordion-right-section"])
                        }, "Problem Solution Module" === T && n.createElement("div", {
                            className: i()["headline-section"]
                        }, n.createElement("div", r({
                            className: i()["solution-title"]
                        }, Y), D), n.createElement("div", {
                            className: "".concat(i()["solution-desc"]),
                            dangerouslySetInnerHTML: {
                                __html: j
                            }
                        })), this.state.accordionData.map((function (e, t) {
                            var a, l, d, _, r, m, s, u, p, f, g = e && e.field_cta_link_component, b = e && e.image && e.image.rel_url ? e.image.rel_url : "", v = e && e.image && e.image.webp_image_url ? e.image.webp_image_url : "", k = "image/".concat((0,
                                o.yg)(b)), y = ("image/".concat((0,
                                    o.yg)(v)),
                                    e && e.image && e.image.options && e.image.options.alt ? e.image.options.alt : "");
                            return n.createElement("div", {
                                className: "".concat(i()["accordion-tab"], " ").concat(h.state.activeIndex === t ? i()["active-border"] : "", " ").concat(h.state.manual ? i()["manual-active-border"] : "")
                            }, n.createElement("div", {
                                className: "".concat(i()["heading-wrapper"]),
                                onClick: function () {
                                    return $(t)
                                }
                            }, "Problem Solution Module" == T ? n.createElement("button", {
                                class: "".concat(i()["solution-btn"], " ").concat(h.state.activeIndex == t ? i()["active-btn"] : ""),
                                type: "button",
                                onClick: function () {
                                    return h.setState({
                                        activeIndex: t
                                    })
                                }
                            }, e.headline) : n.createElement("h2", {
                                className: "".concat(i().headline, " subhead-2"),
                                style: {
                                    color: h.state.activeIndex === t ? e.headline_color : "#9A9B9B"
                                }
                            }, e.headline), "Problem Solution Module" != T && n.createElement("div", {
                                className: "".concat(i()["hide-desktop"])
                            }, h.state.activeIndex === t ? n.createElement("div", {
                                className: "".concat(i()["arrow-up-wrap"])
                            }, n.createElement("span", {
                                className: "".concat(i()["up-triangle"])
                            })) : n.createElement("div", {
                                className: "".concat(i()["arrow-down-wrap"])
                            }, n.createElement("span", {
                                className: "".concat(i()["down-triangle"])
                            })))), h.state.activeIndex === t && ("Problem Solution Module" === T ? n.createElement("div", {
                                class: " ".concat(i()["hide-desktop"], " ")
                            }, n.createElement("div", {
                                className: "".concat(i()["solution-media-desc"]),
                                dangerouslySetInnerHTML: {
                                    __html: e.description
                                }
                            }), e && e.field_cta_link_component && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.label ? n.createElement("div", {
                                className: i()["cta-block"]
                            }, n.createElement(c.default, {
                                ctaType: g && e.field_cta_link_component.field_carousel_cta_type ? e.field_cta_link_component.field_carousel_cta_type : "",
                                ctaUrl: g && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.link ? e.field_cta_link_component.field_cta_link.link : "",
                                ctaLabel: g && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.label ? e.field_cta_link_component.field_cta_link.label : "",
                                ctaStyle: g && e.field_cta_link_component.field_cta_style.field_cta_size[0] && e.field_cta_link_component.field_cta_style.field_cta_size[0].value ? e.field_cta_link_component.field_cta_style.field_cta_size[0].value : "",
                                ctaFormID: g && e.field_cta_link_component.field_carousel_gated_form && e.field_cta_link_component.field_carousel_gated_form.value ? e.field_cta_link_component.field_carousel_gated_form.value : "",
                                ctaVideoID: g && e.field_cta_link_component.field_cta_brightcove_video && e.field_cta_link_component.field_cta_brightcove_video.video_id[0] && e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value ? e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value : "",
                                dataComponentName: h.dataComponentType,
                                dataMachineName: "accordian",
                                index: t,
                                parentOrder: h.props.componentOrder,
                                ctaIcon: null !== (a = null == e || null === (l = e.field_cta_link_component) || void 0 === l || null === (d = l.field_cta_style) || void 0 === d || null === (_ = d.field_cta_icon_location) || void 0 === _ || null === (r = _[0]) || void 0 === r ? void 0 : r.value) && void 0 !== a ? a : ""
                            })) : null, e && e.image && e.image.rel_url ? "image/gif" != k ? n.createElement("picture", {
                                className: i()["media-block"]
                            }, v && n.createElement("source", {
                                srcSet: "".concat(v),
                                type: "image/webp"
                            }), n.createElement("source", {
                                srcSet: b,
                                type: k
                            }), n.createElement("img", {
                                src: b,
                                alt: y
                            })) : n.createElement("img", {
                                src: e.image.rel_url,
                                className: i()["media-block"],
                                alt: "Image holder"
                            }) : null) : n.createElement("div", null, n.createElement("div", {
                                className: "".concat(i()["accordion-tab-desc"]),
                                dangerouslySetInnerHTML: {
                                    __html: e.description
                                }
                            }), e && e.field_cta_link_component && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.label ? n.createElement(c.default, {
                                ctaType: g && e.field_cta_link_component.field_carousel_cta_type ? e.field_cta_link_component.field_carousel_cta_type : "",
                                ctaUrl: g && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.link ? e.field_cta_link_component.field_cta_link.link : "",
                                ctaLabel: g && e.field_cta_link_component.field_cta_link && e.field_cta_link_component.field_cta_link.label ? e.field_cta_link_component.field_cta_link.label : "",
                                ctaStyle: g && e.field_cta_link_component.field_cta_style.field_cta_size[0] && e.field_cta_link_component.field_cta_style.field_cta_size[0].value ? e.field_cta_link_component.field_cta_style.field_cta_size[0].value : "",
                                ctaFormID: g && e.field_cta_link_component.field_carousel_gated_form && e.field_cta_link_component.field_carousel_gated_form.value ? e.field_cta_link_component.field_carousel_gated_form.value : "",
                                ctaVideoID: g && e.field_cta_link_component.field_cta_brightcove_video && e.field_cta_link_component.field_cta_brightcove_video.video_id[0] && e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value ? e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value : "",
                                dataComponentName: h.dataComponentType,
                                dataMachineName: "accordian",
                                index: t,
                                parentOrder: h.props.componentOrder,
                                ctaIcon: null !== (m = null == e || null === (s = e.field_cta_link_component) || void 0 === s || null === (u = s.field_cta_style) || void 0 === u || null === (p = u.field_cta_icon_location) || void 0 === p || null === (f = p[0]) || void 0 === f ? void 0 : f.value) && void 0 !== m ? m : ""
                            }) : null, e && e.image && e.image.rel_url && n.createElement("div", {
                                className: "".concat(i()["accordion-img"], " ").concat(i()["hide-desktop"], " ").concat(h.state.activeIndex === t ? i()["current-img"] : "")
                            }, "image/gif" != k ? n.createElement("picture", null, v && n.createElement("source", {
                                srcSet: "".concat(v),
                                type: "image/webp"
                            }), n.createElement("source", {
                                srcSet: b,
                                type: k
                            }), n.createElement("img", {
                                src: b,
                                alt: y
                            })) : n.createElement("img", {
                                src: e.image.rel_url,
                                width: "460",
                                height: "436"
                            })))))
                        }
                        )))))
                    }
                }]) && u(a.prototype, l),
                Object.defineProperty(a, "prototype", {
                    writable: !1
                }),
                a;
            var a, l
        }(n.Component)
    }
    ,
    3231: e => {
        e.exports = {
            "inherit-parent-typo": "qaQAI",
            "accordion-section-wrapper": "r1xuq",
            "hide-desktop": "Di9ce",
            "accordion-section-title": "E4xFp",
            "accordion-section-description": "v7RvY",
            "accordion-container": "ne45M",
            "accordion-left-section": "c9Sqb",
            "accordion-img": "hbu6N",
            moveImg: "lrBu5",
            "current-img": "j_0nS",
            A: "qqOW4",
            "accordion-right-section": "je6zT",
            "accordion-tab": "qnLma",
            "active-border": "syGwL",
            bordermove: "xmxfI",
            "manual-active-border": "aa8Vk",
            "heading-wrapper": "Sdm9W",
            "arrow-up-wrap": "yulyq",
            "arrow-down-wrap": "ZAEBf",
            "up-triangle": "FNLrz",
            "down-triangle": "DeziU",
            headline: "C6LXC",
            "accordion-tab-desc": "wMwXX",
            "solution-section-wrapper": "DhI9s",
            "solution-btn": "T7Bgs",
            "solution-container-media-right": "PAh7a",
            "show-box": "N0wmv",
            "hide-box": "kieEi",
            "media-block": "nwped",
            "solution-media-desc": "NPEkw",
            "cta-block": "D1WDU",
            "headline-section": "g2pUX",
            "solution-title": "mv5vt",
            "active-btn": "cvJv2",
            "dark-tone": "JUflB",
            "light-tone": "YutR0",
            "solution-desc": "t9rdU"
        }
    }
}]);
