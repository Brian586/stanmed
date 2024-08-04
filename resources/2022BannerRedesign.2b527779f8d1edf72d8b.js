(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[6950], {
    1721: (e, t, n) => {
        "use strict";
        n.r(t),
            n.d(t, {
                default: () => O
            });
        var o = n(96540)
            , a = (n(71948),
                n(58807))
            , r = n.n(a)
            , i = n(67739)
            , c = n(61038)
            , l = n(29184);
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
        function d() {
            return d = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
                ,
                d.apply(null, arguments)
        }
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    n.push.apply(n, o)
            }
            return n
        }
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function (t) {
                    h(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function _(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, y(o.key), o)
            }
        }
        function p(e, t, n) {
            return t = m(t),
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
        function v(e, t) {
            return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                v(e, t)
        }
        function h(e, t, n) {
            return (t = y(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function y(e) {
            var t = function (e, t) {
                if ("object" != s(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != s(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == s(t) ? t : t + ""
        }
        var g = ["text-shadow", "text-shadow-xl"]
            , w = "extra-large";
        const O = function (e) {
            function t(e) {
                var n;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    h(n = p(this, t, [e]), "isTabletMediaQuery", void 0),
                    n.onIsTabletOrBelow = n.onIsTabletOrBelow.bind(n),
                    n.state = {
                        dataComponentName: "Banner Management",
                        isTabletOrBelow: !1,
                        componentId: "banner_management_updated"
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
                    t && v(e, t)
            }(t, e),
                n = t,
                (a = [{
                    key: "componentDidMount",
                    value: function () {
                        (0,
                            c.pK)(this.state.componentId, this.state.dataComponentName),
                            this.isTabletMediaQuery = window.matchMedia("(max-width: 769px)"),
                            this.isTabletMediaQuery.addListener(this.onIsTabletOrBelow),
                            this.onIsTabletOrBelow()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        var e;
                        null === (e = this.isTabletMediaQuery) || void 0 === e || e.removeListener(this.onIsTabletOrBelow)
                    }
                }, {
                    key: "onIsTabletOrBelow",
                    value: function () {
                        var e;
                        this.setState({
                            isTabletOrBelow: null === (e = this.isTabletMediaQuery) || void 0 === e ? void 0 : e.matches
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this
                            , t = this.props.itemContent
                            , n = t || {}
                            , a = n.background_color
                            , s = n.background_type
                            , u = n.banner_with_video
                            , _ = n.banner_video
                            , p = n.bottom_background_color
                            , f = n.cta_links
                            , m = void 0 === f ? [] : f
                            , v = n.description
                            , h = n.field_headline_formatted
                            , y = n.heading_config
                            , O = n.heading_color
                            , k = n.image
                            , E = n.image_dropdown
                            , N = n.mobile_image
                            , j = n.size
                            , T = n.sub_heading
                            , x = n.sub_heading_color
                            , P = (n.sub_heading_config,
                                n.text_config)
                            , B = n.variant
                            , I = n.video
                            , S = n.field_headline_type
                            , L = n.sub_heading_type
                            , C = n.body_type
                            , D = Boolean(B && g.includes(B))
                            , M = [];
                        [w].concat(g).includes(B) && M.push(B);
                        var Q = D ? r()["text-shadow"] : ""
                            , A = t ? (0,
                                l.k)(h, "") : ""
                            , H = y || "h1"
                            , K = O || ""
                            , U = x || ""
                            , R = T || null
                            , W = v || null
                            , Y = k && k.rel_url ? k.rel_url : null
                            , z = k && k.options && k.options.alt ? k.options.alt : void 0
                            , F = "image/".concat((0,
                                c.yg)(Y))
                            , q = k && k.webp_image_url ? k.webp_image_url : ""
                            , G = N && N.rel_url ? N.rel_url : void 0
                            , V = N && N.webp_image_url ? N.webp_image_url : null
                            , J = E || "center"
                            , X = a || ""
                            , Z = (0,
                                c.Nw)(X || "#ffffff")
                            , $ = b(b({}, !D && B !== w && {
                                backgroundPosition: J,
                                backgroundColor: X
                            }), (!D && B !== w || (D || B === w) && !this.state.isTabletOrBelow) && {
                                backgroundImage: "url(".concat(q || Y, ")")
                            })
                            , ee = I || ""
                            , te = j || "sm"
                            , ne = "1" === u
                            , oe = r()["b_".concat(te)]
                            , ae = "left" === P ? r().b_lft : r().b_ctr
                            , re = "".concat(r()["banner-heading-" + H])
                            , ie = ne ? r().video_wrapper : ""
                            , ce = ne ? r().video_block : ""
                            , le = ee && "video" === s ? r().video_wrapper_xl : ""
                            , se = "";
                        this.state.isTabletOrBelow && !ne && (se = r().banner_mob);
                        var de = _ && _.video_id && _.video_id.length > 0 && _.video_id[0].value ? _.video_id[0].value : ""
                            , ue = p || "ffffff"
                            , be = {};
                        be.backgroundColor = ue,
                            be.paddingBottom = "60px";
                        var _e = ne ? {
                            style: be
                        } : ""
                            , pe = D || B === w ? {
                                style: {
                                    backgroundColor: X
                                }
                            } : ""
                            , fe = K ? {
                                style: {
                                    color: K
                                }
                            } : ""
                            , me = U ? {
                                style: {
                                    color: U
                                }
                            } : ""
                            , ve = S || ("1" === u ? "l-head" : "banner-headline-3")
                            , he = L || ("1" === u ? "l-sub" : "misc-ey")
                            , ye = C || ("1" === u ? "l-body" : "xl-body")
                            , ge = !1;
                        "banner-headline-1" == ve ? (ve = "ban-h1-ptserif",
                            ge = !0) : "banner-headline-2" == ve ? (ve = "ban-h2-ptserif",
                                ge = !0) : "banner-headline-3" == ve && (ve = "ban-h3-ptserif",
                                    ge = !0);
                        var we = m.map((function (t, n) {
                            var a, r, c, l, s = t && t.field_carousel_cta_type ? t.field_carousel_cta_type : "", d = t && t.field_cta_link && t.field_cta_link.link ? t.field_cta_link.link : "", u = t && t.field_cta_link.label && t.field_cta_link.label ? t.field_cta_link.label : "", b = t && t.field_cta_brightcove_video ? t.field_cta_brightcove_video.video_id[0].value : "", _ = t && t.field_carousel_gated_form ? t.field_carousel_gated_form.value : "", p = null !== (a = null == t || null === (r = t.field_cta_style) || void 0 === r || null === (c = r.field_cta_icon_location) || void 0 === c || null === (l = c[0]) || void 0 === l ? void 0 : l.value) && void 0 !== a ? a : "", f = t && t.field_cta_style ? t.field_cta_style.field_cta_size[0].value : "";
                            return !e.state.isTabletOrBelow || ne || D || B === w || "xxl" === te || (f = "primary_default"),
                                u && o.createElement("div", null, o.createElement(i.default, {
                                    ctaType: "" === s ? "Link" : s,
                                    ctaUrl: d,
                                    ctaLabel: u,
                                    ctaFormID: _,
                                    ctaVideoID: b,
                                    ctaStyle: f,
                                    dataComponentName: e.state.dataComponentName,
                                    dataMachineName: "banner_management_updated",
                                    index: n,
                                    parentOrder: e.props.componentOrder,
                                    bannerHeading: A,
                                    bannerInstanceCount: e.props.bannerInstanceCount,
                                    ctaIcon: p
                                }))
                        }
                        ));
                        return o.createElement("section", {
                            className: "component-order ".concat(M.join(" ")),
                            "data-componentname": this.state.dataComponentName,
                            "data-componentid": this.state.componentId,
                            "component-order": this.props.componentOrder
                        }, o.createElement("div", {
                            className: "".concat(r().b_wrap, " ").concat(Q)
                        }, o.createElement("div", d({}, _e, pe, {
                            className: "".concat(r().b_content_container)
                        }), o.createElement("div", {
                            className: "".concat(r().b_content, " ").concat(oe, " ").concat(ie, " ").concat(le, " ").concat(se),
                            style: b({}, $)
                        }, o.createElement("div", {
                            className: "".concat(r().b_main_container)
                        }, o.createElement("div", {
                            className: "".concat(r().heading_container, " ").concat(D ? "" : ae, " ").concat(ce)
                        }, R ? o.createElement("h1", d({
                            className: "".concat(r().b_subtitle, " ").concat(he + "-sspro")
                        }, me, {
                            dangerouslySetInnerHTML: {
                                __html: R
                            }
                        })) : null, A && o.createElement("div", d({
                            className: "".concat(r().b_title)
                        }, fe), o.createElement("h2", {
                            className: "".concat(re, "  ").concat(ge ? ve : ve + "-sspro"),
                            dangerouslySetInnerHTML: {
                                __html: A
                            }
                        })), W && o.createElement("div", {
                            className: "".concat(r().b_desc, " ").concat(ye + "-sspro", " ").concat(r()[Z]),
                            dangerouslySetInnerHTML: {
                                __html: W
                            }
                        }), we.length > 0 && o.createElement("div", {
                            className: r().b_cta_block
                        }, we))), this.state.isTabletOrBelow && (null == t ? void 0 : t.mobile_image) && "image" === t.background_type && !ne && o.createElement("picture", null, V && o.createElement("source", {
                            srcSet: "".concat(V),
                            type: "image/webp"
                        }), o.createElement("source", {
                            srcSet: G,
                            type: F
                        }), o.createElement("img", {
                            loading: "lazy",
                            src: G,
                            alt: z
                        })), ee && "video" === t.background_type && !ne && o.createElement("video", {
                            loop: !0,
                            autoPlay: !0,
                            muted: !0
                        }, " ", o.createElement("source", {
                            src: ee
                        }), " Your browser does not support the video tag. Kindly update your browser. ")), de && ne && o.createElement("div", {
                            className: r().video_container,
                            "data-video-ids": de,
                            "data-experience": "5b0f79545eecca0010826d71"
                        }))))
                    }
                }]) && _(n.prototype, a),
                Object.defineProperty(n, "prototype", {
                    writable: !1
                }),
                n;
            var n, a
        }(o.Component)
    }
    ,
    29184: (e, t, n) => {
        "use strict";
        n.d(t, {
            k: () => o
        });
        var o = function (e, t) {
            var n, o;
            return null !== (n = null == e || null === (o = e[0]) || void 0 === o ? void 0 : o.value) && void 0 !== n ? n : t
        }
    }
    ,
    58807: e => {
        e.exports = {
            "inherit-parent-typo": "kXQur",
            b_wrap: "QRPmN",
            b_sm: "TPARx",
            b_md: "KctOw",
            b_lg: "k9a91",
            b_xl: "Plqk9",
            b_xxl: "UAmhP",
            heading_container: "WW_1Z",
            "banner-heading-h4": "Q0gfB",
            b_desc: "qVMs9",
            b_cta_block: "KNr24",
            "banner-heading-h1": "UhMIR",
            "banner-heading-h2": "H6Lui",
            "banner-heading-h3": "lN5h3",
            "banner-heading-h5": "gnsIY",
            "banner-heading-h6": "N72QL",
            video_container: "ueePd",
            video_wrapper: "T5BY3",
            b_ctr: "aNN3g",
            video_block: "LOyi5",
            b_content: "ToJNY",
            b_main_container: "hIGEh",
            b_lft: "WTQNB",
            b_subtitle: "rDm1c",
            banner_mob: "zFNL6",
            b_title: "aCugA",
            video_wrapper_xl: "p0KEK",
            "banr-h2": "BcCs2",
            "banr-video-h2": "LY9Y5",
            "dark-tone": "UHWbg",
            "light-tone": "yuON7",
            "text-shadow": "dyuGH",
            b_content_container: "wndFS",
            "subhead-1": "LjExx",
            "banner--ctas": "UxiWf"
        }
    }
    ,
    71948: e => {
        e.exports = {}
    }
}]);
