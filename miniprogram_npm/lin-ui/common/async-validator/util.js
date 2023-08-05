Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.asyncMap = function(t, r, n, o) {
    if (r.first) return e(function(t) {
        const e = [];
        return Object.keys(t).forEach(r => {
            e.push.apply(e, t[r]);
        }), e;
    }(t), n, o);
    let s = r.firstFields || [];
    !0 === s && (s = Object.keys(t));
    const i = Object.keys(t), c = i.length;
    let u = 0;
    const f = [], l = t => {
        f.push.apply(f, t), u++, u === c && o(f);
    };
    i.forEach(r => {
        const o = t[r];
        -1 !== s.indexOf(r) ? e(o, n, l) : function(t, e, r) {
            const n = [];
            let o = 0;
            const s = t.length;
            function i(t) {
                n.push.apply(n, t), o++, o === s && r(n);
            }
            t.forEach(t => {
                e(t, i);
            });
        }(o, n, l);
    });
}, exports.complementError = function(t) {
    return e => e && e.message ? (e.field = e.field || t.fullField, e) : {
        message: e,
        field: e.field || t.fullField
    };
}, exports.deepMerge = function(t, e) {
    if (e) for (const r in e) if (e.hasOwnProperty(r)) {
        const n = e[r];
        "object" == typeof n && "object" == typeof t[r] ? t[r] = {
            ...t[r],
            ...n
        } : t[r] = n;
    }
    return t;
}, exports.format = function(...e) {
    let r = 1;
    const n = e[0], o = e.length;
    if ("function" == typeof n) return n.apply(null, e.slice(1));
    if ("string" == typeof n) {
        let s = String(n).replace(t, t => {
            if ("%%" === t) return "%";
            if (r >= o) return t;
            switch (t) {
              case "%s":
                return String(e[r++]);

              case "%d":
                return Number(e[r++]);

              case "%j":
                try {
                    return JSON.stringify(e[r++]);
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return "[Circular]";
                }

              default:
                return t;
            }
        });
        for (let t = e[r]; r < o; t = e[++r]) s += " " + t;
        return s;
    }
    return n;
}, exports.isEmptyObject = function(t) {
    return 0 === Object.keys(t).length;
}, exports.isEmptyValue = function(t, e) {
    return null == t || !("array" !== e || !Array.isArray(t) || t.length) || !(!function(t) {
        return "string" === t || "url" === t || "hex" === t || "email" === t || "pattern" === t;
    }(e) || "string" != typeof t || t);
}, exports.warning = void 0;

const t = /%[sdj%]/g;

function e(t, e, r) {
    let n = 0;
    const o = t.length;
    !function s(i) {
        if (i && i.length) return void r(i);
        const c = n;
        n += 1, c < o ? e(t[c], s) : r([]);
    }([]);
}

exports.warning = (() => {});