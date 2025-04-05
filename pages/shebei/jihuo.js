Page({
    data: {},
    onLoad: function() {
        wx.lin.initValidateForm(this);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    submit: function(o) {
        var n = o.detail.values.duihuanma;
        "" == n ? wx.showToast({
            title: "请输入兑换码",
            icon: "none",
            duration: 2e3
        }) : (console.log("用兑换码请求服务器", n), wx.request({
            url: "https://newapi.nshome.cn:3001/game/redeem-code",
            method: "POST",
            header: {
                "content-type": "application/json",
                Authorization: "Bearer " + getApp().globalData.token
            },
            data: {
                code: n
            },
            success: function(o) {
                console.log(o.statusCode), 200 === o.statusCode ? (getApp().globalData.msg = "延保卡兑换成功", 
                wx.navigateBack({
                    delta: 1
                })) : wx.showToast({
                    title: o.data.message,
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(o) {
                wx.showToast({
                    title: "请求失败，请稍后重试",
                    icon: "none",
                    duration: 2e3
                }), console.error("请求失败:", o);
            }
        }));
    }
});