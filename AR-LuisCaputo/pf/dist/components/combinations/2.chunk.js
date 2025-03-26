(this.webpackJsonp = this.webpackJsonp || []).push([
    [2], {
        566: function(e, t, o) {
            "use strict";
            o.r(t);
            o(3);
            var a = o(0),
                r = o(30),
                l = o(52),
                i = o(18),
                s = o(5),
                n = o.n(s);
            const c = ({
                linkProps: e,
                description: t,
                logoProps: o,
                imgProps: s,
                className: c
            }) => {
                const g = n()("ln-zocalo", "p-16 p-24_m pb-0_m", "border border-all border-1 border-neutral-light-100", c),
                    p = n()("py-12 px-16 rounded-4", "--font-2xs --font-bold", "bg-blue-500 text-light-0 uppercase", "transition transition-all transition-duration-800");
                return Object(a.jsx)("article", Object.assign({
                    className: g
                }, {
                    children: Object(a.jsx)(l.a, Object.assign({}, e, {
                        children: Object(a.jsxs)("div", Object.assign({
                            className: "flex flex-row_m flex-column ai-center ai-stretch_m gap-24"
                        }, {
                            children: [Object(a.jsx)("div", Object.assign({
                                className: "mb-0_m flex-shrink-0"
                            }, {
                                children: Object(a.jsx)(r.a, Object.assign({}, s))
                            })), Object(a.jsxs)("div", Object.assign({
                                className: "flex flex-column gap-24 ai-start_m ai-center jc-center flex-shrink-1"
                            }, {
                                children: [Object(a.jsxs)("div", Object.assign({
                                    className: "flex gap-16 flex-wrap jc-start_m jc-center"
                                }, {
                                    children: [Object(a.jsx)(r.a, Object.assign({}, o)), Object(a.jsx)(i.a, {
                                        as: "p",
                                        className: "--font-primary --font-medium --font-m text-center text-initial_m text-neutral-light-800",
                                        text: t
                                    })]
                                })), (null == e ? void 0 : e.title) ? Object(a.jsx)("div", Object.assign({
                                    className: p
                                }, {
                                    children: null == e ? void 0 : e.title
                                })) : Object(a.jsx)(a.Fragment, {})]
                            }))]
                        }))
                    }))
                }))
            };
            var g = o(6),
                p = o(61);
            var b = {
                    deportes: {
                        href: "https://canchallena.lanacion.com.ar/",
                        title: "Ir a Canchallena",
                        target: "_blank",
                        imgDsk: "cll_web-image_infobox_desk.webp",
                        imgMob: "cll_web-image_infobox_mob.webp",
                        imgAlt: "Imagen de celular con la app de Canchallena",
                        imgClassName: "w-100",
                        logo: "cll-logo.webp",
                        logoAlt: "Logo de Canchallena",
                        label: "canchallena",
                        description: "Encontrá resultados de fútbol en vivo, los próximos partidos, las tablas de posiciones, y todas las estadísticas de los principales torneos del mundo."
                    },
                    juegos: {
                        href: "https://www.lanacion.com.ar/juegos/",
                        title: "Ir a Juegos",
                        imgDsk: "promo-juegos_dsk.webp",
                        imgMob: "promo-juegos_mob.webp",
                        imgAlt: "Imagen de celular con la app de LN Juegos",
                        imgClassName: "w-100",
                        logo: "logo-juegos.webp",
                        logoAlt: "Logo de LN Juegos",
                        logoClassName: "w-140_max512",
                        label: "ln_juegos",
                        description: "Disfrutá de Crucigrama, Palabra oculta y todos tus pasatiempos favoritos."
                    },
                    recetas: {
                        href: "https://foodit.lanacion.com.ar/",
                        title: "Ir a Foodit",
                        target: "_blank",
                        imgMob: "image-mobile-foodit.png",
                        imgWidth: 209,
                        imgAlt: "Imagen de celular con la app de Foodit",
                        logo: "logo-foodit.webp",
                        logoAlt: "Logo de Foodit",
                        logoWidth: 150,
                        label: "foodit",
                        description: "Conocé la nueva plataforma culinaria con recetas variadas y probadas, guías de cocina, masterclasses y mucho más, para inspirarte a cocinar y a comer mejor."
                    }
                },
                m = o(4);

            function d(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, a)
                }
                return o
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(o), !0).forEach((function(t) {
                        j(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : d(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function j(e, t, o) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var o = e[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var a = o.call(e, t || "default");
                            if ("object" != typeof a) return a;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            var f = o(20);

            function h() {
                const {
                    contextPath: e,
                    deployment: t,
                    globalContent: {
                        taxonomy: {
                            primary_section: {
                                path: o = ""
                            } = {}
                        } = {}
                    } = {}
                } = Object(g.useAppContext)(), r = ((e, t, o = "") => {
                    if (!o) return {
                        showZocalo: !1
                    };
                    const a = o.split("/"),
                        r = Object(m.a)(b, a[1], void 0);
                    return r ? {
                        showZocalo: !0,
                        linkProps: u({
                            href: r.href,
                            title: r.title
                        }, r.target && {
                            target: r.target
                        }),
                        imgProps: {
                            src: Object(p.a)(t)(e)(r.imgMob),
                            alt: r.imgAlt,
                            sources: [{
                                minWidth: 768,
                                srcSet: Object(p.a)(t)(e)(r.imgDsk)
                            }],
                            className: r.imgClassName,
                            width: r.imgWidth
                        },
                        logoProps: {
                            src: Object(p.a)(t)(e)(r.logo),
                            alt: r.logoAlt,
                            className: r.logoClassName,
                            width: r.logoWidth
                        },
                        description: r.description,
                        label: r.label
                    } : {
                        showZocalo: !1
                    }
                })(t, e, o);
                return r.showZocalo ? Object(a.jsx)(c, {
                    linkProps: r.linkProps,
                    imgProps: r.imgProps,
                    className: "mb-32",
                    logoProps: r.logoProps,
                    description: r.description,
                    onClick: () => Object(f.a)({
                        event: "e_linkclick",
                        action: "zocalo_nota",
                        category: "nota_ln9",
                        label: r.label
                    })
                }) : null
            }
            h.label = "LN Caja Zocalo", h.lazy = !0;
            t.default = h
        }
    }
]);