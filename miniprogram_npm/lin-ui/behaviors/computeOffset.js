Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = Behavior({
    behaviors: [],
    properties: {},
    data: {
        distance: 0
    },
    attached() {
        this.offsetMargin();
    },
    methods: {
        offsetMargin() {
            const {windowHeight: e, screenHeight: t} = wx.getSystemInfoSync();
            this.setData({
                distance: t - e
            });
        }
    }
});

exports.default = e;