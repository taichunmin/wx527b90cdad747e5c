Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = function(e) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
        default: e
    };
    var t = r();
    if (t && t.has(e)) return t.get(e);
    var n = {}, u = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
        var l = u ? Object.getOwnPropertyDescriptor(e, a) : null;
        l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a];
    }
    n.default = e, t && t.set(e, n);
    return n;
}(require("../util"));

function r() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return r = function() {
        return e;
    }, e;
}

var t = function(r, t, n, u, a) {
    const l = "number" == typeof r.len, o = "number" == typeof r.min, f = "number" == typeof r.max;
    let i = t, s = null;
    const p = "number" == typeof t, m = "string" == typeof t, c = Array.isArray(t);
    if (p ? s = "number" : m ? s = "string" : c && (s = "array"), !s) return !1;
    c && (i = t.length), m && (i = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length), 
    l ? i !== r.len && u.push(e.format(a.messages[s].len, r.fullField, r.len)) : o && !f && i < r.min ? u.push(e.format(a.messages[s].min, r.fullField, r.min)) : f && !o && i > r.max ? u.push(e.format(a.messages[s].max, r.fullField, r.max)) : o && f && (i < r.min || i > r.max) && u.push(e.format(a.messages[s].range, r.fullField, r.min, r.max));
};

exports.default = t;