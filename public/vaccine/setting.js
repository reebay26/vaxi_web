(() => {
    "use strict";
    var e = {
            d: (t, r) => {
                for (var o in r) e.o(r, o) && !e.o(t, o) && Object.defineProperty(t, o, { enumerable: !0, get: r[o] });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: (e) => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            },
        },
        t = {};
    e.r(t),
        e.d(t, {
            ADMIN_URL: () => s,
            COUNTRIES: () => i,
            CURRENCY: () => c,
            CURRENT_USER_IS_ADMIN: () => a,
            HOME_URL: () => l,
            LOCALE: () => d,
            ORDER_STATUSES: () => u,
            PLACEHOLDER_IMG_SRC: () => p,
            SITE_TITLE: () => m,
            STORE_PAGES: () => _,
            WC_ASSET_URL: () => w,
            WC_VERSION: () => S,
            WP_LOGIN_URL: () => g,
            WP_VERSION: () => f,
            allSettings: () => n,
            defaultFields: () => W,
            getAdminLink: () => N,
            getPaymentMethodData: () => V,
            getSetting: () => x,
            getSettingWithCoercion: () => A,
            isWcVersion: () => C,
            isWpVersion: () => M,
        }),
        (0, window.wp.hooks.addFilter)("woocommerce_admin_analytics_settings", "woocommerce-blocks/exclude-draft-status-from-analytics", (e) => {
            const t = (e) => ("customStatuses" === e.key ? { ...e, options: e.options.filter((e) => "checkout-draft" !== e.value) } : e),
                r = e.woocommerce_actionable_order_statuses.options.map(t),
                o = e.woocommerce_excluded_report_order_statuses.options.map(t);
            return { ...e, woocommerce_actionable_order_statuses: { ...e.woocommerce_actionable_order_statuses, options: r }, woocommerce_excluded_report_order_statuses: { ...e.woocommerce_excluded_report_order_statuses, options: o } };
        });
    const r = {
            adminUrl: "",
            countries: [],
            currency: { code: "USD", precision: 2, symbol: "$", symbolPosition: "left", decimalSeparator: ".", priceFormat: "%1$s%2$s", thousandSeparator: "," },
            currentUserId: 0,
            currentUserIsAdmin: !1,
            homeUrl: "",
            locale: { siteLocale: "en_US", userLocale: "en_US", weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] },
            orderStatuses: [],
            placeholderImgSrc: "",
            siteTitle: "",
            storePages: [],
            wcAssetUrl: "",
            wcVersion: "",
            wpLoginUrl: "",
            wpVersion: "",
        },
        o = "object" == typeof window.wcSettings ? window.wcSettings : {},
        n = { ...r, ...o };
    (n.currency = { ...r.currency, ...n.currency }), (n.locale = { ...r.locale, ...n.locale });
    const s = n.adminUrl,
        i = n.countries,
        c = n.currency,
        a = n.currentUserIsAdmin,
        l = n.homeUrl,
        d = n.locale,
        u = n.orderStatuses,
        p = n.placeholderImgSrc,
        m = n.siteTitle,
        _ = n.storePages,
        w = n.wcAssetUrl,
        S = n.wcVersion,
        g = n.wpLoginUrl,
        f = n.wpVersion;
    function y(e, t) {
        const r = E(e),
            o = E(t),
            n = r.pop(),
            s = o.pop(),
            i = R(r, o);
        return 0 !== i ? i : n && s ? R(n.split("."), s.split(".")) : n || s ? (n ? -1 : 1) : 0;
    }
    const h = (e, t, r) => {
        L(r);
        const o = y(e, t);
        return T[r].includes(o);
    };
    (y.validate = (e) => "string" == typeof e && /^[v\d]/.test(e) && U.test(e)),
        (y.compare = h),
        (y.sastisfies = (e, t) => {
            const r = t.match(/^([<>=~^]+)/),
                o = r ? r[1] : "=";
            if ("^" !== o && "~" !== o) return h(e, t, o);
            const [n, s, i] = E(e),
                [c, a, l] = E(t);
            return 0 === v(n, c) && ("^" === o ? R([s, i], [a, l]) >= 0 : 0 === v(s, a) && v(i, l) >= 0);
        });
    const U = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
        E = (e) => {
            if ("string" != typeof e) throw new TypeError("Invalid argument expected string");
            const t = e.match(U);
            if (!t) throw new Error(`Invalid argument not valid semver ('${e}' received)`);
            return t.shift(), t;
        },
        I = (e) => "*" === e || "x" === e || "X" === e,
        b = (e) => {
            const t = parseInt(e, 10);
            return isNaN(t) ? e : t;
        },
        v = (e, t) => {
            if (I(e) || I(t)) return 0;
            const [r, o] = ((e, t) => (typeof e != typeof t ? [String(e), String(t)] : [e, t]))(b(e), b(t));
            return r > o ? 1 : r < o ? -1 : 0;
        },
        R = (e, t) => {
            for (let r = 0; r < Math.max(e.length, t.length); r++) {
                const o = v(e[r] || 0, t[r] || 0);
                if (0 !== o) return o;
            }
            return 0;
        },
        T = { ">": [1], ">=": [0, 1], "=": [0], "<=": [-1, 0], "<": [-1] },
        O = Object.keys(T),
        L = (e) => {
            if ("string" != typeof e) throw new TypeError("Invalid operator type, expected string but got " + typeof e);
            if (-1 === O.indexOf(e)) throw new Error(`Invalid operator, expected one of ${O.join("|")}`);
        },
        x = (e, t = !1, r = (e, t) => (void 0 !== e ? e : t)) => {
            let o = t;
            if (e in n) o = n[e];
            else if (e.includes("_data")) {
                const r = e.replace("_data", ""),
                    n = x("paymentMethodData", {});
                o = r in n ? n[r] : t;
            }
            return r(o, t);
        },
        A = (e, t, r) => {
            const o = e in n ? n[e] : t;
            return r(o, t) ? o : t;
        },
        P = (e, t, r) => {
            let o = x(e, "").replace(/-[a-zA-Z0-9]*[\-]*/, ".0-rc.");
            return (o = o.endsWith(".") ? o.substring(0, o.length - 1) : o), y.compare(o, t, r);
        },
        M = (e, t = "=") => P("wpVersion", e, t),
        C = (e, t = "=") => P("wcVersion", e, t),
        N = (e) => x("adminUrl") + e,
        V = (e, t = null) => {
            var r;
            return null !== (r = x("paymentMethodData", {})[e]) && void 0 !== r ? r : t;
        },
        W = x("defaultFields");
    (this.wc = this.wc || {}).wcSettings = t;
})();
