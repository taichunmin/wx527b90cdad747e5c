var e, t = (e = require("../../04743C238E96EFDF62125424FC6E7963.js")) && e.__esModule ? e : {
    default: e
};

Page({
    data: {
        list: t.default,
        device: [],
        load: !1,
        del_show: !1
    },
    onLoad: function() {},
    onReady: function() {
        this.shuaxin();
    },
    shuaxin: function() {
        var e = this;
        !function t() {
            if (getApp().globalData.isLoggedIn) {
                var a = getApp().globalData.token;
                wx.request({
                    url: "https://newapi.nshome.cn:3001/game/devices",
                    header: {
                        "content-type": "application/json",
                        Authorization: "Bearer " + a
                    },
                    success: function(t) {
                        e.setData({
                            device: t.data
                        }), t.data.length > 0 && (getApp().globalData.deviceId = t.data[0].deviceid, getApp().globalData.devicetype = t.data[0].type, 
                        getApp().globalData.device = t.data[0]);
                    },
                    complete: function(e) {}
                });
            } else e.setData({}), setTimeout(t, 100);
        }();
    },
    onShow: function() {
        getApp().globalData.msg && getApp().globalData.msg.length > 1 && (wx.showToast({
            title: getApp().globalData.msg,
            icon: "success",
            duration: 2e3
        }), delete getApp().globalData.msg, this.shuaxin());
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    lanya: function() {
        var e = this;
        this.setData({
            load: !0
        }), wx.onBluetoothDeviceFound(function(t) {
            t.devices.forEach(function(t) {
                if (console.log("Device Found", t), "amiibolink" == t.name || "amiibobox" == t.name || "nfcbox" == t.name) {
                    console.log(t.name, "uuid", t.advertisServiceUUIDs[0]);
                    var a = "";
                    a = "0000180F" != t.advertisServiceUUIDs[0].slice(0, 8) ? "kou" : "kou2", wx.stopBluetoothDevicesDiscovery(), 
                    getApp().globalData.deviceId = t.deviceId, getApp().globalData.devicetype = a, wx.request({
                        url: "https://newapi.nshome.cn:3001/game/device/new",
                        method: "POST",
                        header: {
                            "content-type": "application/json",
                            Authorization: "Bearer " + getApp().globalData.token
                        },
                        data: {
                            deviceid: t.deviceId,
                            name: t.name,
                            type: a
                        },
                        success: function(t) {
                            console.log(t.data), e.setData({
                                load: !1
                            }), e.shuaxin();
                        },
                        fail: function(e) {
                            console.error(e);
                        }
                    });
                }
            });
        }), wx.openBluetoothAdapter({
            mode: "central",
            success: function(e) {
                wx.startBluetoothDevicesDiscovery({
                    allowDuplicatesKey: !1
                });
            },
            fail: function(t) {
                var a = "小程序无法启用蓝牙，请检查微信权限及手机设置";
                if (1500102 === t.errno && (a = "微信无法使用蓝牙，请到手机系统设置中启用蓝牙"), 1509008 === t.errno && (a = "微信没有【位置信息】权限，请在手机设置中将微信权限选择允许位置信息"), 
                1509001 === t.errno && (a = "没有搜索到亲的智能扣，请确保已经按下按钮，指示灯是闪烁状态。"), 103 === t.errno) return a = "亲没有授权小程序蓝牙权限", 
                void wx.openSetting({
                    success: function(e) {
                        console.log(e.authSetting);
                    }
                });
                wx.navigateTo({
                    url: "/pages/lanyaok/lanyano?txt=" + a
                }), e.setData({
                    load: !1
                });
            }
        });
    },
    quxiao: function() {
        this.setData({
            load: !1
        }), wx.stopBluetoothDevicesDiscovery();
    },
    del_show_btn: function() {
        this.setData({
            del_show: !0
        });
    },
    onConfirmTap: function(e) {
        var t = this;
        wx.request({
            url: "https://newapi.nshome.cn:3001/game/device/del/" + e.target.dataset.id,
            method: "GET",
            header: {
                "content-type": "application/json",
                Authorization: "Bearer " + getApp().globalData.token
            },
            data: {
                deviceid: e.target.dataset.id
            },
            success: function(e) {
                delete getApp().globalData.deviceId, delete getApp().globalData.devicetype, console.log(e.data), 
                t.setData({
                    del_show: !1
                }), t.shuaxin();
            },
            fail: function(e) {
                console.error(e);
            }
        });
    },
    dianpu: function(e) {
        wx.navigateTo({
            url: "/pages/shebei/dianpu"
        });
    },
    changjian: function(e) {
        wx.navigateTo({
            url: "/pages/lanyaok/nochangjian"
        });
    }
});