Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, r = (e = require("../rule/index.js")) && e.__esModule ? e : {
    default: e
}, u = require("../util");

var t = function(e, t, i, d, l) {
    const o = [];
    if (e.required || !e.required && d.hasOwnProperty(e.field)) {
        if ((0, u.isEmptyValue)(t) && !e.required) return i();
        r.default.required(e, t, d, o, l), void 0 !== t && r.default.type(e, t, d, o, l);
    }
    i(o);
};

exports.default = t;