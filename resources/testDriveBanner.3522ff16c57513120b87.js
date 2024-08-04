(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[8307], {
    90254: (e, t, i) => {
        "use strict";
        i.r(t),
            i.d(t, {
                default: () => E
            });
        var l = i(96540)
            , n = i(4589)
            , a = i(57006)
            , o = i.n(a)
            , r = i(61038)
            , c = i(29184)
            , d = i(5555)
            , s = i(67739)
            , u = i(49172)
            , f = i(29921)
            , m = i.n(f);
        function p(e) {
            return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                p(e)
        }
        function _(e, t) {
            for (var i = 0; i < t.length; i++) {
                var l = t[i];
                l.enumerable = l.enumerable || !1,
                    l.configurable = !0,
                    "value" in l && (l.writable = !0),
                    Object.defineProperty(e, v(l.key), l)
            }
        }
        function v(e) {
            var t = function (e, t) {
                if ("object" != p(e) || !e)
                    return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var l = i.call(e, "string");
                    if ("object" != p(l))
                        return l;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == p(t) ? t : t + ""
        }
        function g(e, t, i) {
            return t = h(t),
                function (e, t) {
                    if (t && ("object" == p(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, y() ? Reflect.construct(t, i || [], h(e).constructor) : t.apply(e, i))
        }
        function y() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (y = function () {
                return !!e
            }
            )()
        }
        function h(e) {
            return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                h(e)
        }
        function b(e, t) {
            return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                b(e, t)
        }
        var S = function (e) {
            var t = e.type
                , i = e.itemVideoId
                , n = e.itemBgimg
                , a = e.itemBgimgAlt
                , r = e.itemOverlayBgimg
                , c = e.isScriptPresent
                , d = e.scriptURL
                , s = e.onVideoPlay;
            return i || n ? l.createElement("div", {
                className: "".concat(o()["fullpage-slider-img"], " test-drive-video-cntnr")
            }, n && "image" == t ? l.createElement(l.Fragment, null, l.createElement("img", {
                src: n,
                alt: a
            }), r ? l.createElement("div", {
                className: "".concat(o()["fullpage-slider-img-overlay"], " ").concat("fullpage-slider-img-overlay--" + o()["fullpage-slider-img-overlay"])
            }, l.createElement("img", {
                src: r
            })) : null) : null, i && n && "video" == t ? l.createElement("div", {
                className: o()["video-media"],
                onClick: function (e) {
                    return s(e, i)
                }
            }, l.createElement("i", {
                className: o()["video-icon"]
            }), l.createElement("div", {
                style: {
                    display: "none"
                },
                "data-video-ids": i,
                "data-experience": "5b0f79545eecca0010826d71"
            }), c ? "" : l.createElement(m(), {
                url: d
            }), n ? l.createElement("img", {
                className: o().media,
                src: n,
                alt: a
            }) : null) : null, i && !n && "video" == t ? l.createElement("div", {
                "data-video-ids": i,
                "data-experience": "5b0f79545eecca0010826d71"
            }) : "") : null
        }
            , k = "banner2023"
            , E = function (e) {
                function t(e) {
                    var i;
                    return function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        (i = g(this, t, [e])).state = {
                            animate: !1,
                            showForm: !0,
                            activeForm: !1,
                            openGatedVideo: !1,
                            dataComponentName: "Test Drive component",
                            formSubmitted: !1,
                            titleHeight: 0,
                            isScriptLoaded: !1,
                            foundScript: !1
                        },
                        i.scriptVideoUrl = "https://players.brightcove.net/1815389247001/experience_5b0f79545eecca0010826d71/live.js",
                        i.containerRef = l.createRef(),
                        i.handleScroll = i.handleScroll.bind(i),
                        i.checkAnimation = i.checkAnimation.bind(i),
                        i.variant = (0,
                            c.k)(i.props.itemContent.field_variant_td, ""),
                        i
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
                    i = t,
                    a = [{
                        key: "componentDidMount",
                        value: function () {
                            localStorage.getItem("testDriveForm") && this.setState({
                                formSubmitted: !0
                            }),
                                (0,
                                    r.pK)("test_drive_block", this.state.dataComponentName);
                            var e = this.props.itemContent && this.props.itemContent ? this.props.itemContent : null
                                , t = e && e.field_type_of_slider[0] ? e.field_type_of_slider[0].value : "manual";
                            if ("automatic" !== (t = e && e.slides && e.slides.length > 1 ? t : "manual")) {
                                var i = document.querySelectorAll("[class*=cloned-pagination] li");
                                i && i.length > 0 && i[0].classList.add("active-pagination");
                                var l = document.querySelectorAll(".slick-dots button");
                                l && Array.from(l).map((function (e) {
                                    e.addEventListener("click", (function () {
                                        (0,
                                            r.I0)(".active-pagination", "active-pagination");
                                        var t = document.querySelectorAll("[class*=cloned-pagination] li")
                                            , i = t && t[e.innerText - 1];
                                        i && i.classList.add("active-pagination")
                                    }
                                    ))
                                }
                                ))
                            }
                            if (document.querySelector(".fullpage-slider-item-title")) {
                                var n = document.querySelector(".fullpage-slider-item-title").offsetHeight;
                                this.setState({
                                    titleHeight: n
                                })
                            }
                            var a = this.props.itemContent && this.props.itemContent ? this.props.itemContent : null
                                , o = a && a.field_overlay_transition_speed[0] ? a.field_overlay_transition_speed[0].value : 2e3
                                , c = {
                                    transition: "opacity ".concat(o / 1e3, "s linear"),
                                    opacity: 1
                                }
                                , d = document.querySelectorAll(".slick-slide")[0].querySelector("[class*=fullpage-slider-img-overlay]");
                            d && d.setAttribute("style", "transition: ".concat(c.transition, "; opacity: ").concat(c.opacity, ";"));
                            var s = (document.body.clientWidth - 1180) / 2;
                            Array.from(document.querySelectorAll("[class*=fullpage-slider-gated-form]")).map((function (e) {
                                return e.setAttribute("style", "margin-right: -".concat(s, "px; margin-left: -").concat(s, "px"))
                            }
                            )),
                                this.setState({
                                    foundScript: (0,
                                        r.jX)(this.scriptVideoUrl)
                                }),
                                this.variant === k && (this.checkAnimation(),
                                    window.addEventListener("scroll", this.handleScroll))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            this.variant === k && window.removeEventListener("scroll", this.handleScroll)
                        }
                    }, {
                        key: "handleScroll",
                        value: function (e) {
                            this.checkAnimation()
                        }
                    }, {
                        key: "checkAnimation",
                        value: function () {
                            var e = this.containerRef.current;
                            (0,
                                d.X)(e, 500) && this.setState({
                                    animate: !0
                                })
                        }
                    }, {
                        key: "customPagination",
                        value: function (e) {
                            (0,
                                r.I0)(".active-pagination", "active-pagination"),
                                e.target.classList.add("active-pagination"),
                                document.querySelectorAll(".slick-dots button")[e.target.innerText - 1].click()
                        }
                    }, {
                        key: "hardGatedForm",
                        value: function (e) {
                            localStorage.getItem("testDriveForm") ? this.setState({
                                formSubmitted: !0
                            }) : document.querySelectorAll(".slick-dots button")[e - 2].click()
                        }
                    }, {
                        key: "softGatedForm",
                        value: function () {
                            this.setState({
                                showForm: !1,
                                formSubmitted: !0
                            })
                        }
                    }, {
                        key: "addBrightcoveVideo",
                        value: function (e) {
                            var t = this;
                            if (!e) {
                                this.state.isScriptLoaded && $("body").find('script[src="https://players.brightcove.net/1815389247001/experience_5b0f79545eecca0010826d71/live.js"]').remove();
                                var i = (0,
                                    r.z2)();
                                i.onload = function () {
                                    t.setState({
                                        isScriptLoaded: !0
                                    })
                                }
                                    ,
                                    document.body.appendChild(i)
                            }
                        }
                    }, {
                        key: "VideoCTA",
                        value: function (e, t) {
                            var i = e.currentTarget.closest(".slick-active.slick-current .test-drive-video-cntnr");
                            (0,
                                r._b)(t, null, i, !1)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e, t, i, a = this, c = this.props.itemContent && this.props.itemContent ? this.props.itemContent : null, d = c && c.field_background_color[0] ? c.field_background_color[0].color : "#4db2ca", f = c && c.field_ctitle[0] ? c.field_ctitle[0].value : null, m = c && c.field_csubtitle[0] ? c.field_csubtitle[0].value : null, p = c && c.field_statbar_title && c.field_statbar_title[0] ? c.field_statbar_title[0].value : null, _ = c && c.field_speed_of_slider[0] ? c.field_speed_of_slider[0].value : 2e3, v = (c && c.field_overlay_transition_speed[0] ? c.field_overlay_transition_speed[0].value : 2e3) / 1e3, g = c && c.field_type_of_slider[0] ? c.field_type_of_slider[0].value : "manual", y = c && c.field_td_gated_form ? c.field_td_gated_form.value : null, h = c && c.field_slide_no_for_gated_form ? c.field_slide_no_for_gated_form[0].value : null, b = c && c.field_gated_form_type[0] ? c.field_gated_form_type[0].value : null, k = {
                                transition: "opacity ".concat(v, "s linear"),
                                opacity: 1
                            }, E = c && c.slides.length > 1 && c.slides.map((function (e, t) {
                                return l.createElement("li", {
                                    key: t
                                }, t + 1)
                            }
                            )), A = c && c.slides.map((function (e, t) {
                                var i, n, r, c, d, f = e.field_subtitle && e.field_subtitle ? e.field_subtitle : null, m = e.field_description && e.field_description ? e.field_description : null, p = e.slide_card_type || null, _ = e.field_td_video && e.field_td_video.video_id && e.field_td_video.video_id[0] && e.field_td_video.video_id[0].value ? e.field_td_video.video_id[0].value : null, v = (e.field_td_video && e.field_td_video.name.length > 0 && e.field_td_video.name[0].value && e.field_td_video.name[0].value,
                                    e.field_image ? e.field_image.rel_url : null), k = e.field_overlay_image ? e.field_overlay_image.rel_url : null, E = e.field_image ? e.field_image.options.alt : "", A = e.field_cta_link_component ? "" !== e.field_cta_link_component.field_carousel_cta_type ? e.field_cta_link_component.field_carousel_cta_type : "Link" : "", C = e.field_cta_link_component.field_cta_style ? e.field_cta_link_component.field_cta_style.field_cta_size[0].value : "", w = null !== (i = null == e || null === (n = e.field_cta_link_component) || void 0 === n || null === (r = n.field_cta_style) || void 0 === r || null === (c = r.field_cta_icon_location) || void 0 === c || null === (d = c[0]) || void 0 === d ? void 0 : d.value) && void 0 !== i ? i : "", N = e.field_cta_link_component && e.field_cta_link_component.field_cta_link ? e.field_cta_link_component.field_cta_link.link : "", q = e.field_cta_link_component && e.field_cta_link_component.field_cta_link ? e.field_cta_link_component.field_cta_link.label : "", L = e.field_cta_link_component && e.field_cta_link_component.field_cta_brightcove_video && e.field_cta_link_component.field_cta_brightcove_video.video_id[0] ? e.field_cta_link_component.field_cta_brightcove_video.video_id[0].value : "", O = e.field_cta_link_component && e.field_cta_link_component.field_carousel_gated_form ? e.field_cta_link_component.field_carousel_gated_form.value : "";
                                return l.createElement(l.Fragment, {
                                    key: t
                                }, l.createElement("div", {
                                    className: "".concat(o()["fullpage-slider-item"], " ")
                                }, l.createElement("div", {
                                    className: o()["fullpage-slider-details"],
                                    style: {
                                        marginTop: a.state.titleHeight
                                    }
                                }, f ? l.createElement("div", {
                                    className: "".concat(o()["fullpage-slider-item-subtitle"], " subhead-2 active-desc"),
                                    dangerouslySetInnerHTML: {
                                        __html: f
                                    }
                                }) : null, l.createElement("div", {
                                    className: o()["fullpage-slider-item-details"]
                                }, m ? l.createElement("span", {
                                    className: "".concat(o()["fullpage-slider-item-desc"], " para-sm"),
                                    dangerouslySetInnerHTML: {
                                        __html: m
                                    }
                                }) : null, q ? l.createElement(s.default, {
                                    ctaType: A,
                                    ctaUrl: N,
                                    ctaLabel: q,
                                    ctaStyle: C,
                                    ctaFormID: O,
                                    ctaVideoID: L,
                                    dataComponentName: a.state.dataComponentName,
                                    dataMachineName: "test_drive_block",
                                    index: t,
                                    parentOrder: a.props.componentOrder,
                                    testDriveActiveSlideIndex: t + 1,
                                    ctaIcon: w
                                }) : null)), l.createElement(S, {
                                    type: p,
                                    itemBgimg: v,
                                    itemBgimgAlt: E,
                                    itemOverlayBgimg: k,
                                    itemVideoId: _,
                                    isScriptPresent: a.state.foundScript,
                                    scriptURL: a.scriptVideoUrl,
                                    onVideoPlay: a.VideoCTA
                                })), h <= t + 1 && a.state.showForm && "manual" === g && b && !1 === a.state.formSubmitted ? l.createElement("div", {
                                    className: "".concat(o()["fullpage-slider-gated-form"], " ").concat("fullpage-slider-gated-form--" + o()["fullpage-slider-gated-form"], "}")
                                }, "Hard" === b ? l.createElement("span", {
                                    className: o()["close-form"],
                                    onClick: function () {
                                        return a.hardGatedForm(h)
                                    }
                                }) : l.createElement("span", {
                                    className: o()["close-form"],
                                    onClick: function () {
                                        return a.softGatedForm()
                                    }
                                }), l.createElement(u.default, {
                                    formID: y,
                                    formParentComponent: "parent-testdrive"
                                })) : null)
                            }
                            )), C = "automatic" === g ? {
                                arrows: !1,
                                pauseOnHover: !1,
                                dots: !0,
                                fade: !0,
                                infinite: !0,
                                autoplay: !0,
                                lazyLoad: !0,
                                autoplaySpeed: +_,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                beforeChange: function (e, t) {
                                    var i = document.querySelectorAll(".slick-slide")[t].querySelector("[class*=fullpage-slider-img-overlay]");
                                    i && i.removeAttribute("style")
                                },
                                afterChange: function (e) {
                                    var t = document.querySelectorAll("[class*=cloned-pagination] li")[e];
                                    (0,
                                        r.I0)(".active-pagination", "active-pagination"),
                                        t && t.classList.add("active-pagination");
                                    var i = document.querySelectorAll(".slick-slide")[e]
                                        , l = i.querySelector("[class*=fullpage-slider-img-overlay]");
                                    l && l.setAttribute("style", "transition: ".concat(k.transition, "; opacity: ").concat(k.opacity, ";"));
                                    var n = i.querySelector(".Brightcove-video iframe");
                                    i.querySelector(".Brightcove-video") && a.addBrightcoveVideo(n)
                                },
                                responsive: [{
                                    breakpoint: 768,
                                    settings: {
                                        swipeToSlide: !0,
                                        pauseOnHover: !0
                                    }
                                }]
                            } : {
                                dots: !0,
                                infinite: !0,
                                fade: !0,
                                lazyLoad: !1,
                                speed: +_,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                beforeChange: function (e, t) {
                                    var i = document.querySelectorAll(".slick-slide")[t].querySelector("[class*=fullpage-slider-img-overlay]");
                                    i && i.removeAttribute("style");
                                    var l = document.querySelectorAll("[class*=cloned-pagination] li")[t];
                                    (0,
                                        r.I0)(".active-pagination", "active-pagination"),
                                        l && l.classList.add("active-pagination")
                                },
                                afterChange: function (e) {
                                    var t;
                                    localStorage.getItem("testDriveForm") && a.setState({
                                        formSubmitted: !0
                                    }),
                                        A = c && c.slides.map((function (i, l) {
                                            var n = i.field_subtitle && i.field_subtitle ? i.field_subtitle : null;
                                            l == e && (t = n)
                                        }
                                        ));
                                    var i = t || "";
                                    (0,
                                        r.$)("Current slider", "Body|Slider|" + (e + 1) + "|".concat(i.replace(/<[^>]+>/g, "").replace(/\s+/g, "-")), "test_drive_block", a.state.dataComponentName),
                                        a.setState({
                                            activeForm: e + 1
                                        });
                                    var l = document.querySelectorAll(".slick-slide")[e]
                                        , n = l.querySelector("[class*=fullpage-slider-img-overlay]");
                                    n && n.setAttribute("style", "transition: ".concat(k.transition, "; opacity: ").concat(k.opacity, ";"));
                                    var o = l.querySelector(".Brightcove-video iframe");
                                    l.querySelector(".Brightcove-video") && a.addBrightcoveVideo(o);
                                    var d = (document.body.clientWidth - 1180) / 2;
                                    Array.from(document.querySelectorAll("[class*=fullpage-slider-gated-form]")).map((function (e) {
                                        return e.setAttribute("style", "margin-right: -".concat(d, "px; margin-left: -").concat(d, "px"))
                                    }
                                    ))
                                }
                            }, w = this.state.activeForm >= h && this.state.showForm && b && !1 === this.state.formSubmitted ? o()["active-form"] : null, N = {
                                backgroundColor: d
                            }, q = d.replace("#", "");
                            p = (p = p ? p.replace("<p>", "<h3>") : null) ? p.replace("</p>", "</h3>") : null;
                            var L = this.variant ? o()["fullpage-slider-wrapper-".concat(this.variant)] : ""
                                , O = this.state.animate ? o().animate : ""
                                , I = null !== (e = this.props.itemContent) && void 0 !== e && null !== (t = e.field_design) && void 0 !== t && null !== (i = t[0]) && void 0 !== i && i.value ? o().v3 : ""
                                , T = (0,
                                    r.Nw)(d || "#ffffff");
                            return l.createElement("section", {
                                className: "".concat(o()["fullpage-slider-wrapper"], " ").concat("fullpage-slider-wrapper--" + o()["fullpage-slider-wrapper"], " ").concat(w, " ").concat(L, " ").concat(O, " ").concat(I, " component-order ").concat(o()[T]),
                                "data-componentname": this.state.dataComponentName,
                                "data-componentid": "test_drive_block",
                                "component-order": this.props.componentOrder,
                                style: N,
                                ref: this.containerRef
                            }, f ? l.createElement("div", {
                                className: o()["fullpage-slider-title"],
                                dangerouslySetInnerHTML: {
                                    __html: f
                                }
                            }) : null, m ? l.createElement("div", {
                                className: o()["fullpage-slider-subtitle"],
                                dangerouslySetInnerHTML: {
                                    __html: m
                                }
                            }) : null, l.createElement("div", {
                                className: "".concat(o()["fullpage-slider-container"], " ").concat("bg-" + q)
                            }, p ? l.createElement("div", {
                                className: "".concat(o()["fullpage-slider-item-title"], " fullpage-slider-item-title subhead-1"),
                                dangerouslySetInnerHTML: {
                                    __html: p
                                }
                            }) : null, c && c.slides && c.slides.length > 1 ? l.createElement("ul", {
                                className: "".concat(o()["cloned-pagination"], " ").concat("cloned-pagination-- " + o()["cloned-pagination"]),
                                onClick: function (e) {
                                    return a.customPagination(e)
                                },
                                style: {
                                    marginTop: this.state.titleHeight + 41
                                }
                            }, E) : null, l.createElement(n.A, C, A)))
                        }
                    }],
                    a && _(i.prototype, a),
                    Object.defineProperty(i, "prototype", {
                        writable: !1
                    }),
                    i;
                var i, a
            }(l.Component)
    }
    ,
    29184: (e, t, i) => {
        "use strict";
        i.d(t, {
            k: () => l
        });
        var l = function (e, t) {
            var i, l;
            return null !== (i = null == e || null === (l = e[0]) || void 0 === l ? void 0 : l.value) && void 0 !== i ? i : t
        }
    }
    ,
    5555: (e, t, i) => {
        "use strict";
        i.d(t, {
            X: () => l
        });
        var l = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            try {
                if (e) {
                    var i, l, n = e.getBoundingClientRect().top;
                    if ((null !== (i = null === (l = window) || void 0 === l ? void 0 : l.innerHeight) && void 0 !== i ? i : 0) - n > t)
                        return !0
                }
                return !1
            } catch (e) {
                return !0
            }
        }
    }
    ,
    57006: e => {
        e.exports = {
            "inherit-parent-typo": "UbIq6",
            "fullpage-slider-wrapper": "YZnDS",
            "fullpage-slider-wrapper-banner2023": "ZF4dW",
            "fullpage-slider-container": "iIpVM",
            "fullpage-slider-item-title": "MmC23",
            "fullpage-slider-item": "Y1rd4",
            "fullpage-slider-img": "dNPZ4",
            "fullpage-slider-details": "TIQ2B",
            "fullpage-slider-item-subtitle": "gOOqn",
            "fullpage-slider-item-desc": "KCsuk",
            animate: "Xd1Wk",
            fadeInFromBotton: "PrTvt",
            fadeIn: "Fhqdj",
            "active-form": "BqCF_",
            "fullpage-slider-title": "p0pjP",
            "fullpage-slider-subtitle": "sSsLe",
            "cloned-pagination": "kf28B",
            "item-link": "ImNVn",
            "fullpage-slider-img-overlay": "AORqk",
            "fullpage-slider-gated-form": "JFLlN",
            "close-form": "bHMuC",
            "fullpage-slider-item-details": "GhmM2",
            "video-media": "FD5qL",
            "video-icon": "bm9hW",
            v3: "ig0Kj",
            "dark-tone": "M1ul4",
            "light-tone": "wW7YR"
        }
    }
}]);
