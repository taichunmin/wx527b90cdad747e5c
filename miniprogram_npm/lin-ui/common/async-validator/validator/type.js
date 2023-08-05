Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, r = (e = require("../rule/index.js")) && e.__esModule ? e : {
    default: e
}, t = require("../util");

var u = function(e, u, i, d, l) {
    const s = e.type, a = [];
    if (e.required || !e.required && d.hasOwnProperty(e.field)) {
        if ((0, t.isEmptyValue)(u, s) && !e.required) return i();
        r.default.required(e, u, d, a, l, s), (0, t.isEmptyValue)(u, s) || r.default.type(e, u, d, a, l);
    }
    i(a);
};

exports.default = u;