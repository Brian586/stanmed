(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[2685], {
    7184: (e, t, n) => {
        "use strict";
        n.r(t),
            n.d(t, {
                default: () => f
            });
        var r = n(96540)
            , a = n(74506)
            , o = n.n(a)
            , l = n(61038)
            , i = (n(84315),
                n(7452),
                n(67739));
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
        function d() {
            return d = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
                ,
                d.apply(null, arguments)
        }
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, s(r.key), r)
            }
        }
        function s(e) {
            var t = function (e, t) {
                if ("object" != c(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, "string");
                    if ("object" != c(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == c(t) ? t : t + ""
        }
        function _(e, t, n) {
            return t = p(t),
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
                }(e, m() ? Reflect.construct(t, n || [], p(e).constructor) : t.apply(e, n))
        }
        function m() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (m = function () {
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
        function b(e, t) {
            return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                b(e, t)
        }
        const f = function (e) {
            function t(e) {
                var n;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (n = _(this, t, [e])).state = {
                        windowSize: 769,
                        dataComponentName: "Hero Banner",
                        scriptVideoUrl: "https://players.brightcove.net/1815389247001/experience_5b0f79545eecca0010826d71/live.js",
                        foundScript: !1
                    },
                    n
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
                n = t,
                (a = [{
                    key: "componentDidMount",
                    value: function () {
                        this.setState({
                            windowSize: window.innerWidth
                        }),
                            (0,
                                l.pK)("hero_banner", this.state.dataComponentName),
                            this.setState({
                                foundScript: (0,
                                    l.jX)(this.state.scriptVideoUrl)
                            })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e, t, n, a, c, u, s, _ = this.props.itemContent, m = _ && _ ? _ : "", p = m && m.field_hero_banner_type && m.field_hero_banner_type[0] ? m.field_hero_banner_type[0].value + "-wrapper" : "hero-banner-wrapper", b = m && m.field_summary && m.field_summary[0] ? m.field_summary[0].value : "", f = m && m.field_subtitle && m.field_subtitle[0] ? m.field_subtitle[0].value : "", y = m && m.field_background_media && 0 != m.field_background_media.length ? "".concat(m.field_background_media.rel_url) : "", g = m && m.field_background_media_mobile && 0 != m.field_background_media_mobile.length ? "".concat(m.field_background_media_mobile.rel_url) : "";
                        this.state.windowSize < 769 ? ((s = m && m.field_mobile_video && 0 != m.field_mobile_video.length ? r.createElement("div", null, r.createElement("video", {
                            className: o().mv,
                            width: "1280px",
                            height: "100%",
                            loop: !0,
                            autoPlay: !0,
                            muted: !0
                        }, " ", r.createElement("source", {
                            src: m.field_mobile_video
                        }), " Your browser does not support the video tag. Kindly update your browser. "), " ") : "") || (a = m && m.field_background_media_mobile && 0 != m.field_background_media_mobile.length ? r.createElement("img", {
                            src: g,
                            alt: m.field_background_media_mobile.options.alt,
                            className: o()["mobile-img"]
                        }) : null),
                            "slim-banner-wrapper" !== p && "khub-banner-wrapper" !== p || (a = m && m.field_background_media && 0 != m.field_background_media.length && !s ? r.createElement("img", {
                                src: y,
                                alt: m.field_background_media.options.alt
                            }) : null)) : (u = m && m.field_desktop_video && 0 != m.field_desktop_video.length ? r.createElement("div", null, r.createElement("video", {
                                className: o().dv,
                                width: "1280px",
                                height: "100%",
                                loop: !0,
                                autoPlay: !0,
                                muted: !0
                            }, " ", r.createElement("source", {
                                src: m.field_desktop_video
                            }), " Your browser does not support the video tag. Kindly update your browser. ")) : "") || (c = m && m.field_background_media && 0 != m.field_background_media.length ? r.createElement("img", {
                                src: y,
                                alt: m.field_background_media.options.alt
                            }) : null);
                        var h = m.field_cta_style
                            , v = h && h.field_cta_size[0].value
                            , w = null !== (e = null == h || null === (t = h.field_cta_icon_location) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.value) && void 0 !== e ? e : ""
                            , k = m && m.field_cta_link && m.field_cta_link[0] ? m && m.field_cta_link[0].title : ""
                            , E = v ? "".concat(v) : ""
                            , N = "container".concat(" ", o().container)
                            , S = m && m.field_hb_mtype && m.field_hb_mtype[0] ? m.field_hb_mtype[0].value : "Link"
                            , O = m && m.field_gated_form && m.field_gated_form[0] ? m.field_gated_form[0].target_id : null
                            , j = m && m.field_hb_bvideo && m.field_hb_bvideo.video_id ? m.field_hb_bvideo.video_id[0].value : null;
                        j = j && "Form" === S ? null : j,
                            S = (0,
                                l.Jv)(this.props, "hero_banner") ? S : "Video",
                            O = O && "Video" === S ? null : O;
                        var L = m && m.field_background_color && m.field_background_color[0] ? m && m.field_background_color[0].color : ""
                            , T = m && m.field_text_color && m.field_text_color[0] ? m && m.field_text_color[0].color : "#ffffff"
                            , I = m && m.field_layout && m.field_layout[0] ? "".concat(o()[m.field_layout[0].value.replace(" ", "-")]) : "".concat(o()["align-left"])
                            , x = m && m.field_layout && m.field_title[0] ? m && m.field_title[0].value : "";
                        this.props.content.queryStr && (x = (0,
                            l.cK)(this.props.content.queryStr, m.field_title_campaign_bnr_mgmnt) || x);
                        var P = m && m.body && m.body[0] ? m.body[0].value : ""
                            , A = m && m.field_cta_link[0].uri ? m.field_cta_link[0].uri.replace("internal:", "") : ""
                            , C = k && r.createElement(i.default, {
                                ctaType: S,
                                ctaUrl: A,
                                ctaLabel: k,
                                ctaFormID: O,
                                ctaVideoID: j,
                                ctaStyle: E,
                                dataComponentName: this.state.dataComponentName,
                                dataMachineName: "hero_banner",
                                index: 0,
                                parentOrder: this.props.componentOrder,
                                ctaIcon: w
                            })
                            , D = this.props.content && this.props.content.siteIdentifier ? this.props.content.siteIdentifier : null
                            , U = "ahcom" === D || "khub" === D
                            , H = (0,
                                l.ZB)(L)
                            , K = "";
                        y || (K = H < 100 ? o()["dark-tone"] : o()["light-tone"]);
                        var M = L ? {
                            style: {
                                backgroundColor: L
                            }
                        } : "";
                        return r.createElement("section", {
                            className: "".concat(o()["banner-wrapper"], " ").concat("banner-wrapper--" + o()["banner-wrapper"], " ").concat(o()[p], " component-order"),
                            "data-componentname": this.state.dataComponentName,
                            "component-order": this.props.componentOrder
                        }, r.createElement("div", d({
                            className: o()["banner-content"]
                        }, M), "catalogue-slim-banner-wrapper" === p ? r.createElement("div", {
                            className: N
                        }, r.createElement("div", {
                            className: "".concat(o()["col-6"], " ").concat(o()["banner-content"])
                        }, x ? r.createElement("h1", {
                            style: {
                                color: T
                            },
                            className: "banner-title".concat(" ", o()["banner-title"])
                        }, x) : "", b ? r.createElement("div", {
                            className: "".concat(o()["banner-category"]),
                            dangerouslySetInnerHTML: {
                                __html: b
                            }
                        }) : ""), y ? r.createElement("div", {
                            className: "".concat(o()["col-6"], " ").concat(o()["banner-image"]),
                            style: {
                                backgroundImage: "url(".concat(y, ")")
                            }
                        }) : "") : r.createElement(r.Fragment, null, r.createElement("div", {
                            className: N
                        }, r.createElement("div", {
                            className: "".concat(K, "  ").concat(I)
                        }, f ? r.createElement("div", {
                            className: "".concat(o()["banner-pretxt"]),
                            dangerouslySetInnerHTML: {
                                __html: f
                            }
                        }) : "", "khub-banner-wrapper" == p || "careers-banner-wrapper" == p ? r.createElement("div", null, x ? r.createElement("div", {
                            style: {
                                color: T
                            },
                            className: "banner-title".concat(" ", o()["banner-title"]),
                            dangerouslySetInnerHTML: {
                                __html: x
                            }
                        }) : "", b ? r.createElement("div", {
                            className: "".concat(o()["banner-category"], " p5"),
                            dangerouslySetInnerHTML: {
                                __html: b
                            }
                        }) : "") : r.createElement("div", null, x ? r.createElement("div", {
                            style: {
                                color: T
                            },
                            className: "banner-title".concat(" ", o()["banner-title"]),
                            dangerouslySetInnerHTML: {
                                __html: x
                            }
                        }) : "", b ? r.createElement("div", {
                            className: "".concat(U ? "subhead-2" : "p2", " ").concat(o()["banner-category"]),
                            dangerouslySetInnerHTML: {
                                __html: b
                            }
                        }) : ""), "slim-banner-wrapper" === p && r.createElement(r.Fragment, null, P && r.createElement("div", {
                            className: o()["banner-desc"],
                            dangerouslySetInnerHTML: {
                                __html: P
                            }
                        })), C)), c, a, u, s)))
                    }
                }]) && u(n.prototype, a),
                Object.defineProperty(n, "prototype", {
                    writable: !1
                }),
                n;
            var n, a
        }(r.Component)
    }
    ,
    74506: e => {
        e.exports = {
            "inherit-parent-typo": "zplzp",
            "banner-wrapper": "GiATz",
            "campaign-banner": "D_s4P",
            container: "_dWKI",
            "banner-cta-link": "haUQf",
            "slim-banner-wrapper": "nnwSX",
            "banner-category": "VUYcN",
            "banner-title": "l7eTj",
            "banner-pretxt": "hxlX8",
            "banner-content": "fRdMU",
            "hero-banner-wrapper": "Tuc_j",
            "khub-banner-wrapper": "tY34Y",
            "careers-banner-wrapper": "VN1bx",
            "align-center": "KvOKz",
            "Center-Aligned": "by8CJ",
            "align-left": "ZUAwS",
            "Left-Aligned": "IdjDU",
            "align-right": "IBcC3",
            "Right-Aligned": "wTXW3",
            "Centre-Aligned": "nLHRD",
            large: "u3Lg7",
            "align-centre": "qQ0T1",
            "banner-desc": "QP153",
            "catalogue-slim-banner-wrapper": "FW91W",
            "col-6": "FOsyw",
            "banner-image": "EWhRL",
            small: "qJPFe",
            mobile: "Wypan",
            desktop: "K5dS6",
            "desktop-img-present": "QzI1A",
            "mobile-img-present": "kLU1p",
            "slim-react-banner": "AAslo",
            "khub-react-banner": "UFRmN",
            "mobile-img": "Q_lah",
            dv: "N9Jxx",
            mv: "qBVny",
            dvc: "EQxYW",
            "dark-tone": "mWa4T",
            "light-tone": "oWmOE"
        }
    }
}]);
