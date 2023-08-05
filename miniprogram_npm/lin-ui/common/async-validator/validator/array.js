Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, r = (e = require("../rule/index.js")) && e.__esModule ? e : {
    default: e
}, u = require("../util");

var t = function(e, t, a, i, d) {
    const l = [];
    if (e.required || !e.required && i.hasOwnProperty(e.field)) {
        if ((0, u.isEmptyValue)(t, "array") && !e.required) return a();
        r.default.required(e, t, i, l, d, "array"), (0, u.isEmptyValue)(t, "array") || (r.default.type(e, t, i, l, d), 
        r.default.range(e, t, i, l, d));
    }
    a(l);
};

exports.default = t;