var e, t = (e = require("../behaviors/validator")) && e.__esModule ? e : {
    default: e
};

Component({
    externalClasses: [ "l-class", "l-loading-class", "l-end-class", "l-line-class" ],
    options: {
        multipleSlots: !0
    },
    behaviors: [ t.default ],
    properties: {
        show: Boolean,
        custom: Boolean,
        line: Boolean,
        color: String,
        size: {
            type: String,
            value: "28"
        },
        type: {
            type: String,
            value: "loading",
            options: [ "loading", "end" ]
        },
        endText: {
            type: String,
            value: "我是有底线的~"
        },
        loadingText: {
            type: String,
            value: "加载中..."
        }
    },
    data: {},
    attached() {
        this._init();
    },
    pageLifetimes: {
        show() {
            this._init();
        }
    },
    methods: {
        _init() {
            wx.lin = wx.lin || {}, wx.lin.showLoadmore = (e => {
                const {custom: t = !1, line: o = !1, color: i = "", size: l = "28", type: s = "loading", endText: a = "我是有底线的", loadingText: n = "加载中..."} = {
                    ...e
                };
                this.setData({
                    custom: t,
                    line: o,
                    color: i,
                    size: l,
                    type: s,
                    endText: a,
                    loadingText: n,
                    show: !0
                });
            }), wx.lin.hideLoadmore = (() => {
                this.setData({
                    show: !1
                });
            });
        },
        onLoadmore() {
            this.triggerEvent("lintap", {}, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});