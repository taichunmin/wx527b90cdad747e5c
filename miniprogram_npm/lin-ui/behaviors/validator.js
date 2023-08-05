Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = Behavior({
    definitionFilter(e) {
        const {properties: o} = e;
        Object.keys(o).forEach(e => {
            const {options: t} = o[e];
            t && (o[e].observer = function(o) {
                !t.includes(o) && o && console.error(`${e}: ${o} must be in the [${t}]`);
            });
        });
    }
});

exports.default = e;