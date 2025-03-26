(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [21], {
        "+ZFZ": function(e, t, a) {},
        "+dVO": function(e, t, a) {
            "use strict";
            var n = a("VBdi"),
                i = a("96Qw");
            class c extends n.Component {
                componentDidUpdate(e) {
                    const t = "POP" === this.props.history.action;
                    this.props.location.pathname !== e.location.pathname && (window.clearPreviousPageMetadata && window.clearPreviousPageMetadata(), window.handleEventsAndAdsLoad && window.handleEventsAndAdsLoad(), window.checkAdsPersonalization && window.checkAdsPersonalization()),
                        function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return !a && (e !== t || "/" === e)
                        }(e.location.pathname, this.props.location.pathname, t) && window.scrollTo(0, 0)
                }
                render() {
                    return this.props.children
                }
            }
            t.a = Object(i.withRouter)(c)
        },
        "1VZG": function(e, t, a) {
            "use strict";
            a("VBdi");
            var n = a("96Qw"),
                i = a("nlM2"),
                c = a("9N7U"),
                l = a("R8Jg"),
                o = a("C9Dh"),
                s = a("dVLG");
            t.a = e => {
                const {
                    url: t,
                    params: a
                } = Object(n.useRouteMatch)(), r = Object(i.a)();
                let {
                    redirectTo: d,
                    redirectStatusCode: u = 301,
                    preserveQueryStrings: b = !1
                } = e;
                if (!d || "" === d) return Object(s.c)(l.a, null);
                b && (null === r || void 0 === r ? void 0 : r.search) && (d = `${d}${r.search}`);
                for (const n in a) a.hasOwnProperty(n) && (d = d.replace(":" + n, "" + a[n]));
                return Object(s.c)(n.Route, {
                    render: e => {
                        let {
                            staticContext: a
                        } = e;
                        return a ? (Object(c.isAbsoluteURL)(d) ? a.externalRedirectUrl = d : a.internalRedirectUrl = d, a.status = u, null) : Object(c.isAbsoluteURL)(d) ? (window.location.replace(d), Object(s.c)(o.a, null)) : Object(s.c)(n.Redirect, {
                            from: t,
                            to: d
                        })
                    }
                })
            }
        },
        "4I1C": function(e, t, a) {},
        "4sxZ": function(e, t, a) {},
        "59VZ": function(e, t, a) {
            "use strict";
            var n = a("AAFT"),
                i = a.n(n),
                c = a("VBdi"),
                l = a.n(c),
                o = a("MwNz"),
                s = a("ezFu"),
                r = a("9N7U"),
                d = a("zOPM"),
                u = a("8+YW"),
                b = a("Pj4E"),
                m = a("yDnS"),
                h = a("dVLG");
            const p = e => {
                let {
                    videoLink: t,
                    children: a,
                    playlistID: n,
                    eventTarget: i,
                    eventLabel: c,
                    tabIndex: o,
                    analyticsMetaProps: s
                } = e;
                const r = !!n ? "?playlist=" + n : null;
                return t ? Object(h.c)(u.a, {
                    to: t,
                    search: r,
                    eventTarget: i,
                    label: c,
                    tabIndex: o,
                    analyticsMetaProps: s
                }, a) : Object(h.c)(l.a.Fragment, null, " ", a)
            };
            t.a = e => {
                var t, a;
                let {
                    index: n,
                    title: c,
                    duration: l,
                    imageURL: u,
                    className: v,
                    onClick: O,
                    videoLink: U,
                    programs: g,
                    article: F,
                    playlistID: j,
                    shouldDisplaySource: B = !0,
                    eventTarget: Q,
                    label: f,
                    analyticsMetaProps: y
                } = e;
                if (!F && (!c || !u)) return null;
                const N = i()("playlist-item-container", v),
                    S = o.a.get("i18n"),
                    k = S.t("Now showing"),
                    w = S.t("Showing Next"),
                    _ = null === v || void 0 === v ? void 0 : v.includes("is-playing"),
                    C = null === v || void 0 === v ? void 0 : v.includes("is-next");
                let V, L = u;
                var R, M;
                F && (U = Object(r.getPostLink)(F), V = Object(s.a)(F), L = null === (R = V) || void 0 === R ? void 0 : R.sourceUrl, c = Object(r.getReplacementHeadline)(F), l = null === (M = F.video) || void 0 === M ? void 0 : M.duration);
                return Object(h.c)("article", {
                    className: N,
                    onClick: () => null === O || void 0 === O ? void 0 : O(n)
                }, Object(h.c)(p, {
                    videoLink: U,
                    playlistID: j,
                    eventTarget: Q,
                    eventLabel: f,
                    tabIndex: "-1",
                    analyticsMetaProps: y
                }, Object(h.c)("div", {
                    className: "playlist-item-image-container"
                }, _ && Object(h.c)("span", {
                    className: "playlist-item-showing-now",
                    title: k
                }, k), C && Object(h.c)("span", {
                    className: "playlist-item-showing-next",
                    title: w
                }, w), Object(h.c)(m.a, {
                    duration: l,
                    className: "playlist-item-duration-container",
                    variant: "small"
                }), Object(h.c)(b.a, {
                    className: "playlist-item-image",
                    alt: (null === (t = V) || void 0 === t ? void 0 : t.alt) || c,
                    sizeNames: ["arc-image-16-9-270", "arc-image-16-9-730"],
                    sources: null === (a = V) || void 0 === a ? void 0 : a.sizes,
                    url: L,
                    lazyLoading: !0
                }))), Object(h.c)("header", null, B && Object(h.c)(d.a, {
                    episode: {
                        programs: g
                    },
                    showTitleOnly: !0
                }), Object(h.c)("h3", {
                    className: "playlist-item-title",
                    title: c
                }, Object(h.c)(p, {
                    videoLink: U,
                    playlistID: j,
                    eventTarget: Q,
                    eventLabel: f,
                    analyticsMetaProps: y
                }, c))))
            }
        },
        "5zi3": function(e, t, a) {},
        "6eQp": function(e, t, a) {
            "use strict";
            var n = a("/WA2"),
                i = a("VBdi"),
                c = a.n(i),
                l = a("C9Dh"),
                o = a("dVLG");
            const s = Object(n.a)({
                resolved: {},
                chunkName: () => "modal",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!a.m[t]
                },
                importAsync: () => a.e(2).then(a.bind(null, "k1gD")),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return a(t)
                },
                resolve() {
                    return "k1gD"
                }
            }, {
                fallback: Object(o.c)(l.a, null)
            });
            t.a = s
        },
        "76ii": function(e, t, a) {
            "use strict";
            var n = a("Miz2"),
                i = a("VBdi"),
                c = a.n(i),
                l = a("96Qw"),
                o = a("Vtjr"),
                s = a("03gm"),
                r = a("CPON"),
                d = a("xAi6"),
                u = a("pbOP"),
                b = a("7dWn"),
                m = a("9N7U"),
                h = a("O0DG"),
                p = a("D003"),
                v = a("VXC7"),
                O = a("BEYP"),
                U = a("R8Jg"),
                g = a("AAFT"),
                F = a.n(g),
                j = a("3/Xq"),
                B = a("w8RO"),
                Q = a("MwNz"),
                f = a("9Cxj"),
                y = a("A81W"),
                N = a("CiaY"),
                S = a("kXcp"),
                k = a("HXpp"),
                w = (a("g5ZJ"), a("dVLG"));
            const _ = (e, t) => {
                    switch (e) {
                        case "facebook":
                            return t ? "facebook-f-dark" : e;
                        case "youtube":
                        case "rss":
                        case "telegram":
                            return t ? e + "-white" : e;
                        case "instagram":
                        case "tiktok":
                            return t ? e + "-white" : e + "-colored-outline";
                        default:
                            return e
                    }
                },
                C = (e, t, a) => {
                    switch (e) {
                        case "facebook":
                        case "instagram":
                        case "rss":
                            return t ? "0 0 24 24" : a;
                        case "twitter":
                            return "0 0 26 24";
                        case "youtube":
                            return t ? "0 0 34 24" : a;
                        case "tiktok":
                        case "telegram":
                            return "0 0 24 24";
                        default:
                            return a
                    }
                };
            class V extends c.a.PureComponent {
                render() {
                    const e = {
                            className: "site-footer__social-links__link",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        t = Q.a.get("socialLinks") || [],
                        a = y.a.t("Footer Social Link Title"),
                        i = Q.a.get("copyright"),
                        {
                            darkMode: c,
                            location: l
                        } = this.props,
                        o = F()({
                            "container--black": c,
                            "container--white": !c
                        }),
                        s = F()({
                            "footer-menu--dark": c
                        }),
                        r = F()({
                            "site-footer__social-section-title": !0,
                            dark: c
                        }),
                        u = F()({
                            "site-footer__copyright": !0,
                            dark: c
                        }),
                        b = Q.a.get("isFooterTwoColumnLayout");
                    return Object(w.c)("div", {
                        className: "container container--footer " + o
                    }, Object(w.c)("div", {
                        className: "container__inner"
                    }, Object(w.c)("footer", {
                        className: "site-footer"
                    }, Object(w.c)("hr", {
                        className: "site-footer__hr",
                        "aria-hidden": "true"
                    }), Object(w.c)("div", {
                        className: F()("site-footer__navigation", {
                            "two-column-menu": b
                        })
                    }, Object(w.c)(f.a, {
                        menuName: d.MENU_NAME_FOOTER,
                        classes: ["footer-menu", s],
                        darkMode: c
                    })), Object(w.c)("div", {
                        className: "site-footer__other"
                    }, t && t.length > 0 && Object(w.c)("div", {
                        className: "site-footer__social-links"
                    }, a && Object(w.c)("p", {
                        className: r
                    }, a), Object(w.c)("ul", {
                        className: "site-footer__social-links_list"
                    }, t.map(t => {
                        let {
                            name: a,
                            url: i,
                            color: l,
                            viewBox: o,
                            size: s,
                            getAccessibilityTitle: r
                        } = t;
                        return s = c ? 24 : s, Object(w.c)("li", {
                            key: a
                        }, Object(w.c)("a", Object(n.a)({
                            href: i
                        }, e, {
                            "aria-label": r()
                        }), Object(w.c)(B.a, {
                            name: _(a, c),
                            color: c ? "white" : l,
                            viewBox: C(a, c, o),
                            size: s
                        })))
                    }))), Object(w.c)("div", {
                        className: "site-footer__logo"
                    }, Object(w.c)(j.a, null, e => Object(w.c)("img", {
                        className: "site-footer__logo__image",
                        src: c ? Q.a.get("footerLogoWhite") : Q.a.get("footerLogo"),
                        alt: e("Al Jazeera Media Network logo"),
                        loading: "lazy",
                        "aria-label": e("Al Jazeera Media Network logo"),
                        width: "230",
                        height: "100"
                    }))), Object(w.c)("div", {
                        className: u
                    }, Object(w.c)("span", null, i))))), Object(N.a)() && !(e => this.props.hideStickyFooterAds || d.STICKY_FOOTER_ADS_EXCLUDE_LIST.includes(e))(l) && Object(w.c)(k.a, {
                        className: "fs-sticky-footer",
                        adUnit: d.AD_UNIT_PREFIX + "footer",
                        hideTitle: !0,
                        bannerType: d.AD_SLOTS.footer
                    }), Object(N.a)() && (e => Object(S.b)("one-pixel-ad/status") && !Q.a.get("DEFAULT_1X1_ADS_EXCLUDE_LIST").includes(e))(l) && Object(w.c)(k.a, {
                        adUnit: d.AD_UNIT_PREFIX + "1x1",
                        bannerType: d.AD_SLOTS.one_pixel,
                        hideTitle: !0,
                        className: "fs-1x1"
                    }), Object(N.a)() && Object(w.c)("div", {
                        id: "fs-select-footer-remove"
                    }), Object(N.a)() && Object(w.c)("div", {
                        id: "fs-fs-special-remove"
                    }))
                }
            }
            var L = V,
                R = a("jOC5"),
                M = a("l8u5"),
                A = a("dQgG"),
                I = a("B1Rb"),
                T = a.n(I),
                x = a("rLNJ"),
                P = a.n(x),
                z = a("8UrT"),
                D = a("N4w9"),
                E = a("oBzm"),
                H = a("ekvm"),
                Z = a("L4dX"),
                J = a("SVMe"),
                W = a("Xr0k"),
                G = a("yEgg"),
                Y = (a("hFvJ"), a("Bf0j")),
                X = a.n(Y),
                q = a("d4yW"),
                K = a("qEkR"),
                $ = a("4nPP"),
                ee = a("8+YW"),
                te = a("kUfG"),
                ae = a("Uw04"),
                ne = a("8fvG"),
                ie = a("17QS"),
                ce = a("z73H");
            var le = {
                name: "v2kfba",
                styles: "height:100%;width:100%;"
            };
            const oe = e => {
                    let {
                        cssObj: t,
                        handleSiteLogoClick: a,
                        i18n: i,
                        SiteLogo: c,
                        isLogoHeadingLocation: l
                    } = e;
                    const o = i.t("Al Jazeera, link to home page");
                    return Object(w.c)("div", {
                        className: "site-header__logo",
                        css: t
                    }, Object(w.c)(ee.a, Object(n.a)({
                        eventTarget: "Home Page",
                        label: o,
                        onClick: a,
                        to: "/"
                    }, l ? {} : {
                        title: o
                    }, {
                        key: l
                    }), Object(w.c)("figure", {
                        css: le,
                        "aria-hidden": "true"
                    }, Object(w.c)(c, null)), l && Object(w.c)("div", {
                        className: "screen-reader-text",
                        dangerouslySetInnerHTML: {
                            __html: i.t("Al Jazeera header 1")
                        }
                    })))
                },
                se = e => {
                    let {
                        cssObj: t,
                        darkHeaderMode: a,
                        hideLiveStream: n
                    } = e;
                    const i = a ? "white" : void 0;
                    return n ? null : Object(w.c)("div", {
                        css: t
                    }, Object(w.c)(te.a, {
                        iconColor: i,
                        textColor: i
                    }))
                },
                re = e => {
                    let {
                        darkHeaderMode: t,
                        showAudioHubLinkInHeader: a,
                        isMobile: n = !1
                    } = e;
                    const i = t ? "white" : "black",
                        c = F()({
                            "site-header__audio-hub": !n,
                            "site-header__audio-hub--mobile": n
                        });
                    return a ? Object(w.c)($.a, {
                        className: c,
                        iconColor: i
                    }) : null
                },
                de = e => {
                    let {
                        darkHeaderMode: t,
                        handleMenuButtonClick: a,
                        i18n: n,
                        isNavOpen: i,
                        isModalOpen: c
                    } = e;
                    const l = n.t((i ? "Close" : "Show") + " navigation menu");
                    return Object(w.c)("button", {
                        "aria-expanded": i,
                        "aria-label": l,
                        "data-testid": "menu-trigger",
                        className: "site-header__menu-trigger",
                        onClick: a,
                        autoFocus: i && !c
                    }, Object(w.c)(B.a, {
                        color: t ? "white" : "black",
                        name: i ? "close" : "burger-menu",
                        title: l
                    }))
                },
                ue = e => {
                    let {
                        darkHeaderMode: t,
                        i18n: a,
                        onSearch: n,
                        onSearchQueryChange: i,
                        options: c,
                        query: l,
                        isNavOpen: o
                    } = e;
                    const s = ["header-menu" + (t ? " header-menu--dark" : "")];
                    return Object(w.c)("nav", {
                        className: "site-header__navigation",
                        "aria-label": a.t("Primary navigation menu"),
                        css: Object(w.b)({
                            fontSize: (null === c || void 0 === c ? void 0 : c.fontSize) || "inherit",
                            fontWeight: (null === c || void 0 === c ? void 0 : c.fontWeight) || "normal"
                        }, "")
                    }, Object(w.c)("span", {
                        className: "screen-reader-text"
                    }, Object(w.c)(q.a, null, "Navigation menu")), Object(w.c)(f.a, {
                        classes: s,
                        onSearch: n,
                        isNavOpen: o,
                        onSearchQueryChange: i,
                        query: l
                    }))
                },
                be = Object(i.forwardRef)((e, t) => {
                    let {
                        bypassBlockContext: a,
                        className: n,
                        darkHeaderMode: i,
                        handleBypassLinkClick: c,
                        handleSearchIconClick: l,
                        handleSiteLogoClick: o,
                        hideLiveStream: s,
                        i18n: r,
                        onSearch: d,
                        onSearchQueryChange: u,
                        options: b = {},
                        query: m,
                        SiteLogo: h,
                        isLogoHeadingLocation: p,
                        isSearchOpen: v,
                        isNavOpen: O,
                        handleMenuButtonClick: U,
                        isMobile: g,
                        hideAppDownloadBanner: j,
                        showAudioHubLinkInHeader: Q,
                        isUserAccountsEnabled: f,
                        isModalOpen: y
                    } = e;
                    return Object(w.c)("div", {
                        onClick: e => {
                            !g && e.detail > 0 && (null === t || void 0 === t || t.current.focus())
                        }
                    }, Object(w.c)(X.a, {
                        active: O && g && !y
                    }, Object(w.c)("div", null, !j && Object(w.c)(ae.a, null), Object(w.c)("header", {
                        className: F()(n, "site-header container__inner"),
                        ref: t,
                        role: "banner"
                    }, a ? Object(w.c)(K.a, {
                        context: a,
                        handleLinkClick: c
                    }) : null, Object(w.c)(oe, {
                        handleSiteLogoClick: o,
                        i18n: r,
                        key: "site-logo-" + i,
                        SiteLogo: h,
                        isLogoHeadingLocation: p
                    }), Object(w.c)("div", {
                        className: "site-header__live-menu"
                    }, Object(w.c)(re, {
                        darkHeaderMode: i,
                        showAudioHubLinkInHeader: Q,
                        isMobile: !0
                    }), Object(w.c)("div", {
                        className: "site-header__live-cta--mobile"
                    }, Object(w.c)(se, {
                        darkHeaderMode: i,
                        hideLiveStream: s,
                        key: "live-cta-" + i
                    })), f && Object(w.c)("div", {
                        className: "site-header__account--mobile"
                    }, Object(w.c)(ce.a, null, Object(w.c)(ne.a, {
                        alwaysUseIcon: g
                    }))), Object(w.c)(de, {
                        darkHeaderMode: i,
                        handleMenuButtonClick: U,
                        i18n: r,
                        isNavOpen: O,
                        isModalOpen: y
                    })), Object(w.c)(ue, {
                        darkHeaderMode: i,
                        onSearch: d,
                        isNavOpen: O,
                        onSearchQueryChange: u,
                        options: b,
                        query: m,
                        i18n: r
                    }), Object(w.c)("div", {
                        className: "site-header__live-menu--desktop"
                    }, Object(w.c)(re, {
                        darkHeaderMode: i,
                        showAudioHubLinkInHeader: Q
                    }), Object(w.c)("div", {
                        className: "site-header__live-cta"
                    }, Object(w.c)(se, {
                        darkHeaderMode: i,
                        hideLiveStream: s,
                        key: "live-cta-" + i
                    })), Object(w.c)("div", {
                        className: "site-header__search-trigger"
                    }, Object(w.c)("button", {
                        type: "button",
                        className: "no-styles-button",
                        onClick: l,
                        "aria-pressed": v ? "true" : "false"
                    }, Object(w.c)("span", {
                        className: "screen-reader-text"
                    }, r.t("Click here to search")), Object(w.c)(B.a, {
                        name: "search",
                        color: "grey"
                    }))), f && Object(w.c)("div", {
                        className: "site-header__account"
                    }, Object(w.c)(ce.a, null, Object(w.c)(ne.a, null)))), Object(w.c)(ie.a, null)))))
                }),
                me = Object(i.forwardRef)((e, t) => {
                    let {
                        children: a,
                        className: n
                    } = e;
                    return Object(w.c)("div", {
                        className: n,
                        ref: t
                    }, a)
                }),
                he = e => {
                    const {
                        headerContainerRef: t
                    } = Object(E.c)();
                    return Object(w.c)(me, Object(n.a)({}, e, {
                        ref: t
                    }))
                },
                pe = e => {
                    const {
                        postHeaderContainerRef: t
                    } = Object(E.c)();
                    return Object(w.c)(me, Object(n.a)({}, e, {
                        ref: t
                    }))
                };
            class ve extends c.a.PureComponent {
                constructor(e) {
                    var t;
                    super(e);
                    let a = null;
                    (null === e || void 0 === e || null === (t = e.match) || void 0 === t ? void 0 : t.params) && (a = e.match.params.query || "");
                    const n = H.a.isMobile(H.a.MENU_BREAKPOINT);
                    this.state = {
                        isNavOpen: !!A.canUseDOM && !n,
                        isClientSide: !1,
                        isSearchOpen: !1,
                        isMobile: n,
                        isMinimized: this.shouldMinimize(),
                        query: a
                    }, this.headerViewRef = Object(i.createRef)()
                }
                componentDidUpdate(e) {
                    const t = e.location.pathname !== this.props.location.pathname;
                    var a;
                    (t && this.setHeaderMinimizeState(), t && !this.isUserOnSearchPage()) && (this.setState({
                        isSearchOpen: !1,
                        query: ""
                    }), null === (a = this.headerViewRef) || void 0 === a || a.current.focus());
                    t && this.isUserOnSearchPage() && this.props.match && this.props.match.params && this.props.match.params.query && this.setState({
                        query: this.props.match.params.query
                    })
                }
                componentDidMount() {
                    A.canUseDOM && (this.setState({
                        isClientSide: !0
                    }), this.windowWidthAndEvents(), this.scrollingAndEvents(), this.openToggleAndEvents(), this.handleBrowserControlAutoHide())
                }
                componentWillUnmount() {
                    Object(R.a)(), A.canUseDOM && (this.removeWindowHandler(), this.removeScrollHandler(), this.removeMobileMenuEventHandler())
                }
                setHeaderMinimizeState() {
                    var e;
                    const t = this.shouldMinimize();
                    t !== (null === (e = this.state) || void 0 === e ? void 0 : e.isMinimized) && this.setState({
                        isMinimized: t
                    })
                }
                shouldMinimize() {
                    var e, t, a;
                    if (null === (e = this.state) || void 0 === e ? void 0 : e.isMobile) return !1;
                    const n = null === (t = this.props) || void 0 === t || null === (a = t.location) || void 0 === a ? void 0 : a.pathname;
                    if (!d.MAXIMIZED_HEADER_LOCATIONS.includes(n)) return !0;
                    if (!A.canUseDOM) return !1;
                    const i = window.pageYOffset,
                        c = this.props.preHeaderAd ? d.HEADER_WITH_AD_SCROLL_OFFSET : d.HEADER_SCROLL_OFFSET;
                    return !(i < d.BTF_RENDER_SCROLL_OFFSET) && (i > c || !!this.state && this.state.isMinimized)
                }
                handleBrowserControlAutoHide() {
                    const e = .01 * window.innerHeight;
                    document.documentElement.style.setProperty("--vh", e + "px"), document.documentElement.style.setProperty("--clientWidth", document.body.clientWidth + "px")
                }
                windowWidthAndEvents() {
                    const e = () => {
                            if (H.a.isMobile(H.a.MENU_BREAKPOINT)) {
                                const e = document.body.classList.contains("nav-menu-open");
                                this.setState({
                                    isMobile: !0,
                                    isNavOpen: e
                                })
                            } else this.setState({
                                isMobile: !1,
                                isNavOpen: !0
                            });
                            this.handleBrowserControlAutoHide()
                        },
                        t = T()(() => {
                            e()
                        }, 250);
                    window.addEventListener("resize", t), this.removeWindowHandler = () => {
                        window.removeEventListener("resize", t)
                    }
                }
                openToggleAndEvents() {
                    const e = () => this.state.isMobile && this.state.isNavOpen && this.toggleNavOpen();
                    window.addEventListener(Z.b, e), this.removeMobileMenuEventHandler = () => {
                        window.removeEventListener(Z.b, e)
                    }
                }
                scrollingAndEvents() {
                    const e = T()(() => {
                        this.setHeaderMinimizeState()
                    }, 150);
                    window.addEventListener("scroll", e), this.removeScrollHandler = () => {
                        window.removeEventListener("scroll", e)
                    }
                }
                toggleNavOpen() {
                    document.body.classList.add("nav-menu-open"), this.state.isNavOpen ? (Object(R.a)(), document.body.classList.remove("nav-menu-open")) : Object(R.b)(document.querySelector(".menu.header-menu")), this.setState({
                        isNavOpen: !this.state.isNavOpen
                    })
                }
                isUserOnSearchPage() {
                    return this.props.match.path.indexOf("/search/") > -1
                }
                handleSiteLogoClickEvent() {
                    A.canUseDOM && Object(Z.a)(Z.c)
                }
                handleQueryChange(e) {
                    this.setState({
                        query: e
                    })
                }
                render() {
                    const {
                        isClientSide: e,
                        isMobile: t,
                        isMinimized: a,
                        isNavOpen: i
                    } = this.state, c = this.props.SiteLogo, l = this.context.components.Header, o = (null === l || void 0 === l ? void 0 : l.options) || {}, s = this.props.bypassBlockContext || null, {
                        site: r
                    } = this.props.match.params || {}, u = Q.a.get("i18n"), b = Object(S.b)(J.j), m = r && !["sport", "videos", "us-elections-2020", "opinion", "programs"].includes(r), h = this.props.location.pathname, {
                        darkHeaderMode: p,
                        hideAppDownloadBanner: v,
                        isSponsored: O
                    } = this.props, U = h && d.LOGO_HEADING_LOCATIONS.includes(h), g = !this.props.location.pathname.startsWith(d.SPONSORED_PATH_NAME) && !this.props.location.pathname.includes("/longform/"), j = a || m || p, B = p ? "container--black" : "container--white", f = F()("container", "container--header", B, {
                        "mobile-menu-open": t && i,
                        "header-is-sticky": g,
                        "header-is-minimized": j,
                        "header-is-sub-site": m,
                        "header-is-sponsored": O
                    }), y = ["header-menu"];
                    p && y.push("header-menu--dark");
                    const N = () => {
                            this.toggleNavOpen();
                            const e = document.getElementsByClassName("site-header__menu-trigger");
                            e.length && e[0].focus()
                        },
                        k = () => {
                            const {
                                query: e
                            } = this.state;
                            e && (Object(Z.a)(Z.b), this.props.history.push("/search/" + e))
                        },
                        _ = e => {
                            var t;
                            this.setState({
                                isSearchOpen: !this.state.isSearchOpen
                            }), null === e || void 0 === e || null === (t = e.stopPropagation) || void 0 === t || t.call(e)
                        },
                        C = e => {
                            if (e && "" !== e) {
                                const t = e.replace("#", ""),
                                    a = document.getElementById(t);
                                setTimeout(() => {
                                    null === a || void 0 === a || a.scrollIntoView()
                                }, 100)
                            }
                        },
                        V = this.handleQueryChange.bind(this),
                        L = Q.a.get("hideLiveStream"),
                        R = Q.a.get("showAudioHubLinkInHeader");
                    return Object(w.c)(M.a, {
                        condition: e && t,
                        wrap: e => {
                            const {
                                forceHeaderHide: t
                            } = Object(E.c)(), a = {};
                            return t && (a.display = "none"), Object(w.c)(E.a.Consumer, null, t => {
                                let {
                                    setIsHeadroomPinned: n,
                                    isPinningEnabled: i
                                } = t;
                                return Object(w.c)(P.a, {
                                    wrapperStyle: a,
                                    onPin: () => n(!0),
                                    onUnpin: () => n(!1),
                                    disableInlineStyles: !0,
                                    disable: !i
                                }, e)
                            })
                        }
                    }, Object(w.c)(he, {
                        className: f
                    }, Object(w.c)(E.a.Consumer, null, e => {
                        let {
                            isModalOpen: a
                        } = e;
                        return Object(w.c)(be, {
                            bypassBlockContext: s,
                            className: y,
                            darkHeaderMode: p,
                            isNavOpen: this.state.isNavOpen,
                            isModalOpen: a,
                            handleBypassLinkClick: C,
                            handleSearchIconClick: _,
                            handleMenuButtonClick: N,
                            handleSiteLogoClick: () => this.handleSiteLogoClickEvent(),
                            hideLiveStream: L,
                            i18n: u,
                            onSearch: k,
                            onSearchQueryChange: V,
                            options: o,
                            query: this.state.query,
                            SiteLogo: c,
                            isLogoHeadingLocation: U,
                            ref: this.headerViewRef,
                            isSearchOpen: this.state.isSearchOpen,
                            isMobile: t,
                            hideAppDownloadBanner: v,
                            showAudioHubLinkInHeader: R,
                            isUserAccountsEnabled: b
                        })
                    }), Object(w.c)(pe, {
                        className: "site-post-header"
                    }, Object(w.c)(z.a, null), O && Object(w.c)(G.a, Object(n.a)({}, this.props, {
                        type: "header"
                    })), (this.state.isSearchOpen || this.isUserOnSearchPage()) && Object(w.c)(W.a, {
                        match: this.props.match,
                        query: this.state.query || "",
                        overlay: -1 === this.props.match.path.indexOf("/search"),
                        visible: this.state.isSearchOpen || this.isUserOnSearchPage(),
                        onChange: this.handleQueryChange.bind(this),
                        onSearch: () => {
                            const {
                                query: e
                            } = this.state;
                            e && this.props.history.push("/search/" + e)
                        }
                    }))))
                }
            }
            ve.defaultProps = {
                preHeaderAd: !1
            }, ve.contextType = D.a;
            var Oe = ve,
                Ue = a("f9Y0"),
                ge = a("Ot6i"),
                Fe = a("l0kO"),
                je = a("nrwQ"),
                Be = a("6epq"),
                Qe = a("ZBBs"),
                fe = (a("vZRE"), a("cMIy")),
                ye = a.n(fe);
            const Ne = ye.a.duration(2, "weeks").asMilliseconds();

            function Se() {
                return Object(Qe.b)() && ke() && function() {
                    const {
                        Notification: e
                    } = window;
                    return e && "default" === e.permission
                }() && _e() >= 3 && ! function() {
                    const {
                        localStorage: e
                    } = window;
                    if (!e) return !0;
                    return (Number(e.getItem("notification:popup-view-count")) || 0) >= 3
                }() && ! function() {
                    const {
                        localStorage: e
                    } = window;
                    if (!e) return !0;
                    const t = Number(e.getItem("notification:last-pre-permission-request-timestamp")) || 0,
                        a = ye()(t);
                    return ye()().diff(a) < Ne
                }() && !Object(m.isPreviewPage)()
            }

            function ke() {
                var e;
                return !!(null === (e = window.OneSignal) || void 0 === e ? void 0 : e._initCalled)
            }

            function we() {
                const {
                    localStorage: e
                } = window;
                if (!e) return;
                const t = _e();
                t < 3 && e.setItem("notification:page-visits", t + 1)
            }

            function _e() {
                const {
                    localStorage: e
                } = window;
                if (!e) return 0;
                try {
                    var t;
                    const a = null !== (t = JSON.parse(e.getItem("notification:page-visits"))) && void 0 !== t ? t : {};
                    if (Number.isInteger(a)) return a;
                    const n = Object.keys(a).length;
                    return e.setItem("notification:page-visits", n), n
                } catch (a) {
                    return 0
                }
            }

            function Ce() {
                const e = Object(Fe.a)(),
                    [t, a] = Object(i.useState)(!1);
                return Object(i.useEffect)(() => {
                    void 0 !== e && async function() {
                        await Object(Qe.d)(), a(ke()), Object(Qe.e)(e)
                    }()
                }, [e]), Object(S.b)(Qe.a) && e ? Object(w.c)(Ve, {
                    isOneSignalSDKInitialized: t
                }) : null
            }

            function Ve(e) {
                let {
                    isOneSignalSDKInitialized: t = !0
                } = e;
                const a = Object(Be.a)(),
                    n = Object(je.a)(_e, we),
                    [c, l] = Object(i.useState)(!1);
                Object(i.useEffect)(() => {
                    a && t && Se() && !c && (l(!0), function() {
                        const {
                            localStorage: e
                        } = window;
                        if (!e) return;
                        const t = Number(e.getItem("notification:popup-view-count")) || 0;
                        e.setItem("notification:popup-view-count", t + 1)
                    }(), function() {
                        const {
                            localStorage: e
                        } = window;
                        e && e.setItem("notification:last-pre-permission-request-timestamp", ye()().valueOf())
                    }())
                }, [a, t, n]);
                const o = () => {
                    l(!1)
                };
                return c ? Object(w.c)("div", {
                    className: "notification-pre-permission"
                }, Object(w.c)("div", {
                    className: "notification-pre-permission__modal",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "notification-pre-permission__header",
                    "aria-describedby": "notification-pre-permission__description"
                }, Object(w.c)("div", {
                    className: "notification-pre-permission__content"
                }, Object(w.c)(B.a, {
                    name: "notification-bell",
                    size: 32,
                    viewBox: "0 0 30 32"
                }), Object(w.c)("h2", {
                    id: "notification-pre-permission__header",
                    className: "notification-pre-permission__header"
                }, y.a.t("notification:per-permission-popup:title")), Object(w.c)("p", {
                    id: "notification-pre-permission__description",
                    className: "notification-pre-permission__description"
                }, y.a.t("notification:per-permission-popup:description"))), Object(w.c)("div", {
                    className: "notification-pre-permission__buttons"
                }, Object(w.c)("button", {
                    className: "notification-pre-permission__button notification-pre-permission__button--dark",
                    onClick: () => {
                        o(), (async () => {
                            try {
                                await Object(Qe.c)(), Object(ge.m)("native", "granted" === window.Notification.permission)
                            } catch (e) {
                                console.error("Error while requesting native permission", e)
                            }
                        })(), Object(ge.m)("pre-prompt", !0)
                    },
                    autoFocus: !0
                }, y.a.t("notification:per-permission-popup:call-to-action")), Object(w.c)("button", {
                    className: "notification-pre-permission__button notification-pre-permission__button--light",
                    onClick: () => {
                        o(), Object(ge.m)("pre-prompt", !1)
                    }
                }, y.a.t("notification:per-permission-popup:not-now"))), Object(w.c)("button", {
                    className: "notification-pre-permission__close-icon-button",
                    onClick: () => {
                        o(), Object(ge.m)("pre-prompt", !1)
                    },
                    "aria-label": y.a.t("Close")
                }, Object(w.c)(B.a, {
                    name: "notification-close",
                    title: "",
                    size: 16,
                    viewBox: "0 0 16 16"
                })))) : null
            }
            var Le = a("ZJ8K");
            var Re = () => {
                let e, t;
                return ({
                    SiteLogo: e,
                    SiteLogoDarkHeader: t
                } = a("BkXL")), {
                    SiteLogo: e,
                    SiteLogoDarkHeader: t
                }
            };
            t.a = e => {
                let {
                    component: t,
                    adSlot: a,
                    render: c,
                    postType: g,
                    redirectTo: F,
                    redirectStatusCode: j,
                    preserveQueryStrings: B,
                    isAmp: Q,
                    categoryType: f,
                    slug: y,
                    bypassBlockContext: N,
                    notDiscoverable: S,
                    hideFooter: k,
                    darkHeader: _ = !1,
                    darkFooter: C = !1,
                    hideInContentAds: V = !1,
                    hideRightRailAds: R = !1,
                    hideStickyFooterAds: M = !1,
                    hideNewsLetter: A = !1,
                    includeAudioPlayer: I,
                    darkMode: T,
                    hideAppDownloadBanner: x,
                    subMenuSlug: P,
                    isSponsored: z,
                    isPreview: D = !1,
                    themeRounded: E = !1,
                    template: H,
                    ...Z
                } = e;
                const {
                    audioPlayer: J
                } = Object(o.b)(), {
                    themeSettings: W,
                    updateThemeSettings: G
                } = Object(s.b)(), Y = T || W.darkMode, X = Re(), q = Y || _ ? X.SiteLogoDarkHeader : X.SiteLogo, K = Object(m.hasValidEncoding)(Z.location.pathname) ? t : U.a;
                if (Object(i.useEffect)(() => {
                        G({
                            darkMode: !1
                        })
                    }, [Z.location.pathname]), x = !d.IS_APP_DOWNLOAD_BANNER_ENABLED[Object(u.a)()] || x, Q) return Object(w.c)(l.Route, Object(n.a)({}, Z, {
                    render: e => Object(w.c)(r.a, {
                        AmpHeader: p.a,
                        AmpFooter: h.a,
                        SiteLogo: q,
                        darkHeaderMode: Y || _,
                        darkMode: Y,
                        darkFooterMode: Y || C,
                        hideAppDownloadBanner: x,
                        themeRounded: E
                    }, a => Object(w.c)(t, Object(n.a)({}, a, e, {
                        postType: g
                    })))
                })); {
                    const e = Object(m.getPreviewID)(Z.location),
                        t = !!a;
                    return Object(w.c)(l.Route, Object(n.a)({}, Z, {
                        render: i => {
                            const l = Object.assign({
                                postType: g,
                                redirectTo: F,
                                preserveQueryStrings: B,
                                redirectStatusCode: j,
                                categoryType: f,
                                slug: y,
                                hideInContentAds: V,
                                hideRightRailAds: R,
                                hideNewsLetter: A,
                                subMenuSlug: P,
                                isPreview: D,
                                template: H
                            }, i);
                            let o;
                            return o = K ? Object(w.c)(K, l) : c(l), Object(w.c)(Ue.a, {
                                darkMode: Y,
                                themeRounded: E
                            }, a && Object(w.c)(a, null), Object(w.c)(O.a, null, e && Object(w.c)(Le.a, {
                                location: Z.location
                            }), Object(w.c)(Oe, Object(n.a)({}, i, {
                                preHeaderAd: t,
                                SiteLogo: q,
                                bypassBlockContext: N || "default",
                                darkHeaderMode: Y || _,
                                hideAppDownloadBanner: x,
                                isSponsored: z || !1
                            }))), Object(w.c)("div", null, o), Object(b.g)(e, S), (I || J) && Object(w.c)(v.a, null), !k && Object(w.c)(O.a, null, Object(w.c)(L, {
                                darkMode: Y || C,
                                location: i.match.path,
                                hideStickyFooterAds: M
                            })), Object(w.c)(Ce, null))
                        }
                    }))
                }
            }
        },
        "7DTm": function(e, t, a) {},
        "7zME": function(e, t, a) {},
        "8+YW": function(e, t, a) {
            "use strict";
            var n = a("dQgG"),
                i = a("VBdi"),
                c = a.n(i),
                l = a("PWJT"),
                o = a("Ot6i"),
                s = a("MwNz"),
                r = a("9N7U"),
                d = a("dVLG");
            class u extends c.a.Component {
                shouldComponentUpdate(e) {
                    return Object(r.hasPostChanged)(this.props, e) && this.props.to !== e.to
                }
                parseTo(e) {
                    if (n.canUseDOM) {
                        const t = document.createElement("a");
                        return t.href = e, t
                    }
                    return ""
                }
                isInternal(e) {
                    const {
                        domain: t
                    } = s.a.get();
                    return (n.canUseDOM ? window.location.host : t) === e.host
                }
                isExternal(e) {
                    return !!e && ("external-article" === e.postType && e.externalUrl)
                }
                trackAnalytics() {
                    const {
                        analyticsEventProps: e,
                        analyticsEvent: t
                    } = this.props;
                    Object(o.e)(t, e)
                }
                getDestinationPropState() {
                    const {
                        analyticsEventProps: e,
                        analyticsMetaProps: t
                    } = this.props, a = (null === e || void 0 === e ? void 0 : e.articlePosition) || (null === t || void 0 === t ? void 0 : t.articlePosition) || 0, n = (null === e || void 0 === e ? void 0 : e.position) || (null === t || void 0 === t ? void 0 : t.position) || 0, i = null === t || void 0 === t ? void 0 : t.attributionToken;
                    return { ...Object(o.d)({
                            recirculationSource: null === t || void 0 === t ? void 0 : t.recirculationSource,
                            siteSection: null === t || void 0 === t ? void 0 : t.siteSection,
                            siteModule: null === t || void 0 === t ? void 0 : t.siteModule,
                            articlePosition: a,
                            position: n,
                            customTopics: null === t || void 0 === t ? void 0 : t.topics,
                            ...i && {
                                attributionToken: i
                            }
                        }),
                        internalClick: !0
                    }
                }
                render() {
                    const {
                        article: e,
                        allowFullLink: t,
                        children: a,
                        className: n,
                        onClick: i,
                        onFocus: c,
                        tabIndex: o,
                        title: s,
                        to: u,
                        search: b
                    } = this.props;
                    let {
                        target: m,
                        rel: h
                    } = this.props;
                    const p = this.parseTo(u),
                        v = this.isInternal(p),
                        O = t ? p.pathname + p.search + p.hash : p.pathname,
                        U = {
                            pathname: Object(r.safeDecodeString)(O),
                            state: this.getDestinationPropState()
                        };
                    b && (U.search = b);
                    const g = e => {
                        this.trackAnalytics(), i && i(e)
                    };
                    if (m = this.isExternal(e) && "undefined" === typeof m ? "_blank" : m, h || (h = m ? Object(r.isWhitelistedArticle)(u) ? "noopener" : "noopener noreferrer" : void 0), v) return Object(d.c)(l.b, {
                        className: n,
                        tabIndex: o,
                        target: m,
                        rel: h,
                        onClick: i,
                        onFocus: c,
                        "aria-hidden": this.props["aria-hidden"],
                        "aria-label": null === s || void 0 === s ? void 0 : s.toLowerCase(),
                        to: U,
                        onClick: g,
                        onFocus: c,
                        ref: "link"
                    }, a); {
                        const t = this.isExternal(e) && Object(r.isWhitelistedArticle)(u) ? Object(r.appendUTMToLink)(u) : u;
                        return Object(d.c)("a", {
                            className: n,
                            tabIndex: o,
                            target: m,
                            rel: h,
                            onClick: i,
                            onFocus: c,
                            "aria-hidden": this.props["aria-hidden"],
                            "aria-label": s,
                            href: t,
                            onClick: g,
                            onFocus: c,
                            ref: "link"
                        }, a)
                    }
                }
            }
            u.defaultProps = {
                analyticsEventProps: {},
                analyticsMetaProps: {},
                analyticsEvent: ""
            }, t.a = u
        },
        "8IIS": function(e, t, a) {},
        ATr5: function(e, t, a) {},
        AvOm: function(e, t, a) {},
        BNG4: function(e, t, a) {},
        C9Dh: function(e, t, a) {
            "use strict";
            a("VBdi");
            var n = a("N4w9"),
                i = a("wPnK"),
                c = (a("jafC"), a("dVLG"));
            const l = e => {
                let {
                    fullViewportHeight: t
                } = e;
                const a = {
                        height: t ? "calc( 100vh - 60px )" : "auto",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column"
                    },
                    l = t ? "l-fullViewportHeight" : "";
                return Object(c.c)("div", {
                    className: "loading " + l,
                    style: a,
                    "data-testid": "loading"
                }, Object(c.c)("div", {
                    className: "loading__logo"
                }, Object(c.c)(n.a.Consumer, null, e => {
                    const {
                        LoadingIcon: t
                    } = e.components;
                    return Object(c.c)(t, null)
                })), Object(c.c)(i.a, null))
            };
            l.defaultProps = {
                fullViewportHeight: !0
            }, t.a = l
        },
        CQi9: function(e, t, a) {
            "use strict";
            var n = a("VBdi"),
                i = a("N4w9"),
                c = a("dVLG");
            t.a = () => {
                const {
                    components: e
                } = Object(n.useContext)(i.a), {
                    LoadingIcon: t
                } = e;
                return Object(c.c)("div", {
                    className: "loading-card"
                }, Object(c.c)("div", {
                    className: "content"
                }, Object(c.c)("h3", null), Object(c.c)("h2", {
                    className: "heading-first-line"
                }), Object(c.c)("h2", {
                    className: "heading-second-line"
                }), Object(c.c)("h2", {
                    className: "heading-third-line"
                }), Object(c.c)("p", {
                    className: "excerpt-first-line"
                }), Object(c.c)("p", {
                    className: "excerpt-second-line"
                }), Object(c.c)("p", {
                    className: "excerpt-third-line"
                })), Object(c.c)("div", {
                    className: "image"
                }, Object(c.c)(t, null)))
            }
        },
        CX3F: function(e, t, a) {
            "use strict";
            var n = a("Miz2"),
                i = a("AAFT"),
                c = a.n(i),
                l = a("VBdi"),
                o = a("pbOP"),
                s = a("9N7U"),
                r = (a("ebn7"), a("MwNz")),
                d = a("N4w9"),
                u = a("ugo3"),
                b = a("Tdow"),
                m = a("d4yW"),
                h = a("96Qw"),
                p = a("lBH5"),
                v = a("ncCA"),
                O = a("w8RO"),
                U = a("dVLG");
            const g = e => function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Fragment;
                    return t.displayName = e, t
                },
                F = e => {
                    let {
                        translationKey: t,
                        deemphasize: a = !1,
                        screenReaderText: n = ""
                    } = e;
                    return function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Fragment;
                        return i => {
                            const c = e === l.Fragment ? {} : i,
                                o = r.a.get("i18n");
                            return Object(U.c)(l.Fragment, null, Object(U.c)(e, c), Object(U.c)("strong", {
                                "aria-hidden": "true",
                                className: "post-label__text" + (a ? "--deemphasize" : "")
                            }, Object(U.c)(m.a, null, t)), Object(U.c)("span", {
                                className: "screen-reader-text"
                            }, `${o.t(t)}, ${o.t(n)}`))
                        }
                    }
                },
                j = e => {
                    let {
                        name: t,
                        title: a
                    } = e;
                    return function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Fragment;
                        return n => {
                            const i = e === l.Fragment ? {} : n;
                            return Object(U.c)(l.Fragment, null, Object(U.c)(e, i), Object(U.c)(O.a, {
                                className: "post-label__icon",
                                name: t,
                                size: 16,
                                title: a,
                                viewBox: "0 0 16 16"
                            }))
                        }
                    }
                },
                B = (e, t, a, n) => {
                    const i = r.a.get("i18n"),
                        c = a ? v.a : l.Fragment,
                        o = a && !a.startsWith(e) && !a.startsWith("/"),
                        s = "Post Label Link - " + (o ? "External" : "Internal"),
                        d = n ? i.t(n).toLowerCase() : "";
                    return {
                        LinkComponent: c,
                        linkComponentProps: c === l.Fragment ? {} : {
                            className: "post-label__link",
                            isAmp: t.isAmp,
                            to: a,
                            target: o ? "_blank" : "_self",
                            label: s,
                            eventTarget: a,
                            ariaLabel: d
                        }
                    }
                },
                Q = e => {
                    let {
                        getLink: t,
                        ariaLabel: a
                    } = e;
                    return function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Fragment;
                        return n => {
                            const i = Object(l.useContext)(d.b),
                                {
                                    pathname: c
                                } = Object(h.useLocation)(),
                                o = t(n);
                            if (!["/opinion/", "/blogs/"].includes(o) && Object(p.f)(c, o)) return null;
                            const s = e === l.Fragment ? {} : n,
                                {
                                    LinkComponent: r,
                                    linkComponentProps: u
                                } = B(i, n, o, a);
                            return Object(U.c)(r, u, Object(U.c)(e, s))
                        }
                    }
                },
                f = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Fragment;
                    return t => {
                        let {
                            className: a,
                            ...n
                        } = t;
                        const i = e === l.Fragment ? {} : {
                            className: a,
                            ...n
                        };
                        return Object(U.c)("div", {
                            className: a
                        }, Object(U.c)(e, i))
                    }
                },
                y = e => function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Fragment;
                    return a => {
                        const n = t === l.Fragment ? {} : a;
                        return Object(U.c)(l.Fragment, null, Object(U.c)(t, n), Object(U.c)(e, a))
                    }
                },
                N = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Fragment;
                    return t => {
                        const a = e === l.Fragment ? {} : t;
                        return Object(U.c)(l.Fragment, null, Object(U.c)(e, a), Array.isArray(t.customContent) ? t.customContent.map((e, t) => {
                            let {
                                name: a
                            } = e;
                            return a && Object(U.c)("span", {
                                key: t,
                                className: "post-label__text"
                            }, " | " + a.toUpperCase())
                        }).filter(Boolean) : null)
                    }
                },
                S = function() {
                    let {
                        featuredTaxonomy: e = !1,
                        featuredTaxonomyImage: t = {}
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e && Boolean(null === t || void 0 === t ? void 0 : t.sourceUrl)
                },
                k = ["breaking", "developing", "externalArticle", "live", "live-amp", "live-sports", "live-sports-amp", "podcast"],
                w = Object(b.a)(g("AjmBlogsLabel"), f, Q({
                    getLink: () => "/blogs/",
                    ariaLabel: "Link to Blogs Page"
                }), F({
                    translationKey: "blogs"
                }))(),
                _ = Object(b.a)(g("AjaBlogsLabel"), f, Q({
                    getLink: () => "/blogs/"
                }), y(e => {
                    let {
                        isAmp: t = !1
                    } = e;
                    return Object(U.c)(d.a.Consumer, null, e => {
                        var a, n, i, c;
                        return t ? Object(U.c)("amp-img", {
                            src: null === (a = e.components) || void 0 === a || null === (n = a.CardBlogs) || void 0 === n ? void 0 : n.icon,
                            alt: r.a.get("i18n").t("Blogs logo"),
                            height: 20,
                            width: 95
                        }) : Object(U.c)("img", {
                            src: null === (i = e.components) || void 0 === i || null === (c = i.CardBlogs) || void 0 === c ? void 0 : c.icon,
                            alt: r.a.get("i18n").t("Blogs logo"),
                            loading: "lazy"
                        })
                    })
                }))(),
                C = Object(b.a)(g("BlogsLabel"), f, N, Q({
                    getLink: () => "/blogs/",
                    ariaLabel: "Link to Blogs Page"
                }), F({
                    translationKey: "Blog"
                }))(),
                V = Object(b.a)(g("BreakingLabel"), f, F({
                    translationKey: "breaking"
                }))(),
                L = Object(b.a)(g("DevelopingLabel"), f, F({
                    translationKey: "developing"
                }))(),
                R = Object(b.a)(g("ExternalArticleLabel"), f, F({
                    translationKey: "External Link",
                    screenReaderText: "External Link SR Text"
                }), j({
                    name: "external-link",
                    title: "External Link"
                }))(),
                M = Object(b.a)(g("FeaturedSourceLabelItem"), f, Q({
                    getLink: e => {
                        let {
                            source: t
                        } = e;
                        return t.featuredActionLink
                    }
                }), y(e => {
                    let {
                        source: t,
                        isAmp: a = !1
                    } = e;
                    return Object(u.b)(t.featuredTaxonomyImage, a, "post-label__image")
                }))(),
                A = Object(s.prefersReducedMotion)() ? "red-dot" : "blinking-dot",
                I = Object(b.a)(g("LiveLabel"), f, F({
                    translationKey: "Live updates"
                }), j({
                    name: A,
                    title: A
                }))(),
                T = Object(b.a)(g("LiveLabel"), f, F({
                    translationKey: "Live updates"
                }), j({
                    name: "red-dot",
                    title: "red-dot"
                }))(),
                x = Object(b.a)(g("LiveSportsLabel"), f, F({
                    translationKey: "Live Match"
                }), j({
                    name: A,
                    title: A
                }))(),
                P = Object(b.a)(g("LiveSportsLabel"), f, F({
                    translationKey: "Live Match"
                }), j({
                    name: "red-dot",
                    title: "red-dot"
                }))(),
                z = Object(b.a)(g("OpinionLabel"), f, N, Q({
                    getLink: () => "/opinion/",
                    ariaLabel: "Opinion Article"
                }), F({
                    translationKey: "Opinion Article",
                    deemphasize: !0
                }))(),
                D = Object(b.a)(g("PodcastLabel"), f, y(e => {
                    var t;
                    let {
                        series: a = []
                    } = e;
                    return Object(U.c)("span", {
                        className: "post-label__text"
                    }, " " + (null === (t = a[0]) || void 0 === t ? void 0 : t.name))
                }), F({
                    translationKey: "From the episode",
                    deemphasize: !0
                }))(),
                E = Object(b.a)(g("StandardFeaturedTaxonomyImageLabelItem"), Q({
                    getLink: e => {
                        let {
                            label: t
                        } = e;
                        return t.featuredActionLink
                    }
                }), y(e => {
                    let {
                        label: t,
                        isAmp: a = !1
                    } = e;
                    return Object(u.b)(t.featuredTaxonomyImage, a, "post-label__image")
                }))(),
                H = Object(b.a)(g("StandardFeaturedTaxonomyImageLabel"), f, y(e => {
                    var t;
                    return Object(U.c)(l.Fragment, null, null === (t = e.customContent) || void 0 === t ? void 0 : t.filter(S).map((t, a) => {
                        const i = E;
                        return Object(U.c)(i, Object(n.a)({}, e, {
                            label: t,
                            key: a
                        }))
                    }))
                }))(),
                Z = e => {
                    let {
                        label: t
                    } = e;
                    return Object(b.a)(g("StandardLabelItem"), Q({
                        getLink: () => t.featuredActionLink,
                        ariaLabel: t.name
                    }), y(() => {
                        var e;
                        return Object(U.c)("span", {
                            className: "post-label__text"
                        }, null === (e = t.name) || void 0 === e ? void 0 : e.toUpperCase())
                    }))()
                },
                J = Object(b.a)(g("StandardLabel"), f)((function() {
                    var e;
                    let {
                        className: t,
                        ...a
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return null === (e = a.customContent) || void 0 === e ? void 0 : e.map((e, t) => {
                        const i = Z({
                            label: e
                        });
                        return Object(U.c)(i, Object(n.a)({}, a, {
                            key: t
                        }))
                    })
                })),
                W = Object(b.a)(g("SeriesLink"), Q({
                    getLink: function() {
                        var e;
                        let {
                            series: t = []
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return null === (e = t[0]) || void 0 === e ? void 0 : e.link
                    }
                }))((function() {
                    var e;
                    let {
                        series: t = []
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return null === (e = t[0]) || void 0 === e ? void 0 : e.name
                }));
            var G = {
                ajmBlogs: w,
                ajaBlogs: _,
                blog: C,
                breaking: V,
                developing: L,
                externalArticle: R,
                featuredSource: e => {
                    var t;
                    return Object(U.c)(l.Fragment, null, null === (t = e.featuredSource) || void 0 === t ? void 0 : t.filter(S).map((t, a) => {
                        const i = M;
                        return Object(U.c)(i, Object(n.a)({}, e, {
                            source: t,
                            key: a
                        }))
                    }))
                },
                live: I,
                "live-amp": T,
                "live-sports": x,
                "live-sports-amp": P,
                opinion: z,
                podcast: D,
                standardFeaturedTaxonomyImage: H,
                standard: J,
                standardSeries: Object(b.a)(g("StandardSeriesLabel"), f)(e => {
                    var t;
                    let {
                        className: a,
                        ...i
                    } = e;
                    return null === (t = i.customContent) || void 0 === t ? void 0 : t.map((e, t) => {
                        const a = (e => {
                            let {
                                label: t
                            } = e;
                            return Object(b.a)(g("StandardSeriesLabelIcon"), e => t => Object(U.c)(l.Fragment, null, Object(U.c)(e, t), Object(U.c)(W, t)), Q({
                                getLink: () => t.featuredActionLink,
                                ariaLabel: t.name
                            }))(() => {
                                var e;
                                return "" + (null === (e = t.name) || void 0 === e ? void 0 : e.toUpperCase())
                            })
                        })({
                            label: e
                        });
                        return Object(U.c)(a, Object(n.a)({}, i, {
                            key: t
                        }))
                    })
                }),
                midan: Object(b.a)(g("MidanLabel"), f, Q({
                    getLink: () => "/midan/"
                }), y(e => {
                    let {
                        isAmp: t = !1
                    } = e;
                    return Object(U.c)(d.a.Consumer, null, e => {
                        var a, n, i, c;
                        return t ? Object(U.c)("amp-img", {
                            src: null === (a = e.components) || void 0 === a || null === (n = a.CardMidan) || void 0 === n ? void 0 : n.icon,
                            alt: r.a.get("i18n").t("Midan logo"),
                            height: 20,
                            width: 67
                        }) : Object(U.c)("img", {
                            src: null === (i = e.components) || void 0 === i || null === (c = i.CardMidan) || void 0 === c ? void 0 : c.icon,
                            alt: r.a.get("i18n").t("Midan logo"),
                            loading: "lazy"
                        })
                    })
                }))()
            };
            a.d(t, "a", (function() {
                return X
            }));
            const Y = e => {
                    const t = (e => {
                            let {
                                breaking: t,
                                customContent: a,
                                developing: n,
                                featuredSource: i,
                                ignoreFeaturedSource: c,
                                live: l,
                                sports: r,
                                series: d,
                                type: u,
                                link: b,
                                isAmp: m
                            } = e;
                            return !c && Array.isArray(i) && i.filter(S).length > 0 ? "featuredSource" : l && r ? m ? "live-sports-amp" : "live-sports" : l ? m ? "live-amp" : "live" : t ? "breaking" : n ? "developing" : "opinion" === u ? "opinion" : "blog" === u ? Object(o.f)() ? "ajmBlogs" : Object(o.b)() ? "ajaBlogs" : "blog" : "podcast" === u && d.length > 0 ? "podcast" : Array.isArray(a) && a.length > 0 ? a.filter(S).length > 0 ? "standardFeaturedTaxonomyImage" : Array.isArray(d) && d.length > 0 ? "standardSeries" : "standard" : "external-article" !== u || Object(s.isWhitelistedArticle)(b) ? Object(o.b)() && (null === b || void 0 === b ? void 0 : b.startsWith("/midan/")) ? "midan" : null : "externalArticle"
                        })(e),
                        a = ((e, t, a) => c()({
                            "post-label": !0,
                            ["post-label--" + e]: k.includes(e),
                            ["post-label--" + t]: "medium" !== t
                        }, a))(t, e.size, e.className),
                        i = G[t];
                    return i ? Object(U.c)(i, Object(n.a)({}, e, {
                        className: a
                    })) : null
                },
                X = e => {
                    let {
                        article: t,
                        trackingLabel: a,
                        ignoreFeaturedSource: n = !1,
                        size: i = "medium",
                        className: c
                    } = e;
                    return Object(U.c)(Y, {
                        breaking: t.isBreaking,
                        customContent: t.postLabel,
                        developing: t.isDeveloping,
                        featuredSource: t.source,
                        live: t.isLive,
                        ignoreFeaturedSource: n,
                        series: t.series,
                        type: t.postType,
                        link: t.link,
                        label: a + " - Post Label",
                        eventTarget: t.link,
                        size: i,
                        className: c
                    })
                };
            Y.defaultProps = {
                breaking: !1,
                developing: !1,
                customContent: [],
                featuredSource: [],
                live: !1,
                series: [],
                size: "medium",
                type: void 0,
                link: "",
                isAmp: !1
            };
            t.b = Y
        },
        CnNu: function(e, t, a) {},
        Dbxf: function(e, t, a) {},
        DtxC: function(e, t, a) {
            "use strict";
            var n = a("AAFT"),
                i = a.n(n),
                c = a("VBdi"),
                l = a.n(c),
                o = a("MwNz"),
                s = (a("7DTm"), a("dVLG"));
            t.a = e => {
                var t, a, n;
                let {
                    showSwitchWarning: c
                } = e;
                const r = o.a.get("i18n"),
                    d = i()("live-stream__three-flash-warning", {
                        "live-stream__three-flash-warning--cc-warning": c,
                        "live-stream__three-flash-warning--hidden--homepage": null === (t = o.a.get("accessibility")) || void 0 === t || null === (a = t.homepage) || void 0 === a || null === (n = a.livestream) || void 0 === n ? void 0 : n.hideThreeFlashWarning
                    }),
                    u = c ? "status" : "note",
                    b = c ? "polite" : "off";
                return Object(s.c)("div", {
                    className: d,
                    role: u,
                    "aria-live": b
                }, c ? Object(s.c)(l.a.Fragment, null, Object(s.c)("span", null, "CC"), " We have switched you over to YouTube for closed captions on our livestream. Captions are auto-generated by YouTube and not reviewed for accuracy.") : r.t("Three flashes warning"))
            }
        },
        GQf0: function(e, t, a) {},
        HGQY: function(e, t, a) {},
        LDI1: function(e, t, a) {},
        N1Ii: function(e, t, a) {},
        Ncea: function(e, t, a) {
            "use strict";
            var n = a("VBdi"),
                i = a("9mJr"),
                c = a("MwNz"),
                l = a("xAi6"),
                o = a("9N7U"),
                s = a("Xr0k"),
                r = (a("U5aa"), a("dVLG"));
            t.a = e => {
                const [t, a] = Object(n.useState)(null), d = Object(o.getCanonicalUrl)(e.staticContext, "/search"), u = c.a.get("i18n"), b = c.a.get("pageTitle")(u.t("Search"));
                return Object(r.c)(n.Fragment, null, Object(r.c)(i.a, null, Object(r.c)("link", {
                    rel: "canonical",
                    href: d
                }), Object(r.c)("title", null, b), Object(r.c)("meta", {
                    name: "pageType",
                    content: "Search Page"
                }), Object(r.c)("meta", {
                    name: "pageLink",
                    content: "/search"
                })), Object(r.c)("main", {
                    className: "search-index",
                    id: l.BYPASS_CONTENT_TYPES.MAIN,
                    tabIndex: "-1",
                    "aria-label": u.t("Main content area")
                }, Object(r.c)("div", {
                    className: "container container--grid container--vertical-padding"
                }, Object(r.c)("div", {
                    className: "container__inner"
                }, Object(r.c)("div", {
                    className: "l-col l-col--12 search-index__meta"
                }, Object(r.c)("h1", null, u.t("Search"))), Object(r.c)("div", {
                    className: "search-index__search l-col l-col--12"
                }, Object(r.c)(s.a, {
                    match: e.match,
                    query: t || "",
                    overlay: !1,
                    visible: !1,
                    onChange: e => a(e),
                    onSearch: () => {
                        t && e.history && e.history.push("/search/" + t)
                    },
                    type: ""
                }))))))
            }
        },
        P1ag: function(e, t, a) {
            "use strict";
            var n = a("VBdi"),
                i = a("fWgI"),
                c = a("MwNz"),
                l = a("dVLG");
            var o = e => {
                    let {
                        a11yLoadingText: t
                    } = e;
                    return Object(l.c)("div", {
                        className: "screen-reader-text",
                        "aria-live": "assertive",
                        role: "status"
                    }, null !== t && void 0 !== t ? t : c.a.get("i18n").t("loading"))
                },
                s = a("CQi9");
            a("4sxZ");
            const r = e => {
                let {
                    isA11yLoadingAnnouncement: t,
                    a11yLoadingText: a,
                    cardCount: c,
                    contentAfter: s,
                    contentBefore: r,
                    CardComponent: d
                } = e;
                const u = Object(n.useRef)(),
                    b = Object(i.a)(u),
                    m = new Array(c).fill(0).map((e, t) => Object(l.c)(d, {
                        key: t
                    }));
                return Object(l.c)("div", {
                    className: "loading-cards",
                    "data-testid": "loading-cards",
                    ref: u
                }, t && b && Object(l.c)(o, {
                    a11yLoadingText: a
                }), r, m, s)
            };
            r.defaultProps = {
                cardCount: 3,
                CardComponent: s.a
            };
            t.a = r
        },
        Pj4E: function(e, t, a) {
            "use strict";
            var n = a("Miz2"),
                i = a("AAFT"),
                c = a.n(i),
                l = a("VBdi"),
                o = a("9mJr"),
                s = a("xAi6"),
                r = a("t19f"),
                d = (a("AvOm"), a("dVLG"));
            const u = e => {
                let {
                    alt: t,
                    className: a,
                    sizeNames: i,
                    sources: u,
                    url: b,
                    width: m,
                    height: h,
                    disableIntrinsicHeight: p,
                    nativeAspectRatio: v,
                    lazyLoading: O,
                    fetchPriority: U,
                    handleImageEnterEvent: g,
                    useTabIndex: F,
                    ariaLabel: j,
                    preload: B,
                    role: Q,
                    quality: f = s.DEFAULT_IMAGE_QUALITY_LEVEL
                } = e;
                const [y, N] = Object(l.useState)(1.3), S = c()("responsive-image", {
                    "responsive-image--disableIntrinsicHeight": p,
                    "responsive-image--aspect-ratio-2-3": v && y < .8,
                    "responsive-image--aspect-ratio-1": v && y < 1.1 && y > .9
                }), k = O ? "lazy" : "eager", {
                    largestUrl: w,
                    srcSet: _,
                    srcSizes: C
                } = Object(r.b)(b, m, h, u, i, f);
                return w && (b = w), Object(d.c)("div", {
                    className: S
                }, B && Object(d.c)(o.a, null, Object(d.c)("link", {
                    rel: "preload",
                    as: "image",
                    href: b,
                    imagesrcset: _.join(", "),
                    imagesizes: C.join(", "),
                    fetchpriority: "high"
                })), Object(d.c)("img", Object(n.a)({
                    className: a,
                    loading: k
                }, U ? {
                    fetchpriority: U
                } : {}, {
                    src: b,
                    srcSet: _.join(", "),
                    sizes: C.join(", "),
                    alt: t,
                    onLoad: e => {
                        var t;
                        t = e.target, N(t.naturalWidth / t.naturalHeight)
                    },
                    onError: e => {
                        e.target.style.display = "none"
                    }
                }, F ? {
                    tabIndex: "0"
                } : {}, "function" === typeof g ? {
                    onKeyUp: g
                } : {}, j ? {
                    "aria-label": j
                } : {}, Q ? {
                    role: Q
                } : {})))
            };
            u.defaultProps = {
                disableIntrinsicHeight: !1,
                nativeAspectRatio: !1,
                lazyLoading: !0,
                handleImageEnterEvent: !1,
                useTabIndex: !1
            }, t.a = u
        },
        RAHs: function(e, t, a) {
            "use strict";
            var n = a("AAFT"),
                i = a.n(n),
                c = a("VBdi"),
                l = a.n(c),
                o = a("ekvm"),
                s = a("xAi6"),
                r = a("Miz2"),
                d = a("Ot6i"),
                u = a("MwNz"),
                b = a("8Ffx"),
                m = a("L4dX"),
                h = a("kXcp"),
                p = a("pbOP"),
                v = a("9N7U"),
                O = a("w8RO"),
                U = a("8+YW"),
                g = (a("+ZFZ"), a("dVLG"));
            class F extends l.a.Component {
                constructor(e) {
                    super(e), this.menuElement = l.a.createRef(), this.state = {
                        isMobile: o.a.isMobile()
                    }
                }
                shouldComponentUpdate(e) {
                    return e.item.url !== this.props.item.url || e.item.title !== this.props.item.title || e.isSubMenuOpen !== this.props.isSubMenuOpen
                }
                toggleNavOpen() {
                    const {
                        onToggleSubMenu: e,
                        item: t,
                        isSubMenuOpen: a
                    } = this.props, n = this.menuElement.current.getElementsByClassName("menu__submenu");
                    if (null === n || void 0 === n ? void 0 : n[0]) {
                        if ("visible" === getComputedStyle(n[0]).visibility && !a) return
                    }
                    e && e(a ? -1 : t.id)
                }
                closeOtherMenus(e, t) {
                    var a;
                    if (Object(m.a)(m.b), e && this.props.onToggleSubMenu) return this.props.onToggleSubMenu(null), "#cookiesPreferences" === e.url ? (t.preventDefault(), void Object(v.openCookiePreferences)()) : (null === (a = e.url) || void 0 === a ? void 0 : a.toLowerCase().includes(".pdf")) ? (t.preventDefault(), void window.open(e.url, "_self")) : void(e.onClick && e.onClick(t))
                }
                handleMenuItemOnBlur(e) {
                    const {
                        isSubMenuOpen: t
                    } = this.props;
                    this.state.isMobile || !t || e.relatedTarget || this.toggleNavOpen(), !this.state.isMobile && t && null !== e.relatedTarget && null !== e.relatedTarget.parentElement && (["menu__item", "menu__submenu"].some(t => e.relatedTarget.parentElement.classList.contains(t)) || this.toggleNavOpen())
                }
                closeOtherMenusOnFocus(e, t) {
                    this.props.isNavOpen && !this.state.isMobile && this.closeOtherMenus(t, e)
                }
                isHeaderMenu() {
                    var e;
                    const {
                        menuName: t
                    } = this.props, a = null === (e = this.menuElement.current) || void 0 === e ? void 0 : e.getElementsByClassName("menu__submenu");
                    return (null === a || void 0 === a ? void 0 : a[0]) && t === s.MENU_NAME_HEADER && !this.state.isMobile
                }
                toggleAccessibleVisibility(e) {
                    const {
                        isSubMenuOpen: t
                    } = this.props;
                    if (t || this.state.isMobile) return;
                    const a = this.menuElement.current.getElementsByClassName("menu__submenu");
                    if (!(null === a || void 0 === a ? void 0 : a[0])) return;
                    switch (getComputedStyle(a[0]).visibility) {
                        case "visible":
                            var n;
                            if (e) null === (n = this.menuElement.current.classList) || void 0 === n || n.add("force-hide-submenu");
                            break;
                        case "hidden":
                            var i;
                            if (!e) null === (i = this.menuElement.current.classList) || void 0 === i || i.remove("force-hide-submenu")
                    }
                }
                handleEscapeKeyPress() {
                    const {
                        onToggleSubMenu: e
                    } = this.props, t = t => {
                        let {
                            key: a
                        } = t;
                        "Escape" === a && (this.toggleAccessibleVisibility(!0), e && e(-1))
                    };
                    window.addEventListener("keydown", t), this.removeEscapeKeyPressHandler = () => {
                        window.removeEventListener("keydown", t)
                    }
                }
                componentDidMount() {
                    this.isHeaderMenu() && this.handleEscapeKeyPress()
                }
                componentWillUnmount() {
                    this.isHeaderMenu() && this.removeEscapeKeyPressHandler()
                }
                render() {
                    var e, t;
                    const {
                        isNavOpen: a,
                        isSubMenuOpen: n,
                        label: l,
                        isSubMenu: o,
                        darkMode: s
                    } = this.props, v = Object.assign({}, this.props.item), F = null === (e = v.children) || void 0 === e ? void 0 : e.length, j = u.a.get("i18n");
                    let B = j.t("Show more");
                    "News" === v.title ? B = j.t("Show more news sections") : "More" === v.title && (B = j.t("Show more sections"));
                    const Q = i()("menu__item", "menu__item--" + Object(p.a)(), v.classes, {
                        "menu__item--current": v.isActive,
                        "menu__item--has-submenu": null === (t = v.children) || void 0 === t ? void 0 : t.length,
                        "menu__item--submenu-open": n
                    });
                    return !F && v.url && v.url.includes(".xml") && (v.target = "_blank"), Object(h.b)("subscription-form") && "<subscribe-button>" === v.title ? Object(g.c)("li", {
                        className: Q
                    }, Object(g.c)(U.a, {
                        title: v.attr,
                        to: v.url,
                        className: "header-subscribe-button",
                        onClick: () => Object(m.a)(m.b),
                        label: "Menu Subscribe"
                    }, j.t("Subscribe"))) : Object(g.c)("li", {
                        className: Q,
                        ref: this.menuElement,
                        onClick: () => F && this.toggleNavOpen(),
                        "data-testid": o ? "sub-menu-item" : "menu-item",
                        onMouseLeave: () => {
                            !this.state.isMobile && n && this.toggleNavOpen(), this.isHeaderMenu() && this.toggleAccessibleVisibility(!1)
                        },
                        onBlur: e => {
                            this.handleMenuItemOnBlur(e)
                        }
                    }, v.url && "#" !== v.url ? Object(g.c)(U.a, Object(r.a)({
                        to: v.url
                    }, v.target && {
                        target: v.target
                    }, {
                        title: v.attr,
                        eventTarget: v.title,
                        label: l,
                        onClick: e => this.closeOtherMenus(v, e),
                        onFocus: e => this.closeOtherMenusOnFocus(e, v),
                        analyticsMetaProps: Object(d.d)({
                            recirculationSource: "Navigation"
                        })
                    }), Object(g.c)("span", {
                        dangerouslySetInnerHTML: {
                            __html: Object(b.b)(v.title)
                        }
                    }), "#cookiesPreferences" === v.url && Object(g.c)("span", {
                        className: "ot-sdk-show-settings",
                        style: {
                            display: "none"
                        }
                    })) : v.onClick ? Object(g.c)("button", {
                        title: v.attr,
                        onClick: e => this.closeOtherMenus(v, e),
                        onFocus: e => this.closeOtherMenusOnFocus(e, v)
                    }, v.title) : Object(g.c)("button", {
                        onClick: () => !F && Object(m.a)(m.b),
                        onFocus: e => this.closeOtherMenusOnFocus(e, v),
                        className: "no-styles-button"
                    }, v.title), F ? Object(g.c)(c.Fragment, null, Object(g.c)("button", {
                        "aria-expanded": n,
                        className: "no-styles-button expand-button"
                    }, Object(g.c)(O.a, {
                        title: "",
                        name: "caret-down",
                        color: s ? "white" : "grey",
                        size: 16
                    }), Object(g.c)("span", {
                        className: "screen-reader-text"
                    }, B)), Object(g.c)("div", {
                        className: "submenu_wrapper"
                    }, Object(g.c)(S, {
                        menu: v.children,
                        isNavOpen: a,
                        label: l,
                        isSubMenu: !0
                    }))) : null)
                }
            }
            F.defaultProps = {
                isSubMenuOpen: !1,
                menuName: s.MENU_NAME_HEADER
            };
            var j = F,
                B = a("3/Xq"),
                Q = a("d4yW"),
                f = a("N4w9");
            a("qs/g");
            var y = e => {
                let {
                    onChange: t,
                    onSearch: a,
                    query: n
                } = e;
                return Object(g.c)(f.a.Consumer, null, e => Object(g.c)(l.a.Fragment, null, Object(g.c)("li", {
                    className: "menu__item menu__item__search",
                    "data-testid": "search-menu-item"
                }, Object(g.c)("form", {
                    onSubmit: e => {
                        e.preventDefault(), a && a()
                    },
                    role: "search"
                }, Object(g.c)(B.a, null, e => Object(g.c)("div", {
                    className: "menu__item__search__wrapper"
                }, Object(g.c)("input", {
                    type: "text",
                    placeholder: e("Search"),
                    value: n,
                    onChange: e => t(e.target.value),
                    role: "searchbox"
                }), Object(g.c)("div", {
                    className: "search-bar__icon"
                }, Object(g.c)("button", {
                    type: "submit",
                    disabled: !n
                }, Object(g.c)(O.a, {
                    name: "search",
                    color: "grey",
                    size: 32
                })))))), Object(g.c)(B.a, null, e => Object(g.c)("span", {
                    className: "google-recaptcha-policy",
                    "aria-hidden": "true"
                }, Object(g.c)(Q.a, null, e("Protected by reCAPTCHA")))))))
            };
            a("pEGF");
            const N = e => {
                let {
                    classes: t,
                    menu: a,
                    onSearchQueryChange: n,
                    onSearch: l,
                    showSearch: s,
                    query: r,
                    isNavOpen: d,
                    label: u,
                    menuName: b,
                    isSubMenu: m,
                    darkMode: h
                } = e;
                const p = Object(c.useRef)(0),
                    v = Object(c.useRef)(null),
                    [O, U] = Object(c.useState)(-1);
                Object(c.useEffect)(() => {
                    o.a.isMobile() && d && (v.current.scrollTop = p.current)
                }, [O]);
                const F = i()("menu", {
                    menu__submenu: m
                }, t);
                return Object(g.c)("ul", {
                    ref: v,
                    className: F,
                    onScroll: () => p.current = v.current.scrollTop
                }, s && o.a.isMobile() && Object(g.c)(y, {
                    key: "search-menu-item",
                    onChange: n,
                    onSearch: l,
                    query: r
                }), a.map(e => Object(g.c)(j, {
                    key: e.title,
                    item: e,
                    isSubMenuOpen: e.id === O,
                    isNavOpen: d,
                    onToggleSubMenu: e => U(e),
                    label: u,
                    menuName: b,
                    isSubMenu: !0,
                    darkMode: h
                })))
            };
            N.defaultProps = {
                menu: [],
                classes: [],
                menuName: s.MENU_NAME_HEADER,
                onSearch: () => {},
                onSearchQueryChange: () => {},
                showSearch: !1,
                query: void 0
            };
            var S = t.a = N
        },
        U5aa: function(e, t, a) {},
        Uw04: function(e, t, a) {
            "use strict";
            var n = a("VBdi"),
                i = a("96Qw"),
                c = a("Uwtw"),
                l = a("MwNz"),
                o = a("N4w9"),
                s = a("oBzm"),
                r = a("P/sV"),
                d = a("ekvm"),
                u = a("xAi6"),
                b = a("pbOP"),
                m = a("9N7U"),
                h = a("D9ji"),
                p = a("w8RO"),
                v = (a("GQf0"), a("dVLG"));
            t.a = e => {
                let {
                    isAmp: t
                } = e;
                const a = Object(r.a)(),
                    O = l.a.get("i18n"),
                    [U, g] = Object(n.useState)(!0),
                    F = Object(s.c)();
                let j = Object(n.useContext)(o.b);
                Object(m.isProductionEnv)() || (j = u.APP_BANNER_PROD_DOMAINS[Object(b.a)()]);
                const B = Object(i.useLocation)();
                let Q = j + B.pathname;
                const f = {
                        utm_source: "web",
                        utm_medium: Object(b.a)(),
                        utm_campaign: "app_install_banner"
                    },
                    y = (N = u.MAIN_DEEP_LINK_URL + Q, S = f, (N += -1 === N.indexOf("?") ? "?" : "&") + new URLSearchParams(S).toString());
                var N, S;
                Object(n.useEffect)(() => {
                    Q = j + B.pathname, g(!0)
                }, [B]);
                const k = Object(n.useCallback)(() => {
                    let e = !1,
                        t = Object(h.f)("visitCount");
                    if (t || (t = 0), t++, t > 2) {
                        const t = Date.now(),
                            a = Object(h.f)("appDownloadBannerClosedAt");
                        (!a || parseInt(a) + 1296e6 < t) && (e = !0, F.setIsAppDownloadBannerVisible(!0))
                    }
                    return Object(h.a)("visitCount", t), e
                }, []);
                if (d.a.isIOSSafari()) return null;
                if ((!Object(h.d)() || !a || !U || !k()) && !t) return null;
                return Object(v.c)("div", {
                    className: "app-download-banner",
                    "data-amp-bind-hidden": "showDownloadAppBanner"
                }, Object(v.c)("div", {
                    className: "banner-content"
                }, Object(v.c)("div", {
                    className: "banner-close-button-wrapper"
                }, Object(v.c)("button", {
                    className: "banner-close-button",
                    onClick: () => (Object(h.a)("appDownloadBannerClosedAt", Date.now()), Object(h.a)("visitCount", 0), g(!1), void F.setIsAppDownloadBannerVisible(!1)),
                    type: "button",
                    "aria-label": O.t("Close mobile app download banner"),
                    on: "tap:AMP.setState({showDownloadAppBanner: !showDownloadAppBanner})"
                }, Object(v.c)(p.a, {
                    name: "close",
                    color: "black",
                    size: 12
                }))), Object(v.c)("div", {
                    className: "banner-icon"
                }, Object(v.c)(c.d, {
                    color: "#20144c"
                })), Object(v.c)("div", {
                    className: "banner-description"
                }, Object(v.c)("div", {
                    className: "banner-name"
                }, O.t("Al Jazeera")), Object(v.c)("div", {
                    className: "banner-text"
                }, O.t("View on Al Jazeera App")))), Object(v.c)("div", {
                    className: "banner-button-wrapper"
                }, Object(v.c)("a", {
                    className: "banner-button",
                    href: y
                }, O.t("View in App"))))
            }
        },
        Uwtw: function(e, t, a) {
            "use strict";
            a.d(t, "d", (function() {
                return c
            })), a.d(t, "b", (function() {
                return l
            })), a.d(t, "c", (function() {
                return o
            })), a.d(t, "g", (function() {
                return s
            })), a.d(t, "e", (function() {
                return r
            })), a.d(t, "f", (function() {
                return d
            })), a.d(t, "a", (function() {
                return u
            }));
            a("VBdi"), a("ZE3e");
            var n = a("dVLG");
            const i = () => Object(n.c)("path", {
                    d: "M34.05 48.03c-.07.03-.1.16-.05.33l.33.87c.2.53.52 1.15.97 1.46.47.34.72.22.81.18.07-.04.38-.22.27-.7a3 3 0 00-.28-.85c-.09-.18-.22-.3-.29-.27-.04 0 0 .18 0 .28-.01.2-.08.33-.23.4-.14.06-.48.18-.74-.28-.22-.38-.4-.87-.49-1.08-.06-.15-.16-.34-.26-.34h-.04zm-7.45 1.38l1.58 1.32 1.54-1.87-1.58-1.32-1.54 1.87zm.35-3.26l1.58 1.31 1.55-1.86-1.59-1.32-1.54 1.87zm10.12-4.6l1.86.88 1.02-2.2-1.85-.88-1.03 2.2zM27.44 40a12.75 12.75 0 003.35 4.63c.14-.97.3-1.65.44-2.13-1.4-1-2.4-2.1-3.04-3.18l-.75.68zm3.53-2.35l1.86.88 1.03-2.2-1.86-.88-1.03 2.2zm-8.99-8.75s-1.16.83-1.62 1.92c-.29.67-.27 1.4-.1 1.75.16.35.54.68 1.05.28.35-.28.5-.68.58-1.01.05-.2.06-.33.06-.43 0-.12-.04-.22-.16-.2-.33.11-.13.57-.37.79-.18.1-.66.05-.75-.42-.1-.47.27-1.07.6-1.47.32-.4.9-.92.9-.92s.4-.34.26-.51l-.03-.01c-.12 0-.42.23-.42.23zm11.44-1.21l-1.44 1.57-1.23 1.35c-.27.3-.41.6-.38.76l.17.82c.04-.15.21-.43.4-.64l1.44-1.58 1.23-1.35c.27-.3.42-.6.38-.76l-.17-.81c-.04.15-.21.42-.4.64zm-15.5 11.84c.23-.72.64-1.37 1.36-1.78 1.17-.55 1.63.86 1.63.86-.08.95-.8 1.45-1.6 1.45a2.1 2.1 0 01-1.39-.53zm8.74-22.88c-.8.02-1.43.7-1.4 1.5.02.8.69 1.43 1.48 1.4.44 0 .82-.22 1.08-.52l.03-.04c.17 1.16-.39 2.08-1.67 3.15-1.31 1.12-4.39 2.56-6.57 4.3a9.8 9.8 0 00-3.67 10.51 13.95 13.95 0 00.87 2.44c-.08 1.42.06 3.9.86 5.79 1.07 2.42 3 4.4 5.77 3.82 2.8-.66 3.11-5.22 3.43-8.55.09-.55.17-.65.34-.79.44-.38 1.53-1.4 2.05-1.86.33-.29.6-.57.79-.94.23-.44.1-1.02.1-1.02l-.3-2.2c-.09.31-.47.75-1 1.29-.56.56-2.04 1.84-2.18 1.98-.13.14-.61.5-.82 2.17-.54 4.55-1.43 6.7-3.04 7.43-.42.2-.9.3-1.42.3-2.95-.02-3.72-3.62-3.7-5.59v-.34c.69.92 1.7 1.84 2.94 1.65 1.99-.3 1.37-3.67 1.08-4.45-.28-.78-1.05-3.13-2.72-3.01-1.18.08-1.73 1.47-1.98 2.64a9.51 9.51 0 01-.27-2.86c.17-2.04.87-4.58 3.82-7.08 2.1-1.78 4.48-3.06 5.8-4.1a5.35 5.35 0 001.67-2.12 9.6 9.6 0 01-.58 2.27c-1.22 3.23-4.93 8.57-4.98 16.1 0 2.32.22 4.32.59 6.03.2-.13.38-.32.56-.53-.25-1.23-.4-2.58-.4-4.03 0-7.52 3.68-12.84 4.88-16.07.63-1.7.65-2.93.65-4.15a9.9 9.9 0 00-.64-3.68c-.34-.58-.76-.84-1.38-.84h-.07zm3.62-10.3c-.74.51-1.36 1.7-1.36 3.5.01 1.1.32 2.43 1.17 3.92-1.14 1.56-1.35 3-.87 4.38.37 1.05.56 1.32.73 1.95.42 1.6-.05 3.5-1.3 6.46-1.02 2.4-2.34 4.92-2.34 7.98 0 .7.06 1.39.16 2.06l.68-.64c-.15-2.4.8-4.81 1.97-6.98 1.7-3.17 1.92-6.39 1.59-8.15 1.2 1.28 3.21 3.2 4.39 5.16.4.66.63 1.29.7 1.93a5.05 5.05 0 01-1.39 3.76c-.8.92-.53 1.73-.5 1.9.07.25.4 1.26.63 1.91.89-1.75 3.35-2.73 4.47-4.19.25 1.8-1.1 3.5-2.09 4.64-.24.26-.5.52-.8.8-1.88 1.82-3.12 3.06-3.78 4.22-.17.26-.44.83-.58 1.27-.19.56-.43 1.5-.64 3.15-.16.98-.33 2.14-.4 2.66-.12 1.19-.47 3.06-1.92 3.6l-.24.06v.01c-1.38.3-2.8-.86-3.82-2.94-.21.16-.45.3-.7.42 1.4 3.3 3.5 4.81 5.33 4.81 1.39 0 2.49-.7 2.84-2.75.18-1.03.3-2.18.42-3.29.06-.53.32-3.55.8-4.65.6-1.23 1.92-2.41 3.87-4.43 1.2-1.25 1.86-2.3 2.2-3.14 1.14-2.08-.26-7.04-.54-7.94 0-.03 0-.04-.03-.04s-.03.01-.05.05l-.02.02A8.6 8.6 0 0136.63 30c.47-1.29.34-2.27.15-3.1l-.03-.15c-.85-3.29-4.21-6.22-5.72-7.9-1.97-2.2-1.3-3.6-.58-4.5l.44.63c2.68 3.64 7.72 9.41 10.37 14.91a18.46 18.46 0 011.46 4.06c1.05 5.7-2.92 11.49-8.87 9.86l-.12-.03c-.16.5-.31 1.31-.46 2.41.9.39 1.88.62 2.83.66h.2c4.9.06 8.72-3.6 8.02-11.3 0 0-.3-3.2-1.95-6.58-2.65-5.92-7.54-11.78-10.54-15.57a10.05 10.05 0 01-1.8-3.14c-.56-1.75-.2-3.11.52-3.7.16-.13.35-.28.53-.37.1-.06.06-.18-.01-.2H31c-.1 0-.31.05-.72.34zm-5.5 12.8c-.8.02-1.42.69-1.4 1.5a1.45 1.45 0 102.9-.1 1.45 1.45 0 00-1.45-1.4h-.05z",
                    fill: "#FFF"
                }),
                c = e => {
                    let {
                        color: t,
                        viewBox: a = "0 0 60 60"
                    } = e;
                    return Object(n.c)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: a
                    }, Object(n.c)("g", {
                        fill: "none"
                    }, Object(n.c)("path", {
                        fill: t,
                        d: "M0 0h60v60H0z"
                    }), Object(n.c)(i, null)))
                },
                l = () => Object(n.c)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 133 48"
                }, Object(n.c)("g", {
                    fill: "#FFF"
                }, Object(n.c)("path", {
                    d: "M18.45 42.03c-.07.03-.1.16-.05.33l.33.87c.2.53.52 1.15.97 1.46.47.34.72.22.81.18.07-.04.38-.22.27-.7a3 3 0 00-.28-.85c-.09-.18-.22-.3-.29-.27-.04 0 0 .18 0 .28-.01.2-.08.33-.23.4-.14.06-.48.18-.74-.28-.22-.38-.4-.87-.49-1.08-.06-.15-.16-.34-.26-.34h-.04zM11 43.41l1.58 1.32 1.54-1.87-1.58-1.32L11 43.41zm.35-3.26l1.58 1.31 1.55-1.86-1.59-1.32-1.54 1.87zm10.12-4.6l1.86.88 1.02-2.2-1.85-.88-1.03 2.2zM11.84 34a12.75 12.75 0 003.35 4.63c.14-.97.3-1.65.44-2.13-1.4-1-2.4-2.1-3.04-3.18l-.75.68zm3.53-2.35l1.86.88 1.03-2.2-1.86-.88-1.03 2.2zM6.38 22.9s-1.16.83-1.62 1.92c-.29.67-.27 1.4-.1 1.75.16.35.54.68 1.05.28.35-.28.5-.68.58-1.01.05-.2.06-.33.06-.43 0-.12-.04-.22-.16-.2-.33.11-.13.57-.37.79-.18.1-.66.05-.75-.42-.1-.47.27-1.07.6-1.47.32-.4.9-.92.9-.92s.4-.34.26-.51l-.03-.01c-.12 0-.42.23-.42.23zm11.44-1.21l-1.44 1.57-1.23 1.35c-.27.3-.41.6-.38.76l.17.82c.04-.15.21-.43.4-.64l1.44-1.58 1.23-1.35c.27-.3.42-.6.38-.76l-.17-.81c-.04.15-.21.42-.4.64zM2.32 33.53c.23-.72.64-1.37 1.36-1.78 1.17-.55 1.63.86 1.63.86-.08.95-.8 1.45-1.6 1.45a2.1 2.1 0 01-1.39-.53zm8.74-22.88c-.8.02-1.43.7-1.4 1.5.02.8.69 1.43 1.48 1.4.44 0 .82-.22 1.08-.52l.03-.04c.17 1.16-.39 2.08-1.67 3.15-1.31 1.12-4.39 2.56-6.57 4.3A9.8 9.8 0 00.34 30.95a13.95 13.95 0 00.87 2.44c-.08 1.42.06 3.9.86 5.79 1.07 2.42 3 4.4 5.77 3.82 2.8-.66 3.11-5.22 3.43-8.55.09-.55.17-.65.34-.79.44-.38 1.53-1.4 2.05-1.86.33-.29.6-.57.79-.94.23-.44.1-1.02.1-1.02l-.3-2.2c-.09.31-.47.75-1 1.29-.56.56-2.04 1.84-2.18 1.98-.13.14-.61.5-.82 2.17-.54 4.55-1.43 6.7-3.04 7.43-.42.2-.9.3-1.42.3-2.95-.02-3.72-3.62-3.7-5.59v-.34c.69.92 1.7 1.84 2.94 1.65 1.99-.3 1.37-3.67 1.08-4.45-.28-.78-1.05-3.13-2.72-3.01-1.18.08-1.73 1.47-1.98 2.64a9.51 9.51 0 01-.27-2.86c.17-2.04.87-4.58 3.82-7.08 2.1-1.78 4.48-3.06 5.8-4.1a5.35 5.35 0 001.67-2.12 9.6 9.6 0 01-.58 2.27c-1.22 3.23-4.93 8.57-4.98 16.1 0 2.32.22 4.32.59 6.03.2-.13.38-.32.56-.53-.25-1.23-.4-2.58-.4-4.03 0-7.52 3.68-12.84 4.88-16.07.63-1.7.65-2.93.65-4.15a9.9 9.9 0 00-.64-3.68c-.34-.58-.76-.84-1.38-.84h-.07zM14.68.35c-.74.51-1.36 1.7-1.36 3.5.01 1.1.32 2.43 1.17 3.92-1.14 1.56-1.35 3-.87 4.38.37 1.05.56 1.32.73 1.95.42 1.6-.05 3.5-1.3 6.46-1.02 2.4-2.34 4.92-2.34 7.98 0 .7.06 1.39.16 2.06l.68-.64c-.15-2.4.8-4.81 1.97-6.98 1.7-3.17 1.92-6.39 1.59-8.15 1.2 1.28 3.21 3.2 4.39 5.16.4.66.63 1.29.7 1.93a5.05 5.05 0 01-1.39 3.76c-.8.92-.53 1.73-.5 1.9.07.25.4 1.26.63 1.91.89-1.75 3.35-2.73 4.47-4.19.25 1.8-1.1 3.5-2.09 4.64-.24.26-.5.52-.8.8-1.88 1.82-3.12 3.06-3.78 4.22-.17.26-.44.83-.58 1.27-.19.56-.43 1.5-.64 3.15-.16.98-.33 2.14-.4 2.66-.12 1.19-.47 3.06-1.92 3.6l-.24.06v.01c-1.38.3-2.8-.86-3.82-2.94-.21.16-.45.3-.7.42 1.4 3.3 3.5 4.81 5.33 4.81 1.39 0 2.49-.7 2.84-2.75.18-1.03.3-2.18.42-3.29.06-.53.32-3.55.8-4.65.6-1.23 1.92-2.41 3.87-4.43 1.2-1.25 1.86-2.3 2.2-3.14 1.14-2.08-.26-7.04-.54-7.94 0-.03 0-.04-.03-.04s-.03.01-.05.05l-.02.02A8.6 8.6 0 0121.03 24c.47-1.29.34-2.27.15-3.1l-.03-.15c-.85-3.29-4.21-6.22-5.72-7.9-1.97-2.2-1.3-3.6-.58-4.5l.44.63C17.97 12.63 23 18.4 25.66 23.9a18.46 18.46 0 011.46 4.06c1.05 5.7-2.92 11.49-8.87 9.86l-.12-.03c-.16.5-.31 1.31-.46 2.41.9.39 1.88.62 2.83.66h.2c4.9.06 8.72-3.6 8.02-11.3 0 0-.3-3.2-1.95-6.58-2.65-5.92-7.54-11.78-10.54-15.57a10.05 10.05 0 01-1.8-3.14c-.56-1.75-.2-3.11.52-3.7.16-.13.35-.28.53-.37.1-.06.06-.18-.01-.2h-.07c-.1 0-.31.05-.72.34zm-5.5 12.8c-.8.02-1.42.69-1.4 1.5a1.45 1.45 0 102.9-.1 1.45 1.45 0 00-1.45-1.4h-.05zM85.71 21.06V18h-8.18v2.63h4.2l-4.33 6.3V30h8.4v-2.65h-4.41l4.32-6.29zm29.22 1.35c-.17.23-.41.33-.98.39h-1.15v-2.4h.89l.21.02c.46.01.65.07.85.21.5.32.61 1.2.18 1.78zm2.78 3.24c-.46-1.06-.62-1.28-1.06-1.48a1 1 0 00.21-.09c1.36-.61 2.02-2.16 1.5-3.88-.42-1.42-1.53-2.2-3.63-2.2h-4.93v12h3.13v-4.49h.71c.5 0 .81.22 1.08.86l.16.38.1.22 1.18 3.03h3.24l-1.52-3.93c-.06-.15-.1-.28-.17-.42zm7.09-.45l1.2-3.6 1.2 3.6h-2.4zm2.9-7.2h-3.5L120 30h3.18l.7-2.2h4.07l.69 2.2H132l-4.3-12zm-59.9 7.2l1.2-3.6 1.2 3.6h-2.4zm-.6-7.2L63 30h3.17l.72-2.2h4.05l.7 2.2H75l-4.3-12h-3.5zm-27.6 7.2l1.2-3.6 1.2 3.6h-2.4zM39 18l-4.2 12h3.17l.72-2.2h4.05l.7 2.2h3.36l-4.3-12H39zm63.17 7.37h4.13v-2.56h-4.13v-2.18h4.8V18H99v12h8.4v-2.55h-5.23v-2.08zm-10.8 0h4.14v-2.56h-4.15v-2.18h4.82V18H88.2v12h8.4v-2.55h-5.24v-2.08zm-33.15 4.1c0 1.87-.65 2.55-2.08 2.12a1.05 1.05 0 01-.23-.08l-.71 2.66.49.22c3.33 1.3 5.51-.63 5.51-4.04V18h-2.98v11.47zm-2.42-2.15h-3.96V18H48.6v12h7.2v-2.68z"
                }))),
                o = () => Object(n.c)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 41 59"
                }, Object(n.c)("defs", null, Object(n.c)("filter", {
                    id: "a"
                }, Object(n.c)("feColorMatrix", { in: "SourceGraphic",
                    values: "0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
                }))), Object(n.c)("g", {
                    fill: "none"
                }, Object(n.c)("g", {
                    filter: "url(#a)"
                }, Object(n.c)("path", {
                    d: "M21.47 52.13v-1.3h-3.45v1.12h1.78l-1.83 2.69v1.31h3.54v-1.13h-1.86l1.82-2.69zm12.33.58c-.07.1-.17.14-.41.16h-.49v-1.02h.47c.19.01.27.04.35.1.22.13.26.5.08.76zm1.17 1.38c-.19-.45-.26-.54-.44-.63.03 0 .06-.02.09-.04.57-.26.85-.92.63-1.66-.18-.6-.65-.94-1.53-.94h-2.08v5.13h1.31v-1.92h.3c.22 0 .35.1.46.37l.07.16.04.1.5 1.29h1.37l-.65-1.68-.07-.18zm3-.19l.5-1.54.5 1.54h-1zm1.22-3.08H37.7l-1.77 5.13h1.34l.3-.94h1.71l.3.94H41l-1.81-5.13zM13.92 53.9l.5-1.54.51 1.54h-1.01zm-.25-3.08l-1.77 5.13h1.33l.3-.94h1.71l.3.94h1.42l-1.81-5.13h-1.48zM2.02 53.9l.51-1.54.5 1.54h-1zm-.25-3.08L0 55.95h1.34l.3-.94h1.71l.3.94h1.41l-1.8-5.13H1.76zm26.65 3.15h1.74v-1.1h-1.74v-.92h2.02v-1.13h-3.36v5.13h3.54v-1.09h-2.2v-.89zm-4.56 0h1.75v-1.1h-1.75v-.92h2.03v-1.13h-3.37v5.13h3.55v-1.09h-2.21v-.89zM9.88 55.72c0 .8-.27 1.1-.88.91a.44.44 0 01-.1-.04l-.3 1.14.21.1c1.4.55 2.33-.28 2.33-1.73v-5.28H9.88v4.9zm-1.02-.91H7.19v-3.99H5.82v5.13h3.04v-1.14z",
                    fill: "#FFF"
                })), Object(n.c)("path", {
                    d: "M24.81 41.89c-.07.03-.1.15-.05.32l.32.87c.2.53.52 1.14.96 1.46.47.33.71.22.8.18.08-.04.38-.23.27-.7a3 3 0 00-.27-.85c-.1-.18-.22-.3-.29-.27-.04.01 0 .18 0 .29-.01.18-.07.32-.23.39-.14.06-.47.18-.73-.28-.22-.38-.4-.87-.48-1.07-.07-.16-.16-.35-.26-.35h-.04zm-7.38 1.37L19 44.57l1.52-1.86-1.57-1.31-1.52 1.86zm.35-3.25l1.56 1.3 1.53-1.85-1.57-1.32-1.52 1.87zm10.02-4.59l1.84.89 1.02-2.2-1.84-.87-1.02 2.18zm-9.54-1.53a12.7 12.7 0 003.31 4.6c.15-.96.3-1.63.44-2.12-1.38-1-2.37-2.08-3.01-3.16l-.74.68zm3.5-2.35l1.84.88 1.02-2.19-1.84-.88-1.02 2.19zm-8.9-8.72s-1.15.83-1.61 1.92a2.42 2.42 0 00-.1 1.74c.16.35.54.68 1.04.28.35-.28.5-.68.58-1.01.04-.2.06-.33.06-.43 0-.12-.04-.22-.16-.2-.33.12-.13.57-.37.79-.18.1-.65.05-.74-.42-.1-.46.26-1.06.58-1.46.33-.4.9-.92.9-.92s.4-.34.26-.5c0-.02-.02-.02-.03-.02-.12 0-.41.23-.41.23zm11.32-1.2l-1.42 1.56-1.22 1.35c-.27.3-.4.6-.37.76l.16.8c.04-.14.21-.42.4-.63l1.43-1.57c.56-.62 1.1-1.21 1.21-1.35.27-.3.41-.6.38-.75l-.17-.82c-.04.16-.2.43-.4.64zM8.84 33.41c.22-.73.63-1.37 1.34-1.78 1.16-.55 1.62.86 1.62.86-.08.95-.8 1.45-1.6 1.45-.46 0-.96-.18-1.36-.54zm8.65-22.8c-.8.02-1.41.68-1.39 1.48.03.8.68 1.44 1.47 1.4.43 0 .8-.21 1.06-.52l.03-.03c.17 1.15-.37 2.07-1.65 3.14-1.3 1.1-4.34 2.55-6.5 4.28a9.79 9.79 0 00-3.63 10.48 13.96 13.96 0 00.85 2.42c-.08 1.42.06 3.9.86 5.77 1.06 2.41 2.97 4.4 5.72 3.81 2.76-.66 3.07-5.2 3.39-8.52.08-.55.16-.64.33-.78.44-.38 1.52-1.4 2.04-1.86.32-.29.6-.57.77-.93.23-.44.11-1.03.11-1.03l-.31-2.18a3.8 3.8 0 01-.98 1.28c-.55.56-2.02 1.84-2.16 1.98-.13.13-.6.48-.81 2.15-.54 4.54-1.42 6.69-3.01 7.41-.42.2-.9.3-1.41.3-2.92-.02-3.68-3.6-3.67-5.57l.01-.34c.68.92 1.68 1.83 2.91 1.64 1.97-.3 1.35-3.65 1.07-4.43-.28-.78-1.04-3.12-2.7-3-1.16.08-1.7 1.46-1.95 2.63a9.54 9.54 0 01-.28-2.85c.18-2.03.87-4.56 3.79-7.06 2.08-1.77 4.44-3.04 5.75-4.09a5.33 5.33 0 001.65-2.1c-.09.68-.25 1.4-.57 2.26-1.21 3.22-4.89 8.54-4.94 16.05 0 2.3.22 4.3.58 6 .2-.13.39-.31.56-.53-.25-1.22-.4-2.57-.4-4.01 0-7.5 3.65-12.8 4.84-16.01.62-1.7.64-2.93.64-4.14 0-1.5-.33-3.06-.64-3.66-.33-.59-.75-.85-1.36-.85h-.07zM21.07.33c-.73.52-1.34 1.7-1.34 3.5 0 1.1.31 2.42 1.16 3.9-1.14 1.56-1.34 3-.86 4.37.36 1.04.55 1.31.71 1.94.42 1.59-.04 3.5-1.28 6.44-1 2.4-2.32 4.9-2.32 7.95 0 .7.07 1.38.16 2.05l.68-.63c-.15-2.4.79-4.8 1.95-6.96 1.69-3.15 1.9-6.37 1.57-8.12 1.18 1.27 3.18 3.18 4.35 5.14.39.66.63 1.29.68 1.92a5.05 5.05 0 01-1.37 3.75c-.8.92-.52 1.73-.48 1.89.06.26.38 1.26.61 1.91.88-1.74 3.32-2.72 4.43-4.17.25 1.78-1.08 3.48-2.07 4.62l-.78.8c-1.88 1.8-3.1 3.05-3.75 4.2-.17.25-.44.83-.58 1.27-.19.55-.43 1.49-.63 3.14-.16.97-.33 2.13-.4 2.65-.12 1.18-.47 3.05-1.9 3.58l-.24.07c-1.37.3-2.77-.85-3.78-2.93-.21.16-.44.3-.7.42 1.39 3.28 3.46 4.8 5.28 4.8 1.38 0 2.46-.7 2.81-2.75.18-1.03.31-2.17.42-3.27.06-.54.32-3.54.8-4.64.6-1.22 1.9-2.4 3.83-4.41a10.24 10.24 0 002.18-3.13c1.13-2.08-.27-7.02-.54-7.91 0-.03 0-.04-.03-.04-.02 0-.03 0-.05.04l-.01.02a8.54 8.54 0 01-2.22 2.18c.47-1.29.34-2.27.16-3.1l-.04-.14c-.84-3.28-4.17-6.2-5.67-7.88-1.95-2.18-1.28-3.59-.57-4.48l.44.63c2.65 3.62 7.65 9.38 10.27 14.86a18.48 18.48 0 011.45 4.04c1.03 5.68-2.9 11.45-8.8 9.83a1.2 1.2 0 01-.1-.03c-.17.5-.32 1.3-.47 2.4.9.39 1.86.62 2.8.66h.21c4.84.06 8.63-3.6 7.94-11.27 0 0-.3-3.19-1.93-6.55C30.43 17 25.58 11.16 22.6 7.38c-.95-1.2-1.5-2.23-1.78-3.13-.56-1.74-.2-3.1.51-3.69.16-.13.35-.27.52-.36.1-.06.07-.18 0-.2h-.07c-.1 0-.31.05-.72.34zM15.63 13.1c-.79.03-1.41.7-1.39 1.5.02.8.68 1.42 1.48 1.4.79-.02 1.4-.7 1.38-1.5a1.44 1.44 0 00-1.42-1.4h-.05z",
                    fill: "#FFF"
                }))),
                s = e => {
                    let {
                        color: t = "white"
                    } = e;
                    return Object(n.c)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 104 18"
                    }, Object(n.c)("path", {
                        fill: t,
                        d: "M54.34 3.28V0H45.6v2.82h4.48l-4.62 6.75v3.29h8.96v-2.84h-4.7l4.6-6.74zm31.19 1.44c-.19.25-.45.36-1.05.42h-1.23V2.57h.95l.23.02c.49.02.68.08.9.23.54.34.66 1.27.2 1.9zm2.96 3.48c-.48-1.14-.66-1.37-1.13-1.6.08-.01.16-.05.23-.08 1.45-.66 2.15-2.32 1.6-4.16C88.74.84 87.55 0 85.3 0h-5.26v12.86h3.34v-4.8h.76c.54 0 .87.22 1.15.9l.18.41.1.24 1.25 3.25h3.47l-1.63-4.22c-.06-.16-.1-.3-.18-.44zm7.57-.49l1.28-3.85 1.28 3.85h-2.56zM99.16 0h-3.73l-4.5 12.86h3.4l.76-2.36h4.33l.73 2.36h3.6L99.15 0zM35.22 7.71l1.28-3.85 1.28 3.85h-2.56zM34.58 0L30.1 12.86h3.38l.77-2.36h4.32l.74 2.36h3.6L38.32 0h-3.74zM5.12 7.71L6.4 3.86 7.68 7.7H5.12zM4.5 0L0 12.86h3.38l.77-2.36h4.33l.73 2.36h3.6L8.23 0H4.49zM71.9 7.9h4.42V5.15H71.9V2.82h5.13V0h-8.5v12.86h8.96v-2.73H71.9V7.9zm-11.53 0h4.43V5.15h-4.43V2.82h5.14V0H57v12.86h8.96v-2.73h-5.59V7.9zm-35.38 4.39c0 2-.69 2.73-2.21 2.27-.1-.01-.17-.04-.25-.09l-.76 2.85c.17.1.34.16.52.24 3.56 1.4 5.89-.68 5.89-4.33V0h-3.19v12.29zm-2.58-2.3H18.2V0h-3.46v12.86h7.68V9.99z"
                    }))
                },
                r = e => {
                    let {
                        color: t,
                        textColor: a = t
                    } = e;
                    return Object(n.c)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 166 60"
                    }, Object(n.c)("g", {
                        fill: "none"
                    }, Object(n.c)("path", {
                        style: {
                            fill: a
                        },
                        fill: t,
                        d: "M118.38 27.06V24h-8.2v2.63h4.22l-4.34 6.3V36h8.42v-2.65h-4.43l4.33-6.29zm29.3 1.35c-.18.23-.42.33-1 .39h-1.14v-2.4h.89l.21.02c.46.01.65.07.85.21.5.32.62 1.2.19 1.78zm2.78 3.24c-.46-1.06-.62-1.28-1.06-1.48a1 1 0 00.21-.09c1.37-.61 2.02-2.16 1.5-3.88-.42-1.42-1.53-2.2-3.64-2.2h-4.94v12h3.14v-4.49h.71c.51 0 .82.22 1.08.86l.17.38.09.22L148.9 36h3.25l-1.52-3.93c-.06-.15-.1-.28-.17-.42zm7.1-.45l1.2-3.6 1.21 3.6h-2.4zm2.92-7.2h-3.5l-4.22 12h3.18l.71-2.2h4.07l.7 2.2h3.36l-4.3-12zm-60.05 7.2l1.2-3.6 1.2 3.6h-2.4zm-.6-7.2l-4.2 12h3.17l.72-2.2h4.06l.7 2.2h3.37l-4.3-12h-3.51zm-27.66 7.2l1.2-3.6 1.2 3.6h-2.4zm-.6-7.2l-4.21 12h3.18l.71-2.2h4.07l.69 2.2h3.37l-4.3-12h-3.51zm63.3 7.37h4.16v-2.56h-4.15v-2.18h4.82V24h-8v12h8.43v-2.55h-5.25v-2.08zm-10.82 0h4.16v-2.56h-4.16v-2.18h4.83V24h-8v12h8.42v-2.55h-5.25v-2.08zm-33.22 4.1c0 1.87-.65 2.55-2.08 2.12a1.05 1.05 0 01-.24-.08l-.7 2.66c.15.08.31.15.48.22 3.34 1.3 5.53-.63 5.53-4.04V24h-3v11.47zm-2.42-2.15h-3.97V24h-3.25v12h7.22v-2.68z"
                    }), Object(n.c)("path", {
                        fill: t,
                        d: "M0 0h60.14v60H0z"
                    }), Object(n.c)("path", {
                        d: "M34.13 48.03c-.07.03-.1.16-.05.33l.33.87c.2.53.52 1.15.97 1.46.47.34.72.22.82.18.07-.04.37-.22.26-.7a2.99 2.99 0 00-.27-.85c-.1-.18-.22-.3-.3-.27-.04 0 0 .18 0 .28 0 .2-.07.33-.23.4-.14.06-.48.18-.74-.28-.22-.38-.4-.87-.49-1.08-.06-.15-.16-.34-.26-.34h-.04zm-7.47 1.38l1.59 1.32 1.54-1.87-1.59-1.32-1.54 1.87zm.35-3.26l1.59 1.31 1.55-1.86-1.6-1.32-1.54 1.87zm10.14-4.6l1.87.88 1.03-2.2-1.86-.88-1.04 2.2zM27.5 40a12.75 12.75 0 003.36 4.63c.14-.97.3-1.65.44-2.13-1.4-1-2.4-2.1-3.05-3.18l-.75.68zm3.54-2.35l1.86.88 1.04-2.2-1.87-.88-1.03 2.2zm-9-8.75s-1.17.83-1.64 1.92a2.4 2.4 0 00-.1 1.75c.16.35.55.68 1.06.28.35-.28.5-.68.58-1.01.05-.2.06-.33.06-.43 0-.12-.04-.22-.15-.2-.34.11-.14.57-.38.79-.18.1-.66.05-.75-.42-.1-.47.27-1.07.6-1.47.32-.4.9-.92.9-.92s.4-.34.27-.51l-.04-.01c-.12 0-.41.23-.41.23zM33.5 27.7l-1.44 1.57-1.24 1.35c-.27.3-.41.6-.38.76l.17.82c.04-.15.22-.43.4-.64.14-.15.8-.89 1.45-1.58l1.23-1.35c.27-.3.41-.6.38-.76l-.17-.81c-.04.15-.21.42-.4.64zM17.97 39.53c.22-.72.64-1.37 1.35-1.78 1.18-.55 1.64.86 1.64.86-.08.95-.8 1.45-1.61 1.45-.47 0-.98-.17-1.38-.53zm8.75-22.88a1.45 1.45 0 101.16 2.38l.03-.04c.17 1.16-.38 2.08-1.67 3.15-1.31 1.12-4.4 2.56-6.58 4.3a9.8 9.8 0 00-3.68 10.51 13.93 13.93 0 00.86 2.44 14.3 14.3 0 00.87 5.79c1.08 2.42 3.01 4.4 5.79 3.82 2.8-.66 3.12-5.22 3.43-8.55.09-.55.17-.65.34-.79.45-.38 1.54-1.4 2.06-1.86.32-.29.6-.57.79-.94.23-.44.1-1.02.1-1.02l-.3-2.2c-.09.31-.47.75-1 1.29-.56.56-2.05 1.84-2.19 1.98-.13.14-.61.5-.82 2.17-.54 4.55-1.43 6.7-3.04 7.43-.43.2-.9.3-1.43.3-2.95-.02-3.73-3.62-3.72-5.59 0-.12 0-.24.02-.34.68.92 1.7 1.84 2.94 1.65 2-.3 1.37-3.67 1.08-4.45-.28-.78-1.05-3.13-2.72-3.01-1.18.08-1.73 1.47-1.99 2.64a9.49 9.49 0 01-.27-2.86c.17-2.04.87-4.58 3.83-7.08 2.1-1.78 4.5-3.06 5.82-4.1a5.35 5.35 0 001.66-2.12 9.58 9.58 0 01-.57 2.27c-1.23 3.23-4.95 8.57-5 16.1 0 2.32.22 4.32.59 6.03.2-.13.39-.32.57-.53-.26-1.23-.4-2.58-.4-4.03 0-7.52 3.69-12.84 4.89-16.07.63-1.7.65-2.93.65-4.15 0-1.5-.34-3.07-.65-3.68-.34-.58-.75-.84-1.38-.84h-.07zm3.63-10.3c-.74.51-1.36 1.7-1.36 3.5 0 1.1.32 2.43 1.17 3.92-1.15 1.56-1.36 3-.87 4.38.37 1.05.56 1.32.73 1.95.42 1.6-.05 3.5-1.3 6.46-1.02 2.4-2.35 4.92-2.35 7.98 0 .7.07 1.39.17 2.06.11-.12.37-.35.67-.64-.15-2.4.8-4.81 1.98-6.98 1.7-3.17 1.92-6.39 1.59-8.15 1.2 1.28 3.22 3.2 4.4 5.16.4.66.64 1.29.7 1.93a5.04 5.04 0 01-1.39 3.76c-.8.92-.53 1.73-.5 1.9.07.25.4 1.26.63 1.91.9-1.75 3.36-2.73 4.48-4.19.25 1.8-1.1 3.5-2.1 4.64-.23.26-.5.52-.79.8-1.9 1.82-3.14 3.06-3.8 4.22-.16.26-.44.83-.57 1.27-.2.56-.44 1.5-.65 3.15a75.6 75.6 0 00-.39 2.66c-.13 1.19-.48 3.06-1.94 3.6-.07.03-.15.05-.23.06v.01c-1.39.3-2.8-.86-3.83-2.94-.22.16-.45.3-.7.42 1.4 3.3 3.5 4.81 5.33 4.81 1.4 0 2.5-.7 2.85-2.75.18-1.03.31-2.18.43-3.29.06-.53.32-3.55.8-4.65.6-1.23 1.92-2.41 3.88-4.43 1.2-1.25 1.87-2.3 2.21-3.14 1.14-2.08-.27-7.04-.55-7.94 0-.03 0-.04-.03-.04-.02 0-.03.01-.05.05l-.01.02c-.5.82-1.4 1.57-2.25 2.18.48-1.29.35-2.27.16-3.1l-.04-.15c-.85-3.29-4.21-6.22-5.73-7.9-1.98-2.2-1.3-3.6-.58-4.5l.44.63c2.69 3.64 7.74 9.41 10.4 14.91a18.44 18.44 0 011.46 4.06c1.05 5.7-2.93 11.49-8.9 9.86l-.11-.03c-.16.5-.31 1.31-.46 2.41.9.39 1.88.62 2.83.66h.21c4.9.06 8.73-3.6 8.03-11.3 0 0-.3-3.2-1.95-6.58-2.65-5.92-7.56-11.78-10.57-15.57a10.04 10.04 0 01-1.8-3.14c-.56-1.75-.2-3.11.52-3.7.16-.13.35-.28.53-.37.1-.06.06-.18-.01-.2h-.07c-.1 0-.3.05-.72.34zm-5.5 12.8c-.8.02-1.44.69-1.41 1.5a1.45 1.45 0 102.9-.1 1.45 1.45 0 00-1.45-1.4h-.05z",
                        fill: "#FFF"
                    })))
                },
                d = e => {
                    let {
                        color: t
                    } = e;
                    return Object(n.c)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 60 75"
                    }, Object(n.c)("g", {
                        fill: "none"
                    }, Object(n.c)("path", {
                        fill: t,
                        d: "M0 0h60v60H0z"
                    }), Object(n.c)(i, null), Object(n.c)("g", {
                        fill: t
                    }, Object(n.c)("path", {
                        d: "M31.45 67.53V66h-4.09v1.31h2.1l-2.16 3.16V72h4.2v-1.32h-2.2l2.15-3.15zm14.62.67c-.09.12-.21.17-.5.2H45v-1.2h.55c.23.02.32.05.42.12.26.16.31.6.1.88zm1.39 1.63c-.23-.54-.31-.64-.53-.75a.5.5 0 00.1-.04c.68-.3 1.01-1.08.75-1.94-.2-.7-.76-1.1-1.81-1.1H43.5v6h1.56v-2.24h.36c.25 0 .4.1.54.42l.08.2.05.1.59 1.52h1.62l-.76-1.97-.08-.2zM51 69.6l.6-1.8.6 1.8H51zm1.45-3.6H50.7l-2.1 6h1.59l.35-1.1h2.03l.35 1.1h1.68l-2.15-6zM22.5 69.6l.6-1.8.6 1.8h-1.2zm-.3-3.6l-2.1 6h1.59l.35-1.1h2.03l.35 1.1h1.68l-2.15-6H22.2zM8.4 69.6l.6-1.8.6 1.8H8.4zM8.1 66L6 72h1.59l.35-1.1h2.03l.35 1.1H12l-2.15-6H8.1zm31.58 3.69h2.07V68.4h-2.07v-1.09h2.4V66H38.1v6h4.2v-1.27h-2.62v-1.04zm-5.4 0h2.07V68.4h-2.07v-1.09h2.4V66H32.7v6h4.2v-1.27h-2.62v-1.04zm-16.57 2.05c0 .93-.32 1.27-1.04 1.06a.52.52 0 01-.12-.05l-.35 1.33c.08.05.16.08.24.11 1.67.66 2.76-.31 2.76-2.01V66h-1.5v5.74zm-1.21-1.08h-1.98V66H12.9v6h3.6v-1.34z"
                    }))))
                },
                u = e => {
                    let {
                        color: t,
                        textColor: a = t
                    } = e;
                    return Object(n.c)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 -10 220 100"
                    }, Object(n.c)("g", null, Object(n.c)("path", {
                        style: {
                            fill: a
                        },
                        fill: t,
                        d: "M30.754 70.053c-.122.054-.163.256-.085.54.085.27.545 1.45.545 1.45.325.888.875 1.917 1.615 2.444.79.559 1.197.363 1.357.302.117-.065.624-.376.443-1.184-.193-.856-.3-1.087-.457-1.4-.155-.312-.364-.506-.488-.453-.075.013-.013.295-.013.471-.007.312-.115.546-.376.66-.23.1-.798.304-1.234-.472-.359-.625-.675-1.45-.808-1.786-.108-.264-.27-.583-.439-.583-.017 0-.031.005-.06.01Zm-12.427 2.299 2.64 2.19 2.568-3.113-2.639-2.196-2.569 3.119Zm.591-5.442 2.634 2.19L24.13 66l-2.643-2.206-2.568 3.116Zm16.862-7.671 3.1 1.48 1.712-3.662-3.095-1.468-1.717 3.65Zm-16.055-2.567c1.313 3.078 3.3 5.748 5.584 7.712.238-1.612.495-2.747.736-3.557-2.33-1.673-3.999-3.482-5.069-5.291l-1.25 1.136Zm5.888-3.925 3.1 1.468 1.715-3.658-3.098-1.469-1.717 3.66ZM10.64 38.17s-1.934 1.378-2.713 3.203c-.478 1.117-.446 2.325-.176 2.91.275.582.92 1.14 1.759.469.587-.47.844-1.127.972-1.69.078-.333.104-.543.104-.707 0-.206-.068-.379-.262-.333-.56.186-.227.942-.627 1.308-.303.186-1.091.086-1.247-.694-.153-.781.445-1.785.988-2.45.544-.666 1.5-1.539 1.5-1.539s.681-.566.45-.846c-.01-.016-.035-.023-.063-.023-.2 0-.685.392-.685.392Zm19.056-2.024c-.234.25-1.336 1.463-2.395 2.628l-2.05 2.247c-.452.505-.69 1.001-.63 1.27l.273 1.355c.074-.252.363-.712.682-1.068.227-.25 1.329-1.469 2.392-2.623.942-1.04 1.847-2.027 2.047-2.257.456-.491.692-.994.63-1.256l-.28-1.366c-.066.258-.35.713-.67 1.07ZM3.874 55.882c.38-1.205 1.064-2.286 2.256-2.963 1.956-.917 2.722 1.43 2.722 1.43-.136 1.59-1.34 2.424-2.679 2.424a3.515 3.515 0 0 1-2.3-.891Zm14.556-38.13c-1.327.035-2.372 1.154-2.335 2.487.042 1.338 1.148 2.397 2.477 2.354a2.438 2.438 0 0 0 1.788-.877l.05-.06c.284 1.928-.635 3.469-2.775 5.252-2.189 1.85-7.31 4.265-10.951 7.158C1.56 38.134.349 42.563.038 46.148c-.134 1.6.098 3.704.534 5.443a23.253 23.253 0 0 0 1.333 3.864s.041.07.104.19c-.13 2.372.108 6.517 1.44 9.647 1.79 4.038 5.01 7.343 9.626 6.372 4.66-1.1 5.18-8.704 5.712-14.255.138-.91.278-1.07.555-1.304.749-.638 2.566-2.35 3.431-3.112.536-.474 1.001-.947 1.303-1.552.385-.735.181-1.714.181-1.714l-.522-3.658c-.13.52-.762 1.247-1.653 2.147-.928.941-3.402 3.071-3.627 3.305-.224.227-1.03.814-1.374 3.606-.894 7.594-2.384 11.179-5.06 12.39-.706.334-1.498.49-2.378.512-4.904-.048-6.194-6.043-6.171-9.33.004-.192.007-.391.018-.57 1.14 1.538 2.821 3.065 4.897 2.748 3.31-.507 2.28-6.111 1.8-7.411-.469-1.308-1.754-5.21-4.53-5.016-1.966.134-2.882 2.447-3.3 4.406-.379-1.548-.58-3.363-.458-4.78.292-3.391 1.45-7.626 6.368-11.797 3.504-2.969 7.473-5.09 9.68-6.839 1.405-1.107 2.278-2.35 2.768-3.518-.138 1.131-.417 2.357-.957 3.786-2.038 5.382-8.223 14.27-8.306 26.829 0 3.86.361 7.198.974 10.052.335-.23.649-.53.947-.892a32.72 32.72 0 0 1-.678-6.713c0-12.531 6.143-21.406 8.146-26.777 1.049-2.83 1.076-4.892 1.076-6.927 0-2.499-.556-5.106-1.074-6.122-.56-.975-1.256-1.407-2.296-1.407h-.117ZM24.46.568c-1.232.867-2.261 2.835-2.254 5.84.01 1.848.525 4.058 1.944 6.534-1.905 2.607-2.255 5.01-1.446 7.306.614 1.746.927 2.2 1.207 3.247.702 2.658-.077 5.847-2.165 10.765-1.694 4.009-3.897 8.201-3.897 13.307.011 1.172.109 2.31.274 3.43.197-.194.616-.588 1.128-1.059-.252-4 1.337-8.024 3.288-11.637 2.84-5.28 3.189-10.65 2.642-13.588 1.993 2.136 5.354 5.33 7.316 8.605.662 1.103 1.06 2.147 1.156 3.209.093 2.589-.718 4.444-2.302 6.266-1.34 1.535-.877 2.892-.82 3.158.101.437.65 2.11 1.033 3.205 1.486-2.916 5.589-4.56 7.448-6.984.426 2.986-1.815 5.827-3.478 7.73-.397.43-.83.87-1.321 1.345-3.15 3.017-5.217 5.092-6.312 7.018-.28.427-.734 1.386-.961 2.124-.321.922-.731 2.489-1.074 5.247-.26 1.627-.555 3.57-.65 4.435-.214 1.971-.807 5.1-3.22 5.99-.133.055-.26.085-.395.113v.01c-2.302.504-4.658-1.428-6.372-4.901-.353.269-.738.508-1.157.694C16.393 77.474 19.885 80 22.943 80c2.318 0 4.149-1.17 4.735-4.585.304-1.721.518-3.629.71-5.48.094-.89.532-5.923 1.341-7.748.997-2.047 3.183-4.027 6.439-7.388 2.01-2.088 3.107-3.825 3.678-5.225 1.895-3.478-.453-11.748-.908-13.235-.014-.053-.02-.065-.05-.065-.046 0-.06.012-.096.072-.004.015-.01.025-.018.035-.838 1.37-2.334 2.618-3.726 3.639.783-2.154.572-3.791.26-5.169v-.01l-.06-.24-.005.01c-1.408-5.488-7.01-10.374-9.535-13.19-3.282-3.648-2.165-5.999-.955-7.492.228.335.462.69.728 1.048 4.464 6.065 12.873 15.69 17.28 24.857 1.12 2.314 1.977 4.59 2.447 6.76 1.737 9.495-4.878 19.15-14.794 16.435h-.004a2.027 2.027 0 0 1-.191-.054c-.269.844-.522 2.19-.772 4.03 1.503.639 3.131 1.024 4.712 1.093l.002.003c.115.001.233.005.348.009 8.148.089 14.524-6.024 13.352-18.851 0 0-.49-5.337-3.245-10.957-4.408-9.873-12.563-19.642-17.568-25.952-1.588-2.006-2.521-3.74-2.992-5.239-.937-2.917-.34-5.177.861-6.166.259-.219.582-.463.876-.61.18-.094.11-.305-.017-.328-.027 0-.068-.007-.11-.007-.174 0-.516.079-1.205.57Zm-9.155 21.342a2.414 2.414 0 0 0-2.334 2.504 2.41 2.41 0 0 0 2.477 2.344 2.414 2.414 0 0 0 2.337-2.496 2.414 2.414 0 0 0-2.4-2.352h-.08ZM142.85 35.104V30h-13.636v4.383h7.01L129 44.886V50h14v-4.417h-7.355l7.204-10.48Zm48.703 2.24c-.284.381-.69.556-1.641.656H188v-4h1.483c.117 0 .234.029.355.029.761.026 1.072.128 1.41.358.838.53 1.027 1.982.305 2.957Zm4.634 5.407c-.763-1.774-1.037-2.134-1.765-2.47.122-.03.244-.086.353-.14 2.265-1.031 3.36-3.612 2.496-6.477-.702-2.359-2.551-3.664-6.052-3.664H183v20h5.212v-7.476h1.195c.841 0 1.35.362 1.79 1.424l.276.634.151.361L193.593 50H199l-2.535-6.553c-.095-.255-.167-.47-.278-.696ZM208 42l1.997-6L212 42h-4Zm4.844-12h-5.83L200 50h5.3l1.18-3.664h6.765L214.393 50H220l-7.156-20ZM113 42l1.993-6L117 42h-4Zm-.995-12L105 50h5.285l1.192-3.664h6.759l1.15 3.664H125l-7.156-20h-5.84ZM66 42l2-6 2 6h-4Zm-.994-12L58 50h5.286l1.19-3.664h6.765L72.388 50H78l-7.152-20h-5.842Zm105.27 12.288h6.896v-4.275h-6.896v-3.63h8.016V30H165v20h14v-4.25h-8.724v-3.462Zm-18.006 0h6.913v-4.275h-6.913v-3.63h8.026V30H147v20h14v-4.25h-8.73v-3.462Zm-55.242 6.83c0 3.118-1.076 4.254-3.456 3.539a1.745 1.745 0 0 1-.397-.142L92 56.947c.265.139.529.25.812.369 5.546 2.179 9.188-1.057 9.188-6.73V30h-4.972v19.118ZM93 45.533h-6.595V30H81v20h12v-4.467Z"
                    })))
                }
        },
        VWn6: function(e, t, a) {},
        VwC5: function(e, t, a) {
            "use strict";
            var n = a("Miz2"),
                i = a("AAFT"),
                c = a.n(i),
                l = a("VBdi"),
                o = a.n(l),
                s = a("MwNz"),
                r = a("CNPg"),
                d = a("P/sV"),
                u = a("qf4H"),
                b = a("7RPU"),
                m = a("xAi6"),
                h = a("9BFC"),
                p = a("6NdF"),
                v = a("w8RO"),
                O = a("8+YW"),
                U = a("xvSA"),
                g = a("OyXg"),
                F = a("564Y"),
                j = a("Vtjr"),
                B = a("cQXn"),
                Q = (a("BNG4"), a("dVLG"));
            var f = o.a.memo(e => {
                    let {
                        audioStreamURL: t,
                        liveAudioChannels: a,
                        latestAudioEpisodes: n
                    } = e;
                    const {
                        setAudioPlayer: i
                    } = Object(j.b)(), c = s.a.get("i18n"), l = s.a.get("livePageConfig").audio, o = "inline" === (null === l || void 0 === l ? void 0 : l.switchType), r = "navigation" === (null === l || void 0 === l ? void 0 : l.switchType), d = Array.isArray(a) && a.length >= 1, u = c.t("Switch to audio");
                    if (o && d) {
                        const e = a[0];
                        return Object(Q.c)("button", {
                            className: "live-stream-player__audio-link",
                            onClick: () => {
                                Object(B.f)({
                                    clipObj: e,
                                    playlist: [e, ...n],
                                    setAudioPlayer: i
                                })
                            }
                        }, Object(Q.c)("span", null, Object(Q.c)(v.a, {
                            name: "radio",
                            size: 18,
                            viewBox: "0 0 18 18"
                        }), u))
                    }
                    return t && r ? Object(Q.c)(O.a, {
                        to: t,
                        className: "live-stream-player__audio-link",
                        target: "_blank",
                        label: "Live Stream Audio Link",
                        eventTarget: "Live stream audio clicked"
                    }, Object(Q.c)("span", null, Object(Q.c)(v.a, {
                        name: "radio",
                        size: 18,
                        viewBox: "0 0 18 18"
                    }), u)) : null
                }),
                y = a("pbOP");
            a("Dbxf");
            var N = () => {
                if (!Object(y.b)() && !Object(y.f)()) return null;
                return Object(Q.c)("div", {
                    className: "live-stream-player__geo-block-section"
                }, Object(Q.c)("div", {
                    className: "geo-block-message"
                }, "\u0645\u0634\u0627\u0647\u062f\u064a\u0646\u0627 \u0627\u0644\u0643\u0631\u0627\u0645 \u0641\u064a \u0623\u0645\u0631\u064a\u0643\u0627 \u064a\u0645\u0643\u0646\u0643\u0645 \u0645\u0634\u0627\u0647\u062f\u0629 \u062c\u0645\u064a\u0639 \u0628\u0631\u0627\u0645\u062c \u0627\u0644\u062c\u0632\u064a\u0631\u0629 \u0648 \u0627\u0644\u0628\u062b \u0627\u0644\u062d\u064a \u0645\u062c\u0627\u0646\u0627 \u0639\u0644\u064a Sling.tv \u0641\u0642\u0637 \u0642\u0648\u0645\u0648\u0627 \u0628\u062a\u0646\u0632\u064a\u0644 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062c\u0632\u064a\u0631\u0629 \u0639\u0644\u0649 Sling \u0648 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644."), Object(Q.c)("a", {
                    target: "_blank",
                    href: "https://www.sling.com/international/arabic/aljazeera",
                    rel: "noopener noreferrer",
                    className: "geo-block-redirect-button"
                }, "\u062d\u0645\u0644 \u0627\u0644\u062a\u0637\u0628\u064a\u0642"))
            };
            a("5zi3");
            var S = e => {
                let {
                    source: t,
                    stream: a,
                    onSwitch: n
                } = e;
                if (!a || !t) return Object(Q.c)("span", null);
                const i = a.videoID,
                    l = a.youtubeChannelID || a.youtubeVideoID;
                if (!!(!i || !l)) return Object(Q.c)("span", null);
                const o = s.a.get("i18n"),
                    r = o.t("Live Stream switch text"),
                    d = o.t("Switch player"),
                    u = c()("no-styles-button");
                return Object(Q.c)("span", {
                    className: "live-stream-player__player-issue"
                }, Object(Q.c)("span", {
                    "aria-hidden": !0,
                    id: "liveStreamPlayerHelpText",
                    tabIndex: -1
                }, r), "\xa0", Object(Q.c)("button", {
                    id: "liveStreamPlayerHelpButton",
                    className: u,
                    onClick: () => ((e, t, a) => {
                        const n = e.youtubeVideoID ? "youtube_video" : "youtube";
                        a("brightcove" === t ? n : "brightcove")
                    })(a, t, n),
                    "aria-labelledby": "liveStreamPlayerHelpText liveStreamPlayerHelpButton"
                }, d))
            };
            a("7zME");
            var k = o.a.memo(e => {
                    const t = s.a.get("i18n"),
                        a = e.pageH1Title || t.t("Live Stream page title");
                    return Object(Q.c)("div", {
                        className: "live-stream-player__widget-header"
                    }, Object(Q.c)("h1", null, " ", a, " "))
                }),
                w = a("DtxC");
            a("8IIS"), a("dwW7");
            const _ = (e, t, a) => {
                    const n = [...a];
                    return n[t] = e, n
                },
                C = e => e.filter(e => e.videoID || e.youtubeChannelID || e.youtubeVideoID),
                V = e => {
                    var t;
                    return "inline" !== (null === (t = s.a.get("livePageConfig").audio) || void 0 === t ? void 0 : t.switchType) || !Array.isArray(e) || e.length < 1
                },
                L = e => {
                    let {
                        streams: t,
                        theaterMode: a,
                        autoPlay: i,
                        autoPlayDesktop: o,
                        autoPlayMobile: r,
                        autoPlayMuted: j,
                        isGeoLocated: B,
                        showTab: y,
                        scheduleData: L,
                        label: R,
                        isTakeOverLiveStream: M,
                        videoLink: A,
                        overrideFeaturedImage: I,
                        showSwitchInformationMessage: T = !1,
                        videoPlacement: x = m.AMPLITUDE_EVENT_PROPERTY_VALUES.video_placement.featured,
                        liveAudioChannels: P,
                        latestAudioEpisodes: z,
                        isPlayerClicked: D,
                        noPreThumbnail: E = !1,
                        pageH1Title: H,
                        liveStreamDesktop: Z,
                        liveStreamMobile: J
                    } = e;
                    const W = C(t),
                        G = Object(h.a)(L),
                        [Y, X] = Object(l.useState)(W.map(e => e.source)),
                        q = Object(d.a)(),
                        K = Object(u.a)(),
                        [$, ee] = Object(l.useState)(!1),
                        [te, ae] = Object(l.useState)(T),
                        [ne, ie] = Object(l.useState)(j),
                        ce = e => {
                            X(_("youtube_video", 0, Y)), ie(e), ee(!0), ae(!0)
                        };
                    te && setTimeout(() => {
                        ae(!1)
                    }, 1e4);
                    const le = s.a.get("i18n"),
                        oe = (e, t) => {
                            const d = Y[e],
                                {
                                    hasEPGProvider: u
                                } = t,
                                m = Object(Q.c)(S, {
                                    source: d,
                                    stream: t,
                                    onSwitch: t => {
                                        X(_(t, e, Y)), ee(!1), ie(!0)
                                    }
                                });
                            (null === I || void 0 === I ? void 0 : I.sourceUrl) && (t.featuredImage = I);
                            const h = u && Array.isArray(G) && G.length > 0;
                            return Object(Q.c)(l.Fragment, null, a && !M && !q && Object(Q.c)("div", {
                                className: "live-stream__player-switcher"
                            }, m), Object(Q.c)(U.a, Object(n.a)({}, t, {
                                accountId: s.a.get("BRIGHTCOVE_ACCOUNT_ID"),
                                source: d,
                                autoPlay: i,
                                autoPlayDesktop: o,
                                autoPlayMobile: r,
                                autoPlayMuted: ne,
                                scheduleData: {
                                    schedule: G
                                },
                                label: R,
                                videoPlacement: x,
                                videoLink: A,
                                closedCaptions: $,
                                manageBCClosedCaptions: ce,
                                isPlayerClicked: D,
                                liveStreamDesktop: Z,
                                liveStreamMobile: J
                            })), !a && Object(Q.c)(w.a, {
                                showSwitchWarning: te
                            }), a && Object(Q.c)(l.Fragment, null, Object(Q.c)("div", {
                                className: "live-stream-alternative-wrapper"
                            }, q && !M && Object(Q.c)("div", {
                                className: "live-stream__player-switcher-mobile"
                            }, m), Object(Q.c)("span", {
                                className: "" + (V(P) ? "u-hidden--mobile" : "")
                            }, Object(Q.c)(w.a, {
                                showSwitchWarning: te
                            })), Object(Q.c)("div", {
                                className: "live-stream__buttons_container"
                            }, Object(Q.c)(f, {
                                audioStreamURL: t.audioStreamUrl,
                                liveAudioChannels: P,
                                latestAudioEpisodes: z
                            }), h && Object(Q.c)(O.a, {
                                to: "/schedule",
                                label: "EPG Card",
                                eventTarget: "Schedule Page",
                                className: "epg-container__schedule__link"
                            }, Object(Q.c)("div", {
                                className: "epg-container__next__schedule"
                            }, Object(Q.c)(v.a, {
                                className: "epg-container__next__schedule__icon",
                                name: "schedule",
                                color: "primary",
                                size: 18
                            }), Object(Q.c)("div", {
                                className: "epg-container__next__schedule__title"
                            }, le.t("See full schedule")))))), Object(Q.c)("span", {
                                className: c()({
                                    "u-hidden--desktop": !0,
                                    "u-hidden--mobile": !V(P)
                                })
                            }, Object(Q.c)(w.a, {
                                showSwitchWarning: te
                            }))), a && u && Object(Q.c)(p.a, {
                                epg: {
                                    schedule: G
                                },
                                date: new Date,
                                updateInterval: 6e4,
                                timezone: Object(b.n)(),
                                showScheduleButton: !1
                            }))
                        },
                        se = x !== m.AMPLITUDE_EVENT_PROPERTY_VALUES.video_placement.homepage_featured && x !== m.AMPLITUDE_EVENT_PROPERTY_VALUES.video_placement.liveblog_featured;
                    if (q && !a && se) return null;
                    if (B && K) return a ? Object(Q.c)("div", {
                        className: "live-stream-player",
                        role: "region",
                        "aria-label": le.t("Livestream player")
                    }, Object(Q.c)(N, null)) : null;
                    let re = null;
                    re = W.length > 1 || y ? Object(Q.c)(F.a, {
                        className: "live-stream-tabs",
                        tabName: "live-stream"
                    }, W.map((e, t) => Object(Q.c)(g.a, {
                        name: e.title,
                        key: t
                    }, oe(t, e)))) : oe(0, W[0]);
                    const de = c()("live-stream-widget", {
                        "live-stream-player": a,
                        "single-live-stream-player-wrapper": !(W.length > 1 || y)
                    });
                    return Object(Q.c)("div", {
                        className: de,
                        role: "region",
                        "aria-label": le.t("Livestream player")
                    }, a && !M && Object(Q.c)(k, {
                        displayAudioStream: !0,
                        pageH1Title: H
                    }), re, !E && Object(Q.c)("img", {
                        className: "pre-thumbnail-image",
                        style: {
                            aspectRatio: "16/9",
                            objectFit: "fill"
                        },
                        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzcwIiBoZWlnaHQ9IjQ0MCI+CiAgICA8ZGVzYyBpVmluY2k9InllcyIgdmVyc2lvbj0iNS4wIiBncmlkU3RlcD0iMjAiIHNob3dHcmlkPSJubyIgc25hcFRvR3JpZD0ieWVzIiBjb2RlUGxhdGZvcm09IjAiLz4KICAgIDxnIGlkPSJMYXllcjEiIG5hbWU9IkxheWVyIDEiIG9wYWNpdHk9IjEiPgogICAgICAgIDxnIGlkPSJTaGFwZTEiPgogICAgICAgICAgICA8ZGVzYyBzaGFwZUlEPSIxIiB0eXBlPSIwIiBiYXNpY0luZm8tYmFzaWNUeXBlPSIxIiBiYXNpY0luZm8tcm91bmRlZFJlY3RSYWRpdXM9IjEyIiBiYXNpY0luZm8tcG9seWdvblNpZGVzPSI2IiBiYXNpY0luZm8tc3RhclBvaW50cz0iNSIgYm91bmRpbmc9InJlY3QoLTM4NSwtMjIwLDc3MCw0NDApIiB0ZXh0PSIiIGZvbnQtZmFtaWx5TmFtZT0iIiBmb250LXBpeGVsU2l6ZT0iMjAiIGZvbnQtYm9sZD0iMCIgZm9udC11bmRlcmxpbmU9IjAiIGZvbnQtYWxpZ25tZW50PSIxIiBzdHJva2VTdHlsZT0iMCIgbWFya2VyU3RhcnQ9IjAiIG1hcmtlckVuZD0iMCIgc2hhZG93RW5hYmxlZD0iMCIgc2hhZG93T2Zmc2V0WD0iMCIgc2hhZG93T2Zmc2V0WT0iMiIgc2hhZG93Qmx1cj0iNCIgc2hhZG93T3BhY2l0eT0iMTYwIiBibHVyRW5hYmxlZD0iMCIgYmx1clJhZGl1cz0iNCIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwzODUuNSwyMjAuNSkiIHBlcnMtY2VudGVyPSIwLDAiIHBlcnMtc2l6ZT0iMCwwIiBwZXJzLXN0YXJ0PSIwLDAiIHBlcnMtZW5kPSIwLDAiIGxvY2tlZD0iMCIgbWVzaD0iIiBmbGFnPSIiLz4KICAgICAgICAgICAgPHBhdGggaWQ9InNoYXBlUGF0aDEiIGQ9Ik0wLjUsMC41IEw3NzAuNSwwLjUgTDc3MC41LDQ0MC41IEwwLjUsNDQwLjUgTDAuNSwwLjUgWiIgc3R5bGU9InN0cm9rZTpub25lO2ZpbGwtcnVsZTpldmVub2RkO2ZpbGw6dXJsKCNwYXR0ZXJuRmlsbDEpO2ZpbGwtb3BhY2l0eToxOyIvPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuRmlsbDEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSI3NzAiIGhlaWdodD0iNDQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwwLjUsMC41KSI+PGltYWdlIGlkPSJwYXR0ZXJuSW1hZ2VwYXR0ZXJuRmlsbDFfRjVLWEdaTFNPTVhXMllMU05GWFhHWTNGT1pYV1lZSlBJUlNYRzIzVU41WUM2UTNCT0IySEs0VEJFQlNHS0lDVU1WV0dDSUJTR0FaRElMSlFHTVdUQU5CQVlPUUhHSUJRSEFYREtOQk9HTTJTNDRET000IiB4PSIwIiB5PSIwIiB3aWR0aD0iNzcwIiBoZWlnaHQ9IjQ0MCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUF3SUFBQUc0Q0FZQUFBRDJjbENDQUFBQUNYQklXWE1BQUFCUEFBQUFUd0ZqaXYzWEFBQUJUbnBVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUtKRjlrbEZ2d2lBVWhkLzlGWVE5eTIwN015TnBlZEhzYlpuUm1OVEhXbkdTdGRBQXB1emZyOWhxWGRlTkp6am5mUGNDdWJHanJxeEtialBreWtJYTZoS2NIZFdCMDJidlpjRG9HckdmQ1U3ZjFtaXBORWN2SkNBQlpoT0VVS3lQSjdwWnZYWjRjMHJ3MmRxS0F0UjFUZXBub3ZRSGhJdkZBb0lJb21qYUpLYm1TOXJNVGFWNWFvdmM2cXk0eWJXb3JGQVMrWE4yVUJlYllOeGwydFUyNGs3MG5hUWgxMHVUWEpYZ0hRaEpBR09ZRmFjL01PKzBHT3U1MkJlak84UDFVcFVsbDVadGM4MjVOR2RsWS9obERzRzFjTHhJVjZJeFRmTW1OcDhISFRWMGh1UlNGVXB2cXl6bkxPeVFCMm0wejc2dk5wdjk2TE1mN2VNZlREZmNxT0xpUDN3bmhXVlJER1B5a05yMy9oMTUxSWI1ZENTZi9wTi8xNkw1enV6cWhWMytVYnZOREF5R3BwMUk2RWFTVFdLNGp6ZWJmQU1zYk9uM3dxQXR1UUFBQ085SlJFRlVlSnp0MXpFQndDQVF3TUJTQis5ZkxMaUFJWGNLc21iTnpQNEFBSUNVLzNVQUFBQndueEVBQUlBZ0l3QUFBRUZHQUFBQWdvd0FBQUFFR1FFQUFBZ3lBZ0FBRUdRRUFBQWd5QWdBQUVDUUVRQUFnQ0FqQUFBQVFVWUFBQUNDakFBQUFBUVpBUUFBQ0RJQ0FBQVFaQVFBQUNESUNBQUFRSkFSQUFDQUlDTUFBQUJCUmdBQUFJS01BQUFBQkJrQkFBQUlNZ0lBQUJCa0JBQUFJTWdJQUFCQWtCRUFBSUFnSXdBQUFFRkdBQUFBZ293QUFBQUVHUUVBQUFneUFnQUFFR1FFQUFBZ3lBZ0FBRUNRRVFBQWdDQWpBQUFBUVVZQUFBQ0NqQUFBQUFRWkFRQUFDRElDQUFBUVpBUUFBQ0RJQ0FBQVFKQVJBQUNBSUNNQUFBQkJSZ0FBQUlLTUFBQUFCQmtCQUFBSU1nSUFBQkJrQkFBQUlNZ0lBQUJBa0JFQUFJQWdJd0FBQUVGR0FBQUFnb3dBQUFBRUdRRUFBQWd5QWdBQUVHUUVBQUFneUFnQUFFQ1FFUUFBZ0NBakFBQUFRVVlBQUFDQ2pBQUFBQVFaQVFBQUNESUNBQUFRWkFRQUFDRElDQUFBUUpBUkFBQ0FJQ01BQUFCQlJnQUFBSUtNQUFBQUJCa0JBQUFJTWdJQUFCQmtCQUFBSU1nSUFBQkFrQkVBQUlBZ0l3QUFBRUZHQUFBQWdvd0FBQUFFR1FFQUFBZ3lBZ0FBRUdRRUFBQWd5QWdBQUVDUUVRQUFnQ0FqQUFBQVFVWUFBQUNDakFBQUFBUVpBUUFBQ0RJQ0FBQVFaQVFBQUNESUNBQUFRSkFSQUFDQUlDTUFBQUJCUmdBQUFJS01BQUFBQkJrQkFBQUlNZ0lBQUJCa0JBQUFJTWdJQUFCQWtCRUFBSUFnSXdBQUFFRkdBQUFBZ293QUFBQUVHUUVBQUFneUFnQUFFR1FFQUFBZ3lBZ0FBRUNRRVFBQWdDQWpBQUFBUVVZQUFBQ0NqQUFBQUFRWkFRQUFDRElDQUFBUVpBUUFBQ0RJQ0FBQVFKQVJBQUNBSUNNQUFBQkJSZ0FBQUlLTUFBQUFCQmtCQUFBSU1nSUFBQkJrQkFBQUlNZ0lBQUJBa0JFQUFJQWdJd0FBQUVGR0FBQUFnb3dBQUFBRUdRRUFBQWd5QWdBQUVHUUVBQUFneUFnQUFFQ1FFUUFBZ0NBakFBQUFRVVlBQUFDQ2pBQUFBQVFaQVFBQUNESUNBQUFRWkFRQUFDRElDQUFBUUpBUkFBQ0FJQ01BQUFCQlJnQUFBSUtNQUFBQUJCa0JBQUFJTWdJQUFCQmtCQUFBSU1nSUFBQkFrQkVBQUlBZ0l3QUFBRUZHQUFBQWdvd0FBQUFFR1FFQUFBZ3lBZ0FBRUdRRUFBQWd5QWdBQUVDUUVRQUFnQ0FqQUFBQVFVWUFBQUNDakFBQUFBUVpBUUFBQ0RJQ0FBQVFaQVFBQUNESUNBQUFRSkFSQUFDQUlDTUFBQUJCUmdBQUFJS01BQUFBQkJrQkFBQUlNZ0lBQUJCa0JBQUFJTWdJQUFCQWtCRUFBSUFnSXdBQUFFRkdBQUFBZ293QUFBQUVHUUVBQUFneUFnQUFFR1FFQUFBZ3lBZ0FBRUNRRVFBQWdDQWpBQUFBUVVZQUFBQ0NqQUFBQUFRWkFRQUFDRElDQUFBUVpBUUFBQ0RJQ0FBQVFKQVJBQUNBSUNNQUFBQkJSZ0FBQUlLTUFBQUFCQmtCQUFBSU1nSUFBQkJrQkFBQUlNZ0lBQUJBa0JFQUFJQWdJd0FBQUVGR0FBQUFnb3dBQUFBRUdRRUFBQWd5QWdBQUVHUUVBQUFneUFnQUFFQ1FFUUFBZ0NBakFBQUFRVVlBQUFDQ2pBQUFBQVFaQVFBQUNESUNBQUFRWkFRQUFDRElDQUFBUUpBUkFBQ0FJQ01BQUFCQlJnQUFBSUtNQUFBQUJCa0JBQUFJTWdJQUFCQmtCQUFBSU1nSUFBQkFrQkVBQUlBZ0l3QUFBRUZHQUFBQWdvd0FBQUFFR1FFQUFBZ3lBZ0FBRUdRRUFBQWd5QWdBQUVDUUVRQUFnQ0FqQUFBQVFVWUFBQUNDakFBQUFBUVpBUUFBQ0RJQ0FBQVFaQVFBQUNESUNBQUFRSkFSQUFDQUlDTUFBQUJCUmdBQUFJS01BQUFBQkJrQkFBQUlNZ0lBQUJCa0JBQUFJTWdJQUFCQWtCRUFBSUFnSXdBQUFFRkdBQUFBZ293QUFBQUVHUUVBQUFneUFnQUFFR1FFQUFBZ3lBZ0FBRUNRRVFBQWdDQWpBQUFBUVVZQUFBQ0NqQUFBQUFRWkFRQUFDRElDQUFBUVpBUUFBQ0RJQ0FBQVFKQVJBQUNBSUNNQUFBQkJSZ0FBQUlLTUFBQUFCQmtCQUFBSU1nSUFBQkJrQkFBQUlNZ0lBQUJBa0JFQUFJQWdJd0FBQUVGR0FBQUFnb3dBQUFBRUdRRUFBQWd5QWdBQUVHUUVBQUFneUFnQUFFQ1FFUUFBZ0NBakFBQUFRVVlBQUFDQ2pBQUFBQVFaQVFBQUNESUNBQUFRWkFRQUFDRElDQUFBUUpBUkFBQ0FJQ01BQUFCQlJnQUFBSUtNQUFBQUJCa0JBQUFJTWdJQUFCQmtCQUFBSU1nSUFBQkFrQkVBQUlBZ0l3QUFBRUZHQUFBQWdvd0FBQUFFR1FFQUFBZ3lBZ0FBRUdRRUFBQWd5QWdBQUVDUUVRQUFnQ0FqQUFBQVFVWUFBQUNDakFBQUFBUVpBUUFBQ0RJQ0FBQVFaQVFBQUNESUNBQUFRSkFSQUFDQUlDTUFBQUJCUmdBQUFJS01BQUFBQkJrQkFBQUlNZ0lBQUJCa0JBQUFJTWdJQUFCQWtCRUFBSUFnSXdBQUFFRkdBQUFBZ293QUFBQUVHUUVBQUFneUFnQUFFR1FFQUFBZ3lBZ0FBRUNRRVFBQWdDQWpBQUFBUVVZQUFBQ0NqQUFBQUFRWkFRQUFDRElDQUFBUVpBUUFBQ0RJQ0FBQVFKQVJBQUNBSUNNQUFBQkJSZ0FBQUlLTUFBQUFCQmtCQUFBSU1nSUFBQkJrQkFBQUlNZ0lBQUJBa0JFQUFJQWdJd0FBQUVGR0FBQUFnb3dBQUFBRUdRRUFBQWd5QWdBQUVHUUVBQUFneUFnQUFFQ1FFUUFBZ0NBakFBQUFRVVlBQUFDQ2pBQUFBQVFaQVFBQUNESUNBQUFRWkFRQUFDRElDQUFBUUpBUkFBQ0FJQ01BQUFCQlJnQUFBSUtNQUFBQUJCa0JBQUFJTWdJQUFCQmtCQUFBSU1nSUFBQkFrQkVBQUlBZ0l3QUFBRUZHQUFBQWdvd0FBQUFFR1FFQUFBZ3lBZ0FBRUdRRUFBQWd5QWdBQUVDUUVRQUFnQ0FqQUFBQVFVWUFBQUNDakFBQUFBUVpBUUFBQ0RJQ0FBQVFaQVFBQUNESUNBQUFRSkFSQUFDQUlDTUFBQUJCUmdBQUFJS01BQUFBQkJrQkFBQUlNZ0lBQUJCa0JBQUFJTWdJQUFCQWtCRUFBSUFnSXdBQUFFRkdBQUFBZ293QUFBQUVHUUVBQUFneUFnQUFFR1FFQUFBZ3lBZ0FBRUNRRVFBQWdDQWpBQUFBUVVZQUFBQ0NqQUFBQUFRWkFRQUFDRElDQUFBUVpBUUFBQ0RJQ0FBQVFKQVJBQUNBSUNNQUFBQkJSZ0FBQUlLTUFBQUFCQmtCQUFBSU1nSUFBQkJrQkFBQUlNZ0lBQUJBa0JFQUFJQWdJd0FBQUVGR0FBQUFnb3dBQUFBRUdRRUFBQWd5QWdBQUVHUUVBQUFneUFnQUFFQ1FFUUFBZ0NBakFBQUFRVVlBQUFDQ2pBQUFBQVFaQVFBQUNESUNBQUFRWkFRQUFDRElDQUFBUUpBUkFBQ0FJQ01BQUFCQlJnQUFBSUtNQUFBQUJCa0JBQUFJTWdJQUFCQmtCQUFBSU1nSUFBQkFrQkVBQUlBZ0l3QUFBRUZHQUFBQWdvd0FBQUFFR1FFQUFBZ3lBZ0FBRUhRQWlGY0Vvc001eXVFQUFBQUFTVVZPUks1Q1lJST0iLz48L3BhdHRlcm4+PC9kZWZzPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==",
                        loading: "eager",
                        fetchpriority: "high"
                    }))
                };
            L.defaultProps = {
                theaterMode: !1,
                autoPlay: !0,
                autoPlayDesktop: !0,
                autoPlayMobile: !1,
                autoPlayMuted: !0,
                isGeoLocated: !1,
                scheduleData: {
                    schedule: []
                }
            };
            t.a = Object(r.a)(L, e => {
                let {
                    streams: t
                } = e;
                return Array.isArray(t) && t.length > 0 && C(t).length > 0
            })
        },
        XhWE: function(e, t, a) {
            "use strict";
            var n = a("Miz2"),
                i = a("VBdi"),
                c = a.n(i),
                l = a("d4yW"),
                o = a("MwNz"),
                s = a("N4w9"),
                r = a("xAi6"),
                d = a("9N7U"),
                u = a("Z2pn"),
                b = a("kQpk"),
                m = a("NB/C"),
                h = a("w8RO"),
                p = a("C9Dh"),
                v = a("aK6H"),
                O = (a("VWn6"), a("dVLG"));
            const U = "relevance",
                g = "date",
                F = Object(i.forwardRef)((e, t) => Object(O.c)(u.a, Object(n.a)({}, e, {
                    forwardedRef: t
                })));
            class j extends c.a.Component {
                constructor(e) {
                    super(e), this.focusableElementRef = c.a.createRef()
                }
                componentDidMount() {
                    var e;
                    (this.props.isSortChanged || this.props.queryChanged) && this.focusCard(0), !this.props.showMoreButtonClick && (null === (e = this.props) || void 0 === e ? void 0 : e.focusableItem) && this.focusCard()
                }
                componentDidUpdate(e) {
                    var t, a, n;
                    (null === e || void 0 === e || null === (t = e.articles) || void 0 === t ? void 0 : t.length) < (null === (a = this.props.articles) || void 0 === a ? void 0 : a.length) && (this.props.showMoreButtonClick ? (null === (n = this.props) || void 0 === n ? void 0 : n.scrollPosition) && window.scrollTo(0, this.props.scrollPosition) : this.focusCard())
                }
                focusCard() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.focusableItem;
                    Object(d.focusArticleCard)(null === (e = this.focusableElementRef) || void 0 === e ? void 0 : e.current, "h3.gc__title a", t)
                }
                render() {
                    var e;
                    const {
                        match: t,
                        sort: a,
                        onSortChanged: n,
                        onLoadMore: c,
                        loading: s,
                        articles: r,
                        hasMorePosts: d,
                        searchInformation: u,
                        page: j
                    } = this.props, B = o.a.get("i18n");
                    if (!u && 1 === j) return this.frame(Object(O.c)(p.a, null), B);
                    const Q = null === (e = t.params) || void 0 === e ? void 0 : e.query;
                    let f;
                    f = r && 0 !== r.length ? r.map((e, t) => {
                        var a;
                        const n = null !== (a = e.updatedDate) && void 0 !== a ? a : e.date,
                            i = !!e.updatedDate && e.updatedDate !== e.date,
                            c = n && Object(O.c)("div", {
                                className: "gc__meta"
                            }, i ? Object(O.c)(b.a, {
                                date: e.updatedDate
                            }, e => Object(O.c)(m.a, {
                                date: e,
                                label: B.t("Last update"),
                                ariaLabel: B.t("Last update")
                            })) : Object(O.c)(b.a, {
                                date: e.date
                            }));
                        return Object(O.c)(F, {
                            useNonReactRedirect: !0,
                            key: `${e.id}-${j}-${t}`,
                            article: e,
                            className: "gc--list",
                            listLayout: !0,
                            highlight: Q,
                            CardMeta: c
                        })
                    }) : Object(O.c)("div", {
                        className: "search-results__no-results"
                    }, Object(O.c)(l.a, {
                        i18nKey: "No search results",
                        values: {
                            query: Q
                        }
                    }, Object(O.c)("span", null, "Your search for"), Object(O.c)("strong", null, "query"), Object(O.c)("span", null, "returned no results")));
                    let y = 0;
                    0 == u.totalResults && "undefined" !== typeof f.length ? y = f.length : r.length && (y = u.totalResults);
                    const N = y >= 100 ? B.t("Top 100 Results") : "" + B.t("About 10 results").replace("10", y),
                        S = Object(O.c)(i.Fragment, null, Object(O.c)("div", {
                            className: "l-col l-col--8"
                        }, Object(O.c)("div", {
                            className: "search-summary"
                        }, Object(O.c)("span", {
                            className: "search-summary__query",
                            "aria-hidden": "true"
                        }, N), Object(O.c)("span", {
                            className: "screen-reader-text"
                        }, N, ",", B.t("Results are sorted by"), " ", B.t(a)), Object(O.c)("div", {
                            className: "search-summary__options"
                        }, Object(O.c)("label", {
                            htmlFor: "search-sort-option",
                            className: "search-summary__options-title u-hidden--mobile"
                        }, B.t("Sort by"), ":"), Object(O.c)("div", {
                            className: "search-summary__select"
                        }, Object(O.c)("select", {
                            id: "search-sort-option",
                            value: a,
                            onChange: e => n(e.target.value)
                        }, Object(O.c)("option", {
                            value: g
                        }, B.t("Date")), Object(O.c)("option", {
                            value: U
                        }, B.t("Relevance"))), Object(O.c)("span", null, Object(O.c)(h.a, {
                            name: "arrow-down",
                            color: "medium-grey",
                            size: 12
                        }))))), Object(O.c)("div", {
                            className: "search-result__list",
                            ref: this.focusableElementRef
                        }, f, r.length && d ? Object(O.c)(v.a, {
                            buttonClassName: "grid-full-width",
                            isLoading: s,
                            loadingClassName: "section-card-list--loading grid-full-width",
                            onClick: c,
                            allyLoadingAnnouncement: !0
                        }) : null)));
                    return this.frame(Object(O.c)(i.Fragment, null, S), B)
                }
                frame(e, t) {
                    return Object(O.c)("div", {
                        className: "search-results"
                    }, Object(O.c)("div", {
                        className: "container container--grid container--white container--vertical-padding"
                    }, Object(O.c)("div", {
                        className: "container__inner"
                    }, Object(O.c)("div", {
                        className: "l-col l-col--8"
                    }, Object(O.c)("main", {
                        id: r.BYPASS_CONTENT_TYPES.MAIN,
                        tabIndex: "-1",
                        "aria-label": t.t("Main content area")
                    }, this.facets(), e)))))
                }
                facetNames() {
                    const {
                        Search: e
                    } = this.context.components;
                    return (null === e || void 0 === e ? void 0 : e.facets) || []
                }
                facets() {
                    return Object(O.c)("div", {
                        className: "facets"
                    }, this.facetNames().map(e => this.facet(e)))
                }
                facet() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AJ;
                    const {
                        activeFacet: t,
                        activateFacet: a
                    } = this.props;
                    return t === e ? Object(O.c)("div", {
                        className: "facet facet--active",
                        key: e
                    }, e) : Object(O.c)("div", {
                        className: "facet",
                        onClick: () => a(e),
                        key: e
                    }, Object(O.c)("button", {
                        className: "facet__activate-button"
                    }, e))
                }
            }
            j.defaultProps = {
                sort: U
            }, j.contextType = s.a, t.a = j
        },
        Xr0k: function(e, t, a) {
            "use strict";
            var n = a("Miz2"),
                i = a("AAFT"),
                c = a.n(i),
                l = a("VBdi"),
                o = a("3/Xq"),
                s = a("d4yW"),
                r = a("96Qw"),
                d = a("w8RO"),
                u = a("MwNz"),
                b = a("oBzm"),
                m = a("q104"),
                h = (a("LDI1"), a("dVLG"));
            t.a = e => {
                let {
                    onChange: t,
                    onSearch: a,
                    onLostFocus: i,
                    overlay: p,
                    query: v,
                    type: O
                } = e;
                const U = Object(r.useHistory)(),
                    g = Object(l.useContext)(m.a),
                    F = Object(b.c)(),
                    j = u.a.get("i18n");
                Object(l.useEffect)(() => (F.setIsSearchBarVisible(!0), () => F.setIsSearchBarVisible(!1)), []);
                const B = c()("search-bar", {
                    [O]: null === O || void 0 === O ? void 0 : O.length,
                    "search-bar--overlay": p
                });
                let Q = !0;
                if ((null === U || void 0 === U ? void 0 : U.action) && "PUSH" !== (null === U || void 0 === U ? void 0 : U.action)) {
                    const e = g.getPageState("search");
                    (null === e || void 0 === e ? void 0 : e.scrollPosition) && (null === e || void 0 === e ? void 0 : e.page) && (Q = !1)
                }
                const f = c()("search-bar__icon", {
                    "u-hidden--desktop": "not-found" !== O
                });
                return Object(h.c)(o.a, null, e => Object(h.c)("div", {
                    className: B,
                    ref: e => F.searchContainerRef.current = e
                }, Object(h.c)("div", {
                    className: "container container__inner",
                    "data-testid": "search-bar"
                }, Object(h.c)("form", {
                    className: "search-bar__form",
                    onSubmit: e => {
                        e.preventDefault(), a()
                    },
                    action: "#",
                    role: "search"
                }, Object(h.c)("div", {
                    className: "search-bar__input-container"
                }, Object(h.c)("input", Object(n.a)({
                    type: "text",
                    title: e("Type search term here")
                }, Q ? {
                    autoFocus: !0
                } : {}, {
                    className: "search-bar__input",
                    value: v,
                    placeholder: e("Search"),
                    onBlur: i,
                    onChange: e => t(e.target.value)
                })), Object(h.c)("div", {
                    className: f
                }, Object(h.c)("button", {
                    type: "submit",
                    "aria-label": e("Search")
                }, Object(h.c)(d.a, {
                    name: "search",
                    color: "grey",
                    size: 32
                })))), "not-found" !== O && Object(h.c)("div", {
                    className: "search-bar__button u-hidden--mobile"
                }, Object(h.c)("button", {
                    type: "submit",
                    disabled: !v,
                    "aria-label": e(v ? "Search Al Jazeera" : "Disabled button Search Al Jazeera. Enter a keyword to search on Al Jazeera ")
                }, e("Search")))), Object(h.c)("span", {
                    className: "google-recaptcha-policy",
                    "aria-hidden": "true"
                }, Object(h.c)(s.a, null, j.t("Protected by reCAPTCHA"))))))
            }
        },
        ZE3e: function(e, t, a) {},
        ZJ8K: function(e, t, a) {
            "use strict";
            a("VBdi");
            var n = a("MwNz"),
                i = (a("N1Ii"), a("dVLG"));
            t.a = e => {
                var t;
                const a = n.a.get("i18n"),
                    c = e.location.pathname + e.location.search;
                let l, o;
                if ((null === (t = e.location.search) || void 0 === t ? void 0 : t.indexOf("_is_iframe=true")) > 0) return null;
                return "mobile" === e.previewMode ? (l = c, o = a.t("Preview in Desktop mode")) : (l = "/mobilepreview" + c, o = a.t("Preview in Mobile mode")), Object(i.c)("div", {
                    className: "preview-button-wrapper"
                }, Object(i.c)("a", {
                    className: "preview-button",
                    href: l
                }, o))
            }
        },
        aK6H: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return o
            }));
            a("VBdi");
            var n = a("3/Xq"),
                i = a("d4yW"),
                c = a("wPnK"),
                l = (a("4I1C"), a("dVLG"));
            const o = e => {
                let {
                    buttonClassName: t = "",
                    isLoading: a = !1,
                    loadingClassName: o = "",
                    onClick: s,
                    a11yLoadingText: r = !1,
                    allyLoadingAnnouncement: d = !1
                } = e;
                return a ? Object(l.c)("div", {
                    className: "show-more-button--loading l-col--text-center " + o
                }, Object(l.c)(c.a, {
                    allyLoadingAnnouncement: d,
                    a11yLoadingText: r
                })) : Object(l.c)(n.a, null, e => Object(l.c)("button", {
                    className: "show-more-button " + t,
                    onClick: s,
                    "data-testid": "show-more-button"
                }, Object(l.c)("span", {
                    className: "screen-reader-text"
                }, e("Click here to show more content")), Object(l.c)("span", {
                    "aria-hidden": "true"
                }, Object(l.c)(i.a, null, "Show more"))))
            }
        },
        ad5H: function(e, t, a) {},
        dwW7: function(e, t, a) {},
        ebn7: function(e, t, a) {},
        eg7h: function(e, t, a) {
            "use strict";
            a("VBdi");
            var n = a("dVLG");
            t.a = () => Object(n.c)("div", {
                className: "loading-card keep-reading"
            }, Object(n.c)("p", {
                className: "horizontal-line excerpt-top-line"
            }), Object(n.c)("p", {
                className: "horizontal-line excerpt-mid-line"
            }), Object(n.c)("p", {
                className: "horizontal-line excerpt-mid-line"
            }), Object(n.c)("p", {
                className: "horizontal-line excerpt-bottom-line"
            }))
        },
        f9Y0: function(e, t, a) {
            "use strict";
            var n = a("AAFT"),
                i = a.n(n),
                c = a("VBdi"),
                l = a.n(c),
                o = a("dVLG");
            class s extends l.a.PureComponent {
                render() {
                    const {
                        darkMode: e,
                        themeRounded: t
                    } = this.props, a = i()({
                        "dark-mode": e,
                        "theme-style-rounded": t
                    });
                    return Object(o.c)("div", {
                        className: a
                    }, this.props.children)
                }
            }
            t.a = s
        },
        g5ZJ: function(e, t, a) {},
        hFvJ: function(e, t, a) {},
        jafC: function(e, t, a) {},
        kReO: function(e, t, a) {
            "use strict";
            a("VBdi");
            var n = a("96Qw"),
                i = a("t9U3"),
                c = a.n(i),
                l = a("xAi6"),
                o = a("NdV6"),
                s = a("9N7U"),
                r = a("BEYP"),
                d = a("R8Jg"),
                u = a("dVLG");
            t.a = e => {
                let {
                    match: t,
                    postType: a,
                    location: i,
                    isAmp: b = !1
                } = e;
                if ("" === a) return Object(u.c)(d.a, null);
                let m = "",
                    h = "";
                if ("liveblog" === a ? (m = "arc_sports_match_id", h = Object(s.getQueryVar)(i, "match")) : "gallery" === a ? (m = "objectId", h = Object(s.getQueryVar)(i, "id")) : t.params.objectId ? (m = "objectId", h = t.params.objectId) : (m = "postURL", h = b ? t.url.replace("/amp", "") : t.url), "" === h || "objectId" !== m && "postURL" !== m && "arc_sports_match_id" !== m) return Object(u.c)(d.a, null);
                const p = {
                    query: c.a,
                    variables: {
                        key: m,
                        value: h,
                        postType: a
                    }
                };
                return Object(u.c)(o.a, {
                    query: p
                }, e => {
                    const {
                        articles: t
                    } = e;
                    let a = null;
                    const c = `${l.OPTA_MATCH_CENTER}/${l.OPTA_MATCH_CENTER_MATCH_PAGE}`;
                    if (t && t[0]) a = "arc_sports_match_id" !== m || Object(s.isSportsVersion)(t[0]) ? t[0].link : `${c}${i.search}`;
                    else {
                        if ("arc_sports_match_id" !== m) return Object(u.c)(d.a, null);
                        a = `${c}${i.search}`
                    }
                    return Object(u.c)(r.a, null, Object(u.c)(n.Route, {
                        render: e => {
                            let {
                                staticContext: t
                            } = e;
                            const i = b ? "/amp" + a : a;
                            return t && (t.status = "arc_sports_match_id" === m ? 302 : 301, t.internalRedirectUrl = i), Object(u.c)(n.Redirect, {
                                to: i
                            })
                        }
                    }))
                })
            }
        },
        kUfG: function(e, t, a) {
            "use strict";
            var n = a("AAFT"),
                i = a.n(n),
                c = (a("VBdi"), a("3/Xq")),
                l = a("L4dX"),
                o = a("w8RO"),
                s = a("8+YW"),
                r = (a("ad5H"), a("dVLG"));
            const d = e => {
                let {
                    iconColor: t,
                    textColor: a,
                    border: n,
                    ctaText: d,
                    ctaClassName: u,
                    iconName: b
                } = e;
                const m = i()("live-cta", u, {
                    "live-cta--border": n
                });
                return Object(r.c)(c.a, null, e => Object(r.c)(s.a, {
                    className: m,
                    to: "/live",
                    label: e("Link to live stream video player"),
                    title: e("Link to live stream video player"),
                    eventTarget: "Al Jazeera Live",
                    onClick: () => Object(l.a)(l.b)
                }, Object(r.c)("div", {
                    className: "live-cta__icon-wrapper"
                }, Object(r.c)(o.a, {
                    color: t,
                    name: b,
                    size: 24
                })), Object(r.c)("span", {
                    className: "live-cta__title live-cta__title--" + a
                }, " ", e(d), " ")))
            };
            d.defaultProps = {
                textColor: "black",
                border: !1,
                ctaText: "Live",
                ctaClassName: "",
                iconName: "play"
            }, t.a = d
        },
        mZYc: function(e, t, a) {
            "use strict";
            var n = a("AAFT"),
                i = a.n(n),
                c = a("VBdi"),
                l = a("96Qw"),
                o = a("MwNz"),
                s = a("xAi6"),
                r = a("kXcp"),
                d = a("HXpp"),
                u = a("dVLG");
            const b = Object(l.withRouter)(e => {
                var t;
                let {
                    match: a
                } = e;
                if (!Object(r.b)("advertisements/status")) return null;
                const [n, l] = Object(c.useState)(null);
                Object(c.useEffect)(() => {
                    const e = window.innerHeight <= 860 ? "small" : "big";
                    l(e)
                }, []);
                const {
                    site: b
                } = a.params;
                let m, h;
                const p = "small" === n ? s.AD_SLOTS.leaderboard_atf_2 : s.AD_SLOTS.leaderboard_atf;
                b ? m = b : "opinions" === a.params[0] ? m = "opinion" : "/live" === a.url ? (m = "live/leaderboard", h = 90) : m = a.url === (null === (t = o.a.get("dailyBriefConfig")) || void 0 === t ? void 0 : t.slug) ? "daily-brief" : "news/" + a.params.category;
                const v = i()({
                    "container--ads container--ads-leaderboard-atf": !0,
                    "container--ads-leaderboard-minheight-90": 90 === h
                });
                return Object(u.c)("div", {
                    className: v
                }, (e => {
                    if (e) return Object(u.c)(d.a, {
                        adUnit: `${s.AD_UNIT_PREFIX}${m}`,
                        hideTitle: !1,
                        layout: "desktop",
                        bannerType: p
                    })
                })(n))
            });
            t.a = b
        },
        pEGF: function(e, t, a) {},
        "qs/g": function(e, t, a) {},
        tbgT: function(e, t, a) {},
        vQ8D: function(e, t, a) {
            "use strict";
            var n = a("FQxg"),
                i = a("AAFT"),
                c = a.n(i),
                l = a("VBdi"),
                o = a.n(l),
                s = a("MwNz"),
                r = a("fD7O"),
                d = a.n(r),
                u = a("9N7U"),
                b = a("w8RO"),
                m = a("+JkO"),
                h = a("59VZ");
            const p = (e, t) => {
                    switch (t.type) {
                        case "TogglePlaylistExpantion":
                            return { ...e,
                                isExpanded: !e.isExpanded,
                                expantionButtonLabel: e.isExpanded ? "Show more playlist items" : "Show less playlist items"
                            };
                        case "LoadVideos":
                            return { ...e,
                                videos: t.payload.videos,
                                videoPlaying: t.payload.videoPlaying,
                                videoPlayingIndex: t.payload.videoPlayingIndex
                            };
                        case "PlayVideo":
                            return { ...e,
                                videoPlaying: t.payload.videoPlaying,
                                videoPlayingIndex: t.payload.videoIndex,
                                nextVideoIndex: t.payload.videoIndex + 1,
                                videos: t.payload.videos,
                                isExpanded: t.payload.videoIndex > 1
                            }
                    }
                },
                v = e => ({
                    initialVideo: e,
                    videoPlaying: e,
                    videoPlayingIndex: 0,
                    nextVideoIndex: 1,
                    videos: [],
                    expantionButtonLabel: "Show more playlist items"
                });
            a("tbgT");
            var O = a("dVLG");
            const U = (e, t, a, n) => {
                    var i;
                    const c = t[a];
                    e && c && (null === c || void 0 === c ? void 0 : c.id) !== (null === (i = e.mediainfo) || void 0 === i ? void 0 : i.id) && (e.ajPlaylistIndex = a, null === e || void 0 === e || e.catalog.getVideo(c.id, (i, c) => {
                        i ? console.error(i) : (null === e || void 0 === e || e.catalog.load(c), n({
                            type: "PlayVideo",
                            payload: {
                                videoPlaying: c,
                                videoIndex: a,
                                videos: t
                            }
                        }), null === e || void 0 === e || e.play())
                    }))
                },
                g = o.a.forwardRef((e, t) => {
                    var a;
                    let {
                        term: i,
                        initialVideo: r,
                        player: g,
                        customClasses: F,
                        analyticsContext: j
                    } = e;
                    const [B, Q] = Object(l.useReducer)(p, r, v);
                    Object(l.useEffect)(() => {
                        if (g && B.videoPlaying) return U(g, B.videos, B.videoPlayingIndex, Q), null === g || void 0 === g || g.on("ended", () => {
                            U(g, B.videos, B.nextVideoIndex, Q)
                        }), () => {
                            null === g || void 0 === g || g.off("ended")
                        }
                    }, [g, B.videoPlaying, B.videos]);
                    const {
                        loading: f,
                        error: y,
                        data: N
                    } = Object(n.b)(d.a, {
                        fetchPolicy: Object(u.getFetchPolicy)(),
                        errorPolicy: Object(u.getErrorPolicy)(),
                        variables: {
                            query: i
                        }
                    }), S = c()("playlist-horizontal-container", F);
                    if (f || y || !(null === N || void 0 === N || null === (a = N.videos) || void 0 === a ? void 0 : a.length) || !r) return Object(O.c)("ul", {
                        className: S
                    });
                    const k = N.videos.filter(e => (null === e || void 0 === e ? void 0 : e.id) && e.id !== r.id && (null === e || void 0 === e ? void 0 : e.name) && (null === e || void 0 === e ? void 0 : e.thumbnail)),
                        w = [r, ...k].slice(0, 5);
                    return w.length < 3 ? null : (0 === B.videos.length && Q({
                        type: "LoadVideos",
                        payload: {
                            videos: w,
                            videoPlaying: w[0],
                            videoPlayingIndex: 0
                        }
                    }), Object(O.c)(o.a.Fragment, null, Object(O.c)("ul", {
                        id: "playlist-container",
                        className: S
                    }, w.map((e, t) => {
                        const a = c()({
                            "is-playing": t === B.videoPlayingIndex,
                            "is-next": t === B.nextVideoIndex,
                            "u-hidden--mobile": !B.isExpanded && t > 1
                        });
                        return Object(O.c)("li", {
                            key: e.id,
                            tabIndex: t
                        }, Object(O.c)(h.a, {
                            index: t,
                            title: e.name,
                            duration: e.duration,
                            imageURL: e.thumbnail,
                            className: a,
                            onClick: () => {
                                var a, n;
                                Object(m.c)(null === (a = g.el_) || void 0 === a ? void 0 : a.id, null === (n = g.bcinfo) || void 0 === n ? void 0 : n.playerId, e.duration), Q({
                                    type: "PlayVideo",
                                    payload: {
                                        videos: w,
                                        videoPlaying: e,
                                        videoIndex: t
                                    }
                                })
                            }
                        }))
                    })), Object(O.c)("button", {
                        "aria-expanded": B.isExpanded,
                        "aria-controls": "playlist-container",
                        className: "playlist-show-more-button no-styles-button expand-button u-hidden--desktop",
                        onClick: () => Q({
                            type: "TogglePlaylistExpantion"
                        })
                    }, Object(O.c)("span", {
                        className: "playlist-show-more-button__text"
                    }, s.a.get("i18n").t(B.expantionButtonLabel)), Object(O.c)(b.a, {
                        title: "",
                        name: "caret-down",
                        color: "grey",
                        size: 8
                    }))))
                });
            t.a = g
        },
        vZRE: function(e, t, a) {},
        "w+3A": function(e, t, a) {
            "use strict";
            var n = a("AAFT"),
                i = a.n(n),
                c = a("VBdi"),
                l = a.n(c),
                o = a("Ot6i"),
                s = a("MwNz"),
                r = a("N4w9"),
                d = a("P/sV"),
                u = a("pbOP"),
                b = a("9N7U"),
                m = a("ncCA"),
                h = a("w8RO"),
                p = (a("wXCR"), a("dVLG"));
            t.a = l.a.memo(e => {
                var t;
                let {
                    articles: a,
                    isCurated: n
                } = e;
                const c = Object(r.d)(),
                    v = Object(d.a)(),
                    O = Object(r.e)();
                if (!a || 0 === a.length) return null;
                const U = s.a.get("i18n"),
                    g = a.length > 1 ? "items" : "item",
                    F = null === (t = s.a.get("keep-reading")) || void 0 === t ? void 0 : t.mobileStoriesLimit;
                (v || O) && F && a.length > F && (a = a.slice(0, F));
                let j = U.t("Keep reading");
                return Object(u.e)() && (j = U.t("Recommended Stories")), Object(p.c)("div", {
                    className: "more-on"
                }, Object(p.c)("h2", {
                    className: "more-on__heading"
                }, j, " "), Object(p.c)("span", {
                    className: "screen-reader-text"
                }, `list of ${a.length} ${g}`), a.map((e, t) => {
                    var r;
                    const d = O ? Object(b.getPostLink)(e) : Object(b.getPostLink)(e) + "?traffic_source=KeepReading",
                        u = Object(b.getReplacementHeadline)(e),
                        v = i()("more-on__article", {
                            "limited-mobile-stories": F
                        }),
                        g = i()("more-on__article-heading", {
                            "more-on__article-heading__trimmed": null === (r = s.a.get("keep-reading")) || void 0 === r ? void 0 : r.trimmedTitles
                        }),
                        j = "external-article" === e.postType,
                        B = t + 1;
                    return Object(p.c)("article", {
                        className: v,
                        key: "more-on-" + d
                    }, Object(p.c)("span", {
                        className: "screen-reader-text"
                    }, `list ${B} of ${a.length}`), Object(p.c)("h3", {
                        className: g
                    }, Object(p.c)(m.a, {
                        className: "more-on__link",
                        title: u,
                        to: d,
                        article: e,
                        label: "Keep Reading - URL " + B,
                        eventTarget: u,
                        analyticsMetaProps: Object(o.d)({
                            recirculationSource: n ? "KeepReadingCurated" : "KeepReadingAutomated"
                        }),
                        isAmp: c.isAMP
                    }, u), j && Object(p.c)(l.a.Fragment, null, Object(p.c)(h.a, {
                        className: "external-link__icon",
                        name: "external-link",
                        size: 12,
                        title: "External Link",
                        viewBox: "0 0 16 16"
                    }), Object(p.c)("span", {
                        className: "screen-reader-text"
                    }, U.t("Opens new browser SR Text")))))
                }), Object(p.c)("span", {
                    className: "screen-reader-text"
                }, U.t("end of list")))
            })
        },
        wPnK: function(e, t, a) {
            "use strict";
            a("VBdi");
            var n = a("MwNz"),
                i = (a("CnNu"), a("dVLG"));
            const c = e => {
                    let {
                        allyLoadingAnnouncement: t = !1,
                        a11yLoadingText: a,
                        height: n,
                        viewBox: c
                    } = e;
                    return Object(i.c)("div", {
                        className: "loading-animation"
                    }, t && Object(i.c)(l, {
                        a11yLoadingText: a
                    }), Object(i.c)("svg", {
                        width: "80px",
                        height: n,
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: c,
                        preserveAspectRatio: "xMidYMid"
                    }, Object(i.c)("g", {
                        transform: "translate(20 50)"
                    }, Object(i.c)("circle", {
                        cx: "0",
                        cy: "0",
                        r: "7",
                        fill: "#cccccc",
                        fillOpacity: "1",
                        transform: "scale(0.99275 0.99275)"
                    }, Object(i.c)("animateTransform", {
                        attributeName: "transform",
                        type: "scale",
                        begin: "-0.375s",
                        calcMode: "spline",
                        keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                        values: "0;1;0",
                        keyTimes: "0;0.5;1",
                        dur: "1s",
                        repeatCount: "indefinite"
                    }))), Object(i.c)("g", {
                        transform: "translate(40 50)"
                    }, Object(i.c)("circle", {
                        cx: "0",
                        cy: "0",
                        r: "7",
                        fill: "#cccccc",
                        fillOpacity: "0.8",
                        transform: "scale(0.773605 0.773605)"
                    }, Object(i.c)("animateTransform", {
                        attributeName: "transform",
                        type: "scale",
                        begin: "-0.25s",
                        calcMode: "spline",
                        keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                        values: "0;1;0",
                        keyTimes: "0;0.5;1",
                        dur: "1s",
                        repeatCount: "indefinite"
                    }))), Object(i.c)("g", {
                        transform: "translate(60 50)"
                    }, Object(i.c)("circle", {
                        cx: "0",
                        cy: "0",
                        r: "7",
                        fill: "#cccccc",
                        fillOpacity: "0.6",
                        transform: "scale(0.42525 0.42525)"
                    }, Object(i.c)("animateTransform", {
                        attributeName: "transform",
                        type: "scale",
                        begin: "-0.125s",
                        calcMode: "spline",
                        keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                        values: "0;1;0",
                        keyTimes: "0;0.5;1",
                        dur: "1s",
                        repeatCount: "indefinite"
                    }))), Object(i.c)("g", {
                        transform: "translate(80 50)"
                    }, Object(i.c)("circle", {
                        cx: "0",
                        cy: "0",
                        r: "7",
                        fill: "#cccccc",
                        fillOpacity: "0.4",
                        transform: "scale(0.113418 0.113418)"
                    }, Object(i.c)("animateTransform", {
                        attributeName: "transform",
                        type: "scale",
                        begin: "0s",
                        calcMode: "spline",
                        keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                        values: "0;1;0",
                        keyTimes: "0;0.5;1",
                        dur: "1s",
                        repeatCount: "indefinite"
                    })))))
                },
                l = e => {
                    let {
                        a11yLoadingText: t = !1
                    } = e;
                    const a = t || n.a.get("i18n").t("loading");
                    return Object(i.c)("div", {
                        className: "screen-reader-text",
                        "aria-live": "assertive",
                        role: "status",
                        tabIndex: -1
                    }, a)
                };
            c.defaultProps = {
                height: "80px",
                viewBox: "0 0 100 100"
            }, t.a = c
        },
        wXCR: function(e, t, a) {},
        xvSA: function(e, t, a) {
            "use strict";
            a("VBdi");
            var n = a("P/sV"),
                i = a("7RPU"),
                c = a("PrL2"),
                l = a("SZcm"),
                o = a("LkAa"),
                s = a("dVLG");
            const r = e => {
                let {
                    accountId: t,
                    videoID: a,
                    playerID: r,
                    youtubeChannelID: d,
                    youtubeVideoID: u,
                    source: b,
                    autoPlayDesktop: m,
                    autoPlayMobile: h,
                    autoPlayMuted: p,
                    featuredImage: v,
                    scheduleData: O,
                    label: U,
                    videoPlacement: g = "",
                    videoLink: F,
                    closedCaptions: j = !1,
                    manageBCClosedCaptions: B = !1,
                    isPlayerClicked: Q,
                    liveStreamDesktop: f,
                    liveStreamMobile: y,
                    bcPlaybackUrl: N = ""
                } = e;
                const S = Object(n.a)();
                let k = S ? h : m;
                j && (k = !0);
                const w = new Date;
                let _ = null !== U && void 0 !== U ? U : "Live Stream";
                const C = new c.a(w, O),
                    V = null === C || void 0 === C ? void 0 : C.getCurrentProgramme(w, Object(i.n)());
                return (null === V || void 0 === V ? void 0 : V.name) && (_ = `${_} - ${V.name}`), S && f || !S && y ? null : "youtube" === b ? Object(s.c)(o.a, {
                    channelId: d,
                    autoplay: k,
                    label: _,
                    streaming: !0,
                    videoPlacement: g,
                    videoLink: F,
                    startMuted: p,
                    closedCaptions: j,
                    isPlayerClicked: Q
                }) : "youtube_video" === b ? Object(s.c)(o.a, {
                    videoId: u,
                    autoplay: k,
                    label: _,
                    streaming: !0,
                    videoPlacement: g,
                    videoLink: F,
                    startMuted: p,
                    closedCaptions: j,
                    isPlayerClicked: Q
                }) : Object(s.c)(l.a, {
                    videoAccountId: t,
                    videoId: a,
                    videoPlayerId: r,
                    bcPlaybackUrl: N,
                    autoPlayDesktop: m,
                    autoPlayMobile: h,
                    autoPlayMuted: p,
                    featuredImageURL: null === v || void 0 === v ? void 0 : v.sourceUrl,
                    label: _,
                    streaming: !0,
                    videoPlacement: g,
                    videoLink: F,
                    manageBCClosedCaptions: B,
                    isPlayerClicked: Q
                })
            };
            r.defaultProps = {
                autoPlay: !0,
                autoPlayDesktop: !0,
                autoPlayMobile: !1,
                autoPlayMuted: !0
            }, t.a = r
        },
        yEgg: function(e, t, a) {
            "use strict";
            var n = a("VBdi"),
                i = a("vUkw"),
                c = a.n(i),
                l = a("1P4M"),
                o = a.n(l),
                s = a("ZDfq"),
                r = a("q9ob"),
                d = a("AAFT"),
                u = a.n(d),
                b = a("w8RO"),
                m = (a("ATr5"), a("dVLG"));
            var h = e => {
                let {
                    type: t
                } = e;
                const a = Object(n.useRef)(null),
                    i = u()("sponsored-banner__tooltip-wrapper", {
                        "sponsored-banner__tooltip-wrapper--footer": "footer" === t
                    });
                return Object(m.c)("div", {
                    className: i,
                    "data-testid": "tooltip-wrapper"
                }, Object(m.c)(b.a, {
                    name: "help-icon",
                    color: "footer" === t ? "black" : "white",
                    size: "footer" === t ? 20 : 24,
                    title: "Paid Content",
                    onClick: e => {
                        e.preventDefault(), a.current.classList.remove("hidden")
                    }
                }), Object(m.c)("div", {
                    className: "sponsored-banner__tooltip hidden",
                    ref: a
                }, "This paid content does not necessarily represent the viewpoint of Al Jazeera Media Network.", Object(m.c)(b.a, {
                    name: "close",
                    color: "white",
                    size: 12,
                    title: "Close",
                    onClick: e => {
                        e.preventDefault(), a.current.classList.add("hidden")
                    }
                })), " ")
            };
            a("HGQY");
            const p = (e, t) => {
                    const {
                        logoUrl: a,
                        logoLink: n,
                        footerLogoUrl: i,
                        footerLogoLink: c
                    } = (null === t || void 0 === t ? void 0 : t.sponsorTax[0]) || "", l = "footer" === e ? i : a, o = "footer" === e ? c : n;
                    return o && l ? Object(m.c)("div", {
                        className: `sp-${e}__logo`
                    }, Object(m.c)("a", {
                        href: o,
                        target: "_blank",
                        rel: "noreferrer"
                    }, Object(m.c)("img", {
                        src: l
                    }))) : l ? Object(m.c)("div", {
                        className: `sp-${e}__logo`
                    }, Object(m.c)("img", {
                        src: l
                    })) : void 0
                },
                v = (e, t) => {
                    const {
                        sponsorshipType: a,
                        sponsorHeaderBarText: n,
                        sponsorFooterBarText: i,
                        hideSponsorFooterBarText: c,
                        hideSponsorHeaderBarText: l
                    } = t || {}, o = "footer" === e, s = o ? "above" : "below";
                    if (c && o || l && !o) return "";
                    const {
                        name: r
                    } = (null === t || void 0 === t ? void 0 : t.sponsorTax[0]) || "";
                    let d = "";
                    if ("paid" === a) d = o ? i || `Paid for by the <b>${r}</b>` : n || `Paid for by <b>${r}</b>`;
                    else {
                        d = o ? i : n;
                        const e = `The content ${s} is funded by <b>${r}</b> and does not represent the viewpoint of Al Jazeera Media Network.`;
                        d = d || e
                    }
                    return d
                };
            t.a = Object(r.a)(e => {
                let {
                    type: t,
                    data: {
                        article: a
                    }
                } = e;
                const {
                    sponsorshipType: n
                } = a || {};
                if (!a) return null;
                const i = v(t, a);
                return "paid" === n ? Object(m.c)("div", {
                    className: "sp-" + t
                }, Object(m.c)("div", {
                    className: "container__inner"
                }, Object(m.c)("span", null, "Paid Content ", Object(m.c)(h, {
                    type: t
                })), Object(m.c)("h5", {
                    className: `sp-${t}__title`,
                    dangerouslySetInnerHTML: {
                        __html: c()(i, s.summaryHtml)
                    }
                }), p(t, a))) : Object(m.c)("div", {
                    className: "sp-" + t
                }, Object(m.c)("div", {
                    className: "container__inner"
                }, Object(m.c)("span", null, "Sponsored Content"), Object(m.c)("h5", {
                    className: `sp-${t}__title`,
                    dangerouslySetInnerHTML: {
                        __html: c()(i, s.summaryHtml)
                    }
                }), p(t, a)))
            }, {
                query: o.a,
                variables: e => ({
                    name: e.match.params.postName,
                    postType: "sponsored",
                    preview: e.archipelago.previewID
                })
            })
        }
    }
]);