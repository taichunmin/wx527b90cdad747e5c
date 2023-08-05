Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, t = function(e) {
    if (e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
        default: e
    };
    var t = f();
    if (t && t.has(e)) return t.get(e);
    var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
        var u = a ? Object.getOwnPropertyDescriptor(e, n) : null;
        u && (u.get || u.set) ? Object.defineProperty(r, n, u) : r[n] = e[n];
    }
    r.default = e, t && t.set(e, r);
    return r;
}(require("../util")), r = (e = require("./required")) && e.__esModule ? e : {
    default: e
};

function f() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return f = function() {
        return e;
    }, e;
}

const a = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, n = {
    integer: e => n.number(e) && parseInt(e, 10) === e,
    float: e => n.number(e) && !n.integer(e),
    array: e => Array.isArray(e),
    regexp(e) {
        if (e instanceof RegExp) return !0;
        try {
            return !!new RegExp(e);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return !1;
        }
    },
    date: e => "function" == typeof e.getTime && "function" == typeof e.getMonth && "function" == typeof e.getYear,
    number: e => !isNaN(e) && "" !== e,
    object: e => "object" == typeof e && !n.array(e),
    method: e => "function" == typeof e,
    email: e => "string" == typeof e && !!e.match(a.email) && e.length < 255,
    url: e => "string" == typeof e && !!e.match(a.url),
    hex: e => "string" == typeof e && !!e.match(a.hex)
};

var u = function(e, f, a, u, o) {
    if (e.required && void 0 === f) return void (0, r.default)(e, f, a, u, o);
    const i = e.type;
    [ "integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex" ].indexOf(i) > -1 ? n[i](f) || u.push(t.format(o.messages.types[i], e.fullField, e.type)) : i && typeof f !== e.type && u.push(t.format(o.messages.types[i], e.fullField, e.type));
};

exports.default = u;