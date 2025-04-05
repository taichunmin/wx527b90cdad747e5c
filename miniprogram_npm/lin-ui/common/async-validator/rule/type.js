Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, t = require("../../../../../@babel/runtime/helpers/typeof"), r = function(e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
        default: e
    };
    var r = u(t);
    if (r && r.has(e)) return r.get(e);
    var n = {}, f = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e) if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
        var o = f ? Object.getOwnPropertyDescriptor(e, a) : null;
        o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a];
    }
    n.default = e, r && r.set(e, n);
    return n;
}(require("../util")), n = (e = require("./required")) && e.__esModule ? e : {
    default: e
};

function u(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(), r = new WeakMap();
    return (u = function(e) {
        return e ? r : t;
    })(e);
}

var f = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, a = {
    integer: function(e) {
        return a.number(e) && parseInt(e, 10) === e;
    },
    float: function(e) {
        return a.number(e) && !a.integer(e);
    },
    array: function(e) {
        return Array.isArray(e);
    },
    regexp: function(e) {
        if (e instanceof RegExp) return !0;
        try {
            return !!new RegExp(e);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return !1;
        }
    },
    date: function(e) {
        return "function" == typeof e.getTime && "function" == typeof e.getMonth && "function" == typeof e.getYear;
    },
    number: function(e) {
        return !isNaN(e) && "" !== e;
    },
    object: function(e) {
        return "object" == t(e) && !a.array(e);
    },
    method: function(e) {
        return "function" == typeof e;
    },
    email: function(e) {
        return "string" == typeof e && !!e.match(f.email) && e.length < 255;
    },
    url: function(e) {
        return "string" == typeof e && !!e.match(f.url);
    },
    hex: function(e) {
        return "string" == typeof e && !!e.match(f.hex);
    }
};

exports.default = function(e, u, f, o, i) {
    if (e.required && void 0 === u) (0, n.default)(e, u, f, o, i); else {
        var p = e.type;
        [ "integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex" ].indexOf(p) > -1 ? a[p](u) || o.push(r.format(i.messages.types[p], e.fullField, e.type)) : p && t(u) !== e.type && o.push(r.format(i.messages.types[p], e.fullField, e.type));
    }
};