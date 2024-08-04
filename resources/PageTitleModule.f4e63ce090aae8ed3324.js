(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[3592], {
    70715: (e, t, a) => {
        "use strict";
        a.r(t),
            a.d(t, {
                default: () => b
            });
        var i = a(96540)
            , o = a(31624)
            , n = a.n(o)
            , l = a(61038)
            , d = (a(84315),
                a(7452),
                a(38125))
            , r = a(67739);
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
        function _() {
            return _ = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var i in a)
                        ({}).hasOwnProperty.call(a, i) && (e[i] = a[i])
                }
                return e
            }
                ,
                _.apply(null, arguments)
        }
        function p(e, t) {
            for (var a = 0; a < t.length; a++) {
                var i = t[a];
                i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, s(i.key), i)
            }
        }
        function s(e) {
            var t = function (e, t) {
                if ("object" != c(e) || !e)
                    return e;
                var a = e[Symbol.toPrimitive];
                if (void 0 !== a) {
                    var i = a.call(e, "string");
                    if ("object" != c(i))
                        return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == c(t) ? t : t + ""
        }
        function u(e, t, a) {
            return t = m(t),
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
                }(e, f() ? Reflect.construct(t, a || [], m(e).constructor) : t.apply(e, a))
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
        function m(e) {
            return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                m(e)
        }
        function g(e, t) {
            return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                g(e, t)
        }
        const b = function (e) {
            function t(e) {
                var a;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (a = u(this, t, [e])).state = {
                        openGatedVideo: !1,
                        isGatable: null,
                        dataComponentName: "Page Title Block",
                        targetCTA: null
                    },
                    a.myTabRef = i.createRef(),
                    a.callDownload = a.callDownload.bind(a),
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
                    t && g(e, t)
            }(t, e),
                a = t,
                o = [{
                    key: "pageTitleCTA",
                    value: function (e) {
                        (0,
                            l.$)("CTA Link Clicked", e, "page_title_block", "Page Title Block")
                    }
                }, {
                    key: "readMoreCTA",
                    value: function () {
                        (0,
                            l.$)("CTA Link Clicked", "Body|CTA|Download-Whitepaper", "page_title_block", "Page Title Block")
                    }
                }, {
                    key: "isDownloadGatable",
                    value: function () {
                        var e = (0,
                            l.H_)(this.props.content.pagedata, "white_paper_gated_download");
                        return (0,
                            l.j1)(e, this.props.camp_id)
                    }
                }, {
                    key: "callDownload",
                    value: function (e) {
                        this.readMoreCTA(),
                            this.setState({
                                targetCTA: e && e.target,
                                openGatedVideo: !0
                            })
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        (0,
                            l.pK)("page_title_block", this.state.dataComponentName)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e, t, a, o, c, p, s = this, u = this.props.itemContent, f = u && u ? u : "";
                        if (f && f.field_content_type && f.field_content_type[0] && f.field_content_type[0].value) {
                            bgclr = f && f.field_title_color && f && f.field_pagetitle_color[0].color;
                            var m = f && f.field_subtitle_color && f && f.field_subtitle_color[0].color
                                , g = f && f && f.field_subtitle && f.field_subtitle[0] && f.field_subtitle[0].value ? f.field_subtitle[0].value : null;
                            sub = i.createElement("div", {
                                className: n()["pagesubtitle-block"]
                            }, i.createElement("span", {
                                className: n()["title-divider"]
                            }), i.createElement("h4", {
                                className: n().pagesubtitle,
                                style: {
                                    color: m
                                }
                            }, g))
                        }
                        var b = "".concat(n().pagetitle, "  ").concat("pagetitle--" + n().pagetitle)
                            , v = "".concat(n().pagesubtitle, " ").concat("pagesubtitle--" + n().pagetitle)
                            , h = this.props.content && this.props.content.siteIdentifier ? this.props.content.siteIdentifier : null
                            , y = "ahcom" === h || "khub" === h
                            , k = u && u.data && u.data.video && u.data.video.video_id ? u.data.video.video_id[0].value : ""
                            , w = !(!u || !u.data || 1 != u.data.show_paragraph_above_media)
                            , O = u && u.data && u.data.image && u.data.image.rel_url ? u.data.image.rel_url : ""
                            , E = u && u.data && u.data.image && u.data.image.options ? u.data.image.options.alt : ""
                            , T = u && u.data && u.data.global_data ? u.data.global_data : ""
                            , N = T && T[0] && T[0].global_settings ? T[0].global_settings : ""
                            , C = T && T[1] && T[1].global_heading ? T[1].global_heading : ""
                            , D = C && C.heading ? C.heading.headline : ""
                            , j = C && C.heading && C.heading.headline_text_color ? C.heading.headline_text_color : ""
                            , A = C && C.heading && C.heading.heading_config ? C.heading.heading_config : ""
                            , P = j ? {
                                style: {
                                    color: j
                                }
                            } : ""
                            , S = C && C.sub_heading && C.sub_heading.sub_headline ? C.sub_heading.sub_headline : ""
                            , L = C && C.sub_heading && C.sub_heading.sub_headline_text_color ? C.sub_heading.sub_headline_text_color : ""
                            , x = L ? {
                                style: {
                                    color: L
                                }
                            } : ""
                            , B = C && C.sub_heading && C.sub_heading.sub_headline_enable_divider && 1 == C.sub_heading.sub_headline_enable_divider ? Number(C.sub_heading.sub_headline_enable_divider) : ""
                            , G = C && C.paragraph && C.paragraph.paragraph_text ? C.paragraph.paragraph_text : ""
                            , M = C && C.paragraph && C.paragraph.paragraph_color ? C.paragraph.paragraph_color : ""
                            , V = M ? {
                                style: {
                                    color: M
                                }
                            } : ""
                            , I = u && u.data && u.data.title_divider_color ? u.data.title_divider_color : ""
                            , H = I ? {
                                style: {
                                    borderColor: I,
                                    backgroundColor: I
                                }
                            } : ""
                            , R = N && N.backround_color ? N.backround_color : ""
                            , U = N && N.container && N.container.padding_bottom ? N.container.padding_bottom : ""
                            , W = N && N.container && N.container.padding_top ? N.container.padding_top : ""
                            , K = {};
                        R && (K.backgroundColor = R),
                            U && (K.paddingBottom = U),
                            W && (K.paddingTop = W);
                        var z, Q, Y = R || U || W ? {
                            style: K
                        } : "", q = (0,
                            l.Nw)(R || "#ffffff"), F = u && u.data && u.data.field_cta_link_component.field_carousel_cta_type ? u.data.field_cta_link_component.field_carousel_cta_type : "", J = u && u.data && u.data.field_cta_link_component.field_cta_link && u.data.field_cta_link_component.field_cta_link.link ? u.data.field_cta_link_component.field_cta_link.link : "", Z = u && u.data && u.data.field_cta_link_component.field_cta_link && u.data.field_cta_link_component.field_cta_link.label ? u.data.field_cta_link_component.field_cta_link.label : "", $ = u && u.data && u.data.field_cta_link_component.field_cta_brightcove_video && u.data.field_cta_link_component.field_cta_brightcove_video.video_id[0] && u.data.field_cta_link_component.field_cta_brightcove_video.video_id[0].value ? u.data.field_cta_link_component.field_cta_brightcove_video.video_id[0].value : "", X = u && u.data && u.data.field_cta_link_component.field_carousel_gated_form && u.data.field_cta_link_component.field_carousel_gated_form.value ? u.data.field_cta_link_component.field_carousel_gated_form.value : "", ee = u && u.data && u.data.field_cta_link_component.field_cta_style ? u.data.field_cta_link_component.field_cta_style.field_cta_size[0].value : "", te = null !== (e = null == u || null === (t = u.data) || void 0 === t || null === (a = t.field_cta_link_component) || void 0 === a || null === (o = a.field_cta_style) || void 0 === o || null === (c = o.field_cta_icon_location) || void 0 === c || null === (p = c[0]) || void 0 === p ? void 0 : p.value) && void 0 !== e ? e : "", ae = !(!N || !N.divider || "1" != N.divider.enable_top_divider), ie = !(!N || !N.divider || "1" != N.divider.enable_bottom_divider), oe = N && N.divider && N.divider.divider_color ? N.divider.divider_color : "#d8d8d8", ne = oe ? {
                                style: {
                                    borderTop: "1px solid ".concat(oe)
                                }
                            } : "", le = !(!this.props || "Whitepaper" != this.props.content.pageTypeJson), de = (0,
                                l.Ui)(this.props.content.pagedata), re = (0,
                                    l.ts)(de, "white_paper_gated_download"), ce = null, _e = re && re.data && re.data.field_upload_white_papers[0] && re.data.field_upload_white_papers[0].target_id ? re.data.field_upload_white_papers[0].target_id : null, pe = re && re.data && re.data.field_gated_forms[0] && re.data.field_gated_forms[0].target_id ? re.data.field_gated_forms[0].target_id : null;
                        this.state.openGatedVideo && pe && this.isDownloadGatable() && (ce = i.createElement(d.default, {
                            isDownload: !0,
                            downloadLink: _e,
                            isGated: pe,
                            content: this.props.content,
                            openGatedVideo: this.state.openGatedVideo,
                            targetCTA: this.state.targetCTA
                        })),
                            _e && (z = (Q = _e.split("/"))[Q.length - 1]);
                        var se = f && f.field_design && f.field_design[0] ? f.field_design[0].value : ""
                            , ue = (0,
                                l.y_)(T)
                            , fe = ue.titleType
                            , me = ue.subheadType
                            , ge = ue.paraType;
                        return i.createElement("div", null, ae && i.createElement("hr", _({
                            className: "".concat(n()["main-container-divider"])
                        }, ne)), i.createElement("section", _({
                            className: "".concat(n()["pagetitle-wrapper"], " component-order ").concat(n()[q]),
                            "data-componentname": this.state.dataComponentName,
                            "component-order": this.props.componentOrder
                        }, Y), this.state.openGatedVideo && ce, i.createElement("div", {
                            className: "".concat(n()["container-wrapper"], " ").concat(se)
                        }, y ? i.createElement("h2", _({
                            className: "".concat(b, " ").concat(A, " ").concat(fe, "-sspro")
                        }, P), D) : i.createElement("h5", _({
                            className: "".concat(b, " ").concat(A)
                        }, P), D), B && i.createElement("div", _({}, H, {
                            className: n()["title-bottom-divider"]
                        })), S ? y ? i.createElement("div", _({
                            className: "para-sm ".concat(v, " ").concat(me, "-sspro")
                        }, x, {
                            dangerouslySetInnerHTML: {
                                __html: S
                            }
                        })) : i.createElement("h4", _({
                            className: v
                        }, x, {
                            dangerouslySetInnerHTML: {
                                __html: S
                            }
                        })) : "", k && !w && i.createElement("div", {
                            className: "".concat(n()["image-video-above-desc"], " ").concat(n()["video-section"]),
                            "data-video-ids": k,
                            "data-experience": "5b0f79545eecca0010826d71"
                        }), O && !w && i.createElement("img", {
                            className: n()["image-video-above-desc"],
                            src: O,
                            alt: E
                        }), G && i.createElement("div", _({
                            className: "".concat(n().page_desc, " ").concat(ge, "-sspro")
                        }, V, {
                            dangerouslySetInnerHTML: {
                                __html: G
                            }
                        })), k && w && i.createElement("div", {
                            className: "".concat(n()["image-video-above-desc"], " ").concat(n()["video-section"]),
                            "data-video-ids": k,
                            "data-experience": "5b0f79545eecca0010826d71"
                        }), O && w && i.createElement("img", {
                            className: n()["image-video-below-desc"],
                            src: O,
                            alt: E
                        })), Z && i.createElement("div", {
                            className: n()["cta-block"]
                        }, i.createElement(r.default, {
                            ctaType: "" === F ? "Link" : F,
                            ctaUrl: J,
                            ctaLabel: Z,
                            ctaFormID: X,
                            ctaVideoID: $,
                            ctaStyle: ee,
                            dataComponentName: this.state.dataComponentName,
                            dataMachineName: "page_title_block",
                            index: 1,
                            parentOrder: this.props.componentOrder,
                            ctaIcon: te
                        })), le && z ? i.createElement("div", {
                            className: n()["download-wrapper"]
                        }, this.isDownloadGatable() && _e ? z ? i.createElement("a", {
                            id: "g_cta_pag_0_".concat(this.props.componentOrder),
                            className: "prim desk",
                            onClick: function (e) {
                                return s.callDownload(e)
                            }
                        }, "Download Whitepaper") : "" : z ? i.createElement("a", {
                            href: _e,
                            target: "_blank",
                            type: "application/pdf",
                            id: "g_cta_pag_0_".concat(this.props.componentOrder),
                            className: "prim desk",
                            onClick: function () {
                                return s.readMoreCTA()
                            }
                        }, "Download Whitepaper") : "") : ""), ie && i.createElement("hr", _({
                            className: "".concat(n()["main-container-divider"])
                        }, ne)))
                    }
                }],
                o && p(a.prototype, o),
                Object.defineProperty(a, "prototype", {
                    writable: !1
                }),
                a;
            var a, o
        }(i.Component)
    }
    ,
    31624: e => {
        e.exports = {
            "inherit-parent-typo": "FZ67B",
            "pagetitle-wrapper": "fi0lW",
            pagetitle: "DkS5M",
            "pagesubtitle-block": "akQ40",
            "title-divider": "fejoq",
            pagesubtitle: "aLw74",
            "download-wrapper": "OqZA5",
            pagetitlelinkcta: "bP4Ga",
            large: "CsMvn",
            largectaOn: "vm303",
            largectaOff: "o74bz",
            pagetitiledivider: "Qih19",
            pagemaindivider: "Tj7Qa",
            TitledividerOn: "m2laP",
            TitledividerOff: "kg4Um",
            "container-wrapper": "bPJQ9",
            pagetitlecta: "FMKKD",
            smallctaOn: "gqSWM",
            smallctaOff: "NlRvj",
            "main-container-divider": "Bstla",
            maindividerOn: "YEAj9",
            page_desc: "YVfgH",
            "title-bottom-divider": "BrJdY",
            "video-section": "_7iE_z",
            "image-video-above-desc": "XR0kp",
            "image-video-below-desc": "tUjY3",
            "cta-block": "V6tL_",
            "dark-tone": "y2OnV",
            "light-tone": "UTkrz"
        }
    }
}]);
