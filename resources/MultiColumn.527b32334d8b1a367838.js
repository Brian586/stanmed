(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[6256, 7190], {
    65177: (e, t, a) => {
        "use strict";
        a.r(t),
            a.d(t, {
                default: () => o
            });
        var c = a(96540)
            , i = a(67739)
            , l = a(9047)
            , n = a.n(l);
        const o = function (e) {
            var t, a, l, o, d, r, _, s, m, u, p, f = null !== (t = null == e ? void 0 : e.componentId) && void 0 !== t ? t : "", g = null !== (a = null == e || null === (l = e.pageData) || void 0 === l || null === (o = l.data) || void 0 === o ? void 0 : o.card_settings) && void 0 !== a ? a : "", v = "" == (null == g ? void 0 : g.field_multicolum_body_copy_input) ? "l-body" : null == g ? void 0 : g.field_multicolum_body_copy_input, h = null !== (d = null == e || null === (r = e.pageData) || void 0 === r || null === (_ = r.data) || void 0 === _ ? void 0 : _.multi_columns) && void 0 !== d ? d : [], b = null !== (s = null == e || null === (m = e.pageData) || void 0 === m || null === (u = m.field_adwards_bg_color) || void 0 === u || null === (p = u[0]) || void 0 === p ? void 0 : p.color) && void 0 !== s ? s : [];
            return c.createElement(c.Fragment, null, h.length > 0 && Object.values(h).map((function (e, t) {
                var a, l, o, d, r, _, s, m, u, p, g, h, y, w, E, k, N, C, x, S, z, I, L, T = null !== (a = null == e ? void 0 : e.card_headline) && void 0 !== a ? a : "", O = null !== (l = null == e ? void 0 : e.card_headline_color) && void 0 !== l ? l : "", D = null !== (o = null == e ? void 0 : e.card_description) && void 0 !== o ? o : "", M = null !== (d = null == e ? void 0 : e.field_cta_link_component) && void 0 !== d ? d : "";
                return c.createElement("li", {
                    className: n()["contact-card"],
                    style: {
                        backgroundColor: b
                    }
                }, c.createElement("span", {
                    className: n()["contact-card-content"]
                }, T && c.createElement("span", {
                    className: n()["contact-card-head"],
                    style: {
                        color: O
                    }
                }, T), D && c.createElement("span", {
                    className: "".concat(n()["contact-card-desc"], " ").concat(v, "-sspro"),
                    dangerouslySetInnerHTML: {
                        __html: D
                    }
                })), c.createElement("span", {
                    className: n()["contact-card-cta"]
                }, c.createElement(i.default, {
                    ctaType: null !== (r = null == M ? void 0 : M.field_carousel_cta_type) && void 0 !== r ? r : "",
                    ctaUrl: null !== (_ = null == M || null === (s = M.field_cta_link) || void 0 === s ? void 0 : s.link) && void 0 !== _ ? _ : "",
                    ctaLabel: null !== (m = null == M || null === (u = M.field_cta_link) || void 0 === u ? void 0 : u.label) && void 0 !== m ? m : "",
                    ctaStyle: null !== (p = null == M || null === (g = M.field_cta_style) || void 0 === g || null === (h = g.field_cta_size) || void 0 === h || null === (y = h[0]) || void 0 === y ? void 0 : y.value) && void 0 !== p ? p : "",
                    ctaFormID: null !== (w = null == M || null === (E = M.field_carousel_gated_form) || void 0 === E ? void 0 : E.value) && void 0 !== w ? w : "",
                    ctaVideoID: null !== (k = null == M || null === (N = M.field_cta_brightcove_video) || void 0 === N || null === (C = N.video_id) || void 0 === C || null === (x = C[0]) || void 0 === x ? void 0 : x.value) && void 0 !== k ? k : "",
                    dataComponentName: "Contact Us Card",
                    dataMachineName: f,
                    index: t,
                    ctaIcon: null !== (S = null == M || null === (z = M.field_cta_style) || void 0 === z || null === (I = z.field_cta_icon_location) || void 0 === I || null === (L = I[0]) || void 0 === L ? void 0 : L.value) && void 0 !== S ? S : ""
                })))
            }
            )))
        }
    }
    ,
    31187: (e, t, a) => {
        "use strict";
        a.r(t),
            a.d(t, {
                default: () => C
            });
        var c = a(96540)
            , i = a(67739)
            , l = a(23615)
            , n = a.n(l)
            , o = a(9987)
            , d = a(20312)
            , r = a.n(d)
            , _ = (a(29921),
                a(61038))
            , s = a(73357)
            , m = a(65177);
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
        function p(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                t && (c = c.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    a.push.apply(a, c)
            }
            return a
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(a), !0).forEach((function (t) {
                    E(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : p(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        function g() {
            return g = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var c in a)
                        ({}).hasOwnProperty.call(a, c) && (e[c] = a[c])
                }
                return e
            }
                ,
                g.apply(null, arguments)
        }
        function v(e, t) {
            for (var a = 0; a < t.length; a++) {
                var c = t[a];
                c.enumerable = c.enumerable || !1,
                    c.configurable = !0,
                    "value" in c && (c.writable = !0),
                    Object.defineProperty(e, k(c.key), c)
            }
        }
        function h(e, t, a) {
            return t = y(t),
                function (e, t) {
                    if (t && ("object" == u(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, b() ? Reflect.construct(t, a || [], y(e).constructor) : t.apply(e, a))
        }
        function b() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (b = function () {
                return !!e
            }
            )()
        }
        function y(e) {
            return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                y(e)
        }
        function w(e, t) {
            return w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                w(e, t)
        }
        function E(e, t, a) {
            return (t = k(t)) in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
                e
        }
        function k(e) {
            var t = function (e, t) {
                if ("object" != u(e) || !e)
                    return e;
                var a = e[Symbol.toPrimitive];
                if (void 0 !== a) {
                    var c = a.call(e, "string");
                    if ("object" != u(c))
                        return c;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == u(t) ? t : t + ""
        }
        var N = function (e) {
            var t = e.open
                , a = e.data
                , i = "ahcom" === a.siteIdentifier ? n()["is-overlay-items-wrapper"] : "".concat(n()["is-overlay-items-wrapper"], " black-theme")
                , l = "ahcom" === a.siteIdentifier ? "default-theme" : "black-theme";
            return c.createElement(r(), {
                portalClassName: l,
                isOpen: t,
                onRequestClose: function () {
                    return e.closeHandler()
                },
                className: "".concat(n()["icb-wrapper-expand-modal"]),
                shouldCloseOnOverlayClick: !1
            }, c.createElement("button", {
                className: "m_close",
                onClick: function () {
                    return e.closeHandler()
                }
            }, "close"), c.createElement("div", {
                className: i
            }, c.createElement(o.default, {
                containerSize: "standard",
                heading: a.title,
                headingColor: a.titleColor,
                siteId: a.siteIdentifier
            }), c.createElement("div", {
                className: n()["is-overlay-items-container"]
            }, a.overlayItems && a.overlayItems.map((function (e) {
                return e
            }
            )))))
        };
        const C = function (e) {
            function t(e) {
                var a;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    E(a = h(this, t, [e]), "updateWidth", (function () {
                        if (a.compRef.current) {
                            var e = a.compRef.current.children[0] ? a.compRef.current.children[0].getBoundingClientRect() : 1080;
                            a.setState({
                                windowSize: a.compRef.current.clientWidth,
                                cardSize: e.width
                            })
                        }
                    }
                    )),
                    E(a, "isInViewPort", (function () {
                        var e = document.getElementsByClassName(n().ps);
                        e && Array.from(e).map((function (e, t) {
                            var c = "stat-card-" + t
                                , i = document.getElementById(c)
                                , l = i && i.getBoundingClientRect();
                            (0,
                                _.vg)(l) && setTimeout((function () {
                                    a.setState(E({}, "percentileProgress" + t, !0));
                                    var e = i.getElementsByClassName(n()["cs-stat-number"]);
                                    document.getElementById("multicolumn-percentile-" + t).children[0].children[1].children[0].children[0].style.transitionDuration = .15 * e.length + "s",
                                        e && Array.from(e).map((function (e, t, a) {
                                            e.classList.add(n()["animate-percentile"])
                                        }
                                        ))
                                }
                                ), 800)
                        }
                        ))
                    }
                    )),
                    a.compRef = c.createRef(),
                    a.componentId = "multi_column_layout",
                    a.dataComponentName = "multi_column_layout",
                    a.myTabRef = c.createRef(),
                    a.state = {
                        dataComponentName: "multi_column_layout",
                        windowSize: null,
                        cardSize: null,
                        openModal: !1,
                        foundScript: !1
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
                    t && w(e, t)
            }(t, e),
                a = t,
                l = [{
                    key: "componentDidMount",
                    value: function () {
                        var e = this;
                        if (this.updateWidth(),
                            window.addEventListener("resize", this.updateWidth),
                            (0,
                                _.pK)(this.componentId, this.dataComponentName),
                            !this.state.foundScript) {
                            var t = (0,
                                _.z2)();
                            t.onload = function () {
                                e.setState({
                                    foundScript: !0
                                })
                            }
                                ,
                                document.body.appendChild(t)
                        }
                        document.addEventListener("scroll", this.isInViewPort)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        window.removeEventListener("resize", this.updateWidth),
                            document.removeEventListener("scroll", this.isInViewPort)
                    }
                }, {
                    key: "togglePopup",
                    value: function (e) {
                        var t = e.currentTarget.closest(".icb-wrapper").nextSibling ? e.currentTarget.closest(".icb-wrapper").nextSibling.classList : e.currentTarget.closest(".icb-wrapper").classList;
                        t.contains("selected") ? (t.remove("selected"),
                            document.body.style.overflow = "auto") : (t.add("selected"),
                                (0,
                                    _.$)("CTA Link Clicked", e.currentTarget.innerText, "icon_bar_stack", "Icon Bar Stack"),
                                document.body.style.overflow = "hidden")
                    }
                }, {
                    key: "VideoCTA",
                    value: function (e, t) {
                        (0,
                            _.$)("Video Played", t, "highlighted_feature_columns", this.state.dataComponentName),
                            e.currentTarget.closest("li").querySelector("iframe").contentDocument.querySelector(".ee-components-play-button").click()
                    }
                }, {
                    key: "formatDate",
                    value: function (e) {
                        var t = new Date(e)
                            , a = t.getDate()
                            , c = t.getFullYear();
                        return ["January", "February ", "March ", "April ", "May", "June", "July", "August", "September", "October", "November", "December"][t.getMonth()] + " " + a + ", " + c
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e, t, a = this, l = {
                            default: "Default",
                            stat_and_desc: "Stat with Desc",
                            icon_and_desc: "Icon with Desc",
                            text_only: "Text Only",
                            more_resources: "More Resources",
                            priorities_grid: "Priorities Grid",
                            services_grid: "Services Grid",
                            stat_bar: "Stat Bar",
                            icon_stack: "Icon Stack",
                            highlighted_feature_columns: "Highlighted Feature Columns",
                            icon_bar_management: "Icon Bar Management",
                            event_card: "Event Card",
                            addon_module: "Addon Module",
                            awards_card: "Awards Card",
                            location_card: "Location Card",
                            circular_stat: "Circular Stat",
                            case_study_result_stat: "Case Study Result Stat",
                            contact_us_card: "Contact Us Card"
                        }, d = this.props.itemContent, r = d && d.data && d.data.card_settings ? d.data.card_settings : "", u = d && d.data && d.data.global_data ? d.data.global_data : "", p = u && u[0] && u[0].global_settings ? u[0].global_settings : "", v = u && u[1] && u[1].global_heading ? u[1].global_heading : "", h = (l.awards_card === r.field_card_layout || l.text_only === r.field_card_layout) && d && d.field_design && d.field_design[0] ? d.field_design[0].value : "", b = d && d.data && d.data.multi_columns.length > 0 ? d.data.multi_columns : [], y = p && p.container && p.container.container_width ? p.container.container_width : "1080px", w = p && p.divider && p.divider.divider_color ? p.divider.divider_color : "#d8d8d8", E = w ? {
                            style: {
                                borderTop: "1px solid ".concat(w)
                            }
                        } : "", k = "default", C = r && r.component_type && "newsroom" == r.component_type ? n()["highlighted-feature-newsroom"] : "", x = "".concat(n()["mc-list"], " ").concat(C);
                        r.field_card_layout = "" === r.field_card_layout ? l.default : r.field_card_layout,
                            this.dataComponentName = r && r.field_card_layout ? r.field_card_layout : this.dataComponentName,
                            r.field_card_divider_color = r.field_card_divider_color ? r.field_card_divider_color : "#d8d8d8";
                        var S = (null == l ? void 0 : l.contact_us_card) === (null == r ? void 0 : r.field_card_layout) ? "contact-cards" : ""
                            , z = "Services Grid" === (null == r ? void 0 : r.field_card_layout) && (null != r && r.field_multicolum_body_copy_input ? "".concat(r.field_multicolum_body_copy_input, "-sspro") : "l-body-sspro")
                            , I = "Services Grid" === (null == r ? void 0 : r.field_card_layout) ? null != r && r.field_multicolumn_sub_inputs ? "".concat(r.field_multicolumn_sub_inputs) : "l-sub" : ""
                            , L = "subhead-ptserif" == I ? "".concat(I) : "" == I ? "" : "".concat(I, "-sspro")
                            , T = {};
                        T.maxWidth = y,
                            T.backgroundColor = p && p.backround_color ? p.backround_color : void 0,
                            r.card_width = r.card_width ? r.card_width : "".concat(Math.floor(324), "px"),
                            p && p.container && (T.paddingTop = p.container.padding_top ? p.container.padding_top : void 0,
                                T.paddingBottom = p.container.padding_bottom ? p.container.padding_bottom : void 0);
                        var O = T.backgroundColor || "#ffffff"
                            , D = (0,
                                _.Nw)(O || "#ffffff")
                            , M = !(!p || !p.divider || "1" != p.divider.enable_top_divider)
                            , H = !(!p || !p.divider || "1" != p.divider.enable_bottom_divider)
                            , V = y ? Math.floor(parseInt(y.replace("px", "")) / parseInt(r.card_width.replace("px", ""))) : 1080 / parseInt(r.card_width.replace("px", ""))
                            , B = r.field_card_layout === l.stat_bar ? "".concat(n()["stats-column-container"], " ").concat(n()["stat-bar-container"]) : "".concat(n()["stats-column-container"])
                            , A = r.field_card_layout === l.case_study_result_stat ? "".concat(n()["stats-column-container"], " ").concat(n()["case-study-stat-container"]) : "".concat(n()["stats-column-container"]);
                        this.state.windowSize && (V = Math.floor(this.state.windowSize / parseInt(r.card_width.replace("px", "")))),
                            this.state.cardSize && this.state.windowSize && (V = Math.floor(this.state.windowSize / this.state.cardSize));
                        var P = v && v.heading && v.heading.headline ? v.heading.headline : ""
                            , j = v && v.heading && v.heading.headline_text_color ? v.heading.headline_text_color : void 0
                            , R = v && v.heading && v.heading.heading_config ? v.heading.heading_config : "h1"
                            , Z = (0,
                                _.y_)(u)
                            , U = Z.titleType
                            , F = Z.subheadType
                            , W = Z.paraType
                            , J = v && v.sub_heading && v.sub_heading.sub_headline ? v.sub_heading.sub_headline : ""
                            , X = v && v.sub_heading && v.sub_heading.sub_headline_text_color ? v.sub_heading.sub_headline_text_color : void 0
                            , K = v && v.sub_heading && v.sub_heading.sub_heading_config ? v.sub_heading.sub_heading_config : "subhead-1"
                            , G = (v && v.sub_heading && v.sub_heading.sub_headline_enable_divider && v.sub_heading.sub_headline_enable_divider,
                                v && v.paragraph && v.paragraph.paragraph_text ? v.paragraph.paragraph_text : "")
                            , Y = v && v.paragraph && v.paragraph.paragraph_color ? v.paragraph.paragraph_color : void 0
                            , q = b && b.length > 0 ? "".concat(n()["stats-column-".concat(b.length, "-wrapper")]) : "";
                        q = b && b.length > 0 && r.field_card_layout === (l.stat_bar || l.case_study_result_stat) ? "".concat(n()["stat-bar-".concat(b.length > 4 ? 4 : b.length, "-wrapper")], " ").concat(n()["stat-bar"]) : q,
                            p && p.divider && p.divider.enable_top_divider && 1 == p.divider.enable_top_divider && n()["enable-dividers"];
                        var Q = r && r.field_card_text_align ? r.field_card_text_align : "Left"
                            , $ = r && r.field_category_title ? r.field_category_title : ""
                            , ee = r && r.field_enable_card_border && "1" == r.field_enable_card_border ? n()["event-item-border"] : ""
                            , te = {
                                "More Resources": 6,
                                "Priorities Grid": 6,
                                "Services Grid": 8,
                                "Stat Bar": 4,
                                "Stat with Desc": 4,
                                "Icon Stack": 10,
                                "Icon Bar Management": 6
                            }
                            , ae = te[r.field_card_layout] ? te[r.field_card_layout] : b.length;
                        b = b.length > 0 ? b.slice(0, ae) : b,
                            V > b.length && (V = b.length);
                        var ce, ie, le, ne, oe = this.props.content && this.props.content.siteIdentifier ? this.props.content.siteIdentifier : null, de = !(!r || "1" != r.field_enable_clickable_card), re = d && d.data && d.data.icon_stack_settings ? d.data.icon_stack_settings : null, _e = !(!re || "1" != re.expand_link), se = re && re.field_number_of_columns ? re.field_number_of_columns : "5", me = re && re.field_cta_link_component ? re.field_cta_link_component : null, ue = [], pe = {
                            url: "",
                            label: "",
                            cta_type: "",
                            cta_style: "",
                            cta_form_id: "",
                            cta_video_id: "",
                            ctaIconLocation: ""
                        }, fe = function (e) {
                            a.viewElement = e
                        };
                        me && (pe = {
                            url: me.field_cta_link && me.field_cta_link.link ? me.field_cta_link.link : "",
                            label: me.field_cta_link && me.field_cta_link.label ? me.field_cta_link.label : "",
                            cta_type: "" !== me.field_carousel_cta_type ? me.field_carousel_cta_type : "Link",
                            cta_style: me.field_cta_style && me.field_cta_style.field_cta_size && me.field_cta_style.field_cta_size[0] && me.field_cta_style.field_cta_size[0].value ? me.field_cta_style.field_cta_size[0].value : "",
                            ctaIconLocation: null !== (ce = null == me || null === (ie = me.field_cta_style) || void 0 === ie || null === (le = ie.field_cta_icon_location) || void 0 === le || null === (ne = le[0]) || void 0 === ne ? void 0 : ne.value) && void 0 !== ce ? ce : "",
                            cta_form_id: me.field_carousel_gated_form && me.field_carousel_gated_form.value ? me.field_carousel_gated_form.value : "",
                            cta_video_id: me.field_cta_brightcove_video && me.field_cta_brightcove_video.video_id[0] ? me.field_cta_brightcove_video.video_id[0].value : ""
                        });
                        var ge, ve, he, be, ye, we = d && d.field_ribbon_hover_bg_color && d.field_ribbon_hover_bg_color[0] && d.field_ribbon_hover_bg_color[0].color ? d.field_ribbon_hover_bg_color[0].color : void 0, Ee = d && d.data && d.data.addon_module_settings ? d.data.addon_module_settings : "", ke = {
                            headline: "",
                            headlineColor: "",
                            description: "",
                            topBgColor: "#FFF",
                            imageURL: "",
                            mc_img: "",
                            imageType: "",
                            mc_img_type: "",
                            alt: "",
                            cta: {
                                url: "",
                                label: "",
                                cta_type: "",
                                cta_style: "",
                                cta_form_id: "",
                                cta_video_id: "",
                                ctaIconLocation: ""
                            }
                        };
                        Ee && (ke = {
                            headline: Ee.card_headline ? Ee.card_headline : "",
                            headlineColor: Ee.card_headline_color ? Ee.card_headline_color : "",
                            description: Ee.card_description ? Ee.card_description : "",
                            topBgColor: Ee.card_top_bg_color ? Ee.card_top_bg_color : "#fff",
                            imageURL: Ee.image && Ee.image.rel_url ? Ee.image.rel_url : "",
                            alt: Ee.image && Ee.options && Ee.options.alt ? Ee.options.alt : "",
                            mc_img: Ee.image && Ee.image.webp_image_url ? Ee.image.webp_image_url : "",
                            imageType: "image/".concat((0,
                                _.yg)(ke.imageURL)),
                            mc_img_type: "image/".concat((0,
                                _.yg)(ke.mc_img)),
                            cta: {
                                url: Ee.field_cta_link_component && Ee.field_cta_link_component.field_cta_link && Ee.field_cta_link_component.field_cta_link.link ? Ee.field_cta_link_component.field_cta_link.link : "",
                                label: Ee.field_cta_link_component && Ee.field_cta_link_component.field_cta_link && Ee.field_cta_link_component.field_cta_link.link ? Ee.field_cta_link_component.field_cta_link.label : "",
                                cta_type: Ee.field_cta_link_component.field_carousel_cta_type ? Ee.field_cta_link_component.field_carousel_cta_type : "Link",
                                cta_style: Ee.field_cta_link_component.field_cta_style && Ee.field_cta_link_component.field_cta_style.field_cta_size && Ee.field_cta_link_component.field_cta_style.field_cta_size[0] && Ee.field_cta_link_component.field_cta_style.field_cta_size[0].value ? Ee.field_cta_link_component.field_cta_style.field_cta_size[0].value : "",
                                ctaIconLocation: null !== (ge = null == Ee || null === (ve = Ee.field_cta_link_component) || void 0 === ve || null === (he = ve.field_cta_style) || void 0 === he || null === (be = he.field_cta_icon_location) || void 0 === be || null === (ye = be[0]) || void 0 === ye ? void 0 : ye.value) && void 0 !== ge ? ge : "",
                                cta_form_id: Ee.field_cta_link_component.field_carousel_gated_form && Ee.field_cta_link_component.field_carousel_gated_form.value ? Ee.field_cta_link_component.field_carousel_gated_form.value : "",
                                cta_video_id: Ee.field_cta_link_component.field_cta_brightcove_video && Ee.field_cta_link_component.field_cta_brightcove_video.video_id[0] ? Ee.field_cta_link_component.field_cta_brightcove_video.video_id[0].value : ""
                            }
                        });
                        var Ne = (l.default === r.field_card_layout || l.highlighted_feature_columns === r.field_card_layout) && b.map((function (e, t) {
                            var o, s, m, u, p = (t + 1) % V != 0 || 1 == V, f = e.card_headline ? e.card_headline : "", v = e.card_headline_color ? e.card_headline_color : "", h = v ? {
                                style: {
                                    color: v
                                }
                            } : "", y = e.card_sub_headline ? e.card_sub_headline : "", w = e.card_sub_headline_color ? e.card_sub_headline_color : "", E = e.image && e.image.rel_url ? e.image.rel_url : "", N = e.card_brightcove_video && e.card_brightcove_video.video_id.length > 0 ? e.card_brightcove_video.video_id[0].value : "", C = e.card_brightcove_video && e.card_brightcove_video.name.length > 0 ? e.card_brightcove_video.name[0].value : "", x = e.image && e.image.options && e.image.options.alt ? e.image.options.alt : null, S = e.field_cta_link_component ? e.field_cta_link_component : "", z = S && S.field_cta_link && S.field_cta_link.link ? S.field_cta_link.link : "", I = S && S.field_cta_link && S.field_cta_link.label ? S.field_cta_link.label : "", L = S ? "" !== S.field_carousel_cta_type ? S.field_carousel_cta_type : "Link" : "", T = S && S.field_cta_style && S.field_cta_style.field_cta_size && S.field_cta_style.field_cta_size[0] && S.field_cta_style.field_cta_size[0].value ? S.field_cta_style.field_cta_size[0].value : "", O = null !== (o = null == S || null === (s = S.field_cta_style) || void 0 === s || null === (m = s.field_cta_icon_location) || void 0 === m || null === (u = m[0]) || void 0 === u ? void 0 : u.value) && void 0 !== o ? o : "", M = S && S.field_carousel_gated_form && S.field_carousel_gated_form.value ? S.field_carousel_gated_form.value : "", H = S && S.field_cta_brightcove_video && S.field_cta_brightcove_video.video_id[0] ? S.field_cta_brightcove_video.video_id[0].value : "", B = e.card_description ? e.card_description : "", A = e.open_link_in_new_tab && 1 == e.open_link_in_new_tab ? "_blank" : "", P = e.field_mc_heading_config && "1" == e.field_mc_heading_config ? -1 : 0, j = e.field_mc_heading_config && "1" == e.field_mc_heading_config && y ? n()["top-sub-headline"] : y ? n()["bottom-sub-headline"] : "", R = {}, Z = "";
                            "1" == r.field_enable_vertical_divider && (R.borderRightColor = l.highlighted_feature_columns === r.field_card_layout && r.field_card_divider_color || p ? r.field_card_divider_color : "transparent",
                                R.borderBottomColor = l.highlighted_feature_columns === r.field_card_layout && r.field_card_divider_color || p ? r.field_card_divider_color : "transparent",
                                Z = p && 1 == V ? n()["horizontal-divider"] : n()["vertical-divider"]),
                                R.width = d && d.data && d.data.card_settings && d.data.card_settings && d.data.card_settings.card_width && "324px" != d.data.card_settings.card_width ? d.data.card_settings.card_width : "".concat(Math.floor(1080 / b.length), "px");
                            var U, F = r && r.component_type && "default" == r.component_type && (E || N) ? n()["highlighted-item-default"] : "", W = r && r.component_type && "newsroom" == r.component_type ? n()["highlighted-item-newsroom"] : "";
                            U = "".concat(n()["mc-item"], " mc-default ").concat(Z, " ").concat(F, " ").concat(W, " ").concat(D),
                                k = "mc-default-list";
                            var J = r && r.component_type && "newsroom" == r.component_type && e.feature_author ? e.feature_author : ""
                                , X = r && r.component_type && "newsroom" == r.component_type && e.feature_date ? a.formatDate(e.feature_date) : ""
                                , K = e.field_clickable_card_url ? e.field_clickable_card_url : ""
                                , G = !!K && K.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
                                , Y = e.image && e.image.webp_image_url ? e.image.webp_image_url : ""
                                , q = "image/".concat((0,
                                    _.yg)(E))
                                , $ = c.createElement("div", {
                                    className: n()["mc-item-content"],
                                    style: {
                                        textAlign: r.field_card_text_align
                                    }
                                }, l.highlighted_feature_columns === r.field_card_layout && (N || E) ? c.createElement("div", {
                                    className: "".concat(n()["featured-column-item-media"])
                                }, N ? c.createElement("div", {
                                    className: n()["video-media"],
                                    onClick: function (e) {
                                        return a.VideoCTA(e, C)
                                    }
                                }, c.createElement("i", {
                                    className: n()["video-icon"]
                                }), c.createElement("div", {
                                    style: {
                                        display: "none"
                                    },
                                    "data-video-ids": N,
                                    "data-experience": "5b0f79545eecca0010826d71"
                                }), E ? "image/gif" != q ? c.createElement("picture", {
                                    className: n().media
                                }, Y && c.createElement("source", {
                                    srcSet: "".concat(Y),
                                    type: "image/webp"
                                }), c.createElement("source", {
                                    srcSet: E,
                                    type: q
                                }), c.createElement("img", {
                                    src: E,
                                    alt: x
                                })) : c.createElement("img", {
                                    className: n().media,
                                    src: E,
                                    alt: x
                                }) : "") : E ? "image/gif" != q ? c.createElement("picture", null, Y && c.createElement("source", {
                                    srcSet: "".concat(Y),
                                    type: "image/webp"
                                }), c.createElement("source", {
                                    srcSet: E,
                                    type: q
                                }), c.createElement("img", {
                                    width: R.width,
                                    height: "220px",
                                    src: E,
                                    alt: x
                                })) : c.createElement("img", {
                                    width: R.width,
                                    height: "220px",
                                    src: E,
                                    alt: x
                                }) : null) : E ? "image/gif" != q ? c.createElement("picture", {
                                    className: "".concat(n()["mc-image"])
                                }, Y && c.createElement("source", {
                                    srcSet: "".concat(Y),
                                    type: "image/webp"
                                }), c.createElement("source", {
                                    srcSet: E,
                                    type: q
                                }), c.createElement("img", {
                                    width: R.width,
                                    height: R.width,
                                    loading: "lazy",
                                    src: E,
                                    alt: x
                                })) : c.createElement("img", {
                                    width: R.width,
                                    height: R.width,
                                    loading: "lazy",
                                    className: "".concat(n()["mc-image"]),
                                    src: E,
                                    alt: x
                                }) : N ? c.createElement("div", {
                                    "data-video-ids": N,
                                    "data-experience": "5b0f79545eecca0010826d71"
                                }) : null, c.createElement("div", {
                                    className: "".concat(n()["mc-item-info"], " ").concat(n()["horizontal-align-" + r.field_card_text_align], " ").concat(j)
                                }, (J || X) && c.createElement("div", {
                                    className: "".concat(n()["author-section"])
                                }, J ? c.createElement("span", null, J, " ") : "", J && X ? " | " : "", X ? c.createElement("span", null, X) : ""), (f || y) && c.createElement("div", {
                                    className: "".concat(n()["mc-item-heading"])
                                }, f && c.createElement("h4", g({
                                    className: "".concat(n()["mc-item-title"])
                                }, h), " ", f, " "), y && c.createElement("p", {
                                    className: "".concat(n()["mc-item-subtitle"]),
                                    style: {
                                        color: w,
                                        order: P
                                    }
                                }, " ", y, " ")), B && c.createElement("div", {
                                    className: "".concat(n()["mc-item-desc"]),
                                    dangerouslySetInnerHTML: {
                                        __html: B
                                    }
                                }), z && I && c.createElement(i.default, {
                                    ctaType: L,
                                    ctaUrl: z,
                                    ctaLabel: I,
                                    ctaStyle: T,
                                    ctaFormID: M,
                                    ctaVideoID: H,
                                    ctaLinkTarget: A,
                                    dataComponentName: a.dataComponentName,
                                    dataMachineName: "multi_column_layout",
                                    index: t,
                                    parentOrder: a.props.componentOrder,
                                    ctaIcon: O
                                })));
                            return r && "1" === r.field_enable_clickable_card && K && G ? c.createElement("li", {
                                key: t,
                                className: "".concat(U, " ").concat(n()[D], " ").concat(D),
                                style: R
                            }, c.createElement("div", {
                                className: "".concat(n()["mc-item-content"]),
                                style: {
                                    textAlign: r.field_card_text_align
                                }
                            }, l.highlighted_feature_columns === r.field_card_layout && (N || E) ? c.createElement("div", {
                                className: "".concat(n()["featured-column-item-media"])
                            }, N ? c.createElement("div", {
                                className: n()["video-media"],
                                onClick: function (e) {
                                    return a.VideoCTA(e, C)
                                }
                            }, c.createElement("i", {
                                className: n()["video-icon"]
                            }), c.createElement("div", {
                                style: {
                                    display: "none"
                                },
                                "data-video-ids": N,
                                "data-experience": "5b0f79545eecca0010826d71"
                            }), E ? "image/gif" != q ? c.createElement("picture", {
                                className: "".concat(n().media)
                            }, Y && c.createElement("source", {
                                srcSet: "".concat(Y),
                                type: "image/webp"
                            }), c.createElement("source", {
                                srcSet: E,
                                type: q
                            }), c.createElement("img", {
                                src: E,
                                alt: x
                            })) : c.createElement("img", {
                                className: n().media,
                                src: E,
                                alt: x
                            }) : "") : E ? c.createElement("a", {
                                href: K,
                                className: "".concat(n()["card-link"])
                            }, "image/gif" != q ? c.createElement("picture", null, Y && c.createElement("source", {
                                srcSet: "".concat(Y),
                                type: "image/webp"
                            }), c.createElement("source", {
                                srcSet: E,
                                type: q
                            }), c.createElement("img", {
                                src: E,
                                alt: x
                            })) : c.createElement("img", {
                                src: E,
                                alt: x
                            })) : null) : E ? "image/gif" != q ? c.createElement("picture", {
                                className: "".concat(n()["mc-image"])
                            }, Y && c.createElement("source", {
                                srcSet: "".concat(Y),
                                type: "image/webp"
                            }), c.createElement("source", {
                                srcSet: E,
                                type: q
                            }), c.createElement("img", {
                                src: E,
                                alt: x
                            })) : c.createElement("img", {
                                className: "".concat(n()["mc-image"]),
                                src: E,
                                alt: x
                            }) : N ? c.createElement("div", {
                                "data-video-ids": N,
                                "data-experience": "5b0f79545eecca0010826d71"
                            }) : null, c.createElement("a", {
                                href: K,
                                className: "".concat(n()["card-link"])
                            }, c.createElement("div", {
                                className: "".concat(n()["mc-item-info"], "  ").concat(n()["horizontal-align-" + r.field_card_text_align], " ").concat(j)
                            }, (J || X) && c.createElement("div", {
                                className: "".concat(n()["author-section"])
                            }, J ? c.createElement("span", null, J, " ") : "", J && X ? " | " : "", X ? c.createElement("span", null, X) : ""), (f || y) && c.createElement("div", {
                                className: "".concat(n()["mc-item-heading"])
                            }, f && c.createElement("h4", g({
                                className: "".concat(n()["mc-item-title"])
                            }, h), " ", f, " "), y && c.createElement("p", {
                                className: "".concat(n()["mc-item-subtitle"]),
                                style: {
                                    color: w,
                                    order: P
                                }
                            }, " ", y, " ")), B && c.createElement("div", {
                                className: "".concat(n()["mc-item-desc"]),
                                dangerouslySetInnerHTML: {
                                    __html: B
                                }
                            })))), c.createElement("div", {
                                style: {
                                    textAlign: Q
                                }
                            }, z && I && c.createElement(i.default, {
                                ctaType: L,
                                ctaUrl: z,
                                ctaLabel: I,
                                ctaStyle: T,
                                ctaFormID: M,
                                ctaVideoID: H,
                                dataComponentName: a.dataComponentName,
                                dataMachineName: "multi_column_layout",
                                index: t,
                                parentOrder: a.props.componentOrder,
                                ctaIcon: O
                            }))) : c.createElement("li", {
                                key: t,
                                className: "".concat(U),
                                style: R
                            }, $)
                        }
                        ))
                            , Ce = l.contact_us_card === r.field_card_layout && c.createElement(m.default, {
                                pageData: d,
                                cardSettings: r,
                                componentId: this.componentId
                            })
                            , xe = (l.icon_and_desc === r.field_card_layout || l.more_resources === r.field_card_layout || l.priorities_grid === r.field_card_layout || l.services_grid === r.field_card_layout || l.icon_stack === r.field_card_layout || l.icon_bar_management === r.field_card_layout || l.awards_card === r.field_card_layout || r.field_card_layout === l.location_card) && b.map((function (e, t) {
                                var o, s, m, u, p = e.card_headline ? e.card_headline : "", f = e.card_headline_color ? e.card_headline_color : "", g = e.card_sub_headline ? e.card_sub_headline : "", v = e.card_sub_headline_color ? e.card_sub_headline_color : "", h = e.image && e.image.rel_url ? "".concat(e.image.rel_url) : "", y = e.image && e.image.options && e.image.options.alt ? e.image.options.alt : null, w = e.field_cta_link_component ? e.field_cta_link_component : "", E = w && w.field_cta_link && w.field_cta_link.link ? w.field_cta_link.link : "", N = w && w.field_cta_link && w.field_cta_link.label ? w.field_cta_link.label : "", C = w ? "" !== w.field_carousel_cta_type ? w.field_carousel_cta_type : "Link" : "", S = w && w.field_cta_style && w.field_cta_style.field_cta_size && w.field_cta_style.field_cta_size[0] && w.field_cta_style.field_cta_size[0].value ? w.field_cta_style.field_cta_size[0].value : "", I = null !== (o = null == w || null === (s = w.field_cta_style) || void 0 === s || null === (m = s.field_cta_icon_location) || void 0 === m || null === (u = m[0]) || void 0 === u ? void 0 : u.value) && void 0 !== o ? o : "", T = w && w.field_carousel_gated_form && w.field_carousel_gated_form.value ? w.field_carousel_gated_form.value : "", O = w && w.field_cta_brightcove_video && w.field_cta_brightcove_video.video_id[0] ? w.field_cta_brightcove_video.video_id[0].value : "", M = e.card_brightcove_video && e.card_brightcove_video.video_id.length > 0 ? e.card_brightcove_video.video_id[0].value : "", H = e.card_description ? e.card_description : "", B = e.card_type ? e.card_type : "image", A = e.field_clickable_card_url ? e.field_clickable_card_url : l.icon_bar_management === r.field_card_layout && E || l.location_card === r.field_card_layout && E ? E : "", P = !!A && A.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g), j = e.image && e.image.webp_image_url ? e.image.webp_image_url : "", R = "image/".concat((0,
                                    _.yg)(h)), Z = ("image/".concat((0,
                                        _.yg)(j)),
                                        r && r.award_card_component_type ? r.award_card_component_type : "Icon awards card"), U = (t + 1) % V != 0 || 1 == V, F = C && "Link" == C && e.open_link_in_new_tab && 1 == e.open_link_in_new_tab ? "_blank" : "_self", W = e.field_mc_heading_config && "1" == e.field_mc_heading_config ? -1 : 0, J = {};
                                J.width = r.card_width && l.awards_card !== r.field_card_layout ? r.card_width : void 0;
                                var X = {
                                    display: "flex",
                                    justifyContent: "center"
                                }
                                    , K = Math.floor(a.state.windowSize / parseInt(r.card_width.replace("px", "")));
                                X.width = Math.floor(a.state.windowSize / (K > b.length ? b.length : K)) + "px",
                                    a.state.windowSize > 768 && (V = b.length);
                                var G = "";
                                "1" == r.field_enable_vertical_divider && (J.borderRightColor = U ? r.field_card_divider_color : "transparent",
                                    J.borderBottomColor = U ? r.field_card_divider_color : "transparent",
                                    G = U && 1 == V ? n()["horizontal-divider"] : n()["vertical-divider"]),
                                    X.borderRightColor = J.borderRightColor,
                                    X.borderBottomColor = J.borderBottomColor,
                                    k = "icon_and_desc",
                                    x = n()["mcid-list"];
                                var Y = ""
                                    , q = l.icon_and_desc !== r.field_card_layout || !h || p || g || H || E ? "" : n()["award-item"];
                                Y = "".concat(n()["mcid-item"], " ").concat(G, " ").concat(q);
                                var Q = "".concat(n()["mcid-icon"])
                                    , $ = r && "1" != r.field_enable_clickable_card && l.more_resources === r.field_card_layout ? "".concat(n()["more-resources-section"]) : ""
                                    , ee = d && d.field_adwards_bg_color && d.field_adwards_bg_color[0] && d.field_adwards_bg_color[0].color ? d.field_adwards_bg_color[0].color : ""
                                    , te = {
                                        headline: p,
                                        subHeadline: g,
                                        itemDesc: H,
                                        showCta: !0
                                    };
                                if (l.more_resources === r.field_card_layout)
                                    Y = "".concat(Y, " ").concat(n().item_wo_desc_mob),
                                        x = "".concat(x, " ").concat(n().item_wo_desc_mob_list, " more_resources"),
                                        k = "".concat(k, " more_resources"),
                                        te = {
                                            subHeadline: g,
                                            showCta: !1
                                        };
                                else if (l.priorities_grid === r.field_card_layout)
                                    a.state.cardSize && a.state.windowSize < 769 && (X.width = "100%",
                                        J.width = "100%"),
                                        Y = "".concat(Y, " ").concat(n().item_w_desc_mob),
                                        x = "".concat(x, " priorities_grid"),
                                        k = "".concat(k, " priorities_grid"),
                                        te = {
                                            headline: p,
                                            itemDesc: H,
                                            showCta: !0
                                        };
                                else if (l.services_grid === r.field_card_layout)
                                    J.maxWidth = J.width || "500px",
                                        delete J.width,
                                        Y = "".concat(Y, " ").concat(n().services_grid_item),
                                        x = "".concat(x, " ").concat(n().services_grid_list, "  services_grid"),
                                        k = "".concat(k, " ").concat(n().services_grid_container, " services_grid"),
                                        te = {
                                            headline: p,
                                            itemDesc: H,
                                            showCta: !0
                                        },
                                        Q = "".concat(n()["sgrid-icon"]);
                                else if (l.icon_stack === r.field_card_layout) {
                                    var ae = "".concat(Y, " ").concat(n()["icon-stack-item"], " ").concat(n()["is-col-" + se]);
                                    Y = de && E && "Link" == C ? "".concat(ae, " ").concat(n()["hoverable-item"]) : "".concat(ae),
                                        x = "".concat(x, " ").concat(n()["icon-stack-list"], " icon_stack"),
                                        k = "".concat(k, " icon_stack"),
                                        Q = "".concat(n()["icb-icon"]),
                                        delete J.width,
                                        te = {
                                            subHeadline: g,
                                            showCta: !1
                                        };
                                    var ce = c.createElement("div", {
                                        key: t,
                                        className: n()["icb-item"]
                                    }, h && "image/gif" != R ? c.createElement("picture", {
                                        className: n()["icb-icon"]
                                    }, j && c.createElement("source", {
                                        srcSet: "".concat(j),
                                        type: "image/webp"
                                    }), c.createElement("source", {
                                        srcSet: h,
                                        type: R
                                    }), c.createElement("img", {
                                        src: h,
                                        alt: y
                                    })) : c.createElement("img", {
                                        className: n()["icb-icon"],
                                        src: h,
                                        alt: y
                                    }), g && c.createElement("h4", {
                                        className: "".concat(n()["icb-title"]),
                                        style: {
                                            color: v
                                        }
                                    }, g), H && c.createElement("div", {
                                        className: "".concat(n()["icb-desc"], " p2"),
                                        dangerouslySetInnerHTML: {
                                            __html: H
                                        }
                                    }));
                                    ue.push(ce)
                                } else if (l.icon_bar_management === r.field_card_layout)
                                    Y = "".concat(n()["ibm-item"]),
                                        x = "".concat(x, " ").concat(n()["ibm-list"], " icon-bar-management"),
                                        k = "".concat(n()["icon-bar-management"], " icon-bar-management"),
                                        de = !0,
                                        C = "Link",
                                        te = {
                                            subHeadline: g,
                                            showCta: !1
                                        };
                                else if (l.awards_card === r.field_card_layout)
                                    Y = "Icon awards card" == Z ? "".concat(n()["awards-item"], " ").concat(n()["awards-icon-item"]) : "".concat(n()["awards-item"], " ").concat(n()["awards-large-item"]),
                                        x = "".concat(n()["awards-list"], " awards-list"),
                                        Q = "".concat("Icon awards card" == Z ? n()["awards-icon"] : n()["awards-large"]),
                                        k = "",
                                        J.width = void 0,
                                        J.background = ee,
                                        B = "image",
                                        te = {
                                            headline: p,
                                            itemDesc: H,
                                            showCta: !1
                                        };
                                else if (l.location_card === r.field_card_layout)
                                    Y = "".concat(n()["loc-item"]),
                                        x = "".concat(x, " ").concat(n()["loc-card-list"], " location-cards"),
                                        k = "".concat(n()["location-cards"], " location-cards"),
                                        C = "Link",
                                        de = !0,
                                        r.field_card_text_align = "Center",
                                        te = {
                                            subHeadline: g = N,
                                            showCta: !1
                                        };
                                else if (l.icon_and_desc === r.field_card_layout)
                                    switch (r.image_size) {
                                        case "sm":
                                            Q += " ".concat(n()["iwd-img-sm"]);
                                            break;
                                        case "med":
                                            Q += " ".concat(n()["iwd-img-md"]);
                                            break;
                                        case "lrg":
                                            Q += " ".concat(n()["iwd-img-lg"])
                                    }
                                var ie = de && "Link" == C ? c.createElement("span", {
                                    className: n()["inline-link"]
                                }, N) : c.createElement("div", {
                                    className: de && A && P ? n().clickable_card_cta : ""
                                }, c.createElement(i.default, {
                                    ctaType: C,
                                    ctaUrl: E,
                                    ctaLabel: N,
                                    ctaStyle: S,
                                    ctaFormID: T,
                                    ctaVideoID: O,
                                    ctaLinkTarget: F,
                                    dataComponentName: a.dataComponentName,
                                    dataMachineName: "multi_column_layout",
                                    index: t,
                                    parentOrder: a.props.componentOrder,
                                    ctaIcon: I
                                }))
                                    , le = null;
                                "image" == B && h ? le = "image/gif" != R ? c.createElement("picture", {
                                    className: Q
                                }, j && c.createElement("source", {
                                    srcSet: "".concat(j),
                                    type: "image/webp"
                                }), c.createElement("source", {
                                    srcSet: h,
                                    type: R
                                }), c.createElement("img", {
                                    src: h,
                                    alt: y
                                })) : c.createElement("img", {
                                    className: Q,
                                    src: h,
                                    alt: y
                                }) : "video" == B && M && l.icon_and_desc === r.field_card_layout && (le = c.createElement("div", {
                                    "data-video-ids": M,
                                    "data-experience": "5b0f79545eecca0010826d71"
                                })),
                                    de && E && "Link" == C && (Y = "".concat(Y, " ").concat(n().clickable));
                                var ne = c.createElement("div", {
                                    className: n()["mcid-content"],
                                    style: {
                                        textAlign: r.field_card_text_align,
                                        width: "space-between" == r.field_card_alignnment ? J.width : ""
                                    }
                                }, le, c.createElement("div", {
                                    className: "".concat(n()["mcid-info"], " ").concat(n()["horizontal-align-" + r.field_card_text_align])
                                }, te.headline && c.createElement("h3", {
                                    className: "".concat(n()["mcid-title"], " ").concat(L),
                                    style: {
                                        color: f
                                    }
                                }, " ", p, " "), te.subHeadline ? l.location_card === r.field_card_layout ? c.createElement("h4", {
                                    className: "".concat(n()["mcid-subtitle"]),
                                    style: {
                                        color: v,
                                        order: W
                                    }
                                }, " ", g, " ") : c.createElement("p", {
                                    className: "".concat(n()["mcid-subtitle"], " ").concat($),
                                    style: {
                                        color: v,
                                        order: W,
                                        marginBottom: -1 == W ? "-17px" : void 0
                                    },
                                    dangerouslySetInnerHTML: {
                                        __html: g
                                    }
                                }) : null, te.itemDesc && c.createElement("div", {
                                    className: "".concat(n()["mcid-desc"], " ").concat(z, " ").concat(n()[D]),
                                    dangerouslySetInnerHTML: {
                                        __html: H
                                    }
                                }), te.showCta && E && N && ie ? ie : null), (l.icon_bar_management === r.field_card_layout || l.location_card === r.field_card_layout) && c.createElement("div", {
                                    className: "".concat(n()["ibm-item-details"]),
                                    style: {
                                        backgroundColor: we
                                    }
                                }, H && c.createElement("div", {
                                    className: "".concat(n()["mcid-desc"], " ").concat(n()[D]),
                                    dangerouslySetInnerHTML: {
                                        __html: H
                                    }
                                }), N && c.createElement("span", {
                                    className: "".concat(n()["ibm-item-url"])
                                }, N)));
                                return c.createElement("li", {
                                    key: t,
                                    className: Y,
                                    style: "space-between" == r.field_card_alignnment ? X : J
                                }, de && A && P ? c.createElement("a", {
                                    href: A,
                                    className: "".concat(n()["card-link"])
                                }, ne) : ne)
                            }
                            ))
                            , Se = (l.text_only === r.field_card_layout || l.addon_module === r.field_card_layout) && b.map((function (e, t) {
                                var o, d, _, s, m = e.card_headline ? e.card_headline : "", u = e.card_headline_color ? e.card_headline_color : "", p = e.card_sub_headline ? e.card_sub_headline : "", f = e.card_sub_headline_color ? e.card_sub_headline_color : "", g = e.field_cta_link_component ? e.field_cta_link_component : "", v = g && g.field_cta_link && g.field_cta_link.link ? g.field_cta_link.link : "", h = g && g.field_cta_link && g.field_cta_link.label ? g.field_cta_link.label : "", y = g && g.field_carousel_cta_type ? g.field_carousel_cta_type : "Link", w = g && g.field_cta_style && g.field_cta_style.field_cta_size && g.field_cta_style.field_cta_size[0] && g.field_cta_style.field_cta_size[0].value ? g.field_cta_style.field_cta_size[0].value : "", E = null !== (o = null == g || null === (d = g.field_cta_style) || void 0 === d || null === (_ = d.field_cta_icon_location) || void 0 === _ || null === (s = _[0]) || void 0 === s ? void 0 : s.value) && void 0 !== o ? o : "", N = g && g.field_carousel_gated_form && g.field_carousel_gated_form.value ? g.field_carousel_gated_form.value : "", C = g && g.field_cta_brightcove_video && g.field_cta_brightcove_video.video_id[0] ? g.field_cta_brightcove_video.video_id[0].value : "", S = e.card_description ? e.card_description : "", z = e.open_link_in_new_tab && 1 == e.open_link_in_new_tab ? "_blank" : "", I = e.field_mc_heading_config && "1" == e.field_mc_heading_config ? -1 : 0, L = (t + 1) % V != 0 || 1 == V, M = e.field_clickable_card_url ? e.field_clickable_card_url : "", H = !!M && M.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g), B = "", A = {};
                                A.width = r.card_width ? r.card_width : "30%";
                                var P = {
                                    display: "flex",
                                    justifyContent: "center"
                                }
                                    , j = Math.floor(a.state.windowSize / parseInt(r.card_width.replace("px", "")));
                                P.width = Math.floor(a.state.windowSize / (j > b.length ? b.length : j)) + "px",
                                    a.state.windowSize > 768 && (V = b.length),
                                    "1" == r.field_enable_vertical_divider && (A.borderRightColor = L ? r.field_card_divider_color : "transparent",
                                        A.borderBottomColor = L ? r.field_card_divider_color : "transparent",
                                        B = L && 1 == V ? n()["horizontal-divider"] : n()["vertical-divider"]),
                                    P.borderRightColor = A.borderRightColor,
                                    P.borderBottomColor = A.borderBottomColor,
                                    k = "text_only",
                                    x = n()["mct-list"];
                                var R = "";
                                R = "".concat(n()["mct-item"], " ").concat(B);
                                var Z = {
                                    headline: m,
                                    subHeadline: p,
                                    itemDesc: S
                                };
                                l.addon_module === r.field_card_layout && (T.background = "linear-gradient(".concat(ke.topBgColor, " 160px, ").concat(O, " 0%)"),
                                    delete T.backgroundColor,
                                    delete A.width,
                                    k = n()["addon-wrapper"],
                                    R = "".concat(n()["addon-item"]),
                                    Z = {
                                        subHeadline: p,
                                        itemDesc: S
                                    });
                                var U = c.createElement("div", {
                                    className: "".concat(n()["mct-content"]),
                                    style: {
                                        textAlign: r.field_card_text_align,
                                        width: "space-between" == r.field_card_alignnment && l.addon_module !== r.field_card_layout ? A.width : ""
                                    }
                                }, c.createElement("div", {
                                    className: "".concat(n()["mct-info"], " ").concat(n()["horizontal-align-" + r.field_card_text_align])
                                }, Z.headline && c.createElement("h4", {
                                    className: "".concat(n()["mct-title"]),
                                    style: {
                                        color: u
                                    }
                                }, " ", m, " "), Z.subHeadline ? l.addon_module === r.field_card_layout ? c.createElement("h4", {
                                    className: "".concat(n()["mct-subtitle"]),
                                    style: {
                                        color: f,
                                        order: I
                                    }
                                }, " ", p, " ") : c.createElement("p", {
                                    className: "".concat(n()["mct-subtitle"]),
                                    style: {
                                        color: f,
                                        order: I
                                    }
                                }, " ", p, " ") : null, Z.itemDesc && c.createElement("div", {
                                    className: "".concat(n()["mct-desc"], " ").concat(n()[D]),
                                    dangerouslySetInnerHTML: {
                                        __html: S
                                    }
                                }), v && h && r && "0" === r.field_enable_clickable_card && c.createElement("div", {
                                    className: r && "1" === r.field_enable_clickable_card && M && H ? n().clickable_card_cta : ""
                                }, c.createElement(i.default, {
                                    ctaType: y,
                                    ctaUrl: v,
                                    ctaLabel: h,
                                    ctaStyle: w,
                                    ctaFormID: N,
                                    ctaVideoID: C,
                                    ctaLinkTarget: z,
                                    dataComponentName: a.dataComponentName,
                                    dataMachineName: "multi_column_layout",
                                    index: t,
                                    parentOrder: a.props.componentOrder,
                                    ctaIcon: E
                                })), v && h && r && "1" === r.field_enable_clickable_card && c.createElement("span", {
                                    className: n()["inline-link"]
                                }, h)));
                                return c.createElement("li", {
                                    key: t,
                                    className: R,
                                    style: "space-between" == r.field_card_alignnment && l.addon_module !== r.field_card_layout ? P : A
                                }, r && "1" === r.field_enable_clickable_card && M && H ? c.createElement("a", {
                                    href: M,
                                    className: "".concat(n()["card-link"])
                                }, " ", U, " ") : U)
                            }
                            ))
                            , ze = (r.field_card_layout === l.stat_and_desc || r.field_card_layout === l.stat_bar || r.field_card_layout === l.case_study_result_stat) && b.length > 0 && b.map((function (e, t) {
                                var o, d, s, m, u, p = e.field_cta_link_component && e.field_cta_link_component.field_cta_style && e.field_cta_link_component.field_cta_style.field_cta_size && e.field_cta_link_component.field_cta_style.field_cta_size[0] && e.field_cta_link_component.field_cta_style.field_cta_size[0].value ? e.field_cta_link_component.field_cta_style.field_cta_size[0].value : "", f = null !== (o = null == e || null === (d = e.field_cta_link_component) || void 0 === d || null === (s = d.field_cta_style) || void 0 === s || null === (m = s.field_cta_icon_location) || void 0 === m || null === (u = m[0]) || void 0 === u ? void 0 : u.value) && void 0 !== o ? o : "", g = e.field_cta_link_component ? e.field_cta_link_component.field_cta_link.link : "", v = e.field_cta_link_component ? e.field_cta_link_component.field_cta_link.label : "", h = e.field_cta_link_component ? "" !== e.field_cta_link_component.field_carousel_cta_type ? e.field_cta_link_component.field_carousel_cta_type : "Link" : "", w = e.field_cta_link_component && e.field_cta_link_component.field_carousel_gated_form ? e.field_cta_link_component.field_carousel_gated_form.value : "", E = e.field_cta_link_component && e.field_cta_link_component.field_cta_brightcove_video && e.field_cta_link_component.field_cta_brightcove_video.video_id[0] ? e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value : "", k = e.open_link_in_new_tab && 1 == e.open_link_in_new_tab ? "_blank" : "", N = e && e.card_stat_color ? e.card_stat_color : "#4db2ca", C = e.image && e.image.rel_url ? e.image.rel_url : "", x = e.card_brightcove_video && e.card_brightcove_video.video_id.length > 0 ? e.card_brightcove_video.video_id[0].value : "", S = e.card_stat_font_size && r.field_card_layout === l.stat_and_desc ? e.card_stat_font_size : "", z = e.card_stat ? c.createElement("p", {
                                    className: n()[S],
                                    style: {
                                        color: N
                                    }
                                }, e.card_stat) : null, I = "1" == r.field_enable_vertical_divider ? n()["enable-card-dividers"] : "", L = r.field_card_divider_color ? r.field_card_divider_color : "#d8d8d8", T = "1" == r.field_enable_vertical_divider ? n()["enable-card-dividers-one-stat"] : "", O = e.field_mc_heading_config && "1" == e.field_mc_heading_config ? -1 : 0, M = e.image && e.image.webp_image_url ? e.image.webp_image_url : "", H = "image/".concat((0,
                                    _.yg)(C)), B = {
                                        display: "flex",
                                        justifyContent: "center"
                                    }, A = parseInt(y.replace("px", "")), P = Math.floor(a.state.windowSize ? a.state.windowSize : A / parseInt(r.card_width.replace("px", "")));
                                B.maxWidth = Math.floor((a.state.windowSize ? a.state.windowSize : A) / (P > b.length ? b.length : P)) + "px",
                                    B.borderColor = r.field_card_layout != l.case_study_result_stat ? L : void 0,
                                    a.state.windowSize > 768 && (V = b.length);
                                var j = {
                                    borderColor: L
                                };
                                r.field_card_layout !== l.stat_bar && b.length <= 1 && (j.display = "flex");
                                var R = e.image && e.image.option && e.image.option.alt ? e.image.option.alt : "";
                                return c.createElement("li", {
                                    className: "".concat(I),
                                    style: r.field_card_layout === l.stat_bar && "space-between" == r.field_card_alignnment ? B : j,
                                    key: t
                                }, c.createElement("div", {
                                    style: r.field_card_layout === l.stat_bar && "space-between" == r.field_card_alignnment ? {
                                        maxWidth: "270px"
                                    } : j
                                }, c.createElement("div", {
                                    className: n()["left-section"]
                                }, c.createElement("div", {
                                    className: "".concat(n()["stat-item-value"]),
                                    style: {
                                        textAlign: 1 == b.length ? "center" : Q || "left"
                                    }
                                }, "image" == e.card_type && C ? "image/gif" != H ? c.createElement("picture", null, M && c.createElement("source", {
                                    srcSet: "".concat(M),
                                    type: "image/webp"
                                }), c.createElement("source", {
                                    srcSet: C,
                                    type: H
                                }), c.createElement("img", {
                                    src: C,
                                    alt: R
                                })) : c.createElement("img", {
                                    src: C,
                                    alt: e.image.options.alt
                                }) : "video" == e.card_type && x ? c.createElement("div", {
                                    className: n()["video-section"],
                                    "data-video-ids": x,
                                    "data-experience": "5b0f79545eecca0010826d71"
                                }) : null, 1 != b.length || "image" != e.card_type && "video" != e.card_type ? z : ""), 1 === b.length ? c.createElement("div", {
                                    className: n()["stat-title-wrapper"]
                                }, e.card_headline && c.createElement("div", {
                                    className: n()["stat-item-heading"],
                                    style: {
                                        textAlign: 1 == b.length ? "center" : Q || "left",
                                        color: e.card_headline_color
                                    }
                                }, c.createElement("p", null, c.createElement("span", null, e.card_headline))), e.card_sub_headline && c.createElement("div", {
                                    className: n()["stat-item-sub-heading"],
                                    style: {
                                        textAlign: 1 == b.length ? "center" : Q || "left",
                                        color: e.card_sub_headline_color,
                                        order: O
                                    }
                                }, c.createElement("p", null, c.createElement("span", null, e.card_sub_headline)))) : ""), c.createElement("div", {
                                    className: "".concat(n()["right-section"], " ").concat(T, " ").concat(n()["horizontal-align-" + Q]),
                                    style: {
                                        textAlign: Q || "",
                                        borderColor: L
                                    }
                                }, c.createElement("div", {
                                    className: "".concat(n()["stat-item-desc"], " ").concat(n()[D]),
                                    style: {
                                        textAlign: Q || ""
                                    },
                                    dangerouslySetInnerHTML: {
                                        __html: e.card_description
                                    }
                                }), g && v && c.createElement("div", {
                                    className: "".concat(n().cta_container, " ").concat(n()["horizontal-align-" + Q])
                                }, c.createElement(i.default, {
                                    ctaType: h,
                                    ctaUrl: g,
                                    ctaLabel: v,
                                    ctaStyle: p,
                                    ctaFormID: w,
                                    ctaVideoID: E,
                                    ctaLinkTarget: k,
                                    dataComponentName: a.dataComponentName,
                                    dataMachineName: "MultiColumn",
                                    index: t,
                                    parentOrder: a.props.componentOrder,
                                    ctaIcon: f
                                })))), l.case_study_result_stat == r.field_card_layout && I && c.createElement("span", {
                                    className: n()["minimal-divider"],
                                    style: {
                                        background: L
                                    }
                                }))
                            }
                            ))
                            , Ie = l.event_card === r.field_card_layout && b.map((function (e, t) {
                                var l, o, d, s, m = e.card_headline ? e.card_headline : "", u = e.card_headline_color ? e.card_headline_color : "", p = e.card_sub_headline ? e.card_sub_headline : "", f = e.card_sub_headline_color ? e.card_sub_headline_color : "", v = e.image && e.image.rel_url ? "".concat(e.image.rel_url) : "", h = e.card_brightcove_video && e.card_brightcove_video.video_id.length > 0 ? e.card_brightcove_video.video_id[0].value : "", b = e.image && e.image.options && e.image.options.alt ? e.image.options.alt : null, y = e.field_cta_link_component ? e.field_cta_link_component : "", w = y && y.field_cta_link && y.field_cta_link.link ? y.field_cta_link.link : "", E = y && y.field_cta_link && y.field_cta_link.label ? y.field_cta_link.label : "", k = y ? "" !== y.field_carousel_cta_type ? y.field_carousel_cta_type : "Link" : "", N = y && y.field_cta_style && y.field_cta_style.field_cta_size && y.field_cta_style.field_cta_size[0] && y.field_cta_style.field_cta_size[0].value ? y.field_cta_style.field_cta_size[0].value : "", C = null !== (l = null == y || null === (o = y.field_cta_style) || void 0 === o || null === (d = o.field_cta_icon_location) || void 0 === d || null === (s = d[0]) || void 0 === s ? void 0 : s.value) && void 0 !== l ? l : "", x = y && y.field_carousel_gated_form && y.field_carousel_gated_form.value ? y.field_carousel_gated_form.value : "", S = y && y.field_cta_brightcove_video && y.field_cta_brightcove_video.video_id[0] ? y.field_cta_brightcove_video.video_id[0].value : "", z = e.card_description ? e.card_description : "", I = e.open_link_in_new_tab && 1 == e.open_link_in_new_tab ? "_blank" : "";
                                T.maxWidth = "713px";
                                var L = e.image && e.image.webp_image_url ? e.image.webp_image_url : ""
                                    , O = "image/".concat((0,
                                        _.yg)(v))
                                    , D = r && r.divider_color ? r.divider_color : "#6d6e6f"
                                    , M = u ? {
                                        style: {
                                            color: u
                                        }
                                    } : ""
                                    , H = f ? {
                                        style: {
                                            color: f
                                        }
                                    } : ""
                                    , V = c.createElement("div", {
                                        className: n()["event-item-content"],
                                        style: {
                                            textAlign: r.field_card_text_align,
                                            borderBottomColor: D
                                        }
                                    }, v ? "image/gif" != O ? c.createElement("picture", {
                                        className: "".concat(n()["event-image"])
                                    }, L && c.createElement("source", {
                                        srcSet: "".concat(L),
                                        type: "image/webp"
                                    }), c.createElement("source", {
                                        srcSet: v,
                                        type: O
                                    }), c.createElement("img", {
                                        src: v,
                                        alt: b
                                    })) : c.createElement("img", {
                                        className: "".concat(n()["event-image"]),
                                        src: v,
                                        alt: b
                                    }) : h ? c.createElement("div", {
                                        className: "".concat(n()["event-video"]),
                                        "data-video-ids": h,
                                        "data-experience": "5b0f79545eecca0010826d71"
                                    }) : null, c.createElement("div", {
                                        className: "".concat(n()["mc-item-info"], " ").concat(n()["horizontal-align-" + r.field_card_text_align])
                                    }, (m || p) && c.createElement("div", {
                                        className: "".concat(n()["event-item-heading"])
                                    }, p && c.createElement("p", g({
                                        className: "".concat(n()["event-item-subtitle"])
                                    }, H), " ", p, " "), m && c.createElement("div", g({
                                        className: "".concat(n()["event-item-title"])
                                    }, M, {
                                        dangerouslySetInnerHTML: {
                                            __html: m
                                        }
                                    }))), z && c.createElement("div", {
                                        className: "".concat(n()["event-item-desc"]),
                                        dangerouslySetInnerHTML: {
                                            __html: z
                                        }
                                    }), w && E && c.createElement("div", {
                                        className: n()["cta-block"],
                                        style: {
                                            textAlign: Q
                                        }
                                    }, c.createElement(i.default, {
                                        ctaType: k,
                                        ctaUrl: w,
                                        ctaLabel: E,
                                        ctaStyle: N,
                                        ctaFormID: x,
                                        ctaVideoID: S,
                                        ctaLinkTarget: I,
                                        dataComponentName: a.dataComponentName,
                                        dataMachineName: "multi_column_layout",
                                        index: t,
                                        parentOrder: a.props.componentOrder,
                                        ctaIcon: C
                                    }))));
                                return (m || p || z || w || E || v || h) && c.createElement("li", {
                                    key: t,
                                    className: "".concat(n()["event-item"])
                                }, V)
                            }
                            ))
                            , Le = r.field_card_layout === l.circular_stat && b.length > 0 && b.map((function (e, t) {
                                B = "".concat(n()["cs-container"]),
                                    q = "".concat(n()["cs-ul"]);
                                var i = "percentile" === (e && e.card_circular_type ? e.card_circular_type : "percentile").toLowerCase()
                                    , l = e && e.card_stats_headline ? e.card_stats_headline : ""
                                    , o = e && e.card_stats_headline_color ? e.card_stats_headline_color : "#0077B6"
                                    , d = e && e.card_stats_desc ? e.card_stats_desc : ""
                                    , _ = e && e.card_stats_desc_color ? e.card_stats_desc_color : ""
                                    , m = e && e.card_headline ? e.card_headline : ""
                                    , u = e && e.card_headline_color ? e.card_headline_color : ""
                                    , p = e && e.card_description ? e.card_description : ""
                                    , f = Boolean(Number(null == r ? void 0 : r.field_enable_horizontal_divider))
                                    , g = i && l ? l : 0
                                    , v = i ? n().ps : n().nps;
                                return c.createElement("li", {
                                    className: "".concat(n()["cs-item"], " ").concat(v),
                                    id: i && "multicolumn-percentile-" + t,
                                    key: t,
                                    style: {
                                        borderBottomWidth: f ? "1px" : "0"
                                    }
                                }, c.createElement("div", {
                                    className: n()["left-section"]
                                }, i && c.createElement(c.Fragment, null, c.createElement(s.A, {
                                    value: 100,
                                    variant: "determinate",
                                    thickness: 2,
                                    size: "335px",
                                    sx: {
                                        color: "var(--purple-int-10)"
                                    }
                                }), c.createElement(s.A, {
                                    value: a.state["percentileProgress" + t] ? g : 0,
                                    variant: "determinate",
                                    disableShrink: !0,
                                    size: "335px",
                                    thickness: 2,
                                    sx: {
                                        color: "var(--hero-purple)",
                                        animationDuration: "1s",
                                        transitionDuration: "1s",
                                        position: "absolute",
                                        strokeLinecap: "round"
                                    }
                                }), c.createElement("div", {
                                    className: n()["cs-title-wrapper"]
                                }, l && c.createElement("div", {
                                    id: "stat-card-" + t,
                                    className: n()["cs-per-con"]
                                }, function () {
                                    for (var e = parseInt(l), t = [], a = 0; a <= e / 5; a++)
                                        t.push(c.createElement("p", {
                                            className: n()["cs-stat-number"],
                                            style: {
                                                color: o
                                            }
                                        }, 5 * a, "%"));
                                    return e % 5 > 0 && t.push(c.createElement("p", {
                                        className: n()["cs-stat-number"],
                                        style: {
                                            color: o
                                        }
                                    }, e, "%")),
                                        c.createElement(c.Fragment, null, t)
                                }()), d && c.createElement("div", {
                                    className: n()["cs-stat-desc"],
                                    style: {
                                        color: _
                                    },
                                    dangerouslySetInnerHTML: {
                                        __html: d
                                    }
                                }))), !i && c.createElement(c.Fragment, null, c.createElement("div", {
                                    className: "".concat(n()["circle-grp"])
                                }, c.createElement("div", {
                                    className: "".concat(n()["c-100"])
                                }), c.createElement("div", {
                                    className: "".concat(n()["c-90"])
                                }), c.createElement("div", {
                                    className: "".concat(n()["c-80"])
                                }), c.createElement("div", {
                                    className: "".concat(n()["c-70"])
                                }), c.createElement("div", {
                                    className: n()["cs-title-wrapper"]
                                }, l && c.createElement("p", {
                                    className: n()["cs-stat-number"],
                                    style: {
                                        color: o
                                    }
                                }, l), d && c.createElement("div", {
                                    className: n()["cs-stat-desc"],
                                    style: {
                                        color: _
                                    },
                                    dangerouslySetInnerHTML: {
                                        __html: d
                                    }
                                }))))), c.createElement("div", {
                                    className: "".concat(n()["right-section"])
                                }, m && c.createElement("h4", {
                                    className: n()["cs-main-heading"],
                                    style: {
                                        color: u || void 0
                                    }
                                }, m), p && c.createElement("div", {
                                    className: n()["cs-main-desc"],
                                    style: {
                                        textAlign: Q || ""
                                    },
                                    dangerouslySetInnerHTML: {
                                        __html: p
                                    }
                                })))
                            }
                            ));
                        return l.event_card == r.field_card_layout ? c.createElement(c.Fragment, null, c.createElement("section", {
                            ref: fe,
                            className: "".concat(n()["event-wrapper"], " component-order"),
                            "data-componentname": this.dataComponentName,
                            "data-componentid": this.componentId,
                            "component-order": this.props.componentOrder,
                            style: {
                                backgroundColor: T.backgroundColor
                            }
                        }, M && c.createElement("hr", g({
                            className: "".concat(n()["main-container-divider"])
                        }, E)), c.createElement("div", {
                            className: "".concat(n()["event-col-container"], " multi_column_component"),
                            style: T
                        }, (P || J || G) && c.createElement(o.default, {
                            containerSize: "standard",
                            heading: P,
                            headingType: U,
                            subHeadingType: F,
                            paragraphType: W,
                            headingColor: j,
                            headingSize: R,
                            subHeading: J,
                            subHeadingColor: X,
                            paragraph: G,
                            paragraphColor: Y,
                            dividerVisibility: !(!v || !v.sub_heading || "1" != v.sub_heading.sub_headline_enable_divider),
                            dividerColor: "#0077b6",
                            siteId: oe,
                            setParagraphHtml: !0,
                            dataComponentName: r.field_card_layout
                        }), c.createElement("div", {
                            className: "".concat(n()["category-title"]),
                            dangerouslySetInnerHTML: {
                                __html: $
                            }
                        }), c.createElement("ul", {
                            ref: this.compRef,
                            className: "".concat(n()["event-list"], "  ").concat(ee, " multi_column_list"),
                            style: {
                                justifyContent: r.field_card_alignnment
                            }
                        }, c.createElement(c.Fragment, null, Ie, d && d.data && d.data.field_add_social_media_box && "1" == d.data.field_add_social_media_box && c.createElement("li", {
                            className: n()["social-icons"]
                        }, c.createElement("a", {
                            href: "https://www.facebook.com/athenahealth"
                        }, c.createElement("svg", {
                            width: "10",
                            height: "21",
                            viewBox: "0 0 10 21",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, c.createElement("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M0 6.82036H2.07156V4.74918C2.07156 3.83516 2.09371 2.42615 2.73922 1.5523C3.41849 0.62852 4.3509 0 5.95414 0C8.56785 0 9.66797 0.383191 9.66797 0.383191L9.15008 3.54207C9.15008 3.54207 8.28623 3.2848 7.48144 3.2848C6.6756 3.2848 5.95414 3.58332 5.95414 4.41158V6.82036H9.25767L9.02773 9.90651H5.95414V20.625H2.07156V9.90651H0V6.82036Z",
                            fill: "#0077b6"
                        }))), c.createElement("a", {
                            href: "https://twitter.com/athenahealth"
                        }, c.createElement("svg", {
                            width: "20",
                            height: "21",
                            viewBox: "0 0 22 18",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, c.createElement("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M21.5293 2.08347C20.7708 2.43713 19.9549 2.67531 19.099 2.78357C19.9733 2.23383 20.6447 1.36171 20.9598 0.325993C20.1405 0.83483 19.2365 1.20413 18.2717 1.40261C17.5005 0.540113 16.4005 0 15.1825 0C12.8473 0 10.9533 1.99084 10.9533 4.44361C10.9533 4.79245 10.9888 5.12927 11.061 5.45527C7.54555 5.26761 4.42773 3.50292 2.34003 0.810772C1.9768 1.46997 1.76711 2.23383 1.76711 3.04821C1.76711 4.58675 2.51419 5.94847 3.64971 6.7448C2.95648 6.72195 2.30336 6.52106 1.73273 6.19025V6.24559C1.73273 8.39882 3.19023 10.1936 5.12784 10.6014C4.77263 10.706 4.39909 10.7578 4.0118 10.7578C3.74023 10.7578 3.47326 10.7313 3.21659 10.6796C3.75398 12.4431 5.3169 13.729 7.16857 13.7639C5.72023 14.9548 3.89492 15.6657 1.91378 15.6657C1.57232 15.6657 1.2343 15.6452 0.904297 15.6043C2.77659 16.8638 5.00065 17.6 7.38971 17.6C15.1745 17.6 19.429 10.8299 19.429 4.95846C19.429 4.76479 19.4255 4.57352 19.4175 4.38346C20.2448 3.75674 20.9633 2.97483 21.5293 2.08347Z",
                            fill: "#0077b6"
                        }))), c.createElement("a", {
                            href: "https://www.youtube.com/user/athenahealth"
                        }, c.createElement("svg", {
                            width: "20",
                            height: "21",
                            viewBox: "0 0 21 13",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, c.createElement("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M20.7637 2.74472C20.7637 2.74472 20.7637 0 17.6298 0H3.89542C3.89542 0 0.763672 0 0.763672 2.74472V10.2571C0.763672 10.2571 0.763672 13 3.89542 13H17.6298C17.6298 13 20.7637 13 20.7637 10.2571V2.74472ZM14.7637 6.50107L8.76367 10V3L14.7637 6.50107Z",
                            fill: "#0077b6"
                        }))), c.createElement("a", {
                            href: "https://www.linkedin.com/company/athenahealth/"
                        }, c.createElement("svg", {
                            width: "20",
                            height: "21",
                            viewBox: "0 0 20 18",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, c.createElement("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M20 17.8802H15.5799V11.6506C15.5799 10.0204 14.8885 8.90785 13.3666 8.90785C12.2041 8.90785 11.5573 9.65839 11.2569 10.3824C11.1441 10.6418 11.1624 11.0025 11.1624 11.367V17.8802H6.783C6.783 17.8802 6.83941 6.8448 6.783 5.84239H11.1624V7.73077C11.4209 6.90556 12.8182 5.72595 15.0525 5.72595C17.8234 5.72595 20 7.45865 20 11.1873V17.8802ZM2.35371 4.29609H2.32485C0.914458 4.29609 0 3.34936 0 2.15C0 0.927195 0.943322 0 2.38126 0C3.81921 0 4.70349 0.924591 4.73104 2.14739C4.73104 3.34676 3.81921 4.29609 2.35371 4.29609ZM0.503805 18H4.40304V5.84576H0.503805V18Z",
                            fill: "#0077b6"
                        }))))))), H && c.createElement("hr", g({
                            className: "".concat(n()["main-container-divider"])
                        }, E)))) : l.stat_and_desc !== r.field_card_layout && l.stat_bar !== r.field_card_layout && l.circular_stat !== r.field_card_layout && l.case_study_result_stat !== r.field_card_layout ? c.createElement(c.Fragment, null, c.createElement("section", {
                            ref: fe,
                            className: "".concat(n()["mc-wrapper"], " component-order ").concat(l.priorities_grid === r.field_card_layout && n()["priorities-wrapper"], " ").concat((null == l ? void 0 : l.contact_us_card) === (null == r ? void 0 : r.field_card_layout) && "contact-cards-wrapper", " ").concat(h),
                            "data-componentname": this.dataComponentName,
                            "data-componentid": this.componentId,
                            "component-order": this.props.componentOrder,
                            style: {
                                background: T.backgroundColor || T.background
                            }
                        }, M && c.createElement("hr", g({
                            className: "".concat(n()["main-container-divider"])
                        }, E)), c.createElement("div", {
                            className: "".concat(n()["mc-col-container"], " ").concat(k, " multi_column_component"),
                            style: T
                        }, r && r.component_type && "newsroom" == r.component_type ? P ? c.createElement("div", {
                            className: "".concat(n()["featured-column-title"]),
                            style: {
                                color: j
                            }
                        }, " ", P, " ") : null : (P || J || G || l.addon_module !== r.field_card_layout) && c.createElement(o.default, {
                            containerSize: "standard",
                            heading: P,
                            headingColor: j,
                            headingType: U,
                            subHeadingType: F,
                            paragraphType: W,
                            headingSize: "Awards Card" === r.field_card_layout ? R : null,
                            subHeading: J,
                            subHeadingColor: X,
                            subHeadingSize: "Awards Card" === r.field_card_layout ? K : null,
                            paragraph: G,
                            paragraphColor: Y,
                            dividerVisibility: !(!v || !v.sub_heading || "1" != v.sub_heading.sub_headline_enable_divider),
                            dividerColor: "#0077b6",
                            siteId: oe,
                            setParagraphHtml: !0,
                            dataComponentName: r.field_card_layout
                        }), l.addon_module === r.field_card_layout ? c.createElement("div", {
                            className: n()["addon-mod"]
                        }, c.createElement("div", {
                            className: n()["addon-mod-img-box"]
                        }, "image/gif" != ke.imageType ? c.createElement("picture", {
                            className: n()["addon-mod-img"]
                        }, ke.mc_img && c.createElement("source", {
                            srcSet: "".concat(ke.mc_img),
                            type: "image/webp"
                        }), c.createElement("source", {
                            srcSet: ke.imageURL,
                            type: ke.imageType
                        }), c.createElement("img", {
                            src: ke.imageURL,
                            alt: ke.alt
                        })) : c.createElement("img", {
                            className: n()["addon-mod-img"],
                            src: ke.imageURL
                        })), c.createElement("div", {
                            className: n()["addon-mod-right"]
                        }, c.createElement("h3", {
                            className: n()["addon-mod-heading"],
                            style: {
                                color: ke.headlineColor
                            }
                        }, ke.headline), c.createElement("div", {
                            className: "".concat(n()["addon-mod-desc"], " ").concat(n()[D]),
                            dangerouslySetInnerHTML: {
                                __html: ke.description
                            }
                        }), c.createElement(i.default, {
                            ctaType: ke.cta.cta_type,
                            ctaUrl: ke.cta.url,
                            ctaLabel: ke.cta.label,
                            ctaStyle: ke.cta.cta_style,
                            ctaFormID: ke.cta.cta_form_id,
                            ctaVideoID: ke.cta.cta_video_id,
                            dataComponentName: this.dataComponentName,
                            dataMachineName: "multi_column_layout",
                            index: "1",
                            parentOrder: this.props.componentOrder,
                            ctaIcon: ke.cta.ctaIconLocation
                        }))) : null, c.createElement("ul", {
                            ref: this.compRef,
                            className: "".concat(x, " multi_column_list ").concat(S),
                            style: {
                                justifyContent: r.field_card_alignnment
                            }
                        }, c.createElement(c.Fragment, null, Ne, xe, Se, Ce)), l.icon_stack === r.field_card_layout && c.createElement("div", {
                            className: n()["icb-cta"]
                        }, pe.url && pe.label && c.createElement(i.default, {
                            ctaType: pe.cta_type,
                            ctaUrl: pe.url,
                            ctaLabel: pe.label,
                            ctaStyle: pe.cta_style,
                            ctaFormID: pe.cta_form_id,
                            ctaVideoID: pe.cta_video_id,
                            dataComponentName: this.dataComponentName,
                            dataMachineName: "multi_column_layout",
                            index: "2",
                            parentOrder: this.props.componentOrder,
                            ctaIcon: pe.ctaIconLocation
                        }), _e && c.createElement("span", {
                            className: n()["icb-cta-plus"],
                            onClick: function () {
                                a.setState({
                                    openModal: !0
                                })
                            }
                        }))), H && c.createElement("hr", g({
                            className: "".concat(n()["main-container-divider"])
                        }, E))), l.icon_stack === r.field_card_layout && c.createElement(N, {
                            open: this.state.openModal,
                            closeHandler: function () {
                                a.setState({
                                    openModal: !1
                                })
                            },
                            data: {
                                overlayItems: ue,
                                title: P,
                                titleColor: j,
                                siteIdentifier: oe
                            }
                        })) : c.createElement(c.Fragment, null, c.createElement("section", {
                            ref: fe,
                            className: "".concat(n()["stats-column-wrapper"], " \n              ").concat(l.circular_stat == r.field_card_layout ? n()["cs-wrapper"] : "", "\n              ").concat(l.case_study_result_stat == r.field_card_layout ? n()["csrs-wrapper"] : "", "  component-order"),
                            "data-componentname": this.dataComponentName,
                            "data-componentid": this.componentId,
                            "component-order": this.props.componentOrder,
                            style: {
                                backgroundColor: l.case_study_result_stat != r.field_card_layout ? T.backgroundColor : ""
                            }
                        }, M && c.createElement("hr", g({
                            className: "".concat(n()["main-container-divider"])
                        }, E)), c.createElement("div", {
                            className: "".concat(B, " ").concat(A),
                            style: f({
                                paddingTop: T.paddingTop,
                                paddingBottom: T.paddingBottom
                            }, l.case_study_result_stat === r.field_card_layout && {
                                "--result-stat-subhead-bg": null !== (e = null == u ? void 0 : u.field_backgroundfaq_color) && void 0 !== e ? e : "var(--honey)",
                                "--result-stat-bg": null !== (t = T.backgroundColor) && void 0 !== t ? t : "var(--purple-int-100)"
                            })
                        }, (P || J || G) && c.createElement(o.default, {
                            containerSize: "standard",
                            heading: P,
                            headingType: U,
                            subHeadingType: F,
                            paragraphType: W,
                            headingColor: j,
                            subHeading: J,
                            subHeadingColor: X,
                            paragraph: G,
                            paragraphColor: Y,
                            dividerVisibility: !(!v || !v.sub_heading || "1" != v.sub_heading.sub_headline_enable_divider),
                            dividerColor: "#0077b6",
                            siteId: oe,
                            setParagraphHtml: !0,
                            dataComponentName: r.field_card_layout
                        }), c.createElement("ul", {
                            className: "".concat(n()["stat-ul"] || "", " ").concat(q),
                            style: r.field_card_layout === l.stat_bar ? {
                                justifyContent: r.field_card_alignnment
                            } : null
                        }, ze, l.circular_stat == r.field_card_layout ? Le : null)), H && c.createElement("hr", g({
                            className: "".concat(n()["main-container-divider"])
                        }, E))))
                    }
                }],
                l && v(a.prototype, l),
                Object.defineProperty(a, "prototype", {
                    writable: !1
                }),
                a;
            var a, l
        }(c.Component)
    }
    ,
    9047: e => {
        e.exports = {
            "inherit-parent-typo": "UZtij",
            "contact-card": "BTLfw",
            "contact-card-content": "KjxEX",
            "contact-card-head": "k_neJ",
            "contact-card-desc": "X_uRT",
            "contact-card-cta": "hVTo5"
        }
    }
    ,
    23615: e => {
        e.exports = {
            "inherit-parent-typo": "vLwnP",
            "vertical-divider": "pNwxM",
            "horizontal-divider": "Y3Gu6",
            "subheadline-divider": "vWoDs",
            clickable: "pWLKs",
            "priorities-wrapper": "cBs77",
            "mc-wrapper": "zDnCx",
            "card-link": "TIqrK",
            "inline-link": "JCcDw",
            "hoverable-item": "abfVI",
            "mc-col-container": "U7OFt",
            "featured-column-title": "OCUq0",
            "mc-list": "POnQz",
            "highlighted-item-default": "BNs5m",
            "mc-item": "Cxk5D",
            "mc-item-content": "hJvut",
            "mc-image": "zdZX8",
            "mc-item-info": "_bYSi",
            "mc-item-title": "TJtPM",
            "mc-item-subtitle": "iqYU4",
            "mc-item-desc": "Hz9Xf",
            "mcid-list": "ZmvOZ",
            "mcid-item": "Ab9Og",
            "mcid-content": "JYHgD",
            "mcid-icon": "gv_9m",
            "iwd-img-sm": "gZggB",
            "iwd-img-md": "JApkK",
            "iwd-img-lg": "PVnVW",
            "mcid-info": "sCGX4",
            "mcid-title": "YfVHT",
            "mcid-subtitle": "Zi_tP",
            "mcid-desc": "NOZN4",
            "more-resources-section": "Ie_K5",
            item_wo_desc_mob: "p5jK4",
            services_grid_item: "bYj5O",
            "sgrid-icon": "Fh2EG",
            "award-item": "pedJr",
            item_w_desc_mob: "zEv1O",
            "icon-stack-item": "soZqd",
            "ibm-list": "bIwkV",
            "ibm-item": "B4Snd",
            "ibm-item-details": "U198L",
            "ibm-item-url": "gr71K",
            "mct-list": "zElS6",
            "mct-item": "J0xxk",
            "mct-content": "yDaKD",
            "mct-info": "jIb6L",
            "mct-title": "VV3EF",
            "mct-subtitle": "dRYUn",
            "mct-desc": "XDFY4",
            "loc-card-list": "nzIpI",
            "loc-item": "dcoQY",
            "icb-wrapper-expand-modal": "m7eeq",
            "icon-bar-management": "uZ5od",
            "is-overlay-items-wrapper": "ghoB5",
            "is-overlay-items-container": "lwWUC",
            "is-col-3": "ZQs29",
            "is-col-4": "i4xsb",
            "is-col-5": "Dyp1S",
            "icb-item": "lm5Tl",
            "icb-icon": "BNmTr",
            "icb-title": "ZVvLW",
            "icb-desc": "r9h9c",
            "icb-cta-plus": "pTNeT",
            "awards-list": "Wk32R",
            "awards-item": "vJt3D",
            "awards-large-item": "Hu6ZM",
            "awards-icon-item": "RWgg8",
            "awards-icon": "McSoL",
            "awards-large": "DzaUr",
            "addon-wrapper": "tNhXm",
            "addon-mod": "u0wEw",
            "addon-mod-img-box": "XtOgV",
            "addon-mod-img": "Rk3Xr",
            "addon-mod-right": "LKUKc",
            "addon-mod-heading": "WEXLT",
            "addon-mod-desc": "pY1W3",
            "addon-item": "dykZF",
            "cs-container": "nwsmD",
            "cs-ul": "mNj2h",
            "cs-item": "VBazy",
            "cs-main-heading": "GZYPQ",
            "cs-main-desc": "INyzx",
            "right-section": "KXpan",
            "cs-title-wrapper": "osn8c",
            "cs-stat-number": "STCr3",
            "cs-stat-desc": "xQJDq",
            nps: "wVlkd",
            "left-section": "osPZi",
            "circle-grp": "JyxtT",
            ps: "hot6r",
            "cs-per-con": "MTVyV",
            "animate-percentile": "itxEM",
            scrollUp: "EZm08",
            scrollUpLastEle: "V5Bie",
            circle: "UhZZK",
            "c-100": "DlW2U",
            "c-90": "cGZJG",
            "c-80": "I_00e",
            "c-70": "aUNfs",
            "scaleIn-1": "o0zDC",
            "scaleIn-2": "Oj5vb",
            "scaleIn-3": "flgTX",
            "scaleIn-4": "zx2wT",
            "csrs-wrapper": "hPitq",
            "case-study-stat-container": "NFHqY",
            "stat-ul": "tVTlH",
            "minimal-divider": "MJxAo",
            "stats-column-2-wrapper": "xmFXt",
            "stat-item-value": "OmHvf",
            "stat-item-desc": "VAd1v",
            "highlighted-feature-newsroom": "LcUtg",
            "highlighted-item-newsroom": "TQDw_",
            item_wo_desc_mob_list: "WlS8k",
            "icon-stack-list": "_GYyj",
            services_grid_container: "StX3z",
            services_grid_list: "EcIZ2",
            "cs-wrapper": "Wve0d",
            "enable-dividers": "T0t6q",
            "stats-column-container": "RFpf5",
            "stat-title-wrapper": "BLUGE",
            "stats-column-1-wrapper": "NQ_nn",
            "enable-card-dividers": "cpzXH",
            "enable-card-dividers-one-stat": "_SWa2",
            "stats-column-3-wrapper": "OblXI",
            cta_container: "JdiMA",
            "stats-column-4-wrapper": "vY2xd",
            XL: "WuZEc",
            Lg: "u16WG",
            Md: "MqeV5",
            Sm: "bgkcE",
            XS: "Byo6H",
            "stat-item-heading": "lGxO2",
            "stat-item-sub-heading": "JJGlO",
            "stats-subtitle": "AIHmP",
            "stats-title": "bxBY9",
            "stats-desc": "hcFae",
            "enable-top-dividers": "ZgThd",
            "sub-headline-divider": "ZYf4R",
            "stats-item-link": "hpw_L",
            "video-section": "v9hxV",
            "stat-bar-container": "GvMp1",
            "stat-bar-1-wrapper": "kJXmV",
            "stat-bar-2-wrapper": "mwZvr",
            "stat-bar-3-wrapper": "b69p_",
            "stat-bar-4-wrapper": "q1udW",
            "stat-bar": "cDz7j",
            "stats-column-wrapper": "MvHiy",
            "horizontal-align-Left": "deM2w",
            "horizontal-align-Right": "KBeOk",
            "horizontal-align-Center": "SXSpp",
            "main-container-divider": "_l7RP",
            "author-section": "CBhRe",
            "featured-column-item-media": "FKypA",
            "video-media": "TKe9e",
            "video-icon": "dfGnk",
            "top-sub-headline": "aP0hv",
            "mc-item-nosubtitle": "KRxx3",
            "bottom-sub-headline": "wZOuD",
            "mc-item-heading": "qXzVi",
            "event-col-container": "Z7fyv",
            "event-wrapper": "Zo_z_",
            "event-list": "z76pt",
            "event-item-title": "yAj_V",
            "event-item-subtitle": "VMRrL",
            "event-item-desc": "tY7gJ",
            "event-image": "qeDCz",
            "event-video": "p2Iyf",
            "event-item": "yyamv",
            "event-item-content": "wX_bM",
            "cta-block": "g8JnL",
            "social-icons": "BQgPm",
            "event-item-border": "iPXdr",
            "category-title": "G5bzK",
            clickable_card_cta: "rYJqq",
            "light-tone": "K1IvC",
            "dark-tone": "Y16a3"
        }
    }
}]);
