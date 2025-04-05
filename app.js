App({
    globalData: {},
    onLaunch: function() {
        console.log("小程序开始"), console.log("开始登录");
        var e = !1, o = 0;
        !function a() {
            e = !1, wx.login({
                success: function(o) {
                    e = !0, console.log("登录成功:", o), wx.request({
                        url: "https://newapi.nshome.cn:3001/auth/wechat-mini-program",
                        method: "POST",
                        data: {
                            code: o.code
                        },
                        success: function(e) {
                            getApp().globalData.token = e.data.token, getApp().globalData.isLoggedIn = !0, e.data.device.length > 0 && (getApp().globalData.deviceId = e.data.device[0].deviceid, 
                            getApp().globalData.devicetype = e.data.device[0].type, getApp().globalData.device = e.data.device[0]);
                        },
                        fail: function(e) {
                            console.log("登录接口失败" + e);
                        }
                    });
                },
                fail: function(o) {
                    e = !0, console.error("登录失败:", o);
                },
                complete: function() {
                    !e && o < 20 ? (console.warn("登录未执行 success 或 fail，正在重试..."), o++, setTimeout(function() {
                        a();
                    }, 100)) : o >= 20 && console.error("已达到最大重试次数，登录仍未执行 success 或 fail");
                }
            });
        }();
    }
});