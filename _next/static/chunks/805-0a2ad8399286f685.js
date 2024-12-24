(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[805], {
    536: function(t, e, r) {
        "use strict";
        r.d(e, {
            ZP: function() {
                return l
            }
        });
        let n = {
            _origin: "https://api.emailjs.com"
        }
          , i = (t,e,r)=>{
            if (!t)
                throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
            if (!e)
                throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
            if (!r)
                throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
            return !0
        }
        ;
        class s {
            constructor(t) {
                this.status = t ? t.status : 0,
                this.text = t ? t.responseText : "Network Error"
            }
        }
        let o = (t,e,r={})=>new Promise((i,o)=>{
            let a = new XMLHttpRequest;
            a.addEventListener("load", ({target: t})=>{
                let e = new s(t);
                200 === e.status || "OK" === e.text ? i(e) : o(e)
            }
            ),
            a.addEventListener("error", ({target: t})=>{
                o(new s(t))
            }
            ),
            a.open("POST", n._origin + t, !0),
            Object.keys(r).forEach(t=>{
                a.setRequestHeader(t, r[t])
            }
            ),
            a.send(e)
        }
        )
          , a = t=>{
            let e;
            if (!(e = "string" == typeof t ? document.querySelector(t) : t) || "FORM" !== e.nodeName)
                throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
            return e
        }
        ;
        var l = {
            init: (t,e="https://api.emailjs.com")=>{
                n._userID = t,
                n._origin = e
            }
            ,
            send: (t,e,r,s)=>{
                let a = s || n._userID;
                return i(a, t, e),
                o("/api/v1.0/email/send", JSON.stringify({
                    lib_version: "3.11.0",
                    user_id: a,
                    service_id: t,
                    template_id: e,
                    template_params: r
                }), {
                    "Content-type": "application/json"
                })
            }
            ,
            sendForm: (t,e,r,s)=>{
                let l = s || n._userID
                  , u = a(r);
                i(l, t, e);
                let c = new FormData(u);
                return c.append("lib_version", "3.11.0"),
                c.append("service_id", t),
                c.append("template_id", e),
                c.append("user_id", l),
                o("/api/v1.0/email/send-form", c)
            }
        }
    },
    1383: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "addLocale", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r(2158);
        let n = function(t) {
            for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                r[n - 1] = arguments[n];
            return t
        };
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    4902: function(t, e) {
        "use strict";
        function r() {
            return null
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    528: function(t, e, r) {
        "use strict";
        function n(t, e, r, n) {
            return !1
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r(2158),
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    879: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "hasBasePath", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = r(4511);
        function i(t) {
            return (0,
            n.pathHasPrefix)(t, "")
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    3240: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "Image", {
            enumerable: !0,
            get: function() {
                return m
            }
        });
        let n = r(6927)
          , i = r(5909)
          , s = i._(r(6006))
          , o = n._(r(5538))
          , a = r(5468)
          , l = r(5149)
          , u = r(2281);
        r(3579);
        let c = n._(r(4489))
          , h = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function d(t, e, r, n, i, s) {
            let o = null == t ? void 0 : t.src;
            if (!t || t["data-loaded-src"] === o)
                return;
            t["data-loaded-src"] = o;
            let a = "decode"in t ? t.decode() : Promise.resolve();
            a.catch(()=>{}
            ).then(()=>{
                if (t.parentElement && t.isConnected) {
                    if ("blur" === e && i(!0),
                    null == r ? void 0 : r.current) {
                        let e = new Event("load");
                        Object.defineProperty(e, "target", {
                            writable: !1,
                            value: t
                        });
                        let n = !1
                          , i = !1;
                        r.current({
                            ...e,
                            nativeEvent: e,
                            currentTarget: t,
                            target: t,
                            isDefaultPrevented: ()=>n,
                            isPropagationStopped: ()=>i,
                            persist: ()=>{}
                            ,
                            preventDefault: ()=>{
                                n = !0,
                                e.preventDefault()
                            }
                            ,
                            stopPropagation: ()=>{
                                i = !0,
                                e.stopPropagation()
                            }
                        })
                    }
                    (null == n ? void 0 : n.current) && n.current(t)
                }
            }
            )
        }
        function f(t) {
            let[e,r] = s.version.split(".")
              , n = parseInt(e, 10)
              , i = parseInt(r, 10);
            return n > 18 || 18 === n && i >= 3 ? {
                fetchPriority: t
            } : {
                fetchpriority: t
            }
        }
        let p = (0,
        s.forwardRef)((t,e)=>{
            let {src: r, srcSet: n, sizes: i, height: o, width: a, decoding: l, className: u, style: c, fetchPriority: h, placeholder: p, loading: m, unoptimized: g, fill: y, onLoadRef: v, onLoadingCompleteRef: b, setBlurComplete: x, setShowAltText: P, onLoad: w, onError: S, ...E} = t;
            return s.default.createElement("img", {
                ...E,
                ...f(h),
                loading: m,
                width: a,
                height: o,
                decoding: l,
                "data-nimg": y ? "fill" : "1",
                className: u,
                style: c,
                sizes: i,
                srcSet: n,
                src: r,
                ref: (0,
                s.useCallback)(t=>{
                    e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)),
                    t && (S && (t.src = t.src),
                    t.complete && d(t, p, v, b, x, g))
                }
                , [r, p, v, b, x, S, g, e]),
                onLoad: t=>{
                    let e = t.currentTarget;
                    d(e, p, v, b, x, g)
                }
                ,
                onError: t=>{
                    P(!0),
                    "blur" === p && x(!0),
                    S && S(t)
                }
            })
        }
        )
          , m = (0,
        s.forwardRef)((t,e)=>{
            let r = (0,
            s.useContext)(u.ImageConfigContext)
              , n = (0,
            s.useMemo)(()=>{
                let t = h || r || l.imageConfigDefault
                  , e = [...t.deviceSizes, ...t.imageSizes].sort((t,e)=>t - e)
                  , n = t.deviceSizes.sort((t,e)=>t - e);
                return {
                    ...t,
                    allSizes: e,
                    deviceSizes: n
                }
            }
            , [r])
              , {onLoad: i, onLoadingComplete: d} = t
              , m = (0,
            s.useRef)(i);
            (0,
            s.useEffect)(()=>{
                m.current = i
            }
            , [i]);
            let g = (0,
            s.useRef)(d);
            (0,
            s.useEffect)(()=>{
                g.current = d
            }
            , [d]);
            let[y,v] = (0,
            s.useState)(!1)
              , [b,x] = (0,
            s.useState)(!1)
              , {props: P, meta: w} = (0,
            a.getImgProps)(t, {
                defaultLoader: c.default,
                imgConf: n,
                blurComplete: y,
                showAltText: b
            });
            return s.default.createElement(s.default.Fragment, null, s.default.createElement(p, {
                ...P,
                unoptimized: w.unoptimized,
                placeholder: w.placeholder,
                fill: w.fill,
                onLoadRef: m,
                onLoadingCompleteRef: g,
                setBlurComplete: v,
                setShowAltText: x,
                ref: e
            }), w.priority ? s.default.createElement(o.default, null, s.default.createElement("link", {
                key: "__nimg-" + P.src + P.srcSet + P.sizes,
                rel: "preload",
                as: "image",
                href: P.srcSet ? void 0 : P.src,
                imageSrcSet: P.srcSet,
                imageSizes: P.sizes,
                crossOrigin: P.crossOrigin,
                referrerPolicy: P.referrerPolicy,
                ...f(P.fetchPriority)
            })) : null)
        }
        );
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    4896: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return x
            }
        });
        let n = r(6927)
          , i = n._(r(6006))
          , s = r(4268)
          , o = r(4490)
          , a = r(2433)
          , l = r(4750)
          , u = r(1383)
          , c = r(3645)
          , h = r(3093)
          , d = r(6566)
          , f = r(528)
          , p = r(5884)
          , m = r(874)
          , g = new Set;
        function y(t, e, r, n, i, s) {
            if (!s && !(0,
            o.isLocalURL)(e))
                return;
            if (!n.bypassPrefetchedCheck) {
                let i = void 0 !== n.locale ? n.locale : "locale"in t ? t.locale : void 0
                  , s = e + "%" + r + "%" + i;
                if (g.has(s))
                    return;
                g.add(s)
            }
            let a = s ? t.prefetch(e, i) : t.prefetch(e, r, n);
            Promise.resolve(a).catch(t=>{}
            )
        }
        function v(t) {
            return "string" == typeof t ? t : (0,
            a.formatUrl)(t)
        }
        let b = i.default.forwardRef(function(t, e) {
            let r, n;
            let {href: a, as: g, children: b, prefetch: x=null, passHref: P, replace: w, shallow: S, scroll: E, locale: A, onClick: C, onMouseEnter: T, onTouchStart: j, legacyBehavior: M=!1, ...k} = t;
            r = b,
            M && ("string" == typeof r || "number" == typeof r) && (r = i.default.createElement("a", null, r));
            let R = i.default.useContext(c.RouterContext)
              , O = i.default.useContext(h.AppRouterContext)
              , V = null != R ? R : O
              , D = !R
              , L = !1 !== x
              , _ = null === x ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL
              , {href: I, as: F} = i.default.useMemo(()=>{
                if (!R) {
                    let t = v(a);
                    return {
                        href: t,
                        as: g ? v(g) : t
                    }
                }
                let[t,e] = (0,
                s.resolveHref)(R, a, !0);
                return {
                    href: t,
                    as: g ? (0,
                    s.resolveHref)(R, g) : e || t
                }
            }
            , [R, a, g])
              , B = i.default.useRef(I)
              , U = i.default.useRef(F);
            M && (n = i.default.Children.only(r));
            let N = M ? n && "object" == typeof n && n.ref : e
              , [W,z,$] = (0,
            d.useIntersection)({
                rootMargin: "200px"
            })
              , H = i.default.useCallback(t=>{
                (U.current !== F || B.current !== I) && ($(),
                U.current = F,
                B.current = I),
                W(t),
                N && ("function" == typeof N ? N(t) : "object" == typeof N && (N.current = t))
            }
            , [F, N, I, $, W]);
            i.default.useEffect(()=>{
                V && z && L && y(V, I, F, {
                    locale: A
                }, {
                    kind: _
                }, D)
            }
            , [F, I, z, A, L, null == R ? void 0 : R.locale, V, D, _]);
            let Z = {
                ref: H,
                onClick(t) {
                    M || "function" != typeof C || C(t),
                    M && n.props && "function" == typeof n.props.onClick && n.props.onClick(t),
                    V && !t.defaultPrevented && function(t, e, r, n, s, a, l, u, c, h) {
                        let {nodeName: d} = t.currentTarget
                          , f = "A" === d.toUpperCase();
                        if (f && (function(t) {
                            let e = t.currentTarget
                              , r = e.getAttribute("target");
                            return r && "_self" !== r || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                        }(t) || !c && !(0,
                        o.isLocalURL)(r)))
                            return;
                        t.preventDefault();
                        let p = ()=>{
                            let t = null == l || l;
                            "beforePopState"in e ? e[s ? "replace" : "push"](r, n, {
                                shallow: a,
                                locale: u,
                                scroll: t
                            }) : e[s ? "replace" : "push"](n || r, {
                                forceOptimisticNavigation: !h,
                                scroll: t
                            })
                        }
                        ;
                        c ? i.default.startTransition(p) : p()
                    }(t, V, I, F, w, S, E, A, D, L)
                },
                onMouseEnter(t) {
                    M || "function" != typeof T || T(t),
                    M && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(t),
                    V && (L || !D) && y(V, I, F, {
                        locale: A,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: _
                    }, D)
                },
                onTouchStart(t) {
                    M || "function" != typeof j || j(t),
                    M && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(t),
                    V && (L || !D) && y(V, I, F, {
                        locale: A,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: _
                    }, D)
                }
            };
            if ((0,
            l.isAbsoluteUrl)(F))
                Z.href = F;
            else if (!M || P || "a" === n.type && !("href"in n.props)) {
                let t = void 0 !== A ? A : null == R ? void 0 : R.locale
                  , e = (null == R ? void 0 : R.isLocaleDomain) && (0,
                f.getDomainLocale)(F, t, null == R ? void 0 : R.locales, null == R ? void 0 : R.domainLocales);
                Z.href = e || (0,
                p.addBasePath)((0,
                u.addLocale)(F, t, null == R ? void 0 : R.defaultLocale))
            }
            return M ? i.default.cloneElement(n, Z) : i.default.createElement("a", {
                ...k,
                ...Z
            }, r)
        })
          , x = b;
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    9995: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            requestIdleCallback: function() {
                return r
            },
            cancelIdleCallback: function() {
                return n
            }
        });
        let r = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
            let e = Date.now();
            return self.setTimeout(function() {
                t({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - e))
                    }
                })
            }, 1)
        }
          , n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
            return clearTimeout(t)
        }
        ;
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    6566: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "useIntersection", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let n = r(6006)
          , i = r(9995)
          , s = "function" == typeof IntersectionObserver
          , o = new Map
          , a = [];
        function l(t) {
            let {rootRef: e, rootMargin: r, disabled: l} = t
              , u = l || !s
              , [c,h] = (0,
            n.useState)(!1)
              , d = (0,
            n.useRef)(null)
              , f = (0,
            n.useCallback)(t=>{
                d.current = t
            }
            , []);
            (0,
            n.useEffect)(()=>{
                if (s) {
                    if (u || c)
                        return;
                    let t = d.current;
                    if (t && t.tagName) {
                        let n = function(t, e, r) {
                            let {id: n, observer: i, elements: s} = function(t) {
                                let e;
                                let r = {
                                    root: t.root || null,
                                    margin: t.rootMargin || ""
                                }
                                  , n = a.find(t=>t.root === r.root && t.margin === r.margin);
                                if (n && (e = o.get(n)))
                                    return e;
                                let i = new Map
                                  , s = new IntersectionObserver(t=>{
                                    t.forEach(t=>{
                                        let e = i.get(t.target)
                                          , r = t.isIntersecting || t.intersectionRatio > 0;
                                        e && r && e(r)
                                    }
                                    )
                                }
                                ,t);
                                return e = {
                                    id: r,
                                    observer: s,
                                    elements: i
                                },
                                a.push(r),
                                o.set(r, e),
                                e
                            }(r);
                            return s.set(t, e),
                            i.observe(t),
                            function() {
                                if (s.delete(t),
                                i.unobserve(t),
                                0 === s.size) {
                                    i.disconnect(),
                                    o.delete(n);
                                    let t = a.findIndex(t=>t.root === n.root && t.margin === n.margin);
                                    t > -1 && a.splice(t, 1)
                                }
                            }
                        }(t, t=>t && h(t), {
                            root: null == e ? void 0 : e.current,
                            rootMargin: r
                        });
                        return n
                    }
                } else if (!c) {
                    let t = (0,
                    i.requestIdleCallback)(()=>h(!0));
                    return ()=>(0,
                    i.cancelIdleCallback)(t)
                }
            }
            , [u, r, e, c, d.current]);
            let p = (0,
            n.useCallback)(()=>{
                h(!1)
            }
            , []);
            return [f, c, p]
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    3188: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let n = r(6927)
          , i = n._(r(6006))
          , s = i.default.createContext({})
    },
    9334: function(t, e) {
        "use strict";
        function r(t) {
            let {ampFirst: e=!1, hybrid: r=!1, hasQuery: n=!1} = void 0 === t ? {} : t;
            return e || r && n
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    7962: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "escapeStringRegexp", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let r = /[|\\{}()[\]^$+*?.-]/
          , n = /[|\\{}()[\]^$+*?.-]/g;
        function i(t) {
            return r.test(t) ? t.replace(n, "\\$&") : t
        }
    },
    5468: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getImgProps", {
            enumerable: !0,
            get: function() {
                return a
            }
        }),
        r(3579);
        let n = r(9527)
          , i = r(5149);
        function s(t) {
            return void 0 !== t.default
        }
        function o(t) {
            return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
        }
        function a(t, e) {
            var r;
            let a, l, u, {src: c, sizes: h, unoptimized: d=!1, priority: f=!1, loading: p, className: m, quality: g, width: y, height: v, fill: b=!1, style: x, onLoad: P, onLoadingComplete: w, placeholder: S="empty", blurDataURL: E, fetchPriority: A, layout: C, objectFit: T, objectPosition: j, lazyBoundary: M, lazyRoot: k, ...R} = t, {imgConf: O, showAltText: V, blurComplete: D, defaultLoader: L} = e, _ = O || i.imageConfigDefault;
            if ("allSizes"in _)
                a = _;
            else {
                let t = [..._.deviceSizes, ..._.imageSizes].sort((t,e)=>t - e)
                  , e = _.deviceSizes.sort((t,e)=>t - e);
                a = {
                    ..._,
                    allSizes: t,
                    deviceSizes: e
                }
            }
            let I = R.loader || L;
            delete R.loader,
            delete R.srcSet;
            let F = "__next_img_default"in I;
            if (F) {
                if ("custom" === a.loader)
                    throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let t = I;
                I = e=>{
                    let {config: r, ...n} = e;
                    return t(n)
                }
            }
            if (C) {
                "fill" === C && (b = !0);
                let t = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[C];
                t && (x = {
                    ...x,
                    ...t
                });
                let e = {
                    responsive: "100vw",
                    fill: "100vw"
                }[C];
                e && !h && (h = e)
            }
            let B = ""
              , U = o(y)
              , N = o(v);
            if ("object" == typeof (r = c) && (s(r) || void 0 !== r.src)) {
                let t = s(c) ? c.default : c;
                if (!t.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                if (!t.height || !t.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                if (l = t.blurWidth,
                u = t.blurHeight,
                E = E || t.blurDataURL,
                B = t.src,
                !b) {
                    if (U || N) {
                        if (U && !N) {
                            let e = U / t.width;
                            N = Math.round(t.height * e)
                        } else if (!U && N) {
                            let e = N / t.height;
                            U = Math.round(t.width * e)
                        }
                    } else
                        U = t.width,
                        N = t.height
                }
            }
            let W = !f && ("lazy" === p || void 0 === p);
            (!(c = "string" == typeof c ? c : B) || c.startsWith("data:") || c.startsWith("blob:")) && (d = !0,
            W = !1),
            a.unoptimized && (d = !0),
            F && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (d = !0),
            f && (A = "high");
            let z = o(g)
              , $ = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: T,
                objectPosition: j
            } : {}, V ? {} : {
                color: "transparent"
            }, x)
              , H = "blur" === S && E && !D ? {
                backgroundSize: $.objectFit || "cover",
                backgroundPosition: $.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: 'url("data:image/svg+xml;charset=utf-8,' + (0,
                n.getImageBlurSvg)({
                    widthInt: U,
                    heightInt: N,
                    blurWidth: l,
                    blurHeight: u,
                    blurDataURL: E,
                    objectFit: $.objectFit
                }) + '")'
            } : {}
              , Z = function(t) {
                let {config: e, src: r, unoptimized: n, width: i, quality: s, sizes: o, loader: a} = t;
                if (n)
                    return {
                        src: r,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: l, kind: u} = function(t, e, r) {
                    let {deviceSizes: n, allSizes: i} = t;
                    if (r) {
                        let t = /(^|\s)(1?\d?\d)vw/g
                          , e = [];
                        for (let n; n = t.exec(r); n)
                            e.push(parseInt(n[2]));
                        if (e.length) {
                            let t = .01 * Math.min(...e);
                            return {
                                widths: i.filter(e=>e >= n[0] * t),
                                kind: "w"
                            }
                        }
                        return {
                            widths: i,
                            kind: "w"
                        }
                    }
                    if ("number" != typeof e)
                        return {
                            widths: n,
                            kind: "w"
                        };
                    let s = [...new Set([e, 2 * e].map(t=>i.find(e=>e >= t) || i[i.length - 1]))];
                    return {
                        widths: s,
                        kind: "x"
                    }
                }(e, i, o)
                  , c = l.length - 1;
                return {
                    sizes: o || "w" !== u ? o : "100vw",
                    srcSet: l.map((t,n)=>a({
                        config: e,
                        src: r,
                        quality: s,
                        width: t
                    }) + " " + ("w" === u ? t : n + 1) + u).join(", "),
                    src: a({
                        config: e,
                        src: r,
                        quality: s,
                        width: l[c]
                    })
                }
            }({
                config: a,
                src: c,
                unoptimized: d,
                width: U,
                quality: z,
                sizes: h,
                loader: I
            })
              , q = {
                ...R,
                loading: W ? "lazy" : p,
                fetchPriority: A,
                width: U,
                height: N,
                decoding: "async",
                className: m,
                style: {
                    ...$,
                    ...H
                },
                sizes: Z.sizes,
                srcSet: Z.srcSet,
                src: Z.src
            }
              , G = {
                unoptimized: d,
                priority: f,
                placeholder: S,
                fill: b
            };
            return {
                props: q,
                meta: G
            }
        }
    },
    5538: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            defaultHead: function() {
                return c
            },
            default: function() {
                return p
            }
        });
        let n = r(6927)
          , i = r(5909)
          , s = i._(r(6006))
          , o = n._(r(8703))
          , a = r(3188)
          , l = r(577)
          , u = r(9334);
        function c(t) {
            void 0 === t && (t = !1);
            let e = [s.default.createElement("meta", {
                charSet: "utf-8"
            })];
            return t || e.push(s.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            e
        }
        function h(t, e) {
            return "string" == typeof e || "number" == typeof e ? t : e.type === s.default.Fragment ? t.concat(s.default.Children.toArray(e.props.children).reduce((t,e)=>"string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
        }
        r(3579);
        let d = ["name", "httpEquiv", "charSet", "itemProp"];
        function f(t, e) {
            let {inAmpMode: r} = e;
            return t.reduce(h, []).reverse().concat(c(r).reverse()).filter(function() {
                let t = new Set
                  , e = new Set
                  , r = new Set
                  , n = {};
                return i=>{
                    let s = !0
                      , o = !1;
                    if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                        o = !0;
                        let e = i.key.slice(i.key.indexOf("$") + 1);
                        t.has(e) ? s = !1 : t.add(e)
                    }
                    switch (i.type) {
                    case "title":
                    case "base":
                        e.has(i.type) ? s = !1 : e.add(i.type);
                        break;
                    case "meta":
                        for (let t = 0, e = d.length; t < e; t++) {
                            let e = d[t];
                            if (i.props.hasOwnProperty(e)) {
                                if ("charSet" === e)
                                    r.has(e) ? s = !1 : r.add(e);
                                else {
                                    let t = i.props[e]
                                      , r = n[e] || new Set;
                                    ("name" !== e || !o) && r.has(t) ? s = !1 : (r.add(t),
                                    n[e] = r)
                                }
                            }
                        }
                    }
                    return s
                }
            }()).reverse().map((t,e)=>{
                let n = t.key || e;
                if (!r && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e=>t.props.href.startsWith(e))) {
                    let e = {
                        ...t.props || {}
                    };
                    return e["data-href"] = e.href,
                    e.href = void 0,
                    e["data-optimized-fonts"] = !0,
                    s.default.cloneElement(t, e)
                }
                return s.default.cloneElement(t, {
                    key: n
                })
            }
            )
        }
        let p = function(t) {
            let {children: e} = t
              , r = (0,
            s.useContext)(a.AmpStateContext)
              , n = (0,
            s.useContext)(l.HeadManagerContext);
            return s.default.createElement(o.default, {
                reduceComponentsToState: f,
                headManager: n,
                inAmpMode: (0,
                u.isInAmpMode)(r)
            }, e)
        };
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    9527: function(t, e) {
        "use strict";
        function r(t) {
            let {widthInt: e, heightInt: r, blurWidth: n, blurHeight: i, blurDataURL: s, objectFit: o} = t
              , a = n || e
              , l = i || r
              , u = s.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
            return a && l ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 " + a + " " + l + "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + (n && i ? "1" : "20") + "'/%3E" + u + "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='" + s + "'/%3E%3C/svg%3E" : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='" + ("contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' x='0' y='0' height='100%25' width='100%25' href='" + s + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    2281: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = r(6927)
          , i = n._(r(6006))
          , s = r(5149)
          , o = i.default.createContext(s.imageConfigDefault)
    },
    5149: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            VALID_LOADERS: function() {
                return r
            },
            imageConfigDefault: function() {
                return n
            }
        });
        let r = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , n = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "inline",
            remotePatterns: [],
            unoptimized: !1
        }
    },
    7630: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            default: function() {
                return u
            },
            unstable_getImgProps: function() {
                return l
            }
        });
        let n = r(6927)
          , i = r(5468)
          , s = r(3579)
          , o = r(3240)
          , a = n._(r(4489))
          , l = t=>{
            (0,
            s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
            let {props: e} = (0,
            i.getImgProps)(t, {
                defaultLoader: a.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[t,r] of Object.entries(e))
                void 0 === r && delete e[t];
            return {
                props: e
            }
        }
          , u = o.Image
    },
    4489: function(t, e) {
        "use strict";
        function r(t) {
            let {config: e, src: r, width: n, quality: i} = t;
            return e.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + (i || 75)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r.__next_img_default = !0;
        let n = r
    },
    3645: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "RouterContext", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let n = r(6927)
          , i = n._(r(6006))
          , s = i.default.createContext(null)
    },
    2433: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            formatUrl: function() {
                return o
            },
            urlObjectKeys: function() {
                return a
            },
            formatWithValidation: function() {
                return l
            }
        });
        let n = r(5909)
          , i = n._(r(8469))
          , s = /https?|ftp|gopher|file/;
        function o(t) {
            let {auth: e, hostname: r} = t
              , n = t.protocol || ""
              , o = t.pathname || ""
              , a = t.hash || ""
              , l = t.query || ""
              , u = !1;
            e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "",
            t.host ? u = e + t.host : r && (u = e + (~r.indexOf(":") ? "[" + r + "]" : r),
            t.port && (u += ":" + t.port)),
            l && "object" == typeof l && (l = String(i.urlQueryToSearchParams(l)));
            let c = t.search || l && "?" + l || "";
            return n && !n.endsWith(":") && (n += ":"),
            t.slashes || (!n || s.test(n)) && !1 !== u ? (u = "//" + (u || ""),
            o && "/" !== o[0] && (o = "/" + o)) : u || (u = ""),
            a && "#" !== a[0] && (a = "#" + a),
            c && "?" !== c[0] && (c = "?" + c),
            "" + n + u + (o = o.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + a
        }
        let a = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function l(t) {
            return o(t)
        }
    },
    9300: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "interpolateAs", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let n = r(6692)
          , i = r(6167);
        function s(t, e, r) {
            let s = ""
              , o = (0,
            i.getRouteRegex)(t)
              , a = o.groups
              , l = (e !== t ? (0,
            n.getRouteMatcher)(o)(e) : "") || r;
            s = t;
            let u = Object.keys(a);
            return u.every(t=>{
                let e = l[t] || ""
                  , {repeat: r, optional: n} = a[t]
                  , i = "[" + (r ? "..." : "") + t + "]";
                return n && (i = (e ? "" : "/") + "[" + i + "]"),
                r && !Array.isArray(e) && (e = [e]),
                (n || t in l) && (s = s.replace(i, r ? e.map(t=>encodeURIComponent(t)).join("/") : encodeURIComponent(e)) || "/")
            }
            ) || (s = ""),
            {
                params: u,
                result: s
            }
        }
    },
    5726: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "isDynamicRoute", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let r = /\/\[[^/]+?\](?=\/|$)/;
        function n(t) {
            return r.test(t)
        }
    },
    4490: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "isLocalURL", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let n = r(4750)
          , i = r(879);
        function s(t) {
            if (!(0,
            n.isAbsoluteUrl)(t))
                return !0;
            try {
                let e = (0,
                n.getLocationOrigin)()
                  , r = new URL(t,e);
                return r.origin === e && (0,
                i.hasBasePath)(r.pathname)
            } catch (t) {
                return !1
            }
        }
    },
    7798: function(t, e) {
        "use strict";
        function r(t, e) {
            let r = {};
            return Object.keys(t).forEach(n=>{
                e.includes(n) || (r[n] = t[n])
            }
            ),
            r
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "omit", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    4511: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "pathHasPrefix", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = r(8169);
        function i(t, e) {
            if ("string" != typeof t)
                return !1;
            let {pathname: r} = (0,
            n.parsePath)(t);
            return r === e || r.startsWith(e + "/")
        }
    },
    8469: function(t, e) {
        "use strict";
        function r(t) {
            let e = {};
            return t.forEach((t,r)=>{
                void 0 === e[r] ? e[r] = t : Array.isArray(e[r]) ? e[r].push(t) : e[r] = [e[r], t]
            }
            ),
            e
        }
        function n(t) {
            return "string" != typeof t && ("number" != typeof t || isNaN(t)) && "boolean" != typeof t ? "" : String(t)
        }
        function i(t) {
            let e = new URLSearchParams;
            return Object.entries(t).forEach(t=>{
                let[r,i] = t;
                Array.isArray(i) ? i.forEach(t=>e.append(r, n(t))) : e.set(r, n(i))
            }
            ),
            e
        }
        function s(t) {
            for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                r[n - 1] = arguments[n];
            return r.forEach(e=>{
                Array.from(e.keys()).forEach(e=>t.delete(e)),
                e.forEach((e,r)=>t.append(r, e))
            }
            ),
            t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            searchParamsToUrlQuery: function() {
                return r
            },
            urlQueryToSearchParams: function() {
                return i
            },
            assign: function() {
                return s
            }
        })
    },
    4268: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "resolveHref", {
            enumerable: !0,
            get: function() {
                return h
            }
        });
        let n = r(8469)
          , i = r(2433)
          , s = r(7798)
          , o = r(4750)
          , a = r(2158)
          , l = r(4490)
          , u = r(5726)
          , c = r(9300);
        function h(t, e, r) {
            let h;
            let d = "string" == typeof e ? e : (0,
            i.formatWithValidation)(e)
              , f = d.match(/^[a-zA-Z]{1,}:\/\//)
              , p = f ? d.slice(f[0].length) : d;
            if ((p.split("?")[0] || "").match(/(\/\/|\\)/)) {
                console.error("Invalid href '" + d + "' passed to next/router in page: '" + t.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                let e = (0,
                o.normalizeRepeatedSlashes)(p);
                d = (f ? f[0] : "") + e
            }
            if (!(0,
            l.isLocalURL)(d))
                return r ? [d] : d;
            try {
                h = new URL(d.startsWith("#") ? t.asPath : t.pathname,"http://n")
            } catch (t) {
                h = new URL("/","http://n")
            }
            try {
                let t = new URL(d,h);
                t.pathname = (0,
                a.normalizePathTrailingSlash)(t.pathname);
                let e = "";
                if ((0,
                u.isDynamicRoute)(t.pathname) && t.searchParams && r) {
                    let r = (0,
                    n.searchParamsToUrlQuery)(t.searchParams)
                      , {result: o, params: a} = (0,
                    c.interpolateAs)(t.pathname, t.pathname, r);
                    o && (e = (0,
                    i.formatWithValidation)({
                        pathname: o,
                        hash: t.hash,
                        query: (0,
                        s.omit)(r, a)
                    }))
                }
                let o = t.origin === h.origin ? t.href.slice(t.origin.length) : t.href;
                return r ? [o, e || o] : o
            } catch (t) {
                return r ? [d] : d
            }
        }
    },
    6692: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getRouteMatcher", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = r(4750);
        function i(t) {
            let {re: e, groups: r} = t;
            return t=>{
                let i = e.exec(t);
                if (!i)
                    return !1;
                let s = t=>{
                    try {
                        return decodeURIComponent(t)
                    } catch (t) {
                        throw new n.DecodeError("failed to decode param")
                    }
                }
                  , o = {};
                return Object.keys(r).forEach(t=>{
                    let e = r[t]
                      , n = i[e.pos];
                    void 0 !== n && (o[t] = ~n.indexOf("/") ? n.split("/").map(t=>s(t)) : e.repeat ? [s(n)] : s(n))
                }
                ),
                o
            }
        }
    },
    6167: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            getRouteRegex: function() {
                return l
            },
            getNamedRouteRegex: function() {
                return h
            },
            getNamedMiddlewareRegex: function() {
                return d
            }
        });
        let n = r(7399)
          , i = r(7962)
          , s = r(9779);
        function o(t) {
            let e = t.startsWith("[") && t.endsWith("]");
            e && (t = t.slice(1, -1));
            let r = t.startsWith("...");
            return r && (t = t.slice(3)),
            {
                key: t,
                repeat: r,
                optional: e
            }
        }
        function a(t) {
            let e = (0,
            s.removeTrailingSlash)(t).slice(1).split("/")
              , r = {}
              , a = 1;
            return {
                parameterizedRoute: e.map(t=>{
                    let e = n.INTERCEPTION_ROUTE_MARKERS.find(e=>t.startsWith(e))
                      , s = t.match(/\[((?:\[.*\])|.+)\]/);
                    if (e && s) {
                        let {key: t, optional: n, repeat: l} = o(s[1]);
                        return r[t] = {
                            pos: a++,
                            repeat: l,
                            optional: n
                        },
                        "/" + (0,
                        i.escapeStringRegexp)(e) + "([^/]+?)"
                    }
                    if (!s)
                        return "/" + (0,
                        i.escapeStringRegexp)(t);
                    {
                        let {key: t, repeat: e, optional: n} = o(s[1]);
                        return r[t] = {
                            pos: a++,
                            repeat: e,
                            optional: n
                        },
                        e ? n ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                    }
                }
                ).join(""),
                groups: r
            }
        }
        function l(t) {
            let {parameterizedRoute: e, groups: r} = a(t);
            return {
                re: RegExp("^" + e + "(?:/)?$"),
                groups: r
            }
        }
        function u(t) {
            let e, r, {segment: n, routeKeys: i, keyPrefix: s} = t, a = (e = 97,
            r = 1,
            ()=>{
                let t = "";
                for (let n = 0; n < r; n++)
                    t += String.fromCharCode(e),
                    ++e > 122 && (r++,
                    e = 97);
                return t
            }
            ), {key: l, optional: u, repeat: c} = o(n), h = l.replace(/\W/g, "");
            s && (h = "" + s + h);
            let d = !1;
            return (0 === h.length || h.length > 30) && (d = !0),
            isNaN(parseInt(h.slice(0, 1))) || (d = !0),
            d && (h = a()),
            s ? i[h] = "" + s + l : i[h] = "" + l,
            c ? u ? "(?:/(?<" + h + ">.+?))?" : "/(?<" + h + ">.+?)" : "/(?<" + h + ">[^/]+?)"
        }
        function c(t, e) {
            let r = (0,
            s.removeTrailingSlash)(t).slice(1).split("/")
              , o = {};
            return {
                namedParameterizedRoute: r.map(t=>{
                    let r = n.INTERCEPTION_ROUTE_MARKERS.some(e=>t.startsWith(e))
                      , s = t.match(/\[((?:\[.*\])|.+)\]/);
                    return r && s ? u({
                        segment: s[1],
                        routeKeys: o,
                        keyPrefix: e ? "nxtI" : void 0
                    }) : s ? u({
                        segment: s[1],
                        routeKeys: o,
                        keyPrefix: e ? "nxtP" : void 0
                    }) : "/" + (0,
                    i.escapeStringRegexp)(t)
                }
                ).join(""),
                routeKeys: o
            }
        }
        function h(t, e) {
            let r = c(t, e);
            return {
                ...l(t),
                namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
                routeKeys: r.routeKeys
            }
        }
        function d(t, e) {
            let {parameterizedRoute: r} = a(t)
              , {catchAll: n=!0} = e;
            if ("/" === r)
                return {
                    namedRegex: "^/" + (n ? ".*" : "") + "$"
                };
            let {namedParameterizedRoute: i} = c(t, !1);
            return {
                namedRegex: "^" + i + (n ? "(?:(/.*)?)" : "") + "$"
            }
        }
    },
    8703: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let n = r(5909)
          , i = n._(r(6006))
          , s = i.useLayoutEffect
          , o = i.useEffect;
        function a(t) {
            let {headManager: e, reduceComponentsToState: r} = t;
            function n() {
                if (e && e.mountedInstances) {
                    let n = i.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                    e.updateHead(r(n, t))
                }
            }
            return s(()=>{
                var r;
                return null == e || null == (r = e.mountedInstances) || r.add(t.children),
                ()=>{
                    var r;
                    null == e || null == (r = e.mountedInstances) || r.delete(t.children)
                }
            }
            ),
            s(()=>(e && (e._pendingUpdate = n),
            ()=>{
                e && (e._pendingUpdate = n)
            }
            )),
            o(()=>(e && e._pendingUpdate && (e._pendingUpdate(),
            e._pendingUpdate = null),
            ()=>{
                e && e._pendingUpdate && (e._pendingUpdate(),
                e._pendingUpdate = null)
            }
            )),
            null
        }
    },
    4750: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            WEB_VITALS: function() {
                return r
            },
            execOnce: function() {
                return n
            },
            isAbsoluteUrl: function() {
                return s
            },
            getLocationOrigin: function() {
                return o
            },
            getURL: function() {
                return a
            },
            getDisplayName: function() {
                return l
            },
            isResSent: function() {
                return u
            },
            normalizeRepeatedSlashes: function() {
                return c
            },
            loadGetInitialProps: function() {
                return h
            },
            SP: function() {
                return d
            },
            ST: function() {
                return f
            },
            DecodeError: function() {
                return p
            },
            NormalizeError: function() {
                return m
            },
            PageNotFoundError: function() {
                return g
            },
            MissingStaticPage: function() {
                return y
            },
            MiddlewareNotFoundError: function() {
                return v
            },
            stringifyError: function() {
                return b
            }
        });
        let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function n(t) {
            let e, r = !1;
            return function() {
                for (var n = arguments.length, i = Array(n), s = 0; s < n; s++)
                    i[s] = arguments[s];
                return r || (r = !0,
                e = t(...i)),
                e
            }
        }
        let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
          , s = t=>i.test(t);
        function o() {
            let {protocol: t, hostname: e, port: r} = window.location;
            return t + "//" + e + (r ? ":" + r : "")
        }
        function a() {
            let {href: t} = window.location
              , e = o();
            return t.substring(e.length)
        }
        function l(t) {
            return "string" == typeof t ? t : t.displayName || t.name || "Unknown"
        }
        function u(t) {
            return t.finished || t.headersSent
        }
        function c(t) {
            let e = t.split("?")
              , r = e[0];
            return r.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? "?" + e.slice(1).join("?") : "")
        }
        async function h(t, e) {
            let r = e.res || e.ctx && e.ctx.res;
            if (!t.getInitialProps)
                return e.ctx && e.Component ? {
                    pageProps: await h(e.Component, e.ctx)
                } : {};
            let n = await t.getInitialProps(e);
            if (r && u(r))
                return n;
            if (!n) {
                let e = '"' + l(t) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.';
                throw Error(e)
            }
            return n
        }
        let d = "undefined" != typeof performance
          , f = d && ["mark", "measure", "getEntriesByName"].every(t=>"function" == typeof performance[t]);
        class p extends Error {
        }
        class m extends Error {
        }
        class g extends Error {
            constructor(t) {
                super(),
                this.code = "ENOENT",
                this.name = "PageNotFoundError",
                this.message = "Cannot find module for page: " + t
            }
        }
        class y extends Error {
            constructor(t, e) {
                super(),
                this.message = "Failed to load static file for page: " + t + " " + e
            }
        }
        class v extends Error {
            constructor() {
                super(),
                this.code = "ENOENT",
                this.message = "Cannot find the middleware module"
            }
        }
        function b(t) {
            return JSON.stringify({
                message: t.message,
                stack: t.stack
            })
        }
    },
    3579: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "warnOnce", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = t=>{}
    },
    3177: function(t, e, r) {
        "use strict";
        /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var n = r(6006)
          , i = Symbol.for("react.element")
          , s = Symbol.for("react.fragment")
          , o = Object.prototype.hasOwnProperty
          , a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
          , l = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function u(t, e, r) {
            var n, s = {}, u = null, c = null;
            for (n in void 0 !== r && (u = "" + r),
            void 0 !== e.key && (u = "" + e.key),
            void 0 !== e.ref && (c = e.ref),
            e)
                o.call(e, n) && !l.hasOwnProperty(n) && (s[n] = e[n]);
            if (t && t.defaultProps)
                for (n in e = t.defaultProps)
                    void 0 === s[n] && (s[n] = e[n]);
            return {
                $$typeof: i,
                type: t,
                key: u,
                ref: c,
                props: s,
                _owner: a.current
            }
        }
        e.Fragment = s,
        e.jsx = u,
        e.jsxs = u
    },
    9268: function(t, e, r) {
        "use strict";
        t.exports = r(3177)
    },
    6394: function(t, e, r) {
        t.exports = r(7630)
    },
    5846: function(t, e, r) {
        t.exports = r(4896)
    },
    3393: function(t, e, r) {
        "use strict";
        r.d(e, {
            AlO: function() {
                return i
            },
            Ccr: function() {
                return a
            },
            qOw: function() {
                return o
            },
            uOf: function() {
                return s
            }
        });
        var n = r(3270);
        function i(t) {
            return (0,
            n.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    }
                }, {
                    tag: "polyline",
                    attr: {
                        points: "15 3 21 3 21 9"
                    }
                }, {
                    tag: "line",
                    attr: {
                        x1: "10",
                        y1: "14",
                        x2: "21",
                        y2: "3"
                    }
                }]
            })(t)
        }
        function s(t) {
            return (0,
            n.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    }
                }]
            })(t)
        }
        function o(t) {
            return (0,
            n.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    }
                }, {
                    tag: "rect",
                    attr: {
                        x: "2",
                        y: "9",
                        width: "4",
                        height: "12"
                    }
                }, {
                    tag: "circle",
                    attr: {
                        cx: "4",
                        cy: "4",
                        r: "2"
                    }
                }]
            })(t)
        }
        function a(t) {
            return (0,
            n.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                    }
                }]
            })(t)
        }
    },
    3270: function(t, e, r) {
        "use strict";
        r.d(e, {
            w_: function() {
                return l
            }
        });
        var n = r(6006)
          , i = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , s = n.createContext && n.createContext(i)
          , o = function() {
            return (o = Object.assign || function(t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var i in e = arguments[r])
                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }
            ).apply(this, arguments)
        }
          , a = function(t, e) {
            var r = {};
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                    0 > e.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
            return r
        };
        function l(t) {
            return function(e) {
                return n.createElement(u, o({
                    attr: o({}, t.attr)
                }, e), function t(e) {
                    return e && e.map(function(e, r) {
                        return n.createElement(e.tag, o({
                            key: r
                        }, e.attr), t(e.child))
                    })
                }(t.child))
            }
        }
        function u(t) {
            var e = function(e) {
                var r, i = t.attr, s = t.size, l = t.title, u = a(t, ["attr", "size", "title"]), c = s || e.size || "1em";
                return e.className && (r = e.className),
                t.className && (r = (r ? r + " " : "") + t.className),
                n.createElement("svg", o({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, e.attr, i, u, {
                    className: r,
                    style: o(o({
                        color: t.color || e.color
                    }, e.style), t.style),
                    height: c,
                    width: c,
                    xmlns: "http://www.w3.org/2000/svg"
                }), l && n.createElement("title", null, l), t.children)
            };
            return void 0 !== s ? n.createElement(s.Consumer, null, function(t) {
                return e(t)
            }) : e(i)
        }
    },
    7743: function(t, e, r) {
        "use strict";
        r.d(e, {
            M: function() {
                return g
            }
        });
        var n = r(6006)
          , i = r(4208)
          , s = r(3398);
        function o() {
            let t = (0,
            n.useRef)(!1);
            return (0,
            s.L)(()=>(t.current = !0,
            ()=>{
                t.current = !1
            }
            ), []),
            t
        }
        var a = r(3043)
          , l = r(789);
        class u extends n.Component {
            getSnapshotBeforeUpdate(t) {
                let e = this.props.childRef.current;
                if (e && t.isPresent && !this.props.isPresent) {
                    let t = this.props.sizeRef.current;
                    t.height = e.offsetHeight || 0,
                    t.width = e.offsetWidth || 0,
                    t.top = e.offsetTop,
                    t.left = e.offsetLeft
                }
                return null
            }
            componentDidUpdate() {}
            render() {
                return this.props.children
            }
        }
        function c({children: t, isPresent: e}) {
            let r = (0,
            n.useId)()
              , i = (0,
            n.useRef)(null)
              , s = (0,
            n.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0
            });
            return (0,
            n.useInsertionEffect)(()=>{
                let {width: t, height: n, top: o, left: a} = s.current;
                if (e || !i.current || !t || !n)
                    return;
                i.current.dataset.motionPopId = r;
                let l = document.createElement("style");
                return document.head.appendChild(l),
                l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${n}px !important;
            top: ${o}px !important;
            left: ${a}px !important;
          }
        `),
                ()=>{
                    document.head.removeChild(l)
                }
            }
            , [e]),
            n.createElement(u, {
                isPresent: e,
                childRef: i,
                sizeRef: s
            }, n.cloneElement(t, {
                ref: i
            }))
        }
        let h = ({children: t, initial: e, isPresent: r, onExitComplete: i, custom: s, presenceAffectsLayout: o, mode: u})=>{
            let h = (0,
            l.h)(d)
              , f = (0,
            n.useId)()
              , p = (0,
            n.useMemo)(()=>({
                id: f,
                initial: e,
                isPresent: r,
                custom: s,
                onExitComplete: t=>{
                    for (let e of (h.set(t, !0),
                    h.values()))
                        if (!e)
                            return;
                    i && i()
                }
                ,
                register: t=>(h.set(t, !1),
                ()=>h.delete(t))
            }), o ? void 0 : [r]);
            return (0,
            n.useMemo)(()=>{
                h.forEach((t,e)=>h.set(e, !1))
            }
            , [r]),
            n.useEffect(()=>{
                r || h.size || !i || i()
            }
            , [r]),
            "popLayout" === u && (t = n.createElement(c, {
                isPresent: r
            }, t)),
            n.createElement(a.O.Provider, {
                value: p
            }, t)
        }
        ;
        function d() {
            return new Map
        }
        var f = r(2115)
          , p = r(2864);
        let m = t=>t.key || ""
          , g = ({children: t, custom: e, initial: r=!0, onExitComplete: a, exitBeforeEnter: l, presenceAffectsLayout: u=!0, mode: c="sync"})=>{
            var d;
            (0,
            p.k)(!l, "Replace exitBeforeEnter with mode='wait'");
            let g = (0,
            n.useContext)(f.p).forceRender || function() {
                let t = o()
                  , [e,r] = (0,
                n.useState)(0)
                  , s = (0,
                n.useCallback)(()=>{
                    t.current && r(e + 1)
                }
                , [e])
                  , a = (0,
                n.useCallback)(()=>i.Wi.postRender(s), [s]);
                return [a, e]
            }()[0]
              , y = o()
              , v = function(t) {
                let e = [];
                return n.Children.forEach(t, t=>{
                    (0,
                    n.isValidElement)(t) && e.push(t)
                }
                ),
                e
            }(t)
              , b = v
              , x = (0,
            n.useRef)(new Map).current
              , P = (0,
            n.useRef)(b)
              , w = (0,
            n.useRef)(new Map).current
              , S = (0,
            n.useRef)(!0);
            if ((0,
            s.L)(()=>{
                S.current = !1,
                function(t, e) {
                    t.forEach(t=>{
                        let r = m(t);
                        e.set(r, t)
                    }
                    )
                }(v, w),
                P.current = b
            }
            ),
            d = ()=>{
                S.current = !0,
                w.clear(),
                x.clear()
            }
            ,
            (0,
            n.useEffect)(()=>()=>d(), []),
            S.current)
                return n.createElement(n.Fragment, null, b.map(t=>n.createElement(h, {
                    key: m(t),
                    isPresent: !0,
                    initial: !!r && void 0,
                    presenceAffectsLayout: u,
                    mode: c
                }, t)));
            b = [...b];
            let E = P.current.map(m)
              , A = v.map(m)
              , C = E.length;
            for (let t = 0; t < C; t++) {
                let e = E[t];
                -1 !== A.indexOf(e) || x.has(e) || x.set(e, void 0)
            }
            return "wait" === c && x.size && (b = []),
            x.forEach((t,r)=>{
                if (-1 !== A.indexOf(r))
                    return;
                let i = w.get(r);
                if (!i)
                    return;
                let s = E.indexOf(r)
                  , o = t;
                o || (o = n.createElement(h, {
                    key: m(i),
                    isPresent: !1,
                    onExitComplete: ()=>{
                        w.delete(r),
                        x.delete(r);
                        let t = P.current.findIndex(t=>t.key === r);
                        if (P.current.splice(t, 1),
                        !x.size) {
                            if (P.current = v,
                            !1 === y.current)
                                return;
                            g(),
                            a && a()
                        }
                    }
                    ,
                    custom: e,
                    presenceAffectsLayout: u,
                    mode: c
                }, i),
                x.set(r, o)),
                b.splice(s, 0, o)
            }
            ),
            b = b.map(t=>{
                let e = t.key;
                return x.has(e) ? t : n.createElement(h, {
                    key: m(t),
                    isPresent: !0,
                    presenceAffectsLayout: u,
                    mode: c
                }, t)
            }
            ),
            n.createElement(n.Fragment, null, x.size ? b : b.map(t=>(0,
            n.cloneElement)(t)))
        }
    },
    2115: function(t, e, r) {
        "use strict";
        r.d(e, {
            p: function() {
                return i
            }
        });
        var n = r(6006);
        let i = (0,
        n.createContext)({})
    },
    3043: function(t, e, r) {
        "use strict";
        r.d(e, {
            O: function() {
                return i
            }
        });
        var n = r(6006);
        let i = (0,
        n.createContext)(null)
    },
    651: function(t, e, r) {
        "use strict";
        r.d(e, {
            frameData: function() {
                return n
            }
        });
        let n = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        }
    },
    4208: function(t, e, r) {
        "use strict";
        r.d(e, {
            Pn: function() {
                return d
            },
            Wi: function() {
                return h
            },
            S6: function() {
                return a
            }
        });
        var n = r(651);
        let i = !0
          , s = !1
          , o = ["read", "update", "preRender", "render", "postRender"]
          , a = o.reduce((t,e)=>(t[e] = function(t) {
            let e = []
              , r = []
              , n = 0
              , i = !1
              , s = !1
              , o = new WeakSet
              , a = {
                schedule: (t,s=!1,a=!1)=>{
                    let l = a && i
                      , u = l ? e : r;
                    return s && o.add(t),
                    -1 === u.indexOf(t) && (u.push(t),
                    l && i && (n = e.length)),
                    t
                }
                ,
                cancel: t=>{
                    let e = r.indexOf(t);
                    -1 !== e && r.splice(e, 1),
                    o.delete(t)
                }
                ,
                process: l=>{
                    if (i) {
                        s = !0;
                        return
                    }
                    if (i = !0,
                    [e,r] = [r, e],
                    r.length = 0,
                    n = e.length)
                        for (let r = 0; r < n; r++) {
                            let n = e[r];
                            n(l),
                            o.has(n) && (a.schedule(n),
                            t())
                        }
                    i = !1,
                    s && (s = !1,
                    a.process(l))
                }
            };
            return a
        }(()=>s = !0),
        t), {})
          , l = t=>a[t].process(n.frameData)
          , u = t=>{
            s = !1,
            n.frameData.delta = i ? 1e3 / 60 : Math.max(Math.min(t - n.frameData.timestamp, 40), 1),
            n.frameData.timestamp = t,
            n.frameData.isProcessing = !0,
            o.forEach(l),
            n.frameData.isProcessing = !1,
            s && (i = !1,
            requestAnimationFrame(u))
        }
          , c = ()=>{
            s = !0,
            i = !0,
            n.frameData.isProcessing || requestAnimationFrame(u)
        }
          , h = o.reduce((t,e)=>{
            let r = a[e];
            return t[e] = (t,e=!1,n=!1)=>(s || c(),
            r.schedule(t, e, n)),
            t
        }
        , {});
        function d(t) {
            o.forEach(e=>a[e].cancel(t))
        }
    },
    943: function(t, e, r) {
        "use strict";
        r.d(e, {
            E: function() {
                return iD
            }
        });
        var n, i = r(6006);
        let s = (0,
        i.createContext)({
            transformPagePoint: t=>t,
            isStatic: !1,
            reducedMotion: "never"
        })
          , o = (0,
        i.createContext)({});
        var a = r(3043)
          , l = r(3398);
        let u = (0,
        i.createContext)({
            strict: !1
        });
        function c(t) {
            return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function h(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        function d(t) {
            return "object" == typeof t && "function" == typeof t.start
        }
        let f = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , p = ["initial", ...f];
        function m(t) {
            return d(t.animate) || p.some(e=>h(t[e]))
        }
        function g(t) {
            return !!(m(t) || t.variants)
        }
        function y(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        let v = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , b = {};
        for (let t in v)
            b[t] = {
                isEnabled: e=>v[t].some(t=>!!e[t])
            };
        var x = r(5532)
          , P = r(2115);
        let w = (0,
        i.createContext)({})
          , S = Symbol.for("motionComponentSymbol")
          , E = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function A(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (E.indexOf(t) > -1 || /[A-Z]/.test(t))
                return !0;
            return !1
        }
        let C = {}
          , T = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , j = new Set(T);
        function M(t, {layout: e, layoutId: r}) {
            return j.has(t) || t.startsWith("origin") || (e || void 0 !== r) && (!!C[t] || "opacity" === t)
        }
        let k = t=>!!(t && t.getVelocity)
          , R = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , O = T.length
          , V = t=>e=>"string" == typeof e && e.startsWith(t)
          , D = V("--")
          , L = V("var(--")
          , _ = (t,e)=>e && "number" == typeof t ? e.transform(t) : t
          , I = (t,e,r)=>Math.min(Math.max(r, t), e)
          , F = {
            test: t=>"number" == typeof t,
            parse: parseFloat,
            transform: t=>t
        }
          , B = {
            ...F,
            transform: t=>I(0, 1, t)
        }
          , U = {
            ...F,
            default: 1
        }
          , N = t=>Math.round(1e5 * t) / 1e5
          , W = /(-)?([\d]*\.?[\d])+/g
          , z = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
          , $ = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
        function H(t) {
            return "string" == typeof t
        }
        let Z = t=>({
            test: e=>H(e) && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e=>`${e}${t}`
        })
          , q = Z("deg")
          , G = Z("%")
          , Y = Z("px")
          , K = Z("vh")
          , X = Z("vw")
          , J = {
            ...G,
            parse: t=>G.parse(t) / 100,
            transform: t=>G.transform(100 * t)
        }
          , Q = {
            ...F,
            transform: Math.round
        }
          , tt = {
            borderWidth: Y,
            borderTopWidth: Y,
            borderRightWidth: Y,
            borderBottomWidth: Y,
            borderLeftWidth: Y,
            borderRadius: Y,
            radius: Y,
            borderTopLeftRadius: Y,
            borderTopRightRadius: Y,
            borderBottomRightRadius: Y,
            borderBottomLeftRadius: Y,
            width: Y,
            maxWidth: Y,
            height: Y,
            maxHeight: Y,
            size: Y,
            top: Y,
            right: Y,
            bottom: Y,
            left: Y,
            padding: Y,
            paddingTop: Y,
            paddingRight: Y,
            paddingBottom: Y,
            paddingLeft: Y,
            margin: Y,
            marginTop: Y,
            marginRight: Y,
            marginBottom: Y,
            marginLeft: Y,
            rotate: q,
            rotateX: q,
            rotateY: q,
            rotateZ: q,
            scale: U,
            scaleX: U,
            scaleY: U,
            scaleZ: U,
            skew: q,
            skewX: q,
            skewY: q,
            distance: Y,
            translateX: Y,
            translateY: Y,
            translateZ: Y,
            x: Y,
            y: Y,
            z: Y,
            perspective: Y,
            transformPerspective: Y,
            opacity: B,
            originX: J,
            originY: J,
            originZ: Y,
            zIndex: Q,
            fillOpacity: B,
            strokeOpacity: B,
            numOctaves: Q
        };
        function te(t, e, r, n) {
            let {style: i, vars: s, transform: o, transformOrigin: a} = t
              , l = !1
              , u = !1
              , c = !0;
            for (let t in e) {
                let r = e[t];
                if (D(t)) {
                    s[t] = r;
                    continue
                }
                let n = tt[t]
                  , h = _(r, n);
                if (j.has(t)) {
                    if (l = !0,
                    o[t] = h,
                    !c)
                        continue;
                    r !== (n.default || 0) && (c = !1)
                } else
                    t.startsWith("origin") ? (u = !0,
                    a[t] = h) : i[t] = h
            }
            if (!e.transform && (l || n ? i.transform = function(t, {enableHardwareAcceleration: e=!0, allowTransformNone: r=!0}, n, i) {
                let s = "";
                for (let e = 0; e < O; e++) {
                    let r = T[e];
                    if (void 0 !== t[r]) {
                        let e = R[r] || r;
                        s += `${e}(${t[r]}) `
                    }
                }
                return e && !t.z && (s += "translateZ(0)"),
                s = s.trim(),
                i ? s = i(t, n ? "" : s) : r && n && (s = "none"),
                s
            }(t.transform, r, c, n) : i.transform && (i.transform = "none")),
            u) {
                let {originX: t="50%", originY: e="50%", originZ: r=0} = a;
                i.transformOrigin = `${t} ${e} ${r}`
            }
        }
        let tr = ()=>({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function tn(t, e, r) {
            for (let n in e)
                k(e[n]) || M(n, r) || (t[n] = e[n])
        }
        function ti(t, e, r) {
            let n = {}
              , s = function(t, e, r) {
                let n = t.style || {}
                  , s = {};
                return tn(s, n, t),
                Object.assign(s, function({transformTemplate: t}, e, r) {
                    return (0,
                    i.useMemo)(()=>{
                        let n = tr();
                        return te(n, e, {
                            enableHardwareAcceleration: !r
                        }, t),
                        Object.assign({}, n.vars, n.style)
                    }
                    , [e])
                }(t, e, r)),
                t.transformValues ? t.transformValues(s) : s
            }(t, e, r);
            return t.drag && !1 !== t.dragListener && (n.draggable = !1,
            s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none",
            s.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
            void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
            n.style = s,
            n
        }
        let ts = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);
        function to(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || ts.has(t)
        }
        let ta = t=>!to(t);
        try {
            (n = require("@emotion/is-prop-valid").default) && (ta = t=>t.startsWith("on") ? !to(t) : n(t))
        } catch (t) {}
        function tl(t, e, r) {
            return "string" == typeof t ? t : Y.transform(e + r * t)
        }
        let tu = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , tc = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function th(t, {attrX: e, attrY: r, attrScale: n, originX: i, originY: s, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...u}, c, h, d) {
            if (te(t, u, c, d),
            h) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: f, style: p, dimensions: m} = t;
            f.transform && (m && (p.transform = f.transform),
            delete f.transform),
            m && (void 0 !== i || void 0 !== s || p.transform) && (p.transformOrigin = function(t, e, r) {
                let n = tl(e, t.x, t.width)
                  , i = tl(r, t.y, t.height);
                return `${n} ${i}`
            }(m, void 0 !== i ? i : .5, void 0 !== s ? s : .5)),
            void 0 !== e && (f.x = e),
            void 0 !== r && (f.y = r),
            void 0 !== n && (f.scale = n),
            void 0 !== o && function(t, e, r=1, n=0, i=!0) {
                t.pathLength = 1;
                let s = i ? tu : tc;
                t[s.offset] = Y.transform(-n);
                let o = Y.transform(e)
                  , a = Y.transform(r);
                t[s.array] = `${o} ${a}`
            }(f, o, a, l, !1)
        }
        let td = ()=>({
            ...tr(),
            attrs: {}
        })
          , tf = t=>"string" == typeof t && "svg" === t.toLowerCase();
        function tp(t, e, r, n) {
            let s = (0,
            i.useMemo)(()=>{
                let r = td();
                return th(r, e, {
                    enableHardwareAcceleration: !1
                }, tf(n), t.transformTemplate),
                {
                    ...r.attrs,
                    style: {
                        ...r.style
                    }
                }
            }
            , [e]);
            if (t.style) {
                let e = {};
                tn(e, t.style, t),
                s.style = {
                    ...e,
                    ...s.style
                }
            }
            return s
        }
        let tm = t=>t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        function tg(t, {style: e, vars: r}, n, i) {
            for (let s in Object.assign(t.style, e, i && i.getProjectionStyles(n)),
            r)
                t.style.setProperty(s, r[s])
        }
        let ty = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function tv(t, e, r, n) {
            for (let r in tg(t, e, void 0, n),
            e.attrs)
                t.setAttribute(ty.has(r) ? r : tm(r), e.attrs[r])
        }
        function tb(t, e) {
            let {style: r} = t
              , n = {};
            for (let i in r)
                (k(r[i]) || e.style && k(e.style[i]) || M(i, t)) && (n[i] = r[i]);
            return n
        }
        function tx(t, e) {
            let r = tb(t, e);
            for (let n in t)
                if (k(t[n]) || k(e[n])) {
                    let e = -1 !== T.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
                    r[e] = t[n]
                }
            return r
        }
        function tP(t, e, r, n={}, i={}) {
            return "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)),
            "string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)),
            e
        }
        var tw = r(789);
        let tS = t=>Array.isArray(t)
          , tE = t=>!!(t && "object" == typeof t && t.mix && t.toValue)
          , tA = t=>tS(t) ? t[t.length - 1] || 0 : t;
        function tC(t) {
            let e = k(t) ? t.get() : t;
            return tE(e) ? e.toValue() : e
        }
        let tT = t=>(e,r)=>{
            let n = (0,
            i.useContext)(o)
              , s = (0,
            i.useContext)(a.O)
              , l = ()=>(function({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: r}, n, i, s) {
                let o = {
                    latestValues: function(t, e, r, n) {
                        let i = {}
                          , s = n(t, {});
                        for (let t in s)
                            i[t] = tC(s[t]);
                        let {initial: o, animate: a} = t
                          , l = m(t)
                          , u = g(t);
                        e && u && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial),
                        void 0 === a && (a = e.animate));
                        let c = !!r && !1 === r.initial;
                        c = c || !1 === o;
                        let h = c ? a : o;
                        if (h && "boolean" != typeof h && !d(h)) {
                            let e = Array.isArray(h) ? h : [h];
                            e.forEach(e=>{
                                let r = tP(t, e);
                                if (!r)
                                    return;
                                let {transitionEnd: n, transition: s, ...o} = r;
                                for (let t in o) {
                                    let e = o[t];
                                    if (Array.isArray(e)) {
                                        let t = c ? e.length - 1 : 0;
                                        e = e[t]
                                    }
                                    null !== e && (i[t] = e)
                                }
                                for (let t in n)
                                    i[t] = n[t]
                            }
                            )
                        }
                        return i
                    }(n, i, s, t),
                    renderState: e()
                };
                return r && (o.mount = t=>r(n, t, o)),
                o
            }
            )(t, e, n, s);
            return r ? l() : (0,
            tw.h)(l)
        }
          , tj = {
            useVisualState: tT({
                scrapeMotionValuesFromProps: tx,
                createRenderState: td,
                onMount: (t,e,{renderState: r, latestValues: n})=>{
                    try {
                        r.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                    } catch (t) {
                        r.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    th(r, n, {
                        enableHardwareAcceleration: !1
                    }, tf(e.tagName), t.transformTemplate),
                    tv(e, r)
                }
            })
        }
          , tM = {
            useVisualState: tT({
                scrapeMotionValuesFromProps: tb,
                createRenderState: tr
            })
        };
        function tk(t, e, r, n={
            passive: !0
        }) {
            return t.addEventListener(e, r, n),
            ()=>t.removeEventListener(e, r)
        }
        let tR = t=>"mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
        function tO(t, e="page") {
            return {
                point: {
                    x: t[e + "X"],
                    y: t[e + "Y"]
                }
            }
        }
        let tV = t=>e=>tR(e) && t(e, tO(e));
        function tD(t, e, r, n) {
            return tk(t, e, tV(r), n)
        }
        let tL = (t,e)=>r=>e(t(r))
          , t_ = (...t)=>t.reduce(tL);
        function tI(t) {
            let e = null;
            return ()=>null === e && (e = t,
            ()=>{
                e = null
            }
            )
        }
        let tF = tI("dragHorizontal")
          , tB = tI("dragVertical");
        function tU(t) {
            let e = !1;
            if ("y" === t)
                e = tB();
            else if ("x" === t)
                e = tF();
            else {
                let t = tF()
                  , r = tB();
                t && r ? e = ()=>{
                    t(),
                    r()
                }
                : (t && t(),
                r && r())
            }
            return e
        }
        function tN() {
            let t = tU(!0);
            return !t || (t(),
            !1)
        }
        class tW {
            constructor(t) {
                this.isMounted = !1,
                this.node = t
            }
            update() {}
        }
        var tz = r(4208);
        function t$(t, e) {
            let r = "pointer" + (e ? "enter" : "leave")
              , n = "onHover" + (e ? "Start" : "End");
            return tD(t.current, r, (r,i)=>{
                if ("touch" === r.type || tN())
                    return;
                let s = t.getProps();
                t.animationState && s.whileHover && t.animationState.setActive("whileHover", e),
                s[n] && tz.Wi.update(()=>s[n](r, i))
            }
            , {
                passive: !t.getProps()[n]
            })
        }
        let tH = (t,e)=>!!e && (t === e || tH(t, e.parentElement));
        var tZ = r(9153);
        function tq(t, e) {
            if (!e)
                return;
            let r = new PointerEvent("pointer" + t);
            e(r, tO(r))
        }
        let tG = new WeakMap
          , tY = new WeakMap
          , tK = t=>{
            let e = tG.get(t.target);
            e && e(t)
        }
          , tX = t=>{
            t.forEach(tK)
        }
          , tJ = {
            some: 0,
            all: 1
        };
        function tQ(t, e) {
            if (!Array.isArray(e))
                return !1;
            let r = e.length;
            if (r !== t.length)
                return !1;
            for (let n = 0; n < r; n++)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
        function t0(t, e, r) {
            let n = t.getProps();
            return tP(n, e, void 0 !== r ? r : n.custom, function(t) {
                let e = {};
                return t.values.forEach((t,r)=>e[r] = t.get()),
                e
            }(t), function(t) {
                let e = {};
                return t.values.forEach((t,r)=>e[r] = t.getVelocity()),
                e
            }(t))
        }
        let t1 = "data-" + tm("framerAppearId");
        var t2 = r(2864);
        let t3 = t=>1e3 * t
          , t5 = t=>t / 1e3
          , t6 = {
            current: !1
        }
          , t4 = t=>Array.isArray(t) && "number" == typeof t[0]
          , t9 = ([t,e,r,n])=>`cubic-bezier(${t}, ${e}, ${r}, ${n})`
          , t8 = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: t9([0, .65, .55, 1]),
            circOut: t9([.55, 0, 1, .45]),
            backIn: t9([.31, .01, .66, -.59]),
            backOut: t9([.33, 1.53, .69, .99])
        }
          , t7 = {
            waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate")
        }
          , et = {}
          , ee = {};
        for (let t in t7)
            ee[t] = ()=>(void 0 === et[t] && (et[t] = t7[t]()),
            et[t]);
        let er = (t,e,r)=>(((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;
        function en(t, e, r, n) {
            if (t === e && r === n)
                return tZ.Z;
            let i = e=>(function(t, e, r, n, i) {
                let s, o;
                let a = 0;
                do
                    (s = er(o = e + (r - e) / 2, n, i) - t) > 0 ? r = o : e = o;
                while (Math.abs(s) > 1e-7 && ++a < 12);
                return o
            }
            )(e, 0, 1, t, r);
            return t=>0 === t || 1 === t ? t : er(i(t), e, n)
        }
        let ei = en(.42, 0, 1, 1)
          , es = en(0, 0, .58, 1)
          , eo = en(.42, 0, .58, 1)
          , ea = t=>Array.isArray(t) && "number" != typeof t[0]
          , el = t=>e=>e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
          , eu = t=>e=>1 - t(1 - e)
          , ec = t=>1 - Math.sin(Math.acos(t))
          , eh = eu(ec)
          , ed = el(eh)
          , ef = en(.33, 1.53, .69, .99)
          , ep = eu(ef)
          , em = el(ep)
          , eg = {
            linear: tZ.Z,
            easeIn: ei,
            easeInOut: eo,
            easeOut: es,
            circIn: ec,
            circInOut: ed,
            circOut: eh,
            backIn: ep,
            backInOut: em,
            backOut: ef,
            anticipate: t=>(t *= 2) < 1 ? .5 * ep(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
          , ey = t=>{
            if (Array.isArray(t)) {
                (0,
                t2.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,r,n,i] = t;
                return en(e, r, n, i)
            }
            return "string" == typeof t ? ((0,
            t2.k)(void 0 !== eg[t], `Invalid easing type '${t}'`),
            eg[t]) : t
        }
          , ev = (t,e)=>r=>!!(H(r) && $.test(r) && r.startsWith(t) || e && Object.prototype.hasOwnProperty.call(r, e))
          , eb = (t,e,r)=>n=>{
            if (!H(n))
                return n;
            let[i,s,o,a] = n.match(W);
            return {
                [t]: parseFloat(i),
                [e]: parseFloat(s),
                [r]: parseFloat(o),
                alpha: void 0 !== a ? parseFloat(a) : 1
            }
        }
          , ex = t=>I(0, 255, t)
          , eP = {
            ...F,
            transform: t=>Math.round(ex(t))
        }
          , ew = {
            test: ev("rgb", "red"),
            parse: eb("red", "green", "blue"),
            transform: ({red: t, green: e, blue: r, alpha: n=1})=>"rgba(" + eP.transform(t) + ", " + eP.transform(e) + ", " + eP.transform(r) + ", " + N(B.transform(n)) + ")"
        }
          , eS = {
            test: ev("#"),
            parse: function(t) {
                let e = ""
                  , r = ""
                  , n = ""
                  , i = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                r = t.substring(3, 5),
                n = t.substring(5, 7),
                i = t.substring(7, 9)) : (e = t.substring(1, 2),
                r = t.substring(2, 3),
                n = t.substring(3, 4),
                i = t.substring(4, 5),
                e += e,
                r += r,
                n += n,
                i += i),
                {
                    red: parseInt(e, 16),
                    green: parseInt(r, 16),
                    blue: parseInt(n, 16),
                    alpha: i ? parseInt(i, 16) / 255 : 1
                }
            },
            transform: ew.transform
        }
          , eE = {
            test: ev("hsl", "hue"),
            parse: eb("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: r, alpha: n=1})=>"hsla(" + Math.round(t) + ", " + G.transform(N(e)) + ", " + G.transform(N(r)) + ", " + N(B.transform(n)) + ")"
        }
          , eA = {
            test: t=>ew.test(t) || eS.test(t) || eE.test(t),
            parse: t=>ew.test(t) ? ew.parse(t) : eE.test(t) ? eE.parse(t) : eS.parse(t),
            transform: t=>H(t) ? t : t.hasOwnProperty("red") ? ew.transform(t) : eE.transform(t)
        }
          , eC = (t,e,r)=>-r * t + r * e + t;
        function eT(t, e, r) {
            return (r < 0 && (r += 1),
            r > 1 && (r -= 1),
            r < 1 / 6) ? t + (e - t) * 6 * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
        }
        let ej = (t,e,r)=>{
            let n = t * t;
            return Math.sqrt(Math.max(0, r * (e * e - n) + n))
        }
          , eM = [eS, ew, eE]
          , ek = t=>eM.find(e=>e.test(t));
        function eR(t) {
            let e = ek(t);
            (0,
            t2.k)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
            let r = e.parse(t);
            return e === eE && (r = function({hue: t, saturation: e, lightness: r, alpha: n}) {
                t /= 360,
                r /= 100;
                let i = 0
                  , s = 0
                  , o = 0;
                if (e /= 100) {
                    let n = r < .5 ? r * (1 + e) : r + e - r * e
                      , a = 2 * r - n;
                    i = eT(a, n, t + 1 / 3),
                    s = eT(a, n, t),
                    o = eT(a, n, t - 1 / 3)
                } else
                    i = s = o = r;
                return {
                    red: Math.round(255 * i),
                    green: Math.round(255 * s),
                    blue: Math.round(255 * o),
                    alpha: n
                }
            }(r)),
            r
        }
        let eO = (t,e)=>{
            let r = eR(t)
              , n = eR(e)
              , i = {
                ...r
            };
            return t=>(i.red = ej(r.red, n.red, t),
            i.green = ej(r.green, n.green, t),
            i.blue = ej(r.blue, n.blue, t),
            i.alpha = eC(r.alpha, n.alpha, t),
            ew.transform(i))
        }
          , eV = {
            regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
            countKey: "Vars",
            token: "${v}",
            parse: tZ.Z
        }
          , eD = {
            regex: z,
            countKey: "Colors",
            token: "${c}",
            parse: eA.parse
        }
          , eL = {
            regex: W,
            countKey: "Numbers",
            token: "${n}",
            parse: F.parse
        };
        function e_(t, {regex: e, countKey: r, token: n, parse: i}) {
            let s = t.tokenised.match(e);
            s && (t["num" + r] = s.length,
            t.tokenised = t.tokenised.replace(e, n),
            t.values.push(...s.map(i)))
        }
        function eI(t) {
            let e = t.toString()
              , r = {
                value: e,
                tokenised: e,
                values: [],
                numVars: 0,
                numColors: 0,
                numNumbers: 0
            };
            return r.value.includes("var(--") && e_(r, eV),
            e_(r, eD),
            e_(r, eL),
            r
        }
        function eF(t) {
            return eI(t).values
        }
        function eB(t) {
            let {values: e, numColors: r, numVars: n, tokenised: i} = eI(t)
              , s = e.length;
            return t=>{
                let e = i;
                for (let i = 0; i < s; i++)
                    e = i < n ? e.replace(eV.token, t[i]) : i < n + r ? e.replace(eD.token, eA.transform(t[i])) : e.replace(eL.token, N(t[i]));
                return e
            }
        }
        let eU = t=>"number" == typeof t ? 0 : t
          , eN = {
            test: function(t) {
                var e, r;
                return isNaN(t) && H(t) && ((null === (e = t.match(W)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (r = t.match(z)) || void 0 === r ? void 0 : r.length) || 0) > 0
            },
            parse: eF,
            createTransformer: eB,
            getAnimatableNone: function(t) {
                let e = eF(t)
                  , r = eB(t);
                return r(e.map(eU))
            }
        }
          , eW = (t,e)=>r=>`${r > 0 ? e : t}`;
        function ez(t, e) {
            return "number" == typeof t ? r=>eC(t, e, r) : eA.test(t) ? eO(t, e) : t.startsWith("var(") ? eW(t, e) : eZ(t, e)
        }
        let e$ = (t,e)=>{
            let r = [...t]
              , n = r.length
              , i = t.map((t,r)=>ez(t, e[r]));
            return t=>{
                for (let e = 0; e < n; e++)
                    r[e] = i[e](t);
                return r
            }
        }
          , eH = (t,e)=>{
            let r = {
                ...t,
                ...e
            }
              , n = {};
            for (let i in r)
                void 0 !== t[i] && void 0 !== e[i] && (n[i] = ez(t[i], e[i]));
            return t=>{
                for (let e in n)
                    r[e] = n[e](t);
                return r
            }
        }
          , eZ = (t,e)=>{
            let r = eN.createTransformer(e)
              , n = eI(t)
              , i = eI(e)
              , s = n.numVars === i.numVars && n.numColors === i.numColors && n.numNumbers >= i.numNumbers;
            return s ? t_(e$(n.values, i.values), r) : ((0,
            t2.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            eW(t, e))
        }
          , eq = (t,e,r)=>{
            let n = e - t;
            return 0 === n ? 1 : (r - t) / n
        }
          , eG = (t,e)=>r=>eC(t, e, r);
        function eY(t, e, {clamp: r=!0, ease: n, mixer: i}={}) {
            let s = t.length;
            if ((0,
            t2.k)(s === e.length, "Both input and output ranges must be the same length"),
            1 === s)
                return ()=>e[0];
            t[0] > t[s - 1] && (t = [...t].reverse(),
            e = [...e].reverse());
            let o = function(t, e, r) {
                let n = []
                  , i = r || function(t) {
                    if ("number" == typeof t)
                        ;
                    else if ("string" == typeof t)
                        return eA.test(t) ? eO : eZ;
                    else if (Array.isArray(t))
                        return e$;
                    else if ("object" == typeof t)
                        return eH;
                    return eG
                }(t[0])
                  , s = t.length - 1;
                for (let r = 0; r < s; r++) {
                    let s = i(t[r], t[r + 1]);
                    if (e) {
                        let t = Array.isArray(e) ? e[r] || tZ.Z : e;
                        s = t_(t, s)
                    }
                    n.push(s)
                }
                return n
            }(e, n, i)
              , a = o.length
              , l = e=>{
                let r = 0;
                if (a > 1)
                    for (; r < t.length - 2 && !(e < t[r + 1]); r++)
                        ;
                let n = eq(t[r], t[r + 1], e);
                return o[r](n)
            }
            ;
            return r ? e=>l(I(t[0], t[s - 1], e)) : l
        }
        function eK({duration: t=300, keyframes: e, times: r, ease: n="easeInOut"}) {
            let i = ea(n) ? n.map(ey) : ey(n)
              , s = {
                done: !1,
                value: e[0]
            }
              , o = (r && r.length === e.length ? r : function(t) {
                let e = [0];
                return function(t, e) {
                    let r = t[t.length - 1];
                    for (let n = 1; n <= e; n++) {
                        let i = eq(0, e, n);
                        t.push(eC(r, 1, i))
                    }
                }(e, t.length - 1),
                e
            }(e)).map(e=>e * t)
              , a = eY(o, e, {
                ease: Array.isArray(i) ? i : e.map(()=>i || eo).splice(0, e.length - 1)
            });
            return {
                calculatedDuration: t,
                next: e=>(s.value = a(e),
                s.done = e >= t,
                s)
            }
        }
        function eX(t, e, r) {
            var n, i;
            let s = Math.max(e - 5, 0);
            return n = r - t(s),
            (i = e - s) ? n * (1e3 / i) : 0
        }
        function eJ(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let eQ = ["duration", "bounce"]
          , e0 = ["stiffness", "damping", "mass"];
        function e1(t, e) {
            return e.some(e=>void 0 !== t[e])
        }
        function e2({keyframes: t, restDelta: e, restSpeed: r, ...n}) {
            let i;
            let s = t[0]
              , o = t[t.length - 1]
              , a = {
                done: !1,
                value: s
            }
              , {stiffness: l, damping: u, mass: c, velocity: h, duration: d, isResolvedFromDuration: f} = function(t) {
                let e = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!e1(t, e0) && e1(t, eQ)) {
                    let r = function({duration: t=800, bounce: e=.25, velocity: r=0, mass: n=1}) {
                        let i, s;
                        (0,
                        t2.K)(t <= t3(10), "Spring duration must be 10 seconds or less");
                        let o = 1 - e;
                        o = I(.05, 1, o),
                        t = I(.01, 10, t5(t)),
                        o < 1 ? (i = e=>{
                            let n = e * o
                              , i = n * t
                              , s = eJ(e, o);
                            return .001 - (n - r) / s * Math.exp(-i)
                        }
                        ,
                        s = e=>{
                            let n = e * o
                              , s = n * t
                              , a = Math.pow(o, 2) * Math.pow(e, 2) * t
                              , l = eJ(Math.pow(e, 2), o)
                              , u = -i(e) + .001 > 0 ? -1 : 1;
                            return u * ((s * r + r - a) * Math.exp(-s)) / l
                        }
                        ) : (i = e=>{
                            let n = Math.exp(-e * t)
                              , i = (e - r) * t + 1;
                            return -.001 + n * i
                        }
                        ,
                        s = e=>{
                            let n = Math.exp(-e * t)
                              , i = (r - e) * (t * t);
                            return n * i
                        }
                        );
                        let a = 5 / t
                          , l = function(t, e, r) {
                            let n = r;
                            for (let r = 1; r < 12; r++)
                                n -= t(n) / e(n);
                            return n
                        }(i, s, a);
                        if (t = t3(t),
                        isNaN(l))
                            return {
                                stiffness: 100,
                                damping: 10,
                                duration: t
                            };
                        {
                            let e = Math.pow(l, 2) * n;
                            return {
                                stiffness: e,
                                damping: 2 * o * Math.sqrt(n * e),
                                duration: t
                            }
                        }
                    }(t);
                    (e = {
                        ...e,
                        ...r,
                        velocity: 0,
                        mass: 1
                    }).isResolvedFromDuration = !0
                }
                return e
            }(n)
              , p = h ? -t5(h) : 0
              , m = u / (2 * Math.sqrt(l * c))
              , g = o - s
              , y = t5(Math.sqrt(l / c))
              , v = 5 > Math.abs(g);
            if (r || (r = v ? .01 : 2),
            e || (e = v ? .005 : .5),
            m < 1) {
                let t = eJ(y, m);
                i = e=>{
                    let r = Math.exp(-m * y * e);
                    return o - r * ((p + m * y * g) / t * Math.sin(t * e) + g * Math.cos(t * e))
                }
            } else if (1 === m)
                i = t=>o - Math.exp(-y * t) * (g + (p + y * g) * t);
            else {
                let t = y * Math.sqrt(m * m - 1);
                i = e=>{
                    let r = Math.exp(-m * y * e)
                      , n = Math.min(t * e, 300);
                    return o - r * ((p + m * y * g) * Math.sinh(n) + t * g * Math.cosh(n)) / t
                }
            }
            return {
                calculatedDuration: f && d || null,
                next: t=>{
                    let n = i(t);
                    if (f)
                        a.done = t >= d;
                    else {
                        let s = p;
                        0 !== t && (s = m < 1 ? eX(i, t, n) : 0);
                        let l = Math.abs(s) <= r
                          , u = Math.abs(o - n) <= e;
                        a.done = l && u
                    }
                    return a.value = a.done ? o : n,
                    a
                }
            }
        }
        function e3({keyframes: t, velocity: e=0, power: r=.8, timeConstant: n=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
            let h, d;
            let f = t[0]
              , p = {
                done: !1,
                value: f
            }
              , m = t=>void 0 !== a && t < a || void 0 !== l && t > l
              , g = t=>void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l
              , y = r * e
              , v = f + y
              , b = void 0 === o ? v : o(v);
            b !== v && (y = b - f);
            let x = t=>-y * Math.exp(-t / n)
              , P = t=>b + x(t)
              , w = t=>{
                let e = x(t)
                  , r = P(t);
                p.done = Math.abs(e) <= u,
                p.value = p.done ? b : r
            }
              , S = t=>{
                m(p.value) && (h = t,
                d = e2({
                    keyframes: [p.value, g(p.value)],
                    velocity: eX(P, t, p.value),
                    damping: i,
                    stiffness: s,
                    restDelta: u,
                    restSpeed: c
                }))
            }
            ;
            return S(0),
            {
                calculatedDuration: null,
                next: t=>{
                    let e = !1;
                    return (d || void 0 !== h || (e = !0,
                    w(t),
                    S(t)),
                    void 0 !== h && t > h) ? d.next(t - h) : (e || w(t),
                    p)
                }
            }
        }
        var e5 = r(651);
        let e6 = t=>{
            let e = ({timestamp: e})=>t(e);
            return {
                start: ()=>tz.Wi.update(e, !0),
                stop: ()=>(0,
                tz.Pn)(e),
                now: ()=>e5.frameData.isProcessing ? e5.frameData.timestamp : performance.now()
            }
        }
        ;
        function e4(t) {
            let e = 0
              , r = t.next(e);
            for (; !r.done && e < 2e4; )
                e += 50,
                r = t.next(e);
            return e >= 2e4 ? 1 / 0 : e
        }
        let e9 = {
            decay: e3,
            inertia: e3,
            tween: eK,
            keyframes: eK,
            spring: e2
        };
        function e8({autoplay: t=!0, delay: e=0, driver: r=e6, keyframes: n, type: i="keyframes", repeat: s=0, repeatDelay: o=0, repeatType: a="loop", onPlay: l, onStop: u, onComplete: c, onUpdate: h, ...d}) {
            let f, p, m, g, y, v = 1, b = !1, x = ()=>{
                p = new Promise(t=>{
                    f = t
                }
                )
            }
            ;
            x();
            let P = e9[i] || eK;
            P !== eK && "number" != typeof n[0] && (g = eY([0, 100], n, {
                clamp: !1
            }),
            n = [0, 100]);
            let w = P({
                ...d,
                keyframes: n
            });
            "mirror" === a && (y = P({
                ...d,
                keyframes: [...n].reverse(),
                velocity: -(d.velocity || 0)
            }));
            let S = "idle"
              , E = null
              , A = null
              , C = null;
            null === w.calculatedDuration && s && (w.calculatedDuration = e4(w));
            let {calculatedDuration: T} = w
              , j = 1 / 0
              , M = 1 / 0;
            null !== T && (M = (j = T + o) * (s + 1) - o);
            let k = 0
              , R = t=>{
                if (null === A)
                    return;
                v > 0 && (A = Math.min(A, t)),
                v < 0 && (A = Math.min(t - M / v, A)),
                k = null !== E ? E : Math.round(t - A) * v;
                let r = k - e * (v >= 0 ? 1 : -1)
                  , i = v >= 0 ? r < 0 : r > M;
                k = Math.max(r, 0),
                "finished" === S && null === E && (k = M);
                let l = k
                  , u = w;
                if (s) {
                    let t = k / j
                      , e = Math.floor(t)
                      , r = t % 1;
                    !r && t >= 1 && (r = 1),
                    1 === r && e--,
                    e = Math.min(e, s + 1);
                    let n = !!(e % 2);
                    n && ("reverse" === a ? (r = 1 - r,
                    o && (r -= o / j)) : "mirror" === a && (u = y));
                    let i = I(0, 1, r);
                    k > M && (i = "reverse" === a && n ? 1 : 0),
                    l = i * j
                }
                let c = i ? {
                    done: !1,
                    value: n[0]
                } : u.next(l);
                g && (c.value = g(c.value));
                let {done: d} = c;
                i || null === T || (d = v >= 0 ? k >= M : k <= 0);
                let f = null === E && ("finished" === S || "running" === S && d);
                return h && h(c.value),
                f && D(),
                c
            }
              , O = ()=>{
                m && m.stop(),
                m = void 0
            }
              , V = ()=>{
                S = "idle",
                O(),
                f(),
                x(),
                A = C = null
            }
              , D = ()=>{
                S = "finished",
                c && c(),
                O(),
                f()
            }
              , L = ()=>{
                if (b)
                    return;
                m || (m = r(R));
                let t = m.now();
                l && l(),
                null !== E ? A = t - E : A && "finished" !== S || (A = t),
                "finished" === S && x(),
                C = A,
                E = null,
                S = "running",
                m.start()
            }
            ;
            t && L();
            let _ = {
                then: (t,e)=>p.then(t, e),
                get time() {
                    return t5(k)
                },
                set time(newTime) {
                    k = newTime = t3(newTime),
                    null === E && m && 0 !== v ? A = m.now() - newTime / v : E = newTime
                },
                get duration() {
                    let t = null === w.calculatedDuration ? e4(w) : w.calculatedDuration;
                    return t5(t)
                },
                get speed() {
                    return v
                },
                set speed(newSpeed) {
                    if (newSpeed === v || !m)
                        return;
                    v = newSpeed,
                    _.time = t5(k)
                },
                get state() {
                    return S
                },
                play: L,
                pause: ()=>{
                    S = "paused",
                    E = k
                }
                ,
                stop: ()=>{
                    b = !0,
                    "idle" !== S && (S = "idle",
                    u && u(),
                    V())
                }
                ,
                cancel: ()=>{
                    null !== C && R(C),
                    V()
                }
                ,
                complete: ()=>{
                    S = "finished"
                }
                ,
                sample: t=>(A = 0,
                R(t))
            };
            return _
        }
        let e7 = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
          , rt = (t,e)=>"spring" === e.type || "backgroundColor" === t || !function t(e) {
            return !!(!e || "string" == typeof e && t8[e] || t4(e) || Array.isArray(e) && e.every(t))
        }(e.ease)
          , re = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , rr = t=>({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , rn = {
            type: "keyframes",
            duration: .8
        }
          , ri = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , rs = (t,{keyframes: e})=>e.length > 2 ? rn : j.has(t) ? t.startsWith("scale") ? rr(e[1]) : re : ri
          , ro = (t,e)=>"zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (eN.test(e) || "0" === e) && !e.startsWith("url("))
          , ra = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function rl(t) {
            let[e,r] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[n] = r.match(W) || [];
            if (!n)
                return t;
            let i = r.replace(n, "")
              , s = ra.has(e) ? 1 : 0;
            return n !== r && (s *= 100),
            e + "(" + s + i + ")"
        }
        let ru = /([a-z-]*)\(.*?\)/g
          , rc = {
            ...eN,
            getAnimatableNone: t=>{
                let e = t.match(ru);
                return e ? e.map(rl).join(" ") : t
            }
        }
          , rh = {
            ...tt,
            color: eA,
            backgroundColor: eA,
            outlineColor: eA,
            fill: eA,
            stroke: eA,
            borderColor: eA,
            borderTopColor: eA,
            borderRightColor: eA,
            borderBottomColor: eA,
            borderLeftColor: eA,
            filter: rc,
            WebkitFilter: rc
        }
          , rd = t=>rh[t];
        function rf(t, e) {
            let r = rd(t);
            return r !== rc && (r = eN),
            r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
        }
        let rp = t=>/^0[^.\s]+$/.test(t);
        function rm(t, e) {
            return t[e] || t.default || t
        }
        let rg = (t,e,r,n={})=>i=>{
            let s = rm(n, t) || {}
              , o = s.delay || n.delay || 0
              , {elapsed: a=0} = n;
            a -= t3(o);
            let l = function(t, e, r, n) {
                let i, s;
                let o = ro(e, r);
                i = Array.isArray(r) ? [...r] : [null, r];
                let a = void 0 !== n.from ? n.from : t.get()
                  , l = [];
                for (let t = 0; t < i.length; t++) {
                    var u;
                    null === i[t] && (i[t] = 0 === t ? a : i[t - 1]),
                    ("number" == typeof (u = i[t]) ? 0 === u : null !== u ? "none" === u || "0" === u || rp(u) : void 0) && l.push(t),
                    "string" == typeof i[t] && "none" !== i[t] && "0" !== i[t] && (s = i[t])
                }
                if (o && l.length && s)
                    for (let t = 0; t < l.length; t++) {
                        let r = l[t];
                        i[r] = rf(e, s)
                    }
                return i
            }(e, t, r, s)
              , u = l[0]
              , c = l[l.length - 1]
              , h = ro(t, u)
              , d = ro(t, c);
            (0,
            t2.K)(h === d, `You are trying to animate ${t} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
            let f = {
                keyframes: l,
                velocity: e.getVelocity(),
                ease: "easeOut",
                ...s,
                delay: -a,
                onUpdate: t=>{
                    e.set(t),
                    s.onUpdate && s.onUpdate(t)
                }
                ,
                onComplete: ()=>{
                    i(),
                    s.onComplete && s.onComplete()
                }
            };
            if (!function({when: t, delay: e, delayChildren: r, staggerChildren: n, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c}) {
                return !!Object.keys(c).length
            }(s) && (f = {
                ...f,
                ...rs(t, f)
            }),
            f.duration && (f.duration = t3(f.duration)),
            f.repeatDelay && (f.repeatDelay = t3(f.repeatDelay)),
            !h || !d || t6.current || !1 === s.type)
                return function({keyframes: t, delay: e, onUpdate: r, onComplete: n}) {
                    let i = ()=>(r && r(t[t.length - 1]),
                    n && n(),
                    {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: tZ.Z,
                        pause: tZ.Z,
                        stop: tZ.Z,
                        then: t=>(t(),
                        Promise.resolve()),
                        cancel: tZ.Z,
                        complete: tZ.Z
                    });
                    return e ? e8({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: e,
                        onComplete: i
                    }) : i()
                }(t6.current ? {
                    ...f,
                    delay: 0
                } : f);
            if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                let r = function(t, e, {onUpdate: r, onComplete: n, ...i}) {
                    let s, o;
                    let a = ee.waapi() && e7.has(e) && !i.repeatDelay && "mirror" !== i.repeatType && 0 !== i.damping && "inertia" !== i.type;
                    if (!a)
                        return !1;
                    let l = !1
                      , u = ()=>{
                        o = new Promise(t=>{
                            s = t
                        }
                        )
                    }
                    ;
                    u();
                    let {keyframes: c, duration: h=300, ease: d, times: f} = i;
                    if (rt(e, i)) {
                        let t = e8({
                            ...i,
                            repeat: 0,
                            delay: 0
                        })
                          , e = {
                            done: !1,
                            value: c[0]
                        }
                          , r = []
                          , n = 0;
                        for (; !e.done && n < 2e4; )
                            r.push((e = t.sample(n)).value),
                            n += 10;
                        f = void 0,
                        c = r,
                        h = n - 10,
                        d = "linear"
                    }
                    let p = function(t, e, r, {delay: n=0, duration: i, repeat: s=0, repeatType: o="loop", ease: a, times: l}={}) {
                        let u = {
                            [e]: r
                        };
                        l && (u.offset = l);
                        let c = function t(e) {
                            if (e)
                                return t4(e) ? t9(e) : Array.isArray(e) ? e.map(t) : t8[e]
                        }(a);
                        return Array.isArray(c) && (u.easing = c),
                        t.animate(u, {
                            delay: n,
                            duration: i,
                            easing: Array.isArray(c) ? "linear" : c,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === o ? "alternate" : "normal"
                        })
                    }(t.owner.current, e, c, {
                        ...i,
                        duration: h,
                        ease: d,
                        times: f
                    })
                      , m = ()=>p.cancel()
                      , g = ()=>{
                        tz.Wi.update(m),
                        s(),
                        u()
                    }
                    ;
                    return p.onfinish = ()=>{
                        t.set(function(t, {repeat: e, repeatType: r="loop"}) {
                            let n = e && "loop" !== r && e % 2 == 1 ? 0 : t.length - 1;
                            return t[n]
                        }(c, i)),
                        n && n(),
                        g()
                    }
                    ,
                    {
                        then: (t,e)=>o.then(t, e),
                        get time() {
                            return t5(p.currentTime || 0)
                        },
                        set time(newTime) {
                            p.currentTime = t3(newTime)
                        },
                        get speed() {
                            return p.playbackRate
                        },
                        set speed(newSpeed) {
                            p.playbackRate = newSpeed
                        },
                        get duration() {
                            return t5(h)
                        },
                        play: ()=>{
                            l || (p.play(),
                            (0,
                            tz.Pn)(m))
                        }
                        ,
                        pause: ()=>p.pause(),
                        stop: ()=>{
                            if (l = !0,
                            "idle" === p.playState)
                                return;
                            let {currentTime: e} = p;
                            if (e) {
                                let r = e8({
                                    ...i,
                                    autoplay: !1
                                });
                                t.setWithVelocity(r.sample(e - 10).value, r.sample(e).value, 10)
                            }
                            g()
                        }
                        ,
                        complete: ()=>p.finish(),
                        cancel: g
                    }
                }(e, t, f);
                if (r)
                    return r
            }
            return e8(f)
        }
        ;
        function ry(t) {
            return !!(k(t) && t.add)
        }
        let rv = t=>/^\-?\d*\.?\d+$/.test(t);
        function rb(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function rx(t, e) {
            let r = t.indexOf(e);
            r > -1 && t.splice(r, 1)
        }
        class rP {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return rb(this.subscriptions, t),
                ()=>rx(this.subscriptions, t)
            }
            notify(t, e, r) {
                let n = this.subscriptions.length;
                if (n) {
                    if (1 === n)
                        this.subscriptions[0](t, e, r);
                    else
                        for (let i = 0; i < n; i++) {
                            let n = this.subscriptions[i];
                            n && n(t, e, r)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
        let rw = t=>!isNaN(parseFloat(t));
        class rS {
            constructor(t, e={}) {
                this.version = "10.12.21",
                this.timeDelta = 0,
                this.lastUpdated = 0,
                this.canTrackVelocity = !1,
                this.events = {},
                this.updateAndNotify = (t,e=!0)=>{
                    this.prev = this.current,
                    this.current = t;
                    let {delta: r, timestamp: n} = e5.frameData;
                    this.lastUpdated !== n && (this.timeDelta = r,
                    this.lastUpdated = n,
                    tz.Wi.postRender(this.scheduleVelocityCheck)),
                    this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.scheduleVelocityCheck = ()=>tz.Wi.postRender(this.velocityCheck),
                this.velocityCheck = ({timestamp: t})=>{
                    t !== this.lastUpdated && (this.prev = this.current,
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                }
                ,
                this.hasAnimated = !1,
                this.prev = this.current = t,
                this.canTrackVelocity = rw(this.current),
                this.owner = e.owner
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new rP);
                let r = this.events[t].add(e);
                return "change" === t ? ()=>{
                    r(),
                    tz.Wi.read(()=>{
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : r
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, r) {
                this.set(e),
                this.prev = t,
                this.timeDelta = r
            }
            jump(t) {
                this.updateAndNotify(t),
                this.prev = t,
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                var t, e;
                return this.canTrackVelocity ? (t = parseFloat(this.current) - parseFloat(this.prev),
                (e = this.timeDelta) ? t * (1e3 / e) : 0) : 0
            }
            start(t) {
                return this.stop(),
                new Promise(e=>{
                    this.hasAnimated = !0,
                    this.animation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then(()=>{
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function rE(t, e) {
            return new rS(t,e)
        }
        let rA = t=>e=>e.test(t)
          , rC = [F, Y, G, q, X, K, {
            test: t=>"auto" === t,
            parse: t=>t
        }]
          , rT = t=>rC.find(rA(t))
          , rj = [...rC, eA, eN]
          , rM = t=>rj.find(rA(t));
        function rk(t, e, {delay: r=0, transitionOverride: n, type: i}={}) {
            let {transition: s=t.getDefaultTransition(), transitionEnd: o, ...a} = t.makeTargetAnimatable(e)
              , l = t.getValue("willChange");
            n && (s = n);
            let u = []
              , c = i && t.animationState && t.animationState.getState()[i];
            for (let e in a) {
                let n = t.getValue(e)
                  , i = a[e];
                if (!n || void 0 === i || c && function({protectedKeys: t, needsAnimating: e}, r) {
                    let n = t.hasOwnProperty(r) && !0 !== e[r];
                    return e[r] = !1,
                    n
                }(c, e))
                    continue;
                let o = {
                    delay: r,
                    elapsed: 0,
                    ...s
                };
                if (window.HandoffAppearAnimations && !n.hasAnimated) {
                    let r = t.getProps()[t1];
                    r && (o.elapsed = window.HandoffAppearAnimations(r, e, n, tz.Wi))
                }
                n.start(rg(e, n, i, t.shouldReduceMotion && j.has(e) ? {
                    type: !1
                } : o));
                let h = n.animation;
                ry(l) && (l.add(e),
                h.then(()=>l.remove(e))),
                u.push(h)
            }
            return o && Promise.all(u).then(()=>{
                o && function(t, e) {
                    let r = t0(t, e)
                      , {transitionEnd: n={}, transition: i={}, ...s} = r ? t.makeTargetAnimatable(r, !1) : {};
                    for (let e in s = {
                        ...s,
                        ...n
                    }) {
                        let r = tA(s[e]);
                        t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, rE(r))
                    }
                }(t, o)
            }
            ),
            u
        }
        function rR(t, e, r={}) {
            let n = t0(t, e, r.custom)
              , {transition: i=t.getDefaultTransition() || {}} = n || {};
            r.transitionOverride && (i = r.transitionOverride);
            let s = n ? ()=>Promise.all(rk(t, n, r)) : ()=>Promise.resolve()
              , o = t.variantChildren && t.variantChildren.size ? (n=0)=>{
                let {delayChildren: s=0, staggerChildren: o, staggerDirection: a} = i;
                return function(t, e, r=0, n=0, i=1, s) {
                    let o = []
                      , a = (t.variantChildren.size - 1) * n
                      , l = 1 === i ? (t=0)=>t * n : (t=0)=>a - t * n;
                    return Array.from(t.variantChildren).sort(rO).forEach((t,n)=>{
                        t.notify("AnimationStart", e),
                        o.push(rR(t, e, {
                            ...s,
                            delay: r + l(n)
                        }).then(()=>t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(o)
                }(t, e, s + n, o, a, r)
            }
            : ()=>Promise.resolve()
              , {when: a} = i;
            if (!a)
                return Promise.all([s(), o(r.delay)]);
            {
                let[t,e] = "beforeChildren" === a ? [s, o] : [o, s];
                return t().then(()=>e())
            }
        }
        function rO(t, e) {
            return t.sortNodePosition(e)
        }
        let rV = [...f].reverse()
          , rD = f.length;
        function rL(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        let r_ = 0
          , rI = (t,e)=>Math.abs(t - e);
        class rF {
            constructor(t, e, {transformPagePoint: r}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.updatePoint = ()=>{
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let t = rN(this.lastMoveEventInfo, this.history)
                      , e = null !== this.startEvent
                      , r = function(t, e) {
                        let r = rI(t.x, e.x)
                          , n = rI(t.y, e.y);
                        return Math.sqrt(r ** 2 + n ** 2)
                    }(t.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                    if (!e && !r)
                        return;
                    let {point: n} = t
                      , {timestamp: i} = e5.frameData;
                    this.history.push({
                        ...n,
                        timestamp: i
                    });
                    let {onStart: s, onMove: o} = this.handlers;
                    e || (s && s(this.lastMoveEvent, t),
                    this.startEvent = this.lastMoveEvent),
                    o && o(this.lastMoveEvent, t)
                }
                ,
                this.handlePointerMove = (t,e)=>{
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = rB(e, this.transformPagePoint),
                    tz.Wi.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t,e)=>{
                    if (this.end(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let {onEnd: r, onSessionEnd: n} = this.handlers
                      , i = rN("pointercancel" === t.type ? this.lastMoveEventInfo : rB(e, this.transformPagePoint), this.history);
                    this.startEvent && r && r(t, i),
                    n && n(t, i)
                }
                ,
                !tR(t))
                    return;
                this.handlers = e,
                this.transformPagePoint = r;
                let n = tO(t)
                  , i = rB(n, this.transformPagePoint)
                  , {point: s} = i
                  , {timestamp: o} = e5.frameData;
                this.history = [{
                    ...s,
                    timestamp: o
                }];
                let {onSessionStart: a} = e;
                a && a(t, rN(i, this.history)),
                this.removeListeners = t_(tD(window, "pointermove", this.handlePointerMove), tD(window, "pointerup", this.handlePointerUp), tD(window, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                (0,
                tz.Pn)(this.updatePoint)
            }
        }
        function rB(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function rU(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function rN({point: t}, e) {
            return {
                point: t,
                delta: rU(t, rW(e)),
                offset: rU(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let r = t.length - 1
                      , n = null
                      , i = rW(t);
                    for (; r >= 0 && (n = t[r],
                    !(i.timestamp - n.timestamp > t3(.1))); )
                        r--;
                    if (!n)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = t5(i.timestamp - n.timestamp);
                    if (0 === s)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = {
                        x: (i.x - n.x) / s,
                        y: (i.y - n.y) / s
                    };
                    return o.x === 1 / 0 && (o.x = 0),
                    o.y === 1 / 0 && (o.y = 0),
                    o
                }(e, 0)
            }
        }
        function rW(t) {
            return t[t.length - 1]
        }
        function rz(t) {
            return t.max - t.min
        }
        function r$(t, e=0, r=.01) {
            return Math.abs(t - e) <= r
        }
        function rH(t, e, r, n=.5) {
            t.origin = n,
            t.originPoint = eC(e.min, e.max, t.origin),
            t.scale = rz(r) / rz(e),
            (r$(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
            t.translate = eC(r.min, r.max, t.origin) - t.originPoint,
            (r$(t.translate) || isNaN(t.translate)) && (t.translate = 0)
        }
        function rZ(t, e, r, n) {
            rH(t.x, e.x, r.x, n ? n.originX : void 0),
            rH(t.y, e.y, r.y, n ? n.originY : void 0)
        }
        function rq(t, e, r) {
            t.min = r.min + e.min,
            t.max = t.min + rz(e)
        }
        function rG(t, e, r) {
            t.min = e.min - r.min,
            t.max = t.min + rz(e)
        }
        function rY(t, e, r) {
            rG(t.x, e.x, r.x),
            rG(t.y, e.y, r.y)
        }
        function rK(t, e, r) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0
            }
        }
        function rX(t, e) {
            let r = e.min - t.min
              , n = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([r,n] = [n, r]),
            {
                min: r,
                max: n
            }
        }
        function rJ(t, e, r) {
            return {
                min: rQ(t, e),
                max: rQ(t, r)
            }
        }
        function rQ(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let r0 = ()=>({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , r1 = ()=>({
            x: r0(),
            y: r0()
        })
          , r2 = ()=>({
            min: 0,
            max: 0
        })
          , r3 = ()=>({
            x: r2(),
            y: r2()
        });
        function r5(t) {
            return [t("x"), t("y")]
        }
        function r6({top: t, left: e, right: r, bottom: n}) {
            return {
                x: {
                    min: e,
                    max: r
                },
                y: {
                    min: t,
                    max: n
                }
            }
        }
        function r4(t) {
            return void 0 === t || 1 === t
        }
        function r9({scale: t, scaleX: e, scaleY: r}) {
            return !r4(t) || !r4(e) || !r4(r)
        }
        function r8(t) {
            return r9(t) || r7(t) || t.z || t.rotate || t.rotateX || t.rotateY
        }
        function r7(t) {
            var e, r;
            return (e = t.x) && "0%" !== e || (r = t.y) && "0%" !== r
        }
        function nt(t, e, r, n, i) {
            return void 0 !== i && (t = n + i * (t - n)),
            n + r * (t - n) + e
        }
        function ne(t, e=0, r=1, n, i) {
            t.min = nt(t.min, e, r, n, i),
            t.max = nt(t.max, e, r, n, i)
        }
        function nr(t, {x: e, y: r}) {
            ne(t.x, e.translate, e.scale, e.originPoint),
            ne(t.y, r.translate, r.scale, r.originPoint)
        }
        function nn(t) {
            return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
        }
        function ni(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function ns(t, e, [r,n,i]) {
            let s = void 0 !== e[i] ? e[i] : .5
              , o = eC(t.min, t.max, s);
            ne(t, e[r], e[n], o, e.scale)
        }
        let no = ["x", "scaleX", "originX"]
          , na = ["y", "scaleY", "originY"];
        function nl(t, e) {
            ns(t.x, e, no),
            ns(t.y, e, na)
        }
        function nu(t, e) {
            return r6(function(t, e) {
                if (!e)
                    return t;
                let r = e({
                    x: t.left,
                    y: t.top
                })
                  , n = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: r.y,
                    left: r.x,
                    bottom: n.y,
                    right: n.x
                }
            }(t.getBoundingClientRect(), e))
        }
        let nc = new WeakMap;
        class nh {
            constructor(t) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = r3(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                let {presenceContext: r} = this.visualElement;
                r && !1 === r.isPresent || (this.panSession = new rF(t,{
                    onSessionStart: t=>{
                        this.stopAnimation(),
                        e && this.snapToCursor(tO(t, "page").point)
                    }
                    ,
                    onStart: (t,e)=>{
                        let {drag: r, dragPropagation: n, onDragStart: i} = this.getProps();
                        if (r && !n && (this.openGlobalLock && this.openGlobalLock(),
                        this.openGlobalLock = tU(r),
                        !this.openGlobalLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        r5(t=>{
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (G.test(e)) {
                                let {projection: r} = this.visualElement;
                                if (r && r.layout) {
                                    let n = r.layout.layoutBox[t];
                                    if (n) {
                                        let t = rz(n);
                                        e = t * (parseFloat(e) / 100)
                                    }
                                }
                            }
                            this.originPoint[t] = e
                        }
                        ),
                        i && tz.Wi.update(()=>i(t, e), !1, !0);
                        let {animationState: s} = this.visualElement;
                        s && s.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t,e)=>{
                        let {dragPropagation: r, dragDirectionLock: n, onDirectionLock: i, onDrag: s} = this.getProps();
                        if (!r && !this.openGlobalLock)
                            return;
                        let {offset: o} = e;
                        if (n && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let r = null;
                                return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"),
                                r
                            }(o),
                            null !== this.currentDirection && i && i(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, o),
                        this.updateAxis("y", e.point, o),
                        this.visualElement.render(),
                        s && s(t, e)
                    }
                    ,
                    onSessionEnd: (t,e)=>this.stop(t, e)
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint()
                }))
            }
            stop(t, e) {
                let r = this.isDragging;
                if (this.cancel(),
                !r)
                    return;
                let {velocity: n} = e;
                this.startAnimation(n);
                let {onDragEnd: i} = this.getProps();
                i && tz.Wi.update(()=>i(t, e))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: r} = this.getProps();
                !r && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, r) {
                let {drag: n} = this.getProps();
                if (!r || !nd(t, n, this.currentDirection))
                    return;
                let i = this.getAxisMotionValue(t)
                  , s = this.originPoint[t] + r[t];
                this.constraints && this.constraints[t] && (s = function(t, {min: e, max: r}, n) {
                    return void 0 !== e && t < e ? t = n ? eC(e, t, n.min) : Math.max(t, e) : void 0 !== r && t > r && (t = n ? eC(r, t, n.max) : Math.min(t, r)),
                    t
                }(s, this.constraints[t], this.elastic[t])),
                i.set(s)
            }
            resolveConstraints() {
                let {dragConstraints: t, dragElastic: e} = this.getProps()
                  , {layout: r} = this.visualElement.projection || {}
                  , n = this.constraints;
                t && c(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = function(t, {top: e, left: r, bottom: n, right: i}) {
                    return {
                        x: rK(t.x, r, i),
                        y: rK(t.y, e, n)
                    }
                }(r.layoutBox, t) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: rJ(t, "left", "right"),
                        y: rJ(t, "top", "bottom")
                    }
                }(e),
                n !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && r5(t=>{
                    this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let r = {};
                        return void 0 !== e.min && (r.min = e.min - t.min),
                        void 0 !== e.max && (r.max = e.max - t.min),
                        r
                    }(r.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: r} = this.getProps();
                if (!e || !c(e))
                    return !1;
                let n = e.current;
                (0,
                t2.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: i} = this.visualElement;
                if (!i || !i.layout)
                    return !1;
                let s = function(t, e, r) {
                    let n = nu(t, r)
                      , {scroll: i} = e;
                    return i && (ni(n.x, i.offset.x),
                    ni(n.y, i.offset.y)),
                    n
                }(n, i.root, this.visualElement.getTransformPagePoint())
                  , o = {
                    x: rX((t = i.layout.layoutBox).x, s.x),
                    y: rX(t.y, s.y)
                };
                if (r) {
                    let t = r(function({x: t, y: e}) {
                        return {
                            top: e.min,
                            right: t.max,
                            bottom: e.max,
                            left: t.min
                        }
                    }(o));
                    this.hasMutatedConstraints = !!t,
                    t && (o = r6(t))
                }
                return o
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: r, dragElastic: n, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: o} = this.getProps()
                  , a = this.constraints || {}
                  , l = r5(o=>{
                    if (!nd(o, e, this.currentDirection))
                        return;
                    let l = a && a[o] || {};
                    s && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: r ? t[o] : 0,
                        bounceStiffness: n ? 200 : 1e6,
                        bounceDamping: n ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...i,
                        ...l
                    };
                    return this.startAxisValueAnimation(o, u)
                }
                );
                return Promise.all(l).then(o)
            }
            startAxisValueAnimation(t, e) {
                let r = this.getAxisMotionValue(t);
                return r.start(rg(t, r, 0, e))
            }
            stopAnimation() {
                r5(t=>this.getAxisMotionValue(t).stop())
            }
            getAxisMotionValue(t) {
                let e = "_drag" + t.toUpperCase()
                  , r = this.visualElement.getProps()
                  , n = r[e];
                return n || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                r5(e=>{
                    let {drag: r} = this.getProps();
                    if (!nd(e, r, this.currentDirection))
                        return;
                    let {projection: n} = this.visualElement
                      , i = this.getAxisMotionValue(e);
                    if (n && n.layout) {
                        let {min: r, max: s} = n.layout.layoutBox[e];
                        i.set(t[e] - eC(r, s, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: r} = this.visualElement;
                if (!c(e) || !r || !this.constraints)
                    return;
                this.stopAnimation();
                let n = {
                    x: 0,
                    y: 0
                };
                r5(t=>{
                    let e = this.getAxisMotionValue(t);
                    if (e) {
                        let r = e.get();
                        n[t] = function(t, e) {
                            let r = .5
                              , n = rz(t)
                              , i = rz(e);
                            return i > n ? r = eq(e.min, e.max - n, t.min) : n > i && (r = eq(t.min, t.max - i, e.min)),
                            I(0, 1, r)
                        }({
                            min: r,
                            max: r
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: i} = this.visualElement.getProps();
                this.visualElement.current.style.transform = i ? i({}, "") : "none",
                r.root && r.root.updateScroll(),
                r.updateLayout(),
                this.resolveConstraints(),
                r5(e=>{
                    if (!nd(e, t, null))
                        return;
                    let r = this.getAxisMotionValue(e)
                      , {min: i, max: s} = this.constraints[e];
                    r.set(eC(i, s, n[e]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                nc.set(this.visualElement, this);
                let t = this.visualElement.current
                  , e = tD(t, "pointerdown", t=>{
                    let {drag: e, dragListener: r=!0} = this.getProps();
                    e && r && this.start(t)
                }
                )
                  , r = ()=>{
                    let {dragConstraints: t} = this.getProps();
                    c(t) && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: n} = this.visualElement
                  , i = n.addEventListener("measure", r);
                n && !n.layout && (n.root && n.root.updateScroll(),
                n.updateLayout()),
                r();
                let s = tk(window, "resize", ()=>this.scalePositionWithinConstraints())
                  , o = n.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e})=>{
                    this.isDragging && e && (r5(e=>{
                        let r = this.getAxisMotionValue(e);
                        r && (this.originPoint[e] += t[e].translate,
                        r.set(r.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return ()=>{
                    s(),
                    e(),
                    i(),
                    o && o()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: r=!1, dragPropagation: n=!1, dragConstraints: i=!1, dragElastic: s=.35, dragMomentum: o=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: r,
                    dragPropagation: n,
                    dragConstraints: i,
                    dragElastic: s,
                    dragMomentum: o
                }
            }
        }
        function nd(t, e, r) {
            return (!0 === e || e === t) && (null === r || r === t)
        }
        let nf = t=>(e,r)=>{
            t && tz.Wi.update(()=>t(e, r))
        }
          , np = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function nm(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let ng = {
            correct: (t,e)=>{
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!Y.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let r = nm(t, e.target.x)
                  , n = nm(t, e.target.y);
                return `${r}% ${n}%`
            }
        };
        class ny extends i.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: r, layoutId: n} = this.props
                  , {projection: i} = t;
                Object.assign(C, nb),
                i && (e.group && e.group.add(i),
                r && r.register && n && r.register(i),
                i.root.didUpdate(),
                i.addEventListener("animationComplete", ()=>{
                    this.safeToRemove()
                }
                ),
                i.setOptions({
                    ...i.options,
                    onExitComplete: ()=>this.safeToRemove()
                })),
                np.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: r, drag: n, isPresent: i} = this.props
                  , s = r.projection;
                return s && (s.isPresent = i,
                n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(),
                t.isPresent === i || (i ? s.promote() : s.relegate() || tz.Wi.postRender(()=>{
                    let t = s.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                queueMicrotask(()=>{
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: r} = this.props
                  , {projection: n} = t;
                n && (n.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(n),
                r && r.deregister && r.deregister(n))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function nv(t) {
            let[e,r] = function() {
                let t = (0,
                i.useContext)(a.O);
                if (null === t)
                    return [!0, null];
                let {isPresent: e, onExitComplete: r, register: n} = t
                  , s = (0,
                i.useId)();
                return (0,
                i.useEffect)(()=>n(s), []),
                !e && r ? [!1, ()=>r && r(s)] : [!0]
            }()
              , n = (0,
            i.useContext)(P.p);
            return i.createElement(ny, {
                ...t,
                layoutGroup: n,
                switchLayoutGroup: (0,
                i.useContext)(w),
                isPresent: e,
                safeToRemove: r
            })
        }
        let nb = {
            borderRadius: {
                ...ng,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: ng,
            borderTopRightRadius: ng,
            borderBottomLeftRadius: ng,
            borderBottomRightRadius: ng,
            boxShadow: {
                correct: (t,{treeScale: e, projectionDelta: r})=>{
                    let n = eN.parse(t);
                    if (n.length > 5)
                        return t;
                    let i = eN.createTransformer(t)
                      , s = "number" != typeof n[0] ? 1 : 0
                      , o = r.x.scale * e.x
                      , a = r.y.scale * e.y;
                    n[0 + s] /= o,
                    n[1 + s] /= a;
                    let l = eC(o, a, .5);
                    return "number" == typeof n[2 + s] && (n[2 + s] /= l),
                    "number" == typeof n[3 + s] && (n[3 + s] /= l),
                    i(n)
                }
            }
        }
          , nx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , nP = nx.length
          , nw = t=>"string" == typeof t ? parseFloat(t) : t
          , nS = t=>"number" == typeof t || Y.test(t);
        function nE(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let nA = nT(0, .5, eh)
          , nC = nT(.5, .95, tZ.Z);
        function nT(t, e, r) {
            return n=>n < t ? 0 : n > e ? 1 : r(eq(t, e, n))
        }
        function nj(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function nM(t, e) {
            nj(t.x, e.x),
            nj(t.y, e.y)
        }
        function nk(t, e, r, n, i) {
            return t -= e,
            t = n + 1 / r * (t - n),
            void 0 !== i && (t = n + 1 / i * (t - n)),
            t
        }
        function nR(t, e, [r,n,i], s, o) {
            !function(t, e=0, r=1, n=.5, i, s=t, o=t) {
                if (G.test(e)) {
                    e = parseFloat(e);
                    let t = eC(o.min, o.max, e / 100);
                    e = t - o.min
                }
                if ("number" != typeof e)
                    return;
                let a = eC(s.min, s.max, n);
                t === s && (a -= e),
                t.min = nk(t.min, e, r, a, i),
                t.max = nk(t.max, e, r, a, i)
            }(t, e[r], e[n], e[i], e.scale, s, o)
        }
        let nO = ["x", "scaleX", "originX"]
          , nV = ["y", "scaleY", "originY"];
        function nD(t, e, r, n) {
            nR(t.x, e, nO, r ? r.x : void 0, n ? n.x : void 0),
            nR(t.y, e, nV, r ? r.y : void 0, n ? n.y : void 0)
        }
        function nL(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function n_(t) {
            return nL(t.x) && nL(t.y)
        }
        function nI(t, e) {
            return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
        }
        function nF(t) {
            return rz(t.x) / rz(t.y)
        }
        class nB {
            constructor() {
                this.members = []
            }
            add(t) {
                rb(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if (rx(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let r = this.members.findIndex(e=>t === e);
                if (0 === r)
                    return !1;
                for (let t = r; t >= 0; t--) {
                    let r = this.members[t];
                    if (!1 !== r.isPresent) {
                        e = r;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                let r = this.lead;
                if (t !== r && (this.prevLead = r,
                this.lead = t,
                t.show(),
                r)) {
                    r.instance && r.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = r,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    r.snapshot && (t.snapshot = r.snapshot,
                    t.snapshot.latestValues = r.animationValues || r.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: n} = t.options;
                    !1 === n && r.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t=>{
                    let {options: e, resumingFrom: r} = t;
                    e.onExitComplete && e.onExitComplete(),
                    r && r.options.onExitComplete && r.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t=>{
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        function nU(t, e, r) {
            let n = ""
              , i = t.x.translate / e.x
              , s = t.y.translate / e.y;
            if ((i || s) && (n = `translate3d(${i}px, ${s}px, 0) `),
            (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
            r) {
                let {rotate: t, rotateX: e, rotateY: i} = r;
                t && (n += `rotate(${t}deg) `),
                e && (n += `rotateX(${e}deg) `),
                i && (n += `rotateY(${i}deg) `)
            }
            let o = t.x.scale * e.x
              , a = t.y.scale * e.y;
            return (1 !== o || 1 !== a) && (n += `scale(${o}, ${a})`),
            n || "none"
        }
        let nN = (t,e)=>t.depth - e.depth;
        class nW {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                rb(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                rx(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(nN),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        let nz = ["", "X", "Y", "Z"]
          , n$ = 0
          , nH = {
            type: "projectionFrame",
            totalNodes: 0,
            resolvedTargetDeltas: 0,
            recalculatedProjection: 0
        };
        function nZ({attachResizeListener: t, defaultParent: e, measureScroll: r, checkIsScrollRoot: n, resetTransform: i}) {
            return class {
                constructor(t={}, r=null == e ? void 0 : e()) {
                    this.id = n$++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.checkUpdateFailed = ()=>{
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = ()=>{
                        nH.totalNodes = nH.resolvedTargetDeltas = nH.recalculatedProjection = 0,
                        this.nodes.forEach(nY),
                        this.nodes.forEach(n2),
                        this.nodes.forEach(n3),
                        this.nodes.forEach(nK),
                        window.MotionDebug && window.MotionDebug.record(nH)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = r ? r.root || r : this,
                    this.path = r ? [...r.path, r] : [],
                    this.parent = r,
                    this.depth = r ? r.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new nW)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new rP),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let r = this.eventHandlers.get(t);
                    r && r.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e, r=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                    this.instance = e;
                    let {layoutId: n, layout: i, visualElement: s} = this.options;
                    if (s && !s.current && s.mount(e),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    r && (i || n) && (this.isLayoutDirty = !0),
                    t) {
                        let r;
                        let n = ()=>this.root.updateBlockedByResize = !1;
                        t(e, ()=>{
                            this.root.updateBlockedByResize = !0,
                            r && r(),
                            r = function(t, e) {
                                let r = performance.now()
                                  , n = ({timestamp: i})=>{
                                    let s = i - r;
                                    s >= e && ((0,
                                    tz.Pn)(n),
                                    t(s - e))
                                }
                                ;
                                return tz.Wi.read(n, !0),
                                ()=>(0,
                                tz.Pn)(n)
                            }(n, 250),
                            np.hasAnimatedSinceResize && (np.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(n1))
                        }
                        )
                    }
                    n && this.root.registerSharedNode(n, this),
                    !1 !== this.options.animate && s && (n || i) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: r, layout: n})=>{
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let i = this.options.transition || s.getDefaultTransition() || n7
                          , {onLayoutAnimationStart: o, onLayoutAnimationComplete: a} = s.getProps()
                          , l = !this.targetLayout || !nI(this.targetLayout, n) || r
                          , u = !e && r;
                        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, u);
                            let e = {
                                ...rm(i, "layout"),
                                onPlay: o,
                                onComplete: a
                            };
                            (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || n1(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = n
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    (0,
                    tz.Pn)(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(n5),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot"),
                        e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: r} = this.options;
                    if (void 0 === e && !r)
                        return;
                    let n = this.getTransformTemplate();
                    this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    this.updateScheduled = !1;
                    let t = this.isUpdateBlocked();
                    if (t) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(nJ);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(nQ),
                    this.isUpdating = !1,
                    this.nodes.forEach(n0),
                    this.nodes.forEach(nq),
                    this.nodes.forEach(nG),
                    this.clearAllSnapshots();
                    let e = performance.now();
                    e5.frameData.delta = I(0, 1e3 / 60, e - e5.frameData.timestamp),
                    e5.frameData.timestamp = e,
                    e5.frameData.isProcessing = !0,
                    tz.S6.update.process(e5.frameData),
                    tz.S6.preRender.process(e5.frameData),
                    tz.S6.render.process(e5.frameData),
                    e5.frameData.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    queueMicrotask(()=>this.update()))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(nX),
                    this.sharedNodes.forEach(n6)
                }
                scheduleUpdateProjection() {
                    tz.Wi.preRender(this.updateProjection, !1, !0)
                }
                scheduleCheckAfterUnmount() {
                    tz.Wi.postRender(()=>{
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.updateScroll()
                        }
                    let t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = r3(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e && (this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: n(this.instance),
                        offset: r(this.instance)
                    })
                }
                resetTransform() {
                    if (!i)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform
                      , e = this.projectionDelta && !n_(this.projectionDelta)
                      , r = this.getTransformTemplate()
                      , n = r ? r(this.latestValues, "") : void 0
                      , s = n !== this.prevTransformTemplateValue;
                    t && (e || r8(this.latestValues) || s) && (i(this.instance, n),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let r = this.measurePageBox()
                      , n = this.removeElementScroll(r);
                    return t && (n = this.removeTransform(n)),
                    it((e = n).x),
                    it(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: r,
                        layoutBox: n,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return r3();
                    let e = t.measureViewportBox()
                      , {scroll: r} = this.root;
                    return r && (ni(e.x, r.offset.x),
                    ni(e.y, r.offset.y)),
                    e
                }
                removeElementScroll(t) {
                    let e = r3();
                    nM(e, t);
                    for (let r = 0; r < this.path.length; r++) {
                        let n = this.path[r]
                          , {scroll: i, options: s} = n;
                        if (n !== this.root && i && s.layoutScroll) {
                            if (i.isRoot) {
                                nM(e, t);
                                let {scroll: r} = this.root;
                                r && (ni(e.x, -r.offset.x),
                                ni(e.y, -r.offset.y))
                            }
                            ni(e.x, i.offset.x),
                            ni(e.y, i.offset.y)
                        }
                    }
                    return e
                }
                applyTransform(t, e=!1) {
                    let r = r3();
                    nM(r, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        !e && n.options.layoutScroll && n.scroll && n !== n.root && nl(r, {
                            x: -n.scroll.offset.x,
                            y: -n.scroll.offset.y
                        }),
                        r8(n.latestValues) && nl(r, n.latestValues)
                    }
                    return r8(this.latestValues) && nl(r, this.latestValues),
                    r
                }
                removeTransform(t) {
                    let e = r3();
                    nM(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let r = this.path[t];
                        if (!r.instance || !r8(r.latestValues))
                            continue;
                        r9(r.latestValues) && r.updateSnapshot();
                        let n = r3()
                          , i = r.measurePageBox();
                        nM(n, i),
                        nD(e, r.latestValues, r.snapshot ? r.snapshot.layoutBox : void 0, n)
                    }
                    return r8(this.latestValues) && nD(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== e5.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t=!1) {
                    var e, r, n, i;
                    let s = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                    let o = !!this.resumingFrom || this !== s
                      , a = !(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                    if (a)
                        return;
                    let {layout: l, layoutId: u} = this.options;
                    if (this.layout && (l || u)) {
                        if (this.resolvedRelativeTargetAt = e5.frameData.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = r3(),
                            this.relativeTargetOrigin = r3(),
                            rY(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            nM(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = r3(),
                            this.targetWithTransforms = r3()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            r = this.target,
                            n = this.relativeTarget,
                            i = this.relativeParent.target,
                            rq(r.x, n.x, i.x),
                            rq(r.y, n.y, i.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nM(this.target, this.layout.layoutBox),
                            nr(this.target, this.targetDelta)) : nM(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = r3(),
                                this.relativeTargetOrigin = r3(),
                                rY(this.relativeTargetOrigin, this.target, t.target),
                                nM(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            nH.resolvedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || r9(this.parent.latestValues) || r7(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    let e = this.getLead()
                      , r = !!this.resumingFrom || this !== e
                      , n = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1),
                    r && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
                    this.resolvedRelativeTargetAt === e5.frameData.timestamp && (n = !1),
                    n)
                        return;
                    let {layout: i, layoutId: s} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(i || s))
                        return;
                    nM(this.layoutCorrected, this.layout.layoutBox);
                    let o = this.treeScale.x
                      , a = this.treeScale.y;
                    !function(t, e, r, n=!1) {
                        let i, s;
                        let o = r.length;
                        if (o) {
                            e.x = e.y = 1;
                            for (let a = 0; a < o; a++) {
                                s = (i = r[a]).projectionDelta;
                                let o = i.instance;
                                (!o || !o.style || "contents" !== o.style.display) && (n && i.options.layoutScroll && i.scroll && i !== i.root && nl(t, {
                                    x: -i.scroll.offset.x,
                                    y: -i.scroll.offset.y
                                }),
                                s && (e.x *= s.x.scale,
                                e.y *= s.y.scale,
                                nr(t, s)),
                                n && r8(i.latestValues) && nl(t, i.latestValues))
                            }
                            e.x = nn(e.x),
                            e.y = nn(e.y)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, r),
                    e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                    let {target: l} = e;
                    if (!l) {
                        this.projectionTransform && (this.projectionDelta = r1(),
                        this.projectionTransform = "none",
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta || (this.projectionDelta = r1(),
                    this.projectionDeltaWithTransform = r1());
                    let u = this.projectionTransform;
                    rZ(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.projectionTransform = nU(this.projectionDelta, this.treeScale),
                    (this.projectionTransform !== u || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    nH.recalculatedProjection++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    if (this.options.scheduleRender && this.options.scheduleRender(),
                    t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                setAnimationOrigin(t, e=!1) {
                    let r;
                    let n = this.snapshot
                      , i = n ? n.latestValues : {}
                      , s = {
                        ...this.latestValues
                    }
                      , o = r1();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !e;
                    let a = r3()
                      , l = n ? n.source : void 0
                      , u = this.layout ? this.layout.source : void 0
                      , c = l !== u
                      , h = this.getStack()
                      , d = !h || h.members.length <= 1
                      , f = !!(c && !d && !0 === this.options.crossfade && !this.path.some(n8));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e=>{
                        var n, l;
                        let u = e / 1e3;
                        n4(o.x, t.x, u),
                        n4(o.y, t.y, u),
                        this.setTargetDelta(o),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (rY(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                        n = this.relativeTarget,
                        l = this.relativeTargetOrigin,
                        n9(n.x, l.x, a.x, u),
                        n9(n.y, l.y, a.y, u),
                        r && nI(this.relativeTarget, r) && (this.isProjectionDirty = !1),
                        r || (r = r3()),
                        nM(r, this.relativeTarget)),
                        c && (this.animationValues = s,
                        function(t, e, r, n, i, s) {
                            i ? (t.opacity = eC(0, void 0 !== r.opacity ? r.opacity : 1, nA(n)),
                            t.opacityExit = eC(void 0 !== e.opacity ? e.opacity : 1, 0, nC(n))) : s && (t.opacity = eC(void 0 !== e.opacity ? e.opacity : 1, void 0 !== r.opacity ? r.opacity : 1, n));
                            for (let i = 0; i < nP; i++) {
                                let s = `border${nx[i]}Radius`
                                  , o = nE(e, s)
                                  , a = nE(r, s);
                                if (void 0 === o && void 0 === a)
                                    continue;
                                o || (o = 0),
                                a || (a = 0);
                                let l = 0 === o || 0 === a || nS(o) === nS(a);
                                l ? (t[s] = Math.max(eC(nw(o), nw(a), n), 0),
                                (G.test(a) || G.test(o)) && (t[s] += "%")) : t[s] = a
                            }
                            (e.rotate || r.rotate) && (t.rotate = eC(e.rotate || 0, r.rotate || 0, n))
                        }(s, i, this.latestValues, u, f, d)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = u
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && ((0,
                    tz.Pn)(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = tz.Wi.update(()=>{
                        np.hasAnimatedSinceResize = !0,
                        this.currentAnimation = function(t, e, r) {
                            let n = k(t) ? t : rE(t);
                            return n.start(rg("", n, 1e3, r)),
                            n.animation
                        }(0, 0, {
                            ...t,
                            onUpdate: e=>{
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onComplete: ()=>{
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: r, layout: n, latestValues: i} = t;
                    if (e && r && n) {
                        if (this !== t && this.layout && n && ie(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                            r = this.target || r3();
                            let e = rz(this.layout.layoutBox.x);
                            r.x.min = t.target.x.min,
                            r.x.max = r.x.min + e;
                            let n = rz(this.layout.layoutBox.y);
                            r.y.min = t.target.y.min,
                            r.y.max = r.y.min + n
                        }
                        nM(e, r),
                        nl(e, i),
                        rZ(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new nB);
                    let r = this.sharedNodes.get(t);
                    r.add(e);
                    let n = e.options.initialPromotionConfig;
                    e.promote({
                        transition: n ? n.transition : void 0,
                        preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: r}={}) {
                    let n = this.getStack();
                    n && n.promote(this, r),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: r} = t;
                    if ((r.rotate || r.rotateX || r.rotateY || r.rotateZ) && (e = !0),
                    !e)
                        return;
                    let n = {};
                    for (let e = 0; e < nz.length; e++) {
                        let i = "rotate" + nz[e];
                        r[i] && (n[i] = r[i],
                        t.setStaticValue(i, 0))
                    }
                    for (let e in t.render(),
                    n)
                        t.setStaticValue(e, n[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t={}) {
                    var e, r;
                    let n = {};
                    if (!this.instance || this.isSVG)
                        return n;
                    if (!this.isVisible)
                        return {
                            visibility: "hidden"
                        };
                    n.visibility = "";
                    let i = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        n.opacity = "",
                        n.pointerEvents = tC(t.pointerEvents) || "",
                        n.transform = i ? i(this.latestValues, "") : "none",
                        n;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = tC(t.pointerEvents) || ""),
                        this.hasProjected && !r8(this.latestValues) && (e.transform = i ? i({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let o = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(),
                    n.transform = nU(this.projectionDeltaWithTransform, this.treeScale, o),
                    i && (n.transform = i(o, n.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let t in n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
                    s.animationValues ? n.opacity = s === this ? null !== (r = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0,
                    C) {
                        if (void 0 === o[t])
                            continue;
                        let {correct: e, applyTo: r} = C[t]
                          , i = "none" === n.transform ? o[t] : e(o[t], s);
                        if (r) {
                            let t = r.length;
                            for (let e = 0; e < t; e++)
                                n[r[e]] = i
                        } else
                            n[t] = i
                    }
                    return this.options.layoutId && (n.pointerEvents = s === this ? tC(t.pointerEvents) || "" : "none"),
                    n
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t=>{
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(nJ),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function nq(t) {
            t.updateLayout()
        }
        function nG(t) {
            var e;
            let r = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: n} = t.layout
                  , {animationType: i} = t.options
                  , s = r.source !== t.layout.source;
                "size" === i ? r5(t=>{
                    let n = s ? r.measuredBox[t] : r.layoutBox[t]
                      , i = rz(n);
                    n.min = e[t].min,
                    n.max = n.min + i
                }
                ) : ie(i, r.layoutBox, e) && r5(n=>{
                    let i = s ? r.measuredBox[n] : r.layoutBox[n]
                      , o = rz(e[n]);
                    i.max = i.min + o,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                }
                );
                let o = r1();
                rZ(o, e, r.layoutBox);
                let a = r1();
                s ? rZ(a, t.applyTransform(n, !0), r.measuredBox) : rZ(a, e, r.layoutBox);
                let l = !n_(o)
                  , u = !1;
                if (!t.resumeFrom) {
                    let n = t.getClosestProjectingParent();
                    if (n && !n.resumeFrom) {
                        let {snapshot: i, layout: s} = n;
                        if (i && s) {
                            let o = r3();
                            rY(o, r.layoutBox, i.layoutBox);
                            let a = r3();
                            rY(a, e, s.layoutBox),
                            nI(o, a) || (u = !0),
                            n.options.layoutRoot && (t.relativeTarget = a,
                            t.relativeTargetOrigin = o,
                            t.relativeParent = n)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: r,
                    delta: a,
                    layoutDelta: o,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function nY(t) {
            nH.totalNodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function nK(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function nX(t) {
            t.clearSnapshot()
        }
        function nJ(t) {
            t.clearMeasurements()
        }
        function nQ(t) {
            t.isLayoutDirty = !1
        }
        function n0(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function n1(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function n2(t) {
            t.resolveTargetDelta()
        }
        function n3(t) {
            t.calcProjection()
        }
        function n5(t) {
            t.resetRotation()
        }
        function n6(t) {
            t.removeLeadSnapshot()
        }
        function n4(t, e, r) {
            t.translate = eC(e.translate, 0, r),
            t.scale = eC(e.scale, 1, r),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function n9(t, e, r, n) {
            t.min = eC(e.min, r.min, n),
            t.max = eC(e.max, r.max, n)
        }
        function n8(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let n7 = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        };
        function it(t) {
            t.min = Math.round(t.min),
            t.max = Math.round(t.max)
        }
        function ie(t, e, r) {
            return "position" === t || "preserve-aspect" === t && !r$(nF(e), nF(r), .2)
        }
        let ir = nZ({
            attachResizeListener: (t,e)=>tk(t, "resize", e),
            measureScroll: ()=>({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: ()=>!0
        })
          , ii = {
            current: void 0
        }
          , is = nZ({
            measureScroll: t=>({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: ()=>{
                if (!ii.current) {
                    let t = new ir({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    ii.current = t
                }
                return ii.current
            }
            ,
            resetTransform: (t,e)=>{
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t=>"fixed" === window.getComputedStyle(t).position
        })
          , io = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
        function ia(t, e, r=1) {
            (0,
            t2.k)(r <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
            let[n,i] = function(t) {
                let e = io.exec(t);
                if (!e)
                    return [, ];
                let[,r,n] = e;
                return [r, n]
            }(t);
            if (!n)
                return;
            let s = window.getComputedStyle(e).getPropertyValue(n);
            return s ? s.trim() : L(i) ? ia(i, e, r + 1) : i
        }
        let il = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
          , iu = t=>il.has(t)
          , ic = t=>Object.keys(t).some(iu)
          , ih = t=>t === F || t === Y
          , id = (t,e)=>parseFloat(t.split(", ")[e])
          , ip = (t,e)=>(r,{transform: n})=>{
            if ("none" === n || !n)
                return 0;
            let i = n.match(/^matrix3d\((.+)\)$/);
            if (i)
                return id(i[1], e);
            {
                let e = n.match(/^matrix\((.+)\)$/);
                return e ? id(e[1], t) : 0
            }
        }
          , im = new Set(["x", "y", "z"])
          , ig = T.filter(t=>!im.has(t))
          , iy = {
            width: ({x: t},{paddingLeft: e="0", paddingRight: r="0"})=>t.max - t.min - parseFloat(e) - parseFloat(r),
            height: ({y: t},{paddingTop: e="0", paddingBottom: r="0"})=>t.max - t.min - parseFloat(e) - parseFloat(r),
            top: (t,{top: e})=>parseFloat(e),
            left: (t,{left: e})=>parseFloat(e),
            bottom: ({y: t},{top: e})=>parseFloat(e) + (t.max - t.min),
            right: ({x: t},{left: e})=>parseFloat(e) + (t.max - t.min),
            x: ip(4, 13),
            y: ip(5, 14)
        };
        iy.translateX = iy.x,
        iy.translateY = iy.y;
        let iv = (t,e,r)=>{
            let n = e.measureViewportBox()
              , i = e.current
              , s = getComputedStyle(i)
              , {display: o} = s
              , a = {};
            "none" === o && e.setStaticValue("display", t.display || "block"),
            r.forEach(t=>{
                a[t] = iy[t](n, s)
            }
            ),
            e.render();
            let l = e.measureViewportBox();
            return r.forEach(r=>{
                let n = e.getValue(r);
                n && n.jump(a[r]),
                t[r] = iy[r](l, s)
            }
            ),
            t
        }
          , ib = (t,e,r={},n={})=>{
            e = {
                ...e
            },
            n = {
                ...n
            };
            let i = Object.keys(e).filter(iu)
              , s = []
              , o = !1
              , a = [];
            if (i.forEach(i=>{
                let l;
                let u = t.getValue(i);
                if (!t.hasValue(i))
                    return;
                let c = r[i]
                  , h = rT(c)
                  , d = e[i];
                if (tS(d)) {
                    let t = d.length
                      , e = null === d[0] ? 1 : 0;
                    h = rT(c = d[e]);
                    for (let r = e; r < t && null !== d[r]; r++)
                        l ? (0,
                        t2.k)(rT(d[r]) === l, "All keyframes must be of the same type") : (l = rT(d[r]),
                        (0,
                        t2.k)(l === h || ih(h) && ih(l), "Keyframes must be of the same dimension as the current value"))
                } else
                    l = rT(d);
                if (h !== l) {
                    if (ih(h) && ih(l)) {
                        let t = u.get();
                        "string" == typeof t && u.set(parseFloat(t)),
                        "string" == typeof d ? e[i] = parseFloat(d) : Array.isArray(d) && l === Y && (e[i] = d.map(parseFloat))
                    } else
                        (null == h ? void 0 : h.transform) && (null == l ? void 0 : l.transform) && (0 === c || 0 === d) ? 0 === c ? u.set(l.transform(c)) : e[i] = h.transform(d) : (o || (s = function(t) {
                            let e = [];
                            return ig.forEach(r=>{
                                let n = t.getValue(r);
                                void 0 !== n && (e.push([r, n.get()]),
                                n.set(r.startsWith("scale") ? 1 : 0))
                            }
                            ),
                            e.length && t.render(),
                            e
                        }(t),
                        o = !0),
                        a.push(i),
                        n[i] = void 0 !== n[i] ? n[i] : e[i],
                        u.jump(d))
                }
            }
            ),
            !a.length)
                return {
                    target: e,
                    transitionEnd: n
                };
            {
                let r = a.indexOf("height") >= 0 ? window.pageYOffset : null
                  , i = iv(e, t, a);
                return s.length && s.forEach(([e,r])=>{
                    t.getValue(e).set(r)
                }
                ),
                t.render(),
                x.j && null !== r && window.scrollTo({
                    top: r
                }),
                {
                    target: i,
                    transitionEnd: n
                }
            }
        }
          , ix = (t,e,r,n)=>{
            var i, s;
            let o = function(t, {...e}, r) {
                let n = t.current;
                if (!(n instanceof Element))
                    return {
                        target: e,
                        transitionEnd: r
                    };
                for (let i in r && (r = {
                    ...r
                }),
                t.values.forEach(t=>{
                    let e = t.get();
                    if (!L(e))
                        return;
                    let r = ia(e, n);
                    r && t.set(r)
                }
                ),
                e) {
                    let t = e[i];
                    if (!L(t))
                        continue;
                    let s = ia(t, n);
                    s && (e[i] = s,
                    r || (r = {}),
                    void 0 === r[i] && (r[i] = t))
                }
                return {
                    target: e,
                    transitionEnd: r
                }
            }(t, e, n);
            return e = o.target,
            n = o.transitionEnd,
            i = e,
            s = n,
            ic(i) ? ib(t, i, r, s) : {
                target: i,
                transitionEnd: s
            }
        }
          , iP = {
            current: null
        }
          , iw = {
            current: !1
        }
          , iS = new WeakMap
          , iE = Object.keys(b)
          , iA = iE.length
          , iC = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
          , iT = p.length;
        class ij {
            constructor({parent: t, props: e, presenceContext: r, reducedMotionConfig: n, visualState: i}, s={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
                this.render = ()=>{
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.scheduleRender = ()=>tz.Wi.render(this.render, !1, !0);
                let {latestValues: o, renderState: a} = i;
                this.latestValues = o,
                this.baseTarget = {
                    ...o
                },
                this.initialValues = e.initial ? {
                    ...o
                } : {},
                this.renderState = a,
                this.parent = t,
                this.props = e,
                this.presenceContext = r,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = n,
                this.options = s,
                this.isControllingVariants = m(e),
                this.isVariantNode = g(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: l, ...u} = this.scrapeMotionValuesFromProps(e, {});
                for (let t in u) {
                    let e = u[t];
                    void 0 !== o[t] && k(e) && (e.set(o[t], !1),
                    ry(l) && l.add(t))
                }
            }
            scrapeMotionValuesFromProps(t, e) {
                return {}
            }
            mount(t) {
                this.current = t,
                iS.set(t, this),
                this.projection && !this.projection.instance && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach((t,e)=>this.bindToMotionValue(e, t)),
                iw.current || function() {
                    if (iw.current = !0,
                    x.j) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)")
                              , e = ()=>iP.current = t.matches;
                            t.addListener(e),
                            e()
                        } else
                            iP.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || iP.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let t in iS.delete(this.current),
                this.projection && this.projection.unmount(),
                (0,
                tz.Pn)(this.notifyUpdate),
                (0,
                tz.Pn)(this.render),
                this.valueSubscriptions.forEach(t=>t()),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[t].clear();
                for (let t in this.features)
                    this.features[t].unmount();
                this.current = null
            }
            bindToMotionValue(t, e) {
                let r = j.has(t)
                  , n = e.on("change", e=>{
                    this.latestValues[t] = e,
                    this.props.onUpdate && tz.Wi.update(this.notifyUpdate, !1, !0),
                    r && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , i = e.on("renderRequest", this.scheduleRender);
                this.valueSubscriptions.set(t, ()=>{
                    n(),
                    i()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            loadFeatures({children: t, ...e}, r, n, i) {
                let s, o;
                for (let t = 0; t < iA; t++) {
                    let r = iE[t]
                      , {isEnabled: n, Feature: i, ProjectionNode: a, MeasureLayout: l} = b[r];
                    a && (s = a),
                    n(e) && (!this.features[r] && i && (this.features[r] = new i(this)),
                    l && (o = l))
                }
                if (!this.projection && s) {
                    this.projection = new s(this.latestValues,this.parent && this.parent.projection);
                    let {layoutId: t, layout: r, drag: n, dragConstraints: o, layoutScroll: a, layoutRoot: l} = e;
                    this.projection.setOptions({
                        layoutId: t,
                        layout: r,
                        alwaysMeasureLayout: !!n || o && c(o),
                        visualElement: this,
                        scheduleRender: ()=>this.scheduleRender(),
                        animationType: "string" == typeof r ? r : "both",
                        initialPromotionConfig: i,
                        layoutScroll: a,
                        layoutRoot: l
                    })
                }
                return o
            }
            updateFeatures() {
                for (let t in this.features) {
                    let e = this.features[t];
                    e.isMounted ? e.update() : (e.mount(),
                    e.isMounted = !0)
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.options, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : r3()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            makeTargetAnimatable(t, e=!0) {
                return this.makeTargetAnimatableFromInstance(t, this.props, e)
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = t,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = e;
                for (let e = 0; e < iC.length; e++) {
                    let r = iC[e];
                    this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](),
                    delete this.propEventSubscriptions[r]);
                    let n = t["on" + r];
                    n && (this.propEventSubscriptions[r] = this.on(r, n))
                }
                this.prevMotionValues = function(t, e, r) {
                    let {willChange: n} = e;
                    for (let i in e) {
                        let s = e[i]
                          , o = r[i];
                        if (k(s))
                            t.addValue(i, s),
                            ry(n) && n.add(i);
                        else if (k(o))
                            t.addValue(i, rE(s, {
                                owner: t
                            })),
                            ry(n) && n.remove(i);
                        else if (o !== s) {
                            if (t.hasValue(i)) {
                                let e = t.getValue(i);
                                e.hasAnimated || e.set(s)
                            } else {
                                let e = t.getStaticValue(i);
                                t.addValue(i, rE(void 0 !== e ? e : s, {
                                    owner: t
                                }))
                            }
                        }
                    }
                    for (let n in r)
                        void 0 === e[n] && t.removeValue(n);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue()
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            getVariantContext(t=!1) {
                if (t)
                    return this.parent ? this.parent.getVariantContext() : void 0;
                if (!this.isControllingVariants) {
                    let t = this.parent && this.parent.getVariantContext() || {};
                    return void 0 !== this.props.initial && (t.initial = this.props.initial),
                    t
                }
                let e = {};
                for (let t = 0; t < iT; t++) {
                    let r = p[t]
                      , n = this.props[r];
                    (h(n) || !1 === n) && (e[r] = n)
                }
                return e
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                    ()=>e.variantChildren.delete(t)
            }
            addValue(t, e) {
                e !== this.values.get(t) && (this.removeValue(t),
                this.bindToMotionValue(t, e)),
                this.values.set(t, e),
                this.latestValues[t] = e.get()
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                this.valueSubscriptions.delete(t)),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let r = this.values.get(t);
                return void 0 === r && void 0 !== e && (r = rE(e, {
                    owner: this
                }),
                this.addValue(t, r)),
                r
            }
            readValue(t) {
                var e;
                return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let {initial: r} = this.props
                  , n = "string" == typeof r || "object" == typeof r ? null === (e = tP(this.props, r)) || void 0 === e ? void 0 : e[t] : void 0;
                if (r && void 0 !== n)
                    return n;
                let i = this.getBaseTargetFromProps(this.props, t);
                return void 0 === i || k(i) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : i
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new rP),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }
        class iM extends ij {
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, {vars: e, style: r}) {
                delete e[t],
                delete r[t]
            }
            makeTargetAnimatableFromInstance({transition: t, transitionEnd: e, ...r}, {transformValues: n}, i) {
                let s = function(t, e, r) {
                    let n = {};
                    for (let i in t) {
                        let t = function(t, e) {
                            if (!e)
                                return;
                            let r = e[t] || e.default || e;
                            return r.from
                        }(i, e);
                        if (void 0 !== t)
                            n[i] = t;
                        else {
                            let t = r.getValue(i);
                            t && (n[i] = t.get())
                        }
                    }
                    return n
                }(r, t || {}, this);
                if (n && (e && (e = n(e)),
                r && (r = n(r)),
                s && (s = n(s))),
                i) {
                    let t = function(t, e, r) {
                        var n, i;
                        let s = Object.keys(e).filter(e=>!t.hasValue(e))
                          , o = s.length;
                        if (!o)
                            return !1;
                        for (let a = 0; a < o; a++) {
                            let o = s[a]
                              , l = e[o]
                              , u = null;
                            Array.isArray(l) && (u = l[0]),
                            null === u && (u = null !== (i = null !== (n = r[o]) && void 0 !== n ? n : t.readValue(o)) && void 0 !== i ? i : e[o]),
                            null != u && ("string" == typeof u && (rv(u) || rp(u)) ? u = parseFloat(u) : !rM(u) && eN.test(l) && (u = rf(o, l)),
                            t.addValue(o, rE(u, {
                                owner: t
                            })),
                            void 0 === r[o] && (r[o] = u),
                            null !== u && t.setBaseTarget(o, u))
                        }
                        return !0
                    }(this, r, s);
                    n && t && (s = n(s));
                    let i = ix(this, r, s, e);
                    e = i.transitionEnd,
                    r = i.target
                }
                return {
                    transition: t,
                    transitionEnd: e,
                    ...r
                }
            }
        }
        class ik extends iM {
            readValueFromInstance(t, e) {
                if (j.has(e)) {
                    let t = rd(e);
                    return t && t.default || 0
                }
                {
                    let r = window.getComputedStyle(t)
                      , n = (D(e) ? r.getPropertyValue(e) : r[e]) || 0;
                    return "string" == typeof n ? n.trim() : n
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return nu(t, e)
            }
            build(t, e, r, n) {
                te(t, e, r, n.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e) {
                return tb(t, e)
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: t} = this.props;
                k(t) && (this.childSubscription = t.on("change", t=>{
                    this.current && (this.current.textContent = `${t}`)
                }
                ))
            }
            renderInstance(t, e, r, n) {
                tg(t, e, r, n)
            }
        }
        class iR extends iM {
            constructor() {
                super(...arguments),
                this.isSVGTag = !1
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if (j.has(e)) {
                    let t = rd(e);
                    return t && t.default || 0
                }
                return e = ty.has(e) ? e : tm(e),
                t.getAttribute(e)
            }
            measureInstanceViewportBox() {
                return r3()
            }
            scrapeMotionValuesFromProps(t, e) {
                return tx(t, e)
            }
            build(t, e, r, n) {
                th(t, e, r, this.isSVGTag, n.transformTemplate)
            }
            renderInstance(t, e, r, n) {
                tv(t, e, r, n)
            }
            mount(t) {
                this.isSVGTag = tf(t.tagName),
                super.mount(t)
            }
        }
        let iO = (t,e)=>A(t) ? new iR(e,{
            enableHardwareAcceleration: !1
        }) : new ik(e,{
            enableHardwareAcceleration: !0
        })
          , iV = {
            animation: {
                Feature: class extends tW {
                    constructor(t) {
                        super(t),
                        t.animationState || (t.animationState = function(t) {
                            let e = e=>Promise.all(e.map(({animation: e, options: r})=>(function(t, e, r={}) {
                                let n;
                                if (t.notify("AnimationStart", e),
                                Array.isArray(e)) {
                                    let i = e.map(e=>rR(t, e, r));
                                    n = Promise.all(i)
                                } else if ("string" == typeof e)
                                    n = rR(t, e, r);
                                else {
                                    let i = "function" == typeof e ? t0(t, e, r.custom) : e;
                                    n = Promise.all(rk(t, i, r))
                                }
                                return n.then(()=>t.notify("AnimationComplete", e))
                            }
                            )(t, e, r)))
                              , r = {
                                animate: rL(!0),
                                whileInView: rL(),
                                whileHover: rL(),
                                whileTap: rL(),
                                whileDrag: rL(),
                                whileFocus: rL(),
                                exit: rL()
                            }
                              , n = !0
                              , i = (e,r)=>{
                                let n = t0(t, r);
                                if (n) {
                                    let {transition: t, transitionEnd: r, ...i} = n;
                                    e = {
                                        ...e,
                                        ...i,
                                        ...r
                                    }
                                }
                                return e
                            }
                            ;
                            function s(s, o) {
                                let a = t.getProps()
                                  , l = t.getVariantContext(!0) || {}
                                  , u = []
                                  , c = new Set
                                  , f = {}
                                  , p = 1 / 0;
                                for (let e = 0; e < rD; e++) {
                                    var m;
                                    let g = rV[e]
                                      , y = r[g]
                                      , v = void 0 !== a[g] ? a[g] : l[g]
                                      , b = h(v)
                                      , x = g === o ? y.isActive : null;
                                    !1 === x && (p = e);
                                    let P = v === l[g] && v !== a[g] && b;
                                    if (P && n && t.manuallyAnimateOnMount && (P = !1),
                                    y.protectedKeys = {
                                        ...f
                                    },
                                    !y.isActive && null === x || !v && !y.prevProp || d(v) || "boolean" == typeof v)
                                        continue;
                                    let w = (m = y.prevProp,
                                    "string" == typeof v ? v !== m : !!Array.isArray(v) && !tQ(v, m))
                                      , S = w || g === o && y.isActive && !P && b || e > p && b
                                      , E = Array.isArray(v) ? v : [v]
                                      , A = E.reduce(i, {});
                                    !1 === x && (A = {});
                                    let {prevResolvedValues: C={}} = y
                                      , T = {
                                        ...C,
                                        ...A
                                    }
                                      , j = t=>{
                                        S = !0,
                                        c.delete(t),
                                        y.needsAnimating[t] = !0
                                    }
                                    ;
                                    for (let t in T) {
                                        let e = A[t]
                                          , r = C[t];
                                        f.hasOwnProperty(t) || (e !== r ? tS(e) && tS(r) ? !tQ(e, r) || w ? j(t) : y.protectedKeys[t] = !0 : void 0 !== e ? j(t) : c.add(t) : void 0 !== e && c.has(t) ? j(t) : y.protectedKeys[t] = !0)
                                    }
                                    y.prevProp = v,
                                    y.prevResolvedValues = A,
                                    y.isActive && (f = {
                                        ...f,
                                        ...A
                                    }),
                                    n && t.blockInitialAnimation && (S = !1),
                                    S && !P && u.push(...E.map(t=>({
                                        animation: t,
                                        options: {
                                            type: g,
                                            ...s
                                        }
                                    })))
                                }
                                if (c.size) {
                                    let e = {};
                                    c.forEach(r=>{
                                        let n = t.getBaseTarget(r);
                                        void 0 !== n && (e[r] = n)
                                    }
                                    ),
                                    u.push({
                                        animation: e
                                    })
                                }
                                let g = !!u.length;
                                return n && !1 === a.initial && !t.manuallyAnimateOnMount && (g = !1),
                                n = !1,
                                g ? e(u) : Promise.resolve()
                            }
                            return {
                                animateChanges: s,
                                setActive: function(e, n, i) {
                                    var o;
                                    if (r[e].isActive === n)
                                        return Promise.resolve();
                                    null === (o = t.variantChildren) || void 0 === o || o.forEach(t=>{
                                        var r;
                                        return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
                                    }
                                    ),
                                    r[e].isActive = n;
                                    let a = s(i, e);
                                    for (let t in r)
                                        r[t].protectedKeys = {};
                                    return a
                                },
                                setAnimateFunction: function(r) {
                                    e = r(t)
                                },
                                getState: ()=>r
                            }
                        }(t))
                    }
                    updateAnimationControlsSubscription() {
                        let {animate: t} = this.node.getProps();
                        this.unmount(),
                        d(t) && (this.unmount = t.subscribe(this.node))
                    }
                    mount() {
                        this.updateAnimationControlsSubscription()
                    }
                    update() {
                        let {animate: t} = this.node.getProps()
                          , {animate: e} = this.node.prevProps || {};
                        t !== e && this.updateAnimationControlsSubscription()
                    }
                    unmount() {}
                }
            },
            exit: {
                Feature: class extends tW {
                    constructor() {
                        super(...arguments),
                        this.id = r_++
                    }
                    update() {
                        if (!this.node.presenceContext)
                            return;
                        let {isPresent: t, onExitComplete: e, custom: r} = this.node.presenceContext
                          , {isPresent: n} = this.node.prevPresenceContext || {};
                        if (!this.node.animationState || t === n)
                            return;
                        let i = this.node.animationState.setActive("exit", !t, {
                            custom: null != r ? r : this.node.getProps().custom
                        });
                        e && !t && i.then(()=>e(this.id))
                    }
                    mount() {
                        let {register: t} = this.node.presenceContext || {};
                        t && (this.unmount = t(this.id))
                    }
                    unmount() {}
                }
            },
            inView: {
                Feature: class extends tW {
                    constructor() {
                        super(...arguments),
                        this.hasEnteredView = !1,
                        this.isInView = !1
                    }
                    startObserver() {
                        this.unmount();
                        let {viewport: t={}} = this.node.getProps()
                          , {root: e, margin: r, amount: n="some", once: i} = t
                          , s = {
                            root: e ? e.current : void 0,
                            rootMargin: r,
                            threshold: "number" == typeof n ? n : tJ[n]
                        };
                        return function(t, e, r) {
                            let n = function({root: t, ...e}) {
                                let r = t || document;
                                tY.has(r) || tY.set(r, {});
                                let n = tY.get(r)
                                  , i = JSON.stringify(e);
                                return n[i] || (n[i] = new IntersectionObserver(tX,{
                                    root: t,
                                    ...e
                                })),
                                n[i]
                            }(e);
                            return tG.set(t, r),
                            n.observe(t),
                            ()=>{
                                tG.delete(t),
                                n.unobserve(t)
                            }
                        }(this.node.current, s, t=>{
                            let {isIntersecting: e} = t;
                            if (this.isInView === e || (this.isInView = e,
                            i && !e && this.hasEnteredView))
                                return;
                            e && (this.hasEnteredView = !0),
                            this.node.animationState && this.node.animationState.setActive("whileInView", e);
                            let {onViewportEnter: r, onViewportLeave: n} = this.node.getProps()
                              , s = e ? r : n;
                            s && s(t)
                        }
                        )
                    }
                    mount() {
                        this.startObserver()
                    }
                    update() {
                        if ("undefined" == typeof IntersectionObserver)
                            return;
                        let {props: t, prevProps: e} = this.node
                          , r = ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                            return r=>t[r] !== e[r]
                        }(t, e));
                        r && this.startObserver()
                    }
                    unmount() {}
                }
            },
            tap: {
                Feature: class extends tW {
                    constructor() {
                        super(...arguments),
                        this.removeStartListeners = tZ.Z,
                        this.removeEndListeners = tZ.Z,
                        this.removeAccessibleListeners = tZ.Z,
                        this.startPointerPress = (t,e)=>{
                            if (this.removeEndListeners(),
                            this.isPressing)
                                return;
                            let r = this.node.getProps()
                              , n = tD(window, "pointerup", (t,e)=>{
                                if (!this.checkPressEnd())
                                    return;
                                let {onTap: r, onTapCancel: n} = this.node.getProps();
                                tz.Wi.update(()=>{
                                    tH(this.node.current, t.target) ? r && r(t, e) : n && n(t, e)
                                }
                                )
                            }
                            , {
                                passive: !(r.onTap || r.onPointerUp)
                            })
                              , i = tD(window, "pointercancel", (t,e)=>this.cancelPress(t, e), {
                                passive: !(r.onTapCancel || r.onPointerCancel)
                            });
                            this.removeEndListeners = t_(n, i),
                            this.startPress(t, e)
                        }
                        ,
                        this.startAccessiblePress = ()=>{
                            let t = tk(this.node.current, "keydown", t=>{
                                "Enter" !== t.key || this.isPressing || (this.removeEndListeners(),
                                this.removeEndListeners = tk(this.node.current, "keyup", t=>{
                                    "Enter" === t.key && this.checkPressEnd() && tq("up", (t,e)=>{
                                        let {onTap: r} = this.node.getProps();
                                        r && tz.Wi.update(()=>r(t, e))
                                    }
                                    )
                                }
                                ),
                                tq("down", (t,e)=>{
                                    this.startPress(t, e)
                                }
                                ))
                            }
                            )
                              , e = tk(this.node.current, "blur", ()=>{
                                this.isPressing && tq("cancel", (t,e)=>this.cancelPress(t, e))
                            }
                            );
                            this.removeAccessibleListeners = t_(t, e)
                        }
                    }
                    startPress(t, e) {
                        this.isPressing = !0;
                        let {onTapStart: r, whileTap: n} = this.node.getProps();
                        n && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
                        r && tz.Wi.update(()=>r(t, e))
                    }
                    checkPressEnd() {
                        this.removeEndListeners(),
                        this.isPressing = !1;
                        let t = this.node.getProps();
                        return t.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
                        !tN()
                    }
                    cancelPress(t, e) {
                        if (!this.checkPressEnd())
                            return;
                        let {onTapCancel: r} = this.node.getProps();
                        r && tz.Wi.update(()=>r(t, e))
                    }
                    mount() {
                        let t = this.node.getProps()
                          , e = tD(this.node.current, "pointerdown", this.startPointerPress, {
                            passive: !(t.onTapStart || t.onPointerStart)
                        })
                          , r = tk(this.node.current, "focus", this.startAccessiblePress);
                        this.removeStartListeners = t_(e, r)
                    }
                    unmount() {
                        this.removeStartListeners(),
                        this.removeEndListeners(),
                        this.removeAccessibleListeners()
                    }
                }
            },
            focus: {
                Feature: class extends tW {
                    constructor() {
                        super(...arguments),
                        this.isActive = !1
                    }
                    onFocus() {
                        let t = !1;
                        try {
                            t = this.node.current.matches(":focus-visible")
                        } catch (e) {
                            t = !0
                        }
                        t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                        this.isActive = !0)
                    }
                    onBlur() {
                        this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                        this.isActive = !1)
                    }
                    mount() {
                        this.unmount = t_(tk(this.node.current, "focus", ()=>this.onFocus()), tk(this.node.current, "blur", ()=>this.onBlur()))
                    }
                    unmount() {}
                }
            },
            hover: {
                Feature: class extends tW {
                    mount() {
                        this.unmount = t_(t$(this.node, !0), t$(this.node, !1))
                    }
                    unmount() {}
                }
            },
            pan: {
                Feature: class extends tW {
                    constructor() {
                        super(...arguments),
                        this.removePointerDownListener = tZ.Z
                    }
                    onPointerDown(t) {
                        this.session = new rF(t,this.createPanHandlers(),{
                            transformPagePoint: this.node.getTransformPagePoint()
                        })
                    }
                    createPanHandlers() {
                        let {onPanSessionStart: t, onPanStart: e, onPan: r, onPanEnd: n} = this.node.getProps();
                        return {
                            onSessionStart: nf(t),
                            onStart: nf(e),
                            onMove: r,
                            onEnd: (t,e)=>{
                                delete this.session,
                                n && tz.Wi.update(()=>n(t, e))
                            }
                        }
                    }
                    mount() {
                        this.removePointerDownListener = tD(this.node.current, "pointerdown", t=>this.onPointerDown(t))
                    }
                    update() {
                        this.session && this.session.updateHandlers(this.createPanHandlers())
                    }
                    unmount() {
                        this.removePointerDownListener(),
                        this.session && this.session.end()
                    }
                }
            },
            drag: {
                Feature: class extends tW {
                    constructor(t) {
                        super(t),
                        this.removeGroupControls = tZ.Z,
                        this.removeListeners = tZ.Z,
                        this.controls = new nh(t)
                    }
                    mount() {
                        let {dragControls: t} = this.node.getProps();
                        t && (this.removeGroupControls = t.subscribe(this.controls)),
                        this.removeListeners = this.controls.addListeners() || tZ.Z
                    }
                    unmount() {
                        this.removeGroupControls(),
                        this.removeListeners()
                    }
                }
                ,
                ProjectionNode: is,
                MeasureLayout: nv
            },
            layout: {
                ProjectionNode: is,
                MeasureLayout: nv
            }
        }
          , iD = function(t) {
            function e(e, r={}) {
                return function({preloadedFeatures: t, createVisualElement: e, useRender: r, useVisualState: n, Component: d}) {
                    t && function(t) {
                        for (let e in t)
                            b[e] = {
                                ...b[e],
                                ...t[e]
                            }
                    }(t);
                    let f = (0,
                    i.forwardRef)(function(f, p) {
                        var g;
                        let v;
                        let b = {
                            ...(0,
                            i.useContext)(s),
                            ...f,
                            layoutId: function({layoutId: t}) {
                                let e = (0,
                                i.useContext)(P.p).id;
                                return e && void 0 !== t ? e + "-" + t : t
                            }(f)
                        }
                          , {isStatic: S} = b
                          , E = function(t) {
                            let {initial: e, animate: r} = function(t, e) {
                                if (m(t)) {
                                    let {initial: e, animate: r} = t;
                                    return {
                                        initial: !1 === e || h(e) ? e : void 0,
                                        animate: h(r) ? r : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, (0,
                            i.useContext)(o));
                            return (0,
                            i.useMemo)(()=>({
                                initial: e,
                                animate: r
                            }), [y(e), y(r)])
                        }(f)
                          , A = n(f, S);
                        if (!S && x.j) {
                            E.visualElement = function(t, e, r, n) {
                                let {visualElement: c} = (0,
                                i.useContext)(o)
                                  , h = (0,
                                i.useContext)(u)
                                  , d = (0,
                                i.useContext)(a.O)
                                  , f = (0,
                                i.useContext)(s).reducedMotion
                                  , p = (0,
                                i.useRef)();
                                n = n || h.renderer,
                                !p.current && n && (p.current = n(t, {
                                    visualState: e,
                                    parent: c,
                                    props: r,
                                    presenceContext: d,
                                    blockInitialAnimation: !!d && !1 === d.initial,
                                    reducedMotionConfig: f
                                }));
                                let m = p.current;
                                (0,
                                i.useInsertionEffect)(()=>{
                                    m && m.update(r, d)
                                }
                                ),
                                (0,
                                l.L)(()=>{
                                    m && m.render()
                                }
                                ),
                                (0,
                                i.useEffect)(()=>{
                                    m && m.updateFeatures()
                                }
                                );
                                let g = window.HandoffAppearAnimations ? l.L : i.useEffect;
                                return g(()=>{
                                    m && m.animationState && m.animationState.animateChanges()
                                }
                                ),
                                m
                            }(d, A, b, e);
                            let r = (0,
                            i.useContext)(w)
                              , n = (0,
                            i.useContext)(u).strict;
                            E.visualElement && (v = E.visualElement.loadFeatures(b, n, t, r))
                        }
                        return i.createElement(o.Provider, {
                            value: E
                        }, v && E.visualElement ? i.createElement(v, {
                            visualElement: E.visualElement,
                            ...b
                        }) : null, r(d, f, (g = E.visualElement,
                        (0,
                        i.useCallback)(t=>{
                            t && A.mount && A.mount(t),
                            g && (t ? g.mount(t) : g.unmount()),
                            p && ("function" == typeof p ? p(t) : c(p) && (p.current = t))
                        }
                        , [g])), A, S, E.visualElement))
                    });
                    return f[S] = d,
                    f
                }(t(e, r))
            }
            if ("undefined" == typeof Proxy)
                return e;
            let r = new Map;
            return new Proxy(e,{
                get: (t,n)=>(r.has(n) || r.set(n, e(n)),
                r.get(n))
            })
        }((t,e)=>(function(t, {forwardMotionProps: e=!1}, r, n) {
            let s = A(t) ? tj : tM;
            return {
                ...s,
                preloadedFeatures: r,
                useRender: function(t=!1) {
                    return (e,r,n,{latestValues: s},o)=>{
                        let a = A(e) ? tp : ti
                          , l = a(r, s, o, e)
                          , u = function(t, e, r) {
                            let n = {};
                            for (let i in t)
                                ("values" !== i || "object" != typeof t.values) && (ta(i) || !0 === r && to(i) || !e && !to(i) || t.draggable && i.startsWith("onDrag")) && (n[i] = t[i]);
                            return n
                        }(r, "string" == typeof e, t)
                          , c = {
                            ...u,
                            ...l,
                            ref: n
                        }
                          , {children: h} = r
                          , d = (0,
                        i.useMemo)(()=>k(h) ? h.get() : h, [h]);
                        return (0,
                        i.createElement)(e, {
                            ...c,
                            children: d
                        })
                    }
                }(e),
                createVisualElement: n,
                Component: t
            }
        }
        )(t, e, iV, iO))
    },
    2864: function(t, e, r) {
        "use strict";
        r.d(e, {
            K: function() {
                return i
            },
            k: function() {
                return s
            }
        });
        var n = r(9153);
        let i = n.Z
          , s = n.Z
    },
    5532: function(t, e, r) {
        "use strict";
        r.d(e, {
            j: function() {
                return n
            }
        });
        let n = "undefined" != typeof document
    },
    9153: function(t, e, r) {
        "use strict";
        r.d(e, {
            Z: function() {
                return n
            }
        });
        let n = t=>t
    },
    789: function(t, e, r) {
        "use strict";
        r.d(e, {
            h: function() {
                return i
            }
        });
        var n = r(6006);
        function i(t) {
            let e = (0,
            n.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
    },
    3398: function(t, e, r) {
        "use strict";
        r.d(e, {
            L: function() {
                return s
            }
        });
        var n = r(6006)
          , i = r(5532);
        let s = i.j ? n.useLayoutEffect : n.useEffect
    }
}]);
