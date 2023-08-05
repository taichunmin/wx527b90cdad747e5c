var e, t = (e = require("../core/utils/event-util")) && e.__esModule ? e : {
    default: e
};

Component({
    properties: {
        bgColor: {
            type: String,
            value: null
        },
        bgImg: {
            type: String,
            value: null
        },
        selectedIndex: {
            type: Number,
            value: 0
        },
        list: {
            type: Array,
            value: []
        },
        textSelectedColor: {
            type: String,
            value: ""
        },
        textColor: {
            type: String,
            value: "#666"
        }
    },
    pageLifetimes: {
        show: function() {
            this.parseCurrentPage();
        }
    },
    methods: {
        parseCurrentPage() {
            const e = "/" + getCurrentPages()[0].route, a = this.data.list;
            let i;
            for (let t = 0; t < a.length; t++) if (a[t].pagePath === e) {
                i = t;
                break;
            }
            if (void 0 === i) return;
            this.setData({
                selectedIndex: i
            });
            const l = this.data.list[i];
            t.default.emit(this, "linchange", {
                index: i,
                item: l
            });
        },
        onTapItem(e) {
            const a = e.currentTarget.dataset.index, i = this.data.list[a].pagePath;
            t.default.emit(this, "lintap", {
                index: a,
                item: this.data.list[a]
            }), i && wx.switchTab({
                url: i,
                fail() {
                    wx.navigateTo({
                        url: i,
                        fail(e) {
                            console.warn("路由跳转错误，错误信息为：", e);
                        }
                    });
                }
            });
        }
    }
});