Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

exports.default = Behavior({
    behaviors: [],
    properties: {},
    data: {
        distance: 0
    },
    attached: function() {
        this.offsetMargin();
    },
    methods: {
        offsetMargin: function() {
            var e = wx.getSystemInfoSync(), t = e.windowHeight, s = e.screenHeight;
            this.setData({
                distance: s - t
            });
        }
    }
});