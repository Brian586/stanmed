(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[9274], {
    47981: (e, t, r) => {
        "use strict";
        r.r(t),
            r.d(t, {
                default: () => y
            });
        var n = r(96540)
            , o = r(95643)
            , i = r.n(o);
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
        function a(e, t) {
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
                if ("object" != c(e) || !e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" != c(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == c(t) ? t : t + ""
        }
        function l(e, t, r) {
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
                }(e, p() ? Reflect.construct(t, r || [], f(e).constructor) : t.apply(e, r))
        }
        function p() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (p = function () {
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
        function s(e, t) {
            return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                s(e, t)
        }
        var y = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    l(this, t, arguments)
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
                (o = [{
                    key: "render",
                    value: function () {
                        var e = this.props.itemContent
                            , t = e && e ? e : ""
                            , r = t && t.field_article_content.map((function (e, t) {
                                return n.createElement("div", {
                                    className: i()["leadership-content"],
                                    key: t
                                }, e.image ? n.createElement("img", {
                                    className: i()["leadership-img"],
                                    src: e.image.rel_url,
                                    alt: e.image.options.alt
                                }) : "", n.createElement("div", {
                                    className: "p2 subhead-3",
                                    dangerouslySetInnerHTML: {
                                        __html: e.text
                                    }
                                }))
                            }
                            ));
                        return n.createElement("div", {
                            className: "".concat(i()["leadership-wrapper"], " component-order")
                        }, n.createElement("div", {
                            className: i()["leadership-content-wrapper"]
                        }, r))
                    }
                }]) && a(r.prototype, o),
                Object.defineProperty(r, "prototype", {
                    writable: !1
                }),
                r;
            var r, o
        }(n.Component)
    }
    ,
    95643: e => {
        e.exports = {
            "inherit-parent-typo": "F54ku",
            "leadership-wrapper": "jEzJk",
            "leadership-content-wrapper": "T5hvl",
            "leadership-content": "dURtT",
            "leadership-img": "ADTWF"
        }
    }
}]);
