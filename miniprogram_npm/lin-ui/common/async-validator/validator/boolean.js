Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, r = require("../util"), u = (e = require("../rule/index.js")) && e.__esModule ? e : {
    default: e
};

exports.default = function(e, t, i, d, l) {
    var a = [];
    if (e.required || !e.required && d.hasOwnProperty(e.field)) {
        if ((0, r.isEmptyValue)(t) && !e.required) return i();
        u.default.required(e, t, d, a, l), void 0 !== t && u.default.type(e, t, d, a, l);
    }
    i(a);
};