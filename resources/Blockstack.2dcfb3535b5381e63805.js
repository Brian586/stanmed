(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__ || []).push([[8070, 5538], {
    93689: (e, t, r)=> {
        "use strict";

        r.r(t),
        r.d(t, {
            default: ()=>v
        });
    var n=r(96540), o=r(73427), i=r.n(o), l=r(61038), a=(r(29921),
        r(84315),
        r(7452),
        r(47653));

    function c(e) {
        return c="function"==typeof Symbol && "symbol"==typeof Symbol.iterator ? function(e) {
            return typeof e
        }

        : function(e) {
            return e && "function"==typeof Symbol && e.constructor===Symbol && e !==Symbol.prototype ? "symbol" : typeof e
        }

        ,
        c(e)
    }

    function s() {
        return s=Object.assign ? Object.assign.bind() : function(e) {
            for (var t=1; t < arguments.length; t++) {
                var r=arguments[t];

                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n]=r[n])
        }

        return e
    }

    ,
    s.apply(null, arguments)
}

function u(e, t, r) {
    return (t=m(t))in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t]=r,
e
}

function f(e, t) {
    (null==t || t > e.length) && (t=e.length);
    for (var r=0, n=Array(t); r < t; r++) n[r]=e[r];
    return n
}

function d(e, t) {
    for (var r=0; r < t.length; r++) {
        var n=t[r];
        n.enumerable=n.enumerable || !1,
        n.configurable= !0,
        "value" in n && (n.writable= !0),
        Object.defineProperty(e, m(n.key), n)
    }
}

function m(e) {
    var t=function(e, t) {
        if ("object" !=c(e) || !e) return e;
        var r=e[Symbol.toPrimitive];

        if (void 0 !==r) {
            var n=r.call(e, "string");
            if ("object" !=c(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }

        return String(e)
    }

    (e);
    return "symbol"==c(t) ? t : t + ""
}

function b(e, t, r) {

    return t=_(t),
    function(e, t) {
        if (t && ("object"==c(t) || "function"==typeof t)) return t;
        if (void 0 !==t) throw new TypeError("Derived constructors may only return object or undefined");

        return function(e) {
            if (void 0===e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        (e)
    }

    (e, p() ? Reflect.construct(t, r || [], _(e).constructor) : t.apply(e, r))
}

function p() {
    try {
        var e= !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    }

    catch (e) {}

    return (p=function() {
            return ! !e
        })()
}

function _(e) {
    return _=Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }

    ,
    _(e)
}

function y(e, t) {
    return y=Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__=t,
        e
    }

    ,
    y(e, t)
}

var v=function(e) {
    function t(e) {
        var r;

        return function(e, t) {
            if ( !(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        (this, t),
        (r=b(this, t, [e])).state= {
            windowSize: 851,
            foundScript: !1,
            dataComponentName: "Blockstack"
        }

        ,
        r.globaldata=(0,
            l.y_)(r.props.itemContent.global_data),
        r
    }

    return function(e, t) {
        if ("function" !=typeof t && null !==t) throw new TypeError("Super expression must either be null or a function");

        e.prototype=Object.create(t && t.prototype, {
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
}

(t, e),
r=t,
(o=[ {

        key: "componentDidMount",
        value: function() {
            var e=this;

            this.setState({
                windowSize: window.innerWidth
            }),
        (0,
            l.pK)("wwa_content_blocks", this.state.dataComponentName);
        var t=document.querySelectorAll("div.fly-in"), r=window.appEventData || [];

        if (r && r.length > 0 && r && r.map((function(e, r) {
                        if ("Component Loaded"===e.event && "tile_module"===e.component.componentID) {
                            var n=t.length;
                            e.component.componentID=n + "_tile_module"
                        }

                    })),
            window.onscroll=function() {
                var e, r=function(e, t) {
                    var r="undefined" !=typeof Symbol && e[Symbol.iterator] || e["@@iterator"];

                    if ( !r) {
                        if (Array.isArray(e) || (r=function(e, t) {
                                    if (e) {
                                        if ("string"==typeof e) return f(e, t);

                                        var r= {}

                                        .toString.call(e).slice(8, -1);
                                        return "Object"===r && e.constructor && (r=e.constructor.name),
                                        "Map"===r || "Set"===r ? Array.from(e) : "Arguments"===r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? f(e, t) : void 0
                                    }
                                }

                                (e)) || t && e && "number"==typeof e.length) {
                            r && (e=r);

                            var n=0, o=function() {}

                            ;

                            return {

                                s: o,
                                n: function() {
                                    return n >=e.length ? {
                                        done: !0
                                    }

                                    : {
                                        done: !1,
                                        value: e[n++]
                                    }
                                }

                                ,
                                e: function(e) {
                                    throw e
                                }

                                ,
                                f: o
                            }
                        }

                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }

                    var i, l= !0, a= !1;

                    return {
                        s: function() {
                            r=r.call(e)
                        }

                        ,
                        n: function() {
                            var e=r.next();
                            return l=e.done,
                            e
                        }

                        ,
                        e: function(e) {
                            a= !0,
                            i=e
                        }

                        ,
                        f: function() {
                            try {
                                l || null==r.return || r.return()
                            }

                            finally {
                                if (a) throw i
                            }
                        }
                    }
                }

                (t);

                try {
                    for (r.s(); !(e=r.n()).done; ) {
                        var n=e.value;
                        n.getBoundingClientRect().top <=.75 * window.innerHeight && n.getBoundingClientRect().bottom > 120 && n.classList.add("visible")
                    }
                }

                catch (e) {
                    r.e(e)
                }

                finally {
                    r.f()
                }
            }

            ,
            !this.state.foundScript) {
            var n=(0,
                l.z2)();

            n.onload=function() {
                e.setState({
                    foundScript: !0
                })
        }

        ,
        document.body.appendChild(n)
    }
}
}

, {

key: "render",
value: function() {
    var e, t, r, o, c, f=this, d=this.props.itemContent, m=d && d ? d.wwa : "";

    m && (e=Object.values(m).slice(0, 3).map((function(e, t) {
                    0===t || 2===t ? r="left-align" : 1===t && (r="right-align");
                    var i=1===t ? "small-icon" : ""
                    , l=e.field_wwa_cb_title_color ? e.field_wwa_cb_title_color : ""
                    , a=e.field_wwa_cb_video ? e.field_wwa_cb_video : "";

                    return f.state.windowSize < 851 ? (o=e.field_img ? e.field_img.rel_url : "",
                        c=e.field_img ? e.field_img.options.alt : "") : (o=e.field_image ? e.field_image.rel_url : "",
                        c=e.field_image ? e.field_image.options.alt : ""),
                    n.createElement("div", {
                        className: "fly-in " + r,
                        key: t
                    }

                    , n.createElement("div", {
                        className: "blockstack-titledivider"
                    }

                    , n.createElement("span", {
                        className: "divider"

                    }), n.createElement("h4", {

                    className: "blockstack-title subhead-2",
                    style: {
                        color: l
                    }

                    ,
                    dangerouslySetInnerHTML: {
                        __html: e.field_wwa_cb_title ? e.field_wwa_cb_title : ""
                    }

                })), n.createElement("div", {
            className: "blockstack-media " + i
        }

        , a ? n.createElement("div", {
            "data-video-ids": a,
            "data-experience": "5b0f79545eecca0010826d71"

        }) : n.createElement("img", {
        src: o,
        alt: c

    })), n.createElement("div", {
    className: "blockstack-content"
}

, n.createElement("div", {

    className: "blockstack-desc p1 para-sm",
    dangerouslySetInnerHTML: {
        __html: e.field_article_highlights_title ? e.field_article_highlights_title : ""
    }

}), n.createElement("div", {

    className: "blockstack-link p1",
    dangerouslySetInnerHTML: {
        __html: e.field_article_highlights_bullets ? e.field_article_highlights_bullets : ""
    }
})))

})),
t=Object.values(m).slice(3, 6).map((function(e, t) {
            0===t ? r="first-btm-block" : 1===t && (r="second-btm-block");
            var i=e.field_wwa_cb_video ? e.field_wwa_cb_video : "";
            f.state.windowSize < 851 ? (o=e.field_img ? e.field_img.rel_url : "",
                c=e.field_img ? e.field_img.options.alt : "") : (o=e.field_image ? e.field_image.rel_url : "",
                c=e.field_image ? e.field_image.options.alt : "");
            var l=e.field_wwa_cb_title_color ? e.field_wwa_cb_title_color : "";

            return n.createElement("div", {
                className: "fly-in bottom-align " + r,
                key: t
            }

            , n.createElement("div", {
                className: "blockstack-titledivider"
            }

            , n.createElement("span", {
                className: "divider"

            }), n.createElement("h4", {

            className: "blockstack-title subhead-2",
            style: {
                color: l
            }

            ,
            dangerouslySetInnerHTML: {
                __html: e.field_wwa_cb_title ? e.field_wwa_cb_title : ""
            }

        })), n.createElement("div", {
    className: "blockstack-media small-icon"
}

, i ? n.createElement("div", {
    "data-video-ids": i,
    "data-experience": "5b0f79545eecca0010826d71"

}) : n.createElement("img", {
    src: o,
    alt: c

})), n.createElement("div", {
    className: "blockstack-content"
}

, n.createElement("div", {

    className: "blockstack-desc p1 para-sm",
    dangerouslySetInnerHTML: {
        __html: e.field_article_highlights_title ? e.field_article_highlights_title : ""
    }

}), n.createElement("div", {

    className: "blockstack-link p1",
    dangerouslySetInnerHTML: {
        __html: e.field_article_highlights_bullets ? e.field_article_highlights_bullets : ""
    }
})))
})));

var b=(0,
    l.y_)(d.global_data), p=b.containerStyles, _=b.hasTopDivider, y=b.hasBottomDivider, v=b.border, g=b.background, h=u(u(u(u({}

            , "data-componentname", this.state.dataComponentName), "data-componentid", "wwa_content_blocks"), "component-order", this.props.componentOrder), "style", {
backgroundColor: g
}), w=(0,
    l.Nw)(g || "#ffffff");

return n.createElement("section", s({
        className: "blockstack-wrapper component-order"
    }

    , h), n.createElement(a.default, {
    visibility: _,
    borderStyle: v

}), n.createElement("div", {
    className: "" .concat(i()["blockstack-cntnr"], " ").concat(i()[w]),
    style: p
}

, n.createElement("div", {
    className: "grid-row"
}

, e), n.createElement("div", {
    className: "grid-row btm-align-tile"
}

, t)), n.createElement(a.default, {
    visibility: y,
    borderStyle: v
}))
}
}

]) && d(r.prototype, o),
Object.defineProperty(r, "prototype", {
    writable: !1
}),
r;
var r, o
}

(n.Component)
}

,
47653: (e, t, r)=> {
    "use strict";

    r.r(t),
    r.d(t, {
        default: ()=>c
    });
var n=r(96540);

function o(e) {
    return o="function"==typeof Symbol && "symbol"==typeof Symbol.iterator ? function(e) {
        return typeof e
    }

    : function(e) {
        return e && "function"==typeof Symbol && e.constructor===Symbol && e !==Symbol.prototype ? "symbol" : typeof e
    }

    ,
    o(e)
}

function i(e, t) {
    var r=Object.keys(e);

    if (Object.getOwnPropertySymbols) {
        var n=Object.getOwnPropertySymbols(e);

        t && (n=n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))),
        r.push.apply(r, n)
    }

    return r
}

function l(e) {
    for (var t=1; t < arguments.length; t++) {
        var r=null !=arguments[t] ? arguments[t] : {}

        ;

        t % 2 ? i(Object(r), !0).forEach((function(t) {
                    a(e, t, r[t])

                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
    }

    return e
}

function a(e, t, r) {
    return (t=function(e) {
            var t=function(e, t) {
                if ("object" !=o(e) || !e) return e;
                var r=e[Symbol.toPrimitive];

                if (void 0 !==r) {
                    var n=r.call(e, "string");
                    if ("object" !=o(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }

                return String(e)
            }

            (e);
            return "symbol"==o(t) ? t : t + ""
        }

        (t))in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t]=r,
e
}

function c(e) {
    var t=e.visibility, r=void 0 !==t && t, o=e.borderStyle, i=e.style;
    if ( !r) return null;

    var a= {
        style: l({
            margin: " 0 auto",
            borderRight: "0",
            borderLeft: "0",
            borderBottom: "0",
            borderTop: o || "1px solid #d8d8d8",
            maxWidth: "896px",
            width: "calc(100% - 60px)",
            minWidth: "315px"
        }

        , void 0===i ? {}

        : i)
}

;
return n.createElement(n.Fragment, null, r && n.createElement("hr", a))
}
}

,
73427: e=> {
    e.exports= {
        "inherit-parent-typo": "EaIh_",
        "blockstack-cntnr": "aGxbT",
        "ee-components-style-playButton": "loA50",
        "dark-tone": "_0zvRY",
        "light-tone": "QQZZJ"
    }
}
}

]);