Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, r = (e = require("../rule/index.js")) && e.__esModule ? e : {
    default: e
}, u = require("../util");

var t = function(e, t, d, i, l) {
    const a = [];
    if (e.required || !e.required && i.hasOwnProperty(e.field)) {
        if ((0, u.isEmptyValue)(t) && !e.required) return d();
        r.default.required(e, t, i, a, l), void 0 !== t && (r.default.type(e, t, i, a, l), 
        r.default.range(e, t, i, a, l));
    }
    d(a);
};

exports.default = t;