Page({
    data: {
        amiibo: {},
        deviceId: "",
        show_load: !1,
        id: "",
        gameid: "",
        jiangliid: "",
        name: "",
        type: "",
        tishi: !0,
        imgurls: []
    },
    onLoad: function(e) {
        var t = this;
        this.setData({
            gameid: e.gameid,
            jiangliid: e.jiangliid,
            name: e.name
        }), void 0 !== getApp().globalData.deviceId && (this.data.deviceId = getApp().globalData.deviceId), 
        wx.request({
            url: "https://newapi.nshome.cn:3001/game/amiibo/" + e.id + "?v=20230528",
            success: function(a) {
                var i = [];
                if (a.data.amiiboImages.length > 0) for (var n = 0; n < a.data.amiiboImages.length; n++) i.push("https://newapi.nshome.cn:3001/image/diao/" + a.data.amiiboImages[n].imageUrl + "?v=20230528");
                t.setData({
                    amiibo: a.data,
                    id: e.id,
                    imgurls: i
                });
            },
            fail: function(e) {
                console.error(e);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {
        this.setData({
            show_load: !1
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    hexStrToDecArray: function(e) {
        for (var t = e.split(" "), a = [], i = 0; i < t.length; i++) a.push(parseInt(t[i], 16));
        return this.arrayTo16Array(a);
    },
    arrayTo16Array: function(e) {
        e.length;
        for (var t = 16 * parseInt((e.length - 1) / 16) + 16, a = e.length; a < t; a++) e[a] = 0;
        return e;
    },
    strSplittoArray: function(e, t) {
        e = e.split("");
        for (var a = []; 0 != e.length; ) a.push(e.splice(0, t).join(""));
        return a;
    },
    int8parse: function(e) {
        for (var t = require("crypto-js"), a = e.length, i = [], n = 0; n < a; n++) i[n >>> 2] |= (255 & e[n]) << 24 - n % 4 * 8;
        return t.lib.WordArray.create(i, a);
    },
    AESEncrypt: function(e, t) {
        var a = this.hexStrToDecArray(e), i = this.int8parse(a), n = require("crypto-js"), r = n.AES.encrypt(i, this.aesKeyBytes(t), {
            mode: n.mode.ECB,
            padding: n.pad.NoPadding
        });
        return this.wordArrayToHexStr(r.ciphertext.words);
    },
    AESDecrypt: function(e) {
        e = this.buf2hex(e);
        var t = parseInt(e[3], 16), a = [ 75, 71, 70, 95, 65, 77, 73, 76, 7, 231, 4, 6, 10, 42, parseInt(e[0], 16), parseInt(e[1], 16) ], i = this.hexStrToDecArray(e.slice(4).join(" ")), n = this.int8parse(i), r = require("crypto-js"), o = r.enc.Base64.stringify(n), c = r.AES.decrypt(o, this.aesKeyBytes(a), {
            mode: r.mode.ECB,
            padding: r.pad.NoPadding
        });
        return this.wordArrayToHexStr(c.words).split(" ").slice(0, t);
    },
    aesKeyBytes: function(e) {
        var t = new Int8Array(e);
        return this.int8parse(t);
    },
    wordArrayToHexStr: function(e) {
        for (var t = "", a = 0; a < e.length; a++) {
            var i = e[a];
            i < 0 && (i = e[a] + 4294967296);
            var n = i.toString(16).toUpperCase(), r = n;
            if (n.length < 8) for (var o = 0; o < 8 - n.length; o++) r = "0" + r;
            t += r;
        }
        var c = "";
        for (a = 0; a < t.length; a += 2) c = c + t.substr(a, 2) + " ";
        return c.substr(0, c.length - 1);
    },
    write: function(e) {
        console.log(getApp().globalData.device), void 0 !== getApp().globalData.deviceId && getApp().globalData.device.daoban ? (console.log("跳转盗版用户"), 
        wx.navigateTo({
            url: "/pages/shebei/daoban"
        })) : (this.setData({
            show_load: !0
        }), this.chushi_lanya());
    },
    lanya_write: function() {
        var e = this, t = this.data.amiibo.amiiboData.data, a = 0, i = 0, n = 0, r = this.data.deviceId, o = "6E400001-B5A3-F393-E0A9-E50E24DCCA9E";
        wx.createBLEConnection({
            deviceId: r,
            success: function() {
                wx.getBLEDeviceServices({
                    deviceId: r,
                    success: function(c) {
                        wx.getBLEDeviceCharacteristics({
                            deviceId: r,
                            serviceId: o,
                            success: function(c) {
                                wx.notifyBLECharacteristicValueChange({
                                    deviceId: r,
                                    serviceId: o,
                                    characteristicId: "6E400003-B5A3-F393-E0A9-E50E24DCCA9E",
                                    state: !0,
                                    fail: function(e) {
                                        console.log("执行notifyBLECharacteristicValueChange失败", e), wx.closeBLEConnection({
                                            deviceId: r,
                                            success: function(e) {
                                                console.log("关闭蓝牙成功", e);
                                            },
                                            complete: function(e) {
                                                wx.navigateTo({
                                                    url: "/pages/lanyaok/shouhou"
                                                });
                                            }
                                        });
                                    }
                                }), wx.onBLECharacteristicValueChange(function(o) {
                                    console.log("收到订阅", o);
                                    var c = e.buf2hex(o.value);
                                    if ("kou2" == getApp().globalData.devicetype && ((c = e.AESDecrypt(o.value))[0] = c[0].toLowerCase(), 
                                    c[1] = c[1].toLowerCase()), console.log("返回数据", c), "b0" != c[0] || "a0" != c[1]) {
                                        if ("ca" != c[0] || "ca" != c[1]) return "ba" == c[0] && "ba" == c[1] ? (n = a + 300 < t.length ? 300 : t.length - a, 
                                        e.writeBLECharacteristicValue("ddaa00" + (n / 2).toString(16) + t.substring(a, n + a) + "000" + i), 
                                        i++, void (a += 300)) : void ("aa" != c[0] || "dd" != c[1] ? "cb" != c[0] || "cb" != c[1] ? "dd" != c[0] || "cc" != c[1] ? "dd" != c[0] || "bc" != c[1] ? "cb" != c[0] || "a1" != c[1] ? "cb" != c[0] || "bc" != c[1] || console.log("无效文件,数据没有发完整，请重试") : console.log("无效文件") : console.log("升级失败") : wx.closeBLEConnection({
                                            deviceId: r,
                                            success: function(e) {
                                                console.log("关闭蓝牙成功", e), wx.navigateTo({
                                                    url: "/pages/lanyaok/lanyaok"
                                                });
                                            }
                                        }) : e.writeBLECharacteristicValue("ccdd") : a < t.length ? (n = a + 300 < t.length ? 300 : t.length - a, 
                                        e.writeBLECharacteristicValue("ddaa00" + (n / 2).toString(16) + t.substring(a, n + a) + "000" + i), 
                                        i++, a += 300) : e.writeBLECharacteristicValue("bcbc"));
                                        e.writeBLECharacteristicValue("ABAB021c");
                                    } else e.writeBLECharacteristicValue("ACAC00040000021c");
                                }), e.writeBLECharacteristicValue("A0B0");
                            }
                        });
                    }
                });
            },
            fail: function(e) {
                console.log("写入失败", e);
            }
        });
    },
    lanya: function() {
        var e = this;
        wx.onBluetoothDeviceFound(function(t) {
            t.devices.forEach(function(t) {
                if ("amiibolink" == t.name || "amiibobox" == t.name || "nfcbox" == t.name) {
                    var a = "";
                    a = "0000180F" != t.advertisServiceUUIDs[0].slice(0, 8) ? "kou" : "kou2", wx.stopBluetoothDevicesDiscovery(), 
                    e.data.deviceId = t.deviceId, getApp().globalData.deviceId = e.data.deviceId, getApp().globalData.devicetype = a, 
                    wx.request({
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
                        success: function(e) {
                            console.log(e.data);
                        },
                        fail: function(e) {
                            console.error(e);
                        }
                    }), e.lanya_write();
                }
            });
        });
    },
    chushi_lanya: function() {
        var e = this;
        wx.openBluetoothAdapter({
            mode: "central",
            success: function(t) {
                console.log("开始扫描蓝牙"), wx.startBluetoothDevicesDiscovery({
                    allowDuplicatesKey: !1
                }), "" == e.data.deviceId ? e.lanya() : e.lanya_write();
            },
            fail: function(e) {
                console.log("初始化蓝牙失败", e);
                var t = "小程序无法启用蓝牙，请检查微信权限及手机设置";
                if (1500102 === e.errno && (t = "微信无法使用蓝牙，请到手机系统设置中启用蓝牙"), 1509008 === e.errno && (t = "微信没有【位置信息】权限，请在手机设置中将微信权限选择允许位置信息"), 
                1509001 === e.errno && (t = "没有搜索到亲的智能扣，请确保已经按下按钮，指示灯是闪烁状态。"), 103 === e.errno) return t = "亲没有授权小程序蓝牙权限", 
                void wx.openSetting({
                    success: function(e) {
                        console.log(e.authSetting);
                    }
                });
                wx.navigateTo({
                    url: "/pages/lanyaok/lanyano?txt=" + t
                });
            }
        });
    },
    buf2hex: function(e) {
        var t = Array.from(new Uint8Array(e)).map(function(e) {
            return ("00" + e.toString(16)).slice(-2);
        }), a = [];
        return t.forEach(function(e) {
            return a.push(e);
        }), a;
    },
    buf2string: function(e) {
        for (var t = Array.from(new Uint8Array(e)).map(function(e) {
            return e;
        }), a = "", i = 0; i < t.length; i++) a += String.fromCharCode(t[i]);
        return a;
    },
    writeBLECharacteristicValue: function(e) {
        "kou2" == getApp().globalData.devicetype ? this.write_new(e) : this.write_old(e);
    },
    write_old: function(e) {
        for (var t = this.data.deviceId, a = e.length / 2, i = new ArrayBuffer(a), n = new DataView(i), r = 0; r < a; r++) n.setUint8(r, parseInt("0X" + e.substring(2 * r, 2 * r + 2), 16));
        wx.writeBLECharacteristicValue({
            deviceId: t,
            serviceId: "6E400001-B5A3-F393-E0A9-E50E24DCCA9E",
            characteristicId: "6E400002-B5A3-F393-E0A9-E50E24DCCA9E",
            value: i,
            success: function(e) {},
            fail: function(e) {
                console.log("写入数据失败", e.errMsg, e.errCode);
            }
        });
    },
    write_new: function(e) {
        var t = this, a = e.length / 2, i = +(100 * Math.random()).toFixed(), n = +(100 * Math.random()).toFixed(), r = (e = e.length > 32 ? (e = this.strSplittoArray(e, 32)).map(function(e) {
            return t.AESEncrypt(t.strSplittoArray(e, 2).join(" "), [ 75, 71, 70, 95, 65, 77, 73, 76, 7, 231, 4, 6, 10, 42, i, n ]);
        }) : [ this.AESEncrypt(this.strSplittoArray(e, 2).join(" "), [ 75, 71, 70, 95, 65, 77, 73, 76, 7, 231, 4, 6, 10, 42, i, n ]) ]).join(" ").split(" ");
        e = i.toString(16).padStart(2, 0) + n.toString(16).padStart(2, 0) + r.length.toString(16).padStart(2, 0) + a.toString(16).padStart(2, 0) + r.join("");
        for (var o = this.data.deviceId, c = e.length / 2, s = new ArrayBuffer(c), l = new DataView(s), d = 0; d < c; d++) l.setUint8(d, parseInt("0X" + e.substring(2 * d, 2 * d + 2), 16));
        wx.writeBLECharacteristicValue({
            deviceId: o,
            serviceId: "6E400001-B5A3-F393-E0A9-E50E24DCCA9E",
            characteristicId: "6E400002-B5A3-F393-E0A9-E50E24DCCA9E",
            value: s,
            success: function(e) {},
            fail: function(e) {
                console.log("写入数据失败", e.errMsg, e.errCode);
            }
        });
    },
    changjian: function(e) {
        wx.navigateTo({
            url: "/pages/lanyaok/nochangjian"
        });
    }
});