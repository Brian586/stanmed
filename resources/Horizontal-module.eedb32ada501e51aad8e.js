(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[940], {
    26031: (e, t, o) => {
        "use strict";
        o.r(t),
            o.d(t, {
                default: () => m
            });
        var a = o(96540)
            , n = o(1163)
            , r = o.n(n)
            , i = o(61038)
            , l = (o(29921),
                o(38125),
                o(84315),
                o(7452),
                o(67739))
            , d = o(9987);
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
        function p() {
            return p = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var a in o)
                        ({}).hasOwnProperty.call(o, a) && (e[a] = o[a])
                }
                return e
            }
                ,
                p.apply(null, arguments)
        }
        function s(e, t) {
            for (var o = 0; o < t.length; o++) {
                var a = t[o];
                a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, u(a.key), a)
            }
        }
        function u(e) {
            var t = function (e, t) {
                if ("object" != c(e) || !e)
                    return e;
                var o = e[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var a = o.call(e, "string");
                    if ("object" != c(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == c(t) ? t : t + ""
        }
        function _(e, t, o) {
            return t = f(t),
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
                }(e, h() ? Reflect.construct(t, o || [], f(e).constructor) : t.apply(e, o))
        }
        function h() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (h = function () {
                return !!e
            }
            )()
        }
        function f(e) {
            return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                f(e)
        }
        function b(e, t) {
            return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                b(e, t)
        }
        const m = function (e) {
            function t(e) {
                var o;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (o = _(this, t, [e])).horizontalCTA = o.horizontalCTA.bind(o),
                    o.state = {
                        openGatedVideo: !1,
                        dataComponentName: "Horizontal Module",
                        scriptVideoUrl: "https://players.brightcove.net/1815389247001/experience_5b0f79545eecca0010826d71/live.js",
                        foundScript: !1
                    },
                    o.myTabRef = a.createRef(),
                    o
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
                o = t,
                (n = [{
                    key: "componentDidMount",
                    value: function () {
                        if ("/careers" === window.location.pathname) {
                            var e = document.createElement("script");
                            e.text = "window.socTrack = { siteid: 'stanmed.co.ke', formid: 'careers', isApiModeEnabled: true }; (function(i, s, o, g) { var a = s.createElement(o); a.src = g; var m = s.getElementsByTagName('head')[0]; m.appendChild(a); })(window, document, 'script', 'https://cdn-public.sociabble.com/blob/js/leadgen/track.min.js?v=1')",
                                e.async = !0,
                                document.body.appendChild(e)
                        }
                        (0,
                            i.pK)("horizontal_module", this.state.dataComponentName),
                            this.setState({
                                foundScript: (0,
                                    i.jX)(this.state.scriptVideoUrl)
                            })
                    }
                }, {
                    key: "horizontalCTA",
                    value: function (e, t, o, a) {
                        if ("Link" !== a)
                            if (null == t && o) {
                                var n = this.myTabRef.current.closest(".component-order");
                                (0,
                                    i._b)("#hrz-video iframe", e, n)
                            } else
                                t && this.setState({
                                    openGatedVideo: !0
                                });
                        (0,
                            i.$)("CTA Link Clicked", e, "horizontal_module", "Horizontal Module"),
                            window && window.socTrackSend({})
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e, t, o, n, c = this.props.itemContent, s = c && c ? c : "", u = s && s.field_block_type && s.field_block_type[0] ? s.field_block_type[0].value + "-wrapper" : "regular-wrapper", _ = s && s.field_container_background_color && s.field_container_background_color[0] ? s.field_container_background_color[0].color : "", h = c && c.global_data ? c.global_data : "", f = h && h[0] && h[0].global_settings ? h[0].global_settings : "", b = h && h[1] && h[1].global_heading ? h[1].global_heading : "", m = f && f.backround_color ? f.backround_color : "", g = m ? {
                            style: {
                                backgroundColor: m
                            }
                        } : "", v = s && s.field_ctastyle && s.field_ctastyle.field_cta_size && s.field_ctastyle.field_cta_size.length > 0 ? s.field_ctastyle.field_cta_size[0].value : "", y = null !== (e = null == s || null === (t = s.field_ctastyle) || void 0 === t || null === (o = t.field_cta_icon_location) || void 0 === o || null === (n = o[0]) || void 0 === n ? void 0 : n.value) && void 0 !== e ? e : "", F = s && s.field_ctalink && s.field_ctalink.length > 0 ? s.field_ctalink[0].uri : "", w = s && s.field_ctalink && s.field_ctalink.length > 0 ? s.field_ctalink[0].title : "", C = s && s.field_hb_mtype && s.field_hb_mtype.length > 0 ? s.field_hb_mtype[0].value : "", z = s && s.field_gated_form && s.field_gated_form.length > 0 ? s.field_gated_form[0].target_id : "", O = s && s.field_hb_bvideo && s.field_hb_bvideo.video_id && s.field_hb_bvideo.video_id.length > 0 ? s.field_hb_bvideo.video_id[0].value : "", k = b && b.heading ? b.heading.headline : "", E = (b && b.heading && b.heading.headline_text_color && b.heading.headline_text_color,
                            b && b.sub_heading && b.sub_heading.sub_headline ? b.sub_heading.sub_headline : ""), T = (b && b.sub_heading && b.sub_heading.sub_headline_text_color && b.sub_heading.sub_headline_text_color,
                                b && b.sub_heading && b.sub_heading.sub_headline_enable_divider && 1 == b.sub_heading.sub_headline_enable_divider ? Number(b.sub_heading.sub_headline_enable_divider) : ""), S = b && b.paragraph && b.paragraph.paragraph_text ? b.paragraph.paragraph_text : "", j = (b && b.paragraph && b.paragraph.paragraph_color && b.paragraph.paragraph_color,
                                    f && f.container && f.container.padding_bottom ? f.container.padding_bottom : ""), N = f && f.divider && "1" == f.divider.enable_top_divider && f.divider.divider_color ? "1px solid ".concat(f.divider.divider_color) : "", x = {};
                        j && (x.paddingBottom = j),
                            N && (x.borderTop = N);
                        var H = j || N ? {
                            style: x
                        } : ""
                            , P = f && f.container && f.container.padding_top ? f.container.padding_top : ""
                            , D = f.divider && "1" == f.divider.enable_bottom_divider && f.divider.divider_color ? "1px solid ".concat(f.divider.divider_color) : ""
                            , A = {};
                        P && (A.paddingTop = P),
                            D && (A.borderBottom = D);
                        var I = P || D ? {
                            style: A
                        } : ""
                            , L = f && f.container && f.container.container_width ? f.container.container_width : "1080px"
                            , V = {};
                        L && (V.maxWidth = L),
                            _ && (V.backgroundColor = _);
                        var R = L || _ ? {
                            style: V
                        } : ""
                            , B = (0,
                                i.y_)(h)
                            , U = B.titleType
                            , M = B.subheadType
                            , G = B.paraType
                            , K = (0,
                                i.Nw)(_ || "#160F41");
                        return a.createElement("div", null, a.createElement("div", p({
                            className: "".concat(r()["container-divider"])
                        }, H)), a.createElement("section", p({
                            className: "".concat(r()["horizontal-module-wrapper"], " ").concat(r().wrapper, " ").concat(r()[u], " component-order")
                        }, g, {
                            "data-componentname": this.state.dataComponentName,
                            "component-order": this.props.componentOrder
                        }), u && "Slim-wrapper" == u ? a.createElement("div", p({
                            className: "".concat(r()["horizontal-module-container"], " ").concat(r().container, " ").concat(r()[u], " ").concat(r()[K])
                        }, R), a.createElement("div", {
                            className: r()["horizontal-module-slim-container"]
                        }, a.createElement(d.default, {
                            containerSize: "standard",
                            heading: k,
                            headingType: U,
                            subHeadingType: M,
                            paragraphType: G,
                            headingColor: "#FFFFFF",
                            paragraph: S,
                            paragraphColor: "#FFFFFF",
                            paragraphFontSize: null,
                            subHeading: E,
                            subHeadingColor: "#FFFFFF",
                            dividerVisibility: T,
                            dividerColor: "#FFFFFF",
                            siteId: this.props.content.siteIdentifier,
                            setParagraphHtml: !0
                        }), a.createElement("div", {
                            className: r()["horizontal-module-cta"]
                        }, a.createElement(l.default, {
                            ctaType: C,
                            ctaUrl: F,
                            ctaLabel: w,
                            ctaStyle: v,
                            ctaFormID: z,
                            ctaVideoID: O,
                            dataComponentName: this.state.dataComponentName,
                            dataMachineName: "horizontal_module",
                            parentOrder: this.props.componentOrder,
                            ctaIcon: y
                        })))) : a.createElement("div", p({
                            className: "".concat(r()["horizontal-module-container"], " ").concat(r().container, " ").concat(r()[K], " ")
                        }, R), a.createElement(d.default, {
                            containerSize: "standard",
                            heading: k,
                            headingType: U,
                            subHeadingType: M,
                            paragraphType: G,
                            headingColor: "#FFFFFF",
                            paragraph: S,
                            paragraphColor: "#FFFFFF",
                            paragraphFontSize: null,
                            subHeading: E,
                            subHeadingColor: "#FFFFFF",
                            dividerVisibility: T,
                            dividerColor: "#FFFFFF",
                            siteId: this.props.content.siteIdentifier,
                            setParagraphHtml: !0
                        }), a.createElement(l.default, {
                            ctaType: C,
                            ctaUrl: F,
                            ctaLabel: w,
                            ctaStyle: v,
                            ctaFormID: z,
                            ctaVideoID: O,
                            dataComponentName: this.state.dataComponentName,
                            dataMachineName: "horizontal_module",
                            parentOrder: this.props.componentOrder,
                            ctaIcon: y
                        }))), a.createElement("div", p({
                            className: "".concat(r()["container-divider"])
                        }, I)))
                    }
                }]) && s(o.prototype, n),
                Object.defineProperty(o, "prototype", {
                    writable: !1
                }),
                o;
            var o, n
        }(a.Component)
    }
    ,
    1163: e => {
        e.exports = {
            "inherit-parent-typo": "zVVUJ",
            "horizontal-module-wrapper": "Oepcj",
            "Slim-wrapper": "wnlHR",
            container: "feAXY",
            "horizontal-module-container": "_7i7j7",
            "horizontal-module-slim-container": "EwX7R",
            "horizontal-module-title": "BC2FI",
            "horizontal-module-desc": "JEP64",
            "horizontal-module-cta": "bgCOa",
            "container-divider": "znuCl",
            "dark-tone": "H4DRZ",
            "light-tone": "jfGtp"
        }
    }
}]);
