(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [24], {
        "+R28": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            const o = e => {
                var t, n;
                const o = null !== (t = null === (n = e[0]) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "";
                return ["no_posts_found", "no_topics_found", "arc.menus.no_menus", "aj.menus.no_menus"].includes(o)
            }
        },
        "/Qav": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return s
            }));
            var o = n("VBdi"),
                r = n.n(o),
                i = n("dVLG");
            const a = r.a.createContext({
                    getScrollState: e => {},
                    setScrollState: (e, t) => {}
                }),
                s = e => {
                    const t = Object(o.useRef)({
                            visitedPages: [],
                            newState: {}
                        }),
                        {
                            children: n
                        } = e,
                        r = Object(o.useMemo)(() => ({
                            getScrollState: e => {
                                var n;
                                return null === (n = t.current.newState) || void 0 === n ? void 0 : n[e]
                            },
                            setScrollState: (e, n) => {
                                const o = t.current;
                                o.visitedPages.length > 2 && o.visitedPages.shift(), o.visitedPages.includes(e) || o.visitedPages.push(e);
                                const r = {};
                                o.visitedPages.forEach(e => {
                                    r[e] = o.newState[e]
                                }), r[e] = n, t.current = {
                                    visitedPages: o.visitedPages,
                                    newState: r
                                }
                            }
                        }), []);
                    return Object(i.c)(a.Provider, {
                        value: r
                    }, n)
                }
        },
        "/rTs": function(e, t, n) {},
        "08ZB": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var o = n("dQgG"),
                r = n("XVwp");
            const i = async e => {
                    let {
                        id: t,
                        name: n,
                        value: r,
                        attribution: i
                    } = e;
                    const a = Math.round("CLS" === n ? 1e3 * r : r);
                    let s, c, l;
                    switch (n) {
                        case "CLS":
                            s = i.largestShiftTarget;
                            break;
                        case "LCP":
                            s = i.element;
                            break;
                        case "FID":
                            s = i.eventTarget;
                            break;
                        case "INP":
                            s = i.interactionTarget, c = i.interactionType, l = i.loadState
                    }
                    const d = {
                        event_category: "Web Vitals",
                        event_label: t,
                        value: a,
                        non_interaction: !0,
                        ...s || c || l ? { ...s && {
                                dimension25: s
                            },
                            ...c && {
                                dimension27: c
                            },
                            ...l && {
                                dimension28: l
                            }
                        } : null
                    };
                    if (o.canUseDOM) {
                        if ("function" === typeof window.getMetaValue) {
                            const e = window.getMetaValue("ga4", "name", null);
                            e && (d.send_to = e)
                        }
                        "function" === typeof window.gtag ? window.gtag("event", n, d) : setTimeout(() => {
                            "function" === typeof window.gtag && window.gtag("event", n, d)
                        }, 5e3)
                    }
                },
                a = () => {
                    Object(r.a)(i), Object(r.b)(i), Object(r.d)(i), Object(r.c)(i)
                },
                s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
                    if (o.canUseDOM) {
                        Math.floor(101 * Math.random()) <= e && a()
                    }
                }
        },
        "1VuX": function(e, t, n) {
            "use strict";
            t.a = n.p + "static/media/aj-footer-logo.bac952ad.svg"
        },
        "1eFx": function(e, t, n) {
            "use strict";
            var o = n("KGRH"),
                r = n("kXcp");
            const i = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    APPLICATION_ENV: "production",
                    BRIGHTCOVE_ENV: "production",
                    ONESIGNAL_CONFIG: {
                        appId: "fb3606cf-1b0a-44e7-b314-9c4173ac1b5e",
                        safariWebId: "web.onesignal.auto.477dedc8-8bcf-40fd-b64c-238033111672"
                    },
                    REACT_APP_APPCHECK_DEBUG_TOKEN_AJA: "",
                    REACT_APP_APPCHECK_DEBUG_TOKEN_AJB: "",
                    REACT_APP_APPCHECK_DEBUG_TOKEN_AJD: "",
                    REACT_APP_APPCHECK_DEBUG_TOKEN_AJE: "",
                    REACT_APP_APPCHECK_DEBUG_TOKEN_AJM: "",
                    REACT_APP_ENVIRONMENT: "production",
                    REACT_APP_SITE: "aje",
                    REACT_APP_APPCHECK_DEBUG_TOKEN_CHINESE: "",
                    REACT_APP_OPTA_SCRIPT_VERSION: "v14",
                    REACT_APP_OPTA_STYLES_VERSION: "v30"
                }).REACT_APP_LOCAL_IMAGE_HOST || "",
                a = i + "/wp-content/uploads/",
                s = (e, t) => {
                    e && Object.keys(e).forEach(n => {
                        const o = e[n];
                        o && ("string" === typeof o ? o.startsWith("/wp-content/uploads/") && (e[n] = o.replace("/wp-content/uploads/", a)) : "object" === typeof o && s(o, t))
                    })
                },
                c = (e, t) => {
                    e && e.avatars && e.avatars.forEach(e => {
                        s(e, t)
                    })
                },
                l = (e, t) => {
                    e && Object.keys(e).forEach(n => {
                        const o = e[n];
                        var r;
                        if (o)
                            if (["featuredMedia", "featuredImage", "content", "media", "galleryImages", "galleryMedia", "markup", "author", "featuredTaxonomyImage", "longform", "outsideImage", "verticalFeaturedImage", "customNavigationBrandingImg"].includes(n))
                                if ("content" === n || "markup" === n) e[n] = o.replace(new RegExp("/wp-content/uploads/", "g"), "" + a);
                                else if ("author" === n) {
                            const o = e[n];
                            Array.isArray(o) ? o.forEach(e => {
                                c(e, t)
                            }) : c(o, t)
                        } else "customNavigationBrandingImg" === n ? (r = e).customNavigationBrandingImg = i + r.customNavigationBrandingImg : s(o, t);
                        else "object" === typeof o && l(o, t)
                    })
                };
            t.a = e => Object(r.b)("websockets") ? new o.a((t, n) => {
                const o = n(t);
                return (null === o || void 0 === o ? void 0 : o.map) ? o.map(t => (l(t.data, e), t)) : o
            }) : new o.a((t, n) => n(t).map(t => (l(t.data, e), t)))
        },
        "2oLe": function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return c
                }));
                var o = n("6eVd"),
                    r = n("3mCM"),
                    i = n("MwNz"),
                    a = n("xAi6"),
                    s = n("kXcp");
                const c = async t => {
                        var n, o, i, a;
                        if (!t || !Object(s.b)("amplitude-ab-experimentation/status") || !Object(r.c)() || !(null === (n = window) || void 0 === n || null === (o = n.amplitude) || void 0 === o ? void 0 : o.getDeviceId())) return !1;
                        const c = (null === (i = e) || void 0 === i ? void 0 : i.amplitudeExperiments) || {};
                        let d = null;
                        return t in c && (d = c[t]), !1 === d || t in c || (null === (a = d) || void 0 === a ? void 0 : a.value) || (d = await l(t)), d
                    },
                    l = async e => {
                        d(e, !1);
                        const t = null === a.AMPLITUDE_ANALYTICS_CONFIGS || void 0 === a.AMPLITUDE_ANALYTICS_CONFIGS ? void 0 : a.AMPLITUDE_ANALYTICS_CONFIGS.experimentsClientID[i.a.get("APPLICATION_ENV")],
                            n = o.a.initializeWithAmplitudeAnalytics(t),
                            r = {
                                device_id: window.amplitude.getDeviceId(),
                                user_properties: {
                                    premium: !0
                                }
                            };
                        await n.fetch(r);
                        const s = n.variant(e);
                        return (null === s || void 0 === s ? void 0 : s.value) ? (d(e, s), s) : (d(e, null), null)
                    },
                    d = (t, n) => {
                        var o;
                        let r = (null === (o = e) || void 0 === o ? void 0 : o.amplitudeExperiments) || {};
                        if (t in r) {
                            var i;
                            const e = (null === (i = r[t]) || void 0 === i ? void 0 : i.value) ? r[t] : n;
                            r[t] = e
                        } else if (!1 === n || null === n) {
                            const e = {
                                [t]: n
                            };
                            r = { ...r,
                                ...e
                            }
                        }
                        e.amplitudeExperiments = r
                    }
            }).call(this, n("Uwcf"))
        },
        "5RFU": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "fallbackMenus", (function() {
                return o
            }));
            const o = {
                header: {
                    menu: [{
                        title: "header",
                        items: [{
                            id: "568712",
                            title: "News",
                            url: "/news/",
                            children: [{
                                id: "568713",
                                title: "Middle East",
                                url: "/middle-east/"
                            }, {
                                id: "568714",
                                title: "Africa",
                                url: "/africa/"
                            }, {
                                id: "568715",
                                title: "Asia",
                                url: "/asia/"
                            }, {
                                id: "568716",
                                title: "US &amp; Canada",
                                url: "/us-canada/"
                            }, {
                                id: "568717",
                                title: "Latin America",
                                url: "/latin-america/"
                            }, {
                                id: "568718",
                                title: "Europe",
                                url: "/europe/"
                            }, {
                                id: "568719",
                                title: "Asia Pacific",
                                url: "/asia-pacific/"
                            }]
                        }, {
                            id: "2757973",
                            title: "Israel War on Gaza",
                            url: "/tag/israel-palestine-conflict/"
                        }, {
                            id: "2039194",
                            title: "Features",
                            url: "/features/"
                        }, {
                            id: "568722",
                            title: "Opinion",
                            url: "/opinion/"
                        }, {
                            id: "568735",
                            title: "Sport",
                            url: "/sports/"
                        }, {
                            id: "568723",
                            title: "Video",
                            url: "/videos/"
                        }, {
                            id: "568728",
                            title: "More",
                            url: "#",
                            children: [{
                                id: "568721",
                                title: "Economy",
                                url: "/economy/"
                            }, {
                                id: "1269533",
                                title: "Ukraine war",
                                url: "/tag/ukraine-russia-crisis/"
                            }, {
                                id: "1627506",
                                title: "Coronavirus",
                                url: "https://www.aljazeera.com/tag/coronavirus-pandemic/"
                            }, {
                                id: "1553028",
                                title: "Climate Crisis",
                                url: "https://www.aljazeera.com/climate-crisis"
                            }, {
                                id: "568729",
                                title: "Investigations",
                                url: "/investigations/"
                            }, {
                                id: "568730",
                                title: "Interactives",
                                url: "/interactives/"
                            }, {
                                id: "568732",
                                title: "In Pictures",
                                url: "/gallery/"
                            }, {
                                id: "568734",
                                title: "Science &amp; Technology",
                                url: "/tag/science-and-technology/"
                            }, {
                                id: "568736",
                                title: "Podcasts",
                                url: "/audio/podcasts"
                            }]
                        }]
                    }]
                },
                footer: {
                    menu: [{
                        title: "footer",
                        items: [{
                            id: "568745",
                            title: "About",
                            url: "#",
                            children: [{
                                id: "568746",
                                title: "About Us",
                                url: "https://www.aljazeera.com/about-us"
                            }, {
                                id: "568747",
                                title: "Code of Ethics",
                                url: "/code-of-ethics/"
                            }, {
                                id: "568748",
                                title: "Terms and Conditions",
                                url: "/terms-and-conditions/"
                            }, {
                                id: "1303151",
                                title: "EU/EEA Regulatory Notice",
                                url: "/eu-eea-regulatory/"
                            }, {
                                id: "568749",
                                title: "Privacy Policy",
                                url: "https://privacy.aljazeera.net/"
                            }, {
                                id: "568750",
                                title: "Cookie Policy",
                                url: "https://privacy.aljazeera.net/cookie/"
                            }, {
                                id: "568751",
                                title: "Cookie Preferences",
                                url: "#cookiesPreferences"
                            }, {
                                id: "1599360",
                                title: "Sitemap",
                                url: "https://www.aljazeera.com/sitemap"
                            }, {
                                id: "568753",
                                title: "Work for us",
                                url: "https://careers.aljazeera.net/"
                            }]
                        }, {
                            id: "568755",
                            title: "Connect",
                            url: "#",
                            children: [{
                                id: "568756",
                                title: "Contact Us",
                                url: "https://network.aljazeera.net/en/contact?tid=6"
                            }, {
                                id: "2566826",
                                title: "User Accounts Help",
                                url: "https://www.aljazeera.com/user-accounts-help"
                            }, {
                                id: "1767975",
                                title: "Advertise with us",
                                url: "https://commercial.aljazeera.net/"
                            }, {
                                id: "568757",
                                title: "Apps",
                                url: "https://webapps.aljazeera.net/aje/connect/"
                            }, {
                                id: "2466082",
                                title: "Newsletters",
                                url: "/newsletters"
                            }, {
                                id: "568759",
                                title: "Channel Finder",
                                url: "https://sat.aljazeera.net/en"
                            }, {
                                id: "568760",
                                title: "TV Schedule",
                                url: "/schedule/"
                            }, {
                                id: "568761",
                                title: "Podcasts",
                                url: "/podcasts/"
                            }, {
                                id: "568763",
                                title: "Submit a Tip",
                                url: "https://webapps.aljazeera.net/aje/tips/"
                            }]
                        }, {
                            id: "568765",
                            title: "Our Channels",
                            url: "#",
                            children: [{
                                id: "568766",
                                title: "Al Jazeera Arabic",
                                url: "http://aljazeera.net/"
                            }, {
                                id: "568767",
                                title: "Al Jazeera English",
                                url: "https://www.aljazeera.com/"
                            }, {
                                id: "1313689",
                                title: "Al Jazeera Investigative Unit",
                                url: "https://www.ajiunit.com/"
                            }, {
                                id: "568768",
                                title: "Al Jazeera Mubasher",
                                url: "https://www.aljazeeramubasher.net/"
                            }, {
                                id: "568769",
                                title: "Al Jazeera Documentary",
                                url: "http://doc.aljazeera.net/"
                            }, {
                                id: "568770",
                                title: "Al Jazeera Balkans",
                                url: "http://balkans.aljazeera.net/"
                            }, {
                                id: "568771",
                                title: "AJ+",
                                url: "http://ajplus.net/"
                            }]
                        }, {
                            id: "568772",
                            title: "Our Network",
                            url: "#",
                            children: [{
                                id: "568773",
                                title: "Al Jazeera Centre for Studies",
                                url: "http://studies.aljazeera.net/en/"
                            }, {
                                id: "568774",
                                title: "Al Jazeera Media Institute",
                                url: "http://training.aljazeera.net/"
                            }, {
                                id: "568775",
                                title: "Learn Arabic",
                                url: "http://learning.aljazeera.net/"
                            }, {
                                id: "568776",
                                title: "Al Jazeera Centre for Public Liberties &amp; Human Rights",
                                url: "http://liberties.aljazeera.com/en"
                            }, {
                                id: "568777",
                                title: "Al Jazeera Forum",
                                url: "http://forum.aljazeera.net/"
                            }, {
                                id: "568778",
                                title: "Al Jazeera Hotel Partners",
                                url: "https://hotels.aljazeera.net/en"
                            }]
                        }]
                    }]
                }
            }
        },
        "5ltI": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            })), n.d(t, "b", (function() {
                return p
            })), n.d(t, "c", (function() {
                return m
            }));
            var o = n("OVJz"),
                r = n("IOGK"),
                i = n("8zj8"),
                a = n("kXcp"),
                s = n("SVMe"),
                c = n("9N7U");
            let l = null,
                d = null;
            const u = () => {
                    if (!l) {
                        const e = Object(s.m)(),
                            t = Object(c.getHostName)();
                        t && (e.authDomain = t), l = Object(o.a)(e)
                    }
                    return l
                },
                p = () => {
                    if (!d && Object(a.b)(s.i)) {
                        const e = {
                                provider: new r.a(s.g),
                                isTokenAutoRefreshEnabled: !0
                            },
                            t = Object(s.l)();
                        t && (e.token = t, "undefined" !== typeof window && (window.FIREBASE_APPCHECK_DEBUG_TOKEN = t)), d = Object(r.c)(u(), e)
                    }
                    return d
                },
                m = e => {
                    switch (e) {
                        case "facebook":
                        case i.c.PROVIDER_ID:
                            return i.c;
                        case "google":
                        case i.d.PROVIDER_ID:
                            return i.d;
                        case "apple":
                        case "apple.com":
                            return i.e;
                        default:
                            return null
                    }
                }
        },
        "67Nd": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var o = n("f5VC"),
                r = n("ROR6");
            const i = () => new o.a({
                dataIdFromObject: e => "MediaSize" === e.__typename ? `${e.__typename}_${e.url}` : "Media" === e.__typename ? `${e.__typename}_${e.sourceUrl}` : Object(r.b)(e),
                typePolicies: {
                    HomepageAj: {
                        keyFields: []
                    }
                }
            })
        },
        "7RPU": function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return f
            })), n.d(t, "i", (function() {
                return h
            })), n.d(t, "q", (function() {
                return v
            })), n.d(t, "v", (function() {
                return y
            })), n.d(t, "b", (function() {
                return A
            })), n.d(t, "u", (function() {
                return _
            })), n.d(t, "c", (function() {
                return E
            })), n.d(t, "n", (function() {
                return O
            })), n.d(t, "m", (function() {
                return j
            })), n.d(t, "f", (function() {
                return T
            })), n.d(t, "r", (function() {
                return S
            })), n.d(t, "s", (function() {
                return P
            })), n.d(t, "g", (function() {
                return I
            })), n.d(t, "j", (function() {
                return k
            })), n.d(t, "l", (function() {
                return L
            })), n.d(t, "d", (function() {
                return R
            })), n.d(t, "p", (function() {
                return N
            })), n.d(t, "t", (function() {
                return D
            })), n.d(t, "h", (function() {
                return M
            })), n.d(t, "a", (function() {
                return x
            })), n.d(t, "o", (function() {
                return U
            })), n.d(t, "k", (function() {
                return z
            }));
            var o = n("cMIy"),
                r = n.n(o),
                i = n("Mr7A"),
                a = n.n(i),
                s = n("30X+"),
                c = n.n(s),
                l = n("2Ty1"),
                d = n.n(l),
                u = n("sbnR"),
                p = n.n(u),
                m = n("dQgG"),
                g = n("MwNz");
            r.a.extend(p.a), r.a.extend(c.a), r.a.extend(a.a), r.a.extend(d.a);
            const f = e => {
                    if ("string" !== typeof e) return null;
                    const t = e.split(":");
                    4 === t.length && t.pop();
                    const n = t.reverse().reduce((e, t, n) => e + t * Math.pow(60, n), 0);
                    return isNaN(n) ? null : n
                },
                h = () => {
                    const e = g.a.get("date");
                    return (null === e || void 0 === e ? void 0 : e.format) || "DD MMM YYYY"
                },
                v = function(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    const r = g.a.get("date"),
                        i = g.a.get("i18n"),
                        a = y(e).format(o ? "HH:mm" : "hh:mm A"),
                        s = null !== (t = null === r || void 0 === r ? void 0 : r.timeZone) && void 0 !== t ? t : "GMT",
                        c = i.t(b(s));
                    return n ? `${a} ${c}` : `${a} (${c})`
                },
                b = e => {
                    switch (e) {
                        case "Asia/Riyadh":
                            return "Mecca Time";
                        case "Africa/Ceuta":
                            return "GMT+2";
                        case "Asia/Hong_Kong":
                            return "GMT+8";
                        default:
                            return "GMT"
                    }
                },
                y = e => {
                    var t;
                    const n = g.a.get("date");
                    switch (null !== (t = null === n || void 0 === n ? void 0 : n.timeZone) && void 0 !== t ? t : "GMT") {
                        case "Asia/Riyadh":
                            return w(e, 3);
                        case "Africa/Ceuta":
                            return w(e, 2);
                        case "Asia/Hong_Kong":
                            return w(e, 8);
                        default:
                            return w(e)
                    }
                },
                w = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return r.a.utc(e).add(t, "hour")
                },
                A = (e, t) => {
                    const n = e.toLocaleString("en-US", {
                        timeZone: t
                    });
                    return new Date(n)
                };

            function _(e) {
                var t;
                let n = e;
                !(null === (t = n) || void 0 === t ? void 0 : t.length) && m.canUseDOM && (n = document.documentElement.lang);

                function o(e) {
                    r.a.locale(e)
                }
                "en" !== n && "en-us" !== n && "aje" !== n && "bs" !== n || o("en"), "zh" !== n && "zh-Hans" !== n && "chinese" !== n || o("zh-cn"), "aja" === n && o("ar"), ["ar", "zh-cn"].includes(n) && o(n)
            }
            const E = e => {
                    if (e) try {
                        return r.a.utc(e).toISOString().replace(/.000Z$/i, "Z")
                    } catch (t) {
                        return e
                    }
                },
                O = () => {
                    const e = g.a.get("date");
                    return (null === e || void 0 === e ? void 0 : e.timeZone) || "GMT"
                },
                j = (e, t) => {
                    const n = new Date(1e3 * e),
                        o = new Date(n.toLocaleString("en-US", {
                            timeZone: "UTC"
                        }));
                    o.setHours(0, 0, 0, 0);
                    const r = f(t);
                    return o.getTime() / 1e3 + r
                },
                T = e => r.a.unix(e).utcOffset(0, !0).local(),
                S = (e, t) => C("" + y(e).format(t)),
                P = e => C(e.fromNow()),
                C = e => `${g.a.get("i18n").t("Last Updated")}: ${e}`,
                I = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "D MMM YYYY",
                        n = null,
                        o = null;
                    if (!e) return [n, o];
                    const i = g.a.get("i18n"),
                        a = r.a.utc().format("YYYY-MM-DDTHH:mm:ss"),
                        s = r.a.duration(r()(a).diff(e)),
                        c = s.format("Y"),
                        l = s.format("M"),
                        d = s.format("D"),
                        u = s.format("H"),
                        p = s.format("m"),
                        m = s.format("s");
                    return c <= 0 && l <= 0 && "1" === d && u < 1 ? (n = i.t("liveBlogHoursDisplayText", {
                        hours: "24"
                    }), o = i.t("liveBlogHoursA11yText", {
                        hours: "24"
                    })) : d > 0 || c > 0 || l > 0 ? (n = "" + r()(e).format(t), o = `${i.t("Published on")} ${r()(e).format("D MMM YYYY")}`) : u > 0 ? (n = i.t("liveBlogHoursDisplayText", {
                        hours: u
                    }), o = i.t("liveBlogHoursA11yText", {
                        hours: u
                    })) : p > 0 ? (n = i.t("liveBlogMinutesDisplayText", {
                        minutes: p
                    }), o = i.t("liveBlogMinutesA11yText", {
                        minutes: p
                    })) : m > 0 && (n = i.t("liveBlogSecondsDisplayText", {
                        seconds: m
                    }), o = i.t("liveBlogSecondsA11yText", {
                        seconds: m
                    })), [n, o]
                },
                k = e => {
                    const t = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/;
                    if (!t.test(e)) return "";
                    const n = e.match(t);
                    return `PT${parseInt(n[1],10)||0}H${parseInt(n[2],10)||0}M${parseInt(n[3],10)||0}S`
                },
                L = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime();
                    const n = e - t;
                    return n > 0 ? n : 0
                },
                R = e => {
                    const t = parseInt(e, 10);
                    return [Math.floor(t / 3600), Math.floor(t / 60) % 60, t % 60].map(e => e < 10 ? "0" + e : e).filter((e, t) => "00" !== e || t > 0).join(":")
                },
                N = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.a.utc().format("YYYY-MM-DDTHH:mm:ss");
                    return r.a.duration(r()(t).diff(e))
                },
                D = e => {
                    if (!e) return !1;
                    const t = r.a.utc(e);
                    return r.a.utc().isAfter(t)
                },
                M = function(e, t, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (!e) return;
                    e = "number" === typeof e ? parseInt(e) : Date.parse(e);
                    const i = x(e, t, n),
                        a = r.a.tz(new Date(i).toString(), O());
                    return o ? a.local().format("h:mmA") : a.format("h:mmA")
                },
                x = (e, t, n) => 1e3 * (parseInt(e) + f(t) + f(n)),
                U = e => {
                    const t = parseInt(e);
                    return ((new Date).getTime() - t) / 1e3 / 3600
                },
                z = e => {
                    var t, n;
                    let o = null === e || void 0 === e || null === (t = e.childrenMeta) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.publishedTime;
                    return o = o ? new Date(1e3 * o).toJSON() : "", o
                }
        },
        "7dWn": function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return P
                })), n.d(t, "b", (function() {
                    return L
                })), n.d(t, "c", (function() {
                    return R
                })), n.d(t, "g", (function() {
                    return N
                })), n.d(t, "h", (function() {
                    return D
                })), n.d(t, "e", (function() {
                    return M
                })), n.d(t, "f", (function() {
                    return x
                })), n.d(t, "j", (function() {
                    return U
                })), n.d(t, "i", (function() {
                    return z
                })), n.d(t, "d", (function() {
                    return B
                }));
                var o = n("/WA2"),
                    r = n("VBdi"),
                    i = n.n(r),
                    a = n("9mJr"),
                    s = n("mZYc"),
                    c = n("C9Dh"),
                    l = n("76ii"),
                    d = n("1VZG"),
                    u = n("Ncea"),
                    p = n("MwNz"),
                    m = n("Ey7M"),
                    g = n("xAi6"),
                    f = n("kXcp"),
                    h = n("pbOP"),
                    v = n("SVMe"),
                    b = n("9N7U"),
                    y = n("dVLG");
                const w = Object(o.a)({
                        resolved: {},
                        chunkName: () => "opta-playground",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!n.m[t]
                        },
                        importAsync: () => n.e(36).then(n.bind(null, "IXqR")),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return n(t)
                        },
                        resolve() {
                            return "IXqR"
                        }
                    }, {
                        fallback: Object(y.c)(c.a, null)
                    }),
                    A = Object(o.a)({
                        resolved: {},
                        chunkName: () => "login-route",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!n.m[t]
                        },
                        importAsync: () => Promise.all([n.e(3), n.e(20)]).then(n.bind(null, "cq8H")),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return n(t)
                        },
                        resolve() {
                            return "cq8H"
                        }
                    }, {
                        fallback: Object(y.c)(c.a, null)
                    }),
                    _ = Object(o.a)({
                        resolved: {},
                        chunkName: () => "login-route",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!n.m[t]
                        },
                        importAsync: () => Promise.all([n.e(3), n.e(20)]).then(n.bind(null, "QRkR")),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return n(t)
                        },
                        resolve() {
                            return "QRkR"
                        }
                    }, {
                        fallback: Object(y.c)(c.a, null)
                    }),
                    E = Object(o.a)({
                        resolved: {},
                        chunkName: () => "login-route",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!n.m[t]
                        },
                        importAsync: () => Promise.all([n.e(3), n.e(20)]).then(n.bind(null, "0zrl")),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return n(t)
                        },
                        resolve() {
                            return "0zrl"
                        }
                    }, {
                        fallback: Object(y.c)(c.a, null)
                    }),
                    O = Object(o.a)({
                        resolved: {},
                        chunkName: () => "login-route",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!n.m[t]
                        },
                        importAsync: () => Promise.all([n.e(3), n.e(20)]).then(n.bind(null, "CDpw")),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return n(t)
                        },
                        resolve() {
                            return "CDpw"
                        }
                    }, {
                        fallback: Object(y.c)(c.a, null)
                    }),
                    j = Object(o.a)({
                        resolved: {},
                        chunkName: () => "login-route",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!n.m[t]
                        },
                        importAsync: () => Promise.all([n.e(3), n.e(20)]).then(n.bind(null, "wEuA")),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return n(t)
                        },
                        resolve() {
                            return "wEuA"
                        }
                    }, {
                        fallback: Object(y.c)(c.a, null)
                    }),
                    T = Object(o.a)({
                        resolved: {},
                        chunkName: () => "login-route",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!n.m[t]
                        },
                        importAsync: () => Promise.all([n.e(3), n.e(20)]).then(n.bind(null, "7DnH")),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return n(t)
                        },
                        resolve() {
                            return "7DnH"
                        }
                    }, {
                        fallback: Object(y.c)(c.a, null)
                    }),
                    S = Object(o.a)({
                        resolved: {},
                        chunkName: () => "topic-route",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!n.m[t]
                        },
                        importAsync: () => Promise.all([n.e(1), n.e(0), n.e(26)]).then(n.bind(null, "4PnZ")),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return n(t)
                        },
                        resolve() {
                            return "4PnZ"
                        }
                    }, {
                        fallback: Object(y.c)(c.a, null)
                    }),
                    P = Object(o.a)({
                        resolved: {},
                        chunkName: () => "common-route",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!n.m[t]
                        },
                        importAsync: () => Promise.all([n.e(1), n.e(0), n.e(13), n.e(14)]).then(n.bind(null, "+AvO")),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return n(t)
                        },
                        resolve() {
                            return "+AvO"
                        }
                    }, {
                        fallback: Object(y.c)(c.a, null)
                    }),
                    C = Object(o.a)({
                        resolved: {},
                        chunkName: () => "video-route",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!n.m[t]
                        },
                        importAsync: () => Promise.all([n.e(1), n.e(0), n.e(5), n.e(42)]).then(n.bind(null, "zD9q")),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return n(t)
                        },
                        resolve() {
                            return "zD9q"
                        }
                    }, {
                        fallback: Object(y.c)(c.a, null)
                    }),
                    I = Object(o.a)({
                        resolved: {},
                        chunkName: () => "common-route",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!n.m[t]
                        },
                        importAsync: () => Promise.all([n.e(1), n.e(0), n.e(13), n.e(14)]).then(n.bind(null, "H0fq")),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return n(t)
                        },
                        resolve() {
                            return "H0fq"
                        }
                    }, {
                        fallback: Object(y.c)(c.a, null)
                    }),
                    k = Object(o.a)({
                        resolved: {},
                        chunkName: () => "common-route",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!n.m[t]
                        },
                        importAsync: () => Promise.all([n.e(1), n.e(0), n.e(13), n.e(14)]).then(n.bind(null, "GXa3")),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return n(t)
                        },
                        resolve() {
                            return "GXa3"
                        }
                    }, {
                        fallback: Object(y.c)(c.a, null)
                    }),
                    L = Object(o.a)({
                        resolved: {},
                        chunkName: () => "section-route",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!n.m[t]
                        },
                        importAsync: () => Promise.all([n.e(3), n.e(1), n.e(0), n.e(5), n.e(25)]).then(n.bind(null, "4GLs")),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return n(t)
                        },
                        resolve() {
                            return "4GLs"
                        }
                    }, {
                        fallback: Object(y.c)(c.a, null)
                    }),
                    R = Object(o.a)({
                        resolved: {},
                        chunkName: () => "topic-route",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!n.m[t]
                        },
                        importAsync: () => Promise.all([n.e(1), n.e(0), n.e(26)]).then(n.bind(null, "YXT7")),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return n(t)
                        },
                        resolve() {
                            return "YXT7"
                        }
                    }, {
                        fallback: Object(y.c)(c.a, null)
                    }),
                    N = (e, t) => {
                        const n = e,
                            o = e || t;
                        return Object(y.c)(a.a, null, n && Object(y.c)("meta", {
                            name: "noChartbeat",
                            content: "true"
                        }), o ? Object(y.c)("meta", {
                            name: "robots",
                            content: "noindex, nofollow"
                        }) : Object(y.c)("meta", {
                            name: "robots",
                            content: "max-image-preview:large"
                        }))
                    },
                    D = () => [Object(y.c)(l.a, {
                        exact: !0,
                        path: "/search/:query/:page?",
                        component: m.a,
                        notDiscoverable: !0,
                        adSlot: s.a,
                        key: "route-search-page",
                        hideAppDownloadBanner: !0,
                        themeRounded: !0
                    }), Object(y.c)(l.a, {
                        exact: !0,
                        path: "/search",
                        component: u.a,
                        notDiscoverable: !0,
                        adSlot: s.a,
                        key: "route-search-index",
                        hideAppDownloadBanner: !0
                    })],
                    M = () => Object(f.b)("stats-perform/status") && !Object(b.isProductionEnv)() && Object(y.c)(l.a, {
                        exact: !0,
                        path: "/opta-playground",
                        component: w
                    }),
                    x = e => Object.entries(e).map(e => {
                        let [t, n] = e;
                        return Object(y.c)(l.a, {
                            exact: !0,
                            strict: !0,
                            path: t,
                            component: d.a,
                            redirectTo: n,
                            key: t,
                            hideAppDownloadBanner: !0
                        })
                    }),
                    U = () => {
                        var t, n;
                        return null === (t = e) || void 0 === t || null === (n = t.redirects) || void 0 === n ? void 0 : n.map((e, t) => {
                            const n = "from-" + e.from + "-to-" + e.to;
                            return Object(y.c)(l.a, {
                                exact: !0,
                                strict: !0,
                                path: e.from,
                                component: d.a,
                                redirectTo: e.to,
                                key: n,
                                hideAppDownloadBanner: !0
                            })
                        })
                    },
                    z = () => {
                        if (!Object(f.b)(v.j)) return [];
                        return [Object(y.c)(l.a, {
                            exact: !0,
                            path: "/account",
                            component: A,
                            key: "sign-up-in-page",
                            hideStickyFooterAds: !0,
                            hideAppDownloadBanner: !0
                        }), Object(y.c)(l.a, {
                            exact: !0,
                            path: "/account/:page(sign-up|sign-in|verify|forgot-password)",
                            component: A,
                            key: "account-pages",
                            hideStickyFooterAds: !0,
                            hideAppDownloadBanner: !0
                        }), Object(y.c)(l.a, {
                            exact: !0,
                            path: "/onboarding/",
                            component: T,
                            key: "onboarding-page",
                            hideStickyFooterAds: !0,
                            hideAppDownloadBanner: !0
                        }), Object(y.c)(l.a, {
                            exact: !0,
                            path: "/onboarding/:onboardingPage(newsletters)",
                            component: T,
                            key: "onboarding-page-newsletters",
                            hideStickyFooterAds: !0,
                            hideAppDownloadBanner: !0
                        }), Object(y.c)(l.a, {
                            exact: !0,
                            path: "/my-account/",
                            component: E,
                            key: "my-account-page",
                            hideStickyFooterAds: !0,
                            hideAppDownloadBanner: !0
                        }), Object(y.c)(l.a, {
                            exact: !0,
                            path: "/my-account/:settingsPage(reading-list|newsletters|privacy-settings)",
                            component: E,
                            key: "my-account-reading-list-page",
                            hideStickyFooterAds: !0,
                            hideAppDownloadBanner: !0
                        }), Object(y.c)(l.a, {
                            exact: !0,
                            path: "/my-account/change-password",
                            component: O,
                            key: "my-account-change-password-page",
                            hideStickyFooterAds: !0,
                            hideAppDownloadBanner: !0
                        }), Object(y.c)(l.a, {
                            exact: !0,
                            path: "/resetpassword",
                            component: j,
                            key: "reset-password-page",
                            hideStickyFooterAds: !0,
                            hideAppDownloadBanner: !0
                        }), Object(y.c)(l.a, {
                            exact: !0,
                            path: "/verifyemail",
                            component: d.a,
                            redirectTo: "/onboarding",
                            key: "verify-email",
                            preserveQueryStrings: !0,
                            hideStickyFooterAds: !0,
                            hideAppDownloadBanner: !0
                        }), Object(y.c)(l.a, {
                            exact: !0,
                            path: v.k,
                            component: _,
                            key: "account-social-consent",
                            hideStickyFooterAds: !0,
                            hideAppDownloadBanner: !0
                        })]
                    },
                    B = t => {
                        var n, o;
                        const r = p.a.get("livePageConfig").audio,
                            i = (null === r || void 0 === r || r.switchType, g.IS_APP_DOWNLOAD_BANNER_ENABLED[Object(h.a)()]),
                            a = Object(h.e)() ? P : k,
                            c = [];
                        return null === (n = e) || void 0 === n || null === (o = n.routes) || void 0 === o || o.forEach(e => {
                            switch (e.name) {
                                case "topicsPage":
                                case "eventsPage":
                                    e.route.forEach(t => {
                                        c.push(Object(y.c)(l.a, {
                                            exact: !0,
                                            key: e.name,
                                            path: "/" + t,
                                            component: R,
                                            adSlot: s.a,
                                            bypassBlockContext: "sectionpage",
                                            hideAppDownloadBanner: i,
                                            themeRounded: !0
                                        }))
                                    });
                                    break;
                                case "topicsDefaultChildPage":
                                    e.route.forEach((e, t) => {
                                        c.push(Object(y.c)(l.a, {
                                            exact: !0,
                                            path: "/" + e,
                                            component: S,
                                            key: t,
                                            slug: e,
                                            hideAppDownloadBanner: i
                                        }))
                                    });
                                    break;
                                case "videosPage":
                                    e.route.forEach(t => {
                                        c.push(Object(y.c)(l.a, {
                                            exact: !0,
                                            key: e.name,
                                            path: "/" + Object(b.safeDecodeString)(t),
                                            component: C,
                                            subMenuSlug: "videos",
                                            bypassBlockContext: "sectionpage",
                                            darkMode: !0,
                                            hideStickyFooterAds: !0,
                                            hideAppDownloadBanner: i,
                                            themeRounded: !0
                                        }))
                                    });
                                    break;
                                case "homePages":
                                    0;
                                    break;
                                case "defaultPage":
                                    e.route.forEach((e, t) => {
                                        var n;
                                        Object(h.b)() && e.startsWith("sponsoredcontent") ? c.push(Object(y.c)(l.a, {
                                            exact: !0,
                                            path: "/" + e,
                                            component: I,
                                            key: t,
                                            adSlot: s.a,
                                            slug: e,
                                            hideAppDownloadBanner: !0
                                        })) : c.push(Object(y.c)(l.a, {
                                            exact: !0,
                                            path: "/" + e,
                                            component: a,
                                            key: t,
                                            slug: e,
                                            adSlot: (null === (n = p.a.get("defaultPage")) || void 0 === n ? void 0 : n.hasAdSlot) ? s.a : null,
                                            hideAppDownloadBanner: i
                                        }))
                                    });
                                    break;
                                case "htmlPage":
                                    e.route.forEach((t, n) => {
                                        c.push(Object(y.c)(l.a, {
                                            exact: !0,
                                            path: "/" + t,
                                            component: a,
                                            key: n,
                                            slug: t,
                                            adSlot: s.a,
                                            hideAppDownloadBanner: i,
                                            template: e.name
                                        }))
                                    });
                                    break;
                                case "postsPage":
                                    e.route.forEach((e, t) => {
                                        c.push(Object(y.c)(l.a, {
                                            exact: !0,
                                            path: `/:postType(${e})`,
                                            component: L,
                                            key: t,
                                            adSlot: s.a,
                                            bypassBlockContext: "sectionpage",
                                            hideAppDownloadBanner: i
                                        }))
                                    })
                            }
                        }), c
                    }
            }).call(this, n("Uwcf"))
        },
        "7tCN": function(e, t, n) {
            "use strict";
            var o = n("J0m8"),
                r = n("dQgG"),
                i = n("B1Rb"),
                a = n.n(i),
                s = (n("VBdi"), n("BqLB")),
                c = n.n(s),
                l = n("9mJr"),
                d = n("yDnS"),
                u = n("+JkO"),
                p = n("MwNz"),
                m = n("aPqV"),
                g = n("D9ji"),
                f = n("xAi6"),
                h = n("kXcp"),
                v = n("KthT");
            var b = n("Kw2d"),
                y = n("9N7U"),
                w = n("dVLG");
            n.d(t, "m", (function() {
                return E
            })), n.d(t, "c", (function() {
                return j
            })), n.d(t, "b", (function() {
                return T
            })), n.d(t, "d", (function() {
                return S
            })), n.d(t, "e", (function() {
                return P
            })), n.d(t, "f", (function() {
                return C
            })), n.d(t, "j", (function() {
                return I
            })), n.d(t, "n", (function() {
                return k
            })), n.d(t, "i", (function() {
                return B
            })), n.d(t, "h", (function() {
                return F
            })), n.d(t, "g", (function() {
                return V
            })), n.d(t, "k", (function() {
                return W
            })), n.d(t, "l", (function() {
                return Y
            })), n.d(t, "o", (function() {
                return K
            })), n.d(t, "a", (function() {
                return X
            }));
            const A = e => {
                    if (e.widgets && e.widgets.length > 0) {
                        const e = document.querySelectorAll("twitter-tweet");
                        if (null === e || void 0 === e ? void 0 : e.length)
                            for (const t of e) t.style.visibility = "visible"
                    }
                },
                _ = e => Array.from(e ? [e] : document.body.getElementsByClassName("wysiwyg")),
                E = e => {
                    const t = _(e);
                    if (!t) return;
                    if ("undefined" !== typeof FB)
                        for (const o of t) FB.XFBML.parse(o);
                    "undefined" !== typeof instgrm && instgrm.Embeds.process(), "undefined" !== typeof InfogramEmbeds && InfogramEmbeds.process && InfogramEmbeds.process(), "undefined" !== typeof twttr ? (() => {
                        var e, t;
                        null === (e = twttr.widgets) || void 0 === e || e.load(), null === (t = twttr.events) || void 0 === t || t.bind("loaded", A)
                    })() : (e => {
                        if (!e || Object(g.e)()) return;
                        const t = e.map(e => Array.from(e.getElementsByClassName("twitter-tweet"))).flat();
                        (null === t || void 0 === t ? void 0 : t.forEach) && t.forEach(e => {
                            e.style = "visibility: visible;"
                        })
                    })(t);
                    const n = t.map(e => Array.from(e.getElementsByClassName("video-js"))).flat().filter(e => !e.classList.contains("aj-parsed-component"));
                    for (const a of n) {
                        var r;
                        const e = a.parentNode;
                        if ("P" !== (null === (r = a.nextSibling) || void 0 === r ? void 0 : r.nodeName)) continue;
                        const t = {
                            accountId: Object(m.d)(a.dataset.account),
                            playerId: Object(m.e)(a.dataset.account),
                            videoId: a.dataset.videoId
                        };
                        if (!t.accountId) continue;
                        const n = e => {
                            try {
                                e.target.closest("figure").querySelector("div.post-icon__container").style.visibility = "hidden"
                            } catch (t) {
                                console.error("Error on hiding BC Video duration", t)
                            }
                        };
                        if ("undefined" !== typeof bc && bc.videojs.getPlayer(a)) try {
                            const e = bc.videojs.getPlayer(a);
                            e.on("loadstart", t => {
                                var n, o;
                                Object(y.renderVideoInfo)(null === (n = e.mediainfo) || void 0 === n ? void 0 : n.duration, null === (o = e.mediainfo) || void 0 === o ? void 0 : o.name, t.target.closest("figure"))
                            }), e.on("play", e => {
                                n(e), Object(v.i)({
                                    mediaId: e.target.id,
                                    element: document
                                })
                            })
                        } catch (i) {} else {
                            for (; null === e || void 0 === e ? void 0 : e.lastElementChild;) e.removeChild(e.lastElementChild);
                            Object(o.a)({
                                refNode: e,
                                accountId: t.accountId,
                                playerId: t.playerId,
                                videoId: t.videoId,
                                embedId: "default",
                                refNodeInsert: o.a.REF_NODE_INSERT_APPEND,
                                embedOptions: {
                                    tagName: o.a.EMBED_TAG_NAME_VIDEO
                                },
                                onEmbedCreated: e => {
                                    var t, n;
                                    e.classList.add("pause-controller"), n = e, (t = a) && n && t.getAttribute && n.setAttribute && n.setAttribute("style", t.getAttribute("style"))
                                },
                                onSuccess: e => {
                                    const o = e.ref;
                                    Object(u.c)(o.id(), t.playerId, a.dataset.duration), o.on("loadstart", e => {
                                        var t, n;
                                        Object(y.renderVideoInfo)(null === (t = o.mediainfo) || void 0 === t ? void 0 : t.duration, null === (n = o.mediainfo) || void 0 === n ? void 0 : n.name, e.target.closest("figure"))
                                    }), o.on("play", e => {
                                        n(e), Object(v.i)({
                                            mediaId: e.target.id,
                                            element: document
                                        })
                                    })
                                }
                            })
                        }
                    }
                    t.forEach(e => O(e))
                },
                O = e => {
                    const t = e.querySelectorAll("blockquote.tiktok-embed");
                    var n;
                    t && "undefined" !== typeof tiktokEmbed && (null === (n = tiktokEmbed.lib) || void 0 === n || n.render(Array.from(t)))
                },
                j = e => {
                    const t = e.querySelectorAll(".jetpack-video-wrapper iframe");
                    for (let o = 0; o < t.length; o++) {
                        const e = t[o].getBoundingClientRect(),
                            n = Math.round(e.width / e.height * 10) / 10;
                        n === Math.round(16 / 9 * 10) / 10 ? t[o].parentNode.classList.add("ratio-16-by-9") : n === Math.round(4 / 3 * 10) / 10 ? t[o].parentNode.classList.add("ratio-4-by-3") : n === Math.round(16) / 10 && t[o].parentNode.classList.add("ratio-16-by-10")
                    }((e, t) => {
                        const n = e.getElementsByTagName("iframe");
                        for (const i of n) {
                            var o, r;
                            if (null === (o = i.parentElement) || void 0 === o || null === (r = o.classList) || void 0 === r ? void 0 : r.contains("fluid-vids")) continue;
                            if (-1 === i.src.search(t)) continue;
                            if (-1 !== i.src.indexOf("facebook.com/plugins/post.php")) {
                                i.classList.add("iframe--center");
                                continue
                            }
                            if (i.classList.add("pause-controller"), i.classList.add("in-content"), -1 !== i.src.indexOf("youtube.com")) {
                                const t = new URL(i.src);
                                t.searchParams.has("enablejsapi") || (t.searchParams.append("enablejsapi", "1"), i.src = t.href), Object(v.a)(i, f.YOUTUBE_ORIGIN, () => {
                                    Object(v.i)({
                                        mediaId: Object(v.g)(i.src),
                                        element: e
                                    })
                                })
                            }
                            const n = i.parentElement;
                            if (-1 !== i.src.indexOf("player.vimeo.com") && "relative" === n.style.position) continue;
                            const a = i.height / i.width * 100;
                            i.style.position = "absolute", i.style.top = "0", i.style.left = "0", i.width = "100%", i.height = "100%";
                            const s = document.createElement("div");
                            s.className = "fluid-vids", s.style.width = "100%", s.style.position = "relative", s.style.paddingTop = a + "%";
                            i.parentNode.insertBefore(s, i), s.appendChild(i)
                        }
                    })(e, /www.youtube.com|player.vimeo.com|facebook.com\/plugins/);
                    const n = e.querySelectorAll(".fb-video");
                    for (const o of n) o.setAttribute("data-width", "auto")
                },
                T = e => {
                    if (null === e || void 0 === e ? void 0 : e.length)
                        for (let t = 0; t < e.length; t++) e[t] && clearInterval(e[t])
                },
                S = e => {
                    if (!e) return;
                    const t = [];
                    return e.querySelectorAll('[data-embed-type="google-trends"]').forEach(e => {
                        e.innerHTML = e.innerHTML.toString().replace(/\u2033/g, '"');
                        const n = document.createElement("iframe"),
                            o = '<html><head><script type="text/javascript" src="' + e.getAttribute("data-embed-src") + '"><\/script></head><body><script type="text/javascript">' + e.innerHTML + "<\/script></body></html>";
                        n.src = "about:blank", n.width = "100%", n.style.border = "0", e.parentNode.insertBefore(n, e.nextSibling), n.contentDocument.write(o);
                        let r = 0,
                            i = null;
                        const a = e => {
                            const o = () => {
                                if (i) {
                                    clearInterval(i);
                                    const e = t.indexOf(i); - 1 !== e && t.splice(e, 1)
                                }
                            };
                            r = 0;
                            o(), i = setInterval((function() {
                                var e;
                                r++, r >= 150 && o(), (null === (e = n.contentDocument) || void 0 === e ? void 0 : e.querySelector("iframe")) && (n.height = n.contentDocument.querySelector("iframe").offsetHeight + 20 + "px")
                            }), e ? 100 : 400), t.push(i)
                        };
                        a(), window.addEventListener("resize", () => a(!0))
                    }), t
                },
                P = e => {
                    var t;
                    if (!0 === (null === (t = p.a.get("supportedEmbeds")) || void 0 === t ? void 0 : t.infogram)) try {
                        const t = _(e);
                        if (!Array.isArray(t)) return;
                        t.map(e => Array.from(e.getElementsByTagName("iframe"))).flat().forEach(e => {
                            if (null === e || void 0 === e ? void 0 : e.src.includes("e.infogram.com")) {
                                const t = e.parentNode.getBoundingClientRect().width / parseInt(e.width);
                                e.height = parseInt(parseInt(e.height) * t)
                            }
                        })
                    } catch (n) {
                        console.log("Error processing infogram embeds", n)
                    }
                },
                C = e => {
                    try {
                        if (e) {
                            let t, n;
                            if ("object" === typeof e ? t = e.querySelectorAll("opta-widget") : (n = document.createElement("div"), n.innerHTML = e, t = Array.from(n.getElementsByTagName("opta-widget"))), t.forEach(e => {
                                    const t = e.getAttribute("widget"),
                                        n = e.getAttribute("template");
                                    t && n && ((e, t, n) => {
                                        const o = `${t}_${n}`;
                                        e.parentNode.setAttribute("id", o), e.setAttribute("live", "true"), e.setAttribute("show_live", "true"), Object(h.b)(f.MATCH_CENTER_FEATURE_FLAG) && (e.getAttribute("sport") === f.OPTA_WIDGET_SPORT_TYPES.cricket ? (e.setAttribute("match_link", `${f.OPTA_MATCH_LINK}?sport=${f.OPTA_WIDGET_SPORT_TYPES.cricket}`), e.setAttribute("team_link", `${f.OPTA_TEAM_LINK}?sport=${f.OPTA_WIDGET_SPORT_TYPES.cricket}`), e.setAttribute("player_link", `${f.OPTA_PLAYER_LINK}?sport=${f.OPTA_WIDGET_SPORT_TYPES.cricket}`)) : (e.setAttribute("match_link", f.OPTA_MATCH_LINK), e.setAttribute("team_link", f.OPTA_TEAM_LINK), e.setAttribute("player_link", f.OPTA_PLAYER_LINK), e.setAttribute("pre_match", "true"))), "fixtures" === t && (e.setAttribute("start_on_current", "true"), e.setAttribute("pre_match", "true"));
                                        ["fixtures_grid", "match_summary_normal"].includes(o) || e.setAttribute("date_format", "ddd D MMM"), Object(y.isRTLSite)() && ("fixtures_normal" === o && e.setAttribute("date_format", "dddd D MMM"), "squad_normal" === o && e.setAttribute("player_naming", "initial"))
                                    })(e, t, n)
                                }), n) return n.innerHTML
                        }
                        return null
                    } catch (t) {
                        console.log("Error processing opta widget embeds", t)
                    }
                },
                I = e => {
                    e.querySelectorAll('[class*="wp-image-"]').forEach(e => {
                        try {
                            if (e.setAttribute("loading", "lazy"), e.src) {
                                const t = e.src.includes("?") ? "&" : "?";
                                e.src = `${e.src}${t}quality=${f.DEFAULT_IMAGE_QUALITY_LEVEL}`
                            }
                        } catch (t) {
                            console.error("Error adding lazy loading attribute for embedded image", e, t)
                        }
                    })
                },
                k = e => {
                    const t = e.querySelectorAll("video[data-video-id],video-js[data-video-id]");
                    (null === t || void 0 === t ? void 0 : t.length) < 1 || t.forEach(e => {
                        if (!e.classList.contains("aj-parsed-component")) try {
                            const t = e.closest("figure");
                            if (null === t || void 0 === t ? void 0 : t.classList.contains("in-page-video")) return;
                            let n = e.parentNode;
                            (n.hasAttribute("playsinline") || n.classList.contains("video-js")) && (n = e.parentNode.parentNode);
                            const o = document.createElement("figure"),
                                r = document.createElement("div");
                            if (o.className = "in-page-video", o.setAttribute("role", "presentation"), n.parentNode.parentNode.insertBefore(o, n.parentNode), o.appendChild(n.parentNode), c.a.render(Object(w.c)(d.a, {
                                    duration: "-",
                                    className: "video-duration-manual-html",
                                    isVisible: !0,
                                    variant: "large"
                                }), r), o.appendChild(r), Object(y.supportsFigCaption)()) {
                                const e = document.createElement("figcaption");
                                o.appendChild(e)
                            }
                            const i = o.nextElementSibling;
                            "P" === (null === i || void 0 === i ? void 0 : i.tagName) && "" === (null === i || void 0 === i ? void 0 : i.textContent.trim()) && i.remove()
                        } catch (t) {
                            console.error("Error on rendering BC Video duration and title", t)
                        }
                    })
                },
                L = (e, t) => {
                    let n = !0;
                    if (Array.isArray(e)) n = !(e.length < 1) && e.some(e => (null === e || void 0 === e ? void 0 : e.text) && e.text.match(new RegExp(t, "gi")));
                    else {
                        n = null !== new RegExp(t, "gi").exec(e)
                    }
                    return n
                },
                R = e => L(e, "<div.*?class=['\"].*?(fb-video|fb-post).*?['\"].*?"),
                N = e => L(e, "<blockquote.*?class=['\"].*?(twitter-tweet).*?['\"].*?"),
                D = e => L(e, "<blockquote.*?class=['\"].*?(tiktok-embed).*?['\"].*?"),
                M = e => L(e, "<blockquote.*?class=['\"].*?(instagram-media).*?['\"].*?"),
                x = e => L(e, "<iframe.*?src=['\"].*?(omnivirt.com).*?['\"]"),
                U = e => L(e, "<storifyme-collection.*?url=['\"].*?(storifyme.com).*?['\"]") || L(e, "<storifyme-story"),
                z = e => L(e, "<iframe.*?src=['\"].*?(e.infogram.com).*?['\"]"),
                B = e => L(e, "<iframe.*?src=['\"].*?(youtube.com).*?['\"]"),
                F = e => L(e, "<iframe.*?src=['\"].*?(player.vimeo.com).*?['\"]"),
                V = e => L(e, "<iframe[\\s\\S]+?src=['\"].*?(datawrapper.dwcdn.net).*?['\"]"),
                G = e => L(e, "<iframe[\\s\\S]+?src=['\"].*?(embed.maglr.com).*?['\"]");
            let q = !1;
            const W = e => {
                    if (!q && r.canUseDOM && V(e)) {
                        const e = a()(e => {
                            if ("undefined" !== typeof e.data["datawrapper-height"]) {
                                const t = document.querySelectorAll("iframe");
                                for (const n in e.data["datawrapper-height"])
                                    for (let o = 0; o < t.length; o++)
                                        if (t[o].contentWindow === e.source) {
                                            t[o].style.height = e.data["datawrapper-height"][n] + "px"
                                        }
                            }
                        }, f.DEFAULT_THROTTLE_WAIT);
                        Object(b.a)() || (q = !0), window.addEventListener("message", e)
                    }
                },
                Y = e => {
                    if (V(e)) {
                        const t = '<span overflow tabindex="0" role="button" aria-label="Read more">&nbsp;</span>';
                        return e.replace(new RegExp(/(?:<amp-iframe)([\s\S].*?src=['"].*?datawrapper.dwcdn.net.*?['"].*?)(?:<noscript>.*?<\/noscript>)(.*?<\/amp-iframe>)/gi), `<amp-iframe resizable$1${t}$2`)
                    }
                    return e
                },
                H = e => {
                    if (!r.canUseDOM) return !1;
                    const t = (e => {
                            const t = {
                                twitter: "twitter-tweet",
                                instagram: "instagram-media"
                            };
                            switch (e) {
                                case "facebook":
                                    {
                                        const e = document.getElementsByClassName("fb-video"),
                                            t = document.getElementsByClassName("fb-post");
                                        if (e.length && t.length) {
                                            return e[0].offsetTop > t[0].offsetTop ? t[0] : e[0]
                                        }
                                        return e.length ? e[0] : t.length ? t[0] : null
                                    }
                                case "twitter":
                                case "instagram":
                                    {
                                        const n = document.getElementsByClassName(t[e]);
                                        return n.length ? n[0] : null
                                    }
                                case "storify":
                                    {
                                        const e = document.getElementsByTagName("storifyme-collection");
                                        return e.length ? e[0] : null
                                    }
                            }
                        })(e),
                        n = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
                    return !!(t && t.offsetTop < n)
                },
                K = e => {
                    N(e.innerHTML) && J(t => {
                        var n;
                        null === t || void 0 === t || null === (n = t.events) || void 0 === n || n.bind("loaded", t => {
                            const n = e.querySelectorAll("blockquote.twitter-tweet");
                            if (0 !== n.length) {
                                ((e, t) => {
                                    for (const n of e) {
                                        const e = p.a.get("i18n").t("deleted tweet message");
                                        n.hasAttribute(t) && (n.setAttribute("deleted-tweet-message", e), n.style.visibility = "visible")
                                    }
                                })(n, $(n[0].dataset))
                            }
                        })
                    })
                },
                J = e => {
                    const t = setInterval(() => {
                        "undefined" !== typeof twttr && (clearInterval(t), e(twttr))
                    }, 200)
                },
                $ = e => {
                    for (const t in e)
                        if (e[t].indexOf("twitterExtracted")) return "data-" + t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                    return ""
                },
                X = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!e || !Object(y.isSocialEmbedSite)()) return !1;
                    const n = [{
                            src: "https://connect.facebook.net/en_US/sdk.js#xfbml=false&version=v14.0",
                            method: "hasFBEmbed",
                            id: "facebook"
                        }, {
                            src: "https://platform.twitter.com/widgets.js",
                            method: "hasTwitterEmbed",
                            id: "twitter"
                        }, {
                            src: "https://www.tiktok.com/embed.js",
                            method: "hasTiktokEmbed",
                            id: "tiktok"
                        }, {
                            src: "https://www.instagram.com/embed.js",
                            method: "hasIGEmbed",
                            id: "instagram"
                        }, {
                            src: "https://e.infogram.com/js/dist/embed-loader-min.js",
                            method: "hasInfogramEmbed",
                            id: "infogram-async"
                        }, {
                            src: "//cdn.omnivirt.com/scripts/embed.js",
                            method: "hasOmnivirtEmbed",
                            id: "omnivirt"
                        }, {
                            src: f.STORIFYME_SCRIPT,
                            method: "hasStorifymeEmbed",
                            id: "storify"
                        }, {
                            src: "https://embed.maglr.com/assets/embed/js/embed.min.js",
                            method: "hasMaglrEmbed",
                            id: "maglr"
                        }],
                        o = {
                            hasFBEmbed: R,
                            hasTwitterEmbed: N,
                            hasIGEmbed: M,
                            hasInfogramEmbed: z,
                            hasOmnivirtEmbed: x,
                            hasStorifymeEmbed: U,
                            hasTiktokEmbed: D,
                            hasMaglrEmbed: G
                        },
                        r = Z(e);
                    return Object(w.c)(l.a, null, n.filter(n => o[n.method](e) && (t || H(n.id))).map(e => Object(w.c)("script", {
                        key: e.src,
                        src: e.src,
                        id: e.id,
                        async: !0,
                        defer: !0,
                        type: "text/javascript"
                    })), r.map(e => Object(w.c)("script", {
                        key: e,
                        src: "https://embed.maglr.com/" + e,
                        id: e,
                        async: !0,
                        defer: !0,
                        type: "text/javascript"
                    })))
                },
                Z = e => {
                    const t = [],
                        n = /<maglr-embed[^>]*maglrid=['"]([^'"]+)['"][^>]*>/gi;
                    let o;
                    for (; null !== (o = n.exec(e));) t.push(o[1]);
                    return t
                }
        },
        "8Ffx": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            })), n.d(t, "b", (function() {
                return c
            }));
            var o = n("vUkw"),
                r = n.n(o),
                i = n("ZDfq"),
                a = n("9N7U");
            const s = function(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    const o = e => {
                            try {
                                return n.find(t => t(e))
                            } catch (t) {
                                return console.error("in shouldExcludeElement()", t), !1
                            }
                        },
                        i = (null === (t = Object(a.getDynamicValue)("arcSettings")) || void 0 === t ? void 0 : t.additionalEmbedsWhitelistedDomains) || [];
                    return r()(e, {
                        allowedTags: r.a.defaults.allowedTags.concat(["label", "img", "video", "video-js", "fb:post", "script", "iframe", "nl", "strike", "opta-widget", "storifyme-collection", "storifyme-story", "source", "statsperform", "maglr-embed"]),
                        allowedAttributes: Object.assign({}, r.a.defaults.allowedAttributes, {
                            "*": ["id", "class", "align", "border", "style", "dir", "data-*", "lang", "href", "loading", "alt", "role", "aria-*", "rel"],
                            iframe: ["src", "width", "height", "style", "scrolling", "frameborder", "allowtransparency", "allowfullscreen", "allow", "loading", "title"],
                            time: ["datetime"],
                            video: ["*"],
                            script: ["src", "async", "defer", "data-telegram-post", "data-width"],
                            img: ["src"],
                            "opta-widget": ["*"],
                            statsperform: ["*"],
                            "storifyme-collection": ["url"],
                            "storifyme-story": ["account", "story", "env"],
                            source: ["src", "type"],
                            "maglr-embed": ["*"]
                        }),
                        allowedIframeHostnames: ["embed.maglr.com", "www.youtube.com", "www.facebook.com", "player.vimeo.com", "www.dailymotion.com", "omny.fm", "cdn.omnivirt.com", "art19.com", "www.art19.com", "trends.google.com", "w.soundcloud.com", "www.google.com", "embed.ted.com", "widget.anghami.com", "players.brightcove.net", "cdn.knightlab.com", "uploads.knightlab.com", "embed.gettyimages.com", "interactive.aljazeera.com", "interactive.aljazeera.net", "www.documentcloud.org", "embeds.audioboom.com", "public.flourish.studio", "flo.uri.sh", "e.infogram.com", "embed.documentcloud.org", "datawrapper.dwcdn.net", "6cbd7ba5.sibforms.com", "storifyme.com", "t.me", "api.olympics.statsperform.com", ...i],
                        exclusiveFilter: o,
                        allowVulnerableTags: !0
                    })
                },
                c = e => {
                    try {
                        return r()(e, i.titleHtml).replace(/&amp;/g, "&")
                    } catch (t) {
                        return ""
                    }
                }
        },
        "8wCv": function(e, t, n) {},
        "9BFC": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            const o = e => Array.isArray(null === e || void 0 === e ? void 0 : e.schedule) && 0 !== e.schedule.length ? e.schedule.filter(e => e.showName && e.showDescription && e.showTimeslot && e.showDay) : []
        },
        "9N7U": function(e, t, n) {
            "use strict";
            n.r(t),
                function(e) {
                    n.d(t, "COVID_TAX_SLUG", (function() {
                        return b
                    })), n.d(t, "isRTLSite", (function() {
                        return y
                    })), n.d(t, "getSiteDirection", (function() {
                        return w
                    })), n.d(t, "isVideoExcerptShown", (function() {
                        return A
                    })), n.d(t, "getPostTypeFromParams", (function() {
                        return _
                    })), n.d(t, "getIconName", (function() {
                        return E
                    })), n.d(t, "getMetadata", (function() {
                        return O
                    })), n.d(t, "hasIdentifiableDataChanged", (function() {
                        return j
                    })), n.d(t, "hasPostChanged", (function() {
                        return T
                    })), n.d(t, "hasPostListChanged", (function() {
                        return S
                    })), n.d(t, "getPostLink", (function() {
                        return P
                    })), n.d(t, "isAMPSite", (function() {
                        return C
                    })), n.d(t, "getAbsolutePostLink", (function() {
                        return I
                    })), n.d(t, "getAbsoluteAMPPostLink", (function() {
                        return k
                    })), n.d(t, "getAbsoluteLink", (function() {
                        return L
                    })), n.d(t, "getHost", (function() {
                        return R
                    })), n.d(t, "getHostName", (function() {
                        return N
                    })), n.d(t, "getMoreFromSectionParams", (function() {
                        return M
                    })), n.d(t, "isPodcastPost", (function() {
                        return x
                    })), n.d(t, "getSkipArticleIds", (function() {
                        return U
                    })), n.d(t, "checkArticleList", (function() {
                        return z
                    })), n.d(t, "filterData", (function() {
                        return B
                    })), n.d(t, "getQueryVar", (function() {
                        return F
                    })), n.d(t, "getPreviewID", (function() {
                        return V
                    })), n.d(t, "getPlaylistID", (function() {
                        return G
                    })), n.d(t, "getErrorPolicy", (function() {
                        return q
                    })), n.d(t, "getFetchPolicy", (function() {
                        return W
                    })), n.d(t, "getNextFetchPolicy", (function() {
                        return Y
                    })), n.d(t, "getPageName", (function() {
                        return H
                    })), n.d(t, "squashFeedOrder", (function() {
                        return K
                    })), n.d(t, "isEmptyObject", (function() {
                        return X
                    })), n.d(t, "isDataEmptyOrNull", (function() {
                        return Z
                    })), n.d(t, "truncateText", (function() {
                        return Q
                    })), n.d(t, "getSharableURL", (function() {
                        return ee
                    })), n.d(t, "isAbsoluteURL", (function() {
                        return te
                    })), n.d(t, "openCookiePreferences", (function() {
                        return ne
                    })), n.d(t, "getFallbackCategory", (function() {
                        return oe
                    })), n.d(t, "getFallbackPostTypes", (function() {
                        return re
                    })), n.d(t, "getCanonicalUrl", (function() {
                        return ie
                    })), n.d(t, "getSectionCanonicalUrl", (function() {
                        return ae
                    })), n.d(t, "getSocialImagePath", (function() {
                        return se
                    })), n.d(t, "isSocialEmbedSite", (function() {
                        return ce
                    })), n.d(t, "getUniqueKey", (function() {
                        return le
                    })), n.d(t, "getRandomKey", (function() {
                        return de
                    })), n.d(t, "getRandomKeyWithPrefix", (function() {
                        return ue
                    })), n.d(t, "getReplacementHeadline", (function() {
                        return pe
                    })), n.d(t, "capitalizeFirstLetter", (function() {
                        return me
                    })), n.d(t, "queueRenderAdRequest", (function() {
                        return ge
                    })), n.d(t, "shuffleResults", (function() {
                        return fe
                    })), n.d(t, "isNotAMPContent", (function() {
                        return he
                    })), n.d(t, "isSafeForAds", (function() {
                        return be
                    })), n.d(t, "insertKeepReadingInMarkup", (function() {
                        return ye
                    })), n.d(t, "getSlittedMarkup", (function() {
                        return we
                    })), n.d(t, "untrailingSlashIt", (function() {
                        return Ae
                    })), n.d(t, "trailingSlashIt", (function() {
                        return _e
                    })), n.d(t, "isArticleFromNewsTopic", (function() {
                        return Ee
                    })), n.d(t, "getSectionPageTitle", (function() {
                        return Oe
                    })), n.d(t, "getSiteName", (function() {
                        return je
                    })), n.d(t, "getPageTitle", (function() {
                        return Te
                    })), n.d(t, "appendNews", (function() {
                        return Se
                    })), n.d(t, "getArticlePageTitle", (function() {
                        return Pe
                    })), n.d(t, "getArticleSectionForTitle", (function() {
                        return Ce
                    })), n.d(t, "getArticleSufix", (function() {
                        return Ie
                    })), n.d(t, "insertWriteInCoAuthorNameIntoAuthors", (function() {
                        return ke
                    })), n.d(t, "queryAuthorsByProperty", (function() {
                        return Le
                    })), n.d(t, "articleHasAuthorByProperty", (function() {
                        return Re
                    })), n.d(t, "videoDurationToWords", (function() {
                        return Ne
                    })), n.d(t, "handleKeyboardEvent", (function() {
                        return De
                    })), n.d(t, "getTabsKeyboardNavId", (function() {
                        return Me
                    })), n.d(t, "prefersReducedMotion", (function() {
                        return xe
                    })), n.d(t, "supportsFigCaption", (function() {
                        return Ue
                    })), n.d(t, "renderVideoInfo", (function() {
                        return ze
                    })), n.d(t, "focusArticleCard", (function() {
                        return Be
                    })), n.d(t, "focusArticleCardFeedPage", (function() {
                        return Fe
                    })), n.d(t, "isProductionMode", (function() {
                        return Ve
                    })), n.d(t, "isProductionEnv", (function() {
                        return Ge
                    })), n.d(t, "extractValueFromString", (function() {
                        return qe
                    })), n.d(t, "safeDecodeString", (function() {
                        return We
                    })), n.d(t, "getDatawrapperIds", (function() {
                        return Ye
                    })), n.d(t, "getLiveBlogUpdatesDatawrapperIds", (function() {
                        return He
                    })), n.d(t, "cloneNodeContent", (function() {
                        return Ke
                    })), n.d(t, "prepareCustomNavigationData", (function() {
                        return Je
                    })), n.d(t, "getStickyNavigationData", (function() {
                        return $e
                    })), n.d(t, "getSimplePluralString", (function() {
                        return Xe
                    })), n.d(t, "getLiveBlogIconName", (function() {
                        return Ze
                    })), n.d(t, "shouldSkipMetaPrinting", (function() {
                        return Qe
                    })), n.d(t, "validateExplainerWidget", (function() {
                        return et
                    })), n.d(t, "isWhitelistedArticle", (function() {
                        return tt
                    })), n.d(t, "appendUTMToLink", (function() {
                        return nt
                    })), n.d(t, "hasValidEncoding", (function() {
                        return ot
                    })), n.d(t, "unmountGalleryContainer", (function() {
                        return rt
                    })), n.d(t, "prepareAmpFrameSrc", (function() {
                        return it
                    })), n.d(t, "shouldRenderFixturesWidget", (function() {
                        return at
                    })), n.d(t, "getDynamicValue", (function() {
                        return st
                    })), n.d(t, "getTrimmedText", (function() {
                        return ct
                    })), n.d(t, "getUpdatedFeedOrder", (function() {
                        return lt
                    })), n.d(t, "isInProximity", (function() {
                        return dt
                    })), n.d(t, "isConnatixEnabled", (function() {
                        return ut
                    })), n.d(t, "isSportsFootballVersion", (function() {
                        return pt
                    })), n.d(t, "isSportsCricketVersion", (function() {
                        return mt
                    })), n.d(t, "isOlympicsSportsVersion", (function() {
                        return gt
                    })), n.d(t, "isSportsVersion", (function() {
                        return ft
                    })), n.d(t, "stringIsEmptyOrNewLine", (function() {
                        return ht
                    })), n.d(t, "getScriptHostName", (function() {
                        return vt
                    })), n.d(t, "getTermsAndConditionUrl", (function() {
                        return bt
                    })), n.d(t, "getPrivacyPolicyUrl", (function() {
                        return yt
                    })), n.d(t, "debounce", (function() {
                        return wt
                    })), n.d(t, "getHomePageSlug", (function() {
                        return At
                    })), n.d(t, "hasStatsPerformWidget", (function() {
                        return _t
                    })), n.d(t, "isLocalEnvironment", (function() {
                        return Et
                    })), n.d(t, "isPreviewPage", (function() {
                        return Ot
                    }));
                    var o = n("dQgG"),
                        r = n("h5fM"),
                        i = n.n(r),
                        a = n("v8V0"),
                        s = n("BqLB"),
                        c = n.n(s),
                        l = n("vUkw"),
                        d = n.n(l),
                        u = n("MwNz"),
                        p = n("SWuB"),
                        m = n("7RPU"),
                        g = n("xAi6"),
                        f = n("pbOP"),
                        h = n("Tdow");
                    const v = n("RryT"),
                        b = "coronavirus-pandemic",
                        y = () => Object(f.b)() || Object(f.d)() || Object(f.f)(),
                        w = () => y() ? "rtl" : "ltr",
                        A = e => {
                            if (Object(f.e)()) return !1;
                            if (Object(f.d)()) {
                                return d()(e.excerpt).trim() !== d()(e.content, {
                                    allowedTags: []
                                }).trim()
                            }
                            return !0
                        },
                        _ = e => {
                            if (!e) return null;
                            let t = e[0] ? e[0] : e.category;
                            return t ? (["blogs", "videos", "opinions", "posts"].includes(t) && (t = t.slice(0, -1)), ["blog", "episode", "opinion", "post", "video", "gallery", "longform"].includes(t) ? t : "post") : "post"
                        },
                        E = (e, t) => {
                            let n = "";
                            switch (e) {
                                case "episode":
                                case "video":
                                    n = "play";
                                    break;
                                case "gallery":
                                    n = "camera";
                                    break;
                                case "opinion":
                                case "blog":
                                    n = "quotes";
                                    break;
                                case "series":
                                    n = "headphones"
                            }
                            return n && t && (n += "-inverse"), n
                        },
                        O = e => {
                            var t;
                            let n = [],
                                o = [],
                                r = [];
                            if (e) {
                                var i, a, s, c, l, d, p, m, g, f, h, v;
                                const t = u.a.get("i18n");
                                if ("post" !== e.postType && n.push(e.postType), (null === e || void 0 === e || null === (i = e.programs) || void 0 === i || null === (a = i[0]) || void 0 === a ? void 0 : a.name) && n.push(e.programs[0].name), (null === e || void 0 === e || null === (s = e.postLabel) || void 0 === s || null === (c = s[0]) || void 0 === c ? void 0 : c.name) && n.push(e.postLabel[0].name), null === (l = e.categories) || void 0 === l ? void 0 : l.length) {
                                    const t = e.categories.map(e => e.name);
                                    n.push(...t)
                                }
                                if (null === (d = e.internalTaxonomies) || void 0 === d ? void 0 : d.length) {
                                    const t = e.internalTaxonomies.map(e => e.title);
                                    n.push(...t)
                                }
                                if (null === (p = e.tags) || void 0 === p ? void 0 : p.length) {
                                    const t = e.tags.map(e => e.title);
                                    n.push(...t)
                                }
                                if (null === (m = e.midan) || void 0 === m ? void 0 : m.length) {
                                    const o = e.midan.map(e => "midan" === e.name ? t.t("midan") : e.name);
                                    n.push(...o)
                                }
                                if ((null === e || void 0 === e || null === (g = e.link) || void 0 === g ? void 0 : g.startsWith("/midan/")) ? n.push(t.t("midan")) : (null === e || void 0 === e || null === (f = e.link) || void 0 === f ? void 0 : f.startsWith("/sport/")) && n.push(t.t("sport")), n = n.map(e => "Opinions" === e || "opinion" === e ? "Opinion" : e), n = n.filter((e, t, n) => n.indexOf(e) === t && "Show Types" !== e), null === (h = e.author) || void 0 === h ? void 0 : h.length) {
                                    const t = e.author.map(e => e.name);
                                    o.push(...t)
                                }
                                o = ke(o, e.writeInCoAuthor), r = null === e || void 0 === e || null === (v = e.title) || void 0 === v ? void 0 : v.replace(",", "").split(" ")
                            }
                            return {
                                sections: n.filter(e => e).join(","),
                                authors: o.filter(e => e).join(","),
                                keywords: null === (t = r) || void 0 === t ? void 0 : t.join(", ")
                            }
                        },
                        j = (e, t, n) => {
                            if (!e) return null;
                            try {
                                return t[e].id !== n[e].id
                            } catch (o) {
                                return null
                            }
                        },
                        T = (e, t) => j("article", e, t),
                        S = (e, t) => {
                            var n, o;
                            if (e.loading !== t.loading) return !0;
                            const r = (null === (n = e.articles) || void 0 === n ? void 0 : n.length) ? e.articles.map(e => null === e || void 0 === e ? void 0 : e.id) : [],
                                i = (null === (o = t.articles) || void 0 === o ? void 0 : o.length) ? t.articles.map(e => e.id) : [];
                            return JSON.stringify(r) !== JSON.stringify(i)
                        },
                        P = e => {
                            if ("external-article" === e.postType && e.externalUrl) {
                                const t = v.parse(e.externalUrl);
                                return (o.canUseDOM ? window.location.host : u.a.get("domain")) !== t.host ? e.externalUrl : t.path
                            }
                            return e.link
                        },
                        C = () => u.a.get("enableAmp"),
                        I = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            const n = P(e),
                                o = R(t);
                            return `${o}${n}`
                        },
                        k = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            const n = P(e),
                                o = R(t);
                            return `${o}/amp${n}`
                        },
                        L = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("string" !== typeof e) return null;
                            const n = R(t);
                            return `${n}${e}`
                        },
                        R = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            return e || o.canUseDOM || console.info("hostName is empty and canUseDOM is false, unable to detect Host.\n\t\tplease verify that your component has host or the code is being executed on client side."), o.canUseDOM ? `${window.location.protocol}//${window.location.host}` : e
                        },
                        N = () => o.canUseDOM ? window.location.host : u.a.get("domain"),
                        D = () => {
                            const e = u.a.get("i18n");
                            return {
                                opinion: e.t("Opinion Article"),
                                video: e.t("Video"),
                                gallery: e.t("Gallery"),
                                post: e.t("Post"),
                                blog: e.t("Blog"),
                                episode: e.t("Episode")
                            }
                        },
                        M = e => {
                            let t;
                            const n = Object(p.c)(e, "categories"),
                                o = Object(p.c)(e, "trending"),
                                r = {
                                    allPostTypes: u.a.get("DEFAULT_POSTTYPES"),
                                    trendingCategory: o ? o.slug : "",
                                    category: n ? n.slug : "",
                                    postTypes: u.a.get("DEFAULT_POSTTYPES"),
                                    currentPostType: [e.postType]
                                };
                            return "opinion" === e.postType ? (r.postTypes = [e.postType], t = D()[e.postType], "opinion" === e.postType && e.author && 1 === e.author.length && e.author[0] && e.author[0].slug && (r.authorName = e.author[0].slug, t = u.a.get("i18n").t("Author"))) : (null === o || void 0 === o ? void 0 : o.slug) ? t = o.title : r.category ? t = n.title ? n.title : n.name ? n.name : "" : (r.category = "", r.postTypes = [e.postType], t = D()[e.postType]), {
                                sectionTitle: t,
                                param: r
                            }
                        },
                        x = e => {
                            var t;
                            return "podcast" === (null === e || void 0 === e ? void 0 : e.postType) && (null === e || void 0 === e || null === (t = e.podcastData) || void 0 === t ? void 0 : t.clipID)
                        },
                        U = e => {
                            const t = [e.id];
                            return e.relatedArticles && e.relatedArticles.map(e => t.push(e.id)), t
                        },
                        z = (e, t) => !!e && (e = e.filter(e => -1 === t.indexOf(e.id))).length > 0,
                        B = (e, t, n) => {
                            const o = Object(p.c)(n, "categories"),
                                r = Object(p.c)(n, "trending");
                            return "opinion" !== n.postType && (e.articleList = []), z(e.articleList, t) || (n.trending && 0 !== n.trending.length && z(e.trendingArticleList, t) ? (e.articleList = e.trendingArticleList, e.sectionTitle = r.title) : o && z(e.topicArticleList, t) ? (e.articleList = e.topicArticleList, e.sectionTitle = o.title) : z(e.postTypeArticleList, t) && (e.articleList = e.postTypeArticleList, e.sectionTitle = D()[n.postType])), e.articleList = e.articleList.filter(e => -1 === t.indexOf(e.id)), e.articleList = e.articleList.slice(0, 4), e
                        },
                        F = (e, t) => {
                            var n;
                            if (!(null === e || void 0 === e ? void 0 : e.search)) return "";
                            return null !== (n = Object(a.parse)(e.search)[t]) && void 0 !== n ? n : ""
                        },
                        V = e => F(e, "_preview"),
                        G = e => F(e, "playlist"),
                        q = () => "all",
                        W = e => e ? "no-cache" : "cache-and-network",
                        Y = e => e ? "no-cache" : "cache-first",
                        H = e => (null === e || void 0 === e ? void 0 : e.pathname) ? e.pathname.slice(1) : "",
                        K = function(e, t, n) {
                            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8,
                                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                            if (!e) return [];
                            let i = e.slice();
                            return n && (i = i.slice(r, o), o <= 10) || J(i, t), $(i)
                        },
                        J = (e, t) => {
                            Array.isArray(t) && t.reverse().forEach(t => {
                                t < e.length && "ads" !== e[t].key && e.splice(t, 0, {
                                    key: "ads",
                                    index: "ads-" + t
                                })
                            })
                        },
                        $ = e => {
                            const t = [];
                            for (let n = 0; n < e.length; n++)
                                if ("feed_post" === e[n].key) {
                                    const o = t.length > 0 ? t[t.length - 1] : t[0];
                                    o && "posts" === o.key ? o.items.push(e[n]) : t.push({
                                        key: "posts",
                                        items: [e[n]]
                                    })
                                } else if ("featured_post" === e[n].key) {
                                const o = t.length > 0 ? t[t.length - 1] : t[0];
                                o && "featured_posts" === o.key ? o.items.push(e[n]) : t.push({
                                    key: "featured_posts",
                                    items: [e[n]]
                                })
                            } else t.push(e[n]);
                            return t
                        },
                        X = e => {
                            const t = typeof e;
                            return !!("function" === t || "object" === t) && 0 === Object.keys(e).length
                        },
                        Z = e => null === e || void 0 === e || X(e),
                        Q = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 105,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "...";
                            if (!e || e.length <= t) return e;
                            if (e.length > t) {
                                let o = e.substr(0, t - n.length);
                                return o = o.substr(0, Math.min(o.length, o.lastIndexOf(" "))), o + n
                            }
                        },
                        ee = (e, t) => {
                            var n, r, i;
                            if (!e) return null;
                            const {
                                shortUrl: a
                            } = e, s = te(a) ? a : I(e, t), c = u.a.get("proxyDomain") || g.PROXY_DOMAIN;
                            if (o.canUseDOM && (null === (n = window) || void 0 === n || null === (r = n.location) || void 0 === r || null === (i = r.hostname) || void 0 === i ? void 0 : i.includes(c))) {
                                const {
                                    proxyShortUrl: t
                                } = e;
                                if (t) return t
                            }
                            return s
                        },
                        te = e => /^(http|https):\/\//.test(e),
                        ne = () => {
                            var e;
                            (null === (e = window) || void 0 === e ? void 0 : e.gateway) ? window.gateway.openModal(): window.OneTrust.ToggleInfoDisplay()
                        },
                        oe = e => e.categoryType || "categories",
                        re = e => e.postTypes || u.a.get("DEFAULT_POSTTYPES"),
                        ie = (e, t) => {
                            var n;
                            const o = null !== (n = null === e || void 0 === e ? void 0 : e.actualHost) && void 0 !== n ? n : "";
                            return Ae(`${R(o)}${t}`)
                        },
                        ae = (e, t) => _e(ie(e, t)),
                        se = e => {
                            const t = Object(f.a)();
                            return "aje" === t && "function" === typeof(null === e || void 0 === e ? void 0 : e.includes) && e.includes("/qatar-world-cup-2022") ? "images/world_cup_aje.jpg" : `images/logo_${t}_social.png`
                        },
                        ce = () => u.a.get("enableSocialEmbeds"),
                        le = e => {
                            if (!e) return null;
                            const t = e.map(e => e.id ? e.id : !!Array.isArray(e.posts) && e.posts.map(e => e.id).join("-")).filter(e => !!e);
                            return i()(t.join("-"))
                        },
                        de = () => Math.floor(1e6 * Math.random()) + 1e3,
                        ue = e => `${e?e+"-":""}${de()}`,
                        pe = e => e ? e.replacementHeadline ? e.replacementHeadline : e.title : null,
                        me = e => e.charAt(0).toUpperCase() + e.slice(1),
                        ge = (e, t, n, o) => {
                            window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push((function() {
                                renderAd(e, t, n, o)
                            }))
                        },
                        fe = e => {
                            let t, n, o = e.length;
                            for (; o > 0;) n = Math.floor(Math.random() * o), o--, t = e[o], e[o] = e[n], e[n] = t;
                            return e
                        },
                        he = e => u.a.get("NOT_AMP_SUPPORTED_CONTENT").includes(e),
                        ve = e => {
                            if (!e || 1 !== e.nodeType) return !1;
                            return ["img", "figure", "iframe", "blockquote", "h1", "h2", "h3", "h4", "h5"].some(t => e.getElementsByTagName(t).length > 0)
                        },
                        be = e => {
                            if (!e || 1 !== e.nodeType) return !1;
                            if ((e => {
                                    var t;
                                    const n = null === e || void 0 === e || null === (t = e.textContent) || void 0 === t ? void 0 : t.trim();
                                    return !!((null === n || void 0 === n ? void 0 : n.length) <= 0 || "&nbsp;" === n)
                                })(e)) return !1;
                            if (ve(e)) return !1;
                            const t = e.nextElementSibling;
                            if (t && ve(t)) return !1;
                            const n = e.previousElementSibling;
                            return !(n && ve(n))
                        },
                        ye = (e, t) => {
                            if (!t) return e;
                            const n = we(e);
                            return n.length > 4 && n.splice(3, 0, t), n.join("")
                        },
                        we = e => {
                            const t = /<\/(p|(div)|(amp-iframe))>/g,
                                n = [];
                            for (; null !== t.exec(e);) n.push(t.lastIndex);
                            n.unshift(0), n.pop();
                            const o = [];
                            for (; n.length;) o.unshift(e.substring(n[n.length - 1])), e = e.substring(0, n[n.length - 1]), n.pop();
                            return 0 === o.length && o.push(e), o
                        };

                    function Ae(e) {
                        return "string" === typeof e && e.endsWith("/") ? e.substr(0, e.length - 1) : e
                    }

                    function _e(e) {
                        return !e || "string" !== typeof e || e.endsWith("/") ? e : e + "/"
                    }
                    const Ee = e => !!Array.isArray(e.categories) && e.categories.filter(e => {
                            let {
                                slug: t
                            } = e;
                            return "news" === t
                        }).length > 0,
                        Oe = e => {
                            const t = u.a.get("i18n"),
                                n = Object(f.f)() && "\u0633\u0641\u0631" === e || Object(f.b)(),
                                o = Object(f.b)() ? "-" : "|",
                                r = `${n?"":`${o} ${t.t("Todays latest news")}`}${Object(f.b)()||Object(f.f)()?" | "+je():""}`;
                            return t.t("Live") === e && Object(f.d)() ? `${e} ${t.t("Live stream title")}` : `${e} ${r.trimStart()}`
                        },
                        je = () => Object(f.b)() ? "\u0627\u0644\u062c\u0632\u064a\u0631\u0629 \u0646\u062a" : Object(f.c)() || Object(f.e)() ? "Al Jazeera" : Object(f.d)() ? "\u0627\u0644\u062c\u0632\u064a\u0631\u0629 \u0627\u0644\u0648\u062b\u0627\u0626\u0642\u064a\u0629" : Object(f.g)() ? "\u534a\u5c9b\u7535\u89c6\u53f0" : Object(f.f)() ? "\u0627\u0644\u062c\u0632\u064a\u0631\u0629 \u0645\u0628\u0627\u0634\u0631" : "",
                        Te = e => Object(h.b)(() => `${e} | ${je()}`)(),
                        Se = e => {
                            const t = u.a.get("i18n").t("News");
                            return e.toLowerCase().endsWith(t.toLowerCase()) ? e : Object(f.b)() || Object(f.f)() ? `${t} ${e}` : `${e} ${t}`
                        },
                        Pe = (e, t, n) => {
                            const o = n ? Se(t) : t,
                                r = `${e} | ${o}`;
                            return Object(f.f)() && r.length > 55 || !o ? Te("" + e) : Te(r)
                        },
                        Ce = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            const n = Object(p.b)(e),
                                o = u.a.get("useCategoryAsTitleSuffix");
                            if (o) return (null === n || void 0 === n ? void 0 : n.name) || t;
                            const r = Ie(e);
                            return r || (null === n || void 0 === n ? void 0 : n.name) || t
                        },
                        Ie = e => {
                            let t;
                            if (Array.isArray(e.tags) && e.tags.length > 0) {
                                const n = Object(p.c)(e, "tags");
                                n && (t = n.title)
                            }
                            return t
                        },
                        ke = (e, t) => {
                            if (null === t || void 0 === t ? void 0 : t.name) {
                                let n = parseInt(t.order);
                                const o = t.name.split(", ");
                                n > 0 && n < e.length + 1 ? o.forEach(t => {
                                    e.splice(n++ - 1, 0, t)
                                }) : o.forEach(t => {
                                    e.push(t)
                                })
                            }
                            return e
                        },
                        Le = (e, t, n) => Array.isArray(e) && 0 !== e.legth ? e.filter(e => e[t] === n) : null,
                        Re = (e, t, n) => {
                            const o = Le(e, t, n);
                            return Array.isArray(o) && o.length > 0
                        },
                        Ne = e => {
                            if (!e || "string" !== typeof e) return "";
                            const t = u.a.get("i18n"),
                                n = e.split(":").filter(e => !isNaN(e)),
                                o = n.length;
                            return `${n[o-3]?`${t.t(n[o-3])} ${t.t("hours")} `:""}${n[o-2]?`${t.t(n[o-2])} ${t.t("minutes")} `:""}${n[o-1]?`${t.t(n[o-1])} ${t.t("seconds")} `:""}`
                        },
                        De = (e, t, n) => {
                            (t = Array.isArray(t) ? t : [t]).includes(e.key) && n()
                        },
                        Me = e => {
                            const t = e.target,
                                n = [...t.parentElement.children];
                            if (!n.length) return !1;
                            const o = n[0],
                                r = o.getAttribute("id"),
                                i = n[n.length - 1],
                                a = i.getAttribute("id"),
                                s = t.getAttribute("id"),
                                c = 35,
                                l = 36,
                                d = 37,
                                u = 39;
                            let p = !1;
                            switch (e.keyCode) {
                                case l:
                                    p = o;
                                    break;
                                case c:
                                    p = i;
                                    break;
                                case d:
                                    p = y() ? t.nextElementSibling : t.previousElementSibling;
                                    break;
                                case u:
                                    p = y() ? t.previousElementSibling : t.nextElementSibling;
                                    break;
                                default:
                                    p = !1
                            }
                            return null === p && (p = s === r ? i : s === a && o), !!p && p.getAttribute("id")
                        },
                        xe = () => o.canUseDOM && window.matchMedia("(prefers-reduced-motion)").matches,
                        Ue = () => !Object(f.b)() && !Object(f.f)() && !Object(f.g)() && !Object(f.d)(),
                        ze = (e, t, n) => {
                            try {
                                const o = n.querySelector("span.post-icon__text"),
                                    r = Object(m.d)(e);
                                o && (o.textContent = r);
                                const i = n.querySelector("span.screen-reader-text");
                                if (i) {
                                    const e = u.a.get("i18n");
                                    i.textContent = `${e.t("Video Duration")} ${Ne(r)}`
                                }
                                const a = n.querySelector("figcaption");
                                a && (a.textContent = t)
                            } catch (o) {
                                console.error("Error on rendering Brightcove video media info", o)
                            }
                        },
                        Be = (e, t, n) => {
                            try {
                                if (e) {
                                    var o;
                                    const r = null === (o = e.getElementsByTagName("article")[n]) || void 0 === o ? void 0 : o.querySelector(t);
                                    r && r.focus()
                                }
                            } catch (r) {
                                console.log("Error on focusing to element on Load More", r)
                            }
                        },
                        Fe = (e, t, n) => {
                            try {
                                if (e) {
                                    var o;
                                    const r = null === (o = e.children[n]) || void 0 === o ? void 0 : o.querySelector(t);
                                    r && r.focus()
                                }
                            } catch (r) {
                                console.log("Error on focusing to element on Load More", r)
                            }
                        },
                        Ve = () => !0,
                        Ge = () => !0,
                        qe = (e, t) => {
                            if (e && t) {
                                const n = e.match(t);
                                return null === n || void 0 === n ? void 0 : n[1]
                            }
                        },
                        We = e => {
                            if (!e) return null;
                            try {
                                return decodeURIComponent(e)
                            } catch (t) {
                                return e
                            }
                        },
                        Ye = e => {
                            if (!e) return null;
                            return Array.from(e.matchAll(/<iframe.*?https?:\/\/datawrapper\.dwcdn\.net\/([0-9A-Z]*)\/\d*\/.*?<\/iframe>/gi), e => null === e || void 0 === e ? void 0 : e[1])
                        },
                        He = e => {
                            var t;
                            let n = null;
                            return null === e || void 0 === e || null === (t = e.childrenMeta) || void 0 === t || t.forEach(e => {
                                var t;
                                const o = null === e || void 0 === e || null === (t = e.embeds) || void 0 === t ? void 0 : t.reduce((e, t) => (e.push(t), e), []);
                                n = n ? n.concat(o) : o
                            }), n
                        },
                        Ke = function(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                            if (!document) return e;
                            const o = document.createElement("div"),
                                r = document.createElement("div");
                            r.innerHTML = e;
                            let i = n;
                            if (-1 === n && (i = r.children ? r.children.length - 1 : 0), i > 0) {
                                for (let e = t; e <= i; e++) o.appendChild(r.children[e].cloneNode(!0));
                                return o.innerHTML
                            }
                            return t > 0 ? o.innerHTML : r.innerHTML
                        },
                        Je = e => (null === e || void 0 === e ? void 0 : e.length) && e[0] ? e[0] : {},
                        $e = (e, t) => {
                            let n, o, r, i, a, s;
                            if (e) {
                                var c;
                                const {
                                    customNavigation: t,
                                    displayCustomNavigationOnArticles: l,
                                    customNavigationBrandingImg: d,
                                    title: u,
                                    link: p
                                } = e, m = Je(t);
                                n = null === m || void 0 === m ? void 0 : m.items, s = (null === (c = n) || void 0 === c ? void 0 : c.length) > 0, i = l, a = d, o = u, r = p
                            }
                            if (t) {
                                var l;
                                const {
                                    title: e,
                                    url: a,
                                    items: c
                                } = t;
                                n = c, s = (null === (l = n) || void 0 === l ? void 0 : l.length) > 0, i = s, o = e, r = a
                            }
                            return {
                                menuItems: n,
                                displayedTitle: o,
                                displayedTitleLink: r,
                                customNavigationBrandingImg: a,
                                isPinningEnabled: s,
                                displayCustomNavigationOnArticles: i
                            }
                        },
                        Xe = (e, t) => e > 1 ? t + "s" : t,
                        Ze = () => {
                            let e = "orange";
                            return Object(f.b)() ? e = "blue" : Object(f.c)() ? e = "ajb-orange" : Object(f.g)() ? e = "yellow" : Object(f.d)() ? e = "turquoise" : Object(f.f)() && (e = "purple"), e
                        },
                        Qe = (e, t) => !!Array.isArray(e) && !(0 !== (null === e || void 0 === e ? void 0 : e.length) && !(null === e || void 0 === e ? void 0 : e.some(e => _e(e.url) === _e(t.url))) && "/" !== t.url && !t.params.postName),
                        et = e => !!((null === e || void 0 === e ? void 0 : e.posts) && Array.isArray(e.posts) && e.posts.length > 0 && e.title && e.termTitle && e.termLink),
                        tt = e => {
                            if (!e) return !1;
                            return ["aljazeera.com", "aljazeera.net"].some(t => e.toLowerCase().includes(t))
                        },
                        nt = e => {
                            if (!e) return !1;
                            if (-1 !== e.toLowerCase().indexOf("utm")) return e;
                            const {
                                domain: t
                            } = u.a.get(), n = o.canUseDOM ? window.location.host : t, r = -1 === e.indexOf("?") ? "?" : "&";
                            return `${e}${r}utm_source=${n}&utm_medium=website&utm_campaign=ucms`
                        },
                        ot = e => {
                            if ("string" !== typeof e) return !1;
                            try {
                                return decodeURI(decodeURI(e)), !0
                            } catch {
                                return !1
                            }
                        },
                        rt = e => {
                            const t = document.getElementsByClassName("gallery-preview-container-" + e);
                            t.length && c.a.unmountComponentAtNode(t[0])
                        },
                        it = e => {
                            let t = "";
                            return Object.keys(e).forEach(n => t += "" === t ? n + "~" + e[n] : "\xa6" + n + "~" + e[n]), t
                        },
                        at = e => {
                            const {
                                categories: t,
                                tags: n
                            } = e;
                            return t.concat(n).filter(e => {
                                var t;
                                return g.OPTA_ARTICLE_HEADER_FIXTURE.includes(null === (t = We(null === e || void 0 === e ? void 0 : e.link)) || void 0 === t ? void 0 : t.toLowerCase())
                            }).length > 0
                        },
                        st = t => {
                            var n;
                            return null === (n = e) || void 0 === n ? void 0 : n[t]
                        },
                        ct = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 80,
                                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (t <= 0) return e;
                            const o = e.length > t;
                            if (!o) return e;
                            t = n ? t + 1 : t;
                            let r = e.slice(0, t);
                            if (n) {
                                const e = r.lastIndexOf(" ");
                                r = r.slice(0, Math.min(t, e))
                            }
                            return r + " ..."
                        },
                        lt = (e, t, n) => {
                            const o = n ? n.map(e => e.id) : null;
                            return o ? e.filter(e => {
                                const n = "feed_post" === e.key ? t[e.index] : null;
                                return !n || !o.includes(n.id)
                            }) : e
                        },
                        dt = (e, t, n) => Math.abs(e - t) <= n,
                        ut = () => Object(f.b)() || Object(f.e)(),
                        pt = e => null === e || void 0 === e ? void 0 : e.isSportsVersion,
                        mt = e => Object(f.e)() && (null === e || void 0 === e ? void 0 : e.sportType) === g.OPTA_WIDGET_SPORT_TYPES.cricket,
                        gt = e => Object(f.e)() && (null === e || void 0 === e ? void 0 : e.isOlympicsSportsVersion),
                        ft = e => pt(e) || mt(e) || gt(e),
                        ht = e => !e || /^[\s]+$/.test(e),
                        vt = e => {
                            if (!e) return null;
                            try {
                                return new URL(e).hostname
                            } catch (t) {
                                return null
                            }
                        },
                        bt = () => y() ? "https://www.aljazeera.net/\u0627\u062a\u0641\u0627\u0642\u064a\u0629-\u0627\u0644\u0645\u0648\u0642\u0639" : Object(f.c)() ? "https://balkans.aljazeera.net/odredbe-i-uvjeti" : "https://www.aljazeera.com/terms-and-conditions/",
                        yt = () => y() ? "https://privacy.aljazeera.net/ar/" : Object(f.c)() ? "https://privacy.aljazeera.net/bs/" : "https://privacy.aljazeera.net",
                        wt = (e, t) => {
                            let n;
                            return function() {
                                for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                                clearTimeout(n), n = setTimeout(() => {
                                    e.apply(this, r)
                                }, t)
                            }
                        },
                        At = e => "",
                        _t = e => {
                            const t = "<statsperform[\\s\\S]+?";
                            let n = !1;
                            if (Array.isArray(e)) e.length > 0 && (n = e.some(e => (null === e || void 0 === e ? void 0 : e.text) && e.text.match(new RegExp(t, "gi"))));
                            else {
                                n = null !== new RegExp(t, "gi").exec(e)
                            }
                            return n
                        };

                    function Et() {
                        const e = window.location.hostname;
                        return "localhost" === e || "[::1]" === e || /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/.test(e)
                    }

                    function Ot() {
                        return window.location.search.includes("_preview=")
                    }
                }.call(this, n("Uwcf"))
        },
        CPON: function(e, t, n) {
            "use strict";
            var o = n("dQgG"),
                r = n("VBdi"),
                i = n.n(r),
                a = n("6zV4"),
                s = n("0NGx"),
                c = n("SwuH"),
                l = n("TFZd"),
                d = n("BEYP"),
                u = n("f9Y0"),
                p = n("N4w9"),
                m = n("CiaY"),
                g = n("kXcp"),
                f = n("pbOP"),
                h = n("9N7U"),
                v = n("dVLG");
            const b = {
                "amp-accordion": "0.1",
                "amp-sidebar": "0.1",
                "amp-geo": "0.1",
                "amp-consent": "0.1",
                "amp-ad extension .js script": "0.1",
                "amp-sticky-ad": "1.0",
                "amp-fx-flying-carpet": "0.1",
                "amp-analytics": "0.1",
                "amp-social-share": "0.1",
                "amp-fx-collection": "0.1",
                "amp-iframe": "0.1",
                "amp-bind": "0.1",
                "amp-selector": "0.1",
                "amp-twitter": "0.1",
                "amp-instagram": "0.1"
            };
            t.a = e => {
                Object(p.d)().isAMP = !0;
                const t = new a.a,
                    {
                        AmpHeader: n,
                        AmpFooter: r,
                        darkHeaderMode: y,
                        darkMode: w,
                        darkFooterMode: A,
                        SiteLogo: _,
                        hideAppDownloadBanner: E,
                        themeRounded: O
                    } = e;
                for (const o in b) t.addExtension({
                    extension: o,
                    version: b[o]
                });
                const j = `/favicon_${Object(f.a)()}.ico`,
                    T = Object(m.a)() && Object(g.b)("advertisements/status"),
                    S = e => Object(v.c)(u.a, {
                        darkMode: w,
                        themeRounded: O
                    }, Object(v.c)(d.a, null, Object(v.c)(n, {
                        darkHeaderMode: y,
                        minimizedHeaderMode: !0,
                        SiteLogo: _,
                        hideAppDownloadBanner: E
                    })), !E && Object(v.c)("div", {
                        className: "amp-app-download-banner-buffer",
                        "data-amp-bind-hidden": "showDownloadAppBanner"
                    }), T && Object(v.c)(s.a, null), e({
                        ampScripts: t
                    }), Object(v.c)(d.a, null, Object(v.c)(r, {
                        darkMode: A
                    })), Object(v.c)(c.a, null), Object(f.e)() && Object(v.c)(l.a, {
                        type: "trueanthem"
                    }));
                return o.canUseDOM ? (document.documentElement.classList.add("amp"), S(e.children)) : Object(v.c)(i.a.Fragment, null, Object(v.c)("head", null, Object(v.c)("meta", {
                    id: "helmet"
                }), Object(v.c)("style", {
                    src: "replace"
                }), Object(v.c)("link", {
                    rel: "shortcut icon",
                    href: j
                })), Object(v.c)("body", {
                    dir: Object(h.getSiteDirection)()
                }, S(e.children)))
            }
        },
        CiaY: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            })), n.d(t, "b", (function() {
                return l
            }));
            var o = n("Watf"),
                r = n.n(o),
                i = n("dQgG"),
                a = (n("VBdi"), n("BqLB"), n("HXpp"), n("axnn"), n("MwNz"));
            n("ekvm"), n("xAi6"), n("9N7U"), n("dVLG");
            const s = () => a.a.get("useFreestarAds"),
                c = new Map,
                l = e => {
                    if (i.canUseDOM) {
                        null === c || void 0 === c || c.clear(), null === r.a || void 0 === r.a || r.a.clearPageTargeting();
                        let t = c.set.bind(c);
                        (null === r.a || void 0 === r.a ? void 0 : r.a.setPageTargeting) && (c.forEach((e, t) => r.a.setPageTargeting(t, e)), c.clear(), t = r.a.setPageTargeting), Object.keys(e).forEach(n => {
                            e[n] && t(n, e[n])
                        })
                    }
                    return null
                }
        },
        D9ji: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "f", (function() {
                return i
            })), n.d(t, "c", (function() {
                return a
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "d", (function() {
                return d
            })), n.d(t, "e", (function() {
                return u
            }));
            var o = n("dQgG");
            const r = (e, t, n) => {
                    if (!o.canUseDOM) return;
                    let r = "";
                    if (n) {
                        const e = new Date;
                        e.setTime(e.getTime() + 24 * n * 60 * 60 * 1e3), r = "; expires=" + e.toGMTString()
                    }
                    document.cookie = e + "=" + t + r + "; path=/"
                },
                i = e => {
                    if (!o.canUseDOM) return null;
                    const t = e + "=",
                        n = document.cookie.split(";");
                    for (let o = 0; o < n.length; o++) {
                        let e = n[o];
                        for (;
                            " " === e.charAt(0);) e = e.substring(1, e.length);
                        if (0 === e.indexOf(t)) return e.substring(t.length, e.length)
                    }
                    return null
                },
                a = e => {
                    if (!o.canUseDOM) return null;
                    const t = {},
                        n = {};
                    if (document.cookie.split(";").forEach(e => {
                            const [n, o] = e.trim().split("=");
                            t[n] = o
                        }), t) {
                        for (const [o, r] of Object.entries(t)) o.startsWith(e) && (n[o] = r);
                        return n
                    }
                    return n
                },
                s = e => {
                    o.canUseDOM && (document.cookie = e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;")
                },
                c = e => {
                    if (!o.canUseDOM) return;
                    const t = a(e);
                    for (const [n] of Object.entries(t)) s(n)
                },
                l = e => {
                    var t, n;
                    if (!o.canUseDOM) return !1;
                    return new RegExp(e).test(null !== (t = null === (n = window) || void 0 === n ? void 0 : n.OnetrustActiveGroups) && void 0 !== t ? t : "")
                },
                d = () => l("C0003"),
                u = () => l("C0005")
        },
        E9cW: function(e, t, n) {
            "use strict";
            t.a = n.p + "static/media/aj-logo-white.24cf5afb.svg"
        },
        Ey7M: function(e, t, n) {
            "use strict";
            var o = n("kZWY"),
                r = n("B1Rb"),
                i = n.n(r),
                a = n("v8V0"),
                s = n.n(a),
                c = n("VBdi"),
                l = n.n(c),
                d = n("BqLB"),
                u = n("9mJr"),
                p = n("C9Dh"),
                m = n("XhWE"),
                g = n("MwNz"),
                f = n("N4w9"),
                h = n("hxtD"),
                v = n.n(h),
                b = n("Um3c"),
                y = n("7+tw"),
                w = n("pbOP"),
                A = n("q104"),
                _ = n("9N7U"),
                E = n("dVLG");
            const O = "relevance";
            t.a = e => {
                let t = !1,
                    n = 0,
                    r = null,
                    a = !1;
                const [d, h] = l.a.useState(0), [P, C] = l.a.useState(!1), [I, k] = l.a.useState(!1), [L, R] = l.a.useState([]), [N, D] = l.a.useState(!0), [M, x] = l.a.useState(1), [U, z] = l.a.useState(!0), [B, F] = l.a.useState(!0), V = Object(b.a)(), G = Object(c.useContext)(A.a), q = Object(c.useContext)(f.a), W = j(e), [Y] = Object(y.a)(), H = V && Y, K = Object(_.getCanonicalUrl)(e.staticContext, "/search"), {
                    match: J
                } = e, $ = () => {
                    var t, n;
                    const o = g.a.get("i18n");
                    return Object(E.c)(u.a, null, Object(E.c)("link", {
                        rel: "canonical",
                        href: K
                    }), Object(E.c)("title", null, Object(_.getPageTitle)(o.t("Search"))), Object(E.c)("meta", {
                        name: "pageType",
                        content: "Search Page"
                    }), (null === (t = e.match) || void 0 === t ? void 0 : t.params.query) && Object(E.c)("meta", {
                        name: "pageLink",
                        content: "/search/" + e.match.params.query
                    }), (null === (n = e.match) || void 0 === n ? void 0 : n.params.query) && Object(E.c)("meta", {
                        name: "searchTerms",
                        content: e.match.params.query
                    }))
                };
                T(() => {
                    Q() !== Q(W) && (te({
                        sort: O
                    }), F(!0)), (null === W || void 0 === W ? void 0 : W.match.params.query) && e.match.params.query && e.match.params.query !== (null === W || void 0 === W ? void 0 : W.match.params.query) && S([R, D, x, F, C], [
                        [], !0, 1, !0, !0
                    ])
                }, [e]), Object(c.useEffect)(() => {
                    const {
                        history: t
                    } = e, {
                        action: o
                    } = t;
                    let i, s = [],
                        c = !0,
                        l = M;
                    if ("PUSH" === o) G.setPageState("search", void 0);
                    else {
                        const e = G.getPageState("search");
                        e && (s = e.articles, c = e.hasMorePosts, i = e.scrollPosition, l = e.page, S([R, D, x], [s, c, l]), a = !0)
                    }
                    return n = i, r = X.bind(void 0), window.addEventListener("scroll", r), () => {
                        window.removeEventListener("scroll", r)
                    }
                }, []);
                const X = i()(() => {
                        const e = G.getPageState("search");
                        let t = [],
                            o = !0,
                            r = M,
                            i = window.scrollY;
                        e && (t = e.articles, o = e.hasMorePosts, r = e.page);
                        const s = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
                        a && n && n > i && s > n && (i = n, window.scrollTo(0, n), a = !1), G.setPageState("search", {
                            articles: t,
                            hasMorePosts: o,
                            page: r,
                            scrollPosition: i
                        })
                    }, 150),
                    Z = () => {
                        let e;
                        const {
                            Search: t
                        } = q.components;
                        return (null === t || void 0 === t ? void 0 : t.facets) && (e = t.facets[0]), e
                    },
                    Q = function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
                        return ee(t, "facet") || Z()
                    },
                    ee = (e, t) => {
                        const {
                            search: n
                        } = e.location;
                        return s.a.parse(n)[t]
                    },
                    te = t => {
                        const {
                            pathname: n,
                            search: o
                        } = e.location, r = s.a.parse(o);
                        Object.assign(r, t), e.history.push(`${n}?${s.a.stringify(r)}`)
                    },
                    ne = e => e.filter(e => e).map(e => (e => {
                        var t, n, o, r, i, a;
                        const s = Object.assign({}, e);
                        s.excerpt = e.snippet, s.id = e.cacheId, s.postType = e.kind, /(http(s?)):\/\//gi.test(e.title) && (s.link = e.title, s.title = e.snippet.slice(0, 30));
                        const {
                            pagemap: c
                        } = e;
                        if (!c) return s;
                        const {
                            cse_thumbnail: l,
                            cse_image: d,
                            metatags: u
                        } = c;
                        let p;
                        l && (p = l[0]), !p && d && d.width && (p = d[0]);
                        const m = null !== (t = null === (n = e.post) || void 0 === n || null === (o = n.featuredImage) || void 0 === o ? void 0 : o.alt) && void 0 !== t ? t : "";
                        if (null === (r = p) || void 0 === r ? void 0 : r.src) s.featuredImage = {
                            sourceUrl: p.src,
                            alt: m,
                            sizes: [{
                                crop: "arc-image-3-2-270",
                                height: 180,
                                width: 270,
                                url: p.src
                            }]
                        };
                        else if (null === (i = e.post) || void 0 === i || null === (a = i.featuredImage) || void 0 === a ? void 0 : a.sourceUrl) {
                            const {
                                featuredImage: t
                            } = e.post;
                            s.featuredImage = {
                                sourceUrl: t.sourceUrl,
                                alt: m,
                                height: 180,
                                width: 270
                            }
                        } else s.featuredImage = {
                            sourceUrl: `/images/placeholder_${Object(w.a)()}.jpg`,
                            alt: m
                        };
                        if (u)
                            for (const g of u) g.publishdt && (s.date = g.publishdt, s.updatedDate = g.lastdt);
                        return s
                    })(e)),
                    oe = 10 * (M - 1) + 1,
                    re = (() => {
                        let e = J.params.query;
                        const t = Q();
                        return t !== Z() && (e = `${e} more:${t}`), e
                    })(),
                    ie = ee(e, "sort") || O;
                return !H && B ? Object(E.c)(c.Fragment, null, Object(E.c)(p.a, null), $()) : Object(E.c)(o.a, {
                    query: v.a,
                    variables: {
                        query: re,
                        start: oe,
                        sort: ie
                    },
                    ssr: !1,
                    skip: !H,
                    fetchPolicy: Object(_.getFetchPolicy)(),
                    nextFetchPolicy: Object(_.getNextFetchPolicy)(),
                    errorPolicy: Object(_.getErrorPolicy)(),
                    notifyOnNetworkStatusChange: !0,
                    context: {
                        recaptchaProtectedOp: "SearchQuery"
                    }
                }, o => {
                    var r, i;
                    let {
                        loading: a,
                        error: l,
                        data: u,
                        fetchMore: g,
                        previousData: f
                    } = o;
                    if (l) return $();
                    if (a && B) return Object(E.c)(c.Fragment, null, Object(E.c)(p.a, null), $());
                    if (a && !(null === (r = u) || void 0 === r ? void 0 : r.searchPosts) && M > 1 && (null === f || void 0 === f ? void 0 : f.searchPosts) && (u = f), !(null === (i = u) || void 0 === i ? void 0 : i.searchPosts)) return $();
                    a && (t = !0), (e => {
                        t && !1 === e && n && (window.scrollY - n > 50 && window.scrollTo(0, n), n = 0)
                    })(a), t = !1;
                    const v = Object.assign({}, u.searchPosts),
                        {
                            items: b
                        } = v;
                    b && (v.items = ne(b));
                    const y = 1 === M ? L.concat(v.items || []) : L,
                        w = G.getPageState("search");
                    return Object(E.c)(c.Fragment, null, $(), Object(E.c)(m.a, {
                        activeFacet: Q(),
                        activateFacet: e => te({
                            facet: e,
                            page: 1,
                            sort: O
                        }),
                        getPageRoute: t => {
                            const {
                                pathname: n,
                                search: o
                            } = e.location, r = s.a.parse(o);
                            return r.page = t, `${n}?${s.a.stringify(r)}`
                        },
                        match: J,
                        page: M,
                        searchInformation: v.searchInformation,
                        articles: y,
                        sort: ie,
                        focusableItem: d,
                        queryChanged: P && B,
                        onSortChanged: e => {
                            S([R, D, x, F, k], [
                                [], !0, 1, !0, !0
                            ]), te({
                                sort: e
                            })
                        },
                        isSortChanged: I,
                        showMoreButtonClick: U,
                        staticContext: e.staticContext,
                        loading: a,
                        scrollPosition: null === w || void 0 === w ? void 0 : w.scrollPosition,
                        hasMorePosts: N && y.length > 9,
                        onLoadMore: e => {
                            ((e, t, n, o) => {
                                void 0 !== e && 1 === e.detail ? z(!0) : z(!1), F(!1), n({
                                    variables: {
                                        query: re,
                                        start: 10 * M + 1,
                                        sort: ie
                                    },
                                    context: {
                                        recaptchaProtectedOp: "SearchQuery"
                                    },
                                    updateQuery: (e, t) => {
                                        let {
                                            fetchMoreResult: n
                                        } = t;
                                        if (n) {
                                            const e = ne(n.searchPosts.items) || [],
                                                t = M + 1,
                                                r = "0" !== n.searchPosts.searchInformation.nextPage && t < 10;
                                            G.setPageState("search", {
                                                articles: [...o, ...e],
                                                hasMorePosts: r,
                                                page: t,
                                                scrollPosition: window.scrollY
                                            }), S([R, D, x, h], [
                                                [...o, ...e], r, t, o.length
                                            ])
                                        }
                                    }
                                })
                            })(e, 0, g, y)
                        }
                    }))
                })
            };
            const j = e => {
                    const t = Object(c.useRef)();
                    return Object(c.useEffect)(() => {
                        t.current = e
                    }, [e]), t.current
                },
                T = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    const n = Object(c.useRef)(!0);
                    Object(c.useEffect)(() => {
                        n.current ? n.current = !1 : e()
                    }, t)
                },
                S = (e, t) => {
                    Promise.resolve().then(() => {
                        Object(d.unstable_batchedUpdates)(() => {
                            e.map((n, o) => e[o](t[o]))
                        })
                    })
                }
        },
        KJub: function(e, t, n) {
            "use strict";
            t.a = n.p + "static/media/logo_bloomberg.d70f3950.svg"
        },
        KthT: function(e, t, n) {
            "use strict";
            n.d(t, "i", (function() {
                return d
            })), n.d(t, "h", (function() {
                return m
            })), n.d(t, "e", (function() {
                return g
            })), n.d(t, "n", (function() {
                return f
            })), n.d(t, "l", (function() {
                return b
            })), n.d(t, "b", (function() {
                return y
            })), n.d(t, "g", (function() {
                return w
            })), n.d(t, "a", (function() {
                return _
            })), n.d(t, "k", (function() {
                return O
            })), n.d(t, "j", (function() {
                return T
            })), n.d(t, "f", (function() {
                return S
            })), n.d(t, "d", (function() {
                return P
            })), n.d(t, "c", (function() {
                return C
            })), n.d(t, "m", (function() {
                return I
            }));
            var o = n("dQgG"),
                r = n("3mCM"),
                i = n("Ot6i"),
                a = n("j6Iu"),
                s = n("xAi6"),
                c = n("h9Xs"),
                l = n("9N7U");
            const d = e => {
                    let {
                        element: t,
                        mediaId: n = null
                    } = e;
                    if ("function" !== typeof(null === t || void 0 === t ? void 0 : t.getElementsByClassName)) return null;
                    const o = t.getElementsByClassName("pause-controller");
                    for (const r of o) {
                        if ("undefined" !== typeof bc) {
                            const e = bc.videojs.getPlayer(r);
                            if (e && e.id() !== n) {
                                e.pause();
                                continue
                            }
                        }
                        if (!r.src) continue;
                        const e = h(r.src);
                        ("YT" === e ? w(r.src) : A(r.src)) !== n && (f(r, "pause"), e && v(r, e))
                    }
                    return u(n, t), p(document), !0
                },
                u = (e, t) => {
                    const n = document.body.querySelector("audio#audio-player");
                    e || null === n || void 0 === n || n.pause();
                    t.querySelector(".audio-section-container-player.audio-hub-clip-id-" + e) || null === n || void 0 === n || n.pause()
                },
                p = e => {
                    if (!e || "function" !== typeof e.getElementsByClassName) return null;
                    const t = e.querySelectorAll("iframe.pause-controller.playing:not(.in-content)");
                    if (t.length) {
                        f(t[0], "pause");
                        const e = h(t[0].src);
                        return void v(t[0], e)
                    }
                    const n = e.querySelectorAll(".article__featured-video video-js.playing");
                    if (n.length && "undefined" !== typeof bc) {
                        bc.videojs.getPlayer(n[0]).pause()
                    }
                },
                m = e => {
                    if (!e || "function" !== typeof e.getElementsByClassName) return null;
                    const t = e.querySelectorAll("iframe.pause-controller.playing.in-content");
                    for (const n of t) {
                        if (!n.src) continue;
                        f(n, "pause");
                        const e = h(n.src);
                        e && v(n, e)
                    }
                },
                g = e => {
                    var t, n, o, r, i, a;
                    return (null === e || void 0 === e || null === (t = e.g) || void 0 === t || null === (n = t.classList) || void 0 === n ? void 0 : n.length) ? e.g : (null === e || void 0 === e || null === (o = e.u) || void 0 === o || null === (r = o.classList) || void 0 === r ? void 0 : r.length) ? e.u : !!(null === e || void 0 === e || null === (i = e.h) || void 0 === i || null === (a = i.classList) || void 0 === a ? void 0 : a.length) && e.h
                },
                f = (e, t) => {
                    e && ("play" === t ? e.classList.add("playing") : "pause" !== t && "end" !== t || e.classList.remove("playing"))
                },
                h = e => e ? -1 !== e.indexOf("youtube.com") ? "YT" : -1 !== e.indexOf("vimeo.com") ? "VI" : null : null,
                v = (e, t) => {
                    if (!(null === e || void 0 === e ? void 0 : e.src) || !t) return;
                    var n;
                    if ("YT" === t ? w(e.src) : A(e.src))
                        if ("YT" === t) null === (n = e.contentWindow) || void 0 === n || n.postMessage('{"event":"command","func":"pauseVideo","args":""}', s.YOUTUBE_ORIGIN);
                        else if ("VI" === t) {
                        var o;
                        null === (o = e.contentWindow) || void 0 === o || o.postMessage('{"method":"pause"}', "https://player.vimeo.com")
                    }
                },
                b = (e, t, n) => "undefined" === typeof e || "undefined" === typeof t || "undefined" === typeof n ? null : e ? t : n,
                y = e => {
                    if (!o.canUseDOM) return;
                    const t = null !== e && void 0 !== e ? e : document.getElementsByClassName("wysiwyg")[0];
                    if (!t || "undefined" === typeof bc) return;
                    const n = t.getElementsByClassName("video-js");
                    for (let o = n.length - 1; o >= 0; o--) {
                        const e = n[o],
                            t = bc.videojs.getPlayer(e);
                        t && t.dispose()
                    }
                },
                w = e => {
                    if ("string" !== typeof e || !e.length) return null;
                    const t = e.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/|\/shorts\/)/);
                    return void 0 !== t[2] ? t[2].split(/[^0-9a-z_-]/i)[0] : t[0]
                },
                A = e => {
                    const t = /vimeo.*\/(\d+)/i.exec(e);
                    return t ? t[1] : e
                },
                _ = (() => {
                    const e = [];
                    let t = 0;
                    return function(n, o, r) {
                        window.addEventListener("message", t => {
                            if (t.origin === o && void 0 !== t.data && t.source === n.contentWindow) try {
                                const n = JSON.parse(t.data);
                                if ("onStateChange" !== n.event) return;
                                if (1 !== n.info) return;
                                (0, e[n.id])()
                            } catch (r) {}
                        }), t++, e[t] = r;
                        const i = t;
                        n.addEventListener("load", (function() {
                            let e = JSON.stringify({
                                event: "listening",
                                id: i
                            });
                            n.contentWindow.postMessage(e, o), e = JSON.stringify({
                                event: "command",
                                func: "addEventListener",
                                args: ["onStateChange"],
                                id: i
                            }), n.contentWindow.postMessage(e, o)
                        }))
                    }
                })(),
                E = (e, t) => {
                    if (null === e || void 0 === e ? void 0 : e.isDisposed_) return 0;
                    let n = 0;
                    return "YT" === t && e && "function" === typeof e.getCurrentTime && (n = e.getCurrentTime()), e && "function" === typeof e.currentTime && (n = e.currentTime()), n
                },
                O = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "YT",
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    const r = "YT" === n ? g(t) : t.el_,
                        i = E(t, n);
                    if (["Stop", "end"].includes(e)) {
                        var a;
                        const e = i - (parseInt(null === r || void 0 === r || null === (a = r.dataset) || void 0 === a ? void 0 : a.startWatching) || i);
                        return Math.floor(e > 0 ? e : i)
                    }
                    return "Autoplay" === e ? j(t, n, i) : r && (null === o ? r.dataset.startWatching = Math.floor(i) : r.dataset.startWatching > i && (r.dataset.startWatching = o ? Math.floor(i) : 0)), null
                },
                j = (e, t, n) => {
                    if ("BC" === t) e.el_.dataset.startWatching = Math.floor(n);
                    else {
                        const o = g(e),
                            r = 9;
                        let i = 0;
                        const a = setInterval(() => {
                            i++, (null === e || void 0 === e ? void 0 : e.isDisposed_) ? clearInterval(a): ((n = E(e, t)) > 1e3 && (clearInterval(a), o.dataset.startWatching = Math.floor(n)), i > r && clearInterval(a))
                        }, 100)
                    }
                },
                T = (e, t) => {
                    let n = 0;
                    return "Play" === t && n++, !0 === e && n++, n
                },
                S = e => "undefined" !== typeof e && (null === e || void 0 === e ? void 0 : e.length) ? `${s.YOUTUBE_URL_PREFIX}${e}` : null,
                P = e => "object" === typeof e && e.length ? e[0].src.split("?")[0] : null,
                C = function(e, t, n, d, u, p) {
                    var m;
                    let g = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "UserStop";
                    if (!Object(r.b)()) return;
                    const {
                        postType: f,
                        primaryTopic: h,
                        tagsList: v,
                        programsList: b
                    } = Object(c.a)(t), y = null === n || void 0 === n ? void 0 : n.getVideoData(), A = null === n || void 0 === n ? void 0 : n.getDuration(), _ = p || y.isLive;
                    let E = null === n || void 0 === n ? void 0 : n.getCurrentTime();
                    if (o.canUseDOM && window.getMetaValue) {
                        const n = window.getMetaValue("pageTitle", "name", null) || window.getMetaValue("title", "name", null),
                            o = window.getMetaValue("pageType", "name", null),
                            r = window.getMetaValue("siteModule", "name", null),
                            a = window.getMetaValue("siteSection", "name", null),
                            s = window.getMetaValue("recirculationSource", "name", null);
                        Object(i.l)(e, "sourceOpen", document.referrer), Object(i.l)(e, "referralSource", document.referrer), Object(i.l)(e, "videoLink", Object(l.safeDecodeString)(Object(l.untrailingSlashIt)(null === t || void 0 === t ? void 0 : t.link))), Object(i.l)(e, "link", Object(l.safeDecodeString)(Object(l.untrailingSlashIt)(null === t || void 0 === t ? void 0 : t.link))), Object(i.l)(e, "videoTitle", null === y || void 0 === y ? void 0 : y.title), Object(i.l)(e, "recirculationSource", s), Object(i.l)(e, "siteModule", r), Object(i.l)(e, "module", r), Object(i.l)(e, "siteSection", a), Object(i.l)(e, "section", a), Object(i.l)(e, "id", window.getMetaValue("postID", "name", null)), Object(i.l)(e, "date", window.getMetaValue("publishedDate", "name", null)), Object(i.l)(e, "title", n), Object(i.l)(e, "type", o), Object(i.l)(e, "where", window.getMetaValue("where", "name", null))
                    }
                    Object(i.l)(e, "autoplay", u), Object(i.l)(e, "playMode", u ? s.AMPLITUDE_EVENT_PROPERTY_VALUES.play_mode.autoplay : s.AMPLITUDE_EVENT_PROPERTY_VALUES.play_mode.control_play), Object(i.l)(e, "streaming", _), Object(i.l)(e, "videoSection", f), Object(i.l)(e, "videoTopic", h), Object(i.l)(e, "topics", h), Object(i.l)(e, "mediaTopics", h), Object(i.l)(e, "videoTag", v), Object(i.l)(e, "tag", v), Object(i.l)(e, "mediaTags", v), Object(i.l)(e, "program", b), Object(i.l)(e, "duration", Math.round(A)), Object(i.l)(e, "videoId", w(t.featuredYoutube)), Object(i.l)(e, "playlistIndex", null === n || void 0 === n || null === (m = n.playerInfo) || void 0 === m ? void 0 : m.playlistIndex), "Play" === d && E === A && (E = null), "Stop" !== d && "Pause" !== d || (Object(i.l)(e, "currentPosition", Math.round(E)), Object(i.l)(e, "percentageWatched", Object(a.a)(E, A)), Object(i.l)(e, "stopCause", g)), e.videoType = y.isLive ? s.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.streaming : s.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.vod, e.mediaType = y.isLive ? s.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.streaming : s.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.vod, e.subscriptionStatus = "Not Subscribed", e.videoSource = s.AMPLITUDE_EVENT_PROPERTY_VALUES.video_source.youtube, e.mediaSource = s.AMPLITUDE_EVENT_PROPERTY_VALUES.video_source.youtube, e.fileUrl = S(w(t.featuredYoutube))
                },
                I = function(e, t, n, o) {
                    var a;
                    let c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    const l = g(e);
                    if (!Object(r.b)() || !(null === l || void 0 === l || null === (a = l.classList) || void 0 === a ? void 0 : a.contains("playing"))) return;
                    const d = {};
                    C(d, t, e, "Stop", n, !1, s.AMPLITUDE_EVENT_PROPERTY_VALUES.stop_cause.user_navigation), Object(i.l)(d, "videoPlacement", o), Object(i.l)(d, "watchtime", c), Object(i.e)("VideoStopped", d)
                }
        },
        Kw2d: function(e, t, n) {
            "use strict";
            n("TcCw"), n("VBdi"), n("9mJr"), n("4c8N"), n("96Qw"), n("w8RO"), n("MwNz"), n("xAi6");
            var o = n("ToZr"),
                r = n("KGRH"),
                i = n("f5VC"),
                a = n("zx38"),
                s = n("+R28");
            new o.a({
                ssrMode: !0,
                link: r.a.from([Object(a.a)(e => {
                    let {
                        response: t,
                        graphQLErrors: n
                    } = e;
                    n && Object(s.a)(n) && (t.errors = null)
                })].filter(Boolean)),
                cache: new i.a
            });
            n("dVLG");
            n.d(t, "a", (function() {
                return c
            }));
            const c = () => !!Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                APPLICATION_ENV: "production",
                BRIGHTCOVE_ENV: "production",
                ONESIGNAL_CONFIG: {
                    appId: "fb3606cf-1b0a-44e7-b314-9c4173ac1b5e",
                    safariWebId: "web.onesignal.auto.477dedc8-8bcf-40fd-b64c-238033111672"
                },
                REACT_APP_APPCHECK_DEBUG_TOKEN_AJA: "",
                REACT_APP_APPCHECK_DEBUG_TOKEN_AJB: "",
                REACT_APP_APPCHECK_DEBUG_TOKEN_AJD: "",
                REACT_APP_APPCHECK_DEBUG_TOKEN_AJE: "",
                REACT_APP_APPCHECK_DEBUG_TOKEN_AJM: "",
                REACT_APP_ENVIRONMENT: "production",
                REACT_APP_SITE: "aje",
                REACT_APP_APPCHECK_DEBUG_TOKEN_CHINESE: "",
                REACT_APP_OPTA_SCRIPT_VERSION: "v14",
                REACT_APP_OPTA_STYLES_VERSION: "v30"
            }).JEST_WORKER_ID
        },
        L4dX: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            }));
            const o = "mobile-menu-close",
                r = "site-logo-click",
                i = e => {
                    const t = e;
                    if ("function" !== typeof window.CustomEvent) {
                        const e = document.createEvent("CustomEvent");
                        e.initCustomEvent(t, !1, !1, null), window.dispatchEvent(e)
                    } else {
                        const e = new CustomEvent(t);
                        window.dispatchEvent(e)
                    }
                }
        },
        M9iv: function(e, t, n) {
            "use strict";
            t.a = n.p + "static/media/banner-arab-spring-10-years-on.6b5b75fe.jpg"
        },
        NDIX: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "c", (function() {
                return a
            }));
            const o = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),
                r = "service-worker/status";

            function i(e) {
                if ("serviceWorker" in navigator) {
                    if (new URL("", window.location.href).origin !== window.location.origin) return;
                    window.addEventListener("load", () => {
                        o || function(e, t) {
                            navigator.serviceWorker.register(e).then(e => {
                                e.onupdatefound = () => {
                                    const n = e.installing;
                                    null != n && (n.onstatechange = () => {
                                        "installed" === n.state && (navigator.serviceWorker.controller ? t && t.onUpdate && t.onUpdate(e) : t && t.onSuccess && t.onSuccess(e))
                                    })
                                }
                            }).catch(e => {
                                console.error("Error during service worker registration:", e)
                            })
                        }("/service-worker.js", e)
                    })
                }
            }

            function a() {
                "serviceWorker" in navigator && navigator.serviceWorker.ready.then(e => {
                    e.unregister()
                }).catch(e => {
                    console.error(e.message)
                })
            }
        },
        NdV6: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return p
            })), n.d(t, "c", (function() {
                return m
            })), n.d(t, "a", (function() {
                return g
            }));
            var o = n("Miz2"),
                r = n("kZWY"),
                i = (n("VBdi"), n("EatG")),
                a = n("C9Dh"),
                s = n("N4w9"),
                c = n("QXYw"),
                l = n("P1ag"),
                d = n("9N7U"),
                u = n("dVLG");
            const p = e => e,
                m = (e, t) => e || Object(d.isDataEmptyOrNull)(t),
                g = e => {
                    const t = Object(c.a)(),
                        {
                            isAMP: n,
                            routerContext: g
                        } = Object(s.d)(),
                        f = e.a11yLoadingText ? {
                            isA11yLoadingAnnouncement: !0,
                            a11yLoadingText: e.a11yLoadingText
                        } : null,
                        h = e.cardLoader ? Object(u.c)(l.a, f) : Object(u.c)(a.a, null);
                    return Object(u.c)(r.a, Object(o.a)({
                        errorPolicy: Object(d.getErrorPolicy)(),
                        fetchPolicy: Object(d.getFetchPolicy)(e.isPreview),
                        nextFetchPolicy: Object(d.getNextFetchPolicy)(e.isPreview)
                    }, e.query), o => {
                        let {
                            loading: r,
                            error: a,
                            data: s
                        } = o;
                        if (p(r)) return h;
                        if (!(null === s || void 0 === s ? void 0 : s.category) && (null === s || void 0 === s ? void 0 : s.redirect) && t) {
                            const {
                                redirect: e
                            } = s;
                            if (Object(d.isAbsoluteURL)(e)) return window.location.replace(e)
                        }
                        return !m(a, s) || e.skipGraphQl404 && (e => "GraphQL error: no_posts_found" === (null === e || void 0 === e ? void 0 : e.message))(a) ? e.children(s) : (n && (g.status = 404), e.errorElement ? Object(u.c)(e.errorElement, null) : Object(u.c)(i.a, null))
                    })
                }
        },
        SVMe: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return s
            })), n.d(t, "g", (function() {
                return c
            })), n.d(t, "m", (function() {
                return l
            })), n.d(t, "l", (function() {
                return d
            })), n.d(t, "j", (function() {
                return u
            })), n.d(t, "i", (function() {
                return p
            })), n.d(t, "d", (function() {
                return m
            })), n.d(t, "a", (function() {
                return g
            })), n.d(t, "h", (function() {
                return f
            })), n.d(t, "c", (function() {
                return h
            })), n.d(t, "f", (function() {
                return v
            })), n.d(t, "e", (function() {
                return b
            })), n.d(t, "k", (function() {
                return y
            }));
            const o = "production",
                r = {
                    staging: {
                        aja: "1:241651069191:web:518498033af3c0be5795a2",
                        ajb: "1:241651069191:web:c77f3323148e1b195795a2",
                        chinese: "",
                        ajd: "1:241651069191:web:28c056bb2386eef85795a2",
                        aje: "1:241651069191:web:46d4250a4560aa185795a2",
                        ajm: "1:241651069191:web:7feb99f2e43068815795a2"
                    },
                    production: {
                        aja: "1:930963568559:web:8aeeedc0c197022d2de15a",
                        ajb: "1:930963568559:web:dec2d29fdcd696212de15a",
                        chinese: "",
                        ajd: "1:930963568559:web:dd19a747048086fe2de15a",
                        aje: "1:930963568559:web:fe1c837849f97e502de15a",
                        ajm: "1:930963568559:web:7001ccf68139050f2de15a"
                    }
                },
                i = {
                    aja: "",
                    ajb: "",
                    chinese: "",
                    ajd: "",
                    aje: "",
                    ajm: ""
                },
                a = {
                    production: {
                        apiKey: "AIzaSyDWz9TZvPscN7qFdG6z1bvLh98eXVBSUPM",
                        authDomain: "al-jazeera-mobile-platform.firebaseapp.com",
                        projectId: "al-jazeera-mobile-platform",
                        appId: r[o].aje
                    },
                    staging: {
                        apiKey: "AIzaSyCWVAptXgCpdsDYmLBpgmiI_0AhKEEz8i4",
                        authDomain: "al-jazeera-mobile-dev.firebaseapp.com",
                        projectId: "al-jazeera-mobile-dev",
                        appId: r[o].aje
                    }
                },
                s = 60,
                c = "6Lct6hYpAAAAAGJDfJ1mFPcRaZmJl220RPH_flEl",
                l = () => a[o],
                d = () => i.aje || null,
                u = "user-accounts/status",
                p = "user-accounts/app-check-status",
                m = "for-you-ucms-homepage/status",
                g = "for-you-ucms-article-page/status",
                f = "Signed In",
                h = !1,
                v = "forYouArticle",
                b = 6,
                y = "/account-social-consent"
        },
        SWuB: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return o
            })), n.d(t, "f", (function() {
                return r
            })), n.d(t, "g", (function() {
                return i
            })), n.d(t, "b", (function() {
                return a
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "e", (function() {
                return c
            })), n.d(t, "a", (function() {
                return l
            }));
            const o = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return r(e, [{
                        name: "categories",
                        property: "name"
                    }, {
                        name: "midan",
                        property: "name"
                    }, {
                        name: "tags",
                        property: "title"
                    }, t && {
                        name: "where",
                        property: "title"
                    }].filter(Boolean))
                },
                r = (e, t) => {
                    if (!e || !Array.isArray(t) || 0 === t.length) return "";
                    const n = t.map(t => t && Array.isArray(e[t.name]) && e[t.name].map(e => e[t.property])).flat().filter(Boolean);
                    return [...new Set(n)].join(", ").toString().trim()
                },
                i = e => r(e, [{
                    name: "categories",
                    property: "name"
                }, {
                    name: "tags",
                    property: "title"
                }, {
                    name: "where",
                    property: "title"
                }, {
                    name: "trending",
                    property: "title"
                }, {
                    name: "who",
                    property: "title"
                }, {
                    name: "midan",
                    property: "name"
                }]),
                a = e => {
                    if (!e) return null;
                    const {
                        categories: t,
                        primaryCategoryTerm: n
                    } = e;
                    return Array.isArray(t) ? n ? t.find(e => e.slug === n) : t[0] : null
                },
                s = (e, t, n) => {
                    if (!e || !t || !Array.isArray(e[t])) return null;
                    if ("categories" === t) return a(e);
                    const o = e[t],
                        r = e[`primary${t.charAt(0).toUpperCase()+t.slice(1)}Term`];
                    return r ? o.find(e => e.slug === r) : n ? o[o.length - 1] : o[0]
                },
                c = function(e, t, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                    if (!e) return "";
                    switch (e) {
                        case "programs":
                            return `/program/${t}/`;
                        case "tags":
                        case "post_tag":
                            return o || `/tag/${t}/`;
                        case "categories":
                            return n || `/${t}/`;
                        default:
                            return `/${e}/${t}/`
                    }
                },
                l = (e, t, n) => !!(e && t && Array.isArray(e[t]) && n) && e[t].some(e => n.includes(e.slug))
        },
        Tdow: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            })), n.d(t, "a", (function() {
                return r
            }));
            const o = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return e => t.reduce((e, t) => t(e), e)
                },
                r = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return e => t.reduceRight((e, t) => t(e), e)
                }
        },
        ZBBs: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            })), n.d(t, "d", (function() {
                return d
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "e", (function() {
                return m
            })), n.d(t, "c", (function() {
                return f
            }));
            var o = n("dQgG"),
                r = n("pXAN"),
                i = n("MwNz"),
                a = n("9N7U"),
                s = n("D9ji");
            const c = "arc-notifications/web-push/frontend/status";
            let l = Promise.resolve();
            async function d() {
                u() && Object(s.d)() ? await async function() {
                    var e;
                    if (null === (e = window.OneSignal) || void 0 === e ? void 0 : e._initCalled) return;
                    await r.a.init(p()), await r.a.setConsentGiven(Object(s.d)())
                }() : await async function() {
                    if (!navigator.serviceWorker) return;
                    const e = await navigator.serviceWorker.getRegistration("/push/");
                    e && await e.unregister()
                }()
            }

            function u() {
                return !(!!!(o.canUseDOM && window.localStorage && window.Notification && window.navigator.serviceWorker) || Object(a.isLocalEnvironment)() || "denied" === window.Notification.permission)
            }

            function p() {
                const {
                    appId: e,
                    safariWebId: t
                } = i.a.get("ONESIGNAL_CONFIG");
                return {
                    appId: e,
                    safariWebId: t,
                    serviceWorkerParam: {
                        scope: "/push/"
                    },
                    path: "/push/",
                    requiresUserPrivacyConsent: !0
                }
            }
            const m = (g = async function(e) {
                var t;
                if (!(null === (t = window.OneSignal) || void 0 === t ? void 0 : t._initCalled)) return;
                const n = e && "granted" === window.Notification.permission;
                await async function(e) {
                    const {
                        localStorage: t
                    } = window;
                    if (!t) return;
                    const n = r.a.User.PushSubscription.id,
                        o = "true" === t.getItem("notification:opted-in") !== e;
                    if (!n || !o) return;
                    const {
                        appId: i
                    } = p(), a = `https://api.onesignal.com/apps/${i}/subscriptions/${n}`, s = {
                        subscription: {
                            notification_types: e ? 1 : -2,
                            enabled: e
                        }
                    };
                    if (!(await fetch(a, {
                            method: "PATCH",
                            body: JSON.stringify(s)
                        })).ok) throw new Error("Failed to save notification subscription on server");
                    t.setItem("notification:opted-in", e)
                }(n), await r.a.setConsentGiven(e)
            }, function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return l = l.then(() => g(...t)).catch(e => {
                    console.error("Notification error:", e)
                }), l
            });
            var g;
            async function f() {
                await r.a.Notifications.requestPermission(), window.localStorage.setItem("notification:opted-in", r.a.Notifications.permission)
            }
        },
        ZDfq: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "titleHtml", (function() {
                return o
            })), n.d(t, "summaryHtml", (function() {
                return r
            })), n.d(t, "getDuplicateImageFilter", (function() {
                return i
            }));
            const o = {
                    allowedTags: []
                },
                r = {
                    allowedTags: ["b", "i", "em", "strong", "a"],
                    allowedAttributes: {
                        a: ["href", "target"]
                    }
                },
                i = e => t => {
                    const {
                        tag: n,
                        attribs: o
                    } = t, {
                        src: r
                    } = o;
                    if ("img" !== n || !r) return !1;
                    const i = r.match(/\d{1,2}_(\d+)_\d{1,2}_\d{1,2}/);
                    if (i) {
                        const t = i[1];
                        return e.toString() === t
                    }
                    return !1
                }
        },
        aPqV: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return i
            })), n.d(t, "a", (function() {
                return l
            })), n.d(t, "i", (function() {
                return u
            })), n.d(t, "h", (function() {
                return p
            })), n.d(t, "c", (function() {
                return m
            })), n.d(t, "f", (function() {
                return g
            })), n.d(t, "g", (function() {
                return f
            })), n.d(t, "e", (function() {
                return h
            })), n.d(t, "d", (function() {
                return v
            }));
            var o = n("MwNz"),
                r = n("xAi6");
            const i = {
                    aja: {
                        production: {
                            vod: "O36LJRDCG",
                            amp: "rFgCF9gZp",
                            live_qid: "7lDmqAMR",
                            live: "eXUpvPA1qj",
                            homepage_feed: "DCFDIWQLk",
                            program: "J84cZMVRPE",
                            general: "nUW9Zv8wm"
                        },
                        development: {
                            vod: "KLJnNWCCI",
                            amp: "RlqEiD3mv",
                            live_qid: "Aq78dKEto",
                            live: "Aq78dKEto",
                            homepage_feed: "KLJnNWCCI",
                            program: "KLJnNWCCI",
                            general: "Pk4xXtGy1U"
                        }
                    },
                    chinese: {
                        production: {
                            vod: "yu8wvfqTxT",
                            amp: "yu8wvfqTxT",
                            live_qid: "yu8wvfqTxT",
                            live: "yu8wvfqTxT",
                            homepage_feed: "yu8wvfqTxT",
                            program: "yu8wvfqTxT",
                            general: "2XYOmLEeRL"
                        },
                        development: {
                            vod: "g3T8eTj0w",
                            amp: "g3T8eTj0w",
                            live_qid: "g3T8eTj0w",
                            live: "g3T8eTj0w",
                            homepage_feed: "g3T8eTj0w",
                            program: "g3T8eTj0w",
                            general: "6Loy5VzDO5"
                        }
                    },
                    aje: {
                        production: {
                            vod: "nahv11Vw34",
                            amp: "A3nzcwywTg",
                            live_qid: "UbqgmlUbk",
                            live: "AvByVmBYDu",
                            homepage_feed: "gr2KYmKpVf",
                            program: "BrG3w7rsI",
                            general: "6tKQRAx7lu"
                        },
                        development: {
                            vod: "CioRkS7x0",
                            amp: "GvEmAnVyzV",
                            live_qid: "aei8jRrQP",
                            live: "aei8jRrQP",
                            homepage_feed: "CioRkS7x0",
                            program: "CioRkS7x0",
                            general: "NZskJYljcu"
                        }
                    },
                    ajm: {
                        production: {
                            vod: "EHJ1xF1tb",
                            amp: "aZkMsFPIm",
                            live_qid: "ALrjWHuHG",
                            live: "SbIxbVQ7a",
                            homepage_feed: "2uNUcVWYi",
                            program: "WwYcEvKnO",
                            general: "1U5Do15lN"
                        },
                        development: {
                            vod: "hB3PbEppo",
                            amp: "XNZPwef5i",
                            live_qid: "X3uVkDCQz",
                            live: "X3uVkDCQz",
                            homepage_feed: "hB3PbEppo",
                            program: "hB3PbEppo",
                            general: "PUiEb2osU"
                        }
                    },
                    ajd: {
                        production: {
                            vod: "tfI9NHyfQC",
                            amp: "EOYHIgTYyk",
                            live_qid: "fRaGc8gJL",
                            live: "2sJRcHJYz",
                            homepage_feed: "yQYeyt3Lr",
                            program: "HDhjmhiOR",
                            general: "4LpILI8wW"
                        },
                        development: {
                            vod: "DWKgVo10BV",
                            amp: "0Koz8DUjV",
                            live_qid: "HzYoMJDif",
                            live: "HzYoMJDif",
                            homepage_feed: "DWKgVo10BV",
                            program: "DWKgVo10BV",
                            general: "VuEcupTJF"
                        }
                    },
                    ajb: {
                        production: {
                            vod: "0lQXxDy5w",
                            amp: "F6POAfrSKz",
                            live_qid: "rfQSDMB0C0",
                            live: "bCuQF5l6Z",
                            homepage_feed: "zuje2iwWw",
                            program: "O9oRABn0P",
                            general: "csvTfAlKW"
                        },
                        development: {
                            vod: "g2R09POvv",
                            amp: "6ZXvjRHOT",
                            live_qid: "y3mh7jYMO",
                            live: "y3mh7jYMO",
                            homepage_feed: "g2R09POvv",
                            program: "g2R09POvv",
                            general: "Ss1BTkWtG"
                        }
                    }
                },
                a = {
                    aja: {
                        account_id: "665001584001"
                    },
                    aje: {
                        account_id: "665003303001"
                    },
                    chinese: {
                        account_id: "6222695409001"
                    },
                    ajm: {
                        account_id: "665001583001"
                    },
                    ajd: {
                        account_id: "665003304001"
                    },
                    ajb: {
                        account_id: "911432371001"
                    }
                },
                s = {
                    aja: {
                        production: {
                            accountId: "665001584001",
                            playerId: "e0CXiCdRG"
                        },
                        development: {
                            accountId: "1886567643001",
                            playerId: "ZoysNi0Fw"
                        }
                    },
                    ajb: {
                        production: {
                            accountId: "911432371001",
                            playerId: "fJVijAiH1b"
                        },
                        development: {
                            accountId: "1886567643001",
                            playerId: "WqL3PKBC5"
                        }
                    },
                    ajd: {
                        production: {
                            accountId: "665003304001",
                            playerId: "dNrRkzb7HB"
                        },
                        development: {
                            accountId: "1886567643001",
                            playerId: "8478CGIEA"
                        }
                    },
                    aje: {
                        production: {
                            accountId: "665003303001",
                            playerId: "VANIsd8MG"
                        },
                        development: {
                            accountId: "665003303001",
                            playerId: "VANIsd8MG"
                        }
                    },
                    ajm: {
                        production: {
                            accountId: "665001583001",
                            playerId: "3Dl0vGvkv"
                        },
                        development: {
                            accountId: "1886567643001",
                            playerId: "1N8Toeon1"
                        }
                    },
                    chinese: {
                        production: {
                            accountId: "6222695409001",
                            playerId: "ZdZmjDbGSF"
                        },
                        development: {
                            accountId: "1886567643001",
                            playerId: "e0CXiCdRG"
                        }
                    }
                },
                c = {
                    665001584001: {
                        production: "2lFUlD9DGb",
                        development: "KLJnNWCCI"
                    },
                    665003303001: {
                        production: "6tKQRAx7lu",
                        development: "NZskJYljcu"
                    },
                    6222695409001: {
                        production: "2XYOmLEeRL",
                        development: "6Loy5VzDO5"
                    },
                    665001583001: {
                        production: "1U5Do15lN",
                        development: "PUiEb2osU"
                    },
                    665003304001: {
                        production: "EOYHIgTYyk",
                        development: "DWKgVo10BV"
                    },
                    911432371001: {
                        production: "csvTfAlKW",
                        development: "Ss1BTkWtG"
                    },
                    1886567643001: {
                        production: "ZoysNi0Fw",
                        development: "ZoysNi0Fw"
                    }
                },
                l = a[r.SITE].account_id,
                d = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.SITE;
                    const s = o.a.get("BRIGHTCOVE_ENV"),
                        l = e || a[n].account_id;
                    return a[n].account_id === l ? i[n][s][t] : c[l] ? c[l][s] : null
                },
                u = () => {
                    const e = o.a.get("BRIGHTCOVE_ENV");
                    return s[r.SITE][e]
                },
                p = e => d(e, "vod", "aje"),
                m = e => d(e, "amp", "aje"),
                g = e => d(e, "homepage_feed", "aje"),
                f = e => d(e, "program", "aje"),
                h = e => d(e, "general", "aje"),
                v = e => e || l
        },
        abvY: function(e, t, n) {
            "use strict";
            var o = n("D9ji");
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return a
            })), n.d(t, "c", (function() {
                return s
            }));
            const r = [],
                i = () => (e => {
                    let t = !1;
                    return {
                        promise: new Promise((n, o) => {
                            e.then(e => t ? o({
                                isCanceled: !0
                            }) : n(e), e => o(t ? {
                                isCanceled: !0
                            } : e))
                        }),
                        cancel() {
                            t = !0
                        }
                    }
                })(new Promise((e, t) => {
                    var n, r;
                    const i = null === (n = window) || void 0 === n || null === (r = n.localStorage) || void 0 === r ? void 0 : r.getItem("AJUserLocation"),
                        a = Object(o.d)();
                    if (i) {
                        var s, c;
                        if (!a) null === (s = window) || void 0 === s || null === (c = s.localStorage) || void 0 === c || c.removeItem("AJUserLocation");
                        e(i)
                    } else(async e => {
                        try {
                            const o = ["//pro.ip-api.com/json/?key=h49qrIxAVSStejH"],
                                r = await fetch(o),
                                i = await r.json();
                            if (i && i.countryCode) {
                                var t, n;
                                if (e) null === (t = window) || void 0 === t || null === (n = t.localStorage) || void 0 === n || n.setItem("AJUserLocation", i.countryCode);
                                return i.countryCode
                            }
                            return null
                        } catch (o) {
                            return null
                        }
                    })(a).then(t => {
                        e(t)
                    })
                })),
                a = e => e && r.indexOf(e.toLowerCase()) > -1,
                s = (e, t) => "takeover-livestream" === e && Array.isArray(t) && t.length > 0
        },
        ccEg: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            const o = e => ({
                id: e.listId,
                title: e.title,
                description: e.description,
                imgSrcUrl: e.newsletterImage.sourceUrl,
                imgAlt: e.newsletterImage.alt
            })
        },
        dtyf: function(e, t, n) {
            "use strict";
            t.a = n.p + "static/media/author-avatar.36a0c8ec.svg"
        },
        ekvm: function(e, t, n) {
            "use strict";
            var o = n("dQgG");
            const r = {
                isMobile: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 992;
                    return !!o.canUseDOM && window.innerWidth < e
                },
                RESPONSIVE_BREAKPOINT: 992,
                MENU_BREAKPOINT: 991.8,
                MOBILE_BREAKPOINT: 769,
                MOBILE_WIDTH: 768,
                isMobileDevice: () => "undefined" !== typeof window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile"),
                isIE: () => {
                    const e = new RegExp(/(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:)(\d+)/);
                    return !!navigator.userAgent.match(e)
                },
                isIOS: function() {
                    return navigator ? /iPad|iPhone|iPod/.test(navigator.userAgent) : null
                },
                isIOSSafari: function() {
                    if (!o.canUseDOM) return null;
                    const e = navigator.userAgent,
                        t = /(iPad|iPhone|iPod)/.test(e);
                    return e.includes("Safari") && !e.includes("CriOS") && !e.includes("FxiOS") && !e.includes("EdgiOS") && t
                },
                isSafari: function() {
                    if (!o.canUseDOM) return null;
                    const e = navigator.userAgent;
                    return e.includes("Safari") && e.includes("Version/")
                }
            };
            t.a = r
        },
        ezFu: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return i
            })), n.d(t, "a", (function() {
                return a
            })), n.d(t, "c", (function() {
                return s
            }));
            var o = n("kXcp"),
                r = n("pbOP");
            const i = e => {
                    var t, n;
                    return Object(r.d)() && Array.isArray(e) && e.length > 0 && "true" === (null === (t = e[0]) || void 0 === t || null === (n = t.values) || void 0 === n ? void 0 : n[0])
                },
                a = e => {
                    var t, n;
                    const r = !(!Object(o.b)("metabox/outside-image") || !(null === e || void 0 === e || null === (t = e.outsideImage) || void 0 === t ? void 0 : t.sourceUrl)) && (null === e || void 0 === e ? void 0 : e.outsideImage),
                        i = !!(null === e || void 0 === e || null === (n = e.featuredImage) || void 0 === n ? void 0 : n.sourceUrl) && (null === e || void 0 === e ? void 0 : e.featuredImage);
                    return r || i || {}
                },
                s = e => {
                    const {
                        featuredYoutube: t,
                        video: n
                    } = null !== e && void 0 !== e ? e : {};
                    return !(!(null === n || void 0 === n ? void 0 : n.id) && !t)
                }
        },
        "fn9/": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return c
            })), n.d(t, "a", (function() {
                return l
            }));
            var o = n("VBdi"),
                r = n("ncCA"),
                i = n("5vTK"),
                a = n("MwNz"),
                s = n("dVLG");
            const c = e => ["opinion", "blog"].includes(e.postType) && e.author && e.author.length,
                l = e => {
                    let {
                        article: t,
                        separator: n,
                        isAmp: c,
                        clickableAuthors: l,
                        showVideoDuration: d = !0
                    } = e;
                    const u = a.a.get("i18n");
                    if (["opinion", "blog"].includes(t.postType) && t.author && t.author.length) {
                        const e = t.author.map(e => e.name).reduce((e, t) => `${e} ${u.t("and")} ${t}`);
                        return Object(s.c)(o.Fragment, null, Object(s.c)("span", {
                            className: "screen-reader-text"
                        }, u.t(t.postType + " by") + " " + e), t.author.map(e => {
                            const t = Object(s.c)("span", {
                                key: e.id,
                                className: "meta-content-author-name",
                                "aria-hidden": "true"
                            }, e.name);
                            return l ? Object(s.c)(r.a, {
                                key: e.id,
                                to: e.link,
                                className: "meta-content-author-clickable"
                            }, t) : t
                        }).reduce((e, t, o) => [e, Object(s.c)("span", {
                            key: o,
                            className: "gc__author_separator",
                            "aria-hidden": "true"
                        }, n), t]))
                    }
                    return d && ["episode", "video"].includes(t.postType) && t.video && t.video.duration ? Object(s.c)(i.a, {
                        duration: t.video.duration
                    }) : null
                }
        },
        gTyc: function(e, t, n) {},
        h9Xs: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var o = n("SWuB"),
                r = n("9N7U"),
                i = n("KthT");
            const a = e => {
                var t, n, a, s, c;
                const {
                    author: l,
                    amp: d,
                    categories: u,
                    date: p,
                    featuredDataWrapperIframe: m,
                    featuredYoutube: g,
                    id: f,
                    link: h,
                    modified_gmt: v,
                    postLabel: b,
                    postType: y,
                    primaryCategoryTerm: w,
                    primaryTagsTermName: A,
                    programs: _,
                    source: E,
                    tags: O,
                    title: j,
                    trending: T,
                    video: S,
                    where: P,
                    who: C,
                    writeInAuthor: I,
                    isQuickRead: k
                } = e, L = null === u || void 0 === u ? void 0 : u.map(e => Object(r.safeDecodeString)(e.name)).join(", "), R = null === u || void 0 === u || null === (t = u.filter(e => e.slug === w)[0]) || void 0 === t ? void 0 : t.name, N = null === P || void 0 === P ? void 0 : P.map(e => Object(r.safeDecodeString)(e.title)).join(", "), D = null === C || void 0 === C ? void 0 : C.map(e => Object(r.safeDecodeString)(e.title)).join(", "), M = null === T || void 0 === T ? void 0 : T.map(e => Object(r.safeDecodeString)(e.title)).join(", "), x = null === O || void 0 === O ? void 0 : O.map(e => Object(r.safeDecodeString)(e.title)).join(", "), U = null === (n = [O, T, C].flat().filter(Boolean)) || void 0 === n ? void 0 : n.map(e => Object(r.safeDecodeString)(e.title)).join(", "), z = A || (null === O || void 0 === O || null === (a = O[0]) || void 0 === a ? void 0 : a.title) || (null === T || void 0 === T || null === (s = T[0]) || void 0 === s ? void 0 : s.title) || (null === C || void 0 === C || null === (c = C[0]) || void 0 === c ? void 0 : c.title), B = Object(o.d)(e, !0), F = Object(o.g)(e, !0), V = Object(o.f)(e, [{
                    name: "internalTaxonomies",
                    property: "title"
                }]), G = Object(o.f)(e, [{
                    name: "internalReporting",
                    property: "title"
                }]), q = null === _ || void 0 === _ ? void 0 : _.map(e => Object(r.safeDecodeString)(e.name)).join(", "), W = null === b || void 0 === b ? void 0 : b.map(e => Object(r.safeDecodeString)(e.name)).join(", "), Y = null === E || void 0 === E ? void 0 : E.map(e => Object(r.safeDecodeString)(e.name)).join(", "), H = null === l || void 0 === l ? void 0 : l.map(e => e.name);
                I && H.push(I);
                const K = g && Object(i.g)(g),
                    J = m && /id="([^"]{1,40})"/.exec(m),
                    $ = Array.isArray(J) && J.length > 0 && J[1],
                    X = (null === S || void 0 === S ? void 0 : S.id) && "BC-" + (null === S || void 0 === S ? void 0 : S.id) || $ && "DW-" + $ || K && "YT-" + K,
                    Z = null === h || void 0 === h ? void 0 : h.split("/").pop(),
                    Q = Object(r.getDatawrapperIds)(m);
                let ee = Object(r.getDatawrapperIds)(null === d || void 0 === d ? void 0 : d.markup);
                if ("liveblog" === y) {
                    const t = Object(r.getLiveBlogUpdatesDatawrapperIds)(e);
                    t && (ee = t ? t.concat(ee) : ee)
                }
                const te = [];
                return Q && Q.forEach(e => te.push("DW-" + e)), ee && ee.forEach(e => te.push("DW-" + e)), {
                    authorsList: Array.isArray(H) && H.length > 0 && Object(r.safeDecodeString)(H.join(", ")),
                    date: p && Object(r.safeDecodeString)(p),
                    dataWrapperList: te.join(", "),
                    id: f,
                    keywords: B && Object(r.safeDecodeString)(B),
                    modifiedGMT: v && Object(r.safeDecodeString)(v),
                    primaryTag: z && Object(r.safeDecodeString)(z),
                    postLabelList: W && Object(r.safeDecodeString)(W),
                    postType: y && Object(r.safeDecodeString)(y),
                    primaryTopic: R && Object(r.safeDecodeString)(R),
                    programsList: q && Object(r.safeDecodeString)(q),
                    slug: Z && Object(r.safeDecodeString)(Z),
                    link: h && Object(r.safeDecodeString)(h),
                    sourceTaxonomy: Y && Object(r.safeDecodeString)(Y),
                    tagsList: U && Object(r.safeDecodeString)(U),
                    tagList: x && Object(r.safeDecodeString)(x),
                    taxonomyTerms: F && Object(r.safeDecodeString)(F),
                    title: j && Object(r.safeDecodeString)(j),
                    topics: L && Object(r.safeDecodeString)(L),
                    videoId: X && Object(r.safeDecodeString)(X),
                    whereList: N && Object(r.safeDecodeString)(N),
                    whoList: D && Object(r.safeDecodeString)(D),
                    trendingList: M && Object(r.safeDecodeString)(M),
                    internalTaxonomies: Object(r.safeDecodeString)(V),
                    internalReporting: Object(r.safeDecodeString)(G),
                    isQuickRead: k
                }
            }
        },
        htji: function(e, t, n) {
            "use strict";
            var o = n("Y2lC"),
                r = n("RJNl"),
                i = n("KGRH"),
                a = n("TxWY"),
                s = n("Z5oE");
            const c = function(e) {
                function t(t) {
                    const n = e.call(this) || this;
                    return n.client = t, n
                }
                return Object(s.c)(t, e), t.prototype.request = function(e) {
                    const t = this;
                    return new o.a((function(n) {
                        return t.client.subscribe(Object(s.a)(Object(s.a)({}, e), {
                            query: Object(a.a)(e.query)
                        }), {
                            next: n.next.bind(n),
                            complete: n.complete.bind(n),
                            error: function(e) {
                                return e instanceof Error ? n.error(e) : function(e) {
                                    return null !== (t = e) && "object" === typeof t && "code" in e && "reason" in e;
                                    var t
                                }(e) ? n.error(new Error("Socket closed with event ".concat(e.code, " ").concat(e.reason || ""))) : n.error(new r.a({
                                    graphQLErrors: Array.isArray(e) ? e : [e]
                                }))
                            }
                        })
                    }))
                }, t
            }(i.a);
            t.a = c
        },
        "jlC/": function(e, t, n) {
            "use strict";
            (function(e) {
                var o = n("VBdi"),
                    r = n.n(o),
                    i = n("9mJr"),
                    a = n("xCJP"),
                    s = n("ycWE"),
                    c = n("w8RO"),
                    l = n("C9Dh"),
                    d = n("MwNz"),
                    u = n("4j0K"),
                    p = n("0w0Z"),
                    m = n("ruOW"),
                    g = n("+4D6"),
                    f = n("9N7U"),
                    h = n("ccEg"),
                    v = n("nvaz"),
                    b = (n("gTyc"), n("dVLG"));
                const y = "Newsletters Onboarding Page",
                    w = (e, t) => Object(b.c)(r.a.Fragment, null, Object(b.c)(c.a, {
                        name: e ? "checked-dot" : "unchecked-dot-plus",
                        className: "selection-icon",
                        size: 24,
                        viewBox: e ? "0 0 32 32" : "0 0 24 24"
                    }), t.t(e ? "Subscribed" : "Subscribe"));
                t.a = t => {
                    var n, r, c, A;
                    let {
                        staticContext: _,
                        match: E,
                        onContinue: O
                    } = t;
                    const j = d.a.get("i18n"),
                        {
                            isAuthInitialized: T,
                            user: S,
                            userInfo: P,
                            userInfoActions: C
                        } = Object(u.a)(),
                        [I, k] = Object(o.useState)([]),
                        L = Object(f.getCanonicalUrl)(_, null === E || void 0 === E ? void 0 : E.url),
                        [R, {
                            loading: N
                        }] = Object(g.a)(),
                        [D, {
                            listLoading: M
                        }] = Object(p.a)(),
                        {
                            loading: x,
                            isVerified: U
                        } = Object(m.a)();
                    Object(o.useEffect)(() => {
                        var t, n;
                        !x && U && (null === (t = e) || void 0 === t || null === (n = t.newsletters) || void 0 === n ? void 0 : n.length) > 0 && Object(a.f)(U, y)
                    }, [x, U, null === (n = e) || void 0 === n ? void 0 : n.newsletters]), Object(o.useEffect)(() => {
                        T && S && D()
                    }, [T, S]);
                    const z = Object(o.useCallback)(() => {
                        k(t => {
                            var n, o, r, i;
                            return t.length !== (null === (n = e) || void 0 === n || null === (o = n.newsletters) || void 0 === o ? void 0 : o.length) ? null === (r = e) || void 0 === r || null === (i = r.newsletters) || void 0 === i ? void 0 : i.map(e => e.listId) : []
                        })
                    }, [k, null === (r = e) || void 0 === r ? void 0 : r.newsletters]);
                    Object(o.useEffect)(() => {
                        var e, t, n;
                        const o = null === P || void 0 === P ? void 0 : P.user;
                        var r;
                        o && (null === (e = o.consent) || void 0 === e || e.newsletterPurpose, (null === (t = o.newsletterDetails) || void 0 === t || null === (n = t.listIds) || void 0 === n ? void 0 : n.length) > 0 && k((null === (r = o.newsletterDetails) || void 0 === r ? void 0 : r.listIds) || []))
                    }, [P]);
                    return !(null === P || void 0 === P ? void 0 : P.user) || M ? Object(b.c)(l.a, null) : 0 === (null === (c = e) || void 0 === c || null === (A = c.newsletters) || void 0 === A ? void 0 : A.length) ? (O(), null) : Object(b.c)("div", {
                        id: "main-content-area",
                        className: "container onboarding__newsletters",
                        tabIndex: "-1",
                        "aria-label": j.t("Main content area"),
                        role: "main"
                    }, Object(b.c)(i.a, null, Object(b.c)("title", null, j.t("Preferences")), Object(b.c)("link", {
                        rel: "canonical",
                        href: L
                    }), Object(b.c)("meta", {
                        name: "pageType",
                        content: "Onboarding Page"
                    })), Object(b.c)("div", {
                        className: "container__inner"
                    }, Object(b.c)("h1", {
                        className: "onboarding__newsletters-title"
                    }, j.t("Onboarding newsletter title")), Object(b.c)("p", {
                        className: "onboarding__newsletters-subtitle"
                    }, j.t("Onboarding newsletter subtitle")), Object(b.c)("button", {
                        className: "no-styles-button u-underline",
                        "aria-label": e.newsletters.length === I.length ? j.t("Enter to de-select all newsletters") : j.t("Enter to select all newsletters"),
                        onClick: z
                    }, j.t("Select all")), Object(b.c)(s.a, {
                        ariaLabel: j.t("Newsletters List"),
                        items: e.newsletters.map(h.a),
                        selection: I,
                        onSelectionChange: k,
                        renderItemIconButton: w
                    }), Object(b.c)(v.a, {
                        onContinue: () => {
                            var t, n;
                            if (!U) return;
                            const o = (null === P || void 0 === P || null === (t = P.user) || void 0 === t || null === (n = t.newsletterDetails) || void 0 === n ? void 0 : n.listIds) || [],
                                r = I.filter(e => !o.includes(e)),
                                i = o.filter(e => !I.includes(e)),
                                s = r.map(t => {
                                    var n, o, r;
                                    return null === (n = e) || void 0 === n || null === (o = n.newsletters) || void 0 === o || null === (r = o.find(e => e.listId === t)) || void 0 === r ? void 0 : r.title
                                }).join(),
                                c = i.map(t => {
                                    var n, o, r;
                                    return null === (n = e) || void 0 === n || null === (o = n.newsletters) || void 0 === o || null === (r = o.find(e => e.listId === t)) || void 0 === r ? void 0 : r.title
                                }).join();
                            R({
                                variables: {
                                    listIds: r,
                                    unlinkListIds: i
                                }
                            }).then(e => {
                                var t, n;
                                (null === e || void 0 === e || null === (t = e.data) || void 0 === t || null === (n = t.updateNewsletterSubscription) || void 0 === n ? void 0 : n.success) && (r.length > 0 && Object(a.e)(U, y, s, "Continue"), i.length > 0 && Object(a.g)(U, y, c, "Continue"), C.updateNewslettersList(I), O())
                            })
                        },
                        continueEnabled: I.length > 0,
                        continueIsLoading: N,
                        onSkip: () => {
                            U && (Object(a.e)(U, y, null, "Skip"), O())
                        }
                    })))
                }
            }).call(this, n("Uwcf"))
        },
        kXcp: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return i
                })), n.d(t, "b", (function() {
                    return a
                }));
                var o = n("pbOP");
                e.features = null;
                const r = async (t, n) => {
                        const r = Object(o.a)();
                        try {
                            const o = await t(n.replace("graphql", "api/features?wp-site=" + r), {
                                headers: {
                                    "wp-site": r
                                }
                            });
                            e.features = await o.json()
                        } catch (i) {
                            console.error(i)
                        }
                    },
                    i = async (t, n, o) => {
                        e.features && !o || (await r(t, n), setInterval(() => {
                            r(t, n)
                        }, 3e5))
                    },
                    a = t => {
                        var n;
                        if (!t) return !1;
                        const r = null === (n = e.features) || void 0 === n ? void 0 : n[t],
                            i = "chinese" === Object(o.a)() ? "ajc" : Object(o.a)();
                        return null === r || void 0 === r ? void 0 : r.includes(i)
                    }
            }).call(this, n("Uwcf"))
        },
        lBH5: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return O
            })), n.d(t, "b", (function() {
                return T
            })), n.d(t, "f", (function() {
                return S
            })), n.d(t, "d", (function() {
                return k
            })), n.d(t, "g", (function() {
                return L
            })), n.d(t, "e", (function() {
                return R
            })), n.d(t, "c", (function() {
                return N
            }));
            var o = n("dQgG"),
                r = (n("VBdi"), n("9mJr")),
                i = n("BEYP"),
                a = n("EatG"),
                s = n("R8Jg"),
                c = n("C9Dh"),
                l = n("1VZG"),
                d = n("MwNz"),
                u = n("pbOP"),
                p = n("Tdow"),
                m = n("9N7U"),
                g = n("dVLG");
            const f = e => "/where" + e,
                h = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return n => n.replace(new RegExp(e), t)
                },
                v = h(/^\/amp/),
                b = h("^\\/where\\/[a-zA-Z0-9-._~:?#\\[\\]@!$&'\\(\\)\\*\\+,;=]+\\/", "/where/"),
                y = h(/^\/videos/),
                w = e => "where" === e,
                A = Object(p.b)(m.safeDecodeString, v, m.untrailingSlashIt),
                _ = (e, t) => Object(p.b)(A, (e => t => {
                    const n = [],
                        o = t.match(/^\/where\/[^\/]+\/[^\/]+/);
                    return Object(u.e)() && w(e) && o && n.push(b), Object(p.b)(...n)(t)
                })(e))(t),
                E = (e, t) => Object(p.b)(A, (e => t => {
                    const n = [];
                    return w(e) && !t.startsWith("/where") && n.push(f), Object(u.c)() && "/videos/news" === t && n.push(y), Object(p.b)(...n)(t)
                })(e))(t),
                O = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    if (!e || !t) return !1;
                    const o = E(n, e),
                        r = _(n, t);
                    return o === r
                },
                j = (e, t, n) => {
                    var o;
                    return n || ((e, t) => {
                        if (!e || !t) return !1;
                        return A(e) === A(t)
                    })(e, t) || e === (null === (o = d.a.get("dailyBriefConfig")) || void 0 === o ? void 0 : o.slug)
                },
                T = e => "string" !== typeof e ? null : Object(m.untrailingSlashIt)(Object(m.safeDecodeString)(e).toLowerCase()),
                S = (e, t) => !(!e || !t) && (t = "/" + T(t).split("/").pop(), (e = T(e)) === t),
                P = (e, t) => {
                    if (!e || !t) return !1;
                    return e.split("/").slice(-1)[0] === t.split("/").slice(-1)[0]
                },
                C = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return e = T(e), t = T(t), {
                        isValid: j(e, t, n),
                        redirect: P(e, t)
                    }
                },
                I = (e, t) => e ? Object(g.c)(i.a, null, t.lenght > 0 && Object(g.c)(r.a, null, t.map(e => e)), Object(g.c)(s.a, {
                    hideSearch: !0
                })) : Object(g.c)(s.a, null),
                k = function(e) {
                    var t, n, r, i, s, d;
                    let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    const {
                        data: p,
                        error: f,
                        isAmp: h,
                        loading: v,
                        location: b,
                        match: y
                    } = e, w = (null === p || void 0 === p || null === (t = p.article) || void 0 === t ? void 0 : t.link) || (null === p || void 0 === p || null === (n = p.program) || void 0 === n ? void 0 : n.link) || (null === p || void 0 === p || null === (r = p.dailyBrief) || void 0 === r || null === (i = r[0]) || void 0 === i ? void 0 : i.link) || (null === (s = e.data) || void 0 === s || null === (d = s.dailyBrief) || void 0 === d ? void 0 : d.link), A = Object(m.getPreviewID)(b), _ = I(h, u), E = v && !p && !f;
                    if (E || !o.canUseDOM && A) return Object(g.c)(c.a, null);
                    if (f) return e.staticContext && (e.staticContext.status = 500), Object(g.c)(a.a, null);
                    if (!w) return _;
                    const O = C(b.pathname, w, A),
                        j = h ? "/amp" + w : w;
                    return !O.isValid && (O.redirect ? Object(g.c)(l.a, {
                        redirectTo: j,
                        redirectStatusCode: 301,
                        match: y
                    }) : _)
                },
                L = () => {
                    var e, t, n, o;
                    return !(!(null === (e = window) || void 0 === e ? void 0 : e.isDelegatedSite) && !(null === (t = window) || void 0 === t || null === (n = t.location) || void 0 === n || null === (o = n.hostname) || void 0 === o ? void 0 : o.includes("ajnet.me")))
                },
                R = (e, t) => e.startsWith("#") || e.startsWith("/") || e.startsWith(t),
                N = (e, t) => e.startsWith(t) ? e.replace(t, "") || "/" : e
        },
        lqta: function(e, t, n) {},
        ls7f: function(e) {
            e.exports = JSON.parse('{"Running maintenance":"Sorry, we are currently running some maintenance and will be back shortly. Connect with us on social media for updates.","We\'ll be back soon":"We\'ll be back soon","No search results":"<0> Your search for </0> <1>{{query}}</1> <2>returned no results</2>","Al Jazeera":"Al Jazeera","Site Title":"Al Jazeera","Live":"Live","Live Stream":"Live Stream","Live Stream switch text":"Having trouble watching? ","Live stream title":"LIVE - Al Jazeera English","Live stream description":"Watch Al Jazeera\u2019s live broadcast now","Live Stream page title":"Al Jazeera Live","Live audio stream description":"Listen to Al Jazeera\u2019s live broadcast now","Mins":"mins","Switch player":"Switch Player","Close Menu":"Close the menu","Open Menu":"Open the menu","breaking":"BREAKING","developing":"DEVELOPING STORY","Ads":"Advertisement","Source":"Source","Related":"Related","Related Stories":"Related Stories","Correction":"Correction","More from":"More from {{opinion}} {{sectionTitle}}","Author":"Author","By":"By","Opinion":"Opinion","Video":"Video","Gallery":"Gallery","Blog":"Blog","Post":"Post","Just Now":"Just Now","GDPR popup text":"<0>We use cookies to give you the best possible experience. <1>Learn more</1> about how we use cookies. By clicking \u2018Accept\u2019 you agree to these cookies. To decline, <5>click here</5>.</0>","Accept":"Accept","Last update":"Last update","Last Updated":"Updated","Mecca Time":"Mecca Time","Show more":"Show more","Show more playlist items":"Show more videos","Show less playlist items":"Show less videos","Latests programs":"All Shows","Shows from":"Shows from","Watch also":"MORE TO WATCH","More episodes":"More episodes","Open schedule page":"<0>For airing times,</0> <1>please check the</1> <2>Schedule</2>","Follow us":"Follow the show on:","About the program":"About the show","About the presenter":"Meet the presenter","Listen on":"Listen on","Podcast":"Podcast","Google Podcasts":"Google Podcasts","Apple Podcasts":"Apple Podcasts","SoundCloud Podcasts":"SoundCloud","Spotify Podcasts":"Spotify","Share":"Share","Next":"Next","Previous":"Previous","Search":"Search","Not Found":"Page not found","Not Found Description":"Sorry, we can\'t find the page that you are looking for. Don\'t let that stop you from visiting some of our other great related content.","Not Found Explore More":"EXPLORE MORE","An error occurred":"An error occurred","Please try again later":"Please try again later","The search":"Search","Read more":"Read more","Read less":"Read less","From program":"<0> From: </0><1><0> {{programTitle}}</0></1>","More episodes from program":"More from the same show","More video clips from the story":"More video clips from the story","Watch more":"Show more","Playlist":"Playlist","LATEST VIDEOS":"LATEST VIDEOS","yesterday":"yesterday","today":"today","tomorrow":"tomorrow","sunday":"sunday","monday":"monday","tuesday":"tuesday","wednesday":"wednesday","thursday":"thursday","friday":"friday","saturday":"saturday","Schedule timezone":"Note: The schedule below is displayed as per your local time","Now showing":"Now Playing","Showing Next":"Next","See full schedule":"See full schedule","Most Read":"Most popular","In Pictures":"In Pictures","Opinion Article":"OPINION","more":"more","midan":"Midan","sport":"Sports","programs":"Programs","ebusiness":"EBusiness","blog":"Blogs","blogs":"Blogs","gallery":"Gallery","opinion":"Opinion","opinions":"Opinion","news":"News","knowledgegate":"Knowledge","encyclopedia":"Encyclopedia","video":"Video","videos":"Videos","404 title":"404 - Page not found","From the episode":"Podcast","Live updates":"Live updates","Live updates tab":"Live updates","Mobile Menu Name":"All","Podcasts":"Podcasts","You Might Like":"You Might Like","Current Podcasts":"Current Podcasts","Other Podcasts":"Other Podcasts","Listen To TV Shows":"Listen To TV Shows","Available on Apple Podcasts":"Available on Apple Podcasts","Subscribe":"Subscribe","Browse all coverage":"See full coverage","Subscribing":"Subscribing","MORE TOP STORIES":"MORE TOP STORIES","External Link":"EXTERNAL LINK","Play video":"Play video","Listen":"Listen","Switch to audio":"Switch to audio","Todays latest news":"Today\'s latest from Al Jazeera","Podcasts Page Description":"Al Jazeera international audio stories. Home of The Take, Hindsight, News Updates, Al Jazeera Investigates, and The Inside Story Podcasts.","Listen now":"Listen Now","Al Jazeera, link to home page":"Al Jazeera, link to home page","Al Jazeera header 1":"<h1>Al Jazeera</h1>, link to home page","Show navigation menu":"Show navigation menu","Close navigation menu":"Close navigation menu","Link to live broadcast video player":"Link to live broadcast video player","Stop video":"Stop video","opinion by":"Opinion by","blogs by":"Blogs by","Featured Stories":"Featured Stories","Video Duration":"Video Duration","hours":"hours","minutes":"minutes","seconds":"seconds","Published on":"Published on","Related Story":"Related Story","Featured Story":"Featured Story","External Link SR Text":"This article will take you to an external website in a new browser window","Opens new browser SR Text":"This article will be opened in a new browser window","Close Breaking News Ticker":"Close Breaking News Ticker","Skip links":"Skip links","Content Feed":"Content Feed","Featured Content":"Featured Content","Search results pagination":"Search results pagination","Previous search results":"Previous search results","Next search results":"Next search results","Prev":"Prev","Share on Facebook":"Share on Facebook","Share on Twitter":"Share on Twitter","Share on Whatsapp":"Share on Whatsapp","Follow us on rss":"Follow us on RSS","Follow us on instagram":"Follow us on Instagram","Follow us on youtube":"Follow us on Youtube","Follow us on twitter":"Follow us on Twitter","Follow us on facebook":"Follow us on Facebook","Follow this program on":"Follow this program on ","Top 100 Results":"Top 100 results","About 10 results":"About 10 results","Follow this author on Twitter":"Follow this author on Twitter","Follow this author on Facebook":"Follow this author on Facebook","Search Al Jazeera":"Search Al Jazeera","Three flashes warning":"This video may contain light patterns or images that could trigger seizures or cause discomfort for people with visual sensitivities.","Click here to show more content":"Click here to show more content","Click here to watch more content":"Click here to show more content","Click to open in gallery view":"Click to open in gallery view","images are available in fullscreen gallery view":"Images are available in fullscreen gallery view","Featured source logo":"Bloomberg Logo","Bloomberg link":"Link to Bloomberg website","Link to Blogs Page":"Link to Blogs Page","Al Jazeera Media Network logo":"Al Jazeera Media Network logo","Click to play breaking news ticker":"Click to play breaking news ticker","Click to pause breaking news ticker":"Click to pause breaking news ticker","Click here to play video":"Click here to play video","Click here to search":"Click here to search","Type search term here":"Type search term here","Link to live stream video player":"Link to live stream video player","Sitemap":"Site Map","Livestream player":"Livestream player","Listen Live":"Listen Live to Al Jazeera","Schedule":"Schedule","Primary navigation menu":"Primary navigation menu","Secondary navigation menu":"Secondary navigation menu","Main content area":"Main content area","Three flashes warning home":"This video may contain light patterns or images that could trigger seizures or cause discomfort for people with visual sensitivities.","Main Categories":"MAIN CATEGORIES","categories":"Topics","tags":"Tags","where":"Locations","who":"People and Organisations","trending":"Trending","authors":"Authors","eventPages":"Event Pages","Back to Top":"Back to Top","Footer Social Link Title":"Follow Al Jazeera English:","Click here to share on social media":"Click here to share on social media","AMP Cookie Preferences footer link":"Cookie Preferences","Read more summary":"Read more summary","Read less summary":"Read less summary","Liveblog Updates":"Liveblog Updates","Click to load":"Click to load","More updates":"More updates","Click to view more updates":"Click to view more updates","More update":"More update","Updates":"Updates","Update":"Update","Auto Updates":"Auto-updates","AMP Liveblog More Updates":"To see the latest updates to this story <0>click here</0>.","Loading more content":"Loading more content","Loading related content":"Loading related content","Read our full coverage on":"Read our full coverage on","liveBlogHoursDisplayText":"{{hours}}h ago","liveBlogMinutesDisplayText":"{{minutes}}m ago","liveBlogSecondsDisplayText":"{{seconds}}s ago","liveBlogHoursA11yText":"Published {{hours}} hours ago","liveBlogMinutesA11yText":"Published {{minutes}} minutes ago","liveBlogSecondsA11yText":"Published {{seconds}} seconds ago","Nothing to preview":"Nothing to preview","Preview in Desktop mode":"Preview in Desktop mode","Preview in Mobile mode":"Preview in Mobile mode","Live Match":"Live Match","Starts in":"Starts in","Match Centre - Game Details":"Match Centre - Game Details","Match Centre - Player Details":"Match Centre - Player Details","Match Centre - Team Details":"Match Centre - Team Details","Game details, information and statistics":"Game details, information and statistics","Player details, information and statistics":"Player details, information and statistics","Team Details, stats, scores and standings":"Team Details, stats, scores and standings","Top News":"Top News","World Cup":"World Cup","Fixtures":"Fixtures","Match Preview":"Match Preview","Match Summary":"Match Summary","Enter to select all newsletters":"Enter to select all newsletters","Enter to de-select all newsletters":"Enter to de-select all newsletters","Enter to select individual item":"Enter to select {{item}}","Enter to de-select individual item":"Enter to de-select {{item}}","deleted tweet message":"This Tweet is no longer available. The original content of the tweet is in the quote below.","View all":"View all","video-exp Menu title":"Video","Sponsored page disclaimer":"This Feature is sponsored by","View on Al Jazeera App":"See this story on our app","View in App":"VIEW IN APP","Al Jazeera Mobile Application logo":"Al Jazeera Mobile Application logo","Close mobile app download banner":"Close mobile app download banner","Featured Podcast":"Featured Podcast","Now Playing":"Now Playing","Our Shows":"Our Shows","Start Listening":"Start Listening","Latest Episodes":"Latest Episodes","Pause Audio":"Pause Audio","Previous Page Label":"Go to Previous Page (currently on page {{currentPage}} of {{totalPages}})","Next Page Label":"Go to Next Page (currently on page {{currentPage}} of {{totalPages}})","Live Broadcast":"Live Broadcast","Playing Next":"Playing Next","Listen to our Live Broadcast":"Listen to our Live Broadcast","Audio hub title":"Audio Hub","Audio hub live":"live","Audio hub schedule":"schedule","Audio hub podcasts":"podcasts","Audio hub subscribe":"SUBSCRIBE:","Audio hub latest episode":"Latest Episode","Audio hub start listening":"Start Listening","Audio hub winner of":"WINNER OF:","Audio hub about":"About The Show","Audio hub featured":"Featured","Audio hub other podcasts":"Explore our other podcasts","Audio hub more from":"More from","Login Heading":"Sign in to your Al Jazeera account","and":"and","Watch Latest Videos":"Watch Latest Videos","Continue":"Continue","Sign In":"Sign in","Sign Up":"Sign up","E-mail":"E-mail","Password":"Password","Change":"Change","Show":"Show","Hide":"Hide","Invalid Email Message":"Please enter a valid e-mail.","Password Requirements":"Password must contain 8+ characters.","Password requirements info":"Please use a password with at least 8 characters.","Invalid Password Message":"Please enter the correct password.","Forgot Password":"Forgot password","Consent Agreement":"By continuing, you agree to the <0>{{tAndC}}</0> & <1>{{privacyPolicy}}</1>.","AJ T&C":"<strong>Terms of Use and Privacy Policy</strong>","Login Message Title":"Connect and engage with Al Jazeera","Login Message Subtitle":"This is not a paywall. It\u2019s free to join.","One Account Heading":"One Al Jazeera account","One Account Description":"Unlock access to all Al Jazeera services, from our regional news websites and mobile app to documentaries and the Al Jazeera OTT platform, using just one account.","Follow Author Heading":"Follow Authors and Topics","Follow Author Description":"Check out the latest from your preferred authors and on topics that matter to you.","Reading list":"Reading list","Reading List Description":"Curate a personal library of articles and reports that you can return to.","For You Heading":"Personalized\xa0<i><strong>\u201cFor You\u201d</strong></i>Section","For You Description":"Immerse yourself in a carefully customised selection of articles and videos aligned with your preferences.","Notifications Heading":"Notifications and Alerts","Notifications Description":"Remain ahead of the curve with timely notifications that update you on breaking developments and crucial news stories that shape our world.","My account":"My account","Back to my account":"Back to my account","Change password":"Change password","Too many login attempts message":"This account has been temporarily locked due to too many failed login attemps! Please try after some time.","Something went wrong message":"Something went wrong! Please try again.","Facebook email is missing":"We need your email ID to enable signing up with Facebook. Please allow this permission and try again.","Current password":"Current password","This field is required":"This field is required.","New password":"New password","Confirm password":"Confirm password","Passwords do not match":"Passwords do not match.","Reused password":"This password has been used before. Please choose a unique password.","Sign out":"Sign out","Edit":"Edit","Full name":"Full name","Add your name":"Add your name","Account":"Account","Data":"Data","Delete my account":"Delete my account","Request my data":"Request my data","Save":"Save","Cancel":"Cancel","Following":"Following","Edit your name":"Edit your name","full-name-maximum-length-error-message":"The full name should be only 150 characters long.","User Account Tooltip":"Enrich your Al Jazeera experience by signing in or creating an account.","Close Tooltip":"Close Tooltip","EmailSignupConsent":"You agree to receive updates from Al Jazeera over email. You can opt out at any time","Check Your Inbox":"Check your inbox","Forgot Password Message":"Reset your password by clicking on the link sent to {{email}}","Forgot Password Valid":"Please note reset link is only valid for 60 mins","Forgot Password Spam":"Can\'t find it? Check your spam folder.","Change e-mail":"Change e-mail","Resend link":"Resend link","Galery article has":"This gallery article has","image":"image","images":"images","Reset-password-description":"Enter a new password to reset the password on your Al Jazeera account. Please use a password with at least 8 characters.","Reset-password-success":"Password is reset successfully.","Email Verified":"Your email has been verified!","Already Verified":"You\'ve already verified your email.","Verification link sent":"We have sent you a verification link to <strong>{{email}}</strong> to verify your e-mail.","Verification link sent again":"The email verification link has been successfully resent.","Expired Link":"Your verification link has expired.","Invalid Link":"Error: Invalid URL.","Resend":"Resend","Email not verified":"We have noticed your e-mail address has not been verified.","Verify Now":"Verify Now","Protected by reCAPTCHA":"protected by <strong>reCAPTCHA</strong>","Invalid-password-reset-link":"Please use valid password reset link.","Expired-oobCode":"Password reset link has expired. Please try again.","Invalid-oobCode":"Password reset link is invalid.","Invalid-user":"Invalid User.","Enrich your Al Jazeera experience: Sign in to save stories":"Enrich your Al Jazeera experience: Sign in to save stories.","Password-reset-link-sent":"Password reset link has been sent successfully.","Failed-to-send-password-reset-link":"Failed to send password reset link. Please try again.","Change-password-success":"Your password has been changed successfully.","PIIDownloadConfirmMsg":"When you use Al Jazeera, we gather some information from you. To get a copy of your data, click \'<strong>{{buttonName}}</strong>\' below.","PIIDownloadAriaDesc":"When you use Al Jazeera, we gather some information from you. To get a copy of your data, click \'Request my data\' below.","Request-my-data":"Request my data","Data-request-success-title":"Your data request has been sent","Data-request-success-info":"It might take a few days to get you this information. Thank you for your patience.","RequestedData":"Requested data is being processed\u2026","Hello":"Hello,","Welcome to Al Jazeera":"Welcome to an enriched news experience with Al Jazeera!","Download our app":"Download our app now to elevate your experience.","Remain Logged-In Heading":"Remain logged-in","Saved":"Saved","Unsaved":"Unsaved","Coming Soon":"Coming soon","Reset Password":"Reset password","Too-Many-login-attempts":"Too many failed login attempts. Please try again after sometime.","Show Password":"Show password as plain text. Warning: this will display your password on the screen.","Hide Password":"Hide Password","Personalization-Consent-Agreement":"By creating account, you agree to the <0>{{tAndC}}</0> & <1>{{privacyPolicy}}</1>. Your activity may be used to personalise your experience with Al Jazeera products.","tAndC":"T&C","Privacy-Policy":"Privacy Policy","Change email message":"Change Email address. Warning: This will also reset the password if already entered.","Save to Reading list":"Save to Reading list","Something went wrong":"Sorry, something went wrong.","Refresh or try again":"Please <0>refresh the page</0> or try again later.","Discover more stories":"Discover more stories","Reading list empty":"Your reading list is empty. Start to discover new articles.","Reading list save":"Save","Reading list unsave":"Unsave","save-for-later-tooltip-text":"Save articles to read later and create your own reading list.","privacy-and-contact-us":"Al Jazeera takes your privacy seriously. Visit our <0>{{privacyPolicy}}</0> to learn more. To request your account data, generate request <1>{{contactUsLink}}</1>.","here":"here","defaultMetaDesc":"Stay on top of {{name}} latest developments on the ground with Al Jazeera\u2019s fact-based news, exclusive video footage, photos and updated maps.","Link copied":"Link copied!","Copy Link":"Copy link","Verification expiration":"Please note that the verification link has an expiration. Use it promptly to ensure successful verification.","Verify your email":"Verify your email","Verify to continue":"We\'ve noticed your email address is not verified. Please verify your email to continue using the feature.","Verify to manage your account":"We\'ve noticed your email address is not verified. Please verify your email to manage your account.","Onboarding newsletter title":"Subscribe to Our Weekly Newsletter","Onboarding newsletter subtitle":"Your email address has been verified. Subscribe now to receive the week\'s top stories directly in your inbox.","Skip":"Skip","Subscribed":"Subscribed","Preferences":"Preferences","Newsletters":"Newsletters","Managing emails for":"Managing emails for: <strong>{{email}}</strong>","Confirm unsubscribe message":"Are you sure you want to unsubscribe from the <strong>{{newsletter}}</strong>?","Unsubscribe":"Unsubscribe","Select all":"Select all","Currently logged in as":"Currently logged in as","Subscribe for Al Jazeera":"Subscribe for Al Jazeera","Subscribed successfully":"You\'ve successfully subscribed to {{newsletter}}","By subscribe you agree to privacy":"<0>By subscribing, you agree to our </0><1>Privacy Policy</1>","By signup you agree to privacy":"<0>By signing up, you agree to our </0><1>Privacy Policy</1>","Breaking news page title":"Breaking News","Breaking News":"Breaking News","homepage opinion block title":"Opinion","need-account":"Need an account?","have-account":"Already have an account?","SignUp-Heading":"Enrich your Al Jazeera experience by creating an account.","Account-Exists":"This email already exists.","Account-Not-Exists":"This email doesn\u2019t exist.","For you":"For you","For you tooltip":"Personalized content based on your activity","Recommended for you tooltip":"Recommended stories based on this article","Recommended for You":"Recommended for You","Recommended Stories":"Recommended Stories","notification:per-permission-popup:title":"Stay Informed, Stay Ahead","notification:per-permission-popup:description":"Get real-time updates on breaking news and top stories delivered to you. Never miss a crucial development again.","notification:per-permission-popup:call-to-action":"Enable notifications","notification:per-permission-popup:not-now":"Not now","Go Back":"Go Back","Mute":"Mute","Unmute":"Unmute","Next video text desktop":"Scroll up for next video","Next video text mobile":"Swipe up for next video","Carousel with latest videos":"Carousel with latest videos","video-carousel-slide-label":"Video {{index}} of {{slidesLength}}","We couldn\u2019t load the videos. Please try again later":"We couldn\u2019t load the videos. Please try again later","You\'ve reached the end of this set of videos":"You\'ve reached the end of this set of videos.","or-sign-up-with":"Or sign up with","or-sign-in-with":"Or sign in with","apple":"Apple","facebook":"Facebook","google":"Google","or":"OR","continue-with-google":"Continue with Google","continue-with-facebook":"Continue with Facebook","continue-with-apple":"Continue with Apple","finish-creating-account":"Finish creating your account","create-account":"Create account","Connected accounts":"You\'ve connected using your {{accounts}} accounts.","Connected account":"You\'ve connected using your {{account}} account.","social-account-exists":"You have already signed up using social login. Please use your linked social media account to login.","consent-modal-title":"Enrich your Al Jazeera experience","consent-modal-descr":"Please confirm that you accept our T&C and Privacy Policy to save stories.","account-exists-with-different-provider":"You already have created an account using {{oldSocialPlatform}}. Please click continue to merge your existing {{oldSocialPlatform}} account with {{newSocialPlatform}}.","merge-account":"Merge your account","account-exists-with-password":"You already have created an account using email and password. Please sign in using your credentials to merge your existing user account with {{newSocialPlatform}}.","Discover more videos":"Discover more videos","termsAndConditions":"Terms and Conditions","Personalization-Purpose":"You agree to the <0>{{termsAndConditions}}</0> & <1>{{privacyPolicy}}</1>. Your activity will be used to personalise your experience with Al Jazeera products and ads.","Personalization-Consent-Error":"To create a user account and enjoy a personalized experience, please accept our personalization settings. You can still access all of our content without an account.","Privacy settings":"Privacy settings","OK":"OK","Delete":"Delete","Delete my account modal title":"Are you sure you want to delete your account?","Delete my account modal message":"Deleting your account will permanently remove all your preferences, saved stories, newsletters, subscriptions, and data. This action is irreversible.","Account deleted modal title":"Deleting Your Account","Account deleted modal message":"Your account has been deleted. You will now be logged out.","Account delete error title":"Account Deletion Failed","Account delete error message":"We are unable to delete your account due to a technical error. Please try again later.","Request my data description":"Submit a request to view your user data","Delete my account description":"Permanently delete your user account","Site Archive":"\u0623\u0631\u0634\u064a\u0641 \u0627\u0644\u0645\u0648\u0642\u0639","no articles found":"No articles found","jump to":"JUMP TO:","table of contents":"Table of Contents"}')
        },
        mX8n: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "c", (function() {
                    return r
                })), n.d(t, "d", (function() {
                    return i
                })), n.d(t, "b", (function() {
                    return a
                })), n.d(t, "a", (function() {
                    return s
                }));
                const o = async (t, n, o, r, i) => {
                        const a = Date.now(),
                            s = r + "Updated";
                        if (!e[s] || a - e[s] > 3e5) try {
                            const a = await t(n + `?operationName=${i}&wp-site=` + o, {
                                    method: "GET",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "wp-site": o
                                    }
                                }),
                                c = await a.json();
                            e[s] = Date.now(), c.data && c.data[r] ? e[r] = c.data[r] : e[r] = []
                        } catch (c) {
                            e[r] = [], e[s] = Date.now()
                        }
                    },
                    r = async (e, t, n) => o(e, t, n, "redirects", "redirects"),
                    i = async (e, t, n) => o(e, t, n, "routes", "routes"),
                    a = async (e, t, n) => o(e, t, n, "newsletters", "newsletters"),
                    s = async (e, t, n) => o(e, t, n, "arcSettings", "cmsArcSettings")
            }).call(this, n("Uwcf"))
        },
        n6ou: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return s
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "a", (function() {
                return l
            })), n.d(t, "c", (function() {
                return d
            }));
            var o = n("dQgG"),
                r = n("vvtK"),
                i = n.n(r);
            const a = {
                    minLength: 8,
                    minLowercase: 0,
                    minNumbers: 0,
                    minSymbols: 0,
                    minUppercase: 0
                },
                s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return i()(e, a)
                },
                c = () => {
                    if (o.canUseDOM) {
                        var e, t;
                        const n = new URLSearchParams(null === (e = window) || void 0 === e || null === (t = e.location) || void 0 === t ? void 0 : t.search);
                        return {
                            mode: n.get("mode"),
                            oobCode: n.get("oobCode"),
                            continueUrl: n.get("continueUrl")
                        }
                    }
                    return {
                        mode: "",
                        oobCode: "",
                        continueUrl: ""
                    }
                },
                l = Object.freeze({
                    LOGIN: "log-in",
                    REGISTER: "register",
                    FORGOT_PASSWORD: "forgot-password",
                    ENFORCE_VERIFICATION: "enforce-verification"
                }),
                d = e => {
                    var t, n;
                    return (null === e || void 0 === e || null === (t = e.email) || void 0 === t ? void 0 : t.message) || (null === e || void 0 === e || null === (n = e.password) || void 0 === n ? void 0 : n.message)
                }
        },
        nvaz: function(e, t, n) {
            "use strict";
            n("VBdi");
            var o = n("eaup"),
                r = n("MwNz"),
                i = (n("lqta"), n("dVLG"));
            t.a = e => {
                let {
                    onSkip: t,
                    onContinue: n,
                    onBack: a,
                    continueEnabled: s,
                    continueIsLoading: c
                } = e;
                const l = r.a.get("i18n");
                return Object(i.c)("div", {
                    className: "onboarding__buttons"
                }, a && Object(i.c)("button", {
                    "aria-label": l.t("Click to go back"),
                    onClick: a,
                    className: "no-styles-button u-underline",
                    "data-testid": "onboarding__back-btn"
                }, l.t("Back")), n && Object(i.c)(o.a, {
                    "aria-label": l.t("Click to continue"),
                    onClick: n,
                    "data-testid": "onboarding__continue-btn",
                    text: l.t("Continue"),
                    isActive: s,
                    isLoading: c
                }), t && Object(i.c)("button", {
                    "aria-label": l.t("Click to go skip"),
                    onClick: t,
                    className: "no-styles-button u-underline",
                    "data-testid": "onboarding__skip-btn"
                }, l.t("Skip")))
            }
        },
        o7KX: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var o = n("dQgG"),
                r = n("xAi6");
            n("/rTs");
            const i = e => new Promise((t, n) => {
                var i, a;
                if (!o.canUseDOM || !(null === (i = window) || void 0 === i || null === (a = i.grecaptcha) || void 0 === a ? void 0 : a.enterprise)) return void t(null);
                const s = async function() {
                    let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    try {
                        const n = await window.grecaptcha.enterprise.execute(r.UCMS_RECAPTCHA_SITE_KEY, {
                            action: e
                        });
                        t(n)
                    } catch (a) {
                        var i;
                        if ((null === (i = a.message) || void 0 === i ? void 0 : i.includes("Invalid site key or not loaded in api.js")) && o < 6) {
                            const e = 100 * Math.pow(2, o);
                            setTimeout(() => s(o + 1), e)
                        } else n(a.message)
                    }
                };
                window.grecaptcha.enterprise.ready(() => {
                    setTimeout(() => s(), 0)
                })
            })
        },
        pbOP: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return i
            })), n.d(t, "e", (function() {
                return a
            })), n.d(t, "g", (function() {
                return s
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "f", (function() {
                return l
            })), n.d(t, "d", (function() {
                return d
            })), n.d(t, "a", (function() {
                return u
            }));
            let {
                SITE: o
            } = n("xAi6");
            const r = Object.freeze({
                    AJA: "aja",
                    AJE: "aje",
                    Chinese: "chinese",
                    AJB: "ajb",
                    AJM: "ajm",
                    AJD: "ajd",
                    DOC: "doc"
                }),
                i = () => o === r.AJA,
                a = () => o === r.AJE,
                s = () => o === r.Chinese,
                c = () => o === r.AJB,
                l = () => o === r.AJM,
                d = () => o === r.AJD,
                u = () => o
        },
        q104: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return s
            }));
            var o = n("VBdi"),
                r = n.n(o),
                i = n("dVLG");
            const a = r.a.createContext({
                getPageState: e => {},
                setPageState: (e, t) => {}
            });
            class s extends r.a.Component {
                constructor(e) {
                    super(e), this.state = {
                        itemsLoaded: {}
                    }
                }
                render() {
                    const {
                        children: e
                    } = this.props;
                    return Object(i.c)(a.Provider, {
                        value: {
                            getPageState: this.getPageState.bind(this),
                            setPageState: this.setPageState.bind(this)
                        }
                    }, e)
                }
                getPageState(e) {
                    return this.state.itemsLoaded[e]
                }
                setPageState(e, t) {
                    const n = Object.assign({}, this.state.itemsLoaded);
                    n[e] = t, this.setState({
                        itemsLoaded: n
                    })
                }
            }
        },
        t19f: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            })), n.d(t, "b", (function() {
                return d
            })), n.d(t, "c", (function() {
                return u
            }));
            var o = n("qFTw"),
                r = n.n(o),
                i = n("xAi6");
            const a = [{
                    crop: "arc-image-24",
                    width: 24,
                    height: 24
                }, {
                    crop: "arc-image-48",
                    width: 48,
                    height: 48
                }, {
                    crop: "arc-image-75",
                    width: 75,
                    height: 75
                }, {
                    crop: "arc-image-96",
                    width: 96,
                    height: 96
                }, {
                    crop: "arc-image-120",
                    width: 120,
                    height: 120
                }, {
                    crop: "arc-image-270",
                    width: 270,
                    height: 270
                }, {
                    crop: "arc-image-450",
                    width: 450,
                    height: 450
                }, {
                    crop: "arc-image-1800",
                    width: 1800,
                    height: 1800
                }, {
                    crop: "arc-image-3-2-120",
                    width: 120,
                    height: 80
                }, {
                    crop: "arc-image-3-2-140",
                    width: 140,
                    height: 93
                }, {
                    crop: "arc-image-3-2-170",
                    width: 170,
                    height: 113
                }, {
                    crop: "arc-image-3-2-270",
                    width: 270,
                    height: 180
                }, {
                    crop: "arc-image-3-2-375",
                    width: 375,
                    height: 250
                }, {
                    crop: "arc-image-3-2-570",
                    width: 570,
                    height: 380
                }, {
                    crop: "arc-image-3-2-770",
                    width: 770,
                    height: 513
                }, {
                    crop: "arc-image-3-2-1170",
                    width: 1170,
                    height: 780
                }, {
                    crop: "arc-image-4-3-1920",
                    width: 1920,
                    height: 1440
                }, {
                    crop: "arc-image-16-9-270",
                    width: 270,
                    height: 152
                }, {
                    crop: "arc-image-16-9-730",
                    width: 730,
                    height: 410
                }, {
                    crop: "arc-image-16-9-1024",
                    width: 1024,
                    height: 576
                }, {
                    crop: "arc-image-16-9-1366",
                    width: 1366,
                    height: 768
                }, {
                    crop: "arc-image-16-9-1920",
                    width: 1920,
                    height: 1080
                }, {
                    crop: "arc-image-9-16-410",
                    width: 410,
                    height: 730
                }, {
                    crop: "arc-image-9-16-820",
                    width: 820,
                    height: 1460
                }, {
                    crop: "arc-image-600-315",
                    width: 600,
                    height: 315
                }, {
                    crop: "arc-image-770-330",
                    width: 770,
                    height: 330
                }, {
                    crop: "arc-image-770-240",
                    width: 770,
                    height: 240
                }, {
                    crop: "arc-image-375-180",
                    width: 375,
                    height: 180
                }, {
                    crop: "arc-image-2-1-1400",
                    width: 1400,
                    height: 700
                }, {
                    crop: "arc-image-1200-630",
                    width: 1200,
                    height: 630
                }, {
                    crop: "arc-image-2-3-252",
                    width: 252,
                    height: 378
                }, {
                    crop: "full",
                    useActualSize: !0,
                    useFit: !0
                }],
                s = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.DEFAULT_IMAGE_QUALITY_LEVEL;
                    if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            APPLICATION_ENV: "production",
                            BRIGHTCOVE_ENV: "production",
                            ONESIGNAL_CONFIG: {
                                appId: "fb3606cf-1b0a-44e7-b314-9c4173ac1b5e",
                                safariWebId: "web.onesignal.auto.477dedc8-8bcf-40fd-b64c-238033111672"
                            },
                            REACT_APP_APPCHECK_DEBUG_TOKEN_AJA: "",
                            REACT_APP_APPCHECK_DEBUG_TOKEN_AJB: "",
                            REACT_APP_APPCHECK_DEBUG_TOKEN_AJD: "",
                            REACT_APP_APPCHECK_DEBUG_TOKEN_AJE: "",
                            REACT_APP_APPCHECK_DEBUG_TOKEN_AJM: "",
                            REACT_APP_ENVIRONMENT: "production",
                            REACT_APP_SITE: "aje",
                            REACT_APP_APPCHECK_DEBUG_TOKEN_CHINESE: "",
                            REACT_APP_OPTA_SCRIPT_VERSION: "v14",
                            REACT_APP_OPTA_STYLES_VERSION: "v30"
                        }).JEST_WORKER_ID) return e;
                    if (e.includes("quality=" + t)) return e;
                    const n = "number" === typeof t ? Math.min(Math.max(t, 0), 100) : 0,
                        o = n > 0 && n < 100 ? "quality=" + n : "";
                    return e.includes("?") ? `${e}&${o}` : `${e}?${o}`
                },
                c = (e, t, n, o, r) => {
                    if (!e) return null;
                    if (e.includes("resize=") || e.includes("fit=")) return e;
                    const {
                        useActualSize: i,
                        useFit: a
                    } = o;
                    let c = o.width,
                        l = o.height;
                    if (i && (c = t, l = n), t && n) {
                        if (t < c && n < l) return null;
                        c = Math.min(t, c), l = Math.min(n, l)
                    }
                    const d = a ? "fit=" : "resize=",
                        u = e.includes("?") ? "&" : "?";
                    return s(`${e}${u}${d}${c}%2C${l}`, r)
                },
                l = function(e, t, n, o) {
                    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.DEFAULT_IMAGE_QUALITY_LEVEL;
                    return e ? (o = o ? o.map(e => e.crop) : [], a.filter(e => {
                        let {
                            crop: t
                        } = e;
                        return !o.includes(t)
                    }).map(o => {
                        const i = Object.assign({}, o, {
                            url: c(e, t, n, o, r)
                        });
                        return null === i.url ? null : (o.useActualSize && (i.width = t, i.height = n), i)
                    }).filter(e => !!e)) : []
                },
                d = function(e, t, n, o, a) {
                    var c;
                    let d = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : i.DEFAULT_IMAGE_QUALITY_LEVEL,
                        u = o || [];
                    if (u = [...u, ...l(e, t, n, u, d)], u = a ? u.filter(e => a.includes(e.crop)) : u, u = u.map(e => Object.assign({}, e, {
                            url: s(e.url, d)
                        })), null === (c = u) || void 0 === c ? void 0 : c.length) {
                        let e = [],
                            t = [];
                        const n = [];
                        u = u.filter((e, t) => (-1 === n.indexOf(e.width) && n.push(e.width), n.indexOf(e.width) === t));
                        const o = r()(u, "width")[u.length - 1];
                        return e = u.map(e => `${e.url} ${e.width}w`), t = u.map(e => `(max-width: ${e.width}px) ${e.width}px`), t.push(o.width + "px"), {
                            largestUrl: o.url,
                            srcSet: e,
                            srcSizes: t
                        }
                    }
                    return {
                        srcSet: [],
                        srcSizes: []
                    }
                },
                u = e => {
                    if (!e) return [];
                    const {
                        sourceUrl: t,
                        width: n,
                        height: o,
                        sizes: r
                    } = e;
                    if (n < i.MINIMUM_GOOGLE_DISCOVERY_WIDTH || n < o) return [];
                    const s = r ? r.filter(e => "full" !== e.crop) : [],
                        l = ["arc-image-1800", "arc-image-4-3-1920", "arc-image-16-9-1920", "arc-image-1200-630"],
                        d = a.filter(e => l.includes(e.crop)).filter(e => !s.map(e => e.crop).includes(e.crop)).map(e => {
                            const r = Object.assign({}, e, {
                                url: c(t, n, o, e)
                            });
                            return null === r.url ? null : r
                        }).filter(e => !!e);
                    return [...s, ...d]
                }
        },
        ugo3: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return E
            })), n.d(t, "d", (function() {
                return j
            })), n.d(t, "b", (function() {
                return T
            })), n.d(t, "f", (function() {
                return P
            })), n.d(t, "c", (function() {
                return L
            })), n.d(t, "e", (function() {
                return R
            }));
            var o = n("Miz2"),
                r = n("VBdi"),
                i = n.n(r),
                a = n("fcxL"),
                s = n.n(a),
                c = n("d4yW"),
                l = n("mKat"),
                d = n("DBuU"),
                u = n("MwNz"),
                p = (n("0fTZ"), n("N4w9")),
                m = n("CiaY"),
                g = n("xAi6"),
                f = n("7tCN"),
                h = n("t19f"),
                v = n("9N7U"),
                b = n("dVLG");
            const y = function(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (n) {
                        const t = [];
                        return (null === e || void 0 === e ? void 0 : e.longform) && e.longform.map(e => {
                            var n, o;
                            (null === e || void 0 === e || null === (n = e.amp) || void 0 === n ? void 0 : n.scripts) && t.push(...null === e || void 0 === e || null === (o = e.amp) || void 0 === o ? void 0 : o.scripts)
                        }), t.map(e => {
                            const t = {
                                key: e.src,
                                src: e.src,
                                [e.extension_type]: e.type
                            };
                            return Object(b.c)("script", Object(o.a)({}, e.async ? {
                                async: ""
                            } : {}, t))
                        })
                    }
                    return (null === e || void 0 === e || null === (t = e.amp) || void 0 === t ? void 0 : t.scripts) ? e.amp.scripts.map(e => {
                        const t = {
                            key: e.src,
                            src: e.src,
                            [e.extension_type]: e.type
                        };
                        return Object(b.c)("script", Object(o.a)({}, e.async ? {
                            async: ""
                        } : {}, t))
                    }) : null
                },
                w = e => {
                    let {
                        src: t = "",
                        extension: n = "",
                        version: o = "latest"
                    } = e;
                    return t || `https://cdn.ampproject.org/v0/${n}-${o}.js`
                },
                A = e => "amphtml-header-boilerplate-" + e,
                _ = e => [Object(b.c)("meta", {
                    key: A("meta-charset"),
                    charSet: "utf-8"
                }), Object(b.c)("meta", {
                    key: A("meta-viewport"),
                    name: "viewport",
                    content: "width=device-width,minimum-scale=1,initial-scale=1"
                }), e ? Object(b.c)("link", {
                    key: A("canonical-link"),
                    rel: "canonical",
                    href: e
                }) : "", Object(b.c)("style", {
                    key: A("style"),
                    "amp-boilerplate": ""
                }, "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;\n\t\t\t\t\t-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}\n\t\t\t\t@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}\n\t\t\t\t@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}\n\t\t\t\t@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}\n\t\t\t\t"), Object(b.c)("noscript", {
                    key: A("noscript")
                }, "<style amp-boilerplate>\n\t\t\t\t\tbody{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}\n\t\t\t\t</style>\n\t\t\t\t")],
                E = (e, t) => {
                    var n, r;
                    if (!e || 0 === e.length) return null;
                    const i = null !== (n = null === t || void 0 === t || null === (r = t.amp) || void 0 === r ? void 0 : r.scripts) && void 0 !== n ? n : [];
                    return i.length && (e = e.filter(e => !i.find(t => {
                        var n, o;
                        return (null === (n = e.props) || void 0 === n || null === (o = n.specName) || void 0 === o ? void 0 : o.split(" ")[0]) === t.type
                    }))), e.map(e => {
                        var t, n, r;
                        const i = w({
                                src: e.props.src,
                                extension: null === (t = e.props) || void 0 === t ? void 0 : t.specName,
                                version: e.props.version
                            }),
                            a = {
                                src: w({
                                    src: e.props.src,
                                    extension: null === (n = e.props) || void 0 === n || null === (r = n.specName) || void 0 === r ? void 0 : r.split(" ")[0],
                                    version: e.props.version
                                })
                            };
                        var s, c;
                        e.props.src || (a["custom-element"] = null === (s = e.props) || void 0 === s || null === (c = s.specName) || void 0 === c ? void 0 : c.split(" ")[0]);
                        return Object(b.c)("script", Object(o.a)({}, e.props.async && {
                            async: ""
                        }, {
                            key: i
                        }, a))
                    })
                },
                O = function(e, t, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    const r = i.a.createElement(l.a, {
                        name: e,
                        slot: t,
                        incontentIndex: o,
                        postType: n
                    });
                    return s.a.renderToString(r)
                },
                j = function(e, t, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        r = arguments.length > 4 ? arguments[4] : void 0,
                        i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    const a = Object(v.getSlittedMarkup)(e),
                        s = a.length;
                    if (s < 2) a.push(O(t, n, r, o));
                    else if (s <= 6) a.splice(2, 0, O(t, n, r, o));
                    else if (!i)
                        for (let c = 3; c < s; c += 4) a.splice(c, 0, O(t, n, r, o++));
                    return a.join("")
                },
                T = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "source-featured-img";
                    const o = Object(h.a)(e.sourceUrl, e.width, e.height).find(e => "full" === e.crop);
                    if (!o) return null;
                    const r = u.a.get("FEATURED_SOURCE_DEFAULT_SIZE"),
                        i = u.a.get("FEATURED_SOURCE_LARGE_SIZE");
                    "image/svg+xml" === e.type && e.width && e.height && (o.width = e.width, o.height = e.height);
                    const a = "post-label__image" === n ? i : r;
                    "image/svg+xml" === e.type && e.width && e.height && (o.width = e.width, o.height = e.height);
                    const s = a.height,
                        c = o.width && o.height && (o.width / (o.height / s) || a.width);
                    return t ? Object(b.c)("amp-img", {
                        class: n,
                        height: s,
                        width: c,
                        src: o && (o.url || e.sourceUrl),
                        alt: null === e || void 0 === e ? void 0 : e.alt
                    }) : Object(b.c)("img", {
                        className: n,
                        height: s,
                        width: c,
                        src: o && (o.url || e.sourceUrl),
                        loading: "lazy",
                        alt: null === e || void 0 === e ? void 0 : e.alt
                    })
                },
                S = e => /<section/.test(e),
                P = function(e, t, n) {
                    var o;
                    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    const {
                        postType: a
                    } = e;
                    let l = null === (o = e.amp) || void 0 === o ? void 0 : o.markup;
                    const g = "ad-in-article",
                        h = Object(m.a)() ? u.a.get("AD_SLOTS").amp_incontent : a,
                        y = 1,
                        w = n ? ",AMP.scrollTo(id='wysiwyg', duration=0)" : "";
                    if (!l) return null;
                    try {
                        l = Object(f.l)(l)
                    } catch (A) {
                        console.error(A)
                    }
                    return !t || S(l) ? Object(b.c)(p.a.Consumer, null, t => Object(b.c)("div", {
                        className: "wysiwyg",
                        dangerouslySetInnerHTML: {
                            __html: Object(v.insertKeepReadingInMarkup)(i ? j(l, g, h, y, a) : l, s.a.renderToString(Object(b.c)(p.a.Provider, {
                                value: t
                            }, Object(b.c)(d.a, {
                                article: e,
                                isAmp: !0
                            }))))
                        }
                    })) : Object(b.c)(r.Fragment, null, n && Object(b.c)("div", {
                        "data-amp-bind-hidden": "showFullContent",
                        id: "wysiwyg",
                        className: "wysiwyg",
                        dangerouslySetInnerHTML: {
                            __html: n
                        }
                    }), Object(b.c)("div", {
                        "data-amp-bind-hidden": "showFullContent",
                        className: "article-content-read-more",
                        on: "tap:AMP.setState({showFullContent: !showFullContent})",
                        tabIndex: "0",
                        role: "button"
                    }, Object(b.c)(c.a, null, "Read more")), Object(b.c)("div", {
                        hidden: !0,
                        "data-amp-bind-hidden": "!showFullContent",
                        className: "wysiwyg",
                        dangerouslySetInnerHTML: {
                            __html: i ? j(l, g, h, y, a) : l
                        }
                    }), Object(b.c)("div", {
                        hidden: !0,
                        "data-amp-bind-hidden": "!showFullContent",
                        className: "article-content-read-more",
                        on: "tap:AMP.setState({showFullContent: !showFullContent})" + w,
                        tabIndex: "0",
                        role: "button"
                    }, Object(b.c)(c.a, null, "Read less")))
                },
                C = (e, t, n, o) => {
                    const r = {
                        "amp-video extension .js script": "0.1",
                        "amp-brightcove": "0.1",
                        "amp-bind": "0.1",
                        "amp-youtube": "0.1"
                    };
                    e || (r["amp-carousel"] = "0.2"), e && (r["amp-live-list"] = "0.1", Object(v.isConnatixEnabled)() && (r["amp-connatix-player"] = "0.1")), (null === o || void 0 === o ? void 0 : o.length) && o.forEach(e => r[e] = "0.1");
                    for (const c in r) t.addExtension({
                        extension: c,
                        version: r[c]
                    });
                    const i = t.getScriptElements(),
                        a = y(n, !e),
                        s = [...E(i, n)];
                    return a && s.push(...a), I(s)
                },
                I = e => {
                    const t = new Map;
                    return e.forEach(e => t.set(e.props.src, e)), Array.from(t.values())
                },
                k = (e, t) => {
                    let n = [];
                    return (null === t || void 0 === t ? void 0 : t.childrenAmpScripts) && (n = t.childrenAmpScripts.map(e => e.scripts.map(e => {
                        const t = {
                            key: e.src,
                            src: e.src,
                            [e.extension_type]: e.type
                        };
                        return Object(b.c)("script", Object(o.a)({}, e.async ? {
                            async: ""
                        } : {}, t))
                    })).flat()), n.length && (n = n.filter((e, t, n) => n.map(e => e.key).indexOf(e.key) === t), n = n.filter(t => !e.find(e => t.key === e.key))), [...e, ...n]
                },
                L = function(e, t, n) {
                    let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    const r = _(t ? Object(v.getAbsolutePostLink)(t, e) : null);
                    let i = [];
                    if (o) {
                        const e = C(!0, n, t);
                        i = k(e, t)
                    } else if (null === t || void 0 === t ? void 0 : t.longform)
                        if (t.longform.some((function(e) {
                                return e.type === g.LONG_FORM_MODULE_TYPES.TWO_COLUMN_STICKY_IMAGE_BLOCK && e.media.data.length > 1
                            }))) {
                            i = C(!1, n, t, ["amp-position-observer", "amp-animation"])
                        } else i = C(!1, n, t);
                    else {
                        const e = n.getScriptElements();
                        i = [...E(e, t)];
                        const o = y(t);
                        o && i.push(...o)
                    }
                    return {
                        articleBoilerplate: r,
                        scripts: i
                    }
                },
                R = e => ["post", "blog", "opinion", "news", "liveblog"].includes(e)
        },
        xAi6: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "SITE", (function() {
                return o
            })), n.d(t, "AMPLITUDE_ANALYTICS_CONFIGS_BY_SITE", (function() {
                return a
            })), n.d(t, "AMPLITUDE_EXPERIMENTS_BY_SITE", (function() {
                return s
            })), n.d(t, "ANALYTICS_META_PROPS", (function() {
                return c
            })), n.d(t, "VERTICAL_STORIES_SLOTS", (function() {
                return u
            })), n.d(t, "STORIFYME_SCRIPT", (function() {
                return p
            })), n.d(t, "DISCO_HEADLINER_WIDGET_SCRIPT", (function() {
                return m
            })), n.d(t, "DISCO_HEADLINER_WIDGET_ID", (function() {
                return g
            })), n.d(t, "FS_AD_UNIT_PREFIX", (function() {
                return h
            })), n.d(t, "AMP_AD_UNIT_PREFIX", (function() {
                return v
            })), n.d(t, "DEFAULT_POSTTYPES", (function() {
                return b
            })), n.d(t, "CARD_WITH_META_POSTTYPES", (function() {
                return y
            })), n.d(t, "AMP_SUPPORTED_SITES", (function() {
                return w
            })), n.d(t, "NOT_AMP_SUPPORTED_CONTENT", (function() {
                return A
            })), n.d(t, "DOMAIN_NAME", (function() {
                return _
            })), n.d(t, "AJA_AUDIO_LIVESTREAM", (function() {
                return E
            })), n.d(t, "AJE_AUDIO_LIVESTREAM", (function() {
                return O
            })), n.d(t, "SOCIAL_SERVICES", (function() {
                return j
            })), n.d(t, "TWITTER_ACCOUNT", (function() {
                return T
            })), n.d(t, "FACEBOOK_ACCOUNT", (function() {
                return S
            })), n.d(t, "SOCIAL_EMBED_SUPPORTED_SITES", (function() {
                return P
            })), n.d(t, "FEATURED_IMAGE_DEFAULT_SIZE", (function() {
                return C
            })), n.d(t, "DEFAULT_IMAGE_QUALITY_LEVEL", (function() {
                return I
            })), n.d(t, "MINIMUM_GOOGLE_DISCOVERY_WIDTH", (function() {
                return k
            })), n.d(t, "SEARCH_RESULTS_SORT_BY", (function() {
                return L
            })), n.d(t, "FEATURED_SOURCE_DEFAULT_SIZE", (function() {
                return R
            })), n.d(t, "FEATURED_SOURCE_LARGE_SIZE", (function() {
                return N
            })), n.d(t, "ANALYTICS_ACCOUNTS", (function() {
                return D
            })), n.d(t, "AMPLITUDE_EXPERIMENTS", (function() {
                return M
            })), n.d(t, "AMPLITUDE_ANALYTICS_CONFIGS", (function() {
                return x
            })), n.d(t, "AD_SLOTS", (function() {
                return U
            })), n.d(t, "NOT_NEWS_AJE", (function() {
                return z
            })), n.d(t, "AD_UNIT_PREFIX", (function() {
                return B
            })), n.d(t, "BLOOMBERG_LOGO_URL", (function() {
                return F
            })), n.d(t, "LATIN_FONT_FACES", (function() {
                return V
            })), n.d(t, "ARABIC_FONT_FACES", (function() {
                return G
            })), n.d(t, "CHINESE_FONT_FACES", (function() {
                return q
            })), n.d(t, "LONG_FORM_MODULE_TYPES", (function() {
                return W
            })), n.d(t, "LONG_FORM_MEDIA_TYPES", (function() {
                return Y
            })), n.d(t, "BYPASS_CONTENT_TYPES", (function() {
                return H
            })), n.d(t, "TAXONOMIES", (function() {
                return K
            })), n.d(t, "NEWSLETTER_TAXONOMIES", (function() {
                return J
            })), n.d(t, "BTF_RENDER_SCROLL_OFFSET", (function() {
                return $
            })), n.d(t, "HEADER_SCROLL_OFFSET", (function() {
                return X
            })), n.d(t, "HEADER_WITH_AD_SCROLL_OFFSET", (function() {
                return Z
            })), n.d(t, "DEFAULT_THROTTLE_WAIT", (function() {
                return Q
            })), n.d(t, "MENU_NAME_HEADER", (function() {
                return ee
            })), n.d(t, "MENU_NAME_FOOTER", (function() {
                return te
            })), n.d(t, "MENU_NAMES", (function() {
                return ne
            })), n.d(t, "LIVESTREAM_GA_LABELS", (function() {
                return oe
            })), n.d(t, "LIVESTREAM_AMPLITUDE_LINKS", (function() {
                return re
            })), n.d(t, "MAXIMIZED_HEADER_LOCATIONS", (function() {
                return ie
            })), n.d(t, "LOGO_HEADING_LOCATIONS", (function() {
                return ae
            })), n.d(t, "OPTA_WIDGET_WORLD_CUP_PAGE", (function() {
                return pe
            })), n.d(t, "OPTA_WIDGET_WORLD_CUP_PAGE_SDAPI_ID", (function() {
                return me
            })), n.d(t, "OPTA_WIDGET_SPORT_TYPES", (function() {
                return ge
            })), n.d(t, "OPTA_WIDGET_DYNAMIC_PARAMS", (function() {
                return ve
            })), n.d(t, "OLYMPICS_SPORT_FEATURE_FLAG", (function() {
                return Ae
            })), n.d(t, "OLYMPICS_SPORTS_IFRAME_WIDGET_BASE", (function() {
                return _e
            })), n.d(t, "MATCH_CENTER_FEATURE_FLAG", (function() {
                return Ee
            })), n.d(t, "OPTA_DYNAMIC_PAGE", (function() {
                return Oe
            })), n.d(t, "OPTA_MATCH_CENTER", (function() {
                return je
            })), n.d(t, "OPTA_MATCH_CENTER_TEAM_PAGE", (function() {
                return Te
            })), n.d(t, "OPTA_MATCH_CENTER_PLAYER_PAGE", (function() {
                return Se
            })), n.d(t, "OPTA_MATCH_CENTER_MATCH_PAGE", (function() {
                return Pe
            })), n.d(t, "OPTA_MATCH_LINK", (function() {
                return Ce
            })), n.d(t, "OPTA_TEAM_LINK", (function() {
                return Ie
            })), n.d(t, "OPTA_PLAYER_LINK", (function() {
                return ke
            })), n.d(t, "OPTA_WIDGET_CONFIG", (function() {
                return Le
            })), n.d(t, "OPTA_SETTINGS", (function() {
                return Re
            })), n.d(t, "OPTA_CRICKET_TEAM_LINK", (function() {
                return Ne
            })), n.d(t, "OPTA_CRICKET_PLAYER_LINK", (function() {
                return De
            })), n.d(t, "EVENTS_PAGES", (function() {
                return Me
            })), n.d(t, "EVENTS_SUB_PAGES_META_TITLES", (function() {
                return xe
            })), n.d(t, "EVENTS_SUB_PAGES_META_DESCRIPTIONS", (function() {
                return Ue
            })), n.d(t, "YOUTUBE_ORIGIN", (function() {
                return ze
            })), n.d(t, "YOUTUBE_PLAYER_STATE_ENDED", (function() {
                return Be
            })), n.d(t, "YOUTUBE_PLAYER_STATE_PLAYING", (function() {
                return Fe
            })), n.d(t, "YOUTUBE_PLAYER_STATE_PAUSED", (function() {
                return Ve
            })), n.d(t, "STORIFYME_HOMEPAGE_TERMS", (function() {
                return Ge
            })), n.d(t, "STORIFYME_HOMEPAGE_WIDGET", (function() {
                return qe
            })), n.d(t, "PROXY_DOMAIN", (function() {
                return We
            })), n.d(t, "AMPLITUDE_EVENT_PROPERTY_VALUES", (function() {
                return Ye
            })), n.d(t, "OPTA_ARTICLE_HEADER_FIXTURE_BY_SITE", (function() {
                return He
            })), n.d(t, "OPTA_ARTICLE_HEADER_FIXTURE", (function() {
                return Ke
            })), n.d(t, "STORIFYME_HOMEPAGE_TOP_AREA_WIDGET", (function() {
                return Je
            })), n.d(t, "MULTIPLE_NEWSLETTER_SIGNUP_TEMPLATE", (function() {
                return $e
            })), n.d(t, "STICKY_FOOTER_ADS_EXCLUDE_LIST_BY_SITE", (function() {
                return Xe
            })), n.d(t, "DEFAULT_1X1_ADS_EXCLUDE_LIST", (function() {
                return Ze
            })), n.d(t, "STICKY_FOOTER_ADS_EXCLUDE_LIST", (function() {
                return Qe
            })), n.d(t, "MAIN_DEEP_LINK_URL", (function() {
                return et
            })), n.d(t, "IS_APP_DOWNLOAD_BANNER_ENABLED", (function() {
                return tt
            })), n.d(t, "APP_BANNER_PROD_DOMAINS", (function() {
                return nt
            })), n.d(t, "PIP_SUPPORTED_CONTENT_TYPES", (function() {
                return ot
            })), n.d(t, "AUDIO_SHOW_ROUTE_BASE", (function() {
                return rt
            })), n.d(t, "BRIGHTCOVE_API_URL", (function() {
                return it
            })), n.d(t, "BRIGHTCOVE_IMA3_SERVERURL", (function() {
                return at
            })), n.d(t, "SPONSORED_PATH_NAME", (function() {
                return st
            })), n.d(t, "PAIDCONTENT_PATH_NAME", (function() {
                return ct
            })), n.d(t, "OMNY_NETWORK_IDS_BY_SITE", (function() {
                return lt
            })), n.d(t, "OMNY_NETWORK_ID", (function() {
                return dt
            })), n.d(t, "AMP_CONNATIX_CONFIG_BY_SITE", (function() {
                return ut
            })), n.d(t, "AMP_CONNATIX_CONFIG", (function() {
                return pt
            })), n.d(t, "UCMS_RECAPTCHA_SITE_KEY", (function() {
                return mt
            })), n.d(t, "ACCOUNTS_AND_PERSONALIZATION_CONTEXT_KEY", (function() {
                return gt
            })), n.d(t, "TOAST_TIMEOUT_MILISECONDS", (function() {
                return ft
            })), n.d(t, "VERIFY_LINK_EXPIRY_TIME_IN_HOURS", (function() {
                return ht
            })), n.d(t, "LEGACY_STATIC_SPORT_EVENTS", (function() {
                return vt
            })), n.d(t, "AMPLITUDE_AUDIO_EVENTS", (function() {
                return bt
            })), n.d(t, "YOUTUBE_URL_PREFIX", (function() {
                return yt
            })), n.d(t, "TV_BREAKING_PAGE_SHORT_URL_BY_SITE", (function() {
                return wt
            })), n.d(t, "TV_BREAKING_PAGE_SHORT_URL", (function() {
                return At
            })), n.d(t, "TV_BREAKING_PAGE_META_IMAGE_BY_SITE", (function() {
                return _t
            })), n.d(t, "TV_BREAKING_PAGE_META_IMAGE", (function() {
                return Et
            })), n.d(t, "DIANOMI_SETUP", (function() {
                return Ot
            })), n.d(t, "EU_COUNTRIES_CODE", (function() {
                return jt
            }));
            const o = "aje",
                r = {
                    aja: {
                        googleAnalytics4: {
                            production: "G-WFKEPR3HG4",
                            staging: "G-KZZ22K7L43"
                        },
                        chartbeat: "aljazeera.net"
                    },
                    aje: {
                        googleAnalytics4: {
                            production: "G-XN9JB9Q0M1",
                            staging: "G-4JE1QF5TX2"
                        },
                        chartbeat: "aljazeera.com"
                    },
                    ajb: {
                        googleAnalytics4: {
                            production: "G-3M8Q4YTZ5D",
                            staging: "G-714N0C15G3"
                        },
                        chartbeat: "balkans.aljazeera.net"
                    },
                    ajm: {
                        googleAnalytics4: {
                            production: "G-NM53RE0GG6",
                            staging: "G-G24T6KN5N2"
                        },
                        chartbeat: "aljazeeramubasher.net"
                    },
                    ajd: {
                        googleAnalytics4: {
                            production: "G-L9VJX5ND74",
                            staging: "G-MXMSH3F8PS"
                        },
                        chartbeat: "doc.aljazeera.net"
                    },
                    chinese: {
                        googleAnalytics4: {
                            production: "G-GHMSVDCBRB",
                            staging: "G-Q6RRP454VQ"
                        }
                    }
                },
                i = {
                    production: "9e2bdeb55f3924a7de5241aae43f1d77",
                    staging: "876a09767262a08d8ab98c0ebee864e3"
                },
                a = {
                    aje: {
                        analyticsAPIKeys: i,
                        experimentsClientID: {
                            production: "client-2a7j3lUCBjVbfJ2eytu93dyVh8SqyZpE",
                            staging: "client-rGYlJoBZBWRhUHFJhHSCIvycByLSmgyq"
                        }
                    },
                    aja: {
                        analyticsAPIKeys: i,
                        experimentsClientID: {
                            production: "client-QJ6K2L1UfW0BNG8XpeHTDkPvYVQrK5uu",
                            staging: "client-0nkcRVll5R4suF3RoBgqnFPFbPrySbZz"
                        }
                    },
                    ajb: {
                        analyticsAPIKeys: i,
                        experimentsClientID: {
                            production: "client-RfBNgnKTe9s4UGis53xtYx57IJcuaWZd",
                            staging: "client-DFadQUgOZoc5tqTSuXpRR389sm4RyVtX"
                        }
                    },
                    ajm: {
                        analyticsAPIKeys: i,
                        experimentsClientID: {
                            production: "client-mMnwf18EORYk5XSlNaZ626p96ihtUm10",
                            staging: "client-EWNimF1ov1bDPttWeSlWnXm5JdBFVbTP"
                        }
                    },
                    ajd: {
                        analyticsAPIKeys: i,
                        experimentsClientID: {
                            production: "client-omaXRgth6dPBA79e1RRAzRPfakwtI7yu",
                            staging: "client-fjbAZpNELp6DZXMCw0ttSVBQQWwnI6yi"
                        }
                    },
                    chinese: {
                        analyticsAPIKeys: i,
                        experimentsClientID: {
                            production: "client-ynGQmmiZIybpR9UniYhnBa3u4QmYwrxf",
                            staging: "client-F8o9FRlJwv5SQaXAWH08IuErdA8Djpmm"
                        }
                    }
                },
                s = {
                    aja: {
                        inArticlePlaylist: {
                            production: "playlistinarticlepages",
                            staging: "playlistinarticlepages"
                        },
                        articlePageTrendingMenu: {
                            production: "trendingmenuarticlepageaja",
                            staging: "trendingmenuarticlepageaja"
                        },
                        homepageForYou: {
                            production: "ucms-aja-for-you-module",
                            staging: "ucms-aja-for-you-module"
                        }
                    },
                    ajm: {},
                    aje: {
                        audioHubLink: {
                            production: "aje-podcast-header-icon-experiment",
                            staging: "aje-podcast-header-icon-experiment"
                        },
                        inArticlePlaylist: {
                            production: "playlistinarticlepagesaje",
                            staging: "playlistinarticlepagesaje"
                        },
                        homepageForYou: {
                            production: "ucms-aje-for-you-module",
                            staging: "ucms-aje-for-you-module"
                        },
                        articleRecommended: {
                            production: "ucms-aje-for-you-recirculation-source-anonymous",
                            staging: "ucms-aje-for-you-recirculation-source-anonymous"
                        },
                        articleRecommendedForYou: {
                            production: "ucms-aje-for-you-recirculation-source-signed-in",
                            staging: "ucms-aje-for-you-recirculation-source-signed-in"
                        },
                        articlePageTrendingMenu: {
                            production: "trendingmenuarticlepageaje",
                            staging: "trendingmenuarticlepageaje"
                        },
                        homepageVerticalVideos: {
                            production: "aje-vertical-videos-on-homepage",
                            staging: "aje-vertical-videos-on-homepage"
                        },
                        articlePageAutomatedRelatedArticles: {
                            production: "automated-related-articles",
                            staging: "automated-related-articles"
                        }
                    },
                    ajb: {}
                },
                c = {
                    siteSection: {
                        homePage: "Homepage",
                        programs: "Programs",
                        videos: "Videos",
                        myAccount: "My Account",
                        blog: "Blog",
                        midan: "Midan",
                        sports: "Sports",
                        readingList: "Reading List",
                        livestream: "Livestream"
                    },
                    siteModule: {
                        featured: "Featured",
                        feed: "Feed",
                        watchTopVideos: "Watch top videos",
                        secondColumn: "2nd column",
                        thirdColumn: "3rd column",
                        forYou: "For You",
                        verticalVideos: "Vertical Videos"
                    },
                    recirculationSource: {
                        watchTopVideos: "Watch top videos",
                        verticalVideos: "Watch vertical videos",
                        forYou: "For You"
                    },
                    section: {
                        myAccount: "My Account"
                    }
                },
                l = {
                    publisher: "",
                    leaderboard_atf: "horizontal",
                    leaderboard_atf_2: "horizontalSmall",
                    leaderboard_live: "horizontal",
                    leaderboard_mid: "leaderboardMid",
                    right_rail: "boxOrVertical",
                    right_rail_live: "mobile",
                    incontent: "mobile",
                    amp_leaderboard: "gallery",
                    amp_mobile_video: "gallery",
                    amp_incontent: "gallery/prefooter",
                    wallpaper: "wallpaper"
                },
                d = {
                    aje: {
                        publisher: "aljazeera-com",
                        leaderboard_atf: "aljazeera_leaderboard_atf",
                        leaderboard_atf_2: "aljazeera_leaderboard_atf_2",
                        leaderboard_live: "aljazeera_leaderboard_live_atf",
                        leaderboard_mid: "aljazeera_leaderboard_mid",
                        right_rail: "aljazeera_right_rail",
                        right_rail_live: "aljazeera_right_rail_live",
                        incontent: "aljazeera_incontent_",
                        liveblog: "aljazeera_incontent_LiveBlog",
                        footer: "aljazeera_footer",
                        in_article: "aljazeera_incontent_",
                        wallpaper: "aljazeera_1x1",
                        amp_leaderboard: "FS-Aljazeera.com-AMP/AMP",
                        amp_mobile_video: "FS-Aljazeera.com-AMP/AMP",
                        amp_incontent: "FS-Aljazeera.com-AMP/AMP",
                        amp_sticky: "FS-Aljazeera.com-AMP/AMP-Sticky",
                        amp_flying_carpet: "FS-Aljazeera.com-AMP/AMP-FlyingCarpet",
                        sponsored: "aljazeera_300x120_spon",
                        one_pixel: "aljazeera_1x1"
                    },
                    aja: {
                        publisher: "aljazeera-net",
                        leaderboard_atf: "aljazeeranet_leaderboard_atf",
                        leaderboard_atf_2: "aljazeeranet_leaderboard_atf_2",
                        leaderboard_live: "aljazeeranet_leaderboard_atf",
                        leaderboard_mid: "aljazeeranet_leaderboard_mid",
                        right_rail: "aljazeeranet_left_sticky",
                        right_rail_live: "aljazeeranet_left_rail_live",
                        incontent: "aljazeeranet_incontent_",
                        liveblog: "aljazeeranet_incontent_LiveBlog",
                        footer: "aljazeeranet_footer",
                        in_article: "aljazeeranet_incontent_",
                        wallpaper: "aljazeeranet_1x1",
                        amp_leaderboard: "FS-Aljazeera.net-AMP/AMP",
                        amp_mobile_video: "FS-Aljazeera.net-AMP/AMP",
                        amp_incontent: "FS-Aljazeera.net-AMP/AMP",
                        amp_sticky: "FS-Aljazeera.net-AMP/AMP-Sticky",
                        amp_flying_carpet: "FS-Aljazeera.net-AMP/AMP-FlyingCarpet",
                        sponsored: "aljazeeranet_300x120_spon",
                        one_pixel: "aljazeeranet_1x1"
                    },
                    ajb: l,
                    ajm: l,
                    ajd: l,
                    chinese: l
                },
                u = {
                    HOMEPAGE: "homepage",
                    WORLD_CUP_PAGE: "world_cup_page"
                },
                p = "https://cdn.storifyme.com/static/web-components/storifyme-elements.min.js",
                m = "https://disco.headliner.link/episode/d/aljazeera/web/static/js/widget.js",
                g = "WI_clp8s5c2f00000pmsevfdwpo9",
                f = ["/", "/index.html"],
                h = "/15184186/",
                v = "/15188745,5287/",
                b = ["blog", "episode", "opinion", "post", "video", "external-article", "gallery", "podcast", "longform", "liveblog"],
                y = ["blog", "opinion", "video", "episode", "gallery"],
                w = ["aja", "aje", "ajm", "ajb", "ajd"],
                A = ["podcast"],
                _ = "www.aljazeera.net",
                E = "http://listen.aljazeera.com/arabic/livestream?utm_source=AJA_website&utm_medium=livestream",
                O = "http://listen.aljazeera.com/english/livestream?utm_source=AJE_website&utm_medium=livestream",
                j = {
                    chinese: ["douban", "weibo", "wechat", "copylink"]
                }[o] || ["facebook", "twitter", "whatsapp", "copylink"],
                T = {
                    aja: {
                        account: "AJArabicnet"
                    },
                    aje: {
                        account: "AJEnglish"
                    },
                    chinese: {
                        account: ""
                    },
                    ajm: {
                        account: "AJMubasher"
                    },
                    ajd: {
                        account: "Aljazeeradoc"
                    },
                    ajb: {
                        account: "AJBalkans"
                    }
                }[o].account,
                S = {
                    aja: {
                        account: "688963032026942"
                    },
                    aje: {
                        account: "2611378345792696"
                    },
                    chinese: {
                        account: ""
                    },
                    ajm: {
                        account: "670629946902679"
                    },
                    ajd: {
                        account: ""
                    },
                    ajb: {
                        account: "156026495991990"
                    }
                }[o].account,
                P = ["aja", "aje", "ajm", "ajb", "ajd"],
                C = {
                    width: 1200,
                    height: 675
                },
                I = 80,
                k = 1200,
                L = {
                    RELEVANCE: "relevance",
                    DATE: "date"
                },
                R = {
                    width: 280,
                    height: 20
                },
                N = {
                    width: 420,
                    height: 22.5
                },
                D = r[o],
                M = s[o],
                x = a[o],
                U = d[o],
                z = ["features", "opinion", "video", "episode", "gallery", "blog", "tv shows", "news feed", "documentary", "digital series", "podcasts", "in pictures", "by the numbers"],
                B = {
                    aje: "/5287/aljazeera_EN/",
                    aja: "/5287/aljazeera_AR/",
                    ajb: "/5287/aljazeera_balkans/",
                    ajm: "/5287/aljazeera_mubasher/",
                    ajd: "/5287/aljazeera_DC/",
                    chinese: "/5287/aljazeera_china/"
                }[o],
                F = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    APPLICATION_ENV: "production",
                    BRIGHTCOVE_ENV: "production",
                    ONESIGNAL_CONFIG: {
                        appId: "fb3606cf-1b0a-44e7-b314-9c4173ac1b5e",
                        safariWebId: "web.onesignal.auto.477dedc8-8bcf-40fd-b64c-238033111672"
                    },
                    REACT_APP_APPCHECK_DEBUG_TOKEN_AJA: "",
                    REACT_APP_APPCHECK_DEBUG_TOKEN_AJB: "",
                    REACT_APP_APPCHECK_DEBUG_TOKEN_AJD: "",
                    REACT_APP_APPCHECK_DEBUG_TOKEN_AJE: "",
                    REACT_APP_APPCHECK_DEBUG_TOKEN_AJM: "",
                    REACT_APP_ENVIRONMENT: "production",
                    REACT_APP_SITE: "aje",
                    REACT_APP_APPCHECK_DEBUG_TOKEN_CHINESE: "",
                    REACT_APP_OPTA_SCRIPT_VERSION: "v14",
                    REACT_APP_OPTA_STYLES_VERSION: "v30"
                }).BLOOMBERG_LOGO_URL || "https://www.aljazeera.com/wp-content/uploads/2020/09/bloomberg-1-1.png",
                V = [{
                    fontFamily: "Roboto",
                    src: "local('Roboto-Light'),\n\t\turl('/static/media/Roboto-Light.56ecfc67.woff2') format('woff2'),\n\t\turl('/static/media/Roboto-Light.f4b08b5a.woff') format('woff'),\n\t\turl('/static/media/Roboto-Light.56ecfc67.ttf') format('truetype')",
                    fontWeight: 300,
                    fontStyle: "normal"
                }, {
                    fontFamily: "Roboto",
                    src: "local('Roboto-Regular'),\n\t\turl('/static/media/Roboto-Regular.c5bf51b6.woff2') format('woff2'),\n\t\turl('/static/media/Roboto-Regular.d679a906.woff') format('woff'),\n\t\turl('/static/media/Roboto-Regular.2cc6fa74.ttf') format('truetype')",
                    fontWeight: 400,
                    fontStyle: "normal"
                }, {
                    fontFamily: "Roboto",
                    src: "local('Roboto-Medium'),\n\t\turl('/static/media/Roboto-Medium.15431381.woff2') format('woff2'),\n\t\turl('/static/media/Roboto-Medium.3d9446f2.woff') format('woff'),\n\t\turl('/static/media/Roboto-Medium.cc5cf8a6.ttf') format('truetype')",
                    fontWeight: 500,
                    fontStyle: "normal"
                }, {
                    fontFamily: "Roboto",
                    src: "local('Roboto-Bold'),\n\t\turl('/static/media/Roboto-Bold.52bb58c8.woff2') format('woff2'),\n\t\turl('/static/media/Roboto-Bold.d0cc855e.woff') format('woff'),\n\t\turl('/static/media/Roboto-Bold.a38acd56.ttf') format('truetype')",
                    fontWeight: 700,
                    fontStyle: "normal"
                }, {
                    fontFamily: "Roboto",
                    src: "local('Roboto-Black'),\n\t\turl('/static/media/Roboto-Black.d8e97377.woff2') format('woff2'),\n\t\turl('/static/media/Roboto-Black.51db4691.woff') format('woff'),\n\t\turl('/static/media/Roboto-Black.e58338c5.ttf') format('truetype')",
                    fontWeight: 900,
                    fontStyle: "normal"
                }],
                G = [{
                    fontFamily: "Al-Jazeera",
                    src: "local('Al Jazeera-Light'), local('Al-Jazeera-Light'),\n\t\turl('/static/media/Al-Jazeera-Light.b09a8096.woff2') format('woff2'),\n\t\turl('/static/media/Al-Jazeera-Light.2f720b80.woff') format('woff'),\n\t\turl('/static/media/Al-Jazeera-Light.07d7566e.ttf') format('truetype')",
                    fontWeight: 200,
                    fontStyle: "normal"
                }, {
                    fontFamily: "Al-Jazeera",
                    src: "local('Al Jazeera-Regular'), local('Al-Jazeera-Regular'),\n\t\turl('/static/media/Al-Jazeera-Regular.0112de0f.woff2') format('woff2'),\n\t\turl('/static/media/Al-Jazeera-Regular.2cd07546.woff') format('woff'),\n\t\turl('/static/media/Al-Jazeera-Regular.cfa554fd.ttf') format('truetype')",
                    fontWeight: 400,
                    fontStyle: "normal"
                }, {
                    fontFamily: "Al-Jazeera",
                    src: "local('Al Jazeera-Bold'), local('Al-Jazeera-Bold'),\n\t\turl('/static/media/Al-Jazeera-Bold.3301c4f5.woff2') format('woff2'),\n\t\turl('/static/media/Al-Jazeera-Bold.42f718d7.woff') format('woff'),\n\t\turl('/static/media/Al-Jazeera-Bold.281c7cf6.ttf') format('truetype')",
                    fontWeight: 700,
                    fontStyle: "normal"
                }, {
                    fontFamily: "Al-Jazeera",
                    src: "local('Al Jazeera-Heavy'), local('Al-Jazeera-Heavy'),\n\t\turl('/static/media/Al-Jazeera-Heavy.3baf54b4.woff2') format('woff2'),\n\t\turl('/static/media/Al-Jazeera-Heavy.91a092fe.woff') format('woff'),\n\t\turl('/static/media/Al-Jazeera-Heavy.93289640.ttf') format('truetype')",
                    fontWeight: 900,
                    fontStyle: "normal"
                }],
                q = [{
                    fontFamily: "Noto Sans SC",
                    fontStyle: "normal",
                    fontWeight: 400,
                    src: 'local( "Noto Sans SC Regular" ),\n\t\tlocal( "NotoSansSC-Regular" ),\n\t\turl( "/static/media/NotoSansSC-Regular.ac932a09.woff2" ) format( "woff2" ),\n\t\turl( "/static/media/NotoSansSC-Regular.609a1eb4.woff" ) format( "woff" )'
                }, {
                    fontFamily: "Noto Sans SC",
                    fontStyle: "normal",
                    fontWeight: 200,
                    src: 'local( "Noto Sans SC Light" ),\n\t\tlocal( "NotoSansSC-Light" ),\n\t\turl( "/static/media/NotoSansSC-Light.8bb876ed.woff2" ) format( "woff2" ),\n\t\turl( "/static/media/NotoSansSC-Light.7bf9cae1.woff" ) format( "woff" )'
                }, {
                    fontFamily: "Noto Sans SC",
                    fontStyle: "normal",
                    fontWeight: 500,
                    src: 'local( "Noto Sans SC Medium" ),\n\t\tlocal( "NotoSansSC-Medium" ),\n\t\turl( "/static/media/NotoSansSC-Medium.f5cb9fef.woff2" ) format( "woff2" ),\n\t\turl( "/static/media/NotoSansSC-Medium.106ad721.woff" ) format( "woff" )'
                }],
                W = {
                    HERO_BLOCK: "hero_block",
                    TEXT_BLOCK: "text_block",
                    TWO_COLUMN_STICKY_IMAGE_BLOCK: "two_column_sticky_image_block",
                    FULLSCREEN_MULTI_IMAGE_BLOCK: "fullscreen_multi_image_block",
                    HORIZONTAL_WIPE_BLOCK: "horizontal_wipe_block",
                    FULLSCREEN_VIDEO_BLOCK: "fullscreen_video_block",
                    IMAGE_GALLERY_CAROUSEL_BLOCK: "image_gallery_carousel_block",
                    GALLERY_CAROUSEL_BLOCK: "gallery_carousel_block",
                    AUTHOR_INFO_BLOCK: "author_info_block",
                    WIDE_EMBED_BLOCK: "wide_embed_block"
                },
                Y = {
                    VIDEO_DESKTOP: "VIDEO_DESKTOP",
                    IMAGE_DESKTOP: "IMAGE_DESKTOP",
                    IMAGE_MOBILE: "IMAGE_MOBILE",
                    VIDEO_RAW_DESKTOP: "VIDEO_RAW_DESKTOP",
                    VIDEO_BC_DESKTOP: "VIDEO_BC_DESKTOP"
                },
                H = {
                    MAIN: "main-content-area",
                    FEATURED: "featured-news-container",
                    FEED: "news-feed-container",
                    MOST_READ: "most-read-container",
                    TRENDING_VIDEOS: "trending-videos-container",
                    LIVE_PLAYER: "live-player-container",
                    DAILY_BRIEF_CTA: "daily-brief-cta"
                },
                K = {
                    aja: ["categories", "where", "tags", "midan"],
                    ajb: ["categories", "tags", "where"],
                    chinese: ["categories", "where"],
                    ajm: ["categories", "tags", "where"],
                    ajd: ["categories", "tags", "where"],
                    aje: ["categories", "tags", "where"]
                }[o],
                J = ["categories", "where", "tags"],
                $ = 5,
                X = 40,
                Z = 249,
                Q = 250,
                ee = "header",
                te = "footer",
                ne = [ee, te],
                oe = {
                    LIVESTREAM_WIDGET: "Livestream Widget",
                    LIVESTREAM_QID: "Livestream QID",
                    LIVESTREAM_PAGE: "Livestream Page",
                    LIVESTREAM_FEATURED: "Livestream Featured",
                    LIVESTREAM_TAKEOVER: "Takeover Livestream",
                    LIVESTREAM_LIVEBLOG: "Liveblog Article"
                },
                re = {
                    LIVESTREAM_HOMEPAGE: "/live"
                },
                ie = f,
                ae = f,
                se = null !== "production" ? "production" : "staging",
                ce = {
                    competition: ["2kwbbcootiqqgmrzs6o5inle5", "4oogyu6o156iphvdvphwpck10", "4c1nfi2j1m731hcay25fcgndq", "c7b8o53flg36wbuevfzy3lb10", "34pl8szyvrbwcmfkuocjm3r6t", "6by3h89i2eykc341oz7lv1ddd", "1r097lpxe0xn03ihb7wi98kao", "dm5ka0os1e3dxcp3vh05kmp33"].join(","),
                    season: ["1jt5mxgn4q5r6mknmlqv5qjh0", "eaf2z13av1rs0jbwnnxfapdec", "bctg6dnkles7ifr5yitpxkmxg", "3cbstblezc952hfrj9ov2gq38", "48s5gykssujtl4derer2njfv8", "9b9nvvpz477r8yrzmorx8w6qc", "3r8v8kb4vebxrtcj5d7ofk1zo", "bew0mp74n9712w9ns3dsxrf2s"].join(",")
                },
                le = {
                    competition: ["68zplepppndhl8bfdvgy9vgu1", "3aa4mumjl6zyetg6o9hwd5hhx", "40yjcbx2sq6oq736iqqqczwt1", "2hj3286pqov1g1g59k2t2qcgm", "2kwbbcootiqqgmrzs6o5inle5", "8tddm56zbasf57jkkay4kbf11", "39q1hq42hxjfylxb7xpe9bvf9", "595nsvo7ykvoe690b1e4u5n56", "4oogyu6o156iphvdvphwpck10", "4c1nfi2j1m731hcay25fcgndq", "dm5ka0os1e3dxcp3vh05kmp33", "6by3h89i2eykc341oz7lv1ddd", "486rhdgz7yc0sygziht7hje65", "bt104r4nsjznxitfaqpc8j09s", "1r097lpxe0xn03ihb7wi98kao", "3oga7yqhqdo6suxiz5zpm7g69", "3a0j0giz3c3ajw9h59evv7lqt", "34pl8szyvrbwcmfkuocjm3r6t", "sd8z02fe455z2fjvlxvxh0zo", "apdwh753fupxheygs8seahh7x", "70excpe1synn9kadnbppahdn7", "cmvff99i4w10udooqckzt8c2x", "39fbqm5w9yu86agk4g5mkxl1x", "8x62utr2uti3i7kk14isbnip6", "cjmdp7ds2hanz0r7kdifi0tsl", "9qzn8cs96sgtqmesa9gpfti23"].join(","),
                    season: ["1z35p4iuhfxxdfaqjwzkqn2fo", "9ghm6cuz03lcz4fg8jl3n1uz8", "8rlm9tgxmr9acaidre79xsjdg", "7tzwu97mwe06d11vihn0ddx5g", "9n12waklv005j8r32sfjj2eqc", "7zsd7ws7bx86vpok058qt8lxw", "cscd2arb9anef4wya15c3djbo", "3r70u3fqh4hthsa2j4hsefis", "bam3j6qs1v79osuz7nwgy4rh0", "ejcp3vqc3ac7q66lowlv41ixg", "a7htj8rtzib7a2xx7b3xs04d0", "73zebisnu1109jix9yoc09yc4", "1v1vssqcen1viky2el7ka2sd0", "jpsokoe79qsnl04bl5lcik2c", "b25u56idqlgo8s1rahhltqd5g", "rjoxh45u70om4lp6oug2n0us", "excflxj3ypj69gf2wlx7kpudw", "4x7uzww3jur4re7sgt3mslyj8", "3aivd8g3glzwua1l9lifh79w", "8xdpm013ubhszzhxydmpq3wno", "873cbl9cd9butm4air0mugxzo", "5reu9zdgtw64f4z0e7x8w80t0", "8lwv4seidzl88u8yha4mbxuc", "2mx6ugr72r1384co4oeypeln8", "amwnmnzxo80o9tlphiw060pas", "29zsxhd1nh3q4yj375z1pi80k"].join(",")
                },
                de = {
                    competition: ["2kwbbcootiqqgmrzs6o5inle5", "8tddm56zbasf57jkkay4kbf11", "a0f4gtru0oyxmpvty4thc5qkc", "39q1hq42hxjfylxb7xpe9bvf9", "595nsvo7ykvoe690b1e4u5n56", "4oogyu6o156iphvdvphwpck10", "c7b8o53flg36wbuevfzy3lb10", "4c1nfi2j1m731hcay25fcgndq", "dm5ka0os1e3dxcp3vh05kmp33", "6by3h89i2eykc341oz7lv1ddd", "1r097lpxe0xn03ihb7wi98kao", "34pl8szyvrbwcmfkuocjm3r6t", "9qzn8cs96sgtqmesa9gpfti23"].join(","),
                    season: ["9n12waklv005j8r32sfjj2eqc", "7zsd7ws7bx86vpok058qt8lxw", "4rbs6ubspu2ym7bg6kt1gtuz8", "cscd2arb9anef4wya15c3djbo", "3r70u3fqh4hthsa2j4hsefis", "bam3j6qs1v79osuz7nwgy4rh0", "cc4kfcd13e029cj3nawmm0hec", "ejcp3vqc3ac7q66lowlv41ixg", "a7htj8rtzib7a2xx7b3xs04d0", "73zebisnu1109jix9yoc09yc4", "b25u56idqlgo8s1rahhltqd5g", "4x7uzww3jur4re7sgt3mslyj8", "29zsxhd1nh3q4yj375z1pi80k"].join(",")
                },
                ue = {
                    competition: ["8tddm56zbasf57jkkay4kbf11", "45db8orh1qttbsqq9hqapmbit"].join(","),
                    season: ["4lp7vq583c95jwjhaohqbl9g4", "5te8vskbhb3t1n687hua2waac"].join(",")
                },
                pe = {
                    competition: "4",
                    season: "2022"
                },
                me = {
                    competition: "70excpe1synn9kadnbppahdn7",
                    season: "2a8elwzsufmguwymxbshcx756"
                },
                ge = {
                    cricket: "cricket",
                    football: "football"
                },
                fe = {
                    worldCup: me,
                    sportsPage: ce
                },
                he = {
                    worldCup: me,
                    sportsPage: ce
                },
                ve = {
                    production: {
                        aja: {
                            worldCup: me,
                            sportsPage: ue
                        },
                        ajb: {
                            worldCup: me,
                            sportsPage: de
                        },
                        chinese: fe,
                        ajd: fe,
                        aje: {
                            worldCup: me,
                            sportsPage: le
                        },
                        ajm: fe
                    },
                    staging: {
                        aja: {
                            worldCup: pe,
                            sportsPage: ue
                        },
                        ajb: {
                            worldCup: me,
                            sportsPage: de
                        },
                        chinese: he,
                        ajd: he,
                        aje: {
                            worldCup: me,
                            sportsPage: le
                        },
                        ajm: he
                    }
                }[se][o],
                be = "https://secure.widget.cloud.opta.net/v3/v3.opta-widgets.js",
                ye = "https://secure.widget.cloud.opta.net/v3/css/v3.all.opta-widgets.css",
                we = "https://secure.widget.cloud.opta.net/v3/css/v3.rtl.opta-widgets.css",
                Ae = "stats-perform/olympics-24",
                _e = "https://api.olympics.statsperform.com/aljazeera-gb74c6d9e0f2/content/en",
                Ee = "stats-perform/status",
                Oe = "/liveblog-match",
                je = "/match-center",
                Te = "team",
                Se = "player",
                Pe = "match",
                Ce = Oe,
                Ie = `${je}/${Te}`,
                ke = `${je}/${Se}`,
                Le = {
                    aja: {
                        language: "ar_SA",
                        script: be,
                        ltr_stylesheet: ye,
                        rtl_stylesheet: we,
                        OPTA_WORLD_CUP_URI: ["/\u0643\u0623\u0633-\u0627\u0644\u0639\u0627\u0644\u0645-\u0642\u0637\u0631-2022/"],
                        OPTA_CRICKET_WORLD_CUP_URI: []
                    },
                    ajb: {
                        language: "hr_BA",
                        script: be,
                        ltr_stylesheet: ye,
                        OPTA_WORLD_CUP_URI: ["/tag/katar-2022"],
                        OPTA_CRICKET_WORLD_CUP_URI: []
                    },
                    chinese: {
                        language: "zh_CN",
                        script: be,
                        ltr_stylesheet: ye,
                        OPTA_WORLD_CUP_URI: ["/sport-culture/sport/qatar-2022-world-cup/"],
                        OPTA_CRICKET_WORLD_CUP_URI: []
                    },
                    ajd: {
                        language: "ar_SA",
                        script: be,
                        ltr_stylesheet: ye,
                        rtl_stylesheet: we,
                        OPTA_WORLD_CUP_URI: [],
                        OPTA_CRICKET_WORLD_CUP_URI: []
                    },
                    aje: {
                        language: "en_GB",
                        script: be,
                        ltr_stylesheet: ye,
                        OPTA_WORLD_CUP_URI: ["/tag/qatar-2022/"],
                        OPTA_CRICKET_WORLD_CUP_URI: ["/icc-cricket-world-cup/"]
                    },
                    ajm: {
                        language: "ar_SA",
                        script: be,
                        ltr_stylesheet: ye,
                        rtl_stylesheet: we,
                        OPTA_WORLD_CUP_URI: ["/tag/world-cup-2022/"],
                        OPTA_CRICKET_WORLD_CUP_URI: []
                    }
                }[o],
                Re = {
                    subscription_id: "6f36c249c3f44cb76a329d2e534eb33c",
                    language: Le.language,
                    timezone: "user",
                    opta_tracking: !1
                },
                Ne = `${je}/${Te}?sport=${ge.cricket}`,
                De = `${je}/${Se}?sport=${ge.cricket}`,
                Me = {
                    aja: {
                        WORLD_CUP_2022: {
                            mainUrl: "\u0643\u0623\u0633-\u0627\u0644\u0639\u0627\u0644\u0645-\u0642\u0637\u0631-2022",
                            teamsUrl: "\u0627\u0644\u0645\u0646\u062a\u062e\u0628\u0627\u062a",
                            bracketsUrl: "\u0627\u0644\u0623\u062f\u0648\u0627\u0631-\u0627\u0644\u0625\u0642\u0635\u0627\u0626\u064a\u0629",
                            fixturesUrl: "\u062c\u062f\u0648\u0644-\u0645\u0628\u0627\u0631\u064a\u0627\u062a",
                            menuSlug: "wc2022event",
                            querySlug: "\u0643\u0623\u0633-\u0627\u0644\u0639\u0627\u0644\u0645-\u0642\u0637\u0631-2022"
                        }
                    },
                    ajb: {
                        WORLD_CUP_2022: {
                            mainUrl: "katar-2022",
                            teamsUrl: "timovi",
                            bracketsUrl: "raspored",
                            fixturesUrl: "raspored-svjetskog-prvenstva",
                            menuSlug: "wc2022event",
                            querySlug: "katar-2022"
                        }
                    },
                    chinese: {
                        WORLD_CUP_2022: {
                            mainUrl: "qatar-world-cup-2022",
                            teamsUrl: "teams",
                            bracketsUrl: "brackets",
                            fixturesUrl: "fixtures",
                            menuSlug: "wc2022event",
                            querySlug: "qatar-world-cup-2022"
                        }
                    },
                    ajd: {
                        WORLD_CUP_2022: {
                            mainUrl: "qatar-world-cup-2022",
                            teamsUrl: "teams",
                            bracketsUrl: "brackets",
                            fixturesUrl: "fixtures",
                            menuSlug: "wc2022event",
                            querySlug: "qatar-world-cup-2022"
                        }
                    },
                    aje: {
                        WORLD_CUP_2022: {
                            mainUrl: "qatar-world-cup-2022",
                            teamsUrl: "teams",
                            bracketsUrl: "brackets",
                            fixturesUrl: "fixtures",
                            menuSlug: "wc2022event",
                            querySlug: "qatar-world-cup-2022"
                        },
                        WOMEN_WORLD_CUP_2023: {
                            mainUrl: "womens-world-cup-2023",
                            teamsUrl: "teams",
                            bracketsUrl: "brackets",
                            fixturesUrl: "fixtures",
                            menuSlug: "womenWC2023",
                            querySlug: "womens-world-cup-2023",
                            bannerHeading: "Women's World Cup 2023",
                            optaCompetitionID: "8x62utr2uti3i7kk14isbnip6",
                            optaSeasonID: "5mqc55tieqhbz2sech0fp70bu",
                            optaCompetitionIDNumeric: "408"
                        },
                        ICC_CRICKET_WORLD_CUP_2023: {
                            mainUrl: "icc-cricket-world-cup",
                            menuSlug: "iccCricketWorldCup",
                            querySlug: "icc-cricket-world-cup",
                            optaCompetitionID: "3235",
                            optaSeasonID: "0"
                        }
                    },
                    ajm: {
                        WORLD_CUP_2022: {
                            mainUrl: "world-cup-qatar-2022",
                            teamsUrl: "teams",
                            bracketsUrl: "brackets",
                            fixturesUrl: "fixtures",
                            menuSlug: "wc2022event",
                            querySlug: "world-cup-qatar-2022"
                        }
                    }
                }[o],
                xe = {
                    aja: {
                        football: {
                            teams: "\u062c\u062f\u0648\u0644 \u0645\u0628\u0627\u0631\u064a\u0627\u062a \u0627\u0644\u0623\u062f\u0648\u0627\u0631 \u0627\u0644\u0625\u0642\u0635\u0627\u0626\u064a\u0629 \u0644\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645 2022 \u0641\u064a \u0642\u0637\u0631",
                            brackets: "\u062c\u062f\u0648\u0644 \u0645\u0628\u0627\u0631\u064a\u0627\u062a \u0627\u0644\u0623\u062f\u0648\u0627\u0631 \u0627\u0644\u0625\u0642\u0635\u0627\u0626\u064a\u0629 \u0627\u0644\u0639\u0627\u0644\u0645 2022 \u0641\u064a \u0642\u0637\u0631",
                            fixtures: "\u062c\u062f\u0648\u0644 \u0645\u0628\u0627\u0631\u064a\u0627\u062a \u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645",
                            banner: {
                                heading: "\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645 \u0642\u0637\u0631 2022"
                            }
                        }
                    },
                    ajb: {
                        football: {
                            teams: "Timovi",
                            brackets: "Nokaut faza",
                            fixtures: "Raspored Svjetskog prvenstva",
                            banner: {
                                heading: "Katar 2022"
                            }
                        }
                    },
                    chinese: {
                        football: {
                            teams: "World Cup Teams: \u7403\u961f",
                            brackets: "World Cup Brackets: \u664b\u7ea7\u8d5b",
                            fixtures: "\u4e16\u754c\u676f\u8d5b\u7a0b",
                            banner: {
                                heading: "2022\u5361\u5854\u5c14\u4e16\u754c\u676f"
                            }
                        }
                    },
                    ajd: {
                        football: {
                            teams: "Teams",
                            brackets: "Brackets",
                            fixtures: "World cup 2022 fixtures",
                            banner: {
                                heading: "Qatar 2022 World Cup"
                            }
                        }
                    },
                    aje: {
                        football: {
                            teams: "World Cup Teams",
                            brackets: "World Cup Brackets",
                            fixtures: "World Cup Fixtures",
                            banner: {
                                heading: "Qatar World Cup 2022"
                            }
                        },
                        cricket: {
                            matches: "ICC Cricket World Cup Matches",
                            standings: "ICC Cricket World Cup Standings",
                            banner: {
                                heading: "Cricket World Cup"
                            }
                        }
                    },
                    ajm: {
                        football: {
                            teams: "\u062c\u062f\u0648\u0644 \u0645\u0628\u0627\u0631\u064a\u0627\u062a \u0627\u0644\u0623\u062f\u0648\u0627\u0631 \u0627\u0644\u0625\u0642\u0635\u0627\u0626\u064a\u0629 \u0644\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645 2022 \u0641\u064a \u0642\u0637\u0631",
                            brackets: "\u062c\u062f\u0648\u0644 \u0645\u0628\u0627\u0631\u064a\u0627\u062a \u0627\u0644\u0623\u062f\u0648\u0627\u0631 \u0627\u0644\u0625\u0642\u0635\u0627\u0626\u064a\u0629 \u0627\u0644\u0639\u0627\u0644\u0645 2022 \u0641\u064a \u0642\u0637\u0631",
                            fixtures: "\u062c\u062f\u0648\u0644 \u0645\u0628\u0627\u0631\u064a\u0627\u062a \u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645",
                            banner: {
                                heading: "\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645 \u0642\u0637\u0631 2022"
                            }
                        }
                    }
                }[o],
                Ue = {
                    aja: {
                        football: {
                            teams: "\u0645\u0631\u0627\u062d\u0644 \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0627\u062a \u0644\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645 -\u0627\u0644\u0623\u0647\u062f\u0627\u0641 \u0648\u0627\u0644\u062a\u0631\u062a\u064a\u0628",
                            brackets: "\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645 -\u0645\u0631\u0627\u062d\u0644 \u062e\u0631\u0648\u062c \u0627\u0644\u0645\u0647\u0632\u0648\u0645\u060c \u0627\u0644\u0623\u0647\u062f\u0627\u0641 \u0648\u0627\u0644\u062a\u0631\u062a\u064a\u0628",
                            fixtures: "\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645 -\u062c\u062f\u0648\u0644 \u0645\u0628\u0627\u0631\u064a\u0627\u062a \u0648\u062c \u0627\u0644\u0645\u0647\u0632\u0648\u0645\u060c \u0627\u0644\u0623\u0647\u062f\u0627\u0641 \u0648\u0627\u0644\u062a\u0631\u062a\u064a\u0628"
                        }
                    },
                    ajb: {
                        football: {
                            teams: "Grupna faza Svjetskog prvenstva - rezultati i poredak",
                            brackets: "World cup knockout stages scores and standings",
                            fixtures: "Raspored Svjetskog prvenstva, rezultati i poredak"
                        }
                    },
                    chinese: {
                        football: {
                            teams: "World cup group stages scores and standings: \u4e16\u754c\u676f\u5c0f\u7ec4\u8d5b\u79ef\u5206\u4e0e\u6392\u540d",
                            brackets: "World cup knockout stages scores and standings: \u4e16\u754c\u676f\u6dd8\u6c70\u8d5b\u9636\u6bb5\u7684\u79ef\u5206\u4e0e\u6392\u540d",
                            fixtures: "\u4e16\u754c\u676f\u8d5b\u7a0b \u8d5b\u79ef\u5206\u4e0e\u6392\u540d"
                        }
                    },
                    ajd: {
                        football: {
                            teams: "World Cup 2022 group stages standings",
                            brackets: "World Cup 2022 tournament tree",
                            fixtures: "World cup 2022 fixtures"
                        }
                    },
                    aje: {
                        football: {
                            teams: "World cup group stages scores and standings",
                            brackets: "World cup knockout stages scores and standings",
                            fixtures: "World cup fixtures, scores and standing"
                        },
                        cricket: {
                            matches: "ICC Cricket World Cup matches, scores and standings",
                            standings: "ICC Cricket World Cup scores and standings"
                        }
                    },
                    ajm: {
                        football: {
                            teams: "\u0645\u0631\u0627\u062d\u0644 \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0627\u062a \u0644\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645 -\u0627\u0644\u0623\u0647\u062f\u0627\u0641 \u0648\u0627\u0644\u062a\u0631\u062a\u064a\u0628",
                            brackets: "\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645 -\u0645\u0631\u0627\u062d\u0644 \u062e\u0631\u0648\u062c \u0627\u0644\u0645\u0647\u0632\u0648\u0645\u060c \u0627\u0644\u0623\u0647\u062f\u0627\u0641 \u0648\u0627\u0644\u062a\u0631\u062a\u064a\u0628",
                            fixtures: "\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645 -\u062c\u062f\u0648\u0644 \u0645\u0628\u0627\u0631\u064a\u0627\u062a \u0648\u062c \u0627\u0644\u0645\u0647\u0632\u0648\u0645\u060c \u0627\u0644\u0623\u0647\u062f\u0627\u0641 \u0648\u0627\u0644\u062a\u0631\u062a\u064a\u0628"
                        }
                    }
                }[o],
                ze = "https://www.youtube.com",
                Be = 0,
                Fe = 1,
                Ve = 2,
                Ge = {
                    aja: "/\u0643\u0623\u0633-\u0627\u0644\u0639\u0627\u0644\u0645-\u0642\u0637\u0631-2022/",
                    ajb: "/tag/katar-2022/",
                    chinese: "/qatar-world-cup-2022/",
                    ajd: "",
                    aje: "/tag/qatar-2022/",
                    ajm: "/tag/world-cup-2022/"
                }[o],
                qe = {
                    aja: "https://stories.storifyme.com/widgets/al-jazeera-arabic/widget/custom/6761",
                    ajb: "https://stories.storifyme.com/widgets/al-jazeera-balkans/widget/custom/6756",
                    chinese: "https://stories.storifyme.com/widgets/al-jazeera-chinese/widget/custom/6758",
                    ajd: "",
                    aje: "https://stories.storifyme.com/widgets/al-jazeera-english/widget/custom/6744",
                    ajm: "https://stories.storifyme.com/widgets/al-jazeera-mubasher/widget/custom/6754"
                }[o],
                We = "azureedge.net",
                Ye = {
                    distribution: {
                        proxy: "Proxy",
                        base: "BaseSite"
                    },
                    video_type: {
                        vod: "VOD",
                        streaming: "Streaming"
                    },
                    video_source: {
                        youtube: "Youtube",
                        brightcove: "Brightcove"
                    },
                    stop_cause: {
                        completed: "Completed",
                        user_navigation: "UserNavigation",
                        user_stop: "UserStop"
                    },
                    video_placement: {
                        featured: "Featured",
                        homepage_featured: "Homepage Featured",
                        homepage_feed: "Homepage Feed",
                        in_content: "in-Content",
                        program_featured: "Program Featured",
                        liveblog_featured: "Liveblog Featured"
                    },
                    recirculation_source: {
                        article_playlist: "Article Playlist"
                    },
                    play_mode: {
                        autoplay: "autoplay",
                        swipe: "swipe",
                        control_play: "control play"
                    }
                },
                He = {
                    aja: ["/sport/", "/sport/football/", "/\u0643\u0623\u0633-\u0627\u0644\u0639\u0627\u0644\u0645-\u0642\u0637\u0631-2022/"],
                    ajb: ["/katar-2022/", "/tag/fudbal/", "/news/sports/"],
                    chinese: ["/qatar-world-cup-2022/", "/sport-culture/sport/"],
                    ajd: [],
                    aje: ["/tag/qatar-2022/", "/tag/football/", "/sports/"],
                    ajm: ["/tag/football/", "/tag/world-cup-2022", "/news/sports/"]
                },
                Ke = He[o],
                Je = {
                    aja: "https://stories.storifyme.com/widgets/al-jazeera-arabic/widget/custom/7028",
                    ajb: "https://stories.storifyme.com/widgets/al-jazeera-balkans/widget/custom/7151",
                    chinese: "https://stories.storifyme.com/widgets/al-jazeera-chinese/widget/custom/7029",
                    ajd: "",
                    aje: "https://stories.storifyme.com/widgets/al-jazeera-english/widget/custom/7150",
                    ajm: "https://stories.storifyme.com/widgets/al-jazeera-mubasher/widget/custom/7030"
                }[o],
                $e = {
                    aje: {
                        production: 400,
                        staging: 15,
                        development: 15
                    },
                    aja: {
                        production: 28,
                        staging: 523,
                        development: 523
                    },
                    ajb: {
                        production: 1,
                        staging: 513,
                        development: 513
                    },
                    ajm: {
                        production: 6,
                        staging: 518,
                        development: 518
                    },
                    chinese: {
                        production: 9,
                        staging: 514,
                        development: 514
                    }
                }[o],
                Xe = {
                    aja: ["/\u0627\u062a\u0641\u0627\u0642\u064a\u0629-\u0627\u0644\u0645\u0648\u0642\u0639"],
                    ajb: ["/korisnicka-pravila", "/odredbe-i-uvjeti"],
                    chinese: [],
                    ajd: [],
                    aje: ["/terms-and-conditions", "/code-of-ethics", "/eu-eea-regulatory", "/community-rules-guidelines"],
                    ajm: ["/\u0627\u062a\u0641\u0627\u0642\u064a\u0629-\u0627\u0644\u0645\u0648\u0642\u0639"]
                },
                Ze = ["/", "/videos", "/videos/", "/live", "/live/"],
                Qe = Xe[o].concat(["/", "/videos", "/videos/"]),
                et = "https://aljazeera.page.link/?apn=com.aljazeera.mobile&ibi=com.aljazeera.mobile&isi=1534955972&efr=1&link=",
                tt = {
                    aja: !0,
                    ajb: !0,
                    chinese: !0,
                    ajd: !1,
                    aje: !0,
                    ajm: !0
                },
                nt = {
                    aja: "https://www.aljazeera.net",
                    ajb: "https://balkans.aljazeera.net",
                    chinese: "https://chinese.aljazeera.net",
                    ajd: "",
                    aje: "https://www.aljazeera.com",
                    ajm: "https://aljazeeramubasher.net"
                },
                ot = ["post"],
                rt = "/audio/podcasts/",
                it = "https://metrics.brightcove.com/v2/tracker",
                at = {
                    aja: "https://pubads.g.doubleclick.net/gampad/ads?iu=/5287/aljazeera_AR/vod_video&description_url=https%3A%2F%2Faljazeera.net&tfcd=0&sz=787x443&ad_type=video&min_ad_duration=6000&max_ad_duration=30000&gdfp_req=1&unviewed_position_start=1&output=vast&env=vp&impl=s&correlator=&npa={pageVariable.usrPersonaAds=0}&rdp={pageVariable.usrPersonaAds=0}",
                    aje: "https://pubads.g.doubleclick.net/gampad/ads?iu=/5287/aljazeera_EN/vod_video&description_url=https%3A%2F%2Faljazeera.com&tfcd=0&sz=787x443&ad_type=video&min_ad_duration=6000&max_ad_duration=30000&gdfp_req=1&unviewed_position_start=1&output=vast&env=vp&impl=s&correlator=&npa={pageVariable.usrPersonaAds=0}&rdp={pageVariable.usrPersonaAds=0}"
                },
                st = "/sponsored",
                ct = "/paid-content",
                lt = {
                    aje: "a0190c21-edb7-4256-838b-ac44013810a6",
                    aja: "08bf3fe4-bae6-40fa-95b1-aa4000133316",
                    ajb: "c07d07a1-06cf-48e2-a879-adb100c33df5"
                },
                dt = lt[o],
                ut = {
                    aje: {
                        playerId: "b096a40a-78fd-4f3a-8705-dcdf212a32cd",
                        cId: "f9509d53-804e-427d-a0bc-1204c0a3bcb1"
                    },
                    aja: {
                        playerId: "065aba02-a4f7-4484-90d7-0c5822779089",
                        cId: "f9509d53-804e-427d-a0bc-1204c0a3bcb1"
                    }
                },
                pt = ut[o],
                mt = {
                    aja: "6LcbtsooAAAAAJQN9evKBqzW0jP4bZOMgxARO4S6",
                    ajb: "6LcG1cooAAAAAHgRRIDzC3JBpBEDm2_JCsKHuq8i",
                    chinese: "6LdDNcsoAAAAALJGSjvInzZ8bXqMat4M9ZqSgIW7",
                    ajd: "6Le_QssoAAAAAM6cYtVrvjWG6nTPjfEhm0bHFmeu",
                    aje: "6Lf6jaYoAAAAAGKN21DTkapV5mrMYJ9fA95UN8DN",
                    ajm: "6LeKIcsoAAAAAK0K7IfCwsKdS_u0ee_Smk0XZ5CY"
                }[o],
                gt = "accounts-and-personalization",
                ft = 7350,
                ht = 72,
                vt = ["qatar-world-cup-2022", "womens-world-cup-2023", "icc-cricket-world-cup", "\u0643\u0623\u0633-\u0627\u0644\u0639\u0627\u0644\u0645-\u0642\u0637\u0631-2022", "katar-2022", "world-cup-qatar-2022"],
                bt = {
                    play: "audioPlayback",
                    pause: "audioPause",
                    resume: "audioResume",
                    next: "audioNext",
                    previous: "audioPrevious",
                    rewind: "audioRewind",
                    forward: "audioForward",
                    position: "audioSetPosition",
                    volume: "audioSetVolume",
                    mute: "audioMute",
                    close: "audioClose",
                    shrink: "audioShrink",
                    expand: "audioExpand",
                    subscribe: "audioSubscribe"
                },
                yt = "https://www.youtube.com/watch?v=",
                wt = {
                    ajm: "https://ajm.news/breaking"
                },
                At = wt[o],
                _t = {
                    ajm: "https://www.aljazeeramubasher.net/wp-content/uploads/2020/11/ar-1.jpg"
                },
                Et = _t[o],
                Ot = {
                    idSet: {
                        desktop: {
                            article: "540",
                            related: "573",
                            sidebar: "539"
                        },
                        mobile: {
                            article: "574",
                            related: "575"
                        }
                    },
                    validGeoLocations: ["US", "CA", "GB", "SG", "AU"],
                    position: {
                        dianomiArticle: "article",
                        dianomiRelated: "related",
                        dianomiSidebar: "sidebar"
                    }
                },
                jt = ["UK", "DE", "FR", "IT", "ES", "PL", "RO", "NL", "BE", "EL", "CZ", "PT", "HU", "SE", "AT", "BG", "DK", "FI", "SK", "IE", "HR", "LT", "SI", "LV", "EE", "CY", "LU", "MT", "IS", "LI", "NO", "CH"]
        },
        ysKn: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "b", (function() {
                    return o
                })), n.d(t, "a", (function() {
                    return i
                }));

                function o(t, n) {
                    var o, r, i;
                    switch (n.type) {
                        case "set_user":
                            return n.payload ? { ...t,
                                user: n.payload
                            } : null;
                        case "add_to_reading_list":
                            return { ...t,
                                user: { ...(null === t || void 0 === t ? void 0 : t.user) || {},
                                    readingList: [n.payload, ...(null === t || void 0 === t || null === (o = t.user) || void 0 === o ? void 0 : o.readingList) || []]
                                }
                            };
                        case "remove_from_reading_list":
                            return { ...t,
                                user: { ...(null === t || void 0 === t ? void 0 : t.user) || {},
                                    readingList: null === t || void 0 === t || null === (r = t.user) || void 0 === r || null === (i = r.readingList) || void 0 === i ? void 0 : i.filter(e => e !== n.payload)
                                }
                            };
                        case "set_data_download_requested":
                            return { ...t,
                                user: { ...(null === t || void 0 === t ? void 0 : t.user) || {},
                                    isPersonalDataRequested: !0
                                }
                            };
                        case "update_newsletters_list":
                            return e.userSubscribedNewsletters = n.payload || [], { ...t,
                                user: { ...(null === t || void 0 === t ? void 0 : t.user) || {},
                                    newsletterDetails: {
                                        listIds: n.payload
                                    }
                                }
                            };
                        case "update_for_you":
                            return { ...t,
                                forYou: n.payload
                            };
                        default:
                            return t
                    }
                }

                function r(e, t) {
                    return n => {
                        e({
                            type: t,
                            payload: n
                        })
                    }
                }

                function i(e) {
                    return {
                        setUser: r(e, "set_user"),
                        addToReadingList: r(e, "add_to_reading_list"),
                        removeFromReadingList: r(e, "remove_from_reading_list"),
                        setPersonalDataRequested: r(e, "set_data_download_requested"),
                        updateNewslettersList: r(e, "update_newsletters_list"),
                        updateForYou: r(e, "update_for_you")
                    }
                }
            }).call(this, n("Uwcf"))
        }
    }
]);