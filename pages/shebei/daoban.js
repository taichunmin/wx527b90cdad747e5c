Page({
    data: {
        id: ""
    },
    onLoad() {
        this.setData({
            id: getApp().globalData.device.id
        }), wx.lin.initValidateForm(this);
    },
    onReady() {},
    onShow() {},
    onHide() {},
    onUnload() {},
    onPullDownRefresh() {},
    onReachBottom() {},
    onShareAppMessage() {},
    submit(e) {
        const {detail: t} = e;
        let a = t.values.duihuanma;
        "" == a ? wx.showToast({
            title: "请输入激活码",
            icon: "none",
            duration: 2e3
        }) : (console.log("用兑换码请求服务器", a), wx.request({
            url: "https://www.nshome.cn/game/redeem-code-daoban",
            method: "POST",
            header: {
                "content-type": "application/json",
                Authorization: "Bearer " + getApp().globalData.token
            },
            data: {
                code: a
            },
            success: e => {
                console.log(e.statusCode), 200 === e.statusCode ? (wx.showToast({
                    title: "设备激活成功！",
                    icon: "success",
                    duration: 2e3
                }), getApp().globalData.msg = "设备激活成功", this.shuaxin()) : wx.showToast({
                    title: e.data.message,
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: e => {
                wx.showToast({
                    title: "请求失败，请稍后重试",
                    icon: "none",
                    duration: 2e3
                }), console.error("请求失败:", e);
            }
        }));
    },
    shuaxin() {
        const e = () => {
            if (getApp().globalData.isLoggedIn) {
                const e = getApp().globalData.token;
                wx.request({
                    url: "https://www.nshome.cn/game/devices",
                    header: {
                        "content-type": "application/json",
                        Authorization: "Bearer " + e
                    },
                    success: e => {
                        e.data.length > 0 && (getApp().globalData.deviceId = e.data[0].deviceid, getApp().globalData.devicetype = e.data[0].type, 
                        getApp().globalData.device = e.data[0]), wx.navigateBack({
                            delta: 1
                        });
                    },
                    complete: e => {}
                });
            } else this.setData({}), setTimeout(e, 100);
        };
        e();
    }
});