/*! This file is auto-generated */
(() => {
    "use strict";
    var e = {
            d: (r, o) => {
                for (var s in o) e.o(o, s) && !e.o(r, s) && Object.defineProperty(r, s, { enumerable: !0, get: o[s] });
            },
            o: (e, r) => Object.prototype.hasOwnProperty.call(e, r),
            r: (e) => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            },
        },
        r = {};
    e.r(r), e.d(r, { __dangerousOptInToUnstableAPIsOnlyForCoreModules: () => n });
    const o = [
            "@wordpress/block-directory",
            "@wordpress/block-editor",
            "@wordpress/block-library",
            "@wordpress/blocks",
            "@wordpress/commands",
            "@wordpress/components",
            "@wordpress/core-commands",
            "@wordpress/core-data",
            "@wordpress/customize-widgets",
            "@wordpress/data",
            "@wordpress/edit-post",
            "@wordpress/edit-site",
            "@wordpress/edit-widgets",
            "@wordpress/editor",
            "@wordpress/format-library",
            "@wordpress/interface",
            "@wordpress/patterns",
            "@wordpress/preferences",
            "@wordpress/reusable-blocks",
            "@wordpress/router",
            "@wordpress/dataviews",
        ],
        s = [];
    let t;
    try {
        t = !1;
    } catch (e) {
        t = !0;
    }
    const n = (e, r) => {
        if (!o.includes(r))
            throw new Error(
                `You tried to opt-in to unstable APIs as module "${r}". This feature is only for JavaScript modules shipped with WordPress core. Please do not use it in plugins and themes as the unstable APIs will be removed without a warning. If you ignore this error and depend on unstable features, your product will inevitably break on one of the next WordPress releases.`
            );
        if (!t && s.includes(r))
            throw new Error(
                `You tried to opt-in to unstable APIs as module "${r}" which is already registered. This feature is only for JavaScript modules shipped with WordPress core. Please do not use it in plugins and themes as the unstable APIs will be removed without a warning. If you ignore this error and depend on unstable features, your product will inevitably break on one of the next WordPress releases.`
            );
        if ("I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress." !== e)
            throw new Error(
                "You tried to opt-in to unstable APIs without confirming you know the consequences. This feature is only for JavaScript modules shipped with WordPress core. Please do not use it in plugins and themes as the unstable APIs will removed without a warning. If you ignore this error and depend on unstable features, your product will inevitably break on the next WordPress release."
            );
        return s.push(r), { lock: i, unlock: d };
    };
    function i(e, r) {
        if (!e) throw new Error("Cannot lock an undefined object.");
        l in e || (e[l] = {}), a.set(e[l], r);
    }
    function d(e) {
        if (!e) throw new Error("Cannot unlock an undefined object.");
        if (!(l in e)) throw new Error("Cannot unlock an object that was not locked before. ");
        return a.get(e[l]);
    }
    const a = new WeakMap(),
        l = Symbol("Private API ID");
    (window.wp = window.wp || {}).privateApis = r;
})();
