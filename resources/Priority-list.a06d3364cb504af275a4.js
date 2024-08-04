(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[3596, 4160], {
    81983: (e, t, i) => {
        "use strict";
        i.r(t),
            i.d(t, {
                default: () => v
            });
        var o = i(96540)
            , n = i(66662)
            , r = i.n(n)
            , a = (i(29921),
                i(61038))
            , l = (i(84315),
                i(7452),
                i(67739))
            , c = i(9987)
            , d = i(43299);
        function s(e) {
            return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                s(e)
        }
        function _() {
            return _ = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var o in i)
                        ({}).hasOwnProperty.call(i, o) && (e[o] = i[o])
                }
                return e
            }
                ,
                _.apply(null, arguments)
        }
        function p(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, u(o.key), o)
            }
        }
        function u(e) {
            var t = function (e, t) {
                if ("object" != s(e) || !e)
                    return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, "string");
                    if ("object" != s(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == s(t) ? t : t + ""
        }
        function m(e, t, i) {
            return t = h(t),
                function (e, t) {
                    if (t && ("object" == s(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, f() ? Reflect.construct(t, i || [], h(e).constructor) : t.apply(e, i))
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
        function h(e) {
            return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                h(e)
        }
        function b(e, t) {
            return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                b(e, t)
        }
        const v = function (e) {
            function t(e) {
                var i;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (i = m(this, t, [e])).state = {
                        dataComponentName: "Priorities List Module",
                        foundScript: !1
                    },
                    i.watchVideo = i.watchVideo.bind(i),
                    i.myTabRef = o.createRef(),
                    i
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
                i = t,
                (n = [{
                    key: "watchVideo",
                    value: function (e, t) {
                        var i = this.myTabRef.current.closest(".component-order");
                        (0,
                            a._b)(e, t, i, !0, {
                                eventName: "CTA Link Clicked",
                                name: t,
                                compId: "priorities_list_points",
                                compName: "Priorities List Module"
                            })
                    }
                }, {
                    key: "onVideoLoad",
                    value: function () {
                        var e = this.myTabRef.current.closest(".component-order");
                        e ? e.querySelector("iframe") : window.document.querySelector("#pl-video iframe")
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        var e = this;
                        if ((0,
                            a.pK)("priorities_list_points", this.state.dataComponentName),
                            !this.state.foundScript) {
                            var t = (0,
                                a.z2)();
                            t.onload = function () {
                                e.setState({
                                    foundScript: !0
                                })
                            }
                                ,
                                document.body.appendChild(t)
                        }
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e, t, i, n, s, p = this, u = this.props.itemContent, m = this.props.content.siteIdentifier, f = u || "", h = u && u.global_data ? u.global_data : "", b = h && h[0] && h[0].global_settings ? h[0].global_settings : "", v = h && h[1] && h[1].global_heading ? h[1].global_heading : "", g = u && u.list_settings ? u.list_settings : "", y = f && f.bullet_list ? f.bullet_list : "", k = g && g.list_image_details && g.list_image_details.rel_url ? g.list_image_details.rel_url : "", w = g && g.list_bullet_color ? g.list_bullet_color : "", E = w ? {
                            style: {
                                background: w
                            }
                        } : "", O = b && b.backround_color ? b.backround_color : "", N = (0,
                            a.Nw)(O || "#ffffff"), j = g && g.list_point_color ? g.list_point_color : "", S = j ? {
                                style: {
                                    color: j
                                }
                            } : "", C = g && g.list_type ? g.list_type : "", T = g && g.field_cta_brightcove_video && g.field_cta_brightcove_video.video_id && g.field_cta_brightcove_video.video_id[0] ? g.field_cta_brightcove_video.video_id[0].value : "", P = g && g.list_media_type ? g.list_media_type : "", L = f && f.number_list && f.number_list.field_pl_points && f.number_list.field_pl_points.length > 0 ? f.number_list.field_pl_points : [], x = g && g.list_sub_title ? g.list_sub_title : "", I = g && g.list_description ? g.list_description : "", D = g && g.field_cta_link_component && g.field_cta_link_component.field_carousel_cta_type ? g.field_cta_link_component.field_carousel_cta_type : "", M = g && g.field_cta_link_component && g.field_cta_link_component.field_cta_link && g.field_cta_link_component.field_cta_link.link ? g.field_cta_link_component.field_cta_link.link : "", B = g && g.field_cta_link_component && g.field_cta_link_component.field_cta_link && g.field_cta_link_component.field_cta_link.label ? g.field_cta_link_component.field_cta_link.label : "", R = g && g.field_cta_link_component && g.field_cta_link_component.field_cta_brightcove_video && g.field_cta_link_component.field_cta_brightcove_video.video_id[0] && g.field_cta_link_component.field_cta_brightcove_video.video_id[0].value ? g.field_cta_link_component.field_cta_brightcove_video.video_id[0].value : "", A = g && g.field_cta_link_component && g.field_cta_link_component.field_carousel_gated_form && g.field_cta_link_component.field_carousel_gated_form.value ? g.field_cta_link_component.field_carousel_gated_form.value : "", V = g && g.field_cta_link_component && g.field_cta_link_component.field_cta_style ? g.field_cta_link_component.field_cta_style.field_cta_size[0].value : "", U = null !== (e = null == g || null === (t = g.field_cta_link_component) || void 0 === t || null === (i = t.field_cta_style) || void 0 === i || null === (n = i.field_cta_icon_location) || void 0 === n || null === (s = n[0]) || void 0 === s ? void 0 : s.value) && void 0 !== e ? e : "", z = v && v.heading ? v.heading.headline : "", H = v && v.heading && v.heading.headline_text_color ? v.heading.headline_text_color : "", K = v && v.sub_heading && v.sub_heading.sub_headline ? v.sub_heading.sub_headline : "", q = v && v.sub_heading && v.sub_heading.sub_headline_text_color ? v.sub_heading.sub_headline_text_color : "", F = v && v.sub_heading && v.sub_heading.sub_headline_enable_divider && 1 == v.sub_heading.sub_headline_enable_divider ? Number(v.sub_heading.sub_headline_enable_divider) : "", Q = v && v.paragraph && v.paragraph.paragraph_text ? v.paragraph.paragraph_text : "", G = v && v.paragraph && v.paragraph.paragraph_color ? v.paragraph.paragraph_color : "", J = (0,
                                a.y_)(h), Z = J.titleType, W = J.subheadType, Y = J.paraType, X = b && b.container && b.container.padding_bottom ? b.container.padding_bottom : "", $ = b && b.container && b.container.padding_top ? b.container.padding_top : "", ee = !(!b || !b.divider || "1" != b.divider.enable_top_divider), te = !(!b || !b.divider || "1" != b.divider.enable_bottom_divider), ie = b && b.divider && b.divider.divider_color ? b.divider.divider_color : "#d8d8d8", oe = C && "bullet_list" == C ? r()["bullet-list-module-wrapper"] : "", ne = {};
                        X && (ne.paddingBottom = X),
                            $ && (ne.paddingTop = $),
                            O && (ne.backgroundColor = O);
                        var re = X || $ || O ? {
                            style: ne
                        } : ""
                            , ae = "bullet_list" == C && g.field_cta_link_component && g.field_cta_link_component.length > 0 && g.field_cta_link_component.map((function (e, t) {
                                var i, n, a, c, d = e.field_carousel_cta_type ? e.field_carousel_cta_type : "", s = e.field_cta_link && e.field_cta_link.link ? e.field_cta_link.link : "", _ = e.field_cta_link && e.field_cta_link.label ? e.field_cta_link.label : "", u = e.field_cta_brightcove_video && e.field_cta_brightcove_video.video_id[0] && e.field_cta_brightcove_video.video_id[0].value ? e.field_cta_brightcove_video.video_id[0].value : "", m = e.field_carousel_gated_form && e.field_carousel_gated_form.value ? e.field_carousel_gated_form.value : "", f = e.field_cta_style ? e.field_cta_style.field_cta_size[0].value : "", h = null !== (i = null == e || null === (n = e.field_cta_style) || void 0 === n || null === (a = n.field_cta_icon_location) || void 0 === a || null === (c = a[0]) || void 0 === c ? void 0 : c.value) && void 0 !== i ? i : "";
                                return o.createElement("div", {
                                    className: "".concat(r()["cta-block"])
                                }, o.createElement(l.default, {
                                    ctaType: d,
                                    ctaUrl: s,
                                    ctaLabel: _,
                                    ctaFormID: m,
                                    ctaVideoID: u,
                                    ctaStyle: f,
                                    dataComponentName: p.state.dataComponentName,
                                    dataMachineName: "priorities_list_points",
                                    index: t,
                                    ctaIcon: h
                                }))
                            }
                            ));
                        return o.createElement("section", {
                            className: "".concat(r()["priorities-list-module-outer"], " component-order"),
                            "data-componentname": this.state.dataComponentName,
                            "component-order": this.props.componentOrder
                        }, ee && o.createElement("hr", {
                            className: "".concat(r()["main-container-divider"]),
                            style: {
                                borderTop: "1px solid ".concat(ie)
                            }
                        }), o.createElement("div", _({
                            className: "".concat(r()["priorities-list-module-wrapper"], " ").concat(oe)
                        }, re), o.createElement("div", {
                            className: "".concat(r()["priorities-list-module-container"], " ", "container", " ").concat(r()[N])
                        }, z || Q || K ? o.createElement(c.default, {
                            containerSize: "standard",
                            heading: z,
                            headingType: Z,
                            subHeadingType: W,
                            paragraphType: Y,
                            headingColor: H,
                            paragraph: Q,
                            paragraphColor: G,
                            paragraphFontSize: null,
                            subHeading: K,
                            subHeadingColor: q,
                            dividerVisibility: F,
                            dividerColor: "#4E2D82",
                            siteId: m,
                            setParagraphHtml: !0
                        }) : null, "bullet_list" == C ? o.createElement("div", null, o.createElement(d.default, {
                            content: (0,
                                a.Ui)(y),
                            item: this.props.itemContent.list_settings
                        }), o.createElement("div", {
                            style: {
                                textAlign: "center"
                            }
                        }, ae)) : o.createElement("div", {
                            className: "".concat(r().row, " ", "row")
                        }, o.createElement("ul", {
                            className: "".concat(r()["col-md-6"], " ").concat(r()["list-group"], " ", "col-md-6 list-group")
                        }, L.map((function (e, t) {
                            return o.createElement("li", {
                                className: r()["priority-point"],
                                key: t
                            }, o.createElement("span", _({}, E, {
                                className: r()["priority-point-bullet"]
                            }), t + 1), o.createElement("div", _({}, S, {
                                className: "".concat(r()["priority-point-desc"], " p2 ").concat(r()[N]),
                                key: t,
                                dangerouslySetInnerHTML: {
                                    __html: e.value ? e.value : ""
                                }
                            })))
                        }
                        ))), o.createElement("div", {
                            className: "".concat(r()["col-md-6"], " ").concat(r()["list-group"], "  ").concat(r()["media-list"], " ", "col-md-6", " ", "list-group")
                        }, P && "Image" === P ? o.createElement("img", {
                            src: k,
                            alt: "Image holder"
                        }) : null, P && "Video" === P ? o.createElement("div", {
                            className: "".concat(r()["pl-video"], " ", "pl-video"),
                            id: "pl-video",
                            "data-video-ids": T,
                            "data-experience": "5b0f79545eecca0010826d71"
                        }) : null, o.createElement("h4", {
                            className: r()["priorities-list-media-title"]
                        }, x), o.createElement("div", {
                            className: "".concat(r()["priorities-list-media-desc"], " p1"),
                            dangerouslySetInnerHTML: {
                                __html: I
                            }
                        }), o.createElement(l.default, {
                            ctaType: D,
                            ctaUrl: M,
                            ctaLabel: B,
                            ctaFormID: A,
                            ctaVideoID: R,
                            ctaStyle: V,
                            dataComponentName: this.state.dataComponentName,
                            dataMachineName: "priorities_list_points",
                            ctaIcon: U
                        }))))), te && o.createElement("hr", {
                            className: "".concat(r()["main-container-divider"]),
                            style: {
                                borderTop: "1px solid ".concat(ie)
                            }
                        }))
                    }
                }]) && p(i.prototype, n),
                Object.defineProperty(i, "prototype", {
                    writable: !1
                }),
                i;
            var i, n
        }(o.Component)
    }
    ,
    43299: (e, t, i) => {
        "use strict";
        i.r(t),
            i.d(t, {
                default: () => m
            });
        var o = i(96540)
            , n = i(51673)
            , r = i.n(n)
            , a = i(61038);
        function l(e) {
            return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                l(e)
        }
        function c(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, d(o.key), o)
            }
        }
        function d(e) {
            var t = function (e, t) {
                if ("object" != l(e) || !e)
                    return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, "string");
                    if ("object" != l(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == l(t) ? t : t + ""
        }
        function s(e, t, i) {
            return t = p(t),
                function (e, t) {
                    if (t && ("object" == l(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, _() ? Reflect.construct(t, i || [], p(e).constructor) : t.apply(e, i))
        }
        function _() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (_ = function () {
                return !!e
            }
            )()
        }
        function p(e) {
            return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                p(e)
        }
        function u(e, t) {
            return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                u(e, t)
        }
        var m = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (e = s(this, t)).state = {
                        dataComponentName: "Highlights"
                    },
                    e
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
                    t && u(e, t)
            }(t, e),
                i = t,
                (n = [{
                    key: "componentDidMount",
                    value: function () {
                        (0,
                            a.pK)("field_highlights", this.state.dataComponentName)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props.content
                            , t = e && e[0]
                            , i = this.props.item && this.props.item.divider_color ? this.props.item.divider_color : "#6d6e6f"
                            , n = t && t.map((function (e, t) {
                                var n = t + 1;
                                return o.createElement("div", {
                                    className: "".concat(r()["article-highlights"]),
                                    key: n,
                                    style: {
                                        borderBottomColor: i
                                    }
                                }, o.createElement("div", {
                                    className: "".concat(r()["article-highlights-title"], " p2"),
                                    dangerouslySetInnerHTML: {
                                        __html: e.highlights_title ? e.highlights_title : ""
                                    }
                                }), o.createElement("div", {
                                    className: "".concat(r()["article-highlights-description"])
                                }, o.createElement("span", {
                                    className: "".concat(r()["article-highlights-list"], " ").concat("article-highlights-list--" + r()["article-highlights-list"]),
                                    dangerouslySetInnerHTML: {
                                        __html: e.highlights_content ? e.highlights_content : ""
                                    }
                                })))
                            }
                            ));
                        return n = e && e[0] && e[0][0].highlights_content ? n : null,
                            o.createElement("section", {
                                className: "".concat(r()["article-highlights-wrapper"], " ").concat(r()["article-wrapper"]),
                                "data-componentname": this.state.dataComponentName,
                                "component-order": this.props.componentOrder
                            }, n)
                    }
                }]) && c(i.prototype, n),
                Object.defineProperty(i, "prototype", {
                    writable: !1
                }),
                i;
            var i, n
        }(o.Component)
    }
    ,
    66662: e => {
        e.exports = {
            "inherit-parent-typo": "rrl9C",
            "priorities-list-module-wrapper": "CxeMo",
            "bullet-list-module-wrapper": "xuG2T",
            "priorities-list-module-container": "YMENe",
            row: "tugrU",
            "priorities-list-media-title": "mrDpM",
            "col-md-7": "mBfaB",
            "list-group": "qS2oL",
            "pl-video": "sgmOM",
            "priorities-list-title": "QuVqN",
            "priority-point-bullet": "m17Nd",
            "media-list": "oSl3j",
            "priorities-list-media-desc": "OBnzk",
            "priority-point": "iEmrE",
            "priority-point-desc": "pjRry",
            "col-md-6": "P0dw0",
            "right-sect": "U6BjW",
            page_same: "MKGl6",
            alertGreen: "_vjlv",
            "main-container-divider": "bv8WV",
            "cta-block": "iDwSN",
            "dark-tone": "v8B4y",
            "light-tone": "CQqj2"
        }
    }
    ,
    51673: e => {
        e.exports = {
            "inherit-parent-typo": "VRZCj",
            "article-wrap-v2": "J3Ihd",
            "article-wrap": "BaIVz",
            "article-body": "RIYpg",
            g_cta_read_more: "RJxrr",
            "article-wrapper": "b6dkt",
            "stat-wrapper": "MZUBL",
            moreresources: "cckUA",
            "stat-item-desc": "Dj3pK",
            "stat-list": "M_Dy2",
            "stat-item": "xKJqj",
            "stat-item-icon": "gQcep",
            "stat-title": "_kfwR",
            "items-1": "XBLSv",
            "items-2": "lz4iy",
            "items-3": "OkYP9",
            "items-5": "wAnk3",
            "items-6": "eK7Gv",
            "items-4": "Bh9_y",
            "article-highlights-wrapper": "T7muh",
            "article-highlights": "gKKdB",
            "article-highlights-title": "L_MZf",
            "article-highlights-list": "oF51t",
            "article-highlights-description": "zpExI",
            "article-highlights-description-list": "M_7ST",
            "article-content-wrap": "IjC4T",
            "newsroom-article-wrap": "flaOU",
            "newsroom-article-body": "nN56d",
            "newsroom-header-section": "teq2b",
            "newsroom-header-divider": "LAbbL",
            "newsroom-header-img": "QNFui",
            articleunwrapped: "n8On0",
            "cta-button": "C75XI",
            readmore: "wwb6c",
            readmoreclicked: "a0QVl",
            "download-wrapper": "i0E6L",
            "wwa-stat": "O5r_A",
            "article-body-inner": "lPZNR",
            "read-more-btn-v2": "_Joaz",
            show: "aeT8u",
            "disclaimer-content": "A4i9u",
            "read-less": "L6FR7",
            disabled: "vzxWF",
            "dark-tone": "LOv_U",
            "light-tone": "cmfQU"
        }
    }
}]);
