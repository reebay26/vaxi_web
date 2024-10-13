/*! This file is auto-generated */
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
            ALT: () => S,
            BACKSPACE: () => n,
            COMMAND: () => A,
            CTRL: () => E,
            DELETE: () => m,
            DOWN: () => C,
            END: () => u,
            ENTER: () => l,
            ESCAPE: () => a,
            F10: () => w,
            HOME: () => f,
            LEFT: () => p,
            PAGEDOWN: () => d,
            PAGEUP: () => s,
            RIGHT: () => h,
            SHIFT: () => O,
            SPACE: () => c,
            TAB: () => i,
            UP: () => y,
            ZERO: () => P,
            displayShortcut: () => _,
            displayShortcutList: () => L,
            isAppleOS: () => o,
            isKeyboardEvent: () => k,
            modifiers: () => T,
            rawShortcut: () => v,
            shortcutAriaLabel: () => j,
        });
    const r = window.wp.i18n;
    function o(e = null) {
        if (!e) {
            if ("undefined" == typeof window) return !1;
            e = window;
        }
        const { platform: t } = e.navigator;
        return -1 !== t.indexOf("Mac") || ["iPad", "iPhone"].includes(t);
    }
    const n = 8,
        i = 9,
        l = 13,
        a = 27,
        c = 32,
        s = 33,
        d = 34,
        u = 35,
        f = 36,
        p = 37,
        y = 38,
        h = 39,
        C = 40,
        m = 46,
        w = 121,
        S = "alt",
        E = "ctrl",
        A = "meta",
        O = "shift",
        P = 48;
    function b(e) {
        return e.length < 2 ? e.toUpperCase() : e.charAt(0).toUpperCase() + e.slice(1);
    }
    function g(e, t) {
        return Object.fromEntries(Object.entries(e).map(([e, r]) => [e, t(r)]));
    }
    const T = {
            primary: (e) => (e() ? [A] : [E]),
            primaryShift: (e) => (e() ? [O, A] : [E, O]),
            primaryAlt: (e) => (e() ? [S, A] : [E, S]),
            secondary: (e) => (e() ? [O, S, A] : [E, O, S]),
            access: (e) => (e() ? [E, S] : [O, S]),
            ctrl: () => [E],
            alt: () => [S],
            ctrlShift: () => [E, O],
            shift: () => [O],
            shiftAlt: () => [O, S],
            undefined: () => [],
        },
        v = g(T, (e) => (t, r = o) => [...e(r), t.toLowerCase()].join("+")),
        L = g(T, (e) => (t, r = o) => {
            const n = r(),
                i = { [S]: n ? "âŒ¥" : "Alt", [E]: n ? "âŒƒ" : "Ctrl", [A]: "âŒ˜", [O]: n ? "â‡§" : "Shift" };
            return [
                ...e(r).reduce((e, t) => {
                    var r;
                    const o = null !== (r = i[t]) && void 0 !== r ? r : t;
                    return n ? [...e, o] : [...e, o, "+"];
                }, []),
                b(t),
            ];
        }),
        _ = g(L, (e) => (t, r = o) => e(t, r).join("")),
        j = g(T, (e) => (t, n = o) => {
            const i = n(),
                l = { [O]: "Shift", [A]: i ? "Command" : "Control", [E]: "Control", [S]: i ? "Option" : "Alt", ",": (0, r.__)("Comma"), ".": (0, r.__)("Period"), "`": (0, r.__)("Backtick"), "~": (0, r.__)("Tilde") };
            return [...e(n), t]
                .map((e) => {
                    var t;
                    return b(null !== (t = l[e]) && void 0 !== t ? t : e);
                })
                .join(i ? " " : " + ");
        });
    const k = g(T, (e) => (t, r, n = o) => {
        const i = e(n),
            l = (function (e) {
                return [S, E, A, O].filter((t) => e[`${t}Key`]);
            })(t),
            a = { Comma: ",", Backslash: "\\", IntlRo: "\\", IntlYen: "\\" },
            c = i.filter((e) => !l.includes(e)),
            s = l.filter((e) => !i.includes(e));
        if (c.length > 0 || s.length > 0) return !1;
        let d = t.key.toLowerCase();
        return r ? (t.altKey && 1 === r.length && (d = String.fromCharCode(t.keyCode).toLowerCase()), t.shiftKey && 1 === r.length && a[t.code] && (d = a[t.code]), "del" === r && (r = "delete"), d === r.toLowerCase()) : i.includes(d);
    });
    (window.wp = window.wp || {}).keycodes = t;
})();
