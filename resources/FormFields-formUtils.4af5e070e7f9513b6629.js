"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[100], {
    51121: (e, r, t) => {
        function i(e) {
            return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                i(e)
        }
        function o(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                r && (i = i.filter((function (r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable
                }
                ))),
                    t.push.apply(t, i)
            }
            return t
        }
        function a(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? o(Object(t), !0).forEach((function (r) {
                    n(e, r, t[r])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function (r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }
                ))
            }
            return e
        }
        function n(e, r, t) {
            return (r = function (e) {
                var r = function (e, r) {
                    if ("object" != i(e) || !e)
                        return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var o = t.call(e, "string");
                        if ("object" != i(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == i(r) ? r : r + ""
            }(r)) in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t,
                e
        }
        function l(e, r) {
            return function (e) {
                if (Array.isArray(e))
                    return e
            }(e) || function (e, r) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != t) {
                    var i, o, a, n, l = [], s = !0, _ = !1;
                    try {
                        if (a = (t = t.call(e)).next,
                            0 === r) {
                            if (Object(t) !== t)
                                return;
                            s = !1
                        } else
                            for (; !(s = (i = a.call(t)).done) && (l.push(i.value),
                                l.length !== r); s = !0)
                                ;
                    } catch (e) {
                        _ = !0,
                            o = e
                    } finally {
                        try {
                            if (!s && null != t.return && (n = t.return(),
                                Object(n) !== n))
                                return
                        } finally {
                            if (_)
                                throw o
                        }
                    }
                    return l
                }
            }(e, r) || _(e, r) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function s(e) {
            return function (e) {
                if (Array.isArray(e))
                    return c(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || _(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function _(e, r) {
            if (e) {
                if ("string" == typeof e)
                    return c(e, r);
                var t = {}.toString.call(e).slice(8, -1);
                return "Object" === t && e.constructor && (t = e.constructor.name),
                    "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? c(e, r) : void 0
            }
        }
        function c(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, i = Array(r); t < r; t++)
                i[t] = e[t];
            return i
        }
        t.r(r),
            t.d(r, {
                checkIfFormPageType: () => N,
                checkIsFieldRenderable: () => q,
                convertArrayToString: () => x,
                convertStringToArray: () => P,
                extractFormData: () => v,
                extractId: () => D,
                fireAnalyticsEvent: () => C,
                fireFormEventsPostSubmission: () => A,
                formInitialState: () => u,
                generateDateConstraint: () => S,
                generateFormEssentials: () => g,
                getDefaultFieldDataType: () => h,
                getFormDataToSend: () => y,
                getFormGobalData: () => F,
                getFormType: () => w,
                getPdfShortName: () => O,
                getrequiredHelperText: () => d,
                preFillFormData: () => b,
                prepareLabelList: () => p,
                validationMap: () => m
            }),
            t(95849);
        var u = {
            fname: "",
            showPopup: !1,
            webform_values: {
                FirstName: "",
                LastName: "",
                current_ehr: "",
                organization_role: "",
                Email: "",
                Phone: "",
                State: "",
                State_open: !1,
                Company: "",
                of_Docs__c: "",
                specialty1: "",
                specialty1_open: !1,
                PostalCode: "",
                title: "",
                Tax_ID_Number__c: "",
                Street: "",
                my_information: ""
            },
            formCookieValues: !1,
            btnref: "",
            form: {
                title: "",
                subheader: "",
                postText: "",
                buttonLabels: "Loading...",
                confirmationHeader: "",
                confirmationText: "",
                errorTitle: "",
                errorMessage: "",
                config: {},
                fields: {},
                hidden_fields: {},
                global_heading: {}
            },
            values: {},
            isProcessing: !1,
            api: "",
            inlineDataComponentName: "InlineForm",
            selectedCheckboxes: {},
            formattedValidationErrors: [],
            lastFormErrorString: "",
            labelList: {},
            showPatientModal: !1,
            isFormSubmitted: !1,
            loadForm: !1,
            yupSchema: {},
            isSubmissionFailed: !1,
            formSubmitted: !1,
            isFormInteracted: !1
        }
            , d = function (e) {
                return "First_Name__c" == e || "FirstName" == e || "first_name" == e || "Referral_FirstName" == e ? "First name is required" : "Last_Name__c" == e || "LastName" == e || "last_name" == e || "Referral_LastName" == e ? "Last name is required" : "Phone__c" == e || "Phone" == e || "Referral_Phone" == e || "phone" == e || "Phone_Number__c" == e ? "Valid phone number required: (XXX) XXX-XXXX" : "Company_Name__c" == e || "Company" == e || "Referral_Company" == e ? "Organization name is required" : "Number_of_Docs__c" == e ? "Number of physicians is required" : "Zipcode__c" == e || "PostalCode" == e || "Zip_Code__c" == e ? "Zip code is required" : void 0
            }
            , m = {
                required: {
                    type: "required",
                    msg: "This field is required",
                    params: ["This field is required"]
                },
                email: {
                    type: "email",
                    msg: "Valid email required: name@domain.com",
                    params: ["Valid email required: name@domain.com"],
                    valid_fields: {
                        Email: !0,
                        email: !0,
                        Email__c: !0,
                        email__c: !0,
                        Referral_Email: !0,
                        Email_Address__c: !0
                    }
                },
                min: {
                    type: "min",
                    msg: "Must be 2-50 characters",
                    params: [2, "Must be 2-50 characters"]
                },
                max: {
                    type: "max",
                    msg: "Must be 2-50 characters",
                    params: [50, "Must be 2-50 characters"]
                },
                matches: {
                    type: "matches",
                    msg: "Please enter a valid zip code",
                    params: [/(^\d{5}$)|(^\d{5}-\d{4}$)/, "Please enter a valid zip code"],
                    valid_fields: {
                        PostalCode: !0,
                        Zip_Code__c: !0,
                        Zipcode__c: !0
                    }
                },
                oneOf: {
                    type: "oneOf",
                    params: [[], "This Field is required"]
                }
            }
            , f = {
                First_Name__c: {
                    error_msg: "Name must be 2-40 characters",
                    min: 2,
                    max: 40
                },
                Context_ID__c: {
                    error_msg: "Please enter a valid Context ID",
                    min: 10,
                    max: 10
                },
                tax_id_number__c: {
                    error_msg: "Please enter a valid Tax ID",
                    min: 10,
                    max: 10
                },
                Address__c: {
                    error_msg: "Must be 2-255 characters",
                    min: 2,
                    max: 255
                },
                fax: {
                    error_msg: "Please enter a valid Fax number",
                    min: 14,
                    max: 14
                },
                phone: {
                    error_msg: "Please enter a valid Phone number",
                    min: 14,
                    max: 14
                },
                phone__c: {
                    error_msg: "Please enter a valid Phone number",
                    min: 14,
                    max: 14
                },
                phone_number__c: {
                    error_msg: "Please enter a valid Phone number",
                    min: 14,
                    max: 14
                },
                zipcode: {
                    error_msg: "Please enter a valid zip code",
                    min: 5,
                    max: 5
                },
                zipcode__c: {
                    error_msg: "Please enter a valid zip code",
                    min: 5,
                    max: 5
                },
                zip_code__c: {
                    error_msg: "Please enter a valid zip code",
                    min: 5,
                    max: 5
                },
                postalcode: {
                    error_msg: "Please enter a valid zip code",
                    min: 5,
                    max: 5
                }
            }
            , p = function (e) {
                var r = Object.assign({}, e)
                    , t = {};
                for (var i in r)
                    r.hasOwnProperty(i) && (t[i] = r[i]["#title"]);
                return t
            }
            , b = function (e) {
                var r = e[11] && /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(atob(e[11])) ? atob(e[11]) : "";
                return {
                    FirstName: atob(e[0]),
                    LastName: atob(e[1]),
                    email: atob(e[2]),
                    Email: atob(e[2]),
                    Phone: atob(e[3]),
                    State: atob(e[6]),
                    State_open: !1,
                    Company: atob(e[7]),
                    of_Docs__c: atob(e[8]),
                    specialty1: atob(e[9]),
                    specialty1_open: !1,
                    PostalCode: r,
                    title: e[12] ? atob(e[12]) : "",
                    First_Name__c: atob(e[0]),
                    Last_Name__c: atob(e[1]),
                    Email_Address__c: atob(e[2]),
                    Email__c: atob(e[2]),
                    Phone__c: atob(e[3]),
                    State__c: atob(e[6]),
                    Company_Name__c: atob(e[7]),
                    Number_of_Docs__c: atob(e[8]),
                    Specialty__c: atob(e[9]),
                    Zipcode__c: r,
                    Title__c: e[12] ? atob(e[12]) : "",
                    type_of_organization_optional_: e[14] ? atob(e[14]) : "",
                    biggest_challenge_optional_: e[15] ? atob(e[15]) : "",
                    which_best_describes_your_current_situation: e[16] ? atob(e[16]) : "",
                    when_are_you_planning_to_open_your_new_practice: e[17] ? atob(e[17]) : "",
                    does_your_new_practice_have_a_legal_name_and_tax_id: e[18] ? atob(e[18]) : "",
                    have_you_secured_a_location_for_your_practice: e[19] ? atob(e[19]) : "",
                    are_you_planning_to_accept_insurance: e[20] ? atob(e[20]) : "",
                    have_you_submitted_credentialling_applications_to_any_payers_yet: e[21] ? atob(e[21]) : "",
                    which_payers_have_you_submitted_applications_to_so_far_select_al: e[22] ? atob(e[22]) : "",
                    area_of_specialty: e[23] ? atob(e[23]) : "",
                    your_area_of_practice_optional: e[24] ? atob(e[24]) : ""
                }
            }
            , h = function (e) {
                return "checkboxes" == e || "select" === e && 1 == (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) ? [] : ""
            }
            , g = function (e, r, t, i) {
                if (!e)
                    return {
                        initialValues: {},
                        formSchema: {}
                    };
                var o = {}
                    , a = {}
                    , n = Object.values(m);
                return Object.values(e).map((function (e) {
                    var t = e["#webform_key"]
                        , i = e["#type"]
                        , _ = e["#required"]
                        , c = e["#multiple"];
                    if ("hidden" != i && "processed_text" != i) {
                        o[t] = "checkboxes" == i || "select" == i && c ? [] : "";
                        for (var u = function (e, r, t) {
                            return "checkboxes" === r || "checkbox" === r || "select" === r && t ? e.array() : "number" === r ? e.number() : e.string()
                        }(r, i, c), m = function () {
                            var o, a = n[p], m = a.params, b = a.type;
                            if (!_)
                                return 0;
                            var h = s(m);
                            if ("required" == b) {
                                var g;
                                if (null != e && null !== (g = e["#states"]) && void 0 !== g && g.visible && Object.keys(e["#states"].visible).length > 0 && _) {
                                    for (var v = [], y = {}, S = 0, F = Object.entries(null == e || null === (x = e["#states"]) || void 0 === x ? void 0 : x.visible); S < F.length; S++) {
                                        var x, P = l(F[S], 2), N = P[0], w = P[1], C = D(N), A = w && w.value;
                                        v.push(C);
                                        var O = A && A.split("||").map((function (e) {
                                            return e.trim().toLowerCase()
                                        }
                                        ));
                                        y[C] = O
                                    }
                                    return u = u.when(v, {
                                        is: function (e) {
                                            if (v.length > 1) {
                                                for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
                                                    t[i - 1] = arguments[i];
                                                for (var o = [e].concat(t), a = !1, n = 0; n < v.length; n++) {
                                                    var l, s = v[n];
                                                    if (null == o[n])
                                                        return !1;
                                                    if ((null === (l = o[n]) || void 0 === l ? void 0 : l.toLowerCase()) !== y[s][0]) {
                                                        a = !1;
                                                        break
                                                    }
                                                    a = !0
                                                }
                                                return a
                                            }
                                            return !!e && e.toLowerCase() === y[v[0]][0]
                                        },
                                        then: function (t) {
                                            return "checkboxes" === i || "select" === i && 1 == (null == e ? void 0 : e["#multiple"]) ? r.array().min(1, "This field is required.").of(r.string().required()).required("This field is required.") : t.required("This field is required.")
                                        },
                                        otherwise: function (t) {
                                            return "checkboxes" === i || "select" === i && 1 == (null == e ? void 0 : e["#multiple"]) ? r.array().notRequired() : r.string().notRequired()
                                        }
                                    }),
                                        1
                                }
                                "Referral_Company" != t && "Referral_LastName" != t && "Referral_FirstName" != t && "PostalCode" != t && "Zip_Code__c" != t && "Company" != t && "Phone" != t && "Referral_Phone" != t && "phone" != t && "Phone_Number__c" != t && "FirstName" != t && "first_name" != t && "LastName" != t && "last_name" != t && "First_Name__c" != t && "Last_Name__c" != t && "Phone__c" != t && "Company_Name__c" != t && "Number_of_Docs__c" != t && "Zipcode__c" != t || (h = [d(t)])
                            }
                            if ("checkbox" === i || "checkboxes" === i || "select" == i && c)
                                return u = u.min(1, "This Field is required").of(r.string().required()).required(),
                                    0;
                            if ("required" == b && !_)
                                return 1;
                            if ("min" == b || "max" == b) {
                                if ("textfield" != i && "webform_address" != i)
                                    return 1;
                                var q = t.toLowerCase();
                                "tax_id_number__c" === q || "fax" === q || "phone" === q || "phone_number__c" === q || "phone__c" === q || "zipcode" === q || "zipcode__c" === q || "zip_code__c" === q || "postalcode" === q ? (h[0] = f[q][b],
                                    h[1] = f[q].error_msg) : "First_Name__c" == t || "FirstName" == t || "first_name" == t || "Referral_FirstName" == t ? (h[0] = f.First_Name__c[b],
                                        h[1] = f.First_Name__c.error_msg) : "Address__c" !== t && "Address_Line_2__c" !== t && "Street" !== t || (h[0] = f.Address__c[b],
                                            h[1] = f.Address__c.error_msg)
                            } else if ("oneOf" == b) {
                                if ("select" != i)
                                    return 1;
                                var j = Object.keys(e["#options"]);
                                h[0] = j
                            } else {
                                if ("matches" == b && "Zipcode__c" != t && "Zip_Code__c" != t && "PostalCode" != t)
                                    return 1;
                                if ("email" == b && "email" != i && "Email__c" != t && "email" != t)
                                    return 1
                            }
                            u = (o = u)[b].apply(o, s(h))
                        }, p = 0; p < n.length && 0 !== m(); p++)
                            ;
                        a[t] = u
                    }
                }
                )),
                {
                    initialValues: o,
                    formSchema: a
                }
            }
            , v = function (e) {
                var r;
                if (!e)
                    return {};
                var t, i, o, n, l, s, _, c, u, d = e.elements, m = e.fields, f = {}, p = {
                    config: null == e ? void 0 : e.config,
                    hidden_fields: null == e ? void 0 : e.hidden_fields,
                    elq_action: null == e || null === (r = e.config) || void 0 === r ? void 0 : r.elq_action,
                    patientModalConfig: null == e ? void 0 : e.patient_modal_confirmation
                }, b = {};
                return d && (f = {
                    title: null == d || null === (t = d.global_header) || void 0 === t ? void 0 : t.field_gh_heading,
                    subheader: null == d || null === (i = d.global_header) || void 0 === i ? void 0 : i.field_gh_paragraph,
                    postText: null == d || null === (o = d.field_ah_form_post_text) || void 0 === o ? void 0 : o.description,
                    buttonLabels: null == d || null === (n = d.field_ah_form_button_labels) || void 0 === n ? void 0 : n.description,
                    confirmationHeader: null == d || null === (l = d.field_ah_confirmation_header) || void 0 === l ? void 0 : l.description,
                    confirmationText: null == d || null === (s = d.field_forms_confirmation_text) || void 0 === s ? void 0 : s.description,
                    errorTitle: null == d || null === (_ = d.field_ah_forms_error_title) || void 0 === _ ? void 0 : _.description,
                    errorMessage: null == d || null === (c = d.field_form_error_message) || void 0 === c ? void 0 : c.description,
                    global_heading: null != d && d.global_header ? null == d ? void 0 : d.global_header : {},
                    enableThanksURLRedirect: "1" == (null == d ? void 0 : d.enable_thankyou_url),
                    redirectThanksURL: null !== (u = null == d ? void 0 : d.field_thankyou_url) && void 0 !== u ? u : null
                }),
                    m && (b = {
                        fields: m,
                        is_custom_action: !!m.action,
                        isEpocAction: !!m.epocaction,
                        eloqua_ldt_submission: !!m.eloqua_ldt_submission,
                        drupal_proxy_submission: !!m.drupal_proxy_submission,
                        submitJsonFormat: m.json_format ? m.json_format : "",
                        salesforce_ldt_submission: !!m.salesforce_ldt_submission,
                        salesforce_caf_submission: !!m.salesforce_caf_submission,
                        mail_submission: !!m.mail_submission
                    }),
                    a(a(a({}, b), f), p)
            }
            , y = function (e) {
                if (e) {
                    var r = e.form;
                    return {
                        is_custom_action: r.is_custom_action,
                        isEpocAction: r.isEpocAction,
                        eloqua_ldt_submission: r.eloqua_ldt_submission,
                        salesforce_ldt_submission: r.salesforce_ldt_submission,
                        salesforce_caf_submission: r.salesforce_caf_submission,
                        drupal_proxy_submission: r.drupal_proxy_submission,
                        mail_submission: r.mail_submission,
                        elq_action: r.elq_action,
                        json_format: r.submitJsonFormat,
                        name: r.config.form_name
                    }
                }
            }
            , S = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                    , r = new Date
                    , t = r.getMonth() < 10 ? "0" + (r.getMonth() + 1) : r.getMonth() + 1
                    , i = r.getDate() < 10 ? "0" + r.getDate() : r.getDate();
                return r.getFullYear() - e + "-" + t + "-" + i
            }
            , F = function (e) {
                var r = {
                    containerSize: "",
                    heading: "",
                    headingColor: "",
                    paragraph: "",
                    paragraphColor: "",
                    paragraphFontSize: "",
                    subHeading: "",
                    subHeadingColor: "",
                    dividerVisibility: "",
                    dividerColor: ""
                };
                return e && (r = {
                    containerSize: e.field_gh_container_configuration ? e.field_gh_container_configuration : "",
                    heading: e.field_gh_heading ? e.field_gh_heading : "",
                    headingColor: e.field_gh_heading_color ? e.field_gh_heading_color : void 0,
                    paragraph: e.field_gh_paragraph ? e.field_gh_paragraph : "",
                    paragraphColor: e.field_gh_paragraph_color ? e.field_gh_paragraph_color : "#000",
                    paragraphFontSize: e.field_gh_paragraph_font_size ? e.field_gh_paragraph_font_size : "",
                    subHeading: e.field_gh_subhead ? e.field_gh_subhead : "",
                    subHeadingColor: e.field_gh_subhead_color ? e.field_gh_subhead_color : "#0077b6",
                    dividerVisibility: e.field_gh_divider ? Number(e.field_gh_divider) : "",
                    dividerColor: e.field_gh_divider_color ? e.field_gh_divider_color : ""
                }),
                    r
            }
            , x = function (e, r) {
                for (var t in e) {
                    var i = e[t];
                    if (Array.isArray(i)) {
                        var o, a, n = "select" === (null == r || null === (o = r[t]) || void 0 === o ? void 0 : o["#type"]) && null != r && null !== (a = r[t]) && void 0 !== a && a["#multiple"] ? "," : ";";
                        e[t] = i.toString().replace(/,/g, n)
                    }
                }
                return e
            }
            , P = function (e, r) {
                var t = "select" === e ? "," : ";";
                return r.split(t)
            }
            , N = function () {
                var e = !1
                    , r = []
                    , t = document.querySelector('[class*="page-components"]');
                t && t.childNodes.forEach((function (e) {
                    e.className && !e.className.includes("cookie-notification") && r.push(e)
                }
                ));
                var i = r.length;
                if (1 === i && "ah_webform" === r[0].getAttribute("data-componentid") && (e = !0),
                    2 === i)
                    for (var o = r, a = 0; a < i; a++) {
                        var n = o[a].getAttribute("data-componentid");
                        if ("ah_webform" === n) {
                            if (void 0 !== o[a + 1] && "free_html" === o[a + 1].getAttribute("data-componentid")) {
                                e = !0;
                                break
                            }
                        } else if ("free_html" === n && void 0 !== o[a + 1] && "ah_webform" === o[a + 1].getAttribute("data-componentid")) {
                            e = !0;
                            break
                        }
                    }
                return e
            }
            , w = function (e, r) {
                return e && "inline-component" === r ? "Form Page" : "inline-component" === r ? "Inline Form" : "Modal Form"
            }
            , C = function (e, r, t, i) {
                var o = window.appEventData = window.appEventData || []
                    , a = function (e, r, t, i) {
                        return {
                            event: "Form Detected",
                            form: {
                                formID: r,
                                formName: t,
                                formType: i
                            }
                        }
                    }(0, t, i, w(e, r));
                o.push(a)
            }
            , A = function (e, r, t, i, o, a, n, l) {
                var s = {}
                    , _ = n || "InlineForm"
                    , c = l || "ah_webform";
                if (r && a && (r.name || t && t.Web_Form__c)) {
                    var u = t && t.Web_Form__c ? t.Web_Form__c : r.name
                        , d = e && e.Status && e.Status.TransactionStatus ? e.Status.TransactionStatus : e;
                    s = {
                        event: "",
                        form: {
                            formID: a,
                            formName: u,
                            formType: w(i, o)
                        },
                        component: {
                            componentID: c,
                            componentName: _
                        }
                    },
                        !0 === e ? s.event = "Form Submission Succeeded" : !1 !== e && "pending" == d || (s.event = "Form Submission Failed",
                            s.form.formError = "An error occured"),
                        (!0 === e || !1 === e || "pending" != d) && (window.appEventData || []).push(s)
                }
            }
            , O = function (e) {
                if (!e)
                    return null;
                var r = e.split("/");
                return r[r.length - 1]
            }
            , D = function (e) {
                if (e)
                    return e.match(/(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, "").replace("[]", "")
            };
        function q(e, r) {
            try {
                var t = function (e) {
                    for (var t = function () {
                        var e, t = l(n[a], 2), s = t[0], _ = t[1], c = D(s), u = null !== (e = _ && _.value) && void 0 !== e ? e : "", d = "", m = [];
                        if (u && ("string" == typeof u ? m = u.split().map((function (e) {
                            return e.trim()
                        }
                        )) : "object" === i(u) && (m = u.pattern && u.pattern.split("||").map((function (e) {
                            return e.trim()
                        }
                        )))),
                            r && Array.isArray(r[c])) {
                            var f = r[c].filter((function (e) {
                                if (m.includes(e))
                                    return e
                            }
                            ));
                            d = f[0],
                                f && f.length > 0 && (o += 1)
                        } else
                            d = r[c],
                                (m && m.includes(d) || !0 === u && d) && (o += 1)
                    }, a = 0, n = Object.entries(e); a < n.length; a++)
                        t()
                }
                    , o = 0
                    , a = "all";
                if (e["#states"]) {
                    var n = e["#states"];
                    if (n.visible) {
                        if (Array.isArray(n.visible))
                            for (var s = 0, _ = Object.entries(n.visible); s < _.length; s++) {
                                var c = l(_[s], 2)
                                    , u = (c[0],
                                        c[1]);
                                "string" == typeof u ? "or" != u && "xor" != u || (a = u) : "object" === i(u) && t(u)
                            }
                        else
                            t(n.visible);
                        return Object.values(n.visible).length === o || ("or" == a || "xor" == a) && o > 0
                    }
                    return !0
                }
                return !0
            } catch (e) {
                return console.error("error checking isFieldRenderable. Rendering field by default"),
                    !0
            }
        }
    }
}]);
