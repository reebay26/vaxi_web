!(function (t) {
    "use strict";
    const e = t.params,
        s = document.querySelector.bind(document);
    function n() {
        if ("no" === e.allowTracking)
            return void (function () {
                const t = window.location.hostname;
                ["sbjs_current", "sbjs_current_add", "sbjs_first", "sbjs_first_add", "sbjs_session", "sbjs_udata", "sbjs_migrations", "sbjs_promo"].forEach((e) => {
                    document.cookie = `${e}=; path=/; max-age=-999; domain=.${t};`;
                });
            })();
        sbjs.init({ lifetime: Number(e.lifetime), session_length: Number(e.session), timezone_offset: "0" });
        const n = () => {
            if (sbjs.get) for (const [n, o] of Object.entries(t.sbjsDataToSchema(sbjs.get))) s(`input[name="${e.prefix}${n}"]`).value = o;
        };
        if (null !== s("form.woocommerce-checkout")) {
            const t = document.body.oninit_checkout;
            document.body.oninit_checkout = () => {
                n(), t && t();
            };
        }
        null !== s(".woocommerce form.register") && n();
    }
    (t.sbjsDataToSchema = (t) => ({
        type: t.current.typ,
        url: t.current_add.rf,
        utm_campaign: t.current.cmp,
        utm_source: t.current.src,
        utm_medium: t.current.mdm,
        utm_content: t.current.cnt,
        utm_id: t.current.id,
        utm_term: t.current.trm,
        session_entry: t.current_add.ep,
        session_start_time: t.current_add.fd,
        session_pages: t.session.pgs,
        session_count: t.udata.vst,
        user_agent: t.udata.uag,
    })),
        (t.setAllowTrackingConsent = (t) => {
            t && ((e.allowTracking = "yes"), n());
        }),
        n();
})(window.wc_order_attribution);
