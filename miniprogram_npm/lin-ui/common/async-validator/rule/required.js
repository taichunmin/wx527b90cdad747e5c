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
    var n = {}, u = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
        var i = u ? Object.getOwnPropertyDescriptor(e, o) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o];
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

var r = function(t, r, n, u, o, i) {
    !t.required || n.hasOwnProperty(t.field) && !e.isEmptyValue(r, i || t.type) || u.push(e.format(o.messages.required, t.fullField));
};

exports.default = r;