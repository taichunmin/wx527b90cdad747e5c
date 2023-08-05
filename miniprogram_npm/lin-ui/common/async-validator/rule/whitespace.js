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
    var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if (Object.prototype.hasOwnProperty.call(e, u)) {
        var f = o ? Object.getOwnPropertyDescriptor(e, u) : null;
        f && (f.get || f.set) ? Object.defineProperty(n, u, f) : n[u] = e[u];
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

var r = function(t, r, n, o, u) {
    (/^\s+$/.test(r) || "" === r) && o.push(e.format(u.messages.whitespace, t.fullField));
};

exports.default = r;