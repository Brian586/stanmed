(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[6484, 5538], {
    80823: (e, t, r) => {
        "use strict";
        r.r(t),
            r.d(t, {
                default: () => u
            });
        var n = r(96540)
            , l = r(61038)
            , o = r(4589)
            , c = r(15327)
            , i = r(76119)
            , a = r.n(i)
            , s = r(47653);
        const u = function (e) {
            var t = e.componentOrder
                , r = e.itemContent
                , i = "suggested_case_study_carousel"
                , u = "Suggested Case Study Carousel"
                , d = r.case_study && Object.values(r.case_study) || []
                , v = (0,
                    n.useRef)({
                        activeSlideIdx: 0,
                        prevScrollPosition: 0,
                        eventFiredOnScroll: {},
                        firstCardCoord: 0,
                        isClicked: !1
                    })
                , m = (0,
                    n.useRef)(null);
            function f() {
                var e = m.current;
                return null != e && e.getElementsByClassName("cs-carousel-card-js") ? Array.from(e.getElementsByClassName("cs-carousel-card-js")) : []
            }
            (0,
                n.useEffect)((function () {
                    var e, t;
                    (0,
                        l.pK)(i, u);
                    var r = f();
                    v.current.firstCardCoord = null == r || null === (e = r[0]) || void 0 === e || null === (t = e.getBoundingClientRect()) || void 0 === t ? void 0 : t.left
                }
                ), []);
            var p = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (e) {
                    var r = (0,
                        l.qG)(l.aF, u, 0, "", t + 1);
                    (0,
                        l.$)("Current slider", "".concat(r, "|").concat(null == e ? void 0 : e.title.replace(/<[^>]+>/g, "").replace(/\s+/g, "-")), i, u)
                }
            }
                , g = function (e) {
                    try {
                        var t;
                        if (null !== (t = v.current) && void 0 !== t && t.isClicked)
                            return;
                        f().forEach((function (e, t) {
                            return function (e, t) {
                                var r, n = e.getBoundingClientRect(), l = null == n ? void 0 : n.left, o = l >= 0 && l <= (null === (r = v.current) || void 0 === r ? void 0 : r.firstCardCoord);
                                o && !v.current.eventFiredOnScroll[t] ? (v.current.eventFiredOnScroll[t] = !0,
                                    v.current.activeSlideIdx = t,
                                    d[t] && p(d[t], t)) : !o && v.current.eventFiredOnScroll[t] && delete v.current.eventFiredOnScroll[t]
                            }(e, t)
                        }
                        ))
                    } catch (e) {
                        console.log("Error scrolling slider")
                    }
                }
                , C = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 700
                        , t = arguments.length > 1 ? arguments[1] : void 0;
                    if (0 !== d.length) {
                        var r = "left" == t ? v.current.activeSlideIdx - 1 : v.current.activeSlideIdx + 1;
                        v.current.isClicked = !0,
                            r >= d.length - 1 ? v.current.activeSlideIdx = d.length - 1 : v.current.activeSlideIdx = r <= 0 ? 0 : r;
                        var n = null == m ? void 0 : m.current;
                        null == n || n.scrollBy({
                            left: e,
                            behavior: "smooth"
                        }),
                            d[v.current.activeSlideIdx] && p(d[null == v ? void 0 : v.current.activeSlideIdx], v.current.activeSlideIdx),
                            setTimeout((function () {
                                v.current.isClicked = !1
                            }
                            ), 710)
                    }
                }
                , b = {
                    arrows: !1,
                    dots: !0,
                    draggable: !0,
                    slidesToScroll: 2,
                    slidesToShow: 2,
                    variableWidth: !0,
                    infinite: !1,
                    responsive: [{
                        breakpoint: 700,
                        settings: {
                            slidesToScroll: 1,
                            slidesToShow: 1,
                            infinite: !1
                        }
                    }],
                    afterChange: function (e) {
                        var t = d[e];
                        t && t.title && p(t, e)
                    }
                }
                , y = (0,
                    l.y_)(r.global_data)
                , h = y.containerStyles
                , E = y.hasTopDivider
                , w = y.hasBottomDivider
                , S = y.border
                , _ = y.background
                , x = y.title
                , L = y.titleType
                , O = y.titleColor
                , k = {
                    backgroundColor: _,
                    paddingBottom: h.paddingBottom,
                    paddingTop: h.paddingTop,
                    margin: "0 auto"
                }
                , j = (0,
                    c.A)("(max-width:1024px)", {
                        noSsr: !0
                    })
                , B = r.case_study && Object.values(r.case_study).map((function (e, t) {
                    var r, o, c, s, d, v, m, f, p = null !== (r = null == e ? void 0 : e.field_title) && void 0 !== r ? r : "", g = null !== (o = null == e ? void 0 : e.field_title_type) && void 0 !== o ? o : "xxs-head", C = null !== (c = null == e ? void 0 : e.url) && void 0 !== c ? c : "", b = null !== (s = null == e ? void 0 : e.cs_link_text) && void 0 !== s ? s : "", y = null !== (d = null == e || null === (v = e.card_image) || void 0 === v ? void 0 : v.rel_url) && void 0 !== d ? d : "", h = null !== (m = null == e ? void 0 : e.field_cs_tags) && void 0 !== m ? m : "", E = null !== (f = null == e ? void 0 : e.cs_start_color) && void 0 !== f ? f : "";
                    return null == e ? void 0 : e.cs_end_color,
                        null == e ? void 0 : e.title,
                        n.createElement("span", null, n.createElement("a", {
                            href: C,
                            key: t,
                            className: "".concat(a()["csCarousel-card"], " cs-carousel-card-js"),
                            style: {
                                background: "".concat(E, " linear-gradient(215deg,rgba(22, 15, 65, 0.4) 33.3%, rgba(0, 0, 0, 0) 77.83%)"),
                                borderRadius: j ? 8 : 24
                            },
                            onClick: function () {
                                return function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                                        , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                                        , r = e ? e.trim().replace(/<[^>]+>/g, "").replace(/[^\w\s]/gi, "").replace(/\s+/g, "-") : ""
                                        , n = t ? t.trim().replace(/\s+/g, "-") : "";
                                    (0,
                                        l.$)("CTA Link Clicked", "Body|".concat(r, "|CTA|").concat(n), i, u)
                                }(p, b)
                            }
                        }, n.createElement("img", {
                            alt: "",
                            src: y,
                            className: a()["csCarousel-img"]
                        }), n.createElement("span", {
                            className: a()["csCarousel-content-card"]
                        }, n.createElement("span", {
                            className: a()["csCarousel-content"]
                        }, n.createElement("span", {
                            className: "".concat(a()["csCarousel-title"], " ").concat(g, "-ptserif"),
                            dangerouslySetInnerHTML: {
                                __html: p
                            }
                        }), n.createElement("span", {
                            className: a()["csCarousel-tags"]
                        }, Object.values(h).map((function (e, t) {
                            return n.createElement("span", null, e)
                        }
                        )))), n.createElement("span", {
                            className: a()["csCarousel-link"]
                        }, n.createElement("span", {
                            className: a()["csCarousel-linktext"]
                        }, b), n.createElement("svg", {
                            width: "36",
                            height: "36",
                            viewBox: "0 0 36 36",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, n.createElement("g", {
                            id: "Group 14"
                        }, n.createElement("circle", {
                            id: "Ellipse 48",
                            cx: "18",
                            cy: "18",
                            r: "17.5",
                            stroke: "#FEFDFB"
                        }), n.createElement("path", {
                            id: "Arrow 4",
                            d: "M12 17.5C11.7239 17.5 11.5 17.7239 11.5 18C11.5 18.2761 11.7239 18.5 12 18.5L12 17.5ZM24.3536 18.3536C24.5488 18.1583 24.5488 17.8417 24.3536 17.6464L21.1716 14.4645C20.9763 14.2692 20.6597 14.2692 20.4645 14.4645C20.2692 14.6597 20.2692 14.9763 20.4645 15.1716L23.2929 18L20.4645 20.8284C20.2692 21.0237 20.2692 21.3403 20.4645 21.5355C20.6597 21.7308 20.9763 21.7308 21.1716 21.5355L24.3536 18.3536ZM12 18.5L24 18.5L24 17.5L12 17.5L12 18.5Z",
                            fill: "white"
                        })))))))
                }
                ));
            return (0,
                n.useEffect)((function () {
                    var e = m.current;
                    return null == e || e.addEventListener("scroll", g),
                        function () {
                            null == e || e.removeEventListener("scroll", g)
                        }
                }
                ), []),
                n.createElement(n.Fragment, null, n.createElement(s.default, {
                    visibility: E,
                    borderStyle: S
                }), n.createElement("section", {
                    className: a()["csCarousel-section"],
                    "data-componentname": u,
                    "data-componentid": i,
                    "component-order": t,
                    style: k
                }, n.createElement("span", {
                    className: "".concat(L, "-ptserif ").concat(a()["csCarousel-heading"]),
                    style: {
                        color: O
                    }
                }, x), j ? n.createElement(o.A, b, B) : n.createElement("span", {
                    className: a()["csCarousel-wrapper"],
                    ref: m
                }, B), !j && n.createElement("span", {
                    className: a()["csCarousel-scroll"]
                }, n.createElement("button", {
                    type: "button",
                    className: "".concat(a()["slider-nav-btn"], " slider-nav-btn-js"),
                    onClick: function () {
                        return C(-681, "left")
                    }
                }, n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "41",
                    height: "41",
                    viewBox: "0 0 41 41",
                    fill: "none"
                }, n.createElement("circle", {
                    cx: "20.1555",
                    cy: "20.157",
                    r: "19.3256",
                    transform: "rotate(-180 20.1555 20.157)",
                    stroke: "#0077b6",
                    "stroke-width": "1.65985"
                }), n.createElement("path", {
                    d: "M13.3422 19.7024C13.0916 19.9531 13.0916 20.3594 13.3422 20.6101L17.4265 24.6943C17.6771 24.9449 18.0835 24.9449 18.3341 24.6943C18.5847 24.4437 18.5847 24.0373 18.3341 23.7867L14.7036 20.1562L18.3341 16.5258C18.5847 16.2752 18.5847 15.8688 18.3341 15.6182C18.0835 15.3675 17.6771 15.3675 17.4265 15.6182L13.3422 19.7024ZM26.8735 19.5145L13.796 19.5145L13.796 20.798L26.8735 20.798L26.8735 19.5145Z",
                    fill: "#0077b6"
                }))), n.createElement("button", {
                    type: "button",
                    className: "".concat(a()["slider-nav-btn"], " slider-nav-btn-js"),
                    onClick: function () {
                        return C(681, "right")
                    }
                }, n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "41",
                    height: "41",
                    viewBox: "52 0 41 41",
                    fill: "none"
                }, n.createElement("circle", {
                    cx: "72.5622",
                    cy: "20.1555",
                    r: "19.3256",
                    stroke: "#0077b6",
                    "stroke-width": "1.65985"
                }), n.createElement("path", {
                    d: "M79.3756 20.6101C79.6262 20.3594 79.6262 19.9531 79.3756 19.7024L75.2914 15.6182C75.0407 15.3675 74.6344 15.3675 74.3837 15.6182C74.1331 15.8688 74.1331 16.2752 74.3837 16.5258L78.0142 20.1562L74.3837 23.7867C74.1331 24.0373 74.1331 24.4437 74.3837 24.6943C74.6344 24.945 75.0407 24.945 75.2914 24.6943L79.3756 20.6101ZM65.8444 20.798H78.9218V19.5145H65.8444V20.798Z",
                    fill: "#0077b6"
                }))))), n.createElement(s.default, {
                    visibility: w,
                    borderStyle: S
                }))
        }
    }
    ,
    47653: (e, t, r) => {
        "use strict";
        r.r(t),
            r.d(t, {
                default: () => a
            });
        var n = r(96540);
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
        function o(e, t) {
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
                t % 2 ? o(Object(r), !0).forEach((function (t) {
                    i(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function i(e, t, r) {
            return (t = function (e) {
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
            }(t)) in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
                e
        }
        function a(e) {
            var t = e.visibility
                , r = void 0 !== t && t
                , l = e.borderStyle
                , o = e.style;
            if (!r)
                return null;
            var i = {
                style: c({
                    margin: " 0 auto",
                    borderRight: "0",
                    borderLeft: "0",
                    borderBottom: "0",
                    borderTop: l || "1px solid #d8d8d8",
                    maxWidth: "896px",
                    width: "calc(100% - 60px)",
                    minWidth: "315px"
                }, void 0 === o ? {} : o)
            };
            return n.createElement(n.Fragment, null, r && n.createElement("hr", i))
        }
    }
    ,
    76119: e => {
        e.exports = {
            "inherit-parent-typo": "csQ1P",
            "csCarousel-heading": "r5WVv",
            "csCarousel-wrapper": "lbKfb",
            "csCarousel-scroll": "KBkp6",
            "csCarousel-card": "OEpha",
            "csCarousel-content-card": "xVJ2q",
            "csCarousel-img": "PrrEz",
            "csCarousel-content": "mMxBg",
            "csCarousel-title": "f4Yh0",
            "csCarousel-tags": "YiB88",
            "csCarousel-link": "JKLP6",
            "csCarousel-linktext": "t4CCj",
            "slider-nav-btn": "nv1n2",
            "csCarousel-section": "hZKAa"
        }
    }
}]);
