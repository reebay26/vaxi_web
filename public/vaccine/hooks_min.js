/*! This file is auto-generated */
(() => {
    "use strict";
    var t = {
            d: (e, n) => {
                for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
            },
            o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
            r: (t) => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            },
        },
        e = {};
    t.r(e),
        t.d(e, {
            actions: () => S,
            addAction: () => m,
            addFilter: () => p,
            applyFilters: () => k,
            createHooks: () => h,
            currentAction: () => w,
            currentFilter: () => I,
            defaultHooks: () => f,
            didAction: () => O,
            didFilter: () => j,
            doAction: () => b,
            doingAction: () => x,
            doingFilter: () => T,
            filters: () => z,
            hasAction: () => v,
            hasFilter: () => y,
            removeAction: () => A,
            removeAllActions: () => F,
            removeAllFilters: () => g,
            removeFilter: () => _,
        });
    const n = function (t) {
        return "string" != typeof t || "" === t
            ? (console.error("The namespace must be a non-empty string."), !1)
            : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t) || (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1);
    };
    const r = function (t) {
        return "string" != typeof t || "" === t
            ? (console.error("The hook name must be a non-empty string."), !1)
            : /^__/.test(t)
            ? (console.error("The hook name cannot begin with `__`."), !1)
            : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t) || (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1);
    };
    const o = function (t, e) {
        return function (o, i, s, c = 10) {
            const l = t[e];
            if (!r(o)) return;
            if (!n(i)) return;
            if ("function" != typeof s) return void console.error("The hook callback must be a function.");
            if ("number" != typeof c) return void console.error("If specified, the hook priority must be a number.");
            const u = { callback: s, priority: c, namespace: i };
            if (l[o]) {
                const t = l[o].handlers;
                let e;
                for (e = t.length; e > 0 && !(c >= t[e - 1].priority); e--);
                e === t.length ? (t[e] = u) : t.splice(e, 0, u),
                    l.__current.forEach((t) => {
                        t.name === o && t.currentIndex >= e && t.currentIndex++;
                    });
            } else l[o] = { handlers: [u], runs: 0 };
            "hookAdded" !== o && t.doAction("hookAdded", o, i, s, c);
        };
    };
    const i = function (t, e, o = !1) {
        return function (i, s) {
            const c = t[e];
            if (!r(i)) return;
            if (!o && !n(s)) return;
            if (!c[i]) return 0;
            let l = 0;
            if (o) (l = c[i].handlers.length), (c[i] = { runs: c[i].runs, handlers: [] });
            else {
                const t = c[i].handlers;
                for (let e = t.length - 1; e >= 0; e--)
                    t[e].namespace === s &&
                        (t.splice(e, 1),
                        l++,
                        c.__current.forEach((t) => {
                            t.name === i && t.currentIndex >= e && t.currentIndex--;
                        }));
            }
            return "hookRemoved" !== i && t.doAction("hookRemoved", i, s), l;
        };
    };
    const s = function (t, e) {
        return function (n, r) {
            const o = t[e];
            return void 0 !== r ? n in o && o[n].handlers.some((t) => t.namespace === r) : n in o;
        };
    };
    const c = function (t, e, n = !1) {
        return function (r, ...o) {
            const i = t[e];
            i[r] || (i[r] = { handlers: [], runs: 0 }), i[r].runs++;
            const s = i[r].handlers;
            if (!s || !s.length) return n ? o[0] : void 0;
            const c = { name: r, currentIndex: 0 };
            for (i.__current.push(c); c.currentIndex < s.length; ) {
                const t = s[c.currentIndex].callback.apply(null, o);
                n && (o[0] = t), c.currentIndex++;
            }
            return i.__current.pop(), n ? o[0] : void 0;
        };
    };
    const l = function (t, e) {
        return function () {
            var n;
            const r = t[e];
            return null !== (n = r.__current[r.__current.length - 1]?.name) && void 0 !== n ? n : null;
        };
    };
    const u = function (t, e) {
        return function (n) {
            const r = t[e];
            return void 0 === n ? void 0 !== r.__current[0] : !!r.__current[0] && n === r.__current[0].name;
        };
    };
    const a = function (t, e) {
        return function (n) {
            const o = t[e];
            if (r(n)) return o[n] && o[n].runs ? o[n].runs : 0;
        };
    };
    class d {
        constructor() {
            (this.actions = Object.create(null)),
                (this.actions.__current = []),
                (this.filters = Object.create(null)),
                (this.filters.__current = []),
                (this.addAction = o(this, "actions")),
                (this.addFilter = o(this, "filters")),
                (this.removeAction = i(this, "actions")),
                (this.removeFilter = i(this, "filters")),
                (this.hasAction = s(this, "actions")),
                (this.hasFilter = s(this, "filters")),
                (this.removeAllActions = i(this, "actions", !0)),
                (this.removeAllFilters = i(this, "filters", !0)),
                (this.doAction = c(this, "actions")),
                (this.applyFilters = c(this, "filters", !0)),
                (this.currentAction = l(this, "actions")),
                (this.currentFilter = l(this, "filters")),
                (this.doingAction = u(this, "actions")),
                (this.doingFilter = u(this, "filters")),
                (this.didAction = a(this, "actions")),
                (this.didFilter = a(this, "filters"));
        }
    }
    const h = function () {
            return new d();
        },
        f = h(),
        {
            addAction: m,
            addFilter: p,
            removeAction: A,
            removeFilter: _,
            hasAction: v,
            hasFilter: y,
            removeAllActions: F,
            removeAllFilters: g,
            doAction: b,
            applyFilters: k,
            currentAction: w,
            currentFilter: I,
            doingAction: x,
            doingFilter: T,
            didAction: O,
            didFilter: j,
            actions: S,
            filters: z,
        } = f;
    (window.wp = window.wp || {}).hooks = e;
})();
