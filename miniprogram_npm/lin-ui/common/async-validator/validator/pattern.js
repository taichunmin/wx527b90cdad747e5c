Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, r = (e = require("../rule/index.js")) && e.__esModule ? e : {
    default: e
}, t = require("../util");

var u = function(e, u, i, d, s) {
    const l = [];
    if (e.required || !e.required && d.hasOwnProperty(e.field)) {
        if ((0, t.isEmptyValue)(u, "string") && !e.required) return i();
        r.default.required(e, u, d, l, s), (0, t.isEmptyValue)(u, "string") || r.default.pattern(e, u, d, l, s);
    }
    i(l);
};

exports.default = u;