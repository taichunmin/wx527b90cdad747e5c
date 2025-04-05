Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, r = (e = require("../rule/index.js")) && e.__esModule ? e : {
    default: e
}, t = require("../util");

exports.default = function(e, u, i, d, l) {
    var s = [];
    if (e.required || !e.required && d.hasOwnProperty(e.field)) {
        if ((0, t.isEmptyValue)(u, "string") && !e.required) return i();
        r.default.required(e, u, d, s, l), (0, t.isEmptyValue)(u, "string") || r.default.pattern(e, u, d, s, l);
    }
    i(s);
};