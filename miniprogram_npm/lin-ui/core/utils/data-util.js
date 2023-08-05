Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = new class {
    setDiffData(e, t) {
        const s = {};
        Object.keys(t).forEach(a => {
            e.data[a] !== t[a] && (s[a] = t[a]);
        }), Object.keys(s).length && e.setData(s);
    }
}();

exports.default = e;