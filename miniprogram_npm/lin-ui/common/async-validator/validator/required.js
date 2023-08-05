Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, r = (e = require("../rule/index.js")) && e.__esModule ? e : {
    default: e
};

var t = function(e, t, u, a, d) {
    const o = [], s = Array.isArray(t) ? "array" : typeof t;
    r.default.required(e, t, a, o, d, s), u(o);
};

exports.default = t;