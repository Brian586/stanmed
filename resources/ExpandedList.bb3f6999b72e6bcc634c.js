(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[2704], {
    81523: (e, t, n) => {
        "use strict";
        n.r(t),
            n.d(t, {
                default: () => y
            });
        var a = n(96540)
            , i = n(67739)
            , o = n(98781)
            , r = n.n(o)
            , l = n(9987)
            , c = n(61038);
        function d(e) {
            return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                d(e)
        }
        function _() {
            return _ = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
                ,
                _.apply(null, arguments)
        }
        function p(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, s(a.key), a)
            }
        }
        function s(e) {
            var t = function (e, t) {
                if ("object" != d(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var a = n.call(e, "string");
                    if ("object" != d(a))
                        return a;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == d(t) ? t : t + ""
        }
        function u(e, t, n) {
            return t = m(t),
                function (e, t) {
                    if (t && ("object" == d(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, f() ? Reflect.construct(t, n || [], m(e).constructor) : t.apply(e, n))
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
        function b(e, t) {
            return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                b(e, t)
        }
        var v = ""
            , h = ""
            , g = "";
        const y = function (e) {
            function t(e) {
                var n;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (n = u(this, t, [e])).state = {
                        dataComponentName: "ExpandedList module"
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
                (o = [{
                    key: "componentDidMount",
                    value: function () {
                        (0,
                            c.pK)("expand_list_ion_lander_module", this.state.dataComponentName)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props.itemContent
                            , t = this.props.content.siteIdentifier;
                        v = this.props.itemContent && this.props.itemContent.data && this.props.itemContent.data.global_data.length > 0 ? this.props.itemContent.data.global_data : "",
                            h = v && v[0] && v[0].global_settings ? v[0].global_settings : "",
                            g = v && v[1] && v[1].global_heading ? v[1].global_heading : "";
                        var n = h && h.container && h.container.padding_bottom ? h.container.padding_bottom : ""
                            , o = h && h.divider && "1" == h.divider.enable_top_divider && h.divider.divider_color ? "1px solid ".concat(h.divider.divider_color) : ""
                            , d = h && h.container && h.container.padding_top ? h.container.padding_top : ""
                            , p = h.divider && "1" == h.divider.enable_bottom_divider && h.divider.divider_color ? "1px solid ".concat(h.divider.divider_color) : ""
                            , s = h && h.backround_color ? h.backround_color : ""
                            , u = h && h.container && h.container.container_width ? h.container.container_width : "1080px"
                            , f = {};
                        d && (f.paddingTop = d),
                            o && (f.borderTop = o),
                            f = {
                                style: f
                            };
                        var m = {};
                        n && (m.paddingBottom = n),
                            p && (m.borderBottom = p),
                            m = {
                                style: m
                            };
                        var b = u ? {
                            style: {
                                maxWidth: u
                            }
                        } : ""
                            , y = s ? {
                                style: {
                                    backgroundColor: s
                                }
                            } : ""
                            , k = (0,
                                c.Nw)(s || "#ffffff");
                        return a.createElement("section", {
                            "data-componentname": this.state.dataComponentName,
                            "data-componentid": "expand_list_ion_lander_module"
                        }, a.createElement("div", _({
                            className: "".concat(r()["container-divider"])
                        }, f)), a.createElement("div", _({
                            className: "".concat(r()["container-wrapper"], " ").concat(r()[k], " ")
                        }, y), a.createElement("div", _({
                            className: r()["text-container"]
                        }, b), a.createElement("div", {
                            className: "".concat(r()["div-style"], " ").concat(r()["first-colum-padding"])
                        }, function (e, t, n) {
                            var o = g && g.heading ? g.heading.headline : ""
                                , d = g && g.heading && g.heading.headline_text_color ? g.heading.headline_text_color : ""
                                , _ = g && g.sub_heading && g.sub_heading.sub_headline ? g.sub_heading.sub_headline : ""
                                , p = g && g.sub_heading && g.sub_heading.sub_headline_text_color ? g.sub_heading.sub_headline_text_color : ""
                                , s = g && g.sub_heading && g.sub_heading.sub_headline_enable_divider && 1 == g.sub_heading.sub_headline_enable_divider ? Number(g.sub_heading.sub_headline_enable_divider) : ""
                                , u = g && g.paragraph && g.paragraph.paragraph_text ? g.paragraph.paragraph_text : ""
                                , f = g && g.paragraph && g.paragraph.paragraph_color ? g.paragraph.paragraph_color : ""
                                , m = e && e.data && e.data.list ? e.data.list : ""
                                , b = (0,
                                    c.y_)(v)
                                , h = b.titleType
                                , y = b.subheadType
                                , k = b.paraType;
                            return a.createElement(a.Fragment, null, a.createElement(l.default, {
                                containerSize: "standard",
                                heading: o,
                                headingColor: d,
                                headingType: h,
                                subHeadingType: y,
                                paragraphType: k,
                                paragraph: u,
                                paragraphColor: f,
                                paragraphFontSize: null,
                                subHeading: _,
                                subHeadingColor: p,
                                dividerVisibility: s,
                                dividerColor: "#4E2D82",
                                siteId: n,
                                setParagraphHtml: !0
                            }), m && m.map((function (e, n) {
                                var o = e ? e.title : ""
                                    , l = e ? e.body : ""
                                    , c = e ? e.subtitle : ""
                                    , d = e || ""
                                    , _ = e && e.image ? e.image : "";
                                return a.createElement("section", {
                                    className: r()["container-div"],
                                    key: n
                                }, _ ? a.createElement("div", {
                                    className: r()["image-container"]
                                }, a.createElement("img", {
                                    src: _.rel_url,
                                    alt: _.options.alt
                                })) : null, a.createElement("div", null, "above" === e.position_of_sub_title && c && a.createElement("div", {
                                    className: r()["text-container-span"],
                                    dangerouslySetInnerHTML: {
                                        __html: c
                                    }
                                }), a.createElement("div", {
                                    className: r()["text-container-title"],
                                    dangerouslySetInnerHTML: {
                                        __html: o
                                    }
                                }), "below" === e.position_of_sub_title && c && a.createElement("div", {
                                    className: r()["text-container-span"],
                                    dangerouslySetInnerHTML: {
                                        __html: c
                                    }
                                }), a.createElement("div", {
                                    className: r()["text-container-p"],
                                    dangerouslySetInnerHTML: {
                                        __html: l
                                    }
                                }), function (e, t, n) {
                                    var o, r, l, c, d, _ = e.field_cta_link_component && e.field_cta_link_component.field_cta_link ? e.field_cta_link_component.field_cta_link.label : "", p = e.field_cta_link_component.field_cta_style ? e.field_cta_link_component.field_cta_style.field_cta_size[0].value : "", s = null !== (o = null == e || null === (r = e.field_cta_link_component) || void 0 === r || null === (l = r.field_cta_style) || void 0 === l || null === (c = l.field_cta_icon_location) || void 0 === c || null === (d = c[0]) || void 0 === d ? void 0 : d.value) && void 0 !== o ? o : "", u = e.field_cta_link_component.field_cta_link ? e.field_cta_link_component.field_cta_link.link : "#", f = e.field_cta_link_component ? "" !== e.field_cta_link_component.field_carousel_cta_type ? e.field_cta_link_component.field_carousel_cta_type : "Link" : "", m = e.field_cta_link_component && e.field_cta_link_component.field_cta_brightcove_video ? e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value : "", b = e.field_cta_link_component && e.field_cta_link_component.field_carousel_gated_form ? e.field_cta_link_component.field_carousel_gated_form.value : "";
                                    return _ && a.createElement(i.default, {
                                        ctaType: f,
                                        ctaUrl: u,
                                        ctaLabel: _,
                                        ctaStyle: p,
                                        ctaFormID: b,
                                        ctaVideoID: m,
                                        dataComponentName: t,
                                        dataMachineName: "expand_list_ion_lander_module",
                                        index: n,
                                        ctaIcon: s
                                    })
                                }(d, t, n)))
                            }
                            )))
                        }(e, this.state.dataComponentName, t)))), a.createElement("div", _({
                            className: "".concat(r()["container-divider"])
                        }, m)))
                    }
                }]) && p(n.prototype, o),
                Object.defineProperty(n, "prototype", {
                    writable: !1
                }),
                n;
            var n, o
        }(a.Component)
    }
    ,
    98781: e => {
        e.exports = {
            "inherit-parent-typo": "YA593",
            "container-wrapper": "LS9KZ",
            "link-color": "LharN",
            "button-margin": "vqXHA",
            "main-header": "nTi8I",
            "text-container-title": "iB13v",
            "main-title": "BX_eV",
            "text-container": "It_WS",
            "text-container-span": "USDoP",
            "text-container-p": "Ltuc9",
            "cta-margin": "O3Ob3",
            "div-style": "K8bnd",
            "second-colum-padding": "Gk_0b",
            "container-div": "o46LQ",
            "image-container": "cAsNt",
            "text-block": "jpIKW",
            "first-colum-padding": "rH2Yv",
            "container-border": "Wox3x",
            "main-paragraph": "a556C",
            "sub-headline-divider": "eaaIR",
            "container-divider": "wLqCu",
            "dark-tone": "FR22N",
            "light-tone": "gfYZw"
        }
    }
}]);
