Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = function(e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
        default: e
    };
    var n = r(t);
    if (n && n.has(e)) return n.get(e);
    var u = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var l in e) if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
        var f = a ? Object.getOwnPropertyDescriptor(e, l) : null;
        f && (f.get || f.set) ? Object.defineProperty(u, l, f) : u[l] = e[l];
    }
    u.default = e, n && n.set(e, u);
    return u;
}(require("../util"));

function r(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(), n = new WeakMap();
    return (r = function(e) {
        return e ? n : t;
    })(e);
}

exports.default = function(r, t, n, u, a) {
    var l = "number" == typeof r.len, f = "number" == typeof r.min, o = "number" == typeof r.max, i = t, s = null, p = "number" == typeof t, m = "string" == typeof t, c = Array.isArray(t);
    if (p ? s = "number" : m ? s = "string" : c && (s = "array"), !s) return !1;
    c && (i = t.length), m && (i = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length), 
    l ? i !== r.len && u.push(e.format(a.messages[s].len, r.fullField, r.len)) : f && !o && i < r.min ? u.push(e.format(a.messages[s].min, r.fullField, r.min)) : o && !f && i > r.max ? u.push(e.format(a.messages[s].max, r.fullField, r.max)) : f && o && (i < r.min || i > r.max) && u.push(e.format(a.messages[s].range, r.fullField, r.min, r.max));
};