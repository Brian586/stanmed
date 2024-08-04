(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[8115], {
    2910: (e, t, r) => {
        "use strict";
        r.r(t),
            r.d(t, {
                default: () => _
            });
        var n = r(96540)
            , a = r(70126)
            , o = r.n(a)
            , i = r(61038);
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
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, u(n.key), n)
            }
        }
        function u(e) {
            var t = function (e, t) {
                if ("object" != l(e) || !e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" != l(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == l(t) ? t : t + ""
        }
        function p(e, t, r) {
            return t = m(t),
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
                }(e, f() ? Reflect.construct(t, r || [], m(e).constructor) : t.apply(e, r))
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
        function s(e, t) {
            return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                s(e, t)
        }
        const _ = function (e) {
            function t(e) {
                var r;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (r = p(this, t, [e])).dataComponentName = "",
                    r.myTabRef = n.createRef(),
                    r.agtitle = "",
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
                    t && s(e, t)
            }(t, e),
                r = t,
                (a = [{
                    key: "componentDidMount",
                    value: function () {
                        (0,
                            i.pK)("article_grid", this.dataComponentName)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e, t, r = this, a = this.props.itemContent, i = a && a.field_artgrid_type && a.field_artgrid_type.length > 0 && a.field_artgrid_type[0].value ? a.field_artgrid_type[0].value : "", l = a && a.field_arttitle && a.field_arttitle && a.field_arttitle.length > 0 && a.field_arttitle[0].value ? a.field_arttitle[0].value : "";
                        "Featured Article" == i ? (e = "1",
                            this.dataComponentName = "MainFeature") : "1X2 Grid" == i ? (e = "2",
                                t = "agx2",
                                this.dataComponentName = "Featured Article 2x1") : "2X2 Grid" == i && (e = "4",
                                    t = "agx4",
                                    this.dataComponentName = "Featured Article 2x2");
                        var c = a && a.field_article && a.field_article.length > 0 ? a.field_article.slice(0, e).map((function (e, t) {
                            var a = e && e.card_image
                                , l = a && e.card_image.rel_url ? e.card_image.rel_url : ""
                                , c = a && e.card_image.options && e.card_image.options.alt ? e.card_image.options.alt : ""
                                , u = a && e.card_image.options && e.card_image.options.title ? e.card_image.options.title : ""
                                , p = e && e.summary ? e.summary : ""
                                , f = e && e.title ? e.title : ""
                                , m = e && e.field_type ? e.field_type : ""
                                , s = e && e.url ? e.url : ""
                                , _ = e.open_link_in_new_tab && e.open_link_in_new_tab[0].value && "1" === e.open_link_in_new_tab[0].value ? "_blank" : "";
                            return n.createElement("div", {
                                key: t,
                                className: o().agx1
                            }, n.createElement("a", {
                                className: o().agurl,
                                href: s,
                                ref: r.myTabRef,
                                target: _
                            }, n.createElement("div", {
                                className: o().ag_img
                            }, n.createElement("img", {
                                src: l,
                                alt: c,
                                title: u
                            })), n.createElement("div", {
                                className: o().ag_txt
                            }, n.createElement("p", {
                                className: "".concat(o().ag_title, " p1")
                            }, m), "2X2 Grid" == i ? n.createElement("h4", null, f) : n.createElement("h3", null, f), n.createElement("p", {
                                className: "".concat(o().ag_summary, " p1")
                            }, p))))
                        }
                        )) : "";
                        return n.createElement("section", {
                            className: "".concat(o().agwrap, " component-order"),
                            "data-componentname": this.dataComponentName,
                            "component-order": this.props.componentOrder
                        }, n.createElement("div", {
                            className: o().ag_title,
                            dangerouslySetInnerHTML: {
                                __html: l
                            }
                        }), n.createElement("div", {
                            className: o()[t]
                        }, c))
                    }
                }]) && c(r.prototype, a),
                Object.defineProperty(r, "prototype", {
                    writable: !1
                }),
                r;
            var r, a
        }(n.Component)
    }
    ,
    70126: e => {
        e.exports = {
            "inherit-parent-typo": "HVY9S",
            agwrap: "MnmG9",
            ag_title: "j2wB_",
            agx1: "F4icd",
            agx2: "y2pH8",
            ag_img: "ZrwDF",
            ag_txt: "Tr_3u",
            agx4: "pOiuO",
            ag_summary: "ubCaf",
            agurl: "k1ymq"
        }
    }
}]);
