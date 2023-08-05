Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, r = (e = require("../rule/index.js")) && e.__esModule ? e : {
    default: e
}, t = require("../util");

var u = function(e, u, i, d, l) {
    const a = [];
    if (e.required || !e.required && d.hasOwnProperty(e.field)) {
        if ((0, t.isEmptyValue)(u) && !e.required) return i();
        if (r.default.required(e, u, d, a, l), !(0, t.isEmptyValue)(u)) {
            let t;
            t = "number" == typeof u ? new Date(u) : u, r.default.type(e, t, d, a, l), t && r.default.range(e, t.getTime(), d, a, l);
        }
    }
    i(a);
};

exports.default = u;