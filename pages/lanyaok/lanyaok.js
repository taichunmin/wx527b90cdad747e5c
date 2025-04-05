Page({
    data: {},
    onLoad: function() {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    lintap: function() {
        console.log("点击了按钮"), wx.switchTab({
            url: "/pages/game/game"
        });
    }
});