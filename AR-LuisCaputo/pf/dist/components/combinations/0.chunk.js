(this.webpackJsonp = this.webpackJsonp || []).push([
    [0], {
        560: function(a, s, t) {
            "use strict";
            t.r(s);
            t(3);
            var e = t(12),
                n = t.n(e),
                o = t(2),
                p = t.n(o),
                c = t(190),
                r = t(0);

            function i(a) {
                const {
                    globalContent: {
                        taxonomy: s
                    }
                } = a, {
                    tags: t,
                    sections: e
                } = s || {};
                return Object(r.jsx)(c.a, {
                    tags: t,
                    sections: e,
                    destacado: !0,
                    temas: !0
                })
            }
            i.label = "LN-Nota-Temas", i.lazy = !0, i.propTypes = {
                globalContent: p.a.shape({
                    taxonomy: p.a.shape({
                        tags: p.a.arrayOf(p.a.shape()),
                        sections: p.a.arrayOf(p.a.shape())
                    })
                }).isRequired
            }, s.default = n()(i)
        }
    }
]);