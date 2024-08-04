/*! For license information please see CaseStudyListV2.f31b0e75b37f8b405320.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[5202, 5538, 7360, 5457, 1992, 4552], {
    19397: (e, t, n) => {
        "use strict";
        n.r(t),
            n.d(t, {
                default: () => x
            });
        var r = n(96540)
            , o = n(99961)
            , a = n.n(o)
            , l = n(61038)
            , i = (n(84315),
                n(7452),
                n(9987))
            , c = n(14955)
            , s = (n(82746),
                n(72505))
            , u = n.n(s)
            , d = n(47653)
            , f = n(15594)
            , p = n(38709);
        function v() {
            return v = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
                ,
                v.apply(null, arguments)
        }
        function h(e) {
            return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                h(e)
        }
        function m(e) {
            return function (e) {
                if (Array.isArray(e))
                    return g(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || b(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function y(e, t) {
            return function (e) {
                if (Array.isArray(e))
                    return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, a, l, i = [], c = !0, s = !1;
                    try {
                        if (a = (n = n.call(e)).next,
                            0 === t) {
                            if (Object(n) !== n)
                                return;
                            c = !1
                        } else
                            for (; !(c = (r = a.call(n)).done) && (i.push(r.value),
                                i.length !== t); c = !0)
                                ;
                    } catch (e) {
                        s = !0,
                            o = e
                    } finally {
                        try {
                            if (!c && null != n.return && (l = n.return(),
                                Object(l) !== l))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || b(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function b(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return g(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0
            }
        }
        function g(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function w(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    n.push.apply(n, r)
            }
            return n
        }
        function _(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? w(Object(n), !0).forEach((function (t) {
                    O(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function O(e, t, n) {
            return (t = S(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function E(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, S(r.key), r)
            }
        }
        function S(e) {
            var t = function (e, t) {
                if ("object" != h(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, "string");
                    if ("object" != h(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == h(t) ? t : t + ""
        }
        function C(e, t, n) {
            return t = k(t),
                function (e, t) {
                    if (t && ("object" == h(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, j() ? Reflect.construct(t, n || [], k(e).constructor) : t.apply(e, n))
        }
        function j() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (j = function () {
                return !!e
            }
            )()
        }
        function k(e) {
            return k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                k(e)
        }
        function N(e, t) {
            return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                N(e, t)
        }
        const x = function (e) {
            function t(e) {
                var n, r, o, a, i, c, s, u, d;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (d = C(this, t, [e])).state = {
                        listItems: [],
                        error: !1,
                        dataComponentName: "Case Study List",
                        dataComponentId: "case_study_list",
                        selectedID: {},
                        filteredData: {},
                        selectedValueObj: {},
                        filterTermsAnalytics: "",
                        pageNo: 1,
                        loadMoreVisible: !1,
                        currentArticleCount: 0,
                        initialArticleData: "",
                        showLeafLoader: !1
                    },
                    d.handleRemove = d.handleRemove.bind(d),
                    d.handleValueChange = d.handleValueChange.bind(d),
                    d.handleClear = d.handleClear.bind(d),
                    d.handleSelectedKey = d.handleSelectedKey.bind(d),
                    d.filterApiCall = d.filterApiCall.bind(d),
                    d.loadMore = d.loadMore.bind(d),
                    d.redirectLocation = d.redirectLocation.bind(d),
                    d.pagedata = (0,
                        l.Ui)(null === (n = d.props) || void 0 === n || null === (r = n.content) || void 0 === r ? void 0 : r.pagedata),
                    d.caseStudyTotalCount = parseInt(null === (o = d) || void 0 === o || null === (a = o.props) || void 0 === a || null === (i = a.content) || void 0 === i ? void 0 : i.caseStudyTotalCount),
                    d.caseStudyNode = (null === (c = d) || void 0 === c || null === (s = c.props) || void 0 === s || null === (u = s.content) || void 0 === u ? void 0 : u.caseStudyNode) || void 0,
                    d
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
                    t && N(e, t)
            }(t, e),
                n = t,
                o = [{
                    key: "filterApiCall",
                    value: function (e, t, n) {
                        var r = this;
                        if (!(this.caseStudyNode && e && n))
                            throw new Error("API request blocked.");
                        u().get("/get_filtered_casestudy_articles/".concat(this.caseStudyNode, "/").concat(e, "/").concat(n, "/filtersapplied?").concat(t), {}).then((function (e) {
                            r.setState({
                                filteredData: null == e ? void 0 : e.data
                            })
                        }
                        )).catch((function (e) {
                            console.log("error", e)
                        }
                        ))
                    }
                }, {
                    key: "handleRemove",
                    value: function (e, t, n, r) {
                        var o = this;
                        this.setState((function (t) {
                            var r, o = _({}, t.selectedValueObj);
                            return o[e] = o[e].filter((function (e, t) {
                                return t !== n
                            }
                            )),
                                0 === (null === (r = o[e]) || void 0 === r ? void 0 : r.length) && delete o[e],
                            {
                                selectedValueObj: o
                            }
                        }
                        )),
                            this.setState((function (t) {
                                var r = _({}, t.selectedID);
                                return r[e] = r[e].filter((function (e, t) {
                                    return t !== n
                                }
                                )),
                                {
                                    selectedID: r
                                }
                            }
                            )),
                            this.setState((function (e) {
                                var t = Object.entries(e.selectedID).map((function (e) {
                                    var t = y(e, 2)
                                        , n = t[0]
                                        , r = t[1];
                                    return "".concat(n.replace(l.Bz, "").toLowerCase(), "=").concat(r.join(","))
                                }
                                )).join("&");
                                return {
                                    queryString: t
                                }
                            }
                            ), (function () {
                                var e;
                                o.state.selectedValueObj && 0 == (null === (e = Object.keys(o.state.selectedValueObj)) || void 0 === e ? void 0 : e.length) && o.state.selectedValueObj.constructor === Object ? o.resetCaseStudy() : o.filterApiCall("1", o.state.queryString, r)
                            }
                            ))
                    }
                }, {
                    key: "handleSelectedKey",
                    value: function (e, t) {
                        this.setState((function (n) {
                            var r = _({}, null == n ? void 0 : n.selectedID);
                            return r[e] ? (r[e].includes(t) ? (r[e] = r[e].filter((function (e) {
                                return e !== t
                            }
                            )),
                                r[e].length || delete r[e]) : r[e] = [].concat(m(r[e]), [t]),
                            {
                                selectedID: r
                            }) : (r[e] = [t],
                            {
                                selectedID: r
                            })
                        }
                        ))
                    }
                }, {
                    key: "handleSelectedValue",
                    value: function (e, t) {
                        this.setState((function (n) {
                            var r = _({}, null == n ? void 0 : n.selectedValueObj);
                            return r[e] ? (r[e].includes(t) ? (r[e] = r[e].filter((function (e) {
                                return e !== t
                            }
                            )),
                                r[e].length || delete r[e]) : r[e] = [].concat(m(r[e]), [t]),
                            {
                                selectedValueObj: r
                            }) : (r[e] = [t],
                            {
                                selectedValueObj: r
                            })
                        }
                        ))
                    }
                }, {
                    key: "handleValueChange",
                    value: function (e, t, n, r, o) {
                        var a = this;
                        this.handleSelectedKey(n, r),
                            this.handleSelectedValue(n, e),
                            this.setState((function (e) {
                                var t = Object.entries(e.selectedID).map((function (e) {
                                    var t = y(e, 2)
                                        , n = t[0]
                                        , r = t[1];
                                    return "".concat(n.replace(l.Bz, "").toLowerCase(), "=").concat(r.join(","))
                                }
                                )).join("&");
                                return {
                                    queryString: t
                                }
                            }
                            ), (function () {
                                "" == a.state.queryString ? a.resetCaseStudy() : a.filterApiCall("1", a.state.queryString, o)
                            }
                            ));
                        var i = this.state.filterTermsAnalytics + "".concat("" === this.state.filterTermsAnalytics ? "" : ", ").concat(n, "-").concat(e);
                        this.setState({
                            filterTermsAnalytics: i
                        }),
                            (0,
                                l.$)("CTA Link Clicked", "Body|Tab|".concat(i), this.state.dataComponentId, this.state.dataComponentName, !0),
                            this.setState({
                                loadMoreVisible: !1
                            })
                    }
                }, {
                    key: "handleClear",
                    value: function (e) {
                        this.setState({
                            selectedID: {}
                        }),
                            this.setState({
                                selectedValueObj: {}
                            }),
                            this.setState({
                                filterTermsAnalytics: ""
                            }),
                            (0,
                                l.$)("CTA Link Clicked", "Body|Tab|Clear-all", this.state.dataComponentId, this.state.dataComponentName, !0),
                            this.resetCaseStudy()
                    }
                }, {
                    key: "resetCaseStudy",
                    value: function () {
                        var e, t = null === (e = (0,
                            l.Ui)(this.state.initialArticleData)) || void 0 === e ? void 0 : e.length;
                        this.setState({
                            filteredData: this.state.initialArticleData,
                            pageNo: 1,
                            loadMoreVisible: !0,
                            currentArticleCount: t
                        })
                    }
                }, {
                    key: "loadMore",
                    value: function (e) {
                        var t = this
                            , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        if (null == this.caseStudyNode)
                            throw new Error("Node ID is missing. API request blocked.");
                        var r = 1 === this.state.pageNo ? this.state.initialArticleData : this.state.filteredData;
                        this.readMoreCTA(n),
                            this.setState((function (e) {
                                return {
                                    pageNo: e.pageNo + 1,
                                    showLeafLoader: !0
                                }
                            }
                            ));
                        var o = "/load_more?pageNo=".concat(this.state.pageNo, "&contentsPerPage=").concat(e, "&nodeId=").concat(this.caseStudyNode);
                        u().get(o).then((function (e) {
                            t.setState((function (t) {
                                var n;
                                return {
                                    filteredData: _(_({}, r), e.data),
                                    currentArticleCount: t.currentArticleCount + (null == e || null === (n = e.data) || void 0 === n ? void 0 : n.no_of_rows),
                                    showLeafLoader: !1
                                }
                            }
                            ))
                        }
                        )).catch((function (e) {
                            t.setState({
                                showLeafLoader: !1
                            }),
                                console.log("error", e)
                        }
                        ))
                    }
                }, {
                    key: "redirectLocation",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                            , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        if (e) {
                            var n = (0,
                                l.qG)(l.aF, this.state.dataComponentName, 0, "");
                            (0,
                                l.$)("CTA Link Clicked", "".concat(n, "|") + t.replace(/<[^>]+>/g, "").replace(/[^\w\s]/gi, "").replace(/<(?:.|\n)*?>/gm, "").replace(l.Bz, "-").trim(), this.state.dataComponentId, this.state.dataComponentName, !0),
                                window.location.href = e
                        }
                    }
                }, {
                    key: "readMoreCTA",
                    value: function (e) {
                        (0,
                            l.$)("CTA Link Clicked", "Body|CTA|".concat(e), this.props.dataComponentId, this.props.dataComponentName)
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        (0,
                            l.pK)("field_content_list", this.state.dataComponentName)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e, t, n, o, s, u, m, b, g, w, _, O, E, S, C, j, k, N, x, L, P, A, I, T, D, V, M, R, B, H, F, U, q, G, K, z, W, J, Y, X, $, Z, Q, ee, te, ne, re = this, oe = (0,
                            l.Ui)(this.props.content.pagedata), ae = null == this || null === (e = this.props) || void 0 === e || null === (t = e.content) || void 0 === t ? void 0 : t.caseStudyFilter, le = this.props.content && oe.map((function (e) {
                                return e.data
                            }
                            )), ie = (0,
                                l.kJ)(le, "field_content_list"), ce = (0,
                                    l.kJ)(le, "field_read_more_text"), se = (0,
                                        l.kJ)(le, "field_container"), ue = (0,
                                            l.kJ)(le, "field_heading"), de = null !== (n = null == se || null === (o = se.field_container) || void 0 === o || null === (s = o[0]) || void 0 === s || null === (u = s.global_settings) || void 0 === u ? void 0 : u.backround_color) && void 0 !== n ? n : "#fff", fe = (null == ie || null === (m = ie.field_content_list) || void 0 === m ? void 0 : m.contents_per_page) || 4, pe = (0,
                                                l.Ui)(ie.field_content_list), ve = 0 === Object.keys(this.state.filteredData).length ? pe.filter((function (e) {
                                                    return "object" == h(e) && null != e
                                                }
                                                )) : (0,
                                                    l.Ui)(this.state.filteredData), he = ve ? ve.length : 0, me = null !== (b = parseInt(fe)) && void 0 !== b ? b : 4;
                        0 === this.state.currentArticleCount && this.setState({
                            loadMoreVisible: he <= this.caseStudyTotalCount,
                            currentArticleCount: he
                        }),
                            "" == this.state.initialArticleData && this.setState({
                                initialArticleData: ve
                            });
                        var ye = null !== (g = null == ce || null === (w = ce.field_read_more_text) || void 0 === w || null === (_ = w[0]) || void 0 === _ || null === (O = _.value) || void 0 === O ? void 0 : O.replace(/(<([^>]+)>)/gi, "")) && void 0 !== g ? g : "Load more"
                            , be = null !== (E = null === (S = this.props) || void 0 === S || null === (C = S.content) || void 0 === C ? void 0 : C.siteIdentifier) && void 0 !== E ? E : null
                            , ge = ve && 0 != ve[0] ? ve.slice(0, this.state.visible).map((function (e, t) {
                                var n, o, l, i, s, u, d, f, p, v, m, y, b, g, w, _, O, E, S, C, j, k, N, x, L, P, A, I, T, D;
                                if (!e || "object" != h(e))
                                    return null;
                                var V = e.link ? e.link : "/"
                                    , M = null !== (n = null == e || null === (o = e.cs_image) || void 0 === o ? void 0 : o.rel_url) && void 0 !== n ? n : ""
                                    , R = null !== (l = null == e || null === (i = e.cs_image) || void 0 === i ? void 0 : i.webp_image_url) && void 0 !== l ? l : ""
                                    , B = null !== (s = null == e || null === (u = e.cs_image) || void 0 === u || null === (d = u.options) || void 0 === d ? void 0 : d.alt) && void 0 !== s ? s : ""
                                    , H = null !== (f = null == e || null === (p = e.card_title) || void 0 === p || null === (v = p[0]) || void 0 === v ? void 0 : v.value) && void 0 !== f ? f : ""
                                    , F = null !== (m = null == e || null === (y = e.card_desc) || void 0 === y || null === (b = y[0]) || void 0 === b ? void 0 : b.value) && void 0 !== m ? m : ""
                                    , U = !!(null != e && e.hover_detils && (null == e || null === (g = e.hover_detils) || void 0 === g || null === (w = g.value) || void 0 === w ? void 0 : w.length) > 0 && (null != e && null !== (_ = e.hover_detils) && void 0 !== _ && null !== (O = _.value) && void 0 !== O && null !== (E = O[0]) && void 0 !== E && E.field_cs_stats || null != e && null !== (S = e.hover_detils) && void 0 !== S && null !== (C = S.value) && void 0 !== C && null !== (j = C[1]) && void 0 !== j && j.field_cs_stats));
                                return r.createElement("li", {
                                    className: "".concat(a()["csl-li"], " ").concat(M || R ? a()["csl-has-img"] : "", " ").concat(U ? "csl-has-stat" : ""),
                                    key: t
                                }, r.createElement("div", {
                                    className: a()["csl-item"],
                                    onClick: function () {
                                        return re.redirectLocation(V, H)
                                    }
                                }, r.createElement(c.default, {
                                    pictureClasses: a()["csl-item-img"],
                                    webpUrl: R,
                                    fallbackImgUrl: M,
                                    alt: B,
                                    fallbackLoadPattern: "lazy"
                                }), r.createElement("div", {
                                    className: a()["csl-item-body-wrapper"]
                                }, r.createElement("div", {
                                    className: a()["csl-item-body"]
                                }, H && r.createElement("h3", {
                                    className: "".concat(a()["csl-item-title"]),
                                    dangerouslySetInnerHTML: {
                                        __html: H
                                    }
                                }), F && r.createElement("div", {
                                    className: "".concat(a()["csl-item-desc"], " l-body-sspro"),
                                    dangerouslySetInnerHTML: {
                                        __html: F
                                    }
                                }), (null == e || null === (k = e.card_tags) || void 0 === k ? void 0 : k.value) && (null === (N = Object.values(null == e || null === (x = e.card_tags) || void 0 === x ? void 0 : x.value)) || void 0 === N ? void 0 : N.length) > 0 && r.createElement("div", {
                                    className: "".concat(a()["csl-item-tags"])
                                }, Object.values(null == e || null === (L = e.card_tags) || void 0 === L ? void 0 : L.value).map((function (e, t) {
                                    return e && r.createElement("span", {
                                        key: "".concat(e, "-").concat(t),
                                        className: a()["csl-item-tag"]
                                    }, e)
                                }
                                )))), U && r.createElement("div", {
                                    className: a()["csl-item-body-hovered"],
                                    style: {
                                        background: null != e && null !== (P = e.hover_bkg_color) && void 0 !== P && null !== (A = P[0]) && void 0 !== A && A.color ? "".concat(null == e || null === (I = e.hover_bkg_color) || void 0 === I || null === (T = I[0]) || void 0 === T ? void 0 : T.color, " linear-gradient(215deg, rgba(22, 15, 65, 0.40) 33.3%, rgba(0, 0, 0, 0.00) 77.83%") : void 0
                                    }
                                }, Object.values(null == e || null === (D = e.hover_detils) || void 0 === D ? void 0 : D.value).map((function (e) {
                                    var t, n, o;
                                    return e && e.field_cs_stats ? r.createElement("div", {
                                        className: a()["csl-item-stat-container"]
                                    }, (null == e ? void 0 : e.field_dropdown_arrow) && r.createElement("span", {
                                        className: "".concat(a()["arrow-up"], " ").concat("down_arrow" == e.field_dropdown_arrow ? a()["arrow-down"] : ""),
                                        style: {
                                            borderBottomColor: null !== (t = null == e ? void 0 : e.field_cs_dropdown_arrow_color) && void 0 !== t ? t : void 0
                                        }
                                    }), r.createElement("h4", {
                                        className: "".concat(a()["csl-item-stat-val"], " xxl-head-ptserif"),
                                        style: {
                                            color: null !== (n = null == e ? void 0 : e.field_cs_stats_color) && void 0 !== n ? n : void 0
                                        }
                                    }, null == e ? void 0 : e.field_cs_stats), r.createElement("p", {
                                        className: "".concat(a()["csl-item-stat-desc"]),
                                        style: {
                                            color: null !== (o = null == e ? void 0 : e.field_cs_descptions_color) && void 0 !== o ? o : void 0
                                        }
                                    }, null == e ? void 0 : e.field_cs_descptions)) : null
                                }
                                ))))))
                            }
                            )) : r.createElement("div", {
                                className: a()["no-results"]
                            }, r.createElement("h3", null, "There are no results"), r.createElement("p", null, "Try filtering with different options."))
                            , we = null !== (j = null == se || null === (k = se.field_container) || void 0 === k || null === (N = k[0]) || void 0 === N ? void 0 : N.global_settings) && void 0 !== j ? j : null
                            , _e = null !== (x = null == ue || null === (L = ue.field_heading) || void 0 === L || null === (P = L[0]) || void 0 === P ? void 0 : P.global_heading) && void 0 !== x ? x : null
                            , Oe = {}
                            , Ee = null !== (A = null == we || null === (I = we.container) || void 0 === I ? void 0 : I.container_width) && void 0 !== A ? A : "1080px"
                            , Se = null !== (T = null == we || null === (D = we.container) || void 0 === D ? void 0 : D.padding_top) && void 0 !== T ? T : ""
                            , Ce = null !== (V = null == we || null === (M = we.container) || void 0 === M ? void 0 : M.padding_bottom) && void 0 !== V ? V : "";
                        Se && (Oe.paddingTop = Se),
                            Ce && (Oe.paddingBottom = Ce),
                            Ee && (Oe.maxWidth = Ee);
                        var je = !!parseInt(null == we || null === (R = we.divider) || void 0 === R ? void 0 : R.enable_top_divider)
                            , ke = !!parseInt(null == we || null === (B = we.divider) || void 0 === B ? void 0 : B.enable_bottom_divider)
                            , Ne = "1px solid ".concat((null == we || null === (H = we.divider) || void 0 === H ? void 0 : H.divider_color) || "#d8d8d8")
                            , xe = null !== (F = null == _e || null === (U = _e.heading) || void 0 === U ? void 0 : U.headline) && void 0 !== F ? F : ""
                            , Le = null !== (q = null == _e || null === (G = _e.heading) || void 0 === G ? void 0 : G.headline_text_color) && void 0 !== q ? q : ""
                            , Pe = null !== (K = null == _e || null === (z = _e.sub_heading) || void 0 === z ? void 0 : z.sub_headline) && void 0 !== K ? K : ""
                            , Ae = null !== (W = null == _e || null === (J = _e.sub_heading) || void 0 === J ? void 0 : J.sub_headline_text_color) && void 0 !== W ? W : ""
                            , Ie = !!parseInt(null == _e || null === (Y = _e.sub_heading) || void 0 === Y ? void 0 : Y.sub_headline_enable_divider)
                            , Te = null !== (X = null == _e || null === ($ = _e.paragraph) || void 0 === $ ? void 0 : $.paragraph_text) && void 0 !== X ? X : ""
                            , De = null !== (Z = null == _e || null === (Q = _e.paragraph) || void 0 === Q ? void 0 : Q.paragraph_color) && void 0 !== Z ? Z : ""
                            , Ve = (null == _e || null === (ee = _e.heading) || void 0 === ee ? void 0 : ee.headline_type) || "s-head"
                            , Me = (null == _e || null === (te = _e.sub_heading) || void 0 === te ? void 0 : te.sub_headline_type) || "s-sub"
                            , Re = (null == _e || null === (ne = _e.paragraph) || void 0 === ne ? void 0 : ne.paragraph_type) || "m-body"
                            , Be = {
                                style: Oe
                            }
                            , He = Object.values(this.state.selectedValueObj).flat().length
                            , Fe = Object.values(this.state.selectedValueObj).flat()
                            , Ue = Object.values(ae).map((function (e, t) {
                                var n = [];
                                Object.keys(e).forEach((function (e) {
                                    n.push(e)
                                }
                                ));
                                var o = []
                                    , a = Object.values(e).map((function (e, t) {
                                        var n, r = null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : "";
                                        o.push(r)
                                    }
                                    ));
                                return a = a.slice(0, a.length - 1),
                                    r.createElement(r.Fragment, null, r.createElement(p.default, {
                                        contentsPerPage: fe,
                                        index: t,
                                        filteritems: e,
                                        valueIdArray: n,
                                        optionArray: o,
                                        handleValueChange: re.handleValueChange,
                                        selectedValueObjArray: Fe
                                    }))
                            }
                            ));
                        return r.createElement("section", {
                            className: "".concat(a()["csl-wrapper"], " component-order"),
                            "data-componentname": this.state.dataComponentName,
                            style: {
                                backgroundColor: de
                            }
                        }, r.createElement(d.default, {
                            visibility: je,
                            borderStyle: Ne
                        }), r.createElement("div", v({
                            className: "".concat(a()["csl-container"])
                        }, Be), r.createElement(i.default, {
                            containerSize: "standard",
                            siteId: be,
                            heading: xe,
                            headingColor: Le,
                            subHeading: Pe,
                            subHeadingColor: Ae,
                            dividerVisibility: Ie,
                            dividerColor: "#4e2d82",
                            paragraph: Te,
                            paragraphColor: De,
                            setParagraphHtml: !0,
                            headingType: Ve,
                            subHeadingType: Me,
                            paragraphType: Re
                        }), r.createElement("div", {
                            className: a()["csl-filter-wrapper"]
                        }, r.createElement("span", {
                            className: a()["csl-select-wrapper"]
                        }, Ue), Object.keys(this.state.selectedID).length > 0 && r.createElement("span", {
                            className: a()["csl-selected-filter"],
                            style: {
                                borderTop: He > 0 && "1px solid var(--purple-int-50 )"
                            }
                        }, Object.entries(this.state.selectedValueObj).map((function (e) {
                            var t = y(e, 2)
                                , n = t[0];
                            return t[1].map((function (e, t) {
                                return r.createElement("span", {
                                    className: a()["csl-selected-filter-items"],
                                    key: e
                                }, e, r.createElement("svg", {
                                    onClick: function () {
                                        return re.handleRemove(n, e, t, fe)
                                    },
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 14 14",
                                    fill: "none"
                                }, r.createElement("path", {
                                    d: "M13 1L1 13",
                                    stroke: "#4E2D82",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round"
                                }), r.createElement("path", {
                                    d: "M1 1L13 13",
                                    stroke: "#4E2D82",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round"
                                })))
                            }
                            ))
                        }
                        )), He > 0 && r.createElement("span", {
                            className: a()["csl-selected-extra"]
                        }, r.createElement("span", {
                            onClick: function () {
                                return re.handleClear(fe)
                            }
                        }, "Clear all"), r.createElement("span", {
                            className: a()["csl-selected-filter-no"]
                        }, ve.length - 2 + " Results")))), r.createElement("ul", {
                            className: a()["csl-list"]
                        }, ge), this.state.loadMoreVisible && r.createElement("div", {
                            className: "".concat(a()["csl-footer"])
                        }, this.state.currentArticleCount != this.caseStudyTotalCount && !this.state.showLeafLoader && r.createElement("a", {
                            id: "g_cta",
                            onClick: function () {
                                return re.loadMore(me, ye)
                            },
                            href: "javascript:void(0)",
                            className: "secondary-dark-v2"
                        }, ye), r.createElement("div", {
                            className: a()["loader-leaf-wrapper"],
                            style: {
                                display: this.state.showLeafLoader ? "flex" : "none"
                            }
                        }, r.createElement(f.default, null)), r.createElement("p", {
                            className: "".concat(a()["csl-item-count"])
                        }, "Showing ", this.state.currentArticleCount, " ", " ", " of ", this.caseStudyTotalCount))), r.createElement(d.default, {
                            visibility: ke,
                            borderStyle: Ne
                        }))
                    }
                }],
                o && E(n.prototype, o),
                Object.defineProperty(n, "prototype", {
                    writable: !1
                }),
                n;
            var n, o
        }(r.Component)
    }
    ,
    47653: (e, t, n) => {
        "use strict";
        n.r(t),
            n.d(t, {
                default: () => c
            });
        var r = n(96540);
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
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    n.push.apply(n, r)
            }
            return n
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach((function (t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function i(e, t, n) {
            return (t = function (e) {
                var t = function (e, t) {
                    if ("object" != o(e) || !e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, "string");
                        if ("object" != o(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == o(t) ? t : t + ""
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function c(e) {
            var t = e.visibility
                , n = void 0 !== t && t
                , o = e.borderStyle
                , a = e.style;
            if (!n)
                return null;
            var i = {
                style: l({
                    margin: " 0 auto",
                    borderRight: "0",
                    borderLeft: "0",
                    borderBottom: "0",
                    borderTop: o || "1px solid #d8d8d8",
                    maxWidth: "896px",
                    width: "calc(100% - 60px)",
                    minWidth: "315px"
                }, void 0 === a ? {} : a)
            };
            return r.createElement(r.Fragment, null, n && r.createElement("hr", i))
        }
    }
    ,
    9987: (e, t, n) => {
        "use strict";
        n.r(t),
            n.d(t, {
                default: () => c
            });
        var r = n(96540)
            , o = n(79643)
            , a = n.n(o)
            , l = n(61038);
        function i() {
            return i = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
                ,
                i.apply(null, arguments)
        }
        const c = function (e) {
            var t = e.containerSize
                , n = e.heading
                , o = e.headingColor
                , c = e.headingType
                , s = e.subHeadingType
                , u = e.paragraphType
                , d = e.headingSize
                , f = e.paragraph
                , p = e.paragraphColor
                , v = e.paragraphFontSize
                , h = e.subHeading
                , m = e.subHeadingSize
                , y = e.subHeadingColor
                , b = e.dividerVisibility
                , g = e.dividerColor
                , w = (e.siteId,
                    e.setParagraphHtml)
                , _ = e.dataComponentName;
            if (!n && !h && !f)
                return null;
            var O, E;
            w = w || !1,
                O = "default" == v ? a()["des-default"] : "large" == v ? a()["des-large"] : a()["des-default"],
                E = "standard" == t ? a().standard : "wide" == t ? a().wide : a().standard;
            var S = o ? {
                style: {
                    color: o
                }
            } : ""
                , C = y ? {
                    style: {
                        color: y
                    }
                } : ""
                , j = p ? {
                    style: {
                        color: p
                    }
                } : ""
                , k = c && c.includes("ptserif") ? c : "".concat(c, "-sspro")
                , N = r.createElement("h2", i({
                    className: k
                }, S), n);
            N = d && "Awards Card" === _ ? '<h2 style="color:'.concat(o, '" class="').concat(a()["title-" + d], " ").concat(k, '">') + n + "</h2>" : N,
                N = "Case Studies Banner" === _ ? '<h1 style="color:'.concat(o, '" class="').concat(c, '-ptserif">').concat(n, "</h1>") : N,
                N = "Recommended Content" === _ ? r.createElement("h2", i({
                    className: "".concat(c, "-sspro")
                }, S), (0,
                    l.tP)(n)) : N;
            var x = {};
            g && (x.borderColor = g),
                x.order = n && h ? 0 : 1;
            var L = {
                style: x
            };
            return r.createElement("div", {
                className: "".concat(a()["globalhead-wrap"], " ").concat("globalhead-wrap--" + a()["globalhead-wrap"], " ").concat(E)
            }, h ? "Awards Card" == _ && m ? "heading-1" === m ? r.createElement("h1", i({
                className: "".concat(a().g_subtitle, " ").concat(s, "-sspro")
            }, C), h) : r.createElement("p", i({
                className: "".concat(a().g_subtitle, " ").concat(m, " ").concat(s, "-sspro")
            }, C), h) : r.createElement("h4", i({}, C, {
                className: "".concat(s, "-sspro")
            }), h) : null, b && (n || h) ? r.createElement("span", i({
                className: a().divider
            }, L)) : null, n ? "Awards Card" === _ && d || "Case Studies Banner" === _ ? r.createElement("div", i({}, S, {
                dangerouslySetInnerHTML: {
                    __html: N
                }
            })) : N : null, w && f ? r.createElement("div", i({}, j, {
                className: "para-sm ".concat(O, " ").concat(u, "-sspro"),
                dangerouslySetInnerHTML: {
                    __html: f
                }
            })) : null, !w && f ? r.createElement("p", i({}, j, {
                className: "para-sm ".concat(O, " ").concat(u, "-sspro")
            }), f) : null)
        }
    }
    ,
    38709: (e, t, n) => {
        "use strict";
        n.r(t),
            n.d(t, {
                default: () => h
            });
        var r = n(96540);
        const o = n.p + "bd7da27135b249297cf9.svg"
            , a = n.p + "5c1e584fab3874d6652c.svg";
        var l = n(26925)
            , i = n.n(l);
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
        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, u(r.key), r)
            }
        }
        function u(e) {
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
        function d(e, t, n) {
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
                }(e, f() ? Reflect.construct(t, n || [], p(e).constructor) : t.apply(e, n))
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
        function p(e) {
            return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                p(e)
        }
        function v(e, t) {
            return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                v(e, t)
        }
        const h = function (e) {
            function t(e) {
                var n;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    (n = d(this, t, [e])).state = {
                        activeIndex: -1
                    },
                    n.dropdownRef = r.createRef(),
                    n.handleClickOutside = n.handleClickOutside.bind(n),
                    n.handleClick = n.handleClick.bind(n),
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
                l = [{
                    key: "handleClick",
                    value: function (e, t) {
                        this.setState((function (e) {
                            return {
                                activeIndex: e.activeIndex === t ? -1 : t
                            }
                        }
                        ))
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        document.addEventListener("click", this.handleClickOutside)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        document.removeEventListener("click", this.handleClickOutside)
                    }
                }, {
                    key: "handleClickOutside",
                    value: function (e) {
                        var t, n = (null == e || null === (t = e.target) || void 0 === t ? void 0 : t.classList.contains("select-dropdown")) || (null == e ? void 0 : e.target.closest(".select-dropdown"));
                        !this.dropdownRef.current || this.dropdownRef.current.contains(e.target) || n || this.setState({
                            activeIndex: -1
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this
                            , t = this.props
                            , n = t.contentsPerPage
                            , l = t.index
                            , c = t.filteritems
                            , s = t.valueIdArray
                            , u = t.optionArray
                            , d = t.handleValueChange
                            , f = t.selectedValueObjArray;
                        return r.createElement(r.Fragment, null, r.createElement("span", {
                            className: "".concat(i()["csl-select-header"], " ")
                        }, r.createElement("span", {
                            ref: this.dropdownRef,
                            className: "".concat(i()["csl-select"], "  ").concat(this.state.activeIndex === l ? i()["csl-select-open"] : "select-dropdown"),
                            onClick: function (t) {
                                return e.handleClick(t, l)
                            }
                        }, r.createElement("span", null, null == c ? void 0 : c.name), this.state.activeIndex === l ? r.createElement("img", {
                            src: a,
                            alt: "",
                            height: 24,
                            width: 24
                        }) : r.createElement("img", {
                            src: o,
                            alt: "",
                            height: 24,
                            width: 24
                        })), this.state.activeIndex === l && r.createElement("span", {
                            className: "".concat(i()["csl-select-dropdown"], " select-dropdown")
                        }, Object.values(c).map((function (e, t) {
                            return r.createElement("span", {
                                className: "".concat(i()["csl-select-dropdown-items"]),
                                key: t,
                                onClick: (null == e ? void 0 : e.name) && function () {
                                    return d(u[t], t, null == c ? void 0 : c.name, s[t], n)
                                }
                            }, (null == e ? void 0 : e.name) && r.createElement("span", {
                                style: {
                                    border: null != f && f.includes(null == e ? void 0 : e.name) ? "1px solid #622FB4" : "1px solid #6D6E6F"
                                },
                                className: "".concat(i()["csl-checkbox"], " select-dropdown")
                            }, (null == f ? void 0 : f.includes(null == e ? void 0 : e.name)) && r.createElement("svg", {
                                className: "select-dropdown",
                                height: "50%",
                                width: "50%",
                                fill: "none",
                                viewBox: "0 0 16 12",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, r.createElement("path", {
                                d: "M15.1055 0.644531C15.5371 1.04297 15.5371 1.74023 15.1055 2.13867L6.60547 10.6387C6.20703 11.0703 5.50977 11.0703 5.11133 10.6387L0.861328 6.38867C0.429688 5.99023 0.429688 5.29297 0.861328 4.89453C1.25977 4.46289 1.95703 4.46289 2.35547 4.89453L5.875 8.38086L13.6113 0.644531C14.0098 0.212891 14.707 0.212891 15.1055 0.644531Z",
                                fill: "#160F41"
                            }))), r.createElement("span", {
                                className: "".concat(i()["csl-name"])
                            }, null == e ? void 0 : e.name))
                        }
                        )))))
                    }
                }],
                l && s(n.prototype, l),
                Object.defineProperty(n, "prototype", {
                    writable: !1
                }),
                n;
            var n, l
        }(r.Component)
    }
    ,
    82746: (e, t, n) => {
        "use strict";
        n.r(t),
            n.d(t, {
                default: () => w
            });
        var r = n(96540)
            , o = n(63662)
            , a = n(93906);
        const l = n.p + "c0479317c4209b5010db.svg"
            , i = n.p + "5777b790e39cd1582ec3.svg";
        var c = n(57311)
            , s = n.n(c)
            , u = n(5612)
            , d = n(29571)
            , f = n(56979)
            , p = n(58363);
        function v(e) {
            return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                v(e)
        }
        function h() {
            h = function () {
                return t
            }
                ;
            var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, o = Object.defineProperty || function (e, t, n) {
                e[t] = n.value
            }
                , a = "function" == typeof Symbol ? Symbol : {}, l = a.iterator || "@@iterator", i = a.asyncIterator || "@@asyncIterator", c = a.toStringTag || "@@toStringTag";
            function s(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                    e[t]
            }
            try {
                s({}, "")
            } catch (e) {
                s = function (e, t, n) {
                    return e[t] = n
                }
            }
            function u(e, t, n, r) {
                var a = t && t.prototype instanceof g ? t : g
                    , l = Object.create(a.prototype)
                    , i = new A(r || []);
                return o(l, "_invoke", {
                    value: N(e, n, i)
                }),
                    l
            }
            function d(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = u;
            var f = "suspendedStart"
                , p = "suspendedYield"
                , m = "executing"
                , y = "completed"
                , b = {};
            function g() { }
            function w() { }
            function _() { }
            var O = {};
            s(O, l, (function () {
                return this
            }
            ));
            var E = Object.getPrototypeOf
                , S = E && E(E(I([])));
            S && S !== n && r.call(S, l) && (O = S);
            var C = _.prototype = g.prototype = Object.create(O);
            function j(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    s(e, t, (function (e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function k(e, t) {
                function n(o, a, l, i) {
                    var c = d(e[o], e, a);
                    if ("throw" !== c.type) {
                        var s = c.arg
                            , u = s.value;
                        return u && "object" == v(u) && r.call(u, "__await") ? t.resolve(u.__await).then((function (e) {
                            n("next", e, l, i)
                        }
                        ), (function (e) {
                            n("throw", e, l, i)
                        }
                        )) : t.resolve(u).then((function (e) {
                            s.value = e,
                                l(s)
                        }
                        ), (function (e) {
                            return n("throw", e, l, i)
                        }
                        ))
                    }
                    i(c.arg)
                }
                var a;
                o(this, "_invoke", {
                    value: function (e, r) {
                        function o() {
                            return new t((function (t, o) {
                                n(e, r, t, o)
                            }
                            ))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }
            function N(t, n, r) {
                var o = f;
                return function (a, l) {
                    if (o === m)
                        throw Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === a)
                            throw l;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (r.method = a,
                        r.arg = l; ;) {
                        var i = r.delegate;
                        if (i) {
                            var c = x(i, r);
                            if (c) {
                                if (c === b)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === r.method)
                            r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === f)
                                throw o = y,
                                r.arg;
                            r.dispatchException(r.arg)
                        } else
                            "return" === r.method && r.abrupt("return", r.arg);
                        o = m;
                        var s = d(t, n, r);
                        if ("normal" === s.type) {
                            if (o = r.done ? y : p,
                                s.arg === b)
                                continue;
                            return {
                                value: s.arg,
                                done: r.done
                            }
                        }
                        "throw" === s.type && (o = y,
                            r.method = "throw",
                            r.arg = s.arg)
                    }
                }
            }
            function x(t, n) {
                var r = n.method
                    , o = t.iterator[r];
                if (o === e)
                    return n.delegate = null,
                        "throw" === r && t.iterator.return && (n.method = "return",
                            n.arg = e,
                            x(t, n),
                            "throw" === n.method) || "return" !== r && (n.method = "throw",
                                n.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                        b;
                var a = d(o, t.iterator, n.arg);
                if ("throw" === a.type)
                    return n.method = "throw",
                        n.arg = a.arg,
                        n.delegate = null,
                        b;
                var l = a.arg;
                return l ? l.done ? (n[t.resultName] = l.value,
                    n.next = t.nextLoc,
                    "return" !== n.method && (n.method = "next",
                        n.arg = e),
                    n.delegate = null,
                    b) : l : (n.method = "throw",
                        n.arg = new TypeError("iterator result is not an object"),
                        n.delegate = null,
                        b)
            }
            function L(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                    2 in e && (t.finallyLoc = e[2],
                        t.afterLoc = e[3]),
                    this.tryEntries.push(t)
            }
            function P(e) {
                var t = e.completion || {};
                t.type = "normal",
                    delete t.arg,
                    e.completion = t
            }
            function A(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                    e.forEach(L, this),
                    this.reset(!0)
            }
            function I(t) {
                if (t || "" === t) {
                    var n = t[l];
                    if (n)
                        return n.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var o = -1
                            , a = function n() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o))
                                        return n.value = t[o],
                                            n.done = !1,
                                            n;
                                return n.value = e,
                                    n.done = !0,
                                    n
                            };
                        return a.next = a
                    }
                }
                throw new TypeError(v(t) + " is not iterable")
            }
            return w.prototype = _,
                o(C, "constructor", {
                    value: _,
                    configurable: !0
                }),
                o(_, "constructor", {
                    value: w,
                    configurable: !0
                }),
                w.displayName = s(_, c, "GeneratorFunction"),
                t.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === w || "GeneratorFunction" === (t.displayName || t.name))
                }
                ,
                t.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _,
                        s(e, c, "GeneratorFunction")),
                        e.prototype = Object.create(C),
                        e
                }
                ,
                t.awrap = function (e) {
                    return {
                        __await: e
                    }
                }
                ,
                j(k.prototype),
                s(k.prototype, i, (function () {
                    return this
                }
                )),
                t.AsyncIterator = k,
                t.async = function (e, n, r, o, a) {
                    void 0 === a && (a = Promise);
                    var l = new k(u(e, n, r, o), a);
                    return t.isGeneratorFunction(n) ? l : l.next().then((function (e) {
                        return e.done ? e.value : l.next()
                    }
                    ))
                }
                ,
                j(C),
                s(C, c, "Generator"),
                s(C, l, (function () {
                    return this
                }
                )),
                s(C, "toString", (function () {
                    return "[object Generator]"
                }
                )),
                t.keys = function (e) {
                    var t = Object(e)
                        , n = [];
                    for (var r in t)
                        n.push(r);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in t)
                                    return e.value = r,
                                        e.done = !1,
                                        e
                            }
                            return e.done = !0,
                                e
                        }
                }
                ,
                t.values = I,
                A.prototype = {
                    constructor: A,
                    reset: function (t) {
                        if (this.prev = 0,
                            this.next = 0,
                            this.sent = this._sent = e,
                            this.done = !1,
                            this.delegate = null,
                            this.method = "next",
                            this.arg = e,
                            this.tryEntries.forEach(P),
                            !t)
                            for (var n in this)
                                "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type)
                            throw e.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done)
                            throw t;
                        var n = this;
                        function o(r, o) {
                            return i.type = "throw",
                                i.arg = t,
                                n.next = r,
                                o && (n.method = "next",
                                    n.arg = e),
                                !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var l = this.tryEntries[a]
                                , i = l.completion;
                            if ("root" === l.tryLoc)
                                return o("end");
                            if (l.tryLoc <= this.prev) {
                                var c = r.call(l, "catchLoc")
                                    , s = r.call(l, "finallyLoc");
                                if (c && s) {
                                    if (this.prev < l.catchLoc)
                                        return o(l.catchLoc, !0);
                                    if (this.prev < l.finallyLoc)
                                        return o(l.finallyLoc)
                                } else if (c) {
                                    if (this.prev < l.catchLoc)
                                        return o(l.catchLoc, !0)
                                } else {
                                    if (!s)
                                        throw Error("try statement without catch or finally");
                                    if (this.prev < l.finallyLoc)
                                        return o(l.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var l = a ? a.completion : {};
                        return l.type = e,
                            l.arg = t,
                            a ? (this.method = "next",
                                this.next = a.finallyLoc,
                                b) : this.complete(l)
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type)
                            throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                            this.method = "return",
                            this.next = "end") : "normal" === e.type && t && (this.next = t),
                            b
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e)
                                return this.complete(n.completion, n.afterLoc),
                                    P(n),
                                    b
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    P(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function (t, n, r) {
                        return this.delegate = {
                            iterator: I(t),
                            resultName: n,
                            nextLoc: r
                        },
                            "next" === this.method && (this.arg = e),
                            b
                    }
                },
                t
        }
        function m(e, t, n, r, o, a, l) {
            try {
                var i = e[a](l)
                    , c = i.value
            } catch (e) {
                return void n(e)
            }
            i.done ? t(c) : Promise.resolve(c).then(r, o)
        }
        function y(e) {
            return function () {
                var t = this
                    , n = arguments;
                return new Promise((function (r, o) {
                    var a = e.apply(t, n);
                    function l(e) {
                        m(a, r, o, l, i, "next", e)
                    }
                    function i(e) {
                        m(a, r, o, l, i, "throw", e)
                    }
                    l(void 0)
                }
                ))
            }
        }
        function b(e, t) {
            return function (e) {
                if (Array.isArray(e))
                    return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, a, l, i = [], c = !0, s = !1;
                    try {
                        if (a = (n = n.call(e)).next,
                            0 === t) {
                            if (Object(n) !== n)
                                return;
                            c = !1
                        } else
                            for (; !(c = (r = a.call(n)).done) && (i.push(r.value),
                                i.length !== t); c = !0)
                                ;
                    } catch (e) {
                        s = !0,
                            o = e
                    } finally {
                        try {
                            if (!c && null != n.return && (l = n.return(),
                                Object(l) !== l))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || function (e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return g(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0
                }
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function g(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        const w = function (e) {
            var t = e.itemContent
                , n = e.onChange
                , c = e.value
                , v = b((0,
                    r.useState)(!1), 2)
                , m = v[0]
                , g = v[1]
                , w = b((0,
                    r.useState)(!1), 2)
                , _ = w[0]
                , O = w[1]
                , E = b((0,
                    r.useState)(0), 2)
                , S = E[0]
                , C = E[1]
                , j = b((0,
                    r.useState)(0), 2)
                , k = j[0]
                , N = j[1]
                , x = t.label
                , L = t.name
                , P = t.options
                , A = t.placeholder
                , I = t.isTabbedBenefits
                , T = L.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "")
                , D = "select-input-".concat(T)
                , V = "".concat(D, "-label")
                , M = "".concat(D, "-list")
                , R = function () {
                    var e = y(h().mark((function e() {
                        var t, n, r, o, a, l, i, c;
                        return h().wrap((function (e) {
                            for (; ;)
                                switch (e.prev = e.next) {
                                    case 0:
                                        t = document.querySelector("#".concat(D)),
                                            n = document.querySelector("#".concat(M)).clientHeight,
                                            r = t.getBoundingClientRect().bottom,
                                            o = window.innerHeight,
                                            O(a = r >= o - n - 16),
                                            n = n > 220 ? 220 : n,
                                            l = a ? t.getBoundingClientRect().top - n - 2 : t.getBoundingClientRect().bottom,
                                            C(l),
                                            i = t.clientWidth,
                                            c = t.getBoundingClientRect().left + i / 2 + 2,
                                            N(c);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }();
            return r.createElement(u.A, {
                className: "".concat(s()["select-component-wrapper"], " ").concat(c && s()["has-selection"], " ").concat(m && s()["is-open"], " ").concat(_ && s()["open-upwards"], " ").concat(I && s()["tabbed-benefits"]),
                sx: {
                    m: 1,
                    minWidth: 120
                },
                size: "small"
            }, x && r.createElement(d.A, {
                className: s()["select-input-label"],
                id: V,
                shrink: !1
            }, x || ""), r.createElement(f.A, {
                id: D,
                displayEmpty: !0,
                IconComponent: function () {
                    return c ? r.createElement("img", {
                        className: s()["custom-select-icon"],
                        src: m ? l : i
                    }) : r.createElement("img", {
                        className: s()["custom-select-icon"],
                        src: m ? o : a
                    })
                },
                label: x || "",
                labelId: V,
                onClose: function () {
                    return g(!1)
                },
                onOpen: y(h().mark((function e() {
                    return h().wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                        g(!0);
                                case 2:
                                    R();
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                onChange: function (e) {
                    var t;
                    n && n(null === (t = e.target) || void 0 === t ? void 0 : t.value)
                },
                value: c,
                renderValue: function (e) {
                    return e ? (null == P ? void 0 : P.find((function (e) {
                        return e.value === c
                    }
                    ))).name : A
                },
                MenuProps: {
                    anchorReference: "anchorPosition",
                    anchorPosition: {
                        top: S,
                        left: k
                    },
                    anchorOrigin: {
                        horizontal: "left",
                        vertical: "".concat(_ ? "top" : "bottom")
                    },
                    classes: {
                        paper: "".concat(s()["select-list"], " ").concat(_ && s()["open-upwards"])
                    },
                    MenuListProps: {
                        id: M
                    }
                }
            }, (null == P ? void 0 : P.length) && P.map((function (e) {
                return r.createElement(p.A, {
                    value: e.value,
                    key: e.name
                }, e.name)
            }
            ))))
        }
    }
    ,
    14955: (e, t, n) => {
        "use strict";
        n.r(t),
            n.d(t, {
                default: () => o
            });
        var r = n(96540);
        const o = function (e) {
            var t = e.webpUrl
                , n = void 0 === t ? "" : t
                , o = e.fallbackImgUrl
                , a = void 0 === o ? "" : o
                , l = e.pictureClasses
                , i = void 0 === l ? void 0 : l
                , c = e.imageType
                , s = void 0 === c ? "" : c
                , u = e.alt
                , d = void 0 === u ? "" : u
                , f = e.fallbackLoadPattern
                , p = void 0 === f ? "eager" : f
                , v = e.children;
            return n || a ? r.createElement("picture", {
                className: i
            }, v, n && r.createElement("source", {
                srcSet: "".concat(n),
                type: "image/webp"
            }), r.createElement("source", {
                srcSet: a,
                type: s
            }), r.createElement("img", {
                loading: p,
                src: a,
                alt: d
            })) : null
        }
    }
    ,
    99961: e => {
        e.exports = {
            "inherit-parent-typo": "B8_dp",
            "csl-select-wrapper": "Pn9nl",
            "csl-filter-wrapper": "yCkjg",
            "csl-filters": "Juuaf",
            "csl-selected-filter": "ex6J2",
            "csl-selected-filter-items": "m7Vdm",
            "csl-selected-filter-no": "IYJ33",
            "csl-selected-extra": "ConGq",
            "csl-container": "iy8ay",
            "csl-wrapper": "RZOP9",
            "csl-list": "MKrIb",
            "csl-li": "WyhX9",
            "csl-item": "Oapwl",
            "csl-has-img": "h1YBi",
            "csl-item-img": "fuyxm",
            "csl-item-body-wrapper": "Y9jgX",
            "csl-item-body": "xP7aX",
            "csl-item-body-hovered": "S1TrD",
            "csl-item-stat-container": "EoHES",
            "csl-item-stat-val": "bociw",
            "csl-item-stat-desc": "lDu8n",
            "csl-item-title": "T_rMm",
            "csl-item-desc": "GZM4v",
            "csl-item-tags": "JdWLQ",
            "csl-item-tag": "bKy4y",
            "csl-item-count": "TSOPA",
            "csl-footer": "LiCI2",
            "no-results": "d0VVV",
            "arrow-up": "gvna7",
            "arrow-down": "Fwtwa",
            "loader-leaf-wrapper": "WprQN"
        }
    }
    ,
    26925: e => {
        e.exports = {
            "inherit-parent-typo": "RsmdJ",
            "csl-select-header": "fIyeM",
            "csl-select": "FHSRN",
            "csl-select-open": "RCF4h",
            "csl-select-dropdown": "Paqia",
            "csl-select-dropdown-items": "YwONR",
            "csl-checkbox": "h4VqE"
        }
    }
    ,
    79643: e => {
        e.exports = {
            "inherit-parent-typo": "UyAv5",
            "globalhead-wrap": "xZtGs",
            "des-default": "bdaa4",
            "des-large": "cKnkp",
            standard: "hkE6H",
            wide: "OWbXu",
            "title-h1": "BpWm4",
            "title-h2": "KGO3K",
            "title-h3": "EOm2q",
            "title-h4": "spKIE",
            "title-h5": "p_2ky",
            "title-h6": "jbtGI",
            title: "IDMPd",
            divider: "uKbHA",
            g_subtitle: "MUoZn"
        }
    }
    ,
    57311: e => {
        e.exports = {
            "select-component-wrapper": "MdMfE",
            "select-input-label": "Ygg8o",
            "tabbed-benefits": "cHgbE",
            "is-open": "UwRD7",
            "open-upwards": "XL_te",
            "has-selection": "kHXb3",
            "select-list": "Cixd7"
        }
    }
    ,
    93906: (e, t, n) => {
        "use strict";
        e.exports = n.p + "0f24f545923cb892a18d.svg"
    }
    ,
    63662: (e, t, n) => {
        "use strict";
        e.exports = n.p + "a926c2e00d7336cdd0b6.svg"
    }
}]);
