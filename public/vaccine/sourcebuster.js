!(function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        "undefined" != typeof window ? (t = window) : "undefined" != typeof global ? (t = global) : "undefined" != typeof self && (t = self), (t.sbjs = e());
    }
})(function () {
    return (function e(t, r, n) {
        function i(s, o) {
            if (!r[s]) {
                if (!t[s]) {
                    var c = "function" == typeof require && require;
                    if (!o && c) return c(s, !0);
                    if (a) return a(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw ((u.code = "MODULE_NOT_FOUND"), u);
                }
                var p = (r[s] = { exports: {} });
                t[s][0].call(
                    p.exports,
                    function (e) {
                        var r = t[s][1][e];
                        return i(r || e);
                    },
                    p,
                    p.exports,
                    e,
                    t,
                    r,
                    n
                );
            }
            return r[s].exports;
        }
        for (var a = "function" == typeof require && require, s = 0; s < n.length; s++) i(n[s]);
        return i;
    })(
        {
            1: [
                function (e, t, r) {
                    "use strict";
                    var n = e("./init"),
                        i = {
                            init: function (e) {
                                (this.get = n(e)), e && e.callback && "function" == typeof e.callback && e.callback(this.get);
                            },
                        };
                    t.exports = i;
                },
                { "./init": 6 },
            ],
            2: [
                function (e, t, r) {
                    "use strict";
                    var n = e("./terms"),
                        i = e("./helpers/utils"),
                        a = {
                            containers: { current: "sbjs_current", current_extra: "sbjs_current_add", first: "sbjs_first", first_extra: "sbjs_first_add", session: "sbjs_session", udata: "sbjs_udata", promocode: "sbjs_promo" },
                            service: { migrations: "sbjs_migrations" },
                            delimiter: "|||",
                            aliases: {
                                main: { type: "typ", source: "src", medium: "mdm", campaign: "cmp", content: "cnt", term: "trm", id: "id" },
                                extra: { fire_date: "fd", entrance_point: "ep", referer: "rf" },
                                session: { pages_seen: "pgs", current_page: "cpg" },
                                udata: { visits: "vst", ip: "uip", agent: "uag" },
                                promo: "code",
                            },
                            pack: {
                                main: function (e) {
                                    return (
                                        a.aliases.main.type +
                                        "=" +
                                        e.type +
                                        a.delimiter +
                                        a.aliases.main.source +
                                        "=" +
                                        e.source +
                                        a.delimiter +
                                        a.aliases.main.medium +
                                        "=" +
                                        e.medium +
                                        a.delimiter +
                                        a.aliases.main.campaign +
                                        "=" +
                                        e.campaign +
                                        a.delimiter +
                                        a.aliases.main.content +
                                        "=" +
                                        e.content +
                                        a.delimiter +
                                        a.aliases.main.term +
                                        "=" +
                                        e.term +
                                        a.delimiter +
                                        a.aliases.main.id +
                                        "=" +
                                        e.id
                                    );
                                },
                                extra: function (e) {
                                    return (
                                        a.aliases.extra.fire_date +
                                        "=" +
                                        i.setDate(new Date(), e) +
                                        a.delimiter +
                                        a.aliases.extra.entrance_point +
                                        "=" +
                                        document.location.href +
                                        a.delimiter +
                                        a.aliases.extra.referer +
                                        "=" +
                                        (document.referrer || n.none)
                                    );
                                },
                                user: function (e, t) {
                                    return a.aliases.udata.visits + "=" + e + a.delimiter + a.aliases.udata.ip + "=" + t + a.delimiter + a.aliases.udata.agent + "=" + navigator.userAgent;
                                },
                                session: function (e) {
                                    return a.aliases.session.pages_seen + "=" + e + a.delimiter + a.aliases.session.current_page + "=" + document.location.href;
                                },
                                promo: function (e) {
                                    return a.aliases.promo + "=" + i.setLeadingZeroToInt(i.randomInt(e.min, e.max), e.max.toString().length);
                                },
                            },
                        };
                    t.exports = a;
                },
                { "./helpers/utils": 5, "./terms": 9 },
            ],
            3: [
                function (e, t, r) {
                    "use strict";
                    var n = e("../data").delimiter;
                    t.exports = {
                        encodeData: function (e) {
                            return encodeURIComponent(e).replace(/\!/g, "%21").replace(/\~/g, "%7E").replace(/\*/g, "%2A").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");
                        },
                        decodeData: function (e) {
                            try {
                                return decodeURIComponent(e).replace(/\%21/g, "!").replace(/\%7E/g, "~").replace(/\%2A/g, "*").replace(/\%27/g, "'").replace(/\%28/g, "(").replace(/\%29/g, ")");
                            } catch (t) {
                                try {
                                    return unescape(e);
                                } catch (r) {
                                    return "";
                                }
                            }
                        },
                        set: function (e, t, r, n, i) {
                            var a, s;
                            if (r) {
                                var o = new Date();
                                o.setTime(o.getTime() + 60 * r * 1e3), (a = "; expires=" + o.toGMTString());
                            } else a = "";
                            (s = n && !i ? ";domain=." + n : ""), (document.cookie = this.encodeData(e) + "=" + this.encodeData(t) + a + s + "; path=/");
                        },
                        get: function (e) {
                            for (var t = this.encodeData(e) + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
                                for (var i = r[n]; " " === i.charAt(0); ) i = i.substring(1, i.length);
                                if (0 === i.indexOf(t)) return this.decodeData(i.substring(t.length, i.length));
                            }
                            return null;
                        },
                        destroy: function (e, t, r) {
                            this.set(e, "", -1, t, r);
                        },
                        parse: function (e) {
                            var t = [],
                                r = {};
                            if ("string" == typeof e) t.push(e);
                            else for (var i in e) e.hasOwnProperty(i) && t.push(e[i]);
                            for (var a = 0; a < t.length; a++) {
                                var s;
                                (r[this.unsbjs(t[a])] = {}), (s = this.get(t[a]) ? this.get(t[a]).split(n) : []);
                                for (var o = 0; o < s.length; o++) {
                                    var c = s[o].split("="),
                                        u = c.splice(0, 1);
                                    u.push(c.join("=")), (r[this.unsbjs(t[a])][u[0]] = this.decodeData(u[1]));
                                }
                            }
                            return r;
                        },
                        unsbjs: function (e) {
                            return e.replace("sbjs_", "");
                        },
                    };
                },
                { "../data": 2 },
            ],
            4: [
                function (e, t, r) {
                    "use strict";
                    t.exports = {
                        parse: function (e) {
                            for (var t = this.parseOptions, r = t.parser[t.strictMode ? "strict" : "loose"].exec(e), n = {}, i = 14; i--; ) n[t.key[i]] = r[i] || "";
                            return (
                                (n[t.q.name] = {}),
                                n[t.key[12]].replace(t.q.parser, function (e, r, i) {
                                    r && (n[t.q.name][r] = i);
                                }),
                                n
                            );
                        },
                        parseOptions: {
                            strictMode: !1,
                            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                            q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
                            parser: {
                                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                            },
                        },
                        getParam: function (e) {
                            for (var t = {}, r = (e || window.location.search.substring(1)).split("&"), n = 0; n < r.length; n++) {
                                var i = r[n].split("=");
                                if ("undefined" == typeof t[i[0]]) t[i[0]] = i[1];
                                else if ("string" == typeof t[i[0]]) {
                                    var a = [t[i[0]], i[1]];
                                    t[i[0]] = a;
                                } else t[i[0]].push(i[1]);
                            }
                            return t;
                        },
                        getHost: function (e) {
                            return this.parse(e).host.replace("www.", "");
                        },
                    };
                },
                {},
            ],
            5: [
                function (e, t, r) {
                    "use strict";
                    t.exports = {
                        escapeRegexp: function (e) {
                            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                        },
                        setDate: function (e, t) {
                            var r = e.getTimezoneOffset() / 60,
                                n = e.getHours(),
                                i = t || 0 === t ? t : -r;
                            return (
                                e.setHours(n + r + i),
                                e.getFullYear() +
                                    "-" +
                                    this.setLeadingZeroToInt(e.getMonth() + 1, 2) +
                                    "-" +
                                    this.setLeadingZeroToInt(e.getDate(), 2) +
                                    " " +
                                    this.setLeadingZeroToInt(e.getHours(), 2) +
                                    ":" +
                                    this.setLeadingZeroToInt(e.getMinutes(), 2) +
                                    ":" +
                                    this.setLeadingZeroToInt(e.getSeconds(), 2)
                            );
                        },
                        setLeadingZeroToInt: function (e, t) {
                            for (var r = e + ""; r.length < t; ) r = "0" + r;
                            return r;
                        },
                        randomInt: function (e, t) {
                            return Math.floor(Math.random() * (t - e + 1)) + e;
                        },
                    };
                },
                {},
            ],
            6: [
                function (e, t, r) {
                    "use strict";
                    var n = e("./data"),
                        i = e("./terms"),
                        a = e("./helpers/cookies"),
                        s = e("./helpers/uri"),
                        o = e("./helpers/utils"),
                        c = e("./params"),
                        u = e("./migrations");
                    t.exports = function (e) {
                        var t,
                            r,
                            p,
                            f,
                            m,
                            d,
                            l,
                            g,
                            h,
                            y,
                            _ = c.fetch(e),
                            v = s.getParam(),
                            x = _.domain.host,
                            b = _.domain.isolate,
                            k = _.lifetime;
                        function w(e) {
                            switch (e) {
                                case i.traffic.utm:
                                    (t = i.traffic.utm),
                                        (r = "undefined" != typeof v.utm_source ? v.utm_source : "undefined" != typeof v.gclid ? "google" : "undefined" != typeof v.yclid ? "yandex" : i.none),
                                        (p = "undefined" != typeof v.utm_medium ? v.utm_medium : "undefined" != typeof v.gclid ? "cpc" : "undefined" != typeof v.yclid ? "cpc" : i.none),
                                        (f =
                                            "undefined" != typeof v.utm_campaign
                                                ? v.utm_campaign
                                                : "undefined" != typeof v[_.campaign_param]
                                                ? v[_.campaign_param]
                                                : "undefined" != typeof v.gclid
                                                ? "google_cpc"
                                                : "undefined" != typeof v.yclid
                                                ? "yandex_cpc"
                                                : i.none),
                                        (m = "undefined" != typeof v.utm_content ? v.utm_content : "undefined" != typeof v[_.content_param] ? v[_.content_param] : i.none),
                                        (l = v.utm_id || i.none),
                                        (d =
                                            "undefined" != typeof v.utm_term
                                                ? v.utm_term
                                                : "undefined" != typeof v[_.term_param]
                                                ? v[_.term_param]
                                                : (function () {
                                                      var e = document.referrer;
                                                      if (v.utm_term) return v.utm_term;
                                                      if (!(e && s.parse(e).host && s.parse(e).host.match(/^(?:.*\.)?yandex\..{2,9}$/i))) return !1;
                                                      try {
                                                          return s.getParam(s.parse(document.referrer).query).text;
                                                      } catch (t) {
                                                          return !1;
                                                      }
                                                  })() || i.none);
                                    break;
                                case i.traffic.organic:
                                    (t = i.traffic.organic), (r = r || s.getHost(document.referrer)), (p = i.referer.organic), (f = i.none), (m = i.none), (d = i.none), (l = i.none);
                                    break;
                                case i.traffic.referral:
                                    (t = i.traffic.referral), (r = r || s.getHost(document.referrer)), (p = p || i.referer.referral), (f = i.none), (m = s.parse(document.referrer).path), (d = i.none), (l = i.none);
                                    break;
                                case i.traffic.typein:
                                    (t = i.traffic.typein), (r = _.typein_attributes.source), (p = _.typein_attributes.medium), (f = i.none), (m = i.none), (d = i.none), (l = i.none);
                                    break;
                                default:
                                    (t = i.oops), (r = i.oops), (p = i.oops), (f = i.oops), (m = i.oops), (d = i.oops), (l = i.oops);
                            }
                            var a = { type: t, source: r, medium: p, campaign: f, content: m, term: d, id: l };
                            return n.pack.main(a);
                        }
                        function q(e) {
                            var t = document.referrer;
                            switch (e) {
                                case i.traffic.organic:
                                    return (
                                        !!t &&
                                        I(t) &&
                                        (function (e) {
                                            var t = new RegExp("^(?:.*\\.)?" + o.escapeRegexp("yandex") + "\\..{2,9}$"),
                                                n = new RegExp(".*" + o.escapeRegexp("text") + "=.*"),
                                                i = new RegExp("^(?:www\\.)?" + o.escapeRegexp("google") + "\\..{2,9}$");
                                            if (s.parse(e).query && s.parse(e).host.match(t) && s.parse(e).query.match(n)) return (r = "yandex"), !0;
                                            if (s.parse(e).host.match(i)) return (r = "google"), !0;
                                            if (!s.parse(e).query) return !1;
                                            for (var a = 0; a < _.organics.length; a++) {
                                                if (
                                                    s.parse(e).host.match(new RegExp("^(?:.*\\.)?" + o.escapeRegexp(_.organics[a].host) + "$", "i")) &&
                                                    s.parse(e).query.match(new RegExp(".*" + o.escapeRegexp(_.organics[a].param) + "=.*", "i"))
                                                )
                                                    return (r = _.organics[a].display || _.organics[a].host), !0;
                                                if (a + 1 === _.organics.length) return !1;
                                            }
                                        })(t)
                                    );
                                case i.traffic.referral:
                                    return (
                                        !!t &&
                                        I(t) &&
                                        (function (e) {
                                            if (!(_.referrals.length > 0)) return (r = s.getHost(e)), !0;
                                            for (var t = 0; t < _.referrals.length; t++) {
                                                if (s.parse(e).host.match(new RegExp("^(?:.*\\.)?" + o.escapeRegexp(_.referrals[t].host) + "$", "i")))
                                                    return (r = _.referrals[t].display || _.referrals[t].host), (p = _.referrals[t].medium || i.referer.referral), !0;
                                                if (t + 1 === _.referrals.length) return (r = s.getHost(e)), !0;
                                            }
                                        })(t)
                                    );
                                default:
                                    return !1;
                            }
                        }
                        function I(e) {
                            if (_.domain) {
                                if (b) return s.getHost(e) !== s.getHost(x);
                                var t = new RegExp("^(?:.*\\.)?" + o.escapeRegexp(x) + "$", "i");
                                return !s.getHost(e).match(t);
                            }
                            return s.getHost(e) !== s.getHost(document.location.href);
                        }
                        function j() {
                            a.set(n.containers.current_extra, n.pack.extra(_.timezone_offset), k, x, b), a.get(n.containers.first_extra) || a.set(n.containers.first_extra, n.pack.extra(_.timezone_offset), k, x, b);
                        }
                        return (
                            u.go(k, x, b),
                            a.set(
                                n.containers.current,
                                (function () {
                                    var e;
                                    if (
                                        "undefined" != typeof v.utm_source ||
                                        "undefined" != typeof v.utm_medium ||
                                        "undefined" != typeof v.utm_campaign ||
                                        "undefined" != typeof v.utm_content ||
                                        "undefined" != typeof v.utm_term ||
                                        "undefined" != typeof v.utm_id ||
                                        "undefined" != typeof v.gclid ||
                                        "undefined" != typeof v.yclid ||
                                        "undefined" != typeof v[_.campaign_param] ||
                                        "undefined" != typeof v[_.term_param] ||
                                        "undefined" != typeof v[_.content_param]
                                    )
                                        j(), (e = w(i.traffic.utm));
                                    else if (q(i.traffic.organic)) j(), (e = w(i.traffic.organic));
                                    else if (!a.get(n.containers.session) && q(i.traffic.referral)) j(), (e = w(i.traffic.referral));
                                    else {
                                        if (a.get(n.containers.first) || a.get(n.containers.current)) return a.get(n.containers.current);
                                        j(), (e = w(i.traffic.typein));
                                    }
                                    return e;
                                })(),
                                k,
                                x,
                                b
                            ),
                            a.get(n.containers.first) || a.set(n.containers.first, a.get(n.containers.current), k, x, b),
                            a.get(n.containers.udata)
                                ? ((g = parseInt(a.parse(n.containers.udata)[a.unsbjs(n.containers.udata)][n.aliases.udata.visits]) || 1), (g = a.get(n.containers.session) ? g : g + 1), (h = n.pack.user(g, _.user_ip)))
                                : ((g = 1), (h = n.pack.user(g, _.user_ip))),
                            a.set(n.containers.udata, h, k, x, b),
                            a.get(n.containers.session) ? ((y = parseInt(a.parse(n.containers.session)[a.unsbjs(n.containers.session)][n.aliases.session.pages_seen]) || 1), (y += 1)) : (y = 1),
                            a.set(n.containers.session, n.pack.session(y), _.session_length, x, b),
                            _.promocode && !a.get(n.containers.promocode) && a.set(n.containers.promocode, n.pack.promo(_.promocode), k, x, b),
                            a.parse(n.containers)
                        );
                    };
                },
                { "./data": 2, "./helpers/cookies": 3, "./helpers/uri": 4, "./helpers/utils": 5, "./migrations": 7, "./params": 8, "./terms": 9 },
            ],
            7: [
                function (e, t, r) {
                    "use strict";
                    var n = e("./data"),
                        i = e("./helpers/cookies");
                    t.exports = {
                        go: function (e, t, r) {
                            var a,
                                s = this.migrations,
                                o = { l: e, d: t, i: r };
                            if (i.get(n.containers.first) || i.get(n.service.migrations)) {
                                if (!i.get(n.service.migrations)) for (a = 0; a < s.length; a++) s[a].go(s[a].id, o);
                            } else {
                                var c = [];
                                for (a = 0; a < s.length; a++) c.push(s[a].id);
                                var u = "";
                                for (a = 0; a < c.length; a++) (u += c[a] + "=1"), a < c.length - 1 && (u += n.delimiter);
                                i.set(n.service.migrations, u, o.l, o.d, o.i);
                            }
                        },
                        migrations: [
                            {
                                id: "1418474375998",
                                version: "1.0.0-beta",
                                go: function (e, t) {
                                    var r = e + "=1",
                                        a = e + "=0",
                                        s = function (e, t, r) {
                                            return t || r ? e : n.delimiter;
                                        };
                                    try {
                                        var o = [];
                                        for (var c in n.containers) n.containers.hasOwnProperty(c) && o.push(n.containers[c]);
                                        for (var u = 0; u < o.length; u++)
                                            if (i.get(o[u])) {
                                                var p = i.get(o[u]).replace(/(\|)?\|(\|)?/g, s);
                                                i.destroy(o[u], t.d, t.i), i.destroy(o[u], t.d, !t.i), i.set(o[u], p, t.l, t.d, t.i);
                                            }
                                        i.get(n.containers.session) && i.set(n.containers.session, n.pack.session(0), t.l, t.d, t.i), i.set(n.service.migrations, r, t.l, t.d, t.i);
                                    } catch (f) {
                                        i.set(n.service.migrations, a, t.l, t.d, t.i);
                                    }
                                },
                            },
                        ],
                    };
                },
                { "./data": 2, "./helpers/cookies": 3 },
            ],
            8: [
                function (e, t, r) {
                    "use strict";
                    var n = e("./terms"),
                        i = e("./helpers/uri");
                    t.exports = {
                        fetch: function (e) {
                            var t = e || {},
                                r = {};
                            if (
                                ((r.lifetime = this.validate.checkFloat(t.lifetime) || 6),
                                (r.lifetime = parseInt(30 * r.lifetime * 24 * 60)),
                                (r.session_length = this.validate.checkInt(t.session_length) || 30),
                                (r.timezone_offset = this.validate.checkInt(t.timezone_offset)),
                                (r.campaign_param = t.campaign_param || !1),
                                (r.term_param = t.term_param || !1),
                                (r.content_param = t.content_param || !1),
                                (r.user_ip = t.user_ip || n.none),
                                t.promocode ? ((r.promocode = {}), (r.promocode.min = parseInt(t.promocode.min) || 1e5), (r.promocode.max = parseInt(t.promocode.max) || 999999)) : (r.promocode = !1),
                                t.typein_attributes && t.typein_attributes.source && t.typein_attributes.medium
                                    ? ((r.typein_attributes = {}), (r.typein_attributes.source = t.typein_attributes.source), (r.typein_attributes.medium = t.typein_attributes.medium))
                                    : (r.typein_attributes = { source: "(direct)", medium: "(none)" }),
                                t.domain && this.validate.isString(t.domain)
                                    ? (r.domain = { host: t.domain, isolate: !1 })
                                    : t.domain && t.domain.host
                                    ? (r.domain = t.domain)
                                    : (r.domain = { host: i.getHost(document.location.hostname), isolate: !1 }),
                                (r.referrals = []),
                                t.referrals && t.referrals.length > 0)
                            )
                                for (var a = 0; a < t.referrals.length; a++) t.referrals[a].host && r.referrals.push(t.referrals[a]);
                            if (((r.organics = []), t.organics && t.organics.length > 0)) for (var s = 0; s < t.organics.length; s++) t.organics[s].host && t.organics[s].param && r.organics.push(t.organics[s]);
                            return (
                                r.organics.push({ host: "bing.com", param: "q", display: "bing" }),
                                r.organics.push({ host: "yahoo.com", param: "p", display: "yahoo" }),
                                r.organics.push({ host: "about.com", param: "q", display: "about" }),
                                r.organics.push({ host: "aol.com", param: "q", display: "aol" }),
                                r.organics.push({ host: "ask.com", param: "q", display: "ask" }),
                                r.organics.push({ host: "globososo.com", param: "q", display: "globo" }),
                                r.organics.push({ host: "go.mail.ru", param: "q", display: "go.mail.ru" }),
                                r.organics.push({ host: "rambler.ru", param: "query", display: "rambler" }),
                                r.organics.push({ host: "tut.by", param: "query", display: "tut.by" }),
                                r.referrals.push({ host: "t.co", display: "twitter.com" }),
                                r.referrals.push({ host: "plus.url.google.com", display: "plus.google.com" }),
                                r
                            );
                        },
                        validate: {
                            checkFloat: function (e) {
                                return !(!e || !this.isNumeric(parseFloat(e))) && parseFloat(e);
                            },
                            checkInt: function (e) {
                                return !(!e || !this.isNumeric(parseInt(e))) && parseInt(e);
                            },
                            isNumeric: function (e) {
                                return !isNaN(e);
                            },
                            isString: function (e) {
                                return "[object String]" === Object.prototype.toString.call(e);
                            },
                        },
                    };
                },
                { "./helpers/uri": 4, "./terms": 9 },
            ],
            9: [
                function (e, t, r) {
                    "use strict";
                    t.exports = {
                        traffic: { utm: "utm", organic: "organic", referral: "referral", typein: "typein" },
                        referer: { referral: "referral", organic: "organic", social: "social" },
                        none: "(none)",
                        oops: "(Houston, we have a problem)",
                    };
                },
                {},
            ],
        },
        {},
        [1]
    )(1);
});
