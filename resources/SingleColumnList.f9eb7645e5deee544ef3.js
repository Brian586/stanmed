(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[4625], {
    58628: (t, e, n) => {
        "use strict";
        n.r(e),
            n.d(e, {
                default: () => f
            });
        var i = n(96540)
            , l = n(84911)
            , r = n.n(l)
            , o = (n(84315),
                n(7452),
                n(61038));
        function a(t) {
            return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                a(t)
        }
        function c(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, u(i.key), i)
            }
        }
        function u(t) {
            var e = function (t, e) {
                if ("object" != a(t) || !t)
                    return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var i = n.call(t, "string");
                    if ("object" != a(i))
                        return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == a(e) ? e : e + ""
        }
        function s(t, e, n) {
            return e = p(e),
                function (t, e) {
                    if (e && ("object" == a(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, _() ? Reflect.construct(e, n || [], p(t).constructor) : e.apply(t, n))
        }
        function _() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (t) { }
            return (_ = function () {
                return !!t
            }
            )()
        }
        function p(t) {
            return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
                ,
                p(t)
        }
        function m(t, e) {
            return m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                return t.__proto__ = e,
                    t
            }
                ,
                m(t, e)
        }
        const f = function (t) {
            function e(t) {
                var n;
                return function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                    (n = s(this, e, [t])).state = {
                        dataComponentName: "Single Column List"
                    },
                    n.myTabRef = i.createRef(),
                    n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                    Object.defineProperty(t, "prototype", {
                        writable: !1
                    }),
                    e && m(t, e)
            }(e, t),
                n = e,
                (l = [{
                    key: "componentDidMount",
                    value: function () {
                        (0,
                            o.pK)("single_column_list", this.state.dataComponentName)
                    }
                }, {
                    key: "getArticleTime",
                    value: function (t, e) {
                        var n = "";
                        return t = parseInt(t),
                            e = parseInt(e),
                            Number.isNaN(t) ? "" : (0 !== e && (n = ":".concat(e),
                                1 == e.toString().length && (n = ":0".concat(e))),
                                "&nbsp;&nbsp;|&nbsp;&nbsp;".concat(t).concat(n, " Minute Read"))
                    }
                }, {
                    key: "render",
                    value: function () {
                        var t, e, n, l = this, o = this.props.itemContent, a = o && o.field_title && o.field_title[0] && o.field_title[0].value ? o.field_title[0].value : null, c = o && o.field_ea_column_list_title && o.field_ea_column_list_title[0] && o.field_ea_column_list_title[0].value ? o.field_ea_column_list_title[0].value : null, u = o && o.field_display_thumbnail && o.field_display_thumbnail[0] && o.field_display_thumbnail[0].value ? parseInt(o.field_display_thumbnail[0].value) : null, s = o && o.articles && o.articles.length > 0 ? o.articles : [], _ = 0 === u ? "".concat(r()["list-wapper"], " ").concat(r()["no-thumbnail"]) : "".concat(r()["list-wapper"]);
                        1 === u && (t = o.thumbnail && o.thumbnail.rel_url ? "".concat(o.thumbnail.rel_url) : "",
                            e = o.thumbnail && o.thumbnail.options.alt ? o.thumbnail.options.alt : "",
                            n = i.createElement("div", {
                                className: r()["img-wrapper"]
                            }, i.createElement("img", {
                                src: t,
                                alt: e
                            })),
                            n = t ? n : "");
                        var p = o && o.divider_color ? o.divider_color : "#6d6e6f"
                            , m = s.map((function (t, e) {
                                var n = t.time && t.time.minutes ? t.time.minutes : "0"
                                    , o = t.time && t.time.seconds ? t.time.seconds : "0"
                                    , a = "webinar_column_list" === l.props.typeOfContentList ? t.cta_link && t.cta_link.field_cta_link_component && t.cta_link.field_cta_link_component ? t.cta_link.field_cta_link_component.field_cta_link.link : "" : t.url ? t.url : ""
                                    , c = t.thumbnail ? t.thumbnail.rel_url : ""
                                    , u = t.cta_link && t.cta_link.field_cta_link_component && t.cta_link.field_cta_link_component.open_cta_in_new_tab[0] && Number(t.cta_link.field_cta_link_component.open_cta_in_new_tab[0].value) ? "_blank" : ""
                                    , s = t.open_url_in_new_tab && t.open_url_in_new_tab && t.open_url_in_new_tab[0] && t.open_url_in_new_tab[0].value && Number(t.open_url_in_new_tab[0].value) ? "_blank" : "";
                                return i.createElement("li", {
                                    key: e,
                                    style: {
                                        borderBottomColor: p
                                    }
                                }, c ? i.createElement("img", {
                                    src: c,
                                    alt: t.thumbnail && t.thumbnail.options ? t.thumbnail.options.alt : ""
                                }) : "", i.createElement("a", {
                                    href: a,
                                    ref: l.myTabRef,
                                    target: "external_asset_column_list" === l.props.typeOfContentList ? s : u
                                }, i.createElement(i.Fragment, null, t.type ? i.createElement("h5", {
                                    className: r()["list-article-name"]
                                }, t.type) : "", "0" !== n || "0" !== o ? i.createElement("h5", {
                                    className: r()["list-article-date"],
                                    dangerouslySetInnerHTML: {
                                        __html: l.getArticleTime(n, o)
                                    }
                                }) : "", t.title ? i.createElement("p", {
                                    className: r()["list-article-description"]
                                }, t.title) : "")))
                            }
                            ));
                        return i.createElement("section", {
                            className: "".concat(r()["single-column-list-wrapper"], " component-order"),
                            "data-componentname": this.state.dataComponentName,
                            "component-order": this.props.componentOrder
                        }, i.createElement("h5", {
                            className: r()["list-title"]
                        }, "external_asset_column_list" === this.props.typeOfContentList ? c : a), i.createElement("div", {
                            className: _
                        }, n, i.createElement("ul", null, m)))
                    }
                }]) && c(n.prototype, l),
                Object.defineProperty(n, "prototype", {
                    writable: !1
                }),
                n;
            var n, l
        }(i.Component)
    }
    ,
    84911: t => {
        t.exports = {
            "inherit-parent-typo": "WTJPg",
            "single-column-list-wrapper": "OMNuk",
            "list-title": "LQxVP",
            "img-wrapper": "llBuK",
            "list-wapper": "JWZlc",
            "no-thumbnail": "G0XVn",
            "list-article-name": "vqSbc",
            "list-article-date": "yAqUF",
            "list-article-description": "Ycufk"
        }
    }
}]);
