Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, r = (e = require("../rule/index.js")) && e.__esModule ? e : {
    default: e
}, t = require("../util");

exports.default = function(e, u, i, d, a) {
    var l = [];
    if (e.required || !e.required && d.hasOwnProperty(e.field)) {
        if ((0, t.isEmptyValue)(u) && !e.required) return i();
        var f;
        if (r.default.required(e, u, d, l, a), !(0, t.isEmptyValue)(u)) f = "number" == typeof u ? new Date(u) : u, 
        r.default.type(e, f, d, l, a), f && r.default.range(e, f.getTime(), d, l, a);
    }
    i(l);
};