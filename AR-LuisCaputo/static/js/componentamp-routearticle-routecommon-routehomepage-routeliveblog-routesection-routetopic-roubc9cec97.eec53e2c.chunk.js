(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [0], {
        "+zzP": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = {
                animating: !1,
                autoplaying: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                dragging: !1,
                edgeDragged: !1,
                initialized: !1,
                lazyLoadedList: [],
                listHeight: null,
                listWidth: null,
                scrolling: !1,
                slideCount: null,
                slideHeight: null,
                slideWidth: null,
                swipeLeft: null,
                swiped: !1,
                swiping: !1,
                touchObject: {
                    startX: 0,
                    startY: 0,
                    curX: 0,
                    curY: 0
                },
                trackStyle: {},
                trackWidth: 0
            };
            t.default = i
        },
        "/G5K": function(e, t, n) {},
        "0ne/": function(e, t, n) {
            "use strict";
            var i = n("Miz2"),
                r = n("AAFT"),
                o = n.n(r),
                a = n("cMIy"),
                l = n.n(a),
                s = n("VBdi"),
                c = n.n(s),
                u = n("8zBE"),
                d = n("7RPU"),
                p = n("9N7U"),
                f = n("w8RO"),
                h = (n("VIpO"), n("dVLG"));
            const b = {
                    day: "day",
                    hr: "hour",
                    min: "minute",
                    sec: "second"
                },
                v = e => {
                    let {
                        value: t,
                        type: n
                    } = e;
                    const {
                        t: i
                    } = Object(u.a)();
                    return Object(h.c)("span", {
                        className: "countdown-timer__daytime"
                    }, Object(h.c)("span", {
                        className: "countdown-timer__daytime_value"
                    }, t), Object(h.c)("span", {
                        "aria-hidden": !0
                    }, i(Object(p.getSimplePluralString)(t, n))), Object(h.c)("span", {
                        className: "screen-reader-text"
                    }, Object(p.getSimplePluralString)(t, b[n])))
                },
                m = () => Object(h.c)(f.a, {
                    name: "date-seperator",
                    color: "white-transparent",
                    className: "countdown-time-deliminator",
                    size: 16
                }),
                g = e => {
                    let {
                        targetDate: t,
                        className: n,
                        displaySeconds: r,
                        a11yAnnoucementState: a
                    } = e;
                    const [f, b, g, y] = (e => {
                        const t = l.a.utc(e).valueOf(),
                            [n, i] = Object(s.useState)(Object(d.l)(t));
                        Object(s.useEffect)(() => {
                            const e = setInterval(() => {
                                i(Object(d.l)(t))
                            }, 1e3);
                            return () => clearInterval(e)
                        }, [t]);
                        const r = l.a.duration(n),
                            o = Math.floor(r.asDays());
                        return [o > 0 ? o : 0, r.hours(), r.minutes(), r.seconds()]
                    })(t), O = o()("countdown-timer", n), {
                        t: w
                    } = Object(u.a)();
                    return 0 === f && 0 === b && 0 === g && 0 === y ? null : Object(h.c)("div", {
                        className: O
                    }, Object(h.c)("div", {
                        className: "countdown-timer__show-counter",
                        "aria-hidden": "true"
                    }, Object(h.c)(v, {
                        value: f,
                        type: "day"
                    }), Object(h.c)(m, null), Object(h.c)(v, {
                        value: b,
                        type: "hr"
                    }), Object(h.c)(m, null), Object(h.c)(v, {
                        value: g,
                        type: "min"
                    }), r && Object(h.c)(c.a.Fragment, null, Object(h.c)(m, null), Object(h.c)(v, {
                        value: y,
                        type: "sec"
                    }))), Object(h.c)("div", Object(i.a)({
                        className: "screen-reader-text"
                    }, a && {
                        role: "alert",
                        "aria-live": "off"
                    }), `${w("Starts in")} ${f} ${Object(p.getSimplePluralString)(f,"day")} ${b} ${Object(p.getSimplePluralString)(b,"hour")} ${g} ${Object(p.getSimplePluralString)(g,"minute")}`))
                };
            g.defaultProps = {
                displaySeconds: !0,
                a11yAnnoucementState: !0
            }, t.a = c.a.memo(g)
        },
        "14CM": function(e, t, n) {
            var i = n("RAGO");
            e.exports = new i
        },
        "18NH": function(e, t, n) {
            "use strict";
            var i = n("Miz2"),
                r = n("AAFT"),
                o = n.n(r),
                a = n("B1Rb"),
                l = n.n(a),
                s = n("VBdi"),
                c = n.n(s),
                u = n("9mJr"),
                d = n("d4yW"),
                p = n("96Qw"),
                f = n("MwNz"),
                h = n("oBzm"),
                b = n("QXYw"),
                v = n("9N7U"),
                m = n("w8RO"),
                g = n("8+YW"),
                y = n("bz2W"),
                O = n("3mCM"),
                w = n("N4w9"),
                j = n("lBH5"),
                S = n("dVLG");
            const k = e => {
                    let {
                        item: t
                    } = e;
                    return "strong" === t.style ? Object(S.c)("strong", null, t.title) : t.title
                },
                _ = c.a.forwardRef((e, t) => {
                    let {
                        menu: n,
                        classes: r,
                        defaultTitle: a,
                        menuCategoryLabel: l,
                        linkComponent: d,
                        seoDescription: p,
                        customSeoMeta: f,
                        skipSectionMeta: h = !1,
                        isSubNav: b = !1,
                        analyticsMetaProps: m = {}
                    } = e;
                    const _ = Object(s.useContext)(w.b),
                        {
                            customTitle: T,
                            canonicalUrl: E,
                            socialImg: P
                        } = f || {};
                    return Object(S.c)("ul", {
                        className: o()("menu", r),
                        ref: t
                    }, n.map((e, t) => Object(S.c)("li", Object(i.a)({
                        className: o()("menu__item", {
                            "menu__item--current": e.isActive,
                            menu__branding_img: e.img
                        })
                    }, e.isActive ? {
                        "aria-current": !0
                    } : {}, {
                        key: e.title
                    }), Object(j.e)(e.url, _) ? d ? Object(S.c)(d, {
                        item: { ...e,
                            url: Object(j.c)(e.url, _)
                        },
                        menuCategoryLabel: l,
                        onClick: () => {
                            b && !e.isActive && Object(O.g)(t + 1, m)
                        }
                    }) : Object(S.c)(g.a, {
                        to: Object(j.c)(e.url, _),
                        target: e.target,
                        title: e.attr,
                        label: l,
                        eventTarget: e.title,
                        onClick: () => {
                            b && !e.isActive && Object(O.g)(t + 1, m)
                        }
                    }, e.img ? Object(S.c)("img", {
                        src: e.img,
                        alt: e.title
                    }) : Object(S.c)(k, {
                        item: e
                    })) : Object(S.c)("a", {
                        target: e.target,
                        label: l,
                        href: e.url,
                        title: e.title
                    }, Object(S.c)(k, {
                        item: e
                    })), e.isActive && Object(S.c)(c.a.Fragment, null, a && !h && Object(S.c)(y.a, Object(i.a)({
                        title: T || Object(v.getSectionPageTitle)(`${a} | ${e.title}`),
                        url: E || Object(v.getSectionCanonicalUrl)({
                            actualHost: _
                        }, e.url),
                        imagePath: P || Object(v.getSocialImagePath)(Object(v.getSectionCanonicalUrl)({
                            actualHost: _
                        }, e.url)),
                        type: "navbar"
                    }, p ? {
                        description: p
                    } : "", {
                        sectionId: "menu-" + e.id
                    })), Object(S.c)(u.a, null, Object(S.c)("meta", {
                        name: "pageType",
                        content: "Landing Page"
                    }), Object(S.c)("meta", {
                        name: "pageSection",
                        content: `${e.title}${a?","+a:""}`
                    }))))))
                });
            _.defaultProps = {
                menu: [],
                menuCategoryLabel: "Site Menu Item"
            };
            var T = _;
            n("gkym");
            n.d(t, "a", (function() {
                return E
            }));
            const E = e => {
                let {
                    item: t,
                    menuCategoryLabel: n,
                    onClick: i
                } = e;
                return Object(S.c)("h2", {
                    className: "event-landing-page__subnav-link"
                }, Object(S.c)(g.a, {
                    to: t.url,
                    target: t.target,
                    title: t.attr,
                    label: n,
                    onClick: i
                }, t.title))
            };
            t.b = Object(p.withRouter)(e => {
                let {
                    menu: t
                } = e;
                const {
                    match: n,
                    location: r,
                    classes: a,
                    defaultTitle: p,
                    seoMetaDescription: g,
                    linkComponent: O,
                    isSticky: w,
                    style: j = "contained",
                    displayedTitle: k,
                    displayedTitleLink: _,
                    displayedBrandingImg: E,
                    postType: P,
                    customSeoMeta: L,
                    skipPageMeta: C = !1,
                    analyticsMetaProps: N = {}
                } = e, {
                    i18n: x
                } = f.a.get(), {
                    togglePinningEnabledState: A,
                    headerHeight: M,
                    postHeaderHeight: z
                } = Object(h.c)(), I = Object(b.a)(), [D, R] = Object(s.useState)(!1), [H, W] = Object(s.useState)(!1), [U, V] = Object(s.useState)(!1), B = Object(s.useRef)(null), F = Object(s.useRef)(null), {
                    customTitle: $,
                    canonicalUrl: G,
                    socialImg: q
                } = L || {};
                Object(s.useEffect)(() => {
                    if (!F.current || !B.current) return;
                    const e = F.current;
                    return K(), X(), window.addEventListener("resize", K), e.addEventListener("scroll", K), J(), V(!0), () => {
                        window.removeEventListener("resize", K), e.removeEventListener("scroll", K), X(!1), A(!0, !0)
                    }
                }, []), Object(s.useEffect)(() => {
                    document.documentElement.style.setProperty("--sticky-nav-header-offset", w ? M + z + "px" : "unset")
                }, [w, M, z]), t = t.map(e => Object(v.trailingSlashIt)(e.url) === Object(v.trailingSlashIt)(n.url) || Object(v.trailingSlashIt)(e.url) === Object(v.trailingSlashIt)(r.pathname) ? Object.assign({}, e, {
                    isActive: !0
                }) : Object.assign({}, e, {
                    isActive: !1
                }));
                const Y = e => {
                        (null === e || void 0 === e ? void 0 : e.target) && e.target.scrollIntoView({
                            inline: "center",
                            block: "nearest"
                        })
                    },
                    X = function() {
                        var e;
                        let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        const n = null === (e = B.current) || void 0 === e ? void 0 : e.children;
                        (null === n || void 0 === n ? void 0 : n.length) && Array.from(n).forEach(e => {
                            const n = e.querySelector("a");
                            n && (t ? n.addEventListener("focus", Y) : n.removeEventListener("focus", Y))
                        })
                    },
                    K = l()(() => {
                        if (!F.current || !B.current) return;
                        const e = F.current.getBoundingClientRect(),
                            t = B.current.getBoundingClientRect();
                        Math.abs(e.left - t.left) < 20 ? R(!1) : R(!0), Math.abs(e.right - t.right) < 20 ? W(!1) : W(!0)
                    }, 250),
                    J = Object(s.useCallback)(() => {
                        var e, t;
                        let n = null === (e = B.current) || void 0 === e ? void 0 : e.children;
                        if (!(null === (t = n) || void 0 === t ? void 0 : t.length)) return;
                        n = Array.from(n);
                        (Object(v.isRTLSite)() ? n.reverse() : n).forEach(e => {
                            if (null === e || void 0 === e ? void 0 : e.classList.contains("menu__item--current")) {
                                return e.getBoundingClientRect().right > F.current.clientWidth ? Z(e.getBoundingClientRect().right - 150) : ee(e.getBoundingClientRect().right + 150)
                            }
                        })
                    }, []),
                    Q = function() {
                        var e, t;
                        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "right",
                            i = null === (e = B.current) || void 0 === e ? void 0 : e.children;
                        if (!(null === (t = i) || void 0 === t ? void 0 : t.length)) return;
                        i = Array.from(i);
                        const r = Object(v.isRTLSite)() ? i.reverse() : i;
                        let o = null;
                        return r.forEach(e => {
                            "right" === n && e.getBoundingClientRect().right < F.current.clientWidth && (o = e), "left" === n && !o && e.getBoundingClientRect().right > 0 && (o = e)
                        }), o
                    },
                    Z = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        const t = Q();
                        t && ("number" !== typeof e && (e = t.getBoundingClientRect().right), F.current.scroll(Math.floor(F.current.scrollLeft + e) - 20, 0))
                    },
                    ee = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        const t = Q("left");
                        t && ("number" !== typeof e && (e = t.getBoundingClientRect().right), F.current.scroll(Math.floor(F.current.scrollLeft - (F.current.clientWidth - e)) + 45, 0))
                    };
                if (!Array.isArray(t) || !t.length) return null;
                const te = Object(v.getSectionCanonicalUrl)(e.staticContext, n.url),
                    ne = Object(v.shouldSkipMetaPrinting)(t, n),
                    ie = !!n.params.postName,
                    re = o()("container", a, {
                        "navigation-bar--sticky": w,
                        "longform-sub-nav": "longform" === P
                    }),
                    oe = o()({
                        "container__inner container__inner--no-pad-mobile": "contained" === j,
                        container: "full-wdith" === j
                    });
                A(!w);
                const ae = k ? [{
                    title: k,
                    url: _,
                    img: E,
                    style: "strong"
                }, ...t] : t;
                return Object(S.c)(c.a.Fragment, null, !ne && Object(S.c)(y.a, {
                    title: $ || Object(v.getSectionPageTitle)(p),
                    url: G || te,
                    imagePath: q || Object(v.getSocialImagePath)(te),
                    type: "navbar",
                    description: g
                }), !C && Object(S.c)(u.a, null, Object(S.c)("meta", {
                    name: "pageType",
                    content: "Landing Page"
                }), Object(S.c)("meta", {
                    name: "pageSection",
                    content: p
                })), Object(S.c)("div", {
                    className: re
                }, Object(S.c)("div", {
                    className: oe
                }, Object(S.c)("div", {
                    className: "navigation-bar-container u-bottom-border"
                }, Object(S.c)("div", {
                    ref: F,
                    className: o()("navigation-bar u-hide-scrollbar", {
                        "u-smooth-scrolling": U
                    }),
                    "data-testid": "scrollable-element"
                }, Object(S.c)("nav", {
                    "aria-label": x.t("Secondary navigation menu")
                }, Object(S.c)("span", {
                    className: "screen-reader-text"
                }, Object(S.c)(d.a, null, "Navigation menu")), Object(S.c)("button", {
                    tabIndex: -1,
                    "aria-hidden": !0,
                    onClick: ee,
                    className: o()("navigation-bar__arrow-icon navigation-bar__arrow-icon--left", {
                        "navigation-bar__arrow-icon--show": D
                    })
                }, Object(S.c)(m.a, {
                    name: "caret-left",
                    color: "grey",
                    size: 16
                })), Object(S.c)(T, Object(i.a)({
                    menu: ae,
                    defaultTitle: p,
                    classes: o()("navigation-bar__menu", {
                        "menu-ssr": !I,
                        "navigation-bar__menu-first-item-header": k
                    }),
                    menuCategoryLabel: "Navigation - Submenu",
                    ref: B,
                    linkComponent: O
                }, ne ? {
                    seoDescription: g
                } : "", {
                    customSeoMeta: L,
                    skipSectionMeta: ie,
                    isSubNav: !0,
                    analyticsMetaProps: N
                })), Object(S.c)("button", {
                    tabIndex: -1,
                    "aria-hidden": !0,
                    onClick: Z,
                    className: o()("navigation-bar__arrow-icon navigation-bar__arrow-icon--right", {
                        "navigation-bar__arrow-icon--show": H
                    })
                }, Object(S.c)(m.a, {
                    name: "caret-right",
                    color: "grey",
                    size: 16
                }))))))))
            })
        },
        "2a7d": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var i = n("5cNn"),
                r = n("VBdi"),
                o = n("Ot6i"),
                a = n("H5bq"),
                l = n("CphE"),
                s = n.n(l),
                c = n("xAi6"),
                u = n("4j0K");
            const d = (e, t, n) => {
                var l, d;
                const [p, f] = Object(r.useState)(!1), {
                    userInfo: h,
                    userInfoActions: b
                } = Object(u.a)(), v = (null === h || void 0 === h || null === (l = h.user) || void 0 === l || null === (d = l.readingList) || void 0 === d ? void 0 : d.includes(null === e || void 0 === e ? void 0 : e.id)) || !1, [m] = Object(i.a)(s.a, {
                    onCompleted: i => {
                        var r;
                        if (f(!1), null === (r = i.updateReadingList) || void 0 === r ? void 0 : r.success) {
                            var l;
                            if (v) b.removeFromReadingList(e.id);
                            else b.addToReadingList(e.id), (null === (l = i.updateReadingList) || void 0 === l ? void 0 : l.updated) && (Object(o.c)(e), Object(a.c)());
                            "function" === typeof t && t()
                        } else {
                            var s, c;
                            if (console.error(null === (s = i.updateReadingList) || void 0 === s ? void 0 : s.errorMessage), "function" === typeof n) n(null === (c = i.updateReadingList) || void 0 === c ? void 0 : c.errorMessage)
                        }
                    },
                    onError: () => {
                        f(!1), "function" === typeof n && n()
                    },
                    context: {
                        api: c.ACCOUNTS_AND_PERSONALIZATION_CONTEXT_KEY
                    }
                }), g = Object(r.useCallback)(() => {
                    f(!0), m({
                        variables: {
                            postId: null === e || void 0 === e ? void 0 : e.id,
                            add: !v
                        }
                    })
                }, [e, v, m]);
                return {
                    isLoading: p,
                    isSaved: v,
                    toggle: g
                }
            }
        },
        "4UCj": function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return b
            })), n.d(t, "f", (function() {
                return v
            })), n.d(t, "t", (function() {
                return m
            })), n.d(t, "g", (function() {
                return g
            })), n.d(t, "l", (function() {
                return y
            })), n.d(t, "h", (function() {
                return w
            })), n.d(t, "s", (function() {
                return j
            })), n.d(t, "i", (function() {
                return S
            })), n.d(t, "j", (function() {
                return k
            })), n.d(t, "b", (function() {
                return _
            })), n.d(t, "r", (function() {
                return T
            })), n.d(t, "q", (function() {
                return E
            })), n.d(t, "o", (function() {
                return P
            })), n.d(t, "p", (function() {
                return L
            })), n.d(t, "n", (function() {
                return C
            })), n.d(t, "d", (function() {
                return N
            })), n.d(t, "m", (function() {
                return x
            })), n.d(t, "u", (function() {
                return A
            })), n.d(t, "k", (function() {
                return M
            })), n.d(t, "a", (function() {
                return D
            })), n.d(t, "c", (function() {
                return R
            }));
            var i = n("vUkw"),
                r = n.n(i),
                o = n("IQ5x"),
                a = n.n(o),
                l = n("MwNz"),
                s = n("SWuB"),
                c = n("7RPU"),
                u = n("8Ffx"),
                d = n("pbOP"),
                p = n("t19f"),
                f = n("9N7U"),
                h = n("KthT");
            const b = (e, t) => {
                    var n;
                    if ((e.showAuthor || "opinion" === e.postType) && (null === (n = e.author) || void 0 === n ? void 0 : n.length) > 0) {
                        const n = e.author.map(e => ({
                            "@type": "Person",
                            name: e.name,
                            url: `${Object(f.getHost)(t)}${e.link}`
                        }));
                        return 1 === n.length ? n[0] : n
                    }
                    return {
                        "@type": "Organization",
                        name: "" + l.a.get("seo").organization
                    }
                },
                v = e => {
                    if ((e.showAuthor || "opinion" === e.postType) && e.author && e.author.length > 0) {
                        let t = "";
                        if (1 === e.author.length) t = e.author[0].name;
                        else {
                            const n = [];
                            e.author.forEach(e => {
                                n.push(e.name)
                            }), t = n.join()
                        }
                        return t
                    }
                    return ""
                },
                m = e => {
                    var t;
                    let n = "";
                    return (null === e || void 0 === e || null === (t = e.source) || void 0 === t ? void 0 : t.length) > 0 && (n = e.source.map(e => "" + e.name).toString()), n
                },
                g = (e, t) => {
                    let n = "";
                    const i = l.a.get("i18n").t("defaultMetaDesc", {
                        name: t
                    });
                    return n = e || i, n
                },
                y = e => {
                    var t;
                    return (null === (t = e) || void 0 === t ? void 0 : t.length) ? e = e.map(e => ({
                        "@type": "ImageObject",
                        url: e.url,
                        height: e.height,
                        width: e.width
                    })) : ""
                },
                O = (e, t) => e ? e.filter(e => {
                    let {
                        image: t
                    } = e;
                    return null === t || void 0 === t ? void 0 : t.sourceUrl
                }).map(e => {
                    let {
                        caption: n,
                        image: i
                    } = e;
                    const r = i.sourceUrl.startsWith("https:") || i.sourceUrl.startsWith("http:") ? i.sourceUrl : `${Object(f.getHost)(t)}${i.sourceUrl}`;
                    return {
                        "@type": "ImageObject",
                        caption: n ? n.replace(/"/g, '\\"').replace(/[\r\n]+/g, " ") : "",
                        thumbnail: {
                            "@type": "ImageObject",
                            url: r
                        }
                    }
                }) : [],
                w = e => e.replace(/"/g, "&quot;"),
                j = e => {
                    const t = w(e);
                    return t.length <= 110 ? t : t.substring(0, 107) + "..."
                },
                S = (e, t) => `\n\t\t\t\t{\n\t\t\t\t\t"@context": "https://schema.org/",\n\t\t\t\t\t"@type": "WebPage",\n\t\t\t\t\t"name": "${e}",\n\t\t\t\t\t"speakable": {\n\t\t\t\t\t\t"@type": "SpeakableSpecification",\n\t\t\t\t\t\t"xpath": [\n\t\t\t\t\t\t\t"/html/head/title",\n\t\t\t\t\t\t\t"/html/head/meta[@name='description']/@content"\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t"url": "${t}"\n\t\t\t\t}\n\t\t\t\t`,
                k = (e, t) => `\n\t\t\t\t{\n\t\t\t\t\t"@context": "https://schema.org",\n\t\t\t\t\t"@type": "WebSite",\n\t\t\t\t\t"name" : "${t}",\n\t\t\t\t\t"url": "${e}",\n\t\t\t\t\t"potentialAction": {\n\t\t\t\t\t  "@type": "SearchAction",\n\t\t\t\t\t  "target": {\n\t\t\t\t\t\t"@type": "EntryPoint",\n\t\t\t\t\t\t"urlTemplate": "${e}/search/{search_term_string}"\n\t\t\t\t\t  },\n\t\t\t\t\t  "query-input": "required name=search_term_string"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t`,
                _ = () => ({
                    "@context": "https://schema.org",
                    "@type": "NewsMediaOrganization",
                    name: "Al Jazeera Mubasher",
                    alternateName: "\u0627\u0644\u062c\u0632\u064a\u0631\u0629 \u0645\u0628\u0627\u0634\u0631",
                    description: "\u0642\u0646\u0627\u0629 \u0627\u0644\u062c\u0632\u064a\u0631\u0629 \u0645\u0628\u0627\u0634\u0631 \u0623\u0637\u0644\u0642\u062a \u0641\u064a \u0623\u0628\u0631\u064a\u0644 2005\u060c \u0648\u0647\u064a \u0623\u0648\u0644 \u0642\u0646\u0627\u0629 \u0641\u064a \u0627\u0644\u0639\u0627\u0644\u0645 \u0627\u0644\u0639\u0631\u0628\u064a \u062a\u0628\u062b \u0627\u0644\u0623\u062e\u0628\u0627\u0631 \u0644\u062d\u0638\u0629 \u0648\u0642\u0648\u0639\u0647\u0627 \u0639\u0644\u0649 \u0645\u062f\u0627\u0631 24 \u0633\u0627\u0639\u0629.",
                    disambiguatingDescription: "\u0627\u0644\u0642\u0646\u0627\u0629 \u062a\u0648\u0641\u0631 \u0644\u0644\u0645\u0634\u0627\u0647\u062f \u0635\u0648\u0631\u0627\u064b \u062d\u064a\u0629 \u0644\u0645\u0627 \u064a\u062d\u062f\u062b \u0625\u0642\u0644\u064a\u0645\u064a\u0627\u064b \u0648\u062f\u0648\u0644\u064a\u0627\u064b. \u0648\u062a\u0642\u062f\u0645 \u0644\u062c\u0645\u0647\u0648\u0631\u0647\u0627 \u0622\u062e\u0631 \u0627\u0644\u0645\u0633\u062a\u062c\u062f\u0627\u062a \u0627\u0644\u0633\u064a\u0627\u0633\u064a\u0629 \u0648\u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629 \u0648\u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629 \u0639\u0628\u0631 \u0643\u0627\u0645\u064a\u0631\u0627\u062a\u0647\u0627 \u0627\u0644\u062a\u064a \u062a\u062c\u0648\u0628 \u0623\u0642\u0627\u0635\u064a \u0627\u0644\u0623\u0631\u0636 \u0644\u062a\u0628\u062b \u0627\u0644\u0646\u062f\u0648\u0627\u062a \u0627\u0644\u0633\u064a\u0627\u0633\u064a\u0629 \u0648\u0627\u0644\u0645\u0624\u062a\u0645\u0631\u0627\u062a \u0627\u0644\u0635\u062d\u0641\u064a\u0629 \u0648\u0627\u0644\u0646\u0642\u0627\u0634\u0627\u062a \u0648\u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u0627\u062a. \u0648\u0645\u062a\u0649 \u0623\u0631\u062f\u062a \u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u062d\u062f\u062b \u0641\u0648\u0631 \u0648\u0642\u0648\u0639\u0647 \u0641\u0625\u0646 \u0627\u0644\u062c\u0632\u064a\u0631\u0629 \u0645\u0628\u0627\u0634\u0631 \u0628\u0644\u0627 \u0634\u0643 \u0633\u062a\u0643\u0648\u0646 \u0648\u062c\u0647\u062a\u0643 \u0627\u0644\u0623\u0648\u0644\u0649.",
                    foundingDate: "2005",
                    foundingLocation: "Qatar",
                    logo: "https://www.aljazeeramubasher.net/images/logo_ajm.png",
                    email: "sharkna@aljazeera.net",
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: "Building 194,232 Ahmed bin Ali street, zone 20",
                        addressRegion: "Doha",
                        postalCode: "23123",
                        addressCountry: "Qatar"
                    },
                    areaServed: ["The Arab world", "Middle East", "North Africa"],
                    funder: {
                        "@type": "Organization",
                        name: "Al Jazeera Network"
                    },
                    sameAs: ["https://twitter.com/ajmubasher", "https://www.youtube.com/user/aljazeeramubasher", "https://www.facebook.com/ajmubasher", "https://www.instagram.com/aljazeeramubasher", "https://www.tiktok.com/@aljazeera_mubasher"]
                }),
                T = e => "navbar" === e ? ".navigation-bar-container" : "program" === e ? ".program-header-details-title" : ".section-header",
                E = (e, t) => {
                    const n = l.a.get("FEATURED_IMAGE_DEFAULT_SIZE"),
                        i = e => e.startsWith("https:") || e.startsWith("http:") ? "" + e : `${Object(f.getHost)(t)}${e}`,
                        r = e => {
                            let {
                                url: t,
                                width: n,
                                height: r,
                                cropRectangle: o
                            } = e;
                            return {
                                url: i(t),
                                width: n,
                                height: r,
                                cropRectangle: o
                            }
                        },
                        o = e.socialMediaImage || e.featuredImage || null;
                    let a = [];
                    if ((null === o || void 0 === o ? void 0 : o.sourceUrl) && (a = Object(p.c)(o), a = a.filter(e => e.url).map(e => r(e)), !a.length)) {
                        const e = n,
                            t = o.sourceUrl.includes("?") ? "&" : "?";
                        return e.url = `${o.sourceUrl}${t}resize=${e.width}%2C${e.height}`, [r(e)]
                    }
                    if (!a.length) {
                        return [{
                            url: Object(f.getHost)(t) + "/" + Object(f.getSocialImagePath)()
                        }]
                    }
                    return a = a.sort((e, t) => t.width - e.width || t.height - e.height), a
                },
                P = e => {
                    return {
                        "@type": "Organization",
                        name: "" + l.a.get("seo").organization,
                        logo: (t = Object(f.getHost)(e), {
                            "@type": "ImageObject",
                            url: `${t}/images/logo_${Object(d.e)()?"aje":"aja"}.png`,
                            width: 224,
                            height: Object(d.e)() ? 291 : 224
                        })
                    };
                    var t
                },
                L = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = "";
                    const n = l.a.get("socialLinks");
                    if (!n) return null;
                    const i = n.find(e => "rss" === e.name);
                    return (null === i || void 0 === i ? void 0 : i.url) && (t = `${e}${null===i||void 0===i?void 0:i.url}`), t
                },
                C = (e, t) => {
                    var n;
                    const i = Object(f.getAbsolutePostLink)(e, t),
                        o = a()(r()(e.excerpt)).replace(/"/g, "&quot;").trim(),
                        s = P(t),
                        u = E(e, t),
                        p = Object(c.c)(e.modified_gmt),
                        h = "liveblog" === (null === e || void 0 === e ? void 0 : e.postType) ? Object(c.c)(Object(c.k)(e)) : "",
                        v = {
                            "@context": "https://schema.org",
                            "@type": Object(d.f)() ? "Article" : "NewsArticle",
                            mainEntityOfPage: i,
                            headline: j(e.seoTitle || e.title),
                            description: o,
                            author: b(e, t),
                            publisher: s,
                            image: y(u)
                        };
                    return !0 !== (null === e || void 0 === e ? void 0 : e.displayPublishDate) && "always" !== (null === (n = l.a.get("seo")) || void 0 === n ? void 0 : n.displayPublishDate) && "podcast" !== (null === e || void 0 === e ? void 0 : e.postType) || (v.datePublished = Object(c.c)(e.date)), p && (v.dateModified = h || p), v
                },
                N = (e, t) => ({
                    "@context": "https://schema.org/",
                    "@type": "WebPage",
                    name: w(e),
                    speakable: {
                        "@type": "SpeakableSpecification",
                        cssSelector: [".article-header"]
                    },
                    url: t
                }),
                x = (e, t, n) => ({
                    "@context": "https://schema.org/",
                    "@type": "WebPage",
                    name: w(e),
                    description: z({
                        excerpt: t
                    }),
                    url: n
                }),
                A = (e, t, n) => {
                    var i, r;
                    const o = P(t),
                        a = Object(u.b)(w(e.title)),
                        l = {
                            "@context": "https://schema.org",
                            "@type": "VideoObject",
                            name: w(a),
                            uploadDate: Object(c.c)(e.date),
                            description: z(e),
                            publisher: o,
                            embedUrl: I(e)
                        };
                    if (null === e || void 0 === e || null === (i = e.video) || void 0 === i ? void 0 : i.duration) {
                        const t = Object(c.j)(e.video.duration);
                        l.duration = t
                    }
                    const d = Object(s.a)(e, "internalTaxonomies", "video");
                    return (null === e || void 0 === e || null === (r = e.video) || void 0 === r ? void 0 : r.sourceUrl) && "episode" === (null === e || void 0 === e ? void 0 : e.postType) && d && (l.contentUrl = e.video.sourceUrl), n && (l.thumbnailUrl = n), l
                },
                M = (e, t) => ({
                    "@context": "https://schema.org",
                    "@type": "ImageGallery",
                    datePublished: Object(c.c)(e.date),
                    dateModified: Object(c.c)(e.modified_gmt),
                    associatedMedia: O(e.galleryImages, t)
                }),
                z = e => {
                    if (!e) return null;
                    return a()(r()(e.excerpt)).replace(/"/g, "&quot;").trim()
                },
                I = e => {
                    const t = (e, t) => {
                        const n = null === e || void 0 === e ? void 0 : e.match(t);
                        if ((null === n || void 0 === n ? void 0 : n.length) > 0) {
                            const e = Object(f.extractValueFromString)(n[0], /src="(.*?(?=[?"]))/);
                            if (e) return e
                        }
                        return null
                    };
                    try {
                        var n, i;
                        if (null === e || void 0 === e || null === (n = e.video) || void 0 === n ? void 0 : n.id) return `https://players.brightcove.net/${e.video.accountId}/${e.video.playerId}_default/index.html?videoId=${e.video.id}`;
                        if (null === e || void 0 === e ? void 0 : e.featuredYoutube) {
                            const t = Object(h.g)(e.featuredYoutube);
                            if (t) return "https://www.youtube.com/embed/" + t
                        }
                        const r = null === e || void 0 === e || null === (i = e.content) || void 0 === i ? void 0 : i.match(/<video(.|\n)*?<\/video>/);
                        if ((null === r || void 0 === r ? void 0 : r.length) > 0) {
                            const e = r[0],
                                t = Object(f.extractValueFromString)(e, /data-video-id="(.*?)"/),
                                n = Object(f.extractValueFromString)(e, /data-account="(.*?)"/);
                            return `https://players.brightcove.net/${n}/${Object(f.extractValueFromString)(e,/data-player="(.*?)"/)}_default/index.html?videoId=${t}`
                        }
                        const o = t(null === e || void 0 === e ? void 0 : e.content, /<iframe.*?src=['"].*?(youtube.com).*?['"]/);
                        if (o) return o;
                        const a = t(null === e || void 0 === e ? void 0 : e.content, /<iframe.*?src=['"].*?(player.vimeo.com).*?['"]/);
                        return a || ""
                    } catch (r) {
                        return ""
                    }
                },
                D = (e, t, n) => {
                    if (!(null === t || void 0 === t ? void 0 : t.printStructureData)) return null;
                    const i = {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: e.map((e, i) => ({
                            "@type": "ListItem",
                            position: i + 1,
                            name: e[t.displayPrecedence[0]] || e[t.displayPrecedence[1]],
                            item: `${n}${e.link}`
                        }))
                    };
                    return JSON.stringify(i)
                },
                R = e => {
                    if (!(null === e || void 0 === e ? void 0 : e.content) || !e.showFAQSchema) return null;
                    const t = r()(e.content, {
                            allowedTags: ["h2", "p"],
                            allowedAttributes: {}
                        }),
                        n = [];
                    return t.split(/<h2[^>]*>/).slice(1).forEach(e => {
                        const [t, ...i] = e.split("</h2>");
                        if (!t) return;
                        const r = a()(t).trim(),
                            o = (i.join("</h2>").split(/<h2[^>]*>/)[0].match(/<p[^>]*>(.*?)<\/p>/g) || []).map(e => a()(e).trim()).filter(e => e).join(" ");
                        r && o && n.push({
                            question: r,
                            answer: o
                        })
                    }), 0 === n.length ? null : {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: n.map(e => ({
                            "@type": "Question",
                            name: e.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: e.answer
                            }
                        }))
                    }
                }
        },
        "4WfJ": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = s(n("VBdi")),
                r = n("r9G8"),
                o = s(n("r+ZP")),
                a = s(n("T9IZ")),
                l = n("mQcW");

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e) {
                return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(n, !0).forEach((function(t) {
                        m(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e, t) {
                return (v = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var g = (0, l.canUseDOM)() && n("14CM"),
                y = function(e) {
                    function t(e) {
                        var n;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), n = function(e, t) {
                            return !t || "object" !== c(t) && "function" !== typeof t ? b(e) : t
                        }(this, h(t).call(this, e)), m(b(n), "innerSliderRefHandler", (function(e) {
                            return n.innerSlider = e
                        })), m(b(n), "slickPrev", (function() {
                            return n.innerSlider.slickPrev()
                        })), m(b(n), "slickNext", (function() {
                            return n.innerSlider.slickNext()
                        })), m(b(n), "slickGoTo", (function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return n.innerSlider.slickGoTo(e, t)
                        })), m(b(n), "slickPause", (function() {
                            return n.innerSlider.pause("paused")
                        })), m(b(n), "slickPlay", (function() {
                            return n.innerSlider.autoPlay("play")
                        })), n.state = {
                            breakpoint: null
                        }, n._responsiveMediaHandlers = [], n
                    }
                    var n, s, d;
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && v(e, t)
                    }(t, e), n = t, (s = [{
                        key: "media",
                        value: function(e, t) {
                            g.register(e, t), this._responsiveMediaHandlers.push({
                                query: e,
                                handler: t
                            })
                        }
                    }, {
                        key: "UNSAFE_componentWillMount",
                        value: function() {
                            var e = this;
                            if (this.props.responsive) {
                                var t = this.props.responsive.map((function(e) {
                                    return e.breakpoint
                                }));
                                t.sort((function(e, t) {
                                    return e - t
                                })), t.forEach((function(n, i) {
                                    var r;
                                    r = 0 === i ? (0, o.default)({
                                        minWidth: 0,
                                        maxWidth: n
                                    }) : (0, o.default)({
                                        minWidth: t[i - 1] + 1,
                                        maxWidth: n
                                    }), (0, l.canUseDOM)() && e.media(r, (function() {
                                        e.setState({
                                            breakpoint: n
                                        })
                                    }))
                                }));
                                var n = (0, o.default)({
                                    minWidth: t.slice(-1)[0]
                                });
                                (0, l.canUseDOM)() && this.media(n, (function() {
                                    e.setState({
                                        breakpoint: null
                                    })
                                }))
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._responsiveMediaHandlers.forEach((function(e) {
                                g.unregister(e.query, e.handler)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, n = this;
                            (e = this.state.breakpoint ? "unslick" === (t = this.props.responsive.filter((function(e) {
                                return e.breakpoint === n.state.breakpoint
                            })))[0].settings ? "unslick" : p({}, a.default, {}, this.props, {}, t[0].settings) : p({}, a.default, {}, this.props)).centerMode && (e.slidesToScroll, e.slidesToScroll = 1), e.fade && (e.slidesToShow, e.slidesToScroll, e.slidesToShow = 1, e.slidesToScroll = 1);
                            var o = i.default.Children.toArray(this.props.children);
                            o = o.filter((function(e) {
                                return "string" === typeof e ? !!e.trim() : !!e
                            })), e.variableWidth && (e.rows > 1 || e.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), e.variableWidth = !1);
                            for (var l = [], s = null, c = 0; c < o.length; c += e.rows * e.slidesPerRow) {
                                for (var d = [], f = c; f < c + e.rows * e.slidesPerRow; f += e.slidesPerRow) {
                                    for (var h = [], b = f; b < f + e.slidesPerRow && (e.variableWidth && o[b].props.style && (s = o[b].props.style.width), !(b >= o.length)); b += 1) h.push(i.default.cloneElement(o[b], {
                                        key: 100 * c + 10 * f + b,
                                        tabIndex: -1,
                                        style: {
                                            width: "".concat(100 / e.slidesPerRow, "%"),
                                            display: "inline-block"
                                        }
                                    }));
                                    d.push(i.default.createElement("div", {
                                        key: 10 * c + f
                                    }, h))
                                }
                                e.variableWidth ? l.push(i.default.createElement("div", {
                                    key: c,
                                    style: {
                                        width: s
                                    }
                                }, d)) : l.push(i.default.createElement("div", {
                                    key: c
                                }, d))
                            }
                            if ("unslick" === e) {
                                var v = "regular slider " + (this.props.className || "");
                                return i.default.createElement("div", {
                                    className: v
                                }, l)
                            }
                            return l.length <= e.slidesToShow && (e.unslick = !0), i.default.createElement(r.InnerSlider, u({
                                style: this.props.style,
                                ref: this.innerSliderRefHandler
                            }, e), l)
                        }
                    }]) && f(n.prototype, s), d && f(n, d), t
                }(i.default.Component);
            t.default = y
        },
        "5pgF": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var i = n("MwNz"),
                r = n("xAi6");
            const o = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.DEFAULT_IMAGE_QUALITY_LEVEL,
                    o = null;
                if (e && t) {
                    var a;
                    const n = e.filter(e => e.size === t);
                    n[0] && "" !== (null === (a = n[0]) || void 0 === a ? void 0 : a.url) && (o = n[0].url)
                }
                const l = "number" === typeof n ? Math.min(Math.max(n, 0), 100) : 0,
                    s = l > 0 && l < 100 ? "&quality=" + l : "";
                return Object({
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
                }).JEST_WORKER_ID ? o || i.a.get("authorPlaceholder") : o ? o + s : i.a.get("authorPlaceholder")
            }
        },
        "6hcU": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NextArrow = t.PrevArrow = void 0;
            var i = a(n("VBdi")),
                r = a(n("AAFT")),
                o = n("mQcW");

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e) {
                return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s() {
                return (s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(n, !0).forEach((function(t) {
                        d(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function h(e, t, n) {
                return t && f(e.prototype, t), n && f(e, n), e
            }

            function b(e, t) {
                return !t || "object" !== l(t) && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function v(e) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function m(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && g(e, t)
            }

            function g(e, t) {
                return (g = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var y = function(e) {
                function t() {
                    return p(this, t), b(this, v(t).apply(this, arguments))
                }
                return m(t, e), h(t, [{
                    key: "clickHandler",
                    value: function(e, t) {
                        t && t.preventDefault(), this.props.clickHandler(e, t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                                "slick-arrow": !0,
                                "slick-prev": !0
                            },
                            t = this.clickHandler.bind(this, {
                                message: "previous"
                            });
                        !this.props.infinite && (0 === this.props.currentSlide || this.props.slideCount <= this.props.slidesToShow) && (e["slick-disabled"] = !0, t = null);
                        var n = {
                                key: "0",
                                "data-role": "none",
                                className: (0, r.default)(e),
                                style: {
                                    display: "block"
                                },
                                onClick: t
                            },
                            o = {
                                currentSlide: this.props.currentSlide,
                                slideCount: this.props.slideCount
                            };
                        return this.props.prevArrow ? i.default.cloneElement(this.props.prevArrow, u({}, n, {}, o)) : i.default.createElement("button", s({
                            key: "0",
                            type: "button"
                        }, n), " ", "Previous")
                    }
                }]), t
            }(i.default.PureComponent);
            t.PrevArrow = y;
            var O = function(e) {
                function t() {
                    return p(this, t), b(this, v(t).apply(this, arguments))
                }
                return m(t, e), h(t, [{
                    key: "clickHandler",
                    value: function(e, t) {
                        t && t.preventDefault(), this.props.clickHandler(e, t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                                "slick-arrow": !0,
                                "slick-next": !0
                            },
                            t = this.clickHandler.bind(this, {
                                message: "next"
                            });
                        (0, o.canGoNext)(this.props) || (e["slick-disabled"] = !0, t = null);
                        var n = {
                                key: "1",
                                "data-role": "none",
                                className: (0, r.default)(e),
                                style: {
                                    display: "block"
                                },
                                onClick: t
                            },
                            a = {
                                currentSlide: this.props.currentSlide,
                                slideCount: this.props.slideCount
                            };
                        return this.props.nextArrow ? i.default.cloneElement(this.props.nextArrow, u({}, n, {}, a)) : i.default.createElement("button", s({
                            key: "1",
                            type: "button"
                        }, n), " ", "Next")
                    }
                }]), t
            }(i.default.PureComponent);
            t.NextArrow = O
        },
        "6zEj": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Track = void 0;
            var i = a(n("VBdi")),
                r = a(n("AAFT")),
                o = n("mQcW");

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e) {
                return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s() {
                return (s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function d(e, t) {
                return !t || "object" !== l(t) && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(n, !0).forEach((function(t) {
                        v(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function v(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var m = function(e) {
                    var t, n, i, r, o;
                    return i = (o = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 || o >= e.slideCount, e.centerMode ? (r = Math.floor(e.slidesToShow / 2), n = (o - e.currentSlide) % e.slideCount === 0, o > e.currentSlide - r - 1 && o <= e.currentSlide + r && (t = !0)) : t = e.currentSlide <= o && o < e.currentSlide + e.slidesToShow, {
                        "slick-slide": !0,
                        "slick-active": t,
                        "slick-center": n,
                        "slick-cloned": i,
                        "slick-current": o === e.currentSlide
                    }
                },
                g = function(e, t) {
                    return e.key || t
                },
                y = function(e) {
                    var t, n = [],
                        a = [],
                        l = [],
                        s = i.default.Children.count(e.children),
                        c = (0, o.lazyStartIndex)(e),
                        u = (0, o.lazyEndIndex)(e);
                    return i.default.Children.forEach(e.children, (function(d, p) {
                        var f, h = {
                            message: "children",
                            index: p,
                            slidesToScroll: e.slidesToScroll,
                            currentSlide: e.currentSlide
                        };
                        f = !e.lazyLoad || e.lazyLoad && e.lazyLoadedList.indexOf(p) >= 0 ? d : i.default.createElement("div", null);
                        var v = function(e) {
                                var t = {};
                                return void 0 !== e.variableWidth && !1 !== e.variableWidth || (t.width = e.slideWidth), e.fade && (t.position = "relative", e.vertical ? t.top = -e.index * parseInt(e.slideHeight) : t.left = -e.index * parseInt(e.slideWidth), t.opacity = e.currentSlide === e.index ? 1 : 0, t.transition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase, t.WebkitTransition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase), t
                            }(b({}, e, {
                                index: p
                            })),
                            y = f.props.className || "",
                            O = m(b({}, e, {
                                index: p
                            }));
                        if (n.push(i.default.cloneElement(f, {
                                key: "original" + g(f, p),
                                "data-index": p,
                                className: (0, r.default)(O, y),
                                tabIndex: "-1",
                                "aria-hidden": !O["slick-active"],
                                style: b({
                                    outline: "none"
                                }, f.props.style || {}, {}, v),
                                onClick: function(t) {
                                    f.props && f.props.onClick && f.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
                                }
                            })), e.infinite && !1 === e.fade) {
                            var w = s - p;
                            w <= (0, o.getPreClones)(e) && s !== e.slidesToShow && ((t = -w) >= c && (f = d), O = m(b({}, e, {
                                index: t
                            })), a.push(i.default.cloneElement(f, {
                                key: "precloned" + g(f, t),
                                "data-index": t,
                                tabIndex: "-1",
                                className: (0, r.default)(O, y),
                                "aria-hidden": !O["slick-active"],
                                style: b({}, f.props.style || {}, {}, v),
                                onClick: function(t) {
                                    f.props && f.props.onClick && f.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
                                }
                            }))), s !== e.slidesToShow && ((t = s + p) < u && (f = d), O = m(b({}, e, {
                                index: t
                            })), l.push(i.default.cloneElement(f, {
                                key: "postcloned" + g(f, t),
                                "data-index": t,
                                tabIndex: "-1",
                                className: (0, r.default)(O, y),
                                "aria-hidden": !O["slick-active"],
                                style: b({}, f.props.style || {}, {}, v),
                                onClick: function(t) {
                                    f.props && f.props.onClick && f.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
                                }
                            })))
                        }
                    })), e.rtl ? a.concat(n, l).reverse() : a.concat(n, l)
                },
                O = function(e) {
                    function t() {
                        return c(this, t), d(this, p(t).apply(this, arguments))
                    }
                    var n, r, o;
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && f(e, t)
                    }(t, e), n = t, (r = [{
                        key: "render",
                        value: function() {
                            var e = y(this.props),
                                t = this.props,
                                n = {
                                    onMouseEnter: t.onMouseEnter,
                                    onMouseOver: t.onMouseOver,
                                    onMouseLeave: t.onMouseLeave
                                };
                            return i.default.createElement("div", s({
                                className: "slick-track",
                                style: this.props.trackStyle
                            }, n), e)
                        }
                    }]) && u(n.prototype, r), o && u(n, o), t
                }(i.default.PureComponent);
            t.Track = O
        },
        "8Or0": function(e, t, n) {
            "use strict";
            var i = n("VBdi"),
                r = n("96Qw");
            t.a = function() {
                const {
                    pathname: e
                } = Object(r.useLocation)();
                Object(i.useEffect)(() => {
                    setTimeout(() => {
                        window.Opta && "function" === typeof window.Opta.start && window.Opta.start()
                    }, 0)
                }, [e])
            }
        },
        "8Zt+": function(e, t, n) {},
        AewO: function(e, t, n) {},
        DWwR: function(e, t, n) {
            "use strict";
            n("VBdi");
            var i = n("9mJr"),
                r = n("9N7U"),
                o = n("dVLG");
            const a = (e => {
                    const t = {
                        ar: "https://www.aljazeera.net",
                        en: "https://www.aljazeera.com",
                        bs: "https://balkans.aljazeera.net",
                        hr: "https://balkans.aljazeera.net",
                        sr: "https://balkans.aljazeera.net",
                        "zh-Hans": "https://chinese.aljazeera.net"
                    };
                    return () => Object(o.c)(i.a, null, e.map(e => Object(o.c)("link", {
                        key: e,
                        rel: "alternate",
                        hreflang: e,
                        href: t[e]
                    })))
                })(["en", "bs", "zh-Hans"]),
                l = e => {
                    var t, n;
                    let {
                        path: a = "",
                        proxySite: l
                    } = e;
                    const s = a || "",
                        c = null === (t = Object(r.getDynamicValue)("arcSettings")) || void 0 === t || null === (n = t.proxyUrls) || void 0 === n ? void 0 : n[l],
                        u = {
                            aja: {
                                proxyLink: c || "https://www.ajnet.me",
                                defaultLink: "https://www.aljazeera.net",
                                defaultLanguage: "ar",
                                languages: ["ar-EG"]
                            },
                            ajshared: {
                                proxyLink: c || "https://www.ajnet.me",
                                defaultLink: "https://www.aljazeera.net",
                                defaultLanguage: "ar",
                                languages: ["ar-EG", "ar-BH"]
                            },
                            ajd: {
                                proxyLink: c || "https://1-d4561.azureedge.net",
                                defaultLink: "https://doc.aljazeera.net",
                                defaultLanguage: "ar",
                                languages: ["ar-EG", "ar-BH"]
                            },
                            ajm: {
                                proxyLink: c || "https://www.ajmubasher.net",
                                defaultLink: "https://www.aljazeeramubasher.net",
                                defaultLanguage: "ar",
                                languages: ["ar-EG"]
                            }
                        }[l];
                    if (!u) return null;
                    const d = s.length > 0;
                    return Object(o.c)(i.a, null, u.languages.map(e => Object(o.c)("link", {
                        key: e,
                        rel: "alternate",
                        hreflang: e,
                        href: `${u.proxyLink}${s}`
                    })), Object(o.c)("link", {
                        rel: "alternate",
                        hreflang: u.defaultLanguage,
                        href: `${u.defaultLink}${s}`
                    }), d && Object(o.c)("link", {
                        rel: "alternate",
                        hreflang: "x-default",
                        href: `${u.defaultLink}${s}`
                    }))
                };
            n("MwNz"), n("N4w9"), n("4UCj"), n("bz2W");
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return l
            }))
        },
        EgGt: function(e, t, n) {
            var i = n("tGtO"),
                r = n("j43m").each;

            function o(e, t) {
                this.query = e, this.isUnconditional = t, this.handlers = [], this.mql = window.matchMedia(e);
                var n = this;
                this.listener = function(e) {
                    n.mql = e.currentTarget || e, n.assess()
                }, this.mql.addListener(this.listener)
            }
            o.prototype = {
                constuctor: o,
                addHandler: function(e) {
                    var t = new i(e);
                    this.handlers.push(t), this.matches() && t.on()
                },
                removeHandler: function(e) {
                    var t = this.handlers;
                    r(t, (function(n, i) {
                        if (n.equals(e)) return n.destroy(), !t.splice(i, 1)
                    }))
                },
                matches: function() {
                    return this.mql.matches || this.isUnconditional
                },
                clear: function() {
                    r(this.handlers, (function(e) {
                        e.destroy()
                    })), this.mql.removeListener(this.listener), this.handlers.length = 0
                },
                assess: function() {
                    var e = this.matches() ? "on" : "off";
                    r(this.handlers, (function(t) {
                        t[e]()
                    }))
                }
            }, e.exports = o
        },
        GECe: function(e, t, n) {
            "use strict";
            n.r(t),
                function(e) {
                    var n = function() {
                            if ("undefined" !== typeof Map) return Map;

                            function e(e, t) {
                                var n = -1;
                                return e.some((function(e, i) {
                                    return e[0] === t && (n = i, !0)
                                })), n
                            }
                            return function() {
                                function t() {
                                    this.__entries__ = []
                                }
                                return Object.defineProperty(t.prototype, "size", {
                                    get: function() {
                                        return this.__entries__.length
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                }), t.prototype.get = function(t) {
                                    var n = e(this.__entries__, t),
                                        i = this.__entries__[n];
                                    return i && i[1]
                                }, t.prototype.set = function(t, n) {
                                    var i = e(this.__entries__, t);
                                    ~i ? this.__entries__[i][1] = n : this.__entries__.push([t, n])
                                }, t.prototype.delete = function(t) {
                                    var n = this.__entries__,
                                        i = e(n, t);
                                    ~i && n.splice(i, 1)
                                }, t.prototype.has = function(t) {
                                    return !!~e(this.__entries__, t)
                                }, t.prototype.clear = function() {
                                    this.__entries__.splice(0)
                                }, t.prototype.forEach = function(e, t) {
                                    void 0 === t && (t = null);
                                    for (var n = 0, i = this.__entries__; n < i.length; n++) {
                                        var r = i[n];
                                        e.call(t, r[1], r[0])
                                    }
                                }, t
                            }()
                        }(),
                        i = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
                        r = "undefined" !== typeof e && e.Math === Math ? e : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
                        o = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(r) : function(e) {
                            return setTimeout((function() {
                                return e(Date.now())
                            }), 1e3 / 60)
                        };
                    var a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                        l = "undefined" !== typeof MutationObserver,
                        s = function() {
                            function e() {
                                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                                    var n = !1,
                                        i = !1,
                                        r = 0;

                                    function a() {
                                        n && (n = !1, e()), i && s()
                                    }

                                    function l() {
                                        o(a)
                                    }

                                    function s() {
                                        var e = Date.now();
                                        if (n) {
                                            if (e - r < 2) return;
                                            i = !0
                                        } else n = !0, i = !1, setTimeout(l, t);
                                        r = e
                                    }
                                    return s
                                }(this.refresh.bind(this), 20)
                            }
                            return e.prototype.addObserver = function(e) {
                                ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                            }, e.prototype.removeObserver = function(e) {
                                var t = this.observers_,
                                    n = t.indexOf(e);
                                ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
                            }, e.prototype.refresh = function() {
                                this.updateObservers_() && this.refresh()
                            }, e.prototype.updateObservers_ = function() {
                                var e = this.observers_.filter((function(e) {
                                    return e.gatherActive(), e.hasActive()
                                }));
                                return e.forEach((function(e) {
                                    return e.broadcastActive()
                                })), e.length > 0
                            }, e.prototype.connect_ = function() {
                                i && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), l ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                                    attributes: !0,
                                    childList: !0,
                                    characterData: !0,
                                    subtree: !0
                                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                            }, e.prototype.disconnect_ = function() {
                                i && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                            }, e.prototype.onTransitionEnd_ = function(e) {
                                var t = e.propertyName,
                                    n = void 0 === t ? "" : t;
                                a.some((function(e) {
                                    return !!~n.indexOf(e)
                                })) && this.refresh()
                            }, e.getInstance = function() {
                                return this.instance_ || (this.instance_ = new e), this.instance_
                            }, e.instance_ = null, e
                        }(),
                        c = function(e, t) {
                            for (var n = 0, i = Object.keys(t); n < i.length; n++) {
                                var r = i[n];
                                Object.defineProperty(e, r, {
                                    value: t[r],
                                    enumerable: !1,
                                    writable: !1,
                                    configurable: !0
                                })
                            }
                            return e
                        },
                        u = function(e) {
                            return e && e.ownerDocument && e.ownerDocument.defaultView || r
                        },
                        d = m(0, 0, 0, 0);

                    function p(e) {
                        return parseFloat(e) || 0
                    }

                    function f(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        return t.reduce((function(t, n) {
                            return t + p(e["border-" + n + "-width"])
                        }), 0)
                    }

                    function h(e) {
                        var t = e.clientWidth,
                            n = e.clientHeight;
                        if (!t && !n) return d;
                        var i = u(e).getComputedStyle(e),
                            r = function(e) {
                                for (var t = {}, n = 0, i = ["top", "right", "bottom", "left"]; n < i.length; n++) {
                                    var r = i[n],
                                        o = e["padding-" + r];
                                    t[r] = p(o)
                                }
                                return t
                            }(i),
                            o = r.left + r.right,
                            a = r.top + r.bottom,
                            l = p(i.width),
                            s = p(i.height);
                        if ("border-box" === i.boxSizing && (Math.round(l + o) !== t && (l -= f(i, "left", "right") + o), Math.round(s + a) !== n && (s -= f(i, "top", "bottom") + a)), ! function(e) {
                                return e === u(e).document.documentElement
                            }(e)) {
                            var c = Math.round(l + o) - t,
                                h = Math.round(s + a) - n;
                            1 !== Math.abs(c) && (l -= c), 1 !== Math.abs(h) && (s -= h)
                        }
                        return m(r.left, r.top, l, s)
                    }
                    var b = "undefined" !== typeof SVGGraphicsElement ? function(e) {
                        return e instanceof u(e).SVGGraphicsElement
                    } : function(e) {
                        return e instanceof u(e).SVGElement && "function" === typeof e.getBBox
                    };

                    function v(e) {
                        return i ? b(e) ? function(e) {
                            var t = e.getBBox();
                            return m(0, 0, t.width, t.height)
                        }(e) : h(e) : d
                    }

                    function m(e, t, n, i) {
                        return {
                            x: e,
                            y: t,
                            width: n,
                            height: i
                        }
                    }
                    var g = function() {
                            function e(e) {
                                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = m(0, 0, 0, 0), this.target = e
                            }
                            return e.prototype.isActive = function() {
                                var e = v(this.target);
                                return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                            }, e.prototype.broadcastRect = function() {
                                var e = this.contentRect_;
                                return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                            }, e
                        }(),
                        y = function(e, t) {
                            var n = function(e) {
                                var t = e.x,
                                    n = e.y,
                                    i = e.width,
                                    r = e.height,
                                    o = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                                    a = Object.create(o.prototype);
                                return c(a, {
                                    x: t,
                                    y: n,
                                    width: i,
                                    height: r,
                                    top: n,
                                    right: t + i,
                                    bottom: r + n,
                                    left: t
                                }), a
                            }(t);
                            c(this, {
                                target: e,
                                contentRect: n
                            })
                        },
                        O = function() {
                            function e(e, t, i) {
                                if (this.activeObservations_ = [], this.observations_ = new n, "function" !== typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                                this.callback_ = e, this.controller_ = t, this.callbackCtx_ = i
                            }
                            return e.prototype.observe = function(e) {
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                if ("undefined" !== typeof Element && Element instanceof Object) {
                                    if (!(e instanceof u(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                    var t = this.observations_;
                                    t.has(e) || (t.set(e, new g(e)), this.controller_.addObserver(this), this.controller_.refresh())
                                }
                            }, e.prototype.unobserve = function(e) {
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                if ("undefined" !== typeof Element && Element instanceof Object) {
                                    if (!(e instanceof u(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                    var t = this.observations_;
                                    t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                                }
                            }, e.prototype.disconnect = function() {
                                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                            }, e.prototype.gatherActive = function() {
                                var e = this;
                                this.clearActive(), this.observations_.forEach((function(t) {
                                    t.isActive() && e.activeObservations_.push(t)
                                }))
                            }, e.prototype.broadcastActive = function() {
                                if (this.hasActive()) {
                                    var e = this.callbackCtx_,
                                        t = this.activeObservations_.map((function(e) {
                                            return new y(e.target, e.broadcastRect())
                                        }));
                                    this.callback_.call(e, t, e), this.clearActive()
                                }
                            }, e.prototype.clearActive = function() {
                                this.activeObservations_.splice(0)
                            }, e.prototype.hasActive = function() {
                                return this.activeObservations_.length > 0
                            }, e
                        }(),
                        w = "undefined" !== typeof WeakMap ? new WeakMap : new n,
                        j = function e(t) {
                            if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            var n = s.getInstance(),
                                i = new O(t, n, this);
                            w.set(this, i)
                        };
                    ["observe", "unobserve", "disconnect"].forEach((function(e) {
                        j.prototype[e] = function() {
                            var t;
                            return (t = w.get(this))[e].apply(t, arguments)
                        }
                    }));
                    var S = "undefined" !== typeof r.ResizeObserver ? r.ResizeObserver : j;
                    t.default = S
                }.call(this, n("Uwcf"))
        },
        IQ5x: function(e, t, n) {
            "use strict";
            var i;
            ! function(r) {
                if ("function" !== typeof o) {
                    var o = function(e) {
                        return e
                    };
                    o.nonNative = !0
                }
                const a = o("plaintext"),
                    l = o("html"),
                    s = o("comment"),
                    c = /<(\w*)>/g,
                    u = /<\/?([^\s\/>]+)/;

                function d(e, t, n) {
                    return f(e = e || "", p(t = t || [], n = n || ""))
                }

                function p(e, t) {
                    return {
                        allowable_tags: e = function(e) {
                            let t = new Set;
                            if ("string" === typeof e) {
                                let n;
                                for (; n = c.exec(e);) t.add(n[1])
                            } else o.nonNative || "function" !== typeof e[o.iterator] ? "function" === typeof e.forEach && e.forEach(t.add, t) : t = new Set(e);
                            return t
                        }(e),
                        tag_replacement: t,
                        state: a,
                        tag_buffer: "",
                        depth: 0,
                        in_quote_char: ""
                    }
                }

                function f(e, t) {
                    if ("string" != typeof e) throw new TypeError("'html' parameter must be a string");
                    let n = t.allowable_tags,
                        i = t.tag_replacement,
                        r = t.state,
                        o = t.tag_buffer,
                        c = t.depth,
                        u = t.in_quote_char,
                        d = "";
                    for (let p = 0, f = e.length; p < f; p++) {
                        let t = e[p];
                        if (r === a) switch (t) {
                            case "<":
                                r = l, o += t;
                                break;
                            default:
                                d += t
                        } else if (r === l) switch (t) {
                            case "<":
                                if (u) break;
                                c++;
                                break;
                            case ">":
                                if (u) break;
                                if (c) {
                                    c--;
                                    break
                                }
                                u = "", r = a, o += ">", n.has(h(o)) ? d += o : d += i, o = "";
                                break;
                            case '"':
                            case "'":
                                u = t === u ? "" : u || t, o += t;
                                break;
                            case "-":
                                "<!-" === o && (r = s), o += t;
                                break;
                            case " ":
                            case "\n":
                                if ("<" === o) {
                                    r = a, d += "< ", o = "";
                                    break
                                }
                                o += t;
                                break;
                            default:
                                o += t
                        } else if (r === s) switch (t) {
                            case ">":
                                "--" == o.slice(-2) && (r = a), o = "";
                                break;
                            default:
                                o += t
                        }
                    }
                    return t.state = r, t.tag_buffer = o, t.depth = c, t.in_quote_char = u, d
                }

                function h(e) {
                    let t = u.exec(e);
                    return t ? t[1].toLowerCase() : null
                }
                d.init_streaming_mode = function(e, t) {
                    let n = p(e = e || [], t = t || "");
                    return function(e) {
                        return f(e || "", n)
                    }
                }, void 0 === (i = function() {
                    return d
                }.call(t, n, t, e)) || (e.exports = i)
            }()
        },
        KrBb: function(e, t, n) {
            "use strict";
            t.a = n.p + "static/media/error-icon.c8fb9e1b.svg"
        },
        Nsd4: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Dots = void 0;
            var i = o(n("VBdi")),
                r = o(n("AAFT"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(e) {
                return (a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function d(e, t) {
                return !t || "object" !== a(t) && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var h = function(e) {
                function t() {
                    return c(this, t), d(this, p(t).apply(this, arguments))
                }
                var n, o, a;
                return function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t)
                }(t, e), n = t, (o = [{
                    key: "clickHandler",
                    value: function(e, t) {
                        t.preventDefault(), this.props.clickHandler(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t = this,
                            n = (e = {
                                slideCount: this.props.slideCount,
                                slidesToScroll: this.props.slidesToScroll,
                                slidesToShow: this.props.slidesToShow,
                                infinite: this.props.infinite
                            }).infinite ? Math.ceil(e.slideCount / e.slidesToScroll) : Math.ceil((e.slideCount - e.slidesToShow) / e.slidesToScroll) + 1,
                            o = this.props,
                            a = {
                                onMouseEnter: o.onMouseEnter,
                                onMouseOver: o.onMouseOver,
                                onMouseLeave: o.onMouseLeave
                            },
                            c = Array.apply(null, Array(n + 1).join("0").split("")).map((function(e, n) {
                                var o = n * t.props.slidesToScroll,
                                    a = n * t.props.slidesToScroll + (t.props.slidesToScroll - 1),
                                    l = (0, r.default)({
                                        "slick-active": t.props.currentSlide >= o && t.props.currentSlide <= a
                                    }),
                                    s = {
                                        message: "dots",
                                        index: n,
                                        slidesToScroll: t.props.slidesToScroll,
                                        currentSlide: t.props.currentSlide
                                    },
                                    c = t.clickHandler.bind(t, s);
                                return i.default.createElement("li", {
                                    key: n,
                                    className: l
                                }, i.default.cloneElement(t.props.customPaging(n), {
                                    onClick: c
                                }))
                            }));
                        return i.default.cloneElement(this.props.appendDots(c), function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? l(n, !0).forEach((function(t) {
                                    s(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({
                            className: this.props.dotsClass
                        }, a))
                    }
                }]) && u(n.prototype, o), a && u(n, a), t
            }(i.default.PureComponent);
            t.Dots = h
        },
        RAGO: function(e, t, n) {
            var i = n("EgGt"),
                r = n("j43m"),
                o = r.each,
                a = r.isFunction,
                l = r.isArray;

            function s() {
                if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
                this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches
            }
            s.prototype = {
                constructor: s,
                register: function(e, t, n) {
                    var r = this.queries,
                        s = n && this.browserIsIncapable;
                    return r[e] || (r[e] = new i(e, s)), a(t) && (t = {
                        match: t
                    }), l(t) || (t = [t]), o(t, (function(t) {
                        a(t) && (t = {
                            match: t
                        }), r[e].addHandler(t)
                    })), this
                },
                unregister: function(e, t) {
                    var n = this.queries[e];
                    return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this
                }
            }, e.exports = s
        },
        RiWD: function(e, t, n) {
            "use strict";
            n("VBdi");
            var i = n("ezFu"),
                r = n("9N7U"),
                o = n("rYNr"),
                a = n("ncCA"),
                l = n("EHTG"),
                s = n("CX3F"),
                c = n("Ne5u"),
                u = (n("sX/T"), n("dVLG"));
            const d = e => {
                let {
                    article: t,
                    isAmp: n,
                    label: d,
                    position: p,
                    analyticsMetaProps: f = {}
                } = e;
                if (!t) return null;
                const h = Object(r.getPostLink)(t),
                    b = n ? o.a : l.a,
                    v = Object(r.getReplacementHeadline)(t),
                    m = Object(i.a)(t),
                    g = "external-article" === t.postType ? "_blank" : void 0;
                return Object(u.c)("article", {
                    className: "card-pre-footer u-clickable-card"
                }, Object(u.c)("div", {
                    className: "card-pre-footer__title-container"
                }, Object(u.c)(s.b, {
                    breaking: t.isBreaking,
                    className: "u-clickable-card__exclude",
                    customContent: t.postLabel,
                    developing: t.isDeveloping,
                    featuredSource: t.source,
                    live: t.isLive,
                    ignoreFeaturedSource: !1,
                    series: t.series,
                    type: t.postType,
                    link: t.link,
                    isAmp: n,
                    label: `More From - URL ${p} - Post Label`,
                    eventTarget: t.link
                }), Object(u.c)("h3", {
                    className: "card-pre-footer__title"
                }, Object(u.c)(a.a, {
                    to: h,
                    className: "u-clickable-card__link",
                    article: t,
                    isAmp: n,
                    label: `${d} - URL ${p} - Collection Card Item`,
                    eventTarget: v,
                    target: g,
                    analyticsMetaProps: { ...f,
                        articlePosition: p
                    }
                }, v, Object(u.c)(c.a, {
                    article: t
                })))), (null === m || void 0 === m ? void 0 : m.sourceUrl) && Object(u.c)("div", {
                    className: "card-pre-footer__image--container",
                    "aria-hidden": "true"
                }, Object(u.c)(b, {
                    alt: m.caption,
                    url: m.sourceUrl,
                    sizeNames: ["arc-image-3-2-170", "arc-image-3-2-270"],
                    height: 180,
                    width: 270,
                    ratio: !1,
                    sources: m.sizes,
                    article: t,
                    displayBrandingBanner: !1,
                    postIconVariant: "small"
                })))
            };
            d.defaultProps = {
                article: null,
                isAmp: !1,
                label: "More From"
            }, t.a = d
        },
        T9IZ: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i, r = (i = n("VBdi")) && i.__esModule ? i : {
                default: i
            };
            var o = {
                accessibility: !0,
                adaptiveHeight: !1,
                afterChange: null,
                appendDots: function(e) {
                    return r.default.createElement("ul", {
                        style: {
                            display: "block"
                        }
                    }, e)
                },
                arrows: !0,
                autoplay: !1,
                autoplaySpeed: 3e3,
                beforeChange: null,
                centerMode: !1,
                centerPadding: "50px",
                className: "",
                cssEase: "ease",
                customPaging: function(e) {
                    return r.default.createElement("button", null, e + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: null,
                nextArrow: null,
                onEdge: null,
                onInit: null,
                onLazyLoadError: null,
                onReInit: null,
                pauseOnDotsHover: !1,
                pauseOnFocus: !1,
                pauseOnHover: !0,
                prevArrow: null,
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "div",
                slidesPerRow: 1,
                slidesToScroll: 1,
                slidesToShow: 1,
                speed: 500,
                swipe: !0,
                swipeEvent: null,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                waitForAnimate: !0
            };
            t.default = o
        },
        TIVh: function(e, t, n) {
            "use strict";
            var i = n("AAFT"),
                r = n.n(i),
                o = (n("VBdi"), n("8Ffx")),
                a = (n("qwrs"), n("dVLG"));
            const l = {
                    h2: "h2",
                    h3: "h3",
                    h4: "h4"
                },
                s = {
                    bar: "bar",
                    dot: "dot"
                };
            t.a = e => {
                let {
                    title: t,
                    className: n,
                    style: i = "bar",
                    headingLevel: c = "h3",
                    id: u,
                    type: d = "plain",
                    size: p = "medium"
                } = e;
                const f = l[c] || "h3",
                    h = s[i] || "none";
                return Object(a.c)(f, {
                    id: u,
                    className: r()("branded-collection-title", n, {
                        "branded--dot": "dot" === h,
                        "branded--bar": "bar" === h,
                        "collection-title--plain": "plain" === d,
                        "collection-title--overlay": "overlay" === d,
                        "collection-title--medium": "medium" === p,
                        "collection-title--large": "large" === p
                    }),
                    "data-testid": "branded-collection-title-" + h,
                    dangerouslySetInnerHTML: {
                        __html: Object(o.b)(t)
                    }
                })
            }
        },
        UMk6: function(e, t, n) {
            "use strict";
            var i = n("AAFT"),
                r = n.n(i),
                o = n("VBdi"),
                a = n.n(o),
                l = n("96Qw"),
                s = n("H5bq"),
                c = n("xCJP"),
                u = n("MwNz"),
                d = n("oBzm"),
                p = n("CNPg"),
                f = n("4j0K"),
                h = n("lkIV"),
                b = n("HIup"),
                v = n("2a7d"),
                m = n("w8RO"),
                g = n("Miz2"),
                y = n("PutW"),
                O = n("dVLG");
            var w = e => {
                    const t = u.a.get("i18n"),
                        n = t.t("consent-modal-title"),
                        i = t.t("consent-modal-descr");
                    return Object(O.c)(y.a, Object(g.a)({
                        title: n,
                        description: i,
                        buttonLabel: t.t("Continue"),
                        closeButtonLabel: t.t("Close")
                    }, e))
                },
                j = n("wwBK");
            var S = e => {
                    var t, n;
                    const i = u.a.get("i18n"),
                        r = "zh-Hans" === u.a.get("language"),
                        o = i.t("Enrich your Al Jazeera experience: Sign in to save stories").split(r ? "\uff1a" : ":"),
                        a = null === (t = o[0]) || void 0 === t ? void 0 : t.trim(),
                        l = null === (n = o[1]) || void 0 === n ? void 0 : n.trim();
                    return Object(O.c)(y.a, Object(g.a)({
                        title: a,
                        description: l,
                        buttonLabel: i.t("Continue"),
                        closeButtonLabel: i.t("Close")
                    }, e))
                },
                k = n("9N7U"),
                _ = n("LCyj");
            n("8Zt+");
            var T = e => {
                let {
                    children: t,
                    showTooltip: n,
                    closeTooltip: i
                } = e;
                const r = u.a.get("i18n");
                return n ? Object(O.c)(_.a, {
                    id: "update-reading-list-tooltip",
                    text: r.t("save-for-later-tooltip-text"),
                    onClose: i,
                    className: "update-reading-list-tooltip",
                    horizontal: Object(k.isRTLSite)() ? "left" : "right",
                    testId: "save-for-later-tooltip"
                }, t) : t || null
            };
            n("irYC");
            t.a = a.a.memo(Object(p.a)(e => {
                let {
                    article: t
                } = e;
                const n = Object(l.useHistory)(),
                    i = Object(l.useLocation)(),
                    p = Object(b.f)(),
                    {
                        user: g,
                        setPendingAction: y,
                        userInfo: k
                    } = Object(f.a)(),
                    {
                        setToastContent: _
                    } = Object(d.c)(),
                    [E, P] = Object(o.useState)(!1),
                    [L, C] = Object(o.useState)(!1),
                    [N, x] = Object(o.useState)(!1),
                    {
                        toggle: A,
                        isSaved: M,
                        isLoading: z
                    } = Object(v.a)(t, () => {
                        W()
                    }, () => {
                        _({
                            message: I.t("Something went wrong message"),
                            status: "error"
                        })
                    }),
                    I = u.a.get("i18n"),
                    D = M ? "unsaveInCircle" : "saveInCircle",
                    [R, H] = Object(o.useState)({
                        showToast: !1,
                        showTooltip: !1,
                        showCustomTooltip: !1
                    });
                Object(o.useEffect)(() => {
                    var e;
                    if (!p.isReady) return;
                    const t = null === (e = p.get(b.c)) || void 0 === e ? void 0 : e.isHide;
                    H(e => ({ ...e,
                        showTooltip: !M && t,
                        showCustomTooltip: !M && !t
                    })), t || p.set(b.c, {
                        isHide: !0
                    })
                }, [M, p.isReady]);
                const W = Object(o.useCallback)(() => {
                        H(e => ({ ...e,
                            showToast: !0
                        })), setTimeout(() => {
                            H(e => ({ ...e,
                                showToast: !1
                            }))
                        }, 2500)
                    }, [M]),
                    U = Object(o.useCallback)(() => {
                        var e;
                        z || (g ? (null === k || void 0 === k || null === (e = k.user) || void 0 === e ? void 0 : e.consent) ? g.emailVerified ? (H(e => ({ ...e,
                            showTooltip: !1
                        })), A()) : C(!0) : x(!0) : P(!0))
                    }, [z, g, M, null === t || void 0 === t ? void 0 : t.id, k]),
                    V = !M && R.showTooltip ? I.t("Save to Reading list") : "",
                    B = I.t(M ? "Saved" : "Unsaved"),
                    F = R.showToast ? B : V,
                    $ = Object(O.c)("div", {
                        className: r()("update-reading-list", {
                            "update-reading-list--loading": z
                        })
                    }, Object(O.c)(m.a, {
                        name: D,
                        viewBox: "0 0 24 24",
                        size: 24,
                        onClick: U,
                        className: "update-reading-list__button",
                        isFocusable: !0,
                        role: "button",
                        label: "Save to Reading list",
                        title: ""
                    }), Object(O.c)("span", {
                        className: r()("update-reading-list__tooltip", {
                            visible: R.showToast,
                            hidden: z || "" === F
                        }),
                        role: "tooltip",
                        "aria-live": "polite"
                    }, F));
                return Object(O.c)(a.a.Fragment, null, Object(O.c)(T, {
                    showTooltip: R.showCustomTooltip,
                    closeTooltip: () => {
                        H(e => ({ ...e,
                            showTooltip: !M,
                            showCustomTooltip: !1
                        }))
                    }
                }, $), Object(O.c)(S, {
                    onContinueClick: () => {
                        y({
                            actionName: h.a.updateReadingList,
                            loginTitle: I.t("Enrich your Al Jazeera experience: Sign in to save stories"),
                            redirect: i.pathname,
                            articleId: t.id,
                            article: t
                        }), Object(c.i)(), Object(s.f)(!1), n.push({
                            pathname: "/account/sign-up"
                        })
                    },
                    onClose: () => P(!1),
                    isOpen: E
                }), Object(O.c)(j.a, {
                    onContinueClick: () => {
                        Object(s.f)(!1), n.push({
                            pathname: "/account/verify"
                        })
                    },
                    onClose: () => {
                        Object(s.b)(!0), C(!1)
                    },
                    isOpen: L
                }), Object(O.c)(w, {
                    onContinueClick: () => {
                        Object(s.h)(!1), n.push({
                            pathname: "/account-social-consent"
                        })
                    },
                    onClose: () => {
                        Object(s.h)(!0), x(!1)
                    },
                    isOpen: N
                }))
            }, e => {
                let {
                    article: t
                } = e;
                return !!(null === t || void 0 === t ? void 0 : t.id) && !!(null === t || void 0 === t ? void 0 : t.postType) && !["liveblog-update"].includes(null === t || void 0 === t ? void 0 : t.postType)
            }))
        },
        VIpO: function(e, t, n) {},
        WHDo: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var i = n("VBdi");
            const r = () => {
                const e = Object(i.useRef)(),
                    [t, n] = Object(i.useState)(!1),
                    r = t => {
                        var i;
                        (null === e || void 0 === e || null === (i = e.current) || void 0 === i ? void 0 : i.contains(t.target)) || n(!1)
                    };
                return Object(i.useEffect)(() => (document.addEventListener("mousedown", r), () => {
                    document.removeEventListener("mousedown", r)
                }), []), [t, n, e]
            }
        },
        YNiD: function(e, t) {
            e.exports = function(e) {
                return e.replace(/[A-Z]/g, (function(e) {
                    return "-" + e.toLowerCase()
                })).toLowerCase()
            }
        },
        YXvR: function(e, t, n) {
            "use strict";
            var i = n("/WA2"),
                r = n("dQgG"),
                o = n.n(r),
                a = n("VBdi"),
                l = n.n(a),
                s = n("Ot6i"),
                c = n("MwNz"),
                u = n("P/sV"),
                d = n("A81W"),
                p = n("ekvm"),
                f = n("kXcp"),
                h = n("SVMe"),
                b = n("9N7U"),
                v = n("YcvO"),
                m = n("w8RO"),
                g = n("8+YW"),
                y = n("UMk6"),
                O = n("/G5K"),
                w = n.n(O),
                j = n("dVLG");
            const S = i.a.lib({
                    resolved: {},
                    chunkName: () => "qrcode",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e(38).then(n.t.bind(null, "htZ7", 7)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "htZ7"
                    }
                }),
                k = {
                    facebook: {
                        shareUrl: (e, t) => "https://www.facebook.com/sharer/sharer.php?u=" + t,
                        color: "social",
                        popup: !0,
                        getAccessibilityTitle: () => d.a.t("Share on Facebook")
                    },
                    twitter: {
                        shareUrl: (e, t) => `https://twitter.com/intent/tweet?text=${e}&source=sharethiscom&related=sharethis&via=${c.a.get("TWITTER_ACCOUNT")}&url=${t}`,
                        color: "social",
                        popup: !0,
                        viewBoxSize: "26 24",
                        getAccessibilityTitle: () => d.a.t("Share on Twitter")
                    },
                    whatsapp: {
                        shareUrl: (e, t) => "whatsapp://send?text=" + t,
                        classes: ["u-hidden--desktop"],
                        color: "whatsapp-green",
                        getAccessibilityTitle: () => d.a.t("Share on Whatsapp")
                    },
                    weibo: {
                        shareUrl: (e, t) => `http://service.weibo.com/share/share.php?url=${t}&title=${e}`,
                        color: "weibo-red",
                        popup: !0,
                        getAccessibilityTitle: () => d.a.t("Share on Weibo")
                    },
                    wechat: {
                        shareUrl: (e, t) => t,
                        color: "wechat-green",
                        popup: !0,
                        isQrCode: !0,
                        getAccessibilityTitle: () => d.a.t("Share on Wechat")
                    },
                    douban: {
                        shareUrl: (e, t) => `https://www.douban.com/share/service?name=${e}&url=${t}&title=${e}`,
                        color: "douban-green",
                        popup: !0,
                        getAccessibilityTitle: () => d.a.t("Share on Douban")
                    },
                    copylink: {
                        shareUrl: (e, t, n) => (null === n || void 0 === n ? void 0 : n.shortUrl) || (null === n || void 0 === n ? void 0 : n.proxyShortUrl) || (null === n || void 0 === n ? void 0 : n.link) ? Object(b.getSharableURL)(n) : "undefined" !== typeof window ? window.location.href : null,
                        classes: ["copylink"],
                        color: "social",
                        copylink: !0,
                        viewBoxSize: "27 24",
                        getAccessibilityTitle: () => d.a.t("Copy Link")
                    }
                },
                _ = {
                    facebook: { ...k.facebook,
                        icon: "facebook-f-white",
                        viewBoxSize: "24 24",
                        color: "facebook-blue"
                    }
                },
                T = 24,
                E = function(e, t, n, i, o, l) {
                    var s;
                    let c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "Social Media",
                        u = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
                        p = k[t];
                    u && _[t] && (p = _[t]);
                    const f = [l].concat(p.classes),
                        h = o || p.color,
                        {
                            popup: b,
                            copylink: v
                        } = p,
                        y = p.shareUrl(n, i, e),
                        O = Object(a.useRef)(null),
                        w = n => {
                            v && (n.preventDefault(), S(y)), r.canUseDOM && (null === e || void 0 === e ? void 0 : e.id) && P(e, t, n), b && N(n, y, t, p.isQrCode)
                        },
                        S = e => {
                            e || (e = window.location.href), navigator.clipboard.writeText(e), O.current.innerHTML = d.a.t("Link copied"), O.current.classList.remove("copylink__tooltip-hidden"), setTimeout(() => {
                                O.current.classList.add("copylink__tooltip-hidden")
                            }, 2500)
                        };
                    return Object(j.c)(g.a, {
                        key: y,
                        onClick: w,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        to: y,
                        className: f.join(" ").trim(),
                        label: c,
                        eventTarget: t,
                        title: p.getAccessibilityTitle(),
                        allowFullLink: !0
                    }, v && Object(j.c)("span", {
                        ref: O,
                        className: "copylink__tooltip copylink__tooltip-hidden"
                    }), Object(j.c)(m.a, {
                        name: null !== (s = p.icon) && void 0 !== s ? s : t,
                        viewBox: p.viewBoxSize ? "0 0 " + p.viewBoxSize : void 0,
                        color: h,
                        size: T,
                        title: t
                    }))
                },
                P = function(e, t, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    const r = window.getMetaValue("contentType", "name", null),
                        o = window.getMetaValue("postTitle") || document.title,
                        a = "liveblog-update" === (null === e || void 0 === e ? void 0 : e.postType),
                        l = "liveblog" === (null === e || void 0 === e ? void 0 : e.postType),
                        c = a && L(n),
                        u = {
                            id: window.getMetaValue("postID", "name", null),
                            sharePlatform: t,
                            postType: r,
                            type: r,
                            postTag: window.getMetaValue("tags", "name", null),
                            tag: window.getMetaValue("tags", "name", null),
                            topics: window.getMetaValue("topics", "name", null),
                            postLink: window.getMetaValue("postLink", "name", null),
                            link: window.getMetaValue("postLink", "name", null),
                            postTitle: Object(b.isRTLSite)() ? `\u200f${o}\u200f` : o,
                            title: Object(b.isRTLSite)() ? `\u200f${o}\u200f` : o,
                            ...a && {
                                childPostTitle: Object(b.isRTLSite)() ? `\u200f${e.title}\u200f` : e.title
                            },
                            ...c && {
                                childPostPosition: c
                            },
                            ...l && {
                                sharePosition: "Featured"
                            },
                            ...a && {
                                sharePosition: "Childpost"
                            },
                            ...a && {
                                childPostVideoEmbedded: Object(v.c)(e, i) ? "Yes" : "No"
                            },
                            postDate: window.getMetaValue("publishedDate", "name", null),
                            date: window.getMetaValue("publishedDate", "name", null),
                            postAuthor: window.getMetaValue("displayAuthors", "name", null),
                            author: window.getMetaValue("displayAuthors", "name", null),
                            videoEmbedded: window.getMetaValue("hasVideo", "name", !1) ? "Yes" : "No"
                        };
                    Object(s.e)("ShareCompleted", u)
                },
                L = e => {
                    var t, n;
                    let i = 0;
                    const r = null === e || void 0 === e || null === (t = e.target) || void 0 === t || null === (n = t.closest(".card-live")) || void 0 === n ? void 0 : n.closest("li");
                    if (r) {
                        i = Array.from(r.closest("ul").children).indexOf(r) + 1
                    }
                    return i
                },
                C = e => {
                    let {
                        article: t,
                        url: n,
                        title: i,
                        colorOverride: r,
                        parentClassName: o,
                        socialLinkClassName: a,
                        label: l,
                        isDarkMode: s,
                        hideSaveButton: d
                    } = e;
                    const p = encodeURIComponent(i),
                        b = encodeURIComponent(n),
                        v = Object(u.a)(),
                        m = Object(f.b)(h.j);
                    return Object(j.c)("div", {
                        className: o
                    }, !v && m && !d && Object(j.c)(y.a, {
                        article: t
                    }), c.a.get("SOCIAL_SERVICES").map(e => E(t, e, p, b, r, a, l, s)), v && m && !d && Object(j.c)(y.a, {
                        article: t
                    }))
                };

            function N(e, t, n, i) {
                e && e.preventDefault();
                const r = window.top.outerHeight / 2 + window.top.screenY - 142.5,
                    o = window.top.outerWidth / 2 + window.top.screenX - 275,
                    a = window.open(i ? "" : t, n, `toolbar=no, location=no, directories=no, status=no,\n\t\tmenubar=no, scrollbars=no, resizable=no, copyhistory=no,\n\t\twidth=550, height=285, top=${r}, left=${o}`);
                if ((null === a || void 0 === a ? void 0 : a.opener) && (a.opener = null), i) {
                    const e = a.document;
                    if (p.a.isMobile()) e.open(), e.write("<title>\u5206\u4eab\u5230\u5fae\u4fe1</title>"), e.write('<div style="display: flex; flex-direction: column; align-items: center; font-size: 16px; background-color: #f7f7f7;">'), e.write('<div><image src="/images/wechat.svg"/></div>'), e.write('<div style="font-size: 20px;"><p style="margin-top: 0;">\u590d\u5236\u94fe\u63a5\u5e76\u5728\u5fae\u4fe1\u4e2d\u5206\u4eab</p></div>'), e.write(`<div style="margin-bottom: 20px; width: 80%">\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tstyle="height: 35px;width: 100%;font-size: 16px;border: 1px #65d978 solid;border-radius: 3px;"\n\t\t\t\t\t\t\tid="post-url"\n\t\t\t\t\t\t\ttype="text"\n\t\t\t\t\t\t\treadonly\n\t\t\t\t\t\t\tvalue="${Object(b.safeDecodeString)(t)}"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</div>`), e.write("<div>\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\tstyle=\"background: #65d978;color: #fff;line-height: 16px;border: none;border-radius: 5px;font-size: 20px;padding: 8px 40px;\"\n\t\t\t\t\t\t\tonClick=\"document.getElementById('post-url').select(); document.execCommand('copy');\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\u590d\u5236\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>"), e.write("</div>"), e.close();
                    else {
                        e.open(), e.write("<title>\u5206\u4eab\u5230\u5fae\u4fe1</title>"), e.write('<div style="display: flex; flex-direction: column; align-items: center;">'), e.write('<div><image src="/images/wechat.svg"/></div>'), e.write('<div><canvas id="canvas" style="height: 260px; width: 260px;"></canvas></div>'), e.write("</div>"), e.close();
                        const n = e.getElementById("canvas");
                        S.load().then(e => {
                            e.toCanvas(n, Object(b.safeDecodeString)(t), {
                                errorCorrectionLevel: "Q"
                            }, e => {
                                e && console.error(e)
                            })
                        })
                    }
                }
            }
            C.defaultProps = {
                parentClassName: "social-share-buttons",
                socialLinkClassName: "social-share-button",
                isDarkMode: !1
            }, t.a = C
        },
        YcvO: function(e, t, n) {
            "use strict";
            var i = n("VBdi"),
                r = n("9mJr"),
                o = n("vUkw"),
                a = n.n(o),
                l = n("IQ5x"),
                s = n.n(l),
                c = n("MwNz"),
                u = n("N4w9"),
                d = n("QXYw"),
                p = n("Zow2"),
                f = n("xAi6"),
                h = n("8Ffx"),
                b = n("7tCN"),
                v = n("kXcp"),
                m = n("pbOP"),
                g = n("4UCj"),
                y = n("9N7U"),
                O = n("DWwR"),
                w = n("dVLG");
            var j = e => {
                var t;
                let {
                    article: n,
                    hostName: i,
                    largerImageUrl: o
                } = e;
                const a = Object(y.getAbsolutePostLink)(n, i),
                    l = Object(g.n)(n, i),
                    s = Object(g.u)(n, i, o),
                    c = Object(g.d)(n.seoTitle || n.title, a),
                    u = Object(g.c)(n);
                return Object(w.c)(r.a, null, !("episode" === n.postType || "video" === n.postType) && Object(w.c)("script", {
                    type: "application/ld+json"
                }, JSON.stringify(l)), Object(w.c)("script", {
                    type: "application/ld+json"
                }, JSON.stringify(c)), ((null === n || void 0 === n || null === (t = n.video) || void 0 === t ? void 0 : t.id) || n.featuredYoutube || S(n.content, n.postType)) && Object(w.c)("script", {
                    type: "application/ld+json"
                }, JSON.stringify(s)), "gallery" === n.postType && Object(w.c)("script", {
                    type: "application/ld+json"
                }, JSON.stringify(Object(g.k)(n, i))), n.showFAQSchema && Object(w.c)("script", {
                    type: "application/ld+json"
                }, JSON.stringify(u)))
            };
            n.d(t, "a", (function() {
                return S
            })), n.d(t, "c", (function() {
                return _
            }));
            const S = (e, t) => !(!e || ["episode", "video"].includes(t)) && (!!e.includes("<video") || (!(!e.includes("<iframe") || !Object(b.h)(e) && !Object(b.i)(e)) || !!(e.includes("<amp-youtube") || e.includes("<amp-vimeo") || e.includes("<amp-brightcove")))),
                k = e => {
                    var t;
                    const n = null === e || void 0 === e || null === (t = e.media) || void 0 === t ? void 0 : t.data;
                    if (!n) return !1;
                    const {
                        VIDEO_BC_DESKTOP: i,
                        VIDEO_DESKTOP: r,
                        VIDEO_RAW_DESKTOP: o
                    } = f.LONG_FORM_MEDIA_TYPES;
                    for (const a of n)
                        if ([i, r, o].includes(null === a || void 0 === a ? void 0 : a.type)) return !0;
                    return !1
                },
                _ = (e, t) => {
                    var n;
                    return !!e && ("longform" === e.postType ? ((e, t, n) => {
                        if (!e || 0 === e.length || "longform" !== t) return !1;
                        for (const r of e) {
                            var i;
                            if (k(r)) return !0;
                            const e = n ? null === (i = r.amp) || void 0 === i ? void 0 : i.markup : r.text;
                            if (S(e, t)) return !0
                        }
                    })(e.longform, e.postType, t) : S(t ? null === (n = e.amp) || void 0 === n ? void 0 : n.markup : e.content, e.postType))
                },
                T = e => {
                    var t;
                    let {
                        article: n,
                        hostName: o,
                        isPreview: l,
                        isAmp: f
                    } = e;
                    const S = Object(i.useContext)(u.a);
                    Object(i.useEffect)(() => () => {
                        S.currentArticle = null
                    });
                    const k = Object(h.b)(Object(y.getReplacementHeadline)(n)),
                        _ = c.a.get("seo").organization,
                        T = Object(y.getAbsolutePostLink)(n, o),
                        E = Object(y.getAbsoluteAMPPostLink)(n, o),
                        P = s()(a()(n.excerpt)).replace(/"/g, "&quot;").trim(),
                        L = Object(g.f)(n),
                        C = Object(g.t)(n),
                        N = Object(g.q)(n, o),
                        x = !!N.length && N[0].url;
                    let A = x;
                    var M;
                    Object(v.b)("content-types/post/social-img-preview") && (A = (null === (M = N[3]) || void 0 === M ? void 0 : M.cropRectangle) ? N[3].url : x);
                    const z = Object(g.p)(o),
                        I = Object(p.a)(),
                        D = Object(d.a)();
                    let R = Object(y.isAMPSite)() && !Object(y.isNotAMPContent)(n.postType) && !f;
                    return Object(m.b)() && R && (R = R && !S.isDelegatedSite), S.currentArticle = n, Object(w.c)(i.Fragment, null, Object(w.c)(r.a, null, C ? Object(w.c)("meta", {
                        name: "source",
                        content: C
                    }) : "", Object(w.c)("title", null, Object(y.getArticlePageTitle)(n.seoTitle || n.title, Object(y.getArticleSectionForTitle)(n), Object(y.isArticleFromNewsTopic)(n))), Object(w.c)("meta", {
                        name: "description",
                        content: P
                    }), Object(w.c)("link", {
                        rel: "canonical",
                        href: T
                    }), Object(w.c)("meta", {
                        name: "pageType",
                        content: "Article Page"
                    }), R && Object(w.c)("link", {
                        rel: "amphtml",
                        href: E
                    }), Object(w.c)("meta", {
                        property: "og:type",
                        name: "og:type",
                        content: "article"
                    }), Object(w.c)("meta", {
                        property: "og:url",
                        name: "og:url",
                        content: T
                    }), Object(w.c)("meta", {
                        property: "og:title",
                        name: "og:title",
                        content: k
                    }), Object(w.c)("meta", {
                        property: "og:site_name",
                        content: _
                    }), Object(w.c)("meta", {
                        property: "og:description",
                        name: "og:description",
                        content: P
                    }), n.video && "" !== n.video.id && Object(w.c)("meta", {
                        name: "Video",
                        content: "1"
                    }), n.video && "" !== (null === (t = n.video) || void 0 === t ? void 0 : t.name) && Object(w.c)("meta", {
                        name: "bcVideoTitle",
                        content: n.video.name
                    }), Object(w.c)("meta", {
                        property: "twitter:account_id",
                        content: "5536782"
                    }), Object(w.c)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), Object(w.c)("meta", {
                        name: "twitter:url",
                        content: T
                    }), Object(w.c)("meta", {
                        name: "twitter:title",
                        content: k
                    }), Object(w.c)("meta", {
                        name: "twitter:description",
                        content: P
                    }), L && Object(w.c)("meta", {
                        name: "author",
                        content: L
                    }), ((e, t) => {
                        var n, i, r, o, a, l;
                        if (!e) return null;
                        const s = t ? (null === (n = e.amp) || void 0 === n ? void 0 : n.markup) || (null === (i = e.longform) || void 0 === i || null === (r = i.map(e => {
                            var t;
                            return null === e || void 0 === e || null === (t = e.amp) || void 0 === t ? void 0 : t.markup
                        })) || void 0 === r ? void 0 : r.join("")) : e.content || (null === (o = e.longform) || void 0 === o || null === (a = o.map(e => null === e || void 0 === e ? void 0 : e.text)) || void 0 === a ? void 0 : a.join(""));
                        let c = Object(y.getDatawrapperIds)(s);
                        if ("liveblog" === e.postType) {
                            const t = Object(y.getLiveBlogUpdatesDatawrapperIds)(e);
                            t && (c = c ? t.concat(c) : t)
                        }
                        return (null === (l = c) || void 0 === l ? void 0 : l.length) ? Object(w.c)("meta", {
                            name: "dw:body",
                            content: c.join(",")
                        }) : null
                    })(n, f), z && Object(w.c)("link", {
                        rel: "alternate",
                        type: "application/rss+xml",
                        href: z
                    })), Object(w.c)(j, {
                        article: n,
                        hostName: o,
                        largerImageUrl: x
                    }), !f && Object(w.c)(O.b, {
                        path: Object(y.getPostLink)(n),
                        proxySite: Object(m.a)()
                    }), A && Object(w.c)(r.a, null, Object(w.c)("meta", {
                        property: "og:image",
                        name: "og:image",
                        content: A
                    }), Object(w.c)("meta", {
                        name: "twitter:image:src",
                        content: A
                    }), Object(w.c)("meta", {
                        name: "twitter:image:alt",
                        content: k
                    }), x && Object(w.c)("link", {
                        rel: "image_src",
                        href: x
                    })), !f && D && Object(b.a)(n.content || n.longform, I))
                };
            T.defaultProps = {
                isPreview: !1,
                isAmp: !1
            };
            t.b = T
        },
        Zow2: function(e, t, n) {
            "use strict";
            var i = n("B1Rb"),
                r = n.n(i),
                o = n("VBdi");
            t.a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 50;
                const [t, n] = Object(o.useState)(!1);
                return Object(o.useEffect)(() => {
                    const t = r()(() => {
                        window.pageYOffset > e && (window.removeEventListener("scroll", t), n(!0))
                    }, 150);
                    return window.addEventListener("scroll", t), () => {
                        window.removeEventListener("scroll", t)
                    }
                }, []), t
            }
        },
        bz2W: function(e, t, n) {
            "use strict";
            var i = n("VBdi"),
                r = n.n(i),
                o = n("9mJr"),
                a = n("MwNz"),
                l = n("N4w9"),
                s = n("nlM2"),
                c = n("pbOP"),
                u = n("4UCj"),
                d = n("9N7U"),
                p = n("DWwR"),
                f = n("dVLG");
            t.a = e => {
                var t;
                let {
                    sectionId: n,
                    title: h,
                    metaTitle: b,
                    url: v,
                    description: m,
                    imagePath: g,
                    fullImageUrl: y,
                    type: O,
                    schema: w,
                    webSiteSchema: j,
                    rssUrl: S,
                    analyticsPageTemplate: k = "",
                    noindexSearchFlag: _ = !1
                } = e;
                const T = Object(i.useContext)(l.b),
                    E = Object(l.d)(),
                    P = Object(d.getHost)(T),
                    L = decodeURI(v),
                    C = Object(s.a)(),
                    N = null === C || void 0 === C || null === (t = C.state) || void 0 === t ? void 0 : t.recirculationSource,
                    x = a.a.get("seo").organization;
                if (!L || -1 !== L.indexOf("<") || -1 !== L.indexOf(">")) return null;
                const A = g ? `${P}/${g}` : y;
                return E.pageTitle = h, Object(f.c)(r.a.Fragment, null, Object(f.c)(o.a, null, Object(f.c)("title", null, h), _ && Object(f.c)("meta", {
                    name: "robots",
                    content: "noindex, follow"
                }), Object(f.c)("meta", {
                    name: "title",
                    content: null !== b && void 0 !== b ? b : h
                }), m && Object(f.c)("meta", {
                    name: "description",
                    content: m
                }), Object(f.c)("link", {
                    rel: "canonical",
                    href: v
                }), S && Object(f.c)("link", {
                    type: "application/rss+xml",
                    rel: "alternate",
                    title: null !== b && void 0 !== b ? b : h,
                    href: S
                }), n ? Object(f.c)("meta", {
                    name: "postID",
                    content: n
                }) : "", Object(f.c)("meta", {
                    name: "pageType",
                    content: "Landing Page"
                }), N && Object(f.c)("meta", {
                    name: "recirculationSource",
                    content: N
                }), k && Object(f.c)("meta", {
                    name: "pageTemplate",
                    content: k
                }), (null === C || void 0 === C ? void 0 : C.pathname) && Object(f.c)("meta", {
                    name: "pageLink",
                    content: Object(d.safeDecodeString)(C.pathname)
                }), Object(f.c)("meta", {
                    property: "og:type",
                    content: "article"
                }), Object(f.c)("meta", {
                    property: "og:url",
                    content: v
                }), Object(f.c)("meta", {
                    property: "og:title",
                    content: null !== b && void 0 !== b ? b : h
                }), Object(f.c)("meta", {
                    property: "og:site_name",
                    content: x
                }), A && Object(f.c)("meta", {
                    property: "og:image",
                    content: A
                }), A && Object(f.c)("meta", {
                    property: "twitter:image:src",
                    content: A
                }), m && Object(f.c)("meta", {
                    name: "og:description",
                    content: m
                }), m && Object(f.c)("meta", {
                    name: "twitter:description",
                    content: m
                }), Object(f.c)("meta", {
                    name: "twitter:url",
                    content: v
                }), Object(f.c)("meta", {
                    name: "twitter:title",
                    content: null !== b && void 0 !== b ? b : h
                }), Object(f.c)("script", {
                    type: "application/ld+json"
                }, w || `\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"@context": "https://schema.org/",\n\t\t\t\t\t\t\t"@type": "WebPage",\n\t\t\t\t\t\t\t"name": "${Object(u.h)(h)}",\n\t\t\t\t\t\t\t"speakable": {\n\t\t\t\t\t\t\t\t"@type": "SpeakableSpecification",\n\t\t\t\t\t\t\t\t"cssSelector": ["${Object(u.r)(O)}"]\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t"url": "${v}"\n\t\t\t\t\t\t}\n\t\t\t\t\t`), j && Object(f.c)("script", {
                    type: "application/ld+json"
                }, j)), Object(f.c)(p.b, {
                    path: C.pathname,
                    proxySite: Object(c.a)()
                }))
            }
        },
        gkym: function(e, t, n) {},
        ijPV: function(e, t, n) {
            "use strict";
            t.a = n.p + "static/media/right-mark-icon.3a446adc.svg"
        },
        irYC: function(e, t, n) {},
        j43m: function(e, t) {
            e.exports = {
                isFunction: function(e) {
                    return "function" === typeof e
                },
                isArray: function(e) {
                    return "[object Array]" === Object.prototype.toString.apply(e)
                },
                each: function(e, t) {
                    for (var n = 0, i = e.length; n < i && !1 !== t(e[n], n); n++);
                }
            }
        },
        mQcW: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.canUseDOM = t.slidesOnLeft = t.slidesOnRight = t.siblingDirection = t.getTotalSlides = t.getPostClones = t.getPreClones = t.getTrackLeft = t.getTrackAnimateCSS = t.getTrackCSS = t.checkSpecKeys = t.getSlideCount = t.checkNavigable = t.getNavigableIndexes = t.swipeEnd = t.swipeMove = t.swipeStart = t.keyHandler = t.changeSlide = t.slideHandler = t.initializedState = t.extractObject = t.canGoNext = t.getSwipeDirection = t.getHeight = t.getWidth = t.lazySlidesOnRight = t.lazySlidesOnLeft = t.lazyEndIndex = t.lazyStartIndex = t.getRequiredLazySlides = t.getOnDemandLazySlides = void 0;
            var i = o(n("VBdi")),
                r = o(n("BqLB"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(n, !0).forEach((function(t) {
                        s(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var c = function(e) {
                for (var t = [], n = u(e), i = d(e), r = n; r < i; r++) e.lazyLoadedList.indexOf(r) < 0 && t.push(r);
                return t
            };
            t.getOnDemandLazySlides = c;
            t.getRequiredLazySlides = function(e) {
                for (var t = [], n = u(e), i = d(e), r = n; r < i; r++) t.push(r);
                return t
            };
            var u = function(e) {
                return e.currentSlide - p(e)
            };
            t.lazyStartIndex = u;
            var d = function(e) {
                return e.currentSlide + f(e)
            };
            t.lazyEndIndex = d;
            var p = function(e) {
                return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0
            };
            t.lazySlidesOnLeft = p;
            var f = function(e) {
                return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow
            };
            t.lazySlidesOnRight = f;
            var h = function(e) {
                return e && e.offsetWidth || 0
            };
            t.getWidth = h;
            var b = function(e) {
                return e && e.offsetHeight || 0
            };
            t.getHeight = b;
            var v = function(e) {
                var t, n, i, r, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return t = e.startX - e.curX, n = e.startY - e.curY, i = Math.atan2(n, t), (r = Math.round(180 * i / Math.PI)) < 0 && (r = 360 - Math.abs(r)), r <= 45 && r >= 0 || r <= 360 && r >= 315 ? "left" : r >= 135 && r <= 225 ? "right" : !0 === o ? r >= 35 && r <= 135 ? "up" : "down" : "vertical"
            };
            t.getSwipeDirection = v;
            var m = function(e) {
                var t = !0;
                return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (t = !1), t
            };
            t.canGoNext = m;
            t.extractObject = function(e, t) {
                var n = {};
                return t.forEach((function(t) {
                    return n[t] = e[t]
                })), n
            };
            t.initializedState = function(e) {
                var t, n = i.default.Children.count(e.children),
                    o = Math.ceil(h(r.default.findDOMNode(e.listRef))),
                    a = Math.ceil(h(r.default.findDOMNode(e.trackRef)));
                if (e.vertical) t = o;
                else {
                    var l = e.centerMode && 2 * parseInt(e.centerPadding);
                    "string" === typeof e.centerPadding && "%" === e.centerPadding.slice(-1) && (l *= o / 100), t = Math.ceil((o - l) / e.slidesToShow)
                }
                var s = r.default.findDOMNode(e.listRef) && b(r.default.findDOMNode(e.listRef).querySelector('[data-index="0"]')),
                    u = s * e.slidesToShow,
                    d = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
                e.rtl && void 0 === e.currentSlide && (d = n - 1 - e.initialSlide);
                var p = e.lazyLoadedList || [],
                    f = c({
                        currentSlide: d,
                        lazyLoadedList: p
                    });
                p.concat(f);
                var v = {
                    slideCount: n,
                    slideWidth: t,
                    listWidth: o,
                    trackWidth: a,
                    currentSlide: d,
                    slideHeight: s,
                    listHeight: u,
                    lazyLoadedList: p
                };
                return null === e.autoplaying && e.autoplay && (v.autoplaying = "playing"), v
            };
            t.slideHandler = function(e) {
                var t = e.waitForAnimate,
                    n = e.animating,
                    i = e.fade,
                    r = e.infinite,
                    o = e.index,
                    a = e.slideCount,
                    s = e.lazyLoadedList,
                    u = e.lazyLoad,
                    d = e.currentSlide,
                    p = e.centerMode,
                    f = e.slidesToScroll,
                    h = e.slidesToShow,
                    b = e.useCSS;
                if (t && n) return {};
                var v, g, y, O = o,
                    w = {},
                    _ = {};
                if (i) {
                    if (!r && (o < 0 || o >= a)) return {};
                    o < 0 ? O = o + a : o >= a && (O = o - a), u && s.indexOf(O) < 0 && s.push(O), w = {
                        animating: !0,
                        currentSlide: O,
                        lazyLoadedList: s
                    }, _ = {
                        animating: !1
                    }
                } else v = O, O < 0 ? (v = O + a, r ? a % f !== 0 && (v = a - a % f) : v = 0) : !m(e) && O > d ? O = v = d : p && O >= a ? (O = r ? a : a - 1, v = r ? 0 : a - 1) : O >= a && (v = O - a, r ? a % f !== 0 && (v = 0) : v = a - h), g = k(l({}, e, {
                    slideIndex: O
                })), y = k(l({}, e, {
                    slideIndex: v
                })), r || (g === y && (O = v), g = y), u && s.concat(c(l({}, e, {
                    currentSlide: O
                }))), b ? (w = {
                    animating: !0,
                    currentSlide: v,
                    trackStyle: S(l({}, e, {
                        left: g
                    })),
                    lazyLoadedList: s
                }, _ = {
                    animating: !1,
                    currentSlide: v,
                    trackStyle: j(l({}, e, {
                        left: y
                    })),
                    swipeLeft: null
                }) : w = {
                    currentSlide: v,
                    trackStyle: j(l({}, e, {
                        left: y
                    })),
                    lazyLoadedList: s
                };
                return {
                    state: w,
                    nextState: _
                }
            };
            t.changeSlide = function(e, t) {
                var n, i, r, o, a = e.slidesToScroll,
                    s = e.slidesToShow,
                    c = e.slideCount,
                    u = e.currentSlide,
                    d = e.lazyLoad,
                    p = e.infinite;
                if (n = c % a !== 0 ? 0 : (c - u) % a, "previous" === t.message) o = u - (r = 0 === n ? a : s - n), d && !p && (o = -1 === (i = u - r) ? c - 1 : i);
                else if ("next" === t.message) o = u + (r = 0 === n ? a : n), d && !p && (o = (u + a) % c + n);
                else if ("dots" === t.message) {
                    if ((o = t.index * t.slidesToScroll) === t.currentSlide) return null
                } else if ("children" === t.message) {
                    if ((o = t.index) === t.currentSlide) return null;
                    if (p) {
                        var f = P(l({}, e, {
                            targetSlide: o
                        }));
                        o > t.currentSlide && "left" === f ? o -= c : o < t.currentSlide && "right" === f && (o += c)
                    }
                } else if ("index" === t.message && (o = Number(t.index)) === t.currentSlide) return null;
                return o
            };
            t.keyHandler = function(e, t, n) {
                return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t ? "" : 37 === e.keyCode ? n ? "next" : "previous" : 39 === e.keyCode ? n ? "previous" : "next" : ""
            };
            t.swipeStart = function(e, t, n) {
                return "IMG" === e.target.tagName && e.preventDefault(), !t || !n && -1 !== e.type.indexOf("mouse") ? "" : {
                    dragging: !0,
                    touchObject: {
                        startX: e.touches ? e.touches[0].pageX : e.clientX,
                        startY: e.touches ? e.touches[0].pageY : e.clientY,
                        curX: e.touches ? e.touches[0].pageX : e.clientX,
                        curY: e.touches ? e.touches[0].pageY : e.clientY
                    }
                }
            };
            t.swipeMove = function(e, t) {
                var n = t.scrolling,
                    i = t.animating,
                    r = t.vertical,
                    o = t.swipeToSlide,
                    a = t.verticalSwiping,
                    s = t.rtl,
                    c = t.currentSlide,
                    u = t.edgeFriction,
                    d = t.edgeDragged,
                    p = t.onEdge,
                    f = t.swiped,
                    h = t.swiping,
                    b = t.slideCount,
                    g = t.slidesToScroll,
                    y = t.infinite,
                    O = t.touchObject,
                    w = t.swipeEvent,
                    S = t.listHeight,
                    _ = t.listWidth;
                if (!n) {
                    if (i) return e.preventDefault();
                    r && o && a && e.preventDefault();
                    var T, E = {},
                        P = k(t);
                    O.curX = e.touches ? e.touches[0].pageX : e.clientX, O.curY = e.touches ? e.touches[0].pageY : e.clientY, O.swipeLength = Math.round(Math.sqrt(Math.pow(O.curX - O.startX, 2)));
                    var L = Math.round(Math.sqrt(Math.pow(O.curY - O.startY, 2)));
                    if (!a && !h && L > 10) return {
                        scrolling: !0
                    };
                    a && (O.swipeLength = L);
                    var C = (s ? -1 : 1) * (O.curX > O.startX ? 1 : -1);
                    a && (C = O.curY > O.startY ? 1 : -1);
                    var N = Math.ceil(b / g),
                        x = v(t.touchObject, a),
                        A = O.swipeLength;
                    return y || (0 === c && "right" === x || c + 1 >= N && "left" === x || !m(t) && "left" === x) && (A = O.swipeLength * u, !1 === d && p && (p(x), E.edgeDragged = !0)), !f && w && (w(x), E.swiped = !0), T = r ? P + A * (S / _) * C : s ? P - A * C : P + A * C, a && (T = P + A * C), E = l({}, E, {
                        touchObject: O,
                        swipeLeft: T,
                        trackStyle: j(l({}, t, {
                            left: T
                        }))
                    }), Math.abs(O.curX - O.startX) < .8 * Math.abs(O.curY - O.startY) ? E : (O.swipeLength > 10 && (E.swiping = !0, e.preventDefault()), E)
                }
            };
            t.swipeEnd = function(e, t) {
                var n = t.dragging,
                    i = t.swipe,
                    r = t.touchObject,
                    o = t.listWidth,
                    a = t.touchThreshold,
                    s = t.verticalSwiping,
                    c = t.listHeight,
                    u = t.currentSlide,
                    d = t.swipeToSlide,
                    p = t.scrolling,
                    f = t.onSwipe;
                if (!n) return i && e.preventDefault(), {};
                var h = s ? c / a : o / a,
                    b = v(r, s),
                    m = {
                        dragging: !1,
                        edgeDragged: !1,
                        scrolling: !1,
                        swiping: !1,
                        swiped: !1,
                        swipeLeft: null,
                        touchObject: {}
                    };
                if (p) return m;
                if (!r.swipeLength) return m;
                if (r.swipeLength > h) {
                    var g, w;
                    switch (e.preventDefault(), f && f(b), b) {
                        case "left":
                        case "up":
                            w = u + O(t), g = d ? y(t, w) : w, m.currentDirection = 0;
                            break;
                        case "right":
                        case "down":
                            w = u - O(t), g = d ? y(t, w) : w, m.currentDirection = 1;
                            break;
                        default:
                            g = u
                    }
                    m.triggerSlideHandler = g
                } else {
                    var j = k(t);
                    m.trackStyle = S(l({}, t, {
                        left: j
                    }))
                }
                return m
            };
            var g = function(e) {
                for (var t = e.infinite ? 2 * e.slideCount : e.slideCount, n = e.infinite ? -1 * e.slidesToShow : 0, i = e.infinite ? -1 * e.slidesToShow : 0, r = []; n < t;) r.push(n), n = i + e.slidesToScroll, i += Math.min(e.slidesToScroll, e.slidesToShow);
                return r
            };
            t.getNavigableIndexes = g;
            var y = function(e, t) {
                var n = g(e),
                    i = 0;
                if (t > n[n.length - 1]) t = n[n.length - 1];
                else
                    for (var r in n) {
                        if (t < n[r]) {
                            t = i;
                            break
                        }
                        i = n[r]
                    }
                return t
            };
            t.checkNavigable = y;
            var O = function(e) {
                var t = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
                if (e.swipeToSlide) {
                    var n, i = r.default.findDOMNode(e.listRef).querySelectorAll(".slick-slide");
                    if (Array.from(i).every((function(i) {
                            if (e.vertical) {
                                if (i.offsetTop + b(i) / 2 > -1 * e.swipeLeft) return n = i, !1
                            } else if (i.offsetLeft - t + h(i) / 2 > -1 * e.swipeLeft) return n = i, !1;
                            return !0
                        })), !n) return 0;
                    var o = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
                    return Math.abs(n.dataset.index - o) || 1
                }
                return e.slidesToScroll
            };
            t.getSlideCount = O;
            var w = function(e, t) {
                return t.reduce((function(t, n) {
                    return t && e.hasOwnProperty(n)
                }), !0) ? null : console.error("Keys Missing:", e)
            };
            t.checkSpecKeys = w;
            var j = function(e) {
                var t, n;
                w(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
                var i = e.slideCount + 2 * e.slidesToShow;
                e.vertical ? n = i * e.slideHeight : t = E(e) * e.slideWidth;
                var r = {
                    opacity: 1,
                    transition: "",
                    WebkitTransition: ""
                };
                e.useTransform ? r = l({}, r, {
                    WebkitTransform: e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                    transform: e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                    msTransform: e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)"
                }) : e.vertical ? r.top = e.left : r.left = e.left;
                return e.fade && (r = {
                    opacity: 1
                }), t && (r.width = t), n && (r.height = n), window && !window.addEventListener && window.attachEvent && (e.vertical ? r.marginTop = e.left + "px" : r.marginLeft = e.left + "px"), r
            };
            t.getTrackCSS = j;
            var S = function(e) {
                w(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
                var t = j(e);
                return e.useTransform ? (t.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, t.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? t.transition = "top " + e.speed + "ms " + e.cssEase : t.transition = "left " + e.speed + "ms " + e.cssEase, t
            };
            t.getTrackAnimateCSS = S;
            var k = function(e) {
                if (e.unslick) return 0;
                w(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
                var t, n, i = e.slideIndex,
                    o = e.trackRef,
                    a = e.infinite,
                    l = e.centerMode,
                    s = e.slideCount,
                    c = e.slidesToShow,
                    u = e.slidesToScroll,
                    d = e.slideWidth,
                    p = e.listWidth,
                    f = e.variableWidth,
                    h = e.slideHeight,
                    b = e.fade,
                    v = e.vertical;
                if (b || 1 === e.slideCount) return 0;
                var m = 0;
                if (a ? (m = -_(e), s % u !== 0 && i + u > s && (m = -(i > s ? c - (i - s) : s % u)), l && (m += parseInt(c / 2))) : (s % u !== 0 && i + u > s && (m = c - s % u), l && (m = parseInt(c / 2))), t = v ? i * h * -1 + m * h : i * d * -1 + m * d, !0 === f) {
                    var g, y = r.default.findDOMNode(o);
                    if (g = i + _(e), t = (n = y && y.childNodes[g]) ? -1 * n.offsetLeft : 0, !0 === l) {
                        g = a ? i + _(e) : i, n = y && y.children[g], t = 0;
                        for (var O = 0; O < g; O++) t -= y && y.children[O] && y.children[O].offsetWidth;
                        t -= parseInt(e.centerPadding), t += n && (p - n.offsetWidth) / 2
                    }
                }
                return t
            };
            t.getTrackLeft = k;
            var _ = function(e) {
                return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0)
            };
            t.getPreClones = _;
            var T = function(e) {
                return e.unslick || !e.infinite ? 0 : e.slideCount
            };
            t.getPostClones = T;
            var E = function(e) {
                return 1 === e.slideCount ? 1 : _(e) + e.slideCount + T(e)
            };
            t.getTotalSlides = E;
            var P = function(e) {
                return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + L(e) ? "left" : "right" : e.targetSlide < e.currentSlide - C(e) ? "right" : "left"
            };
            t.siblingDirection = P;
            var L = function(e) {
                var t = e.slidesToShow,
                    n = e.centerMode,
                    i = e.rtl,
                    r = e.centerPadding;
                if (n) {
                    var o = (t - 1) / 2 + 1;
                    return parseInt(r) > 0 && (o += 1), i && t % 2 === 0 && (o += 1), o
                }
                return i ? 0 : t - 1
            };
            t.slidesOnRight = L;
            var C = function(e) {
                var t = e.slidesToShow,
                    n = e.centerMode,
                    i = e.rtl,
                    r = e.centerPadding;
                if (n) {
                    var o = (t - 1) / 2 + 1;
                    return parseInt(r) > 0 && (o += 1), i || t % 2 !== 0 || (o += 1), o
                }
                return i ? t - 1 : 0
            };
            t.slidesOnLeft = C;
            t.canUseDOM = function() {
                return !("undefined" === typeof window || !window.document || !window.document.createElement)
            }
        },
        oHSs: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return f
                }));
                var i = n("VBdi"),
                    r = n("xAi6"),
                    o = n("kXcp"),
                    a = n("D9ji"),
                    l = n("4j0K");
                const s = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (Array.isArray(e))
                            for (const n in t.taxonomies) {
                                if (e.some(e => t.taxonomies[n].includes(e))) return !0
                            }
                        return !1
                    },
                    c = (e, t) => function() {
                        var n;
                        let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (!Object(o.b)("newsletter") || !e) return !1;
                        const a = [];
                        for (const o of e)
                            if (!t(o.slug, o.listId)) {
                                if (s(i, o)) return o;
                                r && a.push(o)
                            }
                        return null !== (n = a[0]) && void 0 !== n && n
                    },
                    u = (e, t) => n => {
                        let i = [];
                        return "object" === typeof n && (r.NEWSLETTER_TAXONOMIES.forEach(e => {
                            n[e] && Array.isArray(n[e]) && (i = i.concat(n[e].map(e => e.slug)))
                        }), c(e, t)(i))
                    },
                    d = (e, t) => n => {
                        if (!Object(o.b)("newsletter") || !e) return !1;
                        const i = e.find(e => !t(e.slug, e.listId));
                        var r;
                        return !i && n ? null !== (r = e[0]) && void 0 !== r && r : null !== i && void 0 !== i && i
                    },
                    p = e => t => {
                        if (!t || !e) return !1;
                        const n = e.find(e => e.slug === t);
                        return null !== n && void 0 !== n && n
                    },
                    f = () => {
                        var t, n, r, o;
                        const {
                            user: f,
                            userInfo: h,
                            isAuthInitialized: b
                        } = Object(l.a)(), v = b && (null === f || void 0 === f ? void 0 : f.emailVerified) ? null === (t = e) || void 0 === t ? void 0 : t.newsletters : null === (n = e) || void 0 === n || null === (r = n.newsletters) || void 0 === r ? void 0 : r.filter(e => !e.isRegisteredUsersOnly), m = Object(i.useCallback)((t, n) => {
                            var i, r, o;
                            const l = Object(a.f)("newsletterSubscription") || [];
                            return !!((null === h || void 0 === h || null === (i = h.user) || void 0 === i || null === (r = i.newsletterDetails) || void 0 === r ? void 0 : r.listIds) && n && h.user.newsletterDetails.listIds.includes(n)) || ((null === (o = e) || void 0 === o ? void 0 : o.userSubscribedNewsletters) && n ? e.userSubscribedNewsletters.includes(n) : l.includes(t))
                        }, [null === h || void 0 === h || null === (o = h.user) || void 0 === o ? void 0 : o.newsletterDetails]), g = Object(i.useCallback)(e => e(v, m), [v, m]), y = Object(i.useMemo)(() => g(c), [g]), O = Object(i.useMemo)(() => g(u), [g]), w = Object(i.useMemo)(() => g(d), [g]), j = Object(i.useMemo)(() => g(p), [g]);
                        return {
                            isNewsletterSubscribed: m,
                            getNextNewsletter: y,
                            getNextNewsletterFromProps: O,
                            getNextNewsletterFromGlobalOrder: w,
                            getNewsletterBySlug: j,
                            isNewsletterRelevant: s
                        }
                    }
            }).call(this, n("Uwcf"))
        },
        pFwd: function(e, t, n) {
            "use strict";
            var i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = ((i = n("4WfJ")) && i.__esModule ? i : {
                default: i
            }).default;
            t.default = r
        },
        qwrs: function(e, t, n) {},
        "r+ZP": function(e, t, n) {
            var i = n("YNiD"),
                r = function(e) {
                    var t = "",
                        n = Object.keys(e);
                    return n.forEach((function(r, o) {
                        var a = e[r];
                        (function(e) {
                            return /[height|width]$/.test(e)
                        })(r = i(r)) && "number" === typeof a && (a += "px"), t += !0 === a ? r : !1 === a ? "not " + r : "(" + r + ": " + a + ")", o < n.length - 1 && (t += " and ")
                    })), t
                };
            e.exports = function(e) {
                var t = "";
                return "string" === typeof e ? e : e instanceof Array ? (e.forEach((function(n, i) {
                    t += r(n), i < e.length - 1 && (t += ", ")
                })), t) : r(e)
            }
        },
        r9G8: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InnerSlider = void 0;
            var i = f(n("VBdi")),
                r = f(n("BqLB")),
                o = f(n("+zzP")),
                a = f(n("sPcX")),
                l = f(n("AAFT")),
                s = n("mQcW"),
                c = n("6zEj"),
                u = n("Nsd4"),
                d = n("6hcU"),
                p = f(n("GECe"));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function h() {
                return (h = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function b(e, t) {
                if (null == e) return {};
                var n, i, r = function(e, t) {
                    if (null == e) return {};
                    var n, i, r = {},
                        o = Object.keys(e);
                    for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }

            function v(e) {
                return (v = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(n, !0).forEach((function(t) {
                        j(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function y(e) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function O(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function w(e, t) {
                return (w = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function j(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var S = function(e) {
                function t(e) {
                    var n;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), n = function(e, t) {
                        return !t || "object" !== v(t) && "function" !== typeof t ? O(e) : t
                    }(this, y(t).call(this, e)), j(O(n), "listRefHandler", (function(e) {
                        return n.list = e
                    })), j(O(n), "trackRefHandler", (function(e) {
                        return n.track = e
                    })), j(O(n), "adaptHeight", (function() {
                        if (n.props.adaptiveHeight && n.list) {
                            var e = n.list.querySelector('[data-index="'.concat(n.state.currentSlide, '"]'));
                            n.list.style.height = (0, s.getHeight)(e) + "px"
                        }
                    })), j(O(n), "UNSAFE_componentWillMount", (function() {
                        if (n.ssrInit(), n.props.onInit && n.props.onInit(), n.props.lazyLoad) {
                            var e = (0, s.getOnDemandLazySlides)(g({}, n.props, {}, n.state));
                            e.length > 0 && (n.setState((function(t) {
                                return {
                                    lazyLoadedList: t.lazyLoadedList.concat(e)
                                }
                            })), n.props.onLazyLoad && n.props.onLazyLoad(e))
                        }
                    })), j(O(n), "componentDidMount", (function() {
                        var e = g({
                            listRef: n.list,
                            trackRef: n.track
                        }, n.props);
                        n.updateState(e, !0, (function() {
                            n.adaptHeight(), n.props.autoplay && n.autoPlay("update")
                        })), "progressive" === n.props.lazyLoad && (n.lazyLoadTimer = setInterval(n.progressiveLazyLoad, 1e3)), n.ro = new p.default((function() {
                            n.state.animating ? (n.onWindowResized(!1), n.callbackTimers.push(setTimeout((function() {
                                return n.onWindowResized()
                            }), n.props.speed))) : n.onWindowResized()
                        })), n.ro.observe(n.list), Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), (function(e) {
                            e.onfocus = n.props.pauseOnFocus ? n.onSlideFocus : null, e.onblur = n.props.pauseOnFocus ? n.onSlideBlur : null
                        })), window && (window.addEventListener ? window.addEventListener("resize", n.onWindowResized) : window.attachEvent("onresize", n.onWindowResized))
                    })), j(O(n), "componentWillUnmount", (function() {
                        n.animationEndCallback && clearTimeout(n.animationEndCallback), n.lazyLoadTimer && clearInterval(n.lazyLoadTimer), n.callbackTimers.length && (n.callbackTimers.forEach((function(e) {
                            return clearTimeout(e)
                        })), n.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", n.onWindowResized) : window.detachEvent("onresize", n.onWindowResized), n.autoplayTimer && clearInterval(n.autoplayTimer)
                    })), j(O(n), "UNSAFE_componentWillReceiveProps", (function(e) {
                        for (var t = g({
                                listRef: n.list,
                                trackRef: n.track
                            }, e, {}, n.state), r = !1, o = 0, a = Object.keys(n.props); o < a.length; o++) {
                            var l = a[o];
                            if (!e.hasOwnProperty(l)) {
                                r = !0;
                                break
                            }
                            if ("object" !== v(e[l]) && "function" !== typeof e[l] && e[l] !== n.props[l]) {
                                r = !0;
                                break
                            }
                        }
                        n.updateState(t, r, (function() {
                            n.state.currentSlide >= i.default.Children.count(e.children) && n.changeSlide({
                                message: "index",
                                index: i.default.Children.count(e.children) - e.slidesToShow,
                                currentSlide: n.state.currentSlide
                            }), e.autoplay ? n.autoPlay("update") : n.pause("paused")
                        }))
                    })), j(O(n), "componentDidUpdate", (function() {
                        if (n.checkImagesLoad(), n.props.onReInit && n.props.onReInit(), n.props.lazyLoad) {
                            var e = (0, s.getOnDemandLazySlides)(g({}, n.props, {}, n.state));
                            e.length > 0 && (n.setState((function(t) {
                                return {
                                    lazyLoadedList: t.lazyLoadedList.concat(e)
                                }
                            })), n.props.onLazyLoad && n.props.onLazyLoad(e))
                        }
                        n.adaptHeight()
                    })), j(O(n), "onWindowResized", (function(e) {
                        n.debouncedResize && n.debouncedResize.cancel(), n.debouncedResize = (0, a.default)((function() {
                            return n.resizeWindow(e)
                        }), 50), n.debouncedResize()
                    })), j(O(n), "resizeWindow", (function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (r.default.findDOMNode(n.track)) {
                            var t = g({
                                listRef: n.list,
                                trackRef: n.track
                            }, n.props, {}, n.state);
                            n.updateState(t, e, (function() {
                                n.props.autoplay ? n.autoPlay("update") : n.pause("paused")
                            })), n.setState({
                                animating: !1
                            }), clearTimeout(n.animationEndCallback), delete n.animationEndCallback
                        }
                    })), j(O(n), "updateState", (function(e, t, r) {
                        var o = (0, s.initializedState)(e);
                        e = g({}, e, {}, o, {
                            slideIndex: o.currentSlide
                        }), e = g({}, e, {
                            left: (0, s.getTrackLeft)(e)
                        });
                        var a = (0, s.getTrackCSS)(e);
                        (t || i.default.Children.count(n.props.children) !== i.default.Children.count(e.children)) && (o.trackStyle = a), n.setState(o, r)
                    })), j(O(n), "ssrInit", (function() {
                        if (n.props.variableWidth) {
                            var e = 0,
                                t = 0,
                                r = [],
                                o = (0, s.getPreClones)(g({}, n.props, {}, n.state, {
                                    slideCount: n.props.children.length
                                })),
                                a = (0, s.getPostClones)(g({}, n.props, {}, n.state, {
                                    slideCount: n.props.children.length
                                }));
                            n.props.children.forEach((function(t) {
                                r.push(t.props.style.width), e += t.props.style.width
                            }));
                            for (var l = 0; l < o; l++) t += r[r.length - 1 - l], e += r[r.length - 1 - l];
                            for (var c = 0; c < a; c++) e += r[c];
                            for (var u = 0; u < n.state.currentSlide; u++) t += r[u];
                            var d = {
                                width: e + "px",
                                left: -t + "px"
                            };
                            if (n.props.centerMode) {
                                var p = "".concat(r[n.state.currentSlide], "px");
                                d.left = "calc(".concat(d.left, " + (100% - ").concat(p, ") / 2 ) ")
                            }
                            n.setState({
                                trackStyle: d
                            })
                        } else {
                            var f = i.default.Children.count(n.props.children),
                                h = g({}, n.props, {}, n.state, {
                                    slideCount: f
                                }),
                                b = (0, s.getPreClones)(h) + (0, s.getPostClones)(h) + f,
                                v = 100 / n.props.slidesToShow * b,
                                m = 100 / b,
                                y = -m * ((0, s.getPreClones)(h) + n.state.currentSlide) * v / 100;
                            n.props.centerMode && (y += (100 - m * v / 100) / 2);
                            var O = {
                                width: v + "%",
                                left: y + "%"
                            };
                            n.setState({
                                slideWidth: m + "%",
                                trackStyle: O
                            })
                        }
                    })), j(O(n), "checkImagesLoad", (function() {
                        var e = document.querySelectorAll(".slick-slide img"),
                            t = e.length,
                            i = 0;
                        Array.prototype.forEach.call(e, (function(e) {
                            var r = function() {
                                return ++i && i >= t && n.onWindowResized()
                            };
                            if (e.onclick) {
                                var o = e.onclick;
                                e.onclick = function() {
                                    o(), e.parentNode.focus()
                                }
                            } else e.onclick = function() {
                                return e.parentNode.focus()
                            };
                            e.onload || (n.props.lazyLoad ? e.onload = function() {
                                n.adaptHeight(), n.callbackTimers.push(setTimeout(n.onWindowResized, n.props.speed))
                            } : (e.onload = r, e.onerror = function() {
                                r(), n.props.onLazyLoadError && n.props.onLazyLoadError()
                            }))
                        }))
                    })), j(O(n), "progressiveLazyLoad", (function() {
                        for (var e = [], t = g({}, n.props, {}, n.state), i = n.state.currentSlide; i < n.state.slideCount + (0, s.getPostClones)(t); i++)
                            if (n.state.lazyLoadedList.indexOf(i) < 0) {
                                e.push(i);
                                break
                            }
                        for (var r = n.state.currentSlide - 1; r >= -(0, s.getPreClones)(t); r--)
                            if (n.state.lazyLoadedList.indexOf(r) < 0) {
                                e.push(r);
                                break
                            }
                        e.length > 0 ? (n.setState((function(t) {
                            return {
                                lazyLoadedList: t.lazyLoadedList.concat(e)
                            }
                        })), n.props.onLazyLoad && n.props.onLazyLoad(e)) : n.lazyLoadTimer && (clearInterval(n.lazyLoadTimer), delete n.lazyLoadTimer)
                    })), j(O(n), "slideHandler", (function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = n.props,
                            r = i.asNavFor,
                            o = i.beforeChange,
                            a = i.onLazyLoad,
                            l = i.speed,
                            c = i.afterChange,
                            u = n.state.currentSlide,
                            d = (0, s.slideHandler)(g({
                                index: e
                            }, n.props, {}, n.state, {
                                trackRef: n.track,
                                useCSS: n.props.useCSS && !t
                            })),
                            p = d.state,
                            f = d.nextState;
                        if (p) {
                            o && o(u, p.currentSlide);
                            var h = p.lazyLoadedList.filter((function(e) {
                                return n.state.lazyLoadedList.indexOf(e) < 0
                            }));
                            a && h.length > 0 && a(h), n.setState(p, (function() {
                                r && r.innerSlider.slideHandler(e), f && (n.animationEndCallback = setTimeout((function() {
                                    var e = f.animating,
                                        t = b(f, ["animating"]);
                                    n.setState(t, (function() {
                                        n.callbackTimers.push(setTimeout((function() {
                                            return n.setState({
                                                animating: e
                                            })
                                        }), 10)), c && c(p.currentSlide), delete n.animationEndCallback
                                    }))
                                }), l))
                            }))
                        }
                    })), j(O(n), "changeSlide", (function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = g({}, n.props, {}, n.state),
                            r = (0, s.changeSlide)(i, e);
                        (0 === r || r) && (!0 === t ? n.slideHandler(r, t) : n.slideHandler(r))
                    })), j(O(n), "clickHandler", (function(e) {
                        !1 === n.clickable && (e.stopPropagation(), e.preventDefault()), n.clickable = !0
                    })), j(O(n), "keyHandler", (function(e) {
                        var t = (0, s.keyHandler)(e, n.props.accessibility, n.props.rtl);
                        "" !== t && n.changeSlide({
                            message: t
                        })
                    })), j(O(n), "selectHandler", (function(e) {
                        n.changeSlide(e)
                    })), j(O(n), "disableBodyScroll", (function() {
                        window.ontouchmove = function(e) {
                            (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
                        }
                    })), j(O(n), "enableBodyScroll", (function() {
                        window.ontouchmove = null
                    })), j(O(n), "swipeStart", (function(e) {
                        n.props.verticalSwiping && n.disableBodyScroll();
                        var t = (0, s.swipeStart)(e, n.props.swipe, n.props.draggable);
                        "" !== t && n.setState(t)
                    })), j(O(n), "swipeMove", (function(e) {
                        var t = (0, s.swipeMove)(e, g({}, n.props, {}, n.state, {
                            trackRef: n.track,
                            listRef: n.list,
                            slideIndex: n.state.currentSlide
                        }));
                        t && (t.swiping && (n.clickable = !1), n.setState(t))
                    })), j(O(n), "swipeEnd", (function(e) {
                        var t = (0, s.swipeEnd)(e, g({}, n.props, {}, n.state, {
                            trackRef: n.track,
                            listRef: n.list,
                            slideIndex: n.state.currentSlide
                        }));
                        if (t) {
                            var i = t.triggerSlideHandler;
                            delete t.triggerSlideHandler, n.setState(t), void 0 !== i && (n.slideHandler(i), n.props.verticalSwiping && n.enableBodyScroll())
                        }
                    })), j(O(n), "slickPrev", (function() {
                        n.callbackTimers.push(setTimeout((function() {
                            return n.changeSlide({
                                message: "previous"
                            })
                        }), 0))
                    })), j(O(n), "slickNext", (function() {
                        n.callbackTimers.push(setTimeout((function() {
                            return n.changeSlide({
                                message: "next"
                            })
                        }), 0))
                    })), j(O(n), "slickGoTo", (function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (e = Number(e), isNaN(e)) return "";
                        n.callbackTimers.push(setTimeout((function() {
                            return n.changeSlide({
                                message: "index",
                                index: e,
                                currentSlide: n.state.currentSlide
                            }, t)
                        }), 0))
                    })), j(O(n), "play", (function() {
                        var e;
                        if (n.props.rtl) e = n.state.currentSlide - n.props.slidesToScroll;
                        else {
                            if (!(0, s.canGoNext)(g({}, n.props, {}, n.state))) return !1;
                            e = n.state.currentSlide + n.props.slidesToScroll
                        }
                        n.slideHandler(e)
                    })), j(O(n), "autoPlay", (function(e) {
                        n.autoplayTimer && clearInterval(n.autoplayTimer);
                        var t = n.state.autoplaying;
                        if ("update" === e) {
                            if ("hovered" === t || "focused" === t || "paused" === t) return
                        } else if ("leave" === e) {
                            if ("paused" === t || "focused" === t) return
                        } else if ("blur" === e && ("paused" === t || "hovered" === t)) return;
                        n.autoplayTimer = setInterval(n.play, n.props.autoplaySpeed + 50), n.setState({
                            autoplaying: "playing"
                        })
                    })), j(O(n), "pause", (function(e) {
                        n.autoplayTimer && (clearInterval(n.autoplayTimer), n.autoplayTimer = null);
                        var t = n.state.autoplaying;
                        "paused" === e ? n.setState({
                            autoplaying: "paused"
                        }) : "focused" === e ? "hovered" !== t && "playing" !== t || n.setState({
                            autoplaying: "focused"
                        }) : "playing" === t && n.setState({
                            autoplaying: "hovered"
                        })
                    })), j(O(n), "onDotsOver", (function() {
                        return n.props.autoplay && n.pause("hovered")
                    })), j(O(n), "onDotsLeave", (function() {
                        return n.props.autoplay && "hovered" === n.state.autoplaying && n.autoPlay("leave")
                    })), j(O(n), "onTrackOver", (function() {
                        return n.props.autoplay && n.pause("hovered")
                    })), j(O(n), "onTrackLeave", (function() {
                        return n.props.autoplay && "hovered" === n.state.autoplaying && n.autoPlay("leave")
                    })), j(O(n), "onSlideFocus", (function() {
                        return n.props.autoplay && n.pause("focused")
                    })), j(O(n), "onSlideBlur", (function() {
                        return n.props.autoplay && "focused" === n.state.autoplaying && n.autoPlay("blur")
                    })), j(O(n), "render", (function() {
                        var e, t, r, o = (0, l.default)("slick-slider", n.props.className, {
                                "slick-vertical": n.props.vertical,
                                "slick-initialized": !0
                            }),
                            a = g({}, n.props, {}, n.state),
                            p = (0, s.extractObject)(a, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding"]),
                            f = n.props.pauseOnHover;
                        if (p = g({}, p, {
                                onMouseEnter: f ? n.onTrackOver : null,
                                onMouseLeave: f ? n.onTrackLeave : null,
                                onMouseOver: f ? n.onTrackOver : null,
                                focusOnSelect: n.props.focusOnSelect ? n.selectHandler : null
                            }), !0 === n.props.dots && n.state.slideCount >= n.props.slidesToShow) {
                            var b = (0, s.extractObject)(a, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]),
                                v = n.props.pauseOnDotsHover;
                            b = g({}, b, {
                                clickHandler: n.changeSlide,
                                onMouseEnter: v ? n.onDotsLeave : null,
                                onMouseOver: v ? n.onDotsOver : null,
                                onMouseLeave: v ? n.onDotsLeave : null
                            }), e = i.default.createElement(u.Dots, b)
                        }
                        var m = (0, s.extractObject)(a, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
                        m.clickHandler = n.changeSlide, n.props.arrows && (t = i.default.createElement(d.PrevArrow, m), r = i.default.createElement(d.NextArrow, m));
                        var y = null;
                        n.props.vertical && (y = {
                            height: n.state.listHeight
                        });
                        var O = null;
                        !1 === n.props.vertical ? !0 === n.props.centerMode && (O = {
                            padding: "0px " + n.props.centerPadding
                        }) : !0 === n.props.centerMode && (O = {
                            padding: n.props.centerPadding + " 0px"
                        });
                        var w = g({}, y, {}, O),
                            j = n.props.touchMove,
                            S = {
                                className: "slick-list",
                                style: w,
                                onClick: n.clickHandler,
                                onMouseDown: j ? n.swipeStart : null,
                                onMouseMove: n.state.dragging && j ? n.swipeMove : null,
                                onMouseUp: j ? n.swipeEnd : null,
                                onMouseLeave: n.state.dragging && j ? n.swipeEnd : null,
                                onTouchStart: j ? n.swipeStart : null,
                                onTouchMove: n.state.dragging && j ? n.swipeMove : null,
                                onTouchEnd: j ? n.swipeEnd : null,
                                onTouchCancel: n.state.dragging && j ? n.swipeEnd : null,
                                onKeyDown: n.props.accessibility ? n.keyHandler : null
                            },
                            k = {
                                className: o,
                                dir: "ltr",
                                style: n.props.style
                            };
                        return n.props.unslick && (S = {
                            className: "slick-list"
                        }, k = {
                            className: o
                        }), i.default.createElement("div", k, n.props.unslick ? "" : t, i.default.createElement("div", h({
                            ref: n.listRefHandler
                        }, S), i.default.createElement(c.Track, h({
                            ref: n.trackRefHandler
                        }, p), n.props.children)), n.props.unslick ? "" : r, n.props.unslick ? "" : e)
                    })), n.list = null, n.track = null, n.state = g({}, o.default, {
                        currentSlide: n.props.initialSlide,
                        slideCount: i.default.Children.count(n.props.children)
                    }), n.callbackTimers = [], n.clickable = !0, n.debouncedResize = null, n
                }
                return function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && w(e, t)
                }(t, e), t
            }(i.default.Component);
            t.InnerSlider = S
        },
        sPcX: function(e, t, n) {
            (function(t) {
                var n = /^\s+|\s+$/g,
                    i = /^[-+]0x[0-9a-f]+$/i,
                    r = /^0b[01]+$/i,
                    o = /^0o[0-7]+$/i,
                    a = parseInt,
                    l = "object" == typeof t && t && t.Object === Object && t,
                    s = "object" == typeof self && self && self.Object === Object && self,
                    c = l || s || Function("return this")(),
                    u = Object.prototype.toString,
                    d = Math.max,
                    p = Math.min,
                    f = function() {
                        return c.Date.now()
                    };

                function h(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function b(e) {
                    if ("number" == typeof e) return e;
                    if (function(e) {
                            return "symbol" == typeof e || function(e) {
                                return !!e && "object" == typeof e
                            }(e) && "[object Symbol]" == u.call(e)
                        }(e)) return NaN;
                    if (h(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = h(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(n, "");
                    var l = r.test(e);
                    return l || o.test(e) ? a(e.slice(2), l ? 2 : 8) : i.test(e) ? NaN : +e
                }
                e.exports = function(e, t, n) {
                    var i, r, o, a, l, s, c = 0,
                        u = !1,
                        v = !1,
                        m = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");

                    function g(t) {
                        var n = i,
                            o = r;
                        return i = r = void 0, c = t, a = e.apply(o, n)
                    }

                    function y(e) {
                        return c = e, l = setTimeout(w, t), u ? g(e) : a
                    }

                    function O(e) {
                        var n = e - s;
                        return void 0 === s || n >= t || n < 0 || v && e - c >= o
                    }

                    function w() {
                        var e = f();
                        if (O(e)) return j(e);
                        l = setTimeout(w, function(e) {
                            var n = t - (e - s);
                            return v ? p(n, o - (e - c)) : n
                        }(e))
                    }

                    function j(e) {
                        return l = void 0, m && i ? g(e) : (i = r = void 0, a)
                    }

                    function S() {
                        var e = f(),
                            n = O(e);
                        if (i = arguments, r = this, s = e, n) {
                            if (void 0 === l) return y(s);
                            if (v) return l = setTimeout(w, t), g(s)
                        }
                        return void 0 === l && (l = setTimeout(w, t)), a
                    }
                    return t = b(t) || 0, h(n) && (u = !!n.leading, o = (v = "maxWait" in n) ? d(b(n.maxWait) || 0, t) : o, m = "trailing" in n ? !!n.trailing : m), S.cancel = function() {
                        void 0 !== l && clearTimeout(l), c = 0, i = s = r = l = void 0
                    }, S.flush = function() {
                        return void 0 === l ? a : j(f())
                    }, S
                }
            }).call(this, n("Uwcf"))
        },
        "sX/T": function(e, t, n) {},
        tGtO: function(e, t) {
            function n(e) {
                this.options = e, !e.deferSetup && this.setup()
            }
            n.prototype = {
                constructor: n,
                setup: function() {
                    this.options.setup && this.options.setup(), this.initialised = !0
                },
                on: function() {
                    !this.initialised && this.setup(), this.options.match && this.options.match()
                },
                off: function() {
                    this.options.unmatch && this.options.unmatch()
                },
                destroy: function() {
                    this.options.destroy ? this.options.destroy() : this.off()
                },
                equals: function(e) {
                    return this.options === e || this.options.match === e
                }
            }, e.exports = n
        },
        uGYC: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "subscribeNewsletter"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "contact"
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
                                value: "listIds"
                            }
                        },
                        type: {
                            kind: "NonNullType",
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
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "templateId"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
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
                                value: "newsletterName"
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
                                value: "isMultipleNewsletterSignup"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
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
                                value: "subscribeNewsletter"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "contact"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "contact"
                                    }
                                }
                            }, {
                                kind: "Argument",
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
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "templateId"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "templateId"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "newsletterName"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "newsletterName"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "isMultipleNewsletterSignup"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "isMultipleNewsletterSignup"
                                    }
                                }
                            }],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 339
                }
            };
            var i = {};

            function r(e, t) {
                for (var n = 0; n < e.definitions.length; n++) {
                    var i = e.definitions[n];
                    if (i.name && i.name.value == t) return i
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    ! function e(t, n) {
                        if ("FragmentSpread" === t.kind) n.add(t.name.value);
                        else if ("VariableDefinition" === t.kind) {
                            var i = t.type;
                            "NamedType" === i.kind && n.add(i.name.value)
                        }
                        t.selectionSet && t.selectionSet.selections.forEach((function(t) {
                            e(t, n)
                        })), t.variableDefinitions && t.variableDefinitions.forEach((function(t) {
                            e(t, n)
                        })), t.definitions && t.definitions.forEach((function(t) {
                            e(t, n)
                        }))
                    }(e, t), i[e.name.value] = t
                }
            })), e.exports = n, e.exports.subscribeNewsletter = function(e, t) {
                var n = {
                    kind: e.kind,
                    definitions: [r(e, t)]
                };
                e.hasOwnProperty("loc") && (n.loc = e.loc);
                var o = i[t] || new Set,
                    a = new Set,
                    l = new Set;
                for (o.forEach((function(e) {
                        l.add(e)
                    })); l.size > 0;) {
                    var s = l;
                    l = new Set, s.forEach((function(e) {
                        a.has(e) || (a.add(e), (i[e] || new Set).forEach((function(e) {
                            l.add(e)
                        })))
                    }))
                }
                return a.forEach((function(t) {
                    var i = r(e, t);
                    i && n.definitions.push(i)
                })), n
            }(n, "subscribeNewsletter")
        },
        "vQk/": function(e, t, n) {
            "use strict";
            var i = n("Miz2"),
                r = n("5cNn"),
                o = n("AAFT"),
                a = n.n(o),
                l = n("VBdi"),
                s = n.n(l),
                c = n("BqLB"),
                u = n("d4yW"),
                d = n("MwNz"),
                p = n("uGYC"),
                f = n.n(p),
                h = n("CNPg"),
                b = n("4j0K"),
                v = n("0w0Z"),
                m = n("fWgI"),
                g = n("QXYw"),
                y = n("oHSs"),
                O = n("7+tw"),
                w = n("+4D6"),
                j = n("KrBb"),
                S = n("ijPV"),
                k = n("kXcp"),
                _ = n("9N7U"),
                T = n("D9ji"),
                E = n("C9Dh"),
                P = (n("AewO"), n("dVLG"));
            const L = e => {
                    var t, n;
                    const {
                        isAuthInitialized: r,
                        userInfo: o,
                        user: a
                    } = Object(b.a)(), s = Object(l.useRef)(!1), [c, {
                        loading: u,
                        data: d
                    }] = Object(v.a)(), {
                        getNextNewsletterFromGlobalOrder: p
                    } = Object(y.a)();
                    if (!r) return Object(P.c)(E.a, {
                        fullViewportHeight: !1
                    });
                    if (u) return Object(P.c)(E.a, {
                        fullViewportHeight: !1
                    });
                    if (a && !(null === o || void 0 === o || null === (t = o.user) || void 0 === t ? void 0 : t.newsletterDetails)) return !(null === d || void 0 === d ? void 0 : d.newsletterDetails) && c(), Object(P.c)(E.a, {
                        fullViewportHeight: !1
                    });
                    const f = (null === s || void 0 === s ? void 0 : s.current) || (null === e || void 0 === e || null === (n = e.newsletter) || void 0 === n ? void 0 : n.call(e)) || p(e.keepFormAlive);
                    return (null === s || void 0 === s ? void 0 : s.current) || (s.current = f), (null === f || void 0 === f ? void 0 : f.listId) && (null === f || void 0 === f ? void 0 : f.templateId) || (null === e || void 0 === e ? void 0 : e.keepFormAlive) ? Object(P.c)(C, Object(i.a)({}, e, {
                        newsletter: f
                    })) : null
                },
                C = e => {
                    let {
                        newsletter: t,
                        ...n
                    } = e;
                    const i = Object(g.a)(),
                        o = Object(l.useRef)(),
                        c = d.a.get("i18n"),
                        [p, h] = s.a.useState(""),
                        [v, y] = s.a.useState(!1),
                        [k, E] = s.a.useState(!1),
                        [L, C] = s.a.useState(!1),
                        [A, M] = s.a.useState(!1),
                        [z, I] = s.a.useState(c.t("Your subscription failed. Please try again.")),
                        {
                            user: D
                        } = Object(b.a)();
                    let R = Object(T.f)("newsletterSubscription");
                    R = R ? JSON.parse(R) : [];
                    const [H, W] = x(n);
                    Object(O.a)();
                    const [U] = Object(r.a)(f.a, {
                        variables: {
                            contact: p,
                            listIds: t.listId,
                            templateId: t.templateId,
                            newsletterName: t.slug
                        },
                        context: {
                            recaptchaProtectedOp: "NewsLetterSignUp"
                        },
                        onCompleted: e => {
                            (null === e || void 0 === e ? void 0 : e.subscribeNewsletter) && "true" === e.subscribeNewsletter ? B() : F()
                        },
                        onError: (e, t) => {
                            F()
                        }
                    }), [V] = Object(w.a)(!1);
                    Object(l.useEffect)(() => {
                        D && h(D.email)
                    }, [D]);
                    const B = () => {
                            N([C, M, y], [!1, !0, !1]), -1 === R.indexOf(t.slug) && (R = [...R, t.slug]), !D && Object(T.a)("newsletterSubscription", JSON.stringify(R))
                        },
                        F = () => {
                            N([C, M, y], [!0, !1, !1])
                        },
                        $ = async e => {
                            var n, i;
                            e.preventDefault(), L && C(!1), y(!0);
                            var r, a;
                            if (!new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(p)) return null === o || void 0 === o || null === (r = o.current) || void 0 === r || null === (a = r.querySelector(".error-message span")) || void 0 === a || a.setAttribute("role", "alert"), void N([C, M, I, y], [!0, !1, c.t("Please enter valid email address."), !1]);
                            N([C, I], [!1, c.t("Your subscription failed. Please try again.")]), D ? await void V({
                                variables: {
                                    listIds: [t.listId]
                                }
                            }).then(e => {
                                var t, n;
                                (null === e || void 0 === e || null === (t = e.data) || void 0 === t || null === (n = t.updateNewsletterSubscription) || void 0 === n ? void 0 : n.success) ? B(): F()
                            }).catch(e => {
                                console.error("Error subscribing to newsletters", e), F()
                            }) : await U(), null === o || void 0 === o || null === (n = o.current) || void 0 === n || null === (i = n.querySelector(".success-message span")) || void 0 === i || i.focus()
                        };
                    if (Object(m.a)(o, "-150px") && !k && E(!0), !i) return null;
                    return Object(P.c)("div", {
                        className: a()("sib-newsletter-form", H),
                        "aria-label": c.t("Newsletter signup Widget")
                    }, Object(P.c)("div", {
                        className: "sib-form-container"
                    }, Object(P.c)("div", {
                        className: "sib-container--large sib-container--horizontal"
                    }, Object(P.c)("div", {
                        className: "sign-up-for-al-jazeera-container"
                    }, Object(P.c)("h3", {
                        className: "sign-up-for-al-jazeera"
                    }, (null === t || void 0 === t ? void 0 : t.subHeading) || D ? c.t("Subscribe for Al Jazeera") : c.t("Sign up for Al Jazeera")), Object(P.c)("h4", {
                        className: "newsletter-title"
                    }, t.title)), Object(P.c)("form", {
                        id: W,
                        method: "POST",
                        "data-type": "subscription",
                        ref: o
                    }, Object(P.c)("div", {
                        className: a()("sib-newsletter-form-fields-container", {
                            success: A
                        })
                    }, Object(P.c)("span", {
                        className: "newsletter-description-line",
                        "aria-hidden": A
                    }, Object(P.c)("span", null, t.description)), D && Object(P.c)("span", {
                        className: "newsletter-signed-in-message",
                        "aria-hidden": A
                    }, c.t("Currently logged in as")), Object(P.c)("div", {
                        className: "sib-newsletter-form-fields",
                        "aria-hidden": A
                    }, Object(P.c)("input", {
                        className: "sib-newsletter-form-input",
                        type: "email",
                        id: "email",
                        name: "email",
                        value: p,
                        onChange: e => h(e.target.value),
                        autoComplete: "email",
                        placeholder: c.t("E-mail address"),
                        "data-required": "true",
                        "aria-label": c.t("E-mail address"),
                        tabIndex: A ? "-1" : "0",
                        disabled: !!D
                    }), Object(P.c)("button", {
                        className: "sib-form-submit " + (v ? "disabled" : ""),
                        form: W,
                        type: "submit",
                        disabled: v,
                        "aria-label": "signup for " + t.title,
                        tabIndex: A ? "-1" : "0",
                        onClick: $
                    }, v ? c.t("Subscribing") : c.t("Subscribe"))), Object(P.c)("div", {
                        className: a()("error-message", {
                            error: L
                        }),
                        "aria-hidden": !L,
                        role: "alert",
                        "aria-atomic": "true",
                        "aria-live": "error"
                    }, Object(P.c)("img", {
                        src: j.a,
                        "aria-hidden": "true"
                    }), Object(P.c)("span", null, z)), Object(P.c)("div", {
                        className: a()("success-message", {
                            success: A
                        }),
                        "aria-hidden": !A
                    }, Object(P.c)("img", {
                        src: S.a,
                        "aria-hidden": "true"
                    }), Object(P.c)("span", {
                        tabIndex: A ? "0" : "-1"
                    }, D ? c.t("Subscribed successfully", {
                        newsletter: t.title
                    }) : c.t("Please check your email to confirm your subscription")))), Object(P.c)("div", {
                        className: "sib-newsletter-privacy-policy"
                    }, Object(P.c)(u.a, {
                        i18nKey: D ? "By subscribe you agree to privacy" : "By signup you agree to privacy",
                        components: [Object(P.c)("span", {
                            key: "privacy-policy-text",
                            "aria-hidden": "true"
                        }), Object(P.c)("a", {
                            key: "link-to-privacy-policy",
                            href: Object(_.getPrivacyPolicyUrl)(),
                            "aria-label": c.t("By signing up, you agree to our Privacy Policy.")
                        })]
                    }))))), Object(P.c)("span", {
                        className: "google-recaptcha-policy",
                        "aria-hidden": "true"
                    }, Object(P.c)(u.a, null, c.t("Protected by reCAPTCHA"))))
                },
                N = (e, t) => {
                    Promise.resolve().then(() => {
                        Object(c.unstable_batchedUpdates)(() => {
                            e.map((n, i) => e[i](t[i]))
                        })
                    })
                },
                x = e => {
                    let t = "",
                        n = "sib-form";
                    return "sidebar" === e.style ? (t = "sidebar-style", n += "-sidebar") : "sidebar-with-border" === e.style ? (t = "sidebar-style general-style-border", n += "-sidebar") : "card" === e.style ? (t = "card-style", n += "-card") : (t = "general-style", n += "-general"), [t, n]
                };
            L.defaultProps = {
                style: "general-style"
            }, t.a = Object(h.a)(L, () => Object(k.b)("newsletter"))
        }
    }
]);