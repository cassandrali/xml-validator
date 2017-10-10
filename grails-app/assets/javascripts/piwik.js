/*!!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
if (typeof JSON_PIWIK !== "object" && typeof window.JSON === "object" && window.JSON.stringify && window.JSON.parse) { JSON_PIWIK = window.JSON } else {
    (function() {
        var a = {};
        /*!! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
        (function() {
            var c = typeof define === "function" && define.amd;
            var e = { "function": true, object: true };
            var h = e[typeof a] && a && !a.nodeType && a;
            var i = e[typeof window] && window || this,
                b = h && e[typeof module] && module && !module.nodeType && typeof global == "object" && global;
            if (b && (b.global === b || b.window === b || b.self === b)) { i = b }

            function j(ab, V) {
                ab || (ab = i.Object());
                V || (V = i.Object());
                var K = ab.Number || i.Number,
                    R = ab.String || i.String,
                    x = ab.Object || i.Object,
                    S = ab.Date || i.Date,
                    T = ab.SyntaxError || i.SyntaxError,
                    aa = ab.TypeError || i.TypeError,
                    J = ab.Math || i.Math,
                    Y = ab.JSON || i.JSON;
                if (typeof Y == "object" && Y) { V.stringify = Y.stringify;
                    V.parse = Y.parse }
                var n = x.prototype,
                    u = n.toString,
                    r, m, L;
                var B = new S(-3509827334573292);
                try { B = B.getUTCFullYear() == -109252 && B.getUTCMonth() === 0 && B.getUTCDate() === 1 && B.getUTCHours() == 10 && B.getUTCMinutes() == 37 && B.getUTCSeconds() == 6 && B.getUTCMilliseconds() == 708 } catch (v) {}

                function o(ac) {
                    if (o[ac] !== L) { return o[ac] }
                    var ad;
                    if (ac == "bug-string-char-index") { ad = "a" [0] != "a" } else {
                        if (ac == "json") { ad = o("json-stringify") && o("json-parse") } else {
                            var ak, ah = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if (ac == "json-stringify") {
                                var ai = V.stringify,
                                    aj = typeof ai == "function" && B;
                                if (aj) {
                                    (ak = function() { return 1 }).toJSON = ak;
                                    try {
                                        aj = ai(0) === "0" && ai(new K()) === "0" && ai(new R()) == '""' && ai(u) === L && ai(L) === L && ai() === L && ai(ak) === "1" && ai([ak]) == "[1]" && ai([L]) == "[null]" && ai(null) == "null" && ai([L, u, null]) == "[null,null,null]" && ai({ a: [ak, true, false, null, "\x00\b\n\f\r\t"] }) == ah && ai(null, ak) === "1" && ai([1, 2], null, 1) == "[\n 1,\n 2\n]" && ai(new S(-8640000000000000)) == '"-271821-04-20T00:00:00.000Z"' && ai(new S(8640000000000000)) == '"+275760-09-13T00:00:00.000Z"' && ai(new S(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && ai(new S(-1)) == '"1969-12-31T23:59:59.999Z"'
                                    } catch (ae) { aj = false }
                                }
                                ad = aj
                            }
                            if (ac == "json-parse") { var ag = V.parse; if (typeof ag == "function") { try { if (ag("0") === 0 && !ag(false)) { ak = ag(ah); var af = ak.a.length == 5 && ak.a[0] === 1; if (af) { try { af = !ag('"\t"') } catch (ae) {} if (af) { try { af = ag("01") !== 1 } catch (ae) {} } if (af) { try { af = ag("1.") !== 1 } catch (ae) {} } } } } catch (ae) { af = false } } ad = af }
                        }
                    }
                    return o[ac] = !!ad
                }
                if (!o("json")) {
                    var U = "[object Function]",
                        Q = "[object Date]",
                        N = "[object Number]",
                        O = "[object String]",
                        E = "[object Array]",
                        A = "[object Boolean]";
                    var F = o("bug-string-char-index");
                    if (!B) { var s = J.floor; var Z = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]; var D = function(ac, ad) { return Z[ad] + 365 * (ac - 1970) + s((ac - 1969 + (ad = +(ad > 1))) / 4) - s((ac - 1901 + ad) / 100) + s((ac - 1601 + ad) / 400) } }
                    if (!(r = n.hasOwnProperty)) {
                        r = function(ae) {
                            var ac = {},
                                ad;
                            if ((ac.__proto__ = null, ac.__proto__ = { toString: 1 }, ac).toString != u) { r = function(ah) { var ag = this.__proto__,
                                        af = ah in (this.__proto__ = null, this);
                                    this.__proto__ = ag; return af } } else {
                                ad = ac.constructor;
                                r = function(ag) {
                                    var af = (this.constructor || ad).prototype;
                                    return ag in this && !(ag in af && this[ag] === af[ag])
                                }
                            }
                            ac = null;
                            return r.call(this, ae)
                        }
                    }
                    m = function(ae, ah) { var af = 0,
                            ac, ad, ag;
                        (ac = function() { this.valueOf = 0 }).prototype.valueOf = 0;
                        ad = new ac(); for (ag in ad) { if (r.call(ad, ag)) { af++ } } ac = ad = null; if (!af) { ad = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                            m = function(aj, an) { var am = u.call(aj) == U,
                                    al, ak; var ai = !am && typeof aj.constructor != "function" && e[typeof aj.hasOwnProperty] && aj.hasOwnProperty || r; for (al in aj) { if (!(am && al == "prototype") && ai.call(aj, al)) { an(al) } } for (ak = ad.length; al = ad[--ak]; ai.call(aj, al) && an(al)) {} } } else { if (af == 2) { m = function(aj, am) { var ai = {},
                                        al = u.call(aj) == U,
                                        ak; for (ak in aj) { if (!(al && ak == "prototype") && !r.call(ai, ak) && (ai[ak] = 1) && r.call(aj, ak)) { am(ak) } } } } else { m = function(aj, am) { var al = u.call(aj) == U,
                                        ak, ai; for (ak in aj) { if (!(al && ak == "prototype") && r.call(aj, ak) && !(ai = ak === "constructor")) { am(ak) } } if (ai || r.call(aj, (ak = "constructor"))) { am(ak) } } } } return m(ae, ah) };
                    if (!o("json-stringify")) {
                        var q = { 92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t" };
                        var I = "000000";
                        var t = function(ac, ad) { return (I + (ad || 0)).slice(-ac) };
                        var z = "\\u00";
                        var C = function(ai) { var ad = '"',
                                ag = 0,
                                ah = ai.length,
                                ac = !F || ah > 10; var af = ac && (F ? ai.split("") : ai); for (; ag < ah; ag++) { var ae = ai.charCodeAt(ag); switch (ae) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        ad += q[ae]; break;
                                    default:
                                        if (ae < 32) { ad += z + t(2, ae.toString(16)); break } ad += ac ? af[ag] : ai.charAt(ag) } } return ad + '"' };
                        var p = function(ai, aA, ag, al, ax, ac, aj) {
                            var at, ae, ap, az, ay, ak, aw, au, aq, an, ar, ad, ah, af, av, ao;
                            try { at = aA[ai] } catch (am) {}
                            if (typeof at == "object" && at) {
                                ae = u.call(at);
                                if (ae == Q && !r.call(at, "toJSON")) {
                                    if (at > -1 / 0 && at < 1 / 0) {
                                        if (D) { ay = s(at / 86400000); for (ap = s(ay / 365.2425) + 1970 - 1; D(ap + 1, 0) <= ay; ap++) {} for (az = s((ay - D(ap, 0)) / 30.42); D(ap, az + 1) <= ay; az++) {} ay = 1 + ay - D(ap, az);
                                            ak = (at % 86400000 + 86400000) % 86400000;
                                            aw = s(ak / 3600000) % 24;
                                            au = s(ak / 60000) % 60;
                                            aq = s(ak / 1000) % 60;
                                            an = ak % 1000 } else { ap = at.getUTCFullYear();
                                            az = at.getUTCMonth();
                                            ay = at.getUTCDate();
                                            aw = at.getUTCHours();
                                            au = at.getUTCMinutes();
                                            aq = at.getUTCSeconds();
                                            an = at.getUTCMilliseconds() } at = (ap <= 0 || ap >= 10000 ? (ap < 0 ? "-" : "+") + t(6, ap < 0 ? -ap : ap) : t(4, ap)) + "-" + t(2, az + 1) + "-" + t(2, ay) + "T" + t(2, aw) + ":" + t(2, au) + ":" + t(2, aq) + "." + t(3, an) + "Z"
                                    } else { at = null }
                                } else { if (typeof at.toJSON == "function" && ((ae != N && ae != O && ae != E) || r.call(at, "toJSON"))) { at = at.toJSON(ai) } }
                            }
                            if (ag) { at = ag.call(aA, ai, at) }
                            if (at === null) { return "null" } ae = u.call(at);
                            if (ae == A) { return "" + at } else { if (ae == N) { return at > -1 / 0 && at < 1 / 0 ? "" + at : "null" } else { if (ae == O) { return C("" + at) } } }
                            if (typeof at == "object") { for (af = aj.length; af--;) { if (aj[af] === at) { throw aa() } } aj.push(at);
                                ar = [];
                                av = ac;
                                ac += ax; if (ae == E) { for (ah = 0, af = at.length; ah < af; ah++) { ad = p(ah, at, ag, al, ax, ac, aj);
                                        ar.push(ad === L ? "null" : ad) } ao = ar.length ? (ax ? "[\n" + ac + ar.join(",\n" + ac) + "\n" + av + "]" : ("[" + ar.join(",") + "]")) : "[]" } else { m(al || at, function(aC) { var aB = p(aC, at, ag, al, ax, ac, aj); if (aB !== L) { ar.push(C(aC) + ":" + (ax ? " " : "") + aB) } });
                                    ao = ar.length ? (ax ? "{\n" + ac + ar.join(",\n" + ac) + "\n" + av + "}" : ("{" + ar.join(",") + "}")) : "{}" } aj.pop(); return ao }
                        };
                        V.stringify = function(ac, ae, af) {
                            var ad, al, aj, ai;
                            if (e[typeof ae] && ae) { if ((ai = u.call(ae)) == U) { al = ae } else { if (ai == E) { aj = {}; for (var ah = 0, ag = ae.length, ak; ah < ag; ak = ae[ah++], ((ai = u.call(ak)), ai == O || ai == N) && (aj[ak] = 1)) {} } } }
                            if (af) {
                                if ((ai = u.call(af)) == N) {
                                    if ((af -= af % 1) > 0) {
                                        for (ad = "", af > 10 && (af = 10); ad.length < af; ad += " ") {}
                                    }
                                } else { if (ai == O) { ad = af.length <= 10 ? af : af.slice(0, 10) } }
                            }
                            return p("", (ak = {}, ak[""] = ac, ak), al, aj, ad, "", [])
                        }
                    }
                    if (!o("json-parse")) {
                        var M = R.fromCharCode;
                        var l = { 92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r" };
                        var G, X;
                        var H = function() { G = X = null; throw T() };
                        var y = function() {
                            var ah = X,
                                af = ah.length,
                                ag, ae, ac, ai, ad;
                            while (G < af) {
                                ad = ah.charCodeAt(G);
                                switch (ad) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        G++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        ag = F ? ah.charAt(G) : ah[G];
                                        G++;
                                        return ag;
                                    case 34:
                                        for (ag = "@", G++; G < af;) { ad = ah.charCodeAt(G); if (ad < 32) { H() } else { if (ad == 92) { ad = ah.charCodeAt(++G); switch (ad) {
                                                        case 92:
                                                        case 34:
                                                        case 47:
                                                        case 98:
                                                        case 116:
                                                        case 110:
                                                        case 102:
                                                        case 114:
                                                            ag += l[ad];
                                                            G++; break;
                                                        case 117:
                                                            ae = ++G; for (ac = G + 4; G < ac; G++) { ad = ah.charCodeAt(G); if (!(ad >= 48 && ad <= 57 || ad >= 97 && ad <= 102 || ad >= 65 && ad <= 70)) { H() } } ag += M("0x" + ah.slice(ae, G)); break;
                                                        default:
                                                            H() } } else { if (ad == 34) { break } ad = ah.charCodeAt(G);
                                                    ae = G; while (ad >= 32 && ad != 92 && ad != 34) { ad = ah.charCodeAt(++G) } ag += ah.slice(ae, G) } } }
                                        if (ah.charCodeAt(G) == 34) {
                                            G++;
                                            return ag
                                        }
                                        H();
                                    default:
                                        ae = G;
                                        if (ad == 45) { ai = true;
                                            ad = ah.charCodeAt(++G) }
                                        if (ad >= 48 && ad <= 57) { if (ad == 48 && ((ad = ah.charCodeAt(G + 1)), ad >= 48 && ad <= 57)) { H() } ai = false; for (; G < af && ((ad = ah.charCodeAt(G)), ad >= 48 && ad <= 57); G++) {} if (ah.charCodeAt(G) == 46) { ac = ++G; for (; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) {} if (ac == G) { H() } G = ac } ad = ah.charCodeAt(G); if (ad == 101 || ad == 69) { ad = ah.charCodeAt(++G); if (ad == 43 || ad == 45) { G++ } for (ac = G; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) {} if (ac == G) { H() } G = ac } return +ah.slice(ae, G) }
                                        if (ai) { H() }
                                        if (ah.slice(G, G + 4) == "true") { G += 4; return true } else { if (ah.slice(G, G + 5) == "false") { G += 5; return false } else { if (ah.slice(G, G + 4) == "null") { G += 4; return null } } } H()
                                }
                            }
                            return "$"
                        };
                        var W = function(ad) {
                            var ac, ae;
                            if (ad == "$") { H() }
                            if (typeof ad == "string") {
                                if ((F ? ad.charAt(0) : ad[0]) == "@") { return ad.slice(1) }
                                if (ad == "[") { ac = []; for (;; ae || (ae = true)) { ad = y(); if (ad == "]") { break } if (ae) { if (ad == ",") { ad = y(); if (ad == "]") { H() } } else { H() } } if (ad == ",") { H() } ac.push(W(ad)) } return ac } else {
                                    if (ad == "{") {
                                        ac = {};
                                        for (;; ae || (ae = true)) {
                                            ad = y();
                                            if (ad == "}") { break }
                                            if (ae) { if (ad == ",") { ad = y(); if (ad == "}") { H() } } else { H() } }
                                            if (ad == "," || typeof ad != "string" || (F ? ad.charAt(0) : ad[0]) != "@" || y() != ":") { H() } ac[ad.slice(1)] = W(y())
                                        }
                                        return ac
                                    }
                                }
                                H()
                            }
                            return ad
                        };
                        var P = function(ae, ad, af) { var ac = w(ae, ad, af); if (ac === L) { delete ae[ad] } else { ae[ad] = ac } };
                        var w = function(af, ae, ag) { var ad = af[ae],
                                ac; if (typeof ad == "object" && ad) { if (u.call(ad) == E) { for (ac = ad.length; ac--;) { P(ad, ac, ag) } } else { m(ad, function(ah) { P(ad, ah, ag) }) } } return ag.call(af, ae, ad) };
                        V.parse = function(ae, af) { var ac, ad;
                            G = 0;
                            X = "" + ae;
                            ac = W(y()); if (y() != "$") { H() } G = X = null; return af && u.call(af) == U ? w((ad = {}, ad[""] = ac, ad), "", af) : ac }
                    }
                }
                V.runInContext = j;
                return V
            }
            if (h && !c) { j(i, h) } else { var f = i.JSON,
                    k = i.JSON3,
                    d = false; var g = j(i, (i.JSON3 = { noConflict: function() { if (!d) { d = true;
                            i.JSON = f;
                            i.JSON3 = k;
                            f = k = null } return g } }));
                i.JSON = { parse: g.parse, stringify: g.stringify } }
            if (c) { define(function() { return g }) }
        }).call(this);
        JSON_PIWIK = a
    })()
}
if (typeof _paq !== "object") { _paq = [] }
if (typeof window.Piwik !== "object") {
    window.Piwik = (function() {
        var n, a = {},
            t = {},
            A = document,
            f = navigator,
            R = screen,
            N = window,
            g = N.performance || N.mozPerformance || N.msPerformance || N.webkitPerformance,
            p = N.encodeURIComponent,
            M = N.decodeURIComponent,
            i = unescape,
            C = [],
            z, d, Y = [];

        function l(af) { try { return M(af) } catch (ag) { return unescape(af) } }

        function D(ag) { var af = typeof ag; return af !== "undefined" }

        function v(af) { return typeof af === "function" }

        function Q(af) { return typeof af === "object" }

        function s(af) { return typeof af === "string" || af instanceof String }

        function w(ag) { if (!ag) { return true } var af; var ah = true; for (af in ag) { if (Object.prototype.hasOwnProperty.call(ag, af)) { ah = false } } return ah }

        function ab(af) { if (console !== undefined && console && console.error) { console.error(af) } }

        function X() {
            var ak, aj, am, ag, af;
            for (ak = 0; ak < arguments.length; ak += 1) {
                af = null;
                if (arguments[ak] && arguments[ak].slice) { af = arguments[ak].slice() } ag = arguments[ak];
                am = ag.shift();
                var al, ah;
                var ai = s(am) && am.indexOf("::") > 0;
                if (ai) { al = am.split("::");
                    ah = al[0];
                    am = al[1]; if ("object" === typeof d[ah] && "function" === typeof d[ah][am]) { d[ah][am].apply(d[ah], ag) } else { if (af) { Y.push(af) } } } else {
                    for (aj = 0; aj < C.length; aj++) {
                        if (s(am)) {
                            ah = C[aj];
                            var an = am.indexOf(".") > 0;
                            if (an) {
                                al = am.split(".");
                                if (ah && "object" === typeof ah[al[0]]) {
                                    ah = ah[al[0]];
                                    am = al[1]
                                } else { if (af) { Y.push(af); break } }
                            }
                            if (ah[am]) { ah[am].apply(ah, ag) } else { var ao = "The method '" + am + '\' was not found in "_paq" variable.  Please have a look at the Piwik tracker documentation: http://developer.piwik.org/api-reference/tracking-javascript';
                                ab(ao); if (!an) { throw new TypeError(ao) } }
                            if (am === "addTracker") { break }
                            if (am === "setTrackerUrl" || am === "setSiteId") { break }
                        } else { am.apply(C[aj], ag) }
                    }
                }
            }
        }

        function ae(ai, ah, ag, af) { if (ai.addEventListener) { ai.addEventListener(ah, ag, af); return true } if (ai.attachEvent) { return ai.attachEvent("on" + ah, ag) } ai["on" + ah] = ag }

        function j(af) { if (A.readyState === "complete") { af() } else { if (N.addEventListener) { N.addEventListener("load", af) } else { if (N.attachEvent) { N.attachEvent("onload", af) } } } }

        function m(ai) {
            var af = false;
            if (A.attachEvent) { af = A.readyState === "complete" } else { af = A.readyState !== "loading" }
            if (af) { ai(); return }
            var ah;
            if (A.addEventListener) { ae(A, "DOMContentLoaded", function ag() { A.removeEventListener("DOMContentLoaded", ag, false); if (!af) { af = true;
                        ai() } }) } else {
                if (A.attachEvent) {
                    A.attachEvent("onreadystatechange", function ag() {
                        if (A.readyState === "complete") {
                            A.detachEvent("onreadystatechange", ag);
                            if (!af) { af = true;
                                ai() }
                        }
                    });
                    if (A.documentElement.doScroll && N === N.top) {
                        (function ag() { if (!af) { try { A.documentElement.doScroll("left") } catch (aj) { setTimeout(ag, 0); return } af = true;
                                ai() } }()) }
                }
            }
            ae(N, "load", function() { if (!af) { af = true;
                    ai() } }, false)
        }

        function U(ag, ak) { var af = "",
                ai, ah, aj; for (ai in a) { if (Object.prototype.hasOwnProperty.call(a, ai)) { ah = a[ai][ag]; if (v(ah)) { aj = ah(ak); if (aj) { af += aj } } } } return af }

        function Z() { var af;
            U("unload"); if (n) { do { af = new Date() } while (af.getTimeAlias() < n) } }

        function k(ah, ag) { var af = A.createElement("script");
            af.type = "text/javascript";
            af.src = ah; if (af.readyState) { af.onreadystatechange = function() { var ai = this.readyState; if (ai === "loaded" || ai === "complete") { af.onreadystatechange = null;
                        ag() } } } else { af.onload = ag } A.getElementsByTagName("head")[0].appendChild(af) }

        function E() { var af = ""; try { af = N.top.document.referrer } catch (ah) { if (N.parent) { try { af = N.parent.document.referrer } catch (ag) { af = "" } } } if (af === "") { af = A.referrer } return af }

        function o(af) {
            var ah = new RegExp("^([a-z]+):"),
                ag = ah.exec(af);
            return ag ? ag[1] : null
        }

        function c(af) { var ah = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
                ag = ah.exec(af); return ag ? ag[1] : af }

        function P(ah, ag) { var af = "[\\?&#]" + ag + "=([^&#]*)"; var aj = new RegExp(af); var ai = aj.exec(ah); return ai ? M(ai[1]) : "" }

        function y(af) { return unescape(p(af)) }

        function ad(av) {
            var ah = function(aB, aA) { return (aB << aA) | (aB >>> (32 - aA)) },
                aw = function(aD) { var aB = "",
                        aC, aA; for (aC = 7; aC >= 0; aC--) { aA = (aD >>> (aC * 4)) & 15;
                        aB += aA.toString(16) } return aB },
                ak, ay, ax, ag = [],
                ao = 1732584193,
                am = 4023233417,
                al = 2562383102,
                aj = 271733878,
                ai = 3285377520,
                au, at, ar, aq, ap, az, af, an = [];
            av = y(av);
            af = av.length;
            for (ay = 0; ay < af - 3; ay += 4) { ax = av.charCodeAt(ay) << 24 | av.charCodeAt(ay + 1) << 16 | av.charCodeAt(ay + 2) << 8 | av.charCodeAt(ay + 3);
                an.push(ax) }
            switch (af & 3) {
                case 0:
                    ay = 2147483648; break;
                case 1:
                    ay = av.charCodeAt(af - 1) << 24 | 8388608; break;
                case 2:
                    ay = av.charCodeAt(af - 2) << 24 | av.charCodeAt(af - 1) << 16 | 32768; break;
                case 3:
                    ay = av.charCodeAt(af - 3) << 24 | av.charCodeAt(af - 2) << 16 | av.charCodeAt(af - 1) << 8 | 128; break } an.push(ay);
            while ((an.length & 15) !== 14) {
                an.push(0)
            }
            an.push(af >>> 29);
            an.push((af << 3) & 4294967295);
            for (ak = 0; ak < an.length; ak += 16) { for (ay = 0; ay < 16; ay++) { ag[ay] = an[ak + ay] } for (ay = 16; ay <= 79; ay++) { ag[ay] = ah(ag[ay - 3] ^ ag[ay - 8] ^ ag[ay - 14] ^ ag[ay - 16], 1) } au = ao;
                at = am;
                ar = al;
                aq = aj;
                ap = ai; for (ay = 0; ay <= 19; ay++) { az = (ah(au, 5) + ((at & ar) | (~at & aq)) + ap + ag[ay] + 1518500249) & 4294967295;
                    ap = aq;
                    aq = ar;
                    ar = ah(at, 30);
                    at = au;
                    au = az } for (ay = 20; ay <= 39; ay++) { az = (ah(au, 5) + (at ^ ar ^ aq) + ap + ag[ay] + 1859775393) & 4294967295;
                    ap = aq;
                    aq = ar;
                    ar = ah(at, 30);
                    at = au;
                    au = az } for (ay = 40; ay <= 59; ay++) { az = (ah(au, 5) + ((at & ar) | (at & aq) | (ar & aq)) + ap + ag[ay] + 2400959708) & 4294967295;
                    ap = aq;
                    aq = ar;
                    ar = ah(at, 30);
                    at = au;
                    au = az } for (ay = 60; ay <= 79; ay++) { az = (ah(au, 5) + (at ^ ar ^ aq) + ap + ag[ay] + 3395469782) & 4294967295;
                    ap = aq;
                    aq = ar;
                    ar = ah(at, 30);
                    at = au;
                    au = az } ao = (ao + au) & 4294967295;
                am = (am + at) & 4294967295;
                al = (al + ar) & 4294967295;
                aj = (aj + aq) & 4294967295;
                ai = (ai + ap) & 4294967295 } az = aw(ao) + aw(am) + aw(al) + aw(aj) + aw(ai);
            return az.toLowerCase()
        }

        function T(ah, af, ag) {
            if (!ah) { ah = "" }
            if (!af) { af = "" }
            if (ah === "translate.googleusercontent.com") {
                if (ag === "") { ag = af } af = P(af, "u");
                ah = c(af)
            } else { if (ah === "cc.bingj.com" || ah === "webcache.googleusercontent.com" || ah.slice(0, 5) === "74.6.") { af = A.links[0].href;
                    ah = c(af) } }
            return [ah, af, ag]
        }

        function F(ag) { var af = ag.length; if (ag.charAt(--af) === ".") { ag = ag.slice(0, af) } if (ag.slice(0, 2) === "*.") { ag = ag.slice(1) } if (ag.indexOf("/") !== -1) { ag = ag.substr(0, ag.indexOf("/")) } return ag }

        function ac(ag) { ag = ag && ag.text ? ag.text : ag; if (!s(ag)) { var af = A.getElementsByTagName("title"); if (af && D(af[0])) { ag = af[0].text } } return ag }

        function J(af) { if (!af) { return [] } if (!D(af.children) && D(af.childNodes)) { return af.children } if (D(af.children)) { return af.children } return [] }

        function O(ag, af) { if (!ag || !af) { return false } if (ag.contains) { return ag.contains(af) } if (ag === af) { return true } if (ag.compareDocumentPosition) { return !!(ag.compareDocumentPosition(af) & 16) } return false }

        function G(ah, ai) {
            if (ah && ah.indexOf) { return ah.indexOf(ai) }
            if (!D(ah) || ah === null) { return -1 }
            if (!ah.length) { return -1 }
            var af = ah.length;
            if (af === 0) { return -1 }
            var ag = 0;
            while (ag < af) {
                if (ah[ag] === ai) { return ag } ag++
            }
            return -1
        }

        function aa(ag, af) { ag = String(ag); return ag.lastIndexOf(af, 0) === 0 }

        function L(ag, af) { ag = String(ag); return ag.indexOf(af, ag.length - af.length) !== -1 }

        function u(ag, af) { ag = String(ag); return ag.indexOf(af) !== -1 }

        function e(ag, af) { ag = String(ag); return ag.substr(0, ag.length - af) }

        function h(ah) {
            if (!ah) { return false }

            function af(aj, ak) { if (N.getComputedStyle) { return A.defaultView.getComputedStyle(aj, null)[ak] } if (aj.currentStyle) { return aj.currentStyle[ak] } }

            function ai(aj) { aj = aj.parentNode; while (aj) { if (aj === A) { return true } aj = aj.parentNode } return false }

            function ag(al, ar, aj, ao, am, ap, an) {
                var ak = al.parentNode,
                    aq = 1;
                if (!ai(al)) { return false }
                if (9 === ak.nodeType) { return true }
                if ("0" === af(al, "opacity") || "none" === af(al, "display") || "hidden" === af(al, "visibility")) { return false }
                if (!D(ar) || !D(aj) || !D(ao) || !D(am) || !D(ap) || !D(an)) { ar = al.offsetTop;
                    am = al.offsetLeft;
                    ao = ar + al.offsetHeight;
                    aj = am + al.offsetWidth;
                    ap = al.offsetWidth;
                    an = al.offsetHeight }
                if (ah === al && (0 === an || 0 === ap) && "hidden" === af(al, "overflow")) {
                    return false
                }
                if (ak) { if (("hidden" === af(ak, "overflow") || "scroll" === af(ak, "overflow"))) { if (am + aq > ak.offsetWidth + ak.scrollLeft || am + ap - aq < ak.scrollLeft || ar + aq > ak.offsetHeight + ak.scrollTop || ar + an - aq < ak.scrollTop) { return false } } if (al.offsetParent === ak) { am += ak.offsetLeft;
                        ar += ak.offsetTop } return ag(ak, ar, aj, ao, am, ap, an) }
                return true
            }
            return ag(ah)
        }
        var W = {
            htmlCollectionToArray: function(ah) { var af = [],
                    ag; if (!ah || !ah.length) { return af } for (ag = 0; ag < ah.length; ag++) { af.push(ah[ag]) } return af },
            find: function(af) { if (!document.querySelectorAll || !af) { return [] } var ag = document.querySelectorAll(af); return this.htmlCollectionToArray(ag) },
            findMultiple: function(ah) { if (!ah || !ah.length) { return [] } var ag, ai; var af = []; for (ag = 0; ag < ah.length; ag++) { ai = this.find(ah[ag]);
                    af = af.concat(ai) } af = this.makeNodesUnique(af); return af },
            findNodesByTagName: function(ag, af) { if (!ag || !af || !ag.getElementsByTagName) { return [] } var ah = ag.getElementsByTagName(af); return this.htmlCollectionToArray(ah) },
            makeNodesUnique: function(af) {
                var ak = [].concat(af);
                af.sort(function(am, al) {
                    if (am === al) {
                        return 0
                    }
                    var ao = G(ak, am);
                    var an = G(ak, al);
                    if (ao === an) { return 0 }
                    return ao > an ? -1 : 1
                });
                if (af.length <= 1) { return af }
                var ag = 0;
                var ai = 0;
                var aj = [];
                var ah;
                ah = af[ag++];
                while (ah) { if (ah === af[ag]) { ai = aj.push(ag) } ah = af[ag++] || null }
                while (ai--) { af.splice(aj[ai], 1) }
                return af
            },
            getAttributeValueFromNode: function(aj, ah) { if (!this.hasNodeAttribute(aj, ah)) { return } if (aj && aj.getAttribute) { return aj.getAttribute(ah) } if (!aj || !aj.attributes) { return } var ai = (typeof aj.attributes[ah]); if ("undefined" === ai) { return } if (aj.attributes[ah].value) { return aj.attributes[ah].value } if (aj.attributes[ah].nodeValue) { return aj.attributes[ah].nodeValue } var ag; var af = aj.attributes; if (!af) { return } for (ag = 0; ag < af.length; ag++) { if (af[ag].nodeName === ah) { return af[ag].nodeValue } } return null },
            hasNodeAttributeWithValue: function(ag, af) { var ah = this.getAttributeValueFromNode(ag, af); return !!ah },
            hasNodeAttribute: function(ah, af) {
                if (ah && ah.hasAttribute) { return ah.hasAttribute(af) }
                if (ah && ah.attributes) { var ag = (typeof ah.attributes[af]); return "undefined" !== ag }
                return false
            },
            hasNodeCssClass: function(ah, af) { if (ah && af && ah.className) { var ag = typeof ah.className === "string" ? ah.className.split(" ") : []; if (-1 !== G(ag, af)) { return true } } return false },
            findNodesHavingAttribute: function(aj, ah, af) { if (!af) { af = [] } if (!aj || !ah) { return af } var ai = J(aj); if (!ai || !ai.length) { return af } var ag, ak; for (ag = 0; ag < ai.length; ag++) { ak = ai[ag]; if (this.hasNodeAttribute(ak, ah)) { af.push(ak) } af = this.findNodesHavingAttribute(ak, ah, af) } return af },
            findFirstNodeHavingAttribute: function(ah, ag) { if (!ah || !ag) { return } if (this.hasNodeAttribute(ah, ag)) { return ah } var af = this.findNodesHavingAttribute(ah, ag); if (af && af.length) { return af[0] } },
            findFirstNodeHavingAttributeWithValue: function(ai, ah) { if (!ai || !ah) { return } if (this.hasNodeAttributeWithValue(ai, ah)) { return ai } var af = this.findNodesHavingAttribute(ai, ah); if (!af || !af.length) { return } var ag; for (ag = 0; ag < af.length; ag++) { if (this.getAttributeValueFromNode(af[ag], ah)) { return af[ag] } } },
            findNodesHavingCssClass: function(aj, ai, af) {
                if (!af) { af = [] }
                if (!aj || !ai) { return af }
                if (aj.getElementsByClassName) {
                    var ak = aj.getElementsByClassName(ai);
                    return this.htmlCollectionToArray(ak)
                }
                var ah = J(aj);
                if (!ah || !ah.length) { return [] }
                var ag, al;
                for (ag = 0; ag < ah.length; ag++) { al = ah[ag]; if (this.hasNodeCssClass(al, ai)) { af.push(al) } af = this.findNodesHavingCssClass(al, ai, af) }
                return af
            },
            findFirstNodeHavingClass: function(ah, ag) { if (!ah || !ag) { return } if (this.hasNodeCssClass(ah, ag)) { return ah } var af = this.findNodesHavingCssClass(ah, ag); if (af && af.length) { return af[0] } },
            isLinkElement: function(ag) { if (!ag) { return false } var af = String(ag.nodeName).toLowerCase(); var ai = ["a", "area"]; var ah = G(ai, af); return ah !== -1 },
            setAnyAttribute: function(ag, af, ah) { if (!ag || !af) { return } if (ag.setAttribute) { ag.setAttribute(af, ah) } else { ag[af] = ah } }
        };
        var r = {
            CONTENT_ATTR: "data-track-content",
            CONTENT_CLASS: "piwikTrackContent",
            CONTENT_NAME_ATTR: "data-content-name",
            CONTENT_PIECE_ATTR: "data-content-piece",
            CONTENT_PIECE_CLASS: "piwikContentPiece",
            CONTENT_TARGET_ATTR: "data-content-target",
            CONTENT_TARGET_CLASS: "piwikContentTarget",
            CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
            CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
            location: undefined,
            findContentNodes: function() {
                var ag = "." + this.CONTENT_CLASS;
                var af = "[" + this.CONTENT_ATTR + "]";
                var ah = W.findMultiple([ag, af]);
                return ah
            },
            findContentNodesWithinNode: function(ai) { if (!ai) { return [] } var ag = W.findNodesHavingCssClass(ai, this.CONTENT_CLASS); var af = W.findNodesHavingAttribute(ai, this.CONTENT_ATTR); if (af && af.length) { var ah; for (ah = 0; ah < af.length; ah++) { ag.push(af[ah]) } } if (W.hasNodeAttribute(ai, this.CONTENT_ATTR)) { ag.push(ai) } else { if (W.hasNodeCssClass(ai, this.CONTENT_CLASS)) { ag.push(ai) } } ag = W.makeNodesUnique(ag); return ag },
            findParentContentNode: function(ag) { if (!ag) { return } var ah = ag; var af = 0; while (ah && ah !== A && ah.parentNode) { if (W.hasNodeAttribute(ah, this.CONTENT_ATTR)) { return ah } if (W.hasNodeCssClass(ah, this.CONTENT_CLASS)) { return ah } ah = ah.parentNode; if (af > 1000) { break } af++ } },
            findPieceNode: function(ag) { var af;
                af = W.findFirstNodeHavingAttribute(ag, this.CONTENT_PIECE_ATTR); if (!af) { af = W.findFirstNodeHavingClass(ag, this.CONTENT_PIECE_CLASS) } if (af) { return af } return ag },
            findTargetNodeNoDefault: function(af) {
                if (!af) { return }
                var ag = W.findFirstNodeHavingAttributeWithValue(af, this.CONTENT_TARGET_ATTR);
                if (ag) { return ag } ag = W.findFirstNodeHavingAttribute(af, this.CONTENT_TARGET_ATTR);
                if (ag) { return ag } ag = W.findFirstNodeHavingClass(af, this.CONTENT_TARGET_CLASS);
                if (ag) { return ag }
            },
            findTargetNode: function(af) { var ag = this.findTargetNodeNoDefault(af); if (ag) { return ag } return af },
            findContentName: function(ag) { if (!ag) { return } var aj = W.findFirstNodeHavingAttributeWithValue(ag, this.CONTENT_NAME_ATTR); if (aj) { return W.getAttributeValueFromNode(aj, this.CONTENT_NAME_ATTR) } var af = this.findContentPiece(ag); if (af) { return this.removeDomainIfIsInLink(af) } if (W.hasNodeAttributeWithValue(ag, "title")) { return W.getAttributeValueFromNode(ag, "title") } var ah = this.findPieceNode(ag); if (W.hasNodeAttributeWithValue(ah, "title")) { return W.getAttributeValueFromNode(ah, "title") } var ai = this.findTargetNode(ag); if (W.hasNodeAttributeWithValue(ai, "title")) { return W.getAttributeValueFromNode(ai, "title") } },
            findContentPiece: function(ag) {
                if (!ag) { return }
                var ai = W.findFirstNodeHavingAttributeWithValue(ag, this.CONTENT_PIECE_ATTR);
                if (ai) {
                    return W.getAttributeValueFromNode(ai, this.CONTENT_PIECE_ATTR)
                }
                var af = this.findPieceNode(ag);
                var ah = this.findMediaUrlInNode(af);
                if (ah) { return this.toAbsoluteUrl(ah) }
            },
            findContentTarget: function(ah) { if (!ah) { return } var ai = this.findTargetNode(ah); if (W.hasNodeAttributeWithValue(ai, this.CONTENT_TARGET_ATTR)) { return W.getAttributeValueFromNode(ai, this.CONTENT_TARGET_ATTR) } var ag; if (W.hasNodeAttributeWithValue(ai, "href")) { ag = W.getAttributeValueFromNode(ai, "href"); return this.toAbsoluteUrl(ag) } var af = this.findPieceNode(ah); if (W.hasNodeAttributeWithValue(af, "href")) { ag = W.getAttributeValueFromNode(af, "href"); return this.toAbsoluteUrl(ag) } },
            isSameDomain: function(af) { if (!af || !af.indexOf) { return false } if (0 === af.indexOf(this.getLocation().origin)) { return true } var ag = af.indexOf(this.getLocation().host); if (8 >= ag && 0 <= ag) { return true } return false },
            removeDomainIfIsInLink: function(ah) { var ag = "^https?://[^/]+"; var af = "^.*//[^/]+"; if (ah && ah.search && -1 !== ah.search(new RegExp(ag)) && this.isSameDomain(ah)) { ah = ah.replace(new RegExp(af), ""); if (!ah) { ah = "/" } } return ah },
            findMediaUrlInNode: function(aj) {
                if (!aj) {
                    return
                }
                var ah = ["img", "embed", "video", "audio"];
                var af = aj.nodeName.toLowerCase();
                if (-1 !== G(ah, af) && W.findFirstNodeHavingAttributeWithValue(aj, "src")) { var ai = W.findFirstNodeHavingAttributeWithValue(aj, "src"); return W.getAttributeValueFromNode(ai, "src") }
                if (af === "object" && W.hasNodeAttributeWithValue(aj, "data")) { return W.getAttributeValueFromNode(aj, "data") }
                if (af === "object") { var ak = W.findNodesByTagName(aj, "param"); if (ak && ak.length) { var ag; for (ag = 0; ag < ak.length; ag++) { if ("movie" === W.getAttributeValueFromNode(ak[ag], "name") && W.hasNodeAttributeWithValue(ak[ag], "value")) { return W.getAttributeValueFromNode(ak[ag], "value") } } } var al = W.findNodesByTagName(aj, "embed"); if (al && al.length) { return this.findMediaUrlInNode(al[0]) } }
            },
            trim: function(af) { if (af && String(af) === af) { return af.replace(/^\s+|\s+$/g, "") } return af },
            isOrWasNodeInViewport: function(ak) {
                if (!ak || !ak.getBoundingClientRect || ak.nodeType !== 1) { return true }
                var aj = ak.getBoundingClientRect();
                var ai = A.documentElement || {};
                var ah = aj.top < 0;
                if (ah && ak.offsetTop) {
                    ah = (ak.offsetTop + aj.height) > 0
                }
                var ag = ai.clientWidth;
                if (N.innerWidth && ag > N.innerWidth) { ag = N.innerWidth }
                var af = ai.clientHeight;
                if (N.innerHeight && af > N.innerHeight) { af = N.innerHeight }
                return ((aj.bottom > 0 || ah) && aj.right > 0 && aj.left < ag && ((aj.top < af) || ah))
            },
            isNodeVisible: function(ag) { var af = h(ag); var ah = this.isOrWasNodeInViewport(ag); return af && ah },
            buildInteractionRequestParams: function(af, ag, ah, ai) { var aj = ""; if (af) { aj += "c_i=" + p(af) } if (ag) { if (aj) { aj += "&" } aj += "c_n=" + p(ag) } if (ah) { if (aj) { aj += "&" } aj += "c_p=" + p(ah) } if (ai) { if (aj) { aj += "&" } aj += "c_t=" + p(ai) } return aj },
            buildImpressionRequestParams: function(af, ag, ah) { var ai = "c_n=" + p(af) + "&c_p=" + p(ag); if (ah) { ai += "&c_t=" + p(ah) } return ai },
            buildContentBlock: function(ah) { if (!ah) { return } var af = this.findContentName(ah); var ag = this.findContentPiece(ah); var ai = this.findContentTarget(ah);
                af = this.trim(af);
                ag = this.trim(ag);
                ai = this.trim(ai); return { name: af || "Unknown", piece: ag || "Unknown", target: ai || "" } },
            collectContent: function(ai) {
                if (!ai || !ai.length) { return [] }
                var ah = [];
                var af, ag;
                for (af = 0; af < ai.length; af++) { ag = this.buildContentBlock(ai[af]); if (D(ag)) { ah.push(ag) } }
                return ah
            },
            setLocation: function(af) { this.location = af },
            getLocation: function() { var af = this.location || N.location; if (!af.origin) { af.origin = af.protocol + "//" + af.hostname + (af.port ? ":" + af.port : "") } return af },
            toAbsoluteUrl: function(ag) { if ((!ag || String(ag) !== ag) && ag !== "") { return ag } if ("" === ag) { return this.getLocation().href } if (ag.search(/^\/\//) !== -1) { return this.getLocation().protocol + ag } if (ag.search(/:\/\//) !== -1) { return ag } if (0 === ag.indexOf("#")) { return this.getLocation().origin + this.getLocation().pathname + ag } if (0 === ag.indexOf("?")) { return this.getLocation().origin + this.getLocation().pathname + ag } if (0 === ag.search("^[a-zA-Z]{2,11}:")) { return ag } if (ag.search(/^\//) !== -1) { return this.getLocation().origin + ag } var af = "(.*/)"; var ah = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(af))[0]; return ah + ag },
            isUrlToCurrentDomain: function(ag) {
                var ah = this.toAbsoluteUrl(ag);
                if (!ah) { return false }
                var af = this.getLocation().origin;
                if (af === ah) { return true }
                if (0 === String(ah).indexOf(af)) { if (":" === String(ah).substr(af.length, 1)) { return false } return true }
                return false
            },
            setHrefAttribute: function(ag, af) { if (!ag || !af) { return } W.setAnyAttribute(ag, "href", af) },
            shouldIgnoreInteraction: function(ah) { var ag = W.hasNodeAttribute(ah, this.CONTENT_IGNOREINTERACTION_ATTR); var af = W.hasNodeCssClass(ah, this.CONTENT_IGNOREINTERACTION_CLASS); return ag || af }
        };

        function I(ag, aj) { if (aj) { return aj } if (u(ag, "?")) { var ai = ag.indexOf("?");
                ag = ag.slice(0, ai) } if (L(ag, "piwik.php")) { ag = e(ag, "piwik.php".length) } else { if (L(ag, ".php")) { var af = ag.lastIndexOf("/"); var ah = 1;
                    ag = ag.slice(0, af + ah) } } if (L(ag, "/js/")) { ag = e(ag, "js/".length) } return ag }

        function H(al) {
            var an = "Piwik_Overlay";
            var ag = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$");
            var ah = ag.exec(A.referrer);
            if (ah) {
                var aj = ah[1];
                if (aj !== String(al)) { return false }
                var ak = ah[2],
                    af = ah[3],
                    ai = ah[4];
                if (!ai) { ai = "" } else {
                    if (ai.indexOf("&segment=") === 0) {
                        ai = ai.substr("&segment=".length)
                    }
                }
                N.name = an + "###" + ak + "###" + af + "###" + ai
            }
            var am = N.name.split("###");
            return am.length === 4 && am[0] === an
        }

        function S(ag, am, ai) { var al = N.name.split("###"),
                ak = al[1],
                af = al[2],
                aj = al[3],
                ah = I(ag, am);
            k(ah + "plugins/Overlay/client/client.js?v=1", function() { Piwik_Overlay_Client.initialize(ah, ai, ak, af, aj) }) }

        function q() { var ah; try { ah = N.frameElement } catch (ag) { return true } if (D(ah)) { return (ah && String(ah.nodeName).toLowerCase() === "iframe") ? true : false } try { return N.self !== N.top } catch (af) { return true } }

        function K(bN, bH) {
            var bD = T(A.domain, N.location.href, E()),
                cm = F(bD[0]),
                bn = l(bD[1]),
                a2 = l(bD[2]),
                ck = false,
                bR = "GET",
                cy = bR,
                au = "application/x-www-form-urlencoded; charset=UTF-8",
                b3 = au,
                ap = bN || "",
                bi = "",
                cq = "",
                bF = bH || "",
                bb = "",
                bo = "",
                aN, aY = "",
                cv = ["7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js", "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip"],
                al = [cm],
                bc = [],
                bl = [],
                aQ = [],
                bj = 500,
                cd, aO, br, bp, af, bZ = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"],
                bh = ["pk_kwd", "piwik_kwd", "utm_term"],
                aZ = "_pk_",
                co, a4, a0 = false,
                ci, aV, a8, ce = 33955200000,
                bX = 1800000,
                cu = 15768000000,
                aL = true,
                bV = 0,
                bq = false,
                aA = false,
                bK, bv = {},
                bU = {},
                a1 = {},
                a7 = 200,
                cr = {},
                cw = {},
                bJ = [],
                bO = false,
                b7 = false,
                ag = false,
                cx = false,
                ay = false,
                aU = q(),
                cp = null,
                bL, aB, bd, bG = ad,
                a3, av;
            try { aY = A.title } catch (b5) { aY = "" }

            function cB(cL, cI, cH, cK, cG, cJ) { if (a0) { return } var cF; if (cH) { cF = new Date();
                    cF.setTime(cF.getTime() + cH) } A.cookie = cL + "=" + p(cI) + (cH ? ";expires=" + cF.toGMTString() : "") + ";path=" + (cK || "/") + (cG ? ";domain=" + cG : "") + (cJ ? ";secure" : "") }

            function ao(cH) { if (a0) { return 0 } var cF = new RegExp("(^|;)[ ]*" + cH + "=([^;]*)"),
                    cG = cF.exec(A.cookie); return cG ? M(cG[2]) : 0 }

            function bB(cF) { var cG; if (bp) { cG = new RegExp("#.*"); return cF.replace(cG, "") } return cF }

            function bu(cH, cF) { var cI = o(cF),
                    cG; if (cI) { return cF } if (cF.slice(0, 1) === "/") { return o(cH) + "://" + c(cH) + cF } cH = bB(cH);
                cG = cH.indexOf("?"); if (cG >= 0) { cH = cH.slice(0, cG) } cG = cH.lastIndexOf("/"); if (cG !== cH.length - 1) { cH = cH.slice(0, cG + 1) } return cH + cF }

            function cb(cH, cF) { var cG;
                cH = String(cH).toLowerCase();
                cF = String(cF).toLowerCase(); if (cH === cF) { return true } if (cF.slice(0, 1) === ".") { if (cH === cF.slice(1)) { return true } cG = cH.length - cF.length; if ((cG > 0) && (cH.slice(cG) === cF)) { return true } } return false }

            function bT(cF) {
                var cG = document.createElement("a");
                if (cF.indexOf("//") !== 0 && cF.indexOf("http") !== 0) {
                    if (cF.indexOf("*") === 0) {
                        cF = cF.substr(1)
                    }
                    if (cF.indexOf(".") === 0) { cF = cF.substr(1) } cF = "http://" + cF
                }
                cG.href = r.toAbsoluteUrl(cF);
                if (cG.pathname) { return cG.pathname }
                return ""
            }

            function aM(cG, cF) { if (!aa(cF, "/")) { cF = "/" + cF } if (!aa(cG, "/")) { cG = "/" + cG } var cH = (cF === "/" || cF === "/*"); if (cH) { return true } if (cG === cF) { return true } cF = String(cF).toLowerCase();
                cG = String(cG).toLowerCase(); if (L(cF, "*")) { cF = cF.slice(0, -1);
                    cH = (!cF || cF === "/"); if (cH) { return true } if (cG === cF) { return true } return cG.indexOf(cF) === 0 } if (!L(cG, "/")) { cG += "/" } if (!L(cF, "/")) { cF += "/" } return cG.indexOf(cF) === 0 }

            function ai(cJ, cL) { var cG, cF, cH, cI, cK; for (cG = 0; cG < al.length; cG++) { cI = F(al[cG]);
                    cK = bT(al[cG]); if (cb(cJ, cI) && aM(cL, cK)) { return true } } return false }

            function aF(cI) { var cG, cF, cH; for (cG = 0; cG < al.length; cG++) { cF = F(al[cG].toLowerCase()); if (cI === cF) { return true } if (cF.slice(0, 1) === ".") { if (cI === cF.slice(1)) { return true } cH = cI.length - cF.length; if ((cH > 0) && (cI.slice(cH) === cF)) { return true } } } return false }

            function bY(cF, cH) {
                var cG = new Image(1, 1);
                cG.onload = function() {
                    z = 0;
                    if (typeof cH === "function") {
                        cH()
                    }
                };
                cF = cF.replace("send_image=0", "send_image=1");
                cG.src = ap + (ap.indexOf("?") < 0 ? "?" : "&") + cF
            }

            function ct(cG, cJ, cF) { if (!D(cF) || null === cF) { cF = true } try { var cI = N.XMLHttpRequest ? new N.XMLHttpRequest() : N.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                    cI.open("POST", ap, true);
                    cI.onreadystatechange = function() { if (this.readyState === 4 && !(this.status >= 200 && this.status < 300) && cF) { bY(cG, cJ) } else { if (this.readyState === 4 && (typeof cJ === "function")) { cJ() } } };
                    cI.setRequestHeader("Content-Type", b3);
                    cI.send(cG) } catch (cH) { if (cF) { bY(cG, cJ) } } }

            function bP(cG) { var cF = new Date(); var cH = cF.getTime() + cG; if (!n || cH > n) { n = cH } }

            function bW(cF) { if (bL || !aO) { return } bL = setTimeout(function cG() { bL = null; if (!aU) { aU = (!A.hasFocus || A.hasFocus()) } if (!aU) { bW(aO); return } if (br()) { return } var cH = new Date(),
                        cI = aO - (cH.getTime() - cp);
                    cI = Math.min(aO, cI);
                    bW(cI) }, cF || aO) }

            function bk() { if (!bL) { return } clearTimeout(bL);
                bL = null }

            function aS() { aU = true; if (br()) { return } bW() }

            function am() { bk() }

            function cD() {
                if (ay || !aO) { return } ay = true;
                ae(N, "focus", aS);
                ae(N, "blur", am);
                bW()
            }

            function b8(cJ) { var cG = new Date(); var cF = cG.getTime();
                cp = cF; if (b7 && cF < b7) { var cH = b7 - cF;
                    setTimeout(cJ, cH);
                    bP(cH + 50);
                    b7 += 50; return } if (b7 === false) { var cI = 800;
                    b7 = cF + cI } cJ() }

            function bg(cG, cF, cH) { if (!ci && cG) { b8(function() { if (cy === "POST") { ct(cG, cH) } else { bY(cG, cH) } bP(cF) }) } if (!ay) { cD() } else { bW() } }

            function bS(cF) { if (ci) { return false } return (cF && cF.length) }

            function cC(cH, cF) { if (!bS(cH)) { return } var cG = '{"requests":["?' + cH.join('","?') + '"]}';
                b8(function() { ct(cG, null, false);
                    bP(cF) }) }

            function aD(cF) { return aZ + cF + "." + bF + "." + a3 }

            function bE() { if (a0) { return "0" } if (!D(f.cookieEnabled)) { var cF = aD("testcookie");
                    cB(cF, "1"); return ao(cF) === "1" ? "1" : "0" } return f.cookieEnabled ? "1" : "0" }

            function aX() { a3 = bG((co || cm) + (a4 || "/")).slice(0, 4) }

            function bw() { var cG = aD("cvar"),
                    cF = ao(cG); if (cF.length) { cF = JSON_PIWIK.parse(cF); if (Q(cF)) { return cF } } return {} }

            function b9() { if (aA === false) { aA = bw() } }

            function cj() {
                return bG((f.userAgent || "") + (f.platform || "") + JSON_PIWIK.stringify(cw) + (new Date()).getTime() + Math.random()).slice(0, 16)
            }

            function cg() { var cH = new Date(),
                    cF = Math.round(cH.getTime() / 1000),
                    cG = aD("id"),
                    cK = ao(cG),
                    cJ, cI; if (cK) { cJ = cK.split(".");
                    cJ.unshift("0"); if (bo.length) { cJ[1] = bo } return cJ } if (bo.length) { cI = bo } else { if ("0" === bE()) { cI = "" } else { cI = cj() } } cJ = ["1", cI, cF, 0, cF, "", ""]; return cJ }

            function aH() { var cM = cg(),
                    cI = cM[0],
                    cJ = cM[1],
                    cG = cM[2],
                    cF = cM[3],
                    cK = cM[4],
                    cH = cM[5]; if (!D(cM[6])) { cM[6] = "" } var cL = cM[6]; return { newVisitor: cI, uuid: cJ, createTs: cG, visitCount: cF, currentVisitTs: cK, lastVisitTs: cH, lastEcommerceOrderTs: cL } }

            function at() { var cI = new Date(),
                    cG = cI.getTime(),
                    cJ = aH().createTs; var cF = parseInt(cJ, 10); var cH = (cF * 1000) + ce - cG; return cH }

            function aw(cF) { if (!bF) { return } var cH = new Date(),
                    cG = Math.round(cH.getTime() / 1000); if (!D(cF)) { cF = aH() } var cI = cF.uuid + "." + cF.createTs + "." + cF.visitCount + "." + cG + "." + cF.lastVisitTs + "." + cF.lastEcommerceOrderTs;
                cB(aD("id"), cI, at(), a4, co) }

            function bm() { var cF = ao(aD("ref")); if (cF.length) { try { cF = JSON_PIWIK.parse(cF); if (Q(cF)) { return cF } } catch (cG) {} } return ["", "", 0, ""] }

            function bx(cH, cG, cF) {
                cB(cH, "", -86400, cG, cF)
            }

            function a9(cG) { var cF = "testvalue";
                cB("test", cF, 10000, null, cG); if (ao("test") === cF) { bx("test", null, cG); return true } return false }

            function aq() { var cH = a0;
                a0 = false; var cF = ["id", "ses", "cvar", "ref"]; var cG, cI; for (cG = 0; cG < cF.length; cG++) { cI = aD(cF[cG]); if (0 !== ao(cI)) { bx(cI, a4, co) } } a0 = cH }

            function bC(cF) { bF = cF;
                aw() }

            function cE(cJ) { if (!cJ || !Q(cJ)) { return } var cI = []; var cH; for (cH in cJ) { if (Object.prototype.hasOwnProperty.call(cJ, cH)) { cI.push(cH) } } var cK = {};
                cI.sort(); var cF = cI.length; var cG; for (cG = 0; cG < cF; cG++) { cK[cI[cG]] = cJ[cI[cG]] } return cK }

            function bM() { cB(aD("ses"), "*", bX, a4, co) }

            function aW() { var cI = ""; var cG = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"; var cH = cG.length; var cF; for (cF = 0; cF < 6; cF++) { cI += cG.charAt(Math.floor(Math.random() * cH)) } return cI }

            function b0(cH, c2, c3, cI) {
                var c1, cG = new Date(),
                    cP = Math.round(cG.getTime() / 1000),
                    cM, c0, cJ = 1024,
                    c8, cQ, cY = aA,
                    cK = aD("ses"),
                    cW = aD("ref"),
                    cT = aD("cvar"),
                    cU = ao(cK),
                    cZ = bm(),
                    c5 = aN || bn,
                    cN, cF;
                if (a0) { aq() }
                if (ci) { return "" }
                var cV = aH();
                if (!D(cI)) {
                    cI = ""
                }
                var cS = A.characterSet || A.charset;
                if (!cS || cS.toLowerCase() === "utf-8") { cS = null } cN = cZ[0];
                cF = cZ[1];
                cM = cZ[2];
                c0 = cZ[3];
                if (!cU) { var c4 = bX / 1000; if (!cV.lastVisitTs || (cP - cV.lastVisitTs) > c4) { cV.visitCount++;
                        cV.lastVisitTs = cV.currentVisitTs } if (!a8 || !cN.length) { for (c1 in bZ) { if (Object.prototype.hasOwnProperty.call(bZ, c1)) { cN = P(c5, bZ[c1]); if (cN.length) { break } } } for (c1 in bh) { if (Object.prototype.hasOwnProperty.call(bh, c1)) { cF = P(c5, bh[c1]); if (cF.length) { break } } } } c8 = c(a2);
                    cQ = c0.length ? c(c0) : ""; if (c8.length && !aF(c8) && (!a8 || !cQ.length || aF(cQ))) { c0 = a2 } if (c0.length || cN.length) { cM = cP;
                        cZ = [cN, cF, cM, bB(c0.slice(0, cJ))];
                        cB(cW, JSON_PIWIK.stringify(cZ), cu, a4, co) } } cH += "&idsite=" + bF + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + cG.getHours() + "&m=" + cG.getMinutes() + "&s=" + cG.getSeconds() + "&url=" + p(bB(c5)) + (a2.length ? "&urlref=" + p(bB(a2)) : "") + ((bb && bb.length) ? "&uid=" + p(bb) : "") + "&_id=" + cV.uuid + "&_idts=" + cV.createTs + "&_idvc=" + cV.visitCount + "&_idn=" + cV.newVisitor + (cN.length ? "&_rcn=" + p(cN) : "") + (cF.length ? "&_rck=" + p(cF) : "") + "&_refts=" + cM + "&_viewts=" + cV.lastVisitTs + (String(cV.lastEcommerceOrderTs).length ? "&_ects=" + cV.lastEcommerceOrderTs : "") + (String(c0).length ? "&_ref=" + p(bB(c0.slice(0, cJ))) : "") + (cS ? "&cs=" + p(cS) : "") + "&send_image=0";
                for (c1 in cw) { if (Object.prototype.hasOwnProperty.call(cw, c1)) { cH += "&" + c1 + "=" + cw[c1] } }
                var c7 = [];
                if (c2) { for (c1 in c2) { if (Object.prototype.hasOwnProperty.call(c2, c1) && /^dimension\d+$/.test(c1)) { var cL = c1.replace("dimension", "");
                            c7.push(parseInt(cL, 10));
                            c7.push(String(cL));
                            cH += "&" + c1 + "=" + c2[c1];
                            delete c2[c1] } } }
                if (c2 && w(c2)) { c2 = null }
                for (c1 in a1) { if (Object.prototype.hasOwnProperty.call(a1, c1)) { var cR = (-1 === G(c7, c1)); if (cR) { cH += "&dimension" + c1 + "=" + a1[c1] } } }
                if (c2) { cH += "&data=" + p(JSON_PIWIK.stringify(c2)) } else { if (af) { cH += "&data=" + p(JSON_PIWIK.stringify(af)) } }

                function cO(c9, da) { var db = JSON_PIWIK.stringify(c9); if (db.length > 2) { return "&" + da + "=" + p(db) } return "" }
                var c6 = cE(bv);
                var cX = cE(bU);
                cH += cO(c6, "cvar");
                cH += cO(cX, "e_cvar");
                if (aA) { cH += cO(aA, "_cvar"); for (c1 in cY) { if (Object.prototype.hasOwnProperty.call(cY, c1)) { if (aA[c1][0] === "" || aA[c1][1] === "") { delete aA[c1] } } } if (bq) { cB(cT, JSON_PIWIK.stringify(aA), bX, a4, co) } }
                if (aL) {
                    if (bV) { cH += "&gt_ms=" + bV } else {
                        if (g && g.timing && g.timing.requestStart && g.timing.responseEnd) {
                            cH += "&gt_ms=" + (g.timing.responseEnd - g.timing.requestStart)
                        }
                    }
                }
                if (av) { cH += "&pv_id=" + av } cV.lastEcommerceOrderTs = D(cI) && String(cI).length ? cI : cV.lastEcommerceOrderTs;
                aw(cV);
                bM();
                cH += U(c3);
                if (cq.length) { cH += "&" + cq }
                if (v(bK)) { cH = bK(cH) }
                return cH
            }
            br = function aP() { var cF = new Date(); if (cp + aO <= cF.getTime()) { var cG = b0("ping=1", null, "ping");
                    bg(cG, bj); return true } return false };

            function a5(cI, cH, cN, cJ, cF, cQ) {
                var cL = "idgoal=0",
                    cM, cG = new Date(),
                    cO = [],
                    cP, cK = String(cI).length;
                if (cK) { cL += "&ec_id=" + p(cI);
                    cM = Math.round(cG.getTime() / 1000) } cL += "&revenue=" + cH;
                if (String(cN).length) { cL += "&ec_st=" + cN }
                if (String(cJ).length) { cL += "&ec_tx=" + cJ }
                if (String(cF).length) { cL += "&ec_sh=" + cF }
                if (String(cQ).length) { cL += "&ec_dt=" + cQ }
                if (cr) { for (cP in cr) { if (Object.prototype.hasOwnProperty.call(cr, cP)) { if (!D(cr[cP][1])) { cr[cP][1] = "" } if (!D(cr[cP][2])) { cr[cP][2] = "" } if (!D(cr[cP][3]) || String(cr[cP][3]).length === 0) { cr[cP][3] = 0 } if (!D(cr[cP][4]) || String(cr[cP][4]).length === 0) { cr[cP][4] = 1 } cO.push(cr[cP]) } } cL += "&ec_items=" + p(JSON_PIWIK.stringify(cO)) } cL = b0(cL, af, "ecommerce", cM);
                bg(cL, bj);
                if (cK) {
                    cr = {}
                }
            }

            function by(cF, cJ, cI, cH, cG, cK) { if (String(cF).length && D(cJ)) { a5(cF, cJ, cI, cH, cG, cK) } }

            function a6(cF) { if (D(cF)) { a5("", cF, "", "", "", "") } }

            function bz(cG, cI, cH) { av = aW(); var cF = b0("action_name=" + p(ac(cG || aY)), cI, "log");
                bg(cF, bj, cH) }

            function aJ(cH, cG) { var cI, cF = "(^| )(piwik[_-]" + cG; if (cH) { for (cI = 0; cI < cH.length; cI++) { cF += "|" + cH[cI] } } cF += ")( |$)"; return new RegExp(cF) }

            function aE(cF) { return (ap && cF && 0 === String(cF).indexOf(ap)) }

            function b1(cJ, cF, cK, cG) { if (aE(cF)) { return 0 } var cI = aJ(bl, "download"),
                    cH = aJ(aQ, "link"),
                    cL = new RegExp("\\.(" + cv.join("|") + ")([?&#]|$)", "i"); if (cH.test(cJ)) { return "link" } if (cG || cI.test(cJ) || cL.test(cF)) { return "download" } if (cK) { return 0 } return "link" }

            function aj(cG) { var cF;
                cF = cG.parentNode; while (cF !== null && D(cF)) { if (W.isLinkElement(cG)) { break } cG = cF;
                    cF = cG.parentNode } return cG }

            function cz(cK) {
                cK = aj(cK);
                if (!W.hasNodeAttribute(cK, "href")) { return }
                if (!D(cK.href)) { return }
                var cJ = W.getAttributeValueFromNode(cK, "href");
                if (aE(cJ)) { return }
                var cG = cK.pathname || bT(cK.href);
                var cL = cK.hostname || c(cK.href);
                var cM = cL.toLowerCase();
                var cH = cK.href.replace(cL, cM);
                var cI = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):", "i");
                if (!cI.test(cH)) { var cF = b1(cK.className, cH, ai(cM, cG), W.hasNodeAttribute(cK, "download")); if (cF) { return { type: cF, href: cH } } }
            }

            function az(cF, cG, cH, cI) { var cJ = r.buildInteractionRequestParams(cF, cG, cH, cI); if (!cJ) { return } return b0(cJ, null, "contentInteraction") }

            function cf(cH, cI, cM, cF, cG) { if (!D(cH)) { return } if (aE(cH)) { return cH } var cK = r.toAbsoluteUrl(cH); var cJ = "redirecturl=" + p(cK) + "&";
                cJ += az(cI, cM, cF, (cG || cH)); var cL = "&"; if (ap.indexOf("?") < 0) { cL = "?" } return ap + cL + cJ }

            function aT(cF, cG) { if (!cF || !cG) { return false } var cH = r.findTargetNode(cF); if (r.shouldIgnoreInteraction(cH)) { return false } cH = r.findTargetNodeNoDefault(cF); if (cH && !O(cH, cG)) { return false } return true }

            function b2(cH, cG, cJ) {
                if (!cH) { return }
                var cF = r.findParentContentNode(cH);
                if (!cF) { return }
                if (!aT(cF, cH)) { return }
                var cI = r.buildContentBlock(cF);
                if (!cI) { return }
                if (!cI.target && cJ) { cI.target = cJ }
                return r.buildInteractionRequestParams(cG, cI.name, cI.piece, cI.target)
            }

            function aG(cG) { if (!bJ || !bJ.length) { return false } var cF, cH; for (cF = 0; cF < bJ.length; cF++) { cH = bJ[cF]; if (cH && cH.name === cG.name && cH.piece === cG.piece && cH.target === cG.target) { return true } } return false }

            function bf(cI) { if (!cI) { return false } var cL = r.findTargetNode(cI); if (!cL || r.shouldIgnoreInteraction(cL)) { return false } var cM = cz(cL); if (cx && cM && cM.type) { return false } if (W.isLinkElement(cL) && W.hasNodeAttributeWithValue(cL, "href")) { var cF = String(W.getAttributeValueFromNode(cL, "href")); if (0 === cF.indexOf("#")) { return false } if (aE(cF)) { return true } if (!r.isUrlToCurrentDomain(cF)) { return false } var cJ = r.buildContentBlock(cI); if (!cJ) { return } var cH = cJ.name; var cN = cJ.piece; var cK = cJ.target; if (!W.hasNodeAttributeWithValue(cL, r.CONTENT_TARGET_ATTR) || cL.wasContentTargetAttrReplaced) { cL.wasContentTargetAttrReplaced = true;
                        cK = r.toAbsoluteUrl(cF);
                        W.setAnyAttribute(cL, r.CONTENT_TARGET_ATTR, cK) } var cG = cf(cF, "click", cH, cN, cK);
                    r.setHrefAttribute(cL, cG); return true } return false }

            function ax(cG) {
                if (!cG || !cG.length) { return }
                var cF;
                for (cF = 0; cF < cG.length; cF++) { bf(cG[cF]) }
            }

            function aI(cF) { return function(cG) { if (!cF) { return } var cJ = r.findParentContentNode(cF); var cK; if (cG) { cK = cG.target || cG.srcElement } if (!cK) { cK = cF } if (!aT(cJ, cK)) { return } bP(bj); if (W.isLinkElement(cF) && W.hasNodeAttributeWithValue(cF, "href") && W.hasNodeAttributeWithValue(cF, r.CONTENT_TARGET_ATTR)) { var cH = W.getAttributeValueFromNode(cF, "href"); if (!aE(cH) && cF.wasContentTargetAttrReplaced) { W.setAnyAttribute(cF, r.CONTENT_TARGET_ATTR, "") } } var cO = cz(cF); if (ag && cO && cO.type) { return cO.type } if (bf(cJ)) { return "href" } var cL = r.buildContentBlock(cJ); if (!cL) { return } var cI = cL.name; var cP = cL.piece; var cN = cL.target; var cM = az("click", cI, cP, cN);
                    bg(cM, bj); return cM } }

            function bA(cH) { if (!cH || !cH.length) { return } var cF, cG; for (cF = 0; cF < cH.length; cF++) { cG = r.findTargetNode(cH[cF]); if (cG && !cG.contentInteractionTrackingSetupDone) { cG.contentInteractionTrackingSetupDone = true;
                        ae(cG, "click", aI(cG)) } } }

            function ba(cH, cI) {
                if (!cH || !cH.length) { return [] }
                var cF, cG;
                for (cF = 0; cF < cH.length; cF++) {
                    if (aG(cH[cF])) {
                        cH.splice(cF, 1);
                        cF--
                    } else { bJ.push(cH[cF]) }
                }
                if (!cH || !cH.length) { return [] } ax(cI);
                bA(cI);
                var cJ = [];
                for (cF = 0; cF < cH.length; cF++) { cG = b0(r.buildImpressionRequestParams(cH[cF].name, cH[cF].piece, cH[cF].target), undefined, "contentImpressions"); if (cG) { cJ.push(cG) } }
                return cJ
            }

            function b6(cG) { var cF = r.collectContent(cG); return ba(cF, cG) }

            function aR(cG) { if (!cG || !cG.length) { return [] } var cF; for (cF = 0; cF < cG.length; cF++) { if (!r.isNodeVisible(cG[cF])) { cG.splice(cF, 1);
                        cF-- } } if (!cG || !cG.length) { return [] } return b6(cG) }

            function ar(cH, cF, cG) { var cI = r.buildImpressionRequestParams(cH, cF, cG); return b0(cI, null, "contentImpression") }

            function cA(cI, cG) { if (!cI) { return } var cF = r.findParentContentNode(cI); var cH = r.buildContentBlock(cF); if (!cH) { return } if (!cG) { cG = "Unknown" } return az(cG, cH.name, cH.piece, cH.target) }

            function ch(cG, cI, cF, cH) { return "e_c=" + p(cG) + "&e_a=" + p(cI) + (D(cF) ? "&e_n=" + p(cF) : "") + (D(cH) ? "&e_v=" + p(cH) : "") }

            function ak(cH, cJ, cF, cI, cL, cK) {
                if (String(cH).length === 0 || String(cJ).length === 0) { return false }
                var cG = b0(ch(cH, cJ, cF, cI), cL, "event");
                bg(cG, bj, cK)
            }

            function bI(cF, cI, cG, cJ) { var cH = b0("search=" + p(cF) + (cI ? "&search_cat=" + p(cI) : "") + (D(cG) ? "&search_count=" + cG : ""), cJ, "sitesearch");
                bg(cH, bj) }

            function cl(cF, cI, cH) { var cG = b0("idgoal=" + cF + (cI ? "&revenue=" + cI : ""), cH, "goal");
                bg(cG, bj) }

            function cs(cI, cF, cM, cL, cH) { var cK = cF + "=" + p(bB(cI)); var cG = b2(cH, "click", cI); if (cG) { cK += "&" + cG } var cJ = b0(cK, cM, "link");
                bg(cJ, bj, cL) }

            function bs(cG, cF) { if (cG !== "") { return cG + cF.charAt(0).toUpperCase() + cF.slice(1) } return cF }

            function bQ(cK) { var cJ, cF, cI = ["", "webkit", "ms", "moz"],
                    cH; if (!aV) { for (cF = 0; cF < cI.length; cF++) { cH = cI[cF]; if (Object.prototype.hasOwnProperty.call(A, bs(cH, "hidden"))) { if (A[bs(cH, "visibilityState")] === "prerender") { cJ = true } break } } } if (cJ) { ae(A, cH + "visibilitychange", function cG() { A.removeEventListener(cH + "visibilitychange", cG, false);
                        cK() }); return } cK() }

            function cc(cF) { var cG = cz(cF); if (cG && cG.type) { cG.href = l(cG.href);
                    cs(cG.href, cG.type, undefined, null, cF) } }

            function b4() { return A.all && !A.addEventListener }

            function cn(cF) {
                var cH = cF.which;
                var cG = (typeof cF.button);
                if (!cH && cG !== "undefined") { if (b4()) { if (cF.button & 1) { cH = 1 } else { if (cF.button & 2) { cH = 3 } else { if (cF.button & 4) { cH = 2 } } } } else { if (cF.button === 0 || cF.button === "0") { cH = 1 } else { if (cF.button & 1) { cH = 2 } else { if (cF.button & 2) { cH = 3 } } } } }
                return cH
            }

            function bt(cF) { switch (cn(cF)) {
                    case 1:
                        return "left";
                    case 2:
                        return "middle";
                    case 3:
                        return "right" } }

            function aK(cF) { return cF.target || cF.srcElement }

            function an(cF) { return function(cI) { cI = cI || N.event; var cH = bt(cI); var cJ = aK(cI); if (cI.type === "click") { var cG = false; if (cF && cH === "middle") { cG = true } if (cJ && !cG) { cc(cJ) } } else { if (cI.type === "mousedown") { if (cH === "middle" && cJ) { aB = cH;
                                bd = cJ } else { aB = bd = null } } else { if (cI.type === "mouseup") { if (cH === aB && cJ === bd) { cc(cJ) } aB = bd = null } else { if (cI.type === "contextmenu") { cc(cJ) } } } } } }

            function ah(cH, cG) { var cF = typeof cG; if (cF === "undefined") { cG = true } ae(cH, "click", an(cG), false); if (cG) { ae(cH, "mouseup", an(cG), false);
                    ae(cH, "mousedown", an(cG), false);
                    ae(cH, "contextmenu", an(cG), false) } }

            function be(cG) {
                if (!ag) {
                    ag = true;
                    var cH, cF = aJ(bc, "ignore"),
                        cI = A.links;
                    if (cI) {
                        for (cH = 0; cH < cI.length; cH++) { if (!cF.test(cI[cH].className)) { ah(cI[cH], cG) } }
                    }
                }
            }

            function aC(cH, cJ, cK) { if (bO) { return true } bO = true; var cL = false; var cI, cG;

                function cF() { cL = true } j(function() {
                    function cM(cO) { setTimeout(function() { if (!bO) { return } cL = false;
                            cK.trackVisibleContentImpressions();
                            cM(cO) }, cO) }

                    function cN(cO) { setTimeout(function() { if (!bO) { return } if (cL) { cL = false;
                                cK.trackVisibleContentImpressions() } cN(cO) }, cO) } if (cH) { cI = ["scroll", "resize"]; for (cG = 0; cG < cI.length; cG++) { if (A.addEventListener) { A.addEventListener(cI[cG], cF) } else { N.attachEvent("on" + cI[cG], cF) } } cN(100) } if (cJ && cJ > 0) { cJ = parseInt(cJ, 10);
                        cM(cJ) } }) }

            function ca() {
                var cG, cI, cJ = { pdf: "application/pdf", qt: "video/quicktime", realp: "audio/x-pn-realaudio-plugin", wma: "application/x-mplayer2", dir: "application/x-director", fla: "application/x-shockwave-flash", java: "application/x-java-vm", gears: "application/x-googlegears", ag: "application/x-silverlight" };
                if (!((new RegExp("MSIE")).test(f.userAgent))) {
                    if (f.mimeTypes && f.mimeTypes.length) {
                        for (cG in cJ) {
                            if (Object.prototype.hasOwnProperty.call(cJ, cG)) {
                                cI = f.mimeTypes[cJ[cG]];
                                cw[cG] = (cI && cI.enabledPlugin) ? "1" : "0"
                            }
                        }
                    }
                    if (typeof navigator.javaEnabled !== "unknown" && D(f.javaEnabled) && f.javaEnabled()) { cw.java = "1" }
                    if (v(N.GearsFactory)) { cw.gears = "1" } cw.cookie = bE()
                }
                var cH = parseInt(R.width, 10);
                var cF = parseInt(R.height, 10);
                cw.res = parseInt(cH, 10) + "x" + parseInt(cF, 10)
            }
            ca();
            aX();
            aw();
            this.getVisitorId = function() { return aH().uuid };
            this.getVisitorInfo = function() { return cg() };
            this.getAttributionInfo = function() { return bm() };
            this.getAttributionCampaignName = function() { return bm()[0] };
            this.getAttributionCampaignKeyword = function() { return bm()[1] };
            this.getAttributionReferrerTimestamp = function() { return bm()[2] };
            this.getAttributionReferrerUrl = function() { return bm()[3] };
            this.setTrackerUrl = function(cF) { ap = cF };
            this.getTrackerUrl = function() { return ap };
            this.addTracker = function(cF, cH) { if (!cH) { throw new Error("A siteId must be given to add a new tracker") } if (!D(cF) || null === cF) { cF = this.getTrackerUrl() } var cG = new K(cF, cH);
                C.push(cG); return cG };
            this.getSiteId = function() { return bF };
            this.setSiteId = function(cF) {
                bC(cF)
            };
            this.setUserId = function(cF) { if (!D(cF) || !cF.length) { return } bb = cF;
                bo = bG(bb).substr(0, 16) };
            this.getUserId = function() { return bb };
            this.setCustomData = function(cF, cG) { if (Q(cF)) { af = cF } else { if (!af) { af = {} } af[cF] = cG } };
            this.getCustomData = function() { return af };
            this.setCustomRequestProcessing = function(cF) { bK = cF };
            this.appendToTrackingUrl = function(cF) { cq = cF };
            this.getRequest = function(cF) { return b0(cF) };
            this.addPlugin = function(cF, cG) { a[cF] = cG };
            this.setCustomDimension = function(cF, cG) { cF = parseInt(cF, 10); if (cF > 0) { if (!D(cG)) { cG = "" } if (!s(cG)) { cG = String(cG) } a1[cF] = cG } };
            this.getCustomDimension = function(cF) { cF = parseInt(cF, 10); if (cF > 0 && Object.prototype.hasOwnProperty.call(a1, cF)) { return a1[cF] } };
            this.deleteCustomDimension = function(cF) { cF = parseInt(cF, 10); if (cF > 0) { delete a1[cF] } };
            this.setCustomVariable = function(cG, cF, cJ, cH) {
                var cI;
                if (!D(cH)) { cH = "visit" }
                if (!D(cF)) { return }
                if (!D(cJ)) { cJ = "" }
                if (cG > 0) {
                    cF = !s(cF) ? String(cF) : cF;
                    cJ = !s(cJ) ? String(cJ) : cJ;
                    cI = [cF.slice(0, a7), cJ.slice(0, a7)];
                    if (cH === "visit" || cH === 2) {
                        b9();
                        aA[cG] = cI
                    } else { if (cH === "page" || cH === 3) { bv[cG] = cI } else { if (cH === "event") { bU[cG] = cI } } }
                }
            };
            this.getCustomVariable = function(cG, cH) { var cF; if (!D(cH)) { cH = "visit" } if (cH === "page" || cH === 3) { cF = bv[cG] } else { if (cH === "event") { cF = bU[cG] } else { if (cH === "visit" || cH === 2) { b9();
                            cF = aA[cG] } } } if (!D(cF) || (cF && cF[0] === "")) { return false } return cF };
            this.deleteCustomVariable = function(cF, cG) { if (this.getCustomVariable(cF, cG)) { this.setCustomVariable(cF, "", "", cG) } };
            this.storeCustomVariablesInCookie = function() { bq = true };
            this.setLinkTrackingTimer = function(cF) { bj = cF };
            this.setDownloadExtensions = function(cF) { if (s(cF)) { cF = cF.split("|") } cv = cF };
            this.addDownloadExtensions = function(cG) { var cF; if (s(cG)) { cG = cG.split("|") } for (cF = 0; cF < cG.length; cF++) { cv.push(cG[cF]) } };
            this.removeDownloadExtensions = function(cH) { var cG, cF = []; if (s(cH)) { cH = cH.split("|") } for (cG = 0; cG < cv.length; cG++) { if (G(cH, cv[cG]) === -1) { cF.push(cv[cG]) } } cv = cF };
            this.setDomains = function(cF) {
                al = s(cF) ? [cF] : cF;
                var cJ = false,
                    cH = 0,
                    cG;
                for (cH; cH < al.length; cH++) {
                    cG = String(al[cH]);
                    if (cb(cm, F(cG))) {
                        cJ = true;
                        break
                    }
                    var cI = bT(cG);
                    if (cI && cI !== "/" && cI !== "/*") { cJ = true; break }
                }
                if (!cJ) { al.push(cm) }
            };
            this.setIgnoreClasses = function(cF) { bc = s(cF) ? [cF] : cF };
            this.setRequestMethod = function(cF) { cy = cF || bR };
            this.setRequestContentType = function(cF) { b3 = cF || au };
            this.setReferrerUrl = function(cF) { a2 = cF };
            this.setCustomUrl = function(cF) { aN = bu(bn, cF) };
            this.setDocumentTitle = function(cF) { aY = cF };
            this.setAPIUrl = function(cF) { bi = cF };
            this.setDownloadClasses = function(cF) { bl = s(cF) ? [cF] : cF };
            this.setLinkClasses = function(cF) { aQ = s(cF) ? [cF] : cF };
            this.setCampaignNameKey = function(cF) { bZ = s(cF) ? [cF] : cF };
            this.setCampaignKeywordKey = function(cF) { bh = s(cF) ? [cF] : cF };
            this.discardHashTag = function(cF) { bp = cF };
            this.setCookieNamePrefix = function(cF) { aZ = cF;
                aA = bw() };
            this.setCookieDomain = function(cF) { var cG = F(cF); if (a9(cG)) { co = cG;
                    aX() } };
            this.setCookiePath = function(cF) { a4 = cF;
                aX() };
            this.setVisitorCookieTimeout = function(cF) { ce = cF * 1000 };
            this.setSessionCookieTimeout = function(cF) { bX = cF * 1000 };
            this.setReferralCookieTimeout = function(cF) { cu = cF * 1000 };
            this.setConversionAttributionFirstReferrer = function(cF) {
                a8 = cF
            };
            this.disableCookies = function() { a0 = true;
                cw.cookie = "0"; if (bF) { aq() } };
            this.deleteCookies = function() { aq() };
            this.setDoNotTrack = function(cG) { var cF = f.doNotTrack || f.msDoNotTrack;
                ci = cG && (cF === "yes" || cF === "1"); if (ci) { this.disableCookies() } };
            this.addListener = function(cG, cF) { ah(cG, cF) };
            this.enableLinkTracking = function(cF) { cx = true;
                bQ(function() { m(function() { be(cF) }) }) };
            this.enableJSErrorTracking = function() { if (ck) { return } ck = true; var cF = N.onerror;
                N.onerror = function(cK, cI, cH, cJ, cG) { bQ(function() { var cL = "JavaScript Errors"; var cM = cI + ":" + cH; if (cJ) { cM += ":" + cJ } ak(cL, cM, cK) }); if (cF) { return cF(cK, cI, cH, cJ, cG) } return false } };
            this.disablePerformanceTracking = function() { aL = false };
            this.setGenerationTimeMs = function(cF) { bV = parseInt(cF, 10) };
            this.enableHeartBeatTimer = function(cF) { cF = Math.max(cF, 1);
                aO = (cF || 15) * 1000; if (cp !== null) { cD() } };
            this.disableHeartBeatTimer = function() {
                bk();
                if (aO || ay) {
                    if (N.removeEventListener) { N.removeEventListener("focus", aS, true);
                        N.removeEventListener("blur", am, true) } else {
                        if (N.detachEvent) {
                            N.detachEvent("onfocus", aS);
                            N.detachEvent("onblur", am)
                        }
                    }
                }
                aO = null;
                ay = false
            };
            this.killFrame = function() { if (N.location !== N.top.location) { N.top.location = N.location } };
            this.redirectFile = function(cF) { if (N.location.protocol === "file:") { N.location = cF } };
            this.setCountPreRendered = function(cF) { aV = cF };
            this.trackGoal = function(cF, cH, cG) { bQ(function() { cl(cF, cH, cG) }) };
            this.trackLink = function(cG, cF, cI, cH) { bQ(function() { cs(cG, cF, cI, cH) }) };
            this.trackPageView = function(cF, cH, cG) { bJ = []; if (H(bF)) { bQ(function() { S(ap, bi, bF) }) } else { bQ(function() { bz(cF, cH, cG) }) } };
            this.trackAllContentImpressions = function() { if (H(bF)) { return } bQ(function() { m(function() { var cF = r.findContentNodes(); var cG = b6(cF);
                        cC(cG, bj) }) }) };
            this.trackVisibleContentImpressions = function(cF, cG) { if (H(bF)) { return } if (!D(cF)) { cF = true } if (!D(cG)) { cG = 750 } aC(cF, cG, this);
                bQ(function() { j(function() { var cH = r.findContentNodes(); var cI = aR(cH);
                        cC(cI, bj) }) }) };
            this.trackContentImpression = function(cH, cF, cG) {
                if (H(bF)) { return }
                if (!cH) { return } cF = cF || "Unknown";
                bQ(function() { var cI = ar(cH, cF, cG);
                    bg(cI, bj) })
            };
            this.trackContentImpressionsWithinNode = function(cF) { if (H(bF) || !cF) { return } bQ(function() { if (bO) { j(function() { var cG = r.findContentNodesWithinNode(cF); var cH = aR(cG);
                            cC(cH, bj) }) } else { m(function() { var cG = r.findContentNodesWithinNode(cF); var cH = b6(cG);
                            cC(cH, bj) }) } }) };
            this.trackContentInteraction = function(cH, cI, cF, cG) { if (H(bF)) { return } if (!cH || !cI) { return } cF = cF || "Unknown";
                bQ(function() { var cJ = az(cH, cI, cF, cG);
                    bg(cJ, bj) }) };
            this.trackContentInteractionNode = function(cG, cF) { if (H(bF) || !cG) { return } bQ(function() { var cH = cA(cG, cF);
                    bg(cH, bj) }) };
            this.logAllContentBlocksOnPage = function() { var cG = r.findContentNodes(); var cF = r.collectContent(cG); if (console !== undefined && console && console.log) { console.log(cF) } };
            this.trackEvent = function(cG, cI, cF, cH, cK, cJ) { bQ(function() { ak(cG, cI, cF, cH, cK, cJ) }) };
            this.trackSiteSearch = function(cF, cH, cG, cI) { bQ(function() { bI(cF, cH, cG, cI) }) };
            this.setEcommerceView = function(cI, cF, cH, cG) {
                if (!D(cH) || !cH.length) { cH = "" } else { if (cH instanceof Array) { cH = JSON_PIWIK.stringify(cH) } } bv[5] = ["_pkc", cH];
                if (D(cG) && String(cG).length) { bv[2] = ["_pkp", cG] }
                if ((!D(cI) || !cI.length) && (!D(cF) || !cF.length)) { return }
                if (D(cI) && cI.length) { bv[3] = ["_pks", cI] }
                if (!D(cF) || !cF.length) { cF = "" } bv[4] = ["_pkn", cF]
            };
            this.addEcommerceItem = function(cJ, cF, cH, cG, cI) { if (cJ.length) { cr[cJ] = [cJ, cF, cH, cG, cI] } };
            this.trackEcommerceOrder = function(cF, cJ, cI, cH, cG, cK) { by(cF, cJ, cI, cH, cG, cK) };
            this.trackEcommerceCartUpdate = function(cF) { a6(cF) };
            this.trackRequest = function(cF, cH, cG) { bQ(function() { var cI = b0(cF, cH);
                    bg(cI, bj, cG) }) };
            d.trigger("TrackerSetup", [this])
        }

        function B() { return { push: X } }

        function b(ak, aj) {
            var al = {};
            var ah, ai;
            for (ah = 0; ah < aj.length; ah++) {
                var af = aj[ah];
                al[af] = 1;
                for (ai = 0; ai < ak.length; ai++) {
                    if (ak[ai] && ak[ai][0]) {
                        var ag = ak[ai][0];
                        if (af === ag) {
                            X(ak[ai]);
                            delete ak[ai];
                            if (al[ag] > 1) {
                                ab("The method " + ag + ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers')
                            }
                            al[ag]++
                        }
                    }
                }
            }
            return ak
        }
        var x = ["addTracker", "disableCookies", "setTrackerUrl", "setAPIUrl", "setCookiePath", "setCookieDomain", "setDomains", "setUserId", "setSiteId", "enableLinkTracking"];

        function V(af, ah) { var ag = new K(af, ah);
            C.push(ag);
            _paq = b(_paq, x); for (z = 0; z < _paq.length; z++) { if (_paq[z]) { X(_paq[z]) } } _paq = new B(); return ag } ae(N, "beforeunload", Z, false);
        Date.prototype.getTimeAlias = Date.prototype.getTime;
        d = {
            initialized: false,
            JSON: JSON_PIWIK,
            DOM: { addEventListener: function(ai, ah, ag, af) { var aj = typeof af; if (aj === "undefined") { af = false } ae(ai, ah, ag, af) }, onLoad: j, onReady: m },
            on: function(ag, af) { if (!t[ag]) { t[ag] = [] } t[ag].push(af) },
            off: function(ah, ag) { if (!t[ah]) { return } var af = 0; for (af; af < t[ah].length; af++) { if (t[ah][af] === ag) { t[ah].splice(af, 1) } } },
            trigger: function(ah, ai, ag) { if (!t[ah]) { return } var af = 0; for (af; af < t[ah].length; af++) { t[ah][af].apply(ag || N, ai) } },
            addPlugin: function(af, ag) { a[af] = ag },
            getTracker: function(af, ag) {
                if (!D(ag)) { ag = this.getAsyncTracker().getSiteId() }
                if (!D(af)) {
                    af = this.getAsyncTracker().getTrackerUrl()
                }
                return new K(af, ag)
            },
            getAsyncTrackers: function() { return C },
            addTracker: function(af, ag) { if (!C.length) { V(af, ag) } else { C[0].addTracker(af, ag) } },
            getAsyncTracker: function(ag, aj) { var ai; if (C && C.length && C[0]) { ai = C[0] } else { return V(ag, aj) } if (!aj && !ag) { return ai } if ((!D(aj) || null === aj) && ai) { aj = ai.getSiteId() } if ((!D(ag) || null === ag) && ai) { ag = ai.getTrackerUrl() } var ah, af = 0; for (af; af < C.length; af++) { ah = C[af]; if (ah && String(ah.getSiteId()) === String(aj) && ah.getTrackerUrl() === ag) { return ah } } },
            retryMissedPluginCalls: function() { var ag = Y;
                Y = []; var af = 0; for (af; af < ag.length; af++) { X(ag[af]) } }
        };
        if (typeof define === "function" && define.amd) { define("piwik", [], function() { return d }) }
        return d
    }());
    /*!!! pluginTrackerHook */
}(function() {
    function b() { if ("object" !== typeof _paq) { return false } var c = typeof _paq.length; if ("undefined" === c) { return false } return !!_paq.length }
    if (window && "object" === typeof window.piwikPluginAsyncInit && window.piwikPluginAsyncInit.length) {
        var a = 0;
        for (a; a < window.piwikPluginAsyncInit.length; a++) {
            if (typeof window.piwikPluginAsyncInit[a] === "function") {
                window.piwikPluginAsyncInit[a]()
            }
        }
    }
    if (window && window.piwikAsyncInit) { window.piwikAsyncInit() }
    if (!window.Piwik.getAsyncTrackers().length) { if (b()) { window.Piwik.addTracker() } else { _paq = { push: function(c) { if (console !== undefined && console && console.error) { console.error("_paq.push() was used but Piwik tracker was not initialized before the piwik.js file was loaded. Make sure to configure the tracker via _paq.push before loading piwik.js. Alternatively, you can create a tracker via Piwik.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.", c) } } } } } window.Piwik.trigger("PiwikInitialized", []);
    window.Piwik.initialized = true
}());
(function() { var a = (typeof AnalyticsTracker); if (a === "undefined") { AnalyticsTracker = window.Piwik } }());
if (typeof piwik_log !== "function") {
    piwik_log = function(b, f, d, g) {
        function a(h) { try { if (window["piwik_" + h]) { return window["piwik_" + h] } } catch (i) {} return }
        var c, e = window.Piwik.getTracker(d, f);
        e.setDocumentTitle(b);
        e.setCustomData(g);
        c = a("tracker_pause");
        if (c) { e.setLinkTrackingTimer(c) } c = a("download_extensions");
        if (c) { e.setDownloadExtensions(c) } c = a("hosts_alias");
        if (c) { e.setDomains(c) } c = a("ignore_classes");
        if (c) { e.setIgnoreClasses(c) } e.trackPageView();
        if (a("install_tracker")) { piwik_track = function(i, k, j, h) { e.setSiteId(k);
                e.setTrackerUrl(j);
                e.trackLink(i, h) };
            e.enableLinkTracking() }
    };
    /*!! @license-end */
};