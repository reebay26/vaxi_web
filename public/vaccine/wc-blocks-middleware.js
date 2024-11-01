(() => {
    "use strict";
    var e = {
            n: (t) => {
                var o = t && t.__esModule ? () => t.default : () => t;
                return e.d(o, { a: o }), o;
            },
            d: (t, o) => {
                for (var n in o) e.o(o, n) && !e.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: o[n] });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: (e) => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            },
        },
        t = {};
    e.r(t);
    const o = window.wp.apiFetch;
    var n = e.n(o);
    let r = "",
        a = 0;
    try {
        const e = window.localStorage.getItem("storeApiNonce"),
            t = e ? JSON.parse(e) : {};
        (r = (null == t ? void 0 : t.nonce) || ""), (a = (null == t ? void 0 : t.timestamp) || 0);
    } catch {}
    const c = (e, t) => {
            e !== r && ((a && t < a) || ((r = e), (a = t || Date.now() / 1e3), window.localStorage.setItem("storeApiNonce", JSON.stringify({ nonce: r, timestamp: a }))));
        },
        i = (e) => {
            const t = e.headers || {};
            return (e.headers = { ...t, Nonce: r }), e;
        };
    n().use((e, t) => {
        var o, n;
        return (
            ((e) => {
                const t = e.url || e.path;
                return !(!t || !e.method || "GET" === e.method) && null !== /wc\/store\/v1\//.exec(t);
            })(e) && ((e = i(e)), Array.isArray(null === (o = e) || void 0 === o || null === (n = o.data) || void 0 === n ? void 0 : n.requests) && (e.data.requests = e.data.requests.map(i))),
            t(e, t)
        );
    }),
        (n().setNonce = (e) => {
            const t = "function" == typeof (null == e ? void 0 : e.get) ? e.get("Nonce") : e.Nonce,
                o = "function" == typeof (null == e ? void 0 : e.get) ? e.get("Nonce-Timestamp") : e["Nonce-Timestamp"];
            t && c(t, o);
        }),
        c(wcBlocksMiddlewareConfig.storeApiNonce, wcBlocksMiddlewareConfig.storeApiNonceTimestamp),
        ((this.wc = this.wc || {}).wcBlocksMiddleware = t);
})();
