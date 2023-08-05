Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = new class {
    async getNodeRectFromComponent(e, t) {
        return await new Promise(r => {
            e.createSelectorQuery().select(t).boundingClientRect(e => {
                r(e);
            }).exec();
        });
    }
    async getNodesRectFromComponent(e, t) {
        return await new Promise(r => {
            e.createSelectorQuery().selectAll(t).boundingClientRect(e => {
                r(e);
            }).exec();
        });
    }
    async getNodeFieldsFromComponent(e, t, r) {
        return await new Promise(o => {
            e.createSelectorQuery().select(t).fields(r, e => {
                o(e);
            }).exec();
        });
    }
}();

exports.default = e;