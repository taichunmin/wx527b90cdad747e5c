var a, n = (a = require("../../04743C238E96EFDF62125424FC6E7963.js")) && a.__esModule ? a : {
    default: a
};

Page({
    data: {
        list: n.default,
        games: [],
        loadmore: "loading"
    },
    onLoad: function() {},
    onReady: function() {
        var a = this;
        wx.request({
            url: "https://newapi.nshome.cn:3001/game/games",
            success: function(n) {
                a.setData({
                    games: n.data,
                    loadmore: "end"
                });
            }
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    onNaviCard: function(a) {
        var n = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/amiibolist/amiibolist?id=".concat(n)
        });
    }
});