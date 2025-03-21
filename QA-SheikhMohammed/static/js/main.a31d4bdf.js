! function(e) {
    function o(o) {
        for (var r, n, d = o[0], u = o[1], f = o[2], i = 0, p = []; i < d.length; i++) n = d[i], Object.prototype.hasOwnProperty.call(c, n) && c[n] && p.push(c[n][0]), c[n] = 0;
        for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
        for (l && l(o); p.length;) p.shift()();
        return a.push.apply(a, f || []), t()
    }

    function t() {
        for (var e, o = 0; o < a.length; o++) {
            for (var t = a[o], r = !0, n = 1; n < t.length; n++) {
                var u = t[n];
                0 !== c[u] && (r = !1)
            }
            r && (a.splice(o--, 1), e = d(d.s = t[0]))
        }
        return e
    }
    var r = {},
        n = {
            34: 0
        },
        c = {
            34: 0
        },
        a = [];

    function d(o) {
        if (r[o]) return r[o].exports;
        var t = r[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(t.exports, t, t.exports, d), t.l = !0, t.exports
    }
    d.e = function(e) {
        var o = [];
        n[e] ? o.push(n[e]) : 0 !== n[e] && {
            0: 1,
            1: 1,
            2: 1,
            4: 1,
            5: 1,
            6: 1,
            8: 1,
            9: 1,
            11: 1,
            12: 1,
            13: 1,
            14: 1,
            15: 1,
            16: 1,
            18: 1,
            19: 1,
            20: 1,
            25: 1,
            26: 1,
            27: 1,
            31: 1,
            32: 1,
            35: 1,
            36: 1,
            37: 1,
            41: 1,
            42: 1
        }[e] && o.push(n[e] = new Promise((function(o, t) {
            for (var r = "static/css/" + ({
                    0: "component~amp-route~article-route~common-route~homepage-route~liveblog-route~section-route~topic-rou~bc9cec97",
                    1: "vendor~common-route~featured-gallery~homepage-route~section-route~topic-route~vertical-video-experie~2f0d645e",
                    2: "common~493df0b3",
                    4: "component~amp-route~liveblog-route~493df0b3",
                    5: "component~section-route~video-route~493df0b3",
                    6: "OptaWidgetResources~3ceeca81",
                    8: "article-route~493df0b3",
                    9: "audio-route~493df0b3",
                    11: "card-gallery-big~493df0b3",
                    12: "component~amp-route~493df0b3",
                    13: "component~common-route~493df0b3",
                    14: "component~common-route~6e6dca10",
                    15: "component~gallery-route~493df0b3",
                    16: "component~gallery-route~6e6dca10",
                    17: "component~hls~51f890c8",
                    18: "component~homepage-route~493df0b3",
                    19: "component~homepage-route~6e6dca10",
                    20: "component~login-route~493df0b3",
                    25: "component~section-route~493df0b3",
                    26: "component~topic-route~493df0b3",
                    27: "featured-gallery~493df0b3",
                    31: "hero-image-featured~493df0b3",
                    32: "home-page-card-collection-flat~6e6dca10",
                    33: "liveblog-route~6e6dca10",
                    35: "match-center-route~6e6dca10",
                    36: "opta-playground~6e6dca10",
                    37: "opta-widget~3ceeca81",
                    38: "qrcode~e4a6e20e",
                    41: "vertical-video-experience~493df0b3",
                    42: "video-route~6e6dca10"
                }[e] || e) + "." + {
                    0: "ad98c5bc",
                    1: "76106ea4",
                    2: "c20381c5",
                    4: "ef610d00",
                    5: "07de63f8",
                    6: "c4e66a8b",
                    8: "b0504f62",
                    9: "afbf657b",
                    11: "2c0bbb72",
                    12: "2fd95280",
                    13: "48cd3947",
                    14: "55b88a9b",
                    15: "7fb8922e",
                    16: "6fe9f986",
                    17: "31d6cfe0",
                    18: "5d32abd7",
                    19: "8248ad5f",
                    20: "25bec1eb",
                    25: "b04683f7",
                    26: "f101610c",
                    27: "3f326473",
                    31: "a9112971",
                    32: "a5f8e9be",
                    33: "31d6cfe0",
                    35: "ac4b1d08",
                    36: "ece09279",
                    37: "c4e66a8b",
                    38: "31d6cfe0",
                    41: "39fb4354",
                    42: "95f55a21"
                }[e] + ".chunk.css", c = d.p + r, a = document.getElementsByTagName("link"), u = 0; u < a.length; u++) {
                var f = (l = a[u]).getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (f === r || f === c)) return o()
            }
            var i = document.getElementsByTagName("style");
            for (u = 0; u < i.length; u++) {
                var l;
                if ((f = (l = i[u]).getAttribute("data-href")) === r || f === c) return o()
            }
            var p = document.createElement("link");
            p.rel = "stylesheet", p.type = "text/css", p.onload = o, p.onerror = function(o) {
                var r = o && o.target && o.target.src || c,
                    a = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                a.code = "CSS_CHUNK_LOAD_FAILED", a.request = r, delete n[e], p.parentNode.removeChild(p), t(a)
            }, p.href = c, document.getElementsByTagName("head")[0].appendChild(p)
        })).then((function() {
            n[e] = 0
        })));
        var t = c[e];
        if (0 !== t)
            if (t) o.push(t[2]);
            else {
                var r = new Promise((function(o, r) {
                    t = c[e] = [o, r]
                }));
                o.push(t[2] = r);
                var a, u = document.createElement("script");
                u.charset = "utf-8", u.timeout = 120, d.nc && u.setAttribute("nonce", d.nc), u.src = function(e) {
                    return d.p + "static/js/" + ({
                        0: "component~amp-route~article-route~common-route~homepage-route~liveblog-route~section-route~topic-rou~bc9cec97",
                        1: "vendor~common-route~featured-gallery~homepage-route~section-route~topic-route~vertical-video-experie~2f0d645e",
                        2: "common~493df0b3",
                        4: "component~amp-route~liveblog-route~493df0b3",
                        5: "component~section-route~video-route~493df0b3",
                        6: "OptaWidgetResources~3ceeca81",
                        8: "article-route~493df0b3",
                        9: "audio-route~493df0b3",
                        11: "card-gallery-big~493df0b3",
                        12: "component~amp-route~493df0b3",
                        13: "component~common-route~493df0b3",
                        14: "component~common-route~6e6dca10",
                        15: "component~gallery-route~493df0b3",
                        16: "component~gallery-route~6e6dca10",
                        17: "component~hls~51f890c8",
                        18: "component~homepage-route~493df0b3",
                        19: "component~homepage-route~6e6dca10",
                        20: "component~login-route~493df0b3",
                        25: "component~section-route~493df0b3",
                        26: "component~topic-route~493df0b3",
                        27: "featured-gallery~493df0b3",
                        31: "hero-image-featured~493df0b3",
                        32: "home-page-card-collection-flat~6e6dca10",
                        33: "liveblog-route~6e6dca10",
                        35: "match-center-route~6e6dca10",
                        36: "opta-playground~6e6dca10",
                        37: "opta-widget~3ceeca81",
                        38: "qrcode~e4a6e20e",
                        41: "vertical-video-experience~493df0b3",
                        42: "video-route~6e6dca10"
                    }[e] || e) + "." + {
                        0: "eec53e2c",
                        1: "f6e7a5fa",
                        2: "1dc239da",
                        4: "daab4c0e",
                        5: "f9bdbeb1",
                        6: "180d9bdc",
                        8: "cc69316b",
                        9: "baba0b81",
                        11: "39100166",
                        12: "f8c60bd9",
                        13: "dc06a70b",
                        14: "2b270a20",
                        15: "f3a8fad2",
                        16: "ee250559",
                        17: "a245c929",
                        18: "b8a0254d",
                        19: "24978947",
                        20: "404c8ff3",
                        25: "ef6e8ccb",
                        26: "b5714aea",
                        27: "ed871bac",
                        31: "6bd881a4",
                        32: "a8970c13",
                        33: "0d8ca506",
                        35: "9bfb7e85",
                        36: "6cef901f",
                        37: "3534d20a",
                        38: "5096fc18",
                        41: "adb3dfeb",
                        42: "bbffcbda"
                    }[e] + ".chunk.js"
                }(e);
                var f = new Error;
                a = function(o) {
                    u.onerror = u.onload = null, clearTimeout(i);
                    var t = c[e];
                    if (0 !== t) {
                        if (t) {
                            var r = o && ("load" === o.type ? "missing" : o.type),
                                n = o && o.target && o.target.src;
                            f.message = "Loading chunk " + e + " failed.\n(" + r + ": " + n + ")", f.name = "ChunkLoadError", f.type = r, f.request = n, t[1](f)
                        }
                        c[e] = void 0
                    }
                };
                var i = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: u
                    })
                }), 12e4);
                u.onerror = u.onload = a, document.head.appendChild(u)
            }
        return Promise.all(o)
    }, d.m = e, d.c = r, d.d = function(e, o, t) {
        d.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: t
        })
    }, d.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, d.t = function(e, o) {
        if (1 & o && (e = d(e)), 8 & o) return e;
        if (4 & o && "object" === typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (d.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & o && "string" != typeof e)
            for (var r in e) d.d(t, r, function(o) {
                return e[o]
            }.bind(null, r));
        return t
    }, d.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return d.d(o, "a", o), o
    }, d.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, d.p = "/", d.oe = function(e) {
        throw console.error(e), e
    };
    var u = window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || [],
        f = u.push.bind(u);
    u.push = o, u = u.slice();
    for (var i = 0; i < u.length; i++) o(u[i]);
    var l = f;
    a.push([0, 43, 10, 7, 29, 28, 3, 30, 39, 40, 23, 24, 22, 21]), t()
}([]);