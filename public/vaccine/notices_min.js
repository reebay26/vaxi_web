/*! This file is auto-generated */
(() => {
    "use strict";
    var e = {
            d: (t, n) => {
                for (var i in n) e.o(n, i) && !e.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: (e) => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            },
        },
        t = {};
    e.r(t), e.d(t, { store: () => b });
    var n = {};
    e.r(n), e.d(n, { createErrorNotice: () => E, createInfoNotice: () => f, createNotice: () => l, createSuccessNotice: () => d, createWarningNotice: () => p, removeAllNotices: () => O, removeNotice: () => y, removeNotices: () => N });
    var i = {};
    e.r(i), e.d(i, { getNotices: () => _ });
    const r = window.wp.data,
        o = (e) => (t) => (n = {}, i) => {
            const r = i[e];
            if (void 0 === r) return n;
            const o = t(n[r], i);
            return o === n[r] ? n : { ...n, [r]: o };
        },
        c = o("context")((e = [], t) => {
            switch (t.type) {
                case "CREATE_NOTICE":
                    return [...e.filter(({ id: e }) => e !== t.notice.id), t.notice];
                case "REMOVE_NOTICE":
                    return e.filter(({ id: e }) => e !== t.id);
                case "REMOVE_NOTICES":
                    return e.filter(({ id: e }) => !t.ids.includes(e));
                case "REMOVE_ALL_NOTICES":
                    return e.filter(({ type: e }) => e !== t.noticeType);
            }
            return e;
        }),
        s = "global",
        u = "info";
    let a = 0;
    function l(e = u, t, n = {}) {
        const { speak: i = !0, isDismissible: r = !0, context: o = s, id: c = `${o}${++a}`, actions: l = [], type: d = "default", __unstableHTML: f, icon: E = null, explicitDismiss: p = !1, onDismiss: y } = n;
        return { type: "CREATE_NOTICE", context: o, notice: { id: c, status: e, content: (t = String(t)), spokenMessage: i ? t : null, __unstableHTML: f, isDismissible: r, actions: l, type: d, icon: E, explicitDismiss: p, onDismiss: y } };
    }
    function d(e, t) {
        return l("success", e, t);
    }
    function f(e, t) {
        return l("info", e, t);
    }
    function E(e, t) {
        return l("error", e, t);
    }
    function p(e, t) {
        return l("warning", e, t);
    }
    function y(e, t = s) {
        return { type: "REMOVE_NOTICE", id: e, context: t };
    }
    function O(e = "default", t = s) {
        return { type: "REMOVE_ALL_NOTICES", noticeType: e, context: t };
    }
    function N(e, t = s) {
        return { type: "REMOVE_NOTICES", ids: e, context: t };
    }
    const T = [];
    function _(e, t = s) {
        return e[t] || T;
    }
    const b = (0, r.createReduxStore)("core/notices", { reducer: c, actions: n, selectors: i });
    (0, r.register)(b), ((window.wp = window.wp || {}).notices = t);
})();
