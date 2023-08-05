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
    for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
        var f = u ? Object.getOwnPropertyDescriptor(e, o) : null;
        f && (f.get || f.set) ? Object.defineProperty(n, o, f) : n[o] = e[o];
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

var t = function(r, t, n, u, o) {
    r.enum = Array.isArray(r.enum) ? r.enum : [], -1 === r.enum.indexOf(t) && u.push(e.format(o.messages.enum, r.fullField, r.enum.join(", ")));
};

exports.default = t;