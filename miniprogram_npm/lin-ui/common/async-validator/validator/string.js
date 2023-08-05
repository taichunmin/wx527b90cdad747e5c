Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, r = (e = require("../rule/index.js")) && e.__esModule ? e : {
    default: e
}, t = require("../util");

var u = function(e, u, i, a, d) {
    const s = [];
    if (e.required || !e.required && a.hasOwnProperty(e.field)) {
        if ((0, t.isEmptyValue)(u, "string") && !e.required) return i();
        r.default.required(e, u, a, s, d, "string"), (0, t.isEmptyValue)(u, "string") || (r.default.type(e, u, a, s, d), 
        r.default.range(e, u, a, s, d), r.default.pattern(e, u, a, s, d), !0 === e.whitespace && r.default.whitespace(e, u, a, s, d));
    }
    i(s);
};

exports.default = u;