/*! For license information please see brightcove-libs~7dbd8cdd.bc9b4013.chunk.js.LICENSE */
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [10], {
        J0m8: function(e, t, n) {
            "use strict";
            var r = n("yvE2"),
                o = n.n(r),
                i = n("ED4n"),
                a = n.n(i);

            function s() {
                return (s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                d = ["catalogSearch", "catalogSequence"],
                c = ["adConfigId", "applicationId", "catalogSearch", "catalogSequence", "playlistId", "playlistVideoId", "videoId"],
                p = function(e) {
                    return Object.keys(e).filter((function(e) {
                        return -1 !== c.indexOf(e)
                    })).reduce((function(t, n) {
                        var r = function(e, t) {
                            if (e && void 0 !== e[t]) {
                                if ("string" !== typeof e[t] && -1 !== d.indexOf(t)) try {
                                    return encodeURIComponent(JSON.stringify(e[t]))
                                } catch (n) {
                                    return
                                }
                                return encodeURIComponent(String(e[t]).trim()) || void 0
                            }
                        }(e, n);
                        return void 0 !== r && (t += t ? "&" : "?", t += encodeURIComponent(n) + "=" + r), t
                    }), "")
                },
                u = function(e) {
                    var t = e.accountId,
                        n = e.base,
                        r = void 0 === n ? "https://players.brightcove.net" : n,
                        o = e.playerId,
                        i = void 0 === o ? "default" : o,
                        a = e.embedId,
                        s = void 0 === a ? "default" : a,
                        d = e.iframe,
                        c = void 0 !== d && d,
                        u = e.minified,
                        f = void 0 === u || u,
                        y = e.queryParams,
                        m = void 0 === y ? null : y,
                        h = "";
                    c ? h += "html" : (f && (h += "min."), h += "js"), "/" === r.charAt(r.length - 1) && (r = r.substring(0, r.length - 1));
                    var v = "";
                    return c && m && "object" === ("undefined" === typeof m ? "undefined" : l(m)) && (v = p(m)), r + "/" + (t = encodeURIComponent(t)) + "/" + (i = encodeURIComponent(i)) + "_" + (s = encodeURIComponent(s)) + "/index." + h + v
                };
            u.VERSION = "1.2.0";
            var f = {
                    embedId: "default",
                    embedType: "in-page",
                    playerId: "default",
                    Promise: a.a.Promise,
                    refNodeInsert: "append"
                },
                y = "video",
                m = "video-js",
                h = "in-page",
                v = "iframe",
                b = "append",
                E = "prepend",
                g = "before",
                I = "after",
                N = "replace",
                _ = ["catalogSearch", "catalogSequence"],
                O = "https://players.brightcove.net/",
                S = function(e) {
                    if (e.playerUrl) return e.playerUrl;
                    var t = e.accountId,
                        n = e.playerId,
                        r = e.embedId,
                        o = e.embedOptions,
                        i = e.embedType === v;
                    return u({
                        accountId: t,
                        playerId: n,
                        embedId: r,
                        iframe: i,
                        base: O,
                        minified: !o || !o.unminified,
                        queryParams: e
                    })
                },
                R = function() {
                    return O
                },
                P = function(e) {
                    O = e
                },
                w = function(e) {
                    return Boolean(e && 1 === e.nodeType)
                },
                C = function(e) {
                    return Boolean(w(e) && e.parentNode)
                },
                A = function(e, t, n) {
                    return t ? function(e, t) {
                        if (!e.pip) return t;
                        var n = o.a.createElement("div");
                        return n.classList.add("vjs-pip-container"), n.appendChild(t), n
                    }(t, function(e, t, n) {
                        if (!t.responsive) return n;
                        n.style.position = "absolute", n.style.top = "0px", n.style.right = "0px", n.style.bottom = "0px", n.style.left = "0px", n.style.width = "100%", n.style.height = "100%";
                        var r = s({
                                aspectRatio: "16:9",
                                iframeHorizontalPlaylist: !1,
                                maxWidth: "100%"
                            }, t.responsive),
                            i = r.aspectRatio.split(":").map(Number),
                            a = o.a.createElement("div"),
                            l = i[1] / i[0] * 100;
                        e === v && r.iframeHorizontalPlaylist && (l *= 1.25), a.style.paddingTop = l + "%", a.appendChild(n);
                        var d = o.a.createElement("div");
                        return d.style.position = "relative", d.style.display = "block", d.style.maxWidth = r.maxWidth, d.appendChild(a), d
                    }(e, t, n)) : n
                },
                j = function(e) {
                    return function(e, t) {
                        var n = e.refNode,
                            r = e.refNodeInsert,
                            i = n.parentNode,
                            a = A(e.embedType, e.embedOptions, t);
                        if (r === g ? i.insertBefore(a, n) : r === I ? i.insertBefore(a, n.nextElementSibling || null) : r === N ? i.replaceChild(a, n) : r === E ? n.insertBefore(a, n.firstChild || null) : n.appendChild(a), e.embedOptions && e.embedOptions.playlist) {
                            var s = e.embedOptions.playlist.legacy ? "ul" : "div",
                                l = o.a.createElement(s);
                            l.classList.add("vjs-playlist"), t.parentNode.insertBefore(l, t.nextElementSibling || null)
                        }
                        return e.refNode = null, t
                    }(e, function(e, t) {
                        if ("function" !== typeof e.onEmbedCreated) return t;
                        var n = e.onEmbedCreated(t);
                        return w(n) ? n : t
                    }(e, e.embedType === v ? function(e) {
                        var t = o.a.createElement("iframe");
                        return t.setAttribute("allow", "autoplay;encrypted-media;fullscreen"), t.setAttribute("allowfullscreen", "allowfullscreen"), t.src = S(e), t
                    }(e) : function(e) {
                        var t = e.embedOptions,
                            n = {
                                adConfigId: "data-ad-config-id",
                                applicationId: "data-application-id",
                                catalogSearch: "data-catalog-search",
                                catalogSequence: "data-catalog-sequence",
                                deliveryConfigId: "data-delivery-config-id",
                                playlistId: "data-playlist-id",
                                playlistVideoId: "data-playlist-video-id",
                                poster: "poster",
                                videoId: "data-video-id"
                            },
                            r = t && t.tagName || m,
                            i = o.a.createElement(r);
                        return Object.keys(n).filter((function(t) {
                            return e[t]
                        })).forEach((function(t) {
                            var r;
                            if ("string" !== typeof e[t] && -1 !== _.indexOf(t)) try {
                                r = JSON.stringify(e[t])
                            } catch (o) {
                                return
                            } else r = String(e[t]).trim();
                            i.setAttribute(n[t], r)
                        })), i.setAttribute("controls", "controls"), i.classList.add("video-js"), i
                    }(e)))
                },
                D = new a.a.Map,
                T = function(e) {
                    return (e.accountId || "*") + "_" + e.playerId + "_" + e.embedId
                },
                B = function() {
                    D.clear()
                },
                U = function(e) {
                    D.forEach(e)
                },
                x = function(e) {
                    return D.has(T(e))
                },
                q = function(e) {
                    D.set(T(e), e.accountId ? S(e) : "")
                },
                M = /^([A-Za-z0-9]+)_([A-Za-z0-9]+)$/,
                F = function() {
                    return a.a.bc ? Object.keys(a.a.bc).filter((function(e) {
                        return M.test(e)
                    })) : []
                },
                L = function(e) {
                    e && Object.keys(e.players).forEach((function(t) {
                        var n = e.players[t];
                        n && n.dispose()
                    }))
                },
                V = function() {
                    U((function(e, t) {
                        e && Array.prototype.slice.call(o.a.querySelectorAll('script[src="' + e + '"]')).forEach((function(e) {
                            return e.parentNode.removeChild(e)
                        }))
                    })), B(), L(a.a.videojs), F().forEach((function(e) {
                        return L(a.a.bc[e].videojs)
                    })), Object.keys(a.a).filter((function(e) {
                        return /^videojs/i.test(e) || /^(bc)$/.test(e)
                    })).forEach((function(e) {
                        delete a.a[e]
                    }))
                };
            (function() {
                F().forEach((function(e) {
                    var t = e.match(M),
                        n = {
                            playerId: t[1],
                            embedId: t[2]
                        };
                    x(n) || q(n)
                }))
            })();
            var k = function(e) {
                    return "function" === typeof e
                },
                z = function(e) {
                    var t, n = e.accountId,
                        r = e.embedOptions,
                        o = e.embedType,
                        i = e.options,
                        a = e.refNode,
                        s = e.refNodeInsert;
                    if (!n) throw new Error("accountId is required");
                    if (!C(a)) throw new Error("refNode must resolve to a node attached to the DOM");
                    if (! function(e) {
                            return e === h || e === v
                        }(o)) throw new Error("embedType is missing or invalid");
                    if (o === v && i) throw new Error("cannot use options with an iframe embed");
                    if (r && void 0 !== r.tagName && ((t = r.tagName) !== m && t !== y)) throw new Error('embedOptions.tagName is invalid (value: "' + r.tagName + '")');
                    if (r && r.responsive && r.responsive.aspectRatio && !/^\d+\:\d+$/.test(r.responsive.aspectRatio)) throw new Error('embedOptions.responsive.aspectRatio must be in the "n:n" format (value: "' + r.responsive.aspectRatio + '")');
                    if (! function(e) {
                            return e === b || e === E || e === g || e === I || e === N
                        }(s)) throw new Error("refNodeInsert is missing or invalid")
                },
                J = function(e, t, n, r) {
                    var o, i = e.embedId,
                        s = e.playerId,
                        l = a.a.bc[s + "_" + i] || a.a.bc;
                    if (!l) return r(new Error("missing bc function for " + s));
                    q(e);
                    try {
                        (o = l(t, e.options)).bcinfo && (o.bcinfo.PLAYER_LOADER = !0)
                    } catch (c) {
                        var d = "Could not initialize the Brightcove Player.";
                        return e.embedOptions.tagName === m && (d += ' You are attempting to embed using a "video-js" element. Please ensure that your Player is v6.11.0 or newer in order to support this embed type. Alternatively, pass `"video"` for `embedOptions.tagName`.'), r(new Error(d))
                    }
                    n({
                        type: h,
                        ref: o
                    })
                },
                Y = function(e, t, n) {
                    e.refNode = function(e) {
                        return C(e) ? e : "string" === typeof e ? o.a.querySelector(e) : null
                    }(e.refNode), z(e);
                    var r = e.refNode,
                        i = e.refNodeInsert,
                        a = r.parentNode,
                        s = j(e);
                    if (e.embedType !== v) {
                        if (x(e)) return J(e, s, t, n);
                        var l = o.a.createElement("script");
                        l.onload = function() {
                            return J(e, s, t, n)
                        }, l.onerror = function() {
                            n(new Error("player script could not be downloaded"))
                        }, l.async = !0, l.charset = "utf-8", l.src = S(e), i === N ? a.appendChild(l) : r.appendChild(l)
                    } else t({
                        type: v,
                        ref: s
                    })
                },
                W = function(e) {
                    var t = s({}, f, e),
                        n = t.Promise,
                        r = t.onSuccess,
                        o = t.onFailure;
                    return !k(n) || k(r) || k(o) ? Y(t, k(r) ? r : function() {}, k(o) ? o : function(e) {
                        throw e
                    }) : new n((function(e, n) {
                        return Y(t, e, n)
                    }))
                },
                G = function(e, t) {
                    Object.defineProperty(W, e, {
                        configurable: !1,
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                };
            G("getBaseUrl", (function() {
                return R()
            })), G("setBaseUrl", (function(e) {
                P(e)
            })), G("getUrl", (function(e) {
                return S(e)
            })), G("reset", (function() {
                return V()
            })), [
                ["EMBED_TAG_NAME_VIDEO", y],
                ["EMBED_TAG_NAME_VIDEOJS", m],
                ["EMBED_TYPE_IN_PAGE", h],
                ["EMBED_TYPE_IFRAME", v],
                ["REF_NODE_INSERT_APPEND", b],
                ["REF_NODE_INSERT_PREPEND", E],
                ["REF_NODE_INSERT_BEFORE", g],
                ["REF_NODE_INSERT_AFTER", I],
                ["REF_NODE_INSERT_REPLACE", N],
                ["VERSION", "1.8.0"]
            ].forEach((function(e) {
                G(e[0], e[1])
            })), t.a = W
        },
        niUx: function(e, t, n) {
            "use strict";
            var r = n("VBdi"),
                o = n.n(r),
                i = n("yvE2"),
                a = n.n(i),
                s = n("ED4n"),
                l = n.n(s);

            function d() {
                return (d = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var p = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                u = ["catalogSearch", "catalogSequence"],
                f = ["adConfigId", "applicationId", "catalogSearch", "catalogSequence", "playlistId", "playlistVideoId", "videoId"],
                y = function(e) {
                    return Object.keys(e).filter((function(e) {
                        return -1 !== f.indexOf(e)
                    })).reduce((function(t, n) {
                        var r = function(e, t) {
                            if (e && void 0 !== e[t]) {
                                if ("string" !== typeof e[t] && -1 !== u.indexOf(t)) try {
                                    return encodeURIComponent(JSON.stringify(e[t]))
                                } catch (n) {
                                    return
                                }
                                return encodeURIComponent(String(e[t]).trim()) || void 0
                            }
                        }(e, n);
                        return void 0 !== r && (t += t ? "&" : "?", t += encodeURIComponent(n) + "=" + r), t
                    }), "")
                },
                m = function(e) {
                    var t = e.accountId,
                        n = e.base,
                        r = void 0 === n ? "https://players.brightcove.net" : n,
                        o = e.playerId,
                        i = void 0 === o ? "default" : o,
                        a = e.embedId,
                        s = void 0 === a ? "default" : a,
                        l = e.iframe,
                        d = void 0 !== l && l,
                        c = e.minified,
                        u = void 0 === c || c,
                        f = e.queryParams,
                        m = void 0 === f ? null : f,
                        h = "";
                    d ? h += "html" : (u && (h += "min."), h += "js"), "/" === r.charAt(r.length - 1) && (r = r.substring(0, r.length - 1));
                    var v = "";
                    return d && m && "object" === ("undefined" === typeof m ? "undefined" : p(m)) && (v = y(m)), r + "/" + (t = encodeURIComponent(t)) + "/" + (i = encodeURIComponent(i)) + "_" + (s = encodeURIComponent(s)) + "/index." + h + v
                };
            m.VERSION = "1.2.0";
            var h = {
                    embedId: "default",
                    embedType: "in-page",
                    playerId: "default",
                    Promise: l.a.Promise,
                    refNodeInsert: "append"
                },
                v = "video",
                b = "video-js",
                E = "in-page",
                g = "iframe",
                I = "append",
                N = "prepend",
                _ = "before",
                O = "after",
                S = "replace",
                R = ["catalogSearch", "catalogSequence"],
                P = "https://players.brightcove.net/",
                w = function(e) {
                    if (e.playerUrl) return e.playerUrl;
                    var t = e.accountId,
                        n = e.playerId,
                        r = e.embedId,
                        o = e.embedOptions,
                        i = e.embedType === g;
                    return m({
                        accountId: t,
                        playerId: n,
                        embedId: r,
                        iframe: i,
                        base: P,
                        minified: !o || !o.unminified,
                        queryParams: e
                    })
                },
                C = function() {
                    return P
                },
                A = function(e) {
                    P = e
                },
                j = function(e) {
                    return Boolean(e && 1 === e.nodeType)
                },
                D = function(e) {
                    return Boolean(j(e) && e.parentNode)
                },
                T = function(e, t, n) {
                    return t ? function(e, t) {
                        if (!e.pip) return t;
                        var n = a.a.createElement("div");
                        return n.classList.add("vjs-pip-container"), n.appendChild(t), n
                    }(t, function(e, t, n) {
                        if (!t.responsive) return n;
                        n.style.position = "absolute", n.style.top = "0px", n.style.right = "0px", n.style.bottom = "0px", n.style.left = "0px", n.style.width = "100%", n.style.height = "100%";
                        var r = c({
                                aspectRatio: "16:9",
                                iframeHorizontalPlaylist: !1,
                                maxWidth: "100%"
                            }, t.responsive),
                            o = r.aspectRatio.split(":").map(Number),
                            i = a.a.createElement("div"),
                            s = o[1] / o[0] * 100;
                        e === g && r.iframeHorizontalPlaylist && (s *= 1.25), i.style.paddingTop = s + "%", i.appendChild(n);
                        var l = a.a.createElement("div");
                        return l.style.position = "relative", l.style.display = "block", l.style.maxWidth = r.maxWidth, l.appendChild(i), l
                    }(e, t, n)) : n
                },
                B = function(e) {
                    return function(e, t) {
                        var n = e.refNode,
                            r = e.refNodeInsert,
                            o = n.parentNode,
                            i = T(e.embedType, e.embedOptions, t);
                        if (r === _ ? o.insertBefore(i, n) : r === O ? o.insertBefore(i, n.nextElementSibling || null) : r === S ? o.replaceChild(i, n) : r === N ? n.insertBefore(i, n.firstChild || null) : n.appendChild(i), e.embedOptions && e.embedOptions.playlist) {
                            var s = e.embedOptions.playlist.legacy ? "ul" : "div",
                                l = a.a.createElement(s);
                            l.classList.add("vjs-playlist"), t.parentNode.insertBefore(l, t.nextElementSibling || null)
                        }
                        return e.refNode = null, t
                    }(e, function(e, t) {
                        if ("function" !== typeof e.onEmbedCreated) return t;
                        var n = e.onEmbedCreated(t);
                        return j(n) ? n : t
                    }(e, e.embedType === g ? function(e) {
                        var t = a.a.createElement("iframe");
                        return t.setAttribute("allow", "autoplay;encrypted-media;fullscreen"), t.setAttribute("allowfullscreen", "allowfullscreen"), t.src = w(e), t
                    }(e) : function(e) {
                        var t = e.embedOptions,
                            n = {
                                adConfigId: "data-ad-config-id",
                                applicationId: "data-application-id",
                                catalogSearch: "data-catalog-search",
                                catalogSequence: "data-catalog-sequence",
                                deliveryConfigId: "data-delivery-config-id",
                                playlistId: "data-playlist-id",
                                playlistVideoId: "data-playlist-video-id",
                                poster: "poster",
                                videoId: "data-video-id"
                            },
                            r = t && t.tagName || b,
                            o = a.a.createElement(r);
                        return Object.keys(n).filter((function(t) {
                            return e[t]
                        })).forEach((function(t) {
                            var r;
                            if ("string" !== typeof e[t] && -1 !== R.indexOf(t)) try {
                                r = JSON.stringify(e[t])
                            } catch (i) {
                                return
                            } else r = String(e[t]).trim();
                            o.setAttribute(n[t], r)
                        })), o.setAttribute("controls", "controls"), o.classList.add("video-js"), o
                    }(e)))
                },
                U = new l.a.Map,
                x = function(e) {
                    return (e.accountId || "*") + "_" + e.playerId + "_" + e.embedId
                },
                q = function() {
                    U.clear()
                },
                M = function(e) {
                    U.forEach(e)
                },
                F = function(e) {
                    return U.has(x(e))
                },
                L = function(e) {
                    U.set(x(e), e.accountId ? w(e) : "")
                },
                V = /^([A-Za-z0-9]+)_([A-Za-z0-9]+)$/,
                k = function() {
                    return l.a.bc ? Object.keys(l.a.bc).filter((function(e) {
                        return V.test(e)
                    })) : []
                },
                z = function(e) {
                    e && Object.keys(e.players).forEach((function(t) {
                        var n = e.players[t];
                        n && n.dispose()
                    }))
                },
                J = function() {
                    M((function(e, t) {
                        e && Array.prototype.slice.call(a.a.querySelectorAll('script[src="' + e + '"]')).forEach((function(e) {
                            return e.parentNode.removeChild(e)
                        }))
                    })), q(), z(l.a.videojs), k().forEach((function(e) {
                        return z(l.a.bc[e].videojs)
                    })), Object.keys(l.a).filter((function(e) {
                        return /^videojs/i.test(e) || /^(bc)$/.test(e)
                    })).forEach((function(e) {
                        delete l.a[e]
                    }))
                };
            (function() {
                k().forEach((function(e) {
                    var t = e.match(V),
                        n = {
                            playerId: t[1],
                            embedId: t[2]
                        };
                    F(n) || L(n)
                }))
            })();
            var Y = function(e) {
                    return "function" === typeof e
                },
                W = function(e) {
                    var t, n = e.accountId,
                        r = e.embedOptions,
                        o = e.embedType,
                        i = e.options,
                        a = e.refNode,
                        s = e.refNodeInsert;
                    if (!n) throw new Error("accountId is required");
                    if (!D(a)) throw new Error("refNode must resolve to a node attached to the DOM");
                    if (! function(e) {
                            return e === E || e === g
                        }(o)) throw new Error("embedType is missing or invalid");
                    if (o === g && i) throw new Error("cannot use options with an iframe embed");
                    if (r && void 0 !== r.tagName && ((t = r.tagName) !== b && t !== v)) throw new Error('embedOptions.tagName is invalid (value: "' + r.tagName + '")');
                    if (r && r.responsive && r.responsive.aspectRatio && !/^\d+\:\d+$/.test(r.responsive.aspectRatio)) throw new Error('embedOptions.responsive.aspectRatio must be in the "n:n" format (value: "' + r.responsive.aspectRatio + '")');
                    if (! function(e) {
                            return e === I || e === N || e === _ || e === O || e === S
                        }(s)) throw new Error("refNodeInsert is missing or invalid")
                },
                G = function(e, t, n, r) {
                    var o, i = e.embedId,
                        a = e.playerId,
                        s = l.a.bc[a + "_" + i] || l.a.bc;
                    if (!s) return r(new Error("missing bc function for " + a));
                    L(e);
                    try {
                        (o = s(t, e.options)).bcinfo && (o.bcinfo.PLAYER_LOADER = !0)
                    } catch (c) {
                        var d = "Could not initialize the Brightcove Player.";
                        return e.embedOptions.tagName === b && (d += ' You are attempting to embed using a "video-js" element. Please ensure that your Player is v6.11.0 or newer in order to support this embed type. Alternatively, pass `"video"` for `embedOptions.tagName`.'), r(new Error(d))
                    }
                    n({
                        type: E,
                        ref: o
                    })
                },
                H = function(e, t, n) {
                    e.refNode = function(e) {
                        return D(e) ? e : "string" === typeof e ? a.a.querySelector(e) : null
                    }(e.refNode), W(e);
                    var r = e.refNode,
                        o = e.refNodeInsert,
                        i = r.parentNode,
                        s = B(e);
                    if (e.embedType !== g) {
                        if (F(e)) return G(e, s, t, n);
                        var l = a.a.createElement("script");
                        l.onload = function() {
                            return G(e, s, t, n)
                        }, l.onerror = function() {
                            n(new Error("player script could not be downloaded"))
                        }, l.async = !0, l.charset = "utf-8", l.src = w(e), o === S ? i.appendChild(l) : r.appendChild(l)
                    } else t({
                        type: g,
                        ref: s
                    })
                },
                $ = function(e) {
                    var t = c({}, h, e),
                        n = t.Promise,
                        r = t.onSuccess,
                        o = t.onFailure;
                    return !Y(n) || Y(r) || Y(o) ? H(t, Y(r) ? r : function() {}, Y(o) ? o : function(e) {
                        throw e
                    }) : new n((function(e, n) {
                        return H(t, e, n)
                    }))
                },
                Z = function(e, t) {
                    Object.defineProperty($, e, {
                        configurable: !1,
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                };
            Z("getBaseUrl", (function() {
                return C()
            })), Z("setBaseUrl", (function(e) {
                A(e)
            })), Z("getUrl", (function(e) {
                return w(e)
            })), Z("reset", (function() {
                return J()
            })), [
                ["EMBED_TAG_NAME_VIDEO", v],
                ["EMBED_TAG_NAME_VIDEOJS", b],
                ["EMBED_TYPE_IN_PAGE", E],
                ["EMBED_TYPE_IFRAME", g],
                ["REF_NODE_INSERT_APPEND", I],
                ["REF_NODE_INSERT_PREPEND", N],
                ["REF_NODE_INSERT_BEFORE", _],
                ["REF_NODE_INSERT_AFTER", O],
                ["REF_NODE_INSERT_REPLACE", S],
                ["VERSION", "1.8.0"]
            ].forEach((function(e) {
                Z(e[0], e[1])
            }));
            var K = ["catalogSearch", "catalogSequence", "playlistId", "playlistVideoId", "videoId"],
                Q = function(e) {
                    var t, n;

                    function r(t) {
                        var n;
                        return (n = e.call(this, t) || this).refNode = null, n.setRefNode = function(e) {
                            n.refNode = e
                        }, n.loadPlayer = n.loadPlayer.bind(function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(n)), n
                    }
                    n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var i = r.prototype;
                    return i.loadPlayer = function() {
                        var e = this;
                        this.disposePlayer();
                        var t = this.props.onSuccess,
                            n = this.props.onFailure,
                            r = d({}, this.props, {
                                refNode: this.refNode,
                                refNodeInsert: "append",
                                onSuccess: function(n) {
                                    var r = n.ref,
                                        o = n.type;
                                    e.isMounted_ ? (e.player = r, "in-page" === o && r.one("dispose", (function() {
                                        e.player = null
                                    })), r.bcinfo && (r.bcinfo.REACT_PLAYER_LOADER = !0), "function" === typeof t && t({
                                        ref: r,
                                        type: o
                                    })) : e.disposePlayer(r)
                                },
                                onFailure: function(t) {
                                    if (e.isMounted_) {
                                        if ("function" !== typeof n) throw new Error(t);
                                        n(t)
                                    }
                                }
                            });
                        delete r.attrs, delete r.baseUrl, delete r.manualReloadFromPropChanges;
                        var o = $.getBaseUrl();
                        this.props.baseUrl && $.setBaseUrl(this.props.baseUrl), $(r), $.setBaseUrl(o)
                    }, i.disposePlayer = function() {
                        this.player && (this.player.dispose ? this.player.dispose() : this.player.parentNode && this.player.parentNode.removeChild(this.player), this.player = null)
                    }, i.findPlaylistVideoIdIndex_ = function(e) {
                        var t = this.props.playlistVideoId;
                        if (Array.isArray(e) && t)
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n],
                                    o = r.id,
                                    i = r.referenceId;
                                if (o === t || "ref:" + i === t) return n
                            }
                        return -1
                    }, i.createPlaybackAPICallback_ = function(e, t) {
                        var n = this;
                        return function(r, o) {
                            if (r) ! function(e) {
                                e && console && console.error && console.error(e)
                            }(r);
                            else {
                                if ("playlist" === e && t.playlistVideoId) {
                                    var i = n.findPlaylistVideoIdIndex_(o);
                                    i > -1 && (o.startingIndex = i)
                                }
                                n.player.catalog.load(o)
                            }
                        }
                    }, i.updatePlayer = function(e) {
                        if (this.player && this.player.el()) {
                            var t;
                            if (this.player.usingPlugin("catalog")) {
                                if (e.catalogSequence && this.props.catalogSequence) {
                                    var n = this.createPlaybackAPICallback_("sequence", e);
                                    return void this.player.catalog.getLazySequence(this.props.catalogSequence, n, this.props.adConfigId)
                                }
                                e.videoId && this.props.videoId ? t = {
                                    type: "video",
                                    id: this.props.videoId
                                } : e.playlistId && this.props.playlistId ? t = {
                                    type: "playlist",
                                    id: this.props.playlistId
                                } : e.catalogSearch && this.props.catalogSearch && (t = {
                                    type: "search",
                                    q: this.props.catalogSearch
                                })
                            }
                            if (t) {
                                this.props.adConfigId && (t.adConfigId = this.props.adConfigId), this.props.deliveryConfigId && (t.deliveryConfigId = this.props.deliveryConfigId);
                                var r = this.createPlaybackAPICallback_(t.type, e);
                                this.player.catalog.get(t, r)
                            } else if (e.playlistVideoId && this.props.playlistVideoId && this.player.usingPlugin("playlist")) {
                                var o = this.findPlaylistVideoIdIndex_(this.player.playlist());
                                o > -1 && this.player.playlist.currentItem(o)
                            }
                        }
                    }, i.componentDidMount = function() {
                        this.isMounted_ = !0, this.loadPlayer()
                    }, i.componentDidUpdate = function(e) {
                        var t = this,
                            n = Object.keys(e).reduce((function(n, r) {
                                var o = e[r],
                                    i = t.props[r];
                                return "function" === typeof i ? n : "object" === typeof i && null !== i ? (JSON.stringify(i) !== JSON.stringify(o) && (n[r] = !0), n) : (i !== o && (n[r] = !0), n)
                            }), {});
                        this.props.manualReloadFromPropChanges || !Object.keys(n).some((function(e) {
                            return -1 === K.indexOf(e)
                        })) ? this.updatePlayer(n) : this.loadPlayer()
                    }, i.componentWillUnmount = function() {
                        this.isMounted_ = !1, this.disposePlayer()
                    }, i.render = function() {
                        var e = d({
                            className: "brightcove-react-player-loader"
                        }, this.props.attrs, {
                            ref: this.setRefNode
                        });
                        return o.a.createElement("div", e)
                    }, r
                }(o.a.Component);
            t.a = Q
        }
    }
]);