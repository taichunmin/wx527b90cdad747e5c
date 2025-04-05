Page({
    data: {
        id: ""
    },
    dianpu: function() {
        wx.navigateTo({
            url: "/pages/taobao/taobao"
        });
    },
    onLoad: function() {
        this.setData({
            id: getApp().globalData.device.id
        }), wx.lin.initValidateForm(this);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    submit: function(t) {
        var e = this, a = t.detail.values.duihuanma;
        "" == a ? wx.showToast({
            title: "请输入激活码",
            icon: "none",
            duration: 2e3
        }) : (console.log("用兑换码请求服务器", a), wx.request({
            url: "https://newapi.nshome.cn:3001/game/redeem-code-daoban",
            method: "POST",
            header: {
                "content-type": "application/json",
                Authorization: "Bearer " + getApp().globalData.token
            },
            data: {
                code: a
            },
            success: function(t) {
                console.log(t.statusCode), 200 === t.statusCode ? (wx.showToast({
                    title: "设备激活成功！",
                    icon: "success",
                    duration: 2e3
                }), getApp().globalData.msg = "设备激活成功", e.shuaxin()) : wx.showToast({
                    title: t.data.message,
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "请求失败，请稍后重试",
                    icon: "none",
                    duration: 2e3
                }), console.error("请求失败:", t);
            }
        }));
    },
    shuaxin: function() {
        var t = this;
        !function e() {
            if (getApp().globalData.isLoggedIn) {
                var a = getApp().globalData.token;
                wx.request({
                    url: "https://newapi.nshome.cn:3001/game/devices",
                    header: {
                        "content-type": "application/json",
                        Authorization: "Bearer " + a
                    },
                    success: function(t) {
                        t.data.length > 0 && (getApp().globalData.deviceId = t.data[0].deviceid, getApp().globalData.devicetype = t.data[0].type, 
                        getApp().globalData.device = t.data[0]), wx.navigateBack({
                            delta: 1
                        });
                    },
                    complete: function(t) {}
                });
            } else t.setData({}), setTimeout(e, 100);
        }();
    }
});