Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = function(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
        default: e
    };
    var n = t(r);
    if (n && n.has(e)) return n.get(e);
    var a = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in e) if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
        var u = p ? Object.getOwnPropertyDescriptor(e, o) : null;
        u && (u.get || u.set) ? Object.defineProperty(a, o, u) : a[o] = e[o];
    }
    a.default = e, n && n.set(e, a);
    return a;
}(require("../util"));

function t(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), n = new WeakMap();
    return (t = function(e) {
        return e ? n : r;
    })(e);
}

exports.default = function(t, r, n, a, p) {
    t.pattern && (t.pattern instanceof RegExp ? (t.pattern.lastIndex = 0, t.pattern.test(r) || a.push(e.format(p.messages.pattern.mismatch, t.fullField, r, t.pattern))) : "string" == typeof t.pattern && (new RegExp(t.pattern.replace(/^\/|\/$/g, "")).test(r) || a.push(e.format(p.messages.pattern.mismatch, t.fullField, r, t.pattern))));
};