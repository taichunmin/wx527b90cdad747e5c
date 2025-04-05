Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, r = (e = require("../rule/index.js")) && e.__esModule ? e : {
    default: e
}, t = require("../util");

exports.default = function(e, u, i, a, d) {
    var l = [];
    if (e.required || !e.required && a.hasOwnProperty(e.field)) {
        if ((0, t.isEmptyValue)(u, "string") && !e.required) return i();
        r.default.required(e, u, a, l, d, "string"), (0, t.isEmptyValue)(u, "string") || (r.default.type(e, u, a, l, d), 
        r.default.range(e, u, a, l, d), r.default.pattern(e, u, a, l, d), !0 === e.whitespace && r.default.whitespace(e, u, a, l, d));
    }
    i(l);
};