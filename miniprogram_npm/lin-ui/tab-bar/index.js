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
        parseCurrentPage: function() {
            for (var e, a = "/" + getCurrentPages()[0].route, i = this.data.list, r = 0; r < i.length; r++) if (i[r].pagePath === a) {
                e = r;
                break;
            }
            if (void 0 !== e) {
                this.setData({
                    selectedIndex: e
                });
                var n = this.data.list[e];
                t.default.emit(this, "linchange", {
                    index: e,
                    item: n
                });
            }
        },
        onTapItem: function(e) {
            var a = e.currentTarget.dataset.index, i = this.data.list[a].pagePath;
            t.default.emit(this, "lintap", {
                index: a,
                item: this.data.list[a]
            }), i && wx.switchTab({
                url: i,
                fail: function() {
                    wx.navigateTo({
                        url: i,
                        fail: function(e) {
                            console.warn("路由跳转错误，错误信息为：", e);
                        }
                    });
                }
            });
        }
    }
});