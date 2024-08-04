(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[518, 4417], {
    17257: (t, e, n) => {
        "use strict";
        n.r(e),
            n.d(e, {
                default: () => w
            });
        var o = n(96540)
            , i = n(80721)
            , l = n.n(i)
            , a = n(72505)
            , r = n.n(a)
            , s = n(9236)
            , _ = n(61038)
            , c = n(67739);
        function p(t) {
            return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                p(t)
        }
        function f(t) {
            return function (t) {
                if (Array.isArray(t))
                    return d(t)
            }(t) || function (t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                    return Array.from(t)
            }(t) || function (t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return d(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(t, e) : void 0
                }
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function d(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, o = Array(e); n < e; n++)
                o[n] = t[n];
            return o
        }
        function u(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(t, m(o.key), o)
            }
        }
        function m(t) {
            var e = function (t, e) {
                if ("object" != p(t) || !t)
                    return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(t, "string");
                    if ("object" != p(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == p(e) ? e : e + ""
        }
        function y(t, e, n) {
            return e = b(e),
                function (t, e) {
                    if (e && ("object" == p(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, h() ? Reflect.construct(e, n || [], b(t).constructor) : e.apply(t, n))
        }
        function h() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (t) { }
            return (h = function () {
                return !!t
            }
            )()
        }
        function b(t) {
            return b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
                ,
                b(t)
        }
        function v(t, e) {
            return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                return t.__proto__ = e,
                    t
            }
                ,
                v(t, e)
        }
        const w = function (t) {
            function e(t) {
                var n;
                return function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                    (n = y(this, e, [t])).finalComponentName,
                    "content_list" === n.props.typeOfContentList ? n.finalComponentName = "Content List" : "extended_content_list" === n.props.typeOfContentList ? n.finalComponentName = "Newsroom Content List" : "webinar_content_list" === n.props.typeOfContentList ? n.finalComponentName = "Webinar Content List" : "external_asset_content_list" === n.props.typeOfContentList && (n.finalComponentName = "External Asset Content List"),
                    n.cta_id = n.props.typeOfContentList ? "_".concat(n.props.typeOfContentList.replace(/ /g, "_").replace(/\//g, "_").substring(0, 3).toLowerCase()) : "",
                    n.state = {
                        dataComponentName: n.finalComponentName,
                        listItems: [],
                        morePageExists: !0,
                        itemsLoading: !0
                    },
                    n.loadMore = n.loadMore.bind(n),
                    n.currentPage = 0,
                    n.maxItemsToDisplay = 5,
                    n.totalItems = 0,
                    n.loadMoreCTARef = o.createRef(),
                    n.myTabRef = o.createRef(),
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
                    e && v(t, e)
            }(e, t),
                n = e,
                (i = [{
                    key: "componentDidMount",
                    value: function () {
                        var t = this.props.itemContent
                            , e = [];
                        t && (e = t.data && t.data.data && t.data.data.length > 0 ? t.data.data : [],
                            this.totalItems = t && t.total_no_of_articles ? parseInt(t.total_no_of_articles) : 0,
                            this.contentTypeTwoColumn = t.field_select_content_type && t.field_select_content_type[0] ? t.field_select_content_type[0].value : "",
                            this.listTypeTwoColumn = t.field_list_type && t.field_list_type[0] ? t.field_list_type[0].value : "",
                            this.taxonomyIdTwoColumn = t.taxonomy_id ? t.taxonomy_id : null,
                            "content_list" === this.props.typeOfContentList ? this.maxItemsToDisplay = t.field_items_to_display && t.field_items_to_display[0] ? parseInt(t.field_items_to_display[0].value) : 0 : "extended_content_list" === this.props.typeOfContentList ? this.maxItemsToDisplay = t.field_number_of_items_to_display && t.field_number_of_items_to_display[0] ? parseInt(t.field_number_of_items_to_display[0].value) : 0 : this.maxItemsToDisplay = t.field_how_many_items_to_display_ && t.field_how_many_items_to_display_[0] ? parseInt(t.field_how_many_items_to_display_[0].value) : 0,
                            "external_asset_content_list" === this.props.typeOfContentList && (this.maxItemsToDisplay = t.field_ea_no_of_items_to_display && t.field_ea_no_of_items_to_display[0] ? parseInt(t.field_ea_no_of_items_to_display[0].value) : 0,
                                this.contentTypeTwoColumn = t.field_ea_select_content_type && t.field_ea_select_content_type[0] ? t.field_ea_select_content_type[0].value : "",
                                this.listTypeTwoColumn = t.field_ea_list_type && t.field_ea_list_type[0] ? t.field_ea_list_type[0].value : "")),
                            this.setState({
                                listItems: e,
                                morePageExists: e.length !== this.totalItems,
                                itemsLoading: !1
                            }),
                            (0,
                                _.pK)(this.props.typeOfContentList, this.state.dataComponentName)
                    }
                }, {
                    key: "loadMore",
                    value: function (t) {
                        var e = this;
                        if (this.state.morePageExists) {
                            this.currentPage = this.currentPage + 1,
                                this.setState({
                                    itemsLoading: !0
                                });
                            var n = "/load_more_contentlist?page=" + this.currentPage + "&limit=" + this.maxItemsToDisplay + "&topic=" + t
                                , o = "/news_room_load_more_contentlist?page=" + this.currentPage + "&limit=" + this.maxItemsToDisplay + "&content_type=" + this.contentTypeTwoColumn + "&list_type=" + this.listTypeTwoColumn + "&taxonomy_id=" + this.taxonomyIdTwoColumn
                                , i = "/external_asset_load_more_contentlist?page=" + this.currentPage + "&limit=" + this.maxItemsToDisplay + "&content_type=" + this.contentTypeTwoColumn + "&list_type=" + this.listTypeTwoColumn + "&taxonomy_id=" + this.taxonomyIdTwoColumn
                                , l = "/webinar_load_more_contentlist?page=" + this.currentPage + "&limit=" + this.maxItemsToDisplay
                                , a = "content_list" === this.props.typeOfContentList ? n : "extended_content_list" === this.props.typeOfContentList ? o : "external_asset_content_list" === this.props.typeOfContentList ? i : l;
                            r().get(a, {}).then((function (t) {
                                var n = t.data && t.data.data ? t.data.data : [];
                                e.setState((function (t) {
                                    return {
                                        listItems: [].concat(f(t.listItems), f(n)),
                                        itemsLoading: !1,
                                        morePageExists: t.listItems.length + n.length !== e.totalItems
                                    }
                                }
                                ))
                            }
                            ))
                        }
                    }
                }, {
                    key: "listRender",
                    value: function () {
                        var t = this
                            , e = this.props.itemContent
                            , n = e && e.field_display_taxonomy && e.field_display_taxonomy[0] && e.field_display_taxonomy[0].value ? e.field_display_taxonomy[0].value : "0"
                            , i = e && e.field_display_publish_date && e.field_display_publish_date[0] && e.field_display_publish_date[0].value ? e.field_display_publish_date[0].value : "0"
                            , a = e && e.data && e.data.data && e.data.data.length > 0 ? e.data.data : []
                            , r = this.state.listItems.length > 0 ? this.state.listItems : a
                            , s = e && e.divider_color ? e.divider_color : "#6d6e6f";
                        return r.map((function (e, a) {
                            var r, p, f, d, u, m = e && e.field_cta_link_component, y = e.title ? e.title : "", h = "webinar_content_list" !== t.props.typeOfContentList ? e.type ? e.type : null : e.disclaimer_text && e.disclaimer_text, b = e.body && e.body[0] && e.body[0].summary.length > 0 ? e.body[0].summary.replace(/\{+[a-zA-Z0-9_ -]*\}+/g, "") : "", v = e.field_list_view_image && e.field_list_view_image.length > 0 && e.field_list_view_image[0] ? e.field_list_view_image[0] : {}, w = v.rel_url ? "".concat(v.rel_url) : "", C = v.options && v.options.alt ? v.options.alt : "", O = e.url_alias ? e.url_alias : "", g = m && e.field_cta_link_component.field_cta_link ? e.field_cta_link_component.field_cta_link.link : "", x = "extended_content_list" === t.props.typeOfContentList && e.external_url && e.external_url[0] ? e.external_url[0].value : e && e.url_alias && e.url_alias ? e.url_alias : "", L = "external_asset_content_list" === t.props.typeOfContentList && e.external_url && e.external_url[0] ? e.external_url[0].uri : "", E = "content_list" === t.props.typeOfContentList ? O : "webinar_content_list" === t.props.typeOfContentList ? g : "extended_content_list" === t.props.typeOfContentList ? x : "external_asset_content_list" === t.props.typeOfContentList ? L : "", T = e.date, k = m && e.field_cta_link_component.field_cta_link, I = e.field_cta_link_component && e.field_cta_link_component.field_cta_style && e.field_cta_link_component.field_cta_style.field_cta_size ? e.field_cta_link_component.field_cta_style.field_cta_size[0].value : "", P = null !== (r = null == e || null === (p = e.field_cta_link_component) || void 0 === p || null === (f = p.field_cta_style) || void 0 === f || null === (d = f.field_cta_icon_location) || void 0 === d || null === (u = d[0]) || void 0 === u ? void 0 : u.value) && void 0 !== r ? r : "", N = "extended_content_list" === t.props.typeOfContentList && e.open_link_in_new_tab && e.open_link_in_new_tab[0] ? "1" === e.open_link_in_new_tab[0].value ? "_blank" : "" : m && "1" === e.field_cta_link_component.open_cta_in_new_tab[0].value && "_blank", j = "extended_content_list" === t.props.typeOfContentList ? l()["text-transform-column"] : "";
                            "external_asset_content_list" === t.props.typeOfContentList && (N = e.open_link_in_new_tab && e.open_link_in_new_tab[0] ? "1" === e.open_link_in_new_tab[0].value ? "_blank" : "" : m && "1" === e.field_cta_link_component.open_cta_in_new_tab[0].value && "_blank",
                                j = l()["text-transform-column"]);
                            var S;
                            return S = "" == (e.field_cta_link_component && e.field_cta_link_component.field_carousel_cta_type ? e.field_cta_link_component.field_carousel_cta_type : "") ? "" : o.createElement(c.default, {
                                ctaType: "Link",
                                ctaUrl: k.link,
                                ctaLabel: k.label,
                                ctaStyle: I,
                                dataComponentName: t.state.dataComponentName,
                                dataMachineName: "content_list",
                                ctaLinkTarget: N,
                                index: a,
                                parentOrder: t.props.componentOrder,
                                bannerHeading: y,
                                ctaIcon: P
                            }),
                                o.createElement("li", {
                                    key: a
                                }, o.createElement("a", {
                                    href: E,
                                    ref: t.myTabRef,
                                    target: N
                                }, o.createElement("div", {
                                    className: l().article,
                                    style: {
                                        borderBottomColor: s
                                    }
                                }, w ? o.createElement("div", {
                                    className: l()["image-container"]
                                }, o.createElement("img", {
                                    src: w,
                                    alt: C
                                })) : "", o.createElement("div", {
                                    className: l()["info-container"]
                                }, o.createElement("h5", {
                                    className: "".concat(l()["article-subtitle"], " ").concat(j, " regular")
                                }, "0" !== n && h ? o.createElement("label", null, h) : "", "1" === n && "1" === i && h && T && " | ", "0" !== i && T ? o.createElement("span", null, T) : null), y ? o.createElement("h3", {
                                    className: l()["article-title"],
                                    onClick: function () {
                                        return (0,
                                            _.Xt)(t.finalComponentName, t.props.typeOfContentList, "Link", y.replace(/,/g, ""))
                                    }
                                }, " ", y, " ") : null, b ? o.createElement("div", {
                                    className: "".concat(l()["article-description"], " p1"),
                                    dangerouslySetInnerHTML: {
                                        __html: b
                                    }
                                }) : null, "webinar_content_list" === t.props.typeOfContentList ? S : null))))
                        }
                        ))
                    }
                }, {
                    key: "render",
                    value: function () {
                        var t = this
                            , e = this.props.itemContent
                            , n = "article"
                            , i = "webinar_content_list" === this.props.typeOfContentList ? l()["webinar-content-list-wrapper"] : "extended_content_list" === this.props.typeOfContentList ? l()["newsroom-content-list-wrapper"] : ""
                            , a = "external_asset_content_list" === this.props.typeOfContentList ? e && e.field_select_component_format ? e.field_select_component_format[0].value : "" : e && e.field_component_format ? e.field_component_format[0].value : ""
                            , r = ""
                            , _ = "";
                        "extended_content_list" === this.props.typeOfContentList && (r = e && e.field_cta_button[0].title ? e.field_cta_button[0].title : "",
                            _ = e && e.field_cta_button[0].uri ? e.field_cta_button[0].uri : ""),
                            "external_asset_content_list" === this.props.typeOfContentList && (r = e && e.field_cta_link[0].title ? e.field_cta_link[0].title : "",
                                _ = e && e.field_cta_link[0].uri ? e.field_cta_link[0].uri : ""),
                            e.field_content && e.field_content[0] && "Topic" === e.field_content[0].value && (n = e.field_topic[0].target_id);
                        var c = "webinar_content_list" === this.props.typeOfContentList ? e && e.field_webinar_content_list_title ? e.field_webinar_content_list_title[0].value : "" : e && e.field_content_list_title && e.field_content_list_title.length > 0 && e.field_content_list_title[0].value ? e.field_content_list_title[0].value : "external_asset_content_list" === this.props.typeOfContentList && e && e.field_ea_content_list_title && e.field_ea_content_list_title.length > 0 && e.field_ea_content_list_title[0].value ? e.field_ea_content_list_title[0].value : "";
                        return o.createElement("section", {
                            className: "".concat(l()["content-list-wrapper"], " ").concat(i, " component-order"),
                            "data-componentname": this.state.dataComponentName,
                            "component-order": this.props.componentOrder
                        }, o.createElement("h5", {
                            className: l()["content-list-title"]
                        }, c), o.createElement("ul", {
                            className: l()["article-wrapper"]
                        }, this.listRender()), o.createElement("div", {
                            className: l()["load-more-holder"]
                        }, this.state.morePageExists && !this.state.itemsLoading && "extended_content_list" !== this.props.typeOfContentList && "external_asset_content_list" !== this.props.typeOfContentList ? o.createElement("a", {
                            id: "g_cta_".concat(this.cta_id, "_0_").concat(this.props.componentOrder),
                            ref: this.loadMoreCTARef,
                            onClick: function () {
                                return t.loadMore(n)
                            },
                            className: "".concat(l()["load-more-btn"], " prim"),
                            href: "javascript:void(0)"
                        }, "Load more") : null, !this.state.morePageExists || this.state.itemsLoading || "extended_content_list" !== this.props.typeOfContentList && "external_asset_content_list" !== this.props.typeOfContentList ? "" : "listing" === a ? o.createElement("a", {
                            id: "g_cta_".concat(this.cta_id, "_1_").concat(this.props.componentOrder),
                            ref: this.loadMoreCTARef,
                            onClick: function () {
                                return t.loadMore(n)
                            },
                            className: "".concat(l()["load-more-btn"], " prim"),
                            href: "javascript:void(0)"
                        }, "Load more") : o.createElement("a", {
                            id: "g_cta_".concat(this.cta_id, "_1_").concat(this.props.componentOrder),
                            ref: this.loadMoreCTARef,
                            className: "".concat(l()["load-more-btn"], " prim"),
                            href: _
                        }, r), this.state.itemsLoading ? o.createElement(s.default, null) : null))
                    }
                }]) && u(n.prototype, i),
                Object.defineProperty(n, "prototype", {
                    writable: !1
                }),
                n;
            var n, i
        }(o.Component)
    }
    ,
    9236: (t, e, n) => {
        "use strict";
        n.r(e),
            n.d(e, {
                default: () => d
            });
        var o = n(96540)
            , i = n(67076)
            , l = n.n(i);
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
        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(t, s(o.key), o)
            }
        }
        function s(t) {
            var e = function (t, e) {
                if ("object" != a(t) || !t)
                    return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(t, "string");
                    if ("object" != a(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == a(e) ? e : e + ""
        }
        function _(t, e, n) {
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
                }(t, c() ? Reflect.construct(e, n || [], p(t).constructor) : e.apply(t, n))
        }
        function c() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (t) { }
            return (c = function () {
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
        function f(t, e) {
            return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                return t.__proto__ = e,
                    t
            }
                ,
                f(t, e)
        }
        const d = function (t) {
            function e(t) {
                return function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                    _(this, e, [t])
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
                    e && f(t, e)
            }(e, t),
                n = e,
                (i = [{
                    key: "render",
                    value: function () {
                        var t = this.props.size ? parseInt(this.props.size) : 50
                            , e = t / 200
                            , n = t / 2
                            , i = {
                                width: t + "px",
                                height: t + "px",
                                transform: "translate(-".concat(n, "px, -").concat(n, "px) scale(").concat(e, ") translate(").concat(n, "px, ").concat(n, "px)")
                            };
                        return o.createElement("div", {
                            style: i,
                            className: l()["lds-spinner"]
                        }, o.createElement("div", null), o.createElement("div", null), o.createElement("div", null), o.createElement("div", null), o.createElement("div", null), o.createElement("div", null), o.createElement("div", null), o.createElement("div", null), o.createElement("div", null), o.createElement("div", null), o.createElement("div", null), o.createElement("div", null))
                    }
                }]) && r(n.prototype, i),
                Object.defineProperty(n, "prototype", {
                    writable: !1
                }),
                n;
            var n, i
        }(o.Component)
    }
    ,
    80721: t => {
        t.exports = {
            "inherit-parent-typo": "JoOJz",
            "content-list-wrapper": "lvb9C",
            "content-list-title": "_MXM4",
            "article-wrapper": "QfNuP",
            article: "yap25",
            "image-container": "YjWVd",
            "info-container": "Awhea",
            "article-subtitle": "ABhHa",
            "with-divider": "zkabc",
            "article-title": "mp7zT",
            "article-description": "w0NR1",
            "load-more-holder": "XQ2RT",
            "load-more-btn": "GT5ST",
            "webinar-content-list-wrapper": "sSNYw",
            "newsroom-content-list-wrapper": "rh7tz",
            "text-transform-column": "lHH1J"
        }
    }
    ,
    67076: t => {
        t.exports = {
            "inherit-parent-typo": "m2bQp",
            "lds-spinner": "Z4vub"
        }
    }
}]);
