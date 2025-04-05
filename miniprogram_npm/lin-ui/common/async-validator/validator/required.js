Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, r = require("../../../../../@babel/runtime/helpers/typeof"), t = (e = require("../rule/index.js")) && e.__esModule ? e : {
    default: e
};

exports.default = function(e, u, a, d, i) {
    var l = [], s = Array.isArray(u) ? "array" : r(u);
    t.default.required(e, u, d, l, i, s), a(l);
};