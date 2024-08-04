(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[8660, 5538], {
    47653: (e, t, r) => {
        "use strict";
        r.r(t),
            r.d(t, {
                default: () => l
            });
        var n = r(96540);
        function o(e) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                o(e)
        }
        function i(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    r.push.apply(r, n)
            }
            return r
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(r), !0).forEach((function (t) {
                    a(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function a(e, t, r) {
            return (t = function (e) {
                var t = function (e, t) {
                    if ("object" != o(e) || !e)
                        return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, "string");
                        if ("object" != o(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == o(t) ? t : t + ""
            }(t)) in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
                e
        }
        function l(e) {
            var t = e.visibility
                , r = void 0 !== t && t
                , o = e.borderStyle
                , i = e.style;
            if (!r)
                return null;
            var a = {
                style: c({
                    margin: " 0 auto",
                    borderRight: "0",
                    borderLeft: "0",
                    borderBottom: "0",
                    borderTop: o || "1px solid #d8d8d8",
                    maxWidth: "896px",
                    width: "calc(100% - 60px)",
                    minWidth: "315px"
                }, void 0 === i ? {} : i)
            };
            return n.createElement(n.Fragment, null, r && n.createElement("hr", a))
        }
    }
    ,
    76727: (e, t, r) => {
        "use strict";
        r.r(t),
            r.d(t, {
                default: () => _
            });
        var n = r(96540)
            , o = r(36425)
            , i = r.n(o)
            , c = r(38125)
            , a = r(61038)
            , l = (r(84315),
                r(7452),
                r(47653));
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
        function f(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, s(n.key), n)
            }
        }
        function s(e) {
            var t = function (e, t) {
                if ("object" != u(e) || !e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" != u(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == u(t) ? t : t + ""
        }
        function d(e, t, r) {
            return t = p(t),
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
                }(e, b() ? Reflect.construct(t, r || [], p(e).constructor) : t.apply(e, r))
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
        function p(e) {
            return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                p(e)
        }
        function y(e, t) {
            return y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                y(e, t)
        }
        var _ = function (e) {
            function t(e) {
                var r;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (r = d(this, t, [e])).state = {
                        openGatedVideo: !1,
                        dataComponentName: "Content Block"
                    },
                    r.clickTabMod = r.clickTabMod.bind(r),
                    r.resetForm = r.resetForm.bind(r),
                    r.myTabRef = n.createRef(),
                    r
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
                    t && y(e, t)
            }(t, e),
                r = t,
                (o = [{
                    key: "componentDidMount",
                    value: function () {
                        (0,
                            a.pK)("content_block", this.state.dataComponentName)
                    }
                }, {
                    key: "openForm",
                    value: function (e, t) {
                        this.clickTabMod(t),
                            e && this.setState({
                                openGatedVideo: !0
                            })
                    }
                }, {
                    key: "resetForm",
                    value: function () {
                        this.setState({
                            openGatedVideo: !1
                        })
                    }
                }, {
                    key: "clickTabMod",
                    value: function (e) {
                        (0,
                            a.$)("CTA Link Clicked", e, "content_block", "Content Block")
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this
                            , t = this.props.itemContent
                            , r = t && t ? t : ""
                            , o = (r && r.field_divider[0] && r.field_divider[0].value,
                                r && r.field_cta_style_cb ? "".concat(r.field_cta_style_cb.field_cta_behaviour[0] ? r.field_cta_style_cb.field_cta_behaviour[0].value : "", "\n    ").concat(r.field_cta_style_cb.field_cta_color[0] ? r.field_cta_style_cb.field_cta_color[0].value : "", "\n    ").concat(r.field_cta_style_cb.field_cta_size[0] ? r.field_cta_style_cb.field_cta_size[0].value : "", "\n    ").concat(r.field_cta_style_cb.field_cta_type[0] ? r.field_cta_style_cb.field_cta_type[0].value : "") : "regular small alertGreen")
                            , u = r && r.field_cta_link_cb[0] ? r.field_cta_link_cb[0].value : "javascript:void(0)"
                            , f = r.field_cta_text_cb[0] ? r.field_cta_text_cb[0].value : ""
                            , s = r && r.field_form[0] ? r && r.field_form[0].target_id : ""
                            , d = r && 0 != r.field_image.length
                            , b = this.props.content && this.props.content.siteIdentifier ? this.props.content.siteIdentifier : null
                            , p = "ahcom" === b || "khub" === b
                            , y = (0,
                                a.y_)(t.global_data)
                            , _ = y.containerStyles
                            , m = y.hasTopDivider
                            , v = y.hasBottomDivider
                            , h = y.border
                            , O = y.background
                            , g = (y.title,
                                y.subhead,
                                y.para,
                                y.titleColor,
                                y.subheadClr,
                                y.paraClr,
                                y.enableSubheadDivider,
                                (0,
                                    a.Nw)(O || "#ffffff"));
                        return n.createElement("section", {
                            className: i()["contactus-wrapper"],
                            "data-componentname": this.state.dataComponentName,
                            style: {
                                backgroundColor: O
                            }
                        }, n.createElement(l.default, {
                            visibility: m,
                            borderStyle: h
                        }), n.createElement("div", {
                            className: "".concat(i()["contactus-container"], " component-order"),
                            style: _
                        }, d ? n.createElement("img", {
                            className: i()["contactus-image"],
                            src: r.field_image.rel_url,
                            alt: r.field_image.options ? r.field_image.options.alt : ""
                        }) : "", r && r.field_contenttitle[0] ? p ? n.createElement("h5", {
                            className: i()["contactus-title"],
                            dangerouslySetInnerHTML: {
                                __html: r.field_contenttitle[0].value
                            }
                        }) : n.createElement("h3", {
                            className: i()["contactus-title"],
                            dangerouslySetInnerHTML: {
                                __html: r.field_contenttitle[0].value
                            }
                        }) : "", r && r.body[0] ? n.createElement("div", {
                            className: "".concat(i()["contactus-desc"], " ").concat(p ? "para-sm" : "p2", " ").concat(i()[g]),
                            dangerouslySetInnerHTML: {
                                __html: r.body[0].value
                            }
                        }) : "", r && r.field_cta_style_cb ? n.createElement("div", null, n.createElement("a", {
                            ref: this.myTabRef,
                            className: o,
                            href: s ? "javascript:void(0)" : u,
                            onClick: function () {
                                e.openForm(s, f)
                            }
                        }, f), n.createElement(c.default, {
                            isGated: s,
                            openGatedVideo: this.state.openGatedVideo,
                            resetForm: this.resetForm
                        })) : n.createElement("a", {
                            ref: this.myTabRef,
                            className: "".concat(i()["contactus-link"], " inline-link"),
                            href: u,
                            onClick: function () {
                                e.clickTabMod("content_block", f)
                            }
                        }, f)), n.createElement(l.default, {
                            visibility: v,
                            borderStyle: h
                        }))
                    }
                }]) && f(r.prototype, o),
                Object.defineProperty(r, "prototype", {
                    writable: !1
                }),
                r;
            var r, o
        }(n.Component)
    }
    ,
    36425: e => {
        e.exports = {
            "inherit-parent-typo": "Vfu8I",
            "contactus-wrapper": "GM9jO",
            "contactus-container": "SaLBQ",
            "contactus-image": "aSuJH",
            "contactus-title": "zd9iv",
            "contactus-desc": "HQxZZ",
            "contactus-link": "vvg8w",
            "dark-tone": "SSjFO",
            "light-tone": "DyUh7"
        }
    }
}]);
