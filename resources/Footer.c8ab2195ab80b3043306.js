(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[5798], {
    60265: (e, t, a) => {
        "use strict";
        a.r(t),
            a.d(t, {
                default: () => A
            });
        var o = a(96540)
            , n = a(29233)
            , l = a(96892)
            , i = a(2404)
            , c = a(51581)
            , r = a(55299)
            , s = a(48235)
            , m = a.n(s)
            , d = a(19738)
            , _ = a.n(d)
            , f = a(35415);
        const u = a.p + "logo_name_white.png";
        var p = a(38125)
            , k = (a(84315),
                a(7452),
                a(61038))
            , g = a(67739)
            , h = a(80738)
            , b = a(71712);
        function y(e) {
            return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                y(e)
        }
        function v() {
            return v = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var o in a)
                        ({}).hasOwnProperty.call(a, o) && (e[o] = a[o])
                }
                return e
            }
                ,
                v.apply(null, arguments)
        }
        function E(e, t) {
            for (var a = 0; a < t.length; a++) {
                var o = t[a];
                o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, j(o.key), o)
            }
        }
        function N(e, t, a) {
            return t = C(t),
                function (e, t) {
                    if (t && ("object" == y(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(e, w() ? Reflect.construct(t, a || [], C(e).constructor) : t.apply(e, a))
        }
        function w() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                )))
            } catch (e) { }
            return (w = function () {
                return !!e
            }
            )()
        }
        function C(e) {
            return C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                C(e)
        }
        function x(e, t) {
            return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                x(e, t)
        }
        function S(e, t, a) {
            return (t = j(t)) in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
                e
        }
        function j(e) {
            var t = function (e, t) {
                if ("object" != y(e) || !e)
                    return e;
                var a = e[Symbol.toPrimitive];
                if (void 0 !== a) {
                    var o = a.call(e, "string");
                    if ("object" != y(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == y(t) ? t : t + ""
        }
        const A = function (e) {
            function t(e) {
                var a;
                return function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    S(a = N(this, t, [e]), "handleCookieAnalytics", (function () {
                        (0,
                            k.Xt)(a.state.dataComponentName, a.state.dataComponentId, "Cookie-Preferences")
                    }
                    )),
                    S(a, "closePatientModal", (function () {
                        a.setState({
                            showModal: !1
                        })
                    }
                    )),
                    S(a, "openPatientModal", (function (e, t) {
                        if (e.preventDefault(),
                            t) {
                            var o = t.attached_modal_popup && t.attached_modal_popup.modal_data
                                , n = o.cta && o.cta.length > 0 ? o.cta[0] : null
                                , l = o.cta && o.cta.length > 0 && o.cta[1] ? o.cta[1] : null
                                , i = {
                                    confirmation_title: o.headline,
                                    headColor: o.headline_color,
                                    confirmation_message: o.description,
                                    imgUrl: o.image.rel_url,
                                    webpImgUrl: o.image.webp_image_url,
                                    imgAlt: o.image.options.alt,
                                    cta_1: null,
                                    cta_2: null
                                };
                            n && (i.cta_1 = {
                                ctaType: n.field_carousel_cta_type || "Link",
                                ctaLabel: n.field_cta_link.label,
                                ctaUrl: n.field_cta_link.link,
                                ctaStyle: n.field_cta_style && n.field_cta_style.field_cta_size && n.field_cta_style.field_cta_size.length > 0 && n.field_cta_style.field_cta_size[0] && n.field_cta_style.field_cta_size[0].value || "primary_default",
                                dataComponentName: "PatientModal",
                                dataMachineName: "patient_modal_confirmation",
                                index: 1
                            }),
                                l && (i.cta_2 = {
                                    ctaType: l.field_carousel_cta_type || "Link",
                                    ctaLabel: l.field_cta_link.label,
                                    ctaUrl: l.field_cta_link.link,
                                    ctaStyle: l.field_cta_style && l.field_cta_style.field_cta_size && l.field_cta_style.field_cta_size.length > 0 && l.field_cta_style.field_cta_size[0] && l.field_cta_style.field_cta_size[0].value || "primary_default",
                                    dataComponentName: "PatientModal",
                                    dataMachineName: "patient_modal_confirmation",
                                    index: 2
                                }),
                                a.setState({
                                    modalData: i,
                                    showModal: !0
                                })
                        }
                    }
                    )),
                    a.state = {
                        openGatedVideo: !1,
                        collapse: 0,
                        toogleIcon: "arrowDown",
                        dataComponentName: "Footer",
                        dataComponentId: "Footer",
                        showModal: !1,
                        modalData: {}
                    },
                    a.toggle = a.toggle.bind(a),
                    a.footerCTA = a.footerCTA.bind(a),
                    a.analyticsTracking = a.analyticsTracking.bind(a),
                    a.handleCookieAnalytics = a.handleCookieAnalytics.bind(a),
                    a.closePatientModal = a.closePatientModal.bind(a),
                    a.openPatientModal = a.openPatientModal.bind(a),
                    a
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
                    t && x(e, t)
            }(t, e),
                a = t,
                s = [{
                    key: "analyticsTracking",
                    value: function (e, t) {
                        (0,
                            k.$)(e, t, "Footer", "Footer")
                    }
                }, {
                    key: "footerCTA",
                    value: function (e, t, a) {
                        a && this.setState({
                            openGatedVideo: !0
                        }),
                            "footerCTA" === e && (0,
                                k.$)("CTA Link Clicked", t, "Footer", "Footer")
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        (0,
                            h.z)();
                        var e = document.getElementById("cookie-preference-js");
                        e && e.addEventListener("click", this.handleCookieAnalytics, !0),
                            (0,
                                k.pK)("Footer", this.state.dataComponentName)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        var e = document.getElementById("cookie-preference-js");
                        e && e.removeEventListener("click", this.handleCookieAnalytics)
                    }
                }, {
                    key: "toggle",
                    value: function (e) {
                        var t = e.target.dataset.event;
                        this.setState({
                            collapse: this.state.collapse === Number(t) ? 0 : Number(t)
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e, t, a = this, s = this.state.collapse;
                        t = this.props.content.globaldata;
                        var d, h, y, E = this.props.content && this.props.content.siteIdentifier ? this.props.content.siteIdentifier : null, N = "ahcom" === E || "khub" === E, w = "epoc" === E, C = (null === (e = this.props.content) || void 0 === e || e.url,
                            t.footer_menu ? Object.keys(t.footer_menu).map((function (e) {
                                return t.footer_menu[e]
                            }
                            )) : []), x = t.footer_bottom_menu ? t.footer_bottom_menu : "", S = x.schedule_meeting ? x.schedule_meeting : "", j = x.links ? x.links : "", A = x.ah_social_media_links ? x.ah_social_media_links : "", I = x.footer_call_us ? x.footer_call_us : "", O = S.sm_cta_details ? S.sm_cta_details : "", P = this.props.content.globaldata && this.props.content.globaldata.webform_config && this.props.content.globaldata.webform_config.schedule_meeting ? this.props.content.globaldata.webform_config.schedule_meeting : null, M = O && O.field_cta_size && O.field_cta_size[0] ? O.field_cta_size[0].value : null, L = O && O.field_cta_type && O.field_cta_type[0] ? O.field_cta_type[0].value : null, T = O && O.field_cta_behaviour && O.field_cta_behaviour[0] ? O.field_cta_behaviour[0].value : null, D = O && O.field_cta_color && O.field_cta_color[0] ? O.field_cta_color[0].value : null, X = (S && S.sm_link && S.sm_link,
                                S && S.sm_label ? S.sm_label : null), z = ("".concat(L, " ").concat(M, " ").concat(D, " ").concat(T),
                                    S && S.sm_cta_type && "Link" == S.sm_cta_type ? S.sm_cta_type : ""), F = S && S.sm_cta_text ? S.sm_cta_text : "", U = S && S.sm_cta_link ? S.sm_cta_link : "#", B = S && S.sm_cta_link_target && 1 == S.sm_cta_link_target ? "_blank" : "", G = t && t.minimal_footer ? t.minimal_footer : t && t.minimal_header_footer ? t.minimal_header_footer : null, V = t && "ahcom" !== E && t.header_type ? t.header_type : null, H = G && G.bg_color ? G.bg_color : null, q = t && t.footer_type ? t.footer_type : null, K = (G && G.text_color && G.text_color,
                                        G && G.disclaimer_text ? G.disclaimer_text : null), Q = G && G.privacy_policy_link ? G.privacy_policy_link : null, R = G && G.footer_copyright ? G.footer_copyright : null, W = G && G.footer_company_name ? G.footer_company_name : null, Z = G && G.privacy_policy_text ? G.privacy_policy_text : null, Y = this.props.content && this.props.content.globaldata ? this.props.content.globaldata : "", J = Y && Y.site_logo && Y.site_logo.rel_url ? Y.site_logo.rel_url : f, $ = Y && Y.minimal_header_footer && Y.minimal_header_footer.logo && Y.minimal_header_footer.logo.rel_url ? Y.minimal_header_footer.logo.rel_url : J, ee = !(!t || "ahcom" !== E) || !(!Y || !Y.clickable_logo || 1 !== Y.clickable_logo), te = Y && Y.site_logo && Y.site_logo.webp_image_url ? Y.site_logo.webp_image_url : f, ae = Y && Y.minimal_header_footer && Y.minimal_header_footer.logo && Y.minimal_header_footer.logo.webp_image_url ? Y.minimal_header_footer.logo.webp_image_url : te, oe = Y.webform_config && Y.webform_config.global_cta_type ? Y.webform_config.global_cta_type : "form", ne = Y && Y.cta_style ? Y.cta_style : Y && Y.webform_config && Y.webform_config.global_cta_style ? Y.webform_config.global_cta_style : "", le = Y.webform_config && Y.webform_config.schedule_meeting ? Y.webform_config.schedule_meeting : null, ie = "image/".concat((0,
                                            k.yg)($)), ce = m()["footer-redesign"], re = w ? "support@epocrates" : "call-us", se = w ? "epocrates-logo" : "athenahealth-logo";
                        if ("minimal_header_0_cta" === V || "minimal_header_1_cta" === V || "minimal_header_2_cta" === V || "minimal_footer_menu" === q)
                            d = o.createElement("div", {
                                className: _()["minimal-footer"],
                                style: {
                                    backgroundColor: H
                                }
                            }, o.createElement("div", {
                                className: _()["mf-wrap"]
                            }, ee ? o.createElement("a", {
                                onClick: function () {
                                    (0,
                                        k.Xt)(a.state.dataComponentName, a.state.dataComponentId, se)
                                },
                                "data-link-type": "footer",
                                "data-link-text": "footer-logo",
                                "data-link-url": w ? "/discover" : "/",
                                href: w ? "/discover" : "/"
                            }, o.createElement("picture", {
                                className: _()["mf-logo"]
                            }, ae && o.createElement("source", {
                                srcSet: "".concat(ae),
                                type: "image/webp"
                            }), o.createElement("source", {
                                srcSet: $,
                                type: ie
                            }), o.createElement("img", {
                                src: $,
                                alt: "Athenahealth",
                                className: _()["mf-logo"]
                            }))) : o.createElement("picture", {
                                className: _()["mf-logo"]
                            }, ae && o.createElement("source", {
                                srcSet: "".concat(ae),
                                type: "image/webp"
                            }), o.createElement("source", {
                                srcSet: $,
                                type: ie
                            }), o.createElement("img", {
                                src: $,
                                alt: "Athenahealth",
                                className: _()["mf-logo"]
                            })), o.createElement("div", {
                                className: "".concat(N ? "para-xs" : "", " ").concat(_()["footer-cta-contents"], " ", "footer-cta-contents")
                            }, j && Object.keys(j).map((function (e) {
                                return j[e]
                            }
                            )).map((function (e, t) {
                                var n = e && e.title && e.title[0] && e.title[0].value ? e.title[0].value : "";
                                return o.createElement("a", {
                                    onClick: function () {
                                        (0,
                                            k.Xt)(a.state.dataComponentName, a.state.dataComponentId, n)
                                    },
                                    "data-link-type": "footer",
                                    "data-link-text": e.title[0] ? e.title[0].value : "",
                                    "data-link-url": e.link[0] ? e.link[0].uri.replace("internal:", "") : "#",
                                    className: "".concat(_()["minifooter-links-sublink"], " ", "minifooter-links-sublink"),
                                    href: e.link[0] ? e.link[0].uri.replace("internal:", "") : "#",
                                    key: t
                                }, o.createElement("span", null, e.title[0] ? e.title[0].value : ""))
                            }
                            )), o.createElement("span", {
                                id: "cookie-preference-js",
                                className: "".concat(_()["cookie-preference"])
                            }, o.createElement("button", {
                                id: "ot-sdk-btn",
                                className: "".concat(_()["cookie-setting"], " ot-sdk-show-settings p1")
                            }, "Cookie Preferences")))));
                        else if ("minimal_footer" === q)
                            d = o.createElement("div", {
                                className: "".concat(_()["minimal-footer"], " ").concat(_()["minimal-footer-txt"]),
                                style: {
                                    backgroundColor: H
                                }
                            }, o.createElement("div", {
                                className: _()["mf-wrap"]
                            }, ee ? o.createElement("a", {
                                onClick: function () {
                                    (0,
                                        k.Xt)(a.state.dataComponentName, a.state.dataComponentId, se)
                                },
                                "data-link-type": "footer",
                                "data-link-text": "footer-logo",
                                "data-link-url": w ? "/discover" : "/",
                                href: w ? "/discover" : "/"
                            }, o.createElement("picture", {
                                style: {
                                    cursor: "pointer"
                                },
                                className: _()["mf-logo"]
                            }, ae && o.createElement("source", {
                                srcSet: "".concat(ae),
                                type: "image/webp"
                            }), o.createElement("source", {
                                srcSet: $,
                                type: ie
                            }), o.createElement("img", {
                                src: $,
                                alt: "Athenahealth",
                                className: _()["mf-logo"]
                            }))) : o.createElement("picture", {
                                className: _()["mf-logo"]
                            }, ae && o.createElement("source", {
                                srcSet: "".concat(ae),
                                type: "image/webp"
                            }), o.createElement("source", {
                                srcSet: $,
                                type: ie
                            }), o.createElement("img", {
                                src: $,
                                alt: "Athenahealth",
                                className: _()["mf-logo"]
                            })), o.createElement("div", {
                                className: _()["mf-txt-wrap"]
                            }, o.createElement("span", {
                                className: _()["mf-txt-cp"]
                            }, R, ", ", W, " "), o.createElement("span", {
                                className: _()["mf-txt-pp"]
                            }, o.createElement("a", {
                                target: "_blank",
                                href: Q
                            }, Z)), o.createElement("span", {
                                className: _()["mf-txt-disclaimer"],
                                dangerouslySetInnerHTML: {
                                    __html: K
                                }
                            }))));
                        else if ("minimal_footer_menu" !== q && "minimal_footer" !== q || "minimal_header_0_cta" !== V || "minimal_header_1_cta" !== V || "minimal_header_2_cta" !== V) {
                            var me = o.createElement("div", {
                                className: m().inverselogo
                            }, o.createElement("a", {
                                onClick: function () {
                                    (0,
                                        k.Xt)(a.state.dataComponentName, a.state.dataComponentId, se)
                                },
                                "data-link-type": "footer",
                                "data-link-text": "footer-logo",
                                "data-link-url": "/",
                                href: "/"
                            }, o.createElement("img", {
                                src: u,
                                width: "48",
                                height: "17",
                                alt: "Athenahealth",
                                className: m()["icon-image"]
                            })))
                                , de = o.createElement(r.A, {
                                    className: m().footerbottom
                                }, o.createElement("div", {
                                    className: m().footerbottom_logo_cta
                                }, me, o.createElement("div", {
                                    className: m().icono_cta
                                }, o.createElement("div", {
                                    className: "".concat(N ? "new_cta_icons" : "col-sm-3", " ").concat(m()["footer-cta-icons"], " ", "footer-cta-icons")
                                }, A && Object.keys(A).map((function (e) {
                                    return A[e]
                                }
                                )).map((function (e, t) {
                                    var n = e && e[0] && e[0].name && e[0].name[0] && e[0].name[0].value ? e[0].name[0].value : ""
                                        , l = e && e[0] && e[0].field_social_media_icon && e[0].field_social_media_icon.image_details && e[0].field_social_media_icon.image_details.rel_url ? e[0].field_social_media_icon.image_details.rel_url : ""
                                        , i = e && e[0] && e[0].field_social_media_icon && e[0].field_social_media_icon.image_details && e[0].field_social_media_icon.image_details.webp_image_url ? e[0].field_social_media_icon.image_details.webp_image_url : ""
                                        , c = e && e[0] && e[0].field_social_media_link && e[0].field_social_media_link[0] && e[0].field_social_media_link[0].value ? e[0].field_social_media_link[0].value : "#"
                                        , r = "image/".concat((0,
                                            k.yg)(l));
                                    return o.createElement("a", {
                                        onClick: function () {
                                            (0,
                                                k.Xt)(a.state.dataComponentName, a.state.dataComponentId, n)
                                        },
                                        "data-link-type": "footer",
                                        "data-link-text": "footer-social",
                                        "data-link-url": c,
                                        className: m()["megafooter-links-sublink"],
                                        href: c,
                                        key: t
                                    }, o.createElement("picture", {
                                        className: m()["icon-image"]
                                    }, i && o.createElement("source", {
                                        srcSet: "".concat(i),
                                        type: "image/webp"
                                    }), o.createElement("source", {
                                        srcSet: l,
                                        type: r
                                    }), o.createElement("img", {
                                        src: l,
                                        width: "0",
                                        height: "64",
                                        alt: "Athenahealth",
                                        className: m()["icon-image"]
                                    })))
                                }
                                ))), o.createElement("div", {
                                    className: "".concat(N ? "new-footer-cta" : "col-sm-3", " ").concat(m()["footer-cta"])
                                }, o.createElement(g.default, {
                                    ctaType: oe,
                                    ctaUrl: z ? U : "javascript:void(0)",
                                    ctaLabel: z ? F : X,
                                    ctaStyle: ne,
                                    ctaFormID: le,
                                    dataComponentName: this.state.dataComponentName,
                                    dataMachineName: "Footer",
                                    ctaLinkTarget: "Link" == z ? B : ""
                                })))), o.createElement("div", {
                                    className: "".concat(N ? "footerbottom_ctafooterlinks" : "col-sm-6 para-xs", " ").concat(m()["footer-cta-contents"], " ", "footer-cta-contents")
                                }, j && Object.keys(j).map((function (e) {
                                    return j[e]
                                }
                                )).map((function (e, t) {
                                    var n = e && e.title && e.title[0] && e.title[0].value ? e.title[0].value : "";
                                    return o.createElement("a", {
                                        onClick: function () {
                                            (0,
                                                k.Xt)(a.state.dataComponentName, a.state.dataComponentId, n)
                                        },
                                        "data-link-type": "footer",
                                        "data-link-text": e.title[0] ? e.title[0].value : "",
                                        "data-link-url": e.link[0] ? e.link[0].uri.replace("internal:", "") : "#",
                                        className: "".concat(m()["megafooter-links-sublink"], " ", "megafooter-links-sublink", " p1"),
                                        href: e.link[0] ? e.link[0].uri.replace("internal:", "") : "#",
                                        key: t
                                    }, " ", o.createElement("span", null, e.title[0] ? e.title[0].value : ""))
                                }
                                )), o.createElement("span", {
                                    id: "cookie-preference-js",
                                    className: "".concat(m()["cookie-preference"])
                                }, o.createElement("button", {
                                    id: "ot-sdk-btn",
                                    className: "".concat(m()["cookie-setting"], " ot-sdk-show-settings p1")
                                }, "Cookie Preferences")), I ? o.createElement("span", {
                                    onClick: function () {
                                        (0,
                                            k.Xt)(a.state.dataComponentName, a.state.dataComponentId, re)
                                    },
                                    className: "".concat(m()["megafooter-links-sublink"], " ", "megafooter-links-sublink", " p1"),
                                    dangerouslySetInnerHTML: {
                                        __html: I
                                    }
                                }) : ""))
                                , _e = o.createElement(r.A, null, o.createElement("div", {
                                    className: "".concat(N ? "col-sm-4" : "col-sm-3", " ").concat(m()["footer-cta"])
                                }, o.createElement(g.default, {
                                    ctaType: oe,
                                    ctaUrl: z ? U : "javascript:void(0)",
                                    ctaLabel: z ? F : X,
                                    ctaStyle: ne,
                                    ctaFormID: le,
                                    dataComponentName: this.state.dataComponentName,
                                    dataMachineName: "Footer",
                                    ctaLinkTarget: "Link" == z ? B : ""
                                })), o.createElement("div", {
                                    className: "".concat("col-sm-6 para-xs", " ").concat(m()["footer-cta-contents"], " ", "footer-cta-contents")
                                }, j && Object.keys(j).map((function (e) {
                                    return j[e]
                                }
                                )).map((function (e, t) {
                                    var n = e && e.title && e.title[0] && e.title[0].value ? e.title[0].value : "";
                                    return o.createElement("a", {
                                        onClick: function () {
                                            (0,
                                                k.Xt)(a.state.dataComponentName, a.state.dataComponentId, n)
                                        },
                                        "data-link-type": "footer",
                                        "data-link-text": e.title[0] ? e.title[0].value : "",
                                        "data-link-url": e.link[0] ? e.link[0].uri.replace("internal:", "") : "#",
                                        className: "".concat(m()["megafooter-links-sublink"], " ", "megafooter-links-sublink", " p1"),
                                        href: e.link[0] ? e.link[0].uri.replace("internal:", "") : "#",
                                        key: t
                                    }, " ", o.createElement("span", null, e.title[0] ? e.title[0].value : ""))
                                }
                                )), o.createElement("span", {
                                    id: "cookie-preference-js",
                                    className: "".concat(m()["cookie-preference"])
                                }, o.createElement("button", {
                                    id: "ot-sdk-btn",
                                    className: "".concat(m()["cookie-setting"], " ot-sdk-show-settings p1")
                                }, "Cookie Preferences")), I ? o.createElement("span", {
                                    onClick: function () {
                                        (0,
                                            k.Xt)(a.state.dataComponentName, a.state.dataComponentId, re)
                                    },
                                    className: "".concat(m()["megafooter-links-sublink"], " ", "megafooter-links-sublink", " p1"),
                                    dangerouslySetInnerHTML: {
                                        __html: I
                                    }
                                }) : ""), o.createElement("div", {
                                    className: "".concat(N ? "col-sm-2" : "col-sm-3", " ").concat(m()["footer-cta-icons"], " ", "footer-cta-icons")
                                }, A && Object.keys(A).map((function (e) {
                                    return A[e]
                                }
                                )).map((function (e, t) {
                                    var n = e[0].name && e[0].name[0] && e[0].name[0].value ? e[0].name[0].value : ""
                                        , l = e[0].field_social_media_icon && e[0].field_social_media_icon.image_details ? e[0].field_social_media_icon.image_details.rel_url : ""
                                        , i = e[0].field_social_media_icon && e[0].field_social_media_icon.image_details && e[0].field_social_media_icon.image_details.webp_image_url ? e[0].field_social_media_icon.image_details.webp_image_url : ""
                                        , c = "image/".concat((0,
                                            k.yg)(l));
                                    return o.createElement("a", {
                                        onClick: function () {
                                            (0,
                                                k.Xt)(a.state.dataComponentName, a.state.dataComponentId, n)
                                        },
                                        "data-link-type": "footer",
                                        "data-link-text": "footer-social",
                                        "data-link-url": e[0].field_social_media_link[0] ? e[0].field_social_media_link[0].value : "#",
                                        className: m()["megafooter-links-sublink"],
                                        href: e[0].field_social_media_link[0] ? e[0].field_social_media_link[0].value : "#",
                                        key: t
                                    }, o.createElement("picture", {
                                        className: m()["icon-image"]
                                    }, i && o.createElement("source", {
                                        srcSet: "".concat(i),
                                        type: "image/webp"
                                    }), o.createElement("source", {
                                        srcSet: l,
                                        type: c
                                    }), o.createElement("img", {
                                        src: l,
                                        width: "30",
                                        height: "64",
                                        alt: "Athenahealth",
                                        className: m()["icon-image"]
                                    })))
                                }
                                ))))
                                , fe = o.createElement("div", {
                                    className: m()["footer-logo-wrapper"]
                                }, o.createElement("a", {
                                    onClick: function () {
                                        (0,
                                            k.Xt)(a.state.dataComponentName, a.state.dataComponentId, se)
                                    },
                                    "data-link-type": "footer",
                                    "data-link-text": "footer-logo",
                                    "data-link-url": w ? "/discover" : "/",
                                    href: w ? "/discover" : "/"
                                }, o.createElement("picture", {
                                    className: m()["footer-logo"]
                                }, ae && o.createElement("source", {
                                    srcSet: "".concat(ae),
                                    type: "image/webp"
                                }), o.createElement("source", {
                                    srcSet: $,
                                    type: ie
                                }), o.createElement("img", {
                                    src: $,
                                    width: "161",
                                    height: "24",
                                    alt: "Athenahealth",
                                    className: m()["footer-logo"]
                                }))));
                            h = o.createElement("footer", {
                                className: "footer"
                            }, o.createElement("div", {
                                className: m()["desktop-rows"]
                            }, N ? "" : fe, C.map((function (e, t) {
                                return o.createElement("div", {
                                    className: m()["footer-content-wrapper"],
                                    key: t,
                                    id: t,
                                    name: e[0] ? e[0].name : ""
                                }, N ? o.createElement("p", {
                                    className: "subhead-3"
                                }, o.createElement("a", {
                                    className: m()["title-text"],
                                    name: e[0] ? e[0].name : ""
                                }, e[0] ? e[0].name : "")) : o.createElement("h4", {
                                    className: "subhead-3"
                                }, o.createElement("a", {
                                    className: m()["title-text"],
                                    name: e[0] ? e[0].name : ""
                                }, e[0] ? e[0].name : "")), o.createElement("div", {
                                    className: "".concat("para-xs", " ").concat(m()["sub-menu-list"])
                                }, o.createElement("ul", {
                                    className: m()["megafooter-links"]
                                }, e[0].child && Object.keys(e[0].child).map((function (t) {
                                    return e[0].child[t]
                                }
                                )).map((function (t, n) {
                                    var l, i = {}, c = e && e[0] && e[0].name ? e[0].name : "", r = t && t.name ? t.name : "";
                                    return t.attached_modal_popup && 0 != t.attached_modal_popup.length && (i.onClick = function (e) {
                                        a.openPatientModal(e, t)
                                    }
                                    ),
                                        l = "services" == e[0].unique_name_footer ? "/" + t.unique_name_footer : t.url_str,
                                        o.createElement("li", {
                                            key: n
                                        }, o.createElement("a", v({
                                            "data-link-type": "footer",
                                            "data-link-text": t.name ? t.name.trim() : "",
                                            "data-link-url": l,
                                            className: "".concat(m()["megafooter-links-sublink"], " p1"),
                                            href: l || "#"
                                        }, i, {
                                            onClick: function () {
                                                return (0,
                                                    k.Xt)(a.state.dataComponentName, a.state.dataComponentId, c, r)
                                            }
                                        }), t.name ? t.name.trim() : ""))
                                }
                                )))))
                            }
                            ))), N ? de : _e),
                                y = o.createElement("div", {
                                    className: "".concat(m()["footer-mobile-wrapper"], " ", "footer-mobile-wrapper")
                                }, o.createElement("footer", {
                                    className: "footer"
                                }, o.createElement("div", {
                                    className: "".concat(m().container, " container")
                                }, o.createElement("div", {
                                    className: m()["footer-logo-mobile-wrapper"]
                                }, o.createElement("a", {
                                    "data-link-type": "footer",
                                    "data-link-text": "footer-logo",
                                    "data-link-url": w ? "/discover" : "/",
                                    href: w ? "/discover" : "/"
                                }, o.createElement("picture", {
                                    className: m()["footer-logo-mobile"]
                                }, ae && o.createElement("source", {
                                    srcSet: "".concat(ae),
                                    type: "image/webp"
                                }), o.createElement("source", {
                                    srcSet: $,
                                    type: ie
                                }), o.createElement("img", {
                                    src: $,
                                    width: "30",
                                    height: "64",
                                    alt: "Athenahealth",
                                    className: m()["footer-logo-mobile"]
                                })))), C && C.map((function (e, t) {
                                    t += 1;
                                    var r = m().arrowUp
                                        , d = m().arrowDown
                                        , _ = s === t ? r : d;
                                    return o.createElement(n.A, {
                                        key: t
                                    }, o.createElement("div", {
                                        className: "".concat(m()["footer-item"], " ", "footer-item")
                                    }, o.createElement(l.A, {
                                        className: "".concat(m()["footer-item"], " ").concat(m()["card-header"], " ").concat(_, " ").concat(N ? "subhead-3" : ""),
                                        onClick: a.toggle,
                                        "data-event": t
                                    }, o.createElement("span", {
                                        onClick: a.toggle,
                                        "data-event": t
                                    }, e[0] ? e[0].name : "")), o.createElement(i.A, {
                                        isOpen: s === t
                                    }, o.createElement(c.A, {
                                        className: N ? "para-xs" : ""
                                    }, o.createElement("ul", null, e[0].child && Object.keys(e[0].child).map((function (t) {
                                        return e[0].child[t]
                                    }
                                    )).map((function (t, n) {
                                        var l, i = {}, c = e && e[0] && e[0].name ? e[0].name : "", r = t && t.name ? t.name : "";
                                        return t.attached_modal_popup && 0 != t.attached_modal_popup.length && (i.onClick = function (e) {
                                            a.openPatientModal(e, t)
                                        }
                                        ),
                                            l = "services" == e[0].unique_name_footer ? "/" + t.unique_name_footer : t.url_str,
                                            o.createElement("li", {
                                                className: "megafooter-links-item".concat(" ", m()["submenu-list"]),
                                                key: n
                                            }, o.createElement("a", v({
                                                "data-link-type": "footer",
                                                "data-link-text": t.name ? t.name.trim() : "",
                                                "data-link-url": l,
                                                href: l || "#"
                                            }, i, {
                                                onClick: function () {
                                                    return (0,
                                                        k.Xt)(a.state.dataComponentName, a.state.dataComponentId, c, r)
                                                }
                                            }), t.name ? t.name : ""))
                                    }
                                    )))))))
                                }
                                )), N ? me : "", o.createElement("div", {
                                    className: "".concat(m()["footer-mobile-cta-icons"], " ", "footer-mobile-cta-icons")
                                }, A && Object.keys(A).map((function (e) {
                                    return A[e]
                                }
                                )).map((function (e, t) {
                                    var n = e && e[0] && e[0].name && e[0].name[0] && e[0].name[0].value ? e[0].name[0].value : ""
                                        , l = e && e[0] && e[0].field_social_media_icon && e[0].field_social_media_icon.image_details && e[0].field_social_media_icon.image_details.rel_url ? e[0].field_social_media_icon.image_details.rel_url : ""
                                        , i = e && e[0] && e[0].field_social_media_icon && e[0].field_social_media_icon.image_details && e[0].field_social_media_icon.image_details.webp_image_url ? e[0].field_social_media_icon.image_details.webp_image_url : ""
                                        , c = e && e[0] && e[0].field_social_media_link && e[0].field_social_media_link[0] && e[0].field_social_media_link[0].value ? e[0].field_social_media_link[0].value : "#"
                                        , r = "image/".concat((0,
                                            k.yg)(l));
                                    return o.createElement("a", {
                                        onClick: function () {
                                            (0,
                                                k.Xt)(a.state.dataComponentName, a.state.dataComponentId, n)
                                        },
                                        className: "".concat(m()["megafooter-links-sublink"], " ", "megafooter-links-sublink"),
                                        href: c,
                                        key: t
                                    }, o.createElement("picture", {
                                        className: m()["icon-image"]
                                    }, i && o.createElement("source", {
                                        srcSet: "".concat(i),
                                        type: "image/webp"
                                    }), o.createElement("source", {
                                        srcSet: l,
                                        type: r
                                    }), o.createElement("img", {
                                        src: l,
                                        width: "30",
                                        height: "64",
                                        alt: "Athenahealth",
                                        className: m()["icon-image"]
                                    })))
                                }
                                ))), o.createElement("div", {
                                    className: m()["footer-mobile-cta"]
                                }, o.createElement(g.default, {
                                    ctaType: oe,
                                    ctaUrl: z ? U : "javascript:void(0)",
                                    ctaLabel: z ? F : X,
                                    ctaStyle: ne,
                                    ctaFormID: le,
                                    dataComponentName: this.state.dataComponentName,
                                    dataMachineName: "Footer",
                                    ctaLinkTarget: "Link" == z ? B : ""
                                })), o.createElement("div", {
                                    className: "".concat(m()["footer-mobile-cta-contents"], " ", "footer-mobile-cta-contents", " ").concat(N ? "para-xs" : "")
                                }, j && Object.keys(j).map((function (e) {
                                    return j[e]
                                }
                                )).map((function (e, t) {
                                    var n = e && e.title && e.title[0] && e.title[0].value ? e.title[0].value : "";
                                    return o.createElement("a", {
                                        onClick: function () {
                                            (0,
                                                k.Xt)(a.state.dataComponentName, a.state.dataComponentId, n)
                                        },
                                        "data-link-type": "footer",
                                        "data-link-text": e.title[0] ? e.title[0].value : "",
                                        "data-link-url": e.link[0] ? e.link[0].uri.replace("internal:", "") : "#",
                                        className: "".concat(m()["megafooter-links-sublink"], " ", "megafooter-links-sublink"),
                                        href: e.link[0] ? e.link[0].uri.replace("internal:", "") : "#",
                                        key: t
                                    }, o.createElement("span", null, e.title[0] ? e.title[0].value : ""))
                                }
                                )), o.createElement("span", {
                                    id: "cookie-preference-js",
                                    className: "".concat(m()["cookie-preference"])
                                }, o.createElement("button", {
                                    id: "ot-sdk-btn",
                                    className: "".concat(m()["cookie-setting"], " ot-sdk-show-settings")
                                }, "Cookie Preferences")), o.createElement("p", null, o.createElement("span", {
                                    className: "".concat(m()["megafooter-links-sublink"], " ", "megafooter-links-sublink"),
                                    onClick: function () {
                                        (0,
                                            k.Xt)(a.state.dataComponentName, a.state.dataComponentId, "call-us")
                                    },
                                    dangerouslySetInnerHTML: {
                                        __html: I
                                    }
                                })))), o.createElement(p.default, {
                                    isGated: P,
                                    openGatedVideo: this.state.openGatedVideo
                                })))
                        }
                        return o.createElement("section", {
                            className: "".concat(m()["footer-wrapper"], " ", "footer-wrapper", " ").concat(ce),
                            "data-componentname": this.state.dataComponentName
                        }, d, o.createElement("div", {
                            className: "".concat(m()["desktop-hide"], " ", "desktop-hide")
                        }, h), o.createElement("div", {
                            className: "".concat(m()["mobile-hide"], " ", "mobile-hide")
                        }, y), this.state.showModal && o.createElement(b.default, {
                            open: this.state.showModal,
                            closeHandler: this.closePatientModal,
                            data: this.state.modalData,
                            isLogoModal: !0,
                            isAhcomOrKhub: N
                        }))
                    }
                }],
                s && E(a.prototype, s),
                Object.defineProperty(a, "prototype", {
                    writable: !1
                }),
                a;
            var a, s
        }(o.Component)
    }
    ,
    48235: e => {
        e.exports = {
            "inherit-parent-typo": "jg1_c",
            "footer-wrapper": "sDyQx",
            "footer-mobile-wrapper": "XTaG5",
            container: "_Z4UJ",
            "footer-item": "PBpWj",
            "desktop-hide": "oLCwv",
            "megafooter-links-item": "AB1ew",
            "footer-mobile-cta-contents": "EfyVm",
            "megafooter-links-sublink": "l2ldQ",
            "cookie-preference": "X846e",
            "footer-redesign": "V3AxV",
            "footer-cta": "nG4Zg",
            "footer-mobile-cta": "k74iI",
            "col-sm-2": "RP0FY",
            logo: "FR5XI",
            "footer-logo": "DE55G",
            "desktop-rows": "exWdb",
            "footer-content-wrapper": "ztx2i",
            "title-text": "hSNB3",
            "sub-menu-list": "haD8z",
            "megafooter-links": "IR_KQ",
            "footer-cta-contents": "KiYNi",
            "footer-cta-icons": "WMrnj",
            "icon-image": "rCjFw",
            bottom: "WIBtO",
            "card-header": "Qadqx",
            card: "pTwMd",
            arrowDown: "i6L0w",
            arrowUp: "f5u9N",
            "footer-logo-mobile-wrapper": "MvXAz",
            "footer-logo-mobile": "Zpj_T",
            "footer-mobile-cta-icons": "XPI63",
            "cookie-setting": "NTsIP",
            "submenu-list": "Xck94",
            "footer-logo-wrapper": "HCk4q",
            footerbottom: "phUDE",
            footerbottom_logo_cta: "xENMN",
            inverselogo: "Zkkt9",
            icono_cta: "DVYND"
        }
    }
    ,
    19738: e => {
        e.exports = {
            "inherit-parent-typo": "xZzaq",
            "minimal-footer": "atiTc",
            "mf-wrap": "wj0hM",
            "mf-logo": "qwOse",
            "mf-txt-wrap": "GfMjS",
            "mf-txt-pp": "dGBaV",
            "mf-txt-disclaimer": "nrN3S",
            "mf-txt-cp": "U3uJs",
            "footer-cta-contents": "aTQoQ",
            "minifooter-links-sublink": "SubYV",
            "cookie-preference": "DPPHJ",
            "cookie-setting": "Utj6n",
            "footer-title-adjacent": "rplev"
        }
    }
    ,
    35415: (e, t, a) => {
        "use strict";
        e.exports = a.p + "2d2a8c051d129d563f39.png"
    }
}]);
