Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = function(e) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
        default: e
    };
    var r = t();
    if (r && r.has(e)) return r.get(e);
    var n = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var p in e) if (Object.prototype.hasOwnProperty.call(e, p)) {
        var o = a ? Object.getOwnPropertyDescriptor(e, p) : null;
        o && (o.get || o.set) ? Object.defineProperty(n, p, o) : n[p] = e[p];
    }
    n.default = e, r && r.set(e, n);
    return n;
}(require("../util"));

function t() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return t = function() {
        return e;
    }, e;
}

var r = function(t, r, n, a, p) {
    t.pattern && (t.pattern instanceof RegExp ? (t.pattern.lastIndex = 0, t.pattern.test(r) || a.push(e.format(p.messages.pattern.mismatch, t.fullField, r, t.pattern))) : "string" == typeof t.pattern && (new RegExp(t.pattern.replace(/^\/|\/$/g, "")).test(r) || a.push(e.format(p.messages.pattern.mismatch, t.fullField, r, t.pattern))));
};

exports.default = r;