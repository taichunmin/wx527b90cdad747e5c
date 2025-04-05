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
    var u = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var f in e) if ("default" !== f && Object.prototype.hasOwnProperty.call(e, f)) {
        var a = o ? Object.getOwnPropertyDescriptor(e, f) : null;
        a && (a.get || a.set) ? Object.defineProperty(u, f, a) : u[f] = e[f];
    }
    u.default = e, n && n.set(e, u);
    return u;
}(require("../util"));

function t(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), n = new WeakMap();
    return (t = function(e) {
        return e ? n : r;
    })(e);
}

exports.default = function(t, r, n, u, o) {
    (/^\s+$/.test(r) || "" === r) && u.push(e.format(o.messages.whitespace, t.fullField));
};