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
        var i = o ? Object.getOwnPropertyDescriptor(e, f) : null;
        i && (i.get || i.set) ? Object.defineProperty(u, f, i) : u[f] = e[f];
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

exports.default = function(t, r, n, u, o, f) {
    !t.required || n.hasOwnProperty(t.field) && !e.isEmptyValue(r, f || t.type) || u.push(e.format(o.messages.required, t.fullField));
};