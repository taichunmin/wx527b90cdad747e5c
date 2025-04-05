Page({
    data: {
        txt: "写入数据失败"
    },
    onLoad: function(n) {
        this.setData({
            txt: n.txt
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    view: function() {
        wx.navigateTo({
            url: "/pages/lanyaok/nochangjian"
        });
    }
});