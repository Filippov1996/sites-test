(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [22], {
        "+4D6": function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return s
            }));
            var t = n("5cNn"),
                a = n("MwNz"),
                d = n("oBzm"),
                r = n("4/Wi"),
                o = n.n(r),
                l = n("xAi6");
            const s = function() {
                let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                const i = a.a.get("i18n"),
                    {
                        setToastContent: n
                    } = Object(d.c)();
                return Object(t.a)(o.a, {
                    context: {
                        api: l.ACCOUNTS_AND_PERSONALIZATION_CONTEXT_KEY
                    },
                    onCompleted: t => {
                        const a = null === t || void 0 === t ? void 0 : t.updateNewsletterSubscription;
                        (null === a || void 0 === a ? void 0 : a.success) || (console.error("Error subscribing to newsletters", a.errorMessage), e && n({
                            message: i.t("Something went wrong message"),
                            status: "error"
                        }))
                    },
                    onError: t => {
                        console.error("Error subscribing to newsletters", t), e && n({
                            message: i.t("Something went wrong message"),
                            status: "error"
                        })
                    }
                })
            }
        },
        "+JkO": function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return f
            })), n.d(i, "d", (function() {
                return S
            })), n.d(i, "c", (function() {
                return h
            })), n.d(i, "b", (function() {
                return j
            })), n.d(i, "e", (function() {
                return E
            }));
            var t = n("dQgG"),
                a = n("3mCM"),
                d = n("Ot6i"),
                r = n("MwNz"),
                o = n("0B7w"),
                l = n("xAi6"),
                s = n("pbOP"),
                c = n("9N7U"),
                u = n("KthT"),
                m = n("aPqV"),
                v = n("j6Iu"),
                k = n("yW39");
            const f = e => {
                    var i, n;
                    const {
                        eventAction: a,
                        eventProperties: r,
                        videoPlayer: o,
                        videoPlacement: l,
                        streaming: s,
                        videoLink: c,
                        articleLink: m,
                        postLink: v,
                        autoPlaying: k = !1,
                        amplitudeExperimentId: f,
                        isPlayerClicked: h = !1
                    } = e;
                    p(r), t.canUseDOM && (N(r, o, s), S(r, c, m, v)), l && Object(d.l)(r, "videoPlacement", l);
                    let O = (null === o || void 0 === o || null === (i = o.cache_) || void 0 === i ? void 0 : i.currentTime) || null;
                    const y = (null === o || void 0 === o || null === (n = o.cache_) || void 0 === n ? void 0 : n.duration) || null,
                        j = !h && k;
                    if (Object(d.l)(r, "autoplay", j), Object(d.l)(r, "playMode", j ? "autoplay" : "control play"), Object(d.l)(r, "streaming", s), "Stop" === a || "Leave" === a) {
                        const e = Object(u.k)("Stop", o, "BC");
                        g({
                            eventProperties: r,
                            eventAction: a,
                            currentTime: O,
                            duration: y,
                            streaming: s,
                            watchTime: e
                        })
                    } else O === y && (O = null), Object(u.k)(a, o, "BC");
                    O && !s && Object(d.l)(r, "currentPosition", Math.round(O)), b(r, f, o)
                },
                g = e => {
                    let i, {
                        eventProperties: n,
                        eventAction: t,
                        currentTime: a,
                        duration: r,
                        streaming: o,
                        watchTime: s
                    } = e;
                    i = "Leave" === t ? l.AMPLITUDE_EVENT_PROPERTY_VALUES.stop_cause.user_navigation : a === r ? l.AMPLITUDE_EVENT_PROPERTY_VALUES.stop_cause.completed : l.AMPLITUDE_EVENT_PROPERTY_VALUES.stop_cause.user_stop, Object(d.l)(n, "stopCause", i), Object(d.l)(n, "watchtime", s), r && !o && Object(d.l)(n, "percentageWatched", Object(v.a)(a, r))
                },
                p = e => {
                    delete e.watchtime, delete e.stopCause, delete e.autoplay, delete e.percentageWatched, delete e.experimentID, delete e.experimentVariant, delete e.experimentVariantPlayerId
                },
                b = (e, i, n) => {
                    const t = Object(o.b)(i);
                    if (null === t || void 0 === t ? void 0 : t.value) {
                        var a;
                        Object(d.l)(e, "experimentID", i), Object(d.l)(e, "experimentVariant", t.value);
                        const r = null === n || void 0 === n || null === (a = n.bcinfo) || void 0 === a ? void 0 : a.playerId;
                        Object(d.l)(e, "experimentVariantPlayerId", r)
                    }
                },
                N = (e, i, n) => {
                    var t, a, r, o, s, c, m, v, k, f, g;
                    (Object(d.l)(e, "mediaTags", (null === (t = i.mediainfo) || void 0 === t || null === (a = t.tags) || void 0 === a ? void 0 : a.join(",")) || ""), Object(d.l)(e, "mediaTopics", (null === (r = i.mediainfo) || void 0 === r || null === (o = r.customFields) || void 0 === o ? void 0 : o.aj_category) || ""), Object(d.l)(e, "duration", Math.round(null === (s = i.mediainfo) || void 0 === s ? void 0 : s.duration) || 0), Object(d.l)(e, "sourceOpen", document.referrer), Object(d.l)(e, "referralSource", document.referrer), Object(d.l)(e, "videoTitle", null === (c = i.mediainfo) || void 0 === c ? void 0 : c.name), Object(d.l)(e, "videoId", null === (m = i.mediainfo) || void 0 === m ? void 0 : m.id), Object(d.l)(e, "videoDate", null === (v = i.mediainfo) || void 0 === v ? void 0 : v.createdAt), Object(d.l)(e, "date", null === (k = i.mediainfo) || void 0 === k ? void 0 : k.createdAt), n) ? (e.videoType = l.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.streaming, e.mediaType = l.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.streaming) : (e.videoType = l.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.vod, e.mediaType = l.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.vod, Object(d.l)(e, "duration", (null === i || void 0 === i || null === (g = i.mediainfo) || void 0 === g ? void 0 : g.duration) ? Math.round(i.mediainfo.duration) : null));
                    e.subscriptionStatus = "Not Subscribed", e.videoSource = l.AMPLITUDE_EVENT_PROPERTY_VALUES.video_source.brightcove, e.mediaSource = l.AMPLITUDE_EVENT_PROPERTY_VALUES.video_source.brightcove, e.fileUrl = Object(u.d)(null === (f = i.mediainfo) || void 0 === f ? void 0 : f.sources)
                },
                S = (e, i, n, t) => {
                    let a = null;
                    if (window.getMetaValue) {
                        const i = window.getMetaValue("pageType", "name", null),
                            n = window.getMetaValue("primaryTopic", "name", null),
                            t = window.getMetaValue("tags", "name", null),
                            r = window.getMetaValue("programTaxonomy", "name", null),
                            o = window.getMetaValue("pageTitle", "name", null) || window.getMetaValue("title", "name", null);
                        a = window.getMetaValue("pageLink", "name", null);
                        const l = window.getMetaValue("recirculationSource", "name", null),
                            s = window.getMetaValue("siteModule", "name", null),
                            c = window.getMetaValue("position", "name", null),
                            u = window.getMetaValue("siteSection", "name", null);
                        Object(d.l)(e, "videoSection", i), Object(d.l)(e, "videoTopic", n), Object(d.l)(e, "topics", n), Object(d.l)(e, "videoTag", t), Object(d.l)(e, "tag", t), Object(d.l)(e, "program", r), Object(d.l)(e, "recirculationSource", l), Object(d.l)(e, "siteModule", s), Object(d.l)(e, "module", s), Object(d.l)(e, "siteSection", u), Object(d.l)(e, "section", u), Object(d.l)(e, "position", c), Object(d.l)(e, "playlistIndex", c), Object(d.l)(e, "id", window.getMetaValue("postID", "name", null)), Object(d.l)(e, "date", window.getMetaValue("publishedDate", "name", null)), Object(d.l)(e, "title", o), Object(d.l)(e, "type", i), Object(d.l)(e, "where", window.getMetaValue("where", "name", null))
                    }
                    const r = i || n || a || t || window.location.pathname;
                    Object(d.l)(e, "videoLink", Object(c.safeDecodeString)("/" === r ? "/" : Object(c.untrailingSlashIt)(r))), Object(d.l)(e, "link", Object(c.safeDecodeString)("/" === r ? "/" : Object(c.untrailingSlashIt)(r)))
                },
                h = (e, i, n) => {
                    const t = y(n),
                        a = r.a.get("BRIGHTCOVE_ENV"),
                        d = "aja" === Object(s.a)() ? "aja" : "aje";
                    if ([m.b[d][a].vod, m.b[d][a].homepage_feed, m.b[d][a].program, m.b[d][a].general].includes(i)) {
                        var o, c;
                        const i = null === (o = (c = window).bc) || void 0 === o ? void 0 : o.call(c, e);
                        i.ready(() => {
                            var e;
                            (null === (e = i.ima3) || void 0 === e ? void 0 : e.settings) && (i.ima3.settings.serverUrl = "number" === typeof t && t < 180 ? "" : l.BRIGHTCOVE_IMA3_SERVERURL[d]), "function" === typeof i.ima3 && i.ima3({
                                serverUrl: l.BRIGHTCOVE_IMA3_SERVERURL[d]
                            })
                        })
                    }
                },
                O = e => {
                    const i = e.play();
                    void 0 !== i && i.then(e => {}).catch(() => {})
                },
                y = e => {
                    if ("string" !== typeof e || !/^(?:(?:[0-5]?\d)(?::(?:[0-5]\d))?(?::(?:[0-5]\d))?|[0-5]?\d)$/.test(e)) return e;
                    const i = e.split(":").reverse();
                    let n = 0;
                    const t = [1, 60, 3600];
                    return i.forEach((e, i) => {
                        n += parseInt(e, 10) * t[i]
                    }), n
                },
                j = (e, i) => {
                    var n, t, a, d, r;
                    const {
                        url: o,
                        autoPlayMobile: l,
                        autoPlayDesktop: s,
                        forcePlay: c,
                        autoPlayMuted: m,
                        onVideoEnd: v,
                        isMobile: f,
                        eventProperties: g,
                        videoPlacement: p,
                        streaming: b,
                        videoLink: N,
                        articleLink: S,
                        postLink: y,
                        amplitudeExperimentId: j,
                        isPlayerClicked: E,
                        duration: w,
                        customEventHandlers: F
                    } = i;
                    i.attributes = {
                        autoPlaying: !1,
                        isMuted: !1
                    }, i.eventControl = [];
                    let T = !1;
                    const V = e.ref;
                    if (V.reset(), !V.isReady_) return;
                    !b && (null === (n = V.playbackRates) || void 0 === n || n.call(V, null === (t = V.options_) || void 0 === t ? void 0 : t.playbackRates)), null === (a = V.el_) || void 0 === a || null === (d = a.classList) || void 0 === d || d.add("pause-controller");
                    const P = null === (r = V.el_) || void 0 === r ? void 0 : r.id,
                        {
                            videoPlayerId: D
                        } = i;
                    h(P, D, w), o && V.social({
                        url: o,
                        dock: !0,
                        removeEmbed: !0,
                        services: {
                            facebook: !0,
                            twitter: !0,
                            tumblr: !1,
                            pinterest: !1,
                            linkedin: !1
                        }
                    }), Object(u.l)(f, l, s) && (O(V), V.muted(m), T = !0, i.attributes.isMuted = m);
                    const A = {
                        eventProperties: g,
                        videoPlayer: V,
                        videoPlacement: p,
                        streaming: b,
                        videoLink: N,
                        articleLink: S,
                        postLink: y,
                        autoPlaying: T,
                        amplitudeExperimentId: j,
                        isPlayerClicked: E
                    };
                    i.videoEventPropertiesProps = A;
                    const I = (e, i) => {
                        (Array.isArray(e) ? e : [e]).forEach(e => {
                            const n = F[e];
                            V.on(e, (function() {
                                for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                                return i(n, ...t)
                            }))
                        })
                    };
                    if (I("closedCaptions", (e, n, t) => {
                            e ? e(n, t, i) : Object(k.c)(t, i)
                        }), I("play", (e, n) => {
                            e ? e(n, V, i) : Object(k.g)(n, V, i)
                        }), I("playing", e => {
                            e ? e(i) : Object(k.h)(i)
                        }), I("volumechange", e => {
                            e ? e(V, i) : Object(k.i)(V, i)
                        }), I("pause", (e, n) => {
                            e ? e(n, i) : Object(k.f)(n, i)
                        }), c) return void O(V);
                    I("loadstart", e => {
                        e ? e(V, i) : Object(k.e)(V, i)
                    }), I("canplay", e => {
                        e ? e(V, i) : Object(k.b)(V, i)
                    }), I("dispose", e => {
                        e ? e(V, i) : Object(k.d)(V, i)
                    });
                    I(["loadedmetadata", "durationchange"], e => {
                        e ? e(V, i, O) : Object(k.a)(V, i, O)
                    }), I("ended", e => {
                        e ? e(i) : null === v || void 0 === v || v()
                    })
                },
                E = e => {
                    let {
                        playerPlayingRef: i,
                        playerRef: n,
                        videoShouldAutoPlay: t,
                        eventProperties: r,
                        feedEventProperties: o
                    } = e;
                    Object(a.b)() && i.current && (o("Leave", n.current, t.current), Object(d.l)(r, "stopCause", l.AMPLITUDE_EVENT_PROPERTY_VALUES.stop_cause.user_navigation), Object(d.e)("VideoStopped", r))
                }
        },
        "03gm": function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return o
            })), n.d(i, "b", (function() {
                return l
            }));
            var t = n("VBdi"),
                a = n.n(t),
                d = n("dVLG");
            const r = a.a.createContext(),
                o = e => {
                    let {
                        children: i
                    } = e;
                    const [n, a] = Object(t.useState)({
                        darkMode: !1
                    });
                    return Object(d.c)(r.Provider, {
                        value: {
                            themeSettings: n,
                            updateThemeSettings: e => {
                                a(e)
                            }
                        }
                    }, i)
                },
                l = () => {
                    const e = Object(t.useContext)(r);
                    if (void 0 === e) throw new Error("useThemeSettingsContext must be used within an ThemeSettingsContextProvider");
                    return e
                }
        },
        "0B7w": function(e, i, n) {
            "use strict";
            (function(e) {
                n.d(i, "b", (function() {
                    return o
                }));
                var t = n("VBdi"),
                    a = n("3mCM"),
                    d = n("kXcp"),
                    r = n("2oLe");
                const o = i => {
                    var n;
                    if (Object(d.b)("amplitude-ab-experimentation/status") && Object(a.c)() && i && (Object.keys((null === (n = e) || void 0 === n ? void 0 : n.amplitudeExperiments) || {}).length && i in e.amplitudeExperiments)) return e.amplitudeExperiments[i];
                    return !1
                };
                i.a = e => {
                    const i = Object(d.b)("amplitude-ab-experimentation/status"),
                        [n, o] = Object(t.useState)(!i && null),
                        l = Object(t.useRef)(null),
                        s = Object(t.useRef)(),
                        c = Object(t.useRef)(0);
                    return Object(t.useEffect)(() => (i && e && null === l.current && (l.current = setInterval(async () => {
                        Object(a.c)() && (c.current += 1), await Object(r.a)(e).then(e => {
                            s.current = e
                        }), (() => {
                            var e, i, n;
                            (null === s || void 0 === s || null === (e = s.current) || void 0 === e ? void 0 : e.value) && (o(s.current), clearInterval(l.current)), c.current > 15 && !(null === (i = window) || void 0 === i || null === (n = i.amplitude) || void 0 === n ? void 0 : n.getDeviceId()) && (o(null), clearInterval(l.current)), (c.current > 30 || null === (null === s || void 0 === s ? void 0 : s.current)) && (o(null), clearInterval(l.current))
                        })()
                    }, 200)), () => clearInterval(l.current)), [n, e]), n
                }
            }).call(this, n("Uwcf"))
        },
        "0fTZ": function(e, i, n) {
            "use strict";
            n("VBdi");
            var t = n("MwNz"),
                a = n("d2yh"),
                d = n.n(a),
                r = n("NdV6"),
                o = n("9N7U"),
                l = n("dVLG");
            i.a = e => {
                let {
                    article: i,
                    isPreview: n,
                    children: a
                } = e;
                const s = Object(o.getMoreFromSectionParams)(i);
                let {
                    sectionTitle: c
                } = s;
                const u = Object(o.getSkipArticleIds)(i),
                    m = [],
                    v = {
                        query: d.a,
                        variables: s.param
                    };
                return Object(l.c)(r.a, {
                    query: v,
                    a11yLoadingText: t.a.get("i18n").t("Loading related content"),
                    cardLoader: !0,
                    isPreview: n
                }, e => (e.articleList && (e = Object(o.filterData)(Object.assign({}, e), u, i)).articleList.map(e => m.push(e.id)), e.articleList && e.sectionTitle && (c = e.sectionTitle), e.mostRecent && (e.mostRecent = e.mostRecent.filter(e => -1 === u.indexOf(e.id) && -1 === m.indexOf(e.id)), e.mostRecent = e.mostRecent.slice(0, 4)), a(e, c)))
            }
        },
        "0w0Z": function(e, i, n) {
            "use strict";
            var t = n("0bX0"),
                a = n("KtfA"),
                d = n.n(a),
                r = n("xAi6"),
                o = n("9N7U"),
                l = n("4j0K");
            i.a = function() {
                const {
                    isAuthInitialized: e,
                    user: i,
                    userInfoActions: n
                } = Object(l.a)();
                return Object(t.a)(d.a, {
                    fetchPolicy: Object(o.getFetchPolicy)(),
                    errorPolicy: Object(o.getErrorPolicy)(),
                    skip: !e || !i,
                    context: {
                        api: r.ACCOUNTS_AND_PERSONALIZATION_CONTEXT_KEY
                    },
                    onCompleted: e => {
                        e.newsletterDetails && n.updateNewslettersList(e.newsletterDetails.listIds)
                    },
                    onError: e => {
                        n.updateNewslettersList([]), console.error(e)
                    }
                })
            }
        },
        "17QS": function(e, i, n) {
            "use strict";
            var t = n("Miz2"),
                a = n("VBdi"),
                d = n("oBzm"),
                r = n("xAi6"),
                o = n("OlZM"),
                l = n("dVLG");
            i.a = () => {
                const [e, i] = Object(a.useState)(!1), [n, s] = Object(a.useState)(!1), {
                    setToastContent: c,
                    toastContent: u
                } = Object(d.c)(), {
                    status: m,
                    message: v,
                    ctaText: k
                } = u, f = () => c({
                    status: "",
                    message: "",
                    title: "",
                    ctaText: "",
                    timeoutBeforeShow: 1500
                });
                return Object(a.useEffect)(() => {
                    const e = [];
                    return e.push(setTimeout(() => {
                        i(!0)
                    }, u.timeoutBeforeShow)), k || e.push(setTimeout(() => {
                        i(!1)
                    }, r.TOAST_TIMEOUT_MILISECONDS - 850)), () => {
                        e.forEach(e => {
                            clearTimeout(e)
                        })
                    }
                }, [k]), Object(a.useEffect)(() => {
                    if (n) return f
                }, [n]), m && v ? Object(l.c)(o.a, Object(t.a)({}, u, {
                    show: e,
                    close: () => {
                        i(!1), setTimeout(f, 800)
                    },
                    toastLoadedCallback: s
                })) : null
            }
        },
        "1P4M": function(e, i, n) {
            var t = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ArchipelagoSingleArticleQuery"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "postType"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "preview"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "StringOrBoolean"
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "article"
                                },
                                name: {
                                    kind: "Name",
                                    value: "post"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "postName"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "options"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "postType"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "postType"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "preview"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "preview"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "content"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "subheading"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "details"
                                        },
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "showAuthor"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "writeInAuthor"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "authorTagline"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "themeMode"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "writeInCoAuthor"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "order"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "shortUrl"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "correctionText"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "correctionDate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "updatedDate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "displayPublishDate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "modified_gmt"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasElectionBanner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "primaryCategoryTerm"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "primaryCategoryTermName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "primaryTagsTermName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "primaryTagsTerm"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "featuredImage"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "itemNumber"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "featuredCaption"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "featuredYoutube"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "featuredDataWrapperIframe"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "socialMediaImage"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "programsDetails"
                                        },
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "source"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "featuredTaxonomy"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "featuredTaxonomyImage"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "type"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "sourceUrl"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "caption"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "alt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "video"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "duration"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "accountId"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "playerId"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sourceUrl"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "aspectRatioType"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "categories"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "headerName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slug"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "link"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "homePageEvent"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customNavigation"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "items"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "menuItem"
                                                                },
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "displayCustomNavigationOnArticles"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customNavigationBrandingImg"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "additionalArticleEmbeds"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "allowEmbeds"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "aboveFeaturedArea"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "aboveFeaturedAreaForMobile"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "internalTaxonomies"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slug"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "internalReporting"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slug"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "midan"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slug"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "tags"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slug"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "link"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "homePageEvent"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customNavigation"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "items"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "menuItem"
                                                                },
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "displayCustomNavigationOnArticles"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customNavigationBrandingImg"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customArticleBrandingImage"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "post"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "desktop"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "id"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "sourceUrl"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "caption"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "desktopRegular"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "id"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "sourceUrl"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "caption"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "mobile"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "id"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "sourceUrl"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "caption"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customTimerArticleData"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "date"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "additionalArticleEmbeds"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "allowEmbeds"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "aboveFeaturedArea"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "aboveFeaturedAreaForMobile"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "trending"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slug"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "link"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "where"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slug"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "link"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customNavigation"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "items"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "menuItem"
                                                                },
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "displayCustomNavigationOnArticles"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customNavigationBrandingImg"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "series"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "link"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "relatedArticles"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "replacementHeadline"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "excerpt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "link"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "date"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "showAuthor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "writeInAuthor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "writeInCoAuthor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "order"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "postType"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "type"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "externalUrl"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "content"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "programsDetails"
                                                },
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "video"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "duration"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "featuredImage"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "postAuthorDetails"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "outsideImage"
                                                },
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "galleryImagesCount"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "moreOnWidgetArticles"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "link"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "externalUrl"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "postType"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "type"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "replacementHeadline"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "excerpt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "date"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "video"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "duration"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "author"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "link"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "featuredImage"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "outsideImage"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "programsDetails"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "moreOnWidgetCurated"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "explainerWidgetDetails"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "longform"
                                        },
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "sponsorTax"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "logoUrl"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "logoLink"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "footerLogoUrl"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "footerLogoLink"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "subNav"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "items"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "title"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "url"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "who"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "homePageEvent"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "sponsorshipType"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "sponsorHeaderBarText"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "sponsorFooterBarText"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hideSponsorHeaderBarText"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hideSponsorFooterBarText"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isQuickRead"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "seoTitle"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 3639
                    }
                },
                a = {};

            function d(e) {
                return e.filter((function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var i = e.name.value;
                    return !a[i] && (a[i] = !0, !0)
                }))
            }
            t.definitions = t.definitions.concat(d(n("IdT5").definitions)), t.definitions = t.definitions.concat(d(n("mhoN").definitions)), t.definitions = t.definitions.concat(d(n("k7s9").definitions)), t.definitions = t.definitions.concat(d(n("T2V2").definitions)), t.definitions = t.definitions.concat(d(n("3aDF").definitions)), t.definitions = t.definitions.concat(d(n("6nVt").definitions));
            var r = {};

            function o(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), r[e.name.value] = i
                }
            })), e.exports = t, e.exports.ArchipelagoSingleArticleQuery = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [o(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var t = r[i] || new Set,
                    a = new Set,
                    d = new Set;
                for (t.forEach((function(e) {
                        d.add(e)
                    })); d.size > 0;) {
                    var l = d;
                    d = new Set, l.forEach((function(e) {
                        a.has(e) || (a.add(e), (r[e] || new Set).forEach((function(e) {
                            d.add(e)
                        })))
                    }))
                }
                return a.forEach((function(i) {
                    var t = o(e, i);
                    t && n.definitions.push(t)
                })), n
            }(t, "ArchipelagoSingleArticleQuery")
        },
        "3DrZ": function(e, i, n) {
            "use strict";
            var t = n("0bX0"),
                a = n("lcjn"),
                d = n.n(a),
                r = n("u3zP"),
                o = n.n(r),
                l = n("xAi6"),
                s = n("pbOP"),
                c = n("9N7U"),
                u = n("4j0K");
            i.a = function(e, i, n, a, r) {
                const {
                    isAuthInitialized: m,
                    user: v
                } = Object(u.a)(), k = !Object(s.e)() && m && !!v;
                return Object(t.a)(k ? d.a : o.a, {
                    fetchPolicy: Object(c.getFetchPolicy)(),
                    errorPolicy: Object(c.getErrorPolicy)(),
                    skip: !m || !e,
                    context: {
                        api: l.ACCOUNTS_AND_PERSONALIZATION_CONTEXT_KEY
                    },
                    variables: {
                        site: Object(s.a)().toUpperCase(),
                        documentId: i,
                        primaryTag: n,
                        categories: a,
                        where: r
                    }
                })
            }
        },
        "3aDF": function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "socialMediaImage"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Post"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "socialMediaImage"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "sourceUrl"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "credit"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "caption"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "sizes"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "sizeNames"
                                        },
                                        value: {
                                            kind: "ListValue",
                                            values: [{
                                                kind: "StringValue",
                                                value: "arc-image-1800",
                                                block: !1
                                            }, {
                                                kind: "StringValue",
                                                value: "arc-image-4-3-1920",
                                                block: !1
                                            }, {
                                                kind: "StringValue",
                                                value: "arc-image-16-9-1920",
                                                block: !1
                                            }, {
                                                kind: "StringValue",
                                                value: "arc-image-1200-630",
                                                block: !1
                                            }, {
                                                kind: "StringValue",
                                                value: "full",
                                                block: !1
                                            }]
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "crop"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "width"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "height"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "url"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "cropRectangle"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 351
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.socialMediaImage = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "socialMediaImage")
        },
        "4/Wi": function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "updateNewsletterSubscription"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "listIds"
                            }
                        },
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Int"
                                    }
                                }
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "unlinkListIds"
                            }
                        },
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Int"
                                    }
                                }
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "updateNewsletterSubscription"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "ObjectValue",
                                    fields: [{
                                        kind: "ObjectField",
                                        name: {
                                            kind: "Name",
                                            value: "listIds"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "listIds"
                                            }
                                        }
                                    }, {
                                        kind: "ObjectField",
                                        name: {
                                            kind: "Name",
                                            value: "unlinkListIds"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "unlinkListIds"
                                            }
                                        }
                                    }]
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "success"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "errorMessage"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 213
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.updateNewsletterSubscription = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "updateNewsletterSubscription")
        },
        "4j0K": function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return a
            }));
            var t = n("ygHU");
            const a = () => Object(t.b)()
        },
        "564Y": function(e, i, n) {
            "use strict";
            var t = n("AAFT"),
                a = n.n(t),
                d = n("VBdi"),
                r = n("Ot6i"),
                o = n("9N7U"),
                l = n("OyXg"),
                s = n("dVLG");
            const c = Object(d.forwardRef)((e, i) => {
                let {
                    className: n,
                    tabName: t,
                    children: c
                } = e;
                const [u, m] = Object(d.useState)(0);
                if (Object(d.useEffect)(() => {
                        if (!Array.isArray(c) || !c[u]) return;
                        const {
                            callback: e
                        } = c[u].props;
                        "function" === typeof e && e()
                    }, [u]), !c || Array.isArray(c) && 0 === c.length) return null;
                const v = a()("tab-list", n),
                    k = c.filter(e => e);
                return Object(s.c)(d.Fragment, null, Object(s.c)("div", {
                    className: v
                }, ((e, i, n, t, a) => Object(s.c)("ol", {
                    className: "tab-list__header",
                    role: "tablist"
                }, e.map((e, d) => {
                    if (!e) return null;
                    const {
                        name: r,
                        className: o
                    } = e.props;
                    return Object(s.c)(l.a, {
                        isActive: d === i,
                        index: d,
                        key: `${e.key||r}_${d}`,
                        name: r,
                        tabName: n,
                        className: o,
                        onClick: t,
                        onKeyDown: a
                    })
                })))(k, u, t, e => {
                    if (e === u) return;
                    m(e);
                    const {
                        name: i,
                        eventCategory: n
                    } = c[e].props;
                    Object(r.a)(n, i)
                }, e => {
                    e.target = e.target.parentElement;
                    const i = Object(o.getTabsKeyboardNavId)(e);
                    if (i) {
                        var n;
                        const t = parseInt(i.split("-").pop());
                        m(t);
                        const a = document.getElementById(i);
                        null === a || void 0 === a || null === (n = a.children[0]) || void 0 === n || n.focus(), e.preventDefault()
                    }
                }), ((e, i, n, t) => Object(s.c)("div", {
                    className: "tab-list__content",
                    role: "tabpanel",
                    "aria-labelledby": `${n}-tab-${i}`,
                    id: `${n}-tabpanel-${i}`,
                    ref: t
                }, e.map((e, n) => {
                    var t;
                    if (n === i) return null === e || void 0 === e || null === (t = e.props) || void 0 === t ? void 0 : t.children
                })))(k, u, t, i)))
            });
            i.a = c
        },
        "5vTK": function(e, i, n) {
            "use strict";
            var t = n("VBdi"),
                a = n("MwNz"),
                d = n("9N7U"),
                r = n("dVLG");
            i.a = e => {
                let {
                    duration: i,
                    className: n
                } = e;
                if (!i) return null;
                const o = Object(d.videoDurationToWords)(i),
                    l = a.a.get("i18n");
                return Object(r.c)(t.Fragment, null, o && Object(r.c)("span", {
                    className: "screen-reader-text"
                }, l.t("Video Duration"), " ", o), Object(r.c)("span", {
                    "aria-hidden": !!o,
                    className: n
                }, i))
            }
        },
        "6epq": function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return a
            }));
            var t = n("VBdi");

            function a() {
                const [e, i] = Object(t.useState)(!1);
                return Object(t.useEffect)(() => {
                    const e = () => i(!0);
                    return window.addEventListener("load", e), i("complete" === document.readyState), () => window.removeEventListener("load", e)
                }, []), e
            }
        },
        "6nVt": function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "menuItem"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "MenuItem"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "parent"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "title"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "url"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "target"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "classes"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "children"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "parent"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "title"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "url"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "target"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "classes"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 205
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.menuItem = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "menuItem")
        },
        "7+tw": function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return d
            }));
            var t = n("xAi6"),
                a = n("khUF");
            const d = () => Object(a.a)("https://www.recaptcha.net/recaptcha/enterprise.js?render=" + t.UCMS_RECAPTCHA_SITE_KEY)
        },
        "7gh8": function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "sourceDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Post"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "source"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "featuredTaxonomy"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "featuredTaxonomyImage"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "type"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sourceUrl"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "caption"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "alt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "width"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "height"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sizes"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "sizeNames"
                                                },
                                                value: {
                                                    kind: "ListValue",
                                                    values: [{
                                                        kind: "StringValue",
                                                        value: "full",
                                                        block: !1
                                                    }]
                                                }
                                            }],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "crop"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "width"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "height"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "url"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "featuredActionLink"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "featuredSourceLink"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 331
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.sourceDetails = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "sourceDetails")
        },
        "8UrT": function(e, i, n) {
            "use strict";
            var t = n("FQxg"),
                a = n("kZWY"),
                d = n("cMIy"),
                r = n.n(d),
                o = n("dQgG"),
                l = n("VBdi"),
                s = n.n(l),
                c = n("+pFu"),
                u = n("INAE"),
                m = n.n(u),
                v = n("NH8k"),
                k = n.n(v),
                f = n("nlM2"),
                g = n("7RPU"),
                p = n("xAi6"),
                b = n("kXcp"),
                N = n("9N7U"),
                S = n("dm7t"),
                h = n("9zok"),
                O = n.n(h),
                y = n("dVLG");
            var j = s.a.memo(e => {
                var i;
                let {
                    breakingData: n
                } = e;
                const {
                    data: t,
                    error: a,
                    loading: d
                } = Object(S.a)(O.a, {
                    shouldResubscribe: !0
                });
                if (!n && (!t || a || d)) return null;
                const r = t || n;
                return (null === r || void 0 === r || null === (i = r.breakingNews) || void 0 === i ? void 0 : i.post) ? Object(y.c)(c.a, {
                    data: r
                }) : null
            });
            const E = () => Object(y.c)(a.a, {
                    query: m.a,
                    fetchPolicy: "network-only",
                    errorPolicy: Object(N.getErrorPolicy)()
                }, e => {
                    let {
                        loading: i,
                        error: n,
                        data: t
                    } = e;
                    return !t || n || i ? null : Object(y.c)(j, {
                        breakingData: t
                    })
                }),
                w = () => {
                    const e = Object(b.b)("breaking-news-communication-rest-endpoint") && Object(b.b)("breaking-news-communication-rest-endpoint/status") ? k.a : m.a,
                        {
                            loading: i,
                            error: n,
                            data: a,
                            startPolling: d
                        } = Object(t.b)(e, {
                            fetchPolicy: "no-cache",
                            errorPolicy: Object(N.getErrorPolicy)(),
                            pollInterval: 1e4
                        });
                    d(1e4);
                    const o = n && "rest_no_route" !== (null === n || void 0 === n ? void 0 : n.message),
                        l = r()().tz(Object(g.n)()).format("YYYY-MM-DD HH:mm:ss");
                    if (null === a || void 0 === a ? void 0 : a.tvBreakingNews) {
                        const e = a.tvBreakingNews.filter(e => Object(g.p)(e.createdAt, l).$ms <= 48e4);
                        a.tvBreakingNews = e
                    }
                    return !a || o || i ? null : Object(y.c)(c.a, {
                        data: a
                    })
                };
            i.a = () => {
                const e = Object(f.a)(),
                    i = !(e.pathname.startsWith(p.SPONSORED_PATH_NAME) || e.pathname.startsWith(p.PAIDCONTENT_PATH_NAME));
                return o.canUseDOM && i ? Object(b.b)("websockets") && Object(b.b)("websockets/breaking-news") ? Object(y.c)(E, null) : Object(y.c)(w, null) : null
            }
        },
        "8fvG": function(e, i, n) {
            "use strict";
            var t = n("Miz2"),
                a = n("AAFT"),
                d = n.n(a),
                r = n("VBdi"),
                o = n.n(r),
                l = n("9mJr"),
                s = n("96Qw"),
                c = n("H5bq"),
                u = n("4j0K");
            var m = () => {
                    const [e, i] = Object(r.useState)(null), {
                        auth: n,
                        isAuthInitialized: t
                    } = Object(u.a)();
                    return Object(r.useEffect)(() => {
                        t && (null === n || void 0 === n ? void 0 : n.currentUser) && (async () => {
                            var e;
                            const t = await (null === n || void 0 === n || null === (e = n.currentUser) || void 0 === e ? void 0 : e.getIdTokenResult()),
                                a = null === t || void 0 === t ? void 0 : t.signInProvider;
                            var d, r;
                            a && (i(a), null === (d = window) || void 0 === d || null === (r = d.localStorage) || void 0 === r || r.setItem("userSignInMethod", a))
                        })()
                    }, [null === n || void 0 === n ? void 0 : n.currentUser, t]), e
                },
                v = n("A81W"),
                k = n("7RPU"),
                f = n("xAi6"),
                g = n("w8RO"),
                p = n("wwBK"),
                b = (n("Z4+R"), n("dVLG"));
            const N = Object(r.forwardRef)((e, i) => {
                    var n;
                    let {
                        title: a,
                        onClick: r,
                        user: o,
                        type: l = "button",
                        ...c
                    } = e;
                    const u = parseInt(null === o || void 0 === o || null === (n = o.metadata) || void 0 === n ? void 0 : n.createdAt),
                        m = Object(s.useLocation)(),
                        v = d()("no-styles-button auth-icon-btn", {
                            error: Object(k.o)(u) > f.VERIFY_LINK_EXPIRY_TIME_IN_HOURS && "/my-account" !== (null === m || void 0 === m ? void 0 : m.pathname) && !(null === o || void 0 === o ? void 0 : o.emailVerified)
                        }),
                        p = "link" === l ? "a" : "button",
                        N = o ? "account-filled" : "account";
                    return Object(b.c)(p, Object(t.a)({
                        className: v,
                        onClick: r,
                        ref: i,
                        "data-testid": "authed-user-btn"
                    }, c), Object(b.c)("span", {
                        className: "screen-reader-text"
                    }, a), Object(b.c)(g.a, {
                        name: N,
                        color: "grey",
                        size: 24,
                        viewBox: "0 0 24 24",
                        title: a
                    }))
                }),
                S = Object(r.forwardRef)((e, i) => {
                    let {
                        alwaysUseIcon: n,
                        ...a
                    } = e;
                    const d = Object(s.useHistory)(),
                        m = v.a.t("Sign Up"),
                        k = Object(s.useRouteMatch)(["/account", "/account/sign-in", "/account/sign-up", "/account/verify", "/account/forgot-password"]),
                        {
                            setPendingAction: f
                        } = Object(u.a)();
                    Object(r.useEffect)(() => {
                        var e, i;
                        null === (e = window) || void 0 === e || null === (i = e.localStorage) || void 0 === i || i.setItem("userSignInMethod", "none")
                    }, []);
                    const g = (e, i) => {
                        k ? f({
                            resetLogin: !0
                        }) : (Object(c.e)(i), e.preventDefault(), setTimeout(() => {
                            d.push("/account/sign-up")
                        }, 0))
                    };
                    return Object(b.c)(o.a.Fragment, null, Object(b.c)(l.a, null, Object(b.c)("meta", {
                        name: "user:signinStatus",
                        content: "Signed Out"
                    }), Object(b.c)("meta", {
                        name: "user:verificationStatus",
                        content: "Not Verified"
                    })), n ? Object(b.c)(N, Object(t.a)({
                        ref: i,
                        title: m,
                        type: "link",
                        href: "/account",
                        onClick: e => g(e, "site-header__account--mobile")
                    }, a)) : Object(b.c)("button", Object(t.a)({
                        ref: i,
                        className: "auth-btn",
                        onClick: e => g(e, "site-header__account")
                    }, a), m))
                }),
                h = Object(r.forwardRef)((e, i) => {
                    let {
                        user: n
                    } = e;
                    const t = v.a.t("My account"),
                        a = Object(s.useHistory)(),
                        d = Object(s.useLocation)(),
                        [u, k] = Object(r.useState)(!1),
                        f = (null === n || void 0 === n ? void 0 : n.emailVerified) && Object(b.c)("meta", {
                            name: "user:verificationStatus",
                            content: "Verified"
                        }),
                        g = m();
                    return Object(b.c)(o.a.Fragment, null, Object(b.c)(l.a, null, Object(b.c)("meta", {
                        name: "user:signinStatus",
                        content: "Signed In"
                    }), f, g && Object(b.c)("meta", {
                        name: "user:signInMethod",
                        content: g
                    })), Object(b.c)(N, {
                        title: t,
                        ref: i,
                        onClick: () => {
                            (null === n || void 0 === n ? void 0 : n.emailVerified) ? a.push("/my-account"): k(!0)
                        },
                        user: n
                    }), Object(b.c)(p.a, {
                        isOpen: u,
                        onContinueClick: () => {
                            Object(c.b)(!1), d.pathname.startsWith("/account") ? a.push({
                                pathname: "/account/sign-up"
                            }) : a.push({
                                pathname: "/account/verify"
                            })
                        },
                        onClose: () => {
                            Object(c.b)(!0), k(!1)
                        },
                        description: v.a.t("Verify to manage your account")
                    }))
                }),
                O = Object(r.forwardRef)((e, i) => {
                    const {
                        user: n
                    } = Object(u.a)();
                    return (null === e || void 0 === e ? void 0 : e.isAmp) ? Object(b.c)(S, {
                        ref: i,
                        alwaysUseIcon: null === e || void 0 === e ? void 0 : e.alwaysUseIcon
                    }) : n ? Object(b.c)(h, Object(t.a)({
                        user: n,
                        ref: i
                    }, e)) : Object(b.c)(S, Object(t.a)({
                        ref: i
                    }, e))
                });
            i.a = O
        },
        "9Cxj": function(e, i, n) {
            "use strict";
            var t = n("Miz2"),
                a = n("kZWY"),
                d = (n("VBdi"), n("RAHs")),
                r = n("MwNz"),
                o = n("N4w9"),
                l = n("YSgp"),
                s = n.n(l),
                c = n("xAi6"),
                u = n("9N7U"),
                m = n("dVLG");
            const v = e => {
                const i = r.a.get("fallbackMenus");
                return Object(o.d)().shouldShowStaticMenu ? Object(m.c)(d.a, Object(t.a)({
                    menu: i[e.menuName].menu[0].items
                }, e, {
                    showSearch: !0,
                    label: e.menuName === c.MENU_NAME_HEADER ? "Navigation Bar" : "Footer Link"
                })) : Object(m.c)(a.a, {
                    query: s.a,
                    variables: {
                        name: e.menuName
                    },
                    fetchPolicy: "cache-first",
                    errorPolicy: Object(u.getErrorPolicy)()
                }, n => {
                    var a, r;
                    let {
                        loading: o,
                        error: l,
                        data: s
                    } = n;
                    if (o) return null;
                    const u = null !== (a = null === s || void 0 === s || null === (r = s.menu) || void 0 === r ? void 0 : r[0]) && void 0 !== a ? a : {};
                    return !u.items || l ? Object(m.c)(d.a, Object(t.a)({
                        menu: i[e.menuName].menu[0].items
                    }, e, {
                        showSearch: !0,
                        label: e.menuName === c.MENU_NAME_HEADER ? "Navigation Bar" : "Footer Link"
                    })) : Object(m.c)(d.a, Object(t.a)({
                        menu: u.items
                    }, e, {
                        showSearch: e.menuName === c.MENU_NAME_HEADER,
                        label: e.menuName === c.MENU_NAME_HEADER ? "Navigation Bar" : "Footer Link"
                    }))
                })
            };
            v.defaultProps = {
                menuName: c.MENU_NAME_HEADER
            }, i.a = v
        },
        "9xqa": function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return r
            }));
            var t = n("VBdi");
            const a = {},
                d = (e, i, n) => {
                    e[i] = "object" !== typeof n || Array.isArray(n) ? n : { ...e[i],
                        ...n
                    }
                },
                r = () => {
                    const [e, i] = Object(t.useState)(!1), n = Object(t.useRef)(a);
                    Object(t.useEffect)(() => {
                        i(!0);
                        try {
                            const e = window.sessionStorage.getItem("aj_store");
                            if (e) {
                                const i = JSON.parse(e);
                                Object.keys(i).forEach(e => {
                                    const t = i[e];
                                    d(n.current, e, t)
                                })
                            }
                        } catch {}
                    }, [n.current]);
                    const r = Object(t.useCallback)(e => n.current[e] || null, []),
                        o = Object(t.useCallback)((e, i) => {
                            d(n.current, e, i);
                            try {
                                window.sessionStorage.setItem("aj_store", JSON.stringify(n.current))
                            } catch {}
                        }, []),
                        l = Object(t.useCallback)(e => {
                            delete n.current[e];
                            try {
                                window.sessionStorage.setItem("aj_store", JSON.stringify(n.current))
                            } catch {}
                        }, []);
                    return Object(t.useMemo)(() => ({
                        get: r,
                        set: o,
                        isReady: e,
                        remove: l
                    }), [r, o, e, l])
                }
        },
        "9zok": function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "subscription",
                    name: {
                        kind: "Name",
                        value: "BreakingNewsSubscription"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "breakingNews"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "post"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tickerTitle"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tickerText"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "modified"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "link"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 113
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.BreakingNewsSubscription = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "BreakingNewsSubscription")
        },
        A81W: function(e, i, n) {
            "use strict";
            n.d(i, "b", (function() {
                return r
            }));
            var t = n("tCzk"),
                a = n("PtG5"),
                d = n("7RPU");
            const r = (e, i) => {
                const n = {
                    resources: {
                        [e]: {
                            translation: i
                        }
                    },
                    lng: e,
                    nsSeparator: !1,
                    keySeparator: !1,
                    interpolation: {
                        escapeValue: !1
                    }
                };
                t.a.use(a.e).init(n), Object(d.u)(e)
            };
            i.a = t.a
        },
        CBQt: function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "subscribeToPersonalizedNewsletter"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "subscribeToPersonalizedNewsletter"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "success"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "errorMessage"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 112
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.subscribeToPersonalizedNewsletter = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "subscribeToPersonalizedNewsletter")
        },
        CNPg: function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return a
            }));
            n("VBdi");
            var t = n("dVLG");
            const a = (e, i, n) => a => (null === i || void 0 === i ? void 0 : i(a)) ? Object(t.c)(e, a) : (null === n || void 0 === n ? void 0 : n(a)) || null
        },
        CphE: function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "updateReadingListMutation"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "postId"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "add"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "updateReadingList"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                },
                                value: {
                                    kind: "ObjectValue",
                                    fields: [{
                                        kind: "ObjectField",
                                        name: {
                                            kind: "Name",
                                            value: "postId"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "postId"
                                            }
                                        }
                                    }, {
                                        kind: "ObjectField",
                                        name: {
                                            kind: "Name",
                                            value: "add"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "add"
                                            }
                                        }
                                    }]
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "errorMessage"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "success"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "updated"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 171
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.updateReadingListMutation = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "updateReadingListMutation")
        },
        DLke: function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return d
            }));
            var t = n("VBdi"),
                a = n("QXYw");
            const d = () => {
                const [e, i] = Object(t.useState)(!0), n = Object(a.a)();
                return Object(t.useEffect)(() => {
                    n && e && i(!1)
                }, [n]), n && e
            }
        },
        HIup: function(e, i, n) {
            "use strict";
            n.d(i, "d", (function() {
                return r
            })), n.d(i, "b", (function() {
                return o
            })), n.d(i, "a", (function() {
                return l
            })), n.d(i, "c", (function() {
                return s
            })), n.d(i, "e", (function() {
                return c
            })), n.d(i, "f", (function() {
                return k
            }));
            var t = n("VBdi"),
                a = n("QXYw"),
                d = n("DLke");
            const r = "userAccountsTooltip",
                o = "userAccountsForgotPassword",
                l = "userAccountsEmailVerification",
                s = "saveForLaterTooltip",
                c = "verticalVideoExperiencePreferences",
                u = {
                    [r]: {
                        visitN: 0,
                        dontShowTill: 0
                    },
                    [l]: {
                        attempt: 0,
                        time: 0
                    },
                    [s]: {
                        isHide: !1
                    },
                    [c]: {
                        isMuted: !1,
                        hasSeenSwipeUpPrompt: !1,
                        watchedVideos: []
                    }
                },
                m = (e, i, n) => e[i] = "object" !== typeof n || Array.isArray(n) ? n : { ...e[i],
                    ...n
                },
                v = [],
                k = () => {
                    const [e, i] = Object(t.useState)(!1), n = Object(t.useRef)([]), r = Object(t.useRef)(u), o = Object(a.a)(), l = Object(d.a)();
                    Object(t.useEffect)(() => {
                        if (l) {
                            try {
                                const e = window.localStorage.getItem("aj_store");
                                if (e) {
                                    const i = JSON.parse(e);
                                    Object.keys(i).forEach(e => {
                                        m(r.current, e, i[e])
                                    })
                                }
                                n.current.forEach(e => {
                                    let {
                                        key: i,
                                        value: n
                                    } = e;
                                    m(r.current, i, n), v.forEach(e => e(i, n, r.current))
                                })
                            } catch {}
                            window.localStorage.setItem("aj_store", JSON.stringify(r.current)), i(!0)
                        }
                    }, [l, n.current, r.current, v]);
                    const s = Object(t.useCallback)(e => r.current[e], [r.current]),
                        c = Object(t.useCallback)((e, i) => {
                            m(r.current, e, i);
                            try {
                                o ? (window.localStorage.setItem("aj_store", JSON.stringify(r.current)), v.forEach(n => n(e, i, r.current))) : n.current.push({
                                    key: e,
                                    value: i
                                })
                            } catch {}
                        }, [r.current, n.current, v, o]),
                        k = Object(t.useCallback)(e => {
                            "function" === typeof e && v.push(e)
                        }, [v]),
                        f = Object(t.useCallback)(e => {
                            const i = v.indexOf(e);
                            i > -1 && v.splice(i, 1)
                        }, [v]);
                    return Object(t.useMemo)(() => ({
                        get: s,
                        set: c,
                        subscribe: k,
                        unsubscribe: f,
                        isReady: e
                    }), [s, c, k, f, e])
                }
        },
        INAE: function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ArchipelagoBreakingTickerQuery"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "breakingNews"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "post"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tickerTitle"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tickerText"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "modified"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "link"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 182
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.ArchipelagoBreakingTickerQuery = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "ArchipelagoBreakingTickerQuery")
        },
        IdT5: function(e, i, n) {
            var t = {
                    kind: "Document",
                    definitions: [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "featuredImage"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Post"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "featuredImage"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "mediaDetails"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "outsideImage"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Post"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "outsideImage"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "mediaDetails"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "verticalFeaturedImageDetails"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Post"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "verticalFeaturedImage"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "mediaDetails"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "postAuthorDetails"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Post"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "author"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "link"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "description"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "slug"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "twitter"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "facebook"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "avatars"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "size"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "jobTitle"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "linked_nicename"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "featuredGallery"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Post"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "galleryMedia"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "image"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "alt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sizes"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "sizeNames"
                                                    },
                                                    value: {
                                                        kind: "ListValue",
                                                        values: [{
                                                            kind: "StringValue",
                                                            value: "arc-image-3-2-375",
                                                            block: !1
                                                        }, {
                                                            kind: "StringValue",
                                                            value: "arc-image-3-2-570",
                                                            block: !1
                                                        }, {
                                                            kind: "StringValue",
                                                            value: "arc-image-770",
                                                            block: !1
                                                        }]
                                                    }
                                                }],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "crop"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "credit"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sourceUrl"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "caption"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "details"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Post"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "title"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "excerpt"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "date"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "link"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isBreaking"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isLive"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "shortUrl"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "proxyShortUrl"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isDeveloping"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "externalUrl"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "replacementHeadline"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "postType"
                                },
                                name: {
                                    kind: "Name",
                                    value: "type"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "postAuthorDetails"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "featuredImage"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "sourceDetails"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "postLabelDetails"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "verticalFeaturedImageDetails"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "outsideImage"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "featuredGallery"
                                },
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "galleryImagesCount"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "seoTitle"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "showFAQSchema"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "showTableOfContent"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 1371
                    }
                },
                a = {};

            function d(e) {
                return e.filter((function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var i = e.name.value;
                    return !a[i] && (a[i] = !0, !0)
                }))
            }
            t.definitions = t.definitions.concat(d(n("7gh8").definitions)), t.definitions = t.definitions.concat(d(n("f4b+").definitions)), t.definitions = t.definitions.concat(d(n("tL9X").definitions));
            var r = {};

            function o(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }

            function l(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [o(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var t = r[i] || new Set,
                    a = new Set,
                    d = new Set;
                for (t.forEach((function(e) {
                        d.add(e)
                    })); d.size > 0;) {
                    var l = d;
                    d = new Set, l.forEach((function(e) {
                        a.has(e) || (a.add(e), (r[e] || new Set).forEach((function(e) {
                            d.add(e)
                        })))
                    }))
                }
                return a.forEach((function(i) {
                    var t = o(e, i);
                    t && n.definitions.push(t)
                })), n
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), r[e.name.value] = i
                }
            })), e.exports = t, e.exports.featuredImage = l(t, "featuredImage"), e.exports.outsideImage = l(t, "outsideImage"), e.exports.verticalFeaturedImageDetails = l(t, "verticalFeaturedImageDetails"), e.exports.postAuthorDetails = l(t, "postAuthorDetails"), e.exports.featuredGallery = l(t, "featuredGallery"), e.exports.details = l(t, "details")
        },
        Kcl6: function(e, i, n) {
            "use strict";
            var t = n("Miz2"),
                a = n("VBdi"),
                d = n.n(a),
                r = n("QXYw"),
                o = n("P/sV"),
                l = n("LCyj"),
                s = (n("w2Az"), n("dVLG"));
            const c = Object(a.forwardRef)((e, i) => {
                let {
                    children: n,
                    ...a
                } = e;
                return Object(s.c)("div", Object(t.a)({}, a, {
                    ref: i
                }), n)
            });
            i.a = e => {
                let {
                    children: i,
                    className: n,
                    vertical: u = "bottom",
                    horizontal: m = "center",
                    ...v
                } = e;
                const k = Object(o.a)(),
                    f = Object(r.a)(),
                    [g, p] = d.a.useState(!1);
                Object(a.useEffect)(() => {
                    var e;
                    if (!f) return;
                    const i = e => {
                        "Escape" === e.key && p(!1)
                    };
                    return null === (e = window) || void 0 === e || e.addEventListener("keydown", i), () => {
                        var e;
                        return null === (e = window) || void 0 === e ? void 0 : e.removeEventListener("keydown", i)
                    }
                }, [f]);
                const b = Object(a.useCallback)(() => {
                        k && p(!g)
                    }, [k, g, p]),
                    N = Object(a.useCallback)(() => {
                        p(!0)
                    }, [p]),
                    S = Object(a.useCallback)(() => {
                        p(!1)
                    }, [p]),
                    h = Object(s.c)(c, {
                        onClick: b,
                        onMouseEnter: N,
                        onMouseLeave: S,
                        className: "tooltip-hoverable",
                        "data-testid": "tooltip-hoverable"
                    }, i);
                return Object(s.c)(d.a.Fragment, null, g && Object(s.c)(l.a, Object(t.a)({
                    horizontal: m,
                    vertical: u,
                    closable: k,
                    className: n,
                    onClose: S
                }, v), h), !g && h)
            }
        },
        KtfA: function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "newsletterDetails"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "newsletterDetails"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "listIds"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 62
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.newsletterDetails = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "newsletterDetails")
        },
        LCyj: function(e, i, n) {
            "use strict";
            var t = n("AAFT"),
                a = n.n(t),
                d = n("VBdi"),
                r = n("MwNz"),
                o = n("QXYw"),
                l = n("w8RO"),
                s = (n("aRJ7"), n("dVLG"));
            const c = {
                "bottom-left": e => {
                    let {
                        height: i
                    } = e;
                    return {
                        left: 0,
                        top: i + 10 + "px"
                    }
                },
                "bottom-right": e => {
                    let {
                        height: i
                    } = e;
                    return {
                        top: i + 10 + "px",
                        right: 0
                    }
                },
                "bottom-center": e => {
                    let {
                        height: i,
                        width: n
                    } = e;
                    return {
                        top: i + 10 + "px",
                        left: n / 2 + "px"
                    }
                },
                "top-center": e => {
                    let {
                        height: i,
                        width: n
                    } = e;
                    return {
                        bottom: i + 10 + "px",
                        left: n / 2 + "px"
                    }
                }
            };
            i.a = e => {
                let {
                    id: i,
                    text: n,
                    onClick: t,
                    onClose: u,
                    closable: m = !0,
                    className: v = "",
                    vertical: k = "bottom",
                    horizontal: f = "left",
                    testId: g,
                    children: p
                } = e;
                const [b, N] = Object(d.useState)({}), S = Object(o.a)(), h = Object(d.useRef)(), O = r.a.get("i18n").t("Close Tooltip"), y = `${k}-${f}`, j = "function" === typeof t ? "button" : "p";
                Object(d.useEffect)(() => {
                    if (!h.current || !S) return;
                    const e = h.current.getBoundingClientRect(),
                        i = c[y](e);
                    ((e, i) => {
                        const n = Object.keys(e),
                            t = Object.keys(i);
                        return n.length !== t.length || t.some(n => i[n] !== e[n])
                    })(b, i) && N(i)
                }, [h.current, S, y, b]);
                const E = d.cloneElement(d.Children.only(p), {
                        "aria-describedby": i,
                        ref: h
                    }),
                    w = a()("tooltip tooltip--" + y, v, {
                        closable: m
                    });
                return S && h.current ? Object(s.c)("div", {
                    className: "tooltip_container"
                }, E, Object(s.c)("a", {
                    className: w,
                    style: b,
                    "aria-live": "assertive",
                    "aria-atomic": "true"
                }, Object(s.c)(j, {
                    id: i,
                    className: "tooltip_text",
                    onClick: e => {
                        e.target === e.currentTarget && t && t(e)
                    },
                    tabIndex: t ? 0 : -1,
                    "data-testid": g
                }, n), m && Object(s.c)(l.a, {
                    name: "close",
                    className: "no-styles-button tooltip_close-btn",
                    label: O,
                    title: O,
                    size: 32,
                    color: "white",
                    role: "button",
                    onClick: u,
                    isFocusable: !0
                }))) : E
            }
        },
        LkAa: function(e, i, n) {
            "use strict";
            var t = n("dQgG"),
                a = n("VBdi"),
                d = n("96Qw"),
                r = n("tkbZ"),
                o = n("3mCM"),
                l = n("Ot6i"),
                s = n("xAi6"),
                c = n("9N7U"),
                u = n("KthT"),
                m = n("j6Iu"),
                v = (n("qELc"), n("dVLG"));
            const k = e => {
                let {
                    autoplay: i,
                    channelId: n,
                    videoId: k,
                    videoLink: f,
                    label: g,
                    streaming: p = !1,
                    videoPlacement: b = "",
                    startMuted: N = !0,
                    closedCaptions: S = !1,
                    isPlayerClicked: h
                } = e;
                const [O, y] = Object(a.useState)(!0), j = Object(a.useRef)(null), E = Object(d.useLocation)(), w = null === E || void 0 === E ? void 0 : E.state, {
                    internalClick: F
                } = null !== w && void 0 !== w ? w : {};
                if (Object(a.useEffect)(() => () => {
                        Object(o.b)() && (() => {
                            var e;
                            if ((null === j || void 0 === j || null === (e = j.current) || void 0 === e ? void 0 : e.getPlayerState()) === s.YOUTUBE_PLAYER_STATE_PLAYING) {
                                const e = {};
                                Object(l.l)(e, "watchtime", Object(u.k)("Stop", null === j || void 0 === j ? void 0 : j.current)), C(null === j || void 0 === j ? void 0 : j.current, e, !0)
                            }
                        })()
                    }, []), "" === n && "" === k) return null;
                const T = {
                    height: "480",
                    width: "854",
                    playerVars: {
                        autoplay: i ? 1 : 0,
                        mute: Number(!!N),
                        rel: 0,
                        showinfo: 1,
                        fs: 1,
                        frameBorder: 0,
                        cc_load_policy: S ? 1 : 0,
                        cc_lang_pref: "en"
                    }
                };
                let V = "",
                    P = 0;
                "" !== n && (T.playerVars.channel = n, V = "live_stream"), "" !== k && (V = k);
                const D = function(e, i, n) {
                        let t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "UserStop";
                        A(e, i, n), "Stop" === e && Object(l.l)(i, "stopCause", t)
                    },
                    A = (e, i, n) => {
                        if (t.canUseDOM && window.getMetaValue) {
                            const e = window.getMetaValue("pageType", "name", null),
                                n = window.getMetaValue("primaryTopic", "name", null),
                                t = window.getMetaValue("tags", "name", null),
                                a = window.getMetaValue("programTaxonomy", "name", null),
                                d = window.getMetaValue("recirculationSource", "name", null),
                                r = window.getMetaValue("siteModule", "name", null),
                                o = window.getMetaValue("siteSection", "name", null),
                                s = window.getMetaValue("pageLink", "name", null),
                                u = window.getMetaValue("postLink", "name", null),
                                m = f || s || u || window.location.pathname;
                            Object(l.l)(i, "videoLink", Object(c.safeDecodeString)("/" === m ? "/" : Object(c.untrailingSlashIt)(m))), Object(l.l)(i, "sourceOpen", document.referrer), Object(l.l)(i, "siteSection", o), Object(l.l)(i, "videoSection", e), Object(l.l)(i, "videoTopic", n), Object(l.l)(i, "videoTag", t), Object(l.l)(i, "program", a), Object(l.l)(i, "videoId", k), Object(l.l)(i, "recirculationSource", d), Object(l.l)(i, "siteModule", r)
                        }
                        const a = n.getVideoData(),
                            d = n.getDuration(),
                            r = n.getCurrentTime();
                        i.subscriptionStatus = "Not Subscribed", i.videoSource = s.AMPLITUDE_EVENT_PROPERTY_VALUES.video_source.youtube, i.mediaSource = s.AMPLITUDE_EVENT_PROPERTY_VALUES.video_source.youtube, i.streaming = p, Object(l.l)(i, "autoplay", "Autoplay" === e && !h), Object(l.l)(i, "videoTitle", a.title), b && Object(l.l)(i, "videoPlacement", b), !p && r && Object(l.l)(i, "currentPosition", Math.round(r)), p ? (i.videoType = s.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.streaming, i.mediaType = s.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.streaming, Object(l.l)(i, "click", Object(u.j)(F, e))) : (i.videoType = s.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.vod, i.mediaType = s.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.vod, i.duration = Math.round(d), "Stop" === e && Object(l.l)(i, "percentageWatched", Object(m.a)(r, d))), Object(l.l)(i, "fileUrl", Object(u.f)(k))
                    };
                let I = null,
                    _ = null;
                const L = () => {
                        clearTimeout(I), clearTimeout(_)
                    },
                    C = function(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        Object(o.b)() && (D("Stop", i, e, n ? s.AMPLITUDE_EVENT_PROPERTY_VALUES.stop_cause.user_navigation : s.AMPLITUDE_EVENT_PROPERTY_VALUES.stop_cause.user_stop), Object(l.e)("VideoStopped", i))
                    };
                return Object(v.c)("div", {
                    className: "youtube-live-stream-player"
                }, Object(v.c)(r.a, {
                    videoId: V,
                    opts: T,
                    containerClassName: "video-container",
                    className: "video-js pause-controller",
                    onStateChange: e => {
                        switch (e.data) {
                            case s.YOUTUBE_PLAYER_STATE_PLAYING:
                                (e => {
                                    const t = i && O ? "Autoplay" : "Play";
                                    y(!1), P++, L(), I = setTimeout(() => {
                                        if (P < 2) {
                                            if (Object(o.b)()) {
                                                Object(u.k)(t, e);
                                                const i = {};
                                                A(t, i, e), Object(l.e)("VideoStarted", i)
                                            }
                                        } else Object(o.b)() && Object(u.k)(t, e, "YT", !!p);
                                        P = 0, !N && e.unMute()
                                    }, 500), Object(u.i)({
                                        mediaId: "" !== n ? "live_stream" : e.playerInfo.videoData.video_id,
                                        element: document.body
                                    })
                                })(e.target);
                                break;
                            case s.YOUTUBE_PLAYER_STATE_PAUSED:
                                (e => {
                                    P++;
                                    const i = {};
                                    Object(l.l)(i, "watchtime", Object(u.k)("Stop", e)), L(), _ = setTimeout(() => {
                                        P < 2 && C(e, i), P = 0
                                    }, 5e3)
                                })(e.target);
                                break;
                            case s.YOUTUBE_PLAYER_STATE_ENDED:
                                (e => {
                                    const i = {};
                                    Object(l.l)(i, "watchtime", Object(u.k)("Stop", e)), C(e, i)
                                })(e.target)
                        }
                    },
                    onReady: e => {
                        var i;
                        (null === (i = j.current) || void 0 === i ? void 0 : i.getVideoData) || (j.current = e.target)
                    }
                }))
            };
            k.defaultProps = {
                channelId: "",
                videoId: "",
                label: ""
            }, i.a = k
        },
        M1st: function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return a
            }));
            var t = n("VBdi");
            const a = (e, i, n) => {
                Object(t.useEffect)(() => {
                    if (!i || i()) return null === e || void 0 === e ? void 0 : e()
                }, n)
            }
        },
        "M8c/": function(e, i, n) {},
        MwNz: function(e, i, n) {
            "use strict";
            var t = n("dQgG"),
                a = n("7RPU");
            const d = {
                seo: {},
                DEFAULT_POST_TYPES: ["blog", "episode", "opinion", "post", "video", "external-article", "gallery", "podcast", "longform", "liveblog"],
                APPLICATION_ENV: "production",
                BRIGHTCOVE_ENV: "production",
                ONESIGNAL_CONFIG: {
                    appId: "fb3606cf-1b0a-44e7-b314-9c4173ac1b5e",
                    safariWebId: "web.onesignal.auto.477dedc8-8bcf-40fd-b64c-238033111672"
                },
                ANALYTICS_META_PROPS: n("xAi6").ANALYTICS_META_PROPS,
                programsPage: {
                    displayArtwork: !0
                }
            };
            i.a = new class {
                get(e) {
                    let i;
                    if (i = t.canUseDOM ? window.__archipelago_ui_config : this.config, !i) throw new Error("attempt to get config before setting it");
                    return e ? i[e] : i
                }
                set(e) {
                    for (const i of Object.keys(d)) e.hasOwnProperty(i) || (e[i] = d[i]);
                    e.language && Object(a.u)(e.language), t.canUseDOM ? window.__archipelago_ui_config = e : this.config = e
                }
            }
        },
        N4w9: function(e, i, n) {
            "use strict";
            n.d(i, "b", (function() {
                return d
            })), n.d(i, "a", (function() {
                return r
            })), n.d(i, "d", (function() {
                return o
            })), n.d(i, "e", (function() {
                return l
            })), n.d(i, "c", (function() {
                return s
            }));
            var t = n("VBdi"),
                a = n.n(t);
            const d = a.a.createContext(""),
                r = a.a.createContext({
                    theme: {
                        primaryColor: "blue",
                        tickerBackgroundColor: "red"
                    },
                    isAMP: !1
                }),
                o = () => {
                    const e = Object(t.useContext)(r);
                    if (void 0 === e) throw new Error("useHeaderContext must be used within an ArchipelagoContext");
                    return e
                },
                l = () => !!o().isAMP,
                s = a.a.createContext("")
        },
        NCGS: function(e, i, n) {
            "use strict";
            var t = n("VBdi"),
                a = n("PrL2");
            i.a = (e, i, n, d) => {
                const r = void 0 === e || !(i instanceof Date) || d < 0,
                    o = Object(t.useMemo)(() => {
                        if (!r) return new a.a(i, e)
                    }, [r, i, e]),
                    [l, s] = Object(t.useState)((null === o || void 0 === o ? void 0 : o.getCurrentProgramme(i, n)) || null),
                    [c, u] = Object(t.useState)((null === o || void 0 === o ? void 0 : o.getNextProgramme(i, n)) || null);
                return Object(t.useEffect)(() => {
                    if (r) return;
                    const e = setInterval(() => {
                        i.setTime(i.getTime() + 1e3);
                        const e = o.getCurrentProgramme(i, n),
                            t = o.getNextProgramme(i, n);
                        s(e), u(t)
                    }, d);
                    return () => clearInterval(e)
                }, []), [l, c]
            }
        },
        NH8k: function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ArchipelagoTVBreakingTickerQuery"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "breakingNews"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "post"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tickerTitle"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tickerText"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "modified"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "link"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "tvBreakingNews"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "ticker"
                                },
                                value: {
                                    kind: "BooleanValue",
                                    value: !0
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "text"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "createdAt"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "active"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "article"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "link"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 269
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.ArchipelagoTVBreakingTickerQuery = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "ArchipelagoTVBreakingTickerQuery")
        },
        NNun: function(e, i, n) {},
        Ne5u: function(e, i, n) {
            "use strict";
            var t = n("VBdi"),
                a = n("d4yW"),
                d = n("9N7U"),
                r = n("w8RO"),
                o = (n("pmpo"), n("dVLG"));
            i.a = e => {
                let {
                    article: i
                } = e;
                return "external-article" === (null === i || void 0 === i ? void 0 : i.postType) && Object(d.isWhitelistedArticle)(i.link) ? Object(o.c)(t.Fragment, null, Object(o.c)(r.a, {
                    className: "external-link-whitelisted__icon",
                    name: "external-link",
                    size: 12,
                    title: "External Link",
                    viewBox: "0 0 16 16"
                }), Object(o.c)("span", {
                    className: "screen-reader-text"
                }, Object(o.c)(a.a, null, "Opens new browser SR Text"))) : null
            }
        },
        OlZM: function(e, i, n) {
            "use strict";
            var t = n("AAFT"),
                a = n.n(t),
                d = n("VBdi"),
                r = n("w8RO"),
                o = n("wPnK"),
                l = (n("vYlG"), n("dVLG"));
            i.a = e => {
                let {
                    status: i,
                    show: n,
                    ctaText: t,
                    title: s,
                    message: c,
                    close: u,
                    toastLoadedCallback: m,
                    closeIcon: v = !0,
                    customClass: k,
                    ctaOnClick: f,
                    ctaTimer: g = 0,
                    loading: p = !1
                } = e;
                const [b, N] = Object(d.useState)(g), [S, h] = Object(d.useState)(!1), O = a()("toast-popup", i, n ? "show" : "", k);
                return Object(d.useEffect)(() => {
                    if (b > 0) {
                        const e = setInterval(() => {
                            N(e => e <= 1 ? (h(!1), 0) : e - 1)
                        }, 1e3);
                        return () => {
                            clearInterval(e)
                        }
                    }
                }, [b]), Object(d.useEffect)(() => {
                    g > 0 && (h(!0), N(g))
                }, [g]), Object(d.useEffect)(() => {
                    "function" === typeof m && m(!0)
                }, []), Object(l.c)("div", {
                    className: O,
                    role: t ? "alertdialog" : "dialog",
                    "aria-live": !0,
                    "aria-atomic": !0,
                    "aria-labelledby": "toast-popup__message-title",
                    "aria-describedby": "toast-popup__message-content"
                }, Object(l.c)(r.a, {
                    name: i,
                    size: 24,
                    viewBox: "0 0 24 24"
                }), Object(l.c)("div", {
                    className: "toast-popup__message"
                }, s && Object(l.c)("p", {
                    className: "toast-popup__message-title"
                }, s), Object(l.c)("p", {
                    className: "toast-popup__message-content"
                }, c), p && Object(l.c)(o.a, null), t && !p && Object(l.c)("button", {
                    className: "cta no-styles-button",
                    type: "button",
                    onClick: f,
                    disabled: S
                }, t, b > 0 && ` (${b})`)), v && Object(l.c)(r.a, {
                    name: "close",
                    onClick: u,
                    size: 12,
                    isFocusable: !0,
                    role: "button"
                }))
            }
        },
        OyXg: function(e, i, n) {
            "use strict";
            var t = n("AAFT"),
                a = n.n(t),
                d = (n("VBdi"), n("PNHx"), n("dVLG"));
            i.a = (e, i) => {
                let {
                    name: n,
                    index: t,
                    isActive: r,
                    className: o,
                    tabName: l,
                    onClick: s,
                    onKeyDown: c
                } = e;
                const u = a()("tab-header", o, {
                    "is-tab-active": r
                });
                return Object(d.c)("li", {
                    className: u,
                    key: i,
                    role: "tab",
                    "aria-controls": `${l}-tabpanel-${t}`,
                    id: `${l}-tab-${t}`,
                    "aria-selected": r
                }, Object(d.c)("button", {
                    className: "no-styles-button tab-header__button",
                    onClick: () => s(t),
                    onKeyDown: c,
                    tabIndex: r ? 0 : -1
                }, Object(d.c)("span", {
                    className: "tab-header__name"
                }, n)))
            }
        },
        "P/sV": function(e, i, n) {
            "use strict";
            var t = n("VBdi"),
                a = n("ekvm"),
                d = n("QXYw");
            i.a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.a.MOBILE_BREAKPOINT;
                const [i, n] = Object(t.useState)(a.a.isMobile(e)), r = Object(d.a)(), o = e => {
                    n(e.matches)
                };
                return Object(t.useEffect)(() => {
                    const i = window.matchMedia(`not all and (min-width: ${e}px)`);
                    return "addEventListener" in i ? i.addEventListener("change", o) : i.addListener(o), () => {
                        "removeEventListener" in i ? i.removeEventListener("change", o) : i.removeListener(o)
                    }
                }, []), !!r && i
            }
        },
        PNHx: function(e, i, n) {},
        "PS+N": function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return r
            }));
            var t = n("VBdi"),
                a = n("5ltI"),
                d = n("DLke");
            const r = () => {
                const [e, i] = Object(t.useState)(null), n = Object(d.a)();
                return Object(t.useEffect)(() => {
                    if (!n) return;
                    const t = Object.keys(window.localStorage).find(e => e.startsWith("firebase:authUser:"));
                    let d;
                    try {
                        d = t ? JSON.parse(window.localStorage.getItem(t)) : null
                    } catch (r) {
                        console.error("Unable to decode user data", r)
                    }
                    d && !e && (Object(a.b)(), i(d))
                }, [n]), e
            }
        },
        PutW: function(e, i, n) {
            "use strict";
            var t = n("VBdi"),
                a = n("w8RO"),
                d = n("6eQp"),
                r = (n("NNun"), n("dVLG"));
            i.a = e => {
                let {
                    onContinueClick: i,
                    isOpen: n,
                    onClose: o,
                    title: l,
                    description: s,
                    buttonLabel: c,
                    closeButtonLabel: u,
                    onModalOpen: m
                } = e;
                const v = Object(t.useRef)(null),
                    k = Object(t.useCallback)(() => {
                        v.current && n && v.current.focus(), "function" === typeof m && m()
                    }, [n, v.current]);
                return Object(r.c)("div", {
                    className: n ? "" : "hidden"
                }, Object(r.c)(d.a, {
                    isOpen: n,
                    onRequestClose: o,
                    aria: {
                        labelledby: l,
                        describedby: l
                    },
                    overlayClassName: "user-accounts-modal__overlay",
                    className: "user-accounts-modal",
                    onAfterOpen: k
                }, Object(r.c)("h1", {
                    className: "user-accounts-modal__title"
                }, l), Object(r.c)("button", {
                    className: "user-accounts-modal__btn-close",
                    type: "button",
                    onClick: o,
                    "aria-label": u
                }, Object(r.c)(a.a, {
                    name: "close",
                    color: "black",
                    size: 24,
                    role: "button"
                })), Object(r.c)("p", {
                    className: "user-accounts-modal__content"
                }, s), Object(r.c)("button", {
                    type: "button",
                    className: "user-accounts-modal__continue",
                    onClick: i,
                    ref: v
                }, c)))
            }
        },
        QXYw: function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return a
            }));
            var t = n("VBdi");
            const a = () => {
                const [e, i] = Object(t.useState)(!1);
                return Object(t.useEffect)(() => {
                    e || i(!0)
                }, []), e
            }
        },
        SZcm: function(e, i, n) {
            "use strict";
            var t = n("Miz2"),
                a = n("niUx"),
                d = n("AAFT"),
                r = n.n(d),
                o = n("dQgG"),
                l = n("VBdi"),
                s = n.n(l),
                c = n("0B7w"),
                u = n("ekvm"),
                m = n("9N7U"),
                v = n("KthT"),
                k = n("aPqV"),
                f = n("C9Dh"),
                g = n("vQ8D"),
                p = n("yDnS"),
                b = (n("uUtH"), n("+JkO")),
                N = n("dVLG");
            const S = s.a.forwardRef((e, i) => {
                    const {
                        duration: n,
                        showVideoDuration: t
                    } = e, [a, d] = Object(l.useState)(!!t);
                    return Object(l.useImperativeHandle)(i, () => ({
                        hide: () => {
                            d(!1)
                        }
                    }), []), a && Object(N.c)(p.a, {
                        duration: n
                    })
                }),
                h = s.a.forwardRef((e, i) => {
                    const n = e.loadingComponent,
                        [t, a] = Object(l.useState)(!0);
                    return Object(l.useImperativeHandle)(i, () => ({
                        hide: () => {
                            a(!1)
                        }
                    }), []), t && Object(N.c)(n, null)
                }),
                O = e => {
                    var i;
                    const {
                        className: n,
                        videoId: d,
                        bcPlaybackUrl: f = "",
                        autoPlayDesktop: p,
                        autoPlayMobile: O,
                        label: y,
                        enablePIP: j,
                        onFailure: E,
                        streaming: w = !1,
                        featuredImageURL: F,
                        duration: T,
                        shouldWrapInFigure: V,
                        includeFigCaption: P,
                        enablePlaylist: D,
                        playListTerm: A,
                        videoPlacement: I,
                        postLink: _,
                        articleLink: L,
                        videoLink: C,
                        showVideoDuration: M = !0,
                        amplitudeExperimentId: R,
                        videoPlayerId: x,
                        videoAccountId: U,
                        isPlayerClicked: B,
                        onPlayerSuccess: z,
                        playerOptions: Y
                    } = e, [H] = Object(l.useState)(u.a.isMobile()), Q = Object(l.useRef)(!1), G = Object(l.useRef)(!1), W = Object(l.useRef)(!1), q = Object(l.useRef)(!1), K = Object(l.useRef)(), X = Object(l.useRef)({}), J = Object(l.useRef)(null), $ = Object(l.useRef)(), Z = Object(l.useRef)(), ee = {}, ie = Object(c.a)(R), ne = function(e, i) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        Object(b.a)({
                            eventAction: e,
                            eventProperties: ee,
                            videoPlayer: i,
                            videoPlacement: I,
                            streaming: w,
                            videoLink: C,
                            articleLink: L,
                            postLink: _,
                            autoPlaying: n,
                            amplitudeExperimentId: R,
                            isPlayerClicked: B
                        })
                    };
                    Object(l.useEffect)(() => ((() => {
                        var e;
                        o.canUseDOM && (null === (e = window.google) || void 0 === e ? void 0 : e.ima) && u.a.isIOS() && (window.google.ima = null)
                    })(), q.current = Object(v.l)(H, O, p), J.current = setInterval(() => {
                        var e, i, n, t;
                        "undefined" !== typeof bc && "undefined" !== typeof(null === (e = Z.current) || void 0 === e || null === (i = e.hide) || void 0 === i ? void 0 : i.call(e)) && (null === (n = Z.current) || void 0 === n || null === (t = n.hide) || void 0 === t || t.call(n), clearInterval(J.current))
                    }), () => {
                        Object(b.e)({
                            playerPlayingRef: W,
                            playerRef: G,
                            videoShouldAutoPlay: q,
                            eventProperties: ee,
                            feedEventProperties: ne
                        }), clearInterval(J.current)
                    }), []);
                    const te = () => {
                            if (!D) return null;
                            const e = D && "1" === X.current.variant;
                            return {
                                dimension21: e ? "Playlist" : "Video",
                                dimension22: e ? X.current.currentIndex + 1 : null,
                                dimension23: e ? A : null
                            }
                        },
                        ae = e => {
                            K.current && (K.current.textContent = e)
                        },
                        de = Object(k.d)(U);
                    let re = x || Object(k.h)(de);
                    (null === ie || void 0 === ie || null === (i = ie.payload) || void 0 === i ? void 0 : i.playerId) && (re = ie.payload.playerId);
                    const oe = Object(l.useCallback)((e, i) => {
                        Object(b.b)(e, i)
                    }, [re]);
                    if (!d || !de || !re) return null;
                    if (R && !1 === ie) return Object(N.c)("div", {
                        className: r()("aj-video-player", n)
                    });
                    let le = {};
                    if (F) {
                        le = {
                            poster: `${F}?${H?"h=300&w=532":"h=540&w=961"}`
                        }
                    }
                    const se = {
                            accountId: de,
                            playerId: re,
                            videoId: d
                        },
                        ce = {
                            id: d,
                            name: y,
                            thumbnail: le.poster,
                            duration: T
                        },
                        ue = q.current;
                    var me;
                    (p || O) && (null === (me = $.current) || void 0 === me || me.hide());
                    const ve = Object(N.c)(s.a.Fragment, null, Object(N.c)(a.a, Object(t.a)({
                        attrs: {
                            className: r()("aj-video-player", n)
                        }
                    }, se, {
                        embedOptions: {
                            pip: j
                        },
                        options: { ...Y,
                            ...le
                        },
                        onSuccess: i => {
                            var n, t, a;
                            G.current = i.ref;
                            const d = null === G || void 0 === G || null === (n = G.current) || void 0 === n || null === (t = n.player) || void 0 === t ? void 0 : t.call(n);
                            f && (e => {
                                null === e || void 0 === e || e.on("error", i => {
                                    var n, t, a;
                                    if (!e || !0 === Q.current) return null;
                                    4 === (null === (n = i.target) || void 0 === n || null === (t = n.player) || void 0 === t || null === (a = t.error()) || void 0 === a ? void 0 : a.code) && (null === e || void 0 === e || e.src(f), Q.current = !0)
                                })
                            })(d), null === z || void 0 === z || z(i), oe(i, { ...e,
                                isMobile: H,
                                getCustomDimensions: te,
                                eventProperties: ee,
                                feedVideoEventProperties: b.a,
                                videoShouldAutoPlayVal: ue,
                                videoFigcaptionUpdateHandler: ae,
                                playerPlayingRef: W
                            }), null === (a = $.current) || void 0 === a || a.hide()
                        },
                        onFailure: E
                    })), Object(N.c)(S, {
                        ref: $,
                        duration: T,
                        isVisible: !(p || O) && M
                    }));
                    return Object(N.c)(s.a.Fragment, null, Object(N.c)(h, {
                        loadingComponent: e.loadingComponent,
                        ref: Z
                    }), V ? Object(N.c)("figure", {
                        className: "bc-featured-video-wrapper",
                        role: "presentation"
                    }, ve, Object(m.supportsFigCaption)() && P && Object(N.c)("figcaption", {
                        ref: K
                    }, y)) : ve, D && Object(N.c)(g.a, {
                        initialVideo: ce,
                        term: A,
                        player: G.current,
                        ref: X
                    }))
                };
            O.defaultProps = {
                autoPlayDesktop: !1,
                autoPlayMobile: !1,
                autoPlayMuted: !1,
                featuredImageURL: !1,
                onVideoDataLoaded: null,
                onVideoCanPlay: null,
                enablePIP: !1,
                loadingComponent: f.a,
                customEventHandlers: {}
            }, i.a = O
        },
        T2V2: function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "explainerWidgetDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Post"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "explainerWidget"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "title"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "posts"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "link"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            alias: {
                                                kind: "Name",
                                                value: "postType"
                                            },
                                            name: {
                                                kind: "Name",
                                                value: "type"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "externalUrl"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "explainerTitle"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "title"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "termTitle"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "termLink"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 225
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.explainerWidgetDetails = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "explainerWidgetDetails")
        },
        Tv4X: function(e, i, n) {},
        Um3c: function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return d
            }));
            var t = n("dQgG"),
                a = n("VBdi");
            const d = () => {
                const [e, i] = Object(a.useState)(!1);
                return Object(a.useEffect)(() => {
                    if (!t.canUseDOM || !document) return;
                    const n = () => {
                        const n = "visible" === (document.visibilityState || document.webkitVisibilityState || "visible");
                        n !== e && i(n)
                    };
                    return n(), document.addEventListener("visibilitychange", n), () => document.removeEventListener("visibilitychange", n)
                }, [t.canUseDOM]), e
            }
        },
        Vtjr: function(e, i, n) {
            "use strict";
            n.d(i, "b", (function() {
                return r
            })), n.d(i, "a", (function() {
                return o
            }));
            var t = n("VBdi"),
                a = n("dVLG");
            const d = Object(t.createContext)(),
                r = () => Object(t.useContext)(d) || {},
                o = e => {
                    let {
                        children: i
                    } = e;
                    const [n, r] = Object(t.useState)(), [o, l] = Object(t.useState)(), [s, c] = Object(t.useState)();
                    return Object(a.c)(d.Provider, {
                        value: {
                            audioPlayer: n,
                            setAudioPlayer: r,
                            playerPercentComplete: o,
                            setPlayerPercentComplete: l,
                            playerStatus: s,
                            setPlayerStatus: c
                        }
                    }, i)
                }
        },
        YSgp: function(e, i, n) {
            var t = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ArchipelagoMenuQuery"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "menu"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "title"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "items"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "menuItem"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 199
                    }
                },
                a = {};
            t.definitions = t.definitions.concat(n("6nVt").definitions.filter((function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var i = e.name.value;
                return !a[i] && (a[i] = !0, !0)
            })));
            var d = {};

            function r(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), d[e.name.value] = i
                }
            })), e.exports = t, e.exports.ArchipelagoMenuQuery = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [r(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var t = d[i] || new Set,
                    a = new Set,
                    o = new Set;
                for (t.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        a.has(e) || (a.add(e), (d[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return a.forEach((function(i) {
                    var t = r(e, i);
                    t && n.definitions.push(t)
                })), n
            }(t, "ArchipelagoMenuQuery")
        },
        YUtL: function(e, i, n) {
            "use strict";
            var t = n("VBdi"),
                a = n("7tCN");
            i.a = (e, i) => {
                Object(t.useEffect)(() => {
                    e && !i && Object(a.k)(e)
                }, [])
            }
        },
        YjUV: function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "MyAccountPageQuery"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "skipUserCreation"
                                },
                                value: {
                                    kind: "BooleanValue",
                                    value: !0
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isPersonalDataRequested"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "readingList"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "AJA"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "AJB"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "AJC"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "AJD"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "AJE"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "AJM"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "consent"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "newsletterPurpose"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 194
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.MyAccountPageQuery = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "MyAccountPageQuery")
        },
        "Z4+R": function(e, i, n) {},
        ZEv9: function(e, i, n) {
            "use strict";
            var t = n("/WA2"),
                a = n("gzET"),
                d = n.n(a),
                r = n("VBdi"),
                o = n.n(r),
                l = n("C9Dh"),
                s = n("dVLG");
            const c = Object(t.a)({
                resolved: {},
                chunkName: () => "vertical-video-experience",
                isReady(e) {
                    const i = this.resolve(e);
                    return !0 === this.resolved[i] && !!n.m[i]
                },
                importAsync: () => Promise.all([n.e(1), n.e(2), n.e(41)]).then(n.bind(null, "Xfq/")),
                requireAsync(e) {
                    const i = this.resolve(e);
                    return this.resolved[i] = !1, this.importAsync(e).then(e => (this.resolved[i] = !0, e))
                },
                requireSync(e) {
                    const i = this.resolve(e);
                    return n(i)
                },
                resolve() {
                    return "Xfq/"
                }
            }, {
                fallback: Object(s.c)(l.a, null)
            });
            c.propTypes = {
                isModalOpen: d.a.bool.isRequired,
                onModalClose: d.a.func.isRequired,
                initialVideo: d.a.shape({
                    id: d.a.string.isRequired,
                    startTime: d.a.number
                }),
                initialVideoList: d.a.arrayOf(d.a.shape({
                    id: d.a.string.isRequired,
                    startTime: d.a.number
                })),
                fetchMoreOffset: d.a.number,
                siteSection: d.a.string
            }, i.a = c
        },
        aRJ7: function(e, i, n) {},
        d2yh: function(e, i, n) {
            var t = {
                    kind: "Document",
                    definitions: [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "postDetails"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Post"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "title"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "link"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "replacementHeadline"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "featuredImage"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "mediaDetails"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "outsideImage"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "mediaDetails"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "postType"
                                },
                                name: {
                                    kind: "Name",
                                    value: "type"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "externalUrl"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "galleryImagesCount"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "video"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "duration"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "featuredYoutube"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ArchipelagoMoreFromTopic"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "category"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "postTypes"
                                }
                            },
                            type: {
                                kind: "ListType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "authorName"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "allPostTypes"
                                }
                            },
                            type: {
                                kind: "ListType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "trendingCategory"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "currentPostType"
                                }
                            },
                            type: {
                                kind: "ListType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "articleList"
                                },
                                name: {
                                    kind: "Name",
                                    value: "posts"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "9"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "options"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "postTypes"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "postTypes"
                                                }
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "authorName"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "authorName"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "orderBy"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "DATE"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "direction"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "DESC"
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "postDetails"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "trendingArticleList"
                                },
                                name: {
                                    kind: "Name",
                                    value: "posts"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "category"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "trendingCategory"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "categoryType"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "trending",
                                        block: !1
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "9"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "options"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "postTypes"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "allPostTypes"
                                                }
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "orderBy"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "DATE"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "direction"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "DESC"
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "postDetails"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "topicArticleList"
                                },
                                name: {
                                    kind: "Name",
                                    value: "posts"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "category"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "category"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "categoryType"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "categories",
                                        block: !1
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "9"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "options"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "postTypes"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "allPostTypes"
                                                }
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "orderBy"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "DATE"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "direction"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "DESC"
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "postDetails"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "postTypeArticleList"
                                },
                                name: {
                                    kind: "Name",
                                    value: "posts"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "9"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "options"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "postTypes"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "currentPostType"
                                                }
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "orderBy"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "DATE"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "direction"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "DESC"
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "postDetails"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "mostRecent"
                                },
                                name: {
                                    kind: "Name",
                                    value: "mostPopular"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "postDetails"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 1624
                    }
                },
                a = {};
            t.definitions = t.definitions.concat(n("tL9X").definitions.filter((function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var i = e.name.value;
                return !a[i] && (a[i] = !0, !0)
            })));
            var d = {};

            function r(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }

            function o(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [r(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var t = d[i] || new Set,
                    a = new Set,
                    o = new Set;
                for (t.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        a.has(e) || (a.add(e), (d[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return a.forEach((function(i) {
                    var t = r(e, i);
                    t && n.definitions.push(t)
                })), n
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), d[e.name.value] = i
                }
            })), e.exports = t, e.exports.postDetails = o(t, "postDetails"), e.exports.ArchipelagoMoreFromTopic = o(t, "ArchipelagoMoreFromTopic")
        },
        eaT1: function(e, i, n) {},
        eaup: function(e, i, n) {
            "use strict";
            var t = n("Miz2"),
                a = (n("VBdi"), n("wPnK")),
                d = (n("eaT1"), n("dVLG"));
            i.a = e => {
                let {
                    text: i,
                    isActive: n,
                    isLoading: r,
                    ...o
                } = e;
                return r ? Object(d.c)("div", {
                    className: "aj-form__submit-button loading"
                }, Object(d.c)("wbr", null), Object(d.c)(a.a, {
                    allyLoadingAnnouncement: !0
                })) : Object(d.c)("button", Object(t.a)({}, o, {
                    className: "aj-form__submit-button " + (n ? "active" : ""),
                    type: "submit"
                }), i)
            }
        },
        "f4b+": function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "postLabelDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Post"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "postLabel"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "featuredTaxonomy"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "featuredTaxonomyImage"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "type"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sourceUrl"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "caption"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "alt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "width"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "height"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sizes"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "sizeNames"
                                                },
                                                value: {
                                                    kind: "ListValue",
                                                    values: [{
                                                        kind: "StringValue",
                                                        value: "full",
                                                        block: !1
                                                    }]
                                                }
                                            }],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "crop"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "width"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "height"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "url"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "featuredActionLink"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 314
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.postLabelDetails = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "postLabelDetails")
        },
        fD7O: function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "searchBrightcoveVideo"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "query"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "limit"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int"
                            }
                        },
                        defaultValue: {
                            kind: "IntValue",
                            value: "5"
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int"
                            }
                        },
                        defaultValue: {
                            kind: "IntValue",
                            value: "0"
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "videos"
                            },
                            name: {
                                kind: "Name",
                                value: "searchBrightcoveVideo"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "query"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "query"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "limit"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "limit"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "offset"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "duration"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "thumbnail"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "accountId"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 214
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.searchBrightcoveVideo = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "searchBrightcoveVideo")
        },
        fWgI: function(e, i, n) {
            "use strict";
            var t = n("VBdi");
            i.a = function(e, i) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                const [a, d] = Object(t.useState)(!1);
                return Object(t.useEffect)(() => {
                    const t = new IntersectionObserver(i => {
                        let [a] = i;
                        d(a.isIntersecting), a.isIntersecting && (n || t.unobserve(e.current))
                    }, {
                        rootMargin: i
                    });
                    let a = -1;
                    return (null === e || void 0 === e ? void 0 : e.current) ? t.observe(e.current) : a = setInterval(() => {
                        (null === e || void 0 === e ? void 0 : e.current) && (clearInterval(a), t.observe(e.current))
                    }, 250), () => {
                        clearInterval(a), (null === e || void 0 === e ? void 0 : e.current) && t.unobserve(e.current)
                    }
                }, []), a
            }
        },
        hxtD: function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SearchQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "query"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "start"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int"
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "sort"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "searchPosts"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "query"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "query"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "start"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "start"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "sort"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "sort"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "kind"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "searchInformation"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "searchTime"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "formattedTotalResults"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalResults"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "formattedSearchTime"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "nextPage"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "items"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "kind"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "title"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "cacheId"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "htmlSnippet"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "formattedUrl"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "htmlTitle"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "snippet"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "link"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "pagemap"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "metatags"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "publishdt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "lastdt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cse_thumbnail"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "src"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cse_image"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "src"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "post"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "featuredImage"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "alt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "sourceUrl"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 576
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.SearchQuery = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "SearchQuery")
        },
        iUJ9: function(e, i, n) {
            "use strict";
            var t = n("Miz2"),
                a = n("gzET"),
                d = n.n(a),
                r = (n("VBdi"), n("Tv4X"), n("dVLG"));
            const o = e => {
                let {
                    children: i,
                    className: n = "",
                    onClick: a,
                    ariaLabel: d = ""
                } = e;
                const o = a ? {
                    onClick: a
                } : {};
                return Object(r.c)("button", Object(t.a)({}, d && {
                    "aria-label": d
                }, o, {
                    className: "vve-button-circular " + n
                }), i)
            };
            o.prototype = {
                children: d.a.node.isRequired,
                className: d.a.string,
                onClick: d.a.func
            }, i.a = o
        },
        izsT: function(e, i, n) {
            "use strict";
            var t = n("VBdi");
            i.a = function(e, i) {
                const n = Object(t.useRef)();
                Object(t.useEffect)(() => {
                    n.current = e
                }, [e]), Object(t.useEffect)(() => {
                    if (null !== i) {
                        const e = setInterval((function() {
                            n.current()
                        }), i);
                        return () => clearInterval(e)
                    }
                }, [i])
            }
        },
        j6Iu: function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return v
            })), n.d(i, "b", (function() {
                return g
            })), n.d(i, "c", (function() {
                return p
            }));
            var t = n("dQgG"),
                a = n("3mCM"),
                d = n("Ot6i"),
                r = n("xAi6"),
                o = n("9N7U"),
                l = n("KthT");
            let s = {};
            const c = e => {
                    Array.from(e).forEach((e, i) => {
                        if (!e.dataset.hasListener) {
                            e.dataset.hasListener = !0, e.id = e.id || "youtube-player-" + i;
                            const n = new URL(e.src);
                            n.searchParams.has("enablejsapi") || (n.searchParams.append("enablejsapi", "1"), e.src = n.href), window.YT.ready((function() {
                                new YT.Player(e.id, {
                                    events: {
                                        onStateChange: f
                                    }
                                })
                            }))
                        }
                    })
                },
                u = e => {
                    if (t.canUseDOM) {
                        Object(d.l)(e, "sourceOpen", document.referrer), Object(d.l)(e, "referralSource", document.referrer), e.videoType = r.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.vod, e.mediaType = r.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.vod, e.subscriptionStatus = "Not Subscribed";
                        let i = null;
                        if (window.getMetaValue) {
                            Object.assign(e, Object(d.g)());
                            const n = window.getMetaValue("pageType", "name", null);
                            i = window.getMetaValue("postLink", "name", null);
                            const t = window.getMetaValue("primaryTopic", "name", null),
                                a = window.getMetaValue("tags", "name", null),
                                r = window.getMetaValue("programTaxonomy", "name", null),
                                o = window.getMetaValue("recirculationSource", "name", null),
                                l = window.getMetaValue("siteModule", "name", null),
                                s = window.getMetaValue("siteSection", "name", null);
                            Object(d.l)(e, "videoSection", n), Object(d.l)(e, "videoTopic", t), Object(d.l)(e, "topics", t), Object(d.l)(e, "videoTag", a), Object(d.l)(e, "tag", a), Object(d.l)(e, "program", r), Object(d.l)(e, "autoplay", !1), Object(d.l)(e, "streaming", !1), Object(d.l)(e, "recirculationSource", o), Object(d.l)(e, "siteModule", l), Object(d.l)(e, "module", l), Object(d.l)(e, "siteSection", s), Object(d.l)(e, "section", s), Object(d.l)(e, "id", window.getMetaValue("postID", "name", null)), Object(d.l)(e, "date", window.getMetaValue("publishedDate", "name", null)), Object(d.l)(e, "title", window.getMetaValue("pageTitle", "name", null)), Object(d.l)(e, "type", n), Object(d.l)(e, "where", window.getMetaValue("where", "name", null))
                        }
                        const n = i || window.location.pathname;
                        Object(d.l)(e, "videoLink", Object(o.safeDecodeString)("/" === n ? "/" : Object(o.untrailingSlashIt)(n))), Object(d.l)(e, "link", Object(o.safeDecodeString)("/" === n ? "/" : Object(o.untrailingSlashIt)(n)))
                    }
                    return e
                },
                m = function(e) {
                    var i, n, a, o, c;
                    let m = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        k = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.AMPLITUDE_EVENT_PROPERTY_VALUES.stop_cause.user_stop,
                        f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.AMPLITUDE_EVENT_PROPERTY_VALUES.video_placement.in_content,
                        g = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.AMPLITUDE_EVENT_PROPERTY_VALUES.play_mode.control_play,
                        p = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                    s = {}, u(s);
                    const b = null === (i = e.offsetParent) || void 0 === i || null === (n = i.player) || void 0 === n ? void 0 : n.mediainfo,
                        N = (null === b || void 0 === b ? void 0 : b.custom_fields) || (null === b || void 0 === b ? void 0 : b.customFields);
                    let S = null === (a = e.offsetParent) || void 0 === a || null === (o = a.player) || void 0 === o || null === (c = o.cache_) || void 0 === c ? void 0 : c.currentTime;
                    if (t.canUseDOM) {
                        var h, O, y, j;
                        Object(d.l)(s, "videoTitle", null === b || void 0 === b ? void 0 : b.name), Object(d.l)(s, "videoId", null === b || void 0 === b ? void 0 : b.id), Object(d.l)(s, "videoDate", null === b || void 0 === b ? void 0 : b.createdAt), Object(d.l)(s, "date", null === b || void 0 === b ? void 0 : b.createdAt), Object(d.l)(s, "videoPlacement", f), Object(d.l)(s, "mediaTags", null === b || void 0 === b || null === (h = b.tags) || void 0 === h ? void 0 : h.join(",")), Object(d.l)(s, "mediaTopics", null === N || void 0 === N ? void 0 : N.aj_category), Object(d.l)(s, "playMode", g), null !== p && Object(d.l)(s, "playlistIndex", p + 1), (null === b || void 0 === b ? void 0 : b.duration) && Object(d.l)(s, "duration", Math.round(b.duration));
                        const i = (null === (O = e.offsetParent) || void 0 === O || null === (y = O.player) || void 0 === y || null === (j = y.cache_) || void 0 === j ? void 0 : j.duration) || null;
                        "Play" === m && S === i && (S = null), S && Object(d.l)(s, "currentPosition", Math.round(S)), i && "Stop" === m && (Object(d.l)(s, "stopCause", k), Object(d.l)(s, "percentageWatched", v(S, i))), s.videoSource = r.AMPLITUDE_EVENT_PROPERTY_VALUES.video_source.brightcove, s.mediaSource = r.AMPLITUDE_EVENT_PROPERTY_VALUES.video_source.brightcove, s.fileUrl = Object(l.d)(null === b || void 0 === b ? void 0 : b.sources)
                    }
                    if ("Play" === m && (e.dataset.startWatching = S), "Stop" === m) {
                        const i = S - (parseInt(e.dataset.startWatching) || 0);
                        Object(d.l)(s, "watchtime", Math.round(i))
                    }
                    return s
                },
                v = (e, i) => {
                    if (!i) return null;
                    const n = e / i * 100;
                    return n >= 99 ? 100 : n >= 75 ? 75 : n >= 50 ? 50 : n >= 25 ? 25 : n >= 10 ? 10 : n >= 5 ? 5 : 0
                },
                k = function(e) {
                    var i;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.AMPLITUDE_EVENT_PROPERTY_VALUES.stop_cause.user_stop,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.AMPLITUDE_EVENT_PROPERTY_VALUES.video_placement.in_content,
                        c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.AMPLITUDE_EVENT_PROPERTY_VALUES.play_mode.control_play,
                        m = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                    s = {}, u(s);
                    const k = null === (i = e.playerInfo) || void 0 === i ? void 0 : i.videoData;
                    if (t.canUseDOM) {
                        var f, g, p;
                        Object(d.l)(s, "videoTitle", null === k || void 0 === k ? void 0 : k.title), Object(d.l)(s, "videoId", null === k || void 0 === k ? void 0 : k.video_id);
                        const i = null === e || void 0 === e || null === (f = e.playerInfo) || void 0 === f ? void 0 : f.duration,
                            t = null === e || void 0 === e || null === (g = e.playerInfo) || void 0 === g ? void 0 : g.currentTime;
                        Object(d.l)(s, "duration", Math.round(i)), Object(d.l)(s, "videoPlacement", o), Object(d.l)(s, "playMode", c), Object(d.l)(s, "playlistIndex", m || (null === (p = e.playerInfo) || void 0 === p ? void 0 : p.playlistIndex)), t && Object(d.l)(s, "currentPosition", Math.round(t)), i && "Stop" === n && (Object(d.l)(s, "stopCause", a), Object(d.l)(s, "percentageWatched", v(t, i))), s.videoSource = r.AMPLITUDE_EVENT_PROPERTY_VALUES.video_source.youtube, s.mediaSource = r.AMPLITUDE_EVENT_PROPERTY_VALUES.video_source.youtube, Object(d.l)(s, "fileUrl", (null === k || void 0 === k ? void 0 : k.fileUrl) || Object(l.f)(null === k || void 0 === k ? void 0 : k.video_id))
                    }
                    return s
                },
                f = e => {
                    const i = null === e || void 0 === e ? void 0 : e.target,
                        n = Object(l.e)(null === e || void 0 === e ? void 0 : e.target);
                    var t, o, c, u;
                    1 === (null === e || void 0 === e ? void 0 : e.data) ? ((null === (t = window) || void 0 === t ? void 0 : t.YT) && (window.YT.currentInContentPlayer = i), null === n || void 0 === n || null === (o = n.classList) || void 0 === o || o.add("playing"), Object(a.b)() && (s = k(i), Object(d.e)("VideoStarted", s))) : null === n || void 0 === n || null === (c = n.classList) || void 0 === c || c.remove("playing");
                    2 !== (null === e || void 0 === e ? void 0 : e.data) && 0 !== (null === e || void 0 === e ? void 0 : e.data) || ((null === (u = window) || void 0 === u ? void 0 : u.YT) && delete window.YT.currentInContentPlayer, Object(a.b)() && (s = k(i, "Stop", 2 === (null === e || void 0 === e ? void 0 : e.data) ? r.AMPLITUDE_EVENT_PROPERTY_VALUES.stop_cause.user_stop : r.AMPLITUDE_EVENT_PROPERTY_VALUES.stop_cause.completed), Object(d.e)("VideoStopped", s)))
                },
                g = () => {
                    if (!t.canUseDOM) return null;
                    const e = document.getElementsByTagName("video"),
                        i = function() {
                            const e = document.querySelectorAll(".wysiwyg iframe");
                            return Array.from(e).filter(e => ("string" === typeof e.src ? e.src : "").startsWith("https://www.youtube.com/embed/"))
                        }();
                    i.length > 0 && (e => {
                        if (document.getElementById("ytIframeApi")) window.YT && c(e);
                        else {
                            const i = document.createElement("script");
                            i.src = "https://www.youtube.com/iframe_api", i.type = "text/javascript", i.id = "ytIframeApi", i.onload = () => {
                                c(e)
                            }, document.head.appendChild(i)
                        }
                    })(i);
                    for (const t of e) {
                        var n, r;
                        "VIDEO-JS" !== t.parentElement.nodeName && (null === t || void 0 === t || null === (n = t.dataset) || void 0 === n ? void 0 : n.videoId) && !(null === t || void 0 === t || null === (r = t.dataset) || void 0 === r ? void 0 : r.hasListener) && (t.dataset.hasListener = !0, t.onplay = () => {
                            Object(a.b)() && (s = m(t, "Play"), s.videoId && Object(d.e)("VideoStarted", s))
                        }, t.onpause = () => {
                            Object(a.b)() && (s = m(t, "Stop"), s.videoId && Object(d.e)("VideoStopped", s))
                        })
                    }
                    return !0
                };
            const p = () => {
                    var e;
                    if (!t.canUseDOM || !Object(a.b)()) return null;
                    const i = document.getElementsByTagName("video"),
                        n = document.getElementsByClassName("youtube-player playing");
                    t.canUseDOM && (null === (e = window) || void 0 === e ? void 0 : e.YT) && n.length > 0 && window.YT.ready((function() {
                        b(n[0].id)
                    }));
                    for (const t of i) {
                        var o;
                        if ("VIDEO-JS" !== t.parentElement.nodeName && t.parentElement.classList.contains("vjs-playing") && (null === t || void 0 === t || null === (o = t.dataset) || void 0 === o ? void 0 : o.videoId)) {
                            s = m(t, "Stop", r.AMPLITUDE_EVENT_PROPERTY_VALUES.stop_cause.user_navigation), Object(d.e)("VideoStopped", s);
                            break
                        }
                    }
                    return !0
                },
                b = e => {
                    var i, n, t;
                    (null === (i = window.YT) || void 0 === i || null === (n = i.currentInContentPlayer) || void 0 === n || null === (t = n.h) || void 0 === t ? void 0 : t.id) === e && (s = k(window.YT.currentInContentPlayer, "Stop", r.AMPLITUDE_EVENT_PROPERTY_VALUES.stop_cause.user_navigation), Object(d.e)("VideoStopped", s), delete window.YT.currentInContentPlayer)
                }
        },
        k7s9: function(e, i, n) {
            var t = {
                    kind: "Document",
                    definitions: [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "longform"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Post"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "longform"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "title"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "titleSize"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "summary"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "text"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "secondaryText"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "imageOverlay"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "titleVerticalPosition"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "titleHorizontalPosition"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "stackItemsOnMobile"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "media"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "alignment"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "type"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "imageTwoSlideInFrom"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customCaptions"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "data"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "type"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "media"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "sourceUrl"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "credit"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "caption"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "alt"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "sizes"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "sizeNames"
                                                                    },
                                                                    value: {
                                                                        kind: "ListValue",
                                                                        values: [{
                                                                            kind: "StringValue",
                                                                            value: "arc-image-3-2-270",
                                                                            block: !1
                                                                        }, {
                                                                            kind: "StringValue",
                                                                            value: "arc-image-3-2-375",
                                                                            block: !1
                                                                        }, {
                                                                            kind: "StringValue",
                                                                            value: "arc-image-3-2-570",
                                                                            block: !1
                                                                        }, {
                                                                            kind: "StringValue",
                                                                            value: "arc-image-3-2-770",
                                                                            block: !1
                                                                        }, {
                                                                            kind: "StringValue",
                                                                            value: "arc-image-3-2-1170",
                                                                            block: !1
                                                                        }, {
                                                                            kind: "StringValue",
                                                                            value: "arc-image-9-16-410",
                                                                            block: !1
                                                                        }, {
                                                                            kind: "StringValue",
                                                                            value: "arc-image-9-16-820",
                                                                            block: !1
                                                                        }, {
                                                                            kind: "StringValue",
                                                                            value: "arc-image-16-9-1920",
                                                                            block: !1
                                                                        }, {
                                                                            kind: "StringValue",
                                                                            value: "arc-image-16-9-1366",
                                                                            block: !1
                                                                        }, {
                                                                            kind: "StringValue",
                                                                            value: "arc-image-16-9-1024",
                                                                            block: !1
                                                                        }, {
                                                                            kind: "StringValue",
                                                                            value: "full",
                                                                            block: !1
                                                                        }]
                                                                    }
                                                                }],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "crop"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "width"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "url"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "__typename"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "bc_video"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "duration"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "accountId"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "playerId"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "media_caption"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 927
                    }
                },
                a = {};
            t.definitions = t.definitions.concat(n("IdT5").definitions.filter((function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var i = e.name.value;
                return !a[i] && (a[i] = !0, !0)
            })));
            var d = {};

            function r(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), d[e.name.value] = i
                }
            })), e.exports = t, e.exports.longform = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [r(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var t = d[i] || new Set,
                    a = new Set,
                    o = new Set;
                for (t.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        a.has(e) || (a.add(e), (d[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return a.forEach((function(i) {
                    var t = r(e, i);
                    t && n.definitions.push(t)
                })), n
            }(t, "longform")
        },
        "kDG+": function(e, i, n) {},
        khUF: function(e, i, n) {
            "use strict";
            var t = n("VBdi"),
                a = n("M1st");
            const d = [];
            i.a = function(e, i) {
                let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                const [r, o] = Object(t.useState)({
                    loaded: !1,
                    error: !1,
                    cached: !1
                }), l = Object(t.useCallback)(() => {
                    o({
                        loaded: !0,
                        error: !1,
                        cached: !1
                    })
                }, []), s = e => {
                    const i = d.indexOf(e.target.href);
                    i >= 0 && d.splice(i, 1), e.srcElement.remove(), o({
                        loaded: !0,
                        error: !0,
                        cached: !1
                    })
                };
                return Object(a.a)(() => {
                    let i = "";
                    if (e) {
                        if (d.includes(e)) o({
                            loaded: !0,
                            error: !1,
                            cached: !0
                        });
                        else {
                            d.push(e);
                            const t = e.replace(/\?.*/, "");
                            t.endsWith(".js") ? (i = document.createElement("script"), i.src = e, i.async = n, document.body.append(i)) : t.endsWith(".css") && (i = document.createElement("link"), i.href = e, i.rel = "stylesheet", document.head.prepend(i)), i.addEventListener("load", l), i.addEventListener("error", s)
                        }
                        return () => {
                            i.length > 0 && (i.removeEventListener("load", l), i.removeEventListener("error", s))
                        }
                    }
                }, i, [e]), [r.loaded, r.error, r.cached]
            }
        },
        l0kO: function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return d
            }));
            var t = n("VBdi"),
                a = n("D9ji");

            function d() {
                const [e, i] = Object(t.useState)(void 0);
                return Object(t.useEffect)(() => {
                    const e = () => {
                        var e;
                        "string" === typeof(null === (e = window) || void 0 === e ? void 0 : e.OnetrustActiveGroups) && i(Object(a.d)())
                    };
                    return e(), window.addEventListener("arc:cookie-consent-change", e), () => {
                        window.removeEventListener("arc:cookie-consent-change", e)
                    }
                }, []), e
            }
        },
        lZYM: function(e, i, n) {
            "use strict";
            var t = n("VBdi"),
                a = n("z5oK"),
                d = n("MwNz"),
                r = n("w8RO"),
                o = n("Pj4E"),
                l = n("iUJ9"),
                s = n("ZEv9"),
                c = (n("M8c/"), n("dVLG"));
            const u = e => (null === e || void 0 === e ? void 0 : e.width) > (null === e || void 0 === e ? void 0 : e.height);
            i.a = e => {
                let {
                    video: i,
                    thumbnail: n
                } = e;
                const [m, v] = Object(t.useState)(!1), k = Object(a.useLocation)(), f = d.a.get("i18n"), g = () => {
                    m || v(!0)
                };
                return (null === n || void 0 === n ? void 0 : n.sourceUrl) && (null === i || void 0 === i ? void 0 : i.id) ? Object(c.c)("div", {
                    className: `vertical-video-thumbnail ${u(n)?"is-horizontal":""} `,
                    "data-testid": "vertical-video-thumbnail",
                    onClick: g
                }, Object(c.c)(o.a, {
                    alt: null === n || void 0 === n ? void 0 : n.alt,
                    url: null === n || void 0 === n ? void 0 : n.sourceUrl,
                    width: null === n || void 0 === n ? void 0 : n.width,
                    height: null === n || void 0 === n ? void 0 : n.height,
                    ratio: !1,
                    sources: null === n || void 0 === n ? void 0 : n.sizes
                }), Object(c.c)(l.a, {
                    onClick: g,
                    className: "play-toggle",
                    ariaLabel: f.t("Play video")
                }, Object(c.c)(r.a, {
                    title: "Toggle Play",
                    name: "play-arrow",
                    size: 29,
                    viewBox: "-3.5 -2 12 12",
                    color: "white"
                })), Object(c.c)("p", {
                    className: "vertical-video-thumbnail-title"
                }, null === i || void 0 === i ? void 0 : i.name), m && Object(c.c)(s.a, {
                    isModalOpen: m,
                    onModalClose: () => {
                        v(!1), window.history.replaceState(null, "", k.pathname + k.search)
                    },
                    initialVideo: {
                        id: i.id
                    },
                    initialVideoList: [{
                        id: i.id
                    }]
                })) : null
            }
        },
        lcjn: function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "recommendedForYouQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "site"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "AJClientId"
                                }
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "documentId"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "primaryTag"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "categories"
                            }
                        },
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "where"
                            }
                        },
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "recommendedForYou"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "site"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "site"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "documentId"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "documentId"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "primaryTag"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "primaryTag"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "categories"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "categories"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "where"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "where"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "attributionToken"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "posts"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "title"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "link"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "replacementHeadline"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 355
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.recommendedForYouQuery = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "recommendedForYouQuery")
        },
        lihw: function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return d
            }));
            n("VBdi");
            var t = n("ffok"),
                a = n("dVLG");
            const d = e => {
                let {
                    children: i,
                    initialValues: n
                } = e;
                const d = Object(t.b)({
                    defaultValues: n
                });
                return Object(a.c)(t.a, d, i)
            }
        },
        lkIV: function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return s
            })), n.d(i, "b", (function() {
                return c
            }));
            var t = n("5cNn"),
                a = n("VBdi"),
                d = n("Ot6i"),
                r = n("CphE"),
                o = n.n(r),
                l = n("xAi6");
            const s = {
                    updateReadingList: "updateReadingList"
                },
                c = (e, i, n, r, c) => {
                    const [u] = Object(t.a)(o.a, {
                        onCompleted: e => {
                            var i, t;
                            (null === (i = e.updateReadingList) || void 0 === i ? void 0 : i.success) && (n.addToReadingList(r.articleId), (null === (t = e.updateReadingList) || void 0 === t ? void 0 : t.updated) && Object(d.c)(r.article))
                        },
                        context: {
                            api: l.ACCOUNTS_AND_PERSONALIZATION_CONTEXT_KEY
                        }
                    });
                    Object(a.useEffect)(() => {
                        if (e && i && r) switch (r.actionName) {
                            case s.updateReadingList:
                                (async () => {
                                    await u({
                                        variables: {
                                            postId: r.articleId,
                                            add: !0
                                        }
                                    }), setTimeout(() => {
                                        c({})
                                    }, 2500)
                                })()
                        }
                    }, [e, i, r])
                }
        },
        mhoN: function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "programsDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Post"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "programs"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 121
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.programsDetails = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "programsDetails")
        },
        nlM2: function(e, i, n) {
            "use strict";
            var t = n("96Qw");
            i.a = () => {
                const e = { ...Object(t.useLocation)()
                };
                return e.pathname = encodeURI(e.pathname), e
            }
        },
        nrwQ: function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return a
            }));
            var t = n("VBdi");
            const a = (e, i) => {
                const [n, a] = Object(t.useState)(e);
                return Object(t.useEffect)(() => {
                    const n = () => {
                        i(), a(e())
                    };
                    return window.trackFirstPageView || (window.trackFirstPageView = !0, n()), window.addEventListener("analytics:page-view-change", n), () => {
                        window.removeEventListener("analytics:page-view-change", n)
                    }
                }, []), n
            }
        },
        oBzm: function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return l
            })), n.d(i, "b", (function() {
                return s
            })), n.d(i, "c", (function() {
                return c
            }));
            var t = n("jRSD"),
                a = n.n(t),
                d = n("VBdi"),
                r = n("xAi6"),
                o = n("dVLG");
            const l = Object(d.createContext)();

            function s(e) {
                let {
                    children: i
                } = e;
                const n = {
                        status: "",
                        message: "",
                        title: "",
                        ctaText: "",
                        timeoutBeforeShow: 1500
                    },
                    [t, s] = Object(d.useState)(!0),
                    [c, u] = Object(d.useState)(!1),
                    [m, v] = Object(d.useState)(!1),
                    [k, f] = Object(d.useState)(!1),
                    [g, p] = Object(d.useState)(!1),
                    [b, N] = Object(d.useState)(n),
                    [S, h] = Object(d.useState)(!1),
                    [O, y] = Object(d.useState)(!1),
                    [j, E] = Object(d.useState)(!1),
                    [w, F] = Object(d.useState)(!1),
                    T = Object(d.useRef)(null),
                    V = Object(d.useRef)(null),
                    P = Object(d.useRef)(null),
                    {
                        height: D
                    } = a()(T),
                    {
                        height: A
                    } = a()(P),
                    {
                        height: I
                    } = a()(V);
                return Object(d.useEffect)(() => {
                    const e = setTimeout(() => {
                        N(n), clearTimeout(e)
                    }, r.TOAST_TIMEOUT_MILISECONDS);
                    return () => {
                        clearTimeout(e)
                    }
                }, [b]), Object(o.c)(l.Provider, {
                    value: {
                        forceHeaderHide: m,
                        toggleForceHeaderHide: () => v(e => !e),
                        headerContainerRef: T,
                        postHeaderContainerRef: V,
                        searchContainerRef: P,
                        headerHeight: D,
                        postHeaderHeight: I,
                        is404Page: g,
                        toggle404Page: e => p(e),
                        isTakeoverLiveStreamLayout: S,
                        toggleTakeoverLiveStreamLayout: e => h(e),
                        isBreakingNewsVisible: O,
                        toggleBreakingNewsVisible: e => {
                            O !== e && y(e)
                        },
                        isSearchBarVisible: j,
                        setIsSearchBarVisible: E,
                        isHeadroomPinned: c,
                        setIsHeadroomPinned: u,
                        isAppDownloadBannerVisible: w,
                        setIsAppDownloadBannerVisible: F,
                        searchHeight: A,
                        isPinningEnabled: t,
                        togglePinningEnabledState: (e, i) => {
                            const n = !!e;
                            (i || t !== n) && s(n)
                        },
                        toastContent: b,
                        setToastContent: N,
                        isModalOpen: k,
                        setIsModalOpen: f
                    }
                }, i)
            }

            function c() {
                const e = Object(d.useContext)(l);
                if (void 0 === e) throw new Error("useHeaderContext must be used within a HeaderProvider");
                return e
            }
        },
        op7H: function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return o
            }));
            var t = n("VBdi"),
                a = n.n(t),
                d = n("dVLG");
            const r = a.a.createContext({
                    mobileIncontent: !1
                }),
                o = e => {
                    let {
                        children: i
                    } = e;
                    const [n, a] = Object(t.useState)(!1), o = Object(t.useMemo)(() => ({
                        isMobileConnatixIncontent: n,
                        setIsMobileConnatixIncontent: a
                    }), [n]);
                    return Object(d.c)(r.Provider, {
                        value: o
                    }, i)
                }
        },
        pctb: function(e, i, n) {
            var t = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ArchipelagoNotFoundQuery"
                        },
                        variableDefinitions: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "mostPopular"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "details"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 175
                    }
                },
                a = {};
            t.definitions = t.definitions.concat(n("IdT5").definitions.filter((function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var i = e.name.value;
                return !a[i] && (a[i] = !0, !0)
            })));
            var d = {};

            function r(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            t.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), d[e.name.value] = i
                }
            })), e.exports = t, e.exports.ArchipelagoNotFoundQuery = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [r(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var t = d[i] || new Set,
                    a = new Set,
                    o = new Set;
                for (t.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        a.has(e) || (a.add(e), (d[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return a.forEach((function(i) {
                    var t = r(e, i);
                    t && n.definitions.push(t)
                })), n
            }(t, "ArchipelagoNotFoundQuery")
        },
        pmpo: function(e, i, n) {},
        q9ob: function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return v
            }));
            var t = n("Miz2"),
                a = n("kZWY"),
                d = n("Hivj"),
                r = n("dQgG"),
                o = n("VBdi"),
                l = n.n(o),
                s = n("9N7U"),
                c = n("EatG"),
                u = n("C9Dh"),
                m = n("dVLG");

            function v(e) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        disableSSR: o,
                        getErrorComponent: v,
                        getLoadingComponent: k
                    } = n;
                o = o || (e => e.archipelago.isPreview), void 0 === v && (v = () => Object(m.c)(c.a, null)), void 0 === k && (k = () => Object(m.c)(u.a, null));
                let {
                    getFetchPolicy: f
                } = i;
                return f || (f = e => {
                    var i;
                    return Object(s.getFetchPolicy)(null === (i = e.archipelago) || void 0 === i ? void 0 : i.isPreview)
                }), delete i.getFetchPolicy, i.errorPolicy = i.errorPolicy || "all", i.variables = i.variables || {}, class extends l.a.Component {
                    constructor() {
                        super(...arguments), this.previousVariables = null
                    }
                    loadingComponent() {
                        return k ? k(this.combinedProps()) : null
                    }
                    errorComponent() {
                        return v ? v(this.combinedProps()) : null
                    }
                    combinedProps() {
                        const e = Object(s.getPreviewID)(this.props.location),
                            i = {
                                archipelago: {
                                    previewID: e,
                                    isPreview: !!e
                                }
                            };
                        return Object.assign({}, i, this.props)
                    }
                    render() {
                        const n = !r.canUseDOM,
                            l = Object.assign({}, i);
                        return "function" === typeof i.variables && (l.variables = i.variables(this.combinedProps())), l.fetchPolicy = f(this.combinedProps()), l.nextFetchPolicy = Object(s.getNextFetchPolicy)(this.combinedProps().isPreview), n && o(this.combinedProps()) ? this.loadingComponent() : Object(m.c)(a.a, l, i => {
                            let {
                                loading: n,
                                error: a,
                                data: r,
                                refetch: o
                            } = i;
                            const s = l.variables,
                                c = this.previousVariables && !Object(d.a)(this.previousVariables, s);
                            this.previousVariables = s;
                            return n && !r || !n && c ? this.loadingComponent() : a ? this.errorComponent() : Object(m.c)(e, Object(t.a)({
                                data: r,
                                refetch: o,
                                loading: n
                            }, this.combinedProps()))
                        })
                    }
                }
            }
        },
        qELc: function(e, i, n) {},
        qf4H: function(e, i, n) {
            "use strict";
            var t = n("VBdi"),
                a = n("pbOP"),
                d = n("abvY"),
                r = n("M1st");
            i.a = e => {
                const [i, n] = Object(t.useState)({
                    checkCompleted: !1,
                    countryCode: null
                });
                return Object(r.a)(() => {
                    let e = !0;
                    return Object(a.d)() && !i.checkCompleted && Object(d.a)().promise.then(i => {
                        e && n({
                            checkCompleted: !0,
                            countryCode: i
                        })
                    }), () => {
                        e = !1
                    }
                }, e), Object(d.b)(i.countryCode)
            }
        },
        ruOW: function(e, i, n) {
            "use strict";
            n.d(i, "a", (function() {
                return o
            }));
            var t = n("VBdi"),
                a = n("96Qw"),
                d = n("9N7U"),
                r = n("4j0K");
            const o = () => {
                const {
                    isAuthInitialized: e,
                    user: i,
                    verificationPromise: n
                } = Object(r.a)(), [o, l] = Object(t.useState)({
                    loading: !0,
                    isVerified: !1
                }), s = Object(a.useLocation)();
                return Object(t.useEffect)(() => {
                    e && i && (i.emailVerified ? l({
                        loading: !1,
                        isVerified: !0
                    }) : Object(d.getQueryVar)(s, "oobCode") ? null === n || void 0 === n || n.then(() => l({
                        loading: !1,
                        isVerified: !0
                    })).catch(() => l({
                        loading: !1,
                        isVerified: !1
                    })) : l({
                        loading: !1,
                        isVerified: !1
                    }))
                }, [e, i, n]), o
            }
        },
        t9U3: function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ArchipelagoPostByMetaKeyValueQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "key"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "value"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "postType"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "articles"
                            },
                            name: {
                                kind: "Name",
                                value: "posts"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "first"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "1"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "options"
                                },
                                value: {
                                    kind: "ObjectValue",
                                    fields: [{
                                        kind: "ObjectField",
                                        name: {
                                            kind: "Name",
                                            value: "postType"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "postType"
                                            }
                                        }
                                    }, {
                                        kind: "ObjectField",
                                        name: {
                                            kind: "Name",
                                            value: "metaKey"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "key"
                                            }
                                        }
                                    }, {
                                        kind: "ObjectField",
                                        name: {
                                            kind: "Name",
                                            value: "metaValue"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "value"
                                            }
                                        }
                                    }, {
                                        kind: "ObjectField",
                                        name: {
                                            kind: "Name",
                                            value: "allowedMetaKeys"
                                        },
                                        value: {
                                            kind: "ListValue",
                                            values: [{
                                                kind: "StringValue",
                                                value: "objectId",
                                                block: !1
                                            }, {
                                                kind: "StringValue",
                                                value: "postURL",
                                                block: !1
                                            }, {
                                                kind: "StringValue",
                                                value: "arc_sports_match_id",
                                                block: !1
                                            }]
                                        }
                                    }]
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "title"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "link"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isSportsVersion"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "sportType"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 409
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.ArchipelagoPostByMetaKeyValueQuery = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "ArchipelagoPostByMetaKeyValueQuery")
        },
        tL9X: function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "mediaDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Media"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "sourceUrl"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "credit"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "caption"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "alt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 126
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.mediaDetails = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "mediaDetails")
        },
        "tt/F": function(e, i, n) {
            "use strict";
            n.d(i, "b", (function() {
                return v
            }));
            var t = n("0bX0"),
                a = n("VBdi"),
                d = n("96Qw"),
                r = n("3mCM"),
                o = n("YjUV"),
                l = n.n(o),
                s = n("xAi6"),
                c = n("pbOP"),
                u = n("SVMe"),
                m = n("9N7U");
            const v = (e, i, n, a) => {
                const o = Object(d.useHistory)(),
                    [c] = Object(t.a)(l.a, {
                        fetchPolicy: Object(m.getFetchPolicy)(),
                        errorPolicy: Object(m.getErrorPolicy)(),
                        skip: !e,
                        context: {
                            api: s.ACCOUNTS_AND_PERSONALIZATION_CONTEXT_KEY
                        },
                        onCompleted: e => {
                            var n;
                            (null === e || void 0 === e || null === (n = e.user) || void 0 === n ? void 0 : n.id) && "0" !== e.user.id && Object(r.f)(e.user.id), !a || e.user && "0" !== e.user.id && e.user.consent || o.push(u.k), null === i || void 0 === i || i(e)
                        },
                        onError: e => {
                            null === n || void 0 === n || n(), console.error(e)
                        }
                    });
                return c
            };
            i.a = function(e, i, n, t) {
                const d = v(i, e => {
                    e.user && t({ ...e.user,
                        readingList: Array.isArray(e.user.readingList) ? e.user.readingList : e.user.readingList[Object(c.a)().toUpperCase()]
                    })
                }, () => {
                    t({
                        isPersonalDataRequested: null
                    })
                });
                return Object(a.useEffect)(() => {
                    e && (i && !n ? d() : t(null))
                }, [e, i]), n
            }
        },
        u3zP: function(e, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "recommendedQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "site"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "AJClientId"
                                }
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "documentId"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "primaryTag"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "categories"
                            }
                        },
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "where"
                            }
                        },
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "recommended"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "site"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "site"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "documentId"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "documentId"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "primaryTag"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "primaryTag"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "categories"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "categories"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "where"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "where"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "attributionToken"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "posts"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "title"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "link"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "replacementHeadline"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 343
                }
            };
            var t = {};

            function a(e, i) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var t = e.definitions[n];
                    if (t.name && t.name.value == i) return t
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var i = new Set;
                    ! function e(i, n) {
                        if ("FragmentSpread" === i.kind) n.add(i.name.value);
                        else if ("VariableDefinition" === i.kind) {
                            var t = i.type;
                            "NamedType" === t.kind && n.add(t.name.value)
                        }
                        i.selectionSet && i.selectionSet.selections.forEach((function(i) {
                            e(i, n)
                        })), i.variableDefinitions && i.variableDefinitions.forEach((function(i) {
                            e(i, n)
                        })), i.definitions && i.definitions.forEach((function(i) {
                            e(i, n)
                        }))
                    }(e, i), t[e.name.value] = i
                }
            })), e.exports = n, e.exports.recommendedQuery = function(e, i) {
                var n = {
                    kind: e.kind,
                    definitions: [a(e, i)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var d = t[i] || new Set,
                    r = new Set,
                    o = new Set;
                for (d.forEach((function(e) {
                        o.add(e)
                    })); o.size > 0;) {
                    var l = o;
                    o = new Set, l.forEach((function(e) {
                        r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
                            o.add(e)
                        })))
                    }))
                }
                return r.forEach((function(i) {
                    var t = a(e, i);
                    t && n.definitions.push(t)
                })), n
            }(n, "recommendedQuery")
        },
        uUtH: function(e, i, n) {},
        vYlG: function(e, i, n) {},
        w2Az: function(e, i, n) {},
        wwBK: function(e, i, n) {
            "use strict";
            var t = n("Miz2"),
                a = (n("VBdi"), n("xCJP")),
                d = n("MwNz"),
                r = n("PutW"),
                o = n("dVLG");
            i.a = e => {
                const i = d.a.get("i18n"),
                    n = i.t("Verify your email"),
                    l = i.t("Verify to continue");
                return Object(o.c)(r.a, Object(t.a)({
                    title: n,
                    description: l,
                    buttonLabel: i.t("Verify Now"),
                    closeButtonLabel: i.t("Close"),
                    onModalOpen: a.d
                }, e))
            }
        },
        yDnS: function(e, i, n) {
            "use strict";
            var t = n("AAFT"),
                a = n.n(t),
                d = (n("VBdi"), n("MwNz")),
                r = n("9N7U"),
                o = n("dZ17"),
                l = n("dVLG");
            const s = e => {
                let {
                    duration: i,
                    className: n,
                    isVisible: t,
                    variant: s = "medium"
                } = e;
                const c = Object(r.videoDurationToWords)(i),
                    u = `${d.a.get("i18n").t("Video Duration")} ${c}`,
                    m = a()({
                        "u-visibility-hidden": !t
                    }, n);
                return Object(l.c)(o.a, {
                    text: i,
                    variant: s,
                    screenReaderText: u,
                    iconName: "play-arrow",
                    iconViewBox: "0 0 5 8",
                    className: m,
                    parentClass: n
                })
            };
            s.defaultProps = {
                isVisible: !0
            }, i.a = s
        },
        yW39: function(e, i, n) {
            "use strict";
            const t = (e, i, n) => {
                    const {
                        videoShouldAutoPlay: t,
                        autoPlayMuted: a
                    } = i;
                    t && (n(e), e.muted(a), i.attributes.isMuted = a)
                },
                a = (e, i) => {
                    const {
                        onVideoCanPlay: n
                    } = i;
                    "function" === typeof n && n()
                };
            var d = n("3mCM"),
                r = n("Ot6i");
            const o = (e, i) => {
                    var n;
                    const {
                        manageBCClosedCaptions: t,
                        eventProperties: a,
                        attributes: o
                    } = i;
                    if (!(null === e || void 0 === e || null === (n = e.captionsTrack) || void 0 === n ? void 0 : n.language) && t) {
                        if (Object(d.b)()) {
                            const e = {
                                videoLink: a.videoLink,
                                sourcePlayer: "Brightcove",
                                destinationPlayer: "Youtube",
                                reason: "Brightcove CC"
                            };
                            Object(r.e)("VideoPlayerSwitched", e)
                        }
                        t(o.isMuted)
                    }
                },
                l = (e, i) => {
                    const {
                        onPlayerDispose: n
                    } = i;
                    "function" === typeof n && n(e)
                },
                s = (e, i) => {
                    var n, t;
                    const {
                        onVideoDataLoaded: a,
                        videoFigcaptionUpdateHandler: d
                    } = i, r = null !== (n = null === (t = e.mediainfo) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : "";
                    "function" === typeof a && a(r), d(r)
                };
            var c = n("xAi6"),
                u = n("KthT");
            const m = (e, i) => {
                    const {
                        onPause: n,
                        playerPlayingRef: t,
                        eventProperties: a,
                        feedVideoEventProperties: d,
                        eventControl: o,
                        videoEventPropertiesProps: l
                    } = i;
                    Object(u.n)(e.target, "pause"), t.current && (t.current = !1, d({
                        eventAction: "Stop",
                        ...l
                    }), Object(r.l)(a, "stopCause", c.AMPLITUDE_EVENT_PROPERTY_VALUES.stop_cause.user_stop), o.push("pause"), setTimeout(() => {
                        o.length < 3 && Object(r.e)("VideoStopped", a), o.splice(o.indexOf("pause"), 1), o.splice(o.indexOf("play"), 1)
                    }, 5e3)), "function" === typeof n && n()
                },
                v = (e, i, n) => {
                    const {
                        onPlay: t,
                        forcePlay: a,
                        playerPlayingRef: d,
                        eventProperties: o,
                        feedVideoEventProperties: l,
                        streaming: s,
                        eventControl: c,
                        attributes: m
                    } = n;
                    c.includes("play") && 1 === c.length || (d.current = !0, Object(u.i)({
                        mediaId: e.target.id,
                        element: document
                    }), Object(u.n)(e.target, "play"), c.push("play"), setTimeout(() => {
                        if (c.length < 2) {
                            let e = "Play";
                            m.autoPlaying && !a && (e = "Autoplay", m.autoPlaying = !1), l({
                                eventAction: e,
                                ...n.videoEventPropertiesProps
                            }), Object(r.e)("VideoStarted", o)
                        } else Object(u.k)("Play", i, "BC", !!s)
                    }, 500), "function" === typeof t && t())
                },
                k = e => {
                    let {
                        onPlaying: i
                    } = e;
                    "function" === typeof i && i()
                },
                f = (e, i) => {
                    const {
                        attributes: n
                    } = i;
                    n.isMuted = e.muted()
                };
            n.d(i, "a", (function() {
                return t
            })), n.d(i, "c", (function() {
                return o
            })), n.d(i, "e", (function() {
                return s
            })), n.d(i, "b", (function() {
                return a
            })), n.d(i, "f", (function() {
                return m
            })), n.d(i, "g", (function() {
                return v
            })), n.d(i, "i", (function() {
                return f
            })), n.d(i, "h", (function() {
                return k
            })), n.d(i, "d", (function() {
                return l
            }))
        },
        ygHU: function(e, i, n) {
            "use strict";
            var t = n("8zj8"),
                a = n("VBdi"),
                d = n.n(a),
                r = n("3mCM"),
                o = n("xCJP"),
                l = n("MwNz"),
                s = n("dQgG"),
                c = n("H5bq"),
                u = n("oBzm"),
                m = n("5ltI"),
                v = n("9xqa");
            const k = async (e, i) => {
                if (e && (null === i || void 0 === i ? void 0 : i.accessToken) && (null === i || void 0 === i ? void 0 : i.providerId)) {
                    const a = Object(m.c)(i.providerId);
                    if (a) try {
                        const n = a.credential(i.accessToken);
                        await Object(t.q)(e, n)
                    } catch (n) {
                        console.error(n)
                    }
                }
            };
            var f = (e, i) => {
                    const {
                        setToastContent: n
                    } = Object(u.c)(), d = Object(v.a)(), r = l.a.get("i18n");
                    Object(a.useEffect)(() => {
                        (async () => {
                            var a, o, l;
                            if (s.canUseDOM && (null === (a = window) || void 0 === a || null === (o = a.location) || void 0 === o || null === (l = o.pathname) || void 0 === l ? void 0 : l.startsWith("/account")))
                                if (d.get("currentAuthProvider")) try {
                                    Object(m.b)();
                                    const n = await Object(t.o)(Object(t.n)(), t.h);
                                    if (n) {
                                        const e = d.get("previousProviderData");
                                        await k(null === n || void 0 === n ? void 0 : n.user, e), i({
                                            socialLoginData: n
                                        });
                                        const a = Object(t.m)(n);
                                        Object(c.g)(null === a || void 0 === a ? void 0 : a.isNewUser, null === a || void 0 === a ? void 0 : a.providerId)
                                    }
                                    e(!0), d.remove("previousProviderData"), d.remove("currentAuthProvider")
                                } catch (v) {
                                    if (v.code === t.a.NEED_CONFIRMATION) i({
                                        socialLoginError: v
                                    });
                                    else {
                                        var u;
                                        const e = null === v || void 0 === v || null === (u = v.message) || void 0 === u ? void 0 : u.toLowerCase(),
                                            i = v.code === t.a.INTERNAL_ERROR && e.includes("facebookmissingemail") && e.includes("permission_denied");
                                        n({
                                            message: r.t(i ? "Facebook email is missing" : "Something went wrong message"),
                                            status: "error"
                                        })
                                    }
                                    e(!0)
                                } else e(!0);
                                else e(!0)
                        })()
                    }, [])
                },
                g = n("M1st"),
                p = n("lkIV"),
                b = n("tt/F"),
                N = n("PS+N"),
                S = n("5cNn"),
                h = n("CBQt"),
                O = n.n(h),
                y = n("xAi6");
            var j = n("ysKn"),
                E = n("kXcp"),
                w = n("SVMe"),
                F = n("n6ou"),
                T = n("dVLG");
            n.d(i, "b", (function() {
                return I
            }));
            const V = {
                    firebaseApp: null,
                    auth: null,
                    user: null,
                    userInfo: null,
                    userInfoActions: {},
                    pendingAction: {},
                    socialSignInMethods: {},
                    isAuthInitialized: !1,
                    verificationPromise: null,
                    signOut: () => Promise.resolve(),
                    isEmailRegistered: () => Promise.resolve(!1),
                    loginWithEmailAndPassword: (e, i) => ({
                        user: null
                    }),
                    registerWithEmailAndPassword: async (e, i) => ({
                        user: null,
                        invalidEmail: !1,
                        invalidPassword: !1
                    }),
                    registerWithSocialLogin: e => null,
                    getSignInMethodsFromEmail: e => Promise.resolve([]),
                    reauthenticate: e => Promise.reject("Not initialized"),
                    updatePassword: e => Promise.reject("Not initialized"),
                    confirmPasswordReset: (e, i) => Promise.reject("Not initialized")
                },
                P = Object(a.createContext)(V),
                D = e => function() {
                    return Object(m.b)(), e(...arguments)
                },
                A = e => {
                    var i;
                    let {
                        children: n
                    } = e;
                    const [d, s] = Object(a.useState)(null), [c, h] = Object(a.useState)(!1), [E, w] = Object(a.useState)(!1), [V, A] = Object(a.useState)(!1), [I, _] = Object(a.useState)(!1), [L, C] = Object(a.useState)({}), [M, R] = Object(a.useState)(), x = Object(a.useRef)(!1), {
                        setToastContent: U
                    } = Object(u.c)(), B = Object(F.b)(), z = l.a.get("i18n"), Y = Object(N.a)(), H = Object(v.a)(), [Q, G] = Object(a.useReducer)(j.b, null), {
                        subscribeToPersonalizedNewsletter: W
                    } = (() => {
                        const [e, {
                            loading: i,
                            data: n,
                            error: t
                        }] = Object(S.a)(O.a, {
                            onCompleted: e => {
                                e.subscribeToPersonalizedNewsletter.success || console.error("Could not confirm email validation.")
                            },
                            onError: e => {
                                console.log(e)
                            },
                            context: {
                                api: y.ACCOUNTS_AND_PERSONALIZATION_CONTEXT_KEY
                            }
                        });
                        return {
                            subscribeToPersonalizedNewsletter: Object(a.useCallback)(() => {
                                if (!i) return e()
                            }, [e, i]),
                            loading: i,
                            data: n,
                            error: t
                        }
                    })(), q = Object(j.a)(G);
                    f(w, C), Object(b.a)(c, d, Q, q.setUser), Object(p.b)(c, d, q, L, C), Object(g.a)(() => s(Y), () => Y, [Y]);
                    const K = Object(a.useMemo)(() => {
                        const e = Object(m.a)(),
                            i = Object(t.p)(e, {
                                errorMap: t.r,
                                persistence: t.g
                            }),
                            n = {
                                google: t.d.PROVIDER_ID,
                                facebook: t.c.PROVIDER_ID,
                                password: t.b.PROVIDER_ID,
                                apple: "apple.com"
                            },
                            a = (e, n) => async (a, d) => {
                                try {
                                    const t = await e(i, a, d);
                                    if (n && (null === t || void 0 === t ? void 0 : t.user)) {
                                        const e = H.get("previousProviderData");
                                        await n(t.user, e), H.remove("previousProviderData"), H.remove("currentAuthProvider")
                                    }
                                    return {
                                        user: t.user,
                                        invalidEmail: !1,
                                        invalidPassword: !1,
                                        tooManyAttempts: !1
                                    }
                                } catch (o) {
                                    var r;
                                    const e = null === o || void 0 === o || null === (r = o.message) || void 0 === r ? void 0 : r.toLowerCase();
                                    return {
                                        user: null,
                                        invalidEmail: o.code === t.a.INVALID_EMAIL || o.code === t.a.INTERNAL_ERROR && e.includes("bad request") && e.includes("permission_denied"),
                                        emailExists: o.code === t.a.EMAIL_EXISTS,
                                        emailNotExists: o.code === t.a.USER_DELETED,
                                        invalidPassword: o.code === t.a.INVALID_PASSWORD || o.code === t.a.WEAK_PASSWORD,
                                        tooManyAttempts: o.code === t.a.TOO_MANY_ATTEMPTS_TRY_LATER
                                    }
                                }
                            },
                            d = a(t.j),
                            r = a(t.t, k);
                        return {
                            firebaseApp: e,
                            auth: i,
                            socialSignInMethods: n,
                            isEmailRegistered: D(async e => {
                                const n = await Object(t.l)(i, e);
                                return !n.includes("password") && n.length > 0 && C({
                                    emailWithoutPassword: !0
                                }), n.length > 0
                            }),
                            registerWithEmailAndPassword: D(d),
                            loginWithEmailAndPassword: D(r),
                            registerWithSocialLogin: D(async e => {
                                const n = (e => "apple" === e || "apple.com" === e ? new(Object(m.c)(e))("apple.com") : new(Object(m.c)(e)))(e);
                                n && (n.addScope("email"), n.providerId === t.c.PROVIDER_ID && n.setCustomParameters({
                                    auth_type: "rerequest"
                                }), await Object(t.u)(i, n, t.h))
                            }),
                            getSignInMethodsFromEmail: D(async e => await Object(t.l)(i, e)),
                            signOut: async () => new Promise((e, n) => {
                                x.current = !0, i.signOut().then(i => {
                                    console.log("Signed out successfully"), e(i)
                                }).catch(e => {
                                    console.error("Sign out failed: " + e), n(e)
                                })
                            }),
                            shouldSeeWelcomeMessage: I
                        }
                    }, []);
                    Object(a.useEffect)(() => {
                        if (!K) return;
                        const e = K.auth.onAuthStateChanged(e => {
                            e && d !== e ? s(e) : e || (d && (Object(o.j)(x.current ? "User-triggered" : "Automatic"), Object(r.d)()), x.current = !1, s(null)), h(!0)
                        });
                        return () => e()
                    }, [K.auth, d, x.current]), Object(a.useEffect)(() => {
                        var e;
                        if (c) {
                            if (["verifyEmail", "resetPassword"].includes(null === B || void 0 === B ? void 0 : B.mode) && (null === B || void 0 === B ? void 0 : B.continueUrl) && (null === B || void 0 === B ? void 0 : B.oobCode)) {
                                const e = B.continueUrl ? `${B.continueUrl}?mode=${B.mode}&oobCode=${B.oobCode}` : null;
                                if (e) return void(window.location.href = e)
                            }
                            if ("verifyEmail" === (null === B || void 0 === B ? void 0 : B.mode) && (null === B || void 0 === B || null === (e = B.oobCode) || void 0 === e ? void 0 : e.length) > 0) {
                                Object(m.b)();
                                const e = Object(t.f)(K.auth, B.oobCode);
                                e.then(async () => {
                                    if (Object(o.b)(), null === L || void 0 === L ? void 0 : L.socialLoginData) {
                                        const {
                                            socialLoginData: e,
                                            ...i
                                        } = L;
                                        e && C(i)
                                    }
                                    Object(o.k)({
                                        authType: "password"
                                    }), "function" === typeof(null === d || void 0 === d ? void 0 : d.reload) && (await d.reload(), d.emailVerified && await W()), U({
                                        status: "success",
                                        message: z.t("Email Verified")
                                    })
                                }).catch(e => {
                                    ((e, i, n, a) => {
                                        const d = !(null === e || void 0 === e ? void 0 : e.isAnonymous),
                                            r = null === e || void 0 === e ? void 0 : e.emailVerified;
                                        if (d && r) n({
                                            status: "info",
                                            message: a.t("Already Verified")
                                        });
                                        else switch (i) {
                                            case t.a.EXPIRED_OOB_CODE:
                                                n({
                                                    status: "error",
                                                    message: a.t("Expired Link"),
                                                    ctaText: a.t("Resend")
                                                });
                                                break;
                                            case t.a.INVALID_OOB_CODE:
                                                n({
                                                    status: "error",
                                                    message: a.t("Invalid Link")
                                                })
                                        }
                                    })(d, e.code, U, z)
                                }), R(e)
                            }
                        }
                    }, [null === K || void 0 === K ? void 0 : K.auth, c]), Object(a.useEffect)(() => {
                        var e;
                        if ((null === L || void 0 === L ? void 0 : L.socialLoginData) && (null === Q || void 0 === Q || null === (e = Q.user) || void 0 === e ? void 0 : e.consent) && (null === d || void 0 === d ? void 0 : d.emailVerified)) {
                            const e = Object(t.m)(null === L || void 0 === L ? void 0 : L.socialLoginData),
                                {
                                    socialLoginData: i,
                                    ...n
                                } = L;
                            !1 === (null === e || void 0 === e ? void 0 : e.isNewUser) && (Object(o.h)(), C(n))
                        }
                    }, [null === L || void 0 === L ? void 0 : L.socialLoginData, null === Q || void 0 === Q || null === (i = Q.user) || void 0 === i ? void 0 : i.consent, d]);
                    const X = e => Object(t.s)(d, t.b.credential(d.email, e)),
                        J = e => Object(t.v)(d, e),
                        $ = (e, i) => Object(t.i)(K.auth, e, i),
                        Z = Object(a.useMemo)(() => ({ ...K,
                            user: d,
                            userInfo: Q,
                            userInfoActions: q,
                            isAuthInitialized: c,
                            isSocialSignUpProcessed: E,
                            isSignUpWithPassword: V,
                            setIsSignUpWithPassword: A,
                            shouldSeeWelcomeMessage: I,
                            setShouldSeeWelcomeMessage: _,
                            pendingAction: L,
                            setPendingAction: C,
                            verificationPromise: M,
                            reauthenticate: D(X),
                            updatePassword: D(J),
                            confirmPasswordReset: D($)
                        }), [K, d, Q, q, c, E, V, I, _, L, C, M]);
                    return Object(T.c)(P.Provider, {
                        value: Z
                    }, n)
                },
                I = () => Object(a.useContext)(P);
            i.a = e => {
                let {
                    children: i
                } = e;
                return Object(E.b)(w.j) ? Object(T.c)(A, null, i) : Object(T.c)(d.a.Fragment, null, i)
            }
        },
        z73H: function(e, i, n) {
            "use strict";
            var t = n("VBdi"),
                a = n("96Qw"),
                d = n("H5bq"),
                r = n("MwNz"),
                o = n("oBzm"),
                l = n("4j0K"),
                s = n("M1st"),
                c = n("QXYw"),
                u = n("P/sV"),
                m = n("HIup"),
                v = n("9xqa"),
                k = n("ekvm"),
                f = n("9N7U"),
                g = n("LCyj"),
                p = (n("kDG+"), n("dVLG"));
            const b = new Set(["/account", "/account/sign-in", "/account/sign-up", "/account/verify", "/account/forgot-password", "/account-social-consent"]);
            let N = !1;
            i.a = e => {
                var i;
                let {
                    timeout: n = 3e4,
                    children: S
                } = e;
                const {
                    pathname: h,
                    search: O
                } = Object(a.useLocation)(), y = Object(a.useHistory)(), {
                    user: j
                } = Object(l.a)(), E = Object(u.a)(k.a.MENU_BREAKPOINT), w = Object(c.a)(), F = Object(m.f)(), T = Object(v.a)(), V = T.get("userAccountsTooltipShownOnPath"), {
                    isHeadroomPinned: P,
                    isBreakingNewsVisible: D
                } = Object(o.c)(), [A, I] = Object(t.useState)(!1), _ = new URLSearchParams(O).get("oobCode"), L = e => {
                    N = e, I(e)
                }, C = r.a.get("i18n").t("User Account Tooltip");
                Object(t.useEffect)(() => {
                    var e;
                    if (!w) return;
                    V ? V.pathname === h && T.set("userAccountsTooltipShownOnPath", {
                        pathname: h,
                        visitN: V.visitN + 1
                    }) : T.set("userAccountsTooltipShownOnPath", {
                        pathname: h,
                        visitN: 1
                    });
                    const i = () => {
                        T.remove("userAccountsTooltipShownOnPath")
                    };
                    return null === (e = window) || void 0 === e || e.addEventListener("beforeunload", i), () => {
                        var e;
                        return null === (e = window) || void 0 === e ? void 0 : e.removeEventListener("beforeunload", i)
                    }
                }, [w, h]), Object(s.a)(() => {
                    const e = F.get(m.d).dontShowTill,
                        i = e > 0,
                        n = -1 === e,
                        t = i && Date.now() >= e,
                        a = !n && !j && !b.has(h) && (!i || t);
                    t && F.set(m.d, {
                        dontShowTill: -1
                    });
                    const d = setTimeout(() => L(a), 1e3);
                    return () => clearTimeout(d)
                }, () => F.isReady && !j, [j, F.isReady, h]);
                const M = Object(t.useCallback)(() => {
                        F.set(m.d, {
                            dontShowTill: Date.now() + 2592e6
                        }), L(!1)
                    }, [F]),
                    R = Object(t.useCallback)(e => {
                        L(!1), Object(d.i)(), y.push("/account/sign-up")
                    }, [y.push]);
                return !j && w && (N || A) && (P || 0 === (null === (i = window) || void 0 === i ? void 0 : i.scrollY) || !E) && !_ && !D && V.pathname === h && 1 === V.visitN ? Object(p.c)(g.a, {
                    id: E ? "user-accounts-tooltip-mobile" : "user-accounts-tooltip",
                    text: C,
                    onClose: M,
                    onClick: R,
                    className: "user-accounts-tooltip",
                    horizontal: Object(f.isRTLSite)() ? "left" : "right",
                    testId: "user-accounts-tooltip"
                }, S) : S || null
            }
        }
    }
]);